<template><div><h1 id="_1-log" tabindex="-1"><a class="header-anchor" href="#_1-log" aria-hidden="true">#</a> 1. Log</h1>
<p>Go语言内置的log包实现了简单的日志服务。本文介绍了标准库log的基本使用。</p>
<h3 id="_1-1-1-使用logger" tabindex="-1"><a class="header-anchor" href="#_1-1-1-使用logger" aria-hidden="true">#</a> 1.1.1. 使用Logger</h3>
<p>log包定义了Logger类型，该类型提供了一些格式化输出的方法。本包也提供了一个预定义的“标准”logger，可以通过调用函数Print系列(Print|Printf|Println）、Fatal系列（Fatal|Fatalf|Fatalln）、和Panic系列（Panic|Panicf|Panicln）来使用，比自行创建一个logger对象更容易使用。</p>
<p>例如，我们可以像下面的代码一样直接通过log包来调用上面提到的方法，默认它们会将日志信息打印到终端界面：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"log"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这是一条很普通的日志。"</span><span class="token punctuation">)</span>
    v <span class="token operator">:=</span> <span class="token string">"很普通的"</span>
    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"这是一条%s日志。\n"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">"这是一条会触发fatal的日志。"</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Panicln</span><span class="token punctuation">(</span><span class="token string">"这是一条会触发panic的日志。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译并执行上面的代码会得到如下输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    2019/10/11 14:04:17 这是一条很普通的日志。
    2019/10/11 14:04:17 这是一条很普通的日志。
    2019/10/11 14:04:17 这是一条会触发fatal的日志。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>logger会打印每条日志信息的日期、时间，默认输出到系统的标准错误。Fatal系列函数会在写入日志信息后调用os.Exit(1)。Panic系列函数会在写入日志信息后panic。</p>
<h3 id="_1-1-2-配置logger" tabindex="-1"><a class="header-anchor" href="#_1-1-2-配置logger" aria-hidden="true">#</a> 1.1.2. 配置logger</h3>
<p>默认情况下的logger只会提供日志的时间信息，但是很多情况下我们希望得到更多信息，比如记录该日志的文件名和行号等。log标准库中为我们提供了定制这些设置的方法。</p>
<p>log标准库中的Flags函数会返回标准logger的输出配置，而SetFlags函数用来设置标准logger的输出配置。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func Flags() int
    func SetFlags(flag int)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-flag选项" tabindex="-1"><a class="header-anchor" href="#_1-1-3-flag选项" aria-hidden="true">#</a> 1.1.3. flag选项</h3>
<p>log标准库提供了如下的flag选项，它们是一系列定义好的常量。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
    <span class="token comment">// 控制输出日志信息的细节，不能控制输出的顺序和格式。</span>
    <span class="token comment">// 输出的日志在每一项后会有一个冒号分隔：例如2009/01/23 01:23:23.123123 /a/b/c/d.go:23: message</span>
    Ldate         <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token boolean">iota</span>     <span class="token comment">// 日期：2009/01/23</span>
    Ltime                         <span class="token comment">// 时间：01:23:23</span>
    Lmicroseconds                 <span class="token comment">// 微秒级别的时间：01:23:23.123123（用于增强Ltime位）</span>
    Llongfile                     <span class="token comment">// 文件全路径名+行号： /a/b/c/d.go:23</span>
    Lshortfile                    <span class="token comment">// 文件名+行号：d.go:23（会覆盖掉Llongfile）</span>
    LUTC                          <span class="token comment">// 使用UTC时间</span>
    LstdFlags     <span class="token operator">=</span> Ldate <span class="token operator">|</span> Ltime <span class="token comment">// 标准logger的初始值</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们在记录日志之前先设置一下标准logger的输出选项如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Llongfile <span class="token operator">|</span> log<span class="token punctuation">.</span>Lmicroseconds <span class="token operator">|</span> log<span class="token punctuation">.</span>Ldate<span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这是一条很普通的日志。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译执行后得到的输出结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    2019/10/11 14:05:17.494943 .../log_demo/main.go:11: 这是一条很普通的日志。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-4-配置日志前缀" tabindex="-1"><a class="header-anchor" href="#_1-1-4-配置日志前缀" aria-hidden="true">#</a> 1.1.4. 配置日志前缀</h3>
<p>log标准库中还提供了关于日志信息前缀的两个方法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func Prefix() string
    func SetPrefix(prefix string)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中Prefix函数用来查看标准logger的输出前缀，SetPrefix函数用来设置输出前缀。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Llongfile <span class="token operator">|</span> log<span class="token punctuation">.</span>Lmicroseconds <span class="token operator">|</span> log<span class="token punctuation">.</span>Ldate<span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这是一条很普通的日志。"</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">SetPrefix</span><span class="token punctuation">(</span><span class="token string">"[pprof]"</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这是一条很普通的日志。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码输出如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    [pprof]2019/10/11 14:05:57.940542 .../log_demo/main.go:13: 这是一条很普通的日志。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样我们就能够在代码中为我们的日志信息添加指定的前缀，方便之后对日志信息进行检索和处理。</p>
<h3 id="_1-1-5-配置日志输出位置" tabindex="-1"><a class="header-anchor" href="#_1-1-5-配置日志输出位置" aria-hidden="true">#</a> 1.1.5. 配置日志输出位置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func SetOutput(w io.Writer)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SetOutput函数用来设置标准logger的输出目的地，默认是标准错误输出。</p>
<p>例如，下面的代码会把日志输出到同目录下的xx.log文件中。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logFile<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">"./xx.log"</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_APPEND<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"open log file failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>logFile<span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Llongfile <span class="token operator">|</span> log<span class="token punctuation">.</span>Lmicroseconds <span class="token operator">|</span> log<span class="token punctuation">.</span>Ldate<span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这是一条很普通的日志。"</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">SetPrefix</span><span class="token punctuation">(</span><span class="token string">"[小王子]"</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这是一条很普通的日志。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你要使用标准的logger，我们通常会把上面的配置操作写到init函数中。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logFile<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">"./xx.log"</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token operator">|</span>os<span class="token punctuation">.</span>O_APPEND<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"open log file failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    log<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>logFile<span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>Llongfile <span class="token operator">|</span> log<span class="token punctuation">.</span>Lmicroseconds <span class="token operator">|</span> log<span class="token punctuation">.</span>Ldate<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-6-创建logger" tabindex="-1"><a class="header-anchor" href="#_1-1-6-创建logger" aria-hidden="true">#</a> 1.1.6. 创建logger</h3>
<p>log标准库中还提供了一个创建新logger对象的构造函数–New，支持我们创建自己的logger示例。New函数的签名如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func New(out io.Writer, prefix string, flag int) *Logger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>New创建一个Logger对象。其中，参数out设置日志信息写入的目的地。参数prefix会添加到生成的每一条日志前面。参数flag定义日志的属性（时间、文件等等）。</p>
<p>举个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger <span class="token operator">:=</span> log<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">"&lt;New>"</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span>Lshortfile<span class="token operator">|</span>log<span class="token punctuation">.</span>Ldate<span class="token operator">|</span>log<span class="token punctuation">.</span>Ltime<span class="token punctuation">)</span>
    logger<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这是自定义的logger记录的日志。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的代码编译执行之后，得到结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    &lt;New>2019/10/11 14:06:51 main.go:34: 这是自定义的logger记录的日志。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>总结 : Go内置的log库功能有限，例如无法满足记录不同级别日志的情况，我们在实际的项目中根据自己的需要选择使用第三方的日志库，如logrus、zap等。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '56.md' style='float:left'>⬆️上一节🔗</a><a href = '58.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


