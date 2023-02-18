# database design 和 Poc code 阶段

[toc]

## 数据库设计

+ [数据库设计](https://rll0wlkrr7.feishu.cn/docx/XjAndWxOOonDTBxzbE2cciHCnhe)

> MySQL 设计部分已完成

分享一个讨论：https://www.v2ex.com/t/237309

> 我建议逻辑链接吧，虽然外键有约束性，但是逻辑链接感觉更灵活一些

**不用外键~！**



**API 文档中，所有的 Optional 参数都是直接不发的。**

```sql
CREATE TABLE `chats`  (
  `chat_id` bigint NOT NULL,
  `from_user_id` bigint NOT NULL COMMENT '发送消息的用户id',
  `to_user_id` bigint NOT NULL COMMENT '接收消息的用户id',
  `msg_context` varchar(255) NOT NULL COMMENT '发送的消息',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`chat_id`)
);

CREATE TABLE `comments`  (
  `comment_id` bigint NOT NULL COMMENT '评论id',
  `video_id` bigint NOT NULL COMMENT '视频id',
  `user_id` bigint NOT NULL COMMENT '用户id',
  `content` varchar(255) NULL COMMENT '评论内容',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`comment_id`)
);

CREATE TABLE `follows`  (
  `user_id` bigint NOT NULL COMMENT '用户id',
  `follow_id` bigint NOT NULL COMMENT '该用户关注的用户id',
  `is_friend` tinyint NULL COMMENT '0：不是好友，1：是好友',
  PRIMARY KEY (`user_id`, `follow_id`)
);

CREATE TABLE `likes`  (
  `user_id` bigint NOT NULL COMMENT '用户id',
  `video_id` bigint NOT NULL COMMENT '视频id',
  PRIMARY KEY (`user_id`, `video_id`)
);

CREATE TABLE `replies`  (
  `reply_id` bigint NOT NULL COMMENT '回复id',
  `comment_id` bigint NOT NULL COMMENT '评论id',
  `user_id` bigint NOT NULL COMMENT '用户id',
  `content` varchar(255) NULL COMMENT '回复内容',
  `video_id` bigint NOT NULL COMMENT '视频id',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`reply_id`)
);

CREATE TABLE `users`  (
  `user_id` bigint NOT NULL COMMENT '用户id',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
);

CREATE TABLE `videos`  (
  `video_id` bigint NOT NULL COMMENT '视频id',
  `title` varchar(255) NOT NULL COMMENT '视频标题',
  `author_id` bigint NOT NULL COMMENT '作者',
  `play_url` varchar(255) NOT NULL COMMENT '播放URL',
  `cover_url` varchar(255) NOT NULL COMMENT '封面URL',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`video_id`)
);

ALTER TABLE `chats` ADD CONSTRAINT `fromid` FOREIGN KEY (`from_user_id`) REFERENCES `users` (`user_id`);
ALTER TABLE `chats` ADD CONSTRAINT `toid` FOREIGN KEY (`to_user_id`) REFERENCES `users` (`user_id`);
ALTER TABLE `comments` ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `comments` ADD CONSTRAINT `video_id` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `follows` ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `follows` ADD CONSTRAINT `follow_id` FOREIGN KEY (`follow_id`) REFERENCES `users` (`user_id`);
ALTER TABLE `likes` ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `likes` ADD CONSTRAINT `video_id` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `replies` ADD CONSTRAINT `comment_id` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`comment_id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `replies` ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `replies` ADD CONSTRAINT `video_id` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `videos` ADD CONSTRAINT `author_id` FOREIGN KEY (`author_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
```





## 自动化测试

+ Docker 编译（多阶段）+ 运行，API 测试通过 curl
+ Jenkins 定制流程流水线（见 poc 项目下的 JenkinsFile）

基本流程是，大家 push 到远端，Jenkins 针对新提交执行自动化测试并向飞书群【五届 CI 信息】发送处理信息（概要）

如果顺利通过，会向【五届 CI 信息】发送测试通过

如果发生错误（错误信息有两个方向，Docker Log 以及 Jenkins 流水线执行中），收集错误信息及环境信息，自动向 github poc 仓库中新建 issue 并指定负责人为 git 提交的作者

发生错误并新建 Issue 后，Jenkins 会向【五届 CI 信息】发送相关 Issue 地址

这一套下来，目的就是希望大家提交完代码只需要关注一个群【五届 CI 信息】，就能判断自己的提交是否无害

同时，Go 语言部分测试方案为：执行所有单测，并利用 curl 执行某个 api 处理链路上的集成测试

至于最后的系统测试，就需要通过人工操作【抖声】APP 去完成

Go 语言测试工具中断言、Mock 框架与课程所用一致



## 内部需求板块

+ [https://m8x44j2c67.feishu.cn/docx/Ne3WdP1LaoGRfKx5d9ic4hdvnad](https://m8x44j2c67.feishu.cn/docx/Ne3WdP1LaoGRfKx5d9ic4hdvnad)



### Package：认证模块 Apiserver

+ 接收一个待鉴权的 Token ，判断其合法性
+ 需要用户登录后，自己生成一个 Token 并存储到 Redis 中

#### 功能一：提供用户名密码认证

> 可验证用户名是否存在，或者用户名密码是否正确
>
> 传入：(string,string)，用户名、密码
>
> 返回：string, Token，正确值为 uint64 的 string 类型，用户名不存在时返回 "0"，密码错误时返回 "-1"

直接去 MySQL 表中读取数据

由于 username 的 hash 过长不建议全部做成索引，故存在【前缀索引】（选择前 16 位）

MySQL 表设计：

| UserId（主键） | username（索引） | passwd(hash)    | Token |
| -------------- | ---------------- | --------------- | ----- |
| 12345678       | xj8ehjhej...     | 9joihvui80hh... |       |
|                |                  |                 |       |

#### 功能二：提供 Token 认证

> 可验证 Token 是否存在，一般 Token 存在则表示该 Token 有效，也就会返回 true
>
> 传入：string，Token
>
> 返回：bool，表示这个 Token 是否有效

#### 功能三：用户注册

> 传入：

#### 功能四：超时未响应状态

> 这是一个被动状态，本来此模块代码就是无状态的，但如果所有认证服务挂了，表明目前是无法正常处理【用户注册/登录】的
>
> 但是可以让已经登录且拿到 Token 的用户继续使用 APP【只需要 Token 读权限】【不考虑 Token 过期，Token 过期时间是 24 小时】
>
> 我会暴露出一个公有包【Token 读取包】，到时候外部调用者发现超时时，可以自行调用这个包去读 Redis 和 MySQL



#### 不可调用功能一：更新 Token

> 功能二发现 Token 时间已经超 12 小时，生成一个新 Token 给用户

#### 不可调用功能二：生成 Token

> 采用 Mist 薄雾算法



### Token 包

![img](https://m8x44j2c67.feishu.cn/space/api/box/stream/download/asynccode/?code=OTU0MTEzNWU0ZGExNzJiNWViOTMzOWNhZGQ0ZmNlNTZfZGhvWGlQeWVOS3FLb2JFdTFucG9MRzVsMWpOSUJUU01fVG9rZW46Ym94Y25UZE1UbzlFM1JySEpFaGZFSzhYd3NkXzE2NzUyNDE3MzU6MTY3NTI0NTMzNV9WNA)

![img](https://m8x44j2c67.feishu.cn/space/api/box/stream/download/asynccode/?code=NjU1Y2NjNDVjNjJmMWVlYWU2ZmY1ZTM3NmE2NTAyMjRfTVFERVZNQVF0bkdONm43Z1Y3cktLeWQ4SkYwOGhoRm5fVG9rZW46Ym94Y25xOHlDV2c5NGNGZEhFVGc1SEhRWTllXzE2NzUyNDE3MzU6MTY3NTI0NTMzNV9WNA)

### 编码

### 解码

### 用法

+ 编码使用将必须自己创建一个 dou-jwt.

## 参考文档

+ [文件校验中md5 sha-1 sha-256 sha-512 哪种校验方式比较快呢? - 知乎](https://www.zhihu.com/question/50964318)
  + Username 采用 MD5，
  + Passwd 采用 SHA-512 + 原值加盐 + hash 后加盐再 hash
+ [存放密码的正确姿势 —— 安全可靠加密 SHA-256(+Salt) | Yyc‘s Blog](https://www.yyc-blog.cn/blogs/SpringBoot/SHA256_Salt.html)
+ [Mist 薄雾算法](https://github.com/asyncins/mist#mist-薄雾算法)
+ [What is the best MYSQL or Maria DB data type to store JWT token?](https://stackoverflow.com/questions/36639240/what-is-the-best-mysql-or-maria-db-data-type-to-store-jwt-token)



对了，Token 不用自动刷新租期了，APP 端除了 登录 和 注册 这两 API，就没办法传递回 新的 Token 了（绝了），所以 Token 的需求只剩下【往里面放什么东西】这一点了，密码肯定是不能放的

CI 机器人的 Webhook 为：[https://open.feishu.cn/open-apis/bot/v2/hook/57d8243f-a1ca-411c-ac84-665663ef2e93](https://open.feishu.cn/open-apis/bot/v2/hook/57d8243f-a1ca-411c-ac84-665663ef2e93)



### Token

Token 认证，也称为 Bearer Token（Token 令牌）认证，它的实现方案有很多种，我推荐直接使用 JWT Token 方案

这是 JWT Token 的 RFC 文档：https://www.rfc-editor.org/rfc/rfc7519

![image-20230201171528673](http://sm.nsddd.top/sm202302011715954.png)

如果选择 JWT Token 方案，就只需要考虑 Token 各部分需要有什么，同时加密算法选什么

可以考虑使用第三方jwt库：https://github.com/appleboy/gin-jwt



## 目录结构

目录结构为 api 的请求路径 + 版本号目录

**对于用户的登陆视图要求是：目录结构为 api 的请求路径 + 版本号目录**

![image-20230201172242402](C:/Users/smile/AppData/Roaming/Typora/typora-user-images/image-20230201172242402.png)



**我的：**

+ [x] douyin/relation/action/ 用户关注操作
+ [x] douyin/relation/follow/list/ 用户关注列表



**设计：**

```bash
[root@dev poc]# tree 
.
├── douyin
│   └── relation
│       ├── action
│       │   └── v1
│       └── follow
│           └── list
│               └── v1
├── Jenkinsfile
├── Makefile
└── README.md

7 dbasirectories, 3 files
```







