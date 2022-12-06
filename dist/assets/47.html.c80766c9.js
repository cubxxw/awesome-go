import{_ as o,r as e,o as i,c,a as n,b as a,w as l,d as u,e as s}from"./app.94ed98a0.js";const r="/assets/pByLhoERkiSM78l.b44d2f3a.jpg",k="/assets/xpnXUDedwVA6Nbt.d64d7eaf.png",d={},v=u('<h1 id="_1-publish\u6A21\u5F0F-\u8BA2\u9605\u6A21\u5F0F-\u6D88\u606F\u88AB\u8DEF\u7531\u6295\u9012\u7ED9\u591A\u4E2A\u961F\u5217-\u4E00\u4E2A\u6D88\u606F\u88AB\u591A\u4E2A\u6D88\u8D39\u8005\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#_1-publish\u6A21\u5F0F-\u8BA2\u9605\u6A21\u5F0F-\u6D88\u606F\u88AB\u8DEF\u7531\u6295\u9012\u7ED9\u591A\u4E2A\u961F\u5217-\u4E00\u4E2A\u6D88\u606F\u88AB\u591A\u4E2A\u6D88\u8D39\u8005\u83B7\u53D6" aria-hidden="true">#</a> 1. Publish\u6A21\u5F0F\uFF08\u8BA2\u9605\u6A21\u5F0F\uFF0C\u6D88\u606F\u88AB\u8DEF\u7531\u6295\u9012\u7ED9\u591A\u4E2A\u961F\u5217\uFF0C\u4E00\u4E2A\u6D88\u606F\u88AB\u591A\u4E2A\u6D88\u8D39\u8005\u83B7\u53D6\uFF09</h1><p><img src="'+r+'" alt="img"></p><ul><li>X\u4EE3\u8868\u4EA4\u6362\u673ArabbitMQ\u5185\u90E8\u7EC4\u4EF6,erlang \u6D88\u606F\u4EA7\u751F\u8005\u662F\u4EE3\u7801\u5B8C\u6210,\u4EE3\u7801\u7684\u6267\u884C\u6548\u7387\u4E0D\u9AD8,\u6D88\u606F\u4EA7\u751F\u8005\u5C06\u6D88\u606F\u653E\u5165\u4EA4\u6362\u673A,\u4EA4\u6362\u673A\u53D1\u5E03\u8BA2\u9605\u628A\u6D88\u606F\u53D1\u9001\u5230\u6240\u6709\u6D88\u606F\u961F\u5217\u4E2D,\u5BF9\u5E94\u6D88\u606F\u961F\u5217\u7684\u6D88\u8D39\u8005\u62FF\u5230\u6D88\u606F\u8FDB\u884C\u6D88\u8D39</li><li>\u76F8\u5173\u573A\u666F:\u90AE\u4EF6\u7FA4\u53D1,\u7FA4\u804A\u5929,\u5E7F\u64AD(\u5E7F\u544A)</li></ul><p>\u76EE\u5F55\u7ED3\u6784</p><p><img src="'+k+`" alt="img"></p><h3 id="\u{1F4DC}-\u5BF9\u4E0A\u9762\u7684\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u{1F4DC}-\u5BF9\u4E0A\u9762\u7684\u89E3\u91CA" aria-hidden="true">#</a> \u{1F4DC} \u5BF9\u4E0A\u9762\u7684\u89E3\u91CA\uFF1A</h3><ul><li><p>kuteng-RabbitMQ</p></li><li><p>-RabbitMQ</p></li><li><p>--rabitmq.go //\u8FD9\u4E2A\u662FRabbitMQ\u7684\u5C01\u88C5</p></li><li><p>-Pub</p></li><li><p>--mainPub.go //Publish \u5148\u542F\u52A8</p></li><li><p>-Sub</p></li><li><p>--mainSub.go</p></li><li><p>-Sub2</p></li><li><p>--mainSub.go</p></li></ul><p>rabitmq.go\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> RabbitMQ

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;log&quot;</span>

    <span class="token string">&quot;github.com/streadway/amqp&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u8FDE\u63A5\u4FE1\u606F</span>
<span class="token keyword">const</span> MQURL <span class="token operator">=</span> <span class="token string">&quot;amqp://kuteng:kuteng@127.0.0.1:5672/kuteng&quot;</span>

<span class="token comment">//rabbitMQ\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> RabbitMQ <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    conn    <span class="token operator">*</span>amqp<span class="token punctuation">.</span>Connection
    channel <span class="token operator">*</span>amqp<span class="token punctuation">.</span>Channel
    <span class="token comment">//\u961F\u5217\u540D\u79F0</span>
    QueueName <span class="token builtin">string</span>
    <span class="token comment">//\u4EA4\u6362\u673A\u540D\u79F0</span>
    Exchange <span class="token builtin">string</span>
    <span class="token comment">//bind Key \u540D\u79F0</span>
    Key <span class="token builtin">string</span>
    <span class="token comment">//\u8FDE\u63A5\u4FE1\u606F</span>
    Mqurl <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u521B\u5EFA\u7ED3\u6784\u4F53\u5B9E\u4F8B</span>
<span class="token keyword">func</span> <span class="token function">NewRabbitMQ</span><span class="token punctuation">(</span>queueName <span class="token builtin">string</span><span class="token punctuation">,</span> exchange <span class="token builtin">string</span><span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>RabbitMQ <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>RabbitMQ<span class="token punctuation">{</span>QueueName<span class="token punctuation">:</span> queueName<span class="token punctuation">,</span> Exchange<span class="token punctuation">:</span> exchange<span class="token punctuation">,</span> Key<span class="token punctuation">:</span> key<span class="token punctuation">,</span> Mqurl<span class="token punctuation">:</span> MQURL<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u65AD\u5F00channel \u548C connection</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">Destory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span>conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u9519\u8BEF\u5904\u7406\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">failOnErr</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8BA2\u9605\u6A21\u5F0F\u521B\u5EFARabbitMQ\u5B9E\u4F8B</span>
<span class="token keyword">func</span> <span class="token function">NewRabbitMQPubSub</span><span class="token punctuation">(</span>exchangeName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>RabbitMQ <span class="token punctuation">{</span>
    <span class="token comment">//\u521B\u5EFARabbitMQ\u5B9E\u4F8B</span>
    rabbitmq <span class="token operator">:=</span> <span class="token function">NewRabbitMQ</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> exchangeName<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> err <span class="token builtin">error</span>
    <span class="token comment">//\u83B7\u53D6connection</span>
    rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">,</span> err <span class="token operator">=</span> amqp<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>rabbitmq<span class="token punctuation">.</span>Mqurl<span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;failed to connect rabbitmq!&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">//\u83B7\u53D6channel</span>
    rabbitmq<span class="token punctuation">.</span>channel<span class="token punctuation">,</span> err <span class="token operator">=</span> rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">.</span><span class="token function">Channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;failed to open a channel&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> rabbitmq
<span class="token punctuation">}</span>

<span class="token comment">//\u8BA2\u9605\u6A21\u5F0F\u751F\u4EA7</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">PublishPub</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.\u5C1D\u8BD5\u521B\u5EFA\u4EA4\u6362\u673A</span>
    err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">ExchangeDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token string">&quot;fanout&quot;</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//true\u8868\u793A\u8FD9\u4E2Aexchange\u4E0D\u53EF\u4EE5\u88ABclient\u7528\u6765\u63A8\u9001\u6D88\u606F\uFF0C\u4EC5\u7528\u6765\u8FDB\u884Cexchange\u548Cexchange\u4E4B\u95F4\u7684\u7ED1\u5B9A</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    r<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;Failed to declare an excha&quot;</span><span class="token operator">+</span>
        <span class="token string">&quot;nge&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">//2.\u53D1\u9001\u6D88\u606F</span>
    err <span class="token operator">=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        amqp<span class="token punctuation">.</span>Publishing<span class="token punctuation">{</span>
            ContentType<span class="token punctuation">:</span> <span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">,</span>
            Body<span class="token punctuation">:</span>        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8BA2\u9605\u6A21\u5F0F\u6D88\u8D39\u7AEF\u4EE3\u7801</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">RecieveSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.\u8BD5\u63A2\u6027\u521B\u5EFA\u4EA4\u6362\u673A</span>
    err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">ExchangeDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token comment">//\u4EA4\u6362\u673A\u7C7B\u578B</span>
        <span class="token string">&quot;fanout&quot;</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//YES\u8868\u793A\u8FD9\u4E2Aexchange\u4E0D\u53EF\u4EE5\u88ABclient\u7528\u6765\u63A8\u9001\u6D88\u606F\uFF0C\u4EC5\u7528\u6765\u8FDB\u884Cexchange\u548Cexchange\u4E4B\u95F4\u7684\u7ED1\u5B9A</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;Failed to declare an exch&quot;</span><span class="token operator">+</span>
        <span class="token string">&quot;ange&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">//2.\u8BD5\u63A2\u6027\u521B\u5EFA\u961F\u5217\uFF0C\u8FD9\u91CC\u6CE8\u610F\u961F\u5217\u540D\u79F0\u4E0D\u8981\u5199</span>
    q<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueDeclare</span><span class="token punctuation">(</span>
        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u968F\u673A\u751F\u4EA7\u961F\u5217\u540D\u79F0</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;Failed to declare a queue&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">//\u7ED1\u5B9A\u961F\u5217\u5230 exchange \u4E2D</span>
    err <span class="token operator">=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueBind</span><span class="token punctuation">(</span>
        q<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
        <span class="token comment">//\u5728pub/sub\u6A21\u5F0F\u4E0B\uFF0C\u8FD9\u91CC\u7684key\u8981\u4E3A\u7A7A</span>
        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token comment">//\u6D88\u8D39\u6D88\u606F</span>
    messges<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Consume</span><span class="token punctuation">(</span>
        q<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    forever <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> d <span class="token operator">:=</span> <span class="token keyword">range</span> messges <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Received a message: %s&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9000\u51FA\u8BF7\u6309 CTRL+C\\n&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;-</span>forever
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mainPub.go\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;strconv&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;github.com/student/kuteng-RabbitMQ/RabbitMQ&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rabbitmq <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQPubSub</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;newProduct&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        rabbitmq<span class="token punctuation">.</span><span class="token function">PublishPub</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BA2\u9605\u6A21\u5F0F\u751F\u4EA7\u7B2C&quot;</span> <span class="token operator">+</span>
            strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\u6761&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\u6570\u636E&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BA2\u9605\u6A21\u5F0F\u751F\u4EA7\u7B2C&quot;</span> <span class="token operator">+</span>
            strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\u6761&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\u6570\u636E&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mainSub.go\u4EE3\u7801(\u4E24\u4E2A\u6D88\u8D39\u8005\u4EE3\u7801\u662F\u4E00\u6837\u7684)</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/student/kuteng-RabbitMQ/RabbitMQ&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rabbitmq <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQPubSub</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;newProduct&quot;</span><span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">RecieveSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="46.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="48.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,15),b=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),m={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),f=s(")"),q=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),h={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},y=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function _(w,x){const p=e("RouterLink"),t=e("ExternalLinkIcon");return i(),c("div",null,[v,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:l(()=>[b]),_:1})])]),n("li",null,[n("p",null,[n("a",m,[g,a(t)]),f])]),n("li",null,[n("p",null,[q,n("a",h,[y,a(t)])])])])])}const M=o(d,[["render",_],["__file","47.html.vue"]]);export{M as default};
