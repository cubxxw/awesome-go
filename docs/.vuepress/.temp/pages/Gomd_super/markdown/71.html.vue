<template><div><h1 id="_1-静态文件处理" tabindex="-1"><a class="header-anchor" href="#_1-静态文件处理" aria-hidden="true">#</a> 1. 静态文件处理</h1>
<p>前面我们介绍了如何输出静态页面，但是我们的网页往往包含了很多的静态文件，包括图片、JS、CSS 等，刚才创建的应用里面就创建了如下目录：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├── static
    │   ├── css
    │   ├── img
    │   └── js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>beego 默认注册了 static 目录为静态处理的目录，注册样式：URL 前缀和映射的目录（在/main.go文件中beego.Run()之前加入）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>StaticDir["/static"] = "static"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用户可以设置多个静态文件处理目录，例如你有多个文件下载目录 download1、download2，你可以这样映射（在 /main.go 文件中 beego.Run() 之前加入）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>beego.SetStaticPath("/down1", "download1")
beego.SetStaticPath("/down2", "download2")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样用户访问 URL <code v-pre>http://localhost:8080/down1/123.txt</code> 则会请求 download1 目录下的 123.txt 文件。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '70.md' style='float:left'>⬆️上一节🔗</a><a href = '72.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


