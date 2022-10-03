import{_ as i,r as p,o as l,c as u,a as n,b as a,w as t,d as s,e as r}from"./app.2cadb53f.js";const d={},k=n("h1",{id:"http\u7F16\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#http\u7F16\u7A0B","aria-hidden":"true"},"#"),s(" http\u7F16\u7A0B")],-1),v={class:"table-of-contents"},m=s("1.1.1. web\u5DE5\u4F5C\u6D41\u7A0B"),b=s("1.1.2. HTTP\u534F\u8BAE"),h=s("1.1.3. HTTP\u670D\u52A1\u7AEF"),f=s("1.1.4. HTTP\u670D\u52A1\u7AEF"),_=s("END \u94FE\u63A5"),g=r(`<p>[toc]</p><h3 id="_1-1-1-web\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-1-1-web\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> 1.1.1. web\u5DE5\u4F5C\u6D41\u7A0B</h3><ul><li>Web\u670D\u52A1\u5668\u7684\u5DE5\u4F5C\u539F\u7406\u53EF\u4EE5\u7B80\u5355\u5730\u5F52\u7EB3\u4E3A <ul><li>\u5BA2\u6237\u673A\u901A\u8FC7TCP/IP\u534F\u8BAE\u5EFA\u7ACB\u5230\u670D\u52A1\u5668\u7684TCP\u8FDE\u63A5</li><li>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001HTTP\u534F\u8BAE\u8BF7\u6C42\u5305\uFF0C\u8BF7\u6C42\u670D\u52A1\u5668\u91CC\u7684\u8D44\u6E90\u6587\u6863</li><li>\u670D\u52A1\u5668\u5411\u5BA2\u6237\u673A\u53D1\u9001HTTP\u534F\u8BAE\u5E94\u7B54\u5305\uFF0C\u5982\u679C\u8BF7\u6C42\u7684\u8D44\u6E90\u5305\u542B\u6709\u52A8\u6001\u8BED\u8A00\u7684\u5185\u5BB9\uFF0C\u90A3\u4E48\u670D\u52A1\u5668\u4F1A\u8C03\u7528\u52A8\u6001\u8BED\u8A00\u7684\u89E3\u91CA\u5F15\u64CE\u8D1F\u8D23\u5904\u7406\u201C\u52A8\u6001\u5185\u5BB9\u201D\uFF0C\u5E76\u5C06\u5904\u7406\u5F97\u5230\u7684\u6570\u636E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF</li><li>\u5BA2\u6237\u673A\u4E0E\u670D\u52A1\u5668\u65AD\u5F00\u3002\u7531\u5BA2\u6237\u7AEF\u89E3\u91CAHTML\u6587\u6863\uFF0C\u5728\u5BA2\u6237\u7AEF\u5C4F\u5E55\u4E0A\u6E32\u67D3\u56FE\u5F62\u7ED3\u679C</li></ul></li></ul><h3 id="_1-1-2-http\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#_1-1-2-http\u534F\u8BAE" aria-hidden="true">#</a> 1.1.2. HTTP\u534F\u8BAE</h3><ul><li>\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE(HTTP\uFF0CHyperText Transfer Protocol)\u662F\u4E92\u8054\u7F51\u4E0A\u5E94\u7528\u6700\u4E3A\u5E7F\u6CDB\u7684\u4E00\u79CD\u7F51\u7EDC\u534F\u8BAE\uFF0C\u5B83\u8BE6\u7EC6\u89C4\u5B9A\u4E86\u6D4F\u89C8\u5668\u548C\u4E07\u7EF4\u7F51\u670D\u52A1\u5668\u4E4B\u95F4\u4E92\u76F8\u901A\u4FE1\u7684\u89C4\u5219\uFF0C\u901A\u8FC7\u56E0\u7279\u7F51\u4F20\u9001\u4E07\u7EF4\u7F51\u6587\u6863\u7684\u6570\u636E\u4F20\u9001\u534F\u8BAE</li><li>HTTP\u534F\u8BAE\u901A\u5E38\u627F\u8F7D\u4E8ETCP\u534F\u8BAE\u4E4B\u4E0A</li></ul><h3 id="_1-1-3-http\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#_1-1-3-http\u670D\u52A1\u7AEF" aria-hidden="true">#</a> 1.1.3. HTTP\u670D\u52A1\u7AEF</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//http://127.0.0.1:8000/go</span>
    <span class="token comment">// \u5355\u72EC\u5199\u56DE\u8C03\u51FD\u6570</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/go&quot;</span><span class="token punctuation">,</span> myHandler<span class="token punctuation">)</span>
    <span class="token comment">//http.HandleFunc(&quot;/ungo&quot;,myHandler2 )</span>
    <span class="token comment">// addr\uFF1A\u76D1\u542C\u7684\u5730\u5740</span>
    <span class="token comment">// handler\uFF1A\u56DE\u8C03\u51FD\u6570</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:8000&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// handler\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">myHandler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>RemoteAddr<span class="token punctuation">,</span> <span class="token string">&quot;\u8FDE\u63A5\u6210\u529F&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u8BF7\u6C42\u65B9\u5F0F\uFF1AGET POST DELETE PUT UPDATE</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;method:&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Method<span class="token punctuation">)</span>
    <span class="token comment">// /go</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;url:&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;header:&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Header<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;body:&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    <span class="token comment">// \u56DE\u590D</span>
    w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;www.5lmh.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-http\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#_1-1-4-http\u670D\u52A1\u7AEF" aria-hidden="true">#</a> 1.1.4. HTTP\u670D\u52A1\u7AEF</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//resp, _ := http.Get(&quot;http://www.baidu.com&quot;)</span>
    <span class="token comment">//fmt.Println(resp)</span>
    resp<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8000/go&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 200 OK</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Status<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Header<span class="token punctuation">)</span>

    buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u63A5\u6536\u670D\u52A1\u7AEF\u4FE1\u606F</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u5B8C\u6BD5&quot;</span><span class="token punctuation">)</span>
            res <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="5.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="7.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,11),q=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),T={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),P=s(")"),y=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),H={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},E=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function x(C,L){const e=p("router-link"),c=p("RouterLink"),o=p("ExternalLinkIcon");return l(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(e,{to:"#_1-1-1-web\u5DE5\u4F5C\u6D41\u7A0B"},{default:t(()=>[m]),_:1})]),n("li",null,[a(e,{to:"#_1-1-2-http\u534F\u8BAE"},{default:t(()=>[b]),_:1})]),n("li",null,[a(e,{to:"#_1-1-3-http\u670D\u52A1\u7AEF"},{default:t(()=>[h]),_:1})]),n("li",null,[a(e,{to:"#_1-1-4-http\u670D\u52A1\u7AEF"},{default:t(()=>[f]),_:1})]),n("li",null,[a(e,{to:"#end-\u94FE\u63A5"},{default:t(()=>[_]),_:1})])])]),g,n("ul",null,[n("li",null,[n("p",null,[a(c,{to:"/Gomd_super/"},{default:t(()=>[q]),_:1})])]),n("li",null,[n("p",null,[n("a",T,[w,a(o)]),P])]),n("li",null,[n("p",null,[y,n("a",H,[E,a(o)])])])])])}const B=i(d,[["render",x],["__file","6.html.vue"]]);export{B as default};
