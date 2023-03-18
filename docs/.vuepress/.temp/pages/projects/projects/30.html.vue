<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第30节-性能分析-上-如何分析-go-语言代码的性能" tabindex="-1"><a class="header-anchor" href="#第30节-性能分析-上-如何分析-go-语言代码的性能" aria-hidden="true">#</a> 第30节 性能分析（上）：如何分析 Go 语言代码的性能？</h1>
<br>
<div><a href = '29.md' style='float:left'>⬆️上一节🔗  </a><a href = '31.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#生成性能数据文件">生成性能数据文件</router-link><ul><li><router-link to="#通过命令行生成性能数据文件">通过命令行生成性能数据文件</router-link></li><li><router-link to="#通过代码生成性能数据文件">通过代码生成性能数据文件</router-link></li><li><router-link to="#通过net-http-pprof生成性能数据文件">通过net/http/pprof生成性能数据文件</router-link></li></ul></li><li><router-link to="#性能分析">性能分析</router-link><ul><li><router-link to="#pprof工具介绍">pprof工具介绍</router-link></li><li><router-link to="#生成性能数据">生成性能数据</router-link></li><li><router-link to="#cpu性能分析">CPU性能分析</router-link></li><li><router-link to="#内存性能分析">内存性能分析</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<p>作为开发人员，我们一般都局限在功能上的单元测试中，对一些性能上的细节往往不会太关注。但是，如果我们在上线的时候对项目的整体性能没有一个全面的了解，随着请求量越来越大，可能会出现各种各样的问题，比如CPU占用高、内存使用率高、请求延时高等。为了避免这些性能瓶颈，我们在开发的过程中需要通过一定的手段，来对程序进行性能分析。</p>
<p>Go语言已经为开发者内置了很多性能调优、监控的工具和方法，这大大提升了我们profile分析的效率，借助这些工具，我们可以很方便地对Go程序进行性能分析。在Go语言开发中，开发者基本都是通过内置的<code v-pre>pprof</code>工具包来进行性能分析的。</p>
<p>在进行性能分析时，我们会先借助一些工具和包，生成性能数据文件，然后再通过<code v-pre>pprof</code>工具分析性能数据文件，从而分析代码的性能。那么接下来，我们就分别来看下如何执行这两步操作。</p>
<h2 id="生成性能数据文件" tabindex="-1"><a class="header-anchor" href="#生成性能数据文件" aria-hidden="true">#</a> 生成性能数据文件</h2>
<p>要查看性能数据，需要先生成性能数据文件。生成性能数据文件有三种方法，分别是通过命令行、通过代码和通过<code v-pre>net/http/pprof</code>包。这些工具和包会分别生成CPU和内存性能数据。</p>
<p>接下来，我们就来看下这三种方法分别是如何生成性能数据文件的。</p>
<h3 id="通过命令行生成性能数据文件" tabindex="-1"><a class="header-anchor" href="#通过命令行生成性能数据文件" aria-hidden="true">#</a> 通过命令行生成性能数据文件</h3>
<p>我们可以使用<code v-pre>go test -cpuprofile</code>来生成性能测试数据。进入<a href="https://github.com/marmotedu/iam/tree/v1.0.8/internal/apiserver/service/v1" target="_blank" rel="noopener noreferrer">internal/apiserver/service/v1<ExternalLinkIcon/></a>目录，执行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">".*"</span> <span class="token parameter variable">-cpuprofile</span> cpu.profile <span class="token parameter variable">-memprofile</span> mem.profile
goos: linux
goarch: amd64
pkg: github.com/marmotedu/iam/internal/apiserver/service/v1
cpu: AMD EPYC Processor
BenchmarkListUser-8          <span class="token number">280</span>     <span class="token number">4283077</span> ns/op
PASS
ok    github.com/marmotedu/iam/internal/apiserver/service/v1  <span class="token number">1</span>.798s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令会在当前目录下生成3个文件：</p>
<ul>
<li>v1.test，测试生成的二进制文件，进行性能分析时可以用来解析各种符号。</li>
<li>cpu.profile，CPU性能数据文件。</li>
<li>mem.profile，内存性能数据文件。</li>
</ul>
<h3 id="通过代码生成性能数据文件" tabindex="-1"><a class="header-anchor" href="#通过代码生成性能数据文件" aria-hidden="true">#</a> 通过代码生成性能数据文件</h3>
<p>我们还可以使用代码来生成性能数据文件，例如<a href="https://github.com/marmotedu/gopractise-demo/blob/master/pprof/pprof.go" target="_blank" rel="noopener noreferrer">pprof.go<ExternalLinkIcon/></a>文件：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"os"</span>
  <span class="token string">"runtime/pprof"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cpuOut<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"cpu.out"</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> cpuOut<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  pprof<span class="token punctuation">.</span><span class="token function">StartCPUProfile</span><span class="token punctuation">(</span>cpuOut<span class="token punctuation">)</span>
  <span class="token keyword">defer</span> pprof<span class="token punctuation">.</span><span class="token function">StopCPUProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  memOut<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"mem.out"</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> memOut<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">defer</span> pprof<span class="token punctuation">.</span><span class="token function">WriteHeapProfile</span><span class="token punctuation">(</span>memOut<span class="token punctuation">)</span>

  <span class="token function">Sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Sum</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行<code v-pre>pprof.go</code>文件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run pprof.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行<code v-pre>pprof.go</code>文件后，会在当前目录生成<code v-pre>cpu.profile</code>和<code v-pre>mem.profile</code>性能数据文件。</p>
<h3 id="通过net-http-pprof生成性能数据文件" tabindex="-1"><a class="header-anchor" href="#通过net-http-pprof生成性能数据文件" aria-hidden="true">#</a> 通过<code v-pre>net/http/pprof</code>生成性能数据文件</h3>
<p>如果要分析HTTP Server的性能，我们可以使用<code v-pre>net/http/pprof</code>包来生成性能数据文件。</p>
<p>IAM项目使用Gin框架作为HTTP引擎，所以IAM项目使用了<code v-pre>github.com/gin-contrib/pprof</code>包来启用HTTP性能分析。<code v-pre>github.com/gin-contrib/pprof</code>包是<code v-pre>net/http/pprof</code>的一个简单封装，通过封装使pprof的功能变成了一个Gin中间件，这样可以根据需要加载pprof中间件。</p>
<p><code v-pre>github.com/gin-contrib/pprof</code>包中的<a href="https://github.com/gin-contrib/pprof/blob/v1.3.0/pprof.go" target="_blank" rel="noopener noreferrer">pprof.go<ExternalLinkIcon/></a>文件中有以下代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Register</span><span class="token punctuation">(</span>r <span class="token operator">*</span>gin<span class="token punctuation">.</span>Engine<span class="token punctuation">,</span> prefixOptions <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prefix <span class="token operator">:=</span> <span class="token function">getPrefix</span><span class="token punctuation">(</span>prefixOptions<span class="token operator">...</span><span class="token punctuation">)</span>

    prefixRouter <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        prefixRouter<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/profile"</span><span class="token punctuation">,</span> <span class="token function">pprofHandler</span><span class="token punctuation">(</span>pprof<span class="token punctuation">.</span>Profile<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">pprofHandler</span><span class="token punctuation">(</span>h http<span class="token punctuation">.</span>HandlerFunc<span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
    handler <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">HandlerFunc</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        handler<span class="token punctuation">.</span><span class="token function">ServeHTTP</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>通过上面的代码，你可以看到<code v-pre>github.com/gin-contrib/pprof</code>包将<code v-pre>net/http/pprof.Profile</code>转换成了<code v-pre>gin.HandlerFunc</code>，也就是Gin中间件。</em></p>
<p><em>要开启HTTP性能分析，只需要在代码中注册pprof提供的HTTP Handler即可（位于<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/pkg/server/genericapiserver.go#L75-L77" target="_blank" rel="noopener noreferrer">internal/pkg/server/genericapiserver.go<ExternalLinkIcon/></a>文件中）：</em></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// install pprof handler</span>
<span class="token keyword">if</span> s<span class="token punctuation">.</span>enableProfiling <span class="token punctuation">{</span>
    pprof<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>Engine<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码根据配置<code v-pre>--feature.profiling</code>来判断是否开启HTTP性能分析功能。我们开启完HTTP性能分析，启动HTTP服务iam-apiserver后，即可访问<code v-pre>http:// x.x.x.x:8080/debug/pprof</code>（<code v-pre>x.x.x.x</code>是Linux服务器的地址）来查看profiles信息。profiles信息如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051108399.png" alt="图片"></p>
<p><em>我们可以通过以下命令，来获取CPU性能数据文件：</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> http://127.0.0.1:8080/debug/pprof/profile <span class="token parameter variable">-o</span> cpu.profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完上面的命令后，需要等待30s，pprof会采集这30s内的性能数据，我们需要在这段时间内向服务器连续发送多次请求，请求的频度可以根据我们的场景来决定。30s之后，<code v-pre>/debug/pprof/profile</code>接口会生成CPU profile文件，被curl命令保存在当前目录下的cpu.profile文件中。</p>
<p>同样的，我们可以执行以下命令来生成内存性能数据文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> http://127.0.0.1:8080/debug/pprof/heap <span class="token parameter variable">-o</span> mem.profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会自动下载heap文件，并被curl命令保存在当前目录下的mem.profile文件中。</p>
<p>我们可以使用<code v-pre>go tool pprof [mem|cpu].profile</code>命令来分析HTTP接口的CPU和内存性能。我们也可以使用命令<code v-pre>go tool pprof http://127.0.0.1:8080/debug/pprof/profile</code>，或者<code v-pre>go tool pprof http://127.0.0.1:8080/debug/pprof/heap</code>，来直接进入pprof工具的交互Shell中。<code v-pre>go tool pprof</code>会首先下载并保存CPU和内存性能数据文件，然后再分析这些文件。</p>
<p>通过上面的三种方法，我们生成了cpu.profile和mem.profile，接下来我们就可以使用<code v-pre>go tool pprof</code>来分析这两个性能数据文件，进而分析我们程序的CPU和内存性能了。下面，我来具体讲讲性能分析的过程。</p>
<h2 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h2>
<p>使用<code v-pre>go tool pprof</code>，来对性能进行分析的流程，你可以参考下图：</p>
<p><a href="https://static001.geekbang.org/resource/image/d4/da/d41d03c41283ea00308682a9yy0400da.jpg?wh=1920x665" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/d4/da/d41d03c41283ea00308682a9yy0400da.jpg?wh=1920x665" alt="图片"><ExternalLinkIcon/></a></p>
<p>接下来，我先给你介绍下pprof工具，再介绍下如何生成性能数据，最后再分别介绍下CPU和内存性能分析方法。</p>
<h3 id="pprof工具介绍" tabindex="-1"><a class="header-anchor" href="#pprof工具介绍" aria-hidden="true">#</a> pprof工具介绍</h3>
<p><a href="https://github.com/google/pprof" target="_blank" rel="noopener noreferrer">pprof<ExternalLinkIcon/></a>是一个Go程序性能分析工具，用它可以访问并分析性能数据文件，它还会根据我们的要求，提供高可读性的输出信息。Go在语言层面上集成了profile采样工具，只需在代码中简单地引入<code v-pre>runtime/pprof</code>或者<code v-pre>net/http/pprof</code>包，即可获取程序的profile文件，并通过profile文件来进行性能分析。</p>
<p><code v-pre>net/http/pprof</code>基于<code v-pre>runtime/pprof</code>包进行封装，并在 HTTP 端口上暴露出来。</p>
<h3 id="生成性能数据" tabindex="-1"><a class="header-anchor" href="#生成性能数据" aria-hidden="true">#</a> 生成性能数据</h3>
<p>我们在做性能分析时，主要是对内存和CPU性能进行分析。为了分析内存和CPU的性能，我们需要先生成性能数据文件。在 IAM 源码中，也有包含性能测试的用例，下面我会借助 IAM 源码中的性能测试用例，来介绍如何分析程序的性能。</p>
<p>进入<a href="https://github.com/marmotedu/iam/tree/v1.0.8/internal/apiserver/service/v1" target="_blank" rel="noopener noreferrer">internal/apiserver/service/v1<ExternalLinkIcon/></a>目录，user_test.go文件包含了性能测试函数 <a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/service/v1/user_test.go#L27-L41" target="_blank" rel="noopener noreferrer">BenchmarkListUser<ExternalLinkIcon/></a>，执行以下命令来生成性能数据文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-benchtime</span><span class="token operator">=</span>30s <span class="token parameter variable">-benchmem</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">"."</span> <span class="token parameter variable">-cpuprofile</span> cpu.profile <span class="token parameter variable">-memprofile</span> mem.profilegoos: linuxgoarch: amd64pkg: github.com/marmotedu/iam/internal/apiserver/service/v1cpu: AMD EPYC ProcessorBenchmarkListUser-8   	     <span class="token number">175</span>	 <span class="token number">204523677</span> ns/op	   <span class="token number">15331</span> B/op	     <span class="token number">268</span> allocs/opPASSok  	github.com/marmotedu/iam/internal/apiserver/service/v1	<span class="token number">56</span>.514s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会在当前目录下产生<code v-pre>cpu.profile</code>、<code v-pre>mem.profile</code>性能数据文件，以及<code v-pre>v1.test</code>二进制文件。接下来，我们基于<code v-pre>cpu.profile</code>、<code v-pre>mem.profile</code>、<code v-pre>v1.test</code>文件来分析代码的CPU和内存性能。为了获取足够的采样数据，我们将benchmark时间设置为<code v-pre>30s</code>。</p>
<p>在做性能分析时，我们可以采取不同的手段来分析性能，比如分析采样图、分析火焰图，还可以使用<code v-pre>go tool pprof</code>交互模式，查看函数CPU和内存消耗数据。下面我会运用这些方法，来分析CPU性能和内存性能。</p>
<h3 id="cpu性能分析" tabindex="-1"><a class="header-anchor" href="#cpu性能分析" aria-hidden="true">#</a> CPU性能分析</h3>
<p>在默认情况下，Go语言的运行时系统会以100 Hz的的频率对CPU使用情况进行采样，也就是说每秒采样100次，每10毫秒采样一次。每次采样时，会记录正在运行的函数，并统计其运行时间，从而生成CPU性能数据。</p>
<p>上面我们已经生成了CPU性能数据文件<code v-pre>cpu.profile</code>，接下来会运用上面提到的三种方法来分析该性能文件，优化性能。</p>
<p>方法一：分析采样图</p>
<p>要分析性能，最直观的方式当然是看图，所以首先我们需要生成采样图，生成过程可以分为两个步骤。</p>
<p>第一步，确保系统安装了<code v-pre>graphviz</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> graphviz.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，执行<code v-pre>go tool pprof</code>生成调用图：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go tool pprof <span class="token parameter variable">-svg</span> cpu.profile <span class="token operator">></span> cpu.svg  <span class="token comment"># svg 格式$ go tool pprof -pdf cpu.profile > cpu.pdf # pdf 格式$ go tool pprof -png cpu.profile > cpu.png # png 格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令会生成<code v-pre>cpu.pdf</code>、<code v-pre>cpu.svg</code>和<code v-pre>cpu.png</code>文件，文件中绘制了函数调用关系以及其他采样数据。如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051111612.png" alt="图片"></p>
<p>这张图片由有向线段和矩形组成。我们先来看有向线段的含义。</p>
<p>有向线段描述了函数的调用关系，矩形包含了CPU采样数据。从图中，我们看到没箭头的一端调用了有箭头的一端，可以知道<code v-pre>v1.(*userService).List</code>函数调用了<code v-pre>fake.(*policies).List</code>。</p>
<p>线段旁边的数字<code v-pre>90ms</code>则说明，<code v-pre>v1.(*userService).List</code>调用<code v-pre>fake.(*policies).List</code>函数，在采样周期内，一共耗用了<code v-pre>90ms</code>。通过函数调用关系，我们可以知道某个函数调用了哪些函数，并且调用这些函数耗时多久。</p>
<p>这里，我们再次解读下图中调用关系中的重要信息：</p>
<p><a href="https://static001.geekbang.org/resource/image/70/32/70e964bc6d8f0b28d434cce47c4e1132.png?wh=835x818" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/70/32/70e964bc6d8f0b28d434cce47c4e1132.png?wh=835x818" alt="图片"><ExternalLinkIcon/></a></p>
<p><code v-pre>runtime.schedule</code>的累积采样时间（140ms）中，有10ms来自于<code v-pre>runtime.goschedImpl</code>函数的直接调用，有70ms来自于<code v-pre>runtime.park_m</code>函数的直接调用。这些数据可以说明<code v-pre>runtime.schedule</code>函数分别被哪些函数调用，并且调用频率有多大。也因为这个原因，函数<code v-pre>runtime.goschedImpl</code>对函数<code v-pre>runtime.schedule</code>的调用时间必定小于等于函数<code v-pre>runtime.schedule</code>的累积采样时间。</p>
<p>**我们再来看下矩形里的采样数据。**这些矩形基本都包含了3类信息：</p>
<ul>
<li>函数名/方法名，该类信息包含了包名、结构体名、函数名/方法名，方便我们快速定位到函数/方法，例如<code v-pre>fake(*policies)List</code>说明是fake包，policies结构体的List方法。</li>
<li>本地采样时间，以及它在采样总数中所占的比例。本地采样时间是指采样点落在该函数中的总时间。</li>
<li>累积采样时间，以及它在采样总数中所占的比例。累积采样时间是指采样点落在该函数，以及被它直接或者间接调用的函数中的总时间。</li>
</ul>
<p>我们可以通过<code v-pre>OutDir</code>函数来解释本地采样时间和累积采样时间这两个概念。<code v-pre>OutDir</code>函数如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051111655.png" alt="图片"></p>
<p>整个函数的执行耗时，我们可以认为是累积采样时间，包含了白色部分的代码耗时和红色部分的函数调用耗时。白色部分的代码耗时，可以认为是本地采样时间。</p>
<p>通过累积采样时间，我们可以知道函数的总调用时间，累积采样时间越大，说明调用它所花费的CPU时间越多。但你要注意，这并不一定说明这个函数本身是有问题的，也有可能是函数所调用的函数性能有瓶颈，这时候我们应该根据函数调用关系顺藤摸瓜，去寻找这个函数直接或间接调用的函数中最耗费CPU时间的那些。</p>
<p>如果函数的本地采样时间很大，就说明这个函数自身耗时（除去调用其他函数的耗时）很大，这时候需要我们分析这个函数自身的代码，而不是这个函数直接或者间接调用函数的代码。</p>
<p>采样图中，矩形框面积越大，说明这个函数的累积采样时间越大。那么，如果一个函数分析采样图中的矩形框面积很大，这时候我们就要认真分析了，因为很可能这个函数就有需要优化性能的地方。</p>
<p><strong>方法二：分析火焰图</strong></p>
<p>上面介绍的采样图，其实在分析性能的时候还不太直观，这里我们可以通过生成火焰图，来更直观地查看性能瓶颈。火焰图是由Brendan Gregg大师发明的专门用来把采样到的堆栈轨迹（Stack Trace）转化为直观图片显示的工具，因整张图看起来像一团跳动的火焰而得名。</p>
<p><code v-pre>go tool pprof</code>提供了<code v-pre>-http</code>参数，可以使我们通过浏览器浏览采样图和火焰图。执行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go tool pprof <span class="token parameter variable">-http</span><span class="token operator">=</span><span class="token string">"0.0.0.0:8081"</span> v1.test cpu.profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后访问<code v-pre>http://x.x.x.x:8081/</code>（<code v-pre>x.x.x.x</code>是执行<code v-pre>go tool pprof</code>命令所在服务器的IP地址），则会在浏览器显示各类采样视图数据，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051111697.png" alt="图片"></p>
<p>上面的UI页面提供了不同的采样数据视图：</p>
<ul>
<li>Top，类似于 linux top 的形式，从高到低排序。</li>
<li>Graph，默认弹出来的就是该模式，也就是上一个图的那种带有调用关系的图。</li>
<li>Flame Graph：pprof 火焰图。</li>
<li>Peek：类似于 Top 也是从高到底的排序。</li>
<li>Source：和交互命令式的那种一样，带有源码标注。</li>
<li>Disassemble：显示所有的总量。</li>
</ul>
<p>接下来，我们主要来分析火焰图。在UI界面选择<strong>Flame Graph（VIEW -&gt; Flame Graph）</strong>，就会展示火焰图，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051111256.png" alt="图片"></p>
<p>火焰图主要有下面这几个特征：</p>
<ul>
<li>每一列代表一个调用栈，每一个格子代表一个函数。</li>
<li>纵轴展示了栈的深度，按照调用关系从上到下排列。最下面的格子代表采样时，正在占用CPU的函数。</li>
<li>调用栈在横向会按照字母排序，并且同样的调用栈会做合并，所以一个格子的宽度越大，说明这个函数越可能是瓶颈。</li>
<li>火焰图格子的颜色是随机的暖色调，方便区分各个调用信息。</li>
</ul>
<p>查看火焰图时，格子越宽的函数，就越可能存在性能问题，这时候，我们就可以分析该函数的代码，找出问题所在。</p>
<p><strong>方法三：用<code v-pre>go tool pprof</code>交互模式查看详细数据</strong></p>
<p>我们可以执行<code v-pre>go tool pprof</code>命令，来查看CPU的性能数据文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go tool pprof v1.test cpu.profile
File: v1.test
Type: cpu
Time: Aug <span class="token number">17</span>, <span class="token number">2021</span> at <span class="token number">2</span>:17pm <span class="token punctuation">(</span>CST<span class="token punctuation">)</span>
Duration: <span class="token number">56</span>.48s, Total samples <span class="token operator">=</span> 440ms <span class="token punctuation">(</span> <span class="token number">0.78</span>%<span class="token punctuation">)</span>
Entering interactive mode <span class="token punctuation">(</span>type <span class="token string">"help"</span> <span class="token keyword">for</span> commands, <span class="token string">"o"</span> <span class="token keyword">for</span> options<span class="token punctuation">)</span>
<span class="token punctuation">(</span>pprof<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>go tool pprof</code>输出了很多信息：</p>
<ul>
<li>File，二进制可执行文件名称。</li>
<li>Type，采样文件的类型，例如cpu、mem等。</li>
<li>Time，生成采样文件的时间。</li>
<li>Duration，程序执行时间。上面的例子中，程序总执行时间为<code v-pre>37.43s</code>，采样时间为<code v-pre>42.37s</code>。采样程序在采样时，会自动分配采样任务给多个核心，所以总采样时间可能会大于总执行时间。</li>
<li>(pprof)，命令行提示，表示当前在<code v-pre>go tool</code>的<code v-pre>pprof</code>工具命令行中，<code v-pre>go tool</code>还包括<code v-pre>cgo</code>、<code v-pre>doc</code>、<code v-pre>pprof</code>、<code v-pre>trace</code>等多种命令。</li>
</ul>
<p>执行<code v-pre>go tool pprof</code>命令后，会进入一个交互shell。在这个交互shell中，我们可以执行多个命令，最常用的命令有三个，如下表所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051112473.jpeg" alt="图片"></p>
<p>我们在交互界面中执行<code v-pre>top</code>命令，可以查看性能样本数据：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">(</span>pprof<span class="token punctuation">)</span> <span class="token function">top</span>
Showing nodes accounting <span class="token keyword">for</span> 350ms, <span class="token number">79.55</span>% of 440ms total
Showing <span class="token function">top</span> <span class="token number">10</span> nodes out of <span class="token number">47</span>
      flat  flat%   sum%        cum   cum%
     110ms <span class="token number">25.00</span>% <span class="token number">25.00</span>%      110ms <span class="token number">25.00</span>%  runtime.futex
      70ms <span class="token number">15.91</span>% <span class="token number">40.91</span>%       90ms <span class="token number">20.45</span>%  github.com/marmotedu/iam/internal/apiserver/store/fake.<span class="token punctuation">(</span>*policies<span class="token punctuation">)</span>.List
      40ms  <span class="token number">9.09</span>% <span class="token number">50.00</span>%       40ms  <span class="token number">9.09</span>%  runtime.epollwait
      40ms  <span class="token number">9.09</span>% <span class="token number">59.09</span>%      180ms <span class="token number">40.91</span>%  runtime.findrunnable
      30ms  <span class="token number">6.82</span>% <span class="token number">65.91</span>%       30ms  <span class="token number">6.82</span>%  runtime.write1
      20ms  <span class="token number">4.55</span>% <span class="token number">70.45</span>%       30ms  <span class="token number">6.82</span>%  runtime.notesleep
      10ms  <span class="token number">2.27</span>% <span class="token number">72.73</span>%      100ms <span class="token number">22.73</span>%  github.com/marmotedu/iam/internal/apiserver/service/v1.<span class="token punctuation">(</span>*userService<span class="token punctuation">)</span>.List
      10ms  <span class="token number">2.27</span>% <span class="token number">75.00</span>%       10ms  <span class="token number">2.27</span>%  runtime.checkTimers
      10ms  <span class="token number">2.27</span>% <span class="token number">77.27</span>%       10ms  <span class="token number">2.27</span>%  runtime.doaddtimer
      10ms  <span class="token number">2.27</span>% <span class="token number">79.55</span>%       10ms  <span class="token number">2.27</span>%  runtime.mallocgc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的输出中，每一行表示一个函数的信息。pprof程序中最重要的命令就是topN，这个命令用来显示profile文件中最靠前的N个样本（sample），top命令会输出多行信息，每一行代表一个函数的采样数据，默认按<code v-pre>flat%</code>排序。输出中，各列含义如下：</p>
<ul>
<li>flat：采样点落在该函数中的总时间。</li>
<li>flat%：采样点落在该函数中时间的百分比。</li>
<li>sum%：前面所有行的flat%的累加值，也就是上一项的累积百分比。</li>
<li>cum：采样点落在该函数中的，以及被它调用的函数中的总时间。</li>
<li>cum%：采样点落在该函数中的，以及被它调用的函数中的总次数百分比。</li>
<li>函数名。</li>
</ul>
<p>上面这些信息，可以告诉我们函数执行的时间和耗时排名，我们可以根据这些信息，来判断哪些函数可能有性能问题，或者哪些函数的性能可以进一步优化。</p>
<p>这里想提示下，如果执行的是<code v-pre>go tool pprof mem.profile</code>，那么上面的各字段意义是类似的，只不过这次不是时间而是内存分配大小（字节）。</p>
<p>执行<code v-pre>top</code>命令默认是按<code v-pre>flat%</code>排序的，在做性能分析时，我们需要先按照<code v-pre>cum</code>来排序，通过<code v-pre>cum</code>，我们可以直观地看到哪个函数总耗时最多，然后再参考该函数的本地采样时间和调用关系，来判断是该函数性能耗时多，还是它调用的函数耗时多。</p>
<p>执行<code v-pre>top -cum</code>输出如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">(</span>pprof<span class="token punctuation">)</span> top20 <span class="token parameter variable">-cum</span>
Showing nodes accounting <span class="token keyword">for</span> 280ms, <span class="token number">63.64</span>% of 440ms total
Showing <span class="token function">top</span> <span class="token number">20</span> nodes out of <span class="token number">47</span>
      flat  flat%   sum%        cum   cum%
         <span class="token number">0</span>     <span class="token number">0</span>%     <span class="token number">0</span>%      320ms <span class="token number">72.73</span>%  runtime.mcall
         <span class="token number">0</span>     <span class="token number">0</span>%     <span class="token number">0</span>%      320ms <span class="token number">72.73</span>%  runtime.park_m
         <span class="token number">0</span>     <span class="token number">0</span>%     <span class="token number">0</span>%      280ms <span class="token number">63.64</span>%  runtime.schedule
      40ms  <span class="token number">9.09</span>%  <span class="token number">9.09</span>%      180ms <span class="token number">40.91</span>%  runtime.findrunnable
     110ms <span class="token number">25.00</span>% <span class="token number">34.09</span>%      110ms <span class="token number">25.00</span>%  runtime.futex
      10ms  <span class="token number">2.27</span>% <span class="token number">36.36</span>%      100ms <span class="token number">22.73</span>%  github.com/marmotedu/iam/internal/apiserver/service/v1.<span class="token punctuation">(</span>*userService<span class="token punctuation">)</span>.List
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">36.36</span>%      100ms <span class="token number">22.73</span>%  github.com/marmotedu/iam/internal/apiserver/service/v1.BenchmarkListUser
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">36.36</span>%      100ms <span class="token number">22.73</span>%  runtime.futexwakeup
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">36.36</span>%      100ms <span class="token number">22.73</span>%  runtime.notewakeup
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">36.36</span>%      100ms <span class="token number">22.73</span>%  runtime.resetspinning
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">36.36</span>%      100ms <span class="token number">22.73</span>%  runtime.startm
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">36.36</span>%      100ms <span class="token number">22.73</span>%  runtime.wakep
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">36.36</span>%      100ms <span class="token number">22.73</span>%  testing.<span class="token punctuation">(</span>*B<span class="token punctuation">)</span>.launch
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">36.36</span>%      100ms <span class="token number">22.73</span>%  testing.<span class="token punctuation">(</span>*B<span class="token punctuation">)</span>.runN
      70ms <span class="token number">15.91</span>% <span class="token number">52.27</span>%       90ms <span class="token number">20.45</span>%  github.com/marmotedu/iam/internal/apiserver/store/fake.<span class="token punctuation">(</span>*policies<span class="token punctuation">)</span>.List
      10ms  <span class="token number">2.27</span>% <span class="token number">54.55</span>%       50ms <span class="token number">11.36</span>%  runtime.netpoll
      40ms  <span class="token number">9.09</span>% <span class="token number">63.64</span>%       40ms  <span class="token number">9.09</span>%  runtime.epollwait
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">63.64</span>%       40ms  <span class="token number">9.09</span>%  runtime.modtimer
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">63.64</span>%       40ms  <span class="token number">9.09</span>%  runtime.resetForSleep
         <span class="token number">0</span>     <span class="token number">0</span>% <span class="token number">63.64</span>%       40ms  <span class="token number">9.09</span>%  runtime.resettimer <span class="token punctuation">(</span>inline<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出可知，<code v-pre>v1.BenchmarkListUser</code>、<code v-pre>testing.(*B).launch</code>、<code v-pre>testing.(*B).runN</code>的本地采样时间占比分别为<code v-pre>0%</code>、<code v-pre>0%</code>、<code v-pre>0%</code>，但是三者的累积采样时间占比却比较高，分别为<code v-pre>22.73%</code>、<code v-pre>22.73%</code>、<code v-pre>22.73%</code>。</p>
<p>本地采样时间占比很小，但是累积采样时间占比很高，说明这3个函数耗时多是因为调用了其他函数，它们自身几乎没有耗时。根据采样图，我们可以看到函数的调用关系，具体如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051112424.jpeg" alt="图片"></p>
<p>从采样图中，可以知道最终<code v-pre>v1.BenchmarkListUser</code>调用了<code v-pre>v1.(*userService).List</code>函数。<code v-pre>v1.(*userService).List</code>函数是我们编写的函数，该函数的本地采样时间占比为<code v-pre>2.27%</code>，但是累积采样时间占比却高达<code v-pre>22.73%</code>，说明<code v-pre>v1.(*userService).List</code>调用其他函数耗用了大量的CPU时间。</p>
<p>再观察采样图，可以看出<code v-pre>v1.(*userService).List</code>耗时久是因为调用了<code v-pre>fake.(*policies).List</code>函数。我们也可以通过<code v-pre>list</code>命令查看函数内部的耗时情况：</p>
<p><img src="http://sm.nsddd.top/sm202303051112930.png" alt="图片"></p>
<p><code v-pre>list userService.*List</code>会列出<code v-pre>userService</code>结构体<code v-pre>List</code>方法内部代码的耗时情况，从上图也可以看到，<code v-pre>u.store.Policies().List</code>耗时最多。<code v-pre>fake.(*policies).List</code>的本地采样时间占比为<code v-pre>15.91%</code>，说明<code v-pre>fake.(*policies).List</code>函数本身可能存在瓶颈。走读<code v-pre>fake.(*policies).List</code>代码可知，该函数是查询数据库的函数，查询数据库会有延时。继续查看<code v-pre>v1.(*userService).List</code>代码，我们可以发现以下调用逻辑：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>userService<span class="token punctuation">)</span> <span class="token function">ListWithBadPerformance</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>UserList<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> user <span class="token operator">:=</span> <span class="token keyword">range</span> users<span class="token punctuation">.</span>Items <span class="token punctuation">{</span>
        policies<span class="token punctuation">,</span> err <span class="token operator">:=</span> u<span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">Policies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">List</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> user<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token operator">...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在<code v-pre>for</code>循环中，串行调用了<code v-pre>fake.(*policies).List</code>函数，每一次循环都会调用有延时的<code v-pre>fake.(*policies).List</code>函数。多次调用，<code v-pre>v1.(*userService).List</code>函数的耗时自然会累加起来。</p>
<p>现在问题找到了，那我们怎么优化呢？你可以利用CPU多核特性，开启多个goroutine，这样我们的查询耗时就不是串行累加的，而是取决于最慢一次的<code v-pre>fake.(*policies).List</code>调用。优化后的<code v-pre>v1.(*userService).List*</code>函数代码见<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/service/v1/user.go#L43-L110" target="_blank" rel="noopener noreferrer">internal/apiserver/service/v1/user.go<ExternalLinkIcon/></a>。用同样的性能测试用例，测试优化后的函数，结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-benchtime</span><span class="token operator">=</span>30s <span class="token parameter variable">-benchmem</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">".*"</span> <span class="token parameter variable">-cpuprofile</span> cpu.profile <span class="token parameter variable">-memprofile</span> mem.profile
goos: linux
goarch: amd64
pkg: github.com/marmotedu/iam/internal/apiserver/service/v1
cpu: AMD EPYC Processor
BenchmarkListUser-8         <span class="token number">8330</span>     <span class="token number">4271131</span> ns/op     <span class="token number">26390</span> B/op       <span class="token number">484</span> allocs/op
PASS
ok    github.com/marmotedu/iam/internal/apiserver/service/v1  <span class="token number">36</span>.179s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，ns/op为<code v-pre>4271131 ns/op</code>，可以看到和第一次的测试结果<code v-pre>204523677 ns/op</code>相比，性能提升了<code v-pre>97.91%</code>。</p>
<p>这里注意下，为了方便你对照，我将优化前的<code v-pre>v1.(*userService).List</code>函数重命名为<code v-pre>v1.(*userService).ListWithBadPerformance</code>。</p>
<h3 id="内存性能分析" tabindex="-1"><a class="header-anchor" href="#内存性能分析" aria-hidden="true">#</a> 内存性能分析</h3>
<p>Go语言运行时，系统会对程序运行期间的所有堆内存分配进行记录。不管在采样的哪一时刻，也不管堆内存已用字节数是否有增长，只要有字节被分配且数量足够，分析器就会对它进行采样。</p>
<p>内存性能分析方法和CPU性能分析方法比较类似，这里就不再重复介绍了。你可以借助前面生成的内存性能数据文件<code v-pre>mem.profile</code>自行分析。</p>
<p>接下来，给你展示下内存优化前和优化后的效果。在<code v-pre>v1.(*userService).List</code>函数（位于<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/service/v1/user.go#L43-L110" target="_blank" rel="noopener noreferrer">internal/apiserver/service/v1/user.go<ExternalLinkIcon/></a>文件中）中，有以下代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>infos <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>User<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> user <span class="token operator">:=</span> <span class="token keyword">range</span> users<span class="token punctuation">.</span>Items <span class="token punctuation">{</span>
    info<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> m<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>ID<span class="token punctuation">)</span>
    infos <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>infos<span class="token punctuation">,</span> info<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>User<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，我们运行<code v-pre>go test</code>命令，测试下内存性能，作为优化后的性能数据，进行对比：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-benchmem</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">".*"</span> <span class="token parameter variable">-cpuprofile</span> cpu.profile <span class="token parameter variable">-memprofile</span> mem.profile
goos: linux
goarch: amd64
pkg: github.com/marmotedu/iam/internal/apiserver/service/v1
cpu: AMD EPYC Processor
BenchmarkListUser-8          <span class="token number">278</span>     <span class="token number">4284660</span> ns/op     <span class="token number">27101</span> B/op       <span class="token number">491</span> allocs/op
PASS
ok    github.com/marmotedu/iam/internal/apiserver/service/v1  <span class="token number">1</span>.779s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>B/op</code>和<code v-pre>allocs/op</code>分别为<code v-pre>27101 B/op</code>和<code v-pre>491 allocs/op</code>。</p>
<p>我们通过分析代码，发现可以将<code v-pre>infos := make([]*v1.User, 0)</code>优化为<code v-pre>infos := make([]*v1.User, 0, len(users.Items))</code>，来减少Go切片的内存重新分配的次数。优化后的代码为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//infos := make([]*v1.User, 0)</span>
infos <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>User<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>users<span class="token punctuation">.</span>Items<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> user <span class="token operator">:=</span> <span class="token keyword">range</span> users<span class="token punctuation">.</span>Items <span class="token punctuation">{</span>
    info<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> m<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>ID<span class="token punctuation">)</span>
    infos <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>infos<span class="token punctuation">,</span> info<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>User<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>再执行<code v-pre>go test</code>测试下性能：</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-benchmem</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">".*"</span> <span class="token parameter variable">-cpuprofile</span> cpu.profile <span class="token parameter variable">-memprofile</span> mem.profile
goos: linux
goarch: amd64
pkg: github.com/marmotedu/iam/internal/apiserver/service/v1
cpu: AMD EPYC Processor
BenchmarkListUser-8          <span class="token number">276</span>     <span class="token number">4318472</span> ns/op     <span class="token number">26457</span> B/op       <span class="token number">484</span> allocs/op
PASS
ok    github.com/marmotedu/iam/internal/apiserver/service/v1  <span class="token number">1</span>.856s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化后的<code v-pre>B/op</code>和<code v-pre>allocs/op</code>分别为<code v-pre>26457 B/op</code>和<code v-pre>484 allocs/op</code>。跟第一次的<code v-pre>27101 B/op</code>和<code v-pre>491 allocs/op</code>相比，内存分配次数更少，每次分配的内存也更少。</p>
<p>我们可以执行<code v-pre>go tool pprof</code>命令，来查看CPU的性能数据文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go tool pprof v1.test mem.profile
File: v1.test
Type: alloc_space
Time: Aug <span class="token number">17</span>, <span class="token number">2021</span> at <span class="token number">8</span>:33pm <span class="token punctuation">(</span>CST<span class="token punctuation">)</span>
Entering interactive mode <span class="token punctuation">(</span>type <span class="token string">"help"</span> <span class="token keyword">for</span> commands, <span class="token string">"o"</span> <span class="token keyword">for</span> options<span class="token punctuation">)</span>
<span class="token punctuation">(</span>pprof<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该命令会进入一个交互界面，在交互界面中执行top命令，可以查看性能样本数据，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">(</span>pprof<span class="token punctuation">)</span> <span class="token function">top</span>
Showing nodes accounting <span class="token keyword">for</span> <span class="token number">10347</span>.32kB, <span class="token number">95.28</span>% of <span class="token number">10859</span>.34kB total
Showing <span class="token function">top</span> <span class="token number">10</span> nodes out of <span class="token number">52</span>
      flat  flat%   sum%        cum   cum%
 <span class="token number">3072</span>.56kB <span class="token number">28.29</span>% <span class="token number">28.29</span>%  <span class="token number">4096</span>.64kB <span class="token number">37.72</span>%  github.com/marmotedu/iam/internal/apiserver/service/v1.<span class="token punctuation">(</span>*userService<span class="token punctuation">)</span>.List.func1
 <span class="token number">1762</span>.94kB <span class="token number">16.23</span>% <span class="token number">44.53</span>%  <span class="token number">1762</span>.94kB <span class="token number">16.23</span>%  runtime/pprof.StartCPUProfile
 <span class="token number">1024</span>.52kB  <span class="token number">9.43</span>% <span class="token number">53.96</span>%  <span class="token number">1024</span>.52kB  <span class="token number">9.43</span>%  go.uber.org/zap/buffer.NewPool.func1
 <span class="token number">1024</span>.08kB  <span class="token number">9.43</span>% <span class="token number">63.39</span>%  <span class="token number">1024</span>.08kB  <span class="token number">9.43</span>%  time.Sleep
  <span class="token number">902</span>.59kB  <span class="token number">8.31</span>% <span class="token number">71.70</span>%   <span class="token number">902</span>.59kB  <span class="token number">8.31</span>%  compress/flate.NewWriter
  <span class="token number">512</span>.20kB  <span class="token number">4.72</span>% <span class="token number">76.42</span>%  <span class="token number">1536</span>.72kB <span class="token number">14.15</span>%  github.com/marmotedu/iam/internal/apiserver/service/v1.<span class="token punctuation">(</span>*userService<span class="token punctuation">)</span>.List
  <span class="token number">512</span>.19kB  <span class="token number">4.72</span>% <span class="token number">81.14</span>%   <span class="token number">512</span>.19kB  <span class="token number">4.72</span>%  runtime.malg
  <span class="token number">512</span>.12kB  <span class="token number">4.72</span>% <span class="token number">85.85</span>%   <span class="token number">512</span>.12kB  <span class="token number">4.72</span>%  regexp.makeOnePass
  <span class="token number">512</span>.09kB  <span class="token number">4.72</span>% <span class="token number">90.57</span>%   <span class="token number">512</span>.09kB  <span class="token number">4.72</span>%  github.com/marmotedu/iam/internal/apiserver/store/fake.FakeUsers
  <span class="token number">512</span>.04kB  <span class="token number">4.72</span>% <span class="token number">95.28</span>%   <span class="token number">512</span>.04kB  <span class="token number">4.72</span>%  runtime/pprof.allFrames
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的内存性能数据，各字段的含义依次是：</p>
<ul>
<li>flat，采样点落在该函数中的总内存消耗。</li>
<li>flat% ，采样点落在该函数中的百分比。</li>
<li>sum% ，上一项的累积百分比。</li>
<li>cum ，采样点落在该函数，以及被它调用的函数中的总内存消耗。</li>
<li>cum%，采样点落在该函数，以及被它调用的函数中的总次数百分比。</li>
<li>函数名。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在Go项目开发中，程序性能低下时，我们需要分析出问题所在的代码。Go语言提供的 <code v-pre>go tool pprof</code> 工具可以支持我们分析代码的性能。我们可以通过两步来分析代码的性能，分别是生成性能数据文件和分析性能数据文件。</p>
<p>Go中可以用来生成性能数据文件的方式有三种：通过命令行生成性能数据文件、通过代码生成性能数据文件、通过 <code v-pre>net/http/pprof</code> 生成性能数据文件。</p>
<p>生成性能数据文件之后，就可以使用 <code v-pre>go tool pprof</code> 工具来分析性能数据文件了。我们可以分别获取到CPU和内存的性能数据，通过分析就可以找到性能瓶颈。有3种分析性能数据文件的方式，分别是分析采样图、分析火焰图和用 <code v-pre>go tool pprof</code> 交互模式查看详细数据。因为火焰图直观高效，所以我建议你多使用火焰图来分析性能。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>思考下，为什么“函数<code v-pre>runtime.goschedImpl</code>对函数<code v-pre>runtime.schedule</code>的调用时间必定小于等于函数<code v-pre>runtime.schedule</code>的累积采样时间”？</li>
<li>你在Go项目开发中，还有哪些比较好的性能分析思路和方法？欢迎在留言区分享。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '29.md' style='float:left'>⬆️上一节🔗  </a><a href = '31.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/projects/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


