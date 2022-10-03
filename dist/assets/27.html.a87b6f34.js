import{_ as c,r as e,o as p,c as r,a as n,b as a,w as o,d as s,e as u}from"./app.2cadb53f.js";const d={},k=n("h1",{id:"\u94FE\u63A5redis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u94FE\u63A5redis","aria-hidden":"true"},"#"),s(" \u94FE\u63A5Redis")],-1),v={class:"table-of-contents"},_=s("END \u94FE\u63A5"),m=u(`<p>[toc]</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;github.com/garyburd/redigo/redis&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">,</span> err <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:6379&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;conn redis failed,&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span> 

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;redis conn success&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="26.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="28.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,4),h=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),f={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},b=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),g=s(")"),q=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),E={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},w=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function x(y,C){const i=e("router-link"),l=e("RouterLink"),t=e("ExternalLinkIcon");return p(),r("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(i,{to:"#end-\u94FE\u63A5"},{default:o(()=>[_]),_:1})])])]),m,n("ul",null,[n("li",null,[n("p",null,[a(l,{to:"/Gomd_super/"},{default:o(()=>[h]),_:1})])]),n("li",null,[n("p",null,[n("a",f,[b,a(t)]),g])]),n("li",null,[n("p",null,[q,n("a",E,[w,a(t)])])])])])}const A=c(d,[["render",x],["__file","27.html.vue"]]);export{A as default};
