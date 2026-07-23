<template><div><h1 id="结构体、工厂模式、继承封装" tabindex="-1"><a class="header-anchor" href="#结构体、工厂模式、继承封装" aria-hidden="true">#</a> 结构体、工厂模式、继承封装</h1>
<nav class="table-of-contents"><ul><li><router-link to="#面对对象编程">面对对象编程</router-link></li><li><router-link to="#结构体">结构体</router-link></li><li><router-link to="#指定变量值">指定变量值</router-link></li><li><router-link to="#结构体方法">结构体方法</router-link></li><li><router-link to="#工厂模式">工厂模式</router-link></li><li><router-link to="#抽象">抽象</router-link></li><li><router-link to="#面对对象特征">面对对象特征</router-link></li><li><router-link to="#封装">封装</router-link></li><li><router-link to="#继承">继承</router-link></li><li><router-link to="#继承的深入讨论">继承的深入讨论</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://pkg.go.dev/std" target="_blank" rel="noopener noreferrer">https://pkg.go.dev/std<ExternalLinkIcon/></a></p>
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
<h2 id="面对对象编程" tabindex="-1"><a class="header-anchor" href="#面对对象编程" aria-hidden="true">#</a> 面对对象编程</h2>
<blockquote>
<p>面对对象的编程步骤：</p>
<ol>
<li>声明结构体，确定结构体名</li>
<li>编写结构体字段</li>
<li>编写结构体方法</li>
</ol>
</blockquote>
<h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h2>
<details class="custom-container details"><summary>结构体创建💡简单的一个案例如下：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:结构体
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 18:44:31
 * @FilePath: \code\go-super\20-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name  <span class="token builtin">string</span>
	Age   <span class="token builtin">int</span>
	Email <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> p1 Person
	p1<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"Tom"</span>
	p1<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">20</span>
	p1<span class="token punctuation">.</span>Email <span class="token operator">=</span> <span class="token string">"3293172751@qq.com"</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"p1="</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span>

	p2 <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token string">"Jack"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">"xiongxinwei@mail.com"</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"p2="</span><span class="token punctuation">,</span> p2<span class="token punctuation">)</span>

	p3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"Mary"</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span> Email<span class="token punctuation">:</span> <span class="token string">"cub@cubxxw.com"</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"p3="</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span>

	p4 <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span>
	p4<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"Mike"</span>
	p4<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">50</span>
	p4<span class="token punctuation">.</span>Email <span class="token operator">=</span> <span class="token string">"xxw@cubxxw.com"</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"p4="</span><span class="token punctuation">,</span> p4<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"p1.Email ="</span><span class="token punctuation">,</span> p1<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"p2.Email ="</span><span class="token punctuation">,</span> p2<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"p3.Email ="</span><span class="token punctuation">,</span> p3<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"p4.Email ="</span><span class="token punctuation">,</span> p4<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\20">\20</span>-main.go"</span>
<span class="token assign-left variable">p1</span><span class="token operator">=</span> <span class="token punctuation">{</span>Tom <span class="token number">20</span> <span class="token number">3293172751</span>@qq.com<span class="token punctuation">}</span>
<span class="token assign-left variable">p2</span><span class="token operator">=</span> <span class="token punctuation">{</span>Jack <span class="token number">30</span> xiongxinwei@mail.com<span class="token punctuation">}</span>
<span class="token assign-left variable">p3</span><span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span>Mary <span class="token number">40</span> cub@cubxxw.com<span class="token punctuation">}</span>
<span class="token assign-left variable">p4</span><span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span>Mike <span class="token number">50</span> xxw@cubxxw.com<span class="token punctuation">}</span>
p1.Email <span class="token operator">=</span> <span class="token number">3293172751</span>@qq.com
p2.Email <span class="token operator">=</span> xiongxinwei@mail.com
p3.Email <span class="token operator">=</span> cub@cubxxw.com
p4.Email <span class="token operator">=</span> xxw@cubxxw.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结构体的值改变：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>	p1<span class="token punctuation">.</span>Email <span class="token operator">=</span> <span class="token string">"x@cubxxw.com"</span> <span class="token comment">//修改 p1 的 Email</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"p1.Email ="</span><span class="token punctuation">,</span> p1<span class="token punctuation">.</span>Email<span class="token punctuation">)</span> <span class="token comment">//p1.Email = x@cubxxw.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p><strong>案例联系：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>	
<span class="token punctuation">)</span>

<span class="token comment">/*
学生案例：
编写一个Student结构体，包含name、gender、age、id、score字段，分别为string、string、int、int、float64类型。
结构体中声明一个say方法，返回string类型，方法返回信息中包含所有字段值。
在main方法中，创建Student结构体实例(变量)，并访问say方法，并将调用结果打印输出。
*/</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	gender <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
	id <span class="token builtin">int</span>
	score <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>student <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token builtin">string</span> <span class="token punctuation">{</span>

	infoStr <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"student的信息 name=[%v] gender=[%v], age=[%v] id=[%v] score=[%v]"</span><span class="token punctuation">,</span>
		student<span class="token punctuation">.</span>name<span class="token punctuation">,</span> student<span class="token punctuation">.</span>gender<span class="token punctuation">,</span> student<span class="token punctuation">.</span>age<span class="token punctuation">,</span> student<span class="token punctuation">.</span>id<span class="token punctuation">,</span> student<span class="token punctuation">.</span>score<span class="token punctuation">)</span>

	<span class="token keyword">return</span> infoStr
<span class="token punctuation">}</span>

<span class="token comment">/*
1)编程创建一个Box结构体，在其中声明三个字段表示一个立方体的长、宽和高，长宽高要从终端获取
2)声明一个方法获取立方体的体积。
3)创建一个Box结构体变量，打印给定尺寸的立方体的体积
*/</span>
<span class="token keyword">type</span> Box <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token builtin">len</span> <span class="token builtin">float64</span>
	width <span class="token builtin">float64</span>
	height <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//声明一个方法获取立方体的体积</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>box <span class="token operator">*</span>Box<span class="token punctuation">)</span> <span class="token function">getVolumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> box<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">*</span> box<span class="token punctuation">.</span>width <span class="token operator">*</span> box<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>


<span class="token comment">// 景区门票案例</span>
<span class="token comment">// 一个景区根据游人的年龄收取不同价格的门票，比如年龄大于18，收费20元，其它情况门票免费.</span>
<span class="token comment">// 请编写Visitor结构体，根据年龄段决定能够购买的门票价格并输出</span>

<span class="token keyword">type</span> Visitor <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>visitor <span class="token operator">*</span>Visitor<span class="token punctuation">)</span> <span class="token function">showPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> visitor<span class="token punctuation">.</span>Age <span class="token operator">>=</span> <span class="token number">90</span> <span class="token operator">||</span> visitor<span class="token punctuation">.</span>Age <span class="token operator">&lt;=</span><span class="token number">8</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"考虑到安全，就不要玩了"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> visitor<span class="token punctuation">.</span>Age <span class="token operator">></span> <span class="token number">18</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"游客的名字为 %v 年龄为 %v 收费20元 \n"</span><span class="token punctuation">,</span> visitor<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> visitor<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"游客的名字为 %v 年龄为 %v 免费 \n"</span><span class="token punctuation">,</span> visitor<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> visitor<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//测试</span>
	<span class="token comment">//创建一个Student实例变量</span>
	<span class="token keyword">var</span> stu <span class="token operator">=</span> Student<span class="token punctuation">{</span>
		name <span class="token punctuation">:</span> <span class="token string">"tom"</span><span class="token punctuation">,</span>
		gender <span class="token punctuation">:</span> <span class="token string">"male"</span><span class="token punctuation">,</span>
		age <span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
		id <span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
		score <span class="token punctuation">:</span> <span class="token number">99.98</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">//测试代码</span>
	<span class="token keyword">var</span> box Box
	box<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">=</span> <span class="token number">1.1</span>
	box<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">2.0</span>
	box<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">3.0</span>
	volumn <span class="token operator">:=</span> box<span class="token punctuation">.</span><span class="token function">getVolumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"体积为=%.2f\n"</span><span class="token punctuation">,</span> volumn<span class="token punctuation">)</span>
    <span class="token comment">/*格式化输出，保留两位小数点*/</span>

	<span class="token comment">//测试</span>
	<span class="token keyword">var</span> v Visitor
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入你的名字"</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>v<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
		<span class="token keyword">if</span> v<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">"n"</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"退出程序...."</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入你的年龄"</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>v<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
		v<span class="token punctuation">.</span><span class="token function">showPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go build -o main main.go </span>
<span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># ./main</span>
student的信息 <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token punctuation">[</span>tom<span class="token punctuation">]</span> <span class="token assign-left variable">gender</span><span class="token operator">=</span><span class="token punctuation">[</span>male<span class="token punctuation">]</span>, <span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span> <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">]</span> <span class="token assign-left variable">score</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">99.98</span><span class="token punctuation">]</span>
体积为<span class="token operator">=</span><span class="token number">6.60</span>请输入你的名字
张三
请输入你的年龄
<span class="token number">19</span>
游客的名字为 张三 年龄为 <span class="token number">19</span> 收费20元 
请输入你的名字
李四
请输入你的年龄
<span class="token number">8</span>
考虑到安全，就不要玩了
请输入你的名字
n
退出程序<span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定变量值" tabindex="-1"><a class="header-anchor" href="#指定变量值" aria-hidden="true">#</a> 指定变量值</h2>
<p><strong>Golang在创建结构体时候，可以直接指定字段值</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>	
<span class="token punctuation">)</span>
<span class="token keyword">type</span> Stu <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 方法 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1. 在创建结构体变量时，把字段名和字段值写在一起, 这种写法，就不依赖字段的定义顺序</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> stu3 <span class="token operator">=</span> Stu<span class="token punctuation">{</span>
		Name <span class="token punctuation">:</span><span class="token string">"jack"</span><span class="token punctuation">,</span>
		Age <span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
stu4 <span class="token operator">:=</span> Stu<span class="token punctuation">{</span>
	Age <span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
	Name <span class="token punctuation">:</span> <span class="token string">"mary"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>stu1<span class="token punctuation">,</span> stu2<span class="token punctuation">,</span> stu3<span class="token punctuation">,</span> stu4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 在创建结构体变量时，就直接指定字段的值，顺序不可颠倒</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> stu1 <span class="token operator">=</span> Stu<span class="token punctuation">{</span><span class="token string">"小明"</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">}</span> <span class="token comment">// stu1---> 结构体数据空间</span>
stu2 <span class="token operator">:=</span> Stu<span class="token punctuation">{</span><span class="token string">"小明~"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>✍️ <strong>可以使用结构体指针（重要）</strong></p>
<blockquote>
<p>返回的是一种指针类型</p>
</blockquote>
<p><strong>3. 返回结构体的指针类型(!!!)</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> stu5 <span class="token operator">*</span>Stu <span class="token operator">=</span> <span class="token operator">&amp;</span>Stu<span class="token punctuation">{</span><span class="token string">"小王"</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">}</span>  
<span class="token comment">/*或*/</span>
stu6 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Stu<span class="token punctuation">{</span><span class="token string">"小王~"</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>在结构体中 stu5--&gt; 地址 ---&gt; 结构体数据[xxxx,xxx]</strong></p>
</blockquote>
<p><strong>4. 创建结构体指针变量时，把字段名和字段值写在一起, 这种写法，就不依赖字段的定义顺序</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> stu7 <span class="token operator">=</span> <span class="token operator">&amp;</span>Stu<span class="token punctuation">{</span>
	Name <span class="token punctuation">:</span> <span class="token string">"小李"</span><span class="token punctuation">,</span>
	Age <span class="token punctuation">:</span><span class="token number">49</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
stu8 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Stu<span class="token punctuation">{</span>
	Age <span class="token punctuation">:</span><span class="token number">59</span><span class="token punctuation">,</span>
	Name <span class="token punctuation">:</span> <span class="token string">"小李~"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>stu5<span class="token punctuation">,</span> <span class="token operator">*</span>stu6<span class="token punctuation">,</span> <span class="token operator">*</span>stu7<span class="token punctuation">,</span> <span class="token operator">*</span>stu8<span class="token punctuation">)</span>   <span class="token comment">//取值</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>stu5<span class="token punctuation">,</span> stu6<span class="token punctuation">,</span> stu7<span class="token punctuation">,</span> stu8<span class="token punctuation">)</span>   <span class="token comment">//取地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构体方法" tabindex="-1"><a class="header-anchor" href="#结构体方法" aria-hidden="true">#</a> 结构体方法</h2>
<div class="custom-container danger"><p class="custom-container-title">结构体是值类型</p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:结构体的使用
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 18:53:16
 * @FilePath: \code\go-super\21-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PersonList <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Persons <span class="token punctuation">[</span><span class="token punctuation">]</span>Person
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	person <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span> <span class="token string">"Tom"</span><span class="token punctuation">,</span>
		Age<span class="token punctuation">:</span>  <span class="token number">20</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"person="</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span>
	persone2 <span class="token operator">:=</span> person
	persone2<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"Jack"</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"person="</span><span class="token punctuation">,</span> persone2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Running] go run "d:\文档\最近的\awesome-golang\docs\code\go-super\21-main.go"
person= {Tom 20}
person= {Jack 20}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2>
<p><strong>Golang中没有构造函数，通常可以用工厂模式来解决问题</strong></p>
<blockquote>
<p>当我们的结构体首字母是大写的可以在其他包使用这个结构体,<strong>那么如果我们希望小写的也能在其他包使用,此时就需要工厂模式来解决,使用工厂模式实现挎包访问结构体实例</strong></p>
</blockquote>
<p><strong>我先使用vim查看下文件路径</strong></p>
<p><img src="@source/markdown/images/image-20221003164439481.png" alt="image-20221003164439481"></p>
<p><strong>使用大写字母直接访问包中的结构体</strong></p>
<img src="@source/markdown/images/image-20221003164451431.png" alt="image-20221003164451431" style="zoom:80%;" />
<p><strong>如果student结构体首字母是小写的,只能在model中使用,此时通过工厂模式解决</strong></p>
<p>在model包中创建一个方法,返回指针类型</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewStudent</span><span class="token punctuation">(</span>n <span class="token builtin">string</span><span class="token punctuation">,</span>s <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token operator">*</span>student<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>student<span class="token punctuation">{</span>
        Name <span class="token punctuation">:</span> n<span class="token punctuation">,</span>
        Score <span class="token punctuation">:</span> s<span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在main包中使用</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//首字母小写使用方法</span>
	<span class="token keyword">var</span> stu <span class="token operator">=</span> model<span class="token punctuation">.</span><span class="token function">NewStudent</span><span class="token punctuation">(</span><span class="token string">"tom"</span><span class="token punctuation">,</span><span class="token number">88.8</span><span class="token punctuation">)</span>
    <span class="token comment">/*stu是指向结构体的指针*/</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>stu<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"name="</span><span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Name<span class="token punctuation">,</span><span class="token string">"Score="</span><span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Score<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这种方法就被称为工厂模式</strong></p>
<blockquote>
<p>如果 <code v-pre>score</code> 是一个小写的,在其他包不可以直接访问,怎么样访问它呢?</p>
<p>我们可以再加入提供一个方法</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>student<span class="token punctuation">)</span> <span class="token function">GetScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">*</span>s<span class="token punctuation">.</span>score<span class="token punctuation">)</span>   <span class="token comment">//ok,*可以省略</span>
<span class="token punctuation">}</span>
<span class="token comment">/*main访问*/</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">GetScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象" tabindex="-1"><a class="header-anchor" href="#抽象" aria-hidden="true">#</a> 抽象</h2>
<blockquote>
<p>面对对象的思想可以简化为一种抽象的模型,把一类事物的共有属性(字段)和方法提取出来,形成一个物理模型(模板),这种研究问题的方法称之为<strong>抽象</strong></p>
</blockquote>
<blockquote>
<p>银行存取款</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token comment">//定义一个结构体Account</span>
<span class="token keyword">type</span> Account <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	AccountNo <span class="token builtin">string</span>
	Pwd <span class="token builtin">string</span>
	Balance <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//1. 方法 == 存款</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>account <span class="token operator">*</span>Account<span class="token punctuation">)</span> <span class="token function">Deposite</span><span class="token punctuation">(</span>money <span class="token builtin">float64</span><span class="token punctuation">,</span> pwd <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">//看下输入的密码是否正确</span>
	<span class="token keyword">if</span> pwd <span class="token operator">!=</span> account<span class="token punctuation">.</span>Pwd <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你输入的密码不正确"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>

	<span class="token comment">//看看存款金额是否正确</span>
    <span class="token keyword">if</span> money <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你输入的金额不正确"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	account<span class="token punctuation">.</span>Balance <span class="token operator">+=</span> money
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"存款成功~~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//取款</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>account <span class="token operator">*</span>Account<span class="token punctuation">)</span> <span class="token function">WithDraw</span><span class="token punctuation">(</span>money <span class="token builtin">float64</span><span class="token punctuation">,</span> pwd <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">//看下输入的密码是否正确</span>
	<span class="token keyword">if</span> pwd <span class="token operator">!=</span> account<span class="token punctuation">.</span>Pwd <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你输入的密码不正确"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token comment">//看看取款金额是否正确</span>
	<span class="token keyword">if</span> money <span class="token operator">&lt;=</span> <span class="token number">0</span>  <span class="token operator">||</span> money <span class="token operator">></span> account<span class="token punctuation">.</span>Balance <span class="token punctuation">{</span>
        <span class="token comment">/* 或者money大于你的余额,,没办法取出*/</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你输入的金额不正确"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	account<span class="token punctuation">.</span>Balance <span class="token operator">-=</span> money
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"取款成功~~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//查询余额query</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>account <span class="token operator">*</span>Account<span class="token punctuation">)</span> <span class="token function">Query</span><span class="token punctuation">(</span>pwd <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token comment">//看下输入的密码是否正确</span>
	<span class="token keyword">if</span> pwd <span class="token operator">!=</span> account<span class="token punctuation">.</span>Pwd <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你输入的密码不正确"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"你的账号为=%v 余额=%v \n"</span><span class="token punctuation">,</span> account<span class="token punctuation">.</span>AccountNo<span class="token punctuation">,</span> account<span class="token punctuation">.</span>Balance<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	account <span class="token operator">:=</span> Account<span class="token punctuation">{</span>
		AccountNo <span class="token punctuation">:</span> <span class="token string">"gs1111111"</span><span class="token punctuation">,</span>
		Pwd <span class="token punctuation">:</span> <span class="token string">"666666"</span><span class="token punctuation">,</span>
		Balance <span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//这里可以做的更加灵活，就是让用户通过控制台来输入命令...</span>
	<span class="token comment">//菜单....</span>
	account<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">"666666"</span><span class="token punctuation">)</span>
	account<span class="token punctuation">.</span><span class="token function">Deposite</span><span class="token punctuation">(</span><span class="token number">200.0</span><span class="token punctuation">,</span> <span class="token string">"666666"</span><span class="token punctuation">)</span>
	account<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">"666666"</span><span class="token punctuation">)</span>
	account<span class="token punctuation">.</span><span class="token function">WithDraw</span><span class="token punctuation">(</span><span class="token number">150.0</span><span class="token punctuation">,</span> <span class="token string">"666666"</span><span class="token punctuation">)</span>
	account<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">"666666"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail golang]# go run Account.go 
你的账号为=gs1111111 余额=100 
存款成功~~
你的账号为=gs1111111 余额=300 
取款成功~~
你的账号为=gs1111111 余额=150 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面对对象特征" tabindex="-1"><a class="header-anchor" href="#面对对象特征" aria-hidden="true">#</a> 面对对象特征</h2>
<p><strong>封装:把抽象出的字段和对字段的操作,封装在一起,数据保存在内部</strong></p>
<p>比如说上面取款过程,保证了数据合理性:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>account <span class="token operator">*</span>Account<span class="token punctuation">)</span> <span class="token function">WithDraw</span><span class="token punctuation">(</span>money <span class="token builtin">float64</span><span class="token punctuation">,</span> pwd <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>

	<span class="token comment">//看下输入的密码是否正确</span>
	<span class="token keyword">if</span> pwd <span class="token operator">!=</span> account<span class="token punctuation">.</span>Pwd <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你输入的密码不正确"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token comment">//看看取款金额是否正确</span>
	<span class="token keyword">if</span> money <span class="token operator">&lt;=</span> <span class="token number">0</span>  <span class="token operator">||</span> money <span class="token operator">></span> account<span class="token punctuation">.</span>Balance <span class="token punctuation">{</span>
        <span class="token comment">/* 或者money大于你的余额,,没办法取出*/</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你输入的金额不正确"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	account<span class="token punctuation">.</span>Balance <span class="token operator">-=</span> money
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"取款成功~~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h2>
<p><strong>main包</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"/c/golang/chapter11/encapsulate/model"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p <span class="token operator">:=</span> model<span class="token punctuation">.</span><span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">"smith"</span><span class="token punctuation">)</span>   <span class="token comment">//工厂模式</span>
	p<span class="token punctuation">.</span><span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>    <span class="token comment">//年龄方法</span>
	p<span class="token punctuation">.</span><span class="token function">SetSal</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>  <span class="token comment">//薪水</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>   
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">" age ="</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span><span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">" sal = "</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span><span class="token function">GetSal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//年龄需要用到方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>madel包</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> model
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>     <span class="token comment">//小写,不能访问person</span>
	Name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>   			<span class="token comment">//其它包不能直接访问..</span>
	sal <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//写一个工厂模式的函数，相当于构造函数  -- 访问person</span>
<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>person <span class="token punctuation">{</span>
    <span class="token comment">/*if....*/</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
		Name <span class="token punctuation">:</span> name<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//为了访问age 和 sal 我们编写一对SetXxx的方法和GetXxx的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>person<span class="token punctuation">)</span> <span class="token function">SetAge</span><span class="token punctuation">(</span>age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> age <span class="token operator">></span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&lt;</span><span class="token number">150</span> <span class="token punctuation">{</span>
		p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"年龄范围不正确.."</span><span class="token punctuation">)</span>
		<span class="token comment">//给程序员给一个默认值</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>person<span class="token punctuation">)</span> <span class="token function">GetAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> p<span class="token punctuation">.</span>age
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>person<span class="token punctuation">)</span> <span class="token function">SetSal</span><span class="token punctuation">(</span>sal <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> sal <span class="token operator">>=</span> <span class="token number">3000</span> <span class="token operator">&amp;&amp;</span> sal <span class="token operator">&lt;=</span> <span class="token number">30000</span> <span class="token punctuation">{</span>
		p<span class="token punctuation">.</span>sal <span class="token operator">=</span> sal
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"薪水范围不正确.."</span><span class="token punctuation">)</span>	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>person<span class="token punctuation">)</span> <span class="token function">GetSal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> p<span class="token punctuation">.</span>sal
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>可以看到Go语言的工厂模式和get、set方法和Java的面对对象很接近</p>
</div>
<h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2>
<p><strong>面对对象的特性可以解决代码的复用</strong></p>
<blockquote>
<p>对小学生考试成绩的设置</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">type</span> Pupil <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    Score <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">/*显示成绩  - - 方法*/</span>
<span class="token keyword">func</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Pupil<span class="token punctuation">)</span> <span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"学生名 = %v, 年龄 = %v 成绩 = %v"</span><span class="token punctuation">,</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>p<span class="token punctuation">.</span>Age<span class="token punctuation">,</span>p<span class="token punctuation">.</span>Score<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*录入分数*/</span>
<span class="token keyword">func</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Pupil<span class="token punctuation">)</span> <span class="token function">SetScore</span><span class="token punctuation">(</span>score <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> score <span class="token operator">></span> <span class="token number">100</span> <span class="token operator">||</span>score <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入正确的范围"</span><span class="token punctuation">)</span>
    	<span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>Score <span class="token operator">=</span> score
<span class="token punctuation">}</span>

<span class="token comment">/*显示状态*/</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Pupil<span class="token punctuation">)</span> <span class="token function">tesing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"小学生正在考试"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p <span class="token operator">:=</span> Pupil<span class="token punctuation">{</span>
        Name <span class="token punctuation">:</span> <span class="token string">"tom"</span><span class="token punctuation">,</span>
        Age <span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span><span class="token function">tesing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span><span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail golang]# go run Account.go 
小学生正在考试
请输入小学生成绩:
102
请输入正确的范围
学生名 = tom, 年龄 = 10 成绩 = 0小学生正在考试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时如果还有大学生的话,我们需要再创建一个结构体Graduate,复制一份方法出来,就会出现大量的代码冗余,此时需要用到继承。</strong></p>
<blockquote>
<p>继承可以解决代码复用问题,使编程更加靠近人类的思考思维。</p>
</blockquote>
<blockquote>
<p>在Golang中通过了<strong>匿名结构体来实现了继承特性。</strong></p>
</blockquote>
<p><img src="@source/markdown/images/qiFHySImWTN1c7M-1664787055363-105.png" alt="image-20220114145510709"></p>
<p><strong>也就是说,在Golang中,如果一个struct嵌套了另一个匿名结构体,那么这个结构体可以直接访问你们结构体的字段和方法,从而实现了继承特性</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Good <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Price <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Book <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Goods <span class="token comment">//这里就是嵌套匿名结构体Goods</span>
	Writer <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们对上面学生的案例进行继承改进</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">//改写共有的结构体</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    Score <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//将Pupil和Graduate方法绑定到*student</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>stu <span class="token operator">*</span>Student<span class="token punctuation">)</span> ShowInfo<span class="token punctuation">{</span>
     fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"学生名 = %v, 年龄 = %v 成绩 = %v"</span><span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Age<span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Score<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*录入分数*/</span>
<span class="token keyword">func</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">SetScore</span><span class="token punctuation">(</span>score <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> score <span class="token operator">></span> <span class="token number">100</span> <span class="token operator">||</span>score <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入正确的范围"</span><span class="token punctuation">)</span>
    	<span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>Score <span class="token operator">=</span> score
<span class="token punctuation">}</span>

<span class="token comment">/*显示状态   --  大学生和小学生不一样 -- 保留  -- 大学生*/</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Graduate<span class="token punctuation">)</span> <span class="token function">testing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"小学生正在考试"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Pupil <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Student       <span class="token comment">//嵌入了student的匿名结构体   - -  继承</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Graduate <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Student       <span class="token comment">//嵌入了student的匿名结构体   - -  继承</span>
<span class="token punctuation">}</span>
<span class="token comment">/*显示状态*/</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Pupil<span class="token punctuation">)</span> <span class="token function">tesing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"小学生正在考试"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p <span class="token operator">:=</span> <span class="token operator">&amp;</span>Pupil<span class="token punctuation">{</span><span class="token punctuation">}</span>
    P<span class="token punctuation">.</span>Student<span class="token punctuation">.</span>Name  <span class="token operator">=</span> <span class="token string">"lihua"</span>
	p<span class="token punctuation">.</span>Student<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">8</span>
    p<span class="token punctuation">.</span><span class="token function">testing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>Student<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>Student<span class="token punctuation">.</span><span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承的深入讨论" tabindex="-1"><a class="header-anchor" href="#继承的深入讨论" aria-hidden="true">#</a> 继承的深入讨论</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>因为在Golang中是没有多态的，Java中的多态恰好是非常难的，在Golang中也是可以很好的实现</p>
</div>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A<span class="token punctuation">)</span> <span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//大写方法</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"A Sayok"</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>A<span class="token punctuation">)</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//小写方法</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"A hello"</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> B <span class="token keyword">struct</span><span class="token punctuation">{</span>
    A
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> b B
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"tom"</span>
    <span class="token comment">//b.Name = "tom"  -- 不可以</span>
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span>
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span><span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span><span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail golang]# go run Account.go 
A Sayok tom
A hello tom
{{tom 19}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**由此可见,私有的可以继承使用，而且方法hello和Sayok方法无论是私有的还是公有的都可以直接使用，首字母大写或者小写均可以 **</p>
<p><strong>在编译的时候可以把A去掉,进行简化,编译器也可以识别(编译器会自己找)</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">var</span> b B
    b<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"tom"</span>
    b<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19</span>
    b<span class="token punctuation">.</span><span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当匿名结构体和结构体中的变量重复时候,编译器会采用就近原则</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> B <span class="token keyword">struct</span><span class="token punctuation">{</span>
    A
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	b<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"jack"</span>   <span class="token comment">//此时找的是自身的</span>
    <span class="token comment">/* 如果要给A的Name赋值,就必须要使用*/</span>
    b<span class="token punctuation">.</span>A<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"lisa"</span>
    b<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>      <span class="token comment">//找的是A</span>
    b<span class="token punctuation">.</span><span class="token function">Sayok</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">//找的是自身的Name和A的Age</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结构体嵌入了两个或者多个匿名结构体,如果两个匿名结构体有相同的字段和方法(同时结构体本身没有相同的字段和方法),在访问时,就必须要指定匿名结构体的名字,否则编译会报错</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>    <span class="token comment">//相同字段</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> B <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>    <span class="token comment">//相同字段</span>
    score <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> C <span class="token keyword">struct</span><span class="token punctuation">{</span>
	A
	B
<span class="token comment">/*如果本身有Name则不会报错,就近原则*/</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> c C
    c<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"tom"</span>      <span class="token comment">//会报错!!!!!</span>
    c<span class="token punctuation">.</span>A<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"lisa"</span>   <span class="token comment">//指定A</span>
    c<span class="token punctuation">.</span>B<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"jack"</span>   <span class="token comment">//指定B   </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这种情况也被称为<strong>多重继承</strong>,为了保证代码简洁性,建议尽量不使用多重继承。</p>
</blockquote>
<p><strong>嵌套匿名结构体后,可以在创建结构变量时,直接指定各个匿名结构体字段的值</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	c <span class="token operator">:=</span> C<span class="token punctuation">{</span>
        B<span class="token punctuation">{</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        A<span class="token punctuation">{</span><span class="token string">"李四"</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意后面需要有<code v-pre>,</code></p>
</blockquote>
<p><strong>结构体中可以只写类型</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>    <span class="token comment">//相同字段</span>
	age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> C <span class="token keyword">struct</span><span class="token punctuation">{</span>
	A
	<span class="token builtin">int</span>   <span class="token comment">//表示的是匿名字段</span>
<span class="token punctuation">}</span>
<span class="token comment">/*使用int方法*/</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> c C
    c<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"lihua"</span>
    c<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">100</span>
    c<span class="token punctuation">.</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">20</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"int="</span><span class="token punctuation">,</span>c<span class="token punctuation">.</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"c= "</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail golang]# go run main.go 
int= 20
c= {{lihua 100} 20}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '10.md' style='float:left'>⬆️上一节🔗</a><a href = '12.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


