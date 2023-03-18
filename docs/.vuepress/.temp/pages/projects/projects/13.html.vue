<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第13节-从-0-编写一个日志包" tabindex="-1"><a class="header-anchor" href="#第13节-从-0-编写一个日志包" aria-hidden="true">#</a> 第13节  从 0 编写一个日志包</h1>
<br>
<div><a href = '12.md' style='float:left'>⬆️上一节🔗  </a><a href = '14.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#优秀的开源日志包">优秀的开源日志包</router-link></li><li><router-link to="#标准库log包使用">标准库log包使用</router-link></li><li><router-link to="#glog">glog</router-link></li><li><router-link to="#logrus介绍">logrus介绍</router-link></li><li><router-link to="#zap包介绍">zap包介绍</router-link><ul><li><router-link to="#zap使用方法">zap使用方法</router-link></li></ul></li><li><router-link to="#其它开源包">其它开源包</router-link></li><li><router-link to="#开源日志包选择">开源日志包选择</router-link></li><li><router-link to="#从0编写一个日志包">从0编写一个日志包</router-link><ul><li><router-link to="#定义日志级别和日志选项">定义日志级别和日志选项</router-link></li><li><router-link to="#创建logger及各级别日志打印方法">创建Logger及各级别日志打印方法</router-link></li><li><router-link to="#将日志输出到支持的输出中">将日志输出到支持的输出中</router-link></li><li><router-link to="#自定义日志输出格式">自定义日志输出格式</router-link></li><li><router-link to="#测试日志包">测试日志包</router-link></li><li><router-link to="#iam项目日志包设计">IAM项目日志包设计</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="优秀的开源日志包" tabindex="-1"><a class="header-anchor" href="#优秀的开源日志包" aria-hidden="true">#</a> 优秀的开源日志包</h2>
<p>在做项目开发时，我们可以从0编写自己的日志包、也可以使用Go语言标准库的log包，还可以使用开源的日志包，但更多的是基于优秀的开源日志包进行二次开发，来实现定制化的日志功能。Go生态中也有一些非常优秀的开源日志包，例如标准库log包、glog、logrus、zap、seelog、zerolog等。用的比较多的是<code v-pre>glog</code>、<code v-pre>logrus</code>和<code v-pre>zap</code>。</p>
<h2 id="标准库log包使用" tabindex="-1"><a class="header-anchor" href="#标准库log包使用" aria-hidden="true">#</a> 标准库log包使用</h2>
<p>标准库log包功能非常简单，提供了开箱，仅提供了Print、Panic和Fatal三类函数用于日志输出。因为是标准库自带的，所以不需要我们下载安装，使用起来非常方便。标准库log包只有不到400行的代码量，如果读者想研究如何实现一个日志包，阅读标准库log包是一个不错的开始。Go的标准库大量使用了log包，例如：<code v-pre>net/http、net/rpc</code>等。</p>
<p><strong>log包使用</strong></p>
<p>在使用log包时，需要首先创建一个<code v-pre>*log. Logger</code>类型的log实例，所有的日志输出都是通过该实例提供的方法来完成的。</p>
<p>可以使用log包提供的全局全局变量<code v-pre>std</code>，<code v-pre>std</code>定义如下（位于Go标准包log目录下的log.go文件中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> std <span class="token operator">=</span> <span class="token function">New</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stderr<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> LstdFlags<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也也可以使用<code v-pre>log.New函</code>数创建自己的logger，在创建时，可以指定输出的位置、每行日志的前缀和日志属性，例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>logger := log.New(logFile, "[Debug]", log.Lshortfile)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有如下几种日志属性可供选择：</p>
<ul>
<li>Ldate：当前时区的日期，格式是：2009/01/23。</li>
<li>Ltime：当前时区的时间，格式是：01:23:23，精确到秒。</li>
<li>Lmicroseconds：当前时区的时间，格式是：01:23:23.862600，精确到微妙。</li>
<li>Llongfile：全文件名和行号。</li>
<li>Lshortfile：当前文件名和行号，会覆盖Llongfile。</li>
<li>LUTC：使用UTC而非本地时区。</li>
<li>Lmsgprefix：将“前缀”从行的开头移至消息之前。</li>
<li>LstdFlags：标准Logger的默认值（Ldate、Ltime）。</li>
</ul>
<p>除了在执行log.New时配置log.Logger之外，创建之后还可以通过log.Logger提供的3种方法来改变log.Logger的配置：</p>
<ul>
<li>SetOutput：指定输出的位置。</li>
<li>SetPrefix：设置每行日志的前缀。</li>
<li>SetFlags：设置日志属性。</li>
</ul>
<p>log.Logger提供了Print、Panic、Fatal函数来记录日志：</p>
<ul>
<li>Print：打印日志，例如：log.Print(&quot;call Print: line1&quot;)</li>
<li>Panic：打印日志后执行panic(s)，s为日志内容。</li>
<li>Fatal：打印日志后执行os.Exit(1)。</li>
</ul>
<p>Print、Panic、Fatal函数还提供Println、Printf、Panicln、Panicf、Fatalln、Fatalf来格式化打印日志。Print底层调用<code v-pre>fmt.Sprint(v...)</code>，Println底层调用<code v-pre>fmt.Sprintln(v...)</code>，Printf底层调用了<code v-pre>fmt.Sprintf(format, v...)</code>。</p>
<p>标准库log的使用示例（main.go文件）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "log"
    "os"
)

func main() {
    // 输出到文件
    logFile, err := os.Create("./log.log")
    defer logFile.Close()
    if err != nil {
        log.Fatalln("create file log.log failed")
    }
    logger := log.New(logFile, "[Debug] ", log.Lshortfile)
    logger.SetOutput(os.Stdout)
    logger.Print("call Print: line1")
    logger.Println("call Println: line2")

    // 修改日志配置
    logger.SetPrefix("[Info] ")
    logger.SetFlags(log.Ldate)
    logger.SetOutput(os.Stdout)
    logger.Print("Info check stdout")
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下命令执行上述程序：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run main.go
[Debug] main.go:17: call Print: line1
[Debug] main.go:18: call Println: line2
[Info] 2020/11/28 Info check stdout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="glog" tabindex="-1"><a class="header-anchor" href="#glog" aria-hidden="true">#</a> glog</h2>
<p><a href="https://github.com/golang/glog" target="_blank" rel="noopener noreferrer">glog<ExternalLinkIcon/></a>是Google推出的日志包，跟标准库log包一样，是一个轻量级的日志包，使用简单方便，但要比标准库log包提供更多的功能，glog具有如下特性：</p>
<ul>
<li>支持4种日志级别：INFO、WARNING、ERROR、FATAL。</li>
<li>支持命令行选项，例如：<code v-pre>-alsologtostderr</code>、<code v-pre>-log_backtrace_at</code>、<code v-pre>-log_dir</code>、<code v-pre>-logtostderr</code>、<code v-pre>-v</code>等，每个参数实现某种功能。</li>
<li>支持根据文件大小切割日志文件。</li>
<li>支持日志按级别分类输出。</li>
<li>支持V level，V level特性可以使开发者自定义日志级别。</li>
<li>支持vmodule，vmodule可以使开发者对不同的文件使用不同的日志级别。</li>
<li>支持traceLocation，traceLocation可以打印出指定位置的栈信息。</li>
</ul>
<p>kubernetes项目就使用了基于glog封装的klog作为其日志库。</p>
<p><strong>glog使用方法</strong></p>
<p>glog使用非常简单，常见的用法如下。</p>
<ol>
<li>基本用法</li>
</ol>
<p>glog的最常用的使用方法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "flag"

    "github.com/golang/glog"
)

func main() {
    glog.MaxSize = 1024 * 1024 * 1024 // 1G自动分割
    flag.Parse()
    defer glog.Flush()

    glog.Info("This is info message")
    glog.Infof("This is info message: %v", 123)

    glog.Warning("This is warning message")
    glog.Warningf("This is warning message: %v", 123)

    glog.Error("This is error message")
    glog.Errorf("This is error message: %v", 123)

    //glog.Fatal("This is fatal message")
    //glog.Fatalf("This is fatal message: %v", 123)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>glog支持4种日志级别，从低到高依次为：INFO、WARNING、ERROR、FATAL。glog支持命令行参数，在程序中，只需要在使用glog之前调用flag.Parse()即可，支持如下7个命令行参数：</p>
<ul>
<li><code v-pre>-alsologtostderr</code>：同时将日志打印到文件和标准错误输出。</li>
<li><code v-pre>-log_backtrace_at value</code>：指定代码运行到指定行时，把该代码的栈信息打印出来。</li>
<li><code v-pre>-log_dir</code>：指定日志存储的文件夹。</li>
<li><code v-pre>-logtostderr</code>：日志打印到标准错误输出，而不是文件中。</li>
<li><code v-pre>-stderrthreshold value</code>：指定大于或者等于该级别的日志才会被输出到标准错误输出，默认为ERROR。</li>
<li><code v-pre>-v value</code>：指定日志级别。</li>
<li><code v-pre>-vmodule value</code>：对不同的文件使用不同的日志级别。</li>
</ul>
<p>执行上述代码（假设保存在example1.go文件中）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ mkdir -p log &amp;&amp; go run example1.go -log_dir=log -alsologtostderr
I1202 09:43:49.618480   26223 example1.go:14] This is info message
I1202 09:43:49.618781   26223 example1.go:15] This is info message: 123
W1202 09:43:49.618792   26223 example1.go:17] This is warning message
W1202 09:43:49.618830   26223 example1.go:18] This is warning message: 123
E1202 09:43:49.618840   26223 example1.go:20] This is error message
E1202 09:43:49.618877   26223 example1.go:21] This is error message: 123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上命令会同时将日志打印在log目录和标准错误输出中（<code v-pre>-alsologtostderr</code>），log目录下文件列表为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>main.colin.colin.log.ERROR.20201202-081133.24123
main.colin.colin.log.INFO.20201202-081133.24123
main.colin.colin.log.WARNING.20201202-081133.24123
main.ERROR -> main.colin.colin.log.ERROR.20201202-081133.24123
main.INFO -> main.colin.colin.log.INFO.20201202-081133.24123
main.WARNING -> main.colin.colin.log.WARNING.20201202-081133.24123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.INFO文件是一个软链接，链接到最新的INFO级别的日志文件，低优先级的日志文件包含高优先级的日志，例如INFO级别的日志文件中包含WARNING、ERROR、FATAL级别的日志。默认情况下，当单个日志文件达到1.8G时,，glog会对日志文件进行转存：关闭当前的文件，新建日志文件，可以通过glog.MaxSize设置转存阈值。</p>
<p>从上面的输出可以发现，glog的日志输出格式为：<code v-pre>&lt;header&gt;] &lt;message&gt;</code>，其中header的格式为：<code v-pre>Lmmdd hh:mm:ss.uuuuuu threadid file:line</code>：</p>
<ul>
<li>Lmmdd：L代表了glog的日志级别：I -&gt; INFO、W -&gt; WARNING、E -&gt; ERROR、F -&gt; FATAL。</li>
<li>hh:mm:ss.uuuuuu：代表了时间信息，例如10:12:32.995956。</li>
<li>threadid，是进程PID，即os.Getpid()的返回值。</li>
<li>file:line：指明了打印日志的位置：文件名和行号。</li>
</ul>
<p>使用glog.Info、glog.Warning等函数记录日志后，为了提高性能，这些日志会暂存在内存的buffer中，而不是直接写入文件中，只有显式的调用glog.Flush()，数据才会被写入文件。glog的init函数中启动了一个goroutine来周期性的调用glog.Flush()，默认的flush间隔为30秒。如果程序退出，自上次glog.Flush()函数执行之后产生的日志，就会被丢失，所以在程序退出时，需要调用glog.Flush()将日志刷新到磁盘文件中。</p>
<p>这里要注意，调用glog.Fatal函数后，glog会打印日志并退出程序，在程序退出前，会将缓存中的所有日志都写入日志，但是对于glog.Info、glog.Warning、glog.Error函数则不会。</p>
<ol>
<li>vmodule功能</li>
</ol>
<p>glog 最常用的就是 V level 的功能，V越小，说明日志级别越高。示例如下：（保存在example2.go文件中）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "flag"

    "github.com/golang/glog"
)

func main() {
    flag.Parse()
    defer glog.Flush()

    glog.V(3).Info("LEVEL 3 message") // 使用日志级别 3
    glog.V(5).Info("LEVEL 5 message") // 使用日志级别 5
    glog.V(7).Info("LEVEL 7 message") // 使用日志级别 7
    glog.V(8).Info("LEVEL 8 message") // 使用日志级别 8
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述代码：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run example2.go -log_dir=log -alsologtostderr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令不会有任何输出，因为日志级别不够，可以通过<code v-pre>-v</code>设置日志级别：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run example2.go -log_dir=log -alsologtostderr -v=5
I1202 09:52:44.163989   29042 example2.go:13] LEVEL 3 message
I1202 09:52:44.164335   29042 example2.go:14] LEVEL 5 message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，日志级别高于或者等于5（V值小于或者等于5）的日志将被打印出来。</p>
<p>glog还支持对不同的文件使用不同的日志级别（<code v-pre>-vmodule</code>），例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run main.go foo.go -v=3 -log_dir=log -alsologtostderr -vmodule=foo=5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过指定<code v-pre>-vmodule=foo=5</code>参数，可以设置对foo.go文件使用5级别，对其它文件使用3级别。<code v-pre>-vmodule</code>的输入参数省去了.go后缀，语法格式为：<code v-pre>-vmodule=file1=2,file2=1,fs*=3</code>。</p>
<ol>
<li>traceLocation功能</li>
</ol>
<p>traceLocation可以打印出指定位置的栈信息（<code v-pre>-log_backtrace_at=filename:line_number</code>），例如有如下代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"flag"</span>

    <span class="token string">"github.com/golang/glog"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    glog<span class="token punctuation">.</span>MaxSize <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token comment">// 1G自动分割</span>
    flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> glog<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    glog<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"This is info message"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以上代码（保存在example3.go文件中）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run example3.go -log_dir=log -alsologtostderr -log_backtrace_at=example3.go:13
I1202 10:12:41.304582    1340 example3.go:13] This is info message
goroutine 1 [running]:
... 打印backtrace，此处省略 ...
I1202 10:12:41.304779    1340 example3.go:14] This is info message: 123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="logrus介绍" tabindex="-1"><a class="header-anchor" href="#logrus介绍" aria-hidden="true">#</a> logrus介绍</h2>
<p><a href="https://github.com/sirupsen/logrus" target="_blank" rel="noopener noreferrer">logrus<ExternalLinkIcon/></a>是目前Github上star数量最多的日志包，功能强大、性能高效、高度灵活，还提供了自定义插件的功能。很多优秀的开源项目，例如：<code v-pre>docker</code>、<code v-pre>prometheus</code>等都使用了logrus。logrus除了具有日志的基本功能外，还具有如下特性：</p>
<ul>
<li>支持常用的日志级别，logrus支持如下日志级别：Debug、Info、Warn、Error、Fatal和Panic。</li>
<li>可扩展，logrus的hook机制允许使用者通过hook的方式将日志分发到任意地方，例如：本地文件、标准输出、elasticsearch、logstash、kafka等。</li>
<li>支持自定义日志格式，logrus内置了2种格式：JSONFormatter和TextFormatter。除此之外，logrus允许使用者通过实现Formatter接口，来自定义日志格式。</li>
<li>结构化日志记录，logrus的Field机制可以允许使用者自定义日志字段，而不是通过冗长的消息来记录日志。</li>
<li>预设日志字段，logrus的Default Fields机制可以给一部分或者全部日志统一添加共同的日志字段，例如给某次HTTP请求的所有日志添加X-Request-ID字段。</li>
<li>Fatal handlers：logrus允许注册一个或多个handler，当发生fatal级别的日志时调用。当我们的程序需要优雅关闭时，该特性会非常有用。</li>
</ul>
<p>logrus使用方法如下：</p>
<ol>
<li>基本用法</li>
</ol>
<p>logrus可以通过简单的配置，来定义输出、格式或者日志级别等，示例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"os"</span>

    <span class="token string">"github.com/sirupsen/logrus"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// logrus设置</span>
    logrus<span class="token punctuation">.</span><span class="token function">SetFormatter</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>logrus<span class="token punctuation">.</span>JSONFormatter<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    logrus<span class="token punctuation">.</span><span class="token function">SetOutput</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">)</span>
    logrus<span class="token punctuation">.</span><span class="token function">SetLevel</span><span class="token punctuation">(</span>logrus<span class="token punctuation">.</span>WarnLevel<span class="token punctuation">)</span>

    <span class="token comment">// logrus使用</span>
    logrus<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token string">"Useful debugging information."</span><span class="token punctuation">)</span>
    logrus<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"Something noteworthy happened!"</span><span class="token punctuation">)</span>
    logrus<span class="token punctuation">.</span><span class="token function">Warn</span><span class="token punctuation">(</span><span class="token string">"You should probably take a look at this."</span><span class="token punctuation">)</span>
    logrus<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"Something failed but I'm not quitting."</span><span class="token punctuation">)</span>

    logrus<span class="token punctuation">.</span><span class="token function">WithFields</span><span class="token punctuation">(</span>logrus<span class="token punctuation">.</span>Fields<span class="token punctuation">{</span>
        <span class="token string">"animal"</span><span class="token punctuation">:</span> <span class="token string">"walrus"</span><span class="token punctuation">,</span>
        <span class="token string">"size"</span><span class="token punctuation">:</span>   <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"A group of walrus emerges from the ocean"</span><span class="token punctuation">)</span>

    logrus<span class="token punctuation">.</span><span class="token function">WithFields</span><span class="token punctuation">(</span>logrus<span class="token punctuation">.</span>Fields<span class="token punctuation">{</span>
        <span class="token string">"omg"</span><span class="token punctuation">:</span>    <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string">"number"</span><span class="token punctuation">:</span> <span class="token number">122</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Warn</span><span class="token punctuation">(</span><span class="token string">"The group's number increased tremendously!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过logrus.SetFormatter设置输出的日志格式，logrus自带有JSONFormatter和TextFormatter。通过logrus.SetLevel来设置日志级别，通过logrus.SetOutput设置日志输出等。</p>
<p>假设上述代码保存在example1.go文件中，运行代码：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run example1.go
{"level":"warning","msg":"You should probably take a look at this.","time":"2020-12-03T22:35:35+08:00"}
{"level":"error","msg":"Something failed but I'm not quitting.","time":"2020-12-03T22:35:35+08:00"}
{"level":"warning","msg":"The group's number increased tremendously!","number":122,"omg":true,"time":"2020-12-03T22:35:35+08:00"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>Default Fields</li>
</ol>
<p>通常，在一个应用中、或者应用的一部分中，始终附带一些固定的记录字段会很有帮助。比如在处理用户HTTP请求时，上下文中所有的日志都会有request_id。为了避免每次记录日志都要使用：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>logrus.WithFields(logrus.Fields{"request_id”", request_id})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以创建一个logrus.Entry实例，为这个实例设置默认Fields，把logrus.Entry实例设置到记录器Logger，再记录日志时每次都会附带上这些默认的字段。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>logger := log.WithFields(log.Fields{"request_id": request_id})
logger.Info("something happened on that request") // 也会记录request_id
logger.Warn("something not great happened")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>Hook接口</li>
</ol>
<p>logrus具有hook能力，允许我们自定义一些日志处理逻辑，实现一个hook只需要实现如下接口：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// logrus在记录Levels()返回的日志级别的消息时会触发HOOK,
// 按照Fire方法定义的内容修改logrus.Entry.
type Hook interface {
    Levels() []Level
    Fire(*Entry) error
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个简单自定义hook如下，DefaultFieldHook定义会在所有级别的日志消息中加入默认字段<code v-pre>myHook=&quot;MyHookTest&quot;</code>:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type DefaultFieldHook struct {
}

func (hook *DefaultFieldHook) Fire(entry *log.Entry) error {
    entry.Data["myHook"] = " MyHookTest "
    return nil
}

func (hook *DefaultFieldHook) Levels() []log.Level {
    return log.AllLevels
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现了hook之后，只需要调用log.AddHook(hook)即可将自定义的hook注册到logrus中。通过hook可以实现很多强大的日志处理功能，比较常见的用法是，当有指定级别的日志产生时，邮件通知或者告警给相关负责人。</p>
<h2 id="zap包介绍" tabindex="-1"><a class="header-anchor" href="#zap包介绍" aria-hidden="true">#</a> zap包介绍</h2>
<p><a href="https://github.com/uber-go/zap" target="_blank" rel="noopener noreferrer">zap<ExternalLinkIcon/></a>是uber开源的日志包，以高性能著称，很多公司的日志包都是基于zap改造而来。zap除了具有日志基本的功能之外，还具有很多强大的特性：</p>
<ul>
<li>支持常用的日志级别，例如：Debug、Info、Warn、Error、DPanic、Panic、Fatal。</li>
<li>性能非常高，zap具有非常高的性能，适合对性能要求比较高的场景。</li>
<li>像logrus一样，支持结构化的日志记录。</li>
<li>支持预设日志字段。</li>
<li>支持针对特定的日志级别，输出调用堆栈。</li>
<li>支持hook。</li>
</ul>
<h3 id="zap使用方法" tabindex="-1"><a class="header-anchor" href="#zap使用方法" aria-hidden="true">#</a> zap使用方法</h3>
<p><strong>基本用法：</strong></p>
<p>zap使用方法跟其他日志包使用方法比较类似，如下是一个常见的用法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"time"</span>

    <span class="token string">"go.uber.org/zap"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> zap<span class="token punctuation">.</span><span class="token function">NewProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> logger<span class="token punctuation">.</span><span class="token function">Sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// flushes buffer, if any</span>
    url <span class="token operator">:=</span> <span class="token string">"http://marmotedu.com"</span>
    logger<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"failed to fetch URL"</span><span class="token punctuation">,</span>
        zap<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">,</span>
        zap<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">"attempt"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        zap<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span><span class="token string">"backoff"</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    sugar <span class="token operator">:=</span> logger<span class="token punctuation">.</span><span class="token function">Sugar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    sugar<span class="token punctuation">.</span><span class="token function">Infow</span><span class="token punctuation">(</span><span class="token string">"failed to fetch URL"</span><span class="token punctuation">,</span>
        <span class="token string">"url"</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span>
        <span class="token string">"attempt"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token string">"backoff"</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    sugar<span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">"Failed to fetch URL: %s"</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上述代码保存在 <code v-pre>example1.go</code>文件中，运行：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">"level"</span><span class="token operator">:</span><span class="token string">"info"</span><span class="token punctuation">,</span><span class="token property">"ts"</span><span class="token operator">:</span><span class="token number">1607006503.3008754</span><span class="token punctuation">,</span><span class="token property">"caller"</span><span class="token operator">:</span><span class="token string">"zap/example1.go:13"</span><span class="token punctuation">,</span><span class="token property">"msg"</span><span class="token operator">:</span><span class="token string">"failed to fetch URL"</span><span class="token punctuation">,</span><span class="token property">"url"</span><span class="token operator">:</span><span class="token string">"http://marmotedu.com"</span><span class="token punctuation">,</span><span class="token property">"attempt"</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token property">"backoff"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">"level"</span><span class="token operator">:</span><span class="token string">"info"</span><span class="token punctuation">,</span><span class="token property">"ts"</span><span class="token operator">:</span><span class="token number">1607006503.3009226</span><span class="token punctuation">,</span><span class="token property">"caller"</span><span class="token operator">:</span><span class="token string">"zap/example1.go:20"</span><span class="token punctuation">,</span><span class="token property">"msg"</span><span class="token operator">:</span><span class="token string">"failed to fetch URL"</span><span class="token punctuation">,</span><span class="token property">"url"</span><span class="token operator">:</span><span class="token string">"http://marmotedu.com"</span><span class="token punctuation">,</span><span class="token property">"attempt"</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token property">"backoff"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">"level"</span><span class="token operator">:</span><span class="token string">"info"</span><span class="token punctuation">,</span><span class="token property">"ts"</span><span class="token operator">:</span><span class="token number">1607006503.300958</span><span class="token punctuation">,</span><span class="token property">"caller"</span><span class="token operator">:</span><span class="token string">"zap/example1.go:25"</span><span class="token punctuation">,</span><span class="token property">"msg"</span><span class="token operator">:</span><span class="token string">"Failed to fetch URL: http://marmotedu.com"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认的日志输出格式为JSON格式，并记录了文件名和行号。</p>
<p>上述代码通过<code v-pre>zap.NewProduction()</code>创建了一个logger，zap还提供了<code v-pre>zap.NewExample()</code>、<code v-pre>zap.NewDevelopment()</code>来快速创建一个logger，不同方法创建的logger具有不同的设置，Example适合用在测试代码中，Development在开发环境中使用，Production用在生产环境。如果想自定义logger，可以调用<code v-pre>zap.New()</code>方法来创建。logger提供了Debug、Info、Warn、Error、Panic、Fatal等方法，用来记录不同级别的日志。在程序退出时，注意要调用<code v-pre>defer logger.Sync()</code>将缓存中的日志刷新到磁盘文件中。</p>
<p><strong>当我们对日志的性能要求比较高时，可以使用Logger而非SugaredLogger，Logger性能更好，内存分配次数更少。</strong> 为了提高性能，Logger没有使用<code v-pre>interface</code>和反射，并且Logger只支持结构化的日志，所以在使用Logger时，需要指定具体的类型和key-value格式的日志字段，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>logger<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"failed to fetch URL"</span><span class="token punctuation">,</span>
    zap<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">,</span>
    zap<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">"attempt"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    zap<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span><span class="token string">"backoff"</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果觉得Logger的日志格式比较繁琐，可以使用更加便捷的<code v-pre>SugaredLogger</code>，调用<code v-pre>logger.Sugar()</code>即可创建<code v-pre>SugaredLogger</code>。<code v-pre>SugaredLogger</code>的使用比<code v-pre>Logger</code>简单，但性能比Logger低 50% 左右，可以用在调用次数不高的函数中，调用方式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>sugar <span class="token operator">:=</span> logger<span class="token punctuation">.</span><span class="token function">Sugar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    sugar<span class="token punctuation">.</span><span class="token function">Infow</span><span class="token punctuation">(</span><span class="token string">"failed to fetch URL"</span><span class="token punctuation">,</span>
    <span class="token string">"url"</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span>
    <span class="token string">"attempt"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token string">"backoff"</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
sugar<span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">"Failed to fetch URL: %s"</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定制Logger</strong></p>
<p>可以使用<code v-pre>NexExample()/NewDevelopment()/NewProduction()</code>函数创建默认的Logger，每种方法创建的Logger配置不一样，也可以创建一个定制化的Logger，创建方式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"encoding/json"</span>

    <span class="token string">"go.uber.org/zap"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rawJSON <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">`{
    "level":"debug",
    "encoding":"json",
    "outputPaths": ["stdout", "test.log"],
    "errorOutputPaths": ["stderr"],
    "initialFields":{"name":"dj"},
    "encoderConfig": {
      "messageKey": "message",
      "levelKey": "level",
      "levelEncoder": "lowercase"
    }
  }`</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> cfg zap<span class="token punctuation">.</span>Config
    <span class="token keyword">if</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>rawJSON<span class="token punctuation">,</span> <span class="token operator">&amp;</span>cfg<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    logger<span class="token punctuation">,</span> err <span class="token operator">:=</span> cfg<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> logger<span class="token punctuation">.</span><span class="token function">Sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    logger<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"server start work successfully!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上示例调用zap.Config的Build方法创建了一个输出到标准输出和文件test.log的Logger，将上述代码保存在<code v-pre>example2.go</code>文件中，运行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run example2.go
<span class="token punctuation">{</span><span class="token string">"level"</span><span class="token builtin class-name">:</span><span class="token string">"info"</span>,<span class="token string">"message"</span><span class="token builtin class-name">:</span><span class="token string">"server start work successfully!"</span>,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"dj"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zap.Config定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Level AtomicLevel
    Development <span class="token builtin">bool</span>
    DisableCaller <span class="token builtin">bool</span>
    DisableStacktrace <span class="token builtin">bool</span>
    Sampling <span class="token operator">*</span>SamplingConfig
    Encoding <span class="token builtin">string</span>
    EncoderConfig zapcore<span class="token punctuation">.</span>EncoderConfig
    OutputPaths <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    ErrorOutputPaths <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    InitialFields <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Config结构体，各字段说明如下：</p>
<ul>
<li>Level：日志级别。</li>
<li>Development：设置Logger的模式为development模式。</li>
<li>DisableCaller：禁用调用信息. 该字段值为 true 时, 日志中将不再显示该日志所在的函数调用信息。</li>
<li>DisableStacktrace：禁用自动堆栈跟踪捕获。</li>
<li>Sampling：流控配置, 也叫采样. 单位是每秒钟, 作用是限制日志在每秒钟内的输出数量, 以防止CPU和IO被过度占用。</li>
<li>Encoding：指定日志编码器, 目前仅支持两种编码器：console和json，默认为json。</li>
<li>EncoderConfig：编码配置。</li>
<li>OutputPaths：配置日志标准输出，可以配置多个日志输出路径, 一般情况可以仅配置标准输出或输出到文件, 如有需求的话, 也可以两者同时配置。</li>
<li>ErrorOutputPaths：错误输出路径，可以是多个。</li>
<li>InitialFields：初始化字段配置, 该配置的字段会以结构化的形式打印在每条日志输出中。</li>
</ul>
<p>调用zap.Config的Build()方法，可以使用zap.Config配置创建一个Logger。</p>
<p>其中EncoderConfig为编码配置：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> EncoderConfig <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    MessageKey    <span class="token builtin">string</span> <span class="token string">`json:"messageKey" yaml:"messageKey"`</span>
    LevelKey      <span class="token builtin">string</span> <span class="token string">`json:"levelKey" yaml:"levelKey"`</span>
    TimeKey       <span class="token builtin">string</span> <span class="token string">`json:"timeKey" yaml:"timeKey"`</span>
    NameKey       <span class="token builtin">string</span> <span class="token string">`json:"nameKey" yaml:"nameKey"`</span>
    CallerKey     <span class="token builtin">string</span> <span class="token string">`json:"callerKey" yaml:"callerKey"`</span>
    FunctionKey   <span class="token builtin">string</span> <span class="token string">`json:"functionKey" yaml:"functionKey"`</span>
    StacktraceKey <span class="token builtin">string</span> <span class="token string">`json:"stacktraceKey" yaml:"stacktraceKey"`</span>
    LineEnding    <span class="token builtin">string</span> <span class="token string">`json:"lineEnding" yaml:"lineEnding"`</span>
    EncodeLevel    LevelEncoder    <span class="token string">`json:"levelEncoder" yaml:"levelEncoder"`</span>
    EncodeTime     TimeEncoder     <span class="token string">`json:"timeEncoder" yaml:"timeEncoder"`</span>
    EncodeDuration DurationEncoder <span class="token string">`json:"durationEncoder" yaml:"durationEncoder"`</span>
    EncodeCaller   CallerEncoder   <span class="token string">`json:"callerEncoder" yaml:"callerEncoder"`</span>
    EncodeName NameEncoder <span class="token string">`json:"nameEncoder" yaml:"nameEncoder"`</span>
    ConsoleSeparator <span class="token builtin">string</span> <span class="token string">`json:"consoleSeparator" yaml:"consoleSeparator"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的设置如下：</p>
<ul>
<li>MessageKey：日志中信息的键名，默认为msg。</li>
<li>LevelKey：日志中级别的键名，默认为level。</li>
<li>EncodeLevel：日志中级别的格式，默认为小写，如debug/info。</li>
</ul>
<ol>
<li>选项</li>
</ol>
<p>zap支持多种选项，选项的使用方式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"go.uber.org/zap"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> zap<span class="token punctuation">.</span><span class="token function">NewProduction</span><span class="token punctuation">(</span>zap<span class="token punctuation">.</span><span class="token function">AddCaller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> logger<span class="token punctuation">.</span><span class="token function">Sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    logger<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上述代码保存在example3.go中，执行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run example3.go
{"level":"info","ts":1607010625.6718638,"caller":"zap/example3.go:9","msg":"hello world"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述日志输出了日志的调用信息（文件名:行号）<code v-pre>&quot;caller&quot;:&quot;zap/example3.go:9&quot;</code>。zap提供了多个选项可供选择：</p>
<ul>
<li><code v-pre>AddStacktrace(lvl zapcore.LevelEnabler)</code>：用来在指定级别及以上级别输出调用堆栈。</li>
<li><code v-pre>zap.WithCaller(enabled bool)</code>：指定是否在日志输出内容中增加文件名和行号。</li>
<li><code v-pre>zap.AddCaller()</code>：与zap.WithCaller(true)等价，指定在日志输出内容中增加行号和文件名。</li>
<li><code v-pre>zap. AddCallerSkip(skip int)</code>：指定在调用栈中跳过的调用深度，否则通过调用栈获得的行号可能总是日志组件中的行号。</li>
<li><code v-pre>zap. IncreaseLevel(lvl zapcore.LevelEnabler)</code>：提高日志级别，如果传入的lvl比当前logger的级别低，则不会改变日志级别。</li>
<li><code v-pre>ErrorOutput(w zapcore.WriteSyncer)</code>：指定日志组件中出现异常时的输出位置。</li>
<li><code v-pre>Fields(fs ...Field)</code>：添加公共字段。</li>
<li><code v-pre>Hooks(hooks ...func(zapcore.Entry) error)</code>：注册钩子函数，用来在日志打印时同时调用hook方法。</li>
<li><code v-pre>WrapCore(f func(zapcore.Core) zapcore.Core)</code>：替换Logger的zapcore.Core。 -<code v-pre> Development()</code>：将Logger修改为Development模式。</li>
</ul>
<p><strong>预设日志字段</strong></p>
<p>如果每条日志都期望加一些公共字段，例如requestID，可以在创建Logger时使用<code v-pre>Fields(fs ...Field)</code>选项，如下代码中，添加了requestID、userID公共字段到每条日志中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"go.uber.org/zap"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger <span class="token operator">:=</span> zap<span class="token punctuation">.</span><span class="token function">NewExample</span><span class="token punctuation">(</span>zap<span class="token punctuation">.</span><span class="token function">Fields</span><span class="token punctuation">(</span>
        zap<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">"userID"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        zap<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"requestID"</span><span class="token punctuation">,</span> <span class="token string">"fbf54504"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span>

    logger<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token string">"This is a debug message"</span><span class="token punctuation">)</span>
    logger<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"This is a info message"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上述代码保存到<code v-pre>preset_field.go</code>文件中，运行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run preset_field.go
<span class="token punctuation">{</span><span class="token string">"level"</span><span class="token builtin class-name">:</span><span class="token string">"debug"</span>,<span class="token string">"msg"</span><span class="token builtin class-name">:</span><span class="token string">"This is a debug message"</span>,<span class="token string">"userID"</span>:10,<span class="token string">"requestID"</span><span class="token builtin class-name">:</span><span class="token string">"fbf54504"</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">"level"</span><span class="token builtin class-name">:</span><span class="token string">"info"</span>,<span class="token string">"msg"</span><span class="token builtin class-name">:</span><span class="token string">"This is a info message"</span>,<span class="token string">"userID"</span>:10,<span class="token string">"requestID"</span><span class="token builtin class-name">:</span><span class="token string">"fbf54504"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>全局Logger：</strong></p>
<p>zap提供了2个全局Logger，可以方便我们调用：</p>
<ul>
<li><code v-pre>*zap.Logger</code>：可通过zap.L()获得，提供了Debug()、Info()、Warn()、Error()、Panic()、DPanic()、Fatal()方法来记录日志。</li>
<li><code v-pre>*zap.SugaredLogger</code>：可通过zap.S()获得，提供了Debugf()、Debugw()、Infof()、Infow()、Warnf()、Warnw()、Errorf()、Errorw()、Panicf()、Panicw()、DPanicf()、DPanicw()、Fatalf()、Fatalw()方法来记录日志。</li>
</ul>
<p>默认的全局Logger不会记录任何日志，它是一个无用的Logger，例如zap.L()返回了名为<code v-pre>_globalL</code>的Logger，<code v-pre>_globalL</code>定义为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>_globalL  <span class="token operator">=</span> <span class="token function">NewNop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">NewNop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Logger <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Logger<span class="token punctuation">{</span>
        core<span class="token punctuation">:</span>        zapcore<span class="token punctuation">.</span><span class="token function">NewNopCore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        errorOutput<span class="token punctuation">:</span> zapcore<span class="token punctuation">.</span><span class="token function">AddSync</span><span class="token punctuation">(</span>ioutil<span class="token punctuation">.</span>Discard<span class="token punctuation">)</span><span class="token punctuation">,</span>
        addStack<span class="token punctuation">:</span>    zapcore<span class="token punctuation">.</span>FatalLevel <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>zapcore.NewNopCore()</code>函数定义为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> nopCore <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// NewNopCore returns a no-op Core.</span>
<span class="token keyword">func</span> <span class="token function">NewNopCore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Core                                        <span class="token punctuation">{</span> <span class="token keyword">return</span> nopCore<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>nopCore<span class="token punctuation">)</span> <span class="token function">Enabled</span><span class="token punctuation">(</span>Level<span class="token punctuation">)</span> <span class="token builtin">bool</span>                            <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>n nopCore<span class="token punctuation">)</span> <span class="token function">With</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Field<span class="token punctuation">)</span> Core                           <span class="token punctuation">{</span> <span class="token keyword">return</span> n <span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>nopCore<span class="token punctuation">)</span> <span class="token function">Check</span><span class="token punctuation">(</span><span class="token boolean">_</span> Entry<span class="token punctuation">,</span> ce <span class="token operator">*</span>CheckedEntry<span class="token punctuation">)</span> <span class="token operator">*</span>CheckedEntry <span class="token punctuation">{</span> <span class="token keyword">return</span> ce <span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>nopCore<span class="token punctuation">)</span> <span class="token function">Write</span><span class="token punctuation">(</span>Entry<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Field<span class="token punctuation">)</span> <span class="token builtin">error</span>                    <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">nil</span> <span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>nopCore<span class="token punctuation">)</span> <span class="token function">Sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>                                   <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">nil</span> <span class="token punctuation">}</span>

<span class="token comment">// NewCore creates a Core that writes logs to a WriteSyncer.</span>
<span class="token keyword">func</span> <span class="token function">NewCore</span><span class="token punctuation">(</span>enc Encoder<span class="token punctuation">,</span> ws WriteSyncer<span class="token punctuation">,</span> enab LevelEnabler<span class="token punctuation">)</span> Core <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>ioCore<span class="token punctuation">{</span>
        LevelEnabler<span class="token punctuation">:</span> enab<span class="token punctuation">,</span>
        enc<span class="token punctuation">:</span>          enc<span class="token punctuation">,</span>
        out<span class="token punctuation">:</span>          ws<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到NewNop()创建一个不记录任何日志、任何内部错误、不执行任何钩子的Logger。可以使用ReplaceGlobals函数将全局Logger替换为我们创建的Logger，例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import "go.uber.org/zap"

func main() {
    zap.L().Info("default global Logger")
    zap.S().Info("default global SugaredLogger")

    logger := zap.NewExample()
    defer logger.Sync()

    zap.ReplaceGlobals(logger)
    zap.L().Info("replaced global Logger")
    zap.S().Info("replaced global SugaredLogger")
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设上述代码保存在<code v-pre>global_logger.go</code>文件中，运行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run global_logger.go
{"level":"info","msg":"replaced global Logger"}
{"level":"info","msg":"replaced global SugaredLogger"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到在<code v-pre>zap.ReplaceGlobals(logger)</code>之前的日志，并没有被打印出来。</p>
<h2 id="其它开源包" tabindex="-1"><a class="header-anchor" href="#其它开源包" aria-hidden="true">#</a> 其它开源包</h2>
<p>还有很多其它优秀的开源日志包供我们选择，例如：log15、zerolog、seelog、apex/log、go-logging等。你可以在开发中，都详加调研，选择一个适合自己的日志包。</p>
<h2 id="开源日志包选择" tabindex="-1"><a class="header-anchor" href="#开源日志包选择" aria-hidden="true">#</a> 开源日志包选择</h2>
<p>我们介绍了很多日志包，每种日志包使用的场景不同，你可以根据自己的需求结合日志包的特性进行选择：</p>
<ul>
<li><strong>标准库log包：</strong> 标准库log包不支持日志级别、日志分割、日志格式等功能，所以在大型项目中很少直接使用，通常用于一些短小的程序，比如：用于生成JWT Token的main.go文件中。标准库日志包也很适合一些简短的代码，用于快速调试和验证。</li>
<li><strong>glog：</strong> glog实现了日志包的基本功能，对于一些对日志功能要求不多的小型项目非常适合。</li>
<li><strong>logrus：</strong> logrus功能强大，不仅实现了日志包的基本功能，还有很多高级特性，适合一些大型项目，尤其是需要结构化日志记录的项目。</li>
<li><strong>zap：</strong> zap提供了很强大的日志功能，性能高，内存分配次数少，适合对日志性能要求很高的项目。另外，zap包中的子包zapcore，提供了很多底层的日志接口，适合用来做二次封装。例如 iam 项目作者 就基于zap和zapcore封装了<a href="https://github.com/marmotedu/log" target="_blank" rel="noopener noreferrer">marmotedu/log<ExternalLinkIcon/></a>日志包，该日志包可以很好的兼容glog，封装背景是因为在做容器云平台开发时，发现kubernetes源码中大量使用了glog，需要日志包能够兼容glog。</li>
</ul>
<p>接下来，我们来学习如何从零开始开发出一个日志包：</p>
<h2 id="从0编写一个日志包" tabindex="-1"><a class="header-anchor" href="#从0编写一个日志包" aria-hidden="true">#</a> 从0编写一个日志包</h2>
<p>接下来，我会向你展示如何快速编写一个具备基本功能的日志包，让你通过这个简短的日志包实现掌握日志包的核心设计思路。该日志包主要实现以下几个功能：</p>
<ul>
<li>支持自定义配置。</li>
<li>支持文件名和行号。</li>
<li>支持日志级别 Debug、Info、Warn、Error、Panic、Fatal。</li>
<li>支持输出到本地文件和标准输出。</li>
<li>支持JSON和TEXT格式的日志输出，支持自定义日志格式。</li>
<li>支持选项模式。</li>
</ul>
<p>日志包名称为<code v-pre>cuslog</code>，示例项目完整代码存放在 <a href="https://github.com/marmotedu/gopractise-demo/tree/main/log/cuslog" target="_blank" rel="noopener noreferrer">cuslog<ExternalLinkIcon/></a>。</p>
<p><strong>具体实现分为以下四个步骤：</strong></p>
<ol>
<li>定义：定义日志级别和日志选项。</li>
<li>创建：创建Logger及各级别日志打印方法。</li>
<li>写入：将日志输出到支持的输出中。</li>
<li>自定义：自定义日志输出格式。</li>
</ol>
<h3 id="定义日志级别和日志选项" tabindex="-1"><a class="header-anchor" href="#定义日志级别和日志选项" aria-hidden="true">#</a> 定义日志级别和日志选项</h3>
<p>一个基本的日志包，首先需要定义好日志级别和日志选项。本示例将定义代码保存在<a href="https://github.com/marmotedu/gopractise-demo/blob/main/log/cuslog/options.go" target="_blank" rel="noopener noreferrer">options.go<ExternalLinkIcon/></a>文件中。</p>
<p>可以通过如下方式定义日志级别：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Level <span class="token builtin">uint8</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    DebugLevel Level <span class="token operator">=</span> <span class="token boolean">iota</span>
    InfoLevel
    WarnLevel
    ErrorLevel
    PanicLevel
    FatalLevel
<span class="token punctuation">)</span>

<span class="token keyword">var</span> LevelNameMapping <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span>Level<span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
    DebugLevel<span class="token punctuation">:</span> <span class="token string">"DEBUG"</span><span class="token punctuation">,</span>
    InfoLevel<span class="token punctuation">:</span>  <span class="token string">"INFO"</span><span class="token punctuation">,</span>
    WarnLevel<span class="token punctuation">:</span>  <span class="token string">"WARN"</span><span class="token punctuation">,</span>
    ErrorLevel<span class="token punctuation">:</span> <span class="token string">"ERROR"</span><span class="token punctuation">,</span>
    PanicLevel<span class="token punctuation">:</span> <span class="token string">"PANIC"</span><span class="token punctuation">,</span>
    FatalLevel<span class="token punctuation">:</span> <span class="token string">"FATAL"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在日志输出时，要通过对比开关级别和输出级别的大小，来决定是否输出，所以日志级别Level要定义成方便比较的数值类型。几乎所有的日志包都是用常量计数器<code v-pre>iota</code>来定义日志级别。</p>
<p>另外，因为要在日志输出中，输出可读的日志级别（例如输出INFO而不是1），所以需要有Level到Level Name的映射LevelNameMapping，LevelNameMapping会在格式化时用到。</p>
<p>接下来看定义日志选项。日志需要是可配置的，方便开发者根据不同的环境设置不同的日志行为，比较常见的配置选项为：</p>
<ul>
<li>日志级别。</li>
<li>输出位置，例如标准输出或者文件。</li>
<li>输出格式，例如JSON或者Text。</li>
<li>是否开启文件名和行号。</li>
</ul>
<p>本示例的日志选项定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> options <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    output        io<span class="token punctuation">.</span>Writer
    level         Level
    stdLevel      Level
    formatter     Formatter
    disableCaller <span class="token builtin">bool</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了灵活地设置日志的选项，你可以通过选项模式，来对日志选项进行设置：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Option <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>options<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">initOptions</span><span class="token punctuation">(</span>opts <span class="token operator">...</span>Option<span class="token punctuation">)</span> <span class="token punctuation">(</span>o <span class="token operator">*</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    o <span class="token operator">=</span> <span class="token operator">&amp;</span>options<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> opt <span class="token operator">:=</span> <span class="token keyword">range</span> opts <span class="token punctuation">{</span>
        <span class="token function">opt</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> o<span class="token punctuation">.</span>output <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        o<span class="token punctuation">.</span>output <span class="token operator">=</span> os<span class="token punctuation">.</span>Stderr
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> o<span class="token punctuation">.</span>formatter <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        o<span class="token punctuation">.</span>formatter <span class="token operator">=</span> <span class="token operator">&amp;</span>TextFormatter<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithLevel</span><span class="token punctuation">(</span>level Level<span class="token punctuation">)</span> Option <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>o <span class="token operator">*</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        o<span class="token punctuation">.</span>level <span class="token operator">=</span> level
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">SetOptions</span><span class="token punctuation">(</span>opts <span class="token operator">...</span>Option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token punctuation">.</span><span class="token function">SetOptions</span><span class="token punctuation">(</span>opts<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>logger<span class="token punctuation">)</span> <span class="token function">SetOptions</span><span class="token punctuation">(</span>opts <span class="token operator">...</span>Option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> l<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> opt <span class="token operator">:=</span> <span class="token keyword">range</span> opts <span class="token punctuation">{</span>
        <span class="token function">opt</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>opt<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具有选项模式的日志包，可通过以下方式，来动态地修改日志的选项：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cuslog.SetOptions(cuslog.WithLevel(cuslog.DebugLevel))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以根据需要，对每一个日志选项创建设置函数 <code v-pre>WithXXXX</code> 。这个示例日志包支持如下选项设置函数：</p>
<ul>
<li>WithOutput（output io.Writer）：设置输出位置。</li>
<li>WithLevel（level Level）：设置输出级别。</li>
<li>WithFormatter（formatter Formatter）：设置输出格式。</li>
<li>WithDisableCaller（caller bool）：设置是否打印文件名和行号。</li>
</ul>
<h3 id="创建logger及各级别日志打印方法" tabindex="-1"><a class="header-anchor" href="#创建logger及各级别日志打印方法" aria-hidden="true">#</a> 创建Logger及各级别日志打印方法</h3>
<p>为了打印日志，我们需要根据日志配置，创建一个Logger，然后通过调用Logger的日志打印方法，完成各级别日志的输出。本示例将创建代码保存在<a href="https://github.com/marmotedu/gopractise-demo/blob/main/log/cuslog/logger.go" target="_blank" rel="noopener noreferrer">logger.go<ExternalLinkIcon/></a>文件中。</p>
<p>可以通过如下方式创建<code v-pre>Logger</code>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">var</span> std <span class="token operator">=</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> logger <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    opt       <span class="token operator">*</span>options
    mu        sync<span class="token punctuation">.</span>Mutex
    entryPool <span class="token operator">*</span>sync<span class="token punctuation">.</span>Pool
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span>opts <span class="token operator">...</span>Option<span class="token punctuation">)</span> <span class="token operator">*</span>logger <span class="token punctuation">{</span>
    logger <span class="token operator">:=</span> <span class="token operator">&amp;</span>logger<span class="token punctuation">{</span>opt<span class="token punctuation">:</span> <span class="token function">initOptions</span><span class="token punctuation">(</span>opts<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    logger<span class="token punctuation">.</span>entryPool <span class="token operator">=</span> <span class="token operator">&amp;</span>sync<span class="token punctuation">.</span>Pool<span class="token punctuation">{</span>New<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">entry</span><span class="token punctuation">(</span>logger<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> logger
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，定义了一个Logger，并实现了创建Logger的New函数。日志包都会有一个默认的全局Logger，本示例通过 <code v-pre>var std = New()</code> 创建了一个全局的默认Logger。<code v-pre>cuslog.Debug</code>、<code v-pre>cuslog.Info</code>和<code v-pre>cuslog.Warnf</code>等函数，则是通过调用<code v-pre>std Logger</code>所提供的方法来打印日志的。</p>
<p>定义了一个Logger之后，还需要给该Logger添加最核心的日志打印方法，要提供所有支持级别的日志打印方法。</p>
<p>如果日志级别是Xyz，则通常需要提供两类方法，分别是非格式化方法<code v-pre>Xyz(args ...interface{})</code>和格式化方法<code v-pre>Xyzf(format string, args ...interface{})</code>，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>logger<span class="token punctuation">)</span> <span class="token function">Debug</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>DebugLevel<span class="token punctuation">,</span> FmtEmptySeparate<span class="token punctuation">,</span> args<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>logger<span class="token punctuation">)</span> <span class="token function">Debugf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>DebugLevel<span class="token punctuation">,</span> format<span class="token punctuation">,</span> args<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本示例实现了如下方法：Debug、Debugf、Info、Infof、Warn、Warnf、Error、Errorf、Panic、Panicf、Fatal、Fatalf。更详细的实现，你可以参考 <a href="https://github.com/marmotedu/gopractise-demo/blob/main/log/cuslog/logger.go" target="_blank" rel="noopener noreferrer">cuslog/logger.go<ExternalLinkIcon/></a>。</p>
<p>这里要注意，Panic、Panicf要调用panic()函数，Fatal、Fatalf函数要调用 <code v-pre>os.Exit(1)</code> 函数。</p>
<h3 id="将日志输出到支持的输出中" tabindex="-1"><a class="header-anchor" href="#将日志输出到支持的输出中" aria-hidden="true">#</a> 将日志输出到支持的输出中</h3>
<p>调用日志打印函数之后，还需要将这些日志输出到支持的输出中，所以需要实现<code v-pre>write</code>函数，它的写入逻辑保存在<a href="https://github.com/marmotedu/gopractise-demo/blob/main/log/cuslog/entry.go" target="_blank" rel="noopener noreferrer">entry.go<ExternalLinkIcon/></a>文件中。实现方式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Entry <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    logger <span class="token operator">*</span>logger
    Buffer <span class="token operator">*</span>bytes<span class="token punctuation">.</span>Buffer
    Map    <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    Level  Level
    Time   time<span class="token punctuation">.</span>Time
    File   <span class="token builtin">string</span>
    Line   <span class="token builtin">int</span>
    Func   <span class="token builtin">string</span>
    Format <span class="token builtin">string</span>
    Args   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>Entry<span class="token punctuation">)</span> <span class="token function">write</span><span class="token punctuation">(</span>level Level<span class="token punctuation">,</span> format <span class="token builtin">string</span><span class="token punctuation">,</span> args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> e<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>level <span class="token operator">></span> level <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    e<span class="token punctuation">.</span>Time <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span>Level <span class="token operator">=</span> level
    e<span class="token punctuation">.</span>Format <span class="token operator">=</span> format
    e<span class="token punctuation">.</span>Args <span class="token operator">=</span> args
    <span class="token keyword">if</span> <span class="token operator">!</span>e<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>disableCaller <span class="token punctuation">{</span>
        <span class="token keyword">if</span> pc<span class="token punctuation">,</span> file<span class="token punctuation">,</span> line<span class="token punctuation">,</span> ok <span class="token operator">:=</span> runtime<span class="token punctuation">.</span><span class="token function">Caller</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span>File <span class="token operator">=</span> <span class="token string">"???"</span>
            e<span class="token punctuation">.</span>Func <span class="token operator">=</span> <span class="token string">"???"</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span>File<span class="token punctuation">,</span> e<span class="token punctuation">.</span>Line<span class="token punctuation">,</span> e<span class="token punctuation">.</span>Func <span class="token operator">=</span> file<span class="token punctuation">,</span> line<span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">FuncForPC</span><span class="token punctuation">(</span>pc<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            e<span class="token punctuation">.</span>Func <span class="token operator">=</span> e<span class="token punctuation">.</span>Func<span class="token punctuation">[</span>strings<span class="token punctuation">.</span><span class="token function">LastIndex</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Func<span class="token punctuation">,</span> <span class="token string">"/"</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    e<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span><span class="token function">writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>Entry<span class="token punctuation">)</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token boolean">_</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>formatter<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>Entry<span class="token punctuation">)</span> <span class="token function">writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Buffer<span class="token punctuation">.</span><span class="token function">Bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>mu<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>Entry<span class="token punctuation">)</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span>Args<span class="token punctuation">,</span> e<span class="token punctuation">.</span>Line<span class="token punctuation">,</span> e<span class="token punctuation">.</span>File<span class="token punctuation">,</span> e<span class="token punctuation">.</span>Format<span class="token punctuation">,</span> e<span class="token punctuation">.</span>Func <span class="token operator">=</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">""</span>
    e<span class="token punctuation">.</span>Buffer<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>entryPool<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码，首先定义了一个Entry结构体类型，该类型用来保存所有的日志信息，即日志配置和日志内容。写入逻辑都是围绕Entry类型的实例来完成的。</p>
<p>用Entry的write方法来完成日志的写入，在write方法中，会首先判断日志的输出级别和开关级别，如果输出级别小于开关级别，则直接返回，不做任何记录。</p>
<p>在write中，还会判断是否需要记录文件名和行号，如果需要则调用 <code v-pre>runtime.Caller()</code> 来获取文件名和行号，调用 <code v-pre>runtime.Caller()</code> 时，要注意传入正确的栈深度。</p>
<p>write函数中调用 <code v-pre>e.format</code> 来格式化日志，调用 <code v-pre>e.writer</code> 来写入日志，在创建Logger传入的日志配置中，指定了输出位置 <code v-pre>output io.Writer</code> ，output类型为 <code v-pre>io.Writer</code> ，示例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Writer <span class="token keyword">interface</span> <span class="token punctuation">{</span>    
    <span class="token function">Write</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>io.Writer实现了Write方法可供写入，所以只需要调用<code v-pre>e.logger.opt.output.Write(e.Buffer.Bytes())</code>即可将日志写入到指定的位置中。最后，会调用release()方法来清空缓存和对象池。至此，我们就完成了日志的记录和写入。</p>
<h3 id="自定义日志输出格式" tabindex="-1"><a class="header-anchor" href="#自定义日志输出格式" aria-hidden="true">#</a> 自定义日志输出格式</h3>
<p>cuslog包支持自定义输出格式，并且内置了JSON和 Text 格式的 <code v-pre>Formatter</code>。<code v-pre>Formatter</code> 接口定义为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Formatter <span class="token keyword">interface</span> <span class="token punctuation">{</span>    
    <span class="token function">Format</span><span class="token punctuation">(</span>entry <span class="token operator">*</span>Entry<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cuslog内置的Formatter有两个：<a href="https://github.com/marmotedu/gopractise-demo/blob/main/log/cuslog/formatter_json.go" target="_blank" rel="noopener noreferrer">JSON<ExternalLinkIcon/></a>和<a href="https://github.com/marmotedu/gopractise-demo/blob/main/log/cuslog/formatter_text.go" target="_blank" rel="noopener noreferrer">TEXT<ExternalLinkIcon/></a>。</p>
<h3 id="测试日志包" tabindex="-1"><a class="header-anchor" href="#测试日志包" aria-hidden="true">#</a> 测试日志包</h3>
<p>cuslog日志包开发完成之后，可以编写测试代码，调用<code v-pre>cuslog</code>包来测试<code v-pre>cuslog</code>包，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"log"</span>
    <span class="token string">"os"</span>

    <span class="token string">"github.com/marmotedu/gopractise-demo/log/cuslog"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cuslog<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"std log"</span><span class="token punctuation">)</span>
    cuslog<span class="token punctuation">.</span><span class="token function">SetOptions</span><span class="token punctuation">(</span>cuslog<span class="token punctuation">.</span><span class="token function">WithLevel</span><span class="token punctuation">(</span>cuslog<span class="token punctuation">.</span>DebugLevel<span class="token punctuation">)</span><span class="token punctuation">)</span>
    cuslog<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token string">"change std log to debug level"</span><span class="token punctuation">)</span>
    cuslog<span class="token punctuation">.</span><span class="token function">SetOptions</span><span class="token punctuation">(</span>cuslog<span class="token punctuation">.</span><span class="token function">WithFormatter</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cuslog<span class="token punctuation">.</span>JsonFormatter<span class="token punctuation">{</span>IgnoreBasicFields<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    cuslog<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token string">"log in json format"</span><span class="token punctuation">)</span>
    cuslog<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"another log in json format"</span><span class="token punctuation">)</span>

    <span class="token comment">// 输出到文件</span>
    fd<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">"test.log"</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_APPEND<span class="token operator">|</span>os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token punctuation">,</span> <span class="token number">0644</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">"create file test.log failed"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> fd<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    l <span class="token operator">:=</span> cuslog<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>cuslog<span class="token punctuation">.</span><span class="token function">WithLevel</span><span class="token punctuation">(</span>cuslog<span class="token punctuation">.</span>InfoLevel<span class="token punctuation">)</span><span class="token punctuation">,</span>
        cuslog<span class="token punctuation">.</span><span class="token function">WithOutput</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span><span class="token punctuation">,</span>
        cuslog<span class="token punctuation">.</span><span class="token function">WithFormatter</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cuslog<span class="token punctuation">.</span>JsonFormatter<span class="token punctuation">{</span>IgnoreBasicFields<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    l<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"custom log with json formatter"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上述代码保存在main.go文件中，运行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run example.go
<span class="token number">2020</span>-12-04T10:32:12+08:00 INFO example.go:11 std log
<span class="token number">2020</span>-12-04T10:32:12+08:00 DEBUG example.go:13 change std log to debug level
<span class="token punctuation">{</span><span class="token string">"file"</span><span class="token builtin class-name">:</span><span class="token string">"/home/colin/workspace/golang/src/github.com/marmotedu/gopractise-demo/log/cuslog/example/example.go:15"</span>,<span class="token string">"func"</span><span class="token builtin class-name">:</span><span class="token string">"main.main"</span>,<span class="token string">"message"</span><span class="token builtin class-name">:</span><span class="token string">"log in json format"</span>,<span class="token string">"level"</span><span class="token builtin class-name">:</span><span class="token string">"DEBUG"</span>,<span class="token string">"time"</span><span class="token builtin class-name">:</span><span class="token string">"2020-12-04T10:32:12+08:00"</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">"level"</span><span class="token builtin class-name">:</span><span class="token string">"INFO"</span>,<span class="token string">"time"</span><span class="token builtin class-name">:</span><span class="token string">"2020-12-04T10:32:12+08:00"</span>,<span class="token string">"file"</span><span class="token builtin class-name">:</span><span class="token string">"/home/colin/workspace/golang/src/github.com/marmotedu/gopractise-demo/log/cuslog/example/example.go:16"</span>,<span class="token string">"func"</span><span class="token builtin class-name">:</span><span class="token string">"main.main"</span>,<span class="token string">"message"</span><span class="token builtin class-name">:</span><span class="token string">"another log in json format"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里日志包就开发完成了，完整包见 <a href="https://github.com/marmotedu/gopractise-demo/tree/main/log/cuslog" target="_blank" rel="noopener noreferrer">log/cuslog<ExternalLinkIcon/></a>。</p>
<h3 id="iam项目日志包设计" tabindex="-1"><a class="header-anchor" href="#iam项目日志包设计" aria-hidden="true">#</a> IAM项目日志包设计</h3>
<p>这一讲的最后，我们再来看下我们的IAM项目中，日志包是怎么设计的。</p>
<p>先来看一下IAM项目log包的存放位置：<a href="https://github.com/marmotedu/iam/tree/v1.0.0/pkg/log" target="_blank" rel="noopener noreferrer">pkg/log<ExternalLinkIcon/></a>。放在这个位置，主要有两个原因：</p>
<ul>
<li>第一个，<code v-pre>log</code> 包属于IAM项目，有定制开发的内容；</li>
<li>第二个，<code v-pre>log</code> 包功能完备、成熟，外部项目也可以使用。</li>
</ul>
<p>该log包是基于 <code v-pre>go.uber.org/zap</code> 包封装而来的，根据需要添加了更丰富的功能。接下来，我们通过log包的<a href="https://github.com/marmotedu/iam/blob/master/pkg/log/options.go#L47" target="_blank" rel="noopener noreferrer">Options<ExternalLinkIcon/></a>，来看下log包所实现的功能：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Options contains configuration items related to log.</span>
<span class="token keyword">type</span> Options <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	OutputPaths       <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"output-paths"       mapstructure:"output-paths"`</span>
	ErrorOutputPaths  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token string">`json:"error-output-paths" mapstructure:"error-output-paths"`</span>
	Level             <span class="token builtin">string</span>   <span class="token string">`json:"level"              mapstructure:"level"`</span>
	Format            <span class="token builtin">string</span>   <span class="token string">`json:"format"             mapstructure:"format"`</span>
	DisableCaller     <span class="token builtin">bool</span>     <span class="token string">`json:"disable-caller"     mapstructure:"disable-caller"`</span>
	DisableStacktrace <span class="token builtin">bool</span>     <span class="token string">`json:"disable-stacktrace" mapstructure:"disable-stacktrace"`</span>
	EnableColor       <span class="token builtin">bool</span>     <span class="token string">`json:"enable-color"       mapstructure:"enable-color"`</span>
	Development       <span class="token builtin">bool</span>     <span class="token string">`json:"development"        mapstructure:"development"`</span>
	Name              <span class="token builtin">string</span>   <span class="token string">`json:"name"               mapstructure:"name"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Options各配置项含义如下：</strong></p>
<ul>
<li>development：是否是开发模式。如果是开发模式，会对DPanicLevel进行堆栈跟踪。</li>
<li>name：Logger的名字。</li>
<li>disable-caller：是否开启 caller，如果开启会在日志中显示调用日志所在的文件、函数和行号。</li>
<li>disable-stacktrace：是否在Panic及以上级别禁止打印堆栈信息。</li>
<li>enable-color：是否开启颜色输出，true，是；false，否。</li>
<li>level：日志级别，优先级从低到高依次为：Debug, Info, Warn, Error, Dpanic, Panic, Fatal。</li>
<li>format：支持的日志输出格式，目前支持Console和JSON两种。Console其实就是Text格式。</li>
<li>output-paths：支持输出到多个输出，用逗号分开。支持输出到标准输出（stdout）和文件。</li>
<li>error-output-paths：zap内部(非业务)错误日志输出路径，多个输出，用逗号分开。</li>
</ul>
<p><strong>log包的Options结构体支持以下3个方法：</strong></p>
<ul>
<li>Build方法。Build方法可以根据Options构建一个全局的Logger。</li>
<li>AddFlags方法。AddFlags方法可以将Options的各个字段追加到传入的pflag.FlagSet变量中。</li>
<li>String方法。String方法可以将Options的值以JSON格式字符串返回。</li>
</ul>
<p><strong>log包实现了以下3种日志记录方法：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"This is a info message"</span><span class="token punctuation">,</span> log<span class="token punctuation">.</span><span class="token function">Int32</span><span class="token punctuation">(</span><span class="token string">"int_key"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">"This is a formatted %s message"</span><span class="token punctuation">,</span> <span class="token string">"info"</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">Infow</span><span class="token punctuation">(</span><span class="token string">"Message printed with Infow"</span><span class="token punctuation">,</span> <span class="token string">"X-Request-ID"</span><span class="token punctuation">,</span> <span class="token string">"fbf54504-64da-4088-9b86-67824a7fb508"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Info</code> 使用指定的 <code v-pre>key/value</code> 记录日志。<code v-pre>Infof</code> 格式化记录日志。 <code v-pre>Infow</code> 也是使用指定的 <code v-pre>key/value</code>记录日志，跟 <code v-pre>Info</code> 的区别是：使用 <code v-pre>Info</code> 需要指定值的类型，通过指定值的日志类型，日志库底层不需要进行反射操作，所以使用 <code v-pre>Info</code> 记录日志性能最高。</p>
<p>log包支持非常丰富的类型，具体你可以参考 <a href="https://github.com/marmotedu/iam/blob/master/pkg/log/types.go#L56" target="_blank" rel="noopener noreferrer">types.go<ExternalLinkIcon/></a>。</p>
<p><strong>上述日志输出为：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2021</span>-07-06 <span class="token number">14</span>:02:07.070 INFO This is a info message <span class="token punctuation">{</span><span class="token string">"int_key"</span><span class="token builtin class-name">:</span> <span class="token number">10</span><span class="token punctuation">}</span>
<span class="token number">2021</span>-07-06 <span class="token number">14</span>:02:07.071 INFO This is a formatted info message
<span class="token number">2021</span>-07-06 <span class="token number">14</span>:02:07.071 INFO Message printed with Infow <span class="token punctuation">{</span><span class="token string">"X-Request-ID"</span><span class="token builtin class-name">:</span> <span class="token string">"fbf54504-64da-4088-9b86-67824a7fb508"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>log包为每种级别的日志都提供了3种日志记录方式，举个例子：假设日志格式为 <code v-pre>Xyz</code> ，则分别提供了 <code v-pre>Xyz(msg string, fields ...Field)</code> ，<code v-pre>Xyzf(format string, v ...interface{})</code> ，<code v-pre>Xyzw(msg string, keysAndValues ...interface{})</code> 3种日志记录方法。</p>
<p>另外，log包相较于一般的日志包，还提供了众多记录日志的方法。</p>
<p><strong>第一个方法，</strong> log包支持V Level，可以通过整型数值来灵活指定日志级别，数值越大，优先级越低。例如：</p>
<blockquote>
<p>⚠️ <code v-pre>V Level</code>是指在<code v-pre>glog</code>日志库中用于控制日志级别的一种机制。<code v-pre>glog</code>是一个 Go 语言的日志库，可以方便地进行日志记录和输出。</p>
<p><code v-pre>V Level</code>表示 verbose level，即冗长程度。在<code v-pre>glog</code>中，通过设置<code v-pre>V Level</code>的值，可以控制日志的输出级别。<code v-pre>V Level</code>的取值范围是<code v-pre>0~~4</code>，其中0表示只输出普通日志，<code v-pre>1~~4</code>表示输出对应级别的调试信息。</p>
<p><code v-pre>glog</code>中通过<code v-pre>V()</code>方法来设置<code v-pre>V Level</code>的值，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>glog<span class="token punctuation">.</span><span class="token function">V</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"This is a verbose level 1 log message."</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个例子中，通过<code v-pre>glog.V(1)</code>设置<code v-pre>V Level</code>的值为1，然后调用<code v-pre>Info()</code>方法输出一条日志。由于<code v-pre>V Level</code>的值为1，因此这条日志会被输出。</p>
<p>在<code v-pre>glog</code>中，还可以使用<code v-pre>vmodule</code>选项来控制不同包中的日志输出级别。通过设置<code v-pre>vmodule</code>选项，可以实现更细粒度的日志控制。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run main.go <span class="token parameter variable">-vmodule</span><span class="token operator">=</span>module1<span class="token operator">=</span><span class="token number">2</span>,module2<span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个例子中，通过设置<code v-pre>vmodule</code>选项来控制<code v-pre>module1</code>包中的日志输出级别为2，<code v-pre>module2</code>包中的日志输出级别为3。这样，就可以更加灵活地控制日志的输出级别，以适应不同的应用场景。</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// V level使用</span>
log<span class="token punctuation">.</span><span class="token function">V</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"This is a V level message"</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">V</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">"This is a %s V level message"</span><span class="token punctuation">,</span> <span class="token string">"formatted"</span><span class="token punctuation">)</span>
log<span class="token punctuation">.</span><span class="token function">V</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Infow</span><span class="token punctuation">(</span><span class="token string">"This is a V level message with fields"</span><span class="token punctuation">,</span> <span class="token string">"X-Request-ID"</span><span class="token punctuation">,</span> <span class="token string">"7a7b9f24-4cae-4b2a-9464-69088b45b904"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要注意，Log.V只支持 <code v-pre>Info</code> 、<code v-pre>Infof</code> 、<code v-pre>Infow</code>三种日志记录方法。</p>
<p><strong>第二个方法，</strong> log包支持WithValues函数，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// WithValues使用</span>
lv <span class="token operator">:=</span> log<span class="token punctuation">.</span><span class="token function">WithValues</span><span class="token punctuation">(</span><span class="token string">"X-Request-ID"</span><span class="token punctuation">,</span> <span class="token string">"7a7b9f24-4cae-4b2a-9464-69088b45b904"</span><span class="token punctuation">)</span>
lv<span class="token punctuation">.</span><span class="token function">Infow</span><span class="token punctuation">(</span><span class="token string">"Info message printed with [WithValues] logger"</span><span class="token punctuation">)</span>
lv<span class="token punctuation">.</span><span class="token function">Infow</span><span class="token punctuation">(</span><span class="token string">"Debug message printed with [WithValues] logger"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上述日志输出如下：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2021</span>-07-06 <span class="token number">14</span>:15:28.555 INFO Info message printed with <span class="token punctuation">[</span>WithValues<span class="token punctuation">]</span> logger <span class="token punctuation">{</span><span class="token string">"X-Request-ID"</span><span class="token builtin class-name">:</span> <span class="token string">"7a7b9f24-4cae-4b2a-9464-69088b45b904"</span><span class="token punctuation">}</span>
<span class="token number">2021</span>-07-06 <span class="token number">14</span>:15:28.556 INFO Debug message printed with <span class="token punctuation">[</span>WithValues<span class="token punctuation">]</span> logger <span class="token punctuation">{</span><span class="token string">"X-Request-ID"</span><span class="token builtin class-name">:</span> <span class="token string">"7a7b9f24-4cae-4b2a-9464-69088b45b904"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>WithValues</code> 可以返回一个携带指定key-value的Logger，供后面使用。</p>
<p><strong>第三个方法，</strong> log包提供 <code v-pre>WithContext</code> 和 <code v-pre>FromContext</code> 用来将指定的Logger添加到某个Context中，以及从某个Context中获取Logger，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Context使用</span>
ctx <span class="token operator">:=</span> lv<span class="token punctuation">.</span><span class="token function">WithContext</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
lc <span class="token operator">:=</span> log<span class="token punctuation">.</span><span class="token function">FromContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
lc<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"Message printed with [WithContext] logger"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>WithContext</code>和<code v-pre>FromContext</code>非常适合用在以<code v-pre>context.Context</code>传递的函数中，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token operator">...</span>
 
    <span class="token comment">// WithValues使用</span>
    lv <span class="token operator">:=</span> log<span class="token punctuation">.</span><span class="token function">WithValues</span><span class="token punctuation">(</span><span class="token string">"X-Request-ID"</span><span class="token punctuation">,</span> <span class="token string">"7a7b9f24-4cae-4b2a-9464-69088b45b904"</span><span class="token punctuation">)</span>
     
    <span class="token comment">// Context使用</span>
    lv<span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">"Start to call pirntString"</span><span class="token punctuation">)</span>
    ctx <span class="token operator">:=</span> lv<span class="token punctuation">.</span><span class="token function">WithContext</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">pirntString</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"World"</span><span class="token punctuation">)</span>  
<span class="token punctuation">}</span>
 
<span class="token keyword">func</span> <span class="token function">pirntString</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> str <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lc <span class="token operator">:=</span> log<span class="token punctuation">.</span><span class="token function">FromContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
    lc<span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">"Hello %s"</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码输出如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>2021-07-06 14:38:02.050 INFO Start to call pirntString {"X-Request-ID": "7a7b9f24-4cae-4b2a-9464-69088b45b904"}
2021-07-06 14:38:02.050 INFO Hello World {"X-Request-ID": "7a7b9f24-4cae-4b2a-9464-69088b45b904"}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将Logger添加到Context中，并通过Context在不同函数间传递，可以使key-value在不同函数间传递。例如上述代码中， <code v-pre>X-Request-ID</code> 在main函数、printString函数中的日志输出中均有记录，从而实现了一种调用链的效果。</p>
<p><strong>第四个方法，</strong> 可以很方便地从Context中提取出指定的key-value，作为上下文添加到日志输出中，例如 <a href="https://github.com/marmotedu/iam/blob/v1.0.0/internal/apiserver/api/v1/user/create.go#L20" target="_blank" rel="noopener noreferrer">internal/apiserver/api/v1/user/create.go<ExternalLinkIcon/></a>文件中的日志调用：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Info logs a message at level Info on the compatibleLogger.</span>
log<span class="token punctuation">.</span><span class="token function">L</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"user create function called."</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过调用 <code v-pre>Log.L()</code> 函数，实现如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// L method output with specified context value.</span>
<span class="token keyword">func</span> <span class="token function">L</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token operator">*</span>zapLogger <span class="token punctuation">{</span>
    <span class="token keyword">return</span> std<span class="token punctuation">.</span><span class="token function">L</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>zapLogger<span class="token punctuation">)</span> <span class="token function">L</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token operator">*</span>zapLogger <span class="token punctuation">{</span>
    lg <span class="token operator">:=</span> l<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
    requestID<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span>KeyRequestID<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
    username<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span>KeyUsername<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
    lg<span class="token punctuation">.</span>zapLogger <span class="token operator">=</span> lg<span class="token punctuation">.</span>zapLogger<span class="token punctuation">.</span><span class="token function">With</span><span class="token punctuation">(</span>zap<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>KeyRequestID<span class="token punctuation">,</span> requestID<span class="token punctuation">)</span><span class="token punctuation">,</span> zap<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>KeyUsername<span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">)</span>
 
    <span class="token keyword">return</span> lg
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>L()</code> 方法会从传入的Context中提取出 <code v-pre>requestID</code> 和 <code v-pre>username</code> ，追加到Logger中，并返回Logger。这时候调用该Logger的Info、Infof、Infow等方法记录日志，输出的日志中均包含 <code v-pre>requestID</code> 和 <code v-pre>username</code> 字段，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2021</span>-07-06 <span class="token number">14</span>:46:00.743 INFO    apiserver       secret/create.go:23     create secret <span class="token keyword">function</span> called.  <span class="token punctuation">{</span><span class="token string">"requestID"</span><span class="token builtin class-name">:</span> <span class="token string">"73144bed-534d-4f68-8e8d-dc8a8ed48507"</span>, <span class="token string">"username"</span><span class="token builtin class-name">:</span> <span class="token string">"admin"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过将Context在函数间传递，很容易就能实现调用链效果，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Create add new secret key pairs to the storage.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>SecretHandler<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">L</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"create secret function called."</span><span class="token punctuation">)</span>
     
    <span class="token operator">...</span>
     
    secrets<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>srv<span class="token punctuation">.</span><span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">List</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> username<span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">{</span>    
        Offset<span class="token punctuation">:</span> pointer<span class="token punctuation">.</span><span class="token function">ToInt64</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Limit<span class="token punctuation">:</span>  pointer<span class="token punctuation">.</span><span class="token function">ToInt64</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
     
    <span class="token operator">...</span>
     
     <span class="token keyword">if</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>srv<span class="token punctuation">.</span><span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token operator">&amp;</span>r<span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> err<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
 
    core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码输出为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token number">2021</span><span class="token operator">-</span><span class="token number">07</span><span class="token operator">-</span><span class="token number">06</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">46</span><span class="token punctuation">:</span><span class="token number">00.743</span> INFO    apiserver       secret<span class="token operator">/</span>create<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">23</span>     create secret function called<span class="token punctuation">.</span>  <span class="token punctuation">{</span><span class="token string">"requestID"</span><span class="token punctuation">:</span> <span class="token string">"73144bed-534d-4f68-8e8d-dc8a8ed48507"</span><span class="token punctuation">,</span> <span class="token string">"username"</span><span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">}</span>
<span class="token number">2021</span><span class="token operator">-</span><span class="token number">07</span><span class="token operator">-</span><span class="token number">06</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">46</span><span class="token punctuation">:</span><span class="token number">00.744</span> INFO    apiserver       secret<span class="token operator">/</span>create<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">23</span>     list secret from storage<span class="token punctuation">.</span>  <span class="token punctuation">{</span><span class="token string">"requestID"</span><span class="token punctuation">:</span> <span class="token string">"73144bed-534d-4f68-8e8d-dc8a8ed48507"</span><span class="token punctuation">,</span> <span class="token string">"username"</span><span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">}</span>
<span class="token number">2021</span><span class="token operator">-</span><span class="token number">07</span><span class="token operator">-</span><span class="token number">06</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">46</span><span class="token punctuation">:</span><span class="token number">00.745</span> INFO    apiserver       secret<span class="token operator">/</span>create<span class="token punctuation">.</span><span class="token keyword">go</span><span class="token punctuation">:</span><span class="token number">23</span>     insert secret to storage<span class="token punctuation">.</span>  <span class="token punctuation">{</span><span class="token string">"requestID"</span><span class="token punctuation">:</span> <span class="token string">"73144bed-534d-4f68-8e8d-dc8a8ed48507"</span><span class="token punctuation">,</span> <span class="token string">"username"</span><span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要注意， <code v-pre>log.L</code> 函数默认会从Context中取 <code v-pre>requestID</code> 和 <code v-pre>username</code> 键，这跟IAM项目有耦合度，但这不影响<code v-pre>log</code>包供第三方项目使用。这也是我建议你自己封装日志包的原因。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>开发一个日志包，我们很多时候需要基于一些业界优秀的开源日志包进行二次开发。当前很多项目的日志包都是基于<code v-pre>zap</code>日志包来封装的，如果你有封装的需要，我建议你优先选择zap日志包。</p>
<p>这一讲中，我先给你介绍了标准库log包、glog、logrus和zap这四种常用的日志包，然后向你展现了开发一个日志包的四个步骤，步骤如下：</p>
<ol>
<li>定义日志级别和日志选项。</li>
<li>创建Logger及各级别日志打印方法。</li>
<li>将日志输出到支持的输出中。</li>
<li>自定义日志输出格式。</li>
</ol>
<p>最后，我介绍了IAM项目封装的log包的设计和使用方式。log包基于 <code v-pre>go.uber.org/zap</code>封装，并提供了以下强大特性：</p>
<ul>
<li>log包支持V Level，可以灵活的通过整型数值来指定日志级别。</li>
<li>log包支持 <code v-pre>WithValues</code> 函数， <code v-pre>WithValues</code> 可以返回一个携带指定key-value对的Logger，供后面使用。</li>
<li>log包提供 <code v-pre>WithContext</code> 和 <code v-pre>FromContext</code> 用来将指定的Logger添加到某个Context中和从某个Context中获取Logger。</li>
<li>log包提供了 <code v-pre>Log.L()</code> 函数，可以很方便的从Context中提取出指定的key-value对，作为上下文添加到日志输出中。</li>
</ul>
<h3 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h3>
<ol>
<li>尝试实现一个新的Formatter，可以使不同日志级别以不同颜色输出（例如：Error级别的日志输出中 <code v-pre>Error</code> 字符串用红色字体输出， <code v-pre>Info</code> 字符串用白色字体输出）。</li>
<li>尝试将<a href="https://github.com/marmotedu/gopractise-demo/blob/master/log/cuslog/entry.go#L36" target="_blank" rel="noopener noreferrer">runtime.Caller(2)<ExternalLinkIcon/></a>函数调用中的 <code v-pre>2</code> 改成 <code v-pre>1</code> ，看看日志输出是否跟修改前有差异，如果有差异，思考差异产生的原因。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '12.md' style='float:left'>⬆️上一节🔗  </a><a href = '14.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


