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
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p><strong>开发阶段主要要做的两件事情分别是代码开发和代码提交两个部分。</strong></p>
<p>拿到需求之后，首先需要开发代码。这时，我们就需要选择一个适合团队和项目的 Git 工作流。因为 Git Flow 工作流比较适合大型的非开源项目，所以这里我们选择 Git Flow 工作流。代码开发的具体步骤如下：</p>
<p><strong>第一步：基于 develop 新建一个分支 <code v-pre>feature/helloworld</code></strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature/helloworld develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里需要注意：新建的 branch 名要符合 Git Flow 工作流中的分支命名规则。否则，在 git commit 阶段，会因为 branch 不规范导致 commit 失败。IAM 项目的分支命令规则具体如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302200959749.png" alt="image-20230220095937613"></p>
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


