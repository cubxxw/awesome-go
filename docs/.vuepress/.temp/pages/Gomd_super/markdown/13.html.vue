<template><div><h1 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-1-定时器">1.1.1. 定时器</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h3 id="_1-1-1-定时器" tabindex="-1"><a class="header-anchor" href="#_1-1-1-定时器" aria-hidden="true">#</a> 1.1.1. 定时器</h3>
<ul>
<li>Timer：时间到了，执行只执行1次</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.timer基本使用</span>
    <span class="token comment">//timer1 := time.NewTimer(2 * time.Second)</span>
    <span class="token comment">//t1 := time.Now()</span>
    <span class="token comment">//fmt.Printf("t1:%v\n", t1)</span>
    <span class="token comment">//t2 := &lt;-timer1.C</span>
    <span class="token comment">//fmt.Printf("t2:%v\n", t2)</span>

    <span class="token comment">// 2.验证timer只能响应1次</span>
    <span class="token comment">//timer2 := time.NewTimer(time.Second)</span>
    <span class="token comment">//for {</span>
    <span class="token comment">// &lt;-timer2.C</span>
    <span class="token comment">// fmt.Println("时间到")</span>
    <span class="token comment">//}</span>

    <span class="token comment">// 3.timer实现延时的功能</span>
    <span class="token comment">//(1)</span>
    <span class="token comment">//time.Sleep(time.Second)</span>
    <span class="token comment">//(2)</span>
    <span class="token comment">//timer3 := time.NewTimer(2 * time.Second)</span>
    <span class="token comment">//&lt;-timer3.C</span>
    <span class="token comment">//fmt.Println("2秒到")</span>
    <span class="token comment">//(3)</span>
    <span class="token comment">//&lt;-time.After(2*time.Second)</span>
    <span class="token comment">//fmt.Println("2秒到")</span>

    <span class="token comment">// 4.停止定时器</span>
    <span class="token comment">//timer4 := time.NewTimer(2 * time.Second)</span>
    <span class="token comment">//go func() {</span>
    <span class="token comment">// &lt;-timer4.C</span>
    <span class="token comment">// fmt.Println("定时器执行了")</span>
    <span class="token comment">//}()</span>
    <span class="token comment">//b := timer4.Stop()</span>
    <span class="token comment">//if b {</span>
    <span class="token comment">// fmt.Println("timer4已经关闭")</span>
    <span class="token comment">//}</span>

    <span class="token comment">// 5.重置定时器</span>
    timer5 <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    timer5<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>timer5<span class="token punctuation">.</span>C<span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Ticker：时间到了，多次执行</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.获取ticker对象</span>
    ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    i <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token comment">// 子协程</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            <span class="token comment">//&lt;-ticker.C</span>
            i<span class="token operator">++</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>ticker<span class="token punctuation">.</span>C<span class="token punctuation">)</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span>
                <span class="token comment">//停止</span>
                ticker<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '12.md' style='float:left'>⬆️上一节🔗</a><a href = '14.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


