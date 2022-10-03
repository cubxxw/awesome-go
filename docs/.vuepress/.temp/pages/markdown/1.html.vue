<template><div><h1 id="go语言基本语法和数据类型" tabindex="-1"><a class="header-anchor" href="#go语言基本语法和数据类型" aria-hidden="true">#</a> go语言基本语法和数据类型</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-🐧应用场景">1. 🐧应用场景</router-link></li><li><router-link to="#_2-🗃️特点">2.🗃️特点</router-link></li><li><router-link to="#_3-⚒️使用工具">3.⚒️使用工具</router-link></li><li><router-link to="#_4-🔦环境搭建">4.🔦环境搭建</router-link><ul><li><router-link to="#_4-1-windows下搭建go-开发环境-暗转和配置sdk">4.1 Windows下搭建go 开发环境 - 暗转和配置SDK</router-link></li><li><router-link to="#_4-2-linux下搭建go环境">4.2 Linux下搭建go环境</router-link></li></ul></li><li><router-link to="#_5-📘go-语言的快速入门">5. 📘Go 语言的快速入门</router-link><ul><li><router-link to="#go-语言结构">Go 语言结构</router-link></li><li><router-link to="#_5-1go-hello-world-实例">5.1Go Hello World 实例</router-link></li><li><router-link to="#_5-3-执行代码">5.3 执行代码</router-link></li><li><router-link to="#go语言转义字符-escape-char">go语言转义字符（escape char)</router-link></li><li><router-link to="#go语言常见错误和解决方法">go语言常见错误和解决方法</router-link></li></ul></li><li><router-link to="#go语言目录结构">Go语言目录结构</router-link></li><li><router-link to="#go语言基本语法">Go语言基本语法</router-link><ul><li><router-link to="#go-标记">Go 标记</router-link></li><li><router-link to="#行分隔符">行分隔符</router-link></li><li><router-link to="#注释-comment">注释(comment)</router-link></li><li><router-link to="#标识符">标识符</router-link></li><li><router-link to="#字符串连接">字符串连接</router-link></li><li><router-link to="#关键字">关键字</router-link></li><li><router-link to="#go语言的空格">go语言的空格</router-link></li><li><router-link to="#格式化字符串">格式化字符串</router-link></li><li><router-link to="#golang-标准库api文档">golang 标准库api文档</router-link></li><li><router-link to="#dos命令">DOS命令</router-link></li></ul></li><li><router-link to="#语言的数据类型">语言的数据类型</router-link><ul><li><router-link to="#数据类型">数据类型</router-link></li><li><router-link to="#浮点型">浮点型</router-link></li><li><router-link to="#其他数字类型">其他数字类型</router-link></li></ul></li><li><router-link to="#变量">变量</router-link><ul><li><router-link to="#变量声明">变量声明</router-link></li><li><router-link to="#多变量声明">多变量声明</router-link></li><li><router-link to="#实例">实例</router-link></li><li><router-link to="#值类型和引用类型">值类型和引用类型</router-link></li></ul></li><li><router-link to="#简短形式-使用-赋值操作符">简短形式，使用 := 赋值操作符</router-link><ul><li><router-link to="#注意事项">注意事项</router-link></li></ul></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<p>😶‍🌫️go语言官方编程指南：<a href="https://golang.org/#" target="_blank" rel="noopener noreferrer">https://golang.org/#<ExternalLinkIcon/></a></p>
<blockquote>
<p>go语言的官方文档学习笔记很全，推荐去官网学习</p>
</blockquote>
<p>😶‍🌫️我的学习笔记：github: <a href="https://github.com/3293172751/golang-rearn" target="_blank" rel="noopener noreferrer">https://github.com/3293172751/golang-rearn<ExternalLinkIcon/></a></p>
<hr>
<p><strong>区块链技术（也称之为分布式账本技术）</strong>，是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我，共同学习更多的区块链技术。博客<a href="http://nsddd.top" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<h2 id="_1-🐧应用场景" tabindex="-1"><a class="header-anchor" href="#_1-🐧应用场景" aria-hidden="true">#</a> 1. 🐧应用场景</h2>
<ol>
<li>区块链</li>
</ol>
<p>区块链技术（也称之为分布式账本技术），是一种互联网数据库技术，其特点是去中心化，公开透明，让每一个人均可参与的数据库记录</p>
<blockquote>
<p>❤️💕💕关于区块链技术，可以关注我或者<a href="http://nsddd.top" target="_blank" rel="noopener noreferrer">博客http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<p>​	2. 后端服务器开发</p>
<p>如美团后台流量支撑程序</p>
<p>主要支撑后台流量（排序，推荐，搜索等），提供负载均衡。</p>
<p>​	3. 云计算和云服务</p>
<p>内容分发网络</p>
<h2 id="_2-🗃️特点" tabindex="-1"><a class="header-anchor" href="#_2-🗃️特点" aria-hidden="true">#</a> 2.🗃️特点</h2>
<p>go语言保证了既能达到静态编译语言的安全与性能，又达到了动态语言开发维护的高效率，使用一个表达式来形容go语言：<code v-pre>go = C +python</code></p>
<p>​	由此说明go语言既有C静态语言程序运行速度，有能达到python动态语言的快速开发。</p>
<ul>
<li>
<p>go语言包概念：<strong>go 语言的每一个文件都是属于一个包，不可以独立存在。</strong></p>
</li>
<li>
<p>go语言的垃圾回收机制：<strong>内存自动回收，不需要开发人员管理（避免出现内存泄漏）</strong></p>
</li>
</ul>
<hr>
<div class="custom-container warning"><p class="custom-container-title">go语言的天然并发</p>
<p>（重要❤️）</p>
<ol>
<li>从语言层面支持并发，实现简单。</li>
<li>Goroutine,轻量级线程，<strong>可以实现大并发处理，高效利用多核。</strong></li>
<li>基于CPS并发模型实现。</li>
</ol>
<hr>
</div>
<ul>
<li>Go语言管道通信机制</li>
<li>函数可以返回多个值</li>
</ul>
<h2 id="_3-⚒️使用工具" tabindex="-1"><a class="header-anchor" href="#_3-⚒️使用工具" aria-hidden="true">#</a> 3.⚒️使用工具</h2>
<p>​	我使用的工具有两种,分别对应的是window系统和Linux系统</p>
<pre><code>+ vscode
+ vim(用于linux服务器开发)
</code></pre>
<p>其他工具:</p>
<ul>
<li>
<p>sublime text</p>
</li>
<li>
<p>Emacs(特别强大,可称之为集成开发环境)</p>
<blockquote>
<p>还有很多不列举出来了,根据自己喜欢的选择</p>
</blockquote>
</li>
</ul>
<hr>
<h2 id="_4-🔦环境搭建" tabindex="-1"><a class="header-anchor" href="#_4-🔦环境搭建" aria-hidden="true">#</a> 4.🔦环境搭建</h2>
<CodeGroup>
<CodeGroupItem title="ubuntu">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> golang
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="centos">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> golang
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="_4-1-windows下搭建go-开发环境-暗转和配置sdk" tabindex="-1"><a class="header-anchor" href="#_4-1-windows下搭建go-开发环境-暗转和配置sdk" aria-hidden="true">#</a> 4.1 Windows下搭建go 开发环境 - 暗转和配置SDK</h3>
<p>​	<strong>SDK:software development kit 软件开发工具包</strong></p>
<p>​	提供给开发者的工具,编译成可执行文件,包括____工具和API____</p>
<ul>
<li>官网(需要外网):golang.org.</li>
<li>msi:是exe文件安装,推荐使用zip类型安装,解压既可以使用.</li>
</ul>
<h3 id="_4-2-linux下搭建go环境" tabindex="-1"><a class="header-anchor" href="#_4-2-linux下搭建go环境" aria-hidden="true">#</a> 4.2 Linux下搭建go环境</h3>
<ul>
<li>Linux下安装路径建议选择 ```/opt ``</li>
<li>使用 <code v-pre>uanme -a</code>查看当前Linux的版本号和基本信息.</li>
<li>使用<code v-pre>ftp</code> 将文件传输到Linux中,或者使用apt(ubuntu) wget下载</li>
<li>使用<code v-pre>tar -zxvf </code> 解压</li>
</ul>
<p>Linux下go 的配置:</p>
<ol>
<li>
<p>在<code v-pre> /etc/profile</code> 文件中添加三种语句(<code v-pre>root权限</code>)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> GOROOT <span class="token operator">=</span>/opt/go

<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span> <span class="token operator">=</span> <span class="token variable">$GOROOT</span>/bin:<span class="token environment constant">$PATH</span>

<span class="token builtin class-name">export</span> GOPATH <span class="token operator">=</span> <span class="token environment constant">$HOME</span>/goprojects/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注销用户再使用，这时才能生效</p>
</li>
</ol>
<hr>
<h2 id="_5-📘go-语言的快速入门" tabindex="-1"><a class="header-anchor" href="#_5-📘go-语言的快速入门" aria-hidden="true">#</a> 5. 📘Go 语言的快速入门</h2>
<h3 id="go-语言结构" tabindex="-1"><a class="header-anchor" href="#go-语言结构" aria-hidden="true">#</a> Go 语言结构</h3>
<p>在我们开始学习 Go 编程语言的基础构建模块前，让我们先来了解 Go 语言最简单程序的结构。</p>
<hr>
<h3 id="_5-1go-hello-world-实例" tabindex="-1"><a class="header-anchor" href="#_5-1go-hello-world-实例" aria-hidden="true">#</a> 5.1Go Hello World 实例</h3>
<p>Go 语言的基础组成有以下几个部分：</p>
<ul>
<li>包声明</li>
<li>引入包</li>
<li>函数</li>
<li>变量</li>
<li>语句 &amp; 表达式</li>
<li>注释</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>  <span class="token comment">//表示引入了一个包，类似于python 引入改包后就可以使用包内函数</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>        
			<span class="token comment">/* {不能单独放在一行，func是一个关键词，后面是一个函数，main主函数，即是程序的入口 */</span>
  			<span class="token comment">/* 这是我的第一个简单的程序,这是注释 */</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>    		<span class="token comment">//fmt 表示调用Printlt输出hello word.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-程序的各个部分" tabindex="-1"><a class="header-anchor" href="#_5-2-程序的各个部分" aria-hidden="true">#</a> 5.2 程序的各个部分：</h4>
<blockquote>
<ol>
<li>第一行代码 <em>package main</em> 定义了包名。你必须在中非注释的第一行指明这个文件属于哪个包，如：package main。package main表示一个可独立执行的程序，每个 Go 应用程序都包含一个名为 main 的包。</li>
<li>下一行 <em>import &quot;fmt&quot;</em> 告诉 Go 编译器这个程序需要使用 fmt 包（的函数，或其他元素），fmt 包实现了格式化 IO（输入/输出）的函数。</li>
<li>下一行 <em>func main()</em> 是程序开始执行的函数。main 函数是每一个可执行程序所必须包含的，一般来说都是在启动后第一个执行的函数（如果有 init() 函数则会先执行该函数）。</li>
<li>下一行 /<em>...</em>/ 是注释，在程序执行时将被忽略。单行注释是最常见的注释形式，你可以在任何地方使用以 // 开头的单行注释。多行注释也叫块注释，均已以 /* 开头，并以 */ 结尾，且不可以嵌套使用，多行注释一般用于包的文档描述或注释成块的代码片段。</li>
<li>下一行 fmt.Println(...) 可以将字符串输出到控制台，并在最后自动增加换行字符 \n。
使用 fmt.Print(&quot;hello, world\n&quot;) 可以得到相同的结果。
Print 和 Println 这两个函数也支持使用变量，如：fmt.Println(arr)。如果没有特别指定，它们会以默认的打印格式将变量 arr 输出到控制台。</li>
<li>当标识符（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Group1，那么使用这种形式的标识符的对象就可以被外部包的代码所使用（客户端程序需要先导入这个包），这被称为导出（像面向对象语言中的 public）；标识符如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的（像面向对象语言中的 protected ）。</li>
</ol>
</blockquote>
<hr>
<h3 id="_5-3-执行代码" tabindex="-1"><a class="header-anchor" href="#_5-3-执行代码" aria-hidden="true">#</a> 5.3 执行代码</h3>
<ol>
<li>
<p>我们还可以使用 <strong>go build</strong> 命令来生成二进制文件：</p>
<p>windows下面生成``exe<code v-pre> 文件 ，Linux下生成</code>sh` 无后缀的可执行文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go build hello.go 
$ <span class="token function">ls</span>
hello    hello.go
$ ./hello 
Hello, World<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❤️<strong>注意：</strong> 使用<strong>go run</strong> 命令也可以直接运行hello.go 程序。类似于python编译脚本语言的形式，但是在生产中，我们实际上先编译，后执行。但是这个时候编译的速度会变慢，而<strong>直接执行二进制文件速度会快很多</strong>。</p>
<p><strong>编译指定二进制文件名称：</strong> 类似于C/C++</p>
<p><strong>windows:</strong> <code v-pre>go build -o myhello.exe hello.go</code></p>
<p><strong>linux:</strong>  <code v-pre>go build -o myhello hello.go</code></p>
<p><strong>如果编译没有错误，便生成exe文件，如果有错误，在错误的某行报错</strong></p>
</li>
</ol>
<h4 id="_5-4-❤️注意" tabindex="-1"><a class="header-anchor" href="#_5-4-❤️注意" aria-hidden="true">#</a> 5.4 ❤️注意</h4>
<ul>
<li>需要注意的是 <strong>{</strong> 不能单独放在一行，所以以下代码在运行时会产生错误</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 		<span class="token comment">// 错误，{ 不能在单独的行上</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>window编译可执行文件的时候不是使用./编译的，而是直接编译exe文件</strong></li>
<li>go语言<strong>严格区分大小写</strong></li>
<li>go方法由一条条语句构成，每一条语句结尾 <strong>不需要分号</strong></li>
<li><strong>go编译器是一行行的编译的，因此我们一行只写一条语句</strong>，不要把多条语句写在同一行，否则报错</li>
<li><strong>go语言定义的变量或者import包如果没有使用到，代码不能编译通过，避免冗余</strong></li>
</ul>
<h3 id="go语言转义字符-escape-char" tabindex="-1"><a class="header-anchor" href="#go语言转义字符-escape-char" aria-hidden="true">#</a> go语言转义字符（escape char)</h3>
<table>
<thead>
<tr>
<th style="text-align:center">字符</th>
<th style="text-align:center">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>\t</code></td>
<td style="text-align:center">一个制表符</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>\n</code></td>
<td style="text-align:center">换行符</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>\\</code></td>
<td style="text-align:center">\</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>\r</code></td>
<td style="text-align:center">回车</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>&quot;</code></td>
<td style="text-align:center">一个“</td>
</tr>
</tbody>
</table>
<h3 id="go语言常见错误和解决方法" tabindex="-1"><a class="header-anchor" href="#go语言常见错误和解决方法" aria-hidden="true">#</a> go语言常见错误和解决方法</h3>
<ol>
<li>the system cannot find the file specified</li>
<li>......不是内部或者外部命令，也不是可运行程序或者处理文件</li>
</ol>
<p><strong>一般这种错误都是因为源文件名不存在或者当前路径错误</strong></p>
<h2 id="go语言目录结构" tabindex="-1"><a class="header-anchor" href="#go语言目录结构" aria-hidden="true">#</a> Go语言目录结构</h2>
<blockquote>
<p>很重要的，在根目录下面创建<code v-pre>goproject</code>，在这里面新建一个<code v-pre>src</code>目录，在<code v-pre>src</code>里面写入<code v-pre>go_code</code>目录，用来写代码，在这个目录里面写入项目，项目名称可以叫<code v-pre>project01</code>，<code v-pre>project02</code>，每个项目里面都有一个<code v-pre>main</code>目录这是主目录，里面包含<code v-pre>main.go</code>文件</p>
</blockquote>
<p><strong>我们在开发程序的时候或者是开发项目的时候，一定要按照Go语言的规定目录进行</strong></p>
<h2 id="go语言基本语法" tabindex="-1"><a class="header-anchor" href="#go语言基本语法" aria-hidden="true">#</a> Go语言基本语法</h2>
<h3 id="go-标记" tabindex="-1"><a class="header-anchor" href="#go-标记" aria-hidden="true">#</a> Go 标记</h3>
<p>Go 程序可以由多个标记组成，可以是关键字，标识符，常量，字符串，符号。如以下 GO 语句由 6 个标记组成：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fmt.Println("Hello, World!")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6 个标记是(每行一个)：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token number">1.</span> fmt
<span class="token number">2.</span> <span class="token punctuation">.</span>
<span class="token number">3.</span> Println
<span class="token number">4.</span> <span class="token punctuation">(</span>
<span class="token number">5.</span> <span class="token string">"Hello, World!"</span>
<span class="token number">6.</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行分隔符" tabindex="-1"><a class="header-anchor" href="#行分隔符" aria-hidden="true">#</a> 行分隔符</h3>
<p>在 Go 程序中，一行代表一个语句结束。每个语句不需要像 C 家族中的其它语言一样以分号 ; 结尾，因为这些工作都将由 Go 编译器自动完成。</p>
<p>如果你打算将多个语句写在同一行，它们则必须使用 ; 人为区分，但在实际开发中我们并不鼓励这种做法。</p>
<div class="language-golang ext-golang line-numbers-mode"><pre v-pre class="language-golang"><code>//以下为两个语句：
fmt.Println(&quot;Hello, World!&quot;)
fmt.Println(&quot;hello golang!&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注释-comment" tabindex="-1"><a class="header-anchor" href="#注释-comment" aria-hidden="true">#</a> 注释(comment)</h3>
<p>注释不会被编译，每一个包应该有相关注释。（和C语言C++类似）</p>
<p>单行注释是最常见的注释形式，你可以在任何地方使用以 // 开头的单行注释。多行注释也叫块注释，均已以 /* 开头，并以 */ 结尾。如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 单行注释</span>
<span class="token comment">/*
 Author by 
 我是多行注释
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h3>
<p>标识符用来命名变量、类型等程序实体。一个标识符实际上就是一个或是多个字母(A~Z和a~z)数字(0~9)、下划线_组成的序列，但是第一个字符必须是字母或下划线而不能是数字。</p>
<p>以下是有效的标识符：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>mahesh   kumar   abc   move_name   a_123
myname50   _temp   j   a23b9   retVal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是无效的标识符：</p>
<ul>
<li>1ab（以数字开头）</li>
<li>case（Go 语言的关键字）</li>
<li>a+b（运算符是不允许的）</li>
</ul>
<h3 id="字符串连接" tabindex="-1"><a class="header-anchor" href="#字符串连接" aria-hidden="true">#</a> 字符串连接</h3>
<p>Go 语言的字符串可以通过 <strong>+</strong> 实现</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Google"</span> <span class="token operator">+</span> <span class="token string">"Runoob"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//**如果要一行输出：**</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hello,word"</span><span class="token punctuation">,</span>
		<span class="token string">"hello golang"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GoogleRunoob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h3>
<p>下面列举了 Go 代码中会使用到的<code v-pre>25</code> 个关键字或保留字：</p>
<table>
<thead>
<tr>
<th>break</th>
<th>default</th>
<th>func</th>
<th>interface</th>
<th>select</th>
</tr>
</thead>
<tbody>
<tr>
<td>case</td>
<td>defer</td>
<td>go</td>
<td>map</td>
<td>struct</td>
</tr>
<tr>
<td>chan</td>
<td>else</td>
<td>goto</td>
<td>package</td>
<td>switch</td>
</tr>
<tr>
<td>const</td>
<td>fallthrough</td>
<td>if</td>
<td>range</td>
<td>type</td>
</tr>
<tr>
<td>continue</td>
<td>for</td>
<td>import</td>
<td>return</td>
<td>var</td>
</tr>
</tbody>
</table>
<p>除了以上介绍的这些关键字，Go 语言还有<code v-pre>36</code>个预定义标识符：</p>
<table>
<thead>
<tr>
<th>append</th>
<th>bool</th>
<th>byte</th>
<th>cap</th>
<th>close</th>
<th>complex</th>
<th>complex64</th>
<th>complex128</th>
<th>uint16</th>
</tr>
</thead>
<tbody>
<tr>
<td>copy</td>
<td>false</td>
<td>float32</td>
<td>float64</td>
<td>imag</td>
<td>int</td>
<td>int8</td>
<td>int16</td>
<td>uint32</td>
</tr>
<tr>
<td>int32</td>
<td>int64</td>
<td>iota</td>
<td>len</td>
<td>make</td>
<td>new</td>
<td>nil</td>
<td>panic</td>
<td>uint64</td>
</tr>
<tr>
<td>print</td>
<td>println</td>
<td>real</td>
<td>recover</td>
<td>string</td>
<td>true</td>
<td>uint</td>
<td>uint8</td>
<td>uintptr</td>
</tr>
</tbody>
</table>
<p>程序一般由关键字、常量、变量、运算符、类型和函数组成。</p>
<p>程序中可能会使用到这些分隔符：括号 ()，中括号 [] 和大括号 {}。</p>
<p>程序中可能会使用到这些标点符号：<code v-pre>.、,、;、:</code> 和 <code v-pre>…</code>。</p>
<h3 id="go语言的空格" tabindex="-1"><a class="header-anchor" href="#go语言的空格" aria-hidden="true">#</a> go语言的空格</h3>
<p><strong>Go 语言中变量的声明必须使用空格隔开</strong>，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var age int;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>语句中适当使用空格能让程序更易阅读。</em></p>
<p><strong>无空格：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fruit=apples+oranges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在变量与运算符间加入空格，程序看起来更加美观</strong>，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fruit = apples + oranges; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="格式化字符串" tabindex="-1"><a class="header-anchor" href="#格式化字符串" aria-hidden="true">#</a> 格式化字符串</h3>
<p>Go 语言中使用 <strong>fmt.Sprintf</strong> 格式化字符串并赋值给新串：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// %d 表示整型数字，%s 表示字符串*</span>
  <span class="token keyword">var</span> stockcode <span class="token operator">=</span> <span class="token number">123</span>
  <span class="token keyword">var</span> enddate <span class="token operator">=</span> <span class="token string">"2020-12-31"</span>
  <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">"Code=%d&amp;endDate=%s"</span>
  <span class="token keyword">var</span> target_url <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>stockcode<span class="token punctuation">,</span>enddate<span class="token punctuation">)</span>  <span class="token comment">//格式化字符串</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>target_url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Code=123&amp;endDate=2020-12-31
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="golang-标准库api文档" tabindex="-1"><a class="header-anchor" href="#golang-标准库api文档" aria-hidden="true">#</a> golang 标准库api文档</h3>
<ol>
<li>
<p><strong>官网地址（需要外网）</strong>：<a href="https://golang.org.pkg" target="_blank" rel="noopener noreferrer">https://golang.org.pkg<ExternalLinkIcon/></a></p>
<p>可以查看golang中所有的接口</p>
</li>
<li>
<p><strong>golang中文网</strong> ：<a href="https://studygolang.com/pkgdoc" target="_blank" rel="noopener noreferrer">https://studygolang.com/pkgdoc<ExternalLinkIcon/></a></p>
</li>
</ol>
<p>为了方便在Windows下使用命令，熟悉一下dos:磁盘操作系统</p>
<h3 id="dos命令" tabindex="-1"><a class="header-anchor" href="#dos命令" aria-hidden="true">#</a> DOS命令</h3>
<p><code v-pre>copy</code>移动文件  --参考linux中cp</p>
<p><code v-pre>move</code>剪切文件 --参考mv命令</p>
<p><code v-pre>del</code> 删除文件 --参考Linux中rm 和rmdir</p>
<p><code v-pre>cls</code> 清屏  --程序中会使用到，在Linux中用clear</p>
<h2 id="语言的数据类型" tabindex="-1"><a class="header-anchor" href="#语言的数据类型" aria-hidden="true">#</a> 语言的数据类型</h2>
<p>在 Go 编程语言中，<strong>数据类型用于声明函数和变量</strong>。</p>
<p>数据类型的出现是为了把数据分成所需内存大小不同的数据，编程的时候需要用大数据的时候才需要申请大内存，就可以充分利用内存。</p>
<p>Go 语言按类别有以下几种数据类型：</p>
<table>
<thead>
<tr>
<th style="text-align:left">序号</th>
<th style="text-align:left">类型和描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left"><strong>布尔型</strong>：布尔型的值只可以是常量 true 或者 false。一个简单的例子：var b bool = true。</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"><strong>数字类型</strong>： 整型 int 和浮点型 float32、float64，Go 语言支持整型和浮点型数字，并且支持复数，其中位的运算采用补码。</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left"><strong>字符串类型:</strong> 字符串就是一串固定长度的字符连接起来的字符序列。Go 的字符串是由单个字节连接起来的。Go 语言的字符串的字节使用 UTF-8 编码标识 Unicode 文本。</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"><strong>派生类型:</strong> 包括：(a) 指针类型（Pointer）(b) 数组类型(c) 结构化类型(struct)(d) Channel 类型(e) 函数类型(f) 切片类型(g) 接口类型（interface）(h) Map 类型</td>
</tr>
</tbody>
</table>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<p>Go 也有基于架构的类型，例如：int、uint 和 uintptr。</p>
<table>
<thead>
<tr>
<th style="text-align:left">序号</th>
<th style="text-align:left">类型和描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left"><strong>uint8</strong> 无符号 8 位整型 (0 到 255)</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"><strong>uint16</strong> 无符号 16 位整型 (0 到 65535)</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left"><strong>uint32</strong> 无符号 32 位整型 (0 到 4294967295)</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"><strong>uint64</strong> 无符号 64 位整型 (0 到 18446744073709551615)</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left"><strong>int8</strong> 有符号 8 位整型 (-128 到 127)</td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left"><strong>int16</strong> 有符号 16 位整型 (-32768 到 32767)</td>
</tr>
<tr>
<td style="text-align:left">7</td>
<td style="text-align:left"><strong>int32</strong> 有符号 32 位整型 (-2147483648 到 2147483647)</td>
</tr>
<tr>
<td style="text-align:left">8</td>
<td style="text-align:left"><strong>int64</strong> 有符号 64 位整型 (-9223372036854775808 到 9223372036854775807)</td>
</tr>
</tbody>
</table>
<h3 id="浮点型" tabindex="-1"><a class="header-anchor" href="#浮点型" aria-hidden="true">#</a> 浮点型</h3>
<table>
<thead>
<tr>
<th style="text-align:left">序号</th>
<th style="text-align:left">类型和描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left"><strong>float32</strong> IEEE-754 32位浮点型数</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"><strong>float64</strong> IEEE-754 64位浮点型数</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left"><strong>complex64</strong> 32 位实数和虚数</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"><strong>complex128</strong> 64 位实数和虚数</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="其他数字类型" tabindex="-1"><a class="header-anchor" href="#其他数字类型" aria-hidden="true">#</a> 其他数字类型</h3>
<p>以下列出了其他更多的数字类型：</p>
<table>
<thead>
<tr>
<th style="text-align:left">序号</th>
<th style="text-align:left">类型和描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left"><strong>byte</strong> 类似 uint8</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"><strong>rune</strong> 类似 int32</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left"><strong>uint</strong> 32 或 64 位</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"><strong>int</strong> 与 uint 一样大小</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left"><strong>uintptr</strong> 无符号整型，用于存放一个指针</td>
</tr>
</tbody>
</table>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<ul>
<li>
<p>Go 语言变量名由字母、数字、下划线组成，其中<strong>首个字符不能为数字</strong>。</p>
</li>
<li>
<p>变量表示内存中的存储区域，有自己的名称和类型</p>
</li>
<li>
<p>声明变量的一般形式是使用 <code v-pre>var</code> 关键字：</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var identifier type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>可以一次声明多个变量</strong>：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var identifier1, identifier2 type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"Runoob"</span>  <span class="token comment">//定义一个类型为string的变量a</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

  <span class="token keyword">var</span> b<span class="token punctuation">,</span> c <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例输出结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Runoob
1 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h3>
<p><strong>第一种，指定变量类型，如果没有初始化， 则变量默认为零值</strong> 。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> v_name v_type
v_name <span class="token operator">=</span> value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>零值就是变量没有做初始化时系统默认设置的值。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   
  <span class="token comment">// 声明一个变量并初始化</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"RUNOOB"</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

  <span class="token comment">// 没有初始化就为零值</span>
  <span class="token keyword">var</span> b <span class="token builtin">int</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

  <span class="token comment">// bool 零值为 false</span>
  <span class="token keyword">var</span> c <span class="token builtin">bool</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例执行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>RUNOOB
0
false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>数值类型（包括complex64/128）为 <strong>0</strong></p>
</li>
<li>
<p>布尔类型为 <strong>false</strong></p>
</li>
<li>
<p><strong>字符串为 &quot;&quot;（空字符串）</strong></p>
</li>
<li>
<p>以下几种类型为 <strong>nil</strong>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> a <span class="token operator">*</span><span class="token builtin">int</span>
<span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token keyword">var</span> a <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token builtin">int</span>
<span class="token keyword">var</span> a <span class="token keyword">chan</span> <span class="token builtin">int</span>
<span class="token keyword">var</span> a <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
<span class="token keyword">var</span> a <span class="token builtin">error</span> <span class="token comment">// error 是接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><strong>案例</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i <span class="token builtin">int</span>
  <span class="token keyword">var</span> f <span class="token builtin">float64</span>
  <span class="token keyword">var</span> b <span class="token builtin">bool</span>
  <span class="token keyword">var</span> s <span class="token builtin">string</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v %v %v %q\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> f<span class="token punctuation">,</span> b<span class="token punctuation">,</span> s<span class="token punctuation">)</span> <span class="token comment">//打印默认值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果是：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0 0 false ""
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二种，根据值自行判定变量类型。</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var v_name = value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>由于设置了<code v-pre>d</code>值，所以打印出来的d是<code v-pre>true</code></p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token boolean">true</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果是：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第三种，如果变量已经使用 var 声明过了，再使用 := 声明变量，就产生编译错误，格式：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>v_name := value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>声明的同时可以直接赋值使用<code v-pre>:=</code></strong></p>
<p>例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> intVal <span class="token builtin">int</span> 
intVal <span class="token operator">:=</span><span class="token number">1</span>   <span class="token comment">// 这时候会产生编译错误，因为 intVal 已经声明，不需要重新声明</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>直接使用下面的语句即可：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>intVal <span class="token operator">:=</span> <span class="token number">1</span>   <span class="token comment">// 此时不会产生编译错误，因为有声明新的变量，因为 := 是一个声明语句</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>intVal := 1</strong> 相等于：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> intVal <span class="token builtin">int</span> 
intVal <span class="token operator">=</span><span class="token number">1</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以将 var f string = &quot;Runoob&quot; 简写为 f := &quot;Runoob&quot;：</strong></p>
<p><strong>实例</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  f <span class="token operator">:=</span> <span class="token string">"Runoob"</span> <span class="token comment">// var f string = "Runoob"</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果是：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Runoob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="多变量声明" tabindex="-1"><a class="header-anchor" href="#多变量声明" aria-hidden="true">#</a> 多变量声明</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//类型相同多个变量, 非全局变量</span>
<span class="token keyword">var</span> vname1<span class="token punctuation">,</span> vname2<span class="token punctuation">,</span> vname3 <span class="token keyword">type</span>

vname1<span class="token punctuation">,</span> vname2<span class="token punctuation">,</span> vname3 <span class="token operator">=</span> v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> v3

<span class="token keyword">var</span> vname1<span class="token punctuation">,</span> vname2<span class="token punctuation">,</span> vname3 <span class="token operator">=</span> v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> v3    <span class="token comment">// 和 python 很像,不需要显示声明类型，自动推断</span>

vname1<span class="token punctuation">,</span> vname2<span class="token punctuation">,</span> vname3 <span class="token operator">:=</span> v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> v3      
<span class="token comment">// 出现在 := 左侧的变量不应该是已经被声明过的，否则会导致编译错误</span>

<span class="token comment">// 这种因式分解关键字的写法一般用于声明全局变量</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    vname1 v_type1
    vname2 v_type2
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">var</span> x<span class="token punctuation">,</span> y <span class="token builtin">int</span>
<span class="token keyword">var</span> <span class="token punctuation">(</span>  <span class="token comment">// 这种因式分解关键字的写法一般用于声明全局变量*</span>
  a <span class="token builtin">int</span>
  b <span class="token builtin">bool</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> c<span class="token punctuation">,</span> d <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token keyword">var</span> e<span class="token punctuation">,</span> f <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">"hello"</span>
<span class="token comment">/*也可以使用最简洁方法：
 c,d,e,f := 1,2,123,"hello" 
*/</span>
<span class="token comment">//这种不带声明格式的只能在函数体中出现</span>
<span class="token comment">//g, h := 123, "hello"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  g<span class="token punctuation">,</span> h <span class="token operator">:=</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">"hello"</span>      <span class="token comment">//定义的是局部变量</span>
  <span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例执行结果为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0 0 0 false 1 2 123 hello 123 hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="值类型和引用类型" tabindex="-1"><a class="header-anchor" href="#值类型和引用类型" aria-hidden="true">#</a> 值类型和引用类型</h3>
<p>所有像 int、float、bool 和 string 这些基本类型都属于值类型，使用这些类型的变量直接指向存在内存中的值：</p>
<p><img src="https://sm.nsddd.top//typora/image-20220918203310643.png?mail:3293172751@qq.com" alt="image-20220918203310643"></p>
<p>当使用等号 <code v-pre>=</code> 将一个变量的值赋值给另一个变量时，如：<code v-pre>j = i</code>，实际上是<strong>在内存中将 i 的值进行了拷贝</strong>：</p>
<p><img src="https://www.runoob.com/wp-content/uploads/2015/06/4.4.2_fig4.2.jpgrawtrue" alt="4.4.2_fig4.2"></p>
<p>你可以通过 <code v-pre>&amp;i</code> 来获取变量 i 的内存地址，例如：<code v-pre>0xf840000040</code>（每次的地址都可能不一样）。</p>
<p><strong>❗值类型变量的值存储在堆中</strong>。</p>
<p>内存地址会根据机器的不同而有所不同，甚至相同的程序在不同的机器上执行后也会有不同的内存地址。因为每台机器可能有不同的存储器布局，并且位置分配也可能不同。</p>
<p>更复杂的数据通常会需要使用多个字，这些数据一般使用引用类型保存。</p>
<p>一个引用类型的变量 r1 存储的是 r1 的值所在的内存地址（数字），或内存地址中第一个字所在的位置。</p>
<p>!<img src="https://s2.loli.net/2022/01/04/x3rwm1QXsKc4zH5.png" style="zoom:200%;" /></p>
<p>这个内存地址称之为指针，这个指针实际上也被存在另外的某一个值中。</p>
<p>同一个引用类型的指针指向的多个字可以是在连续的内存地址中（内存布局是连续的），这也是计算效率最高的一种存储形式；也可以将这些字分散存放在内存中，每个字都指示了下一个字所在的内存地址。</p>
<p>当使用赋值语句 <code v-pre>r2 = r1</code> 时，只有引用（地址）被复制。</p>
<p>如果 r1 的值被改变了，那么这个值的所有引用都会指向被修改后的内容，在这个例子中，r2 也会受到影响。</p>
<h2 id="简短形式-使用-赋值操作符" tabindex="-1"><a class="header-anchor" href="#简短形式-使用-赋值操作符" aria-hidden="true">#</a> 简短形式，使用 := 赋值操作符</h2>
<p>我们知道可以在变量的初始化时省略变量的类型而由系统自动推断，声明语句写上 var 关键字其实是显得有些多余了，因此我们可以将它们简写为 <code v-pre>a := 50</code> 或 <code v-pre>b := false</code>。</p>
<p>a 和 b 的类型（int 和 bool）将由编译器自动推断。</p>
<p>这是使用变量的首选形式，但是它只能被用在函数体内，而不可以用于全局变量的声明与赋值。使用操作符 := 可以高效地创建一个新的变量，称之为初始化声明。</p>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>
<p>如果在相同的代码块中，我们不可以再次对于相同名称的变量使用初始化声明，例如：a := 20 就是不被允许的，编译器会提示错误 <code v-pre>no new variables on left side of :=</code>，但是 a = 20 是可以的，因为这是给相同的变量赋予一个新的值。</p>
<p>如果你在定义变量 a 之前使用它，则会得到编译错误 undefined: a。</p>
<p><strong>如果你声明了一个局部变量却没有在相同的代码块中使用它，同样会得到编译错误</strong>，例如下面这个例子当中的变量 a：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"abc"</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"hello, world"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尝试编译这段代码将得到错误 <strong>a declared and not used</strong>。</p>
<p>此外，单纯地给 a 赋值也是不够的，这个值必须被使用，所以使用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fmt.Println("hello, world", a)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会移除错误。</p>
<p>但是全局变量是允许声明但不使用的。 同一类型的多个变量可以声明在同一行，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var a, b, c int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多变量可以在同一行进行赋值，如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token builtin">int</span>
<span class="token keyword">var</span> c <span class="token builtin">string</span>
a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">"abc"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这行假设了变量 a，b 和 c 都已经被声明，否则的话应该这样使用：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a, b, c := 5, 7, "abc"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>右边的这些值以相同的顺序赋值给左边的变量，所以 a 的值是 5， b 的值是 7，c 的值是 &quot;abc&quot;。</p>
<p><strong>这被称为 并行 或 同时 赋值</strong>。</p>
<p>如果你想要交换两个变量的值，则可以简单地使用 <code v-pre>a, b = b, a</code>，两个变量的类型必须是相同。</p>
<p>空白标识符 _ 也被用于抛弃值，如值 5 在：_, b = 5, 7 中被抛弃。</p>
<p>_ 实际上是一个只写变量，你不能得到它的值。这样做是因为 Go 语言中你必须使用所有被声明的变量，但有时你并不需要使用从一个函数得到的所有返回值。</p>
<p>并行赋值也被用于当一个函数返回多个返回值时，比如这里的 val 和错误 err 是通过调用 Func1 函数同时得到：</p>
<p><code v-pre>val, err = Func1(var1)</code></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '../README.md' style='float:left'>⬆️上一节🔗</a><a href = '2.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


