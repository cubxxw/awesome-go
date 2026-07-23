<template><div><h1 id="go语言数据结构双向链表和循环链表" tabindex="-1"><a class="header-anchor" href="#go语言数据结构双向链表和循环链表" aria-hidden="true">#</a> Go语言数据结构双向链表和循环链表</h1>
<p>[TOC]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://golang.org/" target="_blank" rel="noopener noreferrer">https://golang.org/<ExternalLinkIcon/></a></p>
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
<h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h2>
<details class="custom-container details"><summary>警告⚠️</summary>
<p>数据结构和算法相关移步到<a href="https://github.com/3293172751/LeetCode/" target="_blank" rel="noopener noreferrer">算法和数据结构仓库<ExternalLinkIcon/></a></p>
<p>喜欢的话，点赞收藏！🔥</p>
</details>
<blockquote>
<p>单向链表只能从头先后查询，但是双向链表是可以反向的，提高的效率</p>
</blockquote>
<p><strong>代码 – 删除</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">DelHerNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	flag <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token comment">//找到要删除结点的no，和temp的下一个结点的no比较</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span><span class="token comment">//说明到链表的最后</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> id <span class="token punctuation">{</span>
			<span class="token comment">//说明我们找到了.</span>
			flag <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> flag <span class="token punctuation">{</span><span class="token comment">//找到, 删除</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token comment">//ok</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> temp 
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"sorry, 要删除的id不存在"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全代码" tabindex="-1"><a class="header-anchor" href="#全代码" aria-hidden="true">#</a> 全代码</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//定义一个heronode</span>
<span class="token keyword">type</span> HeroNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	no       <span class="token builtin">int</span>
	name     <span class="token builtin">string</span>
	nickname <span class="token builtin">string</span>

	pre  <span class="token operator">*</span>HeroNode <span class="token comment">//表示指向前一个结点</span>
	next <span class="token operator">*</span>HeroNode <span class="token comment">//表示指向下一个节点</span>
<span class="token punctuation">}</span>

<span class="token comment">//给双向链表插入节点 -- 双向链表</span>
<span class="token comment">// 顺序很重要 --</span>
<span class="token keyword">func</span> <span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span> newHeroNode <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//思路</span>
	<span class="token comment">//1. 找到适当的节点位置</span>
	<span class="token comment">//2. 创建一个辅助接点temp</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">var</span> flag <span class="token builtin">bool</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//让插入结点的no和temp的下一个节点的no进行比较</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token comment">//说明最末尾，直接插入到尾部</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">></span> newHeroNode<span class="token punctuation">.</span>no <span class="token punctuation">{</span>
			<span class="token comment">//条件成立，说明这个newHeroNode插入到temp后面</span>
			<span class="token keyword">break</span> <span class="token comment">//跳出for循环  直接插入</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> newHeroNode<span class="token punctuation">.</span>no <span class="token punctuation">{</span>
			<span class="token comment">//相等的话我们提醒不允许插入这个id，因为已经有了</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"有相同的节点，那么不可以插入"</span><span class="token punctuation">)</span>
			flag <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next

	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> flag <span class="token punctuation">{</span>
		<span class="token comment">//表示此时这个相等</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"对不起，已经存在"</span><span class="token punctuation">,</span> newHeroNode<span class="token punctuation">.</span>no<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		newHeroNode<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
		newHeroNode<span class="token punctuation">.</span>pre <span class="token operator">=</span> temp <span class="token comment">//ok</span>
		<span class="token comment">//此时单项结点实现了</span>
		<span class="token comment">//注意顺序很重要</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> newHeroNode <span class="token comment">//ok</span>
		<span class="token punctuation">}</span>

		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newHeroNode
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">//显示链表</span>
<span class="token comment">//仍然使用单项链表显示方式</span>
<span class="token keyword">func</span> <span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//注意：一定要给头结点</span>
	<span class="token comment">//先判断该链表是否为一个空链表</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"空链表无法显示"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//遍历</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// if temp.next = nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"节点信息如下:"</span><span class="token operator">+</span><span class="token string">"["</span><span class="token punctuation">,</span>
			temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>name<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span> <span class="token string">"]===>"</span><span class="token punctuation">)</span>

		<span class="token comment">//判断是否到链表最后</span>
		<span class="token comment">// if temp.next.next == nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }      !!!!报错无限循环</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//将双向链表逆序打印出来</span>
<span class="token keyword">func</span> <span class="token function">ListHeroNode2</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//注意：一定要给头结点</span>
	<span class="token comment">//先判断该链表是否为一个空链表</span>
	temp <span class="token operator">:=</span> head

	<span class="token comment">//判断空链表</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"空链表无法显示"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//让temp定位到双向链表的最后节点</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next <span class="token comment">//否则指向下一个结点</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//此时已经是最后结点了</span>
	<span class="token comment">//遍历</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"双向链表反向打出节点信息如下:"</span><span class="token operator">+</span><span class="token string">"["</span><span class="token punctuation">,</span>
			temp<span class="token punctuation">.</span>no<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span> <span class="token string">"]===>"</span><span class="token punctuation">)</span>

		<span class="token comment">//判断是否到了表头</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>pre

		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>pre <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">DelHerNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	flag <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token comment">//找到要删除结点的no，和temp的下一个结点的no比较</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">//说明到链表的最后</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> id <span class="token punctuation">{</span>
			<span class="token comment">//说明我们找到了.</span>
			flag <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> flag <span class="token punctuation">{</span> <span class="token comment">//找到, 删除</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token comment">//ok</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>pre <span class="token operator">=</span> temp
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"sorry, 要删除的id不存在"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//初始化 创建一个头结点</span>
	head <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//给默认值</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"head = "</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>

	<span class="token comment">//创建一个新的节点</span>
	hero1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>       <span class="token number">1</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span>     <span class="token string">"宋江"</span><span class="token punctuation">,</span>
		nickname<span class="token punctuation">:</span> <span class="token string">"及时雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>       <span class="token number">2</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span>     <span class="token string">"吴用"</span><span class="token punctuation">,</span>
		nickname<span class="token punctuation">:</span> <span class="token string">"呼风唤雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>       <span class="token number">2</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span>     <span class="token string">"吴用3"</span><span class="token punctuation">,</span>
		nickname<span class="token punctuation">:</span> <span class="token string">"呼风唤雨3"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero1 = "</span><span class="token punctuation">,</span> hero1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero2 = "</span><span class="token punctuation">,</span> hero2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero3 = "</span><span class="token punctuation">,</span> hero3<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"测试--------1----------"</span><span class="token punctuation">)</span>

	<span class="token comment">//3. 加入测试</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> hero2<span class="token punctuation">)</span> <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> hero1<span class="token punctuation">)</span> <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> hero3<span class="token punctuation">)</span> <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>          <span class="token comment">//显示</span>
	<span class="token function">ListHeroNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>         <span class="token comment">//显示</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"测试--------删除----------"</span><span class="token punctuation">)</span>

	<span class="token comment">//4. 删除</span>
	<span class="token function">DelHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token comment">//显示</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PS C:\Users\smile\Desktop\区块链\code\chapter05\ifelsedemo> go run .\main.go
head =  &amp;{0   &lt;nil> &lt;nil>}
hero1 =  &amp;{1 宋江 及时雨 &lt;nil> &lt;nil>}
hero2 =  &amp;{2 吴用 呼风唤雨 &lt;nil> &lt;nil>}
hero3 =  &amp;{2 吴用3 呼风唤雨3 &lt;nil> &lt;nil>}
测试--------1----------
有相同的节点，那么不可以插入
对不起，已经存在 2
节点信息如下:[ 1 宋江 及时雨 ]===>
节点信息如下:[ 2 吴用 呼风唤雨 ]===>
双向链表反向打出节点信息如下:[ 2 吴用 呼风唤雨 ]===>
双向链表反向打出节点信息如下:[ 1 宋江 及时雨 ]===>
测试--------删除----------
节点信息如下:[ 1 宋江 及时雨 ]===>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go语言环形链表" tabindex="-1"><a class="header-anchor" href="#go语言环形链表" aria-hidden="true">#</a> Go语言环形链表</h2>
<p><strong>插入</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InsertNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">,</span> newNode <span class="token operator">*</span>CatNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//判断是否为第一</span>
	<span class="token keyword">if</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		head<span class="token punctuation">.</span>no <span class="token operator">=</span> newNode<span class="token punctuation">.</span>no
		head<span class="token punctuation">.</span>name <span class="token operator">=</span> newNode<span class="token punctuation">.</span>name
		<span class="token comment">//注意：一个结点也可以形成环状的</span>
		head<span class="token punctuation">.</span>next <span class="token operator">=</span> head <span class="token comment">//形成一个环状</span>
		<span class="token comment">//注意不可以是·head.next = newNode,因为head本身有一个空间</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"编号为"</span><span class="token punctuation">,</span> head<span class="token punctuation">.</span>no<span class="token punctuation">,</span> <span class="token string">"的结点加入"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//此时不是在第一位    --   使用·临时变量找到最后的结点</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//遍历到头结点，说明已经找到了</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
	<span class="token comment">//加入到环状链表中</span>
	temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">.</span>next
	newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打印环形链表</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//输出    -- 需要头结点</span>
<span class="token keyword">func</span> <span class="token function">show</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"环形链表的情况如下:"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">//空链表</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"是一个空链表"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"当前节点的信息为 = "</span><span class="token punctuation">,</span> temp<span class="token punctuation">,</span> <span class="token string">"no = "</span><span class="token punctuation">,</span> temp<span class="token punctuation">.</span>no<span class="token punctuation">,</span> <span class="token string">"name="</span><span class="token punctuation">,</span> temp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">"==>>"</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//说明到队头</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除环形链表结点</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//环形链表的删除</span>
<span class="token keyword">func</span> <span class="token function">del</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	helper <span class="token operator">:=</span> head

	<span class="token comment">//如果是空结点</span>
	<span class="token keyword">if</span> temp <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这是一个空的环形链表无法删除"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//如果是一个结点</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//如果是两个以上的结点</span>
	<span class="token comment">/*让helper指向环形链表的最后*/</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//找到了最后,说明比较到最后,但是最后没有比较</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>no <span class="token operator">==</span> id <span class="token punctuation">{</span>
			<span class="token comment">//找到  -- 可以直接删除</span>
			<span class="token comment">//temp.next == nil</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next        <span class="token comment">//移动和比较</span>
		helper <span class="token operator">=</span> helper<span class="token punctuation">.</span>next    <span class="token comment">// 移动  一旦找到要删除的结点</span>
		helper<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next <span class="token comment">//删除结点</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//初始化头结点（环形量表1)</span>
	head <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">//创建</span>
	cat1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span> <span class="token string">"tom"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"cat1.next = "</span><span class="token punctuation">,</span> cat1<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
	cat2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"王五"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat4 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat5 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"牛六"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>

	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat1<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat2<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat3<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat4<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat5<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">show</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>             <span class="token comment">//输出</span>
	<span class="token comment">//删除操作</span>
	<span class="token keyword">var</span> a <span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请选择删除的模式和输出的对象"</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
	<span class="token function">del</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	<span class="token function">show</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token comment">//输出</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全代码-1" tabindex="-1"><a class="header-anchor" href="#全代码-1" aria-hidden="true">#</a> 全代码</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//定义结构体</span>
<span class="token keyword">type</span> CatNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	no   <span class="token builtin">int</span> <span class="token comment">//定义编号</span>
	name <span class="token builtin">string</span>
	next <span class="token operator">*</span>CatNode
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">InsertNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">,</span> newNode <span class="token operator">*</span>CatNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//判断是否为第一</span>
	<span class="token keyword">if</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		head<span class="token punctuation">.</span>no <span class="token operator">=</span> newNode<span class="token punctuation">.</span>no
		head<span class="token punctuation">.</span>name <span class="token operator">=</span> newNode<span class="token punctuation">.</span>name
		<span class="token comment">//注意：一个结点也可以形成环状的</span>
		head<span class="token punctuation">.</span>next <span class="token operator">=</span> head <span class="token comment">//形成一个环状</span>
		<span class="token comment">//注意不可以是·head.next = newNode,因为head本身有一个空间</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"编号为"</span><span class="token punctuation">,</span> head<span class="token punctuation">.</span>no<span class="token punctuation">,</span> <span class="token string">"的结点加入"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//此时不是在第一位    --   使用·临时变量找到最后的结点</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//遍历到头结点，说明已经找到了</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
	<span class="token punctuation">}</span>
	<span class="token comment">//加入到环状链表中</span>
	temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">.</span>next
	newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head

<span class="token punctuation">}</span>

<span class="token comment">//输出    -- 需要头结点</span>
<span class="token keyword">func</span> <span class="token function">show</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"环形链表的情况如下:"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">//空链表</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"是一个空链表"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"当前节点的信息为 = "</span><span class="token punctuation">,</span> temp<span class="token punctuation">,</span> <span class="token string">"no = "</span><span class="token punctuation">,</span> temp<span class="token punctuation">.</span>no<span class="token punctuation">,</span> <span class="token string">"name="</span><span class="token punctuation">,</span> temp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">"==>>"</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//说明到队头</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next <span class="token comment">//后移</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//环形链表的删除</span>
<span class="token keyword">func</span> <span class="token function">del</span><span class="token punctuation">(</span>head <span class="token operator">*</span>CatNode<span class="token punctuation">,</span> id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	temp <span class="token operator">:=</span> head
	helper <span class="token operator">:=</span> head

	<span class="token comment">//如果是空结点</span>
	<span class="token keyword">if</span> temp <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这是一个空的环形链表无法删除"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//如果是一个结点</span>
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//如果是两个以上的结点</span>
	<span class="token comment">/*让helper指向环形链表的最后*/</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> head <span class="token punctuation">{</span>
			<span class="token comment">//找到了最后,说明比较到最后,但是最后没有比较</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>no <span class="token operator">==</span> id <span class="token punctuation">{</span>
			<span class="token comment">//找到  -- 可以直接删除</span>
			<span class="token comment">//temp.next == nil</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next        <span class="token comment">//移动和比较</span>
		helper <span class="token operator">=</span> helper<span class="token punctuation">.</span>next    <span class="token comment">// 移动  一旦找到要删除的结点</span>
		helper<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next <span class="token comment">//删除结点</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//初始化头结点（环形量表1)</span>
	head <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">//创建</span>
	cat1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span>
		no<span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span> <span class="token string">"tom"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"cat1.next = "</span><span class="token punctuation">,</span> cat1<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
	cat2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"王五"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat4 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>
	cat5 <span class="token operator">:=</span> <span class="token operator">&amp;</span>CatNode<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"牛六"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">}</span>

	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat1<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat2<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat3<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat4<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">InsertNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> cat5<span class="token punctuation">)</span> <span class="token comment">//添加</span>
	<span class="token function">show</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>             <span class="token comment">//输出</span>
	<span class="token comment">//删除操作</span>
	<span class="token keyword">var</span> a <span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请选择删除的模式和输出的对象"</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
	<span class="token function">del</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	<span class="token function">show</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token comment">//输出</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '26.md' style='float:left'>⬆️上一节🔗</a><a href = '28.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


