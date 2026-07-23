<template><div><h1 id="go-test-工具详解" tabindex="-1"><a class="header-anchor" href="#go-test-工具详解" aria-hidden="true">#</a> go test 工具详解</h1>
<p>在学习如何编写测试代码之前，需要先了解一下Go 提供的测试工具 ：go test</p>
<p>go test 本身可以携带很多的参数，熟悉这些参数，可以让我们的测试过程更加方便。</p>
<p>下面就根据场景来解释一下常用的几个参数：</p>
<p>1、运行整个项目的测试文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go test
PASS
ok      _/home/wangbm/golang/math   0.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、只运行某个测试文件（ math_test.go， math.go 是一对，缺一不可，前后顺序可对调）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go test math_test.go math.go
ok      command-line-arguments  0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、加 <code v-pre>-v</code> 查看详细的结果</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go test math_test.go math.go
=== RUN   TestAdd
    TestAdd: main_test.go:22: the result is ok
    TestAdd: main_test.go:22: the result is ok
    TestAdd: main_test.go:22: the result is ok
    TestAdd: main_test.go:22: the result is ok
    TestAdd: main_test.go:22: the result is ok
--- PASS: TestAdd (0.00s)
PASS
ok      command-line-arguments  0.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、只测试某个函数，-run 支持正则，如下例子中 TestAdd，如果还有一个测试函数为 TestAdd02，那么它也会被运行。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go test -v -run="TestAdd"
=== RUN   TestAdd
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
--- PASS: TestAdd (0.00s)
PASS
ok      _/home/wangbm/golang/math   0.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、生成 test 的二进制文件：加 <code v-pre>-c</code> 参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go test -v -run="TestAdd" -c
$
$ ls -l
total 3208
-rw-r--r-- 1 root root      95 May 25 20:56 math.go
-rwxr-xr-x 1 root root 3272760 May 25 21:00 math.test
-rw-r--r-- 1 root root     525 May 25 20:56 math_test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、执行这个 test 测试文件：加 <code v-pre>-o</code> 参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go test -v -o math.test
=== RUN   TestAdd
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
--- PASS: TestAdd (0.00s)
=== RUN   TestAum
    TestAum: math_test.go:30: 6
--- PASS: TestAum (0.00s)
PASS
ok      _/home/wangbm/golang/math   0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、只测试安装/重新安装 依赖包，而不运行代码：加 <code v-pre>-i</code> 参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 这里没有输出
$ go test -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '90.md' style='float:left'>⬆️上一节🔗</a><a href = '92.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


