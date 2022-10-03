import{_ as a,r as d,o as r,c as o,a as e,b as n,w as t,e as c,d as i}from"./app.814033e1.js";const v={},u=c(`<h1 id="\u8C03\u8BD5\u6280\u5DE7-\u4F7F\u7528-gdb-\u8C03\u8BD5-go-\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5\u6280\u5DE7-\u4F7F\u7528-gdb-\u8C03\u8BD5-go-\u7A0B\u5E8F" aria-hidden="true">#</a> \u8C03\u8BD5\u6280\u5DE7\uFF1A\u4F7F\u7528 GDB \u8C03\u8BD5 Go \u7A0B\u5E8F</h1><p>\u505A\u4E3A\u65B0\u624B\uFF0C\u719F\u7EC3\u638C\u63E1\u4E00\u4E2A\u597D\u7684\u8C03\u8BD5\u5DE5\u5177\uFF0C\u5BF9\u4E8E\u6211\u4EEC\u5B66\u4E60\u8BED\u8A00\u6216\u8005\u6392\u67E5\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u975E\u5E38\u6709\u5E2E\u52A9\u3002</p><p>\u4F60\u5982\u679C\u4F7F\u7528 VS Code \u6216\u8005 Goland \uFF0C\u53EF\u4EE5\u76F4\u63A5\u4E0A\u624B\uFF0C\u6211\u5C31\u4E0D\u518D\u5199\u8FD9\u65B9\u9762\u7684\u6587\u7AE0\u4E86\u3002</p><p>\u5176\u5B9E\u76F8\u6BD4\u6709\u7528\u6237\u754C\u9762\u7684 IDE \u8C03\u8BD5\u5DE5\u5177\uFF0C\u6211\u66F4\u559C\u6B22\u7B80\u5355\u76F4\u63A5\u7684\u547D\u4EE4\u884C\u8C03\u8BD5\uFF0C\u539F\u56E0\u6709\u4E09\u70B9\uFF1A</p><ol><li>\u901F\u5EA6\u5FEB\uFF0C\u4E2A\u4EBA\u611F\u89C9\u5728 Windows \u4E0B\u901F\u5EA6\u5DE8\u6162</li><li>\u4F9D\u8D56\u5C11\uFF0C\u5728 Linux \u670D\u52A1\u5668\u4E0A \u4E5F\u80FD\u8F7B\u677E\u8C03\u8BD5</li><li>\u6307\u4EE4\u7B80\u5355\uFF0C\u6211\u4E60\u60EF\u53EA\u4F7F\u7528\u5FEB\u6377\u952E\u5C31\u80FD\u64CD\u4F5C</li></ol><p>\u5982\u679C\u4F60\u6709\u548C\u6211\u4E00\u6837\u7684\u611F\u53D7\u548C\u4E60\u60EF\uFF0C\u53EF\u4EE5\u770B\u4E0B\u4ECA\u5929\u7684\u6587\u7AE0\uFF0C\u4ECB\u7ECD\u7684\u662F GDB \u8C03\u8BD5\u5DE5\u5177\u3002</p><h2 id="_1-\u4E0B\u8F7D\u5B89\u88C5-go" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u8F7D\u5B89\u88C5-go" aria-hidden="true">#</a> 1. \u4E0B\u8F7D\u5B89\u88C5 Go</h2><p>\u5728 Linux \u4E0A\u8FDB\u884C\u8C03\u8BD5\uFF0C\u90A3\u54B1\u6240\u4EE5\u5F97\u5148\u5B89\u88C5 Go \uFF0C\u7531\u4E8E\u7B2C\u4E00\u8282\u91CC\u53EA\u8BB2\u4E86 Windows \u7684\u4E0B\u8F7D\u5B89\u88C5\uFF0C\u5E76\u6CA1\u6709\u8BB2\u5230\u5728 Linux \u4E0A\u5982\u4F55\u5B89\u88C5\u3002\u6240\u4EE5\u8FD9\u91CC\u8981\u5148\u8BB2\u4E00\u4E0B\uFF0C\u5DF2\u7ECF\u5B89\u88C5\u8FC7\u4E86\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8FC7\u3002</p><p>\u9996\u5148\u5728 go \u4E0B\u8F7D\u9875\u9762\u4E0A\uFF08https://golang.org/dl/\uFF09\uFF0C\u67E5\u770B\u5E76\u590D\u5236\u6E90\u7801\u5305\u7684\u7684\u4E0B\u8F7D\u5730\u5740</p><p><img src="https://s2.loli.net/2022/04/11/OqsAFltmHMdKwIE.png" alt="http://image.iswbm.com/20200428180632.png"></p><p>\u767B\u9646 linux \u673A\u5668 \uFF0C\u4F7F\u7528 wget \u4E0B\u8F7D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ wget https://dl.google.com/go/go1.14.2.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/11/PvYhDHgkuNtITc1.png" alt="http://image.iswbm.com/20200428180713.png"></p><p>\u5C06\u4E0B\u8F7D\u7684\u6E90\u7801\u5305\u89E3\u538B\u5230 <code>/usr/local</code> \u76EE\u5F55\u4E0B\uFF0C\u5E76\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# tar -C /usr/local -xzf go1.14.2.linux-amd64.tar.gz
[root@localhost ~]#
[root@localhost ~]# export PATH=$PATH:/usr/local/go/bin
[root@localhost ~]# which go
/usr/local/go/bin/go
[root@localhost ~]#
[root@localhost ~]# go version
go version go1.14.2 linux/amd64
[root@localhost ~]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5F00\u59CB\u8FDB\u884C\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-\u5F00\u59CB\u8FDB\u884C\u8C03\u8BD5" aria-hidden="true">#</a> 2. \u5F00\u59CB\u8FDB\u884C\u8C03\u8BD5</h2><p>\u8C03\u8BD5\u4F7F\u7528\u7684\u662F GDB \uFF08\u597D\u50CF\u8981\u6C42\u7248\u672C 7.1 + \uFF09\uFF0C\u4F7F\u7528\u524D\uFF0C\u8BF7\u5148\u786E\u4FDD\u4F60\u7684\u673A\u5668\u4E0A\u5DF2\u7ECF\u5B89\u88C5 GDB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost code]# which gdb
/usr/bin/gdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51C6\u5907\u5C31\u7EEA\u540E\uFF0C\u5148\u5728\u76EE\u5F55\u4E0B\u5199\u4E00\u4E2A\u6D4B\u8BD5\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main(){
  msg := &quot;hello, world&quot;
  fmt.Println(msg)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6267\u884C \u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u7F16\u8BD1\uFF0C\u91CC\u9762\u6709\u597D\u591A\u4E2A\u53C2\u6570\uFF0C\u6709\u7591\u95EE\u7684\u53EF\u4EE5\u81EA\u884C\u641C\u7D22\u5F15\u64CE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5173\u95ED\u5185\u8054\u4F18\u5316\uFF0C\u65B9\u4FBF\u8C03\u8BD5
$ go build -gcflags &quot;-N -l&quot; demo.go

# \u53D1\u5E03\u7248\u672C\u5220\u9664\u8C03\u8BD5\u7B26\u53F7
go build -ldflags \u201C-s -w\u201D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u4F7F\u7528 GDB \u547D\u4EE4\u8FDB\u5165\u8C03\u8BD5\u754C\u9762</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5982\u679C\u4F60\u559C\u6B22\u8FD9\u79CD\u754C\u9762\u7684\u8BDD\uFF0C\u7528\u8FD9\u6761\u547D\u4EE4
$ gdb -tui demo

# \u5982\u679C\u4F60\u8DDF\u6211\u4E00\u6837\u4E0D\u559C\u6B22\u4E0D\u4E60\u60EF\u7528\u754C\u9762\uFF0C\u5C31\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4
$ gdb demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B8C\u6574\u64CD\u4F5C\u5982\u4E0B\uFF1A</p><p><img src="http://image.iswbm.com/20200428181902.png" alt="http://image.iswbm.com/20200428181902.png"></p><p>\u8FDB\u5165 GDB \u8C03\u8BD5\u754C\u9762\u540E\uFF0C\u5E76\u4E0D\u662F\u7ACB\u5373\u53EF\u7528\uFF0C\u4F60\u5148\u9700\u8981\u56DE\u8F66\uFF0C\u7136\u540E\u518D\u4F60\u6572\u5165\u51E0\u884C\u547D\u4EE4\uFF0C\u8C03\u8BD5\u7A97\u53E3\u5C31\u4F1A\u51FA\u73B0\u4EE3\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(gdb) b main.main   # \u5728 main \u5305\u91CC\u7684 main \u51FD\u6570 \u52A0\u65AD\u70B9
Breakpoint 1 at 0x4915c0: file /home/wangbm/code/demo.go, line 5.
(gdb) run  # \u6267\u884C\u8FDB\u7A0B
Starting program: /home/wangbm/code/demo
Breakpoint 1, main.main () at /home/wangbm/code/demo.go:5
(gdb)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/11/h9JsItBSpnkl1aZ.png" alt="http://image.iswbm.com/20200428182620.png"></p><h2 id="_3-\u8BE6\u89E3\u8C03\u8BD5\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-\u8BE6\u89E3\u8C03\u8BD5\u6307\u4EE4" aria-hidden="true">#</a> 3. \u8BE6\u89E3\u8C03\u8BD5\u6307\u4EE4</h2><p>\u8981\u719F\u7EC3\u4F7F\u7528 GDB \uFF0C\u4F60\u5F97\u719F\u6089\u7684\u638C\u63E1\u5B83\u7684\u6307\u4EE4\uFF0C\u8FD9\u91CC\u5217\u4E3E\u4E00\u4E0B</p><ul><li><code>r</code>\uFF1Arun\uFF0C\u6267\u884C\u7A0B\u5E8F</li><li><code>n</code>\uFF1Anext\uFF0C\u4E0B\u4E00\u6B65\uFF0C\u4E0D\u8FDB\u5165\u51FD\u6570</li><li><code>s</code>\uFF1Astep\uFF0C\u4E0B\u4E00\u6B65\uFF0C\u4F1A\u8FDB\u5165\u51FD\u6570</li><li><code>b</code>\uFF1Abreakponit\uFF0C\u8BBE\u7F6E\u65AD\u70B9</li><li><code>l</code>\uFF1Alist\uFF0C\u67E5\u770B\u6E90\u7801</li><li><code>c</code>\uFF1Acontinue\uFF0C\u7EE7\u7EED\u6267\u884C\u5230\u4E0B\u4E00\u65AD\u70B9</li><li><code>bt</code>\uFF1Abacktrace\uFF0C\u67E5\u770B\u5F53\u524D\u8C03\u7528\u6808</li><li><code>p</code>\uFF1Aprint\uFF0C\u6253\u5370\u67E5\u770B\u53D8\u91CF</li><li><code>q</code>\uFF1Aquit\uFF0C\u9000\u51FA GDB</li><li><code>whatis</code>\uFF1A\u67E5\u770B\u5BF9\u8C61\u7C7B\u578B</li><li><code>info breakpoints</code>\uFF1A\u67E5\u770B\u6240\u6709\u7684\u65AD\u70B9</li><li><code>info locals</code>\uFF1A\u67E5\u770B\u5C40\u90E8\u53D8\u91CF</li><li><code>info args</code>\uFF1A\u67E5\u770B\u51FD\u6570\u7684\u53C2\u6570\u503C\u53CA\u8981\u8FD4\u56DE\u7684\u53D8\u91CF\u503C</li><li><code>info frame</code>\uFF1A\u5806\u6808\u5E27\u4FE1\u606F</li><li><code>info goroutines</code>\uFF1A\u67E5\u770B goroutines \u4FE1\u606F\u3002\u5728\u4F7F\u7528\u524D \uFF0C\u9700\u8981\u6CE8\u610F\u5148\u6267\u884C source /usr/local/go/src/runtime/runtime-gdb.py</li><li><code>goroutine 1 bt</code>\uFF1A\u67E5\u770B\u6307\u5B9A\u5E8F\u53F7\u7684 goroutine \u8C03\u7528\u5806\u6808</li><li>\u56DE\u8F66\uFF1A\u91CD\u590D\u6267\u884C\u4E0A\u4E00\u6B21\u64CD\u4F5C</li></ul><p>\u5176\u4E2D\u6709\u51E0\u4E2A\u6307\u4EE4\u7684\u4F7F\u7528\u6BD4\u8F83\u7075\u6D3B</p><p>\u6BD4\u5982 l - list\uFF0C\u67E5\u770B\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u770B\u6307\u5B9A\u884C\u6570\u4E0A\u4E0B5\u884C
(gdb) l 8

# \u67E5\u770B\u6307\u5B9A\u8303\u56F4\u7684\u884C\u6570
(gdb) l 5:8

# \u67E5\u770B\u6307\u5B9A\u6587\u4EF6\u7684\u884C\u6570\u4E0A\u4E0B5\u884C
l demo.go:8

# \u53EF\u4EE5\u67E5\u770B\u51FD\u6570\uFF0C\u8BB0\u5F97\u52A0\u5305\u540D
l main.main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u628A\u4E0A\u9762\u7684 <code>l</code> \u6362\u6210 <code>b</code> \uFF0C\u5927\u591A\u6570\u4E5F\u540C\u6837\u9002\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5728\u6307\u5B9A\u884C\u6253\u65AD\u70B9
(gdb) b 8


# \u5728\u6307\u5B9A\u6307\u5B9A\u6587\u4EF6\u7684\u884C\u6253\u65AD\u70B9
b demo.go:8

# \u5728\u6307\u5B9A\u51FD\u6570\u6253\u65AD\u70B9\uFF0C\u8BB0\u5F97\u52A0\u5305\u540D
b main.main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u6709 p - print\uFF0C\u6253\u5370\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u770B\u53D8\u91CF
(gdb) p var

# \u67E5\u770B\u5BF9\u8C61\u957F\u5EA6\u6216\u5BB9\u91CF
(gdb) p $len(var)
(gdb) p $cap(var)

# \u67E5\u770B\u5BF9\u8C61\u7684\u52A8\u6001\u7C7B\u578B
(gdb) p $dtype(var)
(gdb) iface var

# \u4E3E\u4F8B\u5982\u4E0B
(gdb) p i
$4 = {str = &quot;cbb&quot;}
(gdb) whatis i
type = regexp.input
(gdb) p $dtype(i)
$26 = (struct regexp.inputBytes *) 0xf8400b4930
(gdb) iface i
regexp.input: struct regexp.inputBytes *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u5C31\u662F\u5173\u4E8E GDB \u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u975E\u5E38\u7B80\u5355\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u624B\u52A8\u6572\u4E0B\u4F53\u9A8C\u4E00\u4E0B\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="92.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="94.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,42),m=i("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),b={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),p=i(")"),h=i("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),x={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},_=i("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function f(w,k){const s=d("RouterLink"),l=d("ExternalLinkIcon");return r(),o("div",null,[u,e("ul",null,[e("li",null,[e("p",null,[n(s,{to:"/Gomd_super/"},{default:t(()=>[m]),_:1})])]),e("li",null,[e("p",null,[e("a",b,[g,n(l)]),p])]),e("li",null,[e("p",null,[h,e("a",x,[_,n(l)])])])])])}const G=a(v,[["render",f],["__file","93.html.vue"]]);export{G as default};
