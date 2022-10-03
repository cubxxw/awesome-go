<template><div><h1 id="go语言的的数组和切片" tabindex="-1"><a class="header-anchor" href="#go语言的的数组和切片" aria-hidden="true">#</a> go语言的的数组和切片</h1>
<nav class="table-of-contents"><ul><li><router-link to="#数组">数组</router-link><ul><li><router-link to="#声明数组">声明数组</router-link></li><li><router-link to="#初始化数组和内存布局">初始化数组和内存布局</router-link></li><li><router-link to="#访问数组元素">访问数组元素</router-link></li></ul></li><li><router-link to="#数组的遍历">数组的遍历</router-link><ul><li><router-link to="#常规遍历">常规遍历</router-link></li></ul></li><li><router-link to="#for-range遍历">for - range遍历</router-link><ul><li><router-link to="#和python一样的用法">和python一样的用法</router-link></li><li><router-link to="#🐻数组的引用传递">🐻数组的引用传递</router-link></li><li><router-link to="#长度也是数组类型一部分">长度也是数组类型一部分</router-link></li><li><router-link to="#生成随机数并且打印">生成随机数并且打印</router-link></li></ul></li><li><router-link to="#slice切片">slice切片</router-link><ul><li><router-link to="#❤️💕-切片在内存中形式">❤️💕 切片在内存中形式</router-link></li></ul></li><li><router-link to="#切片的使用">切片的使用</router-link><ul><li><router-link to="#方式一">方式一</router-link></li><li><router-link to="#方式二">方式二</router-link></li><li><router-link to="#方式三">方式三</router-link></li></ul></li><li><router-link to="#切片初始化">切片初始化</router-link></li><li><router-link to="#切片的遍历">切片的遍历</router-link><ul><li><router-link to="#常规遍历-1">常规遍历</router-link></li><li><router-link to="#for-range遍历-1">for --range遍历</router-link></li><li><router-link to="#注意">注意</router-link></li></ul></li><li><router-link to="#len-和-cap-函数">len() 和 cap() 函数</router-link><ul><li><router-link to="#空-nil-切片">空(nil)切片</router-link></li><li><router-link to="#切片截取">切片截取</router-link></li></ul></li><li><router-link to="#append-和-copy-函数">append() 和 copy() 函数</router-link><ul><li><router-link to="#append动态追加">append动态追加</router-link></li><li><router-link to="#copy内置函数拷贝">copy内置函数拷贝</router-link></li><li><router-link to="#参考python-list-append">参考python List append()</router-link></li></ul></li><li><router-link to="#string和slice">string和slice</router-link><ul><li><router-link to="#字符串修改的方法">字符串修改的方法</router-link></li><li><router-link to="#go语言中字符串修改">Go语言中字符串修改</router-link></li></ul></li><li><router-link to="#python中字符串修改">python中字符串修改</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<p>Go 语言提供了数组类型的数据结构。</p>
<ul>
<li>
<p>数组是具有相同唯一类型的一组已编号且长度固定的数据项序列，这种类型可以是任意的原始类型例如整型、字符串或者自定义类型。</p>
</li>
<li>
<p>数组可以存放多个同一类型数据，同时数组也是一种数据类型，在Golang中，<strong>数组是一种值类型，因此在默认下是值传递</strong>，在函数中修改的是拷贝的数值（新的栈），不影响本身数值</p>
</li>
<li>
<p>相对于去声明 <strong><code v-pre>number0, number1, ..., number99</code></strong> 的变量，使用数组形式 <strong><code v-pre>numbers[0], numbers[1] ..., numbers[99]</code></strong> 更加方便且易于扩展。</p>
</li>
<li>
<p>数组元素可以通过索引（位置）来读取（或者修改），索引从 <code v-pre>0</code> 开始，第一个元素索引为 <code v-pre>0</code>，第二个索引为 <code v-pre>1</code>，以此类推。</p>
</li>
<li>
<p>数组的地址可以通过地址名获取，数组第一个元素的地址就是数组的首地址</p>
</li>
</ul>
<p><img src="@source/markdown/images/OF9oTb1VksLtvlP.png" alt="img"></p>
<h3 id="声明数组" tabindex="-1"><a class="header-anchor" href="#声明数组" aria-hidden="true">#</a> 声明数组</h3>
<p>Go 语言数组声明需要指定元素类型及元素个数，语法格式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> variable_name <span class="token punctuation">[</span>SIZE<span class="token punctuation">]</span> variable_type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上为一维数组的定义方式。例如以下定义了数组 balance 长度为 10 类型为 <code v-pre>float32</code>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> balance <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">float32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="初始化数组和内存布局" tabindex="-1"><a class="header-anchor" href="#初始化数组和内存布局" aria-hidden="true">#</a> 初始化数组和内存布局</h3>
<p>以下演示了数组初始化：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> balance <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">float32</span><span class="token punctuation">{</span><span class="token number">1000.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.4</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">50.0</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们也可以通过字面量在声明数组的同时快速初始化数组：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>balance <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">float32</span><span class="token punctuation">{</span><span class="token number">1000.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.4</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">50.0</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果数组长度不确定，<strong>可以使用 ... 代替数组的长度，编译器会根据元素个数自行推断数组的长度：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> balance <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">float32</span><span class="token punctuation">{</span><span class="token number">1000.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.4</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">50.0</span><span class="token punctuation">}</span>
balance <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">float32</span><span class="token punctuation">{</span><span class="token number">1000.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.4</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">50.0</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果设置了数组的长度，我们还可以通过指定下标来初始化元素：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//  将索引为 1 和 3 的元素初始化</span>
balance <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">float32</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2.0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">7.0</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<p><strong>1. 这个顺序不是固定的，没有指定的顺序，是按照下标的顺序</strong></p>
<p><strong>2. 数组创建的时候，如果没有赋值，则使用默认值</strong></p>
<p><strong>3. 初始化数组中 {} 中的元素个数不能大于 [] 中的数字。</strong></p>
<p>如果忽略 <strong>[]</strong> 中的数字不设置数组大小，Go 语言会根据元素的个数来设置数组的大小：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> balance<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">50.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<blockquote>
<p>以上实例读取了第五个元素。数组元素可以通过索引（位置）来读取（或者修改），索引从 0 开始，第一个元素索引为 0，第二个索引为 1，以此类推。</p>
</blockquote>
<p><img src="https://s2.loli.net/2022/01/11/xr6zGIcWKBuZ4Ng.jpg" alt="img"></p>
<h3 id="访问数组元素" tabindex="-1"><a class="header-anchor" href="#访问数组元素" aria-hidden="true">#</a> 访问数组元素</h3>
<p>数组元素可以通过索引（位置）来读取。格式为数组名后加中括号，中括号中为索引的值。例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> salary <span class="token builtin">float32</span> <span class="token operator">=</span> balance<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>⬆️以上实例读取了数组 balance 第 10 个元素的值。</p>
<p>⬇️以下演示了数组完整操作（声明、赋值、访问）</p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> i<span class="token punctuation">,</span>j<span class="token punctuation">,</span>k <span class="token builtin">int</span>
   
   <span class="token comment">// 声明数组的同时快速初始化数组</span>
   balance <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">float32</span><span class="token punctuation">{</span><span class="token number">1000.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.4</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">50.0</span><span class="token punctuation">}</span>

   <span class="token comment">/* 输出数组元素 */</span>         <span class="token operator">...</span>
   <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"balance[%d] = %f\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> balance<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   
   balance2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">float32</span><span class="token punctuation">{</span><span class="token number">1000.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.4</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">50.0</span><span class="token punctuation">}</span>
   <span class="token comment">/* 输出每个数组元素的值 */</span>
   <span class="token keyword">for</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"balance2[%d] = %f\n"</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> balance2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

   <span class="token comment">//将索引为 1 和 3 的元素初始化</span>
   balance3 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">float32</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2.0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">7.0</span><span class="token punctuation">}</span>  
   <span class="token keyword">for</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> k<span class="token operator">++</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"balance3[%d] = %f\n"</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> balance3<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Element[0] = 100
Element[1] = 101
Element[2] = 102
Element[3] = 103
Element[4] = 104
Element[5] = 105
Element[6] = 106
Element[7] = 107
Element[8] = 108
Element[9] = 109
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡简单的一个案例如下：</p>
<p><img src="@source/markdown/images/image-20221002164246331.png" alt="image-20221002164246331"></p>
<p>以上实例执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>balance[0] = 1000.000000
balance[1] = 2.000000
balance[2] = 3.400000
balance[3] = 7.000000
balance[4] = 50.000000
balance2[0] = 1000.000000
balance2[1] = 2.000000
balance2[2] = 3.400000
balance2[3] = 7.000000
balance2[4] = 50.000000
balance3[0] = 0.000000
balance3[1] = 2.000000
balance3[2] = 0.000000
balance3[3] = 7.000000
balance3[4] = 0.000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var a[2]int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>int默认是int64，占8个字节，而int32占4个字节，使用&amp;取地址a[0]和a[1]地址隔4个字节</strong></p>
<h2 id="数组的遍历" tabindex="-1"><a class="header-anchor" href="#数组的遍历" aria-hidden="true">#</a> 数组的遍历</h2>
<h3 id="常规遍历" tabindex="-1"><a class="header-anchor" href="#常规遍历" aria-hidden="true">#</a> 常规遍历</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> n <span class="token builtin">int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入当前数组个数"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span>
	<span class="token keyword">var</span> a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>            <span class="token comment">//此处不可以由键盘输入，可以用下面切片</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"请输入当前第%d个元素的值\n"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第%d个元素的值为:%d\n"</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"第%d个元素的地址为:%v\n"</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/image-20221002164552302.png" alt="image-20221002164552302"></p>
<h2 id="for-range遍历" tabindex="-1"><a class="header-anchor" href="#for-range遍历" aria-hidden="true">#</a> for - range遍历</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> index<span class="token punctuation">,</span>value <span class="token operator">:=</span> <span class="token keyword">range</span> array<span class="token punctuation">{</span>
<span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>index : 数组下标</li>
<li>value 下标对应位置</li>
<li>array：数组名</li>
<li><strong>都是仅在for循环内部可见的局部变量</strong></li>
<li><strong>遍历数组时，如果不想使用index，可以使用<code v-pre>_</code>代替</strong></li>
</ol>
<h3 id="和python一样的用法" tabindex="-1"><a class="header-anchor" href="#和python一样的用法" aria-hidden="true">#</a> 和python一样的用法</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">//</span>python用<span class="token builtin">range</span>根据数字索引遍历数组的方法，直接上例子吧。

colours <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span><span class="token string">"green"</span><span class="token punctuation">,</span><span class="token string">"blue"</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>colours<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

  <span class="token keyword">print</span> i<span class="token punctuation">,</span> colour<span class="token punctuation">[</span>i<span class="token punctuation">]</span>


<span class="token comment"># 0 red</span>

<span class="token comment"># 1 green</span>

<span class="token comment"># 2 blue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p>range 三个组成，分别是开始，间隔，结束</p>
</li>
<li>
<p>i 就相当于下标，可以不管它，相对Go可能更高级一丢丢</p>
</li>
</ol>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//演示遍历</span>
    heroes <span class="token operator">:=</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"宋江"</span><span class="token punctuation">,</span><span class="token string">"吴用"</span><span class="token punctuation">,</span><span class="token string">"卢俊义"</span><span class="token punctuation">}</span>
	
    <span class="token keyword">for</span> i<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> heroes<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"i = %v,v = %v\n"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/image-20221002171416739.png" alt="image-20221002171416739"></p>
<p><strong>输出可以使用<code v-pre>i+1</code>配合</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//演示遍历</span>
    heroes <span class="token operator">:=</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"宋江"</span><span class="token punctuation">,</span><span class="token string">"吴用"</span><span class="token punctuation">,</span><span class="token string">"卢俊义"</span><span class="token punctuation">}</span>
	
    <span class="token keyword">for</span> i<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> heroes<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"i = %v,v = %v\n"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-4-6-centos c<span class="token punctuation">]</span><span class="token comment"># go run 2.go </span>
i <span class="token operator">=</span> <span class="token number">0</span>,v <span class="token operator">=</span> 宋江
i <span class="token operator">=</span> <span class="token number">1</span>,v <span class="token operator">=</span> 吴用
i <span class="token operator">=</span> <span class="token number">2</span>,v <span class="token operator">=</span> 卢俊义
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🐻数组的引用传递" tabindex="-1"><a class="header-anchor" href="#🐻数组的引用传递" aria-hidden="true">#</a> 🐻数组的引用传递</h3>
<p><strong>数组本身是属于值传递的，要是想修改数组的值，那么需要使用指针</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token punctuation">(</span><span class="token operator">*</span>arr<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">88</span>    <span class="token comment">//❤️ 注意，此时先取值，然后再取地址</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">}</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">)</span>      <span class="token comment">//传递数组 ,, 此时需要使用取地址符</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"main arr = "</span><span class="token punctuation">,</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用指针传递的效率更好，示意图：</strong></p>
<p><img src="@source/markdown/images/image-20221002171623623.png" alt="image-20221002171623623"></p>
<h3 id="长度也是数组类型一部分" tabindex="-1"><a class="header-anchor" href="#长度也是数组类型一部分" aria-hidden="true">#</a> 长度也是数组类型一部分</h3>
<p><img src="@source/markdown/images/image-20221002171641224.png" alt="image-20221002171641224"></p>
<h3 id="生成随机数并且打印" tabindex="-1"><a class="header-anchor" href="#生成随机数并且打印" aria-hidden="true">#</a> 生成随机数并且打印</h3>
<p>💡简单的一个案例如下：</p>
<blockquote>
<p>随机生成5个数字，将其反转打印</p>
</blockquote>
<p><strong>使用<code v-pre>func(r* Rand) Intn(n int) int</code>函数生成随机数</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"math/rand"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> intArr3 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">//使用时间戳种子数改变数值</span>
	
    <span class="token keyword">for</span> i<span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>intArr3<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
		intArr3<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>    <span class="token comment">//赋值为随机数</span>
	<span class="token punctuation">}</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>intArr3<span class="token punctuation">)</span>   <span class="token comment">//可以直接将数组打印出来</span>
    temp <span class="token operator">:=</span> <span class="token number">0</span>       <span class="token comment">//使用临时变量交换</span>
    
    <span class="token keyword">for</span> i<span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>intArr3<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
        temp <span class="token operator">=</span> intArr3<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>intArr3<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span>
        intArr3<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>intArr3<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> intArr3<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        intArr3<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp
    <span class="token punctuation">}</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>intArr3<span class="token punctuation">)</span>   <span class="token comment">//可以直接将数组打印出来</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/image-20221002172010892.png" alt="image-20221002172010892"></p>
<p>📜 对上面的解释：</p>
<p><strong>注意：每次执行的随机数都是一样的，这是由于函数使用给定的seed来初始化生成器到一个确定的状态，故需要一个种子数</strong></p>
<p><strong>解决：为了每次生成随机数不一样，我们给定的seed值也应该不一样，此时可以用<code v-pre>unix()</code>时间戳</strong></p>
<p><strong>交换的思路，反转打印，交换的次数应该只需要一般 <code v-pre>len/2</code>,不可写<code v-pre>len</code>，否则交换了两次</strong></p>
<blockquote>
<p>由此可见，Golang开发者还是希望Go语言可以有更好的可读性和可维护性</p>
</blockquote>
<h2 id="slice切片" tabindex="-1"><a class="header-anchor" href="#slice切片" aria-hidden="true">#</a> slice切片</h2>
<blockquote>
<p>如果我们需要一个数组来保存学生的成绩，但是学生的人数是不固定的，那么这时候需要用到切片，就相当于动态数组</p>
</blockquote>
<ol>
<li>
<p>切片是数组的一个引用，那么切片是一个引用类型，这和数组是不一样的，函数中改变的会改变其值</p>
</li>
<li>
<p>切片的长度是可以变化的</p>
</li>
<li>
<p>切片的使用类似于数组，遍历和访问都是和数组一样的</p>
</li>
<li>
<p>切片的定义基本语法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> slicename <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>slicename</code>：切片名</p>
</li>
<li>
<p><code v-pre>type</code> ：类型</p>
</li>
</ul>
</li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> intArr <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">}</span>  <span class="token comment">//数组</span>
	slice <span class="token operator">:=</span> intArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"intarr="</span><span class="token punctuation">,</span>intArr<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"intarr的容量是 "</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>inArr<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"slice 的元素是 "</span><span class="token punctuation">,</span>slice<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"slice 的容量是"</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"slice 的元素个数为"</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<ol>
<li><code v-pre>slice</code> 是切片名称</li>
<li><code v-pre>intArr[1:3]</code>  表示<code v-pre>slice</code>引用数组第二个元素到下标</li>
<li><strong>引用<code v-pre>intArr</code>数组的起始下标为1，终止下标为3，但是不包含3</strong></li>
<li>切片的容量<code v-pre>cap</code>是可变的，这样可以节约空间</li>
<li><strong>此时改变数组的值，<code v-pre>slice</code> 的值也会发生变化（引用）</strong></li>
</ol>
<p>🚀 编译结果如下：</p>
<p><img src="@source/markdown/images/image-20221002172522266.png" alt="image-20221002172522266"></p>
<h3 id="❤️💕-切片在内存中形式" tabindex="-1"><a class="header-anchor" href="#❤️💕-切片在内存中形式" aria-hidden="true">#</a> ❤️💕 切片在内存中形式</h3>
<p><strong>在内存里，可以理解为slic是由三个部分组成的</strong></p>
<ol>
<li>第一个位置记录的是数组的地址，是引用类型</li>
<li>第二个记录了slic本身的长度</li>
<li>第三个记录的是slic容量的大小</li>
</ol>
<p><strong>可以理解为slic是一个引用类型（本身也是有个地址）</strong></p>
<p><strong>slic从底层来说其实就是一个数据结构，是struct结构体</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> slice <span class="token keyword">struct</span><span class="token punctuation">{</span>
	ptr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	<span class="token builtin">len</span> <span class="token builtin">int</span>
	<span class="token builtin">cap</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示意图：</strong></p>
<p><img src="@source/markdown/images/image-20221002172559091.png" alt="image-20221002172559091"></p>
<h2 id="切片的使用" tabindex="-1"><a class="header-anchor" href="#切片的使用" aria-hidden="true">#</a> 切片的使用</h2>
<h3 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h3>
<p><strong>定义一个切片，然后让切片去引用一个已经创建的数组</strong></p>
<blockquote>
<p>参考上面的例子</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> intArr <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">}</span>  <span class="token comment">//数组</span>
slice <span class="token operator">:=</span> intArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h3>
<p><strong>通过func make来创建一个切片</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> 切片名 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token builtin">len</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token builtin">cap</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">//也可以简写为</span>
切片名 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>type 是数据类型</li>
<li>len :切片大小</li>
<li>cap：切片容量</li>
</ol>
<blockquote>
<p><strong>方式一和方式二之间的区别✍️✍️✍️：</strong></p>
<ol>
<li>方式一是直接引用数组，数组是值类型，而引用的是引用类型，数组是事先存在的，程序员是可见的</li>
<li>make创建切片，这个切片是在底层中，程序员是不可见的</li>
</ol>
</blockquote>
<h3 id="方式三" tabindex="-1"><a class="header-anchor" href="#方式三" aria-hidden="true">#</a> 方式三</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>容量必须大于或者等于长度</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>float<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
    slice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
    slice<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">20</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>图示解析：</strong></p>
<p><img src="@source/markdown/images/image-20221002173321137.png" alt="image-20221002173321137"></p>
<h2 id="切片初始化" tabindex="-1"><a class="header-anchor" href="#切片初始化" aria-hidden="true">#</a> 切片初始化</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>s <span class="token operator">:=</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span> <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接初始化切片，<strong>[]</strong> 表示是切片类型，<strong>{1,2,3}</strong> 初始化值依次是 <strong>1,2,3</strong>，其 <strong>cap=len=3</strong>。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>s <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化切片 <strong>s</strong>，是数组 arr 的引用。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>s <span class="token operator">:=</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">:</span>endIndex<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 arr 中从下标 startIndex 到 endIndex-1 下的元素创建为一个新的切片。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>s <span class="token operator">:=</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">:</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认 endIndex 时将表示一直到arr的最后一个元素。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>s := arr[:endIndex] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认 startIndex 时将表示从 arr 的第一个元素开始。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>s1 := s[startIndex:endIndex] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过切片 s 初始化切片 s1。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>s :=make([]int,len,cap) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过内置函数 <strong>make()</strong> 初始化切片<strong>s</strong>，<strong>[]int</strong> 标识为其元素类型为 int 的切片。</p>
<h2 id="切片的遍历" tabindex="-1"><a class="header-anchor" href="#切片的遍历" aria-hidden="true">#</a> 切片的遍历</h2>
<p><strong>😂😂😂 切片的遍历和数组的遍历差不多</strong></p>
<h3 id="常规遍历-1" tabindex="-1"><a class="header-anchor" href="#常规遍历-1" aria-hidden="true">#</a> 常规遍历</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> arr <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">}</span>
    slice <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>   <span class="token comment">//22,33,44</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice[%v] = %v"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>slice<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>slice[0]=22 slice[1]=33 slice[2]=44
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="for-range遍历-1" tabindex="-1"><a class="header-anchor" href="#for-range遍历-1" aria-hidden="true">#</a> for --range遍历</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> arr <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">}</span>
    slice <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>   <span class="token comment">//22,33,44</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice[%v] = %v"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>slice[0]=22 
slice[1]=33 
slice[2]=44
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<ol>
<li>
<p>通过make方式创建的切片可以指定切片的大小和容量</p>
</li>
<li>
<p>如果没有给切片的各个元素赋值，就会使用默认值</p>
</li>
<li>
<p>通过make方式创建的切片对应的数组是由make底层维护，对外部可见，只能使用slice去访问</p>
</li>
<li>
<p><strong>对切片初始化后任然不能越界，但是可以动态增长</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> slice <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span>end<span class="token punctuation">]</span>
<span class="token keyword">var</span> slice <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span>end<span class="token punctuation">]</span>
<span class="token comment">/*可省略，默认是零*/</span>
<span class="token keyword">var</span> slice <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> slice <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span> 
<span class="token comment">//意思是取arr长度，从0开始，全部取出，可以全部省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>❤️ 切片是可以在切片的的类型上进行，此时如果改变任何一个切片的值，两个切片都会被改变</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> arr <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">55</span><span class="token punctuation">}</span>
slice <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>  <span class="token comment">//22,33,44</span>
slice2 <span class="token operator">:=</span> slice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  <span class="token comment">//33,44</span>

slice2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>  <span class="token comment">//33,100  </span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slice<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">//100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>即slice2 和slice指向的是同一个区间</strong></p>
</li>
</ol>
<h2 id="len-和-cap-函数" tabindex="-1"><a class="header-anchor" href="#len-和-cap-函数" aria-hidden="true">#</a> len() 和 cap() 函数</h2>
<p>切片是可索引的，并且可以由 len() 方法获取长度。</p>
<p><strong>切片提供了计算容量的方法 cap() 可以测量切片最长可以达到多少。</strong></p>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>

   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printSlice</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"len=%d cap=%d slice=%v\n"</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行输出结果为:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>len=3 cap=5 slice=[0 0 0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="空-nil-切片" tabindex="-1"><a class="header-anchor" href="#空-nil-切片" aria-hidden="true">#</a> 空(nil)切片</h3>
<p>一个切片在未初始化之前默认为 nil，长度为 0，实例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> numbers <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>

   <span class="token keyword">if</span><span class="token punctuation">(</span>numbers <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"切片是空的"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printSlice</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"len=%d cap=%d slice=%v\n"</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例运行输出结果为:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token builtin">len</span><span class="token operator">=</span><span class="token number">0</span> <span class="token builtin">cap</span><span class="token operator">=</span><span class="token number">0</span> slice<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
切片是空的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切片截取" tabindex="-1"><a class="header-anchor" href="#切片截取" aria-hidden="true">#</a> 切片截取</h3>
<p>可以通过设置下限及上限来设置截取切片</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 创建切片 */</span>
   numbers <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span>  
   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>

   <span class="token comment">/* 打印原始切片 */</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"numbers =="</span><span class="token punctuation">,</span> numbers<span class="token punctuation">)</span>

   <span class="token comment">/* 打印子切片从索引1(包含) 到索引4(不包含)*/</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"numbers[1:4] =="</span><span class="token punctuation">,</span> numbers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

   <span class="token comment">/* 默认下限为 0*/</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"numbers[:3] =="</span><span class="token punctuation">,</span> numbers<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

   <span class="token comment">/* 默认上限为 len(s)*/</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"numbers[4:] =="</span><span class="token punctuation">,</span> numbers<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

   numbers1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers1<span class="token punctuation">)</span>

   <span class="token comment">/* 打印子切片从索引  0(包含) 到索引 2(不包含) */</span>
   number2 <span class="token operator">:=</span> numbers<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
   <span class="token function">printSlice</span><span class="token punctuation">(</span>number2<span class="token punctuation">)</span>

   <span class="token comment">/* 打印子切片从索引 2(包含) 到索引 5(不包含) */</span>
   number3 <span class="token operator">:=</span> numbers<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
   <span class="token function">printSlice</span><span class="token punctuation">(</span>number3<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printSlice</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"len=%d cap=%d slice=%v\n"</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>len=9 cap=9 slice=[0 1 2 3 4 5 6 7 8]
numbers == [0 1 2 3 4 5 6 7 8]
numbers[1:4] == [1 2 3]
numbers[:3] == [0 1 2]
numbers[4:] == [4 5 6 7 8]
len=0 cap=5 slice=[]
len=2 cap=9 slice=[0 1]
len=3 cap=7 slice=[2 3 4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="append-和-copy-函数" tabindex="-1"><a class="header-anchor" href="#append-和-copy-函数" aria-hidden="true">#</a> append() 和 copy() 函数</h2>
<h3 id="append动态追加" tabindex="-1"><a class="header-anchor" href="#append动态追加" aria-hidden="true">#</a> append动态追加</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">}</span>
slice3 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span><span class="token number">400</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span>  
<span class="token comment">/*slice4则是一个新的空间，slice3被回收，如果是slice3，则在原来的空间扩容*/</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"slice"</span><span class="token punctuation">,</span>slice<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><strong>如果想增加切片的容量，我们必须创建一个新的更大的切片并把原分片的内容都拷贝过来。</strong></li>
<li><strong>使用append时Go底层创建一个新的数组newArr安装扩容后大小</strong></li>
<li><strong>将slice原来包含的元素拷贝到新的数组，newArr是在底层维护的，程序员不可见</strong></li>
</ol>
<p><img src="@source/markdown/images/wYo3OA27hGmcfe8.png" alt="image-20220111153825921"></p>
<h3 id="copy内置函数拷贝" tabindex="-1"><a class="header-anchor" href="#copy内置函数拷贝" aria-hidden="true">#</a> copy内置函数拷贝</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> slice4 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> slice5 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token function">copy</span><span class="token punctuation">(</span>slice5<span class="token punctuation">,</span>slice4<span class="token punctuation">)</span>   <span class="token comment">//将切片slice4拷贝为slice5</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slice4<span class="token punctuation">)</span>  <span class="token comment">//1,2,3,4,5</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slice5<span class="token punctuation">)</span>   <span class="token comment">//1,2,3,4,5,0,0,0,0,0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><strong>如果修改slice5的值，slice4不变，他们之间的数据空间是独立的</strong></li>
<li><strong>默认情况下，使用make后，多余的空间默认为0</strong></li>
</ol>
<p>下面的代码描述了从拷贝切片的 copy 方法和向切片追加新元素的 append 方法。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> numbers <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>

   <span class="token comment">/* 允许追加空切片 */</span>
   numbers <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>

   <span class="token comment">/* 向切片添加一个元素 */</span>
   numbers <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>

   <span class="token comment">/* 同时添加多个元素 */</span>
   numbers <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>

   <span class="token comment">/* 创建切片 numbers1 是之前切片的两倍容量*/</span>
   numbers1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token function">cap</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>

   <span class="token comment">/* 拷贝 numbers 的内容到 numbers1 */</span>
   <span class="token function">copy</span><span class="token punctuation">(</span>numbers1<span class="token punctuation">,</span>numbers<span class="token punctuation">)</span>
   <span class="token function">printSlice</span><span class="token punctuation">(</span>numbers1<span class="token punctuation">)</span>  
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printSlice</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"len=%d cap=%d slice=%v\n"</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span>
    <span class="token comment">//定义输出格式的函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码执行输出结果为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token builtin">len</span><span class="token operator">=</span><span class="token number">0</span> <span class="token builtin">cap</span><span class="token operator">=</span><span class="token number">0</span> slice<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token builtin">len</span><span class="token operator">=</span><span class="token number">1</span> <span class="token builtin">cap</span><span class="token operator">=</span><span class="token number">1</span> slice<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token builtin">len</span><span class="token operator">=</span><span class="token number">2</span> <span class="token builtin">cap</span><span class="token operator">=</span><span class="token number">2</span> slice<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token builtin">len</span><span class="token operator">=</span><span class="token number">5</span> <span class="token builtin">cap</span><span class="token operator">=</span><span class="token number">6</span> slice<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token builtin">len</span><span class="token operator">=</span><span class="token number">5</span> <span class="token builtin">cap</span><span class="token operator">=</span><span class="token number">12</span> slice<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考python-list-append" tabindex="-1"><a class="header-anchor" href="#参考python-list-append" aria-hidden="true">#</a> 参考python List append()</h3>
<p><strong>append()方法可以用于在list 末尾添加新的对象</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>list.append(abj)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>abj是添加到末尾的对象</li>
<li>多个数字要用[]列表方式</li>
</ul>
<p><strong>这种方法是没有返回值的，会修改原来的列表</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">]</span>                                        
In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a                                                     
Out<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span>
In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">)</span>   <span class="token comment">#错误                            </span>
In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">]</span><span class="token punctuation">)</span>                                   
In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a                                             
Out<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">]</span>
In <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">77</span><span class="token punctuation">)</span>                                         
In <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a                                               
Out<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>和Go语言不一样，python中是直接追加，在原来的基础上改变，而Go语言是需要一个新的切片来接收</strong></p>
<p>🐶这可能就是编译型语言和解释性语言的区别吧，更多的请移步到软件工程学习~</p>
</blockquote>
<p>小细节<strong>当使用拷贝的时候，如果当前切片容量不够怎么办，会报错吗？</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span>
	slice <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"a="</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>  <span class="token comment">//0</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>   <span class="token comment">//不会报错，而且赋予的是第一个元素的值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/fUMkVtHBOwojLKA.png" alt="image-20220111155333096"></p>
<h2 id="string和slice" tabindex="-1"><a class="header-anchor" href="#string和slice" aria-hidden="true">#</a> string和slice</h2>
<p><strong>==string 在底层是一种byte数组==，因此string可以进行切片处理操作</strong></p>
<blockquote>
<p>上节string有讲解string进行切片处理</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>str <span class="token operator">=</span> <span class="token string">"hello@gmail.com"</span>
<span class="token comment">//使用切片获取gmail.com</span>
silce <span class="token operator">:=</span> str<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>       <span class="token comment">//gamil.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>string本身是不可变的，不可以通过<code v-pre>str[1]='f'来修改第三个字符</code></strong></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong>因此：string是不可变的，如果需要改变，此时将其字符串转化为切片或者run切片，再转化为字符串</strong></p>
</div>
<h3 id="字符串修改的方法" tabindex="-1"><a class="header-anchor" href="#字符串修改的方法" aria-hidden="true">#</a> 字符串修改的方法</h3>
<blockquote>
<p>补充 – Go语言的字符有以下两种：</p>
<ol>
<li><code v-pre>uint8</code>类型，或者叫做<code v-pre>byte</code>类型，代表了<code v-pre>ASCII</code>码的一个字符</li>
<li><code v-pre>rune</code>类型，代表一个 <code v-pre>UTF-8</code>字符</li>
</ol>
</blockquote>
<p>基于上面的类型，我们有针对出不同的修改方法：</p>
<p>✏️ 当处理中文或者日文或者其他复合字符时，则需要用到<code v-pre>rune</code>类型，实际上<code v-pre>rune</code>类型非常强大，是一个<code v-pre>int32</code></p>
<blockquote>
<p>Go语言使用了特殊的<code v-pre>rune</code>类型来处理<code v-pre>Unicode</code>，让基于<code v-pre>Unicode</code>的文本处理更为方便，也可以使用<code v-pre>byte</code>类型精选默认字符处理，性能和扩展新都有照护。</p>
</blockquote>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">changeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> <span class="token string">"big"</span>
    <span class="token comment">//强制类型转化</span>
    byteS1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
    byteS1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'p'</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>byteS1<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">//输出结果是 pig</span>
    
    s2 <span class="token operator">:=</span> <span class="token string">"熊哥"</span>
    <span class="token comment">//强制类型转化</span>
    byteS2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
    byteS2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'王'</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>byteS2<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">//输出结果是 王哥</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go语言中字符串修改" tabindex="-1"><a class="header-anchor" href="#go语言中字符串修改" aria-hidden="true">#</a> Go语言中字符串修改</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>str <span class="token operator">=</span> <span class="token string">"hello@gmail.com"</span>
<span class="token comment">//arr1 := []byte(str)   //使用byte，中文会出现乱码</span>
arr1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
arr1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'币'</span>
str <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>
str <span class="token operator">:=</span> str<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>  <span class="token comment">//获取hello</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"str="</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span>   <span class="token comment">//h币llo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⚡ 注意：byte是由字节处理的，所以如果要修改汉字的话会出现乱码。</p>
<p>⚠️ 改变：将string转化为[]rune即可，[]rune 是按照字符处理，兼容汉字</p>
<blockquote>
<p>❤️❤️❤️ 和python中修改字符串的四种方法，Go大同小异</p>
</blockquote>
<h2 id="python中字符串修改" tabindex="-1"><a class="header-anchor" href="#python中字符串修改" aria-hidden="true">#</a> python中字符串修改</h2>
<p><strong>方法1：将字符串转换成列表后修改值，然后用join组成新字符串</strong></p>
<p><img src="@source/markdown/images/9n3TcoxvLqYsUCz.png" alt="image-20220111161536827"></p>
<p><strong>方法2: 通过字符串序列切片方式</strong></p>
<p><img src="@source/markdown/images/AJL64XswhTe85mP.png" alt="image-20220111162006244"></p>
<p><strong>方法3: 使用字符串的replace函数</strong></p>
<p><img src="@source/markdown/images/sBZm3o1Ix9EgCWb.png" alt="image-20220111162133508"></p>
<p><strong>方法4: 通过给一个变量赋值(或者重新赋值)</strong></p>
<p><img src="@source/markdown/images/X2mwkKHlRDi7soF.png" alt="image-20220111162339699"></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '6.md' style='float:left'>⬆️上一节🔗</a><a href = '8.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


