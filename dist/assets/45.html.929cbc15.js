import{_ as o,r as e,o as i,c,a as n,b as a,w as l,e as u,d as s}from"./app.5dbe8dec.js";const r={},k=u(`<h1 id="_1-simple\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-simple\u6A21\u5F0F" aria-hidden="true">#</a> 1. Simple\u6A21\u5F0F</h1><p><img src="https://www.topgoer.com/static/9.3/0.png" alt="img"></p><ul><li>\u6D88\u606F\u4EA7\u751F\u7740\xA7\u5C06\u6D88\u606F\u653E\u5165\u961F\u5217</li><li>\u6D88\u606F\u7684\u6D88\u8D39\u8005(consumer) \u76D1\u542C(while) \u6D88\u606F\u961F\u5217,\u5982\u679C\u961F\u5217\u4E2D\u6709\u6D88\u606F,\u5C31\u6D88\u8D39\u6389,\u6D88\u606F\u88AB\u62FF\u8D70\u540E,\u81EA\u52A8\u4ECE\u961F\u5217\u4E2D\u5220\u9664(\u9690\u60A3 \u6D88\u606F\u53EF\u80FD\u6CA1\u6709\u88AB\u6D88\u8D39\u8005\u6B63\u786E\u5904\u7406,\u5DF2\u7ECF\u4ECE\u961F\u5217\u4E2D\u6D88\u5931\u4E86,\u9020\u6210\u6D88\u606F\u7684\u4E22\u5931)\u5E94\u7528\u573A\u666F:\u804A\u5929(\u4E2D\u95F4\u6709\u4E00\u4E2A\u8FC7\u5EA6\u7684\u670D\u52A1\u5668;p\u7AEF,c\u7AEF)</li></ul><p>\u505Asimple\u7B80\u5355\u6A21\u5F0F\u4E4B\u524D\u9996\u5148\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A<code>Virtual Host</code>\u5E76\u4E14\u7ED9\u4ED6\u5206\u914D\u4E00\u4E2A\u7528\u6237\u540D\uFF0C\u7528\u6765\u9694\u79BB\u6570\u636E\uFF0C\u6839\u636E\u81EA\u5DF1\u9700\u8981\u81EA\u884C\u521B\u5EFA</p><p><strong>\u7B2C\u4E00\u6B65</strong></p><p><img src="https://www.topgoer.com/static/9.3/30.png" alt="img"></p><p><strong>\u7B2C\u4E8C\u6B65</strong></p><p><img src="https://www.topgoer.com/static/9.3/31.png" alt="img"></p><p><strong>\u7B2C\u4E09\u6B65</strong></p><p><img src="https://www.topgoer.com/static/9.3/32.png" alt="img"></p><p><strong>\u7B2C\u56DB\u6B65</strong></p><p><img src="https://www.topgoer.com/static/9.3/33.png" alt="img"></p><p><strong>\u7B2C\u4E94\u6B65</strong></p><p><img src="https://www.topgoer.com/static/9.3/34.png" alt="img"></p><h3 id="_1-1-1-\u4EE3\u7801\u5C42\u9762" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u4EE3\u7801\u5C42\u9762" aria-hidden="true">#</a> 1.1.1. \u4EE3\u7801\u5C42\u9762</h3><p>\u76EE\u5F55\u7ED3\u6784</p><p><img src="https://s2.loli.net/2022/04/11/IAw2t1niWyFNruT.png" alt="img"></p><p>kuteng-RabbitMQ</p><p>-RabbitMQ</p><p>--rabitmq.go //\u8FD9\u4E2A\u662FRabbitMQ\u7684\u5C01\u88C5</p><p>-SimlpePublish</p><p>--mainSimlpePublish.go //Publish \u5148\u542F\u52A8</p><p>-SimpleRecieve</p><p>--mainSimpleRecieve.go</p><p>rabitmq.go\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> RabbitMQ

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;log&quot;</span>

    <span class="token string">&quot;github.com/streadway/amqp&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u8FDE\u63A5\u4FE1\u606Famqp://kuteng:kuteng@127.0.0.1:5672/kuteng\u8FD9\u4E2A\u4FE1\u606F\u662F\u56FA\u5B9A\u4E0D\u53D8\u7684amqp://\u4E8B\u56FA\u5B9A\u53C2\u6570\u540E\u9762\u4E24\u4E2A\u662F\u7528\u6237\u540D\u5BC6\u7801ip\u5730\u5740\u7AEF\u53E3\u53F7Virtual Host</span>
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

<span class="token comment">//\u521B\u5EFA\u7B80\u5355\u6A21\u5F0F\u4E0BRabbitMQ\u5B9E\u4F8B</span>
<span class="token keyword">func</span> <span class="token function">NewRabbitMQSimple</span><span class="token punctuation">(</span>queueName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>RabbitMQ <span class="token punctuation">{</span>
    <span class="token comment">//\u521B\u5EFARabbitMQ\u5B9E\u4F8B</span>
    rabbitmq <span class="token operator">:=</span> <span class="token function">NewRabbitMQ</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> err <span class="token builtin">error</span>
    <span class="token comment">//\u83B7\u53D6connection</span>
    rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">,</span> err <span class="token operator">=</span> amqp<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>rabbitmq<span class="token punctuation">.</span>Mqurl<span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;failed to connect rabb&quot;</span><span class="token operator">+</span>
        <span class="token string">&quot;itmq!&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">//\u83B7\u53D6channel</span>
    rabbitmq<span class="token punctuation">.</span>channel<span class="token punctuation">,</span> err <span class="token operator">=</span> rabbitmq<span class="token punctuation">.</span>conn<span class="token punctuation">.</span><span class="token function">Channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">failOnErr</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">&quot;failed to open a channel&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> rabbitmq
<span class="token punctuation">}</span>

<span class="token comment">//\u76F4\u63A5\u6A21\u5F0F\u961F\u5217\u751F\u4EA7</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">PublishSimple</span><span class="token punctuation">(</span>message <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.\u7533\u8BF7\u961F\u5217\uFF0C\u5982\u679C\u961F\u5217\u4E0D\u5B58\u5728\u4F1A\u81EA\u52A8\u521B\u5EFA\uFF0C\u5B58\u5728\u5219\u8DF3\u8FC7\u521B\u5EFA</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>QueueName<span class="token punctuation">,</span>
        <span class="token comment">//\u662F\u5426\u6301\u4E45\u5316</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u662F\u5426\u81EA\u52A8\u5220\u9664</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u662F\u5426\u5177\u6709\u6392\u4ED6\u6027</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u662F\u5426\u963B\u585E\u5904\u7406</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u989D\u5916\u7684\u5C5E\u6027</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u8C03\u7528channel \u53D1\u9001\u6D88\u606F\u5230\u961F\u5217\u4E2D</span>
    r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>Exchange<span class="token punctuation">,</span>
        r<span class="token punctuation">.</span>QueueName<span class="token punctuation">,</span>
        <span class="token comment">//\u5982\u679C\u4E3Atrue\uFF0C\u6839\u636E\u81EA\u8EABexchange\u7C7B\u578B\u548Croutekey\u89C4\u5219\u65E0\u6CD5\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u961F\u5217\u4F1A\u628A\u6D88\u606F\u8FD4\u8FD8\u7ED9\u53D1\u9001\u8005</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u5982\u679C\u4E3Atrue\uFF0C\u5F53exchange\u53D1\u9001\u6D88\u606F\u5230\u961F\u5217\u540E\u53D1\u73B0\u961F\u5217\u4E0A\u6CA1\u6709\u6D88\u8D39\u8005\uFF0C\u5219\u4F1A\u628A\u6D88\u606F\u8FD4\u8FD8\u7ED9\u53D1\u9001\u8005</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        amqp<span class="token punctuation">.</span>Publishing<span class="token punctuation">{</span>
            ContentType<span class="token punctuation">:</span> <span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">,</span>
            Body<span class="token punctuation">:</span>        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//simple \u6A21\u5F0F\u4E0B\u6D88\u8D39\u8005</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RabbitMQ<span class="token punctuation">)</span> <span class="token function">ConsumeSimple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.\u7533\u8BF7\u961F\u5217\uFF0C\u5982\u679C\u961F\u5217\u4E0D\u5B58\u5728\u4F1A\u81EA\u52A8\u521B\u5EFA\uFF0C\u5B58\u5728\u5219\u8DF3\u8FC7\u521B\u5EFA</span>
    q<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">QueueDeclare</span><span class="token punctuation">(</span>
        r<span class="token punctuation">.</span>QueueName<span class="token punctuation">,</span>
        <span class="token comment">//\u662F\u5426\u6301\u4E45\u5316</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u662F\u5426\u81EA\u52A8\u5220\u9664</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u662F\u5426\u5177\u6709\u6392\u4ED6\u6027</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u662F\u5426\u963B\u585E\u5904\u7406</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u989D\u5916\u7684\u5C5E\u6027</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u63A5\u6536\u6D88\u606F</span>
    msgs<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">Consume</span><span class="token punctuation">(</span>
        q<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token comment">// queue</span>
        <span class="token comment">//\u7528\u6765\u533A\u5206\u591A\u4E2A\u6D88\u8D39\u8005</span>
        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// consumer</span>
        <span class="token comment">//\u662F\u5426\u81EA\u52A8\u5E94\u7B54</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// auto-ack</span>
        <span class="token comment">//\u662F\u5426\u72EC\u6709</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// exclusive</span>
        <span class="token comment">//\u8BBE\u7F6E\u4E3Atrue\uFF0C\u8868\u793A \u4E0D\u80FD\u5C06\u540C\u4E00\u4E2AConenction\u4E2D\u751F\u4EA7\u8005\u53D1\u9001\u7684\u6D88\u606F\u4F20\u9012\u7ED9\u8FD9\u4E2AConnection\u4E2D \u7684\u6D88\u8D39\u8005</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// no-local</span>
        <span class="token comment">//\u5217\u662F\u5426\u963B\u585E</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// no-wait</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>   <span class="token comment">// args</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    forever <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
    <span class="token comment">//\u542F\u7528\u534F\u7A0B\u5904\u7406\u6D88\u606F</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> d <span class="token operator">:=</span> <span class="token keyword">range</span> msgs <span class="token punctuation">{</span>
            <span class="token comment">//\u6D88\u606F\u903B\u8F91\u5904\u7406\uFF0C\u53EF\u4EE5\u81EA\u884C\u8BBE\u8BA1\u903B\u8F91</span>
            log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Received a message: %s&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot; [*] Waiting for messages. To exit press CTRL+C&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;-</span>forever

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mainSimlpePublish.go\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>

    <span class="token string">&quot;github.com/student/kuteng-RabbitMQ/RabbitMQ&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rabbitmq <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQSimple</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;kuteng&quot;</span><span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">PublishSimple</span><span class="token punctuation">(</span><span class="token string">&quot;Hello kuteng222!&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D1\u9001\u6210\u529F\uFF01&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mainSimpleRecieve.go\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/student/kuteng-RabbitMQ/RabbitMQ&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rabbitmq <span class="token operator">:=</span> RabbitMQ<span class="token punctuation">.</span><span class="token function">NewRabbitMQSimple</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;kuteng&quot;</span><span class="token punctuation">)</span>
    rabbitmq<span class="token punctuation">.</span><span class="token function">ConsumeSimple</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="44.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="46.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,32),d=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),m={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},v=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),g=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),f={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},h=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function q(w,y){const p=e("RouterLink"),t=e("ExternalLinkIcon");return i(),c("div",null,[k,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:l(()=>[d]),_:1})])]),n("li",null,[n("p",null,[n("a",m,[v,a(t)]),b])]),n("li",null,[n("p",null,[g,n("a",f,[h,a(t)])])])])])}const Q=o(r,[["render",q],["__file","45.html.vue"]]);export{Q as default};
