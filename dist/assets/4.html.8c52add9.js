import{_ as c,r as p,o as i,c as l,a as n,b as a,w as o,e as s,d as u}from"./app.5500aabf.js";const r={},d={href:"https://github.com/3293172751",target:"_blank",rel:"noopener noreferrer"},k=s("author"),m=n("h1",{id:"\u7B2C4\u8282-\u6D41\u7A0B\u6784\u5EFA\u548C\u5206\u6790",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C4\u8282-\u6D41\u7A0B\u6784\u5EFA\u548C\u5206\u6790","aria-hidden":"true"},"#"),s(" \u7B2C4\u8282 \u6D41\u7A0B\u6784\u5EFA\u548C\u5206\u6790")],-1),v=s("\u56DE\u5230\u76EE\u5F55"),b=s("\u4E0A\u4E00\u8282"),g=s("\u2764\uFE0F\u{1F495}\u{1F495}Go\u8BED\u8A00\u9AD8\u7EA7\u7BC7\u7AE0,\u5728\u6B64\u4E4B\u524D\u5EFA\u8BAE\u60A8\u5148\u4E86\u89E3\u57FA\u7840\u548C\u8FDB\u9636\u7BC7\u3002Myblog:"),h={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},f=s("http://nsddd.top"),_={id:"go\u8BED\u8A00\u57FA\u7840\u7BC7",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00\u57FA\u7840\u7BC7","aria-hidden":"true"},"#",-1),y=s(),x={href:"https://github.com/3293172751/Block_Chain/blob/master/TOC.md",target:"_blank",rel:"noopener noreferrer"},q=s("Go\u8BED\u8A00\u57FA\u7840\u7BC7"),P={id:"go\u8BED\u8A00100\u7BC7\u8FDB\u9636",tabindex:"-1"},L=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00100\u7BC7\u8FDB\u9636","aria-hidden":"true"},"#",-1),B=s(),D={href:"https://github.com/3293172751/Block_Chain/blob/master/Gomd_super/README.md",target:"_blank",rel:"noopener noreferrer"},R=s("Go\u8BED\u8A00100\u7BC7\u8FDB\u9636"),I=u(`<hr><p>[TOC]</p><h3 id="\u521B\u5EFA\u4E00\u4E2Ago-mod\u548C\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2Ago-mod\u548C\u4ED3\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2Ago-mod\u548C\u4ED3\u5E93</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\log-monitoring&gt; go mod init github.com/3293172751/log-monitoring/tree/master
go: creating new go.mod: module github.com/3293172751/log-monitoring/tree/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7A0B\u5E8F\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F\u6846\u67B6" aria-hidden="true">#</a> \u7A0B\u5E8F\u6846\u67B6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> LogProcess <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	rc <span class="token keyword">chan</span> <span class="token builtin">string</span>   <span class="token comment">//\u591A\u4E2Agoroutine\u4E4B\u95F4\u7684\u6570\u636E\u540C\u6B65\u548C\u901A\u4FE1\uFF08channels)</span>
	wc <span class="token keyword">chan</span> <span class="token builtin">string</span>   <span class="token comment">//\u5199\u5165\u6A21\u5757\u540C\u6B65\u6570\u636E</span>
	<span class="token comment">//\u7CFB\u7EDF\u5206\u4E3A\u4E09\u4E2A\u6A21\u5757</span>
	<span class="token comment">// + \u5B9E\u65F6\u8BFB\u53D6  -- \u6587\u4EF6\u8DEF\u5F84</span>
	<span class="token comment">// + \u89E3\u6790</span>
	<span class="token comment">// + \u5199\u5165  -- \u5199\u5165\u7684\u65F6\u5019\u9700\u8981ip</span>
	path       <span class="token builtin">string</span> <span class="token comment">//\u8BFB\u53D6\u6587\u4EF6\u7684\u8DEF\u5F84</span>
	influxDBsn <span class="token builtin">string</span> <span class="token comment">//\u5199\u5165\u7684\u4FE1\u606F</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LogProcess<span class="token punctuation">)</span> <span class="token function">ReadFromFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u8BFB\u53D6\u6A21\u5757</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LogProcess<span class="token punctuation">)</span> <span class="token function">Process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u89E3\u6790\u6A21\u5757</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LogProcess<span class="token punctuation">)</span> <span class="token function">WriteToInfluxDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5199\u5165\u6A21\u5757</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	logprocess <span class="token operator">:=</span> <span class="token operator">&amp;</span>LogProcess<span class="token punctuation">{</span>
		rc<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		wc<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		path<span class="token punctuation">:</span>       <span class="token string">&quot;log/access.log&quot;</span><span class="token punctuation">,</span>
		influxDBsn<span class="token punctuation">:</span> <span class="token string">&quot;username&amp;password..&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u4F7F\u7528goroutinue\u63D0\u9AD8\u7A0B\u5E8F\u7684\u6027\u80FD</span>
    <span class="token keyword">go</span> <span class="token punctuation">(</span><span class="token operator">*</span>lp<span class="token punctuation">)</span>logprocess<span class="token punctuation">.</span><span class="token function">ReadFromFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">//\u8C03\u7528\u8BFB\u53D6\u6A21\u5757</span>
	<span class="token keyword">go</span> logprocess<span class="token punctuation">.</span><span class="token function">Process</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">//\u8C03\u7528\u89E3\u6790\u6A21\u5757</span>
	<span class="token keyword">go</span> logprocess<span class="token punctuation">.</span><span class="token function">WriteToInfluxDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u8C03\u7528\u5199\u5165\u6A21\u5757</span>

    <span class="token comment">//\u7A0B\u5E8F\u6267\u884C\u5B8C\u540E\u5C31\u81EA\u52A8\u9000\u51FA\u4E86</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528<code>*LogProcess</code>\u5F15\u7528\u7C7B\u578B\u539F\u56E0\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (l *LogProcess) Process() {
	//\u89E3\u6790\u6A21\u5757
}
logprocess := &amp;LogProcess{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E0D\u7528\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u6027\u80FD\u6709\u5F88\u5927\u7684\u63D0\u5347</li><li>\u7528\u5F15\u7528\u5C31\u53EF\u4EE5\u7528<code>l</code>\u53C2\u6570\u76F4\u63A5\u4FEE\u6539\u7ED3\u6784\u4F53\u7684\u6570\u503C</li></ul><h3 id="\u7A0B\u5E8F\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F\u6D4B\u8BD5" aria-hidden="true">#</a> \u7A0B\u5E8F\u6D4B\u8BD5</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LogProcess<span class="token punctuation">)</span> <span class="token function">ReadFromFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u8BFB\u53D6\u6A21\u5757</span>
	line <span class="token operator">:=</span> <span class="token string">&quot;message&quot;</span>
	l<span class="token punctuation">.</span>rc <span class="token operator">&lt;-</span> line <span class="token comment">//\u6570\u636E\u7684\u6D41\u5411</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LogProcess<span class="token punctuation">)</span> <span class="token function">Process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u89E3\u6790\u6A21\u5757</span>
	data <span class="token operator">:=</span> <span class="token operator">&lt;-</span>l<span class="token punctuation">.</span>rc
	l<span class="token punctuation">.</span>wc <span class="token operator">&lt;-</span> strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	<span class="token comment">//\u5904\u7406\u6570\u636E--\u5C06data\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u4FEE\u6539\u4E3A\u5176\u5927\u5199\u683C\u5F0F\u3002\u5BF9\u4E8E\u975EASCII\u5B57\u7B26\uFF0C\u5B83\u7684\u5927\u5199\u683C\u5F0F\u9700\u8981\u67E5\u8868\u8F6C\u6362</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LogProcess<span class="token punctuation">)</span> <span class="token function">WriteToInfluxDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5199\u5165\u6A21\u5757</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>l<span class="token punctuation">.</span>wc<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u7ED3\u679C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Running] go run &quot;c:\\Users\\smile\\Desktop\\log-monitoring\\log_process.go&quot;
MESSAGE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7A0B\u5E8F\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F\u4F18\u5316" aria-hidden="true">#</a> \u7A0B\u5E8F\u4F18\u5316</h3><p><strong>\u6211\u4EEC\u53EA\u80FD\u5F80<code>WriteToInfluxDB()</code>\u4E2D\u5199\u5165\u6570\u636E\uFF0C\u5982\u679C\u6709\u66F4\u591A\u7684\u6570\u636E\uFF08\u961F\u5217\u6216\u8005\u6807\u51C6\u8F93\u51FA\u4E2D\uFF09\uFF0C\u6B64\u65F6\u9700\u8981\u7528\u5230\u63A5\u53E3\u6A21\u5F0F\uFF0C\u628A\u5199\u5165\u548C\u8BFB\u51FA\u6A21\u5757\u62BD\u8C61\u51FA\u6765</strong></p><p><strong>\u7528\u6765\u7EA6\u675F\u5B9E\u73B0\u7C7B\u7684\u529F\u80FD\u3002</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Reader <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Read</span><span class="token punctuation">(</span>rc <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Writer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Writer</span><span class="token punctuation">(</span>wc <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> LogProcess <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	rc <span class="token keyword">chan</span> <span class="token builtin">string</span> <span class="token comment">//\u591A\u4E2Agoroutine\u4E4B\u95F4\u7684\u6570\u636E\u540C\u6B65\u548C\u901A\u4FE1\uFF08channels)</span>
	wc <span class="token keyword">chan</span> <span class="token builtin">string</span> <span class="token comment">//\u5199\u5165\u6A21\u5757\u540C\u6B65\u6570\u636E</span>
	<span class="token comment">//\u7CFB\u7EDF\u5206\u4E3A\u4E09\u4E2A\u6A21\u5757</span>
	<span class="token comment">// + \u5B9E\u65F6\u8BFB\u53D6  -- \u6587\u4EF6\u8DEF\u5F84</span>
	<span class="token comment">// + \u89E3\u6790</span>
	<span class="token comment">// + \u5199\u5165  -- \u5199\u5165\u7684\u65F6\u5019\u9700\u8981</span>
	read  Reader <span class="token comment">//\u63A5\u53E3\u5B9A\u4E49</span>
	write Writer
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ReadFromFile <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	path <span class="token builtin">string</span> <span class="token comment">//\u8BFB\u53D6\u6587\u4EF6\u7684\u8DEF\u5F84</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> WriteToInfluxDB <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	influxDBsn <span class="token builtin">string</span> <span class="token comment">//\u5199\u5165\u7684\u4FE1\u606F</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>ReadFromFile<span class="token punctuation">)</span> <span class="token function">Read</span><span class="token punctuation">(</span>rc <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u8BFB\u53D6\u6A21\u5757</span>
	line <span class="token operator">:=</span> <span class="token string">&quot;messAge&quot;</span>
	rc <span class="token operator">&lt;-</span> line <span class="token comment">//\u6570\u636E\u7684\u6D41\u5411</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LogProcess<span class="token punctuation">)</span> <span class="token function">Process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u89E3\u6790\u6A21\u5757</span>
	data <span class="token operator">:=</span> <span class="token operator">&lt;-</span>l<span class="token punctuation">.</span>rc
	l<span class="token punctuation">.</span>wc <span class="token operator">&lt;-</span> strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	<span class="token comment">//\u5904\u7406\u6570\u636E--\u5C06data\u4E2D\u7684\u6240\u6709\u5B57\u7B26\u4FEE\u6539\u4E3A\u5176\u5927\u5199\u683C\u5F0F\u3002\u5BF9\u4E8E\u975EASCII\u5B57\u7B26\uFF0C\u5B83\u7684\u5927\u5199\u683C\u5F0F\u9700\u8981\u67E5\u8868\u8F6C\u6362</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>w <span class="token operator">*</span>WriteToInfluxDB<span class="token punctuation">)</span> <span class="token function">Writer</span><span class="token punctuation">(</span>wc <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5199\u5165\u6A21\u5757</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>wc<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> <span class="token operator">&amp;</span>ReadFromFile<span class="token punctuation">{</span>
		path<span class="token punctuation">:</span> <span class="token string">&quot;log/access.log&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	w <span class="token operator">:=</span> <span class="token operator">&amp;</span>WriteToInfluxDB<span class="token punctuation">{</span>
		influxDBsn<span class="token punctuation">:</span> <span class="token string">&quot;username&amp;password..&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	logprocess <span class="token operator">:=</span> <span class="token operator">&amp;</span>LogProcess<span class="token punctuation">{</span>
		rc<span class="token punctuation">:</span>    <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		wc<span class="token punctuation">:</span>    <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		read<span class="token punctuation">:</span>  r<span class="token punctuation">,</span>
		write<span class="token punctuation">:</span> w<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u4F7F\u7528goroutinue\u63D0\u9AD8\u7A0B\u5E8F\u7684\u6027\u80FD</span>
	<span class="token keyword">go</span> logprocess<span class="token punctuation">.</span>read<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>logprocess<span class="token punctuation">.</span>rc<span class="token punctuation">)</span>    <span class="token comment">//\u8C03\u7528\u8BFB\u53D6\u6A21\u5757</span>
	<span class="token keyword">go</span> logprocess<span class="token punctuation">.</span><span class="token function">Process</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                   <span class="token comment">//\u8C03\u7528\u89E3\u6790\u6A21\u5757</span>
	<span class="token keyword">go</span> logprocess<span class="token punctuation">.</span>write<span class="token punctuation">.</span><span class="token function">Writer</span><span class="token punctuation">(</span>logprocess<span class="token punctuation">.</span>wc<span class="token punctuation">)</span> <span class="token comment">//\u8C03\u7528\u5199\u5165\u6A21\u5757</span>

	<span class="token comment">//\u7A0B\u5E8F\u6267\u884C\u5B8C\u540E\u5C31\u81EA\u52A8\u9000\u51FA\u4E86,\u9700\u8981\u7B49\u5F85</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7A0B\u5E8F\u7F16\u8BD1</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Running] go run &quot;c:\\Users\\smile\\Desktop\\log-monitoring\\log_process.go&quot;
MESSAGE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4E3A\u4EC0\u4E48\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E24\u4E2A\u63A5\u53E3\u5C31\u63D0\u5347\u4E86\u5B83\u7684\u53EF\u6269\u5C55\u6027\u5462\uFF1F</strong></p><blockquote><p>\u770B\u8D77\u6765\u7A0B\u5E8F\u867D\u7136\u66F4\u52A0\u590D\u6742\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC\u5982\u679C\u540E\u671F\u6DFB\u52A0\u65B0\u7684\u8BFB\u53D6\u5199\u5165\u6A21\u5757\uFF0C\u53EA\u9700\u8981\u5BF9\u63A5\u53E3\u4FEE\u6539</p></blockquote><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2>`,22),F=s("\u56DE\u5230\u76EE\u5F55"),S=s("\u4E0A\u4E00\u8282"),T=s("\u4E0B\u4E00\u8282"),W=n("hr",null,null,-1),C={href:"https://github.com/3293172751/Block_Chain/blob/master/Git/git-contributor.md",target:"_blank",rel:"noopener noreferrer"},E=s("\u53C2\u4E0E\u8D21\u732E\u2764\uFE0F\u{1F495}\u{1F495}");function G(A,N){const t=p("ExternalLinkIcon"),e=p("RouterLink");return i(),l("div",null,[n("ul",null,[n("li",null,[n("a",d,[k,a(t)])])]),m,n("ul",null,[n("li",null,[a(e,{to:"/go-advancend/"},{default:o(()=>[v]),_:1})]),n("li",null,[a(e,{to:"/go-advancend/markdown/3.html"},{default:o(()=>[b]),_:1})])]),n("blockquote",null,[n("p",null,[g,n("a",h,[f,a(t)])])]),n("h3",_,[w,y,n("strong",null,[n("a",x,[q,a(t)])])]),n("h3",P,[L,B,n("strong",null,[n("a",D,[R,a(t)])])]),I,n("ul",null,[n("li",null,[a(e,{to:"/go-advancend/"},{default:o(()=>[F]),_:1})]),n("li",null,[a(e,{to:"/go-advancend/markdown/3.html"},{default:o(()=>[S]),_:1})]),n("li",null,[a(e,{to:"/go-advancend/markdown/5.html"},{default:o(()=>[T]),_:1})])]),W,n("ul",null,[n("li",null,[n("a",C,[E,a(t)])])])])}const M=c(r,[["render",G],["__file","4.html.vue"]]);export{M as default};
