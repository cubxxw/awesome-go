import{_ as l,r as d,o as r,c as t,a as e,b as i,w as u,d as c,e as n}from"./app.6b851cec.js";const v={},m=c(`<h1 id="\u7406\u6E05-go-\u4E2D\u6666\u6DA9\u96BE\u61C2\u7684\u5BFB\u5740\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7406\u6E05-go-\u4E2D\u6666\u6DA9\u96BE\u61C2\u7684\u5BFB\u5740\u95EE\u9898" aria-hidden="true">#</a> \u7406\u6E05 Go \u4E2D\u6666\u6DA9\u96BE\u61C2\u7684\u5BFB\u5740\u95EE\u9898</h1><h2 id="\u4EC0\u4E48\u53EB\u53EF\u5BFB\u5740" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u53EB\u53EF\u5BFB\u5740" aria-hidden="true">#</a> \u4EC0\u4E48\u53EB\u53EF\u5BFB\u5740\uFF1F</h2><p>\u53EF\u76F4\u63A5\u4F7F\u7528 <code>&amp;</code> \u64CD\u4F5C\u7B26\u53D6\u5730\u5740\u7684\u5BF9\u8C61\uFF0C\u5C31\u662F\u53EF\u5BFB\u5740\u7684\uFF08Addressable\uFF09\u3002\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func main() {
    name := &quot;iswbm&quot;
    fmt.Println(&amp;name)
    // output: 0xc000010200
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7A0B\u5E8F\u8FD0\u884C\u4E0D\u4F1A\u62A5\u9519\uFF0C\u8BF4\u660E name \u8FD9\u4E2A\u53D8\u91CF\u662F\u53EF\u5BFB\u5740\u7684\u3002</p><p>\u4F46\u4E0D\u80FD\u8BF4 <code>&quot;iswbm&quot;</code> \u8FD9\u4E2A\u5B57\u7B26\u4E32\u662F\u53EF\u5BFB\u5740\u7684\u3002</p><p><code>&quot;iswbm&quot;</code> \u662F\u5B57\u7B26\u4E32\uFF0C\u5B57\u7B26\u4E32\u90FD\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u662F\u4E0D\u53EF\u5BFB\u5740\u7684\uFF0C\u540E\u9762\u4F1A\u4ECB\u7ECD\u5230\u3002</p><p>\u5728\u5F00\u59CB\u9010\u4E2A\u4ECB\u7ECD\u4E4B\u524D\uFF0C\u5148\u8BF4\u4E00\u4E0B\u7ED3\u8BBA</p><ul><li>\u6307\u9488\u53EF\u4EE5\u5BFB\u5740\uFF1A<code>&amp;Profile{}</code></li><li>\u53D8\u91CF\u53EF\u4EE5\u5BFB\u5740\uFF1A<code>name := Profile{}</code></li><li>\u5B57\u9762\u91CF\u901A\u901A\u4E0D\u80FD\u5BFB\u5740\uFF1A<code>Profile{}</code></li></ul><h2 id="\u54EA\u4E9B\u662F\u53EF\u4EE5\u5BFB\u5740\u7684" tabindex="-1"><a class="header-anchor" href="#\u54EA\u4E9B\u662F\u53EF\u4EE5\u5BFB\u5740\u7684" aria-hidden="true">#</a> \u54EA\u4E9B\u662F\u53EF\u4EE5\u5BFB\u5740\u7684\uFF1F</h2><h3 id="\u53D8\u91CF-x" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF-x" aria-hidden="true">#</a> \u53D8\u91CF\uFF1A&amp;x</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func main() {
    name := &quot;iswbm&quot;
    fmt.Println(&amp;name)
    // output: 0xc000010200
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6307\u9488-x" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488-x" aria-hidden="true">#</a> \u6307\u9488\uFF1A&amp;*x</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Profile struct {
    Name string
}

func main() {
    fmt.Println(unsafe.Pointer(&amp;Profile{Name: &quot;iswbm&quot;}))
    // output: 0xc000108040
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4\u5143\u7D20\u7D22\u5F15-a-0" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5143\u7D20\u7D22\u5F15-a-0" aria-hidden="true">#</a> \u6570\u7EC4\u5143\u7D20\u7D22\u5F15: &amp;a[0]</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func main() {
    s := [...]int{1,2,3}
    fmt.Println(&amp;s[0])
    // output: xc0000b4010
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247" aria-hidden="true">#</a> \u5207\u7247</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func main() {
    fmt.Println([]int{1, 2, 3}[1:])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5207\u7247\u5143\u7D20\u7D22\u5F15-s-1" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247\u5143\u7D20\u7D22\u5F15-s-1" aria-hidden="true">#</a> \u5207\u7247\u5143\u7D20\u7D22\u5F15\uFF1A&amp;s[1]</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func main() {
    s := make([]int , 2, 2)
    fmt.Println(&amp;s[0])
    // output: xc0000b4010
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u5408\u5B57\u9762\u91CF-struct-x-type-value" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5B57\u9762\u91CF-struct-x-type-value" aria-hidden="true">#</a> \u7EC4\u5408\u5B57\u9762\u91CF: &amp;struct{X type}{value}</h3><p>\u6240\u6709\u7684\u7EC4\u5408\u5B57\u9762\u91CF\u90FD\u662F\u4E0D\u53EF\u5BFB\u5740\u7684\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Profile struct {
    Name string
}

func new() Profile {
    return Profile{Name: &quot;iswbm&quot;}
}

func main() {
    fmt.Println(&amp;new())
    // cannot take the address of new()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u4E0A\u9762\u5199\u6CD5\u4E0E\u8FD9\u4E2A\u5199\u6CD5\u7684\u533A\u522B\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u5199\u6CD5\u4EE3\u8868\u4E0D\u540C\u610F\u601D\uFF0C\u5176\u4E2D\u7684 <code>&amp;</code> \u5E76\u4E0D\u662F\u53D6\u5730\u5740\u7684\u64CD\u4F5C\uFF0C\u800C\u4EE3\u8868\u5B9E\u4F8B\u5316\u4E00\u4E2A\u7ED3\u6784\u4F53\u7684\u6307\u9488\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Profile struct {
    Name string
}

func main() {
    fmt.Println(&amp;Profile{Name: &quot;iswbm&quot;}) // ok
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136\u7EC4\u5408\u5B57\u9762\u91CF\u662F\u4E0D\u53EF\u5BFB\u5740\u7684\uFF0C\u4F46\u5374\u53EF\u4EE5\u5BF9\u7EC4\u5408\u5B57\u9762\u91CF\u7684\u5B57\u6BB5\u5C5E\u6027\u8FDB\u884C\u5BFB\u5740\uFF08\u76F4\u63A5\u8BBF\u95EE\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Profile struct {
    Name string
}

func new() Profile {
    return Profile{Name: &quot;iswbm&quot;}
}

func main() {
    fmt.Println(new().Name)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u54EA\u4E9B\u662F\u4E0D\u53EF\u4EE5\u5BFB\u5740\u7684" tabindex="-1"><a class="header-anchor" href="#\u54EA\u4E9B\u662F\u4E0D\u53EF\u4EE5\u5BFB\u5740\u7684" aria-hidden="true">#</a> \u54EA\u4E9B\u662F\u4E0D\u53EF\u4EE5\u5BFB\u5740\u7684\uFF1F</h2><h3 id="\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a> \u5E38\u91CF</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &quot;fmt&quot;

const VERSION  = &quot;1.0&quot;

func main() {
    fmt.Println(&amp;VERSION)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func getStr() string {
    return &quot;iswbm&quot;
}
func main() {
    fmt.Println(&amp;getStr())
    // cannot take the address of getStr()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570\u6216\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u6216\u65B9\u6CD5" aria-hidden="true">#</a> \u51FD\u6570\u6216\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func getStr() string {
    return &quot;iswbm&quot;
}
func main() {
    fmt.Println(&amp;getStr)
    // cannot take the address of getStr
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u57FA\u672C\u7C7B\u578B\u5B57\u9762\u91CF" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B\u5B57\u9762\u91CF" aria-hidden="true">#</a> \u57FA\u672C\u7C7B\u578B\u5B57\u9762\u91CF</h3><p>\u5B57\u9762\u91CF\u5206\uFF1A<strong>\u57FA\u672C\u7C7B\u578B\u5B57\u9762\u91CF</strong> \u548C <strong>\u590D\u5408\u578B\u5B57\u9762\u91CF</strong>\u3002</p><p>\u57FA\u672C\u7C7B\u578B\u5B57\u9762\u91CF\uFF0C\u662F\u4E00\u4E2A\u503C\u7684\u6587\u672C\u8868\u793A\uFF0C\u90FD\u662F\u4E0D\u5E94\u8BE5\u4E5F\u662F\u4E0D\u53EF\u4EE5\u88AB\u5BFB\u5740\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func getInt() int {
    return 1024
}

func main() {
    fmt.Println(&amp;getInt())
    // cannot take the address of getInt()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-\u4E2D\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#map-\u4E2D\u7684\u5143\u7D20" aria-hidden="true">#</a> map \u4E2D\u7684\u5143\u7D20</h3><p>\u5B57\u5178\u6BD4\u8F83\u7279\u6B8A\uFF0C\u53EF\u4EE5\u4ECE\u4E24\u4E2A\u89D2\u5EA6\u6765\u53CD\u5411\u63A8\u5BFC\uFF0C\u5047\u8BBE\u5B57\u5178\u7684\u5143\u7D20\u662F\u53EF\u5BFB\u5740\u7684\uFF0C\u4F1A\u51FA\u73B0 \u4EC0\u4E48\u95EE\u9898\uFF1F</p><ol><li>\u5982\u679C\u5B57\u5178\u7684\u5143\u7D20\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE\u96F6\u503C\uFF0C\u800C\u96F6\u503C\u662F\u4E0D\u53EF\u53D8\u5BF9\u8C61\uFF0C\u5982\u679C\u80FD\u5BFB\u5740\u95EE\u9898\u5C31\u5927\u4E86\u3002</li><li>\u800C\u5982\u679C\u5B57\u5178\u7684\u5143\u7D20\u5B58\u5728\uFF0C\u8003\u8651\u5230 Go \u4E2D map \u5B9E\u73B0\u4E2D\u5143\u7D20\u7684\u5730\u5740\u662F\u53D8\u5316\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u5BFB\u5740\u7684\u7ED3\u679C\u4E5F\u662F\u65E0\u610F\u4E49\u7684\u3002</li></ol><p>\u57FA\u4E8E\u8FD9\u4E24\u70B9\uFF0CMap \u4E2D\u7684\u5143\u7D20\u4E0D\u53EF\u5BFB\u5740\uFF0C\u7B26\u5408\u5E38\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func main() {
    p := map[string]string {
        &quot;name&quot;: &quot;iswbm&quot;,
    }

    fmt.Println(&amp;p[&quot;name&quot;])
    // cannot take the address of p[&quot;name&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u641E\u61C2\u4E86\u8FD9\u70B9\uFF0C\u4F60\u5E94\u8BE5\u80FD\u591F\u7406\u89E3\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u4E3A\u4EC0\u4E48\u4F1A\u62A5\u9519\u5566~</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

type Person struct {
    Name  string
    Email string
}

func main() {
    m := map[int]Person{
        1:Person{&quot;Andy&quot;, &quot;1137291867@qq.com&quot;},
        2:Person{&quot;Tiny&quot;, &quot;qishuai231@gmail.com&quot;},
        3:Person{&quot;Jack&quot;, &quot;qs_edu2009@163.com&quot;},
    }

    //\u7F16\u8BD1\u9519\u8BEF\uFF1Acannot assign to struct field m[1].Name in map
    m[1].Name = &quot;Scrapup&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4\u5B57\u9762\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5B57\u9762\u91CF" aria-hidden="true">#</a> \u6570\u7EC4\u5B57\u9762\u91CF</h3><p>\u6570\u7EC4\u5B57\u9762\u91CF\u662F\u4E0D\u53EF\u5BFB\u5740\u7684\uFF0C\u5F53\u4F60\u5BF9\u6570\u7EC4\u5B57\u9762\u91CF\u8FDB\u884C\u5207\u7247\u64CD\u4F5C\uFF0C\u5176\u5B9E\u5C31\u662F\u5BFB\u627E\u5185\u90E8\u5143\u7D20\u7684\u5730\u5740\uFF0C\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u662F\u4F1A\u62A5\u9519\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func main() {
    fmt.Println([3]int{1, 2, 3}[1:])
    // invalid operation [3]int literal[1:] (slice of unaddressable value)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="93.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="95.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,50),o=n("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),b={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},h=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),p=n(")"),x=n("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),g={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},f=n("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function q(_,P){const s=d("RouterLink"),a=d("ExternalLinkIcon");return r(),t("div",null,[m,e("ul",null,[e("li",null,[e("p",null,[i(s,{to:"/Gomd_super/"},{default:u(()=>[o]),_:1})])]),e("li",null,[e("p",null,[e("a",b,[h,i(a)]),p])]),e("li",null,[e("p",null,[x,e("a",g,[f,i(a)])])])])])}const w=l(v,[["render",q],["__file","94.html.vue"]]);export{w as default};
