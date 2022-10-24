<template><div><h1 id="http编程" tabindex="-1"><a class="header-anchor" href="#http编程" aria-hidden="true">#</a> http编程</h1>
<nav class="table-of-contents"><ul><li><router-link to="#web工作流程">web工作流程</router-link></li><li><router-link to="#http协议">HTTP协议</router-link></li><li><router-link to="#http服务端">HTTP服务端</router-link></li><li><router-link to="#http服务端-1">HTTP服务端</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="web工作流程" tabindex="-1"><a class="header-anchor" href="#web工作流程" aria-hidden="true">#</a> web工作流程</h2>
<ul>
<li>Web服务器的工作原理可以简单地归纳为
<ul>
<li>客户机通过TCP/IP协议建立到服务器的TCP连接</li>
<li>客户端向服务器发送HTTP协议请求包，请求服务器里的资源文档</li>
<li>服务器向客户机发送HTTP协议应答包，如果请求的资源包含有动态语言的内容，那么服务器会调用动态语言的解释引擎负责处理“动态内容”，并将处理得到的数据返回给客户端</li>
<li>客户机与服务器断开。由客户端解释HTML文档，在客户端屏幕上渲染图形结果</li>
</ul>
</li>
</ul>
<h2 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> HTTP协议</h2>
<ul>
<li>超文本传输协议(HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议，它详细规定了浏览器和万维网服务器之间互相通信的规则，通过因特网传送万维网文档的数据传送协议</li>
<li>HTTP协议通常承载于TCP协议之上</li>
</ul>
<h2 id="http服务端" tabindex="-1"><a class="header-anchor" href="#http服务端" aria-hidden="true">#</a> HTTP服务端</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http服务端-1" tabindex="-1"><a class="header-anchor" href="#http服务端-1" aria-hidden="true">#</a> HTTP服务端</h2>
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


