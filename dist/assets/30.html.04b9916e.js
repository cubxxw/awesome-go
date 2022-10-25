import{_ as i,r as e,o as c,c as l,a as n,b as a,w as o,e as s,d as u}from"./app.7dcc2da0.js";const r="/assets/f8xmIhTgXNzSEZM.dc09170d.png",d="/assets/N26PriUIvhj81Ca.84441cc5.png",k="/assets/GN7ZSp1vy9uRWs8.d052f3bc.gif",v="/assets/Ne8Ppn3qlCGoaHu.e5e1f549.gif",m={},b=n("h1",{id:"\u6392\u5E8F\u7B97\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6392\u5E8F\u7B97\u6CD5","aria-hidden":"true"},"#"),s(" \u6392\u5E8F\u7B97\u6CD5")],-1),f=n("p",null,"[[otc]]",-1),g=n("p",null,"[TOC]",-1),h=s("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),_={href:"https://golang.org/#",target:"_blank",rel:"noopener noreferrer"},q=s("https://golang.org/#"),x=n("blockquote",null,[n("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),w=s("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),y={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},I=s("https://github.com/3293172751/golang-rearn"),j=n("hr",null,null,-1),S=n("p",null,[n("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),s("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),E=s("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),P={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},C=s("http://nsddd.top"),A={class:"custom-container tip"},V=n("p",{class:"custom-container-title"},"\u524D\u5F80\u5192\u6CE1\u6392\u5E8F\u5B66\u4E60",-1),N=s("\u5192\u6CE1\u6392\u5E8F\u662F\u6700\u57FA\u7840\u7684\u6392\u5E8F\uFF0C\u4E5F\u662F\u65F6\u95F4\u590D\u6742\u5EA6\u6700\u9AD8\u7684\u6392\u5E8F\u65B9\u6CD5"),G=u(`<h2 id="\u9009\u62E9\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u6392\u5E8F" aria-hidden="true">#</a> \u9009\u62E9\u6392\u5E8F</h2><p><strong>\u4ECE\u5C0F\u5230\u5927\uFF0C\u5C42\u5C42\u89E3\u6790\u6392\u5E8F</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u6392\u5E8F\u7B97\u6CD5  -- \u9009\u62E9\u6392\u5E8F</span>
<span class="token keyword">func</span> <span class="token function">SelectSort</span><span class="token punctuation">(</span>arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u6570\u7EC4\u9ED8\u8BA4\u662F\u503C\u4F20\u9012\uFF0C\u8981\u60F3\u6539\u53D8\u6570\u7EC4\u7684\u503C\uFF0C\u5C31\u5FC5\u987B\u8981\u6307\u9488\u5F15\u7528\u4F20\u9012</span>
	arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">600</span> <span class="token comment">//Go\u8BED\u8A00\u5E95\u5C42\u4F18\u5316</span>
	<span class="token comment">//\u6B64\u65F6\u8FDB\u884C\u4E0B\u9762\u7684\u6392\u5E8F -- \u5148\u5B8C\u6210\u627E\u5230\u6700\u5C0F\u7684\u503C\u548Carr[0]\u4EA4\u6362</span>
	<span class="token keyword">var</span> min <span class="token builtin">int</span>
	<span class="token comment">/*\u7B2C\u4E00\u6B21\u6392\u5E8F\u5982\u4E0B\uFF1A
	min = arr[0]
	minIndx := 0 //\u5B58\u653E\u6700\u5C0F\u503C\u7684\u4E0B\u6807
	for i, v := range arr {
		if min &gt; v {
			//\u5047\u8BBE\u6700\u5927\u503C\u4EA4\u6362
			min = v //\u627E\u5230\u6700\u5C0F\u503C
			minIndx = i
		}
	}

	//\u4EA4\u6362
	if minIndx != 0 {
		arr[0], arr[minIndx] = arr[minIndx], arr[0]
		//\u76F8\u5F53\u4E8E\u4EA4\u6362\uFF0CGo\u8BED\u8A00\u5E95\u5C42\u4F7F\u7528\u4E86\u4E2D\u95F4\u53D8\u91CF\u8FDB\u884C\u5904\u7406
	}
	//\u7B2C\u4E8C\u6B21
		min = arr[1]
	minIndx := 1 //\u5B58\u653E\u6700\u5C0F\u503C\u7684\u4E0B\u6807
	for i, v := range arr {
		if min &gt; v {
			//\u5047\u8BBE\u6700\u5927\u503C\u4EA4\u6362
			min = v //\u627E\u5230\u6700\u5C0F\u503C
			minIndx = i
		}
	}

	//\u4EA4\u6362
	if minIndx != 1 {
		arr[1], arr[minIndx] = arr[minIndx], arr[1]
		//\u76F8\u5F53\u4E8E\u4EA4\u6362\uFF0CGo\u8BED\u8A00\u5E95\u5C42\u4F7F\u7528\u4E86\u4E2D\u95F4\u53D8\u91CF\u8FDB\u884C\u5904\u7406
	}
	*/</span>
	<span class="token comment">//\u5BF9\u4E0A\u9762\u4EE3\u7801\u8FDB\u884C\u5FAA\u73AF\u5904\u7406</span>
	<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
		min <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
		minIndx <span class="token operator">:=</span> j <span class="token comment">//\u5B58\u653E\u6700\u5C0F\u503C\u7684\u4E0B\u6807</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> min <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				<span class="token comment">//\u5047\u8BBE\u6700\u5927\u503C\u4EA4\u6362</span>
				min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">//\u627E\u5230\u6700\u5C0F\u503C</span>
				minIndx <span class="token operator">=</span> i
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//\u4EA4\u6362</span>
		<span class="token keyword">if</span> minIndx <span class="token operator">!=</span> j <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>minIndx<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>minIndx<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
			<span class="token comment">//\u76F8\u5F53\u4E8E\u4EA4\u6362\uFF0CGo\u8BED\u8A00\u5E95\u5C42\u4F7F\u7528\u4E86\u4E2D\u95F4\u53D8\u91CF\u8FDB\u884C\u5904\u7406</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C&quot;</span><span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6B21\u5FAA\u73AF&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u6570\u7EC4  -- \u4ECE\u5C0F\u5230\u5927\u6392\u5E8F</span>
	arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">}</span>
	<span class="token function">SelectSort</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E3B\u51FD\u6570&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="`+r+`" alt="image-20220408215647485"></p><p><strong>\u4ECE\u5927\u5230\u5C0F\uFF0C\u4F7F\u7528Go - range \u548Csort\u5305\u6392\u5E8F</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u6392\u5E8F\u7B97\u6CD5  -- \u9009\u62E9\u6392\u5E8F</span>
<span class="token keyword">func</span> <span class="token function">SelectSort</span><span class="token punctuation">(</span>arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> max <span class="token builtin">int</span>
	<span class="token keyword">for</span> j<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> arr <span class="token punctuation">{</span>
		max <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
		minIndx <span class="token operator">:=</span> j <span class="token comment">//\u5B58\u653E\u6700\u5C0F\u503C\u7684\u4E0B\u6807</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> max <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				<span class="token comment">//\u5047\u8BBE\u6700\u5927\u503C\u4EA4\u6362</span>
				max <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">//\u627E\u5230\u6700\u5C0F\u503C</span>
				minIndx <span class="token operator">=</span> i
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//\u4EA4\u6362</span>
		<span class="token keyword">if</span> minIndx <span class="token operator">!=</span> j <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>minIndx<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>minIndx<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
			<span class="token comment">//\u76F8\u5F53\u4E8E\u4EA4\u6362\uFF0CGo\u8BED\u8A00\u5E95\u5C42\u4F7F\u7528\u4E86\u4E2D\u95F4\u53D8\u91CF\u8FDB\u884C\u5904\u7406</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C&quot;</span><span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6B21\u5FAA\u73AF&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u6570\u7EC4  -- \u4ECE\u5C0F\u5230\u5927\u6392\u5E8F</span>
	arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">}</span>
	<span class="token function">SelectSort</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E3B\u51FD\u6570&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="image-20220408215606660"></p><p><strong>\u4F7F\u7528sort\u5305</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Sorting a slice of Strings</span>
	strs <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;quick&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;brown&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fox&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jumps&quot;</span><span class="token punctuation">}</span>
	sort<span class="token punctuation">.</span><span class="token function">Strings</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Sors strings: &quot;</span><span class="token punctuation">,</span> strs<span class="token punctuation">)</span>

	<span class="token comment">// Sorting a slice of Integers</span>
	ints <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">}</span>
	ints2 <span class="token operator">:=</span> ints<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>ints<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ints = : &quot;</span><span class="token punctuation">,</span> ints<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u7C7B\u578B\u4E3A%T&quot;</span><span class="token punctuation">,</span> ints<span class="token punctuation">)</span>

	<span class="token comment">//\u53CD\u8F6C\u6253\u5370\u65B9\u6CD5</span>
	sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">Reverse</span><span class="token punctuation">(</span>sort<span class="token punctuation">.</span><span class="token function">IntSlice</span><span class="token punctuation">(</span>ints2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53CD\u8F6C\u6253\u5370:&quot;</span><span class="token punctuation">,</span> ints2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u7C7B\u578B\u4E3A%T&quot;</span><span class="token punctuation">,</span> ints2<span class="token punctuation">)</span>

	<span class="token comment">// Sorting a slice of Floats</span>
	floats <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span><span class="token punctuation">{</span><span class="token number">176.8</span><span class="token punctuation">,</span> <span class="token number">19.5</span><span class="token punctuation">,</span> <span class="token number">20.8</span><span class="token punctuation">,</span> <span class="token number">57.4</span><span class="token punctuation">}</span>
	sort<span class="token punctuation">.</span><span class="token function">Float64s</span><span class="token punctuation">(</span>floats<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Sorted floats: &quot;</span><span class="token punctuation">,</span> floats<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u7C7B\u578B\u4E3A%T&quot;</span><span class="token punctuation">,</span> floats<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\chapter05\\ifdemo&gt; go run .\\main2.go
Sors strings:  [brown fox jumps quick]
ints = :  [14 19 25 56 67 78]
\u6570\u636E\u7C7B\u578B\u4E3A[]int
\u53CD\u8F6C\u6253\u5370: [78 67 56 25 19 14]
\u6570\u636E\u7C7B\u578B\u4E3A[]int
Sorted floats:  [19.5 20.8 57.4 176.8]
\u6570\u636E\u7C7B\u578B\u4E3A[]float64
PS C:\\Users\\smile\\Desk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a> \u63D2\u5165\u6392\u5E8F</h2><p>\u63D2\u5165\u6392\u5E8F\u7684\u4EE3\u7801\u5B9E\u73B0\u867D\u7136\u6CA1\u6709\u5192\u6CE1\u6392\u5E8F\u548C\u9009\u62E9\u6392\u5E8F\u90A3\u4E48\u7B80\u5355\u7C97\u66B4\uFF0C\u4F46\u5B83\u7684\u539F\u7406\u5E94\u8BE5\u662F\u6700\u5BB9\u6613\u7406\u89E3\u7684\u4E86\uFF0C\u56E0\u4E3A\u53EA\u8981\u6253\u8FC7\u6251\u514B\u724C\u7684\u4EBA\u90FD\u5E94\u8BE5\u80FD\u591F\u79D2\u61C2\u3002\u63D2\u5165\u6392\u5E8F\u662F\u4E00\u79CD\u6700\u7B80\u5355\u76F4\u89C2\u7684\u6392\u5E8F\u7B97\u6CD5\uFF0C\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\u662F\u901A\u8FC7\u6784\u5EFA\u6709\u5E8F\u5E8F\u5217\uFF0C\u5BF9\u4E8E\u672A\u6392\u5E8F\u6570\u636E\uFF0C\u5728\u5DF2\u6392\u5E8F\u5E8F\u5217\u4E2D\u4ECE\u540E\u5411\u524D\u626B\u63CF\uFF0C\u627E\u5230\u76F8\u5E94\u4F4D\u7F6E\u5E76\u63D2\u5165\u3002</p><p>\u63D2\u5165\u6392\u5E8F\u548C\u5192\u6CE1\u6392\u5E8F\u4E00\u6837\uFF0C\u4E5F\u6709\u4E00\u79CD\u4F18\u5316\u7B97\u6CD5\uFF0C\u53EB\u505A\u62C6\u534A\u63D2\u5165\u3002</p><h3 id="_1-\u7B97\u6CD5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u7B97\u6CD5\u6B65\u9AA4" aria-hidden="true">#</a> 1. \u7B97\u6CD5\u6B65\u9AA4</h3><p>\u5C06\u7B2C\u4E00\u5F85\u6392\u5E8F\u5E8F\u5217\u7B2C\u4E00\u4E2A\u5143\u7D20\u770B\u505A\u4E00\u4E2A\u6709\u5E8F\u5E8F\u5217\uFF0C\u628A\u7B2C\u4E8C\u4E2A\u5143\u7D20\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5F53\u6210\u662F\u672A\u6392\u5E8F\u5E8F\u5217\u3002</p><p>\u4ECE\u5934\u5230\u5C3E\u4F9D\u6B21\u626B\u63CF\u672A\u6392\u5E8F\u5E8F\u5217\uFF0C\u5C06\u626B\u63CF\u5230\u7684\u6BCF\u4E2A\u5143\u7D20\u63D2\u5165\u6709\u5E8F\u5E8F\u5217\u7684\u9002\u5F53\u4F4D\u7F6E\u3002\uFF08\u5982\u679C\u5F85\u63D2\u5165\u7684\u5143\u7D20\u4E0E\u6709\u5E8F\u5E8F\u5217\u4E2D\u7684\u67D0\u4E2A\u5143\u7D20\u76F8\u7B49\uFF0C\u5219\u5C06\u5F85\u63D2\u5165\u5143\u7D20\u63D2\u5165\u5230\u76F8\u7B49\u5143\u7D20\u7684\u540E\u9762\u3002\uFF09</p><h3 id="_2-\u52A8\u56FE\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#_2-\u52A8\u56FE\u6F14\u793A" aria-hidden="true">#</a> 2. \u52A8\u56FE\u6F14\u793A</h3><p><img src="`+k+`" alt="img"></p><p><strong>\u4EE3\u7801\u5B9E\u73B0</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">swich</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">/*
		//\u5B8C\u6210\u7B2C\u4E00\u6B21\uFF0C\u7ED9\u7B2C\u4E8C\u4E2A\u5143\u7D20\u8FDB\u884C\u63D2\u5165
		insertVal := arr[1]  //\u5B58\u653E\u7B2C\u4E8C\u4E2A\u5143\u7D20\u7684\u503C
		insertIndex := 1 - 1 //\u4E0B\u6807

		for insertIndex &gt;= 0 &amp;&amp; arr[insertIndex] &lt; insertVal {
			//\u5982\u679C\u63D2\u5165\u7684\u5927\uFF0C\u4E0D\u65AD\u5730\u540E\u79FB
			arr[insertIndex+1] = arr[insertIndex] //\u6570\u636E\u540E\u79FB
			insertIndex--
		}
		//\u63D2\u5165
		if insertIndex+1 != 1 {
			arr[insertIndex+1] = insertVal
		}
	*/</span>
	<span class="token comment">//\u7B2Cn\u6B21</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		insertVal <span class="token operator">:=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>  <span class="token comment">//\u5B58\u653E\u7B2C\u4E8C\u4E2A\u5143\u7D20\u7684\u503C</span>
		insertIndex <span class="token operator">:=</span> i <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">//\u4E0B\u6807</span>

		<span class="token keyword">for</span> insertIndex <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>insertIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> insertVal <span class="token punctuation">{</span>
			<span class="token comment">//\u5982\u679C\u63D2\u5165\u7684\u5927\uFF0C\u4E0D\u65AD\u5730\u540E\u79FB</span>
			arr<span class="token punctuation">[</span>insertIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>insertIndex<span class="token punctuation">]</span> <span class="token comment">//\u6570\u636E\u540E\u79FB</span>
			insertIndex<span class="token operator">--</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//\u63D2\u5165</span>
		<span class="token keyword">if</span> insertIndex<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">!=</span> i <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>insertIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> insertVal
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot;\u6B21\u63D2\u5165\u540E\u7684\u6570\u7EC4\u4E3A\uFF1A&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;arr = &quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">576</span><span class="token punctuation">}</span>
	arr1 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;arr1\u7684\u503C\u4E3A\uFF1A&quot;</span><span class="token punctuation">,</span> arr1<span class="token punctuation">)</span>
	<span class="token function">swich</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;arr \u4E2Dmain\u7684\u503C\u4E3A\uFF1A&quot;</span><span class="token punctuation">,</span> arr1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Running] go run &quot;c:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\chapter04\\demo03\\main.go&quot;
arr1\u7684\u503C\u4E3A\uFF1A [23 34 23 12 2 3 45 6 576]
\u7B2C 1 \u6B21\u63D2\u5165\u540E\u7684\u6570\u7EC4\u4E3A\uFF1A [34 23 23 12 2 3 45 6 576]
\u7B2C 2 \u6B21\u63D2\u5165\u540E\u7684\u6570\u7EC4\u4E3A\uFF1A [34 23 23 12 2 3 45 6 576]
\u7B2C 3 \u6B21\u63D2\u5165\u540E\u7684\u6570\u7EC4\u4E3A\uFF1A [34 23 23 12 2 3 45 6 576]
\u7B2C 4 \u6B21\u63D2\u5165\u540E\u7684\u6570\u7EC4\u4E3A\uFF1A [34 23 23 12 2 3 45 6 576]
\u7B2C 5 \u6B21\u63D2\u5165\u540E\u7684\u6570\u7EC4\u4E3A\uFF1A [34 23 23 12 3 2 45 6 576]
\u7B2C 6 \u6B21\u63D2\u5165\u540E\u7684\u6570\u7EC4\u4E3A\uFF1A [45 34 23 23 12 3 2 6 576]
\u7B2C 7 \u6B21\u63D2\u5165\u540E\u7684\u6570\u7EC4\u4E3A\uFF1A [45 34 23 23 12 6 3 2 576]
\u7B2C 8 \u6B21\u63D2\u5165\u540E\u7684\u6570\u7EC4\u4E3A\uFF1A [576 45 34 23 23 12 6 3 2]
arr =  [576 45 34 23 23 12 6 3 2]
arr \u4E2Dmain\u7684\u503C\u4E3A\uFF1A [576 45 34 23 23 12 6 3 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> \u5FEB\u901F\u6392\u5E8F</h2><p>\u5FEB\u901F\u6392\u5E8F\u4F7F\u7528\u5206\u6CBB\u6CD5\uFF08Divide and conquer\uFF09\u7B56\u7565\u6765\u628A\u4E00\u4E2A\u5E8F\u5217\uFF08list\uFF09\u5206\u4E3A\u8F83\u5C0F\u548C\u8F83\u5927\u76842\u4E2A\u5B50\u5E8F\u5217\uFF0C\u7136\u540E\u9012\u5F52\u5730\u6392\u5E8F\u4E24\u4E2A\u5B50\u5E8F\u5217\u3002</p><p>\u6B65\u9AA4\u4E3A\uFF1A</p><ul><li>\u6311\u9009\u57FA\u51C6\u503C\uFF1A\u4ECE\u6570\u5217\u4E2D\u6311\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u79F0\u4E3A&quot;\u57FA\u51C6&quot;\uFF08pivot\uFF09;</li><li>\u5206\u5272\uFF1A\u91CD\u65B0\u6392\u5E8F\u6570\u5217\uFF0C\u6240\u6709\u6BD4\u57FA\u51C6\u503C\u5C0F\u7684\u5143\u7D20\u6446\u653E\u5728\u57FA\u51C6\u524D\u9762\uFF0C\u6240\u6709\u6BD4\u57FA\u51C6\u503C\u5927\u7684\u5143\u7D20\u6446\u5728\u57FA\u51C6\u540E\u9762\uFF08\u4E0E\u57FA\u51C6\u503C\u76F8\u7B49\u7684\u6570\u53EF\u4EE5\u5230\u4EFB\u4F55\u4E00\u8FB9\uFF09\u3002\u5728\u8FD9\u4E2A\u5206\u5272\u7ED3\u675F\u4E4B\u540E\uFF0C\u5BF9\u57FA\u51C6\u503C\u7684\u6392\u5E8F\u5C31\u5DF2\u7ECF\u5B8C\u6210;</li><li>\u9012\u5F52\u6392\u5E8F\u5B50\u5E8F\u5217\uFF1A\u9012\u5F52\u5730\u5C06\u5C0F\u4E8E\u57FA\u51C6\u503C\u5143\u7D20\u7684\u5B50\u5E8F\u5217\u548C\u5927\u4E8E\u57FA\u51C6\u503C\u5143\u7D20\u7684\u5B50\u5E8F\u5217\u6392\u5E8F\u3002</li></ul><p>\u9012\u5F52\u5230\u6700\u5E95\u90E8\u7684\u5224\u65AD\u6761\u4EF6\u662F\u6570\u5217\u7684\u5927\u5C0F\u662F\u96F6\u6216\u4E00\uFF0C\u6B64\u65F6\u8BE5\u6570\u5217\u663E\u7136\u5DF2\u7ECF\u6709\u5E8F\u3002</p><p>\u9009\u53D6\u57FA\u51C6\u503C\u6709\u6570\u79CD\u5177\u4F53\u65B9\u6CD5\uFF0C\u6B64\u9009\u53D6\u65B9\u6CD5\u5BF9\u6392\u5E8F\u7684\u65F6\u95F4\u6027\u80FD\u6709\u51B3\u5B9A\u6027\u5F71\u54CD\u3002</p><p><img src="`+v+`" alt="img"></p><p><strong>\u4EE3\u7801\u5B9E\u73B0</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token comment">// \u5FEB\u901F\u6392\u5E8F\u5165\u53E3\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> p <span class="token builtin">int</span><span class="token punctuation">,</span> r <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9012\u5F52\u7EC8\u6B62\u6761\u4EF6</span>
    <span class="token keyword">if</span> p <span class="token operator">&gt;=</span> r <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u83B7\u53D6\u5206\u533A\u4F4D\u7F6E</span>
    q <span class="token operator">:=</span> <span class="token function">partition</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> p<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
    <span class="token comment">// \u9012\u5F52\u5206\u533A\uFF08\u6392\u5E8F\u662F\u5728\u5B9A\u4F4D pivot \u7684\u8FC7\u7A0B\u4E2D\u5B9E\u73B0\u7684\uFF09</span>
    <span class="token function">quickSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">quickSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> q <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4F4D pivot</span>
<span class="token keyword">func</span> <span class="token function">partition</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> p <span class="token builtin">int</span><span class="token punctuation">,</span> r <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4EE5\u5F53\u524D\u6570\u636E\u5E8F\u5217\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A\u521D\u59CB pivot</span>
    pivot <span class="token operator">:=</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span>
    <span class="token comment">// \u521D\u59CB\u5316 i\u3001j \u4E0B\u6807</span>
    i <span class="token operator">:=</span> p
    <span class="token comment">// \u540E\u79FB j \u4E0B\u6807\u7684\u904D\u5386\u8FC7\u7A0B</span>
    <span class="token keyword">for</span> j <span class="token operator">:=</span> p<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> r<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5C06\u6BD4 pivot \u5C0F\u7684\u6570\u4E22\u5230 [p...i-1] \u4E2D\uFF0C\u5269\u4E0B\u7684 [i...j] \u533A\u95F4\u90FD\u662F\u6BD4 pivot \u5927\u7684</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot <span class="token punctuation">{</span>
            <span class="token comment">// \u4E92\u6362 i\u3001j \u4E0B\u6807\u5BF9\u5E94\u6570\u636E</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token comment">// \u5C06 i \u4E0B\u6807\u540E\u79FB\u4E00\u4F4D</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6700\u540E\u5C06 pivot \u4E0E i \u4E0B\u6807\u5BF9\u5E94\u6570\u636E\u503C\u4E92\u6362</span>
    <span class="token comment">// \u8FD9\u6837\u4E00\u6765\uFF0Cpivot \u5C31\u4F4D\u4E8E\u5F53\u524D\u6570\u636E\u5E8F\u5217\u4E2D\u95F4\uFF0Ci \u4E5F\u5C31\u662F pivot \u503C\u5BF9\u5E94\u7684\u4E0B\u6807</span>
    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> pivot<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// \u8FD4\u56DE i \u4F5C\u4E3A pivot \u5206\u533A\u4F4D\u7F6E</span>
    <span class="token keyword">return</span> i
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span>
    <span class="token function">quickSort</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="29.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="\u5E76\u53D1.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,35),D=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),B={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),T=s(")"),R=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),L={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},U=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function z(W,Z){const t=e("ExternalLinkIcon"),p=e("RouterLink");return c(),l("div",null,[b,f,g,n("p",null,[h,n("a",_,[q,a(t)])]),x,n("p",null,[w,n("a",y,[I,a(t)])]),j,S,n("blockquote",null,[n("p",null,[E,n("a",P,[C,a(t)])])]),n("div",A,[V,n("p",null,[n("strong",null,[a(p,{to:"/markdown/go%E8%AF%AD%E8%A8%80%E7%9A%84%E7%9A%84%E6%8E%92%E5%BA%8F%E5%92%8C%E6%9F%A5%E6%89%BE.html"},{default:o(()=>[N]),_:1})])]),G,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/"},{default:o(()=>[D]),_:1})])]),n("li",null,[n("p",null,[n("a",B,[F,a(t)]),T])]),n("li",null,[n("p",null,[R,n("a",L,[U,a(t)])])])])])])}const M=i(m,[["render",z],["__file","30.html.vue"]]);export{M as default};
