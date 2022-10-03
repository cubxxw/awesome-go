import{_ as l,r as e,o as c,c as u,a as n,b as a,w as o,d as s,e as r}from"./app.2cadb53f.js";const d={},k=n("h1",{id:"string\u7C7B\u578Bset\u3001get\u64CD\u4F5C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#string\u7C7B\u578Bset\u3001get\u64CD\u4F5C","aria-hidden":"true"},"#"),s(" String\u7C7B\u578BSet\u3001Get\u64CD\u4F5C")],-1),v={class:"table-of-contents"},m=s("END \u94FE\u63A5"),b=r(`<p>[toc]</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

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

    <span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">&quot;Set&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    r<span class="token punctuation">,</span> err <span class="token operator">:=</span> redis<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">&quot;Get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;get abc failed,&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled. Please check Redis logs for details about the error.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Redis\u88AB\u914D\u7F6E\u4E3A\u4FDD\u5B58\u6570\u636E\u5E93\u5FEB\u7167\uFF0C\u4F46\u5B83\u76EE\u524D\u4E0D\u80FD\u6301\u4E45\u5316\u5230\u786C\u76D8\u3002\u7528\u6765\u4FEE\u6539\u96C6\u5408\u6570\u636E\u7684\u547D\u4EE4\u4E0D\u80FD\u7528\u3002\u8BF7\u67E5\u770BRedis\u65E5\u5FD7\u7684\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u3002</p><p>\u539F\u56E0\uFF1A</p><p>\u5F3A\u5236\u5173\u95EDRedis\u5FEB\u7167\u5BFC\u81F4\u4E0D\u80FD\u6301\u4E45\u5316\u3002</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><p>\u8FD0\u884Cconfig set stop-writes-on-bgsave-error no\u3000\u547D\u4EE4\u540E\uFF0C\u5173\u95ED\u914D\u7F6E\u9879stop-writes-on-bgsave-error\u89E3\u51B3\u8BE5\u95EE\u9898\u3002</p><p>\u5F00\u542F\u547D\u4EE4\u884C\u65B0\u7A97\u53E3 2\uFF1A</p><p>\u94FE\u63A5Redis\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    redis-cli -h 127.0.0.1 -p 6379
    127.0.0.1:6379&gt; config set stop-writes-on-bgsave-error no
    OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u547D\u4EE4\u884C\u7A97\u53E3 1 \u8FD0\u884C\u7A0B\u5E8F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u547D\u4EE4\u884C\u7A97\u53E3 2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    127.0.0.1:6379&gt; get abc
    &quot;100&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="27.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="29.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,20),g=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),h={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},f=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),_=s(")"),x=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),q={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},w=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function y(C,E){const i=e("router-link"),p=e("RouterLink"),t=e("ExternalLinkIcon");return c(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(i,{to:"#end-\u94FE\u63A5"},{default:o(()=>[m]),_:1})])])]),b,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:o(()=>[g]),_:1})])]),n("li",null,[n("p",null,[n("a",h,[f,a(t)]),_])]),n("li",null,[n("p",null,[x,n("a",q,[w,a(t)])])])])])}const D=l(d,[["render",y],["__file","28.html.vue"]]);export{D as default};
