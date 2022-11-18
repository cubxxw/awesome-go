import{_ as i,r as e,o as p,c,a as n,b as a,w as l,d as u,e as s}from"./app.9d39be69.js";const d={},r=u(`<h1 id="_1-md5" tabindex="-1"><a class="header-anchor" href="#_1-md5" aria-hidden="true">#</a> 1. md5</h1><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;crypto/md5&quot;</span>
    <span class="token string">&quot;encoding/hex&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">&quot;www.topgoer.com&quot;</span>

    <span class="token comment">//\u65B9\u6CD5\u4E00</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    has <span class="token operator">:=</span> md5<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    md5str1 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%x&quot;</span><span class="token punctuation">,</span> has<span class="token punctuation">)</span> <span class="token comment">//\u5C06[]byte\u8F6C\u621016\u8FDB\u5236</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>md5str1<span class="token punctuation">)</span>

    <span class="token comment">//\u65B9\u6CD5\u4E8C</span>

    w <span class="token operator">:=</span> md5<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token comment">//\u5C06str\u5199\u5165\u5230w\u4E2D</span>
    bw <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>       <span class="token comment">//w.Sum(nil)\u5C06w\u7684hash\u8F6C\u6210[]byte\u683C\u5F0F</span>

    <span class="token comment">// md5str2 := fmt.Sprintf(&quot;%x&quot;, bw)    //\u5C06 bw \u8F6C\u6210\u5B57\u7B26\u4E32</span>
    md5str2 <span class="token operator">:=</span> hex<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>bw<span class="token punctuation">)</span> <span class="token comment">//\u5C06 bw \u8F6C\u6210\u5B57\u7B26\u4E32</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>md5str2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    df02d4af01fdbe9aa21f72acaf6b7cfa
    df02d4af01fdbe9aa21f72acaf6b7cfa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="79.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="81.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,6),m=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),k={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},v=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),f=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),h={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},_=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function g(w,x){const o=e("RouterLink"),t=e("ExternalLinkIcon");return p(),c("div",null,[r,n("ul",null,[n("li",null,[n("p",null,[a(o,{to:"/Gomd_super/"},{default:l(()=>[m]),_:1})])]),n("li",null,[n("p",null,[n("a",k,[v,a(t)]),b])]),n("li",null,[n("p",null,[f,n("a",h,[_,a(t)])])])])])}const E=i(d,[["render",g],["__file","80.html.vue"]]);export{E as default};
