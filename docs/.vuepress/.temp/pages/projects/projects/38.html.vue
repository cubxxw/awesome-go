<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第38节-如何制作docker镜像" tabindex="-1"><a class="header-anchor" href="#第38节-如何制作docker镜像" aria-hidden="true">#</a> 第38节 如何制作Docker镜像？</h1>
<br>
<div><a href = '37.md' style='float:left'>⬆️上一节🔗  </a><a href = '39.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#docker镜像的构建原理和方式">Docker镜像的构建原理和方式</router-link><ul><li><router-link to="#通过docker-commit命令构建镜像">通过docker commit命令构建镜像</router-link></li><li><router-link to="#通过dockerfile来构建镜像">通过Dockerfile来构建镜像</router-link></li><li><router-link to="#其他制作镜像方式">其他制作镜像方式</router-link></li></ul></li><li><router-link to="#dockerfile指令介绍">Dockerfile指令介绍</router-link></li><li><router-link to="#dockerfile最佳实践">Dockerfile最佳实践</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>要落地云原生架构，其中的一个核心点是通过容器来部署我们的应用。如果要使用容器来部署应用，那么制作应用的Docker镜像就是我们绕不开的关键一步。今天，我就来详细介绍下如何制作Docker镜像。</p>
<p>在这一讲中，我会先讲解下Docker镜像的构建原理和方式，然后介绍Dockerfile的指令，以及如何编写Dockerfile文件。最后，介绍下编写Dockerfile文件时要遵循的一些最佳实践。</p>
<h2 id="docker镜像的构建原理和方式" tabindex="-1"><a class="header-anchor" href="#docker镜像的构建原理和方式" aria-hidden="true">#</a> Docker镜像的构建原理和方式</h2>
<p>首先，我们来看下Docker镜像构建的原理和方式。</p>
<p>我们可以用多种方式来构建一个Docker镜像，最常用的有两种：</p>
<ul>
<li>通过<code v-pre>docker commit</code>命令，基于一个已存在的容器构建出镜像。</li>
<li>编写Dockerfile文件，并使用<code v-pre>docker build</code>命令来构建镜像。</li>
</ul>
<p>上面这两种方法中，镜像构建的底层原理是相同的，都是通过下面3个步骤来构建镜像：</p>
<ol>
<li>基于原镜像，启动一个Docker容器。</li>
<li>在容器中进行一些操作，例如执行命令、安装文件等。由这些操作产生的文件变更都会被记录在容器的存储层中。</li>
<li>将容器存储层的变更commit到新的镜像层中，并添加到原镜像上。</li>
</ol>
<p>下面，我们来具体讲解这两种构建Docker镜像的方式。</p>
<h3 id="通过docker-commit命令构建镜像" tabindex="-1"><a class="header-anchor" href="#通过docker-commit命令构建镜像" aria-hidden="true">#</a> 通过<code v-pre>docker commit</code>命令构建镜像</h3>
<p>我们可以通过<code v-pre>docker commit</code>来构建一个镜像，命令的格式为<code v-pre>docker commit [选项] [&lt;仓库名&gt;[:&lt;标签&gt;]]</code>。</p>
<p>下图中，我们通过4个步骤构建了Docker镜像<code v-pre>ccr.ccs.tencentyun.com/marmotedu/iam-apiserver-amd64:test</code>：</p>
<p><img src="http://sm.nsddd.top/sm202303062205203.png" alt="图片"></p>
<p>具体步骤如下：</p>
<ol>
<li>执行<code v-pre>docker ps</code>获取需要构建镜像的容器ID <code v-pre>48d1dbb89a7f</code>。</li>
<li>执行<code v-pre>docker pause 48d1dbb89a7f</code>暂停<code v-pre>48d1dbb89a7f</code>容器的运行。</li>
<li>执行<code v-pre>docker commit 48d1dbb89a7f ccr.ccs.tencentyun.com/marmotedu/iam-apiserver-amd64:test</code>，基于容器ID <code v-pre>48d1dbb89a7f</code>构建Docker镜像。</li>
<li>执行<code v-pre>docker images ccr.ccs.tencentyun.com/marmotedu/iam-apiserver-amd64:test</code>，查看镜像是否成功构建。</li>
</ol>
<p>这种镜像构建方式通常用在下面两个场景中：</p>
<ul>
<li>构建临时的测试镜像；</li>
<li>容器被入侵后，使用<code v-pre>docker commit</code>，基于被入侵的容器构建镜像，从而保留现场，方便以后追溯。</li>
</ul>
<p>除了这两种场景，我不建议你使用<code v-pre>docker commit</code>来构建生产现网环境的镜像。我这么说的主要原因有两个：</p>
<ul>
<li>使用<code v-pre>docker commit</code>构建的镜像包含了编译构建、安装软件，以及程序运行产生的大量无用文件，这会导致镜像体积很大，非常臃肿。</li>
<li>使用<code v-pre>docker commit</code>构建的镜像会丢失掉所有对该镜像的操作历史，无法还原镜像的构建过程，不利于镜像的维护。</li>
</ul>
<p>下面，我们再来看看如何使用<code v-pre>Dockerfile</code>来构建镜像。</p>
<h3 id="通过dockerfile来构建镜像" tabindex="-1"><a class="header-anchor" href="#通过dockerfile来构建镜像" aria-hidden="true">#</a> 通过<code v-pre>Dockerfile</code>来构建镜像</h3>
<p>在实际开发中，使用<code v-pre>Dockerfile</code>来构建是最常用，也最标准的镜像构建方法。<code v-pre>Dockerfile</code>是Docker用来构建镜像的文本文件，里面包含了一系列用来构建镜像的指令。</p>
<p><code v-pre>docker build</code>命令会读取<code v-pre>Dockerfile</code>的内容，并将<code v-pre>Dockerfile</code>的内容发送给Docker引擎，最终Docker引擎会解析<code v-pre>Dockerfile</code>中的每一条指令，构建出需要的镜像。</p>
<p><code v-pre>docker build</code>的命令格式为<code v-pre>docker build [OPTIONS] PATH | URL | -</code>。<code v-pre>PATH</code>、<code v-pre>URL</code>、<code v-pre>-</code>指出了构建镜像的上下文（context），context中包含了构建镜像需要的<code v-pre>Dockerfile</code>文件和其他文件。默认情况下，Docker构建引擎会查找context中名为<code v-pre>Dockerfile</code>的文件，但你可以通过<code v-pre>-f, --file</code>选项，手动指定<code v-pre>Dockerfile</code>文件。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> $ <span class="token function">docker</span> build <span class="token parameter variable">-f</span> Dockerfile <span class="token parameter variable">-t</span> ccr.ccs.tencentyun.com/marmotedu/iam-apiserver-amd64:test <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code v-pre>Dockerfile</code>构建镜像，本质上也是通过镜像创建容器，并在容器中执行相应的指令，然后停止容器，提交存储层的文件变更。和用<code v-pre>docker commit</code>构建镜像的方式相比，它有三个好处：</p>
<ul>
<li><code v-pre>Dockerfile</code> 包含了镜像制作的完整操作流程，其他开发者可以通过 Dockerfile 了解并复现制作过程。</li>
<li><code v-pre>Dockerfile</code> 中的每一条指令都会创建新的镜像层，这些镜像可以被 Docker Daemnon 缓存。再次制作镜像时，Docker 会尽量复用缓存的镜像层（using cache），而不是重新逐层构建，这样可以节省时间和磁盘空间。</li>
<li>Dockerfile 的操作流程可以通过<code v-pre>docker image history [镜像名称]</code>查询，方便开发者查看变更记录。</li>
</ul>
<p>这里，我们通过一个示例，来详细介绍下通过<code v-pre>Dockerfile</code>构建镜像的流程。</p>
<p>**首先，**我们需要编写一个<code v-pre>Dockerfile</code>文件。下面是iam-apiserver的<a href="https://github.com/marmotedu/iam/blob/v1.0.8/build/docker/iam-apiserver/Dockerfile" target="_blank" rel="noopener noreferrer">Dockerfile<ExternalLinkIcon/></a>文件内容：</p>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> centos:centos8</span>
<span class="token instruction"><span class="token keyword">LABEL</span> maintainer=<span class="token string">"&lt;colin404@foxmail.com>"</span></span>

<span class="token instruction"><span class="token keyword">RUN</span> ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">"Asia/Shanghai"</span> > /etc/timezone</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /opt/iam</span>
<span class="token instruction"><span class="token keyword">COPY</span> iam-apiserver /opt/iam/bin/</span>

<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">"/opt/iam/bin/iam-apiserver"</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里选择<code v-pre>centos:centos8</code>作为基础镜像，是因为<code v-pre>centos:centos8</code>镜像中包含了基本的排障工具，例如<code v-pre>vi</code>、<code v-pre>cat</code>、<code v-pre>curl</code>、<code v-pre>mkdir</code>、<code v-pre>cp</code>等工具。</p>
<p>**接着，**执行<code v-pre>docker build</code>命令来构建镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">-f</span> Dockerfile <span class="token parameter variable">-t</span> ccr.ccs.tencentyun.com/marmotedu/iam-apiserver-amd64:test <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行<code v-pre>docker build</code>后的构建流程为：</p>
<p><strong>第一步</strong>，<code v-pre>docker build</code>会将context中的文件打包传给Docker daemon。如果context中有<code v-pre>.dockerignore</code>文件，则会从上传列表中删除满足<code v-pre>.dockerignore</code>规则的文件。</p>
<p>这里有个例外，如果<code v-pre>.dockerignore</code>文件中有<code v-pre>.dockerignore</code>或者<code v-pre>Dockerfile</code>，<code v-pre>docker build</code>命令在排除文件时会忽略掉这两个文件。如果指定了镜像的tag，还会对repository和tag进行验证。</p>
<p><strong>第二步</strong>，<code v-pre>docker build</code>命令向Docker server发送HTTP请求，请求Docker server构建镜像，请求中包含了需要的context信息。</p>
<p><strong>第三步</strong>，Docker server接收到构建请求之后，会执行以下流程来构建镜像：</p>
<ol>
<li>创建一个临时目录，并将context中的文件解压到该目录下。</li>
<li>读取并解析Dockerfile，遍历其中的指令，根据命令类型分发到不同的模块去执行。</li>
<li>Docker构建引擎为每一条指令创建一个临时容器，在临时容器中执行指令，然后commit容器，生成一个新的镜像层。</li>
<li>最后，将所有指令构建出的镜像层合并，形成build的最后结果。最后一次commit生成的镜像ID就是最终的镜像ID。</li>
</ol>
<p>为了提高构建效率，<code v-pre>docker build</code>默认会缓存已有的镜像层。如果构建镜像时发现某个镜像层已经被缓存，就会直接使用该缓存镜像，而不用重新构建。如果不希望使用缓存的镜像，可以在执行<code v-pre>docker build</code>命令时，指定<code v-pre>--no-cache=true</code>参数。</p>
<p>Docker匹配缓存镜像的规则为：遍历缓存中的基础镜像及其子镜像，检查这些镜像的构建指令是否和当前指令完全一致，如果不一样，则说明缓存不匹配。对于<code v-pre>ADD</code>、<code v-pre>COPY</code>指令，还会根据文件的校验和（checksum）来判断添加到镜像中的文件是否相同，如果不相同，则说明缓存不匹配。</p>
<p>这里要注意，缓存匹配检查不会检查容器中的文件。比如，当使用<code v-pre>RUN apt-get -y update</code>命令更新了容器中的文件时，缓存策略并不会检查这些文件，来判断缓存是否匹配。</p>
<p>最后，我们可以通过<code v-pre>docker history</code>命令来查看镜像的构建历史，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303062208067.png" alt="图片"></p>
<h3 id="其他制作镜像方式" tabindex="-1"><a class="header-anchor" href="#其他制作镜像方式" aria-hidden="true">#</a> 其他制作镜像方式</h3>
<p>上面介绍的是两种最常用的镜像构建方式，还有一些其他的镜像创建方式，这里我简单介绍两种。</p>
<p><strong>通过<code v-pre>docker save</code>和<code v-pre>docker load</code>命令构建：</strong></p>
<p><code v-pre>docker save</code>用来将镜像保存为一个tar文件，<code v-pre>docker load</code>用来将tar格式的镜像文件加载到当前机器上，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在 A 机器上执行，并将 nginx-v1.0.0.tar.gz 复制到 B 机器</span>
$ <span class="token function">docker</span> save nginx <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">></span> nginx-v1.0.0.tar.gz

<span class="token comment"># 在 B 机器上执行</span>
$ <span class="token function">docker</span> load <span class="token parameter variable">-i</span> nginx-v1.0.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的命令，我们就在机器B上创建了<code v-pre>nginx</code>镜像。</p>
<p><strong>通过<code v-pre>docker export</code>和<code v-pre>docker import</code>命令构建：</strong></p>
<p>我们先通过<code v-pre>docker export</code> 保存镜像，再通过<code v-pre>docker import</code> 加载镜像，具体命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在 A 机器上执行，并将 nginx-v1.0.0.tar.gz 复制到 B 机器</span>
$ <span class="token function">docker</span> <span class="token builtin class-name">export</span> nginx <span class="token operator">></span> nginx-v1.0.0.tar.gz

<span class="token comment"># 在 B 机器上执行</span>
$ <span class="token function">docker</span> <span class="token function">import</span> - nginx:v1.0.0 nginx-v1.0.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code v-pre>docker export</code>导出的镜像和通过<code v-pre>docker save</code>保存的镜像相比，会丢失掉所有的镜像构建历史。在实际生产环境中，我不建议你通过<code v-pre>docker save</code>和<code v-pre>docker export</code>这两种方式来创建镜像。我比较推荐的方式是：在A机器上将镜像push到镜像仓库，在B机器上从镜像仓库pull该镜像。</p>
<h2 id="dockerfile指令介绍" tabindex="-1"><a class="header-anchor" href="#dockerfile指令介绍" aria-hidden="true">#</a> Dockerfile指令介绍</h2>
<p>上面，我介绍了一些与Docker镜像构建有关的基础知识。在实际生产环境中，我们标准的做法是通过Dockerfile来构建镜像，这就要求你会编写Dockerfile文件。接下来，我就详细介绍下如何编写Dockerfile文件。</p>
<p>Dockerfile指令的基本格式如下：</p>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code><span class="token comment"># Comment</span>
INSTRUCTION arguments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>INSTRUCTION</code>是指令，不区分大小写，但我的建议是指令都大写，这样可以与参数进行区分。Dockerfile中，以 <code v-pre>#</code> 开头的行是注释，而在其他位置出现的 <code v-pre>#</code> 会被当成参数，例如：</p>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code><span class="token comment"># Comment</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">'hello world # dockerfile'</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一个Dockerfile文件中包含了多条指令，这些指令可以分为5类。</p>
<ul>
<li>定义基础镜像的指令：<strong>FROM</strong>；</li>
<li>定义镜像维护者的指令：<strong>MAINTAINER</strong>（可选）；</li>
<li>定义镜像构建过程的指令：<strong>COPY</strong>、ADD、<strong>RUN</strong>、USER、<strong>WORKDIR</strong>、ARG、<strong>ENV</strong>、VOLUME、<strong>ONBUILD</strong>；</li>
<li>定义容器启动时执行命令的指令：<strong>CMD</strong>、<strong>ENTRYPOINT</strong>；</li>
<li>其他指令：EXPOSE、HEALTHCHECK、STOPSIGNAL。</li>
</ul>
<p>其中，加粗的指令是编写Dockerfile时经常用到的指令，需要你重点了解下。我把这些常用Dockerfile指令的介绍放在了GitHub上，你可以看看这个<a href="https://github.com/marmotedu/geekbang-go/blob/master/Dockerfile%E6%8C%87%E4%BB%A4%E8%AF%A6%E8%A7%A3.md" target="_blank" rel="noopener noreferrer">Dockerfile指令详解<ExternalLinkIcon/></a>。</p>
<p>下面是一个Dockerfile示例：</p>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code><span class="token comment"># 第一行必须指定构建该镜像所基于的容器镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> centos:centos8</span>

<span class="token comment"># 维护者信息</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> Lingfei Kong &lt;colin404@foxmail.com></span>

<span class="token comment"># 镜像的操作指令</span>
<span class="token instruction"><span class="token keyword">RUN</span> ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">"Asia/Shanghai"</span> > /etc/timezone</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /opt/iam</span>
<span class="token instruction"><span class="token keyword">COPY</span> iam-apiserver /opt/iam/bin/</span>

<span class="token comment"># 容器启动时执行指令</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">"/opt/iam/bin/iam-apiserver"</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Docker会顺序解释并执行Dockerfile中的指令，并且第一条指令必须是<code v-pre>FROM</code>，<code v-pre>FROM</code> 用来指定构建镜像的基础镜像。接下来，一般会指定镜像维护者的信息。后面是镜像操作的指令，最后会通过<code v-pre>CMD</code>或者<code v-pre>ENTRYPOINT</code>来指定容器启动的命令和参数。</p>
<h2 id="dockerfile最佳实践" tabindex="-1"><a class="header-anchor" href="#dockerfile最佳实践" aria-hidden="true">#</a> Dockerfile最佳实践</h2>
<p>上面我介绍了Dockerfile的指令，但在编写Dockerfile时，只知道这些指令是不够的，还不能编写一个合格的Dockerfile。我们还需要遵循一些编写 Dockerfile的最佳实践。这里，我总结了一份编写 Dockerfile的最佳实践清单，你可以参考。</p>
<ol>
<li>建议所有的Dockerfile指令大写，这样做可以很好地跟在镜像内执行的指令区分开来。</li>
<li>在选择基础镜像时，尽量选择官方的镜像，并在满足要求的情况下，尽量选择体积小的镜像。目前，Linux镜像大小有以下关系：<code v-pre>busybox &lt; debian &lt; centos &lt; ubuntu</code>。最好确保同一个项目中使用一个统一的基础镜像。如无特殊需求，可以选择使用<code v-pre>debian:jessie</code>或者<code v-pre>alpine</code>。</li>
<li>在构建镜像时，删除不需要的文件，只安装需要的文件，保持镜像干净、轻量。</li>
<li>使用更少的层，把相关的内容放到一个层，并使用换行符进行分割。这样可以进一步减小镜像的体积，也方便查看镜像历史。</li>
<li>不要在Dockerfile中修改文件的权限。因为如果修改文件的权限，Docker在构建时会重新复制一份，这会导致镜像体积越来越大。</li>
<li>给镜像打上标签，标签可以帮助你理解镜像的功能，例如：<code v-pre>docker build -t=&quot;nginx:3.0-onbuild&quot;</code>。</li>
<li><code v-pre>FROM</code>指令应该包含tag，例如使用<code v-pre>FROM debian:jessie</code>，而不是<code v-pre>FROM debian</code>。</li>
<li>充分利用缓存。Docker构建引擎会顺序执行Dockerfile中的指令，而且一旦缓存失效，后续命令将不能使用缓存。为了有效地利用缓存，需要尽量将所有的Dockerfile文件中相同的部分都放在前面，而将不同的部分放在后面。</li>
<li>优先使用<code v-pre>COPY</code>而非<code v-pre>ADD</code>指令。和<code v-pre>ADD</code>相比，<code v-pre>COPY</code> 功能简单，而且也够用。<code v-pre>ADD</code>可变的行为会导致该指令的行为不清晰，不利于后期维护和理解。</li>
<li>推荐将<code v-pre>CMD</code>和<code v-pre>ENTRYPOINT</code>指令结合使用，使用execl格式的<code v-pre>ENTRYPOINT</code>指令设置固定的默认命令和参数，然后使用<code v-pre>CMD</code>指令设置可变的参数。</li>
<li>尽量使用Dockerfile共享镜像。通过共享Dockerfile，可以使开发者明确知道Docker镜像的构建过程，并且可以将Dockerfile文件加入版本控制，跟踪起来。</li>
<li>使用<code v-pre>.dockerignore</code>忽略构建镜像时非必需的文件。忽略无用的文件，可以提高构建速度。</li>
<li>使用多阶段构建。多阶段构建可以大幅减小最终镜像的体积。例如，<code v-pre>COPY</code>指令中可能包含一些安装包，安装完成之后这些内容就废弃掉。下面是一个简单的多阶段构建示例：</li>
</ol>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:1.11-alpine <span class="token keyword">AS</span> build</span>

<span class="token comment"># 安装依赖包</span>
<span class="token instruction"><span class="token keyword">RUN</span> go get github.com/golang/mock/mockgen</span>

<span class="token comment"># 复制源码并执行build，此处当文件有变化会产生新的一层镜像层</span>
<span class="token instruction"><span class="token keyword">COPY</span> . /go/src/iam/</span>
<span class="token instruction"><span class="token keyword">RUN</span> go build -o /bin/iam</span>

<span class="token comment"># 缩小到一层镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> busybox</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build</span></span> /bin/iam /bin/iam</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">"/bin/iam"</span>]</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">"--help"</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>如果你想使用Docker容器来部署应用，那么就需要制作Docker镜像。今天，我介绍了如何制作Docker镜像。</p>
<p>你可以使用这两种方式来构建Docker镜像：</p>
<ul>
<li>通过 <code v-pre>docker commit</code> 命令，基于一个已存在的容器构建出镜像。</li>
<li>通过编写Dockerfile文件，并使用 <code v-pre>docker build</code> 命令来构建镜像。</li>
</ul>
<p>这两种方法中，镜像构建的底层原理是相同的：</p>
<ol>
<li>基于原镜像启动一个Docker容器。</li>
<li>在容器中进行一些操作，例如执行命令、安装文件等，由这些操作产生的文件变更都会被记录在容器的存储层中。</li>
<li>将容器存储层的变更commit到新的镜像层中，并添加到原镜像上。</li>
</ol>
<p>此外，我们还可以使用 <code v-pre>docker save</code> / <code v-pre>docker load</code> 和 <code v-pre>docker export</code> / <code v-pre>docker import</code> 来复制Docker镜像。</p>
<p>在实际生产环境中，我们标准的做法是通过Dockerfile来构建镜像。使用Dockerfile构建镜像，就需要你编写Dockerfile文件。Dockerfile支持多个指令，这些指令可以分为5类，对指令的具体介绍你可以再返回复习一遍。</p>
<p>另外，我们在构建Docker镜像时，也要遵循一些最佳实践，具体你可以参考我给你总结的最佳实践清单。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>思考下，为什么在编写Dockerfile时，“把相关的内容放到一个层，使用换行符 ``进行分割”可以减小镜像的体积？</li>
<li>尝试一下，为你正在开发的应用编写Dockerfile文件，并成功构建出Docker镜像。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '37.md' style='float:left'>⬆️上一节🔗  </a><a href = '39.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


