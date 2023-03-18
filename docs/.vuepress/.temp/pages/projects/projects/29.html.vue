<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第29节-代码测试-下-go-语言其他测试类型及-iam-测试介绍" tabindex="-1"><a class="header-anchor" href="#第29节-代码测试-下-go-语言其他测试类型及-iam-测试介绍" aria-hidden="true">#</a> 第29节 代码测试（下）：Go 语言其他测试类型及 IAM 测试介绍</h1>
<br>
<div><a href = '28.md' style='float:left'>⬆️上一节🔗  </a><a href = '30.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#示例测试">示例测试</router-link><ul><li><router-link to="#示例测试命名规范">示例测试命名规范</router-link></li><li><router-link to="#大型示例">大型示例</router-link></li></ul></li><li><router-link to="#testmain函数">TestMain函数</router-link></li><li><router-link to="#mock测试">Mock测试</router-link><ul><li><router-link to="#安装gomock">安装GoMock</router-link></li><li><router-link to="#mockgen工具介绍">mockgen工具介绍</router-link></li><li><router-link to="#通过注释使用mockgen">通过注释使用mockgen</router-link></li><li><router-link to="#使用mock代码编写单元测试用例">使用Mock代码编写单元测试用例</router-link></li></ul></li><li><router-link to="#fake测试">Fake测试</router-link></li><li><router-link to="#何时编写和执行单元测试用例">何时编写和执行单元测试用例？</router-link><ul><li><router-link to="#编码前-tdd">编码前：TDD</router-link></li><li><router-link to="#与编码同步进行-增量">与编码同步进行：增量</router-link></li><li><router-link to="#编码后-存量">编码后：存量</router-link></li></ul></li><li><router-link to="#测试覆盖率">测试覆盖率</router-link></li><li><router-link to="#iam项目测试实战">IAM项目测试实战</router-link><ul><li><router-link to="#iam项目是如何运行测试用例的">IAM项目是如何运行测试用例的？</router-link></li><li><router-link to="#iam项目测试案例分享">IAM项目测试案例分享</router-link></li></ul></li><li><router-link to="#其他测试工具-包">其他测试工具/包</router-link><ul><li><router-link to="#测试框架">测试框架</router-link></li><li><router-link to="#mock工具">Mock工具</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后习题">课后习题</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<p><a href="https://time.geekbang.org/column/article/408529" target="_blank" rel="noopener noreferrer">上一讲<ExternalLinkIcon/></a>，我介绍了Go中的两类测试：单元测试和性能测试。在Go中，还有一些其他的测试类型和测试方法，值得我们去了解和掌握。此外，IAM项目也编写了大量测试用例，这些测试用例使用了不同的编写方法，你可以通过学习IAM的测试用例来验证你学到的测试知识。</p>
<p>今天，我就来介绍下Go 语言中的其他测试类型：示例测试、TestMain函数、Mock测试、Fake测试等，并且介绍下IAM项目是如何编写和运行测试用例的。</p>
<h2 id="示例测试" tabindex="-1"><a class="header-anchor" href="#示例测试" aria-hidden="true">#</a> 示例测试</h2>
<p>示例测试以<code v-pre>Example</code>开头，没有输入和返回参数，通常保存在<code v-pre>example_test.go</code>文件中。示例测试可能包含以<code v-pre>Output:</code>或者<code v-pre>Unordered output:</code>开头的注释，这些注释放在函数的结尾部分。<code v-pre>Unordered output:</code>开头的注释会忽略输出行的顺序。</p>
<p>执行<code v-pre>go test</code>命令时，会执行这些示例测试，并且go test会将示例测试输出到标准输出的内容，跟注释作对比（比较时将忽略行前后的空格）。如果相等，则示例测试通过测试；如果不相等，则示例测试不通过测试。下面是一个示例测试（位于example_test.go文件中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleMax</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">Max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行go test命令，测试<code v-pre>ExampleMax</code>示例测试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-run</span><span class="token operator">=</span><span class="token string">'Example.*'</span>
<span class="token operator">==</span><span class="token operator">=</span> RUN   ExampleMax
--- PASS: ExampleMax <span class="token punctuation">(</span><span class="token number">0</span>.00s<span class="token punctuation">)</span>
PASS
ok      github.com/marmotedu/gopractise-demo/31/test    <span class="token number">0</span>.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到<code v-pre>ExampleMax</code>测试通过。这里测试通过是因为<code v-pre>fmt.Println(Max(1, 2))</code>向标准输出输出了<code v-pre>2</code>，跟<code v-pre>// Output:</code>后面的<code v-pre>2</code>一致。</p>
<p>当示例测试不包含<code v-pre>Output:</code>或者<code v-pre>Unordered output:</code>注释时，执行<code v-pre>go test</code>只会编译这些函数，但不会执行这些函数。</p>
<h3 id="示例测试命名规范" tabindex="-1"><a class="header-anchor" href="#示例测试命名规范" aria-hidden="true">#</a> 示例测试命名规范</h3>
<p>示例测试需要遵循一些命名规范，因为只有这样，Godoc才能将示例测试和包级别的标识符进行关联。例如，有以下示例测试（位于example_test.go文件中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> stringutil_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>

    <span class="token string">"github.com/golang/example/stringutil"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">ExampleReverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>stringutil<span class="token punctuation">.</span><span class="token function">Reverse</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// Output: olleh</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Godoc将在<code v-pre>Reverse</code>函数的文档旁边提供此示例，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051046879.png" alt="图片"></p>
<p>示例测试名以<code v-pre>Example</code>开头，后面可以不跟任何字符串，也可以跟函数名、类型名或者<code v-pre>类型_方法名</code>，中间用下划线<code v-pre>_</code>连接，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// 代表了整个包的示例</span>
<span class="token keyword">func</span> <span class="token function">ExampleF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// 函数F的示例</span>
<span class="token keyword">func</span> <span class="token function">ExampleT</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// 类型T的示例</span>
<span class="token keyword">func</span> <span class="token function">ExampleT_M</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// 方法T_M的示例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当某个函数/类型/方法有多个示例测试时，可以通过后缀来区分，后缀必须以小写字母开头，例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func ExampleReverse()
func ExampleReverse_second()
func ExampleReverse_third()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="大型示例" tabindex="-1"><a class="header-anchor" href="#大型示例" aria-hidden="true">#</a> 大型示例</h3>
<p>有时候，我们需要编写一个大型的示例测试，这时候我们可以编写一个整文件的示例（whole file example），它有这几个特点：文件名以<code v-pre>_test.go</code>结尾；只包含一个示例测试，文件中没有单元测试函数和性能测试函数；至少包含一个包级别的声明；当展示这类示例测试时，godoc会直接展示整个文件。例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> sort_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"sort"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%s: %d"</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>Age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ByAge implements sort.Interface for []Person based on</span>
<span class="token comment">// the Age field.</span>
<span class="token keyword">type</span> ByAge <span class="token punctuation">[</span><span class="token punctuation">]</span>Person

<span class="token keyword">func</span> <span class="token punctuation">(</span>a ByAge<span class="token punctuation">)</span> <span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>           <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a ByAge<span class="token punctuation">)</span> <span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span>      <span class="token punctuation">{</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a ByAge<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Age <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>Age <span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    people <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Person<span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token string">"Bob"</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">"Michael"</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">"Jenny"</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>
    sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span><span class="token function">ByAge</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span>

    <span class="token comment">// Output:</span>
    <span class="token comment">// [Bob: 31 John: 42 Michael: 17 Jenny: 26]</span>
    <span class="token comment">// [Michael: 17 Jenny: 26 Bob: 31 John: 42]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个包可以包含多个whole file example，一个示例一个文件，例如<code v-pre>example_interface_test.go</code>、<code v-pre>example_keys_test.go</code>、<code v-pre>example_search_test.go</code>等。</p>
<h2 id="testmain函数" tabindex="-1"><a class="header-anchor" href="#testmain函数" aria-hidden="true">#</a> TestMain函数</h2>
<p>有时候，我们在做测试的时候，可能会在测试之前做些准备工作，例如创建数据库连接等；在测试之后做些清理工作，例如关闭数据库连接、清理测试文件等。这时，我们可以在<code v-pre>\*test.go\*</code>文件中添加<code v-pre>TestMain</code>函数，其入参为<code v-pre>\*testing.M</code>。**</p>
<p><code v-pre>TestMain</code>是一个特殊的函数（相当于main函数），测试用例在执行时，会先执行<code v-pre>TestMain</code>函数，然后可以在<code v-pre>TestMain</code>中调用<code v-pre>m.Run()</code>函数执行普通的测试函数。在<code v-pre>m.Run()</code>函数前面我们可以编写准备逻辑，在<code v-pre>m.Run()</code>后面我们可以编写清理逻辑。</p>
<p>我们在示例测试文件<a href="https://github.com/marmotedu/gopractise-demo/blob/master/test/math_test.go" target="_blank" rel="noopener noreferrer">math_test.go<ExternalLinkIcon/></a>中添加如下TestMain函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestMain</span><span class="token punctuation">(</span>m <span class="token operator">*</span>testing<span class="token punctuation">.</span>M<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"do some setup"</span><span class="token punctuation">)</span>
    m<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"do some cleanup"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>执行go test，输出如下：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>$ <span class="token keyword">go</span> test <span class="token operator">-</span>v
do some setup
<span class="token operator">==</span><span class="token operator">=</span> RUN   TestAbs
<span class="token operator">--</span><span class="token operator">-</span> PASS<span class="token punctuation">:</span> TestAbs <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>00s<span class="token punctuation">)</span>
<span class="token operator">...</span>
<span class="token operator">==</span><span class="token operator">=</span> RUN   ExampleMax
<span class="token operator">--</span><span class="token operator">-</span> PASS<span class="token punctuation">:</span> ExampleMax <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>00s<span class="token punctuation">)</span>
PASS
do some cleanup
ok    github<span class="token punctuation">.</span>com<span class="token operator">/</span>marmotedu<span class="token operator">/</span>gopractise<span class="token operator">-</span>demo<span class="token operator">/</span><span class="token number">31</span><span class="token operator">/</span>test  <span class="token number">0</span><span class="token punctuation">.</span>006s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行测试用例之前，打印了<code v-pre>do some setup</code>，在测试用例运行完成之后，打印了<code v-pre>do some cleanup</code>。</p>
<p>IAM项目的测试用例中，使用TestMain函数在执行测试用例前连接了一个fake数据库，代码如下（位于<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/service/v1/user_test.go" target="_blank" rel="noopener noreferrer">internal/apiserver/service/v1/user_test.go<ExternalLinkIcon/></a>文件中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestMain</span><span class="token punctuation">(</span>m <span class="token operator">*</span>testing<span class="token punctuation">.</span>M<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fakeStore<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> fake<span class="token punctuation">.</span><span class="token function">NewFakeStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    store<span class="token punctuation">.</span><span class="token function">SetClient</span><span class="token punctuation">(</span>fakeStore<span class="token punctuation">)</span>
    os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单元测试、性能测试、示例测试、TestMain函数是go test支持的测试类型。此外，为了测试在函数内使用了Go Interface的函数，我们还延伸出了Mock测试和Fake测试两种测试类型。</p>
<h2 id="mock测试" tabindex="-1"><a class="header-anchor" href="#mock测试" aria-hidden="true">#</a> Mock测试</h2>
<p>一般来说，单元测试中是不允许有外部依赖的，那么也就是说，这些外部依赖都需要被模拟。在Go中，一般会借助各类Mock工具来模拟一些依赖。</p>
<p>GoMock是由Golang官方开发维护的测试框架，实现了较为完整的基于interface的Mock功能，能够与Golang内置的testing包良好集成，也能用于其他的测试环境中。GoMock测试框架包含了GoMock包和mockgen工具两部分，其中GoMock包用来完成对象生命周期的管理，mockgen工具用来生成interface对应的Mock类源文件。下面，我来分别详细介绍下GoMock包和mockgen工具，以及它们的使用方法。</p>
<h3 id="安装gomock" tabindex="-1"><a class="header-anchor" href="#安装gomock" aria-hidden="true">#</a> <strong>安装GoMock</strong></h3>
<p><strong>要使用GoMock，首先需要安装GoMock包和mockgen工具，安装方法如下:</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go get github.com/golang/mock/gomock
$ go <span class="token function">install</span> github.com/golang/mock/mockgen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面，我通过一个获取当前Golang最新版本的例子，来给你演示下如何使用GoMock。示例代码目录结构如下（目录下的代码见<a href="https://github.com/marmotedu/gopractise-demo/tree/master/gomock" target="_blank" rel="noopener noreferrer">gomock<ExternalLinkIcon/></a>）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tree .
.
├── go_version.go
├── main.go
└── spider
    └── spider.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>spider.go</code>文件中定义了一个<code v-pre>Spider</code>接口，<code v-pre>spider.go</code>代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> spider

<span class="token keyword">type</span> Spider <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">GetBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Spider</code>接口中的GetBody方法可以抓取<code v-pre>https://golang.org</code>首页的<code v-pre>Build version</code>字段，来获取Golang的最新版本。</p>
<p>我们在<code v-pre>go_version.go</code>文件中，调用<code v-pre>Spider</code>接口的<code v-pre>GetBody</code>方法，<code v-pre>go_version.go</code>代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> gomock

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"github.com/marmotedu/gopractise-demo/gomock/spider"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">GetGoVersion</span><span class="token punctuation">(</span>s spider<span class="token punctuation">.</span>Spider<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    body <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">GetBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> body
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>GetGoVersion</code>函数直接返回表示版本的字符串。正常情况下，我们会写出如下的单元测试代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestGetGoVersion</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    v <span class="token operator">:=</span> <span class="token function">GetGoVersion</span><span class="token punctuation">(</span>spider<span class="token punctuation">.</span><span class="token function">CreateGoVersionSpider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> v <span class="token operator">!=</span> <span class="token string">"go1.8.3"</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"Get wrong version %s"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的测试代码，依赖<code v-pre>spider.CreateGoVersionSpider()</code>返回一个实现了<code v-pre>Spider</code>接口的实例（爬虫）。但很多时候，<code v-pre>spider.CreateGoVersionSpider()</code>爬虫可能还没有实现，或者在单元测试环境下不能运行（比如，在单元测试环境中连接数据库），这时候<code v-pre>TestGetGoVersion</code>测试用例就无法执行。</p>
<p>那么，如何才能在这种情况下运行<code v-pre>TestGetGoVersion</code>测试用例呢？这时候，我们就可以通过Mock工具，Mock一个爬虫实例。接下来我讲讲具体操作。</p>
<p>首先，用 GoMock 提供的mockgen工具，生成要 Mock 的接口的实现，我们在gomock目录下执行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ mockgen <span class="token parameter variable">-destination</span> spider/mock/mock_spider.go <span class="token parameter variable">-package</span> spider github.com/marmotedu/gopractise-demo/gomock/spider Spider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会在<code v-pre>spider/mock</code>目录下生成<code v-pre>mock_spider.go</code>文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ tree <span class="token builtin class-name">.</span>
<span class="token builtin class-name">.</span>
├── go_version.go
├── go_version_test.go
├── go_version_test_traditional_method.go~
└── spider
    ├── mock
    │   └── mock_spider.go
    └── spider.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>mock_spider.go</code>文件中，定义了一些函数/方法，可以支持我们编写<code v-pre>TestGetGoVersion</code>测试函数。这时候，我们的单元测试代码如下（见<a href="https://github.com/marmotedu/gopractise-demo/blob/master/gomock/go_version_test.go" target="_blank" rel="noopener noreferrer">go_version_test.go<ExternalLinkIcon/></a>文件）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> gomock

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"testing"</span>

  <span class="token string">"github.com/golang/mock/gomock"</span>

  spider <span class="token string">"github.com/marmotedu/gopractise-demo/gomock/spider/mock"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestGetGoVersion</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctrl <span class="token operator">:=</span> gomock<span class="token punctuation">.</span><span class="token function">NewController</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
  <span class="token keyword">defer</span> ctrl<span class="token punctuation">.</span><span class="token function">Finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  mockSpider <span class="token operator">:=</span> spider<span class="token punctuation">.</span><span class="token function">NewMockSpider</span><span class="token punctuation">(</span>ctrl<span class="token punctuation">)</span>
  mockSpider<span class="token punctuation">.</span><span class="token function">EXPECT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Return</span><span class="token punctuation">(</span><span class="token string">"go1.8.3"</span><span class="token punctuation">)</span>
  goVer <span class="token operator">:=</span> <span class="token function">GetGoVersion</span><span class="token punctuation">(</span>mockSpider<span class="token punctuation">)</span>

  <span class="token keyword">if</span> goVer <span class="token operator">!=</span> <span class="token string">"go1.8.3"</span> <span class="token punctuation">{</span>
    t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"Get wrong version %s"</span><span class="token punctuation">,</span> goVer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一版本的<code v-pre>TestGetGoVersion</code>通过GoMock， Mock了一个<code v-pre>Spider</code>接口，而不用去实现一个<code v-pre>Spider</code>接口。这就大大降低了单元测试用例编写的复杂度。通过Mock，很多不能测试的函数也变得可测试了。</p>
<p>通过上面的测试用例，我们可以看到，GoMock 和<a href="https://time.geekbang.org/column/article/408529" target="_blank" rel="noopener noreferrer">上一讲<ExternalLinkIcon/></a>介绍的testing单元测试框架可以紧密地结合起来工作。</p>
<h3 id="mockgen工具介绍" tabindex="-1"><a class="header-anchor" href="#mockgen工具介绍" aria-hidden="true">#</a> mockgen工具介绍</h3>
<p>上面，我介绍了如何使用 GoMock 编写单元测试用例。其中，我们使用到了<code v-pre>mockgen</code>工具来生成 Mock代码，<code v-pre>mockgen</code>工具提供了很多有用的功能，这里我来详细介绍下。</p>
<p><code v-pre>mockgen</code>工具是 GoMock 提供的，用来Mock一个Go接口。它可以根据给定的接口，来自动生成Mock代码。这里，有两种模式可以生成Mock代码，分别是源码模式和反射模式。</p>
<ol>
<li><strong>源码模式</strong></li>
</ol>
<p><strong>如果有接口文件，则可以通过以下命令来生成Mock代码：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ mockgen <span class="token parameter variable">-destination</span> spider/mock/mock_spider.go <span class="token parameter variable">-package</span> spider <span class="token parameter variable">-source</span> spider/spider.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令，Mock了<code v-pre>spider/spider.go</code>文件中定义的<code v-pre>Spider</code>接口，并将Mock代码保存在<code v-pre>spider/mock/mock_spider.go</code>文件中，文件的包名为<code v-pre>spider</code>。</p>
<p><strong>mockgen工具的参数说明见下表：</strong></p>
<p><img src="http://sm.nsddd.top/sm202303051051183.jpeg" alt="图片"></p>
<ol>
<li><strong>反射模式</strong></li>
</ol>
<p>此外，mockgen工具还支持通过使用反射程序来生成 Mock 代码。它通过传递两个非标志参数，即导入路径和逗号分隔的接口列表来启用，其他参数和源码模式共用，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ mockgen <span class="token parameter variable">-destination</span> spider/mock/mock_spider.go <span class="token parameter variable">-package</span> spider github.com/marmotedu/gopractise-demo/gomock/spider Spider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="通过注释使用mockgen" tabindex="-1"><a class="header-anchor" href="#通过注释使用mockgen" aria-hidden="true">#</a> 通过注释使用mockgen</h3>
<p>如果有多个文件，并且分散在不同的位置，那么我们要生成Mock文件的时候，需要对每个文件执行多次mockgen命令（这里假设包名不相同）。这种操作还是比较繁琐的，mockgen还提供了一种通过注释生成Mock文件的方式，此时需要借助<code v-pre>go generate</code>工具。</p>
<p>在接口文件的代码中，添加以下注释（具体代码见<a href="https://github.com/marmotedu/gopractise-demo/blob/master/gomock/spider/spider.go#L3" target="_blank" rel="noopener noreferrer">spider.go<ExternalLinkIcon/></a>文件）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//go:generate mockgen -destination mock_spider.go -package spider github.com/cz-it/blog/blog/Go/testing/gomock/example/spider Spider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>这时候，我们只需要在<code v-pre>gomock</code>目录下，执行以下命令，就可以自动生成Mock代码：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go generate ./...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用mock代码编写单元测试用例" tabindex="-1"><a class="header-anchor" href="#使用mock代码编写单元测试用例" aria-hidden="true">#</a> 使用Mock代码编写单元测试用例</h3>
<p>生成了Mock代码之后，我们就可以使用它们了。这里我们结合<code v-pre>testing</code>来编写一个使用了Mock代码的单元测试用例。</p>
<p>首先，需要在单元测试代码里创建一个Mock控制器：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>ctrl <span class="token operator">:=</span> gomock<span class="token punctuation">.</span><span class="token function">NewController</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将<code v-pre>\*testing.T</code>传递给GoMock ，生成一个<code v-pre>Controller</code>对象，该对象控制了整个Mock的过程。在操作完后，还需要进行回收，所以一般会在<code v-pre>NewController</code>后面defer一个Finish，代码如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>defer ctrl.Finish()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，就可以调用Mock的对象了：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>mockSpider <span class="token operator">:=</span> spider<span class="token punctuation">.</span><span class="token function">NewMockSpider</span><span class="token punctuation">(</span>ctrl<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的<code v-pre>spider</code>是mockgen命令里面传递的包名，后面是<code v-pre>NewMockXxxx</code>格式的对象创建函数，<code v-pre>Xxx</code>是接口名。这里，我们需要传递控制器对象进去，返回一个Mock实例。</p>
<p>接着，有了Mock实例，我们就可以调用其断言方法<code v-pre>EXPECT()</code>了。</p>
<p>gomock采用了链式调用法，通过<code v-pre>.</code>连接函数调用，可以像链条一样连接下去。例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mockSpider.EXPECT().GetBody().Return("go1.8.3")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Mock一个接口的方法，我们需要Mock该方法的入参和返回值。我们可以通过参数匹配来Mock入参，通过Mock实例的 <code v-pre>Return</code> 方法来Mock返回值。下面，我们来分别看下如何指定入参和返回值。</p>
<p>先来看如何指定入参。如果函数有参数，我们可以使用参数匹配来指代函数的参数，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>mockSpider<span class="token punctuation">.</span><span class="token function">EXPECT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetBody</span><span class="token punctuation">(</span>gomock<span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> gomock<span class="token punctuation">.</span><span class="token function">Eq</span><span class="token punctuation">(</span><span class="token string">"admin"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Return</span><span class="token punctuation">(</span><span class="token string">"go1.8.3"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>gomock支持以下参数匹配：</p>
<ul>
<li>gomock.Any()，可以用来表示任意的入参。</li>
<li>gomock.Eq(value)，用来表示与 value 等价的值。</li>
<li>gomock.Not(value)，用来表示非 value 以外的值。</li>
<li>gomock.Nil()，用来表示 None 值。</li>
</ul>
<p>接下来，我们看如何指定返回值。</p>
<p><code v-pre>EXPECT()</code>得到Mock的实例，然后调用Mock实例的方法，该方法返回第一个<code v-pre>Call</code>对象，然后可以对其进行条件约束，比如使用Mock实例的 <code v-pre>Return</code> 方法约束其返回值。<code v-pre>Call</code>对象还提供了以下方法来约束Mock实例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// After声明调用在preReq完成后执行</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Call<span class="token punctuation">)</span> <span class="token function">After</span><span class="token punctuation">(</span>preReq <span class="token operator">*</span>Call<span class="token punctuation">)</span> <span class="token operator">*</span>Call l 
<span class="token comment">// 允许调用次数为 0 次或更多次</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Call<span class="token punctuation">)</span> <span class="token function">AnyTimes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Cal
<span class="token comment">// 声明在匹配时要运行的操作</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Call<span class="token punctuation">)</span> <span class="token function">Do</span><span class="token punctuation">(</span>f <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">*</span>Call 
<span class="token comment">// 设置最大的调用次数为 n 次</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Call<span class="token punctuation">)</span> <span class="token function">MaxTimes</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Call 
<span class="token comment">// 设置最小的调用次数为 n 次</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Call<span class="token punctuation">)</span> <span class="token function">MinTimes</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Call 
<span class="token comment">// 声明模拟函数调用返回的值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Call<span class="token punctuation">)</span> <span class="token function">Return</span><span class="token punctuation">(</span>rets <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">*</span>Call
<span class="token comment">// 声明使用指针设置第 n 个参数的值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Call<span class="token punctuation">)</span> <span class="token function">SetArg</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> value <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">*</span>Call 
<span class="token comment">// 设置调用次数为 n 次</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Call<span class="token punctuation">)</span> <span class="token function">Times</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Call
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面列出了多个 <code v-pre>Call</code> 对象提供的约束方法，接下来我会介绍3个常用的约束方法：指定返回值、指定执行次数和指定执行顺序。</p>
<ol>
<li>指定返回值</li>
</ol>
<p>我们可以提供调用<code v-pre>Call</code>的<code v-pre>Return</code>函数，来指定接口的返回值，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>mockSpider<span class="token punctuation">.</span><span class="token function">EXPECT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Return</span><span class="token punctuation">(</span><span class="token string">"go1.8.3"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>指定执行次数</li>
</ol>
<p>有时候，我们需要指定函数执行多少次，例如：对于接受网络请求的函数，计算其执行了多少次。我们可以通过<code v-pre>Call</code>的<code v-pre>Times</code>函数来指定执行次数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mockSpider.EXPECT().Recv().Return(nil).Times(3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述代码，执行了三次Recv函数，这里gomock还支持其他的执行次数限制：</p>
<ul>
<li>AnyTimes()，表示执行0到多次。</li>
<li>MaxTimes(n int)，表示如果没有设置，最多执行n次。</li>
<li>MinTimes(n int)，表示如果没有设置，最少执行n次。</li>
</ul>
<ol>
<li>指定执行顺序</li>
</ol>
<p>有时候，我们还要指定执行顺序**，<strong>比如要先执行</strong> Init 操作，然后才能执行Recv操作：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>initCall <span class="token operator">:=</span> mockSpider<span class="token punctuation">.</span><span class="token function">EXPECT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
mockSpider<span class="token punctuation">.</span><span class="token function">EXPECT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Recv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>initCall<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，我们可以使用<code v-pre>go test</code>来测试使用了Mock代码的单元测试代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-v</span>
<span class="token operator">==</span><span class="token operator">=</span> RUN   TestGetGoVersion
--- PASS: TestGetGoVersion <span class="token punctuation">(</span><span class="token number">0</span>.00s<span class="token punctuation">)</span>
PASS
ok    github.com/marmotedu/gopractise-demo/gomock  <span class="token number">0</span>.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fake测试" tabindex="-1"><a class="header-anchor" href="#fake测试" aria-hidden="true">#</a> Fake测试</h2>
<p>在Go项目开发中，对于比较复杂的接口，我们还可以Fake一个接口实现，来进行测试。所谓Fake测试，其实就是针对接口实现一个假（fake）的实例。至于如何实现Fake实例，需要你根据业务自行实现。例如：IAM项目中iam-apiserver组件就实现了一个fake store，代码见<a href="https://github.com/marmotedu/iam/tree/v1.0.8/internal/apiserver/store/fake" target="_blank" rel="noopener noreferrer">fake<ExternalLinkIcon/></a>目录。因为这一讲后面的IAM项目测试实战部分有介绍，所以这里不再展开讲解。</p>
<h2 id="何时编写和执行单元测试用例" tabindex="-1"><a class="header-anchor" href="#何时编写和执行单元测试用例" aria-hidden="true">#</a> 何时编写和执行单元测试用例？</h2>
<p>上面，我介绍了Go代码测试的基础知识，这里我再来分享下在做测试时一个比较重要的知识点：何时编写和执行单元测试用例。</p>
<h3 id="编码前-tdd" tabindex="-1"><a class="header-anchor" href="#编码前-tdd" aria-hidden="true">#</a> 编码前：TDD</h3>
<p><img src="http://sm.nsddd.top/sm202303051057509.png" alt="图片"></p>
<p>Test-Driven Development，也就是测试驱动开发，是敏捷开发的⼀项核心实践和技术，也是⼀种设计方法论。简单来说，TDD原理就是：开发功能代码之前，先编写测试用例代码，然后针对测试用例编写功能代码，使其能够通过。这样做的好处在于，通过测试的执行代码肯定满足需求，而且有助于面向接口编程，降低代码耦合，也极大降低了bug的出现几率。</p>
<p>然而，TDD的坏处也显而易见：由于测试用例是在进行代码设计之前写的，很有可能限制开发者对代码的整体设计；并且，由于TDD对开发⼈员要求非常高，体现的思想跟传统开发思维也不⼀样，因此实施起来比较困难；此外，因为要先编写测试用例，TDD也可能会影响项目的研发进度。所以，在客观情况不满足的情况下，不应该盲目追求对业务代码使用TDD的开发模式。</p>
<h3 id="与编码同步进行-增量" tabindex="-1"><a class="header-anchor" href="#与编码同步进行-增量" aria-hidden="true">#</a> 与编码同步进行：增量</h3>
<p>及时为增量代码写单测是一种良好的习惯。一方面是因为，此时我们对需求有一定的理解，能够更好地写出单元测试来验证正确性。并且，在单测阶段就发现问题，而不是等到联调测试中才发现，修复的成本也是最小的。</p>
<p>另一方面，在写单测的过程中，我们也能够反思业务代码的正确性、合理性，推动我们在实现的过程中更好地反思代码的设计，并及时调整。</p>
<h3 id="编码后-存量" tabindex="-1"><a class="header-anchor" href="#编码后-存量" aria-hidden="true">#</a> 编码后：存量</h3>
<p>在完成业务需求后，我们可能会遇到这种情况：因为上线时间比较紧张、没有单测相关规划，开发阶段只手动测试了代码是否符合功能。</p>
<p>如果这部分存量代码出现较大的新需求，或者维护已经成为问题，需要大规模重构，这正是推动补全单测的好时机。为存量代码补充上单测，一方面能够推进重构者进一步理解原先的逻辑，另一方面也能够增强重构者重构代码后的信心，降低风险。</p>
<p>但是，补充存量单测可能需要再次回忆理解需求和逻辑设计等细节，而有时写单测的人并不是原编码的设计者，所以编码后编写和执行单元测试用例也有一定的不足。</p>
<h2 id="测试覆盖率" tabindex="-1"><a class="header-anchor" href="#测试覆盖率" aria-hidden="true">#</a> 测试覆盖率</h2>
<p>我们写单元测试的时候应该想得很全面，能够覆盖到所有的测试用例，但有时也会漏过一些 case，Go提供了cover工具来统计测试覆盖率。具体可以分为两大步骤。</p>
<p>第一步，生成测试覆盖率数据：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-coverprofile</span><span class="token operator">=</span>coverage.out
<span class="token keyword">do</span> some setup
PASS
coverage: <span class="token number">40.0</span>% of statements
<span class="token keyword">do</span> some cleanup
ok    github.com/marmotedu/gopractise-demo/test  <span class="token number">0</span>.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令在当前目录下生成了<code v-pre>coverage.out</code>覆盖率数据文件。</p>
<p><img src="http://sm.nsddd.top/sm202303051101145.png" alt="图片"></p>
<p><strong>第二步，分析覆盖率文件：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go tool cover <span class="token parameter variable">-func</span><span class="token operator">=</span>coverage.out
<span class="token keyword">do</span> some setup
PASS
coverage: <span class="token number">40.0</span>% of statements
<span class="token keyword">do</span> some cleanup
ok    github.com/marmotedu/gopractise-demo/test  <span class="token number">0</span>.003s
<span class="token punctuation">[</span>colin@dev test<span class="token punctuation">]</span>$ go tool cover <span class="token parameter variable">-func</span><span class="token operator">=</span>coverage.out
github.com/marmotedu/gopractise-demo/test/math.go:9:  Abs    <span class="token number">100.0</span>%
github.com/marmotedu/gopractise-demo/test/math.go:14:  Max    <span class="token number">100.0</span>%
github.com/marmotedu/gopractise-demo/test/math.go:19:  Min    <span class="token number">0.0</span>%
github.com/marmotedu/gopractise-demo/test/math.go:24:  RandInt    <span class="token number">0.0</span>%
github.com/marmotedu/gopractise-demo/test/math.go:29:  Floor    <span class="token number">0.0</span>%
total:              <span class="token punctuation">(</span>statements<span class="token punctuation">)</span>  <span class="token number">40.0</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述命令的输出中，我们可以查看到哪些函数没有测试，哪些函数内部的分支没有测试完全。cover工具会根据被执行代码的行数与总行数的比例计算出覆盖率。可以看到，Abs和Max函数的测试覆盖率为100%，Min和RandInt的测试覆盖率为0。</p>
<p>我们还可以使用<code v-pre>go tool cover -html</code>生成<code v-pre>HTML</code>格式的分析文件，可以更加清晰地展示代码的测试情况：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go tool cover -html=coverage.out -o coverage.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述命令会在当前目录下生成一个<code v-pre>coverage.html</code>文件，用浏览器打开<code v-pre>coverage.html</code>文件，可以更加清晰地看到代码的测试情况，如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303051102687.png" alt="img"></p>
<p>通过上图，我们可以知道红色部分的代码没有被测试到，可以让我们接下来有针对性地添加测试用例，而不是一头雾水，不知道需要为哪些代码编写测试用例。</p>
<p>在Go项目开发中，我们往往会把测试覆盖率作为代码合并的一个强制要求，所以需要在进行代码测试时，同时生成代码覆盖率数据文件。在进行代码测试时，可以通过分析该文件，来判断我们的代码测试覆盖率是否满足要求，如果不满足则代码测试失败。</p>
<h2 id="iam项目测试实战" tabindex="-1"><a class="header-anchor" href="#iam项目测试实战" aria-hidden="true">#</a> IAM项目测试实战</h2>
<p>接下来，我来介绍下IAM项目是如何编写和运行测试用例的，你可以通过IAM项目的测试用例，加深对上面内容的理解。</p>
<h3 id="iam项目是如何运行测试用例的" tabindex="-1"><a class="header-anchor" href="#iam项目是如何运行测试用例的" aria-hidden="true">#</a> IAM项目是如何运行测试用例的？</h3>
<p>首先，我们来看下IAM项目是如何执行测试用例的。</p>
<p>在IAM项目的源码根目录下，可以通过运行<code v-pre>make test</code>执行测试用例，<code v-pre>make test</code>会执行<code v-pre>iam/scripts/make-rules/golang.mk</code>文件中的<code v-pre>go.test</code>伪目标，规则如下：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> go.test
<span class="token target symbol">go.test</span><span class="token punctuation">:</span> tools.verify.go-junit-report
  <span class="token operator">@</span>echo <span class="token string">"===========> Run unit test"</span>
  <span class="token operator">@</span>set -o pipefail<span class="token punctuation">;</span><span class="token variable">$</span><span class="token punctuation">(</span>GO<span class="token punctuation">)</span> test -race -cover -coverprofile<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/coverage.out \\
    -timeout<span class="token operator">=</span>10m -short -v `go list ./...<span class="token operator">|</span>\
    egrep -v <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> <span class="token variable">$</span><span class="token punctuation">(</span>SPACE<span class="token punctuation">)</span>,<span class="token string">'|'</span>,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">sort</span> <span class="token variable">$</span><span class="token punctuation">(</span>EXCLUDE_TESTS<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>` 2>&amp;1 <span class="token operator">|</span> \\
    tee ><span class="token punctuation">(</span>go-junit-report --set-exit-code ><span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/report.xml<span class="token punctuation">)</span>
  <span class="token operator">@</span>sed -i <span class="token string">'/mock_.*.go/d'</span> <span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/coverage.out <span class="token comment"># remove mock_.*.go files from test coverage</span>
  <span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>GO<span class="token punctuation">)</span> tool cover -html<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/coverage.out -o <span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/coverage.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述规则中，我们执行<code v-pre>go test</code>时设置了超时时间、竞态检查，开启了代码覆盖率检查，覆盖率测试数据保存在了<code v-pre>coverage.out</code>文件中。在Go项目开发中，并不是所有的包都需要单元测试，所以上面的命令还过滤掉了一些不需要测试的包，这些包配置在<code v-pre>EXCLUDE_TESTS</code>变量中：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">EXCLUDE_TESTS</span><span class="token operator">=</span>github.com/marmotedu/iam/test github.com/marmotedu/iam/pkg/log github.com/marmotedu/iam/third_party github.com/marmotedu/iam/internal/pump/storage github.com/marmotedu/iam/internal/pump github.com/marmotedu/iam/internal/pkg/logger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时，也调用了<code v-pre>go-junit-report</code>将go test的结果转化成了xml格式的报告文件，该报告文件会被一些CI系统，例如Jenkins拿来解析并展示结果。上述代码也同时生成了coverage.html文件，该文件可以存放在制品库中，供我们后期分析查看。</p>
<p>这里需要注意，Mock的代码是不需要编写测试用例的，为了避免影响项目的单元测试覆盖率，需要将Mock代码的单元测试覆盖率数据从<code v-pre>coverage.out</code>文件中删除掉，<code v-pre>go.test</code>规则通过以下命令删除这些无用的数据：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'/mock_.*.go/d'</span> <span class="token variable"><span class="token variable">$(</span>OUTPUT_DIR<span class="token variable">)</span></span>/coverage.out <span class="token comment"># remove mock_.*.go files from test coverage</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外，还可以通过<code v-pre>make cover</code>来进行单元测试覆盖率测试，<code v-pre>make cover</code>会执行<code v-pre>iam/scripts/make-rules/golang.mk</code>文件中的<code v-pre>go.test.cover</code>伪目标，规则如下：</p>
<div class="language-makefile ext-makefile line-numbers-mode"><pre v-pre class="language-makefile"><code><span class="token builtin-target builtin">.PHONY</span><span class="token punctuation">:</span> go.test.cover
<span class="token target symbol">go.test.cover</span><span class="token punctuation">:</span> go.test
  <span class="token operator">@</span><span class="token variable">$</span><span class="token punctuation">(</span>GO<span class="token punctuation">)</span> tool cover -func<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>OUTPUT_DIR<span class="token punctuation">)</span>/coverage.out <span class="token operator">|</span> \\
    awk -v target<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">(</span>COVERAGE<span class="token punctuation">)</span> -f <span class="token variable">$</span><span class="token punctuation">(</span>ROOT_DIR<span class="token punctuation">)</span>/scripts/coverage.awk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述目标依赖<code v-pre>go.test</code>，也就是说执行单元测试覆盖率目标之前，会先进行单元测试，然后使用单元测试产生的覆盖率数据<code v-pre>coverage.out</code>计算出总的单元测试覆盖率，这里是通过<a href="https://github.com/marmotedu/iam/blob/v1.0.8/scripts/coverage.awk" target="_blank" rel="noopener noreferrer">coverage.awk<ExternalLinkIcon/></a>脚本来计算的。</p>
<p>如果单元测试覆盖率不达标，Makefile会报错并退出。可以通过Makefile的<a href="https://github.com/marmotedu/iam/blob/master/scripts/make-rules/common.mk#L39-L41" target="_blank" rel="noopener noreferrer">COVERAGE<ExternalLinkIcon/></a>变量来设置单元测试覆盖率阈值。</p>
<p>COVERAGE的默认值为60，我们也可以在命令行手动指定，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> cover <span class="token assign-left variable">COVERAGE</span><span class="token operator">=</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了确保项目的单元测试覆盖率达标，需要设置单元测试覆盖率质量红线。一般来说，这些红线很难靠开发者的自觉性去保障，所以好的方法是将质量红线加入到CICD流程中。</p>
<p>所以，在<code v-pre>Makefile</code>文件中，我将<code v-pre>cover</code>放在<code v-pre>all</code>目标的依赖中，并且位于build之前，也就是<code v-pre>all: gen add-copyright format lint cover build</code>。这样每次当我们执行make时，会自动进行代码测试，并计算单元测试覆盖率，如果覆盖率不达标，则停止构建；如果达标，继续进入下一步的构建流程。</p>
<h3 id="iam项目测试案例分享" tabindex="-1"><a class="header-anchor" href="#iam项目测试案例分享" aria-hidden="true">#</a> IAM项目测试案例分享</h3>
<p>接下来，我会给你展示一些IAM项目的测试案例，因为这些测试案例的实现方法，我在<a href="https://time.geekbang.org/column/article/408529" target="_blank" rel="noopener noreferrer">36讲<ExternalLinkIcon/></a> 和这一讲的前半部分已有详细介绍，所以这里，我只列出具体的实现代码，不会再介绍这些代码的实现方法。</p>
<ol>
<li>单元测试案例</li>
</ol>
<p>我们可以手动编写单元测试代码，也可以使用gotests工具生成单元测试代码。</p>
<p>先来看手动编写测试代码的案例。这里单元测试代码见<a href="https://github.com/marmotedu/iam/blob/v1.0.8/pkg/log/log_test.go#L52-L62" target="_blank" rel="noopener noreferrer">Test_Option<ExternalLinkIcon/></a>，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Test_Option</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs <span class="token operator">:=</span> pflag<span class="token punctuation">.</span><span class="token function">NewFlagSet</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">,</span> pflag<span class="token punctuation">.</span>ExitOnError<span class="token punctuation">)</span>
    opt <span class="token operator">:=</span> log<span class="token punctuation">.</span><span class="token function">NewOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    opt<span class="token punctuation">.</span><span class="token function">AddFlags</span><span class="token punctuation">(</span>fs<span class="token punctuation">)</span>

    args <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"--log.level=debug"</span><span class="token punctuation">}</span>
    err <span class="token operator">:=</span> fs<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
    assert<span class="token punctuation">.</span><span class="token function">Nil</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>

    assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">"debug"</span><span class="token punctuation">,</span> opt<span class="token punctuation">.</span>Level<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，使用了<code v-pre>github.com/stretchr/testify/assert</code>包来对比结果。</p>
<p>再来看使用gotests工具生成单元测试代码的案例（Table-Driven 的测试模式）。出于效率上的考虑，IAM项目的单元测试用例，基本都是使用gotests工具生成测试用例模板代码，并基于这些模板代码填充测试Case的。代码见<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/service/v1/service_test.go" target="_blank" rel="noopener noreferrer">service_test.go<ExternalLinkIcon/></a>文件。</p>
<ol>
<li>性能测试案例</li>
</ol>
<p>IAM项目的性能测试用例，见<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/service/v1/user_test.go#L27-L41" target="_blank" rel="noopener noreferrer">BenchmarkListUser<ExternalLinkIcon/></a>测试函数。代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">BenchmarkListUser</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  opts <span class="token operator">:=</span> metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">{</span>
    Offset<span class="token punctuation">:</span> pointer<span class="token punctuation">.</span><span class="token function">ToInt64</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    Limit<span class="token punctuation">:</span>  pointer<span class="token punctuation">.</span><span class="token function">ToInt64</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  storeIns<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> fake<span class="token punctuation">.</span><span class="token function">GetFakeFactoryOr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  u <span class="token operator">:=</span> <span class="token operator">&amp;</span>userService<span class="token punctuation">{</span>
    store<span class="token punctuation">:</span> storeIns<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> u<span class="token punctuation">.</span><span class="token function">List</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> opts<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>示例测试案例</li>
</ol>
<p>IAM项目的示例测试用例见<a href="https://github.com/marmotedu/errors/blob/v1.0.2/example_test.go" target="_blank" rel="noopener noreferrer">example_test.go<ExternalLinkIcon/></a>文件。<code v-pre>example_test.go</code>中的一个示例测试代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ExampleNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  err <span class="token operator">:=</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"whoops"</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

  <span class="token comment">// Output: whoops</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>TestMain测试案例</li>
</ol>
<p>IAM项目的TestMain测试案例，见<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/service/v1/user_test.go" target="_blank" rel="noopener noreferrer">user_test.go<ExternalLinkIcon/></a>文件中的<code v-pre>TestMain</code>函数：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestMain</span><span class="token punctuation">(</span>m <span class="token operator">*</span>testing<span class="token punctuation">.</span>M<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> fake<span class="token punctuation">.</span><span class="token function">GetFakeFactoryOr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>TestMain</code>函数初始化了fake Factory，然后调用<code v-pre>m.Run</code>执行测试用例。</p>
<ol>
<li>Mock测试案例</li>
</ol>
<p>Mock代码见<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/service/v1/mock_service.go" target="_blank" rel="noopener noreferrer">internal/apiserver/service/v1/mock_service.go<ExternalLinkIcon/></a>，使用Mock的测试用例见<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/controller/v1/user/create_test.go" target="_blank" rel="noopener noreferrer">internal/apiserver/controller/v1/user/create_test.go<ExternalLinkIcon/></a>文件。因为代码比较多，这里建议你打开链接，查看测试用例的具体实现。</p>
<p>我们可以在IAM项目的根目录下执行以下命令，来自动生成所有的Mock文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go generate ./<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>Fake测试案例</li>
</ol>
<p>fake store代码实现位于<a href="https://github.com/marmotedu/iam/tree/v1.0.8/internal/apiserver/store/fake" target="_blank" rel="noopener noreferrer">internal/apiserver/store/fake<ExternalLinkIcon/></a>目录下。fake store的使用方式，见<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/service/v1/user_test.go" target="_blank" rel="noopener noreferrer">user_test.go<ExternalLinkIcon/></a>文件：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestMain</span><span class="token punctuation">(</span>m <span class="token operator">*</span>testing<span class="token punctuation">.</span>M<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> fake<span class="token punctuation">.</span><span class="token function">GetFakeFactoryOr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkListUser</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    opts <span class="token operator">:=</span> metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">{</span>
        Offset<span class="token punctuation">:</span> pointer<span class="token punctuation">.</span><span class="token function">ToInt64</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Limit<span class="token punctuation">:</span>  pointer<span class="token punctuation">.</span><span class="token function">ToInt64</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    storeIns<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> fake<span class="token punctuation">.</span><span class="token function">GetFakeFactoryOr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    u <span class="token operator">:=</span> <span class="token operator">&amp;</span>userService<span class="token punctuation">{</span>
        store<span class="token punctuation">:</span> storeIns<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token boolean">_</span><span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> u<span class="token punctuation">.</span><span class="token function">List</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> opts<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码通过<code v-pre>TestMain</code>初始化fake实例（<a href="https://github.com/marmotedu/iam/blob/v1.0.8/internal/apiserver/store/store.go#L12-L17" target="_blank" rel="noopener noreferrer">store.Factory<ExternalLinkIcon/></a>接口类型）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">GetFakeFactoryOr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>Factory<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fakeFactory <span class="token operator">=</span> <span class="token operator">&amp;</span>datastore<span class="token punctuation">{</span>
            users<span class="token punctuation">:</span>    <span class="token function">FakeUsers</span><span class="token punctuation">(</span>ResourceCount<span class="token punctuation">)</span><span class="token punctuation">,</span>
            secrets<span class="token punctuation">:</span>  <span class="token function">FakeSecrets</span><span class="token punctuation">(</span>ResourceCount<span class="token punctuation">)</span><span class="token punctuation">,</span>
            policies<span class="token punctuation">:</span> <span class="token function">FakePolicies</span><span class="token punctuation">(</span>ResourceCount<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> fakeFactory <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"failed to get mysql store fatory, mysqlFactory: %+v"</span><span class="token punctuation">,</span> fakeFactory<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> fakeFactory<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>GetFakeFactoryOr</code>函数，创建了一些fake users、secrets、policies，并保存在了<code v-pre>fakeFactory</code>变量中，供后面的测试用例使用，例如BenchmarkListUser、Test_newUsers等。</p>
<h2 id="其他测试工具-包" tabindex="-1"><a class="header-anchor" href="#其他测试工具-包" aria-hidden="true">#</a> 其他测试工具/包</h2>
<p>最后，我再来分享下Go项目测试中常用的工具/包，因为内容较多，我就不详细介绍了，如果感兴趣你可以点进链接自行学习。我将这些测试工具/包分为了两类，分别是测试框架和Mock工具。</p>
<h3 id="测试框架" tabindex="-1"><a class="header-anchor" href="#测试框架" aria-hidden="true">#</a> 测试框架</h3>
<ul>
<li><a href="https://github.com/stretchr/testify" target="_blank" rel="noopener noreferrer">Testify框架<ExternalLinkIcon/></a>：Testify是Go test的预判工具，它能让你的测试代码变得更优雅和高效，测试结果也变得更详细。</li>
<li><a href="https://github.com/smartystreets/goconvey" target="_blank" rel="noopener noreferrer">GoConvey框架<ExternalLinkIcon/></a>：GoConvey是一款针对Golang的测试框架，可以管理和运行测试用例，同时提供了丰富的断言函数，并支持很多 Web 界面特性。</li>
</ul>
<h3 id="mock工具" tabindex="-1"><a class="header-anchor" href="#mock工具" aria-hidden="true">#</a> Mock工具</h3>
<p>这一讲里，我介绍了Go官方提供的Mock框架GoMock，不过还有一些其他的优秀Mock工具可供我们使用。这些Mock工具分别用在不同的Mock场景中，我在 <a href="https://time.geekbang.org/column/article/384648" target="_blank" rel="noopener noreferrer">10讲<ExternalLinkIcon/></a>中已经介绍过。不过，为了使我们这一讲的测试知识体系更加完整，这里我还是再提一次，你可以复习一遍。</p>
<ul>
<li><a href="https://github.com/DATA-DOG/go-sqlmock" target="_blank" rel="noopener noreferrer">sqlmock<ExternalLinkIcon/></a>：可以用来模拟数据库连接。数据库是项目中比较常见的依赖，在遇到数据库依赖时都可以用它。</li>
<li><a href="https://github.com/jarcoal/httpmock" target="_blank" rel="noopener noreferrer">httpmock<ExternalLinkIcon/></a>：可以用来Mock HTTP请求。</li>
<li><a href="https://github.com/bouk/monkey" target="_blank" rel="noopener noreferrer">bouk/monkey<ExternalLinkIcon/></a>：猴子补丁，能够通过替换函数指针的方式来修改任意函数的实现。如果golang/mock、sqlmock和httpmock这几种方法都不能满足我们的需求，我们可以尝试用猴子补丁的方式来Mock依赖。可以这么说，猴子补丁提供了单元测试 Mock 依赖的最终解决方案。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲，我介绍了除单元测试和性能测试之外的另一些测试方法。</p>
<p>除了示例测试和TestMain函数，我还详细介绍了Mock测试，也就是如何使用GoMock来测试一些在单元测试环境下不好实现的接口。绝大部分情况下，可以使用GoMock来Mock接口，但是对于一些业务逻辑比较复杂的接口，我们可以通过Fake一个接口实现，来对代码进行测试，这也称为Fake测试。</p>
<p>此外，我还介绍了何时编写和执行测试用例。我们可以根据需要，选择在编写代码前、编写代码中、编写代码后编写测试用例。</p>
<p>为了保证单元测试覆盖率，我们还应该为整个项目设置单元测试覆盖率质量红线，并将该质量红线加入到CICD流程中。我们可以通过 <code v-pre>go test -coverprofile=coverage.out</code> 命令来生成测试覆盖率数据，通过<code v-pre>go tool cover -func=coverage.out</code> 命令来分析覆盖率文件。</p>
<p>IAM项目中使用了大量的测试方法和技巧来测试代码，为了加深你对测试知识的理解，我也列举了一些测试案例，供你参考、学习和验证。具体的测试案例，你可以返回前面查看下。</p>
<p>除此之外，我们还可以使用其他一些测试框架，例如Testify框架和GoConvey框架。在Go代码测试中，我们最常使用的是Go官方提供的Mock框架GoMock，但仍然有其他优秀的Mock工具，可供我们在不同场景下使用，例如sqlmock、httpmock、bouk/monkey等。</p>
<h2 id="课后习题" tabindex="-1"><a class="header-anchor" href="#课后习题" aria-hidden="true">#</a> 课后习题</h2>
<ol>
<li>请使用 <a href="https://github.com/DATA-DOG/go-sqlmock" target="_blank" rel="noopener noreferrer">sqlmock<ExternalLinkIcon/></a> 来Mock一个GORM数据库实例，并完成GORM的CURD单元测试用例编写。</li>
<li>思考下，在Go项目开发中，还有哪些优秀的测试框架、测试工具、Mock工具以及测试技巧？欢迎你在留言区分享。</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '28.md' style='float:left'>⬆️上一节🔗  </a><a href = '30.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


