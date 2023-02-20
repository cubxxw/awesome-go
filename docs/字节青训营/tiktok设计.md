# tiktok 设计

[toc]

## 目录

```
件目录说明
tiktok 
├── /config/ 配置文件包
├── /controller/ 控制器包
├── /dao/ 数据库访问
├── /document/ 敏感词词库
├── /images/ 图片引用
├── /middleware/ 中间件
│   ├── ffmpeg/ 视频截图
│   ├── ftp/ 文件服务器
│   ├── jwt/ 鉴权
│   ├── rabbitmq/ 消息队列
│   ├── redis/ 缓存
├── /service/ 服务层
├── /util/ 工具
├── .gitignore
├── /go.mod/
├── LICENSE
├── main.go
├── README.md
├── Makefile
├── Docker
└── router.go
```



## 视频流接口设计

> 要求：不限制登录状态，返回按投稿时间倒序的视频列表，视频数由服务端控制，单次最多30个。
>
> 简单的说：要求**及时的返回热门的，新的视频流。**

### 接口类型

Get

### 接口定义

```ProtoBuf
syntax = "proto2";
package douyin.core

message douyin_feed_request {
    optional int64 latest_time = 1 // 可选参数，限制返回视频的最新投稿时间戳，精确到秒
    optional string token = 2; // 可选参数，登录用户设置
}

message douyin_feed_response {
    required int32 status_code = 1; // 状态码，0-成功，其他值-失败
    optional string status_msg = 2; // 返回状态描述
    repeated Video video_list = 3; // 视频列表
    optional int64 next_time = 4; // 本次返回的视频中，发布最早的时间，作为下次请求的latest_time
} 

message Video {
    required int64 id = 1; // 视频唯一标识
    required User author = 2; // 视频作者信息
    required string play_url = 3; // 视频播放地址
    required string cover_url = 4; // 视频封面地址
    required int64 favorite_count = 5; // 视频点赞总数
    required int64 comment_count = 6; // 视频的评论总数
    required bool is_favorite = 7; // true-已点赞，false-未点赞
    required string title = 8; // 视频标题
}

message User {
    required int64 id = 1 // 用户id
    required string name = 2; // 用户名称
    optional int64 follow_count = 3; // 关注总数
    optional int64 follower_count = 4;数
    required bool is_follow = 5; // true-已关注，false-未关注   
}
```

### 问题分析

+ **推送的视频一定要最新的吗？：**显然不是，可以缓存一些高赞的热门视频信息，每次推送视频时，优先从redis中选取高赞且投稿时间符合的热门视频中选取。
+ **视频流属于高频操作：**用户滑动界面，视频要不停的推送，包括视频文件，元数据信息等，对数据库压力大。
+ **限制返回视频的数量：** 单次<=30个，也不能太少，可以设置5~20个。

### 需求解决方案

> mysql读取速度太慢，redis不适合做元数据的存储，采用MongoDB

1. 将元数据和视频文件分开存储，元数据用MongoDB存储，视频文件存储到文件服务器
2. redis缓存一些高热的视频的发布时间和视频id
3. 如果用户滑动视频滑的飞起，可以加速返回视频，返回5个；刷的慢可以返回20个，15个...看怎么写。

### 具体流程

+ 视频推送逻辑
  + 定时任务
    + 服务端维护一个视频信息池（大于30），按时间顺序排列。
    + 定时去扫描，过期数据持久化到MongoDB里，然后从redis中从最热到最冷，选取相应数量的未过期的数据，按序添加到池里。
  + 客户端返回的latest_time 和 服务端上次的latest_time 进行比较
    + 如果间隔很短，则返回视频数少量，如5
    + 间隔很长，则返回视频数多，如15,20,等。
  + 服务端去池里选取相应视频id
    + 如果足够，则返回结果。
    + 如果不足，说明有很多过期的视频，则通知调度器马上开始扫描，更新池，然后选取，返回。
  + 返回的视频从视频池里持久化到MongoDB
    + 如果池子里不足1/2，则通知调度器该去redis去数据了。
+ 热门视频维护逻辑(热门数据怎么来的？)
  + 定时任务
    + 定时扫描zset，如果有过期数据，持久化。
    + 如果超出容量，通知调度器，马上开始扫描。
    + 如果还是超出容量，扩容1/4，并且将所有zset中选取一半数据持久化(低热的)，如果len < cap/2，则缩容1/4



### 数据库设计

```Go
// mongodb: 
{
        video_id： {
                video_published_time: Video, // Video: 视频元数据
        }
}

// redis
// 热门视频（zset）
favorite_count: {favorite_count, {video_id, video_published_time}} // 根据点赞数排序.
```

### 验收标准——正常场景

```js
{
        "status_code": 0,
        "status_msg": "操作成功",
        "next_time": 视频中投稿时间最早的,
        "video_list": videos,
}
```



### 参考文档

[MongoDB详解，用心看这篇就够了【重点】](https://blog.csdn.net/weixin_42039228/article/details/123657641)



## 用户登录接口 POC 方案

### 版本：v0.1.0

### 名词解析

> 授权：指的是类似 RDBC 类的身份验证
>
> 认证：方式有 Bearer （Tocken）、Basic（用户名密码）、OAuth 等等

### 需求分解

1. 加密需求
   1. 采用安全性强的消息摘要算法进行 Hash
2. 快速响应需求
   1. 加密算法占用时间不应过多
   2. 需要快速查找
   3. 需要快速调用获取 Token 及用户 ID

### 需求解决方案

#### 加密需求

+ 使用 SHA-512 加密密码
+ 使用 MD5 加密用户名

#### 快速响应

问题来到了内部模块 apiserver 中，通信方式是 GRPC

#### 认证信息方面：

+ 直接使用内部模块 负责认证用户名、Token  的 apiserver 模块

### 验收标准——正常场景

#### 用户存在，且密码正确

+ 返回 HTTP 状态码 200 ，status_code 为 0，msg 为空



### 验收标准——异常场景

#### 用户账户不存在

直接报错返回，不进行任何处理

返回HTTP 状态码 200，status_code 为 1 msg 中返回"账户不存在"

#### 密码错误

返回 HTTP 状态码 200,status_code 为 1 ，msg 中返回"密码错误"



## 赞操作

### 问题分析

+ **数据库操作压力大：**该操作数据高频操作，若每次点赞或取消点赞都直接去数据库中操作，会使数据库压力急剧升高
+ **数据库存储压力大：**点赞信息的记录后期数据量会非常大，所以保存点赞信息的表每条记录存储长度要尽可能小



### 需求的解决方案

> 对于数据库操作压力大的情况，可以采用redis做缓存，使用定时任务将redis数据持久化到数据库中
>
> **redis中划分区域**
>
> + 点赞保存操作者id：
>   + 点赞区（set）：video:{{视频id}}:like
>   + 取消点赞区（set）：video:{{视频id}}:dislike
> + 保存个人喜欢列表的视频id
>   + 个人喜欢列表（set）：user:{{用户id}}:like

#### 具体流程

+ 从通过调用登录模块的接口验证token的合法性
+ 点赞逻辑：
  + 在redis的**取消点赞区**中查看是否存在操作者的id：
    1. 若存在，则删除**取消点赞区域**下这个操作者的id
    2. 若不存在，则在**点赞区域**添加这个操作者的id
  + 检查是否存在**点赞持久化定时任务**，若不存在则创建一个
  + 在redis对应的个人喜欢列表里添加一个视频id
+ 取消点赞逻辑：
  + 在redis的**点赞区**查看是否存在操作者的id：
    1. 若存在，则删除**点赞区**下的操作者id
    2. 若不存在，则将操作者id添加到**取消点赞区**
  + 检查是否存在**点赞持久化定时任务**，若不存在则创建一个
  + 在redis对应的个人喜欢列表里删除一个视频id
+ 点赞持久化任务：
  + 任务默认5秒后执行
  + 将redis中所有视频**点赞区**中的操作者id和视频id插入到点赞表中，持久化完成后清除该区域中的内容
  + 将redis中所有视频**取消点赞区**中的操作者id根据视频id从点赞表中删除，持久化完成后清除该区域中的内容

### **验收标准——正常场景**

```json
{    "status_code": 0,    "status_msg": "操作成功" }
```



### **数据库表设计**

> **t_video_like：**视频点赞表

| 列名     | 数据类型     | 备注   |
| -------- | ------------ | ------ |
| id       | int unsigned | 主键   |
| video_id | int unsigned | 视频id |
| user_id  | int unsigned | 用户id |





## 用户注册接口设计

### 版本信息

版本号：v0.1.0

创建日期 ：2023-01-17

### 变更日志

| **时间**   | **版本号** | **变更人** | **主要变更内容** |
| ---------- | ---------- | ---------- | ---------------- |
| 2023-01-17 | v0.1.0     | 张磊军     | 创建文档         |
|            |            |            |                  |
|            |            |            |                  |



### 文档说明

### 名词解释

| **术语 / 缩略词** | **说明**                                                     |
| ----------------- | ------------------------------------------------------------ |
| bcrypt            | Bcrypt是单向Hash加密算法，类似Pbkdf2算法 不可反向破解生成明文。 |
| govalidator       | Validator 是一个 Golang 的第三方库，用于对数据进行校验，常用于 API 的开发中，对客户端发出的请求数据进行严格校验，防止恶意请求。 |
| gin-jwt           | *jwt*-*gin*包提供了一个标准的*Gin*中间件,我们可以在需要验证*JWT*的路由上设置中间件。 |



### 需求设计

### 要求

新用户注册时提供用户名，密码即可，用户名需要保证唯一。创建成功后返回用户 id 和权限token

### 接口类型

**POST**

### 请求路径

**/douyin/user/register/**

### 请求参数

| 参数名   | 位置  | 类型   | 非空 | 说明                     |
| -------- | ----- | ------ | ---- | ------------------------ |
| username | query | string | 是   | 注册用户名，最长32个字符 |
| password | query | string | 是   | 密码，最长32个字符       |

### 需求分解

1. 加密需求
   1. 对用户登录密码核心数据进行加密
2. 输入数据校验
   1. 对输入数据非空，最长32个字符进行校验
   2. 需要快速查找
   3. 需要快速调用获取 Token 及用户 ID
3. 鉴权需求
   1. 根据项目要求，注册后需要生成唯一鉴权Token

### 需求解决方案

1. 加密需求
   1. 使用    bcrypt对用户登录密码进行加密保存
   2. 选用： golang.org/x/crypto/bcrypt
2. 输入数据校验
   1. 使用    govalidator
   2. 选用： github.com/asaskevich/govalidator
3. 鉴权需求
   1. 使用    gin-jwt生成Token
   2. 选用： https://github.com/appleboy/gin-jwt

### 功能详细说明

#### 用户注册流程图

![image-20230117225448264](http://sm.nsddd.top/sm202301172254455.png)

#### 数据库设计

> UserBasic结构体

```Go
type UserBasic struct {
   UserId        uint64 `gorm:"primarykey"`
   UserName      string //`valid:"matches([A-Za-z0-9_\-\u4e00-\u9fa5]\d{2,32}$)"`
   PassWord      string //`valid:"matches([A-Za-z0-9_\-\u4e00-\u9fa5]\d{2,32}$)"`
   Token         string
   LoginTime     time.Time
   LoginOutTime  time.Time `gorm:"column:login_out_time" json:"login_out_time"`
   IsLoginIn     bool      //是否在线
   HeartbeatTime time.Time //心跳检测   
   DeviceInfo    string    //设备信息   备用：后续版本可迭代
}
```

> MySQL

![img](https://rll0wlkrr7.feishu.cn/space/api/box/stream/download/asynccode/?code=NTliYmRkZGVlOGFiNDcxYmMwMzMzY2ZmMzdmZTUwMmVfYmZEazJNUjVseFZVRWdhQjQyQ1VUYXpBN0FFaFVCZ3ZfVG9rZW46Ym94Y25BWmtZZzFjZ2poSEUxNHhQTFBUYnZjXzE2NzM5NjcxMDk6MTY3Mzk3MDcwOV9WNA)

### 验收标准

#### 正常场景

```JSON
{
    "status_code": 0,
    "status_msg": "注册成功",
    "user_id": 123456789,
    "token": dd6e965dd057ae4eb938558ed86aa35cdd6e965dd057ae4eb938558ed86aa35c,
}
```

#### 异常场景

##### 用户名和密码长度错误

```JSON
{
    "status_code": -1,
    "status_msg": "注册失败，用户名和密码2-32个字符，请重新输入",
    "user_id": nil,
    "token": nil,
}
```

##### 用户名已存在

```JSON
{
    "status_code": -1,
    "status_msg": "注册失败，用户名已存在，请重新输入",
    "user_id": nil,
    "token": nil,
}
```

### 参考文档

http://www.javashuo.com/article/p-xxzjrwoa-nw.html



## 视频存储

YouTube后端服务是 python、数据库、Java、Go语言编写的，用户界面JavaScript。

主要的数据库是 [[vitess]] 支撑的 Mysql

> Vitess是一个由Youtube开发的开源的分布式关系型数据库管理系统。它是在MySQL之上构建的，可以提供高可用性和水平扩展能力。Vitess可以将数据水平分片，并通过将查询路由到相应的片来提高性能。它还提供了自动故障转移和数据同步功能，可以确保数据在故障情况下的可用性。
>
> Vitess还提供了一些管理工具，可以帮助用户管理分布式数据库集群，包括自动数据迁移、数据重新平衡和监控等。
>
> Vitess可以在Kubernetes上运行，也可以运行在其他环境中，并且在Youtube、Slack和Airbnb等公司中广泛使用.

![image-20230115205307679](http://sm.nsddd.top/sm202301152053808.png)

**解释一下MySQL的 [[水平扩展]]：**

> MySQL的水平扩展是指通过增加更多的服务器来扩展数据库容量和性能的过程。这种方式可以通过分片数据库来实现，将数据存储在多个服务器上，而不是所有数据都存储在一台服务器上。这样，当数据量增加或读写请求增加时，可以通过增加更多的服务器来满足需求。
>
> MySQL的水平扩展可以通过许多种方式实现，包括：
>
> + 利用MySQL代理和读写分离
> + 使用MySQL集群
> + 使用第三方工具如Vitess，来对MySQL进行水平扩展。
>
> 这些工具可以帮助用户实现数据的水平分片，并通过将查询路由到相应的片来提高性能。同时还能提供自动故障转移和数据同步功能，确保数据在故障情况下的可用性。

Vitess 是云原生的，很适合云中部署，因为就像云的模式一样，容量是逐步添加到数据库的。它可以作为一个Kubernetes 感知（Kubernetes-aware）
的云原生分布式数据库运行。

在 YouTube，Vitess 在容器化环境中运行，并使用Kubernetes作为容器编排工具。



数据存储：YouTube 是如何存储如此巨大的数据量的呢？

> 视频会存储在谷歌数据中心的硬盘中。这些数据由 Google File System 和 BigTable 管理。
>
> GFS Google File System 是谷歌开发的一个分布式文件系统，用于管理分布式环境中的大规模数据。

![image-20230115211150535](http://sm.nsddd.top/sm202301152111662.png)
