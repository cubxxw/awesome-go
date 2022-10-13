import{_ as c,r as o,o as l,c as u,a as n,b as a,w as e,d as s,e as r}from"./app.5dbe8dec.js";const d={},k=n("h1",{id:"channel-\u7BA1\u9053",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#channel-\u7BA1\u9053","aria-hidden":"true"},"#"),s(" channel(\u7BA1\u9053)")],-1),v={class:"table-of-contents"},m=s("channel(\u7BA1\u9053)"),b=s("chan\u5E95\u5C42\u5206\u6790"),h=s("channel\u5173\u95ED"),g=s("channel\u7684\u904D\u5386"),f=s("goroutine \u548C channel\u7ED3\u5408"),w=s("channel\u4F7F\u7528\u7EC6\u8282"),y=s("END \u94FE\u63A5"),C=n("p",null,"[toc]",-1),_=s("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),q={href:"https://golang.org/#",target:"_blank",rel:"noopener noreferrer"},x=s("https://golang.org/#"),N=n("blockquote",null,[n("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),P=s("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),E={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},D=s("https://github.com/3293172751/golang-rearn"),S=n("hr",null,null,-1),A=n("p",null,[n("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),s("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),M=s("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),B={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},T=s("http://nsddd.top"),L=r(`<hr><h2 id="channel-\u7BA1\u9053-1" tabindex="-1"><a class="header-anchor" href="#channel-\u7BA1\u9053-1" aria-hidden="true">#</a> channel(\u7BA1\u9053)</h2><p><strong>\u6F14\u793A\u7BA1\u9053\u4F7F\u7528</strong></p><p><strong>channel\u521D\u59CB\u5316\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span> 
intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E00\u5B9A\u8981\u4F7F\u7528make\u4E0D\u7136\u4F1A\u62A5\u9519</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u5B58\u653E3\u4E2Aint\u7C7B\u578B\u7684\u7BA1\u9053*/</span>
    <span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span> 
    intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
    
    <span class="token comment">//\u770B\u4E00\u4E0Bintchan\u662F\u4E00\u79CD\u4EC0\u4E48\u7C7B\u578B\uFF0C\u5730\u5740\u8FD8\u662F\u6570\u5B57</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;intchan \u672C\u8EAB\u7684\u503C\u4E3A:&quot;</span><span class="token punctuation">,</span>intchan<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;intchan \u672C\u8EAB\u7684\u5730\u5740\u4E3A%p:&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>intchan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u770B\u4E0BintChan\u662F\u4EC0\u4E48</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># go run chan.go </span>
intchan \u672C\u8EAB\u7684\u503C\u4E3A: 0xc00001e080
intchan \u672C\u8EAB\u7684\u5730\u5740\uFF1A0xc00000e028
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7531\u6B64\u53EF\u89C1\uFF0C\u7BA1\u9053\u662F\u4E00\u4E2A\u5730\u5740</strong></p><p><img src="https://s2.loli.net/2022/03/20/eRdMEkUaCY2PpTW.png" alt="image-20220320114737171"></p><blockquote><p>\u7BA1\u9053\u662F\u4E00\u4E2A\u5E94\u7528\u7C7B\u578B\uFF0C\u4F7F\u7528\u51FD\u6570\u53D8\u5316\u7684\u662F\u5730\u5740</p></blockquote><p><strong>\u5411\u7BA1\u9053\u5199\u5165\u6570\u636E</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*************************************************************************
    &gt; File Name: chan.go
    &gt; Author: smile
    &gt; Mail: 3293172751nss@gmail.com 
    &gt; Created Time: Sun 20 Mar 2022 11:40:41 AM CST
 ************************************************************************/</span>
 <span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u5B58\u653E3\u4E2Aint\u7C7B\u578B\u7684\u7BA1\u9053*/</span>
    <span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span>
    intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token comment">//\u770B\u4E00\u4E0Bintchan\u662F\u4E00\u79CD\u4EC0\u4E48\u7C7B\u578B\uFF0C\u5730\u5740\u8FD8\u662F\u6570\u5B57</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;intchan \u672C\u8EAB\u7684\u503C\u4E3A:&quot;</span><span class="token punctuation">,</span>intChan<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;intchan \u672C\u8EAB\u7684\u5730\u5740\u4E3A%p:\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>intChan<span class="token punctuation">)</span>

    <span class="token comment">//\u5411\u7BA1\u9053\u4E2D\u5199\u5165\u6570\u636E--\u6CE8\u610F\u4F7F\u7528\u7684\u662F&lt;- \u5199\u5165\u7B26\u53F7</span>
    intChan <span class="token operator">&lt;-</span> <span class="token number">10</span>
    num <span class="token operator">:=</span> <span class="token number">211</span> <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\u5E76\u4E14\u5199\u5165\u53D8\u91CF</span>
    intChan <span class="token operator">&lt;-</span> num
	<span class="token comment">/*\u6CE8\u610F -- \u5F53\u6211\u4EEC\u7ED9\u7BA1\u9053\u5199\u5165\u6570\u636E\u7684\u65F6\u5019\uFF0C\u4E0D\u80FD\u8D85\u8FC7\u5176\u5BB9\u91CF \uFF0C\u6B64\u65F6\u53EA\u80FD\u5199\u5165\u4E00\u6761\u6570\u636E\u4E86\uFF0C\u56E0\u4E3A\u957F\u5EA6\u4E0D\u53EF\u4EE5\u6BD4\u5BB9\u91CF\u9AD8\uFF0C\u6700\u591A\u4E3A3*/</span>
    intChan <span class="token operator">&lt;-</span> a<span class="token operator">:=</span><span class="token number">100</span> <span class="token comment">//\u6781\u9650\u3002\u6B64\u65F6\u518D\u52A0\u5165\u62A5\u9519</span>
    <span class="token comment">//\u770B\u770B\u7BA1\u9053\u7684\u957F\u5EA6\u548C\u5BB9\u91CFcap(\u5BB9\u91CF)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;channel len = %v\\n cap = %v\\n&quot;</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># go run chan.go </span>
intchan \u672C\u8EAB\u7684\u503C\u4E3A: 0xc0000aa000
intchan \u672C\u8EAB\u7684\u5730\u5740\u4E3A0xc0000a4018:
channel len <span class="token operator">=</span> <span class="token number">3</span>
cap <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6240\u4EE5\u5728\u4F7F\u7528\u7BA1\u9053\u7684\u65F6\u5019\u4E0D\u53EF\u4EE5\u8D85\u8FC7\u6700\u5927\u7684\u5BB9\u91CF\uFF0C\u53EF\u4EE5\u5C06\u7BA1\u9053\u4E2D\u7684\u6570\u636E<strong>\u53D6\u51FA\u6765\u540E\u518D\u63D2\u5165</strong>\uFF0C\u53D6\u51FA\u6570\u636E\u540E\u7BA1\u9053\u957F\u5EA6\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u4F46\u662F\u5B83\u7684\u5BB9\u91CFmap\u662F\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u7684</p></blockquote><p><strong>\u6848\u4F8B</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//\u53D6\u51FA\u6570\u636E</span>
<span class="token keyword">var</span> num2 <span class="token builtin">int</span> 
num2 <span class="token operator">=</span> <span class="token operator">&lt;-</span>intChan 
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;num2 = &quot;</span><span class="token punctuation">,</span>num2<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;channel len = %v\\n cap = %v\\n&quot;</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">)</span>
num2 <span class="token operator">=</span> <span class="token operator">&lt;-</span>intChan    <span class="token comment">//\u6CE8\u610F\u5982\u679C\u6570\u636E\u5168\u90E8\u53D6\u51FA\uFF0C\u518D\u65E0\u4F11\u6B62\u7684\u53D6\u51FA\u4F1A\u62A5\u9519</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;num2 = &quot;</span><span class="token punctuation">,</span>num2<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;channel len = %v\\n cap = %v\\n&quot;</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cap</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># go run chan.go </span>
intchan \u672C\u8EAB\u7684\u503C\u4E3A: 0xc0000aa000
intchan \u672C\u8EAB\u7684\u5730\u5740\uFF1A0xc0000a4018
channel len <span class="token operator">=</span> <span class="token number">3</span>
cap <span class="token operator">=</span> <span class="token number">3</span>
num2 <span class="token operator">=</span>  <span class="token number">10</span>
channel len <span class="token operator">=</span> <span class="token number">2</span>
cap <span class="token operator">=</span> <span class="token number">3</span>
num2 <span class="token operator">=</span>  <span class="token number">211</span>
channel len <span class="token operator">=</span> <span class="token number">1</span>
cap <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7BA1\u9053\u7684\u6570\u636E\u53EF\u4EE5\u76F4\u63A5\u6254\u6389\uFF0C\u6CA1\u6709\u63A5\u6536\u7684\u53D8\u91CF</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token operator">&lt;-</span> intChan    <span class="token comment">//\u76F4\u63A5\u6254\u6389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="chan\u5E95\u5C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#chan\u5E95\u5C42\u5206\u6790" aria-hidden="true">#</a> chan\u5E95\u5C42\u5206\u6790</h2><details class="custom-container details"><summary>\u8FDB\u5165chan\u5E95\u5C42\u5206\u6790</summary><p><a href="chan%E5%BA%95%E5%B1%82%E5%88%86%E6%9E%90">\u26A1 chan\u5E95\u5C42\u5206\u6790</a></p></details><blockquote><p>\u5982\u679C\u6709\u4E00\u4E2A\u9700\u6C42\uFF0C\u5E0C\u671B\u7BA1\u9053\u65E2\u53EF\u4EE5\u653E\u7ED3\u6784\u4F53\uFF0C\u53C8\u53EF\u4EE5\u653E\u6307\u9488\uFF0C\u5373\u53EF\u4EE5\u653E\u5165\u4EFB\u4F55\u7C7B\u578B\u53D8\u91CF</p><p><strong>\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u7A7A\u63A5\u53E3\uFF0C\u7A7A\u63A5\u53E3\u53EF\u4EE5\u63A5\u6536\u4EFB\u4F55\u7C7B\u578B\u7684</strong></p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> allChan <span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>       <span class="token comment">//\u7A7A\u63A5\u53E3</span>
allChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> inerface<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channel\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#channel\u5173\u95ED" aria-hidden="true">#</a> channel\u5173\u95ED</h2><p><strong>\u4F7F\u7528\u5185\u7F6E\u51FD\u6570close\u53EF\u4EE5\u5173\u95EDchannel\uFF0C\u5173\u95ED\u540E\uFF0C\u53EA\u80FD\u8BFB\u53D6\u6570\u636E\u800C\u4E0D\u80FD\u5199\u5165\u6570\u636E</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u5B58\u653E3\u4E2Aint\u7C7B\u578B\u7684\u7BA1\u9053*/</span>
    intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
    intChan <span class="token operator">&lt;-</span> <span class="token number">100</span>
    intChan <span class="token operator">&lt;-</span> <span class="token number">300</span>
    <span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>               <span class="token comment">//close\u5173\u95ED\u7BA1\u9053</span>
    
    <span class="token comment">/*
    intChan -&lt; 100
    \u4E0D\u53EF\u4EE5\u518D\u5199\u5165\u4F1A\u62A5\u9519*/</span>
    a <span class="token operator">:=</span> <span class="token operator">&lt;-</span>intChan
    <span class="token comment">//\u770B\u4E00\u4E0Bintchan\u662F\u4E00\u79CD\u4EC0\u4E48\u7C7B\u578B\uFF0C\u5730\u5740\u8FD8\u662F\u6570\u5B57</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a=&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a= 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="channel\u7684\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#channel\u7684\u904D\u5386" aria-hidden="true">#</a> channel\u7684\u904D\u5386</h2><p><strong>channel\u7684\u904D\u5386==\u53EA\u80FD\u4F7F\u7528<code>for-range</code>\u904D\u5386\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528\u666E\u901A\u7684for\u5FAA\u73AF==,\u56E0\u4E3A\u957F\u5EA6\u4F1A\u53D8\u5316</strong></p><p><strong>\u60C5\u51B5\uFF1A</strong></p><ol><li><strong>\u904D\u5386\u65F6\uFF0Cchannel\u6CA1\u6709\u5173\u95ED\uFF0C\u51FA\u73B0deadlock\u7684\u9519\u8BEF</strong></li><li><strong>\u904D\u5386\u65F6\uFF0Cchannel\u5DF2\u7ECF\u5173\u95ED\uFF0C\u5219\u4F1A\u6B63\u5E38\u904D\u5386\uFF0C\u904D\u5386\u5B8C\u6210\uFF0C\u5C31\u9000\u51FA\u904D\u5386</strong></li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">/*\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u5B58\u653E100\u4E2Aint\u7C7B\u578B\u7684\u7BA1\u9053,\u904D\u5386*/</span>
    intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span><span class="token number">1</span><span class="token operator">++</span><span class="token punctuation">{</span>
        intChan <span class="token operator">&lt;-</span> <span class="token number">100</span><span class="token operator">*</span>i      	  <span class="token comment">//\u653E\u5165\u4E00\u767E\u4E2A\u6570\u636E\u5230\u7BA1\u9053</span>
    <span class="token punctuation">}</span>
    <span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>                <span class="token comment">//close\u5173\u95ED\u7BA1\u9053</span>
    
    <span class="token comment">//\u7BA1\u9053\u904D\u5386</span>
   <span class="token comment">/* for i:=0; i&lt;len(intChan2);i++{
       \u4E0D\u80FD\u4F7F\u7528\u8BE5\u65B9\u6CD5\u904D\u5386\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01 
    }*/</span>
    <span class="token keyword">for</span> v<span class="token operator">:=</span><span class="token keyword">range</span> intChan<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C&quot;</span><span class="token operator">+</span><span class="token string">&quot;\u6570=&quot;</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goroutine-\u548C-channel\u7ED3\u5408" tabindex="-1"><a class="header-anchor" href="#goroutine-\u548C-channel\u7ED3\u5408" aria-hidden="true">#</a> goroutine \u548C channel\u7ED3\u5408</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*************************************************************************
    &gt; File Name: jiehe.go
    &gt; Author: smile
    &gt; Mail: 3293172751nss@gmail.com 
    &gt; Created Time: Sun 20 Mar 2022 02:09:34 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">writeData</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">50</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
    <span class="token comment">//\u653E\u5165\u6570\u636E</span>
    intChan <span class="token operator">&lt;-</span> i<span class="token operator">*</span>i
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;writeData&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
    <span class="token comment">//\u5199\u7684\u65F6\u5019\u4F11\u7720\u4E00\u79D2\u949F</span>
       time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">readData</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span>exitChan <span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">for</span><span class="token punctuation">{</span>
        v<span class="token punctuation">,</span>ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>intChan 
        <span class="token keyword">if</span> <span class="token operator">!</span>ok<span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u5230\u4E00\u4E2A\xB7\u6570\u636E&quot;</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
            <span class="token comment">//\u8BFB\u53D6\u7684\u65F6\u5019\u4F11\u7720\u4E00\u79D2\u949F</span>
       time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        
    <span class="token punctuation">}</span>
    <span class="token comment">//\u8BFB\u53D6\u6570\u636E\u540E\u4EFB\u52A1\u5B8C\u6210</span>
    exitChan <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
    <span class="token function">close</span><span class="token punctuation">(</span>exitChan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u521B\u5EFAA\u4E24\u4E2A\u7BA1\u9053</span>

    intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span>
    exitChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">writeData</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">readData</span><span class="token punctuation">(</span>intChan<span class="token punctuation">,</span>exitChan<span class="token punctuation">)</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># go run  jiehe.go </span>
writeData <span class="token number">1</span>
\u8BFB\u53D6\u5230\u4E00\u4E2A\xB7\u6570\u636E <span class="token number">1</span>
writeData <span class="token number">2</span>
\u8BFB\u53D6\u5230\u4E00\u4E2A\xB7\u6570\u636E <span class="token number">4</span>
writeData <span class="token number">3</span>
\u8BFB\u53D6\u5230\u4E00\u4E2A\xB7\u6570\u636E <span class="token number">9</span>
writeData <span class="token number">4</span>
\u8BFB\u53D6\u5230\u4E00\u4E2A\xB7\u6570\u636E <span class="token number">16</span>
writeData <span class="token number">5</span>
\u8BFB\u53D6\u5230\u4E00\u4E2A\xB7\u6570\u636E <span class="token number">25</span>
writeData <span class="token number">6</span>
\u8BFB\u53D6\u5230\u4E00\u4E2A\xB7\u6570\u636E <span class="token number">36</span>
writeData <span class="token number">7</span>
\u8BFB\u53D6\u5230\u4E00\u4E2A\xB7\u6570\u636E <span class="token number">49</span>
writeData <span class="token number">8</span>
\u8BFB\u53D6\u5230\u4E00\u4E2A\xB7\u6570\u636E <span class="token number">64</span>
^Csignal: interrupt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5F53\u6211\u4EECmake\u7684\u7BA1\u9053\u5BB9\u91CF\u5F88\u5C0F\uFF0C\u4F46\u662F\u5B58\u5165\u7684\u6570\u636E\u5F88\u591A\uFF0C\u90A3\u4E48\u6B64\u65F6\u4F1A\u51FA\u73B0\u8BF8\u585E</p></blockquote><hr><blockquote><p>\u6211\u4EEC\u56DE\u5230\u5F00\u59CB\u7684\u90A3\u4E00\u4E2A\u95EE\u9898\uFF0C\u4E00\u4E2A\u9700\u6C42,\u7EDF\u8BA11~80000\u4E2D\u6709\u54EA\u4E9B\u7D20\u6570</p><p>\u6211\u4EEC\u5F53\u65F6\u60F3\u5230\u7684\u65B9\u6CD5\u662F\u5C06\u7EDF\u8BA1\u7D20\u6570\u7684\u4EFB\u52A1\u5206\u914D\u7ED94\u4E2ACPU\u53BB\u505A\uFF08\u6211\u53EA\u67094\u4E2A<strong>\u5E76\u884C</strong>\uFF0C\u75288\u4E2A<strong>\u5E76\u53D1</strong></p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u5411 intChan\u653E\u5165 1-80000\u4E2A\u6570</span>
<span class="token keyword">func</span> <span class="token function">putNum</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">800000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>    
		intChan<span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>

	<span class="token comment">//\u5173\u95EDintChan</span>
	<span class="token function">close</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4ECE intChan\u53D6\u51FA\u6570\u636E\uFF0C\u5E76\u5224\u65AD\u662F\u5426\u4E3A\u7D20\u6570,\u5982\u679C\u662F\uFF0C\u5C31</span>
<span class="token comment">// 	//\u653E\u5165\u5230primeChan</span>
<span class="token keyword">func</span> <span class="token function">primeNum</span><span class="token punctuation">(</span>intChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> primeChan <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> exitChan <span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//\u4F7F\u7528for \u5FAA\u73AF</span>
	<span class="token comment">// var num int</span>
	<span class="token keyword">var</span> flag <span class="token builtin">bool</span> <span class="token comment">// </span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//time.Sleep(time.Millisecond * 10)</span>
		num<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>intChan <span class="token comment">//intChan \u53D6\u4E0D\u5230..</span>
		
		<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span> 
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		flag <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">//\u5047\u8BBE\u662F\u7D20\u6570</span>
		<span class="token comment">//\u5224\u65ADnum\u662F\u4E0D\u662F\u7D20\u6570</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> num <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span><span class="token comment">//\u8BF4\u660E\u8BE5num\u4E0D\u662F\u7D20\u6570</span>
				flag <span class="token operator">=</span> <span class="token boolean">false</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> flag <span class="token punctuation">{</span>
			<span class="token comment">//\u5C06\u8FD9\u4E2A\u6570\u5C31\u653E\u5165\u5230primeChan</span>
			primeChan<span class="token operator">&lt;-</span> num
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6709\u4E00\u4E2AprimeNum \u534F\u7A0B\u56E0\u4E3A\u53D6\u4E0D\u5230\u6570\u636E\uFF0C\u9000\u51FA&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//\u8FD9\u91CC\u6211\u4EEC\u8FD8\u4E0D\u80FD\u5173\u95ED primeChan</span>
	<span class="token comment">//\u5411 exitChan \u5199\u5165true</span>
	exitChan<span class="token operator">&lt;-</span> <span class="token boolean">true</span>	

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	intChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
	primeChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">)</span><span class="token comment">//\u653E\u5165\u7ED3\u679C</span>
	<span class="token comment">//\u6807\u8BC6\u9000\u51FA\u7684\u7BA1\u9053</span>
	exitChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// 4\u4E2A</span>



	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token comment">//\u5F00\u542F\u4E00\u4E2A\u534F\u7A0B\uFF0C\u5411 intChan\u653E\u5165 1-80000\u4E2A\u6570</span>
	<span class="token keyword">go</span> <span class="token function">putNum</span><span class="token punctuation">(</span>intChan<span class="token punctuation">)</span>
	<span class="token comment">//\u5F00\u542F4\u4E2A\u534F\u7A0B\uFF0C\u4ECE intChan\u53D6\u51FA\u6570\u636E\uFF0C\u5E76\u5224\u65AD\u662F\u5426\u4E3A\u7D20\u6570,\u5982\u679C\u662F\uFF0C\u5C31</span>
	<span class="token comment">//\u653E\u5165\u5230primeChan</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">primeNum</span><span class="token punctuation">(</span>intChan<span class="token punctuation">,</span> primeChan<span class="token punctuation">,</span> exitChan<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u8FD9\u91CC\u6211\u4EEC\u4E3B\u7EBF\u7A0B\uFF0C\u8FDB\u884C\u5904\u7406</span>
	<span class="token comment">//\u76F4\u63A5</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token operator">&lt;-</span>exitChan
		<span class="token punctuation">}</span>

		end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F7F\u7528\u534F\u7A0B\u8017\u65F6=&quot;</span><span class="token punctuation">,</span> end <span class="token operator">-</span> start<span class="token punctuation">)</span>

		<span class="token comment">//\u5F53\u6211\u4EEC\u4ECEexitChan \u53D6\u51FA\u4E864\u4E2A\u7ED3\u679C\uFF0C\u5C31\u53EF\u4EE5\u653E\u5FC3\u7684\u5173\u95ED prprimeChan</span>
		<span class="token function">close</span><span class="token punctuation">(</span>primeChan<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


	<span class="token comment">//\u904D\u5386\u6211\u4EEC\u7684 primeChan ,\u628A\u7ED3\u679C\u53D6\u51FA</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>primeChan
		<span class="token keyword">if</span> <span class="token operator">!</span>ok<span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//\u5C06\u7ED3\u679C\u8F93\u51FA</span>
<span class="token comment">//	fmt.Printf(&quot;\u7D20\u6570=%d\\n&quot;, res)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main\u7EBF\u7A0B\u9000\u51FA&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail ~<span class="token punctuation">]</span><span class="token comment"># ./sushu </span>
\u6709\u4E00\u4E2AprimeNum \u534F\u7A0B\u56E0\u4E3A\u53D6\u4E0D\u5230\u6570\u636E\uFF0C\u9000\u51FA
\u6709\u4E00\u4E2AprimeNum \u534F\u7A0B\u56E0\u4E3A\u53D6\u4E0D\u5230\u6570\u636E\uFF0C\u9000\u51FA
\u6709\u4E00\u4E2AprimeNum \u534F\u7A0B\u56E0\u4E3A\u53D6\u4E0D\u5230\u6570\u636E\uFF0C\u9000\u51FA
\u6709\u4E00\u4E2AprimeNum \u534F\u7A0B\u56E0\u4E3A\u53D6\u4E0D\u5230\u6570\u636E\uFF0C\u9000\u51FA
\u6709\u4E00\u4E2AprimeNum \u534F\u7A0B\u56E0\u4E3A\u53D6\u4E0D\u5230\u6570\u636E\uFF0C\u9000\u51FA
\u6709\u4E00\u4E2AprimeNum \u534F\u7A0B\u56E0\u4E3A\u53D6\u4E0D\u5230\u6570\u636E\uFF0C\u9000\u51FA
\u6709\u4E00\u4E2AprimeNum \u534F\u7A0B\u56E0\u4E3A\u53D6\u4E0D\u5230\u6570\u636E\uFF0C\u9000\u51FA
\u6709\u4E00\u4E2AprimeNum \u534F\u7A0B\u56E0\u4E3A\u53D6\u4E0D\u5230\u6570\u636E\uFF0C\u9000\u51FA
\u4F7F\u7528\u534F\u7A0B\u8017\u65F6<span class="token operator">=</span> <span class="token number">2</span>
main\u7EBF\u7A0B\u9000\u51FA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channel\u4F7F\u7528\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#channel\u4F7F\u7528\u7EC6\u8282" aria-hidden="true">#</a> channel\u4F7F\u7528\u7EC6\u8282</h2><p><strong>\u7BA1\u9053\u53EF\u4EE5\u58F0\u660E\u4E3A\u53EA\u8BFB\u6216\u8005\u53EA\u5199\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7BA1\u9053\u662F\u5373\u53EF\u8BFB\uFF0C\u4E5F\u53EF\u4EE5\u5199\u5165</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u9ED8\u8BA4\u53EF\u8BFB\u53EF\u5199</span>
    <span class="token keyword">var</span> chan0 <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span>
    
    <span class="token comment">//\u53EA\u5199</span>
    <span class="token keyword">var</span> chan1 <span class="token keyword">chan</span> <span class="token operator">&lt;-</span> <span class="token builtin">int</span> 
    chan1 <span class="token operator">=</span> <span class="token function">maker</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>   
    
    <span class="token comment">//\u53EA\u8BFB</span>
    <span class="token keyword">var</span> chan2 <span class="token operator">&lt;-</span> <span class="token keyword">chan</span> <span class="token builtin">int</span>
    num2 <span class="token operator">:=</span> <span class="token operator">&lt;</span> chan2     <span class="token comment">//\u53EA\u8BFB</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F5C\u7528\u8303\u56F4\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
    exitChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> sturct<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">send</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span>exitChan<span class="token punctuation">)</span>       <span class="token comment">//\u53EA\u5199</span>
    <span class="token keyword">go</span> <span class="token function">recv</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span>exitChan<span class="token punctuation">)</span>       <span class="token comment">//\u53EA\u8BFB</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u800C\u4E14Go\u8BED\u8A00\u5728\u5E95\u5C42\u505A\u4E86\u4F18\u5316\uFF0C\u6240\u4EE5\u6548\u7387\u66F4\u9AD8\u4E00\u4E9B</p></blockquote><hr><blockquote><p>\u5728\u6211\u4EEC\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u53EF\u80FD\u4E0D\u597D\u786E\u5B9A\u4EC0\u4E48\u65F6\u5019\u5173\u95ED\u8BE5\u7BA1\u9053\uFF0C\u6B64\u65F6\u6211\u4EEC\u5C31\u4E0D\u80FD\u7528close\uFF0C\u53EF\u4EE5\u4F7F\u7528select\u89E3\u51B3\u65B9\u6CD5</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">select</span><span class="token punctuation">{</span>
	<span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span>\u7BA1\u9053
	<span class="token operator">...</span><span class="token punctuation">.</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
	\u8BED\u53E5
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6848\u4F8B</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*\u524D\u9762\u6709\u4E24\u4E2A\u7BA1\u9053*/</span>
label          <span class="token comment">//\u6807\u7B7E\uFF0C\u91CD\u65B0\u8BFB\u53D6\u6570\u636E</span>
<span class="token keyword">for</span><span class="token punctuation">{</span>
    <span class="token keyword">select</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span>intChan <span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Prinf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4ECEintChan\u7BA1\u9053\u4E2D\u53D6\u51FA\u6570\u636E%d\\n&quot;</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
        <span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span>stringChan <span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Prinf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4ECEstringChan\u7BA1\u9053\u4E2D\u53D6\u51FA\u6570\u636E%d\\n&quot;</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Prinf</span><span class="token punctuation">(</span><span class="token string">&quot;\u90FD\u53D6\u4E0D\u5230\u4E86\uFF0C\u52A0\u5165\u4E1A\u52A1\u903B\u8F91\uFF0C\u52A0\u5165\u6216\u8005&quot;</span><span class="token punctuation">)</span>
        	breaK
        <span class="token comment">/*return : \u4EE3\u8868\u8DF3\u51FA\u8FD9\u4E2A\u51FD\u6570*/</span>
        <span class="token comment">//\u6216\u8005\u4F7F\u7528\u6807\u7B7E</span>
        <span class="token comment">/* break label */</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="18.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="20.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,61),U=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),V={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),R=s(")"),j=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),I={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},W=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function Y(z,G){const t=o("router-link"),p=o("ExternalLinkIcon"),i=o("RouterLink");return l(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(t,{to:"#channel-\u7BA1\u9053-1"},{default:e(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#chan\u5E95\u5C42\u5206\u6790"},{default:e(()=>[b]),_:1})]),n("li",null,[a(t,{to:"#channel\u5173\u95ED"},{default:e(()=>[h]),_:1})]),n("li",null,[a(t,{to:"#channel\u7684\u904D\u5386"},{default:e(()=>[g]),_:1})]),n("li",null,[a(t,{to:"#goroutine-\u548C-channel\u7ED3\u5408"},{default:e(()=>[f]),_:1})]),n("li",null,[a(t,{to:"#channel\u4F7F\u7528\u7EC6\u8282"},{default:e(()=>[w]),_:1})]),n("li",null,[a(t,{to:"#end-\u94FE\u63A5"},{default:e(()=>[y]),_:1})])])]),C,n("p",null,[_,n("a",q,[x,a(p)])]),N,n("p",null,[P,n("a",E,[D,a(p)])]),S,A,n("blockquote",null,[n("p",null,[M,n("a",B,[T,a(p)])])]),L,n("ul",null,[n("li",null,[n("p",null,[a(i,{to:"/"},{default:e(()=>[U]),_:1})])]),n("li",null,[n("p",null,[n("a",V,[F,a(p)]),R])]),n("li",null,[n("p",null,[j,n("a",I,[W,a(p)])])])])])}const H=c(d,[["render",Y],["__file","19.html.vue"]]);export{H as default};
