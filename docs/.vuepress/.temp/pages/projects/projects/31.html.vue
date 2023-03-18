<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第31节-性能分析-下-api-server性能测试和调优实战" tabindex="-1"><a class="header-anchor" href="#第31节-性能分析-下-api-server性能测试和调优实战" aria-hidden="true">#</a> 第31节 性能分析（下）：API Server性能测试和调优实战</h1>
<br>
<div><a href = '30.md' style='float:left'>⬆️上一节🔗  </a><a href = '32.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#api性能测试指标">API性能测试指标</router-link></li><li><router-link to="#api性能测试方法">API性能测试方法</router-link><ul><li><router-link to="#wrk安装方法">wrk安装方法</router-link></li><li><router-link to="#wrk使用简介">wrk使用简介</router-link></li></ul></li><li><router-link to="#api-server性能测试实践">API Server性能测试实践</router-link><ul><li><router-link to="#性能测试脚本介绍">性能测试脚本介绍</router-link></li><li><router-link to="#关闭debug配置选项">关闭Debug配置选项</router-link></li><li><router-link to="#使用wrktest-sh测试iam-api接口性能">使用wrktest.sh测试IAM API接口性能</router-link></li></ul></li><li><router-link to="#api-server性能分析">API Server性能分析</router-link><ul><li><router-link to="#api接口性能参考">API接口性能参考</router-link></li></ul></li><li><router-link to="#api-server性能测试注意事项">API Server性能测试注意事项</router-link><ul><li><router-link to="#web框架性能">Web框架性能</router-link></li><li><router-link to="#api接口性能">API接口性能</router-link></li><li><router-link to="#测试环境">测试环境</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>学习了如何分析Go代码的性能。掌握了性能分析的基本知识之后，再来看下如何分析API接口的性能。</p>
<p>在API上线之前，我们需要知道API的性能，以便知道API服务器所能承载的最大请求量、性能瓶颈，再根据业务对性能的要求，来对API进行性能调优或者扩缩容。通过这些，可以使API稳定地对外提供服务，并且让请求在合理的时间内返回。这一讲，我就介绍如何用wrk工具来测试API Server接口的性能，并给出分析方法和结果。</p>
<h2 id="api性能测试指标" tabindex="-1"><a class="header-anchor" href="#api性能测试指标" aria-hidden="true">#</a> API性能测试指标</h2>
<p>API性能测试，往大了说其实包括API框架的性能和指定API的性能。不过，因为指定API的性能跟该API具体的实现（比如有无数据库连接，有无复杂的逻辑处理等）有关，脱离了具体实现来探讨单个API的性能是毫无意义的，所以这篇文章只探讨API框架的性能。</p>
<p>用来衡量API性能的指标主要有3个：</p>
<ul>
<li><strong>并发数（Concurrent）</strong>：并发数是指某个时间范围内，同时在使用系统的用户个数。广义上的并发数是指同时使用系统的用户个数，这些用户可能调用不同的API；严格意义上的并发数是指同时请求同一个API的用户个数。这一讲我们讨论的并发数是严格意义上的并发数。</li>
<li><strong>每秒查询数（QPS）</strong>：每秒查询数QPS是对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准。<code v-pre>QPS = 并发数 / 平均请求响应时间</code>。</li>
<li><strong>请求响应时间（TTLB</strong>）：请求响应时间指的是从客户端发出请求到得到响应的整个时间。这个过程从客户端发起的一个请求开始，到客户端收到服务器端的响应结束。在一些工具中，请求响应时间通常会被称为TTLB（Time to last byte，意思是从发送一个请求开始，到客户端收到最后一个字节的响应为止所消费的时间）。请求响应时间的单位一般为“秒”或“毫秒”。</li>
</ul>
<p>这三个指标中，衡量API性能的最主要指标是QPS，但是在说明QPS时，需要指明是多少并发数下的QPS，否则毫无意义，因为不同并发数下的QPS是不同的。举个例子，单用户100 QPS和100用户100 QPS是两个不同的概念，前者说明API可以在一秒内串行执行100个请求，而后者说明在并发数为100的情况下，API可以在一秒内处理100个请求。当QPS相同时，并发数越大，说明API性能越好，并发处理能力越强。</p>
<p>在并发数设置过大时，API同时要处理很多请求，会频繁切换上下文，而真正用于处理请求的时间变少，反而使得QPS会降低。并发数设置过大时，请求响应时间也会变长。API会有一个合适的并发数，在该并发数下，API的QPS可以达到最大，但该并发数不一定是最佳并发数，还要参考该并发数下的平均请求响应时间。</p>
<p>此外，在有些API接口中，也会测试API接口的TPS（Transactions Per Second，每秒事务数）。一个事务是指客户端向服务器发送请求，然后服务器做出反应的过程。客户端在发送请求时开始计时，收到服务器响应后结束计时，以此来计算使用的时间和完成的事务个数。</p>
<p>那么，TPS和QPS有什么区别呢？如果是对一个查询接口（单场景）压测，且这个接口内部不会再去请求其他接口，那么TPS=QPS，否则，TPS≠QPS。如果是对多个接口（混合场景）压测，假设N个接口都是查询接口，且这个接口内部不会再去请求其他接口，<code v-pre>QPS=N*TPS</code>。</p>
<h2 id="api性能测试方法" tabindex="-1"><a class="header-anchor" href="#api性能测试方法" aria-hidden="true">#</a> API性能测试方法</h2>
<p>Linux下有很多Web性能测试工具，常用的有Jmeter、AB、Webbench和wrk。每个工具都有自己的特点，<strong>IAM项目使用wrk来对API进行性能测试</strong>。wrk非常简单，安装方便，测试结果也相对专业，并且可以支持Lua脚本来创建更复杂的测试场景。下面，我来介绍下wrk的安装方法和使用方法。</p>
<h3 id="wrk安装方法" tabindex="-1"><a class="header-anchor" href="#wrk安装方法" aria-hidden="true">#</a> wrk安装方法</h3>
<p>wrk的安装很简单，一共可分为两步。</p>
<p>第一步，Clone wrk repo：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/wg/wrk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二步，编译并安装：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> wrk
$ <span class="token function">make</span>
$ <span class="token function">sudo</span> <span class="token function">cp</span> ./wrk /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wrk使用简介" tabindex="-1"><a class="header-anchor" href="#wrk使用简介" aria-hidden="true">#</a> wrk使用简介</h3>
<p>这里来看下wrk的使用方法。wrk使用起来不复杂，执行 <code v-pre>wrk --help</code> 可以看到wrk的所有运行参数：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ wrk <span class="token parameter variable">--help</span>
Usage: wrk <span class="token operator">&lt;</span>options<span class="token operator">></span> <span class="token operator">&lt;</span>url<span class="token operator">></span>
  Options:
    -c, <span class="token parameter variable">--connections</span> <span class="token operator">&lt;</span>N<span class="token operator">></span>  Connections to keep <span class="token function">open</span>
    -d, <span class="token parameter variable">--duration</span>    <span class="token operator">&lt;</span>T<span class="token operator">></span>  Duration of <span class="token builtin class-name">test</span>
    -t, <span class="token parameter variable">--threads</span>     <span class="token operator">&lt;</span>N<span class="token operator">></span>  Number of threads to use

    -s, <span class="token parameter variable">--script</span>      <span class="token operator">&lt;</span>S<span class="token operator">></span>  Load Lua script <span class="token function">file</span>
    -H, <span class="token parameter variable">--header</span>      <span class="token operator">&lt;</span>H<span class="token operator">></span>  Add header to request
        <span class="token parameter variable">--latency</span>          Print latency statistics
        <span class="token parameter variable">--timeout</span>     <span class="token operator">&lt;</span>T<span class="token operator">></span>  Socket/request <span class="token function">timeout</span>
    -v, <span class="token parameter variable">--version</span>          Print version details

  Numeric arguments may include a SI unit <span class="token punctuation">(</span>1k, 1M, 1G<span class="token punctuation">)</span>
  Time arguments may include a <span class="token function">time</span> unit <span class="token punctuation">(</span>2s, 2m, 2h<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的参数有下面这些：</p>
<ul>
<li>-t，线程数（线程数不要太多，是核数的2到4倍就行，多了反而会因为线程切换过多造成效率降低）。</li>
<li>-c，并发数。</li>
<li>-d，测试的持续时间，默认为10s。</li>
<li>-T，请求超时时间。</li>
<li>-H，指定请求的HTTP Header，有些API需要传入一些Header，可通过wrk的-H参数来传入。</li>
<li>–latency，打印响应时间分布。</li>
<li>-s，指定Lua脚本，Lua脚本可以实现更复杂的请求。</li>
</ul>
<p>然后，我们来看一个wrk的测试结果，并对结果进行解析。</p>
<p>一个简单的测试如下（确保iam-apiserver已经启动，并且开启了健康检查）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ wrk <span class="token parameter variable">-t</span> <span class="token number">144</span> <span class="token parameter variable">-c</span> <span class="token number">30000</span> <span class="token parameter variable">-d</span> 30s <span class="token parameter variable">-T</span> 30s <span class="token parameter variable">--latency</span> http://10.0.4.57:8080/healthz
Running 30s <span class="token builtin class-name">test</span> @ http://10.0.4.57:8080/healthz
  <span class="token number">144</span> threads and <span class="token number">30000</span> connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   <span class="token number">508</span>.77ms  <span class="token number">604</span>.01ms   <span class="token number">9</span>.27s    <span class="token number">81.59</span>%
    Req/Sec   <span class="token number">772.48</span>      <span class="token number">0</span>.94k   <span class="token number">10</span>.45k    <span class="token number">86.82</span>%
  Latency Distribution
     <span class="token number">50</span>%  <span class="token number">413</span>.35ms
     <span class="token number">75</span>%  <span class="token number">948</span>.99ms
     <span class="token number">90</span>%    <span class="token number">1</span>.33s
     <span class="token number">99</span>%    <span class="token number">2</span>.44s
  <span class="token number">2276265</span> requests <span class="token keyword">in</span> <span class="token number">30</span>.10s, <span class="token number">412</span>.45MB <span class="token builtin class-name">read</span>
  Socket errors: connect <span class="token number">1754</span>, <span class="token builtin class-name">read</span> <span class="token number">40</span>, <span class="token function">write</span> <span class="token number">0</span>, <span class="token function">timeout</span> <span class="token number">0</span>
Requests/sec:  <span class="token number">75613.16</span>
Transfer/sec:     <span class="token number">13</span>.70MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是对测试结果的解析。</p>
<ul>
<li>144 threads and 30000 connections：用144个线程模拟20000个连接，分别对应-t和-c参数。</li>
<li>Thread Stats是线程统计，包括Latency和Req/Sec。
<ul>
<li>Latency：响应时间，有平均值、标准偏差、最大值、正负一个标准差占比。</li>
<li>Req/Sec：每个线程每秒完成的请求数, 同样有平均值、标准偏差、最大值、正负一个标准差占比。</li>
</ul>
</li>
<li>Latency Distribution是响应时间分布。
<ul>
<li>50%：50%的响应时间为413.35ms。</li>
<li>75%：75%的响应时间为948.99ms。</li>
<li>90%：90%的响应时间为1.33s。</li>
<li>99%：99%的响应时间为2.44s。</li>
</ul>
</li>
<li>2276265 requests in 30.10s, 412.45MB read：30.10s完成的总请求数（2276265）和数据读取量（412.45MB）。</li>
<li>Socket errors: connect 1754, read 40, write 0, timeout 0：错误统计，会统计connect连接失败请求个数（1754）、读失败请求个数、写失败请求个数、超时请求个数。</li>
<li>Requests/sec：QPS。</li>
<li>Transfer/sec：平均每秒读取13.70MB数据（吞吐量）。</li>
</ul>
<h2 id="api-server性能测试实践" tabindex="-1"><a class="header-anchor" href="#api-server性能测试实践" aria-hidden="true">#</a> API Server性能测试实践</h2>
<p>接下来，我们就来测试下API Server的性能。影响API Server性能的因素有很多，除了iam-apiserver自身的原因之外，服务器的硬件和配置、测试方法、网络环境等都会影响。为了方便你对照性能测试结果，我给出了我的测试环境配置，你可以参考下。</p>
<ul>
<li>客户端硬件配置：1核4G。</li>
<li>客户端软件配置：干净的 <code v-pre>CentOS Linux release 8.2.2004 (Core)</code>。</li>
<li>服务端硬件配置：2核8G。</li>
<li>服务端软件配置：干净的 <code v-pre>CentOS Linux release 8.2.2004 (Core)</code>。</li>
<li>测试网络环境：腾讯云VPC内访问，除了性能测试程序外，没有其他资源消耗型业务程序。</li>
</ul>
<p>测试架构如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303052240275.webp" alt="img"></p>
<h3 id="性能测试脚本介绍" tabindex="-1"><a class="header-anchor" href="#性能测试脚本介绍" aria-hidden="true">#</a> 性能测试脚本介绍</h3>
<p>在做API Server的性能测试时，需要先执行wrk，生成性能测试数据。为了能够更直观地查看性能数据，我们还需要以图表的方式展示这些性能数据。这一讲，我使用 <code v-pre>gnuplot</code> 工具来自动化地绘制这些性能图，为此我们需要确保Linux服务器已经安装了 <code v-pre>gnuplot</code> 工具。可以通过以下方式安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gnuplot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在测试中，绘制下面这两张图，通过它们来观测和分析API Server的性能。</p>
<ul>
<li>QPS &amp; TTLB图： <code v-pre>X</code> 轴为并发数（Concurrent）， <code v-pre>Y</code> 轴为每秒查询数（QPS）和请求响应时间（TTLB）。</li>
<li>成功率图： <code v-pre>X</code> 轴为并发数（Concurrent）， <code v-pre>Y</code> 轴为请求成功率。</li>
</ul>
<p>为了方便测试API接口性能，将性能测试和绘图逻辑封装在 <a href="https://github.com/marmotedu/iam/blob/v1.0.8/scripts/wrktest.sh" target="_blank" rel="noopener noreferrer">scripts/wrktest.sh<ExternalLinkIcon/></a> 脚本中，可以在iam源码根目录下执行如下命令，生成性能测试数据和性能图表：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ scripts/wrktest.sh http://10.0.4.57:8080/healthz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会执行性能测试，记录性能测试数据，并根据这些性能测试数据绘制出QPS和成功率图。</p>
<p>接下来，再来介绍下wrktest.sh性能测试脚本，并给出一个使用示例。</p>
<p>wrktest.sh性能测试脚本，用来测试API Server的性能，记录测试的性能数据，并根据性能数据使用gnuplot绘制性能图。</p>
<p>wrktest.sh也可以对比前后两次的性能测试结果，并将对比结果通过图表展示出来。wrktest.sh会根据CPU的核数自动计算出适合的wrk启动线程数（ <code v-pre>-t</code>）： <code v-pre>CPU核数 * 3</code>。</p>
<p>wrktest.sh默认会测试多个并发下的API性能，默认测试的并发数为 <code v-pre>200 500 1000 3000 5000 10000 15000 20000 25000 50000</code>。需要根据自己的服务器配置选择测试的最大并发数，这里因为服务器配置不高（主要是 <code v-pre>8G</code> 内存在高并发下，很容易就耗尽），最大并发数选择了 <code v-pre>50000</code>。如果你的服务器配置够高，可以再依次尝试下测试 <code v-pre>100000</code> 、 <code v-pre>200000</code> 、 <code v-pre>500000</code> 、 <code v-pre>1000000</code> 并发下的API性能。</p>
<p>wrktest.sh的使用方法如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ scripts/wrktest.sh <span class="token parameter variable">-h</span>

Usage: scripts/wrktest.sh <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span> <span class="token punctuation">[</span>diff<span class="token punctuation">]</span> URL
Performance automation <span class="token builtin class-name">test</span> script.

  URL                    HTTP request url, like: http://10.0.4.57:8080/healthz
  <span class="token function">diff</span>                   Compare two performance <span class="token builtin class-name">test</span> results

OPTIONS:
  <span class="token parameter variable">-h</span>                     Usage information
  <span class="token parameter variable">-n</span>                     Performance <span class="token builtin class-name">test</span> task name, default: apiserver
  <span class="token parameter variable">-d</span>                     Directory used to store performance data and gnuplot graphic, default: _output/wrk

Reprot bugs to <span class="token operator">&lt;</span>colin404@foxmail.com<span class="token operator">></span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>wrktest.sh提供的命令行参数介绍如下。</p>
<ul>
<li>URL：需要测试的API接口。</li>
<li>diff：如果比较两次测试的结果，需要执行wrktest.sh diff 。</li>
<li>-n：本次测试的任务名，wrktest.sh会根据任务名命名生成的文件。</li>
<li>-d：输出文件存放目录。</li>
<li>-h：打印帮助信息。</li>
</ul>
<p>下面，展示一个wrktest.sh使用示例。</p>
<p>wrktest.sh的主要功能有两个，分别是运行性能测试并获取结果和对比性能测试结果。下面分别介绍下它们的具体使用方法。</p>
<ol>
<li>运行性能测试并获取结果</li>
</ol>
<p>执行如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ scripts/wrktest.sh http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">200</span> http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">500</span> http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">1000</span> http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">3000</span> http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">5000</span> http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">10000</span> http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">15000</span> http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">20000</span> http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">25000</span> http://10.0.4.57:8080/healthz
Running wrk command: wrk <span class="token parameter variable">-t3</span> <span class="token parameter variable">-d300s</span> <span class="token parameter variable">-T30s</span> <span class="token parameter variable">--latency</span> <span class="token parameter variable">-c</span> <span class="token number">50000</span> http://10.0.4.57:8080/healthz

Now plot according to /home/colin/_output/wrk/apiserver.dat
QPS graphic <span class="token function">file</span> is: /home/colin/_output/wrk/apiserver_qps_ttlb.png
Success rate graphic <span class="token function">file</span> is: /home/colin/_output/wrk/apiserver_successrate.pngz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令默认会在 <code v-pre>_output/wrk/</code> 目录下生成3个文件：</p>
<ul>
<li>apiserver.dat，wrk性能测试结果，每列含义分别为并发数、QPS 平均响应时间、成功率。</li>
<li>apiserver_qps_ttlb.png，QPS&amp;TTLB图。</li>
<li>apiserver_successrate.png，成功率图。</li>
</ul>
<p>这里要注意，请求URL中的IP地址应该是腾讯云VPC内网地址，因为通过内网访问，不仅网络延时最低，而且还最安全，所以真实的业务通常都是内网访问的。</p>
<ol>
<li>对比性能测试结果</li>
</ol>
<p>假设我们还有另外一次API性能测试，测试数据保存在 <code v-pre>_output/wrk/http.dat</code> 文件中。</p>
<p>执行如下命令，对比两次测试结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ scripts/wrktest.sh <span class="token function">diff</span> _output/wrk/apiserver.dat _output/wrk/http.dat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>apiserver.dat</code> 和 <code v-pre>http.dat</code> 是两个需要对比的Wrk性能数据文件。上述命令默认会在 <code v-pre>_output/wrk</code> 目录下生成下面这两个文件：</p>
<ul>
<li>apiserver_http.qps.ttlb.diff.png，QPS &amp; TTLB对比图。</li>
<li>apiserver_http.success_rate.diff.png，成功率对比图。</li>
</ul>
<h3 id="关闭debug配置选项" tabindex="-1"><a class="header-anchor" href="#关闭debug配置选项" aria-hidden="true">#</a> 关闭Debug配置选项</h3>
<p>在测试之前，我们需要关闭一些Debug选项，以免影响性能测试。</p>
<p>执行下面这两步操作，修改iam-apiserver的配置文件：</p>
<ul>
<li>将 <code v-pre>server.mode</code> 设置为release， <code v-pre>server.middlewares</code> 去掉dump、logger中间件。</li>
<li>将 <code v-pre>log.level</code> 设置为info， <code v-pre>log.output-paths</code> 去掉stdout。</li>
</ul>
<p>因为我们要在执行压力测试时分析程序的性能，所以需要设置 <code v-pre>feature.profiling</code> 为true，以开启性能分析。修改完之后，重新启动iam-apiserver。</p>
<h3 id="使用wrktest-sh测试iam-api接口性能" tabindex="-1"><a class="header-anchor" href="#使用wrktest-sh测试iam-api接口性能" aria-hidden="true">#</a> 使用wrktest.sh测试IAM API接口性能</h3>
<p>关闭Debug配置选项之后，就可以执行 <code v-pre>wrktest.sh</code> 命令测试API性能了（默认测试的并发数为 <code v-pre>200 500 1000 3000 5000 10000 15000 20000 25000 50000</code>）:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ scripts/wrktest.sh http://10.0.4.57:8080/healthz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成的QPS &amp; TTLB图和成功率图分别如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303052241784.webp" alt="img"></p>
<p>上图中， <code v-pre>X</code> 轴为并发数（Concurrent）， <code v-pre>Y</code> 轴为每秒查询数（QPS）和请求响应时间（TTLB）。</p>
<p><img src="http://sm.nsddd.top/sm202303052241464.webp" alt="img"></p>
<p>上图中， <code v-pre>X</code> 轴为并发数（Concurrent）， <code v-pre>Y</code> 轴为请求成功率。</p>
<p>通过上面两张图，你可以看到，API Server在并发数为 <code v-pre>200</code> 时，QPS最大；并发数为 <code v-pre>500</code>，平均响应时间为 <code v-pre>56.33ms</code>，成功率为 <code v-pre>100.00%</code> 。在并发数达到 <code v-pre>1000</code> 时，成功率开始下降。一些详细数据从图里看不到，你可以直接查看 <code v-pre>apiserver.dat</code> 文件，里面记录了每个并发下具体的QPS、TTLB和成功率数据。</p>
<p>现在我们有了API Server的性能数据，那么该API Server的QPS处于什么水平呢？一方面，你可以根据自己的业务需要来对比；另一方面，可以和性能更好的Web框架进行对比，总之需要有个参照。</p>
<p>这里用net/http构建最简单的HTTP服务器，使用相同的测试工具和测试服务器，测试性能并作对比。HTTP服务源码为（位于文件 <a href="https://github.com/marmotedu/iam/blob/v1.0.8/tools/httptest/main.go" target="_blank" rel="noopener noreferrer">tools/httptest/main.go<ExternalLinkIcon/></a> 中）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>package main

<span class="token function">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"log"</span>
	<span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http.HandleFunc<span class="token punctuation">(</span><span class="token string">"/healthz"</span>, func<span class="token punctuation">(</span>w http.ResponseWriter, r *http.Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		message :<span class="token operator">=</span> <span class="token variable"><span class="token variable">`</span><span class="token punctuation">{</span><span class="token string">"status"</span><span class="token builtin class-name">:</span><span class="token string">"ok"</span><span class="token punctuation">}</span><span class="token variable">`</span></span>
		fmt.Fprint<span class="token punctuation">(</span>w, message<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	addr :<span class="token operator">=</span> <span class="token string">":6667"</span>
	fmt.Printf<span class="token punctuation">(</span><span class="token string">"Serving http service on %s<span class="token entity" title="\n">\n</span>"</span>, addr<span class="token punctuation">)</span>
	log.Fatal<span class="token punctuation">(</span>http.ListenAndServe<span class="token punctuation">(</span>addr, nil<span class="token punctuation">))</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将上述HTTP服务的请求路径设置为 <code v-pre>/healthz</code>，并且返回 <code v-pre>{&quot;status&quot;:&quot;ok&quot;}</code>，跟API Server的接口返回数据完全一样。通过这种方式，你可以排除因为返回数据大小不同而造成的性能差异。</p>
<p>可以看到，该HTTP服务器很简单，只是利用 <code v-pre>net/http</code> 包最原生的功能，在Go中几乎所有的Web框架都是基于 <code v-pre>net/http</code> 包封装的。既然是封装，肯定比不上原生的性能，所以我们要把它跟用 <code v-pre>net/http</code> 直接启动的HTTP服务接口的性能进行对比，来衡量我们的API Server性能。</p>
<p>我们需要执行相同的wrk测试，并将结果跟API Server的测试结果进行对比，将对比结果绘制成对比图。具体对比过程可以分为3步。</p>
<p>第一步，启动HTTP服务。</p>
<p>在iam源码根目录下执行如下命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go run tools/httptest/main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，执行 <code v-pre>wrktest.sh</code> 脚本，测试该HTTP服务的性能：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ scripts/wrktest.sh -n http http://10.0.4.57:6667/healthz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述命令会生成 <code v-pre>_output/wrk/http.dat</code> 文件。</p>
<p>第三步，对比两次性能测试数据：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ scripts/wrktest.sh diff _output/wrk/apiserver.dat _output/wrk/http.dat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成的两张对比图表，如下所示：</p>
<p><a href="https://camo.githubusercontent.com/cecdb74ecba8729a2dcb15361d15fb3351cd15c1124e6ec213a45bce38629bdf/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f35312f66342f35316561636632306431393030383062663862343265326634337979303066342e706e673f77683d36343078343830" target="_blank" rel="noopener noreferrer"><img src="https://camo.githubusercontent.com/cecdb74ecba8729a2dcb15361d15fb3351cd15c1124e6ec213a45bce38629bdf/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f35312f66342f35316561636632306431393030383062663862343265326634337979303066342e706e673f77683d36343078343830" alt="img"><ExternalLinkIcon/></a></p>
<p><a href="https://camo.githubusercontent.com/cf24da642da02b5cad1c65e6314029df017bcd6a513b6f9a7d7eea51c79087fb/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f65312f39392f65316363363436646134303033366134346535333030656432626566383939392e706e673f77683d36343078343830" target="_blank" rel="noopener noreferrer"><img src="https://camo.githubusercontent.com/cf24da642da02b5cad1c65e6314029df017bcd6a513b6f9a7d7eea51c79087fb/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f65312f39392f65316363363436646134303033366134346535333030656432626566383939392e706e673f77683d36343078343830" alt="img"><ExternalLinkIcon/></a></p>
<p>通过上面两张对比图，我们可以看出，API Server在QPS、响应时间和成功率上都不如原生的HTTP Server，特别是QPS，最大QPS只有原生HTTP Server 最大QPS的 <code v-pre>13.68%</code>，性能需要调优。</p>
<h2 id="api-server性能分析" tabindex="-1"><a class="header-anchor" href="#api-server性能分析" aria-hidden="true">#</a> API Server性能分析</h2>
<p>上面，我们测试了API接口的性能，如果性能不合预期，我们还需要分析性能数据，并优化性能。</p>
<p>在分析前我们需要对API Server加压，在加压的情况下，API接口的性能才更可能暴露出来，所以继续执行如下命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ scripts/wrktest.sh http://10.0.4.57:8080/healthz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上述命令执行压力测试期间，可以打开另外一个Linux终端，使用 <code v-pre>go tool pprof</code> 工具分析HTTP的profile文件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go tool pprof http://10.0.4.57:8080/debug/pprof/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完 <code v-pre>go tool pprof</code> 后，因为需要采集性能数据，所以该命令会阻塞30s。</p>
<p>在pprof交互shell中，执行 <code v-pre>top -cum</code> 查看累积采样时间，我们执行 <code v-pre>top30 -cum</code>，多观察一些函数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>(pprof) top20 -cum
Showing nodes accounting for 32.12s, 39.62% of 81.07s total
Dropped 473 nodes (cum &lt;= 0.41s)
Showing top 20 nodes out of 167
(pprof) top30 -cum
Showing nodes accounting for 11.82s, 20.32% of 58.16s total
Dropped 632 nodes (cum &lt;= 0.29s)
Showing top 30 nodes out of 239
      flat  flat%   sum%        cum   cum%
     0.10s  0.17%  0.17%     51.59s 88.70%  net/http.(*conn).serve
     0.01s 0.017%  0.19%     42.86s 73.69%  net/http.serverHandler.ServeHTTP
     0.04s 0.069%  0.26%     42.83s 73.64%  github.com/gin-gonic/gin.(*Engine).ServeHTTP
     0.01s 0.017%  0.28%     42.67s 73.37%  github.com/gin-gonic/gin.(*Engine).handleHTTPRequest
     0.08s  0.14%  0.41%     42.59s 73.23%  github.com/gin-gonic/gin.(*Context).Next (inline)
     0.03s 0.052%  0.46%     42.58s 73.21%  .../internal/pkg/middleware.RequestID.func1
         0     0%  0.46%     41.02s 70.53%  .../internal/pkg/middleware.Context.func1
     0.01s 0.017%  0.48%     40.97s 70.44%  github.com/gin-gonic/gin.CustomRecoveryWithWriter.func1
     0.03s 0.052%  0.53%     40.95s 70.41%  .../internal/pkg/middleware.LoggerWithConfig.func1
     0.01s 0.017%  0.55%     33.46s 57.53%  .../internal/pkg/middleware.NoCache
     0.08s  0.14%  0.69%     32.58s 56.02%  github.com/tpkeeper/gin-dump.DumpWithOptions.func1
     0.03s 0.052%  0.74%     24.73s 42.52%  github.com/tpkeeper/gin-dump.FormatToBeautifulJson
     0.02s 0.034%  0.77%     22.73s 39.08%  github.com/tpkeeper/gin-dump.BeautifyJsonBytes
     0.08s  0.14%  0.91%     16.39s 28.18%  github.com/tpkeeper/gin-dump.format
     0.21s  0.36%  1.27%     16.38s 28.16%  github.com/tpkeeper/gin-dump.formatMap
     3.75s  6.45%  7.72%     13.71s 23.57%  runtime.mallocgc
     ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code v-pre>top30</code> 内容过多，这里只粘贴了耗时最多的一些关联函数。从上面的列表中，可以看到有ServeHTTP类的函数，这些函数是gin/http自带的函数，我们无需对此进行优化。</p>
<p>还有这样一些函数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.../gin.(*Context).Next (inline)
.../internal/pkg/middleware.RequestID.func1
.../internal/pkg/middleware.Context.func1
github.com/gin-gonic/gin.CustomRecoveryWithWriter.func1
.../internal/pkg/middleware.LoggerWithConfig.func1
.../internal/pkg/middleware.NoCache
github.com/tpkeeper/gin-dump.DumpWithOptions.func1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到， <code v-pre>middleware.RequestID.func1</code>、 <code v-pre>middleware.Context.func1</code>、 <code v-pre>gin.CustomRecoveryWithWriter.func1</code>、 <code v-pre>middleware.LoggerWithConfig.func1</code> 等，这些耗时较久的函数都是我们加载的Gin中间件。这些中间件消耗了大量的CPU时间，所以我们可以选择性加载这些中间件，删除一些不需要的中间件，来优化API Server的性能。</p>
<p>假如我们暂时不需要这些中间件，也可以通过配置iam-apiserver的配置文件，将 <code v-pre>server.middlewares</code> 设置为空或者注释掉，然后重启iam-apiserver。重启后，再次执行 <code v-pre>wrktest.sh</code> 测试性能，并跟原生的HTTP Server性能进行对比，对比结果如下面2张图所示：</p>
<p><a href="https://camo.githubusercontent.com/19a7f36f0412786bbacc660e2205ddd29fd0cafeb93dddbbd2d24a0d2eadf47c/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f37622f63322f37626339346265306434346135616335346364306531393964323631326563322e706e673f77683d36343078343830" target="_blank" rel="noopener noreferrer"><img src="https://camo.githubusercontent.com/19a7f36f0412786bbacc660e2205ddd29fd0cafeb93dddbbd2d24a0d2eadf47c/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f37622f63322f37626339346265306434346135616335346364306531393964323631326563322e706e673f77683d36343078343830" alt="img"><ExternalLinkIcon/></a></p>
<p><a href="https://camo.githubusercontent.com/68982bf015ee9dee7c0bb42ff105e31c84b1a9e1278c1f55a6a2ed22855b4e19/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f38382f61372f38386539666466653762613134303631653937396430313935623435636361372e706e673f77683d36343078343830" target="_blank" rel="noopener noreferrer"><img src="https://camo.githubusercontent.com/68982bf015ee9dee7c0bb42ff105e31c84b1a9e1278c1f55a6a2ed22855b4e19/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f38382f61372f38386539666466653762613134303631653937396430313935623435636361372e706e673f77683d36343078343830" alt="img"><ExternalLinkIcon/></a></p>
<p>可以看到，删除无用的Gin中间件后，API Server的性能有了很大的提升，并发数为 <code v-pre>200</code> 时性能最好，此时QPS为 <code v-pre>47812</code>，响应时间为 <code v-pre>4.33``ms</code>，成功率为 <code v-pre>100.00``%</code>。在并发数为 <code v-pre>50000</code> 的时候，其QPS是原生HTTP Server的 <code v-pre>75.02%</code>。</p>
<h3 id="api接口性能参考" tabindex="-1"><a class="header-anchor" href="#api接口性能参考" aria-hidden="true">#</a> API接口性能参考</h3>
<p>不同团队对API接口的性能要求不同，同一团队对每个API接口的性能要求也不同，所以并没有一个统一的数值标准来衡量API接口的性能，但可以肯定的是，性能越高越好。在这里给出一个参考值（并发数可根据需要选择），如下表所示：</p>
<p><a href="https://camo.githubusercontent.com/6fb9e6e552a642180a9e200763b00c7bd2a18629e53c613638e27cbfb038326e/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f35382f37632f35383166633932326166656461663336333739633561356437323365626437632e6a70673f77683d3232343878353835" target="_blank" rel="noopener noreferrer"><img src="https://camo.githubusercontent.com/6fb9e6e552a642180a9e200763b00c7bd2a18629e53c613638e27cbfb038326e/68747470733a2f2f7374617469633030312e6765656b62616e672e6f72672f7265736f757263652f696d6167652f35382f37632f35383166633932326166656461663336333739633561356437323365626437632e6a70673f77683d3232343878353835" alt="img"><ExternalLinkIcon/></a></p>
<h2 id="api-server性能测试注意事项" tabindex="-1"><a class="header-anchor" href="#api-server性能测试注意事项" aria-hidden="true">#</a> API Server性能测试注意事项</h2>
<p>在进行API Server性能测试时，要考虑到API Server的性能影响因素。影响API Server性能的因素很多，大致可以分为两类，分别是Web框架的性能和API接口的性能。另外，在做性能测试时，还需要确保测试环境是一致的，最好是一个干净的测试环境。</p>
<h3 id="web框架性能" tabindex="-1"><a class="header-anchor" href="#web框架性能" aria-hidden="true">#</a> Web框架性能</h3>
<p>Web框架的性能至关重要，因为它会影响我们的每一个API接口的性能。</p>
<p>在设计阶段，我们会确定所使用的Web框架，这时候我们需要对Web框架有个初步的测试，确保我们选择的Web框架在性能和稳定性上都足够优秀。当整个Go后端服务开发完成之后，在上线之前，我们还需要对Web框架再次进行测试，确保按照我们最终的使用方式，Web框架仍然能够保持优秀的性能和稳定性。</p>
<p>我们通常会通过API接口来测试Web框架的性能，例如健康检查接口 <code v-pre>/healthz</code>。我们需要保证该API接口足够简单，API接口里面不应该掺杂任何逻辑，只需要象征性地返回一个很小的返回内容即可。比如，这一讲中我们通过 <code v-pre>/healthz</code> 接口来测试Web框架的性能：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>s.GET("/healthz", func(c *gin.Context) {
    core.WriteResponse(c, nil, map[string]string{"status": "ok"})
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口中只调用了 <code v-pre>core.WriteResponse</code> 函数，返回了 <code v-pre>{&quot;status&quot;:&quot;ok&quot;}</code>。这里使用 <code v-pre>core.WriteResponse</code> 函数返回请求数据，而不是直接返回 <code v-pre>ok</code> 字符串，这样做是为了保持API接口返回格式统一。</p>
<h3 id="api接口性能" tabindex="-1"><a class="header-anchor" href="#api接口性能" aria-hidden="true">#</a> API接口性能</h3>
<p>除了测试Web框架的性能，我们还可能需要测试某些重要的API接口，甚至所有API接口的性能。为了测试API接口在真实场景下的接口性能，我们会使用wrk这类HTTP压力测试工具，来模拟多个API请求，进而分析API的性能。</p>
<p>因为会模拟大量的请求，这时候测试写类接口，例如 <code v-pre>Create</code>、 <code v-pre>Update</code>、 <code v-pre>Delete</code> 等会存在一些问题，比如可能在数据库中插入了很多数据，导致磁盘空间被写满或者数据库被压爆。所以，针对写类接口，我们可以借助单元测试，来测试其性能。根据我的开发经验，写类接口通常不会有性能问题，反而读类接口更可能遇到性能问题。针对读类接口，我们可以使用wrk这类HTTP压力测试工具来进行测试。</p>
<h3 id="测试环境" tabindex="-1"><a class="header-anchor" href="#测试环境" aria-hidden="true">#</a> 测试环境</h3>
<p>在做性能/压力测试时，为了不影响生产环境，要确保在测试环境进行压测，并且测试环境的网络不能影响到生产环境的网络。另外，为了更好地进行性能对比和分析，也要保证我们的测试方法和测试环境是一致的。这就要求我们最好将性能测试自动化，并且每次在同一个测试环境进行测试。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在项目上线前，我们需要对API接口进行性能测试。通常API接口的性能延时要小于 <code v-pre>500ms</code> ，如果大于这个值，需要考虑优化性能。在进行性能测试时，需要确保每次测试都有一个一致的测试环境，这样不同测试之间的数据才具有可对比性。推荐了一个比较优秀的性能测试工具 <code v-pre>wrk</code> ，我们可以编写shell脚本，将wrk的性能测试数据自动绘制成图，方便我们查看、对比性能。</p>
<p>如果发现API接口的性能不符合预期，我们可以借助 <code v-pre>go tool pprof</code> 工具来分析性能。在 <code v-pre>go tool pprof</code> 交互界面，执行 <code v-pre>top -cum</code> 命令查看累积采样时间，根据累积采样时间确定影响性能的代码，并优化代码。优化后，再进行测试，如果不满足，继续分析API接口的性能。如此往复，直到API接口的性能满足预期为止。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>选择一个项目，并使用wrktest.sh脚本测试其API接口，分析并优化API接口的性能。</li>
<li>思考下，在你的工作中，还有没有其他好的API接口性能分析方法，欢迎在留言区分享讨论。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<p>参考：孔令飞，<a href="https://time.geekbang.org/column/article/410205" target="_blank" rel="noopener noreferrer">Go 语言项目开发实战<ExternalLinkIcon/></a></p>
<ul><li><div><a href = '30.md' style='float:left'>⬆️上一节🔗  </a><a href = '32.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


