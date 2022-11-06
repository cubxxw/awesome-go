<template><div><h1 id="_1-新建项目" tabindex="-1"><a class="header-anchor" href="#_1-新建项目" aria-hidden="true">#</a> 1. 新建项目</h1>
<h1 id="_2-创建项目" tabindex="-1"><a class="header-anchor" href="#_2-创建项目" aria-hidden="true">#</a> 2. 创建项目</h1>
<p>beego 的项目基本都是通过 <code v-pre>bee</code> 命令来创建的，所以在创建项目之前确保你已经安装了 bee 工具和 beego。如果你还没有安装，那么请查阅 beego 的安装 和 bee 工具的安装。</p>
<p>现在一切就绪我们就可以开始创建项目了，打开终端，进入 <code v-pre>$GOPATH/src</code> 所在的目录：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>➜  src  bee new quickstart
[INFO] Creating application...
/gopath/src/quickstart/
/gopath/src/quickstart/conf/
/gopath/src/quickstart/controllers/
/gopath/src/quickstart/models/
/gopath/src/quickstart/routers/
/gopath/src/quickstart/tests/
/gopath/src/quickstart/static/
/gopath/src/quickstart/static/js/
/gopath/src/quickstart/static/css/
/gopath/src/quickstart/static/img/
/gopath/src/quickstart/views/
/gopath/src/quickstart/conf/app.conf
/gopath/src/quickstart/controllers/default.go
/gopath/src/quickstart/views/index.tpl
/gopath/src/quickstart/routers/router.go
/gopath/src/quickstart/tests/default_test.go
/gopath/src/quickstart/main.go
2014/11/06 18:17:09 [SUCC] New application successfully created!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过一个简单的命令就创建了一个 beego 项目。他的目录结构如下所示</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>quickstart
|-- conf
|   `-- app.conf
|-- controllers
|   `-- default.go
|-- main.go
|-- models
|-- routers
|   `-- router.go
|-- static
|   |-- css
|   |-- img
|   `-- js
|-- tests
|   `-- default_test.go
`-- views
    `-- index.tpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从目录结构中我们也可以看出来这是一个典型的 MVC 架构的应用，<code v-pre>main.go</code> 是入口文件。</p>
<h2 id="_2-1-运行项目" tabindex="-1"><a class="header-anchor" href="#_2-1-运行项目" aria-hidden="true">#</a> 2.1. 运行项目</h2>
<p>beego 项目创建之后，我们就开始运行项目，首先进入创建的项目，我们使用 <code v-pre>bee run</code> 来运行该项目，这样就可以做到热编译的效果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>➜  src  cd quickstart
➜  quickstart  bee run
2014/11/06 18:18:34 [INFO] Uses 'quickstart' as 'appname'
2014/11/06 18:18:34 [INFO] Initializing watcher...
2014/11/06 18:18:34 [TRAC] Directory(/gopath/src/quickstart/controllers)
2014/11/06 18:18:34 [TRAC] Directory(/gopath/src/quickstart)
2014/11/06 18:18:34 [TRAC] Directory(/gopath/src/quickstart/routers)
2014/11/06 18:18:34 [TRAC] Directory(/gopath/src/quickstart/tests)
2014/11/06 18:18:34 [INFO] Start building...
2014/11/06 18:18:35 [SUCC] Build was successful
2014/11/06 18:18:35 [INFO] Restarting quickstart ...
2014/11/06 18:18:35 [INFO] ./quickstart is running...
2014/11/06 18:18:35 [app.go:96] [I] http server Running on :8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们的应用已经在 <code v-pre>8080</code> 端口(beego 的默认端口)跑起来了.你是不是觉得很神奇，为什么没有 nginx 和 apache 居然可以自己干这个事情？是的，Go 其实已经做了网络层的东西，beego 只是封装了一下，所以可以做到不需要 nginx 和 apache。让我们打开浏览器看看效果吧：</p>
<p><img src="https://s2.loli.net/2022/04/11/s5exAdFElpkSh1v.png" alt="img"></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '65.md' style='float:left'>⬆️上一节🔗</a><a href = '67.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


