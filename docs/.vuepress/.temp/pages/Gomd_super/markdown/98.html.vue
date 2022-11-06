<template><div><h1 id="测试技巧-模糊测试-fuzzing" tabindex="-1"><a class="header-anchor" href="#测试技巧-模糊测试-fuzzing" aria-hidden="true">#</a> 测试技巧：模糊测试（Fuzzing）</h1>
<h2 id="_1-什么是模糊测试" tabindex="-1"><a class="header-anchor" href="#_1-什么是模糊测试" aria-hidden="true">#</a> 1. 什么是模糊测试？</h2>
<p>单元测试，需要开发者根据函数逻辑，给定几组输入（入参）与输出（返回）的数据，然后 go test 根据这些数据集，调用函数，若返回值与预期相符，则说明函数的单元测试通过。</p>
<p>但单元测试的代码，也是由开发者写的一段一段代码，只要是代码，就会有 BUG，就会有遗漏的场景。</p>
<p>因此即使单元测试通过，也不代表你的程序没有问题。</p>
<p>可见，测试场景的数据集对于测试有多重要，而 Fuzzing 模糊测试就是一种用机器根据已知数据源，来自动生成测试数据的一种方案。</p>
<h2 id="_2-简单的示例" tabindex="-1"><a class="header-anchor" href="#_2-简单的示例" aria-hidden="true">#</a> 2. 简单的示例</h2>
<p>接着前一篇文章的例子，我们再往 reverse_test.go 中加入 Fuzzing 模糊测试的代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 记得前面导入 "unicode/utf8" 包

func FuzzReverse(f *testing.F) {
    testcases := []string{"Hello, world", " ", "!12345"}
    for _, tc := range testcases {
        f.Add(tc)  // Use f.Add to provide a seed corpus
    }
    f.Fuzz(func(t *testing.T, orig string) {
        rev := Reverse(orig)
        doubleRev := Reverse(rev)
        if orig != doubleRev {
            t.Errorf("Before: %q, after: %q", orig, doubleRev)
        }
        if utf8.ValidString(orig) &amp;&amp; !utf8.ValidString(rev) {
            t.Errorf("Reverse produced invalid UTF-8 string %q", rev)
        }
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Fuzzing 模糊测试的代码格式与单元测试很像：</p>
<ul>
<li>函数名固定以 Fuzz 开头（单元测试是以 Test 开头）</li>
<li>函数固定以 <em>testing.F 类型做为入参（单元测试是以</em>testing.T）</li>
</ul>
<p>不一样的是 Fuzzing 模糊测试，提供两个函数：</p>
<ul>
<li>t.Add：用于开发者输入模糊测试的种子数据，fuzzing 根据这些种子数据，自动随机生成更多测试数据</li>
<li>t.Fuzz：开始运行模糊测试，t.Fuzz 的入参是一个 Fuzz Target 函数（官方这么叫的），这个 Fuzz Target 函数的编写逻辑跟单元测试就一样了</li>
</ul>
<p>在本例子中，Fuzz Target 接收 类型为 string 的入参，做为 Reverse 的输入源，然后利用两次 Reverse 的结果应与原字符串相等的原理进行测试。</p>
<p>有了 FuzzReverse 函数后，就可以使用如下命令进行模糊测试</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go18 test -fuzz=Fuzz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过输出发现测试并不顺利，Go 1.18 的 Fuzzing 会将导致测试异常的数据文件记录下来，使用 cat 可以查看该测试数据</p>
<p><img src="https://image.iswbm.com/image-20220323214047119.png" alt="https://image.iswbm.com/image-20220323214047119.png"></p>
<p>记录下来后，该数据就可做为普通单元测试的数据，此时我们再执行 go test 就会引用该数据，当然了，在问题解决之前， go test 会一直报错</p>
<p><img src="https://image.iswbm.com/image-20220323214900909.png" alt="https://image.iswbm.com/image-20220323214900909.png"></p>
<h2 id="_3-问题排查与解决" tabindex="-1"><a class="header-anchor" href="#_3-问题排查与解决" aria-hidden="true">#</a> 3. 问题排查与解决</h2>
<p>模糊测试帮我们发现了一个出乎意料的 Bug 场景：在中文里的字符 <code v-pre>泃</code>其实是由3个字节组成的，如果按照字节反转，反转后得到的就是一个无效的字符串。</p>
<p>因此为了保证字符串反转后得到的仍然是一个有效的UTF-8编码的字符串，我们要按照<code v-pre>rune</code>进行字符串反转。</p>
<p>为了更好地方便大家理解中文里的字符 <code v-pre>泃</code>按照<code v-pre>rune</code>为维度有多少个<code v-pre>rune</code>，以及按照byte反转后得到的结果长什么样，我们对代码做一些修改。</p>
<p><img src="https://image.iswbm.com/image-20220323214536938.png" alt="https://image.iswbm.com/image-20220323214536938.png"></p>
<p>改完之后，再次执行 go test 就会提示测试成功，说明我们已经修复上面的那个场景的 BUG</p>
<p><img src="https://image.iswbm.com/image-20220323215108358.png" alt="https://image.iswbm.com/image-20220323215108358.png"></p>
<p>当下我们已经发现并修复了一个 BUG，程序肯定还有更多 BUG 存在，要继续寻找可以再次进行模糊测试，重复上面的步骤即可，这里不再赘述。</p>
<h2 id="_4-更多参数介绍" tabindex="-1"><a class="header-anchor" href="#_4-更多参数介绍" aria-hidden="true">#</a> 4. 更多参数介绍</h2>
<p>在支持了 Fuzzing 模糊测试后，go test 工具也有了一些新的命令，在这里一并记录下</p>
<p><strong>进行模糊测试</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go test -fuzz=Fuzz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>只对某个函数进行模糊测试</strong>：使用 -run=Fuzzxxx 或者 -fuzz=Fuzzxxx 指定模糊测试函数，避免执行到其他测试函数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go18 test -run=FuzzReverse
go18 test -fuzz=FuzzReverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试某个失败数据</strong>：使用 -run=file 指定数据文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go test -run=FuzzReverse/1fdd0160e6b3dd8f1e6b7a4179b4787e0c014cf9c46c67a863d71e3a0277c213
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>指定模糊测试的时间</strong>：使用 -fuzztime 指定模糊测试时间或者迭代次数（默认无限期），避免一直在跑测试无法退出</p>
<p>还有一个 -fuzzminimizetime 参数，看官方文档的介绍，我没明白其作用，有知道的还请评论区分享下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go test -fuzz=Fuzz -fuzztime 30s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>设置模糊测试进程数据</strong>：默认值是 $GOMAXPROCS，可根据实际情况进行设置，避免太占用机器的资源</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go test -fuzz=Fuzz -parallel 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '97.md' style='float:left'>⬆️上一节🔗</a><a href = '99.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


