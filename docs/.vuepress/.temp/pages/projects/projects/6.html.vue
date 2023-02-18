<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第6节-api-风格设计" tabindex="-1"><a class="header-anchor" href="#第6节-api-风格设计" aria-hidden="true">#</a> 第6节 API 风格设计</h1>
<br>
<div><a href = '5.md' style='float:left'>⬆️上一节🔗  </a><a href = '7.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#restful-api">RESTful API</router-link><ul><li><router-link to="#是什么">是什么</router-link></li><li><router-link to="#restful-api-设计原则">RESTful API 设计原则</router-link></li><li><router-link to="#rest-示例">REST 示例</router-link></li><li><router-link to="#总结">总结</router-link></li></ul></li><li><router-link to="#如何设计应用的rpc-api-风格">如何设计应用的RPC API 风格</router-link><ul><li><router-link to="#rpc-介绍">RPC 介绍</router-link></li><li><router-link to="#grpc">gRPC</router-link></li><li><router-link to="#grpc-特点">gRPC 特点</router-link></li><li><router-link to="#protocol-buffers">Protocol Buffers</router-link></li><li><router-link to="#grpc-示例">gRPC 示例</router-link></li></ul></li><li><router-link to="#restful-vs-grpc">RESTful VS gRPC</router-link></li><li><router-link to="#总结-1">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="restful-api" tabindex="-1"><a class="header-anchor" href="#restful-api" aria-hidden="true">#</a> RESTful API</h2>
<p>绝大部分的 Go 后端服务需要编写 API 接口，对外提供服务。所以在开发之前，我们需要确定一种 API 风格。API 风格也可以理解为 API 类型，目前业界常用的 API 风格有三种：REST、RPC 和 GraphQL。我们需要根据项目需求，并结合 API 风格的特点，确定使用哪种 API 风格，这对以后的编码实现、通信方式和通信效率都有很大的影响。</p>
<p><strong>在 Go 项目开发中，用得最多的是 REST 和 RPC，我们在 IAM 实战项目中也使用了 REST 和 RPC 来构建示例项目。</strong></p>
<ul>
<li><a href="https://graphql.cn/" target="_blank" rel="noopener noreferrer">GraphQL 风格<ExternalLinkIcon/></a></li>
</ul>
<h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3>
<p>在回答“RESTful API 是什么”之前，我们先来看下 REST 是什么意思：REST 代表的是表现层状态转移（REpresentational State Transfer），由 Roy Fielding 在他的论文<a href="https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm" target="_blank" rel="noopener noreferrer">《Architectural Styles and the Design of Network-based Software Architectures》<ExternalLinkIcon/></a>里提出。REST 本身并没有创造新的技术、组件或服务，它只是一种软件架构风格，是一组架构约束条件和原则，而不是技术框架。</p>
<p><strong>REST 有一系列规范，满足这些规范的 API 均可称为 RESTful API</strong>。REST 规范把所有内容都视为资源，也就是说网络上一切皆资源。REST 架构对资源的操作包括获取、创建、修改和删除，这些操作正好对应 HTTP 协议提供的 GET、POST、PUT 和 DELETE 方法。HTTP 动词与 REST 风格 CRUD 的对应关系见下表：</p>
<p><img src="http://sm.nsddd.top/sm202302181112478.png" alt="image-20230218111227370"></p>
<p>REST 风格虽然适用于很多传输协议，但在实际开发中，由于 REST 天生和 HTTP 协议相辅相成，**因此 HTTP 协议已经成了实现 RESTful API 事实上的标准。**所以，REST 具有以下核心特点：</p>
<ul>
<li>以资源 (resource) 为中心，所有的东西都抽象成资源，所有的行为都应该是在资源上的 CRUD 操作。
<ul>
<li>资源对应着面向对象范式里的对象，面向对象范式以对象为中心。</li>
<li>资源使用 URI 标识，每个资源实例都有一个唯一的 URI 标识。例如，如果我们有一个用户，用户名是 admin，那么它的 URI 标识就可以是 /users/admin。</li>
</ul>
</li>
<li>资源是有状态的，使用 JSON/XML 等在 HTTP Body 里表征资源的状态。</li>
<li>客户端通过四个 HTTP 动词，对服务器端资源进行操作，实现“表现层状态转化”。</li>
<li>无状态，这里的无状态是指每个 RESTful API 请求都包含了所有足够完成本次操作的信息，服务器端无须保持 <code v-pre>session</code>。无状态对于服务端的弹性扩容是很重要的。</li>
</ul>
<p><strong>REST 和 RESTful API 的区别：</strong> REST 是一种规范，而 RESTful API 则是满足这种规范的 API 接口。</p>
<h3 id="restful-api-设计原则" tabindex="-1"><a class="header-anchor" href="#restful-api-设计原则" aria-hidden="true">#</a> RESTful API 设计原则</h3>
<p><strong>RESTful API 设计讲述 七种 原则！</strong></p>
<h4 id="uri-设计" tabindex="-1"><a class="header-anchor" href="#uri-设计" aria-hidden="true">#</a> URI 设计</h4>
<p>资源都是使用 URI 标识的，我们应该按照一定的规范来设计 URI，通过规范化可以使我们的 API 接口更加易读、易用。以下是 URI 设计时，应该遵循的一些规范：</p>
<ul>
<li>
<p>资源名使用名词而不是动词，<strong>并且用名词复数表示</strong>。资源分为 Collection 和 Member 两种。</p>
<ul>
<li><strong>Collection</strong>：一堆资源的集合。例如我们系统里有很多用户（User）, 这些用户的集合就是 Collection。Collection 的 URI 标识应该是 <code v-pre>域名/资源名复数</code>, 例如https://iam.api.marmotedu.com/users。</li>
<li><strong>Member</strong>：单个特定资源。例如系统中特定名字的用户，就是 Collection 里的一个 Member。Member 的 URI 标识应该是 <code v-pre>域名/资源名复数/资源名称</code>, 例如https://iam.api.marmotedu/users/admin。</li>
</ul>
</li>
<li>
<p>URI 结尾不应包含 <code v-pre>/</code></p>
</li>
<li>
<p>URI 中不能出现下划线 <code v-pre>_</code>，必须用中杠线 <code v-pre>-</code>代替（有些人推荐用 <code v-pre>_</code>，有些人推荐用 <code v-pre>-</code>，统一使用一种格式即可，我比较推荐用 <code v-pre>-</code>）。</p>
</li>
<li>
<p>URI 路径用小写，不要用大写。</p>
</li>
<li>
<p>避免层级过深的 URI。超过 2 层的资源嵌套会很乱，建议将其他资源转化为<code v-pre>?参数</code>，比如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/schools/tsinghua/classes/rooma/students/zhang <span class="token comment"># 不推荐</span>
/students?school<span class="token operator">=</span>qinghua<span class="token operator">&amp;</span><span class="token assign-left variable">class</span><span class="token operator">=</span>rooma <span class="token comment"># 推荐</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有个地方需要注意：在实际的 API 开发中，可能你会发现有些操作不能很好地映射为一个 REST 资源，这时候，你可以参考下面的做法。</p>
</li>
<li>
<p>将一个操作变成资源的一个属性，比如想在系统中暂时禁用某个用户，可以这么设计 URI：<code v-pre>/users/zhangsan?active=false</code>。</p>
</li>
<li>
<p>将操作当作是一个资源的嵌套资源，比如一个 GitHub 的加星操作：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PUT /gists/:id/star <span class="token comment"># github star action</span>
DELETE /gists/:id/star <span class="token comment"># github unstar action</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>如果以上都不能解决问题，有时可以打破这类规范。比如登录操作，登录不属于任何一个资源，URI 可以设计为：<code v-pre>/login</code>。</p>
</li>
</ul>
<p>在设计 URI 时，如果你遇到一些不确定的地方，推荐你参考 <a href="https://docs.github.com/en/rest" target="_blank" rel="noopener noreferrer">Github REST API<ExternalLinkIcon/></a></p>
<h4 id="rest-资源操作映射为-http-方法" tabindex="-1"><a class="header-anchor" href="#rest-资源操作映射为-http-方法" aria-hidden="true">#</a> REST 资源操作映射为 HTTP 方法</h4>
<p>基本上 RESTful API 都是使用 HTTP 协议原生的 GET、PUT、POST、DELETE 来标识对资源的 CRUD 操作的，形成的规范如下表所示：</p>
<p><img src="http://sm.nsddd.top/sm202302181131476.png" alt="image-20230218113149402"></p>
<p><strong>对资源的操作应该满足安全性和幂等性：</strong></p>
<ul>
<li>安全性：不会改变资源状态，可以理解为只读的。</li>
<li>幂等性：执行 1 次和执行 N 次，对资源状态改变的效果是等价的。</li>
</ul>
<blockquote>
<p>幂等性是指一个操作或者函数，无论被调用多少次，其结果都是一样的。举个例子来说，假设你有一个函数可以返回当前日期，那么不管你调用它多少次，它都会返回当前日期：2023-02-18</p>
</blockquote>
<p><strong>使用不同 HTTP 方法时，资源操作的安全性和幂等性对照见下表：</strong></p>
<p><img src="http://sm.nsddd.top/sm202302181133618.png" alt="image-20230218113318572"></p>
<blockquote>
<p>💡 POST方法不是幂等的，因为它会在服务器上创建新资源。这意味着，如果你多次发送相同的POST请求，服务器会创建多个资源，导致每次的结果都不一样。</p>
</blockquote>
<p><strong>在使用 HTTP 方法的时候，有以下两点需要你注意：</strong></p>
<ul>
<li>GET 返回的结果，要尽量可用于 PUT、POST 操作中。例如，用 GET 方法获得了一个 user 的信息，调用者修改 user 的邮件，然后将此结果再用 PUT 方法更新。这要求 GET、PUT、POST 操作的资源属性是一致的。</li>
<li>如果对资源进行 <strong>状态 / 属性</strong> 变更，要用 PUT 方法，POST 方法仅用来创建或者批量删除这两种场景。</li>
</ul>
<p>在设计 API 时，经常会有批量删除的需求，需要在请求中携带多个需要删除的资源名，但是 HTTP 的 DELETE 方法不能携带多个资源名，这时候可以通过下面三种方式来解决：</p>
<ul>
<li>发起多个 DELETE 请求。</li>
<li>操作路径中带多个 id，id 之间用分隔符分隔, 例如：<code v-pre>DELETE /users?ids=1,2,3</code></li>
<li>直接使用 POST 方式来批量删除，body 中传入需要删除的资源列表。</li>
</ul>
<p>推荐第二种方式，三种方式都有自己的场景，根据自己的需要选择。</p>
<p><strong>如果选择了某一种方式，那么整个项目都需要统一用这种方式。</strong></p>
<h4 id="统一的返回格式" tabindex="-1"><a class="header-anchor" href="#统一的返回格式" aria-hidden="true">#</a> 统一的返回格式</h4>
<p>一般来说，一个系统的 RESTful API 会向外界开放多个资源的接口，每个接口的返回格式要保持一致。另外，每个接口都会返回成功和失败两种消息，这两种消息的格式也要保持一致。不然，客户端代码要适配不同接口的返回格式，<strong>每个返回格式又要适配成功和失败两种消息格式，会大大增加用户的学习和使用成本。</strong></p>
<h4 id="api-版本管理" tabindex="-1"><a class="header-anchor" href="#api-版本管理" aria-hidden="true">#</a> API 版本管理</h4>
<p>随着时间的推移、需求的变更，一个 API 往往满足不了现有的需求，这时候就需要对 API 进行修改。<strong>对 API 进行修改时，不能影响其他调用系统的正常使用，这就要求 API 变更做到向下兼容，也就是新老版本共存。</strong></p>
<p>但在实际场景中，很可能会出现同一个 API 无法向下兼容的情况。这时候最好的解决办法是从一开始就引入 API 版本机制，当不能向下兼容时，就引入一个新的版本，老的版本则保留原样。这样既能保证服务的可用性和安全性，同时也能满足新需求。</p>
<p><strong>API 版本有不同的标识方法，在 RESTful API 开发中，通常将版本标识放在如下 3 个位置：</strong></p>
<ul>
<li>URL 中，比如<code v-pre>/v1/users</code>。</li>
<li>HTTP Header 中，比如<code v-pre>Accept: vnd.example-com.foo+json; version=1.0</code>。</li>
<li>Form 参数中，比如<code v-pre>/users?version=v1</code>。</li>
</ul>
<p>我们通常把版本标识是放在 URL 中的，比如 <code v-pre>/v1/users</code>，这样做的好处是很直观，GitHub、Kubernetes、Etcd 等很多优秀的 API 均采用这种方式。</p>
<blockquote>
<p>这里要注意，有些开发人员不建议将版本放在 URL 中，因为他们觉得不同的版本可以理解成同一种资源的不同表现形式，所以应该采用同一个 URI。对于这一点，没有严格的标准，根据项目实际需要选择一种方式即可。</p>
</blockquote>
<h4 id="api-命名" tabindex="-1"><a class="header-anchor" href="#api-命名" aria-hidden="true">#</a> API 命名</h4>
<p>API 通常的命名方式有三种，分别是驼峰命名法 (serverAddress)、蛇形命名法 (server_address) 和脊柱命名法 (server-address)。</p>
<p>驼峰命名法和蛇形命名法都需要切换输入法，会增加操作的复杂性，也容易出错，所以这里**建议用脊柱命名法。**GitHub API 用的就是脊柱命名法，例如 <code v-pre>selected-actions</code>。</p>
<blockquote>
<p><strong>驼峰命名法(serverAddress)</strong></p>
<ul>
<li>字母首字母大写</li>
<li>http://xxxx/getUser</li>
</ul>
<p><strong>蛇形命名法(server_address)</strong></p>
<ul>
<li>下划线“_”分隔</li>
<li>http://xxxx/get_user</li>
</ul>
<p><strong>脊柱命名法(server-address)</strong></p>
<ul>
<li>“-”分隔</li>
<li>http://xxxx/get-user</li>
</ul>
</blockquote>
<h4 id="统一分页-过滤-排序-搜索功能" tabindex="-1"><a class="header-anchor" href="#统一分页-过滤-排序-搜索功能" aria-hidden="true">#</a> 统一分页 / 过滤 / 排序 / 搜索功能</h4>
<p>REST 资源的查询接口，通常情况下都需要实现分页、过滤、排序、搜索功能，因为这些功能是每个 REST 资源都能用到的，所以可以实现为一个公共的 API 组件。下面来介绍下这些功能。</p>
<ul>
<li>分页：在列出一个 Collection 下所有的 Member 时，应该提供分页功能，例如<code v-pre>/users?offset=0&amp;limit=20</code>（limit，指定返回记录的数量；offset，指定返回记录的开始位置）。引入分页功能可以减少 API 响应的延时，同时可以避免返回太多条目，导致服务器 / 客户端响应特别慢，甚至导致服务器 / 客户端 crash 的情况。</li>
<li>过滤：如果用户不需要一个资源的全部状态属性，可以在 URI 参数里指定返回哪些属性，例如<code v-pre>/users?fields=email,username,address</code>。</li>
<li>排序：用户很多时候会根据创建时间或者其他因素，列出一个 Collection 中前 100 个 Member，这时可以在 URI 参数中指明排序参数，例如<code v-pre>/users?sort=age,desc</code>。</li>
<li>搜索：当一个资源的 Member 太多时，用户可能想通过搜索，快速找到所需要的 Member，或着想搜下有没有名字为 xxx 的某类资源，这时候就需要提供搜索功能。搜索建议按 <strong>模糊匹配</strong> 来搜索。</li>
</ul>
<h4 id="域名" tabindex="-1"><a class="header-anchor" href="#域名" aria-hidden="true">#</a> 域名</h4>
<p><strong>API 的域名设置主要有两种方式：</strong></p>
<ul>
<li>https://marmotedu.com/api，这种方式适合 API 将来不会有进一步扩展的情况，比如刚开始 marmotedu.com 域名下只有一套 API 系统，未来也只有这一套 API 系统。</li>
<li>https://iam.api.marmotedu.com，如果 marmotedu.com 域名下未来会新增另一个系统 API，这时候最好的方式是每个系统的 API 拥有专有的 API 域名，比如：<code v-pre>storage.api.marmotedu.com</code>，<code v-pre>network.api.marmotedu.com</code>。腾讯云的域名就是采用这种方式。</li>
</ul>
<p><strong>不同公司、不同团队、不同项目可能采取不同的 REST 设计原则，以上所列的基本上都是大家公认的原则。</strong></p>
<p>REST 设计原则中，还有一些原则因为内容比较多，并且可以独立成模块，所以放在后面来讲。比如 RESTful API 安全性、状态返回码和认证等。</p>
<h3 id="rest-示例" tabindex="-1"><a class="header-anchor" href="#rest-示例" aria-hidden="true">#</a> REST 示例</h3>
<p>上面介绍了一些概念和原则，这里我们通过一个“Hello World”程序，来教你用 Go 快速启动一个 RESTful API 服务，示例代码存放在 <a href="https://github.com/marmotedu/gopractise-demo/blob/main/apistyle/ping/main.go" target="_blank" rel="noopener noreferrer">gopractise-demo/apistyle/ping/main.go<ExternalLinkIcon/></a>。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"log"</span>
	<span class="token string">"net/http"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/ping"</span><span class="token punctuation">,</span> pong<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Starting http server ..."</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">":50052"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">pong</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"pong"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们通过 <code v-pre>http.HandleFunc</code>，向 HTTP 服务注册了一个 pong handler，在 pong handler 中，我们编写了真实的业务代码：返回 pong 字符串。</p>
<p>创建完 main.go 文件后，在当前目录下执行 <code v-pre>go run main.go</code> 启动 HTTP 服务，在一个新的 Linux 终端下发送 HTTP 请求，进行使用 curl 命令测试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> http://127.0.0.1:50052/ping
pong
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>在 REST 规范中，资源通过 URI 来标识，资源名使用名词而不是动词，并且用名词复数表示，资源都是分为 Collection 和 Member 两种。RESTful API 中，分别使用 POST、DELETE、PUT、GET 来表示 REST 资源的增删改查，HTTP 方法、Collection、Member 不同组合会产生不同的操作。</p>
<p>为了方便用户使用和理解，每个 RESTful API 的返回格式、错误和正确消息的返回格式，都应该保持一致。RESTful API 需要支持 API 版本，并且版本应该能够向前兼容，我们可以将版本号放在 URL 中、HTTP Header 中、Form 参数中，但这里我建议将版本号放在 URL 中，例如 <code v-pre>/v1/users</code>，这种形式比较直观。</p>
<p>另外，我们可以通过脊柱命名法来命名 API 接口名。对于一个 REST 资源，其查询接口还应该支持分页 / 过滤 / 排序 / 搜索功能，这些功能可以用同一套机制来实现。 API 的域名可以采用 https://marmotedu.com/api 和 https://iam.api.marmotedu.com 两种格式。</p>
<h2 id="如何设计应用的rpc-api-风格" tabindex="-1"><a class="header-anchor" href="#如何设计应用的rpc-api-风格" aria-hidden="true">#</a> 如何设计应用的RPC API 风格</h2>
<p>在 Go 项目开发中，如果业务对性能要求比较高，并且需要提供给多种编程语言调用，这时候就可以考虑使用 RPC API 接口。RPC 在 Go 项目开发中用得也非常多。</p>
<h3 id="rpc-介绍" tabindex="-1"><a class="header-anchor" href="#rpc-介绍" aria-hidden="true">#</a> RPC 介绍</h3>
<p><strong>Wikipedia：</strong></p>
<p><a href="https://zh.wikipedia.org/wiki/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97" target="_blank" rel="noopener noreferrer">分布式计算<ExternalLinkIcon/></a>中，<strong>远程过程调用</strong>（英语：<strong>R</strong>emote <strong>P</strong>rocedure <strong>C</strong>all，<strong>RPC</strong>）是一个计算机通信<a href="https://zh.wikipedia.org/wiki/%E7%B6%B2%E7%B5%A1%E5%82%B3%E8%BC%B8%E5%8D%94%E8%AD%B0" target="_blank" rel="noopener noreferrer">协议<ExternalLinkIcon/></a>。该协议允许运行于一台计算机的<a href="https://zh.wikipedia.org/wiki/%E7%A8%8B%E5%BA%8F" target="_blank" rel="noopener noreferrer">程序<ExternalLinkIcon/></a>调用另一个<a href="https://zh.wikipedia.org/wiki/%E5%9C%B0%E5%9D%80%E7%A9%BA%E9%97%B4" target="_blank" rel="noopener noreferrer">地址空间<ExternalLinkIcon/></a>（通常为一个开放网络的一台计算机）的<a href="https://zh.wikipedia.org/wiki/%E5%AD%90%E7%A8%8B%E5%BA%8F" target="_blank" rel="noopener noreferrer">子程序<ExternalLinkIcon/></a>，而程序员就像调用本地程序一样，无需额外地为这个交互作用编程（程序员无需关注细节）。RPC是一种 <strong>服务器-客户端</strong>（Client/Server）模式，经典实现是一个通过<strong>发送请求-接受回应</strong>进行信息交互的系统。</p>
<p>如果涉及的软件采用<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B" target="_blank" rel="noopener noreferrer">面向对象编程<ExternalLinkIcon/></a>，那么远程过程调用亦可称作<strong>远程调用</strong>或<strong>远程方法调用</strong>，例：<a href="https://zh.wikipedia.org/wiki/Java_RMI" target="_blank" rel="noopener noreferrer">Java RMI<ExternalLinkIcon/></a>。</p>
<p>RPC是一种<a href="https://zh.wikipedia.org/wiki/%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1" target="_blank" rel="noopener noreferrer">进程间通信<ExternalLinkIcon/></a>的模式，程序分布在不同的<a href="https://zh.wikipedia.org/wiki/%E5%9C%B0%E5%9D%80%E7%A9%BA%E9%97%B4" target="_blank" rel="noopener noreferrer">地址空间<ExternalLinkIcon/></a>里。如果在同一主机里，RPC可以通过不同的虚拟地址空间（即便使用相同的物理地址）进行通讯，而在不同的主机间，则通过不同的物理地址进行交互。许多技术（通常是不兼容）都是基于这种概念而实现的。</p>
<p>通俗来讲，**就是服务端实现了一个函数，客户端使用 RPC 框架提供的接口，像调用本地函数一样调用这个函数，并获取返回值。**RPC 屏蔽了底层的网络通信细节，使得开发人员无需关注网络编程的细节，可以将更多的时间和精力放在业务逻辑本身的实现上，从而提高开发效率。</p>
<p><img src="http://sm.nsddd.top/sm202302181221040.png" alt="image-20230218122118946"></p>
<p><strong>RPC 调用具体流程如下：</strong></p>
<ol>
<li>Client 通过本地调用，调用 Client Stub。</li>
<li>Client Stub 将参数打包（也叫 Marshalling）成一个消息，然后发送这个消息。</li>
<li>Client 所在的 OS 将消息发送给 Server。</li>
<li>Server 端接收到消息后，将消息传递给 Server Stub。</li>
<li>Server Stub 将消息解包（也叫 Unmarshalling）得到参数。</li>
<li>Server Stub 调用服务端的子程序（函数），处理完后，将最终结果按照相反的步骤返回给 Client。</li>
</ol>
<p>这里需要注意，<strong>Stub 负责调用参数和返回值的流化（serialization）、参数的打包和解包，以及网络层的通信。Client 端一般叫 Stub，Server 端一般叫 Skeleton。</strong></p>
<p>目前，业界有很多优秀的 RPC 协议，例如腾讯的 Tars、阿里的 Dubbo、微博的 Motan、Facebook 的 Thrift、RPCX，等等。但使用最多的还是 <a href="https://github.com/grpc/grpc-go" target="_blank" rel="noopener noreferrer">gRPC<ExternalLinkIcon/></a>。</p>
<h3 id="grpc" tabindex="-1"><a class="header-anchor" href="#grpc" aria-hidden="true">#</a> gRPC</h3>
<p>gRPC 是由 Google 开发的高性能、开源、跨多种编程语言的通用 RPC 框架，基于 HTTP 2.0 协议开发，默认采用 Protocol Buffers 数据序列化协议。gRPC 具有如下特性：</p>
<ul>
<li>支持多种语言，例如 Go、Java、C、C++、C#、Node.js、PHP、Python、Ruby 等。</li>
<li>基于 IDL（Interface Definition Language）文件定义服务，通过 proto3 工具生成指定语言的数据结构、服务端接口以及客户端 Stub。通过这种方式，也可以将服务端和客户端解耦，使客户端和服务端可以并行开发。</li>
<li>通信协议基于标准的 HTTP/2 设计，支持双向流、消息头压缩、单 TCP 的多路复用、服务端推送等特性。</li>
<li>支持 Protobuf 和 JSON 序列化数据格式。Protobuf 是一种语言无关的高性能序列化框架，可以减少网络传输流量，提高通信效率。</li>
</ul>
<p>这里要注意的是，gRPC 的全称不是 golang Remote Procedure Call，而是 google Remote Procedure Call 🤔。</p>
<p><strong>gRPC 的调用如下图所示：</strong></p>
<p><img src="http://sm.nsddd.top/sm202302181230536.png" alt="image-20230218123040470"></p>
<p><strong>在 gRPC 中，客户端可以直接调用部署在不同机器上的 gRPC 服务所提供的方法，调用远端的 gRPC 方法就像调用本地的方法一样，非常简单方便，通过 gRPC 调用，我们可以非常容易地构建出一个分布式应用。</strong></p>
<h3 id="grpc-特点" tabindex="-1"><a class="header-anchor" href="#grpc-特点" aria-hidden="true">#</a> gRPC 特点</h3>
<p>像很多其他的 RPC 服务一样，gRPC 也是通过 IDL 语言 (IDL是交互式数据语言的缩写，是一种用于数据分析的编程语言)，预先定义好接口（接口的名字、传入参数和返回参数等）。在服务端，gRPC 服务实现我们所定义的接口。在客户端，gRPC 存根提供了跟服务端相同的方法。</p>
<p>gRPC 支持多种语言，比如<strong>我们可以用 Go 语言实现 gRPC 服务，并通过 Java 语言客户端调用 gRPC 服务所提供的方法。</strong> 通过多语言支持，我们编写的 gRPC 服务能满足客户端多语言的需求。</p>
<p>gRPC API 接口通常使用的数据传输格式是 Protocol Buffers。接下来，我们就一起了解下 Protocol Buffers。</p>
<h3 id="protocol-buffers" tabindex="-1"><a class="header-anchor" href="#protocol-buffers" aria-hidden="true">#</a> Protocol Buffers</h3>
<ul>
<li><a href="https://github.com/protocolbuffers/protobuf" target="_blank" rel="noopener noreferrer">github project address<ExternalLinkIcon/></a></li>
</ul>
<p>Protocol Buffers（ProtocolBuffer/ protobuf）是 Google 开发的一套对数据结构进行序列化的方法，可用作（数据）通信协议、数据存储格式等，也是一种更加灵活、高效的数据格式，与 XML、JSON 类似。它的传输性能非常好，所以常被用在一些对数据传输性能要求比较高的系统中，作为数据传输格式。</p>
<blockquote>
<p>维基百科：<strong>Protocol Buffers</strong>（简称：ProtoBuf）是一种开源跨平台的<a href="https://zh.wikipedia.org/wiki/%E5%BA%8F%E5%88%97%E5%8C%96" target="_blank" rel="noopener noreferrer">序列化<ExternalLinkIcon/></a>数据结构的协议。其对于存储资料或在网络上进行通信的程序是很有用的。这个方法包含一个<a href="https://zh.wikipedia.org/wiki/%E6%8E%A5%E5%8F%A3%E6%8F%8F%E8%BF%B0%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">接口描述语言<ExternalLinkIcon/></a>，描述一些数据结构，并提供程序工具根据这些描述产生代码，这些代码将用来生成或解析代表这些数据结构的字节流。</p>
</blockquote>
<p>Protocol Buffers 的主要特性有下面这几个。</p>
<ul>
<li>更快的数据传输速度：protobuf 在传输时，会将数据序列化为二进制数据，和 XML、JSON 的文本传输格式相比，这可以节省大量的 IO 操作，从而提高数据传输速度。</li>
<li>跨平台多语言：protobuf 自带的编译工具 protoc 可以基于 protobuf 定义文件，编译出不同语言的客户端或者服务端，供程序直接调用，因此可以满足多语言需求的场景。</li>
<li>具有非常好的扩展性和兼容性，可以更新已有的数据结构，而不破坏和影响原有的程序。</li>
<li>基于 IDL 文件定义服务，通过 proto3 工具生成指定语言的数据结构、服务端和客户端接口。</li>
</ul>
<p><strong>在 gRPC 的框架中，Protocol Buffers 主要有三个作用。</strong></p>
<p><strong>第一，可以用来定义数据结构。</strong></p>
<div class="language-protobuf ext-protobuf line-numbers-mode"><pre v-pre class="language-protobuf"><code><span class="token comment">// SecretInfo contains secret details.</span>
<span class="token keyword">message</span> <span class="token class-name">SecretInfo</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> secret_id  <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> username   <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> secret_key <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token builtin">int64</span> expires <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> description <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> created_at <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> updated_at <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二，可以用来定义服务接口。下面的代码定义了一个 Cache 服务，服务包含了 ListSecrets 和 ListPolicies 两个 API 接口。</p>
<div class="language-protobuf ext-protobuf line-numbers-mode"><pre v-pre class="language-protobuf"><code><span class="token comment">// Cache implements a cache rpc service.</span>
<span class="token keyword">service</span> <span class="token class-name">Cache</span><span class="token punctuation">{</span>
  <span class="token keyword">rpc</span> <span class="token function">ListSecrets</span><span class="token punctuation">(</span><span class="token class-name">ListSecretsRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">ListSecretsResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">rpc</span> <span class="token function">ListPolicies</span><span class="token punctuation">(</span><span class="token class-name">ListPoliciesRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">ListPoliciesResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三，可以通过 protobuf 序列化和反序列化，提升传输效率。</p>
<h3 id="grpc-示例" tabindex="-1"><a class="header-anchor" href="#grpc-示例" aria-hidden="true">#</a> gRPC 示例</h3>
<p>运行本示例需要在 Linux 服务器上安装 Go 编译器、Protocol buffer 编译器（protoc，v3）和 protoc 的 Go 语言插件。</p>
<p><strong>这个示例分为下面几个步骤：</strong></p>
<ol>
<li>定义 gRPC 服务。</li>
<li>生成客户端和服务器代码。</li>
<li>实现 gRPC 服务。</li>
<li>实现 gRPC 客户端。</li>
</ol>
<p><strong>位置在：https://github.com/marmotedu/gopractise-demo/tree/main/apistyle/greeter</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
$ tree
├── client
│   └── main.go
├── helloworld
│   ├── helloworld.pb.go
│   └── helloworld.proto
└── server
    └── main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>client 目录存放 Client 端的代码，helloworld 目录用来存放服务的 IDL 定义，server 目录用来存放 Server 端的代码。</p>
<h4 id="定义-grpc-服务" tabindex="-1"><a class="header-anchor" href="#定义-grpc-服务" aria-hidden="true">#</a> 定义 gRPC 服务</h4>
<p>首先，需要定义我们的服务。进入 helloworld 目录，新建文件 helloworld.proto：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> helloworld
$ <span class="token function">touch</span> helloworld.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输入以下内容：</strong></p>
<div class="language-protobuf ext-protobuf line-numbers-mode"><pre v-pre class="language-protobuf"><code>$ cat <span class="token operator">></span><span class="token operator">></span> phelloworld<span class="token punctuation">.</span>proto <span class="token operator">&lt;</span><span class="token operator">&lt;</span>EOF

<span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">"proto3"</span><span class="token punctuation">;</span>

<span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">"github.com/marmotedu/gopractise-demo/apistyle/greeter/helloworld"</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> helloworld<span class="token punctuation">;</span>

<span class="token comment">// The greeting service definition.</span>
<span class="token keyword">service</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token comment">// Sends a greeting</span>
  <span class="token keyword">rpc</span> <span class="token function">SayHello</span> <span class="token punctuation">(</span><span class="token class-name">HelloRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">HelloReply</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// The request message containing the user's name.</span>
<span class="token keyword">message</span> <span class="token class-name">HelloRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// The response message containing the greetings</span>
<span class="token keyword">message</span> <span class="token class-name">HelloReply</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> message <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>helloworld.proto</code> 定义文件中，option 关键字用来对<code v-pre>.proto</code> 文件进行一些设置，其中 <code v-pre>go_package</code> 是必需的设置，而且 <code v-pre>go_package</code> 的值必须是包导入的路径。package 关键字指定生成的<code v-pre>.pb.go</code> 文件所在的包名。我们通过 service 关键字定义服务，然后再指定该服务拥有的 RPC 方法，并定义方法的请求和返回的结构体类型：</p>
<div class="language-protobuf ext-protobuf line-numbers-mode"><pre v-pre class="language-protobuf"><code><span class="token keyword">service</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token comment">// Sends a greeting</span>
  <span class="token keyword">rpc</span> <span class="token function">SayHello</span> <span class="token punctuation">(</span><span class="token class-name">HelloRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">HelloReply</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gRPC 支持定义 4 种类型的服务方法，分别是简单模式、服务端数据流模式、客户端数据流模式和双向数据流模式。</p>
<ul>
<li>简单模式（Simple RPC）：是最简单的 gRPC 模式。客户端发起一次请求，服务端响应一个数据。定义格式为 <code v-pre>rpc SayHello (HelloRequest) returns (HelloReply) {}</code>。</li>
<li>服务端数据流模式（Server-side streaming RPC）：客户端发送一个请求，服务器返回数据流响应，客户端从流中读取数据直到为空。定义格式为 <code v-pre>rpc SayHello (HelloRequest) returns (stream HelloReply) {}</code>。</li>
<li>客户端数据流模式（Client-side streaming RPC）：客户端将消息以流的方式发送给服务器，服务器全部处理完成之后返回一次响应。定义格式为 rpc SayHello (stream HelloRequest) returns (HelloReply) {}。</li>
<li>双向数据流模式（Bidirectional streaming RPC）：客户端和服务端都可以向对方发送数据流，这个时候双方的数据可以同时互相发送，也就是可以实现实时交互 RPC 框架原理。定义格式为 <code v-pre>rpc SayHello (stream HelloRequest) returns (stream HelloReply) {}</code>。</li>
</ul>
<p>本示例使用了简单模式。<code v-pre>.proto</code> 文件也包含了 Protocol Buffers 消息的定义，包括请求消息和返回消息。例如请求消息：</p>
<div class="language-protobuf ext-protobuf line-numbers-mode"><pre v-pre class="language-protobuf"><code><span class="token comment">// The request message containing the user's name.</span>
<span class="token keyword">message</span> <span class="token class-name">HelloRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成客户端和服务器代码" tabindex="-1"><a class="header-anchor" href="#生成客户端和服务器代码" aria-hidden="true">#</a> 生成客户端和服务器代码</h4>
<p>接下来，我们需要根据.proto 服务定义生成 gRPC 客户端和服务器接口。我们可以使用 protoc 编译工具，并指定使用其 Go 语言插件来生成：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ protoc -I. <span class="token parameter variable">--go_out</span><span class="token operator">=</span>plugins<span class="token operator">=</span>grpc:<span class="token variable">$GOPATH</span>/src helloworld.proto
$ <span class="token function">ls</span>
helloworld.pb.go  helloworld.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以看到，新增了一个 <code v-pre>helloworld.pb.go</code> 文件。</p>
<h4 id="实现-grpc-服务" tabindex="-1"><a class="header-anchor" href="#实现-grpc-服务" aria-hidden="true">#</a> 实现 gRPC 服务</h4>
<p>接着，我们就可以实现 gRPC 服务了。进入 server 目录，新建 main.go 文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/server
$ <span class="token function">vi</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>main.go 内容如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// Package main implements a server for Greeter service.</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"context"</span>
  <span class="token string">"log"</span>
  <span class="token string">"net"</span>

  pb <span class="token string">"github.com/marmotedu/gopractise-demo/apistyle/greeter/helloworld"</span>
  <span class="token string">"google.golang.org/grpc"</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  port <span class="token operator">=</span> <span class="token string">":50051"</span>
<span class="token punctuation">)</span>

<span class="token comment">// server is used to implement helloworld.GreeterServer.</span>
<span class="token keyword">type</span> server <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  pb<span class="token punctuation">.</span>UnimplementedGreeterServer
<span class="token punctuation">}</span>

<span class="token comment">// SayHello implements helloworld.GreeterServer</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>server<span class="token punctuation">)</span> <span class="token function">SayHello</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> in <span class="token operator">*</span>pb<span class="token punctuation">.</span>HelloRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>pb<span class="token punctuation">.</span>HelloReply<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Received: %v"</span><span class="token punctuation">,</span> in<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>HelloReply<span class="token punctuation">{</span>Message<span class="token punctuation">:</span> <span class="token string">"Hello "</span> <span class="token operator">+</span> in<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  lis<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"failed to listen: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  s <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  pb<span class="token punctuation">.</span><span class="token function">RegisterGreeterServer</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token operator">&amp;</span>server<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">Serve</span><span class="token punctuation">(</span>lis<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"failed to serve: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码实现了我们上一步根据服务定义生成的 Go 接口。</p>
<p>我们先定义了一个 Go 结构体 server，并为 server 结构体添加<code v-pre>SayHello(context.Context, pb.HelloRequest) (pb.HelloReply, error)</code>方法，也就是说 server 是 GreeterServer 接口（位于 <code v-pre>helloworld.pb.go</code> 文件中）的一个实现。</p>
<p>在我们实现了 gRPC 服务所定义的方法之后，就可以通过 <code v-pre>net.Listen(...)</code> 指定监听客户端请求的端口；接着，通过 <code v-pre>grpc.NewServer()</code> 创建一个 gRPC Server 实例，并通过 <code v-pre>pb.RegisterGreeterServer(s, &amp;server{})</code> 将该服务注册到 gRPC 框架中；最后，通过 s.Serve(lis) 启动 gRPC 服务。</p>
<p>创建完 main.go 文件后，在当前目录下执行 go run main.go ，启动 gRPC 服务。</p>
<h4 id="实现-grpc-客户端" tabindex="-1"><a class="header-anchor" href="#实现-grpc-客户端" aria-hidden="true">#</a> 实现 gRPC 客户端</h4>
<p>打开一个新的 Linux 终端，进入 client 目录，新建 main.go 文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/client
$ <span class="token function">vi</span> main.go
$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/client
$ <span class="token function">vi</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.go 内容如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// Package main implements a client for Greeter service.</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"context"</span>
  <span class="token string">"log"</span>
  <span class="token string">"os"</span>
  <span class="token string">"time"</span>

  pb <span class="token string">"github.com/marmotedu/gopractise-demo/apistyle/greeter/helloworld"</span>
  <span class="token string">"google.golang.org/grpc"</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  address     <span class="token operator">=</span> <span class="token string">"localhost:50051"</span>
  defaultName <span class="token operator">=</span> <span class="token string">"world"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Set up a connection to the server.</span>
  conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithInsecure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"did not connect: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  c <span class="token operator">:=</span> pb<span class="token punctuation">.</span><span class="token function">NewGreeterClient</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>

  <span class="token comment">// Contact the server and print out its response.</span>
  name <span class="token operator">:=</span> defaultName
  <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
  <span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  r<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">SayHello</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>HelloRequest<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> name<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"could not greet: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Greeting: %s"</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// Package main implements a client for Greeter service.</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"context"</span>
  <span class="token string">"log"</span>
  <span class="token string">"os"</span>
  <span class="token string">"time"</span>

  pb <span class="token string">"github.com/marmotedu/gopractise-demo/apistyle/greeter/helloworld"</span>
  <span class="token string">"google.golang.org/grpc"</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
  address     <span class="token operator">=</span> <span class="token string">"localhost:50051"</span>
  defaultName <span class="token operator">=</span> <span class="token string">"world"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Set up a connection to the server.</span>
  conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithInsecure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"did not connect: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  c <span class="token operator">:=</span> pb<span class="token punctuation">.</span><span class="token function">NewGreeterClient</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>

  <span class="token comment">// Contact the server and print out its response.</span>
  name <span class="token operator">:=</span> defaultName
  <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
  <span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  r<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">SayHello</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>HelloRequest<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> name<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"could not greet: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Greeting: %s"</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们通过如下代码创建了一个 gRPC 连接，用来跟服务端进行通信：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// Set up a connection to the server.</span>
conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithInsecure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"did not connect: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在创建连接时，我们可以指定不同的选项，用来控制创建连接的方式，例如 <code v-pre>grpc.WithInsecure()</code>、<code v-pre>grpc.WithBlock()</code> 等。gRPC 支持很多选项，更多的选项可以参考 grpc 仓库下dialoptions.go文件中以 With 开头的函数。</p>
<p>连接建立起来之后，我们需要创建一个客户端 stub，用来执行 RPC 请求<code v-pre>c := pb.NewGreeterClient(conn)</code>。创建完成之后，我们就可以像调用本地函数一样，调用远程的方法了。例如，下面一段代码通过 c.SayHello 这种本地式调用方式调用了远端的 SayHello 接口：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>r<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">SayHello</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>HelloRequest<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> name<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"could not greet: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Greeting: %s"</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>Message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的调用格式中，我们可以看到 RPC 调用具有下面两个特点。</p>
<ul>
<li>调用方便：RPC 屏蔽了底层的网络通信细节，使得调用 RPC 就像调用本地方法一样方便，调用方式跟大家所熟知的调用类的方法一致：ClassName.ClassFuc(params)。</li>
<li>不需要打包和解包：RPC 调用的入参和返回的结果都是 Go 的结构体，不需要对传入参数进行打包操作，也不需要对返回参数进行解包操作，简化了调用步骤。</li>
</ul>
<p>最后，创建完 main.go 文件后，在当前目录下，执行 go run main.go 发起 RPC 调用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run main.go
<span class="token number">2020</span>/10/17 07:55:00 Greeting: Hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，我们用四个步骤，创建并调用了一个 gRPC 服务。接下来我再给大家讲解一个在具体场景中的注意事项。</p>
<p>在做服务开发时，我们经常会遇到一种场景：定义一个接口，接口会通过判断是否传入某个参数，决定接口行为。例如，我们想提供一个 GetUser 接口，期望 GetUser 接口在传入 username 参数时，根据 username 查询用户的信息，如果没有传入 username，则默认根据 userId 查询用户信息。</p>
<p>这时候，我们需要判断客户端有没有传入 username 参数。我们不能根据 username 是否为空值来判断，因为我们不能区分客户端传的是空值，还是没有传 username 参数。这是由 Go 语言的语法特性决定的：如果客户端没有传入 username 参数，Go 会默认赋值为所在类型的零值，而字符串类型的零值就是空字符串。</p>
<p>那我们怎么判断客户端有没有传入 username 参数呢？最好的方法是通过指针来判断，如果是 nil 指针就说明没有传入，非 nil 指针就说明传入，具体实现步骤如下：</p>
<p>编写 protobuf 定义文件。</p>
<p>新建 user.proto 文件，内容如下:</p>
<div class="language-protobuf ext-protobuf line-numbers-mode"><pre v-pre class="language-protobuf"><code>
<span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">"proto3"</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> proto<span class="token punctuation">;</span>
<span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">"github.com/marmotedu/gopractise-demo/protobuf/user"</span><span class="token punctuation">;</span>

<span class="token comment">//go:generate protoc -I. --experimental_allow_proto3_optional --go_out=plugins=grpc:.</span>

<span class="token keyword">service</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">rpc</span> <span class="token function">GetUser</span><span class="token punctuation">(</span><span class="token class-name">GetUserRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">GetUserResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">GetUserRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> class <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">optional</span> <span class="token builtin">string</span> username <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">optional</span> <span class="token builtin">string</span> user_id <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">GetUserResponse</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> class <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> user_id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> username <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> address <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> sex <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> phone <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你需要注意，这里我们在需要设置为可选字段的前面添加了 optional 标识。</p>
<p>使用 protoc 工具编译 protobuf 文件。</p>
<p>在执行 protoc 命令时，需要传入--experimental_allow_proto3_optional参数以打开 optional 选项，编译命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ protoc <span class="token parameter variable">--experimental_allow_proto3_optional</span> <span class="token parameter variable">--go_out</span><span class="token operator">=</span>plugins<span class="token operator">=</span>grpc:. user.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述编译命令会生成 user.pb.go 文件，其中的 GetUserRequest 结构体定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> GetUserRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    state         protoimpl<span class="token punctuation">.</span>MessageState
    sizeCache     protoimpl<span class="token punctuation">.</span>SizeCache
    unknownFields protoimpl<span class="token punctuation">.</span>UnknownFields

    Class    <span class="token builtin">string</span>  <span class="token string">`protobuf:"bytes,1,opt,name=class,proto3" json:"class,omitempty"`</span>
    Username <span class="token operator">*</span><span class="token builtin">string</span> <span class="token string">`protobuf:"bytes,2,opt,name=username,proto3,oneof" json:"username,omitempty"`</span>
    UserId   <span class="token operator">*</span><span class="token builtin">string</span> <span class="token string">`protobuf:"bytes,3,opt,name=user_id,json=userId,proto3,oneof" json:"user_id,omitempty"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>optional + --experimental_allow_proto3_optional</code> 组合，我们可以将一个字段编译为指针类型。</p>
<p>编写 gRPC 接口实现。</p>
<p>新建一个 user.go 文件，内容如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">package</span> user

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"context"</span>

    pb <span class="token string">"github.com/marmotedu/api/proto/apiserver/v1"</span>

    <span class="token string">"github.com/marmotedu/iam/internal/apiserver/store"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">GetUser</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> r <span class="token operator">*</span>pb<span class="token punctuation">.</span>GetUserRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>pb<span class="token punctuation">.</span>GetUserResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>Username <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> store<span class="token punctuation">.</span><span class="token function">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Users</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetUserByName</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>Class<span class="token punctuation">,</span> r<span class="token punctuation">.</span>Username<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> store<span class="token punctuation">.</span><span class="token function">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Users</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetUserByID</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>Class<span class="token punctuation">,</span> r<span class="token punctuation">.</span>UserId<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总之，在 GetUser 方法中，我们可以通过判断 r.Username 是否为 nil，来判断客户端是否传入了 Username 参数。</p>
<h2 id="restful-vs-grpc" tabindex="-1"><a class="header-anchor" href="#restful-vs-grpc" aria-hidden="true">#</a> RESTful VS gRPC</h2>
<p><img src="http://sm.nsddd.top/sm202302190004730.png" alt="image-20230219000421566"></p>
<p>当然，更多的时候，RESTful API 和 gRPC API 是一种合作的关系，对内业务使用 gRPC API，对外业务使用 RESTful API，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302190004405.png" alt="image-20230219000447320"></p>
<h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h2>
<p>在 Go 项目开发中，我们可以选择使用 RESTful API 风格和 RPC API 风格，这两种服务都用得很多。其中，RESTful API 风格因为规范、易理解、易用，所以适合用在需要对外提供 API 接口的场景中。而 RPC API 因为性能比较高、调用方便，更适合用在内部业务中。</p>
<p>RESTful API 使用的是 HTTP 协议，而 RPC API 使用的是 RPC 协议。目前，有很多 RPC 协议可供你选择，而我推荐你使用 gRPC，因为它很轻量，同时性能很高、很稳定，是一个优秀的 RPC 框架。所以目前业界用的最多的还是 gRPC 协议，腾讯、阿里等大厂内部很多核心的线上服务用的就是 gRPC。</p>
<p>除了使用 gRPC 协议，在进行 Go 项目开发前，你也可以了解业界一些其他的优秀 Go RPC 框架，比如腾讯的 tars-go、阿里的 dubbo-go、Facebook 的 thrift、rpcx 等，你可以在项目开发之前一并调研，根据实际情况进行选择。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '5.md' style='float:left'>⬆️上一节🔗  </a><a href = '7.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


