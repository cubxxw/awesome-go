import{_ as o,r as t,o as c,c as p,a,b as e,e as n,d as l}from"./app.ebf2b957.js";const i={},d=a("h1",{id:"\u4F4D\u8FD0\u7B97\u4EE5\u53CA\u8865\u7801\u91CD\u70B9",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4F4D\u8FD0\u7B97\u4EE5\u53CA\u8865\u7801\u91CD\u70B9","aria-hidden":"true"},"#"),n(" \u4F4D\u8FD0\u7B97\u4EE5\u53CA\u8865\u7801\u91CD\u70B9")],-1),r=a("p",null,"[toc]",-1),u=a("h2",{id:"i\uFE0F\u524D\u8A00",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#i\uFE0F\u524D\u8A00","aria-hidden":"true"},"#"),n(" \u2139\uFE0F\u524D\u8A00")],-1),k=n("\u53C2\u8003\u6587\u7AE0\uFF1A"),m={href:"https://gist.github.com/dideler/2365607",target:"_blank",rel:"noopener noreferrer"},v=n("https://gist.github.com/dideler/2365607"),h=n("\u3001"),b={href:"https://us.com/",target:"_blank",rel:"noopener noreferrer"},g=n("https://us.com/"),x=n("\u63A8\u8350\u4E00\u4E2A\u5B66\u4E60\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u7F51\u7AD9\uFF1A"),_={href:"https://regexr.com/",target:"_blank",rel:"noopener noreferrer"},j=n("https://regexr.com/"),f=a("li",null,[a("p",null,[n("\u4F7F\u7528\u7684\u73AF\u5883\uFF1A"),a("code",null,"Java \u2013 jshell"),n("\uFF08\u56E0\u4E3A"),a("code",null,"ipython"),n("\u4E2D\u4E0D\u53EF\u4EE5\u7528"),a("code",null,"++i"),n("\uFF09")])],-1),y=n("\u5728"),q={href:"http://github.com/3293172751/LeetCode",target:"_blank",rel:"noopener noreferrer"},w=n("leetcode\u7B97\u6CD5"),$=n("\u4E2D\u6211\u63D0\u5230\u4E86\u5F88\u591A\u5173\u4E8E\u4F4D\u8FD0\u7B97\u7684\u6280\u5DE7\uFF0C\u8FDB\u884C\u4E86\u4E00\u6B21\u603B\u7ED3"),J=l(`<h2 id="\u{1F388}\u4E58\u4EE5-2-\u7684\u5E42" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u4E58\u4EE5-2-\u7684\u5E42" aria-hidden="true">#</a> \u{1F388}\u4E58\u4EE5 2 \u7684\u5E42</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>x <span class="token operator">=</span> x <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// x = x * 2</span>
x <span class="token operator">=</span> x <span class="token operator">&lt;&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// x = x * 64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u4E8E\u4E24\u4E2A\u6570<code>a</code>\uFF0C<code>b</code>\uFF0C\u8BA1\u7B97<code>a</code> \u548C b \u7684\u4E2D\u95F4\u503C\uFF0C\u5982\u679C\u8BA1\u7B97a+b\u9664\u4EE52\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0a+b\u6EA2\u51FA\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b <span class="token operator">-</span> a<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h2 id="\u{1F388}\u9664\u4EE5-2-\u7684\u5E42" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u9664\u4EE5-2-\u7684\u5E42" aria-hidden="true">#</a> \u{1F388}\u9664\u4EE5 2 \u7684\u5E42</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>x <span class="token operator">=</span> x <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// x = x / 2</span>
x <span class="token operator">=</span> x <span class="token operator">&gt;&gt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// x = x / 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F388}\u4EA4\u6362\u6CA1\u6709\u4E34\u65F6\u53D8\u91CF\u7684\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u4EA4\u6362\u6CA1\u6709\u4E34\u65F6\u53D8\u91CF\u7684\u6574\u6570" aria-hidden="true">#</a> \u{1F388}\u4EA4\u6362\u6CA1\u6709\u4E34\u65F6\u53D8\u91CF\u7684\u6574\u6570</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a ^= b; // int temp = b
b ^= a; // b = a
a ^= b; // a = temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20220925161607882.png?xxw@nsddd.top" alt="image-20220925161607882"></p><h2 id="\u{1F388}\u589E\u91CF-\u51CF\u91CF-\u8F83\u6162\u4F46\u6709\u5229\u4E8E\u6DF7\u6DC6" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u589E\u91CF-\u51CF\u91CF-\u8F83\u6162\u4F46\u6709\u5229\u4E8E\u6DF7\u6DC6" aria-hidden="true">#</a> \u{1F388}\u589E\u91CF/\u51CF\u91CF\uFF08\u8F83\u6162\u4F46\u6709\u5229\u4E8E\u6DF7\u6DC6\uFF09</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>i = -~i; // i++
i = ~-i; // i--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u63A8\u65AD\uFF1A<code>println(~-2)</code></p><ul><li>\u5148\u5F97\u5230 <code>-2</code> \u7684\u539F\u7801\uFF1A<code>10000000 00000000 00000000 00000010</code></li><li>\u518D\u5F97\u5230 <code>-2</code> \u7684\u53CD\u7801\uFF1A<code>11111111 11111111 11111111 11111101</code></li><li>\u518D\u5F97\u5230 <code>-2</code> \u7684\u8865\u7801\uFF1A<code>11111111 11111111 11111111 11111110</code></li><li>\u8865\u7801\u6C42\u53CD\uFF1A<code>00000000 00000000 00000000 00000001</code></li></ul><p><strong>\u6CE8\u610F\u8FD9\u4E2A\u8865\u7801\u6C42\u53CD\u662F\u6240\u6709\u4F4D\u6570\u90FD\u6C42\u53CD\uFF0C\u6240\u4EE5\u7ED3\u679C\u662F<code>(2--)==1</code></strong></p></blockquote><p><img src="http://sm.nsddd.top/smsmsmimage-20220925161741820.png?xxw@nsddd.top" alt="image-20220925161741820"></p><h2 id="\u{1F388}\u6807\u5FD7\u7FFB\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u6807\u5FD7\u7FFB\u8F6C" aria-hidden="true">#</a> \u{1F388}\u6807\u5FD7\u7FFB\u8F6C</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>i <span class="token operator">=</span> <span class="token operator">~</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// or</span>
i <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">^</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// i = -i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F388}\u5982\u679C\u9664\u6570\u662F-2-\u7684\u5E42-\u5219\u8FDB\u884C\u6A21\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u5982\u679C\u9664\u6570\u662F-2-\u7684\u5E42-\u5219\u8FDB\u884C\u6A21\u8FD0\u7B97" aria-hidden="true">#</a> \u{1F388}\u5982\u679C\u9664\u6570\u662F 2 \u7684\u5E42\uFF0C\u5219\u8FDB\u884C\u6A21\u8FD0\u7B97</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>x <span class="token operator">=</span> <span class="token number">131</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// x = 131 % 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u{1F388}\u68C0\u67E5\u6574\u6570\u662F\u5076\u6570\u8FD8\u662F\u5947\u6570" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u68C0\u67E5\u6574\u6570\u662F\u5076\u6570\u8FD8\u662F\u5947\u6570" aria-hidden="true">#</a> \u{1F388}\u68C0\u67E5\u6574\u6570\u662F\u5076\u6570\u8FD8\u662F\u5947\u6570</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">(</span>i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// (i % 2) == 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u{1F388}\u76F8\u7B49\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u76F8\u7B49\u68C0\u67E5" aria-hidden="true">#</a> \u{1F388}\u76F8\u7B49\u68C0\u67E5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">(</span>a<span class="token operator">^</span>b<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// a == b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u{1F388}\u7EDD\u5BF9\u503C" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u7EDD\u5BF9\u503C" aria-hidden="true">#</a> \u{1F388}\u7EDD\u5BF9\u503C</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token operator">-</span>x <span class="token operator">:</span> x<span class="token punctuation">;</span> <span class="token comment">// abs(x)</span>
<span class="token punctuation">(</span>x <span class="token operator">^</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;&gt;</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;&gt;</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token comment">// abs(x)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F388}\u7B49\u53F7\u68C0\u67E5-\u4E24\u4E2A\u6574\u6570\u90FD\u662F-pos-\u6216-neg" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u7B49\u53F7\u68C0\u67E5-\u4E24\u4E2A\u6574\u6570\u90FD\u662F-pos-\u6216-neg" aria-hidden="true">#</a> \u{1F388}\u7B49\u53F7\u68C0\u67E5\uFF08\u4E24\u4E2A\u6574\u6570\u90FD\u662F pos \u6216 neg\uFF09</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>a <span class="token operator">^</span> b <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// a * b &gt; 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u{1F388}\u5706\u89D2\u3001\u5929\u82B1\u677F\u3001\u5730\u677F" tabindex="-1"><a class="header-anchor" href="#\u{1F388}\u5706\u89D2\u3001\u5929\u82B1\u677F\u3001\u5730\u677F" aria-hidden="true">#</a> \u{1F388}\u5706\u89D2\u3001\u5929\u82B1\u677F\u3001\u5730\u677F</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// round(x)</span>
<span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// ceil(x)</span>
x <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// floor(x)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u{1F4A1}java\u4E2D\u7684\u4E8C\u8FDB\u5236\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#\u{1F4A1}java\u4E2D\u7684\u4E8C\u8FDB\u5236\u8865\u5145" aria-hidden="true">#</a> \u{1F4A1}Java\u4E2D\u7684\u4E8C\u8FDB\u5236\u8865\u5145</h2><h3 id="\u5FC5\u80CC" tabindex="-1"><a class="header-anchor" href="#\u5FC5\u80CC" aria-hidden="true">#</a> \u5FC5\u80CC</h3><ol><li>\u4E8C\u8FDB\u5236\u6700\u9AD8\u4F4D\u662F\u7B26\u53F7\u4F4D\uFF08\u{1F436}\u65CB\u8F6C90\u5EA6\uFF09</li><li><code>0</code> \u662F\u8868\u793A\u6B63\u6570\uFF0C<code>1</code> \u662F\u8868\u793A\u8D1F\u6570</li><li>\u6B63\u6570\u7684\u539F\u7801\u3001\u53CD\u7801\u3001\u8865\u7801\u90FD\u4E00\u6837</li><li>$$\u8D1F\u6570\u7684\u53CD\u7801 = \u7B26\u53F7\u4F4D\u4E0D\u53D8\uFF0C\u5176\u4ED6\u4F4D\u53D6\u53CD$$</li><li>$$\u8D1F\u6570\u7684\u8865\u7801 = \u5B83\u7684\u53CD\u7801 + 1$$</li><li><code>0</code> \u7684\u53CD\u7801\u3001\u8865\u7801\u90FD\u662F<code>0</code></li><li>java\u6CA1\u6709\u65E0\u7B26\u53F7\u6570\uFF0C\u6362\u8A00\u4E4B\uFF0CJava\u4E2D\u7684\u6570\u90FD\u662F\u6709\u7B26\u53F7\u7684</li><li><strong>\u5F53\u8BA1\u7B97\u673A\u8FD0\u7B97\u65F6\uFF0C\u90FD\u662F\u4EE5\u8865\u7801\u7684\u65B9\u5F0F\u6765\u8FD0\u7B97\u7684</strong></li><li><strong>\u5F53\u6211\u4EEC\u770B\u8FD0\u7B97\u7ED3\u679C\u7684\u65F6\u5019\uFF0C\u8981\u770B\u4ED6\u7684\u539F\u7801</strong></li></ol><hr><blockquote><p><strong>\u6240\u4EE5\u5F53\u6211\u4EEC\u8BA1\u7B97\u4E00\u4E2A\u4F4D\u8FD0\u7B97\u7684\u65F6\u5019\uFF0C\u8FDB\u884C\u4E86\u4E0B\u9762\u51E0\u6B65\uFF08\u6CE8\u610F\u662F32\u4F4D\uFF09\uFF1A</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">&amp;</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5148\u5F97\u5230 <code>2</code> \u7684\u8865\u7801 ==&gt; <ul><li>\u5148\u5F97\u5230 <code>2</code> \u7684\u539F\u7801 \uFF1A<code>00000000 00000000 00000000 00000010</code></li><li>\u518D\u5F97\u5230 <code>2</code> \u7684\u8865\u7801 \uFF1A<code>00000000 00000000 00000000 00000010</code></li></ul></li><li>\u518D\u5F97\u5230 <code>3</code> \u7684\u8865\u7801 ==&gt; <ul><li>\u5148\u5F97\u5230 <code>3</code> \u7684\u539F\u7801 \uFF1A<code>00000000 00000000 00000000 00000011</code></li><li>\u518D\u5F97\u5230 <code>3</code> \u7684\u8865\u7801 \uFF1A<code>00000000 00000000 00000000 00000011</code></li></ul></li><li>\u6309\u4F4D\u4E0E ==&gt; <ul><li>00000000 00000000 00000000 00000010</li><li>00000000 00000000 00000000 00000011</li><li>00000000 00000000 00000000 00000010 <strong>\uFF08\u8FD0\u7B97\u540E\u7684\u8865\u7801\u8FD8\u9700\u8981\u8F6C\u5316\u4E3A\u539F\u7801 ==&gt; \u7B26\u53F7\u4F4D\u662F0\uFF0C\u8BF4\u660E\u662F\u6B63\u6570\uFF0C\u63A8\u51FA\u539F\u7801 == \u8865\u7801\uFF09</strong></li></ul></li><li>\u7ED3\u679C<code>00000000 00000000 00000000 00000010</code>\u8F6C\u4E3A\u5341\u8FDB\u5236\uFF1A<code>2</code></li></ul></blockquote><h3 id="java\u903B\u8F91\u53F3\u79FB" tabindex="-1"><a class="header-anchor" href="#java\u903B\u8F91\u53F3\u79FB" aria-hidden="true">#</a> java\u903B\u8F91\u53F3\u79FB</h3><p><strong>\u26A1\u4E0A\u9762\u7684\u90FD\u662F\u7B97\u672F\u8FD0\u7B97\u7B26\uFF0C\u4F46\u662Fjava\u4E5F\u662F\u6709\u65E0\u7B26\u53F7\u53F3\u79FB\u7684\uFF0C\u8FD0\u7B97\u89C4\u5219\u662F\uFF1A\u4F4E\u4F4D\u6EA2\u51FA\uFF0C\u9AD8\u4F4D\u88650\uFF09</strong></p><blockquote><p>\u26A0\uFE0F \u7279\u522B\u8BF4\u660E\uFF1AJava\u662F\u6CA1\u6709 <code>&lt;&lt;&lt;</code> \u7B26\u53F7\uFF08\u65E0\u7B26\u53F7\u5DE6\u79FB\uFF09\uFF0C\u53EA\u6709 <code>&gt;&gt;&gt;</code> \u65E0\u7B26\u53F7\u53F3\u79FB</p></blockquote><p><strong>\u6BD4\u8F83\uFF1A</strong></p><ul><li><code>&gt;&gt;</code>\u53F3\u79FB\u8FD0\u7B97\u7B26\uFF0C\u6709\u7B26\u53F7\u3002\u53F3\u8FB9\u8D85\u51FA\u622A\u6389\uFF0C\u5DE6\u8FB9\u8865\u4E0A\u7B26\u53F7\u4F4D</li><li><code>&gt;&gt;&gt;</code>\u53F3\u79FB\u8FD0\u7B97\u7B26\uFF0C\u65E0\u7B26\u53F7\uFF0C\u5DE6\u8FB9\u88650</li></ul><blockquote><p><strong>\u6848\u4F8B\uFF1A</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">byte</span> a<span class="token operator">=</span><span class="token operator">~</span><span class="token number">127</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token operator">&gt;&gt;&gt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7ED3\u679C\u5982\u4E0B\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-128
-32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5206\u6790\uFF1A</strong></p><p>\u9996\u5148,<code>~127</code>\u7684\u4E8C\u8FDB\u5236\u6570\u4E3A<code>10000000</code>,(<code>~127</code>\u662F\u53D6\u53CD\u8FD0\u7B97\uFF09</p><p>\u4F46\u662FJAVA\u5728\u5BF9\u4E0D\u8DB3<code>32</code>\u4F4D\u7684\u6570<code>(byte,char,short)</code>\u8FDB\u884C\u79FB\u4F4D\u8FD0\u7B97\u65F6\u5019,\u90FD\u4F1A\u5148\u8F6C\u6210<code>int(32\u4F4D)</code>\uFF0C\u6240\u4EE5\u6B64\u65F6<code>a</code>\u4E3A<code>11111111111111111111111110000000</code></p><p>\u79FB\u4F4D\u4E4B\u540E,<code>(00)111111111111111111111111100000</code></p><p>\u4F46\u662F\u4F60\u5728\u6B64<code>a=(byte)(a&gt;&gt;&gt;2);</code> \u5F3A\u5236\u8F6C\u6210<code>byte</code>\u578B,\u5C06\u5BF9\u7ED3\u679C\u8FDB\u884C\u622A\u65AD</p><p>\u6B64\u65F6<code>a</code>\u4E3A<code>11100000</code>,\u5C31\u662F<code>32</code>\u4E86</p></blockquote>`,37);function S(V,N){const s=t("ExternalLinkIcon");return c(),p("div",null,[d,r,u,a("blockquote",null,[a("ul",null,[a("li",null,[a("p",null,[k,a("a",m,[v,e(s)]),h,a("a",b,[g,e(s)])])]),a("li",null,[a("p",null,[x,a("a",_,[j,e(s)])])]),f])]),a("p",null,[a("strong",null,[y,a("a",q,[w,e(s)]),$])]),J])}const E=o(i,[["render",S],["__file","bitwise.html.vue"]]);export{E as default};
