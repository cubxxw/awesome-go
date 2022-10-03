<template><div><h1 id="goroutine池" tabindex="-1"><a class="header-anchor" href="#goroutine池" aria-hidden="true">#</a> Goroutine池</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-1-worker-pool-goroutine池">1.1.1. worker pool（goroutine池）</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h3 id="_1-1-1-worker-pool-goroutine池" tabindex="-1"><a class="header-anchor" href="#_1-1-1-worker-pool-goroutine池" aria-hidden="true">#</a> 1.1.1. worker pool（goroutine池）</h3>
<ul>
<li>本质上是生产者消费者模型</li>
<li>可以有效控制goroutine数量，防止暴涨</li>
<li>需求：
<ul>
<li>计算一个数字的各个位数之和，例如数字123，结果为1+2+3=6</li>
<li>随机生成数字进行计算</li>
</ul>
</li>
<li>控制台输出结果如下：</li>
</ul>
<p><img src="https://s2.loli.net/2022/04/10/A9DCygv1YtTZ7Qd.png" alt="img"></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math/rand"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Job <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// id</span>
    Id <span class="token builtin">int</span>
    <span class="token comment">// 需要计算的随机数</span>
    RandNum <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Result <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里必须传对象实例</span>
    job <span class="token operator">*</span>Job
    <span class="token comment">// 求和</span>
    sum <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需要2个管道</span>
    <span class="token comment">// 1.job管道</span>
    jobChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>Job<span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.结果管道</span>
    resultChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment">// 3.创建工作池</span>
    <span class="token function">createPool</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">,</span> jobChan<span class="token punctuation">,</span> resultChan<span class="token punctuation">)</span>
    <span class="token comment">// 4.开个打印的协程</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>resultChan <span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 遍历结果管道打印</span>
        <span class="token keyword">for</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> resultChan <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"job id:%v randnum:%v result:%d\n"</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>job<span class="token punctuation">.</span>Id<span class="token punctuation">,</span>
                result<span class="token punctuation">.</span>job<span class="token punctuation">.</span>RandNum<span class="token punctuation">,</span> result<span class="token punctuation">.</span>sum<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span>resultChan<span class="token punctuation">)</span>
    <span class="token keyword">var</span> id <span class="token builtin">int</span>
    <span class="token comment">// 循环创建job，输入到管道</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        id<span class="token operator">++</span>
        <span class="token comment">// 生成随机数</span>
        r_num <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        job <span class="token operator">:=</span> <span class="token operator">&amp;</span>Job<span class="token punctuation">{</span>
            Id<span class="token punctuation">:</span>      id<span class="token punctuation">,</span>
            RandNum<span class="token punctuation">:</span> r_num<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        jobChan <span class="token operator">&lt;-</span> job
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建工作池</span>
<span class="token comment">// 参数1：开几个协程</span>
<span class="token keyword">func</span> <span class="token function">createPool</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">,</span> jobChan <span class="token keyword">chan</span> <span class="token operator">*</span>Job<span class="token punctuation">,</span> resultChan <span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据开协程个数，去跑运行</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>jobChan <span class="token keyword">chan</span> <span class="token operator">*</span>Job<span class="token punctuation">,</span> resultChan <span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 执行运算</span>
            <span class="token comment">// 遍历job管道所有数据，进行相加</span>
            <span class="token keyword">for</span> job <span class="token operator">:=</span> <span class="token keyword">range</span> jobChan <span class="token punctuation">{</span>
                <span class="token comment">// 随机数接过来</span>
                r_num <span class="token operator">:=</span> job<span class="token punctuation">.</span>RandNum
                <span class="token comment">// 随机数每一位相加</span>
                <span class="token comment">// 定义返回值</span>
                <span class="token keyword">var</span> sum <span class="token builtin">int</span>
                <span class="token keyword">for</span> r_num <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                    tmp <span class="token operator">:=</span> r_num <span class="token operator">%</span> <span class="token number">10</span>
                    sum <span class="token operator">+=</span> tmp
                    r_num <span class="token operator">/=</span> <span class="token number">10</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// 想要的结果是Result</span>
                r <span class="token operator">:=</span> <span class="token operator">&amp;</span>Result<span class="token punctuation">{</span>
                    job<span class="token punctuation">:</span> job<span class="token punctuation">,</span>
                    sum<span class="token punctuation">:</span> sum<span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//运算结果扔到管道</span>
                resultChan <span class="token operator">&lt;-</span> r
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>jobChan<span class="token punctuation">,</span> resultChan<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '11.md' style='float:left'>⬆️上一节🔗</a><a href = '13.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


