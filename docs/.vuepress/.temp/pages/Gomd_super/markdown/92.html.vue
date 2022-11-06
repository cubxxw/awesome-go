<template><div><h1 id="go-命令指南" tabindex="-1"><a class="header-anchor" href="#go-命令指南" aria-hidden="true">#</a> Go 命令指南</h1>
<p>[toc]</p>
<h2 id="_1-基本命令" tabindex="-1"><a class="header-anchor" href="#_1-基本命令" aria-hidden="true">#</a> 1. 基本命令</h2>
<p>查看版本</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go version
go version go1.14 darwin/amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看环境变量</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/11/Q75MpaCmVcs4Fq2.png" alt="仅截取部分内容"></p>
<p>仅截取部分内容</p>
<p>设置环境变量</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go env -w GOPATH=/usr/loca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-执行-go-程序" tabindex="-1"><a class="header-anchor" href="#_2-执行-go-程序" aria-hidden="true">#</a> 2. 执行 Go 程序</h2>
<p>当前热门的编程语言 Python ，可以不用编译成 二进制文件，就可以直接运行。</p>
<p>但 Go 语言程序的执行，必须得先编译再执行。通常来说有如下两种方法</p>
<ol>
<li>
<p>先使用 go build 编译成二进制文件，再执行这个二进制文件</p>
</li>
<li>
<p>使用 go run “直接”运行，这个命令还是会去编译，但是不会在当前目录下生成二进制文件，而是编译成临时文件后直接运行。</p>
</li>
</ol>
<h2 id="_3-编译文件" tabindex="-1"><a class="header-anchor" href="#_3-编译文件" aria-hidden="true">#</a> 3. 编译文件</h2>
<p>将 <code v-pre>.go</code> 文件编译成可执行文件，可以使用 <code v-pre>go build</code></p>
<p>如下图所示，helloworld 文件夹下，包含两个 <code v-pre>.go</code> 文件，它们都归属于同一个包。</p>
<p>当使用 <code v-pre>go build</code> 可指定包里所有的文件，就你下面这样，默认会以第一个文件（main.go）名生成可执行文件（main）。</p>
<p><img src="https://s2.loli.net/2022/04/11/9oNaETdOxfZJWHl.png" alt="http://image.iswbm.com/image-20200312201759541.png"></p>
<p>当然，你也可以不指定，此时生成的可执行文件是以 文件夹名命名</p>
<p><img src="https://s2.loli.net/2022/04/11/fqOo4CvUHtgY3Dd.png" alt="http://image.iswbm.com/image-20200312202032363.png"></p>
<p>当然你也可以手动指定这个可执行文件名</p>
<p><img src="https://s2.loli.net/2022/04/11/AjbUTZBsMHqVOzJ.png" alt="http://image.iswbm.com/image-20200312202520902.png"></p>
<p>以上是编译单个文件，当然也可以编译多个文件</p>
<h2 id="_4-清除编译文件" tabindex="-1"><a class="header-anchor" href="#_4-清除编译文件" aria-hidden="true">#</a> 4. 清除编译文件</h2>
<p>使用 go install 或 go install 有可能会生成很多的文件，如可执行文件，归档文件等，它们的后缀名非常多，有 <code v-pre>.exe</code>， <code v-pre>.a</code>， <code v-pre>.test</code>，<code v-pre>.o</code>，<code v-pre>.so</code>，<code v-pre>.5</code> ，<code v-pre>.6</code>，<code v-pre>.8</code>，如果要手动一个一个去清理他们，可以说是相当麻烦的，这里你可以通过使用 <code v-pre>go clean</code> 一键清理。</p>
<p><img src="https://s2.loli.net/2022/04/11/J4fLr68FeHacoku.png" alt="http://image.iswbm.com/image-20200313224148510.png"></p>
<p>实际开发中<code v-pre>go clean</code>命令使用的可能不是很多，一般都是利用<code v-pre>go clean</code>命令清除编译文件，然后再将源码递交到 github 上，方便对于源码的管理。</p>
<p>go clean 有不少的参数：</p>
<ul>
<li><code v-pre>-i</code>：清除关联的安装的包和可运行文件，也就是通过<code v-pre>go install</code>安装的文件；</li>
<li><code v-pre>-n</code>： 把需要执行的清除命令打印出来，但是不执行，这样就可以很容易的知道底层是如何运行的；</li>
<li><code v-pre>-r</code>： 循环的清除在 import 中引入的包；</li>
<li><code v-pre>-x</code>： 打印出来执行的详细命令，其实就是 -n 打印的执行版本；</li>
<li><code v-pre>-cache</code>： 删除所有<code v-pre>go build</code>命令的缓存</li>
<li><code v-pre>-testcache</code>： 删除当前包所有的测试结果</li>
</ul>
<h2 id="_4-下载代码包" tabindex="-1"><a class="header-anchor" href="#_4-下载代码包" aria-hidden="true">#</a> 4. 下载代码包</h2>
<p>在 Golang 中，除了可以从官方网站（golang.org）下载包之外，还可以从一些代码仓库中下载，诸如 github.com，bitbucket.org 这样的代码托管网站。</p>
<p><code v-pre>go get</code> 这条命令，你以后会最经常用到，它可以借助代码管理工具通过远程拉取或更新代码包及其依赖包，并自动完成编译和安装。整个过程就像安装一个 App 一样简单。</p>
<p>这个命令可以动态获取远程代码包，目前支持的有 BitBucket、GitHub、Google Code 和 Launchpad。在使用 go get 命令前，需要安装与远程包匹配的代码管理工具，如 Git、SVN等。</p>
<p><code v-pre>go get</code> 会根据域名的不同，使用不同的工具去拉取代码包，具体可参考下图</p>
<p><img src="https://s2.loli.net/2022/04/11/vq5dHtzcpanlX7N.png" alt="image-20200312203244402"></p>
<p>image-20200312203244402</p>
<p>下载和安装，原本是两个动作，但使用 <code v-pre>go get</code> 后，它默认会将下载（源码包）和安装（go install）合并起来，当然你也可以通过参数指定将拆散它们。</p>
<p>在终端执行 <code v-pre>go help get</code>，会弹出 <code v-pre>go get</code> 的帮助文档，我这里汉化总结一下，来帮助大家学习。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go get [-d] [-f] [-t] [-u] [-v] [-fix] [-insecure] [build flags] [packages]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中几个参数详解如下</p>
<ul>
<li>
<p><code v-pre>-u</code>：</p>
<p>用于下载指定的路径包及其依赖包，默认情况下，不会下载本地已经存在的，只会下载本地不存在的代码包。就是口中常说的更新包 比如：go get -u github.com/jinzhu/gorm。会把最新的 gorm 包下载到你本地</p>
</li>
<li>
<p><code v-pre>-d</code>：</p>
<p>让命令程序只执行下载动作，而不执行安装动作。</p>
</li>
<li>
<p><code v-pre>-t</code></p>
<p>让命令程序同时下载并安装指定的代码包中的测试源码文件中依赖的代码包</p>
</li>
<li>
<p><code v-pre>-fix</code></p>
<p>命令程序在下载代码包后先执行修正动作，而后再进行编译和安装。比如，我的代码是用1.7 开发的，现在go 版本已经是1.13 了，有些包已经发生了变化，那么我们在使用go get命令的时候可以加入-fix标记。这个标记的作用是在检出代码包之后，先对该代码包中不符合Go语言1.7版本的语言规范的语法进行修正，然后再下载它的依赖包，最后再对它们进行编译和安装。</p>
</li>
<li>
<p><code v-pre>-v</code></p>
<p>打印出那些下载的代码包的名字</p>
</li>
<li>
<p><code v-pre>-f</code></p>
<p>仅在使用-u标记时才有效。该标记会让命令程序忽略掉对已下载代码包的导入路径的检查。如果下载并安装的代码包所属的项目是你从别人那里Fork过来的，那么这样做就尤为重要了</p>
</li>
<li>
<p><code v-pre>-x</code></p>
<p>打印出整个过程使用了哪些命令</p>
</li>
<li>
<p><code v-pre>-insecure</code> 允许命令程序使用非安全的scheme（如HTTP）去下载指定的代码包。如果你用的代码仓库（如公司内部的Gitlab）没有HTTPS支持，可以添加此标记。请在确定安全的情况下使用它。（记得 使用工具 git 时，有个版本就是 http 升级为了https）</p>
</li>
</ul>
<p>参数有点多，咱一个一个来。</p>
<p>指定 <code v-pre>-d</code>，只下载源码包而不进行安装</p>
<p><img src="https://s2.loli.net/2022/04/11/posJi2hOxaCGlbK.png" alt="http://image.iswbm.com/image-20200312204335687.png"></p>
<p>由于此时，我们已经下载了 logging 包，当你再次执行 go get 时，并不会重复下载，只有当你指定 <code v-pre>-u</code> 时，不管你需不需要更新，都会触发重新下载强制更新。</p>
<p><img src="https://s2.loli.net/2022/04/11/wj2vqo7XkBc8snD.png" alt="http://image.iswbm.com/image-20200312204746007.png"></p>
<p>如果你想看，下载这个过程用到了哪几个命令，可以指定 <code v-pre>-x</code> 参数</p>
<p><img src="https://s2.loli.net/2022/04/11/TkpuOKfDxzj7Bha.png" alt="http://image.iswbm.com/image-20200312205001161.png"></p>
<p>最后，你可能想说，为什么 golang 里的包含这么长，好难记呀，其实这个路径是有讲究的</p>
<p><img src="https://s2.loli.net/2022/04/11/vZCF5lno7hU8KHM.png" alt="http://image.iswbm.com/image-20200312210557326.png"></p>
<p>这样不同的人开发的包即使使用同一个名，也不会冲突了。</p>
<p>下载的包，可能有不同的版本，如何指定版本下载呢？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 拉取最新
go get github.com/foo

# 最新的次要版本或者修订版本(x.y.z, z是修订版本号， y是次要版本号)
go get -u github.com/foo

# 升级到最新的修订版本
go get -u=patch github.com/foo

# 指定版本，若存在tag，则代行使用
go get github.com/foo@v1.2.3

# 指定分支
go get github.com/foo@master

# 指定git提交的hash值
go get github.com/foo@e3702bed2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-安装代码包" tabindex="-1"><a class="header-anchor" href="#_6-安装代码包" aria-hidden="true">#</a> 6. 安装代码包</h2>
<p><code v-pre>go install</code> 这个命令，如果你安装的是一个可执行文件（包名是 main），它会生成可执行文件到 bin 目录下。这点和 <code v-pre>go build</code> 很相似，不同的是，<code v-pre>go build</code> 编译生成的可执行文件放在当前目录，而 <code v-pre>go install</code> 会将可执行文件统一放至 <code v-pre>$GOPATH/bin</code> 目录下。</p>
<p><img src="https://s2.loli.net/2022/04/11/JiPjYyK97QGM2U6.png" alt="http://image.iswbm.com/image-20200312221011685.png"></p>
<p>如果你安装的是一个库，它会将这个库安装到 pkg 目录下，生成 <code v-pre>.a</code> 为后缀的文件。</p>
<p><img src="https://s2.loli.net/2022/04/11/mUeNsdGf4u6KDqX.png" alt="http://image.iswbm.com/image-20200312221141028.png"></p>
<h2 id="_7-格式化-go-文件" tabindex="-1"><a class="header-anchor" href="#_7-格式化-go-文件" aria-hidden="true">#</a> 7. 格式化 go 文件</h2>
<p>Go语言的开发团队制定了统一的官方代码风格，并且推出了 gofmt 工具（gofmt 或 go fmt）来帮助开发者格式化他们的代码到统一的风格。</p>
<p>gofmt 是一个 cli 程序，会优先读取标准输入，如果传入了文件路径的话，会格式化这个文件，如果传入一个目录，会格式化目录中所有 .go 文件，如果不传参数，会格式化当前目录下的所有 .go 文件。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '91.md' style='float:left'>⬆️上一节🔗</a><a href = '93.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


