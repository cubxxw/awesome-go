<template><div><h1 id="go-air实现热加载" tabindex="-1"><a class="header-anchor" href="#go-air实现热加载" aria-hidden="true">#</a> go-air实现热加载</h1>
<p>[toc]</p>
<h2 id="go-air" tabindex="-1"><a class="header-anchor" href="#go-air" aria-hidden="true">#</a> go air</h2>
<p>☁️ 热重载 Go 应用的工具</p>
<h2 id="特色" tabindex="-1"><a class="header-anchor" href="#特色" aria-hidden="true">#</a> 特色</h2>
<ul>
<li>彩色的日志输出</li>
<li>自定义构建或必要的命令</li>
<li>支持外部子目录</li>
<li>在 Air 启动之后，允许监听新创建的路径</li>
<li>更棒的构建过程</li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<blockquote>
<p>go-air支持几种安装方式</p>
</blockquote>
<h3 id="推荐使用-install-sh" tabindex="-1"><a class="header-anchor" href="#推荐使用-install-sh" aria-hidden="true">#</a> 推荐使用 install.sh</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># binary 文件会是在 $(go env GOPATH)/bin/air
curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# 或者把它安装在 ./bin/ 路径下
curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s

air -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>P.S. 非常感谢 mattn 的 <a href="https://github.com/cosmtrek/air/pull/1" target="_blank" rel="noopener noreferrer">PR<ExternalLinkIcon/></a>，使得 Air 支持 Windows 平台。</p>
<h3 id="✨-beta-版本的特性" tabindex="-1"><a class="header-anchor" href="#✨-beta-版本的特性" aria-hidden="true">#</a> ✨ beta 版本的特性</h3>
<p>支持使用参数来配置 air 字段:</p>
<p>如果你只是想配置构建命令和运行命令，您可以直接使用以下命令，而无需配置文件:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>air --build.cmd "go build -o bin/api cmd/run.go" --build.bin "./bin/api"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于以列表形式输入的参数，使用逗号来分隔项目:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>air --build.cmd "go build -o bin/api cmd/run.go" --build.bin "./bin/api" --build.exclude_dir "templates,build"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h2>
<h3 id="推荐使用-install-sh-1" tabindex="-1"><a class="header-anchor" href="#推荐使用-install-sh-1" aria-hidden="true">#</a> 推荐使用 install.sh</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># binary 文件会是在 $(go env GOPATH)/bin/air
curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# 或者把它安装在 ./bin/ 路径下
curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s

air -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>P.S. 非常感谢 mattn 的 <a href="https://github.com/cosmtrek/air/pull/1" target="_blank" rel="noopener noreferrer">PR<ExternalLinkIcon/></a>，使得 Air 支持 Windows 平台。</p>
<h3 id="使用-go-install" tabindex="-1"><a class="header-anchor" href="#使用-go-install" aria-hidden="true">#</a> 使用 go install</h3>
<p>使用 Go 的版本为 1.16 或更高:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go install github.com/cosmtrek/air@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://github.com/cosmtrek/air/raw/master/docs/air.png" alt="air"></p>
<h3 id="使用docker" tabindex="-1"><a class="header-anchor" href="#使用docker" aria-hidden="true">#</a> 使用Docker</h3>
<p>请拉取这个 Docker 镜像 <a href="https://hub.docker.com/r/cosmtrek/air" target="_blank" rel="noopener noreferrer">cosmtrek/air<ExternalLinkIcon/></a>.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -it --rm \
    -w "&lt;PROJECT>" \
    -e "air_wd=&lt;PROJECT>" \
    -v $(pwd):&lt;PROJECT> \
    -p &lt;PORT>:&lt;APP SERVER PORT> \
    cosmtrek/air
    -c &lt;CONF>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，我的项目之一是在 Docker 上运行的：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -it --rm \
    -w "/go/src/github.com/cosmtrek/hub" \
    -v $(pwd):/go/src/github.com/cosmtrek/hub \
    -p 9090:9090 \
    cosmtrek/air
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<p>您可以添加 <code v-pre>alias air='~/.air'</code> 到您的 <code v-pre>.bashrc</code> 或 <code v-pre>.zshrc</code> 后缀的文件.</p>
<p>首先，进入你的项目文件夹</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd /path/to/your_project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最简单的方法是执行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 优先在当前路径查找 `.air.toml` 后缀的文件，如果没有找到，则使用默认的
air -c .air.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以运行以下命令初始化，把默认配置添加到当前路径下的<code v-pre>.air.toml</code> 文件。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>air init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这之后，你只需执行 <code v-pre>air</code> 命令，无需添加额外的变量，它就能使用 <code v-pre>.air.toml</code> 文件中的配置了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>air
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如欲修改配置信息，请参考 <a href="https://github.com/cosmtrek/air/blob/master/air_example.toml" target="_blank" rel="noopener noreferrer">air_example.toml<ExternalLinkIcon/></a> 文件.</p>
<h3 id="运行时参数" tabindex="-1"><a class="header-anchor" href="#运行时参数" aria-hidden="true">#</a> 运行时参数</h3>
<p>您可以通过把变量添加在 air 命令之后来传递参数。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 会执行 ./tmp/main bench
air bench

# 会执行 ./tmp/main server --port 8080
air server --port 8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can separate the arguments passed for the air command and the built binary with <code v-pre>--</code> argument.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 会运行 ./tmp/main -h
air -- -h

# 会使用个性化配置来运行 air，然后把 -h 后的变量和值添加到运行的参数中
air -c .air.toml -- -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker-compose</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>services:
  my-project-with-air:
    image: cosmtrek/air
    # working_dir value has to be the same of mapped volume
    working_dir: /project-package
    ports:
      - &lt;any>:&lt;any>
    environment:
      - ENV_A=${ENV_A}
      - ENV_B=${ENV_B}
      - ENV_C=${ENV_C}
    volumes:
      - ./project-relative-path/:/project-package/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调试" tabindex="-1"><a class="header-anchor" href="#调试" aria-hidden="true">#</a> 调试</h3>
<p>运行 <code v-pre>air -d</code> 命令能打印所有日志。</p>
<h2 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h2>
<h3 id="遇到-command-not-found-air-或-no-such-file-or-directory-该怎么办" tabindex="-1"><a class="header-anchor" href="#遇到-command-not-found-air-或-no-such-file-or-directory-该怎么办" aria-hidden="true">#</a> 遇到 &quot;command not found: air&quot; 或 &quot;No such file or directory&quot; 该怎么办？</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export GOPATH=$HOME/xxxxx
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
export PATH=$PATH:$(go env GOPATH)/bin &lt;---- 请确认这行在您的配置信息中！！！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2>
<p>请注意：这需要 Go 1.16+ ，因为我使用 <code v-pre>go mod</code> 来管理依赖。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 1. 首先复刻（fork）这个项目

# 2. 其次克隆（clone）它
mkdir -p $GOPATH/src/github.com/cosmtrek
cd $GOPATH/src/github.com/cosmtrek
git clone git@github.com:&lt;YOUR USERNAME>/air.git

# 3. 再次安装依赖
cd air
make ci

# 4. 这样就可以快乐地探索和玩耍啦！
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>顺便说一句: 欢迎 PR~</p>
<h3 id="发布新版本" tabindex="-1"><a class="header-anchor" href="#发布新版本" aria-hidden="true">#</a> 发布新版本</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 1. checkout 到 master 分支
git checkout master

# 2. 添加需要发布的版本号
git tag v1.xx.x

# 3. 推送到远程
git push origin v1.xx.x

ci 会加工和处理，然后会发布新版本。等待大约五分钟，你就能获取到新版本了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


