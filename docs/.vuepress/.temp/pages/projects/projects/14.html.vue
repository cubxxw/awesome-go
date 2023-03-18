<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第14节-pflag、viper、cobra-核心功能介绍" tabindex="-1"><a class="header-anchor" href="#第14节-pflag、viper、cobra-核心功能介绍" aria-hidden="true">#</a> 第14节 Pflag、Viper、Cobra 核心功能介绍</h1>
<br>
<div><a href = '13.md' style='float:left'>⬆️上一节🔗  </a><a href = '15.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#如何构建应用框架">如何构建应用框架</router-link></li><li><router-link to="#命令行参数解析工具-pflag-使用介绍">命令行参数解析工具：Pflag 使用介绍</router-link><ul><li><router-link to="#pflag-包-flag-定义">Pflag 包 Flag 定义</router-link></li><li><router-link to="#pflag-包-flagset-定义">Pflag 包 FlagSet 定义</router-link></li><li><router-link to="#pflag-使用方法">Pflag 使用方法</router-link></li></ul></li><li><router-link to="#配置解析神器-viper-使用介绍">配置解析神器：Viper 使用介绍</router-link><ul><li><router-link to="#读入配置">读入配置</router-link></li><li><router-link to="#读取配置">读取配置</router-link></li></ul></li><li><router-link to="#现代化的命令行框架-cobra-全解">现代化的命令行框架：Cobra 全解</router-link><ul><li><router-link to="#使用-cobra-库创建命令">使用 Cobra 库创建命令</router-link></li><li><router-link to="#使用标志-1">使用标志</router-link></li><li><router-link to="#非选项参数验证">非选项参数验证</router-link></li></ul></li><li><router-link to="#prerun-and-postrun-hooks">PreRun and PostRun Hooks</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="如何构建应用框架" tabindex="-1"><a class="header-anchor" href="#如何构建应用框架" aria-hidden="true">#</a> 如何构建应用框架</h2>
<p>想知道如何构建应用框架，首先你要明白，一个应用框架包含哪些部分。在我看来，一个应用框架需要包含以下 3 个部分：</p>
<ul>
<li>
<p><strong>命令行参数解析</strong>：主要用来解析命令行参数，这些命令行参数可以影响命令的运行效果。</p>
</li>
<li>
<p><strong>配置文件解析</strong>：一个大型应用，通常具有很多参数，为了便于管理和配置这些参数，通常会将这些参数放在一个配置文件中，供程序读取并解析。</p>
</li>
<li>
<p><strong>应用的命令行框架</strong>：应用最终是通过命令来启动的。这里有 3 个需求点，</p>
<ul>
<li>
<p>一是命令需要具备 Help 功能，这样才能告诉使用者如何去使用；</p>
</li>
<li>
<p>二是命令需要能够解析命令行参数和配置文件；</p>
</li>
<li>
<p>三是命令需要能够初始化业务代码，并最终启动业务进程。</p>
<p>也就是说，我们的命令需要具备框架的能力，来纳管这 3 个部分。</p>
</li>
</ul>
</li>
</ul>
<p>这 3 个部分的功能，你可以自己开发，也可以借助业界已有的成熟实现。跟之前的想法一样，我不建议你自己开发，更建议你采用业界已有的成熟实现。命令行参数可以通过 <a href="https://github.com/spf13/pflag" target="_blank" rel="noopener noreferrer">Pflag<ExternalLinkIcon/></a> 来解析，配置文件可以通过 <a href="https://github.com/spf13/viper" target="_blank" rel="noopener noreferrer">Viper<ExternalLinkIcon/></a> 来解析，应用的命令行框架则可以通过 <a href="https://github.com/spf13/cobra" target="_blank" rel="noopener noreferrer">Cobra<ExternalLinkIcon/></a> 来实现。这 3 个包目前也是最受欢迎的包，并且这 3 个包不是割裂的，而是有联系的，我们可以有机地组合这 3 个包，从而实现一个非常强大、优秀的应用命令行框架。</p>
<p>接下来，我们就来详细看下，这 3 个包在 Go 项目开发中是如何使用的。</p>
<h2 id="命令行参数解析工具-pflag-使用介绍" tabindex="-1"><a class="header-anchor" href="#命令行参数解析工具-pflag-使用介绍" aria-hidden="true">#</a> 命令行参数解析工具：Pflag 使用介绍</h2>
<p>Go 服务开发中，经常需要给开发的组件加上各种启动参数来配置服务进程，影响服务的行为。像 kube-apiserver 就有多达 200 多个启动参数，而且这些参数的类型各不相同（例如：string、int、ip 类型等），使用方式也不相同（例如：需要支持<code v-pre>--</code>长选项，<code v-pre>-</code>短选项等），所以我们需要一个强大的命令行参数解析工具。</p>
<p>虽然 Go 源码中提供了一个标准库 <code v-pre>Flag</code> 包，用来对命令行参数进行解析，但在大型项目中应用更广泛的是另外一个包：<code v-pre>Pflag</code>。<code v-pre>Pflag</code> 提供了很多强大的特性，非常适合用来构建大型项目，一些耳熟能详的开源项目都是用 Pflag 来进行命令行参数解析的，例如：Kubernetes、Istio、Helm、Docker、Etcd 等。</p>
<p>接下来，我们就来介绍下如何使用 Pflag。Pflag 主要是通过创建 Flag 和 FlagSet 来使用的。我们先来看下 Flag。</p>
<h3 id="pflag-包-flag-定义" tabindex="-1"><a class="header-anchor" href="#pflag-包-flag-定义" aria-hidden="true">#</a> Pflag 包 Flag 定义</h3>
<p>Pflag 可以对命令行参数进行处理，一个命令行参数在 Pflag 包中会解析为一个 Flag 类型的变量。Flag 是一个结构体，定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">type</span> Flag <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name                <span class="token builtin">string</span> <span class="token comment">// flag长选项的名称</span>
    Shorthand           <span class="token builtin">string</span> <span class="token comment">// flag短选项的名称，一个缩写的字符</span>
    Usage               <span class="token builtin">string</span> <span class="token comment">// flag的使用文本</span>
    Value               Value  <span class="token comment">// flag的值</span>
    DefValue            <span class="token builtin">string</span> <span class="token comment">// flag的默认值</span>
    Changed             <span class="token builtin">bool</span> <span class="token comment">// 记录flag的值是否有被设置过</span>
    NoOptDefVal         <span class="token builtin">string</span> <span class="token comment">// 当flag出现在命令行，但是没有指定选项值时的默认值</span>
    Deprecated          <span class="token builtin">string</span> <span class="token comment">// 记录该flag是否被放弃</span>
    Hidden              <span class="token builtin">bool</span> <span class="token comment">// 如果值为true，则从help/usage输出信息中隐藏该flag</span>
    ShorthandDeprecated <span class="token builtin">string</span> <span class="token comment">// 如果flag的短选项被废弃，当使用flag的短选项时打印该信息</span>
    Annotations         <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// 给flag设置注解</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Flag 的值是一个 Value 类型的接口，Value 定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Value <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token comment">// 将flag类型的值转换为string类型的值，并返回string的内容</span>
    <span class="token function">Set</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token comment">// 将string类型的值转换为flag类型的值，转换失败报错</span>
    <span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token comment">// 返回flag的类型，例如：string、int、ip等</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过将 Flag 的值抽象成一个 interface 接口，我们就可以自定义 Flag 的类型了。只要实现了 Value 接口的结构体，就是一个新类型。</p>
<h3 id="pflag-包-flagset-定义" tabindex="-1"><a class="header-anchor" href="#pflag-包-flagset-定义" aria-hidden="true">#</a> Pflag 包 FlagSet 定义</h3>
<p>Pflag 除了支持单个的 Flag 之外，还支持 FlagSet。FlagSet 是一些预先定义好的 Flag 的集合，几乎所有的 Pflag 操作，都需要借助 FlagSet 提供的方法来完成。在实际开发中，我们可以使用两种方法来获取并使用 FlagSet：</p>
<ul>
<li>方法一，调用 NewFlagSet 创建一个 FlagSet。</li>
<li>方法二，使用 Pflag 包定义的全局 FlagSet：<code v-pre>CommandLine</code>。实际上 CommandLine 也是由 NewFlagSet 函数创建的。</li>
</ul>
<p><strong>先来看下第一种方法，自定义 FlagSet。下面是一个自定义 FlagSet 的示例：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> version <span class="token builtin">bool</span>
flagSet <span class="token operator">:=</span> pflag<span class="token punctuation">.</span><span class="token function">NewFlagSet</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">,</span> pflag<span class="token punctuation">.</span>ContinueOnError<span class="token punctuation">)</span>
flagSet<span class="token punctuation">.</span><span class="token function">BoolVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>version<span class="token punctuation">,</span> <span class="token string">"version"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">"Print version information and quit."</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以通过定义一个新的 FlagSet 来定义命令及其子命令的 Flag。</p>
<p><strong>再来看下第二种方法，使用全局 FlagSet。下面是一个使用全局 FlagSet 的示例：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"github.com/spf13/pflag"</span>
<span class="token punctuation">)</span>

pflag<span class="token punctuation">.</span><span class="token function">BoolVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>version<span class="token punctuation">,</span> <span class="token string">"version"</span><span class="token punctuation">,</span> <span class="token string">"v"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">"Print version information and quit."</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>FlagSet</code>可以使用<code v-pre>pflag.NewFlagSet()</code>方法来创建。以下是一个使用<code v-pre>FlagSet</code>的简单示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"github.com/spf13/pflag"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fs <span class="token operator">:=</span> pflag<span class="token punctuation">.</span><span class="token function">NewFlagSet</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">,</span> pflag<span class="token punctuation">.</span>ExitOnError<span class="token punctuation">)</span>
	fs<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"Your name"</span><span class="token punctuation">)</span>
	fs<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"Your age"</span><span class="token punctuation">)</span>
	fs<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"--name=Tom"</span><span class="token punctuation">,</span> <span class="token string">"--age=20"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	name<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> fs<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>
	age<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> fs<span class="token punctuation">.</span><span class="token function">GetInt</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Name: %s, Age: %d\n"</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们通过<code v-pre>pflag.NewFlagSet()</code>方法创建了一个名为<code v-pre>test</code>的<code v-pre>FlagSet</code>。然后，我们向这个<code v-pre>FlagSet</code>中添加了两个<code v-pre>Flag</code>：<code v-pre>name</code>和<code v-pre>age</code>。最后，我们通过<code v-pre>fs.Parse()</code>方法对命令行参数进行解析，并使用<code v-pre>fs.GetString()</code>和<code v-pre>fs.GetInt()</code>方法获取<code v-pre>name</code>和<code v-pre>age</code>的值，并输出到控制台上。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Name: Tom, Age: 20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code v-pre>FlagSet</code>可以方便地将相关的<code v-pre>Flag</code>进行分组管理，并且避免了在全局作用域中定义过多的<code v-pre>Flag</code>。此外，通过使用<code v-pre>FlagSet</code>，还可以更加灵活地控制不同模块中的<code v-pre>Flag</code>，以满足不同模块的需求。</p>
<p><code v-pre>Parse()</code>方法是<code v-pre>pflag</code>库中的一个方法，用于解析命令行参数。它的作用是将命令行参数解析为<code v-pre>Flag</code>的值，并将这些值保存到<code v-pre>FlagSet</code>中，以便后续的使用。</p>
<p>在这个例子中，我们通过<code v-pre>fs.Parse()</code>方法对命令行参数进行解析，解析的参数是<code v-pre>[]string{&quot;--name=Tom&quot;, &quot;--age=20&quot;}</code>，即<code v-pre>name</code>的值为<code v-pre>Tom</code>，<code v-pre>age</code>的值为<code v-pre>20</code>。解析后，<code v-pre>name</code>和<code v-pre>age</code>的值被保存在<code v-pre>FlagSet</code>中，我们可以通过<code v-pre>fs.GetString()</code>和<code v-pre>fs.GetInt()</code>方法获取它们的值，并输出到控制台上。</p>
<p>使用<code v-pre>Parse()</code>方法可以方便地将命令行参数解析为<code v-pre>Flag</code>的值，并将这些值保存在<code v-pre>FlagSet</code>中，以便后续的使用。这样，我们就可以更加方便地在程序中获取命令行参数，并进行相应的处理。</p>
</blockquote>
<p>这其中，<code v-pre>pflag.BoolVarP</code> 函数定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">BoolVarP</span><span class="token punctuation">(</span>p <span class="token operator">*</span><span class="token builtin">bool</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> shorthand <span class="token builtin">string</span><span class="token punctuation">,</span> value <span class="token builtin">bool</span><span class="token punctuation">,</span> usage <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    flag <span class="token operator">:=</span> CommandLine<span class="token punctuation">.</span><span class="token function">VarPF</span><span class="token punctuation">(</span><span class="token function">newBoolValue</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> shorthand<span class="token punctuation">,</span> usage<span class="token punctuation">)</span>
    flag<span class="token punctuation">.</span>NoOptDefVal <span class="token operator">=</span> <span class="token string">"true"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 <code v-pre>pflag.BoolVarP</code> 最终调用了 CommandLine，CommandLine 是一个包级别的变量，定义为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// CommandLine is the default set of command-line flags, parsed from os.Args.var CommandLine = NewFlagSet(os.Args[0], ExitOnError)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在一些不需要定义子命令的命令行工具中，我们可以直接使用全局的 FlagSet，更加简单方便。</p>
<h3 id="pflag-使用方法" tabindex="-1"><a class="header-anchor" href="#pflag-使用方法" aria-hidden="true">#</a> Pflag 使用方法</h3>
<p>上面，我们介绍了使用 Pflag 包的两个核心结构体。接下来，我来详细介绍下 Pflag 的常见使用方法。Pflag 有很多强大的功能，我这里介绍 7 个常见的使用方法。</p>
<h4 id="支持多种命令行参数定义方式" tabindex="-1"><a class="header-anchor" href="#支持多种命令行参数定义方式" aria-hidden="true">#</a> 支持多种命令行参数定义方式</h4>
<p><strong>Pflag 支持以下 4 种命令行参数定义方式：</strong></p>
<ul>
<li>支持长选项、默认值和使用文本，并将标志的值存储在指针中。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> name <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"colin"</span><span class="token punctuation">,</span> <span class="token string">"Input Your Name"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>支持长选项、短选项、默认值和使用文本，并将标志的值存储在指针中。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> name <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"n"</span><span class="token punctuation">,</span> <span class="token string">"colin"</span><span class="token punctuation">,</span> <span class="token string">"Input Your Name"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>支持长选项、默认值和使用文本，并将标志的值绑定到变量。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> name stringpflag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"colin"</span><span class="token punctuation">,</span> <span class="token string">"Input Your Name"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>支持长选项、短选项、默认值和使用文本，并将标志的值绑定到变量。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> name stringpflag<span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"n"</span><span class="token punctuation">,</span><span class="token string">"colin"</span><span class="token punctuation">,</span> <span class="token string">"Input Your Name"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>上面的函数命名是有规则的：</strong></p>
<ul>
<li>函数名带<code v-pre>Var</code>说明是将标志的值绑定到变量，否则是将标志的值存储在指针中。</li>
<li>函数名带<code v-pre>P</code>说明支持短选项，否则不支持短选项。</li>
</ul>
<h4 id="使用get-type-获取参数的值" tabindex="-1"><a class="header-anchor" href="#使用get-type-获取参数的值" aria-hidden="true">#</a> 使用<code v-pre>Get&lt;Type&gt;</code>获取参数的值</h4>
<p>可以使用<code v-pre>Get&lt;Type&gt;</code>来获取标志的值，<code v-pre>&lt;Type&gt;</code>代表 Pflag 所支持的类型。例如：有一个 pflag.FlagSet，带有一个名为 flagname 的 int 类型的标志，可以使用<code v-pre>GetInt()</code>来获取 int 值。需要注意 flagname 必须存在且必须是 int，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>i<span class="token punctuation">,</span> err <span class="token operator">:=</span> flagset<span class="token punctuation">.</span><span class="token function">GetInt</span><span class="token punctuation">(</span><span class="token string">"flagname"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="获取非选项参数" tabindex="-1"><a class="header-anchor" href="#获取非选项参数" aria-hidden="true">#</a> 获取非选项参数</h4>
<p>代码示例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>

    <span class="token string">"github.com/spf13/pflag"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    flagvar <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">"flagname"</span><span class="token punctuation">,</span> <span class="token number">1234</span><span class="token punctuation">,</span> <span class="token string">"help message for flagname"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pflag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"argument number is: %v\n"</span><span class="token punctuation">,</span> pflag<span class="token punctuation">.</span><span class="token function">NArg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"argument list is: %v\n"</span><span class="token punctuation">,</span> pflag<span class="token punctuation">.</span><span class="token function">Args</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"the first argument is: %v\n"</span><span class="token punctuation">,</span> pflag<span class="token punctuation">.</span><span class="token function">Arg</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述代码，输出如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run example1.go arg1 arg2argument number is: 2argument list is: <span class="token punctuation">[</span>arg1 arg2<span class="token punctuation">]</span>the first argument is: arg1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在定义完标志之后，可以调用<code v-pre>pflag.Parse()</code>来解析定义的标志。解析后，可通过<code v-pre>pflag.Args()</code>返回所有的非选项参数，通过<code v-pre>pflag.Arg(i)</code>返回第 i 个非选项参数。参数下标 0 到 <code v-pre>pflag.NArg() - 1</code>。</p>
<h4 id="指定了选项但是没有指定选项值时的默认值" tabindex="-1"><a class="header-anchor" href="#指定了选项但是没有指定选项值时的默认值" aria-hidden="true">#</a> 指定了选项但是没有指定选项值时的默认值</h4>
<p>创建一个 Flag 后，可以为这个 Flag 设置<code v-pre>pflag.NoOptDefVal</code>。如果一个 Flag 具有 NoOptDefVal，并且该 Flag 在命令行上没有设置这个 Flag 的值，则该标志将设置为 NoOptDefVal 指定的值。例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> ip <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">IntP</span><span class="token punctuation">(</span><span class="token string">"flagname"</span><span class="token punctuation">,</span> <span class="token string">"f"</span><span class="token punctuation">,</span> <span class="token number">1234</span><span class="token punctuation">,</span> <span class="token string">"help message"</span><span class="token punctuation">)</span>pflag<span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">"flagname"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NoOptDefVal <span class="token operator">=</span> <span class="token string">"4321"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的代码会产生结果，具体你可以参照下表：</p>
<p><a href="https://static001.geekbang.org/resource/image/fe/3f/fe76a52906c35b49b890225d1f5fc93f.png?wh=1428x336" target="_blank" rel="noopener noreferrer"><img src="http://sm.nsddd.top/sm202302222038386.png" alt="img"><ExternalLinkIcon/></a></p>
<h4 id="弃用标志或者标志的简写" tabindex="-1"><a class="header-anchor" href="#弃用标志或者标志的简写" aria-hidden="true">#</a> 弃用标志或者标志的简写</h4>
<p>Pflag 可以弃用标志或者标志的简写。弃用的标志或标志简写在帮助文本中会被隐藏，并在使用不推荐的标志或简写时打印正确的用法提示。例如，弃用名为 logmode 的标志，并告知用户应该使用哪个标志代替：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// deprecate a flag by specifying its name and a usage messagepflag.CommandLine.MarkDeprecated("logmode", "please use --log-mode instead")</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样隐藏了帮助文本中的 logmode，并且当使用 logmode 时，打印了<code v-pre>Flag --logmode has been deprecated, please use --log-mode instead</code>。</p>
<h4 id="保留名为-port-的标志-但是弃用它的简写形式。" tabindex="-1"><a class="header-anchor" href="#保留名为-port-的标志-但是弃用它的简写形式。" aria-hidden="true">#</a> 保留名为 port 的标志，但是弃用它的简写形式。</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>pflag<span class="token punctuation">.</span><span class="token function">IntVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>port<span class="token punctuation">,</span> <span class="token string">"port"</span><span class="token punctuation">,</span> <span class="token string">"P"</span><span class="token punctuation">,</span> <span class="token number">3306</span><span class="token punctuation">,</span> <span class="token string">"MySQL service host port."</span><span class="token punctuation">)</span>

<span class="token comment">// deprecate a flag shorthand by specifying its flag name and a usage message</span>
pflag<span class="token punctuation">.</span>CommandLine<span class="token punctuation">.</span><span class="token function">MarkShorthandDeprecated</span><span class="token punctuation">(</span><span class="token string">"port"</span><span class="token punctuation">,</span> <span class="token string">"please use --port only"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样隐藏了帮助文本中的简写 P，并且当使用简写 P 时，打印了<code v-pre>Flag shorthand -P has been deprecated, please use --port only</code>。usage message 在此处必不可少，并且不应为空。</p>
<h4 id="隐藏标志" tabindex="-1"><a class="header-anchor" href="#隐藏标志" aria-hidden="true">#</a> 隐藏标志</h4>
<p>可以将 Flag 标记为隐藏的，这意味着它仍将正常运行，但不会显示在 usage/help 文本中。例如：隐藏名为 secretFlag 的标志，只在内部使用，并且不希望它显示在帮助文本或者使用文本中。代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// hide a flag by specifying its namepflag.CommandLine.MarkHidden("secretFlag")</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此，我们介绍了 Pflag 包的重要用法。接下来，我们再来看下如何解析配置文件。</p>
<h2 id="配置解析神器-viper-使用介绍" tabindex="-1"><a class="header-anchor" href="#配置解析神器-viper-使用介绍" aria-hidden="true">#</a> 配置解析神器：Viper 使用介绍</h2>
<p>几乎所有的后端服务，都需要一些配置项来配置我们的服务，一些小型的项目，配置不是很多，可以选择只通过命令行参数来传递配置。但是大型项目配置很多，通过命令行参数传递就变得很麻烦，不好维护。标准的解决方案是将这些配置信息保存在配置文件中，由程序启动时加载和解析。Go 生态中有很多包可以加载并解析配置文件，目前最受欢迎的是 Viper 包。</p>
<p><strong>Viper 是 Go 应用程序现代化的、完整的解决方案，能够处理不同格式的配置文件，让我们在构建现代应用程序时，不必担心配置文件格式。Viper 也能够满足我们对应用配置的各种需求。</strong></p>
<p><strong>Viper 可以从不同的位置读取配置，不同位置的配置具有不同的优先级，高优先级的配置会覆盖低优先级相同的配置，按优先级从高到低排列如下：</strong></p>
<ol>
<li>通过 viper.Set 函数显示设置的配置</li>
<li>命令行参数</li>
<li>环境变量</li>
<li>配置文件</li>
<li>Key/Value 存储</li>
<li>默认值</li>
</ol>
<p>这里需要注意，Viper 配置键不区分大小写。</p>
<p>Viper 有很多功能，最重要的两类功能是读入配置和读取配置，Viper 提供不同的方式来实现这两类功能。接下来，我们就来详细介绍下 Viper 如何读入配置和读取配置。</p>
<h3 id="读入配置" tabindex="-1"><a class="header-anchor" href="#读入配置" aria-hidden="true">#</a> 读入配置</h3>
<p><strong>读入配置，就是将配置读入到 Viper 中，有如下读入方式：</strong></p>
<ul>
<li>设置默认的配置文件名。</li>
<li>读取配置文件。</li>
<li>监听和重新读取配置文件。</li>
<li>从 <code v-pre>io.Reader</code> 读取配置。</li>
<li>从环境变量读取。</li>
<li>从命令行标志读取。</li>
<li>从远程 <code v-pre>Key/Value</code> 存储读取。</li>
</ul>
<p>这几个方法的具体读入方式，你可以看下面的展示。</p>
<h4 id="设置默认" tabindex="-1"><a class="header-anchor" href="#设置默认" aria-hidden="true">#</a> 设置默认</h4>
<p>一个好的配置系统应该支持默认值。Viper 支持对 key 设置默认值，当没有通过配置文件、环境变量、远程配置或命令行标志设置 key 时，设置默认值通常是很有用的，可以让程序在没有明确指定配置时也能够正常运行。例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>viper<span class="token punctuation">.</span><span class="token function">SetDefault</span><span class="token punctuation">(</span><span class="token string">"ContentDir"</span><span class="token punctuation">,</span> <span class="token string">"content"</span><span class="token punctuation">)</span>
viper<span class="token punctuation">.</span><span class="token function">SetDefault</span><span class="token punctuation">(</span><span class="token string">"LayoutDir"</span><span class="token punctuation">,</span> <span class="token string">"layouts"</span><span class="token punctuation">)</span>
viper<span class="token punctuation">.</span><span class="token function">SetDefault</span><span class="token punctuation">(</span><span class="token string">"Taxonomies"</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"tag"</span><span class="token punctuation">:</span> <span class="token string">"tags"</span><span class="token punctuation">,</span> <span class="token string">"category"</span><span class="token punctuation">:</span> <span class="token string">"categories"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读取配置文件" tabindex="-1"><a class="header-anchor" href="#读取配置文件" aria-hidden="true">#</a> 读取配置文件</h4>
<p>Viper 可以读取配置文件来解析配置，支持 JSON、TOML、YAML、YML、Properties、Props、Prop、HCL、Dotenv、Env 格式的配置文件。Viper 支持搜索多个路径，并且默认不配置任何搜索路径，将默认决策留给应用程序。</p>
<p>以下是如何使用 Viper 搜索和读取配置文件的示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>

  <span class="token string">"github.com/spf13/pflag"</span>
  <span class="token string">"github.com/spf13/viper"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
  cfg  <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"config"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"Configuration file."</span><span class="token punctuation">)</span>
  help <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">BoolP</span><span class="token punctuation">(</span><span class="token string">"help"</span><span class="token punctuation">,</span> <span class="token string">"h"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"Show this help message."</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pflag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token operator">*</span>help <span class="token punctuation">{</span>
    pflag<span class="token punctuation">.</span><span class="token function">Usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 从配置文件中读取配置</span>
  <span class="token keyword">if</span> <span class="token operator">*</span>cfg <span class="token operator">!=</span> <span class="token string">""</span> <span class="token punctuation">{</span>
    viper<span class="token punctuation">.</span><span class="token function">SetConfigFile</span><span class="token punctuation">(</span><span class="token operator">*</span>cfg<span class="token punctuation">)</span>   <span class="token comment">// 指定配置文件名</span>
    viper<span class="token punctuation">.</span><span class="token function">SetConfigType</span><span class="token punctuation">(</span><span class="token string">"yaml"</span><span class="token punctuation">)</span> <span class="token comment">// 如果配置文件名中没有文件扩展名，则需要指定配置文件的格式，告诉viper以何种格式解析文件</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    viper<span class="token punctuation">.</span><span class="token function">AddConfigPath</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span>          <span class="token comment">// 把当前目录加入到配置文件的搜索路径中</span>
    viper<span class="token punctuation">.</span><span class="token function">AddConfigPath</span><span class="token punctuation">(</span><span class="token string">"$HOME/.iam"</span><span class="token punctuation">)</span> <span class="token comment">// 配置文件搜索路径，可以设置多个配置文件搜索路径</span>
    viper<span class="token punctuation">.</span><span class="token function">SetConfigName</span><span class="token punctuation">(</span><span class="token string">"config"</span><span class="token punctuation">)</span>     <span class="token comment">// 配置文件名称（没有文件扩展名）</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">// 读取配置文件。如果指定了配置文件名，则使用指定的配置文件，否则在注册的搜索路径中搜索</span>
    <span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Fatal error config file: %s \n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Used configuration file is: %s\n"</span><span class="token punctuation">,</span> viper<span class="token punctuation">.</span><span class="token function">ConfigFileUsed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Viper 支持设置多个配置文件搜索路径，需要注意添加搜索路径的顺序，Viper 会根据添加的路径顺序搜索配置文件，如果找到则停止搜索。如果调用 SetConfigFile 直接指定了配置文件名，并且配置文件名没有文件扩展名时，需要显式指定配置文件的格式，以使 Viper 能够正确解析配置文件。</p>
<p>如果通过搜索的方式查找配置文件，则需要注意，SetConfigName 设置的配置文件名是不带扩展名的，在搜索时 Viper 会在文件名之后追加文件扩展名，并尝试搜索所有支持的扩展类型。</p>
<h4 id="监听和重新读取配置文件。" tabindex="-1"><a class="header-anchor" href="#监听和重新读取配置文件。" aria-hidden="true">#</a> 监听和重新读取配置文件。</h4>
<p>**Viper 支持在运行时让应用程序实时读取配置文件，也就是热加载配置。**可以通过 WatchConfig 函数热加载配置。在调用 WatchConfig 函数之前，需要确保已经添加了配置文件的搜索路径。另外，还可以为 Viper 提供一个回调函数，以便在每次发生更改时运行。这里我也给你个示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>viper<span class="token punctuation">.</span><span class="token function">WatchConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
viper<span class="token punctuation">.</span><span class="token function">OnConfigChange</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>e fsnotify<span class="token punctuation">.</span>Event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 配置文件发生变更之后会调用的回调函数</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Config file changed:"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不建议在实际开发中使用热加载功能</strong>，因为即使配置热加载了，程序中的代码也不一定会热加载。例如：修改了服务监听端口，但是服务没有重启，这时候服务还是监听在老的端口上，会造成不一致。</p>
<h4 id="设置配置值" tabindex="-1"><a class="header-anchor" href="#设置配置值" aria-hidden="true">#</a> 设置配置值</h4>
<p>我们可以通过 viper.Set() 函数来显式设置配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>viper.Set("user.username", "colin")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用环境变量" tabindex="-1"><a class="header-anchor" href="#使用环境变量" aria-hidden="true">#</a> 使用环境变量</h4>
<p>Viper 还支持环境变量，通过如下 5 个函数来支持环境变量：</p>
<ul>
<li><code v-pre>AutomaticEnv()</code></li>
<li><code v-pre>BindEnv(input …string) error</code></li>
<li><code v-pre>SetEnvPrefix(in string)</code></li>
<li><code v-pre>SetEnvKeyReplacer(r *strings.Replacer)</code></li>
<li><code v-pre>AllowEmptyEnv(allowEmptyEnv bool)</code></li>
</ul>
<p>这里要注意：Viper 读取环境变量是区分大小写的。Viper 提供了一种机制来确保 Env 变量是唯一的。通过使用 SetEnvPrefix，可以告诉 Viper 在读取环境变量时使用前缀。BindEnv 和 AutomaticEnv 都将使用此前缀。比如，我们设置了 <code v-pre>viper.SetEnvPrefix(“VIPER”)</code>，当使用 <code v-pre>viper.Get(“apiversion”)</code> 时，实际读取的环境变量是<code v-pre>VIPER_APIVERSION</code>。</p>
<p>BindEnv 需要一个或两个参数。第一个参数是键名，第二个是环境变量的名称，环境变量的名称区分大小写。如果未提供 Env 变量名，则 Viper 将假定 Env 变量名为：<code v-pre>环境变量前缀_键名全大写</code>。例如：前缀为 VIPER，key 为 username，则 Env 变量名为<code v-pre>VIPER_USERNAME</code>。当显示提供 Env 变量名（第二个参数）时，它不会自动添加前缀。例如，如果第二个参数是 ID，Viper 将查找环境变量 ID。</p>
<p>在使用 Env 变量时，需要注意的一件重要事情是：每次访问该值时都将读取它。Viper 在调用 BindEnv 时不固定该值。</p>
<p>还有一个魔法函数 SetEnvKeyReplacer，SetEnvKeyReplacer 允许你使用 strings.Replacer 对象来重写 Env 键。如果你想在 Get() 调用中使用<code v-pre>-</code>或者<code v-pre>.</code>，但希望你的环境变量使用<code v-pre>*</code>分隔符，可以通过 SetEnvKeyReplacer 来实现。比如，我们设置了环境变量<code v-pre>USER_SECRET_KEY=bVix2WBv0VPfrDrvlLWrhEdzjLpPCNYb</code>，但我们想用<code v-pre>viper.Get(&quot;user.secret-key&quot;)</code>，那我们就调用函数：<code v-pre>*</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>viper.SetEnvKeyReplacer(strings.NewReplacer(".", "
", "-", ""))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>上面的代码，在调用 viper.Get() 函数时，会用_替换<code v-pre>.</code>和<code v-pre>-</code>。默认情况下，空环境变量被认为是未设置的，并将返回到下一个配置源。若要将空环境变量视为已设置，可以使用 AllowEmptyEnv 方法。使用环境变量示例如下：</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// 使用环境变量</span>
os<span class="token punctuation">.</span><span class="token function">Setenv</span><span class="token punctuation">(</span><span class="token string">"VIPER_USER_SECRET_ID"</span><span class="token punctuation">,</span> <span class="token string">"QLdywI2MrmDVjSSv6e95weNRvmteRjfKAuNV"</span><span class="token punctuation">)</span>
os<span class="token punctuation">.</span><span class="token function">Setenv</span><span class="token punctuation">(</span><span class="token string">"VIPER_USER_SECRET_KEY"</span><span class="token punctuation">,</span> <span class="token string">"bVix2WBv0VPfrDrvlLWrhEdzjLpPCNYb"</span><span class="token punctuation">)</span>

viper<span class="token punctuation">.</span><span class="token function">AutomaticEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                             <span class="token comment">// 读取环境变量</span>
viper<span class="token punctuation">.</span><span class="token function">SetEnvPrefix</span><span class="token punctuation">(</span><span class="token string">"VIPER"</span><span class="token punctuation">)</span>                                      <span class="token comment">// 设置环境变量前缀：VIPER_，如果是viper，将自动转变为大写。</span>
viper<span class="token punctuation">.</span><span class="token function">SetEnvKeyReplacer</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">NewReplacer</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">"_"</span><span class="token punctuation">,</span> <span class="token string">"-"</span><span class="token punctuation">,</span> <span class="token string">"_"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 将viper.Get(key) key字符串中'.'和'-'替换为'_'</span>
viper<span class="token punctuation">.</span><span class="token function">BindEnv</span><span class="token punctuation">(</span><span class="token string">"user.secret-key"</span><span class="token punctuation">)</span>
viper<span class="token punctuation">.</span><span class="token function">BindEnv</span><span class="token punctuation">(</span><span class="token string">"user.secret-id"</span><span class="token punctuation">,</span> <span class="token string">"USER_SECRET_ID"</span><span class="token punctuation">)</span> <span class="token comment">// 绑定环境变量名到key</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用标志" tabindex="-1"><a class="header-anchor" href="#使用标志" aria-hidden="true">#</a> 使用标志</h4>
<p>Viper 支持 Pflag 包，能够绑定 key 到 Flag。与 BindEnv 类似，在调用绑定方法时，不会设置该值，但在访问它时会设置。对于单个标志，可以调用 BindPFlag() 进行绑定：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>viper.BindPFlag("token", pflag.Lookup("token")) // 绑定单个标志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以绑定一组现有的 pflags（pflag.FlagSet）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>viper.BindPFlags(pflag.CommandLine)             //绑定标志集
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="读取配置" tabindex="-1"><a class="header-anchor" href="#读取配置" aria-hidden="true">#</a> 读取配置</h3>
<p>Viper 提供了如下方法来读取配置：</p>
<ul>
<li><code v-pre>Get(key string) interface{}</code></li>
<li><code v-pre>Get&lt;Type&gt;(key string) &lt;Type&gt;</code></li>
<li><code v-pre>AllSettings() map[string]interface{}</code></li>
<li><code v-pre>IsSet(key string) : bool</code></li>
</ul>
<p>**每一个 Get 方法在找不到值的时候都会返回零值。**为了检查给定的键是否存在，可以使用 <code v-pre>IsSet()</code> 方法。<code v-pre>&lt;Type&gt;</code>可以是 Viper 支持的类型，首字母大写：Bool、Float64、Int、IntSlice、String、StringMap、StringMapString、StringSlice、Time、Duration。例如：GetInt()。</p>
<p>常见的读取配置方法有以下几种。</p>
<h4 id="访问嵌套的键" tabindex="-1"><a class="header-anchor" href="#访问嵌套的键" aria-hidden="true">#</a> 访问嵌套的键</h4>
<p>例如，加载下面的 JSON 文件：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>
<span class="token punctuation">{</span>
    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
        <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">5799</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"datastore"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"metric"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
            <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">3099</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"warehouse"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"198.0.0.1"</span><span class="token punctuation">,</span>
            <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">2112</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Viper 可以通过传入<code v-pre>.</code>分隔的路径来访问嵌套字段：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>viper.GetString("datastore.metric.host") // (返回 "127.0.0.1")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果<code v-pre>datastore.metric</code>被直接赋值覆盖（被 Flag、环境变量、set() 方法等等），那么<code v-pre>datastore.metric</code>的所有子键都将变为未定义状态，它们被高优先级配置级别覆盖了。</p>
<p><strong>如果存在与分隔的键路径匹配的键，则直接返回其值。例如：</strong></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"datastore.metric.host"</span><span class="token operator">:</span> <span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span>
    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
        <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">5799</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"datastore"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"metric"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
            <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">3099</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"warehouse"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"198.0.0.1"</span><span class="token punctuation">,</span>
            <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">2112</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>viper.GetString</code> 获取值：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>viper<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">"datastore.metric.host"</span><span class="token punctuation">)</span> <span class="token comment">// 返回 "0.0.0.0"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="反序列化" tabindex="-1"><a class="header-anchor" href="#反序列化" aria-hidden="true">#</a> 反序列化</h4>
<p>Viper 可以支持将所有或特定的值解析到结构体、map 等。可以通过两个函数来实现：</p>
<ul>
<li><code v-pre>Unmarshal(rawVal interface{}) error</code></li>
<li><code v-pre>UnmarshalKey(key string, rawVal interface{}) error</code></li>
</ul>
<p>一个示例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Port <span class="token builtin">int</span>
  Name <span class="token builtin">string</span>
  PathMap <span class="token builtin">string</span> <span class="token string">`mapstructure:"path_map"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> C config

err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>C<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"unable to decode into struct, %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要解析那些键本身就包含<code v-pre>.</code>(默认的键分隔符）的配置，则需要修改分隔符：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
v <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">NewWithOptions</span><span class="token punctuation">(</span>viper<span class="token punctuation">.</span><span class="token function">KeyDelimiter</span><span class="token punctuation">(</span><span class="token string">"::"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

v<span class="token punctuation">.</span><span class="token function">SetDefault</span><span class="token punctuation">(</span><span class="token string">"chart::values"</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
    <span class="token string">"ingress"</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token string">"annotations"</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
            <span class="token string">"traefik.frontend.rule.type"</span><span class="token punctuation">:</span>                 <span class="token string">"PathPrefix"</span><span class="token punctuation">,</span>
            <span class="token string">"traefik.ingress.kubernetes.io/ssl-redirect"</span><span class="token punctuation">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Chart <span class="token keyword">struct</span><span class="token punctuation">{</span>
        Values <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> C config

v<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>C<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Viper 在后台使用<code v-pre>github.com/mitchellh/mapstructure</code>来解析值，其默认情况下使用<code v-pre>mapstructure tags</code>。当我们需要将 Viper 读取的配置反序列到我们定义的结构体变量中时，一定要使用 <code v-pre>mapstructure tags</code>。</p>
<h4 id="序列化成字符串" tabindex="-1"><a class="header-anchor" href="#序列化成字符串" aria-hidden="true">#</a> 序列化成字符串</h4>
<p>有时候我们需要将 Viper 中保存的所有设置序列化到一个字符串中，而不是将它们写入到一个文件中，示例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    yaml <span class="token string">"gopkg.in/yaml.v2"</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">yamlStringSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">AllSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    bs<span class="token punctuation">,</span> err <span class="token operator">:=</span> yaml<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"unable to marshal config to YAML: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>bs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="现代化的命令行框架-cobra-全解" tabindex="-1"><a class="header-anchor" href="#现代化的命令行框架-cobra-全解" aria-hidden="true">#</a> 现代化的命令行框架：Cobra 全解</h2>
<p>Cobra 既是一个可以创建强大的现代 CLI 应用程序的库，也是一个可以生成应用和命令文件的程序。有许多大型项目都是用 Cobra 来构建应用程序的，例如 Kubernetes、Docker、etcd、Rkt、Hugo 等。</p>
<p><strong>Cobra 建立在 commands、arguments 和 flags 结构之上</strong>。commands 代表命令，arguments 代表非选项参数，flags 代表选项参数（也叫标志）。一个好的应用程序应该是易懂的，用户可以清晰地知道如何去使用这个应用程序。应用程序通常遵循如下模式：<code v-pre>APPNAME VERB NOUN --ADJECTIVE</code>或者<code v-pre>APPNAME COMMAND ARG --FLAG</code>，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone URL <span class="token parameter variable">--bare</span> 
<span class="token comment"># clone 是一个命令，URL是一个非选项参数，bare是一个选项参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，VERB 代表动词，NOUN 代表名词，ADJECTIVE 代表形容词。</p>
<p>Cobra 提供了两种方式来创建命令：Cobra 命令和 Cobra 库。Cobra 命令可以生成一个 Cobra 命令模板，而命令模板也是通过引用 Cobra 库来构建命令的。所以，这里我直接介绍如何使用 Cobra 库来创建命令。</p>
<h3 id="使用-cobra-库创建命令" tabindex="-1"><a class="header-anchor" href="#使用-cobra-库创建命令" aria-hidden="true">#</a> 使用 Cobra 库创建命令</h3>
<p>如果要用 Cobra 库编码实现一个应用程序，需要首先创建一个空的 main.go 文件和一个 rootCmd 文件，之后可以根据需要添加其他命令。具体步骤如下：</p>
<h4 id="创建-rootcmd" tabindex="-1"><a class="header-anchor" href="#创建-rootcmd" aria-hidden="true">#</a> 创建 rootCmd</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> newApp2 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> newApp2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通常情况下，我们会将 rootCmd 放在文件 cmd/root.go 中。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> rootCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
  Use<span class="token punctuation">:</span>   <span class="token string">"hugo"</span><span class="token punctuation">,</span>
  Short<span class="token punctuation">:</span> <span class="token string">"Hugo is a very fast static site generator"</span><span class="token punctuation">,</span>
  Long<span class="token punctuation">:</span> <span class="token string">`A Fast and Flexible Static Site Generator built with
                love by spf13 and friends in Go.
                Complete documentation is available at http://hugo.spf13.com`</span><span class="token punctuation">,</span>
  Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do Stuff Here</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> rootCmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以在 <code v-pre>init()</code> 函数中 <strong>定义标志和处理配置</strong>，例如 <code v-pre>cmd/root.go</code>。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"os"</span>

  homedir <span class="token string">"github.com/mitchellh/go-homedir"</span>
  <span class="token string">"github.com/spf13/cobra"</span>
  <span class="token string">"github.com/spf13/viper"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
    cfgFile     <span class="token builtin">string</span>
    projectBase <span class="token builtin">string</span>
    userLicense <span class="token builtin">string</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cobra<span class="token punctuation">.</span><span class="token function">OnInitialize</span><span class="token punctuation">(</span>initConfig<span class="token punctuation">)</span>
  rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cfgFile<span class="token punctuation">,</span> <span class="token string">"config"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"config file (default is $HOME/.cobra.yaml)"</span><span class="token punctuation">)</span>
  rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>projectBase<span class="token punctuation">,</span> <span class="token string">"projectbase"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"base project directory eg. github.com/spf13/"</span><span class="token punctuation">)</span>
  rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"author"</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"YOUR NAME"</span><span class="token punctuation">,</span> <span class="token string">"Author name for copyright attribution"</span><span class="token punctuation">)</span>
  rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>userLicense<span class="token punctuation">,</span> <span class="token string">"license"</span><span class="token punctuation">,</span> <span class="token string">"l"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"Name of license for the project (can provide `licensetext` in config)"</span><span class="token punctuation">)</span>
  rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Bool</span><span class="token punctuation">(</span><span class="token string">"viper"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">"Use Viper for configuration"</span><span class="token punctuation">)</span>
  viper<span class="token punctuation">.</span><span class="token function">BindPFlag</span><span class="token punctuation">(</span><span class="token string">"author"</span><span class="token punctuation">,</span> rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">"author"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  viper<span class="token punctuation">.</span><span class="token function">BindPFlag</span><span class="token punctuation">(</span><span class="token string">"projectbase"</span><span class="token punctuation">,</span> rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">"projectbase"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  viper<span class="token punctuation">.</span><span class="token function">BindPFlag</span><span class="token punctuation">(</span><span class="token string">"useViper"</span><span class="token punctuation">,</span> rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">"viper"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  viper<span class="token punctuation">.</span><span class="token function">SetDefault</span><span class="token punctuation">(</span><span class="token string">"author"</span><span class="token punctuation">,</span> <span class="token string">"NAME HERE &lt;EMAIL ADDRESS>"</span><span class="token punctuation">)</span>
  viper<span class="token punctuation">.</span><span class="token function">SetDefault</span><span class="token punctuation">(</span><span class="token string">"license"</span><span class="token punctuation">,</span> <span class="token string">"apache"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">initConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Don't forget to read config either from cfgFile or from home directory!</span>
  <span class="token keyword">if</span> cfgFile <span class="token operator">!=</span> <span class="token string">""</span> <span class="token punctuation">{</span>
    <span class="token comment">// Use config file from the flag.</span>
    viper<span class="token punctuation">.</span><span class="token function">SetConfigFile</span><span class="token punctuation">(</span>cfgFile<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Find home directory.</span>
    home<span class="token punctuation">,</span> err <span class="token operator">:=</span> homedir<span class="token punctuation">.</span><span class="token function">Dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Search config in home directory with name ".cobra" (without extension).</span>
    viper<span class="token punctuation">.</span><span class="token function">AddConfigPath</span><span class="token punctuation">(</span>home<span class="token punctuation">)</span>
    viper<span class="token punctuation">.</span><span class="token function">SetConfigName</span><span class="token punctuation">(</span><span class="token string">".cobra"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> err <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Can't read config:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建-main-go" tabindex="-1"><a class="header-anchor" href="#创建-main-go" aria-hidden="true">#</a> 创建 main.go</h4>
<p>我们还需要一个 main 函数来调用 rootCmd，通常我们会创建一个 main.go 文件，在 main.go 中调用 rootCmd.Execute() 来执行命令：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"{pathToYourApp}/cmd"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意，main.go 中不建议放很多代码，通常只需要调用 cmd.Execute() 即可。</p>
<h4 id="添加命令" tabindex="-1"><a class="header-anchor" href="#添加命令" aria-hidden="true">#</a> 添加命令</h4>
<p>除了 rootCmd，我们还可以调用 AddCommand 添加其他命令，通常情况下，我们会把其他命令的源码文件放在 cmd / 目录下，例如，我们添加一个 version 命令，可以创建 <code v-pre>cmd/version.go</code> 文件，内容为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> cmd

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>

  <span class="token string">"github.com/spf13/cobra"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rootCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>versionCmd<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> versionCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
  Use<span class="token punctuation">:</span>   <span class="token string">"version"</span><span class="token punctuation">,</span>
  Short<span class="token punctuation">:</span> <span class="token string">"Print the version number of Hugo"</span><span class="token punctuation">,</span>
  Long<span class="token punctuation">:</span>  <span class="token string">`All software has versions. This is Hugo's`</span><span class="token punctuation">,</span>
  Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hugo Static Site Generator v0.9 -- HEAD"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本示例中，我们通过调用<code v-pre>rootCmd.AddCommand(versionCmd)</code>给 rootCmd 命令添加了一个 versionCmd 命令。</p>
<h4 id="编译并运行" tabindex="-1"><a class="header-anchor" href="#编译并运行" aria-hidden="true">#</a> 编译并运行</h4>
<p>将 main.go 中<code v-pre>{pathToYourApp}</code>替换为对应的路径，例如本示例中 <code v-pre>pathToYourApp</code> 为<code v-pre>github.com/marmotedu/gopractise-demo/cobra/newApp2</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go mod init github.com/marmotedu/gopractise-demo/cobra/newApp2
$ go build <span class="token parameter variable">-v</span> <span class="token builtin class-name">.</span>
$ ./newApp2 <span class="token parameter variable">-h</span>
A Fast and Flexible Static Site Generator built with
love by spf13 and friends <span class="token keyword">in</span> Go.
Complete documentation is available at http://hugo.spf13.com
 
Usage:
hugo <span class="token punctuation">[</span>flags<span class="token punctuation">]</span>
hugo <span class="token punctuation">[</span>command<span class="token punctuation">]</span>
 
Available Commands:
<span class="token builtin class-name">help</span> Help about any <span class="token builtin class-name">command</span>
version Print the version number of Hugo
 
Flags:
-a, <span class="token parameter variable">--author</span> string Author name <span class="token keyword">for</span> copyright attribution <span class="token punctuation">(</span>default <span class="token string">"YOUR NAME"</span><span class="token punctuation">)</span>
<span class="token parameter variable">--config</span> string config <span class="token function">file</span> <span class="token punctuation">(</span>default is <span class="token environment constant">$HOME</span>/.cobra.yaml<span class="token punctuation">)</span>
-h, <span class="token parameter variable">--help</span> <span class="token builtin class-name">help</span> <span class="token keyword">for</span> hugo
-l, <span class="token parameter variable">--license</span> licensetext Name of license <span class="token keyword">for</span> the project <span class="token punctuation">(</span>can provide licensetext <span class="token keyword">in</span> config<span class="token punctuation">)</span>
-b, <span class="token parameter variable">--projectbase</span> string base project directory eg. github.com/spf13/
<span class="token parameter variable">--viper</span> Use Viper <span class="token keyword">for</span> configuration <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
 
Use <span class="token string">"hugo [command] --help"</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过步骤一、步骤二、步骤三，我们就成功创建和添加了 Cobra 应用程序及其命令。</p>
<p>接下来，我再来详细介绍下 Cobra 的核心特性。</p>
<h3 id="使用标志-1" tabindex="-1"><a class="header-anchor" href="#使用标志-1" aria-hidden="true">#</a> 使用标志</h3>
<p>Cobra 可以跟 <code v-pre>Pflag</code> 结合使用，实现强大的标志功能。使用步骤如下：</p>
<h4 id="使用持久化的标志。" tabindex="-1"><a class="header-anchor" href="#使用持久化的标志。" aria-hidden="true">#</a> 使用持久化的标志。</h4>
<p>标志可以是 “持久的”，这意味着该标志可用于它所分配的命令以及该命令下的每个子命令。可以在 rootCmd 上定义持久标志：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BoolVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Verbose<span class="token punctuation">,</span> <span class="token string">"verbose"</span><span class="token punctuation">,</span> <span class="token string">"v"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"verbose output"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用本地标志" tabindex="-1"><a class="header-anchor" href="#使用本地标志" aria-hidden="true">#</a> 使用本地标志</h4>
<p>也可以分配一个本地标志，本地标志只能在它所绑定的命令上使用：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Source<span class="token punctuation">,</span> <span class="token string">"source"</span><span class="token punctuation">,</span> <span class="token string">"s"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"Source directory to read from"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>--source</code>标志只能在 rootCmd 上引用，而不能在 rootCmd 的子命令上引用。</p>
<h4 id="将标志绑定到-viper" tabindex="-1"><a class="header-anchor" href="#将标志绑定到-viper" aria-hidden="true">#</a> 将标志绑定到 Viper</h4>
<p>我们可以将标志绑定到 Viper，这样就可以使用 <code v-pre>viper.Get()</code> 获取标志的值。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> author <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>author<span class="token punctuation">,</span> <span class="token string">"author"</span><span class="token punctuation">,</span> <span class="token string">"YOUR NAME"</span><span class="token punctuation">,</span> <span class="token string">"Author name for copyright attribution"</span><span class="token punctuation">)</span>
  viper<span class="token punctuation">.</span><span class="token function">BindPFlag</span><span class="token punctuation">(</span><span class="token string">"author"</span><span class="token punctuation">,</span> rootCmd<span class="token punctuation">.</span><span class="token function">PersistentFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Lookup</span><span class="token punctuation">(</span><span class="token string">"author"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置标志为必选" tabindex="-1"><a class="header-anchor" href="#设置标志为必选" aria-hidden="true">#</a> 设置标志为必选</h4>
<p>默认情况下，标志是可选的，我们也可以设置标志为必选，当设置标志为必选，但是没有提供标志时，Cobra 会报错。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">StringVarP</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Region<span class="token punctuation">,</span> <span class="token string">"region"</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"AWS region (required)"</span><span class="token punctuation">)</span>
rootCmd<span class="token punctuation">.</span><span class="token function">MarkFlagRequired</span><span class="token punctuation">(</span><span class="token string">"region"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非选项参数验证" tabindex="-1"><a class="header-anchor" href="#非选项参数验证" aria-hidden="true">#</a> 非选项参数验证</h3>
<p>在命令的过程中，经常会传入非选项参数，并且需要对这些非选项参数进行验证，Cobra 提供了机制来对非选项参数进行验证。可以使用 Command 的 Args 字段来验证非选项参数。Cobra 也内置了一些验证函数：</p>
<ul>
<li>NoArgs：如果存在任何非选项参数，该命令将报错。</li>
<li>ArbitraryArgs：该命令将接受任何非选项参数。</li>
<li>OnlyValidArgs：如果有任何非选项参数不在 Command 的 ValidArgs 字段中，该命令将报错。</li>
<li>MinimumNArgs(int)：如果没有至少 N 个非选项参数，该命令将报错。</li>
<li>MaximumNArgs(int)：如果有多于 N 个非选项参数，该命令将报错。</li>
<li>ExactArgs(int)：如果非选项参数个数不为 N，该命令将报错。</li>
<li>ExactValidArgs(int)：如果非选项参数的个数不为 N，或者非选项参数不在 Command 的 ValidArgs 字段中，该命令将报错。</li>
<li>RangeArgs(min, max)：如果非选项参数的个数不在 min 和 max 之间，该命令将报错。</li>
</ul>
<p>使用预定义验证函数，示例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> cmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
  Short<span class="token punctuation">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span>
  Args<span class="token punctuation">:</span> cobra<span class="token punctuation">.</span><span class="token function">MinimumNArgs</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 使用内置的验证函数</span>
  Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然你也可以自定义验证函数，示例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> cmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
  Short<span class="token punctuation">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span>
  <span class="token comment">// Args: cobra.MinimumNArgs(10), // 使用内置的验证函数</span>
  Args<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span> <span class="token comment">// 自定义验证函数</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"requires at least one arg"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> myapp<span class="token punctuation">.</span><span class="token function">IsValidColor</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"invalid color specified: %s"</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prerun-and-postrun-hooks" tabindex="-1"><a class="header-anchor" href="#prerun-and-postrun-hooks" aria-hidden="true">#</a> PreRun and PostRun Hooks</h2>
<p>在运行 Run 函数时，我们可以运行一些钩子函数，比如 <code v-pre>PersistentPreRun</code> 和 <code v-pre>PreRun</code> 函数在 <code v-pre>Run</code> 函数之前执行，<code v-pre>PersistentPostRun</code> 和 <code v-pre>PostRun</code> 在 <code v-pre>Run</code> 函数之后执行。如果子命令没有指定<code v-pre>Persistent*Run</code>函数，则子命令将会继承父命令的<code v-pre>Persistent*Run</code>函数。这些函数的运行顺序如下：</p>
<ol>
<li>PersistentPreRun</li>
<li>PreRun</li>
<li>Run</li>
<li>PostRun</li>
<li>PersistentPostRun</li>
</ol>
<p>注意，父级的 PreRun 只会在父级命令运行时调用，子命令是不会调用的。</p>
<p>Cobra 还支持很多其他有用的特性，比如：自定义 Help 命令；可以自动添加<code v-pre>--version</code>标志，输出程序版本信息；当用户提供无效标志或无效命令时，Cobra 可以打印出 usage 信息；当我们输入的命令有误时，Cobra 会根据注册的命令，推算出可能的命令，等等。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在开发 Go 项目时，我们可以通过 Pflag 来解析命令行参数，通过 Viper 来解析配置文件，用 Cobra 来实现命令行框架。你可以通过 pflag.String()、 pflag.StringP()、pflag.StringVar()、pflag.StringVarP() 方法来设置命令行参数，并使用 <code v-pre>Get&lt;Type&gt;</code>来获取参数的值。</p>
<p>同时，你也可以使用 Viper 从命令行参数、环境变量、配置文件等位置读取配置项。最常用的是从配置文件中读取，可以通过 viper.AddConfigPath 来设置配置文件搜索路径，通过 viper.SetConfigFile 和 viper.SetConfigType 来设置配置文件名，通过 viper.ReadInConfig 来读取配置文件。读取完配置文件，然后在程序中使用 <code v-pre>Get/Get&lt;Type&gt;</code>来读取配置项的值。</p>
<p>最后，你可以使用 Cobra 来构建一个命令行框架，<strong>Cobra 可以很好地集成 Pflag 和 Viper。</strong></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '13.md' style='float:left'>⬆️上一节🔗  </a><a href = '15.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


