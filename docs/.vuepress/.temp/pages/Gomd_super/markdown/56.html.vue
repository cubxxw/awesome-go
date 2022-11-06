<template><div><h1 id="_1-flag" tabindex="-1"><a class="header-anchor" href="#_1-flag" aria-hidden="true">#</a> 1. Flag</h1>
<p>Go语言内置的flag包实现了命令行参数的解析，flag包使得开发命令行工具更为简单。</p>
<h3 id="_1-1-1-os-args" tabindex="-1"><a class="header-anchor" href="#_1-1-1-os-args" aria-hidden="true">#</a> 1.1.1. os.Args</h3>
<p>如果你只是简单的想要获取命令行参数，可以像下面的代码示例一样使用os.Args来获取命令行参数。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"os"</span>
<span class="token punctuation">)</span>

<span class="token comment">//os.Args demo</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//os.Args是一个[]string</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> index<span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> os<span class="token punctuation">.</span>Args <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"args[%d]=%v\n"</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的代码执行go build -o &quot;args_demo&quot;编译之后，执行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ ./args_demo a b c d
    args[0]=./args_demo
    args[1]=a
    args[2]=b
    args[3]=c
    args[4]=d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>os.Args是一个存储命令行参数的字符串切片，它的第一个元素是执行文件的名称。</p>
<h3 id="_1-1-2-flag包基本使用" tabindex="-1"><a class="header-anchor" href="#_1-1-2-flag包基本使用" aria-hidden="true">#</a> 1.1.2. flag包基本使用</h3>
<p>本文介绍了flag包的常用函数和基本用法，更详细的内容请查看<a href="https://studygolang.com/pkgdoc" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>。</p>
<h4 id="导入flag包" tabindex="-1"><a class="header-anchor" href="#导入flag包" aria-hidden="true">#</a> 导入flag包</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    import flag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="flag参数类型" tabindex="-1"><a class="header-anchor" href="#flag参数类型" aria-hidden="true">#</a> flag参数类型</h4>
<p>flag包支持的命令行参数类型有bool、int、int64、uint、uint64、float float64、string、duration。</p>
<table>
<thead>
<tr>
<th>flag参数</th>
<th>有效值</th>
</tr>
</thead>
<tbody>
<tr>
<td>字符串flag</td>
<td>合法字符串</td>
</tr>
<tr>
<td>整数flag</td>
<td>1234、0664、0x1234等类型，也可以是负数。</td>
</tr>
<tr>
<td>浮点数flag</td>
<td>合法浮点数</td>
</tr>
<tr>
<td>bool类型flag</td>
<td>1, 0, t, f, T, F, true, false, TRUE, FALSE, True, False。</td>
</tr>
<tr>
<td>时间段flag</td>
<td>任何合法的时间段字符串。如”300ms”、”-1.5h”、”2h45m”。 合法的单位有”ns”、”us” /“µs”、”ms”、”s”、”m”、”h”。</td>
</tr>
</tbody>
</table>
<h3 id="_1-1-3-定义命令行flag参数" tabindex="-1"><a class="header-anchor" href="#_1-1-3-定义命令行flag参数" aria-hidden="true">#</a> 1.1.3. 定义命令行flag参数</h3>
<p>有以下两种常用的定义命令行flag参数的方法。</p>
<h4 id="flag-type" tabindex="-1"><a class="header-anchor" href="#flag-type" aria-hidden="true">#</a> flag.Type()</h4>
<p>基本格式如下：</p>
<p><code v-pre>flag.Type(flag名, 默认值, 帮助信息)*Type</code>例如我们要定义姓名、年龄、婚否三个命令行参数，我们可以按如下方式定义：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>name <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token string">"姓名"</span><span class="token punctuation">)</span>
age <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"年龄"</span><span class="token punctuation">)</span>
married <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">"married"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"婚否"</span><span class="token punctuation">)</span>
delay <span class="token operator">:=</span> flag<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span><span class="token string">"d"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"时间间隔"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，此时name、age、married、delay均为对应类型的指针。</p>
<h4 id="flag-typevar" tabindex="-1"><a class="header-anchor" href="#flag-typevar" aria-hidden="true">#</a> flag.TypeVar()</h4>
<p>基本格式如下： flag.TypeVar(Type指针, flag名, 默认值, 帮助信息) 例如我们要定义姓名、年龄、婚否三个命令行参数，我们可以按如下方式定义：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> name <span class="token builtin">string</span>
<span class="token keyword">var</span> age <span class="token builtin">int</span>
<span class="token keyword">var</span> married <span class="token builtin">bool</span>
<span class="token keyword">var</span> delay time<span class="token punctuation">.</span>Duration
flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token string">"姓名"</span><span class="token punctuation">)</span>
flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>age<span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"年龄"</span><span class="token punctuation">)</span>
flag<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>married<span class="token punctuation">,</span> <span class="token string">"married"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"婚否"</span><span class="token punctuation">)</span>
flag<span class="token punctuation">.</span><span class="token function">DurationVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>delay<span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"时间间隔"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="flag-parse" tabindex="-1"><a class="header-anchor" href="#flag-parse" aria-hidden="true">#</a> flag.Parse()</h4>
<p>通过以上两种方法定义好命令行flag参数后，需要通过调用flag.Parse()来对命令行参数进行解析。</p>
<p>支持的命令行参数格式有以下几种：</p>
<ul>
<li>-flag xxx （使用空格，一个-符号）</li>
<li>--flag xxx （使用空格，两个-符号）</li>
<li>-flag=xxx （使用等号，一个-符号）</li>
<li>--flag=xxx （使用等号，两个-符号）</li>
</ul>
<p>其中，布尔类型的参数必须使用等号的方式指定。</p>
<p>Flag解析在第一个非flag参数（单个”-“不是flag参数）之前停止，或者在终止符”–“之后停止。</p>
<h3 id="_1-1-4-flag其他函数" tabindex="-1"><a class="header-anchor" href="#_1-1-4-flag其他函数" aria-hidden="true">#</a> 1.1.4. flag其他函数</h3>
<ul>
<li>flag.Args() ////返回命令行参数后的其他参数，以[]string类型</li>
<li>flag.NArg() //返回命令行参数后的其他参数个数</li>
<li>flag.NFlag() //返回使用的命令行参数个数</li>
</ul>
<h3 id="_1-1-5-完整示例" tabindex="-1"><a class="header-anchor" href="#_1-1-5-完整示例" aria-hidden="true">#</a> 1.1.5. 完整示例</h3>
<h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//定义命令行参数方式1</span>
    <span class="token keyword">var</span> name <span class="token builtin">string</span>
    <span class="token keyword">var</span> age <span class="token builtin">int</span>
    <span class="token keyword">var</span> married <span class="token builtin">bool</span>
    <span class="token keyword">var</span> delay time<span class="token punctuation">.</span>Duration
    flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token string">"姓名"</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">IntVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>age<span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"年龄"</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>married<span class="token punctuation">,</span> <span class="token string">"married"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"婚否"</span><span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span><span class="token function">DurationVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>delay<span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"延迟的时间间隔"</span><span class="token punctuation">)</span>

    <span class="token comment">//解析命令行参数</span>
    flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> married<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token comment">//返回命令行参数后的其他参数</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>flag<span class="token punctuation">.</span><span class="token function">Args</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//返回命令行参数后的其他参数个数</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>flag<span class="token punctuation">.</span><span class="token function">NArg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//返回使用的命令行参数个数</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>flag<span class="token punctuation">.</span><span class="token function">NFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-6-使用" tabindex="-1"><a class="header-anchor" href="#_1-1-6-使用" aria-hidden="true">#</a> 1.1.6. 使用</h3>
<p>命令行参数使用提示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ ./flag_demo -help
    Usage of ./flag_demo:
      -age int
            年龄 (default 18)
      -d duration
            时间间隔
      -married
            婚否
      -name string
            姓名 (default "张三")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正常使用命令行flag参数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ ./flag_demo -name pprof --age 28 -married=false -d=1h30m
    pprof 28 false 1h30m0s
    []
    0
    4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用非flag命令行参数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ ./flag_demo a b c
    张三 18 false 0s
    [a b c]
    3
    0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '55.md' style='float:left'>⬆️上一节🔗</a><a href = '57.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


