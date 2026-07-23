<template><div><h1 id="接口实现多态" tabindex="-1"><a class="header-anchor" href="#接口实现多态" aria-hidden="true">#</a> 接口实现多态</h1>
<nav class="table-of-contents"><ul><li><router-link to="#接口-interface">接口（interface)</router-link></li><li><router-link to="#接口快速入门">接口快速入门</router-link></li><li><router-link to="#接口概念">接口概念</router-link></li><li><router-link to="#接口实践">接口实践</router-link></li><li><router-link to="#接口实现对hero结构体切片的排序">接口实现对Hero结构体切片的排序</router-link></li><li><router-link to="#接口vs继承">接口VS继承</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://pkg.go.dev/std" target="_blank" rel="noopener noreferrer">https://pkg.go.dev/std<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<hr>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录。</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://cubxxw.com" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="接口-interface" tabindex="-1"><a class="header-anchor" href="#接口-interface" aria-hidden="true">#</a> 接口（interface)</h2>
<div class="custom-container warning"><p class="custom-container-title">接口注意：</p>
<p><strong>Golang中的接口也是一种数据类型，不需要显示实现。只需要一个变量含有接口类型中的所有方法，那么这个变量就实现了这个接口。</strong></p>
<p>接口是一种规范，使用接口必须要按照它的规范来。</p>
<blockquote>
<p>可以想象usb是现实中的接口，同时usb可以作为多种不同的尺寸和排线，这种设计需求在golang中也是<strong>大量</strong>存在的</p>
</blockquote>
<blockquote>
<p><strong>按照循序应该是多态，但是在讲解多态之前需要讲解接口，因为在Golang中，多态的特性主要是通过接口来体现出来的</strong></p>
</blockquote>
</div>
<h2 id="接口快速入门" tabindex="-1"><a class="header-anchor" href="#接口快速入门" aria-hidden="true">#</a> 接口快速入门</h2>
<details class="custom-container details"><summary>接口💡简单的一个案例如下：</summary>
<p>快速了解接口：</p>
</details>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//声明/定义一个接口</span>
<span class="token keyword">type</span> Usb <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">//声明了两个没有实现的方法</span>
	<span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
	<span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//声明/定义一个接口</span>
<span class="token keyword">type</span> Usb2 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">//声明了两个没有实现的方法</span>
	<span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//定义手机的结构体</span>
<span class="token keyword">type</span> Phone <span class="token keyword">struct</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>  

<span class="token comment">//让Phone 实现 Usb接口的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"手机开始工作。。。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"手机停止工作。。。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Camera <span class="token keyword">struct</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">//让Camera 实现   Usb接口的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c Camera<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"相机开始工作~~~。。。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c Camera<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"相机停止工作。。。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//计算机</span>
<span class="token keyword">type</span> Computer <span class="token keyword">struct</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">//编写一个方法Working 方法，接收一个Usb接口类型变量</span>
<span class="token comment">//只要是实现了 Usb接口 （所谓实现Usb接口，就是指实现了 Usb接口声明所有方法）</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c Computer<span class="token punctuation">)</span> <span class="token function">Working</span><span class="token punctuation">(</span>usb Usb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//通过usb接口变量来调用Start和Stop方法</span>
	usb<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	usb<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//测试</span>
	<span class="token comment">//先创建结构体变量</span>
	computer <span class="token operator">:=</span> Computer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	phone <span class="token operator">:=</span> Phone<span class="token punctuation">{</span><span class="token punctuation">}</span>
	camera <span class="token operator">:=</span> Camera<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">//关键点</span>
	computer<span class="token punctuation">.</span><span class="token function">Working</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">Working</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span> <span class="token comment">//实现camera</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\26">\26</span>-main.go"</span>
手机开始工作。。。
手机停止工作。。。
相机开始工作~~~。。。
相机停止工作。。。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在文档里面接口的文档也是非常多的</strong></p>
<h2 id="接口概念" tabindex="-1"><a class="header-anchor" href="#接口概念" aria-hidden="true">#</a> 接口概念</h2>
<details class="custom-container details"><summary>接口定义</summary>
<p>接口类型可以定义一组方法，但是这些不需要实现，而且<code v-pre>Interface</code><strong>不能包含任何的变量</strong></p>
<p>Go 语言提供了另外一种数据类型即接口，<strong>它把所有的具有共性的方法定义在一起，任何其他类型只要实现了这些方法就是实现了这个接口。把所有方法全部实现了，叫做实现了接口</strong></p>
</details>
<p>💡简单的一个案例如下：</p>
<div class="language-golang ext-golang line-numbers-mode"><pre v-pre class="language-golang"><code>/* 定义接口 */
type interface_name interface {
   method_name1 [return_type]
   method_name2 [return_type]
   method_name3 [return_type]
   ...
   method_namen [return_type]
}

/* 定义结构体 */
type struct_name struct {
   /* variables */
}

/* 实现接口方法 */
func (struct_name_variable struct_name) method_name1() [return_type] {
   /* 方法实现 */
}
...
func (struct_name_variable struct_name) method_namen() [return_type] {
   /* 方法实现*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>小结说明：</strong></p>
<ol>
<li>
<p>接口中所有的方法都没有方法体，即接口的方法都是没有实现的方法。接口体现了程序设计的<strong>多态和高内聚低耦合</strong>的思想</p>
</li>
<li>
<p>Golang中不需要显式存在，只要一个变量，含有接口类型中的所有方法，那么叫做这个变量实现了这个接口，</p>
</li>
<li>
<p>接口本身不能创建实例，但是它可以指向一个实现了该接口的自定义类型的变量</p>
</li>
</ol>
<p><strong>一个自定义类型可以实现多个接口</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> BInterface <span class="token keyword">interface</span><span class="token punctuation">{</span>
	<span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> AInterface <span class="token keyword">interface</span><span class="token punctuation">{</span>
	<span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Monster <span class="token keyword">struct</span><span class="token punctuation">{</span>
<span class="token comment">//想让接口体monster即实现B接口也实现A接口</span>
	
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m monstall<span class="token punctuation">)</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"monstall hello()~~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m monstall<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"monstall say()~~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时此刻monstall实现了Ainterface  and Binterface</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> monster Monster 
    <span class="token keyword">var</span> Atow AInterface <span class="token operator">=</span> monster
    <span class="token keyword">var</span> Btow AInterface <span class="token operator">=</span> monster
    Atow<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    Btow<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Golang接口中不可以有任何的变量</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> AInterface <span class="token keyword">interface</span><span class="token punctuation">{</span>
	<span class="token builtin">int</span>          <span class="token comment">//报错</span>
	<span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">空接口</p>
<p>空接口表示没有任何约束，任何类型都可以实现空接口</p>
<p>⚡ 所有有时候需要任何类型的可以选择<strong>空接口~</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//空接口表示任意类型</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    a <span class="token operator">=</span> <span class="token number">20</span>
    a <span class="token operator">=</span> <span class="token string">"你好hello"</span>
    a <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>map定义空接口：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>	<span class="token keyword">var</span> m1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	m1<span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span> <span class="token operator">=</span> userinfo<span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span>
	m1<span class="token punctuation">[</span><span class="token string">"password"</span><span class="token punctuation">]</span> <span class="token operator">=</span> userinfo<span class="token punctuation">[</span><span class="token string">"password"</span><span class="token punctuation">]</span>
	m1<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">=</span> userinfo<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span>
	m1<span class="token punctuation">[</span><span class="token string">"hobby"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">123</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"m1="</span><span class="token punctuation">,</span> m1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"userinfo[\"username\"] = %T"</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>切片定义空接口</strong>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> slice1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a type is %T, a value is %v\n"</span><span class="token punctuation">,</span> slice1<span class="token punctuation">,</span> slice1<span class="token punctuation">)</span> 
<span class="token comment">//a type is []interface {}, a value is [1 2 3 4 5 hello true]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<details class="custom-container details"><summary>空接口的一些实现</summary>
<p>⚡ 空接口有一些实现的方案：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description: null interface
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 09:11:10
 * @FilePath: \code\go-super\27-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">//空接口</span>
<span class="token keyword">type</span> A <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">show</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type:%T value:%v"</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">//type:interface {} value:100</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a A
	b <span class="token operator">:=</span> <span class="token string">"hello"</span>
	a <span class="token operator">=</span> b                <span class="token comment">//表示a可以接收任意类型的数据</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"a="</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">//a= hello</span>

	<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">20</span>
	a <span class="token operator">=</span> num <span class="token comment">//表示空接口可以接收任意类型的数值</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a type is %T, a value is %v\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span>

	<span class="token keyword">var</span> stu <span class="token operator">=</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		name <span class="token builtin">string</span>
		age  <span class="token builtin">int</span>
	<span class="token punctuation">}</span><span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">"tom"</span><span class="token punctuation">,</span>
		age<span class="token punctuation">:</span>  <span class="token number">20</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	a <span class="token operator">=</span> stu
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a type is %T, a value is %v\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">//a type is struct { name string; age int }, a value is {tom 20}</span>

	<span class="token function">show</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">//type:int value:100</span>

	<span class="token comment">//fmt.Println("a.name=", a.name) //空接口没有字段，不能直接访问字段"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\27">\27</span>-main.go"</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span> hello
a <span class="token builtin class-name">type</span> is int, a value is <span class="token number">20</span>
a <span class="token builtin class-name">type</span> is struct <span class="token punctuation">{</span> name string<span class="token punctuation">;</span> age int <span class="token punctuation">}</span>, a value is <span class="token punctuation">{</span>tom <span class="token number">20</span><span class="token punctuation">}</span>
type:int value:100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p><strong>接口之间也可以有继承的关系（比如AInterface可以继承BInterface and CInterface)</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************           
    > File Name: Interface.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sat 05 Mar 2022 01:36:23 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> BInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">//定义test01一个方法</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> CInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> AInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token comment">//at AInterface comprise BInterface and CInterface and it has its own way test03</span>
    BInterface
    CInterface
    <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//意味着如果要实现Ainterface 就要实现下面的所有方法</span>
<span class="token punctuation">}</span>

<span class="token comment">//如果需要实现AInterface,就需要将BInterface CInterface的方法都实现</span>
<span class="token keyword">type</span> Stu <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>stu Stu<span class="token punctuation">)</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>stu Stu<span class="token punctuation">)</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>stu Stu<span class="token punctuation">)</span> <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
<span class="token comment">//只有将三个方法全部实现了，那么stu就实现了AInterface 缺一不可！！！！！！！！</span>
<span class="token keyword">type</span> T  <span class="token keyword">interface</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> stu Stu 
    <span class="token keyword">var</span> a AInterface <span class="token operator">=</span> stu 
    a<span class="token punctuation">.</span><span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> t T <span class="token operator">=</span> stu <span class="token comment">//ok</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    <span class="token keyword">var</span> t2 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token operator">=</span> stu 
    <span class="token keyword">var</span> num1 <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">8.8</span> 
    t2 <span class="token operator">=</span> num1
    t <span class="token operator">=</span> num1
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t2<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>接口是引用类型~，传值的时候是以引用方式（地址）传送进去的</strong></p>
<p>空接口<strong>interface</strong>{}<strong>没有任何的方法</strong>，<strong>所有的类型都实现了空接口,我们可以把任何的变量赋值给空接口</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> T  <span class="token keyword">interface</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> t T <span class="token operator">=</span> stu <span class="token comment">//ok</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    
    <span class="token comment">//也可以这样写：</span>
    <span class="token keyword">var</span> t2 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token operator">=</span> stu      
    <span class="token keyword">var</span> num1 <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">8.8</span> 
    t2 <span class="token operator">=</span> num1         <span class="token comment">//可以直接将num1赋值</span>
    t <span class="token operator">=</span> num1
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t2<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go build -o Interface Interface.go </span>
<span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># ./Interface </span>
<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token number">8.8</span> <span class="token number">8.8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意继承的时候，接口之间不可以有相同的方法名</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> BInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">//定义test01一个方法</span>
    <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> CInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>      <span class="token comment">/*---正常编译---*/</span>

<span class="token keyword">type</span> AInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	AInterface
	BInterface
<span class="token punctuation">}</span>      <span class="token comment">/*---编译错误---*/</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">/*--报错：重复定义--*/</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口实践" tabindex="-1"><a class="header-anchor" href="#接口实践" aria-hidden="true">#</a> 接口实践</h2>
<p><strong>常见报错，接口是属于引用传递</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">type</span> Usb <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Stu <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Stu<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Say()"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> stu Stu <span class="token operator">=</span> Stu<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 错误！ 会报 Stu类型没有实现Usb接口 , </span>
	<span class="token comment">// 如果希望通过编译,  var u Usb = &amp;stu</span>
	<span class="token keyword">var</span> u Usb <span class="token operator">=</span> stu  
	u<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"here"</span><span class="token punctuation">,</span> u<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口实现对hero结构体切片的排序" tabindex="-1"><a class="header-anchor" href="#接口实现对hero结构体切片的排序" aria-hidden="true">#</a> 接口实现对Hero结构体切片的排序</h2>
<blockquote>
<p>实现对Hero结构体切片的排序</p>
<p>思想：使用冒泡排序也可以使用系统提供的方法</p>
</blockquote>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sort"</span>   <span class="token comment">//使用系统的方法</span>
	<span class="token string">"math/rand"</span>
<span class="token punctuation">)</span>

<span class="token comment">//1.声明Hero结构体</span>
<span class="token keyword">type</span>  Hero <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//2.声明一个Hero结构体切片类型</span>
<span class="token keyword">type</span> HeroSlice <span class="token punctuation">[</span><span class="token punctuation">]</span>Hero

<span class="token comment">//3.实现Interface 接口</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>hs HeroSlice<span class="token punctuation">)</span> <span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>hs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Less方法就是决定你使用什么标准进行排序</span>
<span class="token comment">//1. 按Hero的年龄从小到大排序!!</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>hs HeroSlice<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> hs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Age <span class="token operator">&lt;</span> hs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>Age
	<span class="token comment">//修改成对Name排序</span>
	<span class="token comment">//return hs[i].Name &lt; hs[j].Name</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>hs HeroSlice<span class="token punctuation">)</span> <span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//交换</span>
	<span class="token comment">// temp := hs[i]</span>
	<span class="token comment">// hs[i] = hs[j]</span>
	<span class="token comment">// hs[j] = temp</span>
	<span class="token comment">//下面的一句话等价于三句话</span>
	hs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> hs<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> hs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> hs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token comment">//1.声明Student结构体</span>
<span class="token keyword">type</span>  Student <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
	Score <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//将Student的切片，安Score从大到小排序!!</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//先定义一个数组/切片</span>
	<span class="token keyword">var</span> intSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">}</span>
	<span class="token comment">//要求对 intSlice切片进行排序</span>
	<span class="token comment">//1. 冒泡排序...</span>
	<span class="token comment">//2. 也可以使用系统提供的方法 </span>
	sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>intSlice<span class="token punctuation">)</span> 
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>intSlice<span class="token punctuation">)</span>

	<span class="token comment">//请大家对结构体切片进行排序</span>
	<span class="token comment">//1. 冒泡排序...</span>
	<span class="token comment">//2. 也可以使用系统提供的方法</span>

	<span class="token comment">//测试看看我们是否可以对结构体切片进行排序</span>
	<span class="token keyword">var</span> heroes HeroSlice
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		hero <span class="token operator">:=</span> Hero<span class="token punctuation">{</span>
			Name <span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"英雄|%d"</span><span class="token punctuation">,</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Age <span class="token punctuation">:</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//将 hero append到 heroes切片</span>
		heroes <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>heroes<span class="token punctuation">,</span> hero<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//看看排序前的顺序</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span> <span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> heroes <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//调用sort.Sort</span>
	sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>heroes<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"-----------排序后------------"</span><span class="token punctuation">)</span>
	<span class="token comment">//看看排序后的顺序</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span> <span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> heroes <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	i <span class="token operator">:=</span> <span class="token number">10</span>
	j <span class="token operator">:=</span> <span class="token number">20</span>
	i<span class="token punctuation">,</span> j <span class="token operator">=</span> j<span class="token punctuation">,</span> i
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"i="</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">"j="</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token comment">// i=20 j = 10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口vs继承" tabindex="-1"><a class="header-anchor" href="#接口vs继承" aria-hidden="true">#</a> 接口VS继承</h2>
<div class="custom-container tip"><p class="custom-container-title">举例</p>
<p>如何理解继承和接口？</p>
<p>猴子如果学猴子，那就是继承，如果猴子想学鸟飞，学鱼游，就是接口</p>
</div>
<blockquote>
<p>接口相当于是对继承的补充</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">type</span> Monkey <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Monkey<span class="token punctuation">)</span> <span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span><span class="token string">"生来会爬树.."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Little Monkey结构体</span>
<span class="token keyword">type</span> LittleMonkey <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Monkey   <span class="token comment">//匿名结构体 </span>
    <span class="token comment">//继承</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//创建一个littleMonkey 实例</span>
    monkey <span class="token operator">:=</span> LittleMonkey<span class="token punctuation">{</span>
        Monkey<span class="token punctuation">{</span>
            Name <span class="token punctuation">:</span> <span class="token string">"悟空"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    monkey<span class="token punctuation">.</span><span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail ~]# go run monkey.go 
悟空 生来会爬树..
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>*<em>如果猴子想学飞？？？？☆</em>: .｡. o(≧▽≦)o .｡.:*☆ **</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//声明接口</span>
<span class="token keyword">type</span> BirdAble <span class="token keyword">interface</span><span class="token punctuation">{</span>
	<span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> BirdAble interfacpackage main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//Monkey结构体</span>
<span class="token keyword">type</span> Monkey <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//声明接口</span>
<span class="token keyword">type</span> BirdAble <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> FishAble <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Monkey<span class="token punctuation">)</span> <span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">" 生来会爬树.."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//LittleMonkey结构体</span>
<span class="token keyword">type</span> LittleMonkey <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Monkey <span class="token comment">//继承</span>
<span class="token punctuation">}</span>


<span class="token comment">//让LittleMonkey实现BirdAble</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LittleMonkey<span class="token punctuation">)</span> <span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">" 通过学习，会飞翔..."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//让LittleMonkey实现FishAble</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LittleMonkey<span class="token punctuation">)</span> <span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">" 通过学习，会游泳.."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//创建一个LittleMonkey 实例</span>
	monkey <span class="token operator">:=</span> LittleMonkey<span class="token punctuation">{</span>
		Monkey <span class="token punctuation">{</span>
			Name <span class="token punctuation">:</span> <span class="token string">"悟空"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	monkey<span class="token punctuation">.</span><span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	monkey<span class="token punctuation">.</span><span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	monkey<span class="token punctuation">.</span><span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>e<span class="token punctuation">{</span>
	<span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Monkey <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Monkey<span class="token punctuation">)</span> <span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span><span class="token string">"生来会爬树.."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LittleMonkey<span class="token punctuation">)</span> <span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span><span class="token string">"通过学习会游泳.."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//Little Monkey结构体</span>
<span class="token keyword">type</span> LittleMonkey <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Monkey   <span class="token comment">//匿名结构体 </span>
    <span class="token comment">//继承</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//创建一个littleMonkey 实例</span>
    monkey <span class="token operator">:=</span> LittleMonkey<span class="token punctuation">{</span>
        Monkey<span class="token punctuation">{</span>
            Name <span class="token punctuation">:</span> <span class="token string">"悟空"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    monkey<span class="token punctuation">.</span><span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    monkey<span class="token punctuation">.</span><span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现接口可以看作是对继承的一种补充</strong></p>
<div class="custom-container tip"><p class="custom-container-title">接口和继承解决的问题不同</p>
<p>继承的主要价值在于：解决问题的<strong>复用性和可维护性</strong></p>
<p>接口的主要价值在于：<strong>设计</strong>，设计好各种规范（方法），让其他自定义类型去是实现这些方法</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">接口比继承更加灵活</p>
<p>接口是比继承更加灵活的</p>
<p>继承是满足is - a的关系，而接口只需要满足like - a的关系</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong>接口在一定程度上实现代码解耦</strong></p>
</div>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '11.md' style='float:left'>⬆️上一节🔗</a><a href = '13.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


