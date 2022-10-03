<template><div><h1 id="channel-管道" tabindex="-1"><a class="header-anchor" href="#channel-管道" aria-hidden="true">#</a> channel(管道)</h1>
<nav class="table-of-contents"><ul><li><router-link to="#channel-管道-1">channel(管道)</router-link></li><li><router-link to="#chan底层分析">chan底层分析</router-link></li><li><router-link to="#channel关闭">channel关闭</router-link></li><li><router-link to="#channel的遍历">channel的遍历</router-link></li><li><router-link to="#goroutine-和-channel结合">goroutine 和 channel结合</router-link></li><li><router-link to="#channel使用细节">channel使用细节</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<hr>
<h2 id="channel-管道-1" tabindex="-1"><a class="header-anchor" href="#channel-管道-1" aria-hidden="true">#</a> channel(管道)</h2>
<p><strong>演示管道使用</strong></p>
<p><strong>channel初始化：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span> 
intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>一定要使用make不然会报错</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*创建一个可以存放3个int类型的管道*/</span>
    <span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span> 
    intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
    
    <span class="token comment">//看一下intchan是一种什么类型，地址还是数字</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"intchan 本身的值为:"</span><span class="token punctuation">,</span>intchan<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"intchan 本身的地址为%p:"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>intchan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>看下intChan是什么</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># go run chan.go </span>
intchan 本身的值为: 0xc00001e080
intchan 本身的地址：0xc00000e028
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由此可见，管道是一个地址</strong></p>
<p><img src="https://s2.loli.net/2022/03/20/eRdMEkUaCY2PpTW.png" alt="image-20220320114737171"></p>
<blockquote>
<p>管道是一个应用类型，使用函数变化的是地址</p>
</blockquote>
<p><strong>向管道写入数据</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: chan.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sun 20 Mar 2022 11:40:41 AM CST
 ************************************************************************/</span>
 <span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*创建一个可以存放3个int类型的管道*/</span>
    <span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span>
    intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token comment">//看一下intchan是一种什么类型，地址还是数字</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"intchan 本身的值为:"</span><span class="token punctuation">,</span>intChan<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"intchan 本身的地址为%p:\n"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>intChan<span class="token punctuation">)</span>

    <span class="token comment">//向管道中写入数据--注意使用的是&lt;- 写入符号</span>
    intChan <span class="token operator">&lt;-</span> <span class="token number">10</span>
    num <span class="token operator">:=</span> <span class="token number">211</span> <span class="token comment">//定义一个变量并且写入变量</span>
    intChan <span class="token operator">&lt;-</span> num
	<span class="token comment">/*注意 -- 当我们给管道写入数据的时候，不能超过其容量 ，此时只能写入一条数据了，因为长度不可以比容量高，最多为3*/</span>
    intChan <span class="token operator">&lt;-</span> a<span class="token operator">:=</span><span class="token number">100</span> <span class="token comment">//极限。此时再加入报错</span>
    <span class="token comment">//看看管道的长度和容量cap(容量)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"channel len = %v\n cap = %v\n"</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># go run chan.go </span>
intchan 本身的值为: 0xc0000aa000
intchan 本身的地址为0xc0000a4018:
channel len <span class="token operator">=</span> <span class="token number">3</span>
cap <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>所以在使用管道的时候不可以超过最大的容量，可以将管道中的数据<strong>取出来后再插入</strong>，取出数据后管道长度会发生变化，但是它的容量map是不会发生变化的</p>
</blockquote>
<p><strong>案例</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//取出数据</span>
<span class="token keyword">var</span> num2 <span class="token builtin">int</span> 
num2 <span class="token operator">=</span> <span class="token operator">&lt;-</span>intChan 
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"num2 = "</span><span class="token punctuation">,</span>num2<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"channel len = %v\n cap = %v\n"</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">)</span>
num2 <span class="token operator">=</span> <span class="token operator">&lt;-</span>intChan    <span class="token comment">//注意如果数据全部取出，再无休止的取出会报错</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"num2 = "</span><span class="token punctuation">,</span>num2<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"channel len = %v\n cap = %v\n"</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># go run chan.go </span>
intchan 本身的值为: 0xc0000aa000
intchan 本身的地址：0xc0000a4018
channel len <span class="token operator">=</span> <span class="token number">3</span>
cap <span class="token operator">=</span> <span class="token number">3</span>
num2 <span class="token operator">=</span>  <span class="token number">10</span>
channel len <span class="token operator">=</span> <span class="token number">2</span>
cap <span class="token operator">=</span> <span class="token number">3</span>
num2 <span class="token operator">=</span>  <span class="token number">211</span>
channel len <span class="token operator">=</span> <span class="token number">1</span>
cap <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>管道的数据可以直接扔掉，没有接收的变量</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token operator">&lt;-</span> intChan    <span class="token comment">//直接扔掉</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="chan底层分析" tabindex="-1"><a class="header-anchor" href="#chan底层分析" aria-hidden="true">#</a> chan底层分析</h2>
<details class="custom-container details"><summary>进入chan底层分析</summary>
<p><a href="chan%E5%BA%95%E5%B1%82%E5%88%86%E6%9E%90">⚡ chan底层分析</a></p>
</details>
<blockquote>
<p>如果有一个需求，希望管道既可以放结构体，又可以放指针，即可以放入任何类型变量</p>
<p><strong>此时我们可以定义一个空接口，空接口可以接收任何类型的</strong></p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> allChan <span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>       <span class="token comment">//空接口</span>
allChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> inerface<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channel关闭" tabindex="-1"><a class="header-anchor" href="#channel关闭" aria-hidden="true">#</a> channel关闭</h2>
<p><strong>使用内置函数close可以关闭channel，关闭后，只能读取数据而不能写入数据</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*创建一个可以存放3个int类型的管道*/</span>
    intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
    intChan <span class="token operator">&lt;-</span> <span class="token number">100</span>
    intChan <span class="token operator">&lt;-</span> <span class="token number">300</span>
    <span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>               <span class="token comment">//close关闭管道</span>
    
    <span class="token comment">/*
    intChan -&lt; 100
    不可以再写入会报错*/</span>
    a <span class="token operator">:=</span> <span class="token operator">&lt;-</span>intChan
    <span class="token comment">//看一下intchan是一种什么类型，地址还是数字</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"a="</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a= 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="channel的遍历" tabindex="-1"><a class="header-anchor" href="#channel的遍历" aria-hidden="true">#</a> channel的遍历</h2>
<p><strong>channel的遍历==只能使用<code v-pre>for-range</code>遍历，不可以使用普通的for循环==,因为长度会变化</strong></p>
<p><strong>情况：</strong></p>
<ol>
<li><strong>遍历时，channel没有关闭，出现deadlock的错误</strong></li>
<li><strong>遍历时，channel已经关闭，则会正常遍历，遍历完成，就退出遍历</strong></li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*创建一个可以存放100个int类型的管道,遍历*/</span>
    intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span><span class="token number">1</span><span class="token operator">++</span><span class="token punctuation">{</span>
        intChan <span class="token operator">&lt;-</span> <span class="token number">100</span><span class="token operator">*</span>i      	  <span class="token comment">//放入一百个数据到管道</span>
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>                <span class="token comment">//close关闭管道</span>
    
    <span class="token comment">//管道遍历</span>
   <span class="token comment">/* for i:=0; i&lt;len(intChan2);i++{
       不能使用该方法遍历！！！！！！！！！！ 
    }*/</span>
    <span class="token keyword">for</span> v<span class="token operator">:=</span><span class="token keyword">range</span> intChan<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"第"</span><span class="token operator">+</span><span class="token string">"数="</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goroutine-和-channel结合" tabindex="-1"><a class="header-anchor" href="#goroutine-和-channel结合" aria-hidden="true">#</a> goroutine 和 channel结合</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: jiehe.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sun 20 Mar 2022 02:09:34 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">writeData</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">50</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
    <span class="token comment">//放入数据</span>
    intChan <span class="token operator">&lt;-</span> i<span class="token operator">*</span>i
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"writeData"</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
    <span class="token comment">//写的时候休眠一秒钟</span>
       time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">readData</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span>exitChan <span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">for</span><span class="token punctuation">{</span>
        v<span class="token punctuation">,</span>ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>intChan 
        <span class="token keyword">if</span> <span class="token operator">!</span>ok<span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取到一个·数据"</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
            <span class="token comment">//读取的时候休眠一秒钟</span>
       time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        
    <span class="token punctuation">}</span>
    <span class="token comment">//读取数据后任务完成</span>
    exitChan <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
    <span class="token function">close</span><span class="token punctuation">(</span>exitChan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//创建A两个管道</span>

    intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span>
    exitChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">writeData</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">readData</span><span class="token punctuation">(</span>intChan<span class="token punctuation">,</span>exitChan<span class="token punctuation">)</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># go run  jiehe.go </span>
writeData <span class="token number">1</span>
读取到一个·数据 <span class="token number">1</span>
writeData <span class="token number">2</span>
读取到一个·数据 <span class="token number">4</span>
writeData <span class="token number">3</span>
读取到一个·数据 <span class="token number">9</span>
writeData <span class="token number">4</span>
读取到一个·数据 <span class="token number">16</span>
writeData <span class="token number">5</span>
读取到一个·数据 <span class="token number">25</span>
writeData <span class="token number">6</span>
读取到一个·数据 <span class="token number">36</span>
writeData <span class="token number">7</span>
读取到一个·数据 <span class="token number">49</span>
writeData <span class="token number">8</span>
读取到一个·数据 <span class="token number">64</span>
^Csignal: interrupt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>当我们make的管道容量很小，但是存入的数据很多，那么此时会出现诸塞</p>
</blockquote>
<hr>
<blockquote>
<p>我们回到开始的那一个问题，一个需求,统计1~80000中有哪些素数</p>
<p>我们当时想到的方法是将统计素数的任务分配给4个CPU去做（我只有4个<strong>并行</strong>，用8个<strong>并发</strong></p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token comment">//向 intChan放入 1-80000个数</span>
<span class="token keyword">func</span> <span class="token function">putNum</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">800000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>    
		intChan<span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>

	<span class="token comment">//关闭intChan</span>
	<span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 从 intChan取出数据，并判断是否为素数,如果是，就</span>
<span class="token comment">// 	//放入到primeChan</span>
<span class="token keyword">func</span> <span class="token function">primeNum</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> primeChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> exitChan <span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//使用for 循环</span>
	<span class="token comment">// var num int</span>
	<span class="token keyword">var</span> flag <span class="token builtin">bool</span> <span class="token comment">// </span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//time.Sleep(time.Millisecond * 10)</span>
		num<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>intChan <span class="token comment">//intChan 取不到..</span>
		
		<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span> 
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		flag <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">//假设是素数</span>
		<span class="token comment">//判断num是不是素数</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> num <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span><span class="token comment">//说明该num不是素数</span>
				flag <span class="token operator">=</span> <span class="token boolean">false</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> flag <span class="token punctuation">{</span>
			<span class="token comment">//将这个数就放入到primeChan</span>
			primeChan<span class="token operator">&lt;-</span> num
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"有一个primeNum 协程因为取不到数据，退出"</span><span class="token punctuation">)</span>
	<span class="token comment">//这里我们还不能关闭 primeChan</span>
	<span class="token comment">//向 exitChan 写入true</span>
	exitChan<span class="token operator">&lt;-</span> <span class="token boolean">true</span>	

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
	primeChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">)</span><span class="token comment">//放入结果</span>
	<span class="token comment">//标识退出的管道</span>
	exitChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// 4个</span>



	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token comment">//开启一个协程，向 intChan放入 1-80000个数</span>
	<span class="token keyword">go</span> <span class="token function">putNum</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
	<span class="token comment">//开启4个协程，从 intChan取出数据，并判断是否为素数,如果是，就</span>
	<span class="token comment">//放入到primeChan</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">primeNum</span><span class="token punctuation">(</span>intChan<span class="token punctuation">,</span> primeChan<span class="token punctuation">,</span> exitChan<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//这里我们主线程，进行处理</span>
	<span class="token comment">//直接</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token operator">&lt;-</span>exitChan
		<span class="token punctuation">}</span>

		end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"使用协程耗时="</span><span class="token punctuation">,</span> end <span class="token operator">-</span> start<span class="token punctuation">)</span>

		<span class="token comment">//当我们从exitChan 取出了4个结果，就可以放心的关闭 prprimeChan</span>
		<span class="token function">close</span><span class="token punctuation">(</span>primeChan<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


	<span class="token comment">//遍历我们的 primeChan ,把结果取出</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>primeChan
		<span class="token keyword">if</span> <span class="token operator">!</span>ok<span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//将结果输出</span>
<span class="token comment">//	fmt.Printf("素数=%d\n", res)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main线程退出"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># ./sushu </span>
有一个primeNum 协程因为取不到数据，退出
有一个primeNum 协程因为取不到数据，退出
有一个primeNum 协程因为取不到数据，退出
有一个primeNum 协程因为取不到数据，退出
有一个primeNum 协程因为取不到数据，退出
有一个primeNum 协程因为取不到数据，退出
有一个primeNum 协程因为取不到数据，退出
有一个primeNum 协程因为取不到数据，退出
使用协程耗时<span class="token operator">=</span> <span class="token number">2</span>
main线程退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channel使用细节" tabindex="-1"><a class="header-anchor" href="#channel使用细节" aria-hidden="true">#</a> channel使用细节</h2>
<p><strong>管道可以声明为只读或者只写，默认情况下，管道是即可读，也可以写入</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//默认可读可写</span>
    <span class="token keyword">var</span> chan0 <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span>
    
    <span class="token comment">//只写</span>
    <span class="token keyword">var</span> chan1 <span class="token keyword">chan</span> <span class="token operator">&lt;-</span> <span class="token builtin">int</span> 
    chan1 <span class="token operator">=</span> <span class="token function">maker</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>   
    
    <span class="token comment">//只读</span>
    <span class="token keyword">var</span> chan2 <span class="token operator">&lt;-</span> <span class="token keyword">chan</span> <span class="token builtin">int</span>
    num2 <span class="token operator">:=</span> <span class="token operator">&lt;</span> chan2     <span class="token comment">//只读</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>作用范围：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
    exitChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> sturct<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">send</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span>exitChan<span class="token punctuation">)</span>       <span class="token comment">//只写</span>
    <span class="token keyword">go</span> <span class="token function">recv</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span>exitChan<span class="token punctuation">)</span>       <span class="token comment">//只读</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>而且Go语言在底层做了优化，所以效率更高一些</p>
</blockquote>
<hr>
<blockquote>
<p>在我们实际开发中，可能不好确定什么时候关闭该管道，此时我们就不能用close，可以使用select解决方法</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">select</span><span class="token punctuation">{</span>
	<span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span>管道
	<span class="token operator">...</span><span class="token punctuation">.</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
	语句
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*前面有两个管道*/</span>
label          <span class="token comment">//标签，重新读取数据</span>
<span class="token keyword">for</span><span class="token punctuation">{</span>
    <span class="token keyword">select</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span>intChan <span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Prinf</span><span class="token punctuation">(</span><span class="token string">"从intChan管道中取出数据%d\n"</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
        <span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span>stringChan <span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Prinf</span><span class="token punctuation">(</span><span class="token string">"从stringChan管道中取出数据%d\n"</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Prinf</span><span class="token punctuation">(</span><span class="token string">"都取不到了，加入业务逻辑，加入或者"</span><span class="token punctuation">)</span>
        	breaK
        <span class="token comment">/*return : 代表跳出这个函数*/</span>
        <span class="token comment">//或者使用标签</span>
        <span class="token comment">/* break label */</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '18.md' style='float:left'>⬆️上一节🔗</a><a href = '20.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


