<template><div><h1 id="udp编程" tabindex="-1"><a class="header-anchor" href="#udp编程" aria-hidden="true">#</a> UDP编程</h1>
<nav class="table-of-contents"><ul><li><router-link to="#go语言实现udp通信">Go语言实现UDP通信</router-link><ul><li><router-link to="#udp协议">UDP协议</router-link></li><li><router-link to="#udp服务端">UDP服务端</router-link></li><li><router-link to="#udp客户端">UDP客户端</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="go语言实现udp通信" tabindex="-1"><a class="header-anchor" href="#go语言实现udp通信" aria-hidden="true">#</a> Go语言实现UDP通信</h2>
<h3 id="udp协议" tabindex="-1"><a class="header-anchor" href="#udp协议" aria-hidden="true">#</a> UDP协议</h3>
<p><code v-pre>UDP</code>协议（User Datagram Protocol）中文名称是用户数据报协议，是OSI（Open System Interconnection，开放式系统互联）参考模型中一种无连接的传输层协议，不需要建立连接就能直接进行数据发送和接收，属于不可靠的、没有时序的通信，但是UDP协议的实时性比较好，通常用于视频直播相关领域。</p>
<h3 id="udp服务端" tabindex="-1"><a class="header-anchor" href="#udp服务端" aria-hidden="true">#</a> UDP服务端</h3>
<p>使用<code v-pre>Go</code>语言的<code v-pre>net</code>包实现的<code v-pre>UDP</code>服务端代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// UDP/server/main.go</span>

<span class="token comment">// UDP server端</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    listen<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ListenUDP</span><span class="token punctuation">(</span><span class="token string">"udp"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>net<span class="token punctuation">.</span>UDPAddr<span class="token punctuation">{</span>
        IP<span class="token punctuation">:</span>   net<span class="token punctuation">.</span><span class="token function">IPv4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Port<span class="token punctuation">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"listen failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> listen<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
        n<span class="token punctuation">,</span> addr<span class="token punctuation">,</span> err <span class="token operator">:=</span> listen<span class="token punctuation">.</span><span class="token function">ReadFromUDP</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 接收数据</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"read udp failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"data:%v addr:%v count:%v\n"</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addr<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
        <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> listen<span class="token punctuation">.</span><span class="token function">WriteToUDP</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span> <span class="token comment">// 发送数据</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"write to udp failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="udp客户端" tabindex="-1"><a class="header-anchor" href="#udp客户端" aria-hidden="true">#</a> UDP客户端</h3>
<p>使用Go语言的net包实现的UDP客户端代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// UDP 客户端</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    socket<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">DialUDP</span><span class="token punctuation">(</span><span class="token string">"udp"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>net<span class="token punctuation">.</span>UDPAddr<span class="token punctuation">{</span>
        IP<span class="token punctuation">:</span>   net<span class="token punctuation">.</span><span class="token function">IPv4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Port<span class="token punctuation">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"连接服务端失败，err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> socket<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    sendData <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"Hello server"</span><span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>sendData<span class="token punctuation">)</span> <span class="token comment">// 发送数据</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"发送数据失败，err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">4096</span><span class="token punctuation">)</span>
    n<span class="token punctuation">,</span> remoteAddr<span class="token punctuation">,</span> err <span class="token operator">:=</span> socket<span class="token punctuation">.</span><span class="token function">ReadFromUDP</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// 接收数据</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"接收数据失败，err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"recv:%v addr:%v count:%v\n"</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> remoteAddr<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '3.md' style='float:left'>⬆️上一节🔗</a><a href = '5.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


