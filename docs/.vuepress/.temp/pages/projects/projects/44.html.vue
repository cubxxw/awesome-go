<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第44节-可直接套用的-go-编码规范" tabindex="-1"><a class="header-anchor" href="#第44节-可直接套用的-go-编码规范" aria-hidden="true">#</a> 第44节 可直接套用的 Go 编码规范</h1>
<br>
<div><a href = '43.md' style='float:left'>⬆️上一节🔗  </a><a href = '45.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#go-代码开发规范">Go 代码开发规范</router-link></li><li><router-link to="#_1-代码风格">1. 代码风格</router-link><ul><li><router-link to="#_1-1-代码格式">1.1 代码格式</router-link></li><li><router-link to="#_1-2-声明、初始化和定义">1.2 声明、初始化和定义</router-link></li><li><router-link to="#_1-3-错误处理">1.3 错误处理</router-link></li><li><router-link to="#_1-4-panic处理">1.4 panic处理</router-link></li><li><router-link to="#_1-5-单元测试">1.5 单元测试</router-link></li><li><router-link to="#_1-6-类型断言失败处理">1.6 类型断言失败处理</router-link></li></ul></li><li><router-link to="#_2-命名规范">2. 命名规范</router-link><ul><li><router-link to="#_2-1-包命名">2.1 包命名</router-link></li><li><router-link to="#_2-2-函数命名">2.2 函数命名</router-link></li><li><router-link to="#_2-3-文件命名">2.3 文件命名</router-link></li><li><router-link to="#_2-4-结构体命名">2.4 结构体命名</router-link></li><li><router-link to="#_2-5-接口命名">2.5 接口命名</router-link></li><li><router-link to="#_2-6-变量命名">2.6 变量命名</router-link></li><li><router-link to="#_2-7-常量命名">2.7 常量命名</router-link></li><li><router-link to="#_2-8-error的命名">2.8 Error的命名</router-link></li></ul></li><li><router-link to="#_3-注释规范">3. 注释规范</router-link><ul><li><router-link to="#_3-1-包注释">3.1 包注释</router-link></li><li><router-link to="#_3-2-变量-常量注释">3.2 变量/常量注释</router-link></li><li><router-link to="#_3-3-结构体注释">3.3 结构体注释</router-link></li><li><router-link to="#_3-4-方法注释">3.4 方法注释</router-link></li><li><router-link to="#_3-5-类型注释">3.5 类型注释</router-link></li></ul></li><li><router-link to="#_4-类型">4. 类型</router-link><ul><li><router-link to="#_4-1-字符串">4.1 字符串</router-link></li><li><router-link to="#_4-2-切片">4.2 切片</router-link></li><li><router-link to="#_4-3-结构体">4.3 结构体</router-link></li></ul></li><li><router-link to="#_5-控制结构">5. 控制结构</router-link><ul><li><router-link to="#_5-1-if">5.1 if</router-link></li><li><router-link to="#_5-2-for">5.2 for</router-link></li><li><router-link to="#_5-3-range">5.3 range</router-link></li><li><router-link to="#_5-4-switch">5.4 switch</router-link></li><li><router-link to="#_5-5-goto">5.5 goto</router-link></li></ul></li><li><router-link to="#_6-函数">6. 函数</router-link><ul><li><router-link to="#_6-1-函数参数">6.1 函数参数</router-link></li><li><router-link to="#_6-2-defer">6.2 defer</router-link></li><li><router-link to="#_6-3-方法的接收器">6.3 方法的接收器</router-link></li><li><router-link to="#_6-4-嵌套">6.4 嵌套</router-link></li><li><router-link to="#_6-5-变量命名">6.5 变量命名</router-link></li></ul></li><li><router-link to="#_7-gopath-设置规范">7. GOPATH 设置规范</router-link></li><li><router-link to="#_8-依赖管理">8. 依赖管理</router-link><ul><li><router-link to="#_9-最佳实践">9. 最佳实践</router-link></li><li><router-link to="#_9-1-性能">9.1 性能</router-link></li><li><router-link to="#_9-2-注意事项">9.2 注意事项</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#总结-1">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="go-代码开发规范" tabindex="-1"><a class="header-anchor" href="#go-代码开发规范" aria-hidden="true">#</a> Go 代码开发规范</h2>
<p>在Go 项目开发中，一个好的编码规范可以极大的提高代码质量。为了帮你节省时间和精力，这里我整理了一份清晰、可直接套用的 Go 编码规范，供你参考。</p>
<p>这份规范，是我参考了 Go 官方提供的编码规范，以及 Go 社区沉淀的一些比较合理的规范之后，加入自己的理解总结出的，它比很多公司内部的规范更全面，你掌握了，以后在面试大厂的时候，或者在大厂里写代码的时候，都会让人高看你一眼，觉得你code很专业。</p>
<p>这份编码规范中包含代码风格、命名规范、注释规范、类型、控制结构、函数、GOPATH 设置规范、依赖管理和最佳实践九类规范。如果你觉得这些规范内容太多了，看完一遍也记不住，这完全没关系。你可以多看几遍，也可以在用到时把它翻出来，在实际应用中掌握。这篇特别放送的内容，更多是作为写代码时候的一个参考手册。</p>
<h2 id="_1-代码风格" tabindex="-1"><a class="header-anchor" href="#_1-代码风格" aria-hidden="true">#</a> 1. 代码风格</h2>
<h3 id="_1-1-代码格式" tabindex="-1"><a class="header-anchor" href="#_1-1-代码格式" aria-hidden="true">#</a> 1.1 代码格式</h3>
<ul>
<li>代码都必须用 <code v-pre>gofmt</code> 进行格式化。</li>
<li>运算符和操作数之间要留空格。</li>
<li>建议一行代码不超过120个字符，超过部分，请采用合适的换行方式换行。但也有些例外场景，例如import行、工具自动生成的代码、带tag的struct字段。</li>
<li>文件长度不能超过800行。</li>
<li>函数长度不能超过80行。</li>
<li>import规范
<ul>
<li>代码都必须用<code v-pre>goimports</code>进行格式化（建议将代码Go代码编辑器设置为：保存时运行 <code v-pre>goimports</code>）。</li>
<li>不要使用相对路径引入包，例如 <code v-pre>import ../util/net</code> 。</li>
<li>包名称与导入路径的最后一个目录名不匹配时，或者多个相同包名冲突时，则必须使用导入别名。</li>
</ul>
</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>	<span class="token comment">// bad</span>
	<span class="token string">"github.com/dgrijalva/jwt-go/v4"</span>

	<span class="token comment">//good</span>
	jwt <span class="token string">"github.com/dgrijalva/jwt-go/v4"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 导入的包建议进行分组，匿名包的引用使用一个新的分组，并对匿名包引用进行说明。
</code></pre>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>	<span class="token keyword">import</span> <span class="token punctuation">(</span>
		<span class="token comment">// go 标准包</span>
		<span class="token string">"fmt"</span>

		<span class="token comment">// 第三方包</span>
	    <span class="token string">"github.com/jinzhu/gorm"</span>
	    <span class="token string">"github.com/spf13/cobra"</span>
	    <span class="token string">"github.com/spf13/viper"</span>

		<span class="token comment">// 匿名包单独分组，并对匿名包引用进行说明</span>
	    <span class="token comment">// import mysql driver</span>
	    <span class="token boolean">_</span> <span class="token string">"github.com/jinzhu/gorm/dialects/mysql"</span>

		<span class="token comment">// 内部包</span>
	    v1 <span class="token string">"github.com/marmotedu/api/apiserver/v1"</span>
	    metav1 <span class="token string">"github.com/marmotedu/apimachinery/pkg/meta/v1"</span>
	    <span class="token string">"github.com/marmotedu/iam/pkg/cli/genericclioptions"</span>
	<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-声明、初始化和定义" tabindex="-1"><a class="header-anchor" href="#_1-2-声明、初始化和定义" aria-hidden="true">#</a> 1.2 声明、初始化和定义</h3>
<p>当函数中需要使用到多个变量时，可以在函数开始处使用<code v-pre>var</code>声明。在函数外部声明必须使用 <code v-pre>var</code> ，不要采用 <code v-pre>:=</code> ，容易踩到变量的作用域的问题。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
	Width  <span class="token builtin">int</span>
	Height <span class="token builtin">int</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在初始化结构引用时，请使用<code v-pre>&amp;T{}</code>代替<code v-pre>new(T)</code>，以使其与结构体初始化一致。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
sptr <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span>
sptr<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"bar"</span>

<span class="token comment">// good</span>
sptr <span class="token operator">:=</span> <span class="token operator">&amp;</span>T<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"bar"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>struct 声明和初始化格式采用多行，定义如下。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Username  <span class="token builtin">string</span>
    Email     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

user <span class="token operator">:=</span> User<span class="token punctuation">{</span>
	Username<span class="token punctuation">:</span> <span class="token string">"belm"</span><span class="token punctuation">,</span>
	Email<span class="token punctuation">:</span> <span class="token string">"nosbelm@qq.com"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>相似的声明放在一组，同样适用于常量、变量和类型声明。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token string">"a"</span>
<span class="token keyword">import</span> <span class="token string">"b"</span>

<span class="token comment">// good</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"a"</span>
  <span class="token string">"b"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>尽可能指定容器容量，以便为容器预先分配内存，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>v <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
v <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在顶层，使用标准var关键字。请勿指定类型，除非它与表达式的类型不同。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> _s <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"A"</span> <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> _s <span class="token operator">=</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 由于 F 已经明确了返回一个字符串类型，因此我们没有必要显式指定_s 的类型</span>
<span class="token comment">// 还是那种类型</span>

<span class="token keyword">func</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"A"</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>对于未导出的顶层常量和变量，使用<code v-pre>_</code>作为前缀。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
  defaultHost <span class="token operator">=</span> <span class="token string">"127.0.0.1"</span>
  defaultPort <span class="token operator">=</span> <span class="token number">8080</span>
<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
  _defaultHost <span class="token operator">=</span> <span class="token string">"127.0.0.1"</span>
  _defaultPort <span class="token operator">=</span> <span class="token number">8080</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>嵌入式类型（例如 mutex）应位于结构体内的字段列表的顶部，并且必须有一个空行将嵌入式字段与常规字段分隔开。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  version <span class="token builtin">int</span>
  http<span class="token punctuation">.</span>Client
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  http<span class="token punctuation">.</span>Client

  version <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-错误处理" tabindex="-1"><a class="header-anchor" href="#_1-3-错误处理" aria-hidden="true">#</a> 1.3 错误处理</h3>
<ul>
<li><code v-pre>error</code>作为函数的值返回，必须对<code v-pre>error</code>进行处理，或将返回值赋值给明确忽略。对于<code v-pre>defer xx.Close()</code>可以不用显式处理。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
 <span class="token boolean">_</span> <span class="token operator">=</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>error</code>作为函数的值返回且有多个返回值的时候，<code v-pre>error</code>必须是最后一个参数。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">func</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">error</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">func</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>尽早进行错误处理，并尽早返回，减少嵌套。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// error code</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// error handling</span>
	<span class="token keyword">return</span> err
<span class="token punctuation">}</span>
<span class="token comment">// normal code</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果需要在 if 之外使用函数调用的结果，则应采用下面的方式。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> v<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// error handling</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
v<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// error handling</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>错误要单独判断，不与其他逻辑组合判断。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
v<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">||</span> v  <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// error handling</span>
	<span class="token keyword">return</span> err
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
v<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// error handling</span>
	<span class="token keyword">return</span> err
<span class="token punctuation">}</span>

<span class="token keyword">if</span> v <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// error handling</span>
	<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"invalid value v"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果返回值需要初始化，则采用下面的方式。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>v<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// error handling</span>
    <span class="token keyword">return</span> <span class="token comment">// or continue.</span>
<span class="token punctuation">}</span>
<span class="token comment">// use v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>错误描述建议 :</strong></p>
<ul>
<li>
<p>告诉用户他们可以做什么，而不是告诉他们不能做什么。</p>
</li>
<li>
<p>当声明一个需求时，用must 而不是should。例如，<code v-pre>must be greater than 0、must match regex '[a-z]+'</code>。</p>
</li>
<li>
<p>当声明一个格式不对时，用must not。例如，<code v-pre>must not contain</code>。</p>
</li>
<li>
<p>当声明一个动作时用may not。例如，<code v-pre>may not be specified when otherField is empty、only name may be specified</code>。</p>
</li>
<li>
<p>引用文字字符串值时，请在单引号中指示文字。例如，<code v-pre>ust not contain '..'</code>。</p>
</li>
<li>
<p>当引用另一个字段名称时，请在反引号中指定该名称。例如，must be greater than <code v-pre>request</code>。</p>
</li>
<li>
<p>指定不等时，请使用单词而不是符号。例如，<code v-pre>must be less than 256、must be greater than or equal to 0 (不要用 larger than、bigger than、more than、higher than)</code>。</p>
</li>
<li>
<p>指定数字范围时，请尽可能使用包含范围。</p>
</li>
<li>
<p>建议 Go 1.13 以上，error 生成方式为 <code v-pre>fmt.Errorf(&quot;module xxx: %w&quot;, err)</code>。</p>
</li>
<li>
<p>错误描述用小写字母开头，结尾不要加标点符号，例如：</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// bad
errors.New<span class="token punctuation">(</span><span class="token string">"Redis connection failed"</span><span class="token punctuation">)</span>
errors.New<span class="token punctuation">(</span><span class="token string">"redis connection failed."</span><span class="token punctuation">)</span>

// good
errors.New<span class="token punctuation">(</span><span class="token string">"redis connection failed"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-panic处理" tabindex="-1"><a class="header-anchor" href="#_1-4-panic处理" aria-hidden="true">#</a> 1.4 panic处理</h3>
<ul>
<li>在业务逻辑处理中禁止使用panic。</li>
<li>在main包中，只有当程序完全不可运行时使用panic，例如无法打开文件、无法连接数据库导致程序无法正常运行。</li>
<li>在main包中，使用 <code v-pre>log.Fatal</code> 来记录错误，这样就可以由log来结束程序，或者将panic抛出的异常记录到日志文件中，方便排查问题。</li>
<li>可导出的接口一定不能有panic。</li>
<li>包内建议采用error而不是panic来传递错误。</li>
</ul>
<h3 id="_1-5-单元测试" tabindex="-1"><a class="header-anchor" href="#_1-5-单元测试" aria-hidden="true">#</a> 1.5 单元测试</h3>
<ul>
<li>单元测试文件名命名规范为 <code v-pre>example_test.go</code>。</li>
<li>每个重要的可导出函数都要编写测试用例。</li>
<li>因为单元测试文件内的函数都是不对外的，所以可导出的结构体、函数等可以不带注释。</li>
<li>如果存在 <code v-pre>func (b *Bar) Foo</code> ，单测函数可以为 <code v-pre>func TestBar_Foo</code>。</li>
</ul>
<h3 id="_1-6-类型断言失败处理" tabindex="-1"><a class="header-anchor" href="#_1-6-类型断言失败处理" aria-hidden="true">#</a> 1.6 类型断言失败处理</h3>
<ul>
<li>type assertion 的单个返回值针对不正确的类型将产生 panic。请始终使用 “comma ok”的惯用法。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
t <span class="token operator">:=</span> n<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
t<span class="token punctuation">,</span> ok <span class="token operator">:=</span> n<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
	<span class="token comment">// error handling</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-命名规范" tabindex="-1"><a class="header-anchor" href="#_2-命名规范" aria-hidden="true">#</a> 2. 命名规范</h2>
<p>命名规范是代码规范中非常重要的一部分，一个统一的、短小的、精确的命名规范可以大大提高代码的可读性，也可以借此规避一些不必要的Bug。</p>
<h3 id="_2-1-包命名" tabindex="-1"><a class="header-anchor" href="#_2-1-包命名" aria-hidden="true">#</a> 2.1 包命名</h3>
<ul>
<li>包名必须和目录名一致，尽量采取有意义、简短的包名，不要和标准库冲突。</li>
<li>包名全部小写，没有大写或下划线，使用多级目录来划分层级。</li>
<li>项目名可以通过中划线来连接多个单词。</li>
<li>包名以及包所在的目录名，不要使用复数，例如，是<code v-pre>net/url</code>，而不是<code v-pre>net/urls</code>。</li>
<li>不要用 common、util、shared 或者 lib 这类宽泛的、无意义的包名。</li>
<li>包名要简单明了，例如 net、time、log。</li>
</ul>
<h3 id="_2-2-函数命名" tabindex="-1"><a class="header-anchor" href="#_2-2-函数命名" aria-hidden="true">#</a> 2.2 函数命名</h3>
<ul>
<li>函数名采用驼峰式，首字母根据访问控制决定使用大写或小写，例如：<code v-pre>MixedCaps</code>或者<code v-pre>mixedCaps</code>。</li>
<li>代码生成工具自动生成的代码(如<code v-pre>xxxx.pb.go</code>)和为了对相关测试用例进行分组，而采用的下划线(如<code v-pre>TestMyFunction_WhatIsBeingTested</code>)排除此规则。</li>
</ul>
<h3 id="_2-3-文件命名" tabindex="-1"><a class="header-anchor" href="#_2-3-文件命名" aria-hidden="true">#</a> 2.3 文件命名</h3>
<ul>
<li>文件名要简短有意义。</li>
<li>文件名应小写，并使用下划线分割单词。</li>
</ul>
<h3 id="_2-4-结构体命名" tabindex="-1"><a class="header-anchor" href="#_2-4-结构体命名" aria-hidden="true">#</a> 2.4 结构体命名</h3>
<ul>
<li>采用驼峰命名方式，首字母根据访问控制决定使用大写或小写，例如<code v-pre>MixedCaps</code>或者<code v-pre>mixedCaps</code>。</li>
<li>结构体名不应该是动词，应该是名词，比如 <code v-pre>Node</code>、<code v-pre>NodeSpec</code>。</li>
<li>避免使用Data、Info这类无意义的结构体名。</li>
<li>结构体的声明和初始化应采用多行，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// User 多行声明</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name  <span class="token builtin">string</span>
    Email <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 多行初始化</span>
u <span class="token operator">:=</span> User<span class="token punctuation">{</span>
    UserName<span class="token punctuation">:</span> <span class="token string">"belm"</span><span class="token punctuation">,</span>
    Email<span class="token punctuation">:</span>    <span class="token string">"nosbelm@qq.com"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-接口命名" tabindex="-1"><a class="header-anchor" href="#_2-5-接口命名" aria-hidden="true">#</a> 2.5 接口命名</h3>
<ul>
<li>接口命名的规则，基本和结构体命名规则保持一致：
<ul>
<li>单个函数的接口名以 “er&quot;”作为后缀（例如Reader，Writer），有时候可能导致蹩脚的英文，但是没关系。</li>
<li>两个函数的接口名以两个函数名命名，例如ReadWriter。</li>
<li>三个以上函数的接口名，类似于结构体名。</li>
</ul>
</li>
</ul>
<p><strong>例如</strong>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Seeking to an offset before the start of the file is an error.</span>
<span class="token comment">// Seeking to any positive offset is legal, but the behavior of subsequent</span>
<span class="token comment">// I/O operations on the underlying object is implementation-dependent.</span>
<span class="token keyword">type</span> Seeker <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Seek</span><span class="token punctuation">(</span>offset <span class="token builtin">int64</span><span class="token punctuation">,</span> whence <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int64</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ReadWriter is the interface that groups the basic Read and Write methods.</span>
<span class="token keyword">type</span> ReadWriter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    Reader
    Writer
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-变量命名" tabindex="-1"><a class="header-anchor" href="#_2-6-变量命名" aria-hidden="true">#</a> 2.6 变量命名</h3>
<ul>
<li>变量名必须遵循驼峰式，首字母根据访问控制决定使用大写或小写。</li>
<li>在相对简单（对象数量少、针对性强）的环境中，可以将一些名称由完整单词简写为单个字母，例如：
<ul>
<li>user 可以简写为 u；</li>
<li>userID 可以简写 uid。</li>
</ul>
</li>
<li>特有名词时，需要遵循以下规则：
<ul>
<li>如果变量为私有，且特有名词为首个单词，则使用小写，如 apiClient。</li>
<li>其他情况都应当使用该名词原有的写法，如 APIClient、repoID、UserID。</li>
</ul>
</li>
</ul>
<p>下面列举了一些常见的特有名词。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// A GonicMapper that contains a list of common initialisms taken from golang/lint
var LintGonicMapper <span class="token operator">=</span> GonicMapper<span class="token punctuation">{</span>
    <span class="token string">"API"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"ASCII"</span><span class="token builtin class-name">:</span> true,
    <span class="token string">"CPU"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"CSS"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"DNS"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"EOF"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"GUID"</span><span class="token builtin class-name">:</span>  true,
    <span class="token string">"HTML"</span><span class="token builtin class-name">:</span>  true,
    <span class="token string">"HTTP"</span><span class="token builtin class-name">:</span>  true,
    <span class="token string">"HTTPS"</span><span class="token builtin class-name">:</span> true,
    <span class="token string">"ID"</span><span class="token builtin class-name">:</span>    true,
    <span class="token string">"IP"</span><span class="token builtin class-name">:</span>    true,
    <span class="token string">"JSON"</span><span class="token builtin class-name">:</span>  true,
    <span class="token string">"LHS"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"QPS"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"RAM"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"RHS"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"RPC"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"SLA"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"SMTP"</span><span class="token builtin class-name">:</span>  true,
    <span class="token string">"SSH"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"TLS"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"TTL"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"UI"</span><span class="token builtin class-name">:</span>    true,
    <span class="token string">"UID"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"UUID"</span><span class="token builtin class-name">:</span>  true,
    <span class="token string">"URI"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"URL"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"UTF8"</span><span class="token builtin class-name">:</span>  true,
    <span class="token string">"VM"</span><span class="token builtin class-name">:</span>    true,
    <span class="token string">"XML"</span><span class="token builtin class-name">:</span>   true,
    <span class="token string">"XSRF"</span><span class="token builtin class-name">:</span>  true,
    <span class="token string">"XSS"</span><span class="token builtin class-name">:</span>   true,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>若变量类型为bool类型，则名称应以Has，Is，Can或Allow开头，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> hasConflict <span class="token builtin">bool</span>
<span class="token keyword">var</span> isExist <span class="token builtin">bool</span>
<span class="token keyword">var</span> canManage <span class="token builtin">bool</span>
<span class="token keyword">var</span> allowGitHook <span class="token builtin">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>局部变量应当尽可能短小，比如使用buf指代buffer，使用i指代index。</li>
<li>代码生成工具自动生成的代码可排除此规则(如<code v-pre>xxx.pb.go</code>里面的Id)</li>
</ul>
<h3 id="_2-7-常量命名" tabindex="-1"><a class="header-anchor" href="#_2-7-常量命名" aria-hidden="true">#</a> 2.7 常量命名</h3>
<ul>
<li>常量名必须遵循驼峰式，首字母根据访问控制决定使用大写或小写。</li>
<li>如果是枚举类型的常量，需要先创建相应类型：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Code defines an error code type.</span>
<span class="token keyword">type</span> Code <span class="token builtin">int</span>

<span class="token comment">// Internal errors.</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    <span class="token comment">// ErrUnknown - 0: An unknown error occurred.</span>
    ErrUnknown Code <span class="token operator">=</span> <span class="token boolean">iota</span>
    <span class="token comment">// ErrFatal - 1: An fatal error occurred.</span>
    ErrFatal
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-error的命名" tabindex="-1"><a class="header-anchor" href="#_2-8-error的命名" aria-hidden="true">#</a> 2.8 Error的命名</h3>
<ul>
<li>Error类型应该写成FooError的形式。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> ExitError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// ....</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Error变量写成ErrFoo的形式。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> ErrFormat <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"unknown format"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-注释规范" tabindex="-1"><a class="header-anchor" href="#_3-注释规范" aria-hidden="true">#</a> 3. 注释规范</h2>
<ul>
<li>每个可导出的名字都要有注释，该注释对导出的变量、函数、结构体、接口等进行简要介绍。</li>
<li>全部使用单行注释，禁止使用多行注释。</li>
<li>和代码的规范一样，单行注释不要过长，禁止超过 120 字符，超过的请使用换行展示，尽量保持格式优雅。</li>
<li>注释必须是完整的句子，以需要注释的内容作为开头，句点作为结尾，<code v-pre>格式为 // 名称 描述.</code>。例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token comment">// logs the flags in the flagset.</span>
<span class="token keyword">func</span> <span class="token function">PrintFlags</span><span class="token punctuation">(</span>flags <span class="token operator">*</span>pflag<span class="token punctuation">.</span>FlagSet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token comment">// PrintFlags logs the flags in the flagset.</span>
<span class="token keyword">func</span> <span class="token function">PrintFlags</span><span class="token punctuation">(</span>flags <span class="token operator">*</span>pflag<span class="token punctuation">.</span>FlagSet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>所有注释掉的代码在提交code review前都应该被删除，否则应该说明为什么不删除，并给出后续处理建议。</p>
</li>
<li>
<p>在多段注释之间可以使用空行分隔加以区分，如下所示：</p>
</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Package superman implements methods for saving the world.</span>
<span class="token comment">//</span>
<span class="token comment">// Experience has shown that a small number of procedures can prove</span>
<span class="token comment">// helpful when attempting to save the world.</span>
<span class="token keyword">package</span> superman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-包注释" tabindex="-1"><a class="header-anchor" href="#_3-1-包注释" aria-hidden="true">#</a> 3.1 包注释</h3>
<ul>
<li>每个包都有且仅有一个包级别的注释。</li>
<li>包注释统一用 // 进行注释，格式为 <code v-pre>// Package 包名 包描述</code>，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Package genericclioptions contains flags which can be added to you command, bound, completed, and produce</span>
<span class="token comment">// useful helper functions.</span>
<span class="token keyword">package</span> genericclioptions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-变量-常量注释" tabindex="-1"><a class="header-anchor" href="#_3-2-变量-常量注释" aria-hidden="true">#</a> 3.2 变量/常量注释</h3>
<ul>
<li>每个可导出的变量/常量都必须有注释说明，<code v-pre>格式为// 变量名 变量描述</code>，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// ErrSigningMethod defines invalid signing method error.</span>
<span class="token keyword">var</span> ErrSigningMethod <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"Invalid signing method"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>出现大块常量或变量定义时，可在前面注释一个总的说明，然后在每一行常量的前一行或末尾详细注释该常量的定义，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Code must start with 1xxxxx.</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    <span class="token comment">// ErrSuccess - 200: OK.</span>
    ErrSuccess <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">100001</span>

    <span class="token comment">// ErrUnknown - 500: Internal server error.</span>
    ErrUnknown

    <span class="token comment">// ErrBind - 400: Error occurred while binding the request body to the struct.</span>
    ErrBind

    <span class="token comment">// ErrValidation - 400: Validation failed.</span>
    ErrValidation
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-结构体注释" tabindex="-1"><a class="header-anchor" href="#_3-3-结构体注释" aria-hidden="true">#</a> 3.3 结构体注释</h3>
<ul>
<li>每个需要导出的结构体或者接口都必须有注释说明，格式为 <code v-pre>// 结构体名 结构体描述.</code>。</li>
<li>结构体内的可导出成员变量名，如果意义不明确，必须要给出注释，放在成员变量的前一行或同一行的末尾。例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// User represents a user restful resource. It is also used as gorm model.</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// Standard object's metadata.</span>
    metav1<span class="token punctuation">.</span>ObjectMeta <span class="token string">`json:"metadata,omitempty"`</span>

    Nickname <span class="token builtin">string</span> <span class="token string">`json:"nickname" gorm:"column:nickname"`</span>
    Password <span class="token builtin">string</span> <span class="token string">`json:"password" gorm:"column:password"`</span>
    Email    <span class="token builtin">string</span> <span class="token string">`json:"email" gorm:"column:email"`</span>
    Phone    <span class="token builtin">string</span> <span class="token string">`json:"phone" gorm:"column:phone"`</span>
    IsAdmin  <span class="token builtin">int</span>    <span class="token string">`json:"isAdmin,omitempty" gorm:"column:isAdmin"`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-方法注释" tabindex="-1"><a class="header-anchor" href="#_3-4-方法注释" aria-hidden="true">#</a> 3.4 方法注释</h3>
<p>每个需要导出的函数或者方法都必须有注释，格式为// 函数名 函数描述.，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// BeforeUpdate run before update database record.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Policy<span class="token punctuation">)</span> <span class="token function">BeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// normal code</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-类型注释" tabindex="-1"><a class="header-anchor" href="#_3-5-类型注释" aria-hidden="true">#</a> 3.5 类型注释</h3>
<ul>
<li>每个需要导出的类型定义和类型别名都必须有注释说明，格式为 <code v-pre>// 类型名 类型描述.</code>，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Code defines an error code type.</span>
<span class="token keyword">type</span> Code <span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-类型" tabindex="-1"><a class="header-anchor" href="#_4-类型" aria-hidden="true">#</a> 4. 类型</h2>
<h3 id="_4-1-字符串" tabindex="-1"><a class="header-anchor" href="#_4-1-字符串" aria-hidden="true">#</a> 4.1 字符串</h3>
<ul>
<li>空字符串判断。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">{</span>
    <span class="token comment">// normal code</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token comment">// normal code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>[]byte</code>/<code v-pre>string</code>相等比较。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> s1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
<span class="token keyword">var</span> s2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
<span class="token operator">...</span>
bytes<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>
bytes<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> s1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
<span class="token keyword">var</span> s2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
<span class="token operator">...</span>
bytes<span class="token punctuation">.</span><span class="token function">Compare</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>
bytes<span class="token punctuation">.</span><span class="token function">Compare</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>复杂字符串使用raw字符串避免字符转义。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span><span class="token string">"\\."</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
regexp<span class="token punctuation">.</span><span class="token function">MustCompile</span><span class="token punctuation">(</span><span class="token string">`\.`</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-切片" tabindex="-1"><a class="header-anchor" href="#_4-2-切片" aria-hidden="true">#</a> 4.2 切片</h3>
<ul>
<li>空slice判断。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token comment">// normal code</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> slice <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    <span class="token comment">// normal code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面判断同样适用于map、channel。</p>
<ul>
<li>声明slice。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>slice复制。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> b1<span class="token punctuation">,</span> b2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> b1 <span class="token punctuation">{</span>
   b2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v
<span class="token punctuation">}</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> b1 <span class="token punctuation">{</span>
   b2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> b1<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token function">copy</span><span class="token punctuation">(</span>b2<span class="token punctuation">,</span> b1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>slice新增。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
    b <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
b <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a<span class="token operator">...</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-结构体" tabindex="-1"><a class="header-anchor" href="#_4-3-结构体" aria-hidden="true">#</a> 4.3 结构体</h3>
<ul>
<li>struct初始化。</li>
</ul>
<p>struct以多行格式初始化。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> user <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Id   <span class="token builtin">int64</span>
	Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

u1 <span class="token operator">:=</span> user<span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">"Colin"</span><span class="token punctuation">}</span>

u2 <span class="token operator">:=</span> user<span class="token punctuation">{</span>
    Id<span class="token punctuation">:</span>   <span class="token number">200</span><span class="token punctuation">,</span>
    Name<span class="token punctuation">:</span> <span class="token string">"Lex"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-控制结构" tabindex="-1"><a class="header-anchor" href="#_5-控制结构" aria-hidden="true">#</a> 5. 控制结构</h2>
<h3 id="_5-1-if" tabindex="-1"><a class="header-anchor" href="#_5-1-if" aria-hidden="true">#</a> 5.1 if</h3>
<ul>
<li>if 接受初始化语句，约定如下方式建立局部变量。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">loadConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	<span class="token comment">// error handling</span>
	<span class="token keyword">return</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>if 对于bool类型的变量，应直接进行真假判断。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> isAllow <span class="token builtin">bool</span>
<span class="token keyword">if</span> isAllow <span class="token punctuation">{</span>
	<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-for" tabindex="-1"><a class="header-anchor" href="#_5-2-for" aria-hidden="true">#</a> 5.2 for</h3>
<ul>
<li>采用短声明建立局部变量。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>sum <span class="token operator">:=</span> <span class="token number">0</span>
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>不要在 for 循环里面使用 defer，defer只有在函数退出时才会执行。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// bad</span>
<span class="token keyword">for</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
	fd<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> fd<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">for</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
	<span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fd<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> err
		<span class="token punctuation">}</span>
		<span class="token keyword">defer</span> fd<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// normal code</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-range" tabindex="-1"><a class="header-anchor" href="#_5-3-range" aria-hidden="true">#</a> 5.3 range</h3>
<ul>
<li>如果只需要第一项（key），就丢弃第二个。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> key <span class="token operator">:=</span> <span class="token keyword">range</span> keys <span class="token punctuation">{</span>
<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果只需要第二项，则把第一项置为下划线。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>sum <span class="token operator">:=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> array <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-switch" tabindex="-1"><a class="header-anchor" href="#_5-4-switch" aria-hidden="true">#</a> 5.4 switch</h3>
<ul>
<li>必须要有default。</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">switch</span> os <span class="token operator">:=</span> runtime<span class="token punctuation">.</span>GOOS<span class="token punctuation">;</span> os <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"linux"</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Linux."</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">"darwin"</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"OS X."</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s.\n"</span><span class="token punctuation">,</span> os<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-goto" tabindex="-1"><a class="header-anchor" href="#_5-5-goto" aria-hidden="true">#</a> 5.5 goto</h3>
<ul>
<li>业务代码禁止使用 goto 。</li>
<li>框架或其他底层源码尽量不用。</li>
</ul>
<h2 id="_6-函数" tabindex="-1"><a class="header-anchor" href="#_6-函数" aria-hidden="true">#</a> 6. 函数</h2>
<ul>
<li>传入变量和返回变量以小写字母开头。</li>
<li>函数参数个数不能超过5个。</li>
<li>函数分组与顺序</li>
<li>函数应按粗略的调用顺序排序。</li>
<li>同一文件中的函数应按接收者分组。</li>
<li>尽量采用值传递，而非指针传递。</li>
<li>传入参数是 map、slice、chan、interface ，不要传递指针。</li>
</ul>
<h3 id="_6-1-函数参数" tabindex="-1"><a class="header-anchor" href="#_6-1-函数参数" aria-hidden="true">#</a> 6.1 函数参数</h3>
<ul>
<li>如果函数返回相同类型的两个或三个参数，或者如果从上下文中不清楚结果的含义，使用命名返回，其他情况不建议使用命名返回，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">coordinate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">float64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// normal code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>传入变量和返回变量都以小写字母开头。</li>
<li>尽量用值传递，非指针传递。</li>
<li>参数数量均不能超过5个。</li>
<li>多返回值最多返回三个，超过三个请使用 struct。</li>
</ul>
<h3 id="_6-2-defer" tabindex="-1"><a class="header-anchor" href="#_6-2-defer" aria-hidden="true">#</a> 6.2 defer</h3>
<ul>
<li>当存在资源创建时，应紧跟defer释放资源(可以大胆使用defer，defer在Go1.14版本中，性能大幅提升，defer的性能损耗即使在性能敏感型的业务中，也可以忽略)。</li>
<li>先判断是否错误，再defer释放资源，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>rep<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> err
<span class="token punctuation">}</span>

<span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-方法的接收器" tabindex="-1"><a class="header-anchor" href="#_6-3-方法的接收器" aria-hidden="true">#</a> 6.3 方法的接收器</h3>
<ul>
<li>推荐以类名第一个英文首字母的小写作为接收器的命名。</li>
<li>接收器的命名在函数超过20行的时候不要用单字符。</li>
<li>接收器的命名不能采用me、this、self这类易混淆名称。</li>
</ul>
<h3 id="_6-4-嵌套" tabindex="-1"><a class="header-anchor" href="#_6-4-嵌套" aria-hidden="true">#</a> 6.4 嵌套</h3>
<ul>
<li>嵌套深度不能超过4层。</li>
</ul>
<h3 id="_6-5-变量命名" tabindex="-1"><a class="header-anchor" href="#_6-5-变量命名" aria-hidden="true">#</a> 6.5 变量命名</h3>
<ul>
<li>变量声明尽量放在变量第一次使用的前面，遵循就近原则。</li>
<li>如果魔法数字出现超过两次，则禁止使用，改用一个常量代替，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// PI ...</span>
<span class="token keyword">const</span> Prise <span class="token operator">=</span> <span class="token number">3.14</span>

<span class="token keyword">func</span> <span class="token function">getAppleCost</span><span class="token punctuation">(</span>n <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> Prise <span class="token operator">*</span> n
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getOrangeCost</span><span class="token punctuation">(</span>n <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> Prise <span class="token operator">*</span> n
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-gopath-设置规范" tabindex="-1"><a class="header-anchor" href="#_7-gopath-设置规范" aria-hidden="true">#</a> 7. GOPATH 设置规范</h2>
<ul>
<li>Go 1.11 之后，弱化了 GOPATH 规则，已有代码（很多库肯定是在1.11之前建立的）肯定符合这个规则，建议保留 GOPATH 规则，便于维护代码。</li>
<li>建议只使用一个 GOPATH，不建议使用多个 GOPATH。如果使用多个GOPATH，编译生效的 bin 目录是在第一个 GOPATH 下。</li>
</ul>
<h2 id="_8-依赖管理" tabindex="-1"><a class="header-anchor" href="#_8-依赖管理" aria-hidden="true">#</a> 8. 依赖管理</h2>
<ul>
<li>Go 1.11 以上必须使用 Go Modules。</li>
<li>使用Go Modules作为依赖管理的项目时，不建议提交vendor目录。</li>
<li>使用Go Modules作为依赖管理的项目时，必须提交go.sum文件。</li>
</ul>
<h3 id="_9-最佳实践" tabindex="-1"><a class="header-anchor" href="#_9-最佳实践" aria-hidden="true">#</a> 9. 最佳实践</h3>
<ul>
<li>尽量少用全局变量，而是通过参数传递，使每个函数都是“无状态”的。这样可以减少耦合，也方便分工和单元测试。</li>
<li>在编译时验证接口的符合性，例如：</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> LogHandler <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  h   http<span class="token punctuation">.</span>Handler
  log <span class="token operator">*</span>zap<span class="token punctuation">.</span>Logger
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token boolean">_</span> http<span class="token punctuation">.</span>Handler <span class="token operator">=</span> LogHandler<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>服务器处理请求时，应该创建一个context，保存该请求的相关信息（如requestID），并在函数调用链中传递。</li>
</ul>
<h3 id="_9-1-性能" tabindex="-1"><a class="header-anchor" href="#_9-1-性能" aria-hidden="true">#</a> 9.1 性能</h3>
<ul>
<li>string 表示的是不可变的字符串变量，对 string 的修改是比较重的操作，基本上都需要重新申请内存。所以，如果没有特殊需要，需要修改时多使用 []byte。</li>
<li>优先使用 strconv 而不是 fmt。</li>
</ul>
<h3 id="_9-2-注意事项" tabindex="-1"><a class="header-anchor" href="#_9-2-注意事项" aria-hidden="true">#</a> 9.2 注意事项</h3>
<ul>
<li>append 要小心自动分配内存，append 返回的可能是新分配的地址。</li>
<li>如果要直接修改 map 的 value 值，则 value 只能是指针，否则要覆盖原来的值。</li>
<li>map 在并发中需要加锁。</li>
<li>编译过程无法检查 interface{} 的转换，只能在运行时检查，小心引起 panic。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这里向你介绍了九类常用的编码规范。但今天的最后，我要在这里提醒你一句：规范是人定的，你也可以根据需要，制定符合你项目的规范，但同时我也建议你采纳这些业界沉淀下来的规范，并通过工具来确保规范的执行。</p>
<h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h2>
<p>这一讲，我向你介绍了九类常用的编码规范。但今天的最后，我要在这里提醒你一句：规范是人定的，你也可以根据需要，制定符合你项目的规范。这也是我在之前的课程里一直强调的思路。但同时我也建议你采纳这些业界沉淀下来的规范，并通过工具来确保规范的执行。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '43.md' style='float:left'>⬆️上一节🔗  </a><a href = '45.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


