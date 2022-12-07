import{_ as l,r as s,o as r,c,a as n,b as i,w as v,d as u,e}from"./app.8acd33e1.js";const t={},m=u(`<h1 id="\u5B66\u4E60-go-\u8BED\u8A00\u4E2D\u8FB9\u754C\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4E60-go-\u8BED\u8A00\u4E2D\u8FB9\u754C\u68C0\u67E5" aria-hidden="true">#</a> \u5B66\u4E60 Go \u8BED\u8A00\u4E2D\u8FB9\u754C\u68C0\u67E5</h1><p><img src="https://s2.loli.net/2022/04/11/ipb9Az2WZ54UBFx.png" alt="http://image.iswbm.com/20200607145423.png"></p><h2 id="_1-\u4EC0\u4E48\u662F\u8FB9\u754C\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u8FB9\u754C\u68C0\u67E5" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u8FB9\u754C\u68C0\u67E5\uFF1F</h2><p>\u8FB9\u754C\u68C0\u67E5\uFF0C\u82F1\u6587\u540D <code>Bounds Check Elimination</code>\uFF0C\u7B80\u79F0\u4E3A BCE\u3002\u5B83\u662F Go \u8BED\u8A00\u4E2D\u9632\u6B62\u6570\u7EC4\u3001\u5207\u7247\u8D8A\u754C\u800C\u5BFC\u81F4\u5185\u5B58\u4E0D\u5B89\u5168\u7684\u68C0\u67E5\u624B\u6BB5\u3002\u5982\u679C\u68C0\u67E5\u4E0B\u6807\u5DF2\u7ECF\u8D8A\u754C\u4E86\uFF0C\u5C31\u4F1A\u4EA7\u751F Panic\u3002</p><p>\u8FB9\u754C\u68C0\u67E5\u4F7F\u5F97\u6211\u4EEC\u7684\u4EE3\u7801\u80FD\u591F\u5B89\u5168\u5730\u8FD0\u884C\uFF0C\u4F46\u662F\u53E6\u4E00\u65B9\u9762\uFF0C\u4E5F\u4F7F\u5F97\u6211\u4EEC\u7684\u4EE3\u7801\u8FD0\u884C\u6548\u7387\u7565\u5FAE\u964D\u4F4E\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F1A\u8FDB\u884C\u4E09\u6B21\u7684\u8FB9\u754C\u68C0\u67E5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

func f(s []int) {
    _ = s[0]  // \u68C0\u67E5\u7B2C\u4E00\u6B21
    _ = s[1]  // \u68C0\u67E5\u7B2C\u4E8C\u6B21
    _ = s[2]  // \u68C0\u67E5\u7B2C\u4E09\u6B21
}

func main() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u53EF\u80FD\u4F1A\u597D\u5947\u4E86\uFF0C\u4E09\u6B21\uFF1F\u6211\u662F\u600E\u4E48\u77E5\u9053\u5B83\u8981\u68C0\u67E5\u4E09\u6B21\u7684\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u4F60\u53EA\u8981\u5728\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u52A0\u4E0A\u53C2\u6570\u5373\u53EF\uFF0C\u547D\u4EE4\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go build -gcflags=&quot;-d=ssa/check_bce/debug=1&quot; main.go
# command-line-arguments
./main.go:4:7: Found IsInBounds
./main.go:5:7: Found IsInBounds
./main.go:6:7: Found IsInBounds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u8FB9\u754C\u68C0\u67E5\u7684\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u8FB9\u754C\u68C0\u67E5\u7684\u6761\u4EF6" aria-hidden="true">#</a> 2. \u8FB9\u754C\u68C0\u67E5\u7684\u6761\u4EF6\uFF1F</h2><p>\u5E76\u4E0D\u662F\u6240\u6709\u7684\u5BF9\u6570\u7EC4\u3001\u5207\u7247\u8FDB\u884C\u7D22\u5F15\u64CD\u4F5C\u90FD\u9700\u8981\u8FB9\u754C\u68C0\u67E5\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u793A\u4F8B\uFF0C\u5C31\u4E0D\u9700\u8981\u8FDB\u884C\u8FB9\u754C\u68C0\u67E5\uFF0C\u56E0\u4E3A\u7F16\u8BD1\u5668\u6839\u636E\u4E0A\u4E0B\u6587\u5DF2\u7ECF\u5F97\u77E5\uFF0C<code>s</code> \u8FD9\u4E2A\u5207\u7247\u7684\u957F\u5EA6\u662F\u591A\u5C11\uFF0C\u4F60\u7684\u7EC8\u6B62\u7D22\u5F15\u662F\u591A\u5C11\uFF0C\u7ACB\u9A6C\u5C31\u80FD\u5224\u65AD\u5230\u5E95\u6709\u6CA1\u6709\u8D8A\u754C\uFF0C\u56E0\u6B64\u662F\u4E0D\u9700\u8981\u518D\u8FDB\u884C\u8FB9\u754C\u68C0\u67E5\uFF0C\u56E0\u4E3A\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u5C31\u5DF2\u7ECF\u77E5\u9053\u8FD9\u4E2A\u5730\u65B9\u4F1A\u4E0D\u4F1A panic\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

func f() {
    s := []int{1,2,3,4}
    _ = s[:9]  // \u4E0D\u9700\u8981\u8FB9\u754C\u68C0\u67E5
}
func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u6B64\u53EF\u4EE5\u5F97\u51FA\u7ED3\u8BBA\uFF0C\u5BF9\u4E8E\u5728\u7F16\u8BD1\u9636\u6BB5\u65E0\u6CD5\u5224\u65AD\u662F\u5426\u4F1A\u8D8A\u754C\u7684\u7D22\u5F15\u64CD\u4F5C\u624D\u4F1A\u9700\u8981\u8FB9\u754C\u68C0\u67E5\uFF0C\u6BD4\u5982\u8FD9\u6837\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main


func f(s []int) {
    _ = s[:9]  // \u9700\u8981\u8FB9\u754C\u68C0\u67E5
}
func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u8FB9\u754C\u68C0\u67E5\u7684\u7279\u6B8A\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u8FB9\u754C\u68C0\u67E5\u7684\u7279\u6B8A\u6848\u4F8B" aria-hidden="true">#</a> 3. \u8FB9\u754C\u68C0\u67E5\u7684\u7279\u6B8A\u6848\u4F8B</h2><h3 id="_3-1-\u6848\u4F8B\u4E00" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6848\u4F8B\u4E00" aria-hidden="true">#</a> 3.1 \u6848\u4F8B\u4E00</h3><p>\u5728\u5982\u4E0B\u793A\u4F8B\u4EE3\u7801\u4E2D\uFF0C\u7531\u4E8E\u7D22\u5F15 2 \u5728\u6700\u524D\u9762\u5DF2\u7ECF\u68C0\u67E5\u8FC7\u4F1A\u4E0D\u4F1A\u8D8A\u754C\uFF0C\u56E0\u6B64\u806A\u660E\u7684\u7F16\u8BD1\u5668\u53EF\u4EE5\u63A8\u65AD\u51FA\u540E\u9762\u7684\u7D22\u5F15 0 \u548C 1 \u4E0D\u7528\u518D\u68C0\u67E5\u5566</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> package main

func f(s []int) {
    _ = s[2] // \u68C0\u67E5\u4E00\u6B21
    _ = s[1]  // \u4E0D\u4F1A\u68C0\u67E5
    _ = s[0]  // \u4E0D\u4F1A\u68C0\u67E5
}

func main() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u6848\u4F8B\u4E8C" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6848\u4F8B\u4E8C" aria-hidden="true">#</a> 3.2 \u6848\u4F8B\u4E8C</h3><p>\u5728\u4E0B\u9762\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u53EF\u4EE5\u5728\u903B\u8F91\u4E0A\u4FDD\u8BC1\u4E0D\u4F1A\u8D8A\u754C\u7684\u4EE3\u7801\uFF0C\u540C\u6837\u662F\u4E0D\u4F1A\u8FDB\u884C\u8D8A\u754C\u68C0\u67E5\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

func f(s []int) {
    for index, _ := range s {
        _ = s[index]
        _ = s[:index+1]
        _ = s[index:len(s)]
    }
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u6848\u4F8B\u4E09" tabindex="-1"><a class="header-anchor" href="#_3-3-\u6848\u4F8B\u4E09" aria-hidden="true">#</a> 3.3 \u6848\u4F8B\u4E09</h3><p>\u5728\u5982\u4E0B\u793A\u4F8B\u4EE3\u7801\u4E2D\uFF0C\u867D\u7136\u6570\u7EC4\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u53EF\u4EE5\u786E\u5B9A\uFF0C\u4F46\u662F\u7D22\u5F15\u662F\u901A\u8FC7 <code>rand.Intn()</code> \u51FD\u6570\u53D6\u5F97\u7684\u968F\u673A\u6570\uFF0C\u5728\u7F16\u8BD1\u5668\u770B\u6765\u8FD9\u4E2A\u7D22\u5F15\u503C\u662F\u4E0D\u786E\u5B9A\u7684\uFF0C\u5B83\u6709\u53EF\u80FD\u5927\u4E8E\u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u4E5F\u6709\u53EF\u80FD\u5C0F\u4E8E\u6570\u7EC4\u7684\u957F\u5EA6\u3002</p><p>\u56E0\u6B64\u7B2C\u4E00\u6B21\u662F\u9700\u8981\u8FDB\u884C\u68C0\u67E5\u7684\uFF0C\u6709\u4E86\u7B2C\u4E00\u6B21\u68C0\u67E5\u540E\uFF0C\u7B2C\u4E8C\u6B21\u7D22\u5F15\u4ECE\u903B\u8F91\u4E0A\u5C31\u80FD\u63A8\u65AD\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u518D\u8FDB\u884C\u8FB9\u754C\u68C0\u67E5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;math/rand&quot;
)

func f()  {
    s := make([]int, 3, 3)
    index := rand.Intn(3)
     _ = s[:index]  // \u7B2C\u4E00\u6B21\u68C0\u67E5
    _ = s[index:]  // \u4E0D\u4F1A\u68C0\u67E5
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u5982\u679C\u628A\u4E0A\u9762\u7684\u4EE3\u7801\u7A0D\u5FAE\u6539\u4E00\u4E0B\uFF0C\u8BA9\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u53D8\u5F97\u4E0D\u4E00\u6837\uFF0C\u7ED3\u679C\u53C8\u4F1A\u53D8\u5F97\u4E0D\u4E00\u6837\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;math/rand&quot;
)

func f()  {
    s := make([]int, 3, 5)
    index := rand.Intn(3)
     _ = s[:index]  // \u7B2C\u4E00\u6B21\u68C0\u67E5
    _ = s[index:]  // \u7B2C\u4E8C\u6B21\u68C0\u67E5
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EA\u6709\u5F53\u6570\u7EC4\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u76F8\u7B49\u65F6\uFF0C <code>:index</code> \u6210\u7ACB\uFF0C\u624D\u80FD\u4E00\u5B9A\u80FD\u63A8\u51FA <code>index:</code> \u4E5F\u6210\u7ACB\uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C\u53EA\u8981\u505A\u4E00\u6B21\u68C0\u67E5\u5373\u53EF</p><p>\u4E00\u65E6\u6570\u7EC4\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u4E0D\u76F8\u7B49\uFF0C\u90A3\u4E48 index \u5728\u7F16\u8BD1\u5668\u770B\u6765\u662F\u6709\u53EF\u80FD\u5927\u4E8E\u6570\u7EC4\u957F\u5EA6\u7684\uFF0C\u751A\u81F3\u5927\u4E8E\u6570\u7EC4\u7684\u5BB9\u91CF\u3002</p><p>\u6211\u4EEC\u5047\u8BBE index \u53D6\u5F97\u7684\u968F\u673A\u6570\u4E3A 4\uFF0C\u90A3\u4E48\u5B83\u5927\u4E8E\u6570\u7EC4\u957F\u5EA6\uFF0C\u6B64\u65F6 <code>s[:index]</code> \u867D\u7136\u53EF\u4EE5\u6210\u529F\uFF0C\u4F46\u662F <code>s[index:]</code> \u662F\u8981\u5931\u8D25\u7684\uFF0C\u56E0\u6B64\u7B2C\u4E8C\u6B21\u8FB9\u754C\u7684\u68C0\u67E5\u662F\u6709\u5FC5\u8981\u7684\u3002</p><p>\u4F60\u53EF\u80FD\u4F1A\u8BF4\uFF0C index \u4E0D\u662F\u6700\u5927\u503C\u4E3A 3 \u5417\uFF1F\u600E\u4E48\u53EF\u80FD\u662F 4\u5462\uFF1F</p><p>\u8981\u77E5\u9053\u7F16\u8BD1\u5668\u5728\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u5E76\u4E0D\u77E5\u9053 index \u7684\u6700\u5927\u503C\u662F 3 \u5462\u3002</p><p><strong>\u5C0F\u7ED3\u4E00\u4E0B</strong></p><ol><li>\u5F53\u6570\u7EC4\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u76F8\u7B49\u65F6\uFF0C<code>s[:index]</code> \u6210\u7ACB\u80FD\u591F\u4FDD\u8BC1 <code>s[index:]</code> \u4E5F\u6210\u7ACB\uFF0C\u56E0\u4E3A\u53EA\u8981\u68C0\u67E5\u4E00\u6B21\u5373\u53EF</li><li>\u5F53\u6570\u7EC4\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u4E0D\u7B49\u65F6\uFF0C<code>s[:index]</code> \u6210\u7ACB\u4E0D\u80FD\u4FDD\u8BC1 <code>s[index:]</code> \u4E5F\u6210\u7ACB\uFF0C\u56E0\u4E3A\u8981\u68C0\u67E5\u4E24\u6B21\u624D\u53EF\u4EE5</li></ol><h3 id="_3-4-\u6848\u4F8B\u56DB" tabindex="-1"><a class="header-anchor" href="#_3-4-\u6848\u4F8B\u56DB" aria-hidden="true">#</a> 3.4 \u6848\u4F8B\u56DB</h3><p>\u6709\u4E86\u4E0A\u9762\u7684\u94FA\u57AB\uFF0C\u518D\u6765\u770B\u4E0B\u9762\u8FD9\u4E2A\u793A\u4F8B\uFF0C\u7531\u4E8E\u6570\u7EC4\u662F\u8C03\u7528\u8005\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u7F16\u8BD1\u5668\u7684\u7F16\u8BD1\u7684\u65F6\u5019\u65E0\u6CD5\u5F97\u77E5\u6570\u7EC4\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u662F\u5426\u76F8\u7B49\uFF0C\u56E0\u6B64\u53EA\u80FD\u4FDD\u9669\u4E00\u70B9\uFF0C\u4E24\u4E2A\u90FD\u68C0\u67E5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;math/rand&quot;
)

func f(s []int, index int) {
    _ = s[:index] // \u7B2C\u4E00\u6B21\u68C0\u67E5
    _ = s[index:] // \u7B2C\u4E8C\u6B21\u68C0\u67E5
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5982\u679C\u628A\u4E24\u4E2A\u8868\u8FBE\u5F0F\u7684\u987A\u5E8F\u53CD\u8FC7\u6765\uFF0C\u5C31\u53EA\u8981\u505A\u4E00\u6B21\u68C0\u67E5\u5C31\u884C\u4E86\uFF0C\u539F\u56E0\u6211\u5C31\u4E0D\u8D58\u8FF0\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;math/rand&quot;
)

func f(s []int, index int) {
    _ = s[index:] // \u7B2C\u4E00\u6B21\u68C0\u67E5
    _ = s[:index] // \u4E0D\u7528\u68C0\u67E5
}

func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u4E3B\u52A8\u6D88\u9664\u8FB9\u754C\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#_5-\u4E3B\u52A8\u6D88\u9664\u8FB9\u754C\u68C0\u67E5" aria-hidden="true">#</a> 5. \u4E3B\u52A8\u6D88\u9664\u8FB9\u754C\u68C0\u67E5</h2><p>\u867D\u7136\u7F16\u8BD1\u5668\u5DF2\u7ECF\u975E\u5E38\u52AA\u529B\u53BB\u6D88\u9664\u4E00\u4E9B\u5E94\u8BE5\u6D88\u9664\u7684\u8FB9\u754C\u68C0\u67E5\uFF0C\u4F46\u96BE\u514D\u4F1A\u6709\u4E00\u4E9B\u9057\u6F0F\u3002</p><p>\u8FD9\u5C31\u9700\u8981\u201D\u8B66\u6C11\u5408\u4F5C\u201D\uFF0C\u5BF9\u4E8E\u90A3\u4E9B\u7F16\u8BD1\u5668\u8FD8\u672A\u8003\u8651\u5230\u7684\u573A\u666F\uFF0C\u4F46\u5F00\u53D1\u8005\u53C8\u6781\u529B\u8FFD\u6C42\u7A0B\u5E8F\u7684\u8FD0\u884C\u6548\u7387\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u5C0F\u6280\u5DE7\u7ED9\u51FA\u4E00\u4E9B\u6697\u793A\uFF0C\u544A\u8BC9\u7F16\u8BD1\u5668\u54EA\u4E9B\u5730\u65B9\u53EF\u4EE5\u4E0D\u7528\u505A\u8FB9\u754C\u68C0\u67E5\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u793A\u4F8B\uFF0C\u4ECE\u4EE3\u7801\u7684\u903B\u8F91\u4E0A\u6765\u8BF4\uFF0C\u662F\u5B8C\u5168\u6CA1\u6709\u5FC5\u8981\u505A\u8FB9\u754C\u68C0\u67E5\u7684\uFF0C\u4F46\u662F\u7F16\u8BD1\u5668\u5E76\u6CA1\u6709\u90A3\u4E48\u667A\u80FD\uFF0C\u5B9E\u9645\u4E0A\u6BCF\u4E2Afor\u5FAA\u73AF\uFF0C\u5B83\u90FD\u8981\u505A\u4E00\u6B21\u8FB9\u754C\u7684\u68C0\u67E5\uFF0C\u975E\u5E38\u7684\u6D6A\u8D39\u6027\u80FD\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main


func f(is []int, bs []byte) {
    if len(is) &gt;= 256 {
        for _, n := range bs {
            _ = is[n] // \u6BCF\u4E2A\u5FAA\u73AF\u90FD\u8981\u8FB9\u754C\u68C0\u67E5
        }
    }
}
func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u8BD5\u7740\u5728 for \u5FAA\u73AF\u524D\u52A0\u4E0A\u8FD9\u4E48\u4E00\u53E5 <code>is = is[:256]</code> \u6765\u544A\u8BC9\u7F16\u8BD1\u5668\u65B0 is \u7684\u957F\u5EA6\u4E3A 256\uFF0C\u6700\u5927\u7D22\u5F15\u503C\u4E3A 255\uFF0C\u4E0D\u4F1A\u8D85\u8FC7 byte \u7684\u6700\u5927\u503C\uFF0C\u56E0\u4E3A <code>is[n]</code> \u4ECE\u903B\u8F91\u4E0A\u6765\u8BF4\u662F\u4E00\u5B9A\u4E0D\u4F1A\u8D8A\u754C\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main


func f(is []int, bs []byte) {
    if len(is) &gt;= 256 {
        is = is[:256]
        for _, n := range bs {
            _ = is[n] // \u4E0D\u9700\u8981\u505A\u8FB9\u754C\u68C0\u67E5
        }
    }
}
func main()  {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,49),o={href:"https://gfw.go101.org/article/bounds-check-elimination.html",target:"_blank",rel:"noopener noreferrer"},b=e("\u8FB9\u754C\u68C0\u67E5\u6D88\u9664"),p=n("h2",{id:"end-\u94FE\u63A5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#end-\u94FE\u63A5","aria-hidden":"true"},"#"),e(" END \u94FE\u63A5")],-1),h=n("ul",null,[n("li",null,[n("div",null,[n("a",{href:"94.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}"),n("a",{href:"96.md",style:{float:"right"}},"\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")])])],-1),x=e("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),g={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},_=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),f=e(")"),k=e("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),E={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},I=e("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function q(B,C){const d=s("ExternalLinkIcon"),a=s("RouterLink");return r(),c("div",null,[m,n("ul",null,[n("li",null,[n("a",o,[b,i(d)])])]),p,h,n("ul",null,[n("li",null,[n("p",null,[i(a,{to:"/Gomd_super/"},{default:v(()=>[x]),_:1})])]),n("li",null,[n("p",null,[n("a",g,[_,i(d)]),f])]),n("li",null,[n("p",null,[k,n("a",E,[I,i(d)])])])])])}const y=l(t,[["render",q],["__file","95.html.vue"]]);export{y as default};
