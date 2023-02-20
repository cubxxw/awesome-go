import{_ as e,o as n,c as i,d}from"./app.64dac66d.js";const s={},a=d(`<h1 id="\u6D4B\u8BD5\u6280\u5DE7-\u57FA\u51C6\u6D4B\u8BD5-benchmark" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u6280\u5DE7-\u57FA\u51C6\u6D4B\u8BD5-benchmark" aria-hidden="true">#</a> \u6D4B\u8BD5\u6280\u5DE7\uFF1A\u57FA\u51C6\u6D4B\u8BD5\uFF08Benchmark\uFF09</h1><p>\u6027\u80FD\u6D4B\u8BD5\uFF0C\u4E5F\u53EB\u57FA\u51C6\u6D4B\u8BD5\u3002</p><p>\u672C\u6587\u4EE5\u4E0B\u9762\u8FD9\u4E2A <em>\u6590\u6CE2\u90A3\u5951</em> \u51FD\u6570\u4E3A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

func Fib(n int) int {
    if n == 0 || n == 1 {
        return n
    }
    return fib(n-2) + fib(n-1)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-\u7F16\u5199\u57FA\u51C6\u6D4B\u8BD5\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u7F16\u5199\u57FA\u51C6\u6D4B\u8BD5\u51FD\u6570" aria-hidden="true">#</a> 1. \u7F16\u5199\u57FA\u51C6\u6D4B\u8BD5\u51FD\u6570</h2><p>\u7F16\u5199\u4E0B\u57FA\u51C6\u6D4B\u8BD5\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;testing&quot;

func BenchmarkFib(b *testing.B) {
    for n := 0; n &lt; b.N; n++ {
        Fib(30) // run fib(30) b.N times
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u51C6\u6D4B\u8BD5\u51FD\u6570\u7684\u7F16\u5199\uFF0C\u8981\u9075\u5FAA\u4EE5\u4E0B\u51E0\u70B9\u8981\u6C42</p><ul><li>\u57FA\u51C6\u6D4B\u8BD5\u51FD\u6570 \u7EDF\u4E00\u4EE5 Benchmark \u5F00\u5934\uFF0C\u518D\u52A0\u88AB\u6D4B\u8BD5\u7684\u539F\u51FD\u6570\u540D</li><li>\u57FA\u51C6\u6D4B\u8BD5\u51FD\u6570 \u7684\u53C2\u6570\u56FA\u5B9A\u4E3A <code>*testing.B</code></li></ul><h2 id="_2-\u8FD0\u884C\u57FA\u51C6\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-\u8FD0\u884C\u57FA\u51C6\u6D4B\u8BD5" aria-hidden="true">#</a> 2. \u8FD0\u884C\u57FA\u51C6\u6D4B\u8BD5</h2><p>\u90A3\u5982\u4F55\u6267\u884C\u57FA\u51C6\u6D4B\u8BD5\u5462\uFF1F</p><p>\u4E4B\u524D\u6267\u884C\u5355\u5143\u6D4B\u8BD5\u662F\u6267\u884C go test\uFF0C\u800C\u57FA\u51C6\u6D4B\u8BD5\u5219\u5728 go test \u7684\u57FA\u7840\u4E0A\u518D\u52A0 <code>-bench</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5FC5\u987B\u52A0 .
go test -bench .

# \u7B49\u540C\u4E8E
go test -bench github.com/iswbm/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u82E5\u60F3\u6307\u5B9A\u67D0\u4E2A\u57FA\u51C6\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u53EF\u4EE5\u5728 -bench \u540E\u52A0\u51FD\u6570\uFF0C\u51FD\u6570\u540D\u8FD8\u652F\u6301\u6B63\u5219\u5339\u914D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u53EF\u4EE5\u52A0 . \u4E5F\u53EF\u4EE5\u4E0D\u52A0
go test -bench=&quot;BenchmarkFib&quot;

# \u652F\u6301\u6B63\u5219\u5339\u914D
go test -bench=&quot;Fib$&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u6307\u5B9A <code>-cpu</code> \u53C2\u6570\uFF0C\u6765\u544A\u8BC9 go test \u8981\u7ED9\u5B83\u5206\u914D\u51E0\u4E2A cpu \u6838\u5FC3\u6765\u6267\u884C\u6D4B\u8BD5</p><ul><li><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C-cpu \u4F1A\u81EA\u52A8\u53D6 GOMAXPROCS</p></li><li><p>\u82E5\u4F60\u6307\u5B9A\u7ED9\u5B83\u4E00\u6570\u503C\uFF0C\u5219\u4EE3\u8868\u5B83\u53EF\u4EE5\u4F7F\u7528\u51E0\u4E2A cpu \u6838\u5FC3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go test -bench -cpu=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u82E5\u4F60\u6307\u5B9A\u7ED9\u5B83\u4E00\u4E2A\u5217\u8868\uFF0C\u5219\u4EE3\u8868\u5B83\u53EF\u4EE5\u4F7F\u7528\u54EA\u51E0\u4E2A cpu \u6838\u5FC3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go test -bench -cpu=2,4,6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>\u672C\u4F8B\u7684 \u6590\u6CE2\u90A3\u5951 \u51FD\u6570\u662F cpu \u8BA1\u7B97\u578B\u7684\u51FD\u6570\uFF0C\u7531\u4E8E\u5B83\u662F\u4E32\u884C\u7684\uFF0C\u56E0\u6B64\u6307\u5B9A\u591A\u5C11\u4E2A\u6838\u5FC3\u6570\u7ED3\u679C\u90FD\u5DEE\u4E0D\u591A\uFF0C\u5BF9\u4E8E\u90A3\u4E9B\u5E76\u53D1\u7684\u51FD\u6570\u5C31\u4E0D\u4E00\u6837\u5566</p><h2 id="_3-\u63A7\u5236\u6D4B\u8BD5\u7684\u65F6\u957F" tabindex="-1"><a class="header-anchor" href="#_3-\u63A7\u5236\u6D4B\u8BD5\u7684\u65F6\u957F" aria-hidden="true">#</a> 3. \u63A7\u5236\u6D4B\u8BD5\u7684\u65F6\u957F</h2><p>\u5BF9\u4E8E\u6027\u80FD\u6D4B\u8BD5\u6765\u8BF4\uFF0C\u63D0\u5347\u6D4B\u8BD5\u51C6\u786E\u5EA6\u7684\u4E00\u4E2A\u91CD\u8981\u624B\u6BB5\u5C31\u662F\u589E\u52A0\u6D4B\u8BD5\u7684\u6B21\u6570\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>-benchtime</code> \u548C <code>-count</code> \u4E24\u4E2A\u53C2\u6570\u8FBE\u5230\u8FD9\u4E2A\u76EE\u7684\u3002</p><p>benchmark \u7684\u9ED8\u8BA4\u65F6\u95F4\u662F 1s\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>-benchtime</code> \u6307\u5B9A\u4E3A 5s\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -bench=&#39;Fib$&#39; -benchtime=5s .
goos: darwin
goarch: amd64
pkg: example
BenchmarkFib-8              1033           5769818 ns/op
PASS
ok      example 6.554s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5B9E\u9645\u6267\u884C\u7684\u65F6\u95F4\u662F 6.5s\uFF0C\u6BD4 benchtime \u7684 5s \u8981\u957F\uFF0C\u6D4B\u8BD5\u7528\u4F8B\u7F16\u8BD1\u3001\u6267\u884C\u3001\u9500\u6BC1\u7B49\u662F\u9700\u8981\u65F6\u95F4\u7684\u3002</p></blockquote><p>\u5C06 <code>-benchtime</code> \u8BBE\u7F6E\u4E3A 5s\uFF0C\u7528\u4F8B\u6267\u884C\u6B21\u6570\u4E5F\u53D8\u6210\u4E86\u539F\u6765\u7684 5\u500D\uFF0C\u6BCF\u6B21\u51FD\u6570\u8C03\u7528\u65F6\u95F4\u4ECD\u4E3A 0.6s\uFF0C\u51E0\u4E4E\u6CA1\u6709\u53D8\u5316\u3002</p><p><code>-benchtime</code> \u7684\u503C\u9664\u4E86\u662F\u65F6\u95F4\u5916\uFF0C\u8FD8\u53EF\u4EE5\u662F\u5177\u4F53\u7684\u6B21\u6570\u3002\u4F8B\u5982\uFF0C\u6267\u884C 30 \u6B21\u53EF\u4EE5\u7528 <code>-benchtime=30x</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -bench=&#39;Fib$&#39; -benchtime=50x .
goos: darwin
goarch: amd64
pkg: example
BenchmarkFib-8                50           6121066 ns/op
PASS
ok      example 0.319s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528 50 \u6B21 <code>fib(30)</code>\uFF0C\u4EC5\u82B1\u8D39\u4E86 0.319s\u3002</p><p><code>-count</code> \u53C2\u6570\u53EF\u4EE5\u7528\u6765\u8BBE\u7F6E benchmark \u7684\u8F6E\u6570\u3002\u4F8B\u5982\uFF0C\u8FDB\u884C 3 \u8F6E benchmark\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -bench=&#39;Fib$&#39; -benchtime=5s -count=3 .
goos: darwin
goarch: amd64
pkg: example
BenchmarkFib-8               975           5946624 ns/op
BenchmarkFib-8              1023           5820582 ns/op
BenchmarkFib-8               961           6096816 ns/op
PASS
ok      example 19.463s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5206\u6790\u5185\u5B58\u5206\u914D\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_4-\u5206\u6790\u5185\u5B58\u5206\u914D\u60C5\u51B5" aria-hidden="true">#</a> 4. \u5206\u6790\u5185\u5B58\u5206\u914D\u60C5\u51B5</h2><p><code>-benchmem</code> \u53C2\u6570\u53EF\u4EE5\u5EA6\u91CF\u5185\u5B58\u5206\u914D\u7684\u6B21\u6570\u3002\u5185\u5B58\u5206\u914D\u6B21\u6570\u4E5F\u6027\u80FD\u4E5F\u662F\u606F\u606F\u76F8\u5173\u7684\uFF0C\u4F8B\u5982\u4E0D\u5408\u7406\u7684\u5207\u7247\u5BB9\u91CF\uFF0C\u5C06\u5BFC\u81F4\u5185\u5B58\u91CD\u65B0\u5206\u914D\uFF0C\u5E26\u6765\u4E0D\u5FC5\u8981\u7684\u5F00\u9500\u3002</p><p>\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>generateWithCap</code> \u548C <code>generate</code> \u7684\u4F5C\u7528\u662F\u4E00\u81F4\u7684\uFF0C\u751F\u6210\u4E00\u7EC4\u957F\u5EA6\u4E3A n \u7684\u968F\u673A\u5E8F\u5217\u3002\u552F\u4E00\u7684\u4E0D\u540C\u5728\u4E8E\uFF0C<code>generateWithCap</code> \u521B\u5EFA\u5207\u7247\u65F6\uFF0C\u5C06\u5207\u7247\u7684\u5BB9\u91CF(capacity)\u8BBE\u7F6E\u4E3A n\uFF0C\u8FD9\u6837\u5207\u7247\u5C31\u4F1A\u4E00\u6B21\u6027\u7533\u8BF7 n \u4E2A\u6574\u6570\u6240\u9700\u7684\u5185\u5B58\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// generate_test.go
package main

import (
    &quot;math/rand&quot;
    &quot;testing&quot;
    &quot;time&quot;
)

func generateWithCap(n int) []int {
    rand.Seed(time.Now().UnixNano())
    nums := make([]int, 0, n)
    for i := 0; i &lt; n; i++ {
        nums = append(nums, rand.Int())
    }
    return nums
}

func generate(n int) []int {
    rand.Seed(time.Now().UnixNano())
    nums := make([]int, 0)
    for i := 0; i &lt; n; i++ {
        nums = append(nums, rand.Int())
    }
    return nums
}

func BenchmarkGenerateWithCap(b *testing.B) {
    for n := 0; n &lt; b.N; n++ {
        generateWithCap(1000000)
    }
}

func BenchmarkGenerate(b *testing.B) {
    for n := 0; n &lt; b.N; n++ {
        generate(1000000)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u8BE5\u7528\u4F8B\u7684\u7ED3\u679C\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -bench=&#39;Generate&#39; .
goos: darwin
goarch: amd64
pkg: example
BenchmarkGenerateWithCap-8            44          24294582 ns/op
BenchmarkGenerate-8                   34          30342763 ns/op
PASS
ok      example 2.171s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u751F\u6210 100w \u4E2A\u6570\u5B57\u7684\u968F\u673A\u5E8F\u5217\uFF0C<code>GenerateWithCap</code> \u7684\u8017\u65F6\u6BD4 <code>Generate</code> \u5C11 20%\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>-benchmem</code> \u53C2\u6570\u770B\u5230\u5185\u5B58\u5206\u914D\u7684\u60C5\u51B5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>goos: darwin
goarch: amd64
pkg: example
BenchmarkGenerateWithCap-8  43  24335658 ns/op  8003641 B/op    1 allocs/op
BenchmarkGenerate-8         33  30403687 ns/op  45188395 B/op  40 allocs/op
PASS
ok      example 2.121s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Generate</code> \u5206\u914D\u7684\u5185\u5B58\u662F <code>GenerateWithCap</code> \u7684 6 \u500D\uFF0C\u8BBE\u7F6E\u4E86\u5207\u7247\u5BB9\u91CF\uFF0C\u5185\u5B58\u53EA\u5206\u914D\u4E00\u6B21\uFF0C\u800C\u4E0D\u8BBE\u7F6E\u5207\u7247\u5BB9\u91CF\uFF0C\u5185\u5B58\u5206\u914D\u4E86 40 \u6B21\u3002</p><h2 id="_5-\u5C01\u88C5\u6D4B\u8BD5\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_5-\u5C01\u88C5\u6D4B\u8BD5\u51FD\u6570" aria-hidden="true">#</a> 5. \u5C01\u88C5\u6D4B\u8BD5\u51FD\u6570</h2><p>\u4E0D\u540C\u7684\u51FD\u6570\u590D\u6742\u5EA6\u4E0D\u540C\uFF0CO(1)\uFF0CO(n)\uFF0CO(n^2) \u7B49\uFF0C\u5229\u7528 benchmark \u9A8C\u8BC1\u590D\u6742\u5EA6\u4E00\u4E2A\u7B80\u5355\u7684\u65B9\u5F0F\uFF0C\u662F\u6784\u9020\u4E0D\u540C\u7684\u8F93\u5165\u3002\u5BF9\u521A\u624D\u7684 benchmark \u7A0D\u4F5C\u6539\u9020\uFF0C\u4FBF\u80FD\u591F\u8FBE\u5230\u76EE\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// generate_test.go
package main

import (
    &quot;math/rand&quot;
    &quot;testing&quot;
    &quot;time&quot;
)

func generate(n int) []int {
    rand.Seed(time.Now().UnixNano())
    nums := make([]int, 0)
    for i := 0; i &lt; n; i++ {
        nums = append(nums, rand.Int())
    }
    return nums
}
func benchmarkGenerate(i int, b *testing.B) {
    for n := 0; n &lt; b.N; n++ {
        generate(i)
    }
}

func BenchmarkGenerate1000(b *testing.B)    { benchmarkGenerate(1000, b) }
func BenchmarkGenerate10000(b *testing.B)   { benchmarkGenerate(10000, b) }
func BenchmarkGenerate100000(b *testing.B)  { benchmarkGenerate(100000, b) }
func BenchmarkGenerate1000000(b *testing.B) { benchmarkGenerate(1000000, b) }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2A\u8F85\u52A9\u51FD\u6570 <code>benchmarkGenerate</code> \u5141\u8BB8\u4F20\u5165\u53C2\u6570 i\uFF0C\u5E76\u6784\u9020\u4E86 4 \u4E2A\u4E0D\u540C\u8F93\u5165\u7684 benchmark \u7528\u4F8B\u3002\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -bench .
goos: darwin
goarch: amd64
pkg: example
BenchmarkGenerate1000-8            34048             34643 ns/op
BenchmarkGenerate10000-8            4070            295642 ns/op
BenchmarkGenerate100000-8            403           3230415 ns/op
BenchmarkGenerate1000000-8            39          32083701 ns/op
PASS
ok      example 6.597s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u6D4B\u8BD5\u7ED3\u679C\u53EF\u4EE5\u53D1\u73B0\uFF0C\u8F93\u5165\u53D8\u4E3A\u539F\u6765\u7684 10 \u500D\uFF0C\u51FD\u6570\u6BCF\u6B21\u8C03\u7528\u7684\u65F6\u957F\u4E5F\u5DEE\u4E0D\u591A\u662F\u539F\u6765\u7684 10 \u500D\uFF0C\u8FD9\u8BF4\u660E\u590D\u6742\u5EA6\u662F\u7EBF\u6027\u7684\u3002</p><h2 id="_6-\u4F18\u5316\u57FA\u51C6\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_6-\u4F18\u5316\u57FA\u51C6\u6D4B\u8BD5" aria-hidden="true">#</a> 6. \u4F18\u5316\u57FA\u51C6\u6D4B\u8BD5</h2><h3 id="_3-1-resettimer" tabindex="-1"><a class="header-anchor" href="#_3-1-resettimer" aria-hidden="true">#</a> 3.1 ResetTimer</h3><p>\u5982\u679C\u5728 benchmark \u5F00\u59CB\u524D\uFF0C\u9700\u8981\u4E00\u4E9B\u51C6\u5907\u5DE5\u4F5C\uFF0C\u5982\u679C\u51C6\u5907\u5DE5\u4F5C\u6BD4\u8F83\u8017\u65F6\uFF0C\u5219\u9700\u8981\u5C06\u8FD9\u90E8\u5206\u4EE3\u7801\u7684\u8017\u65F6\u5FFD\u7565\u6389\u3002\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func BenchmarkFib(b *testing.B) {
    time.Sleep(time.Second * 3) // \u6A21\u62DF\u8017\u65F6\u51C6\u5907\u4EFB\u52A1
    for n := 0; n &lt; b.N; n++ {
        fib(30) // run fib(30) b.N times
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -bench=&#39;Fib$&#39; -benchtime=50x .
goos: darwin
goarch: amd64
pkg: example
BenchmarkFib-8                50          65912552 ns/op
PASS
ok      example 6.319s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>50\u6B21\u8C03\u7528\uFF0C\u6BCF\u6B21\u8C03\u7528\u7EA6 0.66s\uFF0C\u662F\u4E4B\u524D\u7684 0.06s \u7684 11 \u500D\u3002\u7A76\u5176\u539F\u56E0\uFF0C\u53D7\u5230\u4E86\u8017\u65F6\u51C6\u5907\u4EFB\u52A1\u7684\u5E72\u6270\u3002\u6211\u4EEC\u9700\u8981\u7528 <code>ResetTimer</code> \u5C4F\u853D\u6389\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func BenchmarkFib(b *testing.B) {
    time.Sleep(time.Second * 3) // \u6A21\u62DF\u8017\u65F6\u51C6\u5907\u4EFB\u52A1
    b.ResetTimer() // \u91CD\u7F6E\u5B9A\u65F6\u5668
    for n := 0; n &lt; b.N; n++ {
        fib(30) // run fib(30) b.N times
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\u6062\u590D\u6B63\u5E38\uFF0C\u6BCF\u6B21\u8C03\u7528\u7EA6 0.06s\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -bench=&#39;Fib$&#39; -benchtime=50x .
goos: darwin
goarch: amd64
pkg: example
BenchmarkFib-8                50           6187485 ns/op
PASS
ok      example 6.330s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-stoptimer-starttimer" tabindex="-1"><a class="header-anchor" href="#_3-2-stoptimer-starttimer" aria-hidden="true">#</a> 3.2 StopTimer &amp; StartTimer</h3><p>\u8FD8\u6709\u4E00\u79CD\u60C5\u51B5\uFF0C\u6BCF\u6B21\u51FD\u6570\u8C03\u7528\u524D\u540E\u9700\u8981\u4E00\u4E9B\u51C6\u5907\u5DE5\u4F5C\u548C\u6E05\u7406\u5DE5\u4F5C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>StopTimer</code> \u6682\u505C\u8BA1\u65F6\u4EE5\u53CA\u4F7F\u7528 <code>StartTimer</code> \u5F00\u59CB\u8BA1\u65F6\u3002</p><p>\u4F8B\u5982\uFF0C\u5982\u679C\u6D4B\u8BD5\u4E00\u4E2A\u5192\u6CE1\u51FD\u6570\u7684\u6027\u80FD\uFF0C\u6BCF\u6B21\u8C03\u7528\u5192\u6CE1\u51FD\u6570\u524D\uFF0C\u9700\u8981\u968F\u673A\u751F\u6210\u4E00\u4E2A\u6570\u5B57\u5E8F\u5217\uFF0C\u8FD9\u662F\u975E\u5E38\u8017\u65F6\u7684\u64CD\u4F5C\uFF0C\u8FD9\u79CD\u573A\u666F\u4E0B\uFF0C\u5C31\u9700\u8981\u4F7F\u7528 <code>StopTimer</code> \u548C <code>StartTimer</code> \u907F\u514D\u5C06\u8FD9\u90E8\u5206\u65F6\u95F4\u8BA1\u7B97\u5728\u5185\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// sort_test.go
package main

import (
    &quot;math/rand&quot;
    &quot;testing&quot;
    &quot;time&quot;
)

func generateWithCap(n int) []int {
    rand.Seed(time.Now().UnixNano())
    nums := make([]int, 0, n)
    for i := 0; i &lt; n; i++ {
        nums = append(nums, rand.Int())
    }
    return nums
}

func bubbleSort(nums []int) {
    for i := 0; i &lt; len(nums); i++ {
        for j := 1; j &lt; len(nums)-i; j++ {
            if nums[j] &lt; nums[j-1] {
                nums[j], nums[j-1] = nums[j-1], nums[j]
            }
        }
    }
}

func BenchmarkBubbleSort(b *testing.B) {
    for n := 0; n &lt; b.N; n++ {
        b.StopTimer()
        nums := generateWithCap(10000)
        b.StartTimer()
        bubbleSort(nums)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u8BE5\u7528\u4F8B\uFF0C\u6BCF\u6B21\u6392\u5E8F\u8017\u65F6\u7EA6 0.1s\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -bench=&#39;Sort$&#39; .
goos: darwin
goarch: amd64
pkg: example
BenchmarkBubbleSort-8                  9         113280509 ns/op
PASS
ok      example 1.146s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62),l=[a];function r(c,v){return n(),i("div",null,l)}const m=e(s,[["render",r],["__file","100.html.vue"]]);export{m as default};
