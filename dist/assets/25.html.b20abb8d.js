import{_ as o,r as i,o as c,c as u,a as n,b as a,w as e,e as s,d as r}from"./app.9d39be69.js";const d={},k=n("h1",{id:"\u961F\u5217",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u961F\u5217","aria-hidden":"true"},"#"),s(" \u961F\u5217")],-1),v={class:"table-of-contents"},m=s("\u961F\u5217\u7684\u4F7F\u7528"),b=s("\u73AF\u5F62\u961F\u5217"),h=s("END \u94FE\u63A5"),f=n("p",null,"[toc]",-1),g=s("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),q={href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"},w=s("https://golang.org/"),y=n("blockquote",null,[n("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),_=s("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),x={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},P=s("https://github.com/3293172751/golang-rearn"),A=n("hr",null,null,-1),S=n("p",null,[n("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),s("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),E=s("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),Q={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},C=s("http://nsddd.top"),B=n("h2",{id:"\u961F\u5217\u7684\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u961F\u5217\u7684\u4F7F\u7528","aria-hidden":"true"},"#"),s(" \u961F\u5217\u7684\u4F7F\u7528")],-1),z={class:"custom-container details"},N=n("summary",null,"\u8B66\u544A\u26A0\uFE0F",-1),T=s("\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u76F8\u5173\u79FB\u6B65\u5230"),R={href:"https://github.com/3293172751/LeetCode/",target:"_blank",rel:"noopener noreferrer"},D=s("\u7B97\u6CD5\u548C\u6570\u636E\u7ED3\u6784\u4ED3\u5E93"),I=n("p",null,"\u559C\u6B22\u7684\u8BDD\uFF0C\u70B9\u8D5E\u6536\u85CF\uFF01\u{1F525}",-1),X=r(`<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*************************************************************************
    &gt; File Name: queue.go
    &gt; Author: smile
    &gt; Mail: 3293172751nss@gmail.com 
    &gt; Created Time: Sun 03 Apr 2022 04:40:39 PM CST
 ************************************************************************/</span>

 <span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
    <span class="token string">&quot;errors&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u4F7F\u7528\u4E00\u4E2A\u7ED3\u6784\u4F53\u7BA1\u7406\u6570\u636E</span>
<span class="token keyword">type</span> Queue <span class="token keyword">struct</span><span class="token punctuation">{</span>
    maxSize <span class="token builtin">int</span> 
    array <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token comment">//\u6570\u7EC4</span>
	front <span class="token builtin">int</span> <span class="token comment">//\u8868\u793A\u6307\u5411\u961F\u5217\u6700\u524D\u9762</span>
    rear <span class="token builtin">int</span> <span class="token comment">//\u8868\u793A\u6307\u5411\u961F\u5217\u6700\u540E\u9762</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u65B9\u6CD5\u4E00\uFF1A \u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Queue<span class="token punctuation">)</span> <span class="token function">AddQueue</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u53EF\u80FD\u6709\u9519\u8BEF</span>

    <span class="token comment">//\u5148\u5224\u65AD\u961F\u6EE1</span>
    <span class="token keyword">if</span> this<span class="token punctuation">.</span>rear <span class="token operator">==</span> this<span class="token punctuation">.</span>maxSize <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">{</span>
        <span class="token comment">//\u63D0\u9192\uFF01\uFF01\uFF01rear\u662F\u961F\u5217\u7684\u5C3E\u90E8\uFF08\u542B\u961F\u5217\u5C3E\u90E8\u5143\u7D20--\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF09</span>
        <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;queue full&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    this<span class="token punctuation">.</span>rear<span class="token operator">++</span>      <span class="token comment">//rear\u540E\u79FB</span>
    this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token keyword">return</span>
    
<span class="token punctuation">}</span>

<span class="token comment">//\u663E\u793A\u961F\u5217</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Queue<span class="token punctuation">)</span> <span class="token function">ShowQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u627E\u5230\u961F\u9996\uFF0C\u904D\u5386\u5230\u961F\u5C3E</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u961F\u5217\u5F53\u524D\u7684\u7684\u60C5\u51B5\u662F\uFF1A&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> this<span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span> this<span class="token punctuation">.</span>rear<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
        <span class="token comment">//frout\u662F\u4E0D\u5305\u542B\u961F\u9996\u7684\u5143\u7D20\u7684</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;arrary[%d]=d\\t&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>this<span class="token punctuation">.</span>array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53D6\u51FA\u5143\u7D20</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Queue<span class="token punctuation">)</span> <span class="token function">GetQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">,</span>err <span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5148\u5224\u65AD\u961F\u5217\u662F\u5426\u4E3A\u7A7A</span>
    <span class="token keyword">if</span> this<span class="token punctuation">.</span>rear <span class="token operator">==</span> this<span class="token punctuation">.</span>front<span class="token punctuation">{</span>
        <span class="token comment">//\u5BF9\u7A7A</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;Queue empty&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    this<span class="token punctuation">.</span>front<span class="token operator">++</span>      <span class="token comment">//\u5934\u540E\u79FB\u4E00\u4F4D</span>
    val <span class="token operator">=</span> this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>front<span class="token punctuation">]</span>
    <span class="token keyword">return</span>               <span class="token comment">//\u6216\u8005return val,err</span>
<span class="token punctuation">}</span>



<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token comment">//\u5148\u521B\u5EFA\u4E00\u4E2A\u961F\u5217</span>
    queue <span class="token operator">:=</span> <span class="token operator">&amp;</span>Queue<span class="token punctuation">{</span>
        maxSize <span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        front <span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
        rear <span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> key <span class="token builtin">string</span> 
    <span class="token keyword">var</span> val <span class="token builtin">int</span>
    <span class="token keyword">for</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217&quot;</span><span class="token punctuation">)</span>
        
    
        fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span>
        <span class="token keyword">switch</span> key<span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570&quot;</span><span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>val<span class="token punctuation">)</span>
            err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">AddQueue</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
                  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u52A0\u5165\u961F\u5217\u6210\u529F&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
       <span class="token keyword">case</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">:</span>         <span class="token comment">//\u53D6\u51FA\u5143\u7D20</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span>
            val<span class="token punctuation">,</span>err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">GetQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u51FA\u961F\u5217\u6210\u529Fval = &quot;</span><span class="token punctuation">,</span>val<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
       <span class="token keyword">case</span> <span class="token string">&quot;show&quot;</span><span class="token punctuation">:</span>
              queue<span class="token punctuation">.</span><span class="token function">ShowQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token keyword">case</span> <span class="token string">&quot;exit&quot;</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>   <span class="token comment">//\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><p><img src="https://s2.loli.net/2022/04/03/qYoNJkM75jub1DU.png" alt="image-20220403170952129"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\chapter18\\tcpdemo\\server&gt; go run .\\a.go
1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
add
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
2
\u52A0\u5165\u961F\u5217\u6210\u529F
1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
add
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
4
\u52A0\u5165\u961F\u5217\u6210\u529F
1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
add
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
q
\u52A0\u5165\u961F\u5217\u6210\u529F
1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
1
\u52A0\u5165\u961F\u5217\u6210\u529F
1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
add
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
234
\u52A0\u5165\u961F\u5217\u6210\u529F
1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
show
\u961F\u5217\u5F53\u524D\u7684\u7684\u60C5\u51B5\u662F\uFF1A
arrary[0]=d     %!(EXTRA int=4)arrary[1]=d      %!(EXTRA int=4)arrary[2]=d      %!(EXTRA int=4)arrary[3]=d      %!(EXTRA int=4)arrary[4]=d      %!(EXTRA int=4)1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
get 1
get
\u53D6\u51FA\u961F\u5217\u6210\u529Fval =  2
1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
get
\u53D6\u51FA\u961F\u5217\u6210\u529Fval =  4
1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
show
\u961F\u5217\u5F53\u524D\u7684\u7684\u60C5\u51B5\u662F\uFF1A
arrary[2]=d     %!(EXTRA int=4)arrary[3]=d      %!(EXTRA int=4)arrary[4]=d      %!(EXTRA int=4)1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230 \u961F\u5217
2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4E0A\u9762\u7684\u961F\u5217\u5E76\u6CA1\u6709\u5BF9\u7A7A\u95F4\u8FDB\u884C\u6709\u6548\u7684\u5229\u7528\uFF0C\u5982\u679C\u5B9E\u73B0\u73AF\u5F62\u961F\u5217\uFF01\uFF01</strong></p><h2 id="\u73AF\u5F62\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5F62\u961F\u5217" aria-hidden="true">#</a> \u73AF\u5F62\u961F\u5217</h2><blockquote><p>\u961F\u5C3E\u7D22\u5F15\u7684\u4E0B\u4E00\u4E2A\u5934\u7D22\u5F15\u65F6\u8868\u793A\u961F\u6EE1\u3002<strong>\u5373\u961F\u5217\u5BB9\u91CF\u7A7A\u51FA\u4E00\u4E2A\u4F5C\u4E3A\u7EA6\u5B9A\uFF0C\u8FD9\u4E2A\u5728\u505A\u5224\u65AD\u7684\u65F6\u5019\u8981\u6CE8\u610F\uFF08tail+1)%maxSize == head \u8868\u793A\u6EE1</strong></p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> CircleQueue <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	maxSize <span class="token builtin">int</span> <span class="token comment">//4</span>
	array <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span> 
	head <span class="token builtin">int</span> <span class="token comment">//\u6307\u5411\u961F\u5217\u9996\u90E8</span>
	tail <span class="token builtin">int</span> <span class="token comment">//\u6307\u5411\u961F\u5217\u5C3E\u90E8</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5165\u961F\u5217 AddQueue       \u51FA\u961F\u5217 GetQueue(popQueue)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">Push</span><span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bool = &quot;</span><span class="token punctuation">,</span>this<span class="token punctuation">.</span><span class="token function">IsFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">//\u5165\u961F\u5217</span>
	<span class="token keyword">if</span> this<span class="token punctuation">.</span><span class="token function">IsFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;queue full&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">//\u961F\u5217\u6EE1\u4E86</span>
	<span class="token punctuation">}</span>

	this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>tail<span class="token punctuation">]</span> <span class="token operator">=</span> val  <span class="token comment">//\u628A\u503C\u7ED9\u5C3E\u90E8</span>
	<span class="token comment">//\u6B64\u65F6this.tall\u5F80\u540E\u79FB\u4F4D</span>
	this<span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>tail<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>this<span class="token punctuation">.</span>maxSize
	<span class="token keyword">return</span> 

<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>val <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//\u51FA\u961F\u5217\uFF0C\u961F\u5217\u7A7A\u6CA1\u529E\u6CD5\u51FA</span>
	 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;bool = &quot;</span><span class="token punctuation">,</span>this<span class="token punctuation">.</span><span class="token function">IsEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> this<span class="token punctuation">.</span><span class="token function">IsEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span>errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;queue empty&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//\u53D6\u51FA</span>
	val <span class="token operator">=</span> this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>head<span class="token punctuation">]</span>
	this<span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>head <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>this<span class="token punctuation">.</span>maxSize
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5224\u65AD\u73AF\u5F62\u961F\u5217\u4E3A\u6EE1\u4E86\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">IsFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>tail <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span>this<span class="token punctuation">.</span>maxSize <span class="token operator">==</span> this<span class="token punctuation">.</span>head
<span class="token punctuation">}</span>

<span class="token comment">//\u5224\u65AD\u73AF\u5F62\u961F\u5217\u662F\u5426\u7A7A\u7684</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">IsEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> this<span class="token punctuation">.</span>tail <span class="token operator">==</span> this<span class="token punctuation">.</span>head
<span class="token punctuation">}</span>

<span class="token comment">//\u53D6\u51FA\u73AF\u5F62\u961F\u5217\u6709\u591A\u5C11\u4E2A\u5143\u7D20</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>tail <span class="token operator">+</span> this<span class="token punctuation">.</span>maxSize <span class="token operator">-</span> this<span class="token punctuation">.</span>head<span class="token punctuation">)</span> <span class="token operator">%</span> this<span class="token punctuation">.</span>maxSize
	<span class="token comment">//\u7531\u4E8E\u662F\u73AF\u5F62\u961F\u5217\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u4F7F\u7528\u7684\u65F6\u5019\u8981\u5148\u52A0\u4E0A\u961F\u5217\u7684\u5BB9\u91CF\uFF0C\u51CF\u53BB\u5934\u90E8\uFF0C\u6700\u540E\u8981%%%%%</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u663E\u793A\u961F\u5217</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">ListQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5224\u65AD\u4E3A\u7A7A\uFF0C\u7A7A\u7684\u8BDD\u5C31\u76F4\u63A5\u8DF3\u51FA</span>
	<span class="token comment">//\u53D6\u51FA\u5F53\u524D\u6709\u591A\u5C11\u5143\u7D20</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u73AF\u5F62\u961F\u5217\u60C5\u51B5\u5982\u4E0B\uFF1A&quot;</span><span class="token punctuation">)</span>
	size <span class="token operator">:=</span> this<span class="token punctuation">.</span><span class="token function">Size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u961F\u5217\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	temp <span class="token operator">:=</span> this<span class="token punctuation">.</span>head
	<span class="token keyword">for</span> i <span class="token operator">:=</span> this<span class="token punctuation">.</span>head<span class="token punctuation">;</span>i<span class="token operator">&lt;</span>size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;aee[%d = %d\\t&quot;</span><span class="token punctuation">,</span>temp<span class="token punctuation">,</span>this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>head<span class="token punctuation">]</span><span class="token punctuation">)</span>
		temp <span class="token operator">=</span> <span class="token punctuation">(</span>temp <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>this<span class="token punctuation">.</span>maxSize
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u83B7\u53D6\u961F\u5934\u5143\u7D20</span>
<span class="token keyword">func</span>  <span class="token punctuation">(</span>this <span class="token operator">*</span>CircleQueue<span class="token punctuation">)</span> <span class="token function">GetFront</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>val1 <span class="token builtin">int</span> <span class="token punctuation">,</span>val2 <span class="token builtin">int</span> <span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5224\u65AD\u961F\u7A7A</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>head <span class="token operator">==</span> this<span class="token punctuation">.</span>tail<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//\u8868\u793A\u961F\u7A7A</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u51FA\u961F\u5217\u5931\u8D25\uFF0C\u961F\u5217\u4E3A\u7A7A\u7684 err  &quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;queue empty&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
		<span class="token comment">//\u961F\u5217\u975E\u7A7A</span>
		val1 <span class="token operator">=</span> this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>head<span class="token punctuation">]</span> 
		val2 <span class="token operator">=</span> this<span class="token punctuation">.</span>array<span class="token punctuation">[</span>this<span class="token punctuation">.</span>tail<span class="token punctuation">]</span>
		<span class="token comment">//\u83B7\u53D6\u5143\u7D20\u4E0D\u79FB\u4F4D</span>
		<span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	  
    <span class="token comment">//\u5148\u521B\u5EFA\u4E00\u4E2A\u961F\u5217</span>
    queue <span class="token operator">:=</span> <span class="token operator">&amp;</span>CircleQueue<span class="token punctuation">{</span>
        maxSize <span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
		head <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        tail <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> key <span class="token builtin">string</span> 
    <span class="token keyword">var</span> val <span class="token builtin">int</span>
	<span class="token keyword">var</span> input <span class="token builtin">byte</span>
    <span class="token keyword">for</span><span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;3/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;4/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;5/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20&quot;</span><span class="token punctuation">)</span>
        
    
        fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span>
        <span class="token keyword">switch</span> key<span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570&quot;</span><span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>val<span class="token punctuation">)</span>
            err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
                  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u52A0\u5165\u961F\u5217\u6210\u529F&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
       <span class="token keyword">case</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">:</span>         <span class="token comment">//\u53D6\u51FA\u5143\u7D20</span>
           fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span>
            val<span class="token punctuation">,</span>err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u51FA\u961F\u5217\u6210\u529Fval = &quot;</span><span class="token punctuation">,</span>val<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
       <span class="token keyword">case</span> <span class="token string">&quot;show&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">:</span>
              queue<span class="token punctuation">.</span><span class="token function">ListQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token keyword">case</span> <span class="token string">&quot;exit&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>   <span class="token comment">//\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528return</span>
	   <span class="token keyword">case</span> <span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">:</span>
			<span class="token comment">//\u663E\u793A\u9996\u4F4D\u5143\u7D20</span>
			a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>err <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">GetFront</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u663E\u793A\u5931\u8D25\uFF0Cerr = &quot;</span><span class="token punctuation">,</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				re<span class="token punctuation">:</span>    <span class="token comment">//\u6807\u8BB0</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E&quot;</span><span class="token punctuation">)</span>
				fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>input<span class="token punctuation">)</span>
				<span class="token keyword">if</span> input <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
					fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u961F\u9996\u5143\u7D20\u4E3A\uFF1A&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> input <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">{</span>
					fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u961F\u5C3E\u5143\u7D20\u4E3A\uFF1A&quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
					fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165&quot;</span><span class="token punctuation">)</span>
					<span class="token keyword">goto</span> re
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>smile<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>\u533A\u5757\u94FE<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>chapter18<span class="token punctuation">\\</span>tcpdemo<span class="token punctuation">\\</span>server<span class="token operator">&gt;</span> go run .<span class="token punctuation">\\</span>a.go
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">1</span>
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
<span class="token number">3</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
\u52A0\u5165\u961F\u5217\u6210\u529F
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token function">add</span>
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
<span class="token number">3</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
\u52A0\u5165\u961F\u5217\u6210\u529F
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
show
\u73AF\u5F62\u961F\u5217\u60C5\u51B5\u5982\u4E0B\uFF1A
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">0</span> <span class="token number">3</span>
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">1</span> <span class="token number">3</span>

<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">5</span>
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
a
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
A
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
<span class="token string">&#39;a&#39;</span>
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
<span class="token string">&quot;a&quot;</span>
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
^S\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
<span class="token builtin class-name">exit</span> status 0xc000013a
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>smile<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>\u533A\u5757\u94FE<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>chapter18<span class="token punctuation">\\</span>tcpdemo<span class="token punctuation">\\</span>server<span class="token operator">&gt;</span> go run .<span class="token punctuation">\\</span>a.go
<span class="token comment"># command-line-arguments</span>
.<span class="token punctuation">\\</span>a.go:144:17: invalid operation: input <span class="token operator">==</span> a <span class="token punctuation">(</span>mismatched types byte and int<span class="token punctuation">)</span>
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>smile<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>\u533A\u5757\u94FE<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>chapter18<span class="token punctuation">\\</span>tcpdemo<span class="token punctuation">\\</span>server<span class="token operator">&gt;</span> go run .<span class="token punctuation">\\</span>a.go
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">5</span>
\u53D6\u51FA\u961F\u5217\u5931\u8D25\uFF0C\u961F\u5217\u4E3A\u7A7A\u7684 err
\u663E\u793A\u5931\u8D25\uFF0Cerr <span class="token operator">=</span>  queue empty
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">1</span>
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
<span class="token function">add</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
\u52A0\u5165\u961F\u5217\u6210\u529F
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token builtin class-name">exit</span> status 0xc000013a
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>smile<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>\u533A\u5757\u94FE<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>chapter18<span class="token punctuation">\\</span>tcpdemo<span class="token punctuation">\\</span>server<span class="token operator">&gt;</span> go run .<span class="token punctuation">\\</span>a.go
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">1</span>
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
<span class="token number">3</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
\u52A0\u5165\u961F\u5217\u6210\u529F
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">5</span>
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
<span class="token number">1</span>
\u961F\u9996\u5143\u7D20\u4E3A\uFF1A <span class="token number">3</span>
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">1</span>
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
<span class="token number">4</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
\u52A0\u5165\u961F\u5217\u6210\u529F
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token function">add</span>
\u8BF7\u8F93\u5165\u4F60\u8981\u5165\u961F\u5217\u7684\u6570
<span class="token number">5</span>
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
\u52A0\u5165\u961F\u5217\u6210\u529F
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
show
\u73AF\u5F62\u961F\u5217\u60C5\u51B5\u5982\u4E0B\uFF1A
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">0</span> <span class="token number">3</span>
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">1</span> <span class="token number">3</span>
aee<span class="token punctuation">[</span>%d <span class="token operator">=</span> %d      <span class="token number">2</span> <span class="token number">3</span>

<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">2</span>
get
bool <span class="token operator">=</span>  <span class="token boolean">false</span>
\u53D6\u51FA\u961F\u5217\u6210\u529Fval <span class="token operator">=</span>  <span class="token number">3</span>
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
<span class="token number">5</span>
\u8BF7\u9009\u62E9\u53D6\u51FA\u7684\u5143\u7D20 A/a:\u961F\u9996 --- B/b:\u961F\u5C3E
<span class="token number">2</span>
\u961F\u5C3E\u5143\u7D20\u4E3A\uFF1A <span class="token number">0</span>
<span class="token number">1</span>/ \u8F93\u5165add\u8868\u793A\u6DFB\u52A0\u6570\u636E\u5230\u961F\u5217
<span class="token number">2</span>/ \u8F93\u5165get\u8868\u793A\u51FA\u961F\u5217
<span class="token number">3</span>/ \u8F93\u5165show\u8868\u793A\u663E\u793A\u961F\u5217
<span class="token number">4</span>/ \u8F93\u5165exit\u8868\u793A\u9000\u51FA\u961F\u5217
<span class="token number">5</span>/ \u8F93\u5165select\u663E\u793A\u5934\u5C3E\u5143\u7D20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="24.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="26.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,12),F=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),L={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},U=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),G=s(")"),V=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),M={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},Y=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function j(J,W){const p=i("router-link"),t=i("ExternalLinkIcon"),l=i("RouterLink");return c(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(p,{to:"#\u961F\u5217\u7684\u4F7F\u7528"},{default:e(()=>[m]),_:1})]),n("li",null,[a(p,{to:"#\u73AF\u5F62\u961F\u5217"},{default:e(()=>[b]),_:1})]),n("li",null,[a(p,{to:"#end-\u94FE\u63A5"},{default:e(()=>[h]),_:1})])])]),f,n("p",null,[g,n("a",q,[w,a(t)])]),y,n("p",null,[_,n("a",x,[P,a(t)])]),A,S,n("blockquote",null,[n("p",null,[E,n("a",Q,[C,a(t)])])]),B,n("details",z,[N,n("p",null,[T,n("a",R,[D,a(t)])]),I]),X,n("ul",null,[n("li",null,[n("p",null,[a(l,{to:"/"},{default:e(()=>[F]),_:1})])]),n("li",null,[n("p",null,[n("a",L,[U,a(t)]),G])]),n("li",null,[n("p",null,[V,n("a",M,[Y,a(t)])])])])])}const K=o(d,[["render",j],["__file","25.html.vue"]]);export{K as default};
