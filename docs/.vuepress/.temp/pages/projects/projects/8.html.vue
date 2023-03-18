<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第8节-iam-项目如何进行研发流程管理" tabindex="-1"><a class="header-anchor" href="#第8节-iam-项目如何进行研发流程管理" aria-hidden="true">#</a> 第8节 IAM 项目如何进行研发流程管理</h1>
<br>
<div><a href = '7.md' style='float:left'>⬆️上一节🔗  </a><a href = '9.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#第一步-新建分支">第一步：新建分支</router-link></li><li><router-link to="#第二步-添加自动化命令">第二步，添加自动化命令</router-link></li><li><router-link to="#第三步-生成代码">第三步，生成代码</router-link></li><li><router-link to="#第四步-版权检查">第四步，版权检查</router-link></li><li><router-link to="#第五步-代码格式化">第五步，代码格式化</router-link></li><li><router-link to="#第六步-静态代码检查">第六步，静态代码检查</router-link></li><li><router-link to="#第七步-单元测试">第七步，单元测试</router-link></li><li><router-link to="#第八步-构建">第八步，构建</router-link></li><li><router-link to="#代码提交">代码提交</router-link><ul><li><router-link to="#github-action-配置">Github Action 配置</router-link></li></ul></li><li><router-link to="#测试阶段">测试阶段</router-link></li><li><router-link to="#iam-项目的-makefile-项目管理技巧">IAM 项目的 Makefile 项目管理技巧</router-link><ul><li><router-link to="#help-自动解析">help 自动解析</router-link></li><li><router-link to="#options-中指定变量值">Options 中指定变量值</router-link></li><li><router-link to="#自动生成-changelog">自动生成 CHANGELOG</router-link></li><li><router-link to="#自动生成版本号">自动生成版本号</router-link></li><li><router-link to="#保持行为一致">保持行为一致</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p><strong>开发阶段主要要做的两件事情分别是代码开发和代码提交两个部分。</strong></p>
<p>拿到需求之后，首先需要开发代码。这时，我们就需要选择一个适合团队和项目的 Git 工作流。因为 Git Flow 工作流比较适合大型的非开源项目，所以这里我们选择 Git Flow 工作流。代码开发的具体步骤如下：</p>
<h2 id="第一步-新建分支" tabindex="-1"><a class="header-anchor" href="#第一步-新建分支" aria-hidden="true">#</a> 第一步：新建分支</h2>
<p><strong>基于 develop 新建一个分支 <code v-pre>feature/helloworld</code></strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature/helloworld develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>⚠️ <strong>这里需要注意</strong>：新建的 branch 名要符合 Git Flow 工作流中的分支命名规则。否则，在 git commit 阶段，会因为 <code v-pre>branch</code> 不规范导致 <code v-pre>commit</code> 失败。IAM 项目的分支命令规则具体如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302200959749.png" alt="image-20230220095937613"></p>
<blockquote>
<p>IAM 项目通过 <code v-pre>pre-commit githooks</code> 来确保分支名是符合规范的。在 IAM 项目根目录下执行 <code v-pre>git commit</code> 命令，git 会自动执行<code v-pre>pre-commit</code>脚本，该脚本会检查当前 branch 的名字是否符合规范。</p>
</blockquote>
<p>这里还有一个地方需要你注意：git 不会提交 <code v-pre>.git/hooks</code> 目录下的 <code v-pre>githooks</code> 脚本，所以我们需要通过以下手段，确保开发者 clone 仓库之后，仍然能安装我们指定的 githooks 脚本到 <code v-pre>.git/hooks</code> 目录：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Copy githook scripts when execute makefile    </span>
COPY_GITHOOK:<span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>shell <span class="token function">cp</span> <span class="token parameter variable">-f</span> githooks/* .git/hooks/<span class="token variable">)</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码放在<code v-pre>scripts/make-rules/common.mk</code>文件中，每次执行 make 命令时都会执行，可以确保 <code v-pre>githooks</code> 都安装到 <code v-pre>.git/hooks</code>目录下。</p>
<h2 id="第二步-添加自动化命令" tabindex="-1"><a class="header-anchor" href="#第二步-添加自动化命令" aria-hidden="true">#</a> 第二步，添加自动化命令</h2>
<p><strong>在 <code v-pre>feature/helloworld</code> 分支中，完成 <code v-pre>helloworld</code> 命令的添加。</strong></p>
<p>首先，通过 iamctl new helloworld 命令创建 helloworld 命令模板：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iamctl new helloworld <span class="token parameter variable">-d</span> internal/iamctl/cmd/helloworld
Command <span class="token function">file</span> generated: internal/iamctl/cmd/helloworld/helloworld.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，编辑<code v-pre>internal/iamctl/cmd/cmd.go</code>文件，在源码文件中添加<code v-pre>helloworld.NewCmdHelloworld(f, ioStreams</code>),加载 <code v-pre>helloworld</code> 命令。这里将 helloworld 命令设置为Troubleshooting and Debugging Commands命令分组：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"github.com/marmotedu/iam/internal/iamctl/cmd/helloworld"</span>
<span class="token punctuation">)</span>
        <span class="token operator">...</span>
        <span class="token punctuation">{</span>
            Message<span class="token punctuation">:</span> <span class="token string">"Troubleshooting and Debugging Commands:"</span><span class="token punctuation">,</span>
            Commands<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
                validate<span class="token punctuation">.</span><span class="token function">NewCmdValidate</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> ioStreams<span class="token punctuation">)</span><span class="token punctuation">,</span>
                helloworld<span class="token punctuation">.</span><span class="token function">NewCmdHelloworld</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> ioStreams<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些操作中包含了 low code 的思想。使用代码自动生成这一技术。这样做有两个好处：</p>
<ul>
<li>一方面能够提高我们的代码开发效率；</li>
<li>另一方面也能够保证规范，减少手动操作可能带来的错误。</li>
</ul>
<p>所以这里将 <code v-pre>iamctl</code> 的命令也模板化，并通过 <code v-pre>iamctl new</code> 自动生成。</p>
<h2 id="第三步-生成代码" tabindex="-1"><a class="header-anchor" href="#第三步-生成代码" aria-hidden="true">#</a> 第三步，生成代码</h2>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>$ make gen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果改动不涉及代码生成，可以不执行make gen操作。 make gen 执行的其实是 gen.run 伪目标：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gen.run: gen.clean gen.errcode gen.docgo.doc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，当执行 <code v-pre>make gen.ru</code>n 时，其实会先清理之前生成的文件，再分别自动生成 error code 和 doc.go 文件。</p>
<p>这里需要注意，通过<code v-pre>make gen</code> 生成的存量代码要具有幂等性。只有这样，才能确保每次生成的代码是一样的，避免不一致带来的问题。</p>
<p>我们可以将更多的与自动生成代码相关的功能放在 <code v-pre>gen.mk Makefile</code> 中。例如：</p>
<ul>
<li><code v-pre>gen.docgo.doc</code>，代表自动生成 doc.go 文件。</li>
<li><code v-pre>gen.ca.%</code>，代表自动生成 iamctl、iam-apiserver、iam-authz-server 证书文件。</li>
</ul>
<h2 id="第四步-版权检查" tabindex="-1"><a class="header-anchor" href="#第四步-版权检查" aria-hidden="true">#</a> 第四步，版权检查</h2>
<p>如果有新文件添加，我们还需要执行 <code v-pre>make verify-copyright</code> ，来检查新文件有没有添加版权头信息。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> verify-copyright
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果版权检查失败，可以执行<code v-pre>make add-copyright</code>自动添加版权头。添加版权信息只针对开源软件，如果你的软件不需要添加，就可以略过这一步。</p>
<p>这里还有个 Makefile 编写技巧：如果 Makefile 的 command 需要某个命令，就可以使该目标依赖类似 <code v-pre>tools.verify.addlicense</code> 这种目标，<code v-pre>tools.verify.addlicense</code> 会检查该工具是否已安装，如果没有就先安装。</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> copyright.verify    
<span class="token target symbol">copyright.verify</span><span class="token punctuation">:</span> tools.verify.addlicense 
  ...
<span class="token target symbol">tools.verify.%</span><span class="token punctuation">:</span>          
  <span class="token operator">@</span>if ! which <span class="token variable">$*</span> &amp;>/dev/null<span class="token punctuation">;</span> then <span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> tools.install.<span class="token variable">$*;</span> fi
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> install.addlicense                              
<span class="token target symbol">install.addlicense</span><span class="token punctuation">:</span>        
  <span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>GO<span class="token punctuation">)</span> get -u github.com/marmotedu/addlicense
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方式，可以使 make copyright.verify 尽可能自动化，减少手动介入的概率。</p>
<h2 id="第五步-代码格式化" tabindex="-1"><a class="header-anchor" href="#第五步-代码格式化" aria-hidden="true">#</a> 第五步，代码格式化</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> <span class="token function">format</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行make format会依次执行以下格式化操作：</p>
<ul>
<li>调用 gofmt 格式化你的代码。</li>
<li>调用 goimports 工具，自动增删依赖的包，并将依赖包按字母序排序并分类。</li>
<li>调用 golines 工具，把超过 120 行的代码按 golines 规则，格式化成 <code v-pre>&lt;120</code> 行的代码。</li>
<li>调用 go mod edit -fmt 格式化 go.mod 文件</li>
</ul>
<h2 id="第六步-静态代码检查" tabindex="-1"><a class="header-anchor" href="#第六步-静态代码检查" aria-hidden="true">#</a> 第六步，静态代码检查</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关于静态代码检查，在这里你可以先了解代码开发阶段有这个步骤，至于如何操作，我会在下一讲给你详细介绍。</p>
<h2 id="第七步-单元测试" tabindex="-1"><a class="header-anchor" href="#第七步-单元测试" aria-hidden="true">#</a> 第七步，单元测试</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ make test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里要注意，并不是所有的包都需要执行单元测试。你可以通过如下命令，排除掉不需要单元测试的包：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>go <span class="token builtin class-name">test</span> <span class="token variable"><span class="token variable">`</span>go list ./<span class="token punctuation">..</span>.<span class="token operator">|</span><span class="token function">egrep</span> <span class="token parameter variable">-v</span> <span class="token punctuation">$(</span>subst <span class="token punctuation">$(</span>SPACE<span class="token punctuation">)</span>,<span class="token string">'|'</span>,<span class="token punctuation">$(</span>sort <span class="token punctuation">$(</span>EXCLUDE_TESTS<span class="token punctuation">))</span><span class="token punctuation">)</span><span class="token variable">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行该命令的目的，是把 <code v-pre>mock_.* .go</code> 文件中的函数单元测试信息从 <code v-pre>coverage.out</code> 中删除。<code v-pre>mock_.*.go</code> 文件中的函数是不需要单元测试的，如果不删除，就会影响后面的单元测试覆盖率的计算。</p>
<p>如果想检查单元测试覆盖率，请执行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> cover
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认测试覆盖率至少为 60%，也可以在命令行指定覆盖率阈值为其他值，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> cover <span class="token assign-left variable">COVERAGE</span><span class="token operator">=</span><span class="token number">90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果测试覆盖率不满足要求，就会返回以下错误信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">test</span> coverage is <span class="token number">62.1</span>%
<span class="token builtin class-name">test</span> coverage does not meet expectations: <span class="token number">90</span>%, please <span class="token function">add</span> <span class="token builtin class-name">test</span> cases<span class="token operator">!</span>
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: *** <span class="token punctuation">[</span>go.test.cover<span class="token punctuation">]</span> Error <span class="token number">1</span>
make: *** <span class="token punctuation">[</span>cover<span class="token punctuation">]</span> Error <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 make 命令的退出码为1。</p>
<p>如果单元测试覆盖率达不到设置的阈值，就需要补充测试用例，否则禁止合并到 <code v-pre>develop</code> 和 master 分支。IAM 项目配置了 <code v-pre>GitHub Actions CI</code> 自动化流水线，CI 流水线会自动运行，检查单元测试覆盖率是否达到要求。</p>
<h2 id="第八步-构建" tabindex="-1"><a class="header-anchor" href="#第八步-构建" aria-hidden="true">#</a> 第八步，构建</h2>
<p>最后，我们执行make build命令，构建出cmd/目录下所有的二进制安装文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>make build 会自动构建 cmd/ 目录下的所有组件，如果只想构建其中的一个或多个组件，可以传入 BINS选项，组件之间用空格隔开，并用双引号引起来：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> build <span class="token assign-left variable">BINS</span><span class="token operator">=</span><span class="token string">"iam-apiserver iamctl"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>到这里，我们就完成了代码开发阶段的全部操作。</p>
<p>如果你觉得手动执行的 make 命令比较多，可以直接执行 make 命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span> Generating iam error code go <span class="token builtin class-name">source</span> files
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span> Generating error code markdown documentation
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span> Generating missing doc.go <span class="token keyword">for</span> go packages
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span> Verifying the boilerplate headers <span class="token keyword">for</span> all files
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span> Formating codes
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span> Run golangci to lint <span class="token builtin class-name">source</span> codes
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span> Run unit <span class="token builtin class-name">test</span>
<span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span> Building binary iam-pump v0.7.2-24-g5814e7b <span class="token keyword">for</span> linux amd64
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span> Building binary iamctl v0.7.2-24-g5814e7b <span class="token keyword">for</span> linux amd64
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接执行make会执行伪目标all所依赖的伪目标 <code v-pre>all: tidy gen add-copyright format lint cover build</code>，也即执行以下操作：<strong>依赖包添加 / 删除、生成代码、自动添加版权头、代码格式化、静态代码检查、覆盖率测试、构建。</strong></p>
<p>这里你需要注意一点：all 中依赖 <code v-pre>cover</code>，cover 实际执行的是 <code v-pre>go.test.cover</code> ，而 <code v-pre>go.test.cover</code> 又依赖 <code v-pre>go.test</code> ，所以 <code v-pre>cover</code> 实际上是先执行单元测试，再检查单元测试覆盖率是否满足预设的阈值。</p>
<p>最后补充一点，在开发阶段我们可以根据需要随时执行 make gen 、 make format 、 make lint 、 make cover 等操作，为的是能够提前发现问题并改正。</p>
<h2 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交" aria-hidden="true">#</a> 代码提交</h2>
<p>代码开发完成之后，我们就需要将代码提交到远程仓库，整个流程分为以下几个步骤。</p>
<p>第一步，开发完后，将代码提交到 <code v-pre>feature/helloworld</code> 分支，并 push 到远端仓库。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> internal/iamctl/cmd/helloworld internal/iamctl/cmd/cmd.go
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"feat: add new iamctl command 'helloworld'"</span>
$ <span class="token function">git</span> push origin feature/helloworld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我建议你只添加跟<code v-pre>feature/helloworld</code>相关的改动，这样就知道一个 commit 做了哪些变更，方便以后追溯。所以，我不建议直接执行<code v-pre>git add .</code>这类方式提交改动。</p>
<p>在提交 commit 时，commit-msg githooks 会检查 commit message 是否符合 Angular Commit Message 规范，如果不符合会报错。commit-msage 调用了<a href="https://github.com/llorllale/go-gitlint" target="_blank" rel="noopener noreferrer">go-gitlint<ExternalLinkIcon/></a>来检查 commit message。go-gitlint 会读取 <code v-pre>.gitlint</code> 中配置的 commit message 格式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>--subject-regex<span class="token operator">=</span>^<span class="token variable"><span class="token punctuation">((</span>Merge branch.<span class="token operator">*</span>of.<span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token punctuation">((</span>revert<span class="token operator">:</span> <span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">(</span>feat<span class="token operator">|</span>fix<span class="token operator">|</span>perf<span class="token operator">|</span>style<span class="token operator">|</span>refactor<span class="token operator">|</span>test<span class="token operator">|</span>ci<span class="token operator">|</span>docs<span class="token operator">|</span>chore<span class="token punctuation">)</span><span class="token punctuation">(</span>\<span class="token punctuation">(</span>.<span class="token operator">+</span>\<span class="token punctuation">))</span></span>?: <span class="token punctuation">[</span>^A-Z<span class="token punctuation">]</span>.*<span class="token punctuation">[</span>^.<span class="token punctuation">]</span>$<span class="token punctuation">))</span>
--subject-maxlen<span class="token operator">=</span><span class="token number">72</span>
--body-regex<span class="token operator">=</span>^<span class="token punctuation">(</span><span class="token punctuation">[</span>^<span class="token punctuation">\</span>r<span class="token punctuation">\</span>n<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">0,72</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">\</span>r?<span class="token punctuation">\</span>n<span class="token operator">|</span>$<span class="token punctuation">))</span>*$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IAM 项目配置了 GitHub Actions，当有代码被 push 后，会触发 CI 流水线，流水线会执行make all目标。GitHub Actions CI 流程执行记录如下图：</p>
<p><img src="http://sm.nsddd.top/sm202302202032620.png" alt="image-20230220203225172"></p>
<p>如果 CI 不通过，就需要修改代码，直到 CI 流水线通过为止。</p>
<h3 id="github-action-配置" tabindex="-1"><a class="header-anchor" href="#github-action-配置" aria-hidden="true">#</a> Github Action 配置</h3>
<p><strong>这里，我们来看下 GitHub Actions 的配置：</strong></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> IamCI

<span class="token key atrule">on</span><span class="token punctuation">:</span> 
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branchs</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">'*'</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>opened<span class="token punctuation">,</span> reopened<span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Go
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>go@v2
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token key atrule">go-version</span><span class="token punctuation">:</span> <span class="token number">1.16</span>

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> all
      <span class="token key atrule">run</span><span class="token punctuation">:</span> make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，GitHub Actions 实际上执行了 3 步：拉取代码、设置 Go 编译环境、执行 make 命令（也就是执行 make all 目标）。</p>
<p>GitHub Actions 也执行了 make all 目标，和手动操作执行的 make all 目标保持一致，这样做是为了让线上的 CI 流程和本地的 CI 流程完全保持一致。这样，当我们在本地执行 make 命令通过后，在线上也会通过。保持一个一致的执行流程和执行结果很重要。否则，本地执行 make 通过，但是线上却不通过，岂不很让人头疼？</p>
<p><strong>第二步，提交 pull request。</strong></p>
<p>登陆 GitHub，基于 feature/helloworld 创建 pull request，并指定 Reviewers 进行 code review。具体操作如下图：</p>
<p><img src="http://sm.nsddd.top/sm202302202041557.png" alt="image-20230220204115977"></p>
<p>当有新的 pull request 被创建后，也会触发 CI 流水线。</p>
<p><strong>第三步，创建完 pull request 后，就可以通知 reviewers 来 review 代码，GitHub 也会发站内信。</strong></p>
<p><strong>第四步，Reviewers 对代码进行 review。</strong></p>
<blockquote>
<p>Reviewer 通过 <code v-pre>review github diff</code> 后的内容，并结合 CI 流程是否通过添加评论，并选择 Comment（仅评论）、Approve（通过）、Request Changes（不通过，需要修改），如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302202043133.png" alt="image-20230220204310055"></p>
</blockquote>
<p>如果 review 不通过，feature 开发者可以直接在 <code v-pre>feature/helloworld</code> 分支修正代码，并 push 到远端的 <code v-pre>feature/helloworld</code> 分支，然后通知 reviewers 再次 review。因为有 push 事件发生，所以会触发 GitHub Actions CI 流水线。</p>
<p><strong>第五步，code review 通过后，maintainer 就可以将新的代码合并到 develop 分支。</strong></p>
<p>使用 Create a merge commit 的方式，将 pull request 合并到 develop 分支，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302202044187.png" alt="image-20230220204403904"></p>
<p><code v-pre>Create a merge commit</code> 的实际操作是 <code v-pre>git merge --no-ff</code>，<code v-pre>feature/helloworld</code> 分支上所有的 commit 都会加到 develop 分支上，并且会生成一个 merge commit。使用这种方式，可以清晰地知道是谁做了哪些提交，回溯历史的时候也会更加方便。</p>
<p><strong>第六步，合并到 develop 分支后，触发 CI 流程。</strong></p>
<p>到这里，开发阶段的操作就全部完成了，整体流程如下：</p>
<p><img src="http://sm.nsddd.top/sm202302202045792.png" alt="image-20230220204511699"></p>
<p>合并到 develop 分支之后，我们就可以进入开发阶段的下一阶段，也就是测试阶段了。</p>
<h2 id="测试阶段" tabindex="-1"><a class="header-anchor" href="#测试阶段" aria-hidden="true">#</a> 测试阶段</h2>
<p>在测试阶段，开发人员主要负责提供测试包和修复测试期间发现的 bug，这个过程中也可能会发现一些新的需求或变动点，所以需要合理评估这些新的需求或变动点是否要放在当前迭代修改。</p>
<p>测试阶段的操作流程如下。</p>
<p><strong>第一步，基于 develop 分支，创建 release 分支，测试代码。</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> release/1.0.0 develop
$ <span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二步，提交测试。</strong></p>
<p>将 <code v-pre>release/1.0.0</code> 分支的代码提交给测试同学进行测试。这里假设一个测试失败的场景：我们要求打印“hello world”，但打印的是“Hello World”，需要修复。那具体应该怎么操作呢？</p>
<p>你可以直接在 <code v-pre>release/1.0.0</code> 分支修改代码，修改完成后，本地构建并提交代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span>
$ <span class="token function">git</span> <span class="token function">add</span> internal/iamctl/cmd/helloworld/
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"fix: fix helloworld print bug"</span>
$ <span class="token function">git</span> push origin release/1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>push 到 release/1.0.0</code> 后，GitHub Actions 会执行 CI 流水线。如果流水线执行成功，就将代码提供给测试；如果测试不成功，再重新修改，直到流水线执行成功。</p>
<p>测试同学会对 release/1.0.0 分支的代码进行充分的测试，例如功能测试、性能测试、集成测试、系统测试等。</p>
<p><strong>第三步，测试通过后，将功能分支合并到 master 分支和 develop 分支。</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout develop
$ <span class="token function">git</span> merge --no-ff release/1.0.0
$ <span class="token function">git</span> checkout master
$ <span class="token function">git</span> merge --no-ff release/1.0.0
$ <span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.0.0 <span class="token parameter variable">-m</span> <span class="token string">"add print hello world"</span> <span class="token comment"># master分支打tag</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，测试阶段的操作就基本完成了。测试阶段的产物是 master/develop 分支的代码。</p>
<p><strong>第四步，删除 feature/helloworld 分支，也可以选择性删除 release/1.0.0 分支。</strong></p>
<p>我们的代码都合并入 master/develop 分支后，feature 开发者可以选择是否要保留 feature。不过，如果没有特别的原因，我建议删掉，因为 feature 分支太多的话，不仅看起来很乱，还会影响性能，删除操作如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> feature/helloworld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="iam-项目的-makefile-项目管理技巧" tabindex="-1"><a class="header-anchor" href="#iam-项目的-makefile-项目管理技巧" aria-hidden="true">#</a> IAM 项目的 Makefile 项目管理技巧</h2>
<p>在上面的内容中，我们以研发流程为主线，亲身体验了 IAM 项目的 Makefile 项目管理功能。这些是你最应该掌握的核心功能，但 IAM 项目的 Makefile 还有很多功能和设计技巧。接下来，我会给你分享一些很有价值的 Makefile 项目管理技巧。</p>
<h3 id="help-自动解析" tabindex="-1"><a class="header-anchor" href="#help-自动解析" aria-hidden="true">#</a> help 自动解析</h3>
<p>因为随着项目的扩展，Makefile 大概率会不断加入新的管理功能，这些管理功能也需要加入到 make help 输出中。但如果每添加一个目标，都要修改 make help 命令，就比较麻烦，还容易出错。所以这里，我通过自动解析的方式，来生成make help输出：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## help: Show this help info.    </span>
.PHONY: <span class="token builtin class-name">help</span>           
help: Makefile               
  @echo <span class="token parameter variable">-e</span> <span class="token string">"<span class="token entity" title="\n">\n</span>Usage: make &lt;TARGETS> &lt;OPTIONS> ...<span class="token entity" title="\n">\n</span><span class="token entity" title="\n">\n</span>Targets:"</span>                         
  @sed <span class="token parameter variable">-n</span> <span class="token string">'s/^##//p'</span> $<span class="token operator">&lt;</span> <span class="token operator">|</span> <span class="token function">column</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-s</span> <span class="token string">':'</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">'s/^/ /'</span>    
  @echo <span class="token string">"<span class="token variable">$$</span>USAGE_OPTIONS"</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目标 help 的命令中，通过 <code v-pre>sed -n 's/^##//p' $&lt; | column -t -s ':' | sed -e 's/^/ /'</code> 命令，自动解析 <code v-pre>Makefile 中 ##</code> 开头的注释行，从而自动生成 make help 输出。</p>
<h3 id="options-中指定变量值" tabindex="-1"><a class="header-anchor" href="#options-中指定变量值" aria-hidden="true">#</a> Options 中指定变量值</h3>
<p>通过以下赋值方式，变量可以在 <code v-pre>Makefile options</code> 中被指定：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ifeq <span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span>origin COVERAGE<span class="token variable">)</span></span>,undefined<span class="token punctuation">)</span>    
COVERAGE :<span class="token operator">=</span> <span class="token number">60</span>    
endif   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，如果我们执行<code v-pre>make</code> ，则 <code v-pre>COVERAGE</code> 设置为默认值 <code v-pre>60</code>；如果我们执行<code v-pre>make COVERAGE=90</code> ，则 COVERAGE 值为 90。通过这种方式，我们可以更灵活地控制 Makefile 的行为。</p>
<h3 id="自动生成-changelog" tabindex="-1"><a class="header-anchor" href="#自动生成-changelog" aria-hidden="true">#</a> 自动生成 CHANGELOG</h3>
<p>一个项目最好有 CHANGELOG 用来展示每个版本之间的变更内容，作为 Release Note 的一部分。但是，如果每次都要手动编写 CHANGELOG，会很麻烦，也不容易坚持，所以这里我们可以借助<a href="https://github.com/git-chglog/git-chglog" target="_blank" rel="noopener noreferrer">git-chglog<ExternalLinkIcon/></a>工具来自动生成。</p>
<p>IAM 项目的 git-chglog 工具的配置文件放在<code v-pre>.chglog</code>目录下，在学习 git-chglog 工具时，你可以参考下。</p>
<h3 id="自动生成版本号" tabindex="-1"><a class="header-anchor" href="#自动生成版本号" aria-hidden="true">#</a> 自动生成版本号</h3>
<p>一个项目也需要有一个版本号，当前用得比较多的是语义化版本号规范。但如果靠开发者手动打版本号，工作效率低不说，经常还会出现漏打、打的版本号不规范等问题。所以最好的办法是，版本号也通过工具自动生成。在 IAM 项目中，采用了<a href="https://github.com/arnaud-deprez/gsemver" target="_blank" rel="noopener noreferrer">gsemver<ExternalLinkIcon/></a>工具来自动生成版本号。</p>
<p>整个 IAM 项目的版本号，都是通过<a href="scripts/ensure_tag.sh">scripts/ensure_tag.sh</a>脚本来生成的：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>version<span class="token operator">=</span>v`gsemver bump`
if [ -z <span class="token string">"`git tag -l $version`"</span> ]<span class="token punctuation">;</span>then
  git tag -a -m <span class="token string">"release version $version"</span> <span class="token variable">$version</span>
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>scripts/ensure_tag.sh</code> 脚本中，通过 <code v-pre>gsemver bump</code> 命令来自动化生成语义化的版本号，并执行 <code v-pre>git tag -a</code> 给仓库打上版本号标签，gsemver 命令会根据 Commit Message 自动生成版本号。</p>
<p>之后，Makefile 和 Shell 脚本用到的所有版本号均统一使用<a href="scripts/make-rules/common.mk">scripts/make-rules/common.mk</a>文件中的 VERSION 变量：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>VERSION :<span class="token operator">=</span> <span class="token variable"><span class="token variable">$(</span>shell <span class="token function">git</span> describe <span class="token parameter variable">--tags</span> <span class="token parameter variable">--always</span> <span class="token parameter variable">--match</span><span class="token operator">=</span><span class="token string">'v*'</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述的 Shell 命令通过 git describe 来获取离当前提交最近的 tag（版本号）。</p>
<p>在执行 git describe 时，如果符合条件的 tag 指向最新提交，则只显示 tag 的名字，否则会有相关的后缀，来描述该 tag 之后有多少次提交，以及最新的提交 commit id。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> describe <span class="token parameter variable">--tags</span> <span class="token parameter variable">--always</span> <span class="token parameter variable">--match</span><span class="token operator">=</span><span class="token string">'v*'</span>
v1.0.0-3-g1909e47
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这里解释下版本号中各字符的含义</strong>：</p>
<ul>
<li>3：表示自打 tag v1.0.0 以来有 3 次提交。</li>
<li><code v-pre>g1909e47：g</code> 为 git 的缩写，在多种管理工具并存的环境中很有用处。</li>
<li><code v-pre>1909e47：7</code> 位字符表示为最新提交的 commit id 前 7 位。</li>
</ul>
<p><strong>最后解释下参数：</strong></p>
<ul>
<li><code v-pre>–tags</code>，使用所有的标签，而不是只使用带注释的标签（annotated tag）。</li>
<li><code v-pre>git tag</code> 生成一个 unannotated tag，git tag -a <code v-pre>&lt;tagname&gt;</code> -m <code v-pre>&lt;massage&gt;</code>'' 生成一个 annotated tag。</li>
<li><code v-pre>–always</code>，如果仓库没有可用的标签，那么使用 commit 缩写来替代标签。</li>
<li><code v-pre>–match</code>，只考虑与给定模式相匹配的标签。</li>
</ul>
<h3 id="保持行为一致" tabindex="-1"><a class="header-anchor" href="#保持行为一致" aria-hidden="true">#</a> 保持行为一致</h3>
<p>上面我们介绍了一些管理功能，例如检查 Commit Message 是否符合规范、自动生成 CHANGELOG、自动生成版本号。这些可以通过 Makefile 来操作，我们也可以手动执行。例如，通过以下命令，检查 IAM 的所有 Commit 是否符合 Angular Commit Message 规范：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go-gitlint
b62db1f: subject does not match regex <span class="token punctuation">[</span>^<span class="token punctuation">(</span>revert: <span class="token punctuation">)</span>?<span class="token punctuation">(</span>feat<span class="token operator">|</span>fix<span class="token operator">|</span>perf<span class="token operator">|</span>style<span class="token operator">|</span>refactor<span class="token operator">|</span><span class="token builtin class-name">test</span><span class="token operator">|</span>ci<span class="token operator">|</span>docs<span class="token operator">|</span>chore<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">\</span><span class="token punctuation">(</span>.+<span class="token punctuation">\</span><span class="token punctuation">))</span>?: <span class="token punctuation">[</span>^A-Z<span class="token punctuation">]</span>.*<span class="token punctuation">[</span>^.<span class="token punctuation">]</span>$<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>也可以通过以下命令，手动来生成 CHANGELOG：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git-chglog v1.0.0 CHANGELOG/CHANGELOG-1.0.0.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>还可以执行 gsemver 来生成版本号：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ gsemver bump
1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要强调的是，我们要保证不管使用手动操作，还是通过 Makefile 操作，都要确保 git commit message 规范检查结果、生成的 CHANGELOG、生成的版本号是一致的。这需要我们采用同一种操作方式。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在整个研发流程中，需要开发人员深度参与的阶段有两个，分别是开发阶段和测试阶段。在开发阶段，开发者完成代码开发之后，通常需要执行生成代码、版权检查、代码格式化、静态代码检查、单元测试、构建等操作。我们可以将这些操作集成在 Makefile 中，来提高效率，并借此统一操作。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '7.md' style='float:left'>⬆️上一节🔗  </a><a href = '9.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


