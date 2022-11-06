<template><div><h1 id="channel" tabindex="-1"><a class="header-anchor" href="#channel" aria-hidden="true">#</a> Channel</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-1-channel">1.1.1. channel</router-link></li><li><router-link to="#_1-1-2-channel类型">1.1.2. channel类型</router-link></li><li><router-link to="#_1-1-3-创建channel">1.1.3. 创建channel</router-link></li><li><router-link to="#_1-1-4-channel操作">1.1.4. channel操作</router-link></li><li><router-link to="#_1-1-5-无缓冲的通道">1.1.5. 无缓冲的通道</router-link></li><li><router-link to="#_1-1-6-有缓冲的通道">1.1.6. 有缓冲的通道</router-link></li><li><router-link to="#_1-1-7-close">1.1.7. close()</router-link></li><li><router-link to="#_1-1-8-如何优雅的从通道循环取值">1.1.8. 如何优雅的从通道循环取值</router-link></li><li><router-link to="#_1-1-9-单向通道">1.1.9. 单向通道</router-link></li><li><router-link to="#_1-1-10-通道总结">1.1.10. 通道总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h3 id="_1-1-1-channel" tabindex="-1"><a class="header-anchor" href="#_1-1-1-channel" aria-hidden="true">#</a> 1.1.1. channel</h3>
<p>单纯地将函数并发执行是没有意义的。函数与函数间需要交换数据才能体现并发执行函数的意义。</p>
<p>虽然可以使用共享内存进行数据交换，但是共享内存在不同的goroutine中容易发生竞态问题。为了保证数据交换的正确性，必须使用互斥量对内存进行加锁，这种做法势必造成性能问题。</p>
<p>Go语言的并发模型是CSP（Communicating Sequential Processes），提倡通过通信共享内存而不是通过共享内存而实现通信。</p>
<p>如果说goroutine是Go程序并发的执行体，channel就是它们之间的连接。channel是可以让一个goroutine发送特定值到另一个goroutine的通信机制。</p>
<p>Go 语言中的通道（channel）是一种特殊的类型。通道像一个传送带或者队列，总是遵循先入先出（First In First Out）的规则，保证收发数据的顺序。每一个通道都是一个具体类型的导管，也就是声明channel的时候需要为其指定元素类型。</p>
<h3 id="_1-1-2-channel类型" tabindex="-1"><a class="header-anchor" href="#_1-1-2-channel类型" aria-hidden="true">#</a> 1.1.2. channel类型</h3>
<p>channel是一种类型，一种引用类型。声明通道类型的格式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    var 变量 chan 元素类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举几个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">var</span> ch1 <span class="token keyword">chan</span> <span class="token builtin">int</span>   <span class="token comment">// 声明一个传递整型的通道</span>
    <span class="token keyword">var</span> ch2 <span class="token keyword">chan</span> <span class="token builtin">bool</span>  <span class="token comment">// 声明一个传递布尔型的通道</span>
    <span class="token keyword">var</span> ch3 <span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token comment">// 声明一个传递int切片的通道</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-创建channel" tabindex="-1"><a class="header-anchor" href="#_1-1-3-创建channel" aria-hidden="true">#</a> 1.1.3. 创建channel</h3>
<p>通道是引用类型，通道类型的空值是nil。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> ch <span class="token keyword">chan</span> <span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token comment">// &lt;nil></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>声明的通道后需要使用make函数初始化之后才能使用。</p>
<p>创建channel的格式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    make(chan 元素类型, [缓冲大小])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>channel的缓冲大小是可选的。</p>
<p>举几个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>ch4 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
ch5 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
ch6 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-channel操作" tabindex="-1"><a class="header-anchor" href="#_1-1-4-channel操作" aria-hidden="true">#</a> 1.1.4. channel操作</h3>
<p>通道有发送（send）、接收(receive）和关闭（close）三种操作。</p>
<p>发送和接收都使用&lt;-符号。</p>
<p>现在我们先使用以下语句定义一个通道：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="发送" tabindex="-1"><a class="header-anchor" href="#发送" aria-hidden="true">#</a> 发送</h4>
<p>将一个值发送到通道中。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>ch <span class="token operator">&lt;-</span> <span class="token number">10</span> <span class="token comment">// 把10发送到ch中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="接收" tabindex="-1"><a class="header-anchor" href="#接收" aria-hidden="true">#</a> 接收</h4>
<p>从一个通道中接收值。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>x <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch <span class="token comment">// 从ch中接收值并赋值给变量x</span>
<span class="token operator">&lt;-</span>ch       <span class="token comment">// 从ch中接收值，忽略结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h4>
<p>我们通过调用内置的close函数来关闭通道。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关于关闭通道需要注意的事情是，只有在通知接收方goroutine所有的数据都发送完毕的时候才需要关闭通道。通道是可以被垃圾回收机制回收的，它和关闭文件是不一样的，在结束操作之后关闭文件是必须要做的，但关闭通道不是必须的。</p>
<p>关闭后的通道有以下特点：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.对一个关闭的通道再发送值就会导致panic。
    2.对一个关闭的通道进行接收会一直获取值直到通道为空。
    3.对一个关闭的并且没有值的通道执行接收操作会得到对应类型的零值。
    4.关闭一个已经关闭的通道会导致panic。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-5-无缓冲的通道" tabindex="-1"><a class="header-anchor" href="#_1-1-5-无缓冲的通道" aria-hidden="true">#</a> 1.1.5. 无缓冲的通道</h3>
<p><img src="https://www.topgoer.com/static/7.1/3.png" alt="img"></p>
<p>无缓冲的通道又称为阻塞的通道。我们来看一下下面的代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"发送成功"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码能够通过编译，但是执行的时候会出现以下错误：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    fatal error: all goroutines are asleep - deadlock!

    goroutine 1 [chan send]:
    main.main()
            .../src/github.com/pprof/studygo/day06/channel02/main.go:8 +0x54
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么会出现deadlock错误呢？</p>
<p>因为我们使用ch := make(chan int)创建的是无缓冲的通道，无缓冲的通道只有在有人接收值的时候才能发送值。就像你住的小区没有快递柜和代收点，快递员给你打电话必须要把这个物品送到你的手中，简单来说就是无缓冲的通道必须有接收才能发送。</p>
<p>上面的代码会阻塞在ch &lt;- 10这一行代码形成死锁，那如何解决这个问题呢？</p>
<p>一种方法是启用一个goroutine去接收值，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">recv</span><span class="token punctuation">(</span>c <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ret <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"接收成功"</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">recv</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token comment">// 启用goroutine从通道接收值</span>
    ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"发送成功"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无缓冲通道上的发送操作会阻塞，直到另一个goroutine在该通道上执行接收操作，这时值才能发送成功，两个goroutine将继续执行。相反，如果接收操作先执行，接收方的goroutine将阻塞，直到另一个goroutine在该通道上发送一个值。</p>
<p>使用无缓冲通道进行通信将导致发送和接收的goroutine同步化。因此，无缓冲通道也被称为同步通道。</p>
<h3 id="_1-1-6-有缓冲的通道" tabindex="-1"><a class="header-anchor" href="#_1-1-6-有缓冲的通道" aria-hidden="true">#</a> 1.1.6. 有缓冲的通道</h3>
<p>解决上面问题的方法还有一种就是使用有缓冲区的通道。</p>
<p><img src="https://s2.loli.net/2022/04/10/wL8WEjvJNsgxa3z.png" alt="img"></p>
<p>我们可以在使用make函数初始化通道的时候为其指定通道的容量，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 创建一个容量为1的有缓冲区通道</span>
    ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"发送成功"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要通道的容量大于零，那么该通道就是有缓冲的通道，通道的容量表示通道中能存放元素的数量。就像你小区的快递柜只有那么个多格子，格子满了就装不下了，就阻塞了，等到别人取走一个快递员就能往里面放一个。</p>
<p>我们可以使用内置的len函数获取通道内元素的数量，使用cap函数获取通道的容量，虽然我们很少会这么做。</p>
<h3 id="_1-1-7-close" tabindex="-1"><a class="header-anchor" href="#_1-1-7-close" aria-hidden="true">#</a> 1.1.7. close()</h3>
<p>可以通过内置的close()函数关闭channel（如果你的管道不往里存值或者取值的时候一定记得关闭管道）</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            c <span class="token operator">&lt;-</span> i
        <span class="token punctuation">}</span>
        <span class="token function">close</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> data<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c<span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main结束"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-8-如何优雅的从通道循环取值" tabindex="-1"><a class="header-anchor" href="#_1-1-8-如何优雅的从通道循环取值" aria-hidden="true">#</a> 1.1.8. 如何优雅的从通道循环取值</h3>
<p>当通过通道发送有限的数据时，我们可以通过close函数关闭通道来告知从该通道接收值的goroutine停止等待。当通道被关闭时，往该通道发送值会引发panic，从该通道里接收的值一直都是类型零值。那如何判断一个通道是否被关闭了呢？</p>
<p>我们来看下面这个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// channel 练习</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token comment">// 开启goroutine将0~100的数发送到ch1中</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            ch1 <span class="token operator">&lt;-</span> i
        <span class="token punctuation">}</span>
        <span class="token function">close</span><span class="token punctuation">(</span>ch1<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 开启goroutine从ch1中接收值，并将该值的平方发送到ch2中</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            i<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1 <span class="token comment">// 通道关闭后再取值ok=false</span>
            <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            ch2 <span class="token operator">&lt;-</span> i <span class="token operator">*</span> i
        <span class="token punctuation">}</span>
        <span class="token function">close</span><span class="token punctuation">(</span>ch2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 在主goroutine中从ch2中接收值打印</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> ch2 <span class="token punctuation">{</span> <span class="token comment">// 通道关闭后会退出for range循环</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的例子中我们看到有两种方式在接收值的时候判断通道是否被关闭，我们通常使用的是for range的方式。</p>
<h3 id="_1-1-9-单向通道" tabindex="-1"><a class="header-anchor" href="#_1-1-9-单向通道" aria-hidden="true">#</a> 1.1.9. 单向通道</h3>
<p>有的时候我们会将通道作为参数在多个任务函数间传递，很多时候我们在不同的任务函数中使用通道都会对其进行限制，比如限制通道在函数中只能发送或只能接收。</p>
<p>Go语言中提供了单向通道来处理这种情况。例如，我们把上面的例子改造如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">counter</span><span class="token punctuation">(</span>out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        out <span class="token operator">&lt;-</span> i
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">squarer</span><span class="token punctuation">(</span>out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">,</span> in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
        out <span class="token operator">&lt;-</span> i <span class="token operator">*</span> i
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">printer</span><span class="token punctuation">(</span>in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">counter</span><span class="token punctuation">(</span>ch1<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">squarer</span><span class="token punctuation">(</span>ch2<span class="token punctuation">,</span> ch1<span class="token punctuation">)</span>
    <span class="token function">printer</span><span class="token punctuation">(</span>ch2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.chan&lt;- int是一个只能发送的通道，可以发送但是不能接收；
    2.&lt;-chan int是一个只能接收的通道，可以接收但是不能发送。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数传参及任何赋值操作中将双向通道转换为单向通道是可以的，但反过来是不可以的。</p>
<h3 id="_1-1-10-通道总结" tabindex="-1"><a class="header-anchor" href="#_1-1-10-通道总结" aria-hidden="true">#</a> 1.1.10. 通道总结</h3>
<p>channel常见的异常总结，如下图：</p>
<p><img src="https://s2.loli.net/2022/04/10/kvSeTipyJbnUI84.png" alt="通道总结"></p>
<p>注意:关闭已经关闭的channel也会引发panic。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '10.md' style='float:left'>⬆️上一节🔗</a><a href = '12.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


