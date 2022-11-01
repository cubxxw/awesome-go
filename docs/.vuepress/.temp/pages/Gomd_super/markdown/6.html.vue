<template><div><h1 id="http编程" tabindex="-1"><a class="header-anchor" href="#http编程" aria-hidden="true">#</a> http编程</h1>
<nav class="table-of-contents"><ul><li><router-link to="#postman">postman</router-link></li><li><router-link to="#web工作流程">web工作流程</router-link></li><li><router-link to="#http-协议">HTTP 协议</router-link></li><li><router-link to="#http相应代码">HTTP相应代码</router-link></li><li><router-link to="#http-服务端测试">HTTP 服务端测试</router-link></li><li><router-link to="#http-服务端">HTTP 服务端</router-link></li><li><router-link to="#http-服务端-1">HTTP 服务端</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="postman" tabindex="-1"><a class="header-anchor" href="#postman" aria-hidden="true">#</a> postman</h2>
<p>我们使用 <code v-pre>postman</code> 工具继续向服务端发送数据，只不过这个发送的是 <code v-pre>Http</code> 的 <code v-pre>Get</code> 请求：
<img src="http://sm.nsddd.top/smimage-20221101153017273.png" alt="image-20221101153017273"></p>
<p>客户端接收数据：</p>
<p><img src="http://sm.nsddd.top/smimage-20221101153104058.png" alt="image-20221101153104058"></p>
<h2 id="web工作流程" tabindex="-1"><a class="header-anchor" href="#web工作流程" aria-hidden="true">#</a> web工作流程</h2>
<p>Web服务器的工作原理可以简单地归纳为</p>
<ul>
<li>客户机通过 <code v-pre>TCP/IP</code> 协议建立到服务器的TCP连接</li>
<li>客户端向服务器发送 <code v-pre>HTTP</code> 协议请求包，请求服务器里的资源文档</li>
<li>服务器向客户机发送 <code v-pre>HTTP</code> 协议应答包，如果请求的资源包含有动态语言的内容，那么服务器会调用动态语言的解释引擎负责处理 <strong>动态内容</strong>，并将处理得到的数据返回给客户端</li>
<li>客户机与服务器断开。由客户端解释 <code v-pre>HTML</code> 文档，在客户端屏幕上渲染图形结果</li>
</ul>
<h2 id="http-协议" tabindex="-1"><a class="header-anchor" href="#http-协议" aria-hidden="true">#</a> HTTP 协议</h2>
<ul>
<li>超文本传输协议( <code v-pre>HTTP</code> ，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议，它详细规定了浏览器和万维网服务器之间互相通信的规则，通过因特网传送万维网文档的数据传送协议</li>
<li><code v-pre>HTTP</code> 协议通常承载于TCP协议之上</li>
</ul>
<h2 id="http相应代码" tabindex="-1"><a class="header-anchor" href="#http相应代码" aria-hidden="true">#</a> HTTP相应代码</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//http</span>
	client <span class="token operator">:=</span> http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//client{}是一个结构体，用于发送http请求</span>

	<span class="token comment">// 发送get请求</span>
	resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"http://www.baidu.com"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token function">println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">//panic()函数用于抛出异常</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关闭请求体</span>

	<span class="token comment">// 请求头</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"请求头"</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>Header<span class="token punctuation">)</span>

	ct <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">)</span>
	data <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"Date"</span><span class="token punctuation">)</span>
	server <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"Server"</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Content-Type: %s\n  Date: %s\n  Server: %s\n"</span><span class="token punctuation">,</span> ct<span class="token punctuation">,</span> data<span class="token punctuation">,</span> server<span class="token punctuation">)</span>

	<span class="token comment">// 获取状态码</span>
	status <span class="token operator">:=</span> resp<span class="token punctuation">.</span>StatusCode
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"状态码"</span><span class="token punctuation">,</span> status<span class="token punctuation">)</span>

	<span class="token comment">// 获取响应体</span>
	body <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Body
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"响应体"</span><span class="token punctuation">,</span> body<span class="token punctuation">)</span>

	<span class="token comment">// 获取Url</span>
	url <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>URL
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>

	<span class="token comment">// 拿到请求体</span>
	buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span>
	n<span class="token punctuation">,</span> err <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>🚀 编译结果如下：</strong></p>
<p><img src="http://sm.nsddd.top/smimage-20221101161420332.png" alt="image-20221101161420332"></p>
<h2 id="http-服务端测试" tabindex="-1"><a class="header-anchor" href="#http-服务端测试" aria-hidden="true">#</a> HTTP 服务端测试</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>前面我们写的都是请求，接下来我们可以实现一个 <code v-pre>server</code> ，别人来请求，我们来响应~</p>
</div>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">/*
An elaborate, high quality docstring for the above function:

Args:
	param1: the first parameter.
	param2: the second parameter.

Returns:
	the return value.

Raises:
	KeyError: raises an exception.
*/</span>
<span class="token comment">// http-server</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//注册路由</span>
	<span class="token comment">//xxxx/user ===> func1</span>
	<span class="token comment">//xxxx/name ===> func2</span>
	<span class="token comment">//xxxx/id ===> func3</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>writer http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">/*
			+ writer: 用于写入响应数据,通过writer.Write()方法写入响应数据返回给客户端
			+ request: 用于获取请求数据,通过request.Method获取请求方式,通过request.URL获取请求路径
		*/</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> <span class="token string">"user"</span><span class="token punctuation">)</span> <span class="token comment">//表示向客户端返回数据user</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/name"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>writer http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/id"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>writer http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//启动服务</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"服务启动成功..."</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1:8080"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"http server start failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<p><img src="http://sm.nsddd.top/smimage-20221101163255198.png" alt="image-20221101163255198"></p>
<h2 id="http-服务端" tabindex="-1"><a class="header-anchor" href="#http-服务端" aria-hidden="true">#</a> HTTP 服务端</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//http://127.0.0.1:8000/go</span>
    <span class="token comment">// 单独写回调函数</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/go"</span><span class="token punctuation">,</span> myHandler<span class="token punctuation">)</span>
    <span class="token comment">//http.HandleFunc("/ungo",myHandler2 )</span>
    <span class="token comment">// addr：监听的地址</span>
    <span class="token comment">// handler：回调函数</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1:8000"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// handler函数</span>
<span class="token keyword">func</span> <span class="token function">myHandler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>RemoteAddr<span class="token punctuation">,</span> <span class="token string">"连接成功"</span><span class="token punctuation">)</span>
    <span class="token comment">// 请求方式：GET POST DELETE PUT UPDATE</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"method:"</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Method<span class="token punctuation">)</span>
    <span class="token comment">// /go</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"url:"</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"header:"</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Header<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"body:"</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token comment">// 回复</span>
    w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"www.5lmh.com"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http-服务端-1" tabindex="-1"><a class="header-anchor" href="#http-服务端-1" aria-hidden="true">#</a> HTTP 服务端</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io"</span>
    <span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//resp, _ := http.Get("http://www.baidu.com")</span>
    <span class="token comment">//fmt.Println(resp)</span>
    resp<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"http://127.0.0.1:8000/go"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 200 OK</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Status<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Header<span class="token punctuation">)</span>

    buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// 接收服务端信息</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取完毕"</span><span class="token punctuation">)</span>
            res <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '5.md' style='float:left'>⬆️上一节🔗</a><a href = '7.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


