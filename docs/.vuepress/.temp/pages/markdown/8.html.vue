<template><div><h1 id="golang排序和查找" tabindex="-1"><a class="header-anchor" href="#golang排序和查找" aria-hidden="true">#</a> golang排序和查找</h1>
<nav class="table-of-contents"><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#排序">排序</router-link><ul><li><router-link to="#排序的分类">排序的分类</router-link></li><li><router-link to="#交换排序">交换排序</router-link></li></ul></li><li><router-link to="#查找">查找</router-link><ul><li><router-link to="#python实例">python实例</router-link></li><li><router-link to="#python-二分查找">Python 二分查找</router-link></li><li><router-link to="#golang的二分查找">Golang的二分查找</router-link></li></ul></li><li><router-link to="#sort包排序">sort包排序</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<blockquote>
<p>©️®️ 排序和查找是一个大的方向，我准备结合数据结构，以python，C/C++为辅助，Golang为主线进行</p>
</blockquote>
<h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2>
<p>✍️ <strong>排序（sorting）是指将数据元素（或记录）的任意序列，重新排列成一个按照关键字的有序序列（递增或递减）的序列过程称为排序</strong></p>
<h3 id="排序的分类" tabindex="-1"><a class="header-anchor" href="#排序的分类" aria-hidden="true">#</a> 排序的分类</h3>
<p><strong>排序分为内部排序和外部排序，也分为稳定排序和不稳定排序</strong></p>
<hr>
<h4 id="_1-内部排序" tabindex="-1"><a class="header-anchor" href="#_1-内部排序" aria-hidden="true">#</a> 1. 内部排序</h4>
<p>内部排序是指整个排序过程完全在内存中进行，包括（<strong>交换式排序、选择式排序和插入式排序）</strong></p>
<h4 id="_2-外部排序" tabindex="-1"><a class="header-anchor" href="#_2-外部排序" aria-hidden="true">#</a> 2. 外部排序</h4>
<p>由于数据量太大，内存无法容纳全部数据，排序需要借助外部存储设备才能完成，包括**（合并排序法和直接合并排序法）**</p>
<h4 id="_3-稳定排序和不稳定排序" tabindex="-1"><a class="header-anchor" href="#_3-稳定排序和不稳定排序" aria-hidden="true">#</a> 3. 稳定排序和不稳定排序</h4>
<ol>
<li>稳定排序：排序前后两个相等的数<strong>相对位置不变</strong>，则算法稳定</li>
<li>非稳定排序：排序前后两个相等的数<strong>相对位置发生了变化</strong>，则算法不稳定</li>
</ol>
<h4 id="稳定性意义的探讨" tabindex="-1"><a class="header-anchor" href="#稳定性意义的探讨" aria-hidden="true">#</a> 稳定性意义的探讨</h4>
<blockquote>
<p>1、如果只是简单的进行数字的排序，那么稳定性将毫无意义。</p>
<p>2、如果排序的内容仅仅是一个复杂对象的某一个数字属性，那么稳定性依旧将毫无意义（所谓的交换操作的开销已经算在算法的开销内了，如果嫌弃这种开销，不如换算法好了？）</p>
<p>3、如果要排序的内容是一个复杂对象的多个数字属性，但是其原本的初始顺序毫无意义，那么稳定性依旧将毫无意义。</p>
<p>4、除非要排序的内容是一个复杂对象的多个数字属性，且其原本的初始顺序存在意义，那么我们需要在二次排序的基础上保持原有排序的意义，才需要使用到稳定性的算法，例如要排序的内容是一组原本按照价格高低排序的对象，如今需要按照销量高低排序，使用稳定性算法，可以使得想同销量的对象依旧保持着价格高低的排序展现，只有销量不同的才会重新排序。（当然，如果需求不需要保持初始的排序意义，那么使用稳定性算法依旧将毫无意义）</p>
</blockquote>
<h3 id="交换排序" tabindex="-1"><a class="header-anchor" href="#交换排序" aria-hidden="true">#</a> 交换排序</h3>
<p>✍️<strong>交换排序的基本方法是：通过两两比较待排序记录的关键字，若有不满足次序要求的一对数据则交换，直到全部满足位置</strong></p>
<h4 id="_1-冒泡排序-bubble-sort" tabindex="-1"><a class="header-anchor" href="#_1-冒泡排序-bubble-sort" aria-hidden="true">#</a> 1. 冒泡排序（bubble sort)</h4>
<blockquote>
<p>冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢&quot;浮&quot;到数列的顶端。</p>
<p><img src="https://www.runoob.com/wp-content/uploads/2019/03/bubbleSort.gif" alt="img"></p>
</blockquote>
<p><strong>先用简单的python实现</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
 
    <span class="token comment"># 遍历所有数组元素</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
 		exchange <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">#看本次是否有交换</span>
        <span class="token comment"># Last i elements are already in place</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
 
            <span class="token keyword">if</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">:</span>
                arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>   <span class="token operator">//</span>直接交换，无需中间变量
            	exchange <span class="token operator">=</span> <span class="token number">1</span>
 		<span class="token keyword">if</span> exchange <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> arr
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span>
 
bubbleSort<span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
 
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"排序后的数组:"</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"%d"</span> <span class="token operator">%</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<p><img src="@source/markdown/images/ZfTi3Px9mgyWXnJ.png" alt="image-20220112171742746"></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">bubble_sort</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">:</span>                                       
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        a<span class="token operator">=</span><span class="token number">0</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token operator">-</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                a<span class="token operator">=</span><span class="token number">1</span>
        <span class="token keyword">if</span> a<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> array
    <span class="token keyword">return</span> array


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>bubble_sort<span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<p><img src="https://s2.loli.net/2022/01/12/5MBW648Xt1DFsdg.png" alt="image-20220112171805998"></p>
<p><strong>思想：</strong></p>
<p><strong>设定了一个辅助，一旦发现了某一趟没有要进行交换的操作，就立刻终止程序，此时可以减少时间复杂度</strong></p>
<p><strong>下面是Golang的冒泡排序算法：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    values <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">93</span><span class="token punctuation">,</span> <span class="token number">84</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">93</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">}</span>
    start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>     <span class="token comment">//打印输出当前的切片</span>
    <span class="token function">BubbleAsort</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>     <span class="token comment">//交换函数，values[i]>values[j]  从小到大</span>
    <span class="token function">BubbleZsort</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>     <span class="token comment">//交换函数，values[i]&lt;values[j]  从大到小</span>
    end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"代码执行的时间为："</span><span class="token punctuation">,</span>end<span class="token operator">-</span>start<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BubbleAsort</span><span class="token punctuation">(</span>values <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        a <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span>  values<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">></span>values<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">{</span>
                values<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>values<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> values<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>values<span class="token punctuation">[</span>i<span class="token punctuation">]</span>    <span class="token comment">//和python一样直接交换</span>
				a <span class="token operator">=</span> <span class="token number">1</span>            
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> a <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BubbleZsort</span><span class="token punctuation">(</span>values <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span>  values<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span>values<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">{</span>
                values<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>values<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> values<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>values<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                a <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> a <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/PnmtZAOsvpDfFNe.png" alt="image-20220112172851621"></p>
<p><strong>我们可以用Golang来统计下使用<code v-pre>a</code>和不使用<code v-pre>a</code>代码执行时间</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span> 
    <span class="token function">BubbleAsort</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>    
    <span class="token function">BubbleZsort</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>     
    end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"代码执行的时间为："</span><span class="token punctuation">,</span>end<span class="token operator">-</span>start<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/markdown/images/LGes3IRYuVhX1Za.png" alt="image-20220112182612728"></p>
<p>根据上下的大数据分析，可见代码的执行时间确实提升了😂😂😂</p>
<h4 id="_2-快速排序-quick-sort" tabindex="-1"><a class="header-anchor" href="#_2-快速排序-quick-sort" aria-hidden="true">#</a> 2.快速排序(quick sort)</h4>
<p>快速排序由于排序效率在同为<code v-pre>O(N*logN)</code>的几种排序方法中效率较高，因此经常被采用，再加上快速排序思想----分治法也确实实用，因此很多软件公司的笔试面试，包括像腾讯，微软等知名IT公司都喜欢考这个，还有大大小的程序方面的考试如软考，考研中也常常出现快速排序的身影。</p>
<p>总的说来，要直接默写出快速排序还是有一定难度的，因为本人就自己的理解对快速排序作了下白话解释，希望对大家理解有帮助，达到快速排序，快速搞定。</p>
<p><img src="https://s2.loli.net/2022/01/11/5eTzfvrD37wNkqu.gif" alt="img"></p>
<p>快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。</p>
<p>该方法的基本思想是：</p>
<ul>
<li>
<p>1．先从数列中取出一个数作为基准数。</p>
</li>
<li>
<p>2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。</p>
</li>
<li>
<p>3．再对左右区间重复第二步，直到各区间只有一个数。</p>
</li>
<li>
<ul>
<li>
<p>虽然快速排序称为分治法，但分治法这三个字显然无法很好的概括快速排序的全部步骤。因此我的对快速排序作了进一步的说明：挖坑填数+分治法：</p>
</li>
<li>
<p>先来看实例吧，定义下面再给出（最好能用自己的话来总结定义，这样对实现代码会有帮助）。</p>
</li>
<li>
<p>以一个数组作为示例，取区间第一个数为基准数。</p>
</li>
<li>
<table>
<thead>
<tr>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
</tr>
</thead>
<tbody>
<tr>
<td>72</td>
<td>6</td>
<td>57</td>
<td>88</td>
<td>60</td>
<td>42</td>
<td>83</td>
<td>73</td>
<td>48</td>
<td>85</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>初始时，i = 0; j = 9;  X = a[i] = 72</p>
</li>
<li>
<p>由于已经将 a[0] 中的数保存到 X 中，可以理解成在数组 a[0] 上挖了个坑，可以将其它数据填充到这来。</p>
</li>
<li>
<p>从j开始向前找一个比X小或等于X的数。当j=8，符合条件，将a[8]挖出再填到上一个坑a[0]中。a[0]=a[8]; i++; 这样一个坑a[0]就被搞定了，但又形成了一个新坑a[8]，这怎么办了？简单，再找数字来填a[8]这个坑。这次从i开始向后找一个大于X的数，当i=3，符合条件，将a[3]挖出再填到上一个坑中a[8]=a[3]; j--;</p>
</li>
<li>
<p>数组变为：</p>
</li>
<li>
<table>
<thead>
<tr>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
</tr>
</thead>
<tbody>
<tr>
<td>48</td>
<td>6</td>
<td>57</td>
<td>88</td>
<td>60</td>
<td>42</td>
<td>83</td>
<td>73</td>
<td>88</td>
<td>85</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>i = 3;  j = 7;  X=72</p>
</li>
<li>
<p>再重复上面的步骤，先从后向前找，再从前向后找。</p>
</li>
<li>
<p>从j开始向前找，当j=5，符合条件，将a[5]挖出填到上一个坑中，a[3] = a[5]; i++;</p>
</li>
<li>
<p>从i开始向后找，当i=5时，由于i==j退出。</p>
</li>
<li>
<p>此时，i = j = 5，而a[5]刚好又是上次挖的坑，因此将X填入a[5]。</p>
</li>
<li>
<p>数组变为：</p>
</li>
<li>
<table>
<thead>
<tr>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
</tr>
</thead>
<tbody>
<tr>
<td>48</td>
<td>6</td>
<td>57</td>
<td>42</td>
<td>60</td>
<td>72</td>
<td>83</td>
<td>73</td>
<td>88</td>
<td>85</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>可以看出a[5]前面的数字都小于它，a[5]后面的数字都大于它。因此再对a[0…4]和a[6…9]这二个子区间重复上述步骤就可以了。</p>
</li>
<li>
<p>对挖坑填数进行总结:</p>
</li>
<li>
<ul>
<li>1．i =L; j = R; 将基准数挖出形成第一个坑a[i]。</li>
<li>2．j--由后向前找比它小的数，找到后挖出此数填前一个坑a[i]中。</li>
<li>3．i++由前向后找比它大的数，找到后也挖出此数填到前一个坑a[j]中。</li>
<li>4．再重复执行2，3二步，直到i==j，将基准数填入a[i]中。</li>
</ul>
</li>
<li>
<p>照着这个总结很容易实现挖坑填数的代码：</p>
</li>
</ul>
</li>
</ul>
<div class="language-C++ ext-C++ line-numbers-mode"><pre v-pre class="language-C++"><code>int AdjustArray(int s[], int l, int r) //返回调整后基准数的位置
{
    int i = l, j = r;
    int x = s[l]; //s[l]即s[i]就是第一个坑
    while (i &lt; j)
    {
        // 从右向左找小于x的数来填s[i]
        while(i &lt; j &amp;&amp; s[j] &gt;= x) 
            j--;  
        if(i &lt; j) 
        {
            s[i] = s[j]; //将s[j]填到s[i]中，s[j]就形成了一个新的坑
            i++;
        }
 
        // 从左向右找大于或等于x的数来填s[j]
        while(i &lt; j &amp;&amp; s[i] &lt; x)
            i++;  
        if(i &lt; j) 
        {
            s[j] = s[i]; //将s[i]填到s[j]中，s[i]就形成了一个新的坑
            j--;
        }
    }
    //退出时，i等于j。将x填到这个坑中。
    s[i] = x;
 
    return i;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再写分治法的代码：</p>
<div class="language-C++ ext-C++ line-numbers-mode"><pre v-pre class="language-C++"><code>void quick_sort1(int s[], int l, int r)
{
    if (l &lt; r)
    {
        int i = AdjustArray(s, l, r);//先成挖坑填数法调整s[]
        quick_sort1(s, l, i - 1); // 递归调用 
        quick_sort1(s, i + 1, r);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ ext-C++ line-numbers-mode"><pre v-pre class="language-C++"><code>//快速排序
void quick_sort(int s[], int l, int r)
{
    if (l &lt; r)
    {
        //Swap(s[l], s[(l + r) / 2]); //将中间的这个数和第一个数交换 参见注1
        int i = l, j = r, x = s[l];
        while (i &lt; j)
        {
            while(i &lt; j &amp;&amp; s[j] &gt;= x) // 从右向左找第一个小于x的数
                j--;  
            if(i &lt; j) 
                s[i++] = s[j];
            
            while(i &lt; j &amp;&amp; s[i] &lt; x) // 从左向右找第一个大于等于x的数
                i++;  
            if(i &lt; j) 
                s[j--] = s[i];
        }
        s[i] = x;
        quick_sort(s, l, i - 1); // 递归调用 
        quick_sort(s, i + 1, r);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用python来实现" tabindex="-1"><a class="header-anchor" href="#使用python来实现" aria-hidden="true">#</a> 使用python来实现</h4>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>low<span class="token punctuation">,</span>high<span class="token punctuation">)</span><span class="token punctuation">:</span> 
    i <span class="token operator">=</span> <span class="token punctuation">(</span> low<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>         <span class="token comment"># 最小元素索引</span>
    pivot <span class="token operator">=</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span>     
  
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>low <span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">:</span> 
  
        <span class="token comment"># 当前元素小于或等于 pivot </span>
        <span class="token keyword">if</span>   arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> pivot<span class="token punctuation">:</span> 
          
            i <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span> 
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> 
  
    arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> 
    <span class="token keyword">return</span> <span class="token punctuation">(</span> i<span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">)</span> 
  
 
<span class="token comment"># arr[] --> 排序数组</span>
<span class="token comment"># low  --> 起始索引</span>
<span class="token comment"># high  --> 结束索引</span>
  
<span class="token comment"># 快速排序函数</span>
<span class="token keyword">def</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>low<span class="token punctuation">,</span>high<span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token keyword">if</span> low <span class="token operator">&lt;</span> high<span class="token punctuation">:</span> 
  
        pi <span class="token operator">=</span> partition<span class="token punctuation">(</span>arr<span class="token punctuation">,</span>low<span class="token punctuation">,</span>high<span class="token punctuation">)</span> 
  
        quickSort<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> low<span class="token punctuation">,</span> pi<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> 
        quickSort<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> pi<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> high<span class="token punctuation">)</span> 
  
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span> 
n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> 
quickSort<span class="token punctuation">(</span>arr<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"排序后的数组:"</span><span class="token punctuation">)</span> 
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"%d"</span> <span class="token operator">%</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>排序后的数组:
1
5
7
8
9
10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h2>
<p>线性查找指按一定的顺序检查数组中每一个元素，直到找到所要寻找的特定值为止。</p>
<p><img src="@source/markdown/images/if5Ux4rMszW9NRl.png" alt="img"></p>
<h3 id="python实例" tabindex="-1"><a class="header-anchor" href="#python实例" aria-hidden="true">#</a> python实例</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>def <span class="token function">search</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> n<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span> 
  
    <span class="token keyword">for</span> i in <span class="token keyword">range</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span> 
            <span class="token keyword">return</span> i<span class="token punctuation">;</span> 
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> 
  
# 在数组 arr 中查找字符 D
arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token char">'A'</span><span class="token punctuation">,</span> <span class="token char">'B'</span><span class="token punctuation">,</span> <span class="token char">'C'</span><span class="token punctuation">,</span> <span class="token char">'D'</span><span class="token punctuation">,</span> <span class="token char">'E'</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> 
x <span class="token operator">=</span> <span class="token char">'D'</span><span class="token punctuation">;</span> 
n <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> 
result <span class="token operator">=</span> <span class="token function">search</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> n<span class="token punctuation">,</span> x<span class="token punctuation">)</span> 
<span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"元素不在数组中"</span><span class="token punctuation">)</span> 
<span class="token keyword">else</span><span class="token punctuation">:</span> 
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"元素在数组中的索引为"</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>元素在数组中的索引为 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="python-二分查找" tabindex="-1"><a class="header-anchor" href="#python-二分查找" aria-hidden="true">#</a> Python 二分查找</h3>
<p>二分搜索是一种在有序数组中查找某一特定元素的搜索算法。搜索过程从数组的中间元素开始，如果中间元素正好是要查找的元素，则搜索过程结束；如果某一特定元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半中查找，而且跟开始一样从中间元素开始比较。如果在某一步骤数组为空，则代表找不到。这种搜索算法每一次比较都使搜索范围缩小一半。</p>
<p><img src="@source/markdown/images/owMPHCqAb8N2z7O.png" alt="img"></p>
<p>💡简单的一个案例如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 返回 x 在 arr 中的索引，如果不存在返回 -1</span>
<span class="token keyword">def</span> <span class="token function">binarySearch</span> <span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span> 
  
    <span class="token comment"># 基本判断</span>
    <span class="token keyword">if</span> r <span class="token operator">>=</span> l<span class="token punctuation">:</span> 
  
        mid <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>
  
        <span class="token comment"># 元素整好的中间位置</span>
        <span class="token keyword">if</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> x<span class="token punctuation">:</span> 
            <span class="token keyword">return</span> mid 
          
        <span class="token comment"># 元素小于中间位置的元素，只需要再比较左边的元素</span>
        <span class="token keyword">elif</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">></span> x<span class="token punctuation">:</span> 
            <span class="token keyword">return</span> binarySearch<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span> 
  
        <span class="token comment"># 元素大于中间位置的元素，只需要再比较右边的元素</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span> 
            <span class="token keyword">return</span> binarySearch<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> x<span class="token punctuation">)</span> 
  
    <span class="token keyword">else</span><span class="token punctuation">:</span> 
        <span class="token comment"># 不存在</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  
<span class="token comment"># 测试数组</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">40</span> <span class="token punctuation">]</span> 
x <span class="token operator">=</span> <span class="token number">10</span>
  
<span class="token comment"># 函数调用</span>
result <span class="token operator">=</span> binarySearch<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span> 
  
<span class="token keyword">if</span> result <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span> 
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"元素在数组中的索引为 %d"</span> <span class="token operator">%</span> result <span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span> 
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">"元素不在数组中"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>元素在数组中的索引为 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="golang的二分查找" tabindex="-1"><a class="header-anchor" href="#golang的二分查找" aria-hidden="true">#</a> Golang的二分查找</h3>
<p><strong>二分查找的前提是对一个==有序数组==</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">BinaryFind</span><span class="token punctuation">(</span>arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span>lef <span class="token builtin">int</span><span class="token punctuation">,</span>rig <span class="token builtin">int</span><span class="token punctuation">,</span>find <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token comment">//数组是值传递，需要使用指针可以改变</span>
    
    <span class="token comment">//判断是否在数组的范围中</span>
    <span class="token keyword">if</span> lef <span class="token operator">></span> rig<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"找不到"</span><span class="token punctuation">)</span>   <span class="token comment">//注意递归调用符合进站顺序，所以</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    middle <span class="token operator">:=</span> <span class="token punctuation">(</span>lef <span class="token operator">+</span> rig<span class="token punctuation">)</span> <span class="token operator">/</span><span class="token number">2</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>arr<span class="token punctuation">)</span><span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">></span> find<span class="token punctuation">{</span>
        <span class="token comment">//大于要查找的数，此时应该向左边找</span>
        <span class="token function">BinaryFind</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>lef<span class="token punctuation">,</span>middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token comment">//注意，此时arr本身就是指针，所以不需要地址符</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>arr<span class="token punctuation">)</span><span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&lt;</span> find<span class="token punctuation">{</span>
        <span class="token function">BinaryFind</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>middle<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>rig<span class="token punctuation">)</span>     
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">//相等说明找到</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"找好了，下标为%v \n"</span><span class="token punctuation">,</span>middle<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span>
    <span class="token function">BinaryFind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译：</p>
<p><img src="@source/markdown/images/xJQEm1oHYKC2uO5.png" alt="image-20220112103850302"></p>
<p><strong>可以不传递地址，将数组转化为切片类型</strong></p>
<h2 id="sort包排序" tabindex="-1"><a class="header-anchor" href="#sort包排序" aria-hidden="true">#</a> sort包排序</h2>
<div class="custom-container tip"><p class="custom-container-title">sort包排序</p>
<p>升序排序如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>intList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span>
float8List <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span> <span class="token punctuation">{</span><span class="token number">2.3</span><span class="token punctuation">,</span><span class="token number">1.4</span><span class="token punctuation">,</span><span class="token number">1.5</span><span class="token punctuation">}</span>
stringList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"c"</span><span class="token punctuation">,</span><span class="token string">"d"</span><span class="token punctuation">,</span><span class="token string">"e"</span><span class="token punctuation">,</span><span class="token string">"a"</span><span class="token punctuation">,</span><span class="token string">"b"</span><span class="token punctuation">}</span>

sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>intList<span class="token punctuation">)</span>
sort<span class="token punctuation">.</span><span class="token function">Float64s</span><span class="token punctuation">(</span>float8List<span class="token punctuation">)</span>
sort<span class="token punctuation">.</span><span class="token function">Strings</span><span class="token punctuation">(</span>stringList<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sort包可以使用<code v-pre>sort.Reverse(slice)</code>来调换<code v-pre>slice.Interface.Less</code>，也就是比较函数，所以，int、float64、string的逆序排序函数可以这么写：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>intList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span>
float8List <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span> <span class="token punctuation">{</span><span class="token number">2.3</span><span class="token punctuation">,</span><span class="token number">1.4</span><span class="token punctuation">,</span><span class="token number">1.5</span><span class="token punctuation">}</span>
stringList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"c"</span><span class="token punctuation">,</span><span class="token string">"d"</span><span class="token punctuation">,</span><span class="token string">"e"</span><span class="token punctuation">,</span><span class="token string">"a"</span><span class="token punctuation">,</span><span class="token string">"b"</span><span class="token punctuation">}</span>

sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">Reverse</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">IntSlice</span><span class="token punctuation">(</span>intList<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">Reverse</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">IntSlice</span><span class="token punctuation">(</span>float8List<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">Reverse</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">IntSlice</span><span class="token punctuation">(</span>intList<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '7.md' style='float:left'>⬆️上一节🔗</a><a href = '9.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


