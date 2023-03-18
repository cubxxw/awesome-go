<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第41节-服务编排-上-helm服务编排基础知识" tabindex="-1"><a class="header-anchor" href="#第41节-服务编排-上-helm服务编排基础知识" aria-hidden="true">#</a> 第41节 服务编排（上）：Helm服务编排基础知识</h1>
<br>
<div><a href = '40.md' style='float:left'>⬆️上一节🔗  </a><a href = '42.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#helm基础知识介绍">Helm基础知识介绍</router-link><ul><li><router-link to="#helm是什么">Helm是什么？</router-link></li><li><router-link to="#helm中的三大基本概念">Helm中的三大基本概念</router-link></li><li><router-link to="#我们为什么要使用helm">我们为什么要使用Helm？</router-link></li></ul></li><li><router-link to="#helm-基本操作实战">Helm 基本操作实战</router-link><ul><li><router-link to="#前置条件">前置条件</router-link></li><li><router-link to="#安装helm">安装Helm</router-link></li><li><router-link to="#helm快速入门">Helm快速入门</router-link></li><li><router-link to="#helm命令">Helm命令</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<p>你好，我是孔令飞。</p>
<p>我们将应用部署在Kubernetes时，可能需要创建多个服务。我就见过一个包含了40多个微服务的超大型应用，每个服务又包含了多个Kubernetes资源，比如 Service、Deployment、StatefulSet、ConfigMap等。相同的应用又要部署在不同的环境中，例如测试环境、预发环境、现网环境等，也就是说应用的配置也不同。</p>
<p>对于一个大型的应用，如果基于YAML文件一个一个地部署Kubernetes资源，是非常繁琐、低效的，而且这些YAML文件维护起来极其复杂，还容易出错。那么，有没有一种更加高效的方式？比如，像Docker镜像一样，将应用需要的Kubernetes资源文件全部打包在一起，通过这个包来整体部署和管理应用，从而降低应用部署和维护的复杂度。</p>
<p>答案是有。我们可以通过Helm Chart包来管理这些Kubernetes文件，并通过<code v-pre>helm</code>命令，基于Chart包来创建和管理应用。</p>
<p>接下来，我就来介绍下Helm的基础知识，并给你演示下如何基于Helm部署IAM应用。</p>
<h2 id="helm基础知识介绍" tabindex="-1"><a class="header-anchor" href="#helm基础知识介绍" aria-hidden="true">#</a> Helm基础知识介绍</h2>
<p>Helm目前是Kubernetes服务编排事实上的标准。Helm提供了多种功能来支持Kubernetes的服务编排，例如 <code v-pre>helm</code> 命令行工具、Chart包、Chart仓库等。下面，我就来详细介绍下。</p>
<h3 id="helm是什么" tabindex="-1"><a class="header-anchor" href="#helm是什么" aria-hidden="true">#</a> Helm是什么？</h3>
<p>Helm是Kubernetes的包管理器，类似于Python的 <code v-pre>pip</code> ，centos的 <code v-pre>yum</code> 。Helm主要用来管理Chart包。Helm Chart包中包含一系列YAML格式的Kubernetes资源定义文件，以及这些资源的配置，可以通过Helm Chart包来整体维护这些资源。</p>
<p>Helm也提供了一个<code v-pre>helm</code>命令行工具，该工具可以基于Chart包一键创建应用，在创建应用时，可以自定义Chart配置。应用发布者可以通过Helm打包应用、管理应用依赖关系、管理应用版本，并发布应用到软件仓库；对于使用者来说，使用Helm后不需要编写复杂的应用部署文件，可以非常方便地在Kubernetes上查找、安装、升级、回滚、卸载应用程序。</p>
<p>Helm最新的版本是v3，Helm3以Helm2的核心功能为基础，对Chart repo、发行版管理、安全性和library Charts进行了改进。和Helm2比起来，Helm3最明显的变化是删除了Tiller（Helm2 是一种 Client-Server 结构，客户端称为 Helm，服务器称为 Tiller）。Helm3还新增了一些功能，并废弃或重构了Helm2的部分功能，与Helm2不再兼容。此外，Helm3还引入了一些新的实验功能，包括OCI支持。</p>
<p>Helm3架构图如下：</p>
<p><a href="https://static001.geekbang.org/resource/image/9b/59/9bb9e2d495d8fbe5eab4d02d407c8059.jpg?wh=1920x1083" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/9b/59/9bb9e2d495d8fbe5eab4d02d407c8059.jpg?wh=1920x1083" alt="图片"><ExternalLinkIcon/></a></p>
<p>上面的架构图中，核心是Helm Client（<code v-pre>helm</code>命令）和Helm Chart包。<code v-pre>helm</code>命令可以从<code v-pre>Chart Repository</code>中下载Helm Chart包，读取<code v-pre>kubeconfig</code>文件，并构建kube-apiserver REST API接口的HTTP请求。通过调用Kubernetes提供的REST API接口，将Chart包中包含的所有以YAML格式定义的Kubernetes资源，在Kubernetes集群中创建。</p>
<p>这些资源以Release的形式存在于Kubernetes集群中，每个Release又包含多个Kubernetes资源，例如Deployment、Pod、Service等。</p>
<h3 id="helm中的三大基本概念" tabindex="-1"><a class="header-anchor" href="#helm中的三大基本概念" aria-hidden="true">#</a> Helm中的三大基本概念</h3>
<p>要学习和使用Helm，一定要了解Helm中的三大基本概念，Helm的所有操作基本都是围绕着这些概念来进行的。下面我来介绍下Helm的三大基本概念。</p>
<ul>
<li><strong>Chart：</strong> 代表一个Helm包。它包含了在Kubernetes集群中运行应用程序、工具或服务所需的所有YAML格式的资源定义文件。</li>
<li><strong>Repository（仓库）：</strong> 它是用来存放和共享 Helm Chart的地方，类似于存放源码的GitHub的Repository，以及存放镜像的Docker的Repository。</li>
<li>**Release：**它是运行在 Kubernetes 集群中的 Chart 的实例。一个Chart通常可以在同一个集群中安装多次。每一次安装都会创建一个新的 Release。</li>
</ul>
<h3 id="我们为什么要使用helm" tabindex="-1"><a class="header-anchor" href="#我们为什么要使用helm" aria-hidden="true">#</a> 我们为什么要使用Helm？</h3>
<p>现在你对Helm已经有了一定了解，这里我再来详细介绍下为什么要使用Helm。</p>
<p>先来看下传统的应用部署模式：</p>
<p><a href="https://static001.geekbang.org/resource/image/c1/c4/c1f54e347b5db7850b57815abed99ec4.jpg?wh=1920x966" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/c1/c4/c1f54e347b5db7850b57815abed99ec4.jpg?wh=1920x966" alt="图片"><ExternalLinkIcon/></a></p>
<p>我们有测试环境、预发环境、现网环境三个环境，每个环境中部署一个应用A，应用A中包含了多个服务，每个服务又包含了自己的配置，不同服务之间的配置有些是共享的，例如<code v-pre>配置A</code>。</p>
<p>每个服务由一个复杂的Kubernetes YAML格式的文件来定义并创建，可以看到如果靠传统的方式，去维护这些YAML格式文件，并在不同环境下使用不同的配置去创建应用，是一件非常复杂的工作，并且后期YAML文件和Kubernetes集群中部署应用的维护都很复杂。随着微服务规模越来越大，会面临以下挑战：</p>
<ul>
<li>微服务化服务数量急剧增多，给服务管理带来了极大的挑战。</li>
<li>服务数量急剧增多，增加了管理难度，对运维部署是一种挑战。</li>
<li>服务数量的增多，对服务配置管理也提出了更高的要求。</li>
<li>随着服务数量增加，服务依赖关系也变得更加复杂，服务依赖关系的管理难度增大。</li>
<li>在环境信息管理方面，在新环境快速部署一个复杂应用变得更加困难。</li>
</ul>
<p>所以，我们需要一种更好的方式，来维护和管理这些YAML文件和Kubernetes中部署的应用。Helm可以帮我们解决上面这些问题。</p>
<p>接下来，我们来看下Helm是如何解决这些问题的。</p>
<p>在Helm中，可以理解为主要包含两类文件：模板文件和配置文件。模板文件通常有多个，配置文件通常有一个。Helm的模板文件基于<code v-pre>text/template</code>模板文件，提供了更加强大的模板渲染能力。Helm可以将配置文件中的值渲染进模板文件中，最终生成一个可以部署的Kubernetes YAML格式的资源定义文件，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/ff/86/ffcc4eaf4071e19e2e0d317b1c536486.png?wh=1920x936" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/ff/86/ffcc4eaf4071e19e2e0d317b1c536486.png?wh=1920x936" alt="图片"><ExternalLinkIcon/></a></p>
<p>上图中，我们将以下配置渲染进了模板中，生成了Kubernetes YAML文件：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token key atrule">tag</span><span class="token punctuation">:</span> latest
<span class="token key atrule">common</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> colin
    <span class="token key atrule">password</span><span class="token punctuation">:</span> iam1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以在Helm中，部署一个应用可以简化为<code v-pre>Chart模板（多个服务） + Chart配置 -&gt; 应用</code>，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/bb/6b/bb87b8562102525d4c2yy0b0314ac46b.jpg?wh=1920x995" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/bb/6b/bb87b8562102525d4c2yy0b0314ac46b.jpg?wh=1920x995" alt="图片"><ExternalLinkIcon/></a></p>
<p>Chart模板一个应用只用编写一次，可以重复使用。在部署时，可以指定不同的配置，从而将应用部署在不同的环境中，或者在同一环境中部署不同配置的应用。</p>
<h2 id="helm-基本操作实战" tabindex="-1"><a class="header-anchor" href="#helm-基本操作实战" aria-hidden="true">#</a> Helm 基本操作实战</h2>
<p>上面，我介绍了Helm的一些基础知识，这里我们再来学习下如何使用Helm对应用进行生命周期管理。</p>
<h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3>
<p>在开始之前，你需要确保你有一个可以使用的Kubernetes集群。目前最方便快捷、最经济的方式是申请一个腾讯云EKS集群。至于如何申请和访问，你可以参考 <a href="https://time.geekbang.org/column/article/418711" target="_blank" rel="noopener noreferrer">48讲<ExternalLinkIcon/></a> “准备一个Kubernetes集群”部分的教程。这里再提醒下，<strong>用完集群后，记得删除集群资源，免得被持续扣费</strong>。</p>
<h3 id="安装helm" tabindex="-1"><a class="header-anchor" href="#安装helm" aria-hidden="true">#</a> 安装Helm</h3>
<p>Helm提供了多种安装方式，在能连通外网的情况下，可以通过脚本来安装，安装命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/bin
$ <span class="token function">wget</span> https://get.helm.sh/helm-v3.6.3-linux-amd64.tar.gz
$ <span class="token function">tar</span> <span class="token parameter variable">-xvzf</span> helm-v3.6.3-linux-amd64.tar.gz
$ <span class="token function">mv</span> linux-amd64/helm <span class="token environment constant">$HOME</span>/bin
$ <span class="token function">chmod</span> +x <span class="token environment constant">$HOME</span>/bin/helm
$ helm version
version.BuildInfo<span class="token punctuation">{</span>Version:<span class="token string">"v3.6.3"</span>, GitCommit:<span class="token string">"d506314abfb5d21419df8c7e7e68012379db2354"</span>, GitTreeState:<span class="token string">"clean"</span>, GoVersion:<span class="token string">"go1.16.5"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果执行<code v-pre>helm version</code>可以成功打印出 <code v-pre>helm</code> 命令的版本号，说明Helm安装成功。</p>
<p>Helm各版本安装包地址见 <a href="https://github.com/helm/helm/releases" target="_blank" rel="noopener noreferrer">Helm Releases<ExternalLinkIcon/></a>。</p>
<p>安装完<code v-pre>helm</code>命令后，可以安装<code v-pre>helm</code>命令的自动补全脚本。假如你用的shell是<code v-pre>bash</code>，安装方法如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm completion <span class="token function">bash</span> <span class="token operator">></span> <span class="token environment constant">$HOME</span>/.helm-completion.bash
$ <span class="token builtin class-name">echo</span> <span class="token string">'source $HOME/.helm-completion.bash'</span> <span class="token operator">>></span> ~/.bashrc
$ <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code v-pre>helm comp&lt;TAB&gt;</code>，就会自动补全为<code v-pre>helm completion</code>。</p>
<h3 id="helm快速入门" tabindex="-1"><a class="header-anchor" href="#helm快速入门" aria-hidden="true">#</a> Helm快速入门</h3>
<p>你可以通过以下六个步骤，来快速创建一个Chart应用。</p>
<p><strong>第一步，初始化一个Helm Chart仓库。</strong></p>
<p>安装完Helm之后，就可以使用 <code v-pre>helm</code> 命令添加一个Chart仓库。类似于用来托管Docker镜像的DockerHub、用来托管代码的GitHub，Chart包也有一个托管平台，当前比较流行的Chart包托管平台是<a href="https://artifacthub.io/packages/search?kind=0" target="_blank" rel="noopener noreferrer">Artifact Hub<ExternalLinkIcon/></a>。</p>
<p>Artifact Hub上有很多Chart仓库，我们可以添加需要的Chart仓库，这里我们添加BitNami提供的Chart仓库：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm repo <span class="token function">add</span> bitnami https://charts.bitnami.com/bitnami <span class="token comment"># 添加 Chart Repository</span>
$ helm repo list <span class="token comment"># 查看添加的 Repository 列表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加完成后，我们可以通过<code v-pre>helm search</code>命令，来查询需要的Chart包。<code v-pre>helm search</code>支持两种不同的查询方式，这里我来介绍下。</p>
<ul>
<li><code v-pre>helm search repo&lt;keyword&gt;</code>：从你使用 <code v-pre>helm repo add</code> 添加到本地 Helm 客户端中的仓库里查找。该命令基于本地数据进行搜索，无需连接外网。</li>
<li><code v-pre>helm search hub&lt;keyword&gt;</code>：从 Artifact Hub 中查找并列出 Helm Charts。 Artifact Hub中存放了大量的仓库。</li>
</ul>
<p>Helm 搜索使用模糊字符串匹配算法，所以你可以只输入名字的一部分。下面是一个<code v-pre>helm search</code>的示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm search repo bitnami
NAME                                          CHART VERSION  APP VERSION    DESCRIPTION
bitnami/bitnami-common                        <span class="token number">0.0</span>.9          <span class="token number">0.0</span>.9          DEPRECATED Chart with custom templates used <span class="token keyword">in</span> <span class="token punctuation">..</span>.
bitnami/airflow                               <span class="token number">10.2</span>.8         <span class="token number">2.1</span>.2          Apache Airflow is a platform to programmaticall<span class="token punctuation">..</span>.
bitnami/apache                                <span class="token number">8.6</span>.1          <span class="token number">2.4</span>.48         Chart <span class="token keyword">for</span> Apache HTTP Server
bitnami/argo-cd                               <span class="token number">1.0</span>.2          <span class="token number">2.0</span>.5          Declarative, GitOps continuous delivery tool fo<span class="token punctuation">..</span>.
bitnami/aspnet-core                           <span class="token number">1.3</span>.14         <span class="token number">3.1</span>.18         ASP.NET Core is an open-source framework create<span class="token punctuation">..</span>.
bitnami/cassandra                             <span class="token number">8.0</span>.2          <span class="token number">4.0</span>.0          Apache Cassandra is a <span class="token function">free</span> and open-source dist<span class="token punctuation">..</span>.
bitnami/cert-manager                          <span class="token number">0.1</span>.15         <span class="token number">1.5</span>.1          Cert Manager is a Kubernetes add-on to automate<span class="token punctuation">..</span>.
<span class="token comment"># ... and many more</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二步，安装一个示例Chart。</strong></p>
<p>查询到自己需要的Helm Chart后，就可以通过<code v-pre>helm install</code>命令来安装一个Chart。<code v-pre>helm install</code>支持从多种源进行安装：</p>
<ul>
<li>Chart的Repository。</li>
<li>本地的Chart Archive，例如<code v-pre>helm install foo foo-1.0.0.tgz</code>。</li>
<li>一个未打包的Chart路径，例如<code v-pre>helm install foo path/to/foo</code>。</li>
<li>一个完整的URL，例如<code v-pre>helm install foo https://example.com/charts/foo-1.0.0.tgz</code>。</li>
</ul>
<p>这里，我们选择通过<code v-pre>bitnami/mysql</code> Chart包来安装一个MySQL应用。你可以执行 <code v-pre>helm show chart bitnami/mysql</code> 命令，来简单了解这个Chart的基本信息。 或者，你也可以执行 <code v-pre>helm show all bitnami/mysql</code>，获取关于该Chart的所有信息。</p>
<p>接下来，就可以使用<code v-pre>helm install</code>命令来安装这个Chart包了。安装命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm repo update              <span class="token comment"># Make sure we get the latest list of charts</span>
$ helm <span class="token function">install</span> bitnami/mysql --generate-name
NAME: mysql-1629528555
LAST DEPLOYED: Sat Aug <span class="token number">21</span> <span class="token number">14</span>:49:19 <span class="token number">2021</span>
NAMESPACE: default
STATUS: deployed
REVISION: <span class="token number">1</span>
TEST SUITE: None
NOTES: <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们通过安装<code v-pre>bitnami/mysql</code>这个Chart，创建了一个<code v-pre>mysql-1629528555</code> Release。<code v-pre>--generate-name</code>参数告诉Helm自动为这个Release命名。</p>
<p>在安装过程中，Helm 客户端会打印一些有用的信息，包括哪些资源已经被创建，Release当前的状态，以及你是否还需要执行额外的配置步骤。例如，从上述例子的输出中，你可以获取到数据库的Root密码、登陆方式、更新方式等信息。</p>
<p>安装完之后，你可以使用 <code v-pre>helm status</code> 来追踪Release 的状态。</p>
<p>每当你执行 <code v-pre>helm install</code> 的时候，都会创建一个新的发布版本。所以一个Chart在同一个集群里面可以被安装多次，每一个都可以被独立地管理和升级。</p>
<p><code v-pre>helm install</code>命令会将templates渲染成最终的Kubernetes能够识别的YAML格式，然后安装到Kubernetes集群中。</p>
<p><code v-pre>helm install</code> 功能非常强大，想了解更多功能，你可以参考这个指南：<a href="https://helm.sh/zh/docs/intro/using_helm" target="_blank" rel="noopener noreferrer">使用 Helm<ExternalLinkIcon/></a>。</p>
<p><strong>第三步，安装前自定义 Chart。</strong></p>
<p>上一步中的安装方式只会使用 Chart 的默认配置选项，很多时候我们需要自定义 Chart 来指定我们想要的配置。使用 <code v-pre>helm show values</code> 可以查看 Chart 中的可配置选项：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm show values bitnami/mysql <span class="token comment"># 为了方便展示，我删除了 `helm show values`输出中的`#`注释</span>
<span class="token comment"># ... and many more</span>
architecture: standalone
auth:
  rootPassword: <span class="token string">""</span>
  database: my_database
  username: <span class="token string">""</span>
  password: <span class="token string">""</span>
  replicationUser: replicator
  replicationPassword: <span class="token string">""</span>
  existingSecret: <span class="token string">""</span>
  forcePassword: <span class="token boolean">false</span>
  usePasswordFiles: <span class="token boolean">false</span>
  customPasswordFiles: <span class="token punctuation">{</span><span class="token punctuation">}</span>
initdbScripts: <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment"># ... and many more</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，你可以使用 YAML 格式的文件，覆盖上述任意配置项，并在安装过程中使用该文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">'{auth.database: iam, auth.username: iam, auth.password: iam59!z$}'</span> <span class="token operator">></span> values.yaml
$ helm <span class="token function">install</span> bitnami/mysql <span class="token parameter variable">-f</span> values.yaml --generate-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述命令将为 MySQL 创建一个名称为 <code v-pre>iam</code> 的默认用户，密码为<code v-pre>iam59!z$</code>，并且授予该用户访问新建的 <code v-pre>iam</code> 数据库的权限。Chart 中的其他默认配置保持不变。</p>
<p>安装过程中，有两种传递配置数据的方式。</p>
<ul>
<li><code v-pre>-f, --values</code>：使用 YAML 文件覆盖配置。可以指定多次，优先使用最右边的文件。</li>
<li><code v-pre>--set</code>：通过命令行的方式对指定配置项进行覆盖。</li>
</ul>
<p>如果同时使用两种方式，则 <code v-pre>--set</code> 中的值会被合并到 <code v-pre>--values</code> 中，但是 <code v-pre>--set</code> 中的值优先级更高。在<code v-pre>--set</code>中覆盖的内容会被保存在 ConfigMap 中。你可以通过 <code v-pre>helm get values &lt;release-name&gt;</code> 来查看指定 Release 中 <code v-pre>--set</code> 设置的值，也可以通过运行 <code v-pre>helm upgrade</code> 并指定 <code v-pre>--reset-values</code> 字段，来清除 <code v-pre>--set</code>中设置的值。</p>
<p><strong>这里我讲解下<code v-pre>--set</code>的格式和限制。</strong></p>
<p><code v-pre>--set</code> 选项使用<code v-pre>0</code>或多个<code v-pre>key-value</code> 对。最简单的用法类似于<code v-pre>--set name=value</code>，等价于下面这个 YAML 格式：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多个值之间使用逗号分割，因此<code v-pre>--set a=b,c=d</code> 的 YAML 表示是：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">a</span><span class="token punctuation">:</span> b
<span class="token key atrule">c</span><span class="token punctuation">:</span> d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>--set</code>还支持更复杂的表达式。例如，<code v-pre>--set outer.inner=value</code> 被转换成了：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">outer</span><span class="token punctuation">:</span>  
  <span class="token key atrule">inner</span><span class="token punctuation">:</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>列表使用花括号<code v-pre>{}</code>来表示。例如，<code v-pre>--set name={a, b, c}</code> 被转换成了：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> a
  <span class="token punctuation">-</span> b
  <span class="token punctuation">-</span> c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 2.5.0 版本开始，我们可以使用数组下标的语法来访问列表中的元素了。例如 <code v-pre>--set servers[0].port=80</code> 就变成了：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>多个值也可以通过这种方式来设置。<code v-pre>--set servers[0] [0].host=marmotedu</code> 变成了：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> marmotedu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要在 <code v-pre>--set</code> 中使用特殊字符，你可以使用反斜线来进行转义，比如<code v-pre>--set name=value1,value2</code> 就变成了：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">"value1,value2"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是深层嵌套的数据结构，可能很难用<code v-pre>--set</code> 来表达，更多内容你可以参考 <a href="https://helm.sh/docs/chart_template_guide/values_files/" target="_blank" rel="noopener noreferrer">Values 文件<ExternalLinkIcon/></a>。</p>
<p><strong>第四步，查看当前集群安装了哪些Release。</strong></p>
<p>通过<code v-pre>helm list</code>可以查看当前集群、当前Namespace下安装的Release列表：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm list
NAME              NAMESPACE  REVISION  UPDATED                                  STATUS    CHART        APP VERSION
mysql-1629528555  default    <span class="token number">1</span>         <span class="token number">2021</span>-08-21 <span class="token number">14</span>:49:19.101935218 +0800 CST  deployed  mysql-8.8.4  <span class="token number">8.0</span>.26
mysql-1629529348  default    <span class="token number">1</span>         <span class="token number">2021</span>-08-21 <span class="token number">15</span>:02:32.079969128 +0800 CST  deployed  mysql-8.8.4  <span class="token number">8.0</span>.26
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们创建了两个Release，这些Release位于<code v-pre>default</code>命名空间中。上述命令，也列出了Release的更新时间、状态、Chart的版本等。</p>
<p><strong>第五步，升级 Release，并且在失败时恢复。</strong></p>
<p>部署完应用之后，后续还可能升级应用，可以通过<code v-pre>helm upgrade</code>命令来升级应用。升级操作会基于已有的Release，根据提供的信息进行升级。Helm在更新时，只会变更有更改的内容。</p>
<p>例如，这里我们升级<code v-pre>mysql-1629528555</code>，变更它的Root密码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm upgrade mysql-1629528555 bitnami/mysql <span class="token parameter variable">--set</span> <span class="token assign-left variable">auth.rootPassword</span><span class="token operator">=</span><span class="token string">'iam59!z$'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的例子中，<code v-pre>mysql-1629528555</code> 这个 Release 使用相同的 Chart 进行升级，但使用了一个新的<code v-pre>rootPassword</code>配置。</p>
<p>我们可以使用 <code v-pre>helm get values</code> 命令，来看看配置值是否真的生效了：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm get values mysql-1629528555
<span class="token environment constant">USER</span>-SUPPLIED VALUES:
auth:
  rootPassword: iam59<span class="token operator">!</span>z$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code v-pre>rootPassword</code> 的新值已经被部署到集群中了。</p>
<p>假如发布失败，我们也很容易通过 <code v-pre>helm rollback [RELEASE] [REVISION]</code> 命令，回滚到之前的发布版本。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>$ helm rollback mysql<span class="token punctuation">-</span>1629528555 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这条命令将我们的<code v-pre>mysql-1629528555</code>回滚到了它最初的版本。Release 版本其实是一个增量修订（revision）。 每当发生了一次安装、升级或回滚操作，revision 的值就会加<code v-pre>1</code>。第一次 revision 的值永远是<code v-pre>1</code>。</p>
<p>我们可以使用 <code v-pre>helm history [RELEASE]</code> 命令来查看一个特定 Release 的修订版本号：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm <span class="token function">history</span> mysql-1629528555
REVISION  UPDATED                   STATUS      CHART        APP VERSION  DESCRIPTION
<span class="token number">1</span>         Sat Aug <span class="token number">21</span> <span class="token number">14</span>:49:19 <span class="token number">2021</span>  superseded  mysql-8.8.4  <span class="token number">8.0</span>.26       Install complete
<span class="token number">2</span>         Sat Aug <span class="token number">21</span> <span class="token number">15</span>:14:45 <span class="token number">2021</span>  deployed    mysql-8.8.4  <span class="token number">8.0</span>.26       Upgrade complete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以指定一些其他的选项，来自定义 Helm 在安装、升级、回滚期间的行为。这里，我介绍一些常用的参数，供你参考。</p>
<ul>
<li><code v-pre>--timeout</code>：一个 Go duration 类型的值，用来表示等待 Kubernetes 命令完成的超时时间，默认值为 <code v-pre>5m0s</code>。</li>
<li><code v-pre>--no-hooks</code>：不运行当前命令的钩子。</li>
<li><code v-pre>--wait</code>：表示必须要等到所有的 Pods 都处于 ready 状态、PVC 都被绑定、Deployments处在 ready 状态的Pods 个数达到最小值（Desired减去 maxUnavailable），才会标记该 Release 为成功。最长等待时间由 <code v-pre>--timeout</code> 值指定。如果达到超时时间，Release 将被标记为 <code v-pre>FAILED</code>。</li>
</ul>
<p>这里需要注意，当 Deployment 的 replicas 被设置为1，但其滚动升级策略中的<code v-pre>maxUnavailable</code> 没有被设置为<code v-pre>0</code>时，<code v-pre>--wait</code> 将返回就绪，因为已经满足了最小 ready Pod 数。</p>
<p><strong>第六步，卸载Release。</strong></p>
<p>你可以使用<code v-pre>helm uninstall</code>命令卸载一个Release：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm  uninstall mysql-1629528555
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述命令会从Kubernetes卸载 <code v-pre>mysql-1629528555</code>， 它将删除和该版本关联的所有资源（Service、Deployment、Pod、ConfigMap等），包括该Release的所有版本历史。</p>
<p>如果你在执行 <code v-pre>helm uninstall</code> 的时候提供<code v-pre>--keep-history</code> 选项， Helm将会保存版本历史。 你可以通过<code v-pre>helm status</code>命令查看该版本的信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm status mysql-1629528555
Status: UNINSTALLED
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code v-pre>--keep-history</code> 选项会让Helm跟踪你的版本（即使你卸载了它们），所以你可以审计集群历史，甚至使用 <code v-pre>helm rollback</code> 回滚版本。</p>
<h3 id="helm命令" tabindex="-1"><a class="header-anchor" href="#helm命令" aria-hidden="true">#</a> Helm命令</h3>
<p>上面我介绍了Helm的一些命令的用法，如果你想查看Helm提供的所有命令，可以执行<code v-pre>helm help</code>。或者，你也可以执行<code v-pre>helm &lt;subcommand&gt; -h</code>来查看某个子命令的用法，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm get <span class="token parameter variable">-h</span>

This <span class="token builtin class-name">command</span> consists of multiple subcommands <span class="token function">which</span> can be used to
get extended information about the release, including:

- The values used to generate the release
- The generated manifest <span class="token function">file</span>
- The notes provided by the chart of the release
- The hooks associated with the release

Usage:
  helm get <span class="token punctuation">[</span>command<span class="token punctuation">]</span>
<span class="token comment"># ... and many more</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我整理了一份命令列表，供你参考：</p>
<p><a href="https://static001.geekbang.org/resource/image/c4/bb/c4fa82cf7bf7fc5c98314419b1e0febb.png?wh=1920x4212" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/c4/bb/c4fa82cf7bf7fc5c98314419b1e0febb.png?wh=1920x4212" alt="图片"><ExternalLinkIcon/></a></p>
<p>上面这些命令中，有些提供了子命令和命令行参数，具体你可以执行<code v-pre>helm &lt;subcommand&gt; -h</code>来查看。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天，我介绍了Helm的基础知识，并给你演示了如何基于Helm部署IAM应用。</p>
<p>当一个应用包含了很多微服务时，手动在Kubernetes集群中部署、升级、回滚这些微服务是一件非常复杂的工作。这时候，我们就需要一个服务编排方案来编排这些服务，从而提高服务部署和维护的效率。</p>
<p>目前业界提供了多种服务编排方案，其中最流行的是Helm，Helm已经成为一个事实上的Kubernetes服务编排标准。</p>
<p>在Helm中，有Chart、Repository和Release三大基本概念。Chart 代表一个Helm包，里面包含了运行Kubernetes应用需要的所有资源定义YAML文件；Repository是Chart仓库，用来存放和共享 Helm Chart；Release是运行在 Kubernetes 集群中的 Chart 的实例。</p>
<p>我们可以通过 <code v-pre>helm install [NAME] [CHART] [flags]</code> 来安装一个Chart包；通过 <code v-pre>helm upgrade [RELEASE] [CHART] [flags]</code> 来更新一个Helm Release；通过 <code v-pre>helm uninstall RELEASE_NAME [...] [flags]</code> 来卸载一个Helm Release。另外，<code v-pre>helm</code> 命令行工具还提供了其他的功能，你可以再回顾一遍。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>思考下，如果使用Helm创建服务，是否会存在先启动服务，再创建服务配置，从而导致服务启动时加载配置失败的问题？如果有，Helm可以怎样解决这个问题？</li>
<li>尝试将IAM应用制作成一个Chart包，并通过Helm安装。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '40.md' style='float:left'>⬆️上一节🔗  </a><a href = '42.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


