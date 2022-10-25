<template><div><h1 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法</h1>
<p>[[otc]]</p>
<p>[TOC]</p>
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
<div class="custom-container tip"><p class="custom-container-title">前往冒泡排序学习</p>
<p><strong><RouterLink to="/go-advancend/markdown/go%E8%AF%AD%E8%A8%80%E7%9A%84%E7%9A%84%E6%8E%92%E5%BA%8F%E5%92%8C%E6%9F%A5%E6%89%BE.html">冒泡排序是最基础的排序，也是时间复杂度最高的排序方法</RouterLink></strong></p>
<h2 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h2>
<p><strong>从小到大，层层解析排序</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//排序算法  -- 选择排序</span>
<span class="token keyword">func</span> <span class="token function">SelectSort</span><span class="token punctuation">(</span>arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//数组默认是值传递，要想改变数组的值，就必须要指针引用传递</span>
	arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">600</span> <span class="token comment">//Go语言底层优化</span>
	<span class="token comment">//此时进行下面的排序 -- 先完成找到最小的值和arr[0]交换</span>
	<span class="token keyword">var</span> min <span class="token builtin">int</span>
	<span class="token comment">/*第一次排序如下：
	min = arr[0]
	minIndx := 0 //存放最小值的下标
	for i, v := range arr {
		if min > v {
			//假设最大值交换
			min = v //找到最小值
			minIndx = i
		}
	}

	//交换
	if minIndx != 0 {
		arr[0], arr[minIndx] = arr[minIndx], arr[0]
		//相当于交换，Go语言底层使用了中间变量进行处理
	}
	//第二次
		min = arr[1]
	minIndx := 1 //存放最小值的下标
	for i, v := range arr {
		if min > v {
			//假设最大值交换
			min = v //找到最小值
			minIndx = i
		}
	}

	//交换
	if minIndx != 1 {
		arr[1], arr[minIndx] = arr[minIndx], arr[1]
		//相当于交换，Go语言底层使用了中间变量进行处理
	}
	*/</span>
	<span class="token comment">//对上面代码进行循环处理</span>
	<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
		min <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
		minIndx <span class="token operator">:=</span> j <span class="token comment">//存放最小值的下标</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> min <span class="token operator">></span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				<span class="token comment">//假设最大值交换</span>
				min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">//找到最小值</span>
				minIndx <span class="token operator">=</span> i
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//交换</span>
		<span class="token keyword">if</span> minIndx <span class="token operator">!=</span> j <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>minIndx<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>minIndx<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
			<span class="token comment">//相当于交换，Go语言底层使用了中间变量进行处理</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"第"</span><span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"次循环"</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//定义一个数组  -- 从小到大排序</span>
	arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">}</span>
	<span class="token function">SelectSort</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"主函数"</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<p><img src="@source/go-advancend/markdown/images/f8xmIhTgXNzSEZM.png" alt="image-20220408215647485"></p>
<p><strong>从大到小，使用Go - range 和sort包排序</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//排序算法  -- 选择排序</span>
<span class="token keyword">func</span> <span class="token function">SelectSort</span><span class="token punctuation">(</span>arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> max <span class="token builtin">int</span>
	<span class="token keyword">for</span> j<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> arr <span class="token punctuation">{</span>
		max <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
		minIndx <span class="token operator">:=</span> j <span class="token comment">//存放最小值的下标</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> max <span class="token operator">></span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				<span class="token comment">//假设最大值交换</span>
				max <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">//找到最小值</span>
				minIndx <span class="token operator">=</span> i
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//交换</span>
		<span class="token keyword">if</span> minIndx <span class="token operator">!=</span> j <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>minIndx<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>minIndx<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
			<span class="token comment">//相当于交换，Go语言底层使用了中间变量进行处理</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"第"</span><span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"次循环"</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//定义一个数组  -- 从小到大排序</span>
	arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">}</span>
	<span class="token function">SelectSort</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"主函数"</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/go-advancend/markdown/images/N26PriUIvhj81Ca.png" alt="image-20220408215606660"></p>
<p><strong>使用sort包</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sort"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Sorting a slice of Strings</span>
	strs <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"quick"</span><span class="token punctuation">,</span> <span class="token string">"brown"</span><span class="token punctuation">,</span> <span class="token string">"fox"</span><span class="token punctuation">,</span> <span class="token string">"jumps"</span><span class="token punctuation">}</span>
	sort<span class="token punctuation">.</span><span class="token function">Strings</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Sors strings: "</span><span class="token punctuation">,</span> strs<span class="token punctuation">)</span>

	<span class="token comment">// Sorting a slice of Integers</span>
	ints <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">}</span>
	ints2 <span class="token operator">:=</span> ints<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>ints<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"ints = : "</span><span class="token punctuation">,</span> ints<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"数据类型为%T"</span><span class="token punctuation">,</span> ints<span class="token punctuation">)</span>

	<span class="token comment">//反转打印方法</span>
	sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">Reverse</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">IntSlice</span><span class="token punctuation">(</span>ints2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"反转打印:"</span><span class="token punctuation">,</span> ints2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"数据类型为%T"</span><span class="token punctuation">,</span> ints2<span class="token punctuation">)</span>

	<span class="token comment">// Sorting a slice of Floats</span>
	floats <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span><span class="token punctuation">{</span><span class="token number">176.8</span><span class="token punctuation">,</span> <span class="token number">19.5</span><span class="token punctuation">,</span> <span class="token number">20.8</span><span class="token punctuation">,</span> <span class="token number">57.4</span><span class="token punctuation">}</span>
	sort<span class="token punctuation">.</span><span class="token function">Float64s</span><span class="token punctuation">(</span>floats<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Sorted floats: "</span><span class="token punctuation">,</span> floats<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"数据类型为%T"</span><span class="token punctuation">,</span> floats<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PS C:\Users\smile\Desktop\区块链\code\chapter05\ifdemo> go run .\main2.go
Sors strings:  [brown fox jumps quick]
ints = :  [14 19 25 56 67 78]
数据类型为[]int
反转打印: [78 67 56 25 19 14]
数据类型为[]int
Sorted floats:  [19.5 20.8 57.4 176.8]
数据类型为[]float64
PS C:\Users\smile\Desk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h2>
<p>插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。</p>
<p>插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。</p>
<h3 id="_1-算法步骤" tabindex="-1"><a class="header-anchor" href="#_1-算法步骤" aria-hidden="true">#</a> 1. 算法步骤</h3>
<p>将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。</p>
<p>从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）</p>
<h3 id="_2-动图演示" tabindex="-1"><a class="header-anchor" href="#_2-动图演示" aria-hidden="true">#</a> 2. 动图演示</h3>
<p><img src="@source/go-advancend/markdown/images/GN7ZSp1vy9uRWs8.gif" alt="img"></p>
<p><strong>代码实现</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">swich</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">/*
		//完成第一次，给第二个元素进行插入
		insertVal := arr[1]  //存放第二个元素的值
		insertIndex := 1 - 1 //下标

		for insertIndex >= 0 &amp;&amp; arr[insertIndex] &lt; insertVal {
			//如果插入的大，不断地后移
			arr[insertIndex+1] = arr[insertIndex] //数据后移
			insertIndex--
		}
		//插入
		if insertIndex+1 != 1 {
			arr[insertIndex+1] = insertVal
		}
	*/</span>
	<span class="token comment">//第n次</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		insertVal <span class="token operator">:=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>  <span class="token comment">//存放第二个元素的值</span>
		insertIndex <span class="token operator">:=</span> i <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">//下标</span>

		<span class="token keyword">for</span> insertIndex <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>insertIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> insertVal <span class="token punctuation">{</span>
			<span class="token comment">//如果插入的大，不断地后移</span>
			arr<span class="token punctuation">[</span>insertIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>insertIndex<span class="token punctuation">]</span> <span class="token comment">//数据后移</span>
			insertIndex<span class="token operator">--</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//插入</span>
		<span class="token keyword">if</span> insertIndex<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">!=</span> i <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>insertIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> insertVal
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"第"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">"次插入后的数组为："</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"arr = "</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">576</span><span class="token punctuation">}</span>
	arr1 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"arr1的值为："</span><span class="token punctuation">,</span> arr1<span class="token punctuation">)</span>
	<span class="token function">swich</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"arr 中main的值为："</span><span class="token punctuation">,</span> arr1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Running] go run "c:\Users\smile\Desktop\区块链\code\chapter04\demo03\main.go"
arr1的值为： [23 34 23 12 2 3 45 6 576]
第 1 次插入后的数组为： [34 23 23 12 2 3 45 6 576]
第 2 次插入后的数组为： [34 23 23 12 2 3 45 6 576]
第 3 次插入后的数组为： [34 23 23 12 2 3 45 6 576]
第 4 次插入后的数组为： [34 23 23 12 2 3 45 6 576]
第 5 次插入后的数组为： [34 23 23 12 3 2 45 6 576]
第 6 次插入后的数组为： [45 34 23 23 12 3 2 6 576]
第 7 次插入后的数组为： [45 34 23 23 12 6 3 2 576]
第 8 次插入后的数组为： [576 45 34 23 23 12 6 3 2]
arr =  [576 45 34 23 23 12 6 3 2]
arr 中main的值为： [576 45 34 23 23 12 6 3 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h2>
<p>快速排序使用分治法（Divide and conquer）策略来把一个序列（list）分为较小和较大的2个子序列，然后递归地排序两个子序列。</p>
<p>步骤为：</p>
<ul>
<li>挑选基准值：从数列中挑出一个元素，称为&quot;基准&quot;（pivot）;</li>
<li>分割：重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（与基准值相等的数可以到任何一边）。在这个分割结束之后，对基准值的排序就已经完成;</li>
<li>递归排序子序列：递归地将小于基准值元素的子序列和大于基准值元素的子序列排序。</li>
</ul>
<p>递归到最底部的判断条件是数列的大小是零或一，此时该数列显然已经有序。</p>
<p>选取基准值有数种具体方法，此选取方法对排序的时间性能有决定性影响。</p>
<p><img src="@source/go-advancend/markdown/images/Ne8Ppn3qlCGoaHu.gif" alt="img"></p>
<p><strong>代码实现</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token comment">// 快速排序入口函数</span>
<span class="token keyword">func</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> p <span class="token builtin">int</span><span class="token punctuation">,</span> r <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归终止条件</span>
    <span class="token keyword">if</span> p <span class="token operator">>=</span> r <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取分区位置</span>
    q <span class="token operator">:=</span> <span class="token function">partition</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> p<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
    <span class="token comment">// 递归分区（排序是在定位 pivot 的过程中实现的）</span>
    <span class="token function">quickSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">quickSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> q <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定位 pivot</span>
<span class="token keyword">func</span> <span class="token function">partition</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> p <span class="token builtin">int</span><span class="token punctuation">,</span> r <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// 以当前数据序列最后一个元素作为初始 pivot</span>
    pivot <span class="token operator">:=</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span>
    <span class="token comment">// 初始化 i、j 下标</span>
    i <span class="token operator">:=</span> p
    <span class="token comment">// 后移 j 下标的遍历过程</span>
    <span class="token keyword">for</span> j <span class="token operator">:=</span> p<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> r<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将比 pivot 小的数丢到 [p...i-1] 中，剩下的 [i...j] 区间都是比 pivot 大的</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot <span class="token punctuation">{</span>
            <span class="token comment">// 互换 i、j 下标对应数据</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token comment">// 将 i 下标后移一位</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 最后将 pivot 与 i 下标对应数据值互换</span>
    <span class="token comment">// 这样一来，pivot 就位于当前数据序列中间，i 也就是 pivot 值对应的下标</span>
    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> pivot<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// 返回 i 作为 pivot 分区位置</span>
    <span class="token keyword">return</span> i
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span>
    <span class="token function">quickSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '29.md' style='float:left'>⬆️上一节🔗</a><a href = '并发.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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
</div>
</div></template>


