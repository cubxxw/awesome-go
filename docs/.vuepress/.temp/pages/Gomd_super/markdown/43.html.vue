<template><div><h3 id="_1-1-1-mq-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-1-mq-简介" aria-hidden="true">#</a> 1.1.1. MQ 简介</h3>
<h4 id="简单释义" tabindex="-1"><a class="header-anchor" href="#简单释义" aria-hidden="true">#</a> 简单释义</h4>
<p>消息总线 (Message Queue)，是一种跨进程、异步的通信机制，用于上下游传递消息。由消息系统来确保消息的可靠传递。</p>
<h4 id="背景描述" tabindex="-1"><a class="header-anchor" href="#背景描述" aria-hidden="true">#</a> 背景描述</h4>
<p>当前市面上 mq 的产品很多，比如 RabbitMQ、Kafka、ActiveMQ、ZeroMQ 和阿里巴巴捐献给 Apache 的 RocketMQ。甚至连 redis 这种 NoSQL 都支持 MQ 的功能。</p>
<h4 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h4>
<ul>
<li>上下游逻辑解耦 &amp;&amp; 物理解耦</li>
<li>保证数据最终一致性</li>
<li>广播</li>
<li>错峰流控等等</li>
</ul>
<h3 id="_1-1-2-rabbitmq-的特点" tabindex="-1"><a class="header-anchor" href="#_1-1-2-rabbitmq-的特点" aria-hidden="true">#</a> 1.1.2. RabbitMQ 的特点</h3>
<p>RabbitMQ 是由 Erlang 语言开发的 AMQP 的开源实现。</p>
<p>AMQP：Advanced Message Queue，高级消息队列协议。它是应用层协议的一个开放标准，为面向消息的中间件设计，基于此协议的客户端与消息中间件可传递消息，并不受产品、开发语言灯条件的限制。</p>
<ul>
<li><code v-pre>可靠性(Reliablity)：</code>使用了一些机制来保证可靠性，比如持久化、传输确认、发布确认。</li>
<li><code v-pre>灵活的路由(Flexible Routing)：</code>在消息进入队列之前，通过 Exchange 来路由消息。对于典型的路由功能，Rabbit 已经提供了一些内置的 Exchange 来实现。针对更复杂的路由功能，可以将多个 Exchange 绑定在一起，也通过插件机制实现自己的 Exchange。</li>
<li><code v-pre>消息集群(Clustering)：</code>多个 RabbitMQ 服务器可以组成一个集群，形成一个逻辑 Broker。</li>
<li><code v-pre>高可用(Highly Avaliable Queues)</code>：队列可以在集群中的机器上进行镜像，使得在部分节点出问题的情况下队列仍然可用。</li>
<li><code v-pre>多种协议(Multi-protocol)：</code>支持多种消息队列协议，如 STOMP、MQTT 等。</li>
<li><code v-pre>多种语言客户端(Many Clients)：</code>几乎支持所有常用语言，比如 Java、.NET、Ruby 等。</li>
<li><code v-pre>管理界面(Management UI)</code>：提供了易用的用户界面，使得用户可以监控和管理消息 Broker 的许多方面。</li>
<li><code v-pre>跟踪机制(Tracing)</code>：如果消息异常，RabbitMQ 提供了消息的跟踪机制，使用者可以找出发生了什么。</li>
<li><code v-pre>插件机制(Plugin System)</code>：提供了许多插件，来从多方面进行扩展，也可以编辑自己的插件。</li>
</ul>
<h3 id="_1-1-3-rabbitmq-简单使用" tabindex="-1"><a class="header-anchor" href="#_1-1-3-rabbitmq-简单使用" aria-hidden="true">#</a> 1.1.3. rabbitmq 简单使用</h3>
<p><img src="https://s2.loli.net/2022/04/10/qgzApQZuo5aEhCS.png" alt="img"></p>
<p>所有 MQ 产品从模型抽象来说，都是一样的过程：</p>
<ul>
<li>消费者 (consumer) 订阅某个队列。</li>
<li>生产者 (product) 创建消息，然后发布到队列中(queue)，最终将消息发送到监听的消费者。</li>
</ul>
<p>这只是最简单抽象的描述，具体到 RabbitMQ 则由更详细的概念需要解释。</p>
<p><img src="https://s2.loli.net/2022/04/10/PW9gdYco8qifC7S.png" alt="img"></p>
<ul>
<li><code v-pre>Broker：</code>标识消息队列服务器实体.</li>
<li><code v-pre>Virtual Host：</code>虚拟主机。标识一批交换机、消息队列和相关对象。虚拟主机是共享相同的身份认证和加密环境的独立服务器域。每个 vhost 本质上就是一个 mini 版的 RabbitMQ 服务器，拥有自己的队列、交换器、绑定和权限机制。vhost 是 AMQP 概念的基础，必须在链接时指定，RabbitMQ 默认的 vhost 是 /。</li>
<li><code v-pre>Exchange：</code>交换器，用来接收生产者发送的消息并将这些消息路由给服务器中的队列。</li>
<li><code v-pre>Queue：</code>消息队列，用来保存消息直到发送给消费者。它是消息的容器，也是消息的终点。一个消息可投入一个或多个队列。消息一直在队列里面，等待消费者连接到这个队列将其取走。</li>
<li><code v-pre>Banding：</code>绑定，用于消息队列和交换机之间的关联。一个绑定就是基于路由键将交换机和消息队列连接起来的路由规则，所以可以将交换器理解成一个由绑定构成的路由表。</li>
<li><code v-pre>Channel：</code>信道，多路复用连接中的一条独立的双向数据流通道。新到是建立在真实的 TCP 连接内地虚拟链接，AMQP 命令都是通过新到发出去的，不管是发布消息、订阅队列还是接收消息，这些动作都是通过信道完成。因为对于操作系统来说，建立和销毁 TCP 都是非常昂贵的开销，所以引入了信道的概念，以复用一条 TCP 连接。</li>
<li><code v-pre>Connection：</code>网络连接，比如一个 TCP 连接。</li>
<li><code v-pre>Publisher：</code>消息的生产者，也是一个向交换器发布消息的客户端应用程序。</li>
<li><code v-pre>Consumer：</code>消息的消费者，表示一个从一个消息队列中取得消息的客户端应用程序。</li>
<li><code v-pre>Message：</code>消息，消息是不具名的，它是由消息头和消息体组成。消息体是不透明的，而消息头则是由一系列的可选属性组成，这些属性包括 routing-key(路由键)、priority(优先级)、delivery-mode(消息可能需要持久性存储 [消息的路由模式]) 等。</li>
</ul>
<h3 id="_1-1-4-rabbitmq-的六种工作模式" tabindex="-1"><a class="header-anchor" href="#_1-1-4-rabbitmq-的六种工作模式" aria-hidden="true">#</a> 1.1.4. RabbitMQ 的六种工作模式</h3>
<h4 id="simple-简单模式" tabindex="-1"><a class="header-anchor" href="#simple-简单模式" aria-hidden="true">#</a> simple 简单模式</h4>
<p><img src="https://s2.loli.net/2022/04/10/qgzApQZuo5aEhCS.png" alt="img"></p>
<ul>
<li>消息产生着 § 将消息放入队列</li>
<li>消息的消费者 (consumer) 监听(while) 消息队列, 如果队列中有消息, 就消费掉, 消息被拿走后, 自动从队列中删除(隐患 消息可能没有被消费者正确处理, 已经从队列中消失了, 造成消息的丢失) 应用场景: 聊天(中间有一个过度的服务器; p 端, c 端)</li>
</ul>
<h4 id="work-工作模式-资源的竞争" tabindex="-1"><a class="header-anchor" href="#work-工作模式-资源的竞争" aria-hidden="true">#</a> work 工作模式 (资源的竞争)</h4>
<p><img src="https://s2.loli.net/2022/04/10/eu38KQJ24bWnGsI.jpg" alt="img"></p>
<ul>
<li>消息产生者将消息放入队列消费者可以有多个, 消费者 1, 消费者 2, 同时监听同一个队列, 消息被消费? C1 C2 共同争抢当前的消息队列内容, 谁先拿到谁负责消费消息 (隐患, 高并发情况下, 默认会产生某一个消息被多个消费者共同使用, 可以设置一个开关 (syncronize, 与同步锁的性能不一样) 保证一条消息只能被一个消费者使用)</li>
<li>应用场景: 红包; 大项目中的资源调度 (任务分配系统不需知道哪一个任务执行系统在空闲, 直接将任务扔到消息队列中, 空闲的系统自动争抢)</li>
</ul>
<h4 id="publish-subscribe-发布订阅-共享资源" tabindex="-1"><a class="header-anchor" href="#publish-subscribe-发布订阅-共享资源" aria-hidden="true">#</a> publish/subscribe 发布订阅 (共享资源)</h4>
<p><img src="https://s2.loli.net/2022/04/10/pByLhoERkiSM78l.jpg" alt="img"></p>
<ul>
<li>X 代表交换机 rabbitMQ 内部组件, erlang 消息产生者是代码完成, 代码的执行效率不高, 消息产生者将消息放入交换机, 交换机发布订阅把消息发送到所有消息队列中, 对应消息队列的消费者拿到消息进行消费</li>
<li>相关场景: 邮件群发, 群聊天, 广播 (广告)</li>
</ul>
<h4 id="routing-路由模式" tabindex="-1"><a class="header-anchor" href="#routing-路由模式" aria-hidden="true">#</a> routing 路由模式</h4>
<p><img src="https://www.topgoer.com/static/9.3/4.png" alt="img"></p>
<ul>
<li>消息生产者将消息发送给交换机按照路由判断, 路由是字符串 (info) 当前产生的消息携带路由字符 (对象的方法), 交换机根据路由的 key, 只能匹配上路由 key 对应的消息队列, 对应的消费者才能消费消息;</li>
<li>根据业务功能定义路由字符串</li>
<li>从系统的代码逻辑中获取对应的功能字符串, 将消息任务扔到对应的队列中业务场景: error 通知; EXCEPTION; 错误通知的功能; 传统意义的错误通知; 客户通知; 利用 key 路由, 可以将程序中的错误封装成消息传入到消息队列中, 开发者可以自定义消费者, 实时接收错误;</li>
</ul>
<h4 id="topic-主题模式-路由模式的一种" tabindex="-1"><a class="header-anchor" href="#topic-主题模式-路由模式的一种" aria-hidden="true">#</a> topic 主题模式 (路由模式的一种)</h4>
<p><img src="https://s2.loli.net/2022/04/10/qHPNTDr6FUklQhi.jpg" alt="img"></p>
<ul>
<li>星号井号代表通配符</li>
<li>星号代表多个单词, 井号代表一个单词</li>
<li>路由功能添加模糊匹配</li>
<li>消息产生者产生消息, 把消息交给交换机</li>
<li>交换机根据 key 的规则模糊匹配到对应的队列, 由队列的监听消费者接收消息消费</li>
</ul>
<h4 id="rpc-先不做解释后续补充" tabindex="-1"><a class="header-anchor" href="#rpc-先不做解释后续补充" aria-hidden="true">#</a> RPC (先不做解释后续补充)</h4>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '42.md' style='float:left'>⬆️上一节🔗</a><a href = '44.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


