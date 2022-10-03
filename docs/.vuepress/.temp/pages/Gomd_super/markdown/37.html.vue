<template><div><h1 id="_1-简单的分布式server" tabindex="-1"><a class="header-anchor" href="#_1-简单的分布式server" aria-hidden="true">#</a> 1. 简单的分布式server</h1>
<h3 id="_1-1-1-简单的分布式server" tabindex="-1"><a class="header-anchor" href="#_1-1-1-简单的分布式server" aria-hidden="true">#</a> 1.1.1. 简单的分布式server</h3>
<p>目前分布式系统已经很流行了，一些开源框架也被广泛应用，如dubbo、Motan等。对于一个分布式服务，最基本的一项功能就是服务的注册和发现，而利用zk的EPHEMERAL节点则可以很方便的实现该功能。EPHEMERAL节点正如其名，是临时性的，其生命周期是和客户端会话绑定的，当会话连接断开时，节点也会被删除。下边我们就来实现一个简单的分布式server：</p>
<h4 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server：</h4>
<p>服务启动时，创建zk连接，并在go_servers节点下创建一个新节点，节点名为&quot;ip:port&quot;，完成服务注册 服务结束时，由于连接断开，创建的节点会被删除，这样client就不会连到该节点</p>
<h4 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> client：</h4>
<p>先从zk获取go_servers节点下所有子节点，这样就拿到了所有注册的server 从server列表中选中一个节点（这里只是随机选取，实际服务一般会提供多种策略），创建连接进行通信 这里为了演示，我们每次client连接server，获取server发送的时间后就断开。主要代码如下：</p>
<p>server.go</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"net"</span>
    <span class="token string">"os"</span>
    <span class="token string">"time"</span>

    <span class="token string">"github.com/samuel/go-zookeeper/zk"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">starServer</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1:8897"</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">starServer</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1:8898"</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">starServer</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1:8899"</span><span class="token punctuation">)</span>

    a <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;-</span>a
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">checkError</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">starServer</span><span class="token punctuation">(</span>port <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tcpAddr<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ResolveTCPAddr</span><span class="token punctuation">(</span><span class="token string">"tcp4"</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>tcpAddr<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    listener<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ListenTCP</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> tcpAddr<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    <span class="token comment">//注册zk节点q</span>
    <span class="token comment">// 链接zk</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GetConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">" connect zk error: %s "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// zk节点注册</span>
    err <span class="token operator">=</span> <span class="token function">RegistServer</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> port<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">" regist node error: %s "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listener<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">"Error: %s"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">go</span> <span class="token function">handleCient</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> port<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"aaaaaa"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handleCient</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span> port <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    daytime <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>port <span class="token operator">+</span> <span class="token string">": "</span> <span class="token operator">+</span> daytime<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">GetConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    zkList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"localhost:2181"</span><span class="token punctuation">}</span>
    conn<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> zk<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>zkList<span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">RegistServer</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span> host <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"/go_servers/"</span><span class="token operator">+</span>host<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> zk<span class="token punctuation">.</span>FlagEphemeral<span class="token punctuation">,</span> zk<span class="token punctuation">.</span><span class="token function">WorldACL</span><span class="token punctuation">(</span>zk<span class="token punctuation">.</span>PermAll<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetServerList</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">(</span>list <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Children</span><span class="token punctuation">(</span><span class="token string">"/go_servers"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-client-go" tabindex="-1"><a class="header-anchor" href="#_1-1-2-client-go" aria-hidden="true">#</a> 1.1.2. client.go</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"errors"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io/ioutil"</span>
    <span class="token string">"math/rand"</span>
    <span class="token string">"net"</span>
    <span class="token string">"time"</span>

    <span class="token string">"github.com/samuel/go-zookeeper/zk"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">checkError</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">startClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">startClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// service := "127.0.0.1:8899"</span>
    <span class="token comment">//获取地址</span>
    serverHost<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">getServerHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"get server host fail: %s \n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"connect host: "</span> <span class="token operator">+</span> serverHost<span class="token punctuation">)</span>
    tcpAddr<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ResolveTCPAddr</span><span class="token punctuation">(</span><span class="token string">"tcp4"</span><span class="token punctuation">,</span> serverHost<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">DialTCP</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> tcpAddr<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"timestamp"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    result<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getServerHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>host <span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GetConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">" connect zk error: %s \n "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serverList<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GetServerList</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">" get server list error: %s \n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    count <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>serverList<span class="token punctuation">)</span>
    <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        err <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"server list is empty \n"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//随机选中一个返回</span>
    r <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">NewSource</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    host <span class="token operator">=</span> serverList<span class="token punctuation">[</span>r<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">GetConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    zkList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"localhost:2181"</span><span class="token punctuation">}</span>
    conn<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> zk<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>zkList<span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">GetServerList</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">(</span>list <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Children</span><span class="token punctuation">(</span><span class="token string">"/go_servers"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先启动server，可以看到有三个节点注册到zk：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    127.0.0.1:8897
    127.0.0.1:8899
    127.0.0.1:8898
    2018/08/27 14:04:58 Connected to 127.0.0.1:2181
    2018/08/27 14:04:58 Connected to 127.0.0.1:2181
    2018/08/27 14:04:58 Connected to 127.0.0.1:2181
    2018/08/27 14:04:58 Authenticated: id=100619932030205976, timeout=10000
    2018/08/27 14:04:58 Re-submitting `0` credentials after reconnect
    2018/08/27 14:04:58 Authenticated: id=100619932030205977, timeout=10000
    2018/08/27 14:04:58 Re-submitting `0` credentials after reconnect
    2018/08/27 14:04:58 Authenticated: id=100619932030205978, timeout=10000
    2018/08/27 14:04:58 Re-submitting `0` credentials after reconnect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动client，可以看到每次client都会随机连接到一个节点进行通信：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    2018/08/27 14:05:21 Connected to 127.0.0.1:2181
    2018/08/27 14:05:21 Authenticated: id=100619932030205979, timeout=10000
    2018/08/27 14:05:21 Re-submitting `0` credentials after reconnect
    2018/08/27 14:05:21 Recv loop terminated: err=EOF
    connect host: 127.0.0.1:8899
    2018/08/27 14:05:21 Send loop terminated: err=&lt;nil>
    read tcp 127.0.0.1:54062->127.0.0.1:8899: read: connection reset by peer
    127.0.0.1:8899: 2018-08-27 14:05:21.291641 +0800 CST m=+22.480149656
    2018/08/27 14:05:22 Connected to [::1]:2181
    2018/08/27 14:05:22 Authenticated: id=100619932030205980, timeout=10000
    2018/08/27 14:05:22 Re-submitting `0` credentials after reconnect
    2018/08/27 14:05:22 Recv loop terminated: err=EOF
    2018/08/27 14:05:22 Send loop terminated: err=&lt;nil>
    connect host: 127.0.0.1:8897
    read tcp 127.0.0.1:54064->127.0.0.1:8897: read: connection reset by peer
    127.0.0.1:8897: 2018-08-27 14:05:22.302322 +0800 CST m=+23.490801385
    2018/08/27 14:05:23 Connected to 127.0.0.1:2181
    2018/08/27 14:05:23 Authenticated: id=100619932030205981, timeout=10000
    2018/08/27 14:05:23 Re-submitting `0` credentials after reconnect
    2018/08/27 14:05:23 Recv loop terminated: err=EOF
    2018/08/27 14:05:23 Send loop terminated: err=&lt;nil>
    connect host: 127.0.0.1:8897
    read tcp 127.0.0.1:54070->127.0.0.1:8897: read: connection reset by peer
    127.0.0.1:8897: 2018-08-27 14:05:23.312873 +0800 CST m=+24.501324228
    2018/08/27 14:05:24 Connected to 127.0.0.1:2181
    2018/08/27 14:05:24 Authenticated: id=100619932030205982, timeout=10000
    2018/08/27 14:05:24 Re-submitting `0` credentials after reconnect
    2018/08/27 14:05:24 Recv loop terminated: err=EOF
    connect host: 127.0.0.1:8899
    2018/08/27 14:05:24 Send loop terminated: err=&lt;nil>
    read tcp 127.0.0.1:54072->127.0.0.1:8899: read: connection reset by peer
    127.0.0.1:8899: 2018-08-27 14:05:24.323668 +0800 CST m=+25.512090155
    2018/08/27 14:05:25 Connected to 127.0.0.1:2181
    2018/08/27 14:05:25 Authenticated: id=100619932030205983, timeout=10000
    2018/08/27 14:05:25 Re-submitting `0` credentials after reconnect
    2018/08/27 14:05:25 Recv loop terminated: err=EOF
    2018/08/27 14:05:25 Send loop terminated: err=&lt;nil>
    connect host: 127.0.0.1:8897
    read tcp 127.0.0.1:54074->127.0.0.1:8897: read: connection reset by peer
    127.0.0.1:8897: 2018-08-27 14:05:25.330257 +0800 CST m=+26.518650566
    2018/08/27 14:05:26 Connected to [::1]:2181
    2018/08/27 14:05:26 Authenticated: id=100619932030205984, timeout=10000
    2018/08/27 14:05:26 Re-submitting `0` credentials after reconnect
    2018/08/27 14:05:26 Recv loop terminated: err=EOF
    2018/08/27 14:05:26 Send loop terminated: err=&lt;nil>
    connect host: 127.0.0.1:8897
    read tcp 127.0.0.1:54080->127.0.0.1:8897: read: connection reset by peer
    127.0.0.1:8897: 2018-08-27 14:05:26.357251 +0800 CST m=+27.545614616
    2018/08/27 14:05:27 Connected to 127.0.0.1:2181
    2018/08/27 14:05:27 Authenticated: id=100619932030205985, timeout=10000
    2018/08/27 14:05:27 Re-submitting `0` credentials after reconnect
    connect host: 127.0.0.1:8899
    2018/08/27 14:05:27 Recv loop terminated: err=EOF
    2018/08/27 14:05:27 Send loop terminated: err=&lt;nil>
    read tcp 127.0.0.1:54082->127.0.0.1:8899: read: connection reset by peer
    127.0.0.1:8899: 2018-08-27 14:05:27.369096 +0800 CST m=+28.557430764
    2018/08/27 14:05:28 Connected to [::1]:2181
    2018/08/27 14:05:28 Authenticated: id=100619932030205986, timeout=10000
    2018/08/27 14:05:28 Re-submitting `0` credentials after reconnect
    2018/08/27 14:05:28 Recv loop terminated: err=EOF
    2018/08/27 14:05:28 Send loop terminated: err=&lt;nil>
    connect host: 127.0.0.1:8898
    read tcp 127.0.0.1:54084->127.0.0.1:8898: read: connection reset by peer
    127.0.0.1:8898: 2018-08-27 14:05:28.380455 +0800 CST m=+29.568760988
    ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，我们的分布式server就实现了</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '36.md' style='float:left'>⬆️上一节🔗</a><a href = '38.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


