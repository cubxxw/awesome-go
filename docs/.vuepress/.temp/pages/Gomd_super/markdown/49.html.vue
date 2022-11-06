<template><div><h1 id="_1-topic模式-话题模式-一个消息被多个消费者获取-消息的目标queue可用bindingkey以通配符-一个或多个词-一个词-的方式指定" tabindex="-1"><a class="header-anchor" href="#_1-topic模式-话题模式-一个消息被多个消费者获取-消息的目标queue可用bindingkey以通配符-一个或多个词-一个词-的方式指定" aria-hidden="true">#</a> 1. Topic模式（话题模式，一个消息被多个消费者获取，消息的目标queue可用BindingKey以通配符，（#：一个或多个词，*：一个词）的方式指定</h1>
<p><img src="https://s2.loli.net/2022/04/10/qHPNTDr6FUklQhi.jpg" alt="img"></p>
<ul>
<li>星号井号代表通配符</li>
<li>星号代表多个单词,井号代表一个单词</li>
<li>路由功能添加模糊匹配</li>
<li>消息产生者产生消息,把消息交给交换机</li>
<li>交换机根据key的规则模糊匹配到对应的队列,由队列的监听消费者接收消息消费</li>
</ul>
<p>目录结构</p>
<p><img src="https://s2.loli.net/2022/04/10/bTEpswgJ5KqCetM.png" alt="img"></p>
<p>kuteng-RabbitMQ</p>
<p>-RabbitMQ</p>
<p>--rabitmq.go //这个是RabbitMQ的封装</p>
<p>-publish</p>
<p>--mainpublish.go //Publish 先启动</p>
<p>-recieve1</p>
<p>--mainrecieve.go</p>
<p>-recieve2</p>
<p>--mainrecieve.go</p>
<p>rabitmq.go代码</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> RabbitMQ

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"log"</span>

    <span class="token string">"github.com/streadway/amqp"</span>
<span class="token punctuation">)</span>

<span class="token comment">//连接信息</span>
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

<span class="token comment">//话题模式</span>
<span class="token comment">//创建RabbitMQ实例</span>
<span class="token keyword">func</span> <span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span>exchangeName <span class="token builtin">string</span><span class="token punctuation">,</span> routingKey <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>RabbitMQ <span class="token punctuation">{</span>
    <span class="token comment">//创建RabbitMQ实例</span>
    rabbitmq <span class="token operator">:=</span> <span class="token function">NewRabbitMQ</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> exchangeName<span class="token punctuation">,</span> routingKey<span class="token punctuation">)</span>
    <span class="token keyword">var</span> err <span class="token builtin">error</span>
    <span class="token comment">//获取connection</span>
    rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">,</span> err <span class="token operator">=</span> amqp<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>rabbitmq<span class="token punctuation">.</span>Mqurl<span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"failed to connect rabbitmq!"</span><span class="token punctuation">)</span>
    <span class="token comment">//获取channel</span>
    rabbitmq<span class="token punctuation">.</span>channel<span class="token punctuation">,</span> err <span class="token operator">=</span> rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">.</span><span class="token function">Channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"failed to open a channel"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> rabbitmq
<span class="token punctuation">}</span>

<span class="token comment">//话题模式发送消息</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">PublishTopic</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.尝试创建交换机</span>
    err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">ExchangeDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token comment">//要改成topic</span>
        <span class="token string">"topic"</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    r<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"Failed to declare an excha"</span><span class="token operator">+</span>
        <span class="token string">"nge"</span><span class="token punctuation">)</span>

    <span class="token comment">//2.发送消息</span>
    err <span class="token operator">=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token comment">//要设置</span>
        r<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        amqp<span class="token punctuation">.</span>Publishing<span class="token punctuation">{</span>
            ContentType<span class="token punctuation">:</span> <span class="token string">"text/plain"</span><span class="token punctuation">,</span>
            Body<span class="token punctuation">:</span>        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//话题模式接受消息</span>
<span class="token comment">//要注意key,规则</span>
<span class="token comment">//其中“*”用于匹配一个单词，“#”用于匹配多个单词（可以是零个）</span>
<span class="token comment">//匹配 kuteng.* 表示匹配 kuteng.hello, kuteng.hello.one需要用kuteng.#才能匹配到</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">RecieveTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.试探性创建交换机</span>
    err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">ExchangeDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token comment">//交换机类型</span>
        <span class="token string">"topic"</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"Failed to declare an exch"</span><span class="token operator">+</span>
        <span class="token string">"ange"</span><span class="token punctuation">)</span>
    <span class="token comment">//2.试探性创建队列，这里注意队列名称不要写</span>
    q<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueDeclare</span><span class="token punctuation">(</span>
        <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">//随机生产队列名称</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">"Failed to declare a queue"</span><span class="token punctuation">)</span>

    <span class="token comment">//绑定队列到 exchange 中</span>
    err <span class="token operator">=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueBind</span><span class="token punctuation">(</span>
        q<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
        <span class="token comment">//在pub/sub模式下，这里的key要为空</span>
        r<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token comment">//消费消息</span>
    messges<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Consume</span><span class="token punctuation">(</span>
        q<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
        <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    forever <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> d <span class="token operator">:=</span> <span class="token keyword">range</span> messges <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Received a message: %s"</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"退出请按 CTRL+C\n"</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;-</span>forever
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mainpublish.go代码</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"strconv"</span>
    <span class="token string">"time"</span>

    <span class="token string">"github.com/student/kuteng-RabbitMQ/RabbitMQ"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    kutengOne <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span><span class="token string">"exKutengTopic"</span><span class="token punctuation">,</span> <span class="token string">"kuteng.topic.one"</span><span class="token punctuation">)</span>
    kutengTwo <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span><span class="token string">"exKutengTopic"</span><span class="token punctuation">,</span> <span class="token string">"kuteng.topic.two"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        kutengOne<span class="token punctuation">.</span><span class="token function">PublishTopic</span><span class="token punctuation">(</span><span class="token string">"Hello kuteng topic one!"</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        kutengTwo<span class="token punctuation">.</span><span class="token function">PublishTopic</span><span class="token punctuation">(</span><span class="token string">"Hello kuteng topic Two!"</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>recieve1/mainrecieve.go代码</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"github.com/student/kuteng-RabbitMQ/RabbitMQ"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    kutengOne <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span><span class="token string">"exKutengTopic"</span><span class="token punctuation">,</span> <span class="token string">"#"</span><span class="token punctuation">)</span>
    kutengOne<span class="token punctuation">.</span><span class="token function">RecieveTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>recieve2/mainrecieve.go代码</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"github.com/student/kuteng-RabbitMQ/RabbitMQ"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    kutengOne <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQTopic</span><span class="token punctuation">(</span><span class="token string">"exKutengTopic"</span><span class="token punctuation">,</span> <span class="token string">"kuteng.*.two"</span><span class="token punctuation">)</span>
    kutengOne<span class="token punctuation">.</span><span class="token function">RecieveTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '48.md' style='float:left'>⬆️上一节🔗</a><a href = '50.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


