<template><div><h1 id="_1-依赖管理" tabindex="-1"><a class="header-anchor" href="#_1-依赖管理" aria-hidden="true">#</a> 1. 依赖管理</h1>
<h3 id="_1-1-1-为什么需要依赖管理" tabindex="-1"><a class="header-anchor" href="#_1-1-1-为什么需要依赖管理" aria-hidden="true">#</a> 1.1.1. 为什么需要依赖管理</h3>
<ul>
<li>最早的时候，Go所依赖的所有的第三方库都放在GOPATH这个目录下面。这就导致了同一个库只能保存一个版本的代码。如果不同的项目依赖同一个第三方的库的不同版本，应该怎么解决？</li>
</ul>
<h3 id="_1-1-2-go-module" tabindex="-1"><a class="header-anchor" href="#_1-1-2-go-module" aria-hidden="true">#</a> 1.1.2. go module</h3>
<p>go module是Go1.11版本之后官方推出的版本管理工具，并且从Go1.13版本开始，go module将是Go语言默认的依赖管理工具。</p>
<h3 id="_1-1-3-go111module" tabindex="-1"><a class="header-anchor" href="#_1-1-3-go111module" aria-hidden="true">#</a> 1.1.3. GO111MODULE</h3>
<p>要启用go module支持首先要设置环境变量GO111MODULE，通过它可以开启或关闭模块支持，它有三个可选值：off、on、auto，默认值是auto。</p>
<ul>
<li>GO111MODULE=off禁用模块支持，编译时会从GOPATH和vendor文件夹中查找包。</li>
<li>GO111MODULE=on启用模块支持，编译时会忽略GOPATH和vendor文件夹，只根据 go.mod下载依赖。</li>
<li>GO111MODULE=auto，当项目在$GOPATH/src外且项目根目录有go.mod文件时，开启模块支持。</li>
</ul>
<p>简单来说，设置GO111MODULE=on之后就可以使用go module了，以后就没有必要在GOPATH中创建项目了，并且还能够很好的管理项目依赖的第三方包信息。</p>
<p>使用 go module 管理依赖后会在项目根目录下生成两个文件go.mod和go.sum。</p>
<h3 id="_1-1-4-goproxy" tabindex="-1"><a class="header-anchor" href="#_1-1-4-goproxy" aria-hidden="true">#</a> 1.1.4. GOPROXY</h3>
<p>Go1.11之后设置GOPROXY命令为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    export GOPROXY=https://goproxy.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Go1.13之后GOPROXY默认值为 <a href="https://proxy.golang.org/" target="_blank" rel="noopener noreferrer">https://proxy.golang.org<ExternalLinkIcon/></a> ，在国内是无法访问的，所以十分建议大家设置GOPROXY，这里我推荐使用goproxy.cn。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    go env -w GOPROXY=https://goproxy.cn,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-5-go-mod命令" tabindex="-1"><a class="header-anchor" href="#_1-1-5-go-mod命令" aria-hidden="true">#</a> 1.1.5. go mod命令</h3>
<p>常用的go mod命令如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    go mod download    下载依赖的module到本地cache（默认为$GOPATH/pkg/mod目录）
    go mod edit        编辑go.mod文件
    go mod graph       打印模块依赖图
    go mod init        初始化当前文件夹, 创建go.mod文件
    go mod tidy        增加缺少的module，删除无用的module
    go mod vendor      将依赖复制到vendor下
    go mod verify      校验依赖
    go mod why         解释为什么需要依赖
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-6-go-get" tabindex="-1"><a class="header-anchor" href="#_1-1-6-go-get" aria-hidden="true">#</a> 1.1.6. go get</h3>
<p>在项目中执行go get命令可以下载依赖包，并且还可以指定下载的版本。</p>
<ul>
<li>运行go get -u将会升级到最新的次要版本或者修订版本(x.y.z, z是修订版本号， y是次要版本号)</li>
<li>运行go get -u=patch将会升级到最新的修订版本</li>
<li>运行go get package@version将会升级到指定的版本号version 如果下载所有依赖可以使用go mod download命令。</li>
</ul>
<h3 id="_1-1-7-简单粗暴的使用go-module" tabindex="-1"><a class="header-anchor" href="#_1-1-7-简单粗暴的使用go-module" aria-hidden="true">#</a> 1.1.7. 简单粗暴的使用go module</h3>
<p>1.set GO111MODULE=on</p>
<p>2.SET GOPROXY=<a href="https://goproxy.cn/" target="_blank" rel="noopener noreferrer">https://goproxy.cn<ExternalLinkIcon/></a> (这是win环境下的) export GOPROXY=<a href="https://goproxy.cn/" target="_blank" rel="noopener noreferrer">https://goproxy.cn<ExternalLinkIcon/></a> (这是mac环境下的)</p>
<p>3.go mod init [包名] // 初始化项目(如果你是初始化项目直接 <code v-pre>go mod init</code> 就好了)</p>
<p>4.在你的目录文件下会生成go.mod和go.sum文件 go.mod 里面包含了你的所有的包！</p>
<p>5.在文件里面引入包名的时候有的编辑器会报错但是是可以正常编译的</p>
<p>6.下载包使用go get</p>
<p>7.修改包的版本号直接去go.mod文件修改然后go mod download</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '74.md' style='float:left'>⬆️上一节🔗</a><a href = '76.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


