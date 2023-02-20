import{_ as i,r as e,o as c,c as o,a as n,b as a,w as l,e as s,d as u}from"./app.64dac66d.js";const d={},r={href:"https://github.com/3293172751/cs-awesome-Block_Chain",target:"_blank",rel:"noopener noreferrer"},k=s("author"),v=n("h1",{id:"\u7B2C4\u8282-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C4\u8282-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219","aria-hidden":"true"},"#"),s(" \u7B2C4\u8282 \u4F9D\u8D56\u5012\u8F6C\u539F\u5219")],-1),m=n("div",null,[n("a",{href:"3.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}"),n("a",{href:"5.md",style:{float:"right"}},"\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")],-1),b=n("br",null,null,-1),g=s("\u2764\uFE0F\u{1F495}\u{1F495}Java\u548CGolang\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u8BBE\u8BA1\u6A21\u5F0F\u4ECB\u7ECD\u3001\u521B\u5EFA\u8005\u6A21\u5F0F\u3001\u7ED3\u6784\u578B\u6A21\u5F0F\u3001\u884C\u4E3A\u578B\u6A21\u5F0F\u3002Myblog:"),h={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},f=s("http://nsddd.top"),w=u(`<hr><p>[TOC]</p><h2 id="\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u539F\u5219" aria-hidden="true">#</a> \u539F\u5219</h2><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p><strong>(Dependence</strong> <strong>Inversion Principle, DIP)</strong></p><p>\u4F9D\u8D56\u4E8E\u62BD\u8C61(\u63A5\u53E3)\uFF0C\u4E0D\u8981\u4F9D\u8D56\u5177\u4F53\u7684\u5B9E\u73B0(\u7C7B)\uFF0C\u4E5F\u5C31\u662F\u9488\u5BF9\u63A5\u53E3\u7F16\u7A0B\u3002</p></div><h2 id="\u6CA1\u6709\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u6CA1\u6709\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C" aria-hidden="true">#</a> \u6CA1\u6709\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u4F9D\u8D56\u5012\u8F6C\u539F\u5219</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//+\u53F8\u673A\u5F20\u4E09\u3001\u674E\u56DB\u3001\u738B\u4E94</span>
<span class="token comment">//+++\u5F20\u4E09\u5F00\u5954\u9A70</span>
<span class="token comment">//+++\u674E\u56DB\u5F00\u5B9D\u9A6C</span>

<span class="token comment">//\u5F20\u4E09\u5954\u9A70</span>
<span class="token keyword">type</span> Zhangsan <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u674E\u56DB\u5B9D\u9A6C</span>
<span class="token keyword">type</span> Lisi <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5F20\u4E09\u5F00\u5954\u9A70</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Zhangsan<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5954\u9A70\u5728\u8DD1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5954\u9A70</span>
<span class="token keyword">type</span> Benz <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9D\u9A6C</span>
<span class="token keyword">type</span> Bmw <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5954\u9A70</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Benz<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5954\u9A70\u5728\u8DD1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9D\u9A6C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Lisi<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9D\u9A6C\u5728\u8DD1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5F20\u4E09\u60F3\u5F00\u5B9D\u9A6C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Zhangsan<span class="token punctuation">)</span> <span class="token function">WantRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09\u60F3\u5F00\u5B9D\u9A6C&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u674E\u56DB\u60F3\u5F00\u5954\u9A70</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Lisi<span class="token punctuation">)</span> <span class="token function">WantRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u674E\u56DB\u60F3\u5F00\u5954\u9A70&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5F20\u4E09\u5F00\u5954\u9A70</span>
	zhangsan <span class="token operator">:=</span> <span class="token operator">&amp;</span>Zhangsan<span class="token punctuation">{</span><span class="token punctuation">}</span>
	zhangsan<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//\u674E\u56DB\u5F00\u5B9D\u9A6C</span>
	lisi <span class="token operator">:=</span> <span class="token operator">&amp;</span>Lisi<span class="token punctuation">{</span><span class="token punctuation">}</span>
	lisi<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">//\u5F20\u4E09\u60F3\u5F00\u5B9D\u9A6C</span>
	zhangsan<span class="token punctuation">.</span><span class="token function">WantRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//\u674E\u56DB\u60F3\u5F00\u5954\u9A70</span>
	lisi<span class="token punctuation">.</span><span class="token function">WantRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super\\81-main.go&quot;</span>
\u5954\u9A70\u5728\u8DD1
\u5B9D\u9A6C\u5728\u8DD1
\u5F20\u4E09\u60F3\u5F00\u5B9D\u9A6C
\u674E\u56DB\u60F3\u5F00\u5954\u9A70
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u{1F4DC} \u5BF9\u4E0A\u9762\u7684\u89E3\u91CA</p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\u8FD9\u6837\u8BBE\u8BA1\u7684\u5F0A\u7AEF\uFF0C\u6211\u4EEC\u5E0C\u671B\u5F20\u4E09\u5F00\u5954\u9A70\uFF0C\u674E\u56DB\u60F3\u5F00\u5954\u9A70\u7684\u65F6\u5019\uFF0C\u9700\u8981\u989D\u5916\u52A0\u65B9\u6CD5\u3002</p><p><img src="http://sm.nsddd.top/smimage-20221128112622244.png" alt="image-20221128112622244"></p><p><strong>\u6211\u4EEC\u5E94\u8BE5\u5C3D\u91CF\u964D\u4F4E\u8026\u5408\u5EA6\u7684\u53D1\u751F</strong></p><p>\u6211\u4EEC\u6765\u770B\u4E0A\u9762\u7684\u4EE3\u7801\u548C\u56FE\u4E2D\u6BCF\u4E2A\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5B9E\u9645\u4E0A\u5E76\u6CA1\u6709\u7528\u5230\u4EFB\u4F55\u7684<code>interface</code>\u63A5\u53E3\u5C42\u7684\u4EE3\u7801\uFF0C\u663E\u7136\u6700\u540E\u6211\u4EEC\u7684\u4E24\u4E2A\u4E1A\u52A1 <code>\u5F20\u4E09\u5F00\u5954\u9A70</code>, <code>\u674E\u56DB\u5F00\u5B9D\u9A6C</code>\uFF0C\u7A0B\u5E8F\u4E2D\u4E5F\u90FD\u5B9E\u73B0\u4E86\u3002\u4F46\u662F\u8FD9\u79CD\u8BBE\u8BA1\u7684\u95EE\u9898\u5C31\u5728\u4E8E\uFF0C\u5C0F\u89C4\u6A21\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u662F\u4E00\u65E6\u7A0B\u5E8F\u9700\u8981\u6269\u5C55\uFF0C\u6BD4\u5982\u6211\u73B0\u5728\u8981\u589E\u52A0\u4E00\u4E2A<code>\u4E30\u7530\u6C7D\u8F66</code> \u6216\u8005 \u53F8\u673A<code>\u738B\u4E94</code>\uFF0C \u90A3\u4E48\u6A21\u5757\u548C\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\u5C06\u6210\u6307\u6570\u7EA7\u9012\u589E\uFF0C\u60F3\u8718\u86DB\u7F51\u4E00\u6837\u8D8A\u6765\u8D8A\u96BE\u7EF4\u62A4\u548C\u634B\u987A\u3002</p></div><h2 id="\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C" aria-hidden="true">#</a> \u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C</h2><p><img src="http://sm.nsddd.top/smimage-20221128113217815.png" alt="image-20221128113217815"></p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6211\u4EEC\u9700\u8981\u8BB0\u4F4F\u9700\u8981\u5F15\u5165\u62BD\u8C61\u5C42\uFF0C\u63A5\u53E3\u5176\u5B9E\u6700\u5927\u7684\u76EE\u7684\u4E5F\u662F\u4E3A\u4E86\u5B9E\u73B0\u62BD\u8C61\uFF0C\u5BF9\u63A5\u4E1A\u52A1\u5C42\u548C\u5B9E\u73B0\u5C42\u3002</p><p>\u6211\u4EEC\u4F9D\u7167\u62BD\u8C61\u5C42\uFF0C\u4F9D\u6B21\u5B9E\u73B0\u6BCF\u4E2A\u5B9E\u73B0\u5C42\u7684\u6A21\u5757\uFF0C\u5728\u6211\u4EEC\u5199\u5B9E\u73B0\u5C42\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5B9E\u9645\u4E0A\u6211\u4EEC\u53EA\u9700\u8981\u53C2\u8003\u5BF9\u5E94\u7684\u62BD\u8C61\u5C42\u5B9E\u73B0\u5C31\u597D\u4E86\uFF0C\u5B9E\u73B0\u6BCF\u4E2A\u6A21\u5757\uFF0C\u4E5F\u548C\u5176\u4ED6\u7684\u5B9E\u73B0\u7684\u6A21\u5757\u6CA1\u6709\u5173\u7CFB\uFF0C\u8FD9\u6837\u4E5F\u7B26\u5408\u4E86\u4E0A\u9762\u4ECB\u7ECD\u7684\u5F00\u95ED\u539F\u5219\u3002\u8FD9\u6837\u5B9E\u73B0\u8D77\u6765\u6BCF\u4E2A\u6A21\u5757\u53EA\u4F9D\u8D56\u5BF9\u8C61\u7684\u63A5\u53E3\uFF0C\u800C\u548C\u5176\u4ED6\u6A21\u5757\u6CA1\u5173\u7CFB\uFF0C\u4F9D\u8D56\u5173\u7CFB\u5355\u4E00\u3002\u7CFB\u7EDF\u5BB9\u6613\u6269\u5C55\u548C\u7EF4\u62A4\u3002</p><p>\u6211\u4EEC\u5728\u6307\u5B9A\u4E1A\u52A1\u903B\u8F91\u4E5F\u662F\u4E00\u6837\uFF0C\u53EA\u9700\u8981\u53C2\u8003\u62BD\u8C61\u5C42\u7684\u63A5\u53E3\u6765\u4E1A\u52A1\u5C31\u597D\u4E86\uFF0C\u62BD\u8C61\u5C42\u66B4\u9732\u51FA\u6765\u7684\u63A5\u53E3\u5C31\u662F\u6211\u4EEC\u4E1A\u52A1\u5C42\u53EF\u4EE5\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u7136\u540E\u53EF\u4EE5\u901A\u8FC7\u591A\u6001\u7684\u7EBF\u4E0B\uFF0C\u63A5\u53E3\u6307\u9488\u6307\u5411\u54EA\u4E2A\u5B9E\u73B0\u6A21\u5757\uFF0C\u8C03\u7528\u4E86\u5C31\u662F\u5177\u4F53\u7684\u5B9E\u73B0\u65B9\u6CD5\uFF0C\u8FD9\u6837\u6211\u4EEC\u4E1A\u52A1\u903B\u8F91\u5C42\u4E5F\u662F\u4F9D\u8D56\u62BD\u8C61\u6210\u7F16\u7A0B\u3002</p></div><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//====&gt; abstract layer &lt;========</span>
<span class="token keyword">type</span> Car <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Driver <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Drive</span><span class="token punctuation">(</span>car Car<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//====&gt; Implementation layer &lt;========</span>
<span class="token keyword">type</span> BenZ <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>benz <span class="token operator">*</span>BenZ<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Benz is running...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Bmw <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>bmw <span class="token operator">*</span>Bmw<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Bmw is running...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Zhang_3 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>zhang3 <span class="token operator">*</span>Zhang_3<span class="token punctuation">)</span> <span class="token function">Drive</span><span class="token punctuation">(</span>car Car<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Zhang3 drive --&gt;&quot;</span><span class="token punctuation">,</span> car<span class="token punctuation">)</span>
	car<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Li_4 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>li4 <span class="token operator">*</span>Li_4<span class="token punctuation">)</span> <span class="token function">Drive</span><span class="token punctuation">(</span>car Car<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;li4 drive --&gt;&quot;</span><span class="token punctuation">,</span> car<span class="token punctuation">)</span>
	car<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Wangwu <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>wangwu <span class="token operator">*</span>Wangwu<span class="token punctuation">)</span> <span class="token function">Drive</span><span class="token punctuation">(</span>car Car<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;wangwu drive --&gt;&quot;</span><span class="token punctuation">,</span> car<span class="token punctuation">)</span>
	car<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//====&gt; Business logic layer &lt;=========</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//Zhang 3 drives BMW</span>
	<span class="token keyword">var</span> bmw Car <span class="token operator">=</span> <span class="token operator">&amp;</span>Bmw<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">//In 4 Mercedes drives</span>
	<span class="token keyword">var</span> benz Car <span class="token operator">=</span> <span class="token operator">&amp;</span>BenZ<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token keyword">var</span> zhang3 Driver <span class="token operator">=</span> <span class="token operator">&amp;</span>Zhang_3<span class="token punctuation">{</span><span class="token punctuation">}</span>
	zhang3<span class="token punctuation">.</span><span class="token function">Drive</span><span class="token punctuation">(</span>bmw<span class="token punctuation">)</span>

	<span class="token comment">//Zhang San wants to drive a BMW</span>
	zhang3<span class="token punctuation">.</span><span class="token function">Drive</span><span class="token punctuation">(</span>benz<span class="token punctuation">)</span>

	<span class="token keyword">var</span> li4 Driver
	li4 <span class="token operator">=</span> <span class="token operator">&amp;</span>Li_4<span class="token punctuation">{</span><span class="token punctuation">}</span>
	li4<span class="token punctuation">.</span><span class="token function">Drive</span><span class="token punctuation">(</span>benz<span class="token punctuation">)</span>

	<span class="token comment">//Li si wants to drive Mercedes</span>
	li4<span class="token punctuation">.</span><span class="token function">Drive</span><span class="token punctuation">(</span>bmw<span class="token punctuation">)</span>

	<span class="token keyword">var</span> wangwu Driver <span class="token operator">=</span> <span class="token operator">&amp;</span>Wangwu<span class="token punctuation">{</span><span class="token punctuation">}</span>
	wangwu<span class="token punctuation">.</span><span class="token function">Drive</span><span class="token punctuation">(</span>benz<span class="token punctuation">)</span>
	wangwu<span class="token punctuation">.</span><span class="token function">Drive</span><span class="token punctuation">(</span>bmw<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs<span class="token entity" title="\\c">\\c</span>ode\\go-super\\82-main.go&quot;</span>
Zhang3 drive --<span class="token operator">&gt;</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
Bmw is running<span class="token punctuation">..</span>.
Zhang3 drive --<span class="token operator">&gt;</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
Benz is running<span class="token punctuation">..</span>.
li4 drive --<span class="token operator">&gt;</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
Benz is running<span class="token punctuation">..</span>.
li4 drive --<span class="token operator">&gt;</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
Bmw is running<span class="token punctuation">..</span>.
wangwu drive --<span class="token operator">&gt;</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
Benz is running<span class="token punctuation">..</span>.
wangwu drive --<span class="token operator">&gt;</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
Bmw is running<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="3.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="5.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,18),y=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),_={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},q=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),B=s(")"),z=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),R={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},D=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function C(x,Z){const t=e("ExternalLinkIcon"),p=e("RouterLink");return c(),o("div",null,[n("ul",null,[n("li",null,[n("a",r,[k,a(t)])])]),v,m,b,n("blockquote",null,[n("p",null,[g,n("a",h,[f,a(t)])])]),w,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/go-advancend/"},{default:l(()=>[y]),_:1})])]),n("li",null,[n("p",null,[n("a",_,[q,a(t)]),B])]),n("li",null,[n("p",null,[z,n("a",R,[D,a(t)])])])])])}const P=i(d,[["render",C],["__file","4.html.vue"]]);export{P as default};
