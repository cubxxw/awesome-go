<template><div><h1 id="goroutine-协程-和channel-管道" tabindex="-1"><a class="header-anchor" href="#goroutine-协程-和channel-管道" aria-hidden="true">#</a> goroutine(协程)和channel(管道)</h1>
<nav class="table-of-contents"><ul><li><router-link to="#协程和管道">协程和管道</router-link><ul><li><router-link to="#进程">进程</router-link></li><li><router-link to="#go语言协程和go主线程">Go语言协程和Go主线程</router-link></li><li><router-link to="#goroutine的调度模型">goroutine的调度模型</router-link></li></ul></li><li><router-link to="#channle-管道">channle(管道)</router-link></li><li><router-link to="#不同的gorontine-之间如何通信">不同的gorontine 之间如何通信</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://golang.org/#" target="_blank" rel="noopener noreferrer">https://golang.org/#<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<hr>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://nsddd.top" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="协程和管道" tabindex="-1"><a class="header-anchor" href="#协程和管道" aria-hidden="true">#</a> 协程和管道</h2>
<blockquote>
<p>先看一个需求,统计1~900000000000中有哪些素数</p>
</blockquote>
<p><strong>传统方法：使用一个循环，判断哪些数是素数</strong></p>
<p><strong>使用并发或并行的方式，==将统计素数的任务分配个多个goroution完成==(速度最少提高四倍，分配给四个CPU)</strong></p>
<h3 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h3>
<blockquote>
<p>在学习goroutine中我们需要熟悉下操作系统的进程</p>
</blockquote>
<p><strong>1. 进程：进程就是程序在操作系统中的一次执行过程，是系统进行资源调度和分配的基本单位</strong></p>
<p><strong>2. 线程：线程是进程的一个执行实例，是程序执行的一个最小单位，它是比进程跟小能够独立完成的基本单位。</strong></p>
<blockquote>
<p>比如打开网盘，此时打开网盘是一个进程，如果我们在网盘中下载多个视频，此时下载就叫做线程，线程吃的资源更小</p>
</blockquote>
<p><strong>一个进程可以创建或者销毁多个线程，同一个进程中的多个线程可以==并发==进行</strong></p>
<p><strong>一个程序至少有一个进程，一个进程至少有一个线程</strong></p>
<p>🖱️<RouterLink to="/markdown/%E5%B9%B6%E5%8F%91.html">点击进入操作系统的并发学习</RouterLink></p>
<h3 id="go语言协程和go主线程" tabindex="-1"><a class="header-anchor" href="#go语言协程和go主线程" aria-hidden="true">#</a> Go语言协程和Go主线程</h3>
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
<p><img src="@source/markdown/images/RGvViKLpwlOXuEB.png" alt="image-20220319135256999"></p>
<p><strong>案例</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: goroutine.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sat 19 Mar 2022 02:09:15 PM CST
 ************************************************************************/</span>

<span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"strconv"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>
<span class="token comment">//func</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"test hello word"</span><span class="token operator">+</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//每隔一秒输出一个hello word,输出十次，使用goroutine</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//调用</span>
    <span class="token comment">/*线程 Go
    go test()   //同时执行
    */</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main hello word"</span><span class="token operator">+</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go run goroutine.go</span>
<span class="token builtin class-name">test</span> hello word1
<span class="token builtin class-name">test</span> hello word2
<span class="token builtin class-name">test</span> hello word3
<span class="token builtin class-name">test</span> hello word4
<span class="token builtin class-name">test</span> hello word5
<span class="token builtin class-name">test</span> hello word6
<span class="token builtin class-name">test</span> hello word7
<span class="token builtin class-name">test</span> hello word8
<span class="token builtin class-name">test</span> hello word9
<span class="token builtin class-name">test</span> hello word10

main hello word1
main hello word2
main hello word3
main hello word4
main hello word5
main hello word6
main hello word7
main hello word8
main hello word9
main hello word10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由此可见，必须要把test函数中打完后才进行下面的,那么此时我们如何开启一个线程</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go test() //开启一个线程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go run goroutine.go</span>
main hello word1
<span class="token builtin class-name">test</span> hello word1
<span class="token builtin class-name">test</span> hello word2
main hello word2
main hello word3
<span class="token builtin class-name">test</span> hello word3
<span class="token builtin class-name">test</span> hello word4
main hello word4
main hello word5
<span class="token builtin class-name">test</span> hello word5
<span class="token builtin class-name">test</span> hello word6
main hello word6
main hello word7
<span class="token builtin class-name">test</span> hello word7
<span class="token builtin class-name">test</span> hello word8
main hello word8
main hello word9
<span class="token builtin class-name">test</span> hello word9
<span class="token builtin class-name">test</span> hello word10
main hello word10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由此可见，线程为我们开启了一个新的分支</strong></p>
<p><strong>1. 主线程是一个物理线程，是直接作用在cup上的，非常消耗cpu资源</strong></p>
<p><strong>2. 协程是从主线程开启的，是轻量级线程，是逻辑态，对资源的消耗比较少</strong></p>
<p><strong>3. Golang的协程机制特别重要，可以同时开启上万个协程</strong></p>
<h3 id="goroutine的调度模型" tabindex="-1"><a class="header-anchor" href="#goroutine的调度模型" aria-hidden="true">#</a> goroutine的调度模型</h3>
<p><strong>MPG模式基本介绍</strong></p>
<p><img src="@source/markdown/images/CwzYIygUK5QivaV.png" alt="image-20220319143014152"></p>
<p><strong>M物理线程比较消耗资源，P上下文环境是指需要的资源和操作系统的状态</strong></p>
<p><img src="https://s2.loli.net/2022/03/19/IFZ7pgGkhsX6Qmy.png" alt="image-20220319144018357"></p>
<p><img src="@source/markdown/images/ARjx3snQYJ1hwZb.png" alt="image-20220319145245954"></p>
<hr>
<blockquote>
<p>那么在Golang中如何设置运行的CPU数目呢？</p>
</blockquote>
<p>**可以设置最大的CPU数目 **</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func GOMAXPROCS(n int)int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>获取cpu的数目</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func NumCPU() int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>  <span class="token comment">/************************************************************************
	 > File Name: cpu.go
     > Author: smile
     > Mail: 3293172751nss@gmail.com 
     > Created Time: Sat 19 Mar 2022 03:07:47 PM CST
  ************************************************************************/</span>
 <span class="token keyword">package</span> main
 <span class="token keyword">import</span><span class="token punctuation">(</span>
     <span class="token string">"fmt"</span>
     <span class="token string">"runtime"</span>
 <span class="token punctuation">)</span>
 <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 
     cpuNum <span class="token operator">:=</span> runtime<span class="token punctuation">.</span><span class="token function">NumCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     num <span class="token operator">:=</span> runtime<span class="token punctuation">.</span><span class="token function">NumCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                                          
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"cpuNum = "</span><span class="token punctuation">,</span>cpuNum<span class="token punctuation">)</span>
 
     <span class="token comment">//设置</span>
     runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"num = "</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channle-管道" tabindex="-1"><a class="header-anchor" href="#channle-管道" aria-hidden="true">#</a> channle(管道)</h2>
<blockquote>
<p>计算1~200每一个数的阶乘，并放入到map中，map做一个全程的</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> <span class="token keyword">package</span> main
 <span class="token keyword">import</span><span class="token punctuation">(</span>
     <span class="token string">"fmt"</span>
 <span class="token punctuation">)</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    myMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment">//test函数就是计算n!</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token number">1</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
        res <span class="token operator">=</span> res <span class="token operator">*</span> i
        <span class="token comment">//我们将res放入到myMap</span>
        myMap<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> res 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">200</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
            <span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>     <span class="token comment">//使用协程完成</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//使用range输出</span>
        <span class="token keyword">for</span> i<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> myMap<span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"map[%d]=%d\n"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时编译出来没有结果，一个都没有，主线程还没有结束</strong></p>
<p><strong>注意：写入的时候不能并发，不能同时写入，而读取数据可以用并发</strong></p>
<blockquote>
<p>在运行某一种程序的时候如何知道是否存在资源竞争的问题。方法很简单，在编译的时候加入一个参数 <code v-pre>-race</code>即可</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go build -race test test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="不同的gorontine-之间如何通信" tabindex="-1"><a class="header-anchor" href="#不同的gorontine-之间如何通信" aria-hidden="true">#</a> 不同的gorontine 之间如何通信</h2>
<ol>
<li>全局变量加锁同步</li>
<li>channel</li>
</ol>
<p><strong>因为没有对全局变量加锁，因此会出现资源争夺的问题，代码会出现错误，此时要解决的话可以加入互斥锁</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> m<span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token operator">%</span>d <span class="token operator">!=</span> <span class="token operator">%</span>v\n"<span class="token punctuation">,</span>k<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '17.md' style='float:left'>⬆️上一节🔗</a><a href = '19.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


