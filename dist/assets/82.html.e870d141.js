import{_ as o,r as e,o as p,c,a as n,b as a,w as l,d as u,e as s}from"./app.74bed754.js";const d={},r=u(`<h1 id="_1-sha" tabindex="-1"><a class="header-anchor" href="#_1-sha" aria-hidden="true">#</a> 1. sha</h1><p>\u5B89\u5168\u6563\u5217\u7B97\u6CD5SHA\uFF08Secure Hash Algorithm\uFF09\u662F\u7F8E\u56FD\u56FD\u5BB6\u5B89\u5168\u5C40 \uFF08NSA\uFF09 \u8BBE\u8BA1\uFF0C\u7F8E\u56FD\u56FD\u5BB6\u6807\u51C6\u4E0E\u6280\u672F\u7814\u7A76\u9662\uFF08NIST\uFF09 \u53D1\u5E03\u7684\u4E00\u7CFB\u5217\u5BC6\u7801\u6563\u5217\u51FD\u6570\uFF0C\u5305\u62EC SHA-1\u3001SHA-224\u3001SHA-256\u3001SHA-384 \u548C SHA-512 \u7B49\u53D8\u4F53\u3002\u4E3B\u8981\u9002\u7528\u4E8E\u6570\u5B57\u7B7E\u540D\u6807\u51C6\uFF08DigitalSignature Standard DSS\uFF09\u91CC\u9762\u5B9A\u4E49\u7684\u6570\u5B57\u7B7E\u540D\u7B97\u6CD5\uFF08Digital Signature Algorithm DSA\uFF09\u3002SHA-1\u5DF2\u7ECF\u4E0D\u662F\u90A3\u8FB9\u5B89\u5168\u4E86\uFF0Cgoogle\u548C\u5FAE\u8F6F\u90FD\u5DF2\u7ECF\u5F03\u7528\u8FD9\u4E2A\u52A0\u5BC6\u7B97\u6CD5\u3002\u4E3A\u6B64\uFF0C\u6211\u4EEC\u4F7F\u7528\u70ED\u95E8\u7684\u6BD4\u7279\u5E01\u4F7F\u7528\u8FC7\u7684\u7B97\u6CD5SHA-256\u4F5C\u4E3A\u5B9E\u4F8B\u3002\u5176\u5B83SHA\u7B97\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u6309\u7167\u8FD9\u79CD\u6A21\u5F0F\u8FDB\u884C\u4F7F\u7528\u3002</p><h3 id="_1-1-1-sha1" tabindex="-1"><a class="header-anchor" href="#_1-1-1-sha1" aria-hidden="true">#</a> 1.1.1. sha1</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;crypto/sha1&quot;</span>
    <span class="token string">&quot;encoding/hex&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">&quot;www.5lmh.com&quot;</span>

    <span class="token comment">//\u65B9\u6CD5\u4E00</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    has <span class="token operator">:=</span> sha1<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    shastr1 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%x&quot;</span><span class="token punctuation">,</span> has<span class="token punctuation">)</span> <span class="token comment">//\u5C06[]byte\u8F6C\u621016\u8FDB\u5236</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shastr1<span class="token punctuation">)</span>

    <span class="token comment">//\u65B9\u6CD5\u4E8C</span>

    w <span class="token operator">:=</span> sha1<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token comment">//\u5C06str\u5199\u5165\u5230w\u4E2D</span>
    bw <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>       <span class="token comment">//w.Sum(nil)\u5C06w\u7684hash\u8F6C\u6210[]byte\u683C\u5F0F</span>

    <span class="token comment">// shastr2 := fmt.Sprintf(&quot;%x&quot;, bw)    //\u5C06 bw \u8F6C\u6210\u5B57\u7B26\u4E32</span>
    shastr2 <span class="token operator">:=</span> hex<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>bw<span class="token punctuation">)</span> <span class="token comment">//\u5C06 bw \u8F6C\u6210\u5B57\u7B26\u4E32</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shastr2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    85f1dafe3287dce1d8ac1a72fe7f28faa2b0fbf7
    85f1dafe3287dce1d8ac1a72fe7f28faa2b0fbf7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u54C8\u5E0C\u503C\u7528\u4F5C\u8868\u793A\u5927\u91CF\u6570\u636E\u7684\u56FA\u5B9A\u5927\u5C0F\u7684\u552F\u4E00\u503C\u3002\u6570\u636E\u7684\u5C11\u91CF\u66F4\u6539\u4F1A\u5728\u54C8\u5E0C\u503C\u4E2D\u4EA7\u751F\u4E0D\u53EF\u9884\u77E5\u7684\u5927\u91CF\u66F4\u6539\u3002 SHA256 \u7B97\u6CD5\u7684\u54C8\u5E0C\u503C\u5927\u5C0F\u4E3A 256 \u4F4D\u3002</p><h3 id="_1-1-2-sha256" tabindex="-1"><a class="header-anchor" href="#_1-1-2-sha256" aria-hidden="true">#</a> 1.1.2. sha256</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;crypto/sha256&quot;</span>
    <span class="token string">&quot;encoding/hex&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">&quot;www.5lmh.com&quot;</span>

    w <span class="token operator">:=</span> sha256<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token comment">//\u5C06str\u5199\u5165\u5230w\u4E2D</span>
    bw <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>       <span class="token comment">//w.Sum(nil)\u5C06w\u7684hash\u8F6C\u6210[]byte\u683C\u5F0F</span>

    <span class="token comment">// shastr2 := fmt.Sprintf(&quot;%x&quot;, bw)    //\u5C06 bw \u8F6C\u6210\u5B57\u7B26\u4E32</span>
    shastr2 <span class="token operator">:=</span> hex<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>bw<span class="token punctuation">)</span> <span class="token comment">//\u5C06 bw \u8F6C\u6210\u5B57\u7B26\u4E32</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shastr2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    e9c2efc35f3115c82bd97ae895b96db6a483a198a8b4b1c9bd8249129db7dbe9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-3-sha512" tabindex="-1"><a class="header-anchor" href="#_1-1-3-sha512" aria-hidden="true">#</a> 1.1.3. sha512</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;crypto/sha512&quot;</span>
    <span class="token string">&quot;encoding/hex&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">&quot;www.5lmh.com&quot;</span>

    w <span class="token operator">:=</span> sha512<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    io<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token comment">//\u5C06str\u5199\u5165\u5230w\u4E2D</span>
    bw <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>       <span class="token comment">//w.Sum(nil)\u5C06w\u7684hash\u8F6C\u6210[]byte\u683C\u5F0F</span>

    <span class="token comment">// shastr2 := fmt.Sprintf(&quot;%x&quot;, bw)    //\u5C06 bw \u8F6C\u6210\u5B57\u7B26\u4E32</span>
    shastr2 <span class="token operator">:=</span> hex<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span>bw<span class="token punctuation">)</span> <span class="token comment">//\u5C06 bw \u8F6C\u6210\u5B57\u7B26\u4E32</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shastr2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    f4b68e0c8a85ddac35085eb95feb398361fe5c0421922c52dc7797c699664ee13aa4297dc7f20a9cd6615bf000dde6e91cc164988
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="81.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="83.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,17),k=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),h=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),f={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},g=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function w(_,q){const i=e("RouterLink"),t=e("ExternalLinkIcon");return p(),c("div",null,[r,n("ul",null,[n("li",null,[n("p",null,[a(i,{to:"/Gomd_super/"},{default:l(()=>[k]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[h,n("a",f,[g,a(t)])])])])])}const x=o(d,[["render",w],["__file","82.html.vue"]]);export{x as default};
