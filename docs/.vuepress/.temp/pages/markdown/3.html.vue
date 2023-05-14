<template><div><h1 id="指针、运算符和位运算" tabindex="-1"><a class="header-anchor" href="#指针、运算符和位运算" aria-hidden="true">#</a> 指针、运算符和位运算</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-指针">1.指针</router-link><ul><li><router-link to="#_1-1基本介绍">1.1基本介绍</router-link></li><li><router-link to="#_1-2-指针变量">1.2 指针变量</router-link></li><li><router-link to="#_1-3-指针的使用流程">1.3 指针的使用流程</router-link></li><li><router-link to="#_1-4-go-空指针">1.4 Go 空指针</router-link></li><li><router-link to="#_1-5指针变量的修改">1.5指针变量的修改</router-link></li></ul></li><li><router-link to="#_2-值类型和引用类型">2. 值类型和引用类型</router-link><ul><li><router-link to="#_2-1-区别-使用">2.1 区别/使用：</router-link></li></ul></li><li><router-link to="#_3-标识符的命名规范">3. 标识符的命名规范</router-link><ul><li><router-link to="#_3-1-标识符的命名规范">3.1 标识符的命名规范</router-link></li><li><router-link to="#_3-2-标识符命名注意事项">3.2 标识符命名注意事项</router-link></li></ul></li><li><router-link to="#_4-go算数运算符">4. Go算数运算符</router-link><ul><li><router-link to="#细节">细节：</router-link></li></ul></li><li><router-link to="#_5-go关系运算符">5. Go关系运算符</router-link></li><li><router-link to="#_6-逻辑运算符">6. 逻辑运算符</router-link><ul><li><router-link to="#_6-1-实例">6.1 实例</router-link></li></ul></li><li><router-link to="#_8-其他运算符">8. 其他运算符</router-link><ul><li><router-link to="#_8-2-golang三元运算符的实现使用if判断">8.2 Golang三元运算符的实现使用if判断</router-link></li></ul></li><li><router-link to="#_8-键盘输入">8. 键盘输入</router-link><ul><li><router-link to="#_8-1步骤">8.1步骤：</router-link></li></ul></li><li><router-link to="#_9-进制">9. 进制</router-link><ul><li><router-link to="#_9-1-基本的输出方式">9.1 基本的输出方式</router-link></li><li><router-link to="#_9-2-补充python中进制的转换">9.2 补充python中进制的转换</router-link></li></ul></li><li><router-link to="#_10-位运算">10 .位运算</router-link><ul><li><router-link to="#_10-1-实例">10.1 实例</router-link></li><li><router-link to="#_10-2-原码、补码、反码">10.2 原码、补码、反码</router-link></li><li><router-link to="#_10-3-golang-中的位运算">10.3 golang 中的位运算</router-link></li></ul></li><li><router-link to="#_11-流程控制">11. 流程控制</router-link><ul><li><router-link to="#_11-1-go分支控制if-else">11.1 Go分支控制if -else</router-link></li><li><router-link to="#_11-2-补充-python分支控制if-else">11.2 补充：python分支控制if -else</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<h2 id="_1-指针" tabindex="-1"><a class="header-anchor" href="#_1-指针" aria-hidden="true">#</a> 1.指针</h2>
<h3 id="_1-1基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-1基本介绍" aria-hidden="true">#</a> 1.1基本介绍</h3>
<ol>
<li>基本数据类型，变量存的就是值，也叫值类型</li>
</ol>
<p>​	Go 语言的取地址符是 <code v-pre>&amp;</code>，放到一个变量前使用就会返回相应变量的内存地址。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> <span class="token keyword">package</span> main
 <span class="token keyword">import</span> <span class="token string">"fmt"</span>
 
 <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">var</span> i <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>    
     <span class="token function">Plantln</span><span class="token punctuation">(</span><span class="token string">"i的地址是："</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>i<span class="token punctuation">)</span>
     <span class="token comment">//熟悉C/C++知道&amp;也是取地址符</span>
 <span class="token punctuation">}</span>                            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/01/06/O7tvcuXbRxornqQ.png" alt="image-20220106113626488"></p>
<p><strong>在内存的情况：</strong></p>
<p><img src="@source/markdown/images/BmNDA587sZeH3Kw.png" alt="image-20220106113808329"></p>
<h3 id="_1-2-指针变量" tabindex="-1"><a class="header-anchor" href="#_1-2-指针变量" aria-hidden="true">#</a> 1.2 指针变量</h3>
<p>​	<strong>指针变量指向的是一个地址，这个地址指向的空间才是值。</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var ptr *int = &amp;i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解释：</strong></p>
<ol>
<li>
<p><strong>ptr是一个指针变量，类型是一个*int类型</strong>,==是一个地址==</p>
</li>
<li>
<p>ptr本身的值是&amp;i</p>
</li>
</ol>
<img src="@source/markdown/images/NseqWk93XGjx6EI.png" alt="image-20220106114857862" style="zoom:150%;" />
<h3 id="_1-3-指针的使用流程" tabindex="-1"><a class="header-anchor" href="#_1-3-指针的使用流程" aria-hidden="true">#</a> 1.3 指针的使用流程</h3>
<p>✏️指针的使用流程如下：</p>
<ul>
<li>定义指针变量。</li>
<li>为指针变量赋值。</li>
<li>访问指针变量中指向地址的值。</li>
</ul>
<p>⚠️<strong>在指针类型前面加上 <code v-pre>*</code> 号（前缀）来获取指针所指向的内容。</strong></p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token builtin">int</span><span class="token operator">=</span> <span class="token number">20</span>  <span class="token comment">// 声明实际变量 </span>
  <span class="token keyword">var</span> ip <span class="token operator">*</span><span class="token builtin">int</span>     <span class="token comment">/* 声明指针变量 */</span>

  ip <span class="token operator">=</span> <span class="token operator">&amp;</span>a  <span class="token comment">/* 指针变量的存储地址 */</span>

  <span class="token comment">//&amp;a和ip是一样的，都是地址</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a 变量的地址是: %x\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a  <span class="token punctuation">)</span>

  <span class="token comment">// 指针变量的存储地址 </span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"ip 变量储存的指针地址: %x\n"</span><span class="token punctuation">,</span> ip <span class="token punctuation">)</span>

  <span class="token comment">// 使用指针访问值 </span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"*ip 变量的值: %d\n"</span><span class="token punctuation">,</span> <span class="token operator">*</span>ip <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例执行输出结果为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>a 变量的地址是: 20818a220  <span class="token comment">#不可预料的地址</span>
<span class="token function">ip</span> 变量储存的指针地址: 20818a220
*ip 变量的值: <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-go-空指针" tabindex="-1"><a class="header-anchor" href="#_1-4-go-空指针" aria-hidden="true">#</a> 1.4 Go 空指针</h3>
<p><strong>当一个指针被定义后没有分配到任何变量时，它的值为 <code v-pre>nil</code>。</strong></p>
<ul>
<li><code v-pre>nil</code>  指针也称为空指针。</li>
<li><code v-pre>nil</code> 在概念上和其它语言的<code v-pre>null</code>、<code v-pre>None</code>、<code v-pre>nil</code>、<code v-pre>NULL</code>一样，都指代零值或空值。</li>
<li>一个指针变量通常缩写为 ptr。</li>
</ul>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ptr <span class="token operator">*</span><span class="token builtin">int</span>

  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"ptr 的值为 : %x\n"</span><span class="token punctuation">,</span> ptr  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ptr 的值为 : 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>空指针判断：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span><span class="token punctuation">(</span>ptr <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>     <span class="token comment">/* ptr 不是空指针 */</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>ptr <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>     <span class="token comment">/* ptr 是空指针 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5指针变量的修改" tabindex="-1"><a class="header-anchor" href="#_1-5指针变量的修改" aria-hidden="true">#</a> 1.5指针变量的修改</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>num <span class="token operator">:=</span> <span class="token number">9</span>
<span class="token keyword">var</span> ptr <span class="token operator">*</span><span class="token builtin">int</span>
ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>num
<span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token number">10</span>      <span class="token comment">//此时会将num的值修改为1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❤️ 由此可见，golang 相对C语言和c++的指针，相对简单而且容易理解</p>
<h4 id="小方法" tabindex="-1"><a class="header-anchor" href="#小方法" aria-hidden="true">#</a> 小方法：</h4>
<p>当我们不用包的时候，可以在前面加一个<code v-pre>_</code>表示忽略,但是如果你没用到也没有忽略的化，那程序就是报错（前面所写go特性）</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token boolean">_</span> <span class="token string">"fmt"</span>
	<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-值类型和引用类型" tabindex="-1"><a class="header-anchor" href="#_2-值类型和引用类型" aria-hidden="true">#</a> 2. 值类型和引用类型</h2>
<ol>
<li>**值类型：都有对应的指针类型，形式为  <em>数据形式，比如int 的对应的指针就是 <em>int ,* float32是float对应的指针类型</em></em></li>
<li><strong>值类型包括：基本数据类型 int系统，float系列，bool,string,struct和结构体。</strong></li>
<li><strong>引用类型：指针，slice切片，map，管道chan,interface等都是</strong></li>
</ol>
<h3 id="_2-1-区别-使用" tabindex="-1"><a class="header-anchor" href="#_2-1-区别-使用" aria-hidden="true">#</a> 2.1 区别/使用：</h3>
<p><strong>值类型：变量可以之间存储值，内存通常在栈中分配</strong></p>
<p><strong>引用类型：变量存储的是一个地址，这个地址对应的空间才是真正存储数据（值），内存通常在堆上分配，当没有任何变量引用这个地址时，这个地址对应的数据空间就成为一个垃圾，由GC回收</strong></p>
<p><img src="@source/markdown/images/V8jgpeJqSXELMfr.png" alt="image-20220106135200888"></p>
<p>eng：内存是由栈区和堆区组成</p>
<h2 id="_3-标识符的命名规范" tabindex="-1"><a class="header-anchor" href="#_3-标识符的命名规范" aria-hidden="true">#</a> 3. 标识符的命名规范</h2>
<ol>
<li>Golang对各种变量、方法、函数等命名时使用的字符序列称之为标识符</li>
<li>凡是自己可以其名字的地方都叫标识符</li>
</ol>
<h3 id="_3-1-标识符的命名规范" tabindex="-1"><a class="header-anchor" href="#_3-1-标识符的命名规范" aria-hidden="true">#</a> 3.1 标识符的命名规范</h3>
<ol>
<li>
<p>二十六个字母组成</p>
</li>
<li>
<p>数字不能开头</p>
</li>
<li>
<p>Golang<strong>严格区分大小写</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> num <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> Num <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
<span class="token comment">//num 和 Num是不同的变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>标识符<strong>不能有空格，但是可以用<code v-pre>__</code></strong></p>
</li>
<li>
<p><code v-pre>“__&quot;</code> 本身在Golang中是一个特殊的标识符，表示</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> <span class="token boolean">_</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">40</span>  <span class="token comment">//错误</span>
<span class="token keyword">var</span> a_ai <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">40</span>   <span class="token comment">//正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>不能使用系统保留的关键字作为标识符（前面讲过25个标识符）</p>
</li>
</ol>
<h3 id="_3-2-标识符命名注意事项" tabindex="-1"><a class="header-anchor" href="#_3-2-标识符命名注意事项" aria-hidden="true">#</a> 3.2 标识符命名注意事项</h3>
<ol>
<li>
<p>包名：Golang 每一个go文件 都归属于一个包，包名应该保持和目录尽量一致</p>
</li>
<li>
<p>变量名、函数名、常量名：采用驼峰法</p>
<ol>
<li><strong>第一个字母小写，第二个字母大写</strong></li>
<li>var goodPrice float32 = 1234.234</li>
</ol>
</li>
<li>
<p><strong>==变量名、函数名、常量名首字母大写，则可以被其他包访问； 如果首字母小写，则只能在本包中使用==（注意❤️ -- 参考其他语言：理解为首字母大写是公开的（pubilc)，首字母小写是私有的（private））</strong></p>
<p>​	<img src="@source/markdown/images/f7Ag5taW3hQlrdT.png" alt="image-20220106142230729"></p>
</li>
</ol>
<h2 id="_4-go算数运算符" tabindex="-1"><a class="header-anchor" href="#_4-go算数运算符" aria-hidden="true">#</a> 4. Go算数运算符</h2>
<p>下表列出了所有Go语言的算术运算符。假定 A 值为 10，B 值为 20。</p>
<table>
<thead>
<tr>
<th style="text-align:center">运算符</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">实例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">+</td>
<td style="text-align:center">相加</td>
<td style="text-align:center">A + B 输出结果 30</td>
</tr>
<tr>
<td style="text-align:center">-</td>
<td style="text-align:center">相减</td>
<td style="text-align:center">A - B 输出结果 -10</td>
</tr>
<tr>
<td style="text-align:center">*</td>
<td style="text-align:center">相乘</td>
<td style="text-align:center">A * B 输出结果 200</td>
</tr>
<tr>
<td style="text-align:center">/</td>
<td style="text-align:center">相除</td>
<td style="text-align:center">B / A 输出结果 2</td>
</tr>
<tr>
<td style="text-align:center">%</td>
<td style="text-align:center">求余</td>
<td style="text-align:center">B % A 输出结果 0</td>
</tr>
<tr>
<td style="text-align:center">++</td>
<td style="text-align:center">自增</td>
<td style="text-align:center">A++ 输出结果 11</td>
</tr>
<tr>
<td style="text-align:center">--</td>
<td style="text-align:center">自减</td>
<td style="text-align:center">A-- 输出结果 9</td>
</tr>
</tbody>
</table>
<p>和其他语言相似，不举例。</p>
<h3 id="细节" tabindex="-1"><a class="header-anchor" href="#细节" aria-hidden="true">#</a> 细节：</h3>
<ol>
<li>
<p><strong>小数问题：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>x := 19/5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<p>​		==此时x=3 ，向下取整==</p>
<ol start="2">
<li>
<p><strong>==在Golang，++和--只能独立使用==</strong>，强制语法统一性和简洁性</p>
</li>
<li>
<p><strong>在Golang中，++ 或者--只能写在变量后面，不能写在前面</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span><span class="token number">5</span>
a <span class="token operator">=</span> i<span class="token operator">++</span> <span class="token comment">//错误，只能独立使用</span>
a <span class="token operator">=</span> i<span class="token operator">--</span> <span class="token comment">//错误</span>
a<span class="token operator">++</span>  <span class="token comment">//正确</span>
<span class="token operator">++</span>a  <span class="token comment">//错误</span>

<span class="token keyword">if</span> i<span class="token operator">++</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">{</span>   <span class="token comment">//错误，在if语句中，非独立使用的</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"ok"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_5-go关系运算符" tabindex="-1"><a class="header-anchor" href="#_5-go关系运算符" aria-hidden="true">#</a> 5. Go关系运算符</h2>
<p><strong>关系运算符也称之为比较运算符，常用于流程控制</strong></p>
<p><strong>结果是bool类型，要么是true要么是false</strong></p>
<p>下表列出了所有Go语言的关系运算符。假定 A 值为 10，B 值为 20。</p>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">实例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">==</td>
<td style="text-align:left">检查两个值是否相等，如果相等返回 True 否则返回 False。</td>
<td style="text-align:left">(A == B) 为 False</td>
</tr>
<tr>
<td style="text-align:left">!=</td>
<td style="text-align:left">检查两个值是否不相等，如果不相等返回 True 否则返回 False。</td>
<td style="text-align:left">(A != B) 为 True</td>
</tr>
<tr>
<td style="text-align:left">&gt;</td>
<td style="text-align:left">检查左边值是否大于右边值，如果是返回 True 否则返回 False。</td>
<td style="text-align:left">(A &gt; B) 为 False</td>
</tr>
<tr>
<td style="text-align:left">&lt;</td>
<td style="text-align:left">检查左边值是否小于右边值，如果是返回 True 否则返回 False。</td>
<td style="text-align:left">(A &lt; B) 为 True</td>
</tr>
<tr>
<td style="text-align:left">&gt;=</td>
<td style="text-align:left">检查左边值是否大于等于右边值，如果是返回 True 否则返回 False。</td>
<td style="text-align:left">(A &gt;= B) 为 False</td>
</tr>
<tr>
<td style="text-align:left">&lt;=</td>
<td style="text-align:left">检查左边值是否小于等于右边值，如果是返回 True 否则返回 False。</td>
<td style="text-align:left">(A &lt;= B) 为 True</td>
</tr>
</tbody>
</table>
<h2 id="_6-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_6-逻辑运算符" aria-hidden="true">#</a> 6. 逻辑运算符</h2>
<p>表列出了所有Go语言的逻辑运算符。假定 A 值为 True，B 值为 False。</p>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">描述</th>
<th style="text-align:center">实例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">&amp;&amp;</td>
<td style="text-align:left">逻辑 AND 运算符。 如果两边的操作数都是 True，则条件 True，否则为 False。</td>
<td style="text-align:center">(A &amp;&amp; B) 为 False</td>
</tr>
<tr>
<td style="text-align:left">||</td>
<td style="text-align:left">逻辑 OR 运算符。 如果两边的操作数有一个 True，则条件 True，否则为 False。</td>
<td style="text-align:center">(A || B) 为 True</td>
</tr>
<tr>
<td style="text-align:left">!</td>
<td style="text-align:left">逻辑 NOT 运算符。 如果条件为 True，则逻辑 NOT 条件 False，否则为 True。</td>
<td style="text-align:center">!(A &amp;&amp; B) 为 True</td>
</tr>
</tbody>
</table>
<p>和其他语言都差不多🐶🐶🐶</p>
<p><strong>同样的，为<code v-pre>||</code>的时候，当左边的为真，就不看右边的了。当为<code v-pre>&amp;&amp;</code>时候，左边为假，那么右边也不需要看了</strong></p>
<h3 id="_6-1-实例" tabindex="-1"><a class="header-anchor" href="#_6-1-实例" aria-hidden="true">#</a> 6.1 实例</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> a <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">true</span>
   <span class="token keyword">var</span> b <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">false</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span> a <span class="token operator">&amp;&amp;</span> b <span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第一行 - 条件为 true\n"</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>   
   <span class="token keyword">if</span> <span class="token punctuation">(</span> a <span class="token operator">||</span> b <span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第二行 - 条件为 true\n"</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>   
   <span class="token comment">/* 修改 a 和 b 的值 */</span>
   a <span class="token operator">=</span> <span class="token boolean">false</span>
   b <span class="token operator">=</span> <span class="token boolean">true</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span> a <span class="token operator">&amp;&amp;</span> b <span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第三行 - 条件为 true\n"</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第三行 - 条件为 false\n"</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>  o'o 
   <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span><span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第四行 - 条件为 true\n"</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p>
<p><img src="@source/markdown/images/JRenh2MZs5NaUGz.png" alt="image-20220106145850228"></p>
<h2 id="_8-其他运算符" tabindex="-1"><a class="header-anchor" href="#_8-其他运算符" aria-hidden="true">#</a> 8. 其他运算符</h2>
<blockquote>
<p>❤️说明：Go语言明确说明不支持三元运算符</p>
<p><strong>其它语言的三元运算符</strong>：</p>
<p><strong>语法为：</strong><code v-pre>条件表达式?表达式1:表达式2</code>。</p>
<p>**说明：**问号前面的位置是判断的条件，判断结果为<a href="https://baike.baidu.com/item/bool" target="_blank" rel="noopener noreferrer">bool<ExternalLinkIcon/></a>型，为true时调用表达式1，为false时调用表达式2。</p>
<p><strong>其逻辑为</strong>：“如果条件表达式成立或者满足则执行表达式1，否则执行第二个。”常用在设置默认值,例如某个值不一定存在,则判断这个值是否存在,不存在给默认值(表达式2)。</p>
</blockquote>
<h3 id="_8-2-golang三元运算符的实现使用if判断" tabindex="-1"><a class="header-anchor" href="#_8-2-golang三元运算符的实现使用if判断" aria-hidden="true">#</a> 8.2 Golang三元运算符的实现使用if判断</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>i <span class="token operator">:=</span> <span class="token number">10</span>
j <span class="token operator">:=</span> <span class="token number">20</span>
<span class="token keyword">if</span> i<span class="token operator">></span>j<span class="token punctuation">{</span>
	n <span class="token operator">:=</span> i
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
	n <span class="token operator">:=</span> j
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Paarintln</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>

<span class="token comment">/*传统编程语言实现：
n = i > j ? i : j
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-键盘输入" tabindex="-1"><a class="header-anchor" href="#_8-键盘输入" aria-hidden="true">#</a> 8. 键盘输入</h2>
<p>​	<strong>参考第二天的最后笔记</strong></p>
<h3 id="_8-1步骤" tabindex="-1"><a class="header-anchor" href="#_8-1步骤" aria-hidden="true">#</a> 8.1步骤：</h3>
<ol>
<li><strong>导入fmt包</strong></li>
<li><strong>调用fmt包的fmt.Scanln() 或者 fmt.Scanf()</strong></li>
</ol>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
fun <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> name <span class="token builtin">string</span>
	<span class="token keyword">var</span> age <span class="token builtin">int</span>
	<span class="token keyword">var</span> mf <span class="token builtin">bool</span>
	
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>请输入姓名，年龄，性别<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>age<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mf<span class="token punctuation">)</span>
	<span class="token comment">//方式二</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanf</span><span class="token punctuation">(</span><span class="token string">"%s %d %f %t"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span><span class="token operator">&amp;</span>age<span class="token punctuation">,</span><span class="token operator">&amp;</span>mf<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-进制" tabindex="-1"><a class="header-anchor" href="#_9-进制" aria-hidden="true">#</a> 9. 进制</h2>
<h3 id="_9-1-基本的输出方式" tabindex="-1"><a class="header-anchor" href="#_9-1-基本的输出方式" aria-hidden="true">#</a> 9.1 基本的输出方式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>%b	表示为二进制
%c	该值对应的unicode码值
%d	表示为十进制
%o	表示为八进制
%q	该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示
%x	表示为十六进制，使用a-f
%X	表示为十六进制，使用A-F
%U	表示为Unicode格式：U+1234，等价于"U+%04X"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-补充python中进制的转换" tabindex="-1"><a class="header-anchor" href="#_9-2-补充python中进制的转换" aria-hidden="true">#</a> 9.2 补充python中进制的转换</h3>
<p><strong>在ipython模式下的进制转化是我认为最方便的一种</strong></p>
<ul>
<li>10进制转16进制：<code v-pre>hex(10)</code></li>
<li>10进制转8进制：<code v-pre>oct(10)</code></li>
<li>10进制转2进制：<code v-pre>bin(10)</code></li>
<li>16进制转10进制：<code v-pre>int('0x5',16)</code></li>
<li>8进制转10进制：<code v-pre>int('0o5',8)</code></li>
<li>2进制转10进制：<code v-pre>int('0b1100',2)</code></li>
</ul>
<h2 id="_10-位运算" tabindex="-1"><a class="header-anchor" href="#_10-位运算" aria-hidden="true">#</a> 10 .位运算</h2>
<p><strong>位运算符对整数在内存中的二进制位进行操作。</strong></p>
<p>下表列出了位运算符 &amp;, |, 和 ^ 的计算：</p>
<table>
<thead>
<tr>
<th style="text-align:center">p</th>
<th style="text-align:center">q</th>
<th style="text-align:center">p &amp; q</th>
<th style="text-align:center">p | q</th>
<th style="text-align:center">p ^ q</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">0</td>
<td style="text-align:center">0</td>
<td style="text-align:center">0</td>
<td style="text-align:center">0</td>
<td style="text-align:center">0</td>
</tr>
<tr>
<td style="text-align:center">0</td>
<td style="text-align:center">1</td>
<td style="text-align:center">0</td>
<td style="text-align:center">1</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">1</td>
<td style="text-align:center">1</td>
<td style="text-align:center">1</td>
<td style="text-align:center">0</td>
</tr>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">0</td>
<td style="text-align:center">0</td>
<td style="text-align:center">1</td>
<td style="text-align:center">1</td>
</tr>
</tbody>
</table>
<p>假定 A = 60; B = 13; 其二进制数转换为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>A <span class="token operator">=</span> <span class="token number">0011</span> <span class="token number">1100</span>

B <span class="token operator">=</span> <span class="token number">0000</span> <span class="token number">1101</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>

A<span class="token operator">&amp;</span>B <span class="token operator">=</span> <span class="token number">0000</span> <span class="token number">1100</span>

A<span class="token operator">|</span>B <span class="token operator">=</span> <span class="token number">0011</span> <span class="token number">1101</span>

A<span class="token operator">^</span>B <span class="token operator">=</span> <span class="token number">0011</span> <span class="token number">0001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-1-实例" tabindex="-1"><a class="header-anchor" href="#_10-1-实例" aria-hidden="true">#</a> 10.1 实例</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">21</span>
   <span class="token keyword">var</span> c <span class="token builtin">int</span> 

   c <span class="token operator">=</span>  a
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 1 行 - =  运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

   c <span class="token operator">+=</span>  a
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 2 行 - += 运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

   c <span class="token operator">-=</span>  a
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 3 行 - -= 运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

   c <span class="token operator">*=</span>  a
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 4 行 - *= 运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

   c <span class="token operator">/=</span>  a
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 5 行 - /= 运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

   c  <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

   c <span class="token operator">&lt;&lt;=</span>  <span class="token number">2</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 6行  - &lt;&lt;= 运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

   c <span class="token operator">>>=</span>  <span class="token number">2</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 7 行 - >>= 运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

   c <span class="token operator">&amp;=</span>  <span class="token number">2</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 8 行 - &amp;= 运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

   c <span class="token operator">^=</span>  <span class="token number">2</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 9 行 - ^= 运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

   c <span class="token operator">|=</span>  <span class="token number">2</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第 10 行 - |= 运算符实例，c 值为 = %d\n"</span><span class="token punctuation">,</span> c <span class="token punctuation">)</span> 

<span class="token punctuation">}</span>                                                                       
~            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译：</p>
<p><img src="@source/markdown/images/ePx7Tnbr4DSRYh1.png" alt="image-20220106154900081"></p>
<h3 id="_10-2-原码、补码、反码" tabindex="-1"><a class="header-anchor" href="#_10-2-原码、补码、反码" aria-hidden="true">#</a> 10.2 原码、补码、反码</h3>
<p><img src="@source/markdown/images/EOzSmJB36odgt9M.png" alt="image-20220106155507207"></p>
<p>❤️注意：<strong>在计算机运算的时候，都是以补码的方式来运算的</strong></p>
<h3 id="_10-3-golang-中的位运算" tabindex="-1"><a class="header-anchor" href="#_10-3-golang-中的位运算" aria-hidden="true">#</a> 10.3 golang 中的位运算</h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p><a href="https://github.com/cubxxw/awesome-cs-cloudnative-blockchain/blob/master/Gomd_super/bitwise.md" target="_blank" rel="noopener noreferrer">⚡ 强烈推荐位运算技巧，下面讲的是方法<ExternalLinkIcon/></a></p>
</div>
<p>Go 语言支持的位运算符如下表所示。假定 A 为60，B 为13：</p>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">实例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">&amp;</td>
<td style="text-align:left">按位与运算符&quot;&amp;&quot;是双目运算符。 其功能是参与运算的两数各对应的二进位相与。</td>
<td style="text-align:left">(A &amp; B) 结果为 12, 二进制为 0000 1100</td>
</tr>
<tr>
<td style="text-align:left">|</td>
<td style="text-align:left">按位或运算符&quot;|&quot;是双目运算符。 其功能是参与运算的两数各对应的二进位相或</td>
<td style="text-align:left">(A | B) 结果为 61, 二进制为 0011 1101</td>
</tr>
<tr>
<td style="text-align:left">^</td>
<td style="text-align:left">按位异或运算符&quot;^&quot;是双目运算符。 其功能是<strong>参与运算的两数各对应的二进位相异或，当两对应的二进位相异时，结果为1。</strong></td>
<td style="text-align:left">(A ^ B) 结果为 49, 二进制为 0011 0001</td>
</tr>
<tr>
<td style="text-align:left">&lt;&lt;</td>
<td style="text-align:left">左移运算符&quot;&lt;&lt;&quot;是双目运算符。左移n位就是乘以2的n次方。 其功能把**&quot;&lt;&lt;&quot;左边的运算数的各二进位全部左移若干位，由&quot;&lt;&lt;&quot;右边的数指定移动的位数，高位丢弃，低位补0**。</td>
<td style="text-align:left">A &lt;&lt; 2 结果为 240 ，二进制为 1111 0000</td>
</tr>
<tr>
<td style="text-align:left">&gt;&gt;</td>
<td style="text-align:left">右移运算符&quot;&gt;&gt;&quot;是双目运算符。右移n位就是除以2的n次方。 其功能是把**&quot;&gt;&gt;&quot;左边的运算数的各二进位全部右移若干位**，&quot;&gt;&gt;<strong>&quot;右边的数指定移动的位数。</strong></td>
<td style="text-align:left">A &gt;&gt; 2 结果为 15 ，二进制为 0000 1111</td>
</tr>
</tbody>
</table>
<img src="@source/markdown/images/Uwu4MJHvaLtRXp8.png" alt="image-20220106160251627" style="zoom:25%;" />
<p>💡简单的一个案例如下：</p>
<p><strong>先求补码，再计算</strong></p>
<blockquote>
<p>正数的补码与原码相同。负数的补码的符号位为1，其余位为该数绝对值的原码按位取反，然后整个数加1。</p>
</blockquote>
<p><img src="@source/markdown/images/hGXaHEmuNvidFqB.png" alt="image-20220106160800738"></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Parintln</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">&amp;</span><span class="token number">3</span><span class="token punctuation">)</span>   <span class="token comment">//2</span>
	fmt<span class="token punctuation">.</span><span class="token function">Parintln</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span><span class="token punctuation">)</span>   <span class="token comment">//3</span>
	fmt<span class="token punctuation">.</span><span class="token function">Parintln</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">^</span><span class="token number">3</span><span class="token punctuation">)</span>   <span class="token comment">//1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>2
3
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>位移运算：也遵守按照补码计算</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token number">1</span> <span class="token operator">>></span> <span class="token number">2</span>  <span class="token comment">//0</span>
c <span class="token operator">:=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span>  <span class="token comment">//4</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"a="</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span><span class="token string">"c="</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>分析：</strong></p>
<p><strong>c：0000 0001 =&gt; 0000 0100 = 4</strong></p>
<p><strong>a：0000 0001 =&gt; 0000 0000 = 0</strong></p>
<h2 id="_11-流程控制" tabindex="-1"><a class="header-anchor" href="#_11-流程控制" aria-hidden="true">#</a> 11. 流程控制</h2>
<blockquote>
<p>❤️❤️❤️ 为了更好的区分理解，这部分将和python一同介绍</p>
</blockquote>
<p>​	<strong>程序由上到下逐步执行（参考python交互式脚本语言） ，中间没有任何的判断和跳转。</strong></p>
<p>​	变量应该先声明后定义，再使用。</p>
<h3 id="_11-1-go分支控制if-else" tabindex="-1"><a class="header-anchor" href="#_11-1-go分支控制if-else" aria-hidden="true">#</a> 11.1 Go分支控制if -else</h3>
<ol>
<li>
<p><strong>单分支</strong></p>
</li>
<li>
<p><strong>双分支</strong></p>
</li>
<li>
<p><strong>多分支</strong></p>
</li>
</ol>
<div class="custom-container danger"><p class="custom-container-title">注意❤️</p>
<p>**1. 和C/C++不同，在Golang中就算只写一行代码，也需要有{} **</p>
<p><strong>2. Go中的if还有一个强大之处是在条件判断语句中允许申明一个变量，这个变量的作用域只能在该条件逻辑块内，在其他地方是不起作用的</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> age <span class="token operator">:=</span> <span class="token number">20</span><span class="token punctuation">;</span>age <span class="token operator">></span> <span class="token number">18</span><span class="token punctuation">{</span>   <span class="token comment">//在此处定义变量而且可以直接使用 类似于 int i = 0</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你的年龄是多少啊？"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h5 id="go-编程语言中-if-语句的语法如下" tabindex="-1"><a class="header-anchor" href="#go-编程语言中-if-语句的语法如下" aria-hidden="true">#</a> Go 编程语言中 if 语句的语法如下：</h5>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> 布尔表达式 <span class="token punctuation">{</span>
   <span class="token comment">/* 在布尔表达式为 true 时执行 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="go-编程语言中-if-else-语句的语法如下" tabindex="-1"><a class="header-anchor" href="#go-编程语言中-if-else-语句的语法如下" aria-hidden="true">#</a> Go 编程语言中 if...else 语句的语法如下：</h5>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> 布尔表达式 <span class="token punctuation">{</span>
   <span class="token comment">/* 在布尔表达式为 true 时执行 */</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 在布尔表达式为 false 时执行 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If 在布尔表达式为 true 时，其后紧跟的语句块执行，如果为 false 则执行 else 语句块。</p>
<h5 id="go-编程语言中-if-else-语句的语法如下-1" tabindex="-1"><a class="header-anchor" href="#go-编程语言中-if-else-语句的语法如下-1" aria-hidden="true">#</a> Go 编程语言中 if...else 语句的语法如下：</h5>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> 布尔表达式 <span class="token number">1</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 在布尔表达式 1 为 true 时执行 */</span>
   <span class="token keyword">if</span> 布尔表达式 <span class="token number">2</span> <span class="token punctuation">{</span>
      <span class="token comment">/* 在布尔表达式 2 为 true 时执行 */</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以以同样的方式在 if 语句中嵌套 <strong>else if...else</strong> 语句</p>
<p><strong>但是不建议嵌套过多，尽量控制在三层</strong></p>
<h4 id="案列" tabindex="-1"><a class="header-anchor" href="#案列" aria-hidden="true">#</a> 案列：</h4>
<blockquote>
<p>定义两个变量int32 ,判断二者之和，是否能被3又能被5整除，打印提示信息</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//定义两个变量int32 ,判断二者之和，是否能被3又能被5整除，打印提示信息</span>

<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">var</span> a <span class="token builtin">int32</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> b <span class="token builtin">int32</span> <span class="token operator">=</span> <span class="token number">15</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">3</span><span class="token operator">==</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">5</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"该数符合要求"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>  <span class="token comment">//注意格式，括号不可随意移位</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"该数木满足要求"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span>     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/EAcOVB621lrNY5p.png" alt="image-20220106165651385"></p>
<p><strong>判断闰年：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> year<span class="token operator">:=</span> <span class="token number">2019</span><span class="token punctuation">;</span><span class="token punctuation">(</span>year <span class="token operator">%</span><span class="token number">4</span> <span class="token operator">==</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> year <span class="token operator">%</span><span class="token number">100</span> <span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">||</span>year<span class="token operator">%</span><span class="token number">400</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span><span class="token string">"是闰年"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>  <span class="token comment">//直接定义</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/r2hesWa5HkFLmlT.png" alt="image-20220106170028830"></p>
<p><strong>注意：使用数字运算的时候要引入math包进行数字运算</strong></p>
<h3 id="_11-2-补充-python分支控制if-else" tabindex="-1"><a class="header-anchor" href="#_11-2-补充-python分支控制if-else" aria-hidden="true">#</a> 11.2 补充：python分支控制if -else</h3>
<p><strong>python语句要注意缩进问题</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -\*- coding: UTF-8 -\*-**   **#****定义中文**</span>

<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token string">"你好，世界"</span> <span class="token punctuation">)</span>

 

判断语句

<span class="token keyword">if</span> 判断条件 <span class="token number">1</span><span class="token punctuation">:</span>

执行语句<span class="token number">1</span>

<span class="token keyword">elif</span>判断语句<span class="token number">2</span>：

执行语句<span class="token number">2</span>

<span class="token keyword">else</span>：

执行语句<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>import random</code> :引入随机库</strong></p>
<p><strong><code v-pre>x = random.randint(0,3)</code></strong>：表示随机生成0~3数字</p>
<img src="@source/markdown/images/SLpjyeTG8fnFvM1.png" style="zoom:50%;" />
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">if</span> x <span class="token operator">!=</span> <span class="token number">90</span><span class="token punctuation">:</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"该随机数并不是理想的"</span><span class="token punctuation">)</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">elif</span> x <span class="token operator">==</span> <span class="token number">80</span><span class="token punctuation">:</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"该随机数就是理想的"</span><span class="token punctuation">)</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">else</span><span class="token punctuation">:</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     i <span class="token operator">=</span> <span class="token number">10</span>   
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">if</span> i<span class="token operator">></span><span class="token number">10</span><span class="token punctuation">:</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"i大于10"</span><span class="token punctuation">)</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">elif</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">:</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"i小于10"</span><span class="token punctuation">)</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">else</span><span class="token punctuation">:</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"i等于10"</span><span class="token punctuation">)</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>                                     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/7dhvoyF5OU8XQKk.png" alt="image-20220106172510474"></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '2.md' style='float:left'>⬆️上一节🔗</a><a href = '4.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


