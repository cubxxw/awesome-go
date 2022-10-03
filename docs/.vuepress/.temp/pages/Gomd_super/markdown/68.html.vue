<template><div><h1 id="_1-controller运行机制" tabindex="-1"><a class="header-anchor" href="#_1-controller运行机制" aria-hidden="true">#</a> 1. Controller运行机制</h1>
<h1 id="_2-controller-逻辑" tabindex="-1"><a class="header-anchor" href="#_2-controller-逻辑" aria-hidden="true">#</a> 2. controller 逻辑</h1>
<p>前面我们了解了如何把用户的请求分发到控制器，这小节我们就介绍大家如何来写控制器，首先我们还是从源码分析入手：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package controllers

import (
        "github.com/astaxie/beego"
)

type MainController struct {
        beego.Controller
}

func (this *MainController) Get() {
        this.Data["Website"] = "beego.me"
        this.Data["Email"] = "astaxie@gmail.com"
        this.TplName = "index.tpl"
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码显示首先我们声明了一个控制器 <code v-pre>MainController</code>，这个控制器里面内嵌了 <code v-pre>beego.Controller</code>，这就是 Go 的嵌入方式，也就是 <code v-pre>MainController</code> 自动拥有了所有 <code v-pre>beego.Controller</code> 的方法。</p>
<p>而 <code v-pre>beego.Controller</code> 拥有很多方法，其中包括 <code v-pre>Init</code>、<code v-pre>Prepare</code>、<code v-pre>Post</code>、<code v-pre>Get</code>、<code v-pre>Delete</code>、<code v-pre>Head</code> 等方法。我们可以通过重写的方式来实现这些方法，而我们上面的代码就是重写了 <code v-pre>Get</code> 方法。</p>
<p>我们先前介绍过 beego 是一个 RESTful 的框架，所以我们的请求默认是执行对应 <code v-pre>req.Method</code> 的方法。例如浏览器的是 <code v-pre>GET</code> 请求，那么默认就会执行 <code v-pre>MainController</code> 下的 <code v-pre>Get</code> 方法。这样我们上面的 Get 方法就会被执行到，这样就进入了我们的逻辑处理。（用户可以改变这个行为，通过注册自定义的函数名</p>
<p>里面的代码是需要执行的逻辑，这里只是简单的输出数据，我们可以通过各种方式获取数据，然后赋值到 <code v-pre>this.Data</code> 中，这是一个用来存储输出数据的 map，可以赋值任意类型的值，这里我们只是简单举例输出两个字符串。</p>
<p>最后一个就是需要去渲染的模板，<code v-pre>this.TplName</code> 就是需要渲染的模板，这里指定了 <code v-pre>index.tpl</code>，如果用户不设置该参数，那么默认会去到模板目录的 <code v-pre>Controller/&lt;方法名&gt;.tpl</code> 查找，例如上面的方法会去 <code v-pre>maincontroller/get.tpl</code> *<strong>(文件、文件夹必须小写)*</strong>。</p>
<p>用户设置了模板之后系统会自动的调用 <code v-pre>Render</code> 函数（这个函数是在 beego.Controller 中实现的），所以无需用户自己来调用渲染。</p>
<p>当然也可以不使用模版，直接用 <code v-pre>this.Ctx.WriteString</code> 输出字符串，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func (this *MainController) Get() {
        this.Ctx.WriteString("hello")
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '67.md' style='float:left'>⬆️上一节🔗</a><a href = '69.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


