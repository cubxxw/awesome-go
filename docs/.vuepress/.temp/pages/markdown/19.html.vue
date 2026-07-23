<template><div><h1 id="channel-管道-以及互斥锁" tabindex="-1"><a class="header-anchor" href="#channel-管道-以及互斥锁" aria-hidden="true">#</a> channel(管道)以及互斥锁</h1>
<nav class="table-of-contents"><ul><li><router-link to="#channel-管道">channel(管道)</router-link></li><li><router-link to="#chan底层分析">chan底层分析</router-link></li><li><router-link to="#channel关闭">channel关闭</router-link></li><li><router-link to="#channel的遍历">channel的遍历</router-link></li><li><router-link to="#goroutine-和-channel结合">goroutine 和 channel结合</router-link></li><li><router-link to="#统计素数">统计素数</router-link></li><li><router-link to="#channel使用细节">channel使用细节</router-link><ul><li><router-link to="#单向管道">单向管道</router-link></li><li><router-link to="#select多路复用">select多路复用</router-link></li></ul></li><li><router-link to="#协程的panic处理">协程的panic处理</router-link></li><li><router-link to="#互斥锁">互斥锁</router-link><ul><li><router-link to="#互斥锁-1">互斥锁</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://golang.org/#" target="_blank" rel="noopener noreferrer">https://golang.org/#<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<hr>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://cubxxw.com" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<details class="custom-container details"><summary>不同的协程如何通信？</summary>
<p>方法：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⬇️ 或许你还可以使用管道</p>
</details>
<h2 id="channel-管道" tabindex="-1"><a class="header-anchor" href="#channel-管道" aria-hidden="true">#</a> channel(管道)</h2>
<p><strong>演示管道使用</strong></p>
<p><strong>channel初始化：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span> 
intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">管道是引用数据类型</p>
<p>一定要使用make不然会报错</p>
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
</div>
<div class="custom-container tip"><p class="custom-container-title">管道的基本操作</p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:channel管道
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 14:39:30
 * @FilePath: \code\go-super\37-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//创建一个管道</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//管道的容量是10</span>

	<span class="token comment">//给管l道中写入数据</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">20</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">30</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">40</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"len(ch) = "</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"cap(ch) = "</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"ch = "</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span>

	<span class="token comment">//从管道中读取数据</span>
	num <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"num = "</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>   <span class="token comment">//10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"再读取一个数据"</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span> <span class="token comment">//20</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"再读取一个数据"</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span> <span class="token comment">//30</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"再读取一个数据"</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span> <span class="token comment">//40</span>
	<span class="token comment">//fmt.Println("再读取一个数据", &lt;-ch) //error: all goroutines are asleep - deadlock!</span>

	<span class="token comment">//继续批量存储数据</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">50</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">150</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">250</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"len(ch) = "</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"cap(ch) = "</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"ch = "</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span>

	<span class="token comment">//遍历管道</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		num <span class="token operator">=</span> <span class="token operator">&lt;-</span>ch
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"num = "</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\37">\37</span>-main.go"</span>
len<span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token operator">=</span>  <span class="token number">4</span>
cap<span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token operator">=</span>  <span class="token number">10</span>
ch <span class="token operator">=</span>  0xc000110000
num <span class="token operator">=</span>  <span class="token number">10</span>
再读取一个数据 <span class="token number">20</span>
再读取一个数据 <span class="token number">30</span>
再读取一个数据 <span class="token number">40</span>
len<span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token operator">=</span>  <span class="token number">3</span>
cap<span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token operator">=</span>  <span class="token number">10</span>
ch <span class="token operator">=</span>  0xc000110000
num <span class="token operator">=</span>  <span class="token number">50</span>
num <span class="token operator">=</span>  <span class="token number">150</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 ⚠️：</p>
<p><code v-pre>fmt.Println(&quot;再读取一个数据&quot;, &lt;-ch)</code>  ：error: all goroutines are asleep - deadlock!</p>
<p><strong>管道阻塞引起死锁，所以一定要注意管道容量~</strong></p>
<p>遍历管道，我们发现上面的后面加入<code v-pre>250</code>并没有打印</p>
<blockquote>
<p><strong>for循环遍历管道的时候管道可以不关闭，但是for-range必须要关闭，但是我的for遍历好像会出现数据丢失，不知道什么原因</strong></p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"i = "</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或许我们可以使用<code v-pre>for-range</code>遍历：</p>
<ul>
<li>再此之前，你需要使用 <code v-pre>close(ch)</code> 关闭管道</li>
<li>管道里面是没有<code v-pre>key</code></li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//遍历管道</span>
<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> ch <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"v = "</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>只使用for也是一样的：</strong></p>
<p><strong>不能关闭管道，不然没法取出</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//关闭unbuffered channel</span>
<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>
	val<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch 
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取完毕"</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"var = "</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token comment">//不断读取管道中的数据</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>给定make值，因为len(ch)长度会变化：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"i = "</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡 上面的方法不需要关闭管道。</p>
</div>
<details class="custom-container details"><summary>截图案例</summary>
<p><img src="http://sm.cubxxw.com/smimage-20221025150553321.png" alt="image-20221025150553321"></p>
<p><img src="http://sm.cubxxw.com/smimage-20221025150456599.png" alt="image-20221025150456599"></p>
<p><img src="http://sm.cubxxw.com/smimage-20221025150403386.png" alt="image-20221025150403386"></p>
<p><img src="http://sm.cubxxw.com/smimage-20221025150523179.png" alt="image-20221025150523179"></p>
<p><img src="http://sm.cubxxw.com/smimage-20221025151321673.png" alt="image-20221025151321673"></p>
<p><img src="http://sm.cubxxw.com/smimage-20221025151331434.png" alt="image-20221025151331434"></p>
<p><img src="http://sm.cubxxw.com/smimage-20221025150718790.png" alt="image-20221025150718790"></p>
</details>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="chan底层分析" tabindex="-1"><a class="header-anchor" href="#chan底层分析" aria-hidden="true">#</a> chan底层分析</h2>
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
<p><strong>channel的遍历只能使用<code v-pre>for-range</code>遍历，不可以使用普通的for循环,因为长度会变化，当然你可以给定make的固定值。</strong></p>
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
<h2 id="统计素数" tabindex="-1"><a class="header-anchor" href="#统计素数" aria-hidden="true">#</a> 统计素数</h2>
<blockquote>
<p>我们回到开始的那一个问题，一个需求,统计<code v-pre>1~80000</code>中有哪些素数</p>
<p>我们当时想到的方法是将统计素数的任务分配给4个CPU去做（我只有4个<strong>并行</strong>，用8个<strong>并发</strong></p>
</blockquote>
<details class="custom-container details"><summary>主要思路</summary>
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
<h3 id="单向管道" tabindex="-1"><a class="header-anchor" href="#单向管道" aria-hidden="true">#</a> 单向管道</h3>
<details class="custom-container details"><summary>💡简单的一个案例如下：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:go 管道
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 16:55:49
 * @FilePath: \code\go-super\39-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
	ch1 <span class="token operator">&lt;-</span> <span class="token string">"a"</span> <span class="token comment">//写入管道</span>
	a <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1 <span class="token comment">//读取管道</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取管道"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

	ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//管道只能写入</span>
	ch2 <span class="token operator">&lt;-</span> <span class="token string">"b"</span>                    <span class="token comment">//写入管道</span>
	<span class="token comment">// b := &lt;-ch2                 //读取管道</span>
	<span class="token comment">// fmt.Println("读取管道", b) //读取管道</span>

	ch3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//管道只能读取</span>
	<span class="token comment">// ch3 &lt;- "c" //写入管道</span>
	c <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch3             <span class="token comment">//读取管道</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取管道"</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">//读取管道</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\3">\3</span>9-main.go"</span>
读取管道 a
fatal error: all goroutines are asleep - deadlock<span class="token operator">!</span>

goroutine <span class="token number">1</span> <span class="token punctuation">[</span>chan receive<span class="token punctuation">]</span>:
main.main<span class="token punctuation">(</span><span class="token punctuation">)</span>
	d:/文档/最近的/awesome-golang/docs/code/go-super/39-main.go:29 +0x106
<span class="token builtin class-name">exit</span> status <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</details>
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
<p>:::  details💡简单的一个案例如下：
管道的只读和只写操作定义</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:go只读只写管道
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:16:21
 * @FilePath: \code\go-super\40-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sync"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token comment">// 只读管道</span>
<span class="token keyword">func</span> <span class="token function">readChan</span><span class="token punctuation">(</span>ch <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		num <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
		<span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 只写管道</span>
<span class="token keyword">func</span> <span class="token function">writeChan</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		ch <span class="token operator">&lt;-</span> i
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// 100毫秒就是0.1秒</span>
	<span class="token punctuation">}</span>
	<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> ch <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">writeChan</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token comment">// 只写</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">readChan</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token comment">// 只读</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\40">\40</span>-main.go"</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>
<span class="token number">9</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="select多路复用" tabindex="-1"><a class="header-anchor" href="#select多路复用" aria-hidden="true">#</a> select多路复用</h3>
<div class="custom-container tip"><p class="custom-container-title">select多路复用</p>
<p>在我们实际开发中，可能不好确定什么时候关闭该管道，此时我们就不能用close，可以使用select解决方法</p>
<p><strong>注意：使用多路复用的时候不需要关闭<code v-pre>chan</code></strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">select</span><span class="token punctuation">{</span>
	<span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span>管道
	<span class="token operator">...</span><span class="token punctuation">.</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
	语句
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<details class="custom-container details"><summary>多路复用的解决方案</summary>
<p><strong>在某些情况下我们需要在多个管道中取出数据：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:select 多路复用
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:29:28
 * @FilePath: \code\go-super\41-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sync"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//int和int64的区别: int是根据操作系统的位数来决定的，32位系统就是int32，64位系统就是int64</span>
	ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
	ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

	<span class="token comment">//循环输入管道</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		ch1 <span class="token operator">&lt;-</span> i
		ch2 <span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取管道1"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			<span class="token keyword">case</span> v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch2<span class="token punctuation">:</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取管道2"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\41">\41</span>-main.go"</span>
读取管道2 <span class="token number">0</span>
读取管道1 <span class="token number">0</span>
读取管道1 <span class="token number">1</span>
读取管道2 <span class="token number">1</span>
读取管道2 <span class="token number">2</span>
读取管道2 <span class="token number">3</span>
读取管道1 <span class="token number">2</span>
读取管道2 <span class="token number">4</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
读取管道1 <span class="token number">15</span>
读取管道1 <span class="token number">16</span>
读取管道2 <span class="token number">26</span>
读取管道1 <span class="token number">17</span>
读取管道2 <span class="token number">27</span>
读取管道2 <span class="token number">28</span>
读取管道2 <span class="token number">29</span>
读取管道1 <span class="token number">18</span>
读取管道1 <span class="token number">19</span>
读取管道2 <span class="token number">30</span>
读取管道2 <span class="token number">31</span>
读取管道1 <span class="token number">20</span>
读取管道2 <span class="token number">32</span>
读取管道1 <span class="token number">21</span>
读取管道1 <span class="token number">22</span>
读取管道2 <span class="token number">33</span>
读取管道1 <span class="token number">23</span>
读取管道2 <span class="token number">34</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
读取管道1 <span class="token number">98</span>
读取管道1 <span class="token number">99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>💡简单的一个案例如下：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="协程的panic处理" tabindex="-1"><a class="header-anchor" href="#协程的panic处理" aria-hidden="true">#</a> 协程的panic处理</h2>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:Go语言协程异常处理
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:50:10
 * @FilePath: \code\go-super\44-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"协程出现异常:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">// 这里会出现数组越界异常</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"协程出现异常:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> mapping_1 <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	mapping_1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"hello"</span> <span class="token comment">// 这里会出现空指针异常</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\44">\44</span>-main.go"</span>
协程出现异常: assignment to entry <span class="token keyword">in</span> nil map
协程出现异常: runtime error: index out of range <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> with length <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<blockquote>
<p>协程出现异常：赋值给空映射中的条目（数组越界）</p>
<p>协程出现异常：运行时错误:索引超出范围[0]，长度为0</p>
</blockquote>
<h2 id="互斥锁" tabindex="-1"><a class="header-anchor" href="#互斥锁" aria-hidden="true">#</a> 互斥锁</h2>
<div class="custom-container warning"><p class="custom-container-title">资源竞争问题</p>
<p><strong>我们可能会使用协程同时操作<code v-pre>count</code>出现资源竞争的问题：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:资源竞争死锁
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 18:13:35
 * @FilePath: \code\go-super\45-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sync"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">var</span> count <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"the count is "</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"the count is "</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>根据不同的编译方式编译结果不同</summary>
<p><strong>直接build🚀 编译结果如下：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>the count is  <span class="token number">1</span>
the count is  <span class="token number">2</span>
the count is  <span class="token number">26</span>
the count is  <span class="token number">4</span>
the count is  <span class="token number">5</span>
the count is  <span class="token number">6</span>
the count is  <span class="token number">7</span>
the count is  <span class="token number">8</span>
the count is  <span class="token number">9</span>
the count is  <span class="token number">10</span>
the count is  <span class="token number">11</span>
the count is  <span class="token number">12</span>
the count is  <span class="token number">13</span>
the count is  <span class="token number">14</span>
the count is  <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上<code v-pre>-race</code>查看程序运行时候有竞争关系</p>
<p>此时就出问题了</p>
</details>
</div>
<h3 id="互斥锁-1" tabindex="-1"><a class="header-anchor" href="#互斥锁-1" aria-hidden="true">#</a> 互斥锁</h3>
<p>互斥锁是一种常用的同步机制，用于在多个线程中对共享资源进行访问控制。互斥锁的原理是：当一个线程访问共享资源时，其他线程不能访问该共享资源，直到该线程访问完毕。互斥锁可以保证共享资源在同一时刻只被一个线程访问，从而避免了资源的竞争和不一致性。
互斥锁的使用方法如下：</p>
<ol>
<li>定义一个互斥锁变量</li>
<li>在需要加锁的地方加锁</li>
<li>在需要解锁的地方解锁</li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> mutex sync<span class="token punctuation">.</span>Mutex <span class="token comment">// 定义一个互斥锁变量</span>
mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 加锁</span>
<span class="token comment">//这里面进行操作</span>
mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 解锁</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>💡简单的一个案例如下：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:资源竞争死锁
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 18:26:07
 * @FilePath: \code\go-super\45-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sync"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> mutex sync<span class="token punctuation">.</span>Mutex <span class="token comment">// 定义一个互斥锁变量</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">var</span> count <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 加锁</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"the count is "</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 解锁</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 加锁</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"the count is "</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 解锁</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
互斥锁是一种常用的同步机制，用于在多个线程中对共享资源进行访问控制。互斥锁的原理是：当一个线程访问共享资源时，其他线程不能访问该共享资源，直到该线程访问完毕。互斥锁可以保证共享资源在同一时刻只被一个线程访问，从而避免了资源的竞争和不一致性。
互斥锁的使用方法如下：
1. 定义一个互斥锁变量
2. 在需要加锁的地方加锁
3. 在需要解锁的地方解锁

var mutex sync.Mutex // 定义一个互斥锁变量
mutex.Lock() // 加锁
这里面进行操作
mutex.Unlock() // 解锁
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>D:<span class="token punctuation">\</span>文档<span class="token punctuation">\</span>最近的<span class="token punctuation">\</span>awesome-golang<span class="token punctuation">\</span>docs<span class="token punctuation">\</span>code<span class="token punctuation">\</span>go-super<span class="token operator">></span><span class="token number">45</span>-main.exe
the count is  <span class="token number">1</span>
the count is  <span class="token number">2</span>
the count is  <span class="token number">3</span>
the count is  <span class="token number">4</span>
the count is  <span class="token number">5</span>
the count is  <span class="token number">6</span>
the count is  <span class="token number">7</span>
the count is  <span class="token number">8</span>
the count is  <span class="token number">9</span>
the count is  <span class="token number">10</span>
the count is  <span class="token number">11</span>
the count is  <span class="token number">12</span>
the count is  <span class="token number">13</span>
the count is  <span class="token number">14</span>
the count is  <span class="token number">15</span>
the count is  <span class="token number">16</span>
the count is  <span class="token number">17</span>
the count is  <span class="token number">18</span>
the count is  <span class="token number">19</span>
the count is  <span class="token number">20</span>
the count is  <span class="token number">21</span>
the count is  <span class="token number">22</span>
the count is  <span class="token number">23</span>
the count is  <span class="token number">24</span>
the count is  <span class="token number">25</span>
the count is  <span class="token number">26</span>
the count is  <span class="token number">27</span>
the count is  <span class="token number">28</span>
the count is  <span class="token number">29</span>
the count is  <span class="token number">30</span>
the count is  <span class="token number">31</span>
the count is  <span class="token number">32</span>
the count is  <span class="token number">33</span>
the count is  <span class="token number">34</span>
the count is  <span class="token number">35</span>
the count is  <span class="token number">36</span>
the count is  <span class="token number">37</span>
the count is  <span class="token number">38</span>
the count is  <span class="token number">39</span>
the count is  <span class="token number">40</span>
the count is  <span class="token number">41</span>
the count is  <span class="token number">42</span>
the count is  <span class="token number">43</span>
the count is  <span class="token number">44</span>
the count is  <span class="token number">45</span>
the count is  <span class="token number">46</span>
the count is  <span class="token number">47</span>
the count is  <span class="token number">48</span>
the count is  <span class="token number">49</span>
the count is  <span class="token number">50</span>
the count is  <span class="token number">51</span>
the count is  <span class="token number">52</span>
the count is  <span class="token number">53</span>
the count is  <span class="token number">54</span>
the count is  <span class="token number">55</span>
the count is  <span class="token number">56</span>
the count is  <span class="token number">57</span>
the count is  <span class="token number">58</span>
the count is  <span class="token number">59</span>
the count is  <span class="token number">60</span>
the count is  <span class="token number">61</span>
the count is  <span class="token number">62</span>
the count is  <span class="token number">63</span>
the count is  <span class="token number">64</span>
the count is  <span class="token number">65</span>
the count is  <span class="token number">66</span>
the count is  <span class="token number">67</span>
the count is  <span class="token number">68</span>
the count is  <span class="token number">69</span>
the count is  <span class="token number">70</span>
the count is  <span class="token number">71</span>
the count is  <span class="token number">72</span>
the count is  <span class="token number">73</span>
the count is  <span class="token number">74</span>
the count is  <span class="token number">75</span>
the count is  <span class="token number">76</span>
the count is  <span class="token number">77</span>
the count is  <span class="token number">78</span>
the count is  <span class="token number">79</span>
the count is  <span class="token number">80</span>
the count is  <span class="token number">81</span>
the count is  <span class="token number">82</span>
the count is  <span class="token number">83</span>
the count is  <span class="token number">84</span>
the count is  <span class="token number">85</span>
the count is  <span class="token number">86</span>
the count is  <span class="token number">87</span>
the count is  <span class="token number">88</span>
the count is  <span class="token number">89</span>
the count is  <span class="token number">90</span>
the count is  <span class="token number">91</span>
the count is  <span class="token number">92</span>
the count is  <span class="token number">93</span>
the count is  <span class="token number">94</span>
the count is  <span class="token number">95</span>
the count is  <span class="token number">96</span>
the count is  <span class="token number">97</span>
the count is  <span class="token number">98</span>
the count is  <span class="token number">99</span>
the count is  <span class="token number">100</span>
the count is  <span class="token number">101</span>
the count is  <span class="token number">102</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<div class="custom-container tip"><p class="custom-container-title">总结</p>
<p>读写锁可以让多个读操作并发，同时读取，但是对于写操作是完全互斥的，也就是说，当一个goroutine进行写操作的时候，其他的goroutine既不能进行读操作，也不能进行写操作。</p>
</div>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '18.md' style='float:left'>⬆️上一节🔗</a><a href = '20.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


