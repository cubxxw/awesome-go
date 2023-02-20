import{_ as p,r as e,o as i,c as l,a as n,b as a,w as c,d as u,e as s}from"./app.64dac66d.js";const r={},d=u(`<h1 id="_1-\u5B9E\u65F6\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9E\u65F6\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a> 1. \u5B9E\u65F6\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9</h1><p>\u5728\u505A\u65E5\u5FD7\u5206\u6790\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5B9E\u65F6\u7684\u83B7\u53D6\u65E5\u5FD7\u91CC\u9762\u7684\u5185\u5BB9\u627E\u5230\u4E86tail\u611F\u89C9\u597D\u4E0D\u9519\u5206\u4EAB\u7ED9\u5927\u5BB6</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;github.com/hpcloud/tail&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fileName <span class="token operator">:=</span> <span class="token string">&quot;./my.log&quot;</span>
    config <span class="token operator">:=</span> tail<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        ReOpen<span class="token punctuation">:</span>    <span class="token boolean">true</span><span class="token punctuation">,</span>                                 <span class="token comment">// \u91CD\u65B0\u6253\u5F00</span>
        Follow<span class="token punctuation">:</span>    <span class="token boolean">true</span><span class="token punctuation">,</span>                                 <span class="token comment">// \u662F\u5426\u8DDF\u968F</span>
        Location<span class="token punctuation">:</span>  <span class="token operator">&amp;</span>tail<span class="token punctuation">.</span>SeekInfo<span class="token punctuation">{</span>Offset<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> Whence<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u4ECE\u6587\u4EF6\u7684\u54EA\u4E2A\u5730\u65B9\u5F00\u59CB\u8BFB</span>
        MustExist<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                                <span class="token comment">// \u6587\u4EF6\u4E0D\u5B58\u5728\u4E0D\u62A5\u9519</span>
        Poll<span class="token punctuation">:</span>      <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    tails<span class="token punctuation">,</span> err <span class="token operator">:=</span> tail<span class="token punctuation">.</span><span class="token function">TailFile</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;tail file failed, err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> <span class="token punctuation">(</span>
        line <span class="token operator">*</span>tail<span class="token punctuation">.</span>Line
        ok   <span class="token builtin">bool</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        line<span class="token punctuation">,</span> ok <span class="token operator">=</span> <span class="token operator">&lt;-</span>tails<span class="token punctuation">.</span>Lines
        <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;tail file close reopen, filename:%s\\n&quot;</span><span class="token punctuation">,</span> tails<span class="token punctuation">.</span>Filename<span class="token punctuation">)</span>
            time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;line:&quot;</span><span class="token punctuation">,</span> line<span class="token punctuation">.</span>Text<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u540C\u7EA7\u76EE\u5F55\u4E0B\u9762\u5B9A\u4E49\u4E00\u4E2Amy.log\u6587\u4EF6\uFF0C\u5728\u6587\u4EF6\u91CC\u9762\u5199\u5165\u6587\u5B57\u6572\u4E0B\u56DE\u8F66\uFF0C\u5E76\u4E14\u4FDD\u5B58\u4E4B\u540E\uFF0C\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u7684\u83B7\u53D6\u5E76\u4E14\u6253\u5370\uFF0C\u53EF\u4EE5\u6839\u636E\u4E1A\u52A1\u9700\u8981\u5C31\u884C\u4FEE\u6539</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="76.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="78.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,6),k=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),f=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),_={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},h=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function g(q,w){const o=e("RouterLink"),t=e("ExternalLinkIcon");return i(),l("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[a(o,{to:"/Gomd_super/"},{default:c(()=>[k]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[f,n("a",_,[h,a(t)])])])])])}const x=p(r,[["render",g],["__file","77.html.vue"]]);export{x as default};
