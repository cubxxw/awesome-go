import{_ as c,r as o,o as i,c as l,a as n,b as a,w as p,e as s,d as u}from"./app.798d5e9d.js";const r={},k={href:"https://github.com/3293172751",target:"_blank",rel:"noopener noreferrer"},d=s("author"),m=n("h1",{id:"\u7B2C21\u8282-go-\u8BED\u8A00\u5207\u7247\u539F\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C21\u8282-go-\u8BED\u8A00\u5207\u7247\u539F\u7406","aria-hidden":"true"},"#"),s(" \u7B2C21\u8282 go \u8BED\u8A00\u5207\u7247\u539F\u7406")],-1),b=s("\u56DE\u5230\u76EE\u5F55"),v=s("\u4E0A\u4E00\u8282"),h=s("\u2764\uFE0F\u{1F495}\u{1F495}Go\u8BED\u8A00\u9AD8\u7EA7\u7BC7\u7AE0,\u5728\u6B64\u4E4B\u524D\u5EFA\u8BAE\u60A8\u5148\u4E86\u89E3\u57FA\u7840\u548C\u8FDB\u9636\u7BC7\u3002Myblog:"),g={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},f=s("http://nsddd.top"),_={id:"go\u8BED\u8A00\u57FA\u7840\u7BC7",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00\u57FA\u7840\u7BC7","aria-hidden":"true"},"#",-1),y=s(),x={href:"https://github.com/cubxxw/awesome-cs-cloudnative-blockchain/blob/master/TOC.md",target:"_blank",rel:"noopener noreferrer"},P=s("Go\u8BED\u8A00\u57FA\u7840\u7BC7"),w={id:"go\u8BED\u8A00100\u7BC7\u8FDB\u9636",tabindex:"-1"},E=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00100\u7BC7\u8FDB\u9636","aria-hidden":"true"},"#",-1),R=s(),S={href:"https://github.com/cubxxw/awesome-cs-cloudnative-blockchain/blob/master/Gomd_super/README.md",target:"_blank",rel:"noopener noreferrer"},C=s("Go\u8BED\u8A00100\u7BC7\u8FDB\u9636"),G=u(`<hr><p>[TOC]</p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801~</h2><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u5207\u7247\u539F\u7406</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s is array:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	s1 <span class="token operator">:=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 is slice:&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
	s2 <span class="token operator">:=</span> s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 is slice:&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

	<span class="token comment">//s1\u548Cs2\u5171\u4EAB\u5E95\u5C42\u6570\u7EC4</span>
	<span class="token boolean">_</span> <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 checkout is slice:&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6309\u7406\u8BF4\uFF0C\u6309\u7406\u8BF4\uFF0C\u5E94\u8BE5\u662F append \u5F71\u54CD\u7684\u662F s1 \uFF0C\u4E0E\u6211 s2 \u6709\u4F55\u5173\u7CFB\u2753</p><p>\u6240\u4EE5\u6253\u5370\u7684\u662F\uFF1A<code>[4,5,6]</code> \u90A3\u4E48\u4F60\u5C31\u5931\u671B\u4E86</p></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super\\86-main.go&quot;</span>
s is array: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s1 is slice: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>
s2 is slice: <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s2 checkout is slice: <span class="token punctuation">[</span><span class="token number">7</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u539F\u56E0</p><p>\u5219\u9700\u8981\u6211\u4EEC\u7406\u89E3 <code>slice</code> \u7684\u5E95\u5C42\u539F\u7406\u548C\u673A\u5236\u4E86\uFF0C <code>slice</code> \u8BF4\u662F\u5207\u7247\uFF0C \u4F46\u662F\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A <strong>\u6620\u5C04</strong>\u3002</p><p>\u4ECE\u4E00\u4E2A\u5927\u7684 <code>slice</code> \u4E2D\u6620\u5C04\u4E0B\u6765\uFF0C\u5F62\u6210\u4E00\u4E2A\u65B0\u7684 <code>slice</code>.</p></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// Slice principle</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s is array:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	s1 <span class="token operator">:=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 is slice:&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
	s2 <span class="token operator">:=</span> s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 is slice:&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

	<span class="token comment">//S1 and s2 share the underlying array</span>
	<span class="token boolean">_</span> <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 checkout is slice:&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 checkout is slice:&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

	<span class="token comment">//Print s again</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s is array:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

	<span class="token comment">//Cut again</span>
	s3 <span class="token operator">:=</span> s1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s3 is slice:&quot;</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>

	<span class="token comment">//Add 8 to s3</span>
	s3 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s3 checkout is slice:&quot;</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>

	<span class="token comment">//Print s1</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 checkout is slice:&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>

	<span class="token comment">//Print s2</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 checkout is slice:&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

	<span class="token comment">//Print s again</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s is array:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super\\86-main.go&quot;</span>
s is array: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s1 is slice: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>
s2 is slice: <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s1 checkout is slice: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>
s2 checkout is slice: <span class="token punctuation">[</span><span class="token number">7</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s is array: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">7</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s3 is slice: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span>
s3 checkout is slice: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">8</span><span class="token punctuation">]</span>
s1 checkout is slice: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">8</span><span class="token punctuation">]</span>
s2 checkout is slice: <span class="token punctuation">[</span><span class="token number">7</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s is array: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">8</span> <span class="token number">7</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0D\u6539\u53D8-s2" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6539\u53D8-s2" aria-hidden="true">#</a> \u4E0D\u6539\u53D8 s2</h2><p>\u5982\u679C\u5E0C\u671B\u4E0D\u5F71\u54CD <code>s2</code> \uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>s1 = append([]int{}, s1...)</code> \u5F3A\u8FEB go \u5206\u914D\u65B0\u7684\u7A7A\u95F4</p><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// Slice principle</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s is array:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	s1 <span class="token operator">:=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 is slice:&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
	s2 <span class="token operator">:=</span> s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 is slice:&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

	<span class="token comment">//S1 and s2 share the underlying array</span>
	s1 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> s1<span class="token operator">...</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 checkout is slice:&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s2 checkout is slice:&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s is array:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super\\87-main.go&quot;</span>
s is array: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s1 is slice: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>
s2 is slice: <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s1 checkout is slice: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>
s2 checkout is slice: <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
s is array: <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4DC} \u5BF9\u4E0A\u9762\u7684\u89E3\u91CA</p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6709\u51E0\u4E2A\u5F88\u91CD\u8981\u7684\u7EC6\u8282\uFF0C\u4F9D\u6B21\u5C55\u5F00\uFF1A</p><ol><li><code>appent</code> \u5982\u679C\u4E0D\u63A5\u6536\u90A3\u4E48\u662F\u4E34\u65F6\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4 <code>_ = append(s1, 7)</code> \u5E76\u4E0D\u4F1A\u5F71\u54CD <code>s1</code></li><li><code>appent</code> \u5982\u679C\u63A5\u6536\u90A3\u4E48\u662F\u6C38\u4E45\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4 <code>s1 = append(s1, 7)</code> \u4F1A\u5F71\u54CD <code>s1</code>\uFF0C\u8FD8\u6709 <code>s2</code></li><li>\u5207\u7247\u662F\u6620\u5C04 \uFF0C <code>append</code> \u672C\u8D28\u4E0A\u662F\u4FEE\u6539\u548C\u66FF\u6362</li><li>\u5982\u679C\u5E0C\u671B\u4E0D\u5F71\u54CD <code>s2</code> \uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>s1 = append([]int{}, s1...)</code> \u5F3A\u8FEB go \u5206\u914D\u65B0\u7684\u7A7A\u95F4</li></ol><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u638C\u63E1\u539F\u7406\u5F88\u91CD\u8981\uFF0C\u4E0D\u8981\u89C9\u5F97 go \u8BED\u8A00\u7B80\u5355\uFF0C\u7B80\u5355\u4F60\u548B\u8FD8\u5728\u5439\u6C34\u3002</p><p>kubernetes \u6E90\u7801\u770B\u4E86\u561B\uFF0C API Server \u7684\u5B9E\u73B0\u4E86\u89E3\u561B\uFF0Cdocker \u7684\u7F51\u7EDC\u5B9E\u73B0\u4E86\u89E3\u561B\u2026\u2026.</p></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2>`,23),N=s("\u56DE\u5230\u76EE\u5F55"),L=s("\u4E0A\u4E00\u8282"),V=s("\u4E0B\u4E00\u8282"),A=n("hr",null,null,-1),B={href:"https://github.com/cubxxw/awesome-cs-cloudnative-blockchain/blob/master/Git/git-contributor.md",target:"_blank",rel:"noopener noreferrer"},I=s("\u53C2\u4E0E\u8D21\u732E\u2764\uFE0F\u{1F495}\u{1F495}");function T(D,M){const t=o("ExternalLinkIcon"),e=o("RouterLink");return i(),l("div",null,[n("ul",null,[n("li",null,[n("a",k,[d,a(t)])])]),m,n("ul",null,[n("li",null,[a(e,{to:"/go-advancend/"},{default:p(()=>[b]),_:1})]),n("li",null,[a(e,{to:"/go-advancend/markdown/20.html"},{default:p(()=>[v]),_:1})])]),n("blockquote",null,[n("p",null,[h,n("a",g,[f,a(t)])])]),n("h3",_,[q,y,n("strong",null,[n("a",x,[P,a(t)])])]),n("h3",w,[E,R,n("strong",null,[n("a",S,[C,a(t)])])]),G,n("ul",null,[n("li",null,[a(e,{to:"/go-advancend/"},{default:p(()=>[N]),_:1})]),n("li",null,[a(e,{to:"/go-advancend/markdown/20.html"},{default:p(()=>[L]),_:1})]),n("li",null,[a(e,{to:"/go-advancend/markdown/22.html"},{default:p(()=>[V]),_:1})])]),A,n("ul",null,[n("li",null,[n("a",B,[I,a(t)])])])])}const j=c(r,[["render",T],["__file","21.html.vue"]]);export{j as default};
