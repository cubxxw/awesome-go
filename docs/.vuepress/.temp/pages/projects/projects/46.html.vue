<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第46节-iam排障指南" tabindex="-1"><a class="header-anchor" href="#第46节-iam排障指南" aria-hidden="true">#</a> 第46节 IAM排障指南</h1>
<br>
<div><a href = '45.md' style='float:left'>⬆️上一节🔗  </a><a href = '47.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#如何排障">如何排障？</router-link><ul><li><router-link to="#发现问题">发现问题</router-link></li><li><router-link to="#定位问题">定位问题</router-link></li><li><router-link to="#解决问题">解决问题</router-link></li></ul></li><li><router-link to="#iam常见故障及解决办法">IAM常见故障及解决办法</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<p>今天我们更新一期特别放送作为加餐。在部署和使用IAM的过程中，难免会出现一些异常(也称为故障、问题)。这时候，就需要我们能够定位故障，并修复故障。这里，我总结了一些IAM的排障方法，以及一些常见故障的解决方法，供你参考。</p>
<h2 id="如何排障" tabindex="-1"><a class="header-anchor" href="#如何排障" aria-hidden="true">#</a> 如何排障？</h2>
<p>首先，我们需要发现问题，然后定位问题。我们可能需要经过多轮分析排查才能定位到问题的根因，最后去解决问题。排障流程如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303071741286.png" alt="image-20230307174145120"></p>
<p>如果想排查问题并解决问题，你还需要具备这两个基本能力：能够理解错误日志的内容；根据错误日志，找出解决方案。</p>
<p>我们举个例子来说吧。有以下错误：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>going@dev iam<span class="token punctuation">]</span>$ mysql <span class="token parameter variable">-h127.0.0.1</span> <span class="token parameter variable">-uroot</span> -p<span class="token string">'iam59!z$'</span>
bash: /usr/bin/mysql: 没有那个文件或目录
<span class="token punctuation">[</span>going@dev iam<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这个错误，我们首先来理解错误内容：mysql命令没有找到，说明没有安装mysql，或者安装mysql失败。</p>
<p>那么，我们的解决方案就是重新执行 <a href="https://time.geekbang.org/column/article/378082" target="_blank" rel="noopener noreferrer">03讲<ExternalLinkIcon/></a> 中安装MariaDB的步骤：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token variable">$IAM_ROOT</span>
$ ./scripts/install/mariadb.sh iam::mariadb::install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我会以<code v-pre>iam-apiserver</code>服务为例，给你演示下具体如何排障并解决问题。</p>
<h3 id="发现问题" tabindex="-1"><a class="header-anchor" href="#发现问题" aria-hidden="true">#</a> 发现问题</h3>
<p>要排障，首先我们需要发现问题。我们通常用下面这几种方式来发现问题。</p>
<ul>
<li>检查服务状态：启动iam-apiserver服务后，执行<code v-pre>systemctl status iam-apiserver</code> 发现iam-apiserver启动失败，即<code v-pre>Active</code>的值不为<code v-pre>active (running)</code>。</li>
<li>功能异常：访问iam-apiserver服务，功能异常或者报错，例如接口返回值跟预期不一样等。</li>
<li>日志报错：在iam-apiserver的日志中发现一些<code v-pre>WARN</code>、<code v-pre>ERROR</code>、<code v-pre>PANIC</code>、<code v-pre>FATAL</code>等级别的错误日志。</li>
</ul>
<h3 id="定位问题" tabindex="-1"><a class="header-anchor" href="#定位问题" aria-hidden="true">#</a> 定位问题</h3>
<p>发现问题之后，就需要我们定位出问题的根本原因。我们可以通过下面这三种方式来定位问题。</p>
<ul>
<li>查看日志，它是最简单的排障方式。</li>
<li>使用Go调试工具Delve来定位问题。</li>
<li>添加Debug日志，从程序入口处跟读代码，在关键位置处打印Debug日志，来定位问题。</li>
</ul>
<p>在定位问题的过程中，我们可以采用“顺藤摸瓜”的思路去排查问题。比如，我们的程序执行流程是：<code v-pre>A -&gt; B -&gt; … -&gt; N</code>。其中A、B、N都可以理解为一个排查点。所谓的排查点，就是需要在该处定位问题的点，这些点可能是导致问题的根因所在。</p>
<p>在排障过程中，你可以根据最上层的日志报错，找到下一个排查点B。如果经过定位，发现B没有问题，那继续根据程序执行流程，找下一个排查点排查问题。如此反复，直到找到最终的排查点，也就是出问题的根因N，N即为Bug点。执行流程如下图所示：</p>
<p><img src="https://static001.geekbang.org/resource/image/cc/6d/cc26b83cb2177106695e1a9f7f09ae6d.jpg?wh=2248x931" alt="img"></p>
<p>下面，我们来具体看看这三种定位问题的方法。</p>
<h4 id="查看日志定位问题" tabindex="-1"><a class="header-anchor" href="#查看日志定位问题" aria-hidden="true">#</a> 查看日志定位问题</h4>
<p>我们首先应该通过日志来定位问题，这是最简单高效的方式。要通过日志来定位问题，你不仅要会看日志，还要能读懂日志，也就是理解日志报错的原因。</p>
<p>下面我来具体讲解用这种方法定位问题的步骤。</p>
<p><strong>第一步，确保服务运行正常。</strong></p>
<p>你可以通过执行 <code v-pre>systemctl status</code> 命令来查看服务的运行状况：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ systemctl status iam-apiserver
● iam-apiserver.service - IAM APIServer
   Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/iam-apiserver.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: activating <span class="token punctuation">(</span>auto-restart<span class="token punctuation">)</span> <span class="token punctuation">(</span>Result: exit-code<span class="token punctuation">)</span> since Thu <span class="token number">2021</span>-09-09 <span class="token number">13</span>:47:56 CST<span class="token punctuation">;</span> 2s ago
     Docs: https://github.com/marmotedu/iam/blob/master/init/README.md
  Process: <span class="token number">119463</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/opt/iam/bin/iam-apiserver <span class="token parameter variable">--config</span><span class="token operator">=</span>/etc/iam/iam-apiserver.yaml <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">1</span>/FAILURE<span class="token punctuation">)</span>
  Process: <span class="token number">119461</span> <span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/bin/mkdir <span class="token parameter variable">-p</span> /var/log/iam <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
  Process: <span class="token number">119460</span> <span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/bin/mkdir <span class="token parameter variable">-p</span> /data/iam/iam-apiserver <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">119463</span> <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">1</span>/FAILURE<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code v-pre>Active</code>不是<code v-pre>active (running)</code>，说明iam-apiserver服务没有正常运行。从上面输出中的<code v-pre>Process: 119463 ExecStart=/opt/iam/bin/iam-apiserver --config=/etc/iam/iam-apiserver.yaml (code=exited, status=1/FAILURE)</code>信息中，我们可以获取以下信息：</p>
<ul>
<li>iam-apiserver服务启动命令为<code v-pre>/opt/iam/bin/iam-apiserver --config=/etc/iam/iam-apiserver.yaml</code>。</li>
<li><code v-pre>/opt/iam/bin/iam-apiserver</code>加载的配置文件为<code v-pre>/etc/iam/iam-apiserver.yaml</code>。</li>
<li><code v-pre>/opt/iam/bin/iam-apiserver</code>命令执行失败，退出码为1，其进程ID为<code v-pre>119463</code>。</li>
</ul>
<p>这里注意，<code v-pre>systemctl status</code>会将超过一定长度的行的后半部分用省略号替代，如果想查看完整的信息，可以追加<code v-pre>-l</code>参数，也就是<code v-pre>systemctl status -l</code>来查看。</p>
<p>既然iam-apiserver命令启动失败，那我们就需要查看iam-apiserver启动时的日志，看看有没有一些报错日志。</p>
<p>接下来，就进入<strong>第二步，查看</strong><code v-pre>iam-apiserver</code><strong>运行日志。</strong></p>
<p>这里提一句，如果你对systemd不了解，也可以趁机恶补一波。你可以参考阮一峰大佬的两篇博客：<a href="https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html" target="_blank" rel="noopener noreferrer">Systemd 入门教程：命令篇<ExternalLinkIcon/></a>和<a href="https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-part-two.html" target="_blank" rel="noopener noreferrer">Systemd 入门教程：实战篇<ExternalLinkIcon/></a>。</p>
<p>那么如何查看呢？我们有3种查看方式，我在下面按优先级顺序排列了下。你在定位问题和查看日志时，按优先级3选1即可，1 &gt; 2 &gt; 3。</p>
<ol>
<li>通过<code v-pre>journalctl -u iam-apiserver</code>查看。</li>
<li>通过iam-apiserver日志文件查看。</li>
<li>通过console查看。</li>
</ol>
<p>下面我来分别介绍下这三种查看方式。</p>
<p>先来看优先级最高的方式，通过<code v-pre>journalctl -u iam-apiserver</code>查看。</p>
<p>systemd 提供了自己的日志系统，称为 journal。我们可以使用<code v-pre>journalctl</code>命令来读取journal日志。<code v-pre>journalctl</code>提供了<code v-pre>-u</code>选项来查看某个 Unit 的日志，提供了<code v-pre>_PID</code>来查看指定进程ID的日志。在<strong>第一步</strong>中，我们知道服务启动失败的进程ID为<code v-pre>119463</code>。执行以下命令来查看这次启动的日志：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> journalctl <span class="token assign-left variable">_PID</span><span class="token operator">=</span><span class="token number">119463</span>
-- Logs begin at Thu <span class="token number">2021</span>-09-09 09:12:25 CST, end at Thu <span class="token number">2021</span>-09-09 <span class="token number">14</span>:40:48 CST. --
<span class="token punctuation">..</span>.
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: <span class="token number">2021</span>-09-09 <span class="token number">13</span>:47:56.727        INFO        apiserver        gorm@v1.21.12/gorm.go:202        mysql/mysql.go:75<span class="token punctuation">[</span>error<span class="token punctuation">]</span> faile<span class="token operator">></span>
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: <span class="token number">2021</span>-09-09 <span class="token number">13</span>:47:56.727        FATAL        apiserver        apiserver/server.go:139        Failed to get cache instance: g<span class="token operator">></span>
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: github.com/marmotedu/iam/internal/apiserver.<span class="token punctuation">(</span>*completedExtraConfig<span class="token punctuation">)</span>.New
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:139
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: github.com/marmotedu/iam/internal/apiserver.createAPIServer
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:66
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: github.com/marmotedu/iam/internal/apiserver.Run
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/run.go:11
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: github.com/marmotedu/iam/internal/apiserver.run.func1
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/app.go:46
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: github.com/marmotedu/iam/pkg/app.<span class="token punctuation">(</span>*App<span class="token punctuation">)</span>.runCommand
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:278
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: github.com/spf13/cobra.<span class="token punctuation">(</span>*Command<span class="token punctuation">)</span>.execute
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/pkg/mod/github.com/spf13/cobra@v1.2.1/command.go:856
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: github.com/spf13/cobra.<span class="token punctuation">(</span>*Command<span class="token punctuation">)</span>.ExecuteC
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/pkg/mod/github.com/spf13/cobra@v1.2.1/command.go:974
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: github.com/spf13/cobra.<span class="token punctuation">(</span>*Command<span class="token punctuation">)</span>.Execute
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/pkg/mod/github.com/spf13/cobra@v1.2.1/command.go:902
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: github.com/marmotedu/iam/pkg/app.<span class="token punctuation">(</span>*App<span class="token punctuation">)</span>.Run
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:233
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: main.main
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/workspace/golang/src/github.com/marmotedu/iam/cmd/iam-apiserver/apiserver.go:24
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>: runtime.main
Sep 09 <span class="token number">13</span>:47:56 VM-200-70-centos iam-apiserver<span class="token punctuation">[</span><span class="token number">119463</span><span class="token punctuation">]</span>:         /home/going/go/go1.16.2/src/runtime/proc.go:225
lines <span class="token number">10</span>-54/54 <span class="token punctuation">(</span>END<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的日志中，我们找到了服务启动失败的原因：<code v-pre>iam-apiserver</code>启动时，发生了<code v-pre>FATAL</code>级别的错误。到这里，你已经初步定位到问题原因了。</p>
<p>我们再来看通过iam-apiserver日志文件查看的方式。</p>
<p>作为一个企业级的实战项目，iam-apiserver的日志当然是会记录到日志文件中的。在<strong>第一步</strong>中，我们通过<code v-pre>systemctl status iam-apiserver</code>输出的信息，知道了iam-apiserver启动时加载的配置文件为<code v-pre>/etc/iam/iam-apiserver.yaml</code>。所以，我们可以通过iam-apiserver的配置文件iam-apiserver.yaml中的<code v-pre>log.output-paths</code>配置项，查看记录日志文件的位置：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>log:
    name: apiserver <span class="token comment"># Logger的名字</span>
    development: <span class="token boolean">true</span> <span class="token comment"># 是否是开发模式。如果是开发模式，会对DPanicLevel进行堆栈跟踪。</span>
    level: debug <span class="token comment"># 日志级别，优先级从低到高依次为：debug, info, warn, error, dpanic, panic, fatal。</span>
    format: console <span class="token comment"># 支持的日志输出格式，目前支持console和json两种。console其实就是text格式。</span>
    enable-color: <span class="token boolean">true</span> <span class="token comment"># 是否开启颜色输出，true:是，false:否</span>
    disable-caller: <span class="token boolean">false</span> <span class="token comment"># 是否开启 caller，如果开启会在日志中显示调用日志所在的文件、函数和行号</span>
    disable-stacktrace: <span class="token boolean">false</span> <span class="token comment"># 是否在panic及以上级别禁止打印堆栈信息</span>
    output-paths: /var/log/iam/iam-apiserver.log,stdout <span class="token comment"># 支持输出到多个输出，逗号分开。支持输出到标准输出（stdout）和文件。</span>
    error-output-paths: /var/log/iam/iam-apiserver.error.log <span class="token comment"># zap内部(非业务)错误日志输出路径，多个输出，逗号分开</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，iam-apiserver将日志分别记录到了<code v-pre>/var/log/iam/iam-apiserver.log</code>和<code v-pre>stdout</code>中。所以，我们可以通过查看<code v-pre>/var/log/iam/iam-apiserver.log</code>日志文件，来查看报错信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">tail</span> <span class="token parameter variable">-25</span> /var/log/iam/iam-apiserver.log
<span class="token punctuation">..</span>.
<span class="token number">2021</span>-09-09 <span class="token number">15</span>:42:35.231  INFO  apiserver  server/genericapiserver.go:88  GET    /version --<span class="token operator">></span> github.com/marmotedu/iam/internal/pkg/server.<span class="token punctuation">(</span>*GenericAPIServer<span class="token punctuation">)</span>.InstallAPIs.func2 <span class="token punctuation">(</span><span class="token number">10</span> handlers<span class="token punctuation">)</span>
<span class="token number">2021</span>-09-09 <span class="token number">15</span>:42:35.232  INFO  apiserver  gorm@v1.21.12/gorm.go:202  mysql/mysql.go:75<span class="token punctuation">[</span>error<span class="token punctuation">]</span> failed to initialize database, got error dial tcp <span class="token number">127.0</span>.0.1:3309: connect: connection refused
<span class="token number">2021</span>-09-09 <span class="token number">15</span>:42:35.232  FATAL  apiserver  apiserver/server.go:139  Failed to get cache instance: got nil cache server
github.com/marmotedu/iam/internal/apiserver.<span class="token punctuation">(</span>*completedExtraConfig<span class="token punctuation">)</span>.New
  /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:139
github.com/marmotedu/iam/internal/apiserver.createAPIServer
  /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:66
github.com/marmotedu/iam/internal/apiserver.Run
  /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/run.go:11
github.com/marmotedu/iam/internal/apiserver.run.func1
  /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/app.go:46
github.com/marmotedu/iam/pkg/app.<span class="token punctuation">(</span>*App<span class="token punctuation">)</span>.runCommand
  /home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:278
github.com/spf13/cobra.<span class="token punctuation">(</span>*Command<span class="token punctuation">)</span>.execute
  /home/going/workspace/golang/pkg/mod/github.com/spf13/cobra@v1.2.1/command.go:856
github.com/spf13/cobra.<span class="token punctuation">(</span>*Command<span class="token punctuation">)</span>.ExecuteC
  /home/going/workspace/golang/pkg/mod/github.com/spf13/cobra@v1.2.1/command.go:974
github.com/spf13/cobra.<span class="token punctuation">(</span>*Command<span class="token punctuation">)</span>.Execute
  /home/going/workspace/golang/pkg/mod/github.com/spf13/cobra@v1.2.1/command.go:902
github.com/marmotedu/iam/pkg/app.<span class="token punctuation">(</span>*App<span class="token punctuation">)</span>.Run
  /home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:233
main.main
  /home/going/workspace/golang/src/github.com/marmotedu/iam/cmd/iam-apiserver/apiserver.go:24
runtime.main
  /home/going/go/go1.16.2/src/runtime/proc.go:225
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再来看最后一种查看方式，通过console查看。</p>
<p>当然，我们也可以直接通过console来看日志，这就需要我们在Linux终端前台运行iam-apiserver（在<strong>第一步</strong>中，我们已经知道了启动命令）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> /opt/iam/bin/iam-apiserver <span class="token parameter variable">--config</span><span class="token operator">=</span>/etc/iam/iam-apiserver.yaml
<span class="token punctuation">..</span>.
<span class="token number">2021</span>-09-09 <span class="token number">15</span>:47:00.660  INFO  apiserver  server/genericapiserver.go:88  GET    /debug/pprof/mutex --<span class="token operator">></span> github.com/gin-contrib/pprof.pprofHandler.func1 <span class="token punctuation">(</span><span class="token number">10</span> handlers<span class="token punctuation">)</span>
<span class="token number">2021</span>-09-09 <span class="token number">15</span>:47:00.660  INFO  apiserver  server/genericapiserver.go:88  GET    /debug/pprof/threadcreate --<span class="token operator">></span> github.com/gin-contrib/pprof.pprofHandler.func1 <span class="token punctuation">(</span><span class="token number">10</span> handlers<span class="token punctuation">)</span>
<span class="token number">2021</span>-09-09 <span class="token number">15</span>:47:00.660  INFO  apiserver  server/genericapiserver.go:88  GET    /version --<span class="token operator">></span> github.com/marmotedu/iam/internal/pkg/server.<span class="token punctuation">(</span>*GenericAPIServer<span class="token punctuation">)</span>.InstallAPIs.func2 <span class="token punctuation">(</span><span class="token number">10</span> handlers<span class="token punctuation">)</span>
<span class="token number">2021</span>-09-09 <span class="token number">15</span>:47:00.661  INFO  apiserver  gorm@v1.21.12/gorm.go:202  mysql/mysql.go:75<span class="token punctuation">[</span>error<span class="token punctuation">]</span> failed to initialize database, got error dial tcp <span class="token number">127.0</span>.0.1:3309: connect: connection refused
<span class="token number">2021</span>-09-09 <span class="token number">15</span>:47:00.661  FATAL  apiserver  apiserver/server.go:139  Failed to get cache instance: got nil cache server
github.com/marmotedu/iam/internal/apiserver.<span class="token punctuation">(</span>*completedExtraConfig<span class="token punctuation">)</span>.New
  /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:139
github.com/marmotedu/iam/internal/apiserver.createAPIServer
  /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/server.go:66
github.com/marmotedu/iam/internal/apiserver.Run
  /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/run.go:11
github.com/marmotedu/iam/internal/apiserver.run.func1
  /home/going/workspace/golang/src/github.com/marmotedu/iam/internal/apiserver/app.go:46
github.com/marmotedu/iam/pkg/app.<span class="token punctuation">(</span>*App<span class="token punctuation">)</span>.runCommand
  /home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:278
github.com/spf13/cobra.<span class="token punctuation">(</span>*Command<span class="token punctuation">)</span>.execute
  /home/going/workspace/golang/pkg/mod/github.com/spf13/cobra@v1.2.1/command.go:856
github.com/spf13/cobra.<span class="token punctuation">(</span>*Command<span class="token punctuation">)</span>.ExecuteC
  /home/going/workspace/golang/pkg/mod/github.com/spf13/cobra@v1.2.1/command.go:974
github.com/spf13/cobra.<span class="token punctuation">(</span>*Command<span class="token punctuation">)</span>.Execute
  /home/going/workspace/golang/pkg/mod/github.com/spf13/cobra@v1.2.1/command.go:902
github.com/marmotedu/iam/pkg/app.<span class="token punctuation">(</span>*App<span class="token punctuation">)</span>.Run
  /home/going/workspace/golang/src/github.com/marmotedu/iam/pkg/app/app.go:233
main.main
  /home/going/workspace/golang/src/github.com/marmotedu/iam/cmd/iam-apiserver/apiserver.go:24
runtime.main
  /home/going/go/go1.16.2/src/runtime/proc.go:225
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面这3种查看方式，我们均能初步定位到服务异常的原因。</p>
<h4 id="使用go调试工具delve来定位问题" tabindex="-1"><a class="header-anchor" href="#使用go调试工具delve来定位问题" aria-hidden="true">#</a> 使用Go调试工具Delve来定位问题</h4>
<p>查看日志是最简单的排障方式，通过查看日志，我们可能定位出问题的根本原因，这种情况下问题就能得到快速的解决。但有些情况下，我们通过日志并不一定能定位出问题，例如：</p>
<ul>
<li>程序异常，但是没有错误日志。</li>
<li>日志有报错，但只能判断问题的面，还不能精准找到问题的根因。</li>
</ul>
<p>遇到上面这两种情况，我们都需要再进一步地定位问题。这时候，我们可以使用Delve调试工具来尝试定位问题。Delve工具的用法你可以参考 <a href="https://github.com/marmotedu/geekbang-go/blob/master/Delve%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3.md" target="_blank" rel="noopener noreferrer">Delve使用详解<ExternalLinkIcon/></a>。</p>
<h4 id="添加debug日志定位问题" tabindex="-1"><a class="header-anchor" href="#添加debug日志定位问题" aria-hidden="true">#</a> 添加Debug日志定位问题</h4>
<p>如果使用 Delve 工具仍然没有定位出问题，接下来你可以尝试最原始的方法：添加Debug日志来定位问题。这种方法具体可以分为两个步骤。</p>
<p><strong>第一步，在关键代码段添加Debug日志。</strong></p>
<p>你需要根据自己对代码的理解来决定关键代码段。如果不确定哪段代码出问题，可以从请求入口处添加Debug日志，然后跟着代码流程一步步往下排查，并在需要的地方添加Debug日志。</p>
<p>例如，通过排查日志，我们定位到<code v-pre>internal/apiserver/server.go:139</code>位置的代码导致程序FATAL，FATAL原因是<code v-pre>Failed to get cache instance: got nil cache server</code>。<code v-pre>cache server</code>是<code v-pre>nil</code>，说明<code v-pre>cache server</code>没有被初始化。查看<code v-pre>cache server</code>初始化函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">GetCacheInsOr</span><span class="token punctuation">(</span>store store<span class="token punctuation">.</span>Factory<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Cache<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> store <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cacheServer <span class="token operator">=</span> <span class="token operator">&amp;</span>Cache<span class="token punctuation">{</span>store<span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> cacheServer <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"got nil cache server"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> cacheServer<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们不难分析出，是<code v-pre>store == nil</code>导致<code v-pre>cacheServer</code>没有被初始化。再来看下store的初始化代码，并加一些Debug日志，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303071810106.png" alt="图片"></p>
<p>我们添加完Debug代码后，就可以重新编译并运行程序了。</p>
<p>这里有个小技巧：可以在错误返回的位置添加Debug日志，这样能大概率帮助你定位到出错的位置，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">Debugf</span><span class="token punctuation">(</span><span class="token string">"DEBUG POINT - 1: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二步，重新编译源码，并启动。</strong></p>
<p>*这里为了调试、看日志方便，我们直接在Linux终端的前端运行iam-apiserver：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> /opt/iam/bin/iam-apiserver <span class="token parameter variable">--config</span><span class="token operator">=</span>/etc/iam/iam-apiserver.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看我们添加的Debug日志打印的内容，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303071813916.png" alt="图片"></p>
<p>从Debug日志中，可以看到用来创建MySQL实例的端口是错误的，正确的端口应该是<code v-pre>3306</code>，而不是<code v-pre>3309</code>。MySQL服务器的端口是在iam-apiserver.yaml中配置的。修改iam-apiserver.yaml为正确的配置，并启动：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> /opt/iam/bin/iam-apiserver <span class="token parameter variable">--config</span><span class="token operator">=</span>/etc/iam/iam-apiserver.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看console日志，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/f7/9d/f72b766b7504016259bef04eb03dac9d.png?wh=1920x271" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/f7/9d/f72b766b7504016259bef04eb03dac9d.png?wh=1920x271" alt="图片"><ExternalLinkIcon/></a></p>
<p>可以看到问题已经修复，<code v-pre>dbIns</code>不为<code v-pre>nil</code>，程序正常运行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ systemctl status iam-apiserver
● iam-apiserver.service - IAM APIServer
   Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/iam-apiserver.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Thu <span class="token number">2021</span>-09-09 <span class="token number">20</span>:48:18 CST<span class="token punctuation">;</span> 17s ago
     Docs: https://github.com/marmotedu/iam/blob/master/init/README.md
  Process: <span class="token number">255648</span> <span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/bin/mkdir <span class="token parameter variable">-p</span> /var/log/iam <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
  Process: <span class="token number">255647</span> <span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/bin/mkdir <span class="token parameter variable">-p</span> /data/iam/iam-apiserver <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">255650</span> <span class="token punctuation">(</span>iam-apiserver<span class="token punctuation">)</span>
    Tasks: <span class="token number">5</span> <span class="token punctuation">(</span>limit: <span class="token number">23724</span><span class="token punctuation">)</span>
   Memory: <span class="token number">7</span>.3M
   CGroup: /system.slice/iam-apiserver.service
           └─255650 /opt/iam/bin/iam-apiserver <span class="token parameter variable">--config</span><span class="token operator">=</span>/etc/iam/iam-apiserver.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，<code v-pre>Active</code>为<code v-pre>active (running)</code>状态。</p>
<p>因为这些Debug日志能够协助你定位问题，从侧面说明这些日志是有用的，所以你可以保留这些Debug日志调用代码。</p>
<h3 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题" aria-hidden="true">#</a> 解决问题</h3>
<p>在定位问题阶段，我们已经找到了问题的原因，接下来就可以根据自己对业务、底层代码实现的掌握和理解，修复这个问题了。至于怎么修复，你需要结合具体情况来判断，并没有统一的流程和方法论，这里就不多介绍了。</p>
<p>上面，我介绍了排查问题的思路和方法。接下来，我来向你展示9个在部署和使用IAM系统时容易遇到的问题，并提供解决方法。这些问题基本上都是由服务器环境引起的。</p>
<h2 id="iam常见故障及解决办法" tabindex="-1"><a class="header-anchor" href="#iam常见故障及解决办法" aria-hidden="true">#</a> IAM常见故障及解决办法</h2>
<p>问题一：安装neovim，报 <code v-pre>No match for argument: neovim</code> 错误。</p>
<p>解决方法是安装 EPEL 源：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>问题二：安装protoc-gen-go失败（超时、报错等）。</p>
<p>这个故障出现，可能是因为你当前服务器所在的网络环境无法访问<code v-pre>github.com</code>，或者访问<code v-pre>github.com</code>速度太慢。</p>
<p>解决方法是手动编译安装，方法如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/golang/protobuf <span class="token variable">$GOPATH</span>/src/github.com/golang/protobuf
$ <span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/github.com/golang/protobuf/protoc-gen-go
$ go <span class="token function">install</span> <span class="token parameter variable">-v</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题三：遇到<code v-pre>xxx: permission denied</code>这类的错误。</p>
<p>出现这种错误，是因为你没有权限执行当前的操作。解决方法是排查自己是否有权限执行当前操作。如果没有权限，需要你切换到有权限的用户，或者放弃执行当前操作。</p>
<p>为了说明问题，这里我举一个错误例子，并给出排查思路。例子的错误日志如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>going@VM-8-9-centos /<span class="token punctuation">]</span>$ go get <span class="token parameter variable">-u</span> github.com/golang/protobuf/protoc-gen-go
go: could not create module cache: <span class="token function">mkdir</span> /golang: permission denied
<span class="token punctuation">[</span>going@VM-8-9-centos /<span class="token punctuation">]</span>$ <span class="token function">sudo</span> go get <span class="token parameter variable">-u</span> github.com/golang/protobuf/protoc-gen-go
sudo: go: <span class="token builtin class-name">command</span> not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述错误中， 一共报了两个错误，分别是<code v-pre>mkdir /golang: permission denied</code>和<code v-pre>sudo: go: command not found</code>。我们先来看<code v-pre>mkdir /golang: permission denied</code>错误。</p>
<p>通过命令行提示符<code v-pre>$</code>可以知道，当前登陆用户是普通用户；通过报错<code v-pre>mkdir /golang: permission denied</code>可以知道<code v-pre>go get -u github.com/golang/protobuf/protoc-gen-go</code>命令底层执行了<code v-pre>mkdir /golang</code>，因为普通用户没有写<code v-pre>/</code> 目录的权限，所以会报权限错误。解决方法是切换到用户的目录下，执行<code v-pre>go get -u</code>命令。</p>
<p>我们再来看下<code v-pre>sudo: go: command not found</code>错误。<code v-pre>sudo</code>命令会将命令执行的环境切换到<code v-pre>root</code>用户，<code v-pre>root</code>用户显然是没有安装<code v-pre>go</code>命令的，所以会导致<code v-pre>command not found</code>错误。解决方式是去掉 <code v-pre>sudo</code> ，直接执行 <code v-pre>$ go get -u xxx</code> 。</p>
<p>问题四：VimIDE使用过程中，报各类错误。</p>
<p>这里的报错原因跟环境有关系，安装VimIDE时的系统环境、包的版本等等，都可能会导致使用VimIDE报错。因为错误类型太多，没法一一说明，所以我建议你忽略这些错误，其实完全不影响后面的学习。</p>
<p>问题五：访问iam-authz-server的<code v-pre>/v1/authz</code>接口报<code v-pre>{&quot;code&quot;:100202,&quot;message&quot;:&quot;Signature is invalid&quot;}</code>。</p>
<p>这时可能是签发的Token有问题，建议重新执行以下5个步骤：</p>
<ol>
<li>重新登陆系统，并获取访问令牌：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">token</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">'Content-Type: application/json'</span> -d<span class="token string">'{"username":"admin","password":"Admin@2021"}'</span> http://127.0.0.1:8080/login <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> .token<span class="token variable">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有安装<code v-pre>jq</code>命令，可以执行<code v-pre>sudo yum -y install jq</code>命令来安装。</p>
<ol>
<li>创建授权策略：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">"Content-Type: application/json"</span> -H<span class="token string">"Authorization: Bearer <span class="token variable">$token</span>"</span> -d<span class="token string">'{"metadata":{"name":"authztest"},"policy":{"description":"One policy to rule them all.","subjects":["users:&lt;peter|ken>","users:maria","groups:admins"],"actions":["delete","&lt;create|update>"],"effect":"allow","resources":["resources:articles:&lt;.>","resources:printer"],"conditions":{"remoteIPAddress":{"type":"CIDRCondition","options":{"cidr":"192.168.0.1/16"}}}}}'</span> http://127.0.0.1:8080/v1/policies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>创建密钥，并从命令的输出中提取secretID 和 secretKey：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">"Content-Type: application/json"</span> -H<span class="token string">"Authorization: Bearer <span class="token variable">$token</span>"</span> -d<span class="token string">'{"metadata":{"name":"authztest"},"expires":0,"description":"admin secret"}'</span> http://127.0.0.1:8080/v1/secrets
<span class="token punctuation">{</span><span class="token string">"metadata"</span>:<span class="token punctuation">{</span><span class="token string">"id"</span>:23,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"authztest"</span>,<span class="token string">"createdAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-04-08T07:24:50.071671422+08:00"</span>,<span class="token string">"updatedAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-04-08T07:24:50.071671422+08:00"</span><span class="token punctuation">}</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"admin"</span>,<span class="token string">"secretID"</span><span class="token builtin class-name">:</span><span class="token string">"ZuxvXNfG08BdEMqkTaP41L2DLArlE6Jpqoox"</span>,<span class="token string">"secretKey"</span><span class="token builtin class-name">:</span><span class="token string">"7Sfa5EfAPIwcTLGCfSvqLf0zZGCjF3l8"</span>,<span class="token string">"expires"</span>:0,<span class="token string">"description"</span><span class="token builtin class-name">:</span><span class="token string">"admin secret"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>生成访问 iam-authz-server 的 Token</li>
</ol>
<p>iamctl 提供了 <code v-pre>jwt sigin</code> 命令，你可以根据 <code v-pre>secretID</code> 和 <code v-pre>secretKey</code> 签发 Token，方便你使用。签发Token的具体命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iamctl jwt sign ZuxvXNfG08BdEMqkTaP41L2DLArlE6Jpqoox 7Sfa5EfAPIwcTLGCfSvqLf0zZGCjF3l8 <span class="token comment"># iamctl jwt sign $secretID $secretKey</span>
eyJhbGciOiJIUzI1NiIsImtpZCI6Ilp1eHZYTmZHMDhCZEVNcWtUYVA0MUwyRExBcmxFNkpwcW9veCIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXV0aHoubWFybW90ZWR1LmNvbSIsImV4cCI6MTYxNzg0NTE5NSwiaWF0IjoxNjE3ODM3OTk1LCJpc3MiOiJpYW1jdGwiLCJuYmYiOjE2MTc4Mzc5OTV9.za9yLM7lHVabPAlVQLCqXEaf8sTU6sodAsMXnmpXjMQ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>测试资源授权是否通过：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">'Content-Type: application/json'</span> -H<span class="token string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6Ilp1eHZYTmZHMDhCZEVNcWtUYVA0MUwyRExBcmxFNkpwcW9veCIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXV0aHoubWFybW90ZWR1LmNvbSIsImV4cCI6MTYxNzg0NTE5NSwiaWF0IjoxNjE3ODM3OTk1LCJpc3MiOiJpYW1jdGwiLCJuYmYiOjE2MTc4Mzc5OTV9.za9yLM7lHVabPAlVQLCqXEaf8sTU6sodAsMXnmpXjMQ'</span> -d<span class="token string">'{"subject":"users:maria","action":"delete","resource":"resources:articles:ladon-introduction","context":{"remoteIPAddress":"192.168.0.5"}}'</span> http://127.0.0.1:9090/v1/authz
<span class="token punctuation">{</span><span class="token string">"allowed"</span>:true<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>问题六：执行<code v-pre>iamctl user list</code>报<code v-pre>error: {&quot;code&quot;:100207,&quot;message&quot;:&quot;Permission denied&quot;}</code>。</p>
<p>出现这种情况，可能是密码没有配置正确。</p>
<p>你可以看下<code v-pre>$HOME/.iam/iamctl.yaml</code>配置文件中的用户名和密码配置的是不是admin，以及admin的密码是否是<code v-pre>Admin@2021</code>。</p>
<p>问题七：在创建用户时报<code v-pre>{&quot;code&quot;:100101,&quot;message&quot;:&quot;Database error&quot;}</code>错误。</p>
<p>出现这种情况，可能是用户名重了，建议换个新的用户名再次创建。</p>
<p>问题八：报<code v-pre>No such file or directory</code>、<code v-pre>command not found</code>、<code v-pre>permission denied</code>错误。</p>
<p>遇到这类错误，要根据提示排查和解决问题。</p>
<ul>
<li><code v-pre>No such file or directory</code>：确认文件是否存在，不存在的原因是什么。</li>
<li><code v-pre>command not found</code>：确认命令是否存在，如果不存在，可以重新安装命令。</li>
<li><code v-pre>permission denied</code>：确认是否有操作权限，如果没有，要切换到有权限的用户或者目录。</li>
</ul>
<p>问题九：报<code v-pre>iam-apiserver.service</code>、<code v-pre>/opt/iam/bin/iam-apiserver</code>、<code v-pre>/etc/iam/iam-apiserver.yaml</code>文件不存在。</p>
<p>我来介绍下这些文件的作用。</p>
<ul>
<li><code v-pre>/etc/systemd/system/iam-apiserver.service</code>：iam-apiserver的sysmted Unit文件。</li>
<li><code v-pre>/opt/iam/bin/iam-apiserver</code>：iam-apiserver的二进制启动命令。</li>
<li><code v-pre>/etc/iam/iam-apiserver.yaml</code>：iam-apiserver的配置文件。</li>
</ul>
<p>如果某个文件不存在，那就需要你重新安装这些文件。我来分别介绍这三个文件的安装方法。</p>
<p><code v-pre>/etc/systemd/system/iam-apiserver.service</code>安装方法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token variable">$IAM_ROOT</span>
$ ./scripts/genconfig.sh scripts/install/environment.sh init/iam-apiserver.service <span class="token operator">></span> iam-apiserver.service
$ <span class="token function">sudo</span> <span class="token function">mv</span> iam-apiserver.service /etc/systemd/system/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>/opt/iam/bin/iam-apiserver</code>安装方法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token variable">$IAM_ROOT</span>
$ <span class="token builtin class-name">source</span> scripts/install/environment.sh
$ <span class="token function">make</span> build <span class="token assign-left variable">BINS</span><span class="token operator">=</span>iam-apiserver
$ <span class="token function">sudo</span> <span class="token function">cp</span> _output/platforms/linux/amd64/iam-apiserver <span class="token variable">${IAM_INSTALL_DIR}</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>/etc/iam/iam-apiserver.yaml</code>安装方法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token variable">$IAM_ROOT</span>
$ ./scripts/genconfig.sh scripts/install/environment.sh configs/iam-apiserver.yaml <span class="token operator">></span> iam-apiserver.yaml
$ <span class="token function">sudo</span> <span class="token function">mv</span> iam-apiserver.yaml <span class="token variable">${IAM_CONFIG_DIR}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲，我以<code v-pre>iam-apiserver</code>服务为例，向你介绍了排障的基本流程：发现问题 -&gt; 定位问题 -&gt; 解决问题。</p>
<p>你可以通过三种方式来发现问题。</p>
<ul>
<li>检查服务状态：启动iam-apiserver服务后，执行<code v-pre>systemctl status iam-apiserver</code> 发现iam-apiserver启动失败，即<code v-pre>Active</code>的值不为<code v-pre>active (running)</code>。</li>
<li>功能异常：访问iam-apiserver服务，功能异常或者报错，例如接口返回值跟预期不一样；接口报错。</li>
<li>日志报错：在iam-apiserver的日志中发现一些<code v-pre>WARN</code>、<code v-pre>ERROR</code>、<code v-pre>PANIC</code>、<code v-pre>FATAL</code>等高级别的错误日志。</li>
</ul>
<p>发现问题之后，你可以通过查看日志、使用Go调试工具Delve和添加Debug日志这三种方式来定位问题。</p>
<ul>
<li>查看日志：查看日志是最简单的排障方式。</li>
<li>使用Go调试工具Delve来定位问题。</li>
<li>添加Debug日志：从程序入口处跟读代码，在关键位置处打印Debug日志，来定位问题。</li>
</ul>
<p>找到问题根因之后，就要解决问题。你需要根据自己对业务、底层代码实现的掌握和理解，解决这个问题。</p>
<p>最后，我向你展示了9个在部署和使用IAM系统时容易遇到的问题，并提供了解决方法，希望能给你一些切实的帮助。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>思考下，如何查找iam-apiserver的systemd Unit文件的路径？</li>
<li>执行以下命令：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">token</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">'Content-Type: application/json'</span> -d<span class="token string">'{"username":"admin","password":"Admin@2021"}'</span> http://127.0.0.1:8080/login <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> .token<span class="token variable">`</span></span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$token</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以获取<code v-pre>token</code>，但发现<code v-pre>token</code>值为空。请给出你的排障流程和方法。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '45.md' style='float:left'>⬆️上一节🔗  </a><a href = '47.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


