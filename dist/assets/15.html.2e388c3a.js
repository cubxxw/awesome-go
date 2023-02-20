import{_ as i,r as o,o as l,c as u,a as n,b as a,w as t,e as s,d as k}from"./app.64dac66d.js";const d={},r=n("h1",{id:"\u5E76\u53D1\u5B89\u5168\u548C\u9501",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5E76\u53D1\u5B89\u5168\u548C\u9501","aria-hidden":"true"},"#"),s(" \u5E76\u53D1\u5B89\u5168\u548C\u9501")],-1),v={class:"table-of-contents"},m=s("1.1.1. \u4E92\u65A5\u9501"),b=s("1.1.2. \u8BFB\u5199\u4E92\u65A5\u9501"),f=s("END \u94FE\u63A5"),_=k(`<p>[toc]</p><p>\u6709\u65F6\u5019\u5728Go\u4EE3\u7801\u4E2D\u53EF\u80FD\u4F1A\u5B58\u5728\u591A\u4E2Agoroutine\u540C\u65F6\u64CD\u4F5C\u4E00\u4E2A\u8D44\u6E90\uFF08\u4E34\u754C\u533A\uFF09\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4F1A\u53D1\u751F\u7ADE\u6001\u95EE\u9898\uFF08\u6570\u636E\u7ADE\u6001\uFF09\u3002\u7C7B\u6BD4\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u4F8B\u5B50\u6709\u5341\u5B57\u8DEF\u53E3\u88AB\u5404\u4E2A\u65B9\u5411\u7684\u7684\u6C7D\u8F66\u7ADE\u4E89\uFF1B\u8FD8\u6709\u706B\u8F66\u4E0A\u7684\u536B\u751F\u95F4\u88AB\u8F66\u53A2\u91CC\u7684\u4EBA\u7ADE\u4E89\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> x <span class="token builtin">int64</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u6211\u4EEC\u5F00\u542F\u4E86\u4E24\u4E2Agoroutine\u53BB\u7D2F\u52A0\u53D8\u91CFx\u7684\u503C\uFF0C\u8FD9\u4E24\u4E2Agoroutine\u5728\u8BBF\u95EE\u548C\u4FEE\u6539x\u53D8\u91CF\u7684\u65F6\u5019\u5C31\u4F1A\u5B58\u5728\u6570\u636E\u7ADE\u4E89\uFF0C\u5BFC\u81F4\u6700\u540E\u7684\u7ED3\u679C\u4E0E\u671F\u5F85\u7684\u4E0D\u7B26\u3002</p><h3 id="_1-1-1-\u4E92\u65A5\u9501" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u4E92\u65A5\u9501" aria-hidden="true">#</a> 1.1.1. \u4E92\u65A5\u9501</h3><p>\u4E92\u65A5\u9501\u662F\u4E00\u79CD\u5E38\u7528\u7684\u63A7\u5236\u5171\u4EAB\u8D44\u6E90\u8BBF\u95EE\u7684\u65B9\u6CD5\uFF0C\u5B83\u80FD\u591F\u4FDD\u8BC1\u540C\u65F6\u53EA\u6709\u4E00\u4E2Agoroutine\u53EF\u4EE5\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90\u3002Go\u8BED\u8A00\u4E2D\u4F7F\u7528sync\u5305\u7684Mutex\u7C7B\u578B\u6765\u5B9E\u73B0\u4E92\u65A5\u9501\u3002 \u4F7F\u7528\u4E92\u65A5\u9501\u6765\u4FEE\u590D\u4E0A\u9762\u4EE3\u7801\u7684\u95EE\u9898\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> x <span class="token builtin">int64</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">var</span> lock sync<span class="token punctuation">.</span>Mutex

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u52A0\u9501</span>
        x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
        lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u89E3\u9501</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u4E92\u65A5\u9501\u80FD\u591F\u4FDD\u8BC1\u540C\u4E00\u65F6\u95F4\u6709\u4E14\u53EA\u6709\u4E00\u4E2Agoroutine\u8FDB\u5165\u4E34\u754C\u533A\uFF0C\u5176\u4ED6\u7684goroutine\u5219\u5728\u7B49\u5F85\u9501\uFF1B\u5F53\u4E92\u65A5\u9501\u91CA\u653E\u540E\uFF0C\u7B49\u5F85\u7684goroutine\u624D\u53EF\u4EE5\u83B7\u53D6\u9501\u8FDB\u5165\u4E34\u754C\u533A\uFF0C\u591A\u4E2Agoroutine\u540C\u65F6\u7B49\u5F85\u4E00\u4E2A\u9501\u65F6\uFF0C\u5524\u9192\u7684\u7B56\u7565\u662F\u968F\u673A\u7684\u3002</p><h3 id="_1-1-2-\u8BFB\u5199\u4E92\u65A5\u9501" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u8BFB\u5199\u4E92\u65A5\u9501" aria-hidden="true">#</a> 1.1.2. \u8BFB\u5199\u4E92\u65A5\u9501</h3><p>\u4E92\u65A5\u9501\u662F\u5B8C\u5168\u4E92\u65A5\u7684\uFF0C\u4F46\u662F\u6709\u5F88\u591A\u5B9E\u9645\u7684\u573A\u666F\u4E0B\u662F\u8BFB\u591A\u5199\u5C11\u7684\uFF0C\u5F53\u6211\u4EEC\u5E76\u53D1\u7684\u53BB\u8BFB\u53D6\u4E00\u4E2A\u8D44\u6E90\u4E0D\u6D89\u53CA\u8D44\u6E90\u4FEE\u6539\u7684\u65F6\u5019\u662F\u6CA1\u6709\u5FC5\u8981\u52A0\u9501\u7684\uFF0C\u8FD9\u79CD\u573A\u666F\u4E0B\u4F7F\u7528\u8BFB\u5199\u9501\u662F\u66F4\u597D\u7684\u4E00\u79CD\u9009\u62E9\u3002\u8BFB\u5199\u9501\u5728Go\u8BED\u8A00\u4E2D\u4F7F\u7528sync\u5305\u4E2D\u7684RWMutex\u7C7B\u578B\u3002</p><p>\u8BFB\u5199\u9501\u5206\u4E3A\u4E24\u79CD\uFF1A\u8BFB\u9501\u548C\u5199\u9501\u3002\u5F53\u4E00\u4E2Agoroutine\u83B7\u53D6\u8BFB\u9501\u4E4B\u540E\uFF0C\u5176\u4ED6\u7684goroutine\u5982\u679C\u662F\u83B7\u53D6\u8BFB\u9501\u4F1A\u7EE7\u7EED\u83B7\u5F97\u9501\uFF0C\u5982\u679C\u662F\u83B7\u53D6\u5199\u9501\u5C31\u4F1A\u7B49\u5F85\uFF1B\u5F53\u4E00\u4E2Agoroutine\u83B7\u53D6\u5199\u9501\u4E4B\u540E\uFF0C\u5176\u4ED6\u7684goroutine\u65E0\u8BBA\u662F\u83B7\u53D6\u8BFB\u9501\u8FD8\u662F\u5199\u9501\u90FD\u4F1A\u7B49\u5F85\u3002</p><p>\u8BFB\u5199\u9501\u793A\u4F8B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
    x      <span class="token builtin">int64</span>
    wg     sync<span class="token punctuation">.</span>WaitGroup
    lock   sync<span class="token punctuation">.</span>Mutex
    rwlock sync<span class="token punctuation">.</span>RWMutex
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// lock.Lock()   // \u52A0\u4E92\u65A5\u9501</span>
    rwlock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u52A0\u5199\u9501</span>
    x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span> <span class="token comment">// \u5047\u8BBE\u8BFB\u64CD\u4F5C\u8017\u65F610\u6BEB\u79D2</span>
    rwlock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                   <span class="token comment">// \u89E3\u5199\u9501</span>
    <span class="token comment">// lock.Unlock()                     // \u89E3\u4E92\u65A5\u9501</span>
    wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// lock.Lock()                  // \u52A0\u4E92\u65A5\u9501</span>
    rwlock<span class="token punctuation">.</span><span class="token function">RLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token comment">// \u52A0\u8BFB\u9501</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span> <span class="token comment">// \u5047\u8BBE\u8BFB\u64CD\u4F5C\u8017\u65F61\u6BEB\u79D2</span>
    rwlock<span class="token punctuation">.</span><span class="token function">RUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment">// \u89E3\u8BFB\u9501</span>
    <span class="token comment">// lock.Unlock()                // \u89E3\u4E92\u65A5\u9501</span>
    wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>end<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u8BFB\u5199\u9501\u975E\u5E38\u9002\u5408\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\uFF0C\u5982\u679C\u8BFB\u548C\u5199\u7684\u64CD\u4F5C\u5DEE\u522B\u4E0D\u5927\uFF0C\u8BFB\u5199\u9501\u7684\u4F18\u52BF\u5C31\u53D1\u6325\u4E0D\u51FA\u6765\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="14.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="16.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,17),g=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),h={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),y=s(")"),x=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),E={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},L=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function W(A,C){const p=o("router-link"),c=o("RouterLink"),e=o("ExternalLinkIcon");return l(),u("div",null,[r,n("nav",v,[n("ul",null,[n("li",null,[a(p,{to:"#_1-1-1-\u4E92\u65A5\u9501"},{default:t(()=>[m]),_:1})]),n("li",null,[a(p,{to:"#_1-1-2-\u8BFB\u5199\u4E92\u65A5\u9501"},{default:t(()=>[b]),_:1})]),n("li",null,[a(p,{to:"#end-\u94FE\u63A5"},{default:t(()=>[f]),_:1})])])]),_,n("ul",null,[n("li",null,[n("p",null,[a(c,{to:"/Gomd_super/"},{default:t(()=>[g]),_:1})])]),n("li",null,[n("p",null,[n("a",h,[w,a(e)]),y])]),n("li",null,[n("p",null,[x,n("a",E,[L,a(e)])])])])])}const D=i(d,[["render",W],["__file","15.html.vue"]]);export{D as default};
