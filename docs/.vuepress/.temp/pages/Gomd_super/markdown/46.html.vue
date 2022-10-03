<template><div><h1 id="_1-work模式-工作模式-一个消息只能被一个消费者获取" tabindex="-1"><a class="header-anchor" href="#_1-work模式-工作模式-一个消息只能被一个消费者获取" aria-hidden="true">#</a> 1. Work模式（工作模式，一个消息只能被一个消费者获取）</h1>
<p><img src="https://www.topgoer.com/static/9.3/2.png" alt="img"></p>
<ul>
<li>消息产生者将消息放入队列消费者可以有多个,消费者1,消费者2,同时监听同一个队列,消息被消费?C1 C2共同争抢当前的消息队列内容,谁先拿到谁负责消费消息(隐患,高并发情况下,默认会产生某一个消息被多个消费者共同使用,可以设置一个开关(syncronize,与同步锁的性能不一样) 保证一条消息只能被一个消费者使用)</li>
<li>应用场景:红包;大项目中的资源调度(任务分配系统不需知道哪一个任务执行系统在空闲,直接将任务扔到消息队列中,空闲的系统自动争抢)</li>
</ul>
<p>目录结构</p>
<p><img src="https://www.topgoer.com/static/9.3/36.png" alt="img"></p>
<p>kuteng-RabbitMQ</p>
<p>-RabbitMQ</p>
<p>--rabitmq.go //这个是RabbitMQ的封装和Simple模式代码一样</p>
<p>-SimlpePublish</p>
<p>--mainSimlpePublish.go //Publish 先启动</p>
<p>-SimpleRecieve1</p>
<p>--mainSimpleRecieve.go</p>
<p>-SimpleRecieve2</p>
<p>--mainSimpleRecieve.go</p>
<p><strong>注意</strong></p>
<p>Work模式和Simple模式相比代码并没有发生变化只是多了一个消费者</p>
<p>rabitmq.go代码</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> RabbitMQ

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"log"</span>

    <span class="token string">"github.com/streadway/amqp"</span>
<span class="token punctuation">)</span>

<span class="token comment">//连接信息amqp://kuteng:kuteng@127.0.0.1:5672/kuteng这个信息是固定不变的amqp://事固定参数后面两个是用户名密码ip地址端口号Virtual Host</span>
<span class="token keyword">const</span> MQURL <span class="token operator">=</span> <span class="token string">"amqp://kuteng:kuteng@127.0.0.1:5672/kuteng"</span>

<span class="token comment">//rabbitMQ结构体</span>
<span class="token keyword">type</span> RabbitMQ <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    conn    <span class="token operator">*</span>amqp<span class="token punctuation">.</span>Connection
    channel <span class="token operator">*</span>amqp<span class="token punctuation">.</span>Channel
    <span class="token comment">//队列名称</span>
    QueueName <span class="token builtin">string</span>
    <span class="token comment">//交换机名称</span>
    Exchange <span class="token builtin">string</span>
    <span class="token comment">//bind Key 名称</span>
    Key <span class="token builtin">string</span>
    <span class="token comment">//连接信息</span>
    Mqurl <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//创建结构体实例</span>
<span class="token keyword">func</span> <span class="token function">NewRabbitMQ</span><span class="token punctuation">(</span>queueName <span class="token builtin">string</span><span class="token punctuation">,</span> exchange <span class="token builtin">string</span><span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>RabbitMQ <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>RabbitMQ<span class="token punctuation">{</span>QueueName<span class="token punctuation">:</span> queueName<span class="token punctuation">,</span> Exchange<span class="token punctuation">:</span> exchange<span class="token punctuation">,</span> Key<span class="token punctuation">:</span> key<span class="token punctuation">,</span> Mqurl<span class="token punctuation">:</span> MQURL<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//断开channel 和 connection</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">Destory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span>conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//错误处理函数</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">failOnErr</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"%s:%s"</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%s:%s"</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//创建简单模式下RabbitMQ实例</span>
<span class="token keyword">func</span> <span class="token function">NewRabbitMQSimple</span><span class="token punctuation">(</span>queueName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>RabbitMQ <span class="token punctuation">{</span>
    <span class="token comment">//创建RabbitMQ实例</span>
    rabbitmq <span class="token operator">:=</span> <span class="token function">NewRabbitMQ</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> err <span class="token builtin">error</span>
    <span class="token comment">//获取connection</span>
    rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">,</span> err <span class="token operator">=</span> amqp<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>rabbitmq<span class="token punctuation">.</span>Mqurl<span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"failed to connect rabb"</span><span class="token operator">+</span>
        <span class="token string">"itmq!"</span><span class="token punctuation">)</span>
    <span class="token comment">//获取channel</span>
    rabbitmq<span class="token punctuation">.</span>channel<span class="token punctuation">,</span> err <span class="token operator">=</span> rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">.</span><span class="token function">Channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"failed to open a channel"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> rabbitmq
<span class="token punctuation">}</span>

<span class="token comment">//直接模式队列生产</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">PublishSimple</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.申请队列，如果队列不存在会自动创建，存在则跳过创建</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>QueueName<span class="token punctuation">,</span>
        <span class="token comment">//是否持久化</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//是否自动删除</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//是否具有排他性</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//是否阻塞处理</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//额外的属性</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//调用channel 发送消息到队列中</span>
    r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        r<span class="token punctuation">.</span>QueueName<span class="token punctuation">,</span>
        <span class="token comment">//如果为true，根据自身exchange类型和routekey规则无法找到符合条件的队列会把消息返还给发送者</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//如果为true，当exchange发送消息到队列后发现队列上没有消费者，则会把消息返还给发送者</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        amqp<span class="token punctuation">.</span>Publishing<span class="token punctuation">{</span>
            ContentType<span class="token punctuation">:</span> <span class="token string">"text/plain"</span><span class="token punctuation">,</span>
            Body<span class="token punctuation">:</span>        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//simple 模式下消费者</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">ConsumeSimple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.申请队列，如果队列不存在会自动创建，存在则跳过创建</span>
    q<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>QueueName<span class="token punctuation">,</span>
        <span class="token comment">//是否持久化</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//是否自动删除</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//是否具有排他性</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//是否阻塞处理</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//额外的属性</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//接收消息</span>
    msgs<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Consume</span><span class="token punctuation">(</span>
        q<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token comment">// queue</span>
        <span class="token comment">//用来区分多个消费者</span>
        <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// consumer</span>
        <span class="token comment">//是否自动应答</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// auto-ack</span>
        <span class="token comment">//是否独有</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// exclusive</span>
        <span class="token comment">//设置为true，表示 不能将同一个Conenction中生产者发送的消息传递给这个Connection中 的消费者</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// no-local</span>
        <span class="token comment">//列是否阻塞</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// no-wait</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>   <span class="token comment">// args</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    forever <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
    <span class="token comment">//启用协程处理消息</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> d <span class="token operator">:=</span> <span class="token keyword">range</span> msgs <span class="token punctuation">{</span>
            <span class="token comment">//消息逻辑处理，可以自行设计逻辑</span>
            log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Received a message: %s"</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">" [*] Waiting for messages. To exit press CTRL+C"</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;-</span>forever

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mainSimlpePublish.go代码</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"strconv"</span>
    <span class="token string">"time"</span>

    <span class="token string">"github.com/student/kuteng-RabbitMQ/RabbitMQ"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rabbitmq <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQSimple</span><span class="token punctuation">(</span><span class="token string">""</span> <span class="token operator">+</span>
        <span class="token string">"kuteng"</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        rabbitmq<span class="token punctuation">.</span><span class="token function">PublishSimple</span><span class="token punctuation">(</span><span class="token string">"Hello kuteng!"</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mainSimpleRecieve.go代码(两个消费端的代码是一样的)</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"github.com/student/kuteng-RabbitMQ/RabbitMQ"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rabbitmq <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQSimple</span><span class="token punctuation">(</span><span class="token string">""</span> <span class="token operator">+</span>
        <span class="token string">"kuteng"</span><span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">ConsumeSimple</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '45.md' style='float:left'>⬆️上一节🔗</a><a href = '47.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


