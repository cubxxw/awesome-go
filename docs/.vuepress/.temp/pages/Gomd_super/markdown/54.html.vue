<template><div><h1 id="_1-fmt" tabindex="-1"><a class="header-anchor" href="#_1-fmt" aria-hidden="true">#</a> 1. fmt</h1>
<p>fmt包实现了类似C语言printf和scanf的格式化I/O。主要分为向外输出内容和获取输入内容两大部分。</p>
<h3 id="_1-1-1-向外输出" tabindex="-1"><a class="header-anchor" href="#_1-1-1-向外输出" aria-hidden="true">#</a> 1.1.1. 向外输出</h3>
<p>标准库fmt提供了以下几种输出相关函数。</p>
<h4 id="print" tabindex="-1"><a class="header-anchor" href="#print" aria-hidden="true">#</a> Print</h4>
<p>Print系列函数会将内容输出到系统的标准输出，区别在于Print函数直接输出内容，Printf函数支持格式化输出字符串，Println函数会在输出内容的结尾添加一个换行符。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Print</span><span class="token punctuation">(</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Printf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Println</span><span class="token punctuation">(</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举个简单的例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">"在终端打印该信息。"</span><span class="token punctuation">)</span>
    name <span class="token operator">:=</span> <span class="token string">"枯藤"</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"我是：%s\n"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"在终端打印单独一行显示"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的代码输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    在终端打印该信息。我是：枯藤
    在终端打印单独一行显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fprint" tabindex="-1"><a class="header-anchor" href="#fprint" aria-hidden="true">#</a> Fprint</h4>
<p>Fprint系列函数会将内容输出到一个io.Writer接口类型的变量w中，我们通常用这个函数往文件中写入内容。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Fprint</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Fprintf</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Fprintln</span><span class="token punctuation">(</span>w io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 向标准输出写入内容</span>
fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">"向标准输出写入内容"</span><span class="token punctuation">)</span>
fileObj<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">"./xx.txt"</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_APPEND<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"打开文件出错，err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
name <span class="token operator">:=</span> <span class="token string">"枯藤"</span>
<span class="token comment">// 向打开的文件句柄中写入内容</span>
fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>fileObj<span class="token punctuation">,</span> <span class="token string">"往文件中写如信息：%s"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，只要满足io.Writer接口的类型都支持写入。</p>
<h4 id="sprint" tabindex="-1"><a class="header-anchor" href="#sprint" aria-hidden="true">#</a> Sprint</h4>
<p>Sprint系列函数会把传入的数据生成并返回一个字符串。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Sprint</span><span class="token punctuation">(</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token keyword">func</span> <span class="token function">Sprintf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token keyword">func</span> <span class="token function">Sprintln</span><span class="token punctuation">(</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单的示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>s1 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span><span class="token string">"枯藤"</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> <span class="token string">"枯藤"</span>
age <span class="token operator">:=</span> <span class="token number">18</span>
s2 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"name:%s,age:%d"</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
s3 <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintln</span><span class="token punctuation">(</span><span class="token string">"枯藤"</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="errorf" tabindex="-1"><a class="header-anchor" href="#errorf" aria-hidden="true">#</a> Errorf</h4>
<p>Errorf函数根据format参数生成格式化字符串并返回一个包含该字符串的错误。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Errorf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通常使用这种方式来自定义错误类型，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>err <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"这是一个错误"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-2-格式化占位符" tabindex="-1"><a class="header-anchor" href="#_1-1-2-格式化占位符" aria-hidden="true">#</a> 1.1.2. 格式化占位符</h3>
<p><code v-pre>*printf</code>系列函数都支持format格式化参数，在这里我们按照占位符将被替换的变量类型划分，方便查询和记忆。</p>
<h4 id="通用占位符" tabindex="-1"><a class="header-anchor" href="#通用占位符" aria-hidden="true">#</a> 通用占位符</h4>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%v</td>
<td>值的默认格式表示</td>
</tr>
<tr>
<td>%+v</td>
<td>类似%v，但输出结构体时会添加字段名</td>
</tr>
<tr>
<td>%#v</td>
<td>值的Go语法表示</td>
</tr>
<tr>
<td>%T</td>
<td>打印值的类型</td>
</tr>
<tr>
<td>%%</td>
<td>百分号</td>
</tr>
</tbody>
</table>
<p>示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v\n"</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v\n"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
o <span class="token operator">:=</span> <span class="token keyword">struct</span><span class="token punctuation">{</span> name <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">"枯藤"</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v\n"</span><span class="token punctuation">,</span> o<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v\n"</span><span class="token punctuation">,</span> o<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%T\n"</span><span class="token punctuation">,</span> o<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"100%%\n"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>100
false
{枯藤}
struct { name string }{name:"枯藤"}
struct { name string }
100%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="布尔型" tabindex="-1"><a class="header-anchor" href="#布尔型" aria-hidden="true">#</a> 布尔型</h4>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%t</td>
<td>true或false</td>
</tr>
</tbody>
</table>
<h4 id="整型" tabindex="-1"><a class="header-anchor" href="#整型" aria-hidden="true">#</a> 整型</h4>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%b</td>
<td>表示为二进制</td>
</tr>
<tr>
<td>%c</td>
<td>该值对应的unicode码值</td>
</tr>
<tr>
<td>%d</td>
<td>表示为十进制</td>
</tr>
<tr>
<td>%o</td>
<td>表示为八进制</td>
</tr>
<tr>
<td>%x</td>
<td>表示为十六进制，使用a-f</td>
</tr>
<tr>
<td>%X</td>
<td>表示为十六进制，使用A-F</td>
</tr>
<tr>
<td>%U</td>
<td>表示为Unicode格式：U+1234，等价于”U+%04X”</td>
</tr>
<tr>
<td>%q</td>
<td>该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示</td>
</tr>
</tbody>
</table>
<p>示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>n <span class="token operator">:=</span> <span class="token number">65</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%b\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%c\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%d\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%o\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%x\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%X\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1000001
    A
    65
    101
    41
    41
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="浮点数与复数" tabindex="-1"><a class="header-anchor" href="#浮点数与复数" aria-hidden="true">#</a> 浮点数与复数</h4>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%b</td>
<td>无小数部分、二进制指数的科学计数法，如-123456p-78</td>
</tr>
<tr>
<td>%e</td>
<td>科学计数法，如-1234.456e+78</td>
</tr>
<tr>
<td>%E</td>
<td>科学计数法，如-1234.456E+78</td>
</tr>
<tr>
<td>%f</td>
<td>有小数部分但无指数部分，如123.456</td>
</tr>
<tr>
<td>%F</td>
<td>等价于%f</td>
</tr>
<tr>
<td>%g</td>
<td>根据实际情况采用%e或%f格式（以获得更简洁、准确的输出）</td>
</tr>
<tr>
<td>%G</td>
<td>根据实际情况采用%E或%F格式（以获得更简洁、准确的输出）</td>
</tr>
</tbody>
</table>
<p>示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>f <span class="token operator">:=</span> <span class="token number">12.34</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%b\n"</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%e\n"</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%E\n"</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%f\n"</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%g\n"</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%G\n"</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    6946802425218990p-49
    1.234000e+01
    1.234000E+01
    12.340000
    12.34
    12.34
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串和-byte" tabindex="-1"><a class="header-anchor" href="#字符串和-byte" aria-hidden="true">#</a> 字符串和[]byte</h4>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%s</td>
<td>直接输出字符串或者[]byte</td>
</tr>
<tr>
<td>%q</td>
<td>该值对应的双引号括起来的go语法字符串字面值，必要时会采用安全的转义表示</td>
</tr>
<tr>
<td>%x</td>
<td>每个字节用两字符十六进制数表示（使用a-f</td>
</tr>
<tr>
<td>%X</td>
<td>每个字节用两字符十六进制数表示（使用A-F）</td>
</tr>
</tbody>
</table>
<p>示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    s <span class="token operator">:=</span> <span class="token string">"枯藤"</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%q\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%x\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%X\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    枯藤
    "枯藤"
    e69eafe897a4
    E69EAFE897A4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h4>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%p</td>
<td>表示为十六进制，并加上前导的0x</td>
</tr>
</tbody>
</table>
<p>示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>a <span class="token operator">:=</span> <span class="token number">18</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    0xc000054058
    c000054058
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="宽度标识符" tabindex="-1"><a class="header-anchor" href="#宽度标识符" aria-hidden="true">#</a> 宽度标识符</h4>
<p>宽度通过一个紧跟在百分号后面的十进制数指定，如果未指定宽度，则表示值时除必需之外不作填充。精度通过（可选的）宽度后跟点号后跟的十进制数指定。如果未指定精度，会使用默认精度；如果点号后没有跟数字，表示精度为0。举例如下</p>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%f</td>
<td>默认宽度，默认精度</td>
</tr>
<tr>
<td>%9f</td>
<td>宽度9，默认精度</td>
</tr>
<tr>
<td>%.2f</td>
<td>默认宽度，精度2</td>
</tr>
<tr>
<td>%9.2f</td>
<td>宽度9，精度2</td>
</tr>
<tr>
<td>%9.f</td>
<td>宽度9，精度0</td>
</tr>
</tbody>
</table>
<p>示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>n <span class="token operator">:=</span> <span class="token number">88.88</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%f\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%9f\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%.2f\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%9.2f\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%9.f\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    88.880000
    88.880000
    88.88
        88.88
           89
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他falg" tabindex="-1"><a class="header-anchor" href="#其他falg" aria-hidden="true">#</a> 其他falg</h4>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>’+’</td>
<td>总是输出数值的正负号；对%q（%+q）会生成全部是ASCII字符的输出（通过转义）；</td>
</tr>
<tr>
<td>’ ‘</td>
<td>对数值，正数前加空格而负数前加负号；对字符串采用%x或%X时（% x或% X）会给各打印的字节之间加空格</td>
</tr>
<tr>
<td>’-’</td>
<td>在输出右边填充空白而不是默认的左边（即从默认的右对齐切换为左对齐）；</td>
</tr>
<tr>
<td>’#’</td>
<td>八进制数前加0（%#o），十六进制数前加0x（%#x）或0X（%#X），指针去掉前面的0x（%#p）对%q（%#q），对%U（%#U）会输出空格和单引号括起来的go字面值；</td>
</tr>
<tr>
<td>‘0’</td>
<td>使用0而不是空格填充，对于数值类型会把填充的0放在正负号后面；</td>
</tr>
</tbody>
</table>
<p>举个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>s <span class="token operator">:=</span> <span class="token string">"枯藤"</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%5s\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%-5s\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%5.7s\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%-5.7s\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%5.2s\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%05s\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    枯藤
       枯藤
    枯藤
       枯藤
    枯藤
       枯藤
    000枯藤
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-获取输入" tabindex="-1"><a class="header-anchor" href="#_1-1-3-获取输入" aria-hidden="true">#</a> 1.1.3. 获取输入</h3>
<p>Go语言fmt包下有fmt.Scan、fmt.Scanf、fmt.Scanln三个函数，可以在程序运行过程中从标准输入获取用户的输入。</p>
<h4 id="fmt-scan" tabindex="-1"><a class="header-anchor" href="#fmt-scan" aria-hidden="true">#</a> fmt.Scan</h4>
<p>函数定签名如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Scan</span><span class="token punctuation">(</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Scan从标准输入扫描文本，读取由空白符分隔的值保存到传递给本函数的参数中，换行符视为空白符。</li>
<li>本函数返回成功扫描的数据个数和遇到的任何错误。如果读取的数据个数比提供的参数少，会返回一个错误报告原因。</li>
</ul>
<p>具体代码示例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token punctuation">(</span>
        name    <span class="token builtin">string</span>
        age     <span class="token builtin">int</span>
        married <span class="token builtin">bool</span>
    <span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>age<span class="token punctuation">,</span> <span class="token operator">&amp;</span>married<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"扫描结果 name:%s age:%d married:%t \n"</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> married<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的代码编译后在终端执行，在终端依次输入枯藤、18和false使用空格分隔。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ ./scan_demo 
    枯藤 18 false
    扫描结果 name:枯藤 age:18 married:false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fmt.Scan从标准输入中扫描用户输入的数据，将以空白符分隔的数据分别存入指定的参数。</p>
<h4 id="fmt-scanf" tabindex="-1"><a class="header-anchor" href="#fmt-scanf" aria-hidden="true">#</a> fmt.Scanf</h4>
<p>函数签名如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Scanf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Scanf从标准输入扫描文本，根据format参数指定的格式去读取由空白符分隔的值保存到传递给本函数的参数中。</li>
<li>本函数返回成功扫描的数据个数和遇到的任何错误。</li>
</ul>
<p>代码示例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token punctuation">(</span>
        name    <span class="token builtin">string</span>
        age     <span class="token builtin">int</span>
        married <span class="token builtin">bool</span>
    <span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Scanf</span><span class="token punctuation">(</span><span class="token string">"1:%s 2:%d 3:%t"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>age<span class="token punctuation">,</span> <span class="token operator">&amp;</span>married<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"扫描结果 name:%s age:%d married:%t \n"</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> married<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的代码编译后在终端执行，在终端按照指定的格式依次输入枯藤、18和false。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ ./scan_demo 
    1:枯藤 2:18 3:false
    扫描结果 name:枯藤 age:18 married:false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fmt.Scanf不同于fmt.Scan简单的以空格作为输入数据的分隔符，fmt.Scanf为输入数据指定了具体的输入内容格式，只有按照格式输入数据才会被扫描并存入对应变量。</p>
<p>例如，我们还是按照上个示例中以空格分隔的方式输入，fmt.Scanf就不能正确扫描到输入的数据。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ ./scan_demo 
    枯藤 18 false
    扫描结果 name: age:0 married:false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fmt-scanln" tabindex="-1"><a class="header-anchor" href="#fmt-scanln" aria-hidden="true">#</a> fmt.Scanln</h4>
<p>函数签名如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Scanln</span><span class="token punctuation">(</span>a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Scanln类似Scan，它在遇到换行时才停止扫描。最后一个数据后面必须有换行或者到达结束位置。</li>
<li>本函数返回成功扫描的数据个数和遇到的任何错误。</li>
</ul>
<p>具体代码示例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> <span class="token punctuation">(</span>
            name    <span class="token builtin">string</span>
            age     <span class="token builtin">int</span>
            married <span class="token builtin">bool</span>
        <span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>age<span class="token punctuation">,</span> <span class="token operator">&amp;</span>married<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"扫描结果 name:%s age:%d married:%t \n"</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> married<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的代码编译后在终端执行，在终端依次输入枯藤、18和false使用空格分隔。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ ./scan_demo 
    枯藤 18 false
    扫描结果 name:枯藤 age:18 married:false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fmt.Scanln遇到回车就结束扫描了，这个比较常用。</p>
<h4 id="bufio-newreader" tabindex="-1"><a class="header-anchor" href="#bufio-newreader" aria-hidden="true">#</a> bufio.NewReader</h4>
<p>有时候我们想完整获取输入的内容，而输入的内容可能包含空格，这种情况下可以使用bufio包来实现。示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">bufioDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span> <span class="token comment">// 从标准输入生成读对象</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">"请输入内容："</span><span class="token punctuation">)</span>
    text<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">)</span> <span class="token comment">// 读到换行</span>
    text <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">TrimSpace</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v\n"</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fscan系列" tabindex="-1"><a class="header-anchor" href="#fscan系列" aria-hidden="true">#</a> Fscan系列</h4>
<p>这几个函数功能分别类似于fmt.Scan、fmt.Scanf、fmt.Scanln三个函数，只不过它们不是从标准输入中读取数据而是从io.Reader中读取数据。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Fscan</span><span class="token punctuation">(</span>r io<span class="token punctuation">.</span>Reader<span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Fscanln</span><span class="token punctuation">(</span>r io<span class="token punctuation">.</span>Reader<span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Fscanf</span><span class="token punctuation">(</span>r io<span class="token punctuation">.</span>Reader<span class="token punctuation">,</span> format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sscan系列" tabindex="-1"><a class="header-anchor" href="#sscan系列" aria-hidden="true">#</a> Sscan系列</h4>
<p>这几个函数功能分别类似于fmt.Scan、fmt.Scanf、fmt.Scanln三个函数，只不过它们不是从标准输入中读取数据而是从指定字符串中读取数据。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Sscan</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Sscanln</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">Sscanf</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">,</span> format <span class="token builtin">string</span><span class="token punctuation">,</span> a <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '53.md' style='float:left'>⬆️上一节🔗</a><a href = '55.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


