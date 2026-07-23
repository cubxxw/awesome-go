<template><div><h1 id="golang的多维数组和map集合" tabindex="-1"><a class="header-anchor" href="#golang的多维数组和map集合" aria-hidden="true">#</a> Golang的多维数组和map集合</h1>
<nav class="table-of-contents"><ul><li><router-link to="#二维数组">二维数组</router-link><ul><li><router-link to="#二维数组在内存中的布局">二维数组在内存中的布局</router-link></li><li><router-link to="#初始化二维数组">初始化二维数组</router-link></li><li><router-link to="#遍历二维数组">遍历二维数组</router-link></li><li><router-link to="#创建各个维度元素数量不一致的多维数组">创建各个维度元素数量不一致的多维数组</router-link></li></ul></li><li><router-link to="#go语言map-集合">Go语言map（集合）</router-link><ul><li><router-link to="#定义-map">定义 Map</router-link></li><li><router-link to="#map的增删改查操作">map的增删改查操作</router-link></li><li><router-link to="#map遍历">map遍历</router-link></li><li><router-link to="#map长度">map长度</router-link></li><li><router-link to="#map切片">map切片</router-link></li><li><router-link to="#map排序">map排序</router-link></li><li><router-link to="#map的使用细节">map的使用细节</router-link></li></ul></li><li><router-link to="#封装排序的方法">封装排序的方法</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<p><strong>Go 语言支持多维数组，以下为常用的多维数组声明方式：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> variable_name <span class="token punctuation">[</span>SIZE1<span class="token punctuation">]</span><span class="token punctuation">[</span>SIZE2<span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">[</span>SIZEN<span class="token punctuation">]</span> variable_type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>variable_type : 数据类型</li>
</ul>
<p><strong>以下实例声明了三维的整型数组：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> threedim <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二维数组" tabindex="-1"><a class="header-anchor" href="#二维数组" aria-hidden="true">#</a> 二维数组</h2>
<p>二维数组是最简单的多维数组，<strong>二维数组本质上是由一维数组组成的</strong>。二维数组定义方式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> arrayName <span class="token punctuation">[</span> x <span class="token punctuation">]</span><span class="token punctuation">[</span> y <span class="token punctuation">]</span> variable_type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>variable_type 为 Go 语言的数据类型，arrayName 为数组名，二维数组可认为是一个表格，x 为行，y 为列，下图演示了一个二维数组 a 为三行四列：</p>
<p><img src="@source/markdown/images/EKFJUf4G68a97x1.png" alt="img"></p>
<p>二维数组中的元素可通过 <strong>a[ i ][ j ]</strong> 来访问。</p>
<h3 id="二维数组在内存中的布局" tabindex="-1"><a class="header-anchor" href="#二维数组在内存中的布局" aria-hidden="true">#</a> 二维数组在内存中的布局</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> arr <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/markdown/images/zTelH5XSmjwLsMi.png" alt="image-20220112111604625"></p>
<blockquote>
<p>由此可见，这个二维数组是占两个空间，中间隔24个字节，这是因为int占8个字节，然而占三个数据，所以是<code v-pre>3*8</code>个字节</p>
</blockquote>
<img src="https://s2.loli.net/2022/01/12/Xo1JVRjhbWpKD8w.gif" alt="img" style="zoom:33%;" />
<h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>实例
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Step 1: 创建数组</span>
    values <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// Step 2: 使用 appped() 函数向空的二维数组添加两行一维数组</span>
    row1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    row2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
    values <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>values<span class="token punctuation">,</span> row1<span class="token punctuation">)</span>
    values <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>values<span class="token punctuation">,</span> row2<span class="token punctuation">)</span>

    <span class="token comment">// Step 3: 显示两行数据</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Row 1"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Row 2"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">// Step 4: 访问第一个元素</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"第一个元素为："</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Row 1
[1 2 3]
Row 2
[4 5 6]
第一个元素为：
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化二维数组" tabindex="-1"><a class="header-anchor" href="#初始化二维数组" aria-hidden="true">#</a> 初始化二维数组</h3>
<p>多维数组可通过大括号来初始值。以下实例为一个 3 行 4 列的二维数组：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>  
 <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">,</span>    <span class="token comment">/*  第一行索引为 0 */</span>
 <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span> <span class="token punctuation">,</span>    <span class="token comment">/*  第二行索引为 1 */</span>
 <span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">/* 第三行索引为 2 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 以上代码中倒数第二行的 <code v-pre>}</code> 必须要有逗号，因为最后一行的 <code v-pre>}</code> 不能单独一行，也可以写成这样：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>  
 <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">,</span>   <span class="token comment">/*  第一行索引为 0 */</span>
 <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span> <span class="token punctuation">,</span>   <span class="token comment">/*  第二行索引为 1 */</span>
 <span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">}</span>   <span class="token comment">/* 第三行索引为 2 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下实例初始化一个 2 行 2 列 的二维数组：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建二维数组</span>
    sites <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 向二维数组添加元素</span>
    sites<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Google"</span>
    sites<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Runoob"</span>
    sites<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Taobao"</span>
    sites<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Weibo"</span>

    <span class="token comment">// 显示结果</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sites<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[[Google Runoob] [Taobao Weibo]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="遍历二维数组" tabindex="-1"><a class="header-anchor" href="#遍历二维数组" aria-hidden="true">#</a> 遍历二维数组</h3>
<p>二维数组通过指定坐标来访问。如数组中的行索引与列索引，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>val <span class="token operator">:=</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
或
<span class="token keyword">var</span> value <span class="token builtin">int</span> <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例访问了二维数组 val 第三行的第四个元素。</p>
<p>二维数组可以使用循环嵌套来输出元素：</p>
<p><strong>注意统计二维数组的个数的时候，<code v-pre>j&lt;len(a[i])</code>统计的是一维数组每一次循环有多少个，如下：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 数组 - 5 行 2 列*/</span>
   a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"i="</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment">//5</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
   		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"j="</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>                                                      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/IzjmvYQCHOytaPf.png" alt="image-20220112113015045"></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 数组 - 5 行 2 列*/</span>
   <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
   <span class="token keyword">var</span> i<span class="token punctuation">,</span> j <span class="token builtin">int</span>

   <span class="token comment">/* 输出数组元素 */</span>
    <span class="token keyword">for</span>  i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>     <span class="token comment">//i&lt;len(a)</span>
        <span class="token keyword">for</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>  <span class="token comment">//j&lt;len(a[i])</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a[%d][%d] = %d\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span>j<span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
    
    <span class="token comment">/*for -range遍历 */</span>
    <span class="token keyword">for</span>  i<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> arr3 <span class="token punctuation">{</span>     <span class="token comment">//i&lt;len(a)</span>
        <span class="token keyword">for</span> j<span class="token punctuation">,</span>v2 <span class="token operator">:=</span> <span class="token keyword">range</span> v <span class="token punctuation">{</span> 	 <span class="token comment">//j&lt;len(a[i])</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"arr3[%v][%v] = %v \t"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span>j<span class="token punctuation">,</span> v2 <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行输出结果为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span>
a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span>
a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span>
a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span>
a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建各个维度元素数量不一致的多维数组" tabindex="-1"><a class="header-anchor" href="#创建各个维度元素数量不一致的多维数组" aria-hidden="true">#</a> 创建各个维度元素数量不一致的多维数组</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建空的二维数组</span>
    animals <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 创建三一维数组，各数组长度不同</span>
    row1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"fish"</span><span class="token punctuation">,</span> <span class="token string">"shark"</span><span class="token punctuation">,</span> <span class="token string">"eel"</span><span class="token punctuation">}</span>
    row2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"bird"</span><span class="token punctuation">}</span>
    row3 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"lizard"</span><span class="token punctuation">,</span> <span class="token string">"salamander"</span><span class="token punctuation">}</span>

    <span class="token comment">// 使用 append() 函数将一维数组添加到二维数组中</span>
    animals <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>animals<span class="token punctuation">,</span> row1<span class="token punctuation">)</span>
    animals <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>animals<span class="token punctuation">,</span> row2<span class="token punctuation">)</span>
    animals <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>animals<span class="token punctuation">,</span> row3<span class="token punctuation">)</span>

    <span class="token comment">// 循环输出</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> animals <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Row: %v\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>animals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行输出结果为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>Row<span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">[</span>fish shark eel<span class="token punctuation">]</span>
Row<span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token punctuation">[</span>bird<span class="token punctuation">]</span>
Row<span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token punctuation">[</span>lizard salamander<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="go语言map-集合" tabindex="-1"><a class="header-anchor" href="#go语言map-集合" aria-hidden="true">#</a> Go语言map（集合）</h2>
<div class="custom-container danger"><p class="custom-container-title">Go语言map介绍</p>
<p>Map⚡</p>
<p>Map 是一种无<strong>序的键值对的集合</strong>。Map 最重要的一点是通过 key 来快速检索数据，key 类似于索引，指向数据的值。<strong>类似于python中的字典 -- key - value数据结构</strong></p>
<p>Map 是一种集合，所以我们可以像迭代数组和切片那样迭代它。不过，<strong>Map 是无序的，我们无法决定它的返回顺序，这是因为 Map 是使用 hash 表来实现的。</strong></p>
<p><strong>通常来说，key数据类型为==int、string==</strong>,但也支持其他的数据类型，<strong>注意的是：slice，map和function不可以做key，没法用==判断</strong></p>
</div>
<h3 id="定义-map" tabindex="-1"><a class="header-anchor" href="#定义-map" aria-hidden="true">#</a> 定义 Map</h3>
<p>可以使用内建函数 make 也可以使用 map 关键字来定义 Map:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/* 声明变量，默认 map 是 nil */</span>
<span class="token keyword">var</span> map_variable <span class="token keyword">map</span><span class="token punctuation">[</span>key_data_type<span class="token punctuation">]</span>value_data_type

<span class="token comment">/* 使用 make 函数 */</span>
map_variable <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>key_data_type<span class="token punctuation">]</span>value_data_type<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意(四点）：</strong></p>
<p><strong>1. 如果不初始化 map，那么就会创建一个 nil map。nil map 不能用来存放键值对</strong></p>
<p><strong>2. map声明是不会分配内存的，初始化需要make,分配内存后才可以赋值与使用</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>    <span class="token comment">//key为string，值为string</span>
    <span class="token comment">//fmt.Println(a)  -- 错误，刚声明没有空间，不能使用 ，需要空间</span>
    a <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>     <span class="token comment">//分配10空间</span>
    a<span class="token punctuation">[</span><span class="token string">"no1"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"宋江"</span>    <span class="token comment">//ok</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/cVB4m5ixvIDKO6J.png" alt="image-20220112115239766"></p>
<p><strong>3. key是不可以冲突重复的，但是value是可以重复的</strong></p>
<p><strong>4. key输出的是无序的，如果需要有序，需要进行排序</strong></p>
<ul>
<li>✍️✍️✍️==但是现在的版本和python一样，新的版本key输出都是有序的了==</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> <span class="token keyword">package</span> main                                                            
 <span class="token keyword">import</span> <span class="token string">"fmt"</span>
 <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">var</span> a <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>    <span class="token comment">//类型为string，值为string</span>
     <span class="token comment">//fmt.Println(a)  -- 错误，刚声明没有空间，不能使用 ，需要空间</span>
     a <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>     <span class="token comment">//分配10空间</span>
     a<span class="token punctuation">[</span><span class="token string">"no1"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"宋江"</span>    <span class="token comment">//ok</span>
     a<span class="token punctuation">[</span><span class="token string">"no0"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"hello"</span>
 
     a<span class="token punctuation">[</span><span class="token string">"no4"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"hello4"</span>
     a<span class="token punctuation">[</span><span class="token string">"no3"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"hello3"</span>
     a<span class="token punctuation">[</span><span class="token string">"no5"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"hello5"</span>
     a<span class="token punctuation">[</span><span class="token string">"no2"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"hello2"</span>
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/aEdpCMre6oZwn7f.png" alt="image-20220112115940420"></p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> countryCapitalMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">/*创建集合 */</span>
    countryCapitalMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token comment">//可省略空间</span>
    <span class="token comment">/*或countryCapitalMap := make(map[string]string) */</span>
<span class="token comment">//声明且定义一个集合</span>
    <span class="token comment">/* map插入key - value对,各个国家对应的首都 */</span>
    countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"France"</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"巴黎"</span>
    countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"Italy"</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"罗马"</span>
    countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"Japan"</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"东京"</span>
    countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"India "</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"新德里"</span>

<span class="token comment">/*还有一种方式在声明的同时赋值，方便简洁*/</span>
    countryCapitalMap2 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token string">"France"</span>  <span class="token punctuation">:</span> <span class="token string">"巴黎"</span><span class="token punctuation">,</span>
        <span class="token string">"Italy"</span>  <span class="token punctuation">:</span> <span class="token string">"罗马"</span><span class="token punctuation">,</span>
        <span class="token string">"Japan"</span>  <span class="token punctuation">:</span> <span class="token string">"东京"</span><span class="token punctuation">,</span>
        <span class="token string">"India "</span> <span class="token punctuation">:</span> <span class="token string">"新德里"</span>
 <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"countryCapitalMap2="</span><span class="token punctuation">,</span>countryCapitalMap2<span class="token punctuation">)</span>
    <span class="token comment">/*使用键输出地图值 */</span>
    <span class="token keyword">for</span> country <span class="token operator">:=</span> <span class="token keyword">range</span> countryCapitalMap <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>country<span class="token punctuation">,</span> <span class="token string">"首都是"</span><span class="token punctuation">,</span> countryCapitalMap <span class="token punctuation">[</span>country<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*查看元素在集合中是否存在 */</span>
    capital<span class="token punctuation">,</span> ok <span class="token operator">:=</span> countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"American"</span> <span class="token punctuation">]</span> <span class="token comment">/*如果确定是真实的,则存在,否则不存在 */</span>
    <span class="token comment">/*fmt.Println(capital) */</span>
    <span class="token comment">/*fmt.Println(ok) */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"American 的首都是"</span><span class="token punctuation">,</span> capital<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"American 的首都不存在"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上实例运行结果为：</strong></p>
<p><img src="@source/markdown/images/q7Twm59g6DIbGNC.png" alt="image-20220112121316740"></p>
<p><strong>由此可见，使用map直接赋值是最简洁的，使用make定义是最常见的</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>countryCapitalMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"France"</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"巴黎"</span>
countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"Italy"</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"罗马"</span>
countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"Japan"</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"东京"</span>
countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"India "</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"新德里"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>countryCapitalMap2 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token string">"France"</span>  <span class="token punctuation">:</span> <span class="token string">"巴黎"</span><span class="token punctuation">,</span>
        <span class="token string">"Italy"</span>  <span class="token punctuation">:</span> <span class="token string">"罗马"</span><span class="token punctuation">,</span>
        <span class="token string">"Japan"</span>  <span class="token punctuation">:</span> <span class="token string">"东京"</span><span class="token punctuation">,</span>
        <span class="token string">"India "</span> <span class="token punctuation">:</span> <span class="token string">"新德里"</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🤖 第二种注意中间是用<code v-pre>:</code>,每句话结尾都需要用<code v-pre>,</code>分隔。</p>
<h3 id="map的增删改查操作" tabindex="-1"><a class="header-anchor" href="#map的增删改查操作" aria-hidden="true">#</a> map的增删改查操作</h3>
<h4 id="修改方法" tabindex="-1"><a class="header-anchor" href="#修改方法" aria-hidden="true">#</a> 修改方法</h4>
<p><strong>✍️ 因为key是唯一的，所以 可以直接修改和增加</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>key_1<span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"北京"</span>  <span class="token comment">//增加</span>
key_1<span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"上海"</span>  <span class="token comment">//修改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除使用delete函数" tabindex="-1"><a class="header-anchor" href="#删除使用delete函数" aria-hidden="true">#</a> 删除使用delete函数</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token function">delete</span><span class="token punctuation">(</span>key_1<span class="token punctuation">,</span><span class="token string">"a"</span><span class="token punctuation">)</span>     <span class="token comment">//删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>✍️ <strong>要注意的是当key不存在的时候，不会操作，也不会报错</strong></p>
<h4 id="map删除方法" tabindex="-1"><a class="header-anchor" href="#map删除方法" aria-hidden="true">#</a> map删除方法</h4>
<ol>
<li>遍历，逐个删除</li>
<li>make一个新的map，让之前的map回收</li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>key_1 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
	<span class="token string">"a"</span> <span class="token punctuation">:</span> <span class="token string">"32"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
key_1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token comment">//注意 不是：= ,不能使用不同类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map查找方法-如上" tabindex="-1"><a class="header-anchor" href="#map查找方法-如上" aria-hidden="true">#</a> map查找方法（如上）</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>val<span class="token punctuation">,</span>ok <span class="token operator">:=</span> key_1<span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> ok<span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"有a的值为%v\n"</span><span class="token punctuation">,</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">,</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"没有a这个数"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map遍历" tabindex="-1"><a class="header-anchor" href="#map遍历" aria-hidden="true">#</a> map遍历</h3>
<p>✍️<strong>map遍历一般使用for-range遍历，因为map一般是字符串</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    countryCapitalMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
    countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"France"</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"巴黎"</span>
    countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"Italy"</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"罗马"</span>
    countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"Japan"</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"东京"</span>
    countryCapitalMap <span class="token punctuation">[</span> <span class="token string">"India "</span> <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"新德里"</span>
<span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> countryCapitalMap<span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"k=%v,v=%v\n"</span><span class="token punctuation">,</span>k<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>                          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译如下：</p>
<p><img src="@source/markdown/images/rfVQIyJLGwEaHZs.png" alt="image-20220112124549243"></p>
<p><strong>由此可见不可以使用for循环，for循环下标都是由数字开始，而key不一定</strong></p>
<h4 id="双重遍历" tabindex="-1"><a class="header-anchor" href="#双重遍历" aria-hidden="true">#</a> 双重遍历</h4>
<p><img src="@source/markdown/images/NX4nLecDFYo2xKf.png" alt="image-20220112134524354"></p>
<p><img src="@source/markdown/images/M2FeAt85KDyqlES.png" alt="image-20220112134550034"></p>
<p><strong>由此可见使用了双层<code v-pre>for-range</code></strong></p>
<h3 id="map长度" tabindex="-1"><a class="header-anchor" href="#map长度" aria-hidden="true">#</a> map长度</h3>
<p><strong>✍️我们在统计数组长度的时候，使用了LEN，同样的可以使用在map上，统计有多少对key-value</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token function">len</span><span class="token punctuation">(</span>countryCapitalMap<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details class="custom-container details"><summary>💡简单的一个案例如下：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description: map数组
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 16:55:17
 * @FilePath: \code\go-super\15-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//元素为map类型切片</span>
	<span class="token keyword">var</span> userinfo <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo[0]="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token comment">//长度</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"len(userinfo)="</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>userinfo<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">//容量</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"cap(userinfo)="</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>userinfo<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Running] go run "d:\文档\最近的\awesome-golang\docs\code\go-super\15-main.go"
userinfo= [map[] map[] map[]]
userinfo[0]= map[]
len(userinfo)= 3
cap(userinfo)= 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="custom-container details"><summary>💡map+数组 的 简单的一个案例如下：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description: map数组
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-24 17:26:08
 * @FilePath: \code\go-super\15-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//元素为map类型切片</span>
	<span class="token keyword">var</span> userinfo <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo[0]="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token comment">//长度</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"len(userinfo)="</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>userinfo<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">//容量</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"cap(userinfo)="</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>userinfo<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">//赋值</span>
	<span class="token keyword">if</span> userinfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">//判断是否为nil</span>
		userinfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
		userinfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"admin"</span>
		userinfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"password"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"123456"</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo[0]="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">)</span>

	<span class="token keyword">if</span> userinfo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">//判断是否为nil</span>
		userinfo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
		userinfo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"admin1"</span>
		userinfo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"password"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"1234561"</span>

	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo[1]="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">)</span>

	<span class="token keyword">if</span> userinfo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">//判断是否为nil</span>
		userinfo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
		userinfo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"username"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"admin2"</span>
		userinfo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"password"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"1234562"</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo[2]="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"userinfo="</span><span class="token punctuation">,</span> userinfo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\15">\15</span>-main.go"</span>
<span class="token assign-left variable">userinfo</span><span class="token operator">=</span> <span class="token punctuation">[</span>map<span class="token punctuation">[</span><span class="token punctuation">]</span> map<span class="token punctuation">[</span><span class="token punctuation">]</span> map<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
userinfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span> map<span class="token punctuation">[</span><span class="token punctuation">]</span>
len<span class="token punctuation">(</span>userinfo<span class="token punctuation">)</span><span class="token operator">=</span> <span class="token number">3</span>
cap<span class="token punctuation">(</span>userinfo<span class="token punctuation">)</span><span class="token operator">=</span> <span class="token number">10</span>
userinfo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span> map<span class="token punctuation">[</span>password:123456 username:admin<span class="token punctuation">]</span>
<span class="token assign-left variable">userinfo</span><span class="token operator">=</span> <span class="token punctuation">[</span>map<span class="token punctuation">[</span>password:123456 username:admin<span class="token punctuation">]</span> map<span class="token punctuation">[</span><span class="token punctuation">]</span> map<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
userinfo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span> map<span class="token punctuation">[</span>password:1234561 username:admin1<span class="token punctuation">]</span>
<span class="token assign-left variable">userinfo</span><span class="token operator">=</span> <span class="token punctuation">[</span>map<span class="token punctuation">[</span>password:123456 username:admin<span class="token punctuation">]</span> map<span class="token punctuation">[</span>password:1234561 username:admin1<span class="token punctuation">]</span> map<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
userinfo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span> map<span class="token punctuation">[</span>password:1234562 username:admin2<span class="token punctuation">]</span>
<span class="token assign-left variable">userinfo</span><span class="token operator">=</span> <span class="token punctuation">[</span>map<span class="token punctuation">[</span>password:123456 username:admin<span class="token punctuation">]</span> map<span class="token punctuation">[</span>password:1234561 username:admin1<span class="token punctuation">]</span> map<span class="token punctuation">[</span>password:1234562 username:admin2<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>map排序补充：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//切片遍历</span>
<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> userinfo <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0 map[password:123456 username:admin]
1 map[password:1234561 username:admin1]
2 map[password:1234562 username:admin2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="map切片" tabindex="-1"><a class="header-anchor" href="#map切片" aria-hidden="true">#</a> map切片</h3>
<p><strong>切片的数据类型如果是map，则我们称之为slice of map切片</strong></p>
<p>使用<code v-pre>map</code>来记录monster的信息name和age，也就是说一个monster对应一个map，并且妖怪的个数可以动态增加。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//定义声明一个map切片</span>
    <span class="token keyword">var</span> monster <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    monster <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token comment">//增加一个妖怪的信息</span>
    <span class="token keyword">if</span> monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"牛魔王"</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"500"</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"home"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"wuhan"</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>monster<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<p><img src="@source/markdown/images/O7p3YvtGxBUg6zd.png" alt="image-20220112140528858"></p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p><strong>注意：上面make了两次，第一次是切片的本身make一次，第二次是切片对应的数据类型也需要make</strong></p>
</div>
<p><strong>继续添加妖怪信息</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//定义声明一个map切片</span>
    <span class="token keyword">var</span> monster <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    monster <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token comment">//增加一个妖怪的信息</span>
    <span class="token keyword">if</span> monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"牛魔王"</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"500"</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"home"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"wuhan"</span>
    <span class="token punctuation">}</span>
     <span class="token keyword">if</span> monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
        monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"白骨精"</span>
        monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"400"</span>
        monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"home"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"北京"</span>
    <span class="token punctuation">}</span>
     <span class="token keyword">if</span> monster<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        monster<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
        monster<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"张三"</span>
        monster<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"600"</span>
        monster<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"home"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"曹县"</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>monster<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<p><img src="@source/markdown/images/1nHhDW5PaTejcOE.png" alt="image-20220112141229515"></p>
<p>编译出错，<code v-pre>monster = make([]map[string]string,2)</code>越界，该为3即可，那有没有办法可以让map动态呢</p>
<p><strong>这时候需要使用到切片的append函数，可以动态的增加，就不需要给界限</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//定义声明一个map切片</span>
    <span class="token keyword">var</span> monster <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    monster <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token comment">//增加一个妖怪的信息</span>
    <span class="token keyword">if</span> monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"牛魔王"</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"500"</span>
        monster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"home"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"wuhan"</span>
    <span class="token punctuation">}</span>
     <span class="token keyword">if</span> monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
        monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"白骨精"</span>
        monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"400"</span>
        monster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"home"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"北京"</span>
    <span class="token punctuation">}</span>
	newMonster <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
		<span class="token string">"name"</span> <span class="token punctuation">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
    	<span class="token string">"age"</span> <span class="token punctuation">:</span> <span class="token string">"600"</span><span class="token punctuation">,</span>
    	<span class="token string">"home"</span> <span class="token punctuation">:</span> <span class="token string">"曹县"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
    monster <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>monster<span class="token punctuation">,</span>newMonster<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>monster<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/6hiaeLIZwn8bFu2.png" alt="image-20220112141848142"></p>
<p>🐶 添加成功！</p>
<h3 id="map排序" tabindex="-1"><a class="header-anchor" href="#map排序" aria-hidden="true">#</a> map排序</h3>
<details class="custom-container details"><summary>map是无序的~~</summary>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:map
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:41:04
 * @FilePath: \code\go-super\43-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://cubxxw.com
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sort"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//定义一个map</span>
	<span class="token keyword">var</span> myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	<span class="token comment">//初始化map</span>
	myMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	<span class="token comment">//赋值</span>
	myMap<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"北京"</span>
	myMap<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"上海"</span>
	myMap<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"广州"</span>
	myMap<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"深圳"</span>
	myMap<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"杭州"</span>
	myMap<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"成都"</span>
	myMap<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"重庆"</span>
	myMap<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"武汉"</span>
	myMap<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"西安"</span>
	myMap<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"南京"</span>
	myMap<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"苏州"</span>
	myMap<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"天津"</span>

	<span class="token comment">//遍历map   -- 这个是无序的~</span>
	<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> myMap <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//有序遍历map</span>
	<span class="token comment">//定义一个切片，用来存放map的key</span>
	<span class="token keyword">var</span> keys <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	<span class="token comment">//遍历map，将key存放到切片中</span>
	<span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token keyword">range</span> myMap <span class="token punctuation">{</span>
		keys <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//对切片进行排序</span>
	sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span>
	<span class="token comment">//遍历切片，按照key的顺序遍历map</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> k <span class="token operator">:=</span> <span class="token keyword">range</span> keys <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> myMap<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">"d:\文档\最近的<span class="token entity" title="\a">\a</span>wesome-golang\docs<span class="token entity" title="\c">\c</span>ode\go-super<span class="token entity" title="\43">\43</span>-main.go"</span>
<span class="token number">12</span> 天津
<span class="token number">4</span> 深圳
<span class="token number">6</span> 成都
<span class="token number">10</span> 南京
<span class="token number">5</span> 杭州
<span class="token number">7</span> 重庆
<span class="token number">8</span> 武汉
<span class="token number">9</span> 西安
<span class="token number">11</span> 苏州
<span class="token number">1</span> 北京
<span class="token number">2</span> 上海
<span class="token number">3</span> 广州
<span class="token number">1</span> 北京
<span class="token number">2</span> 上海
<span class="token number">3</span> 广州
<span class="token number">4</span> 深圳
<span class="token number">5</span> 杭州
<span class="token number">6</span> 成都
<span class="token number">7</span> 重庆
<span class="token number">8</span> 武汉
<span class="token number">9</span> 西安
<span class="token number">10</span> 南京
<span class="token number">11</span> 苏州
<span class="token number">12</span> 天津
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    map1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span>，<span class="token number">4</span><span class="token punctuation">)</span>
    map1<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    map1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1543</span>
    map1<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">456</span>
    map1<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/bMlHsvLcPEtIiZF.png" alt="image-20220112142806132"></p>
<p>现在的map是有序的，是按照key的大小来进行排序的</p>
<p><strong>fun Ints包</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Ints</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ints函数将a排序为递增排序</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">"sort"</span>
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	sort<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span>        <span class="token comment">//将keys排序</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map的使用细节" tabindex="-1"><a class="header-anchor" href="#map的使用细节" aria-hidden="true">#</a> map的使用细节</h3>
<ol>
<li>
<p><strong>map是引用类型(数组是值类型）</strong>，遵守类型传递机制，在一个函数中接收map，修改后，会直接修改原来的map</p>
</li>
<li>
<p>map的容量达到后，再想map添加元素，会自动扩容，并不会发生panic，也就是map能动态增长键值对</p>
</li>
<li>
<p>map的value也经常使用<strong>struct类型</strong>，跟适合管理复杂的数据</p>
<blockquote>
<ol>
<li>map的key为学生的学号，是唯一的</li>
<li>map的value为结构体，包含学生的名字，年龄，地址</li>
<li>创建两个学生  -- 在结构体Student{<strong>信息</strong>}</li>
</ol>
</blockquote>
</li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> <span class="token comment">/*************************************************************************   
     > File Name: aaaa.go
     > Mail: 3293172751nss@gmail.com 
     > Created Time: Wed 12 Jan 2022 02:44:06 PM CST
  ************************************************************************/</span>
  <span class="token keyword">package</span> main
 <span class="token keyword">import</span> <span class="token string">"fmt"</span>
 
 <span class="token comment">//定义一个学生结构体</span>
 <span class="token keyword">type</span> Student <span class="token keyword">struct</span><span class="token punctuation">{</span>
     Name <span class="token builtin">string</span>
     Age <span class="token builtin">int</span>
     Addre <span class="token builtin">string</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     stu <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>Student<span class="token punctuation">)</span>
     <span class="token comment">//创建两个学生  -- 在结构体Student{信息}</span>
     s1 <span class="token operator">:=</span> Student<span class="token punctuation">{</span><span class="token string">"tom"</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token string">"北京"</span><span class="token punctuation">}</span>  
     stu<span class="token punctuation">[</span><span class="token string">"n01"</span><span class="token punctuation">]</span> <span class="token operator">=</span> s1
     s2 <span class="token operator">:=</span> Student<span class="token punctuation">{</span><span class="token string">"bot"</span><span class="token punctuation">,</span><span class="token number">29</span><span class="token punctuation">,</span><span class="token string">"上海"</span><span class="token punctuation">}</span>
     stu<span class="token punctuation">[</span><span class="token string">"n01"</span><span class="token punctuation">]</span> <span class="token operator">=</span> s2
     fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/Cj2WeDSEmQRH5Us.png" alt="image-20220112153120800"></p>
<p><strong>遍历每个学生的信息</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> stu<span class="token punctuation">{</span>   <span class="token comment">//k是key，v是value</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"学生的编号是%v \n"</span><span class="token punctuation">,</span>k<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"学生的姓名是%v \n"</span><span class="token punctuation">,</span>v<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"学生的年龄是%v \n"</span><span class="token punctuation">,</span>v<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"学生的地址是%v \n"</span><span class="token punctuation">,</span>v<span class="token punctuation">.</span>Addre<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例" aria-hidden="true">#</a> 综合案例</h4>
<blockquote>
<p>1)使用 map[string]map[string]sting 的map类型
2)key: 表示用户名，是唯一的，不可以重复
3)如果某个用户名存在，就将其密码修改&quot;888888&quot;，如果不存在就增加这个用户信息,
（包括昵称nickname 和 密码pwd）。
4)编写一个函数 modifyUser(users map[string]map[string]sting, name string) 完成上述功能</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">modifyUser</span><span class="token punctuation">(</span>users <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//判断users中是否有name,前面有说判断方法</span>
	<span class="token comment">//v , ok := users[name]</span>
	<span class="token keyword">if</span> users<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>   
		<span class="token comment">//有这个用户</span>
		users<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"pwd"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"888888"</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">//没有这个用户   ---  创建用户</span>
      	<span class="token comment">/*注意，创建用户的时候需要再make一次*/</span>
		users<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
		users<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"pwd"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"888888"</span>
        users<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"nickname"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"name:"</span> <span class="token operator">+</span> name 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	users <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token comment">/*key为string类型，value为map[string]string类型*/</span>
	<span class="token comment">//先添加一个用户smith   要先map</span>
    users<span class="token punctuation">[</span><span class="token string">"smith"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	users<span class="token punctuation">[</span><span class="token string">"smith"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"pwd"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"999999"</span>
	users<span class="token punctuation">[</span><span class="token string">"smith"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"小花猫"</span>

	<span class="token function">modifyUser</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">"tom"</span><span class="token punctuation">)</span>
	<span class="token function">modifyUser</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">"mary"</span><span class="token punctuation">)</span>
	<span class="token function">modifyUser</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">"smith"</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/OcRP1wdzm3H9rgC.png" alt="image-20220112160839339"></p>
<h2 id="封装排序的方法" tabindex="-1"><a class="header-anchor" href="#封装排序的方法" aria-hidden="true">#</a> 封装排序的方法</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>对排序进行封装起来，然后对切片进行排序操作</p>
<p>💡简单的一个案例如下：</p>
</div>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '7.md' style='float:left'>⬆️上一节🔗</a><a href = '9.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


