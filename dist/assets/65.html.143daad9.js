import{_ as r,r as a,o as t,c as o,a as e,b as n,w as c,d,e as i}from"./app.60443488.js";const v={},u=d(`<p>[toc]</p><h1 id="_1-beego\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#_1-beego\u6846\u67B6" aria-hidden="true">#</a> 1. beego\u6846\u67B6</h1><p>beego \u662F\u514D\u8D39\u3001\u5F00\u6E90\u7684\u8F6F\u4EF6\uFF0C\u8FD9\u610F\u5473\u7740\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u4E3A\u5176\u5F00\u53D1\u548C\u8FDB\u6B65\u8D21\u732E\u529B\u91CF\u3002beego \u6E90\u4EE3\u7801\u76EE\u524D\u6258\u7BA1\u5728 Github \u4E0A\uFF0CGithub \u63D0\u4F9B\u975E\u5E38\u5BB9\u6613\u7684\u9014\u5F84 fork \u9879\u76EE\u548C\u5408\u5E76\u4F60\u7684\u8D21\u732E\u30021. beego \u5B89\u88C5\u5347\u7EA7</p><h1 id="_2-beego-\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-beego-\u7684\u5B89\u88C5" aria-hidden="true">#</a> 2. beego \u7684\u5B89\u88C5</h1><p>beego \u7684\u5B89\u88C5\u662F\u5178\u578B\u7684 Go \u5B89\u88C5\u5305\u7684\u5F62\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go get github.com/astaxie/beego
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E38\u89C1\u95EE\u9898\uFF1A</p><ul><li><p>git \u6CA1\u6709\u5B89\u88C5\uFF0C\u8BF7\u81EA\u884C\u5B89\u88C5\u4E0D\u540C\u5E73\u53F0\u7684 git\uFF0C\u5982\u4F55\u5B89\u88C5\u8BF7\u81EA\u884C\u641C\u7D22\u3002</p></li><li><p>git https \u65E0\u6CD5\u83B7\u53D6\uFF0C\u8BF7\u914D\u7F6E\u672C\u5730\u7684 git\uFF0C\u5173\u95ED https \u9A8C\u8BC1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  git config --global http.sslVerify false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u65E0\u6CD5\u4E0A\u7F51\u600E\u4E48\u5B89\u88C5 beego\uFF0C\u76EE\u524D\u6CA1\u6709\u597D\u7684\u529E\u6CD5\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u4F1A\u6574\u7406\u4E00\u4E2A\u5168\u5305\u4E0B\u8F7D\uFF0C\u6BCF\u6B21\u53D1\u5E03\u6B63\u5F0F\u7248\u672C\u90FD\u4F1A\u63D0\u4F9B\u8FD9\u4E2A\u5168\u5305\u4E0B\u8F7D\uFF0C\u5305\u542B\u4F9D\u8D56\u5305\u3002</p></li></ul><h1 id="_3-beego-\u7684\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#_3-beego-\u7684\u5347\u7EA7" aria-hidden="true">#</a> 3. beego \u7684\u5347\u7EA7</h1><p>beego \u5347\u7EA7\u5206\u4E3A go \u65B9\u5F0F\u5347\u7EA7\u548C\u6E90\u7801\u4E0B\u8F7D\u5347\u7EA7\uFF1A</p><ul><li><p>Go \u5347\u7EA7,\u901A\u8FC7\u8BE5\u65B9\u5F0F\u7528\u6237\u53EF\u4EE5\u5347\u7EA7 beego \u6846\u67B6\uFF0C\u5F3A\u70C8\u63A8\u8350\u8BE5\u65B9\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  go get -u github.com/astaxie/beego
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6E90\u7801\u4E0B\u8F7D\u5347\u7EA7\uFF0C\u7528\u6237\u8BBF\u95EE <code>https://github.com/astaxie/beego</code> ,\u4E0B\u8F7D\u6E90\u7801\uFF0C\u7136\u540E\u8986\u76D6\u5230 <code>$GOPATH/src/github.com/astaxie/beego</code> \u76EE\u5F55\uFF0C\u7136\u540E\u901A\u8FC7\u672C\u5730\u6267\u884C\u5B89\u88C5\u5C31\u53EF\u4EE5\u5347\u7EA7\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  go install     github.com/astaxie/beego
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h1 id="_4-beego-\u7684-git-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_4-beego-\u7684-git-\u5206\u652F" aria-hidden="true">#</a> 4. beego \u7684 git \u5206\u652F</h1><p>beego \u7684 master \u5206\u652F\u4E3A\u76F8\u5BF9\u7A33\u5B9A\u7248\u672C\uFF0Cdev \u5206\u652F\u4E3A\u5F00\u53D1\u8005\u7248\u672C\u3002\u5927\u81F4\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><p><img src="https://s2.loli.net/2022/04/11/ryeoKDnVSL2NMbt.png" alt="img"></p><h1 id="_1-bee\u5DE5\u5177\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-bee\u5DE5\u5177\u7684\u4F7F\u7528" aria-hidden="true">#</a> 1. bee\u5DE5\u5177\u7684\u4F7F\u7528</h1><h1 id="_2-bee-\u5DE5\u5177\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-bee-\u5DE5\u5177\u7B80\u4ECB" aria-hidden="true">#</a> 2. bee \u5DE5\u5177\u7B80\u4ECB</h1><p>bee \u5DE5\u5177\u662F\u4E00\u4E2A\u4E3A\u4E86\u534F\u52A9\u5FEB\u901F\u5F00\u53D1 beego \u9879\u76EE\u800C\u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u901A\u8FC7 bee \u60A8\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u8FDB\u884C beego \u9879\u76EE\u7684\u521B\u5EFA\u3001\u70ED\u7F16\u8BD1\u3001\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u548C\u90E8\u7F72\u3002</p><h2 id="_2-1-bee-\u5DE5\u5177\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-1-bee-\u5DE5\u5177\u7684\u5B89\u88C5" aria-hidden="true">#</a> 2.1. bee \u5DE5\u5177\u7684\u5B89\u88C5</h2><p>\u60A8\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u7684\u65B9\u5F0F\u5B89\u88C5 bee \u5DE5\u5177\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go get github.com/beego/bee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u4E4B\u540E\uFF0C<code>bee</code> \u53EF\u6267\u884C\u6587\u4EF6\u9ED8\u8BA4\u5B58\u653E\u5728 <code>$GOPATH/bin</code> \u91CC\u9762\uFF0C\u6240\u4EE5\u60A8\u9700\u8981\u628A <code>$GOPATH/bin</code> \u6DFB\u52A0\u5230\u60A8\u7684\u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u624D\u53EF\u4EE5\u8FDB\u884C\u4E0B\u4E00\u6B65\u3002</p><blockquote><blockquote><blockquote><p>\u5982\u4F55\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF\uFF0C\u8BF7\u81EA\u884C\u641C\u7D22 \u5982\u679C\u4F60\u672C\u673A\u8BBE\u7F6E\u4E86 <code>GOBIN</code>\uFF0C\u90A3\u4E48\u4E0A\u9762\u7684\u547D\u4EE4\u5C31\u4F1A\u5B89\u88C5\u5230 <code>GOBIN</code> \u4E0B\uFF0C\u8BF7\u6DFB\u52A0 GOBIN \u5230\u4F60\u7684\u73AF\u5883\u53D8\u91CF\u4E2D</p></blockquote></blockquote></blockquote><h2 id="_2-2-bee-\u5DE5\u5177\u547D\u4EE4\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-2-bee-\u5DE5\u5177\u547D\u4EE4\u8BE6\u89E3" aria-hidden="true">#</a> 2.2. bee \u5DE5\u5177\u547D\u4EE4\u8BE6\u89E3</h2><p>\u6211\u4EEC\u5728\u547D\u4EE4\u884C\u8F93\u5165 <code>bee</code>\uFF0C\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u7684\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Bee is a Fast and Flexible tool for managing your Beego Web Application.

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-1-new-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-1-new-\u547D\u4EE4" aria-hidden="true">#</a> 2.2.1. new \u547D\u4EE4</h3><p><code>new</code> \u547D\u4EE4\u662F\u65B0\u5EFA\u4E00\u4E2A Web \u9879\u76EE\uFF0C\u6211\u4EEC\u5728\u547D\u4EE4\u884C\u4E0B\u6267\u884C <code>bee new &lt;\u9879\u76EE\u540D&gt;</code> \u5C31\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u9879\u76EE\u3002\u4F46\u662F\u6CE8\u610F\u8BE5\u547D\u4EE4\u5FC5\u987B\u5728 <code>$GOPATH/src</code> \u4E0B\u6267\u884C\u3002\u6700\u540E\u4F1A\u5728 <code>$GOPATH/src</code> \u76F8\u5E94\u76EE\u5F55\u4E0B\u751F\u6210\u5982\u4E0B\u76EE\u5F55\u7ED3\u6784\u7684\u9879\u76EE\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bee new myproject
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
\u251C\u2500\u2500 conf
\u2502   \u2514\u2500\u2500 app.conf
\u251C\u2500\u2500 controllers
\u2502   \u2514\u2500\u2500 default.go
\u251C\u2500\u2500 main.go
\u251C\u2500\u2500 models
\u251C\u2500\u2500 routers
\u2502   \u2514\u2500\u2500 router.go
\u251C\u2500\u2500 static
\u2502   \u251C\u2500\u2500 css
\u2502   \u251C\u2500\u2500 img
\u2502   \u2514\u2500\u2500 js
\u251C\u2500\u2500 tests
\u2502   \u2514\u2500\u2500 default_test.go
\u2514\u2500\u2500 views
    \u2514\u2500\u2500 index.tpl

8 directories, 4 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-api-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-2-api-\u547D\u4EE4" aria-hidden="true">#</a> 2.2.2. api \u547D\u4EE4</h3><p>\u4E0A\u9762\u7684 <code>new</code> \u547D\u4EE4\u662F\u7528\u6765\u65B0\u5EFA Web \u9879\u76EE\uFF0C\u4E0D\u8FC7\u5F88\u591A\u7528\u6237\u4F7F\u7528 beego \u6765\u5F00\u53D1 API \u5E94\u7528\u3002\u6240\u4EE5\u8FD9\u4E2A <code>api</code> \u547D\u4EE4\u5C31\u662F\u7528\u6765\u521B\u5EFA API \u5E94\u7528\u7684\uFF0C\u6267\u884C\u547D\u4EE4\u4E4B\u540E\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bee api apiproject
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiproject
\u251C\u2500\u2500 conf
\u2502   \u2514\u2500\u2500 app.conf
\u251C\u2500\u2500 controllers
\u2502   \u2514\u2500\u2500 object.go
\u2502   \u2514\u2500\u2500 user.go
\u251C\u2500\u2500 docs
\u2502   \u2514\u2500\u2500 doc.go
\u251C\u2500\u2500 main.go
\u251C\u2500\u2500 models
\u2502   \u2514\u2500\u2500 object.go
\u2502   \u2514\u2500\u2500 user.go
\u251C\u2500\u2500 routers
\u2502   \u2514\u2500\u2500 router.go
\u2514\u2500\u2500 tests
    \u2514\u2500\u2500 default_test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u7684\u76EE\u5F55\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u548C Web \u9879\u76EE\u76F8\u6BD4\uFF0C\u5C11\u4E86 static \u548C views \u76EE\u5F55\uFF0C\u591A\u4E86\u4E00\u4E2A test \u6A21\u5757\uFF0C\u7528\u6765\u505A\u5355\u5143\u6D4B\u8BD5\u7684\u3002</p><p>\u540C\u65F6\uFF0C\u8BE5\u547D\u4EE4\u8FD8\u652F\u6301\u4E00\u4E9B\u81EA\u5B9A\u4E49\u53C2\u6570\u81EA\u52A8\u8FDE\u63A5\u6570\u636E\u5E93\u521B\u5EFA\u76F8\u5173 model \u548C controller: <code>bee api [appname] [-tables=&quot;&quot;] [-driver=mysql] [-conn=&quot;root:&lt;password&gt;@tcp(127.0.0.1:3306)/test&quot;]</code> \u5982\u679C conn \u53C2\u6570\u4E3A\u7A7A\u5219\u521B\u5EFA\u4E00\u4E2A\u793A\u4F8B\u9879\u76EE\uFF0C\u5426\u5219\u5C06\u57FA\u4E8E\u94FE\u63A5\u4FE1\u606F\u94FE\u63A5\u6570\u636E\u5E93\u521B\u5EFA\u9879\u76EE\u3002</p><h3 id="_2-2-3-run-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-3-run-\u547D\u4EE4" aria-hidden="true">#</a> 2.2.3. run \u547D\u4EE4</h3>`,36),b=i("\u6211\u4EEC\u5728\u5F00\u53D1 Go \u9879\u76EE\u7684\u65F6\u5019\u6700\u5927\u7684\u95EE\u9898\u662F\u7ECF\u5E38\u9700\u8981\u81EA\u5DF1\u624B\u52A8\u53BB\u7F16\u8BD1\u518D\u8FD0\u884C\uFF0C"),m=e("code",null,"bee run",-1),p=i(" \u547D\u4EE4\u662F\u76D1\u63A7 beego \u7684\u9879\u76EE\uFF0C\u901A\u8FC7 "),g={href:"https://github.com/howeyc/fsnotify",target:"_blank",rel:"noopener noreferrer"},h=i("fsnotify"),f=i("\u76D1\u63A7\u6587\u4EF6\u7CFB\u7EDF\u3002\u4F46\u662F\u6CE8\u610F\u8BE5\u547D\u4EE4\u5FC5\u987B\u5728 "),_=e("code",null,"$GOPATH/src/appname",-1),x=i(" \u4E0B\u6267\u884C\u3002 \u8FD9\u6837\u6211\u4EEC\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5C31\u53EF\u4EE5\u5B9E\u65F6\u7684\u770B\u5230\u9879\u76EE\u4FEE\u6539\u4E4B\u540E\u7684\u6548\u679C\uFF1A"),q=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bee run
13-11-25 09:53:04 [INFO] Uses &#39;myproject&#39; as &#39;appname&#39;
13-11-25 09:53:04 [INFO] Initializing watcher...
13-11-25 09:53:04 [TRAC] Directory(/gopath/src/myproject/controllers)
13-11-25 09:53:04 [TRAC] Directory(/gopath/src/myproject/models)
13-11-25 09:53:04 [TRAC] Directory(/gopath/src/myproject)
13-11-25 09:53:04 [INFO] Start building...
13-11-25 09:53:16 [SUCC] Build was successful
13-11-25 09:53:16 [INFO] Restarting myproject ...
13-11-25 09:53:16 [INFO] ./myproject is running...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u6253\u5F00\u6D4F\u89C8\u5668\u5C31\u53EF\u4EE5\u770B\u5230\u6548\u679C <code>http://localhost:8080/</code>:</p><p><img src="https://www.topgoer.com/static/images/beerun.png" alt="img"></p><p>\u5982\u679C\u6211\u4EEC\u4FEE\u6539\u4E86 <code>Controller</code> \u4E0B\u9762\u7684 <code>default.go</code> \u6587\u4EF6\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u770B\u5230\u547D\u4EE4\u884C\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>13-11-25 10:11:20 [EVEN] &quot;/gopath/src/myproject/controllers/default.go&quot;: DELETE|MODIFY
13-11-25 10:11:20 [INFO] Start building...
13-11-25 10:11:20 [SKIP] &quot;/gopath/src/myproject/controllers/default.go&quot;: CREATE
13-11-25 10:11:23 [SKIP] &quot;/gopath/src/myproject/controllers/default.go&quot;: MODIFY
13-11-25 10:11:23 [SUCC] Build was successful
13-11-25 10:11:23 [INFO] Restarting myproject ...
13-11-25 10:11:23 [INFO] ./myproject is running...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5237\u65B0\u6D4F\u89C8\u5668\u6211\u4EEC\u770B\u5230\u65B0\u7684\u4FEE\u6539\u5185\u5BB9\u5DF2\u7ECF\u8F93\u51FA\u3002</p><h3 id="_2-2-4-pack-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-4-pack-\u547D\u4EE4" aria-hidden="true">#</a> 2.2.4. pack \u547D\u4EE4</h3><p><code>pack</code> \u76EE\u5F55\u7528\u6765\u53D1\u5E03\u5E94\u7528\u7684\u65F6\u5019\u6253\u5305\uFF0C\u4F1A\u628A\u9879\u76EE\u6253\u5305\u6210 zip \u5305\uFF0C\u8FD9\u6837\u6211\u4EEC\u90E8\u7F72\u7684\u65F6\u5019\u76F4\u63A5\u628A\u6253\u5305\u4E4B\u540E\u7684\u9879\u76EE\u4E0A\u4F20\uFF0C\u89E3\u538B\u5C31\u53EF\u4EE5\u90E8\u7F72\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bee pack
app path: /gopath/src/apiproject
GOOS darwin GOARCH amd64
build apiproject
build success
exclude prefix:
exclude suffix: .go:.DS_Store:.tmp
file write to \`/gopath/src/apiproject/apiproject.tar.gz\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u76EE\u5F55\u4E0B\u6709\u5982\u4E0B\u7684\u538B\u7F29\u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rwxr-xr-x  1 astaxie  staff  8995376 11 25 22:46 apiproject
-rw-r--r--  1 astaxie  staff  2240288 11 25 22:58 apiproject.tar.gz
drwxr-xr-x  3 astaxie  staff      102 11 25 22:31 conf
drwxr-xr-x  3 astaxie  staff      102 11 25 22:31 controllers
-rw-r--r--  1 astaxie  staff      509 11 25 22:31 main.go
drwxr-xr-x  3 astaxie  staff      102 11 25 22:31 models
drwxr-xr-x  3 astaxie  staff      102 11 25 22:31 tests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-5-bale-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-5-bale-\u547D\u4EE4" aria-hidden="true">#</a> 2.2.5. bale \u547D\u4EE4</h3><p>\u8FD9\u4E2A\u547D\u4EE4\u76EE\u524D\u4EC5\u9650\u5185\u90E8\u4F7F\u7528\uFF0C\u5177\u4F53\u5B9E\u73B0\u65B9\u6848\u672A\u5B8C\u5584\uFF0C\u4E3B\u8981\u7528\u6765\u538B\u7F29\u6240\u6709\u7684\u9759\u6001\u6587\u4EF6\u53D8\u6210\u4E00\u4E2A\u53D8\u91CF\u7533\u660E\u6587\u4EF6\uFF0C\u5168\u90E8\u7F16\u8BD1\u5230\u4E8C\u8FDB\u5236\u6587\u4EF6\u91CC\u9762\uFF0C\u7528\u6237\u53D1\u5E03\u7684\u65F6\u5019\u643A\u5E26\u9759\u6001\u6587\u4EF6\uFF0C\u5305\u62EC js\u3001css\u3001img \u548C views\u3002\u6700\u540E\u5728\u542F\u52A8\u8FD0\u884C\u65F6\u8FDB\u884C\u975E\u8986\u76D6\u5F0F\u7684\u81EA\u89E3\u538B\u3002</p><h3 id="_2-2-6-version-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-6-version-\u547D\u4EE4" aria-hidden="true">#</a> 2.2.6. version \u547D\u4EE4</h3><p>\u8FD9\u4E2A\u547D\u4EE4\u662F\u52A8\u6001\u83B7\u53D6 bee\u3001beego \u548C Go \u7684\u7248\u672C\uFF0C\u8FD9\u6837\u4E00\u65E6\u7528\u6237\u51FA\u73B0\u9519\u8BEF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u547D\u4EE4\u6765\u67E5\u770B\u5F53\u524D\u7684\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ bee version
bee   :1.2.2
beego :1.4.2
Go    :go version go1.3.3 darwin/amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-7-generate-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-7-generate-\u547D\u4EE4" aria-hidden="true">#</a> 2.2.7. generate \u547D\u4EE4</h3><p>\u8FD9\u4E2A\u547D\u4EE4\u662F\u7528\u6765\u81EA\u52A8\u5316\u7684\u751F\u6210\u4EE3\u7801\u7684\uFF0C\u5305\u542B\u4E86\u4ECE\u6570\u636E\u5E93\u4E00\u952E\u751F\u6210 model\uFF0C\u8FD8\u5305\u542B\u4E86 scaffold \u7684\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u8BA9\u5927\u5BB6\u5F00\u53D1\u4EE3\u7801\u4E0D\u518D\u6162</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bee generate scaffold [scaffoldname] [-fields=&quot;&quot;] [-driver=mysql] [-conn=&quot;root:@tcp(127.0.0.1:3306)/test&quot;]
    The generate scaffold command will do a number of things for you.
    -fields: a list of table fields. Format: field:type, ...
    -driver: [mysql | postgres | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test
    example: bee generate scaffold post -fields=&quot;title:string,body:text&quot;

bee generate model [modelname] [-fields=&quot;&quot;]
    generate RESTful model based on fields
    -fields: a list of table fields. Format: field:type, ...

bee generate controller [controllerfile]
    generate RESTful controllers

bee generate view [viewpath]
    generate CRUD view in viewpath

bee generate migration [migrationfile] [-fields=&quot;&quot;]
    generate migration file for making database schema update
    -fields: a list of table fields. Format: field:type, ...

bee generate docs
    generate swagger doc file

bee generate test [routerfile]
    generate testcase

bee generate appcode [-tables=&quot;&quot;] [-driver=mysql] [-conn=&quot;root:@tcp(127.0.0.1:3306)/test&quot;] [-level=3]
    generate appcode based on an existing database
    -tables: a list of table names separated by &#39;,&#39;, default is empty, indicating all tables
    -driver: [mysql | postgres | sqlite], the default is mysql
    -conn:   the connection string used by the driver.
             default for mysql:    root:@tcp(127.0.0.1:3306)/test
             default for postgres: postgres://postgres:postgres@127.0.0.1:5432/postgres
    -level:  [1 | 2 | 3], 1 = models; 2 = models,controllers; 3 = models,controllers,router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-8-migrate-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-8-migrate-\u547D\u4EE4" aria-hidden="true">#</a> 2.2.8. migrate \u547D\u4EE4</h3><p>\u8FD9\u4E2A\u547D\u4EE4\u662F\u5E94\u7528\u7684\u6570\u636E\u5E93\u8FC1\u79FB\u547D\u4EE4\uFF0C\u4E3B\u8981\u662F\u7528\u6765\u6BCF\u6B21\u5E94\u7528\u5347\u7EA7\uFF0C\u964D\u7EA7\u7684SQL\u7BA1\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bee migrate [-driver=mysql] [-conn=&quot;root:@tcp(127.0.0.1:3306)/test&quot;]
    run all outstanding migrations
    -driver: [mysql | postgresql | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test

bee migrate rollback [-driver=mysql] [-conn=&quot;root:@tcp(127.0.0.1:3306)/test&quot;]
    rollback the last migration operation
    -driver: [mysql | postgresql | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test

bee migrate reset [-driver=mysql] [-conn=&quot;root:@tcp(127.0.0.1:3306)/test&quot;]
    rollback all migrations
    -driver: [mysql | postgresql | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test

bee migrate refresh [-driver=mysql] [-conn=&quot;root:@tcp(127.0.0.1:3306)/test&quot;]
    rollback all migrations and run them all again
    -driver: [mysql | postgresql | sqlite], the default is mysql
    -conn:   the connection string used by the driver, the default is root:@tcp(127.0.0.1:3306)/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-9-dockerize-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-2-9-dockerize-\u547D\u4EE4" aria-hidden="true">#</a> 2.2.9. dockerize \u547D\u4EE4</h3><p>\u8FD9\u4E2A\u547D\u4EE4\u53EF\u4EE5\u901A\u8FC7\u751F\u6210Dockerfile\u6587\u4EF6\u6765\u5B9E\u73B0docker\u5316\u4F60\u7684\u5E94\u7528\u3002</p><p>\u4F8B\u5B50: \u751F\u6210\u4E00\u4E2A\u4EE51.6.4\u7248\u672CGo\u73AF\u5883\u4E3A\u57FA\u7840\u955C\u50CF\u7684Dockerfile,\u5E76\u66B4\u97329000\u7AEF\u53E3:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ bee dockerize -image=&quot;library/golang:1.6.4&quot; -expose=9000
______
| ___ \\
| |_/ /  ___   ___
| ___ \\ / _ \\ / _ \\
| |_/ /|  __/|  __/
\\____/  \\___| \\___| v1.6.2
2016/12/26 22:34:54 INFO     \u25B6 0001 Generating Dockerfile...
2016/12/26 22:34:54 SUCCESS  \u25B6 0002 Dockerfile generated.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u591A\u5E2E\u52A9\u4FE1\u606F\u53EF\u6267\u884C<code>bee help dockerize</code>.</p><h2 id="_2-3-bee-\u5DE5\u5177\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-3-bee-\u5DE5\u5177\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 2.3. bee \u5DE5\u5177\u914D\u7F6E\u6587\u4EF6</h2><p>\u60A8\u53EF\u80FD\u5DF2\u7ECF\u6CE8\u610F\u5230\uFF0C\u5728 bee \u5DE5\u5177\u7684\u6E90\u7801\u76EE\u5F55\u4E0B\u6709\u4E00\u4E2A <code>bee.json</code> \u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u662F\u9488\u5BF9 bee \u5DE5\u5177\u7684\u4E00\u4E9B\u884C\u4E3A\u8FDB\u884C\u914D\u7F6E\u3002\u8BE5\u529F\u80FD\u8FD8\u672A\u5B8C\u5168\u5F00\u53D1\u5B8C\u6210\uFF0C\u4E0D\u8FC7\u5176\u4E2D\u7684\u4E00\u4E9B\u9009\u9879\u5DF2\u7ECF\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><ul><li><code>&quot;version&quot;: 0</code>\uFF1A\u914D\u7F6E\u6587\u4EF6\u7248\u672C\uFF0C\u7528\u4E8E\u5BF9\u6BD4\u662F\u5426\u53D1\u751F\u4E0D\u517C\u5BB9\u7684\u914D\u7F6E\u683C\u5F0F\u7248\u672C\u3002</li><li><code>&quot;go_install&quot;: false</code>\uFF1A\u5982\u679C\u60A8\u7684\u5305\u5747\u4F7F\u7528\u5B8C\u6574\u7684\u5BFC\u5165\u8DEF\u5F84\uFF08\u4F8B\u5982\uFF1A<code>github.com/user/repo/subpkg</code>\uFF09,\u5219\u53EF\u4EE5\u542F\u7528\u8BE5\u9009\u9879\u6765\u8FDB\u884C <code>go install</code> \u64CD\u4F5C\uFF0C\u52A0\u5FEB\u6784\u5EFA\u64CD\u4F5C\u3002</li><li><code>&quot;watch_ext&quot;: []</code>\uFF1A\u7528\u4E8E\u76D1\u63A7\u5176\u5B83\u7C7B\u578B\u7684\u6587\u4EF6\uFF08\u9ED8\u8BA4\u53EA\u76D1\u63A7\u540E\u7F00\u4E3A <code>.go</code> \u7684\u6587\u4EF6\uFF09\u3002</li><li><code>&quot;dir_structure&quot;:{}</code>\uFF1A\u5982\u679C\u60A8\u7684\u76EE\u5F55\u540D\u4E0E\u9ED8\u8BA4\u7684 MVC \u67B6\u6784\u7684\u4E0D\u540C\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u8BE5\u9009\u9879\u8FDB\u884C\u4FEE\u6539\u3002</li><li><code>&quot;cmd_args&quot;: []</code>\uFF1A\u5982\u679C\u60A8\u9700\u8981\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u52A0\u5165\u542F\u52A8\u53C2\u6570\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u8BE5\u9009\u9879\u3002</li><li><code>&quot;envs&quot;: []</code>\uFF1A\u5982\u679C\u60A8\u9700\u8981\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u8BBE\u7F6E\u4E34\u65F6\u73AF\u5883\u53D8\u91CF\u53C2\u6570\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u8BE5\u9009\u9879\u3002</li></ul><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="64.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="66.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,32),y=i("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),j={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},w=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),k=i(")"),C=i("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),G={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},O=i("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function I(N,S){const s=a("ExternalLinkIcon"),l=a("RouterLink");return t(),o("div",null,[u,e("p",null,[b,m,p,e("a",g,[h,n(s)]),f,_,x]),q,e("ul",null,[e("li",null,[e("p",null,[n(l,{to:"/Gomd_super/"},{default:c(()=>[y]),_:1})])]),e("li",null,[e("p",null,[e("a",j,[w,n(s)]),k])]),e("li",null,[e("p",null,[C,e("a",G,[O,n(s)])])])])])}const F=r(v,[["render",I],["__file","65.html.vue"]]);export{F as default};
