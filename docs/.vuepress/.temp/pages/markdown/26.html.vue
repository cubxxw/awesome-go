<template><div><h1 id="go语言链表" tabindex="-1"><a class="header-anchor" href="#go语言链表" aria-hidden="true">#</a> go语言链表</h1>
<p>😶‍🌫️go语言官方编程指南：<a href="https://golang.org/" target="_blank" rel="noopener noreferrer">https://golang.org/<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<hr>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://nsddd.top" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<p>[toc]</p>
<h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h2>
<details class="custom-container details"><summary>警告⚠️</summary>
<p>数据结构和算法相关移步到<a href="https://github.com/3293172751/LeetCode/" target="_blank" rel="noopener noreferrer">算法和数据结构仓库<ExternalLinkIcon/></a></p>
<p>喜欢的话，点赞收藏！🔥</p>
</details>
<p><strong>一般来说，为了比较好的对单链表进行增删改查操作，我们都会给它设置一个头结点，头结点作用主要是用来标识链表头</strong></p>
<blockquote>
<p>使用带头结点的<strong>单向链表</strong>实现水浒英雄排行榜管理</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//定义一个heronode</span>
<span class="token keyword">type</span> HeroNode <span class="token keyword">struct</span><span class="token punctuation">{</span>
	no <span class="token builtin">int</span> 
	name <span class="token builtin">string</span>
	nickname <span class="token builtin">string</span> 
	next <span class="token operator">*</span>HeroNode     <span class="token comment">//表示指向下一个节点</span>
<span class="token punctuation">}</span>

<span class="token comment">//给链表插入节点</span>
<span class="token comment">/*尾插法 ： 第一种插入方式,在单链表的最后加入*/</span>
<span class="token keyword">func</span> <span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span>newHeroNode <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//思路</span>
	<span class="token comment">//1. 先找到该链表最后的这个节点</span>
	<span class="token comment">//2. 创建一个辅助接点temp</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">for</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>  <span class="token comment">//如果成立表示找到最后一个位置</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next    <span class="token comment">//让temp不断地指向下一个节点</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//3. 将newHernNode加入到链表的最后</span>
	temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newHeroNode 
<span class="token punctuation">}</span>
<span class="token comment">//显示链表</span>
<span class="token keyword">func</span> <span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//注意：一定要给头结点</span>
	<span class="token comment">//先判断该链表是否为一个空链表</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"空链表无法显示"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token comment">//遍历</span>
	<span class="token keyword">for</span><span class="token punctuation">{</span>
		<span class="token comment">// if temp.next = nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"节点信息如下:"</span><span class="token operator">+</span><span class="token string">"["</span><span class="token punctuation">,</span>
		temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no<span class="token punctuation">,</span>temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>name<span class="token punctuation">,</span>temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span><span class="token string">"]===>"</span><span class="token punctuation">)</span>
		
		<span class="token comment">//判断是否到链表最后</span>
		<span class="token comment">// if temp.next.next == nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }      !!!!报错无限循环</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next 
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//初始化 创建一个头结点</span>
	head <span class="token operator">:=</span> <span class="token operator">&amp;</span> HeroNode<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">//给默认值</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"head = "</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span>

	<span class="token comment">//创建一个新的节点</span>
	hero1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"宋江"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"及时雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"吴用"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"呼风唤雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero1 = "</span><span class="token punctuation">,</span>hero1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero2 = "</span><span class="token punctuation">,</span>hero2<span class="token punctuation">)</span>

	<span class="token comment">//3. 加入测试</span>
	<span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero1<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero2<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>         <span class="token comment">//显示</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>疑问1：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>	<span class="token comment">//判断是否到链表最后</span>
	<span class="token comment">// if temp.next.next == nil{</span>
	<span class="token comment">// 	break</span>
	<span class="token comment">// }      !!!!报错无限循环</span>
	temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next 
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想问下链表为啥temp.next.next会报错啊，next不是指针类型嘛</p>
<p><strong>疑问2：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>	<span class="token comment">//创建一个新的节点</span>
	hero1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"宋江"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"及时雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"吴用"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"呼风唤雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero2 = "</span><span class="token punctuation">,</span>hero2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero1 = "</span><span class="token punctuation">,</span>hero1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不是按照no排序的，怎么样才能使其按照no插入</strong></p>
<p>解决⏬⏬⏬⏬⏬</p>
<p><strong>第二种，按照no编号从小到大排序</strong></p>
<blockquote>
<p>我们可以将数据放在数据库中排序</p>
<p>不合理浪费</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span>newHeroNode <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//思路</span>
	<span class="token comment">//1. 找到适当的节点位置</span>
	<span class="token comment">//2. 创建一个辅助接点temp</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">for</span><span class="token punctuation">{</span>
	<span class="token comment">//让插入结点的no和temp的下一个节点的no进行比较</span>
        <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
            <span class="token comment">//说明最末尾，直接插入到尾部</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">></span> <span class="token builtin">new</span><span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//3. 将newHernNode加入到链表的最后</span>
	temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newHeroNode 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//定义一个heronode</span>
<span class="token keyword">type</span> HeroNode <span class="token keyword">struct</span><span class="token punctuation">{</span>
	no <span class="token builtin">int</span> 
	name <span class="token builtin">string</span>
	nickname <span class="token builtin">string</span> 
	next <span class="token operator">*</span>HeroNode     <span class="token comment">//表示指向下一个节点</span>
<span class="token punctuation">}</span>

<span class="token comment">//给链表插入节点</span>
<span class="token comment">/*尾插法 ： 第一种插入方式,在单链表的最后加入*/</span>
<span class="token keyword">func</span> <span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span>newHeroNode <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//思路</span>
	<span class="token comment">//1. 先找到该链表最后的这个节点</span>
	<span class="token comment">//2. 创建一个辅助接点temp</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">for</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>  <span class="token comment">//如果成立表示找到最后一个位置</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next    <span class="token comment">//让temp不断地指向下一个节点</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//3. 将newHernNode加入到链表的最后</span>
	temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newHeroNode 
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span>newHeroNode <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//思路</span>
	<span class="token comment">//1. 找到适当的节点位置</span>
	<span class="token comment">//2. 创建一个辅助接点temp</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">var</span> flag <span class="token builtin">bool</span>
	<span class="token keyword">for</span><span class="token punctuation">{</span>
	<span class="token comment">//让插入结点的no和temp的下一个节点的no进行比较</span>
        <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
            <span class="token comment">//说明最末尾，直接插入到尾部</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">></span> newHeroNode<span class="token punctuation">.</span>no<span class="token punctuation">{</span>
			<span class="token comment">//条件成立，说明这个newHeroNode插入到temp后面</span>
			<span class="token keyword">break</span>   <span class="token comment">//跳出for循环  直接插入</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> newHeroNode<span class="token punctuation">.</span>no<span class="token punctuation">{</span>
			<span class="token comment">//相等的话我们提醒不允许插入这个id，因为已经有了</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"有相同的节点，那么不可以插入"</span><span class="token punctuation">)</span>
			flag <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next

	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> flag<span class="token punctuation">{</span>
		<span class="token comment">//表示此时这个相等</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		newHeroNode<span class="token punctuation">.</span>next <span class="token operator">=</span>temp<span class="token punctuation">.</span>next
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newHeroNode
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token comment">//显示链表</span>
<span class="token keyword">func</span> <span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//注意：一定要给头结点</span>
	<span class="token comment">//先判断该链表是否为一个空链表</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"空链表无法显示"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token comment">//遍历</span>
	<span class="token keyword">for</span><span class="token punctuation">{</span>
		<span class="token comment">// if temp.next = nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"节点信息如下:"</span><span class="token operator">+</span><span class="token string">"["</span><span class="token punctuation">,</span>
		temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no<span class="token punctuation">,</span>temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>name<span class="token punctuation">,</span>temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span><span class="token string">"]===>"</span><span class="token punctuation">)</span>
		
		<span class="token comment">//判断是否到链表最后</span>
		<span class="token comment">// if temp.next.next == nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }      !!!!报错无限循环</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next 
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//初始化 创建一个头结点</span>
	head <span class="token operator">:=</span> <span class="token operator">&amp;</span> HeroNode<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">//给默认值</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"head = "</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span>

	<span class="token comment">//创建一个新的节点</span>
	hero1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"宋江"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"及时雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"吴用"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"呼风唤雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"吴用3"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"呼风唤雨3"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero1 = "</span><span class="token punctuation">,</span>hero1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero2 = "</span><span class="token punctuation">,</span>hero2<span class="token punctuation">)</span>

	<span class="token comment">//3. 加入测试</span>
	 <span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero1<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	 <span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero2<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	 <span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero3<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	 <span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>         <span class="token comment">//显示</span>

	<span class="token comment">//3. 加入测试</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero2<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero1<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero3<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>

	<span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>         <span class="token comment">//显示</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除功能</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//删除节点</span>
<span class="token keyword">func</span> <span class="token function">DelHerNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span>id <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//id ：删除的节点</span>
	temp <span class="token operator">:=</span> head 
	<span class="token keyword">var</span> flag <span class="token builtin">bool</span> 
	<span class="token keyword">for</span><span class="token punctuation">{</span>
		<span class="token comment">//找到要输出的结点</span>
			<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
				<span class="token comment">//说明没有找到</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> id<span class="token punctuation">{</span>
				<span class="token comment">//相等的话找到了</span>
				flag <span class="token operator">=</span> <span class="token boolean">true</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
			temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> flag <span class="token punctuation">{</span>
			<span class="token comment">//找到，删除</span>
			temp<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next 
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"要删除的id不存在"</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单链表完整代码" tabindex="-1"><a class="header-anchor" href="#单链表完整代码" aria-hidden="true">#</a> 单链表完整代码</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//定义一个heronode</span>
<span class="token keyword">type</span> HeroNode <span class="token keyword">struct</span><span class="token punctuation">{</span>
	no <span class="token builtin">int</span> 
	name <span class="token builtin">string</span>
	nickname <span class="token builtin">string</span> 
	next <span class="token operator">*</span>HeroNode     <span class="token comment">//表示指向下一个节点</span>
<span class="token punctuation">}</span>

<span class="token comment">//给链表插入节点</span>
<span class="token comment">/*尾插法 ： 第一种插入方式,在单链表的最后加入*/</span>
<span class="token keyword">func</span> <span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span>newHeroNode <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//思路</span>
	<span class="token comment">//1. 先找到该链表最后的这个节点</span>
	<span class="token comment">//2. 创建一个辅助接点temp</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">for</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>  <span class="token comment">//如果成立表示找到最后一个位置</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next    <span class="token comment">//让temp不断地指向下一个节点</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//3. 将newHernNode加入到链表的最后</span>
	temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newHeroNode 
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span>newHeroNode <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//思路</span>
	<span class="token comment">//1. 找到适当的节点位置</span>
	<span class="token comment">//2. 创建一个辅助接点temp</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">var</span> flag <span class="token builtin">bool</span>
	<span class="token keyword">for</span><span class="token punctuation">{</span>
	<span class="token comment">//让插入结点的no和temp的下一个节点的no进行比较</span>
        <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
            <span class="token comment">//说明最末尾，直接插入到尾部</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">></span> newHeroNode<span class="token punctuation">.</span>no<span class="token punctuation">{</span>
			<span class="token comment">//条件成立，说明这个newHeroNode插入到temp后面</span>
			<span class="token keyword">break</span>   <span class="token comment">//跳出for循环  直接插入</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> newHeroNode<span class="token punctuation">.</span>no<span class="token punctuation">{</span>
			<span class="token comment">//相等的话我们提醒不允许插入这个id，因为已经有了</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"有相同的节点，那么不可以插入"</span><span class="token punctuation">)</span>
			flag <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next

	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> flag<span class="token punctuation">{</span>
		<span class="token comment">//表示此时这个相等</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		newHeroNode<span class="token punctuation">.</span>next <span class="token operator">=</span>temp<span class="token punctuation">.</span>next
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> newHeroNode
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token comment">//显示链表</span>
<span class="token keyword">func</span> <span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//注意：一定要给头结点</span>
	<span class="token comment">//先判断该链表是否为一个空链表</span>
	temp <span class="token operator">:=</span> head
	<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"空链表无法显示"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token comment">//遍历</span>
	<span class="token keyword">for</span><span class="token punctuation">{</span>
		<span class="token comment">// if temp.next = nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"节点信息如下:"</span><span class="token operator">+</span><span class="token string">"["</span><span class="token punctuation">,</span>
		temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no<span class="token punctuation">,</span>temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>name<span class="token punctuation">,</span>temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>nickname<span class="token punctuation">,</span><span class="token string">"]===>"</span><span class="token punctuation">)</span>
		
		<span class="token comment">//判断是否到链表最后</span>
		<span class="token comment">// if temp.next.next == nil{</span>
		<span class="token comment">// 	break</span>
		<span class="token comment">// }      !!!!报错无限循环</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next 
		<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token comment">//删除节点</span>
<span class="token keyword">func</span> <span class="token function">DelHerNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>HeroNode<span class="token punctuation">,</span>id <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//id ：删除的节点</span>
	temp <span class="token operator">:=</span> head 
	<span class="token keyword">var</span> flag <span class="token builtin">bool</span> 
	<span class="token keyword">for</span><span class="token punctuation">{</span>
		<span class="token comment">//找到要输出的结点</span>
			<span class="token keyword">if</span> temp<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
				<span class="token comment">//说明没有找到</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>no <span class="token operator">==</span> id<span class="token punctuation">{</span>
				<span class="token comment">//相等的话找到了</span>
				flag <span class="token operator">=</span> <span class="token boolean">true</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
			temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> flag <span class="token punctuation">{</span>
			<span class="token comment">//找到，删除</span>
			temp<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next 
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"要删除的id不存在"</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//初始化 创建一个头结点</span>
	head <span class="token operator">:=</span> <span class="token operator">&amp;</span> HeroNode<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">//给默认值</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"head = "</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span>

	<span class="token comment">//创建一个新的节点</span>
	hero1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"宋江"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"及时雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"吴用"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"呼风唤雨"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	hero3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>HeroNode<span class="token punctuation">{</span>
		no <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		name <span class="token punctuation">:</span> <span class="token string">"吴用3"</span><span class="token punctuation">,</span>
		nickname <span class="token punctuation">:</span> <span class="token string">"呼风唤雨3"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero1 = "</span><span class="token punctuation">,</span>hero1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero2 = "</span><span class="token punctuation">,</span>hero2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hero3 = "</span><span class="token punctuation">,</span>hero3<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"测试--------1----------"</span><span class="token punctuation">)</span>
	<span class="token comment">//3. 加入测试</span>
	 <span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero1<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	 <span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero2<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	 <span class="token function">InsertHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero3<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	 <span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>         <span class="token comment">//显示</span>
	 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"测试--------2----------"</span><span class="token punctuation">)</span>
	<span class="token comment">//3. 加入测试</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero2<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero1<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">InsertHerNode2</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span>hero3<span class="token punctuation">)</span>    <span class="token comment">//传入头结点和新节点</span>
	<span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>         <span class="token comment">//显示</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"测试--------删除----------"</span><span class="token punctuation">)</span>

	<span class="token comment">//4. 删除</span>
	<span class="token function">DelHerNode</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token function">ListHeroNode</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>         <span class="token comment">//显示</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>smile<span class="token punctuation">\</span>Desktop<span class="token punctuation">\</span>区块链<span class="token punctuation">\</span>code<span class="token punctuation">\</span>chapter05<span class="token punctuation">\</span>ifdemo<span class="token operator">></span> go run .<span class="token punctuation">\</span>main.go
<span class="token function">head</span> <span class="token operator">=</span>  <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token number">0</span>   <span class="token operator">&lt;</span>nil<span class="token operator">></span><span class="token punctuation">}</span>
hero1 <span class="token operator">=</span>  <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token number">1</span> 宋江 及时雨 <span class="token operator">&lt;</span>nil<span class="token operator">></span><span class="token punctuation">}</span>
hero2 <span class="token operator">=</span>  <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token number">2</span> 吴用 呼风唤雨 <span class="token operator">&lt;</span>nil<span class="token operator">></span><span class="token punctuation">}</span>
hero3 <span class="token operator">=</span>  <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token number">2</span> 吴用3 呼风唤雨3 <span class="token operator">&lt;</span>nil<span class="token operator">></span><span class="token punctuation">}</span>
测试--------1----------
节点信息如下:<span class="token punctuation">[</span> <span class="token number">1</span> 宋江 及时雨 <span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span>
节点信息如下:<span class="token punctuation">[</span> <span class="token number">2</span> 吴用 呼风唤雨 <span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span>
节点信息如下:<span class="token punctuation">[</span> <span class="token number">2</span> 吴用3 呼风唤雨3 <span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span>
测试--------2----------
有相同的节点，那么不可以插入
有相同的节点，那么不可以插入
有相同的节点，那么不可以插入
节点信息如下:<span class="token punctuation">[</span> <span class="token number">1</span> 宋江 及时雨 <span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span>
节点信息如下:<span class="token punctuation">[</span> <span class="token number">2</span> 吴用 呼风唤雨 <span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span>
节点信息如下:<span class="token punctuation">[</span> <span class="token number">2</span> 吴用3 呼风唤雨3 <span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span>
测试--------删除----------
请输入要删除的数值id
<span class="token number">1</span>
节点信息如下:<span class="token punctuation">[</span> <span class="token number">2</span> 吴用 呼风唤雨 <span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span>
节点信息如下:<span class="token punctuation">[</span> <span class="token number">2</span> 吴用3 呼风唤雨3 <span class="token punctuation">]</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '25.md' style='float:left'>⬆️上一节🔗</a><a href = '27.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


