<template><div><h1 id="go语言命名规范" tabindex="-1"><a class="header-anchor" href="#go语言命名规范" aria-hidden="true">#</a> Go语言命名规范</h1>
<p>[toc]</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<blockquote>
<p><a href="https://www.uber.com/" target="_blank" rel="noopener noreferrer">Uber<ExternalLinkIcon/></a> 是一家美国硅谷的科技公司，也是 Go 语言的早期 adopter。其开源了很多 golang 项目，诸如被 Gopher 圈熟知的 <a href="https://github.com/uber-go/zap" target="_blank" rel="noopener noreferrer">zap<ExternalLinkIcon/></a>、<a href="https://github.com/jaegertracing/jaeger" target="_blank" rel="noopener noreferrer">jaeger<ExternalLinkIcon/></a> 等。2018 年年末 Uber 将内部的 <a href="https://github.com/uber-go/guide" target="_blank" rel="noopener noreferrer">Go 风格规范<ExternalLinkIcon/></a> 开源到 GitHub，经过一年的积累和更新，该规范已经初具规模，并受到广大 Gopher 的关注。Uber是该规范的中文版本。</p>
</blockquote>
<ul>
<li>[x] <a href="https://github.com/golang/go/wiki/CodeReviewComments" target="_blank" rel="noopener noreferrer">参考谷歌的命名规则<ExternalLinkIcon/></a></li>
<li>[x] <a href="https://github.com/xxjwxc/uber_go_guide_cn" target="_blank" rel="noopener noreferrer">Uber Go 语言编码规范中文版<ExternalLinkIcon/></a></li>
</ul>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<p><strong>目录建议全部小写为主（因为Linux区分大小写)，个人比较习惯使用中画线</strong></p>
<blockquote>
<p>不太建议下划线，下划线在某些地方可能下划线不明显（变量名可以用字母、下划线组成）。</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>my-project-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>子目录按照作用，使用单词表示，有复数情况，使用复数命名。</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>scripts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h2>
<p><strong>文件个人比较习惯使用下画线</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>my_file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<p><strong>变量命名两种方法</strong></p>
<ul>
<li>下划线命名：<code v-pre>my_varibale</code></li>
<li>驼峰式命名：<code v-pre>myVariale</code></li>
</ul>
<h3 id="javascript-驼峰" tabindex="-1"><a class="header-anchor" href="#javascript-驼峰" aria-hidden="true">#</a> javascript：驼峰</h3>
<h3 id="css-中划线" tabindex="-1"><a class="header-anchor" href="#css-中划线" aria-hidden="true">#</a> css：中划线</h3>
</div></template>


