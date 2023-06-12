import{_ as o,r as e,o as i,c,a as n,b as a,w as l,e as s,d as u}from"./app.798d5e9d.js";const d={},r={href:"https://github.com/cubxxw/awesome-cs-cloudnative-blockchain",target:"_blank",rel:"noopener noreferrer"},k=s("author"),v=n("h1",{id:"\u7B2C2\u8282-\u5355\u4E00\u804C\u8D23\u539F\u5219",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C2\u8282-\u5355\u4E00\u804C\u8D23\u539F\u5219","aria-hidden":"true"},"#"),s(" \u7B2C2\u8282 \u5355\u4E00\u804C\u8D23\u539F\u5219")],-1),m=n("div",null,[n("a",{href:"1.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}"),n("a",{href:"3.md",style:{float:"right"}},"\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")],-1),b=n("br",null,null,-1),h=s("\u2764\uFE0F\u{1F495}\u{1F495}Java\u548CGolang\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u8BBE\u8BA1\u6A21\u5F0F\u4ECB\u7ECD\u3001\u521B\u5EFA\u8005\u6A21\u5F0F\u3001\u7ED3\u6784\u578B\u6A21\u5F0F\u3001\u884C\u4E3A\u578B\u6A21\u5F0F\u3002Myblog:"),f={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},g=s("http://nsddd.top"),_=u(`<hr><p>[TOC]</p><h2 id="\u4EC0\u4E48\u662F\u5355\u4E00\u804C\u8D23\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5355\u4E00\u804C\u8D23\u539F\u5219" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5355\u4E00\u804C\u8D23\u539F\u5219</h2><div class="custom-container tip"><p class="custom-container-title">\u5355\u4E00\u804C\u8D23\u539F\u5219</p><p>\u7C7B\u7684\u804C\u8D23\u5355\u4E00\uFF0C\u5BF9\u5916\u53EA\u63D0\u4F9B\u4E00\u79CD\u529F\u80FD\uFF0C\u4E8C\u5F15\u8D77\u7C7B\u53D8\u5316\u7684\u539F\u56E0\u90FD\u53EA\u6709\u4E00\u4E2A</p></div><h2 id="go\u8BED\u8A00\u4E2D\u901A\u5E38\u5982\u4F55\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#go\u8BED\u8A00\u4E2D\u901A\u5E38\u5982\u4F55\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> Go\u8BED\u8A00\u4E2D\u901A\u5E38\u5982\u4F55\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F</h2><p>\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u61D2\u6C49\u5F0F\u6216\u997F\u6C49\u5F0F\u6765\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\u3002</p><h3 id="\u61D2\u6C49\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u61D2\u6C49\u5F0F" aria-hidden="true">#</a> \u61D2\u6C49\u5F0F</h3><p>\u5728\u61D2\u6C49\u5F0F\u4E2D\uFF0C\u5B9E\u4F8B\u5BF9\u8C61\u4E0D\u4F1A\u5728\u7A0B\u5E8F\u521D\u59CB\u5316\u65F6\u88AB\u521B\u5EFA\uFF0C\u800C\u662F\u5728\u7B2C\u4E00\u6B21\u8C03\u7528\u8BE5\u5B9E\u4F8B\u5BF9\u8C61\u65F6\u624D\u4F1A\u88AB\u521B\u5EFA\u3002\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u8D44\u6E90\u6D6A\u8D39\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528\u61D2\u6C49\u5F0F\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> singleton <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> instance <span class="token operator">*</span>singleton
<span class="token keyword">var</span> once sync<span class="token punctuation">.</span>Once

<span class="token keyword">func</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>singleton <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		instance <span class="token operator">=</span> <span class="token operator">&amp;</span>singleton<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> instance
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s1 <span class="token operator">:=</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	s2 <span class="token operator">:=</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

	<span class="token comment">// if s1 == s2</span>
	<span class="token keyword">if</span> s1 <span class="token operator">==</span> s2 <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 == s2&quot;</span><span class="token punctuation">)</span> <span class="token comment">// yes</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s1 != s2&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u8FF0\u5B9E\u73B0\u4E2D\uFF0C<code>once</code>\u5BF9\u8C61\u4FDD\u8BC1\u4E86<code>GetInstance()</code>\u51FD\u6570\u53EA\u4F1A\u88AB\u6267\u884C\u4E00\u6B21\u3002\u7B2C\u4E00\u6B21\u8C03\u7528<code>GetInstance()</code>\u51FD\u6570\u65F6\uFF0C<code>once.Do()</code>\u65B9\u6CD5\u4F1A\u6267\u884C\u4F20\u9012\u7ED9\u5B83\u7684\u533F\u540D\u51FD\u6570\uFF0C\u8BE5\u533F\u540D\u51FD\u6570\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684<code>singleton</code>\u5BF9\u8C61\uFF0C\u5E76\u5C06\u5B83\u8D4B\u503C\u7ED9<code>instance</code>\u53D8\u91CF\u3002\u4E4B\u540E\u518D\u6B21\u8C03\u7528<code>GetInstance()</code>\u51FD\u6570\u65F6\uFF0C\u5C31\u4F1A\u76F4\u63A5\u8FD4\u56DE\u5DF2\u7ECF\u521B\u5EFA\u597D\u7684<code>instance</code>\u53D8\u91CF\u3002</p><h3 id="\u997F\u6C49\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u997F\u6C49\u5F0F" aria-hidden="true">#</a> \u997F\u6C49\u5F0F</h3><p>\u5728\u997F\u6C49\u5F0F\u4E2D\uFF0C\u5B9E\u4F8B\u5BF9\u8C61\u5728\u7A0B\u5E8F\u521D\u59CB\u5316\u65F6\u5C31\u4F1A\u88AB\u521B\u5EFA\u3002\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u4FDD\u8BC1\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u80FD\u591F\u83B7\u5F97\u8BE5\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u4F46\u662F\u53EF\u80FD\u4F1A\u9020\u6210\u4E0D\u5FC5\u8981\u7684\u8D44\u6E90\u6D6A\u8D39\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528\u997F\u6C49\u5F0F\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> singleton

<span class="token keyword">type</span> singleton <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> instance <span class="token operator">*</span>singleton <span class="token operator">=</span> <span class="token operator">&amp;</span>singleton<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>singleton <span class="token punctuation">{</span>
    <span class="token keyword">return</span> instance
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
 * @Description: \u5355\u4E00\u804C\u8D23\u539F\u5219
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-10-26 20:08:39
 * @LastEditTime: 2022-10-26 20:15:04
 * @FilePath: \\code\\\u8BBE\u8BA1\u6A21\u5F0F\\\u8BBE\u8BA1\u6A21\u5F0F\u7B2C1\u8282.go
 * @Github_Address: https://github.com/cubxxw/awesome-cs-cloudnative-blockchain
 * Copyright (c) 2022 by xiongxinwei 3293172751nss@gmail.com, All Rights Reserved. @blog: http://nsddd.top
 */</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">Work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">Drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// Path: \u8BBE\u8BA1\u6A21\u5F0F\\\u8BBE\u8BA1\u6A21\u5F0F\u7B2C1\u8282.go</span>
<span class="token comment">//\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u8BBE\u8BA1\u6210\u5355\u4E00\u804C\u8D23\u539F\u5219</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Password <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Password <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">GetInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u83B7\u53D6\u7528\u6237\u4FE1\u606F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Password<span class="token punctuation">)</span> <span class="token function">GetInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u83B7\u53D6\u5BC6\u7801\u4FE1\u606F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p <span class="token operator">:=</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span><span class="token punctuation">}</span>
	p<span class="token punctuation">.</span><span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span><span class="token function">Work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span><span class="token function">Drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">//\u5355\u4E00\u804C\u8D23\u539F\u5219</span>
	u <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span>
	u<span class="token punctuation">.</span><span class="token function">GetInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	pwd <span class="token operator">:=</span> <span class="token operator">&amp;</span>Password<span class="token punctuation">{</span><span class="token punctuation">}</span>
	pwd<span class="token punctuation">.</span><span class="token function">GetInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> go run <span class="token string">&quot;d:\\\u6587\u6863\\\u6700\u8FD1\u7684<span class="token entity" title="\\a">\\a</span>wesome-golang\\docs\\go-advancend<span class="token entity" title="\\c">\\c</span>ode\\\u8BBE\u8BA1\u6A21\u5F0F\\\u8BBE\u8BA1\u6A21\u5F0F\u7B2C1\u8282.go&quot;</span>
\u83B7\u53D6\u7528\u6237\u4FE1\u606F
\u83B7\u53D6\u5BC6\u7801\u4FE1\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="1.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="3.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,20),y=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),w={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),q=s(")"),P=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),G={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},E=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function I(C,D){const t=e("ExternalLinkIcon"),p=e("RouterLink");return i(),c("div",null,[n("ul",null,[n("li",null,[n("a",r,[k,a(t)])])]),v,m,b,n("blockquote",null,[n("p",null,[h,n("a",f,[g,a(t)])])]),_,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/go-advancend/"},{default:l(()=>[y]),_:1})])]),n("li",null,[n("p",null,[n("a",w,[x,a(t)]),q])]),n("li",null,[n("p",null,[P,n("a",G,[E,a(t)])])])])])}const N=o(d,[["render",I],["__file","2.html.vue"]]);export{N as default};
