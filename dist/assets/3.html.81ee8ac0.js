import{_ as i,r as p,o as c,c as o,a as n,b as a,w as l,e as s,d as u}from"./app.64dac66d.js";const d={},r={href:"https://github.com/3293172751/cs-awesome-Block_Chain",target:"_blank",rel:"noopener noreferrer"},k=s("author"),v=n("h1",{id:"\u7B2C3\u8282-\u5F00\u95ED\u539F\u5219",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C3\u8282-\u5F00\u95ED\u539F\u5219","aria-hidden":"true"},"#"),s(" \u7B2C3\u8282 \u5F00\u95ED\u539F\u5219")],-1),m=n("div",null,[n("a",{href:"2.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}"),n("a",{href:"4.md",style:{float:"right"}},"\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")],-1),b=n("br",null,null,-1),f=s("\u2764\uFE0F\u{1F495}\u{1F495}Java\u548CGolang\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u8BBE\u8BA1\u6A21\u5F0F\u4ECB\u7ECD\u3001\u521B\u5EFA\u8005\u6A21\u5F0F\u3001\u7ED3\u6784\u578B\u6A21\u5F0F\u3001\u884C\u4E3A\u578B\u6A21\u5F0F\u3002Myblog:"),h={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},g=s("http://nsddd.top"),y=u(`<hr><p>[TOC]</p><h2 id="\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u539F\u5219" aria-hidden="true">#</a> \u539F\u5219</h2><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5F00\u95ED\u539F\u5219 <strong>(Open-Closed Principle, OCP)</strong></p><p>\u7C7B\u7684\u6539\u52A8\u662F\u901A\u8FC7\u589E\u52A0\u4EE3\u7801\u8FDB\u884C\u7684\uFF0C\u800C\u4E0D\u662F\u4FEE\u6539\u6E90\u4EE3\u7801\u3002</p></div><h2 id="\u6CA1\u6709\u4F7F\u7528\u5F00\u95ED\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u6CA1\u6709\u4F7F\u7528\u5F00\u95ED\u539F\u5219" aria-hidden="true">#</a> \u6CA1\u6709\u4F7F\u7528\u5F00\u95ED\u539F\u5219</h2><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// The principle of opening and closing</span>
<span class="token comment">// Path: 79-main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// The principle of opening and closing</span>
<span class="token keyword">type</span> Banker <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// Deposit business</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Banker<span class="token punctuation">)</span> <span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B58\u6B3E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Withdrawal business</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Banker<span class="token punctuation">)</span> <span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u6B3E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Transfer business</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Banker<span class="token punctuation">)</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F6C\u8D26\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	b <span class="token operator">:=</span> <span class="token operator">&amp;</span>Banker<span class="token punctuation">{</span><span class="token punctuation">}</span>

	b<span class="token punctuation">.</span><span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	b<span class="token punctuation">.</span><span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	b<span class="token punctuation">.</span><span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u6C42\uFF1A\u6211\u4EEC\u9700\u8981\u52A0\u4E00\u4E2A\u80A1\u7968\u529F\u80FD\uFF0C\u6211\u4EEC\u9700\u8981\u989D\u5916\u6DFB\u52A0\u529F\u80FD\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4F46\u662F\u6211\u4EEC\u7C7B\u53EF\u80FD\u770B\u4E0D\u51FA\u6765\uFF0C\u5982\u679C\u4E00\u4E2A\u7C7B\u5F88\u5E9E\u5927\uFF0C\u6DFB\u52A0\u529F\u80FD\u7684\u65F6\u5019\u5C31\u9700\u8981\u7279\u522B\u5C0F\u5FC3\u3002</p><p>\u8FD9\u5C31\u662F\u8BBE\u8BA1\u7684\u5F0A\u7AEF\u3002</p></div><p>\u90A3\u4E48\uFF0C\u5982\u679C\u6211\u4EEC\u62E5\u6709\u63A5\u53E3, <code>interface</code>\u8FD9\u4E2A\u4E1C\u897F\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u62BD\u8C61\u4E00\u5C42\u51FA\u6765\uFF0C\u5236\u4F5C\u4E00\u4E2A\u62BD\u8C61\u7684Banker\u6A21\u5757\uFF0C\u7136\u540E\u63D0\u4F9B\u4E00\u4E2A\u62BD\u8C61\u7684\u65B9\u6CD5\u3002 \u5206\u522B\u6839\u636E\u8FD9\u4E2A\u62BD\u8C61\u6A21\u5757\uFF0C\u53BB\u5B9E\u73B0<code>\u652F\u4ED8Banker\uFF08\u5B9E\u73B0\u652F\u4ED8\u65B9\u6CD5\uFF09</code>,<code>\u8F6C\u8D26Banker\uFF08\u5B9E\u73B0\u8F6C\u8D26\u65B9\u6CD5\uFF09</code></p><p><img src="http://sm.nsddd.top/smimage-20221127231259024.png" alt="image-20221127231259024"></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u90A3\u4E48\u5373\u4F7F Banker \u7684\u6DFB\u52A0\uFF0C\u4E0D\u4F1A\u4FEE\u6539 \u4EFB\u4F55\u5DF2\u7ECF\u7A33\u5B9A\u7684\u4EE3\u7801\uFF0C\u51FA\u73B0\u95EE\u9898\u4E5F\u4E0D\u4F1A\u8FDE\u7D2F\u5176\u4ED6\u6A21\u5757\u3002</p></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u5F00\u95ED\u539F\u5219</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// \u62BD\u8C61\u7684\u94F6\u884C\u63A5\u53E3</span>
<span class="token keyword">type</span> Banker <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//\u5B58\u6B3E</span>
	<span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u53D6\u6B3E</span>
	<span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u8F6C\u8D26</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0\u94F6\u884C\u63A5\u53E3</span>
<span class="token keyword">type</span> Bank <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B58\u6B3E</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Bank<span class="token punctuation">)</span> <span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B58\u6B3E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53D6\u6B3E</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Bank<span class="token punctuation">)</span> <span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u6B3E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F6C\u8D26</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Bank<span class="token punctuation">)</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F6C\u8D26\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u518D\u5B9A\u4E49\u4E00\u4E2A\u652F\u4ED8\u5B9D\u7684\u94F6\u884C\u63A5\u53E3</span>
<span class="token keyword">type</span> Alipay <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B58\u6B3E</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Alipay<span class="token punctuation">)</span> <span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u652F\u4ED8\u5B9D\u5B58\u6B3E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53D6\u6B3E</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Alipay<span class="token punctuation">)</span> <span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u652F\u4ED8\u5B9D\u53D6\u6B3E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	b <span class="token operator">:=</span> <span class="token operator">&amp;</span>Bank<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">//\u5B9E\u73B0\u4E86\u63A5\u53E3</span>
	b<span class="token punctuation">.</span><span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	b<span class="token punctuation">.</span><span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	b<span class="token punctuation">.</span><span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

	a <span class="token operator">:=</span> <span class="token operator">&amp;</span>Alipay<span class="token punctuation">{</span><span class="token punctuation">}</span>
	a<span class="token punctuation">.</span><span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	a<span class="token punctuation">.</span><span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p><code>Alipay{}</code> \u7ED3\u6784\u4F53\u5E76\u4E0D\u662F\u9700\u8981\u53BB\u5B9E\u73B0\u63A5\u53E3\u3002\u6240\u4EE5\u4F5C\u4E3A\u6269\u5C55\u6027\u3002</p></div><h2 id="\u5B9E\u73B0\u67B6\u6784\u5C42-\u57FA\u4E8E\u62BD\u8C61\u5C42\u4E1A\u52A1\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u67B6\u6784\u5C42-\u57FA\u4E8E\u62BD\u8C61\u5C42\u4E1A\u52A1\u5C01\u88C5" aria-hidden="true">#</a> \u5B9E\u73B0\u67B6\u6784\u5C42\uFF0C\u57FA\u4E8E\u62BD\u8C61\u5C42\u4E1A\u52A1\u5C01\u88C5</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5B9E\u73B0\u4E00\u4E2A\u67B6\u6784\u5C42\uFF0C\u57FA\u4E8E\u62BD\u8C61\u5C42\u8FDB\u884C\u4E1A\u52A1\u5C01\u88C5\uFF0C\u9488\u5BF9 interface \u8FDB\u884C\u5C01\u88C5\u3002</p></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// The principle of opening and closing</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//Abstract bank interface</span>
<span class="token keyword">type</span> Banker <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//deposit</span>
	<span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//Withdrawal</span>
	<span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//Transfer</span>
<span class="token punctuation">}</span>

<span class="token comment">//Implement the bank interface</span>
<span class="token keyword">type</span> Bank <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//deposit</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Bank<span class="token punctuation">)</span> <span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B58\u6B3E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Withdrawal</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Bank<span class="token punctuation">)</span> <span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u6B3E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Transfer</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Bank<span class="token punctuation">)</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F6C\u8D26\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//We can define another Alipay bank interface</span>
<span class="token keyword">type</span> Alipay <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//deposit</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Alipay<span class="token punctuation">)</span> <span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u652F\u4ED8\u5B9D\u5B58\u6B3E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Withdrawal</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Alipay<span class="token punctuation">)</span> <span class="token function">Withdraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Alipay withdrawal successful&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Transfer</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Alipay<span class="token punctuation">)</span> <span class="token function">Transfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Alipay transfer successful&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Implement an abstraction layer to isolate the different implementation layers so that new implementation layers can be added without modifying the original code, which is the open-close principle</span>
<span class="token keyword">func</span> <span class="token function">BankBusiness</span><span class="token punctuation">(</span>bank Banker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	bank<span class="token punctuation">.</span><span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//The business of deposits</span>
	<span class="token function">BankBusiness</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Bank<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token function">BankBusiness</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Alipay<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super\\80-main.go&quot;</span>
\u5B58\u6B3E\u6210\u529F
\u652F\u4ED8\u5B9D\u5B58\u6B3E\u6210\u529F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="2.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="4.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,21),w=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),_={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},q=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),B=s(")"),A=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),T={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},P=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function x(W,D){const t=p("ExternalLinkIcon"),e=p("RouterLink");return c(),o("div",null,[n("ul",null,[n("li",null,[n("a",r,[k,a(t)])])]),v,m,b,n("blockquote",null,[n("p",null,[f,n("a",h,[g,a(t)])])]),y,n("ul",null,[n("li",null,[n("p",null,[a(e,{to:"/go-advancend/"},{default:l(()=>[w]),_:1})])]),n("li",null,[n("p",null,[n("a",_,[q,a(t)]),B])]),n("li",null,[n("p",null,[A,n("a",T,[P,a(t)])])])])])}const E=i(d,[["render",x],["__file","3.html.vue"]]);export{E as default};
