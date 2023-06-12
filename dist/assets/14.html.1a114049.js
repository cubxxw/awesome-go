import{_ as l,r as e,o as c,c as u,a as n,b as a,w as p,e as s,d as r}from"./app.798d5e9d.js";const d="/assets/3lZsIbCPLmJvEDY.626d6b83.png",k="/assets/pZJAj4gCOF7RP9r.cf4fc344.png",v="/assets/8REcJw2Y3SC9P1o.82553d32.png",m={},b=n("h1",{id:"\u5BB6\u5EAD\u8D26\u76EE\u8BB0\u8D26\u8F6F\u4EF6\u9879\u76EE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5BB6\u5EAD\u8D26\u76EE\u8BB0\u8D26\u8F6F\u4EF6\u9879\u76EE","aria-hidden":"true"},"#"),s(" \u5BB6\u5EAD\u8D26\u76EE\u8BB0\u8D26\u8F6F\u4EF6\u9879\u76EE")],-1),f={class:"table-of-contents"},g=s("\u6848\u4F8B"),_=s("END \u94FE\u63A5"),h=s("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),q={href:"https://pkg.go.dev/std",target:"_blank",rel:"noopener noreferrer"},y=s("https://pkg.go.dev/std"),w=n("blockquote",null,[n("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),P=s("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),C={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},E=s("https://github.com/3293172751/golang-rearn"),x=n("hr",null,null,-1),S=n("p",null,[n("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),s("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),N=s("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),A={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},L=s("http://nsddd.top"),B=r('<p><strong>\u9879\u76EE\u5F00\u53D1\u6D41\u7A0B\u8BF4\u660E\uFF1A</strong></p><p><img src="'+d+'" alt="image-20220308185903888"></p><p><strong>\u9879\u76EE\u9700\u6C42\u8BF4\u660E\uFF1A</strong></p><blockquote><p>\u5BB6\u5EAD\u6536\u8D26\u8F6F\u4EF6\uFF0C\u8BB0\u5F55\u5BB6\u5EAD\u7684\u6536\u5165\u548C\u652F\u51FA\uFF0C\u5E76\u4E14\u6253\u5370\u51FA\u6765</p></blockquote><p><img src="'+k+'" alt="image-20220308190403430"></p><p><img src="'+v+`" alt="image-20220308191021614"></p><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*************************************************************************
    &gt; File Name: aaa.go
    &gt; Author: smile
    &gt; Mail: 3293172751nss@gmail.com 
    &gt; Created Time: Tue 08 Mar 2022 07:13:41 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4FDD\u5B58\u63A5\u6536\u7528\u6237\u8F93\u5165\u7684\u9009\u9879</span>
    key <span class="token operator">:=</span> <span class="token string">&quot;&quot;</span>
    <span class="token comment">//\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\uFF0C\u63A7\u5236\u662F\u5426\u9000\u51FAfor</span>
    loop <span class="token operator">:=</span> <span class="token boolean">true</span>

    <span class="token comment">//\u5B9A\u4E49\u8D26\u6237\u7684\u4F59\u989D []</span>
    balance <span class="token operator">:=</span> <span class="token number">10000.0</span>
    <span class="token comment">//\u6BCF\u6B21\u6536\u652F\u7684\u91D1\u989D</span>
    money <span class="token operator">:=</span> <span class="token number">0.0</span> 
    <span class="token comment">//\u6BCF\u6B21\u6536\u652F\u7684\u8BF4\u660E</span>
    note <span class="token operator">:=</span> <span class="token string">&quot;&quot;</span>
    <span class="token comment">//\u5B9A\u4E49\u4E2A\u53D8\u91CF\uFF0C\u8BB0\u5F55\u662F\u5426\u6709\u6536\u652F\u7684\u884C\u4E3A</span>
    flag <span class="token operator">:=</span> <span class="token boolean">false</span>
    <span class="token comment">//\u6536\u652F\u7684\u8BE6\u60C5\u4F7F\u7528\u5B57\u7B26\u4E32\u6765\u8BB0\u5F55</span>
    <span class="token comment">//\u5F53\u6709\u6536\u652F\u65F6\uFF0C\u53EA\u9700\u8981\u5BF9details \u8FDB\u884C\u62FC\u63A5\u5904\u7406\u5373\u53EF</span>
    details <span class="token operator">:=</span> <span class="token string">&quot;\u6536\u652F\\t\u8D26\u6237\u91D1\u989D\\t\u6536\u652F\u91D1\u989D\\t\u8BF4    \u660E&quot;</span>
    <span class="token comment">//\u663E\u793A\u8FD9\u4E2A\u4E3B\u83DC\u5355</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n-----------------\u5BB6\u5EAD\u6536\u652F\u8BB0\u8D26\u8F6F\u4EF6-----------------&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;                  1 \u6536\u652F\u660E\u7EC6&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;                  2 \u767B\u8BB0\u6536\u5165&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;                  3 \u767B\u8BB0\u652F\u51FA&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;                  4 \u9000\u51FA\u8F6F\u4EF6&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u9009\u62E9(1-4)\uFF1A&quot;</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span>

        <span class="token keyword">switch</span> key <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------\u5F53\u524D\u6536\u652F\u660E\u7EC6\u8BB0\u5F55-----------------&quot;</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> flag <span class="token punctuation">{</span>
                    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>details<span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u6CA1\u6709\u6536\u652F\u660E\u7EC6... \u6765\u4E00\u7B14\u5427!&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>   
                
            <span class="token keyword">case</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u672C\u6B21\u6536\u5165\u91D1\u989D:&quot;</span><span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>money<span class="token punctuation">)</span>
                balance <span class="token operator">+=</span> money <span class="token comment">// \u4FEE\u6539\u8D26\u6237\u4F59\u989D</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u672C\u6B21\u6536\u5165\u8BF4\u660E:&quot;</span><span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>note<span class="token punctuation">)</span>
                <span class="token comment">//\u5C06\u8FD9\u4E2A\u6536\u5165\u60C5\u51B5\uFF0C\u62FC\u63A5\u5230details\u53D8\u91CF</span>
                <span class="token comment">//\u6536\u5165    11000           1000            \u6709\u4EBA\u53D1\u7EA2\u5305</span>
                details <span class="token operator">+=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\u6536\u5165\\t%v\\t%v\\t%v&quot;</span><span class="token punctuation">,</span> balance<span class="token punctuation">,</span> money<span class="token punctuation">,</span> note<span class="token punctuation">)</span>
                flag <span class="token operator">=</span> <span class="token boolean">true</span>

            <span class="token keyword">case</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u672C\u6B21\u652F\u51FA\u91D1\u989D:&quot;</span><span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>money<span class="token punctuation">)</span>
                <span class="token comment">//\u8FD9\u91CC\u9700\u8981\u505A\u4E00\u4E2A\u5FC5\u8981\u7684\u5224\u65AD</span>
                <span class="token keyword">if</span> money <span class="token operator">&gt;</span> balance <span class="token punctuation">{</span>
                    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F59\u989D\u7684\u91D1\u989D\u4E0D\u8DB3&quot;</span><span class="token punctuation">)</span>
                    <span class="token keyword">break</span>
                <span class="token punctuation">}</span>   
                balance <span class="token operator">-=</span> money
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u672C\u6B21\u652F\u51FA\u8BF4\u660E:&quot;</span><span class="token punctuation">)</span>
                fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>note<span class="token punctuation">)</span>
                details <span class="token operator">+=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\u652F\u51FA\\t%v\\t%v\\t%v&quot;</span><span class="token punctuation">,</span> balance<span class="token punctuation">,</span> money<span class="token punctuation">,</span> note<span class="token punctuation">)</span>
                flag <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">case</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u786E\u5B9A\u8981\u9000\u51FA\u5417? y/n&quot;</span><span class="token punctuation">)</span>
                choice <span class="token operator">:=</span> <span class="token string">&quot;&quot;</span>
                <span class="token keyword">for</span> <span class="token punctuation">{</span>

                    fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>choice<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> choice <span class="token operator">==</span> <span class="token string">&quot;y&quot;</span> <span class="token operator">||</span> choice <span class="token operator">==</span> <span class="token string">&quot;n&quot;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">break</span>
                    <span class="token punctuation">}</span>   
                    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u7684\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165 y/n&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>   

                <span class="token keyword">if</span> choice <span class="token operator">==</span> <span class="token string">&quot;y&quot;</span> <span class="token punctuation">{</span>
                    loop <span class="token operator">=</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>   
            <span class="token keyword">default</span> <span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9009\u9879..&quot;</span><span class="token punctuation">)</span>       
        <span class="token punctuation">}</span>   

        <span class="token keyword">if</span> <span class="token operator">!</span>loop <span class="token punctuation">{</span>
            <span class="token keyword">break</span> 
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>   
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u9000\u51FA\u5BB6\u5EAD\u8BB0\u8D26\u8F6F\u4EF6\u7684\u4F7F\u7528...&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go build -o a aaa.go </span>
<span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># ./a</span>

-----------------\u5BB6\u5EAD\u6536\u652F\u8BB0\u8D26\u8F6F\u4EF6-----------------
                  <span class="token number">1</span> \u6536\u652F\u660E\u7EC6
                  <span class="token number">2</span> \u767B\u8BB0\u6536\u5165
                  <span class="token number">3</span> \u767B\u8BB0\u652F\u51FA
                  <span class="token number">4</span> \u9000\u51FA\u8F6F\u4EF6
\u8BF7\u9009\u62E9<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>\uFF1A1
-----------------\u5F53\u524D\u6536\u652F\u660E\u7EC6\u8BB0\u5F55-----------------
\u5F53\u524D\u6CA1\u6709\u6536\u652F\u660E\u7EC6<span class="token punctuation">..</span>. \u6765\u4E00\u7B14\u5427<span class="token operator">!</span>

-----------------\u5BB6\u5EAD\u6536\u652F\u8BB0\u8D26\u8F6F\u4EF6-----------------
                  <span class="token number">1</span> \u6536\u652F\u660E\u7EC6
                  <span class="token number">2</span> \u767B\u8BB0\u6536\u5165
                  <span class="token number">3</span> \u767B\u8BB0\u652F\u51FA
                  <span class="token number">4</span> \u9000\u51FA\u8F6F\u4EF6
\u8BF7\u9009\u62E9<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>\uFF1A2
\u672C\u6B21\u6536\u5165\u91D1\u989D:
<span class="token number">12</span>
\u672C\u6B21\u6536\u5165\u8BF4\u660E:
<span class="token number">12</span>

-----------------\u5BB6\u5EAD\u6536\u652F\u8BB0\u8D26\u8F6F\u4EF6-----------------
                  <span class="token number">1</span> \u6536\u652F\u660E\u7EC6
                  <span class="token number">2</span> \u767B\u8BB0\u6536\u5165
                  <span class="token number">3</span> \u767B\u8BB0\u652F\u51FA
                  <span class="token number">4</span> \u9000\u51FA\u8F6F\u4EF6
\u8BF7\u9009\u62E9<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>\uFF1A3
\u672C\u6B21\u652F\u51FA\u91D1\u989D:
<span class="token number">12</span>
\u672C\u6B21\u652F\u51FA\u8BF4\u660E:
<span class="token number">12</span>

-----------------\u5BB6\u5EAD\u6536\u652F\u8BB0\u8D26\u8F6F\u4EF6-----------------
                  <span class="token number">1</span> \u6536\u652F\u660E\u7EC6
                  <span class="token number">2</span> \u767B\u8BB0\u6536\u5165
                  <span class="token number">3</span> \u767B\u8BB0\u652F\u51FA
                  <span class="token number">4</span> \u9000\u51FA\u8F6F\u4EF6
\u8BF7\u9009\u62E9<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>\uFF1A1
-----------------\u5F53\u524D\u6536\u652F\u660E\u7EC6\u8BB0\u5F55-----------------
\u6536\u652F	\u8D26\u6237\u91D1\u989D	\u6536\u652F\u91D1\u989D	\u8BF4    \u660E
\u6536\u5165	<span class="token number">10012</span>	<span class="token number">12</span>	<span class="token number">12</span>
\u652F\u51FA	<span class="token number">10000</span>	<span class="token number">12</span>	<span class="token number">12</span>

-----------------\u5BB6\u5EAD\u6536\u652F\u8BB0\u8D26\u8F6F\u4EF6-----------------
                  <span class="token number">1</span> \u6536\u652F\u660E\u7EC6
                  <span class="token number">2</span> \u767B\u8BB0\u6536\u5165
                  <span class="token number">3</span> \u767B\u8BB0\u652F\u51FA
                  <span class="token number">4</span> \u9000\u51FA\u8F6F\u4EF6
\u8BF7\u9009\u62E9<span class="token punctuation">(</span><span class="token number">1</span>-4<span class="token punctuation">)</span>\uFF1A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="13.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="15.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,11),D=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),R={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},T=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),V=s(")"),F=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),I={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},J=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function M(Y,Z){const o=e("router-link"),t=e("ExternalLinkIcon"),i=e("RouterLink");return c(),u("div",null,[b,n("nav",f,[n("ul",null,[n("li",null,[a(o,{to:"#\u6848\u4F8B"},{default:p(()=>[g]),_:1})]),n("li",null,[a(o,{to:"#end-\u94FE\u63A5"},{default:p(()=>[_]),_:1})])])]),n("p",null,[h,n("a",q,[y,a(t)])]),w,n("p",null,[P,n("a",C,[E,a(t)])]),x,S,n("blockquote",null,[n("p",null,[N,n("a",A,[L,a(t)])])]),B,n("ul",null,[n("li",null,[n("p",null,[a(i,{to:"/"},{default:p(()=>[D]),_:1})])]),n("li",null,[n("p",null,[n("a",R,[T,a(t)]),V])]),n("li",null,[n("p",null,[F,n("a",I,[J,a(t)])])])])])}const z=l(m,[["render",M],["__file","14.html.vue"]]);export{z as default};
