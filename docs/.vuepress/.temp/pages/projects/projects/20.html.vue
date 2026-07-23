<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第20节-控制流-上-通过iam-apiserver设计-看web服务的构建" tabindex="-1"><a class="header-anchor" href="#第20节-控制流-上-通过iam-apiserver设计-看web服务的构建" aria-hidden="true">#</a> 第20节 控制流（上）：通过iam-apiserver设计，看Web服务的构建</h1>
<br>
<div><a href = '19.md' style='float:left'>⬆️上一节🔗  </a><a href = '21.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://cubxxw.com/" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#iam-apiserver服务介绍">iam-apiserver服务介绍</router-link><ul><li><router-link to="#iam-apiserver功能介绍">iam-apiserver功能介绍</router-link></li><li><router-link to="#iam-apiserver使用方法介绍">iam-apiserver使用方法介绍</router-link></li></ul></li><li><router-link to="#iam-apiserver代码实现">iam-apiserver代码实现</router-link><ul><li><router-link to="#iam-apiserver配置处理">iam-apiserver配置处理</router-link></li><li><router-link to="#iam-apiserver启动流程设计">iam-apiserver启动流程设计</router-link></li><li><router-link to="#iam-apiserver-的rest-api请求处理流程">iam-apiserver 的REST API请求处理流程</router-link></li><li><router-link to="#iam-apiserver代码架构">iam-apiserver代码架构</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>前面我们讲了很多关于应用构建的内容，你一定迫不及待地想看下IAM项目的应用是如何构建的。那么接下来，我就讲解下IAM应用的源码。</p>
<p>在讲解过程中，我不会去讲解具体如何Code，但会讲解一些构建过程中的重点、难点，以及Code背后的设计思路、想法。我相信这是对你更有帮助的。</p>
<p>IAM项目有很多组件，这一讲，我先来介绍下IAM项目的门面服务：iam-apiserver（管理流服务）。我会先给你介绍下<code v-pre>iam-apiserver</code>的功能和使用方法，再介绍下iam-apiserver的代码实现。</p>
<h2 id="iam-apiserver服务介绍" tabindex="-1"><a class="header-anchor" href="#iam-apiserver服务介绍" aria-hidden="true">#</a> iam-apiserver服务介绍</h2>
<p>iam-apiserver是一个Web服务，通过一个名为iam-apiserver的进程，对外提供RESTful API接口，完成用户、密钥、策略三种REST资源的增删改查。接下来，我从功能和使用方法两个方面来具体介绍下。</p>
<h3 id="iam-apiserver功能介绍" tabindex="-1"><a class="header-anchor" href="#iam-apiserver功能介绍" aria-hidden="true">#</a> iam-apiserver功能介绍</h3>
<p>这里，我们可以通过iam-apiserver提供的RESTful API接口，来看下iam-apiserver具体提供的功能。iam-apiserver提供的RESTful API接口可以分为四类，具体如下：</p>
<p><strong>认证相关接口</strong></p>
<p><img src="http://sm.cubxxw.com/sm202302271737291.jpeg" alt="图片"></p>
<p><strong>用户相关接口</strong></p>
<p><a href="https://static001.geekbang.org/resource/image/60/24/60f8a05f4cb43cbac84c0fb12c40c824.jpg?wh=1920x1314" target="_blank" rel="noopener noreferrer"><img src="http://sm.cubxxw.com/sm202302271738769.jpeg" alt="图片"><ExternalLinkIcon/></a></p>
<p><strong>密钥相关接口</strong></p>
<p><img src="http://sm.cubxxw.com/sm202302271737321.jpeg" alt="图片"></p>
<p><strong>策略相关接口</strong></p>
<p><img src="http://sm.cubxxw.com/sm202302271738302.jpeg" alt="图片"></p>
<h3 id="iam-apiserver使用方法介绍" tabindex="-1"><a class="header-anchor" href="#iam-apiserver使用方法介绍" aria-hidden="true">#</a> iam-apiserver使用方法介绍</h3>
<p>上面我介绍了iam-apiserver的功能，接下来就介绍下如何使用这些功能。</p>
<p>我们可以通过不同的客户端来访问 <code v-pre>iam-apiserver</code>，例如前端、API调用、SDK、iamctl等。这些客户端最终都会执行HTTP请求，调用 <code v-pre>iam-apiserver</code> 提供的RESTful API接口。所以，我们首先需要有一个顺手的REST API客户端工具来执行HTTP请求，完成开发测试。</p>
<p>因为不同的开发者执行HTTP请求的方式、习惯不同，为了方便讲解，这里我统一通过cURL工具来执行HTTP请求。接下来先介绍下cURL工具。</p>
<p>标准的Linux发行版都安装了cURL工具。cURL可以很方便地完成RESTful API的调用场景，比如设置Header、指定HTTP请求方法、指定HTTP消息体、指定权限认证信息等。通过<code v-pre>-v</code>选项，也能输出REST请求的所有返回信息。cURL功能很强大，有很多参数，这里列出cURL工具常用的参数：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-X/--request <span class="token punctuation">[</span>GET<span class="token operator">|</span>POST<span class="token operator">|</span>PUT<span class="token operator">|</span>DELETE<span class="token operator">|</span>…<span class="token punctuation">]</span>  指定请求的 HTTP 方法
-H/--header                           指定请求的 HTTP Header
-d/--data                             指定请求的 HTTP 消息体（Body）
-v/--verbose                          输出详细的返回信息
-u/--user                             指定账号、密码
-b/--cookie                           读取 cookie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，如果你想使用带UI界面的工具，这里我推荐你使用 <code v-pre>Insomnia</code> 。</p>
<p><code v-pre>Insomnia</code>是一个跨平台的REST API客户端，与 <code v-pre>Postman</code>、<code v-pre>Apifox</code>是一类工具，用于接口管理、测试。<code v-pre>Insomnia</code>功能强大，支持以下功能：</p>
<ul>
<li>发送HTTP请求；</li>
<li>创建工作区或文件夹；</li>
<li>导入和导出数据；</li>
<li>导出cURL格式的HTTP请求命令；</li>
<li>支持编写swagger文档；</li>
<li>快速切换请求；</li>
<li>URL编码和解码。</li>
<li>…</li>
</ul>
<p><code v-pre>Insomnia</code>界面如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202302271744432.png" alt="图片"></p>
<p>当然了，也有很多其他优秀的带UI界面的REST API客户端，例如 Postman、Apifox等，你可以根据需要自行选择。</p>
<p>接下来，我用对secret资源的CURD操作，来给你演示下 <strong>如何使用iam-apiserver的功能</strong>。你需要执行6步操作。</p>
<ol>
<li>登录<code v-pre>iam-apiserver</code>，获取token。</li>
<li>创建一个名为<code v-pre>secret0</code>的secret。</li>
<li>获取<code v-pre>secret0</code>的详细信息。</li>
<li>更新<code v-pre>secret0</code>的描述。</li>
<li>获取<code v-pre>secret</code>列表。</li>
<li>删除<code v-pre>secret0</code>。</li>
</ol>
<p><strong>登录iam-apiserver，获取token：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-XPOST</span> -H<span class="token string">"Authorization: Basic <span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">'admin:Admin@2021'</span><span class="token operator">|</span>base64<span class="token variable">`</span></span>"</span> http://127.0.0.1:8080/login <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> .token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXBpLm1hcm1vdGVkdS5jb20iLCJleHAiOjE2MzUwNTk4NDIsImlkZW50aXR5IjoiYWRtaW4iLCJpc3MiOiJpYW0tYXBpc2VydmVyIiwib3JpZ19pYXQiOjE2MjcyODM4NDIsInN1YiI6ImFkbWluIn0.gTS0n-7njLtpCJ7mvSnct2p3TxNTUQaduNXxqqLwGfI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，为了便于使用，我们将token设置为环境变量：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">TOKEN</span><span class="token operator">=</span>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXBpLm1hcm1vdGVkdS5jb20iLCJleHAiOjE2MzUwNTk4NDIsImlkZW50aXR5IjoiYWRtaW4iLCJpc3MiOiJpYW0tYXBpc2VydmVyIiwib3JpZ19pYXQiOjE2MjcyODM4NDIsInN1YiI6ImFkbWluIn0.gTS0n-7njLtpCJ7mvSnct2p3TxNTUQaduNXxqqLwGfI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>创建一个名为secret0的secret：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-XPOST</span> <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> -H<span class="token string">"Authorization: Bearer <span class="token variable">${TOKEN}</span>"</span> -d<span class="token string">'{"metadata":{"name":"secret0"},"expires":0,"description":"admin secret"}'</span> http://iam.api.marmotedu.com:8080/v1/secrets
* About to connect<span class="token punctuation">(</span><span class="token punctuation">)</span> to iam.api.marmotedu.com port <span class="token number">8080</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
*   Trying <span class="token number">127.0</span>.0.1<span class="token punctuation">..</span>.
* Connected to iam.api.marmotedu.com <span class="token punctuation">(</span><span class="token number">127.0</span>.0.1<span class="token punctuation">)</span> port <span class="token number">8080</span> <span class="token punctuation">(</span><span class="token comment">#0)</span>
<span class="token operator">></span> POST /v1/secrets HTTP/1.1
<span class="token operator">></span> User-Agent: curl/7.29.0
<span class="token operator">></span> Host: iam.api.marmotedu.com:8080
<span class="token operator">></span> Accept: */*
<span class="token operator">></span> Content-Type: application/json
<span class="token operator">></span> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXBpLm1hcm1vdGVkdS5jb20iLCJleHAiOjE2MzUwNTk4NDIsImlkZW50aXR5IjoiYWRtaW4iLCJpc3MiOiJpYW0tYXBpc2VydmVyIiwib3JpZ19pYXQiOjE2MjcyODM4NDIsInN1YiI6ImFkbWluIn0.gTS0n-7njLtpCJ7mvSnct2p3TxNTUQaduNXxqqLwGfI
<span class="token operator">></span> Content-Length: <span class="token number">72</span>
<span class="token operator">></span> 
* upload completely sent off: <span class="token number">72</span> out of <span class="token number">72</span> bytes
<span class="token operator">&lt;</span> HTTP/1.1 <span class="token number">200</span> OK
<span class="token operator">&lt;</span> Content-Type: application/json<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
<span class="token operator">&lt;</span> X-Request-Id: ff825bea-53de-4020-8e68-4e87574bd1ba
<span class="token operator">&lt;</span> Date: Mon, <span class="token number">26</span> Jul <span class="token number">2021</span> 07:20:26 GMT
<span class="token operator">&lt;</span> Content-Length: <span class="token number">313</span>
<span class="token operator">&lt;</span> 
* Connection <span class="token comment">#0 to host iam.api.marmotedu.com left intact</span>
<span class="token punctuation">{</span><span class="token string">"metadata"</span>:<span class="token punctuation">{</span><span class="token string">"id"</span>:60,<span class="token string">"instanceID"</span><span class="token builtin class-name">:</span><span class="token string">"secret-jedr3e"</span>,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"secret0"</span>,<span class="token string">"createdAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-07-26T15:20:26.885+08:00"</span>,<span class="token string">"updatedAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-07-26T15:20:26.907+08:00"</span><span class="token punctuation">}</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"admin"</span>,<span class="token string">"secretID"</span><span class="token builtin class-name">:</span><span class="token string">"U6CxKs0YVWyOp5GrluychYIRxDmMDFd1mOOD"</span>,<span class="token string">"secretKey"</span><span class="token builtin class-name">:</span><span class="token string">"fubNIn8jLA55ktuuTpXM8Iw5ogdR2mlf"</span>,<span class="token string">"expires"</span>:0,<span class="token string">"description"</span><span class="token builtin class-name">:</span><span class="token string">"admin secret"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，请求返回头中返回了<code v-pre>X-Request-Id</code> Header，<code v-pre>X-Request-Id</code>唯一标识这次请求。如果这次请求失败，就可以将<code v-pre>X-Request-Id</code>提供给运维或者开发，通过<code v-pre>X-Request-Id</code>定位出失败的请求，进行排障。另外<code v-pre>X-Request-Id</code>在微服务场景中，也可以透传给其他服务，从而实现请求调用链。</p>
<p><strong>获取secret0的详细信息：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-XGET</span> -H<span class="token string">"Authorization: Bearer <span class="token variable">${TOKEN}</span>"</span> http://iam.api.marmotedu.com:8080/v1/secrets/secret0
<span class="token punctuation">{</span><span class="token string">"metadata"</span>:<span class="token punctuation">{</span><span class="token string">"id"</span>:60,<span class="token string">"instanceID"</span><span class="token builtin class-name">:</span><span class="token string">"secret-jedr3e"</span>,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"secret0"</span>,<span class="token string">"createdAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-07-26T15:20:26+08:00"</span>,<span class="token string">"updatedAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-07-26T15:20:26+08:00"</span><span class="token punctuation">}</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"admin"</span>,<span class="token string">"secretID"</span><span class="token builtin class-name">:</span><span class="token string">"U6CxKs0YVWyOp5GrluychYIRxDmMDFd1mOOD"</span>,<span class="token string">"secretKey"</span><span class="token builtin class-name">:</span><span class="token string">"fubNIn8jLA55ktuuTpXM8Iw5ogdR2mlf"</span>,<span class="token string">"expires"</span>:0,<span class="token string">"description"</span><span class="token builtin class-name">:</span><span class="token string">"admin secret"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更新secret0的描述：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-XPUT</span> -H<span class="token string">"Authorization: Bearer $"</span> -d<span class="token string">'{"metadata":{"name":"secret"},"expires":0,"description":"admin secret(modify)"}'</span> http://iam.api.marmotedu.com:8080/v1/secrets/secret0<span class="token punctuation">{</span><span class="token string">"metadata"</span>:<span class="token punctuation">{</span><span class="token string">"id"</span>:60,<span class="token string">"instanceID"</span><span class="token builtin class-name">:</span><span class="token string">"secret-jedr3e"</span>,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"secret0"</span>,<span class="token string">"createdAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-07-26T15:20:26+08:00"</span>,<span class="token string">"updatedAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-07-26T15:23:35.878+08:00"</span><span class="token punctuation">}</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"admin"</span>,<span class="token string">"secretID"</span><span class="token builtin class-name">:</span><span class="token string">"U6CxKs0YVWyOp5GrluychYIRxDmMDFd1mOOD"</span>,<span class="token string">"secretKey"</span><span class="token builtin class-name">:</span><span class="token string">"fubNIn8jLA55ktuuTpXM8Iw5ogdR2mlf"</span>,<span class="token string">"expires"</span>:0,<span class="token string">"description"</span><span class="token builtin class-name">:</span><span class="token string">"admin secret(modify)"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>获取secret列表：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-XGET</span> -H<span class="token string">"Authorization: Bearer <span class="token variable">${TOKEN}</span>"</span> http://iam.api.marmotedu.com:8080/v1/secrets
<span class="token punctuation">{</span><span class="token string">"totalCount"</span>:1,<span class="token string">"items"</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"metadata"</span>:<span class="token punctuation">{</span><span class="token string">"id"</span>:60,<span class="token string">"instanceID"</span><span class="token builtin class-name">:</span><span class="token string">"secret-jedr3e"</span>,<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"secret0"</span>,<span class="token string">"createdAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-07-26T15:20:26+08:00"</span>,<span class="token string">"updatedAt"</span><span class="token builtin class-name">:</span><span class="token string">"2021-07-26T15:23:35+08:00"</span><span class="token punctuation">}</span>,<span class="token string">"username"</span><span class="token builtin class-name">:</span><span class="token string">"admin"</span>,<span class="token string">"secretID"</span><span class="token builtin class-name">:</span><span class="token string">"U6CxKs0YVWyOp5GrluychYIRxDmMDFd1mOOD"</span>,<span class="token string">"secretKey"</span><span class="token builtin class-name">:</span><span class="token string">"fubNIn8jLA55ktuuTpXM8Iw5ogdR2mlf"</span>,<span class="token string">"expires"</span>:0,<span class="token string">"description"</span><span class="token builtin class-name">:</span><span class="token string">"admin secret(modify)"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除secret0：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ curl -XDELETE -H"Authorization: Bearer $" http://iam.api.marmotedu.com:8080/v1/secrets/secret0null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面，我给你演示了密钥的使用方法。用户和策略资源类型的使用方法跟密钥类似。详细的使用方法你可以参考 <a href="https://github.com/marmotedu/iam/blob/v1.0.6/scripts/install/test.sh" target="_blank" rel="noopener noreferrer">test.sh<ExternalLinkIcon/></a> 脚本，该脚本是用来测试IAM应用的，里面包含了各个接口的请求方法。</p>
<p>这里，我还想顺便介绍下<strong>如何测试IAM应用中的各个部分</strong>。确保iam-apiserver、iam-authz-server、iam-pump等服务正常运行后，进入到IAM项目的根目录，执行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ./scripts/install/test.sh iam::test::test <span class="token comment"># 测试整个IAM应用是否正常运行</span>
$ ./scripts/install/test.sh iam::test::login <span class="token comment"># 测试登陆接口是否可以正常访问</span>
$ ./scripts/install/test.sh iam::test::user <span class="token comment"># 测试用户接口是否可以正常访问</span>
$ ./scripts/install/test.sh iam::test::secret <span class="token comment"># 测试密钥接口是否可以正常访问</span>
$ ./scripts/install/test.sh iam::test::policy <span class="token comment"># 测试策略接口是否可以正常访问</span>
$ ./scripts/install/test.sh iam::test::apiserver <span class="token comment"># 测试iam-apiserver服务是否正常运行</span>
$ ./scripts/install/test.sh iam::test::authz <span class="token comment"># 测试authz接口是否可以正常访问</span>
$ ./scripts/install/test.sh iam::test::authzserver <span class="token comment"># 测试iam-authz-server服务是否正常运行</span>
$ ./scripts/install/test.sh iam::test::pump <span class="token comment"># 测试iam-pump是否正常运行</span>
$ ./scripts/install/test.sh iam::test::iamctl <span class="token comment"># 测试iamctl工具是否可以正常使用</span>
$ ./scripts/install/test.sh iam::test::man <span class="token comment"># 测试man文件是否正确安装</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，每次发布完iam-apiserver后，你可以执行以下命令来完成iam-apiserver的冒烟测试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">IAM_APISERVER_HOST</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1 <span class="token comment"># iam-apiserver部署服务器的IP地址</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">IAM_APISERVER_INSECURE_BIND_PORT</span><span class="token operator">=</span><span class="token number">8080</span> <span class="token comment"># iam-apiserver HTTP服务的监听端口</span>
$ ./scripts/install/test.sh iam::test::apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iam-apiserver代码实现" tabindex="-1"><a class="header-anchor" href="#iam-apiserver代码实现" aria-hidden="true">#</a> iam-apiserver代码实现</h2>
<p>上面，我介绍了iam-apiserver的功能和使用方法，这里我们再来看下iam-apiserver具体的代码实现。我会从配置处理、启动流程、请求处理流程、代码架构4个方面来讲解。</p>
<h3 id="iam-apiserver配置处理" tabindex="-1"><a class="header-anchor" href="#iam-apiserver配置处理" aria-hidden="true">#</a> iam-apiserver配置处理</h3>
<p>iam-apiserver服务的main函数位于<a href="https://github.com/marmotedu/iam/blob/v1.0.4/cmd/iam-apiserver/apiserver.go#L18" target="_blank" rel="noopener noreferrer">apiserver.go<ExternalLinkIcon/></a>文件中，你可以跟读代码，了解iam-apiserver的代码实现。这里，我来介绍下iam-apiserver服务的一些设计思想。</p>
<p>首先，来看下iam-apiserver中的3种配置：Options配置、应用配置和 HTTP/GRPC服务配置。</p>
<ul>
<li>**Options配置：**用来构建命令行参数，它的值来自于命令行选项或者配置文件（也可能是二者Merge后的配置）。Options可以用来构建应用框架，Options配置也是应用配置的输入。</li>
<li>**应用****配置：**iam-apiserver组件中需要的一切配置。有很多地方需要配置，例如，启动HTTP/GRPC需要配置监听地址和端口，初始化数据库需要配置数据库地址、用户名、密码等。</li>
<li>**HTTP/GRPC服务配置：**启动HTTP服务或者GRPC服务需要的配置。</li>
</ul>
<p>这三种配置的关系如下图：</p>
<p><img src="http://sm.cubxxw.com/sm202302282136791.jpeg" alt="img"></p>
<p>Options配置接管命令行选项，应用配置接管整个应用的配置，HTTP/GRPC服务配置接管跟HTTP/GRPC服务相关的配置。这3种配置独立开来，可以解耦命令行选项、应用和应用内的服务，使得这3个部分可以独立扩展，又不相互影响。</p>
<p>iam-apiserver根据Options配置来构建命令行参数和应用配置。</p>
<p>我们通过<code v-pre>github.com/marmotedu/iam/pkg/app</code>包的<a href="https://github.com/marmotedu/iam/blob/v1.0.4/pkg/app/app.go#L199" target="_blank" rel="noopener noreferrer">buildCommand<ExternalLinkIcon/></a>方法来构建命令行参数。这里的核心是，通过<a href="https://github.com/marmotedu/iam/blob/v1.0.4/pkg/app/app.go#L157" target="_blank" rel="noopener noreferrer">NewApp<ExternalLinkIcon/></a>函数构建Application实例时，传入的<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/options/options.go#L19" target="_blank" rel="noopener noreferrer">Options<ExternalLinkIcon/></a>实现了<code v-pre>Flags() (fss cliflag.NamedFlagSets)</code>方法，通过buildCommand方法中的以下代码，将option的Flag添加到cobra实例的FlagSet中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> a<span class="token punctuation">.</span>options <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    namedFlagSets <span class="token operator">=</span> a<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fs <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> f <span class="token operator">:=</span> <span class="token keyword">range</span> namedFlagSets<span class="token punctuation">.</span>FlagSets <span class="token punctuation">{</span>
      fs<span class="token punctuation">.</span><span class="token function">AddFlagSet</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

          <span class="token operator">...</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/config/config.go#L16" target="_blank" rel="noopener noreferrer">CreateConfigFromOptions<ExternalLinkIcon/></a>函数来构建应用配置：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>cfg<span class="token punctuation">,</span> err <span class="token operator">:=</span> config<span class="token punctuation">.</span><span class="token function">CreateConfigFromOptions</span><span class="token punctuation">(</span>opts<span class="token punctuation">)</span>                      
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>                                               
    <span class="token keyword">return</span> err                                                
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据应用配置来构建HTTP/GRPC服务配置。例如，以下代码根据应用配置，构建了HTTP服务器的Address参数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>InsecureServingOptions<span class="token punctuation">)</span> <span class="token function">ApplyTo</span><span class="token punctuation">(</span>c <span class="token operator">*</span>server<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>InsecureServing <span class="token operator">=</span> <span class="token operator">&amp;</span>server<span class="token punctuation">.</span>InsecureServingInfo<span class="token punctuation">{</span>
        Address<span class="token punctuation">:</span> net<span class="token punctuation">.</span><span class="token function">JoinHostPort</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>BindAddress<span class="token punctuation">,</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>BindPort<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code v-pre>c *server.Config</code>是HTTP服务器的配置，<code v-pre>s *InsecureServingOptions</code>是应用配置。</p>
<h3 id="iam-apiserver启动流程设计" tabindex="-1"><a class="header-anchor" href="#iam-apiserver启动流程设计" aria-hidden="true">#</a> iam-apiserver启动流程设计</h3>
<p>接下来，我们来详细看下iam-apiserver的启动流程设计。启动流程如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/8a/c7/8a94938bc087ed96d0ec87261db292c7.jpg?wh=4770x1487" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/8a/c7/8a94938bc087ed96d0ec87261db292c7.jpg?wh=4770x1487" alt="img"><ExternalLinkIcon/></a></p>
<p>**首先，**通过<code v-pre>opts := options.NewOptions()</code>创建带有默认值的Options类型变量opts。opts变量作为<code v-pre>github.com/marmotedu/iam/pkg/app</code>包的<code v-pre>NewApp</code>函数的输入参数，最终在App框架中，被来自于命令行参数或配置文件的配置（也可能是二者Merge后的配置）所填充，opts变量中各个字段的值会用来创建应用配置。</p>
<p>**接着，**会注册<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/apiserver.go#L36" target="_blank" rel="noopener noreferrer">run<ExternalLinkIcon/></a>函数到App框架中。run函数是iam-apiserver的启动函数，里面封装了我们自定义的启动逻辑。run函数中，首先会初始化日志包，这样我们就可以根据需要，在后面的代码中随时记录日志了。</p>
<p>**然后，**会创建应用配置。应用配置和Options配置其实是完全独立的，二者可能完全不同，但在iam-apiserver中，二者配置项是相同的。</p>
<p>**之后，**根据应用配置，创建HTTP/GRPC服务器所使用的配置。在创建配置后，会先分别进行配置补全，再使用补全后的配置创建Web服务实例，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>genericServer<span class="token punctuation">,</span> err <span class="token operator">:=</span> genericConfig<span class="token punctuation">.</span><span class="token function">Complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
<span class="token punctuation">}</span>
extraServer<span class="token punctuation">,</span> err <span class="token operator">:=</span> extraConfig<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
<span class="token punctuation">}</span>
<span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>ExtraConfig<span class="token punctuation">)</span> <span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>completedExtraConfig <span class="token punctuation">{</span>
    <span class="token keyword">if</span> c<span class="token punctuation">.</span>Addr <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">.</span>Addr <span class="token operator">=</span> <span class="token string">"127.0.0.1:8081"</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">&amp;</span>completedExtraConfig<span class="token punctuation">{</span>c<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，首先调用<code v-pre>Complete</code>/<code v-pre>complete</code>函数补全配置，再基于补全后的配置，New一个HTTP/GRPC服务实例。</p>
<p>这里有个设计技巧：<code v-pre>complete</code>函数返回的是一个<code v-pre>*completedExtraConfig</code>类型的实例，在创建GRPC实例时，是调用<code v-pre>completedExtraConfig</code>结构体提供的<code v-pre>New</code>方法，这种设计方法可以确保我们创建的GRPC实例一定是基于complete之后的配置（completed）。</p>
<p>在实际的Go项目开发中，我们需要提供一种机制来处理或补全配置，这在Go项目开发中是一个非常有用的步骤。</p>
<p>**最后，**调用<code v-pre>PrepareRun</code>方法，进行HTTP/GRPC服务器启动前的准备。在准备函数中，我们可以做各种初始化操作，例如初始化数据库，安装业务相关的Gin中间件、RESTful API路由等。</p>
<p>完成HTTP/GRPC服务器启动前的准备之后，调用<code v-pre>Run</code>方法启动HTTP/GRPC服务。在<code v-pre>Run</code>方法中，分别启动了GRPC和HTTP服务。</p>
<p>可以看到，整个iam-apiserver的软件框架是比较清晰的。</p>
<p>服务启动后，就可以处理请求了。所以接下来，我们再来看下iam-apiserver的RESTAPI请求处理流程。</p>
<h3 id="iam-apiserver-的rest-api请求处理流程" tabindex="-1"><a class="header-anchor" href="#iam-apiserver-的rest-api请求处理流程" aria-hidden="true">#</a> iam-apiserver 的REST API请求处理流程</h3>
<p>iam-apiserver的请求处理流程也是清晰、规范的，具体流程如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202302282203119.jpeg" alt="img"></p>
<p>结合上面这张图，我们来看下iam-apiserver 的REST API请求处理流程，来帮你更好地理解iam-apiserver是如何处理HTTP请求的。</p>
<p>**首先，**我们通过API调用（<code v-pre>&lt;HTTP Method&gt; + &lt;HTTP Request Path&gt;</code>）请求iam-apiserver提供的RESTful API接口。</p>
<p>**接着，**Gin Web框架接收到HTTP请求之后，会通过认证中间件完成请求的认证，iam-apiserver提供了Basic认证和Bearer认证两种认证方式。</p>
<p>**认证****通过后，**请求会被我们加载的一系列中间件所处理，例如跨域、RequestID、Dump等中间件。</p>
<p>**最后，**根据<code v-pre>&lt;HTTP Method&gt; + &lt;HTTP Request Path&gt;</code>进行路由匹配。</p>
<p>举个例子，假设我们请求的RESTful API是<code v-pre>POST + /v1/secrets</code>，Gin Web框架会根据HTTP Method和HTTP Request Path，查找注册的Controllers，最终匹配到<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/controller/v1/secret/create.go" target="_blank" rel="noopener noreferrer">secretController.Create<ExternalLinkIcon/></a>Controller。在Create Controller中，我们会依次执行请求参数解析、请求参数校验、调用业务层的方法创建Secret、处理业务层的返回结果，最后返回最终的HTTP请求结果。</p>
<h3 id="iam-apiserver代码架构" tabindex="-1"><a class="header-anchor" href="#iam-apiserver代码架构" aria-hidden="true">#</a> iam-apiserver代码架构</h3>
<p>iam-apiserver代码设计遵循简洁架构设计，一个简洁架构具有以下5个特性：</p>
<ul>
<li>**独立于框架：**该架构不会依赖于某些功能强大的软件库存在。这可以让你使用这样的框架作为工具，而不是让你的系统陷入到框架的约束中。</li>
<li>**可测试性：**业务规则可以在没有UI、数据库、Web服务或其他外部元素的情况下进行测试，在实际的开发中，我们通过Mock来解耦这些依赖。</li>
<li>**独立于UI ：**在无需改变系统其他部分的情况下，UI可以轻松地改变。例如，在没有改变业务规则的情况下，Web UI可以替换为控制台UI。</li>
<li>**独立于数据库：**你可以用Mongo、Oracle、Etcd或者其他数据库来替换MariaDB，你的业务规则不要绑定到数据库。</li>
<li>**独立于外部媒介：**实际上，你的业务规则可以简单到根本不去了解外部世界。</li>
</ul>
<p>所以，基于这些约束，每一层都必须是独立的和可测试的。iam-apiserver代码架构分为4层：模型层（Models）、控制层（Controller）、业务层 （Service）、仓库层（Repository）。从控制层、业务层到仓库层，从左到右层级依次加深。模型层独立于其他层，可供其他层引用。如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202302282203289.jpeg" alt="img"></p>
<p>层与层之间导入包时，都有严格的导入关系，这可以防止包的循环导入问题。导入关系如下：</p>
<ul>
<li>模型层的包可以被仓库层、业务层和控制层导入；</li>
<li>控制层能够导入业务层和仓库层的包。这里需要注意，如果没有特殊需求，控制层要避免导入仓库层的包，控制层需要完成的业务功能都通过业务层来完成。这样可以使代码逻辑更加清晰、规范。</li>
<li>业务层能够导入仓库层的包。</li>
</ul>
<p>接下来，我们就来详细看下每一层所完成的功能，以及其中的一些注意点。</p>
<p><strong>模型层（Models）</strong></p>
<p>模型层在有些软件架构中也叫做实体层（Entities），模型会在每一层中使用，在这一层中存储对象的结构和它的方法。IAM项目模型层中的模型存放在<a href="https://github.com/marmotedu/api/tree/master/apiserver/v1" target="_blank" rel="noopener noreferrer">github.com/marmotedu/api/apiserver/v1<ExternalLinkIcon/></a>目录下，定义了<code v-pre>User</code>、<code v-pre>UserList</code>、<code v-pre>Secret</code>、<code v-pre>SecretList</code>、<code v-pre>Policy</code>、<code v-pre>PolicyList</code>、<code v-pre>AuthzPolicy</code>模型及其方法。例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Secret <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  <span class="token comment">// May add TypeMeta in the future.</span>
  <span class="token comment">// metav1.TypeMeta `json:",inline"`</span>

  <span class="token comment">// Standard object's metadata.</span>
  metav1<span class="token punctuation">.</span>ObjectMeta <span class="token string">`       json:"metadata,omitempty"`</span>
  Username          <span class="token builtin">string</span> <span class="token string">`json:"username"           gorm:"column:username"  validate:"omitempty"`</span>
  SecretID          <span class="token builtin">string</span> <span class="token string">`json:"secretID"           gorm:"column:secretID"  validate:"omitempty"`</span>
  SecretKey         <span class="token builtin">string</span> <span class="token string">`json:"secretKey"          gorm:"column:secretKey" validate:"omitempty"`</span>

  <span class="token comment">// Required: true</span>
  Expires     <span class="token builtin">int64</span>  <span class="token string">`json:"expires"     gorm:"column:expires"     validate:"omitempty"`</span>
  Description <span class="token builtin">string</span> <span class="token string">`json:"description" gorm:"column:description" validate:"description"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之所以将模型层的模型存放在<code v-pre>github.com/marmotedu/api</code>项目中，而不是<code v-pre>github.com/marmotedu/iam</code>项目中，是为了让这些模型能够被其他项目使用。例如，iam的模型可以被<code v-pre>github.com/marmotedu/shippy</code>应用导入。同样，shippy应用的模型也可以被iam项目导入，导入关系如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202302282204303.jpeg" alt="img"></p>
<p>上面的依赖关系都是单向的，依赖关系清晰，不存在循环依赖的情况。</p>
<p>要增加shippy的模型定义，只需要在api目录下创建新的目录即可。例如，shippy应用中有一个vessel服务，其模型所在的包可以为<code v-pre>github.com/marmotedu/api/vessel</code>。</p>
<p>另外，这里的模型既可以作为数据库模型，又可以作为API接口的请求模型（入参、出参）。如果我们能够确保<strong>创建资源时的属性</strong>、<strong>资源保存在数据库中的属性</strong>、<strong>返回资源的属性</strong>三者一致，就可以使用同一个模型。通过使用同一个模型，可以使我们的代码更加简洁、易维护，并能提高开发效率。如果这三个属性有差异，你可以另外新建模型来适配。</p>
<p><strong>仓库层（Repository)</strong></p>
<p>仓库层用来跟数据库/第三方服务进行CURD交互，作为应用程序的数据引擎进行应用数据的输入和输出。这里需要注意，仓库层仅对数据库/第三方服务执行CRUD操作，不封装任何业务逻辑。</p>
<p>仓库层也负责选择应用中将要使用什么样的数据库，可以是MySQL、MongoDB、MariaDB、Etcd等。无论使用哪种数据库，都要在这层决定。仓库层依赖于连接数据库或其他第三方服务（如果存在的话）。</p>
<p>这一层也会起到数据转换的作用：将从数据库/微服务中获取的数据转换为控制层、业务层能识别的数据结构，将控制层、业务层的数据格式转换为数据库或微服务能识别的数据格式。</p>
<p>iam-apiserver的仓库层位于<a href="https://github.com/marmotedu/iam/tree/v1.0.3/internal/apiserver/store/mysql" target="_blank" rel="noopener noreferrer">internal/apiserver/store/mysql<ExternalLinkIcon/></a>目录下，里面的方法用来跟MariaDB进行交互，完成CURD操作，例如，从数据库中获取密钥：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>secrets<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> username<span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>GetOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    secret <span class="token operator">:=</span> <span class="token operator">&amp;</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">{</span><span class="token punctuation">}</span>
    err <span class="token operator">:=</span> s<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"username = ? and name= ?"</span><span class="token punctuation">,</span> username<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>secret<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> gorm<span class="token punctuation">.</span>ErrRecordNotFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrSecretNotFound<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> secret<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>业务层 (Service)</strong></p>
<p>业务层主要用来完成业务逻辑处理，我们可以把所有的业务逻辑处理代码放在业务层。业务层会处理来自控制层的请求，并根据需要请求仓库层完成数据的CURD操作。业务层功能如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/61/b6/6103c58d837fd81769977bc3c947ffb6.jpg?wh=1796x1236" target="_blank" rel="noopener noreferrer"><img src="http://sm.cubxxw.com/sm202302282204294.jpeg" alt="img"><ExternalLinkIcon/></a></p>
<p>iam-apiserver的业务层位于<a href="https://github.com/marmotedu/iam/tree/v1.0.3/internal/apiserver/service" target="_blank" rel="noopener noreferrer">internal/apiserver/service<ExternalLinkIcon/></a>目录下。下面是iam-apiserver业务层中，用来创建密钥的函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>secretService<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> secret <span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> secret<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，业务层最终请求仓库层的<code v-pre>s.store</code>的<code v-pre>Create</code>方法，将密钥信息保存在MariaDB数据库中。</p>
<p><strong>控制层（Controller）</strong></p>
<p>控制层接收HTTP请求，并进行参数解析、参数校验、逻辑分发处理、请求返回这些操作。控制层会将逻辑分发给业务层，业务层处理后返回，返回数据在控制层中被整合再加工，最终返回给请求方。控制层相当于实现了业务路由的功能。具体流程如下图所示：</p>
<p><img src="http://sm.cubxxw.com/sm202302282206659.jpeg" alt="img"></p>
<p>这里我有个建议，不要在控制层写复杂的代码，如果需要，请将这些代码分发到业务层或其他包中。</p>
<p>iam-apiserver的控制层位于<a href="https://github.com/marmotedu/iam/tree/v1.0.3/internal/apiserver/controller" target="_blank" rel="noopener noreferrer">internal/apiserver/controller<ExternalLinkIcon/></a>目录下。下面是iam-apiserver控制层中创建密钥的代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>SecretHandler<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">L</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">"create secret function called."</span><span class="token punctuation">)</span>

  <span class="token keyword">var</span> r v1<span class="token punctuation">.</span>Secret

  <span class="token keyword">if</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrBind<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> errs <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">len</span><span class="token punctuation">(</span>errs<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrValidation<span class="token punctuation">,</span> errs<span class="token punctuation">.</span><span class="token function">ToAggregate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  username <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span>middleware<span class="token punctuation">.</span>UsernameKey<span class="token punctuation">)</span>

  secrets<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>srv<span class="token punctuation">.</span><span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">List</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> username<span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">{</span>
    Offset<span class="token punctuation">:</span> pointer<span class="token punctuation">.</span><span class="token function">ToInt64</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    Limit<span class="token punctuation">:</span>  pointer<span class="token punctuation">.</span><span class="token function">ToInt64</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> secrets<span class="token punctuation">.</span>TotalCount <span class="token operator">>=</span> maxSecretCount <span class="token punctuation">{</span>
    core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrReachMaxCount<span class="token punctuation">,</span> <span class="token string">"secret count: %d"</span><span class="token punctuation">,</span> secrets<span class="token punctuation">.</span>TotalCount<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// must reassign username</span>
  r<span class="token punctuation">.</span>Username <span class="token operator">=</span> username

  <span class="token keyword">if</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>srv<span class="token punctuation">.</span><span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token operator">&amp;</span>r<span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> err<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上面的代码完成了以下操作：</strong></p>
<ol>
<li>解析HTTP请求参数。</li>
<li>进行参数验证，这里可以添加一些业务性质的参数校验，例如：<code v-pre>secrets.TotalCount &gt;= maxSecretCount</code>。</li>
<li>调用业务层<code v-pre>s.srv</code>的<code v-pre>Create</code>方法，完成密钥的创建。</li>
<li>返回HTTP请求参数。</li>
</ol>
<p>上面，我们介绍了iam-apiserver采用的4层结构，接下来我们再看看<strong>每一层之间是如何通信的</strong>。</p>
<p>除了模型层，控制层、业务层、仓库层之间都是通过接口进行通信的。通过接口通信，一方面可以使相同的功能支持不同的实现（也就是说具有插件化能力），另一方面也使得每一层的代码变得可测试。</p>
<p>这里，我用创建密钥API请求的例子，来给你讲解下层与层之间是如何进行通信的。</p>
<p><strong>首先，来看下控制层如何跟业务层进行通信。</strong></p>
<p>对密钥的请求处理都是通过SecretController提供的方法来处理的，创建密钥调用的是它的<code v-pre>Create</code>方法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>SecretController<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>srv<span class="token punctuation">.</span><span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token operator">&amp;</span>r<span class="token punctuation">,</span> metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    core<span class="token punctuation">.</span><span class="token function">WriteResponse</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> err<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>Create</code>方法中，调用了<code v-pre>s.srv.Secrets().Create()</code>来创建密钥，<code v-pre>s.srv</code>是一个接口类型，定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> Service <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Users</span><span class="token punctuation">(</span><span class="token punctuation">)</span> UserSrv
    <span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> SecretSrv
    <span class="token function">Policies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> PolicySrv
<span class="token punctuation">}</span>

<span class="token keyword">type</span> SecretSrv <span class="token keyword">interface</span> <span class="token punctuation">{</span>                                                             
    <span class="token function">Create</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> secret <span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">)</span> <span class="token builtin">error</span>    
    <span class="token function">Update</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> secret <span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>UpdateOptions<span class="token punctuation">)</span> <span class="token builtin">error</span>            
    <span class="token function">Delete</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> username<span class="token punctuation">,</span> secretID <span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>DeleteOptions<span class="token punctuation">)</span> <span class="token builtin">error</span>                        
    <span class="token function">DeleteCollection</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> username <span class="token builtin">string</span><span class="token punctuation">,</span> secretIDs <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>DeleteOptions<span class="token punctuation">)</span> <span class="token builtin">error</span>    
    <span class="token function">Get</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> username<span class="token punctuation">,</span> secretID <span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>GetOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>    
    <span class="token function">List</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> username <span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>SecretList<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，控制层通过业务层提供的<code v-pre>Service</code>接口类型，剥离了业务层的具体实现。业务层的Service接口类型提供了<code v-pre>Secrets()</code>方法，该方法返回了一个实现了<code v-pre>SecretSrv</code>接口的实例。在控制层中，通过调用该实例的<code v-pre>Create(ctx context.Context, secret *v1.Secret, opts metav1.CreateOptions) error</code>方法来完成密钥的创建。至于业务层是如何创建密钥的，控制层不需要知道，也就是说创建密钥可以有多种实现。</p>
<p>这里使用到了设计模式中的<strong>工厂方法模式</strong>。<code v-pre>Service</code>是工厂接口，里面包含了一系列创建具体业务层对象的工厂函数：<code v-pre>Users()</code>、<code v-pre>Secrets()</code>、<code v-pre>Policies()</code>。通过工厂方法模式，不仅隐藏了业务层对象的创建细节，而且还可以很方便地在<code v-pre>Service</code>工厂接口实现方法中添加新的业务层对象。</p>
<p>例如，我们想新增一个<code v-pre>Template</code>业务层对象，用来在iam-apiserver中预置一些策略模板，可以这么来加：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> Service <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Users</span><span class="token punctuation">(</span><span class="token punctuation">)</span> UserSrv
    <span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> SecretSrv
    <span class="token function">Policies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> PolicySrv
    <span class="token function">Templates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> TemplateSrv
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>service<span class="token punctuation">)</span> <span class="token function">Templates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> TemplateSrv <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">newTemplates</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，新建一个<code v-pre>template.go</code>文件：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> TemplateSrv <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Create</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> template <span class="token operator">*</span>v1<span class="token punctuation">.</span>Template<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">)</span> <span class="token builtin">error</span>
    <span class="token comment">// Other methods</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> templateService <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    store store<span class="token punctuation">.</span>Factory
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token boolean">_</span> TemplateSrv <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>templateService<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">newTemplates</span><span class="token punctuation">(</span>srv <span class="token operator">*</span>service<span class="token punctuation">)</span> <span class="token operator">*</span>TemplateService <span class="token punctuation">{</span>
    <span class="token comment">// more create logic</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>templateService<span class="token punctuation">{</span>store<span class="token punctuation">:</span> srv<span class="token punctuation">.</span>store<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>templateService<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> template <span class="token operator">*</span>v1<span class="token punctuation">.</span>Template<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token comment">// normal code</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们通过以下三步新增了一个业务层对象：</p>
<ol>
<li>在<code v-pre>Service</code>接口定义中，新增了一个入口：<code v-pre>Templates() TemplateSrv</code>。</li>
<li>在<code v-pre>service.go</code>文件中，新增了一个函数：<code v-pre>Templates()</code>。</li>
<li>新建了<code v-pre>template.go</code>文件，在<code v-pre>template.go</code>中定义了templateService结构体，并为它实现了<code v-pre>TemplateSrv</code>接口。</li>
</ol>
<p>可以看到，我们新增的Template业务对象的代码几乎都闭环在<code v-pre>template.go</code>文件中。对已有的<code v-pre>Service</code>工厂接口的创建方法，除了新增一个工厂方法<code v-pre>Templates() TemplateSrv</code>外，没有其他任何入侵。这样做可以避免影响已有业务。</p>
<p>在实际项目开发中，你也有可能会想到下面这种错误的创建方式：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 错误方法一</span>
<span class="token keyword">type</span> Service <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    UserSrv
    SecretSrv
    PolicySrv
    TemplateSrv
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的创建方式中，我们如果想创建User和Secret，那只能定义两个不同的方法：CreateUser和 CreateSecret，远没有在User和Secret各自的域中提供同名的Create方法来得优雅。</p>
<p>IAM项目中还有其他地方也使用了工厂方法模式，例如<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/store/store.go#L12" target="_blank" rel="noopener noreferrer">Factory<ExternalLinkIcon/></a>工厂接口。</p>
<p><strong>再来看下业务层和仓库层是如何通信的。</strong></p>
<p>业务层和仓库层也是通过接口来通信的。例如，在业务层中创建密钥的代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>secretService<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> secret <span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> secret<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Create</code>方法中调用了<code v-pre>s.store.Secrets().Create()</code>方法来将密钥保存到数据库中。<code v-pre>s.store</code>是一个接口类型，定义如下：</p>
<div class="language-gp ext-gp line-numbers-mode"><pre v-pre class="language-gp"><code>type Factory interface {
    Users() UserStore
    Secrets() SecretStore
    Policies() PolicyStore
    Close() error
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>业务层与仓库层的通信实现，和控制层与业务层的通信实现类似，所以这里不再详细介绍。</p>
<p>到这里我们知道了，控制层、业务层和仓库层之间是通过接口来通信的。通过接口通信有一个好处，就是可以让各层变得可测。那接下来，我们就来看下<strong>如何测试各层的代码</strong>。因为<strong>第38讲</strong>和<strong>第39讲</strong>会详细介绍如何测试Go代码，所以这里只介绍下测试思路。</p>
<ol>
<li>模型层</li>
</ol>
<p>因为模型层不依赖其他任何层，我们只需要测试其中定义的结构及其函数和方法即可。</p>
<ol>
<li>控制层</li>
</ol>
<p>控制层依赖于业务层，意味着该层需要业务层来支持测试。你可以通过<a href="https://github.com/golang/mock" target="_blank" rel="noopener noreferrer">golang/mock<ExternalLinkIcon/></a>来mock业务层，测试用例可参考<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/controller/v1/user/create_test.go#L19" target="_blank" rel="noopener noreferrer">TestUserController_Create<ExternalLinkIcon/></a>。</p>
<ol>
<li>业务层</li>
</ol>
<p>因为该层依赖于仓库层，意味着该层需要仓库层来支持测试。我们有两种方法来模拟仓库层：</p>
<ul>
<li>通过<code v-pre>golang/mock</code>来mock仓库层。</li>
<li>自己开发一个fake仓库层。</li>
</ul>
<p>使用<code v-pre>golang/mock</code>的测试用例，你可以参考<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/service/v1/secret_test.go#L19" target="_blank" rel="noopener noreferrer">Test_secretService_Create<ExternalLinkIcon/></a>。</p>
<p>fake的仓库层可以参考<a href="https://github.com/marmotedu/iam/tree/v1.0.4/internal/apiserver/store/fake" target="_blank" rel="noopener noreferrer">fake<ExternalLinkIcon/></a>，使用该fake仓库层进行测试的测试用例为<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/service/v1/user_test.go#L76" target="_blank" rel="noopener noreferrer"> Test_userService_List<ExternalLinkIcon/></a>。</p>
<ol>
<li>仓库层</li>
</ol>
<p>仓库层依赖于数据库，如果调用了其他微服务，那还会依赖第三方服务。我们可以通过<a href="https://github.com/DATA-DOG/go-sqlmock" target="_blank" rel="noopener noreferrer">sqlmock<ExternalLinkIcon/></a>来模拟数据库连接，通过<a href="https://github.com/jarcoal/httpmock" target="_blank" rel="noopener noreferrer">httpmock<ExternalLinkIcon/></a>来模拟HTTP请求。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲，我主要介绍了iam-apiserver的功能和使用方法，以及它的代码实现。iam-apiserver是一个Web服务，提供了REST API来完成用户、密钥、策略三种REST资源的增删改查。我们可以通过cURL、Insomnia等工具，来完成REST API请求。</p>
<p>iam-apiserver包含了3种配置：Options配置、应用配置、HTTP/GRPC服务配置。这三种配置分别用来构建命令行参数、应用和HTTP/GRPC服务。</p>
<p>iam-apiserver在启动时，会先构建应用框架，接着会设置应用选项，然后对应用进行初始化，最后创建HTTP/GRPC服务的配置和实例，最终启动HTTP/GRPC服务。</p>
<p>服务启动之后，就可以接收HTTP请求了。一个HTTP请求会先进行认证，接着会被注册的中间件处理，然后，会根据<code v-pre>(HTTP Method, HTTP Request Path)</code>匹配到处理函数。在处理函数中，会解析请求参数、校验参数、调用业务逻辑处理函数，最终返回请求结果。</p>
<p>iam-apiserver采用了简洁架构，整个应用分为4层：模型层、控制层、业务层和仓库层。模型层存储对象的结构和它的方法；仓库层用来跟数据库/第三方服务进行CURD交互；业务层主要用来完成业务逻辑处理；控制层接收HTTP请求，并进行参数解析、参数校验、逻辑分发处理、请求返回操作。控制层、业务层、仓库层之间通过接口通信，通过接口通信可以使相同的功能支持不同的实现，并使每一层的代码变得可测试。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '19.md' style='float:left'>⬆️上一节🔗  </a><a href = '21.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


