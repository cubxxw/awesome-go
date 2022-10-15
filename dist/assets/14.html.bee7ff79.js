import{_ as l,r as t,o as i,c as u,a as n,b as a,w as e,d as s,e as d}from"./app.f9b8c60c.js";const r={},k=n("h1",{id:"select",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#select","aria-hidden":"true"},"#"),s(" select")],-1),v={class:"table-of-contents"},m=s("1.1.1. select\u591A\u8DEF\u590D\u7528"),b=s("END \u94FE\u63A5"),h=d(`<p>[toc]</p><h3 id="_1-1-1-select\u591A\u8DEF\u590D\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-1-select\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a> 1.1.1. select\u591A\u8DEF\u590D\u7528</h3><p>\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u6211\u4EEC\u9700\u8981\u540C\u65F6\u4ECE\u591A\u4E2A\u901A\u9053\u63A5\u6536\u6570\u636E\u3002\u901A\u9053\u5728\u63A5\u6536\u6570\u636E\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\u53EF\u4EE5\u63A5\u6536\u5C06\u4F1A\u53D1\u751F\u963B\u585E\u3002\u4F60\u4E5F\u8BB8\u4F1A\u5199\u51FA\u5982\u4E0B\u4EE3\u7801\u4F7F\u7528\u904D\u5386\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">for</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5C1D\u8BD5\u4ECEch1\u63A5\u6536\u503C</span>
    data<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1
    <span class="token comment">// \u5C1D\u8BD5\u4ECEch2\u63A5\u6536\u503C</span>
    data<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch2
    \u2026
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u867D\u7136\u53EF\u4EE5\u5B9E\u73B0\u4ECE\u591A\u4E2A\u901A\u9053\u63A5\u6536\u503C\u7684\u9700\u6C42\uFF0C\u4F46\u662F\u8FD0\u884C\u6027\u80FD\u4F1A\u5DEE\u5F88\u591A\u3002\u4E3A\u4E86\u5E94\u5BF9\u8FD9\u79CD\u573A\u666F\uFF0CGo\u5185\u7F6E\u4E86select\u5173\u952E\u5B57\uFF0C\u53EF\u4EE5\u540C\u65F6\u54CD\u5E94\u591A\u4E2A\u901A\u9053\u7684\u64CD\u4F5C\u3002</p><p>select\u7684\u4F7F\u7528\u7C7B\u4F3C\u4E8Eswitch\u8BED\u53E5\uFF0C\u5B83\u6709\u4E00\u7CFB\u5217case\u5206\u652F\u548C\u4E00\u4E2A\u9ED8\u8BA4\u7684\u5206\u652F\u3002\u6BCF\u4E2Acase\u4F1A\u5BF9\u5E94\u4E00\u4E2A\u901A\u9053\u7684\u901A\u4FE1\uFF08\u63A5\u6536\u6216\u53D1\u9001\uFF09\u8FC7\u7A0B\u3002select\u4F1A\u4E00\u76F4\u7B49\u5F85\uFF0C\u76F4\u5230\u67D0\u4E2Acase\u7684\u901A\u4FE1\u64CD\u4F5C\u5B8C\u6210\u65F6\uFF0C\u5C31\u4F1A\u6267\u884Ccase\u5206\u652F\u5BF9\u5E94\u7684\u8BED\u53E5\u3002\u5177\u4F53\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    select {
    case &lt;-chan1:
       // \u5982\u679Cchan1\u6210\u529F\u8BFB\u5230\u6570\u636E\uFF0C\u5219\u8FDB\u884C\u8BE5case\u5904\u7406\u8BED\u53E5
    case chan2 &lt;- 1:
       // \u5982\u679C\u6210\u529F\u5411chan2\u5199\u5165\u6570\u636E\uFF0C\u5219\u8FDB\u884C\u8BE5case\u5904\u7406\u8BED\u53E5
    default:
       // \u5982\u679C\u4E0A\u9762\u90FD\u6CA1\u6709\u6210\u529F\uFF0C\u5219\u8FDB\u5165default\u5904\u7406\u6D41\u7A0B
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>select\u53EF\u4EE5\u540C\u65F6\u76D1\u542C\u4E00\u4E2A\u6216\u591A\u4E2Achannel\uFF0C\u76F4\u5230\u5176\u4E2D\u4E00\u4E2Achannel ready</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test1</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
   ch <span class="token operator">&lt;-</span> <span class="token string">&quot;test1&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">test2</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
   ch <span class="token operator">&lt;-</span> <span class="token string">&quot;test2&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 2\u4E2A\u7BA1\u9053</span>
   output1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
   output2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
   <span class="token comment">// \u8DD12\u4E2A\u5B50\u534F\u7A0B\uFF0C\u5199\u6570\u636E</span>
   <span class="token keyword">go</span> <span class="token function">test1</span><span class="token punctuation">(</span>output1<span class="token punctuation">)</span>
   <span class="token keyword">go</span> <span class="token function">test2</span><span class="token punctuation">(</span>output2<span class="token punctuation">)</span>
   <span class="token comment">// \u7528select\u76D1\u63A7</span>
   <span class="token keyword">select</span> <span class="token punctuation">{</span>
   <span class="token keyword">case</span> s1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>output1<span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1=&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
   <span class="token keyword">case</span> s2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>output2<span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2=&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5982\u679C\u591A\u4E2Achannel\u540C\u65F6ready\uFF0C\u5219\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u6267\u884C</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u521B\u5EFA2\u4E2A\u7BA1\u9053</span>
   int_chan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
   string_chan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
   <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//time.Sleep(2 * time.Second)</span>
      int_chan <span class="token operator">&lt;-</span> <span class="token number">1</span>
   <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      string_chan <span class="token operator">&lt;-</span> <span class="token string">&quot;hello&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">select</span> <span class="token punctuation">{</span>
   <span class="token keyword">case</span> value <span class="token operator">:=</span> <span class="token operator">&lt;-</span>int_chan<span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;int:&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
   <span class="token keyword">case</span> value <span class="token operator">:=</span> <span class="token operator">&lt;-</span>string_chan<span class="token punctuation">:</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;string:&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main\u7ED3\u675F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53EF\u4EE5\u7528\u4E8E\u5224\u65AD\u7BA1\u9053\u662F\u5426\u5B58\u6EE1</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5224\u65AD\u7BA1\u9053\u6709\u6CA1\u6709\u5B58\u6EE1</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u521B\u5EFA\u7BA1\u9053</span>
   output1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
   <span class="token comment">// \u5B50\u534F\u7A0B\u5199\u6570\u636E</span>
   <span class="token keyword">go</span> <span class="token function">write</span><span class="token punctuation">(</span>output1<span class="token punctuation">)</span>
   <span class="token comment">// \u53D6\u6570\u636E</span>
   <span class="token keyword">for</span> s <span class="token operator">:=</span> <span class="token keyword">range</span> output1 <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;res:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
      time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">write</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">{</span>
      <span class="token keyword">select</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5199\u6570\u636E</span>
      <span class="token keyword">case</span> ch <span class="token operator">&lt;-</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;write hello&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;channel full&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond <span class="token operator">*</span> <span class="token number">500</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="13.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="15.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,15),f=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),g={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},_=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),w=s(")"),y=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),q={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},x=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function E(S,C){const p=t("router-link"),c=t("RouterLink"),o=t("ExternalLinkIcon");return i(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(p,{to:"#_1-1-1-select\u591A\u8DEF\u590D\u7528"},{default:e(()=>[m]),_:1})]),n("li",null,[a(p,{to:"#end-\u94FE\u63A5"},{default:e(()=>[b]),_:1})])])]),h,n("ul",null,[n("li",null,[n("p",null,[a(c,{to:"/Gomd_super/"},{default:e(()=>[f]),_:1})])]),n("li",null,[n("p",null,[n("a",g,[_,a(o)]),w])]),n("li",null,[n("p",null,[y,n("a",q,[x,a(o)])])])])])}const N=l(r,[["render",E],["__file","14.html.vue"]]);export{N as default};
