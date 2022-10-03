<template><div><h1 id="_1-view编写" tabindex="-1"><a class="header-anchor" href="#_1-view编写" aria-hidden="true">#</a> 1. View编写</h1>
<p>在前面编写 Controller 的时候，我们在 Get 里面写过这样的语句 <code v-pre>this.TplName = &quot;index.tpl&quot;</code>，设置显示的模板文件，默认支持 <code v-pre>tpl</code> 和 <code v-pre>html</code> 的后缀名，如果想设置其他后缀你可以调用 <code v-pre>beego.AddTemplateExt</code> 接口设置，那么模板如何来显示相应的数据呢？beego 采用了 Go 语言默认的模板引擎，所以和 Go 的模板语法一样，Go 模板的详细使用方法请参考《Go Web 编程》模板使用指南</p>
<p>我们看看快速入门里面的代码（去掉了 css 样式）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>

&lt;html>
    &lt;head>
        &lt;title>Beego&lt;/title>
        &lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    &lt;/head>
    &lt;body>
        &lt;header class="hero-unit" style="background-color:#A9F16C">
            &lt;div class="container">
                &lt;div class="row">
                    &lt;div class="hero-text">
                        &lt;h1>Welcome to Beego!&lt;/h1>
                        &lt;p class="description">
                            Beego is a simple &amp; powerful Go web framework which is inspired by tornado and sinatra.
                            &lt;br />
                            Official website: &lt;a href="http://{{.Website}}">{{.Website}}&lt;/a>
                            &lt;br />
                            Contact me: {{.Email}}
                        &lt;/p>
                    &lt;/div>
                &lt;/div>
            &lt;/div>
        &lt;/header>
    &lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在 Controller 里面把数据赋值给了 data（map 类型），然后我们在模板中就直接通过 key 访问 <code v-pre>.Website</code> 和 <code v-pre>.Email</code> 。这样就做到了数据的输出。接下来我们讲解如何让静态文件输出。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '69.md' style='float:left'>⬆️上一节🔗</a><a href = '71.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


