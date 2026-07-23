<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第9节-静态代码检测" tabindex="-1"><a class="header-anchor" href="#第9节-静态代码检测" aria-hidden="true">#</a> 第9节 静态代码检测</h1>
<br>
<div><a href = '8.md' style='float:left'>⬆️上一节🔗  </a><a href = '10.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://cubxxw.com/" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#选择-golangci-lint-做静态代码检查">选择 golangci-lint 做静态代码检查</router-link></li><li><router-link to="#命令">命令</router-link><ul><li><router-link to="#run-命令">run 命令</router-link></li><li><router-link to="#cache-命令">cache 命令</router-link></li><li><router-link to="#completion-命令">completion 命令</router-link></li><li><router-link to="#config-命令">config 命令</router-link></li><li><router-link to="#linters-命令">linters 命令</router-link></li></ul></li><li><router-link to="#golangci-lint-配置">golangci-lint 配置</router-link></li><li><router-link to="#如何使用-golangci-lint-进行静态代码检查">如何使用 golangci-lint 进行静态代码检查？</router-link></li><li><router-link to="#golangci-lint-使用技巧">golangci-lint 使用技巧</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="选择-golangci-lint-做静态代码检查" tabindex="-1"><a class="header-anchor" href="#选择-golangci-lint-做静态代码检查" aria-hidden="true">#</a> 选择 golangci-lint 做静态代码检查</h2>
<ul>
<li><a href="https://cubxxw.com/archives/golangci" target="_blank" rel="noopener noreferrer">博客文章地址：<strong>golangci-lin: Fast linters Runner for Go</strong><ExternalLinkIcon/></a></li>
</ul>
<p>在做 Go 项目开发的过程中，我们肯定需要对 Go 代码做静态代码检查。虽然 Go 命令提供了 go vet 和 go tool vet，但是它们检查的内容还不够全面，我们需要一种更加强大的静态代码检查工具。</p>
<p><code v-pre>golangci-lint</code>，是目前使用最多，也最受欢迎的静态代码检查工具。</p>
<p><strong>优点：</strong></p>
<ul>
<li><strong>速度非常快</strong>：golangci-lint 是基于 gometalinter 开发的，但是平均速度要比 gometalinter 快 5 倍。golangci-lint 速度快的原因有三个：可以并行检查代码；可以复用 go build 缓存；会缓存分析结果。</li>
<li><strong>可配置</strong>：支持 YAML 格式的配置文件，让检查更灵活，更可控。</li>
<li><strong>IDE 集成</strong>：可以集成进多个主流的 IDE，例如 VS Code、GNU Emacs、Sublime Text、Goland 等。</li>
<li><strong>linter 聚合器</strong>：1.41.1 版本的 golangci-lint 集成了 76 个 linter，不需要再单独安装这 76 个 linter。并且 golangci-lint 还支持自定义 linter。</li>
<li><strong>最小的误报数</strong>：golangci-lint 调整了所集成 linter 的默认设置，大幅度减少了误报。</li>
<li><strong>良好的输出</strong>：输出的结果带有颜色、代码行号和 linter 标识，易于查看和定位。</li>
</ul>
<p><strong>下图是一个 golangci-lint 的检查结果：</strong></p>
<p><img src="http://sm.cubxxw.com/sm202302211020592.png" alt="image-20230221102053513"></p>
<p><strong>你可以看到，输出的检查结果中包括如下信息：</strong></p>
<ul>
<li>检查出问题的源码文件、行号和错误行内容。</li>
<li>出问题的原因，也就是打印出不符合检查规则的原因。</li>
<li>报错的 linter。</li>
</ul>
<p>通过查看 golangci-lint 的输出结果，可以准确地定位到报错的位置，快速弄明白报错的原因，方便开发者修复。</p>
<p>除此之外，<strong>golangci-lint 还有一个非常大的优点：当前更新迭代速度很快，不断有新的 linter 被集成到 golangci-lint 中。有这么全的 linter 为你的代码保驾护航，你在交付代码时肯定会更有自信。</strong></p>
<h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2>
<p>在使用之前，首先需要安装 golangci-lint。golangci-lint 的安装方法也很简单，你只需要执行以下命令，就可以安装了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go get github.com/golangci/golangci-lint/cmd/golangci-lint@v1.41.1
$ golangci-lint version <span class="token comment"># 输出 golangci-lint 版本号，说明安装成功</span>
golangci-lint has version v1.50.1 built from <span class="token punctuation">(</span>unknown, mod sum: <span class="token string">"h1:C829clMcZXEORakZlwpk7M4iDw2XiwxxKaG504SZ9zY="</span><span class="token punctuation">)</span> on <span class="token punctuation">(</span>unknown<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里注意，为了避免安装失败，强烈建议你安装 <code v-pre>golangci-lint releases page</code> 中的指定版本，例如 v1.41.1。</p>
<p><strong>除此之外，我们应该定期的检查 golangCI 的版本。</strong></p>
<p><strong><code v-pre>golangci-link</code> 支持的子命令如下：</strong></p>
<p><img src="https://sm.cubxxw.com/sm202302211046519.png" alt="image-20230221104642416"></p>
<p>此外，<code v-pre>golangci-lint</code> 还支持一些全局选项。全局选项是指适用于所有子命令的选项，<code v-pre>golangci-lint</code> 支持的全局选项如下：</p>
<p><img src="http://sm.cubxxw.com/sm202302211048863.png" alt="image-20230221104814768"></p>
<h3 id="run-命令" tabindex="-1"><a class="header-anchor" href="#run-命令" aria-hidden="true">#</a> run 命令</h3>
<p>run 命令执行 <code v-pre>golangci-lint</code>，对代码进行检查，是 <code v-pre>golangci-lint</code> 最为核心的一个命令。run 没有子命令，但有很多选项。run 命令的具体使用方法，我会在讲解如何执行静态代码检查的时候详细介绍。</p>
<h3 id="cache-命令" tabindex="-1"><a class="header-anchor" href="#cache-命令" aria-hidden="true">#</a> cache 命令</h3>
<p>cache 命令用来进行缓存控制，并打印缓存的信息。它包含两个子命令：</p>
<ul>
<li>
<p>clean 用来清除 cache，当我们觉得 cache 的内容异常，或者 cache 占用空间过大时，可以通过 <code v-pre>golangci-lint cache clean</code> 清除 <code v-pre>cache</code>。</p>
</li>
<li>
<p>status 用来打印 cache 的状态，比如 cache 的存放目录和 cache 的大小，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint cache status
Dir: /home/colin/.cache/golangci-lint
Size: <span class="token number">773</span>.4KiB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="completion-命令" tabindex="-1"><a class="header-anchor" href="#completion-命令" aria-hidden="true">#</a> completion 命令</h3>
<p>completion 命令包含 4 个子命令 bash、fish、powershell 和 zsh，分别用来输出 bash、fish、powershell 和 zsh 的自动补全脚本。</p>
<p><strong>下面是一个配置 bash 自动补全的示例：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint completion <span class="token function">bash</span> <span class="token operator">></span> ~/.golangci-lint.bash
$ <span class="token builtin class-name">echo</span> <span class="token string">"source '<span class="token environment constant">$HOME</span>/.golangci-lint.bash'"</span> <span class="token operator">>></span> ~/.bashrc
$ <span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完上面的命令，键入如下命令，即可自动补全子命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint comp<span class="token operator">&lt;</span>TAB<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令行会自动补全为 <code v-pre>golangci-lint completion</code> 。</p>
<p><strong>下面是一个 zsh 自动补全的示例：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ golangci-lint completion zsh > ~/.golangci-lint.zsh
$ echo "source '$HOME/.golangci-lint.zsh'" >> ~/.zshrc
$ source ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.cubxxw.com/sm202302211118569.png" alt="image-20230221111851509"></p>
<h3 id="config-命令" tabindex="-1"><a class="header-anchor" href="#config-命令" aria-hidden="true">#</a> config 命令</h3>
<p>config 命令可以打印 golangci-lint 当前使用的配置文件路径，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint config path
.golangci.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linters-命令" tabindex="-1"><a class="header-anchor" href="#linters-命令" aria-hidden="true">#</a> linters 命令</h3>
<p>linters 命令可以打印出 <code v-pre>golangci-lint</code> 所支持的 linter，并将这些 linter 分成两类，分别是配置为启用的 linter 和配置为禁用的 linter，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint linters
Enabled by your configuration linters:
<span class="token punctuation">..</span>.
deadcode: Finds unused code <span class="token punctuation">[</span>fast: true, auto-fix: false<span class="token punctuation">]</span>
<span class="token punctuation">..</span>.
Disabled by your configuration linters:
exportloopref: checks <span class="token keyword">for</span> pointers to enclosing loop variables <span class="token punctuation">[</span>fast: true, auto-fix: false<span class="token punctuation">]</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="golangci-lint-配置" tabindex="-1"><a class="header-anchor" href="#golangci-lint-配置" aria-hidden="true">#</a> golangci-lint 配置</h2>
<p>和其他 linter 相比，golangci-lint 一个非常大的优点是使用起来非常灵活，这要得益于它对自定义配置的支持。</p>
<p>golangci-lint 支持两种配置方式，分别是命令行选项和配置文件。如果 bool/string/int 的选项同时在命令行选项和配置文件中被指定，命令行的选项就会覆盖配置文件中的选项。如果是 slice 类型的选项，则命令行和配置中的配置会进行合并。</p>
<p>golangci-lint run 支持很多命令行选项，可通过golangci-lint run -h查看，这里选择一些比较重要的选项进行介绍，见下表：</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--config</code></td>
<td>指定golangci-lint的配置文件路径</td>
</tr>
<tr>
<td><code v-pre>--deadline</code></td>
<td>指定lint的最大执行时间，超时则退出</td>
</tr>
<tr>
<td><code v-pre>--disable</code></td>
<td>禁用指定的lint检查</td>
</tr>
<tr>
<td><code v-pre>--enable</code></td>
<td>启用指定的lint检查</td>
</tr>
<tr>
<td><code v-pre>--exclude</code></td>
<td>排除指定的文件或目录</td>
</tr>
<tr>
<td><code v-pre>--fix</code></td>
<td>修复lint能够自动修复的问题</td>
</tr>
<tr>
<td><code v-pre>--issues-exit-code</code></td>
<td>指定lint存在问题时的退出码</td>
</tr>
<tr>
<td><code v-pre>--print-issued-lines</code></td>
<td>打印具体哪一行存在问题</td>
</tr>
<tr>
<td><code v-pre>--skip-dirs</code></td>
<td>跳过指定的目录</td>
</tr>
<tr>
<td><code v-pre>--skip-files</code></td>
<td>跳过指定的文件</td>
</tr>
<tr>
<td><code v-pre>--timeout</code></td>
<td>指定lint的最大执行时间，超时则退出</td>
</tr>
<tr>
<td><code v-pre>--tests</code></td>
<td>包括测试文件</td>
</tr>
<tr>
<td><code v-pre>--vendor</code></td>
<td>包括vendor目录下的代码</td>
</tr>
<tr>
<td><code v-pre>--verbose</code></td>
<td>显示详细的输出信息</td>
</tr>
</tbody>
</table>
<blockquote>
<p>以上是一些常用的golangci-lint命令行选项，包括指定配置文件路径、控制lint执行的时间和范围、禁用或启用某些检查、修复能够自动修复的问题等等。这些选项可以帮助我们更好地控制lint的行为，提高代码质量和开发效率。</p>
</blockquote>
<p>此外，我们还可以通过 <code v-pre>golangci-lint</code>配置文件进行配置，默认的配置文件名为<code v-pre>.golangci.yaml</code>、<code v-pre>.golangci.toml</code>、<code v-pre>.golangci.json</code>，可以通过<code v-pre>-c</code>选项指定配置文件名。通过配置文件，可以实现下面几类功能：</p>
<ul>
<li>golangci-lint 本身的一些选项，比如超时、并发，是否检查*_test.go文件等。</li>
<li>配置需要忽略的文件和文件夹。</li>
<li>配置启用哪些 linter，禁用哪些 linter。</li>
<li>配置输出格式。</li>
<li>golangci-lint 支持很多 linter，其中有些 linter 支持一些配置项，这些配置项可以在配置文件中配置。</li>
<li>配置符合指定正则规则的文件可以忽略的 linter。</li>
<li>设置错误严重级别，像日志一样，检查错误也是有严重级别的。</li>
</ul>
<p>更详细的配置内容，你可以参考<a href="https://golangci-lint.run/usage/configuration/" target="_blank" rel="noopener noreferrer">Configuration<ExternalLinkIcon/></a>。另外，你也可以参考 IAM 项目的 <a href="https://github.com/marmotedu/iam/blob/master/.golangci.yaml" target="_blank" rel="noopener noreferrer">golangci-lint<ExternalLinkIcon/></a> 配置<code v-pre>.golangci.yaml</code>。<code v-pre>.golangci.yaml</code> 里面的一些配置，我建议你一定要设置，具体如下：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">run</span><span class="token punctuation">:</span>
  <span class="token key atrule">skip-dirs</span><span class="token punctuation">:</span> <span class="token comment"># 设置要忽略的目录</span>
    <span class="token punctuation">-</span> util
    <span class="token punctuation">-</span> .<span class="token important">*~</span>
    <span class="token punctuation">-</span> api/swagger/docs
  <span class="token key atrule">skip-files</span><span class="token punctuation">:</span> <span class="token comment"># 设置不需要检查的go源码文件，支持正则匹配，这里建议包括：_test.go</span>
    <span class="token punctuation">-</span> <span class="token string">".*\\.my\\.go$"</span>
    <span class="token punctuation">-</span> _test.go
<span class="token key atrule">linters-settings</span><span class="token punctuation">:</span>
  <span class="token key atrule">errcheck</span><span class="token punctuation">:</span>
    <span class="token key atrule">check-type-assertions</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 这里建议设置为true，如果确实不需要检查，可以写成`num, _ := strconv.Atoi(numStr)`</span>
    <span class="token key atrule">check-blank</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">gci</span><span class="token punctuation">:</span>
    <span class="token comment"># 将以`github.com/marmotedu/iam`开头的包放在第三方包后面</span>
    <span class="token key atrule">local-prefixes</span><span class="token punctuation">:</span> github.com/marmotedu/iam
  <span class="token key atrule">godox</span><span class="token punctuation">:</span>
    <span class="token key atrule">keywords</span><span class="token punctuation">:</span> <span class="token comment"># 建议设置为BUG、FIXME、OPTIMIZE、HACK</span>
      <span class="token punctuation">-</span> BUG
      <span class="token punctuation">-</span> FIXME
      <span class="token punctuation">-</span> OPTIMIZE
      <span class="token punctuation">-</span> HACK
  <span class="token key atrule">goimports</span><span class="token punctuation">:</span>
    <span class="token comment"># 设置哪些包放在第三方包后面，可以设置多个包，逗号隔开</span>
    <span class="token key atrule">local-prefixes</span><span class="token punctuation">:</span> github.com/marmotedu/iam
  <span class="token key atrule">gomoddirectives</span><span class="token punctuation">:</span> <span class="token comment"># 设置允许在go.mod中replace的包</span>
    <span class="token key atrule">replace-local</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">replace-allow-list</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> github.com/coreos/etcd
      <span class="token punctuation">-</span> google.golang.org/grpc
      <span class="token punctuation">-</span> github.com/marmotedu/api
      <span class="token punctuation">-</span> github.com/marmotedu/component<span class="token punctuation">-</span>base
      <span class="token punctuation">-</span> github.com/marmotedu/marmotedu<span class="token punctuation">-</span>sdk<span class="token punctuation">-</span>go
  <span class="token key atrule">gomodguard</span><span class="token punctuation">:</span> <span class="token comment"># 下面是根据需要选择可以使用的包和版本，建议设置</span>
    <span class="token key atrule">allowed</span><span class="token punctuation">:</span>
      <span class="token key atrule">modules</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> gorm.io/gorm
        <span class="token punctuation">-</span> gorm.io/driver/mysql
        <span class="token punctuation">-</span> k8s.io/klog
      <span class="token key atrule">domains</span><span class="token punctuation">:</span> <span class="token comment"># List of allowed module domains</span>
        <span class="token punctuation">-</span> google.golang.org
        <span class="token punctuation">-</span> gopkg.in
        <span class="token punctuation">-</span> golang.org
        <span class="token punctuation">-</span> github.com
        <span class="token punctuation">-</span> go.uber.org
    <span class="token key atrule">blocked</span><span class="token punctuation">:</span>
      <span class="token key atrule">modules</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">github.com/pkg/errors</span><span class="token punctuation">:</span>
            <span class="token key atrule">recommendations</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> github.com/marmotedu/errors
            <span class="token key atrule">reason</span><span class="token punctuation">:</span> <span class="token string">"`github.com/marmotedu/errors` is the log package used by marmotedu projects."</span>
      <span class="token key atrule">versions</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">github.com/MakeNowJust/heredoc</span><span class="token punctuation">:</span>
            <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"> 2.0.9"</span>
            <span class="token key atrule">reason</span><span class="token punctuation">:</span> <span class="token string">"use the latest version"</span>
      <span class="token key atrule">local_replace_directives</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">lll</span><span class="token punctuation">:</span>
    <span class="token key atrule">line-length</span><span class="token punctuation">:</span> <span class="token number">240</span> <span class="token comment"># 这里可以设置为240，240一般是够用的</span>
  <span class="token key atrule">importas</span><span class="token punctuation">:</span> <span class="token comment"># 设置包的alias，根据需要设置</span>
    <span class="token key atrule">jwt</span><span class="token punctuation">:</span> github.com/appleboy/gin<span class="token punctuation">-</span>jwt/v2         
    <span class="token key atrule">metav1</span><span class="token punctuation">:</span> github.com/marmotedu/component<span class="token punctuation">-</span>base/pkg/meta/v1
<span class="token key atrule">run</span><span class="token punctuation">:</span>
  <span class="token key atrule">skip-dirs</span><span class="token punctuation">:</span> <span class="token comment"># 设置要忽略的目录</span>
    <span class="token punctuation">-</span> util
    <span class="token punctuation">-</span> .<span class="token important">*~</span>
    <span class="token punctuation">-</span> api/swagger/docs
  <span class="token key atrule">skip-files</span><span class="token punctuation">:</span> <span class="token comment"># 设置不需要检查的go源码文件，支持正则匹配，这里建议包括：_test.go</span>
    <span class="token punctuation">-</span> <span class="token string">".*\\.my\\.go$"</span>
    <span class="token punctuation">-</span> _test.go
<span class="token key atrule">linters-settings</span><span class="token punctuation">:</span>
  <span class="token key atrule">errcheck</span><span class="token punctuation">:</span>
    <span class="token key atrule">check-type-assertions</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 这里建议设置为true，如果确实不需要检查，可以写成`num, _ := strconv.Atoi(numStr)`</span>
    <span class="token key atrule">check-blank</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">gci</span><span class="token punctuation">:</span>
    <span class="token comment"># 将以`github.com/marmotedu/iam`开头的包放在第三方包后面</span>
    <span class="token key atrule">local-prefixes</span><span class="token punctuation">:</span> github.com/marmotedu/iam
  <span class="token key atrule">godox</span><span class="token punctuation">:</span>
    <span class="token key atrule">keywords</span><span class="token punctuation">:</span> <span class="token comment"># 建议设置为BUG、FIXME、OPTIMIZE、HACK</span>
      <span class="token punctuation">-</span> BUG
      <span class="token punctuation">-</span> FIXME
      <span class="token punctuation">-</span> OPTIMIZE
      <span class="token punctuation">-</span> HACK
  <span class="token key atrule">goimports</span><span class="token punctuation">:</span>
    <span class="token comment"># 设置哪些包放在第三方包后面，可以设置多个包，逗号隔开</span>
    <span class="token key atrule">local-prefixes</span><span class="token punctuation">:</span> github.com/marmotedu/iam
  <span class="token key atrule">gomoddirectives</span><span class="token punctuation">:</span> <span class="token comment"># 设置允许在go.mod中replace的包</span>
    <span class="token key atrule">replace-local</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">replace-allow-list</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> github.com/coreos/etcd
      <span class="token punctuation">-</span> google.golang.org/grpc
      <span class="token punctuation">-</span> github.com/marmotedu/api
      <span class="token punctuation">-</span> github.com/marmotedu/component<span class="token punctuation">-</span>base
      <span class="token punctuation">-</span> github.com/marmotedu/marmotedu<span class="token punctuation">-</span>sdk<span class="token punctuation">-</span>go
  <span class="token key atrule">gomodguard</span><span class="token punctuation">:</span> <span class="token comment"># 下面是根据需要选择可以使用的包和版本，建议设置</span>
    <span class="token key atrule">allowed</span><span class="token punctuation">:</span>
      <span class="token key atrule">modules</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> gorm.io/gorm
        <span class="token punctuation">-</span> gorm.io/driver/mysql
        <span class="token punctuation">-</span> k8s.io/klog
      <span class="token key atrule">domains</span><span class="token punctuation">:</span> <span class="token comment"># List of allowed module domains</span>
        <span class="token punctuation">-</span> google.golang.org
        <span class="token punctuation">-</span> gopkg.in
        <span class="token punctuation">-</span> golang.org
        <span class="token punctuation">-</span> github.com
        <span class="token punctuation">-</span> go.uber.org
    <span class="token key atrule">blocked</span><span class="token punctuation">:</span>
      <span class="token key atrule">modules</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">github.com/pkg/errors</span><span class="token punctuation">:</span>
            <span class="token key atrule">recommendations</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> github.com/marmotedu/errors
            <span class="token key atrule">reason</span><span class="token punctuation">:</span> <span class="token string">"`github.com/marmotedu/errors` is the log package used by marmotedu projects."</span>
      <span class="token key atrule">versions</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">github.com/MakeNowJust/heredoc</span><span class="token punctuation">:</span>
            <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">"> 2.0.9"</span>
            <span class="token key atrule">reason</span><span class="token punctuation">:</span> <span class="token string">"use the latest version"</span>
      <span class="token key atrule">local_replace_directives</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">lll</span><span class="token punctuation">:</span>
    <span class="token key atrule">line-length</span><span class="token punctuation">:</span> <span class="token number">240</span> <span class="token comment"># 这里可以设置为240，240一般是够用的</span>
  <span class="token key atrule">importas</span><span class="token punctuation">:</span> <span class="token comment"># 设置包的alias，根据需要设置</span>
    <span class="token key atrule">jwt</span><span class="token punctuation">:</span> github.com/appleboy/gin<span class="token punctuation">-</span>jwt/v2         
    <span class="token key atrule">metav1</span><span class="token punctuation">:</span> github.com/marmotedu/component<span class="token punctuation">-</span>base/pkg/meta/v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，golangci-lint 不建议使用 <code v-pre>enable-all: true</code> 选项，为了尽可能使用最全的 linters，我们可以使用以下配置：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">linters</span><span class="token punctuation">:</span> 
  <span class="token key atrule">disable-all</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token comment"># enable下列出 &lt;期望的所有linters></span>
    <span class="token punctuation">-</span> typecheck
    <span class="token punctuation">-</span> <span class="token punctuation">...</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;期望的所有linters&gt; = - &lt;不期望执行的linters&gt;</code>，我们可以通过执行以下命令来获取：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
$ ./scripts/print_enable_linters.sh
    - asciicheck
    - bodyclose
    - cyclop
    - deadcode
    - <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将以上输出结果替换掉<code v-pre>.golangci.yaml</code> 配置文件中的 <code v-pre>linters.enable</code> 部分即可。</p>
<h2 id="如何使用-golangci-lint-进行静态代码检查" tabindex="-1"><a class="header-anchor" href="#如何使用-golangci-lint-进行静态代码检查" aria-hidden="true">#</a> 如何使用 golangci-lint 进行静态代码检查？</h2>
<p>要对代码进行静态检查，只需要执行 <code v-pre>golangci-lint run</code> 命令即可。接下来，我会先给你介绍 5 种常见的 golangci-lint 使用方法。</p>
<p><strong>对当前目录及子目录下的所有 Go 文件进行静态代码检查：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令等效于<code v-pre>golangci-lint run ./...</code>。</p>
<p><strong>对指定的 Go 文件或者指定目录下的 Go 文件进行静态代码检查：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint run dir1 dir2/<span class="token punctuation">..</span>. dir3/file1.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里需要你注意：上述命令不会检查 dir1 下子目录的 Go 文件，如果想递归地检查一个目录，需要在目录后面追加<code v-pre>/...</code>，例如：<code v-pre>dir2/...</code>。</p>
<p><strong>根据指定配置文件，进行静态代码检查：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint run <span class="token parameter variable">-c</span> .golangci.yaml ./<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>运行指定的 linter：</strong></p>
<p>golangci-lint 可以在不指定任何配置文件的情况下运行，这会运行默认启用的 linter，你可以通过golangci-lint help linters查看它。</p>
<p>你可以传入参数<code v-pre>-E/--enable</code>来使某个 linter 可用，也可以使用<code v-pre>-D/--disable</code>参数来使某个 linter 不可用。下面的示例仅仅启用了 errcheck linter：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint run --no-config --disable-all <span class="token parameter variable">-E</span> errcheck ./<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里你需要注意，默认情况下，<code v-pre>golangci-lint</code> 会从当前目录一层层往上寻找配置文件名.golangci.yaml、.golangci.toml、.golangci.json直到根（/）目录。如果找到，就以找到的配置文件作为本次运行的配置文件，所以为了防止读取到未知的配置文件，可以用 <code v-pre>--no-config</code> 参数使 golangci-lint 不读取任何配置文件。</p>
<p><strong>禁止运行指定的 liner：</strong></p>
<p>如果我们想禁用某些 linter，可以使用-D选项。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint run --no-config <span class="token parameter variable">-D</span> godot,errcheck
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在使用 golangci-lint 进行代码检查时，可能会有很多误报。所谓的误报，其实是我们希望 golangci-lint 的一些 linter 能够容忍某些 issue。那么如何尽可能减少误报呢？golangci-lint 也提供了一些途径，我建议你使用下面这三种：</p>
<ul>
<li>在命令行中添加-e参数，或者在配置文件的issues.exclude部分设置要排除的检查错误。你也可以使用issues.exclude-rules来配置哪些文件忽略哪些 linter。</li>
<li>通过run.skip-dirs、run.skip-files或者issues.exclude-rules配置项，来忽略指定目录下的所有 Go 文件，或者指定的 Go 文件。</li>
<li>通过在 Go 源码文件中添加<code v-pre>//nolint</code>注释，来忽略指定的代码行。</li>
</ul>
<p>因为 golangci-lint 设置了很多 linters，对于一个大型项目，启用所有的 linter 会检查出很多问题，并且每个项目对 linter 检查的粒度要求也不一样，所以 glangci-lint使用 nolint 标记来开关某些检查项，不同位置的 nolint 标记效果也会不一样。接下来我想向你介绍 nolint 的几种用法。</p>
<p><strong>忽略某一行所有 linter 的检查：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> bad_name <span class="token builtin">int</span> <span class="token comment">//nolintvar bad_name int //nolint</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>忽略某一行指定 linter 的检查，可以指定多个 linter，用逗号 , 隔开。</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> bad_name <span class="token builtin">int</span> <span class="token comment">//nolint:golint,unused</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>忽略某个代码块的检查:</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">//nolint</span>
<span class="token keyword">func</span> <span class="token function">allIssuesInThisFunctionAreExcluded</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">//nolint:govet</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
  a <span class="token builtin">int</span>
  b <span class="token builtin">int</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>忽略某个文件的指定 linter 检查。</strong></p>
<p>在 package xx 上面一行添加//nolint注释。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>//nolint:unparam
package pkg
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用 nolint 的过程中，有 3 个地方需要你注意。</p>
<ul>
<li>首先，如果启用了 nolintlint，你就需要在//nolint后面添加 nolint 的原因// xxxx。</li>
<li>其次，你使用的应该是//nolint而不是// nolint。因为根据 Go 的规范，需要程序读取的注释 // 后面不应该有空格。</li>
<li>最后，如果要忽略所有 linter，可以用//nolint；如果要忽略某个指定的 linter，可以用<code v-pre>//nolint:&lt;linter1&gt;,&lt;linter2&gt;</code>,。</li>
</ul>
<h2 id="golangci-lint-使用技巧" tabindex="-1"><a class="header-anchor" href="#golangci-lint-使用技巧" aria-hidden="true">#</a> golangci-lint 使用技巧</h2>
<p><strong>技巧 1：第一次修改，可以按目录修改。</strong></p>
<p>如果你第一次使用 golangci-lint 检查你的代码，一定会有很多错误。为了减轻修改的压力，可以按目录检查代码并修改。这样可以有效减少失败条数，减轻修改压力。</p>
<p>当然，如果错误太多，一时半会儿改不完，想以后慢慢修改或者干脆不修复存量的 issues，那么你可以使用 golangci-lint 的 --new-from-rev 选项，只检查新增的 code，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint run --new-from-rev<span class="token operator">=</span>HEAD~1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>技巧 2：按文件修改，减少文件切换次数，提高修改效率。</strong></p>
<p>如果有很多检查错误，涉及很多文件，建议先修改一个文件，这样就不用来回切换文件。可以通过 grep 过滤出某个文件的检查失败项，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint run ./<span class="token punctuation">..</span>.<span class="token operator">|</span><span class="token function">grep</span> pkg/storage/redis_cluster.go
pkg/storage/redis_cluster.go:16:2: <span class="token string">"github.com/go-redis/redis/v7"</span> imported but not used <span class="token punctuation">(</span>typecheck<span class="token punctuation">)</span>
pkg/storage/redis_cluster.go:82:28: undeclared name: <span class="token variable"><span class="token variable">`</span>redis<span class="token variable">`</span></span> <span class="token punctuation">(</span>typecheck<span class="token punctuation">)</span>
pkg/storage/redis_cluster.go:86:14: undeclared name: <span class="token variable"><span class="token variable">`</span>redis<span class="token variable">`</span></span> <span class="token punctuation">(</span>typecheck<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>技巧 3：把 linters-setting.lll.line-length 设置得大一些。</strong></p>
<p>在 Go 项目开发中，为了易于阅读代码，通常会将变量名 / 函数 / 常量等命名得有意义，这样很可能导致每行的代码长度过长，很容易超过lll linter 设置的默认最大长度 80。这里建议将<code v-pre>linters-setting.lll.line-length</code>设置为 120/240。</p>
<p><strong>技巧 4：尽可能多地使用 golangci-lint 提供的 linter。</strong></p>
<p>golangci-lint 集成了很多 linters，可以通过如下命令查看：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ golangci-lint linters
Enabled by your configuration linters:
deadcode: Finds unused code <span class="token punctuation">[</span>fast: true, auto-fix: false<span class="token punctuation">]</span>
<span class="token punctuation">..</span>.
varcheck: Finds unused global variables and constants <span class="token punctuation">[</span>fast: true, auto-fix: false<span class="token punctuation">]</span>

Disabled by your configuration linters:
asciicheck: Simple linter to check that your code does not contain non-ASCII identifiers <span class="token punctuation">[</span>fast: true, auto-fix: false<span class="token punctuation">]</span>
<span class="token punctuation">..</span>.
wsl: Whitespace Linter - Forces you to use empty lines<span class="token operator">!</span> <span class="token punctuation">[</span>fast: true, auto-fix: false<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些 linter 分为两类，一类是默认启用的，另一类是默认禁用的。每个 linter 都有两个属性：</p>
<ul>
<li>fast：true/false，如果为 true，说明该 linter 可以缓存类型信息，支持快速检查。因为第一次缓存了这些信息，所以后续的运行会非常快。</li>
<li>auto-fix：true/false，如果为 true 说明该 linter 支持自动修复发现的错误；如果为 false 说明不支持自动修复。</li>
</ul>
<p>如果配置了 golangci-lint 配置文件，则可以通过命令golangci-lint help linters查看在当前配置下启用和禁用了哪些 linter。golangci-lint 也支持自定义 linter 插件</p>
<ul>
<li>https://golangci-lint.run/contributing/new-linters/</li>
</ul>
<p>在使用 golangci-lint 的时候，我们要尽可能多的使用 linter。使用的 linter 越多，说明检查越严格，意味着代码越规范，质量越高。如果时间和精力允许，建议打开 golangci-lint 提供的所有 linter。</p>
<p><strong>技巧 5：每次修改代码后，都要执行 golangci-lint。</strong></p>
<p>每次修改完代码后都要执行 golangci-lint，一方面可以及时修改不规范的地方，另一方面可以减少错误堆积，减轻后面的修改压力。</p>
<p><strong>技巧 6：建议在根目录下放一个通用的 golangci-lint 配置文件。</strong></p>
<p>在/目录下存放通用的 golangci-lint 配置文件，可以让你不用为每一个项目都配置 golangci-lint。当你需要为某个项目单独配置 golangci-lint 时，只需在该项目根目录下增加一个项目级别的 golangci-lint 配置文件即可。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>Go 项目开发中，对代码进行静态代码检查是必要的操作。当前有很多优秀的静态代码检查工具，但 golangci-lint 因为具有检查速度快、可配置、少误报、内置了大量 linter 等优点，成为了目前最受欢迎的静态代码检查工具。</p>
<p>golangci-lint 功能非常强大，支持诸如 run、cache、completion、linters 等命令。其中最常用的是 run 命令，run 命令可以通过以下方式来进行静态代码检查：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
$ golangci-lint run <span class="token comment">#  对当前目录及子目录下的所有Go文件进行静态代码检查</span>
$ golangci-lint run dir1 dir2/<span class="token punctuation">..</span>. dir3/file1.go <span class="token comment"># 对指定的Go文件或者指定目录下的Go文件进行静态代码检查</span>
$ golangci-lint run <span class="token parameter variable">-c</span> .golangci.yaml ./<span class="token punctuation">..</span>. <span class="token comment"># 根据指定配置文件，进行静态代码检查</span>
$ golangci-lint run --no-config --disable-all <span class="token parameter variable">-E</span> errcheck ./<span class="token punctuation">..</span>. <span class="token comment"># 运行指定的 errcheck linter</span>
$ golangci-lint run --no-config <span class="token parameter variable">-D</span> godot,errcheck <span class="token comment"># 禁止运行指定的godot,errcheck liner</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，golangci-lint 还支持 //nolint 、//nolint:golint,unused 等方式来减少误报。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '8.md' style='float:left'>⬆️上一节🔗  </a><a href = '10.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


