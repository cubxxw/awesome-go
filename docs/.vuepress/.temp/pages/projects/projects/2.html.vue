<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第2节-iam项目部署" tabindex="-1"><a class="header-anchor" href="#第2节-iam项目部署" aria-hidden="true">#</a> 第2节 IAM项目部署</h1>
<br>
<div><a href = '1.md' style='float:left'>⬆️上一节🔗  </a><a href = '3.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#基本开发环境">基本开发环境</router-link><ul><li><router-link to="#用户权限">用户权限</router-link></li><li><router-link to="#添加-sudoers">添加 sudoers</router-link></li><li><router-link to="#配置-home-bashrc-文件">配置 $HOME/.bashrc 文件</router-link></li><li><router-link to="#安装-git">安装 git</router-link></li></ul></li><li><router-link to="#go语言环境变量设置和含义">go语言环境变量设置和含义</router-link></li><li><router-link to="#vim-go-plug">vim go-plug</router-link></li><li><router-link to="#protobuf-编译环境安装">ProtoBuf 编译环境安装</router-link></li><li><router-link to="#iam手动部署">IAM手动部署</router-link><ul><li><router-link to="#下载项目代码">下载项目代码</router-link></li></ul></li><li><router-link to="#安装和配置数据库">安装和配置数据库</router-link><ul><li><router-link to="#安装和配置-mariadb">安装和配置 MariaDB</router-link></li><li><router-link to="#安装redis">安装redis</router-link></li><li><router-link to="#安装和配置-mongodb">安装和配置 MongoDB</router-link></li></ul></li><li><router-link to="#安装和配置-iam-系统">安装和配置 IAM 系统</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<ul>
<li>
<p><a href="https://github.com/cubxxw/cs-awesome-Block_Chain" target="_blank" rel="noopener noreferrer">⭕ 📚 菜鸟成长手册🚀 CS系列 、云原生系列、区块链系列、web3系列🔥、Golang系列💡<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://go.nsddd.top/" target="_blank" rel="noopener noreferrer">🚤 Go语言基础-进阶<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/cubxxw/cs-awesome-Block_Chain/blob/master/TOC.md" target="_blank" rel="noopener noreferrer">🖱️GO 基础部分🔥<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/cubxxw/cs-awesome-Block_Chain/blob/master/Gomd_super/README.md" target="_blank" rel="noopener noreferrer">🖱️Go语言100篇进阶🔥<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/cubxxw/cs-awesome-Block_Chain/blob/master/go-advancend/README.md" target="_blank" rel="noopener noreferrer">🖱️Go 高级篇<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://docker.nsddd.top/" target="_blank" rel="noopener noreferrer">🚤 docker &amp; k8s &amp; 云原生<ExternalLinkIcon/></a></p>
</li>
<li>
<p>[x] <a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">IAM github地址<ExternalLinkIcon/></a></p>
</li>
<li>
<p>[x] <a href="https://time.geekbang.org/column/article/378082" target="_blank" rel="noopener noreferrer">课程地址<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="基本开发环境" tabindex="-1"><a class="header-anchor" href="#基本开发环境" aria-hidden="true">#</a> 基本开发环境</h2>
<p><strong>查看我的环境：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@cubmaster01:/<span class="token comment"># uname -va</span>
Linux cubmaster01 <span class="token number">5.4</span>.0-135-generic <span class="token comment">#152-Ubuntu SMP Wed Nov 23 20:19:22 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux</span>
root@cubmaster01:/<span class="token comment"># go version </span>
go version go1.19.3 linux/amd64
root@cubmaster01:/<span class="token comment"># git version</span>
<span class="token function">git</span> version <span class="token number">2.25</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户权限" tabindex="-1"><a class="header-anchor" href="#用户权限" aria-hidden="true">#</a> 用户权限</h3>
<p>使用普通用户登录和操作开发机也可以保证系统的安全性，这是一个比较好的习惯，所以我们在日常开发中也要尽量避免使用 Root 用户。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>oot@cubmaster01:/<span class="token comment"># useradd cubiam</span>
root@cubmaster01:/<span class="token comment"># passwd cubiam</span>
New password: 
Retype new password: 
passwd: password updated successfully
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加-sudoers" tabindex="-1"><a class="header-anchor" href="#添加-sudoers" aria-hidden="true">#</a> 添加 sudoers</h3>
<p>普通用户也要用到 Root 的一些权限，但 Root 用户的密码一般是由系统管理员维护并定期更改的，每次都向管理员询问密码又很麻烦。因此，我建议你将普通用户加入到 sudoers 中，这样普通用户就可以通过 sudo 命令来暂时获取 Root 的权限。具体来说，你可以执行如下命令添加：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'/^root.*ALL=(ALL).*ALL/a\cubaim\tALL=(ALL) \tALL'</span> /etc/sudoers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-home-bashrc-文件" tabindex="-1"><a class="header-anchor" href="#配置-home-bashrc-文件" aria-hidden="true">#</a> 配置 <code v-pre>$HOME/.bashrc</code> 文件</h3>
<p>我们登录新服务器后的第一步就是配置 <code v-pre>$HOME/.bashrc</code> 文件，以使 Linux 登录 shell 更加易用，例如配置 LANG 解决中文乱码，配置 PS1 可以避免整行都是文件路径，并将 <code v-pre>$HOME/bin</code> 加入到 PATH 路径中。配置后的内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># .bashrc</span>
 
<span class="token comment"># User specific aliases and functions</span>
<span class="token comment"># -i： 每次删除前提醒~</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">rm</span><span class="token operator">=</span><span class="token string">'rm -i'</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">cp</span><span class="token operator">=</span><span class="token string">'cp -i'</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">mv</span><span class="token operator">=</span><span class="token string">'mv -i'</span>
 
<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>
 
<span class="token comment"># User specific environment</span>
<span class="token comment"># Basic envs</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">"en_US.UTF-8"</span> <span class="token comment"># 设置系统语言为 en_US.UTF-8，避免终端出现中文乱码</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">'[\u@dev \W]\$ '</span> <span class="token comment"># 默认的 PS1 设置会展示全部的路径，为了防止过长，这里只展示："用户名@dev 最后的目录名"</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">WORKSPACE</span><span class="token operator">=</span><span class="token string">"<span class="token environment constant">$HOME</span>/workspace"</span> <span class="token comment"># 设置工作目录</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/bin:<span class="token environment constant">$PATH</span> <span class="token comment"># 将 $HOME/bin 目录加入到 PATH 变量中</span>
 
<span class="token comment"># Default entry folder</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$WORKSPACE</span> <span class="token comment"># 登录系统，默认进入 workspace 目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有一点需要我们注意，在 export PATH 时，最好把 <code v-pre>$PATH</code> 放到最后，因为我们添加到目录中的命令是期望被优先搜索并使用的。配置完 <code v-pre>$HOME/.bashrc</code> 后，我们还需要创建工作目录 workspace。将工作文件统一放在 <code v-pre>$HOME/workspace</code> 目录中，有几点好处。</p>
<ol>
<li>可以使我们的 <code v-pre>HOME</code>目录保持整洁，便于以后的文件查找和分类。</li>
<li>如果哪一天 /分区空间不足，可以将整个 workspace 目录 mv 到另一个分区中，并在 /分区中保留软连接，例如：/home/going/workspace -&gt; /data/workspace/。</li>
<li>如果哪天想备份所有的工作文件，可以直接备份 workspace。</li>
</ol>
<p>具体的操作指令是 <code v-pre>mkdir -p $HOME/workspace</code>。配置好 <code v-pre>HOME/.bashrc</code> 文件后，我们就可以执行 bash 命令将配置加载到当前 shell 中了。</p>
<h3 id="安装-git" tabindex="-1"><a class="header-anchor" href="#安装-git" aria-hidden="true">#</a> 安装 git</h3>
<p>因为安装 IAM 系统、执行 go get 命令、安装 protobuf 工具等都是通过 Git 来操作的，所以接下来我们还需要安装 Git。由于低版本的 Git 不支持 <code v-pre>--unshallow</code> 参数，而 go get 在安装 Go 包时会用到 <code v-pre>git fetch --unshallow</code> 命令，因此我们要确保安装一个高版本的 Git，具体的安装方法如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> /tmp
$ <span class="token function">wget</span> --no-check-certificate https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.39.0.tar.gz
$ <span class="token function">tar</span> <span class="token parameter variable">-xvzf</span> git-2.39.0.tar.gz
$ <span class="token builtin class-name">cd</span> git-2.39.0/
$ ./configure
$ <span class="token function">make</span>
$ <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
$ <span class="token function">git</span> <span class="token parameter variable">--version</span>          <span class="token comment"># 输出 git 版本号，说明安装成功</span>
<span class="token function">git</span> version <span class="token number">2.39</span>.0
<span class="token function">tee</span> <span class="token parameter variable">-a</span> <span class="token environment constant">$HOME</span>/.bashrc <span class="token operator">&lt;&lt;</span><span class="token string">'EOF'</span>
<span class="token comment"># Configure for git</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/libexec/git-core:<span class="token variable">$PATHEOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 Git。我们直接执行如下命令配置 Git</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"Xinwei Xiong"</span>    <span class="token comment"># 用户名改成自己的</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"3293172751nss@gmail.com"</span>    <span class="token comment"># 邮箱改成自己的</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper store    <span class="token comment"># 设置 Git，保存用户名和密码</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> core.longpaths <span class="token boolean">true</span> <span class="token comment"># 解决 Git 中 'Filename too long' 的错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了按照上述步骤配置 Git 之外，我们还有几点需要注意。首先，在 Git 中，我们会把非 ASCII 字符叫做 Unusual 字符。这类字符在 Git 输出到终端的时候默认是用 8 进制转义字符输出的（以防乱码），但现在的终端多数都支持直接显示非 ASCII 字符，所以我们可以关闭掉这个特性，具体的命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.quotepath off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其次，GitHub 限制最大只能克隆 100M 的单个文件，为了能够克隆大于 100M 的文件，我们还需要安装 Git Large File Storage，安装方式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> lfs <span class="token function">install</span> --skip-repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="go语言环境变量设置和含义" tabindex="-1"><a class="header-anchor" href="#go语言环境变量设置和含义" aria-hidden="true">#</a> go语言环境变量设置和含义</h2>
<p><strong>我们在设置Go语言的环境变量：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">tee</span> <span class="token parameter variable">-a</span> <span class="token environment constant">$HOME</span>/.bashrc <span class="token operator">&lt;&lt;</span><span class="token string">'EOF'
# Go envs
export GOVERSION=go1.18.3 # Go 版本设置
export GO_INSTALL_DIR=$HOME/go # Go 安装目录
export GOROOT=$GO_INSTALL_DIR/$GOVERSION # GOROOT 设置
export GOPATH=$WORKSPACE/golang # GOPATH 设置
export PATH=$GOROOT/bin:$GOPATH/bin:$PATH # 将 Go 语言自带的和通过 go install 安装的二进制文件加入到 PATH 路径中
export GO111MODULE="on" # 开启 Go moudles 特性
export GOPROXY=https://goproxy.cn,direct # 安装 Go 模块时，代理服务器设置
export GOPRIVATE=
export GOSUMDB=off # 关闭校验 Go 依赖包的哈希值
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么要增加这么多环境变量呢？这是因为，Go 语言是通过一系列的环境变量来控制 Go 编译器行为的。因此，我们一定要理解每一个环境变量的含义。</p>
<p><img src="http://sm.nsddd.top/sm202301152355839.png" alt="image-20230115235526661"></p>
<p>因为 Go 以后会用 Go modules 来管理依赖，所以我建议你将 GO111MODULE 设置为 on。</p>
<p>在使用模块的时候，<code v-pre>$GOPATH</code> 是无意义的，不过它还是会把下载的依赖储存在 <code v-pre>$GOPATH/pkg/mod</code> 目录中，也会把 go install 的二进制文件存放在 <code v-pre>$GOPATH/bin</code> 目录中。</p>
<p>另外，我们还要将 <code v-pre>$GOPATH/bin</code>、<code v-pre>$GOROOT/bin</code> 加入到 Linux 可执行文件搜索路径中。这样一来，我们就可以直接在 bash shell 中执行 go 自带的命令，以及通过 go install 安装的命令。</p>
<h2 id="vim-go-plug" tabindex="-1"><a class="header-anchor" href="#vim-go-plug" aria-hidden="true">#</a> vim go-plug</h2>
<p>安装：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>git clone <span class="token operator">--</span>depth<span class="token operator">=</span><span class="token number">1</span> https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>fatih<span class="token operator">/</span>vim<span class="token operator">-</span><span class="token keyword">go</span><span class="token punctuation">.</span>git ~<span class="token operator">/</span><span class="token punctuation">.</span>vim<span class="token operator">/</span>pack<span class="token operator">/</span>plugins<span class="token operator">/</span>start<span class="token operator">/</span>vim<span class="token operator">-</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vim-go 会用到一些 Go 工具，比如在函数跳转时会用到 guru、godef 工具，在格式化时会用到 goimports，所以你也需要安装这些工具。安装方式如下：执行 <code v-pre>vi /tmp/test.go</code>，然后输入 <code v-pre>:GoInstallBinaries</code> 安装 vim-go 需要的工具。安装后的 Go IDE 常用操作的按键映射如下表所示：</p>
<p><img src="http://sm.nsddd.top/sm202301161958824.png" alt="image-20230116195849590"></p>
<h2 id="protobuf-编译环境安装" tabindex="-1"><a class="header-anchor" href="#protobuf-编译环境安装" aria-hidden="true">#</a> ProtoBuf 编译环境安装</h2>
<p>接着，我们再来安装 <code v-pre>protobuf</code> 的编译器 <code v-pre>protoc</code>。<code v-pre>protoc</code> 需要 <code v-pre>protoc-gen-go</code> 来完成 Go 语言的代码转换，因此我们需要安装 <code v-pre>protoc</code> 和 <code v-pre>protoc-gen-go</code> 这 2 个工具。它们的安装方法比较简单，你直接看我下面给出的代码和操作注释就可以了。</p>
<blockquote>
<p>Protocol Buffers（缩写为 protobuf）是 Google 开发的一种数据交换格式。它是一种结构化数据存储格式，可用于结构化数据串行化，或者说把数据从程序中“变成”字节流，又可以把字节流重新“变成”程序中的数据。由于 protobuf 是跨语言的，所以它可以被多种语言的程序使用。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 第一步：安装 protobuf</span>
$ <span class="token builtin class-name">cd</span> /tmp/
$ <span class="token function">git</span> clone <span class="token parameter variable">-b</span> v3.21.1 <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span> https://github.com/protocolbuffers/protobuf
$ <span class="token builtin class-name">cd</span> protobuf
$ ./autogen.sh
$ ./configure
$ <span class="token function">make</span>
$ <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
$ protoc <span class="token parameter variable">--version</span> <span class="token comment"># 查看 protoc 版本，成功输出版本号，说明安装成功</span>
libprotoc <span class="token number">3.21</span>.1

<span class="token comment"># 第二步：安装 protoc-gen-go</span>
$ go <span class="token function">install</span> github.com/golang/protobuf/protoc-gen-go@v1.5.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iam手动部署" tabindex="-1"><a class="header-anchor" href="#iam手动部署" aria-hidden="true">#</a> IAM手动部署</h2>
<blockquote>
<p>和Kubernetes一样，可以支持手动部署和自动部署。</p>
</blockquote>
<p>IAM 系统是一个企业级的项目，有一定的复杂度，安装的话需要小心~</p>
<p><strong>部署的步骤：</strong></p>
<ol>
<li>安装和配置数据库：我们需要安装和配置 MariaDB、Redis 和 MongoDB。</li>
<li>安装和配置 IAM 服务：我们需要安装和配置 iam-apiserver、iam-authz-server、iam-pump、iamctl 和 man 文件。</li>
</ol>
<blockquote>
<p>有的人直接将整个环境打包了：</p>
<p>我自己是在 docker 容器中部署的，我把项目部署好的容器打包上传了，有需要的同学可以直接拉下来用（<code v-pre>docker pull mjcjm/centos-go-project</code>），启动参数一定要用：<code v-pre>docker run -tid --name</code> 容器名称  <code v-pre>-v /sys/fs/cgroup:/sys/fs/cgroup  --privileged=true</code> 镜像 <code v-pre>id /usr/sbin/init</code>。</p>
</blockquote>
<h3 id="下载项目代码" tabindex="-1"><a class="header-anchor" href="#下载项目代码" aria-hidden="true">#</a> 下载项目代码</h3>
<p>因为 IAM 的安装脚本存放在 iam 代码仓库中，安装需要的二进制文件也需要通过 iam 代码构建，所以在安装之前，我们需要先下载 iam 代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token variable">$WORKSPACE</span>
$ <span class="token function">git</span> clone https://github.com/cubxxw/iam.git
$ go work use ./iam
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>设置别名和环境变量：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Alias for quick access</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOSRC</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$WORKSPACE</span>/"</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">IAM_ROOT</span><span class="token operator">=</span><span class="token string">"<span class="token environment constant">$HOME</span>/workspces/iam"</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">mm</span><span class="token operator">=</span><span class="token string">"cd <span class="token environment constant">$HOME</span>/workspces"</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token string">"cd <span class="token environment constant">$HOME</span>/workspces/iam"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在安装配置IAM系统之前需要你执行以下命令export <code v-pre>going</code> 用户的密码，这里假设密码是 <code v-pre>iam59!z$</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">LINUX_PASSWORD</span><span class="token operator">=</span><span class="token string">'iam59!z$'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在项目开发中，像密码、密钥 Key 这类敏感信息，一般不会直接硬编码在系统中，而是通过环境变量的方式来使用。现网应用的配置文件是存放在一个安全的网络环境中，并且有访问授权流程，比较安全，这种配置文件中是可以配置密码等敏感信息的。</p>
<h2 id="安装和配置数据库" tabindex="-1"><a class="header-anchor" href="#安装和配置数据库" aria-hidden="true">#</a> 安装和配置数据库</h2>
<p>因为 IAM 系统用到了 MariaDB、Redis、MongoDB 数据库来存储数据，而 IAM 服务在启动时会先尝试连接这些数据库，所以为了避免启动时连接数据库失败，这里我们先来安装需要的数据库。</p>
<p>IAM 组件的安装配置都是通过环境变量文件 <code v-pre>scripts/install/environment.sh</code> 进行配置的，所以你需要先配置好 <code v-pre>scripts/install/environment.sh</code>。文件中的环境变量都有注释，你可以根据注释来配置。当然，你也可以直接使用<code v-pre>environment.sh</code>中配置的默认值，以提高你的安装效率。</p>
<p><code v-pre>scripts/install/environment.sh</code>文件中配置MariaDB用户名的配置语句如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">readonly</span> <span class="token assign-left variable">MARIADB_USERNAME</span><span class="token operator">=</span><span class="token variable">${MARIADB_USERNAME<span class="token operator">:-</span>iam}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>readonly</code>说明<code v-pre>MARIADB_USERNAME</code>只能被赋值一次。<code v-pre>${MARIADB_USERNAME:-iam}</code>使用了Bash shell的变量扩展语法，其语法格式为<code v-pre>${待测变量:-默认值}</code>，表示：如果待测变量不存在或其值为空，则返回默认值，否则返回待测变量的值。</p>
<h3 id="安装和配置-mariadb" tabindex="-1"><a class="header-anchor" href="#安装和配置-mariadb" aria-hidden="true">#</a> 安装和配置 MariaDB</h3>
<ul>
<li><a href="https://github.com/MariaDB/server" target="_blank" rel="noopener noreferrer">开源的 GitHub 地址<ExternalLinkIcon/></a></li>
</ul>
<p>IAM 会把 REST 资源的定义信息存储在关系型数据库中，关系型数据库我选择了 MariaDB。为啥选择 MariaDB，而不是 MySQL 呢？。选择 MariaDB 一方面是因为它是发展最快的 MySQL 分支，相比 MySQL，它加入了很多新的特性，并且它能够完全兼容 MySQL，包括 API 和命令行。另一方面是因为 MariaDB 是开源的，而且迭代速度很快。首先，我们可以通过以下命令安装和配置 MariaDB，并将 Root 密码设置为 <code v-pre>1234</code>：</p>
<blockquote>
<p>MariaDB vs Mysql:</p>
<p>MariaDB是一种关系型数据库管理系统，是MySQL的一个分支。两者在技术上基本相同，但MariaDB有一些额外的特性和功能。</p>
<p>一个明显的区别是MariaDB是一个开源项目，而MySQL是Oracle公司拥有和维护。</p>
<p>MariaDB还添加了一些新特性，如支持更高版本的SQL标准和更好的性能，还有一些安全性增强。</p>
<p>但是, 一般来说，MariaDB和MySQL的性能相当接近，因为它们使用相同的存储引擎。</p>
<p>在一些情况下，MariaDB可能会更快，因为它有一些额外的优化和特性，例如更新的SQL解析器和更快的查询优化器。</p>
<p>另外, 也有一些测试结果表明MariaDB的性能比MySQL更优秀，但是这取决于具体的场景和使用方式。</p>
<p>对于开发人员来说，两者的语法和API几乎相同，所以从MySQL迁移到MariaDB是非常简单的。</p>
<p>总的来说，MariaDB是MySQL的一个很好的替代品，它在继承了MySQL的优秀特性的同时，还添加了许多新功能。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$IAM_ROOT</span><span class="token punctuation">;</span> ./scripts/install/mariadb.sh iam::mariadb::install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis" aria-hidden="true">#</a> 安装redis</h3>
<p>在 IAM 系统中，由于 iam-authz-server 是从 iam-apiserver 拉取并缓存用户的密钥/策略信息的，因此同一份密钥/策略数据会分别存在 2 个服务中，这可能会出现数据不一致的情况。数据不一致会带来一些问题，例如当我们通过 iam-apiserver 创建了一对密钥，但是这对密钥还没有被 iam-authz-server 缓存，这时候通过这对密钥访问 iam-authz-server 就会访问失败。</p>
<p>为了保证数据的一致性，我们可以使用 Redis 的发布订阅(pub/sub)功能进行消息通知。同时，iam-authz-server 也会将授权审计日志缓存到 Redis 中，所以也需要安装 Redis key-value 数据库。我们可以通过以下命令来安装和配置 Redis，并将 Redis 的初始密码设置为 <code v-pre>iam59!z$</code> ：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$IAM_ROOT</span>$ ./scripts/install/redis.sh iam::redis::install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里我们要注意，scripts/install/redis.sh 脚本中 iam::redis::install 函数对 Redis 做了一些配置，例如修改 Redis 使其以守护进程的方式运行、修改 Redis 的密码为 <code v-pre>iam59!z$</code>等，详细配置可参考函数 <a href="https://github.com/marmotedu/iam/blob/v1.0.0/scripts/install/redis.sh#L20" target="_blank" rel="noopener noreferrer">iam::redis::install<ExternalLinkIcon/></a> 函数。</p>
<p>安装完成后，我们可以通过以下命令，来测试 Redis 是否安装成功：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>redis-cli <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token parameter variable">-a</span> <span class="token string">'iam59!z$'</span> 
<span class="token comment"># 连接 Redis，-h 指定主机，-p 指定监听端口，-a 指定登录密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装和配置-mongodb" tabindex="-1"><a class="header-anchor" href="#安装和配置-mongodb" aria-hidden="true">#</a> 安装和配置 MongoDB</h3>
<p>因为 iam-pump 会将 iam-authz-server 产生的数据处理后存储在 MongoDB 中，所以我们也需要安装 MongoDB 数据库。主要分两步安装：首先安装 MongoDB，然后再创建 MongoDB 账号。</p>
<h4 id="第-1-步-安装-mongodb" tabindex="-1"><a class="header-anchor" href="#第-1-步-安装-mongodb" aria-hidden="true">#</a> 第 1 步，安装 MongoDB</h4>
<p>首先，我们可以通过以下 4 步来安装 MongoDB。</p>
<ol>
<li>配置 MongoDB yum 源，并安装 MongoDB。</li>
</ol>
<p>CentOS8.x 系统默认没有配置安装 MongoDB 需要的 yum 源，所以我们需要先配置好 yum 源再安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/mongodb-org-5.0.repo<span class="token operator">&lt;&lt;</span><span class="token string">'EOF'</span><span class="token punctuation">[</span>mongodb-org-5.0<span class="token punctuation">]</span>name<span class="token operator">=</span>MongoDB <span class="token assign-left variable">Repositorybaseurl</span><span class="token operator">=</span>https://repo.mongodb.org/yum/redhat/<span class="token variable">$releasever</span>/mongodb-org/5.0/x86_64/gpgcheck<span class="token operator">=</span>1enabled<span class="token operator">=</span>1gpgkey<span class="token operator">=</span>https://www.mongodb.org/static/pgp/server-5.0.ascEOF $ <span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mongodb-org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>关闭 SELinux。</li>
</ol>
<p>在安装的过程中，SELinux 有可能会阻止 MongoDB 访问/sys/fs/cgroup，所以我们还需要关闭 SELinux：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> setenforce <span class="token number">0</span>$ <span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/SELINUX=.*$/SELINUX=disabled/'</span> /etc/selinux/config <span class="token comment"># 永久关闭 SELINUX</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>开启外网访问权限和登录验证。</li>
</ol>
<p>MongoDB 安装完之后，默认情况下是不会开启外网访问权限和登录验证，为了方便使用，我建议你先开启这些功能，执行如下命令开启：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ sudo sed -i '/bindIp/{s/127.0.0.1/0.0.0.0/}' /etc/mongod.conf$ sudo sed -i '/#security/asecurity:n  authorization: enabled' /etc/mongod.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>启动 MongoDB。</li>
</ol>
<p>配置完 MongoDB 之后，我们就可以启动它了，具体的命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl start mongod$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> mongod 
<span class="token comment"># 设置开机启动$ sudo systemctl status mongod </span>
<span class="token comment"># 查看 mongod 运行状态，如果输出中包含 active (running)字样说明 mongod 成功启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完 MongoDB 后，我们就可以通过 <code v-pre>mongo</code> 命令登录 MongoDB Shell。如果没有报错，就说明 MongoDB 被成功安装了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mongosh <span class="token parameter variable">--quiet</span> "mongodb://127.0.0.1:27017<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>test<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="第-2-步-创建-mongodb-账号" tabindex="-1"><a class="header-anchor" href="#第-2-步-创建-mongodb-账号" aria-hidden="true">#</a> 第 2 步，创建 MongoDB 账号</h4>
<p>安装完 MongoDB 之后，默认是没有用户账号的，为了方便 IAM 服务使用，我们需要先创建好管理员账号，通过管理员账户登录 MongoDB，我们可以执行创建普通用户、数据库等操作。</p>
<ol>
<li>创建管理员账户。</li>
</ol>
<p>首先，我们通过 <code v-pre>use admin</code> 指令切换到 admin 数据库，再通过 <code v-pre>db.auth(&quot;用户名&quot;，&quot;用户密码&quot;)</code> 验证用户登录权限。如果返回 1 表示验证成功；如果返回 0 表示验证失败。具体的命令如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ mongosh --quiet "mongodb://127.0.0.1:27017&amp;quot;test> use adminswitched to db adminadmin> db.createUser({user:"root",pwd:"iam59!z$",roles:["root"]}){ ok: 1 }admin> db.auth("root", "iam59!z$"){ ok: 1 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，如果想删除用户，可以使用 <code v-pre>db.dropUser(&quot;用户名&quot;)</code> 命令。</p>
<p><code v-pre>db.createUser</code> 用到了以下 3 个参数。</p>
<ul>
<li>user: 用户名。</li>
<li>pwd: 用户密码。</li>
<li>roles: 用来设置用户的权限，比如读、读写、写等。</li>
</ul>
<p>因为 admin 用户具有 MongoDB 的 Root 权限，权限过大安全性会降低。为了提高安全性，我们还需要创建一个 iam 普通用户来连接和操作 MongoDB。</p>
<ol>
<li>创建 iam 用户，命令如下：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ mongosh --quiet mongodb://root:'iam59!z$'@127.0.0.1:27017/iam_analytics?authSource=admin # 用管理员账户连接 MongoDBiam_analytics> db.createUser({user:"iam",pwd:"iam59!z$",roles:["dbOwner"]}){ ok: 1 }iam_analytics> db.auth("iam", "iam59!z$"){ ok: 1 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建完 iam 普通用户后，我们就可以通过 iam 用户登录 MongoDB 了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ mongosh --quiet mongodb://iam:'iam59!z$'@127.0.0.1:27017/iam_analytics?authSource=iam_analytics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此，我们成功安装了 IAM 系统需要的数据库 MariaDB、Redis 和 MongoDB。</p>
<h2 id="安装和配置-iam-系统" tabindex="-1"><a class="header-anchor" href="#安装和配置-iam-系统" aria-hidden="true">#</a> 安装和配置 IAM 系统</h2>
<p>要想完成 IAM 系统的安装，我们还需要安装和配置 iam-apiserver、iam-authz-server、iam-pump 和 iamctl。这些组件的功能我们在<a href="https://time.geekbang.org/column/article/377998" target="_blank" rel="noopener noreferrer">第1讲<ExternalLinkIcon/></a>详细讲过，如果不记得你可以翻回去看看。</p>
<blockquote>
<p>提示：IAM 项目我会长期维护、定期更新，欢迎你 Star &amp; Contributing。</p>
</blockquote>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '1.md' style='float:left'>⬆️上一节🔗  </a><a href = '3.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


