import{_ as n,o as s,c as a,d as t}from"./app.64dac66d.js";const p={},o=t(`<h1 id="go\u8BED\u8A00\u6279\u91CF\u5904\u7406\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#go\u8BED\u8A00\u6279\u91CF\u5904\u7406\u6587\u4EF6" aria-hidden="true">#</a> Go\u8BED\u8A00\u6279\u91CF\u5904\u7406\u6587\u4EF6</h1><p>[toc]</p><h2 id="\u5B9E\u73B0\u57FA\u672C\u7684\u6279\u91CF\u521B\u5EFA\u6587\u4EF6\u548C\u8F93\u5165\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u57FA\u672C\u7684\u6279\u91CF\u521B\u5EFA\u6587\u4EF6\u548C\u8F93\u5165\u6A21\u677F" aria-hidden="true">#</a> \u5B9E\u73B0\u57FA\u672C\u7684\u6279\u91CF\u521B\u5EFA\u6587\u4EF6\u548C\u8F93\u5165\u6A21\u677F</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-06-30 18:06:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-15 14:59:25
 * @FilePath: \\undefinedd:\\\u6587\u6863\\git\\CS_COURSE\\python3\\script.go
 * @Description: github - markdown
 */</span>

<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bufio&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
	<span class="token string">&quot;os/exec&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6B22\u8FCE\u4F7F\u7528xiongxinwei\u6784\u5EFA\u7684\u811A\u672C\uFF0C&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\u4E00\u952E\u6784\u5EFAGitHub\u7684\u6587\u6863\u7ED3\u6784\\n&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\u5173\u4E8E\u6211\uFF1A\\n&quot;</span> <span class="token operator">+</span>
		<span class="token string">&quot;	+ \u535A\u5BA2\uFF1Ahttp://nsddd.top\\n&quot;</span> <span class="token operator">+</span>
		<span class="token string">&quot;	+ GitHub\u5730\u5740: https://github.com/3293172751&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u9009\u62E9\u662F\u5426(yes\\\\no)\u521B\u5EFA\u76EE\u5F55&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> yes<span class="token punctuation">,</span> fname <span class="token builtin">string</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>yes<span class="token punctuation">)</span>
	<span class="token keyword">if</span> yes <span class="token operator">==</span> <span class="token string">&quot;yes&quot;</span> <span class="token punctuation">{</span> <span class="token comment">//\u8F93\u5165\u7684\u662Fyes \u5219 \u521B\u5EFA\u76EE\u5F55</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u9009\u62E9\u521B\u5EFA\u76EE\u5F55\u7684\u540D\u79F0(\u8F93\u5165yes\u9ED8\u8BA4markdown\u6587\u4EF6\u5939)&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">var</span> markdown <span class="token builtin">string</span>
		fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>markdown<span class="token punctuation">)</span>
		<span class="token keyword">if</span> markdown <span class="token operator">!=</span> <span class="token string">&quot;yes&quot;</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>fname<span class="token punctuation">)</span> <span class="token comment">//\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">//\u9009\u62E9\u9ED8\u8BA4markdown\u683C\u5F0F</span>
			fname <span class="token operator">=</span> <span class="token string">&quot;markdown&quot;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Mkdir</span><span class="token punctuation">(</span>fname<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u9009\u62E9\u4E86\u4F7F\u7528\u539F\u6765\u7684\u76EE\u5F55,\u60A8\u5F53\u524D\u7684\u76EE\u5F55\u6587\u4EF6\u6709\uFF1A&quot;</span><span class="token punctuation">)</span>
		cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u9009\u62E9\u4F60\u8981\u6784\u5EFAGitHub\u9879\u76EE\u7684\u76EE\u5F55&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">var</span> text <span class="token builtin">int</span>
		fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>text<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// str := &quot;markdown&quot; //\u76EE\u5F55</span>

	<span class="token comment">// // MkdirAll \u9012\u5F52\u521B\u5EFA\u76EE\u5F55</span>
	<span class="token comment">// if err := os.Mkdir(str, 0666); err != nil {</span>
	<span class="token comment">// 	fmt.Println(&quot;err=&quot;, err)</span>
	<span class="token comment">// }</span>
	<span class="token keyword">var</span> a<span class="token punctuation">,</span> n <span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F93\u5165\u6587\u4EF6\u5F00\u59CB\u7684\u7F16\u53F7&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4F60\u8981\u6784\u5EFAmarkdown\u7684\u6587\u4EF6\u4E2A\u6570:&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span>

	<span class="token keyword">var</span> st <span class="token builtin">string</span> <span class="token comment">//\u8981\u8BF4\u7684\u8BDD</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u9879\u76EE\u4ECB\u7ECD&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>st<span class="token punctuation">)</span>

	<span class="token keyword">var</span> xm <span class="token builtin">string</span> <span class="token comment">//\u9879\u76EE\u5730\u5740</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u9879\u76EE\u7684\u5730\u5740&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>xm<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>

		a1 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
		a2 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		a3 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		filePath <span class="token operator">:=</span> fname <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> a1 <span class="token operator">+</span> <span class="token string">&quot;.md&quot;</span>
		file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREATE<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
		<span class="token comment">//\u5728\u539F\u6765\u7684\u57FA\u7840\u4E0A\u8FFD\u52A0666\u8868\u793A\u8BBF\u95EE\u6743\u9650</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6\u6253\u5F00\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//\u53CA\u65F6\u5173\u95EDfile\u53E5\u67C4</span>
		<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token comment">//\u5199\u5165\u6587\u4EF6\u65F6\uFF0C\u4F7F\u7528\u5E26\u7F13\u5B58\u7684 *Writer</span>
		write <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;+ [author](&quot;</span> <span class="token operator">+</span> xm <span class="token operator">+</span> <span class="token string">&quot;)\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;# \u7B2C&quot;</span> <span class="token operator">+</span> a1 <span class="token operator">+</span> <span class="token string">&quot;\u8282\\n&quot;</span><span class="token punctuation">)</span>

		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">//\u6279\u91CF\u52A0\u5165\u6587\u4EF6\uFF0C</span>

		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;div&gt;&lt;a href = &#39;&quot;</span> <span class="token operator">+</span> a3 <span class="token operator">+</span> <span class="token string">&quot;.md&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;&#39; style=&#39;float:left&#39;&gt;\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}&lt;/a&gt;&lt;a href = &#39;&quot;</span> <span class="token operator">+</span> a2 <span class="token operator">+</span> <span class="token string">&quot;.md&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;&#39; style=&#39;float: right&#39;&gt;\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}&lt;/a&gt;&lt;/div&gt;\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;br&gt;\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;&gt; \u2764\uFE0F\u{1F495}\u{1F495}&quot;</span> <span class="token operator">+</span> st <span class="token operator">+</span> <span class="token string">&quot;Myblog:[http://nsddd.top](http://nsddd.top/)\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;---\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;[TOC]\\n&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;## END \u94FE\u63A5\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;ul&gt;&lt;li&gt;&lt;div&gt;&lt;a href = &#39;&quot;</span> <span class="token operator">+</span> a3 <span class="token operator">+</span> <span class="token string">&quot;.md&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;&#39; style=&#39;float:left&#39;&gt;\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}&lt;/a&gt;&lt;a href = &#39;&quot;</span> <span class="token operator">+</span> a2 <span class="token operator">+</span> <span class="token string">&quot;.md&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;&#39; style=&#39;float: right&#39;&gt;\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}&lt;/a&gt;&lt;/div&gt;&lt;/li&gt;&lt;/ul&gt;\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;+ [\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}](../README.md)\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;+ [**\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}**](https://nsddd.top/archives/contributors))\\n&quot;</span><span class="token punctuation">)</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// \u7248\u6743\u58F0\u660E</span>
		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;+ \u2734\uFE0F\u7248\u6743\u58F0\u660E &amp;copy; :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA[CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09&amp;copy;](http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0\u534F\u8BAE\u6587\u672C) \\n&quot;</span><span class="token punctuation">)</span>

		write<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">//Flush\u5C06\u7F13\u5B58\u7684\u6587\u4EF6\u771F\u6B63\u5199\u5165\u5230\u6587\u4EF6\u4E2D</span>
		write<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function i(c,l){return s(),a("div",null,e)}const r=n(p,[["render",i],["__file","file.html.vue"]]);export{r as default};
