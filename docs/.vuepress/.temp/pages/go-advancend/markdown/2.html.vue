<template><div><h1 id="go语言常量、基本数据类型、字符串转化" tabindex="-1"><a class="header-anchor" href="#go语言常量、基本数据类型、字符串转化" aria-hidden="true">#</a> go语言常量、基本数据类型、字符串转化</h1>
<nav class="table-of-contents"><ul><li><router-link to="#go-语言常量">Go 语言常量</router-link></li><li><router-link to="#iota">iota</router-link><ul><li><router-link to="#iota-用法">iota 用法</router-link></li><li><router-link to="#怎么看变量的数据类型">怎么看变量的数据类型</router-link></li><li><router-link to="#使用包查看字节数">使用包查看字节数：</router-link></li><li><router-link to="#小数类型">小数类型</router-link></li><li><router-link to="#字符类型">字符类型</router-link></li><li><router-link to="#布尔类型">布尔类型</router-link></li><li><router-link to="#字符串类型">字符串类型</router-link></li></ul></li><li><router-link to="#基本数据类型的相互转换">基本数据类型的相互转换</router-link></li><li><router-link to="#基本数据类型转string">基本数据类型转string</router-link><ul><li><router-link to="#方法一-格式化字符串">方法一：格式化字符串</router-link></li><li><router-link to="#方法二-使用strconv包的函数">方法二：使用strconv包的函数</router-link></li></ul></li><li><router-link to="#string类型转化为基本数据类型">string类型转化为基本数据类型</router-link><ul><li><router-link to="#使用strconv包的函数">使用strconv包的函数</router-link></li></ul></li><li><router-link to="#补充-go语言的fmt包-参考官网文档">补充：Go语言的fmt包（参考官网文档）</router-link><ul><li><router-link to="#package-fmt">package fmt</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<h2 id="go-语言常量" tabindex="-1"><a class="header-anchor" href="#go-语言常量" aria-hidden="true">#</a> Go 语言常量</h2>
<p>常量是一个简单值的标识符，在程序运行时，不会被修改的量。</p>
<p>常量中的数据类型只可以是布尔型、数字型（整数型、浮点型和复数）和字符串型。</p>
<p>常量的定义格式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const identifier [type] = value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以省略类型说明符 [type]，因为编译器可以根据变量的值来推断其类型。</p>
<ul>
<li>显式类型定义： <code v-pre>const b string = &quot;abc&quot;</code></li>
<li>隐式类型定义： <code v-pre>const b = &quot;abc&quot;</code></li>
</ul>
<p>多个相同类型的声明可以简写为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const c_name1, c_name2 = value1, value2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下实例演示了常量的应用：</p>
<p><strong>实例</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> LENGTH <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
  <span class="token keyword">const</span> WIDTH <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">5</span> 
  <span class="token keyword">var</span> area <span class="token builtin">int</span>
  <span class="token keyword">const</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"str"</span>      <span class="token comment">//多重赋值</span>

  area <span class="token operator">=</span> LENGTH <span class="token operator">*</span> WIDTH
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"面积为 : %d"</span><span class="token punctuation">,</span> area<span class="token punctuation">)</span>
  <span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>面积为 : 50
1 false str
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常量还可以用作枚举：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
    Unknown <span class="token operator">=</span> <span class="token number">0</span>
    Female <span class="token operator">=</span> <span class="token number">1</span>
    Male <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数字 0、1 和 2 分别代表未知性别、女性和男性。</p>
<p>常量可以用<code v-pre>len()</code>, <code v-pre>cap()</code>, <code v-pre>unsafe.Sizeof()</code>函数计算表达式的值。常量表达式中，函数必须是内置函数，否则编译不过：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"unsafe"</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
  a <span class="token operator">=</span> <span class="token string">"abc"</span>
  b <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  c <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>abc 3 16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="iota" tabindex="-1"><a class="header-anchor" href="#iota" aria-hidden="true">#</a> iota</h2>
<p><strong>iota，特殊常量，可以认为是一个可以被编译器修改的常量。</strong></p>
<p>iota 在 const关键字出现时将被重置为 <code v-pre>0</code>(const 内部的第一行之前)，const 中每新增一行常量声明将使 iota 计数一次 (iota 可理解为 const 语句块中的行索引)。</p>
<p>iota 可以被用作枚举值：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token boolean">iota</span>
    b <span class="token operator">=</span> <span class="token boolean">iota</span>
    c <span class="token operator">=</span> <span class="token boolean">iota</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个 iota 等于 0，每当 iota 在新的一行被使用时，它的值都会自动加 1；所以 a=0, b=1, c=2 可以简写为如下形式：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token boolean">iota</span>
    b
    c
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iota-用法" tabindex="-1"><a class="header-anchor" href="#iota-用法" aria-hidden="true">#</a> iota 用法</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span>  <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">(</span>
      a <span class="token operator">=</span> <span class="token boolean">iota</span>  <span class="token comment">//0</span>
      b         <span class="token comment">//1</span>
      c         <span class="token comment">//2</span>
      d <span class="token operator">=</span> <span class="token string">"ha"</span>  <span class="token comment">//独立值，iota += 1</span>
      e         <span class="token comment">//"ha"  iota += 1</span>
      f <span class="token operator">=</span> <span class="token number">100</span>   <span class="token comment">//iota +=1</span>
      g         <span class="token comment">//100  iota +=1</span>
      h <span class="token operator">=</span> <span class="token boolean">iota</span>  <span class="token comment">//7,恢复计数</span>
      i         <span class="token comment">//8</span>
  <span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">,</span>f<span class="token punctuation">,</span>g<span class="token punctuation">,</span>h<span class="token punctuation">,</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0 1 2 ha ha 100 100 7 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再看个有趣的的 iota 实例：</p>
<blockquote>
<p>Go语言的<code v-pre>iota</code>特性，如果你同时设置了两个<code v-pre>tota</code>，Go语言或许能发现其中的规律</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
  i<span class="token operator">=</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token boolean">iota</span>		<span class="token punctuation">;</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">0</span>
  j<span class="token operator">=</span><span class="token number">3</span><span class="token operator">&lt;&lt;</span><span class="token boolean">iota</span>		<span class="token punctuation">;</span><span class="token number">3</span><span class="token operator">&lt;&lt;</span><span class="token number">1</span>
  k		
  l
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"i="</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"j="</span><span class="token punctuation">,</span>j<span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"k="</span><span class="token punctuation">,</span>k<span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"l="</span><span class="token punctuation">,</span>l<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>i= 1
j= 6
k= 12
l= 24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>iota 表示从 0 开始自动加 1，所以 <strong>i=1&lt;&lt;0</strong>, <strong>j=3&lt;&lt;1</strong>（<strong>&lt;&lt;</strong> 表示左移的意思），即：i=1, j=6，这没问题，关键在 k 和 l，从输出结果看 <strong>k=3&lt;&lt;2</strong>，<strong>l=3&lt;&lt;3</strong>。</p>
<p>简单表述:</p>
<ul>
<li><strong>i=1</strong>：左移 0 位，不变仍为 1。</li>
<li><strong>j=3</strong>：左移 1 位，变为二进制 <strong>110</strong>，即 6。</li>
<li><strong>k=3</strong>：左移 2 位，变为二进制 <strong>1100</strong>，即 12。</li>
<li><strong>l=3</strong>：左移 3 位，变为二进制 <strong>11000</strong>，即 24。</li>
</ul>
<p>注：<strong>&lt;&lt;n==*(2^n)</strong>。</p>
<h3 id="怎么看变量的数据类型" tabindex="-1"><a class="header-anchor" href="#怎么看变量的数据类型" aria-hidden="true">#</a> 怎么看变量的数据类型</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> <span class="token keyword">package</span> main
 
 <span class="token keyword">import</span> <span class="token string">"fmt"</span>
 <span class="token keyword">const</span> <span class="token punctuation">(</span>
     i <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token boolean">iota</span>
     j <span class="token operator">=</span> <span class="token number">3</span><span class="token operator">&lt;&lt;</span><span class="token boolean">iota</span>
     k
     l
 <span class="token punctuation">)</span>
 <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1000000</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>             
     
     <span class="token comment">//fmt.printf()可以用来格式化输出，可以使用%d,%c</span>
     fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"n的类型是："</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解析：</strong></p>
<p>iota 表示从 0 开始自动加 1，所以 <strong>i=1&lt;&lt;0</strong>, <strong>j=3&lt;&lt;1</strong>（<strong>&lt;&lt;</strong> 表示左移的意思），即：i=1, j=6，这没问题，关键在 k 和 l，从输出结果看 <strong>k=3&lt;&lt;2</strong>，<strong>l=3&lt;&lt;3</strong>。</p>
<p>简单表述:</p>
<ul>
<li><strong>i=1</strong>：左移 0 位，不变仍为 1。</li>
<li><strong>j=3</strong>：左移 1 位，变为二进制 <strong>110</strong>，即 6。</li>
<li><strong>k=3</strong>：左移 2 位，变为二进制 <strong>1100</strong>，即 12。</li>
<li><strong>l=3</strong>：左移 3 位，变为二进制 <strong>11000</strong>，即 24。</li>
</ul>
<p>注：<strong>&lt;&lt;n==*(2^n)</strong>。</p>
<p><strong>println:格式化输出类型</strong></p>
<blockquote>
<p>一个很常用的技巧，取两个数中间的数（a + b) / 2</p>
<p><strong>如果两个数相加再除以二：就会导致可能出现溢出</strong></p>
<p>所以可以选择<code v-pre>((b - a) &gt;&gt; 1) + a </code></p>
</blockquote>
<h3 id="使用包查看字节数" tabindex="-1"><a class="header-anchor" href="#使用包查看字节数" aria-hidden="true">#</a> 使用包查看字节数：</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"unsafe"</span>
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1000000</span>
    <span class="token keyword">var</span> m <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token keyword">var</span> u <span class="token builtin">int64</span> <span class="token operator">=</span> <span class="token number">999</span>
    <span class="token comment">//fmt.printf()可以用来格式化输出</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"n的类型是：\n"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"u的类型%T 占用的字节数%d"</span><span class="token punctuation">,</span>u<span class="token punctuation">,</span>unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                                
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
<span class="token punctuation">}</span>                                                            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：Golang程序中整型变量在使用中，遵守保小不保大原则，即：<strong>在程序正确运行下，尽量使用占用空间小的数据类型</strong></p>
<ul>
<li>比如年龄使用byte:范围在0~255</li>
</ul>
<h3 id="小数类型" tabindex="-1"><a class="header-anchor" href="#小数类型" aria-hidden="true">#</a> 小数类型</h3>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">字节</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">单精度 float32</td>
<td style="text-align:center">4</td>
</tr>
<tr>
<td style="text-align:center">双精度 float64</td>
<td style="text-align:center">8</td>
</tr>
</tbody>
</table>
<p>很简单，不举例</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>float64精度要更高，同时Golang没有double类型，注意</p>
<p>默认声明为：<strong>float64</strong></p>
</div>
<h3 id="字符类型" tabindex="-1"><a class="header-anchor" href="#字符类型" aria-hidden="true">#</a> 字符类型</h3>
<p>Golang里面没有专门的字符类型，如果要存储单个字符或者字母，一般使用<code v-pre>byte</code>来保存。</p>
<h3 id="布尔类型" tabindex="-1"><a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a> 布尔类型</h3>
<p>布尔类型在很多语言都很常见，在Go语言中bool类型只能是<strong>true和false</strong></p>
<ol>
<li>布尔类型占用1个字节</li>
<li>布尔类型适用于逻辑运算，一般使用为流程控制</li>
</ol>
<h3 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a> 字符串类型</h3>
<p><strong>字符串就是一串固定长度的字符连接起来的字符序列，go语言的字符串是由单个字节连接起来的。</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> address <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"我爱中国 110 hello china"</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>我爱中国110 hellochina
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>❤️ 注意：</p>
<ol>
<li>
<p>字符串一旦赋值，就不可以修改，在Golang中字符串是不可变的</p>
</li>
<li>
<p>字符串的表示形式有两种，双引号和<strong>反引号（以字符串原生形式输出，包括换行和特殊字符，可以防止攻击，输出源代码）</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> <span class="token keyword">package</span> main

 <span class="token keyword">import</span><span class="token punctuation">(</span>
     <span class="token string">"fmt"</span>
 <span class="token punctuation">)</span>

 <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">var</span> address <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"我爱中国 110 hello china"</span>
     str2 <span class="token operator">:=</span> <span class="token string">`
     asdfas:""""""""                                      
     sadfasdf\\\n
     asdf
     `</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span>
     fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%S"</span><span class="token punctuation">,</span>str2<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译：</p>
<p><img src="@source/go-advancend/markdown/images/image-20220918210647708.pngmail3293172751@qq.png" alt="image-20220918210647708"></p>
</li>
</ol>
<h2 id="基本数据类型的相互转换" tabindex="-1"><a class="header-anchor" href="#基本数据类型的相互转换" aria-hidden="true">#</a> 基本数据类型的相互转换</h2>
<p>Golang和C/Java不同，Golang在不同数据类型之间赋值需要显示转化，也就是说Golang中数据类型不能==自动转化==。</p>
<p>Golang的类型转化类似于python</p>
<ol>
<li>
<p>数据类型的转化可以是从小到大，也可以是从大到小</p>
</li>
<li>
<p>被转化的是变量存储的数据，<strong>==变量本身的数据并没有变化==</strong></p>
</li>
<li>
<p>可以将int64转化为int8，编译时不会出错，只是转化的结果<strong>按溢出处理</strong></p>
<ul>
<li>int8存储的数值范围[-127,+128]</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> a <span class="token builtin">int64</span> <span class="token operator">=</span> <span class="token number">999999</span>
<span class="token keyword">var</span> b <span class="token builtin">int8</span> <span class="token operator">=</span> <span class="token function">int8</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>    <span class="token comment">//将a的值转化为int8，此时无法存储，会溢出处理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意❤️ ：溢出处理的值是不确定的</strong></p>
</li>
</ol>
<h2 id="基本数据类型转string" tabindex="-1"><a class="header-anchor" href="#基本数据类型转string" aria-hidden="true">#</a> 基本数据类型转string</h2>
<p><em><strong>在开发中，我们经常需要将基本数据类型转化为string类型，或者将string类型转化为基本数据类型</strong></em></p>
<h3 id="方法一-格式化字符串" tabindex="-1"><a class="header-anchor" href="#方法一-格式化字符串" aria-hidden="true">#</a> 方法一：格式化字符串</h3>
<p>Go 语言中使用 <strong>fmt.Sprintf</strong> 格式化字符串并赋值给新串：</p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// %d 表示整型数字，%s 表示字符串*</span>
  <span class="token keyword">var</span> stockcode<span class="token operator">=</span><span class="token number">123</span>
  <span class="token keyword">var</span> enddate<span class="token operator">=</span><span class="token string">"2020-12-31"</span>
  <span class="token keyword">var</span> url<span class="token operator">=</span><span class="token string">"Code=%d&amp;endDate=%s"</span>
  <span class="token keyword">var</span> target_url<span class="token operator">=</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>stockcode<span class="token punctuation">,</span>enddate<span class="token punctuation">)</span>  <span class="token comment">//格式化字符串</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>target_url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Code=123&amp;endDate=2020-12-31
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在官方文档中：sprintf根据format参数生成格式化的字符串并返回该字符串</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Sprintf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>使用func <a href="https://github.com/golang/go/blob/master/src/strconv/itoa.go?name=release#24" target="_blank" rel="noopener noreferrer">Itoa<ExternalLinkIcon/></a>将int类型转化为string类型</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Itoa</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Itoa是FormatInt(i, 10) 的简写。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//演示</span>
<span class="token keyword">var</span> num <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">457</span>
str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">Ita</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment">//将num的值转化为string</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"str type %T str = %q\n"</span><span class="token punctuation">,</span>str<span class="token punctuation">,</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码实现：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main                                                         
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token boolean">_</span><span class="token string">"unsafe"</span>  <span class="token comment">//包含头文件</span>
 <span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//基本数据类型转化为string类型</span>

    <span class="token keyword">var</span> num1 <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">99</span>
    <span class="token keyword">var</span> num2 <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">23.4325</span>
    <span class="token keyword">var</span> b <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">var</span> myChar <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token char">'h'</span>
    <span class="token keyword">var</span> str <span class="token builtin">string</span>    <span class="token comment">//定义一个空的字符串str</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token comment">//使用sprintf方法来转化</span>
    str <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span>num1<span class="token punctuation">)</span>  <span class="token comment">//将Num1转化为string返回给str</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"str type %T str=%v\n"</span><span class="token punctuation">,</span>str<span class="token punctuation">,</span>str<span class="token punctuation">)</span>

    str <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%f"</span><span class="token punctuation">,</span>num2<span class="token punctuation">)</span>  <span class="token comment">//将Num1转化为string返回给str</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"str type %T str=%v\n"</span><span class="token punctuation">,</span>str<span class="token punctuation">,</span>str<span class="token punctuation">)</span>
    
    str <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%t"</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span>  <span class="token comment">//将Num1转化为string返回给str</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"str type %T str=%v\n"</span><span class="token punctuation">,</span>str<span class="token punctuation">,</span>str<span class="token punctuation">)</span>
    
    str <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%c"</span><span class="token punctuation">,</span>myChar<span class="token punctuation">)</span>  <span class="token comment">//将Num1转化为string返回给str</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"str type %T str=%v\n"</span><span class="token punctuation">,</span>str<span class="token punctuation">,</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
                    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译：</p>
<p><img src="@source/go-advancend/markdown/images/4uXdVq7DvB2E6rm.png" alt="image-20220105161735693"></p>
<h3 id="方法二-使用strconv包的函数" tabindex="-1"><a class="header-anchor" href="#方法二-使用strconv包的函数" aria-hidden="true">#</a> 方法二：使用strconv包的函数</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">"strconv"</span>   <span class="token comment">//引入包</span>
<span class="token operator">...</span>
<span class="token operator">...</span>
str <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatInt</span><span class="token punctuation">(</span><span class="token function">int64</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"str type %T str=%q\n"</span><span class="token punctuation">,</span>str<span class="token punctuation">,</span>str<span class="token punctuation">)</span>
<span class="token comment">//其余的一样的方法，由此可见 ，和python方法类似</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string类型转化为基本数据类型" tabindex="-1"><a class="header-anchor" href="#string类型转化为基本数据类型" aria-hidden="true">#</a> string类型转化为基本数据类型</h2>
<h3 id="使用strconv包的函数" tabindex="-1"><a class="header-anchor" href="#使用strconv包的函数" aria-hidden="true">#</a> 使用strconv包的函数</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"strconv"</span>
    <span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">var</span> str <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"ture"</span>
 <span class="token keyword">var</span> b <span class="token builtin">bool</span>
 b<span class="token punctuation">,</span><span class="token boolean">_</span><span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseBool</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>                                             
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"b type %T b=%v"</span><span class="token punctuation">,</span>b<span class="token punctuation">,</span>b<span class="token punctuation">)</span>
 <span class="token comment">//将str2转化为int类型</span>
    <span class="token keyword">var</span> str2 <span class="token builtin">string</span> <span class="token operator">=</span><span class="token string">"123141234"</span>
    <span class="token keyword">var</span> n1 <span class="token builtin">int64</span>
    n1<span class="token punctuation">,</span><span class="token boolean">_</span> <span class="token operator">=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span>          <span class="token comment">//转化为十进制，</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"n1 type %T,n1=%v"</span><span class="token punctuation">,</span>n1<span class="token punctuation">,</span>n1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>                                                                        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@mail golang]# go run a.go 
b type bool b=falsen1 type int64,n1=123141234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<p><strong>在基本数据类型和string相互转化中，要确保string类型能转化为有效的数据，比如说转化为bool,如果不是false或者是true，Golang会转化为默认值false。</strong></p>
<h2 id="补充-go语言的fmt包-参考官网文档" tabindex="-1"><a class="header-anchor" href="#补充-go语言的fmt包-参考官网文档" aria-hidden="true">#</a> 补充：Go语言的fmt包（参考官网文档）</h2>
<h3 id="package-fmt" tabindex="-1"><a class="header-anchor" href="#package-fmt" aria-hidden="true">#</a> package fmt</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import "fmt"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>mt包实现了类似C语言printf和scanf的格式化I/O</strong>。格式化动作（'verb'）源自C语言但更简单。</p>
<h4 id="printing" tabindex="-1"><a class="header-anchor" href="#printing" aria-hidden="true">#</a> Printing</h4>
<p>通用：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%v	值的默认格式表示
%+v	类似%v，但输出结构体时会添加字段名
%#v	值的Go语法表示
%T	值的类型的Go语法表示
%%	百分号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>布尔值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%t	单词true或false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>整数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%b	表示为二进制
%c	该值对应的unicode码值
%d	表示为十进制
%o	表示为八进制
%q	该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示
%x	表示为十六进制，使用a-f
%X	表示为十六进制，使用A-F
%U	表示为Unicode格式：U+1234，等价于"U+%04X"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浮点数与复数的两个组分：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%b	无小数部分、二进制指数的科学计数法，如-123456p-78；参见strconv.FormatFloat
%e	科学计数法，如-1234.456e+78
%E	科学计数法，如-1234.456E+78
%f	有小数部分但无指数部分，如123.456
%F	等价于%f
%g	根据实际情况采用%e或%f格式（以获得更简洁、准确的输出）
%G	根据实际情况采用%E或%F格式（以获得更简洁、准确的输出）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串和[]byte：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%s	直接输出字符串或者[]byte
%q	该值对应的双引号括起来的go语法字符串字面值，必要时会采用安全的转义表示
%x	每个字节用两字符十六进制数表示（使用a-f）
%X	每个字节用两字符十六进制数表示（使用A-F）    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指针：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%p	表示为十六进制，并加上前导的0x    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没有%u。整数如果是无符号类型自然输出也是无符号的。类似的，也没有必要指定操作数的尺寸（int8，int64）。</p>
<p>宽度通过一个紧跟在百分号后面的十进制数指定，如果未指定宽度，则表示值时除必需之外不作填充。精度通过（可选的）宽度后跟点号后跟的十进制数指定。如果未指定精度，会使用默认精度；如果点号后没有跟数字，表示精度为0。举例如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%f:    默认宽度，默认精度
%9f    宽度9，默认精度
%.2f   默认宽度，精度2
%9.2f  宽度9，精度2
%9.f   宽度9，精度0    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>宽度和精度格式化控制的是Unicode码值的数量（不同于C的printf，它的这两个因数指的是字节的数量）。两者任一个或两个都可以使用'<em>'号取代，此时它们的值将被对应的参数（按'</em>'号和verb出现的顺序，即控制其值的参数会出现在要表示的值前面）控制，这个操作数必须是int类型。</p>
<p>对于大多数类型的值，宽度是输出字符数目的最小数量，如果必要会用空格填充。对于字符串，精度是输出字符数目的最大数量，如果必要会截断字符串。</p>
<p>对于整数，宽度和精度都设置输出总长度。采用精度时表示右对齐并用0填充，而宽度默认表示用空格填充。</p>
<p>对于浮点数，宽度设置输出总长度；精度设置小数部分长度（如果有的话），除了%g和%G，此时精度设置总的数字个数。例如，对数字123.45，格式%6.2f 输出123.45；格式%.4g输出123.5。%e和%f的默认精度是6，%g的默认精度是可以将该值区分出来需要的最小数字个数。</p>
<p>对复数，宽度和精度会分别用于实部和虚部，结果用小括号包裹。因此%f用于1.2+3.4i输出(1.200000+3.400000i)。</p>
<p>其它flag：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>'+'	总是输出数值的正负号；对%q（%+q）会生成全部是ASCII字符的输出（通过转义）；
' '	对数值，正数前加空格而负数前加负号；
'-'	在输出右边填充空白而不是默认的左边（即从默认的右对齐切换为左对齐）；
'#'	切换格式：
  	八进制数前加0（%#o），十六进制数前加0x（%#x）或0X（%#X），指针去掉前面的0x（%#p）；
 	对%q（%#q），如果strconv.CanBackquote返回真会输出反引号括起来的未转义字符串；
 	对%U（%#U），输出Unicode格式后，如字符可打印，还会输出空格和单引号括起来的go字面值；
  	对字符串采用%x或%X时（% x或% X）会给各打印的字节之间加空格；
'0'	使用0而不是空格填充，对于数值类型会把填充的0放在正负号后面；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>verb会忽略不支持的flag。例如，因为没有十进制切换模式，所以%#d和%d的输出是相同的。</p>
<p>对每一个类似Printf的函数，都有对应的Print型函数，该函数不接受格式字符串，就效果上等价于对每一个参数都是用verb %v。另一个变体Println型函数会在各个操作数的输出之间加空格并在最后换行。</p>
<p>不管verb如何，如果操作数是一个接口值，那么会使用接口内部保管的值，而不是接口，因此：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var i interface{} = 23
fmt.Printf("%v\n", i)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>会输出23。</p>
<p>除了verb %T和%p之外；对实现了特定接口的操作数会考虑采用特殊的格式化技巧。按应用优先级如下：</p>
<ol>
<li>
<p>如果操作数实现了Formatter接口，会调用该接口的方法。Formatter提供了格式化的控制。</p>
</li>
<li>
<p>如果verb %v配合flag #使用（%#v），且操作数实现了GoStringer接口，会调用该接口。</p>
</li>
</ol>
<p>如果操作数满足如下两条任一条，对于%s、%q、%v、%x、%X五个verb，将考虑：</p>
<ol start="3">
<li>
<p>如果操作数实现了error接口，Error方法会用来生成字符串，随后将按给出的flag（如果有）和verb格式化。</p>
</li>
<li>
<p>如果操作数具有String方法，这个方法将被用来生成字符串，然后将按给出的flag（如果有）和verb格式化。</p>
</li>
</ol>
<p>复合类型的操作数，如切片和结构体，格式化动作verb递归地应用于其每一个成员，而不是作为整体一个操作数使用。因此%q会将[]string的每一个成员括起来，%6.2f会控制浮点数组的每一个元素的格式化。</p>
<p>为了避免可能出现的无穷递归，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type X string
func (x X) String() string { return Sprintf("&lt;%s>", x) }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>应在递归之前转换值的类型：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (x X) String() string { return Sprintf("&lt;%s>", string(x)) }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显式指定参数索引：</p>
<p><strong>在Printf、Sprintf、Fprintf三个函数中，默认的行为是对每一个格式化verb依次对应调用时成功传递进来的参数</strong>。但是，紧跟在verb之前的[n]符号表示应格式化第n个参数（索引从1开始）。同样的在'*'之前的[n]符号表示采用第n个参数的值作为宽度或精度。在处理完方括号表达式[n]后，除非另有指示，会接着处理参数n+1，n+2……（就是说移动了当前处理位置）。例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fmt.Sprintf("%[2]d %[1]d\n", 11, 22)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会生成&quot;22 11&quot;，而：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fmt.Sprintf("%[3]*.[2]*[1]f", 12.0, 2, 6),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等价于：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fmt.Sprintf("%6.2f", 12.0),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会生成&quot; 12.00&quot;。因为显式的索引会影响随后的verb，这种符号可以通过重设索引用于多次打印同一个值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fmt.Sprintf("%d %d %#[1]x %#x", 16, 17)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会生成&quot;16 17 0x10 0x11&quot;</p>
<p>格式化错误：</p>
<p>如果给某个verb提供了非法的参数，如给%d提供了一个字符串，生成的字符串会包含该问题的描述，如下所例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>错误的类型或未知的verb：%!verb(type=value)
	Printf("%d", hi):          %!d(string=hi)
太多参数（采用索引时会失效）：%!(EXTRA type=value)
	Printf("hi", "guys"):      hi%!(EXTRA string=guys)
太少参数: %!verb(MISSING)
	Printf("hi%d"):            hi %!d(MISSING)
宽度/精度不是整数值：%!(BADWIDTH) or %!(BADPREC)
	Printf("%*s", 4.5, "hi"):  %!(BADWIDTH)hi
	Printf("%.*s", 4.5, "hi"): %!(BADPREC)hi
没有索引指向的参数：%!(BADINDEX)
	Printf("%*[2]d", 7):       %!d(BADINDEX)
	Printf("%.[2]d", 7):       %!d(BADINDEX)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有的错误都以字符串&quot;%!&quot;开始，有时会后跟单个字符（verb标识符），并以加小括弧的描述结束。</p>
<p>如果被print系列函数调用时，Error或String方法触发了panic，fmt包会根据panic重建错误信息，用一个字符串说明该panic经过了fmt包。例如，一个String方法调用了panic(&quot;bad&quot;)，生成的格式化信息差不多是这样的：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%!s(PANIC=bad)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>%!s指示表示错误（panic）出现时的使用的verb。</p>
<h4 id="scanning" tabindex="-1"><a class="header-anchor" href="#scanning" aria-hidden="true">#</a> Scanning</h4>
<p>一系列类似的函数可以扫描格式化文本以生成值。</p>
<p>Scan、Scanf和Scanln从标准输入os.Stdin读取文本；Fscan、Fscanf、Fscanln从指定的io.Reader接口读取文本；Sscan、Sscanf、Sscanln从一个参数字符串读取文本。</p>
<p>Scanln、Fscanln、Sscanln会在读取到换行时停止，并要求一次提供一行所有条目；Scanf、Fscanf、Sscanf只有在格式化文本末端有换行时会读取到换行为止；其他函数会将换行视为空白。</p>
<p>Scanf、Fscanf、Sscanf会根据格式字符串解析参数，类似Printf。例如%x会读取一个十六进制的整数，%v会按对应值的默认格式读取。格式规则类似Printf，有如下区别：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%p 未实现
%T 未实现
%e %E %f %F %g %G 效果相同，用于读取浮点数或复数类型
%s %v 用在字符串时会读取空白分隔的一个片段
flag '#'和'+' 未实现   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在无格式化verb或verb %v下扫描整数时会接受常用的进制设置前缀0（八进制）和0x（十六进制）。</p>
<p>宽度会在输入文本中被使用（%5s表示最多读取5个rune来生成一个字符串），但没有使用精度的语法（没有%5.2f，只有%5f）。</p>
<p>当使用格式字符串进行扫描时，多个连续的空白字符（除了换行符）在输出和输出中都被等价于一个空白符。在此前提下，格式字符串中的文本必须匹配输入的文本；如果不匹配扫描会中止，函数的整数返回值说明已经扫描并填写的参数个数。</p>
<p>在所有的扫描函数里，\r\n都被视为\n。</p>
<p>在所有的扫描函数里，如果一个操作数实现了Scan方法（或者说，它实现了Scanner接口），将会使用该接口为该操作数扫描文本。另外，如果如果扫描到（准备填写）的参数比提供的参数个数少，会返回一个错误。</p>
<p>提供的所有参数必须为指针或者实现了Scanner接口。注意：Fscan等函数可能会在返回前多读取一个rune，这导致多次调用这些函数时可能会跳过部分输入。只有在输入里各值之间没有空白时，会出现问题。如果提供给Fscan等函数的io.Reader接口实现了ReadRune方法，将使用该方法读取字符。如果该io.Reader接口还实现了UnreadRune方法，将是使用该方法保存字符，这样可以使成功执行的Fscan等函数不会丢失数据。如果要给一个没有这两个方法的io.Reader接口提供这两个方法，使用bufio.NewReader。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<div><a href = '1.md' style='float:left'>⬆️上一节🔗</a><a href = '3.md' style='float: right'>⬇️下一节🔗</a></div>
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


