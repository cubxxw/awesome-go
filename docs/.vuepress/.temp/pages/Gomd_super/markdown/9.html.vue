<template><div><h1 id="goroutine" tabindex="-1"><a class="header-anchor" href="#goroutine" aria-hidden="true">#</a> Goroutine</h1>
<nav class="table-of-contents"><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#协程和管道">协程和管道</router-link><ul><li><router-link to="#进程">#进程</router-link></li><li><router-link to="#go语言协程和go主线程">#Go语言协程和Go主线程</router-link></li></ul></li><li><router-link to="#使用goroutine">使用goroutine</router-link><ul><li><router-link to="#启动单个goroutine">启动单个goroutine</router-link></li><li><router-link to="#启动多个goroutine">启动多个goroutine</router-link></li><li><router-link to="#注意">注意</router-link></li></ul></li><li><router-link to="#goroutine与线程">goroutine与线程</router-link><ul><li><router-link to="#可增长的栈">可增长的栈</router-link></li><li><router-link to="#goroutine调度">goroutine调度</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<blockquote>
<p>Goroutine是很重要的，接触了Go语言，使用这个语言越多，越发现这门语言跟c语言很像：平坦的内存，指针，翻译机器指令等等。</p>
<p>Go的<code v-pre>runtime</code>提供了一些基本的操作系统抽象，<code v-pre>goroutine</code>对应进程，<code v-pre>channel</code>对应进程间通信，另外Go有自己的虚拟内存管理，所以如果用Go来编写内核，进程调度和内存管理这些繁琐的东西就直接可以用现成的了，那么因此是不是可以实现 <a href="https://github.com/3293172751/cubgo-os/" target="_blank" rel="noopener noreferrer">cubos-go<ExternalLinkIcon/></a></p>
</blockquote>
<p>在java/c++中我们要实现并发编程的时候，我们通常需要自己维护一个线程池，并且需要自己去包装一个又一个的任务，同时需要自己去调度线程执行任务并维护上下文切换，这一切通常会耗费程序员大量的心智。那么能不能有一种机制，程序员只需要定义很多个任务，让系统去帮助我们把这些任务分配到CPU上实现并发执行呢？</p>
<p>Go语言中的goroutine就是这样一种机制，goroutine的概念类似于线程，但 goroutine是由Go的运行时（runtime）调度和管理的。Go程序会智能地将 goroutine 中的任务合理地分配给每个CPU。Go语言之所以被称为现代化的编程语言，就是因为它在语言层面已经<strong>内置了调度和上下文切换的机制</strong>。</p>
<p>在Go语言编程中你不需要去自己写进程、线程、协程，你的技能包里只有一个技能–goroutine，当你需要让某个任务并发执行的时候，你只需要把这个任务包装成一个函数，开启一个goroutine去执行这个函数就可以了.</p>
<h2 id="协程和管道" tabindex="-1"><a class="header-anchor" href="#协程和管道" aria-hidden="true">#</a> 协程和管道</h2>
<blockquote>
<p>先看一个需求,统计1~900000000000中有哪些素数</p>
</blockquote>
<p><strong>传统方法：使用一个循环，判断哪些数是素数</strong></p>
<p><strong>使用并发或并行的方式，==将统计素数的任务分配个多个goroution完成==(速度最少提高四倍，分配给四个CPU)</strong></p>
<h3 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> <a href="https://go.nsddd.top/markdown/18.html#%E8%BF%9B%E7%A8%8B" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>进程</h3>
<blockquote>
<p>在学习goroutine中我们需要熟悉下操作系统的进程</p>
</blockquote>
<ol>
<li>
<p>进程：进程就是程序在操作系统中的一次执行过程，是系统进行资源调度和分配的基本单位</p>
</li>
<li>
<p>线程：线程是进程的一个执行实例，是程序执行的一个最小单位，它是比进程跟小能够独立完成的基本单位。</p>
</li>
</ol>
<blockquote>
<p>比如打开网盘，此时打开网盘是一个进程，如果我们在网盘中下载多个视频，此时下载就叫做线程，线程吃的资源更小</p>
</blockquote>
<p><strong>一个进程可以创建或者销毁多个线程，同一个进程中的多个线程可以==并发==进行</strong></p>
<p><strong>一个程序至少有一个进程，一个进程至少有一个线程</strong></p>
<p>🖱️<a href="https://go.nsddd.top/markdown/%E5%B9%B6%E5%8F%91.html" target="_blank" rel="noopener noreferrer">点击进入操作系统的并发学习<ExternalLinkIcon/></a></p>
<h3 id="go语言协程和go主线程" tabindex="-1"><a class="header-anchor" href="#go语言协程和go主线程" aria-hidden="true">#</a> <a href="https://go.nsddd.top/markdown/18.html#go%E8%AF%AD%E8%A8%80%E5%8D%8F%E7%A8%8B%E5%92%8Cgo%E4%B8%BB%E7%BA%BF%E7%A8%8B" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>Go语言协程和Go主线程</h3>
<p>Go语言主线程（也称为线程，也可以理解为进程），一个Go语言线程上可以起多个协程，<strong>协程是轻量级的线程</strong></p>
<blockquote>
<p>编译器优化</p>
</blockquote>
<p><strong>Go语言协程特点（重要）：</strong></p>
<ul>
<li>有独立的栈空间</li>
<li>共享程序堆空间</li>
<li>调度由用户控制</li>
<li>协程是轻量级的线程</li>
</ul>
<p><img src="https://go.nsddd.top/assets/RGvViKLpwlOXuEB.29ead913.png" alt="image-20220319135256999"></p>
<h2 id="使用goroutine" tabindex="-1"><a class="header-anchor" href="#使用goroutine" aria-hidden="true">#</a> 使用goroutine</h2>
<p>Go语言中使用goroutine非常简单，只需要在调用函数的时候在前面加上go关键字，就可以为一个函数创建一个goroutine。</p>
<p>一个goroutine必定对应一个函数，可以创建多个goroutine去执行相同的函数。</p>
<h3 id="启动单个goroutine" tabindex="-1"><a class="header-anchor" href="#启动单个goroutine" aria-hidden="true">#</a> 启动单个goroutine</h3>
<p>启动goroutine的方式非常简单，只需要在调用的函数（普通函数和匿名函数）前面加上一个go关键字。</p>
<p><strong>举个例子如下：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello Goroutine!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main goroutine done!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例中hello函数和下面的语句是串行的，执行的结果是打印完Hello Goroutine!后打印main goroutine done!。</p>
<p>接下来我们在调用hello函数前面加上关键字go，也就是启动一个goroutine去执行hello这个函数。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello Goroutine!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 启动另外一个goroutine去执行hello函数</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main goroutine done!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一次的执行结果只打印了<code v-pre>main goroutine done!</code>，并没有打印<code v-pre>Hello Goroutine!</code>。为什么呢？</p>
<p>📜 对上面的解释：</p>
<blockquote>
<p>在程序启动时，Go程序就会为<code v-pre>main()</code>函数创建一个默认的<code v-pre>goroutine</code>。</p>
<p>当<code v-pre>main()</code>函数返回的时候该<code v-pre>goroutine</code>就结束了，所有在<code v-pre>main()</code>函数中启动的<code v-pre>goroutine</code>会一同结束.</p>
</blockquote>
<p>所以我们要想办法让main函数等一等hello函数，最简单粗暴的方式就是<code v-pre>time.Sleep</code>了。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello Goroutine!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 启动另外一个goroutine去执行hello函数</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main goroutine done!"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的代码你会发现，这一次先打印<code v-pre>main goroutine done!</code>，然后紧接着打印<code v-pre>Hello Goroutine!</code>。</p>
<p>首先为什么会先打印<code v-pre>main goroutine done!</code>是因为我们在创建新的<code v-pre>goroutine</code>的时候需要花费一些时间，而此时<code v-pre>main</code>函数所在的<code v-pre>goroutine</code>是继续执行的。</p>
<h3 id="启动多个goroutine" tabindex="-1"><a class="header-anchor" href="#启动多个goroutine" aria-hidden="true">#</a> 启动多个goroutine</h3>
<p>在Go语言中实现并发就是这样简单，我们还可以启动多个<code v-pre>goroutine</code>。让我们再来一个例子： （这里使用了<code v-pre>sync.WaitGroup</code>来实现<code v-pre>goroutine</code>的同步）</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// goroutine结束就登记-1</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello Goroutine!"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 启动一个goroutine就登记+1</span>
        <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>   <span class="token comment">//这个岂不是启动了十次</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 等待所有登记的goroutine都结束</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多次执行上面的代码，会发现每次打印的数字的顺序都不一致。这是因为10个<code v-pre>goroutine</code>是并发执行的，而<code v-pre>goroutine</code>的调度是随机的。</p>
<h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<ul>
<li>如果主协程退出了，其他任务还执行吗（运行下面的代码测试一下吧）</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 合起来写</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"new goroutine: i = %d\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
            time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    i <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"main goroutine: i = %d\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goroutine与线程" tabindex="-1"><a class="header-anchor" href="#goroutine与线程" aria-hidden="true">#</a> goroutine与线程</h2>
<h3 id="可增长的栈" tabindex="-1"><a class="header-anchor" href="#可增长的栈" aria-hidden="true">#</a> 可增长的栈</h3>
<p>OS线程（操作系统线程）一般都有固定的栈内存（通常为2MB），一个goroutine的栈在其生命周期开始时只有很小的栈（典型情况下2KB），goroutine的栈不是固定的，他可以按需增大和缩小，goroutine的栈大小限制可以达到1GB，虽然极少会用到这个大。所以在Go语言中一次创建十万左右的goroutine也是可以的。</p>
<h3 id="goroutine调度" tabindex="-1"><a class="header-anchor" href="#goroutine调度" aria-hidden="true">#</a> goroutine调度</h3>
<p>GPM是Go语言运行时（runtime）层面的实现，是go语言自己实现的一套调度系统。区别于操作系统调度OS线程。</p>
<ul>
<li><code v-pre>G</code>很好理解，就是个<code v-pre>goroutine</code>的，里面除了存放本goroutine信息外 还有与所在P的绑定等信息。</li>
<li><code v-pre>P</code>管理着一组goroutine队列，P里面会存储当前goroutine运行的上下文环境（函数指针，堆栈地址及地址边界），P会对自己管理的goroutine队列做一些调度（比如把占用CPU时间较长的goroutine暂停、运行后续的goroutine等等）当自己的队列消费完了就去全局队列里取，如果全局队列里也消费完了会去其他P的队列里抢任务。</li>
<li><code v-pre>M</code>（machine）是Go运行时（runtime）对操作系统内核线程的虚拟， M与内核线程一般是一一映射的关系， 一个groutine最终是要放到M上执行的；</li>
</ul>
<p>P与M一般也是一一对应的。他们关系是： P管理着一组G挂载在M上运行。当一个G长久阻塞在一个M上时，<code v-pre>runtime</code>会新建一个M，阻塞G所在的P会把其他的G 挂载在新建的M上。当旧的G阻塞完成或者认为其已经死掉时 回收旧的M。</p>
<p>P的个数是通过<code v-pre>runtime.GOMAXPROCS</code>设定（最大256），<code v-pre>Go1.5</code>版本之后默认为物理线程数。 在并发量大的时候会增加一些P和M，但不会太多，切换太频繁的话得不偿失。</p>
<p>单从线程调度讲，Go语言相比起其他语言的优势在于OS线程是由OS内核来调度的，goroutine则是由Go运行时（runtime）自己的调度器调度的，这个调度器使用一个称为<code v-pre>m:n</code>调度的技术（复用/调度m个<code v-pre>goroutine</code>到n个OS线程）。 其一大特点是<code v-pre>goroutine</code>的调度是在用户态下完成的， 不涉及内核态与用户态之间的频繁切换，包括内存的分配与释放，都是在用户态维护着一块大的内存池， 不直接调用系统的<code v-pre>malloc</code>函数（除非内存池需要改变），成本比调度OS线程低很多。 另一方面充分利用了多核的硬件资源，近似的把若干<code v-pre>goroutine</code>均分在物理线程上， 再加上本身<code v-pre>goroutine</code>的超轻量，以上种种保证了go调度方面的性能。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '8.md' style='float:left'>⬆️上一节🔗</a><a href = '10.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


