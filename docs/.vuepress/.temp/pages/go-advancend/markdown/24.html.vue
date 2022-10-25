<template><div><h1 id="稀疏数组sparsearray" tabindex="-1"><a class="header-anchor" href="#稀疏数组sparsearray" aria-hidden="true">#</a> 稀疏数组sparsearray</h1>
<nav class="table-of-contents"><ul><li><router-link to="#实际需求">实际需求</router-link></li><li><router-link to="#分析问题">分析问题</router-link></li><li><router-link to="#基本介绍">基本介绍</router-link></li><li><router-link to="#应用实例">应用实例</router-link><ul><li><router-link to="#稀疏数组与二维数组互转思路">稀疏数组与二维数组互转思路</router-link></li><li><router-link to="#代码实现-go">代码实现（Go)</router-link></li><li><router-link to="#代码实现-java">代码实现（java)</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
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
<h2 id="实际需求" tabindex="-1"><a class="header-anchor" href="#实际需求" aria-hidden="true">#</a> 实际需求</h2>
<details class="custom-container details"><summary>警告⚠️</summary>
<p>数据结构和算法相关移步到<a href="https://github.com/3293172751/LeetCode/" target="_blank" rel="noopener noreferrer">算法和数据结构仓库<ExternalLinkIcon/></a></p>
<p>喜欢的话，点赞收藏！🔥</p>
</details>
<p>先来看一个实际需求，比较好思考</p>
<p>编写五子棋程序中的 <strong>存盘退出</strong> 和 <strong>续上盘</strong> 功能</p>
<p><img src="https://zq99299.github.io/dsalg-tutorial/assets/img/image-20200703215903031.8ffc1996.png" alt=""></p>
<p>我们首先能想到的就是使用一个 <strong>二维数组</strong>，如上图所示：</p>
<ul>
<li>0：表示没有棋子</li>
<li>1：表示黑棋</li>
<li>2：表示白棋</li>
</ul>
<h2 id="分析问题" tabindex="-1"><a class="header-anchor" href="#分析问题" aria-hidden="true">#</a> 分析问题</h2>
<p>可以看到二维数组中很多值都是 0，因此记录了很多没有意义的数据。</p>
<h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2>
<p>定义：当一个数组中 <strong>大部分元素为 0（或是同一个值）</strong> 时，可以使用 <strong>稀疏数组</strong> 来保存该数组</p>
<p>处理方法：</p>
<ol>
<li>记录数组一共有 <strong>几行几列</strong>，<strong>有多少个不同的值</strong></li>
<li>把具有 <strong>不同值的元素</strong> 的 <strong>行列及值</strong> 记录在一个 <strong>小规模的数组</strong> 中，从而缩小程序的规模</li>
</ol>
<p>这个小规模的数组就称为 <strong>稀疏数组</strong>，举个例子，如下图</p>
<p><img src="https://s2.loli.net/2022/04/03/dA7jP9UY3fzCVO4.png" alt=""></p>
<p>左侧是原始的二维数组 <code v-pre>6x7 = 42 个格子</code>，右侧是稀疏数组 <code v-pre>9 x 3 = 27 个格子</code></p>
<ul>
<li>
<p><code v-pre>[0]</code>：记录了棋盘的大小，6 行 7 列，棋盘上有 8 个不为 0 的值</p>
</li>
<li>
<p>其他行：分别记录每一个非 0 值的所在行、所在列、值</p>
<p>比如 <code v-pre>[1]</code>：在第 0 行第 3 列上有一个 22（这里的行列都是下标）</p>
</li>
</ul>
<p>可以看到原始 42 个数据，压缩成 27 个数据。一定程度上压缩了数据。</p>
<h2 id="应用实例" tabindex="-1"><a class="header-anchor" href="#应用实例" aria-hidden="true">#</a> 应用实例</h2>
<p>使用 <strong>稀疏数组</strong> 保留类似前面的 <strong>二维数组</strong>（如棋盘、地图等等的场景），把 <strong>稀疏数组存盘</strong>，并且可以从新 <strong>恢复原来的二维数组</strong></p>
<h3 id="稀疏数组与二维数组互转思路" tabindex="-1"><a class="header-anchor" href="#稀疏数组与二维数组互转思路" aria-hidden="true">#</a> 稀疏数组与二维数组互转思路</h3>
<p>以前面的棋盘数据来讲解</p>
<p><img src="https://s2.loli.net/2022/04/03/Vr4uRL36IGbfw7T.png" alt=""></p>
<p>如上图，总结出来稀疏数组为右侧那样。那么他们互转思路如下：</p>
<p><strong>二维数组转稀疏数组思路：</strong></p>
<ol>
<li>遍历原始的二维数组，得到有效个数 sum</li>
<li>根据 sum 创建 <strong>稀疏数组</strong> <code v-pre>sparseArr = int[sum + 1][3]</code></li>
<li>将二维数据的有效数据存入到稀疏数组中（从第 2 行开始存储）</li>
<li>最后将棋盘大小和有效个数写入第一行</li>
</ol>
<p><strong>稀疏数组转原始二维数组思路：</strong></p>
<ol>
<li>读取第一行数据，根据棋盘大小，创建原始的二维数组 <code v-pre>chessArr = int [11][11]</code></li>
<li>从第二行开始，将有效数据还原到原始数组中</li>
</ol>
<hr>
<h3 id="代码实现-go" tabindex="-1"><a class="header-anchor" href="#代码实现-go" aria-hidden="true">#</a> 代码实现（Go)</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: chassMap.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sun 03 Apr 2022 02:39:52 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> valNode <span class="token keyword">struct</span><span class="token punctuation">{</span>
    row <span class="token builtin">int</span> <span class="token comment">//行</span>
    col <span class="token builtin">int</span> <span class="token comment">//列</span>
    val <span class="token builtin">int</span> <span class="token comment">//数值</span>
    <span class="token comment">//val is struct over</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//1. 创建一个原始数组</span>
    <span class="token keyword">var</span> chassMap <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    chassMap<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>   <span class="token comment">//黑子</span>
    chassMap<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>   <span class="token comment">//篮子</span>
    
    <span class="token comment">//输出数组是否正确</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> chassMap<span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>v2 <span class="token operator">:=</span> <span class="token keyword">range</span> v<span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%d\t"</span><span class="token punctuation">,</span>v2<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span>

        <span class="token comment">//转化为稀疏数组。此时必须要使用切片，使用结构体来保存</span>
        <span class="token comment">//遍历chassmap，如果我们发现有一个元素的值不等于0，此时我们就创建一个node节点，将其放在一个node结构体中</span>
        <span class="token keyword">var</span> sparseArr <span class="token punctuation">[</span><span class="token punctuation">]</span>valNode 
        
        <span class="token comment">//标准的稀疏数组应该还有一个 记录元素的二维数组的规模（行和列）</span>
                valNode <span class="token operator">:=</span> valNode<span class="token punctuation">{</span>
                    row <span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
                    col <span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
                    val <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>       <span class="token comment">//行和列  默认是0</span>
                <span class="token punctuation">}</span>
        

        <span class="token comment">//遍历</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> chassMap<span class="token punctuation">{</span>
        <span class="token keyword">for</span> j<span class="token punctuation">,</span>v2 <span class="token operator">:=</span> <span class="token keyword">range</span> v<span class="token punctuation">{</span>
            <span class="token keyword">if</span> v2 <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">{</span>
                <span class="token comment">//创建一个节点 -- valnode 值节点</span>
                valNode <span class="token operator">:=</span> valNode<span class="token punctuation">{</span>
                    row <span class="token punctuation">:</span> i<span class="token punctuation">,</span>
                    col <span class="token punctuation">:</span> j<span class="token punctuation">,</span>
                    val <span class="token punctuation">:</span> v2<span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
                sparseArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>sparseArr<span class="token punctuation">,</span>valNode<span class="token punctuation">)</span>
    
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"当前的稀疏数组是:"</span><span class="token punctuation">)</span>
    <span class="token comment">//输出稀疏数组</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span>valNode <span class="token operator">:=</span> <span class="token keyword">range</span> sparseArr<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%d : %d %d %d"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>valNode<span class="token punctuation">.</span>row<span class="token punctuation">,</span>valNode<span class="token punctuation">.</span>col<span class="token punctuation">,</span>valNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="代码实现-java" tabindex="-1"><a class="header-anchor" href="#代码实现-java" aria-hidden="true">#</a> 代码实现（java)</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>mrcode<span class="token punctuation">.</span>study<span class="token punctuation">.</span>dsalgtutorialdemo<span class="token punctuation">.</span>datastructure<span class="token punctuation">.</span>sparsearray</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
 <span class="token code-section">*  <span class="token line"><span class="token code language-java">稀疏数组：</span></span>
 *      <span class="token line"><span class="token code language-java"><span class="token number">1.</span> 二维数组转稀疏数组</span></span>
 *      <span class="token line"><span class="token code language-java"><span class="token number">2.</span> 稀疏数组转二维数组</span></span>
 *</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SparseArray</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建原始二维数组</span>
        <span class="token comment">// 0：没有棋子，1：黑棋，2：白棋</span>
        <span class="token comment">// 棋盘大小 11 x 11</span>
        <span class="token keyword">int</span> chessArr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        chessArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        chessArr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
      
        <span class="token comment">// 预览棋盘上的棋子位置</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"预览原始数组"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printChessArray</span><span class="token punctuation">(</span>chessArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
        <span class="token comment">// 二维数组转稀疏数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sparseArr <span class="token operator">=</span> <span class="token function">chessToSparse</span><span class="token punctuation">(</span>chessArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token comment">// int[][] sparseArr = chessToSparse2(chessArr); // 紧凑版本可以参考笔记配套项目</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"二维数组转稀疏数组"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printChessArray</span><span class="token punctuation">(</span>sparseArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
        <span class="token comment">// 稀疏数组转二维数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chessArr2 <span class="token operator">=</span> <span class="token function">sparseToChess</span><span class="token punctuation">(</span>sparseArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"稀疏数组转二维数组"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printChessArray</span><span class="token punctuation">(</span>chessArr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 二维数组转稀疏数组
     *
     * <span class="token keyword">@param</span> <span class="token parameter">chessArr</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">chessToSparse</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chessArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 遍历数组得到有效棋子个数</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> row <span class="token operator">:</span> chessArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> chess <span class="token operator">:</span> row<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>chess <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    sum<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 2. 创建稀疏数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sparseArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>sum <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 3. 将二维数据的有效数据存入到稀疏数组中（从第 2 行开始存储）</span>
        <span class="token keyword">int</span> chessRow <span class="token operator">=</span> chessArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>  <span class="token comment">// 行： 棋盘大小</span>
        <span class="token keyword">int</span> chessCol <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 列： 棋盘大小</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录当前是第几个非 0 的数据</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chessArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> rows <span class="token operator">=</span> chessArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>chessCol <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                chessCol <span class="token operator">=</span> rows<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> rows<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> chess <span class="token operator">=</span> rows<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>chess <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>  <span class="token comment">// 第一行是棋盘信息，所以先自增</span>
                sparseArr<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
                sparseArr<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
                sparseArr<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> chess<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 4. 补全第一行的棋盘大小和有效数据</span>
        sparseArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> chessRow<span class="token punctuation">;</span>
        sparseArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> chessCol<span class="token punctuation">;</span>
        sparseArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> sum<span class="token punctuation">;</span>
        <span class="token keyword">return</span> sparseArr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 稀疏数组转二维数组
     *
     * <span class="token keyword">@param</span> <span class="token parameter">sparseArr</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">sparseToChess</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sparseArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 创建二维数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chessArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>sparseArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>sparseArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 2. 恢复有效数据到二维数组</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sparseArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> rows <span class="token operator">=</span> sparseArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            chessArr<span class="token punctuation">[</span>rows<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>rows<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> rows<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> chessArr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 打印棋盘上的棋子布局
     *
     * <span class="token keyword">@param</span> <span class="token parameter">chessArr</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printChessArray</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chessArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> row <span class="token operator">:</span> chessArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> data <span class="token operator">:</span> row<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 左对齐，使用两个空格补齐 2 位数</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%-2d\t"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出信息如下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>预览原始数组
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	1 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	2 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
二维数组转稀疏数组
11	11	2 	
1 	2 	1 	
2 	3 	2 	
稀疏数组转二维数组
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	1 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	2 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	
0 	0 	0 	0 	0 	0 	0 	0 	0 	0 	0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '23.md' style='float:left'>⬆️上一节🔗</a><a href = '25.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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
</div></template>


