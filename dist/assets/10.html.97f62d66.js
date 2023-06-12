import{_ as c,r as p,o as l,c as u,a as n,b as a,w as t,e as s,d}from"./app.798d5e9d.js";const r={},k=n("h1",{id:"runtime\u5305",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#runtime\u5305","aria-hidden":"true"},"#"),s(" runtime\u5305")],-1),v={class:"table-of-contents"},m=s("runtime.Gosched()"),b=s("runtime.Goexit()"),g=s("runtime.GOMAXPROCS"),f=s("END \u94FE\u63A5"),h=d(`<p>[toc]</p><h2 id="runtime-gosched" tabindex="-1"><a class="header-anchor" href="#runtime-gosched" aria-hidden="true">#</a> runtime.Gosched()</h2><p>\u8BA9\u51FACPU\u65F6\u95F4\u7247\uFF0C\u91CD\u65B0\u7B49\u5F85\u5B89\u6392\u4EFB\u52A1</p><blockquote><p>\u5927\u6982\u610F\u601D\u5C31\u662F\u672C\u6765\u8BA1\u5212\u7684\u597D\u597D\u7684\u5468\u672B\u51FA\u53BB\u70E7\u70E4\uFF0C\u4F46\u662F\u4F60\u5988\u8BA9\u4F60\u53BB\u76F8\u4EB2\uFF0C\u4E24\u79CD\u60C5\u51B5</p><p>\u7B2C\u4E00\u5C31\u662F\u4F60\u76F8\u4EB2\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u89C1\u9762\u5C31\u9EC4\u4E0D\u803D\u8BEF\u4F60\u7EE7\u7EED\u70E7\u70E4\uFF0C</p><p>\u7B2C\u4E8C\u79CD\u60C5\u51B5\u5C31\u662F\u4F60\u76F8\u4EB2\u901F\u5EA6\u7279\u522B\u6162\uFF0C\u89C1\u9762\u5C31\u662F\u4F60\u4FAC\u6211\u4FAC\u7684\uFF0C\u803D\u8BEF\u4E86\u70E7\u70E4\uFF0C\u4F46\u662F\u8FD8\u998B\u5C31\u662F\u803D\u8BEF\u4E86\u70E7\u70E4\u4F60\u8FD8\u5F97\u53BB\u70E7\u70E4</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Description: runtime.Gosched()
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-04 21:37:41
 * @LastEditTime: 2022-10-19 12:34:48
 * @FilePath: \\undefinedd:\\\u6587\u6863\\\u6700\u8FD1\u7684\\awesome-golang\\docs\\code\\go-super\\10-main.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>   <span class="token comment">//\u4F20\u5165\u7684s\u662Fworld</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u4E3B\u534F\u7A0B</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5207\u4E00\u4E0B\uFF0C\u518D\u6B21\u5206\u914D\u4EFB\u52A1</span>
        runtime<span class="token punctuation">.</span><span class="token function">Gosched</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//\u8BA9\u51FA\u65F6\u95F4\u7247</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>D:\\\u6587\u6863\\\u6700\u8FD1\u7684\\awesome-golang\\docs\\code\\go-super&gt;go run 10-main.go
world
world
hello
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F4DC} \u5BF9\u4E0A\u9762\u7684\u89E3\u91CA\uFF1A</p><blockquote><p>\u76F8\u4EB2\u7684\u901F\u5EA6\u592A\u5FEB\u4E86\u611F\u89C9\u4E0D\u51FA\u6765</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// \u4E3B\u534F\u7A0B</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u5207\u4E00\u4E0B\uFF0C\u518D\u6B21\u5206\u914D\u4EFB\u52A1</span>
		runtime<span class="token punctuation">.</span><span class="token function">Gosched</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="http://sm.nsddd.top/smimage-20221019124611889.png" alt="image-20221019124611889"></p></blockquote><h2 id="runtime-goexit" tabindex="-1"><a class="header-anchor" href="#runtime-goexit" aria-hidden="true">#</a> runtime.Goexit()</h2><p>\u9000\u51FA\u5F53\u524D\u534F\u7A0B</p><blockquote><p>\u4E00\u8FB9\u70E7\u70E4\u4E00\u8FB9\u76F8\u4EB2\uFF0C\u7A81\u7136\u53D1\u73B0\u76F8\u4EB2\u5BF9\u8C61\u592A\u4E11\u5F71\u54CD\u70E7\u70E4\uFF0C\u679C\u65AD\u8BA9\u5979\u6EDA\u86CB\uFF0C\u7136\u540E\u4E5F\u5C31\u6CA1\u6709\u7136\u540E\u4E86</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A.defer&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B.defer&quot;</span><span class="token punctuation">)</span>
            
            <span class="token comment">// \u7ED3\u675F\u534F\u7A0B</span>
            runtime<span class="token punctuation">.</span><span class="token function">Goexit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            
            <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;C.defer&quot;</span><span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Running] go run &quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684\\awesome-golang\\docs\\code\\go-super\\10-main.go&quot;
B.defer
A.defer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F4DC} \u5BF9\u4E0A\u9762\u7684\u89E3\u91CA\uFF1A</p><blockquote><p>\u4E5F\u5C31\u662F\u8BF4\u540E\u9762\u7684\u4EE3\u7801\u90FD\u6CA1\u6709\u6267\u884C\u4E86\u3002<code>defer</code>\u672C\u8EAB\u5C31\u662F\u5EF6\u8FDF\u6267\u884C\u8BED\u53E5\uFF0C\u4E5F\u5C31\u662F<code> fmt.Println(&quot;C.defer&quot;)</code>\u5E76\u6CA1\u6709\u6267\u884C\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u7ED3\u675F\u4E86\u3002</p><p>\u5F53\u6709\u591A\u4E2A defer \u884C\u4E3A\u88AB\u6CE8\u518C\u65F6\uFF0C\u5B83\u4EEC\u4F1A\u4EE5\u9006\u5E8F\u6267\u884C\uFF08\u7C7B\u4F3C\u6808\uFF0C\u5373\u540E\u8FDB\u5148\u51FA\uFF09\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u662F\u5C06\u4E00\u7CFB\u5217\u7684\u6570\u503C\u6253\u5370\u8BED\u53E5\u6309\u987A\u5E8F\u5EF6\u8FDF\u5904\u7406\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;defer begin&quot;</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5C06defer\u653E\u5165\u5EF6\u8FDF\u8C03\u7528\u6808</span>
    <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u653E\u5165, \u4F4D\u4E8E\u6808\u9876, \u6700\u5148\u8C03\u7528</span>
    <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;defer end&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u8F93\u51FA\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>defer begin
defer end
3
2
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5206\u6790\u5982\u4E0B\uFF1A</p><ul><li>\u4EE3\u7801\u7684\u5EF6\u8FDF\u987A\u5E8F\u4E0E\u6700\u7EC8\u7684\u6267\u884C\u987A\u5E8F\u662F\u53CD\u5411\u7684\u3002</li><li>\u5EF6\u8FDF\u8C03\u7528\u662F\u5728 defer \u6240\u5728\u51FD\u6570\u7ED3\u675F\u65F6\u8FDB\u884C\uFF0C\u51FD\u6570\u7ED3\u675F\u53EF\u4EE5\u662F\u6B63\u5E38\u8FD4\u56DE\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u662F\u53D1\u751F\u5B95\u673A\u65F6\u3002</li></ul></blockquote><p>\u4E4B\u524D<code>for</code>\u4E00\u76F4\u963B\u585E\u7740\uFF0C\u6216\u8BB8\u6211\u4EEC\u4E5F\u53EF\u6253\u5F00\u67F1\u585E</p><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A.defer&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B.defer&quot;</span><span class="token punctuation">)</span>

			<span class="token comment">// \u7ED3\u675F\u534F\u7A0B</span>
			runtime<span class="token punctuation">.</span><span class="token function">Goexit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

			<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;C.defer&quot;</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main defer&quot;</span><span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>D:\\\u6587\u6863\\\u6700\u8FD1\u7684\\awesome-golang\\docs\\code\\go-super&gt;go run 10-main.go
main
B.defer
A.defer
main defer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="runtime-gomaxprocs" tabindex="-1"><a class="header-anchor" href="#runtime-gomaxprocs" aria-hidden="true">#</a> runtime.GOMAXPROCS</h2><p>Go\u8FD0\u884C\u65F6\u7684\u8C03\u5EA6\u5668\u4F7F\u7528GOMAXPROCS\u53C2\u6570\u6765\u786E\u5B9A\u9700\u8981\u4F7F\u7528\u591A\u5C11\u4E2A<code>OS</code>\u7EBF\u7A0B\u6765\u540C\u65F6\u6267\u884C<code>Go</code>\u4EE3\u7801\u3002\u9ED8\u8BA4\u503C\u662F\u673A\u5668\u4E0A\u7684CPU\u6838\u5FC3\u6570\u3002\u4F8B\u5982\u5728\u4E00\u4E2A 8 \u6838\u5FC3\u7684\u673A\u5668\u4E0A\uFF0C\u8C03\u5EA6\u5668\u4F1A\u628A<code>Go</code>\u4EE3\u7801\u540C\u65F6\u8C03\u5EA6\u52308\u4E2AOS\u7EBF\u7A0B\u4E0A\uFF08GOMAXPROCS\u662F<code>m:n</code>\u8C03\u5EA6\u4E2D\u7684<code>n</code>\uFF09\u3002</p><p>Go\u8BED\u8A00\u4E2D\u53EF\u4EE5\u901A\u8FC7<code>runtime.GOMAXPROCS()</code>\u51FD\u6570\u8BBE\u7F6E\u5F53\u524D\u7A0B\u5E8F\u5E76\u53D1\u65F6\u5360\u7528\u7684CPU\u903B\u8F91\u6838\u5FC3\u6570\u3002</p><p>Go1.5\u7248\u672C\u4E4B\u524D\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F\u5355\u6838\u5FC3\u6267\u884C\u3002Go1.5\u7248\u672C\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u5168\u90E8\u7684CPU\u903B\u8F91\u6838\u5FC3\u6570\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5C06\u4EFB\u52A1\u5206\u914D\u5230\u4E0D\u540C\u7684CPU\u903B\u8F91\u6838\u5FC3\u4E0A\u5B9E\u73B0\u5E76\u884C\u7684\u6548\u679C\uFF0C\u8FD9\u91CC\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="http://sm.nsddd.top/smimage-20221019130118864.png" alt="image-20221019130118864"></p><p>\u4E24\u4E2A\u4EFB\u52A1\u53EA\u6709\u4E00\u4E2A\u903B\u8F91\u6838\u5FC3\uFF0C\u6B64\u65F6\u662F\u505A\u5B8C\u4E00\u4E2A\u4EFB\u52A1\u518D\u505A\u53E6\u4E00\u4E2A\u4EFB\u52A1\u3002 \u5C06\u903B\u8F91\u6838\u5FC3\u6570\u8BBE\u4E3A2\uFF0C\u6B64\u65F6\u4E24\u4E2A\u4EFB\u52A1\u5E76\u884C\u6267\u884C\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token comment">//\u7B49\u5F85\u4E00\u79D2</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token comment">//\u7B49\u5F85\u4E00\u79D2</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>   <span class="token comment">//\u7ED94\u4E2A\uFF0C\u54E5\u6709\u7684\u662Fcpu</span>
	<span class="token keyword">go</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="http://sm.nsddd.top/smimage-20221019130717195.png" alt="image-20221019130717195"></p><p>Go\u8BED\u8A00\u4E2D\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u548C<code>goroutine</code>\u7684\u5173\u7CFB\uFF1A</p><ul><li>\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u5BF9\u5E94\u7528\u6237\u6001\u591A\u4E2A<code>goroutine</code>\u3002</li><li><code>go</code>\u7A0B\u5E8F\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u591A\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u3002</li><li><code>goroutine</code>\u548C<code>OS</code>\u7EBF\u7A0B\u662F\u591A\u5BF9\u591A\u7684\u5173\u7CFB\uFF0C\u5373<code>m:n</code>\u3002</li></ul><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="9.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="11.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,38),q=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),w={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),_=s(")"),x=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),P={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},G=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function C(A,S){const e=p("router-link"),i=p("RouterLink"),o=p("ExternalLinkIcon");return l(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(e,{to:"#runtime-gosched"},{default:t(()=>[m]),_:1})]),n("li",null,[a(e,{to:"#runtime-goexit"},{default:t(()=>[b]),_:1})]),n("li",null,[a(e,{to:"#runtime-gomaxprocs"},{default:t(()=>[g]),_:1})]),n("li",null,[a(e,{to:"#end-\u94FE\u63A5"},{default:t(()=>[f]),_:1})])])]),h,n("ul",null,[n("li",null,[n("p",null,[a(i,{to:"/Gomd_super/"},{default:t(()=>[q]),_:1})])]),n("li",null,[n("p",null,[n("a",w,[y,a(o)]),_])]),n("li",null,[n("p",null,[x,n("a",P,[G,a(o)])])])])])}const B=c(r,[["render",C],["__file","10.html.vue"]]);export{B as default};
