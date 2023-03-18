<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第28节-代码测试-上-如何编写-go-语言单元测试和性能测试用例" tabindex="-1"><a class="header-anchor" href="#第28节-代码测试-上-如何编写-go-语言单元测试和性能测试用例" aria-hidden="true">#</a> 第28节 代码测试（上）：如何编写 Go 语言单元测试和性能测试用例？</h1>
<br>
<div><a href = '27.md' style='float:left'>⬆️上一节🔗  </a><a href = '29.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#如何测试-go-代码">如何测试 Go 代码？</router-link></li><li><router-link to="#测试命名规范">测试命名规范</router-link><ul><li><router-link to="#测试文件的命名规范">测试文件的命名规范</router-link></li><li><router-link to="#包的命名规范">包的命名规范</router-link></li><li><router-link to="#函数的命名规范">函数的命名规范</router-link></li><li><router-link to="#变量的命名规范">变量的命名规范</router-link></li></ul></li><li><router-link to="#单元测试">单元测试</router-link><ul><li><router-link to="#多个输入的测试用例">多个输入的测试用例</router-link></li><li><router-link to="#自动生成单元测试用例">自动生成单元测试用例</router-link></li></ul></li><li><router-link to="#性能测试">性能测试</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>你好，我是孔令飞。</p>
<p>从今天开始，我们就进入了服务测试模块，这一模块主要介绍如何测试我们的Go项目。</p>
<p>在Go项目开发中，我们不仅要开发功能，更重要的是确保这些功能稳定可靠，并且拥有一个不错的性能。要确保这些，就要对代码进行测试。开发人员通常会进行单元测试和性能测试，分别用来测试代码的功能是否正常和代码的性能是否满足需求。</p>
<p>每种语言通常都有自己的测试包/模块，Go语言也不例外。在Go中，我们可以通过<code v-pre>testing</code>包对代码进行单元测试和性能测试。这一讲，我会用一些示例来讲解如何编写单元测试和性能测试用例，下一讲则会介绍如何编写其他的测试类型，并介绍 IAM 项目的测试用例。</p>
<h2 id="如何测试-go-代码" tabindex="-1"><a class="header-anchor" href="#如何测试-go-代码" aria-hidden="true">#</a> 如何测试 Go 代码？</h2>
<p>Go语言有自带的测试框架<code v-pre>testing</code>，可以用来实现单元测试（T类型）和性能测试（B类型），通过<code v-pre>go test</code>命令来执行单元测试和性能测试。</p>
<p>go test 执行测试用例时，是以go包为单位进行测试的。执行时需要指定包名，比如<code v-pre>go test 包名</code>，如果没有指定包名，默认会选择执行命令时所在的包。go test在执行时，会遍历以<code v-pre>_test.go</code>结尾的源码文件，执行其中以<code v-pre>Test</code>、<code v-pre>Benchmark</code>、<code v-pre>Example</code>开头的测试函数。</p>
<p>为了演示如何编写测试用例，我预先编写了4个函数。假设这些函数保存在test目录下的<code v-pre>math.go</code>文件中，包名为<code v-pre>test</code>，math.go代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"math"</span>
  <span class="token string">"math/rand"</span>
<span class="token punctuation">)</span>

<span class="token comment">// Abs returns the absolute value of x.</span>
<span class="token keyword">func</span> <span class="token function">Abs</span><span class="token punctuation">(</span>x <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> math<span class="token punctuation">.</span><span class="token function">Abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Max returns the larger of x or y.</span>
<span class="token keyword">func</span> <span class="token function">Max</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> math<span class="token punctuation">.</span><span class="token function">Max</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Min returns the smaller of x or y.</span>
<span class="token keyword">func</span> <span class="token function">Min</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> math<span class="token punctuation">.</span><span class="token function">Min</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// RandInt returns a non-negative pseudo-random int from the default Source.</span>
<span class="token keyword">func</span> <span class="token function">RandInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这一讲后面的内容中，我会演示如何编写测试用例，来对这些函数进行单元测试和性能测试。下面让我们先来看下测试命名规范。</p>
<h2 id="测试命名规范" tabindex="-1"><a class="header-anchor" href="#测试命名规范" aria-hidden="true">#</a> 测试命名规范</h2>
<p>在我们对Go代码进行测试时，需要编写测试文件、测试函数、测试变量，它们都需要遵循一定的规范。这些规范有些来自于官方，有些则来自于社区。这里，我分别来介绍下测试文件、包、测试函数和测试变量的命名规范。</p>
<h3 id="测试文件的命名规范" tabindex="-1"><a class="header-anchor" href="#测试文件的命名规范" aria-hidden="true">#</a> 测试文件的命名规范</h3>
<p>Go的测试文件名必须以<code v-pre>_test.go</code>结尾。例如，如果我们有一个名为<code v-pre>person.go</code>的文件，那它的测试文件必须命名为<code v-pre>person_test.go</code>。这样做是因为，Go需要区分哪些文件是测试文件。这些测试文件可以被go test命令行工具加载，用来测试我们编写的代码，但会被Go的构建程序忽略掉，因为Go程序的运行不需要这些测试代码。</p>
<h3 id="包的命名规范" tabindex="-1"><a class="header-anchor" href="#包的命名规范" aria-hidden="true">#</a> 包的命名规范</h3>
<p>Go的测试可以分为白盒测试和黑盒测试。</p>
<ul>
<li>**白盒测试：**将测试和生产代码放在同一个Go包中，这使我们可以同时测试Go包中可导出和不可导出的标识符。当我们编写的单元测试需要访问Go包中不可导出的变量、函数和方法时，就需要编写白盒测试用例。</li>
<li>**黑盒测试：**将测试和生产代码放在不同的Go包中。这时，我们仅可以测试Go包的可导出标识符。这意味着我们的测试包将无法访问生产代码中的任何内部函数、变量或常量。</li>
</ul>
<p>在白盒测试中，Go的测试包名称需要跟被测试的包名保持一致，例如：<code v-pre>person.go</code>定义了一个<code v-pre>person</code>包，则<code v-pre>person_test.go</code>的包名也要为<code v-pre>person</code>，这也意味着<code v-pre>person.go</code>和<code v-pre>person_test.go</code>都要在同一个目录中。</p>
<p>在黑盒测试中，Go的测试包名称需要跟被测试的包名不同，但仍然可以存放在同一个目录下。比如，<code v-pre>person.go</code>定义了一个<code v-pre>person</code>包，则<code v-pre>person_test.go</code>的包名需要跟<code v-pre>person</code>不同，通常我们命名为<code v-pre>person_test</code>。</p>
<p>如果不是需要使用黑盒测试，我们在做单元测试时要尽量使用白盒测试。一方面，这是go test工具的默认行为；另一方面，使用白盒测试，我们可以测试和使用不可导出的标识符。</p>
<p>测试文件和包的命名规范，由Go语言及go test工具来强制约束。</p>
<h3 id="函数的命名规范" tabindex="-1"><a class="header-anchor" href="#函数的命名规范" aria-hidden="true">#</a> 函数的命名规范</h3>
<p>测试用例函数必须以<code v-pre>Test</code>、<code v-pre>Benchmark</code>、<code v-pre>Example</code>开头，例如<code v-pre>TestXxx</code>、<code v-pre>BenchmarkXxx</code>、<code v-pre>ExampleXxx</code>，<code v-pre>Xxx</code>部分为任意字母数字的组合，首字母大写。这是由Go语言和go test工具来进行约束的，<code v-pre>Xxx</code>一般是需要测试的函数名。</p>
<p>除此之外，还有一些社区的约束，这些约束不是强制的，但是遵循这些约束会让我们的测试函数名更加易懂。例如，我们有以下函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  age  <span class="token builtin">int64</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">older</span><span class="token punctuation">(</span>other <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> p<span class="token punctuation">.</span>age <span class="token operator">></span> other<span class="token punctuation">.</span>age
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很显然，我们可以把测试函数命名为<code v-pre>TestOlder</code>，这个名称可以很清晰地说明它是<code v-pre>Older</code>函数的测试用例。但是，如果我们想用多个测试用例来测试<code v-pre>TestOlder</code>函数，这些测试用例该如何命名呢？也许你会说，我们命名为<code v-pre>TestOlder1</code>、<code v-pre>TestOlder2</code>不就行了？</p>
<p>其实，还有其他更好的命名方法。比如，这种情况下，我们可以将函数命名为<code v-pre>TestOlderXxx</code>，其中<code v-pre>Xxx</code>代表<code v-pre>Older</code>函数的某个场景描述。例如，<code v-pre>strings.Compare</code>函数有如下测试函数：<code v-pre>TestCompare</code>、<code v-pre>TestCompareIdenticalString</code>、<code v-pre>TestCompareStrings</code>。</p>
<h3 id="变量的命名规范" tabindex="-1"><a class="header-anchor" href="#变量的命名规范" aria-hidden="true">#</a> 变量的命名规范</h3>
<p>Go语言和go test没有对变量的命名做任何约束。但是，在编写单元测试用例时，还是有一些规范值得我们去遵守。</p>
<p>单元测试用例通常会有一个实际的输出，在单元测试中，我们会将预期的输出跟实际的输出进行对比，来判断单元测试是否通过。为了清晰地表达函数的实际输出和预期输出，可以将这两类输出命名为<code v-pre>expected/actual</code>，或者<code v-pre>got/want</code>。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> c.expected <span class="token operator">!=</span> actual <span class="token punctuation">{</span>
  t.Fatalf<span class="token punctuation">(</span><span class="token string">"Expected User-Agent '%s' does not match '%s'"</span>, c.expected, actual<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> got, want :<span class="token operator">=</span> diags<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>.Description<span class="token punctuation">(</span><span class="token punctuation">)</span>.Summary, undeclPlural<span class="token punctuation">;</span> got <span class="token operator">!=</span> want <span class="token punctuation">{</span>
  t.Errorf<span class="token punctuation">(</span><span class="token string">"wrong summary for diagnostic 3<span class="token entity" title="\n">\n</span>got:  %s<span class="token entity" title="\n">\n</span>want: %s"</span>, got, want<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他的变量命名，我们可以遵循Go语言推荐的变量命名方法，例如：</p>
<ul>
<li>Go中的变量名应该短而不是长，对于范围有限的局部变量来说尤其如此。</li>
<li>变量离声明越远，对名称的描述性要求越高。</li>
<li>像循环、索引之类的变量，名称可以是单个字母（i）。如果是不常见的变量和全局变量，变量名就需要具有更多的描述性。</li>
</ul>
<p>上面，我介绍了Go测试的一些基础知识。接下来，我们来看看如何编写单元测试用例和性能测试用例。</p>
<h2 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h2>
<p>单元测试用例函数以 <code v-pre>Test</code> 开头，例如 <code v-pre>TestXxx</code> 或 <code v-pre>Test_xxx</code> （ <code v-pre>Xxx</code> 部分为任意字母数字组合，首字母大写）。函数参数必须是 <code v-pre>\*testing.T\*</code>，可以使用该类型来记录错误或测试状态。</p>
<p><strong>我们可以调用 <code v-pre>testing.T</code> 的 <code v-pre>Error</code> 、<code v-pre>Errorf</code> 、<code v-pre>FailNow</code> 、<code v-pre>Fatal</code> 、<code v-pre>FatalIf</code> 方法，来说明测试不通过；调用 <code v-pre>Log</code> 、<code v-pre>Logf</code> 方法来记录测试信息。函数列表和相关描述如下表所示：</strong></p>
<p><img src="http://sm.nsddd.top/sm202303051034819.jpeg" alt="图片"></p>
<p><strong>下面的代码是两个简单的单元测试函数（函数位于文件<a href="https://github.com/marmotedu/gopractise-demo" target="_blank" rel="noopener noreferrer">math_test.go<ExternalLinkIcon/></a>中）：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestAbs</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    got <span class="token operator">:=</span> <span class="token function">Abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> got <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Abs(-1) = %f; want 1"</span><span class="token punctuation">,</span> got<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestMax</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    got <span class="token operator">:=</span> <span class="token function">Max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> got <span class="token operator">!=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Max(1, 2) = %f; want 2"</span><span class="token punctuation">,</span> got<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>执行<code v-pre>go test</code>命令来执行如上单元测试用例：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go test
PASS
ok      github.com/marmotedu/gopractise-demo/31/test    0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**<code v-pre>go test</code>命令自动搜集所有的测试文件，也就是格式为``*<code v-pre>_test.go</code>的文件，<strong>从中提取全部测试函数并执行</strong>。
**</p>
<p><strong>go test还支持下面三个参数。</strong></p>
<ul>
<li><strong>-v，显示所有测试函数的运行细节：</strong></li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go test -v
=== RUN   TestAbs
--- PASS: TestAbs (0.00s)
=== RUN   TestMax
--- PASS: TestMax (0.00s)
PASS
ok      github.com/marmotedu/gopractise-demo/31/test    0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>-run &lt; regexp&gt;，指定要执行的测试函数：</strong></li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>$ <span class="token keyword">go</span> test <span class="token operator">-</span>v <span class="token operator">-</span>run<span class="token operator">=</span><span class="token char">'TestA.*'</span>
<span class="token operator">==</span><span class="token operator">=</span> RUN   TestAbs
<span class="token operator">--</span><span class="token operator">-</span> PASS<span class="token punctuation">:</span> TestAbs <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>00s<span class="token punctuation">)</span>
PASS
ok      github<span class="token punctuation">.</span>com<span class="token operator">/</span>marmotedu<span class="token operator">/</span>gopractise<span class="token operator">-</span>demo<span class="token operator">/</span><span class="token number">31</span><span class="token operator">/</span>test    <span class="token number">0</span><span class="token punctuation">.</span>001s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，我们只运行了以<code v-pre>TestA</code>开头的测试函数。</p>
<ul>
<li><em>-count N，指定执行测试函数的次数：</em></li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>$ <span class="token keyword">go</span> test <span class="token operator">-</span>v <span class="token operator">-</span>run<span class="token operator">=</span><span class="token char">'TestA.*'</span> <span class="token operator">-</span>count<span class="token operator">=</span><span class="token number">2</span>
<span class="token operator">==</span><span class="token operator">=</span> RUN   TestAbs
<span class="token operator">--</span><span class="token operator">-</span> PASS<span class="token punctuation">:</span> TestAbs <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>00s<span class="token punctuation">)</span>
<span class="token operator">==</span><span class="token operator">=</span> RUN   TestAbs
<span class="token operator">--</span><span class="token operator">-</span> PASS<span class="token punctuation">:</span> TestAbs <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>00s<span class="token punctuation">)</span>
PASS
ok      github<span class="token punctuation">.</span>com<span class="token operator">/</span>marmotedu<span class="token operator">/</span>gopractise<span class="token operator">-</span>demo<span class="token operator">/</span><span class="token number">31</span><span class="token operator">/</span>test    <span class="token number">0</span><span class="token punctuation">.</span>002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个输入的测试用例" tabindex="-1"><a class="header-anchor" href="#多个输入的测试用例" aria-hidden="true">#</a> 多个输入的测试用例</h3>
<p>前面介绍的单元测试用例只有一个输入，但是很多时候，我们需要测试一个函数在多种不同输入下是否能正常返回。这时候，我们可以编写一个稍微复杂点的测试用例，用来支持多输入下的用例测试。例如，我们可以将<code v-pre>TestAbs</code>改造成如下函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestAbs_2</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        x    <span class="token builtin">float64</span>
        want <span class="token builtin">float64</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">3.1</span><span class="token punctuation">,</span> <span class="token number">3.1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
        <span class="token keyword">if</span> got <span class="token operator">:=</span> <span class="token function">Abs</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> got <span class="token operator">!=</span> tt<span class="token punctuation">.</span>want <span class="token punctuation">{</span>
            t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Abs() = %f, want %v"</span><span class="token punctuation">,</span> got<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>want<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试用例函数中，我们定义了一个结构体数组，数组中的每一个元素代表一次测试用例。数组元素的的值包含输入和预期的返回值：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
    x    <span class="token builtin">float64</span>
    want <span class="token builtin">float64</span>
<span class="token punctuation">}</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">3.1</span><span class="token punctuation">,</span> <span class="token number">3.1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述测试用例，将被测函数放在for循环中执行：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
   <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
        <span class="token keyword">if</span> got <span class="token operator">:=</span> <span class="token function">Abs</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> got <span class="token operator">!=</span> tt<span class="token punctuation">.</span>want <span class="token punctuation">{</span>
            t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Abs() = %f, want %v"</span><span class="token punctuation">,</span> got<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>want<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码将输入传递给被测函数，并将被测函数的返回值跟预期的返回值进行比较。如果相等，则说明此次测试通过，如果不相等则说明此次测试不通过。通过这种方式，我们就可以在一个测试用例中，测试不同的输入和输出，也就是不同的测试用例。如果要新增一个测试用例，根据需要添加输入和预期的返回值就可以了，这些测试用例都共享其余的测试代码。</p>
<p>上面的测试用例中，我们通过<code v-pre>got != tt.want</code>来对比实际返回结果和预期返回结果。我们也可以使用<code v-pre>github.com/stretchr/testify/assert</code>包中提供的函数来做结果对比，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestAbs_3</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        x    <span class="token builtin">float64</span>
        want <span class="token builtin">float64</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">3.1</span><span class="token punctuation">,</span> <span class="token number">3.1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
        got <span class="token operator">:=</span> <span class="token function">Abs</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
        assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> got<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>want<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>assert</code>来对比结果，有下面这些好处：</p>
<ul>
<li>友好的输出结果，易于阅读。</li>
<li>因为少了<code v-pre>if got := Xxx(); got != tt.wang {}</code>的判断，代码变得更加简洁。</li>
<li>可以针对每次断言，添加额外的消息说明，例如<code v-pre>assert.Equal(t, got, tt.want, &quot;Abs test&quot;)</code>。</li>
</ul>
<p>assert包还提供了很多其他函数，供开发者进行结果对比，例如<code v-pre>Zero</code>、<code v-pre>NotZero</code>、<code v-pre>Equal</code>、<code v-pre>NotEqual</code>、<code v-pre>Less</code>、<code v-pre>True</code>、<code v-pre>Nil</code>、<code v-pre>NotNil</code>等。如果想了解更多函数，你可以参考<code v-pre>go doc github.com/stretchr/testify/assert</code>。</p>
<h3 id="自动生成单元测试用例" tabindex="-1"><a class="header-anchor" href="#自动生成单元测试用例" aria-hidden="true">#</a> 自动生成单元测试用例</h3>
<p>通过上面的学习，你也许可以发现，测试用例其实可以抽象成下面的模型：</p>
<p><img src="http://sm.nsddd.top/sm202303051037196.jpeg" alt="图片"></p>
<p><strong>用代码可表示为：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestXxx</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">type</span> args <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO: Add function input parameter definition.</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">type</span> want <span class="token keyword">struct</span> <span class="token punctuation">{</span>
         <span class="token comment">// TODO: Add function return parameter definition.</span>
    <span class="token punctuation">}</span>
    tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name <span class="token builtin">string</span>
        args args
        want want
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token comment">// TODO: Add test cases.</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> got <span class="token operator">:=</span> <span class="token function">Xxx</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span> got <span class="token operator">!=</span> tt<span class="token punctuation">.</span>want <span class="token punctuation">{</span>
                t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Xxx() = %v, want %v"</span><span class="token punctuation">,</span> got<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>want<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">TestXxx</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">type</span> args <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO: Add function input parameter definition.</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">type</span> want <span class="token keyword">struct</span> <span class="token punctuation">{</span>
         <span class="token comment">// TODO: Add function return parameter definition.</span>
    <span class="token punctuation">}</span>
    tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name <span class="token builtin">string</span>
        args args
        want want
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token comment">// TODO: Add test cases.</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> got <span class="token operator">:=</span> <span class="token function">Xxx</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span> got <span class="token operator">!=</span> tt<span class="token punctuation">.</span>want <span class="token punctuation">{</span>
                t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Xxx() = %v, want %v"</span><span class="token punctuation">,</span> got<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>want<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既然测试用例可以抽象成一些模型，那么我们就可以基于这些模型来自动生成测试代码。Go社区中有一些优秀的工具可以自动生成测试代码，我推荐你使用<a href="https://github.com/cweill/gotests" target="_blank" rel="noopener noreferrer">gotests<ExternalLinkIcon/></a>工具。</p>
<p>下面，我来讲讲gotests工具的使用方法，可以分成三个步骤。</p>
<p>第一步，安装gotests工具：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go get <span class="token parameter variable">-u</span> github.com/cweill/gotests/<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>gotests命令执行格式为：<code v-pre>gotests [options] [PATH] [FILE] ...</code>。gotests可以为<code v-pre>PATH</code>下的所有Go源码文件中的函数生成测试代码，也可以只为某个<code v-pre>FILE</code>中的函数生成测试代码。</p>
<p>第二步，进入测试代码目录，执行gotests生成测试用例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ gotests <span class="token parameter variable">-all</span> <span class="token parameter variable">-w</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会为当前目录下所有Go源码文件中的函数生成测试代码。</p>
<p>第三步，添加测试用例：</p>
<p>生成完测试用例，你只需要添加需要测试的输入和预期的输出就可以了。下面的测试用例是通过gotests生成的：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestUnpointer</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">type</span> args <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        offset <span class="token operator">*</span><span class="token builtin">int64</span>
        limit  <span class="token operator">*</span><span class="token builtin">int64</span>
    <span class="token punctuation">}</span>
    tests <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name <span class="token builtin">string</span>
        args args
        want <span class="token operator">*</span>LimitAndOffset
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token comment">// TODO: Add test cases.</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> tt <span class="token operator">:=</span> <span class="token keyword">range</span> tests <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> got <span class="token operator">:=</span> <span class="token function">Unpointer</span><span class="token punctuation">(</span>tt<span class="token punctuation">.</span>args<span class="token punctuation">.</span>offset<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>args<span class="token punctuation">.</span>limit<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">!</span>reflect<span class="token punctuation">.</span><span class="token function">DeepEqual</span><span class="token punctuation">(</span>got<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>want<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Unpointer() = %v, want %v"</span><span class="token punctuation">,</span> got<span class="token punctuation">,</span> tt<span class="token punctuation">.</span>want<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>我们只需要补全<code v-pre>TODO</code>位置的测试数据即可，补全后的测试用例见<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/pkg/util/gormutil/gorm_test.go" target="_blank" rel="noopener noreferrer">gorm_test.go<ExternalLinkIcon/></a>文件。</em></p>
<h2 id="性能测试" tabindex="-1"><a class="header-anchor" href="#性能测试" aria-hidden="true">#</a> 性能测试</h2>
<p>上面，我讲了用来测试代码的功能是否正常的单元测试，接下来我们来看下性能测试，它是用来测试代码的性能是否满足需求的。</p>
<p>性能测试的用例函数必须以<code v-pre>Benchmark</code>开头，例如<code v-pre>BenchmarkXxx</code>或<code v-pre>Benchmark_Xxx</code>（ <code v-pre>Xxx</code> 部分为任意字母数字组合，首字母大写）。</p>
<p>函数参数必须是<code v-pre>\*testing.B\*</code>，函数内以<code v-pre>b.N</code>作为循环次数，其中<code v-pre>N</code>会在运行时动态调整，直到性能测试函数可以持续足够长的时间，以便能够可靠地计时。下面的代码是一个简单的性能测试函数（函数位于文件<a href="https://github.com/marmotedu/gopractise-demo/blob/master/test/math_test.go" target="_blank" rel="noopener noreferrer">math_test.go<ExternalLinkIcon/></a>中）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func BenchmarkRandInt(b *testing.B) {
    for i := 0; i &lt; b.N; i++ {
        RandInt()
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>go test</code>命令默认不会执行性能测试函数，需要通过指定参数<code v-pre>-bench &lt;pattern&gt;</code>来运行性能测试函数。<code v-pre>-bench</code>后可以跟正则表达式，选择需要执行的性能测试函数，例如<code v-pre>go test -bench=&quot;.*&quot;</code>表示执行所有的压力测试函数。执行<code v-pre>go test -bench=&quot;.</code>*<code v-pre>&quot;</code>后输出如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">".*"</span>
goos: linux
goarch: amd64
pkg: github.com/marmotedu/gopractise-demo/31/test
BenchmarkRandInt-4      <span class="token number">97384827</span>                <span class="token number">12.4</span> ns/op
PASS
ok      github.com/marmotedu/gopractise-demo/31/test    <span class="token number">1</span>.223s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的结果只显示了性能测试函数的执行结果。<code v-pre>BenchmarkRandInt</code>性能测试函数的执行结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>BenchmarkRandInt-4   	<span class="token number">90848414</span>	        <span class="token number">12.8</span> ns/op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每个函数的性能执行结果一共有3列，分别代表不同的意思，这里用上面的函数举例子：</p>
<ul>
<li><code v-pre>BenchmarkRandInt-4</code>，<code v-pre>BenchmarkRandInt</code>表示所测试的测试函数名，4表示有4个CPU线程参与了此次测试，默认是<code v-pre>GOMAXPROCS</code>的值。</li>
<li><code v-pre>90848414</code> ，说明函数中的循环执行了<code v-pre>90848414</code>次。</li>
<li><code v-pre>12.8 ns/op</code>，说明每次循环的执行平均耗时是 <code v-pre>12.8</code> 纳秒，该值越小，说明代码性能越高。</li>
</ul>
<p>如果我们的性能测试函数在执行循环前，需要做一些耗时的准备工作，我们就需要重置性能测试时间计数，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">BenchmarkBigLen</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    big <span class="token operator">:=</span> <span class="token function">NewBig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span><span class="token function">ResetTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        big<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们也可以先停止性能测试的时间计数，然后再开始时间计数，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">BenchmarkBigLen</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  b<span class="token punctuation">.</span><span class="token function">StopTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用该函数停止压力测试的时间计数</span>
  big <span class="token operator">:=</span> <span class="token function">NewBig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  b<span class="token punctuation">.</span><span class="token function">StartTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 重新开始时间</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    big<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B类型的性能测试还支持下面 4 个参数。</p>
<ul>
<li>benchmem，输出内存分配统计：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">".*"</span> <span class="token parameter variable">-benchmem</span>
goos: linux
goarch: amd64
pkg: github.com/marmotedu/gopractise-demo/31/test
BenchmarkRandInt-4      <span class="token number">96776823</span>                <span class="token number">12.8</span> ns/op             <span class="token number">0</span> B/op          <span class="token number">0</span> allocs/op
PASS
ok      github.com/marmotedu/gopractise-demo/31/test    <span class="token number">1</span>.255s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定了<code v-pre>-benchmem</code>参数后，执行结果中又多了两列： 0 B/op，表示每次执行分配了多少内存（字节），该值越小，说明代码内存占用越小；0 allocs/op，表示每次执行分配了多少次内存，该值越小，说明分配内存次数越少，意味着代码性能越高。</p>
<ul>
<li>benchtime，指定测试时间和循环执行次数（格式需要为Nx，例如100x）：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">".*"</span> <span class="token parameter variable">-benchtime</span><span class="token operator">=</span>10s <span class="token comment"># 指定测试时间</span>
goos: linux
goarch: amd64
pkg: github.com/marmotedu/gopractise-demo/31/test
BenchmarkRandInt-4      <span class="token number">910328618</span>               <span class="token number">13.1</span> ns/op
PASS
ok      github.com/marmotedu/gopractise-demo/31/test    <span class="token number">13</span>.260s
$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">".*"</span> <span class="token parameter variable">-benchtime</span><span class="token operator">=</span>100x <span class="token comment"># 指定循环执行次数</span>
goos: linux
goarch: amd64
pkg: github.com/marmotedu/gopractise-demo/31/test
BenchmarkRandInt-4           <span class="token number">100</span>                <span class="token number">16.9</span> ns/op
PASS
ok      github.com/marmotedu/gopractise-demo/31/test    <span class="token number">0</span>.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>cpu，指定GOMAXPROCS。</li>
<li>timeout，指定测试函数执行的超时时间：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-bench</span><span class="token operator">=</span><span class="token string">".*"</span> <span class="token parameter variable">-timeout</span><span class="token operator">=</span>10s
goos: linux
goarch: amd64
pkg: github.com/marmotedu/gopractise-demo/31/test
BenchmarkRandInt-4      <span class="token number">97375881</span>                <span class="token number">12.4</span> ns/op
PASS
ok      github.com/marmotedu/gopractise-demo/31/test    <span class="token number">1</span>.224s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>代码开发完成之后，我们需要为代码编写单元测试用例，并根据需要，给一些函数编写性能测试用例。Go语言提供了 <code v-pre>testing</code> 包，供我们编写测试用例，并通过 <code v-pre>go test</code> 命令来执行这些测试用例。</p>
<p>go test在执行测试用例时，会查找具有固定格式的Go源码文件名，并执行其中具有固定格式的函数，这些函数就是测试用例。这就要求我们的测试文件名、函数名要符合 <code v-pre>go test</code> 工具的要求：Go的测试文件名必须以 <code v-pre>_test.go</code> 结尾；测试用例函数必须以 <code v-pre>Test</code> 、 <code v-pre>Benchmark</code> 、 <code v-pre>Example</code> 开头。此外，我们在编写测试用例时，还要注意包和变量的命名规范。</p>
<p>Go项目开发中，编写得最多的是单元测试用例。单元测试用例函数以 <code v-pre>Test</code> 开头，例如 <code v-pre>TestXxx</code> 或 <code v-pre>Test_xxx</code> （<code v-pre>Xxx</code> 部分为任意字母数字组合，首字母大写）。函数参数必须是 <code v-pre>*testing.T</code> ，可以使用该类型来记录错误或测试状态。我们可以调用 <code v-pre>testing.T</code> 的 <code v-pre>Error</code> 、<code v-pre>Errorf</code> 、<code v-pre>FailNow</code> 、<code v-pre>Fatal</code> 、<code v-pre>FatalIf</code> 方法，来说明测试不通过；调用 <code v-pre>Log</code> 、<code v-pre>Logf</code> 方法来记录测试信息。</p>
<p>下面是一个简单的单元测试函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestAbs</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    got <span class="token operator">:=</span> <span class="token function">Abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> got <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Abs(-1) = %f; want 1"</span><span class="token punctuation">,</span> got<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写完测试用例之后，可以使用 <code v-pre>go test</code> 命令行工具来执行这些测试用例。
此外，我们还可以使用<a href="https://github.com/cweill/gotests" target="_blank" rel="noopener noreferrer">gotests<ExternalLinkIcon/></a>工具，来自动地生成单元测试用例，从而减少编写测试用例的工作量。</p>
<p>我们在Go项目开发中，还经常需要编写性能测试用例。性能测试用例函数必须以<code v-pre>Benchmark</code>开头，以<code v-pre>*testing.B</code> 作为函数入参，通过 <code v-pre>go test -bench &lt;pattern&gt;</code> 运行。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>编写一个 <code v-pre>PrintHello</code> 函数，该函数会返回 <code v-pre>Hello World</code> 字符串，并编写单元测试用例，对 <code v-pre>PrintHello</code> 函数进行测试。</li>
<li>思考一下，哪些场景下采用白盒测试，哪些场景下采用黑盒测试？</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '27.md' style='float:left'>⬆️上一节🔗  </a><a href = '29.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


