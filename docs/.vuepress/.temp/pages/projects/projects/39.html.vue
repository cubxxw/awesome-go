<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第39节-如何编写kubernetes资源定义文件" tabindex="-1"><a class="header-anchor" href="#第39节-如何编写kubernetes资源定义文件" aria-hidden="true">#</a> 第39节 如何编写Kubernetes资源定义文件？</h1>
<br>
<div><a href = '38.md' style='float:left'>⬆️上一节🔗  </a><a href = '40.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#为什么选择yaml格式来定义kubernetes资源">为什么选择YAML格式来定义Kubernetes资源？</router-link></li><li><router-link to="#kubernetes-资源定义概述">Kubernetes 资源定义概述</router-link></li><li><router-link to="#常用的kubernetes资源定义">常用的Kubernetes资源定义</router-link><ul><li><router-link to="#pod资源定义">Pod资源定义</router-link></li><li><router-link to="#deployment资源定义">Deployment资源定义</router-link></li><li><router-link to="#configmap资源定义">ConfigMap资源定义</router-link></li><li><router-link to="#service资源定义">Service资源定义</router-link></li></ul></li><li><router-link to="#yaml文件编写技巧">YAML文件编写技巧</router-link></li><li><router-link to="#使用kubernetes-yaml时的一些推荐工具">使用Kubernetes YAML时的一些推荐工具</router-link><ul><li><router-link to="#kubeval">kubeval</router-link></li><li><router-link to="#kube-score">kube-score</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>在接下来的48讲，我会介绍如何基于腾讯云EKS来部署IAM应用。EKS其实是一个标准的Kubernetes集群，在Kubernetes集群中部署应用，需要编写Kubernetes资源的YAML（Yet Another Markup Language）定义文件，例如Service、Deployment、ConfigMap、Secret、StatefulSet等。</p>
<p>这些YAML定义文件里面有很多配置项需要我们去配置，其中一些也比较难理解。为了你在学习下一讲时更轻松，这一讲我们先学习下如何编写Kubernetes YAML文件。</p>
<h2 id="为什么选择yaml格式来定义kubernetes资源" tabindex="-1"><a class="header-anchor" href="#为什么选择yaml格式来定义kubernetes资源" aria-hidden="true">#</a> 为什么选择YAML格式来定义Kubernetes资源？</h2>
<p>首先解释一下，我们为什么使用YAML格式来定义Kubernetes的各类资源呢？这是因为YAML格式和其他格式（例如XML、JSON等）相比，不仅能够支持丰富的数据，而且结构清晰、层次分明、表达性极强、易于维护，非常适合拿来供开发者配置和管理Kubernetes资源。</p>
<p>其实Kubernetes支持YAML和JSON两种格式，JSON格式通常用来作为接口之间消息传递的数据格式，YAML格式则用于资源的配置和管理。YAML和JSON这两种格式是可以相互转换的，你可以通过在线工具<a href="https://www.json2yaml.com/convert-yaml-to-json" target="_blank" rel="noopener noreferrer">json2yaml<ExternalLinkIcon/></a>，来自动转换YAML和JSON数据格式。</p>
<p>例如，下面是一个YAML文件中的内容：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 192.168.0.231
  <span class="token key atrule">externalTrafficPolicy</span><span class="token punctuation">:</span> Cluster
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> https
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30443</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8443</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8443</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver
  <span class="token key atrule">sessionAffinity</span><span class="token punctuation">:</span> None
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它对应的JSON格式的文件内容为：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"apiVersion"</span><span class="token operator">:</span> <span class="token string">"v1"</span><span class="token punctuation">,</span>
  <span class="token property">"kind"</span><span class="token operator">:</span> <span class="token string">"Service"</span><span class="token punctuation">,</span>
  <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"iam-apiserver"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"spec"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"clusterIP"</span><span class="token operator">:</span> <span class="token string">"192.168.0.231"</span><span class="token punctuation">,</span>
    <span class="token property">"externalTrafficPolicy"</span><span class="token operator">:</span> <span class="token string">"Cluster"</span><span class="token punctuation">,</span>
    <span class="token property">"ports"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"https"</span><span class="token punctuation">,</span>
        <span class="token property">"nodePort"</span><span class="token operator">:</span> <span class="token number">30443</span><span class="token punctuation">,</span>
        <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">8443</span><span class="token punctuation">,</span>
        <span class="token property">"protocol"</span><span class="token operator">:</span> <span class="token string">"TCP"</span><span class="token punctuation">,</span>
        <span class="token property">"targetPort"</span><span class="token operator">:</span> <span class="token number">8443</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"app"</span><span class="token operator">:</span> <span class="token string">"iam-apiserver"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"sessionAffinity"</span><span class="token operator">:</span> <span class="token string">"None"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"NodePort"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我就是通过<code v-pre>json2yaml</code>在线工具，来转换YAML和JSON的，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303062239320.png" alt="图片"></p>
<p>在编写 Kubernetes 资源定义文件的过程中，如果因为YAML格式文件中的配置项缩进太深，导致不容易判断配置项的层级，那么，你就可以将其转换成JSON格式，通过JSON格式来判断配置型的层级。</p>
<p>如果想学习更多关于YAML的知识，你可以参考<a href="https://yaml.org/spec/1.2/spec.html" target="_blank" rel="noopener noreferrer">YAML 1.2 (3rd Edition)<ExternalLinkIcon/></a>。这里，可以先看看我整理的YAML基本语法：</p>
<ul>
<li>属性和值都是大小写敏感的。</li>
<li>使用缩进表示层级关系。</li>
<li>禁止使用Tab键缩进，只允许使用空格，建议两个空格作为一个层级的缩进。元素左对齐，就说明对齐的两个元素属于同一个级别。</li>
<li>使用 <code v-pre>#</code> 进行注释，直到行尾。</li>
<li><code v-pre>key: value</code>格式的定义中，冒号后要有一个空格。</li>
<li>短横线表示列表项，使用一个短横线加一个空格；多个项使用同样的缩进级别作为同一列表。</li>
<li>使用 <code v-pre>---</code> 表示一个新的YAML文件开始。</li>
</ul>
<p>现在你知道了，Kubernetes支持YAML和JSON两种格式，它们是可以相互转换的。但鉴于YAML格式的各项优点，我建议你使用YAML格式来定义Kubernetes的各类资源。</p>
<h2 id="kubernetes-资源定义概述" tabindex="-1"><a class="header-anchor" href="#kubernetes-资源定义概述" aria-hidden="true">#</a> Kubernetes 资源定义概述</h2>
<p>Kubernetes 中有很多内置的资源，常用的资源有 Deployment、StatefulSet、ConfigMap、Service、Secret、Nodes、Pods、Events、Jobs、DaemonSets等。除此之外，Kubernetes还有其他一些资源。如果你觉得Kubernetes内置的资源满足不了需求，还可以自定义资源。</p>
<p>Kubernetes的资源清单可以通过执行以下命令来查看：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl api-resources
NAME                              SHORTNAMES   APIVERSION                        NAMESPACED   KIND
bindings                                       v1                                <span class="token boolean">true</span>         Binding
componentstatuses                 cs           v1                                <span class="token boolean">false</span>        ComponentStatus
configmaps                        cm           v1                                <span class="token boolean">true</span>         ConfigMap
endpoints                         ep           v1                                <span class="token boolean">true</span>         Endpoints
events                            ev           v1                                <span class="token boolean">true</span>         Event
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述输出中，各列的含义如下。</p>
<ul>
<li>NAME：资源名称。</li>
<li>SHORTNAMES：资源名称简写。</li>
<li>APIVERSION：资源的API版本，也称为group。</li>
<li>NAMESPACED：资源是否具有Namespace属性。</li>
<li>KIND：资源类别。</li>
</ul>
<p>这些资源有一些共同的配置，也有一些特有的配置。这里，我们先来看下这些资源共同的配置。</p>
<p>下面这些配置是Kubernetes各类资源都具备的：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> &lt;string<span class="token punctuation">></span> <span class="token comment"># string类型，指定group的名称，默认为core。可以使用 `kubectl api-versions` 命令，来获取当前kubernetes版本支持的所有group。</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> &lt;string<span class="token punctuation">></span> <span class="token comment"># string类型，资源类别。</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> &lt;Object<span class="token punctuation">></span> <span class="token comment"># 资源的元数据。</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> &lt;string<span class="token punctuation">></span> <span class="token comment"># string类型，资源名称。</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> &lt;string<span class="token punctuation">></span> <span class="token comment"># string类型，资源所属的命名空间。</span>
  <span class="token key atrule">lables</span><span class="token punctuation">:</span> &lt; map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>string<span class="token punctuation">></span> <span class="token comment"># map类型，资源的标签。</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span> &lt; map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>string<span class="token punctuation">></span> <span class="token comment"># map类型，资源的标注。</span>
  <span class="token key atrule">selfLink</span><span class="token punctuation">:</span> &lt;string<span class="token punctuation">></span> <span class="token comment"># 资源的 REST API路径，格式为：/api/&lt;group>/namespaces/&lt;namespace>/&lt;type>/&lt;name>。例如：/api/v1/namespaces/default/services/iam-apiserver</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span> &lt;Object<span class="token punctuation">></span> <span class="token comment"># 定义用户期望的资源状态（disired state）。</span>
<span class="token key atrule">status</span><span class="token punctuation">:</span> &lt;Object<span class="token punctuation">></span> <span class="token comment"># 资源当前的状态，以只读的方式显示资源的最近状态。这个字段由kubernetes维护，用户无法定义。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以通过<code v-pre>kubectl explain &lt;object&gt;</code>命令来查看Object资源对象介绍，并通过<code v-pre>kubectl explain &lt;object1&gt;.&lt;object2&gt;</code>来查看<code v-pre>&lt;object1&gt;</code>的子对象<code v-pre>&lt;object2&gt;</code>的资源介绍，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl explain <span class="token function">service</span>
$ kubectl explain service.spec
$ kubectl explain service.spec.ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kubernetes资源定义YAML文件，支持以下数据类型：</p>
<ul>
<li>string，表示字符串类型。</li>
<li>object，表示一个对象，需要嵌套多层字段。</li>
<li>map[string]string，表示由key:value组成的映射。</li>
<li>[]string，表示字串列表。</li>
<li>[]object，表示对象列表。</li>
<li>boolean，表示布尔类型。</li>
<li>integer，表示整型。</li>
</ul>
<h2 id="常用的kubernetes资源定义" tabindex="-1"><a class="header-anchor" href="#常用的kubernetes资源定义" aria-hidden="true">#</a> 常用的Kubernetes资源定义</h2>
<p>上面说了，Kubernetes中有很多资源，其中Pod、Deployment、Service、ConfigMap这4类是比较常用的资源，我来一个个介绍下。</p>
<h3 id="pod资源定义" tabindex="-1"><a class="header-anchor" href="#pod资源定义" aria-hidden="true">#</a> Pod资源定义</h3>
<p>下面是一个Pod的YAML定义：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1   <span class="token comment"># 必须 版本号， 常用v1  apps/v1</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod   <span class="token comment"># 必须</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>  <span class="token comment"># 必须，元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> string  <span class="token comment"># 必须，名称</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> string <span class="token comment"># 必须，命名空间，默认上default,生产环境为了安全性建议新建命名空间分类存放</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>   <span class="token comment"># 非必须，标签，列表值</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>  <span class="token comment"># 非必须，注解，列表值</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
<span class="token key atrule">spec</span><span class="token punctuation">:</span>  <span class="token comment"># 必须，容器的详细定义</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>  <span class="token comment">#必须，容器列表，</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string　　　<span class="token comment">#必须，容器1的名称</span>
      <span class="token key atrule">image</span><span class="token punctuation">:</span> string    <span class="token comment">#必须，容器1所用的镜像</span>
      <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Always<span class="token punctuation">|</span>Never<span class="token punctuation">|</span>IfNotPresent<span class="token punctuation">]</span>  <span class="token comment">#非必须，镜像拉取策略，默认是Always</span>
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>  <span class="token comment"># 非必须 列表值，如果不指定，则是一镜像打包时使用的启动命令</span>
      <span class="token key atrule">args</span><span class="token punctuation">:</span>　<span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token comment"># 非必须，启动参数</span>
      <span class="token key atrule">workingDir</span><span class="token punctuation">:</span> string <span class="token comment"># 非必须，容器内的工作目录</span>
      <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> <span class="token comment"># 非必须，挂载到容器内的存储卷配置</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string  <span class="token comment"># 非必须，存储卷名字，需与【@1】处定义的名字一致</span>
          <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> boolean <span class="token comment">#非必须，定义读写模式，默认是读写</span>
      <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment"># 非必须，需要暴露的端口</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string  <span class="token comment"># 非必须 端口名称</span>
          <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> int  <span class="token comment"># 非必须 端口号</span>
          <span class="token key atrule">hostPort</span><span class="token punctuation">:</span> int <span class="token comment"># 非必须 宿主机需要监听的端口号，设置此值时，同一台宿主机不能存在同一端口号的pod， 建议不要设置此值</span>
          <span class="token key atrule">proctocol</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>tcp<span class="token punctuation">|</span>udp<span class="token punctuation">]</span>  <span class="token comment"># 非必须 端口使用的协议，默认是tcp</span>
      <span class="token key atrule">env</span><span class="token punctuation">:</span> <span class="token comment"># 非必须 环境变量</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string <span class="token comment"># 非必须 ，环境变量名称</span>
          <span class="token key atrule">value</span><span class="token punctuation">:</span> string  <span class="token comment"># 非必须，环境变量键值对</span>
      <span class="token key atrule">resources</span><span class="token punctuation">:</span>  <span class="token comment"># 非必须，资源限制</span>
        <span class="token key atrule">limits</span><span class="token punctuation">:</span>  <span class="token comment"># 非必须，限制的容器使用资源的最大值，超过此值容器会推出</span>
          <span class="token key atrule">cpu</span><span class="token punctuation">:</span> string <span class="token comment"># 非必须，cpu资源，单位是core，从0.1开始</span>
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> string 内存限制，单位为MiB<span class="token punctuation">,</span>GiB
        <span class="token key atrule">requests</span><span class="token punctuation">:</span>  <span class="token comment"># 非必须，启动时分配的资源</span>
          <span class="token key atrule">cpu</span><span class="token punctuation">:</span> string 
          <span class="token key atrule">memory</span><span class="token punctuation">:</span> string
      <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>   <span class="token comment"># 非必须，容器健康检查的探针探测方式</span>
        <span class="token key atrule">exec</span><span class="token punctuation">:</span> <span class="token comment"># 探测命令</span>
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token comment"># 探测命令或者脚本</span>
        <span class="token key atrule">httpGet</span><span class="token punctuation">:</span> <span class="token comment"># httpGet方式</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> string  <span class="token comment"># 探测路径，例如 http://ip:port/path</span>
          <span class="token key atrule">port</span><span class="token punctuation">:</span> number  
          <span class="token key atrule">host</span><span class="token punctuation">:</span> string  
          <span class="token key atrule">scheme</span><span class="token punctuation">:</span> string
          <span class="token key atrule">httpHeaders</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
              <span class="token key atrule">value</span><span class="token punctuation">:</span> string
          <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>  <span class="token comment"># tcpSocket方式，检查端口是否存在</span>
            <span class="token key atrule">port</span><span class="token punctuation">:</span> number
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token comment">#容器启动完成多少秒后的再进行首次探测，单位为s</span>
          <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>  <span class="token comment">#探测响应超时的时间,默认是1s,如果失败，则认为容器不健康，会重启该容器</span>
          <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>  <span class="token comment"># 探测间隔时间，默认是10s</span>
          <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">0</span>  <span class="token comment"># </span>
          <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
          <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Always<span class="token punctuation">|</span>Never<span class="token punctuation">|</span>OnFailure<span class="token punctuation">]</span>  <span class="token comment"># 容器重启的策略，</span>
        <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span> object  <span class="token comment"># 指定运行的宿主机</span>
        <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>  <span class="token comment"># 容器下载时使用的Secrets名称，需要与valumes.secret中定义的一致</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
        <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment">## 挂载的共享存储卷类型</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string  <span class="token comment"># 非必须，【@1】</span>
          <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> string
          <span class="token key atrule">secret</span><span class="token punctuation">:</span>  <span class="token comment"># 类型为secret的存储卷，使用内部的secret内的items值作为环境变量</span>
            <span class="token key atrule">secrectName</span><span class="token punctuation">:</span> string
            <span class="token key atrule">items</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> string
                <span class="token key atrule">path</span><span class="token punctuation">:</span> string
            <span class="token key atrule">configMap</span><span class="token punctuation">:</span>  <span class="token comment">## 类型为configMap的存储卷</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> string
              <span class="token key atrule">items</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> string
                  <span class="token key atrule">path</span><span class="token punctuation">:</span> string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pod是Kubernetes中最重要的资源，我们可以通过Pod YAML定义来创建一个Pod，也可以通过DaemonSet、Deployment、ReplicaSet、StatefulSet、Job、CronJob来创建Pod。</p>
<h3 id="deployment资源定义" tabindex="-1"><a class="header-anchor" href="#deployment资源定义" aria-hidden="true">#</a> Deployment资源定义</h3>
<p>Deployment资源定义YAML文件如下：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># 设定资源的标签</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver
  <span class="token key atrule">name</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">progressDeadlineSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># 指定多少时间内不能完成滚动升级就视为失败，滚动升级自动取消</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 声明副本数，建议 >= 2</span>
  <span class="token key atrule">revisionHistoryLimit</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 设置保留的历史版本个数，默认是10</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 选择器</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span> <span class="token comment"># 匹配标签</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver <span class="token comment"># 标签格式为key: value对</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span> <span class="token comment"># 指定部署策略</span>
    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span>
      <span class="token key atrule">maxSurge</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 最大额外可以存在的副本数，可以为百分比，也可以为整数</span>
      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 表示在更新过程中能够进入不可用状态的 Pod 的最大值，可以为百分比，也可以为整数</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate <span class="token comment"># 更新策略，包括：重建(Recreate)、RollingUpdate(滚动更新)</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token comment"># 指定Pod创建模板。注意：以下定义为Pod的资源定义</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># 指定Pod的元数据</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># 指定Pod的标签</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
        <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span> <span class="token comment"># Pod反亲和性，尽量避免同一个应用调度到相同Node</span>
          <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span> <span class="token comment"># 软需求</span>
          <span class="token punctuation">-</span> <span class="token key atrule">podAffinityTerm</span><span class="token punctuation">:</span>
              <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
                <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># 有多个选项，只有同时满足这些条件的节点才能运行 Pod</span>
                <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> app
                  <span class="token key atrule">operator</span><span class="token punctuation">:</span> In <span class="token comment"># 设定标签键与一组值的关系，In、NotIn、Exists、DoesNotExist</span>
                  <span class="token key atrule">values</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> iam<span class="token punctuation">-</span>apiserver
              <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> kubernetes.io/hostname
            <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">100</span> <span class="token comment"># weight 字段值的范围是1-100。</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token comment"># 指定运行命令</span>
        <span class="token punctuation">-</span> /opt/iam/bin/iam<span class="token punctuation">-</span>apiserver <span class="token comment"># 运行参数</span>
        <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>config=/etc/iam/iam<span class="token punctuation">-</span>apiserver.yaml
        <span class="token key atrule">image</span><span class="token punctuation">:</span> ccr.ccs.tencentyun.com/lkccc/iam<span class="token punctuation">-</span>apiserver<span class="token punctuation">-</span>amd64<span class="token punctuation">:</span>v1.0.6 <span class="token comment"># 镜像名，遵守镜像命名规范</span>
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always <span class="token comment"># 镜像拉取策略。IfNotPresent：优先使用本地镜像；Never：使用本地镜像，本地镜像不存在，则报错；Always：默认值，每次都重新拉取镜像</span>
        <span class="token comment"># lifecycle: # kubernetes支持postStart和preStop事件。当一个容器启动后，Kubernetes将立即发送postStart事件；在容器被终结之前，Kubernetes将发送一个preStop事件</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver <span class="token comment"># 容器名称，与应用名称保持一致</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment"># 端口设置</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8443</span> <span class="token comment"># 容器暴露的端口</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> secure <span class="token comment"># 端口名称</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP <span class="token comment"># 协议，TCP和UDP</span>
        <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span> <span class="token comment"># 存活检查，检查容器是否正常，不正常则重启实例</span>
          <span class="token key atrule">httpGet</span><span class="token punctuation">:</span> <span class="token comment"># HTTP请求检查方法</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /healthz <span class="token comment"># 请求路径</span>
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token comment"># 检查端口</span>
            <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP <span class="token comment"># 检查协议</span>
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 启动延时，容器延时启动健康检查的时间</span>
          <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># 间隔时间，进行健康检查的时间间隔</span>
          <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 健康阈值，表示后端容器从失败到成功的连续健康检查成功次数</span>
          <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 不健康阈值，表示后端容器从成功到失败的连续健康检查成功次数</span>
          <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 响应超时，每次健康检查响应的最大超时时间</span>
        <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span> <span class="token comment"># 就绪检查，检查容器是否就绪，不就绪则停止转发流量到当前实例</span>
          <span class="token key atrule">httpGet</span><span class="token punctuation">:</span> <span class="token comment"># HTTP请求检查方法</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /healthz <span class="token comment"># 请求路径</span>
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token comment"># 检查端口</span>
            <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP <span class="token comment"># 检查协议</span>
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 启动延时，容器延时启动健康检查的时间</span>
          <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># 间隔时间，进行健康检查的时间间隔</span>
          <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 健康阈值，表示后端容器从失败到成功的连续健康检查成功次数</span>
          <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 不健康阈值，表示后端容器从成功到失败的连续健康检查成功次数</span>
          <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 响应超时，每次健康检查响应的最大超时时间</span>
        <span class="token key atrule">startupProbe</span><span class="token punctuation">:</span> <span class="token comment"># 启动探针，可以知道应用程序容器什么时候启动了</span>
          <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">10</span>
          <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /healthz
            <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
            <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP
          <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
          <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">10</span>
          <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
          <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">3</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token comment"># 资源管理</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span> <span class="token comment"># limits用于设置容器使用资源的最大上限,避免异常情况下节点资源消耗过多</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">"1"</span> <span class="token comment"># 设置cpu limit，1核心 = 1000m</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1Gi <span class="token comment"># 设置memory limit，1G = 1024Mi</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span> <span class="token comment"># requests用于预分配资源,当集群中的节点没有request所要求的资源数量时,容器会创建失败</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> 250m <span class="token comment"># 设置cpu request</span>
            <span class="token key atrule">memory</span><span class="token punctuation">:</span> 500Mi <span class="token comment"># 设置memory request</span>
        <span class="token key atrule">terminationMessagePath</span><span class="token punctuation">:</span> /dev/termination<span class="token punctuation">-</span>log <span class="token comment"># 容器终止时消息保存路径</span>
        <span class="token key atrule">terminationMessagePolicy</span><span class="token punctuation">:</span> File <span class="token comment"># 仅从终止消息文件中检索终止消息</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> <span class="token comment"># 挂载日志卷</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/iam/iam<span class="token punctuation">-</span>apiserver.yaml <span class="token comment"># 容器内挂载镜像路径</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> iam <span class="token comment"># 引用的卷名称</span>
          <span class="token key atrule">subPath</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver.yaml <span class="token comment"># 指定所引用的卷内的子路径，而不是其根路径。</span>
        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/iam/cert
          <span class="token key atrule">name</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>cert
      <span class="token key atrule">dnsPolicy</span><span class="token punctuation">:</span> ClusterFirst
      <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Always <span class="token comment"># 重启策略，Always、OnFailure、Never</span>
      <span class="token key atrule">schedulerName</span><span class="token punctuation">:</span> default<span class="token punctuation">-</span>scheduler <span class="token comment"># 指定调度器的名字</span>
      <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span> <span class="token comment"># 在Pod中设置ImagePullSecrets只有提供自己密钥的Pod才能访问私有仓库</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ccr<span class="token punctuation">-</span>registry <span class="token comment"># 镜像仓库的Secrets需要在集群中手动创建</span>
      <span class="token key atrule">securityContext</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment"># 指定安全上下文</span>
      <span class="token key atrule">terminationGracePeriodSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 优雅关闭时间，这个时间内优雅关闭未结束，k8s 强制 kill</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment"># 配置数据卷，类型详见https://kubernetes.io/zh/docs/concepts/storage/volumes</span>
      <span class="token punctuation">-</span> <span class="token key atrule">configMap</span><span class="token punctuation">:</span> <span class="token comment"># configMap 类型的数据卷</span>
          <span class="token key atrule">defaultMode</span><span class="token punctuation">:</span> <span class="token number">420</span> <span class="token comment">#权限设置0~0777，默认0664</span>
          <span class="token key atrule">items</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver.yaml
            <span class="token key atrule">path</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver.yaml
          <span class="token key atrule">name</span><span class="token punctuation">:</span> iam <span class="token comment"># configmap名称</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> iam <span class="token comment"># 设置卷名称，与volumeMounts名称对应</span>
      <span class="token punctuation">-</span> <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
          <span class="token key atrule">defaultMode</span><span class="token punctuation">:</span> <span class="token number">420</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>cert
        <span class="token key atrule">name</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>cert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在部署时，你可以根据需要来配置相应的字段，常见的需要配置的字段为：<code v-pre>labels</code>、<code v-pre>name</code>、<code v-pre>namespace</code>、<code v-pre>replicas</code>、<code v-pre>command</code>、<code v-pre>imagePullPolicy</code>、<code v-pre>container.name</code>、<code v-pre>livenessProbe</code>、<code v-pre>readinessProbe</code>、<code v-pre>resources</code>、<code v-pre>volumeMounts</code>、<code v-pre>volumes</code>、<code v-pre>imagePullSecrets</code>等。</p>
<p>另外，在部署应用时，经常需要提供配置文件，供容器内的进程加载使用。最常用的方法是挂载ConfigMap到应用容器中。那么，如何挂载ConfigMap到容器中呢？</p>
<p>引用 ConfigMap 对象时，你可以在 volume 中通过它的名称来引用。你可以自定义 ConfigMap 中特定条目所要使用的路径。下面的配置就显示了如何将名为 <code v-pre>log-config</code> 的 ConfigMap 挂载到名为 <code v-pre>configmap-pod</code> 的 Pod 中：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>config4
<span class="token key atrule">data</span><span class="token punctuation">:</span> <span class="token comment"># 存储配置内容</span>
  <span class="token key atrule">db.host</span><span class="token punctuation">:</span> 172.168.10.1 <span class="token comment"># 存储格式为key: value</span>
  <span class="token key atrule">db.port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>log-config</code> ConfigMap 以卷的形式挂载，并且存储在 <code v-pre>log_level</code> 条目中的所有内容都被挂载到 Pod 的<code v-pre>/etc/config/log_level</code> 路径下。 请注意，这个路径来源于卷的 <code v-pre>mountPath</code> 和 <code v-pre>log_level</code> 键对应的<code v-pre>path</code>。</p>
<p>这里需要注意，在使用 ConfigMap 之前，你首先要创建它。接下来，我们来看下ConfigMap定义。</p>
<h3 id="configmap资源定义" tabindex="-1"><a class="header-anchor" href="#configmap资源定义" aria-hidden="true">#</a> ConfigMap资源定义</h3>
<p>下面是一个ConfigMap YAML示例：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> <span class="token key atrule">v1kind</span><span class="token punctuation">:</span> <span class="token key atrule">ConfigMapmetadata</span><span class="token punctuation">:</span>  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token key atrule">test-config4data</span><span class="token punctuation">:</span> <span class="token comment"># 存储配置内容  db.host: 172.168.10.1 # 存储格式为key: value  db.port: 3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，ConfigMap的YAML定义相对简单些。假设我们将上述YAML文件保存在了<code v-pre>iam-configmap.yaml</code>文件中，我们可以执行以下命令，来创建ConfigMap：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl create <span class="token parameter variable">-f</span> iam-configmap.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除此之外，kubectl命令行工具还提供了3种创建ConfigMap的方式。我来分别介绍下。</p>
<p>1）通过<code v-pre>--from-literal</code>参数创建</p>
<p>创建命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl create configmap iam-configmap --from-literal<span class="token operator">=</span>db.host<span class="token operator">=</span><span class="token number">172.168</span>.10.1 --from-literal<span class="token operator">=</span>db.port<span class="token operator">=</span><span class="token string">'3306'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）通过<code v-pre>--from-file=&lt;文件&gt;</code>参数创建</p>
<p>创建命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token number">172.168</span>.10.1 <span class="token operator">></span> ./db.host
$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token number">3306</span> <span class="token operator">></span> ./db.port
$ kubectl create cm iam-configmap --from-file<span class="token operator">=</span>./db.host --from-file<span class="token operator">=</span>./db.port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>--from-file</code>的值也可以是一个目录。当值是目录时，目录中的文件名为key，目录的内容为value。</p>
<p>3）通过<code v-pre>--from-env-file</code>参数创建</p>
<p>创建命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">></span> env.txt</span>
db.host=172.168.10.1
db.port=3306
EOF</span>
$ kubectl create cm iam-configmap --from-env-file<span class="token operator">=</span>env.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service资源定义" tabindex="-1"><a class="header-anchor" href="#service资源定义" aria-hidden="true">#</a> Service资源定义</h3>
<p>Service 是 Kubernetes 另一个核心资源。通过创建 Service，可以为一组具有相同功能的容器应用提供一个统一的入口地址，并且将请求负载到后端的各个容器上。Service资源定义YAML文件如下：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver
  <span class="token key atrule">name</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 192.168.0.231 <span class="token comment"># 虚拟服务地址</span>
  <span class="token key atrule">externalTrafficPolicy</span><span class="token punctuation">:</span> Cluster <span class="token comment"># 表示此服务是否希望将外部流量路由到节点本地或集群范围的端点</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment"># service需要暴露的端口列表</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> https <span class="token comment">#端口名称</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30443</span> <span class="token comment"># 当type = NodePort时，指定映射到物理机的端口号</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8443</span> <span class="token comment"># 服务监听的端口号</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP <span class="token comment"># 端口协议，支持TCP和UDP，默认TCP</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8443</span> <span class="token comment"># 需要转发到后端Pod的端口号</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># label selector配置，将选择具有label标签的Pod作为其后端RS</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> iam<span class="token punctuation">-</span>apiserver
  <span class="token key atrule">sessionAffinity</span><span class="token punctuation">:</span> None <span class="token comment"># 是否支持session</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort <span class="token comment"># service的类型，指定service的访问方式，默认为clusterIp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面，我介绍了常用的Kubernetes YAML的内容。我们在部署应用的时候，是需要手动编写这些文件的。接下来，我就讲解一些在编写过程中常用的编写技巧。</p>
<h2 id="yaml文件编写技巧" tabindex="-1"><a class="header-anchor" href="#yaml文件编写技巧" aria-hidden="true">#</a> YAML文件编写技巧</h2>
<p>这里我主要介绍三个技巧。</p>
<p>1）使用在线的工具来自动生成模板YAML文件。</p>
<p>YAML文件很复杂，完全从0开始编写一个YAML定义文件，工作量大、容易出错，也没必要。我比较推荐的方式是，使用一些工具来自动生成所需的YAML。</p>
<p>这里我推荐使用<a href="https://k8syaml.com/" target="_blank" rel="noopener noreferrer">k8syaml<ExternalLinkIcon/></a>工具。<code v-pre>k8syaml</code>是一个在线的YAML生成工具，当前能够生成Deployment、StatefulSet、DaemonSet类型的YAML文件。<code v-pre>k8syaml</code>具有默认值，并且有对各字段详细的说明，可以供我们填参时参考。</p>
<p>2）使用<code v-pre>kubectl run</code>命令获取YAML模板：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>$ kubectl run <span class="token punctuation">-</span><span class="token punctuation">-</span>dry<span class="token punctuation">-</span>run=client <span class="token punctuation">-</span><span class="token punctuation">-</span>image=nginx nginx <span class="token punctuation">-</span>o yaml <span class="token punctuation">></span> my<span class="token punctuation">-</span>nginx.yaml
$ cat my<span class="token punctuation">-</span>nginx.yaml
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token null important">null</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">run</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token key atrule">dnsPolicy</span><span class="token punctuation">:</span> ClusterFirst
  <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Always
<span class="token key atrule">status</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们可以基于这个模板，来修改配置，形成最终的YAML文件。</p>
<p>3）导出集群中已有的资源描述。</p>
<p>有时候，如果我们想创建一个Kubernetes资源，并且发现该资源跟集群中已经创建的资源描述相近或者一致的时候，可以选择导出集群中已经创建资源的YAML描述，并基于导出的YAML文件进行修改，获得所需的YAML。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubectl get deployment iam-apiserver <span class="token parameter variable">-o</span> yaml <span class="token operator">></span> iam-authz-server.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着，修改<code v-pre>iam-authz-server.yaml</code>。通常，我们需要删除Kubernetes自动添加的字段，例如<code v-pre>kubectl.kubernetes.io/last-applied-configuration</code>、<code v-pre>deployment.kubernetes.io/revision</code>、<code v-pre>creationTimestamp</code>、<code v-pre>generation</code>、<code v-pre>resourceVersion</code>、<code v-pre>selfLink</code>、<code v-pre>uid</code>、<code v-pre>status</code>。</p>
<p>这些技巧可以帮助我们更好地编写和使用Kubernetes YAML。</p>
<h2 id="使用kubernetes-yaml时的一些推荐工具" tabindex="-1"><a class="header-anchor" href="#使用kubernetes-yaml时的一些推荐工具" aria-hidden="true">#</a> 使用Kubernetes YAML时的一些推荐工具</h2>
<p>接下来，我再介绍一些比较流行的工具，你可以根据自己的需要进行选择。</p>
<h3 id="kubeval" tabindex="-1"><a class="header-anchor" href="#kubeval" aria-hidden="true">#</a> kubeval</h3>
<p><a href="https://github.com/instrumenta/kubeval" target="_blank" rel="noopener noreferrer">kubeval<ExternalLinkIcon/></a>可以用来验证Kubernetes YAML是否符合Kubernetes API模式。</p>
<blockquote>
<p>⚠️ <strong>注意：这个项目<a href="https://github.com/instrumenta/kubeval/issues/268#issuecomment-902128481" target="_blank" rel="noopener noreferrer">不再维护<ExternalLinkIcon/></a>，一个很好的替代品是<a href="https://github.com/yannh/kubeconform" target="_blank" rel="noopener noreferrer">kubeconform<ExternalLinkIcon/></a></strong></p>
</blockquote>
<p>安装方法如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">wget</span> https://github.com/instrumenta/kubeval/releases/latest/download/kubeval-linux-amd64.tar.gz
$ <span class="token function">tar</span> xf kubeval-linux-amd64.tar.gz
$ <span class="token function">mv</span> kubeval <span class="token environment constant">$HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，我们对Kubernetes YAML文件进行验证：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kubeval deployments/iam.invalid.yaml
ERR  - iam/templates/iam-configmap.yaml: Duplicate <span class="token string">'ConfigMap'</span> resource <span class="token string">'iam'</span> <span class="token keyword">in</span> namespace <span class="token string">''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据提示，查看<code v-pre>iam.yaml</code>，发现在<code v-pre>iam.yaml</code>文件中，我们定义了两个同名的<code v-pre>iam</code> ConfigMap：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> iam
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">---</span>
<span class="token comment"># Source: iam/templates/iam-configmap.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> iam
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">iam-</span><span class="token punctuation">:</span> <span class="token string">""</span>
  <span class="token key atrule">iam-apiserver.yaml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，使用<code v-pre>kubeval</code>之类的工具，能让我们在部署的早期，不用访问集群就能发现YAML文件的错误。</p>
<p><strong>验证一下：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>❯ ./kubeval iam-authz-server.yaml
PASS - iam-authz-server.yaml contains an empty YAML document
❯ <span class="token builtin class-name">echo</span> <span class="token string">"======> ERROR END"</span> <span class="token operator">>></span> iam-authz-server.yaml
❯ ./kubeval iam-authz-server.yaml
ERR  - Failed to decode YAML from iam-authz-server.yaml: error unmarshaling JSON: <span class="token keyword">while</span> decoding JSON: json: cannot unmarshal string into Go value of <span class="token builtin class-name">type</span> map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>interface <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kube-score" tabindex="-1"><a class="header-anchor" href="#kube-score" aria-hidden="true">#</a> kube-score</h3>
<p><a href="https://github.com/zegl/kube-score" target="_blank" rel="noopener noreferrer">kube-score<ExternalLinkIcon/></a>能够对Kubernetes YAML进行分析，并根据内置的检查对其评分，这些检查是根据安全建议和最佳实践而选择的，例如：</p>
<ul>
<li>以非Root用户启动容器。</li>
<li>为Pods设置健康检查。</li>
<li>定义资源请求和限制。</li>
</ul>
<p>你可以按照这个方法安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go get github.com/zegl/kube-score/cmd/kube-score
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，我们对Kubernetes YAML进行评分：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kube-score score <span class="token parameter variable">-o</span> ci deployments/iam.invalid.yaml
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment
<span class="token punctuation">[</span>CRITICAL<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment: The pod does not have a matching NetworkPolicy
<span class="token punctuation">[</span>CRITICAL<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment: Container has the same readiness and liveness probe
<span class="token punctuation">[</span>CRITICAL<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment: <span class="token punctuation">(</span>iam-apiserver<span class="token punctuation">)</span> The pod has a container with a writable root filesystem
<span class="token punctuation">[</span>CRITICAL<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment: <span class="token punctuation">(</span>iam-apiserver<span class="token punctuation">)</span> The container is running with a low user ID
<span class="token punctuation">[</span>CRITICAL<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment: <span class="token punctuation">(</span>iam-apiserver<span class="token punctuation">)</span> The container running with a low group ID
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> iam-apiserver apps/v1/Deployment
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查的结果有<code v-pre>OK</code>、<code v-pre>SKIPPED</code>、<code v-pre>WARNING</code>和<code v-pre>CRITICAL</code>。<code v-pre>CRITICAL</code>是需要你修复的；<code v-pre>WARNING</code>是需要你关注的；<code v-pre>SKIPPED</code>是因为某些原因略过的检查；<code v-pre>OK</code>是验证通过的。</p>
<p>如果你想查看详细的错误原因和解决方案，可以使用<code v-pre>-o human</code>选项，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ kube-score score <span class="token parameter variable">-o</span> human deployments/iam.invalid.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述命令会检查YAML资源定义文件，如果有不合规的地方会报告级别、类别以及错误详情，如下图所示：</p>
<p><img src="https://static001.geekbang.org/resource/image/04/f6/0498529693c6d15c9d9d45cbyy866cf6.png?wh=1920x827" alt="图片"></p>
<p>当然，除了kubeval、kube-score这两个工具，业界还有其他一些Kubernetes检查工具，例如<a href="https://github.com/stelligent/config-lint" target="_blank" rel="noopener noreferrer">config-lint<ExternalLinkIcon/></a>、<a href="https://github.com/cloud66-oss/copper" target="_blank" rel="noopener noreferrer">copper<ExternalLinkIcon/></a>、<a href="https://github.com/open-policy-agent/conftest" target="_blank" rel="noopener noreferrer">conftest<ExternalLinkIcon/></a>、<a href="https://github.com/FairwindsOps/polaris" target="_blank" rel="noopener noreferrer">polaris<ExternalLinkIcon/></a>等。</p>
<p>这些工具，我推荐你这么来选择：首先，使用kubeval工具做最基本的YAML文件验证。验证通过之后，我们就可以进行更多的测试。如果你没有特别复杂的YAML验证要求，只需要用到一些最常见的检查策略，这时候可以使用kube-score。如果你有复杂的验证要求，并且希望能够自定义验证策略，则可以考虑使用copper。当然，<code v-pre>polaris</code>、<code v-pre>config-lint</code>、<code v-pre>copper</code>也值得你去尝试下。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天，我主要讲了如何编写Kubernetes YAML文件。</p>
<p>YAML格式具有丰富的数据表达能力、清晰的结构和层次，因此被用于Kubernetes资源的定义文件中。如果你要把应用部署在Kubernetes集群中，就要创建多个关联的K8s资源，如果要创建K8s资源，目前比较多的方式还是编写YAML格式的定义文件。</p>
<p>这一讲我介绍了K8s中最常用的四种资源（Pod、Deployment、Service、ConfigMap）的YAML定义的写法，你可以常来温习。</p>
<p>另外，在编写YAML文件时，也有一些技巧。比如，可以通过在线工具<a href="https://k8syaml.com/" target="_blank" rel="noopener noreferrer">k8syaml<ExternalLinkIcon/></a>来自动生成初版的YAML文件，再基于此YAML文件进行二次修改，从而形成终版。</p>
<p>最后，我还给你分享了编写和使用Kubernetes YAML时，社区提供的多种工具。比如，kubeval可以校验YAML，kube-score可以给YAML文件打分。了解了如何编写Kubernetes YAML文件，下一讲的学习相信你会进行得更顺利。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '38.md' style='float:left'>⬆️上一节🔗  </a><a href = '40.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


