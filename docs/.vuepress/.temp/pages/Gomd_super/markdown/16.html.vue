<template><div><h1 id="sync" tabindex="-1"><a class="header-anchor" href="#sync" aria-hidden="true">#</a> Sync</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-1-sync-waitgroup">1.1.1. sync.WaitGroup</router-link></li><li><router-link to="#_1-1-2-sync-once">1.1.2. sync.Once</router-link></li><li><router-link to="#_1-1-3-sync-map">1.1.3. sync.Map</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h3 id="_1-1-1-sync-waitgroup" tabindex="-1"><a class="header-anchor" href="#_1-1-1-sync-waitgroup" aria-hidden="true">#</a> 1.1.1. sync.WaitGroup</h3>
<p>在代码中生硬的使用time.Sleep肯定是不合适的，Go语言中可以使用sync.WaitGroup来实现并发任务的同步。 sync.WaitGroup有以下几个方法：</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>(wg * WaitGroup) Add(delta int)</td>
<td>计数器+delta</td>
</tr>
<tr>
<td>(wg *WaitGroup) Done()</td>
<td>计数器-1</td>
</tr>
<tr>
<td>(wg *WaitGroup) Wait()</td>
<td>阻塞直到计数器变为0</td>
</tr>
</tbody>
</table>
<p>sync.WaitGroup内部维护着一个计数器，计数器的值可以增加和减少。例如当我们启动了N 个并发任务时，就将计数器值增加N。每个任务完成时通过调用Done()方法将计数器减1。通过调用Wait()来等待并发任务执行完，当计数器值为0时，表示所有并发任务已经完成。</p>
<p>我们利用sync.WaitGroup将上面的代码优化一下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello Goroutine!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 启动另外一个goroutine去执行hello函数</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main goroutine done!"</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意sync.WaitGroup是一个结构体，传递的时候要传递指针。</p>
<h3 id="_1-1-2-sync-once" tabindex="-1"><a class="header-anchor" href="#_1-1-2-sync-once" aria-hidden="true">#</a> 1.1.2. sync.Once</h3>
<p>说在前面的话：这是一个进阶知识点。</p>
<p>在编程的很多场景下我们需要确保某些操作在高并发的场景下只执行一次，例如只加载一次配置文件、只关闭一次通道等。</p>
<p>Go语言中的sync包中提供了一个针对只执行一次场景的解决方案–sync.Once。</p>
<p>sync.Once只有一个Do方法，其签名如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>o <span class="token operator">*</span>Once<span class="token punctuation">)</span> <span class="token function">Do</span><span class="token punctuation">(</span>f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：如果要执行的函数f需要传递参数就需要搭配闭包来使用。</p>
<h4 id="加载配置文件示例" tabindex="-1"><a class="header-anchor" href="#加载配置文件示例" aria-hidden="true">#</a> 加载配置文件示例</h4>
<p>延迟一个开销很大的初始化操作到真正用到它的时候再执行是一个很好的实践。因为预先初始化一个变量（比如在init函数中完成初始化）会增加程序的启动耗时，而且有可能实际执行过程中这个变量没有用上，那么这个初始化操作就不是必须要做的。我们来看一个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> icons <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>image<span class="token punctuation">.</span>Image

<span class="token keyword">func</span> <span class="token function">loadIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    icons <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>image<span class="token punctuation">.</span>Image<span class="token punctuation">{</span>
        <span class="token string">"left"</span><span class="token punctuation">:</span>  <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"left.png"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">"up"</span><span class="token punctuation">:</span>    <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"up.png"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">"right"</span><span class="token punctuation">:</span> <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"right.png"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">"down"</span><span class="token punctuation">:</span>  <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"down.png"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Icon 被多个goroutine调用时不是并发安全的</span>
<span class="token keyword">func</span> <span class="token function">Icon</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> image<span class="token punctuation">.</span>Image <span class="token punctuation">{</span>
    <span class="token keyword">if</span> icons <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">loadIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> icons<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个goroutine并发调用Icon函数时不是并发安全的，现代的编译器和CPU可能会在保证每个goroutine都满足串行一致的基础上自由地重排访问内存的顺序。loadIcons函数可能会被重排为以下结果：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">loadIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    icons <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>image<span class="token punctuation">.</span>Image<span class="token punctuation">)</span>
    icons<span class="token punctuation">[</span><span class="token string">"left"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"left.png"</span><span class="token punctuation">)</span>
    icons<span class="token punctuation">[</span><span class="token string">"up"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"up.png"</span><span class="token punctuation">)</span>
    icons<span class="token punctuation">[</span><span class="token string">"right"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"right.png"</span><span class="token punctuation">)</span>
    icons<span class="token punctuation">[</span><span class="token string">"down"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"down.png"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下就会出现即使判断了icons不是nil也不意味着变量初始化完成了。考虑到这种情况，我们能想到的办法就是添加互斥锁，保证初始化icons的时候不会被其他的goroutine操作，但是这样做又会引发性能问题。</p>
<p>使用sync.Once改造的示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> icons <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>image<span class="token punctuation">.</span>Image

<span class="token keyword">var</span> loadIconsOnce sync<span class="token punctuation">.</span>Once

<span class="token keyword">func</span> <span class="token function">loadIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    icons <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>image<span class="token punctuation">.</span>Image<span class="token punctuation">{</span>
        <span class="token string">"left"</span><span class="token punctuation">:</span>  <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"left.png"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">"up"</span><span class="token punctuation">:</span>    <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"up.png"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">"right"</span><span class="token punctuation">:</span> <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"right.png"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">"down"</span><span class="token punctuation">:</span>  <span class="token function">loadIcon</span><span class="token punctuation">(</span><span class="token string">"down.png"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Icon 是并发安全的</span>
<span class="token keyword">func</span> <span class="token function">Icon</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> image<span class="token punctuation">.</span>Image <span class="token punctuation">{</span>
    loadIconsOnce<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>loadIcons<span class="token punctuation">)</span>
    <span class="token keyword">return</span> icons<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sync.Once其实内部包含一个互斥锁和一个布尔值，互斥锁保证布尔值和数据的安全，而布尔值用来记录初始化是否完成。这样设计就能保证初始化操作的时候是并发安全的并且初始化操作也不会被执行多次。</p>
<h3 id="_1-1-3-sync-map" tabindex="-1"><a class="header-anchor" href="#_1-1-3-sync-map" aria-hidden="true">#</a> 1.1.3. sync.Map</h3>
<p>Go语言中内置的map不是并发安全的。请看下面的示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">get</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> m<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">set</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">,</span> value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            key <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"k=:%v,v:=%v\n"</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
            wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码开启少量几个goroutine的时候可能没什么问题，当并发多了之后执行上面的代码就会报fatal error: concurrent map writes错误。</p>
<p>像这种场景下就需要为map加锁来保证并发的安全性了，Go语言的sync包中提供了一个开箱即用的并发安全版map–sync.Map。开箱即用表示不用像内置的map一样使用make函数初始化就能直接使用。同时sync.Map内置了诸如Store、Load、LoadOrStore、Delete、Range等操作方法。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> m <span class="token operator">=</span> sync<span class="token punctuation">.</span>Map<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            key <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            m<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
            value<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> m<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"k=:%v,v:=%v\n"</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
            wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '15.md' style='float:left'>⬆️上一节🔗</a><a href = '17.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


