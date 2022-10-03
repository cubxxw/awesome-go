<template><div><h1 id="学习-go-语言中边界检查" tabindex="-1"><a class="header-anchor" href="#学习-go-语言中边界检查" aria-hidden="true">#</a> 学习 Go 语言中边界检查</h1>
<p><img src="https://s2.loli.net/2022/04/11/ipb9Az2WZ54UBFx.png" alt="http://image.iswbm.com/20200607145423.png"></p>
<h2 id="_1-什么是边界检查" tabindex="-1"><a class="header-anchor" href="#_1-什么是边界检查" aria-hidden="true">#</a> 1. 什么是边界检查？</h2>
<p>边界检查，英文名 <code v-pre>Bounds Check Elimination</code>，简称为 BCE。它是 Go 语言中防止数组、切片越界而导致内存不安全的检查手段。如果检查下标已经越界了，就会产生 Panic。</p>
<p>边界检查使得我们的代码能够安全地运行，但是另一方面，也使得我们的代码运行效率略微降低。</p>
<p>比如下面这段代码，会进行三次的边界检查</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

func f(s []int) {
    _ = s[0]  // 检查第一次
    _ = s[1]  // 检查第二次
    _ = s[2]  // 检查第三次
}

func main() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能会好奇了，三次？我是怎么知道它要检查三次的。</p>
<p>实际上，你只要在编译的时候，加上参数即可，命令如下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go build -gcflags="-d=ssa/check_bce/debug=1" main.go
# command-line-arguments
./main.go:4:7: Found IsInBounds
./main.go:5:7: Found IsInBounds
./main.go:6:7: Found IsInBounds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-边界检查的条件" tabindex="-1"><a class="header-anchor" href="#_2-边界检查的条件" aria-hidden="true">#</a> 2. 边界检查的条件？</h2>
<p>并不是所有的对数组、切片进行索引操作都需要边界检查。</p>
<p>比如下面这个示例，就不需要进行边界检查，因为编译器根据上下文已经得知，<code v-pre>s</code> 这个切片的长度是多少，你的终止索引是多少，立马就能判断到底有没有越界，因此是不需要再进行边界检查，因为在编译的时候就已经知道这个地方会不会 panic。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

func f() {
    s := []int{1,2,3,4}
    _ = s[:9]  // 不需要边界检查
}
func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此可以得出结论，对于在编译阶段无法判断是否会越界的索引操作才会需要边界检查，比如这样子</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main


func f(s []int) {
    _ = s[:9]  // 需要边界检查
}
func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-边界检查的特殊案例" tabindex="-1"><a class="header-anchor" href="#_3-边界检查的特殊案例" aria-hidden="true">#</a> 3. 边界检查的特殊案例</h2>
<h3 id="_3-1-案例一" tabindex="-1"><a class="header-anchor" href="#_3-1-案例一" aria-hidden="true">#</a> 3.1 案例一</h3>
<p>在如下示例代码中，由于索引 2 在最前面已经检查过会不会越界，因此聪明的编译器可以推断出后面的索引 0 和 1 不用再检查啦</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> package main

func f(s []int) {
    _ = s[2] // 检查一次
    _ = s[1]  // 不会检查
    _ = s[0]  // 不会检查
}

func main() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-案例二" tabindex="-1"><a class="header-anchor" href="#_3-2-案例二" aria-hidden="true">#</a> 3.2 案例二</h3>
<p>在下面这个示例中，可以在逻辑上保证不会越界的代码，同样是不会进行越界检查的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

func f(s []int) {
    for index, _ := range s {
        _ = s[index]
        _ = s[:index+1]
        _ = s[index:len(s)]
    }
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-案例三" tabindex="-1"><a class="header-anchor" href="#_3-3-案例三" aria-hidden="true">#</a> 3.3 案例三</h3>
<p>在如下示例代码中，虽然数组的长度和容量可以确定，但是索引是通过 <code v-pre>rand.Intn()</code> 函数取得的随机数，在编译器看来这个索引值是不确定的，它有可能大于数组的长度，也有可能小于数组的长度。</p>
<p>因此第一次是需要进行检查的，有了第一次检查后，第二次索引从逻辑上就能推断，所以不会再进行边界检查。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "math/rand"
)

func f()  {
    s := make([]int, 3, 3)
    index := rand.Intn(3)
     _ = s[:index]  // 第一次检查
    _ = s[index:]  // 不会检查
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果把上面的代码稍微改一下，让切片的长度和容量变得不一样，结果又会变得不一样了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "math/rand"
)

func f()  {
    s := make([]int, 3, 5)
    index := rand.Intn(3)
     _ = s[:index]  // 第一次检查
    _ = s[index:]  // 第二次检查
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只有当数组的长度和容量相等时， <code v-pre>:index</code> 成立，才能一定能推出 <code v-pre>index:</code> 也成立，这样的话，只要做一次检查即可</p>
<p>一旦数组的长度和容量不相等，那么 index 在编译器看来是有可能大于数组长度的，甚至大于数组的容量。</p>
<p>我们假设 index 取得的随机数为 4，那么它大于数组长度，此时 <code v-pre>s[:index]</code> 虽然可以成功，但是 <code v-pre>s[index:]</code> 是要失败的，因此第二次边界的检查是有必要的。</p>
<p>你可能会说， index 不是最大值为 3 吗？怎么可能是 4呢？</p>
<p>要知道编译器在编译的时候，并不知道 index 的最大值是 3 呢。</p>
<p><strong>小结一下</strong></p>
<ol>
<li>当数组的长度和容量相等时，<code v-pre>s[:index]</code> 成立能够保证 <code v-pre>s[index:]</code> 也成立，因为只要检查一次即可</li>
<li>当数组的长度和容量不等时，<code v-pre>s[:index]</code> 成立不能保证 <code v-pre>s[index:]</code> 也成立，因为要检查两次才可以</li>
</ol>
<h3 id="_3-4-案例四" tabindex="-1"><a class="header-anchor" href="#_3-4-案例四" aria-hidden="true">#</a> 3.4 案例四</h3>
<p>有了上面的铺垫，再来看下面这个示例，由于数组是调用者传入的参数，所以编译器的编译的时候无法得知数组的长度和容量是否相等，因此只能保险一点，两个都检查。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "math/rand"
)

func f(s []int, index int) {
    _ = s[:index] // 第一次检查
    _ = s[index:] // 第二次检查
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果把两个表达式的顺序反过来，就只要做一次检查就行了，原因我就不赘述了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import (
    "math/rand"
)

func f(s []int, index int) {
    _ = s[index:] // 第一次检查
    _ = s[:index] // 不用检查
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-主动消除边界检查" tabindex="-1"><a class="header-anchor" href="#_5-主动消除边界检查" aria-hidden="true">#</a> 5. 主动消除边界检查</h2>
<p>虽然编译器已经非常努力去消除一些应该消除的边界检查，但难免会有一些遗漏。</p>
<p>这就需要”警民合作”，对于那些编译器还未考虑到的场景，但开发者又极力追求程序的运行效率的，可以使用一些小技巧给出一些暗示，告诉编译器哪些地方可以不用做边界检查。</p>
<p>比如下面这个示例，从代码的逻辑上来说，是完全没有必要做边界检查的，但是编译器并没有那么智能，实际上每个for循环，它都要做一次边界的检查，非常的浪费性能。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main


func f(is []int, bs []byte) {
    if len(is) >= 256 {
        for _, n := range bs {
            _ = is[n] // 每个循环都要边界检查
        }
    }
}
func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以试着在 for 循环前加上这么一句 <code v-pre>is = is[:256]</code> 来告诉编译器新 is 的长度为 256，最大索引值为 255，不会超过 byte 的最大值，因为 <code v-pre>is[n]</code> 从逻辑上来说是一定不会越界的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main


func f(is []int, bs []byte) {
    if len(is) >= 256 {
        is = is[:256]
        for _, n := range bs {
            _ = is[n] // 不需要做边界检查
        }
    }
}
func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>
<ul>
<li><a href="https://gfw.go101.org/article/bounds-check-elimination.html" target="_blank" rel="noopener noreferrer">边界检查消除<ExternalLinkIcon/></a></li>
</ul>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '94.md' style='float:left'>⬆️上一节🔗</a><a href = '96.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


