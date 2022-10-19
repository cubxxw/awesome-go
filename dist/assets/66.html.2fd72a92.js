import{_ as r,r as t,o as c,c as d,a as e,b as s,w as l,e as o,d as i}from"./app.bf54247d.js";const u={},v=o(`<h1 id="_1-\u65B0\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_1-\u65B0\u5EFA\u9879\u76EE" aria-hidden="true">#</a> 1. \u65B0\u5EFA\u9879\u76EE</h1><h1 id="_2-\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> 2. \u521B\u5EFA\u9879\u76EE</h1><p>beego \u7684\u9879\u76EE\u57FA\u672C\u90FD\u662F\u901A\u8FC7 <code>bee</code> \u547D\u4EE4\u6765\u521B\u5EFA\u7684\uFF0C\u6240\u4EE5\u5728\u521B\u5EFA\u9879\u76EE\u4E4B\u524D\u786E\u4FDD\u4F60\u5DF2\u7ECF\u5B89\u88C5\u4E86 bee \u5DE5\u5177\u548C beego\u3002\u5982\u679C\u4F60\u8FD8\u6CA1\u6709\u5B89\u88C5\uFF0C\u90A3\u4E48\u8BF7\u67E5\u9605 beego \u7684\u5B89\u88C5 \u548C bee \u5DE5\u5177\u7684\u5B89\u88C5\u3002</p><p>\u73B0\u5728\u4E00\u5207\u5C31\u7EEA\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F00\u59CB\u521B\u5EFA\u9879\u76EE\u4E86\uFF0C\u6253\u5F00\u7EC8\u7AEF\uFF0C\u8FDB\u5165 <code>$GOPATH/src</code> \u6240\u5728\u7684\u76EE\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  src  bee new quickstart
[INFO] Creating application...
/gopath/src/quickstart/
/gopath/src/quickstart/conf/
/gopath/src/quickstart/controllers/
/gopath/src/quickstart/models/
/gopath/src/quickstart/routers/
/gopath/src/quickstart/tests/
/gopath/src/quickstart/static/
/gopath/src/quickstart/static/js/
/gopath/src/quickstart/static/css/
/gopath/src/quickstart/static/img/
/gopath/src/quickstart/views/
/gopath/src/quickstart/conf/app.conf
/gopath/src/quickstart/controllers/default.go
/gopath/src/quickstart/views/index.tpl
/gopath/src/quickstart/routers/router.go
/gopath/src/quickstart/tests/default_test.go
/gopath/src/quickstart/main.go
2014/11/06 18:17:09 [SUCC] New application successfully created!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684\u547D\u4EE4\u5C31\u521B\u5EFA\u4E86\u4E00\u4E2A beego \u9879\u76EE\u3002\u4ED6\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\u6240\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>quickstart
|-- conf
|   \`-- app.conf
|-- controllers
|   \`-- default.go
|-- main.go
|-- models
|-- routers
|   \`-- router.go
|-- static
|   |-- css
|   |-- img
|   \`-- js
|-- tests
|   \`-- default_test.go
\`-- views
    \`-- index.tpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u76EE\u5F55\u7ED3\u6784\u4E2D\u6211\u4EEC\u4E5F\u53EF\u4EE5\u770B\u51FA\u6765\u8FD9\u662F\u4E00\u4E2A\u5178\u578B\u7684 MVC \u67B6\u6784\u7684\u5E94\u7528\uFF0C<code>main.go</code> \u662F\u5165\u53E3\u6587\u4EF6\u3002</p><h2 id="_2-1-\u8FD0\u884C\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a> 2.1. \u8FD0\u884C\u9879\u76EE</h2><p>beego \u9879\u76EE\u521B\u5EFA\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u5F00\u59CB\u8FD0\u884C\u9879\u76EE\uFF0C\u9996\u5148\u8FDB\u5165\u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>bee run</code> \u6765\u8FD0\u884C\u8BE5\u9879\u76EE\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u505A\u5230\u70ED\u7F16\u8BD1\u7684\u6548\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  src  cd quickstart
\u279C  quickstart  bee run
2014/11/06 18:18:34 [INFO] Uses &#39;quickstart&#39; as &#39;appname&#39;
2014/11/06 18:18:34 [INFO] Initializing watcher...
2014/11/06 18:18:34 [TRAC] Directory(/gopath/src/quickstart/controllers)
2014/11/06 18:18:34 [TRAC] Directory(/gopath/src/quickstart)
2014/11/06 18:18:34 [TRAC] Directory(/gopath/src/quickstart/routers)
2014/11/06 18:18:34 [TRAC] Directory(/gopath/src/quickstart/tests)
2014/11/06 18:18:34 [INFO] Start building...
2014/11/06 18:18:35 [SUCC] Build was successful
2014/11/06 18:18:35 [INFO] Restarting quickstart ...
2014/11/06 18:18:35 [INFO] ./quickstart is running...
2014/11/06 18:18:35 [app.go:96] [I] http server Running on :8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u6211\u4EEC\u7684\u5E94\u7528\u5DF2\u7ECF\u5728 <code>8080</code> \u7AEF\u53E3(beego \u7684\u9ED8\u8BA4\u7AEF\u53E3)\u8DD1\u8D77\u6765\u4E86.\u4F60\u662F\u4E0D\u662F\u89C9\u5F97\u5F88\u795E\u5947\uFF0C\u4E3A\u4EC0\u4E48\u6CA1\u6709 nginx \u548C apache \u5C45\u7136\u53EF\u4EE5\u81EA\u5DF1\u5E72\u8FD9\u4E2A\u4E8B\u60C5\uFF1F\u662F\u7684\uFF0CGo \u5176\u5B9E\u5DF2\u7ECF\u505A\u4E86\u7F51\u7EDC\u5C42\u7684\u4E1C\u897F\uFF0Cbeego \u53EA\u662F\u5C01\u88C5\u4E86\u4E00\u4E0B\uFF0C\u6240\u4EE5\u53EF\u4EE5\u505A\u5230\u4E0D\u9700\u8981 nginx \u548C apache\u3002\u8BA9\u6211\u4EEC\u6253\u5F00\u6D4F\u89C8\u5668\u770B\u770B\u6548\u679C\u5427\uFF1A</p><p><img src="https://s2.loli.net/2022/04/11/s5exAdFElpkSh1v.png" alt="img"></p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="65.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="67.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,15),m=i("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),b={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},p=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),h=i(")"),g=i("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),_={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},k=i("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function f(q,x){const a=t("RouterLink"),n=t("ExternalLinkIcon");return c(),d("div",null,[v,e("ul",null,[e("li",null,[e("p",null,[s(a,{to:"/Gomd_super/"},{default:l(()=>[m]),_:1})])]),e("li",null,[e("p",null,[e("a",b,[p,s(n)]),h])]),e("li",null,[e("p",null,[g,e("a",_,[k,s(n)])])])])])}const N=r(u,[["render",f],["__file","66.html.vue"]]);export{N as default};
