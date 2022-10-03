<template><div><h1 id="go-语言中的内存分配规律及逃逸分析" tabindex="-1"><a class="header-anchor" href="#go-语言中的内存分配规律及逃逸分析" aria-hidden="true">#</a> Go 语言中的内存分配规律及逃逸分析</h1>
<h2 id="_1-分配内存三大组件" tabindex="-1"><a class="header-anchor" href="#_1-分配内存三大组件" aria-hidden="true">#</a> 1. 分配内存三大组件</h2>
<p>Go 分配内存的过程，主要由三大组件所管理，级别从上到下分别是：</p>
<h3 id="mheap" tabindex="-1"><a class="header-anchor" href="#mheap" aria-hidden="true">#</a> mheap</h3>
<p>Go 在程序启动时，首先会向操作系统申请一大块内存，并交由<code v-pre>mheap</code>结构全局管理。</p>
<p>具体怎么管理呢？ mheap 会将这一大块内存，切分成不同规格的小内存块，我们称之为 mspan，根据规格大小不同，mspan 大概有 70类左右，划分得可谓是非常的精细，足以满足各种对象内存的分配。</p>
<p>那么这些 mspan 大大小小的规格，杂乱在一起，肯定很难管理对吧？</p>
<p>因此就有了 mcentral 这下一级组件</p>
<h3 id="mcentral" tabindex="-1"><a class="header-anchor" href="#mcentral" aria-hidden="true">#</a> mcentral</h3>
<p>启动一个 Go 程序，会初始化很多的 mcentral ，每个 mcentral 只负责管理一种特定规格的 mspan。</p>
<p>相当于 mcentral 实现了在 mheap 的基础上对 mspan 的精细化管理。</p>
<p>但是 mcentral 在 Go 程序中是全局可见的，因此如果每次协程来 mcentral 申请内存的时候，都需要加锁。</p>
<p>可以预想，如果每个协程都来 mcentral 申请内存，那频繁的加锁释放锁开销是非常大的。</p>
<p>因此需要有一个 mcentral 的二级代理来缓冲这种压力</p>
<h3 id="mcache" tabindex="-1"><a class="header-anchor" href="#mcache" aria-hidden="true">#</a> mcache</h3>
<p>在一个 Go 程序里，每个线程<code v-pre>M</code>会绑定给一个处理器<code v-pre>P</code>，在单一粒度的时间里只能做多处理运行一个<code v-pre>goroutine</code>，每个<code v-pre>P</code>都会绑定一个叫 <code v-pre>mcache</code> 的本地缓存。</p>
<p>当需要进行内存分配时，当前运行的<code v-pre>goroutine</code>会从<code v-pre>mcache</code>中查找可用的<code v-pre>mspan</code>。从本地<code v-pre>mcache</code>里分配内存时不需要加锁，这种分配策略效率更高。</p>
<h3 id="mspan-供应链" tabindex="-1"><a class="header-anchor" href="#mspan-供应链" aria-hidden="true">#</a> mspan 供应链</h3>
<p>mcache 的 mspan 数量并不总是充足的，当供不应求的时候，mcache 会从 mcentral 再次申请更多的 mspan，同样的，如果 mcentral 的 mspan 数量也不够的话，mcentral 也会向它的上级 mheap 申请 mspan。再极端一点，如果 mheap 里的 mspan 也无法满足程序的内存申请，那该怎么办？</p>
<p>那就没办法啦，mheap 只能厚着脸皮跟操作系统这个老大哥申请了。</p>
<p>以上的供应流程，只适用于内存块小于 64KB 的场景，原因在于Go 没法使用工作线程的本地缓存<code v-pre>mcache</code>和全局中心缓存 <code v-pre>mcentral</code> 上管理超过 64KB 的内存分配，所以对于那些超过 64KB 的内存申请，会直接从堆上(<code v-pre>mheap</code>)上分配对应的数量的内存页（每页大小是 8KB）给程序。</p>
<h2 id="_2-什么是堆内存和栈内存" tabindex="-1"><a class="header-anchor" href="#_2-什么是堆内存和栈内存" aria-hidden="true">#</a> 2. 什么是堆内存和栈内存？</h2>
<p>根据内存管理（分配和回收）方式的不同，可以将内存分为 <strong>堆内存</strong> 和 <strong>栈内存</strong>。</p>
<p>那么他们有什么区别呢？</p>
<p><strong>堆内存</strong>：由内存分配器和垃圾收集器负责回收</p>
<p><strong>栈内存</strong>：由编译器自动进行分配和释放</p>
<p>一个程序运行过程中，也许会有多个栈内存，但肯定只会有一个堆内存。</p>
<p>每个栈内存都是由线程或者协程独立占有，因此从栈中分配内存不需要加锁，并且栈内存在函数结束后会自动回收，性能相对堆内存好要高。</p>
<p>而堆内存呢？由于多个线程或者协程都有可能同时从堆中申请内存，因此在堆中申请内存需要加锁，避免造成冲突，并且堆内存在函数结束后，需要 GC （垃圾回收）的介入参与，如果有大量的 GC 操作，将会吏程序性能下降得历害。</p>
<h2 id="_3-逃逸分析的必要性" tabindex="-1"><a class="header-anchor" href="#_3-逃逸分析的必要性" aria-hidden="true">#</a> 3. 逃逸分析的必要性</h2>
<p>由此可以看出，为了提高程序的性能，应当尽量减少内存在堆上分配，这样就能减少 GC 的压力。</p>
<p>在判断一个变量是在堆上分配内存还是在栈上分配内存，虽然已经有前人已经总结了一些规律，但依靠程序员能够在编码的时候时刻去注意这个问题，对程序员的要求相当之高。</p>
<p>好在 Go 的编译器，也开放了逃逸分析的功能，使用逃逸分析，可以直接检测出你程序员所有分配在堆上的变量（这种现象，即是逃逸）。</p>
<p>方法是执行如下命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>go build -gcflags '-m -l' demo.go

# 或者再加个 -m 查看更详细信息
go build -gcflags '-m -m -l' demo.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-内存分配位置的规律" tabindex="-1"><a class="header-anchor" href="#_4-内存分配位置的规律" aria-hidden="true">#</a> 4. 内存分配位置的规律</h2>
<p>如果逃逸分析工具，其实人工也可以判断到底有哪些变量是分配在堆上的。</p>
<p>那么这些规律是什么呢？</p>
<p>经过总结，主要有如下四种情况</p>
<ol>
<li>根据变量的使用范围</li>
<li>根据变量类型是否确定</li>
<li>根据变量的占用大小</li>
<li>根据变量长度是否确定</li>
</ol>
<p>接下来我们一个一个分析验证</p>
<h3 id="根据变量的使用范围" tabindex="-1"><a class="header-anchor" href="#根据变量的使用范围" aria-hidden="true">#</a> 根据变量的使用范围</h3>
<p>当你进行编译的时候，编译器会做逃逸分析(escape analysis)，当发现一个变量的使用范围仅在函数中，那么可以在栈上为它分配内存。</p>
<p>比如下边这个例子</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func foo() int {
    v := 1024
    return v
}

func main() {
    m := foo()
    fmt.Println(m)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以通过 <code v-pre>go build -gcflags '-m -l' demo.go</code> 来查看逃逸分析的结果，其中 <code v-pre>-m</code> 是打印逃逸分析的信息，<code v-pre>-l</code> 则是禁止内联优化。</p>
<p>从分析的结果我们并没有看到任何关于 v 变量的逃逸说明，说明其并没有逃逸，它是分配在栈上的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go build -gcflags '-m -l' demo.go
# command-line-arguments
./demo.go:12:13: ... argument does not escape
./demo.go:12:13: m escapes to heap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果该变量还需要在函数范围之外使用，如果还在栈上分配，那么当函数返回的时候，该变量指向的内存空间就会被回收，程序势必会报错，因此对于这种变量只能在堆上分配。</p>
<p>比如下边这个例子，<strong>返回的是指针</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func foo() *int {
    v := 1024
    return &amp;v
}

func main() {
    m := foo()
    fmt.Println(*m) // 1024
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从逃逸分析的结果中可以看到 <code v-pre>moved to heap: v</code> ，v 变量是从堆上分配的内存，和上面的场景有着明显的区别。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go build -gcflags '-m -l' demo.go
# command-line-arguments
./demo.go:6:2: moved to heap: v
./demo.go:12:13: ... argument does not escape
./demo.go:12:14: *m escapes to heap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了返回指针之外，还有其他的几种情况也可归为一类：</p>
<p><strong>第一种情况：返回任意引用型的变量：Slice 和 Map</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func foo() []int {
    a := []int{1,2,3}
    return a
}

func main() {
    b := foo()
    fmt.Println(b)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逃逸分析结果</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go build -gcflags '-m -l' demo.go
# command-line-arguments
./demo.go:6:12: []int literal escapes to heap
./demo.go:12:13: ... argument does not escape
./demo.go:12:13: b escapes to heap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二种情况：在闭包函数中使用外部变量</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func Increase() func() int {
    n := 0
    return func() int {
        n++
        return n
    }
}

func main() {
    in := Increase()
    fmt.Println(in()) // 1
    fmt.Println(in()) // 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逃逸分析结果</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go build -gcflags '-m -l' demo.go
# command-line-arguments
./demo.go:6:2: moved to heap: n
./demo.go:7:9: func literal escapes to heap
./demo.go:15:13: ... argument does not escape
./demo.go:15:16: in() escapes to heap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据变量类型是否确定" tabindex="-1"><a class="header-anchor" href="#根据变量类型是否确定" aria-hidden="true">#</a> 根据变量类型是否确定</h3>
<p>在上边例子中，也许你发现了，所有编译输出的最后一行中都是 <code v-pre>m escapes to heap</code> 。</p>
<p>奇怪了，为什么 m 会逃逸到堆上？</p>
<p>其实就是因为我们调用了 <code v-pre>fmt.Println()</code> 函数，它的定义如下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func Println(a ...interface{}) (n int, err error) {
    return Fprintln(os.Stdout, a...)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见其接收的参数类型是 <code v-pre>interface{}</code> ，对于这种编译期不能确定其参数的具体类型，编译器会将其分配于堆上。</p>
<h3 id="根据变量的占用大小" tabindex="-1"><a class="header-anchor" href="#根据变量的占用大小" aria-hidden="true">#</a> 根据变量的占用大小</h3>
<p>最开始的时候，就介绍到，以 64KB 为分界线，我们将内存块分为 小内存块 和 大内存块。</p>
<p>小内存块走常规的 mspan 供应链申请，而大内存块则需要直接向 mheap，在堆区申请。</p>
<p>以下的例子来说明</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func foo() {
    nums1 := make([]int, 8191) // &lt; 64KB
    for i := 0; i &lt; 8191; i++ {
        nums1[i] = i
    }
}

func bar() {
    nums2 := make([]int, 8192) // = 64KB
    for i := 0; i &lt; 8192; i++ {
        nums2[i] = i
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给 <code v-pre>-gcflags</code> 多加个 <code v-pre>-m</code> 可以看到更详细的逃逸分析的结果</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ go build -gcflags '-m -l' demo.go
# command-line-arguments
./demo.go:5:15: make([]int, 8191) does not escape
./demo.go:12:15: make([]int, 8192) escapes to heap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那为什么是 64 KB 呢？</p>
<p>我只能说是试出来的 （8191刚好不逃逸，8192刚好逃逸），网上有很多文章千篇一律的说和 <code v-pre>ulimit -a</code> 中的 <code v-pre>stack size</code> 有关，但经过了解这个值表示的是系统栈的最大限制是 8192 KB，刚好是 8M。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ ulimit -a
-t: cpu time (seconds)              unlimited
-f: file size (blocks)              unlimited
-d: data seg size (kbytes)          unlimited
-s: stack size (kbytes)             8192
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我个人实在无法理解这个 8192 （8M） 和 64 KB 是如何对应上的，如果有朋友知道，还请指教一下。</p>
<h3 id="根据变量长度是否确定" tabindex="-1"><a class="header-anchor" href="#根据变量长度是否确定" aria-hidden="true">#</a> 根据变量长度是否确定</h3>
<p>由于逃逸分析是在编译期就运行的，而不是在运行时运行的。因此避免有一些不定长的变量可能会很大，而在栈上分配内存失败，Go 会选择把这些变量统一在堆上申请内存，这是一种可以理解的保险的做法。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func foo() {
    length := 10
    arr := make([]int, 0 ,length)  // 由于容量是变量，因此不确定，因此在堆上申请
}

func bar() {
    arr := make([]int, 0 ,10)  // 由于容量是常量，因此是确定的，因此在栈上申请
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-参考文章" tabindex="-1"><a class="header-anchor" href="#_5-参考文章" aria-hidden="true">#</a> 5. 参考文章</h2>
<ul>
<li><a href="https://xie.infoq.cn/article/ee1d2416d884b229dfe57bbcc" target="_blank" rel="noopener noreferrer">Go 语言内存管理三部曲（一）内存分配原理<ExternalLinkIcon/></a></li>
<li>[图解Go语言内存分配（面试重点，讲的很详细）](https://github.com/LeoYang90/Golang-Internal-Notes/blob/master/Go 内存管理.md)</li>
<li><a href="https://zhuanlan.zhihu.com/p/343562181" target="_blank" rel="noopener noreferrer">详解Go逃逸分析<ExternalLinkIcon/></a></li>
</ul>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '95.md' style='float:left'>⬆️上一节🔗</a><a href = '97.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


