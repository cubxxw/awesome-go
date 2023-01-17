import{_ as l,r as i,o as a,c as r,a as e,b as t,w as o,d as c,e as s}from"./app.6b851cec.js";const u={},v=c(`<h1 id="go-test-\u5DE5\u5177\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#go-test-\u5DE5\u5177\u8BE6\u89E3" aria-hidden="true">#</a> go test \u5DE5\u5177\u8BE6\u89E3</h1><p>\u5728\u5B66\u4E60\u5982\u4F55\u7F16\u5199\u6D4B\u8BD5\u4EE3\u7801\u4E4B\u524D\uFF0C\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E0BGo \u63D0\u4F9B\u7684\u6D4B\u8BD5\u5DE5\u5177 \uFF1Ago test</p><p>go test \u672C\u8EAB\u53EF\u4EE5\u643A\u5E26\u5F88\u591A\u7684\u53C2\u6570\uFF0C\u719F\u6089\u8FD9\u4E9B\u53C2\u6570\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u7684\u6D4B\u8BD5\u8FC7\u7A0B\u66F4\u52A0\u65B9\u4FBF\u3002</p><p>\u4E0B\u9762\u5C31\u6839\u636E\u573A\u666F\u6765\u89E3\u91CA\u4E00\u4E0B\u5E38\u7528\u7684\u51E0\u4E2A\u53C2\u6570\uFF1A</p><p>1\u3001\u8FD0\u884C\u6574\u4E2A\u9879\u76EE\u7684\u6D4B\u8BD5\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test
PASS
ok      _/home/wangbm/golang/math   0.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u53EA\u8FD0\u884C\u67D0\u4E2A\u6D4B\u8BD5\u6587\u4EF6\uFF08 math_test.go\uFF0C math.go \u662F\u4E00\u5BF9\uFF0C\u7F3A\u4E00\u4E0D\u53EF\uFF0C\u524D\u540E\u987A\u5E8F\u53EF\u5BF9\u8C03\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test math_test.go math.go
ok      command-line-arguments  0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u52A0 <code>-v</code> \u67E5\u770B\u8BE6\u7EC6\u7684\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test math_test.go math.go
=== RUN   TestAdd
    TestAdd: main_test.go:22: the result is ok
    TestAdd: main_test.go:22: the result is ok
    TestAdd: main_test.go:22: the result is ok
    TestAdd: main_test.go:22: the result is ok
    TestAdd: main_test.go:22: the result is ok
--- PASS: TestAdd (0.00s)
PASS
ok      command-line-arguments  0.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4\u3001\u53EA\u6D4B\u8BD5\u67D0\u4E2A\u51FD\u6570\uFF0C-run \u652F\u6301\u6B63\u5219\uFF0C\u5982\u4E0B\u4F8B\u5B50\u4E2D TestAdd\uFF0C\u5982\u679C\u8FD8\u6709\u4E00\u4E2A\u6D4B\u8BD5\u51FD\u6570\u4E3A TestAdd02\uFF0C\u90A3\u4E48\u5B83\u4E5F\u4F1A\u88AB\u8FD0\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -v -run=&quot;TestAdd&quot;
=== RUN   TestAdd
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
    TestAdd: math_test.go:22: the result is ok
--- PASS: TestAdd (0.00s)
PASS
ok      _/home/wangbm/golang/math   0.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5\u3001\u751F\u6210 test \u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1A\u52A0 <code>-c</code> \u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -v -run=&quot;TestAdd&quot; -c
$
$ ls -l
total 3208
-rw-r--r-- 1 root root      95 May 25 20:56 math.go
-rwxr-xr-x 1 root root 3272760 May 25 21:00 math.test
-rw-r--r-- 1 root root     525 May 25 20:56 math_test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6\u3001\u6267\u884C\u8FD9\u4E2A test \u6D4B\u8BD5\u6587\u4EF6\uFF1A\u52A0 <code>-o</code> \u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go test -v -o math.test
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7\u3001\u53EA\u6D4B\u8BD5\u5B89\u88C5/\u91CD\u65B0\u5B89\u88C5 \u4F9D\u8D56\u5305\uFF0C\u800C\u4E0D\u8FD0\u884C\u4EE3\u7801\uFF1A\u52A0 <code>-i</code> \u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8FD9\u91CC\u6CA1\u6709\u8F93\u51FA
$ go test -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="90.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="92.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,20),m=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),h={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),_=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),p={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},x=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function A(k,T){const d=i("RouterLink"),n=i("ExternalLinkIcon");return a(),r("div",null,[v,e("ul",null,[e("li",null,[e("p",null,[t(d,{to:"/Gomd_super/"},{default:o(()=>[m]),_:1})])]),e("li",null,[e("p",null,[e("a",h,[g,t(n)]),b])]),e("li",null,[e("p",null,[_,e("a",p,[x,t(n)])])])])])}const S=l(u,[["render",A],["__file","91.html.vue"]]);export{S as default};
