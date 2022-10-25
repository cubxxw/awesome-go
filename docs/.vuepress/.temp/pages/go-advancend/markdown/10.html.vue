<template><div><h1 id="go语言结构体和方法" tabindex="-1"><a class="header-anchor" href="#go语言结构体和方法" aria-hidden="true">#</a> Go语言结构体和方法</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-结构体">1. 结构体</router-link><ul><li><router-link to="#访问结构体成员">访问结构体成员</router-link></li><li><router-link to="#结构体在内存中的布局">结构体在内存中的布局</router-link></li><li><router-link to="#声明结构体">声明结构体</router-link></li><li><router-link to="#字段-属性">字段/属性</router-link></li><li><router-link to="#创建结构体变量和访问结构体字段">创建结构体变量和访问结构体字段</router-link></li><li><router-link to="#struct类型的内存分配机制">struct类型的内存分配机制</router-link></li><li><router-link to="#结构体转换">结构体转换</router-link></li><li><router-link to="#struct-tag">struct -- tag</router-link></li></ul></li><li><router-link to="#_2-方法">2. 方法</router-link><ul><li><router-link to="#方法声明与调用">方法声明与调用</router-link></li><li><router-link to="#方法的调用和传参机制">方法的调用和传参机制</router-link></li><li><router-link to="#方法声明-定义">方法声明（定义）</router-link></li></ul></li><li><router-link to="#_3-🤺方法和函数的区别">3. 🤺方法和函数的区别</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<h2 id="_1-结构体" tabindex="-1"><a class="header-anchor" href="#_1-结构体" aria-hidden="true">#</a> 1. 结构体</h2>
<div class="custom-container warning"><p class="custom-container-title">Go语言面对对象特性</p>
<p>Golang在面对对象编程中并不是<strong>存粹的面对对象编程</strong>，但是也支持OOP，Golang支持面对对象特性是比较准确的。</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">Go语言没有class</p>
<p>Go语言中没有class，Go语言的struct和其他编程语言的class有相同地位，所以可以理解Golang是基于struct实现OOP特性</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">Go语言继承</p>
<p>但是Golang任然有面对对象的<strong>继承、封装和多态</strong>的特性，<strong>Golang面对接口编程是非常重要的，耦合度非常低</strong></p>
</div>
<blockquote>
<p>🐶 我觉得面对对象是一种思想，而不是某些模式化的定义，但是Golang是有面对对象思想的。</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/************************************************************************* 
    > File Name: lisa.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Thu 13 Jan 2022 11:18:19 AM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">type</span> Cat <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    Color <span class="token builtin">string</span>
    Hobby <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> cat1 Cat   <span class="token comment">//用cat定义一个变量</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"初始化cat1="</span><span class="token punctuation">,</span>cat1<span class="token punctuation">)</span>    <span class="token comment">// { 0 }</span>
    cat1<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"Lisa"</span>
    cat1<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">19</span>
    cat1<span class="token punctuation">.</span>Color <span class="token operator">=</span> <span class="token string">"白人"</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"初始化cat1="</span><span class="token punctuation">,</span>cat1<span class="token punctuation">)</span>    <span class="token comment">// { 0 }</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail golang]# go run  lisa.go
初始化cat1= { 0 }
初始化cat1= {Lisa 19 白人}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>首字母是大写，说明是公有的成员</strong></p>
<blockquote>
<ol>
<li>结构体是<strong>自定义的数据类型</strong>，代表的是一类事务  -- Cat</li>
<li>结构体变量是具体的、实际的，代表的是一个具体的变量  -- cat1.Name</li>
<li>在创建一个结构体变量，如果没有赋值，则默认是默认值</li>
</ol>
</blockquote>
<h3 id="访问结构体成员" tabindex="-1"><a class="header-anchor" href="#访问结构体成员" aria-hidden="true">#</a> 访问结构体成员</h3>
<p>如果要访问结构体成员，需要使用点号 <strong>.</strong> 操作符，格式为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>结构体<span class="token punctuation">.</span>成员名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="结构体在内存中的布局" tabindex="-1"><a class="header-anchor" href="#结构体在内存中的布局" aria-hidden="true">#</a> 结构体在内存中的布局</h3>
<div class="language-q ext-q line-numbers-mode"><pre v-pre class="language-q"><code><span class="token keyword">type</span> Cat struct<span class="token punctuation">{</span>
    Name <span class="token keyword">string</span>
    Age int
    Color <span class="token keyword">string</span>
    Hobby <span class="token keyword">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结构体Cat本身也是有地址的，<code v-pre>fmt.Println(&amp;cat1)</code></strong></p>
<p><img src="@source/go-advancend/markdown/images/KhECvqOisweMDoy.png" alt="image-20220113113038932"></p>
<p><strong>刚开始的时候都是默认值（0或空字符串），后面定义后在内存中赋值</strong></p>
<p><strong>所以：✍️结构体是值类型 ，默认是值拷贝，改变一个结构体的值，不影响</strong></p>
<h3 id="声明结构体" tabindex="-1"><a class="header-anchor" href="#声明结构体" aria-hidden="true">#</a> 声明结构体</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> 结构体名称 <span class="token keyword">struct</span><span class="token punctuation">{</span>
	field1 <span class="token keyword">type</span>
	field2 <span class="token keyword">type</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✍️ 结构体名称如果首字母如果是大写，那么可以在其他包引用结构体</strong></p>
<h3 id="字段-属性" tabindex="-1"><a class="header-anchor" href="#字段-属性" aria-hidden="true">#</a> 字段/属性</h3>
<div class="custom-container tip"><p class="custom-container-title">结构体字段</p>
<p><strong>从概念上看，结构体字段 = 属性 = field</strong></p>
</div>
<blockquote>
<p>后面默认是字段</p>
</blockquote>
<p><strong>结构体中的变量如果没有被使用，不会报错（和普通变量不一样）</strong></p>
<p><strong>指针,slice和map的零值都是nil，还没有分配可见，如果要使用，要make后才能使用</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">type</span> Cat <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    Scores <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">float64</span>   <span class="token comment">//数组</span>
 <span class="token comment">/*---上面是值类型 ，下面是引用类型 ---*/</span>
    ptr <span class="token operator">*</span><span class="token builtin">int</span>       <span class="token comment">//指针</span>
    slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>     <span class="token comment">//切片</span>
    map1 <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>   <span class="token comment">//map - key:string ,value:string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> p Cat   
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"初始化:"</span><span class="token punctuation">,</span>p<span class="token punctuation">)</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span>ptr <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"指针初始为nil"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span>slice <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"切片初始为nil"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> p<span class="token punctuation">.</span>map1 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"map初始为nil"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/* 使用slice */</span>
    <span class="token comment">/* p.slict[0] = 100 会报错 */</span>
    p<span class="token punctuation">.</span>slice <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>  
    p<span class="token punctuation">.</span>slice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>slice<span class="token punctuation">)</span>
   
    <span class="token comment">/*使用map */</span>
    p<span class="token punctuation">.</span>map1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token comment">//不需要分配空间</span>
    p<span class="token punctuation">.</span>map1<span class="token punctuation">[</span><span class="token string">"b"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"100"</span>
    p<span class="token punctuation">.</span>map1<span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"200"</span>                                       
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>map1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>                                                      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail golang]# go build -o lisa lisa.go
[root@mail golang]# ./lisa
初始化: { 0 [0 0 0 0 0] &lt;nil> [] map[]}
指针初始为nil
切片初始为nil
map初始为nil
[100 0 0 0 0 0 0 0 0 0]
map[a:200 b:100]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不同结构体变量的字段是独立的，互不影响</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">type</span> Cat <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
    Color <span class="token builtin">string</span>
    Hobby <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Cat2 <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
    Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> Cat cat1
    <span class="token keyword">var</span> Cat2 cat2
    cat1<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"lisa"</span>
    cat1<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">19</span>
    
    cat2 <span class="token operator">:=</span> cat1   <span class="token comment">//将cat1赋值为cat2</span>
    cat2<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"ber"</span>   <span class="token comment">//修改cat2的name</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"cat1 = "</span><span class="token punctuation">,</span>cat1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"cat2 = "</span><span class="token punctuation">,</span>cat2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail golang]# go build -o a lisa.go 
[root@mail golang]# ./a
{ 0}
cat1 =  {lisa 19}
cat2 =  {ber 19}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✍️如果希望能够改变，可以使用<code v-pre>&amp;</code>后面讲</strong></p>
<h3 id="创建结构体变量和访问结构体字段" tabindex="-1"><a class="header-anchor" href="#创建结构体变量和访问结构体字段" aria-hidden="true">#</a> 创建结构体变量和访问结构体字段</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式一：直接声明</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> person Person
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方式二(最方便)-{}</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>person <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token punctuation">}</span>
person<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"lisa"</span>
person<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>或:</em></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>person <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token string">"lisa,18"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方式三：用new</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> person <span class="token operator">*</span>Person <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>Pereson<span class="token punctuation">)</span>
<span class="token comment">/*--------或-------*/</span>
person <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span>

<span class="token comment">/*person是一个指针，赋值： */</span>
<span class="token punctuation">(</span><span class="token operator">*</span>person<span class="token punctuation">)</span><span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"lisa"</span>
<span class="token punctuation">(</span><span class="token operator">*</span>person<span class="token punctuation">)</span><span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">18</span>

<span class="token comment">/*简化赋值 -- Go特性，在底层会对其处理*/</span>
person<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"lisa"</span>
person<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">18</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>person<span class="token punctuation">)</span> <span class="token comment">/*或
fmt.Println(person) */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：使用new省略<code v-pre>*</code>只是Golang特性，其他语言需要加上，不可以省略</strong></p>
<p><strong>方式四：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> person <span class="token operator">*</span>Person <span class="token operator">=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span><span class="token string">"lisa,18"</span><span class="token punctuation">}</span>
<span class="token comment">//  person.Name = "lisa"</span>
<span class="token comment">//  person.Age = 18 </span>
<span class="token comment">/* --------------------------*/</span>
<span class="token comment">//  (*person).Name = "lisa"</span>
<span class="token comment">//  (*person).Age = 18 </span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>person<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>**和方法三一样，在Golang中可以省略<code v-pre>*</code>,底层会对其处理，会自动加上 * **</li>
<li><strong>同时和方法二一样，在{}中可以直接赋值</strong></li>
</ol>
<h3 id="struct类型的内存分配机制" tabindex="-1"><a class="header-anchor" href="#struct类型的内存分配机制" aria-hidden="true">#</a> struct类型的内存分配机制</h3>
<p><img src="@source/go-advancend/markdown/images/FWDVvYsj3NTZISw.png" alt="image-20220113133337456"></p>
<p><strong>变量总是在内存中，结构体中变量在内存中也是</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>person<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>   <span class="token comment">//不正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>🤖 <strong>这样的运算是错误的，<code v-pre>.</code>的运算符级别是要比<code v-pre>*</code>要高的，这样写的话报错</strong></p>
<p>✍️ <strong>==结构体的所有字段在内存中是连续分布的，这样的话，我们可以通过地址的加减来快速找到下一个数字==</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">type</span> Point <span class="token keyword">struct</span><span class="token punctuation">{</span>
    x<span class="token punctuation">,</span>y <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Rect <span class="token keyword">struct</span><span class="token punctuation">{</span>
	a<span class="token punctuation">,</span>b Point
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    r <span class="token operator">:=</span> Rect<span class="token punctuation">{</span>Point<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>Point<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token comment">//r有4个int整数，在内存中连续分布</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"r.a.x的地址%p \n r.a.y的地址%p \n"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>a<span class="token punctuation">.</span>x<span class="token punctuation">,</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>a<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"r.b.x的地址%p \n r.b.y的地址%p \n"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>b<span class="token punctuation">.</span>x<span class="token punctuation">,</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>b<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"r.a.x+1的地址为："</span><span class="token punctuation">,</span><span class="token operator">&amp;</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>a<span class="token punctuation">.</span>x<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go run main.go </span>
r.a.x的地址0xc00001c0a0 
r.a.y的地址0xc00001c0a8 
r.b.x的地址0xc00001c0b0 
r.b.y的地址0xc00001c0b8 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由此可见，结构体变量在内存中也是连续分布的</strong></p>
<p><strong>✍️如果是指针类型，那么对指针来说，指针本身有个地址，同时也指向一块地址，那么此时指向的地址不一定是连续的，他们本身的地址是连续的</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">type</span> Point <span class="token keyword">struct</span><span class="token punctuation">{</span>
    x<span class="token punctuation">,</span>y <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Rect <span class="token keyword">struct</span><span class="token punctuation">{</span>
	a<span class="token punctuation">,</span>b <span class="token operator">*</span>Point
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    r <span class="token operator">:=</span> Rect<span class="token punctuation">{</span><span class="token operator">&amp;</span>Point<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>Point<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token comment">//r有4个int整数，在内存中连续分布</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"r.a本身的地址%p \n r.a本身的地址%p \n"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>r<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"r.b指向的地址%p \n r.b指向的地址%p \n"</span><span class="token punctuation">,</span>r<span class="token punctuation">.</span>a<span class="token punctuation">,</span>r<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"r.a指向的值%p \n r.b指向的值%p \n"</span><span class="token punctuation">,</span>r<span class="token punctuation">.</span>a<span class="token punctuation">,</span>r<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail ~]# go run main.go 
r.a本身的地址0xc000010240 
r.a本身的地址0xc000010248 
r.b指向的地址0xc0000160b0 
r.b指向的地址0xc0000160c0 
r.a指向的值%!p(main.Point={1 2}) 
r.b指向的值%!p(main.Point={3 4}) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>😂 好像是有点关系，但是确实关系不大</strong></p>
<h3 id="结构体转换" tabindex="-1"><a class="header-anchor" href="#结构体转换" aria-hidden="true">#</a> 结构体转换</h3>
<p><strong>结果体是用户单独定义的类型，和其他类型进行转换的时候需要有==完全相同==的字段（名字，个数和类型）</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> a A
<span class="token keyword">var</span> b B
a <span class="token operator">=</span> <span class="token function">A</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>    <span class="token comment">//可以强制转换   -- 需要完全相同的字段</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✍️ <strong>即使使用type给数据类型起别名，Golang也是认为两个数据类型不同</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: type.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Thu 13 Jan 2022 02:31:17 PM CST
 ************************************************************************/</span>

<span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">type</span> integer <span class="token builtin">int</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> i integer <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">var</span> j <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">20</span>   <span class="token comment">//需要转化</span>
    j <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>                                                              
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="struct-tag" tabindex="-1"><a class="header-anchor" href="#struct-tag" aria-hidden="true">#</a> struct -- tag</h3>
<p><strong>struct的每一个字段上，都可以写上一个tag，该tag可以通过==反射机制==获取，常见的使用场景就是和反序列化</strong></p>
<blockquote>
<p>有这么一个问题，就是首字母大写可以被其他包访问，但是很多人不习惯大写，那么此时就需要用上<strong>tag</strong></p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"encoding/json"</span>
<span class="token punctuation">)</span>
<span class="token keyword">type</span> Cat <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>  
    Age <span class="token builtin">int</span>	
    Color <span class="token builtin">string</span> 
    Hobby <span class="token builtin">string</span> 
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">/*创建变量*/</span>
    cat <span class="token operator">:=</span> Cat<span class="token punctuation">{</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">"红色"</span><span class="token punctuation">,</span><span class="token string">"hanhan"</span><span class="token punctuation">}</span>
    <span class="token comment">//将cat变量序列化为json格式字串</span>
    jsoncat<span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>cat<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"json处理错误"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"jsoncat = "</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>jsoncat<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时我们返回的是Name，而且变量首字母只能大写</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail ~]# go run  type.go
jsoncat =  {"Name":"张三","Age":20,"Color":"红色","Hobby":"hanhan"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们使用<code v-pre>tag</code></strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"encoding/json"</span>
<span class="token punctuation">)</span>
<span class="token keyword">type</span> Cat <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>  <span class="token string">`json:"姓名"`</span>
    Age <span class="token builtin">int</span>	<span class="token string">`json:"年龄"`</span>
    Color <span class="token builtin">string</span> <span class="token string">`json:"颜色"`</span>
    Hobby <span class="token builtin">string</span> <span class="token string">`json:"hobby"`</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">/*创建变量*/</span>
    cat <span class="token operator">:=</span> Cat<span class="token punctuation">{</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">"红色"</span><span class="token punctuation">,</span><span class="token string">"hanhan"</span><span class="token punctuation">}</span>
    <span class="token comment">//将cat变量序列化为json格式字串</span>
    jsoncat<span class="token punctuation">,</span>err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>cat<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"json处理错误"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"jsoncat = "</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>jsoncat<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail golang]# go build -o a main.go 
[root@mail golang]# ./a
jsoncat =  {"姓名":"张三","年龄":20,"颜色":"红色","hobby":"hanhan"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-方法" tabindex="-1"><a class="header-anchor" href="#_2-方法" aria-hidden="true">#</a> 2. 方法</h2>
<p>::: warging golang方法
<strong>Golang中方法的作用是在指定的数据类型上的（和指定的数据类型绑定），==因此自定义类型，都可以有方法，而不仅仅是struct==</strong></p>
<p>:::</p>
<h3 id="方法声明与调用" tabindex="-1"><a class="header-anchor" href="#方法声明与调用" aria-hidden="true">#</a> 方法声明与调用</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a A<span class="token punctuation">)</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol>
<li><code v-pre>func (A a)test()</code>表示A结构体有一个方法，方法名为test</li>
<li><code v-pre>(a A)</code>表示test方法(形参，可以随意，可用可不用）和A类型绑定的</li>
</ol>
</blockquote>
<p><strong>举例说明：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">type</span> A <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a A<span class="token punctuation">)</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//注意顺序，结构体在后面顺序不能颠倒</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"test()"</span><span class="token punctuation">,</span>a<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> a A 
    a<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">19</span>
    a<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">//调用方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail ~]# go build -o a main.go 
[root@mail ~]# ./a
test() 19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意，方法函数里面的是值拷贝，所以方法里面的变量并改变不会影响变量的值</strong></p>
<h3 id="方法的调用和传参机制" tabindex="-1"><a class="header-anchor" href="#方法的调用和传参机制" aria-hidden="true">#</a> 方法的调用和传参机制</h3>
<p>方法的调用和传参机制和函数基本一样，不一样的地方是<strong>方法调用时，会将调用方法的变量，当作实参也传递给方法</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span>n2 <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> n1 <span class="token operator">+</span> n2
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> p Person    <span class="token comment">//p是结构体</span>
    p<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"tom"</span>
    n1 <span class="token operator">=</span> <span class="token number">10</span>
    n2 <span class="token operator">=</span> <span class="token number">20</span>
    res <span class="token operator">:=</span> p<span class="token punctuation">.</span><span class="token function">getSum</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span>n2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"res= "</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>res = 30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<p><img src="@source/go-advancend/markdown/images/1WF2NpSP9ZAdEzT.png" alt="image-20220113160106819"></p>
<p><strong>在调用方法中，是值类型，所以被被拷贝，和函数不同的是：变量调用方法时，该变量也会作为一个参数传递到方法（如果是引用类型，则进行地址拷贝）</strong></p>
<p><strong>案例：</strong></p>
<blockquote>
<p>1)声明一个结构体Circle, 字段为 radius
2)声明一个方法area和Circle绑定，可以返回面积。
3)提示：画出area执行过程+说明</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>	
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Circle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	radius <span class="token builtin">float64</span>   <span class="token comment">//定义半径</span>
<span class="token punctuation">}</span>

<span class="token comment">//2)声明一个方法area和Circle绑定，可以返回面积。</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c Circle<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> c<span class="token punctuation">.</span>radius <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span>

<span class="token comment">//为了提高效率，通常我们方法和结构体的指针类型绑定</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token function">area2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token comment">//因为 c是指针，因此我们标准的访问其字段的方式是 (*c).radius</span>
	<span class="token comment">//return 3.14 * (*c).radius * (*c).radius</span>
	<span class="token comment">// (*c).radius 等价  c.radius </span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"c 是  *Circle 指向的地址=%p"</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>radius <span class="token operator">=</span> <span class="token number">10</span>
	<span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> c<span class="token punctuation">.</span>radius <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span>
 
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//创建一个Circle 变量</span>
	<span class="token keyword">var</span> c Circle 
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"main c 结构体变量地址 =%p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>radius <span class="token operator">=</span> <span class="token number">7.0</span>
	<span class="token comment">//res2 := (&amp;c).area2()</span>
	<span class="token comment">//编译器底层做了优化  (&amp;c).area2() 等价 c.area()</span>
	<span class="token comment">//因为编译器会自动的给加上 &amp;c</span>
	res2 <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">area2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"面积="</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"c.radius = "</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>radius<span class="token punctuation">)</span> <span class="token comment">//10</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail ~]# vim main.go 
[root@mail ~]# go build -o main main.go 
[root@mail ~]# ./main
main c 结构体变量地址 =0xc0000160a8
c 是  *Circle 指向的地址=0xc0000160a8面积= 314
c.radius =  10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<p><img src="https://s2.loli.net/2022/01/13/G19wNqhFC2AJXO4.png" alt="image-20220113161158133"></p>
<p>wanging 注意⚡
<strong>注意：area栈中c和main栈是不一样的，进行的值拷贝。如果是指针的话，那么是一样的，在更多情况下使用的是<code v-pre>*</code>，效率更高</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> c<span class="token punctuation">.</span>radius <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这两种情况底层是有本质去别的，使用指针下面函数体的指针可以省略</strong></p>
<p>:::</p>
<h3 id="方法声明-定义" tabindex="-1"><a class="header-anchor" href="#方法声明-定义" aria-hidden="true">#</a> 方法声明（定义）</h3>
<blockquote>
<p>方法声明和定义是一样的</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>variable_name variable_data_type<span class="token punctuation">)</span> <span class="token function">function_name</span><span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">/* 函数体*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>(int,int) 返回值类型，和函数中返回值类型使用相同，可以进行绑定</li>
<li>return和返回值列表是相对应的</li>
<li>参数列表：表示方法的输入</li>
<li>variable_data_type不一定要和结构体绑定，可以是自定义类型，都可以有方法</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Circle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    radius <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> c Circle
    c<span class="token punctuation">.</span>radius <span class="token operator">=</span> <span class="token number">10</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"圆的面积 = "</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"圆的面积 = "</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">/* 注意应用类型的调用方式，要用（&amp;），可以省略*/</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> c<span class="token punctuation">.</span>radius <span class="token operator">*</span> c<span class="token punctuation">.</span>radius
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail ~]# go run  main.go 
圆的面积 =  314
圆的面积 =  314
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>✍️<strong>注意：<code v-pre>*</code>指向的是结构体Circle，而不是c，因为传的是c地址到结构体</strong></p>
<p><strong>因为编译器的优化，同时（&amp;c）可以写成c，编译器会自动加上</strong></p>
<p><img src="@source/go-advancend/markdown/images/RfpskEUaihTjVry.png" alt="image-20220113163904967"></p>
<p><strong>实现了student类型的string方法，就会自动调用</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Student <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span><span class="token punctuation">(</span>stu <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
    str <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"Name = [%v]\nName = [%v]"</span><span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>stu<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
    <span class="token keyword">return</span> str
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例</strong></p>
<blockquote>
<ol>
<li>编写一个方法算该矩形的面积(可以接收长len，和宽width)，
将其作为方法返回值。在main方法中调用该方法，接收返回的面积值并打印</li>
<li>编写方法：判断一个数是奇数还是偶数</li>
<li>根据行、列、字符打印 对应行数和列数的字符，
比如：行：3，列：2，字符*,则打印相应的效果</li>
<li>定义小小计算器结构体(Calcuator)，
实现加减乘除四个功能
实现形式1：分四个方法完成: , 分别计算 + - * /
实现形式2：用一个方法搞定, 需要接收两个数，还有一个运算符</li>
</ol>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>	
<span class="token punctuation">)</span>

<span class="token keyword">type</span> MethodUtils <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">//字段...空字段</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">/*
	1)编写结构体(MethodUtils)，编程一个方法，方法不需要参数，
	在方法中打印一个10*8 的矩形，在main方法中调用该方法。
	*/</span>
	<span class="token keyword">var</span> mu MethodUtils
	mu<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	mu<span class="token punctuation">.</span><span class="token function">Print2</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

	areaRes <span class="token operator">:=</span> mu<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token number">2.5</span><span class="token punctuation">,</span> <span class="token number">8.7</span><span class="token punctuation">)</span>  <span class="token comment">//求面积传长宽</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"面积为="</span><span class="token punctuation">,</span> areaRes<span class="token punctuation">)</span>

	mu<span class="token punctuation">.</span><span class="token function">JudgeNum</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>

	mu<span class="token punctuation">.</span><span class="token function">Print3</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"@"</span><span class="token punctuation">)</span>
<span class="token comment">/*打印@,7行20列*/</span>

	<span class="token comment">//测试一下:</span>
	<span class="token keyword">var</span> calcuator Calcuator
	calcuator<span class="token punctuation">.</span>Num1 <span class="token operator">=</span> <span class="token number">1.2</span>
	calcuator<span class="token punctuation">.</span>Num2 <span class="token operator">=</span> <span class="token number">2.2</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"sum=%v\n"</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%.2f"</span><span class="token punctuation">,</span>calcuator<span class="token punctuation">.</span><span class="token function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"sub=%v\n"</span><span class="token punctuation">,</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%.2f"</span><span class="token punctuation">,</span>calcuator<span class="token punctuation">.</span><span class="token function">getSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	res <span class="token operator">:=</span> calcuator<span class="token punctuation">.</span><span class="token function">getRes</span><span class="token punctuation">(</span><span class="token char">'*'</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"res="</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
<span class="token comment">//给MethodUtils编写方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>mu MethodUtils<span class="token punctuation">)</span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">8</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//2)编写一个方法，提供m和n两个参数，方法中打印一个m*n的矩形</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>mu MethodUtils<span class="token punctuation">)</span> <span class="token function">Print2</span><span class="token punctuation">(</span>m <span class="token builtin">int</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
编写一个方法算该矩形的面积(可以接收长len，和宽width)， 
将其作为方法返回值。在main方法中调用该方法，接收返回的面积值并打印
*/</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>mu MethodUtils<span class="token punctuation">)</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token builtin">len</span> <span class="token builtin">float64</span><span class="token punctuation">,</span> width <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token builtin">len</span> <span class="token operator">*</span> width
<span class="token punctuation">}</span>

<span class="token comment">/*
编写方法：判断一个数是奇数还是偶数

*/</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>mu <span class="token operator">*</span>MethodUtils<span class="token punctuation">)</span> <span class="token function">JudgeNum</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">if</span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">"是偶数.."</span><span class="token punctuation">)</span>	
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">"是奇数.."</span><span class="token punctuation">)</span>	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
根据行、列、字符打印 对应行数和列数的字符，
比如：行：3，列：2，字符*,则打印相应的效果

*/</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>mu <span class="token operator">*</span>MethodUtils<span class="token punctuation">)</span> <span class="token function">Print3</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> m <span class="token builtin">int</span><span class="token punctuation">,</span> key <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
定义小小计算器结构体(Calcuator)，
实现加减乘除四个功能
实现形式1：分四个方法完成: , 分别计算 + - * /
实现形式2：用一个方法搞定, 需要接收两个数，还有一个运算符 

*/</span>
<span class="token comment">//实现形式1</span>

<span class="token keyword">type</span> Calcuator <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Num1 <span class="token builtin">float64</span>
	Num2 <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>calcuator <span class="token operator">*</span>Calcuator<span class="token punctuation">)</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>

	<span class="token keyword">return</span> calcuator<span class="token punctuation">.</span>Num1 <span class="token operator">+</span> calcuator<span class="token punctuation">.</span>Num2
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>calcuator <span class="token operator">*</span>Calcuator<span class="token punctuation">)</span> <span class="token function">getSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>

	<span class="token keyword">return</span> calcuator<span class="token punctuation">.</span>Num1 <span class="token operator">-</span> calcuator<span class="token punctuation">.</span>Num2
<span class="token punctuation">}</span>

<span class="token comment">//..</span>

<span class="token comment">//实现形式2</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>calcuator <span class="token operator">*</span>Calcuator<span class="token punctuation">)</span> <span class="token function">getRes</span><span class="token punctuation">(</span>operator <span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	res <span class="token operator">:=</span> <span class="token number">0.0</span>
	<span class="token keyword">switch</span> operator <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token char">'+'</span><span class="token punctuation">:</span>
			res <span class="token operator">=</span> calcuator<span class="token punctuation">.</span>Num1 <span class="token operator">+</span> calcuator<span class="token punctuation">.</span>Num2
	<span class="token keyword">case</span> <span class="token char">'-'</span><span class="token punctuation">:</span>
			res <span class="token operator">=</span> calcuator<span class="token punctuation">.</span>Num1 <span class="token operator">-</span> calcuator<span class="token punctuation">.</span>Num2
	<span class="token keyword">case</span> <span class="token char">'*'</span><span class="token punctuation">:</span>
			res <span class="token operator">=</span> calcuator<span class="token punctuation">.</span>Num1 <span class="token operator">*</span> calcuator<span class="token punctuation">.</span>Num2
	<span class="token keyword">case</span> <span class="token char">'/'</span><span class="token punctuation">:</span>
			res <span class="token operator">=</span> calcuator<span class="token punctuation">.</span>Num1 <span class="token operator">/</span> calcuator<span class="token punctuation">.</span>Num2
	<span class="token keyword">default</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"运算符输入有误..."</span><span class="token punctuation">)</span>
			
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail ~]# go build -o main main.go
[root@mail ~]# ./main 
********
********
********
********
********
********
********
********
********
********

********************
********************
********************
********************
********************

面积为= 21.75
11 是奇数..
@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@
sum=3.40
sub=-1.00
res= 2.64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-🤺方法和函数的区别" tabindex="-1"><a class="header-anchor" href="#_3-🤺方法和函数的区别" aria-hidden="true">#</a> 3. 🤺方法和函数的区别</h2>
<ol>
<li>调用方式不一样
<ol>
<li><strong>函数:函数名(实参列表)</strong></li>
<li><strong>方法:变量.方法名(实参列表)</strong></li>
</ol>
</li>
<li>对于普通函数,接收者为值类型时,不能将指针类型的数据直接传递,反之亦然
<ul>
<li>传递的时候<code v-pre>&amp;</code>不可以省略,接受的时候<code v-pre>&amp;</code>可以省略</li>
</ul>
</li>
<li>对于方法(如strucr的方法),接收者为值类型时候,可以直接用指针的变量调用方法,反过来同样可以</li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>	
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span> 

<span class="token comment">//函数</span>
<span class="token comment">//对于普通函数，接收者为值类型时，不能将指针类型的数据直接传递，反之亦然</span>
<span class="token keyword">func</span> <span class="token function">test01</span><span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>   <span class="token comment">//tom</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test02</span><span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>	  <span class="token comment">//tom</span>
<span class="token punctuation">}</span>

<span class="token comment">//对于方法（如struct的方法），</span>
<span class="token comment">//接收者为值类型时，可以直接用指针类型的变量调用方法，反过来同样也可以</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"jack"</span>  <span class="token comment">//值拷贝,不影响主函数Name</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"test03() ="</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>Name<span class="token punctuation">)</span> <span class="token comment">// jack</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">test04</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"mary"</span>   <span class="token comment">//引用传递~影响</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"test04() ="</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>Name<span class="token punctuation">)</span> <span class="token comment">// mary</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	p <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token string">"tom"</span><span class="token punctuation">}</span>
	<span class="token function">test01</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
	<span class="token function">test02</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>p<span class="token punctuation">)</span>

	p<span class="token punctuation">.</span><span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main() p.name="</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>Name<span class="token punctuation">)</span> <span class="token comment">// tom</span>
	
    <span class="token punctuation">(</span><span class="token operator">&amp;</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 注意:从形式上是传入地址，但是本质仍然是值拷贝,容易出错</span>
    <span class="token comment">/*编译器默认是把你&amp;去掉了*/</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main() p.name="</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>Name<span class="token punctuation">)</span> <span class="token comment">// tom</span>

	<span class="token punctuation">(</span><span class="token operator">&amp;</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test04</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main() p.name="</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>Name<span class="token punctuation">)</span> <span class="token comment">// mary</span>
	p<span class="token punctuation">.</span><span class="token function">test04</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 等价 (&amp;p).test04 , 从形式上是传入值类型，但是本质仍然是地址拷贝</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main() p.name="</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>Name<span class="token punctuation">)</span> <span class="token comment">// mary</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail ~]# go build -o main main.go
[root@mail ~]# ./main
tom
tom
test03() = jack
main() p.name= tom
test03() = jack
main() p.name= tom
test04() = mary
main() p.name= mary
test04() = mary
main() p.name= mary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">📜 对上面的解释</p>
<p>✍️✍️✍️ <strong>即关键是在<code v-pre>func (p *Person) test04()</code>中的person是值类型还是引用类型,而不在于<code v-pre>(&amp;p).test04()</code>是否为值拷贝</strong></p>
<p><strong>1. (&amp;p).test03() // 注意:从形式上是传入地址，但是本质仍然是值拷贝</strong></p>
<p><strong>2. p.test04()     // 等价 (&amp;p).test04 , 从形式上是传入值类型，但是本质仍然是地址拷贝</strong></p>
</div>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '9.md' style='float:left'>⬆️上一节🔗</a><a href = '11.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/go-advancend/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


