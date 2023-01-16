# tiktok 设计



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
