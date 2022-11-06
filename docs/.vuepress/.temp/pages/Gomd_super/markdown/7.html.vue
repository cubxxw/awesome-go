<template><div><h1 id="websocket编程-–-聊天室" tabindex="-1"><a class="header-anchor" href="#websocket编程-–-聊天室" aria-hidden="true">#</a> WebSocket编程 – 聊天室</h1>
<nav class="table-of-contents"><ul><li><router-link to="#websocket是什么">webSocket是什么</router-link></li><li><router-link to="#举个聊天室的小例子">举个聊天室的小例子</router-link></li><li><router-link to="#准备">准备</router-link></li><li><router-link to="#功能补充">功能补充</router-link><ul><li><router-link to="#server-go文件代码">server.go文件代码</router-link></li><li><router-link to="#hub-go文件代码">hub.go文件代码</router-link></li><li><router-link to="#data-go文件代码">data.go文件代码</router-link></li><li><router-link to="#connection-go文件代码">connection.go文件代码</router-link></li><li><router-link to="#local-html文件代码">local.html文件代码</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在这里我们将会实现一个简易版的 <strong>Go聊天室</strong> 。</p>
<ol>
<li>上线、下线</li>
<li>聊天，其他人和自己都可以看到聊天信息</li>
<li>查询当前聊天室用户名字</li>
<li>可以修改自己名字</li>
<li>超时踢出</li>
</ol>
<p>知识点：</p>
<ol>
<li>socket tcp 编程</li>
<li>map 结构</li>
<li>Go协程</li>
<li>select（超时退出，主动退出）</li>
</ol>
</div>
<h2 id="websocket是什么" tabindex="-1"><a class="header-anchor" href="#websocket是什么" aria-hidden="true">#</a> webSocket是什么</h2>
<ul>
<li><code v-pre>WebSocket</code> 是一种在单个 <code v-pre>TCP</code> 连接上进行全双工通信的协议</li>
<li><code v-pre>WebSocket</code> 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据</li>
<li>在 <code v-pre>WebSocket API</code>中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输</li>
<li>需要安装第三方包：
<ul>
<li><strong>cmd中</strong> ：<code v-pre>go get -u -v github.com/gorilla/websocket</code></li>
</ul>
</li>
</ul>
<h2 id="举个聊天室的小例子" tabindex="-1"><a class="header-anchor" href="#举个聊天室的小例子" aria-hidden="true">#</a> 举个聊天室的小例子</h2>
<p>在同一级目录下新建四个go文件<code v-pre>connection.go|data.go|hub.go|server.go</code></p>
<p><strong>运行：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">go</span> run server<span class="token punctuation">.</span><span class="token keyword">go</span> hub<span class="token punctuation">.</span><span class="token keyword">go</span> data<span class="token punctuation">.</span><span class="token keyword">go</span> connection<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行之后执行 <code v-pre>local.html</code> 文件</p>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<p><strong>开启 <code v-pre>mod</code> 项目：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">go</span> mod init socket<span class="token operator">-</span>web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>基础代码：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"net"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> n <span class="token builtin">int</span> <span class="token comment">//统计监听次数</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//创建一个监听器</span>
	listener<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8080"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"监听失败"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> listener<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"监听成功..."</span><span class="token punctuation">)</span>
	<span class="token comment">//循环等待客户端连接</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//监听次数</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"监听次数："</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
		n<span class="token operator">++</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"主Go程监听中..."</span><span class="token punctuation">)</span>
		<span class="token comment">//监听客户端连接</span>
		conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listener<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//Accept()会阻塞，直到有客户端连接</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"接收客户端连接失败"</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"接收客户端连接成功"</span><span class="token punctuation">)</span>

		<span class="token comment">//启动协程，处理客户端请求</span>
		<span class="token keyword">go</span> <span class="token function">process</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Path: main.go</span>
<span class="token keyword">func</span> <span class="token function">process</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//关闭连接</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"启动业务~"</span><span class="token punctuation">)</span>
	<span class="token comment">//读取客户端发送的数据</span>
	buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
	cnt<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span> <span class="token comment">//Read()会阻塞，直到有数据发送过来</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取客户端数据失败"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"服务器读取客户端数据成功"</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>cnt<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<p><img src="http://sm.nsddd.top/smimage-20221102194839667.png" alt="image-20221102194839667"></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>监听次数： <span class="token number">4</span>
主Go程监听中<span class="token punctuation">..</span>.
启动业务~
读取客户端数据失败
服务器读取客户端数据成功
GET / HTTP/1.1
name: xiongxinwei
name2: yangming
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: 2319563a-e690-406c-bafc-243fc3f32e39
Host: localhost:8080
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Type: multipart/form-data<span class="token punctuation">;</span> <span class="token assign-left variable">boundary</span><span class="token operator">=</span>--------------------------322490159781697749709458
Content-Length: <span class="token number">174</span>

----------------------------322490159781697749709458
Content-Disposition: form-data<span class="token punctuation">;</span> <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"asdfasf"</span>

asfdasgasfag
----------------------------322490159781697749709458--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Post请求![image-20221102195008771](http://sm.nsddd.top/smimage-20221102195008771.png)</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>监听次数： <span class="token number">5</span>
主Go程监听中<span class="token punctuation">..</span>.
启动业务~
接收客户端连接成功
监听次数： <span class="token number">6</span>
主Go程监听中<span class="token punctuation">..</span>.
启动业务~
读取客户端数据失败
服务器读取客户端数据成功
POST / HTTP/1.1
name: xiongxinwei
name2: yangming
User-Agent: PostmanRuntime/7.29.2
Accept: */*
Postman-Token: 6ba389f2-e4b6-4bcc-8b8a-cb4f536f3115
Host: localhost:8080
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Type: multipart/form-data<span class="token punctuation">;</span> <span class="token assign-left variable">boundary</span><span class="token operator">=</span>--------------------------749419380768530406044982
Content-Length: <span class="token number">174</span>

----------------------------749419380768530406044982
Content-Disposition: form-data<span class="token punctuation">;</span> <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"asdfasf"</span>

asfdasgasfag
----------------------------749419380768530406044982--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="功能补充" tabindex="-1"><a class="header-anchor" href="#功能补充" aria-hidden="true">#</a> 功能补充</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>我们程序有多个用户，需要一个 User 结构，包含 msg 管道</p>
<p>需要有一个进行全局广播的管道：message</p>
<p>需要有一个全局的 map， 存储所有的 user</p>
</div>
<h3 id="server-go文件代码" tabindex="-1"><a class="header-anchor" href="#server-go文件代码" aria-hidden="true">#</a> server.go文件代码</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"net/http"</span>

    <span class="token string">"github.com/gorilla/mux"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router <span class="token operator">:=</span> mux<span class="token punctuation">.</span><span class="token function">NewRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> h<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    router<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/ws"</span><span class="token punctuation">,</span> myws<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1:8080"</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hub-go文件代码" tabindex="-1"><a class="header-anchor" href="#hub-go文件代码" aria-hidden="true">#</a> hub.go文件代码</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"encoding/json"</span>

<span class="token keyword">var</span> h <span class="token operator">=</span> hub<span class="token punctuation">{</span>
    c<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token operator">*</span>connection<span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    u<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>connection<span class="token punctuation">)</span><span class="token punctuation">,</span>
    b<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    r<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>connection<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> hub <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    c <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token operator">*</span>connection<span class="token punctuation">]</span><span class="token builtin">bool</span>
    b <span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
    r <span class="token keyword">chan</span> <span class="token operator">*</span>connection
    u <span class="token keyword">chan</span> <span class="token operator">*</span>connection
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>hub<span class="token punctuation">)</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">select</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> c <span class="token operator">:=</span> <span class="token operator">&lt;-</span>h<span class="token punctuation">.</span>r<span class="token punctuation">:</span>
            h<span class="token punctuation">.</span>c<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
            c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Ip <span class="token operator">=</span> c<span class="token punctuation">.</span>ws<span class="token punctuation">.</span><span class="token function">RemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Type <span class="token operator">=</span> <span class="token string">"handshake"</span>
            c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>UserList <span class="token operator">=</span> user_list
            data_b<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            c<span class="token punctuation">.</span>sc <span class="token operator">&lt;-</span> data_b
        <span class="token keyword">case</span> c <span class="token operator">:=</span> <span class="token operator">&lt;-</span>h<span class="token punctuation">.</span>u<span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> h<span class="token punctuation">.</span>c<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
                <span class="token function">delete</span><span class="token punctuation">(</span>h<span class="token punctuation">.</span>c<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
                <span class="token function">close</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>sc<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token keyword">case</span> data <span class="token operator">:=</span> <span class="token operator">&lt;-</span>h<span class="token punctuation">.</span>b<span class="token punctuation">:</span>
            <span class="token keyword">for</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> h<span class="token punctuation">.</span>c <span class="token punctuation">{</span>
                <span class="token keyword">select</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> c<span class="token punctuation">.</span>sc <span class="token operator">&lt;-</span> data<span class="token punctuation">:</span>
                <span class="token keyword">default</span><span class="token punctuation">:</span>
                    <span class="token function">delete</span><span class="token punctuation">(</span>h<span class="token punctuation">.</span>c<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
                    <span class="token function">close</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>sc<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-go文件代码" tabindex="-1"><a class="header-anchor" href="#data-go文件代码" aria-hidden="true">#</a> data.go文件代码</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> Data <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Ip       <span class="token builtin">string</span>   <span class="token string">`json:"ip"`</span>
    User     <span class="token builtin">string</span>   <span class="token string">`json:"user"`</span>
    From     <span class="token builtin">string</span>   <span class="token string">`json:"from"`</span>
    Type     <span class="token builtin">string</span>   <span class="token string">`json:"type"`</span>
    Content  <span class="token builtin">string</span>   <span class="token string">`json:"content"`</span>
    UserList <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"user_list"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="connection-go文件代码" tabindex="-1"><a class="header-anchor" href="#connection-go文件代码" aria-hidden="true">#</a> connection.go文件代码</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"encoding/json"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"net/http"</span>

    <span class="token string">"github.com/gorilla/websocket"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> connection <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ws   <span class="token operator">*</span>websocket<span class="token punctuation">.</span>Conn
    sc   <span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
    data <span class="token operator">*</span>Data
<span class="token punctuation">}</span>

<span class="token keyword">var</span> wu <span class="token operator">=</span> <span class="token operator">&amp;</span>websocket<span class="token punctuation">.</span>Upgrader<span class="token punctuation">{</span>ReadBufferSize<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span>
    WriteBufferSize<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> CheckOrigin<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">myws</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ws<span class="token punctuation">,</span> err <span class="token operator">:=</span> wu<span class="token punctuation">.</span><span class="token function">Upgrade</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    c <span class="token operator">:=</span> <span class="token operator">&amp;</span>connection<span class="token punctuation">{</span>sc<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ws<span class="token punctuation">:</span> ws<span class="token punctuation">,</span> data<span class="token punctuation">:</span> <span class="token operator">&amp;</span>Data<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    h<span class="token punctuation">.</span>r <span class="token operator">&lt;-</span> c
    <span class="token keyword">go</span> c<span class="token punctuation">.</span><span class="token function">writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">reader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Type <span class="token operator">=</span> <span class="token string">"logout"</span>
        user_list <span class="token operator">=</span> <span class="token function">del</span><span class="token punctuation">(</span>user_list<span class="token punctuation">,</span> c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>User<span class="token punctuation">)</span>
        c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>UserList <span class="token operator">=</span> user_list
        c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Content <span class="token operator">=</span> c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>User
        data_b<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        h<span class="token punctuation">.</span>b <span class="token operator">&lt;-</span> data_b
        h<span class="token punctuation">.</span>r <span class="token operator">&lt;-</span> c
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>connection<span class="token punctuation">)</span> <span class="token function">writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> message <span class="token operator">:=</span> <span class="token keyword">range</span> c<span class="token punctuation">.</span>sc <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span>ws<span class="token punctuation">.</span><span class="token function">WriteMessage</span><span class="token punctuation">(</span>websocket<span class="token punctuation">.</span>TextMessage<span class="token punctuation">,</span> message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    c<span class="token punctuation">.</span>ws<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> user_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>connection<span class="token punctuation">)</span> <span class="token function">reader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token boolean">_</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>ws<span class="token punctuation">.</span><span class="token function">ReadMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            h<span class="token punctuation">.</span>r <span class="token operator">&lt;-</span> c
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token keyword">switch</span> c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Type <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">"login"</span><span class="token punctuation">:</span>
            c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>User <span class="token operator">=</span> c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Content
            c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>From <span class="token operator">=</span> c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>User
            user_list <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>user_list<span class="token punctuation">,</span> c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>User<span class="token punctuation">)</span>
            c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>UserList <span class="token operator">=</span> user_list
            data_b<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            h<span class="token punctuation">.</span>b <span class="token operator">&lt;-</span> data_b
        <span class="token keyword">case</span> <span class="token string">"user"</span><span class="token punctuation">:</span>
            c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Type <span class="token operator">=</span> <span class="token string">"user"</span>
            data_b<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            h<span class="token punctuation">.</span>b <span class="token operator">&lt;-</span> data_b
        <span class="token keyword">case</span> <span class="token string">"logout"</span><span class="token punctuation">:</span>
            c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Type <span class="token operator">=</span> <span class="token string">"logout"</span>
            user_list <span class="token operator">=</span> <span class="token function">del</span><span class="token punctuation">(</span>user_list<span class="token punctuation">,</span> c<span class="token punctuation">.</span>data<span class="token punctuation">.</span>User<span class="token punctuation">)</span>
            data_b<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            h<span class="token punctuation">.</span>b <span class="token operator">&lt;-</span> data_b
            h<span class="token punctuation">.</span>r <span class="token operator">&lt;-</span> c
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">"========default================"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">del</span><span class="token punctuation">(</span>slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> user <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    count <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>
    <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> slice
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> slice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> user <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> n_slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
        <span class="token keyword">if</span> slice<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> user <span class="token operator">&amp;&amp;</span> i <span class="token operator">==</span> count <span class="token punctuation">{</span>
            <span class="token keyword">return</span> slice<span class="token punctuation">[</span><span class="token punctuation">:</span>count<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> slice<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> user <span class="token punctuation">{</span>
            n_slice <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> slice<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n_slice<span class="token punctuation">)</span>
    <span class="token keyword">return</span> n_slice
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="local-html文件代码" tabindex="-1"><a class="header-anchor" href="#local-html文件代码" aria-hidden="true">#</a> local.html文件代码</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content-type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/html;charset=utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">p</span> <span class="token punctuation">{</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">padding-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span> 30px auto<span class="token punctuation">;</span><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>www.5lmh.comy演示聊天室<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span> 1px solid gray<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span><span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>当前在线:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user_num<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user_list<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg_list<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 598px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>  1px solid gray<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span><span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg_box<span class="token punctuation">"</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onkeydown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">confirm</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>发送<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> uname <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入用户名'</span><span class="token punctuation">,</span> <span class="token string">'user'</span> <span class="token operator">+</span> <span class="token function">uuid</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">"ws://127.0.0.1:8080/ws"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token string">"系统消息：建立连接成功"</span><span class="token punctuation">;</span>
        <span class="token function">listMsg</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> sender<span class="token punctuation">,</span> user_name<span class="token punctuation">,</span> name_list<span class="token punctuation">,</span> change_type<span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">'system'</span><span class="token operator">:</span>
                sender <span class="token operator">=</span> <span class="token string">'系统消息: '</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">'user'</span><span class="token operator">:</span>
                sender <span class="token operator">=</span> msg<span class="token punctuation">.</span>from <span class="token operator">+</span> <span class="token string">': '</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">'handshake'</span><span class="token operator">:</span>
                <span class="token keyword">var</span> user_info <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">'type'</span><span class="token operator">:</span> <span class="token string">'login'</span><span class="token punctuation">,</span> <span class="token string-property property">'content'</span><span class="token operator">:</span> uname<span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token function">sendMsg</span><span class="token punctuation">(</span>user_info<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">'login'</span><span class="token operator">:</span>
            <span class="token keyword">case</span> <span class="token string">'logout'</span><span class="token operator">:</span>
                user_name <span class="token operator">=</span> msg<span class="token punctuation">.</span>content<span class="token punctuation">;</span>
                name_list <span class="token operator">=</span> msg<span class="token punctuation">.</span>user_list<span class="token punctuation">;</span>
                change_type <span class="token operator">=</span> msg<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
                <span class="token function">dealUser</span><span class="token punctuation">(</span>user_name<span class="token punctuation">,</span> change_type<span class="token punctuation">,</span> name_list<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> sender <span class="token operator">+</span> msg<span class="token punctuation">.</span>content<span class="token punctuation">;</span>
        <span class="token function">listMsg</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    ws<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token string">"系统消息 : 出错了,请退出重试."</span><span class="token punctuation">;</span>
        <span class="token function">listMsg</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> key_num <span class="token operator">=</span> event<span class="token punctuation">.</span>keyCode<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">13</span> <span class="token operator">==</span> key_num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> msg_box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"msg_box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> content <span class="token operator">=</span> msg_box<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"\r\n"</span><span class="token punctuation">,</span> <span class="token string">"g"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        content <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">'content'</span><span class="token operator">:</span> content<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string-property property">'type'</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">sendMsg</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg_box<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">listMsg</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> msg_list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"msg_list"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> msg <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> data<span class="token punctuation">;</span>
        msg_list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg_list<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> msg_list<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">dealUser</span><span class="token punctuation">(</span><span class="token parameter">user_name<span class="token punctuation">,</span> type<span class="token punctuation">,</span> name_list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> user_list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"user_list"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> user_num <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"user_num"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>user_list<span class="token punctuation">.</span><span class="token function">hasChildNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            user_list<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>user_list<span class="token punctuation">.</span>firstChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> index <span class="token keyword">in</span> name_list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> user <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> name_list<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
            user_list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        user_num<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> name_list<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        user_list<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> user_list<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span>
        <span class="token keyword">var</span> change <span class="token operator">=</span> type <span class="token operator">==</span> <span class="token string">'login'</span> <span class="token operator">?</span> <span class="token string">'上线'</span> <span class="token operator">:</span> <span class="token string">'下线'</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token string">'系统消息: '</span> <span class="token operator">+</span> user_name <span class="token operator">+</span> <span class="token string">' 已'</span> <span class="token operator">+</span> change<span class="token punctuation">;</span>
        <span class="token function">listMsg</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">uuid</span><span class="token punctuation">(</span><span class="token parameter">len<span class="token punctuation">,</span> radix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> chars <span class="token operator">=</span> <span class="token string">'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> uuid <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">;</span>
        radix <span class="token operator">=</span> radix <span class="token operator">||</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> uuid<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> chars<span class="token punctuation">[</span><span class="token number">0</span> <span class="token operator">|</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> radix<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> r<span class="token punctuation">;</span>
            uuid<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> uuid<span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span> <span class="token operator">=</span> uuid<span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span> <span class="token operator">=</span> uuid<span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'-'</span><span class="token punctuation">;</span>
            uuid<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'4'</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>uuid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    r <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">|</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16</span><span class="token punctuation">;</span>
                    uuid<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> chars<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>r <span class="token operator">&amp;</span> <span class="token number">0x3</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0x8</span> <span class="token operator">:</span> r<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> uuid<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '6.md' style='float:left'>⬆️上一节🔗</a><a href = '8.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


