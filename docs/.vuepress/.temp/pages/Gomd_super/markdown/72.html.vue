<template><div><h1 id="gin框架一套解决" tabindex="-1"><a class="header-anchor" href="#gin框架一套解决" aria-hidden="true">#</a> gin框架一套解决</h1>
<nav class="table-of-contents"><ul><li><router-link to="#介绍">介绍</router-link></li><li><router-link to="#要求">要求</router-link></li><li><router-link to="#安装">安装</router-link></li><li><router-link to="#开始">开始</router-link></li><li><router-link to="#hello-word">hello word</router-link></li><li><router-link to="#其他的请求和json">其他的请求和json</router-link><ul><li><router-link to="#相应-json-数据并且返回自定义-json-名称">相应 json 数据并且返回自定义 json 名称</router-link></li><li><router-link to="#响应-jsonp-请求">响应 jsonp 请求</router-link></li><li><router-link to="#加载yaml和xml">加载yaml和xml</router-link></li><li><router-link to="#加载html">加载html</router-link></li></ul></li><li><router-link to="#gin框架采用的路由库">gin框架采用的路由库</router-link></li><li><router-link to="#gin模板渲染">Gin模板渲染</router-link></li><li><router-link to="#预定义函数">预定义函数</router-link><ul><li><router-link to="#常用的内置函数和自定义模板函数">常用的内置函数和自定义模板函数</router-link></li></ul></li><li><router-link to="#加载一个公共的模板">加载一个公共的模板</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<ul>
<li>Gin是一个golang的微框架，封装比较优雅，API友好，源码注释比较明确，具有快速灵活，容错方便等特点</li>
<li>对于golang而言，web框架的依赖要远比Python，Java之类的要小。自身的<code v-pre>net/http</code>足够简单，性能也非常不错</li>
<li>借助框架开发，不仅可以省去很多常用的封装带来的时间，也有助于团队的编码风格和形成规范</li>
</ul>
<h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2>
<ul>
<li>Go 1.13 及以上版本</li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>要安装 Gin 软件包，需要先安装 Go 并设置 Go 工作区。</p>
<p><strong>1.下载并安装 gin：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> github.com/gin-gonic/gin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>💡 补充<strong>get</strong>参数：</p>
<table>
<thead>
<tr>
<th>附加参数</th>
<th>备  注</th>
</tr>
</thead>
<tbody>
<tr>
<td>-v</td>
<td>显示操作流程的日志及信息，方便检查错误</td>
</tr>
<tr>
<td>-u</td>
<td>下载丢失的包，但不会更新已经存在的包</td>
</tr>
<tr>
<td>-d</td>
<td>只下载，不安装</td>
</tr>
<tr>
<td>-insecure</td>
<td>允许使用不安全的 HTTP 方式进行下载操作</td>
</tr>
</tbody>
</table>
</blockquote>
<p><strong>2.将 gin 引入到代码中：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">"github.com/gin-gonic/gin"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3.（可选）如果使用诸如 <code v-pre>http.StatusOK</code> 之类的常量，则需要引入 <code v-pre>net/http</code> 包：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">"net/http"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4.创建你的项目文件夹并 <code v-pre>cd</code> 进去</strong></p>
<blockquote>
<p>如果是用的<code v-pre>mod</code>包，那么并不需要</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$GOPATH</span>/src/github.com/myusername/project <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable">$_</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5.拷贝一个初始模板到你的项目里</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> https://raw.githubusercontent.com/gin-gonic/examples/master/basic/main.go <span class="token operator">></span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>网络不行可以直接访问 <a href="https://raw.githubusercontent.com/gin-gonic/examples/master/basic/main.go" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>复制到<code v-pre>main.go</code></p>
</blockquote>
<p><strong>6.运行你的项目</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>最后访问即可：</p>
<p><img src="http://sm.nsddd.top/smimage-20221013225622549.png?xxw@nsddd.top" alt="image-20221013225622549"></p>
</blockquote>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<blockquote>
<p>不确定如何编写和执行 Go 代码? <a href="https://go.nsddd.top" target="_blank" rel="noopener noreferrer">点击这里<ExternalLinkIcon/></a>.</p>
</blockquote>
<p>首先，创建一个名为 <code v-pre>example.go</code> 的文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">touch</span> example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来, 将如下的代码写入 <code v-pre>example.go</code> 中：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"github.com/gin-gonic/gin"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/ping"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"pong"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 监听并在 0.0.0.0:8080 上启动服务</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后, 执行 <code v-pre>go run example.go</code> 命令来运行代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 运行 example.go 并且在浏览器中访问 HOST_IP:8080/ping</span>
$ go run example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<p><img src="http://sm.nsddd.top/smimage-20221013225920708.png?xxw@nsddd.top" alt="image-20221013225920708"></p>
<h2 id="hello-word" tabindex="-1"><a class="header-anchor" href="#hello-word" aria-hidden="true">#</a> hello word</h2>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"net/http"</span>

    <span class="token string">"github.com/gin-gonic/gin"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.创建路由</span>
   r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token comment">// 2.绑定路由规则，执行的函数</span>
   <span class="token comment">// gin.Context，封装了request和response</span>
   r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">"hello World!"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token comment">// 3.监听端口，默认在8080</span>
   <span class="token comment">// Run("里面不指定端口号默认为8080") </span>
   r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">":8000"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20221013230032119.png?xxw@nsddd.top" alt="image-20221013230032119"></p>
<h2 id="其他的请求和json" tabindex="-1"><a class="header-anchor" href="#其他的请求和json" aria-hidden="true">#</a> 其他的请求和json</h2>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// gin</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"net/http"</span>

	<span class="token string">"github.com/gin-gonic/gin"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//创建gin实例</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//设置路由:请求方式,路径,处理函数</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/ping"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">"这是一个Get ping请求"</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"pong"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//Post请求: http://localhost:8080/login 表示向服务器发送登录请求</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">"登录成功,这是一个Post请求"</span><span class="token punctuation">)</span>
		<span class="token comment">//获取参数</span>
		username <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">PostForm</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span>
		password <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">PostForm</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span>
		<span class="token comment">//返回json数据</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">"username"</span><span class="token punctuation">:</span> username<span class="token punctuation">,</span>
			<span class="token string">"password"</span><span class="token punctuation">:</span> password<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//Put请求: http://localhost:8080/put 表示向服务器发送修改请求</span>
	r<span class="token punctuation">.</span><span class="token function">PUT</span><span class="token punctuation">(</span><span class="token string">"/put"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">"修改成功,这是一个Put请求"</span><span class="token punctuation">)</span>
		<span class="token comment">//获取参数</span>
		username <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">PostForm</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span> <span class="token comment">//当存在POST urlenencoded表单或multipart表单时，PostForm返回指定的键，否则返回空字符串'("")'</span>
		password <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">PostForm</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span>
		<span class="token comment">//返回json数据 : 传入的数据：状态码和空接口类型数据</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span> <span class="token comment">//gin.H是map[string]interface{}的简写,http.StatusOK是200</span>
			<span class="token string">"username"</span><span class="token punctuation">:</span> username<span class="token punctuation">,</span>
			<span class="token string">"password"</span><span class="token punctuation">:</span> password<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//Delete请求: http://localhost:8080/delete 表示向服务器发送删除请求</span>
	r<span class="token punctuation">.</span><span class="token function">DELETE</span><span class="token punctuation">(</span><span class="token string">"/delete"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">"删除成功,这是一个Delete请求"</span><span class="token punctuation">)</span>
		<span class="token comment">//获取参数</span>
		username <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">PostForm</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span>
		password <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">PostForm</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span>
		<span class="token comment">//返回json数据</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">"username"</span><span class="token punctuation">:</span> username<span class="token punctuation">,</span>
			<span class="token string">"password"</span><span class="token punctuation">:</span> password<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//监听端口</span>

	<span class="token comment">// r.Run() 启动HTTP服务，默认在 0.0.0.0:8080 启动服务</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">":3001"</span><span class="token punctuation">)</span> <span class="token comment">//也可以使用这种方式设置端口</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS D:<span class="token punctuation">\</span>文档<span class="token punctuation">\</span>最近的<span class="token punctuation">\</span>awesome-golang<span class="token punctuation">\</span>docs<span class="token punctuation">\</span>code<span class="token punctuation">\</span>go-super<span class="token punctuation">\</span>gin<span class="token operator">></span> air

  __    _   ___
 / /<span class="token punctuation">\</span>  <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span>
/_/--<span class="token punctuation">\</span> <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span> <span class="token punctuation">\</span>_ , built with Go

watching <span class="token builtin class-name">.</span>
<span class="token operator">!</span>exclude tmp
building<span class="token punctuation">..</span>.
running<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> Creating an Engine instance with the Logger and Recovery middleware already attached.

<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> Running <span class="token keyword">in</span> <span class="token string">"debug"</span> mode. Switch to <span class="token string">"release"</span> mode <span class="token keyword">in</span> production.
 - using env:   <span class="token builtin class-name">export</span> <span class="token assign-left variable">GIN_MODE</span><span class="token operator">=</span>release
 - using code:  gin.SetMode<span class="token punctuation">(</span>gin.ReleaseMode<span class="token punctuation">)</span>

<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> GET    /ping                     --<span class="token operator">></span> main.main.func1 <span class="token punctuation">(</span><span class="token number">3</span> handlers<span class="token punctuation">)</span>
<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> POST   /login                    --<span class="token operator">></span> main.main.func2 <span class="token punctuation">(</span><span class="token number">3</span> handlers<span class="token punctuation">)</span>
<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> PUT    /put                      --<span class="token operator">></span> main.main.func3 <span class="token punctuation">(</span><span class="token number">3</span> handlers<span class="token punctuation">)</span>
<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> DELETE /delete                   --<span class="token operator">></span> main.main.func4 <span class="token punctuation">(</span><span class="token number">3</span> handlers<span class="token punctuation">)</span>
<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> You trusted all proxies, this is NOT safe. We recommend you to <span class="token builtin class-name">set</span> a value.
Please check https://pkg.go.dev/github.com/gin-gonic/gin<span class="token comment">#readme-don-t-trust-all-proxies for details.</span>
<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> Listening and serving HTTP on :3001
<span class="token punctuation">[</span>GIN<span class="token punctuation">]</span> <span class="token number">2022</span>/11/01 - <span class="token number">20</span>:45:41 <span class="token operator">|</span> <span class="token number">200</span> <span class="token operator">|</span>            0s <span class="token operator">|</span>       <span class="token number">127.0</span>.0.1 <span class="token operator">|</span> PUT      <span class="token string">"/put"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20221101204631005.png" alt="image-20221101204631005"></p>
<h3 id="相应-json-数据并且返回自定义-json-名称" tabindex="-1"><a class="header-anchor" href="#相应-json-数据并且返回自定义-json-名称" aria-hidden="true">#</a> 相应 json 数据并且返回自定义 json 名称</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 定义结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Username <span class="token builtin">string</span> <span class="token string">`json:"用户名"`</span>
	Password <span class="token builtin">string</span> <span class="token string">`json:"密码"`</span>
<span class="token punctuation">}</span>	
<span class="token comment">// jaon</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">"/json"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//声明结构体</span>
		a <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>
			Username<span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
			Password<span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
		<span class="token comment">//绑定参数</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-josn ext-josn line-numbers-mode"><pre v-pre class="language-josn"><code>{
    &quot;用户名&quot;: &quot;admin&quot;,
    &quot;密码&quot;: &quot;123456&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应-jsonp-请求" tabindex="-1"><a class="header-anchor" href="#响应-jsonp-请求" aria-hidden="true">#</a> 响应 jsonp 请求</h3>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 定义结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Username <span class="token builtin">string</span> <span class="token string">`json:"用户名"`</span>
	Password <span class="token builtin">string</span> <span class="token string">`json:"密码"`</span>
<span class="token punctuation">}</span>	
<span class="token comment">// jaon</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//相应jsonp数据: http://localhost:3001/jsonp?callback=callback</span>
	r<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"/jsonp"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//声明结构体</span>
		a <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>
			Username<span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
			Password<span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
		<span class="token comment">//绑定参数</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>callback(<span class="token punctuation">{</span><span class="token property">"用户名"</span><span class="token operator">:</span><span class="token string">"admin"</span><span class="token punctuation">,</span><span class="token property">"密码"</span><span class="token operator">:</span><span class="token string">"123456"</span><span class="token punctuation">}</span>);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="加载yaml和xml" tabindex="-1"><a class="header-anchor" href="#加载yaml和xml" aria-hidden="true">#</a> 加载yaml和xml</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 定义结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Username <span class="token builtin">string</span> <span class="token string">`json:"用户名"`</span>
	Password <span class="token builtin">string</span> <span class="token string">`json:"密码"`</span>
<span class="token punctuation">}</span>	
<span class="token comment">// jaon</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//相应xml数据: http://localhost:3001/xml</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/xml"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//声明结构体</span>
		a <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>
			Username<span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
			Password<span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//返回xml数据</span>
		c<span class="token punctuation">.</span><span class="token function">XML</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//相应yaml数据: http://localhost:3001/yaml</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/yaml"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//声明结构体</span>
		a <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>
			Username<span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
			Password<span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//返回yaml数据</span>
		c<span class="token punctuation">.</span><span class="token function">YAML</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#xml:</span>
<span class="token operator">&lt;</span>User<span class="token operator">></span>
    <span class="token operator">&lt;</span>Username<span class="token operator">></span>admin<span class="token operator">&lt;</span>/Username<span class="token operator">></span>
    <span class="token operator">&lt;</span>Password<span class="token operator">></span><span class="token number">12345</span><span class="token operator"><span class="token file-descriptor important">6</span>&lt;</span>/Password<span class="token operator">></span>
<span class="token operator">&lt;</span>/User<span class="token operator">></span>

<span class="token comment">#yml</span>
username: admin
password: <span class="token string">"123456"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加载html" tabindex="-1"><a class="header-anchor" href="#加载html" aria-hidden="true">#</a> 加载html</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//对应html数据: http://localhost:3001/html</span>
r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/html"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//声明结构体</span>
	a <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>
		Username<span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
		Password<span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//返回html数据</span>
	c<span class="token punctuation">.</span><span class="token function">HTML</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">"./web/index.html"</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">"test"</span><span class="token punctuation">:</span> a<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gin框架采用的路由库" tabindex="-1"><a class="header-anchor" href="#gin框架采用的路由库" aria-hidden="true">#</a> gin框架采用的路由库</h2>
<ul>
<li><code v-pre>gin</code> 框架中采用的路由库是基于httprouter做的</li>
<li>地址为：https://github.com/julienschmidt/httprouter</li>
</ul>
<h2 id="gin模板渲染" tabindex="-1"><a class="header-anchor" href="#gin模板渲染" aria-hidden="true">#</a> Gin模板渲染</h2>
<p><code v-pre>main.go</code> 文件：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"net/http"</span>

	<span class="token string">"github.com/gin-gonic/gin"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> New <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Title   <span class="token builtin">string</span> <span class="token string">`json:"新闻标题"`</span>
	Content <span class="token builtin">string</span> <span class="token string">`json:"新闻内容"`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">//html: http://localhost:8080/</span>
	r<span class="token punctuation">.</span><span class="token function">LoadHTMLGlob</span><span class="token punctuation">(</span><span class="token string">"templates/*"</span><span class="token punctuation">)</span> <span class="token comment">//表示加载templates文件夹下的所有文件</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">HTML</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">"index.html"</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">"title"</span><span class="token punctuation">:</span> <span class="token string">"Main website"</span><span class="token punctuation">,</span>
			<span class="token string">"t"</span><span class="token punctuation">:</span>     <span class="token string">"xiongxinwei"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//html: http://localhost:8080/news</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/news"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		n <span class="token operator">:=</span> <span class="token operator">&amp;</span>New<span class="token punctuation">{</span>
			Title<span class="token punctuation">:</span>   <span class="token string">"new title"</span><span class="token punctuation">,</span>
			Content<span class="token punctuation">:</span> <span class="token string">"new content"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>

		c<span class="token punctuation">.</span><span class="token function">HTML</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">"news.html"</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">"title"</span><span class="token punctuation">:</span> <span class="token string">"News website"</span><span class="token punctuation">,</span>
			<span class="token string">"news"</span><span class="token punctuation">:</span>  n<span class="token punctuation">,</span>
			<span class="token string">"t"</span><span class="token punctuation">:</span>     <span class="token string">"t"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>index.html</code> 文件：</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>这是index文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 渲染 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>t = {{.t}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    {{$t = .title}}  <span class="token comment">&lt;!-- 定义变量 --></span>
    {{$t}}  <span class="token comment">&lt;!-- 使用变量 --></span>
    {{$t = 30 }}  <span class="token comment">&lt;!-- 修改变量 --></span>
    {{$t}}  <span class="token comment">&lt;!-- 使用变量 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{.t}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>news.html</code> 文件：</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>这是news文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 渲染 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 访问news --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        {{.news}}  <span class="token comment">&lt;!-- 拿到结构体对象 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        {{.news.Title}}  <span class="token comment">&lt;!-- 拿到结构体对象的属性 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        {{.news.Content}}  <span class="token comment">&lt;!-- 拿到结构体对象的属性 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>🚀 编译结果如下：</summary>
<p><img src="http://sm.nsddd.top/smimage-20221102110508517.png" alt="image-20221102110508517"></p>
<p><img src="http://sm.nsddd.top/smimage-20221102110523505.png" alt="image-20221102110523505"></p>
<p><img src="http://sm.nsddd.top/smimage-20221102110542458.png" alt="image-20221102110542458"></p>
</details>
<h2 id="预定义函数" tabindex="-1"><a class="header-anchor" href="#预定义函数" aria-hidden="true">#</a> 预定义函数</h2>
<details class="custom-container details"><summary>预定义函数浏览⚡</summary>
<p>预定义的全局变量：</p>
<ol>
<li>通过 <code v-pre>{{.}}</code> 访问结构体对象</li>
<li>通过 <code v-pre>{{.属性名}}</code> 访问结构体对象的属性</li>
<li><code v-pre>.</code> 当前对象</li>
<li><code v-pre>..</code> 父对象</li>
<li><code v-pre>index</code> 当前对象的索引</li>
<li><code v-pre>len</code> 当前对象的长度</li>
<li><code v-pre>urlquery</code> 当前对象的URL编码</li>
<li><code v-pre>js</code> 当前对象的JavaScript编码</li>
<li><code v-pre>html</code> 当前对象的HTML编码</li>
<li><code v-pre>json</code> 当前对象的JSON编码</li>
<li><code v-pre>xml</code> 当前对象的XML编码</li>
<li><code v-pre>yaml</code> 当前对象的YAML编码</li>
<li><code v-pre>csv</code> 当前对象的CSV编码</li>
<li><code v-pre>tsv</code> 当前对象的TSV编码</li>
<li><code v-pre>urlpath</code> 当前对象的URL路径编码</li>
<li><code v-pre>slice</code> 当前对象的切片</li>
<li><code v-pre>first</code> 当前对象的第一个元素</li>
<li><code v-pre>last</code> 当前对象的最后一个元素</li>
<li><code v-pre>sort</code> 当前对象的排序</li>
<li><code v-pre>reverse</code> 当前对象的反转</li>
<li><code v-pre>and</code> 当前对象的逻辑与</li>
<li><code v-pre>or</code> 当前对象的逻辑或</li>
<li><code v-pre>not</code> 当前对象的逻辑非</li>
<li><code v-pre>eq</code> 当前对象的等于</li>
<li><code v-pre>ne</code> 当前对象的不等于</li>
<li><code v-pre>lt</code> 当前对象的小于</li>
<li><code v-pre>le</code> 当前对象的小于等于</li>
<li><code v-pre>gt</code> 当前对象的大于</li>
<li><code v-pre>ge</code> 当前对象的大于等于</li>
<li><code v-pre>add</code> 当前对象的加法</li>
<li><code v-pre>sub</code> 当前对象的减法</li>
<li><code v-pre>mul</code> 当前对象的乘法</li>
<li><code v-pre>div</code> 当前对象的除法</li>
<li><code v-pre>mod</code> 当前对象的取模</li>
<li><code v-pre>call</code> 当前对象的函数调用</li>
<li><code v-pre>print</code> 当前对象的打印</li>
<li><code v-pre>printf</code> 当前对象的格式化打印</li>
<li><code v-pre>println</code> 当前对象的换行打印</li>
</ol>
</details>
<h3 id="常用的内置函数和自定义模板函数" tabindex="-1"><a class="header-anchor" href="#常用的内置函数和自定义模板函数" aria-hidden="true">#</a> 常用的内置函数和自定义模板函数</h3>
<p>💡简单的一个案例如下（<code v-pre>main.go</code> 文件）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"html/template"</span>
	<span class="token string">"net/http"</span>

	<span class="token string">"github.com/gin-gonic/gin"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> New <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Title   <span class="token builtin">string</span> <span class="token string">`json:"this is 新闻标题"`</span>
	Content <span class="token builtin">string</span> <span class="token string">`json:"this is 新闻内容"`</span>
<span class="token punctuation">}</span>

<span class="token comment">// 自定义模板函数</span>
<span class="token keyword">func</span> <span class="token function">Text</span><span class="token punctuation">(</span>title <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"title:"</span><span class="token punctuation">,</span> title<span class="token punctuation">)</span>
	<span class="token keyword">return</span> title <span class="token operator">+</span> <span class="token string">" this is 自定义模板函数Text"</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Text2</span><span class="token punctuation">(</span>title <span class="token builtin">string</span><span class="token punctuation">,</span> content <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"title:"</span><span class="token punctuation">,</span> title<span class="token punctuation">,</span> <span class="token string">"content:"</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span>
	<span class="token keyword">return</span> title <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> content <span class="token operator">+</span> <span class="token string">" this is 自定义模板函数Text2"</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 加载自定义模板函数</span>
	r<span class="token punctuation">.</span><span class="token function">SetFuncMap</span><span class="token punctuation">(</span>template<span class="token punctuation">.</span>FuncMap<span class="token punctuation">{</span>
		<span class="token string">"Text"</span><span class="token punctuation">:</span>  Text<span class="token punctuation">,</span>
		<span class="token string">"Text2"</span><span class="token punctuation">:</span> Text2<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">//html: http://localhost:8080/</span>
	r<span class="token punctuation">.</span><span class="token function">LoadHTMLGlob</span><span class="token punctuation">(</span><span class="token string">"templates/*"</span><span class="token punctuation">)</span> <span class="token comment">//表示加载templates文件夹下的所有文件</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">HTML</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">"index.html"</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">"title"</span><span class="token punctuation">:</span>  <span class="token string">"this is a title"</span><span class="token punctuation">,</span>
			<span class="token string">"msg"</span><span class="token punctuation">:</span>    <span class="token string">"this is a msg"</span><span class="token punctuation">,</span>
			<span class="token string">"score"</span><span class="token punctuation">:</span>  <span class="token number">99</span><span class="token punctuation">,</span>                          <span class="token comment">//score是int类型，表示分数</span>
			<span class="token string">"score2"</span><span class="token punctuation">:</span> <span class="token number">99.9</span><span class="token punctuation">,</span>                        <span class="token comment">//score2是float64类型，表示分数</span>
			<span class="token string">"score3"</span><span class="token punctuation">:</span> <span class="token string">"99.9"</span><span class="token punctuation">,</span>                      <span class="token comment">//score3是string类型，表示分数</span>
			<span class="token string">"hobby"</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"篮球"</span><span class="token punctuation">,</span> <span class="token string">"足球"</span><span class="token punctuation">,</span> <span class="token string">"乒乓球"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//hobby是切片类型，表示爱好  //hobby是切片类型，表示爱好</span>
			<span class="token string">"map"</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span> <span class="token comment">//map是map类型，表示地图</span>
				<span class="token string">"address"</span><span class="token punctuation">:</span> <span class="token string">"北京市海淀区"</span><span class="token punctuation">,</span>
				<span class="token string">"tel"</span><span class="token punctuation">:</span>     <span class="token string">"010-12345678"</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>

			<span class="token comment">//结构体</span>
			<span class="token string">"news"</span><span class="token punctuation">:</span> <span class="token operator">&amp;</span>New<span class="token punctuation">{</span>
				Title<span class="token punctuation">:</span>   <span class="token string">"新闻标题"</span><span class="token punctuation">,</span>
				Content<span class="token punctuation">:</span> <span class="token string">"新闻内容"</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>index.html</code> 文件：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 缩小h6间距 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">h6</span> <span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>这是index文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 渲染 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>titls = {{.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>msg = {{.msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>score(int类型分数) = {{.score}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>score2(float64类型分数) = {{.score2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>score3(string类型分数) = {{.score3}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>hobby(切片类型爱好) = {{.hobby}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>map(地图) = {{.map}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>news(结构体) = {{.news}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>news.Title(结构体属性) = {{.news.Title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 求msg长度 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>msg长度 = {{len .msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 判断msg是否为空 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>msg是否为空 = {{if .msg}}不为空{{else}}为空{{end}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 判断score是否大于60 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>score是否大于60 = {{if gt .score 60}}大于60{{else}}小于60{{end}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 遍历hobby --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>hobby(切片类型爱好) = {{range .hobby}}{{.}} {{end}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 遍历map --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>map(地图) = {{range $key, $value := .map}}{{$key}} = {{$value}} {{end}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 自定义模板函数
        直接在模板中调用，比如下面的函数，直接在模板中调用
    --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>自定义模板函数/h3>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>自定义模板函数 = {{Text .title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>自定义模板函数2 = {{Text2 .title .msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<p><img src="http://sm.nsddd.top/smimage-20221102115622008.png" alt="image-20221102115622008"></p>
<h2 id="加载一个公共的模板" tabindex="-1"><a class="header-anchor" href="#加载一个公共的模板" aria-hidden="true">#</a> 加载一个公共的模板</h2>
<p>加载一个公共的模板，也可以叫做嵌套 <code v-pre>template</code></p>
<blockquote>
<p>我们一个项目里面可能有一个公共的头部或者尾部，就像我们这个仓库一样，每一页都有一个模板：</p>
<p><img src="http://sm.nsddd.top/smimage-20221102120417428.png" alt="image-20221102120417428"></p>
</blockquote>
<p><strong>在每个html 文件的任意位置都可以使用， 注意后面的 <code v-pre>.</code></strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 公共模板 头部--></span>
{{template "public/page_header.html" .}}
    
<span class="token comment">&lt;!-- 公共模板 尾部--></span>
{{template "public/page_footer.html" .}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>public/page_header.html</code> 文件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 相当于给模板定义一个名字，define end 成对出现 --></span>
{{define "public/page_foorter"}}
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">h1</span><span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>  <span class="token comment">/* 背景色 */</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>  <span class="token comment">/* 文字居中 */</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>this is a public test page - footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>public/page_footer.html</code> 文件：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 相当于给模板定义一个名字，define end 成对出现 --></span>
{{define "public/page_header"}}
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">h1</span><span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>  <span class="token comment">/* 背景色 */</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>  <span class="token comment">/* 文字居中 */</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>this is a public test page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '71.md' style='float:left'>⬆️上一节🔗</a><a href = '73.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


