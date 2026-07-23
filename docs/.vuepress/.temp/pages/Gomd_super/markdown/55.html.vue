<template><div><h1 id="_1-time" tabindex="-1"><a class="header-anchor" href="#_1-time" aria-hidden="true">#</a> 1. Time</h1>
<p>时间和日期是我们编程中经常会用到的，本文主要介绍了Go语言内置的time包的基本用法。</p>
<h3 id="_1-1-1-time包" tabindex="-1"><a class="header-anchor" href="#_1-1-1-time包" aria-hidden="true">#</a> 1.1.1. time包</h3>
<p>time包提供了时间的显示和测量用的函数。日历的计算采用的是公历。</p>
<h3 id="_1-1-2-时间类型" tabindex="-1"><a class="header-anchor" href="#_1-1-2-时间类型" aria-hidden="true">#</a> 1.1.2. 时间类型</h3>
<p>time.Time类型表示时间。我们可以通过time.Now()函数获取当前的时间对象，然后获取时间对象的年月日时分秒等信息。示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">timeDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取当前时间</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"current time:%v\n"</span><span class="token punctuation">,</span> now<span class="token punctuation">)</span>

    year <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//年</span>
    month <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//月</span>
    day <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">//日</span>
    hour <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//小时</span>
    minute <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//分钟</span>
    second <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Second</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//秒</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%d-%02d-%02d %02d:%02d:%02d\n"</span><span class="token punctuation">,</span> year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">,</span> hour<span class="token punctuation">,</span> minute<span class="token punctuation">,</span> second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-时间戳" tabindex="-1"><a class="header-anchor" href="#_1-1-3-时间戳" aria-hidden="true">#</a> 1.1.3. 时间戳</h3>
<p>时间戳是自1970年1月1日（08:00:00GMT）至当前时间的总毫秒数。它也被称为Unix时间戳（UnixTimestamp）。</p>
<p>基于时间对象获取时间戳的示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">timestampDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment">//获取当前时间</span>
    timestamp1 <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//时间戳</span>
    timestamp2 <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//纳秒时间戳</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"current timestamp1:%v\n"</span><span class="token punctuation">,</span> timestamp1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"current timestamp2:%v\n"</span><span class="token punctuation">,</span> timestamp2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用time.Unix()函数可以将时间戳转为时间格式。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">timestampDemo2</span><span class="token punctuation">(</span>timestamp <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    timeObj <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//将时间戳转为时间格式</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>timeObj<span class="token punctuation">)</span>
    year <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//年</span>
    month <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//月</span>
    day <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">//日</span>
    hour <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//小时</span>
    minute <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//分钟</span>
    second <span class="token operator">:=</span> timeObj<span class="token punctuation">.</span><span class="token function">Second</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//秒</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%d-%02d-%02d %02d:%02d:%02d\n"</span><span class="token punctuation">,</span> year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">,</span> hour<span class="token punctuation">,</span> minute<span class="token punctuation">,</span> second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-时间间隔" tabindex="-1"><a class="header-anchor" href="#_1-1-4-时间间隔" aria-hidden="true">#</a> 1.1.4. 时间间隔</h3>
<p>time.Duration是time包定义的一个类型，它代表两个时间点之间经过的时间，以纳秒为单位。time.Duration表示一段时间间隔，可表示的最长时间段大约290年。</p>
<p>time包中定义的时间间隔类型的常量如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
    Nanosecond  Duration <span class="token operator">=</span> <span class="token number">1</span>
    Microsecond          <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> Nanosecond
    Millisecond          <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> Microsecond
    Second               <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> Millisecond
    Minute               <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> Second
    Hour                 <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> Minute
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：time.Duration表示1纳秒，time.Second表示1秒。</p>
<h3 id="_1-1-5-时间操作" tabindex="-1"><a class="header-anchor" href="#_1-1-5-时间操作" aria-hidden="true">#</a> 1.1.5. 时间操作</h3>
<h4 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> Add</h4>
<p>我们在日常的编码过程中可能会遇到要求时间+时间间隔的需求，Go语言的时间对象有提供Add方法如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func (t Time) Add(d Duration) Time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举个例子，求一个小时之后的时间：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    later <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Hour<span class="token punctuation">)</span> <span class="token comment">// 当前时间加1小时后的时间</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>later<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> Sub</h4>
<p>求两个时间之间的差值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func (t Time) Sub(u Time) Duration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回一个时间段t-u。如果结果超出了Duration可以表示的最大值/最小值，将返回最大值/最小值。要获取时间点t-d（d为Duration），可以使用t.Add(-d)。</p>
<h4 id="equal" tabindex="-1"><a class="header-anchor" href="#equal" aria-hidden="true">#</a> Equal</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func (t Time) Equal(u Time) bool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>判断两个时间是否相同，会考虑时区的影响，因此不同时区标准的时间也可以正确比较。本方法和用t==u不同，这种方法还会比较地点和时区信息。</p>
<h4 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> Before</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func (t Time) Before(u Time) bool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果t代表的时间点在u之前，返回真；否则返回假。</p>
<h4 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> After</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func (t Time) After(u Time) bool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果t代表的时间点在u之后，返回真；否则返回假。</p>
<h3 id="_1-1-6-定时器" tabindex="-1"><a class="header-anchor" href="#_1-1-6-定时器" aria-hidden="true">#</a> 1.1.6. 定时器</h3>
<p>使用time.Tick(时间间隔)来设置定时器，定时器的本质上是一个通道（channel）。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">tickDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Tick</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">//定义一个1秒间隔的定时器</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> ticker <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token comment">//每秒都会执行的任务</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-7-时间格式化" tabindex="-1"><a class="header-anchor" href="#_1-1-7-时间格式化" aria-hidden="true">#</a> 1.1.7. 时间格式化</h3>
<p>时间类型有一个自带的方法Format进行格式化，需要注意的是Go语言中格式化时间模板不是常见的Y-m-d H:M:S而是使用Go的诞生时间2006年1月2号15点04分（记忆口诀为2006 1 2 3 4）。也许这就是技术人员的浪漫吧。</p>
<p>补充：如果想格式化为12小时方式，需指定PM。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">formatDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 格式化的模板为Go的出生时间2006年1月2号15点04分 Mon Jan</span>
    <span class="token comment">// 24小时制</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"2006-01-02 15:04:05.000 Mon Jan"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 12小时制</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"2006-01-02 03:04:05.000 PM Mon Jan"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"2006/01/02 15:04"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"15:04 2006/01/02"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"2006/01/02"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解析字符串格式的时间" tabindex="-1"><a class="header-anchor" href="#解析字符串格式的时间" aria-hidden="true">#</a> 解析字符串格式的时间</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span>
<span class="token comment">// 加载时区</span>
loc<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">LoadLocation</span><span class="token punctuation">(</span><span class="token string">"Asia/Shanghai"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token comment">// 按照指定时区和指定格式解析字符串时间</span>
timeObj<span class="token punctuation">,</span> err <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">ParseInLocation</span><span class="token punctuation">(</span><span class="token string">"2006/01/02 15:04:05"</span><span class="token punctuation">,</span> <span class="token string">"2019/08/04 14:15:20"</span><span class="token punctuation">,</span> loc<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>timeObj<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>timeObj<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '54.md' style='float:left'>⬆️上一节🔗</a><a href = '56.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


