<template><div><ul>
<li><a href="https://github.com/3293172751" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第13节-go语言list" tabindex="-1"><a class="header-anchor" href="#第13节-go语言list" aria-hidden="true">#</a> 第13节 go语言list</h1>
<ul>
<li><RouterLink to="/go-advancend/">回到目录</RouterLink></li>
<li><RouterLink to="/go-advancend/markdown/12.html">上一节</RouterLink></li>
</ul>
<blockquote>
<p>❤️💕💕Go语言高级篇章,在此之前建议您先了解基础和进阶篇。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
<h3 id="go语言基础篇" tabindex="-1"><a class="header-anchor" href="#go语言基础篇" aria-hidden="true">#</a> <strong><a href="https://github.com/3293172751/Block_Chain/blob/master/TOC.md" target="_blank" rel="noopener noreferrer">Go语言基础篇<ExternalLinkIcon/></a></strong></h3>
<h3 id="go语言100篇进阶" tabindex="-1"><a class="header-anchor" href="#go语言100篇进阶" aria-hidden="true">#</a> <strong><a href="https://github.com/3293172751/Block_Chain/blob/master/Gomd_super/README.md" target="_blank" rel="noopener noreferrer">Go语言100篇进阶<ExternalLinkIcon/></a></strong></h3>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h2>
<p>💡list是一种非连续存储的容器，由多个节点组成，结点通过一些变量记录彼此之间的关系。list有多种实现方式，如：单向链表，双向链表等等。</p>
<p>Go语言标准库中提供了高级数据结构list，具体在包<code v-pre>comtainer/list</code></p>
<ul>
<li>[x] <a href="https://studygolang.com/pkgdoc" target="_blank" rel="noopener noreferrer">Go语言中文文档list包<ExternalLinkIcon/></a></li>
</ul>
<h2 id="声明list" tabindex="-1"><a class="header-anchor" href="#声明list" aria-hidden="true">#</a> 声明list</h2>
<blockquote>
<p>声明<code v-pre>list</code>有两种方法</p>
<ul>
<li>New</li>
<li>list</li>
</ul>
</blockquote>
<h3 id="通过container-list包的new方法声明" tabindex="-1"><a class="header-anchor" href="#通过container-list包的new方法声明" aria-hidden="true">#</a> 通过container/list包的new方法声明</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>变量名 :<span class="token operator">=</span> list.New<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="var声明list" tabindex="-1"><a class="header-anchor" href="#var声明list" aria-hidden="true">#</a> var声明list</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var 变量名 list.List
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="element常用方法" tabindex="-1"><a class="header-anchor" href="#element常用方法" aria-hidden="true">#</a> element常用方法</h2>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#Element.Next" target="_blank" rel="noopener noreferrer">func (e *Element) Next() *Element<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p>Next返回链表的最后一个元素或者nil</p>
</blockquote>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#Element.Prev" target="_blank" rel="noopener noreferrer">func (e *Element) Prev() *Element<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p>Prev返回链表的前一个元素或者nil</p>
</blockquote>
<h2 id="list常用方法" tabindex="-1"><a class="header-anchor" href="#list常用方法" aria-hidden="true">#</a> list常用方法</h2>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#New" target="_blank" rel="noopener noreferrer">func New() *List<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p>New创建一个链表</p>
</blockquote>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.Init" target="_blank" rel="noopener noreferrer">func (l *List) Init() *List<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p>init清空链表</p>
</blockquote>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.Len" target="_blank" rel="noopener noreferrer">func (l *List) Len() int<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p>Len返回链表中的元素个数，复杂度<code v-pre>O(1)</code></p>
</blockquote>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.Front" target="_blank" rel="noopener noreferrer">func (l *List) Front() *Element<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p>Front返回链表中的第一个元素或者nil</p>
</blockquote>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.Back" target="_blank" rel="noopener noreferrer">func (l *List) Back() *Element<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p>Back返回链表最后的一个元素或者nil</p>
</blockquote>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.PushFront" target="_blank" rel="noopener noreferrer">func (l *List) PushFront(v interface{}) *Element<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p>将一个值为<code v-pre>v</code>的新元素插入链表的第一个位置，返回生成和的新元素</p>
</blockquote>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.PushFrontList" target="_blank" rel="noopener noreferrer">func (l *List) PushFrontList(other *List)<ExternalLinkIcon/></a></li>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.PushBack" target="_blank" rel="noopener noreferrer">func (l *List) PushBack(v interface{}) *Element<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p><code v-pre>PushBack</code>将一个值为<code v-pre>v</code>的新元素插入链表的最后一个位置，返回生成的新元素</p>
</blockquote>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.PushBackList" target="_blank" rel="noopener noreferrer">func (l *List) PushBackList(other *List)<ExternalLinkIcon/></a></li>
</ul>
<blockquote>
<p><code v-pre>PushBackList</code>最佳另一个列表到末尾，PushBack创建链表<code v-pre>other</code>的拷贝，并且将链表的最后一个位置链接到拷贝的第一个位置。</p>
</blockquote>
<ul>
<li>
<p><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.InsertBefore" target="_blank" rel="noopener noreferrer">func (l *List) InsertBefore(v interface{}, mark *Element) *Element<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.InsertAfter" target="_blank" rel="noopener noreferrer">func (l *List) InsertAfter(v interface{}, mark *Element) *Element<ExternalLinkIcon/></a></p>
</li>
</ul>
<blockquote>
<p><code v-pre>InserAfter</code>将一个值为v的新与那束插入到<code v-pre>mark</code>后面，并且返回生成的元素。</p>
</blockquote>
<ul>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.MoveToFront" target="_blank" rel="noopener noreferrer">func (l *List) MoveToFront(e *Element)<ExternalLinkIcon/></a></li>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.MoveToBack" target="_blank" rel="noopener noreferrer">func (l *List) MoveToBack(e *Element)<ExternalLinkIcon/></a></li>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.MoveBefore" target="_blank" rel="noopener noreferrer">func (l *List) MoveBefore(e, mark *Element)<ExternalLinkIcon/></a></li>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.MoveAfter" target="_blank" rel="noopener noreferrer">func (l *List) MoveAfter(e, mark *Element)<ExternalLinkIcon/></a></li>
<li><a href="https://studygolang.com/static/pkgdoc/pkg/container_list.htm#List.Remove" target="_blank" rel="noopener noreferrer">func (l *List) Remove(e *Element) interface{}<ExternalLinkIcon/></a></li>
</ul>
<h2 id="遍历list" tabindex="-1"><a class="header-anchor" href="#遍历list" aria-hidden="true">#</a> 遍历list</h2>
<h3 id="顺序遍历" tabindex="-1"><a class="header-anchor" href="#顺序遍历" aria-hidden="true">#</a> 顺序遍历</h3>
<p>💡简单的一个案例如下：</p>
<blockquote>
<p>不管游标在哪个位置，只要一旦调用<code v-pre>Front</code>，游标都会跑到第一个位置</p>
<p>Front返回链表中的第一个元素或者nil</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> e:<span class="token operator">=</span> l.Front<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e<span class="token operator">!=</span>nil<span class="token punctuation">;</span> <span class="token assign-left variable">e</span><span class="token operator">=</span>e.Next<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt.Print<span class="token punctuation">(</span>e.Value,<span class="token string">""</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逆序遍历" tabindex="-1"><a class="header-anchor" href="#逆序遍历" aria-hidden="true">#</a> 逆序遍历</h3>
<p>💡简单的一个案例如下：</p>
<blockquote>
<p>这个是逆序遍历，<code v-pre>l.Back()</code>指向的是最后一个值或者<code v-pre>nil</code>，<code v-pre>e.Prew</code>指向的开头</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> e<span class="token operator">:=</span>l<span class="token punctuation">.</span><span class="token function">Back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">;</span> e<span class="token operator">=</span>e<span class="token punctuation">.</span><span class="token function">Prew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Value<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description: go -- list
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-07 19:59:37
 * @LastEditTime: 2022-10-07 21:00:22
 * @FilePath: \code\list.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"container/list"</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"reflect"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//声明list，调用list的方法</span>
	<span class="token function">optList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">optList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//第一种声明list方法</span>
	<span class="token keyword">var</span> list1 list<span class="token punctuation">.</span>List

	<span class="token comment">//输出list1</span>
	<span class="token function">printList</span><span class="token punctuation">(</span><span class="token string">"第一种声明list方法"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>list1<span class="token punctuation">)</span>

	<span class="token comment">//填充数据</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token string">"区块链天才back"</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushFront</span><span class="token punctuation">(</span><span class="token string">"区块链天才front"</span><span class="token punctuation">)</span>
	<span class="token function">printList</span><span class="token punctuation">(</span><span class="token string">"填充数据"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>list1<span class="token punctuation">)</span>

	<span class="token comment">//🚀 遍历结果如下：</span>
	<span class="token function">iterateList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>list1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 打印list方法</span>
<span class="token keyword">func</span> <span class="token function">printList</span><span class="token punctuation">(</span>info <span class="token builtin">string</span><span class="token punctuation">,</span> list1 <span class="token operator">*</span>list<span class="token punctuation">.</span>List<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//info是打印的信息，list1是要打印的list</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>info <span class="token operator">+</span> <span class="token string">" ----- "</span><span class="token punctuation">)</span> <span class="token comment">//打印信息</span>

	<span class="token comment">//数据类型是interface{}，所以可以存储任何类型的数据</span>
	<span class="token comment">//打印数据类型</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"list1的数据类型是："</span><span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"list1的长度是："</span><span class="token punctuation">,</span> list1<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">//遍历list</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"list1的第一个元素是："</span><span class="token punctuation">,</span> list1<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 遍历</span>
<span class="token keyword">func</span> <span class="token function">iterateList</span><span class="token punctuation">(</span>list1 <span class="token operator">*</span>list<span class="token punctuation">.</span>List<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> e <span class="token operator">:=</span> list1<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"遍历结束"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>第一种声明list方法 ----- 
list1的数据类型是： *list.List
list1的长度是： 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="list是值类型" tabindex="-1"><a class="header-anchor" href="#list是值类型" aria-hidden="true">#</a> list是值类型</h2>
<p>list本质</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> List <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	root Element
    <span class="token builtin">len</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong><code v-pre>struct</code>是值类型</strong></p>
</blockquote>
<h3 id="案例-1" tabindex="-1"><a class="header-anchor" href="#案例-1" aria-hidden="true">#</a> 案例</h3>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description:
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-07 21:11:14
 * @LastEditTime: 2022-10-07 21:28:32
 * @FilePath: \code\list-valuea.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"container/list"</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span>
	<span class="token function">copyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">copyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	list1 <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">printList2</span><span class="token punctuation">(</span><span class="token string">"刚声明的list1"</span><span class="token punctuation">,</span> list1<span class="token punctuation">)</span>

	<span class="token comment">//赋值</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span>
	list1<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token string">"bcd"</span><span class="token punctuation">)</span>

	<span class="token function">printList2</span><span class="token punctuation">(</span><span class="token string">"赋值后的list1"</span><span class="token punctuation">,</span> list1<span class="token punctuation">)</span>

	<span class="token comment">//顺序遍历</span>
	<span class="token function">traverseList2</span><span class="token punctuation">(</span><span class="token string">"顺序遍历"</span><span class="token punctuation">,</span> list1<span class="token punctuation">)</span>
	<span class="token comment">//反向遍历</span>
	<span class="token function">traverseListReverse2</span><span class="token punctuation">(</span><span class="token string">"反向遍历"</span><span class="token punctuation">,</span> list1<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"下面是list2,拷贝list1"</span><span class="token punctuation">)</span>

	<span class="token comment">//将list1复制到list2</span>
	list2 <span class="token operator">:=</span> list1
	list2<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token string">"list2"</span><span class="token punctuation">)</span>
	<span class="token function">printList2</span><span class="token punctuation">(</span><span class="token string">"复制后的list2"</span><span class="token punctuation">,</span> list2<span class="token punctuation">)</span>

	<span class="token comment">//顺序遍历list2</span>
	<span class="token function">traverseList2</span><span class="token punctuation">(</span><span class="token string">"遍历list2"</span><span class="token punctuation">,</span> list2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printList2</span><span class="token punctuation">(</span>info <span class="token builtin">string</span><span class="token punctuation">,</span> list1 <span class="token operator">*</span>list<span class="token punctuation">.</span>List<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"list1 len:"</span><span class="token punctuation">,</span> list1<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"list1 front:"</span><span class="token punctuation">,</span> list1<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 顺序遍历</span>
<span class="token keyword">func</span> <span class="token function">traverseList2</span><span class="token punctuation">(</span>info <span class="token builtin">string</span><span class="token punctuation">,</span> list1 <span class="token operator">*</span>list<span class="token punctuation">.</span>List<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> e <span class="token operator">:=</span> list1<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 反向遍历</span>
<span class="token keyword">func</span> <span class="token function">traverseListReverse2</span><span class="token punctuation">(</span>info <span class="token builtin">string</span><span class="token punctuation">,</span> list1 <span class="token operator">*</span>list<span class="token punctuation">.</span>List<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> e <span class="token operator">:=</span> list1<span class="token punctuation">.</span><span class="token function">Back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">Prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>hello world
list1 len: <span class="token number">0</span>
list1 front: <span class="token operator">&lt;</span>nil<span class="token operator">></span>
list1 len: <span class="token number">6</span>
list1 front: <span class="token operator">&amp;</span><span class="token punctuation">{</span>0xc000100510 0xc0001004b0 0xc0001004b0 <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
a
bcd
bcd
a
<span class="token number">4</span>
<span class="token number">3</span>
<span class="token number">2</span>
<span class="token number">1</span>
下面是list2,拷贝list1
list1 len: <span class="token number">7</span>
list1 front: <span class="token operator">&amp;</span><span class="token punctuation">{</span>0xc000100510 0xc0001004b0 0xc0001004b0 <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
a
bcd
list2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<blockquote>
<p>💡 这个有点像是map</p>
<p><strong>list2的修改是否会影响list1？</strong></p>
<p><strong>list本质是一个值类型</strong>，不过采用<code v-pre>New()</code>方法声明的是一个指针。所以在拷贝操作和参数传递时具有应用类型的特征。</p>
<ul>
<li>所以<code v-pre>list2 := list1</code>拷贝的仅仅只是一个地址，相当于快捷方式</li>
</ul>
</blockquote>
<h2 id="官方方法介绍" tabindex="-1"><a class="header-anchor" href="#官方方法介绍" aria-hidden="true">#</a> 官方方法介绍</h2>
<h3 id="type-element" tabindex="-1"><a class="header-anchor" href="#type-element" aria-hidden="true">#</a> type <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#15" target="_blank" rel="noopener noreferrer">Element<ExternalLinkIcon/></a></h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type Element struct {
    // 元素保管的值
    Value interface{}
    // 内含隐藏或非导出字段
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Element类型代表是双向链表的一个元素。</p>
<h4 id="func-element-next" tabindex="-1"><a class="header-anchor" href="#func-element-next" aria-hidden="true">#</a> func (*Element) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#31" target="_blank" rel="noopener noreferrer">Next<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (e *Element) Next() *Element
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next返回链表的后一个元素或者nil。</p>
<h4 id="func-element-prev" tabindex="-1"><a class="header-anchor" href="#func-element-prev" aria-hidden="true">#</a> func (*Element) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#39" target="_blank" rel="noopener noreferrer">Prev<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (e *Element) Prev() *Element
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Prev返回链表的前一个元素或者nil。</p>
<h3 id="type-list" tabindex="-1"><a class="header-anchor" href="#type-list" aria-hidden="true">#</a> type <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#48" target="_blank" rel="noopener noreferrer">List<ExternalLinkIcon/></a></h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type List struct {
    // 内含隐藏或非导出字段
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>List代表一个双向链表。List零值为一个空的、可用的链表。</p>
<h4 id="func-new" tabindex="-1"><a class="header-anchor" href="#func-new" aria-hidden="true">#</a> func <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#62" target="_blank" rel="noopener noreferrer">New<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func New() *List
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>New创建一个链表。</p>
<h4 id="func-list-init" tabindex="-1"><a class="header-anchor" href="#func-list-init" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#54" target="_blank" rel="noopener noreferrer">Init<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) Init() *List
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Init清空链表。</p>
<h4 id="func-list-len" tabindex="-1"><a class="header-anchor" href="#func-list-len" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#66" target="_blank" rel="noopener noreferrer">Len<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) Len() int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Len返回链表中元素的个数，复杂度O(1)。</p>
<h4 id="func-list-front" tabindex="-1"><a class="header-anchor" href="#func-list-front" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#69" target="_blank" rel="noopener noreferrer">Front<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) Front() *Element
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Front返回链表第一个元素或nil。</p>
<h4 id="func-list-back" tabindex="-1"><a class="header-anchor" href="#func-list-back" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#77" target="_blank" rel="noopener noreferrer">Back<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) Back() *Element
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Back返回链表最后一个元素或nil。</p>
<h4 id="func-list-pushfront" tabindex="-1"><a class="header-anchor" href="#func-list-pushfront" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#131" target="_blank" rel="noopener noreferrer">PushFront<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) PushFront(v interface{}) *Element
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PushBack将一个值为v的新元素插入链表的第一个位置，返回生成的新元素。</p>
<h4 id="func-list-pushfrontlist" tabindex="-1"><a class="header-anchor" href="#func-list-pushfrontlist" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#211" target="_blank" rel="noopener noreferrer">PushFrontList<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) PushFrontList(other *List)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PushFrontList创建链表other的拷贝，并将拷贝的最后一个位置连接到链表l的第一个位置。</p>
<h4 id="func-list-pushback" tabindex="-1"><a class="header-anchor" href="#func-list-pushback" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#137" target="_blank" rel="noopener noreferrer">PushBack<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) PushBack(v interface{}) *Element
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PushBack将一个值为v的新元素插入链表的最后一个位置，返回生成的新元素。</p>
<h4 id="func-list-pushbacklist" tabindex="-1"><a class="header-anchor" href="#func-list-pushbacklist" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#202" target="_blank" rel="noopener noreferrer">PushBackList<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) PushBackList(other *List)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PushBack创建链表other的拷贝，并将链表l的最后一个位置连接到拷贝的第一个位置。</p>
<h4 id="func-list-insertbefore" tabindex="-1"><a class="header-anchor" href="#func-list-insertbefore" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#144" target="_blank" rel="noopener noreferrer">InsertBefore<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) InsertBefore(v interface{}, mark *Element) *Element
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>InsertBefore将一个值为v的新元素插入到mark前面，并返回生成的新元素。如果mark不是l的元素，l不会被修改。</p>
<h4 id="func-list-insertafter" tabindex="-1"><a class="header-anchor" href="#func-list-insertafter" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#154" target="_blank" rel="noopener noreferrer">InsertAfter<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) InsertAfter(v interface{}, mark *Element) *Element
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>InsertAfter将一个值为v的新元素插入到mark后面，并返回新生成的元素。如果mark不是l的元素，l不会被修改。</p>
<h4 id="func-list-movetofront" tabindex="-1"><a class="header-anchor" href="#func-list-movetofront" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#164" target="_blank" rel="noopener noreferrer">MoveToFront<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) MoveToFront(e *Element)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MoveToFront将元素e移动到链表的第一个位置，如果e不是l的元素，l不会被修改。</p>
<h4 id="func-list-movetoback" tabindex="-1"><a class="header-anchor" href="#func-list-movetoback" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#174" target="_blank" rel="noopener noreferrer">MoveToBack<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) MoveToBack(e *Element)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MoveToBack将元素e移动到链表的最后一个位置，如果e不是l的元素，l不会被修改。</p>
<h4 id="func-list-movebefore" tabindex="-1"><a class="header-anchor" href="#func-list-movebefore" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#184" target="_blank" rel="noopener noreferrer">MoveBefore<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) MoveBefore(e, mark *Element)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MoveBefore将元素e移动到mark的前面。如果e或mark不是l的元素，或者e==mark，l不会被修改。</p>
<h4 id="func-list-moveafter" tabindex="-1"><a class="header-anchor" href="#func-list-moveafter" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#193" target="_blank" rel="noopener noreferrer">MoveAfter<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) MoveAfter(e, mark *Element)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MoveAfter将元素e移动到mark的后面。如果e或mark不是l的元素，或者e==mark，l不会被修改。</p>
<h4 id="func-list-remove" tabindex="-1"><a class="header-anchor" href="#func-list-remove" aria-hidden="true">#</a> func (*List) <a href="https://github.com/golang/go/blob/master/src/container/list/list.go?name=release#121" target="_blank" rel="noopener noreferrer">Remove<ExternalLinkIcon/></a></h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (l *List) Remove(e *Element) interface{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Remove删除链表中的元素e，并返回e.Value。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul>
<li><RouterLink to="/go-advancend/">回到目录</RouterLink></li>
<li><RouterLink to="/go-advancend/markdown/12.html">上一节</RouterLink></li>
<li><RouterLink to="/go-advancend/markdown/14.html">下一节</RouterLink></li>
</ul>
<hr>
<ul>
<li><a href="https://github.com/3293172751/Block_Chain/blob/master/Git/git-contributor.md" target="_blank" rel="noopener noreferrer">参与贡献❤️💕💕<ExternalLinkIcon/></a></li>
</ul>
</div></template>


