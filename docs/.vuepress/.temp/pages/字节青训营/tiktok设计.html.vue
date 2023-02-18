<template><div><h1 id="tiktok-设计" tabindex="-1"><a class="header-anchor" href="#tiktok-设计" aria-hidden="true">#</a> tiktok 设计</h1>
<p>[toc]</p>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>件目录说明
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="视频流接口设计" tabindex="-1"><a class="header-anchor" href="#视频流接口设计" aria-hidden="true">#</a> 视频流接口设计</h2>
<blockquote>
<p>要求：不限制登录状态，返回按投稿时间倒序的视频列表，视频数由服务端控制，单次最多30个。</p>
<p>简单的说：要求<strong>及时的返回热门的，新的视频流。</strong></p>
</blockquote>
<h3 id="接口类型" tabindex="-1"><a class="header-anchor" href="#接口类型" aria-hidden="true">#</a> 接口类型</h3>
<p>Get</p>
<h3 id="接口定义" tabindex="-1"><a class="header-anchor" href="#接口定义" aria-hidden="true">#</a> 接口定义</h3>
<div class="language-ProtoBuf ext-ProtoBuf line-numbers-mode"><pre v-pre class="language-ProtoBuf"><code>syntax = &quot;proto2&quot;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3>
<ul>
<li>**推送的视频一定要最新的吗？：**显然不是，可以缓存一些高赞的热门视频信息，每次推送视频时，优先从redis中选取高赞且投稿时间符合的热门视频中选取。</li>
<li>**视频流属于高频操作：**用户滑动界面，视频要不停的推送，包括视频文件，元数据信息等，对数据库压力大。</li>
<li><strong>限制返回视频的数量：</strong> 单次&lt;=30个，也不能太少，可以设置5~20个。</li>
</ul>
<h3 id="需求解决方案" tabindex="-1"><a class="header-anchor" href="#需求解决方案" aria-hidden="true">#</a> 需求解决方案</h3>
<blockquote>
<p>mysql读取速度太慢，redis不适合做元数据的存储，采用MongoDB</p>
</blockquote>
<ol>
<li>将元数据和视频文件分开存储，元数据用MongoDB存储，视频文件存储到文件服务器</li>
<li>redis缓存一些高热的视频的发布时间和视频id</li>
<li>如果用户滑动视频滑的飞起，可以加速返回视频，返回5个；刷的慢可以返回20个，15个...看怎么写。</li>
</ol>
<h3 id="具体流程" tabindex="-1"><a class="header-anchor" href="#具体流程" aria-hidden="true">#</a> 具体流程</h3>
<ul>
<li>视频推送逻辑
<ul>
<li>定时任务
<ul>
<li>服务端维护一个视频信息池（大于30），按时间顺序排列。</li>
<li>定时去扫描，过期数据持久化到MongoDB里，然后从redis中从最热到最冷，选取相应数量的未过期的数据，按序添加到池里。</li>
</ul>
</li>
<li>客户端返回的latest_time 和 服务端上次的latest_time 进行比较
<ul>
<li>如果间隔很短，则返回视频数少量，如5</li>
<li>间隔很长，则返回视频数多，如15,20,等。</li>
</ul>
</li>
<li>服务端去池里选取相应视频id
<ul>
<li>如果足够，则返回结果。</li>
<li>如果不足，说明有很多过期的视频，则通知调度器马上开始扫描，更新池，然后选取，返回。</li>
</ul>
</li>
<li>返回的视频从视频池里持久化到MongoDB
<ul>
<li>如果池子里不足1/2，则通知调度器该去redis去数据了。</li>
</ul>
</li>
</ul>
</li>
<li>热门视频维护逻辑(热门数据怎么来的？)
<ul>
<li>定时任务
<ul>
<li>定时扫描zset，如果有过期数据，持久化。</li>
<li>如果超出容量，通知调度器，马上开始扫描。</li>
<li>如果还是超出容量，扩容1/4，并且将所有zset中选取一半数据持久化(低热的)，如果len &lt; cap/2，则缩容1/4</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计" aria-hidden="true">#</a> 数据库设计</h3>
<div class="language-Go ext-Go line-numbers-mode"><pre v-pre class="language-Go"><code>// mongodb: 
{
        video_id： {
                video_published_time: Video, // Video: 视频元数据
        }
}

// redis
// 热门视频（zset）
favorite_count: {favorite_count, {video_id, video_published_time}} // 根据点赞数排序.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验收标准——正常场景" tabindex="-1"><a class="header-anchor" href="#验收标准——正常场景" aria-hidden="true">#</a> 验收标准——正常场景</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
        <span class="token string-property property">"status_code"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">"status_msg"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"next_time"</span><span class="token operator">:</span> 视频中投稿时间最早的<span class="token punctuation">,</span>
        <span class="token string-property property">"video_list"</span><span class="token operator">:</span> videos<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h3>
<p><a href="https://blog.csdn.net/weixin_42039228/article/details/123657641" target="_blank" rel="noopener noreferrer">MongoDB详解，用心看这篇就够了【重点】<ExternalLinkIcon/></a></p>
<h2 id="用户登录接口-poc-方案" tabindex="-1"><a class="header-anchor" href="#用户登录接口-poc-方案" aria-hidden="true">#</a> 用户登录接口 POC 方案</h2>
<h3 id="版本-v0-1-0" tabindex="-1"><a class="header-anchor" href="#版本-v0-1-0" aria-hidden="true">#</a> 版本：v0.1.0</h3>
<h3 id="名词解析" tabindex="-1"><a class="header-anchor" href="#名词解析" aria-hidden="true">#</a> 名词解析</h3>
<blockquote>
<p>授权：指的是类似 RDBC 类的身份验证</p>
<p>认证：方式有 Bearer （Tocken）、Basic（用户名密码）、OAuth 等等</p>
</blockquote>
<h3 id="需求分解" tabindex="-1"><a class="header-anchor" href="#需求分解" aria-hidden="true">#</a> 需求分解</h3>
<ol>
<li>加密需求
<ol>
<li>采用安全性强的消息摘要算法进行 Hash</li>
</ol>
</li>
<li>快速响应需求
<ol>
<li>加密算法占用时间不应过多</li>
<li>需要快速查找</li>
<li>需要快速调用获取 Token 及用户 ID</li>
</ol>
</li>
</ol>
<h3 id="需求解决方案-1" tabindex="-1"><a class="header-anchor" href="#需求解决方案-1" aria-hidden="true">#</a> 需求解决方案</h3>
<h4 id="加密需求" tabindex="-1"><a class="header-anchor" href="#加密需求" aria-hidden="true">#</a> 加密需求</h4>
<ul>
<li>使用 SHA-512 加密密码</li>
<li>使用 MD5 加密用户名</li>
</ul>
<h4 id="快速响应" tabindex="-1"><a class="header-anchor" href="#快速响应" aria-hidden="true">#</a> 快速响应</h4>
<p>问题来到了内部模块 apiserver 中，通信方式是 GRPC</p>
<h4 id="认证信息方面" tabindex="-1"><a class="header-anchor" href="#认证信息方面" aria-hidden="true">#</a> 认证信息方面：</h4>
<ul>
<li>直接使用内部模块 负责认证用户名、Token  的 apiserver 模块</li>
</ul>
<h3 id="验收标准——正常场景-1" tabindex="-1"><a class="header-anchor" href="#验收标准——正常场景-1" aria-hidden="true">#</a> 验收标准——正常场景</h3>
<h4 id="用户存在-且密码正确" tabindex="-1"><a class="header-anchor" href="#用户存在-且密码正确" aria-hidden="true">#</a> 用户存在，且密码正确</h4>
<ul>
<li>返回 HTTP 状态码 200 ，status_code 为 0，msg 为空</li>
</ul>
<h3 id="验收标准——异常场景" tabindex="-1"><a class="header-anchor" href="#验收标准——异常场景" aria-hidden="true">#</a> 验收标准——异常场景</h3>
<h4 id="用户账户不存在" tabindex="-1"><a class="header-anchor" href="#用户账户不存在" aria-hidden="true">#</a> 用户账户不存在</h4>
<p>直接报错返回，不进行任何处理</p>
<p>返回HTTP 状态码 200，status_code 为 1 msg 中返回&quot;账户不存在&quot;</p>
<h4 id="密码错误" tabindex="-1"><a class="header-anchor" href="#密码错误" aria-hidden="true">#</a> 密码错误</h4>
<p>返回 HTTP 状态码 200,status_code 为 1 ，msg 中返回&quot;密码错误&quot;</p>
<h2 id="赞操作" tabindex="-1"><a class="header-anchor" href="#赞操作" aria-hidden="true">#</a> 赞操作</h2>
<h3 id="问题分析-1" tabindex="-1"><a class="header-anchor" href="#问题分析-1" aria-hidden="true">#</a> 问题分析</h3>
<ul>
<li>**数据库操作压力大：**该操作数据高频操作，若每次点赞或取消点赞都直接去数据库中操作，会使数据库压力急剧升高</li>
<li>**数据库存储压力大：**点赞信息的记录后期数据量会非常大，所以保存点赞信息的表每条记录存储长度要尽可能小</li>
</ul>
<h3 id="需求的解决方案" tabindex="-1"><a class="header-anchor" href="#需求的解决方案" aria-hidden="true">#</a> 需求的解决方案</h3>
<blockquote>
<p>对于数据库操作压力大的情况，可以采用redis做缓存，使用定时任务将redis数据持久化到数据库中</p>
<p><strong>redis中划分区域</strong></p>
<ul>
<li>点赞保存操作者id：
<ul>
<li>点赞区（set）：video:{{视频id}}:like</li>
<li>取消点赞区（set）：video:{{视频id}}:dislike</li>
</ul>
</li>
<li>保存个人喜欢列表的视频id
<ul>
<li>个人喜欢列表（set）：user:{{用户id}}:like</li>
</ul>
</li>
</ul>
</blockquote>
<h4 id="具体流程-1" tabindex="-1"><a class="header-anchor" href="#具体流程-1" aria-hidden="true">#</a> 具体流程</h4>
<ul>
<li>从通过调用登录模块的接口验证token的合法性</li>
<li>点赞逻辑：
<ul>
<li>在redis的<strong>取消点赞区</strong>中查看是否存在操作者的id：
<ol>
<li>若存在，则删除<strong>取消点赞区域</strong>下这个操作者的id</li>
<li>若不存在，则在<strong>点赞区域</strong>添加这个操作者的id</li>
</ol>
</li>
<li>检查是否存在<strong>点赞持久化定时任务</strong>，若不存在则创建一个</li>
<li>在redis对应的个人喜欢列表里添加一个视频id</li>
</ul>
</li>
<li>取消点赞逻辑：
<ul>
<li>在redis的<strong>点赞区</strong>查看是否存在操作者的id：
<ol>
<li>若存在，则删除<strong>点赞区</strong>下的操作者id</li>
<li>若不存在，则将操作者id添加到<strong>取消点赞区</strong></li>
</ol>
</li>
<li>检查是否存在<strong>点赞持久化定时任务</strong>，若不存在则创建一个</li>
<li>在redis对应的个人喜欢列表里删除一个视频id</li>
</ul>
</li>
<li>点赞持久化任务：
<ul>
<li>任务默认5秒后执行</li>
<li>将redis中所有视频<strong>点赞区</strong>中的操作者id和视频id插入到点赞表中，持久化完成后清除该区域中的内容</li>
<li>将redis中所有视频<strong>取消点赞区</strong>中的操作者id根据视频id从点赞表中删除，持久化完成后清除该区域中的内容</li>
</ul>
</li>
</ul>
<h3 id="验收标准——正常场景-2" tabindex="-1"><a class="header-anchor" href="#验收标准——正常场景-2" aria-hidden="true">#</a> <strong>验收标准——正常场景</strong></h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>    <span class="token property">"status_code"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>    <span class="token property">"status_msg"</span><span class="token operator">:</span> <span class="token string">"操作成功"</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据库表设计" tabindex="-1"><a class="header-anchor" href="#数据库表设计" aria-hidden="true">#</a> <strong>数据库表设计</strong></h3>
<blockquote>
<p>**t_video_like：**视频点赞表</p>
</blockquote>
<table>
<thead>
<tr>
<th>列名</th>
<th>数据类型</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>int unsigned</td>
<td>主键</td>
</tr>
<tr>
<td>video_id</td>
<td>int unsigned</td>
<td>视频id</td>
</tr>
<tr>
<td>user_id</td>
<td>int unsigned</td>
<td>用户id</td>
</tr>
</tbody>
</table>
<h2 id="用户注册接口设计" tabindex="-1"><a class="header-anchor" href="#用户注册接口设计" aria-hidden="true">#</a> 用户注册接口设计</h2>
<h3 id="版本信息" tabindex="-1"><a class="header-anchor" href="#版本信息" aria-hidden="true">#</a> 版本信息</h3>
<p>版本号：v0.1.0</p>
<p>创建日期 ：2023-01-17</p>
<h3 id="变更日志" tabindex="-1"><a class="header-anchor" href="#变更日志" aria-hidden="true">#</a> 变更日志</h3>
<table>
<thead>
<tr>
<th><strong>时间</strong></th>
<th><strong>版本号</strong></th>
<th><strong>变更人</strong></th>
<th><strong>主要变更内容</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>2023-01-17</td>
<td>v0.1.0</td>
<td>张磊军</td>
<td>创建文档</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="文档说明" tabindex="-1"><a class="header-anchor" href="#文档说明" aria-hidden="true">#</a> 文档说明</h3>
<h3 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h3>
<table>
<thead>
<tr>
<th><strong>术语 / 缩略词</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>bcrypt</td>
<td>Bcrypt是单向Hash加密算法，类似Pbkdf2算法 不可反向破解生成明文。</td>
</tr>
<tr>
<td>govalidator</td>
<td>Validator 是一个 Golang 的第三方库，用于对数据进行校验，常用于 API 的开发中，对客户端发出的请求数据进行严格校验，防止恶意请求。</td>
</tr>
<tr>
<td>gin-jwt</td>
<td><em>jwt</em>-<em>gin</em>包提供了一个标准的<em>Gin</em>中间件,我们可以在需要验证<em>JWT</em>的路由上设置中间件。</td>
</tr>
</tbody>
</table>
<h3 id="需求设计" tabindex="-1"><a class="header-anchor" href="#需求设计" aria-hidden="true">#</a> 需求设计</h3>
<h3 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h3>
<p>新用户注册时提供用户名，密码即可，用户名需要保证唯一。创建成功后返回用户 id 和权限token</p>
<h3 id="接口类型-1" tabindex="-1"><a class="header-anchor" href="#接口类型-1" aria-hidden="true">#</a> 接口类型</h3>
<p><strong>POST</strong></p>
<h3 id="请求路径" tabindex="-1"><a class="header-anchor" href="#请求路径" aria-hidden="true">#</a> 请求路径</h3>
<p><strong>/douyin/user/register/</strong></p>
<h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h3>
<table>
<thead>
<tr>
<th>参数名</th>
<th>位置</th>
<th>类型</th>
<th>非空</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>username</td>
<td>query</td>
<td>string</td>
<td>是</td>
<td>注册用户名，最长32个字符</td>
</tr>
<tr>
<td>password</td>
<td>query</td>
<td>string</td>
<td>是</td>
<td>密码，最长32个字符</td>
</tr>
</tbody>
</table>
<h3 id="需求分解-1" tabindex="-1"><a class="header-anchor" href="#需求分解-1" aria-hidden="true">#</a> 需求分解</h3>
<ol>
<li>加密需求
<ol>
<li>对用户登录密码核心数据进行加密</li>
</ol>
</li>
<li>输入数据校验
<ol>
<li>对输入数据非空，最长32个字符进行校验</li>
<li>需要快速查找</li>
<li>需要快速调用获取 Token 及用户 ID</li>
</ol>
</li>
<li>鉴权需求
<ol>
<li>根据项目要求，注册后需要生成唯一鉴权Token</li>
</ol>
</li>
</ol>
<h3 id="需求解决方案-2" tabindex="-1"><a class="header-anchor" href="#需求解决方案-2" aria-hidden="true">#</a> 需求解决方案</h3>
<ol>
<li>加密需求
<ol>
<li>使用    bcrypt对用户登录密码进行加密保存</li>
<li>选用： golang.org/x/crypto/bcrypt</li>
</ol>
</li>
<li>输入数据校验
<ol>
<li>使用    govalidator</li>
<li>选用： github.com/asaskevich/govalidator</li>
</ol>
</li>
<li>鉴权需求
<ol>
<li>使用    gin-jwt生成Token</li>
<li>选用： https://github.com/appleboy/gin-jwt</li>
</ol>
</li>
</ol>
<h3 id="功能详细说明" tabindex="-1"><a class="header-anchor" href="#功能详细说明" aria-hidden="true">#</a> 功能详细说明</h3>
<h4 id="用户注册流程图" tabindex="-1"><a class="header-anchor" href="#用户注册流程图" aria-hidden="true">#</a> 用户注册流程图</h4>
<p><img src="http://sm.nsddd.top/sm202301172254455.png" alt="image-20230117225448264"></p>
<h4 id="数据库设计-1" tabindex="-1"><a class="header-anchor" href="#数据库设计-1" aria-hidden="true">#</a> 数据库设计</h4>
<blockquote>
<p>UserBasic结构体</p>
</blockquote>
<div class="language-Go ext-Go line-numbers-mode"><pre v-pre class="language-Go"><code>type UserBasic struct {
   UserId        uint64 `gorm:&quot;primarykey&quot;`
   UserName      string //`valid:&quot;matches([A-Za-z0-9_\-\u4e00-\u9fa5]\d{2,32}$)&quot;`
   PassWord      string //`valid:&quot;matches([A-Za-z0-9_\-\u4e00-\u9fa5]\d{2,32}$)&quot;`
   Token         string
   LoginTime     time.Time
   LoginOutTime  time.Time `gorm:&quot;column:login_out_time&quot; json:&quot;login_out_time&quot;`
   IsLoginIn     bool      //是否在线
   HeartbeatTime time.Time //心跳检测   
   DeviceInfo    string    //设备信息   备用：后续版本可迭代
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>MySQL</p>
</blockquote>
<p><img src="https://rll0wlkrr7.feishu.cn/space/api/box/stream/download/asynccode/?code=NTliYmRkZGVlOGFiNDcxYmMwMzMzY2ZmMzdmZTUwMmVfYmZEazJNUjVseFZVRWdhQjQyQ1VUYXpBN0FFaFVCZ3ZfVG9rZW46Ym94Y25BWmtZZzFjZ2poSEUxNHhQTFBUYnZjXzE2NzM5NjcxMDk6MTY3Mzk3MDcwOV9WNA" alt="img"></p>
<h3 id="验收标准" tabindex="-1"><a class="header-anchor" href="#验收标准" aria-hidden="true">#</a> 验收标准</h3>
<h4 id="正常场景" tabindex="-1"><a class="header-anchor" href="#正常场景" aria-hidden="true">#</a> 正常场景</h4>
<div class="language-JSON ext-JSON line-numbers-mode"><pre v-pre class="language-JSON"><code>{
    &quot;status_code&quot;: 0,
    &quot;status_msg&quot;: &quot;注册成功&quot;,
    &quot;user_id&quot;: 123456789,
    &quot;token&quot;: dd6e965dd057ae4eb938558ed86aa35cdd6e965dd057ae4eb938558ed86aa35c,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="异常场景" tabindex="-1"><a class="header-anchor" href="#异常场景" aria-hidden="true">#</a> 异常场景</h4>
<h5 id="用户名和密码长度错误" tabindex="-1"><a class="header-anchor" href="#用户名和密码长度错误" aria-hidden="true">#</a> 用户名和密码长度错误</h5>
<div class="language-JSON ext-JSON line-numbers-mode"><pre v-pre class="language-JSON"><code>{
    &quot;status_code&quot;: -1,
    &quot;status_msg&quot;: &quot;注册失败，用户名和密码2-32个字符，请重新输入&quot;,
    &quot;user_id&quot;: nil,
    &quot;token&quot;: nil,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="用户名已存在" tabindex="-1"><a class="header-anchor" href="#用户名已存在" aria-hidden="true">#</a> 用户名已存在</h5>
<div class="language-JSON ext-JSON line-numbers-mode"><pre v-pre class="language-JSON"><code>{
    &quot;status_code&quot;: -1,
    &quot;status_msg&quot;: &quot;注册失败，用户名已存在，请重新输入&quot;,
    &quot;user_id&quot;: nil,
    &quot;token&quot;: nil,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考文档-1" tabindex="-1"><a class="header-anchor" href="#参考文档-1" aria-hidden="true">#</a> 参考文档</h3>
<p>http://www.javashuo.com/article/p-xxzjrwoa-nw.html</p>
<h2 id="视频存储" tabindex="-1"><a class="header-anchor" href="#视频存储" aria-hidden="true">#</a> 视频存储</h2>
<p>YouTube后端服务是 python、数据库、Java、Go语言编写的，用户界面JavaScript。</p>
<p>主要的数据库是 [[vitess]] 支撑的 Mysql</p>
<blockquote>
<p>Vitess是一个由Youtube开发的开源的分布式关系型数据库管理系统。它是在MySQL之上构建的，可以提供高可用性和水平扩展能力。Vitess可以将数据水平分片，并通过将查询路由到相应的片来提高性能。它还提供了自动故障转移和数据同步功能，可以确保数据在故障情况下的可用性。</p>
<p>Vitess还提供了一些管理工具，可以帮助用户管理分布式数据库集群，包括自动数据迁移、数据重新平衡和监控等。</p>
<p>Vitess可以在Kubernetes上运行，也可以运行在其他环境中，并且在Youtube、Slack和Airbnb等公司中广泛使用.</p>
</blockquote>
<p><img src="http://sm.nsddd.top/sm202301152053808.png" alt="image-20230115205307679"></p>
<p><strong>解释一下MySQL的 [[水平扩展]]：</strong></p>
<blockquote>
<p>MySQL的水平扩展是指通过增加更多的服务器来扩展数据库容量和性能的过程。这种方式可以通过分片数据库来实现，将数据存储在多个服务器上，而不是所有数据都存储在一台服务器上。这样，当数据量增加或读写请求增加时，可以通过增加更多的服务器来满足需求。</p>
<p>MySQL的水平扩展可以通过许多种方式实现，包括：</p>
<ul>
<li>利用MySQL代理和读写分离</li>
<li>使用MySQL集群</li>
<li>使用第三方工具如Vitess，来对MySQL进行水平扩展。</li>
</ul>
<p>这些工具可以帮助用户实现数据的水平分片，并通过将查询路由到相应的片来提高性能。同时还能提供自动故障转移和数据同步功能，确保数据在故障情况下的可用性。</p>
</blockquote>
<p>Vitess 是云原生的，很适合云中部署，因为就像云的模式一样，容量是逐步添加到数据库的。它可以作为一个Kubernetes 感知（Kubernetes-aware）
的云原生分布式数据库运行。</p>
<p>在 YouTube，Vitess 在容器化环境中运行，并使用Kubernetes作为容器编排工具。</p>
<p>数据存储：YouTube 是如何存储如此巨大的数据量的呢？</p>
<blockquote>
<p>视频会存储在谷歌数据中心的硬盘中。这些数据由 Google File System 和 BigTable 管理。</p>
<p>GFS Google File System 是谷歌开发的一个分布式文件系统，用于管理分布式环境中的大规模数据。</p>
</blockquote>
<p><img src="http://sm.nsddd.top/sm202301152111662.png" alt="image-20230115211150535"></p>
</div></template>


