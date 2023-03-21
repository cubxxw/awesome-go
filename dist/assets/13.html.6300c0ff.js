import{_ as l,r as e,o as p,c as u,a as n,b as a,w as t,e as s,d}from"./app.cc04f0ba.js";const r={},m=n("h1",{id:"\u5B9A\u65F6\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B9A\u65F6\u5668","aria-hidden":"true"},"#"),s(" \u5B9A\u65F6\u5668")],-1),v={class:"table-of-contents"},k=s("1.1.1. \u5B9A\u65F6\u5668"),b=s("END \u94FE\u63A5"),f=d(`<p>[toc]</p><h3 id="_1-1-1-\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u5B9A\u65F6\u5668" aria-hidden="true">#</a> 1.1.1. \u5B9A\u65F6\u5668</h3><ul><li>Timer\uFF1A\u65F6\u95F4\u5230\u4E86\uFF0C\u6267\u884C\u53EA\u6267\u884C1\u6B21</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.timer\u57FA\u672C\u4F7F\u7528</span>
    <span class="token comment">//timer1 := time.NewTimer(2 * time.Second)</span>
    <span class="token comment">//t1 := time.Now()</span>
    <span class="token comment">//fmt.Printf(&quot;t1:%v\\n&quot;, t1)</span>
    <span class="token comment">//t2 := &lt;-timer1.C</span>
    <span class="token comment">//fmt.Printf(&quot;t2:%v\\n&quot;, t2)</span>

    <span class="token comment">// 2.\u9A8C\u8BC1timer\u53EA\u80FD\u54CD\u5E941\u6B21</span>
    <span class="token comment">//timer2 := time.NewTimer(time.Second)</span>
    <span class="token comment">//for {</span>
    <span class="token comment">// &lt;-timer2.C</span>
    <span class="token comment">// fmt.Println(&quot;\u65F6\u95F4\u5230&quot;)</span>
    <span class="token comment">//}</span>

    <span class="token comment">// 3.timer\u5B9E\u73B0\u5EF6\u65F6\u7684\u529F\u80FD</span>
    <span class="token comment">//(1)</span>
    <span class="token comment">//time.Sleep(time.Second)</span>
    <span class="token comment">//(2)</span>
    <span class="token comment">//timer3 := time.NewTimer(2 * time.Second)</span>
    <span class="token comment">//&lt;-timer3.C</span>
    <span class="token comment">//fmt.Println(&quot;2\u79D2\u5230&quot;)</span>
    <span class="token comment">//(3)</span>
    <span class="token comment">//&lt;-time.After(2*time.Second)</span>
    <span class="token comment">//fmt.Println(&quot;2\u79D2\u5230&quot;)</span>

    <span class="token comment">// 4.\u505C\u6B62\u5B9A\u65F6\u5668</span>
    <span class="token comment">//timer4 := time.NewTimer(2 * time.Second)</span>
    <span class="token comment">//go func() {</span>
    <span class="token comment">// &lt;-timer4.C</span>
    <span class="token comment">// fmt.Println(&quot;\u5B9A\u65F6\u5668\u6267\u884C\u4E86&quot;)</span>
    <span class="token comment">//}()</span>
    <span class="token comment">//b := timer4.Stop()</span>
    <span class="token comment">//if b {</span>
    <span class="token comment">// fmt.Println(&quot;timer4\u5DF2\u7ECF\u5173\u95ED&quot;)</span>
    <span class="token comment">//}</span>

    <span class="token comment">// 5.\u91CD\u7F6E\u5B9A\u65F6\u5668</span>
    timer5 <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    timer5<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>timer5<span class="token punctuation">.</span>C<span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Ticker\uFF1A\u65F6\u95F4\u5230\u4E86\uFF0C\u591A\u6B21\u6267\u884C</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.\u83B7\u53D6ticker\u5BF9\u8C61</span>
    ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    i <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token comment">// \u5B50\u534F\u7A0B</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            <span class="token comment">//&lt;-ticker.C</span>
            i<span class="token operator">++</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>ticker<span class="token punctuation">.</span>C<span class="token punctuation">)</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u505C\u6B62</span>
                ticker<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="12.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="14.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,8),_=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),h={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),w=s(")"),q=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),y={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},C=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function N(S,x){const i=e("router-link"),c=e("RouterLink"),o=e("ExternalLinkIcon");return p(),u("div",null,[m,n("nav",v,[n("ul",null,[n("li",null,[a(i,{to:"#_1-1-1-\u5B9A\u65F6\u5668"},{default:t(()=>[k]),_:1})]),n("li",null,[a(i,{to:"#end-\u94FE\u63A5"},{default:t(()=>[b]),_:1})])])]),f,n("ul",null,[n("li",null,[n("p",null,[a(c,{to:"/Gomd_super/"},{default:t(()=>[_]),_:1})])]),n("li",null,[n("p",null,[n("a",h,[g,a(o)]),w])]),n("li",null,[n("p",null,[q,n("a",y,[C,a(o)])])])])])}const P=l(r,[["render",N],["__file","13.html.vue"]]);export{P as default};
