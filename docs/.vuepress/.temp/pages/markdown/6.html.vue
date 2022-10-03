<template><div><h1 id="go语言的的函数、闭包-错误处理" tabindex="-1"><a class="header-anchor" href="#go语言的的函数、闭包-错误处理" aria-hidden="true">#</a> Go语言的的函数、闭包，错误处理</h1>
<nav class="table-of-contents"><ul><li><router-link to="#匿名函数">匿名函数</router-link><ul><li><router-link to="#一次性匿名函数">一次性匿名函数</router-link></li><li><router-link to="#给变量调用">给变量调用</router-link></li><li><router-link to="#全局匿名函数">全局匿名函数</router-link></li><li><router-link to="#匿名总结实战">匿名总结实战</router-link></li></ul></li><li><router-link to="#闭包">闭包</router-link><ul><li><router-link to="#闭包的说明">闭包的说明</router-link></li></ul></li><li><router-link to="#函数defer">函数defer</router-link></li><li><router-link to="#字符串常用的系统函数">字符串常用的系统函数</router-link></li><li><router-link to="#日期和时间相关函数">日期和时间相关函数</router-link><ul><li><router-link to="#时间常量">时间常量</router-link></li><li><router-link to="#结合sleep来使用时间常量">结合sleep来使用时间常量</router-link></li><li><router-link to="#unix时间戳和unixnano时间戳">unix时间戳和unixnano时间戳</router-link></li><li><router-link to="#用法">用法</router-link></li><li><router-link to="#统计代码执行时间">统计代码执行时间</router-link></li></ul></li><li><router-link to="#golang内置函数">Golang内置函数</router-link></li><li><router-link to="#golang错误处理机制">Golang错误处理机制</router-link><ul><li><router-link to="#自定义错误">自定义错误</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<h2 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h2>
<blockquote>
<p>补充第五天对函数结尾</p>
</blockquote>
<p><strong>匿名函数望文生意，就是没有名字的函数，如果我们希望某个函数只使用一次，那么可以使用匿名函数，但也可以多次使用</strong></p>
<h3 id="一次性匿名函数" tabindex="-1"><a class="header-anchor" href="#一次性匿名函数" aria-hidden="true">#</a> 一次性匿名函数</h3>
<p><strong>在定义匿名函数的时候就调用，此时匿名函数就只能使用一次</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>fun <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//定义即调用</span>
    <span class="token keyword">func</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span>n2 <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> n1 <span class="token operator">+</span> n2
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>
	<span class="token comment">//此时在定义的时候同时调用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="给变量调用" tabindex="-1"><a class="header-anchor" href="#给变量调用" aria-hidden="true">#</a> 给变量调用</h3>
<p><strong>这种方式的匿名函数可以多次调用，之前我们说过函数也是一种数据类型，那么将这个函数直接定义一个变量然后赋值</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>fun <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//定义即调用</span>
    a <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span>n2 <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> n1 <span class="token operator">-</span> n2
    <span class="token punctuation">}</span>
	<span class="token comment">//此时在定义的时候同时调用</span>
    res <span class="token operator">:=</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"res="</span>res<span class="token punctuation">)</span>
    res2 <span class="token operator">:=</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"res3="</span><span class="token punctuation">,</span>res3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>res= 10
res3= -10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局匿名函数" tabindex="-1"><a class="header-anchor" href="#全局匿名函数" aria-hidden="true">#</a> 全局匿名函数</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span><span class="token punctuation">(</span>
	Fun1 <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span>n2 <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> n1 <span class="token operator">*</span> n2
		<span class="token punctuation">}</span>
	<span class="token punctuation">)</span>          <span class="token comment">//定义全局匿名函数'F'要大写</span>

<span class="token comment">//调用</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token function">Fun1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"a="</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a=1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="匿名总结实战" tabindex="-1"><a class="header-anchor" href="#匿名总结实战" aria-hidden="true">#</a> 匿名总结实战</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token comment">//全局匿名函数</span>
<span class="token keyword">var</span><span class="token punctuation">(</span>
  t <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b 
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token keyword">var</span> t3 <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b 
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span>
  a <span class="token operator">:=</span> <span class="token number">1</span>
  b <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">^</span>a<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">//取反</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"*t = "</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span> <span class="token comment">//这个地方是它的地址</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"func t = "</span><span class="token punctuation">,</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"func t3= "</span><span class="token punctuation">,</span>t3<span class="token punctuation">)</span>
  
  <span class="token comment">//一次性匿名</span>
  t2 <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b 
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">312</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"func t2 = "</span><span class="token punctuation">,</span>t2<span class="token punctuation">)</span>

  <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b 
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">312</span><span class="token punctuation">)</span>
  
  <span class="token comment">//多次使用的匿名</span>
  t5<span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b 
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"func t5 = "</span><span class="token punctuation">,</span><span class="token function">t5</span><span class="token punctuation">(</span><span class="token number">234</span><span class="token punctuation">,</span><span class="token number">123421</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/image-20221003140115396.png" alt="image-20221003140115396"></p>
<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2>
<p><strong>闭包就是一个函数与相关的引用环境组成的一个整体（实体）</strong></p>
<p>Go 语言支持匿名函数，可作为闭包。匿名函数是一个&quot;内联&quot;语句或表达式。匿名函数的优越性在于可以直接使用函数内的变量，不必申明。</p>
<blockquote>
<p>以下实例中，我们创建了函数 <code v-pre>getSequence()</code> ，返回另外一个函数。该函数的目的是在闭包中递增 i 变量。</p>
</blockquote>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">getSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    i<span class="token operator">:=</span><span class="token number">0</span>               <span class="token comment">//func()是一个匿名函数</span>
    <span class="token comment">//getSequence()是一个函数，返回的数据类型是func()int</span>
   <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
     i<span class="token operator">+=</span><span class="token number">1</span> 
     <span class="token keyword">return</span> i 
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token comment">/* nextNumber 为一个函数，函数 i 为 0 */</span>
   nextNumber <span class="token operator">:=</span> <span class="token function">getSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//将函数给变量Nex,相当于匿名函数</span>

   <span class="token comment">/* 调用 nextNumber 函数，i 变量自增 1 并返回 */</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">nextNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">nextNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">nextNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

   <span class="token comment">/* 创建新的函数 nextNumber1，并查看结果 */</span>
   nextNumber1 <span class="token operator">:=</span> <span class="token function">getSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">nextNumber1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">nextNumber1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上代码执行结果为：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1
2
3
1
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="闭包的说明" tabindex="-1"><a class="header-anchor" href="#闭包的说明" aria-hidden="true">#</a> 闭包的说明</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>   <span class="token comment">//getSequence()是一个函数，返回的数据类型是func()int</span>
	i<span class="token operator">:=</span><span class="token number">0</span>               <span class="token comment">//func()是一个匿名函数</span>
	 
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
     i<span class="token operator">+=</span><span class="token number">1</span> 
     <span class="token keyword">return</span> i  
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回的是一个匿名函数，同时这个匿名函数引用到函数外的i，因此这个匿名函数和i形成一个整体，构成 闭包</strong></p>
<blockquote>
<p>可以这样理解：闭包是一个类class，而i是字段，函数是一个操作，而函数和这个i构成闭包</p>
</blockquote>
<p><strong>当我们反复的调用f函数，因为i只是初始化一次，因此每调用此一次就累加一次</strong></p>
<p><strong>关键：就是返回的函数引用到哪些变量，函数与哪些变量构成闭包</strong></p>
<p>💡简单的一个案例如下：</p>
<p><img src="@source/markdown/images/4lTbFmDxeBMI8E9.png" alt="image-20220109141602331"></p>
<h2 id="函数defer" tabindex="-1"><a class="header-anchor" href="#函数defer" aria-hidden="true">#</a> 函数defer</h2>
<p><strong>在函数中，通常选用创建资源（比如：数据库连接，文件等），为了在函数执行完毕后，即使的释放资源，Go提供了defer（延时机制）</strong> — <code v-pre>栈</code></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">{</span>
	<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"ok1 n1="</span><span class="token punctuation">,</span>n1<span class="token punctuation">)</span>		<span class="token comment">//1</span>
	<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"ok1 n2="</span><span class="token punctuation">,</span>n2<span class="token punctuation">)</span>		<span class="token comment">//2</span>
	res <span class="token operator">:=</span> n1 <span class="token operator">+</span> n2 
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"ok1 res="</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span>			<span class="token comment">//3</span>
	<span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	res <span class="token operator">:=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"res="</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span>				<span class="token comment">//4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<p><img src="@source/markdown/images/image-20221002155239446.png" alt="image-20221002155239446"></p>
<p><strong>注意：</strong></p>
<ol>
<li>当执行到<code v-pre>defer</code>时候，系统会将<code v-pre>defer</code>语句压入到一个独立的栈中（<code v-pre>defer</code>栈），暂时不执行</li>
<li>当函数执行完毕后再从<code v-pre>defer</code>中按照<strong>先入后出</strong>的方式出栈，然后执行</li>
<li>函数中的<code v-pre>res</code> 最先执行，输出<code v-pre>30</code></li>
<li>最后执行<code v-pre>main</code>中的语句</li>
<li>在<code v-pre>defer</code>语句入栈的时候，也会将相关的值同时放入到栈</li>
</ol>
<blockquote>
<p>我大概认为就跟C++中的构造函数 和析构函数<code v-pre>~</code>类似</p>
</blockquote>
<p><strong>即defer作用是在函数执行完毕后，可以及时的释放函数创建的资源</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//文件操作</span>
<span class="token keyword">defer</span> file <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//数据库操作</span>
<span class="token keyword">defer</span> connect<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment">//connect是数据库的游标</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串常用的系统函数" tabindex="-1"><a class="header-anchor" href="#字符串常用的系统函数" aria-hidden="true">#</a> 字符串常用的系统函数</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> utils
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"strconv"</span>
	<span class="token string">"strings"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> str <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"学golang使我快乐！"</span>

<span class="token comment">// 关于string的常用函数</span>

<span class="token comment">// 1. len(str) 内建函数，返回字符串长度，按字节，1个汉字3字节，1字母1字节</span>
<span class="token comment">//这个函数是内建函数（和printf一样）  //只需要`fmt`包</span>
<span class="token keyword">func</span> <span class="token function">F1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. range []rune(str)  字符串遍历，处理中文问题 转成rune切片</span>
<span class="token keyword">func</span> <span class="token function">F2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>value <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%c \n"</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. string转整数 strconv.Atoi(str) 这个函数是 strconv.ParseInt(s string, base int, bitSize int) (i int64 err error)的简化版</span>
<span class="token keyword">func</span> <span class="token function">F3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	num<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">"666"</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"num type is %T,value is %v"</span><span class="token punctuation">,</span> num<span class="token punctuation">,</span> num<span class="token punctuation">)</span> 
    <span class="token comment">// num type is int,value is 666</span>

<span class="token punctuation">}</span>

<span class="token comment">// 4. 整数转string strconv.Itoa(666) 是strconv.FormatInt(i int64, base int) string的简化版</span>

<span class="token comment">// 5. string to []byte  b := []byte(str)</span>
<span class="token keyword">func</span> <span class="token function">F5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	 b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
	 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%T %v\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// type of b is []uint8</span>
<span class="token punctuation">}</span>

<span class="token comment">// 6. []byte to string   s := string([]byte{77,88,99})</span>
<span class="token keyword">func</span> <span class="token function">F6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	 s <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token number">77</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%T %v\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> s<span class="token punctuation">)</span> <span class="token comment">// string MXc</span>
<span class="token punctuation">}</span>

<span class="token comment">// 7. 十进制数转2 8 16进制字符串  strconv.FormatInt(i int64, base int) string  base->2,8,16</span>

<span class="token comment">// 8. 判断字符串s是否包含子串substr strings.Contains(s, substr string) bool</span>

<span class="token comment">// 9. 统计子串出现次数 strings.Count(s, sep string) int</span>
<span class="token keyword">func</span> <span class="token function">F9</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token string">"A man who helps you when you are in trouble and who leaves you when you are successful is a real friend."</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span><span class="token string">"you"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>

	s <span class="token operator">=</span> <span class="token string">"lv"</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>

<span class="token punctuation">}</span>

<span class="token comment">// 10. 判断连个字符串是否相等 str1 == str2 区分大小写， 不区分大小写方式strings.EqualFold(s, t string) bool</span>

<span class="token comment">// 11. 子串sep在字符串s中第一次/最后一次出现的位置，不存在则返回-1  Index(s, sep string) int/LastIndex(s, sep string) int</span>

<span class="token comment">// 12. 将n个old子串替换为new字符串，n&lt;0会替换所有old子串 strings.Replace(s, old, new string, n int) string</span>

<span class="token comment">// 13. 大小写转换 strings.ToUpper  /ToLower</span>

<span class="token comment">// 14. 按sep拆分字符串，返回一个slice  strings.Split(s, sep string) []string</span>

<span class="token comment">// 15. 将字符串slice以sep为分隔符组合成一个字符串 strings.Join(a []string, sep string) string</span>

<span class="token comment">// 16. Trim系列 Trim(s string, cutset string) string 去除左右两边指定字符串  TrimRight/TrimLeft</span>
<span class="token comment">// 	TrimSpace(s string) string 去除左右两边空白</span>
<span class="token comment">//  TrimPrefix(s, prefix string) string /TrimSuffix(s, suffix string) string 去除前/后缀</span>

<span class="token comment">// 17. 判断s是否有前缀/后缀字符串prefix   HasPrefix(s, prefix string) bool  / HasSuffix</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日期和时间相关函数" tabindex="-1"><a class="header-anchor" href="#日期和时间相关函数" aria-hidden="true">#</a> 日期和时间相关函数</h2>
<ol>
<li>
<p>时间和日期相关的函数需要导入time包<a href="https://pkg.go.dev/time@go1.17.6" target="_blank" rel="noopener noreferrer">https://pkg.go.dev/time@go1.17.6<ExternalLinkIcon/></a></p>
</li>
<li>
<p>time.Time 类型，用于表示时间</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Time</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"now=%v now type=%T"</span><span class="token punctuation">,</span>now<span class="token punctuation">,</span>now<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Year</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//获取到年</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">int</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Month</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//获取到月</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Day</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//获取到日</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//获取到时</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Minute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//获取到分</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">Second</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment">//获取到秒</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<p><img src="@source/markdown/images/SebIThU4GB3xXCH.png" alt="image-20220109151948003"></p>
</li>
</ol>
<h3 id="时间常量" tabindex="-1"><a class="header-anchor" href="#时间常量" aria-hidden="true">#</a> 时间常量</h3>
<p><strong>常量就是在程序中可用于获取指定时间单位的时间</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	Nanosecond  Duration <span class="token operator">=</span> <span class="token number">1</span>
	Microsecond          <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> Nanosecond
	Millisecond          <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> Microsecond
	Second               <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> Millisecond
	Minute               <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> Second
	Hour                 <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> Minute
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>比如想拿到100毫秒</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>100 * time.Millisecond
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>如果我们想要休眠一段时间，必须要使用到时间常量</strong></p>
<h3 id="结合sleep来使用时间常量" tabindex="-1"><a class="header-anchor" href="#结合sleep来使用时间常量" aria-hidden="true">#</a> 结合sleep来使用时间常量</h3>
<blockquote>
<p>需求：每隔一秒钟打印一个数字，打印到10时就退出</p>
<p>每隔0.1秒打印一个数字，打印5秒退出**（不可以使用<code v-pre>time.Second * 0.1</code>,编译不能通过，只能用<code v-pre>millisecond(毫秒) * 100</code>)**</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
i <span class="token operator">:=</span> <span class="token number">0</span>
j <span class="token operator">:=</span> <span class="token number">0</span>
 <span class="token keyword">for</span><span class="token punctuation">{</span>
     i<span class="token operator">++</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>  <span class="token comment">//打印</span>
     time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>   <span class="token comment">//休眠，每秒钟执行一次</span>
     <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">{</span>
         <span class="token keyword">break</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">{</span>
        j<span class="token operator">++</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">20</span><span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/kQdxJsaft5wM4nB.png" alt="image-20220109154141855"></p>
<h3 id="unix时间戳和unixnano时间戳" tabindex="-1"><a class="header-anchor" href="#unix时间戳和unixnano时间戳" aria-hidden="true">#</a> unix时间戳和unixnano时间戳</h3>
<p><strong>作用是：获取随机数字</strong></p>
<blockquote>
<p><strong>unix :获取秒数随机</strong></p>
<p><strong>unixnano:获取纳秒随即数</strong></p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>now = time.Now()
fmt.Printf("unix时间戳为=%v \n unixnano时间搓=%v",now.unix(),now.unixnano())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/nwSfaEKBhON96gD.png" alt="image-20220109160542484"></p>
<p>⚠️ func (Time) Unix</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (t Time) Unix() int64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unix returns t as a Unix time, the number of seconds elapsed since January 1, 1970 UTC. The result does not depend on the location associated with t. Unix-like operating systems often record time as a 32-bit count of seconds, but since the method here returns a 64-bit value it is valid for billions of years into the past or future.</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1 billion seconds of Unix, three ways.</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token number">1e9</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UTC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment">// 1e9 seconds</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1e18</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UTC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// 1e18 nanoseconds</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token number">2e9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1e18</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UTC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2e9 seconds - 1e18 nanoseconds</span>

    t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Date</span><span class="token punctuation">(</span><span class="token number">2001</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>September<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>UTC<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment">// seconds since 1970</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// nanoseconds since 1970</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3>
<p>⚠️func (Time) UnixMicro added in go1.17</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (t Time) UnixMicro() int64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>UnixMicro returns t as a Unix time, the number of microseconds elapsed since January 1, 1970 UTC. The result is undefined if the Unix time in microseconds cannot be represented by an int64 (a date before year -290307 or after year 294246). The result does not depend on the location associated with t.</p>
<p>⚠️func (Time) UnixMilli added in go1.17</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (t Time) UnixMilli() int64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>UnixMilli returns t as a Unix time, the number of milliseconds elapsed since January 1, 1970 UTC. The result is undefined if the Unix time in milliseconds cannot be represented by an int64 (a date more than 292 million years before or after 1970). The result does not depend on the location associated with t.</p>
<p>⚠️func (Time) UnixNano</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (t Time) UnixNano() int64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>UnixNano returns t as a Unix time, the number of nanoseconds elapsed since January 1, 1970 UTC. The result is undefined if the Unix time in nanoseconds cannot be represented by an int64 (a date before the year 1678 or after 2262). Note that this means the result of calling UnixNano on the zero Time is undefined. The result does not depend on the location associated with t.</p>
<h3 id="统计代码执行时间" tabindex="-1"><a class="header-anchor" href="#统计代码执行时间" aria-hidden="true">#</a> 统计代码执行时间</h3>
<blockquote>
<p>编写一个代码来统计函数<code v-pre>test</code>执行的时间</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"time"</span>
    <span class="token string">"strconv"</span>         <span class="token comment">//用来转换</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">""</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
        str <span class="token operator">+=</span> <span class="token string">"hello"</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"执行test消耗的时间为(s)："</span><span class="token punctuation">,</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：<img src="@source/markdown/images/image-20221003180746809.png" alt="image-20221003180746809"></p>
<h2 id="golang内置函数" tabindex="-1"><a class="header-anchor" href="#golang内置函数" aria-hidden="true">#</a> Golang内置函数</h2>
<p>Golang地址：https://pkg.go.dev/builtin@go1.17.6</p>
<p>⚠️ func new</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func new(Type) *Type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The new built-in function allocates memory. The first argument is a type, not a value, and the value returned is a pointer to a newly allocated zero value of that type.</p>
<blockquote>
<p><strong><code v-pre>new</code> 主要用来分配内存，主要是用来分配值类型,本身是一个地址，默认是存放<code v-pre>0</code>这个数据空间的地址,地址是由系统分配的</strong></p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	num1 <span class="token operator">:=</span> <span class="token number">100</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"num1的类型为:%T,\n num1的值为:%v,\n num1的地址为:%v\n"</span><span class="token punctuation">,</span>num1<span class="token punctuation">,</span>num1<span class="token punctuation">,</span><span class="token operator">&amp;</span>num1<span class="token punctuation">)</span>
    
    <span class="token keyword">var</span> num2 <span class="token operator">*</span><span class="token builtin">int</span>		<span class="token comment">//注意：使用new分配值类型需要是指针类型</span>
    num2 <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"num2的类型为:%T,\n num2的值为:%v,\n num2的地址为:%v\n"</span><span class="token punctuation">,</span>num2<span class="token punctuation">,</span>num2<span class="token punctuation">,</span><span class="token operator">&amp;</span>num2<span class="token punctuation">)</span>  	
    <span class="token comment">/*int类型值为指向空间的地址 本省的地址为指针的地址 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-4-6-centos c<span class="token punctuation">]</span><span class="token comment"># go run b.go </span>
 num1的类型为:int,
 num1的值为:100,
 num1的地址为:0xc0000a6000
 num2的类型为:*int,
 num2的值为:0xc0000a6008,
 num2的地址为:0xc0000a0020

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>怎么将num2的值取出？ -- <code v-pre>*</code>取地址的值</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"num2的值为:%v"</span><span class="token punctuation">,</span><span class="token operator">*</span>num2<span class="token punctuation">)</span>    
<span class="token comment">//num2的值为：0   </span>

<span class="token comment">//修改</span>
<span class="token operator">*</span>num2 <span class="token operator">=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<blockquote>
<p><strong>Go语言的mark和new区别：</strong></p>
<p>在go语言中，<code v-pre>make</code>和<code v-pre>new</code>都是内存的分配（堆上），但是<code v-pre>make</code>只用于<code v-pre>slice</code>、<code v-pre>map</code>以及<code v-pre>channel</code>的初始化（非零值）；而<code v-pre>new</code>用于类型的内存分配，并且内存置为零。<code v-pre>make</code>返回的是引用类型本身；而new返回的是指向类型的指针。</p>
</blockquote>
<h2 id="golang错误处理机制" tabindex="-1"><a class="header-anchor" href="#golang错误处理机制" aria-hidden="true">#</a> Golang错误处理机制</h2>
<p><strong>处理方式：<code v-pre>defer</code>，<code v-pre>panic</code>，<code v-pre>recover</code></strong>   ，<strong>让程序更加健壮</strong></p>
<p><strong>Go中可以抛出一个<code v-pre>panic</code>的异常，然后在<code v-pre>defer</code>中通过<code v-pre>recover</code>捕获这个异常，然后正常处理</strong></p>
<p>使用<code v-pre>defer</code>和<code v-pre>recover</code>来处理异常。</p>
<p>⚠️func panic</p>
<p><strong><code v-pre>panic</code>内置函数接受一个<code v-pre>interface{}</code>类型的值作为参数,可以接收<code v-pre>error</code>类型变量，输出错误信息，并退出程序</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func panic(v interface{})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p><strong>The panic built-in function stops normal execution of the current goroutine.</strong> When a function F calls panic, normal execution of F stops immediately. Any functions whose execution was deferred by F are run in the usual way, and then F returns to its caller. To the caller G, the invocation of F then behaves like a call to panic, terminating G's execution and running any deferred functions. This continues until all functions in the executing goroutine have stopped, in reverse order. At that point, the program is terminated with a non-zero exit code. This termination sequence is called panicking and can be controlled by the built-in function recover.</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*匿名函数*/</span> 
	err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//内置函数，可以捕获到异常</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> ni<span class="token punctuation">{</span><span class="token comment">//说明捕获到异常</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err="</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span> 
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"发送邮件给3293172751@qq,com"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>         		<span class="token comment">//这里可以将错误发送给管理员</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     	  		<span class="token comment">//匿名函数的调用</span>
num <span class="token operator">:=</span> <span class="token number">10</span><span class="token operator">/</span><span class="token number">0</span>         <span class="token comment">//错误代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义错误" tabindex="-1"><a class="header-anchor" href="#自定义错误" aria-hidden="true">#</a> 自定义错误</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>errors.New("错误类型")    //返回一个error类型的值，表示一个错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>函数读取<code v-pre>init.config</code>信息，如果文件名传入不正确，返回一个自定义错误</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
    <span class="token string">"errors"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">readConf</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span> name <span class="token operator">=</span> <span class="token string">"config.ini"</span><span class="token punctuation">{</span>
	<span class="token comment">//"读取"</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
	<span class="token comment">//返回一个自定义错误</span>
	<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"读取文件错误"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    err <span class="token operator">:=</span> <span class="token function">readConf</span><span class="token punctuation">(</span><span class="token string">"config.ini"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        <span class="token comment">//如果发生错误，就输出错误并且终止程序，此时使用panic</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//不发生错误</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"test02()继续执行..."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//测试</span>
    <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '5.md' style='float:left'>⬆️上一节🔗</a><a href = '7.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


