import{_ as o,r as p,o as c,c as i,a as n,b as a,w as l,e as u,d as s}from"./app.5dbe8dec.js";const k={},r=u(`<h1 id="_1-\u64CD\u4F5Cetcd" tabindex="-1"><a class="header-anchor" href="#_1-\u64CD\u4F5Cetcd" aria-hidden="true">#</a> 1. \u64CD\u4F5CETCD</h1><p>\u8FD9\u91CC\u4F7F\u7528\u5B98\u65B9\u7684<code>etcd/clientv3</code>\u5305\u6765\u8FDE\u63A5etcd\u5E76\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\u3002</p><h3 id="_1-1-1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u5B89\u88C5" aria-hidden="true">#</a> 1.1.1. \u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    go get go.etcd.io/etcd/clientv3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-2-put\u548Cget\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-1-2-put\u548Cget\u64CD\u4F5C" aria-hidden="true">#</a> 1.1.2. put\u548Cget\u64CD\u4F5C</h3><p>put\u547D\u4EE4\u7528\u6765\u8BBE\u7F6E\u952E\u503C\u5BF9\u6570\u636E\uFF0Cget\u547D\u4EE4\u7528\u6765\u6839\u636Ekey\u83B7\u53D6\u503C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;context&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;go.etcd.io/etcd/clientv3&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// etcd client put/get demo</span>
<span class="token comment">// use etcd/clientv3</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        Endpoints<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;127.0.0.1:2379&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        DialTimeout<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// handle error!</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;connect to etcd failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connect to etcd success&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// put</span>
    ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;lmh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lmh&quot;</span><span class="token punctuation">)</span>
    <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;put to etcd failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// get</span>
    ctx<span class="token punctuation">,</span> cancel <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;lmh&quot;</span><span class="token punctuation">)</span>
    <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get from etcd failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ev <span class="token operator">:=</span> <span class="token keyword">range</span> resp<span class="token punctuation">.</span>Kvs <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s\\n&quot;</span><span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-watch\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-1-3-watch\u64CD\u4F5C" aria-hidden="true">#</a> 1.1.3. watch\u64CD\u4F5C</h3><p>watch\u7528\u6765\u83B7\u53D6\u672A\u6765\u66F4\u6539\u7684\u901A\u77E5\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;context&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;go.etcd.io/etcd/clientv3&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// watch demo</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        Endpoints<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;127.0.0.1:2379&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        DialTimeout<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;connect to etcd failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connect to etcd success&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// watch key:lmh change</span>
    rch <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Watch</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;lmh&quot;</span><span class="token punctuation">)</span> <span class="token comment">// &lt;-chan WatchResponse</span>
    <span class="token keyword">for</span> wresp <span class="token operator">:=</span> <span class="token keyword">range</span> rch <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ev <span class="token operator">:=</span> <span class="token keyword">range</span> wresp<span class="token punctuation">.</span>Events <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Type: %s Key:%s Value:%s\\n&quot;</span><span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Type<span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Kv<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> ev<span class="token punctuation">.</span>Kv<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u4E0A\u9762\u7684\u4EE3\u7801\u4FDD\u5B58\u7F16\u8BD1\u6267\u884C\uFF0C\u6B64\u65F6\u7A0B\u5E8F\u5C31\u4F1A\u7B49\u5F85etcd\u4E2Dlmh\u8FD9\u4E2Akey\u7684\u53D8\u5316\u3002</p><p>\u4F8B\u5982\uFF1A\u6211\u4EEC\u6253\u5F00\u7EC8\u7AEF\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4FEE\u6539\u3001\u5220\u9664\u3001\u8BBE\u7F6Elmh\u8FD9\u4E2Akey\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    etcd&gt; etcdctl.exe --endpoints=http://127.0.0.1:2379 put lmh &quot;lmh1&quot;
    OK

    etcd&gt; etcdctl.exe --endpoints=http://127.0.0.1:2379 del lmh
    1

    etcd&gt; etcdctl.exe --endpoints=http://127.0.0.1:2379 put lmh &quot;lmh2&quot;
    OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u7A0B\u5E8F\u90FD\u80FD\u6536\u5230\u5982\u4E0B\u901A\u77E5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    watch&gt;watch.exe
    connect to etcd success
    Type: PUT Key:lmh Value:lmh1
    Type: DELETE Key:lmh Value:
    Type: PUT Key:lmh Value:lmh2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-lease\u79DF\u7EA6" tabindex="-1"><a class="header-anchor" href="#_1-1-4-lease\u79DF\u7EA6" aria-hidden="true">#</a> 1.1.4. lease\u79DF\u7EA6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// etcd lease</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;context&quot;</span>
    <span class="token string">&quot;log&quot;</span>

    <span class="token string">&quot;go.etcd.io/etcd/clientv3&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        Endpoints<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;127.0.0.1:2379&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        DialTimeout<span class="token punctuation">:</span> time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connect to etcd success.&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A5\u79D2\u7684\u79DF\u7EA6</span>
    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Grant</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 5\u79D2\u949F\u4E4B\u540E, /lmh/ \u8FD9\u4E2Akey\u5C31\u4F1A\u88AB\u79FB\u9664</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;/lmh/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lmh&quot;</span><span class="token punctuation">,</span> clientv3<span class="token punctuation">.</span><span class="token function">WithLease</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>ID<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-5-keepalive" tabindex="-1"><a class="header-anchor" href="#_1-1-5-keepalive" aria-hidden="true">#</a> 1.1.5. keepAlive</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;context&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;log&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;go.etcd.io/etcd/clientv3&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// etcd keepAlive</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        Endpoints<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;127.0.0.1:2379&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        DialTimeout<span class="token punctuation">:</span> time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connect to etcd success.&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">Grant</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;/lmh/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lmh&quot;</span><span class="token punctuation">,</span> clientv3<span class="token punctuation">.</span><span class="token function">WithLease</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>ID<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// the key &#39;foo&#39; will be kept forever</span>
    ch<span class="token punctuation">,</span> kaerr <span class="token operator">:=</span> cli<span class="token punctuation">.</span><span class="token function">KeepAlive</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>ID<span class="token punctuation">)</span>
    <span class="token keyword">if</span> kaerr <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>kaerr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        ka <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ttl:&quot;</span><span class="token punctuation">,</span> ka<span class="token punctuation">.</span>TTL<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-6-\u57FA\u4E8Eetcd\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501" tabindex="-1"><a class="header-anchor" href="#_1-1-6-\u57FA\u4E8Eetcd\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501" aria-hidden="true">#</a> 1.1.6. \u57FA\u4E8Eetcd\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501</h3><p>go.etcd.io/etcd/clientv3/concurrency\u5728etcd\u4E4B\u4E0A\u5B9E\u73B0\u5E76\u53D1\u64CD\u4F5C\uFF0C\u5982\u5206\u5E03\u5F0F\u9501\u3001\u5C4F\u969C\u548C\u9009\u4E3E\u3002</p><p>\u5BFC\u5165\u8BE5\u5305\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import &quot;go.etcd.io/etcd/clientv3/concurrency&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u57FA\u4E8Eetcd\u5B9E\u73B0\u7684\u5206\u5E03\u5F0F\u9501\u793A\u4F8B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>cli<span class="token punctuation">,</span> err <span class="token operator">:=</span> clientv3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>clientv3<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>Endpoints<span class="token punctuation">:</span> endpoints<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span> cli<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u4E24\u4E2A\u5355\u72EC\u7684\u4F1A\u8BDD\u7528\u6765\u6F14\u793A\u9501\u7ADE\u4E89</span>
s1<span class="token punctuation">,</span> err <span class="token operator">:=</span> concurrency<span class="token punctuation">.</span><span class="token function">NewSession</span><span class="token punctuation">(</span>cli<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span> s1<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m1 <span class="token operator">:=</span> concurrency<span class="token punctuation">.</span><span class="token function">NewMutex</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;/my-lock/&quot;</span><span class="token punctuation">)</span>

s2<span class="token punctuation">,</span> err <span class="token operator">:=</span> concurrency<span class="token punctuation">.</span><span class="token function">NewSession</span><span class="token punctuation">(</span>cli<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span> s2<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m2 <span class="token operator">:=</span> concurrency<span class="token punctuation">.</span><span class="token function">NewMutex</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> <span class="token string">&quot;/my-lock/&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F1A\u8BDDs1\u83B7\u53D6\u9501</span>
<span class="token keyword">if</span> err <span class="token operator">:=</span> m1<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;acquired lock for s1&quot;</span><span class="token punctuation">)</span>

m2Locked <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>m2Locked<span class="token punctuation">)</span>
    <span class="token comment">// \u7B49\u5F85\u76F4\u5230\u4F1A\u8BDDs1\u91CA\u653E\u4E86/my-lock/\u7684\u9501</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> m2<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> err <span class="token operator">:=</span> m1<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;released lock for s1&quot;</span><span class="token punctuation">)</span>

<span class="token operator">&lt;-</span>m2Locked
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;acquired lock for s2&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    acquired lock for s1
    released lock for s1
    acquired lock for s2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="34.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="36.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,29),d=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),f=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),g={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},h=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function q(y,w){const e=p("RouterLink"),t=p("ExternalLinkIcon");return c(),i("div",null,[r,n("ul",null,[n("li",null,[n("p",null,[a(e,{to:"/Gomd_super/"},{default:l(()=>[d]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[f,n("a",g,[h,a(t)])])])])])}const _=o(k,[["render",q],["__file","35.html.vue"]]);export{_ as default};
