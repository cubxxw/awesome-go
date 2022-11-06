<template><div><p>[toc]</p>
<h1 id="_1-beego框架" tabindex="-1"><a class="header-anchor" href="#_1-beego框架" aria-hidden="true">#</a> 1. beego框架</h1>
<p>beego 是免费、开源的软件，这意味着任何人都可以为其开发和进步贡献力量。beego 源代码目前托管在 Github 上，Github 提供非常容易的途径 fork 项目和合并你的贡献。1. beego 安装升级</p>
<h1 id="_2-beego-的安装" tabindex="-1"><a class="header-anchor" href="#_2-beego-的安装" aria-hidden="true">#</a> 2. beego 的安装</h1>
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
<h1 id="_3-beego-的升级" tabindex="-1"><a class="header-anchor" href="#_3-beego-的升级" aria-hidden="true">#</a> 3. beego 的升级</h1>
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
<h1 id="_4-beego-的-git-分支" tabindex="-1"><a class="header-anchor" href="#_4-beego-的-git-分支" aria-hidden="true">#</a> 4. beego 的 git 分支</h1>
<p>beego 的 master 分支为相对稳定版本，dev 分支为开发者版本。大致流程如下：</p>
<p><img src="https://s2.loli.net/2022/04/11/ryeoKDnVSL2NMbt.png" alt="img"></p>
<h1 id="_1-bee工具的使用" tabindex="-1"><a class="header-anchor" href="#_1-bee工具的使用" aria-hidden="true">#</a> 1. bee工具的使用</h1>
<h1 id="_2-bee-工具简介" tabindex="-1"><a class="header-anchor" href="#_2-bee-工具简介" aria-hidden="true">#</a> 2. bee 工具简介</h1>
<p>bee 工具是一个为了协助快速开发 beego 项目而创建的项目，通过 bee 您可以很容易的进行 beego 项目的创建、热编译、开发、测试、和部署。</p>
<h2 id="_2-1-bee-工具的安装" tabindex="-1"><a class="header-anchor" href="#_2-1-bee-工具的安装" aria-hidden="true">#</a> 2.1. bee 工具的安装</h2>
<p>您可以通过如下的方式安装 bee 工具：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go get github.com/beego/bee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完之后，<code v-pre>bee</code> 可执行文件默认存放在 <code v-pre>$GOPATH/bin</code> 里面，所以您需要把 <code v-pre>$GOPATH/bin</code> 添加到您的环境变量中，才可以进行下一步。</p>
<blockquote>
<blockquote>
<blockquote>
<p>如何添加环境变量，请自行搜索 如果你本机设置了 <code v-pre>GOBIN</code>，那么上面的命令就会安装到 <code v-pre>GOBIN</code> 下，请添加 GOBIN 到你的环境变量中</p>
</blockquote>
</blockquote>
</blockquote>
<h2 id="_2-2-bee-工具命令详解" tabindex="-1"><a class="header-anchor" href="#_2-2-bee-工具命令详解" aria-hidden="true">#</a> 2.2. bee 工具命令详解</h2>
<p>我们在命令行输入 <code v-pre>bee</code>，可以看到如下的信息：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Bee is a Fast and Flexible tool for managing your Beego Web Application.

Usage:

    bee command [arguments]

The commands are:

    version     show the bee &amp; beego version
    migrate     run database migrations
    api         create an api application base on beego framework
    bale        packs non-Go files to Go source files    
    new         create an application base on beego framework
    run         run the app which can hot compile
    pack        compress an beego project
    fix         Fixes your application by making it compatible with newer versions of Beego
    dlv         Start a debugging session using Delve
    dockerize   Generates a Dockerfile for your Beego application
    generate    Source code generator
    hprose      Creates an RPC application based on Hprose and Beego frameworks
    new         Creates a Beego application
    pack        Compresses a Beego application into a single file
    rs          Run customized scripts
    run         Run the application by starting a local development server
    server      serving static content over HTTP on port

Use bee help [command] for more information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-1-new-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-1-new-命令" aria-hidden="true">#</a> 2.2.1. new 命令</h3>
<p><code v-pre>new</code> 命令是新建一个 Web 项目，我们在命令行下执行 <code v-pre>bee new &lt;项目名&gt;</code> 就可以创建一个新的项目。但是注意该命令必须在 <code v-pre>$GOPATH/src</code> 下执行。最后会在 <code v-pre>$GOPATH/src</code> 相应目录下生成如下目录结构的项目：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bee new myproject
[INFO] Creating application...
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
13-11-25 09:50:39 [SUCC] New application successfully created!
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

8 directories, 4 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-api-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-2-api-命令" aria-hidden="true">#</a> 2.2.2. api 命令</h3>
<p>上面的 <code v-pre>new</code> 命令是用来新建 Web 项目，不过很多用户使用 beego 来开发 API 应用。所以这个 <code v-pre>api</code> 命令就是用来创建 API 应用的，执行命令之后如下所示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bee api apiproject
create app folder: /gopath/src/apiproject
create conf: /gopath/src/apiproject/conf
create controllers: /gopath/src/apiproject/controllers
create models: /gopath/src/apiproject/models
create tests: /gopath/src/apiproject/tests
create conf app.conf: /gopath/src/apiproject/conf/app.conf
create controllers default.go: /gopath/src/apiproject/controllers/default.go
create tests default.go: /gopath/src/apiproject/tests/default_test.go
create models object.go: /gopath/src/apiproject/models/object.go
create main.go: /gopath/src/apiproject/main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个项目的目录结构如下：</p>
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
<h3 id="_2-2-3-run-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-3-run-命令" aria-hidden="true">#</a> 2.2.3. run 命令</h3>
<p>我们在开发 Go 项目的时候最大的问题是经常需要自己手动去编译再运行，<code v-pre>bee run</code> 命令是监控 beego 的项目，通过 <a href="https://github.com/howeyc/fsnotify" target="_blank" rel="noopener noreferrer">fsnotify<ExternalLinkIcon/></a>监控文件系统。但是注意该命令必须在 <code v-pre>$GOPATH/src/appname</code> 下执行。 这样我们在开发过程中就可以实时的看到项目修改之后的效果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bee run
13-11-25 09:53:04 [INFO] Uses 'myproject' as 'appname'
13-11-25 09:53:04 [INFO] Initializing watcher...
13-11-25 09:53:04 [TRAC] Directory(/gopath/src/myproject/controllers)
13-11-25 09:53:04 [TRAC] Directory(/gopath/src/myproject/models)
13-11-25 09:53:04 [TRAC] Directory(/gopath/src/myproject)
13-11-25 09:53:04 [INFO] Start building...
13-11-25 09:53:16 [SUCC] Build was successful
13-11-25 09:53:16 [INFO] Restarting myproject ...
13-11-25 09:53:16 [INFO] ./myproject is running...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们打开浏览器就可以看到效果 <code v-pre>http://localhost:8080/</code>:</p>
<p><img src="https://www.topgoer.com/static/images/beerun.png" alt="img"></p>
<p>如果我们修改了 <code v-pre>Controller</code> 下面的 <code v-pre>default.go</code> 文件，我们就可以看到命令行输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>13-11-25 10:11:20 [EVEN] "/gopath/src/myproject/controllers/default.go": DELETE|MODIFY
13-11-25 10:11:20 [INFO] Start building...
13-11-25 10:11:20 [SKIP] "/gopath/src/myproject/controllers/default.go": CREATE
13-11-25 10:11:23 [SKIP] "/gopath/src/myproject/controllers/default.go": MODIFY
13-11-25 10:11:23 [SUCC] Build was successful
13-11-25 10:11:23 [INFO] Restarting myproject ...
13-11-25 10:11:23 [INFO] ./myproject is running...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新浏览器我们看到新的修改内容已经输出。</p>
<h3 id="_2-2-4-pack-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-4-pack-命令" aria-hidden="true">#</a> 2.2.4. pack 命令</h3>
<p><code v-pre>pack</code> 目录用来发布应用的时候打包，会把项目打包成 zip 包，这样我们部署的时候直接把打包之后的项目上传，解压就可以部署了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bee pack
app path: /gopath/src/apiproject
GOOS darwin GOARCH amd64
build apiproject
build success
exclude prefix:
exclude suffix: .go:.DS_Store:.tmp
file write to `/gopath/src/apiproject/apiproject.tar.gz`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到目录下有如下的压缩文件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rwxr-xr-x  1 astaxie  staff  8995376 11 25 22:46 apiproject
-rw-r--r--  1 astaxie  staff  2240288 11 25 22:58 apiproject.tar.gz
drwxr-xr-x  3 astaxie  staff      102 11 25 22:31 conf
drwxr-xr-x  3 astaxie  staff      102 11 25 22:31 controllers
-rw-r--r--  1 astaxie  staff      509 11 25 22:31 main.go
drwxr-xr-x  3 astaxie  staff      102 11 25 22:31 models
drwxr-xr-x  3 astaxie  staff      102 11 25 22:31 tests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-5-bale-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-5-bale-命令" aria-hidden="true">#</a> 2.2.5. bale 命令</h3>
<p>这个命令目前仅限内部使用，具体实现方案未完善，主要用来压缩所有的静态文件变成一个变量申明文件，全部编译到二进制文件里面，用户发布的时候携带静态文件，包括 js、css、img 和 views。最后在启动运行时进行非覆盖式的自解压。</p>
<h3 id="_2-2-6-version-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-6-version-命令" aria-hidden="true">#</a> 2.2.6. version 命令</h3>
<p>这个命令是动态获取 bee、beego 和 Go 的版本，这样一旦用户出现错误，可以通过该命令来查看当前的版本</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ bee version
bee   :1.2.2
beego :1.4.2
Go    :go version go1.3.3 darwin/amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-7-generate-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-7-generate-命令" aria-hidden="true">#</a> 2.2.7. generate 命令</h3>
<p>这个命令是用来自动化的生成代码的，包含了从数据库一键生成 model，还包含了 scaffold 的，通过这个命令，让大家开发代码不再慢</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bee generate scaffold [scaffoldname] [-fields=""] [-driver=mysql] [-conn="root:@tcp(127.0.0.1:3306)/test"]
    The generate scaffold command will do a number of things for you.
    -fields: a list of table fields. Format: field:type, ...
    -driver: [mysql | postgres | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test
    example: bee generate scaffold post -fields="title:string,body:text"

bee generate model [modelname] [-fields=""]
    generate RESTful model based on fields
    -fields: a list of table fields. Format: field:type, ...

bee generate controller [controllerfile]
    generate RESTful controllers

bee generate view [viewpath]
    generate CRUD view in viewpath

bee generate migration [migrationfile] [-fields=""]
    generate migration file for making database schema update
    -fields: a list of table fields. Format: field:type, ...

bee generate docs
    generate swagger doc file

bee generate test [routerfile]
    generate testcase

bee generate appcode [-tables=""] [-driver=mysql] [-conn="root:@tcp(127.0.0.1:3306)/test"] [-level=3]
    generate appcode based on an existing database
    -tables: a list of table names separated by ',', default is empty, indicating all tables
    -driver: [mysql | postgres | sqlite], the default is mysql
    -conn:   the connection string used by the driver.
             default for mysql:    root:@tcp(127.0.0.1:3306)/test
             default for postgres: postgres://postgres:postgres@127.0.0.1:5432/postgres
    -level:  [1 | 2 | 3], 1 = models; 2 = models,controllers; 3 = models,controllers,router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-8-migrate-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-8-migrate-命令" aria-hidden="true">#</a> 2.2.8. migrate 命令</h3>
<p>这个命令是应用的数据库迁移命令，主要是用来每次应用升级，降级的SQL管理。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bee migrate [-driver=mysql] [-conn="root:@tcp(127.0.0.1:3306)/test"]
    run all outstanding migrations
    -driver: [mysql | postgresql | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test

bee migrate rollback [-driver=mysql] [-conn="root:@tcp(127.0.0.1:3306)/test"]
    rollback the last migration operation
    -driver: [mysql | postgresql | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test

bee migrate reset [-driver=mysql] [-conn="root:@tcp(127.0.0.1:3306)/test"]
    rollback all migrations
    -driver: [mysql | postgresql | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test

bee migrate refresh [-driver=mysql] [-conn="root:@tcp(127.0.0.1:3306)/test"]
    rollback all migrations and run them all again
    -driver: [mysql | postgresql | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-9-dockerize-命令" tabindex="-1"><a class="header-anchor" href="#_2-2-9-dockerize-命令" aria-hidden="true">#</a> 2.2.9. dockerize 命令</h3>
<p>这个命令可以通过生成Dockerfile文件来实现docker化你的应用。</p>
<p>例子:
生成一个以1.6.4版本Go环境为基础镜像的Dockerfile,并暴露9000端口:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ bee dockerize -image="library/golang:1.6.4" -expose=9000
______
| ___ \
| |_/ /  ___   ___
| ___ \ / _ \ / _ \
| |_/ /|  __/|  __/
\____/  \___| \___| v1.6.2
2016/12/26 22:34:54 INFO     ▶ 0001 Generating Dockerfile...
2016/12/26 22:34:54 SUCCESS  ▶ 0002 Dockerfile generated.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多帮助信息可执行<code v-pre>bee help dockerize</code>.</p>
<h2 id="_2-3-bee-工具配置文件" tabindex="-1"><a class="header-anchor" href="#_2-3-bee-工具配置文件" aria-hidden="true">#</a> 2.3. bee 工具配置文件</h2>
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
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


