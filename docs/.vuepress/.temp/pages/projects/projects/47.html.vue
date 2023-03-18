<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第47节" tabindex="-1"><a class="header-anchor" href="#第47节" aria-hidden="true">#</a> 第47节</h1>
<br>
<div><a href = '46.md' style='float:left'>⬆️上一节🔗  </a><a href = '48.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#准备一个演示项目">准备一个演示项目</router-link></li><li><router-link to="#配置go-modules">配置Go Modules</router-link></li><li><router-link to="#初始化go包为go模块">初始化Go包为Go模块</router-link></li><li><router-link to="#go包依赖管理">Go包依赖管理</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>今天我们更新一期特别放送作为加餐。在 <a href="https://time.geekbang.org/column/article/416397" target="_blank" rel="noopener noreferrer">特别放送 | Go Modules依赖包管理全讲<ExternalLinkIcon/></a>中，我介绍了Go Modules的知识，里面内容比较多，你可能还不知道具体怎么使用Go Modules来为你的项目管理Go依赖包。</p>
<p>这一讲，我就通过一个具体的案例，带你一步步学习Go Modules的常见用法以及操作方法，具体包含以下内容：</p>
<ol>
<li>准备一个演示项目。</li>
<li>配置Go Modules。</li>
<li>初始化Go包为Go模块。</li>
<li>Go包依赖管理。</li>
</ol>
<h2 id="准备一个演示项目" tabindex="-1"><a class="header-anchor" href="#准备一个演示项目" aria-hidden="true">#</a> 准备一个演示项目</h2>
<p>为了演示Go Modules的用法，我们首先需要一个Demo项目。假设我们有一个hello的项目，里面有两个文件，分别是hello.go和hello_test.go，所在目录为<code v-pre>/home/lk/workspace/golang/src/github.com/marmotedu/gopractise-demo/modules/hello</code>。</p>
<p>hello.go文件内容为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> hellofunc <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>	<span class="token keyword">return</span> <span class="token string">"Hello, world."</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>hello_test.go文件内容为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> helloimport <span class="token string">"testing"</span><span class="token keyword">func</span> <span class="token function">TestHello</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>	want <span class="token operator">:=</span> <span class="token string">"Hello, world."</span>	<span class="token keyword">if</span> got <span class="token operator">:=</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> got <span class="token operator">!=</span> want <span class="token punctuation">{</span>		t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Hello() = %q, want %q"</span><span class="token punctuation">,</span> got<span class="token punctuation">,</span> want<span class="token punctuation">)</span>	<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时候，该目录包含了一个Go包，但还不是Go模块，因为没有go.mod件。接下来，我就给你演示下，如何将这个包变成一个Go模块，并执行Go依赖包的管理操作。这些操作共有10个步骤，下面我们来一步步看下。</p>
<h2 id="配置go-modules" tabindex="-1"><a class="header-anchor" href="#配置go-modules" aria-hidden="true">#</a> 配置Go Modules</h2>
<ol>
<li>打开Go Modules</li>
</ol>
<p>确保Go版本<code v-pre>&gt;=go1.11</code>，并开启Go Modules，可以通过设置环境变量<code v-pre>export GO111MODULE=on</code>开启。如果你觉得每次都设置比较繁琐，可以将<code v-pre>export GO111MODULE=on</code>追加到文件<code v-pre>$HOME/.bashrc</code>中，并执行 <code v-pre>bash</code> 命令加载到当前shell环境中。</p>
<ol>
<li>设置环境变量</li>
</ol>
<p>对于国内的开发者来说，需要设置<code v-pre>export GOPROXY=https://goproxy.cn,direct</code>，这样一些被墙的包可以通过国内的镜像源安装。如果我们有一些模块存放在私有仓库中，也需要设置GOPRIVATE环境变量。</p>
<p>因为Go Modules会请求Go Checksum Database，Checksum Database国内也可能会访问失败，可以设置<code v-pre>export GOSUMDB=off</code>来关闭Checksum校验。对于一些模块，如果你希望不通过代理服务器，或者不校验<code v-pre>checksum</code>，也可以根据需要设置GONOPROXY和GONOSUMDB。</p>
<h2 id="初始化go包为go模块" tabindex="-1"><a class="header-anchor" href="#初始化go包为go模块" aria-hidden="true">#</a> 初始化Go包为Go模块</h2>
<ol>
<li>创建一个新模块</li>
</ol>
<p>你可以通过<code v-pre>go mod init</code>命令，初始化项目为Go Modules。 <code v-pre>init</code> 命令会在当前目录初始化并创建一个新的go.mod文件，也代表着创建了一个以项目根目录为根的Go Modules。如果当前目录已经存在go.mod文件，则会初始化失败。</p>
<p>在初始化Go Modules时，需要告知<code v-pre>go mod init</code>要初始化的模块名，可以指定模块名，例如<code v-pre>go mod init github.com/marmotedu/gopractise-demo/modules/hello</code>。也可以不指定模块名，让<code v-pre>init</code>自己推导。下面我来介绍下推导规则。</p>
<ul>
<li>如果有导入路径注释，则使用注释作为模块名，比如：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>package hello // <span class="token function">import</span> <span class="token string">"github.com/marmotedu/gopractise-demo/modules/hello"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>则模块名为<code v-pre>github.com/marmotedu/gopractise-demo/modules/hello</code>。</p>
<ul>
<li>如果没有导入路径注释，并且项目位于GOPATH路径下，则模块名为绝对路径去掉<code v-pre>$GOPATH/src</code>后的路径名，例如<code v-pre>GOPATH=/home/lk/workspace/golang</code>，项目绝对路径为<code v-pre>/home/colin/workspace/golang/src/github.com/marmotedu/gopractise-demo/modules/hello</code>，则模块名为<code v-pre>github.com/marmotedu/gopractise-demo/modules/hello</code>。</li>
</ul>
<p>初始化完成之后，会在当前目录生成一个go.mod文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> go.modmodule github.com/marmotedu/gopractise-demo/modules/hellogo <span class="token number">1.14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件内容表明，当前模块的导入路径为<code v-pre>github.com/marmotedu/gopractise-demo/modules/hello</code>，使用的Go版本是<code v-pre>go 1.14</code>。</p>
<p>如果要新增子目录创建新的package，则package的导入路径自动为 <code v-pre>模块名/子目录名</code> ：<code v-pre>github.com/marmotedu/gopractise-demo/modules/hello/&lt;sub-package-name&gt;</code>，不需要在子目录中再次执行<code v-pre>go mod init</code>。</p>
<p>比如，我们在hello目录下又创建了一个world包<code v-pre>world/world.go</code>，则world包的导入路径为<code v-pre>github.com/marmotedu/gopractise-demo/modules/hello/world</code>。</p>
<h2 id="go包依赖管理" tabindex="-1"><a class="header-anchor" href="#go包依赖管理" aria-hidden="true">#</a> Go包依赖管理</h2>
<ol>
<li>增加一个依赖</li>
</ol>
<p>Go Modules主要是用来对包依赖进行管理的，所以这里我们来给hello包增加一个依赖<code v-pre>rsc.io/quote</code>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> helloimport <span class="token string">"rsc.io/quote"</span><span class="token keyword">func</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>	<span class="token keyword">return</span> quote<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行<code v-pre>go test</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go testgo: finding module <span class="token keyword">for</span> package rsc.io/quotego: downloading rsc.io/quote v1.5.2go: found rsc.io/quote <span class="token keyword">in</span> rsc.io/quote v1.5.2go: downloading rsc.io/sampler v1.3.0PASSok  	github.com/google/addlicense/golang/src/github.com/marmotedu/gopractise-demo/modules/hello	<span class="token number">0</span>.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当go命令在解析源码时，遇到需要导入一个模块的情况，就会去go.mod文件中查询该模块的版本，如果有指定版本，就导入指定的版本。</p>
<p>如果没有查询到该模块，go命令会自动根据模块的导入路径安装模块，并将模块和其最新的版本写入go.mod文件中。在我们的示例中，<code v-pre>go test</code>将模块<code v-pre>rsc.io/quote</code>解析为<code v-pre>rsc.io/quote v1.5.2</code>，并且同时还下载了<code v-pre>rsc.io/quote</code>模块的两个依赖模块：<code v-pre>rsc.io/quote</code>和<code v-pre>rsc.io/sampler</code>。只有直接依赖才会被记录到go.mod文件中。</p>
<p>查看go.mod文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>module github.com/marmotedu/gopractise-demo/modules/hellogo <span class="token number">1</span>.14require rsc.io/quote v1.5.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次执行<code v-pre>go test</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go testPASSok  	github.com/marmotedu/gopractise-demo/modules/hello	<span class="token number">0</span>.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们再次执行<code v-pre>go test</code>时，不会再下载并记录需要的模块，因为go.mod目前是最新的，并且需要的模块已经缓存到了本地的<code v-pre>$GOPATH/pkg/mod</code>目录下。可以看到，在当前目录还新生成了一个go.sum文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> go.sumgolang.org/x/text v0.0.0-20170915032832-14c0d48ead0c h1:qgOY6WgZOaTkIIMiVjBQcw93ERBE4m30iBm00nkL0i8<span class="token operator">=</span>golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c/go.mod h1:NqM8EUOU14njkJ3fqMW+pc6Ldnwhi/IjpwHt7yyuwOQ<span class="token operator">=</span>rsc.io/quote v1.5.2 h1:w5fcysjrx7yqtD/aO+QwRjYZOKnaM9Uh2b40tElTs3Y<span class="token operator">=</span>rsc.io/quote v1.5.2/go.mod h1:LzX7hefJvL54yjefDEDHNONDjII0t9xZLPXsUe+TKr0<span class="token operator">=</span>rsc.io/sampler v1.3.0 h1:7uVkIFmeBqHfdjD+gZwtXXI+RODJ2Wc4O7MPEh/QiW4<span class="token operator">=</span>rsc.io/sampler v1.3.0/go.mod h1:T1hPZKmBbMNahiBKFy5HrXp6adAjACjK9JXDnKaTXpA<span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>go test</code>在执行时，还可以添加<code v-pre>-mod</code>选项，比如<code v-pre>go test -mod=vendor</code>。<code v-pre>-mod</code>有3个值，我来分别介绍下。</p>
<ul>
<li>readonly：不更新go.mod，任何可能会导致go.mod变更的操作都会失败。通常用来检查go.mod文件是否需要更新，例如用在CI或者测试场景。</li>
<li>vendor：从项目顶层目录下的vendor中导入包，而不是从模块缓存中导入包，需要确保vendor包完整准确。</li>
<li>mod：从模块缓存中导入包，即使项目根目录下有vendor目录。</li>
</ul>
<p>如果<code v-pre>go test</code>执行时没有<code v-pre>-mod</code>选项，并且项目根目录存在vendor目录，go.mod中记录的go版本大于等于<code v-pre>1.14</code>，此时<code v-pre>go test</code>执行效果等效于<code v-pre>go test -mod=vendor</code>。<code v-pre>-mod</code>标志同样适用于go build、go install、go run、go test、go list、go vet命令。</p>
<ol>
<li>查看所有依赖模块</li>
</ol>
<p>我们可以通过<code v-pre>go list -m all</code>命令查看所有依赖模块：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go list <span class="token parameter variable">-m</span> allgithub.com/marmotedu/gopractise-demo/modules/hellogolang.org/x/text v0.0.0-20170915032832-14c0d48ead0crsc.io/quote v1.5.2rsc.io/sampler v1.3.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看出，除了<code v-pre>rsc.io/quote v1.5.2</code>外，还间接依赖了其他模块。</p>
<ol>
<li>更新依赖</li>
</ol>
<p>通过<code v-pre>go list -m all</code>，我们可以看到模块依赖的<code v-pre>golang.org/x/text</code>模块版本是<code v-pre>v0.0.0</code>，我们可以通过<code v-pre>go get</code>命令，将其更新到最新版本，并观察测试是否通过：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go get golang.org/x/textgo: golang.org/x/text upgrade <span class="token operator">=</span><span class="token operator">></span> v0.3.3$ go testPASSok  	github.com/marmotedu/gopractise-demo/modules/hello	<span class="token number">0</span>.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>go test</code>命令执行后输出PASS说明升级成功，再次看下<code v-pre>go list -m all</code>和go.mod文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go list <span class="token parameter variable">-m</span> allgithub.com/marmotedu/gopractise-demo/modules/hellogolang.org/x/text v0.3.3golang.org/x/tools v0.0.0-20180917221912-90fa682c2a6ersc.io/quote v1.5.2rsc.io/sampler v1.3.0$ <span class="token function">cat</span> go.modmodule github.com/marmotedu/gopractise-demo/modules/hellogo <span class="token number">1</span>.14require <span class="token punctuation">(</span>	golang.org/x/text v0.3.3 // indirect	rsc.io/quote v1.5.2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，<code v-pre>golang.org/x/text</code>包被更新到最新的tag版本(<code v-pre>v0.3.3</code>)，并且同时更新了go.mod文件。<code v-pre>// indirect</code>说明<code v-pre>golang.org/x/text</code>是间接依赖。现在我们再尝试更新<code v-pre>rsc.io/sampler</code>并测试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go get rsc.io/samplergo: rsc.io/sampler upgrade <span class="token operator">=</span><span class="token operator">></span> v1.99.99go: downloading rsc.io/sampler v1.99.99$ go test--- FAIL: TestHello <span class="token punctuation">(</span><span class="token number">0</span>.00s<span class="token punctuation">)</span>    hello_test.go:8: Hello<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"99 bottles of beer on the wall, 99 bottles of beer, ..."</span>, want <span class="token string">"Hello, world."</span>FAILexit status 1FAIL	github.com/marmotedu/gopractise-demo/modules/hello	<span class="token number">0</span>.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试失败，说明最新的版本<code v-pre>v1.99.99</code>与我们当前的模块不兼容，我们可以列出<code v-pre>rsc.io/sampler</code>所有可用的版本，并尝试更新到其他版本：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go list <span class="token parameter variable">-m</span> <span class="token parameter variable">-versions</span> rsc.io/samplerrsc.io/sampler v1.0.0 v1.2.0 v1.2.1 v1.3.0 v1.3.1 v1.99.99<span class="token comment"># 我们尝试选择一个次新的版本v1.3.1$ go get rsc.io/sampler@v1.3.1go: downloading rsc.io/sampler v1.3.1$ go testPASSok  	github.com/marmotedu/gopractise-demo/modules/hello	0.004s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，更新到<code v-pre>v1.3.1</code>版本，测试是通过的。<code v-pre>go get</code>还支持多种参数，如下表所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/2b/f6/2b80e94c1e91bb18dea9c20695b25bf6.jpg?wh=2248x1496" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/2b/f6/2b80e94c1e91bb18dea9c20695b25bf6.jpg?wh=2248x1496" alt="img"><ExternalLinkIcon/></a></p>
<ol>
<li>添加一个新的major版本依赖</li>
</ol>
<p>我们尝试添加一个新的函数<code v-pre>func Proverb</code>，该函数通过调用<code v-pre>rsc.io/quote/v3</code>的<code v-pre>quote.Concurrency</code>函数实现。</p>
<p>首先，我们在hello.go文件中添加新函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> helloimport <span class="token punctuation">(</span>	<span class="token string">"rsc.io/quote"</span>	quoteV3 <span class="token string">"rsc.io/quote/v3"</span><span class="token punctuation">)</span><span class="token keyword">func</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>	<span class="token keyword">return</span> quote<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token keyword">func</span> <span class="token function">Proverb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>	<span class="token keyword">return</span> quoteV3<span class="token punctuation">.</span><span class="token function">Concurrency</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在hello_test.go中添加该函数的测试用例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestProverb</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>    want <span class="token operator">:=</span> <span class="token string">"Concurrency is not parallelism."</span>    <span class="token keyword">if</span> got <span class="token operator">:=</span> <span class="token function">Proverb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> got <span class="token operator">!=</span> want <span class="token punctuation">{</span>        t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Proverb() = %q, want %q"</span><span class="token punctuation">,</span> got<span class="token punctuation">,</span> want<span class="token punctuation">)</span>    <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后执行测试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go testgo: finding module <span class="token keyword">for</span> package rsc.io/quote/v3go: found rsc.io/quote/v3 <span class="token keyword">in</span> rsc.io/quote/v3 v3.1.0PASSok  	github.com/marmotedu/gopractise-demo/modules/hello	<span class="token number">0</span>.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试通过，可以看到当前模块同时依赖了同一个模块的不同版本<code v-pre>rsc.io/quote</code>和<code v-pre>rsc.io/quote/v3</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go list <span class="token parameter variable">-m</span> rsc.io/q<span class="token punctuation">..</span>.rsc.io/quote v1.5.2rsc.io/quote/v3 v3.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>升级到不兼容的版本</li>
</ol>
<p>在上一步中，我们使用<code v-pre>rsc.io/quote v1</code>版本的<code v-pre>Hello()</code>函数。按照语义化版本规则，如果我们想升级<code v-pre>major</code>版本，可能面临接口不兼容的问题，需要我们变更代码。我们来看下<code v-pre>rsc.io/quote/v3</code>的函数：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go doc rsc.io/quote/v3package quote // <span class="token function">import</span> <span class="token string">"github.com/google/addlicense/golang/pkg/mod/rsc.io/quote/v3@v3.1.0"</span>Package quote collects pithy sayings.func Concurrency<span class="token punctuation">(</span><span class="token punctuation">)</span> stringfunc GlassV3<span class="token punctuation">(</span><span class="token punctuation">)</span> stringfunc GoV3<span class="token punctuation">(</span><span class="token punctuation">)</span> stringfunc HelloV3<span class="token punctuation">(</span><span class="token punctuation">)</span> stringfunc OptV3<span class="token punctuation">(</span><span class="token punctuation">)</span> string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，<code v-pre>Hello()</code>函数变成了<code v-pre>HelloV3()</code>，这就需要我们变更代码做适配。因为我们都统一模块到一个版本了，这时候就不需要再为了避免重名而重命名模块，所以此时hello.go内容为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> helloimport <span class="token punctuation">(</span>	<span class="token string">"rsc.io/quote/v3"</span><span class="token punctuation">)</span><span class="token keyword">func</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>	<span class="token keyword">return</span> quote<span class="token punctuation">.</span><span class="token function">HelloV3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token keyword">func</span> <span class="token function">Proverb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>	<span class="token keyword">return</span> quote<span class="token punctuation">.</span><span class="token function">Concurrency</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行<code v-pre>go test</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go testPASSok  	github.com/marmotedu/gopractise-demo/modules/hello	<span class="token number">0</span>.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到测试成功。</p>
<ol>
<li>删除不使用的依赖</li>
</ol>
<p>在上一步中，我们移除了<code v-pre>rsc.io/quote</code>包，但是它仍然存在于<code v-pre>go list -m all</code>和go.mod中，这时候我们要执行<code v-pre>go mod tidy</code>清理不再使用的依赖：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go mod tidy<span class="token punctuation">[</span>colin@dev hello<span class="token punctuation">]</span>$ <span class="token function">cat</span> go.modmodule github.com/marmotedu/gopractise-demo/modules/hellogo <span class="token number">1</span>.14require <span class="token punctuation">(</span>	golang.org/x/text v0.3.3 // indirect	rsc.io/quote/v3 v3.1.0	rsc.io/sampler v1.3.1 // indirect<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>使用vendor</li>
</ol>
<p>如果我们想把所有依赖都保存起来，在Go命令执行时不再下载，可以执行<code v-pre>go mod vendor</code>，该命令会把当前项目的所有依赖都保存在项目根目录的vendor目录下，也会创建<code v-pre>vendor/modules.txt</code>文件，来记录包和模块的版本信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go mod vendor$ lsgo.mod  go.sum  hello.go  hello_test.go  vendor  world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>到这里，我就讲完了Go依赖包管理常用的10个操作。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲中，我详细介绍了如何使用Go Modules来管理依赖，它包括以下Go Modules操作：</p>
<ol>
<li>打开Go Modules；</li>
<li>设置环境变量；</li>
<li>创建一个新模块；</li>
<li>增加一个依赖；</li>
<li>查看所有依赖模块；</li>
<li>更新依赖；</li>
<li>添加一个新的major版本依赖；</li>
<li>升级到不兼容的版本；</li>
<li>删除不使用的依赖。</li>
<li>使用vendor。</li>
</ol>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>思考下，如何更新项目的所有依赖到最新的版本？</li>
<li>思考下，如果我们的编译机器访问不了外网，如何通过Go Modules下载Go依赖包？</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '46.md' style='float:left'>⬆️上一节🔗  </a><a href = '48.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


