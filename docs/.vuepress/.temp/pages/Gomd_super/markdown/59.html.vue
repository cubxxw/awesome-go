<template><div><h1 id="_1-strconv" tabindex="-1"><a class="header-anchor" href="#_1-strconv" aria-hidden="true">#</a> 1. Strconv</h1>
<h2 id="_1-1-strconv包" tabindex="-1"><a class="header-anchor" href="#_1-1-strconv包" aria-hidden="true">#</a> 1.1. strconv包</h2>
<p>strconv包实现了基本数据类型与其字符串表示的转换，主要有以下常用函数： Atoi()、Itia()、parse系列、format系列、append系列。</p>
<p>更多函数请查看<a href="https://golang.org/pkg/strconv/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>。</p>
<h3 id="_1-1-1-string与int类型转换" tabindex="-1"><a class="header-anchor" href="#_1-1-1-string与int类型转换" aria-hidden="true">#</a> 1.1.1. string与int类型转换</h3>
<p>这一组函数是我们平时编程中用的最多的。</p>
<h3 id="_1-1-2-atoi" tabindex="-1"><a class="header-anchor" href="#_1-1-2-atoi" aria-hidden="true">#</a> 1.1.2. Atoi()</h3>
<p>Atoi()函数用于将字符串类型的整数转换为int类型，函数签名如下。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Atoi</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果传入的字符串参数无法转换为int类型，就会返回错误。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>s1 <span class="token operator">:=</span> <span class="token string">"100"</span>
i1<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"can't convert to int"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type:%T value:%#v\n"</span><span class="token punctuation">,</span> i1<span class="token punctuation">,</span> i1<span class="token punctuation">)</span> <span class="token comment">//type:int value:100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-itoa" tabindex="-1"><a class="header-anchor" href="#_1-1-3-itoa" aria-hidden="true">#</a> 1.1.3. Itoa()</h3>
<p>Itoa()函数用于将int类型数据转换为对应的字符串表示，具体的函数签名如下。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Itoa</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>i2 <span class="token operator">:=</span> <span class="token number">200</span>
s2 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>i2<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type:%T value:%#v\n"</span><span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token comment">//type:string value:"200"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-a的典故" tabindex="-1"><a class="header-anchor" href="#_1-1-4-a的典故" aria-hidden="true">#</a> 1.1.4. a的典故</h3>
<p>【扩展阅读】这是C语言遗留下的典故。C语言中没有string类型而是用字符数组(array)表示字符串，所以Itoa对很多C系的程序员很好理解。</p>
<h3 id="_1-1-5-parse系列函数" tabindex="-1"><a class="header-anchor" href="#_1-1-5-parse系列函数" aria-hidden="true">#</a> 1.1.5. Parse系列函数</h3>
<p>Parse类函数用于转换字符串为给定类型的值：ParseBool()、ParseFloat()、ParseInt()、ParseUint()。</p>
<h3 id="_1-1-6-parsebool" tabindex="-1"><a class="header-anchor" href="#_1-1-6-parsebool" aria-hidden="true">#</a> 1.1.6. ParseBool()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseBool</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>value <span class="token builtin">bool</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回字符串表示的bool值。它接受1、0、t、f、T、F、true、false、True、False、TRUE、FALSE；否则返回错误。</p>
<h3 id="_1-1-7-parseint" tabindex="-1"><a class="header-anchor" href="#_1-1-7-parseint" aria-hidden="true">#</a> 1.1.7. ParseInt()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseInt</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> base <span class="token builtin">int</span><span class="token punctuation">,</span> bitSize <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回字符串表示的整数值，接受正负号。</p>
<p>base指定进制（2到36），如果base为0，则会从字符串前置判断，”0x”是16进制，”0”是8进制，否则是10进制；</p>
<p>bitSize指定结果必须能无溢出赋值的整数类型，0、8、16、32、64 分别代表 int、int8、int16、int32、int64；</p>
<p>返回的err是<code v-pre>*NumErr</code>类型的，如果语法有误，err.Error = ErrSyntax；如果结果超出类型范围err.Error = ErrRange。</p>
<h3 id="_1-1-8-parseunit" tabindex="-1"><a class="header-anchor" href="#_1-1-8-parseunit" aria-hidden="true">#</a> 1.1.8. ParseUnit()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseUint</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> base <span class="token builtin">int</span><span class="token punctuation">,</span> bitSize <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">uint64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ParseUint类似ParseInt但不接受正负号，用于无符号整型。</p>
<h3 id="_1-1-9-parsefloat" tabindex="-1"><a class="header-anchor" href="#_1-1-9-parsefloat" aria-hidden="true">#</a> 1.1.9. ParseFloat()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseFloat</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> bitSize <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>f <span class="token builtin">float64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解析一个表示浮点数的字符串并返回其值。</p>
<p>如果s合乎语法规则，函数会返回最为接近s表示值的一个浮点数（使用IEEE754规范舍入）。</p>
<p>bitSize指定了期望的接收类型，32是float32（返回值可以不改变精确值的赋值给float32），64是float64；</p>
<p>返回值err是<code v-pre>*NumErr</code>类型的，语法有误的，err.Error=ErrSyntax；结果超出表示范围的，返回值f为±Inf，err.Error= ErrRange。</p>
<h3 id="_1-1-10-代码示例" tabindex="-1"><a class="header-anchor" href="#_1-1-10-代码示例" aria-hidden="true">#</a> 1.1.10. 代码示例</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>b<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseBool</span><span class="token punctuation">(</span><span class="token string">"true"</span><span class="token punctuation">)</span>
f<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span><span class="token string">"3.1415"</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
i<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span><span class="token string">"-2"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
u<span class="token punctuation">,</span> err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseUint</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些函数都有两个返回值，第一个返回值是转换后的值，第二个返回值为转化失败的错误信息。</p>
<h3 id="_1-1-11-format系列函数" tabindex="-1"><a class="header-anchor" href="#_1-1-11-format系列函数" aria-hidden="true">#</a> 1.1.11. Format系列函数</h3>
<p>Format系列函数实现了将给定类型数据格式化为string类型数据的功能。</p>
<h3 id="_1-1-12-formatbool" tabindex="-1"><a class="header-anchor" href="#_1-1-12-formatbool" aria-hidden="true">#</a> 1.1.12. FormatBool()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FormatBool</span><span class="token punctuation">(</span>b <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据b的值返回”true”或”false”。</p>
<h3 id="_1-1-13-formatint" tabindex="-1"><a class="header-anchor" href="#_1-1-13-formatint" aria-hidden="true">#</a> 1.1.13. FormatInt()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FormatInt</span><span class="token punctuation">(</span>i <span class="token builtin">int64</span><span class="token punctuation">,</span> base <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回i的base进制的字符串表示。base 必须在2到36之间，结果中会使用小写字母’a’到’z’表示大于10的数字。</p>
<h3 id="_1-1-14-formatuint" tabindex="-1"><a class="header-anchor" href="#_1-1-14-formatuint" aria-hidden="true">#</a> 1.1.14. FormatUint()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FormatUint</span><span class="token punctuation">(</span>i <span class="token builtin">uint64</span><span class="token punctuation">,</span> base <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>是FormatInt的无符号整数版本。</p>
<h3 id="_1-1-15-formatfloat" tabindex="-1"><a class="header-anchor" href="#_1-1-15-formatfloat" aria-hidden="true">#</a> 1.1.15. FormatFloat()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FormatFloat</span><span class="token punctuation">(</span>f <span class="token builtin">float64</span><span class="token punctuation">,</span> fmt <span class="token builtin">byte</span><span class="token punctuation">,</span> prec<span class="token punctuation">,</span> bitSize <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>函数将浮点数表示为字符串并返回。</p>
<p>bitSize表示f的来源类型（32：float32、64：float64），会据此进行舍入。</p>
<p>fmt表示格式：’f’（-ddd.dddd）、’b’（-ddddp±ddd，指数为二进制）、’e’（-d.dddde±dd，十进制指数）、’E’（-d.ddddE±dd，十进制指数）、’g’（指数很大时用’e’格式，否则’f’格式）、’G’（指数很大时用’E’格式，否则’f’格式）。</p>
<p>prec控制精度（排除指数部分）：对’f’、’e’、’E’，它表示小数点后的数字个数；对’g’、’G’，它控制总的数字个数。如果prec 为-1，则代表使用最少数量的、但又必需的数字来表示f。</p>
<h3 id="_1-1-16-代码示例" tabindex="-1"><a class="header-anchor" href="#_1-1-16-代码示例" aria-hidden="true">#</a> 1.1.16. 代码示例</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>s1 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatBool</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
s2 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatFloat</span><span class="token punctuation">(</span><span class="token number">3.1415</span><span class="token punctuation">,</span> <span class="token char">'E'</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
s3 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatInt</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
s4 <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">FormatUint</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-17-其他" tabindex="-1"><a class="header-anchor" href="#_1-1-17-其他" aria-hidden="true">#</a> 1.1.17. 其他</h3>
<h3 id="_1-1-18-isprint" tabindex="-1"><a class="header-anchor" href="#_1-1-18-isprint" aria-hidden="true">#</a> 1.1.18. isPrint()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">IsPrint</span><span class="token punctuation">(</span>r <span class="token builtin">rune</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回一个字符是否是可打印的，和unicode.IsPrint一样，r必须是：字母（广义）、数字、标点、符号、ASCII空格。</p>
<h3 id="_1-1-19-canbackquote" tabindex="-1"><a class="header-anchor" href="#_1-1-19-canbackquote" aria-hidden="true">#</a> 1.1.19. CanBackquote()</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">CanBackquote</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回字符串s是否可以不被修改的表示为一个单行的、没有空格和tab之外控制字符的反引号字符串。</p>
<h3 id="_1-1-20-其他" tabindex="-1"><a class="header-anchor" href="#_1-1-20-其他" aria-hidden="true">#</a> 1.1.20. 其他</h3>
<p>除上文列出的函数外，strconv包中还有Append系列、Quote系列等函数。具体用法可查看<a href="https://golang.org/pkg/strconv/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '58.md' style='float:left'>⬆️上一节🔗</a><a href = '60.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


