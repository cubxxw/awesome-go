<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第42节-服务编排-下-基于helm的服务编排部署实战" tabindex="-1"><a class="header-anchor" href="#第42节-服务编排-下-基于helm的服务编排部署实战" aria-hidden="true">#</a> 第42节 服务编排（下）：基于Helm的服务编排部署实战</h1>
<br>
<div><a href = '41.md' style='float:left'>⬆️上一节🔗  </a><a href = '43.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://cubxxw.com/" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#制作iam-chart包">制作IAM Chart包</router-link></li><li><router-link to="#iam-chart部署">IAM Chart部署</router-link></li><li><router-link to="#iam应用多环境部署">IAM应用多环境部署</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<p>上一讲，我介绍了 Helm 的基础知识，并带着你部署了一个简单的应用。掌握Helm的基础知识之后，今天我们就来实战下，一起通过Helm部署一个IAM应用。</p>
<p>通过Helm部署IAM应用，首先需要制作IAM Chart包，然后通过Chart包来一键部署IAM应用。在实际开发中，我们需要将应用部署在不同的环境中，所以我也会给你演示下如何在多环境中部署IAM应用。</p>
<h2 id="制作iam-chart包" tabindex="-1"><a class="header-anchor" href="#制作iam-chart包" aria-hidden="true">#</a> 制作IAM Chart包</h2>
<p>在部署IAM应用之前，我们首先需要制作一个IAM Chart包。</p>
<p>我们假设IAM项目源码根目录为<code v-pre>$</code>，进入 <code v-pre>$/deployments</code>目录，在该目录下创建Chart包。具体创建流程分为四个步骤，下面我来详细介绍下。</p>
<p>**第一步，**创建一个模板Chart。</p>
<p>Chart是一个组织在文件目录中的集合，目录名称就是Chart名称（没有版本信息）。你可以看看这个 <a href="https://helm.sh/zh/docs/topics/charts" target="_blank" rel="noopener noreferrer">Chart 开发指南<ExternalLinkIcon/></a> ，它介绍了如何开发你自己的Chart。</p>
<p>不过，这里你也可以使用 <code v-pre>helm create</code> 命令来快速创建一个模板Chart，并基于该Chart进行修改，得到你自己的Chart。创建命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm create iam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>helm create iam</code>会在当前目录下生成一个<code v-pre>iam</code>目录，里面存放的就是Chart文件。Chart目录结构及文件如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ tree <span class="token parameter variable">-FC</span> iam/
├── charts/                            <span class="token comment"># [可选]: 该目录中放置当前Chart依赖的其他Chart</span>
├── Chart.yaml                         <span class="token comment"># YAML文件，用于描述Chart的基本信息，包括名称版本等</span>
├── templates/                         <span class="token comment"># [可选]: 部署文件模版目录，模版使用的值来自values.yaml和由Tiller提供的值</span>
│   ├── deployment.yaml                <span class="token comment"># Kubernetes Deployment object</span>
│   ├── _helpers.tpl                   <span class="token comment"># 用于修改Kubernetes objcet配置的模板</span>
│   ├── hpa.yaml                       <span class="token comment"># Kubernetes HPA object</span>
│   ├── ingress.yaml                   <span class="token comment"># Kubernetes Ingress object</span>
│   ├── NOTES.txt                      <span class="token comment"># [可选]: 放置Chart的使用指南</span>
│   ├── serviceaccount.yaml
│   ├── service.yaml
│   └── tests/                         <span class="token comment"># 定义了一些测试资源</span>
│       └── test-connection.yaml
└── values.yaml                        <span class="token comment"># Chart的默认配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的目录中，有两个比较重要的文件：</p>
<ul>
<li>Chart.yaml 文件</li>
<li>templates目录</li>
</ul>
<p>下面我来详细介绍下这两个文件。<strong>我们先来看Chart.yaml 文件。</strong></p>
<p>Chart.yaml用来描述Chart的基本信息，包括名称、版本等，内容如下：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> Chart API 版本 （必需）
<span class="token key atrule">name</span><span class="token punctuation">:</span> Chart名称 （必需）
<span class="token key atrule">version</span><span class="token punctuation">:</span> 语义化版本（必需）
<span class="token key atrule">kubeVersion</span><span class="token punctuation">:</span> 兼容Kubernetes版本的语义化版本（可选）
<span class="token key atrule">description</span><span class="token punctuation">:</span> 对这个项目的一句话描述（可选）
<span class="token key atrule">type</span><span class="token punctuation">:</span> Chart类型 （可选）
<span class="token key atrule">keywords</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 关于项目的一组关键字（可选）
<span class="token key atrule">home</span><span class="token punctuation">:</span> 项目home页面的URL （可选）
<span class="token key atrule">sources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 项目源码的URL列表（可选）
<span class="token key atrule">dependencies</span><span class="token punctuation">:</span> <span class="token comment"># chart 必要条件列表 （可选）</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Chart名称 (nginx)
    <span class="token key atrule">version</span><span class="token punctuation">:</span> Chart版本 ("1.2.3")
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> （可选）仓库URL ("https<span class="token punctuation">:</span>//example.com/charts") 或别名 ("@repo<span class="token punctuation">-</span>name")
    <span class="token key atrule">condition</span><span class="token punctuation">:</span> （可选） 解析为布尔值的YAML路径，用于启用/禁用Chart(e.g. subchart1.enabled )
    <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token comment"># （可选）</span>
      <span class="token punctuation">-</span> 用于一次启用/禁用 一组Chart的tag
    <span class="token key atrule">import-values</span><span class="token punctuation">:</span> <span class="token comment"># （可选）</span>
      <span class="token punctuation">-</span> ImportValue 保存源值到导入父键的映射。每项可以是字符串或者一对子/父列表项
    <span class="token key atrule">alias</span><span class="token punctuation">:</span> （可选） Chart中使用的别名。当你要多次添加相同的Chart时会很有用
<span class="token key atrule">maintainers</span><span class="token punctuation">:</span> <span class="token comment"># （可选）</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 维护者名字 （每个维护者都需要）
    <span class="token key atrule">email</span><span class="token punctuation">:</span> 维护者邮箱 （每个维护者可选）
    <span class="token key atrule">url</span><span class="token punctuation">:</span> 维护者URL （每个维护者可选）
<span class="token key atrule">icon</span><span class="token punctuation">:</span> 用作icon的SVG或PNG图片URL （可选）
<span class="token key atrule">appVersion</span><span class="token punctuation">:</span> 包含的应用版本（可选）。不需要是语义化，建议使用引号
<span class="token key atrule">deprecated</span><span class="token punctuation">:</span> 不被推荐的Chart（可选，布尔值）
<span class="token key atrule">annotations</span><span class="token punctuation">:</span>
  <span class="token key atrule">example</span><span class="token punctuation">:</span> 按名称输入的批注列表 （可选）.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**我们再来看下\\templates目录\\这个文件。</p>
<p>templates目录中包含了应用中各个Kubernetes资源的YAML格式资源定义模板，例如：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> .Values.pump.name <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> .Values.pump.name <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">-</span> toYaml .Values.pump.service.http<span class="token punctuation">|</span> nindent 4 <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> .Values.pump.name <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">sessionAffinity</span><span class="token punctuation">:</span> None
  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> .Values.serviceType <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>{}</code>会被<code v-pre>deployments/iam/values.yaml</code>文件中<code v-pre>pump.name</code>的值替换。上面的模版语法扩展了 Go <code v-pre>text/template</code>包的语法：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 这种方式定义的模版，会去除test模版尾部所有的空行</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">-</span> define "test"<span class="token punctuation">}</span><span class="token punctuation">}</span>
模版内容
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">-</span> end<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># 去除test模版头部的第一个空行</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">-</span> template "test" <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是用于YAML文件前置空格的语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 这种方式定义的模版，会去除test模版头部和尾部所有的空行</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>- define <span class="token string">"test"</span> -<span class="token punctuation">}</span><span class="token punctuation">}</span>
模版内容
<span class="token punctuation">{</span><span class="token punctuation">{</span>- end -<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># 可以在test模版每一行的头部增加4个空格，用于YAML文件的对齐</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span> include <span class="token string">"test"</span> <span class="token operator">|</span> indent <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，这里有三点需要你注意：</p>
<ul>
<li>Chart名称必须是小写字母和数字，单词之间可以使用横杠<code v-pre>-</code>分隔，Chart名称中不能用大写字母，也不能用下划线，<code v-pre>.</code>号也不行。</li>
<li>尽可能使用<a href="https://semver.org/" target="_blank" rel="noopener noreferrer">SemVer 2<ExternalLinkIcon/></a>来表示版本号。</li>
<li>YAML 文件应该按照双空格的形式缩进(一定不要使用tab键)。</li>
</ul>
<p>第二步，编辑 <code v-pre>iam</code> 目录下的Chart文件。</p>
<p>我们可以基于<code v-pre>helm create</code>生成的模板Chart来构建自己的Chart包。这里我们添加了创建iam-apiserver、iam-authz-server、iam-pump、iamctl服务需要的YAML格式的Kubernetes资源文件模板：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-1</span> iam/templates/*.yaml
iam/templates/hpa.yaml                                   <span class="token comment"># Kubernetes HPA模板文件</span>
iam/templates/iam-apiserver-deployment.yaml              <span class="token comment"># iam-apiserver服务deployment模板文件</span>
iam/templates/iam-apiserver-service.yaml                 <span class="token comment"># iam-apiserver服务service模板文件</span>
iam/templates/iam-authz-server-deployment.yaml           <span class="token comment"># iam-authz-server服务deployment模板文件</span>
iam/templates/iam-authz-server-service.yaml              <span class="token comment"># iam-authz-server服务service模板文件</span>
iam/templates/iamctl-deployment.yaml                     <span class="token comment"># iamctl服务deployment模板文件</span>
iam/templates/iam-pump-deployment.yaml                   <span class="token comment"># iam-pump服务deployment模板文件</span>
iam/templates/iam-pump-service.yaml                      <span class="token comment"># iam-pump服务service模板文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板的具体内容，你可以查看<a href="https://github.com/marmotedu/iam/tree/v1.1.0/deployments/iam/templates" target="_blank" rel="noopener noreferrer">deployments/iam/templates/<ExternalLinkIcon/></a>。</p>
<p>在编辑 Chart 时，我们可以通过 <code v-pre>helm lint</code> 验证格式是否正确，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm lint iam
<span class="token operator">==</span><span class="token operator">></span> Linting iam

<span class="token number">1</span> chart<span class="token punctuation">(</span>s<span class="token punctuation">)</span> linted, <span class="token number">0</span> chart<span class="token punctuation">(</span>s<span class="token punctuation">)</span> failed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>0 chart(s) failed</code> 说明当前Iam Chart包是通过校验的。</p>
<p>第三步，修改Chart的配置文件，添加自定义配置。</p>
<p>我们可以编辑<code v-pre>deployments/iam/values.yaml</code>文件，定制自己的配置。具体配置你可以参考<a href="https://github.com/marmotedu/iam/blob/v1.1.0/deployments/iam/values.yaml" target="_blank" rel="noopener noreferrer">deployments/iam/values.yaml<ExternalLinkIcon/></a>。</p>
<p>在修改 <code v-pre>values.yaml</code> 文件时，你可以参考下面这些最佳实践。</p>
<ul>
<li>变量名称以小写字母开头，单词按驼峰区分，例如<code v-pre>chickenNoodleSoup</code>。</li>
<li>给所有字符串类型的值加上引号。</li>
<li>为了避免整数转换问题，将整型存储为字符串更好，并用 <code v-pre>{{ int $value }}</code> 在模板中将字符串转回整型。</li>
<li><code v-pre>values.yaml</code>中定义的每个属性都应该文档化。文档字符串应该以它要描述的属性开头，并至少给出一句描述。例如：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># serverHost is the host name for the webserver</span>
serverHost: example
<span class="token comment"># serverPort is the HTTP listener port for the webserver</span>
serverPort: <span class="token number">9191</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要注意，所有的Helm内置变量都以大写字母开头，以便与用户定义的value进行区分，例如<code v-pre>.Release.Name</code>、<code v-pre>.Capabilities.KubeVersion</code>。</p>
<p>为了安全，values.yaml中只配置Kubernetes资源相关的配置项，例如Deployment副本数、Service端口等。至于iam-apiserver、iam-authz-server、iam-pump、iamctl组件的配置文件，我们创建单独的ConfigMap，并在Deployment中引用。</p>
<p>第四步，打包Chart，并上传到Chart仓库中。</p>
<p>这是一个可选步骤，可以根据你的实际需要来选择。如果想了解具体操作，你可以查看 <a href="https://helm.sh/zh/docs/topics/chart_repository" target="_blank" rel="noopener noreferrer">Helm chart 仓库<ExternalLinkIcon/></a>获取更多信息。</p>
<p>最后，IAM应用的Chart包见<a href="https://github.com/marmotedu/iam/tree/v1.1.0/deployments/iam" target="_blank" rel="noopener noreferrer">deployments/iam<ExternalLinkIcon/></a>。</p>
<h2 id="iam-chart部署" tabindex="-1"><a class="header-anchor" href="#iam-chart部署" aria-hidden="true">#</a> IAM Chart部署</h2>
<p>上面，我们制作了IAM应用的Chart包，接下来我们就使用这个Chart包来一键创建IAM应用。IAM Chart部署一共分为10个步骤，你可以跟着我一步步操作下。</p>
<p>第一步，配置<code v-pre>scripts/install/environment.sh</code>。</p>
<p><code v-pre>scripts/install/environment.sh</code>文件中包含了各类自定义配置，你主要配置下面这些跟数据库相关的就可以，其他配置使用默认值。</p>
<ul>
<li>MariaDB配置：environment.sh文件中以<code v-pre>MARIADB</code>开头的变量。</li>
<li>Redis配置：environment.sh文件中以<code v-pre>REDIS_</code>开头的变量。</li>
<li>MongoDB配置：environment.sh文件中以<code v-pre>MONGO_</code>开头的变量。</li>
</ul>
<p>第二步，创建IAM应用的配置文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token variable">${IAM_ROOT}</span>
$ <span class="token function">make</span> gen.defaultconfigs <span class="token comment"># 生成iam-apiserver、iam-authz-server、iam-pump、iamctl组件的默认配置文件</span>
$ <span class="token function">make</span> gen.ca <span class="token comment"># 生成 CA 证书</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令会将IAM的配置文件存放在目录<code v-pre>$/_output/configs/</code>下。</p>
<p>第三步，创建 <code v-pre>iam</code> 命名空间。</p>
<p>我们将IAM应用涉及到的各类资源都创建在<code v-pre>iam</code>命名空间中。将IAM资源创建在独立的命名空间中，不仅方便维护，还可以有效避免影响其他Kubernetes资源。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl create namespace iam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第四步，将IAM各服务的配置文件，以ConfigMap资源的形式保存在Kubernetes集群中。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl <span class="token parameter variable">-n</span> iam create configmap iam --from-file<span class="token operator">=</span><span class="token variable">${IAM_ROOT}</span>/_output/configs/
$ kubectl <span class="token parameter variable">-n</span> iam get configmap iam
NAME   DATA   AGE
iam    <span class="token number">4</span>      13s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第五步，将IAM各服务使用的证书文件，以ConfigMap资源的形式保存在Kubernetes集群中。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl <span class="token parameter variable">-n</span> iam create configmap iam-cert --from-file<span class="token operator">=</span><span class="token variable">${IAM_ROOT}</span>/_output/cert
$ kubectl <span class="token parameter variable">-n</span> iam get configmap iam-cert
NAME       DATA   AGE
iam-cert   <span class="token number">14</span>     12s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第六步，创建镜像仓库访问密钥。</p>
<p>在准备阶段，我们开通了<a href="http://ccr.ccs.tencentyun.com/" target="_blank" rel="noopener noreferrer">腾讯云镜像仓库服务<ExternalLinkIcon/></a>，并创建了用户<code v-pre>10000099``xxxx</code>，密码为<code v-pre>iam59!z$</code>。</p>
<p>接下来，我们就可以创建docker-registry secret了。Kubernetes在下载Docker镜像时，需要docker-registry secret来进行认证。创建命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl <span class="token parameter variable">-n</span> iam create secret docker-registry ccr-registry --docker-server<span class="token operator">=</span>ccr.ccs.tencentyun.com --docker-username<span class="token operator">=</span>10000099xxxx --docker-password<span class="token operator">=</span><span class="token string">'iam59!z$'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第七步，创建Docker镜像，并Push到镜像仓库。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> push <span class="token assign-left variable">REGISTRY_PREFIX</span><span class="token operator">=</span>ccr.ccs.tencentyun.com/marmotedu <span class="token assign-left variable">VERSION</span><span class="token operator">=</span>v1.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第八步，安装IAM Chart包。</p>
<p>在<a href="https://time.geekbang.org/column/article/420940" target="_blank" rel="noopener noreferrer">49讲<ExternalLinkIcon/></a>里，我介绍了4种安装Chart包的方法。这里，我们通过未打包的IAM Chart路径来安装，安装方法如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token variable">${IAM_ROOT}</span>
$ helm <span class="token parameter variable">-n</span> iam <span class="token function">install</span> iam deployments/iam
NAME: iam
LAST DEPLOYED: Sat Aug <span class="token number">21</span> <span class="token number">17</span>:46:56 <span class="token number">2021</span>
NAMESPACE: iam
STATUS: deployed
REVISION: <span class="token number">1</span>
TEST SUITE: None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code v-pre>helm install</code> 后，Kubernetes会自动部署应用，等到IAM应用的Pod都处在 <code v-pre>Running</code> 状态时，说明IAM应用已经成功安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl <span class="token parameter variable">-n</span> iam get pods<span class="token operator">|</span><span class="token function">grep</span> iam
iam-apiserver-cb4ff955-hs827        <span class="token number">1</span>/1     Running   <span class="token number">0</span>          66s
iam-authz-server-7fccc7db8d-chwnn   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          66s
iam-pump-78b57b4464-rrlbf           <span class="token number">1</span>/1     Running   <span class="token number">0</span>          66s
iamctl-59fdc4995-xrzhn              <span class="token number">1</span>/1     Running   <span class="token number">0</span>          66s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第九步，测试IAM应用。</p>
<p>我们通过<code v-pre>helm install</code>在<code v-pre>iam</code>命令空间下创建了一个测试Deployment <code v-pre>iamctl</code>。你可以登陆<code v-pre>iamctl</code> Deployment所创建出来的Pod，执行一些运维操作和冒烟测试。登陆命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl <span class="token parameter variable">-n</span> iam <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> kubectl <span class="token parameter variable">-n</span> iam get pods <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>iamctl <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'/iamctl/{print $1}'</span> -- <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登陆到<code v-pre>iamctl-xxxxxxxxxx-xxxxx</code> Pod中后，你就可以执行运维操作和冒烟测试了。</p>
<p>先来看运维操作。iamctl工具以子命令的方式对外提供功能，你可以使用它提供的各类功能，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/69/y2/693f608aa571cbfd6e06c8cfdb242yy2.png?wh=1920x337" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/69/y2/693f608aa571cbfd6e06c8cfdb242yy2.png?wh=1920x337" alt="图片"><ExternalLinkIcon/></a></p>
<p>再来看冒烟测试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token comment"># cd /opt/iam/scripts/install</span>
<span class="token comment"># ./test.sh iam::test::smoke</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果<code v-pre>./test.sh iam::test::smoke</code>命令打印的输出中，最后一行为<code v-pre>congratulations, smoke test passed!</code>字符串，就说明IAM应用安装成功。如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/9d/8c/9dcc557952b3586f7b37b065bf2bd58c.png?wh=1920x314" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/9d/8c/9dcc557952b3586f7b37b065bf2bd58c.png?wh=1920x314" alt="图片"><ExternalLinkIcon/></a></p>
<p>第十步，销毁EKS集群的资源。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl delete namespace iam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以根据需要选择是否删除EKS集群，如果不需要了就可以选择删除。</p>
<h2 id="iam应用多环境部署" tabindex="-1"><a class="header-anchor" href="#iam应用多环境部署" aria-hidden="true">#</a> IAM应用多环境部署</h2>
<p>在实际的项目开发中，我们需要将IAM应用部署到不同的环境中，不同环境的配置文件是不同的，那么IAM项目是如何进行多环境部署的呢？</p>
<p>IAM项目在<a href="https://leeshengis.com/archives/421843" target="_blank" rel="noopener noreferrer">configs<ExternalLinkIcon/></a>目录下创建了多个Helm values文件（格式为<code v-pre>values--env.yaml</code>）：</p>
<ul>
<li>values-test-env.yaml，测试环境Helm values文件。</li>
<li>values-pre-env.yaml，预发环境Helm values文件。</li>
<li>values-prod-env.yaml，生产环境Helm values文件。</li>
</ul>
<p>在部署IAM应用时，我们在命令行指定<code v-pre>-f</code>参数，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ helm <span class="token parameter variable">-n</span> iam <span class="token function">install</span> <span class="token parameter variable">-f</span> configs/values-test-env.yaml iam deployments/iam <span class="token comment"># 安装到测试环境。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲，我们通过 <code v-pre>helm create iam</code> 创建了一个模板Chart，并基于这个模板Chart包进行了二次开发，最终创建了IAM应用的Helm Chart包：<a href="https://github.com/marmotedu/iam/tree/v1.1.0/deployments/iam" target="_blank" rel="noopener noreferrer">deployments/iam<ExternalLinkIcon/></a>。</p>
<p>有了Helm Chart包，我们就可以通过 <code v-pre>helm -n iam install iam deployments/iam</code> 命令来一键部署好整个IAM应用。当IAM应用中的所有Pod都处在 <code v-pre>Running</code> 状态后，说明IAM应用被成功部署。</p>
<p>最后，我们可以登录iamctl容器，执行 <code v-pre>test.sh iam::test::smoke</code> 命令，来对IAM应用进行冒烟测试。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>试着在Helm Chart中加入MariaDB、MongoDB、Redis模板，通过Helm一键部署好整个IAM应用。</li>
<li>试着通过 <code v-pre>helm</code> 命令升级、回滚和删除IAM应用。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '41.md' style='float:left'>⬆️上一节🔗  </a><a href = '43.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/projects/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


