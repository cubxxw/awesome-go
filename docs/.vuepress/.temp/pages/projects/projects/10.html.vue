<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第10节-如何生成-swagger-api-文档" tabindex="-1"><a class="header-anchor" href="#第10节-如何生成-swagger-api-文档" aria-hidden="true">#</a> 第10节 如何生成 Swagger API 文档</h1>
<br>
<div><a href = '9.md' style='float:left'>⬆️上一节🔗  </a><a href = '11.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link><ul><li><router-link to="#为什么需要-swagger">为什么需要 Swagger</router-link></li><li><router-link to="#swagger-和-openapi-的区别">Swagger 和 OpenAPI 的区别</router-link></li></ul></li><li><router-link to="#用-go-swagger-来生成-swagger-api-文档">用 go-swagger 来生成 Swagger API 文档</router-link><ul><li><router-link to="#go-swagger">go-swagger</router-link></li><li><router-link to="#项目状态">项目状态</router-link></li></ul></li><li><router-link to="#swagger-上手">Swagger 上手</router-link><ul><li><router-link to="#安装-swagger-工具">安装 Swagger 工具</router-link></li><li><router-link to="#swagger-命令行工具介绍">swagger 命令行工具介绍</router-link></li></ul></li><li><router-link to="#如何使用-swagger-命令生成-swagger-文档">如何使用 swagger 命令生成 Swagger 文档？</router-link><ul><li><router-link to="#swagger-注释">Swagger 注释</router-link></li><li><router-link to="#parameter-注释">Parameter 注释</router-link></li><li><router-link to="#response-注释">Response 注释</router-link></li><li><router-link to="#解析注释生成-swagger-文档">解析注释生成 Swagger 文档</router-link></li></ul></li><li><router-link to="#go-swagger-其他常用功能介绍">go-swagger 其他常用功能介绍</router-link><ul><li><router-link to="#对比-swagger-文档">对比 Swagger 文档</router-link></li><li><router-link to="#生成服务端代码">生成服务端代码</router-link></li><li><router-link to="#生成客户端代码">生成客户端代码</router-link></li><li><router-link to="#验证-swagger-文档是否合法">验证 Swagger 文档是否合法</router-link></li><li><router-link to="#合并-swagger-文档">合并 Swagger 文档</router-link></li></ul></li><li><router-link to="#iam-swagger-文档">IAM Swagger 文档</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p><strong>我们有了解到 RUSTful :</strong></p>
<p>RESTful是一种设计和开发Web服务的软件架构风格，其全称为Representational State Transfer。RESTful架构风格强调使用统一资源标识符（URI）来表示资源，通过HTTP协议中的GET、POST、PUT、DELETE等方法对这些资源进行操作，以及通过HTTP响应返回数据或状态码来表示请求结果。</p>
<p>在RESTful架构中，每个URI代表一个资源，例如一个Web页面、一个文本文件或者一个数据库表。通过HTTP方法对这些资源进行操作时，客户端发送的HTTP请求中包含了对资源的标识以及所要执行的操作，服务端根据请求进行相应的处理，并返回HTTP响应以告知客户端操作结果。</p>
<p>RESTful架构风格的设计理念包括：资源的标识性、统一接口、无状态、可缓存性和分层系统等。它已经成为当前Web服务开发中的主流架构风格之一，被广泛应用于Web服务的设计和开发中。</p>
<h3 id="为什么需要-swagger" tabindex="-1"><a class="header-anchor" href="#为什么需要-swagger" aria-hidden="true">#</a> 为什么需要 Swagger</h3>
<p>wagger是一个API文档自动生成工具，它可以帮助开发人员自动生成可交互的API文档和代码示例。使用Swagger可以大大提高API文档的可读性和易用性，同时也方便开发人员对API进行测试和调试。</p>
<p><strong>学习Swagger可以从以下几个方面入手：</strong></p>
<ol>
<li>
<p>了解Swagger的基本概念和使用方法。可以阅读官方文档，了解Swagger的基本用法和常用特性，学习如何使用Swagger来定义API接口、生成文档和代码示例等。</p>
</li>
<li>
<p>学习Swagger的高级特性。除了基本的文档生成功能之外，Swagger还提供了一系列高级特性，如API安全认证、请求/响应验证、API版本管理等。学习这些特性可以帮助开发人员更好地使用Swagger来设计和开发API。</p>
</li>
<li>
<p>实践Swagger的使用。在学习Swagger的过程中，可以结合自己的项目来实践Swagger的使用，从而更好地掌握Swagger的使用方法和技巧。</p>
</li>
</ol>
<p>为什么要学习Swagger呢？因为Swagger作为一种API文档自动生成工具，在现代的Web开发中使用广泛，可以大大提高API文档的可读性和易用性，减少API文档编写的工作量，同时也方便开发人员对API进行测试和调试。掌握Swagger的使用可以帮助开发人员更好地设计和开发API，提高开发效率和代码质量。</p>
<p><strong>🌥️ 特性：</strong></p>
<ul>
<li>Swagger 是一套围绕 OpenAPI 规范构建的开源工具，可以设计、构建、编写和使用 REST API。Swagger 包含很多工具，其中主要的 Swagger 工具包括：</li>
<li>Swagger 编辑器：基于浏览器的编辑器，可以在其中编写 OpenAPI 规范，并实时预览 API 文档。https://editor.swagger.io 就是一个 Swagger 编辑器，你可以尝试在其中编辑和预览 API 文档。</li>
<li>Swagger UI：将 OpenAPI 规范呈现为交互式 API 文档，并可以在浏览器中尝试 API 调用。</li>
<li>Swagger Codegen：根据 OpenAPI 规范，生成服务器存根和客户端代码库，目前已涵盖了 40 多种语言。</li>
</ul>
<h3 id="swagger-和-openapi-的区别" tabindex="-1"><a class="header-anchor" href="#swagger-和-openapi-的区别" aria-hidden="true">#</a> Swagger 和 OpenAPI 的区别</h3>
<p>我们在谈到 Swagger 时，也经常会谈到 OpenAPI。那么二者有什么区别呢？</p>
<p>OpenAPI是一种描述RESTful API的规范，而Swagger是一种实现OpenAPI规范的工具。</p>
<blockquote>
<p>具体来说，OpenAPI规范定义了一种标准的API描述语言和数据格式，用于描述RESTful API的结构、参数、响应等信息。OpenAPI规范允许开发人员使用YAML或JSON格式来定义API的结构，使得API的描述更加清晰、规范、易于理解和使用。OpenAPI规范的定义可以作为API设计的指南，并且可以用于生成API文档和客户端代码。</p>
<p>而Swagger是一个实现了OpenAPI规范的工具，它提供了一系列功能，如API描述、API测试、API文档自动生成等。使用Swagger，开发人员可以通过GUI界面或者API描述文件来定义API，Swagger可以根据这些定义生成API文档、客户端代码、API测试等。Swagger可以帮助开发人员更好地理解API的结构、参数、响应等信息，提高API的开发效率和质量。</p>
<p>总的来说，OpenAPI和Swagger都是与RESTful API相关的工具和规范，OpenAPI规范定义了一种标准的API描述语言和数据格式，而Swagger是一种实现了OpenAPI规范的工具，可以帮助开发人员更好地理解、描述和使用RESTful API。</p>
</blockquote>
<p><strong>OpenAPI 是一个 API 规范，它的前身叫 Swagger 规范，通过定义一种用来描述 API 格式或 API 定义的语言，来规范 RESTful 服务开发过程，目前最新的 OpenAPI 规范是OpenAPI 3.0（也就是 Swagger 2.0 规范）。</strong></p>
<p><strong>OpenAPI 规范规定了一个 API 必须包含的基本信息，这些信息包括：</strong></p>
<ul>
<li>对 API 的描述，介绍 API 可以实现的功能。</li>
<li>每个 API 上可用的路径（<code v-pre>/users</code>）和操作（GET /users，POST /users）。</li>
<li>每个 API 的输入 / 返回的参数。</li>
<li>验证方法。</li>
<li>联系信息、许可证、使用条款和其他信息。</li>
</ul>
<p>所以，你可以简单地这么理解：OpenAPI 是一个 API 规范，Swagger 则是实现规范的工具。</p>
<p>另外，要编写 Swagger 文档，首先要会使用 Swagger 文档编写语法，因为语法比较多，这里就不多介绍了，你可以参考 Swagger 官方提供的<a href="https://swagger.io/specification/" target="_blank" rel="noopener noreferrer">OpenAPI Specification<ExternalLinkIcon/></a>来学习。</p>
<h2 id="用-go-swagger-来生成-swagger-api-文档" tabindex="-1"><a class="header-anchor" href="#用-go-swagger-来生成-swagger-api-文档" aria-hidden="true">#</a> 用 go-swagger 来生成 Swagger API 文档</h2>
<p>在 Go 项目开发中，我们可以通过下面两种方法来生成 Swagger API 文档：</p>
<ul>
<li>第一，如果你熟悉 Swagger 语法的话，可以直接编写 JSON/YAML 格式的 Swagger 文档。建议选择 YAML 格式，因为它比 JSON 格式更简洁直观。</li>
<li>第二，通过工具生成 Swagger 文档，目前可以通过<a href="https://github.com/swaggo/swag" target="_blank" rel="noopener noreferrer">swag<ExternalLinkIcon/></a>和<a href="https://github.com/go-swagger/go-swagger" target="_blank" rel="noopener noreferrer">go-swagger<ExternalLinkIcon/></a>两个工具来生成。</li>
</ul>
<p>对比这两种方法，直接编写 Swagger 文档，不比编写 Markdown 格式的 API 文档工作量小，我觉得不符合程序员“偷懒”的习惯。所以，本专栏我们就使用 go-swagger 工具，基于代码注释来自动生成 Swagger 文档。为什么选 go-swagger 呢？有这么几个原因：</p>
<ul>
<li><strong>go-swagger 比 swag 功能更强大：</strong> go-swagger 提供了更灵活、更多的功能来描述我们的 API。</li>
<li><strong>使我们的代码更易读</strong>：如果使用 swag，我们每一个 API 都需要有一个冗长的注释，有时候代码注释比代码还要长，但是通过 go-swagger 我们可以将代码和注释分开编写，一方面可以使我们的代码保持简洁，清晰易读，另一方面我们可以在另外一个包中，统一管理这些 Swagger API 文档定义。</li>
<li><strong>更好的社区支持</strong>：go-swagger 目前有非常多的 Github star 数，出现 Bug 的概率很小，并且处在一个频繁更新的活跃状态。</li>
</ul>
<h3 id="go-swagger" tabindex="-1"><a class="header-anchor" href="#go-swagger" aria-hidden="true">#</a> go-swagger</h3>
<ul>
<li><a href="https://github.com/go-swagger/go-swagger" target="_blank" rel="noopener noreferrer">Github Project Address<ExternalLinkIcon/></a></li>
</ul>
<p>你已经知道了，go-swagger 是一个功能强大的、高性能的、可以根据代码注释生成 Swagger API 文档的工具。</p>
<p><code v-pre>go-swagger</code>为 Go 社区带来了一套完整的功能齐全、高性能的 API 组件，可与 Swagger API 配合使用：服务器、客户端和数据模型。</p>
<ul>
<li>从 swagger 规范生成服务器</li>
<li>从 swagger 规范生成客户端</li>
<li>从 swagger 规范（alpha 阶段）生成 CLI（命令行工具）</li>
<li>支持 jsonschema 和 swagger 提供的大部分功能，包括多态性</li>
<li>从带注释的 go 代码生成 swagger 规范</li>
<li>使用 swagger 规范的附加工具</li>
<li>出色的定制功能，具有供应商扩展和可定制模板</li>
</ul>
<p>我们对代码生成的关注点是生成惯用的、快速的 go 代码，它可以很好地与 golint、go vet 等配合使用。</p>
<p>⚠️ 这里需要注意，如果我们要对外提供 API 的 Go SDK，可以考虑使用 go-swagger 来生成客户端代码。但是我觉得 go-swagger 生成的服务端代码不够优雅，所以建议你自行编写服务端代码。</p>
<p>目前，有很多知名公司和组织的项目都使用了 go-swagger，例如 Moby、CoreOS、Kubernetes、Cilium 等。</p>
<h3 id="项目状态" tabindex="-1"><a class="header-anchor" href="#项目状态" aria-hidden="true">#</a> 项目状态</h3>
<p><code v-pre>go-swagger</code>现在功能已经完成并且已经稳定了它的 API。</p>
<p>大多数功能和构建块现在都处于稳定状态，具有丰富的 CI 测试集。</p>
<p>go-openapi 社区积极地继续为这个代码库带来修复和增强。</p>
<h2 id="swagger-上手" tabindex="-1"><a class="header-anchor" href="#swagger-上手" aria-hidden="true">#</a> Swagger 上手</h2>
<h3 id="安装-swagger-工具" tabindex="-1"><a class="header-anchor" href="#安装-swagger-工具" aria-hidden="true">#</a> 安装 Swagger 工具</h3>
<p>go-swagger 通过 swagger 命令行工具来完成其功能，swagger 安装方法如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>$ <span class="token keyword">go</span> get <span class="token operator">-</span>u github<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>swagger<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>swagger<span class="token operator">/</span>cmd<span class="token operator">/</span>swagger

$ swagger version
version<span class="token punctuation">:</span> v0<span class="token punctuation">.</span><span class="token number">30.4</span>
commit<span class="token punctuation">:</span> <span class="token punctuation">(</span>unknown<span class="token punctuation">,</span> mod sum<span class="token punctuation">:</span> <span class="token string">"h1:cPrWLSXY6ZdcgfRicOj0lANg72TkTHz6uv/OlUdzO5U="</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="swagger-命令行工具介绍" tabindex="-1"><a class="header-anchor" href="#swagger-命令行工具介绍" aria-hidden="true">#</a> swagger 命令行工具介绍</h3>
<p>swagger 命令格式为<code v-pre>swagger [OPTIONS]</code> 。可以通过swagger -h查看 swagger 使用帮助。swagger 提供的子命令及功能见下表：</p>
<img src="http://sm.nsddd.top/sm202302211206119.png" alt="sadfasfdaijfoaisjfdoisa" style="zoom:33%;" />
<h2 id="如何使用-swagger-命令生成-swagger-文档" tabindex="-1"><a class="header-anchor" href="#如何使用-swagger-命令生成-swagger-文档" aria-hidden="true">#</a> 如何使用 swagger 命令生成 Swagger 文档？</h2>
<p>go-swagger 通过解析源码中的注释来生成 <a href="https://github.com/go-swagger/go-swagger" target="_blank" rel="noopener noreferrer">Swagger 文档<ExternalLinkIcon/></a>，go-swagger 的详细注释语法可参考官方文档。常用的有如下几类注释语法：</p>
<p>go-swagger 是一个用于生成 RESTful API 的工具，它支持使用 Swagger 规范（OpenAPI 规范）来定义 API 的接口和模型。在使用 go-swagger 时，我们可以使用特定的注释语法来定义 API 的信息和参数，以下是常用的几类注释语法和示例：</p>
<h3 id="swagger-注释" tabindex="-1"><a class="header-anchor" href="#swagger-注释" aria-hidden="true">#</a> Swagger 注释</h3>
<p>Swagger 注释用于定义 API 的信息，例如 <strong>API 的标题、描述、版本号</strong> 等。使用 <code v-pre>swagger:xxx</code> 的形式来注释，其中 <code v-pre>xxx</code> 表示注释的具体信息。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// swagger:operation GET /books/{id} getBook</span>
<span class="token comment">//</span>
<span class="token comment">// ---</span>
<span class="token comment">// summary: Get book by ID</span>
<span class="token comment">// description: Returns a single book by its ID.</span>
<span class="token comment">// parameters:</span>
<span class="token comment">// - name: id</span>
<span class="token comment">//   in: path</span>
<span class="token comment">//   description: ID of the book to retrieve</span>
<span class="token comment">//   required: true</span>
<span class="token comment">//   type: string</span>
<span class="token comment">// responses:</span>
<span class="token comment">//   "200":</span>
<span class="token comment">//     description: Book information</span>
<span class="token comment">//     schema:</span>
<span class="token comment">//       "$ref": "#/definitions/Book"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parameter-注释" tabindex="-1"><a class="header-anchor" href="#parameter-注释" aria-hidden="true">#</a> Parameter 注释</h3>
<p>Parameter 注释用于定义 API 接口的参数，包括参数的名称、类型、位置和描述等信息。使用 <code v-pre>param</code> 的形式来注释，其中 <code v-pre>param</code> 表示参数的具体信息。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// GetBookByID returns a single book by its ID.</span>
<span class="token comment">//</span>
<span class="token comment">// swagger:operation GET /books/{id} getBook</span>
<span class="token comment">//</span>
<span class="token comment">// ---</span>
<span class="token comment">// summary: Get book by ID</span>
<span class="token comment">// description: Returns a single book by its ID.</span>
<span class="token comment">// parameters:</span>
<span class="token comment">// - name: id</span>
<span class="token comment">//   in: path</span>
<span class="token comment">//   description: ID of the book to retrieve</span>
<span class="token comment">//   required: true</span>
<span class="token comment">//   type: string</span>
<span class="token comment">//   format: uuid</span>
<span class="token comment">//   param: query</span>
<span class="token comment">// responses:</span>
<span class="token comment">//   "200":</span>
<span class="token comment">//     description: Book information</span>
<span class="token comment">//     schema:</span>
<span class="token comment">//       "$ref": "#/definitions/Book"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-注释" tabindex="-1"><a class="header-anchor" href="#response-注释" aria-hidden="true">#</a> Response 注释</h3>
<p>Response 注释用于定义 API 的响应数据结构和数据类型。使用 <code v-pre>response</code> 的形式来注释，其中 <code v-pre>response</code> 表示响应的具体信息。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// GetBookByID returns a single book by its ID.</span>
<span class="token comment">//</span>
<span class="token comment">// swagger:operation GET /books/{id} getBook</span>
<span class="token comment">//</span>
<span class="token comment">// ---</span>
<span class="token comment">// summary: Get book by ID</span>
<span class="token comment">// description: Returns a single book by its ID.</span>
<span class="token comment">// parameters:</span>
<span class="token comment">// - name: id</span>
<span class="token comment">//   in: path</span>
<span class="token comment">//   description: ID of the book to retrieve</span>
<span class="token comment">//   required: true</span>
<span class="token comment">//   type: string</span>
<span class="token comment">//   format: uuid</span>
<span class="token comment">// responses:</span>
<span class="token comment">//   "200":</span>
<span class="token comment">//     description: Book information</span>
<span class="token comment">//     schema:</span>
<span class="token comment">//       "$ref": "#/definitions/Book"</span>
<span class="token comment">//       response: noContent</span>
<span class="token comment">//   "404":</span>
<span class="token comment">//     description: Book not found</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解析注释生成-swagger-文档" tabindex="-1"><a class="header-anchor" href="#解析注释生成-swagger-文档" aria-hidden="true">#</a> 解析注释生成 Swagger 文档</h3>
<p><code v-pre>swagger generate</code> 命令会找到 main 函数，然后遍历所有源码文件，解析源码中与 Swagger 相关的注释，然后自动生成 <code v-pre>swagger.json/swagger.yaml</code> 文件。</p>
<p>这一过程的示例代码为 <a href="https://github.com/marmotedu/gopractise-demo/tree/main/swagger" target="_blank" rel="noopener noreferrer">gopractise-demo/swagger<ExternalLinkIcon/></a>。目录下有一个 <code v-pre>main.go</code> 文件，定义了如下 API 接口：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"log"</span>
    <span class="token string">"net/http"</span>

    <span class="token string">"github.com/gin-gonic/gin"</span>

    <span class="token string">"github.com/marmotedu/gopractise-demo/swagger/api"</span>
    <span class="token comment">// This line is necessary for go-swagger to find your docs!</span>
    <span class="token boolean">_</span> <span class="token string">"github.com/marmotedu/gopractise-demo/swagger/docs"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> users <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>api<span class="token punctuation">.</span>User

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">,</span> Create<span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/users/:name"</span><span class="token punctuation">,</span> Get<span class="token punctuation">)</span>

    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">":5555"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Create create a user in memory.</span>
<span class="token keyword">func</span> <span class="token function">Create</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> user api<span class="token punctuation">.</span>User
    <span class="token keyword">if</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">"message"</span><span class="token punctuation">:</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"code"</span><span class="token punctuation">:</span> <span class="token number">10001</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> u <span class="token operator">:=</span> <span class="token keyword">range</span> users <span class="token punctuation">{</span>
        <span class="token keyword">if</span> u<span class="token punctuation">.</span>Name <span class="token operator">==</span> user<span class="token punctuation">.</span>Name <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">"message"</span><span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"user %s already exist"</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"code"</span><span class="token punctuation">:</span> <span class="token number">10001</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    users <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Get return the detail information for a user.</span>
<span class="token keyword">func</span> <span class="token function">Get</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    username <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> u <span class="token operator">:=</span> <span class="token keyword">range</span> users <span class="token punctuation">{</span>
        <span class="token keyword">if</span> u<span class="token punctuation">.</span>Name <span class="token operator">==</span> username <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> u<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">"message"</span><span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"user %s not exist"</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"code"</span><span class="token punctuation">:</span> <span class="token number">10002</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main 包中引入的 User struct 位于 <code v-pre>gopractise-demo/swagger/api</code> 目录下的<a href="https://github.com/marmotedu/gopractise-demo/blob/main/swagger/api/user.go" target="_blank" rel="noopener noreferrer">user.go<ExternalLinkIcon/></a>文件：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">//</span> Package api defines the user model<span class="token punctuation">.</span>
package api

<span class="token operator">//</span> User represents body of User request <span class="token keyword">and</span> response<span class="token punctuation">.</span>
<span class="token builtin">type</span> User struct <span class="token punctuation">{</span>
    <span class="token operator">//</span> User's name<span class="token punctuation">.</span>
    <span class="token operator">//</span> Required<span class="token punctuation">:</span> true
    Name string `json<span class="token punctuation">:</span><span class="token string">"name"</span>`

    <span class="token operator">//</span> User's nickname<span class="token punctuation">.</span>
    <span class="token operator">//</span> Required<span class="token punctuation">:</span> true
    Nickname string `json<span class="token punctuation">:</span><span class="token string">"nickname"</span>`

    <span class="token operator">//</span> User's address<span class="token punctuation">.</span>
    Address string `json<span class="token punctuation">:</span><span class="token string">"address"</span>`

    <span class="token operator">//</span> User's email<span class="token punctuation">.</span>
    Email string `json<span class="token punctuation">:</span><span class="token string">"email"</span>`
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>// Required: true</code>说明字段是必须的，生成 Swagger 文档时，也会在文档中声明该字段是必须字段。</p>
<p>为了使代码保持简洁，我们在另外一个 Go 包中编写带 go-swagger 注释的 API 文档。假设该 Go 包名字为 docs，在开始编写 Go API 注释之前，需要在 <code v-pre>main.go</code> 文件中导入 docs 包：</p>
<div class="language-BASH ext-BASH line-numbers-mode"><pre v-pre class="language-BASH"><code>_ &quot;github.com/marmotedu/gopractise-demo/swagger/docs&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过导入 docs 包，可以使 go-swagger 在递归解析 main 包的依赖包时，找到 docs 包，并解析包中的注释。</p>
<p><strong>在 gopractise-demo/swagger 目录下，创建 docs 文件夹：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> docs
$ <span class="token builtin class-name">cd</span> docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在 docs 目录下，创建一个 doc.go 文件，在该文件中提供 API 接口的基本信息：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// Package docs awesome.</span>
<span class="token comment">//</span>
<span class="token comment">// Documentation of our awesome API.</span>
<span class="token comment">//</span>
<span class="token comment">//     Schemes: http, https</span>
<span class="token comment">//     BasePath: /</span>
<span class="token comment">//     Version: 0.1.0</span>
<span class="token comment">//     Host: some-url.com</span>
<span class="token comment">//</span>
<span class="token comment">//     Consumes:</span>
<span class="token comment">//     - application/json</span>
<span class="token comment">//</span>
<span class="token comment">//     Produces:</span>
<span class="token comment">//     - application/json</span>
<span class="token comment">//</span>
<span class="token comment">//     Security:</span>
<span class="token comment">//     - basic</span>
<span class="token comment">//</span>
<span class="token comment">//    SecurityDefinitions:</span>
<span class="token comment">//    basic:</span>
<span class="token comment">//      type: basic</span>
<span class="token comment">//</span>
<span class="token comment">// swagger:meta</span>
<span class="token keyword">package</span> docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Package docs</code> 后面的字符串 <code v-pre>awesome</code> 代表我们的 HTTP 服务名。<code v-pre>Documentation of our awesome API</code>是我们 API 的描述。其他都是 <code v-pre>go-swagger</code> 可识别的注释，代表一定的意义。最后以<code v-pre>swagger:meta</code>注释结束。</p>
<p>编写完 doc.go 文件后，进入 <code v-pre>gopractise-demo/swagger</code> 目录，执行如下命令，生成 Swagger API 文档，并启动 HTTP 服务，在浏览器查看 Swagger：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ swagger generate spec <span class="token parameter variable">-o</span> swagger.yaml
$ swagger serve --no-open <span class="token parameter variable">-F</span><span class="token operator">=</span>swagger <span class="token parameter variable">--port</span> <span class="token number">36666</span> swagger.yaml

<span class="token number">2020</span>/10/20 <span class="token number">23</span>:16:47 serving docs at http://localhost:36666/docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>-o</code>：指定要输出的文件名。swagger 会根据文件名后缀<code v-pre>.yaml</code> 或者<code v-pre>.json</code>，决定生成的文件格式为 YAML 或 JSON。</li>
<li><code v-pre>–no-open</code>：因为是在 Linux 服务器下执行命令，没有安装浏览器，所以使–no-open 禁止调用浏览器打开 URL。</li>
<li><code v-pre>-F</code>：指定文档的风格，可选 swagger 和 redoc。我选用了 redoc，因为觉得 redoc 格式更加易读和清晰。</li>
<li><code v-pre>–port</code>：指定启动的 HTTP 服务监听端口。</li>
</ul>
<p><strong>打开浏览器，访问http://localhost:36666/docs ，如下图所示：</strong></p>
<p><img src="http://sm.nsddd.top/sm202302212108643.png" alt="image-20230221210845527"></p>
<p>如果我们想要 JSON 格式的 Swagger 文档，可执行如下命令，将生成的 swagger.yaml 转换为 swagger.json：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ swagger generate spec <span class="token parameter variable">-i</span> ./swagger.yaml <span class="token parameter variable">-o</span> ./swagger.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，我们就可以编写 API 接口的定义文件（位于<a href="https://github.com/marmotedu/gopractise-demo/blob/main/swagger/docs/user.go" target="_blank" rel="noopener noreferrer">gopractise-demo/swagger/docs/user.go<ExternalLinkIcon/></a>文件中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">package</span> docs

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"github.com/marmotedu/gopractise-demo/swagger/api"</span>
<span class="token punctuation">)</span>

<span class="token comment">// swagger:route POST /users user createUserRequest</span>
<span class="token comment">// Create a user in memory.</span>
<span class="token comment">// responses:</span>
<span class="token comment">//   200: createUserResponse</span>
<span class="token comment">//   default: errResponse</span>

<span class="token comment">// swagger:route GET /users/{name} user getUserRequest</span>
<span class="token comment">// Get a user from memory.</span>
<span class="token comment">// responses:</span>
<span class="token comment">//   200: getUserResponse</span>
<span class="token comment">//   default: errResponse</span>

<span class="token comment">// swagger:parameters createUserRequest</span>
<span class="token keyword">type</span> userParamsWrapper <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// This text will appear as description of your request body.</span>
    <span class="token comment">// in:body</span>
    Body api<span class="token punctuation">.</span>User
<span class="token punctuation">}</span>

<span class="token comment">// This text will appear as description of your request url path.</span>
<span class="token comment">// swagger:parameters getUserRequest</span>
<span class="token keyword">type</span> getUserParamsWrapper <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// in:path</span>
    Name <span class="token builtin">string</span> <span class="token string">`json:"name"`</span>
<span class="token punctuation">}</span>

<span class="token comment">// This text will appear as description of your response body.</span>
<span class="token comment">// swagger:response createUserResponse</span>
<span class="token keyword">type</span> createUserResponseWrapper <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// in:body</span>
    Body api<span class="token punctuation">.</span>User
<span class="token punctuation">}</span>

<span class="token comment">// This text will appear as description of your response body.</span>
<span class="token comment">// swagger:response getUserResponse</span>
<span class="token keyword">type</span> getUserResponseWrapper <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// in:body</span>
    Body api<span class="token punctuation">.</span>User
<span class="token punctuation">}</span>

<span class="token comment">// This text will appear as description of your error response body.</span>
<span class="token comment">// swagger:response errResponse</span>
<span class="token keyword">type</span> errResponseWrapper <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// Error code.</span>
    Code <span class="token builtin">int</span> <span class="token string">`json:"code"`</span>

    <span class="token comment">// Error message.</span>
    Message <span class="token builtin">string</span> <span class="token string">`json:"message"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>user.go 文件说明：</strong></p>
<ul>
<li>swagger:route：swagger:route代表 API 接口描述的开始，后面的字符串格式为HTTP方法 URL Tag ID。可以填写多个 tag，相同 tag 的 API 接口在 Swagger 文档中会被分为一组。ID 是一个标识符，swagger:parameters是具有相同 ID 的swagger:route的请求参数。swagger:route下面的一行是该 API 接口的描述，需要以英文点号为结尾。responses:定义了 API 接口的返回参数，例如当 HTTP 状态码是 200 时，返回 createUserResponse，createUserResponse 会跟swagger:response进行匹配，匹配成功的swagger:response就是该 API 接口返回 200 状态码时的返回。</li>
<li>swagger:response：swagger:response定义了 API 接口的返回，例如 getUserResponseWrapper，关于名字，我们可以根据需要自由命名，并不会带来任何不同。getUserResponseWrapper 中有一个 Body 字段，其注释为// in:body，说明该参数是在 HTTP Body 中返回。swagger:response之上的注释会被解析为返回参数的描述。api.User 自动被 go-swagger 解析为Example Value和Model。我们不用再去编写重复的返回字段，只需要引用已有的 Go 结构体即可，这也是通过工具生成 Swagger 文档的魅力所在。</li>
<li>swagger:parameters：swagger:parameters定义了 API 接口的请求参数，例如 userParamsWrapper。userParamsWrapper 之上的注释会被解析为请求参数的描述，// in:body代表该参数是位于 HTTP Body 中。同样，userParamsWrapper 结构体名我们也可以随意命名，不会带来任何不同。swagger:parameters之后的 createUserRequest 会跟swagger:route的 ID 进行匹配，匹配成功则说明是该 ID 所在 API 接口的请求参数。</li>
</ul>
<p>进入 gopractise-demo/swagger 目录，执行如下命令，生成 Swagger API 文档，并启动 HTTP 服务，在浏览器查看 Swagger：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ swagger generate spec <span class="token parameter variable">-o</span> swagger.yaml
$ swagger serve --no-open <span class="token parameter variable">-F</span><span class="token operator">=</span>swagger <span class="token parameter variable">--port</span> <span class="token number">36666</span> swagger.yaml
<span class="token number">2020</span>/10/20 <span class="token number">23</span>:28:30 serving docs at http://localhost:36666/docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器，访问 http://localhost:36666/docs ，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302212110077.png" alt="image-20230221211008018"></p>
<p>上面我们生成了 swagger 风格的 UI 界面，我们也可以使用 redoc 风格的 UI 界面，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302212110146.png" alt="image-20230221211020081"></p>
<h2 id="go-swagger-其他常用功能介绍" tabindex="-1"><a class="header-anchor" href="#go-swagger-其他常用功能介绍" aria-hidden="true">#</a> go-swagger 其他常用功能介绍</h2>
<p>上面，我介绍了 swagger 最常用的 generate、serve 命令，关于 swagger 其他有用的命令，这里也简单介绍一下。</p>
<h3 id="对比-swagger-文档" tabindex="-1"><a class="header-anchor" href="#对比-swagger-文档" aria-hidden="true">#</a> 对比 Swagger 文档</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
$ swagger <span class="token function">diff</span> <span class="token parameter variable">-d</span> change.log swagger.new.yaml swagger.old.yaml
$ <span class="token function">cat</span> change.log

BREAKING CHANGES:
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
/users:post Request - Body.Body.nickname.address.email.name.Body <span class="token builtin class-name">:</span> User - Deleted property
compatibility <span class="token builtin class-name">test</span> FAILED: <span class="token number">1</span> breaking changes detected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成服务端代码" tabindex="-1"><a class="header-anchor" href="#生成服务端代码" aria-hidden="true">#</a> 生成服务端代码</h3>
<p>我们也可以先定义 Swagger 接口文档，再用 swagger 命令，基于 Swagger 接口文档生成服务端代码。假设我们的应用名为 go-user，进入 gopractise-demo/swagger 目录，创建 go-user 目录，并生成服务端代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> go-user
$ <span class="token builtin class-name">cd</span> go-user
$ swagger generate server <span class="token parameter variable">-f</span> <span class="token punctuation">..</span>/swagger.yaml <span class="token parameter variable">-A</span> go-user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述命令会在当前目录生成 cmd、restapi、models 文件夹，可执行如下命令查看 server 组件启动方式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run cmd/go-user-server/main.go <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成客户端代码" tabindex="-1"><a class="header-anchor" href="#生成客户端代码" aria-hidden="true">#</a> 生成客户端代码</h3>
<p>在 go-user 目录下执行如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ swagger generate client <span class="token parameter variable">-f</span> <span class="token punctuation">..</span>/swagger.yaml <span class="token parameter variable">-A</span> go-user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述命令会在当前目录生成 client，包含了 API 接口的调用函数，也就是 API 接口的 Go SDK。</p>
<h3 id="验证-swagger-文档是否合法" tabindex="-1"><a class="header-anchor" href="#验证-swagger-文档是否合法" aria-hidden="true">#</a> 验证 Swagger 文档是否合法</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ swagger validate swagger.yaml
<span class="token number">2020</span>/10/21 09:53:18
The swagger spec at <span class="token string">"swagger.yaml"</span> is valid against swagger specification <span class="token number">2.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并-swagger-文档" tabindex="-1"><a class="header-anchor" href="#合并-swagger-文档" aria-hidden="true">#</a> 合并 Swagger 文档</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ swagger mixin swagger_part1.yaml swagger_part2.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="iam-swagger-文档" tabindex="-1"><a class="header-anchor" href="#iam-swagger-文档" aria-hidden="true">#</a> IAM Swagger 文档</h2>
<p>IAM 的 Swagger 文档定义在 <a href="iam/api/swagger/docs">iam/api/swagger/docs</a>目录下，遵循 [go-swagger]规范进行定义。</p>
<p><a href="https://github.com/marmotedu/iam/blob/v1.0.0/api/swagger/docs/doc.go" target="_blank" rel="noopener noreferrer">iam/api/swagger/docs/doc.go<ExternalLinkIcon/></a>文件定义了更多 Swagger 文档的基本信息，比如开源协议、联系方式、安全认证等。</p>
<p>更详细的定义，你可以直接查看 iam/api/swagger/docs 目录下的 Go 源码文件。</p>
<p>为了便于生成文档和启动 HTTP 服务查看 Swagger 文档，该操作被放在 Makefile 中执行（位于<a href="iam/scripts/make-rules/swagger.mk">iam/scripts/make-rules/swagger.mk</a>文件中）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>.PHONY: swagger.run    
swagger.run: tools.verify.swagger    
  @echo <span class="token string">"===========> Generating swagger API docs"</span>    
  @swagger generate spec --scan-models <span class="token parameter variable">-w</span> <span class="token variable"><span class="token variable">$(</span>ROOT_DIR<span class="token variable">)</span></span>/cmd/genswaggertypedocs <span class="token parameter variable">-o</span> <span class="token variable"><span class="token variable">$(</span>ROOT_DIR<span class="token variable">)</span></span>/api/swagger/swagger.yaml    
    
.PHONY: swagger.serve    
swagger.serve: tools.verify.swagger    
  @swagger serve <span class="token parameter variable">-F</span><span class="token operator">=</span>redoc --no-open <span class="token parameter variable">--port</span> <span class="token number">36666</span> <span class="token variable"><span class="token variable">$(</span>ROOT_DIR<span class="token variable">)</span></span>/api/swagger/swagger.yaml  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Makefile 文件说明：</strong></p>
<ul>
<li><code v-pre>tools.verify.swagger</code>：检查 Linux 系统是否安装了 go-swagger 的命令行工具 swagger，如果没有安装则运行 go get 安装。</li>
<li><code v-pre>swagger.run</code>：运行 swagger generate spec 命令生成 Swagger 文档 swagger.yaml，运行前会检查 swagger 是否安装。 --scan-models 指定生成的文档中包含带有 swagger:model 注释的 Go Models。-w 指定 swagger 命令运行的目录。</li>
<li><code v-pre>swagger.serve</code>：运行 swagger serve 命令打开 Swagger 文档 swagger.yaml，运行前会检查 swagger 是否安装。</li>
</ul>
<p><strong>在 iam 源码根目录下执行如下命令，即可生成并启动 HTTP 服务查看 Swagger 文档：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> swagger
$ <span class="token function">make</span> serve-swagger
<span class="token number">2020</span>/10/21 06:45:03 serving docs at http://localhost:36666/docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器，打开http://x.x.x.x:36666/docs查看 Swagger 文档，x.x.x.x 是服务器的 IP 地址，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302212125283.png" alt="image-20230221212439191"></p>
<p>IAM 的 Swagger 文档，还可以通过在 iam 源码根目录下执行go generate ./...命令生成，为此，我们需要在 iam/cmd/genswaggertypedocs/swagger_type_docs.go 文件中，添加//go:generate注释。如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302212126949.png" alt="image-20230221212605891"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在做 Go 服务开发时，我们要向前端或用户提供 API 文档，手动编写 API 文档工作量大，也难以维护。所以，现在很多项目都是自动生成 Swagger 格式的 API 文档。提到 Swagger，很多开发者不清楚其和 OpenAPI 的区别，所以我也给你总结了：OpenAPI 是一个 API 规范，Swagger 则是实现规范的工具。</p>
<p>Go-Swagger是一个用于构建RESTful API服务的工具，它能够自动生成Swagger文档和客户端代码，并提供了丰富的API开发工具和框架。下面是对Go-Swagger的总结：</p>
<p><strong>优点</strong></p>
<p>Go-Swagger的最大优点在于其能够自动生成Swagger文档和客户端代码。Swagger是一个用于描述RESTful API的标准规范，它定义了API的各种细节，如请求参数、返回值、错误码等等。使用Go-Swagger可以自动生成Swagger文档，使得API的文档编写更加快速和简便。同时，Go-Swagger还可以生成各种客户端代码，包括Go、Python、Java等等，极大地方便了API的调用。</p>
<p>除了自动生成Swagger文档和客户端代码外，Go-Swagger还提供了许多API开发工具和框架，包括验证器、序列化器、路由器等等。这些工具和框架可以让API的开发更加高效和方便，大大提升了开发效率。</p>
<p><strong>缺点</strong></p>
<p>尽管Go-Swagger具有许多优点，但也存在一些缺点。首先，Go-Swagger的学习曲线比较陡峭，需要花费一定的时间和精力去学习和掌握。此外，由于Go-Swagger是一个比较新的工具，其社区相对较小，缺少一些成熟的解决方案和插件。</p>
<p><strong>应用场景</strong></p>
<p>Go-Swagger适用于需要快速构建RESTful API服务的应用场景。使用Go-Swagger可以快速生成Swagger文档和客户端代码，减少了API文档编写和客户端代码开发的工作量，同时提供了丰富的API开发工具和框架，大大提高了开发效率。此外，Go-Swagger还支持多种编程语言，适用于不同的开发团队和开发环境。</p>
<p><strong>总结</strong></p>
<p>综上所述，Go-Swagger是一个非常实用的API开发工具，能够快速生成Swagger文档和客户端代码，提供了丰富的API开发工具和框架，适用于快速构建RESTful API服务的应用场景。虽然Go-Swagger的学习曲线比较陡峭，但通过学习和掌握，可以大大提高API的开发效率。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '9.md' style='float:left'>⬆️上一节🔗  </a><a href = '11.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


