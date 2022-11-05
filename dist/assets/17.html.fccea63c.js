import{_ as o,r as p,o as c,c as i,a as n,b as a,w as l,d as u,e as s}from"./app.74bed754.js";const r={},k=u(`<h1 id="go-\u6D4B\u8BD5-\u6A21\u7CCA\u3001\u57FA\u51C6\u3001\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#go-\u6D4B\u8BD5-\u6A21\u7CCA\u3001\u57FA\u51C6\u3001\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> Go \u6D4B\u8BD5\uFF08\u6A21\u7CCA\u3001\u57FA\u51C6\u3001\u5355\u5143\u6D4B\u8BD5\uFF09</h1><p>[toc]</p><h2 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h2><p><strong>Go\u8BED\u8A00\u4E2D\u81EA\u5E26\u8F7B\u91CF\u7EA7\u7684\u6D4B\u8BD5\u6846\u67B6testing\u548C\u81EA\u5E26\u7684go test\u547D\u4EE4\u6765\u5B9E\u73B0\u5355\u5143\u6D4B\u8BD5\u548C\u6027\u80FD\u6D4B\u8BD5</strong></p><blockquote><p>\u5355\u5143\u6D4B\u8BD5\u80FD\u53CA\u65F6\u53D1\u73B0\u7A0B\u5E8F\u8BBE\u8BA1\u6216\u8005\u5B9E\u73B0\u7684\u903B\u8F91\u9519\u8BEF\uFF0C\u800C\u6027\u80FD\u6D4B\u8BD5\u80FD\u4F7F\u7A0B\u5E8F\u5728\u9AD8\u5E76\u53D1\u7684\u72B6\u6001\u4E0B\u8FD8\u80FD\u4FDD\u6301\u7A33\u5B9A\u3002</p></blockquote><h2 id="\u6D4B\u8BD5\u7528\u4F8B\u7684\u7F16\u5199\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7528\u4F8B\u7684\u7F16\u5199\u89C4\u5219" aria-hidden="true">#</a> \u6D4B\u8BD5\u7528\u4F8B\u7684\u7F16\u5199\u89C4\u5219</h2><div class="custom-container tip"><p class="custom-container-title">\u6D4B\u8BD5\u89C4\u5219\uFF1A</p><ol><li>\u6D4B\u8BD5\u7528\u4F8B\u6587\u4EF6\u5FC5\u987B\u4EE5 <code>_test</code> \u7ED3\u5C3E\uFF0C\u4F8B\u5982\uFF1A<code>util_test.go</code></li><li>\u529F\u80FD\u6D4B\u8BD5\u7528\u4F8B\u65B9\u6CD5\u5FC5\u987B <code>Test</code> \u5F00\u5934</li><li>\u6A21\u7CCA\u6D4B\u8BD5\u7528\u4F8B\u65B9\u6CD5\u5FC5\u987B <code>Fuzz</code> \u5F00\u5934</li><li>\u57FA\u51C6\u6D4B\u8BD5\u7528\u4F8B\u65B9\u6CD5\u5FC5\u987B <code>Benchmark</code> \u5F00\u5934</li><li>\u6587\u4EF6\u5939<code>_test</code> \u7ED3\u5C3E\u7684\u6D4B\u8BD5\u5305\uFF0C\u4F1A\u88AB\u7F16\u8BD1\u6210\u5206\u79BB\u5305</li><li><code>go help test</code> \u3001 <code>go help testflag</code> \u67E5\u770B\u5E2E\u52A9</li></ol></div><h2 id="go-test-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#go-test-\u6A21\u5F0F" aria-hidden="true">#</a> go test \u6A21\u5F0F</h2><p><strong>1. \u672C\u5730\u6A21\u5F0F\uFF1A <code>go test</code>\u6216\u8005 <code>go test -v</code></strong></p><p><strong>2. \u5217\u8868\u6A21\u5F0F\uFF1A\u7F16\u8BD1\u5E76\u8FD0\u884C\u547D\u4EE4\u884C\u4E0A\u5217\u51FA\u7684\u6BCF\u4E00\u4E2A\u5305\uFF0C<code>go test util</code>\u3001<code>go test ./</code> \u7B49</strong></p><h2 id="\u6D4B\u8BD5\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7528\u4F8B" aria-hidden="true">#</a> \u6D4B\u8BD5\u7528\u4F8B</h2><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> util

<span class="token comment">/* \u6D4B\u8BD5\u7528\u4F8B\uFF0C\u5FC5\u987B\u4EE5util_test\u547D\u540D */</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> commTestData <span class="token punctuation">[</span><span class="token punctuation">]</span>commStruct

<span class="token comment">// \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\uFF0C\u7528\u4E8E\u6D4B\u8BD5</span>
<span class="token keyword">type</span> commStruct <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u4EE3\u7801\u5757</span>
	Group    <span class="token builtin">string</span>
	SizeStr  <span class="token builtin">string</span> <span class="token comment">//\u8F93\u5165</span>
	Expected <span class="token builtin">int64</span>  <span class="token comment">//\u671F\u671B\u503C</span>
	Expected <span class="token builtin">string</span> <span class="token comment">//\u671F\u671B\u503C</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u529F\u80FD\u6D4B\u8BD5\uFF1A\u4E3B\u8981\u9A8C\u8BC1\u529F\u80FD\u662F\u5426\u6B63\u5E38</span>
<span class="token keyword">func</span> <span class="token function">TestParseSize</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	testData <span class="token operator">:=</span> commTestData
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> testData <span class="token punctuation">{</span>
		<span class="token keyword">if</span> v<span class="token punctuation">.</span>Group <span class="token operator">==</span> <span class="token string">&quot;ParseSize&quot;</span> <span class="token punctuation">{</span>
			actual <span class="token operator">:=</span> <span class="token function">ParseSize</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>SizeStr<span class="token punctuation">)</span>
			<span class="token keyword">if</span> actual <span class="token operator">!=</span> v<span class="token punctuation">.</span>Expected <span class="token punctuation">{</span>
				t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;ParseSize(%s) = %d, expected %d&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span>SizeStr<span class="token punctuation">,</span> actual<span class="token punctuation">,</span> v<span class="token punctuation">.</span>Expected<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6A21\u7CCA\u6D4B\u8BD5</span>
<span class="token keyword">func</span> <span class="token function">TestFuzzy</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;util_test.go&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7CBE\u786E\u6D4B\u8BD5</span>
<span class="token keyword">func</span> <span class="token function">TestExact</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;util_test.go&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6027\u80FD\u6D4B\u8BD5</span>
<span class="token keyword">func</span> <span class="token function">Benchmark</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;util_test.go&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u57FA\u51C6\u6D4B\u8BD5</span>
<span class="token keyword">func</span> <span class="token function">Benchmark</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;util_test.go&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// TestMain\u51FD\u6570\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u524D\u7684\u521D\u59CB\u5316</span>
<span class="token keyword">func</span> <span class="token function">TestMain</span><span class="token punctuation">(</span>m <span class="token operator">*</span>testing<span class="token punctuation">.</span>M<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">initCommonData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">initCommonData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	commTestData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>commStruct<span class="token punctuation">{</span> <span class="token comment">//\u6D4B\u8BD5\u6570\u636E</span>
		<span class="token punctuation">{</span><span class="token string">&quot;ParseSize&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;ParseSize&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1k&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">&quot;1k&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;ParseSize&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1m&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">&quot;1m&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;ParseSize&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1g&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">&quot;1g&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;ParseSize&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1t&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">&quot;1t&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;ParseSize&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1p&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">&quot;1p&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;ParseSize&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1e&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">&quot;1e&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">&quot;ParseSize&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1z&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">&quot;1z&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	m<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="16.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="18.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,15),d=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),m={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},v=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),g=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),q={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},h=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function f(_,S){const e=p("RouterLink"),t=p("ExternalLinkIcon");return c(),i("div",null,[k,n("ul",null,[n("li",null,[n("p",null,[a(e,{to:"/"},{default:l(()=>[d]),_:1})])]),n("li",null,[n("p",null,[n("a",m,[v,a(t)]),b])]),n("li",null,[n("p",null,[g,n("a",q,[h,a(t)])])])])])}const y=o(r,[["render",f],["__file","17.html.vue"]]);export{y as default};
