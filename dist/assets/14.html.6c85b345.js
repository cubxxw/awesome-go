import{_ as p,r as e,o as c,c as i,a as n,b as a,w as l,e as s,d as u}from"./app.798d5e9d.js";const d={},r={href:"https://github.com/cubxxw/awesome-cs-cloudnative-blockchain",target:"_blank",rel:"noopener noreferrer"},k=s("author"),v=n("h1",{id:"\u7B2C14\u8282-\u88C5\u9970\u5668\u6A21\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C14\u8282-\u88C5\u9970\u5668\u6A21\u5F0F","aria-hidden":"true"},"#"),s(" \u7B2C14\u8282 \u88C5\u9970\u5668\u6A21\u5F0F")],-1),m=n("div",null,[n("a",{href:"13.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}"),n("a",{href:"15.md",style:{float:"right"}},"\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")],-1),h=n("br",null,null,-1),b=s("\u2764\uFE0F\u{1F495}\u{1F495}Java\u548CGolang\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u8BBE\u8BA1\u6A21\u5F0F\u4ECB\u7ECD\u3001\u521B\u5EFA\u8005\u6A21\u5F0F\u3001\u7ED3\u6784\u578B\u6A21\u5F0F\u3001\u884C\u4E3A\u578B\u6A21\u5F0F\u3002Myblog:"),f={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},w=s("http://nsddd.top"),g=u(`<hr><p>[TOC]</p><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> why</h2><p>\u88C5\u9970\u6A21\u5F0F(Decorator Pattern)\uFF1A\u52A8\u6001\u5730\u7ED9\u4E00\u4E2A\u5BF9\u8C61\u589E\u52A0\u4E00\u4E9B\u989D\u5916\u7684\u804C\u8D23\uFF0C\u5C31\u589E\u52A0\u5BF9\u8C61\u529F\u80FD\u6765\u8BF4\uFF0C\u88C5\u9970\u6A21\u5F0F\u6BD4\u751F\u6210\u5B50\u7C7B\u5B9E\u73B0\u66F4\u4E3A\u7075\u6D3B\u3002\u88C5\u9970\u6A21\u5F0F\u662F\u4E00\u79CD\u5BF9\u8C61\u7ED3\u6784\u578B\u6A21\u5F0F\u3002</p><p><img src="http://sm.nsddd.top/sm202305142043595.png" alt="image-20230514204330417"></p><blockquote><p>\u56FE\u7247\u6765\u81EA https://www.yuque.com/aceld/lfhu8y/nzlggd</p></blockquote><p>\u4EE5\u4E0A\u56FE\u4E3A\u4F8B\uFF0C\u4E00\u5F00\u59CB\u6709\u4E2A\u624B\u673A\uFF08\u88F8\u673APhone\u7C7B\uFF09\uFF0C\u5982\u679C\u9700\u8981\u4E0D\u65AD\u7684\u4E3A\u8FD9\u4E2APhone\u589E\u6DFB\u67D0\u4E2A\u529F\u80FD\u4ECE\u800C\u53D8\u6210\u4E00\u4E2A\u65B0\u529F\u80FD\u7684Phone\uFF0C\u5C31\u9700\u8981\u4E00\u4E2A\u88C5\u9970\u5668\u7684\u7C7B\uFF0C\u6765\u52A8\u6001\u7684\u7ED9\u4E00\u4E2A\u7C7B\u989D\u5916\u6DFB\u52A0\u4E00\u4E2A\u6307\u5B9A\u7684\u529F\u80FD\uFF0C\u800C\u751F\u6210\u53E6\u4E00\u4E2A\u7C7B\uFF0C\u4F46\u539F\u5148\u7684\u7C7B\u53C8\u6CA1\u6709\u6539\u53D8\uFF0C\u4E0D\u5F71\u54CD\u539F\u6709\u7CFB\u7EDF\u7684\u7A33\u5B9A\u3002</p><p>\u5728\u88C5\u9970\u5668\u6A21\u5F0F\u4E2D\uFF0C\u201C\u88F8\u673A\u201D\u3001\u201C\u6709\u8D34\u819C\u7684\u624B\u673A\u201D\u3001\u201C\u6709\u624B\u673A\u58F3\u7684\u624B\u673A\u201D\u3001\u201C\u6709\u624B\u673A\u58F3&amp;\u8D34\u819C\u7684\u624B\u673A\u201D\u90FD\u662F\u4E00\u4E2A\u6784\u4EF6\u3002 \u201C\u8D34\u819C\u88C5\u9970\u5668\u201D\u3001\u201C\u624B\u673A\u58F3\u88C5\u9970\u5668\u201D\u662F\u88C5\u9970\u5668\u4E5F\u662F\u4E00\u4E2A\u6784\u4EF6\u3002</p><h2 id="\u88C5\u9970\u6A21\u5F0F\u4E2D\u7684\u89D2\u8272\u548C\u804C\u8D23" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u6A21\u5F0F\u4E2D\u7684\u89D2\u8272\u548C\u804C\u8D23" aria-hidden="true">#</a> \u88C5\u9970\u6A21\u5F0F\u4E2D\u7684\u89D2\u8272\u548C\u804C\u8D23</h2><p><strong>Component\uFF08\u62BD\u8C61\u6784\u4EF6\uFF09</strong>\uFF1A\u5B83\u662F\u5177\u4F53\u6784\u4EF6\u548C\u62BD\u8C61\u88C5\u9970\u7C7B\u7684\u5171\u540C\u7236\u7C7B\uFF0C\u58F0\u660E\u4E86\u5728\u5177\u4F53\u6784\u4EF6\u4E2D\u5B9E\u73B0\u7684\u4E1A\u52A1\u65B9\u6CD5\uFF0C\u5B83\u7684\u5F15\u5165\u53EF\u4EE5\u4F7F\u5BA2\u6237\u7AEF\u4EE5\u4E00\u81F4\u7684\u65B9\u5F0F\u5904\u7406\u672A\u88AB\u88C5\u9970\u7684\u5BF9\u8C61\u4EE5\u53CA\u88C5\u9970\u4E4B\u540E\u7684\u5BF9\u8C61\uFF0C\u5B9E\u73B0\u5BA2\u6237\u7AEF\u7684\u900F\u660E\u64CD\u4F5C\u3002</p><p><strong>ConcreteComponent\uFF08\u5177\u4F53\u6784\u4EF6\uFF09</strong>\uFF1A\u5B83\u662F\u62BD\u8C61\u6784\u4EF6\u7C7B\u7684\u5B50\u7C7B\uFF0C\u7528\u4E8E\u5B9A\u4E49\u5177\u4F53\u7684\u6784\u4EF6\u5BF9\u8C61\uFF0C\u5B9E\u73B0\u4E86\u5728\u62BD\u8C61\u6784\u4EF6\u4E2D\u58F0\u660E\u7684\u65B9\u6CD5\uFF0C\u88C5\u9970\u5668\u53EF\u4EE5\u7ED9\u5B83\u589E\u52A0\u989D\u5916\u7684\u804C\u8D23\uFF08\u65B9\u6CD5\uFF09\u3002 \u5176\u6807\u51C6\u7684\u7C7B\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="http://sm.nsddd.top/sm202305142047537.png" alt="image-20230514204708448"></p><blockquote><p>\u56FE\u7247\u6765\u81EA https://www.yuque.com/aceld/lfhu8y/nzlggd</p></blockquote><p>\u88C5\u9970\u5668\u6A21\u5F0F\u662F\u4E00\u79CD\u5E38\u7528\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u52A8\u6001\u5730\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6DFB\u52A0\u65B0\u7684\u529F\u80FD\u3002\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u548C\u95ED\u5305\u6765\u5B9E\u73B0\u88C5\u9970\u5668\u6A21\u5F0F\u3002</p><p>\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\u3002\u65B0\u7684\u51FD\u6570\u53EF\u4EE5\u5728\u6267\u884C\u539F\u59CB\u51FD\u6570\u4E4B\u524D\u6216\u4E4B\u540E\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u903B\u8F91\uFF0C\u6216\u8005\u66FF\u6362\u539F\u59CB\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u901A\u8FC7\u88C5\u9970\u5668\u6A21\u5F0F\u6765\u8BB0\u5F55\u51FD\u6570\u7684\u6267\u884C\u65F6\u95F4\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">timeTrack</span><span class="token punctuation">(</span>start time<span class="token punctuation">.</span>Time<span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    elapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s took %s&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> elapsed<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">runSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token function">timeTrack</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;runSomething&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6267\u884C\u4E00\u4E9B\u64CD\u4F5C</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C<code>timeTrack</code> \u51FD\u6570\u662F\u4E00\u4E2A\u88C5\u9970\u5668\u51FD\u6570\uFF0C\u5B83\u63A5\u6536\u51FD\u6570\u7684\u5F00\u59CB\u65F6\u95F4\u548C\u540D\u79F0\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u5728\u51FD\u6570\u6267\u884C\u7ED3\u675F\u65F6\u6253\u5370\u51FA\u8BE5\u51FD\u6570\u7684\u6267\u884C\u65F6\u95F4\u3002<code>runSomething</code> \u51FD\u6570\u901A\u8FC7 <code>defer</code> \u5173\u952E\u5B57\u6765\u8C03\u7528 <code>timeTrack</code> \u51FD\u6570\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E86\u88C5\u9970\u5668\u6A21\u5F0F\u3002</p><p>\u9664\u4E86\u8BB0\u5F55\u6267\u884C\u65F6\u95F4\uFF0C\u88C5\u9970\u5668\u6A21\u5F0F\u8FD8\u53EF\u4EE5\u7528\u4E8E\u5B9E\u73B0\u5176\u4ED6\u529F\u80FD\uFF0C\u4F8B\u5982\u91CD\u8BD5\u673A\u5236\u3001\u7F13\u5B58\u7B49\u3002\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u4F7F\u7528\u88C5\u9970\u5668\u6A21\u5F0F\u53EF\u4EE5\u8BA9\u6211\u4EEC\u7684\u4EE3\u7801\u66F4\u52A0\u7075\u6D3B\u548C\u6613\u4E8E\u7EF4\u62A4\u3002</p><p>\u603B\u7ED3\u4E00\u4E0B\uFF0C\u88C5\u9970\u5668\u6A21\u5F0F\u662F\u4E00\u79CD\u5E38\u7528\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u5B83\u5141\u8BB8\u6211\u4EEC\u52A8\u6001\u5730\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6DFB\u52A0\u65B0\u7684\u529F\u80FD\u3002\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u548C\u95ED\u5305\u6765\u5B9E\u73B0\u88C5\u9970\u5668\u6A21\u5F0F\uFF0C\u4ECE\u800C\u8BA9\u6211\u4EEC\u7684\u4EE3\u7801\u66F4\u52A0\u7075\u6D3B\u548C\u6613\u4E8E\u7EF4\u62A4\u3002</p><h2 id="\u4EE3\u7801\u7684\u5B9E\u73B0\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u7684\u5B9E\u73B0\u903B\u8F91" aria-hidden="true">#</a> \u4EE3\u7801\u7684\u5B9E\u73B0\u903B\u8F91</h2><p>\u63A5\u4E0B\u6765\u6309\u7167\u4E0A\u8FF0\u624B\u673A\u6848\u4F8B\uFF0C\u7ED3\u5408\u88C5\u9970\u5668\u7684\u8BBE\u8BA1\u6A21\u5F0F\u7279\u70B9\uFF0C\u5F97\u5230\u5BF9\u5E94\u6848\u4F8B\u7684\u7C7B\u56FE\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="http://sm.nsddd.top/sm202305142052959.png" alt="image-20230514205225859"></p><p>\u{1F4A1}\u7B80\u5355\u7684\u4E00\u4E2A\u6848\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// ---------- \u62BD\u8C61\u5C42 ----------</span>
<span class="token comment">//\u62BD\u8C61\u7684\u6784\u4EF6</span>
<span class="token keyword">type</span> Phone <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u6784\u4EF6\u7684\u529F\u80FD</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u88C5\u9970\u5668\u57FA\u7840\u7C7B\uFF08\u8BE5\u7C7B\u672C\u5E94\u8BE5\u4E3Ainterface\uFF0C\u4F46\u662FGolang interface\u8BED\u6CD5\u4E0D\u53EF\u4EE5\u6709\u6210\u5458\u5C5E\u6027\uFF09</span>
<span class="token keyword">type</span> Decorator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	phone Phone
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Decorator<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token comment">// ----------- \u5B9E\u73B0\u5C42 -----------</span>
<span class="token comment">// \u5177\u4F53\u7684\u6784\u4EF6</span>
<span class="token keyword">type</span> HuaWei <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>hw <span class="token operator">*</span>HuaWei<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u79C0\u51FA\u4E86HuaWei\u624B\u673A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> XiaoMi <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>xm <span class="token operator">*</span>XiaoMi<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u79C0\u51FA\u4E86XiaoMi\u624B\u673A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5177\u4F53\u7684\u88C5\u9970\u5668\u7C7B</span>
<span class="token keyword">type</span> MoDecorator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Decorator   <span class="token comment">//\u7EE7\u627F\u57FA\u7840\u88C5\u9970\u5668\u7C7B(\u4E3B\u8981\u7EE7\u627FPhone\u6210\u5458\u5C5E\u6027)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>md <span class="token operator">*</span>MoDecorator<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	md<span class="token punctuation">.</span>phone<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u8C03\u7528\u88AB\u88C5\u9970\u6784\u4EF6\u7684\u539F\u65B9\u6CD5</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D34\u819C\u7684\u624B\u673A&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u88C5\u9970\u989D\u5916\u7684\u65B9\u6CD5</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewMoDecorator</span><span class="token punctuation">(</span>phone Phone<span class="token punctuation">)</span> Phone <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>MoDecorator<span class="token punctuation">{</span>Decorator<span class="token punctuation">{</span>phone<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> KeDecorator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Decorator   <span class="token comment">//\u7EE7\u627F\u57FA\u7840\u88C5\u9970\u5668\u7C7B(\u4E3B\u8981\u7EE7\u627FPhone\u6210\u5458\u5C5E\u6027)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>kd <span class="token operator">*</span>KeDecorator<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	kd<span class="token punctuation">.</span>phone<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u624B\u673A\u58F3\u7684\u624B\u673A&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u88C5\u9970\u989D\u5916\u7684\u65B9\u6CD5</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewKeDecorator</span><span class="token punctuation">(</span>phone Phone<span class="token punctuation">)</span> Phone <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>KeDecorator<span class="token punctuation">{</span>Decorator<span class="token punctuation">{</span>phone<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// ------------ \u4E1A\u52A1\u903B\u8F91\u5C42 ---------</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> huawei Phone
	huawei <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>HuaWei<span class="token punctuation">)</span>
	huawei<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	 <span class="token comment">//\u8C03\u7528\u539F\u6784\u4EF6\u65B9\u6CD5</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---------&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//\u7528\u8D34\u819C\u88C5\u9970\u5668\u88C5\u9970\uFF0C\u5F97\u5230\u65B0\u529F\u80FD\u6784\u4EF6</span>
	<span class="token keyword">var</span> moHuawei Phone
	moHuawei <span class="token operator">=</span> <span class="token function">NewMoDecorator</span><span class="token punctuation">(</span>huawei<span class="token punctuation">)</span> <span class="token comment">//\u901A\u8FC7HueWei ---&gt; MoHuaWei</span>
	moHuawei<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u8C03\u7528\u88C5\u9970\u540E\u65B0\u6784\u4EF6\u7684\u65B9\u6CD5</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---------&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> keHuawei Phone
	keHuawei <span class="token operator">=</span> <span class="token function">NewKeDecorator</span><span class="token punctuation">(</span>huawei<span class="token punctuation">)</span> <span class="token comment">//\u901A\u8FC7HueWei ---&gt; KeHuaWei</span>
	keHuawei<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---------&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> keMoHuaWei Phone
	keMoHuaWei <span class="token operator">=</span> <span class="token function">NewMoDecorator</span><span class="token punctuation">(</span>keHuawei<span class="token punctuation">)</span> <span class="token comment">//\u901A\u8FC7KeHuaWei ---&gt; KeMoHuaWei</span>
	keMoHuaWei<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F680} \u7F16\u8BD1\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u79C0\u51FA\u4E86HuaWei\u624B\u673A
---------
\u79C0\u51FA\u4E86HuaWei\u624B\u673A
\u8D34\u819C\u7684\u624B\u673A
---------
\u79C0\u51FA\u4E86HuaWei\u624B\u673A
\u624B\u673A\u58F3\u7684\u624B\u673A
---------
\u79C0\u51FA\u4E86HuaWei\u624B\u673A
\u624B\u673A\u58F3\u7684\u624B\u673A
\u8D34\u819C\u7684\u624B\u673A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u4F18\u7F3A\u70B9</h2><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h3><ul><li>\u88C5\u9970\u5668\u6A21\u5F0F\u901A\u8FC7\u5C06\u529F\u80FD\u5206\u79BB\u5230\u4E0D\u540C\u7684\u88C5\u9970\u5668\u4E2D\uFF0C\u4F7F\u5F97\u4EE3\u7801\u66F4\u52A0\u7075\u6D3B\u548C\u6613\u4E8E\u7EF4\u62A4\u3002</li><li>\u53EF\u4EE5\u5728\u4E0D\u4FEE\u6539\u539F\u59CB\u5BF9\u8C61\u7684\u60C5\u51B5\u4E0B\u52A8\u6001\u5730\u4E3A\u5176\u6DFB\u52A0\u65B0\u7684\u529F\u80FD\u3002</li><li>\u53EF\u4EE5\u901A\u8FC7\u7EC4\u5408\u4E0D\u540C\u7684\u88C5\u9970\u5668\u6765\u5B9E\u73B0\u4E0D\u540C\u7684\u529F\u80FD\u7EC4\u5408\u3002</li></ul><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h3><ul><li>\u7531\u4E8E\u88C5\u9970\u5668\u6A21\u5F0F\u589E\u52A0\u4E86\u8BB8\u591A\u5C0F\u7C7B\u548C\u5BF9\u8C61\uFF0C\u56E0\u6B64\u4F1A\u589E\u52A0\u7CFB\u7EDF\u7684\u590D\u6742\u6027\u3002</li><li>\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8FC7\u591A\u7684\u88C5\u9970\u5668\u5D4C\u5957\uFF0C\u4F7F\u5F97\u4EE3\u7801\u96BE\u4EE5\u7406\u89E3\u548C\u7EF4\u62A4\u3002</li><li>\u5982\u679C\u88C5\u9970\u5668\u548C\u539F\u59CB\u5BF9\u8C61\u7684\u63A5\u53E3\u4E0D\u4E00\u81F4\uFF0C\u53EF\u80FD\u9700\u8981\u989D\u5916\u7684\u9002\u914D\u5668\u4EE3\u7801\u6765\u5B9E\u73B0\u517C\u5BB9\u6027\u3002</li></ul><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="13.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="15.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,34),_=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),y={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},q=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),H=s(")"),P=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),x={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},D=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function S(W,M){const t=e("ExternalLinkIcon"),o=e("RouterLink");return c(),i("div",null,[n("ul",null,[n("li",null,[n("a",r,[k,a(t)])])]),v,m,h,n("blockquote",null,[n("p",null,[b,n("a",f,[w,a(t)])])]),g,n("ul",null,[n("li",null,[n("p",null,[a(o,{to:"/go-advancend/"},{default:l(()=>[_]),_:1})])]),n("li",null,[n("p",null,[n("a",y,[q,a(t)]),H])]),n("li",null,[n("p",null,[P,n("a",x,[D,a(t)])])])])])}const N=p(d,[["render",S],["__file","14.html.vue"]]);export{N as default};
