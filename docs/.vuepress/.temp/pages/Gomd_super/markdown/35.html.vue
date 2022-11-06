<template><div><h1 id="_1-操作etcd" tabindex="-1"><a class="header-anchor" href="#_1-操作etcd" aria-hidden="true">#</a> 1. 操作ETCD</h1>
<p>这里使用官方的<code v-pre>etcd/clientv3</code>包来连接etcd并进行相关操作。</p>
<h3 id="_1-1-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-1-安装" aria-hidden="true">#</a> 1.1.1. 安装</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    go get go.etcd.io/etcd/clientv3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-2-put和get操作" tabindex="-1"><a class="header-anchor" href="#_1-1-2-put和get操作" aria-hidden="true">#</a> 1.1.2. put和get操作</h3>
<p>put命令用来设置键值对数据，get命令用来根据key获取值。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"context"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>

    <span class="token string">"go.etcd.io/etcd/clientv3"</span>
<span class="token punctuation">)</span>

<span class="token comment">// etcd client put/get demo</span>
<span class="token comment">// use etcd/clientv3</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        Endpoints<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"127.0.0.1:2379"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        DialTimeout<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// handle error!</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"connect to etcd failed, err:%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"connect to etcd success"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// put</span>
    ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"lmh"</span><span class="token punctuation">,</span> <span class="token string">"lmh"</span><span class="token punctuation">)</span>
    <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"put to etcd failed, err:%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// get</span>
    ctx<span class="token punctuation">,</span> cancel <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"lmh"</span><span class="token punctuation">)</span>
    <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"get from etcd failed, err:%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ev <span class="token operator">:=</span> <span class="token keyword">range</span> resp<span class="token punctuation">.</span>Kvs <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s:%s\n"</span><span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-watch操作" tabindex="-1"><a class="header-anchor" href="#_1-1-3-watch操作" aria-hidden="true">#</a> 1.1.3. watch操作</h3>
<p>watch用来获取未来更改的通知。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"context"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>

    <span class="token string">"go.etcd.io/etcd/clientv3"</span>
<span class="token punctuation">)</span>

<span class="token comment">// watch demo</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        Endpoints<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"127.0.0.1:2379"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        DialTimeout<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"connect to etcd failed, err:%v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"connect to etcd success"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// watch key:lmh change</span>
    rch <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Watch</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"lmh"</span><span class="token punctuation">)</span> <span class="token comment">// &lt;-chan WatchResponse</span>
    <span class="token keyword">for</span> wresp <span class="token operator">:=</span> <span class="token keyword">range</span> rch <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ev <span class="token operator">:=</span> <span class="token keyword">range</span> wresp<span class="token punctuation">.</span>Events <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Type: %s Key:%s Value:%s\n"</span><span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Type<span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Kv<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Kv<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的代码保存编译执行，此时程序就会等待etcd中lmh这个key的变化。</p>
<p>例如：我们打开终端执行以下命令修改、删除、设置lmh这个key。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    etcd> etcdctl.exe --endpoints=http://127.0.0.1:2379 put lmh "lmh1"
    OK

    etcd> etcdctl.exe --endpoints=http://127.0.0.1:2379 del lmh
    1

    etcd> etcdctl.exe --endpoints=http://127.0.0.1:2379 put lmh "lmh2"
    OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的程序都能收到如下通知。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    watch>watch.exe
    connect to etcd success
    Type: PUT Key:lmh Value:lmh1
    Type: DELETE Key:lmh Value:
    Type: PUT Key:lmh Value:lmh2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-lease租约" tabindex="-1"><a class="header-anchor" href="#_1-1-4-lease租约" aria-hidden="true">#</a> 1.1.4. lease租约</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token comment">// etcd lease</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"context"</span>
    <span class="token string">"log"</span>

    <span class="token string">"go.etcd.io/etcd/clientv3"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        Endpoints<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"127.0.0.1:2379"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        DialTimeout<span class="token punctuation">:</span> time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"connect to etcd success."</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 创建一个5秒的租约</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Grant</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 5秒钟之后, /lmh/ 这个key就会被移除</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"/lmh/"</span><span class="token punctuation">,</span> <span class="token string">"lmh"</span><span class="token punctuation">,</span> clientv3<span class="token punctuation">.</span><span class="token function">WithLease</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>ID<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-5-keepalive" tabindex="-1"><a class="header-anchor" href="#_1-1-5-keepalive" aria-hidden="true">#</a> 1.1.5. keepAlive</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"context"</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"log"</span>
    <span class="token string">"time"</span>

    <span class="token string">"go.etcd.io/etcd/clientv3"</span>
<span class="token punctuation">)</span>

<span class="token comment">// etcd keepAlive</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        Endpoints<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"127.0.0.1:2379"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        DialTimeout<span class="token punctuation">:</span> time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"connect to etcd success."</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Grant</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"/lmh/"</span><span class="token punctuation">,</span> <span class="token string">"lmh"</span><span class="token punctuation">,</span> clientv3<span class="token punctuation">.</span><span class="token function">WithLease</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>ID<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// the key 'foo' will be kept forever</span>
    ch<span class="token punctuation">,</span> kaerr <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">KeepAlive</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>ID<span class="token punctuation">)</span>
    <span class="token keyword">if</span> kaerr <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>kaerr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        ka <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"ttl:"</span><span class="token punctuation">,</span> ka<span class="token punctuation">.</span>TTL<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-6-基于etcd实现分布式锁" tabindex="-1"><a class="header-anchor" href="#_1-1-6-基于etcd实现分布式锁" aria-hidden="true">#</a> 1.1.6. 基于etcd实现分布式锁</h3>
<p>go.etcd.io/etcd/clientv3/concurrency在etcd之上实现并发操作，如分布式锁、屏障和选举。</p>
<p>导入该包：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    import "go.etcd.io/etcd/clientv3/concurrency"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>基于etcd实现的分布式锁示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>Endpoints<span class="token punctuation">:</span> endpoints<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 创建两个单独的会话用来演示锁竞争</span>
s1<span class="token punctuation">,</span> err <span class="token operator">:=</span> concurrency<span class="token punctuation">.</span><span class="token function">NewSession</span><span class="token punctuation">(</span>cli<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span> s1<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m1 <span class="token operator">:=</span> concurrency<span class="token punctuation">.</span><span class="token function">NewMutex</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">"/my-lock/"</span><span class="token punctuation">)</span>

s2<span class="token punctuation">,</span> err <span class="token operator">:=</span> concurrency<span class="token punctuation">.</span><span class="token function">NewSession</span><span class="token punctuation">(</span>cli<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span> s2<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m2 <span class="token operator">:=</span> concurrency<span class="token punctuation">.</span><span class="token function">NewMutex</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> <span class="token string">"/my-lock/"</span><span class="token punctuation">)</span>

<span class="token comment">// 会话s1获取锁</span>
<span class="token keyword">if</span> err <span class="token operator">:=</span> m1<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"acquired lock for s1"</span><span class="token punctuation">)</span>

m2Locked <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>m2Locked<span class="token punctuation">)</span>
    <span class="token comment">// 等待直到会话s1释放了/my-lock/的锁</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> m2<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> err <span class="token operator">:=</span> m1<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"released lock for s1"</span><span class="token punctuation">)</span>

<span class="token operator">&lt;-</span>m2Locked
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"acquired lock for s2"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    acquired lock for s1
    released lock for s1
    acquired lock for s2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '34.md' style='float:left'>⬆️上一节🔗</a><a href = '36.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


