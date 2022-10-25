<template><div><h1 id="go语言的重要语法" tabindex="-1"><a class="header-anchor" href="#go语言的重要语法" aria-hidden="true">#</a> go语言的重要语法</h1>
<nav class="table-of-contents"><ul><li><router-link to="#go语言的switch语句">Go语言的switch语句</router-link><ul><li><router-link to="#语法">语法</router-link></li><li><router-link to="#fallthrough-穿透">fallthrough（穿透）</router-link></li><li><router-link to="#type-switch">Type Switch</router-link></li></ul></li><li><router-link to="#switch和if比较">switch和if比较</router-link></li><li><router-link to="#for-循环">for 循环</router-link><ul><li><router-link to="#语法-1">语法</router-link></li><li><router-link to="#for循环的执行顺序">for循环的执行顺序</router-link></li><li><router-link to="#for语句执行过程">for语句执行过程</router-link></li><li><router-link to="#无限循环">无限循环:</router-link></li><li><router-link to="#for-each-range-循环">For-each range 循环</router-link></li><li><router-link to="#注意">注意</router-link></li></ul></li><li><router-link to="#while-和-do-while的实现">while 和 do...while的实现</router-link><ul><li><router-link to="#for循环实现while">for循环实现while</router-link></li><li><router-link to="#for循环实现do-while">for循环实现do while</router-link></li></ul></li><li><router-link to="#嵌套循环">嵌套循环</router-link><ul><li><router-link to="#语法-2">语法</router-link></li></ul></li><li><router-link to="#break">break</router-link><ul><li><router-link to="#break语法">break语法</router-link></li></ul></li><li><router-link to="#go-语言-continue-语句">Go 语言 continue 语句</router-link><ul><li><router-link to="#continue语法">continue语法</router-link></li></ul></li><li><router-link to="#go-语言-goto-语句">Go 语言 goto 语句</router-link><ul><li><router-link to="#语法-3">语法</router-link></li></ul></li><li><router-link to="#跳转控制语句return">跳转控制语句return</router-link></li><li><router-link to="#补-python中循环">补：python中循环</router-link><ul><li><router-link to="#基本的循环方法-使用range">基本的循环方法   -- 使用range</router-link></li><li><router-link to="#字符串遍历和go较智能">字符串遍历和Go较智能</router-link></li><li><router-link to="#while">while</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<h2 id="go语言的switch语句" tabindex="-1"><a class="header-anchor" href="#go语言的switch语句" aria-hidden="true">#</a> Go语言的switch语句</h2>
<p><strong>Golang代码在书写时要注意<code v-pre>{}</code>的位置，保持良好的书写习惯。</strong></p>
<ol>
<li><strong>switch 语句用于基于不同条件执行不同动作，每一个 case 分支都是唯一的，从上至下逐一测试，直到匹配为止。</strong></li>
<li><strong>switch 语句执行的过程从上至下，直到找到匹配项，==匹配项后面也不需要再加 break==。这一点和其他编程语言不同</strong></li>
<li><strong>switch 默认情况下 case 最后自带 <code v-pre>break</code> 语句，匹配成功后就不会执行其他 case，如果我们需要执行后面的 case，可以使用 <code v-pre>fallthrough</code> 。</strong></li>
</ol>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3>
<p>Go 编程语言中 switch 语句的语法如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">switch</span> var1 <span class="token punctuation">{</span>
    <span class="token keyword">case</span> val1<span class="token punctuation">:</span>
        <span class="token operator">...</span>
    <span class="token keyword">case</span> val2<span class="token punctuation">:</span>
        <span class="token operator">...</span>
    <span class="token comment">//case case val1, val2, val3:        -- 匹配到任意一个语句即可执行</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>      <span class="token comment">//都不匹配，执行default，可以省略</span>
        <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量 var1 可以是任何类型，而 val1 和 val2 则可以是同类型的任意值。类型不被局限于常量或整数，但必须是相同的类型；或者最终结果为相同类型的表达式。</p>
<p>您可以同时测试多个可能符合条件的值，使用逗号分割它们，例如：case val1, val2, val3。</p>
<p><strong>流程图：</strong></p>
<p><img src="@source/go-advancend/markdown/images/nhHxjQ6iYCSXmtD.png" alt="image-20220107142145630"></p>
<p><strong>流程图解释：</strong></p>
<ul>
<li>
<p><strong>由此可见，只要满足case其中的任何一条条件，都直接匹配，break退出循环，否则依次向下执行，最后执行default</strong></p>
</li>
<li>
<p>case中的多个表达式之间使用<code v-pre>,</code>间隔</p>
</li>
<li>
<p><strong>switch后面的语句是一个表达式即可，可以是一个函数的返回值</strong></p>
<p>==<strong>注意：case后面的表达式不可以重复  -- 无意义</strong>==,<strong>但是你可以骗过编译器，使用一个变量赋值来作为表达式😂😂😂</strong></p>
</li>
</ul>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
 
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
 
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> grade <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"B"</span>
   <span class="token keyword">var</span> marks <span class="token builtin">int64</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入一个值"</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Scanf</span><span class="token punctuation">(</span><span class="token string">"%c"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>marks<span class="token punctuation">)</span>
 
   <span class="token keyword">switch</span> marks <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">90</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">"A"</span>
      <span class="token keyword">case</span> <span class="token number">80</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">"B"</span>
      <span class="token keyword">case</span> <span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">70</span> <span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">"C"</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">"D"</span>  
   <span class="token punctuation">}</span>
 
   <span class="token keyword">switch</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">"A"</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"优秀!\n"</span> <span class="token punctuation">)</span>    
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">"B"</span><span class="token punctuation">,</span> grade <span class="token operator">==</span> <span class="token string">"C"</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"良好\n"</span> <span class="token punctuation">)</span>      
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">"D"</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"及格\n"</span> <span class="token punctuation">)</span>      
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">"F"</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"不及格\n"</span> <span class="token punctuation">)</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"差\n"</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"你的等级是 %s\n"</span><span class="token punctuation">,</span> grade<span class="token punctuation">)</span><span class="token punctuation">;</span>      
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上代码执行结果为：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>请输入一个值 60
优秀!
你的等级是 A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fallthrough-穿透" tabindex="-1"><a class="header-anchor" href="#fallthrough-穿透" aria-hidden="true">#</a> fallthrough（穿透）</h3>
<p><strong>如果在case语句块后增加fallthrough，则会继续执行下一个case，也叫switch穿透，可以想象为其他编译语言后面不加break</strong></p>
<p><strong>默认只能穿透一层</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">switch</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token boolean">false</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"1、case 条件语句为 false"</span><span class="token punctuation">)</span>
            <span class="token keyword">fallthrough</span>
    <span class="token keyword">case</span> <span class="token boolean">true</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"2、case 条件语句为 true"</span><span class="token punctuation">)</span>
            <span class="token keyword">fallthrough</span>
    <span class="token keyword">case</span> <span class="token boolean">false</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"3、case 条件语句为 false"</span><span class="token punctuation">)</span>
            <span class="token keyword">fallthrough</span>
    <span class="token keyword">case</span> <span class="token boolean">true</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"4、case 条件语句为 true"</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token boolean">false</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"5、case 条件语句为 false"</span><span class="token punctuation">)</span>
            <span class="token keyword">fallthrough</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"6、默认 case"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>😂 <strong>不建议使用，因为可以本身可以使用<code v-pre>,</code>对表达式语句隔开使用</strong></p>
<h3 id="type-switch" tabindex="-1"><a class="header-anchor" href="#type-switch" aria-hidden="true">#</a> Type Switch</h3>
<p>switch 语句还可以被用于 type-switch <strong>来判断某个 interface 变量中实际存储的变量类型。</strong></p>
<p><strong>Type Switch 语法格式如下：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">switch</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token keyword">type</span><span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>      
    <span class="token keyword">case</span> <span class="token keyword">type</span><span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">/* 你可以定义任意个数的case */</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token comment">/* 可选 */</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
     
   <span class="token keyword">switch</span> i <span class="token operator">:=</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>  
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">" x 的类型 :%T"</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>                
      <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>  
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x 是 int 型"</span><span class="token punctuation">)</span>                      
      <span class="token keyword">case</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x 是 float64 型"</span><span class="token punctuation">)</span>          
      <span class="token keyword">case</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x 是 func(int) 型"</span><span class="token punctuation">)</span>                      
      <span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x 是 bool 或 string 型"</span> <span class="token punctuation">)</span>      
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"未知型"</span><span class="token punctuation">)</span>    
   <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上代码执行结果为：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>x 的类型 :&lt;nil>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>后面学接口再深入</strong></p>
<h2 id="switch和if比较" tabindex="-1"><a class="header-anchor" href="#switch和if比较" aria-hidden="true">#</a> switch和if比较</h2>
<ol>
<li>如果判断的具体数值不多，而且符合整数、浮点数、字符、字符串这几种类型，建议使用switch，简洁高效</li>
<li>如果是对<strong>区间和结果为bool类型的判断，使用if更好</strong></li>
</ol>
<h2 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h2>
<h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3>
<p>Go 语言的 For 循环有 3 种形式，只有其中的一种使用分号。</p>
<ol>
<li><strong>和 C 语言的 for 一样：</strong></li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> init<span class="token punctuation">;</span> condition<span class="token punctuation">;</span> post <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li><strong>和 C 的 while 一样：</strong></li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> condition <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>
<p><strong>和 C 的 for(;😉 一样：</strong></p>
<p><strong>此时是一个死循环，这种写法通常配合break来终止</strong></p>
</li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>init： 一般为赋值表达式，给控制变量赋初值；</strong></li>
<li><strong>condition： 关系表达式或逻辑表达式，循环控制条件；</strong></li>
<li><strong>post： 一般为赋值表达式，给控制变量增量或减量。</strong></li>
</ul>
<p>大多编程语言循环程序的流程图：</p>
<img src="@source/go-advancend/markdown/images/image-20221003120127550.png" alt="image-20221003120127550" style="zoom:50%;" />     
<p>for 循环是一个循环控制结构，可以执行指定次数的循环。</p>
<h3 id="for循环的执行顺序" tabindex="-1"><a class="header-anchor" href="#for循环的执行顺序" aria-hidden="true">#</a> for循环的执行顺序</h3>
<ol>
<li>
<p>循环变量的初始化</p>
</li>
<li>
<p>执行循环条件   例如<code v-pre>i&lt;=10</code></p>
</li>
<li>
<p>如果循环条件为真，那么执行循环操作</p>
</li>
<li>
<p><strong>执行循环变量的迭代</strong>  — <code v-pre>i++</code>（不可以是<code v-pre>++i</code>)</p>
</li>
<li>
<p>反复执行，条件为false时，退出循环</p>
</li>
</ol>
<h3 id="for语句执行过程" tabindex="-1"><a class="header-anchor" href="#for语句执行过程" aria-hidden="true">#</a> for语句执行过程</h3>
<ol>
<li>
<p>先对表达式 1 赋初值；</p>
</li>
<li>
<p>判别赋值表达式 <code v-pre>init</code> 是否满足给定条件，若其值为真，满足循环条件，则执行循环体内语句，然后执行 <code v-pre>post</code>，进入第二次循环，再判别 <code v-pre>condition</code>；否则判断 <code v-pre>condition</code> 的值为假，不满足条件，就终止<code v-pre>for</code>循环，执行循环体外语句。</p>
</li>
</ol>
<p><strong>for 循环的 range 格式可以对 slice、map、数组、字符串等进行迭代循环。（后面有讲）</strong></p>
<p><strong>格式如下：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> oldMap <span class="token punctuation">{</span>
    newMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> vgoalue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for 语句语法流程如下图所示：</p>
<img src="@source/go-advancend/markdown/images/CsmrNK5EVByjinz.png" alt="img" style="zoom:50%;" />
<h4 id="实例1" tabindex="-1"><a class="header-anchor" href="#实例1" aria-hidden="true">#</a> 实例1：</h4>
<blockquote>
<p>计算 1 到 10 的数字之和：</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>   <span class="token comment">//循环结束的时候i=11 </span>
<span class="token comment">//i在for循环中定义，只能在for中使用，如果在循环外定义，那么i最后输出为11</span>
                sum <span class="token operator">+=</span> i
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sum<span class="token comment">/*，i*/</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出结果为：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<blockquote>
<p><strong>init 和 post 参数是可选的，我们可以直接省略它，类似 While 语句。</strong></p>
</blockquote>
<p><strong>以下实例在 sum 小于 10 的时候计算 sum 自相加后的值：</strong></p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     sum <span class="token operator">:=</span> <span class="token number">1</span>
     <span class="token keyword">for</span> <span class="token punctuation">;</span> sum <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token punctuation">{</span>
         sum <span class="token operator">+=</span> sum
     <span class="token punctuation">}</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>

     <span class="token comment">// 这样写也可以，更像 While 语句形式</span>
     <span class="token keyword">for</span> sum <span class="token operator">&lt;=</span> <span class="token number">10</span> <span class="token punctuation">{</span>
         sum <span class="token operator">+=</span> sum
     <span class="token punctuation">}</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出结果为：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>16
16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无限循环" tabindex="-1"><a class="header-anchor" href="#无限循环" aria-hidden="true">#</a> 无限循环:</h3>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            sum<span class="token operator">++</span> <span class="token comment">// 无限循环下去</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token comment">// 无法输出</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要停止无限循环，可以在命令窗口按下<code v-pre>ctrl-c</code> 。</p>
<h3 id="for-each-range-循环" tabindex="-1"><a class="header-anchor" href="#for-each-range-循环" aria-hidden="true">#</a> For-each range 循环</h3>
<p><strong>这种格式的循环可以对字符串、数组、切片等进行迭代输出元素。（参考python，后面有介绍）</strong></p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     strings <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"google"</span><span class="token punctuation">,</span> <span class="token string">"runoob"</span><span class="token punctuation">}</span>
     <span class="token keyword">for</span> i<span class="token punctuation">,</span> s <span class="token operator">:=</span> <span class="token keyword">range</span> strings <span class="token punctuation">{</span>
       fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
    
	 numbers <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
 	 <span class="token keyword">for</span> i<span class="token punctuation">,</span>x<span class="token operator">:=</span> <span class="token keyword">range</span> numbers <span class="token punctuation">{</span>
    	 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 %d 位 x 的值 = %d\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span>x<span class="token punctuation">)</span>
 	 <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上实例运行输出结果为:</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0 google
1 runoob
第 0 位 x 的值 = 1
第 1 位 x 的值 = 2
第 2 位 x 的值 = 3
第 3 位 x 的值 = 5
第 4 位 x 的值 = 0
第 5 位 x 的值 = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//对字符串遍历的传统方式</span>
<span class="token keyword">var</span> str <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"hello"</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%c\n"</span><span class="token punctuation">,</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用for - each reage 遍历</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span>j <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"i=%d,j=%c\n"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>h
e
l
l
o
0 = h
1 = e
2 = l
3 = l
4 = o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<blockquote>
<p><strong>我们的字符串如果是中文，那么会出现乱码，因为传统的遍历对字符串遍历是通过字节的，英文是一个字节，而中文是三个字节，那么该怎么解决？</strong></p>
</blockquote>
<p><strong>解决：需要将str 转化为[]rune切片(类似于python，后面有讲）</strong></p>
<div class="custom-container warning"><p class="custom-container-title">注意⚠️</p>
<p>但是需要一个新的变量str2来接收，否则会报错</p>
<p><strong>for range遍历很智能，默认是使用字符的方式遍历，因此字符串有中文，也可以遍历</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//对字符串遍历的传统方式</span>
<span class="token keyword">var</span> str <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"hello中国"</span>
str2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>    <span class="token comment">//意思是把str转化为rune切片</span>
 
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%c\n"</span><span class="token punctuation">,</span>str2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong>：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>h
e
l
l
o
中
国
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="while-和-do-while的实现" tabindex="-1"><a class="header-anchor" href="#while-和-do-while的实现" aria-hidden="true">#</a> while 和 do...while的实现</h2>
<blockquote>
<p><strong>在Golang语言中是没有while和do while的语法，如果我们需要使用其它语言的while和do while 语法，可以==通过for循环==来实现效果</strong></p>
</blockquote>
<h3 id="for循环实现while" tabindex="-1"><a class="header-anchor" href="#for循环实现while" aria-hidden="true">#</a> for循环实现while</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>循环变量初始化
<span class="token keyword">for</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span>循环判断语句<span class="token punctuation">{</span>
	<span class="token keyword">break</span>    <span class="token comment">//跳出for循环</span>
	<span class="token punctuation">}</span>
	循环操作
	循环变量迭代
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong></p>
<p><strong>1. for循环是一个无限循环</strong></p>
<p><strong>2. break语句跳出循环</strong></p>
<h3 id="for循环实现do-while" tabindex="-1"><a class="header-anchor" href="#for循环实现do-while" aria-hidden="true">#</a> for循环实现do while</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>循环变量初始化
<span class="token keyword">for</span><span class="token punctuation">{</span>
	循环操作
	循环变量迭代
	<span class="token keyword">if</span>循环条件表达式<span class="token punctuation">{</span>
	<span class="token keyword">break</span>  <span class="token comment">//跳出for循环</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>区别：先操作再循环</strong></p>
<h2 id="嵌套循环" tabindex="-1"><a class="header-anchor" href="#嵌套循环" aria-hidden="true">#</a> 嵌套循环</h2>
<blockquote>
<p>依旧如此，不建议超过三次，否则时间复杂度很大</p>
</blockquote>
<p>Go 语言允许用户在循环内使用循环。接下来我们将为大家介绍嵌套循环的使用。</p>
<h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h3>
<p><strong>以下为 Go 语言嵌套循环的格式：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> <span class="token punctuation">[</span>condition <span class="token operator">|</span> <span class="token punctuation">(</span> init<span class="token punctuation">;</span> condition<span class="token punctuation">;</span> increment <span class="token punctuation">)</span> <span class="token operator">|</span> Range<span class="token punctuation">]</span>
<span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">[</span>condition <span class="token operator">|</span> <span class="token punctuation">(</span> init<span class="token punctuation">;</span> condition<span class="token punctuation">;</span> increment <span class="token punctuation">)</span> <span class="token operator">|</span> Range<span class="token punctuation">]</span>
  <span class="token punctuation">{</span>
  		 <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡简单的一个案例如下：</p>
<blockquote>
<p>以下实例使用循环嵌套来输出 2 到 100 间的素数</p>
<p>**分析：**i从2开始，一直到100结束，素数是指没有因子的数</p>
<p><strong>解题方法：将复杂问题分解成简单问题，先死后活</strong></p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> i<span class="token punctuation">,</span> j <span class="token builtin">int</span>
    
   <span class="token keyword">for</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> j<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>i <span class="token operator">/</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">//如果发现因子，则不是素数</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span> 
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">></span> <span class="token punctuation">(</span>i <span class="token operator">/</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%d  是素数\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上实例运行输出结果为:</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>2  是素数
3  是素数
5  是素数
7  是素数
11  是素数
13  是素数
17  是素数
19  是素数
23  是素数
29  是素数
31  是素数
37  是素数
41  是素数
43  是素数
47  是素数
53  是素数
59  是素数
61  是素数
67  是素数
71  是素数
73  是素数
79  是素数
83  是素数
89  是素数
97  是素数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>You can also find existing translations of the string and translations into othe
languages in this section, as well as translation memory matches and machine
translation translation suggestions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h2>
<p>Go 语言中 break 语句用于以下两方面：</p>
<ul>
<li>用于循环语句中跳出循环，并开始执行循环之后的语句。</li>
<li>break 在 switch（开关语句）中在执行一条 case 后跳出语句的作用。</li>
<li>在多重循环中，可以用标号 label 标出想 break 的循环。</li>
</ul>
<h3 id="break语法" tabindex="-1"><a class="header-anchor" href="#break语法" aria-hidden="true">#</a> break语法</h3>
<p><strong>break 语法格式如下：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">break</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>说明：break默认跳出最近的循环，双重循环则跳出最里层</strong></p>
<p><strong>break后面可以指定标签，label，可以指定跳出到标签对应的循环中</strong></p>
<h2 id="go-语言-continue-语句" tabindex="-1"><a class="header-anchor" href="#go-语言-continue-语句" aria-hidden="true">#</a> Go 语言 continue 语句</h2>
<ul>
<li>Go 语言的 continue 语句 有点像 break 语句。但是 continue 不是跳出循环，而是跳过当前循环执行下一次循环语句。</li>
<li>for 循环中，执行 continue 语句会触发 for 增量语句的执行。</li>
<li>在多重循环中，可以用标号 <strong>label 标出想 continue 的循环（和break中的标签一样）</strong>。</li>
</ul>
<h3 id="continue语法" tabindex="-1"><a class="header-anchor" href="#continue语法" aria-hidden="true">#</a> continue语法</h3>
<p><strong>continue 语法格式如下：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">continue</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">// 不使用标记</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"---- continue ---- "</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"i: %d\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i2 <span class="token operator">:=</span> <span class="token number">11</span><span class="token punctuation">;</span> i2 <span class="token operator">&lt;=</span> <span class="token number">13</span><span class="token punctuation">;</span> i2<span class="token operator">++</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"i2: %d\n"</span><span class="token punctuation">,</span> i2<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用标记</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"---- continue label ----"</span><span class="token punctuation">)</span>
re<span class="token punctuation">:</span>                 <span class="token comment">//标记点</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"i: %d\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
            <span class="token keyword">for</span> i2 <span class="token operator">:=</span> <span class="token number">11</span><span class="token punctuation">;</span> i2 <span class="token operator">&lt;=</span> <span class="token number">13</span><span class="token punctuation">;</span> i2<span class="token operator">++</span> <span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"i2: %d\n"</span><span class="token punctuation">,</span> i2<span class="token punctuation">)</span>
                <span class="token keyword">continue</span> re            <span class="token comment">//直接跳出循环</span>
            <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上实例执行结果为：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---- continue ---- 
i: 1
i2: 11
i2: 12
i2: 13
i: 2
i2: 11
i2: 12
i2: 13
i: 3
i2: 11
i2: 12
i2: 13
---- continue label ----
i: 1
i2: 11
i: 2
i2: 11
i: 3
i2: 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go-语言-goto-语句" tabindex="-1"><a class="header-anchor" href="#go-语言-goto-语句" aria-hidden="true">#</a> Go 语言 goto 语句</h2>
<blockquote>
<p>建议尽量不使用goto，但是Go 语言是支持goto</p>
</blockquote>
<p>Go 语言的 goto 语句可以无条件地转移到过程中指定的行。</p>
<p>goto 语句通常与条件语句配合使用。可用来实现条件转移， 构成循环，跳出循环体等功能。</p>
<p>但是，在结构化程序设计中一般不主张使用 goto 语句， 以免造成程序流程的混乱，使理解和调试程序都产生困难。</p>
<h3 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h3>
<p>goto 语法格式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">goto</span> label<span class="token punctuation">;</span>               <span class="token comment">//可以向后跳转</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">.</span>
label<span class="token punctuation">:</span> statement<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/go-advancend/markdown/images/GZHeg2rnsaCjqI8.png" alt="image-20220107172824206"></p>
<p>💡简单的一个案例如下：</p>
<blockquote>
<p>在变量 a 等于 15 的时候跳过本次循环并回到循环的开始语句 LOOP 处：</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>

   <span class="token comment">/* 循环 */</span>
   LOOP<span class="token punctuation">:</span> <span class="token keyword">for</span> a <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token punctuation">{</span>    <span class="token comment">//定义一个标签LOOP</span>
      <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">15</span> <span class="token punctuation">{</span>
         <span class="token comment">/* 跳过迭代 */</span>
         a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span>
         <span class="token keyword">goto</span> LOOP
      <span class="token punctuation">}</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a的值为 : %d\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
      a<span class="token operator">++</span>    
   <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例执行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a的值为 : 10
a的值为 : 11
a的值为 : 12
a的值为 : 13
a的值为 : 14
a的值为 : 16
a的值为 : 17
a的值为 : 18
a的值为 : 19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<blockquote>
<p><strong>goto 一般和if语句配合使用，而且goto本身语言并没有问题，更多的是开发者的问题。但还是尽量避免goto语句😂😂</strong></p>
</blockquote>
<h2 id="跳转控制语句return" tabindex="-1"><a class="header-anchor" href="#跳转控制语句return" aria-hidden="true">#</a> 跳转控制语句return</h2>
<p><strong>return一般是用在函数或者方法中，比break更彻底，下面的代码都不执行</strong></p>
<p><strong>如果return放在main中，那么表示整个程序的结束；放在其他函数里，表示跳出当前的函数</strong></p>
<blockquote>
<ul>
<li>[x] <RouterLink to="/go-advancend/markdown/Go%E8%AF%AD%E8%A8%80%E5%87%BD%E6%95%B0.html"><strong>函数讲</strong></RouterLink></li>
</ul>
</blockquote>
<h2 id="补-python中循环" tabindex="-1"><a class="header-anchor" href="#补-python中循环" aria-hidden="true">#</a> 补：python中循环</h2>
<h3 id="基本的循环方法-使用range" tabindex="-1"><a class="header-anchor" href="#基本的循环方法-使用range" aria-hidden="true">#</a> 基本的循环方法   -- 使用range</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
<span class="token number">2</span>
<span class="token number">4</span>
<span class="token number">6</span>
<span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串遍历和go较智能" tabindex="-1"><a class="header-anchor" href="#字符串遍历和go较智能" aria-hidden="true">#</a> 字符串遍历和Go较智能</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">:</span> name <span class="token operator">=</span> <span class="token string">"lihua你好"</span>

In <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> name<span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
l
i
h
u
a
你
好
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当然，Go中使用切片（rune）或者range也可以实现输出中文</strong></p>
<h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">while</span>循环有三个
	<span class="token keyword">while</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">:</span>
		主函数
	<span class="token keyword">else</span><span class="token punctuation">:</span>
<span class="token operator">//</span>不满足<span class="token keyword">while</span>条件的时候执行<span class="token keyword">else</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> i <span class="token operator">=</span> <span class="token number">1</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     i <span class="token operator">+=</span> <span class="token number">1</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">if</span> i<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span>     <span class="token comment"># 非双数时跳过输出</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>         <span class="token keyword">continue</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>         <span class="token comment"># 输出双数2、4、6、8、10</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> i <span class="token operator">=</span> <span class="token number">1</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>            <span class="token comment"># 循环条件为1必定成立</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>         <span class="token comment"># 输出1~10</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     i <span class="token operator">+=</span> <span class="token number">1</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">if</span> i <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">:</span>     <span class="token comment"># 当i大于10时跳出循环</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>         <span class="token keyword">break</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
<span class="token number">2</span>
<span class="token number">4</span>
<span class="token number">6</span>
<span class="token number">8</span>
<span class="token number">10</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>
<span class="token number">9</span>
<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>python中使用while支持else，不满足此条件则开始else，相当于其他编程语言的<code v-pre>where+if</code></strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> count <span class="token operator">=</span> <span class="token number">0</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>    <span class="token keyword">print</span> <span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token string">" is  less than 5"</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>    count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">else</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>    <span class="token keyword">print</span> <span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token string">" is not less than 5"</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
<span class="token number">0</span>  <span class="token keyword">is</span>  less than <span class="token number">5</span>
<span class="token number">1</span>  <span class="token keyword">is</span>  less than <span class="token number">5</span>
<span class="token number">2</span>  <span class="token keyword">is</span>  less than <span class="token number">5</span>
<span class="token number">3</span>  <span class="token keyword">is</span>  less than <span class="token number">5</span>
<span class="token number">4</span>  <span class="token keyword">is</span>  less than <span class="token number">5</span>
<span class="token number">5</span>  <span class="token keyword">is</span> <span class="token keyword">not</span> less than <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '3.md' style='float:left'>⬆️上一节🔗</a><a href = '5.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


