<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第43节-基于-github-actions-的-ci-实战" tabindex="-1"><a class="header-anchor" href="#第43节-基于-github-actions-的-ci-实战" aria-hidden="true">#</a> 第43节 基于 GitHub Actions 的 CI 实战</h1>
<br>
<div><a href = '42.md' style='float:left'>⬆️上一节🔗  </a><a href = '44.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#github-actions的基本用法">GitHub Actions的基本用法</router-link><ul><li><router-link to="#github-actions的基本概念">GitHub Actions的基本概念</router-link></li><li><router-link to="#workflow文件介绍">workflow文件介绍</router-link></li></ul></li><li><router-link to="#github-actions的进阶用法">GitHub Actions的进阶用法</router-link><ul><li><router-link to="#为工作流加一个badge">为工作流加一个Badge</router-link></li><li><router-link to="#使用构建矩阵">使用构建矩阵</router-link></li><li><router-link to="#使用secrets">使用Secrets</router-link></li><li><router-link to="#使用artifact保存构建产物">使用Artifact保存构建产物</router-link></li></ul></li><li><router-link to="#github-actions实战">GitHub Actions实战</router-link></li><li><router-link to="#iam-github-actions实战">IAM GitHub Actions实战</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<p>你好，我是孔令飞。这是本专栏正文的最后一讲了，恭喜你坚持到了最后！</p>
<p>在Go项目开发中，我们要频繁地执行静态代码检查、测试、编译、构建等操作。如果每一步我们都手动执行，效率低不说，还容易出错。所以，我们通常借助CI系统来自动化执行这些操作。</p>
<p>当前业界有很多优秀的CI系统可供选择，例如 <a href="https://circleci.com/" target="_blank" rel="noopener noreferrer">CircleCI<ExternalLinkIcon/></a>、<a href="https://travis-ci.org/" target="_blank" rel="noopener noreferrer">TravisCI<ExternalLinkIcon/></a>、<a href="https://github.com/jenkinsci/jenkins" target="_blank" rel="noopener noreferrer">Jenkins<ExternalLinkIcon/></a>、<a href="https://coding.net/" target="_blank" rel="noopener noreferrer">CODING<ExternalLinkIcon/></a>、<a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">GitHub Actions<ExternalLinkIcon/></a> 等。这些系统在设计上大同小异，为了减少你的学习成本，我选择了相对来说容易实践的GitHub Actions，来给你展示如何通过CI来让工作自动化。</p>
<p>这一讲，我会先介绍下GitHub Actions及其用法，再向你展示一个CI示例，最后给你演示下IAM是如何构建CI任务的。</p>
<h2 id="github-actions的基本用法" tabindex="-1"><a class="header-anchor" href="#github-actions的基本用法" aria-hidden="true">#</a> GitHub Actions的基本用法</h2>
<p>GitHub Actions是GitHub为托管在github.com站点的项目提供的持续集成服务，于2018年10月推出。</p>
<p>GitHub Actions具有以下功能特性：</p>
<ul>
<li>提供原子的actions配置和组合actions的workflow配置两种能力。</li>
<li>全局配置基于<a href="https://help.github.com/en/articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax" target="_blank" rel="noopener noreferrer">YAML配置<ExternalLinkIcon/></a>，兼容主流CI/CD工具配置。</li>
<li>Actions/Workflows基于<a href="https://help.github.com/en/articles/events-that-trigger-workflows" target="_blank" rel="noopener noreferrer">事件触发<ExternalLinkIcon/></a>，包括Event restrictions、Webhook events、Scheduled events、External events。</li>
<li>提供可供运行的托管容器服务，包括Docker、VM，可运行Linux、macOS、Windows主流系统。</li>
<li>提供主流语言的支持，包括Node.js、Python、Java、Ruby、PHP、Go、Rust、.NET。</li>
<li>提供实时日志流程，方便调试。</li>
<li>提供<a href="https://help.github.com/en/articles/about-github-actions#discovering-actions-in-the-github-community" target="_blank" rel="noopener noreferrer">平台内置的Actions<ExternalLinkIcon/></a>与第三方提供的Actions，开箱即用。</li>
</ul>
<h3 id="github-actions的基本概念" tabindex="-1"><a class="header-anchor" href="#github-actions的基本概念" aria-hidden="true">#</a> GitHub Actions的基本概念</h3>
<p>在构建持续集成任务时，我们会在任务中心完成各种操作，比如克隆代码、编译代码、运行单元测试、构建和发布镜像等。GitHub把这些操作称为Actions。</p>
<p>Actions在很多项目中是可以共享的，GitHub允许开发者将这些可共享的Actions上传到<a href="https://github.com/marketplace?type=actions" target="_blank" rel="noopener noreferrer">GitHub的官方Actions市场<ExternalLinkIcon/></a>，开发者在Actions市场中可以搜索到他人提交的 Actions。另外，还有一个 <a href="https://github.com/sdras/awesome-actions" target="_blank" rel="noopener noreferrer">awesome actions<ExternalLinkIcon/></a> 的仓库，里面也有不少的Action可供开发者使用。如果你需要某个 Action，不必自己写复杂的脚本，直接引用他人写好的 Action 即可。整个持续集成过程，就变成了一个 Actions 的组合。</p>
<p>Action其实是一个独立的脚本，可以将Action存放在GitHub代码仓库中，通过<code v-pre>&lt;userName&gt;/&lt;repoName&gt;</code>的语法引用 Action。例如，<code v-pre>actions/checkout@v2</code>表示<code v-pre>https://github.com/actions/checkout</code>这个仓库，tag是v2。<code v-pre>actions/checkout@v2</code>也代表一个 Action，作用是安装 Go编译环境。GitHub 官方的 Actions 都放在 <a href="https://github.com/actions" target="_blank" rel="noopener noreferrer">github.com/actions<ExternalLinkIcon/></a> 里面。</p>
<p>GitHub Actions 有一些自己的术语，下面我来介绍下。</p>
<ul>
<li>workflow（工作流程）：一个 <code v-pre>.yml</code> 文件对应一个 workflow，也就是一次持续集成。一个 GitHub 仓库可以包含多个 workflow，只要是在 <code v-pre>.github/workflow</code> 目录下的 <code v-pre>.yml</code> 文件都会被 GitHub 执行。</li>
<li>job（任务）：一个 workflow 由一个或多个 job 构成，每个 job 代表一个持续集成任务。</li>
<li>step（步骤）：每个 job 由多个 step 构成，一步步完成。</li>
<li>action（动作）：每个 step 可以依次执行一个或多个命令（action）。</li>
<li>on：一个 workflow 的触发条件，决定了当前的 workflow 在什么时候被执行。</li>
</ul>
<h3 id="workflow文件介绍" tabindex="-1"><a class="header-anchor" href="#workflow文件介绍" aria-hidden="true">#</a> workflow文件介绍</h3>
<p>GitHub Actions 配置文件存放在代码仓库的<code v-pre>.github/workflows</code>目录下，文件后缀为<code v-pre>.yml</code>，支持创建多个文件，文件名可以任意取，比如<code v-pre>iam.yml</code>。GitHub 只要发现<code v-pre>.github/workflows</code>目录里面有<code v-pre>.yml</code>文件，就会自动运行该文件，如果运行过程中存在问题，会以邮件的形式通知到你。</p>
<p>workflow 文件的配置字段非常多，如果你想详细了解，可以查看<a href="https://docs.github.com/cn/actions/reference/workflow-syntax-for-github-actions" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>。这里，我来介绍一些基本的配置字段。</p>
<ol>
<li><code v-pre>name</code></li>
</ol>
<p><code v-pre>name</code>字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> GitHub Actions Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li><code v-pre>on</code></li>
</ol>
<p><code v-pre>on</code>字段指定触发 workflow 的条件，通常是某些事件。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的配置意思是，<code v-pre>push</code>事件触发 workflow。<code v-pre>on</code>字段也可以是事件的数组，例如:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">,</span> pull_request<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的配置意思是，<code v-pre>push</code>事件或<code v-pre>pull_request</code>事件都可以触发 workflow。</p>
<p>想了解完整的事件列表，你可以查看<a href="https://docs.github.com/en/actions/reference/events-that-trigger-workflows" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。</p>
<ol>
<li><code v-pre>on.&lt;push|pull_request&gt;.&lt;tags|branches&gt;</code></li>
</ol>
<p>指定触发事件时，我们可以限定分支或标签。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的配置指定，只有<code v-pre>master</code>分支发生<code v-pre>push</code>事件时，才会触发 workflow。</p>
<ol>
<li><code v-pre>jobs.&lt;job_id&gt;.name</code></li>
</ol>
<p>workflow 文件的主体是<code v-pre>jobs</code>字段，表示要执行的一项或多项任务。</p>
<p><code v-pre>jobs</code>字段里面，需要写出每一项任务的<code v-pre>job_id</code>，具体名称自定义。<code v-pre>job_id</code>里面的<code v-pre>name</code>字段是任务的说明。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">my_first_job</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> My first job
  <span class="token key atrule">my_second_job</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> My second job
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，<code v-pre>jobs</code>字段包含两项任务，<code v-pre>job_id</code>分别是<code v-pre>my_first_job</code>和<code v-pre>my_second_job</code>。</p>
<ol>
<li><code v-pre>jobs.&lt;job_id&gt;.needs</code></li>
</ol>
<p><code v-pre>needs</code>字段指定当前任务的依赖关系，即运行顺序。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">job1</span><span class="token punctuation">:</span>
  <span class="token key atrule">job2</span><span class="token punctuation">:</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> job1
  <span class="token key atrule">job3</span><span class="token punctuation">:</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>job1<span class="token punctuation">,</span> job2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，<code v-pre>job1</code>必须先于<code v-pre>job2</code>完成，而<code v-pre>job3</code>等待<code v-pre>job1</code>和<code v-pre>job2</code>完成后才能运行。因此，这个 workflow 的运行顺序为：<code v-pre>job1</code>、<code v-pre>job2</code>、<code v-pre>job3</code>。</p>
<ol>
<li><code v-pre>jobs.&lt;job_id&gt;.runs-on</code></li>
</ol>
<p><code v-pre>runs-on</code>字段指定运行所需要的虚拟机环境，它是必填字段。目前可用的虚拟机如下：</p>
<ul>
<li>ubuntu-latest、ubuntu-18.04或ubuntu-16.04。</li>
<li>windows-latest、windows-2019或windows-2016。</li>
<li>macOS-latest或macOS-10.14。</li>
</ul>
<p>下面的配置指定虚拟机环境为<code v-pre>ubuntu-18.04</code>。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">18.04</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li><code v-pre>jobs.&lt;job_id&gt;.steps</code></li>
</ol>
<p><code v-pre>steps</code>字段指定每个 Job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定下面三个字段。</p>
<ul>
<li><code v-pre>jobs.&lt;job_id&gt;.steps.name</code>：步骤名称。</li>
<li><code v-pre>jobs.&lt;job_id&gt;.steps.run</code>：该步骤运行的命令或者 action。</li>
<li><code v-pre>jobs.&lt;job_id&gt;.steps.env</code>：该步骤所需的环境变量。</li>
</ul>
<p>下面是一个完整的 workflow 文件的范例：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Greeting from Mona
<span class="token key atrule">on</span><span class="token punctuation">:</span> push

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">my-job</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> My Job
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Print a greeting
      <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token key atrule">MY_VAR</span><span class="token punctuation">:</span> Hello<span class="token tag">!</span> My name is
        <span class="token key atrule">FIRST_NAME</span><span class="token punctuation">:</span> Lingfei
        <span class="token key atrule">LAST_NAME</span><span class="token punctuation">:</span> Kong
      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        echo $MY_VAR $FIRST_NAME $LAST_NAME.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，<code v-pre>steps</code>字段只包括一个步骤。该步骤先注入三个环境变量，然后执行一条 Bash 命令。</p>
<ol>
<li><code v-pre>uses</code></li>
</ol>
<p><code v-pre>uses</code> 可以引用别人已经创建的 actions，就是上面说的 actions 市场中的 actions。引用格式为<code v-pre>userName/repoName@verison</code>，例如<code v-pre>uses: actions/setup-go@v1</code>。</p>
<ol>
<li><code v-pre>with</code></li>
</ol>
<p><code v-pre>with</code> 指定actions的输入参数。每个输入参数都是一个键/值对。输入参数被设置为环境变量，该变量的前缀为 <code v-pre>INPUT_</code>，并转换为大写。</p>
<p>这里举个例子：我们定义 <code v-pre>hello_world</code> 操作所定义的三个输入参数（<code v-pre>first_name</code>、<code v-pre>middle_name</code> 和 <code v-pre>last_name</code>），这些输入变量将被 <code v-pre>hello-world</code> 操作作为 <code v-pre>INPUT_FIRST_NAME</code>、<code v-pre>INPUT_MIDDLE_NAME</code> 和 <code v-pre>INPUT_LAST_NAME</code> 环境变量使用。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">my_first_job</span><span class="token punctuation">:</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> My first step
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/hello_world@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">first_name</span><span class="token punctuation">:</span> Lingfei
          <span class="token key atrule">middle_name</span><span class="token punctuation">:</span> Go
          <span class="token key atrule">last_name</span><span class="token punctuation">:</span> Kong
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><code v-pre>run</code></li>
</ol>
<p><code v-pre>run</code>指定执行的命令。可以有多个命令，例如：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      go mod tidy
      go build -v -o helloci .</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><code v-pre>id</code></li>
</ol>
<p><code v-pre>id</code>是step的唯一标识。</p>
<h2 id="github-actions的进阶用法" tabindex="-1"><a class="header-anchor" href="#github-actions的进阶用法" aria-hidden="true">#</a> GitHub Actions的进阶用法</h2>
<p>上面，我介绍了GitHub Actions的一些基本知识，这里我再介绍下GitHub Actions的进阶用法。</p>
<h3 id="为工作流加一个badge" tabindex="-1"><a class="header-anchor" href="#为工作流加一个badge" aria-hidden="true">#</a> 为工作流加一个Badge</h3>
<p>在action的面板中，点击<code v-pre>Create status badge</code>就可以复制Badge的Markdown内容到README.md中。</p>
<p>之后，我们就可以直接在README.md中看到当前的构建结果：</p>
<p><a href="https://static001.geekbang.org/resource/image/45/af/453a97b0776281873dee5671c53347af.png?wh=1280x765" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/45/af/453a97b0776281873dee5671c53347af.png?wh=1280x765" alt="图片"><ExternalLinkIcon/></a></p>
<h3 id="使用构建矩阵" tabindex="-1"><a class="header-anchor" href="#使用构建矩阵" aria-hidden="true">#</a> 使用构建矩阵</h3>
<p>如果我们想在多个系统或者多个语言版本上测试构建，就需要设置构建矩阵。例如，我们想在多个操作系统、多个Go版本下跑测试，可以使用如下workflow配置：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Go Test

<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">,</span> pull_request<span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>

  <span class="token key atrule">helloci-build</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Test with go $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.go_version <span class="token punctuation">}</span><span class="token punctuation">}</span> on $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span>

    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">go_version</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1.15</span><span class="token punctuation">,</span> <span class="token number">1.16</span><span class="token punctuation">]</span>
        <span class="token key atrule">os</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ubuntu<span class="token punctuation">-</span>latest<span class="token punctuation">,</span> macOS<span class="token punctuation">-</span>latest<span class="token punctuation">]</span>

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Go $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.go_version <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>go@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">go-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.go_version <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">id</span><span class="token punctuation">:</span> go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的workflow配置，通过<code v-pre>strategy.matrix</code>配置了该工作流程运行的环境矩阵（格式为<code v-pre>go_version.os</code>）：<code v-pre>ubuntu-latest.1.15</code>、<code v-pre>ubuntu-latest.1.16</code>、<code v-pre>macOS-latest.1.15</code>、<code v-pre>macOS-latest.1.16</code>。也就是说，会在4台不同配置的服务器上执行该workflow。</p>
<h3 id="使用secrets" tabindex="-1"><a class="header-anchor" href="#使用secrets" aria-hidden="true">#</a> 使用Secrets</h3>
<p>在构建过程中，我们可能需要用到<code v-pre>ssh</code>或者<code v-pre>token</code>等敏感数据，而我们不希望这些数据直接暴露在仓库中，此时就可以使用<code v-pre>secrets</code>。</p>
<p>我们在对应项目中选择<code v-pre>Settings</code>-&gt; <code v-pre>Secrets</code>，就可以创建<code v-pre>secret</code>，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/c0/d3/c00b11a1709838c1a205ace7976768d3.png?wh=1920x1046" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/c0/d3/c00b11a1709838c1a205ace7976768d3.png?wh=1920x1046" alt="图片"><ExternalLinkIcon/></a></p>
<p>配置文件中的使用方法如下：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Go Test
<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">,</span> pull_request<span class="token punctuation">]</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">helloci-build</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Test with go
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ubuntu<span class="token punctuation">-</span>latest<span class="token punctuation">]</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> helloci
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> use secrets
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">super_secret</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.YourSecrets <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>secret name不区分大小写，所以如果新建secret的名字是name，使用时用 <code v-pre>secrets.name</code> 或者 <code v-pre>secrets.Name</code> 都是可以的。而且，就算此时直接使用 <code v-pre>echo</code> 打印 <code v-pre>secret</code> , 控制台也只会打印出``<em>来保护secret。
这里要注意，你的secret是属于某一个环境变量的，所以要指明环境的名字：<code v-pre>environment.name</code>。上面的workflow配置中的<code v-pre>secrets.YourSecrets</code>属于<code v-pre>helloci</code>环境。</em></p>
<h3 id="使用artifact保存构建产物" tabindex="-1"><a class="header-anchor" href="#使用artifact保存构建产物" aria-hidden="true">#</a> <em>使用Artifact保存构建产物</em></h3>
<p>在构建过程中，我们可能需要输出一些构建产物，比如日志文件、测试结果等。这些产物可以使用Github Actions Artifact 来存储。你可以使用<a href="https://github.com/actions/upload-artifact" target="_blank" rel="noopener noreferrer">action/upload-artifact<ExternalLinkIcon/></a> 和 <a href="https://github.com/actions/download-artifact" target="_blank" rel="noopener noreferrer">download-artifact<ExternalLinkIcon/></a> 进行构建参数的相关操作。</p>
<p>这里我以输出Jest测试报告为例来演示下如何保存Artifact产物。Jest测试后的测试产物是coverage：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>steps:
      - run: npm ci
      - run: npm test

      - name: Collect Test Coverage File
        uses: actions/upload-artifact@v1.0.0
        with:
          name: coverage-output
          path: coverage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行成功后，我们就能在对应action面板看到生成的Artifact：</p>
<p><em><a href="https://static001.geekbang.org/resource/image/4c/66/4c4a8d6aec12a5dd1cdc80d238472566.png?wh=1280x208" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/4c/66/4c4a8d6aec12a5dd1cdc80d238472566.png?wh=1280x208" alt="图片"><ExternalLinkIcon/></a></em></p>
<h2 id="github-actions实战" tabindex="-1"><a class="header-anchor" href="#github-actions实战" aria-hidden="true">#</a> GitHub Actions实战</h2>
<p>上面，我介绍了GitHub Actions的用法，接下来我们就来实战下，看下使用GitHub Actions的6个具体步骤。</p>
<p>**第一步，**创建一个测试仓库。</p>
<p>登陆<a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub官网<ExternalLinkIcon/></a>，点击<strong>New repository</strong>创建，如下图所示：</p>
<p><em><a href="https://static001.geekbang.org/resource/image/6d/a0/6d76d02f0418671a32f5346fccf616a0.png?wh=1920x810" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/6d/a0/6d76d02f0418671a32f5346fccf616a0.png?wh=1920x810" alt="图片"><ExternalLinkIcon/></a></em></p>
<p><em>这里，我们创建了一个叫<code v-pre>helloci</code>的测试项目。</em></p>
<p>***第二步，*<em>将新的仓库 clone 下来，并添加一些文件：</em></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git clone https://github.com/marmotedu/helloci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>你可以克隆<a href="https://github.com/marmotedu/helloci" target="_blank" rel="noopener noreferrer">marmotedu/helloci<ExternalLinkIcon/></a>，并将里面的文件拷贝到你创建的项目仓库中。</em></p>
<p>***第三步，*<em>创建GitHub Actions workflow配置目录：</em></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ mkdir -p .github/workflows                     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>***第四步，*<em>创建GitHub Actions workflow配置。</em></p>
<p><em>在<code v-pre>.github/workflows</code>目录下新建<code v-pre>helloci.yml</code>文件，内容如下：</em></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Go Test

<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">,</span> pull_request<span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>

  <span class="token key atrule">helloci-build</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Test with go $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.go_version <span class="token punctuation">}</span><span class="token punctuation">}</span> on $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.os <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> helloci

    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">go_version</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1.16</span><span class="token punctuation">]</span>
        <span class="token key atrule">os</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ubuntu<span class="token punctuation">-</span>latest<span class="token punctuation">]</span>

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Go $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.go_version <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>go@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">go-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.go_version <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">id</span><span class="token punctuation">:</span> go

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check out code into the Go module directory
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Tidy
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          go mod tidy</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          go build -v -o helloci .</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Collect main.go file
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v1.0.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> main<span class="token punctuation">-</span>output
          <span class="token key atrule">path</span><span class="token punctuation">:</span> main.go

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Publish to Registry
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> elgohr/Publish<span class="token punctuation">-</span>Docker<span class="token punctuation">-</span>GitHub<span class="token punctuation">-</span>Action@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> ccr.ccs.tencentyun.com/marmotedu/helloci<span class="token punctuation">:</span>beta  <span class="token comment"># docker image 的名字</span>
          <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKER_USERNAME<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 用户名</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKER_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 密码</span>
          <span class="token key atrule">registry</span><span class="token punctuation">:</span> ccr.ccs.tencentyun.com <span class="token comment"># 腾讯云Registry</span>
          <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile <span class="token comment"># 指定 Dockerfile 的位置</span>
          <span class="token key atrule">tag_names</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否将 release 的 tag 作为 docker image 的 tag</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>上面的workflow文件定义了当GitHub仓库有<code v-pre>push</code>、<code v-pre>pull_request</code>事件发生时，会触发GitHub Actions工作流程，流程中定义了一个任务（Job）<code v-pre>helloci-build</code>，Job中包含了多个步骤（Step），每个步骤又包含一些动作（Action）。</em></p>
<p><em>上面的workflow配置会按顺序执行下面的6个步骤。</em></p>
<ol>
<li><em>准备一个Go编译环境。</em></li>
<li><em>从<a href="https://github.com/marmotedu/helloci" target="_blank" rel="noopener noreferrer">marmotedu/helloci<ExternalLinkIcon/></a>下载源码。</em></li>
<li><em>添加或删除缺失的依赖包。</em></li>
<li><em>编译Go源码。</em></li>
<li><em>上传构建产物。</em></li>
<li><em>构建镜像，并将镜像push到<code v-pre>ccr.ccs.tencentyun.com/marmotedu/helloci:beta</code>。</em></li>
</ol>
<p>***第五步，*<em>在push代码之前，我们需要先创建<code v-pre>DOCKER_USERNAME</code>和<code v-pre>DOCKER_PASSWORD</code> secret。</em></p>
<p><em>其中，<code v-pre>DOCKER_USERNAME</code>保存腾讯云镜像服务（CCR）的用户名，<code v-pre>DOCKER_PASSWORD</code>保存CCR的密码。我们将这两个secret保存在<code v-pre>helloci</code> Environments中，如下图所示：</em></p>
<p><em><a href="https://static001.geekbang.org/resource/image/c0/d3/c00b11a1709838c1a205ace7976768d3.png?wh=1920x1046" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/c0/d3/c00b11a1709838c1a205ace7976768d3.png?wh=1920x1046" alt="图片"><ExternalLinkIcon/></a></em></p>
<p>***第六步，*<em>将项目push到GitHub，触发workflow工作流：</em></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git add .$ git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>打开我们的仓库 Actions 标签页，可以发现GitHub Actions workflow正在执行：</em></p>
<p><em><a href="https://static001.geekbang.org/resource/image/1a/8a/1afb7860d68635c5e3eaba4ff8da208a.png?wh=1920x691" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/1a/8a/1afb7860d68635c5e3eaba4ff8da208a.png?wh=1920x691" alt="图片"><ExternalLinkIcon/></a></em></p>
<p><em>等workflow执行完，点击 <strong>Go Test</strong> 进入构建详情页面，在详情页面能够看到我们的构建历史：</em></p>
<p><em><a href="https://static001.geekbang.org/resource/image/a4/95/a4b83a122379db4f2fe9538afdfb5a95.png?wh=1920x701" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/a4/95/a4b83a122379db4f2fe9538afdfb5a95.png?wh=1920x701" alt="图片"><ExternalLinkIcon/></a></em></p>
<p><em>然后，选择其中一个构建记录，查看其运行详情（具体可参考<a href="https://github.com/marmotedu/helloci/actions/runs/1144156183" target="_blank" rel="noopener noreferrer">chore: update step name Go Test #10<ExternalLinkIcon/></a>）：</em></p>
<p><em><a href="https://static001.geekbang.org/resource/image/48/4f/481f64aabccf30ed61d0a7c85ab30d4f.png?wh=1920x1084" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/48/4f/481f64aabccf30ed61d0a7c85ab30d4f.png?wh=1920x1084" alt="图片"><ExternalLinkIcon/></a></em></p>
<p><em>你可以看到，<code v-pre>Go Test</code>工作流程执行了6个Job，每个Job执行了下面这些自定义Step：</em></p>
<ol>
<li><em>Set up Go 1.16。</em></li>
<li><em>Check out code into the Go module directory。</em></li>
<li><em>Tidy。</em></li>
<li><em>Build。</em></li>
<li><em>Collect main.go file。</em></li>
<li><em>Publish to Registry。</em></li>
</ol>
<p><em>其他步骤是GitHub Actions自己添加的步骤：<code v-pre>Setup Job</code>、<code v-pre>Post Check out code into the Go module directory</code>、<code v-pre>Complete job</code>。点击每一个步骤，你都能看到它们的详细输出。</em></p>
<h2 id="iam-github-actions实战" tabindex="-1"><a class="header-anchor" href="#iam-github-actions实战" aria-hidden="true">#</a> <em>IAM GitHub Actions实战</em></h2>
<p><em>接下来，我们再来看下IAM项目的GitHub Actions实战。</em></p>
<p><em>假设IAM项目根目录为 <code v-pre>$</code>，它的workflow配置文件为：</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
$ <span class="token function">cat</span> <span class="token variable">${IAM_ROOT}</span>/.github/workflows/iamci.yaml
name: IamCI

on:
  push:
    branchs:
    - <span class="token string">'*'</span>
  pull_request:
    types: <span class="token punctuation">[</span>opened, reopened<span class="token punctuation">]</span>

jobs:

  iamci:
    name: Test with go <span class="token variable">${{ matrix.go_version }</span><span class="token punctuation">}</span> on <span class="token variable">${{ matrix.os }</span><span class="token punctuation">}</span>
    runs-on: <span class="token variable">${{ matrix.os }</span><span class="token punctuation">}</span>
    environment:
      name: iamci

    strategy:
      matrix:
        go_version: <span class="token punctuation">[</span><span class="token number">1.16</span><span class="token punctuation">]</span>
        os: <span class="token punctuation">[</span>ubuntu-latest<span class="token punctuation">]</span>

    steps:

      - name: Set up Go <span class="token variable">${{ matrix.go_version }</span><span class="token punctuation">}</span>
        uses: actions/setup-go@v2
        with:
          go-version: <span class="token variable">${{ matrix.go_version }</span><span class="token punctuation">}</span>
        id: go

      - name: Check out code into the Go module directory
        uses: actions/checkout@v2

      - name: Run go modules Tidy
        run: <span class="token operator">|</span>
          <span class="token function">make</span> tidy

      - name: Generate all necessary files, such as error code files
        run: <span class="token operator">|</span>
          <span class="token function">make</span> gen

      - name: Check syntax and styling of go sources
        run: <span class="token operator">|</span>
          <span class="token function">make</span> lint

      - name: Run unit <span class="token builtin class-name">test</span> and get <span class="token builtin class-name">test</span> coverage
        run: <span class="token operator">|</span>
          <span class="token function">make</span> cover

      - name: Build <span class="token builtin class-name">source</span> code <span class="token keyword">for</span> <span class="token function">host</span> platform
        run: <span class="token operator">|</span>
          <span class="token function">make</span> build

      - name: Collect Test Coverage File
        uses: actions/upload-artifact@v1.0.0
        with:
          name: main-output
          path: _output/coverage.out

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Login to DockerHub
        uses: docker/login-action@v1
        with:
          username: <span class="token variable">${{ secrets.DOCKERHUB_USERNAME }</span><span class="token punctuation">}</span>
          password: <span class="token variable">${{ secrets.DOCKERHUB_TOKEN }</span><span class="token punctuation">}</span>

      - name: Build <span class="token function">docker</span> images <span class="token keyword">for</span> <span class="token function">host</span> arch and push images to registry
        run: <span class="token operator">|</span>
          <span class="token function">make</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的workflow依次执行了以下步骤：</p>
<ol>
<li>设置Go编译环境。</li>
<li>下载IAM项目源码。</li>
<li>添加/删除不需要的Go包。</li>
<li>生成所有的代码文件。</li>
<li>对IAM源码进行静态代码检查。</li>
<li>运行单元测试用例，并计算单元测试覆盖率是否达标。</li>
<li>编译代码。</li>
<li>收集构建产物<code v-pre>_output/coverage.out</code>。</li>
<li>配置Docker构建环境。</li>
<li>登陆DockerHub。</li>
<li>构建Docker镜像，并push到DockerHub。</li>
</ol>
<p>IamCI workflow运行历史如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/2b/b0/2b542f9101be0c3a83576fb99bf882b0.png?wh=1920x844" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/2b/b0/2b542f9101be0c3a83576fb99bf882b0.png?wh=1920x844" alt="图片"><ExternalLinkIcon/></a></p>
<p>IamCI workflow的其中一次工作流程运行结果如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/e9/6a/e9ebf13fdb6e4f41a1b00406e646ec6a.png?wh=1920x887" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/e9/6a/e9ebf13fdb6e4f41a1b00406e646ec6a.png?wh=1920x887" alt="图片"><ExternalLinkIcon/></a></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在Go项目开发中，我们需要通过CI任务来将需要频繁操作的任务自动化，这不仅可以提高开发效率，还能减少手动操作带来的失误。这一讲，我选择了最易实践的GitHub Actions，来给你演示如何构建CI任务。</p>
<p>GitHub Actions支持通过push事件来触发CI流程。一个CI流程其实就是一个workflow，workflow中包含多个任务，这些任务是可以并行执行的。一个任务又包含多个步骤，每一步又由多个动作组成。动作（Action）其实是一个命令/脚本，用来完成我们指定的任务，如编译等。</p>
<p>因为GitHub Actions内容比较多，这一讲只介绍了一些核心的知识，更详细的GitHub Actions教程，你可以参考 <a href="https://docs.github.com/cn/actions" target="_blank" rel="noopener noreferrer">官方中文文档<ExternalLinkIcon/></a>。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>使用CODING实现IAM的CI任务，并思考下：GitHub Actions和CODING在CI任务构建上，有没有本质的差异？</li>
<li>这一讲，我们借助GitHub Actions实现了CI，请你结合前面所学的知识，实现IAM的CD功能。欢迎提交Pull Request。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '42.md' style='float:left'>⬆️上一节🔗  </a><a href = '44.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


