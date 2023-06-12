import{_ as p,r as t,o as c,c as i,a as n,b as a,w as l,e as s,d as u}from"./app.798d5e9d.js";const r={},d={href:"https://github.com/cubxxw/awesome-cs-cloudnative-blockchain",target:"_blank",rel:"noopener noreferrer"},k=s("author"),m=n("h1",{id:"\u7B2C12\u8282-\u6865\u63A5\u6A21\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C12\u8282-\u6865\u63A5\u6A21\u5F0F","aria-hidden":"true"},"#"),s(" \u7B2C12\u8282 \u6865\u63A5\u6A21\u5F0F")],-1),v=n("div",null,[n("a",{href:"11.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}"),n("a",{href:"13.md",style:{float:"right"}},"\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")],-1),b=n("br",null,null,-1),h=s("\u2764\uFE0F\u{1F495}\u{1F495}Java\u548CGolang\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u8BBE\u8BA1\u6A21\u5F0F\u4ECB\u7ECD\u3001\u521B\u5EFA\u8005\u6A21\u5F0F\u3001\u7ED3\u6784\u578B\u6A21\u5F0F\u3001\u884C\u4E3A\u578B\u6A21\u5F0F\u3002Myblog:"),f={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},_=s("http://nsddd.top"),y=u(`<hr><p>[TOC]</p><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> why</h2><p>\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u6865\u63A5\u6A21\u5F0F\uFF08Bridge Pattern\uFF09\u662F\u4E00\u79CD\u7ED3\u6784\u578B\u8BBE\u8BA1\u6A21\u5F0F\u3002\u5B83\u5141\u8BB8\u4F60\u5C06\u62BD\u8C61\u90E8\u5206\u548C\u5B9E\u73B0\u90E8\u5206\u5206\u79BB\u5F00\u6765\uFF0C\u4F7F\u5B83\u4EEC\u80FD\u591F\u72EC\u7ACB\u5730\u53D8\u5316\u3002</p><p>\u8FD9\u79CD\u6A21\u5F0F\u7684\u8BBE\u8BA1\u5173\u952E\u601D\u60F3\u662F<strong>\u4F7F\u7528\u7EC4\u5408\u800C\u4E0D\u662F\u7EE7\u627F</strong>\u6765\u7EC4\u7EC7\u4EE3\u7801\uFF0CGolang \u4E2D\u901A\u8FC7\u63A5\u53E3\u548C\u7ED3\u6784\u4F53\u5B9E\u73B0\u3002</p><h2 id="\u7B80\u5355\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5B9E\u73B0" aria-hidden="true">#</a> \u7B80\u5355\u5B9E\u73B0</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Implementor <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">OperationImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7EC4\u5408</span>
<span class="token keyword">type</span> Abstraction <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    imp Implementor
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Abstraction<span class="token punctuation">)</span> <span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>imp<span class="token punctuation">.</span><span class="token function">OperationImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteImplementorA <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>imp <span class="token operator">*</span>ConcreteImplementorA<span class="token punctuation">)</span> <span class="token function">OperationImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;ConcreteImplementorA operation&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteImplementorB <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>imp <span class="token operator">*</span>ConcreteImplementorB<span class="token punctuation">)</span> <span class="token function">OperationImp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;ConcreteImplementorB operation&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    abstraction <span class="token operator">:=</span> <span class="token operator">&amp;</span>Abstraction<span class="token punctuation">{</span><span class="token operator">&amp;</span>ConcreteImplementorA<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>abstraction<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    abstraction<span class="token punctuation">.</span>imp <span class="token operator">=</span> <span class="token operator">&amp;</span>ConcreteImplementorB<span class="token punctuation">{</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>abstraction<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u62BD\u8C61\u7C7B<code>Abstraction</code>\u53CA\u5176\u5B9E\u73B0\u7C7B<code>ConcreteImplementorA</code>\u548C<code>ConcreteImplementorB</code>\u3002\u62BD\u8C61\u7C7B<code>Abstraction</code>\u5305\u542B\u4E00\u4E2A\u5BF9\u5B9E\u73B0\u7C7B<code>Implementor</code>\u7684\u5F15\u7528\uFF0C\u5E76\u5B9A\u4E49\u4E86\u4E00\u4E2A<code>Operation()</code>\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u59D4\u6258\u7ED9\u5B9E\u73B0\u7C7B\u7684<code>OperationImp()</code>\u65B9\u6CD5\u6267\u884C\u3002\u8FD9\u6837\uFF0C\u5728\u4F7F\u7528\u65F6\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u7075\u6D3B\u5730\u5207\u6362\u5B9E\u73B0\u7C7B\u3002</p><p>\u5728<code>main()</code>\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u6307\u5411<code>ConcreteImplementorA</code>\u7684\u6307\u9488\u5E76\u8C03\u7528<code>Operation()</code>\u65B9\u6CD5\u3002\u7136\u540E\uFF0C\u6211\u4EEC\u5C06\u5B9E\u73B0\u7C7B\u66F4\u6539\u4E3A<code>ConcreteImplementorB</code>\uFF0C\u5E76\u518D\u6B21\u8C03\u7528<code>Operation()</code>\u65B9\u6CD5\u6765\u9A8C\u8BC1\u5B9E\u73B0\u7684\u7075\u6D3B\u6027\u3002</p><h2 id="\u903B\u8F91\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u5B9E\u73B0" aria-hidden="true">#</a> \u903B\u8F91\u5B9E\u73B0</h2><p>\u6211\u4EEC\u5982\u679C\u9700\u8981\u5BF9\u67D0\u4E2A\u7269\u54C1\u548C\u989C\u8272\u8FDB\u884C\u64CD\u4F5C\uFF0C\u4F7F\u7528 \u6865\u63A5\u53EF\u4EE5\u4E86\u5C06\u4ED6\u4EEC\u4E4B\u95F4\u8054\u7CFB\u8D77\u6765</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// \u62BD\u8C61\u90E8\u5206 - \u5F62\u72B6</span>
<span class="token keyword">type</span> Shape <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0\u90E8\u5206 - \u989C\u8272 </span>
<span class="token keyword">type</span> Color <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">ApplyColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0\u90E8\u5206 - \u7EA2\u8272</span>
<span class="token keyword">type</span> RedColor <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>RedColor<span class="token punctuation">)</span> <span class="token function">ApplyColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Applying red color&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// .... \u5176\u4ED6\u989C\u8272</span>


<span class="token comment">// \u6269\u5C55\u62BD\u8C61\u90E8\u5206 - \u5706\u5F62</span>
<span class="token keyword">type</span> Circle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    color Color <span class="token comment">// \u5F15\u7528\u5B9E\u73B0\u90E8\u5206\u989C\u8272</span>
<span class="token punctuation">}</span>

<span class="token comment">// ... \u5176\u4ED6\u5F62\u72B6</span>


<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Circle<span class="token punctuation">)</span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Drawing circle&quot;</span><span class="token punctuation">)</span>
    s<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">ApplyColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8C03\u7528\u5B9E\u73B0\u90E8\u5206\u7684\u65B9\u6CD5</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    circle <span class="token operator">:=</span> <span class="token operator">&amp;</span>Circle<span class="token punctuation">{</span><span class="token operator">&amp;</span>RedColor<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    circle<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u62BD\u8C61\u7C7B<code>Shape</code>\u53CA\u5176\u5B9E\u73B0\u7C7B<code>Circle</code>\u3002\u62BD\u8C61\u7C7B<code>Shape</code>\u89C4\u5B9A\u4E86\u5F62\u72B6\u5E94\u6709\u7684\u884C\u4E3A<code>Draw()</code>\uFF0C\u5E76\u5305\u542B\u4E00\u4E2A\u5BF9\u5B9E\u73B0\u7C7B<code>Color</code>\u7684\u5F15\u7528\u3002</p><p>\u6211\u4EEC\u8FD8\u5B9A\u4E49\u4E86\u5B9E\u73B0\u7C7B<code>RedColor</code>\uFF0C\u5E76\u5B9E\u73B0\u4E86\u5B83\u7684\u65B9\u6CD5<code>ApplyColor()</code>\u3002\u7136\u540E\uFF0C\u6211\u4EEC\u6269\u5C55\u4E86\u62BD\u8C61\u7C7B<code>Shape</code>\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5706\u5F62\u7C7B<code>Circle</code>\uFF0C\u5B83\u7EE7\u627F\u4E86<code>Shape</code>\uFF0C\u5E76\u4E14\u5B83\u7684\u884C\u4E3A<code>Draw()</code>\u4E2D\u8C03\u7528\u4E86\u5B9E\u73B0\u7C7B\u7684<code>ApplyColor()</code>\u65B9\u6CD5\u3002</p><p>\u5728<code>main()</code>\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u6307\u5411<code>Circle</code>\u7684\u6307\u9488\uFF0C\u5E76\u5C06\u5176\u989C\u8272\u8BBE\u7F6E\u4E3A<code>RedColor</code>\u3002\u7136\u540E\uFF0C\u6211\u4EEC\u8C03\u7528<code>Draw()</code>\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8F93\u51FA\u4E86\u201CDrawing circle\u201D\u5E76\u8C03\u7528\u4E86<code>RedColor</code>\u5B9E\u73B0\u7C7B\u7684\u65B9\u6CD5\u3002</p><h2 id="\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u4F18\u7F3A\u70B9</h2><p><strong>\u4F18\u70B9\uFF1A</strong></p><ol><li>\u63D0\u9AD8\u4EE3\u7801\u91CD\u7528\u6027\u548C\u7075\u6D3B\u6027\uFF1A\u9002\u914D\u5668\u6A21\u5F0F\u53EF\u4EE5\u5C06\u73B0\u6709\u7684\u4EE3\u7801\u4E0E\u65B0\u7684\u4EE3\u7801\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4EE3\u7801\u7684\u91CD\u7528\u6027\u548C\u7075\u6D3B\u6027\u3002</li><li>\u7B80\u5316\u4EE3\u7801\u5B9E\u73B0\uFF1A\u9002\u914D\u5668\u6A21\u5F0F\u53EF\u4EE5\u9690\u85CF\u590D\u6742\u7684\u903B\u8F91\uFF0C\u7B80\u5316\u4EE3\u7801\u5B9E\u73B0\u8FC7\u7A0B\u3002</li><li>\u63D0\u9AD8\u7CFB\u7EDF\u53EF\u9760\u6027\uFF1A\u9002\u914D\u5668\u6A21\u5F0F\u53EF\u4EE5\u964D\u4F4E\u7CFB\u7EDF\u95F4\u7684\u8026\u5408\u5EA6\uFF0C\u589E\u5F3A\u7CFB\u7EDF\u7684\u53EF\u9760\u6027\u548C\u7A33\u5B9A\u6027\u3002</li></ol><p><strong>\u7F3A\u70B9\uFF1A</strong></p><ol><li>\u8FC7\u591A\u4F7F\u7528\u9002\u914D\u5668\u4F1A\u589E\u52A0\u7CFB\u7EDF\u590D\u6742\u6027\uFF1A\u5982\u679C\u8FC7\u591A\u5730\u4F7F\u7528\u9002\u914D\u5668\u6A21\u5F0F\uFF0C\u4F1A\u589E\u52A0\u7CFB\u7EDF\u7684\u590D\u6742\u6027\uFF0C\u964D\u4F4E\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002</li><li>\u589E\u52A0\u7CFB\u7EDF\u8FD0\u884C\u65F6\u95F4\u548C\u7A7A\u95F4\u5F00\u9500\uFF1A\u9002\u914D\u5668\u6A21\u5F0F\u9700\u8981\u8FDB\u884C\u989D\u5916\u7684\u903B\u8F91\u5904\u7406\uFF0C\u56E0\u6B64\u4F1A\u589E\u52A0\u7CFB\u7EDF\u7684\u8FD0\u884C\u65F6\u95F4\u548C\u7A7A\u95F4\u5F00\u9500\u3002</li><li>\u53EF\u80FD\u5B58\u5728\u9002\u914D\u5668\u4E0D\u517C\u5BB9\u95EE\u9898\uFF1A\u7531\u4E8E\u9002\u914D\u5668\u6A21\u5F0F\u7684\u5B9E\u73B0\u65B9\u5F0F\u4E0D\u540C\uFF0C\u53EF\u80FD\u5B58\u5728\u9002\u914D\u5668\u4E0D\u517C\u5BB9\u95EE\u9898\u3002</li></ol><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="11.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="13.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,22),g=s("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),w={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},C=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),I=s(")"),A=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),x={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},q=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function O(B,D){const e=t("ExternalLinkIcon"),o=t("RouterLink");return c(),i("div",null,[n("ul",null,[n("li",null,[n("a",d,[k,a(e)])])]),m,v,b,n("blockquote",null,[n("p",null,[h,n("a",f,[_,a(e)])])]),y,n("ul",null,[n("li",null,[n("p",null,[a(o,{to:"/go-advancend/"},{default:l(()=>[g]),_:1})])]),n("li",null,[n("p",null,[n("a",w,[C,a(e)]),I])]),n("li",null,[n("p",null,[A,n("a",x,[q,a(e)])])])])])}const R=p(r,[["render",O],["__file","12.html.vue"]]);export{R as default};
