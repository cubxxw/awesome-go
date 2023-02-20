<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第7节-高质量的makefile" tabindex="-1"><a class="header-anchor" href="#第7节-高质量的makefile" aria-hidden="true">#</a> 第7节 高质量的Makefile</h1>
<br>
<div><a href = '6.md' style='float:left'>⬆️上一节🔗  </a><a href = '8.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#低质量的makefile">低质量的makefile</router-link></li><li><router-link to="#makefile-如何工作">makefile 如何工作</router-link><ul><li><router-link to="#build-and-run">Build and Run</router-link></li><li><router-link to="#cleaning-and-drying">Cleaning and DRYing</router-link></li><li><router-link to="#phony-targets">PHONY targets</router-link></li><li><router-link to="#recursive-make-targets">Recursive Make targets</router-link></li><li><router-link to="#targets-for-docker-commands">Targets for Docker commands</router-link></li><li><router-link to="#符号">@ 符号</router-link></li><li><router-link to="#文件搜索-vpath">文件搜索 VPATH</router-link></li><li><router-link to="#help-target">Help target</router-link></li><li><router-link to="#conclusion-结论">Conclusion 结论</router-link></li></ul></li><li><router-link to="#熟练makefile语法">熟练makefile语法</router-link></li><li><router-link to="#设计makefile结构">设计Makefile结构</router-link></li><li><router-link to="#掌握-makefile-编写技巧">掌握 Makefile 编写技巧</router-link><ul><li><router-link to="#技巧-1-善用通配符和自动变量">技巧 1：善用通配符和自动变量</router-link></li><li><router-link to="#技巧-2-善用函数">技巧 2：善用函数</router-link></li><li><router-link to="#技巧-3-依赖需要用到的工具">技巧 3：依赖需要用到的工具</router-link></li><li><router-link to="#技巧-4-把常用功能放在-makefile-中-不常用的放在分类-makefile-中">技巧 4：把常用功能放在 /Makefile 中，不常用的放在分类 Makefile 中</router-link></li><li><router-link to="#技巧-5-编写可扩展的-makefile">技巧 5：编写可扩展的 Makefile</router-link></li><li><router-link to="#技巧-6-将所有输出存放在一个目录下-方便清理和查找">技巧 6：将所有输出存放在一个目录下，方便清理和查找</router-link></li><li><router-link to="#技巧-7-使用带层级的命名方式">技巧 7：使用带层级的命名方式</router-link></li><li><router-link to="#技巧-8-做好目标拆分">技巧 8：做好目标拆分</router-link></li><li><router-link to="#技巧-9-设置-options">技巧 9：设置 OPTIONS</router-link></li><li><router-link to="#技巧-10-定义环境变量">技巧 10：定义环境变量</router-link></li><li><router-link to="#技巧-11-自己调用自己">技巧 11：自己调用自己</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="低质量的makefile" tabindex="-1"><a class="header-anchor" href="#低质量的makefile" aria-hidden="true">#</a> 低质量的makefile</h2>
<p>低质量的 Makefile 文件是什么样的;</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>
<span class="token target symbol">build</span><span class="token punctuation">:</span> clean vet
  <span class="token operator">@</span>mkdir -p ./Role
  <span class="token operator">@</span><span class="token keyword">export</span> GOOS<span class="token operator">=</span>linux &amp;&amp; go build -v .

<span class="token target symbol">vet</span><span class="token punctuation">:</span>
  go vet ./...

<span class="token target symbol">fmt</span><span class="token punctuation">:</span>
  go fmt ./...

<span class="token target symbol">clean</span><span class="token punctuation">:</span>
  rm -rf dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个 Makefile 存在不少问题。例如：功能简单，只能完成最基本的编译、格式化等操作，像构建镜像、自动生成代码等一些高阶的功能都没有；扩展性差，没法编译出可在 Mac 下运行的二进制文件；没有 Help 功能，使用难度高；单 Makefile 文件，结构单一，不适合添加一些复杂的管理功能。</p>
<p>所以，我们不光要编写 Makefile，还要编写高质量的 Makefile。那么如何编写一个高质量的 Makefile 呢？我觉得，可以通过以下 4 个方法来实现：</p>
<ul>
<li>打好基础，也就是熟练掌握 <code v-pre>Makefile</code> 的语法。</li>
<li>做好准备工作，也就是提前规划 <code v-pre>Makefile</code> 要实现的功能。</li>
<li>进行规划，设计一个合理的 <code v-pre>Makefile</code> 结构。</li>
<li>掌握方法，用好 <code v-pre>Makefile</code> 的编写技巧。</li>
</ul>
<h2 id="makefile-如何工作" tabindex="-1"><a class="header-anchor" href="#makefile-如何工作" aria-hidden="true">#</a> makefile 如何工作</h2>
<p><img src="http://sm.nsddd.top/sm202302192223604.png" alt="image-20230219222355491"></p>
<p><strong>makefile规则：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>target <span class="token punctuation">..</span>. <span class="token builtin class-name">:</span> prerequisites <span class="token punctuation">..</span>.
    <span class="token builtin class-name">command</span>
    <span class="token punctuation">..</span>.
    <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>target</strong>
<ul>
<li>可以是一个object file（目标文件），也可以是一个执行文件，还可以是一个标签（label）。对于标签这种特性，在后续的“伪目标”章节中会有叙述。</li>
</ul>
</li>
<li><strong>prereqisites</strong>
<ul>
<li>生成该target所依赖的文件和/或target</li>
</ul>
</li>
<li><strong>command</strong>
<ul>
<li>该target要执行的命令（任意的shell命令）</li>
</ul>
</li>
</ul>
<blockquote>
<p>prerequisites中如果有一个以上的文件比target文件要新的话，command所定义的命令就会被执行。</p>
</blockquote>
<h3 id="build-and-run" tabindex="-1"><a class="header-anchor" href="#build-and-run" aria-hidden="true">#</a> Build and Run</h3>
<p><strong>首先两个特别频繁的指令加进去：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>build: 
    go build <span class="token parameter variable">-o</span> stringifier main.go

run:
    go run <span class="token parameter variable">-race</span> main.gobuild: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我在运行命令中添加了<code v-pre>-race</code>标志，方便它在运行时在Go代码中检测到<code v-pre>race</code>情况。</p>
<h3 id="cleaning-and-drying" tabindex="-1"><a class="header-anchor" href="#cleaning-and-drying" aria-hidden="true">#</a> Cleaning and DRYing</h3>
<p>构建二进制文件并运行应用程序后，一切正常, 确保我们在执行其他任何操作之前先清理二进制文件。我们更新<code v-pre>Makefile</code>应该看起来像这样：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>clean<span class="token punctuation">:</span>
	<span class="token keyword">go</span> clean<span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我们有两点可以改进</strong>:</p>
<ol>
<li>我们明确地重用了我们的应用程序名, 很自然我们的应用程序名称将在整个<code v-pre>Makefile</code>中的许多地方使用。</li>
<li>每次构建应用之前，我们需要先执行<code v-pre>clean</code>的规则。</li>
</ol>
<p><strong>改进后的<code v-pre>Makefile</code></strong></p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>APP<span class="token operator">=</span>stringifier

<span class="token target symbol">build</span><span class="token punctuation">:</span> clean
	go build -o <span class="token variable">$</span><span class="token punctuation">{</span>APP<span class="token punctuation">}</span> main.go

<span class="token target symbol">run</span><span class="token punctuation">:</span>
	go run -race main.go

<span class="token target symbol">clean</span><span class="token punctuation">:</span>
	go clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更新</strong>: 这个例子之前使用的<code v-pre>rm -r ${APP}</code>，现在使用<code v-pre>go clean</code>。</p>
<p>在顶部定义<code v-pre>Makefile</code>变量，当您调用<code v-pre>make</code>命令时make将自动引用它们，这样<code v-pre>Makefile</code>看起来就更整洁、规范了。</p>
<h3 id="phony-targets" tabindex="-1"><a class="header-anchor" href="#phony-targets" aria-hidden="true">#</a> PHONY targets</h3>
<p>在 Makefile 中，<code v-pre>.PHONY</code> 是一个特殊的目标（target），它用于定义那些不表示实际文件的伪目标（phony target）。</p>
<p>当 Makefile 执行时，它会检查定义的目标是否已经存在或是否需要更新。对于伪目标，由于它们不表示任何实际文件，因此 Makefile 无法检查它们是否已经存在或是否需要更新。为了避免误判，<strong>可以使用 <code v-pre>.PHONY</code> 来明确告诉 Makefile 哪些目标是伪目标，以便在执行时跳过对这些目标的检查。</strong></p>
<p>例如，假设 Makefile 中定义了一个 clean 目标用于删除生成的文件，但是 clean 并不表示任何实际的文件，只是一个伪目标。那么，为了确保 Makefile 在执行时不会将 clean 当成一个文件来检查，可以在 Makefile 中添加如下声明：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> clean

<span class="token target symbol">clean</span><span class="token punctuation">:</span>
    rm -f *.o myprogram
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这样，当执行 &quot;make clean&quot; 命令时，Makefile 会跳过对 clean 目标的文件检查，直接执行清理命令。同时，如果我们在 Makefile 中定义了一个与 clean 相同名字的文件，Makefile 也不会将其与 clean 目标混淆。因此，使用 <code v-pre>.PHONY</code> 声明伪目标可以提高 Makefile 的可读性和可靠性。</p>
</blockquote>
<p><strong>默认情况下</strong>，如果一个前置条件或是目录文件已更改，<code v-pre>make</code>将执行规则。但是由于我们不依赖于<code v-pre>make</code>来检测文件更改的能力，因此我们会遇到潜在的麻烦。</p>
<p>假设我们的项目目录中有一个名为 <code v-pre>build</code> 的文件, 在这个场景下，当你执行<code v-pre>make build</code>, make一定会检查文件build的更改，由于没有前置条件，因此将始终将<code v-pre>build</code>文件视为最新的，并且不会执行其规则定义的操作。</p>
<p>为了避免这个问题，你需要先知道<code v-pre>.PHONY</code> 特殊目录(target)是什么意思：<strong>特殊目标<code v-pre>.PHONY</code>的先决条件被视为phony目标（targets)。 当需要运行时，make会无条件运行其规则，而不管该名称的文件是否存在或其最后修改时间是多少。</strong></p>
<p>所以，你可以通过将目标（target）指定为特殊目标<code v-pre>.PHONY</code>的先决条件，将目标指定为<code v-pre>.PHONY</code>。</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>APP<span class="token operator">=</span>stringifier

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build
<span class="token target symbol">build</span><span class="token punctuation">:</span> clean
	go build -o <span class="token variable">$</span><span class="token punctuation">{</span>APP<span class="token punctuation">}</span> main.go

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> run
<span class="token target symbol">run</span><span class="token punctuation">:</span>
	go run -race main.go

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> clean
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
	go clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在你已将上述所有的<code v-pre>targets</code>指定为<code v-pre>phony</code>, 每次你调用任何<code v-pre>phony</code>目标（target) 时，make将会执行相应的规则。你还可以一次将所有要指定为<code v-pre>phony</code>的目标指定为:</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build clean run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是对于非常大的Makefile，不建议这样做因为这可能导致歧义和无法读取。因此，首选方法是在规则定义之前显式设置<code v-pre>phony</code>目标（target）。</p>
<h3 id="recursive-make-targets" tabindex="-1"><a class="header-anchor" href="#recursive-make-targets" aria-hidden="true">#</a> Recursive Make targets</h3>
<p>当 Makefile 包含多个目标时，我们可以在 Makefile 中使用递归 Make 来构建这些目标。递归 Make 指的是在 Makefile 中调用另一个 Makefile 来构建其中的目标。</p>
<p>在递归 Make 中，通常有一个顶层 Makefile，该 Makefile 调用其他 Makefile 来构建子目录中的目标。这样的 Makefile 被称为 &quot;递归 Makefile&quot;，而由这个 Makefile 调用的 Makefile 被称为 &quot;子 Makefile&quot;。</p>
<p>在递归 Make 中，每个子 Makefile 负责构建它所在的目录中的目标，然后将构建的结果返回给父 Makefile。递归 Make 的一个常见的问题是，当在子目录中调用 Make 命令时，可能会破坏父目录中的变量设置和规则，因此需要小心地设置变量和规则，以避免不必要的冲突。</p>
<p>递归 Make 的一种常见用法是使用一个称为“递归变量”的特殊变量。递归变量的值可以包含调用另一个 Makefile 的命令，这个命令会返回一个值，可以被递归变量使用。递归变量在递归 Make 中非常有用，因为它们可以帮助子 Makefile 获得父 Makefile 中的变量值。</p>
<p>例如，我们可以在项目的根目录下创建一个名为 &quot;Makefile&quot; 的文件，其内容如下：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>codeSUBDIRS <span class="token operator">=</span> foo bar baz

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> all <span class="token variable">$</span><span class="token punctuation">(</span>SUBDIRS<span class="token punctuation">)</span>

<span class="token target symbol">all</span><span class="token punctuation">:</span> <span class="token variable">$</span><span class="token punctuation">(</span>SUBDIRS<span class="token punctuation">)</span>

<span class="token target symbol"><span class="token variable">$</span>(SUBDIRS)</span><span class="token punctuation">:</span>
    <span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> -C <span class="token variable">$@</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的 Makefile 中，&quot;SUBDIRS&quot; 变量定义了项目的子目录名称。&quot;all&quot; 是一个伪目标，它将调用每个子目录中的 Makefile 来构建所有目标。</p>
<p>$(SUBDIRS) 是一个自动变量，它会展开为 &quot;foo bar baz&quot;。因此，当我们运行 &quot;make all&quot; 命令时，它将首先调用 &quot;make foo&quot;，然后在 &quot;foo&quot; 目录中运行 &quot;make&quot; 命令来构建 &quot;foo&quot; 目录中的目标。接着它会依次调用 &quot;make bar&quot; 和 &quot;make baz&quot; 命令，以此类推。</p>
<p>在子目录的 Makefile 中，我们可以使用和普通 Makefile 中一样的规则和变量定义来构建子目录中的目标。这种方式可以帮助我们轻松地管理复杂的项目，避免代码重复，并提高 Makefile 的可重用性。</p>
<p>现在让我们假设我们在项目中使用的根目录中还有另一个模块<code v-pre>tokenizer</code>。现在我们的目录结构是这样的：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>~/programming/stringifier
<span class="token builtin class-name">.</span>
├── main.go
├── Makefile
└── tokenizer/
      ├── main.go
      └── Makefile~/programming/stringifier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很自然，某些时候我们也想<code v-pre>build</code>和<code v-pre>test</code>我们的<code v-pre>tokenizer</code>模块。由于它是一个独立的模块也可能是一个独立的项目，在它的目录有如下内容的一个<code v-pre>Makefile</code>是很有必要的：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token comment"># ~/programming/stringifier/tokenizer/Makefile</span>

APP<span class="token operator">=</span>tokenizer

<span class="token target symbol">build</span><span class="token punctuation">:</span>
	go build -o <span class="token variable">$</span><span class="token punctuation">{</span>APP<span class="token punctuation">}</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在只要您在<code v-pre>stringifier</code>项目的根目录中并且想要构建<code v-pre>tokenizer</code>应用程序，你不会想使用诸如<code v-pre>cd tokenizer &amp;&amp; make build &amp;&amp; cd - </code>这样的易受攻击的命令行技巧，而具体的<code v-pre>Makefiles</code>的规则写在子目录中的方式。幸运的是，<code v-pre>make</code>可以帮助你解决这个问题。你可以使用<code v-pre>-C</code>标志和特殊的<code v-pre>${NAME}</code>变量在其他目录中调用<code v-pre>make targets</code>。下面是<code v-pre>stringifies</code>项目最初的Makefile:</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token comment"># ~/programming/stringifier/Makefile</span>

APP<span class="token operator">=</span>stringifier


<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build
<span class="token target symbol">build</span><span class="token punctuation">:</span> clean
	go build -o <span class="token variable">$</span><span class="token punctuation">{</span>APP<span class="token punctuation">}</span> main.go

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> run
<span class="token target symbol">run</span><span class="token punctuation">:</span>
	go run -race main.go

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> clean
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
	go clean

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build-tokenizer
<span class="token target symbol">build-tokenizer</span><span class="token punctuation">:</span>
	<span class="token variable">$</span><span class="token punctuation">{</span>MAKE<span class="token punctuation">}</span> -C tokenizer build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在只要你运行<code v-pre>make build-tokenizer</code>，<code v-pre>make</code>都将为您处理目录切换，并以更加可读和健壮的方式为您调用正确目录中的正确目标</p>
<p><strong><code v-pre>-c</code> 标志和特殊的 <code v-pre>${NAME}</code>:</strong></p>
<ol>
<li>
<p><code v-pre>-C</code> 标志：指定 Makefile 文件的目录，让 make 命令在指定的目录下执行 Makefile 文件。例如：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token target symbol">all</span><span class="token punctuation">:</span>
     cd subdir &amp;&amp; <span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 Makefile 中的 <code v-pre>$(MAKE)</code> 命令会在当前目录下的 <code v-pre>subdir</code> 目录中执行 Makefile 文件。可以使用 <code v-pre>-C</code> 标志来达到同样的效果：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token target symbol">all</span><span class="token punctuation">:</span>
     <span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> -C subdir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>${NAME}</code> 变量：在 Makefile 中使用 <code v-pre>${NAME}</code> 变量可以引用环境变量中的值，例如：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token target symbol">all</span><span class="token punctuation">:</span>
     echo <span class="token string">"PATH is ${PATH}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 Makefile 中的 <code v-pre>${PATH}</code> 变量会展开为当前系统环境变量中的 <code v-pre>PATH</code> 值。</p>
</li>
</ol>
<p>以下是一个用 Go 语言编写的 Makefile 示例，其中使用了 <code v-pre>-C</code> 标志和 <code v-pre>${NAME}</code> 变量：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token comment"># Makefile</span>

APP_NAME <span class="token operator">:=</span> my-app

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build
<span class="token target symbol">build</span><span class="token punctuation">:</span>
    cd cmd/my-app &amp;&amp; go build -o ../../bin/<span class="token variable">$</span><span class="token punctuation">(</span>APP_NAME<span class="token punctuation">)</span>

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> test
<span class="token target symbol">test</span><span class="token punctuation">:</span>
    go test ./...

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> clean
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
    rm -rf bin/*

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build-docker
<span class="token target symbol">build-docker</span><span class="token punctuation">:</span> build
    docker build -t <span class="token variable">$</span><span class="token punctuation">(</span>APP_NAME<span class="token punctuation">)</span> .

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> run-docker
<span class="token target symbol">run-docker</span><span class="token punctuation">:</span> build-docker
<span class="token target symbol">    docker run -p 8080</span><span class="token punctuation">:</span>8080 <span class="token variable">$</span><span class="token punctuation">(</span>APP_NAME<span class="token punctuation">)</span>

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> deploy
<span class="token target symbol">deploy</span><span class="token punctuation">:</span> build-docker
    ssh <span class="token variable">$</span><span class="token punctuation">{</span>SSH_USER<span class="token punctuation">}</span><span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">{</span>SSH_HOST<span class="token punctuation">}</span> <span class="token string">"docker pull $(APP_NAME); docker stop $(APP_NAME) || true; docker rm $(APP_NAME) || true; docker run -p 8080:8080 -d --name $(APP_NAME) $(APP_NAME)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 Makefile 中，<code v-pre>build-docker</code>、<code v-pre>run-docker</code> 和 <code v-pre>deploy</code> 等目标中使用了 <code v-pre>${APP_NAME}</code> 变量来指定 Docker 镜像的名称，同时使用了 <code v-pre>-C</code> 标志来在子目录中执行命令，例如 <code v-pre>build</code> 目标中的 <code v-pre>cd cmd/my-app &amp;&amp; go build</code> 命令。</p>
<h3 id="targets-for-docker-commands" tabindex="-1"><a class="header-anchor" href="#targets-for-docker-commands" aria-hidden="true">#</a> Targets for Docker commands</h3>
<p>现在您希望对应用程序进行容器化，然后为方便起见编写make目标，这是完全可以理解的。</p>
<p>你为docker命令定义了如下规则：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> docker-build
<span class="token target symbol">docker-build</span><span class="token punctuation">:</span> build
	docker build -t stringifier .
<span class="token target symbol">	docker tag stringifier stringifier</span><span class="token punctuation">:</span>tag

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> docker-push
<span class="token target symbol">docker-push</span><span class="token punctuation">:</span> docker-build
<span class="token target symbol">	docker push gcr.io/stringifier/stringifier-staging/stringifier</span><span class="token punctuation">:</span>tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker命令基本满足需要，但是还有改善的空间，</p>
<ul>
<li>对于新手，你可以再次重用你的<code v-pre>${APP}</code>变量。</li>
<li>接下来，您想要更灵活并确保可以轻松控制将映像推送到哪里，无论是您的私人镜像仓库还是其他地方。</li>
<li>然后，您希望能够根据用户在命令行上的某些输入将镜像（image）分别推送到与预生产和生产环境有关的两个单独的镜像仓库中。</li>
<li>最后，像一个理智的开发人员一样，您想使用当前的git commit sha标记您的镜像（image）。 让我们基于这些问题重新修改下<code v-pre>Makefile</code>：</li>
</ul>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>APP<span class="token operator">?=</span>application
REGISTRY<span class="token operator">?=</span>gcr.io/images
COMMIT_SHA<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">shell</span> git rev-parse --short HEAD<span class="token punctuation">)</span>

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> docker-build
<span class="token target symbol">docker-build</span><span class="token punctuation">:</span> build
	docker build -t <span class="token variable">$</span><span class="token punctuation">{</span>APP<span class="token punctuation">}</span> .
<span class="token target symbol">	docker tag <span class="token variable">$</span>{APP} <span class="token variable">$</span>{APP}</span><span class="token punctuation">:</span><span class="token variable">$</span><span class="token punctuation">{</span>COMMIT_SHA<span class="token punctuation">}</span>

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> docker-push
<span class="token target symbol">docker-push</span><span class="token punctuation">:</span> check-environment docker-build
<span class="token target symbol">	docker push <span class="token variable">$</span>{REGISTRY}/<span class="token variable">$</span>{ENV}/<span class="token variable">$</span>{APP}</span><span class="token punctuation">:</span><span class="token variable">$</span><span class="token punctuation">{</span>COMMIT_SHA<span class="token punctuation">}</span>

<span class="token target symbol">check-environment</span><span class="token punctuation">:</span>
<span class="token keyword">ifndef</span> ENV
    <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">error</span> ENV not set, allowed values - `staging` or `production`<span class="token punctuation">)</span>
<span class="token keyword">endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，让我们回顾下上面的更改：</p>
<ul>
<li>你开始为应用程序名称，镜像名称,提交sha使用变量。</li>
<li>您使用特殊的shell函数生成了commit sha。 在这种情况下，您运行了git命令，该命令返回了简短的提交sha，并将其分配给变量<code v-pre>${COMMIT_SHA}</code>，以便稍后在Makefile中使用。</li>
<li>您添加了一个新的规则<code v-pre>check-environment</code>，该环境使用make条件检查在调用make时是否指定了<code v-pre>ENV</code>变量，这有助于区分预生产及生产环境。</li>
</ul>
<p><code v-pre>check-environment</code>的规则如下：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token target symbol">check-environment</span><span class="token punctuation">:</span>
<span class="token keyword">ifndef</span> ENV
    <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">error</span> ENV not set, allowed values - `staging` or `production`<span class="token punctuation">)</span>
<span class="token keyword">endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>ifndef</code>指令检查变量ENV是否为空值，如果存在，则使用另一个make的提供内置函数，如果出错了，将会在关键字之后抛出具体的错误消息。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> docker-push
Makefile:33: *** ENV not set, allowed values - <span class="token variable"><span class="token variable">`</span>staging<span class="token variable">`</span></span> or <span class="token variable"><span class="token variable">`</span>production<span class="token variable">`</span></span><span class="token builtin class-name">.</span>  Stop.

$ <span class="token assign-left variable">ENV</span><span class="token operator">=</span>staging <span class="token function">make</span> docker-push
Success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本质上，您要确保docker-push目标具有安全保障，该保障可检查调用目标的用户是否已为ENV变量指定值。</p>
<h3 id="符号" tabindex="-1"><a class="header-anchor" href="#符号" aria-hidden="true">#</a> @ 符号</h3>
<p>项目的 <code v-pre>makefile</code> 中很容易看到 @ 符号的存在，它的意义不同寻常：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token comment">## build: Build source code for host platform.</span>
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build
<span class="token target symbol">build</span><span class="token punctuation">:</span>
	<span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> go.build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Makefile中，@符号用于 <strong>抑制Make命令的输出</strong>。当在Makefile中使用@符号时，<strong>Make将不会打印出该行命令的输出结果，而是仅仅执行该命令。</strong></p>
<p>在Go语言项目中，我们通常使用Makefile来构建和管理项目。下面是一个简单的Go语言项目Makefile示例：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token comment"># 编译二进制文件</span>
<span class="token target symbol">build</span><span class="token punctuation">:</span>
    <span class="token operator">@</span>go build -o myapp main.go

<span class="token comment"># 运行程序</span>
<span class="token target symbol">run</span><span class="token punctuation">:</span>
    <span class="token operator">@</span>./myapp

<span class="token comment"># 清理</span>
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
    <span class="token operator">@</span>rm -f myapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，我们定义了三个Makefile命令：<code v-pre>build</code>，<code v-pre>run</code>和<code v-pre>clean</code>。在每个命令的前面，我们都使用了<code v-pre>@</code>符号来抑制命令的输出。这意味着，当我们在命令行中运行<code v-pre>make build</code>时，Make命令将会编译Go程序，但不会将编译器的输出打印到终端。</p>
<p>如果我们去掉<code v-pre>@</code>符号，那么当我们运行<code v-pre>make build</code>时，Make将会输出编译器的输出，类似于下面的结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>go build <span class="token parameter variable">-o</span> myapp main.go
<span class="token comment"># 输出编译器的输出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，使用<code v-pre>@</code>符号可以使Makefile输出更加干净，仅仅打印出我们关心的内容，而不会输出一堆不必要的信息。</p>
<h3 id="文件搜索-vpath" tabindex="-1"><a class="header-anchor" href="#文件搜索-vpath" aria-hidden="true">#</a> 文件搜索 VPATH</h3>
<p>在一些大的工程中，有大量的源文件，我们通常的做法是把这许多的源文件分类，并存放在不同的目录中。所以，当make需要去找寻文件的依赖关系时，你可以在文件前加上路径，但最好的方法是把一个路径告诉make，让make在自动去找。</p>
<p>Makefile文件中的特殊变量 <code v-pre>VPATH</code> 就是完成这个功能的，如果没有指明这个变量，make只会在当前的目录中去找寻依赖文件和目标文件。如果定义了这个变量，那么，make就会在当前目录找不到的情况下，到所指定的目录中去找寻文件了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>VPATH <span class="token operator">=</span> src:<span class="token punctuation">..</span>/headers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的定义指定两个目录，“src”和“<code v-pre>../headers</code>”，<code v-pre>make</code>会按照这个顺序进行搜索。目录由“冒号”分隔。（当然，当前目录永远是最高优先搜索的地方）</p>
<p>另一个设置文件搜索路径的方法是使用make的“vpath”关键字（注意，它是全小写的），这不是变量，这是一个make的关键字，这和上面提到的那个VPATH变量很类似，但是它更为灵活。它可以指定不同的文件在不同的搜索目录中。这是一个很灵活的功能。它的使用方法有三种：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vpath &lt;pattern> &lt;directories>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为符合模式<code v-pre>&lt;pattern&gt;</code>的文件指定搜索目录<code v-pre>&lt;directories&gt;</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vpath &lt;pattern>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清除符合模式<code v-pre>&lt;pattern&gt;</code>的文件的搜索目录。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vpath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清除所有已被设置好了的文件搜索目录。</p>
<h3 id="help-target" tabindex="-1"><a class="header-anchor" href="#help-target" aria-hidden="true">#</a> Help target</h3>
<p>一个新成员加入了该项目并想知道Makefile中所有规则的作用，为帮助它们您可以添加一个新目标(target)，该目标将打印所有目标名称以及它们作用的简短描述:</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build
<span class="token comment">## build: build the application</span>
<span class="token target symbol">build</span><span class="token punctuation">:</span> clean
    <span class="token operator">@</span>echo <span class="token string">"Building..."</span>
    <span class="token operator">@</span>go build -o <span class="token variable">$</span><span class="token punctuation">{</span>APP<span class="token punctuation">}</span> main.go

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> run
<span class="token comment">## run: runs go run main.go</span>
<span class="token target symbol">run</span><span class="token punctuation">:</span>
	go run -race main.go

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> clean
<span class="token comment">## clean: cleans the binary</span>
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
    <span class="token operator">@</span>echo <span class="token string">"Cleaning"</span>
    <span class="token operator">@</span>go clean

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> setup
<span class="token comment">## setup: setup go modules</span>
<span class="token target symbol">setup</span><span class="token punctuation">:</span>
	<span class="token operator">@</span>go mod init \
		&amp;&amp; go mod tidy \
		&amp;&amp; go mod vendor
	
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> help
<span class="token comment">## help: prints this help message</span>
<span class="token target symbol">help</span><span class="token punctuation">:</span>
	<span class="token operator">@</span>echo <span class="token string">"Usage: \n"</span>
	<span class="token operator">@</span>sed -n <span class="token string">'s/^##//p'</span> <span class="token variable">$</span><span class="token punctuation">{</span>MAKEFILE_LIST<span class="token punctuation">}</span> <span class="token operator">|</span> column -t -s <span class="token string">':'</span> <span class="token operator">|</span>  sed -e <span class="token string">'s/^/ /'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你先注意下最后一条规则，<code v-pre>help</code> 在这里，您只是使用一些sed魔术来解析和在命令行上打印。 但是要做到这一点，您必要在每条规则之前写了目标名称和简短描述作为注释。 注意另一个特殊变量<code v-pre>$ {MAKEFILE_LIST}</code>，它是您所引用的所有Makefile的列表，在本例中仅是Makefile。</p>
<p>您会将文件Makefile作为输入传递给sed命令，该命令将解析所有帮助注释并以表格格式将其打印到stdout，以便于阅读。 上一个代码段的<code v-pre>help</code>目标的输出如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> <span class="token builtin class-name">help</span>
Usage:
	build             Build the application
	clean             cleans the binary
	run               runs go run main.go
	docker-build      builds <span class="token function">docker</span> image
	docker-push       pushes the <span class="token function">docker</span> image
	setup             <span class="token builtin class-name">set</span> up modules
	<span class="token builtin class-name">help</span>              prints this <span class="token builtin class-name">help</span> message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些消息很有帮助，对于其他人甚至有时对自己都是一个不错的提示。</p>
<h3 id="conclusion-结论" tabindex="-1"><a class="header-anchor" href="#conclusion-结论" aria-hidden="true">#</a> Conclusion 结论</h3>
<p>Make是一个简单但可高度配置的工具。 在本文中，您遍历了make提供的许多配置和功能，从而为Go应用程序编写了有效而高效的Makefile。</p>
<p>下面是完整的Makefile，其中添加了一些琐碎的规则和变量：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>GO111MODULES<span class="token operator">=</span>on
APP<span class="token operator">?=</span>stringifier
REGISTRY<span class="token operator">?=</span>gcr.io/images
COMMIT_SHA<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">shell</span> git rev-parse --short HEAD<span class="token punctuation">)</span>



<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build
<span class="token comment">## build: build the application</span>
<span class="token target symbol">build</span><span class="token punctuation">:</span> clean
    <span class="token operator">@</span>echo <span class="token string">"Building..."</span>
    <span class="token operator">@</span>go build -o <span class="token variable">$</span><span class="token punctuation">{</span>APP<span class="token punctuation">}</span> main.go

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> run
<span class="token comment">## run: runs go run main.go</span>
<span class="token target symbol">run</span><span class="token punctuation">:</span>
	go run -race main.go

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> clean
<span class="token comment">## clean: cleans the binary</span>
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
    <span class="token operator">@</span>echo <span class="token string">"Cleaning"</span>
    <span class="token operator">@</span>go clean

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> test
<span class="token comment">## test: runs go test with default values</span>
<span class="token target symbol">test</span><span class="token punctuation">:</span>
	go test -v -count<span class="token operator">=</span>1 -race ./...


<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build-tokenizer
<span class="token comment">## build-tokenizer: build the tokenizer application</span>
<span class="token target symbol">build-tokenizer</span><span class="token punctuation">:</span>
	<span class="token variable">$</span><span class="token punctuation">{</span>MAKE<span class="token punctuation">}</span> -c tokenizer build

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> setup
<span class="token comment">## setup: setup go modules</span>
<span class="token target symbol">setup</span><span class="token punctuation">:</span>
	<span class="token operator">@</span>go mod init \
		&amp;&amp; go mod tidy \
		&amp;&amp; go mod vendor
	
<span class="token comment"># helper rule for deployment</span>
<span class="token target symbol">check-environment</span><span class="token punctuation">:</span>
<span class="token keyword">ifndef</span> ENV
    <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">error</span> ENV not set, allowed values - `staging` or `production`<span class="token punctuation">)</span>
<span class="token keyword">endif</span>

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> docker-build
<span class="token comment">## docker-build: builds the stringifier docker image to registry</span>
<span class="token target symbol">docker-build</span><span class="token punctuation">:</span> build
<span class="token target symbol">	docker build -t <span class="token variable">$</span>{APP}</span><span class="token punctuation">:</span><span class="token variable">$</span><span class="token punctuation">{</span>COMMIT_SHA<span class="token punctuation">}</span> .

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> docker-push
<span class="token comment">## docker-push: pushes the stringifier docker image to registry</span>
<span class="token target symbol">docker-push</span><span class="token punctuation">:</span> check-environment docker-build
<span class="token target symbol">	docker push <span class="token variable">$</span>{REGISTRY}/<span class="token variable">$</span>{ENV}/<span class="token variable">$</span>{APP}</span><span class="token punctuation">:</span><span class="token variable">$</span><span class="token punctuation">{</span>COMMIT_SHA<span class="token punctuation">}</span>

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> help
<span class="token comment">## help: Prints this help message</span>
<span class="token target symbol">help</span><span class="token punctuation">:</span>
	<span class="token operator">@</span>echo <span class="token string">"Usage: \n"</span>
	<span class="token operator">@</span>sed -n <span class="token string">'s/^##//p'</span> <span class="token variable">$</span><span class="token punctuation">{</span>MAKEFILE_LIST<span class="token punctuation">}</span> <span class="token operator">|</span> column -t -s <span class="token string">':'</span> <span class="token operator">|</span>  sed -e <span class="token string">'s/^/ /'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="熟练makefile语法" tabindex="-1"><a class="header-anchor" href="#熟练makefile语法" aria-hidden="true">#</a> 熟练makefile语法</h2>
<p><strong>IAM 项目的 Makefile 文件：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> <span class="token builtin class-name">help</span>

Usage: <span class="token function">make</span> <span class="token operator">&lt;</span>TARGETS<span class="token operator">></span> <span class="token operator">&lt;</span>OPTIONS<span class="token operator">></span> <span class="token punctuation">..</span>.

Targets:
  <span class="token comment"># 代码生成类命令</span>
  gen                Generate all necessary files, such as error code files.

  <span class="token comment"># 格式化类命令</span>
  <span class="token function">format</span>             Gofmt <span class="token punctuation">(</span>reformat<span class="token punctuation">)</span> package sources <span class="token punctuation">(</span>exclude vendor <span class="token function">dir</span> <span class="token keyword">if</span> existed<span class="token punctuation">)</span>.

  <span class="token comment"># 静态代码检查</span>
  lint               Check syntax and styling of go sources.

  <span class="token comment"># 测试类命令</span>
  <span class="token builtin class-name">test</span>               Run unit test.
  cover              Run unit <span class="token builtin class-name">test</span> and get <span class="token builtin class-name">test</span> coverage.

  <span class="token comment"># 构建类命令</span>
  build              Build <span class="token builtin class-name">source</span> code <span class="token keyword">for</span> <span class="token function">host</span> platform.
  build.multiarch    Build <span class="token builtin class-name">source</span> code <span class="token keyword">for</span> multiple platforms. See option PLATFORMS.

  <span class="token comment"># Docker镜像打包类命令</span>
  image              Build <span class="token function">docker</span> images <span class="token keyword">for</span> <span class="token function">host</span> arch.
  image.multiarch    Build <span class="token function">docker</span> images <span class="token keyword">for</span> multiple platforms. See option PLATFORMS.
  push               Build <span class="token function">docker</span> images <span class="token keyword">for</span> <span class="token function">host</span> arch and push images to registry.
  push.multiarch     Build <span class="token function">docker</span> images <span class="token keyword">for</span> multiple platforms and push images to registry.

  <span class="token comment"># 部署类命令</span>
  deploy             Deploy updated components to development env.

  <span class="token comment"># 清理类命令</span>
  clean              Remove all files that are created by building.

  <span class="token comment"># 其他命令，不同项目会有区别</span>
  release            Release iam
  verify-copyright   Verify the boilerplate headers <span class="token keyword">for</span> all files.
  ca                 Generate CA files <span class="token keyword">for</span> all iam components.
  <span class="token function">install</span>            Install iam system with all its components.
  swagger            Generate swagger document.
  tools              <span class="token function">install</span> dependent tools.

  <span class="token comment"># 帮助命令</span>
  <span class="token builtin class-name">help</span>               Show this <span class="token builtin class-name">help</span> info.

<span class="token comment"># 选项</span>
Options:
  DEBUG        Whether to generate debug symbols. Default is <span class="token number">0</span>.
  BINS         The binaries to build. Default is all of cmd.
               This option is available when using: <span class="token function">make</span> build/build.multiarch
               Example: <span class="token function">make</span> build <span class="token assign-left variable">BINS</span><span class="token operator">=</span><span class="token string">"iam-apiserver iam-authz-server"</span>
  <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常而言，Go 项目的 Makefile 应该实现以下功能：格式化代码、静态代码检查、单元测试、代码构建、文件清理、帮助等等。如果通过 docker 部署，还需要有 docker 镜像打包功能。因为 Go 是跨平台的语言，所以构建和 docker 打包命令，还要能够支持不同的 CPU 架构和平台。为了能够更好地控制 Makefile 命令的行为，还需要支持 Options。</p>
<p><strong>为了方便查看 Makefile 集成了哪些功能，我们需要支持 help 命令。help 命令最好通过解析 Makefile 文件来输出集成的功能，例如：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## help: Show this help info.</span>
.PHONY: <span class="token builtin class-name">help</span>
help: Makefile
  @echo <span class="token parameter variable">-e</span> <span class="token string">"<span class="token entity" title="\n">\n</span>Usage: make &lt;TARGETS> &lt;OPTIONS> ...<span class="token entity" title="\n">\n</span><span class="token entity" title="\n">\n</span>Targets:"</span>
  @sed <span class="token parameter variable">-n</span> <span class="token string">'s/^##//p'</span> $<span class="token operator">&lt;</span> <span class="token operator">|</span> <span class="token function">column</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-s</span> <span class="token string">':'</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">'s/^/ /'</span>
  @echo <span class="token string">"<span class="token variable">$$</span>USAGE_OPTIONS"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 help 命令，通过解析 Makefile 文件中的 <code v-pre>##</code> 注释，获取支持的命令。通过这种方式，我们以后新加命令时，就不用再对 help 命令进行修改了。</p>
<h2 id="设计makefile结构" tabindex="-1"><a class="header-anchor" href="#设计makefile结构" aria-hidden="true">#</a> 设计Makefile结构</h2>
<p>对于大型项目来说，需要管理的内容很多，所有管理功能都集成在一个 Makefile 中，可能会导致 Makefile 很大，难以阅读和维护，所以建议采用分层的设计方法，<strong>根目录下的 Makefile 聚合所有的 Makefile 命令，具体实现则按功能分类，放在另外的 Makefile 中。</strong></p>
<p>我们经常会在 Makefile 命令中集成 shell 脚本，但如果 shell 脚本过于复杂，也会导致 Makefile 内容过多，难以阅读和维护。并且在 Makefile 中集成复杂的 shell 脚本，编写体验也很差。对于这种情况，<strong>可以将复杂的 shell 命令封装在 shell 脚本中，供 Makefile 直接调用，而一些简单的命令则可以直接集成在 Makefile 中。</strong></p>
<p><strong>推荐的 Makefile 结构：</strong></p>
<p><img src="https://sm.nsddd.top/sm202302191533699.png" alt="image-20230219153332640"></p>
<p>在上面的 Makefile 组织方式中，根目录下的 Makefile 聚合了项目所有的管理功能，这些管理功能通过 Makefile 伪目标的方式实现。同时，还将这些伪目标进行分类，把相同类别的伪目标放在同一个 Makefile 中，这样可以使得 Makefile 更容易维护。对于复杂的命令，则编写成独立的 shell 脚本，并在 Makefile 命令中调用这些 shell 脚本。</p>
<p>举个例子，下面是 IAM 项目的 Makefile 组织结构：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
├── Makefile
├── scripts
│   ├── gendoc.sh
│   ├── make-rules
│   │   ├── gen.mk
│   │   ├── golang.mk
│   │   ├── image.mk
│   │   └── <span class="token punctuation">..</span>.
    └── <span class="token punctuation">..</span>.
├── Makefile
├── scripts
│   ├── gendoc.sh
│   ├── make-rules
│   │   ├── gen.mk
│   │   ├── golang.mk
│   │   ├── image.mk
│   │   └── <span class="token punctuation">..</span>.
    └── <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将相同类别的操作统一放在 <code v-pre>scripts/make-rules</code> 目录下的 Makefile 文件中。<strong>Makefile 的文件名参考分类命名</strong>，例如 <code v-pre>golang.mk</code>。最后，在 <code v-pre>/Makefile</code> 中 include 这些 Makefile。</p>
<blockquote>
<p>需要使用 <code v-pre>include</code> 来获取头文件：</p>
<p><code v-pre>include</code>是一种指令，用于将另一个文件中的规则和变量导入到当前的makefile中。这样做可以让你的makefile更加模块化，易于维护和重用。</p>
<p><strong>注意和我们上面讲的模块化分配 Makefile 层级调用有些不一样。</strong></p>
<p>下面是一个include的案例，假设我们有一个名为<code v-pre>main.c</code>的源文件，它需要链接一个名为<code v-pre>libfoo.a</code>的静态库文件。我们可以将这些规则和变量定义在一个名为<code v-pre>Makefile.inc</code>的文件中，然后在我们的主makefile中使用include指令将其导入。</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>CC <span class="token operator">=</span> gcc
CFLAGS <span class="token operator">=</span> -Wall -Werror -g

<span class="token target symbol">all</span><span class="token punctuation">:</span> libfoo.a

<span class="token target symbol">libfoo.a</span><span class="token punctuation">:</span> foo.o
	ar rcs <span class="token variable">$@</span> <span class="token variable">$^</span>

<span class="token target symbol">foo.o</span><span class="token punctuation">:</span> foo.c foo.h
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> -c <span class="token variable">$&lt;</span>

<span class="token target symbol">clean</span><span class="token punctuation">:</span>
	rm -f *.o libfoo.a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主makefile文件：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token keyword">include</span> Makefile.inc

<span class="token target symbol">main</span><span class="token punctuation">:</span> main.c libfoo.a
	<span class="token variable">$</span><span class="token punctuation">(</span>CC<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>CFLAGS<span class="token punctuation">)</span> -o <span class="token variable">$@</span> <span class="token variable">$&lt;</span> -L. -lfoo

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> clean
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
	<span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> -C . -f Makefile.inc clean
	rm -f main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>go 语言Makefile 💡简单的一个案例如下：</strong></p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token comment"># 定义变量</span>
GOCMD<span class="token operator">=</span>go
GOBUILD<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>GOCMD<span class="token punctuation">)</span> build
GOCLEAN<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>GOCMD<span class="token punctuation">)</span> clean
BINARY_NAME<span class="token operator">=</span>myapp
BINARY_UNIX<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>BINARY_NAME<span class="token punctuation">)</span>_unix

<span class="token target symbol">all</span><span class="token punctuation">:</span> deps build
<span class="token target symbol">build</span><span class="token punctuation">:</span>
    <span class="token variable">$</span><span class="token punctuation">(</span>GOBUILD<span class="token punctuation">)</span> -o <span class="token variable">$</span><span class="token punctuation">(</span>BINARY_NAME<span class="token punctuation">)</span> -v
    <span class="token variable">$</span><span class="token punctuation">(</span>GOBUILD<span class="token punctuation">)</span> -o <span class="token variable">$</span><span class="token punctuation">(</span>BINARY_UNIX<span class="token punctuation">)</span> -v
<span class="token target symbol">deps</span><span class="token punctuation">:</span>
    <span class="token variable">$</span><span class="token punctuation">(</span>GOCMD<span class="token punctuation">)</span> get -u github.com/golang/dep/cmd/dep
    dep ensure
<span class="token target symbol">clean</span><span class="token punctuation">:</span>
    <span class="token variable">$</span><span class="token punctuation">(</span>GOCLEAN<span class="token punctuation">)</span>
    rm -f <span class="token variable">$</span><span class="token punctuation">(</span>BINARY_NAME<span class="token punctuation">)</span>
    rm -f <span class="token variable">$</span><span class="token punctuation">(</span>BINARY_UNIX<span class="token punctuation">)</span>
<span class="token target symbol">run</span><span class="token punctuation">:</span>
    <span class="token variable">$</span><span class="token punctuation">(</span>GOBUILD<span class="token punctuation">)</span> -o <span class="token variable">$</span><span class="token punctuation">(</span>BINARY_NAME<span class="token punctuation">)</span> -v ./...
    ./<span class="token variable">$</span><span class="token punctuation">(</span>BINARY_NAME<span class="token punctuation">)</span>
<span class="token keyword">include</span> docker.mk

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，最后一行 <code v-pre>include docker.mk</code> 引用了名为 <code v-pre>docker.mk</code> 的 Makefile 文件。这个文件中可能包含了一些 Docker 相关的命令，比如构建镜像、推送镜像等等。通过 include 指令，这些命令可以被自动引入到主 Makefile 文件中，从而实现更加高效和便捷的编译和构建。</p>
<p>需要注意的是，include 指令的作用是将被引入的 Makefile 文件的内容直接复制到主 Makefile 文件中。因此，如果引入的文件中定义了和主 Makefile 文件中相同的变量或者规则，会发生命名冲突。因此，在编写被引入的 Makefile 文件时，应该避免使用和主 Makefile 文件相同的变量和规则名。</p>
</blockquote>
<p>为了跟 Makefile 的层级相匹配，<code v-pre>golang.mk</code> 中的所有目标都按<code v-pre>go.xxx</code>这种方式命名。通过这种命名方式，我们可以很容易分辨出某个目标完成什么功能，放在什么文件里，这在复杂的 Makefile 中尤其有用。以下是 IAM 项目根目录下，Makefile 的内容摘录，你可以看一看，作为参考：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token keyword">include</span> scripts/make-rules/golang.mk
<span class="token keyword">include</span> scripts/make-rules/image.mk
<span class="token keyword">include</span> scripts/make-rules/gen.mk
<span class="token keyword">include</span> scripts/make-rules/...

<span class="token comment">## build: Build source code for host platform.</span>
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build
<span class="token target symbol">build</span><span class="token punctuation">:</span>
  <span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> go.build

<span class="token comment">## build.multiarch: Build source code for multiple platforms. See option PLATFORMS.</span>
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> build.multiarch
<span class="token target symbol">build.multiarch</span><span class="token punctuation">:</span>
  <span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> go.build.multiarch

<span class="token comment">## image: Build docker images for host arch.</span>
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> image
<span class="token target symbol">image</span><span class="token punctuation">:</span>
  <span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> image.build

<span class="token comment">## push: Build docker images for host arch and push images to registry.</span>
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> push
<span class="token target symbol">push</span><span class="token punctuation">:</span>
  <span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> image.push

<span class="token comment">## ca: Generate CA files for all iam components.</span>
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> ca
<span class="token target symbol">ca</span><span class="token punctuation">:</span>
  <span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> gen.ca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，一个合理的 Makefile 结构应该具有前瞻性。也就是说，要在不改变现有结构的情况下，接纳后面的新功能。这就需要你整理好 Makefile 当前要实现的功能、即将要实现的功能和未来可能会实现的功能，然后基于这些功能，利用 Makefile 编程技巧，编写可扩展的 Makefile。</p>
<p>这里需要你注意：上面的 Makefile 通过 <code v-pre>.PHONY</code> 标识定义了大量的伪目标，定义伪目标一定要加 <code v-pre>.PHONY</code> 标识，否则当有同名的文件时，伪目标可能不会被执行。</p>
<h2 id="掌握-makefile-编写技巧" tabindex="-1"><a class="header-anchor" href="#掌握-makefile-编写技巧" aria-hidden="true">#</a> 掌握 Makefile 编写技巧</h2>
<h3 id="技巧-1-善用通配符和自动变量" tabindex="-1"><a class="header-anchor" href="#技巧-1-善用通配符和自动变量" aria-hidden="true">#</a> 技巧 1：善用通配符和自动变量</h3>
<p>Makefile 允许对目标进行类似正则运算的匹配，主要用到的通配符是%。通过使用通配符，可以使不同的目标使用相同的规则，从而使 Makefile 扩展性更强，也更简洁。</p>
<p>我们的 IAM 实战项目中，就大量使用了通配符<code v-pre>%</code>，例如：<code v-pre>go.build.%</code>、<code v-pre>ca.gen.%</code>、<code v-pre>deploy.run.%</code>、<code v-pre>tools.verify.%</code>、<code v-pre>tools.install.%</code>等。</p>
<p>这里，我们来看一个具体的例子，<code v-pre>tools.verify.%</code>（位于<code v-pre>scripts/make-rules/tools.mk</code>文件中）定义如下：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token target symbol">tools.verify.%</span><span class="token punctuation">:</span>
  <span class="token operator">@</span>if ! which <span class="token variable">$*</span> &amp;>/dev/null<span class="token punctuation">;</span> then <span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> tools.install.<span class="token variable">$*;</span> fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>make tools.verify.swagger</code>, <code v-pre>make tools.verify.mockgen</code>等均可以使用上面定义的规则，%分别代表了<code v-pre>swagger</code>和<code v-pre>mockgen</code>。</p>
<p>如果不使用%，则我们需要分别为tools.verify.swagger和tools.verify.mockgen定义规则，很麻烦，后面修改也困难。</p>
<p>另外，这里也能看出<code v-pre>tools.verify.%</code>这种命名方式的好处：tools 说明依赖的定义位于<code v-pre>scripts/make-rules/tools.mk</code> Makefile 中；verify说明<code v-pre>tools.verify.%</code>伪目标属于 verify 分类，主要用来验证工具是否安装。通过这种命名方式，你可以很容易地知道目标位于哪个 Makefile 文件中，以及想要完成的功能。</p>
<p>另外，上面的定义中还用到了自动变量<code v-pre>$*</code>，用来指代被匹配的值<code v-pre>swagger</code>、<code v-pre>mockgen</code>。</p>
<h3 id="技巧-2-善用函数" tabindex="-1"><a class="header-anchor" href="#技巧-2-善用函数" aria-hidden="true">#</a> 技巧 2：善用函数</h3>
<p>Makefile 自带的函数能够帮助我们实现很多强大的功能。所以，在我们编写 Makefile 的过程中，如果有功能需求，可以优先使用这些函数。我把常用的函数以及它们实现的功能整理在了 <a href="https://github.com/marmotedu/geekbang-go/blob/master/makefile/Makefile%E5%B8%B8%E7%94%A8%E5%87%BD%E6%95%B0%E5%88%97%E8%A1%A8.md" target="_blank" rel="noopener noreferrer">Makefile<ExternalLinkIcon/></a> 常用函数列表 中，你可以参考下。</p>
<p>IAM 的 Makefile 文件中大量使用了上述函数，如果你想查看这些函数的具体使用方法和场景，可以参考 IAM 项目的 Makefile 文件 make-rules。</p>
<h3 id="技巧-3-依赖需要用到的工具" tabindex="-1"><a class="header-anchor" href="#技巧-3-依赖需要用到的工具" aria-hidden="true">#</a> 技巧 3：依赖需要用到的工具</h3>
<p>如果 Makefile 某个目标的命令中用到了某个工具，可以将该工具放在目标的依赖中。这样，当执行该目标时，就可以指定检查系统是否安装该工具，如果没有安装则自动安装，从而实现更高程度的自动化。例如，<code v-pre>/Makefile</code> 文件中，<code v-pre>format</code> 伪目标，定义如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>.PHONY: <span class="token function">format</span>
format: tools.verify.golines tools.verify.goimports
  @echo <span class="token string">"===========> Formating codes"</span>
  @<span class="token variable"><span class="token variable">$(</span>FIND<span class="token variable">)</span></span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">'*.go'</span> <span class="token operator">|</span> <span class="token variable"><span class="token variable">$(</span>XARGS<span class="token variable">)</span></span> gofmt <span class="token parameter variable">-s</span> <span class="token parameter variable">-w</span>
  @<span class="token variable"><span class="token variable">$(</span>FIND<span class="token variable">)</span></span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">'*.go'</span> <span class="token operator">|</span> <span class="token variable"><span class="token variable">$(</span>XARGS<span class="token variable">)</span></span> goimports <span class="token parameter variable">-w</span> <span class="token parameter variable">-local</span> <span class="token variable"><span class="token variable">$(</span>ROOT_PACKAGE<span class="token variable">)</span></span>
  @<span class="token variable"><span class="token variable">$(</span>FIND<span class="token variable">)</span></span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">'*.go'</span> <span class="token operator">|</span> <span class="token variable"><span class="token variable">$(</span>XARGS<span class="token variable">)</span></span> golines <span class="token parameter variable">-w</span> --max-len<span class="token operator">=</span><span class="token number">120</span> --reformat-tags --shorten-comments --ignore-generated <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以看到，format 依赖<code v-pre>tools.verify.golines tools.verify.goimports</code>。我们再来看下tools.verify.golines的定义：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tools.verify.%:
  @if <span class="token operator">!</span> <span class="token function">which</span> <span class="token variable">$*</span> <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token variable"><span class="token variable">$(</span>MAKE<span class="token variable">)</span></span> tools.install.<span class="token variable">$*</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再来看下tools.install.$*规则：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>.PHONY: install.golines
install.golines:
  @<span class="token variable"><span class="token variable">$(</span>GO<span class="token variable">)</span></span> get <span class="token parameter variable">-u</span> github.com/segmentio/golines
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过tools.verify.%规则定义，我们可以知道，tools.verify.%会先检查工具是否安装，如果没有安装，就会执行tools.install.$*来安装。如此一来，当我们执行tools.verify.%目标时，如果系统没有安装 golines 命令，就会自动调用go get安装，提高了 Makefile 的自动化程度。</p>
<h3 id="技巧-4-把常用功能放在-makefile-中-不常用的放在分类-makefile-中" tabindex="-1"><a class="header-anchor" href="#技巧-4-把常用功能放在-makefile-中-不常用的放在分类-makefile-中" aria-hidden="true">#</a> 技巧 4：把常用功能放在 /Makefile 中，不常用的放在分类 Makefile 中</h3>
<p>一个项目，尤其是大型项目，有很多需要管理的地方，其中大部分都可以通过 Makefile 实现自动化操作。不过，为了保持 <code v-pre>/Makefile</code> 文件的整洁性，我们不能把所有的命令都添加在 <code v-pre>/Makefile</code> 文件中。</p>
<p>一个比较好的建议是，将常用功能放在 /Makefile 中，不常用的放在分类 Makefile 中，并在 /Makefile 中 include 这些分类 Makefile。</p>
<p>例如，IAM 项目的 /Makefile 集成了format、lint、test、build等常用命令，而将<code v-pre>gen.errcode.code、gen.errcode.doc</code>这类不常用的功能放在 <code v-pre>scripts/make-rules/gen.mk</code> 文件中。当然，我们也可以直接执行 make gen.errcode.code来执行gen.errcode.code伪目标。通过这种方式，既可以保证 /Makefile 的简洁、易维护，又可以通过make命令来运行伪目标，更加灵活。</p>
<h3 id="技巧-5-编写可扩展的-makefile" tabindex="-1"><a class="header-anchor" href="#技巧-5-编写可扩展的-makefile" aria-hidden="true">#</a> 技巧 5：编写可扩展的 Makefile</h3>
<p>什么叫可扩展的 Makefile 呢？在我看来，可扩展的 Makefile 包含两层含义：</p>
<ul>
<li>可以在不改变 Makefile 结构的情况下添加新功能。</li>
<li>扩展项目时，新功能可以自动纳入到 Makefile 现有逻辑中。</li>
</ul>
<p>其中的第一点，我们可以通过设计合理的 Makefile 结构来实现。要实现第二点，就需要我们在编写 Makefile 时采用一定的技巧，例如多用通配符、自动变量、函数等。这里我们来看一个例子，可以让你更好地理解。</p>
<p>在我们 IAM 实战项目的golang.mk中，执行 <code v-pre>make go.build</code> 时能够构建 <code v-pre>cmd/</code> 目录下的所有组件，也就是说，当有新组件添加时， <code v-pre>make go.build</code> 仍然能够构建新增的组件，这就实现了上面说的第二点。</p>
<p>具体实现方法如下：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>
COMMANDS <span class="token operator">?=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">filter-out</span> %.md, <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> <span class="token variable">$</span><span class="token punctuation">{</span>ROOT_DIR<span class="token punctuation">}</span>/cmd/*<span class="token punctuation">)</span><span class="token punctuation">)</span>
BINS <span class="token operator">?=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">foreach</span> cmd,<span class="token variable">$</span><span class="token punctuation">{</span>COMMANDS<span class="token punctuation">}</span>,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">{</span>cmd<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> go.build
<span class="token target symbol">go.build</span><span class="token punctuation">:</span> go.build.verify <span class="token variable">$</span><span class="token punctuation">(</span>addprefix go.build., <span class="token variable">$</span><span class="token punctuation">(</span>addprefix <span class="token variable">$</span><span class="token punctuation">(</span>PLATFORM<span class="token punctuation">)</span>., <span class="token variable">$</span><span class="token punctuation">(</span>BINS<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> go.build.%               

<span class="token target symbol">go.build.%</span><span class="token punctuation">:</span>             
  <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">eval</span> COMMAND <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">word</span> 2,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> ., ,<span class="token variable">$*</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">eval</span> PLATFORM <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">word</span> 1,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> ., ,<span class="token variable">$*</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">eval</span> OS <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">word</span> 1,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> _, ,<span class="token variable">$</span><span class="token punctuation">(</span>PLATFORM<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           
  <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">eval</span> ARCH <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">word</span> 2,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> _, ,<span class="token variable">$</span><span class="token punctuation">(</span>PLATFORM<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                         
  <span class="token operator">@</span>echo <span class="token string">"===========> Building binary $(COMMAND) $(VERSION) for $(OS) $(ARCH)"</span>
  <span class="token operator">@</span>mkdir -p <span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/platforms/<span class="token variable">$</span><span class="token punctuation">(</span>OS<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>ARCH<span class="token punctuation">)</span>
  <span class="token operator">@</span>CGO_ENABLED<span class="token operator">=</span>0 GOOS<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>OS<span class="token punctuation">)</span> GOARCH<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>ARCH<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>GO<span class="token punctuation">)</span> build <span class="token variable">$</span><span class="token punctuation">(</span>GO_BUILD_FLAGS<span class="token punctuation">)</span> -o <span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/platforms/<span class="token variable">$</span><span class="token punctuation">(</span>OS<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>ARCH<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>COMMAND<span class="token punctuation">)</span><span class="token variable">$</span><span class="token punctuation">(</span>GO_OUT_EXT<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>ROOT_PACKAGE<span class="token punctuation">)</span>/cmd/<span class="token variable">$</span><span class="token punctuation">(</span>COMMAND<span class="token punctuation">)</span>
COMMANDS <span class="token operator">?=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">filter-out</span> %.md, <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> <span class="token variable">$</span><span class="token punctuation">{</span>ROOT_DIR<span class="token punctuation">}</span>/cmd/*<span class="token punctuation">)</span><span class="token punctuation">)</span>
BINS <span class="token operator">?=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">foreach</span> cmd,<span class="token variable">$</span><span class="token punctuation">{</span>COMMANDS<span class="token punctuation">}</span>,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> <span class="token variable">$</span><span class="token punctuation">{</span>cmd<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> go.build
<span class="token target symbol">go.build</span><span class="token punctuation">:</span> go.build.verify <span class="token variable">$</span><span class="token punctuation">(</span>addprefix go.build., <span class="token variable">$</span><span class="token punctuation">(</span>addprefix <span class="token variable">$</span><span class="token punctuation">(</span>PLATFORM<span class="token punctuation">)</span>., <span class="token variable">$</span><span class="token punctuation">(</span>BINS<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> go.build.%               

<span class="token target symbol">go.build.%</span><span class="token punctuation">:</span>             
  <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">eval</span> COMMAND <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">word</span> 2,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> ., ,<span class="token variable">$*</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">eval</span> PLATFORM <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">word</span> 1,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> ., ,<span class="token variable">$*</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">eval</span> OS <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">word</span> 1,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> _, ,<span class="token variable">$</span><span class="token punctuation">(</span>PLATFORM<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           
  <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">eval</span> ARCH <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">word</span> 2,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> _, ,<span class="token variable">$</span><span class="token punctuation">(</span>PLATFORM<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                         
  <span class="token operator">@</span>echo <span class="token string">"===========> Building binary $(COMMAND) $(VERSION) for $(OS) $(ARCH)"</span>
  <span class="token operator">@</span>mkdir -p <span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/platforms/<span class="token variable">$</span><span class="token punctuation">(</span>OS<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>ARCH<span class="token punctuation">)</span>
  <span class="token operator">@</span>CGO_ENABLED<span class="token operator">=</span>0 GOOS<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>OS<span class="token punctuation">)</span> GOARCH<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>ARCH<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>GO<span class="token punctuation">)</span> build <span class="token variable">$</span><span class="token punctuation">(</span>GO_BUILD_FLAGS<span class="token punctuation">)</span> -o <span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/platforms/<span class="token variable">$</span><span class="token punctuation">(</span>OS<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>ARCH<span class="token punctuation">)</span>/<span class="token variable">$</span><span class="token punctuation">(</span>COMMAND<span class="token punctuation">)</span><span class="token variable">$</span><span class="token punctuation">(</span>GO_OUT_EXT<span class="token punctuation">)</span> <span class="token variable">$</span><span class="token punctuation">(</span>ROOT_PACKAGE<span class="token punctuation">)</span>/cmd/<span class="token variable">$</span><span class="token punctuation">(</span>COMMAND<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当执行make go.build 时，会执行 go.build 的依赖 <code v-pre>$(addprefix go.build., $(addprefix $(PLATFORM)., $(BINS))</code>) ,<code v-pre>addprefix</code>函数最终返回字符串 <code v-pre>go.build.linux_amd64.iamctl go.build.linux_amd64.iam-authz-server go.build.linux_amd64.iam-apiserver ...</code> ，这时候就会执行 <code v-pre>go.build.%</code> 伪目标。</p>
<p>在 go.build.% 伪目标中，通过 eval、word、subst 函数组合，算出了 COMMAND 的值 <code v-pre>iamctl/iam-apiserver/iam-authz-server/...</code>，最终通过 <code v-pre>$(ROOT_PACKAGE)/cmd/$(COMMAND)</code> 定位到需要构建的组件的 main 函数所在目录。</p>
<p>上述实现中有两个技巧，你可以注意下。首先，通过</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>COMMANDS ?<span class="token operator">=</span> <span class="token variable"><span class="token variable">$(</span>filter-out %.md, <span class="token punctuation">$(</span>wildcard $<span class="token punctuation">{</span>ROOT_DIR<span class="token punctuation">}</span>/cmd/*<span class="token punctuation">)</span><span class="token variable">)</span></span>
BINS ?<span class="token operator">=</span> <span class="token variable"><span class="token variable">$(</span>foreach cmd,$<span class="token punctuation">{</span>COMMANDS<span class="token punctuation">}</span>,<span class="token punctuation">$(</span>notdir $<span class="token punctuation">{</span>cmd<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取到了 cmd/ 目录下的所有组件名。</p>
<p>接着，通过使用通配符和自动变量，自动匹配到go.build.linux_amd64.iam-authz-server 这类伪目标并构建。</p>
<p>可以看到，想要编写一个可扩展的 Makefile，熟练掌握 Makefile 的用法是基础，更多的是需要我们动脑思考如何去编写 Makefile。</p>
<h3 id="技巧-6-将所有输出存放在一个目录下-方便清理和查找" tabindex="-1"><a class="header-anchor" href="#技巧-6-将所有输出存放在一个目录下-方便清理和查找" aria-hidden="true">#</a> 技巧 6：将所有输出存放在一个目录下，方便清理和查找</h3>
<p>在执行 Makefile 的过程中，会输出各种各样的文件，例如 Go 编译后的二进制文件、测试覆盖率数据等，我建议你把这些文件统一放在一个目录下，方便后期的清理和查找。通常我们可以把它们放在<code v-pre>_output</code>这类目录下，这样清理时就很方便，只需要清理<code v-pre>_output</code>文件夹就可以，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>.PHONY: go.clean
go.clean:
  @echo <span class="token string">"===========> Cleaning all build output"</span>
  @-rm <span class="token parameter variable">-vrf</span> <span class="token variable"><span class="token variable">$(</span>OUTPUT_DIR<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里要注意，要用<code v-pre>-rm</code>，而不是rm，防止在没有<code v-pre>_output</code>目录时，执行<code v-pre>make go.clean</code>报错。</p>
<h3 id="技巧-7-使用带层级的命名方式" tabindex="-1"><a class="header-anchor" href="#技巧-7-使用带层级的命名方式" aria-hidden="true">#</a> 技巧 7：使用带层级的命名方式</h3>
<p>通过使用带层级的命名方式，例如<code v-pre>tools.verify.swagger</code> ，我们可以实现目标分组管理。这样做的好处有很多。首先，当 Makefile 有大量目标时，通过分组，我们可以更好地管理这些目标。其次，分组也能方便理解，可以通过组名一眼识别出该目标的功能类别。最后，这样做还可以大大减小目标重名的概率。</p>
<p>例如，IAM 项目的 Makefile 就大量采用了下面这种命名方式。</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> gen.run
<span class="token target symbol">gen.run</span><span class="token punctuation">:</span> gen.clean gen.errcode gen.docgo

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> gen.errcode
<span class="token target symbol">gen.errcode</span><span class="token punctuation">:</span> gen.errcode.code gen.errcode.doc

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> gen.errcode.code
<span class="token target symbol">gen.errcode.code</span><span class="token punctuation">:</span> tools.verify.codegen
    ...
<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> gen.errcode.doc
<span class="token target symbol">gen.errcode.doc</span><span class="token punctuation">:</span> tools.verify.codegen
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="技巧-8-做好目标拆分" tabindex="-1"><a class="header-anchor" href="#技巧-8-做好目标拆分" aria-hidden="true">#</a> 技巧 8：做好目标拆分</h3>
<p>还有一个比较实用的技巧：我们要合理地拆分目标。比如，我们可以将安装工具拆分成两个目标：验证工具是否已安装和安装工具。通过这种方式，可以给我们的 Makefile 带来更大的灵活性。例如：我们可以根据需要选择性地执行其中一个操作，也可以两个操作一起执行。</p>
<p>这里来看一个例子：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token target symbol">gen.errcode.code</span><span class="token punctuation">:</span> tools.verify.codegen

<span class="token target symbol">tools.verify.%</span><span class="token punctuation">:</span>    
  <span class="token operator">@</span>if ! which <span class="token variable">$*</span> &amp;>/dev/null<span class="token punctuation">;</span> then <span class="token variable">$</span><span class="token punctuation">(</span>MAKE<span class="token punctuation">)</span> tools.install.<span class="token variable">$*;</span> fi  

<span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> install.codegen
<span class="token target symbol">install.codegen</span><span class="token punctuation">:</span>              
  <span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>GO<span class="token punctuation">)</span> install <span class="token variable">$</span><span class="token punctuation">{</span>ROOT_DIR<span class="token punctuation">}</span>/tools/codegen/codegen.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 Makefile 中，<code v-pre>gen.errcode.code</code> 依赖了 <code v-pre>tools.verify.codegen</code>，<code v-pre>tools.verify.codegen</code> 会先检查 codegen 命令是否存在，如果不存在，再调用 install.codegen 来安装 codegen 工具。</p>
<p>如果我们的 Makefile 设计是：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gen.errcode.code: install.codegen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那每次执行 gen.errcode.code 都要重新安装 codegen 命令，这种操作是不必要的，还会导致 make gen.errcode.code 执行很慢。</p>
<h3 id="技巧-9-设置-options" tabindex="-1"><a class="header-anchor" href="#技巧-9-设置-options" aria-hidden="true">#</a> 技巧 9：设置 OPTIONS</h3>
<p>编写 Makefile 时，我们还需要把一些可变的功能通过 OPTIONS 来控制。为了帮助你理解，这里还是拿 IAM 项目的 Makefile 来举例。</p>
<p>假设我们需要通过一个选项 V ，来控制是否需要在执行 Makefile 时打印详细的信息。这可以通过下面的步骤来实现。</p>
<p>首先，在 <code v-pre>/Makefile</code> 中定义 <code v-pre>USAGE_OPTIONS</code> 。定义 <code v-pre>USAGE_OPTIONS</code> 可以使开发者在执行 make help 后感知到此 OPTION，并根据需要进行设置。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>define USAGE_OPTIONS    
                         
Options:
  <span class="token punctuation">..</span>.
  BINS         The binaries to build. Default is all of cmd.
               <span class="token punctuation">..</span>.
  <span class="token punctuation">..</span>.
  V            Set to <span class="token number">1</span> <span class="token builtin class-name">enable</span> verbose build. Default is <span class="token number">0</span>.    
endef    
<span class="token builtin class-name">export</span> USAGE_OPTIONS    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，在<code v-pre>scripts/make-rules/common.mk</code>文件中，我们通过判断有没有设置 V 选项，来选择不同的行为：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token keyword">ifndef</span> V    
MAKEFLAGS <span class="token operator">+=</span> --no-print-directory    
<span class="token keyword">endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们还可以通过下面的方法来使用 V ：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ifeq <span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span>origin V<span class="token variable">)</span></span>, undefined<span class="token punctuation">)</span>                                
MAKEFLAGS <span class="token operator">+=</span> --no-print-directory              
endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面，我介绍了 V OPTION，我们在 Makefile 中通过判断有没有定义 V ，来执行不同的操作。其实还有一种 OPTION，这种 OPTION 的值我们在 Makefile 中是直接使用的，例如BINS。针对这种 OPTION，我们可以通过以下方式来使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
BINS ?<span class="token operator">=</span> <span class="token variable"><span class="token variable">$(</span>foreach cmd,$<span class="token punctuation">{</span>COMMANDS<span class="token punctuation">}</span>,<span class="token punctuation">$(</span>notdir $<span class="token punctuation">{</span>cmd<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">)</span></span>
<span class="token punctuation">..</span>.
go.build: go.build.verify <span class="token variable"><span class="token variable">$(</span>addprefix go.build., <span class="token punctuation">$(</span>addprefix <span class="token punctuation">$(</span>PLATFORM<span class="token punctuation">)</span>., <span class="token punctuation">$(</span>BINS<span class="token punctuation">)</span><span class="token variable">)</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，通过 ?= 来判断 BINS 变量有没有被赋值，如果没有，则赋予等号后的值。接下来，就可以在 Makefile 规则中使用它。</p>
<h3 id="技巧-10-定义环境变量" tabindex="-1"><a class="header-anchor" href="#技巧-10-定义环境变量" aria-hidden="true">#</a> 技巧 10：定义环境变量</h3>
<p>我们可以在 Makefile 中定义一些环境变量，例如：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>GO <span class="token operator">:=</span> go                                          
GO_SUPPORTED_VERSIONS <span class="token operator">?=</span> 1.13<span class="token operator">|</span>1.14<span class="token operator">|</span>1.15<span class="token operator">|</span>1.16<span class="token operator">|</span>1.17    
GO_LDFLAGS <span class="token operator">+=</span> -X <span class="token variable">$</span><span class="token punctuation">(</span>VERSION_PACKAGE<span class="token punctuation">)</span>.GitVersion<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>VERSION<span class="token punctuation">)</span> \    
  -X <span class="token variable">$</span><span class="token punctuation">(</span>VERSION_PACKAGE<span class="token punctuation">)</span>.GitCommit<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>GIT_COMMIT<span class="token punctuation">)</span> \       
  -X <span class="token variable">$</span><span class="token punctuation">(</span>VERSION_PACKAGE<span class="token punctuation">)</span>.GitTreeState<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>GIT_TREE_STATE<span class="token punctuation">)</span> \                          
  -X <span class="token variable">$</span><span class="token punctuation">(</span>VERSION_PACKAGE<span class="token punctuation">)</span>.BuildDate<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">shell</span> date -u +<span class="token string">'%Y-%m-%dT%H:%M:%SZ'</span><span class="token punctuation">)</span>    
<span class="token keyword">ifneq</span> <span class="token punctuation">(</span><span class="token variable">$</span><span class="token punctuation">(</span>DLV<span class="token punctuation">)</span>,<span class="token punctuation">)</span>                                                                                                                              
  GO_BUILD_FLAGS <span class="token operator">+=</span> -gcflags <span class="token string">"all=-N -l"</span>    
  LDFLAGS <span class="token operator">=</span> <span class="token string">""</span>      
<span class="token keyword">endif</span>                                                                                   
GO_BUILD_FLAGS <span class="token operator">+=</span> -tags<span class="token operator">=</span>jsoniter -ldflags <span class="token string">"$(GO_LDFLAGS)"</span> 
...
FIND <span class="token operator">:=</span> find . ! -path <span class="token string">'./third_party/*'</span> ! -path <span class="token string">'./vendor/*'</span>    
XARGS <span class="token operator">:=</span> xargs --no-run-if-empty 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些环境变量和编程中使用宏定义的作用是一样的：只要修改一处，就可以使很多地方同时生效，避免了重复的工作。</p>
<p>通常，我们可以将 GO、GO_BUILD_FLAGS、FIND 这类变量定义为环境变量。</p>
<h3 id="技巧-11-自己调用自己" tabindex="-1"><a class="header-anchor" href="#技巧-11-自己调用自己" aria-hidden="true">#</a> 技巧 11：自己调用自己</h3>
<p>在编写 Makefile 的过程中，你可能会遇到这样一种情况：A-Target 目标命令中，需要完成操作 B-Action，而操作 B-Action 我们已经通过伪目标 B-Target 实现过。为了达到最大的代码复用度，这时候最好的方式是在 A-Target 的命令中执行 B-Target。方法如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tools.verify.%:
  @if <span class="token operator">!</span> <span class="token function">which</span> <span class="token variable">$*</span> <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token variable"><span class="token variable">$(</span>MAKE<span class="token variable">)</span></span> tools.install.<span class="token variable">$*</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们通过 <code v-pre>$(MAKE)</code> 调用了伪目标 <code v-pre>tools.install.$*</code> 。要注意的是，默认情况下，Makefile 在切换目录时会输出以下信息：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code>$ make tools.install.codegen
<span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span><span class="token operator">=</span>> Installing codegen
<span class="token target symbol">make[1]</span><span class="token punctuation">:</span> Entering directory `/home/colin/workspace/golang/src/github.com/marmotedu/iam'
<span class="token target symbol">make[1]</span><span class="token punctuation">:</span> Leaving directory `/home/colin/workspace/golang/src/github.com/marmotedu/iam'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果觉得 Entering directory 这类信息很烦人，可以通过设置 MAKEFLAGS += --no-print-directory 来禁止 Makefile 打印这些信息。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p><strong>规范的 Makefile  文件需要的步骤：</strong></p>
<ol>
<li>v首先，你需要熟练掌握 Makefile 的语法。我建议你重点掌握以下语法：Makefile 规则语法、伪目标、变量赋值、特殊变量、自动化变量。</li>
<li>接着，我们需要提前规划 Makefile 要实现的功能。一个大型 Go 项目通常需要实现以下功能：代码生成类命令、格式化类命令、静态代码检查、 测试类命令、构建类命令、Docker 镜像打包类命令、部署类命令、清理类命令，等等。</li>
<li>然后，我们还需要通过 Makefile 功能分类、文件分层、复杂命令脚本化等方式，来设计一个合理的 Makefile 结构。</li>
<li>最后，我们还需要掌握一些 Makefile 编写技巧，例如：善用通配符、自动变量和函数；编写可扩展的 Makefile；使用带层级的命名方式，等等。通过这些技巧，可以进一步保证我们编写出一个高质量的 Makefile。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '6.md' style='float:left'>⬆️上一节🔗  </a><a href = '8.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


