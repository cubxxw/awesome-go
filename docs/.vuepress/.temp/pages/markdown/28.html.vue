<template><div><h1 id="约瑟夫问题" tabindex="-1"><a class="header-anchor" href="#约瑟夫问题" aria-hidden="true">#</a> 约瑟夫问题</h1>
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
<h2 id="约瑟夫问题-1" tabindex="-1"><a class="header-anchor" href="#约瑟夫问题-1" aria-hidden="true">#</a> 约瑟夫问题</h2>
<details class="custom-container details"><summary>警告⚠️</summary>
<p>数据结构和算法相关移步到<a href="https://github.com/3293172751/LeetCode/" target="_blank" rel="noopener noreferrer">算法和数据结构仓库<ExternalLinkIcon/></a></p>
<p>喜欢的话，点赞收藏！🔥</p>
</details>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">//约瑟夫问题</span>

<span class="token comment">// Boy 定义小孩结构体</span>
<span class="token keyword">type</span> Boy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	no   <span class="token builtin">int</span>
	Next <span class="token operator">*</span>Boy
<span class="token punctuation">}</span>

<span class="token comment">//编写一个函数，创建单向的环形链表</span>
<span class="token comment">//num :环形链表的元素个数</span>
<span class="token comment">//*Boy :返回该环形链表的第一个小孩的指针</span>

<span class="token keyword">func</span> <span class="token function">CreateCircle</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Boy <span class="token punctuation">{</span>
	<span class="token comment">//创建一个空节点</span>
	first <span class="token operator">:=</span> <span class="token operator">&amp;</span>Boy<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">//这个指针指向第一个元素</span>
	curBoy <span class="token operator">:=</span> <span class="token operator">&amp;</span>Boy<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//这个指针指向</span>

	<span class="token comment">//元素个数判断</span>
	<span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"元素个数不能小于1"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> first
	<span class="token punctuation">}</span>

	<span class="token comment">//循环的构建这个链表</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		boy <span class="token operator">:=</span> <span class="token operator">&amp;</span>Boy<span class="token punctuation">{</span>
			no<span class="token punctuation">:</span> i<span class="token punctuation">,</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//第一个小孩比较特殊</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
			first <span class="token operator">=</span> boy  <span class="token comment">//指针就不能动了，所以好需要一个辅助指针 curBoy</span>
			curBoy <span class="token operator">=</span> boy <span class="token comment">//帮忙的指针 curBoy</span>
			<span class="token comment">//形成闭环</span>
			curBoy<span class="token punctuation">.</span>Next <span class="token operator">=</span> first
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">//当前是1	新的2</span>
			curBoy<span class="token punctuation">.</span>Next <span class="token operator">=</span> boy
			<span class="token comment">//curBoy向后面移动1位</span>
			curBoy <span class="token operator">=</span> boy
			<span class="token comment">//最后这个指向开头形成环</span>
			curBoy<span class="token punctuation">.</span>Next <span class="token operator">=</span> first
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> first
<span class="token punctuation">}</span>

<span class="token comment">// ShowCircle 显示环形单向链表</span>
<span class="token keyword">func</span> <span class="token function">ShowCircle</span><span class="token punctuation">(</span>first <span class="token operator">*</span>Boy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//空链表判断</span>
	<span class="token keyword">if</span> first <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"链表为空"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//first是一个指针，我们还需要一个指针</span>
	curBoy <span class="token operator">:=</span> first
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"小孩的id=%d"</span><span class="token punctuation">,</span> curBoy<span class="token punctuation">.</span>no<span class="token punctuation">)</span>
		<span class="token comment">//当到达最后一个时候，退出</span>
		<span class="token keyword">if</span> curBoy<span class="token punctuation">.</span>Next <span class="token operator">==</span> first <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		curBoy <span class="token operator">=</span> curBoy<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// first 头节点</span>
<span class="token comment">// startNo 开始数数的位置</span>
<span class="token comment">// stepNum 每次数几个,步长</span>

<span class="token keyword">func</span> <span class="token function">PlayGame</span><span class="token punctuation">(</span>first <span class="token operator">*</span>Boy<span class="token punctuation">,</span> startNo <span class="token builtin">int</span><span class="token punctuation">,</span> stepNum <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//1.空链表判断</span>
	<span class="token keyword">if</span> first<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"空的链表，没有小孩"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//2.需要定义辅助指针，帮助我们删除元素</span>
	tail <span class="token operator">:=</span> first <span class="token comment">//tail 尾巴，一开始他俩实在一起的</span>
	<span class="token comment">//3.我们移动tail，让tail指向first的尾巴</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> tail<span class="token punctuation">.</span>Next <span class="token operator">==</span> first <span class="token punctuation">{</span>
			<span class="token keyword">break</span> <span class="token comment">//此时移动到尾巴了</span>
		<span class="token punctuation">}</span>
		tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>

	<span class="token comment">//4.让first移动到startNo[后面我们删除元素，就以first为准]</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> startNo<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token comment">//这两个标记都往下走</span>
		first <span class="token operator">=</span> first<span class="token punctuation">.</span>Next
		tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>

	<span class="token comment">//5.开始数stepNum，然后就删除first当前所在的元素</span>
	<span class="token comment">//删除一个元素的操作是这样的</span>
	<span class="token comment">//a:先让first向下走一步，把这个需要删除的元素空出来</span>
	<span class="token comment">// first = first.Next</span>
	<span class="token comment">//b:让尾部tail的Next指向新的first,跳过空出来的元素，这样就把空出来的元素删除了</span>
	<span class="token comment">//tail = first</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//这两个标记同时按照步长往下走，一步一步走，总移动stepNum-1的</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> stepNum<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			first <span class="token operator">=</span> first<span class="token punctuation">.</span>Next
			tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>Next
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"编号%d的元素被剔除-->"</span><span class="token punctuation">,</span> first<span class="token punctuation">.</span>no<span class="token punctuation">)</span>
		<span class="token comment">//执行删除 a，b两步</span>
		first <span class="token operator">=</span> first<span class="token punctuation">.</span>Next
		tail<span class="token punctuation">.</span>Next <span class="token operator">=</span> first

		<span class="token comment">//当只剩下一个元素的时候就退出</span>
		<span class="token comment">//即 两个标记重合了，因为我们在前面让两个标记分开了</span>
		<span class="token keyword">if</span> tail <span class="token operator">==</span> first <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"最后剔除的元素是%d"</span><span class="token punctuation">,</span> first<span class="token punctuation">.</span>no<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	first <span class="token operator">:=</span> <span class="token function">CreateCircle</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
	<span class="token function">ShowCircle</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"显示结束"</span><span class="token punctuation">)</span>

	<span class="token function">PlayGame</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '27.md' style='float:left'>⬆️上一节🔗</a><a href = '29.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


