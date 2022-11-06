<template><div><h1 id="接口和多态、类型断言" tabindex="-1"><a class="header-anchor" href="#接口和多态、类型断言" aria-hidden="true">#</a> 接口和多态、类型断言</h1>
<nav class="table-of-contents"><ul><li><router-link to="#接口体现多态">接口体现多态</router-link></li><li><router-link to="#结构体接收者和指针接收者实现接口区别">结构体接收者和指针接收者实现接口区别</router-link></li><li><router-link to="#类型断言-–-接口判断类型">类型断言 – 接口判断类型</router-link></li><li><router-link to="#类型断言-如何检测和转换接口变量的类型">类型断言：如何检测和转换接口变量的类型</router-link></li><li><router-link to="#类型判断-type-switch">类型判断：type-switch</router-link></li><li><router-link to="#测试一个值是否实现了某个接口">测试一个值是否实现了某个接口</router-link></li><li><router-link to="#接口嵌套">接口嵌套</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://pkg.go.dev/std" target="_blank" rel="noopener noreferrer">https://pkg.go.dev/std<ExternalLinkIcon/></a></p>
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
<h2 id="接口体现多态" tabindex="-1"><a class="header-anchor" href="#接口体现多态" aria-hidden="true">#</a> 接口体现多态</h2>
<blockquote>
<p>接口体现出多态</p>
</blockquote>
<p><strong>Golang数组中是什么类型的，那么其数据类型便是其数组的类型而不可以是其他的类型。</strong></p>
<p>💡简单的一个案例如下：</p>
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

<span class="token keyword">type</span> Phone <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>  

<span class="token comment">//让Phone 实现 Usb接口的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"手机开始工作。。。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"手机停止工作。。。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">type</span> Camera <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">//让Camera 实现   Usb接口的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c Camera<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"相机开始工作。。。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c Camera<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"相机停止工作。。。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//定义一个Usb接口数组，可以存放Phone和Camera的结构体变量</span>
	<span class="token comment">//这里就体现出多态数组</span>
	<span class="token keyword">var</span> usbArr <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>Usb
	usbArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> Phone<span class="token punctuation">{</span><span class="token string">"vivo"</span><span class="token punctuation">}</span>
	usbArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Phone<span class="token punctuation">{</span><span class="token string">"小米"</span><span class="token punctuation">}</span>
	usbArr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> Camera<span class="token punctuation">{</span><span class="token string">"尼康"</span><span class="token punctuation">}</span>
	
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>usbArr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>接口实现带参数方法</summary>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description: 接口带参数方法
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 10:13:45
 * @FilePath: \code\go-super\30-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> A <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
	<span class="token comment">//get和set方法</span>
	<span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
	<span class="token function">SetName</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> A1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	age  <span class="token builtin">int64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A1<span class="token punctuation">)</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">//可以是指针接收者，也可以是值接收者</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A1<span class="token punctuation">)</span> <span class="token function">SetName</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//必须是指针接收者</span>
	a<span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A1<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">//打印结构体</span>
	<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"name=%v age=%v"</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> a<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//实现</span>
	a1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>A1<span class="token punctuation">{</span>
		<span class="token comment">//必须是指针</span>
		name<span class="token punctuation">:</span> <span class="token string">"Tom"</span><span class="token punctuation">,</span>
		age<span class="token punctuation">:</span>  <span class="token number">20</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> a A <span class="token operator">=</span> a1
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	a<span class="token punctuation">.</span><span class="token function">SetName</span><span class="token punctuation">(</span><span class="token string">"Jack"</span><span class="token punctuation">)</span> <span class="token comment">//修改结构体的值</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"a="</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\t">\t</span>empCodeRunnerFile.go"</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Tom <span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token number">20</span>
Tom
Jack
<span class="token assign-left variable">a</span><span class="token operator">=</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>Jack <span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="结构体接收者和指针接收者实现接口区别" tabindex="-1"><a class="header-anchor" href="#结构体接收者和指针接收者实现接口区别" aria-hidden="true">#</a> 结构体接收者和指针接收者实现接口区别</h2>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description: interface
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 10:01:38
 * @FilePath: \code\go-super\29-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> animal <span class="token keyword">interface</span> <span class="token punctuation">{</span> <span class="token comment">//动物接口</span>
	<span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">eat</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> cat <span class="token keyword">struct</span> <span class="token punctuation">{</span> <span class="token comment">//猫结构体</span>
	name <span class="token builtin">string</span>
	feet <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>cat<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//指针接收者实现接口</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"猫动"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>cat<span class="token punctuation">)</span> <span class="token function">eat</span><span class="token punctuation">(</span>food <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"猫吃%s\n"</span><span class="token punctuation">,</span> food<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token operator">&amp;</span>cat<span class="token punctuation">{</span><span class="token string">"tom"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	<span class="token comment">//注意：接口变量保存的是一个指针，这个指针指向了实现该接口的自定义类型的变量（结构体变量）</span>
	<span class="token comment">//var a = cat{"tom", 4} 错误写法</span>
	<span class="token keyword">var</span> ai <span class="token operator">=</span> a
	ai<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	ai<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">"fish"</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>猫动
猫吃fish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<blockquote>
<p>接口变量保存的是一个指针，这个指针指向了实现该接口的自定义类型的变量（结构体变量）</p>
<p><code v-pre>var a = cat{&quot;tom&quot;, 4}</code> 这个是错误写法</p>
</blockquote>
<h2 id="类型断言-–-接口判断类型" tabindex="-1"><a class="header-anchor" href="#类型断言-–-接口判断类型" aria-hidden="true">#</a> 类型断言 – 接口判断类型</h2>
<details class="custom-container details"><summary>类型断言判断</summary>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:类型断言 -- 接口类型转换
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 09:26:03
 * @FilePath: \code\go-super\28-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">var</span> a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	a <span class="token operator">=</span> <span class="token number">10</span>
	<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">float64</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"转换成功,a="</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"转换失败"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	a <span class="token operator">=</span> <span class="token number">10.4</span>
	<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">float64</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"转换成功,a="</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"转换失败"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\2">\2</span>8-main.go"</span>
转换失败
转换成功,a<span class="token operator">=</span> <span class="token number">10.4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义一个方法，可以传入任何类型的数据，就然后根据不同的类型，做不同的事情：</strong></p>
<p>💡简单的一个案例如下：</p>
<blockquote>
<p><strong>注意： x.(type)只能结合switch使用</strong></p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//if-else类型断言</span>
<span class="token keyword">func</span> <span class="token function">Prints</span><span class="token punctuation">(</span>x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x is a int, value is %v"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x is a string, value is %v"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"unsupport type!"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>同样可以用switch实现：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//使用switch语句，可以判断一个变量是什么类型</span>
<span class="token keyword">func</span> <span class="token function">switch2</span><span class="token punctuation">(</span>x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"x is a string"</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"x is a int"</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"x is a bool"</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"unsupport type!"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="类型断言-如何检测和转换接口变量的类型" tabindex="-1"><a class="header-anchor" href="#类型断言-如何检测和转换接口变量的类型" aria-hidden="true">#</a> 类型断言：如何检测和转换接口变量的类型</h2>
<p>一个接口类型的变量 <code v-pre>varI</code> 中可以包含任何类型的值，必须有一种方式来检测它的 <strong>动态</strong> 类型，即运行时在变量中存储的值的实际类型。在执行过程中动态类型可能会有所不同，但是它总是可以分配给接口变量本身的类型。通常我们可以使用 <strong>类型断言</strong> 来测试在某个时刻 <code v-pre>varI</code> 是否包含类型 <code v-pre>T</code> 的值：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>v <span class="token operator">:=</span> varI<span class="token punctuation">.</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span>       <span class="token comment">// unchecked type assertion</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>varI 必须是一个接口变量</strong>，否则编译器会报错：<code v-pre>invalid type assertion: varI.(T) (non-interface type (type of varI) on left)</code> 。</p>
<p>类型断言可能是无效的，虽然编译器会尽力检查转换是否有效，但是它不可能预见所有的可能性。如果转换在程序运行时失败会导致错误发生。更安全的方式是使用以下形式来进行类型断言：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> varI<span class="token punctuation">.</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>  <span class="token comment">// checked type assertion</span>
    <span class="token function">Process</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token comment">// varI is not of type T</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果转换合法，<code v-pre>v</code> 是 <code v-pre>varI</code> 转换到类型 <code v-pre>T</code> 的值，<code v-pre>ok</code> 会是 <code v-pre>true</code>；否则 <code v-pre>v</code> 是类型 <code v-pre>T</code> 的零值，<code v-pre>ok</code> 是 <code v-pre>false</code>，也没有运行时错误发生。</p>
<p><strong>应该总是使用上面的方式来进行类型断言</strong>。</p>
<p>多数情况下，我们可能只是想在 <code v-pre>if</code> 中测试一下 <code v-pre>ok</code> 的值，此时使用以下的方法会是最方便的：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> varI<span class="token punctuation">.</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 11.4 <a href="examples/chapter_11/type_interfaces.go">type_interfaces.go</a>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"math"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Square <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	side <span class="token builtin">float32</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Circle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	radius <span class="token builtin">float32</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Shaper <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> areaIntf Shaper
	sq1 <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Square<span class="token punctuation">)</span>
	sq1<span class="token punctuation">.</span>side <span class="token operator">=</span> <span class="token number">5</span>

	areaIntf <span class="token operator">=</span> sq1
	<span class="token comment">// Is Square the type of areaIntf?</span>
	<span class="token keyword">if</span> t<span class="token punctuation">,</span> ok <span class="token operator">:=</span> areaIntf<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>Square<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"The type of areaIntf is: %T\n"</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> u<span class="token punctuation">,</span> ok <span class="token operator">:=</span> areaIntf<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>Circle<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"The type of areaIntf is: %T\n"</span><span class="token punctuation">,</span> u<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"areaIntf does not contain a variable of type Circle"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>sq <span class="token operator">*</span>Square<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> sq<span class="token punctuation">.</span>side <span class="token operator">*</span> sq<span class="token punctuation">.</span>side
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>ci <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float32</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> ci<span class="token punctuation">.</span>radius <span class="token operator">*</span> ci<span class="token punctuation">.</span>radius <span class="token operator">*</span> math<span class="token punctuation">.</span>Pi
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<pre><code>The type of areaIntf is: *main.Square
areaIntf does not contain a variable of type Circle
</code></pre>
<p>程序中定义了一个新类型 <code v-pre>Circle</code>，它也实现了 <code v-pre>Shaper</code> 接口。 <code v-pre>if t, ok := areaIntf.(*Square); ok </code> 测试 <code v-pre>areaIntf</code> 里是否有一个包含 <code v-pre>*Square</code> 类型的变量，结果是确定的；然后我们测试它是否包含一个 <code v-pre>*Circle</code> 类型的变量，结果是否定的。</p>
<p><strong>备注</strong></p>
<p>如果忽略 <code v-pre>areaIntf.(*Square)</code> 中的 <code v-pre>*</code> 号，会导致编译错误：<code v-pre>impossible type assertion: Square does not implement Shaper (Area method has pointer receiver)</code>。</p>
<h2 id="类型判断-type-switch" tabindex="-1"><a class="header-anchor" href="#类型判断-type-switch" aria-hidden="true">#</a> 类型判断：type-switch</h2>
<p>接口变量的类型也可以使用一种特殊形式的 <code v-pre>switch</code> 来检测：<strong>type-switch</strong> （下面是示例 11.4 的第二部分）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">switch</span> t <span class="token operator">:=</span> areaIntf<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token operator">*</span>Square<span class="token punctuation">:</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Type Square %T with value %v\n"</span><span class="token punctuation">,</span> t<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
<span class="token keyword">case</span> <span class="token operator">*</span>Circle<span class="token punctuation">:</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Type Circle %T with value %v\n"</span><span class="token punctuation">,</span> t<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
<span class="token keyword">case</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"nil value: nothing to check?\n"</span><span class="token punctuation">)</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Unexpected type %T\n"</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Type Square *main.Square with value &amp;{5}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>变量 <code v-pre>t</code> 得到了 <code v-pre>areaIntf</code> 的值和类型，所有 <code v-pre>case</code> 语句中列举的类型（<code v-pre>nil</code> 除外）都必须实现对应的接口（在上例中即 <code v-pre>Shaper</code>），如果被检测类型没有在 <code v-pre>case</code> 语句列举的类型中，就会执行 <code v-pre>default</code> 语句。</p>
<p>可以用 <code v-pre>type-switch</code> 进行运行时类型分析，但是在 <code v-pre>type-switch</code> 不允许有 <code v-pre>fallthrough</code> 。</p>
<p>如果仅仅是测试变量的类型，不用它的值，那么就可以不需要赋值语句，比如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>switch areaIntf.(type) {
case *Square:
	// TODO
case *Circle:
	// TODO
...
default:
	// TODO
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的代码片段展示了一个类型分类函数，它有一个可变长度参数，可以是任意类型的数组，它会根据数组元素的实际类型执行不同的动作：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">classifier</span><span class="token punctuation">(</span>items <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> x <span class="token operator">:=</span> <span class="token keyword">range</span> items <span class="token punctuation">{</span>
		<span class="token keyword">switch</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Param #%d is a bool\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Param #%d is a float64\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int64</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Param #%d is a int\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Param #%d is a nil\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Param #%d is a string\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Param #%d is unknown\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以这样调用此方法：<code v-pre>classifier(13, -14.3, &quot;BELGIUM&quot;, complex(1, 2), nil, false)</code> 。</p>
<p>在处理来自于外部的、类型未知的数据时，比如解析诸如 JSON 或 XML 编码的数据，类型测试和转换会非常有用。</p>
<h2 id="测试一个值是否实现了某个接口" tabindex="-1"><a class="header-anchor" href="#测试一个值是否实现了某个接口" aria-hidden="true">#</a> 测试一个值是否实现了某个接口</h2>
<p>这是 11.3 类型断言中的一个特例：假定 <code v-pre>v</code> 是一个值，然后我们想测试它是否实现了 <code v-pre>Stringer</code> 接口，可以这样做：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Stringer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> sv<span class="token punctuation">,</span> ok <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token punctuation">(</span>Stringer<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"v implements String(): %s\n"</span><span class="token punctuation">,</span> sv<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// note: sv, not v</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Print</code> 函数就是如此检测类型是否可以打印自身的。</p>
<p>接口是一种契约，实现类型必须满足它，它描述了类型的行为，规定类型可以做什么。接口彻底将类型能做什么，以及如何做分离开来，使得相同接口的变量在不同的时刻表现出不同的行为，这就是多态的本质。</p>
<p>编写参数是接口变量的函数，这使得它们更具有一般性。l</p>
<p><strong>使用接口使代码更具有普适性。</strong></p>
<p>标准库里到处都使用了这个原则，如果对接口概念没有良好的把握，是不可能理解它是如何构建的。</p>
<p>在接下来的章节中，我们会讨论两个重要的例子，试着去深入理解它们，这样你就可以更好的应用上面的原则。</p>
<h2 id="接口嵌套" tabindex="-1"><a class="header-anchor" href="#接口嵌套" aria-hidden="true">#</a> 接口嵌套</h2>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:接口嵌套
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 10:32:49
 * @FilePath: \code\go-super\31-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Ainterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// A接口</span>
	<span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Binterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// B接口</span>
	<span class="token function">SetName</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Animaler <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// Animaler接口</span>
	Ainterface
	Binterface
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// Dog</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">// 实现A接口</span>
	<span class="token keyword">return</span> d<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">SetName</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 实现B接口</span>
	d<span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	dog <span class="token operator">:=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">"Tom"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">var</span> animaler Animaler <span class="token operator">=</span> dog <span class="token comment">//animailer嵌套了Ainterface和Binterface</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>animaler<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	animaler<span class="token punctuation">.</span><span class="token function">SetName</span><span class="token punctuation">(</span><span class="token string">"dog1"</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>animaler<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Running] go run "d:\文档\最近的\awesome-golang\docs\code\go-super\31-main.go"
Tom
dog1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '12.md' style='float:left'>⬆️上一节🔗</a><a href = '14.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


