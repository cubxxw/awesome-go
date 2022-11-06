<template><div><h1 id="_1-操作kafka" tabindex="-1"><a class="header-anchor" href="#_1-操作kafka" aria-hidden="true">#</a> 1. 操作Kafka</h1>
<h3 id="_1-1-1-sarama" tabindex="-1"><a class="header-anchor" href="#_1-1-1-sarama" aria-hidden="true">#</a> 1.1.1. sarama</h3>
<p>Go语言中连接kafka使用第三方库: github.com/Shopify/sarama。</p>
<h3 id="_1-1-2-下载及安装" tabindex="-1"><a class="header-anchor" href="#_1-1-2-下载及安装" aria-hidden="true">#</a> 1.1.2. 下载及安装</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    go get github.com/Shopify/sarama
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意事项: sarama v1.20之后的版本加入了zstd压缩算法，需要用到cgo，在Windows平台编译时会提示类似如下错误： github.com/DataDog/zstd exec: &quot;gcc&quot;:executable file not found in %PATH% 所以在Windows平台请使用v1.19版本的sarama。(如果不会版本控制请查看博客里面的go module章节)</p>
<h3 id="_1-1-3-连接kafka发送消息" tabindex="-1"><a class="header-anchor" href="#_1-1-3-连接kafka发送消息" aria-hidden="true">#</a> 1.1.3. 连接kafka发送消息</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>

    <span class="token string">"github.com/Shopify/sarama"</span>
<span class="token punctuation">)</span>

<span class="token comment">// 基于sarama第三方库开发的kafka client</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config <span class="token operator">:=</span> sarama<span class="token punctuation">.</span><span class="token function">NewConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    config<span class="token punctuation">.</span>Producer<span class="token punctuation">.</span>RequiredAcks <span class="token operator">=</span> sarama<span class="token punctuation">.</span>WaitForAll          <span class="token comment">// 发送完数据需要leader和follow都确认</span>
    config<span class="token punctuation">.</span>Producer<span class="token punctuation">.</span>Partitioner <span class="token operator">=</span> sarama<span class="token punctuation">.</span>NewRandomPartitioner <span class="token comment">// 新选出一个partition</span>
    config<span class="token punctuation">.</span>Producer<span class="token punctuation">.</span>Return<span class="token punctuation">.</span>Successes <span class="token operator">=</span> <span class="token boolean">true</span>                   <span class="token comment">// 成功交付的消息将在success channel返回</span>

    <span class="token comment">// 构造一个消息</span>
    msg <span class="token operator">:=</span> <span class="token operator">&amp;</span>sarama<span class="token punctuation">.</span>ProducerMessage<span class="token punctuation">{</span><span class="token punctuation">}</span>
    msg<span class="token punctuation">.</span>Topic <span class="token operator">=</span> <span class="token string">"web_log"</span>
    msg<span class="token punctuation">.</span>Value <span class="token operator">=</span> sarama<span class="token punctuation">.</span><span class="token function">StringEncoder</span><span class="token punctuation">(</span><span class="token string">"this is a test log"</span><span class="token punctuation">)</span>
    <span class="token comment">// 连接kafka</span>
    client<span class="token punctuation">,</span> err <span class="token operator">:=</span> sarama<span class="token punctuation">.</span><span class="token function">NewSyncProducer</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"127.0.0.1:9092"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"producer closed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> client<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 发送消息</span>
    pid<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">SendMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"send msg failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"pid:%v offset:%v\n"</span><span class="token punctuation">,</span> pid<span class="token punctuation">,</span> offset<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-连接kafka消费消息" tabindex="-1"><a class="header-anchor" href="#_1-1-4-连接kafka消费消息" aria-hidden="true">#</a> 1.1.4. 连接kafka消费消息</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>

    <span class="token string">"github.com/Shopify/sarama"</span>
<span class="token punctuation">)</span>

<span class="token comment">// kafka consumer</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    consumer<span class="token punctuation">,</span> err <span class="token operator">:=</span> sarama<span class="token punctuation">.</span><span class="token function">NewConsumer</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"127.0.0.1:9092"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"fail to start consumer, err:%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    partitionList<span class="token punctuation">,</span> err <span class="token operator">:=</span> consumer<span class="token punctuation">.</span><span class="token function">Partitions</span><span class="token punctuation">(</span><span class="token string">"web_log"</span><span class="token punctuation">)</span> <span class="token comment">// 根据topic取到所有的分区</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"fail to get list of partition:err%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>partitionList<span class="token punctuation">)</span>
    <span class="token keyword">for</span> partition <span class="token operator">:=</span> <span class="token keyword">range</span> partitionList <span class="token punctuation">{</span> <span class="token comment">// 遍历所有的分区</span>
        <span class="token comment">// 针对每个分区创建一个对应的分区消费者</span>
        pc<span class="token punctuation">,</span> err <span class="token operator">:=</span> consumer<span class="token punctuation">.</span><span class="token function">ConsumePartition</span><span class="token punctuation">(</span><span class="token string">"web_log"</span><span class="token punctuation">,</span> <span class="token function">int32</span><span class="token punctuation">(</span>partition<span class="token punctuation">)</span><span class="token punctuation">,</span> sarama<span class="token punctuation">.</span>OffsetNewest<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"failed to start consumer for partition %d,err:%v\n"</span><span class="token punctuation">,</span> partition<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">defer</span> pc<span class="token punctuation">.</span><span class="token function">AsyncClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 异步从每个分区消费信息</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>sarama<span class="token punctuation">.</span>PartitionConsumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> msg <span class="token operator">:=</span> <span class="token keyword">range</span> pc<span class="token punctuation">.</span><span class="token function">Messages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Partition:%d Offset:%d Key:%v Value:%v"</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>Partition<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>Offset<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>pc<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '41.md' style='float:left'>⬆️上一节🔗</a><a href = '43.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


