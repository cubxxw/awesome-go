<template><div><h1 id="理清-go-中晦涩难懂的寻址问题" tabindex="-1"><a class="header-anchor" href="#理清-go-中晦涩难懂的寻址问题" aria-hidden="true">#</a> 理清 Go 中晦涩难懂的寻址问题</h1>
<h2 id="什么叫可寻址" tabindex="-1"><a class="header-anchor" href="#什么叫可寻址" aria-hidden="true">#</a> 什么叫可寻址？</h2>
<p>可直接使用 <code v-pre>&amp;</code> 操作符取地址的对象，就是可寻址的（Addressable）。比如下面这个例子</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func main() {
    name := "iswbm"
    fmt.Println(&amp;name)
    // output: 0xc000010200
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序运行不会报错，说明 name 这个变量是可寻址的。</p>
<p>但不能说 <code v-pre>&quot;iswbm&quot;</code> 这个字符串是可寻址的。</p>
<p><code v-pre>&quot;iswbm&quot;</code> 是字符串，字符串都是不可变的，是不可寻址的，后面会介绍到。</p>
<p>在开始逐个介绍之前，先说一下结论</p>
<ul>
<li>指针可以寻址：<code v-pre>&amp;Profile{}</code></li>
<li>变量可以寻址：<code v-pre>name := Profile{}</code></li>
<li>字面量通通不能寻址：<code v-pre>Profile{}</code></li>
</ul>
<h2 id="哪些是可以寻址的" tabindex="-1"><a class="header-anchor" href="#哪些是可以寻址的" aria-hidden="true">#</a> 哪些是可以寻址的？</h2>
<h3 id="变量-x" tabindex="-1"><a class="header-anchor" href="#变量-x" aria-hidden="true">#</a> 变量：&amp;x</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func main() {
    name := "iswbm"
    fmt.Println(&amp;name)
    // output: 0xc000010200
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指针-x" tabindex="-1"><a class="header-anchor" href="#指针-x" aria-hidden="true">#</a> 指针：&amp;*x</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type Profile struct {
    Name string
}

func main() {
    fmt.Println(unsafe.Pointer(&amp;Profile{Name: "iswbm"}))
    // output: 0xc000108040
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组元素索引-a-0" tabindex="-1"><a class="header-anchor" href="#数组元素索引-a-0" aria-hidden="true">#</a> 数组元素索引: &amp;a[0]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func main() {
    s := [...]int{1,2,3}
    fmt.Println(&amp;s[0])
    // output: xc0000b4010
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func main() {
    fmt.Println([]int{1, 2, 3}[1:])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切片元素索引-s-1" tabindex="-1"><a class="header-anchor" href="#切片元素索引-s-1" aria-hidden="true">#</a> 切片元素索引：&amp;s[1]</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func main() {
    s := make([]int , 2, 2)
    fmt.Println(&amp;s[0])
    // output: xc0000b4010
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合字面量-struct-x-type-value" tabindex="-1"><a class="header-anchor" href="#组合字面量-struct-x-type-value" aria-hidden="true">#</a> 组合字面量: &amp;struct{X type}{value}</h3>
<p>所有的组合字面量都是不可寻址的，就像下面这样子</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type Profile struct {
    Name string
}

func new() Profile {
    return Profile{Name: "iswbm"}
}

func main() {
    fmt.Println(&amp;new())
    // cannot take the address of new()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上面写法与这个写法的区别，下面这个写法代表不同意思，其中的 <code v-pre>&amp;</code> 并不是取地址的操作，而代表实例化一个结构体的指针。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type Profile struct {
    Name string
}

func main() {
    fmt.Println(&amp;Profile{Name: "iswbm"}) // ok
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然组合字面量是不可寻址的，但却可以对组合字面量的字段属性进行寻址（直接访问）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type Profile struct {
    Name string
}

func new() Profile {
    return Profile{Name: "iswbm"}
}

func main() {
    fmt.Println(new().Name)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="哪些是不可以寻址的" tabindex="-1"><a class="header-anchor" href="#哪些是不可以寻址的" aria-hidden="true">#</a> 哪些是不可以寻址的？</h2>
<h3 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import "fmt"

const VERSION  = "1.0"

func main() {
    fmt.Println(&amp;VERSION)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func getStr() string {
    return "iswbm"
}
func main() {
    fmt.Println(&amp;getStr())
    // cannot take the address of getStr()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数或方法" tabindex="-1"><a class="header-anchor" href="#函数或方法" aria-hidden="true">#</a> 函数或方法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func getStr() string {
    return "iswbm"
}
func main() {
    fmt.Println(&amp;getStr)
    // cannot take the address of getStr
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本类型字面量" tabindex="-1"><a class="header-anchor" href="#基本类型字面量" aria-hidden="true">#</a> 基本类型字面量</h3>
<p>字面量分：<strong>基本类型字面量</strong> 和 <strong>复合型字面量</strong>。</p>
<p>基本类型字面量，是一个值的文本表示，都是不应该也是不可以被寻址的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func getInt() int {
    return 1024
}

func main() {
    fmt.Println(&amp;getInt())
    // cannot take the address of getInt()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-中的元素" tabindex="-1"><a class="header-anchor" href="#map-中的元素" aria-hidden="true">#</a> map 中的元素</h3>
<p>字典比较特殊，可以从两个角度来反向推导，假设字典的元素是可寻址的，会出现 什么问题？</p>
<ol>
<li>如果字典的元素不存在，则返回零值，而零值是不可变对象，如果能寻址问题就大了。</li>
<li>而如果字典的元素存在，考虑到 Go 中 map 实现中元素的地址是变化的，这意味着寻址的结果也是无意义的。</li>
</ol>
<p>基于这两点，Map 中的元素不可寻址，符合常理。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func main() {
    p := map[string]string {
        "name": "iswbm",
    }

    fmt.Println(&amp;p["name"])
    // cannot take the address of p["name"]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搞懂了这点，你应该能够理解下面这段代码为什么会报错啦~</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package main

import "fmt"

type Person struct {
    Name  string
    Email string
}

func main() {
    m := map[int]Person{
        1:Person{"Andy", "1137291867@qq.com"},
        2:Person{"Tiny", "qishuai231@gmail.com"},
        3:Person{"Jack", "qs_edu2009@163.com"},
    }

    //编译错误：cannot assign to struct field m[1].Name in map
    m[1].Name = "Scrapup"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组字面量" tabindex="-1"><a class="header-anchor" href="#数组字面量" aria-hidden="true">#</a> 数组字面量</h3>
<p>数组字面量是不可寻址的，当你对数组字面量进行切片操作，其实就是寻找内部元素的地址，下面这段代码是会报错的</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func main() {
    fmt.Println([3]int{1, 2, 3}[1:])
    // invalid operation [3]int literal[1:] (slice of unaddressable value)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '93.md' style='float:left'>⬆️上一节🔗</a><a href = '95.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


