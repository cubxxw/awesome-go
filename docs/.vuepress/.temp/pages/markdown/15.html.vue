<template><div><h1 id="文件的一系列操作" tabindex="-1"><a class="header-anchor" href="#文件的一系列操作" aria-hidden="true">#</a> 文件的一系列操作</h1>
<nav class="table-of-contents"><ul><li><router-link to="#文件操作速查">文件操作速查</router-link></li><li><router-link to="#文件">文件</router-link></li><li><router-link to="#openfile函数">OPenFile函数</router-link></li><li><router-link to="#读取文件内容显示在终端方法">读取文件内容显示在终端方法</router-link></li><li><router-link to="#写文件的操作">写文件的操作</router-link></li><li><router-link to="#constants">Constants</router-link></li><li><router-link to="#golang判断文件或者文件夹是否存在">golang判断文件或者文件夹是否存在</router-link></li><li><router-link to="#拷贝-复制-文件">拷贝（复制）文件</router-link></li><li><router-link to="#统计英文、数字、空格和其他字符数量">统计英文、数字、空格和其他字符数量</router-link></li><li><router-link to="#python中的文件操作">python中的文件操作</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
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
<hr>
<h2 id="文件操作速查" tabindex="-1"><a class="header-anchor" href="#文件操作速查" aria-hidden="true">#</a> 文件操作速查</h2>
<details class="custom-container details"><summary>读取文件操作 方法一</summary>
<p><strong>读取文件的方法一：注意一次只能读取<code v-pre>128</code>个字节，可以循环读取</strong></p>
<ol>
<li>
<p>打开文件 <code v-pre>fileObj, err := os.Open(&quot;文件路径&quot;)</code></p>
</li>
<li>
<p>读取文件内容 <code v-pre>reader := bufio.NewReader(fileObj)</code></p>
</li>
<li>
<p>循环读取文件内容</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> <span class="token punctuation">{</span>
    str<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">''</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>  <span class="token comment">// `EOF`是文件读取结束的标志，当读取到文件末尾时，会返回`EOF`</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>关闭文件 <code v-pre>fileObj.Close()</code></p>
</li>
</ol>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"./51-main.go"</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"文件打开失败"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"文件打开成功"</span><span class="token punctuation">)</span>

	<span class="token comment">//创建一个切片 用来存储读取的内容</span>
	buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token comment">//循环读取文件内容</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		n<span class="token punctuation">,</span> err <span class="token operator">:=</span> file<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"文件读取失败"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//如果读取的内容小于1024字节，就结束循环</span>
		<span class="token keyword">if</span> n <span class="token operator">&lt;</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">2</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>D:<span class="token punctuation">\</span>文档<span class="token punctuation">\</span>最近的<span class="token punctuation">\</span>awesome-golang<span class="token punctuation">\</span>docs<span class="token punctuation">\</span>code<span class="token punctuation">\</span>go-super<span class="token operator">></span>go build <span class="token number">52</span>-main.go

D:<span class="token punctuation">\</span>文档<span class="token punctuation">\</span>最近的<span class="token punctuation">\</span>awesome-golang<span class="token punctuation">\</span>docs<span class="token punctuation">\</span>code<span class="token punctuation">\</span>go-super<span class="token operator">></span><span class="token number">52</span>-main.exe
文件打开成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📜 对上面的解释：</p>
<blockquote>
<p><strong>后面读取内容太长，但是内容是没有读取完整的，只读取到一部分，最后一个不满1024字节就去掉了，如果想要读取完整，改for循环：~</strong></p>
<ul>
<li><code v-pre>EOF</code>是文件读取结束的标志，当读取到文件末尾时，会返回<code v-pre>EOF</code></li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> <span class="token punctuation">{</span>
	n<span class="token punctuation">,</span> err <span class="token operator">:=</span> file<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>  <span class="token comment">// `EOF`是文件读取结束的标志，当读取到文件末尾时，会返回`EOF`·</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"文件读取失败"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>   
	<span class="token punctuation">}</span>
	<span class="token comment">// //如果读取的内容小于1024字节，就结束循环</span>
	<span class="token comment">// if n &lt; 1024*2 {</span>
	<span class="token comment">// 	break</span>
	<span class="token comment">// }</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</details>
<details class="custom-container details"><summary>读取文件的方法二： bufio包的ReadFile()函数</summary>
<p><strong>读取文件的方法二： bufio包的ReadFile()函数</strong></p>
<ol>
<li>读取文件内容 <code v-pre>content, err := ioutil.ReadFile(&quot;文件路径&quot;)</code></li>
<li>打印文件内容 <code v-pre>fmt.Println(string(content))</code></li>
</ol>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
 * @Description: bufio按行读取文件
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-26 17:55:39
 * @FilePath: \code\go-super\53-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"io/ioutil"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//bufio按行读取文件  如果文件太大，会导致内存溢出</span>
	byteString<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">"./51-main.go"</span><span class="token punctuation">)</span> <span class="token comment">//返回的是一个字节切片</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"文件读取失败"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>byteString<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果和上面一样</p>
</details>
<details class="custom-container details"><summary>读取文件的方法二： bufio读取文件</summary>
<p><strong>bufio读取文件</strong></p>
<ol>
<li>只读方式打开文件 <code v-pre>file, err := os.Open(&quot;test.txt&quot;)</code></li>
<li>创建一个 <code v-pre>*Reader</code> 是带缓冲的 <code v-pre>reader := bufio.NewReader(file)</code></li>
<li>循环的调用 <code v-pre>reader.ReadString('\n')</code> 读取文件的内容</li>
<li>关闭文件 <code v-pre>defer file.Close()</code></li>
</ol>
</details>
<h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h2>
<blockquote>
<p>文件，我们并不陌生，<strong>文件就是数据源（保存数据的地方）的一种</strong>，文件最主要的作用是<strong>保存数据</strong>,它既可以是保存一张图片，也可以是声音和视频</p>
</blockquote>
<p><strong>文件在程序中是以流的形式来操作的</strong></p>
<p><img src="@source/markdown/images/RWjc4mD65IYBgTt.png" alt="image-20220312132518175"></p>
<p><strong>os.file</strong>封装所有文件相关操作，file是一个结构体</p>
<p><strong>文件是一个指针类型</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: file.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sat 12 Mar 2022 01:45:24 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"os"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    file <span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"/c/golang/fun.go"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"open file = "</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>   
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"file= %v"</span><span class="token punctuation">,</span>file<span class="token punctuation">)</span>
    <span class="token comment">//关闭文件</span>
    err <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                                                            
    <span class="token keyword">if</span> err<span class="token operator">!=</span><span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"打开文件错误"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>rroot@mail golang<span class="token punctuation">]</span><span class="token comment"># go build -o a file.go </span>
<span class="token punctuation">[</span>rroot@mail golang<span class="token punctuation">]</span><span class="token comment"># ./a</span>
<span class="token assign-left variable">fifile</span><span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span>0xc0000a6120vim file.goo build <span class="token parameter variable">-o</span> a file.go 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由此可见，文件就是一个指针</strong></p>
<h2 id="openfile函数" tabindex="-1"><a class="header-anchor" href="#openfile函数" aria-hidden="true">#</a> OPenFile函数</h2>
<p>Go语言的 os 包下有一个 OpenFile 函数，其原型如下所示：</p>
<p>func OpenFile(name string, flag int, perm FileMode) (file *File, err error)</p>
<p>其中 name 是文件的文件名，如果不是在当前路径下运行需要加上具体路径；flag 是文件的处理参数，为 int 类型，根据系统的不同具体值可能有所不同，但是作用是相同的。</p>
<p>下面列举了一些常用的 flag 文件处理参数：</p>
<ul>
<li>O_RDONLY：只读模式打开文件；</li>
<li>O_WRONLY：只写模式打开文件；</li>
<li>O_RDWR：读写模式打开文件；</li>
<li>O_APPEND：写操作时将数据附加到文件尾部（追加）；</li>
<li>O_CREATE：如果不存在将创建一个新文件；</li>
<li>O_EXCL：和 O_CREATE 配合使用，文件必须不存在，否则返回一个错误；</li>
<li>O_SYNC：当进行一系列写操作时，每次都要等待上次的 I/O 操作完成再进行；</li>
<li>O_TRUNC：如果可能，在打开时清空文件。</li>
</ul>
<p>创建一个新文件 golang.txt，并在其中写入 5 句“http://nsddd.top”。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"bufio"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"os"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//创建一个新文件，写入内容 5 句 “http://c.biancheng.net/golang/”</span>
    filePath <span class="token operator">:=</span> <span class="token string">"e:/code/golang.txt"</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREATE<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"文件打开失败"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//及时关闭file句柄</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//写入文件时，使用带缓存的 *Writer</span>
    write <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">"http://nsddd.top\n"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//Flush将缓存的文件真正写入到文件中</span>
    write<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取文件内容显示在终端方法" tabindex="-1"><a class="header-anchor" href="#读取文件内容显示在终端方法" aria-hidden="true">#</a> 读取文件内容显示在终端方法</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"os"</span>
    <span class="token string">"io"</span>
    <span class="token string">"reader"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"/c/golang/fun.go"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"open file = "</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> 
    
    <span class="token comment">//及时关闭文件</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    
    <span class="token comment">//循环的读取文件的内容</span>
    <span class="token keyword">for</span><span class="token punctuation">{</span>
        str<span class="token punctuation">,</span>err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">)</span>
        <span class="token comment">//读取到一行就结束,err 错误信息提示</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> io<span class="token punctuation">.</span>EOF<span class="token punctuation">{</span>
            <span class="token comment">//io.EOF表示文件的末尾，此时结束读取</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"文件读取结束..."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译读取：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go run file.go </span>
package main

<span class="token function">import</span> <span class="token string">"fmt"</span>

func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   /* 定义局部变量 */
   var a int <span class="token operator">=</span> <span class="token number">100</span>
   var b int <span class="token operator">=</span> <span class="token number">200</span>
   var ret int

   /* 调用函数并返回最大值 */
   ret <span class="token operator">=</span> max<span class="token punctuation">(</span>a, b<span class="token punctuation">)</span>

   fmt.Printf<span class="token punctuation">(</span> <span class="token string">"最大值是 : %!d(MISSING)<span class="token entity" title="\n">\n</span>"</span>, ret <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

/* 函数返回两个数的最大值 */
func max<span class="token punctuation">(</span>num1, num2 int<span class="token punctuation">)</span> int <span class="token punctuation">{</span>
   /* 定义局部变量 */

   <span class="token keyword">if</span> <span class="token punctuation">(</span>num1 <span class="token operator">></span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token builtin class-name">return</span> unm1
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token builtin class-name">return</span> num2
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
文件读取结束<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>读取文件内容并且显示在终端（使用ioutil==一次将文件读取到内存中==),这种方式适用于文件不大的情况，相关方法和函数(ioutil.ReadFile)</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func ReadFile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*************************************************************************
    > File Name: iouit.go
    > Author: smile
    > Mail: 3293172751nss@gmail.com 
    > Created Time: Sat 12 Mar 2022 02:48:32 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io/ioutil"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//使用ioutil一次性将函数读取到为</span>
    file <span class="token operator">:=</span> <span class="token string">"/c/golang/aa.go"</span>
    content<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token comment">//文件的打开和关闭都被隐藏起来了。所以不需要写打开和关闭</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"file open err= %v"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>   
    <span class="token comment">//把读取到的内容显示到终端</span>
    <span class="token comment">//fmt.Printf("%v",content)  //[]bype</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v"</span><span class="token punctuation">,</span><span class="token function">string</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//需要转换为string  </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go run iouit.go </span>
package main
<span class="token function">import</span> <span class="token string">"fmt"</span>
func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   var a int <span class="token operator">=</span> <span class="token number">21</span>
   var c int
   c <span class="token operator">=</span>  a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写文件的操作" tabindex="-1"><a class="header-anchor" href="#写文件的操作" aria-hidden="true">#</a> 写文件的操作</h2>
<p><a href="https://studygolang.com/pkgdoc" target="_blank" rel="noopener noreferrer">🖱️ 请去官网点击os包<ExternalLinkIcon/></a></p>
<h2 id="constants" tabindex="-1"><a class="header-anchor" href="#constants" aria-hidden="true">#</a> Constants</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
    O_RDONLY <span class="token builtin">int</span> <span class="token operator">=</span> syscall<span class="token punctuation">.</span>O_RDONLY    <span class="token comment">// 只读模式打开文件</span>
    O_WRONLY <span class="token builtin">int</span> <span class="token operator">=</span> syscall<span class="token punctuation">.</span>O_WRONLY    <span class="token comment">// 只写模式打开文件</span>
    O_RDWR   <span class="token builtin">int</span> <span class="token operator">=</span> syscall<span class="token punctuation">.</span>O_RDWR      <span class="token comment">// 读写模式打开文件</span>
    O_APPEND <span class="token builtin">int</span> <span class="token operator">=</span> syscall<span class="token punctuation">.</span>O_APPEND    <span class="token comment">// 写操作时将数据附加到文件尾部</span>
    O_CREATE <span class="token builtin">int</span> <span class="token operator">=</span> syscall<span class="token punctuation">.</span>O_CREAT     <span class="token comment">// 如果不存在将创建一个新文件</span>
    O_EXCL   <span class="token builtin">int</span> <span class="token operator">=</span> syscall<span class="token punctuation">.</span>O_EXCL      <span class="token comment">// 和O_CREATE配合使用，文件必须不存在</span>
    O_SYNC   <span class="token builtin">int</span> <span class="token operator">=</span> syscall<span class="token punctuation">.</span>O_SYNC      <span class="token comment">// 打开文件用于同步I/O</span>
    O_TRUNC  <span class="token builtin">int</span> <span class="token operator">=</span> syscall<span class="token punctuation">.</span>O_TRUNC     <span class="token comment">// 如果可能，打开时清空文件</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们通常把 O_CREATE和O_WRONLY组合使用（写文件如果文件不存在那么创建一个文件）</strong></p>
<p>**使用os.OpenFile(),budio.NewWriter()，**Writer的方法完成下面案例</p>
<p><strong>案例一</strong></p>
<blockquote>
<p>创建一个新文件，写入内容5句”hello word”</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main                                                                                                  
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"bufio"</span>
    <span class="token string">"os"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//1. 打开文件</span>
    filePath <span class="token operator">:=</span> <span class="token string">"c/golang/hello.go"</span>
    file<span class="token punctuation">,</span>err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span>os<span class="token punctuation">.</span>O_WRONLY <span class="token operator">|</span> os<span class="token punctuation">.</span>O_CREATE<span class="token punctuation">,</span><span class="token number">0666</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"open file err=%v\n"</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>   
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//写入</span>
    str <span class="token operator">:=</span> <span class="token string">"hello word\n"</span>  <span class="token comment">//\n表示换行</span>
    writer <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token comment">//writer 是带缓存的</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
        writer<span class="token punctuation">.</span><span class="token function">WriterString</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>   
    writer<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在原来基础上读写和追加</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> file,err := os.OpenFile(filePath,os.O_O_RDWR | os.O_APPEND,0666)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="golang判断文件或者文件夹是否存在" tabindex="-1"><a class="header-anchor" href="#golang判断文件或者文件夹是否存在" aria-hidden="true">#</a> golang判断文件或者文件夹是否存在</h2>
<p><strong>golang判断文件或者文件夹是否存在的方法为使用os.Stat()函数返回的错误值进行判断</strong></p>
<ol>
<li>如果返回的错误为nil,说明文件或文件夹不存在</li>
<li>如果返回的错误类型为os.lsNotExist()判断为true,说明文件或者文件夹不存在</li>
<li>如果返回值的错误类型为其他类型，则不确定是否存在</li>
</ol>
<blockquote>
<p>自己写了一个函数   –  可以直接用</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">PathExists</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span><span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//传送路径path</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span>err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Stat</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">//文件或者目录存在</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> os<span class="token punctuation">.</span><span class="token function">lsNotExist</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">,</span>err    <span class="token comment">//可能有其他的错误信息</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拷贝-复制-文件" tabindex="-1"><a class="header-anchor" href="#拷贝-复制-文件" aria-hidden="true">#</a> 拷贝（复制）文件</h2>
<p>::: det复制文件可以用写入方式
复制文件方法：</p>
<ol>
<li>打开源文件 srcFile, err := os.Open(&quot;test.txt&quot;)</li>
<li>创建目标文件 dstFile, err := os.Create(&quot;test_copy.txt&quot;)</li>
<li>创建一个 *Reader 是带缓冲的 reader := bufio.NewReader(srcFile)</li>
<li>创建一个 *Writer 是带缓冲的 writer := bufio.NewWriter(dstFile)</li>
<li>循环的调用 reader.ReadString('\n') 读取文件的内容</li>
<li>调用 writer.WriteString(str) 将读取到的内容写入到目标文件中</li>
<li>调用 writer.Flush() 将缓冲区的内容写入到目标文件中</li>
<li>关闭文件 defer srcFile.Close()</li>
</ol>
<p>:::</p>
<p><strong>目标文件dst，原文件src</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Copy</span><span class="token punctuation">(</span>dst Writer<span class="token punctuation">,</span>src Reader<span class="token punctuation">)</span> <span class="token punctuation">(</span>written <span class="token builtin">int64</span><span class="token punctuation">,</span>err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Copy函数是io包提供的</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"os"</span>
	<span class="token string">"io"</span>
	<span class="token string">"bufio"</span> 
<span class="token punctuation">)</span>

<span class="token comment">//自己编写一个函数，接收两个文件路径 srcFileName dstFileName</span>
<span class="token keyword">func</span> <span class="token function">CopyFile</span><span class="token punctuation">(</span>dstFileName <span class="token builtin">string</span><span class="token punctuation">,</span> srcFileName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>written <span class="token builtin">int64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	srcFile<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>srcFileName<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"open file err=%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> srcFile<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//通过srcfile ,获取到 Reader</span>
	reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>srcFile<span class="token punctuation">)</span>

	<span class="token comment">//打开dstFileName</span>
	dstFile<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span>dstFileName<span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_WRONLY <span class="token operator">|</span> os<span class="token punctuation">.</span>O_CREATE<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"open file err=%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>

	<span class="token comment">//通过dstFile, 获取到 Writer</span>
	writer <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>dstFile<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> dstFile<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> io<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> reader<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//将d:/flower.jpg 文件拷贝到 e:/abc.jpg</span>

	<span class="token comment">//调用CopyFile 完成文件拷贝</span>
	srcFile <span class="token operator">:=</span> <span class="token string">"d:/flower.jpg"</span>
	dstFile <span class="token operator">:=</span> <span class="token string">"e:/abc.jpg"</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">CopyFile</span><span class="token punctuation">(</span>dstFile<span class="token punctuation">,</span> srcFile<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"拷贝完成\n"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"拷贝错误 err=%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="统计英文、数字、空格和其他字符数量" tabindex="-1"><a class="header-anchor" href="#统计英文、数字、空格和其他字符数量" aria-hidden="true">#</a> 统计英文、数字、空格和其他字符数量</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"os"</span>
	<span class="token string">"io"</span>
	<span class="token string">"bufio"</span> 
<span class="token punctuation">)</span>

<span class="token comment">//定义一个结构体，用于保存统计结果</span>
<span class="token keyword">type</span> CharCount <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ChCount <span class="token builtin">int</span> <span class="token comment">// 记录英文个数</span>
	NumCount <span class="token builtin">int</span> <span class="token comment">// 记录数字的个数</span>
	SpaceCount <span class="token builtin">int</span> <span class="token comment">// 记录空格的个数</span>
	OtherCount <span class="token builtin">int</span> <span class="token comment">// 记录其它字符的个数</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//思路: 打开一个文件, 创一个Reader</span>
	<span class="token comment">//每读取一行，就去统计该行有多少个 英文、数字、空格和其他字符</span>
	<span class="token comment">//然后将结果保存到一个结构体</span>
	fileName <span class="token operator">:=</span> <span class="token string">"c/golang/hello.go"</span>
	file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"open file err=%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//定义个CharCount 实例</span>
	<span class="token keyword">var</span> count CharCount
	<span class="token comment">//创建一个Reader</span>
	reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>

	<span class="token comment">//开始循环的读取fileName的内容</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		str<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span> <span class="token comment">//读到文件末尾就退出</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//遍历 str ，进行统计</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
			
			<span class="token keyword">switch</span> <span class="token punctuation">{</span>  <span class="token comment">//无项目，相当于分支结构</span>
				<span class="token keyword">case</span> v <span class="token operator">>=</span> <span class="token char">'a'</span> <span class="token operator">&amp;&amp;</span> v <span class="token operator">&lt;=</span> <span class="token char">'z'</span><span class="token punctuation">:</span>
						<span class="token keyword">fallthrough</span>         <span class="token comment">//穿透</span>
				<span class="token keyword">case</span> v <span class="token operator">>=</span> <span class="token char">'A'</span> <span class="token operator">&amp;&amp;</span> v <span class="token operator">&lt;=</span> <span class="token char">'Z'</span><span class="token punctuation">:</span>
						count<span class="token punctuation">.</span>ChCount<span class="token operator">++</span>
				<span class="token keyword">case</span> v <span class="token operator">==</span> <span class="token char">' '</span> <span class="token operator">||</span> v <span class="token operator">==</span> <span class="token char">'\t'</span><span class="token punctuation">:</span>
						count<span class="token punctuation">.</span>SpaceCount<span class="token operator">++</span>
				<span class="token keyword">case</span> v <span class="token operator">>=</span> <span class="token char">'0'</span> <span class="token operator">&amp;&amp;</span> v <span class="token operator">&lt;=</span> <span class="token char">'9'</span><span class="token punctuation">:</span>
						count<span class="token punctuation">.</span>NumCount<span class="token operator">++</span>
				<span class="token keyword">default</span> <span class="token punctuation">:</span>
						count<span class="token punctuation">.</span>OtherCount<span class="token operator">++</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//输出统计的结果看看是否正确</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"字符的个数为=%v 数字的个数为=%v 空格的个数为=%v 其它字符个数=%v"</span><span class="token punctuation">,</span> 
		count<span class="token punctuation">.</span>ChCount<span class="token punctuation">,</span> count<span class="token punctuation">.</span>NumCount<span class="token punctuation">,</span> count<span class="token punctuation">.</span>SpaceCount<span class="token punctuation">,</span> count<span class="token punctuation">.</span>OtherCount<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go run iouit.go </span>
字符的个数为<span class="token operator">=</span><span class="token number">199</span> 数字的个数为<span class="token operator">=</span><span class="token number">18</span> 空格的个数为<span class="token operator">=</span><span class="token number">73</span> 其它字符个数<span class="token operator">=</span><span class="token number">108</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>[回到上面](# 45天学会go --第十五天   文件)</p>
<h2 id="python中的文件操作" tabindex="-1"><a class="header-anchor" href="#python中的文件操作" aria-hidden="true">#</a> python中的文件操作</h2>
<p>使用open函数，可以打开一个已经存在的文件，或者创建一个新文件</p>
<p><strong>f=open(&quot;new.py&quot;,&quot;w&quot;)</strong></p>
<p><strong>r:  以只读方式打开文件。文件的指针将会放在文件的开头。这是*<em>默认模式*</em>。</strong></p>
<p>rb: 以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。</p>
<p>r+: 打开一个文件用于读写。文件指针将会放在文件的开头。</p>
<p>rb+:以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。</p>
<p><strong>w:  打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。</strong></p>
<p>wb:  以二进制格式打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。</p>
<p>w+:  打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。</p>
<p>wb+:以二进制格式打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。</p>
<p>a:  打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。</p>
<p>ab:  以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。</p>
<p>a+:  打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。</p>
<p>ab+:以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。</p>
<p><strong>将hello word ,I am here写入到zidian.py中</strong></p>
<p><strong>f.write :写入</strong></p>
<p><strong>content=f.read(5)</strong>   <strong>读取5个字符，开始的时候定义在文件头部</strong></p>
<p><strong>content=f.read(5)</strong>   接着上一次继续读取5个</p>
<p><strong>f.close :</strong> <strong>关闭文件</strong></p>
<p>rename()完成文件的重命名</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> f<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"zz.go"</span><span class="token punctuation">,</span><span class="token string">"r"</span><span class="token punctuation">)</span>                                    

In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> r<span class="token operator">=</span>f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>                                       

In <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> i<span class="token operator">=</span><span class="token number">1</span>                                                   

In <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">for</span> temp <span class="token keyword">in</span> r<span class="token punctuation">:</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"%d:%s"</span><span class="token operator">%</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     i<span class="token operator">+=</span><span class="token number">1</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>                                                       

In <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">:</span> !vim zz<span class="token punctuation">.</span>go                                            

In <span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">:</span> f<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"a.go"</span><span class="token punctuation">,</span><span class="token string">"r"</span><span class="token punctuation">)</span>                                    

In <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">:</span> r<span class="token operator">=</span>f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>                                       

In <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">for</span> temp <span class="token keyword">in</span> r<span class="token punctuation">:</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"%d:%s"</span><span class="token operator">%</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     i<span class="token operator">+=</span><span class="token number">1</span> 
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>                                                       
<span class="token number">1</span><span class="token punctuation">:</span>package main

<span class="token number">2</span><span class="token punctuation">:</span>

<span class="token number">3</span><span class="token punctuation">:</span><span class="token keyword">import</span> <span class="token punctuation">(</span>

<span class="token number">4</span><span class="token punctuation">:</span>    <span class="token string">"fmt"</span>

<span class="token number">5</span><span class="token punctuation">:</span>    <span class="token string">"time"</span>

<span class="token number">6</span><span class="token punctuation">:</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '14.md' style='float:left'>⬆️上一节🔗</a><a href = '16.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


