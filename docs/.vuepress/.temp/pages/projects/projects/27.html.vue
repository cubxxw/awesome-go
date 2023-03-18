<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第27节-效率神器-如何设计和实现一个命令行客户端工具" tabindex="-1"><a class="header-anchor" href="#第27节-效率神器-如何设计和实现一个命令行客户端工具" aria-hidden="true">#</a> 第27节 效率神器：如何设计和实现一个命令行客户端工具？</h1>
<br>
<div><a href = '26.md' style='float:left'>⬆️上一节🔗  </a><a href = '28.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#常见客户端介绍">常见客户端介绍</router-link></li><li><router-link to="#大型系统客户端-xxxctl-的特点">大型系统客户端（xxxctl）的特点</router-link></li><li><router-link to="#iamctl的核心实现">iamctl的核心实现</router-link><ul><li><router-link to="#iamctl的功能">iamctl的功能</router-link></li><li><router-link to="#代码结构">代码结构</router-link></li><li><router-link to="#命令行选项">命令行选项</router-link></li><li><router-link to="#配置文件解析">配置文件解析</router-link></li></ul></li><li><router-link to="#iamctl中子命令是如何构建的">iamctl中子命令是如何构建的？</router-link><ul><li><router-link to="#命令构建">命令构建</router-link></li><li><router-link to="#自动生成命令">自动生成命令</router-link></li><li><router-link to="#命令自动补全">命令自动补全</router-link></li><li><router-link to="#更友好的输出">更友好的输出</router-link></li></ul></li><li><router-link to="#iamctl是如何进行api调用的">iamctl是如何进行API调用的？</router-link><ul><li><router-link to="#客户端配置文件">客户端配置文件</router-link></li><li><router-link to="#sdk调用">SDK调用</router-link></li><li><router-link to="#rest-api调用">REST API调用</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>你好，我是孔令飞。今天我们来聊聊，如何实现一个命令行客户端工具。</p>
<p>如果你用过Kubernetes、Istio、etcd，那你一定用过这些开源项目所提供的命令行工具：kubectl、istioctl、etcdctl。一个 <code v-pre>xxx</code> 项目，伴随着一个 <code v-pre>xxxctl</code> 命令行工具，这似乎已经成为一种趋势，在一些大型系统中更是常见。提供 <code v-pre>xxxctl</code> 命令行工具有这两个好处：</p>
<ul>
<li>实现自动化：可以通过在脚本中调用 <code v-pre>xxxctl</code> 工具，实现自动化。</li>
<li>提高效率：通过将应用的功能封装成命令和参数，方便运维、开发人员在Linux服务器上调用。</li>
</ul>
<p>其中，kubectl命令设计的功能最为复杂，也是非常优秀的命令行工具，IAM项目的iamctl客户端工具就是仿照kubectl来实现的。这一讲，我就通过剖析iamctl命令行工具的实现，来介绍下如何实现一个优秀的客户端工具。</p>
<h2 id="常见客户端介绍" tabindex="-1"><a class="header-anchor" href="#常见客户端介绍" aria-hidden="true">#</a> 常见客户端介绍</h2>
<p>在介绍iamctl命令行工具的实现之前，我们先来看下常见的客户端。</p>
<p>客户端又叫用户端，与后端服务相对应，安装在客户机上，用户可以使用这些客户端访问后端服务。不同的客户端面向的人群不同，所能提供的访问能力也有差异。常见的客户端有下面这几种：</p>
<ul>
<li>前端，包括浏览器、手机应用；</li>
<li>SDK；</li>
<li>命令行工具；</li>
<li>其他终端。</li>
</ul>
<p>接下来，我就来分别介绍下。</p>
<p>浏览器和手机应用提供一个交互界面供用户访问后端服务，使用体验最好，面向的人群是最终的用户。这两类客户端也称为前端。前端由前端开发人员进行开发，并通过API接口，调用后端的服务。后端开发人员不需要关注这两类客户端，只需要关注如何提供API接口即可。</p>
<p>SDK（Software Development Kit）也是一个客户端，供开发者调用。开发者调用API时，如果是通过HTTP协议，需要编写HTTP的调用代码、HTTP请求包的封装和返回包的解封，还要处理HTTP的状态码，使用起来不是很方便。SDK其实是封装了API接口的一系列函数集合，开发者通过调用SDK中的函数调用API接口，提供SDK主要是方便开发者调用，减少工作量。</p>
<p>命令行工具是可以在操作系统上执行的一个二进制程序，提供了一种比SDK和API接口更方便快捷的访问后端服务的途径，供运维或者开发人员在服务器上直接执行使用，或者在自动化脚本中调用。</p>
<p>还有其他各类客户端，这里我列举一些常见的。</p>
<ul>
<li>终端设备：POS机、学习机、智能音箱等。</li>
<li>第三方应用程序：通过调用API接口或者SDK，调用我们提供的后端服务，从而实现自身的功能。</li>
<li>脚本：脚本中通过API接口或者命令行工具，调用我们提供的后端服务，实现自动化。</li>
</ul>
<p>这些其他的各类客户端，都是通过调用API接口使用后端服务的，它们跟前端一样，也不需要后台开发人员开发。</p>
<p>需要后台开发人员投入工作量进行研发的客户端是SDK和命令行工具。这两类客户端工具有个调用和被调用的顺序，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051016003.jpeg" alt="图片"></p>
<p>你可以看到，命令行工具和SDK最终都是通过API接口调用后端服务的，通过这种方式可以保证服务的一致性，并减少为适配多个客户端所带来的额外开发工作量。</p>
<h2 id="大型系统客户端-xxxctl-的特点" tabindex="-1"><a class="header-anchor" href="#大型系统客户端-xxxctl-的特点" aria-hidden="true">#</a> 大型系统客户端（xxxctl）的特点</h2>
<p>通过学习kubectl、istioctl、etcdctl这些优秀的命令行工具，可以发现一个大型系统的命令行工具，通常具有下面这些特点：</p>
<ul>
<li>支持命令和子命令，命令/子命名有自己独有的命令行参数。</li>
<li>支持一些特殊的命令。比如支持completion命令，completion命令可以输出bash/zsh自动补全脚本，实现命令行及参数的自动补全。还支持 version命令，version命令不仅可以输出客户端的版本，还可以输出服务端的版本（如果有需要）。</li>
<li>支持全局option，全局option可以作为所有命令及子命令的命令行参数。</li>
<li>支持-h/help，-h/help可以打印xxxctl的帮助信息，例如：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
$ iamctl <span class="token parameter variable">-h</span>
iamctl controls the iam platform, is the client side tool <span class="token keyword">for</span> iam platform.

 Find <span class="token function">more</span> information at:
https://github.com/marmotedu/iam/blob/master/docs/guide/en-US/cmd/iamctl/iamctl.md

Basic Commands:
  info        Print the <span class="token function">host</span> information
  color       Print colors supported by the current terminal
  new         Generate demo <span class="token builtin class-name">command</span> code
  jwt         JWT command-line tool

Identity and Access Management Commands:
  user        Manage <span class="token function">users</span> on iam platform
  secret      Manage secrets on iam platform
  policy      Manage authorization policies on iam platform

Troubleshooting and Debugging Commands:
  validate    Validate the basic environment <span class="token keyword">for</span> iamctl to run

Settings Commands:
  <span class="token builtin class-name">set</span>         Set specific features on objects
  completion  Output shell completion code <span class="token keyword">for</span> the specified shell <span class="token punctuation">(</span>bash or <span class="token function">zsh</span><span class="token punctuation">)</span>

Other Commands:
  version     Print the client and server version information

Usage:
  iamctl <span class="token punctuation">[</span>flags<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Use <span class="token string">"iamctl &lt;command> --help"</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a given command.
Use <span class="token string">"iamctl options"</span> <span class="token keyword">for</span> a list of global command-line options <span class="token punctuation">(</span>applies to all commands<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>支持 <code v-pre>xxxctl help [command | command subcommand] [command | command subcommand] -h</code> ，打印命令/子命令的帮助信息，格式通常为 <code v-pre>命令描述 + 使用方法</code> 。例如：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ istioctl <span class="token builtin class-name">help</span> register
Registers a <span class="token function">service</span> instance <span class="token punctuation">(</span>e.g. VM<span class="token punctuation">)</span> joining the mesh
 
Usage:
  istioctl register <span class="token operator">&lt;</span>svcname<span class="token operator">></span> <span class="token operator">&lt;</span>ip<span class="token operator">></span> <span class="token punctuation">[</span>name1:<span class="token punctuation">]</span>port1 <span class="token punctuation">[</span>name2:<span class="token punctuation">]</span>port2 <span class="token punctuation">..</span>. <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，一个大型系统的命令行工具还可以支持一些更高阶的功能，例如：支持命令分组，支持配置文件，支持命令的使用example，等等。</p>
<p>在Go生态中，如果我们要找一个符合上面所有特点的命令行工具，那非<a href="https://github.com/kubernetes/kubernetes/blob/master/cmd/kubectl/" target="_blank" rel="noopener noreferrer">kubectl<ExternalLinkIcon/></a>莫属。因为我今天要重点讲的iamctl客户端工具，就是仿照它来实现的，所以这里就不展开介绍kubectl了，不过还是建议你认真研究下kubectl的实现。</p>
<h2 id="iamctl的核心实现" tabindex="-1"><a class="header-anchor" href="#iamctl的核心实现" aria-hidden="true">#</a> iamctl的核心实现</h2>
<p>接下来，我就来介绍IAM系统自带的iamctl客户端工具，它是仿照kubectl来实现的，能够满足一个大型系统客户端工具的需求。我会从iamctl的功能、代码结构、命令行选项和配置文件解析4个方面来介绍。</p>
<h3 id="iamctl的功能" tabindex="-1"><a class="header-anchor" href="#iamctl的功能" aria-hidden="true">#</a> iamctl的功能</h3>
<p>iamctl将命令进行了分类。这里，我也建议你对命令进行分类，因为通过分类，不仅可以协助你理解命令的用途，还能帮你快速定位某类命令。另外，当命令很多时，分类也可以使命令看起来更规整。</p>
<p>iamctl实现的命令如下：</p>
<p><img src="http://sm.nsddd.top/sm202303051018217.jpeg" alt="图片"></p>
<p>更详细的功能，你可以参考 <code v-pre>iamctl -h</code> 。我建议你在实现xxxctl工具时，考虑实现下面这几个功能。</p>
<ul>
<li>API功能：平台具有的API功能，都能通过xxxctl方便地进行调用。</li>
<li>工具：一些使用IAM系统时有用的功能，比如签发JWT Token。</li>
<li>version、completion、validate命令。</li>
</ul>
<h3 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构" aria-hidden="true">#</a> 代码结构</h3>
<p>iamctl工具的main函数位于<a href="https://github.com/marmotedu/iam/blob/v1.0.6/cmd/iamctl/iamctl.go" target="_blank" rel="noopener noreferrer">iamctl.go<ExternalLinkIcon/></a>文件中。命令的实现存放在<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/iamctl/cmd/cmd.go" target="_blank" rel="noopener noreferrer">internal/iamctl/cmd/cmd.go<ExternalLinkIcon/></a>文件中。iamctl的命令统一存放在<a href="https://github.com/marmotedu/iam/tree/v1.0.6/internal/iamctl/cmd" target="_blank" rel="noopener noreferrer">internal/iamctl/cmd<ExternalLinkIcon/></a>目录下，每个命令都是一个Go包，包名即为命令名，具体实现存放在 <code v-pre>internal/iamctl/cmd/&lt;命令&gt;/&lt;命令&gt;.go</code> 文件中。如果命令有子命令，则子命令的实现存放在 <code v-pre>internal/iamctl/cmd/&lt;命令&gt;/&lt;命令&gt;*&lt;子命令&gt;.go*</code> <em>文件中。</em></p>
<blockquote>
<p><em>使用这种代码组织方式，即使是在命令很多的情况下，也能让代码井然有序，方便定位和维护代码。</em></p>
</blockquote>
<h3 id="命令行选项" tabindex="-1"><a class="header-anchor" href="#命令行选项" aria-hidden="true">#</a> 命令行选项</h3>
<p>添加命令行选项的代码在<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/iamctl/cmd/cmd.go#L41-L130" target="_blank" rel="noopener noreferrer">NewIAMCtlCommand<ExternalLinkIcon/></a>函数中，核心代码为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>flags <span class="token operator">:=</span> cmds<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">...</span>                                                                             
iamConfigFlags <span class="token operator">:=</span> genericclioptions<span class="token punctuation">.</span><span class="token function">NewConfigFlags</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithDeprecatedPasswordFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithDeprecatedSecretFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
iamConfigFlags<span class="token punctuation">.</span><span class="token function">AddFlags</span><span class="token punctuation">(</span>flags<span class="token punctuation">)</span>                                   
matchVersionIAMConfigFlags <span class="token operator">:=</span> cmdutil<span class="token punctuation">.</span><span class="token function">NewMatchVersionFlags</span><span class="token punctuation">(</span>iamConfigFlags<span class="token punctuation">)</span>                
matchVersionIAMConfigFlags<span class="token punctuation">.</span><span class="token function">AddFlags</span><span class="token punctuation">(</span>cmds<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>NewConfigFlags(true)</code> 返回带有默认值的参数，并通过 <code v-pre>iamConfigFlags.AddFlags(flags)</code> 添加到cobra的命令行flag中。</p>
<p><code v-pre>NewConfigFlags(true)</code> 返回结构体类型的值都是指针类型，这样做的好处是：程序可以判断出是否指定了某个参数，从而可以根据需要添加参数。例如：可以通过 <code v-pre>WithDeprecatedPasswordFlag()</code> 和 <code v-pre>WithDeprecatedSecretFlag()</code> 添加密码和密钥认证参数。</p>
<p><code v-pre>NewMatchVersionFlags</code> 指定是否需要服务端版本和客户端版本一致。如果不一致，在调用服务接口时会报错。</p>
<h3 id="配置文件解析" tabindex="-1"><a class="header-anchor" href="#配置文件解析" aria-hidden="true">#</a> 配置文件解析</h3>
<p>iamctl需要连接iam-apiserver，来完成用户、策略和密钥的增删改查，并且需要进行认证。要完成这些功能，需要有比较多的配置项。这些配置项如果每次都在命令行选项指定，会很麻烦，也容易出错。</p>
<p>最好的方式是保存到配置文件中，并加载配置文件。加载配置文件的代码位于NewIAMCtlCommand函数中，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token boolean">_</span> <span class="token operator">=</span> viper<span class="token punctuation">.</span><span class="token function">BindPFlags</span><span class="token punctuation">(</span>cmds<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
cobra<span class="token punctuation">.</span><span class="token function">OnInitialize</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    genericapiserver<span class="token punctuation">.</span><span class="token function">LoadConfig</span><span class="token punctuation">(</span>viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span>genericclioptions<span class="token punctuation">.</span>FlagIAMConfig<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"iamctl"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>iamctl会按以下优先级加载配置文件：</p>
<ol>
<li>命令行参 <code v-pre>--iamconfig</code> 指定的配置文件。</li>
<li>当前目录下的iamctl.yaml文件。</li>
<li><code v-pre>$HOME/.iam/iamctl.yaml</code> 文件。</li>
</ol>
<p>这种加载方式具有两个好处。首先是可以手动指定不同的配置文件，这在多环境、多配置下尤为重要。其次是方便使用，可以把配置存放在默认的加载路径中，在执行命令时，就不用再指定 <code v-pre>--iamconfig</code> 参数。</p>
<p>加载完配置文件之后，就可以通过 <code v-pre>viper.Get&lt;Type&gt;()</code> 函数来获取配置。例如，iamctl使用了以下 <code v-pre>viper.Get&lt;Type&gt;</code> 方法：</p>
<p><img src="http://sm.nsddd.top/sm202303051019261.png" alt="图片"></p>
<h2 id="iamctl中子命令是如何构建的" tabindex="-1"><a class="header-anchor" href="#iamctl中子命令是如何构建的" aria-hidden="true">#</a> iamctl中子命令是如何构建的？</h2>
<p>讲完了iamctl命令行工具的核心实现，我们再来看看iamctl命令行工具中，子命令是如何构建的。</p>
<p>命令行工具的核心是命令，有很多种方法可以构建一个命令，但还是有一些比较好的构建方法，值得我们去参考。接下来，我来介绍下如何用比较好的方式去构建命令。</p>
<h3 id="命令构建" tabindex="-1"><a class="header-anchor" href="#命令构建" aria-hidden="true">#</a> 命令构建</h3>
<p>命令行工具的核心能力是提供各类命令，来完成不同功能，每个命令构建的方式可以完全不同，但最好能按相同的方式去构建，并抽象成一个模型。如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051019014.jpeg" alt="图片"></p>
<p>你可以将一个命令行工具提供的命令进行分组。每个分组包含多个命令，每个命令又可以具有多个子命令，子命令和父命令在构建方式上完全一致。</p>
<p>每个命令可以按下面的四种方式构建。具体代码你可以参考<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/iamctl/cmd/user/user_update.go" target="_blank" rel="noopener noreferrer">internal/iamctl/cmd/user/user_update.go<ExternalLinkIcon/></a>。</p>
<ul>
<li>通过 <code v-pre>NewCmdXyz</code> 函数创建命令框架。 <code v-pre>NewCmdXyz</code> 函数通过创建一个 <code v-pre>cobra.Command</code> 类型的变量来创建命令；通过指定 <code v-pre>cobra.Command</code> 结构体类型的Short、Long、Example字段，来指定该命令的使用文档<code v-pre>iamctl -h</code> 、详细使用文档<code v-pre>iamctl xyz -h</code> 和使用示例。</li>
<li>通过 <code v-pre>cmd.Flags().XxxxVar</code> 来给该命令添加命令行选项。</li>
<li>为了在不指定命令行参数时，能够按照默认的方式执行命令，可以通过 <code v-pre>NewXyzOptions</code> 函数返回一个设置了默认选项的 <code v-pre>XyzOptions</code> 类型的变量。</li>
<li><code v-pre>XyzOptions</code> 选项具有 Complete 、Validate 和 Run 三个方法，分别完成选项补全、选项验证和命令执行。命令的执行逻辑可以在 <code v-pre>func (o *XyzOptions) Run(args []string) error</code> 函数中编写。</li>
</ul>
<p>按相同的方式去构建命令，抽象成一个通用模型，这种方式有下面四个好处。</p>
<ul>
<li>减少理解成本：理解一个命令的构建方式，就可以理解其他命令的构建方式。</li>
<li>提高新命令的开发效率：可以复用其他命令的开发框架，新命令只需填写业务逻辑即可。</li>
<li>自动生成命令：可以按照规定的命令模型，自动生成新的命令。</li>
<li>易维护：因为所有的命令都来自于同一个命令模型，所以可以保持一致的代码风格，方便后期维护。</li>
</ul>
<h3 id="自动生成命令" tabindex="-1"><a class="header-anchor" href="#自动生成命令" aria-hidden="true">#</a> 自动生成命令</h3>
<p>上面讲到，自动生成命令模型的好处之一是可以自动生成命令，下面让我们来具体看下。</p>
<p>iamctl自带了命令生成工具，下面我们看看生成方法，一共可以分成5步。这里假设生成 <code v-pre>xyz</code> 命令。</p>
<p>第一步，新建一个 <code v-pre>xyz</code> 目录，用来存放 <code v-pre>xyz</code> 命令源码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> internal/iamctl/cmd/xyz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，在xyz目录下，使用 <code v-pre>iamctl new</code> 命令生成 <code v-pre>xyz</code> 命令源码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> internal/iamctl/cmd/xyz/
$ iamctl new xyz
Command <span class="token function">file</span> generated: xyz.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，将 <code v-pre>xyz</code> 命令添加到root命令中，假设 <code v-pre>xyz</code> 属于 <code v-pre>Settings Commands</code> 命令分组。</p>
<p>在 <code v-pre>NewIAMCtlCommand</code> 函数中，找到 <code v-pre>Settings Commands</code> 分组，将 <code v-pre>NewCmdXyz</code> 追加到Commands数组后面：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token punctuation">{</span>
     Message<span class="token punctuation">:</span> <span class="token string">"Settings Commands:"</span><span class="token punctuation">,</span>
     Commands<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
         set<span class="token punctuation">.</span><span class="token function">NewCmdSet</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> ioStreams<span class="token punctuation">)</span><span class="token punctuation">,</span>
         completion<span class="token punctuation">.</span><span class="token function">NewCmdCompletion</span><span class="token punctuation">(</span>ioStreams<span class="token punctuation">.</span>Out<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         xyz<span class="token punctuation">.</span><span class="token function">NewCmdXyz</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> ioStreams<span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步，编译iamctl：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> build <span class="token assign-left variable">BINS</span><span class="token operator">=</span>iamctl  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第五步，测试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iamctl xyz <span class="token parameter variable">-h</span>
A longer description that spans multiple lines and likely contains examples and usage of using your command. For
example:
 
 Cobra is a CLI library <span class="token keyword">for</span> Go that empowers applications. This application is a tool to generate the needed files to
quickly create a Cobra application.
 
Examples:
  <span class="token comment"># Print all option values for xyz</span>
  iamctl xyz marmotedu marmotedupass
 
Options:
  -b, <span class="token parameter variable">--bool</span><span class="token operator">=</span>false: Bool option.
  -i, <span class="token parameter variable">--int</span><span class="token operator">=</span><span class="token number">0</span>: Int option.
      <span class="token parameter variable">--slice</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>: String slice option.
      <span class="token parameter variable">--string</span><span class="token operator">=</span><span class="token string">'default'</span><span class="token builtin class-name">:</span> String option.
 
Usage:
  iamctl xyz USERNAME PASSWORD <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
 
Use <span class="token string">"iamctl options"</span> <span class="token keyword">for</span> a list of global command-line options <span class="token punctuation">(</span>applies to all commands<span class="token punctuation">)</span>.
$ iamctl xyz marmotedu marmotedupass
The following is option values:
<span class="token operator">==</span><span class="token operator">></span> --string: default<span class="token punctuation">(</span>complete<span class="token punctuation">)</span>
<span class="token operator">==</span><span class="token operator">></span> --slice: <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">==</span><span class="token operator">></span> --int: <span class="token number">0</span>
<span class="token operator">==</span><span class="token operator">></span> --bool: <span class="token boolean">false</span>
 
The following is args values:
<span class="token operator">==</span><span class="token operator">></span> username: marmotedu
<span class="token operator">==</span><span class="token operator">></span> password: marmotedupass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以看到，经过短短的几步，就添加了一个新的命令 <code v-pre>xyz</code> 。 <code v-pre>iamctl new</code> 命令不仅可以生成不带子命令的命令，还可以生成带有子命令的命令，生成方式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iamctl new <span class="token parameter variable">-g</span> xyz
Command <span class="token function">file</span> generated: xyz.go
Command <span class="token function">file</span> generated: xyz_subcmd1.go
Command <span class="token function">file</span> generated: xyz_subcmd2.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令自动补全" tabindex="-1"><a class="header-anchor" href="#命令自动补全" aria-hidden="true">#</a> 命令自动补全</h3>
<p>cobra会根据注册的命令自动生成补全脚本，可以补全父命令、子命令和选项参数。在bash下，可以按下面的方式配置自动补全功能。</p>
<p>第一步，生成自动补全脚本：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iamctl completion <span class="token function">bash</span> <span class="token operator">></span> ~/.iam/completion.bash.inc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，登陆时加载bash，自动补全脚本：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">"source '<span class="token environment constant">$HOME</span>/.iam/completion.bash.inc'"</span> <span class="token operator">>></span> <span class="token environment constant">$HOME</span>/.bash_profile$ <span class="token builtin class-name">source</span> <span class="token environment constant">$HOME</span>/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第三步，测试自动补全功能：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iamctl xy<span class="token operator">&lt;</span>TAB<span class="token operator">></span> <span class="token comment"># 按TAB键，自动补全为：iamctl xyz</span>
$ iamctl xyz --b<span class="token operator">&lt;</span>TAB<span class="token operator">></span> <span class="token comment"># 按TAB键，自动补全为：iamctl xyz --bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更友好的输出" tabindex="-1"><a class="header-anchor" href="#更友好的输出" aria-hidden="true">#</a> 更友好的输出</h3>
<p>在开发命令时，可以通过一些技巧来提高使用体验。我经常会在输出中打印一些彩色输出，或者将一些输出以表格的形式输出，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051029596.png" alt="image-20230305102951543"></p>
<p>这里，使用 <code v-pre>github.com/olekukonko/tablewriter</code> 包来实现表格功能，使用 <code v-pre>github.com/fatih/color</code> 包来打印带色彩的字符串。具体使用方法，你可以参考<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/iamctl/cmd/validate/validate.go" target="_blank" rel="noopener noreferrer">internal/iamctl/cmd/validate/validate.go<ExternalLinkIcon/></a>文件。</p>
<p><code v-pre>github.com/fatih/color</code> 包可以给字符串标示颜色，字符串和颜色的对应关系可通过 <code v-pre>iamctl color</code> 来查看，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051030860.png" alt="image-20230305103006800"></p>
<h2 id="iamctl是如何进行api调用的" tabindex="-1"><a class="header-anchor" href="#iamctl是如何进行api调用的" aria-hidden="true">#</a> iamctl是如何进行API调用的？</h2>
<p>上面我介绍了iamctl命令的构建方式，那么这里我们再来看下iamctl是如何请求服务端API接口的。</p>
<p>Go后端服务的功能通常通过API接口来对外暴露，一个后端服务可能供很多个终端使用，比如浏览器、命令行工具、手机等。为了保持功能的一致性，这些终端都会调用同一套API来完成相同的功能，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051027423.jpeg" alt="this server api cli"></p>
<p>如果命令行工具需要用到后端服务的功能，也需要通过API调用的方式。理想情况下，Go后端服务对外暴露的所有API功能，都可以通过命令行工具来完成。一个API接口对应一个命令，API接口的参数映射到命令的参数。</p>
<p>要调用服务端的API接口，最便捷的方法是通过SDK来调用，对于一些没有实现SDK的接口，也可以直接调用。所以，在命令行工具中，需要支持以下两种调用方式：</p>
<ul>
<li>通过SDK调用服务端 API 接口。</li>
<li>直接调用服务端的API接口（本专栏是REST API接口）。</li>
</ul>
<p>iamctl通过<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/iamctl/cmd/cmd.go#L82" target="_blank" rel="noopener noreferrer">cmdutil.NewFactory<ExternalLinkIcon/></a>创建一个 <code v-pre>Factory</code> 类型的变量 <code v-pre>f</code> ， <code v-pre>Factory</code> 定义为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Factory <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    genericclioptions<span class="token punctuation">.</span>RESTClientGetter
    <span class="token function">IAMClientSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>marmotedu<span class="token punctuation">.</span>Clientset<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
    <span class="token function">RESTClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>restclient<span class="token punctuation">.</span>RESTClient<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将变量 <code v-pre>f</code> 传入到命令中，在命令中使用Factory接口提供的 <code v-pre>RESTClient()</code> 和 <code v-pre>IAMClientSet()</code> 方法，分别返回RESTful API客户端和SDK客户端，从而使用客户端提供的接口函数。代码可参考<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/iamctl/cmd/version/version.go" target="_blank" rel="noopener noreferrer">internal/iamctl/cmd/version/version.go<ExternalLinkIcon/></a>。</p>
<h3 id="客户端配置文件" tabindex="-1"><a class="header-anchor" href="#客户端配置文件" aria-hidden="true">#</a> 客户端配置文件</h3>
<p>如果要创建RESTful API客户端和SDK的客户端，需要调用 <code v-pre>f.ToRESTConfig()</code> 函数返回 <code v-pre>*github.com/marmotedu/marmotedu-sdk-go/rest.Config</code> 类型的配置变量，然后再基于 <code v-pre>rest.Config</code> 类型的配置变量创建客户端。</p>
<p><code v-pre>f.ToRESTConfig</code> 函数最终是调用<a href="https://github.com/marmotedu/iam/blob/v1.0.6/pkg/cli/genericclioptions/config_flags.go#L92-L98" target="_blank" rel="noopener noreferrer">toRawIAMConfigLoader<ExternalLinkIcon/></a>函数来生成配置的，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>ConfigFlags<span class="token punctuation">)</span> <span class="token function">toRawIAMConfigLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> clientcmd<span class="token punctuation">.</span>ClientConfig <span class="token punctuation">{</span>
    config <span class="token operator">:=</span> clientcmd<span class="token punctuation">.</span><span class="token function">NewConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> clientcmd<span class="token punctuation">.</span><span class="token function">NewClientConfigFromConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>toRawIAMConfigLoader</code> 返回 <code v-pre>clientcmd.ClientConfig</code> 类型的变量， <code v-pre>clientcmd.ClientConfig</code> 类型提供了 <code v-pre>ClientConfig</code> 方法，用来返回<code v-pre>*rest.Config</code>类型的变量。</p>
<p>在 <code v-pre>toRawIAMConfigLoader</code> 函数内部，通过 <code v-pre>viper.Unmarshal</code> 将viper中存储的配置解析到 <code v-pre>clientcmd.Config</code> 类型的结构体变量中。viper中存储的配置，是在cobra命令启动时通过LoadConfig函数加载的，代码如下（位于 <code v-pre>NewIAMCtlCommand</code> 函数中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>cobra<span class="token punctuation">.</span><span class="token function">OnInitialize</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                     
    genericapiserver<span class="token punctuation">.</span><span class="token function">LoadConfig</span><span class="token punctuation">(</span>viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span>genericclioptions<span class="token punctuation">.</span>FlagIAMConfig<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"config"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以通过 <code v-pre>--config</code> 选项，指定配置文件的路径。</p>
<h3 id="sdk调用" tabindex="-1"><a class="header-anchor" href="#sdk调用" aria-hidden="true">#</a> SDK调用</h3>
<p>通过<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/iamctl/cmd/util/factory_client_access.go#L41-L47" target="_blank" rel="noopener noreferrer">IAMClient<ExternalLinkIcon/></a>返回SDK客户端，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>factoryImpl<span class="token punctuation">)</span> <span class="token function">IAMClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>iam<span class="token punctuation">.</span>IamClient<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  clientConfig<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">ToRESTConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> iam<span class="token punctuation">.</span><span class="token function">NewForConfig</span><span class="token punctuation">(</span>clientConfig<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>marmotedu.Clientset</code> 提供了iam-apiserver的所有接口。</p>
<h3 id="rest-api调用" tabindex="-1"><a class="header-anchor" href="#rest-api调用" aria-hidden="true">#</a> REST API调用</h3>
<p>通过<a href="https://github.com/marmotedu/iam/blob/v1.0.6/internal/iamctl/cmd/util/factory_client_access.go#L49-L56" target="_blank" rel="noopener noreferrer">RESTClient()<ExternalLinkIcon/></a>返回RESTful API客户端，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>factoryImpl<span class="token punctuation">)</span> <span class="token function">RESTClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>restclient<span class="token punctuation">.</span>RESTClient<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  clientConfig<span class="token punctuation">,</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">ToRESTConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
  <span class="token punctuation">}</span>
  <span class="token function">setIAMDefaults</span><span class="token punctuation">(</span>clientConfig<span class="token punctuation">)</span>
  <span class="token keyword">return</span> restclient<span class="token punctuation">.</span><span class="token function">RESTClientFor</span><span class="token punctuation">(</span>clientConfig<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过下面的方式访问RESTful API接口：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>serverVersion <span class="token operator">*</span>version<span class="token punctuation">.</span>Info

client<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">RESTClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AbsPath</span><span class="token punctuation">(</span><span class="token string">"/version"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Into</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serverVersion<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码请求了iam-apiserver的/version接口，并将返回结果保存在 <code v-pre>serverVersion</code> 变量中。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲，我主要剖析了iamctl命令行工具的实现，进而向你介绍了如何实现一个优秀的客户端工具。</p>
<p>对于一个大型系统 <code v-pre>xxx</code> 来说，通常需要有一个 <code v-pre>xxxctl</code> 命令行工具， <code v-pre>xxxctl</code> 命令行工具可以方便开发、运维使用系统功能，并能实现功能自动化。</p>
<p>IAM项目参考kubectl，实现了命令行工具 iamctl。iamctl集成了很多功能，我们可以通过iamctl子命令来使用这些功能。例如，我们可以通过iamctl对用户、密钥和策略进行CURD操作；可以设置iamctl自动补全脚本；可以查看IAM系统的版本信息。甚至，你还可以使用 <code v-pre>iamctl new</code> 命令，快速创建一个iamctl子命令模板。</p>
<p>iamctl使用了cobra、pflag、viper包来构建，每个子命令又包含了一些基本的功能，例如短描述、长描述、使用示例、命令行选项、选项校验等。iamctl命令可以加载不同的配置文件，来连接不同的客户端。iamctl通过SDK调用、REST API调用两种方式来调用服务端API接口。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>尝试在 <code v-pre>iamctl</code> 中添加一个 <code v-pre>cliprint</code> 子命令，该子命令会读取并打印命令行选项。</li>
<li>思考下，还有哪些好的命令行工具构建方式，欢迎在留言区分享。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '26.md' style='float:left'>⬆️上一节🔗  </a><a href = '28.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


