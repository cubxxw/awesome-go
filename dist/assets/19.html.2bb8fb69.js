import{_ as o,r as i,o as l,c as u,a as n,b as a,w as e,e as s,d}from"./app.7c9b91df.js";const r={},k=n("h1",{id:"channel-\u7BA1\u9053-\u4EE5\u53CA\u4E92\u65A5\u9501",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#channel-\u7BA1\u9053-\u4EE5\u53CA\u4E92\u65A5\u9501","aria-hidden":"true"},"#"),s(" channel(\u7BA1\u9053)\u4EE5\u53CA\u4E92\u65A5\u9501")],-1),v={class:"table-of-contents"},m=s("channel(\u7BA1\u9053)"),b=s("chan\u5E95\u5C42\u5206\u6790"),h=s("channel\u5173\u95ED"),g=s("channel\u7684\u904D\u5386"),f=s("goroutine \u548C channel\u7ED3\u5408"),w=s("\u7EDF\u8BA1\u7D20\u6570"),y=s("channel\u4F7F\u7528\u7EC6\u8282"),q=s("\u5355\u5411\u7BA1\u9053"),x=s("select\u591A\u8DEF\u590D\u7528"),_=s("\u534F\u7A0B\u7684panic\u5904\u7406"),C=s("\u4E92\u65A5\u9501"),P=s("\u4E92\u65A5\u9501"),D=s("END \u94FE\u63A5"),A=n("p",null,"[toc]",-1),S=s("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),E={href:"https://golang.org/#",target:"_blank",rel:"noopener noreferrer"},N=s("https://golang.org/#"),R=n("blockquote",null,[n("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),L=s("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),M={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},B=s("https://github.com/3293172751/golang-rearn"),G=n("hr",null,null,-1),T=n("p",null,[n("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),s("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),F=s("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),W={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},U=s("http://nsddd.top"),V=d(`<hr><details class="custom-container details"><summary>\u4E0D\u540C\u7684\u534F\u7A0B\u5982\u4F55\u901A\u4FE1\uFF1F</summary><p>\u65B9\u6CD5\uFF1A</p><ol><li>\u5168\u5C40\u53D8\u91CF\u52A0\u9501\u540C\u6B65</li><li>channel</li></ol><p><strong>\u56E0\u4E3A\u6CA1\u6709\u5BF9\u5168\u5C40\u53D8\u91CF\u52A0\u9501\uFF0C\u56E0\u6B64\u4F1A\u51FA\u73B0\u8D44\u6E90\u4E89\u593A\u7684\u95EE\u9898\uFF0C\u4EE3\u7801\u4F1A\u51FA\u73B0\u9519\u8BEF\uFF0C\u6B64\u65F6\u8981\u89E3\u51B3\u7684\u8BDD\u53EF\u4EE5\u52A0\u5165\u4E92\u65A5\u9501</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> m<span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token operator">%</span>d <span class="token operator">!=</span> <span class="token operator">%</span>v\\n&quot;<span class="token punctuation">,</span>k<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2B07\uFE0F \u6216\u8BB8\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528\u7BA1\u9053</p></details><h2 id="channel-\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#channel-\u7BA1\u9053" aria-hidden="true">#</a> channel(\u7BA1\u9053)</h2><p><strong>\u6F14\u793A\u7BA1\u9053\u4F7F\u7528</strong></p><p><strong>channel\u521D\u59CB\u5316\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> intChan <span class="token keyword">chan</span> <span class="token builtin">int</span> 
intChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">\u7BA1\u9053\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B</p><p>\u4E00\u5B9A\u8981\u4F7F\u7528make\u4E0D\u7136\u4F1A\u62A5\u9519</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7531\u6B64\u53EF\u89C1\uFF0C\u7BA1\u9053\u662F\u4E00\u4E2A\u5730\u5740</strong></p></div><div class="custom-container tip"><p class="custom-container-title">\u7BA1\u9053\u7684\u57FA\u672C\u64CD\u4F5C</p><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Description:channel\u7BA1\u9053
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 14:39:30
 * @FilePath: \\code\\go-super\\37-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u7BA1\u9053</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//\u7BA1\u9053\u7684\u5BB9\u91CF\u662F10</span>

	<span class="token comment">//\u7ED9\u7BA1l\u9053\u4E2D\u5199\u5165\u6570\u636E</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">10</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">20</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">30</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">40</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len(ch) = &quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cap(ch) = &quot;</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ch = &quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span>

	<span class="token comment">//\u4ECE\u7BA1\u9053\u4E2D\u8BFB\u53D6\u6570\u636E</span>
	num <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;num = &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>   <span class="token comment">//10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u518D\u8BFB\u53D6\u4E00\u4E2A\u6570\u636E&quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span> <span class="token comment">//20</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u518D\u8BFB\u53D6\u4E00\u4E2A\u6570\u636E&quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span> <span class="token comment">//30</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u518D\u8BFB\u53D6\u4E00\u4E2A\u6570\u636E&quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span> <span class="token comment">//40</span>
	<span class="token comment">//fmt.Println(&quot;\u518D\u8BFB\u53D6\u4E00\u4E2A\u6570\u636E&quot;, &lt;-ch) //error: all goroutines are asleep - deadlock!</span>

	<span class="token comment">//\u7EE7\u7EED\u6279\u91CF\u5B58\u50A8\u6570\u636E</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">50</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">150</span>
	ch <span class="token operator">&lt;-</span> <span class="token number">250</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len(ch) = &quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cap(ch) = &quot;</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ch = &quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span>

	<span class="token comment">//\u904D\u5386\u7BA1\u9053</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		num <span class="token operator">=</span> <span class="token operator">&lt;-</span>ch
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;num = &quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super<span class="token entity" title="\\37">\\37</span>-main.go&quot;</span>
len<span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token operator">=</span>  <span class="token number">4</span>
cap<span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token operator">=</span>  <span class="token number">10</span>
ch <span class="token operator">=</span>  0xc000110000
num <span class="token operator">=</span>  <span class="token number">10</span>
\u518D\u8BFB\u53D6\u4E00\u4E2A\u6570\u636E <span class="token number">20</span>
\u518D\u8BFB\u53D6\u4E00\u4E2A\u6570\u636E <span class="token number">30</span>
\u518D\u8BFB\u53D6\u4E00\u4E2A\u6570\u636E <span class="token number">40</span>
len<span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token operator">=</span>  <span class="token number">3</span>
cap<span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token operator">=</span>  <span class="token number">10</span>
ch <span class="token operator">=</span>  0xc000110000
num <span class="token operator">=</span>  <span class="token number">50</span>
num <span class="token operator">=</span>  <span class="token number">150</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F \u26A0\uFE0F\uFF1A</p><p><code>fmt.Println(&quot;\u518D\u8BFB\u53D6\u4E00\u4E2A\u6570\u636E&quot;, &lt;-ch)</code> \uFF1Aerror: all goroutines are asleep - deadlock!</p><p><strong>\u7BA1\u9053\u963B\u585E\u5F15\u8D77\u6B7B\u9501\uFF0C\u6240\u4EE5\u4E00\u5B9A\u8981\u6CE8\u610F\u7BA1\u9053\u5BB9\u91CF~</strong></p><p>\u904D\u5386\u7BA1\u9053\uFF0C\u6211\u4EEC\u53D1\u73B0\u4E0A\u9762\u7684\u540E\u9762\u52A0\u5165<code>250</code>\u5E76\u6CA1\u6709\u6253\u5370</p><blockquote><p><strong>for\u5FAA\u73AF\u904D\u5386\u7BA1\u9053\u7684\u65F6\u5019\u7BA1\u9053\u53EF\u4EE5\u4E0D\u5173\u95ED\uFF0C\u4F46\u662Ffor-range\u5FC5\u987B\u8981\u5173\u95ED\uFF0C\u4F46\u662F\u6211\u7684for\u904D\u5386\u597D\u50CF\u4F1A\u51FA\u73B0\u6570\u636E\u4E22\u5931\uFF0C\u4E0D\u77E5\u9053\u4EC0\u4E48\u539F\u56E0</strong></p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8BB8\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>for-range</code>\u904D\u5386\uFF1A</p><ul><li>\u518D\u6B64\u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 <code>close(ch)</code> \u5173\u95ED\u7BA1\u9053</li><li>\u7BA1\u9053\u91CC\u9762\u662F\u6CA1\u6709<code>key</code></li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//\u904D\u5386\u7BA1\u9053</span>
<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> ch <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;v = &quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53EA\u4F7F\u7528for\u4E5F\u662F\u4E00\u6837\u7684\uFF1A</strong></p><p><strong>\u4E0D\u80FD\u5173\u95ED\u7BA1\u9053\uFF0C\u4E0D\u7136\u6CA1\u6CD5\u53D6\u51FA</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//\u5173\u95EDunbuffered channel</span>
<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">{</span>
	val<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch 
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u5B8C\u6BD5&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;var = &quot;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token comment">//\u4E0D\u65AD\u8BFB\u53D6\u7BA1\u9053\u4E2D\u7684\u6570\u636E</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7ED9\u5B9Amake\u503C\uFF0C\u56E0\u4E3Alen(ch)\u957F\u5EA6\u4F1A\u53D8\u5316\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F4A1} \u4E0A\u9762\u7684\u65B9\u6CD5\u4E0D\u9700\u8981\u5173\u95ED\u7BA1\u9053\u3002</p></div><details class="custom-container details"><summary>\u622A\u56FE\u6848\u4F8B</summary><p><img src="http://sm.nsddd.top/smimage-20221025150553321.png" alt="image-20221025150553321"></p><p><img src="http://sm.nsddd.top/smimage-20221025150456599.png" alt="image-20221025150456599"></p><p><img src="http://sm.nsddd.top/smimage-20221025150403386.png" alt="image-20221025150403386"></p><p><img src="http://sm.nsddd.top/smimage-20221025150523179.png" alt="image-20221025150523179"></p><p><img src="http://sm.nsddd.top/smimage-20221025151321673.png" alt="image-20221025151321673"></p><p><img src="http://sm.nsddd.top/smimage-20221025151331434.png" alt="image-20221025151331434"></p><p><img src="http://sm.nsddd.top/smimage-20221025150718790.png" alt="image-20221025150718790"></p></details><blockquote><p>\u7BA1\u9053\u662F\u4E00\u4E2A\u5E94\u7528\u7C7B\u578B\uFF0C\u4F7F\u7528\u51FD\u6570\u53D8\u5316\u7684\u662F\u5730\u5740</p></blockquote><p><strong>\u5411\u7BA1\u9053\u5199\u5165\u6570\u636E</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*************************************************************************
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="chan\u5E95\u5C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#chan\u5E95\u5C42\u5206\u6790" aria-hidden="true">#</a> chan\u5E95\u5C42\u5206\u6790</h2><details class="custom-container details"><summary>\u8FDB\u5165chan\u5E95\u5C42\u5206\u6790</summary><p><a href="chan%E5%BA%95%E5%B1%82%E5%88%86%E6%9E%90">\u26A1 chan\u5E95\u5C42\u5206\u6790</a></p></details><blockquote><p>\u5982\u679C\u6709\u4E00\u4E2A\u9700\u6C42\uFF0C\u5E0C\u671B\u7BA1\u9053\u65E2\u53EF\u4EE5\u653E\u7ED3\u6784\u4F53\uFF0C\u53C8\u53EF\u4EE5\u653E\u6307\u9488\uFF0C\u5373\u53EF\u4EE5\u653E\u5165\u4EFB\u4F55\u7C7B\u578B\u53D8\u91CF</p><p><strong>\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u7A7A\u63A5\u53E3\uFF0C\u7A7A\u63A5\u53E3\u53EF\u4EE5\u63A5\u6536\u4EFB\u4F55\u7C7B\u578B\u7684</strong></p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> allChan <span class="token keyword">chan</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>       <span class="token comment">//\u7A7A\u63A5\u53E3</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="channel\u7684\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#channel\u7684\u904D\u5386" aria-hidden="true">#</a> channel\u7684\u904D\u5386</h2><p><strong>channel\u7684\u904D\u5386\u53EA\u80FD\u4F7F\u7528<code>for-range</code>\u904D\u5386\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528\u666E\u901A\u7684for\u5FAA\u73AF,\u56E0\u4E3A\u957F\u5EA6\u4F1A\u53D8\u5316\uFF0C\u5F53\u7136\u4F60\u53EF\u4EE5\u7ED9\u5B9Amake\u7684\u56FA\u5B9A\u503C\u3002</strong></p><p><strong>\u60C5\u51B5\uFF1A</strong></p><ol><li><strong>\u904D\u5386\u65F6\uFF0Cchannel\u6CA1\u6709\u5173\u95ED\uFF0C\u51FA\u73B0deadlock\u7684\u9519\u8BEF</strong></li><li><strong>\u904D\u5386\u65F6\uFF0Cchannel\u5DF2\u7ECF\u5173\u95ED\uFF0C\u5219\u4F1A\u6B63\u5E38\u904D\u5386\uFF0C\u904D\u5386\u5B8C\u6210\uFF0C\u5C31\u9000\u51FA\u904D\u5386</strong></li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5F53\u6211\u4EECmake\u7684\u7BA1\u9053\u5BB9\u91CF\u5F88\u5C0F\uFF0C\u4F46\u662F\u5B58\u5165\u7684\u6570\u636E\u5F88\u591A\uFF0C\u90A3\u4E48\u6B64\u65F6\u4F1A\u51FA\u73B0\u8BF8\u585E</p></blockquote><h2 id="\u7EDF\u8BA1\u7D20\u6570" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u8BA1\u7D20\u6570" aria-hidden="true">#</a> \u7EDF\u8BA1\u7D20\u6570</h2><blockquote><p>\u6211\u4EEC\u56DE\u5230\u5F00\u59CB\u7684\u90A3\u4E00\u4E2A\u95EE\u9898\uFF0C\u4E00\u4E2A\u9700\u6C42,\u7EDF\u8BA1<code>1~80000</code>\u4E2D\u6709\u54EA\u4E9B\u7D20\u6570</p><p>\u6211\u4EEC\u5F53\u65F6\u60F3\u5230\u7684\u65B9\u6CD5\u662F\u5C06\u7EDF\u8BA1\u7D20\u6570\u7684\u4EFB\u52A1\u5206\u914D\u7ED94\u4E2ACPU\u53BB\u505A\uFF08\u6211\u53EA\u67094\u4E2A<strong>\u5E76\u884C</strong>\uFF0C\u75288\u4E2A<strong>\u5E76\u53D1</strong></p></blockquote><details class="custom-container details"><summary>\u4E3B\u8981\u601D\u8DEF</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channel\u4F7F\u7528\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#channel\u4F7F\u7528\u7EC6\u8282" aria-hidden="true">#</a> channel\u4F7F\u7528\u7EC6\u8282</h2><h3 id="\u5355\u5411\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u5355\u5411\u7BA1\u9053" aria-hidden="true">#</a> \u5355\u5411\u7BA1\u9053</h3><details class="custom-container details"><summary>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Description:go \u7BA1\u9053
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 16:55:49
 * @FilePath: \\code\\go-super\\39-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
	ch1 <span class="token operator">&lt;-</span> <span class="token string">&quot;a&quot;</span> <span class="token comment">//\u5199\u5165\u7BA1\u9053</span>
	a <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1 <span class="token comment">//\u8BFB\u53D6\u7BA1\u9053</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u7BA1\u9053&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

	ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//\u7BA1\u9053\u53EA\u80FD\u5199\u5165</span>
	ch2 <span class="token operator">&lt;-</span> <span class="token string">&quot;b&quot;</span>                    <span class="token comment">//\u5199\u5165\u7BA1\u9053</span>
	<span class="token comment">// b := &lt;-ch2                 //\u8BFB\u53D6\u7BA1\u9053</span>
	<span class="token comment">// fmt.Println(&quot;\u8BFB\u53D6\u7BA1\u9053&quot;, b) //\u8BFB\u53D6\u7BA1\u9053</span>

	ch3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//\u7BA1\u9053\u53EA\u80FD\u8BFB\u53D6</span>
	<span class="token comment">// ch3 &lt;- &quot;c&quot; //\u5199\u5165\u7BA1\u9053</span>
	c <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch3             <span class="token comment">//\u8BFB\u53D6\u7BA1\u9053</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u7BA1\u9053&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">//\u8BFB\u53D6\u7BA1\u9053</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super<span class="token entity" title="\\3">\\3</span>9-main.go&quot;</span>
\u8BFB\u53D6\u7BA1\u9053 a
fatal error: all goroutines are asleep - deadlock<span class="token operator">!</span>

goroutine <span class="token number">1</span> <span class="token punctuation">[</span>chan receive<span class="token punctuation">]</span>:
main.main<span class="token punctuation">(</span><span class="token punctuation">)</span>
	d:/\u6587\u6863/\u6700\u8FD1\u7684/awesome-golang/docs/code/go-super/39-main.go:29 +0x106
<span class="token builtin class-name">exit</span> status <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></details><p><strong>\u7BA1\u9053\u53EF\u4EE5\u58F0\u660E\u4E3A\u53EA\u8BFB\u6216\u8005\u53EA\u5199\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7BA1\u9053\u662F\u5373\u53EF\u8BFB\uFF0C\u4E5F\u53EF\u4EE5\u5199\u5165</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u800C\u4E14Go\u8BED\u8A00\u5728\u5E95\u5C42\u505A\u4E86\u4F18\u5316\uFF0C\u6240\u4EE5\u6548\u7387\u66F4\u9AD8\u4E00\u4E9B</p></blockquote><p>::: details\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A \u7BA1\u9053\u7684\u53EA\u8BFB\u548C\u53EA\u5199\u64CD\u4F5C\u5B9A\u4E49</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Description:go\u53EA\u8BFB\u53EA\u5199\u7BA1\u9053
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:16:21
 * @FilePath: \\code\\go-super\\40-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token comment">// \u53EA\u8BFB\u7BA1\u9053</span>
<span class="token keyword">func</span> <span class="token function">readChan</span><span class="token punctuation">(</span>ch <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		num <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
		<span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EA\u5199\u7BA1\u9053</span>
<span class="token keyword">func</span> <span class="token function">writeChan</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		ch <span class="token operator">&lt;-</span> i
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// 100\u6BEB\u79D2\u5C31\u662F0.1\u79D2</span>
	<span class="token punctuation">}</span>
	<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> ch <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">writeChan</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token comment">// \u53EA\u5199</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">readChan</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token comment">// \u53EA\u8BFB</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super<span class="token entity" title="\\40">\\40</span>-main.go&quot;</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>
<span class="token number">9</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="select\u591A\u8DEF\u590D\u7528" tabindex="-1"><a class="header-anchor" href="#select\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a> select\u591A\u8DEF\u590D\u7528</h3><div class="custom-container tip"><p class="custom-container-title">select\u591A\u8DEF\u590D\u7528</p><p>\u5728\u6211\u4EEC\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u53EF\u80FD\u4E0D\u597D\u786E\u5B9A\u4EC0\u4E48\u65F6\u5019\u5173\u95ED\u8BE5\u7BA1\u9053\uFF0C\u6B64\u65F6\u6211\u4EEC\u5C31\u4E0D\u80FD\u7528close\uFF0C\u53EF\u4EE5\u4F7F\u7528select\u89E3\u51B3\u65B9\u6CD5</p><p><strong>\u6CE8\u610F\uFF1A\u4F7F\u7528\u591A\u8DEF\u590D\u7528\u7684\u65F6\u5019\u4E0D\u9700\u8981\u5173\u95ED<code>chan</code></strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">select</span><span class="token punctuation">{</span>
	<span class="token keyword">case</span> v<span class="token operator">:=</span> <span class="token operator">&lt;-</span>\u7BA1\u9053
	<span class="token operator">...</span><span class="token punctuation">.</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
	\u8BED\u53E5
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><details class="custom-container details"><summary>\u591A\u8DEF\u590D\u7528\u7684\u89E3\u51B3\u65B9\u6848</summary><p><strong>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u6211\u4EEC\u9700\u8981\u5728\u591A\u4E2A\u7BA1\u9053\u4E2D\u53D6\u51FA\u6570\u636E\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Description:select \u591A\u8DEF\u590D\u7528
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:29:28
 * @FilePath: \\code\\go-super\\41-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//int\u548Cint64\u7684\u533A\u522B: int\u662F\u6839\u636E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4F4D\u6570\u6765\u51B3\u5B9A\u7684\uFF0C32\u4F4D\u7CFB\u7EDF\u5C31\u662Fint32\uFF0C64\u4F4D\u7CFB\u7EDF\u5C31\u662Fint64</span>
	ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
	ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

	<span class="token comment">//\u5FAA\u73AF\u8F93\u5165\u7BA1\u9053</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		ch1 <span class="token operator">&lt;-</span> i
		ch2 <span class="token operator">&lt;-</span> i
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u7BA1\u90531&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			<span class="token keyword">case</span> v <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch2<span class="token punctuation">:</span>
				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u7BA1\u90532&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super<span class="token entity" title="\\41">\\41</span>-main.go&quot;</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">0</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">0</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">1</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">1</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">2</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">3</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">2</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">4</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">15</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">16</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">26</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">17</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">27</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">28</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">29</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">18</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">19</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">30</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">31</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">20</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">32</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">21</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">22</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">33</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">23</span>
\u8BFB\u53D6\u7BA1\u90532 <span class="token number">34</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>.
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">98</span>
\u8BFB\u53D6\u7BA1\u90531 <span class="token number">99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*\u524D\u9762\u6709\u4E24\u4E2A\u7BA1\u9053*/</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u534F\u7A0B\u7684panic\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u534F\u7A0B\u7684panic\u5904\u7406" aria-hidden="true">#</a> \u534F\u7A0B\u7684panic\u5904\u7406</h2><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Description:Go\u8BED\u8A00\u534F\u7A0B\u5F02\u5E38\u5904\u7406
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 17:50:10
 * @FilePath: \\code\\go-super\\44-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u534F\u7A0B\u51FA\u73B0\u5F02\u5E38:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">// \u8FD9\u91CC\u4F1A\u51FA\u73B0\u6570\u7EC4\u8D8A\u754C\u5F02\u5E38</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u534F\u7A0B\u51FA\u73B0\u5F02\u5E38:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> mapping_1 <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	mapping_1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span> <span class="token comment">// \u8FD9\u91CC\u4F1A\u51FA\u73B0\u7A7A\u6307\u9488\u5F02\u5E38</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super<span class="token entity" title="\\44">\\44</span>-main.go&quot;</span>
\u534F\u7A0B\u51FA\u73B0\u5F02\u5E38: assignment to entry <span class="token keyword">in</span> nil map
\u534F\u7A0B\u51FA\u73B0\u5F02\u5E38: runtime error: index out of range <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> with length <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F4DC} \u5BF9\u4E0A\u9762\u7684\u89E3\u91CA\uFF1A</p><blockquote><p>\u534F\u7A0B\u51FA\u73B0\u5F02\u5E38\uFF1A\u8D4B\u503C\u7ED9\u7A7A\u6620\u5C04\u4E2D\u7684\u6761\u76EE\uFF08\u6570\u7EC4\u8D8A\u754C\uFF09</p><p>\u534F\u7A0B\u51FA\u73B0\u5F02\u5E38\uFF1A\u8FD0\u884C\u65F6\u9519\u8BEF:\u7D22\u5F15\u8D85\u51FA\u8303\u56F4[0]\uFF0C\u957F\u5EA6\u4E3A0</p></blockquote><h2 id="\u4E92\u65A5\u9501" tabindex="-1"><a class="header-anchor" href="#\u4E92\u65A5\u9501" aria-hidden="true">#</a> \u4E92\u65A5\u9501</h2><div class="custom-container warning"><p class="custom-container-title">\u8D44\u6E90\u7ADE\u4E89\u95EE\u9898</p><p><strong>\u6211\u4EEC\u53EF\u80FD\u4F1A\u4F7F\u7528\u534F\u7A0B\u540C\u65F6\u64CD\u4F5C<code>count</code>\u51FA\u73B0\u8D44\u6E90\u7ADE\u4E89\u7684\u95EE\u9898\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Description:\u8D44\u6E90\u7ADE\u4E89\u6B7B\u9501
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 18:13:35
 * @FilePath: \\code\\go-super\\45-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">var</span> count <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the count is &quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the count is &quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>\u6839\u636E\u4E0D\u540C\u7684\u7F16\u8BD1\u65B9\u5F0F\u7F16\u8BD1\u7ED3\u679C\u4E0D\u540C</summary><p><strong>\u76F4\u63A5build\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>the count is  <span class="token number">1</span>
the count is  <span class="token number">2</span>
the count is  <span class="token number">26</span>
the count is  <span class="token number">4</span>
the count is  <span class="token number">5</span>
the count is  <span class="token number">6</span>
the count is  <span class="token number">7</span>
the count is  <span class="token number">8</span>
the count is  <span class="token number">9</span>
the count is  <span class="token number">10</span>
the count is  <span class="token number">11</span>
the count is  <span class="token number">12</span>
the count is  <span class="token number">13</span>
the count is  <span class="token number">14</span>
the count is  <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u4E0A<code>-race</code>\u67E5\u770B\u7A0B\u5E8F\u8FD0\u884C\u65F6\u5019\u6709\u7ADE\u4E89\u5173\u7CFB</p><p>\u6B64\u65F6\u5C31\u51FA\u95EE\u9898\u4E86</p></details></div><h3 id="\u4E92\u65A5\u9501-1" tabindex="-1"><a class="header-anchor" href="#\u4E92\u65A5\u9501-1" aria-hidden="true">#</a> \u4E92\u65A5\u9501</h3><p>\u4E92\u65A5\u9501\u662F\u4E00\u79CD\u5E38\u7528\u7684\u540C\u6B65\u673A\u5236\uFF0C\u7528\u4E8E\u5728\u591A\u4E2A\u7EBF\u7A0B\u4E2D\u5BF9\u5171\u4EAB\u8D44\u6E90\u8FDB\u884C\u8BBF\u95EE\u63A7\u5236\u3002\u4E92\u65A5\u9501\u7684\u539F\u7406\u662F\uFF1A\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90\u65F6\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u4E0D\u80FD\u8BBF\u95EE\u8BE5\u5171\u4EAB\u8D44\u6E90\uFF0C\u76F4\u5230\u8BE5\u7EBF\u7A0B\u8BBF\u95EE\u5B8C\u6BD5\u3002\u4E92\u65A5\u9501\u53EF\u4EE5\u4FDD\u8BC1\u5171\u4EAB\u8D44\u6E90\u5728\u540C\u4E00\u65F6\u523B\u53EA\u88AB\u4E00\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u8D44\u6E90\u7684\u7ADE\u4E89\u548C\u4E0D\u4E00\u81F4\u6027\u3002 \u4E92\u65A5\u9501\u7684\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><ol><li>\u5B9A\u4E49\u4E00\u4E2A\u4E92\u65A5\u9501\u53D8\u91CF</li><li>\u5728\u9700\u8981\u52A0\u9501\u7684\u5730\u65B9\u52A0\u9501</li><li>\u5728\u9700\u8981\u89E3\u9501\u7684\u5730\u65B9\u89E3\u9501</li></ol><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> mutex sync<span class="token punctuation">.</span>Mutex <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u4E92\u65A5\u9501\u53D8\u91CF</span>
mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u52A0\u9501</span>
<span class="token comment">//\u8FD9\u91CC\u9762\u8FDB\u884C\u64CD\u4F5C</span>
mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u89E3\u9501</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</summary><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Description:\u8D44\u6E90\u7ADE\u4E89\u6B7B\u9501
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-25 18:26:07
 * @FilePath: \\code\\go-super\\45-main.go
 * @Github_Address: https://github.com/3293172751/cs-awesome-Block_Chain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> mutex sync<span class="token punctuation">.</span>Mutex <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u4E92\u65A5\u9501\u53D8\u91CF</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
<span class="token keyword">var</span> count <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u52A0\u9501</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the count is &quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u89E3\u9501</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u52A0\u9501</span>
	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;the count is &quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u89E3\u9501</span>
	wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
\u4E92\u65A5\u9501\u662F\u4E00\u79CD\u5E38\u7528\u7684\u540C\u6B65\u673A\u5236\uFF0C\u7528\u4E8E\u5728\u591A\u4E2A\u7EBF\u7A0B\u4E2D\u5BF9\u5171\u4EAB\u8D44\u6E90\u8FDB\u884C\u8BBF\u95EE\u63A7\u5236\u3002\u4E92\u65A5\u9501\u7684\u539F\u7406\u662F\uFF1A\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90\u65F6\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u4E0D\u80FD\u8BBF\u95EE\u8BE5\u5171\u4EAB\u8D44\u6E90\uFF0C\u76F4\u5230\u8BE5\u7EBF\u7A0B\u8BBF\u95EE\u5B8C\u6BD5\u3002\u4E92\u65A5\u9501\u53EF\u4EE5\u4FDD\u8BC1\u5171\u4EAB\u8D44\u6E90\u5728\u540C\u4E00\u65F6\u523B\u53EA\u88AB\u4E00\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u8D44\u6E90\u7684\u7ADE\u4E89\u548C\u4E0D\u4E00\u81F4\u6027\u3002
\u4E92\u65A5\u9501\u7684\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A
1. \u5B9A\u4E49\u4E00\u4E2A\u4E92\u65A5\u9501\u53D8\u91CF
2. \u5728\u9700\u8981\u52A0\u9501\u7684\u5730\u65B9\u52A0\u9501
3. \u5728\u9700\u8981\u89E3\u9501\u7684\u5730\u65B9\u89E3\u9501

var mutex sync.Mutex // \u5B9A\u4E49\u4E00\u4E2A\u4E92\u65A5\u9501\u53D8\u91CF
mutex.Lock() // \u52A0\u9501
\u8FD9\u91CC\u9762\u8FDB\u884C\u64CD\u4F5C
mutex.Unlock() // \u89E3\u9501
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>\u6587\u6863<span class="token punctuation">\\</span>\u6700\u8FD1\u7684<span class="token punctuation">\\</span>awesome-golang<span class="token punctuation">\\</span>docs<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>go-super<span class="token operator">&gt;</span><span class="token number">45</span>-main.exe
the count is  <span class="token number">1</span>
the count is  <span class="token number">2</span>
the count is  <span class="token number">3</span>
the count is  <span class="token number">4</span>
the count is  <span class="token number">5</span>
the count is  <span class="token number">6</span>
the count is  <span class="token number">7</span>
the count is  <span class="token number">8</span>
the count is  <span class="token number">9</span>
the count is  <span class="token number">10</span>
the count is  <span class="token number">11</span>
the count is  <span class="token number">12</span>
the count is  <span class="token number">13</span>
the count is  <span class="token number">14</span>
the count is  <span class="token number">15</span>
the count is  <span class="token number">16</span>
the count is  <span class="token number">17</span>
the count is  <span class="token number">18</span>
the count is  <span class="token number">19</span>
the count is  <span class="token number">20</span>
the count is  <span class="token number">21</span>
the count is  <span class="token number">22</span>
the count is  <span class="token number">23</span>
the count is  <span class="token number">24</span>
the count is  <span class="token number">25</span>
the count is  <span class="token number">26</span>
the count is  <span class="token number">27</span>
the count is  <span class="token number">28</span>
the count is  <span class="token number">29</span>
the count is  <span class="token number">30</span>
the count is  <span class="token number">31</span>
the count is  <span class="token number">32</span>
the count is  <span class="token number">33</span>
the count is  <span class="token number">34</span>
the count is  <span class="token number">35</span>
the count is  <span class="token number">36</span>
the count is  <span class="token number">37</span>
the count is  <span class="token number">38</span>
the count is  <span class="token number">39</span>
the count is  <span class="token number">40</span>
the count is  <span class="token number">41</span>
the count is  <span class="token number">42</span>
the count is  <span class="token number">43</span>
the count is  <span class="token number">44</span>
the count is  <span class="token number">45</span>
the count is  <span class="token number">46</span>
the count is  <span class="token number">47</span>
the count is  <span class="token number">48</span>
the count is  <span class="token number">49</span>
the count is  <span class="token number">50</span>
the count is  <span class="token number">51</span>
the count is  <span class="token number">52</span>
the count is  <span class="token number">53</span>
the count is  <span class="token number">54</span>
the count is  <span class="token number">55</span>
the count is  <span class="token number">56</span>
the count is  <span class="token number">57</span>
the count is  <span class="token number">58</span>
the count is  <span class="token number">59</span>
the count is  <span class="token number">60</span>
the count is  <span class="token number">61</span>
the count is  <span class="token number">62</span>
the count is  <span class="token number">63</span>
the count is  <span class="token number">64</span>
the count is  <span class="token number">65</span>
the count is  <span class="token number">66</span>
the count is  <span class="token number">67</span>
the count is  <span class="token number">68</span>
the count is  <span class="token number">69</span>
the count is  <span class="token number">70</span>
the count is  <span class="token number">71</span>
the count is  <span class="token number">72</span>
the count is  <span class="token number">73</span>
the count is  <span class="token number">74</span>
the count is  <span class="token number">75</span>
the count is  <span class="token number">76</span>
the count is  <span class="token number">77</span>
the count is  <span class="token number">78</span>
the count is  <span class="token number">79</span>
the count is  <span class="token number">80</span>
the count is  <span class="token number">81</span>
the count is  <span class="token number">82</span>
the count is  <span class="token number">83</span>
the count is  <span class="token number">84</span>
the count is  <span class="token number">85</span>
the count is  <span class="token number">86</span>
the count is  <span class="token number">87</span>
the count is  <span class="token number">88</span>
the count is  <span class="token number">89</span>
the count is  <span class="token number">90</span>
the count is  <span class="token number">91</span>
the count is  <span class="token number">92</span>
the count is  <span class="token number">93</span>
the count is  <span class="token number">94</span>
the count is  <span class="token number">95</span>
the count is  <span class="token number">96</span>
the count is  <span class="token number">97</span>
the count is  <span class="token number">98</span>
the count is  <span class="token number">99</span>
the count is  <span class="token number">100</span>
the count is  <span class="token number">101</span>
the count is  <span class="token number">102</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container tip"><p class="custom-container-title">\u603B\u7ED3</p><p>\u8BFB\u5199\u9501\u53EF\u4EE5\u8BA9\u591A\u4E2A\u8BFB\u64CD\u4F5C\u5E76\u53D1\uFF0C\u540C\u65F6\u8BFB\u53D6\uFF0C\u4F46\u662F\u5BF9\u4E8E\u5199\u64CD\u4F5C\u662F\u5B8C\u5168\u4E92\u65A5\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u4E00\u4E2Agoroutine\u8FDB\u884C\u5199\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u5176\u4ED6\u7684goroutine\u65E2\u4E0D\u80FD\u8FDB\u884C\u8BFB\u64CD\u4F5C\uFF0C\u4E5F\u4E0D\u80FD\u8FDB\u884C\u5199\u64CD\u4F5C\u3002</p></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="18.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="20.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,75),j=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),I={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},z=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),K=s(")"),Y=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),H={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},J=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function O(Q,X){const t=i("router-link"),p=i("ExternalLinkIcon"),c=i("RouterLink");return l(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(t,{to:"#channel-\u7BA1\u9053"},{default:e(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#chan\u5E95\u5C42\u5206\u6790"},{default:e(()=>[b]),_:1})]),n("li",null,[a(t,{to:"#channel\u5173\u95ED"},{default:e(()=>[h]),_:1})]),n("li",null,[a(t,{to:"#channel\u7684\u904D\u5386"},{default:e(()=>[g]),_:1})]),n("li",null,[a(t,{to:"#goroutine-\u548C-channel\u7ED3\u5408"},{default:e(()=>[f]),_:1})]),n("li",null,[a(t,{to:"#\u7EDF\u8BA1\u7D20\u6570"},{default:e(()=>[w]),_:1})]),n("li",null,[a(t,{to:"#channel\u4F7F\u7528\u7EC6\u8282"},{default:e(()=>[y]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u5355\u5411\u7BA1\u9053"},{default:e(()=>[q]),_:1})]),n("li",null,[a(t,{to:"#select\u591A\u8DEF\u590D\u7528"},{default:e(()=>[x]),_:1})])])]),n("li",null,[a(t,{to:"#\u534F\u7A0B\u7684panic\u5904\u7406"},{default:e(()=>[_]),_:1})]),n("li",null,[a(t,{to:"#\u4E92\u65A5\u9501"},{default:e(()=>[C]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u4E92\u65A5\u9501-1"},{default:e(()=>[P]),_:1})])])]),n("li",null,[a(t,{to:"#end-\u94FE\u63A5"},{default:e(()=>[D]),_:1})])])]),A,n("p",null,[S,n("a",E,[N,a(p)])]),R,n("p",null,[L,n("a",M,[B,a(p)])]),G,T,n("blockquote",null,[n("p",null,[F,n("a",W,[U,a(p)])])]),V,n("ul",null,[n("li",null,[n("p",null,[a(c,{to:"/"},{default:e(()=>[j]),_:1})])]),n("li",null,[n("p",null,[n("a",I,[z,a(p)]),K])]),n("li",null,[n("p",null,[Y,n("a",H,[J,a(p)])])])])])}const $=o(r,[["render",O],["__file","19.html.vue"]]);export{$ as default};
