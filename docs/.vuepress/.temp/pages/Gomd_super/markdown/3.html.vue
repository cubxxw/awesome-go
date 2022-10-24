<template><div><h1 id="tcp编程" tabindex="-1"><a class="header-anchor" href="#tcp编程" aria-hidden="true">#</a> TCP编程</h1>
<nav class="table-of-contents"><ul><li><router-link to="#go语言实现tcp通信">Go语言实现TCP通信</router-link><ul><li><router-link to="#tcp协议">TCP协议</router-link></li><li><router-link to="#tcp服务端">TCP服务端</router-link></li><li><router-link to="#tcp客户端">TCP客户端</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="go语言实现tcp通信" tabindex="-1"><a class="header-anchor" href="#go语言实现tcp通信" aria-hidden="true">#</a> Go语言实现TCP通信</h2>
<h3 id="tcp协议" tabindex="-1"><a class="header-anchor" href="#tcp协议" aria-hidden="true">#</a> TCP协议</h3>
<p><code v-pre>TCP/IP</code> (Transmission Control Protocol/Internet Protocol) 即传输控制协议/网间协议，是一种面向连接（连接导向）的、可靠的、基于字节流的传输层（Transport layer）通信协议，因为是面向连接的协议，数据像水流一样传输，会存在黏包问题。</p>
<blockquote>
<p>tcp通信是服务端先发起的，我们先看一下服务端：</p>
</blockquote>
<h3 id="tcp服务端" tabindex="-1"><a class="header-anchor" href="#tcp服务端" aria-hidden="true">#</a> TCP服务端</h3>
<p>一个TCP服务端可以同时连接很多个客户端，例如世界各地的用户使用自己电脑上的浏览器访问淘宝网。因为Go语言中创建多个goroutine实现并发非常方便和高效，所以我们可以每建立一次链接就创建一个goroutine去处理。</p>
<p>TCP服务端程序的处理流程：</p>
<ol>
<li>
<p>监听端口</p>
</li>
<li>
<p>接收客户端请求建立链接</p>
</li>
<li>
<p>创建goroutine处理链接。</p>
</li>
</ol>
<p>我们使用Go语言的net包实现的TCP服务端代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// tcp/server/main.go</span>

<span class="token comment">// TCP server端</span>

<span class="token comment">// 处理函数</span>
<span class="token keyword">func</span> <span class="token function">process</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 关闭连接</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
        <span class="token keyword">var</span> buf <span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 读取数据</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"read from client failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        recvStr <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"收到client端发来的数据："</span><span class="token punctuation">,</span> recvStr<span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>recvStr<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 发送数据</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    listen<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">"127.0.0.1:20000"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"listen failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listen<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 建立连接</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"accept failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">go</span> <span class="token function">process</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span> <span class="token comment">// 启动一个goroutine处理连接</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的代码保存之后编译成<code v-pre>server</code>或<code v-pre>server.exe</code>可执行文件。</p>
<h3 id="tcp客户端" tabindex="-1"><a class="header-anchor" href="#tcp客户端" aria-hidden="true">#</a> TCP客户端</h3>
<p>一个TCP客户端进行TCP通信的流程如下：</p>
<ol>
<li>建立与服务端的链接</li>
<li>进行数据收发</li>
<li>关闭链接</li>
</ol>
<p>使用Go语言的net包实现的TCP客户端代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// tcp/client/main.go</span>

<span class="token comment">// 客户端</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">"127.0.0.1:20000"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err :"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关闭连接</span>
    inputReader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        input<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> inputReader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">)</span> <span class="token comment">// 读取用户输入</span>
        inputInfo <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"\r\n"</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span>inputInfo<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"Q"</span> <span class="token punctuation">{</span> <span class="token comment">// 如果输入q就退出</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>inputInfo<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 发送数据</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        buf <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">512</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"recv failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的代码编译成<code v-pre>client</code>或<code v-pre>client.exe</code>可执行文件，先启动<code v-pre>server</code>端再启动<code v-pre>client</code>端，在<code v-pre>client</code>端输入任意内容回车之后就能够在<code v-pre>server</code>端看到<code v-pre>client</code>端发送的数据，从而实现TCP通信。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '2.md' style='float:left'>⬆️上一节🔗</a><a href = '4.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


