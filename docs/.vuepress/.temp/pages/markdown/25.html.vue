<template><div><h1 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h1>
<nav class="table-of-contents"><ul><li><router-link to="#队列的使用">队列的使用</router-link></li><li><router-link to="#环形队列">环形队列</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
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
<h2 id="队列的使用" tabindex="-1"><a class="header-anchor" href="#队列的使用" aria-hidden="true">#</a> 队列的使用</h2>
<details class="custom-container details"><summary>警告⚠️</summary>
<p>数据结构和算法相关移步到<a href="https://github.com/3293172751/LeetCode/" target="_blank" rel="noopener noreferrer">算法和数据结构仓库<ExternalLinkIcon/></a></p>
<p>喜欢的话，点赞收藏！🔥</p>
</details>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: queue.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sun 03 Apr 2022 04:40:39 PM CST
 ************************************************************************/</span>

 <span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
    <span class="token string">"os"</span>
    <span class="token string">"errors"</span>
<span class="token punctuation">)</span>

<span class="token comment">//使用一个结构体管理数据</span>
<span class="token keyword">type</span> Queue <span class="token keyword">struct</span><span class="token punctuation">{</span>
    maxSize <span class="token builtin">int</span> 
    array <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token comment">//数组</span>
	front <span class="token builtin">int</span> <span class="token comment">//表示指向队列最前面</span>
    rear <span class="token builtin">int</span> <span class="token comment">//表示指向队列最后面</span>
<span class="token punctuation">}</span>

<span class="token comment">//方法一： 添加数据到队列</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Queue<span class="token punctuation">)</span> <span class="token function">AddQueue</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//可能有错误</span>

    <span class="token comment">//先判断队满</span>
    <span class="token keyword">if</span> this<span class="token punctuation">.</span>rear <span class="token operator">==</span> this<span class="token punctuation">.</span>maxSize <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">{</span>
        <span class="token comment">//提醒！！！rear是队列的尾部（含队列尾部元素--最后一个元素）</span>
        <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"queue full"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    this<span class="token punctuation">.</span>rear<span class="token operator">++</span>      <span class="token comment">//rear后移</span>
    this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token keyword">return</span>
    
<span class="token punctuation">}</span>

<span class="token comment">//显示队列</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Queue<span class="token punctuation">)</span> <span class="token function">ShowQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//找到队首，遍历到队尾</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"队列当前的的情况是："</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> this<span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span> this<span class="token punctuation">.</span>rear<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
        <span class="token comment">//frout是不包含队首的元素的</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"arrary[%d]=d\t"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>this<span class="token punctuation">.</span>array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//取出元素</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Queue<span class="token punctuation">)</span> <span class="token function">GetQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">,</span>err <span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//先判断队列是否为空</span>
    <span class="token keyword">if</span> this<span class="token punctuation">.</span>rear <span class="token operator">==</span> this<span class="token punctuation">.</span>front<span class="token punctuation">{</span>
        <span class="token comment">//对空</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"Queue empty"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    this<span class="token punctuation">.</span>front<span class="token operator">++</span>      <span class="token comment">//头后移一位</span>
    val <span class="token operator">=</span> this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>front<span class="token punctuation">]</span>
    <span class="token keyword">return</span>               <span class="token comment">//或者return val,err</span>
<span class="token punctuation">}</span>



<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token comment">//先创建一个队列</span>
    queue <span class="token operator">:=</span> <span class="token operator">&amp;</span>Queue<span class="token punctuation">{</span>
        maxSize <span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        front <span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
        rear <span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> key <span class="token builtin">string</span> 
    <span class="token keyword">var</span> val <span class="token builtin">int</span>
    <span class="token keyword">for</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"1/ 输入add表示添加数据到队列"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"2/ 输入get表示出队列"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"3/ 输入show表示显示队列"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"4/ 输入exit表示退出队列"</span><span class="token punctuation">)</span>
        
    
        fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span>
        <span class="token keyword">switch</span> key<span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">"add"</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入你要入队列的数"</span><span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>val<span class="token punctuation">)</span>
            err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">AddQueue</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
                  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err = "</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"加入队列成功"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
       <span class="token keyword">case</span> <span class="token string">"get"</span><span class="token punctuation">:</span>         <span class="token comment">//取出元素</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"get"</span><span class="token punctuation">)</span>
            val<span class="token punctuation">,</span>err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">GetQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err = "</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"取出队列成功val = "</span><span class="token punctuation">,</span>val<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
       <span class="token keyword">case</span> <span class="token string">"show"</span><span class="token punctuation">:</span>
              queue<span class="token punctuation">.</span><span class="token function">ShowQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token keyword">case</span> <span class="token string">"exit"</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>   <span class="token comment">//也可以直接使用return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译：</strong></p>
<p><img src="https://s2.loli.net/2022/04/03/qYoNJkM75jub1DU.png" alt="image-20220403170952129"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PS C:\Users\smile\Desktop\区块链\code\chapter18\tcpdemo\server> go run .\a.go
1/ 输入add表示添加数据到队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
add
请输入你要入队列的数
2
加入队列成功
1/ 输入add表示添加数据到队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
add
请输入你要入队列的数
4
加入队列成功
1/ 输入add表示添加数据到队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
add
请输入你要入队列的数
q
加入队列成功
1/ 输入add表示添加数据到队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
请输入你要入队列的数
1
加入队列成功
1/ 输入add表示添加数据到队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
add
请输入你要入队列的数
234
加入队列成功
1/ 输入add表示添加数据到队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
show
队列当前的的情况是：
arrary[0]=d     %!(EXTRA int=4)arrary[1]=d      %!(EXTRA int=4)arrary[2]=d      %!(EXTRA int=4)arrary[3]=d      %!(EXTRA int=4)arrary[4]=d      %!(EXTRA int=4)1/ 输入add表示添加数据到队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
get 1
get
取出队列成功val =  2
1/ 输入add表示添加数据到队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
get
取出队列成功val =  4
1/ 输入add表示添加数据到队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
show
队列当前的的情况是：
arrary[2]=d     %!(EXTRA int=4)arrary[3]=d      %!(EXTRA int=4)arrary[4]=d      %!(EXTRA int=4)1/ 输入add表示添加数据到 队列
2/ 输入get表示出队列
3/ 输入show表示显示队列
4/ 输入exit表示退出队列
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上面的队列并没有对空间进行有效的利用，如果实现环形队列！！</strong></p>
<h2 id="环形队列" tabindex="-1"><a class="header-anchor" href="#环形队列" aria-hidden="true">#</a> 环形队列</h2>
<blockquote>
<p>队尾索引的下一个头索引时表示队满。<strong>即队列容量空出一个作为约定，这个在做判断的时候要注意（tail+1)%maxSize == head 表示满</strong></p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"errors"</span>
	<span class="token string">"os"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> CircleQueue <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	maxSize <span class="token builtin">int</span> <span class="token comment">//4</span>
	array <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span> 
	head <span class="token builtin">int</span> <span class="token comment">//指向队列首部</span>
	tail <span class="token builtin">int</span> <span class="token comment">//指向队列尾部</span>
<span class="token punctuation">}</span>

<span class="token comment">//入队列 AddQueue       出队列 GetQueue(popQueue)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">Push</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"bool = "</span><span class="token punctuation">,</span>this<span class="token punctuation">.</span><span class="token function">IsFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">//入队列</span>
	<span class="token keyword">if</span> this<span class="token punctuation">.</span><span class="token function">IsFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"queue full"</span><span class="token punctuation">)</span>
		<span class="token comment">//队列满了</span>
	<span class="token punctuation">}</span>

	this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>tail<span class="token punctuation">]</span> <span class="token operator">=</span> val  <span class="token comment">//把值给尾部</span>
	<span class="token comment">//此时this.tall往后移位</span>
	this<span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>tail<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>this<span class="token punctuation">.</span>maxSize
	<span class="token keyword">return</span> 

<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//出队列，队列空没办法出</span>
	 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"bool = "</span><span class="token punctuation">,</span>this<span class="token punctuation">.</span><span class="token function">IsEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> this<span class="token punctuation">.</span><span class="token function">IsEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span>errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"queue empty"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//取出</span>
	val <span class="token operator">=</span> this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>head<span class="token punctuation">]</span>
	this<span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>head <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>this<span class="token punctuation">.</span>maxSize
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">//判断环形队列为满了的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">IsFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>tail <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span>this<span class="token punctuation">.</span>maxSize <span class="token operator">==</span> this<span class="token punctuation">.</span>head
<span class="token punctuation">}</span>

<span class="token comment">//判断环形队列是否空的</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">IsEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> this<span class="token punctuation">.</span>tail <span class="token operator">==</span> this<span class="token punctuation">.</span>head
<span class="token punctuation">}</span>

<span class="token comment">//取出环形队列有多少个元素</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>tail <span class="token operator">+</span> this<span class="token punctuation">.</span>maxSize <span class="token operator">-</span> this<span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token operator">%</span> this<span class="token punctuation">.</span>maxSize
	<span class="token comment">//由于是环形队列，所以我们在使用的时候要先加上队列的容量，减去头部，最后要%%%%%</span>
<span class="token punctuation">}</span>

<span class="token comment">//显示队列</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">ListQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//判断为空，空的话就直接跳出</span>
	<span class="token comment">//取出当前有多少元素</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"环形队列情况如下："</span><span class="token punctuation">)</span>
	size <span class="token operator">:=</span> this<span class="token punctuation">.</span><span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"队列为空"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	temp <span class="token operator">:=</span> this<span class="token punctuation">.</span>head
	<span class="token keyword">for</span> i <span class="token operator">:=</span> this<span class="token punctuation">.</span>head<span class="token punctuation">;</span>i<span class="token operator">&lt;</span>size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"aee[%d = %d\t"</span><span class="token punctuation">,</span>temp<span class="token punctuation">,</span>this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>head<span class="token punctuation">]</span><span class="token punctuation">)</span>
		temp <span class="token operator">=</span> <span class="token punctuation">(</span>temp <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>this<span class="token punctuation">.</span>maxSize
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取队头元素</span>
<span class="token keyword">func</span>  <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">GetFront</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>val1 <span class="token builtin">int</span> <span class="token punctuation">,</span>val2 <span class="token builtin">int</span> <span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//判断队空</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>head <span class="token operator">==</span> this<span class="token punctuation">.</span>tail<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//表示队空</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"取出队列失败，队列为空的 err  "</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"queue empty"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
		<span class="token comment">//队列非空</span>
		val1 <span class="token operator">=</span> this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>head<span class="token punctuation">]</span> 
		val2 <span class="token operator">=</span> this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>tail<span class="token punctuation">]</span>
		<span class="token comment">//获取元素不移位</span>
		<span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	  
    <span class="token comment">//先创建一个队列</span>
    queue <span class="token operator">:=</span> <span class="token operator">&amp;</span>CircleQueue<span class="token punctuation">{</span>
        maxSize <span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
		head <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        tail <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> key <span class="token builtin">string</span> 
    <span class="token keyword">var</span> val <span class="token builtin">int</span>
	<span class="token keyword">var</span> input <span class="token builtin">byte</span>
    <span class="token keyword">for</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"1/ 输入add表示添加数据到队列"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"2/ 输入get表示出队列"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"3/ 输入show表示显示队列"</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"4/ 输入exit表示退出队列"</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"5/ 输入select显示头尾元素"</span><span class="token punctuation">)</span>
        
    
        fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span>
        <span class="token keyword">switch</span> key<span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">"add"</span><span class="token punctuation">,</span><span class="token string">"1"</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请输入你要入队列的数"</span><span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>val<span class="token punctuation">)</span>
            err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
                  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err = "</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"加入队列成功"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
       <span class="token keyword">case</span> <span class="token string">"get"</span><span class="token punctuation">,</span><span class="token string">"2"</span><span class="token punctuation">:</span>         <span class="token comment">//取出元素</span>
           fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"get"</span><span class="token punctuation">)</span>
            val<span class="token punctuation">,</span>err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err = "</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"取出队列成功val = "</span><span class="token punctuation">,</span>val<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
       <span class="token keyword">case</span> <span class="token string">"show"</span><span class="token punctuation">,</span><span class="token string">"3"</span><span class="token punctuation">:</span>
              queue<span class="token punctuation">.</span><span class="token function">ListQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token keyword">case</span> <span class="token string">"exit"</span><span class="token punctuation">,</span><span class="token string">"4"</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>   <span class="token comment">//也可以直接使用return</span>
	   <span class="token keyword">case</span> <span class="token string">"select"</span><span class="token punctuation">,</span><span class="token string">"5"</span><span class="token punctuation">:</span>
			<span class="token comment">//显示首位元素</span>
			a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">GetFront</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"显示失败，err = "</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				re<span class="token punctuation">:</span>    <span class="token comment">//标记</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请选择取出的元素 A/a:队首 --- B/b:队尾"</span><span class="token punctuation">)</span>
				fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>input<span class="token punctuation">)</span>
				<span class="token keyword">if</span> input <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
					fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"队首元素为："</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> input <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">{</span>
					fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"队尾元素为："</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
					fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"你的输入有误，请重新输入"</span><span class="token punctuation">)</span>
					<span class="token keyword">goto</span> re
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>smile<span class="token punctuation">\</span>Desktop<span class="token punctuation">\</span>区块链<span class="token punctuation">\</span>code<span class="token punctuation">\</span>chapter18<span class="token punctuation">\</span>tcpdemo<span class="token punctuation">\</span>server<span class="token operator">></span> go run .<span class="token punctuation">\</span>a.go
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">1</span>
请输入你要入队列的数
<span class="token number">3</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
加入队列成功
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token function">add</span>
请输入你要入队列的数
<span class="token number">3</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
加入队列成功
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
show
环形队列情况如下：
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">0</span> <span class="token number">3</span>
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">1</span> <span class="token number">3</span>

<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">5</span>
请选择取出的元素 A/a:队首 --- B/b:队尾
a
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
A
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
<span class="token string">'a'</span>
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
<span class="token string">"a"</span>
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
^S你的输入有误，请重新输入
请选择取出的元素 A/a:队首 --- B/b:队尾
<span class="token builtin class-name">exit</span> status 0xc000013a
PS C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>smile<span class="token punctuation">\</span>Desktop<span class="token punctuation">\</span>区块链<span class="token punctuation">\</span>code<span class="token punctuation">\</span>chapter18<span class="token punctuation">\</span>tcpdemo<span class="token punctuation">\</span>server<span class="token operator">></span> go run .<span class="token punctuation">\</span>a.go
<span class="token comment"># command-line-arguments</span>
.<span class="token punctuation">\</span>a.go:144:17: invalid operation: input <span class="token operator">==</span> a <span class="token punctuation">(</span>mismatched types byte and int<span class="token punctuation">)</span>
PS C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>smile<span class="token punctuation">\</span>Desktop<span class="token punctuation">\</span>区块链<span class="token punctuation">\</span>code<span class="token punctuation">\</span>chapter18<span class="token punctuation">\</span>tcpdemo<span class="token punctuation">\</span>server<span class="token operator">></span> go run .<span class="token punctuation">\</span>a.go
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">5</span>
取出队列失败，队列为空的 err
显示失败，err <span class="token operator">=</span>  queue empty
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">1</span>
请输入你要入队列的数
<span class="token function">add</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
加入队列成功
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token builtin class-name">exit</span> status 0xc000013a
PS C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>smile<span class="token punctuation">\</span>Desktop<span class="token punctuation">\</span>区块链<span class="token punctuation">\</span>code<span class="token punctuation">\</span>chapter18<span class="token punctuation">\</span>tcpdemo<span class="token punctuation">\</span>server<span class="token operator">></span> go run .<span class="token punctuation">\</span>a.go
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">1</span>
请输入你要入队列的数
<span class="token number">3</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
加入队列成功
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">5</span>
请选择取出的元素 A/a:队首 --- B/b:队尾
<span class="token number">1</span>
队首元素为： <span class="token number">3</span>
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">1</span>
请输入你要入队列的数
<span class="token number">4</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
加入队列成功
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token function">add</span>
请输入你要入队列的数
<span class="token number">5</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
加入队列成功
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
show
环形队列情况如下：
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">0</span> <span class="token number">3</span>
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">1</span> <span class="token number">3</span>
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">2</span> <span class="token number">3</span>

<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">2</span>
get
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
取出队列成功val <span class="token operator">=</span>  <span class="token number">3</span>
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
<span class="token number">5</span>
请选择取出的元素 A/a:队首 --- B/b:队尾
<span class="token number">2</span>
队尾元素为： <span class="token number">0</span>
<span class="token number">1</span>/ 输入add表示添加数据到队列
<span class="token number">2</span>/ 输入get表示出队列
<span class="token number">3</span>/ 输入show表示显示队列
<span class="token number">4</span>/ 输入exit表示退出队列
<span class="token number">5</span>/ 输入select显示头尾元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '24.md' style='float:left'>⬆️上一节🔗</a><a href = '26.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


