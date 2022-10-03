import{_ as p,r as e,o as i,c,a as n,b as s,w as l,d as a,e as r}from"./app.2cadb53f.js";const u={},d=n("h1",{id:"_1-strconv",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-strconv","aria-hidden":"true"},"#"),a(" 1. Strconv")],-1),k=n("h2",{id:"_1-1-strconv\u5305",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-strconv\u5305","aria-hidden":"true"},"#"),a(" 1.1. strconv\u5305")],-1),h=n("p",null,"strconv\u5305\u5B9E\u73B0\u4E86\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E0E\u5176\u5B57\u7B26\u4E32\u8868\u793A\u7684\u8F6C\u6362\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u5E38\u7528\u51FD\u6570\uFF1A Atoi()\u3001Itia()\u3001parse\u7CFB\u5217\u3001format\u7CFB\u5217\u3001append\u7CFB\u5217\u3002",-1),b=a("\u66F4\u591A\u51FD\u6570\u8BF7\u67E5\u770B"),v={href:"https://golang.org/pkg/strconv/",target:"_blank",rel:"noopener noreferrer"},g=a("\u5B98\u65B9\u6587\u6863"),m=a("\u3002"),f=r(`<h3 id="_1-1-1-string\u4E0Eint\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_1-1-1-string\u4E0Eint\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 1.1.1. string\u4E0Eint\u7C7B\u578B\u8F6C\u6362</h3><p>\u8FD9\u4E00\u7EC4\u51FD\u6570\u662F\u6211\u4EEC\u5E73\u65F6\u7F16\u7A0B\u4E2D\u7528\u7684\u6700\u591A\u7684\u3002</p><h3 id="_1-1-2-atoi" tabindex="-1"><a class="header-anchor" href="#_1-1-2-atoi" aria-hidden="true">#</a> 1.1.2. Atoi()</h3><p>Atoi()\u51FD\u6570\u7528\u4E8E\u5C06\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6574\u6570\u8F6C\u6362\u4E3Aint\u7C7B\u578B\uFF0C\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Atoi</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u53C2\u6570\u65E0\u6CD5\u8F6C\u6362\u4E3Aint\u7C7B\u578B\uFF0C\u5C31\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>s1 <span class="token operator">:=</span> <span class="token string">&quot;100&quot;</span>
i1<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;can&#39;t convert to int&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type:%T value:%#v\\n&quot;</span><span class="token punctuation">,</span> i1<span class="token punctuation">,</span> i1<span class="token punctuation">)</span> <span class="token comment">//type:int value:100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-itoa" tabindex="-1"><a class="header-anchor" href="#_1-1-3-itoa" aria-hidden="true">#</a> 1.1.3. Itoa()</h3><p>Itoa()\u51FD\u6570\u7528\u4E8E\u5C06int\u7C7B\u578B\u6570\u636E\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u5B57\u7B26\u4E32\u8868\u793A\uFF0C\u5177\u4F53\u7684\u51FD\u6570\u7B7E\u540D\u5982\u4E0B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Itoa</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>i2 <span class="token operator">:=</span> <span class="token number">200</span>
s2 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i2<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type:%T value:%#v\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token comment">//type:string value:&quot;200&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-a\u7684\u5178\u6545" tabindex="-1"><a class="header-anchor" href="#_1-1-4-a\u7684\u5178\u6545" aria-hidden="true">#</a> 1.1.4. a\u7684\u5178\u6545</h3><p>\u3010\u6269\u5C55\u9605\u8BFB\u3011\u8FD9\u662FC\u8BED\u8A00\u9057\u7559\u4E0B\u7684\u5178\u6545\u3002C\u8BED\u8A00\u4E2D\u6CA1\u6709string\u7C7B\u578B\u800C\u662F\u7528\u5B57\u7B26\u6570\u7EC4(array)\u8868\u793A\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5Itoa\u5BF9\u5F88\u591AC\u7CFB\u7684\u7A0B\u5E8F\u5458\u5F88\u597D\u7406\u89E3\u3002</p><h3 id="_1-1-5-parse\u7CFB\u5217\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-5-parse\u7CFB\u5217\u51FD\u6570" aria-hidden="true">#</a> 1.1.5. Parse\u7CFB\u5217\u51FD\u6570</h3><p>Parse\u7C7B\u51FD\u6570\u7528\u4E8E\u8F6C\u6362\u5B57\u7B26\u4E32\u4E3A\u7ED9\u5B9A\u7C7B\u578B\u7684\u503C\uFF1AParseBool()\u3001ParseFloat()\u3001ParseInt()\u3001ParseUint()\u3002</p><h3 id="_1-1-6-parsebool" tabindex="-1"><a class="header-anchor" href="#_1-1-6-parsebool" aria-hidden="true">#</a> 1.1.6. ParseBool()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseBool</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>value <span class="token builtin">bool</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u5B57\u7B26\u4E32\u8868\u793A\u7684bool\u503C\u3002\u5B83\u63A5\u53D71\u30010\u3001t\u3001f\u3001T\u3001F\u3001true\u3001false\u3001True\u3001False\u3001TRUE\u3001FALSE\uFF1B\u5426\u5219\u8FD4\u56DE\u9519\u8BEF\u3002</p><h3 id="_1-1-7-parseint" tabindex="-1"><a class="header-anchor" href="#_1-1-7-parseint" aria-hidden="true">#</a> 1.1.7. ParseInt()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseInt</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> base <span class="token builtin">int</span><span class="token punctuation">,</span> bitSize <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u5B57\u7B26\u4E32\u8868\u793A\u7684\u6574\u6570\u503C\uFF0C\u63A5\u53D7\u6B63\u8D1F\u53F7\u3002</p><p>base\u6307\u5B9A\u8FDB\u5236\uFF082\u523036\uFF09\uFF0C\u5982\u679Cbase\u4E3A0\uFF0C\u5219\u4F1A\u4ECE\u5B57\u7B26\u4E32\u524D\u7F6E\u5224\u65AD\uFF0C\u201D0x\u201D\u662F16\u8FDB\u5236\uFF0C\u201D0\u201D\u662F8\u8FDB\u5236\uFF0C\u5426\u5219\u662F10\u8FDB\u5236\uFF1B</p><p>bitSize\u6307\u5B9A\u7ED3\u679C\u5FC5\u987B\u80FD\u65E0\u6EA2\u51FA\u8D4B\u503C\u7684\u6574\u6570\u7C7B\u578B\uFF0C0\u30018\u300116\u300132\u300164 \u5206\u522B\u4EE3\u8868 int\u3001int8\u3001int16\u3001int32\u3001int64\uFF1B</p><p>\u8FD4\u56DE\u7684err\u662F<code>*NumErr</code>\u7C7B\u578B\u7684\uFF0C\u5982\u679C\u8BED\u6CD5\u6709\u8BEF\uFF0Cerr.Error = ErrSyntax\uFF1B\u5982\u679C\u7ED3\u679C\u8D85\u51FA\u7C7B\u578B\u8303\u56F4err.Error = ErrRange\u3002</p><h3 id="_1-1-8-parseunit" tabindex="-1"><a class="header-anchor" href="#_1-1-8-parseunit" aria-hidden="true">#</a> 1.1.8. ParseUnit()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseUint</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> base <span class="token builtin">int</span><span class="token punctuation">,</span> bitSize <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">uint64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ParseUint\u7C7B\u4F3CParseInt\u4F46\u4E0D\u63A5\u53D7\u6B63\u8D1F\u53F7\uFF0C\u7528\u4E8E\u65E0\u7B26\u53F7\u6574\u578B\u3002</p><h3 id="_1-1-9-parsefloat" tabindex="-1"><a class="header-anchor" href="#_1-1-9-parsefloat" aria-hidden="true">#</a> 1.1.9. ParseFloat()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseFloat</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> bitSize <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>f <span class="token builtin">float64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u89E3\u6790\u4E00\u4E2A\u8868\u793A\u6D6E\u70B9\u6570\u7684\u5B57\u7B26\u4E32\u5E76\u8FD4\u56DE\u5176\u503C\u3002</p><p>\u5982\u679Cs\u5408\u4E4E\u8BED\u6CD5\u89C4\u5219\uFF0C\u51FD\u6570\u4F1A\u8FD4\u56DE\u6700\u4E3A\u63A5\u8FD1s\u8868\u793A\u503C\u7684\u4E00\u4E2A\u6D6E\u70B9\u6570\uFF08\u4F7F\u7528IEEE754\u89C4\u8303\u820D\u5165\uFF09\u3002</p><p>bitSize\u6307\u5B9A\u4E86\u671F\u671B\u7684\u63A5\u6536\u7C7B\u578B\uFF0C32\u662Ffloat32\uFF08\u8FD4\u56DE\u503C\u53EF\u4EE5\u4E0D\u6539\u53D8\u7CBE\u786E\u503C\u7684\u8D4B\u503C\u7ED9float32\uFF09\uFF0C64\u662Ffloat64\uFF1B</p><p>\u8FD4\u56DE\u503Cerr\u662F<code>*NumErr</code>\u7C7B\u578B\u7684\uFF0C\u8BED\u6CD5\u6709\u8BEF\u7684\uFF0Cerr.Error=ErrSyntax\uFF1B\u7ED3\u679C\u8D85\u51FA\u8868\u793A\u8303\u56F4\u7684\uFF0C\u8FD4\u56DE\u503Cf\u4E3A\xB1Inf\uFF0Cerr.Error= ErrRange\u3002</p><h3 id="_1-1-10-\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-10-\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> 1.1.10. \u4EE3\u7801\u793A\u4F8B</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>b<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseBool</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>
f<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span><span class="token string">&quot;3.1415&quot;</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
i<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span><span class="token string">&quot;-2&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
u<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseUint</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u51FD\u6570\u90FD\u6709\u4E24\u4E2A\u8FD4\u56DE\u503C\uFF0C\u7B2C\u4E00\u4E2A\u8FD4\u56DE\u503C\u662F\u8F6C\u6362\u540E\u7684\u503C\uFF0C\u7B2C\u4E8C\u4E2A\u8FD4\u56DE\u503C\u4E3A\u8F6C\u5316\u5931\u8D25\u7684\u9519\u8BEF\u4FE1\u606F\u3002</p><h3 id="_1-1-11-format\u7CFB\u5217\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-11-format\u7CFB\u5217\u51FD\u6570" aria-hidden="true">#</a> 1.1.11. Format\u7CFB\u5217\u51FD\u6570</h3><p>Format\u7CFB\u5217\u51FD\u6570\u5B9E\u73B0\u4E86\u5C06\u7ED9\u5B9A\u7C7B\u578B\u6570\u636E\u683C\u5F0F\u5316\u4E3Astring\u7C7B\u578B\u6570\u636E\u7684\u529F\u80FD\u3002</p><h3 id="_1-1-12-formatbool" tabindex="-1"><a class="header-anchor" href="#_1-1-12-formatbool" aria-hidden="true">#</a> 1.1.12. FormatBool()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FormatBool</span><span class="token punctuation">(</span>b <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6839\u636Eb\u7684\u503C\u8FD4\u56DE\u201Dtrue\u201D\u6216\u201Dfalse\u201D\u3002</p><h3 id="_1-1-13-formatint" tabindex="-1"><a class="header-anchor" href="#_1-1-13-formatint" aria-hidden="true">#</a> 1.1.13. FormatInt()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FormatInt</span><span class="token punctuation">(</span>i <span class="token builtin">int64</span><span class="token punctuation">,</span> base <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DEi\u7684base\u8FDB\u5236\u7684\u5B57\u7B26\u4E32\u8868\u793A\u3002base \u5FC5\u987B\u57282\u523036\u4E4B\u95F4\uFF0C\u7ED3\u679C\u4E2D\u4F1A\u4F7F\u7528\u5C0F\u5199\u5B57\u6BCD\u2019a\u2019\u5230\u2019z\u2019\u8868\u793A\u5927\u4E8E10\u7684\u6570\u5B57\u3002</p><h3 id="_1-1-14-formatuint" tabindex="-1"><a class="header-anchor" href="#_1-1-14-formatuint" aria-hidden="true">#</a> 1.1.14. FormatUint()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FormatUint</span><span class="token punctuation">(</span>i <span class="token builtin">uint64</span><span class="token punctuation">,</span> base <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u662FFormatInt\u7684\u65E0\u7B26\u53F7\u6574\u6570\u7248\u672C\u3002</p><h3 id="_1-1-15-formatfloat" tabindex="-1"><a class="header-anchor" href="#_1-1-15-formatfloat" aria-hidden="true">#</a> 1.1.15. FormatFloat()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FormatFloat</span><span class="token punctuation">(</span>f <span class="token builtin">float64</span><span class="token punctuation">,</span> fmt <span class="token builtin">byte</span><span class="token punctuation">,</span> prec<span class="token punctuation">,</span> bitSize <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u51FD\u6570\u5C06\u6D6E\u70B9\u6570\u8868\u793A\u4E3A\u5B57\u7B26\u4E32\u5E76\u8FD4\u56DE\u3002</p><p>bitSize\u8868\u793Af\u7684\u6765\u6E90\u7C7B\u578B\uFF0832\uFF1Afloat32\u300164\uFF1Afloat64\uFF09\uFF0C\u4F1A\u636E\u6B64\u8FDB\u884C\u820D\u5165\u3002</p><p>fmt\u8868\u793A\u683C\u5F0F\uFF1A\u2019f\u2019\uFF08-ddd.dddd\uFF09\u3001\u2019b\u2019\uFF08-ddddp\xB1ddd\uFF0C\u6307\u6570\u4E3A\u4E8C\u8FDB\u5236\uFF09\u3001\u2019e\u2019\uFF08-d.dddde\xB1dd\uFF0C\u5341\u8FDB\u5236\u6307\u6570\uFF09\u3001\u2019E\u2019\uFF08-d.ddddE\xB1dd\uFF0C\u5341\u8FDB\u5236\u6307\u6570\uFF09\u3001\u2019g\u2019\uFF08\u6307\u6570\u5F88\u5927\u65F6\u7528\u2019e\u2019\u683C\u5F0F\uFF0C\u5426\u5219\u2019f\u2019\u683C\u5F0F\uFF09\u3001\u2019G\u2019\uFF08\u6307\u6570\u5F88\u5927\u65F6\u7528\u2019E\u2019\u683C\u5F0F\uFF0C\u5426\u5219\u2019f\u2019\u683C\u5F0F\uFF09\u3002</p><p>prec\u63A7\u5236\u7CBE\u5EA6\uFF08\u6392\u9664\u6307\u6570\u90E8\u5206\uFF09\uFF1A\u5BF9\u2019f\u2019\u3001\u2019e\u2019\u3001\u2019E\u2019\uFF0C\u5B83\u8868\u793A\u5C0F\u6570\u70B9\u540E\u7684\u6570\u5B57\u4E2A\u6570\uFF1B\u5BF9\u2019g\u2019\u3001\u2019G\u2019\uFF0C\u5B83\u63A7\u5236\u603B\u7684\u6570\u5B57\u4E2A\u6570\u3002\u5982\u679Cprec \u4E3A-1\uFF0C\u5219\u4EE3\u8868\u4F7F\u7528\u6700\u5C11\u6570\u91CF\u7684\u3001\u4F46\u53C8\u5FC5\u9700\u7684\u6570\u5B57\u6765\u8868\u793Af\u3002</p><h3 id="_1-1-16-\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-16-\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> 1.1.16. \u4EE3\u7801\u793A\u4F8B</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>s1 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatBool</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
s2 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatFloat</span><span class="token punctuation">(</span><span class="token number">3.1415</span><span class="token punctuation">,</span> <span class="token char">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
s3 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatInt</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
s4 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatUint</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-17-\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_1-1-17-\u5176\u4ED6" aria-hidden="true">#</a> 1.1.17. \u5176\u4ED6</h3><h3 id="_1-1-18-isprint" tabindex="-1"><a class="header-anchor" href="#_1-1-18-isprint" aria-hidden="true">#</a> 1.1.18. isPrint()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">IsPrint</span><span class="token punctuation">(</span>r <span class="token builtin">rune</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u662F\u5426\u662F\u53EF\u6253\u5370\u7684\uFF0C\u548Cunicode.IsPrint\u4E00\u6837\uFF0Cr\u5FC5\u987B\u662F\uFF1A\u5B57\u6BCD\uFF08\u5E7F\u4E49\uFF09\u3001\u6570\u5B57\u3001\u6807\u70B9\u3001\u7B26\u53F7\u3001ASCII\u7A7A\u683C\u3002</p><h3 id="_1-1-19-canbackquote" tabindex="-1"><a class="header-anchor" href="#_1-1-19-canbackquote" aria-hidden="true">#</a> 1.1.19. CanBackquote()</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">CanBackquote</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u5B57\u7B26\u4E32s\u662F\u5426\u53EF\u4EE5\u4E0D\u88AB\u4FEE\u6539\u7684\u8868\u793A\u4E3A\u4E00\u4E2A\u5355\u884C\u7684\u3001\u6CA1\u6709\u7A7A\u683C\u548Ctab\u4E4B\u5916\u63A7\u5236\u5B57\u7B26\u7684\u53CD\u5F15\u53F7\u5B57\u7B26\u4E32\u3002</p><h3 id="_1-1-20-\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_1-1-20-\u5176\u4ED6" aria-hidden="true">#</a> 1.1.20. \u5176\u4ED6</h3>`,64),_=a("\u9664\u4E0A\u6587\u5217\u51FA\u7684\u51FD\u6570\u5916\uFF0Cstrconv\u5305\u4E2D\u8FD8\u6709Append\u7CFB\u5217\u3001Quote\u7CFB\u5217\u7B49\u51FD\u6570\u3002\u5177\u4F53\u7528\u6CD5\u53EF\u67E5\u770B"),x={href:"https://golang.org/pkg/strconv/",target:"_blank",rel:"noopener noreferrer"},E=a("\u5B98\u65B9\u6587\u6863"),F=a("\u3002"),P=n("h2",{id:"end-\u94FE\u63A5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#end-\u94FE\u63A5","aria-hidden":"true"},"#"),a(" END \u94FE\u63A5")],-1),y=n("ul",null,[n("li",null,[n("div",null,[n("a",{href:"58.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}"),n("a",{href:"60.md",style:{float:"right"}},"\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")])])],-1),I=a("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),q={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),C=a(")"),S=a("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),B={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},A=a("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function z(U,N){const t=e("ExternalLinkIcon"),o=e("RouterLink");return i(),c("div",null,[d,k,h,n("p",null,[b,n("a",v,[g,s(t)]),m]),f,n("p",null,[_,n("a",x,[E,s(t)]),F]),P,y,n("ul",null,[n("li",null,[n("p",null,[s(o,{to:"/Gomd_super/"},{default:l(()=>[I]),_:1})])]),n("li",null,[n("p",null,[n("a",q,[w,s(t)]),C])]),n("li",null,[n("p",null,[S,n("a",B,[A,s(t)])])])])])}const L=p(u,[["render",z],["__file","59.html.vue"]]);export{L as default};
