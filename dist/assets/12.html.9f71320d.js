import{_ as o,r as i,o as l,c as u,a as n,b as a,w as t,d as s,e as d}from"./app.5dbe8dec.js";const r={},k=n("h1",{id:"\u63A5\u53E3\u5B9E\u73B0\u591A\u6001",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u63A5\u53E3\u5B9E\u73B0\u591A\u6001","aria-hidden":"true"},"#"),s(" \u63A5\u53E3\u5B9E\u73B0\u591A\u6001")],-1),v={class:"table-of-contents"},m=s("\u63A5\u53E3\uFF08interface)"),b=s("\u63A5\u53E3\u5FEB\u901F\u5165\u95E8"),f=s("\u63A5\u53E3\u6982\u5FF5"),g=s("\u63A5\u53E3\u5B9E\u8DF5"),y=s("\u63A5\u53E3\u5B9E\u73B0\u5BF9Hero\u7ED3\u6784\u4F53\u5207\u7247\u7684\u6392\u5E8F"),h=s("\u63A5\u53E3VS\u7EE7\u627F"),w=s("END \u94FE\u63A5"),_=n("p",null,"[TOC]",-1),q=s("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),S={href:"https://pkg.go.dev/std",target:"_blank",rel:"noopener noreferrer"},I=s("https://pkg.go.dev/std"),x=n("blockquote",null,[n("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),M=s("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),A={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},P=s("https://github.com/3293172751/golang-rearn"),C=n("hr",null,null,-1),N=n("p",null,[n("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),s("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),L=s("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),B={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},H=s("http://nsddd.top"),j=d(`<h2 id="\u63A5\u53E3-interface" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3-interface" aria-hidden="true">#</a> \u63A5\u53E3\uFF08interface)</h2><blockquote><p>\u53EF\u4EE5\u60F3\u8C61usb\u662F\u73B0\u5B9E\u4E2D\u7684\u63A5\u53E3\uFF0C\u540C\u65F6usb\u53EF\u4EE5\u4F5C\u4E3A\u591A\u79CD\u4E0D\u540C\u7684\u5C3A\u5BF8\u548C\u6392\u7EBF\uFF0C\u8FD9\u79CD\u8BBE\u8BA1\u9700\u6C42\u5728golang\u4E2D\u4E5F\u662F<strong>\u5927\u91CF</strong>\u5B58\u5728\u7684</p></blockquote><blockquote><p><strong>\u6309\u7167\u5FAA\u5E8F\u5E94\u8BE5\u662F\u591A\u6001\uFF0C\u4F46\u662F\u5728\u8BB2\u89E3\u591A\u6001\u4E4B\u524D\u9700\u8981\u8BB2\u89E3\u63A5\u53E3\uFF0C\u56E0\u4E3A\u5728Golang\u4E2D\uFF0C\u591A\u6001\u7684\u7279\u6027\u4E3B\u8981\u662F\u901A\u8FC7\u63A5\u53E3\u6765\u4F53\u73B0\u51FA\u6765\u7684</strong></p></blockquote><h2 id="\u63A5\u53E3\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> \u63A5\u53E3\u5FEB\u901F\u5165\u95E8</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u58F0\u660E/\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3</span>
<span class="token keyword">type</span> Usb <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u58F0\u660E\u4E86\u4E24\u4E2A\u6CA1\u6709\u5B9E\u73B0\u7684\u65B9\u6CD5</span>
	<span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
	<span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u58F0\u660E/\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3</span>
<span class="token keyword">type</span> Usb2 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u58F0\u660E\u4E86\u4E24\u4E2A\u6CA1\u6709\u5B9E\u73B0\u7684\u65B9\u6CD5</span>
	<span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
	<span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u5B9A\u4E49\u624B\u673A\u7684\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Phone <span class="token keyword">struct</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>  

<span class="token comment">//\u8BA9Phone \u5B9E\u73B0 Usb\u63A5\u53E3\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u624B\u673A\u5F00\u59CB\u5DE5\u4F5C\u3002\u3002\u3002&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Phone<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u624B\u673A\u505C\u6B62\u5DE5\u4F5C\u3002\u3002\u3002&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Camera <span class="token keyword">struct</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">//\u8BA9Camera \u5B9E\u73B0   Usb\u63A5\u53E3\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c Camera<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u673A\u5F00\u59CB\u5DE5\u4F5C~~~\u3002\u3002\u3002&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c Camera<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u673A\u505C\u6B62\u5DE5\u4F5C\u3002\u3002\u3002&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u8BA1\u7B97\u673A</span>
<span class="token keyword">type</span> Computer <span class="token keyword">struct</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">//\u7F16\u5199\u4E00\u4E2A\u65B9\u6CD5Working \u65B9\u6CD5\uFF0C\u63A5\u6536\u4E00\u4E2AUsb\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF</span>
<span class="token comment">//\u53EA\u8981\u662F\u5B9E\u73B0\u4E86 Usb\u63A5\u53E3 \uFF08\u6240\u8C13\u5B9E\u73B0Usb\u63A5\u53E3\uFF0C\u5C31\u662F\u6307\u5B9E\u73B0\u4E86 Usb\u63A5\u53E3\u58F0\u660E\u6240\u6709\u65B9\u6CD5\uFF09</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c Computer<span class="token punctuation">)</span> <span class="token function">Working</span><span class="token punctuation">(</span>usb Usb<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//\u901A\u8FC7usb\u63A5\u53E3\u53D8\u91CF\u6765\u8C03\u7528Start\u548CStop\u65B9\u6CD5</span>
	usb<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	usb<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//\u6D4B\u8BD5</span>
	<span class="token comment">//\u5148\u521B\u5EFA\u7ED3\u6784\u4F53\u53D8\u91CF</span>
	computer <span class="token operator">:=</span> Computer<span class="token punctuation">{</span><span class="token punctuation">}</span>
	phone <span class="token operator">:=</span> Phone<span class="token punctuation">{</span><span class="token punctuation">}</span>
	camera <span class="token operator">:=</span> Camera<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">//\u5173\u952E\u70B9</span>
	computer<span class="token punctuation">.</span><span class="token function">Working</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span>
	computer<span class="token punctuation">.</span><span class="token function">Working</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span> <span class="token comment">//\u5B9E\u73B0camera</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5728\u6587\u6863\u91CC\u9762\u63A5\u53E3\u7684\u6587\u6863\u4E5F\u662F\u975E\u5E38\u591A\u7684</strong></p><h2 id="\u63A5\u53E3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u6982\u5FF5" aria-hidden="true">#</a> \u63A5\u53E3\u6982\u5FF5</h2><details class="custom-container details"><summary>\u63A5\u53E3\u5B9A\u4E49</summary><p>\u63A5\u53E3\u7C7B\u578B\u53EF\u4EE5\u5B9A\u4E49\u4E00\u7EC4\u65B9\u6CD5\uFF0C\u4F46\u662F\u8FD9\u4E9B\u4E0D\u9700\u8981\u5B9E\u73B0\uFF0C\u800C\u4E14<code>Interface</code><strong>\u4E0D\u80FD\u5305\u542B\u4EFB\u4F55\u7684\u53D8\u91CF</strong></p><p>Go \u8BED\u8A00\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u5373\u63A5\u53E3\uFF0C<strong>\u5B83\u628A\u6240\u6709\u7684\u5177\u6709\u5171\u6027\u7684\u65B9\u6CD5\u5B9A\u4E49\u5728\u4E00\u8D77\uFF0C\u4EFB\u4F55\u5176\u4ED6\u7C7B\u578B\u53EA\u8981\u5B9E\u73B0\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u5C31\u662F\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u63A5\u53E3\u3002\u628A\u6240\u6709\u65B9\u6CD5\u5168\u90E8\u5B9E\u73B0\u4E86\uFF0C\u53EB\u505A\u5B9E\u73B0\u4E86\u63A5\u53E3</strong></p></details><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>/* \u5B9A\u4E49\u63A5\u53E3 */
type interface_name interface {
   method_name1 [return_type]
   method_name2 [return_type]
   method_name3 [return_type]
   ...
   method_namen [return_type]
}

/* \u5B9A\u4E49\u7ED3\u6784\u4F53 */
type struct_name struct {
   /* variables */
}

/* \u5B9E\u73B0\u63A5\u53E3\u65B9\u6CD5 */
func (struct_name_variable struct_name) method_name1() [return_type] {
   /* \u65B9\u6CD5\u5B9E\u73B0 */
}
...
func (struct_name_variable struct_name) method_namen() [return_type] {
   /* \u65B9\u6CD5\u5B9E\u73B0*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5C0F\u7ED3\u8BF4\u660E\uFF1A</strong></p><ol><li><p>\u63A5\u53E3\u4E2D\u6240\u6709\u7684\u65B9\u6CD5\u90FD\u6CA1\u6709\u65B9\u6CD5\u4F53\uFF0C\u5373\u63A5\u53E3\u7684\u65B9\u6CD5\u90FD\u662F\u6CA1\u6709\u5B9E\u73B0\u7684\u65B9\u6CD5\u3002\u63A5\u53E3\u4F53\u73B0\u4E86\u7A0B\u5E8F\u8BBE\u8BA1\u7684<strong>\u591A\u6001\u548C\u9AD8\u5185\u805A\u4F4E\u8026\u5408</strong>\u7684\u601D\u60F3</p></li><li><p>Golang\u4E2D\u4E0D\u9700\u8981\u663E\u5F0F\u5B58\u5728\uFF0C\u53EA\u8981\u4E00\u4E2A\u53D8\u91CF\uFF0C\u542B\u6709\u63A5\u53E3\u7C7B\u578B\u4E2D\u7684\u6240\u6709\u65B9\u6CD5\uFF0C\u90A3\u4E48\u53EB\u505A\u8FD9\u4E2A\u53D8\u91CF\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u63A5\u53E3\uFF0C</p></li><li><p>\u63A5\u53E3\u672C\u8EAB\u4E0D\u80FD\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u4F46\u662F\u5B83\u53EF\u4EE5\u6307\u5411\u4E00\u4E2A\u5B9E\u73B0\u4E86\u8BE5\u63A5\u53E3\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u7684\u53D8\u91CF</p></li></ol><p><strong>\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7C7B\u578B\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> BInterface <span class="token keyword">interface</span><span class="token punctuation">{</span>
	<span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> AInterface <span class="token keyword">interface</span><span class="token punctuation">{</span>
	<span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Monster <span class="token keyword">struct</span><span class="token punctuation">{</span>
<span class="token comment">//\u60F3\u8BA9\u63A5\u53E3\u4F53monster\u5373\u5B9E\u73B0B\u63A5\u53E3\u4E5F\u5B9E\u73B0A\u63A5\u53E3</span>
	
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m monstall<span class="token punctuation">)</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;monstall hello()~~&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m monstall<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;monstall say()~~&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6B64\u65F6\u6B64\u523Bmonstall\u5B9E\u73B0\u4E86Ainterface and Binterface</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> monster Monster 
    <span class="token keyword">var</span> Atow AInterface <span class="token operator">=</span> monster
    <span class="token keyword">var</span> Btow AInterface <span class="token operator">=</span> monster
    Atow<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    Btow<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Golang\u63A5\u53E3\u4E2D\u4E0D\u53EF\u4EE5\u6709\u4EFB\u4F55\u7684\u53D8\u91CF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type AInterface interface{
	int          //\u62A5\u9519
	Hello()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u63A5\u53E3\u4E4B\u95F4\u4E5F\u53EF\u4EE5\u6709\u7EE7\u627F\u7684\u5173\u7CFB\uFF08\u6BD4\u5982AInterface\u53EF\u4EE5\u7EE7\u627FBInterface and CInterface)</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*************************************************************************           
    &gt; File Name: Interface.go
    &gt; Author: smile
    &gt; Mail: 3293172751nss@gmail.com 
    &gt; Created Time: Sat 05 Mar 2022 01:36:23 PM CST
 ************************************************************************/</span>
<span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> BInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">//\u5B9A\u4E49test01\u4E00\u4E2A\u65B9\u6CD5</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> CInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> AInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token comment">//at AInterface comprise BInterface and CInterface and it has its own way test03</span>
    BInterface
    CInterface
    <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//\u610F\u5473\u7740\u5982\u679C\u8981\u5B9E\u73B0Ainterface \u5C31\u8981\u5B9E\u73B0\u4E0B\u9762\u7684\u6240\u6709\u65B9\u6CD5</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5982\u679C\u9700\u8981\u5B9E\u73B0AInterface,\u5C31\u9700\u8981\u5C06BInterface CInterface\u7684\u65B9\u6CD5\u90FD\u5B9E\u73B0</span>
<span class="token keyword">type</span> Stu <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>stu Stu<span class="token punctuation">)</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>stu Stu<span class="token punctuation">)</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>stu Stu<span class="token punctuation">)</span> <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
<span class="token comment">//\u53EA\u6709\u5C06\u4E09\u4E2A\u65B9\u6CD5\u5168\u90E8\u5B9E\u73B0\u4E86\uFF0C\u90A3\u4E48stu\u5C31\u5B9E\u73B0\u4E86AInterface \u7F3A\u4E00\u4E0D\u53EF\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01</span>
<span class="token keyword">type</span> T  <span class="token keyword">interface</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> stu Stu 
    <span class="token keyword">var</span> a AInterface <span class="token operator">=</span> stu 
    a<span class="token punctuation">.</span><span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> t T <span class="token operator">=</span> stu <span class="token comment">//ok</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    <span class="token keyword">var</span> t2 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token operator">=</span> stu 
    <span class="token keyword">var</span> num1 <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">8.8</span> 
    t2 <span class="token operator">=</span> num1
    t <span class="token operator">=</span> num1
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t2<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u63A5\u53E3\u662F\u5F15\u7528\u7C7B\u578B~\uFF0C\u4F20\u503C\u7684\u65F6\u5019\u662F\u4EE5\u5F15\u7528\u65B9\u5F0F\uFF08\u5730\u5740\uFF09\u4F20\u9001\u8FDB\u53BB\u7684</strong></p><p>\u7A7A\u63A5\u53E3<strong>interface</strong>{}<strong>\u6CA1\u6709\u4EFB\u4F55\u7684\u65B9\u6CD5</strong>\uFF0C<strong>\u6240\u6709\u7684\u7C7B\u578B\u90FD\u5B9E\u73B0\u4E86\u7A7A\u63A5\u53E3,\u6211\u4EEC\u53EF\u4EE5\u628A\u4EFB\u4F55\u7684\u53D8\u91CF\u8D4B\u503C\u7ED9\u7A7A\u63A5\u53E3</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> T  <span class="token keyword">interface</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> t T <span class="token operator">=</span> stu <span class="token comment">//ok</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    
    <span class="token comment">//\u4E5F\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A</span>
    <span class="token keyword">var</span> t2 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token operator">=</span> stu      
    <span class="token keyword">var</span> num1 <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">8.8</span> 
    t2 <span class="token operator">=</span> num1         <span class="token comment">//\u53EF\u4EE5\u76F4\u63A5\u5C06num1\u8D4B\u503C</span>
    t <span class="token operator">=</span> num1
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t2<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># go build -o Interface Interface.go </span>
<span class="token punctuation">[</span>root@mail golang<span class="token punctuation">]</span><span class="token comment"># ./Interface </span>
<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token number">8.8</span> <span class="token number">8.8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\u7EE7\u627F\u7684\u65F6\u5019\uFF0C\u63A5\u53E3\u4E4B\u95F4\u4E0D\u53EF\u4EE5\u6709\u76F8\u540C\u7684\u65B9\u6CD5\u540D</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> BInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">//\u5B9A\u4E49test01\u4E00\u4E2A\u65B9\u6CD5</span>
    <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> CInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>      <span class="token comment">/*---\u6B63\u5E38\u7F16\u8BD1---*/</span>

<span class="token keyword">type</span> AInterface <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	AInterface
	BInterface
<span class="token punctuation">}</span>      <span class="token comment">/*---\u7F16\u8BD1\u9519\u8BEF---*/</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">/*--\u62A5\u9519\uFF1A\u91CD\u590D\u5B9A\u4E49--*/</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A5\u53E3\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u5B9E\u8DF5" aria-hidden="true">#</a> \u63A5\u53E3\u5B9E\u8DF5</h2><p><strong>\u5E38\u89C1\u62A5\u9519\uFF0C\u63A5\u53E3\u662F\u5C5E\u4E8E\u5F15\u7528\u4F20\u9012</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">type</span> Usb <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Stu <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Stu<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Say()&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> stu Stu <span class="token operator">=</span> Stu<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// \u9519\u8BEF\uFF01 \u4F1A\u62A5 Stu\u7C7B\u578B\u6CA1\u6709\u5B9E\u73B0Usb\u63A5\u53E3 , </span>
	<span class="token comment">// \u5982\u679C\u5E0C\u671B\u901A\u8FC7\u7F16\u8BD1,  var u Usb = &amp;stu</span>
	<span class="token keyword">var</span> u Usb <span class="token operator">=</span> stu  
	u<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;here&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A5\u53E3\u5B9E\u73B0\u5BF9hero\u7ED3\u6784\u4F53\u5207\u7247\u7684\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u5B9E\u73B0\u5BF9hero\u7ED3\u6784\u4F53\u5207\u7247\u7684\u6392\u5E8F" aria-hidden="true">#</a> \u63A5\u53E3\u5B9E\u73B0\u5BF9Hero\u7ED3\u6784\u4F53\u5207\u7247\u7684\u6392\u5E8F</h2><blockquote><p>\u5B9E\u73B0\u5BF9Hero\u7ED3\u6784\u4F53\u5207\u7247\u7684\u6392\u5E8F</p><p>\u601D\u60F3\uFF1A\u4F7F\u7528\u5192\u6CE1\u6392\u5E8F\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7CFB\u7EDF\u63D0\u4F9B\u7684\u65B9\u6CD5</p></blockquote><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sort&quot;</span>   <span class="token comment">//\u4F7F\u7528\u7CFB\u7EDF\u7684\u65B9\u6CD5</span>
	<span class="token string">&quot;math/rand&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//1.\u58F0\u660EHero\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span>  Hero <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//2.\u58F0\u660E\u4E00\u4E2AHero\u7ED3\u6784\u4F53\u5207\u7247\u7C7B\u578B</span>
<span class="token keyword">type</span> HeroSlice <span class="token punctuation">[</span><span class="token punctuation">]</span>Hero

<span class="token comment">//3.\u5B9E\u73B0Interface \u63A5\u53E3</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>hs HeroSlice<span class="token punctuation">)</span> <span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>hs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Less\u65B9\u6CD5\u5C31\u662F\u51B3\u5B9A\u4F60\u4F7F\u7528\u4EC0\u4E48\u6807\u51C6\u8FDB\u884C\u6392\u5E8F</span>
<span class="token comment">//1. \u6309Hero\u7684\u5E74\u9F84\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F!!</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>hs HeroSlice<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> hs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Age <span class="token operator">&lt;</span> hs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>Age
	<span class="token comment">//\u4FEE\u6539\u6210\u5BF9Name\u6392\u5E8F</span>
	<span class="token comment">//return hs[i].Name &lt; hs[j].Name</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>hs HeroSlice<span class="token punctuation">)</span> <span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u4EA4\u6362</span>
	<span class="token comment">// temp := hs[i]</span>
	<span class="token comment">// hs[i] = hs[j]</span>
	<span class="token comment">// hs[j] = temp</span>
	<span class="token comment">//\u4E0B\u9762\u7684\u4E00\u53E5\u8BDD\u7B49\u4EF7\u4E8E\u4E09\u53E5\u8BDD</span>
	hs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> hs<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> hs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> hs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token comment">//1.\u58F0\u660EStudent\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span>  Student <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
	Age <span class="token builtin">int</span>
	Score <span class="token builtin">float64</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5C06Student\u7684\u5207\u7247\uFF0C\u5B89Score\u4ECE\u5927\u5230\u5C0F\u6392\u5E8F!!</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//\u5148\u5B9A\u4E49\u4E00\u4E2A\u6570\u7EC4/\u5207\u7247</span>
	<span class="token keyword">var</span> intSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">}</span>
	<span class="token comment">//\u8981\u6C42\u5BF9 intSlice\u5207\u7247\u8FDB\u884C\u6392\u5E8F</span>
	<span class="token comment">//1. \u5192\u6CE1\u6392\u5E8F...</span>
	<span class="token comment">//2. \u4E5F\u53EF\u4EE5\u4F7F\u7528\u7CFB\u7EDF\u63D0\u4F9B\u7684\u65B9\u6CD5 </span>
	sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>intSlice<span class="token punctuation">)</span> 
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>intSlice<span class="token punctuation">)</span>

	<span class="token comment">//\u8BF7\u5927\u5BB6\u5BF9\u7ED3\u6784\u4F53\u5207\u7247\u8FDB\u884C\u6392\u5E8F</span>
	<span class="token comment">//1. \u5192\u6CE1\u6392\u5E8F...</span>
	<span class="token comment">//2. \u4E5F\u53EF\u4EE5\u4F7F\u7528\u7CFB\u7EDF\u63D0\u4F9B\u7684\u65B9\u6CD5</span>

	<span class="token comment">//\u6D4B\u8BD5\u770B\u770B\u6211\u4EEC\u662F\u5426\u53EF\u4EE5\u5BF9\u7ED3\u6784\u4F53\u5207\u7247\u8FDB\u884C\u6392\u5E8F</span>
	<span class="token keyword">var</span> heroes HeroSlice
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		hero <span class="token operator">:=</span> Hero<span class="token punctuation">{</span>
			Name <span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;\u82F1\u96C4|%d&quot;</span><span class="token punctuation">,</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Age <span class="token punctuation">:</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//\u5C06 hero append\u5230 heroes\u5207\u7247</span>
		heroes <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>heroes<span class="token punctuation">,</span> hero<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u770B\u770B\u6392\u5E8F\u524D\u7684\u987A\u5E8F</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span> <span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> heroes <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u8C03\u7528sort.Sort</span>
	sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>heroes<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------\u6392\u5E8F\u540E------------&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//\u770B\u770B\u6392\u5E8F\u540E\u7684\u987A\u5E8F</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span> <span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> heroes <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	i <span class="token operator">:=</span> <span class="token number">10</span>
	j <span class="token operator">:=</span> <span class="token number">20</span>
	i<span class="token punctuation">,</span> j <span class="token operator">=</span> j<span class="token punctuation">,</span> i
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;i=&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot;j=&quot;</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token comment">// i=20 j = 10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A5\u53E3vs\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3vs\u7EE7\u627F" aria-hidden="true">#</a> \u63A5\u53E3VS\u7EE7\u627F</h2><div class="custom-container tip"><p class="custom-container-title">\u4E3E\u4F8B</p><p>\u5982\u4F55\u7406\u89E3\u7EE7\u627F\u548C\u63A5\u53E3\uFF1F</p><p>\u7334\u5B50\u5982\u679C\u5B66\u7334\u5B50\uFF0C\u90A3\u5C31\u662F\u7EE7\u627F\uFF0C\u5982\u679C\u7334\u5B50\u60F3\u5B66\u9E1F\u98DE\uFF0C\u5B66\u9C7C\u6E38\uFF0C\u5C31\u662F\u63A5\u53E3</p></div><blockquote><p>\u63A5\u53E3\u76F8\u5F53\u4E8E\u662F\u5BF9\u7EE7\u627F\u7684\u8865\u5145</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span><span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">type</span> Monkey <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Monkey<span class="token punctuation">)</span> <span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span><span class="token string">&quot;\u751F\u6765\u4F1A\u722C\u6811..&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Little Monkey\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> LittleMonkey <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Monkey   <span class="token comment">//\u533F\u540D\u7ED3\u6784\u4F53 </span>
    <span class="token comment">//\u7EE7\u627F</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//\u521B\u5EFA\u4E00\u4E2AlittleMonkey \u5B9E\u4F8B</span>
    monkey <span class="token operator">:=</span> LittleMonkey<span class="token punctuation">{</span>
        Monkey<span class="token punctuation">{</span>
            Name <span class="token punctuation">:</span> <span class="token string">&quot;\u609F\u7A7A&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    monkey<span class="token punctuation">.</span><span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@mail ~]# go run monkey.go 
\u609F\u7A7A \u751F\u6765\u4F1A\u722C\u6811..
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>*<em>\u5982\u679C\u7334\u5B50\u60F3\u5B66\u98DE\uFF1F\uFF1F\uFF1F\uFF1F\u2606</em>: .\uFF61. o(\u2267\u25BD\u2266)o .\uFF61.:*\u2606 **</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">//\u58F0\u660E\u63A5\u53E3</span>
<span class="token keyword">type</span> BirdAble <span class="token keyword">interface</span><span class="token punctuation">{</span>
	<span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> BirdAble interfacpackage main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//Monkey\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Monkey <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u58F0\u660E\u63A5\u53E3</span>
<span class="token keyword">type</span> BirdAble <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> FishAble <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Monkey<span class="token punctuation">)</span> <span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot; \u751F\u6765\u4F1A\u722C\u6811..&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//LittleMonkey\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> LittleMonkey <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Monkey <span class="token comment">//\u7EE7\u627F</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u8BA9LittleMonkey\u5B9E\u73B0BirdAble</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LittleMonkey<span class="token punctuation">)</span> <span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot; \u901A\u8FC7\u5B66\u4E60\uFF0C\u4F1A\u98DE\u7FD4...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8BA9LittleMonkey\u5B9E\u73B0FishAble</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LittleMonkey<span class="token punctuation">)</span> <span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token string">&quot; \u901A\u8FC7\u5B66\u4E60\uFF0C\u4F1A\u6E38\u6CF3..&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//\u521B\u5EFA\u4E00\u4E2ALittleMonkey \u5B9E\u4F8B</span>
	monkey <span class="token operator">:=</span> LittleMonkey<span class="token punctuation">{</span>
		Monkey <span class="token punctuation">{</span>
			Name <span class="token punctuation">:</span> <span class="token string">&quot;\u609F\u7A7A&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	monkey<span class="token punctuation">.</span><span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	monkey<span class="token punctuation">.</span><span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	monkey<span class="token punctuation">.</span><span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>e<span class="token punctuation">{</span>
	<span class="token function">Flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Monkey <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Monkey<span class="token punctuation">)</span> <span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span><span class="token string">&quot;\u751F\u6765\u4F1A\u722C\u6811..&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LittleMonkey<span class="token punctuation">)</span> <span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>Name<span class="token punctuation">,</span><span class="token string">&quot;\u901A\u8FC7\u5B66\u4E60\u4F1A\u6E38\u6CF3..&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//Little Monkey\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> LittleMonkey <span class="token keyword">struct</span><span class="token punctuation">{</span>
	Monkey   <span class="token comment">//\u533F\u540D\u7ED3\u6784\u4F53 </span>
    <span class="token comment">//\u7EE7\u627F</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//\u521B\u5EFA\u4E00\u4E2AlittleMonkey \u5B9E\u4F8B</span>
    monkey <span class="token operator">:=</span> LittleMonkey<span class="token punctuation">{</span>
        Monkey<span class="token punctuation">{</span>
            Name <span class="token punctuation">:</span> <span class="token string">&quot;\u609F\u7A7A&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    monkey<span class="token punctuation">.</span><span class="token function">climbing</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    monkey<span class="token punctuation">.</span><span class="token function">Swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5B9E\u73B0\u63A5\u53E3\u53EF\u4EE5\u770B\u4F5C\u662F\u5BF9\u7EE7\u627F\u7684\u4E00\u79CD\u8865\u5145</strong></p><div class="custom-container tip"><p class="custom-container-title">\u63A5\u53E3\u548C\u7EE7\u627F\u89E3\u51B3\u7684\u95EE\u9898\u4E0D\u540C</p><p>\u7EE7\u627F\u7684\u4E3B\u8981\u4EF7\u503C\u5728\u4E8E\uFF1A\u89E3\u51B3\u95EE\u9898\u7684<strong>\u590D\u7528\u6027\u548C\u53EF\u7EF4\u62A4\u6027</strong></p><p>\u63A5\u53E3\u7684\u4E3B\u8981\u4EF7\u503C\u5728\u4E8E\uFF1A<strong>\u8BBE\u8BA1</strong>\uFF0C\u8BBE\u8BA1\u597D\u5404\u79CD\u89C4\u8303\uFF08\u65B9\u6CD5\uFF09\uFF0C\u8BA9\u5176\u4ED6\u81EA\u5B9A\u4E49\u7C7B\u578B\u53BB\u662F\u5B9E\u73B0\u8FD9\u4E9B\u65B9\u6CD5</p></div><div class="custom-container tip"><p class="custom-container-title">\u63A5\u53E3\u6BD4\u7EE7\u627F\u66F4\u52A0\u7075\u6D3B</p><p>\u63A5\u53E3\u662F\u6BD4\u7EE7\u627F\u66F4\u52A0\u7075\u6D3B\u7684</p><p>\u7EE7\u627F\u662F\u6EE1\u8DB3is - a\u7684\u5173\u7CFB\uFF0C\u800C\u63A5\u53E3\u53EA\u9700\u8981\u6EE1\u8DB3like - a\u7684\u5173\u7CFB</p></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>\u63A5\u53E3\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5B9E\u73B0\u4EE3\u7801\u89E3\u8026</strong></p></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="11.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="13.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,47),U=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),E={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),T=s(")"),V=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),W={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},G=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function D(R,z){const e=i("router-link"),p=i("ExternalLinkIcon"),c=i("RouterLink");return l(),u("div",null,[k,n("nav",v,[n("ul",null,[n("li",null,[a(e,{to:"#\u63A5\u53E3-interface"},{default:t(()=>[m]),_:1})]),n("li",null,[a(e,{to:"#\u63A5\u53E3\u5FEB\u901F\u5165\u95E8"},{default:t(()=>[b]),_:1})]),n("li",null,[a(e,{to:"#\u63A5\u53E3\u6982\u5FF5"},{default:t(()=>[f]),_:1})]),n("li",null,[a(e,{to:"#\u63A5\u53E3\u5B9E\u8DF5"},{default:t(()=>[g]),_:1})]),n("li",null,[a(e,{to:"#\u63A5\u53E3\u5B9E\u73B0\u5BF9hero\u7ED3\u6784\u4F53\u5207\u7247\u7684\u6392\u5E8F"},{default:t(()=>[y]),_:1})]),n("li",null,[a(e,{to:"#\u63A5\u53E3vs\u7EE7\u627F"},{default:t(()=>[h]),_:1})]),n("li",null,[a(e,{to:"#end-\u94FE\u63A5"},{default:t(()=>[w]),_:1})])])]),_,n("p",null,[q,n("a",S,[I,a(p)])]),x,n("p",null,[M,n("a",A,[P,a(p)])]),C,N,n("blockquote",null,[n("p",null,[L,n("a",B,[H,a(p)])])]),j,n("ul",null,[n("li",null,[n("p",null,[a(c,{to:"/"},{default:t(()=>[U]),_:1})])]),n("li",null,[n("p",null,[n("a",E,[F,a(p)]),T])]),n("li",null,[n("p",null,[V,n("a",W,[G,a(p)])])])])])}const Y=o(r,[["render",D],["__file","12.html.vue"]]);export{Y as default};
