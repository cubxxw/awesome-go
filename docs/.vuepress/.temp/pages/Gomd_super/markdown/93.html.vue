<template><div><h1 id="调试技巧-使用-gdb-调试-go-程序" tabindex="-1"><a class="header-anchor" href="#调试技巧-使用-gdb-调试-go-程序" aria-hidden="true">#</a> 调试技巧：使用 GDB 调试 Go 程序</h1>
<p>做为新手，熟练掌握一个好的调试工具，对于我们学习语言或者排查问题的时候，非常有帮助。</p>
<p>你如果使用 VS Code 或者 Goland ，可以直接上手，我就不再写这方面的文章了。</p>
<p>其实相比有用户界面的 IDE 调试工具，我更喜欢简单直接的命令行调试，原因有三点：</p>
<ol>
<li>速度快，个人感觉在 Windows 下速度巨慢</li>
<li>依赖少，在 Linux 服务器上 也能轻松调试</li>
<li>指令简单，我习惯只使用快捷键就能操作</li>
</ol>
<p>如果你有和我一样的感受和习惯，可以看下今天的文章，介绍的是 GDB 调试工具。</p>
<h2 id="_1-下载安装-go" tabindex="-1"><a class="header-anchor" href="#_1-下载安装-go" aria-hidden="true">#</a> 1. 下载安装 Go</h2>
<p>在 Linux 上进行调试，那咱所以得先安装 Go ，由于第一节里只讲了 Windows 的下载安装，并没有讲到在 Linux 上如何安装。所以这里要先讲一下，已经安装过了可以直接跳过。</p>
<p>首先在 go 下载页面上（https://golang.org/dl/），查看并复制源码包的的下载地址</p>
<p><img src="https://s2.loli.net/2022/04/11/OqsAFltmHMdKwIE.png" alt="http://image.iswbm.com/20200428180632.png"></p>
<p>登陆 linux 机器 ，使用 wget 下载</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ wget https://dl.google.com/go/go1.14.2.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/11/PvYhDHgkuNtITc1.png" alt="http://image.iswbm.com/20200428180713.png"></p>
<p>将下载的源码包解压到 <code v-pre>/usr/local</code> 目录下，并设置环境变量</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@localhost ~]# tar -C /usr/local -xzf go1.14.2.linux-amd64.tar.gz
[root@localhost ~]#
[root@localhost ~]# export PATH=$PATH:/usr/local/go/bin
[root@localhost ~]# which go
/usr/local/go/bin/go
[root@localhost ~]#
[root@localhost ~]# go version
go version go1.14.2 linux/amd64
[root@localhost ~]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-开始进行调试" tabindex="-1"><a class="header-anchor" href="#_2-开始进行调试" aria-hidden="true">#</a> 2. 开始进行调试</h2>
<p>调试使用的是 GDB （好像要求版本 7.1 + ），使用前，请先确保你的机器上已经安装 GDB</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@localhost code]# which gdb
/usr/bin/gdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>准备就绪后，先在目录下写一个测试文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import "fmt"

func main(){
  msg := "hello, world"
  fmt.Println(msg)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行 如下命令进行编译，里面有好多个参数，有疑问的可以自行搜索引擎</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 关闭内联优化，方便调试
$ go build -gcflags "-N -l" demo.go

# 发布版本删除调试符号
go build -ldflags “-s -w”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后使用 GDB 命令进入调试界面</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 如果你喜欢这种界面的话，用这条命令
$ gdb -tui demo

# 如果你跟我一样不喜欢不习惯用界面，就使用这个命令
$ gdb demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整操作如下：</p>
<p><img src="http://image.iswbm.com/20200428181902.png" alt="http://image.iswbm.com/20200428181902.png"></p>
<p>进入 GDB 调试界面后，并不是立即可用，你先需要回车，然后再你敲入几行命令，调试窗口就会出现代码。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>(gdb) b main.main   # 在 main 包里的 main 函数 加断点
Breakpoint 1 at 0x4915c0: file /home/wangbm/code/demo.go, line 5.
(gdb) run  # 执行进程
Starting program: /home/wangbm/code/demo
Breakpoint 1, main.main () at /home/wangbm/code/demo.go:5
(gdb)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/11/h9JsItBSpnkl1aZ.png" alt="http://image.iswbm.com/20200428182620.png"></p>
<h2 id="_3-详解调试指令" tabindex="-1"><a class="header-anchor" href="#_3-详解调试指令" aria-hidden="true">#</a> 3. 详解调试指令</h2>
<p>要熟练使用 GDB ，你得熟悉的掌握它的指令，这里列举一下</p>
<ul>
<li><code v-pre>r</code>：run，执行程序</li>
<li><code v-pre>n</code>：next，下一步，不进入函数</li>
<li><code v-pre>s</code>：step，下一步，会进入函数</li>
<li><code v-pre>b</code>：breakponit，设置断点</li>
<li><code v-pre>l</code>：list，查看源码</li>
<li><code v-pre>c</code>：continue，继续执行到下一断点</li>
<li><code v-pre>bt</code>：backtrace，查看当前调用栈</li>
<li><code v-pre>p</code>：print，打印查看变量</li>
<li><code v-pre>q</code>：quit，退出 GDB</li>
<li><code v-pre>whatis</code>：查看对象类型</li>
<li><code v-pre>info breakpoints</code>：查看所有的断点</li>
<li><code v-pre>info locals</code>：查看局部变量</li>
<li><code v-pre>info args</code>：查看函数的参数值及要返回的变量值</li>
<li><code v-pre>info frame</code>：堆栈帧信息</li>
<li><code v-pre>info goroutines</code>：查看 goroutines 信息。在使用前 ，需要注意先执行 source /usr/local/go/src/runtime/runtime-gdb.py</li>
<li><code v-pre>goroutine 1 bt</code>：查看指定序号的 goroutine 调用堆栈</li>
<li>回车：重复执行上一次操作</li>
</ul>
<p>其中有几个指令的使用比较灵活</p>
<p>比如 l - list，查看代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 查看指定行数上下5行
(gdb) l 8

# 查看指定范围的行数
(gdb) l 5:8

# 查看指定文件的行数上下5行
l demo.go:8

# 可以查看函数，记得加包名
l main.main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把上面的 <code v-pre>l</code> 换成 <code v-pre>b</code> ，大多数也同样适用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 在指定行打断点
(gdb) b 8


# 在指定指定文件的行打断点
b demo.go:8

# 在指定函数打断点，记得加包名
b main.main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有 p - print，打印变量</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 查看变量
(gdb) p var

# 查看对象长度或容量
(gdb) p $len(var)
(gdb) p $cap(var)

# 查看对象的动态类型
(gdb) p $dtype(var)
(gdb) iface var

# 举例如下
(gdb) p i
$4 = {str = "cbb"}
(gdb) whatis i
type = regexp.input
(gdb) p $dtype(i)
$26 = (struct regexp.inputBytes *) 0xf8400b4930
(gdb) iface i
regexp.input: struct regexp.inputBytes *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是关于 GDB 的使用方法，非常简单，可以自己手动敲下体验一下。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '92.md' style='float:left'>⬆️上一节🔗</a><a href = '94.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


