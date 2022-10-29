<template><div><h1 id="go语言反射-json" tabindex="-1"><a class="header-anchor" href="#go语言反射-json" aria-hidden="true">#</a> Go语言反射(Json)</h1>
<nav class="table-of-contents"><ul><li><router-link to="#反射">反射</router-link></li><li><router-link to="#使用refilect-typeof-获取任意值的类型对象">使用refilect.TypeOf()获取任意值的类型对象</router-link></li><li><router-link to="#反射的基本介绍">反射的基本介绍</router-link></li><li><router-link to="#反射重要概念❤️">反射重要概念❤️</router-link></li><li><router-link to="#反射入门案列">反射入门案列</router-link></li><li><router-link to="#反射注意事项">反射注意事项</router-link></li><li><router-link to="#反射最佳案例">反射最佳案例</router-link></li><li><router-link to="#结构体反射相关的方法">结构体反射相关的方法</router-link></li></ul></nav>
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
<h2 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h2>
<div class="custom-container tip"><p class="custom-container-title">反射的引子</p>
<p>有时候我们需要写一个函数，这个函数有能力处理各种值的类型。**反射是指在程序运行期对程序本身进行访问和修改的能力。**程序在编译时，变量被转换为内存地址，变量名不会被编译器写入到可执行部分。在运行程序时，程序无法获取自身的信息。</p>
<p>支持反射的语言可以在程序编译期将变量的反射信息，如字段名称、类型信息、结构体信息等整合到可执行文件中，并给程序提供接口访问反射信息，这样就可以在程序运行期获取类型的反射信息，并且有能力修改它们。</p>
<p><strong>Go程序在运行期使用reflect包访问程序的反射信息。</strong></p>
<blockquote>
<p>json的字符串也用了反射技术。</p>
<p>空接口可以存储任何类型的变量，那我们如何知道这个空接口保存的数据的类型是什么？</p>
<ul>
<li>类型断言</li>
<li>可以使用反射实现</li>
</ul>
<p>后面的ORM框架也可能用到反射技术</p>
</blockquote>
</div>
<details class="custom-container details"><summary>接口的命名规范</summary>
<p>约定：</p>
<p>一般都是以<code v-pre>er</code>结尾 例如<code v-pre>Writer</code>、<code v-pre>Reader</code></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Reader <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Read</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个函数的接口名综合两个函数名，如:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> WriteFlusher <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
    <span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三个以上函数的接口名类似于结构体名，如:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Car <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">Drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="使用refilect-typeof-获取任意值的类型对象" tabindex="-1"><a class="header-anchor" href="#使用refilect-typeof-获取任意值的类型对象" aria-hidden="true">#</a> 使用refilect.TypeOf()获取任意值的类型对象</h2>
<div class="custom-container tip"><p class="custom-container-title">💡简单的一个案例如下：</p>
<ul>
<li><code v-pre>Kind</code>表示获取底层的类型</li>
<li><code v-pre>Type</code>表示类型</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:反射获取任意类型的值
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-26 16:08:30
 * @FilePath: \code\go-super\48-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"reflect"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> myInt <span class="token builtin">int</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Id   <span class="token builtin">int</span>
	Name <span class="token builtin">string</span>
	Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">Hello</span><span class="token punctuation">(</span>x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">//反射获取值</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"类型名称:%v, 类型种类:%v, 类型值:%v"</span><span class="token punctuation">,</span> v<span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//类型种类指的是值的类型，比如int，string，bool，struct，array，slice，map，chan，func，interface，ptr，unsafe.Pointer</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	u <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"OK"</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">}</span>
	u<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>

	u<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
	u<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token number">12.123</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token comment">// i是数组</span>
	u<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

	<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token comment">// y是切片</span>
	u<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>

	<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">"a"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span> <span class="token comment">// m是map</span>
	u<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\4">\4</span>8-main.go"</span>
类型名称:<span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token number">1</span> OK <span class="token number">12</span><span class="token punctuation">}</span>, 类型种类:*main.User, 类型值:ptr
类型名称:123, 类型种类:int, 类型值:int
类型名称:12.123, 类型种类:float64, 类型值:float64
类型名称:<span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>, 类型种类:<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>int, 类型值:array
类型名称:<span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>, 类型种类:<span class="token punctuation">[</span><span class="token punctuation">]</span>int, 类型值:slice
类型名称:map<span class="token punctuation">[</span>a:1 b:2<span class="token punctuation">]</span>, 类型种类:map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>int, 类型值:map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<blockquote>
<p>比如在写适配器函数的时候，我们此时就需要用到反射标记</p>
</blockquote>
<details class="custom-container details"><summary>反射的一个基本入门</summary>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description: json
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 19:37:14
 * @FilePath: \code\go-super\23-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"encoding/json"</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID      <span class="token builtin">string</span>   <span class="token string">`json:"id"`</span>
	Genders <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"性别"`</span>
	Age     <span class="token builtin">int</span>      <span class="token string">`json:"年龄"`</span>
	Name    <span class="token builtin">string</span>   <span class="token string">`json:"姓名"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConfigList <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Configs <span class="token punctuation">[</span><span class="token punctuation">]</span>Config <span class="token string">`json:"configs"`</span>
	Config
	Email <span class="token builtin">string</span> <span class="token string">`json:"email"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	configList <span class="token operator">:=</span> ConfigList<span class="token punctuation">{</span>
		Configs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Config<span class="token punctuation">{</span>
			<span class="token punctuation">{</span>
				ID<span class="token punctuation">:</span>      <span class="token string">"1"</span><span class="token punctuation">,</span>
				Genders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"asfd"</span><span class="token punctuation">,</span> <span class="token string">"asfd"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				Age<span class="token punctuation">:</span>     <span class="token number">20</span><span class="token punctuation">,</span>
				Name<span class="token punctuation">:</span>    <span class="token string">"Tom"</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				ID<span class="token punctuation">:</span>      <span class="token string">"2"</span><span class="token punctuation">,</span>
				Genders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"asfd"</span><span class="token punctuation">,</span> <span class="token string">"asfd"</span><span class="token punctuation">,</span> <span class="token string">"asfd"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				Age<span class="token punctuation">:</span>     <span class="token number">30</span><span class="token punctuation">,</span>
				Name<span class="token punctuation">:</span>    <span class="token string">"Jack"</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		Config<span class="token punctuation">:</span> Config<span class="token punctuation">{</span>
			ID<span class="token punctuation">:</span>      <span class="token string">"3"</span><span class="token punctuation">,</span>
			Genders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"asfd"</span><span class="token punctuation">,</span> <span class="token string">"asfd"</span><span class="token punctuation">,</span> <span class="token string">"asfd"</span><span class="token punctuation">,</span> <span class="token string">"as"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			Age<span class="token punctuation">:</span>     <span class="token number">40</span><span class="token punctuation">,</span>
			Name<span class="token punctuation">:</span>    <span class="token string">"Rose"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		Email<span class="token punctuation">:</span> <span class="token string">"	nsddd.top"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>configList<span class="token punctuation">)</span>

	<span class="token comment">//遍历</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> configList <span class="token operator">:=</span> <span class="token keyword">range</span> configList<span class="token punctuation">.</span>Configs <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>configList<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//json</span>
	jsonBody<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>configList<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err="</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"jsonBody="</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>jsonBody<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\23">\23</span>-main.go"</span>
<span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">[</span>asfd asfd<span class="token punctuation">]</span> <span class="token number">20</span> Tom<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token number">2</span> <span class="token punctuation">[</span>asfd asfd asfd<span class="token punctuation">]</span> <span class="token number">30</span> Jack<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">3</span> <span class="token punctuation">[</span>asfd asfd asfd as<span class="token punctuation">]</span> <span class="token number">40</span> Rose<span class="token punctuation">}</span> 	nsddd.top<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">[</span>asfd asfd<span class="token punctuation">]</span> <span class="token number">20</span> Tom<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token number">2</span> <span class="token punctuation">[</span>asfd asfd asfd<span class="token punctuation">]</span> <span class="token number">30</span> Jack<span class="token punctuation">}</span>
<span class="token assign-left variable">jsonBody</span><span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"configs"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"id"</span><span class="token builtin class-name">:</span><span class="token string">"1"</span>,<span class="token string">"性别"</span>:<span class="token punctuation">[</span><span class="token string">"asfd"</span>,<span class="token string">"asfd"</span><span class="token punctuation">]</span>,<span class="token string">"年龄"</span>:20,<span class="token string">"姓名"</span><span class="token builtin class-name">:</span><span class="token string">"Tom"</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">"id"</span><span class="token builtin class-name">:</span><span class="token string">"2"</span>,<span class="token string">"性别"</span>:<span class="token punctuation">[</span><span class="token string">"asfd"</span>,<span class="token string">"asfd"</span>,<span class="token string">"asfd"</span><span class="token punctuation">]</span>,<span class="token string">"年龄"</span>:30,<span class="token string">"姓名"</span><span class="token builtin class-name">:</span><span class="token string">"Jack"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">"id"</span><span class="token builtin class-name">:</span><span class="token string">"3"</span>,<span class="token string">"性别"</span>:<span class="token punctuation">[</span><span class="token string">"asfd"</span>,<span class="token string">"asfd"</span>,<span class="token string">"asfd"</span>,<span class="token string">"as"</span><span class="token punctuation">]</span>,<span class="token string">"年龄"</span>:40,<span class="token string">"姓名"</span><span class="token builtin class-name">:</span><span class="token string">"Rose"</span>,<span class="token string">"email"</span><span class="token builtin class-name">:</span><span class="token string">"<span class="token entity" title="\t">\t</span>nsddd.top"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="custom-container details"><summary>json转化回来</summary>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:json反序列
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 20:01:45
 * @FilePath: \code\go-super\24-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"encoding/json"</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID      <span class="token builtin">string</span>   <span class="token string">`json:"id"`</span>
	Genders <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"性别"`</span>
	Age     <span class="token builtin">int</span>      <span class="token string">`json:"年龄"`</span>
	Name    <span class="token builtin">string</span>   <span class="token string">`json:"姓名"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConfigList <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Configs <span class="token punctuation">[</span><span class="token punctuation">]</span>Config <span class="token string">`json:"configs"`</span>
	Config
	Email <span class="token builtin">string</span> <span class="token string">`json:"email"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token operator">&amp;</span>ConfigList<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">//定义一个json</span>
	jsonBody <span class="token operator">:=</span> <span class="token string">`{"configs":[{"id":"1","性别":["asfd","asfd"],"年龄":20,"姓名":"Tom"},{"id":"2","性别":["asfd","asfd","asfd"],"年龄":30,"姓名":"Jack"}],"id":"3","性别":["asfd","asfd","asfd","as"],"年龄":40,"姓名":"Rose","email":"\tnsddd.top"}`</span>

	<span class="token keyword">if</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>jsonBody<span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"json反序列化失败"</span> <span class="token operator">+</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"json反序列化成功"</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>json反序列化成功
&amp;<span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token number">1</span> <span class="token punctuation">[</span>asfd asfd<span class="token punctuation">]</span> <span class="token number">20</span> Tom<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token number">2</span> <span class="token punctuation">[</span>asfd asfd asfd<span class="token punctuation">]</span> <span class="token number">30</span> Jack<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">3</span> <span class="token punctuation">[</span>asfd asfd asfd as<span class="token punctuation">]</span> <span class="token number">40</span> Rose<span class="token punctuation">}</span> 	nsddd.top<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="反射的基本介绍" tabindex="-1"><a class="header-anchor" href="#反射的基本介绍" aria-hidden="true">#</a> 反射的基本介绍</h2>
<div class="custom-container warning"><p class="custom-container-title">反射的基本介绍</p>
<p>关于反射有以下需要知道的：</p>
<ol>
<li><strong>反射可以在运行的时候动态获取变量的各种信息，比如说变量的类型（type),类别(kind)</strong></li>
<li><strong>如果是结构体变量，还可以获取到结构体本身的信息（包括结构体的字段，方法）</strong></li>
<li><strong>通过反射，可以修改变量的值，可以调用关联的方法</strong></li>
<li><strong>使用反射，需要用到一个包import(“reflect”)</strong></li>
</ol>
</div>
<p><strong><a href="https://pkg.go.dev/std" target="_blank" rel="noopener noreferrer">🖱️ 打开包网页<ExternalLinkIcon/></a></strong></p>
<p><code v-pre>package reflect</code><strong>包</strong></p>
<blockquote>
<p>包反射实现运行时反射，允许程序操作任意类型的对象。典型的用法是取一个静态类型 interface{} 的值，通过调用 TypeOf 提取其动态类型信息，返回一个 Type。</p>
<p>对 ValueOf 的调用会返回一个表示运行时数据的值。Zero 接受一个 Type 并返回一个 Value，表示该类型的零值。</p>
</blockquote>
<p><strong>所以反射我们可以取出值但是没有办法进行操作，编译器通不过，此时需要进行断言</strong></p>
<p><strong>我们通过反射获取到type</strong></p>
<h4 id="type-type-¶" tabindex="-1"><a class="header-anchor" href="#type-type-¶" aria-hidden="true">#</a> type <a href="https://cs.opensource.google/go/go/+/go1.18:src/reflect/type.go;l=39" target="_blank" rel="noopener noreferrer">Type<ExternalLinkIcon/></a> <a href="https://pkg.go.dev/reflect@go1.18#Type" target="_blank" rel="noopener noreferrer">¶<ExternalLinkIcon/></a></h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Type <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token comment">// Kind返回该接口的具体分类</span>
    <span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Kind
    <span class="token comment">// Name返回该类型在自身包内的类型名，如果是未命名类型会返回""</span>
    <span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
    <span class="token comment">// PkgPath返回类型的包路径，即明确指定包的import路径，如"encoding/base64"</span>
    <span class="token comment">// 如果类型为内建类型(string, error)或未命名类型(*T, struct{}, []int)，会返回""</span>
    <span class="token function">PkgPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
    <span class="token comment">// 返回类型的字符串表示。该字符串可能会使用短包名（如用base64代替"encoding/base64"）</span>
    <span class="token comment">// 也不保证每个类型的字符串表示不同。如果要比较两个类型是否相等，请直接用Type类型比较。</span>
    <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
    <span class="token comment">// 返回要保存一个该类型的值需要多少字节；类似unsafe.Sizeof</span>
    <span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">uintptr</span>
    <span class="token comment">// 返回当从内存中申请一个该类型值时，会对齐的字节数</span>
    <span class="token function">Align</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    <span class="token comment">// 返回当该类型作为结构体的字段时，会对齐的字节数</span>
    <span class="token function">FieldAlign</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    <span class="token comment">// 如果该类型实现了u代表的接口，会返回真</span>
    <span class="token function">Implements</span><span class="token punctuation">(</span>u Type<span class="token punctuation">)</span> <span class="token builtin">bool</span>
    <span class="token comment">// 如果该类型的值可以直接赋值给u代表的类型，返回真</span>
    <span class="token function">AssignableTo</span><span class="token punctuation">(</span>u Type<span class="token punctuation">)</span> <span class="token builtin">bool</span>
    <span class="token comment">// 如该类型的值可以转换为u代表的类型，返回真</span>
    <span class="token function">ConvertibleTo</span><span class="token punctuation">(</span>u Type<span class="token punctuation">)</span> <span class="token builtin">bool</span>
    <span class="token comment">// 返回该类型的字位数。如果该类型的Kind不是Int、Uint、Float或Complex，会panic</span>
    <span class="token function">Bits</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    <span class="token comment">// 返回array类型的长度，如非数组类型将panic</span>
    <span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    <span class="token comment">// 返回该类型的元素类型，如果该类型的Kind不是Array、Chan、Map、Ptr或Slice，会panic</span>
    <span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Type
    <span class="token comment">// 返回map类型的键的类型。如非映射类型将panic</span>
    <span class="token function">Key</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Type
    <span class="token comment">// 返回一个channel类型的方向，如非通道类型将会panic</span>
    <span class="token function">ChanDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ChanDir
    <span class="token comment">// 返回struct类型的字段数（匿名字段算作一个字段），如非结构体类型将panic</span>
    <span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    <span class="token comment">// 返回struct类型的第i个字段的类型，如非结构体或者i不在[0, NumField())内将会panic</span>
    <span class="token function">Field</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> StructField
    <span class="token comment">// 返回索引序列指定的嵌套字段的类型，</span>
    <span class="token comment">// 等价于用索引中每个值链式调用本方法，如非结构体将会panic</span>
    <span class="token function">FieldByIndex</span><span class="token punctuation">(</span>index <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> StructField
    <span class="token comment">// 返回该类型名为name的字段（会查找匿名字段及其子字段），</span>
    <span class="token comment">// 布尔值说明是否找到，如非结构体将panic</span>
    <span class="token function">FieldByName</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>StructField<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
    <span class="token comment">// 返回该类型第一个字段名满足函数match的字段，布尔值说明是否找到，如非结构体将会panic</span>
    <span class="token function">FieldByNameFunc</span><span class="token punctuation">(</span>match <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>StructField<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
    <span class="token comment">// 如果函数类型的最后一个输入参数是"..."形式的参数，IsVariadic返回真</span>
    <span class="token comment">// 如果这样，t.In(t.NumIn() - 1)返回参数的隐式的实际类型（声明类型的切片）</span>
    <span class="token comment">// 如非函数类型将panic</span>
    <span class="token function">IsVariadic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
    <span class="token comment">// 返回func类型的参数个数，如果不是函数，将会panic</span>
    <span class="token function">NumIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    <span class="token comment">// 返回func类型的第i个参数的类型，如非函数或者i不在[0, NumIn())内将会panic</span>
    <span class="token function">In</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> Type
    <span class="token comment">// 返回func类型的返回值个数，如果不是函数，将会panic</span>
    <span class="token function">NumOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    <span class="token comment">// 返回func类型的第i个返回值的类型，如非函数或者i不在[0, NumOut())内将会panic</span>
    <span class="token function">Out</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> Type
    <span class="token comment">// 返回该类型的方法集中方法的数目</span>
    <span class="token comment">// 匿名字段的方法会被计算；主体类型的方法会屏蔽匿名字段的同名方法；</span>
    <span class="token comment">// 匿名字段导致的歧义方法会滤除</span>
    <span class="token function">NumMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    <span class="token comment">// 返回该类型方法集中的第i个方法，i不在[0, NumMethod())范围内时，将导致panic</span>
    <span class="token comment">// 对非接口类型T或*T，返回值的Type字段和Func字段描述方法的未绑定函数状态</span>
    <span class="token comment">// 对接口类型，返回值的Type字段描述方法的签名，Func字段为nil</span>
    <span class="token function">Method</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> Method
    <span class="token comment">// 根据方法名返回该类型方法集中的方法，使用一个布尔值说明是否发现该方法</span>
    <span class="token comment">// 对非接口类型T或*T，返回值的Type字段和Func字段描述方法的未绑定函数状态</span>
    <span class="token comment">// 对接口类型，返回值的Type字段描述方法的签名，Func字段为nil</span>
    <span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Method<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
    <span class="token comment">// 内含隐藏或非导出方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>通过反射我们获取到<code v-pre>reflect.Type</code>类型，通过这个类型我们可以使用方法反向操作</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">反射应用场景</p>
<ol>
<li>
<p>不知道接口调用的是哪个函数</p>
</li>
<li>
<p>对结构体序列化时，如果结构体有指定tag，也会使用到反射生成对应的字符串</p>
</li>
</ol>
</div>
<h2 id="反射重要概念❤️" tabindex="-1"><a class="header-anchor" href="#反射重要概念❤️" aria-hidden="true">#</a> 反射重要概念❤️</h2>
<p>1 . <strong>reflect.TypeOf(变量名),获取变量类型，返回的是reflect.Type类型</strong></p>
<ol start="2">
<li>
<p><strong>reflect.ValueOf(变量名),获取变量的值，返回reflect.Value类型，是一个结构体类型，通过它可以获取到该变量的更多信息</strong></p>
</li>
<li>
<p><strong>变量、interface{}（空接口）和reflect.Value是可以相互转换的，这点在实际开发中经常用到</strong></p>
</li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> student Stu <span class="token comment">//结构体</span>
<span class="token keyword">var</span> num <span class="token builtin">int</span>    <span class="token comment">//变量</span>

<span class="token comment">//专门用作反射函数</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>b <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//如何将interface转化为reflect.Value</span>
    rVal <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">//获取变量值</span>
    
    <span class="token comment">//如何将reflect.Value转成空接口类型</span>
    iVal <span class="token operator">:=</span> rVal<span class="token punctuation">.</span><span class="token keyword">interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">//如何将interface空接口转为原变量类型 - - 使用类型断言即可</span>
    v <span class="token operator">:=</span> iVal<span class="token punctuation">.</span><span class="token punctuation">(</span>Stu<span class="token punctuation">)</span>       <span class="token comment">//直接转化类型断言到变量</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反射入门案列" tabindex="-1"><a class="header-anchor" href="#反射入门案列" aria-hidden="true">#</a> 反射入门案列</h2>
<blockquote>
<p>演示对基本数据类型，空接口和反射基本操作</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: reflect.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Wed 23 Mar 2022 04:19:19 PM CST
 ************************************************************************/</span>

 <span class="token keyword">package</span> main
 <span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"reflect"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">reflectInterface</span><span class="token punctuation">(</span>b <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//通过反射 获取到传入的变量的type kind value </span>
    <span class="token comment">//rType r开头的表示这种type是</span>
    rType <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"rType = "</span><span class="token punctuation">,</span>rType<span class="token punctuation">)</span> <span class="token comment">//打印出int</span>

    <span class="token comment">//获取到reflect类型</span>
    rVal <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"rVal = "</span><span class="token punctuation">,</span>rVal<span class="token punctuation">)</span> <span class="token comment">//打印出数字100，虽然是100但不是普通的100,rval 不能进行计算</span>

    <span class="token comment">//查看rVal的真正类型</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"rVal = %v  rVal type = %T\n "</span><span class="token punctuation">,</span>rVal<span class="token punctuation">,</span>rVal<span class="token punctuation">)</span> <span class="token comment">//打印出int</span>

    <span class="token comment">//我们看下文档，对rVal进行计算</span>
    <span class="token comment">// n1 := 12  //不能使用n1变量进行加减</span>
    <span class="token comment">//如果类型是float，那么此时需要用到断言</span>
    n2 <span class="token operator">:=</span> <span class="token number">11</span> <span class="token operator">+</span> rVal<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"n2 = "</span><span class="token punctuation">,</span>n2<span class="token punctuation">)</span>

    <span class="token comment">//我们已经把变量交给接口，而且拿到了反射的value，那么此时怎么把它重新转化为intterface{}</span>
    iv <span class="token operator">:=</span> rVal<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//将interface通过断言转化为需要的类型</span>
    num2 <span class="token operator">:=</span> iv<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"num2 = "</span><span class="token punctuation">,</span>num2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"iv = "</span><span class="token punctuation">,</span>iv<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//专门演示反射，对结构体的反思</span>
<span class="token keyword">func</span> <span class="token function">reflectTest</span><span class="token punctuation">(</span>b <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//rType r开头的表示这种type是</span>
    rType <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"rType = "</span><span class="token punctuation">,</span>rType<span class="token punctuation">)</span> <span class="token comment">//打印出int</span>

    <span class="token comment">//获取到reflect类型</span>
    rVal <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"rVal = "</span><span class="token punctuation">,</span>rVal<span class="token punctuation">)</span> <span class="token comment">//打印出数字100，虽然是100但不是普通的100,rval 不能进行计算</span>


    <span class="token comment">//我们已经把变量交给接口，而且拿到了反射的value，那么此时怎么把它重新转化为intterface{}</span>
    iv <span class="token operator">:=</span> rVal<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"iv = %v iv type = %T"</span><span class="token punctuation">,</span>iv<span class="token punctuation">,</span>iv<span class="token punctuation">)</span> 
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>
    
    <span class="token comment">//通过断言转化为需要的数据类型，通过swich或者使用简单的类型断言</span>
    stu<span class="token punctuation">,</span>ok <span class="token operator">:=</span> iv<span class="token punctuation">.</span><span class="token punctuation">(</span>Student<span class="token punctuation">)</span>
    <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"student.Name = "</span><span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"student"</span><span class="token punctuation">,</span>b<span class="token punctuation">.</span><span class="token punctuation">(</span>Student<span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"student.Name = "</span><span class="token punctuation">,</span>b<span class="token punctuation">.</span><span class="token punctuation">(</span>Student<span class="token punctuation">)</span><span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span> 
    Age <span class="token builtin">int</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//基本操作</span>

    <span class="token keyword">var</span> num <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>

    <span class="token function">reflectInterface</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"分割线"</span><span class="token punctuation">,</span><span class="token string">"---------------------------------------"</span><span class="token punctuation">)</span>
    stu <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
        Name <span class="token punctuation">:</span> <span class="token string">"tom"</span><span class="token punctuation">,</span>
        Age <span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token function">reflectTest</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go run  reflect.go</span>
rType <span class="token operator">=</span>  int
rVal <span class="token operator">=</span>  <span class="token number">100</span>
rVal <span class="token operator">=</span> <span class="token number">100</span>  rVal <span class="token builtin class-name">type</span> <span class="token operator">=</span> reflect.Value
 n2 <span class="token operator">=</span>  <span class="token number">111</span>
num2 <span class="token operator">=</span>  <span class="token number">100</span>
iv <span class="token operator">=</span>  <span class="token number">100</span>
分割线 ---------------------------------------
rType <span class="token operator">=</span>  main.Student
rVal <span class="token operator">=</span>  <span class="token punctuation">{</span>tom <span class="token number">20</span><span class="token punctuation">}</span>
iv <span class="token operator">=</span> <span class="token punctuation">{</span>tom <span class="token number">20</span><span class="token punctuation">}</span> iv <span class="token builtin class-name">type</span> <span class="token operator">=</span> main.Student
student.Name <span class="token operator">=</span>  tom
student <span class="token punctuation">{</span>tom <span class="token number">20</span><span class="token punctuation">}</span>
student.Name <span class="token operator">=</span>  tom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常量</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用const修饰
定义必须初始化
不能修改
只能修饰bool string int float类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>简介写法</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span><span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token number">1</span>
    b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>专业写法</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span><span class="token punctuation">(</span>
    a <span class="token operator">=</span> inta          <span class="token comment">//a等于0</span>
    b 				  <span class="token comment">//b等于1</span>
    c				  <span class="token comment">//c等于2</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>类似于枚举哈哈</p>
</blockquote>
<h2 id="反射注意事项" tabindex="-1"><a class="header-anchor" href="#反射注意事项" aria-hidden="true">#</a> 反射注意事项</h2>
<p><strong>通过反射可以让变量在interface{}和Reflect.Value之间相互转换</strong></p>
<p><strong>如果要通过反射来修改变量，注意当使用SetXxx方法来设置需要通过对应的指针类型来完成，这样才能改变传入的变量的值，同时需要使用到<code v-pre>redlect.Value.Elem()</code>方法</strong></p>
<p><strong>注意：elme</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>Value<span class="token punctuation">)</span> Elem
<span class="token keyword">func</span> <span class="token punctuation">(</span>v Value<span class="token punctuation">)</span> <span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Elem返回v持有的接口保管的值的Value封装，或者v持有的指针指向的值的Value封装。如果v的Kind不是Interface或Ptr会panic；如果v持有的值为nil，会返回Value零值。</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"redlect"</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> str <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"tom"</span> 
    fs <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>str<span class="token punctuation">)</span>
    fs<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetString</span><span class="token punctuation">(</span><span class="token string">"jack"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v\n"</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span>          <span class="token comment">//jack</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反射最佳案例" tabindex="-1"><a class="header-anchor" href="#反射最佳案例" aria-hidden="true">#</a> 反射最佳案例</h2>
<blockquote>
<ol>
<li>使用反射来<strong>遍历结构体字段，调用结构体的方法，并获取结构体标签的值</strong></li>
</ol>
</blockquote>
<p><strong>方法</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>v Value<span class="token punctuation">)</span> <span class="token function">Method</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> Value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>v Value<span class="token punctuation">)</span> <span class="token function">Call</span><span class="token punctuation">(</span>in <span class="token punctuation">[</span><span class="token punctuation">]</span>Value<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>案例</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"reflect"</span>
<span class="token punctuation">)</span>
<span class="token comment">//定义了一个Monster结构体</span>
<span class="token keyword">type</span> Monster <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span> <span class="token string">`json:"name"`</span>
	Age   <span class="token builtin">int</span> <span class="token string">`json:"monster_age"`</span>
	Score <span class="token builtin">float32</span> <span class="token string">`json:"成绩"`</span>
	Sex   <span class="token builtin">string</span>
	
<span class="token punctuation">}</span>

<span class="token comment">//方法，返回两个数的和</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s Monster<span class="token punctuation">)</span> <span class="token function">GetSum</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> n1 <span class="token operator">+</span> n2
<span class="token punctuation">}</span>
<span class="token comment">//方法， 接收四个值，给s赋值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s Monster<span class="token punctuation">)</span> <span class="token function">Set</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">,</span> score <span class="token builtin">float32</span><span class="token punctuation">,</span> sex <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s<span class="token punctuation">.</span>Name <span class="token operator">=</span> name
	s<span class="token punctuation">.</span>Age <span class="token operator">=</span> age
	s<span class="token punctuation">.</span>Score <span class="token operator">=</span> score
	s<span class="token punctuation">.</span>Sex <span class="token operator">=</span> sex
<span class="token punctuation">}</span>

<span class="token comment">//方法，显示s的值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s Monster<span class="token punctuation">)</span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"---start~----"</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"---end~----"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">TestStruct</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//获取reflect.Type 类型</span>
	typ <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    
	<span class="token comment">//获取reflect.Value 类型</span>
	val <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    
	<span class="token comment">//获取到a对应的类别</span>
	kd <span class="token operator">:=</span> val<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//如果传入的不是struct，就退出     --  判断是否是结构体</span>
	<span class="token keyword">if</span> kd <span class="token operator">!=</span>  reflect<span class="token punctuation">.</span>Struct <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"expect struct"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//获取到该结构体有几个字段</span>
	num <span class="token operator">:=</span> val<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"struct has %d fields\n"</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span> <span class="token comment">//4</span>
	<span class="token comment">//变量结构体的所有字段</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Field %d: 值为=%v\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> val<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token comment">//获取到struct标签, 注意需要通过reflect.Type来获取tag标签的值</span>
		tagVal <span class="token operator">:=</span> typ<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>Tag<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"json"</span><span class="token punctuation">)</span>
        <span class="token comment">//typ中的field方法中的tag方法中的get方法  -- 获取到json </span>
		<span class="token comment">//如果该字段于tag标签就显示，否则就不显示</span>
		<span class="token keyword">if</span> tagVal <span class="token operator">!=</span> <span class="token string">""</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Field %d: tag为=%v\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> tagVal<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//获取到该结构体有多少个方法</span>
	numOfMethod <span class="token operator">:=</span> val<span class="token punctuation">.</span><span class="token function">NumMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"字段struct has %d methods\n"</span><span class="token punctuation">,</span> numOfMethod<span class="token punctuation">)</span>
	
	<span class="token comment">//var params []reflect.Value</span>
	<span class="token comment">//方法的排序默认是按照 函数名的排序（ASCII码）·</span>
	val<span class="token punctuation">.</span><span class="token function">Method</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">//获取到第二个方法。调用它</span>

	<span class="token comment">//调用结构体的第1个方法Method(0)</span>
	<span class="token keyword">var</span> params <span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value  <span class="token comment">//声明了 []reflect.Value</span>
	params <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	params <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	res <span class="token operator">:=</span> val<span class="token punctuation">.</span><span class="token function">Method</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token comment">//传入的参数是 []reflect.Value, 返回[]reflect.Value</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"res="</span><span class="token punctuation">,</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//返回结果, 返回的结果是 []reflect.Value*/</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//创建了一个Monster实例</span>
	<span class="token keyword">var</span> a Monster <span class="token operator">=</span> Monster<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>  <span class="token string">"黄鼠狼精"</span><span class="token punctuation">,</span>
		Age<span class="token punctuation">:</span>   <span class="token number">400</span><span class="token punctuation">,</span>
		Score<span class="token punctuation">:</span> <span class="token number">30.8</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//将Monster实例传递给TestStruct函数</span>
	<span class="token function">TestStruct</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail go-eth<span class="token punctuation">]</span><span class="token comment"># go run  reflect.go</span>
struct has <span class="token number">4</span> fields
Field <span class="token number">0</span>: 值为<span class="token operator">=</span>黄鼠狼精
Field <span class="token number">0</span>: tag为<span class="token operator">=</span>name
Field <span class="token number">1</span>: 值为<span class="token operator">=</span><span class="token number">400</span>
Field <span class="token number">1</span>: tag为<span class="token operator">=</span>monster_age
Field <span class="token number">2</span>: 值为<span class="token operator">=</span><span class="token number">30.8</span>
Field <span class="token number">2</span>: tag为<span class="token operator">=</span>成绩
Field <span class="token number">3</span>: 值为<span class="token operator">=</span>
struct has <span class="token number">3</span> methods
---start~----
<span class="token punctuation">{</span>黄鼠狼精 <span class="token number">400</span> <span class="token number">30.8</span> <span class="token punctuation">}</span>
---end~----
<span class="token assign-left variable">res</span><span class="token operator">=</span> <span class="token number">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体反射相关的方法" tabindex="-1"><a class="header-anchor" href="#结构体反射相关的方法" aria-hidden="true">#</a> 结构体反射相关的方法</h2>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>结构体相关的方法如下：</p>
<p>任意类型的反射值都有一个方法叫做<code v-pre>Type</code>，它返回一个<code v-pre>Type</code>类型的值，这个<code v-pre>Type</code>类型的值代表了反射值的动态类型。
<code v-pre>Type</code>类型的值有一个方法叫做<code v-pre>Kind</code>，它返回一个<code v-pre>Kind</code>类型的值，这个<code v-pre>Kind</code>类型的值代表了反射值的静态类型。
<code v-pre>Kind</code>类型的值有一个方法叫做<code v-pre>String</code>，它返回一个字符串，这个字符串代表了反射值的静态类型的名称。</p>
<p>reflect.Type中与结构体成员相关的方法如下：</p>
<ul>
<li><code v-pre>NumField</code>：返回结构体成员的数量。</li>
<li><code v-pre>Field</code>：返回结构体成员的信息。</li>
<li><code v-pre>FieldByIndex</code>：返回结构体成员的信息。</li>
<li><code v-pre>FieldByName</code>：返回结构体成员的信息。</li>
<li><code v-pre>FieldByNameFunc</code>：返回结构体成员的信息。</li>
</ul>
</div>
<details class="custom-container details"><summary>💡简单的一个案例如下：</summary>
<p>判断参数是否是结构体类型：</p>
<blockquote>
<p>我们可以先判断，符合标准就继续，不符合标准就直接return返回就好了</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:与结构体反射相关的方法
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-26 17:16:24
 * @FilePath: \code\go-super\51-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"errors"</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"reflect"</span>
<span class="token punctuation">)</span>

<span class="token comment">/*
## 结构体反射相关的方法
任意类型的反射值都有一个方法叫做`Type`，它返回一个`Type`类型的值，这个`Type`类型的值代表了反射值的动态类型。
`Type`类型的值有一个方法叫做`Kind`，它返回一个`Kind`类型的值，这个`Kind`类型的值代表了反射值的静态类型。
`Kind`类型的值有一个方法叫做`String`，它返回一个字符串，这个字符串代表了反射值的静态类型的名称。

reflect.Type中与结构体成员相关的方法如下：
- `NumField`：返回结构体成员的数量。
- `Field`：返回结构体成员的信息。
- `FieldByIndex`：返回结构体成员的信息。
- `FieldByName`：返回结构体成员的信息。
- `FieldByNameFunc`：返回结构体成员的信息。
*/</span>

<span class="token keyword">type</span> Person <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">GetInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token function">SetInfo</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span>  <span class="token string">`json:"name"`</span>
	Age   <span class="token builtin">int</span>     <span class="token string">`json:"age"`</span>
	Score <span class="token builtin">float64</span> <span class="token string">`json:"score"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Student<span class="token punctuation">)</span> <span class="token function">GetInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> str <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"name:%s,age:%d,score:%f"</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> s<span class="token punctuation">.</span>Age<span class="token punctuation">,</span> s<span class="token punctuation">.</span>Score<span class="token punctuation">)</span> 
    <span class="token comment">//获取结构体成员的值</span>
	<span class="token keyword">return</span> str<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">SetInfo</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">,</span> score <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	s<span class="token punctuation">.</span>Name <span class="token operator">=</span> name
	s<span class="token punctuation">.</span>Age <span class="token operator">=</span> age
	s<span class="token punctuation">.</span>Score <span class="token operator">=</span> score
	<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"set info error"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// print info</span>
<span class="token keyword">func</span> <span class="token function">printInfo</span><span class="token punctuation">(</span>s Person<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//Person类型表示了一个接口类型，接口类型的值可以是任意类型的值，所以这里的s可以是任意类型的值</span>
	t <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>     <span class="token comment">//获取s的动态类型</span>
	v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>    <span class="token comment">//获取s的动态值</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"动态类型："</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span>Name	<span class="token number">1</span>	<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"静态类型："</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           <span class="token comment">//获取s的静态类型</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"动态值："</span><span class="token punctuation">,</span> v<span class="token punctuation">,</span> <span class="token string">"静态值："</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                             <span class="token comment">//获取s的静态值</span>
	<span class="token keyword">if</span> t<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> reflect<span class="token punctuation">.</span>Struct <span class="token operator">&amp;&amp;</span> t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> reflect<span class="token punctuation">.</span>Struct <span class="token punctuation">{</span> <span class="token comment">//判断s的动态型类是否是结构体类型</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"s is not struct"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//获取结构体成员的数量</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"结构体成员的数量："</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">//获取结构体成员的信息</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"结构体成员的信息："</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//获取方法数量</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"方法数量："</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">NumMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">//获取方法的参数数量</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"方法的参数数量："</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Method</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Type<span class="token punctuation">.</span><span class="token function">NumIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">//获取方法的返回值数量</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"方法的返回值数量："</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Method</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Type<span class="token punctuation">.</span><span class="token function">NumOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">//判断结构体有没有这个方法</span>
	metadata<span class="token punctuation">,</span> ok <span class="token operator">:=</span> t<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">"GetInfo"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"结构体没有GetInfo方法"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"结构体有多少方法："</span><span class="token punctuation">,</span> metadata<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	study <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span>
		<span class="token string">"张三"</span><span class="token punctuation">,</span>
		<span class="token number">18</span><span class="token punctuation">,</span>
		<span class="token number">100</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">var</span> s Person <span class="token operator">=</span> study
	s<span class="token punctuation">.</span><span class="token function">SetInfo</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">99.21</span><span class="token punctuation">)</span>

	<span class="token function">printInfo</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\51">\51</span>-main.go"</span>
动态类型：  静态类型： ptr
动态值： <span class="token operator">&amp;</span><span class="token punctuation">{</span>李四 <span class="token number">20</span> <span class="token number">99.21</span><span class="token punctuation">}</span> 静态值： <span class="token punctuation">{</span>李四 <span class="token number">20</span> <span class="token number">99.21</span><span class="token punctuation">}</span>
结构体成员的数量： <span class="token number">3</span>
结构体成员的信息： <span class="token punctuation">{</span>Name  string json:<span class="token string">"name"</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> false<span class="token punctuation">}</span>
结构体成员的信息： <span class="token punctuation">{</span>Age  int json:<span class="token string">"age"</span> <span class="token number">16</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> false<span class="token punctuation">}</span>
结构体成员的信息： <span class="token punctuation">{</span>Score  float64 json:<span class="token string">"score"</span> <span class="token number">24</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> false<span class="token punctuation">}</span>
方法数量： <span class="token number">1</span>
方法的参数数量： <span class="token number">1</span>
方法的返回值数量： <span class="token number">2</span>
结构体没有GetInfo方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>


