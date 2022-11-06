<template><div><h1 id="go-测试-模糊、基准、单元测试" tabindex="-1"><a class="header-anchor" href="#go-测试-模糊、基准、单元测试" aria-hidden="true">#</a> Go 测试（模糊、基准、单元测试）</h1>
<p>[toc]</p>
<h2 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h2>
<p><strong>Go语言中自带轻量级的测试框架testing和自带的go test命令来实现单元测试和性能测试</strong></p>
<blockquote>
<p>单元测试能及时发现程序设计或者实现的逻辑错误，而性能测试能使程序在高并发的状态下还能保持稳定。</p>
</blockquote>
<h2 id="测试用例的编写规则" tabindex="-1"><a class="header-anchor" href="#测试用例的编写规则" aria-hidden="true">#</a> 测试用例的编写规则</h2>
<div class="custom-container tip"><p class="custom-container-title">测试规则：</p>
<ol>
<li>测试用例文件必须以 <code v-pre>_test</code> 结尾，例如：<code v-pre>util_test.go</code></li>
<li>功能测试用例方法必须 <code v-pre>Test</code> 开头</li>
<li>模糊测试用例方法必须 <code v-pre>Fuzz</code> 开头</li>
<li>基准测试用例方法必须 <code v-pre>Benchmark</code> 开头</li>
<li>文件夹<code v-pre>_test</code> 结尾的测试包，会被编译成分离包</li>
<li><code v-pre>go help test</code> 、 <code v-pre>go help testflag</code> 查看帮助</li>
</ol>
</div>
<h2 id="go-test-模式" tabindex="-1"><a class="header-anchor" href="#go-test-模式" aria-hidden="true">#</a> go test 模式</h2>
<p><strong>1. 本地模式： <code v-pre>go test</code>或者 <code v-pre>go test -v</code></strong></p>
<p><strong>2. 列表模式：编译并运行命令行上列出的每一个包，<code v-pre>go test util</code>、<code v-pre>go test ./</code> 等</strong></p>
<h2 id="测试用例" tabindex="-1"><a class="header-anchor" href="#测试用例" aria-hidden="true">#</a> 测试用例</h2>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> util

<span class="token comment">/* 测试用例，必须以util_test命名 */</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"testing"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> commTestData <span class="token punctuation">[</span><span class="token punctuation">]</span>commStruct

<span class="token comment">// 定义全局变量，用于测试</span>
<span class="token keyword">type</span> commStruct <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// 代码块</span>
	Group    <span class="token builtin">string</span>
	SizeStr  <span class="token builtin">string</span> <span class="token comment">//输入</span>
	Expected <span class="token builtin">int64</span>  <span class="token comment">//期望值</span>
	Expected <span class="token builtin">string</span> <span class="token comment">//期望值</span>
<span class="token punctuation">}</span>

<span class="token comment">// 功能测试：主要验证功能是否正常</span>
<span class="token keyword">func</span> <span class="token function">TestParseSize</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	testData <span class="token operator">:=</span> commTestData
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> testData <span class="token punctuation">{</span>
		<span class="token keyword">if</span> v<span class="token punctuation">.</span>Group <span class="token operator">==</span> <span class="token string">"ParseSize"</span> <span class="token punctuation">{</span>
			actual <span class="token operator">:=</span> <span class="token function">ParseSize</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>SizeStr<span class="token punctuation">)</span>
			<span class="token keyword">if</span> actual <span class="token operator">!=</span> v<span class="token punctuation">.</span>Expected <span class="token punctuation">{</span>
				t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">"ParseSize(%s) = %d, expected %d"</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span>SizeStr<span class="token punctuation">,</span> actual<span class="token punctuation">,</span> v<span class="token punctuation">.</span>Expected<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模糊测试</span>
<span class="token keyword">func</span> <span class="token function">TestFuzzy</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"util_test.go"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 精确测试</span>
<span class="token keyword">func</span> <span class="token function">TestExact</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"util_test.go"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 性能测试</span>
<span class="token keyword">func</span> <span class="token function">Benchmark</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"util_test.go"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 基准测试</span>
<span class="token keyword">func</span> <span class="token function">Benchmark</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"util_test.go"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// TestMain函数，用于测试前的初始化</span>
<span class="token keyword">func</span> <span class="token function">TestMain</span><span class="token punctuation">(</span>m <span class="token operator">*</span>testing<span class="token punctuation">.</span>M<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">initCommonData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">initCommonData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	commTestData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>commStruct<span class="token punctuation">{</span> <span class="token comment">//测试数据</span>
		<span class="token punctuation">{</span><span class="token string">"ParseSize"</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">"ParseSize"</span><span class="token punctuation">,</span> <span class="token string">"1k"</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">"1k"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">"ParseSize"</span><span class="token punctuation">,</span> <span class="token string">"1m"</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">"1m"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">"ParseSize"</span><span class="token punctuation">,</span> <span class="token string">"1g"</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">"1g"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">"ParseSize"</span><span class="token punctuation">,</span> <span class="token string">"1t"</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">"1t"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">"ParseSize"</span><span class="token punctuation">,</span> <span class="token string">"1p"</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">"1p"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">"ParseSize"</span><span class="token punctuation">,</span> <span class="token string">"1e"</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">"1e"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token string">"ParseSize"</span><span class="token punctuation">,</span> <span class="token string">"1z"</span><span class="token punctuation">,</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token string">"1z"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	m<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '16.md' style='float:left'>⬆️上一节🔗</a><a href = '18.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


