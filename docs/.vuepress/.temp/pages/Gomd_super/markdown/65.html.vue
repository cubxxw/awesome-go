<template><div><h1 id="beego框架" tabindex="-1"><a class="header-anchor" href="#beego框架" aria-hidden="true">#</a> beego框架</h1>
<p>[toc]</p>
<h2 id="beego框架-1" tabindex="-1"><a class="header-anchor" href="#beego框架-1" aria-hidden="true">#</a> beego框架</h2>
<p>beego 是免费、开源的软件，这意味着任何人都可以为其开发和进步贡献力量。beego 源代码目前托管在 Github 上，Github 提供非常容易的途径 fork 项目和合并你的贡献。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>beego 或许是我们走进云原生的第一步~</p>
<ul>
<li><a href="https://github.com/beego/beego" target="_blank" rel="noopener noreferrer">github地址<ExternalLinkIcon/></a></li>
<li><a href="beego.vip">官网</a></li>
</ul>
</div>
<p><strong>架构图：</strong></p>
<p><img src="http://sm.cubxxw.com/smbeego" alt="img"></p>
<div class="custom-container tip"><p class="custom-container-title">beego由四部分组成</p>
<ol>
<li>基础模块：包括log模块、config模块、governor模块；</li>
<li>Task：用于运行定时任务或周期性任务；</li>
<li>客户端：包括ORM模块、httplib模块、缓存模块；</li>
<li>服务器：包括网页模块。未来我们会支持gRPC；</li>
</ol>
</div>
<p><strong>web应用程序：</strong></p>
<p><img src="http://sm.cubxxw.com/smimage-20221120220809190.png" alt="image-20221120220809190"></p>
<h2 id="beego-的安装" tabindex="-1"><a class="header-anchor" href="#beego-的安装" aria-hidden="true">#</a> beego 的安装</h2>
<p>beego 的安装是典型的 Go 安装包的形式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go get github.com/astaxie/beego
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常见问题：</p>
<ul>
<li>
<p>git 没有安装，请自行安装不同平台的 git，如何安装请自行搜索。</p>
</li>
<li>
<p>git https 无法获取，请配置本地的 git，关闭 https 验证：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  git config --global http.sslVerify false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>无法上网怎么安装 beego，目前没有好的办法，接下来我们会整理一个全包下载，每次发布正式版本都会提供这个全包下载，包含依赖包。</p>
</li>
</ul>
<h2 id="beego-的升级" tabindex="-1"><a class="header-anchor" href="#beego-的升级" aria-hidden="true">#</a> beego 的升级</h2>
<p>beego 升级分为 go 方式升级和源码下载升级：</p>
<ul>
<li>
<p>Go 升级,通过该方式用户可以升级 beego 框架，强烈推荐该方式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  go get -u github.com/astaxie/beego
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>源码下载升级，用户访问 <code v-pre>https://github.com/astaxie/beego</code> ,下载源码，然后覆盖到 <code v-pre>$GOPATH/src/github.com/astaxie/beego</code> 目录，然后通过本地执行安装就可以升级了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  go install     github.com/astaxie/beego
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="beego-的-git-分支" tabindex="-1"><a class="header-anchor" href="#beego-的-git-分支" aria-hidden="true">#</a> beego 的 git 分支</h2>
<p>beego 的 master 分支为相对稳定版本，dev 分支为开发者版本。大致流程如下：</p>
<p><img src="http://sm.cubxxw.com/smryeoKDnVSL2NMbt.png" alt="img"></p>
<h2 id="快速入手" tabindex="-1"><a class="header-anchor" href="#快速入手" aria-hidden="true">#</a> 快速入手</h2>
<h4 id="create-hello-directory-cd-hello-directory" tabindex="-1"><a class="header-anchor" href="#create-hello-directory-cd-hello-directory" aria-hidden="true">#</a> Create <code v-pre>hello</code> directory, cd <code v-pre>hello</code> directory</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir hello
cd hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="init-module" tabindex="-1"><a class="header-anchor" href="#init-module" aria-hidden="true">#</a> Init module</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go mod init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="download-and-install" tabindex="-1"><a class="header-anchor" href="#download-and-install" aria-hidden="true">#</a> Download and install</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go get github.com/beego/beego/v2@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="create-file-hello-go" tabindex="-1"><a class="header-anchor" href="#create-file-hello-go" aria-hidden="true">#</a> Create file <code v-pre>hello.go</code></h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"github.com/beego/beego/v2/server/web"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	web<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="build-and-run" tabindex="-1"><a class="header-anchor" href="#build-and-run" aria-hidden="true">#</a> Build and run</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go build hello.go
./hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="go-to-http-localhost-8080" tabindex="-1"><a class="header-anchor" href="#go-to-http-localhost-8080" aria-hidden="true">#</a> Go to <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080<ExternalLinkIcon/></a></h4>
<p>Congratulations! You've just built your first <strong>beego</strong> app.</p>
<p><img src="http://sm.cubxxw.com/smimage-20221120222250366.png" alt="image-20221120222250366"></p>
<h2 id="bee工具的使用" tabindex="-1"><a class="header-anchor" href="#bee工具的使用" aria-hidden="true">#</a> bee工具的使用</h2>
<p>bee 工具是一个为了协助快速开发 beego 项目而创建的项目，通过 bee 您可以很容易的进行 beego 项目的 <strong>创建、热编译、开发、测试、和部署</strong> 。</p>
<h2 id="bee-工具的安装" tabindex="-1"><a class="header-anchor" href="#bee-工具的安装" aria-hidden="true">#</a> bee 工具的安装</h2>
<p>您可以通过如下的方式安装 bee 工具：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span>beego<span class="token operator">/</span>bee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完之后，<code v-pre>bee</code> 可执行文件默认存放在 <code v-pre>$GOPATH/bin</code> 里面，所以您需要把 <code v-pre>$GOPATH/bin</code> 添加到您的环境变量中，才可以进行下一步。</p>
<blockquote>
<p>如何添加环境变量，请自行搜索 如果你本机设置了 <code v-pre>GOBIN</code>，那么上面的命令就会安装到 <code v-pre>GOBIN</code> 下，请添加 GOBIN 到你的环境变量中</p>
</blockquote>
<h2 id="bee-工具命令详解" tabindex="-1"><a class="header-anchor" href="#bee-工具命令详解" aria-hidden="true">#</a> bee 工具命令详解</h2>
<p>我们在命令行输入 <code v-pre>bee</code>，可以看到帮助的信息</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bee 
bee version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new-命令" tabindex="-1"><a class="header-anchor" href="#new-命令" aria-hidden="true">#</a> new 命令</h3>
<p><code v-pre>new</code> 命令是新建一个 Web 项目，我们在命令行下执行 <code v-pre>bee new &lt;项目名&gt;</code> 就可以创建一个新的项目。但是注意该命令必须在 <code v-pre>$GOPATH/src</code> 下执行。最后会在 <code v-pre>$GOPATH/src</code> 相应目录下生成如下目录结构的项目：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>bee new myproject
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Creating application<span class="token punctuation">..</span>.
/gopath/src/myproject/
/gopath/src/myproject/conf/
/gopath/src/myproject/controllers/
/gopath/src/myproject/models/
/gopath/src/myproject/static/
/gopath/src/myproject/static/js/
/gopath/src/myproject/static/css/
/gopath/src/myproject/static/img/
/gopath/src/myproject/views/
/gopath/src/myproject/conf/app.conf
/gopath/src/myproject/controllers/default.go
/gopath/src/myproject/views/index.tpl
/gopath/src/myproject/main.go
<span class="token number">13</span>-11-25 09:50:39 <span class="token punctuation">[</span>SUCC<span class="token punctuation">]</span> New application successfully created<span class="token operator">!</span>
myproject
├── conf
│   └── app.conf
├── controllers
│   └── default.go
├── main.go
├── models
├── routers
│   └── router.go
├── static
│   ├── css
│   ├── img
│   └── js
├── tests
│   └── default_test.go
└── views
    └── index.tpl

<span class="token number">8</span> directories, <span class="token number">4</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers" aria-hidden="true">#</a> controllers</h3>
<div class="custom-container warning"><p class="custom-container-title">controllers</p>
<p>controllers里面内嵌了一个结构体，将 beego的controllers，基于此实现自己的 <code v-pre>Get()</code> 等…</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> controllers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"github.com/astaxie/beego"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> MainController <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	beego<span class="token punctuation">.</span>Controller
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>MainController<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>Data<span class="token punctuation">[</span><span class="token string">"Website"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"beego.me"</span>
	c<span class="token punctuation">.</span>Data<span class="token punctuation">[</span><span class="token string">"Email"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"astaxie@gmail.com"</span>
	c<span class="token punctuation">.</span>TplName <span class="token operator">=</span> <span class="token string">"index.tpl"</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不仅如此，或许我们可以添加自己的 Post()</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>MainController<span class="token punctuation">)</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>Data<span class="token punctuation">[</span><span class="token string">"Website"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"beego.me"</span>
	c<span class="token punctuation">.</span>Data<span class="token punctuation">[</span><span class="token string">"Email"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"3293172751@qq.com"</span>
	c<span class="token punctuation">.</span>TplName <span class="token operator">=</span> <span class="token string">"index.tpl"</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>MainController<span class="token punctuation">)</span> <span class="token function">Put</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>Ctx<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">"put"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>MainController<span class="token punctuation">)</span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>Ctx<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">"delete"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>MainController<span class="token punctuation">)</span> <span class="token function">Head</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span>Ctx<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>controller 逻辑：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> controllers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
        <span class="token string">"github.com/astaxie/beego"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> MainController <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        beego<span class="token punctuation">.</span>Controller
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MainController<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        this<span class="token punctuation">.</span>Data<span class="token punctuation">[</span><span class="token string">"Website"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"beego.me"</span>
        this<span class="token punctuation">.</span>Data<span class="token punctuation">[</span><span class="token string">"Email"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"astaxie@gmail.com"</span>
        this<span class="token punctuation">.</span>TplName <span class="token operator">=</span> <span class="token string">"index.tpl"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、声明了一个控制器 <code v-pre>MainController</code>，这个控制器里面内嵌了 <code v-pre>beego.Controller</code>，即Go 的嵌入方式，也就是 <code v-pre>MainController</code> 自动拥有了所有 <code v-pre>beego.Controller</code> 的方法。而 <code v-pre>beego.Controller</code> 拥有很多方法，其中包括 <code v-pre>Init</code>、<code v-pre>Prepare</code>、<code v-pre>Post</code>、<code v-pre>Get</code>、<code v-pre>Delete</code>、<code v-pre>Head</code>等方法。可以通过重写的方式来实现这些方法，以上例子重写了 <code v-pre>Get</code> 方法。</p>
<p>2、beego 是一个 RESTful 的框架，请求默认是执行对应 <code v-pre>req.Method</code> 的方法。例如浏览器的是 <code v-pre>GET</code> 请求，那么默认就会执行 <code v-pre>MainController</code> 下的 <code v-pre>Get</code> 方法。（用户可以改变这个行为，通过注册自定义的函数名）。</p>
<p>3、获取数据，赋值到 <code v-pre>this.Data</code> 中，这是一个用来存储输出数据的 map。</p>
<p>4、渲染模板，<code v-pre>this.TplName</code> 就是需要渲染的模板，这里指定了 <code v-pre>index.tpl</code>，如果用户不设置该参数，那么默认会去到模板目录的 <code v-pre>Controller/&lt;方法名&gt;.tpl</code> 查找，例如上面的方法会去 <code v-pre>maincontroller/get.tpl</code>(文件、文件夹必须小写)。用户设置了模板之后系统会自动的调用 <code v-pre>Render</code> 函数（这个函数是在 beego.Controller 中实现的），所以无需用户自己来调用渲染。</p>
<p>5、如果不使用模板可以直接输出：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>MainController<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        this<span class="token punctuation">.</span>Ctx<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="api-命令" tabindex="-1"><a class="header-anchor" href="#api-命令" aria-hidden="true">#</a> api 命令</h3>
<p>上面的 <code v-pre>new</code> 命令是用来新建 Web 项目，不过很多用户使用 beego 来开发 API 应用。所以这个 <code v-pre>api</code> 命令就是用来创建 API 应用的：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>bee api apiproject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个项目的目录结构如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>apiproject
├── conf
│   └── app.conf
├── controllers
│   └── object.go
│   └── user.go
├── docs
│   └── doc.go
├── main.go
├── models
│   └── object.go
│   └── user.go
├── routers
│   └── router.go
└── tests
    └── default_test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的目录我们可以看到和 Web 项目相比，少了 static 和 views 目录，多了一个 test 模块，用来做单元测试的。</p>
<p>同时，该命令还支持一些自定义参数自动连接数据库创建相关 model 和 controller: <code v-pre>bee api [appname] [-tables=&quot;&quot;] [-driver=mysql] [-conn=&quot;root:&lt;password&gt;@tcp(127.0.0.1:3306)/test&quot;]</code> 如果 conn 参数为空则创建一个示例项目，否则将基于链接信息链接数据库创建项目。</p>
<h3 id="run-命令" tabindex="-1"><a class="header-anchor" href="#run-命令" aria-hidden="true">#</a> run 命令</h3>
<p>我们在开发 Go 项目的时候最大的问题是经常需要自己手动去编译再运行，<code v-pre>bee run</code> 命令是监控 beego 的项目，通过 <a href="https://github.com/howeyc/fsnotify" target="_blank" rel="noopener noreferrer">fsnotify<ExternalLinkIcon/></a>监控文件系统。但是注意该命令必须在 <code v-pre>$GOPATH/src/appname</code> 下执行。 这样我们在开发过程中就可以实时的看到项目修改之后的效果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>bee run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们打开浏览器就可以看到效果 <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080/<ExternalLinkIcon/></a></p>
<div class="custom-container warning"><p class="custom-container-title">bee run 做了什么</p>
<ul>
<li>
<p>解析配置文件</p>
<p>beego 会自动解析在 conf 目录下面的配置文件 <code v-pre>app.conf</code>，通过修改配置文件相关的属性，我们可以定义：开启的端口，是否开启 session，应用名称等信息。</p>
</li>
<li>
<p>执行用户的hookfunc</p>
<p>beego会执行用户注册的hookfunc，默认的已经存在了注册mime，用户可以通过函数<code v-pre>AddAPPStartHook</code>注册自己的启动函数。</p>
</li>
<li>
<p>是否开启 session</p>
<p>会根据上面配置文件的分析之后判断是否开启 session，如果开启的话就初始化全局的 session。</p>
</li>
<li>
<p>是否编译模板</p>
<p>beego 会在启动的时候根据配置把 views 目录下的所有模板进行预编译，然后存在 map 里面，这样可以有效的提高模板运行的效率，无需进行多次编译。</p>
</li>
<li>
<p>是否开启文档功能</p>
<p>根据EnableDocs配置判断是否开启内置的文档路由功能</p>
</li>
<li>
<p>是否启动管理模块</p>
<p>beego 目前做了一个很酷的模块，应用内监控模块，会在 8088 端口做一个内部监听，我们可以通过这个端口查询到 QPS、CPU、内存、GC、goroutine、thread 等统计信息。</p>
</li>
<li>
<p>监听服务端口</p>
<p>这是最后一步也就是我们看到的访问 8080 看到的网页端口，内部其实调用了 <code v-pre>ListenAndServe</code>，充分利用了 goroutine 的优势，一旦 run 起来之后，我们的服务就监听在两个端口了，一个服务端口 8080 作为对外服务，另一个 8088 端口实行对内监控。</p>
</li>
</ul>
</div>
<p><strong>其他热加载：</strong></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>同样也有 <code v-pre>air</code> 等热加载工具。</p>
</div>
<h3 id="pack-命令" tabindex="-1"><a class="header-anchor" href="#pack-命令" aria-hidden="true">#</a> pack 命令</h3>
<p><code v-pre>pack</code> 目录用来发布应用的时候打包，会把项目打包成 zip 包，这样我们部署的时候直接把打包之后的项目上传，解压就可以部署了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bee pack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以看到目录下有如下的压缩文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>-a---          <span class="token number">2022</span>/11/21    <span class="token number">16</span>:56       <span class="token number">16893719</span> beego.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="bale-命令" tabindex="-1"><a class="header-anchor" href="#bale-命令" aria-hidden="true">#</a> bale 命令</h3>
<p>用来压缩所有的静态文件变成一个变量申明文件，全部编译到二进制文件里面，用户发布的时候携带静态文件，包括 js、css、img 和 views。最后在启动运行时进行非覆盖式的自解压。</p>
<h3 id="generate-命令" tabindex="-1"><a class="header-anchor" href="#generate-命令" aria-hidden="true">#</a> generate 命令</h3>
<p>这个命令是用来自动化的生成代码的，包含了从数据库一键生成 model，还包含了 scaffold 的，通过这个命令，让大家开发代码不再慢</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>bee generate scaffold <span class="token punctuation">[</span>scaffoldname<span class="token punctuation">]</span> <span class="token punctuation">[</span>-fields<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-driver<span class="token operator">=</span>mysql<span class="token punctuation">]</span> <span class="token punctuation">[</span>-conn<span class="token operator">=</span><span class="token string">"root:@tcp(127.0.0.1:3306)/test"</span><span class="token punctuation">]</span>
    The generate scaffold <span class="token builtin class-name">command</span> will <span class="token keyword">do</span> a number of things <span class="token keyword">for</span> you.
    -fields: a list of table fields. Format: field:type, <span class="token punctuation">..</span>.
    -driver: <span class="token punctuation">[</span>mysql <span class="token operator">|</span> postgres <span class="token operator">|</span> sqlite<span class="token punctuation">]</span>, the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp<span class="token punctuation">(</span><span class="token number">127.0</span>.0.1:3306<span class="token punctuation">)</span>/test
    example: bee generate scaffold post <span class="token parameter variable">-fields</span><span class="token operator">=</span><span class="token string">"title:string,body:text"</span>

bee generate model <span class="token punctuation">[</span>modelname<span class="token punctuation">]</span> <span class="token punctuation">[</span>-fields<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">]</span>
    generate RESTful model based on fields
    -fields: a list of table fields. Format: field:type, <span class="token punctuation">..</span>.

bee generate controller <span class="token punctuation">[</span>controllerfile<span class="token punctuation">]</span>
    generate RESTful controllers

bee generate view <span class="token punctuation">[</span>viewpath<span class="token punctuation">]</span>
    generate CRUD view <span class="token keyword">in</span> viewpath

bee generate migration <span class="token punctuation">[</span>migrationfile<span class="token punctuation">]</span> <span class="token punctuation">[</span>-fields<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">]</span>
    generate migration <span class="token function">file</span> <span class="token keyword">for</span> making database schema update
    -fields: a list of table fields. Format: field:type, <span class="token punctuation">..</span>.

bee generate docs
    generate swagger doc <span class="token function">file</span>

bee generate <span class="token builtin class-name">test</span> <span class="token punctuation">[</span>routerfile<span class="token punctuation">]</span>
    generate testcase

bee generate appcode <span class="token punctuation">[</span>-tables<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-driver<span class="token operator">=</span>mysql<span class="token punctuation">]</span> <span class="token punctuation">[</span>-conn<span class="token operator">=</span><span class="token string">"root:@tcp(127.0.0.1:3306)/test"</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-level<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">]</span>
    generate appcode based on an existing database
    -tables: a list of table names separated by <span class="token string">','</span>, default is empty, indicating all tables
    -driver: <span class="token punctuation">[</span>mysql <span class="token operator">|</span> postgres <span class="token operator">|</span> sqlite<span class="token punctuation">]</span>, the default is mysql
    -conn:   the connection string used by the driver.
             default <span class="token keyword">for</span> mysql:    root:@tcp<span class="token punctuation">(</span><span class="token number">127.0</span>.0.1:3306<span class="token punctuation">)</span>/test
             default <span class="token keyword">for</span> postgres: postgres://postgres:postgres@127.0.0.1:5432/postgres
    -level:  <span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span><span class="token punctuation">]</span>, <span class="token number">1</span> <span class="token operator">=</span> models<span class="token punctuation">;</span> <span class="token number">2</span> <span class="token operator">=</span> models,controllers<span class="token punctuation">;</span> <span class="token number">3</span> <span class="token operator">=</span> models,controllers,router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="migrate-命令" tabindex="-1"><a class="header-anchor" href="#migrate-命令" aria-hidden="true">#</a> migrate 命令</h3>
<p>这个命令是应用的数据库迁移命令，主要是用来每次应用升级，降级的SQL管理。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>bee migrate <span class="token punctuation">[</span>-driver<span class="token operator">=</span>mysql<span class="token punctuation">]</span> <span class="token punctuation">[</span>-conn<span class="token operator">=</span><span class="token string">"root:@tcp(127.0.0.1:3306)/test"</span><span class="token punctuation">]</span>
    run all outstanding migrations
    -driver: <span class="token punctuation">[</span>mysql <span class="token operator">|</span> postgresql <span class="token operator">|</span> sqlite<span class="token punctuation">]</span>, the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp<span class="token punctuation">(</span><span class="token number">127.0</span>.0.1:3306<span class="token punctuation">)</span>/test

bee migrate rollback <span class="token punctuation">[</span>-driver<span class="token operator">=</span>mysql<span class="token punctuation">]</span> <span class="token punctuation">[</span>-conn<span class="token operator">=</span><span class="token string">"root:@tcp(127.0.0.1:3306)/test"</span><span class="token punctuation">]</span>
    rollback the last migration operation
    -driver: <span class="token punctuation">[</span>mysql <span class="token operator">|</span> postgresql <span class="token operator">|</span> sqlite<span class="token punctuation">]</span>, the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp<span class="token punctuation">(</span><span class="token number">127.0</span>.0.1:3306<span class="token punctuation">)</span>/test

bee migrate reset <span class="token punctuation">[</span>-driver<span class="token operator">=</span>mysql<span class="token punctuation">]</span> <span class="token punctuation">[</span>-conn<span class="token operator">=</span><span class="token string">"root:@tcp(127.0.0.1:3306)/test"</span><span class="token punctuation">]</span>
    rollback all migrations
    -driver: <span class="token punctuation">[</span>mysql <span class="token operator">|</span> postgresql <span class="token operator">|</span> sqlite<span class="token punctuation">]</span>, the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp<span class="token punctuation">(</span><span class="token number">127.0</span>.0.1:3306<span class="token punctuation">)</span>/test

bee migrate refresh <span class="token punctuation">[</span>-driver<span class="token operator">=</span>mysql<span class="token punctuation">]</span> <span class="token punctuation">[</span>-conn<span class="token operator">=</span><span class="token string">"root:@tcp(127.0.0.1:3306)/test"</span><span class="token punctuation">]</span>
    rollback all migrations and run them all again
    -driver: <span class="token punctuation">[</span>mysql <span class="token operator">|</span> postgresql <span class="token operator">|</span> sqlite<span class="token punctuation">]</span>, the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp<span class="token punctuation">(</span><span class="token number">127.0</span>.0.1:3306<span class="token punctuation">)</span>/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerize-命令" tabindex="-1"><a class="header-anchor" href="#dockerize-命令" aria-hidden="true">#</a> dockerize 命令</h3>
<p>这个命令可以通过生成<code v-pre>Dockerfile</code>文件来实现<code v-pre>docker</code>化你的应用。</p>
<p><strong>例子:</strong></p>
<p>生成一个以<code v-pre>1.9.2</code>版本Go环境为基础镜像的Dockerfile,并暴露9000端口:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bee dockerize -image="library/golang:1.9.2" -expose=8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更多帮助信息可执行<code v-pre>bee help dockerize</code>.</p>
<div class="custom-container tip"><p class="custom-container-title">打开 dockerfile 文件：</p>
<div class="language-docker ext-docker line-numbers-mode"><pre v-pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> library/golang:1.9.2</span>

<span class="token comment"># Godep for vendoring</span>
<span class="token instruction"><span class="token keyword">RUN</span> go get github.com/tools/godep</span>

<span class="token comment"># Recompile the standard library without CGO</span>
<span class="token instruction"><span class="token keyword">RUN</span> CGO_ENABLED=0 go install -a std</span>

<span class="token instruction"><span class="token keyword">ENV</span> APP_DIR <span class="token variable">$GOPATHD</span>:\文档\最近的\awesome-golang\docs\code\beego</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p <span class="token variable">$APP_DIR</span></span>

<span class="token comment"># Set the entrypoint</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> (cd <span class="token variable">$APP_DIR</span> &amp;&amp; ./D:\文档\最近的\awesome-golang\docs\code\beego)</span>
<span class="token instruction"><span class="token keyword">ADD</span> . <span class="token variable">$APP_DIR</span></span>

<span class="token comment"># Compile the binary and statically link</span>
<span class="token instruction"><span class="token keyword">RUN</span> cd <span class="token variable">$APP_DIR</span> &amp;&amp; CGO_ENABLED=0 godep go build -ldflags <span class="token string">'-d -w -s'</span></span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h4 id="部署dockerfile" tabindex="-1"><a class="header-anchor" href="#部署dockerfile" aria-hidden="true">#</a> 部署dockerfile</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker build -t mybeego:1.0 .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="bee-工具配置文件" tabindex="-1"><a class="header-anchor" href="#bee-工具配置文件" aria-hidden="true">#</a> bee 工具配置文件</h2>
<p>您可能已经注意到，在 bee 工具的源码目录下有一个 <code v-pre>bee.json</code> 文件，这个文件是针对 bee 工具的一些行为进行配置。该功能还未完全开发完成，不过其中的一些选项已经可以使用：</p>
<ul>
<li><code v-pre>&quot;version&quot;: 0</code>：配置文件版本，用于对比是否发生不兼容的配置格式版本。</li>
<li><code v-pre>&quot;go_install&quot;: false</code>：如果您的包均使用完整的导入路径（例如：<code v-pre>github.com/user/repo/subpkg</code>）,则可以启用该选项来进行 <code v-pre>go install</code> 操作，加快构建操作。</li>
<li><code v-pre>&quot;watch_ext&quot;: []</code>：用于监控其它类型的文件（默认只监控后缀为 <code v-pre>.go</code> 的文件）。</li>
<li><code v-pre>&quot;dir_structure&quot;:{}</code>：如果您的目录名与默认的 MVC 架构的不同，则可以使用该选项进行修改。</li>
<li><code v-pre>&quot;cmd_args&quot;: []</code>：如果您需要在每次启动时加入启动参数，则可以使用该选项。</li>
<li><code v-pre>&quot;envs&quot;: []</code>：如果您需要在每次启动时设置临时环境变量参数，则可以使用该选项。</li>
</ul>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '64.md' style='float:left'>⬆️上一节🔗</a><a href = '66.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


