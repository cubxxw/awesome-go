<template><div><h1 id="函数、init函数和包" tabindex="-1"><a class="header-anchor" href="#函数、init函数和包" aria-hidden="true">#</a> 函数、init函数和包</h1>
<nav class="table-of-contents"><ul><li><router-link to="#函数">函数</router-link><ul><li><router-link to="#函数定义">函数定义</router-link></li><li><router-link to="#return语句">return语句</router-link></li><li><router-link to="#函数调用">函数调用</router-link></li><li><router-link to="#函数返回多个值">函数返回多个值</router-link></li><li><router-link to="#递归调用">递归调用</router-link></li><li><router-link to="#递归总结">递归总结:</router-link></li><li><router-link to="#函数调用的底层分析">函数调用的底层分析</router-link></li></ul></li><li><router-link to="#函数-包">函数 -- 包</router-link><ul><li><router-link to="#包示意图">包示意图</router-link></li><li><router-link to="#包的使用">包的使用</router-link></li></ul></li><li><router-link to="#函数值传递">函数值传递</router-link></li><li><router-link to="#函数引用传递">函数引用传递</router-link></li><li><router-link to="#在golang语言中不支持函数的重载">在Golang语言中不支持函数的重载</router-link><ul><li><router-link to="#函数作为实参">函数作为实参</router-link></li><li><router-link to="#go语言可以自定义数据类型">Go语言可以自定义数据类型</router-link></li><li><router-link to="#go语言支持对返回值命名">go语言支持对返回值命名</router-link></li><li><router-link to="#go-支持可变参数">GO 支持可变参数</router-link></li></ul></li><li><router-link to="#init函数">init函数</router-link><ul><li><router-link to="#init细节">init细节</router-link></li></ul></li><li><router-link to="#补充-python函数">补充:python函数</router-link><ul><li><router-link to="#定义函数">定义函数</router-link></li><li><router-link to="#不带参数值的-return-语句返回-none">不带参数值的 return 语句返回 None</router-link></li><li><router-link to="#python的变量使用">python的变量使用</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://golang.org/#" target="_blank" rel="noopener noreferrer">https://golang.org/#<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://nsddd.top" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<ul>
<li>
<p>函数是基本的代码块，用于执行一个任务。实现封装，使用调用。</p>
</li>
<li>
<p>Go 语言 <strong>最少有个 main() 函数。</strong></p>
</li>
<li>
<p>你可以通过函数来划分不同功能，逻辑上每个函数执行的是指定的任务。</p>
</li>
<li>
<p>函数声明告诉了编译器函数的名称，返回类型，和参数。</p>
</li>
<li>
<p>Go 语言标准库提供了多种可动用的内置的函数。</p>
</li>
</ul>
<blockquote>
<p><strong>例如：</strong></p>
<p>len() 函数可以接受不同类型参数并返回该类型的长度。如果我们传入的是字符串则返回字符串的长度，如果传入的是数组，则返回数组中包含的元素个数。</p>
</blockquote>
<p><strong>不一样的是：形参的话要先写函数名，再写类型</strong></p>
<h3 id="函数定义" tabindex="-1"><a class="header-anchor" href="#函数定义" aria-hidden="true">#</a> 函数定义</h3>
<p>Go 语言函数定义格式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">function_name</span><span class="token punctuation">(</span> <span class="token punctuation">[</span>parameter list<span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">[</span>return_types<span class="token punctuation">]</span> <span class="token punctuation">{</span>
   函数体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数定义解析" tabindex="-1"><a class="header-anchor" href="#函数定义解析" aria-hidden="true">#</a> 函数定义解析</h4>
<ul>
<li><code v-pre>func</code>：函数由 func 开始声明</li>
<li><code v-pre>function_name</code>：函数名称，参数列表和返回值类型构成了函数签名。</li>
<li><code v-pre>parameter list</code>：参数列表，参数就像一个占位符，当函数被调用时，你可以将值传递给参数，这个值被称为实际参数。参数列表指定的是参数类型、顺序、及参数个数。参数是可选的，也就是说函数也可以不包含参数。</li>
<li><strong><code v-pre>return_types</code>：返回类型，函数返回一列值。</strong> <code v-pre>return_types</code> 是该列值的数据类型。有些功能不需要返回值，这种情况下 <code v-pre>return_types</code> 不是必须的。<strong>可以有返回值，也可以没有</strong></li>
<li><strong>函数体：函数定义的代码集合。</strong></li>
</ul>
<h3 id="return语句" tabindex="-1"><a class="header-anchor" href="#return语句" aria-hidden="true">#</a> return语句</h3>
<ol>
<li>如果返回多个值时，在接受时，希望忽略某个返回值，则使用<code v-pre>_</code>表示忽略</li>
<li>如果返回值只有一个，返回值类型列表可以不写<code v-pre>()</code></li>
</ol>
<blockquote>
<p>以下实例为  max() 函数的代码，该函数传入两个整型参数 num1 和 num2，并返回这两个参数的最大值：</p>
</blockquote>
<p>🔦<strong>实例：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/* 函数返回两个数的最大值 */</span>
<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>    <span class="token comment">//也可以用（）括起来</span>
   <span class="token comment">/* 声明局部变量 */</span>
   <span class="token keyword">var</span> result <span class="token builtin">int</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span>num1 <span class="token operator">></span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> num1
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> num2
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数调用" tabindex="-1"><a class="header-anchor" href="#函数调用" aria-hidden="true">#</a> 函数调用</h3>
<p>当创建函数时，你定义了函数需要做什么，通过调用该函数来执行指定任务。</p>
<p><strong>调用函数，向函数传递参数，并返回值</strong>，例如：</p>
<p>🔦<strong>实例：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
   <span class="token keyword">var</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">200</span>
   <span class="token keyword">var</span> ret <span class="token builtin">int</span>

   <span class="token comment">/* 调用函数并返回最大值 */</span>
   ret <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span> <span class="token string">"最大值是 : %d\n"</span><span class="token punctuation">,</span> ret <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 函数返回两个数的最大值 */</span>
<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> result <span class="token builtin">int</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span>num1 <span class="token operator">></span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> num1
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> num2
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例在 main() 函数中调用 max（）函数，执行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>最大值是 : 200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="函数返回多个值" tabindex="-1"><a class="header-anchor" href="#函数返回多个值" aria-hidden="true">#</a> 函数返回多个值</h3>
<p><strong>Go 函数可以返回多个值，和python相似</strong>例如：</p>
<p>🔦<strong>实例：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">//两个返回值，此时一定要用（）括起来</span>
   <span class="token keyword">return</span> y<span class="token punctuation">,</span> x
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   a<span class="token punctuation">,</span> b <span class="token operator">:=</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token string">"Google"</span><span class="token punctuation">,</span> <span class="token string">"Runoob"</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//可以忽略返回值</span>
<span class="token comment">/*
func swap(x, y string) (string, string) {   //两个返回值，此时一定要用（）括起来
   return y, x
}
func main() {
   _, b := swap("Google", "Runoob")    //注意看细节
   fmt.Println(a, b)
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例执行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Runoob Google
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="递归调用" tabindex="-1"><a class="header-anchor" href="#递归调用" aria-hidden="true">#</a> 递归调用</h3>
<p><strong>函数调用本身,比较难</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> test <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> n <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">{</span>
        n<span class="token operator">--</span>
        <span class="token function">test</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"n="</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当调用test（4）</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>n = 2
n = 2
n = 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用python代码来理解这块代码：</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">def</span> <span class="token function">text</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">if</span> n <span class="token operator">></span><span class="token number">2</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>         n <span class="token operator">=</span> n<span class="token operator">-</span><span class="token number">1</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>         text<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"n="</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>

In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> text<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
n<span class="token operator">=</span> <span class="token number">2</span>
n<span class="token operator">=</span> <span class="token number">2</span>
n<span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<p>**栈是先入后出的，**使用底层图解来描述代码执行</p>
<p><img src="@source/markdown/images/Iqb2dJDfGC4m5Tk.png" alt="image-20220108153236127"></p>
<p>过程：</p>
<ol>
<li>
<p><strong>第一次递归调用的时候，后面的代码不执行，直接开始递归，开辟一个新的栈</strong></p>
</li>
<li>
<p>此时n为3也是对if语句成立，继续执行n-- ,n为2，而且有一次递归，开辟一个新的独立空间</p>
</li>
<li>
<p>此时n为2，if不成立,执行输出语句,输出n = 2,这个时候栈被回收,返回上一个栈</p>
</li>
<li>
<p>上一个栈最后调用的时候n也是2,且在if语句中,那么此时依然会输出下面语句,然后销毁,返回上一个栈</p>
</li>
<li>
<p>此时n保留了3,栈依旧回收返回main</p>
</li>
</ol>
<p><img src="@source/markdown/images/2eILEqVjRCrANpw.png" alt="image-20220108153657642"></p>
<p>整个过程:</p>
<p><img src="@source/markdown/images/hCxcue8OaoHD7tb.png" alt="image-20220108154449506"></p>
<p>再看一段代码:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> test2 <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> n <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">{</span>
        n<span class="token operator">--</span>
        <span class="token function">test2</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"n="</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">test2</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>n = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>经过上面的解释,这个结果就很容易理解了</p>
<p><strong>图解:</strong></p>
<p><img src="@source/markdown/images/bTodgscCJFYkriH.png" alt="image-20220108154811160"></p>
<h3 id="递归总结" tabindex="-1"><a class="header-anchor" href="#递归总结" aria-hidden="true">#</a> 递归总结:</h3>
<ol>
<li>执行一个函数的时候,就创建了一个受保护的独立空间(新函数栈)</li>
<li>函数的局部变量是独立的,不会相互影响</li>
<li>递归要有出口，否则无线递归</li>
<li>函数执行完毕或者遇见return会遵守谁调用,就将返回结果给谁,<strong>同时,当函数执行完毕时,或者返回时,该函数本身也会被系统销毁(栈先进后出)</strong></li>
</ol>
<p>🔦<strong>实例：</strong></p>
<blockquote>
<p>斐波拉数</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">fbn</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
   <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fbn</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fbn</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入一个数"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    a <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    i <span class="token operator">:=</span> <span class="token function">fbn</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"i = "</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数调用的底层分析" tabindex="-1"><a class="header-anchor" href="#函数调用的底层分析" aria-hidden="true">#</a> 函数调用的底层分析</h3>
<p><img src="@source/markdown/images/EdagPCp1TJs3xhD.png" alt="image-20220108145746844"></p>
<p><strong>分析：main函数对应的栈区和test是两个独立的空间，此时当main调用test的时候，test中的n1从10变换到十一。当执行完终端输出的时候，此时函数调用完成，此时根据<code v-pre>cpu</code>的交互，test栈区就会被关闭空间了，编译器回收空间</strong></p>
<p><img src="@source/markdown/images/wNIzDGS1iKZM754.png" alt="image-20220108150146007"></p>
<p>主函数执行完毕后，此时主函数的空间也被回收了，回收时main中空间n1还是10</p>
<h2 id="函数-包" tabindex="-1"><a class="header-anchor" href="#函数-包" aria-hidden="true">#</a> 函数 -- 包</h2>
<div class="custom-container danger"><p class="custom-container-title">强烈推荐🔥</p>
<p>⚡<a href="https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/Gomd_super/mod.md" target="_blank" rel="noopener noreferrer">推荐mod教程，mod是Golang新出的包<ExternalLinkIcon/></a></p>
</div>
<p><strong>在开发中，可能会有成百上千的函数，我们可以选择用一个<code v-pre>.go</code>文件，或者多个文件（对数据库操作的函数或者是对不常用的函数封装、引入</strong></p>
<p><strong>或者是两个或者多个函数共同开发一个Go项目，此时在同一个文件里面定义相同的函数名会报错，但是如果是在两个多个多个文件包里，就不是冲突了</strong></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>包的本质就是创建不同的文件夹，来存放不同的文件，而main是在main目录下，其他包是在其他的文件夹</p>
</div>
<h3 id="包示意图" tabindex="-1"><a class="header-anchor" href="#包示意图" aria-hidden="true">#</a> 包示意图</h3>
<p><img src="@source/markdown/images/pXlvxy16ACPLu7t.png" alt="image-20220108140245536"></p>
<h3 id="包的使用" tabindex="-1"><a class="header-anchor" href="#包的使用" aria-hidden="true">#</a> 包的使用</h3>
<h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h4>
<ol>
<li>区分相同名字的函数、变量等标识符</li>
<li>当程序文件很多时，可以很好的管理项目</li>
<li><strong>控制函数、变量等访问访问，即作用域</strong></li>
</ol>
<h4 id="包的相关说明" tabindex="-1"><a class="header-anchor" href="#包的相关说明" aria-hidden="true">#</a> 包的相关说明</h4>
<p><strong>打包指令：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package 包名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>引入一个包：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import "包的路径"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>调用：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//函数名如果是小写，是不能挎包使用</span>
<span class="token comment">//大写调用</span>
包名<span class="token punctuation">.</span>作用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>我觉得一个文件夹开始是一个项目，里面还有一个main文件夹，里面包含<code v-pre>main.go</code>文件，这个可以称之为“main包”，与此相同的其他文件夹都可以是一个包。当其他包文件要想调用，里面的变量第一个字母需要大写（public），小写是私有</p>
</blockquote>
<p><img src="@source/markdown/images/M738NaV5prWHB12.png" alt="image-20220108141704666"></p>
<h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4>
<ol>
<li>
<p>包的路径：是从项目文件夹里面的第一层文件开始的，到该包（mod包不是）</p>
</li>
<li>
<p>包名<strong>最好</strong>和文件夹名保持一致。</p>
</li>
<li>
<p><strong>打包指令放在第一行，然后是<code v-pre>import</code>指令，然后是函数的执行</strong></p>
</li>
<li>
<p><strong>如果包名比较长，Golang支持给包起别名，但是起别名之后原来的包不能使用</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	newutil <span class="token string">"go_code/chapter/fundemo01/util"</span>
<span class="token punctuation">)</span> <span class="token comment">//注意：此时原来的包util不能再用了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>如果两个相同函数名不在一个文件，但是在同一个包下，此时也会报错</strong></p>
</li>
<li>
<p><strong><code v-pre>main</code>包只有一个，而且只能是main可以形成可执行文件</strong></p>
</li>
</ol>
<h2 id="函数值传递" tabindex="-1"><a class="header-anchor" href="#函数值传递" aria-hidden="true">#</a> 函数值传递</h2>
<p>传递是指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数。</p>
<p><strong>默认情况下，Go 语言使用的是值传递，即在调用过程中不会影响到实际参数。</strong></p>
<p>❤️ <strong>注意:和有些编程语言不同(JAVA),Golang的数组是使用的值传递,即不会改变实际参数</strong></p>
<p><strong>以下定义了 swap() 函数：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/* 定义相互交换值的函数 */</span>
<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> temp <span class="token builtin">int</span>

   temp <span class="token operator">=</span> x <span class="token comment">/* 保存 x 的值 */</span>
   x <span class="token operator">=</span> y    <span class="token comment">/* 将 y 值赋给 x */</span>
   y <span class="token operator">=</span> temp <span class="token comment">/* 将 temp 值赋给 y*/</span>

   <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，让我们使用值传递来调用 swap() 函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
   <span class="token keyword">var</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">200</span>

   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"交换前 a 的值为 : %d\n"</span><span class="token punctuation">,</span> a <span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"交换前 b 的值为 : %d\n"</span><span class="token punctuation">,</span> b <span class="token punctuation">)</span>

   <span class="token comment">/* 通过调用函数来交换值 */</span>
   <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"交换后 a 的值 : %d\n"</span><span class="token punctuation">,</span> a <span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"交换后 b 的值 : %d\n"</span><span class="token punctuation">,</span> b <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 定义相互交换值的函数 */</span>
<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> temp <span class="token builtin">int</span>

   temp <span class="token operator">=</span> x <span class="token comment">/* 保存 x 的值 */</span>
   x <span class="token operator">=</span> y    <span class="token comment">/* 将 y 值赋给 x */</span>
   y <span class="token operator">=</span> temp <span class="token comment">/* 将 temp 值赋给 y*/</span>

   <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下代码执行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>交换前 a 的值为 : 100
交换前 b 的值为 : 200
交换后 a 的值 : 100
交换后 b 的值 : 200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>程序中使用的是值传递, 所以两个值并没有实现交互，我们可以使用 引用传递 来实现交换效果。</strong></p>
<h2 id="函数引用传递" tabindex="-1"><a class="header-anchor" href="#函数引用传递" aria-hidden="true">#</a> 函数引用传递</h2>
<p><strong>引用传递是指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。</strong></p>
<p><strong>引用传递指针参数传递到函数内，由于切片和map没有学到,以下是交换函数 swap() 使用指针方式实现引用传递：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/* 定义交换值函数*/</span>
<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> temp <span class="token builtin">int</span>
   temp <span class="token operator">=</span> <span class="token operator">*</span>x    <span class="token comment">/* 保持 x 地址上的值 */</span>
   <span class="token operator">*</span>x <span class="token operator">=</span> <span class="token operator">*</span>y      <span class="token comment">/* 将 y 值赋给 x */</span>
   <span class="token operator">*</span>y <span class="token operator">=</span> temp    <span class="token comment">/* 将 temp 值赋给 y */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下我们通过使用引用传递来调用 swap() 函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
   <span class="token keyword">var</span> b <span class="token builtin">int</span><span class="token operator">=</span> <span class="token number">200</span>

   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"交换前，a 的值 : %d\n"</span><span class="token punctuation">,</span> a <span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"交换前，b 的值 : %d\n"</span><span class="token punctuation">,</span> b <span class="token punctuation">)</span>

   <span class="token comment">/* 调用 swap() 函数
   * &amp;a 指向 a 指针，a 变量的地址
   * &amp;b 指向 b 指针，b 变量的地址 */</span>
        <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span>
    
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"交换后，a 的值 : %d\n"</span><span class="token punctuation">,</span> a <span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"交换后，b 的值 : %d\n"</span><span class="token punctuation">,</span> b <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> temp <span class="token builtin">int</span>
   temp <span class="token operator">=</span> <span class="token operator">*</span>x    <span class="token comment">/* 保存 x 地址上的值 */</span>
   <span class="token operator">*</span>x <span class="token operator">=</span> <span class="token operator">*</span>y      <span class="token comment">/* 将 y 值赋给 x */</span>
   <span class="token operator">*</span>y <span class="token operator">=</span> temp    <span class="token comment">/* 将 temp 值赋给 y */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码执行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>交换前，a 的值 : 100
交换前，b 的值 : 200
交换后，a 的值 : 200
交换后，b 的值 : 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在golang语言中不支持函数的重载" tabindex="-1"><a class="header-anchor" href="#在golang语言中不支持函数的重载" aria-hidden="true">#</a> 在Golang语言中不支持函数的重载</h2>
<details class="custom-container details"><summary>重载和重写的区别</summary>
<p>补充一些体外话题，就是Java中的重载和重写</p>
<ul>
<li>重载是对当前的包中的方法重载，返回值可以随意，参数的类型或者是参数个数一定不一样</li>
<li>重写是对父类或者是父类开始重写，返回值一定要比父类的类型相同或者是子类，参数的列表必须一样，而且修饰符范围要相同或者扩大</li>
</ul>
</details>
<p><strong>Golang不允许同一个文件里函数名不同</strong></p>
<p><strong>在Go中,函数本身也是一种数据类型,,可以赋值给一个变量,该变量就是函数类型的变量,通过该变量实现对函数类型的调用</strong></p>
<p>🔦<strong>实例：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span>n2<span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> n1 <span class="token operator">+</span> n2
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    a <span class="token operator">:=</span> getSum
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a的类型是%T,getNum的类型是%T"</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>getNum<span class="token punctuation">)</span>
<span class="token punctuation">}</span>   <span class="token comment">//%T 输出类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a的类型func(int,int)int
getSum的类型func(int,int)int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数作为实参" tabindex="-1"><a class="header-anchor" href="#函数作为实参" aria-hidden="true">#</a> 函数作为实参</h3>
<p>🔦<strong>实例：</strong>:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span>n2<span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> n1 <span class="token operator">+</span> n2
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">myFun</span><span class="token punctuation">(</span>funvar <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">,</span>num1 <span class="token builtin">int</span><span class="token punctuation">,</span>num2 <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">funvar</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    a <span class="token operator">:=</span> getSum
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a的类型是%T,getNum的类型是%T"</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>getNum<span class="token punctuation">)</span>
	
    <span class="token comment">//看案例</span>
    b <span class="token operator">:=</span> <span class="token function">myFun</span><span class="token punctuation">(</span>getSum<span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"b="</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>   <span class="token comment">//%T 输出类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go语言可以自定义数据类型" tabindex="-1"><a class="header-anchor" href="#go语言可以自定义数据类型" aria-hidden="true">#</a> Go语言可以自定义数据类型</h3>
<p>基本语法:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> 自定义数据类型名 数据类型         <span class="token comment">//相当于起别名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>🔦<strong>实例：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> myInt <span class="token builtin">int</span>

<span class="token keyword">var</span> num1 myInt
num1 <span class="token operator">=</span> <span class="token number">40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>但是Go语言不认为int和myInt是相同类型,此时需要显示转换</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>num2 := int(num1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">📜 对上面的解释</p>
<p>其实就是类似于Java的<code v-pre>int</code>和<code v-pre>Intger</code>，一个是基本数据类型，默认是0，一个是引用类型（封装类），默认是空。</p>
<p>Integer变量必须要实例化后才能使用。</p>
<p><strong>比较</strong>：</p>
<p>1.由于Integer变量实际上是对一个Integer对象的引用，所有两个通过new生成的Integer变量用比较永远是不相等的（new生成的是两个对象，内存地址不同，比较的是内存地址）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> num1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> num2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false，==比较的是内存地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.Integer变量和int变量比较时，只要两个变量的值是相等的，则结果为true（包装类Integer和基本数据类型int比较的时候，Java会自动拆箱为int，然后进行比较，实际上就变为两个int变量的比较）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> num1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.非new生成的Integer变量和<code v-pre>new Integer()</code>生成的变量比较时，结果为false（非new生成的Integer变量指向的是Java常量池中的对象，而<code v-pre>new Integer()</code>生成的变量指向堆中新建的对象，两者在内存中的地址不同）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> num1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> num2 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="go语言支持对返回值命名" tabindex="-1"><a class="header-anchor" href="#go语言支持对返回值命名" aria-hidden="true">#</a> go语言支持对返回值命名</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">cal</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span>n2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>sum <span class="token builtin">int</span><span class="token punctuation">,</span> sub <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//与1,2对应  --  与ab对应</span>
    sum <span class="token operator">=</span> n1 <span class="token operator">+</span> n2   
	sub <span class="token operator">=</span> n1 <span class="token operator">-</span> n2
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    a<span class="token punctuation">,</span>b <span class="token operator">:=</span> <span class="token function">cal</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a = %v\n,b = %v\n"</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>此时不需要 <code v-pre>:=</code></strong></p>
<p><strong>这样做就没有对返回值顺序的要求了,推荐使用</strong></p>
<h3 id="go-支持可变参数" tabindex="-1"><a class="header-anchor" href="#go-支持可变参数" aria-hidden="true">#</a> GO 支持可变参数</h3>
<h4 id="支持0到多个参数" tabindex="-1"><a class="header-anchor" href="#支持0到多个参数" aria-hidden="true">#</a> 支持0到多个参数</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span>args<span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> sum <span class="token builtin">int</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="支持1到多个参数" tabindex="-1"><a class="header-anchor" href="#支持1到多个参数" aria-hidden="true">#</a> 支持1到多个参数</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span>args<span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> sum <span class="token builtin">int</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明:</strong></p>
<p><strong>1. <code v-pre>args</code>是<code v-pre>slice</code>切片,通过<code v-pre>args[index]</code>可以访问到各个值</strong></p>
<p><strong>2. 切片是一个动态的数组</strong></p>
<p><strong>3. 如果一个函数的形参列表中有可变参数,那么把可变参数放在最后</strong>(类似于python、java)</p>
<p>🔦<strong>实例：</strong></p>
<blockquote>
<p>编写一个函数sum,可以求出1 到多个Int的和</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span>args<span class="token operator">...</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    sum <span class="token operator">:=</span> n1
    <span class="token comment">//遍历args</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">234</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">34543</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"a = "</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行:</p>
<p><img src="@source/markdown/images/kBAx6S3VmjRLlte.png" alt="image-20220108171050420"></p>
<h2 id="init函数" tabindex="-1"><a class="header-anchor" href="#init函数" aria-hidden="true">#</a> init函数</h2>
<blockquote>
<p>go语言中和python一样拥有init函数</p>
</blockquote>
<p><strong>每一个源文件中都可以包含一个init函数,该函数会在main函数执行前,被Go运行框架调用,也即是说init函数会在main函数执行前被调用</strong></p>
<p>即可以在init函数中实现初始化</p>
<p>🔦<strong>实例：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"init先执行"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main后执行"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="init细节" tabindex="-1"><a class="header-anchor" href="#init细节" aria-hidden="true">#</a> init细节</h3>
<ol>
<li>如果有全局变量定义,那么最先执行的是全局变量,然后才是init函数,,最后是main函数</li>
<li>init最主要的作用是完成初始化工作**(比如初始化全局变量)**</li>
</ol>
<blockquote>
<p>如果main.go 和 utils.go都包含了init时候,执行顺序是怎么样的</p>
</blockquote>
<p><img src="@source/markdown/images/jFafBviQkpmAH7P.png" alt="image-20220108172558808"></p>
<p><strong>即先执行引入文件的init函数,变量定义,然后执行main函数里面的变量定义....</strong></p>
<h2 id="补充-python函数" tabindex="-1"><a class="header-anchor" href="#补充-python函数" aria-hidden="true">#</a> 补充:python函数</h2>
<h3 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数" aria-hidden="true">#</a> 定义函数</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> 函数名（）：
代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：python和Go一样，都是不支持函数的重载，但是python中不报错</strong></p>
<p><img src="@source/markdown/images/Sr2AkygJKpEIPuB.png" alt="image-20220108181251332"></p>
<p>如果python有两个函数的函数名与参数列表都相同那么调用该函数时，哪个函数在后，则哪个被最终调用。</p>
<p>💡简单的一个案例如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token string">"before hello"</span>

<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token string">"after hello"</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    test<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果：</strong></p>
<p><img src="@source/markdown/images/pLFlRUXntaWumk2.png" alt="image-20220108181522853"></p>
<p><strong>在函数中修改全局变量：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>global a  ---- 定义a是全局的变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="不带参数值的-return-语句返回-none" tabindex="-1"><a class="header-anchor" href="#不带参数值的-return-语句返回-none" aria-hidden="true">#</a> 不带参数值的 return 语句返回 None</h3>
<p>💡简单的一个案例如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: UTF-8 -*-</span>
 
 <span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">:</span>
     <span class="token comment"># 两数之和</span>
     <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token punctuation">(</span><span class="token builtin">isinstance</span> <span class="token punctuation">(</span>num1<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token builtin">isinstance</span> <span class="token punctuation">(</span>num2<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
         <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string">'参数类型错误'</span><span class="token punctuation">)</span>  <span class="token comment">#条件语句中用and或者or判断</span>
     <span class="token keyword">return</span> num1<span class="token operator">+</span>num2
 
 <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个示例，还通过内置函数<code v-pre>isinstance(</code>)进行数据类型检查，检查调用函数时参数是否是整形和浮点型。如果参数类型不对，会报错，提示 参数类型错误<strong>当然，函数也可以返回多个值，具体实例如下：</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: UTF-8 -*-</span>
 
 <span class="token keyword">def</span> <span class="token function">division</span> <span class="token punctuation">(</span> num1<span class="token punctuation">,</span> num2 <span class="token punctuation">)</span><span class="token punctuation">:</span>
     <span class="token comment"># 求商与余数</span>
     a <span class="token operator">=</span> num1 <span class="token operator">%</span> num2
     b <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token operator">-</span>a<span class="token punctuation">)</span> <span class="token operator">/</span> num2
     <span class="token keyword">return</span> b <span class="token punctuation">,</span> a
 
 num1 <span class="token punctuation">,</span> num2 <span class="token operator">=</span> division<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
 tuple1 <span class="token operator">=</span> division<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
 
 <span class="token keyword">print</span> <span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span>
 <span class="token keyword">print</span> <span class="token punctuation">(</span>tuple1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出的值：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> 2.0 1
 (2.0, 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>认真观察就可以发现，尽管从第一个输出值来看，返回了多个值，实际上是先创建了一个元组然后返回的。</p>
<p>回忆一下，元组是可以直接用逗号来创建的，观察例子中的 ruturn ，可以发现实际上我们使用的是逗号来生成一个元组。</p>
<p>Python 语言中的函数返回值可以是多个，这是Python 相比其他语言的简便和灵活之处。</p>
<p><strong>Python 一次接受多个返回值的数据类型就是元组。</strong></p>
<h3 id="python的变量使用" tabindex="-1"><a class="header-anchor" href="#python的变量使用" aria-hidden="true">#</a> python的变量使用</h3>
<p>为了避免局部变量和全局变量出现混淆，有些公司要求加g_或者gl_的前缀。 <code v-pre>global ：全局变量</code></p>
<ul>
<li>
<p>函数返回类型，如果要接受的话一般用元组</p>
</li>
<li>
<p>元组是一个不可变的类型，<strong>访问的时候使用下标</strong></p>
</li>
</ul>
<p>接受元组的时候，<strong>可以使用多个变量接受返回元组的函数，这个时候使用逗号分隔。</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>gl_temp<span class="token punctuation">,</span>gl_wetness <span class="token operator">=</span> measure<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#第0个元素传递给第一个变量</span>

<span class="token comment">#注意的是：使用多个变量接受结果的时候，变量的个数和元组中元素的个数应该保持一致。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在python中，列表变量调用+=的本质是在执行变量列表的extend方法，不会修改变量的引用。</p>
<p>即列表是可以修改的，不会相加再赋值，而是直接把另一个列表整合</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '4.md' style='float:left'>⬆️上一节🔗</a><a href = '6.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


