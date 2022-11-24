import{_ as i,r as e,o as c,c as u,a as n,b as a,w as t,e as s,d as r}from"./app.9b66d8ca.js";const d={},k=n("h1",{id:"goroutine\u6C60",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#goroutine\u6C60","aria-hidden":"true"},"#"),s(" Goroutine\u6C60")],-1),m={class:"table-of-contents"},v=s("1.1.1. worker pool\uFF08goroutine\u6C60\uFF09"),b=s("END \u94FE\u63A5"),h=r(`<p>[toc]</p><h3 id="_1-1-1-worker-pool-goroutine\u6C60" tabindex="-1"><a class="header-anchor" href="#_1-1-1-worker-pool-goroutine\u6C60" aria-hidden="true">#</a> 1.1.1. worker pool\uFF08goroutine\u6C60\uFF09</h3><ul><li>\u672C\u8D28\u4E0A\u662F\u751F\u4EA7\u8005\u6D88\u8D39\u8005\u6A21\u578B</li><li>\u53EF\u4EE5\u6709\u6548\u63A7\u5236goroutine\u6570\u91CF\uFF0C\u9632\u6B62\u66B4\u6DA8</li><li>\u9700\u6C42\uFF1A <ul><li>\u8BA1\u7B97\u4E00\u4E2A\u6570\u5B57\u7684\u5404\u4E2A\u4F4D\u6570\u4E4B\u548C\uFF0C\u4F8B\u5982\u6570\u5B57123\uFF0C\u7ED3\u679C\u4E3A1+2+3=6</li><li>\u968F\u673A\u751F\u6210\u6570\u5B57\u8FDB\u884C\u8BA1\u7B97</li></ul></li><li>\u63A7\u5236\u53F0\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A</li></ul><p><img src="https://s2.loli.net/2022/04/10/A9DCygv1YtTZ7Qd.png" alt="img"></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;math/rand&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Job <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// id</span>
    Id <span class="token builtin">int</span>
    <span class="token comment">// \u9700\u8981\u8BA1\u7B97\u7684\u968F\u673A\u6570</span>
    RandNum <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Result <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u5FC5\u987B\u4F20\u5BF9\u8C61\u5B9E\u4F8B</span>
    job <span class="token operator">*</span>Job
    <span class="token comment">// \u6C42\u548C</span>
    sum <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9700\u89812\u4E2A\u7BA1\u9053</span>
    <span class="token comment">// 1.job\u7BA1\u9053</span>
    jobChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>Job<span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.\u7ED3\u679C\u7BA1\u9053</span>
    resultChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>
    <span class="token comment">// 3.\u521B\u5EFA\u5DE5\u4F5C\u6C60</span>
    <span class="token function">createPool</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">,</span> jobChan<span class="token punctuation">,</span> resultChan<span class="token punctuation">)</span>
    <span class="token comment">// 4.\u5F00\u4E2A\u6253\u5370\u7684\u534F\u7A0B</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>resultChan <span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u904D\u5386\u7ED3\u679C\u7BA1\u9053\u6253\u5370</span>
        <span class="token keyword">for</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> resultChan <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;job id:%v randnum:%v result:%d\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>job<span class="token punctuation">.</span>Id<span class="token punctuation">,</span>
                result<span class="token punctuation">.</span>job<span class="token punctuation">.</span>RandNum<span class="token punctuation">,</span> result<span class="token punctuation">.</span>sum<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span>resultChan<span class="token punctuation">)</span>
    <span class="token keyword">var</span> id <span class="token builtin">int</span>
    <span class="token comment">// \u5FAA\u73AF\u521B\u5EFAjob\uFF0C\u8F93\u5165\u5230\u7BA1\u9053</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        id<span class="token operator">++</span>
        <span class="token comment">// \u751F\u6210\u968F\u673A\u6570</span>
        r_num <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        job <span class="token operator">:=</span> <span class="token operator">&amp;</span>Job<span class="token punctuation">{</span>
            Id<span class="token punctuation">:</span>      id<span class="token punctuation">,</span>
            RandNum<span class="token punctuation">:</span> r_num<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        jobChan <span class="token operator">&lt;-</span> job
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA\u5DE5\u4F5C\u6C60</span>
<span class="token comment">// \u53C2\u65701\uFF1A\u5F00\u51E0\u4E2A\u534F\u7A0B</span>
<span class="token keyword">func</span> <span class="token function">createPool</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">,</span> jobChan <span class="token keyword">chan</span> <span class="token operator">*</span>Job<span class="token punctuation">,</span> resultChan <span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6839\u636E\u5F00\u534F\u7A0B\u4E2A\u6570\uFF0C\u53BB\u8DD1\u8FD0\u884C</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>jobChan <span class="token keyword">chan</span> <span class="token operator">*</span>Job<span class="token punctuation">,</span> resultChan <span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6267\u884C\u8FD0\u7B97</span>
            <span class="token comment">// \u904D\u5386job\u7BA1\u9053\u6240\u6709\u6570\u636E\uFF0C\u8FDB\u884C\u76F8\u52A0</span>
            <span class="token keyword">for</span> job <span class="token operator">:=</span> <span class="token keyword">range</span> jobChan <span class="token punctuation">{</span>
                <span class="token comment">// \u968F\u673A\u6570\u63A5\u8FC7\u6765</span>
                r_num <span class="token operator">:=</span> job<span class="token punctuation">.</span>RandNum
                <span class="token comment">// \u968F\u673A\u6570\u6BCF\u4E00\u4F4D\u76F8\u52A0</span>
                <span class="token comment">// \u5B9A\u4E49\u8FD4\u56DE\u503C</span>
                <span class="token keyword">var</span> sum <span class="token builtin">int</span>
                <span class="token keyword">for</span> r_num <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                    tmp <span class="token operator">:=</span> r_num <span class="token operator">%</span> <span class="token number">10</span>
                    sum <span class="token operator">+=</span> tmp
                    r_num <span class="token operator">/=</span> <span class="token number">10</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// \u60F3\u8981\u7684\u7ED3\u679C\u662FResult</span>
                r <span class="token operator">:=</span> <span class="token operator">&amp;</span>Result<span class="token punctuation">{</span>
                    job<span class="token punctuation">:</span> job<span class="token punctuation">,</span>
                    sum<span class="token punctuation">:</span> sum<span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//\u8FD0\u7B97\u7ED3\u679C\u6254\u5230\u7BA1\u9053</span>
                resultChan <span class="token operator">&lt;-</span> r
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>jobChan<span class="token punctuation">,</span> resultChan<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="11.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="13.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,7),_=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),f={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),y=s(")"),g=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),C={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},j=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function R(x,E){const o=e("router-link"),l=e("RouterLink"),p=e("ExternalLinkIcon");return c(),u("div",null,[k,n("nav",m,[n("ul",null,[n("li",null,[a(o,{to:"#_1-1-1-worker-pool-goroutine\u6C60"},{default:t(()=>[v]),_:1})]),n("li",null,[a(o,{to:"#end-\u94FE\u63A5"},{default:t(()=>[b]),_:1})])])]),h,n("ul",null,[n("li",null,[n("p",null,[a(l,{to:"/Gomd_super/"},{default:t(()=>[_]),_:1})])]),n("li",null,[n("p",null,[n("a",f,[w,a(p)]),y])]),n("li",null,[n("p",null,[g,n("a",C,[j,a(p)])])])])])}const q=i(d,[["render",R],["__file","12.html.vue"]]);export{q as default};
