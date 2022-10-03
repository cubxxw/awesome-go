<template><div><h1 id="_1-go跨平台交叉编译" tabindex="-1"><a class="header-anchor" href="#_1-go跨平台交叉编译" aria-hidden="true">#</a> 1. Go跨平台交叉编译</h1>
<h3 id="_1-1-1-在-mac、linux、windows-下go交叉编译" tabindex="-1"><a class="header-anchor" href="#_1-1-1-在-mac、linux、windows-下go交叉编译" aria-hidden="true">#</a> 1.1.1. 在 Mac、Linux、Windows 下Go交叉编译</h3>
<p>Go语言支持交叉编译，在一个平台上生成另一个平台的可执行程序，最近使用了一下，非常好用，这里备忘一下。</p>
<p>需要注意的是我发现golang在支持cgo的时候是没法交叉编译的</p>
<p>Mac 下编译 Linux 和 Windows 64位可执行程序</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build
    CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux 下编译 Mac 和 Windows 64位可执行程序</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build
    CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows 下编译 Mac 和 Linux 64位可执行程序</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    SET CGO_ENABLED=0
    SET GOOS=darwin
    SET GOARCH=amd64
    go build

    SET CGO_ENABLED=0
    SET GOOS=linux
    SET GOARCH=amd64
    go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GOOS：目标平台的操作系统（darwin、freebsd、linux、windows）</p>
<p>GOARCH：目标平台的体系架构（386、amd64、arm）</p>
<p>交叉编译不支持 CGO 所以要禁用它</p>
<p>上面的命令编译 64 位可执行程序，你当然应该也会使用 386 编译 32 位可执行程序 很多博客都提到要先增加对其它平台的支持，但是我跳过那一步，上面所列的命令也都能成功，且得到我想要的结果，可见那一步应该是非必须的，或是我所使用的 Go 版本已默认支持所有平台。</p>
<p>注意：如果编译完成以后服务器不能运行文件,记得查看一下是否有运行权限</p>
<p><code v-pre>ls -l</code>如果没有执行 <code v-pre>sudo chmod 777 student</code> student是你的编译出来的文件名称</p>
<p>如果在编译的过程中出现了一下错误（测试过程中发现编译gin框架的时候遇到了）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>../mattn/go-isatty/isatty_tcgets.go:7:8: cannot find package "golang.org/x/sys/unix" in any of:
    /usr/lib/golang/src/golang.org/x/sys/unix (from $GOROOT)
    /root/go/src/golang.org/x/sys/unix (from $GOPATH)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于限制问题，国内使用 go get 安装 golang 官方包可能会失败，不翻墙的情况下怎么解决这个问题？其实 golang 在 github 上建立了一个镜像库，如 https://github.com/golang/net 即是 https://golang.org/x/net 的镜像库</p>
<p>解决办法：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd ~/go/src
mkdir -p golang.org/x
cd golang.org/x
git clone https://github.com/golang/sys.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-说明" tabindex="-1"><a class="header-anchor" href="#_1-1-2-说明" aria-hidden="true">#</a> 1.1.2. 说明</h3>
<p>windows下面 powershell不行，要cmd</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '72.md' style='float:left'>⬆️上一节🔗</a><a href = '74.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


