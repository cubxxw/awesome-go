<template><div><h1 id="tcp网络编程" tabindex="-1"><a class="header-anchor" href="#tcp网络编程" aria-hidden="true">#</a> TCP网络编程</h1>
<nav class="table-of-contents"><ul><li><router-link to="#网络编程">网络编程</router-link></li><li><router-link to="#端口-port">端口（port)</router-link></li><li><router-link to="#处理流程">处理流程</router-link></li><li><router-link to="#net">net</router-link></li><li><router-link to="#net-parseip">net.ParseIP()</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://golang.org/#" target="_blank" rel="noopener noreferrer">https://golang.org/#<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<hr>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://cubxxw.com" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程" aria-hidden="true">#</a> 网络编程</h2>
<ol>
<li><strong>TCP socket编程：目前网络编程的主流，底层使用TCP/IP协议（ipv4/ipv6)的，比如说qq</strong></li>
<li><strong>b/s结构的http编程：http的底层也是用tcp socket实现的（web开发）</strong></li>
</ol>
<blockquote>
<p>以后做服务器开发，推荐自顶向下</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ipv4：四个字节表示的地址      32位
ipv6：十六位字节表示的地址		128位
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="端口-port" tabindex="-1"><a class="header-anchor" href="#端口-port" aria-hidden="true">#</a> 端口（port)</h2>
<p><strong>指的是TCP/IP协议中的端口，是逻辑意义上的端口</strong></p>
<p><strong>服务程序必须要监听一个端口</strong></p>
<blockquote>
<p>我们在做服务器的时候应该尽可能少开放端口，否则可能会有危险</p>
</blockquote>
<p><strong>一个端口只能被一个程序监听</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>netstat -an :查看本机有哪些端口在监听
netstat -anb:查看监听端口的pid，结合任务管理器关闭不安全端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理流程" tabindex="-1"><a class="header-anchor" href="#处理流程" aria-hidden="true">#</a> 处理流程</h2>
<p><strong>服务端：</strong></p>
<ol>
<li>监听端口</li>
<li>接收tcp链接，建立和客户端链接</li>
<li>创建goroutine,处理该连接的请求（<em>客户端通过链接发送请求包</em>）</li>
</ol>
<p><strong>客户端：</strong></p>
<ol>
<li>建立和服务端链接</li>
<li>发送请求数据，接收服务端返回的数据</li>
<li>关闭连接</li>
</ol>
<p><strong>在做网络中，我们最常用的包net</strong></p>
<h2 id="net" tabindex="-1"><a class="header-anchor" href="#net" aria-hidden="true">#</a> net</h2>
<p><strong>服务端</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"net"</span> <span class="token comment">//做网络socket开发时,net包含有我们需要所有的方法和函数</span>
	<span class="token boolean">_</span><span class="token string">"io"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">process</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//这里我们循环的接收客户端发送的数据</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//关闭conn</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//创建一个新的切片</span>
		buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
		<span class="token comment">//conn.Read(buf)</span>
		<span class="token comment">//1. 等待客户端通过conn发送信息</span>
		<span class="token comment">//2. 如果客户端没有wrtie[发送]，那么协程就阻塞在这里</span>
		<span class="token comment">//fmt.Printf("服务器在等待客户端%s 发送信息\n", conn.RemoteAddr().String())</span>
		n <span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span> <span class="token comment">//从conn读取</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"客户端退出 err=%v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">return</span> <span class="token comment">//!!!</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//3. 显示客户端发送的内容到服务器的终端</span>
		fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"服务器开始监听...."</span><span class="token punctuation">)</span>
	<span class="token comment">//net.Listen("tcp", "0.0.0.0:8888")</span>
	<span class="token comment">//1. tcp 表示使用网络协议是tcp</span>
	<span class="token comment">//2. 0.0.0.0:8888 表示在本地监听 8888端口,支持ipv4和ipv6</span>
	listen<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">"0.0.0.0:8888"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"listen err="</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> listen<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//延时关闭listen</span>

	<span class="token comment">//循环等待客户端来链接我</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//等待客户端链接</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"等待客户端来链接...."</span><span class="token punctuation">)</span>
		conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listen<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Accept() err="</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Accept() suc con=%v 客户端ip=%v\n"</span><span class="token punctuation">,</span> conn<span class="token punctuation">,</span> conn<span class="token punctuation">.</span><span class="token function">RemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//这里准备其一个协程，为客户端服务</span>
		<span class="token keyword">go</span> <span class="token function">process</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//fmt.Printf("listen suc=%v\n", listen)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>客户端</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"net"</span>
	<span class="token string">"bufio"</span>
	<span class="token string">"os"</span>
	<span class="token string">"strings"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">"192.168.20.253:8888"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"client dial err="</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span> 
	<span class="token punctuation">}</span>
	<span class="token comment">//功能一：客户端可以发送单行数据，然后就退出</span>
	reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span> <span class="token comment">//os.Stdin 代表标准输入[终端]</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>

		<span class="token comment">//从终端读取一行用户输入，并准备发送给服务器</span>
		line<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"readString err="</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//如果用户输入的是 exit就退出</span>
		line <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>line<span class="token punctuation">,</span> <span class="token string">" \r\n"</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> line <span class="token operator">==</span> <span class="token string">"exit"</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"客户端退出.."</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//再将line 发送给 服务器</span>
		<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>line <span class="token operator">+</span> <span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"conn.Write err="</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>	
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>net.ResolveIPAddr()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>根据域名查找IP地址</strong></p>
<p>不得不感叹Go为开发者考虑良多，godoc这个工具真的很方便！先看下源码。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>$ godoc <span class="token operator">-</span>src net<span class="token punctuation">.</span>ResolveIPAddr
<span class="token keyword">func</span> <span class="token function">ResolveIPAddr</span><span class="token punctuation">(</span>net<span class="token punctuation">,</span> addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>IPAddr<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> net <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">{</span>
        net <span class="token operator">=</span> <span class="token string">"ip"</span>
    <span class="token punctuation">}</span>
    afnet<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">parseNetwork</span><span class="token punctuation">(</span>net<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">switch</span> afnet <span class="token punctuation">{</span>          <span class="token comment">//检测</span>
    <span class="token keyword">case</span> <span class="token string">"ip"</span><span class="token punctuation">,</span> <span class="token string">"ip4"</span><span class="token punctuation">,</span> <span class="token string">"ip6"</span><span class="token punctuation">:</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token function">UnknownNetworkError</span><span class="token punctuation">(</span>net<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    addrs<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">internetAddrList</span><span class="token punctuation">(</span>afnet<span class="token punctuation">,</span> addr<span class="token punctuation">,</span> noDeadline<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> addrs<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span>isIPv4<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>IPAddr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们又从源码中学习了一招：<code v-pre>case &quot;ip&quot;, &quot;ip4&quot;, &quot;ip6&quot;</code>。switch的一个case直接检测多个值的方法，如果不匹配则执行default中的代码。</p>
<p>可以看到，net和addr形参都接受string类型，而返回<strong>IPAddr</strong>的指针类型，和error类型的值。</p>
<p>来使用一下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"net"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    addr<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ResolveIPAddr</span><span class="token punctuation">(</span><span class="token string">"ip"</span><span class="token punctuation">,</span> <span class="token string">"www.baidu.com"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>addr<span class="token punctuation">.</span>IP<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：
<img src="http://img.blog.csdn.net/20160330140849611" alt="这里写图片描述"></p>
<p>注意看ResolveIPAddr的源码，如果你传给net的参数不是<code v-pre>&quot;ip&quot;, &quot;ip4&quot;, &quot;ip6&quot;</code>其中的一个，那么err就不会是nil，而是<code v-pre>UnknownNetworkError(net)</code>，错误的输出信息会是这样的：
<code v-pre>unknown network tcp</code>。</p>
<h2 id="net-parseip" tabindex="-1"><a class="header-anchor" href="#net-parseip" aria-hidden="true">#</a> net.ParseIP()</h2>
<p><strong>检查IP地址格式是否有效</strong></p>
<p>依照惯例，我们来看一下源码，<code v-pre>$ godoc -src net ParseIP</code>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseIP</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> IP <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token char">'.'</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token function">parseIPv4</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token char">':'</span><span class="token punctuation">:</span>
            ip<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">parseIPv6</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> ip
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IPv4用<code v-pre>.</code>号隔开，IPv6用<code v-pre>：</code>号隔开，所以这个函数的内部又进行了判断其是IPv4还是IPv6。</p>
<p>注意：你不要手动去调用<code v-pre>net.parseIPv4</code>或者<code v-pre>net.parseIPv6</code>，会报如下错误：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cannot refer to unexported name net.parseIPV4
undefined: net.parseIPV4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为Go利用首字母的大小写来限制包外是否可访问，小写的函数或变量在包外无法访问到，就如同Java的<code v-pre>public，private</code>修饰符。</p>
<p>查看<code v-pre>parseIPv4</code>的源码又发现：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">parseIPv4</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> IP <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">return</span> <span class="token function">IPv4</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再追溯到<code v-pre>IPv4上</code></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">IPv4</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d <span class="token builtin">byte</span><span class="token punctuation">)</span> IP <span class="token punctuation">{</span>
    p <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span>IP<span class="token punctuation">,</span> IPv6len<span class="token punctuation">)</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> v4InV6Prefix<span class="token punctuation">)</span>
    p<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span> <span class="token operator">=</span> a
    p<span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span> <span class="token operator">=</span> b
    p<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span> <span class="token operator">=</span> c
    p<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span> <span class="token operator">=</span> d
    <span class="token keyword">return</span> p
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现这些函数都返回了<code v-pre>IP</code>对象，我们来看一下IP对象的定义：
<code v-pre>type IP []byte</code>
其实就是一个自定义的数组切片类型。</p>
<p><code v-pre>IPv4</code>内部用make初始化了一个数组切片，并且指定了元素个数为<code v-pre>IPv6len</code>。<code v-pre>IPv6len</code>被定义为常量：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
    IPv6len <span class="token operator">=</span> <span class="token number">16</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后进行将<code v-pre>v4InV6Prefix</code>复制到到数组切片<code v-pre>p</code>中，<code v-pre>copy</code>的用法请自行搜索（注意copy的行为和常人的理解不同）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> v4InV6Prefix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0xff</span><span class="token punctuation">,</span> <span class="token number">0xff</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至于储存IPv4的数组切片为什么要分配16个元素的大小，又复制给最后四个索引，可以看<code v-pre>type IP []byte</code>的注释：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// An IP is a single IP address, a slice of bytes.</span>
<span class="token comment">// Functions in this package accept either 4-byte (IPv4)</span>
<span class="token comment">// or 16-byte (IPv6) slices as input.</span>
<span class="token comment">//</span>
<span class="token comment">// Note that in this documentation, referring to an</span>
<span class="token comment">// IP address as an IPv4 address or an IPv6 address</span>
<span class="token comment">// is a semantic property of the address, not just the</span>
<span class="token comment">// length of the byte slice: a 16-byte slice can still</span>
<span class="token comment">// be an IPv4 address.</span>
<span class="token keyword">type</span> IP <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这说了，一个<code v-pre>16-byte</code>大小的数组可以仍然作为IPv4地址。创建数组切片<code v-pre>slice1 := make([]int, 5)</code>其初始值都为<strong>0</strong>。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '19.md' style='float:left'>⬆️上一节🔗</a><a href = '21.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


