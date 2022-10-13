import{_ as o,r as e,o as c,c as i,a as n,b as a,w as l,e as u,d as s}from"./app.5dbe8dec.js";const r={},d=u(`<h1 id="_1-\u7B80\u5355\u7684\u5206\u5E03\u5F0Fserver" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u5355\u7684\u5206\u5E03\u5F0Fserver" aria-hidden="true">#</a> 1. \u7B80\u5355\u7684\u5206\u5E03\u5F0Fserver</h1><h3 id="_1-1-1-\u7B80\u5355\u7684\u5206\u5E03\u5F0Fserver" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u7B80\u5355\u7684\u5206\u5E03\u5F0Fserver" aria-hidden="true">#</a> 1.1.1. \u7B80\u5355\u7684\u5206\u5E03\u5F0Fserver</h3><p>\u76EE\u524D\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5DF2\u7ECF\u5F88\u6D41\u884C\u4E86\uFF0C\u4E00\u4E9B\u5F00\u6E90\u6846\u67B6\u4E5F\u88AB\u5E7F\u6CDB\u5E94\u7528\uFF0C\u5982dubbo\u3001Motan\u7B49\u3002\u5BF9\u4E8E\u4E00\u4E2A\u5206\u5E03\u5F0F\u670D\u52A1\uFF0C\u6700\u57FA\u672C\u7684\u4E00\u9879\u529F\u80FD\u5C31\u662F\u670D\u52A1\u7684\u6CE8\u518C\u548C\u53D1\u73B0\uFF0C\u800C\u5229\u7528zk\u7684EPHEMERAL\u8282\u70B9\u5219\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u5B9E\u73B0\u8BE5\u529F\u80FD\u3002EPHEMERAL\u8282\u70B9\u6B63\u5982\u5176\u540D\uFF0C\u662F\u4E34\u65F6\u6027\u7684\uFF0C\u5176\u751F\u547D\u5468\u671F\u662F\u548C\u5BA2\u6237\u7AEF\u4F1A\u8BDD\u7ED1\u5B9A\u7684\uFF0C\u5F53\u4F1A\u8BDD\u8FDE\u63A5\u65AD\u5F00\u65F6\uFF0C\u8282\u70B9\u4E5F\u4F1A\u88AB\u5220\u9664\u3002\u4E0B\u8FB9\u6211\u4EEC\u5C31\u6765\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u5206\u5E03\u5F0Fserver\uFF1A</p><h4 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server\uFF1A</h4><p>\u670D\u52A1\u542F\u52A8\u65F6\uFF0C\u521B\u5EFAzk\u8FDE\u63A5\uFF0C\u5E76\u5728go_servers\u8282\u70B9\u4E0B\u521B\u5EFA\u4E00\u4E2A\u65B0\u8282\u70B9\uFF0C\u8282\u70B9\u540D\u4E3A&quot;ip:port&quot;\uFF0C\u5B8C\u6210\u670D\u52A1\u6CE8\u518C \u670D\u52A1\u7ED3\u675F\u65F6\uFF0C\u7531\u4E8E\u8FDE\u63A5\u65AD\u5F00\uFF0C\u521B\u5EFA\u7684\u8282\u70B9\u4F1A\u88AB\u5220\u9664\uFF0C\u8FD9\u6837client\u5C31\u4E0D\u4F1A\u8FDE\u5230\u8BE5\u8282\u70B9</p><h4 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> client\uFF1A</h4><p>\u5148\u4ECEzk\u83B7\u53D6go_servers\u8282\u70B9\u4E0B\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u8FD9\u6837\u5C31\u62FF\u5230\u4E86\u6240\u6709\u6CE8\u518C\u7684server \u4ECEserver\u5217\u8868\u4E2D\u9009\u4E2D\u4E00\u4E2A\u8282\u70B9\uFF08\u8FD9\u91CC\u53EA\u662F\u968F\u673A\u9009\u53D6\uFF0C\u5B9E\u9645\u670D\u52A1\u4E00\u822C\u4F1A\u63D0\u4F9B\u591A\u79CD\u7B56\u7565\uFF09\uFF0C\u521B\u5EFA\u8FDE\u63A5\u8FDB\u884C\u901A\u4FE1 \u8FD9\u91CC\u4E3A\u4E86\u6F14\u793A\uFF0C\u6211\u4EEC\u6BCF\u6B21client\u8FDE\u63A5server\uFF0C\u83B7\u53D6server\u53D1\u9001\u7684\u65F6\u95F4\u540E\u5C31\u65AD\u5F00\u3002\u4E3B\u8981\u4EE3\u7801\u5982\u4E0B\uFF1A</p><p>server.go</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net&quot;</span>
    <span class="token string">&quot;os&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;github.com/samuel/go-zookeeper/zk&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">starServer</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:8897&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">starServer</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:8898&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">starServer</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:8899&quot;</span><span class="token punctuation">)</span>

    a <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;-</span>a
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">checkError</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">starServer</span><span class="token punctuation">(</span>port <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tcpAddr<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ResolveTCPAddr</span><span class="token punctuation">(</span><span class="token string">&quot;tcp4&quot;</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>tcpAddr<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    listener<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ListenTCP</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> tcpAddr<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    <span class="token comment">//\u6CE8\u518Czk\u8282\u70B9q</span>
    <span class="token comment">// \u94FE\u63A5zk</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GetConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot; connect zk error: %s &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// zk\u8282\u70B9\u6CE8\u518C</span>
    err <span class="token operator">=</span> <span class="token function">RegistServer</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> port<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot; regist node error: %s &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listener<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">&quot;Error: %s&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">go</span> <span class="token function">handleCient</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> port<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;aaaaaa&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handleCient</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span> port <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    daytime <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>port <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> daytime<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">GetConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    zkList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;localhost:2181&quot;</span><span class="token punctuation">}</span>
    conn<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> zk<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>zkList<span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">RegistServer</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span> host <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">&quot;/go_servers/&quot;</span><span class="token operator">+</span>host<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> zk<span class="token punctuation">.</span>FlagEphemeral<span class="token punctuation">,</span> zk<span class="token punctuation">.</span><span class="token function">WorldACL</span><span class="token punctuation">(</span>zk<span class="token punctuation">.</span>PermAll<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetServerList</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">(</span>list <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Children</span><span class="token punctuation">(</span><span class="token string">&quot;/go_servers&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-client-go" tabindex="-1"><a class="header-anchor" href="#_1-1-2-client-go" aria-hidden="true">#</a> 1.1.2. client.go</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;errors&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io/ioutil&quot;</span>
    <span class="token string">&quot;math/rand&quot;</span>
    <span class="token string">&quot;net&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;github.com/samuel/go-zookeeper/zk&quot;</span>
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
    <span class="token comment">// service := &quot;127.0.0.1:8899&quot;</span>
    <span class="token comment">//\u83B7\u53D6\u5730\u5740</span>
    serverHost<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">getServerHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get server host fail: %s \\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connect host: &quot;</span> <span class="token operator">+</span> serverHost<span class="token punctuation">)</span>
    tcpAddr<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ResolveTCPAddr</span><span class="token punctuation">(</span><span class="token string">&quot;tcp4&quot;</span><span class="token punctuation">,</span> serverHost<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">DialTCP</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> tcpAddr<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;timestamp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

    result<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token function">checkError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getServerHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>host <span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GetConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot; connect zk error: %s \\n &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serverList<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">GetServerList</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot; get server list error: %s \\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    count <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>serverList<span class="token punctuation">)</span>
    <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        err <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;server list is empty \\n&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u968F\u673A\u9009\u4E2D\u4E00\u4E2A\u8FD4\u56DE</span>
    r <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">NewSource</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    host <span class="token operator">=</span> serverList<span class="token punctuation">[</span>r<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">GetConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    zkList <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;localhost:2181&quot;</span><span class="token punctuation">}</span>
    conn<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> zk<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>zkList<span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">GetServerList</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>zk<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">(</span>list <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Children</span><span class="token punctuation">(</span><span class="token string">&quot;/go_servers&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5148\u542F\u52A8server\uFF0C\u53EF\u4EE5\u770B\u5230\u6709\u4E09\u4E2A\u8282\u70B9\u6CE8\u518C\u5230zk\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    127.0.0.1:8897
    127.0.0.1:8899
    127.0.0.1:8898
    2018/08/27 14:04:58 Connected to 127.0.0.1:2181
    2018/08/27 14:04:58 Connected to 127.0.0.1:2181
    2018/08/27 14:04:58 Connected to 127.0.0.1:2181
    2018/08/27 14:04:58 Authenticated: id=100619932030205976, timeout=10000
    2018/08/27 14:04:58 Re-submitting \`0\` credentials after reconnect
    2018/08/27 14:04:58 Authenticated: id=100619932030205977, timeout=10000
    2018/08/27 14:04:58 Re-submitting \`0\` credentials after reconnect
    2018/08/27 14:04:58 Authenticated: id=100619932030205978, timeout=10000
    2018/08/27 14:04:58 Re-submitting \`0\` credentials after reconnect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8client\uFF0C\u53EF\u4EE5\u770B\u5230\u6BCF\u6B21client\u90FD\u4F1A\u968F\u673A\u8FDE\u63A5\u5230\u4E00\u4E2A\u8282\u70B9\u8FDB\u884C\u901A\u4FE1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    2018/08/27 14:05:21 Connected to 127.0.0.1:2181
    2018/08/27 14:05:21 Authenticated: id=100619932030205979, timeout=10000
    2018/08/27 14:05:21 Re-submitting \`0\` credentials after reconnect
    2018/08/27 14:05:21 Recv loop terminated: err=EOF
    connect host: 127.0.0.1:8899
    2018/08/27 14:05:21 Send loop terminated: err=&lt;nil&gt;
    read tcp 127.0.0.1:54062-&gt;127.0.0.1:8899: read: connection reset by peer
    127.0.0.1:8899: 2018-08-27 14:05:21.291641 +0800 CST m=+22.480149656
    2018/08/27 14:05:22 Connected to [::1]:2181
    2018/08/27 14:05:22 Authenticated: id=100619932030205980, timeout=10000
    2018/08/27 14:05:22 Re-submitting \`0\` credentials after reconnect
    2018/08/27 14:05:22 Recv loop terminated: err=EOF
    2018/08/27 14:05:22 Send loop terminated: err=&lt;nil&gt;
    connect host: 127.0.0.1:8897
    read tcp 127.0.0.1:54064-&gt;127.0.0.1:8897: read: connection reset by peer
    127.0.0.1:8897: 2018-08-27 14:05:22.302322 +0800 CST m=+23.490801385
    2018/08/27 14:05:23 Connected to 127.0.0.1:2181
    2018/08/27 14:05:23 Authenticated: id=100619932030205981, timeout=10000
    2018/08/27 14:05:23 Re-submitting \`0\` credentials after reconnect
    2018/08/27 14:05:23 Recv loop terminated: err=EOF
    2018/08/27 14:05:23 Send loop terminated: err=&lt;nil&gt;
    connect host: 127.0.0.1:8897
    read tcp 127.0.0.1:54070-&gt;127.0.0.1:8897: read: connection reset by peer
    127.0.0.1:8897: 2018-08-27 14:05:23.312873 +0800 CST m=+24.501324228
    2018/08/27 14:05:24 Connected to 127.0.0.1:2181
    2018/08/27 14:05:24 Authenticated: id=100619932030205982, timeout=10000
    2018/08/27 14:05:24 Re-submitting \`0\` credentials after reconnect
    2018/08/27 14:05:24 Recv loop terminated: err=EOF
    connect host: 127.0.0.1:8899
    2018/08/27 14:05:24 Send loop terminated: err=&lt;nil&gt;
    read tcp 127.0.0.1:54072-&gt;127.0.0.1:8899: read: connection reset by peer
    127.0.0.1:8899: 2018-08-27 14:05:24.323668 +0800 CST m=+25.512090155
    2018/08/27 14:05:25 Connected to 127.0.0.1:2181
    2018/08/27 14:05:25 Authenticated: id=100619932030205983, timeout=10000
    2018/08/27 14:05:25 Re-submitting \`0\` credentials after reconnect
    2018/08/27 14:05:25 Recv loop terminated: err=EOF
    2018/08/27 14:05:25 Send loop terminated: err=&lt;nil&gt;
    connect host: 127.0.0.1:8897
    read tcp 127.0.0.1:54074-&gt;127.0.0.1:8897: read: connection reset by peer
    127.0.0.1:8897: 2018-08-27 14:05:25.330257 +0800 CST m=+26.518650566
    2018/08/27 14:05:26 Connected to [::1]:2181
    2018/08/27 14:05:26 Authenticated: id=100619932030205984, timeout=10000
    2018/08/27 14:05:26 Re-submitting \`0\` credentials after reconnect
    2018/08/27 14:05:26 Recv loop terminated: err=EOF
    2018/08/27 14:05:26 Send loop terminated: err=&lt;nil&gt;
    connect host: 127.0.0.1:8897
    read tcp 127.0.0.1:54080-&gt;127.0.0.1:8897: read: connection reset by peer
    127.0.0.1:8897: 2018-08-27 14:05:26.357251 +0800 CST m=+27.545614616
    2018/08/27 14:05:27 Connected to 127.0.0.1:2181
    2018/08/27 14:05:27 Authenticated: id=100619932030205985, timeout=10000
    2018/08/27 14:05:27 Re-submitting \`0\` credentials after reconnect
    connect host: 127.0.0.1:8899
    2018/08/27 14:05:27 Recv loop terminated: err=EOF
    2018/08/27 14:05:27 Send loop terminated: err=&lt;nil&gt;
    read tcp 127.0.0.1:54082-&gt;127.0.0.1:8899: read: connection reset by peer
    127.0.0.1:8899: 2018-08-27 14:05:27.369096 +0800 CST m=+28.557430764
    2018/08/27 14:05:28 Connected to [::1]:2181
    2018/08/27 14:05:28 Authenticated: id=100619932030205986, timeout=10000
    2018/08/27 14:05:28 Re-submitting \`0\` credentials after reconnect
    2018/08/27 14:05:28 Recv loop terminated: err=EOF
    2018/08/27 14:05:28 Send loop terminated: err=&lt;nil&gt;
    connect host: 127.0.0.1:8898
    read tcp 127.0.0.1:54084-&gt;127.0.0.1:8898: read: connection reset by peer
    127.0.0.1:8898: 2018-08-27 14:05:28.380455 +0800 CST m=+29.568760988
    ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u7684\u5206\u5E03\u5F0Fserver\u5C31\u5B9E\u73B0\u4E86</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="36.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="38.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,18),k=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),f=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),g={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},h=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function q(y,w){const p=e("RouterLink"),t=e("ExternalLinkIcon");return c(),i("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:l(()=>[k]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[f,n("a",g,[h,a(t)])])])])])}const _=o(r,[["render",q],["__file","37.html.vue"]]);export{_ as default};
