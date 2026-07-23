<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第25节-sdk-设计-上-如何设计出一个优秀的-go-sdk" tabindex="-1"><a class="header-anchor" href="#第25节-sdk-设计-上-如何设计出一个优秀的-go-sdk" aria-hidden="true">#</a> 第25节  SDK 设计（上）：如何设计出一个优秀的 Go SDK？</h1>
<br>
<div><a href = '24.md' style='float:left'>⬆️上一节🔗  </a><a href = '26.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://cubxxw.com/" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#什么是sdk">什么是SDK？</router-link></li><li><router-link to="#sdk设计方法">SDK设计方法</router-link><ul><li><router-link to="#如何给sdk命名">如何给SDK命名？</router-link></li><li><router-link to="#sdk的目录结构">SDK的目录结构</router-link></li><li><router-link to="#sdk设计方法-1">SDK设计方法</router-link></li></ul></li><li><router-link to="#公有云厂商采用的sdk设计方式">公有云厂商采用的SDK设计方式</router-link><ul><li><router-link to="#api层-创建客户端实例">API层：创建客户端实例</router-link></li><li><router-link to="#基础层-构建并执行http请求">基础层：构建并执行HTTP请求</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>你好，我是孔令飞。接下来的两讲，我们来看下如何设计和实现一个优秀的Go SDK。</p>
<p>后端服务通过API接口对外提供应用的功能，但是用户直接调用API接口，需要编写API接口调用的逻辑，并且需要构造入参和解析返回的数据包，使用起来效率低，而且有一定的开发工作量。</p>
<p>在实际的项目开发中，通常会提供对开发者更友好的SDK包，供客户端调用。很多大型服务在发布时都会伴随着SDK的发布，例如腾讯云很多产品都提供了SDK：</p>
<p><img src="http://sm.cubxxw.com/sm202303042351165.png" alt="图片"></p>
<p>既然SDK如此重要，那么如何设计一个优秀的Go SDK呢？这一讲我就来详细介绍一下。</p>
<h2 id="什么是sdk" tabindex="-1"><a class="header-anchor" href="#什么是sdk" aria-hidden="true">#</a> 什么是SDK？</h2>
<p>首先，我们来看下什么是SDK。</p>
<p>对于SDK（Software Development Kit，软件开发工具包），不同场景下有不同的解释。但是对于一个Go后端服务来说，SDK通常是指<strong>封装了Go后端服务API接口的软件包</strong>，里面通常包含了跟软件相关的库、文档、使用示例、封装好的API接口和工具。</p>
<p>调用SDK跟调用本地函数没有太大的区别，所以可以极大地提升开发者的开发效率和体验。SDK可以由服务提供者提供，也可以由其他组织或个人提供。为了鼓励开发者使用其系统或语言，SDK通常都是免费提供的。</p>
<p>通常，服务提供者会提供不同语言的SDK，比如针对Python开发者会提供Python版的SDK，针对Go开发者会提供Go版的SDK。一些比较专业的团队还会有SDK自动生成工具，可以根据API接口定义，自动生成不同语言的SDK。例如，Protocol Buffers的编译工具protoc，就可以基于Protobuf文件生成C++、Python、Java、JavaScript、PHP等语言版本的SDK。阿里云、腾讯云这些一线大厂，也可以基于API定义，生成不同编程语言的SDK。</p>
<h2 id="sdk设计方法" tabindex="-1"><a class="header-anchor" href="#sdk设计方法" aria-hidden="true">#</a> SDK设计方法</h2>
<p>那么，我们如何才能设计一个好的SDK呢？对于SDK，不同团队会有不同的设计方式，我调研了一些优秀SDK的实现，发现这些SDK有一些共同点。根据我的调研结果，结合我在实际开发中的经验，我总结出了一套SDK设计方法，接下来就分享给你。</p>
<h3 id="如何给sdk命名" tabindex="-1"><a class="header-anchor" href="#如何给sdk命名" aria-hidden="true">#</a> 如何给SDK命名？</h3>
<p>在讲设计方法之前，我先来介绍两个重要的知识点：SDK的命名方式和SDK的目录结构。</p>
<p>SDK的名字目前没有统一的规范，但比较常见的命名方式是 <code v-pre>xxx-sdk-go</code> / <code v-pre>xxx-sdk-python</code> / <code v-pre>xxx-sdk-java</code> 。其中， <code v-pre>xxx</code> 可以是项目名或者组织名，例如腾讯云在GitHub上的组织名为tencentcloud，那它的SDK命名如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042351918.png" alt="图片"></p>
<h3 id="sdk的目录结构" tabindex="-1"><a class="header-anchor" href="#sdk的目录结构" aria-hidden="true">#</a> SDK的目录结构</h3>
<p>不同项目SDK的目录结构也不相同，但一般需要包含下面这些文件或目录。目录名可能会有所不同，但目录功能是类似的。</p>
<ul>
<li><strong>README.md</strong>：SDK的帮助文档，里面包含了安装、配置和使用SDK的方法。</li>
<li><strong>examples/sample/</strong>：SDK的使用示例。</li>
<li><strong>sdk/</strong>：SDK共享的包，里面封装了最基础的通信功能。如果是HTTP服务，基本都是基于 <code v-pre>net/http</code> 包进行封装。</li>
<li><strong>api</strong>：如果 <code v-pre>xxx-sdk-go</code> 只是为某一个服务提供SDK，就可以把该服务的所有API接口封装代码存放在api目录下。</li>
<li><strong>services/{iam, tms}</strong> ：如果 <code v-pre>xxx-sdk-go</code> 中， <code v-pre>xxx</code> 是一个组织，那么这个SDK很可能会集成该组织中很多服务的API，就可以把某类服务的API接口封装代码存放在 <code v-pre>services/&lt;服务名&gt;</code>下，例如AWS的<a href="https://github.com/aws/aws-sdk-go/tree/main/service" target="_blank" rel="noopener noreferrer">Go SDK<ExternalLinkIcon/></a>。</li>
</ul>
<p>一个典型的目录结构如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
├── examples            <span class="token comment"># 示例代码存放目录</span>
│   └── authz.go
├── README.md           <span class="token comment"># SDK使用文档</span>
├── sdk                 <span class="token comment"># 公共包，封装了SDK配置、API请求、认证等代码</span>
│   ├── client.go
│   ├── config.go
│   ├── credential.go
│   └── <span class="token punctuation">..</span>.
└── services            <span class="token comment"># API封装</span>
    ├── common
    │   └── model
    ├── iam             <span class="token comment"># iam服务的API接口</span>
    │   ├── authz.go
    │   ├── client.go
    │   └── <span class="token punctuation">..</span>.
    └── tms             <span class="token comment"># tms服务的API接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sdk设计方法-1" tabindex="-1"><a class="header-anchor" href="#sdk设计方法-1" aria-hidden="true">#</a> SDK设计方法</h3>
<p>SDK的设计方法如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/9f/ca/9fb7aa8d3da4210223e9b0c87943e8ca.jpg?wh=1920x841" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/9f/ca/9fb7aa8d3da4210223e9b0c87943e8ca.jpg?wh=1920x841" alt="图片"><ExternalLinkIcon/></a></p>
<p>我们可以通过Config配置创建客户端Client，例如 <code v-pre>func NewClient(config sdk.Config) (Client, error)</code>，配置中可以指定下面的信息。</p>
<ul>
<li>服务的后端地址：服务的后端地址可以通过配置文件来配置，也可以直接固化在SDK中，推荐后端服务地址可通过配置文件配置。</li>
<li>认证信息：最常用的认证方式是通过密钥认证，也有一些是通过用户名和密码认证。</li>
<li>其他配置：例如超时时间、重试次数、缓存时间等。</li>
</ul>
<p>创建的Client是一个结构体或者Go interface。这里我建议你使用interface类型，这样可以将定义和具体实现解耦。Client具有一些方法，例如 CreateUser、DeleteUser等，每一个方法对应一个API接口，下面是一个Client定义：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    client <span class="token operator">*</span>sdk<span class="token punctuation">.</span>Request
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">CreateUser</span><span class="token punctuation">(</span>req <span class="token operator">*</span>CreateUserRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>CreateUserResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// normal code</span>
    resp <span class="token operator">:=</span> <span class="token operator">&amp;</span>CreateUserResponse<span class="token punctuation">{</span><span class="token punctuation">}</span>
    err <span class="token operator">:=</span> c<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">return</span> resp<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code v-pre>client.CreateUser(req)</code> 会执行HTTP请求，在 <code v-pre>req</code> 中可以指定HTTP请求的方法Method、路径Path和请求Body。 <code v-pre>CreateUser</code> 函数中，会调用 <code v-pre>c.client.Send(req)</code> 执行具体的HTTP请求。</p>
<p><code v-pre>c.client</code> 是 <code v-pre>*Request</code> 类型的变量， <code v-pre>*Request</code> 类型的变量具有一些方法，可以根据传入的请求参数 <code v-pre>req</code> 和 <code v-pre>config</code> 配置构造出请求路径、认证头和请求Body，并调用 <code v-pre>net/http</code> 包完成最终的HTTP请求，最后将返回结果Unmarshal到传入的 <code v-pre>resp</code> 结构体中。</p>
<p>根据我的调研，目前有两种SDK设计方式可供参考，一种是各大公有云厂商采用的SDK设计方式，一种是Kubernetes client-go的设计方式。IAM项目分别实现了这两种SDK设计方式，但我还是更倾向于对外提供client-go方式的SDK，我会在下一讲详细介绍它。这两种设计方式的设计思路跟上面介绍的是一致的。</p>
<h2 id="公有云厂商采用的sdk设计方式" tabindex="-1"><a class="header-anchor" href="#公有云厂商采用的sdk设计方式" aria-hidden="true">#</a> 公有云厂商采用的SDK设计方式</h2>
<p>这里，我先来简单介绍下公有云厂商采用的SDK设计模式。SDK架构如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202303042351396.jpeg" alt="图片"></p>
<p>SDK框架分为两层，分别是API层和基础层。API层主要用来构建客户端实例，并调用客户端实例提供的方法来完成API请求，每一个方法对应一个API接口。API层最终会调用基础层提供的能力，来完成REST API请求。基础层通过依次执行构建请求参数（Builder）、签发并添加认证头（Signer）、执行HTTP请求（Request）三大步骤，来完成具体的REST API请求。</p>
<p>为了让你更好地理解公有云SDK的设计方式，接下来我会结合一些真实的代码，给你讲解API层和基础层的具体设计，SDK代码见<a href="https://github.com/marmotedu/medu-sdk-go" target="_blank" rel="noopener noreferrer">medu-sdk-go<ExternalLinkIcon/></a>。</p>
<h3 id="api层-创建客户端实例" tabindex="-1"><a class="header-anchor" href="#api层-创建客户端实例" aria-hidden="true">#</a> API层：创建客户端实例</h3>
<p>客户端在使用服务A的SDK时，首先需要根据Config配置创建一个服务A的客户端Client，Client实际上是一个struct，定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    sdk<span class="token punctuation">.</span>Client
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在创建客户端时，需要传入认证（例如密钥、用户名/密码）、后端服务地址等配置信息。例如，可以通过<a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/services/iam/authz/client.go#L24-L29" target="_blank" rel="noopener noreferrer">NewClientWithSecret<ExternalLinkIcon/></a>方法来构建一个带密钥对的客户端：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewClientWithSecret</span><span class="token punctuation">(</span>secretID<span class="token punctuation">,</span> secretKey <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>client <span class="token operator">*</span>Client<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    client <span class="token operator">=</span> <span class="token operator">&amp;</span>Client<span class="token punctuation">{</span><span class="token punctuation">}</span>
    config <span class="token operator">:=</span> sdk<span class="token punctuation">.</span><span class="token function">NewConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithEndpoint</span><span class="token punctuation">(</span>defaultEndpoint<span class="token punctuation">)</span>
    client<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span>serviceName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithSecret</span><span class="token punctuation">(</span>secretID<span class="token punctuation">,</span> secretKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要注意，上面创建客户端时，传入的密钥对最终会在基础层中被使用，用来签发JWT Token。</p>
<p>Client有多个方法（Sender），例如 Authz等，每个方法代表一个API接口。Sender方法会接收AuthzRequest等结构体类型的指针作为输入参数。我们可以调用 <code v-pre>client.Authz(req)</code> 来执行REST API调用。可以在 <code v-pre>client.Authz</code> 方法中添加一些业务逻辑处理。<code v-pre>client.Authz</code> 代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> AuthzRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>request<span class="token punctuation">.</span>BaseRequest
    Resource <span class="token operator">*</span><span class="token builtin">string</span> <span class="token string">`json:"resource"`</span>
    Action <span class="token operator">*</span><span class="token builtin">string</span> <span class="token string">`json:"action"`</span>
    Subject <span class="token operator">*</span><span class="token builtin">string</span> <span class="token string">`json:"subject"`</span>
    Context <span class="token operator">*</span>ladon<span class="token punctuation">.</span>Context
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">Authz</span><span class="token punctuation">(</span>req <span class="token operator">*</span>AuthzRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span>resp <span class="token operator">*</span>AuthzResponse<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> req <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        req <span class="token operator">=</span> <span class="token function">NewAuthzRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    resp <span class="token operator">=</span> <span class="token function">NewAuthzResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    err <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> resp<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求结构体中的字段都是指针类型的，使用指针的好处是可以判断入参是否有被指定，如果<code v-pre>req.Subject == nil</code> 就说明传参中没有Subject参数，如果<code v-pre>req.Subject != nil</code>就说明参数中有传Subject参数。根据某个参数是否被传入，执行不同的业务逻辑，这在Go API接口开发中非常常见。</p>
<p>另外，因为Client通过匿名的方式继承了基础层中的<a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/sdk/client.go#L18-L24" target="_blank" rel="noopener noreferrer">Client<ExternalLinkIcon/></a>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  sdk<span class="token punctuation">.</span>Client
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，API层创建的Client最终可以直接调用基础层中的Client提供的<code v-pre>Send(req, resp)</code> 方法，来执行RESTful API调用，并将结果保存在 <code v-pre>resp</code> 中。</p>
<p>为了方便和API层的Client进行区分，我下面统一将基础层中的Client称为<strong>sdk.Client</strong>。</p>
<p>最后，一个完整的客户端调用示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>

  <span class="token string">"github.com/ory/ladon"</span>

  <span class="token string">"github.com/marmotedu/medu-sdk-go/sdk"</span>
  iam <span class="token string">"github.com/marmotedu/medu-sdk-go/services/iam/authz"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  client<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> iam<span class="token punctuation">.</span><span class="token function">NewClientWithSecret</span><span class="token punctuation">(</span><span class="token string">"XhbY3aCrfjdYcP1OFJRu9xcno8JzSbUIvGE2"</span><span class="token punctuation">,</span> <span class="token string">"bfJRvlFwsoW9L30DlG87BBW0arJamSeK"</span><span class="token punctuation">)</span>

  req <span class="token operator">:=</span> iam<span class="token punctuation">.</span><span class="token function">NewAuthzRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  req<span class="token punctuation">.</span>Resource <span class="token operator">=</span> sdk<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"resources:articles:ladon-introduction"</span><span class="token punctuation">)</span>
  req<span class="token punctuation">.</span>Action <span class="token operator">=</span> sdk<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"delete"</span><span class="token punctuation">)</span>
  req<span class="token punctuation">.</span>Subject <span class="token operator">=</span> sdk<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"users:peter"</span><span class="token punctuation">)</span>
  ctx <span class="token operator">:=</span> ladon<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">"remoteIPAddress"</span><span class="token punctuation">:</span> <span class="token string">"192.168.0.5"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  req<span class="token punctuation">.</span>Context <span class="token operator">=</span> <span class="token operator">&amp;</span>ctx

  resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Authz</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err1"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"get response body: `%s`\n"</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"allowed: %v\n"</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>Allowed<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础层-构建并执行http请求" tabindex="-1"><a class="header-anchor" href="#基础层-构建并执行http请求" aria-hidden="true">#</a> 基础层：构建并执行HTTP请求</h3>
<p>上面我们创建了客户端实例，并调用了它的 <a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/sdk/client.go#L61-L93" target="_blank" rel="noopener noreferrer">Send<ExternalLinkIcon/></a> 方法来完成最终的HTTP请求。这里，我们来看下Send方法具体是如何构建HTTP请求的。</p>
<p>sdk.Client通过Send方法，完成最终的API调用，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">Send</span><span class="token punctuation">(</span>req request<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> resp response<span class="token punctuation">.</span>Response<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  method <span class="token operator">:=</span> req<span class="token punctuation">.</span><span class="token function">GetMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  builder <span class="token operator">:=</span> <span class="token function">GetParameterBuilder</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Logger<span class="token punctuation">)</span>
  jsonReq<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
  encodedUrl<span class="token punctuation">,</span> err <span class="token operator">:=</span> builder<span class="token punctuation">.</span><span class="token function">BuildURL</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">GetURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> jsonReq<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>

  endPoint <span class="token operator">:=</span> c<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>Endpoint
  <span class="token keyword">if</span> endPoint <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">{</span>
    endPoint <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%s/%s"</span><span class="token punctuation">,</span> defaultEndpoint<span class="token punctuation">,</span> c<span class="token punctuation">.</span>ServiceName<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  reqUrl <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%s://%s/%s%s"</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>Scheme<span class="token punctuation">,</span> endPoint<span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">GetVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> encodedUrl<span class="token punctuation">)</span>

  body<span class="token punctuation">,</span> err <span class="token operator">:=</span> builder<span class="token punctuation">.</span><span class="token function">BuildBody</span><span class="token punctuation">(</span>jsonReq<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>

  sign <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    signer <span class="token operator">:=</span> <span class="token function">NewSigner</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>signMethod<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Credential<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Logger<span class="token punctuation">)</span>
    <span class="token boolean">_</span> <span class="token operator">=</span> signer<span class="token punctuation">.</span><span class="token function">Sign</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>ServiceName<span class="token punctuation">,</span> r<span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>

  rawResponse<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">doSend</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> reqUrl<span class="token punctuation">,</span> body<span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">GetHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> sign<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">ParseFromHttpResponse</span><span class="token punctuation">(</span>rawResponse<span class="token punctuation">,</span> resp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码大体上可以分为四个步骤。</p>
<p><strong>第一步，Builder：构建请求参数。</strong></p>
<p>根据传入的AuthzRequest和客户端配置Config，构造HTTP请求参数，包括请求路径和请求Body。</p>
<p>接下来，我们来看下如何构造HTTP请求参数。</p>
<ol>
<li>HTTP请求路径构建</li>
</ol>
<p>在创建客户端时，我们通过<a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/services/iam/authz/authz.go#L32-L42" target="_blank" rel="noopener noreferrer">NewAuthzRequest<ExternalLinkIcon/></a>函数创建了 <code v-pre>/v1/authz</code> REST API接口请求结构体AuthzRequest，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">NewAuthzRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>req <span class="token operator">*</span>AuthzRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    req <span class="token operator">=</span> <span class="token operator">&amp;</span>AuthzRequest<span class="token punctuation">{</span>    
        BaseRequest<span class="token punctuation">:</span> <span class="token operator">&amp;</span>request<span class="token punctuation">.</span>BaseRequest<span class="token punctuation">{</span>    
            URL<span class="token punctuation">:</span>     <span class="token string">"/authz"</span><span class="token punctuation">,</span>    
            Method<span class="token punctuation">:</span>  <span class="token string">"POST"</span><span class="token punctuation">,</span>    
            Header<span class="token punctuation">:</span>  <span class="token boolean">nil</span><span class="token punctuation">,</span>    
            Version<span class="token punctuation">:</span> <span class="token string">"v1"</span><span class="token punctuation">,</span>    
        <span class="token punctuation">}</span><span class="token punctuation">,</span>    
    <span class="token punctuation">}</span>    
    <span class="token keyword">return</span>                                
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们创建的 <code v-pre>req</code> 中包含了API版本（Version）、API路径（URL）和请求方法（Method）。这样，我们就可以在Send方法中，构建出请求路径：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
endPoint <span class="token operator">:=</span> c<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>Endpoint                                                 
<span class="token keyword">if</span> endPoint <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">{</span>                                                          
    endPoint <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%s/%s"</span><span class="token punctuation">,</span> defaultEndpoint<span class="token punctuation">,</span> c<span class="token punctuation">.</span>ServiceName<span class="token punctuation">)</span>           
<span class="token punctuation">}</span>                                                                  
reqUrl <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%s://%s/%s%s"</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>Scheme<span class="token punctuation">,</span> endPoint<span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">GetVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> encodedUrl<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，c.Config.Scheme=http/https、endPoint=iam.api.marmotedu.com:8080、req.GetVersion()=v1和encodedUrl，我们可以认为它们等于/authz。所以，最终构建出的请求路径为<code v-pre>http://iam.api.marmotedu.com:8080/v1/authz</code> 。</p>
<p><strong>HTTP请求Body构建</strong></p>
<p>在<a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/sdk/parameter_builder.go#L68-L86" target="_blank" rel="noopener noreferrer">BuildBody<ExternalLinkIcon/></a>方法中构建请求Body。BuildBody会将 <code v-pre>req</code> Marshal成JSON格式的string。HTTP请求会以该字符串作为Body参数。</p>
<p><strong>第二步，Signer：签发并添加认证头。</strong></p>
<p>访问IAM的API接口需要进行认证，所以在发送HTTP请求之前，还需要给HTTP请求添加认证Header。</p>
<p>medu-sdk-go 代码提供了JWT和HMAC两种认证方式，最终采用了JWT认证方式。JWT认证签发方法为<a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/sdk/signer.go#L108-L113" target="_blank" rel="noopener noreferrer">Sign<ExternalLinkIcon/></a>，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>v1 SignatureV1<span class="token punctuation">)</span> <span class="token function">Sign</span><span class="token punctuation">(</span>serviceName <span class="token builtin">string</span><span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> body io<span class="token punctuation">.</span>ReadSeeker<span class="token punctuation">)</span> http<span class="token punctuation">.</span>Header <span class="token punctuation">{</span>
  tokenString <span class="token operator">:=</span> auth<span class="token punctuation">.</span><span class="token function">Sign</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span>Credentials<span class="token punctuation">.</span>SecretID<span class="token punctuation">,</span> v1<span class="token punctuation">.</span>Credentials<span class="token punctuation">.</span>SecretKey<span class="token punctuation">,</span> <span class="token string">"medu-sdk-go"</span><span class="token punctuation">,</span> serviceName<span class="token operator">+</span><span class="token string">".marmotedu.com"</span><span class="token punctuation">)</span>
  r<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"Bearer %s"</span><span class="token punctuation">,</span> tokenString<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> r<span class="token punctuation">.</span>Header

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>auth.Sign</code> 方法根据SecretID和SecretKey签发JWT Token。</p>
<p>接下来，我们就可以调用<a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/sdk/client.go#L95-L112" target="_blank" rel="noopener noreferrer">doSend<ExternalLinkIcon/></a>方法来执行HTTP请求了。调用代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>rawResponse<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">doSend</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> reqUrl<span class="token punctuation">,</span> body<span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">GetHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> sign<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>                                                               
    <span class="token keyword">return</span> err     
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们传入了HTTP请求方法 <code v-pre>method</code> 、HTTP请求URL <code v-pre>reqUrl</code> 、HTTP请求Body <code v-pre>body</code>，以及用来签发JWT Token的 <code v-pre>sign</code> 方法。我们在调用 <code v-pre>NewAuthzRequest</code> 创建 <code v-pre>req</code> 时，指定了HTTP Method，所以这里的 <code v-pre>method := req.GetMethod()</code> 、reqUrl和请求Body都是通过Builder来构建的。</p>
<p><strong>第三步，Request：执行 HTTP请求。</strong></p>
<p>调用<a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/sdk/client.go#L95-L112" target="_blank" rel="noopener noreferrer">doSend<ExternalLinkIcon/></a>方法执行HTTP请求，doSend通过调用 <code v-pre>net/http</code> 包提供的 <code v-pre>http.NewRequest</code> 方法来发送HTTP请求，执行完HTTP请求后，会返回 <code v-pre>*http.Response</code> 类型的Response。代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">doSend</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> data <span class="token builtin">string</span><span class="token punctuation">,</span> header <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> sign SignFunc<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>http<span class="token punctuation">.</span>Response<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    client <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span>Timeout<span class="token punctuation">:</span> c<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>Timeout<span class="token punctuation">}</span>

    req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span>Logger<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"%s"</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>

    c<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> header<span class="token punctuation">)</span>

    err <span class="token operator">=</span> <span class="token function">sign</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> client<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第四步，处理 HTTP请求返回结果。</strong></p>
<p>调用doSend方法返回 <code v-pre>*http.Response</code> 类型的Response后，Send方法会调用<a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/sdk/response/response.go#L37-L52" target="_blank" rel="noopener noreferrer">ParseFromHttpResponse<ExternalLinkIcon/></a>函数来处理HTTP Response，ParseFromHttpResponse函数代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseFromHttpResponse</span><span class="token punctuation">(</span>rawResponse <span class="token operator">*</span>http<span class="token punctuation">.</span>Response<span class="token punctuation">,</span> response Response<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">defer</span> rawResponse<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  body<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>rawResponse<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> rawResponse<span class="token punctuation">.</span>StatusCode <span class="token operator">!=</span> <span class="token number">200</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"request fail with status: %s, with body: %s"</span><span class="token punctuation">,</span> rawResponse<span class="token punctuation">.</span>Status<span class="token punctuation">,</span> body<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> err <span class="token operator">:=</span> response<span class="token punctuation">.</span><span class="token function">ParseErrorFromHTTPResponse</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token operator">&amp;</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，在ParseFromHttpResponse函数中，会先判断HTTP Response中的StatusCode是否为200，如果不是200，则会报错。如果是200，会调用传入的resp变量提供的<a href="https://github.com/marmotedu/medu-sdk-go/blob/v1.0.0/sdk/response/response.go#L26-L35" target="_blank" rel="noopener noreferrer">ParseErrorFromHTTPResponse<ExternalLinkIcon/></a>方法，来将HTTP Response的Body Unmarshal到resp变量中。
通过以上四步，SDK调用方调用了API，并获得了API的返回结果 <code v-pre>resp</code> 。</p>
<p>下面这些公有云厂商的SDK采用了此设计模式：</p>
<ul>
<li>腾讯云SDK：<a href="https://github.com/TencentCloud/tencentcloud-sdk-go" target="_blank" rel="noopener noreferrer">tencentcloud-sdk-go<ExternalLinkIcon/></a>。</li>
<li>AWS SDK：<a href="https://github.com/aws/aws-sdk-go" target="_blank" rel="noopener noreferrer">aws-sdk-go<ExternalLinkIcon/></a>。</li>
<li>阿里云SDK：<a href="https://github.com/aliyun/alibaba-cloud-sdk-go" target="_blank" rel="noopener noreferrer">alibaba-cloud-sdk-go<ExternalLinkIcon/></a>。</li>
<li>京东云SDK：<a href="https://github.com/jdcloud-api/jdcloud-sdk-go" target="_blank" rel="noopener noreferrer">jdcloud-sdk-go<ExternalLinkIcon/></a>。</li>
<li>Ucloud SDK：<a href="https://github.com/ucloud/ucloud-sdk-go" target="_blank" rel="noopener noreferrer">ucloud-sdk-go<ExternalLinkIcon/></a>。</li>
</ul>
<p>IAM公有云方式的SDK实现为 <a href="https://github.com/marmotedu/medu-sdk-go" target="_blank" rel="noopener noreferrer">medu-sdk-go<ExternalLinkIcon/></a>。</p>
<p>此外，IAM还设计并实现了Kubernetes client-go方式的Go SDK：<a href="https://github.com/marmotedu/marmotedu-sdk-go" target="_blank" rel="noopener noreferrer">marmotedu-sdk-go<ExternalLinkIcon/></a>，marmotedu-sdk-go也是IAM Go SDK所采用的SDK。下一讲中，我会具体介绍marmotedu-sdk-go的设计和实现。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲，我主要介绍了如何设计一个优秀的Go SDK。通过提供SDK，可以提高API调用效率，减少API调用难度，所以大型应用通常都会提供SDK。不同团队有不同的SDK设计方法，但目前比较好的实现是公有云厂商采用的SDK设计方式。</p>
<p>公有云厂商的SDK设计方式中，SDK按调用顺序从上到下可以分为3个模块，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/b9/a9/b9bd3020ae56f6bb49bc3a38bcaf64a9.jpg?wh=1920x878" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/b9/a9/b9bd3020ae56f6bb49bc3a38bcaf64a9.jpg?wh=1920x878" alt="图片"><ExternalLinkIcon/></a></p>
<p>Client构造SDK客户端，在构造客户端时，会创建请求参数 <code v-pre>req</code> ， <code v-pre>req</code> 中会指定API版本、HTTP请求方法、API请求路径等信息。</p>
<p>Client会请求Builder和Signer来构建HTTP请求的各项参数：HTTP请求方法、HTTP请求路径、HTTP认证头、HTTP请求Body。Builder和Signer是根据 <code v-pre>req</code> 配置来构造这些HTTP请求参数的。</p>
<p>构造完成之后，会请求Request模块，Request模块通过调用 <code v-pre>net/http</code> 包，来执行HTTP请求，并返回请求结果。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>思考下，如何实现可以支持多个API版本的SDK包，代码如何实现？</li>
<li>这一讲介绍了一种SDK实现方式，在你的Go开发生涯中，还有没有一些更好的SDK实现方法？欢迎在留言区分享。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '24.md' style='float:left'>⬆️上一节🔗  </a><a href = '26.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


