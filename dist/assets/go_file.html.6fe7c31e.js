import{_ as n,o as s,c as a,d as t}from"./app.bb6687c9.js";const e={},p=t(`<h1 id="go\u8BED\u8A00\u6587\u672C\u7F16\u7801\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#go\u8BED\u8A00\u6587\u672C\u7F16\u7801\u5904\u7406" aria-hidden="true">#</a> Go\u8BED\u8A00\u6587\u672C\u7F16\u7801\u5904\u7406</h1><p>[toc]</p><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5230Go\u8BED\u8A00\u5904\u7406\u4E00\u4E9B\u5F88\u7279\u6B8A\u7684\u4E1A\u52A1\uFF0C\u5C31\u6BD4\u5982\u8BF4\u6211\u7684\u4ED3\u5E93\uFF0C\u5982\u679C\u4E0D\u7528\u7A0B\u5E8F\u7684\u5316\uFF0C\u4F9D\u6B21\u53BB\u7F16\u5199\u6587\u7AE0\u662F\u975E\u5E38\u6D88\u8017\u65F6\u95F4\u548C\u7CBE\u529B\u7684\uFF0C\u8FD9\u4E2A\u65F6\u5019\u811A\u672C\u6216\u8005\u7A0B\u5E8F\u4EE3\u7801\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u89E3\u51B3\u5F88\u591A\u4E8B\u60C5\uFF0C\u6BD4\u5982\u8BF4\u6211\u73B0\u5728\u7684\u9700\u6C42\u662F\uFF1A\u6211\u9700\u8981\u7528Go\u8BED\u8A00\u7F16\u5199\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u6EE1\u8DB3\u4E0B\u9762\u7684\u9700\u6C42\uFF1A</p><ol><li>\u53EF\u4EE5\u521B\u5EFA\u6587\u4EF6\u5939\uFF0C\u548C<code>README.md</code>\u6587\u4EF6</li><li>\u53EF\u4EE5\u6309\u7167\u4E0D\u540C\u4EBA\u6216\u8005\u4E0D\u540C\u7684\u9879\u76EE\u9700\u8981\u6765\u7F16\u5199\u7A0B\u5E8F\u4EE3\u7801</li><li>\u53EF\u4EE5\u8BFB\u53D6\u7535\u8111\u4E0A\u9762\u7684\u6587\u4EF6</li><li>\u5728\u6BCF\u4E00\u4E2A\u6587\u4EF6\u91CC\u9762\uFF0C\u9700\u8981\u51C6\u5907\u57FA\u672C\u7684\u6A21\u677F</li><li>\u5728<code>README.md</code>\u4E2D\u4E5F\u5199\u5165\u57FA\u672C\u7684\u6A21\u677F</li><li>\u5BFC\u5165\u6216\u8005\u4E0B\u8F7D\u9879\u76EE\u6240\u9700\u8981\u7684\u5DE5\u5177\u6216\u8005\u811A\u672C</li></ol><h2 id="\u5224\u65AD\u662F\u5426\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u662F\u5426\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5224\u65AD\u662F\u5426\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u5B57\u7B26\u4E32</h2><p>\u4ECB\u7ECDstrings\u4F7F\u7528\u65B9\u6CD5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token string">&quot;hello word!&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;  go run .\\main.go
true false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5305\u542Bhello\u8FD4\u56DEtrue\uFF0C\u4E0D\u5305\u542B\uFF1F\u8FD4\u56DEfalse</strong></p><p><strong>\u770B\u4E0Bcontains\u6E90\u7801</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Contains reports whether substr is within s.
func Contains(s, substr string) bool {
	return Index(s, substr) &gt;= 0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u7B26\u4E32\u62C6\u5206" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u62C6\u5206" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u62C6\u5206</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token string">&quot;hello word!&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	ss <span class="token operator">:=</span> <span class="token string">&quot;a&amp;s*a##av&quot;</span>
	splitedStr <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>ss<span class="token punctuation">,</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>splitedStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;  go run .\\main.go
true false
[a&amp;s*a  av]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u770B\u4E0B\u6E90\u7801</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Split</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> sep <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">genSplit</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> sep<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

<span class="token comment">// SplitAfter slices s into all substrings after each instance of sep and</span>
<span class="token comment">// returns a slice of those substrings.</span>
<span class="token comment">//</span>
<span class="token comment">// If s does not contain sep and sep is not empty, SplitAfter returns</span>
<span class="token comment">// a slice of length 1 whose only element is s.</span>
<span class="token comment">//</span>
<span class="token comment">// If sep is empty, SplitAfter splits after each UTF-8 sequence. If</span>
<span class="token comment">// both s and sep are empty, SplitAfter returns an empty slice.</span>
<span class="token comment">//</span>
<span class="token comment">// It is equivalent to SplitAfterN with a count of -1.</span>
<span class="token keyword">func</span> <span class="token function">SplitAfter</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> sep <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">genSplit</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> sep<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>sep<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u4EE5\u4F7F\u7528join\u5C06\u5176\u5408\u5E76\u8D77\u6765" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u4F7F\u7528join\u5C06\u5176\u5408\u5E76\u8D77\u6765" aria-hidden="true">#</a> \u53EF\u4EE5\u4F7F\u7528join\u5C06\u5176\u5408\u5E76\u8D77\u6765</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fmt.Println(&quot;string.Join(splitedStr,&quot;#&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u770B\u4E0Bjoin\u6E90\u7801</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Join</span><span class="token punctuation">(</span>elems <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> sep <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> <span class="token function">len</span><span class="token punctuation">(</span>elems<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
	<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> elems<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>sep<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>elems<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>elems<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		n <span class="token operator">+=</span> <span class="token function">len</span><span class="token punctuation">(</span>elems<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> b Builder
	b<span class="token punctuation">.</span><span class="token function">Grow</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>elems<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> s <span class="token operator">:=</span> <span class="token keyword">range</span> elems<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
		b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>sep<span class="token punctuation">)</span>
		b<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u7B26\u4E32\u8F6C\u5316" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u8F6C\u5316" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u8F6C\u5316</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token string">&quot;zxcvzbnznz&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s=&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// func Itoa(i int) string {</span>
	<span class="token comment">// 	return FormatInt(int64(i), 10)</span>
	<span class="token comment">// }</span>
	a<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;  go run .\\main.go
s= zxcvzbnznz
100
12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7EE7\u7EED</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token string">&quot;zxcvzbnznz&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s=&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// func Itoa(i int) string {</span>
	<span class="token comment">// 	return FormatInt(int64(i), 10)</span>
	<span class="token comment">// }</span>
	a<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseBool</span><span class="token punctuation">(</span><span class="token string">&quot;t&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/*func ParseBool(str string) (bool, error) {
		switch str {
		case &quot;1&quot;, &quot;t&quot;, &quot;T&quot;, &quot;true&quot;, &quot;TRUE&quot;, &quot;True&quot;:
			return true, nil
		case &quot;0&quot;, &quot;f&quot;, &quot;F&quot;, &quot;false&quot;, &quot;FALSE&quot;, &quot;False&quot;:
			return false, nil
		}
		return false, syntaxError(&quot;ParseBool&quot;, str)
	}*/</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a=&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	a1<span class="token punctuation">,</span> err1 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span><span class="token string">&quot;123.2134&quot;</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/*func ParseFloat(s string, bitSize int) (float64, error) {
		f, n, err := parseFloatPrefix(s, bitSize)
		if n != len(s) &amp;&amp; (err == nil || err.(*NumError).Err != ErrSyntax) {
			return 0, syntaxError(fnParseFloat, s)
		}
		return f, err
	}*/</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;a1=&quot;</span><span class="token punctuation">,</span> a1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;  go run .\\main.go
s= zxcvzbnznz
100
a= true
a1= 123.2134
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316" aria-hidden="true">#</a> \u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/xml&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token string">&quot;smiel&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;person = &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>
	<span class="token keyword">if</span> data<span class="token punctuation">,</span> err <span class="token operator">:=</span> xml<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/*func Marshal(v any) ([]byte, error) {
	var b bytes.Buffer
	if err := NewEncoder(&amp;b).Encode(v); err != nil {
		return nil, err
	}
	return b.Bytes(), nil
}*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;  go run .\\main.go
person =  {smiel 19}
&lt;Person&gt;&lt;Name&gt;smiel&lt;/Name&gt;&lt;Age&gt;19&lt;/Age&gt;&lt;/Person&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8FD9\u4E2A\u9ED8\u8BA4\u4E0D\u662F\u53EF\u8BFB\u6027\u7684xml\u9700\u8981\u683C\u5F0F\u5316</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xml.MarshalIndent(p,&quot;&quot;,&quot; &quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E8C\u4E2A\uFF1A\u524D\u7F00</li><li>\u7B2C\u4E09\u4E2A\uFF1A\u7F29\u8FDB</li></ul><p><strong>\u5E95\u5C42\u6E90\u7801</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func MarshalIndent(v any, prefix, indent string) ([]byte, error) {
	var b bytes.Buffer
	enc := NewEncoder(&amp;b)
	enc.Indent(prefix, indent)
	if err := enc.Encode(v); err != nil {
		return nil, err
	}
	return b.Bytes(), nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6B64\u65F6\u8FD8\u6709\u4E00\u4E2A\u5C0F\u6280\u5DE7\uFF0C\u6211\u7684err\u653E\u5728if\u8BED\u53E5\u4E2D\uFF0C\u6B64\u65F6\u53EF\u4EE5\u786E\u5B9A\u4F5C\u7528\u57DF\u4EC5\u4EC5\u5728if\u8BED\u53E5\u4E2D</strong></p><h2 id="\u4F7F\u7528flag\u83B7\u53D6\u590D\u6742\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528flag\u83B7\u53D6\u590D\u6742\u53C2\u6570" aria-hidden="true">#</a> \u4F7F\u7528flag\u83B7\u53D6\u590D\u6742\u53C2\u6570</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	methodPtr <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;method&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;method of sample&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//func String(name string, value string, usage string) *string {</span>
	<span class="token comment">//return CommandLine.String(name, value, usage)}</span>
	valuePtr <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Int64</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;value of sample&quot;</span><span class="token punctuation">)</span>

	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>methodPtr<span class="token punctuation">,</span> <span class="token operator">*</span>valuePtr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;go build main.go

C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;a.exe
&#39;a.exe&#39; \u4E0D\u662F\u5185\u90E8\u6216\u5916\u90E8\u547D\u4EE4\uFF0C\u4E5F\u4E0D\u662F\u53EF\u8FD0\u884C\u7684\u7A0B\u5E8F
\u6216\u6279\u5904\u7406\u6587\u4EF6\u3002

C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;go build main.go

C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;main.exe
default -1

C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;main.exe -method helloxiongxinwei@mail.com
helloxiongxinwei@mail.com -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A7\u5236\u547D\u4EE4\u884C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u547D\u4EE4\u884C\u64CD\u4F5C" aria-hidden="true">#</a> \u63A7\u5236\u547D\u4EE4\u884C\u64CD\u4F5C</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bufio&quot;</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os/exec&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">cmd1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u9996\u5148\u751F\u6210cmd\u7ED3\u6784\u4F53,\u8BE5\u7ED3\u6784\u4F53\u5305\u542B\u4E86\u5F88\u591A\u4FE1\u606F\uFF0C\u5982\u6267\u884C\u547D\u4EE4\u7684\u53C2\u6570\uFF0C\u547D\u4EE4\u7684\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u7B49</span>
	command <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-l&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//\u7ED9\u6807\u51C6\u8F93\u5165\u4EE5\u53CA\u6807\u51C6\u9519\u8BEF\u521D\u59CB\u5316\u4E00\u4E2Abuffer\uFF0C\u6BCF\u6761\u547D\u4EE4\u7684\u8F93\u51FA\u4F4D\u7F6E\u53EF\u80FD\u662F\u4E0D\u4E00\u6837\u7684\uFF0C</span>
	<span class="token comment">//\u6BD4\u5982\u6709\u7684\u547D\u4EE4\u4F1A\u5C06\u8F93\u51FA\u653E\u5230stdout\uFF0C\u6709\u7684\u653E\u5230stderr</span>
	command<span class="token punctuation">.</span>Stdout <span class="token operator">=</span> <span class="token operator">&amp;</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	command<span class="token punctuation">.</span>Stderr <span class="token operator">=</span> <span class="token operator">&amp;</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">//\u6267\u884C\u547D\u4EE4\uFF0C\u76F4\u5230\u547D\u4EE4\u7ED3\u675F</span>
	err <span class="token operator">:=</span> command<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u6253\u5370\u7A0B\u5E8F\u4E2D\u7684\u9519\u8BEF\u4EE5\u53CA\u547D\u4EE4\u884C\u6807\u51C6\u9519\u8BEF\u4E2D\u7684\u8F93\u51FA</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>Stderr<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//\u6253\u5370\u547D\u4EE4\u884C\u7684\u6807\u51C6\u8F93\u51FA</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>Stdout<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">cmd2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u9996\u5148\u751F\u6210cmd\u7ED3\u6784\u4F53</span>
	cmd <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;strace&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-p&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;15284&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//\u8C03\u7528stderrPipe\u751F\u6210\u4E00\u4E2A\u7BA1\u9053\uFF0C\u8BE5\u7BA1\u9053\u8FDE\u63A5\u5230\u547D\u4EE4\u884C\u8FDB\u7A0B\u7684\u6807\u51C6\u9519\u8BEF\uFF0C \u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A</span>
	<span class="token comment">//ReadCloser\uFF0C \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BFB\u53D6\u8FD4\u56DE\u7684ReadCloser\u6765\u5B9E\u65F6\u8BFB\u53D6\u547D\u4EE4\u884C\u8FDB\u7A0B\u7684\u6807\u51C6\u9519\u8BEF</span>
	piper<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">StderrPipe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//\u5F00\u59CB\u6267\u884C\u547D\u4EE4</span>
	cmd<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//\u4F7F\u7528bufio\u5305\u5C01\u88C5\u7684\u65B9\u6CD5\u5B9E\u73B0\u5BF9reader\u7684\u8BFB\u53D6</span>
	reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>piper<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u6362\u884C\u5206\u9694</span>
		line<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//\u6253\u5370\u5185\u5BB9</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//\u7B49\u5F85\u547D\u4EE4\u7ED3\u675F\u5E76\u56DE\u6536\u5B50\u8FDB\u7A0B\u8D44\u6E90\u7B49</span>
	cmd<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8C03\u7528cmd1\u51FD\u6570:&quot;</span><span class="token punctuation">)</span>
	<span class="token function">cmd1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8C03\u7528cmd2\u51FD\u6570:&quot;</span><span class="token punctuation">)</span>
	<span class="token function">cmd2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	command <span class="token operator">:=</span> exec<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;ifconfig&quot;</span><span class="token punctuation">)</span>
	command<span class="token punctuation">.</span>Stdout <span class="token operator">=</span> <span class="token operator">&amp;</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	command<span class="token punctuation">.</span>Stderr <span class="token operator">=</span> <span class="token operator">&amp;</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">//\u6267\u884C\u547D\u4EE4\uFF0C\u76F4\u5230\u547D\u4EE4\u7ED3\u675F</span>
	err <span class="token operator">:=</span> command<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u6253\u5370\u7A0B\u5E8F\u4E2D\u7684\u9519\u8BEF\u4EE5\u53CA\u547D\u4EE4\u884C\u6807\u51C6\u9519\u8BEF\u4E2D\u7684\u8F93\u51FA</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>Stderr<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>command<span class="token punctuation">.</span>Stdout<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u67E5\u770B\u5E95\u5C42\u6E90\u7801\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Command</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> arg <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Cmd <span class="token punctuation">{</span>
	cmd <span class="token operator">:=</span> <span class="token operator">&amp;</span>Cmd<span class="token punctuation">{</span>
		Path<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
		Args<span class="token punctuation">:</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span> arg<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> filepath<span class="token punctuation">.</span><span class="token function">Base</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">==</span> name <span class="token punctuation">{</span>
		<span class="token keyword">if</span> lp<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">LookPath</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			cmd<span class="token punctuation">.</span>lookPathErr <span class="token operator">=</span> err
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			cmd<span class="token punctuation">.</span>Path <span class="token operator">=</span> lp
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> cmd
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8865\u5145-\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145-\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u8865\u5145\uFF1A\u53D8\u91CF\u7684\u4F5C\u7528\u57DF</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">style</span><span class="token punctuation">(</span>method <span class="token builtin">string</span><span class="token punctuation">,</span> value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//this.method = method</span>
	method <span class="token operator">=</span> <span class="token string">&quot;smile3&quot;</span>
	value <span class="token operator">=</span> <span class="token number">1003</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">style2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> method <span class="token builtin">string</span>
	<span class="token keyword">var</span> value <span class="token builtin">int</span>
	method <span class="token operator">=</span> <span class="token string">&quot;smile&quot;</span>
	value <span class="token operator">=</span> <span class="token number">100</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> method <span class="token builtin">string</span>
	<span class="token keyword">var</span> value <span class="token builtin">int</span>
	method <span class="token operator">=</span> <span class="token string">&quot;hello main&quot;</span>
	value <span class="token operator">=</span> <span class="token number">10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot; === &quot;</span><span class="token punctuation">)</span>
	<span class="token function">style2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot; === &quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot; === &quot;</span><span class="token punctuation">)</span>
	<span class="token function">style</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot; == 3&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\gin&gt;go run main.go
hello main
10
 ===
smile
100
 ===
hello main
10
 ===
smile3
1003
 == 3
hello main
10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","go_file.html.vue"]]);export{r as default};
