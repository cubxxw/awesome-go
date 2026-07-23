<template><div><h1 id="_1-template" tabindex="-1"><a class="header-anchor" href="#_1-template" aria-hidden="true">#</a> 1. Template</h1>
<p>html/template包实现了数据驱动的模板，用于生成可对抗代码注入的安全HTML输出。它提供了和text/template包相同的接口，Go语言中输出HTML的场景都应使用text/template包。</p>
<h2 id="_1-1-模板" tabindex="-1"><a class="header-anchor" href="#_1-1-模板" aria-hidden="true">#</a> 1.1. 模板</h2>
<p>在基于MVC的Web架构中，我们通常需要在后端渲染一些数据到HTML文件中，从而实现动态的网页效果。</p>
<h3 id="_1-1-1-模板示例" tabindex="-1"><a class="header-anchor" href="#_1-1-1-模板示例" aria-hidden="true">#</a> 1.1.1. 模板示例</h3>
<p>通过将模板应用于一个数据结构（即该数据结构作为模板的参数）来执行，来获得输出。模板中的注释引用数据接口的元素（一般如结构体的字段或者字典的键）来控制执行过程和获取需要呈现的值。模板执行时会遍历结构并将指针表示为’.‘（称之为”dot”）指向运行过程中数据结构的当前位置的值。</p>
<p>用作模板的输入文本必须是utf-8编码的文本。”Action”—数据运算和控制单位—由”“界定；在Action之外的所有文本都不做修改的拷贝到输出中。Action内部不能有换行，但注释可以有换行。</p>
<p>HTML文件代码如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Hello {{.}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的HTTP server端代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// main.go</span>

<span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 解析指定文件生成模板对象</span>
    tmpl<span class="token punctuation">,</span> err <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">ParseFiles</span><span class="token punctuation">(</span><span class="token string">"./hello.html"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"create template failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 利用给定数据渲染模板，并将结果写入w</span>
    tmpl<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">"5lmh.com"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> sayHello<span class="token punctuation">)</span>
    err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">":9090"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"HTTP server failed,err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-模板语法" tabindex="-1"><a class="header-anchor" href="#_1-1-2-模板语法" aria-hidden="true">#</a> 1.1.2. 模板语法</h3>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <code v-pre>{{.}}</code></h4>
<p>模板语法都包含在<code v-pre>{{和}}</code>中间，其中<code v-pre>{{.}}</code>中的点表示当前对象。</p>
<p>当我们传入一个结构体对象时，我们可以根据<code v-pre>.</code>来访问结构体的对应字段。例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// main.go</span>

<span class="token keyword">type</span> UserInfo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span>
    Gender <span class="token builtin">string</span>
    Age    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 解析指定文件生成模板对象</span>
    tmpl<span class="token punctuation">,</span> err <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">ParseFiles</span><span class="token punctuation">(</span><span class="token string">"./hello.html"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"create template failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 利用给定数据渲染模板，并将结果写入w</span>
    user <span class="token operator">:=</span> UserInfo<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span>   <span class="token string">"枯藤"</span><span class="token punctuation">,</span>
        Gender<span class="token punctuation">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span>
        Age<span class="token punctuation">:</span>    <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    tmpl<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML文件代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"X-UA-Compatible"</span> content<span class="token operator">=</span><span class="token string">"ie=edge"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>Hello <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">.</span>Name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>性别：<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">.</span>Gender<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>年龄：<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">.</span>Name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，当我们传入的变量是map时，也可以在模板文件中通过.根据key来取值。</p>
<h4 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    {{/* a comment */}}
    注释，执行时会忽略。可以多行。注释不能嵌套，并且必须紧贴分界符始止。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline" aria-hidden="true">#</a> pipeline</h4>
<p>pipeline是指产生数据的操作。比如<code v-pre>{{.}}</code>、<code v-pre>{{.Name}}</code>等。Go的模板语法中支持使用管道符号|链接多个命令，用法和unix下的管道类似：|前面的命令会将运算结果(或返回值)传递给后一个命令的最后一个位置。</p>
<p>注意 : 并不是只有使用了|才是pipeline。Go的模板语法中，pipeline的概念是传递数据，只要能产生数据的，都是pipeline。</p>
<h4 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h4>
<p>Action里可以初始化一个变量来捕获管道的执行结果。初始化语法如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $variable := pipeline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中$variable是变量的名字。声明变量的action不会产生任何输出。</p>
<h3 id="_1-1-3-条件判断" tabindex="-1"><a class="header-anchor" href="#_1-1-3-条件判断" aria-hidden="true">#</a> 1.1.3. 条件判断</h3>
<p>Go模板语法中的条件判断有以下几种:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">if</span> pipeline<span class="token punctuation">}</span><span class="token punctuation">}</span> T1 <span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">if</span> pipeline<span class="token punctuation">}</span><span class="token punctuation">}</span> T1 <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">else</span><span class="token punctuation">}</span><span class="token punctuation">}</span> T0 <span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">if</span> pipeline<span class="token punctuation">}</span><span class="token punctuation">}</span> T1 <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">else</span> <span class="token keyword">if</span> pipeline<span class="token punctuation">}</span><span class="token punctuation">}</span> T0 <span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> range</h4>
<p>Go的模板语法中使用range关键字进行遍历，有以下两种写法，其中pipeline的值必须是数组、切片、字典或者通道。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">range</span> pipeline<span class="token punctuation">}</span><span class="token punctuation">}</span> T1 <span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span>
如果pipeline的值其长度为<span class="token number">0</span>，不会有任何输出

<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">range</span> pipeline<span class="token punctuation">}</span><span class="token punctuation">}</span> T1 <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">else</span><span class="token punctuation">}</span><span class="token punctuation">}</span> T0 <span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span>
如果pipeline的值其长度为<span class="token number">0</span>，则会执行T0。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="with" tabindex="-1"><a class="header-anchor" href="#with" aria-hidden="true">#</a> with</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token punctuation">{</span><span class="token punctuation">{</span>with pipeline<span class="token punctuation">}</span><span class="token punctuation">}</span> T1 <span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span>
如果pipeline为empty不产生输出，否则将dot设为pipeline的值并执行T1。不修改外面的dot。

<span class="token punctuation">{</span><span class="token punctuation">{</span>with pipeline<span class="token punctuation">}</span><span class="token punctuation">}</span> T1 <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">else</span><span class="token punctuation">}</span><span class="token punctuation">}</span> T0 <span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span>
如果pipeline为empty，不改变dot并执行T0，否则dot设为pipeline的值并执行T1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-预定义函数" tabindex="-1"><a class="header-anchor" href="#_1-1-4-预定义函数" aria-hidden="true">#</a> 1.1.4. 预定义函数</h3>
<p>执行模板时，函数从两个函数字典中查找：首先是模板函数字典，然后是全局函数字典。一般不在模板内定义函数，而是使用Funcs方法添加函数到模板里。</p>
<p>预定义的全局函数如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>and
    函数返回它的第一个empty参数或者最后一个参数；
    就是说<span class="token string">"and x y"</span>等价于<span class="token string">"if x then y else x"</span>；所有参数都会执行；
or
    返回第一个非empty参数或者最后一个参数；
    亦即<span class="token string">"or x y"</span>等价于<span class="token string">"if x then x else y"</span>；所有参数都会执行；
not
    返回它的单个参数的布尔值的否定
<span class="token builtin">len</span>
    返回它的参数的整数类型长度
index
    执行结果为第一个参数以剩下的参数为索引<span class="token operator">/</span>键指向的值；
    如<span class="token string">"index x 1 2 3"</span>返回x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>的值；每个被索引的主体必须是数组、切片或者字典。
<span class="token builtin">print</span>
    即fmt<span class="token punctuation">.</span>Sprint
printf
    即fmt<span class="token punctuation">.</span>Sprintf
<span class="token builtin">println</span>
    即fmt<span class="token punctuation">.</span>Sprintln
html
    返回其参数文本表示的HTML逸码等价表示。
urlquery
    返回其参数文本表示的可嵌入URL查询的逸码等价表示。
js
    返回其参数文本表示的JavaScript逸码等价表示。
call
    执行结果是调用第一个参数的返回值，该参数必须是函数类型，其余参数作为调用该函数的参数；
    如<span class="token string">"call .X.Y 1 2"</span>等价于<span class="token keyword">go</span>语言里的dot<span class="token punctuation">.</span>X<span class="token punctuation">.</span><span class="token function">Y</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>；
    其中Y是函数类型的字段或者字典的值，或者其他类似情况；
    call的第一个参数的执行结果必须是函数类型的值（和预定义函数如<span class="token builtin">print</span>明显不同）；
    该函数类型值必须有<span class="token number">1</span>到<span class="token number">2</span>个返回值，如果有<span class="token number">2</span>个则后一个必须是<span class="token builtin">error</span>接口类型；
    如果有<span class="token number">2</span>个返回值的方法返回的<span class="token builtin">error</span>非<span class="token boolean">nil</span>，模板执行会中断并返回给调用模板执行者该错误；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-5-比较函数" tabindex="-1"><a class="header-anchor" href="#_1-1-5-比较函数" aria-hidden="true">#</a> 1.1.5. 比较函数</h3>
<p>布尔函数会将任何类型的零值视为假，其余视为真。</p>
<p>下面是定义为函数的二元比较运算的集合：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    eq      如果arg1 == arg2则返回真
    ne      如果arg1 != arg2则返回真
    lt      如果arg1 &lt; arg2则返回真
    le      如果arg1 &lt;= arg2则返回真
    gt      如果arg1 > arg2则返回真
    ge      如果arg1 >= arg2则返回真
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了简化多参数相等检测，eq（只有eq）可以接受2个或更多个参数，它会将第一个参数和其余参数依次比较，返回下式的结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    {{eq arg1 arg2 arg3}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比较函数只适用于基本类型（或重定义的基本类型，如”type Celsius float32”）。但是，整数和浮点数不能互相比较。</p>
<h3 id="_1-1-6-自定义函数" tabindex="-1"><a class="header-anchor" href="#_1-1-6-自定义函数" aria-hidden="true">#</a> 1.1.6. 自定义函数</h3>
<p>Go的模板支持自定义函数。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    htmlByte<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">"./hello.html"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"read html failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 自定义一个夸人的模板函数</span>
    kua <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>arg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> arg <span class="token operator">+</span> <span class="token string">"真帅"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 采用链式操作在Parse之前调用Funcs添加自定义的kua函数</span>
    tmpl<span class="token punctuation">,</span> err <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Funcs</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span>FuncMap<span class="token punctuation">{</span><span class="token string">"kua"</span><span class="token punctuation">:</span> kua<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>htmlByte<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"create template failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    user <span class="token operator">:=</span> UserInfo<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span>   <span class="token string">"枯藤"</span><span class="token punctuation">,</span>
        Gender<span class="token punctuation">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span>
        Age<span class="token punctuation">:</span>    <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 使用user渲染模板，并将结果写入w</span>
    tmpl<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以在模板文件hello.html中使用我们自定义的kua函数了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    {{kua .Name}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-7-嵌套template" tabindex="-1"><a class="header-anchor" href="#_1-1-7-嵌套template" aria-hidden="true">#</a> 1.1.7. 嵌套template</h3>
<p>我们可以在template中嵌套其他的template。这个template可以是单独的文件，也可以是通过define定义的template。</p>
<p>举个例子： t.html文件内容如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"X-UA-Compatible"</span> content<span class="token operator">=</span><span class="token string">"ie=edge"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>tmpl test<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>

    <span class="token operator">&lt;</span>h1<span class="token operator">></span>测试嵌套template语法<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span>hr<span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span>template <span class="token string">"ul.html"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>hr<span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span>template <span class="token string">"ol.html"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>

<span class="token punctuation">{</span><span class="token punctuation">{</span> define <span class="token string">"ol.html"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>h1<span class="token operator">></span>这是ol<span class="token punctuation">.</span>html<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span>ol<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span>吃饭<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span>睡觉<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span>打豆豆<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ol<span class="token operator">></span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ul.html文件内容如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token operator">&lt;</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span>注释<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span>日志<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span>测试<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们注册一个templDemo路由处理函数.</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/tmpl"</span><span class="token punctuation">,</span> tmplDemo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>tmplDemo函数的具体内容如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">tmplDemo</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tmpl<span class="token punctuation">,</span> err <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">ParseFiles</span><span class="token punctuation">(</span><span class="token string">"./t.html"</span><span class="token punctuation">,</span> <span class="token string">"./ul.html"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"create template failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    user <span class="token operator">:=</span> UserInfo<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span>   <span class="token string">"枯藤"</span><span class="token punctuation">,</span>
        Gender<span class="token punctuation">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span>
        Age<span class="token punctuation">:</span>    <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    tmpl<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '59.md' style='float:left'>⬆️上一节🔗</a><a href = '61.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


