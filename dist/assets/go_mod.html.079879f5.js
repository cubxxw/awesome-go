import{_ as a,r as t,o as l,c as o,a as n,b as i,d as e,e as d}from"./app.5dbe8dec.js";const c={},r=n("h1",{id:"go-mod\u5305",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#go-mod\u5305","aria-hidden":"true"},"#"),e(" Go-mod\u5305")],-1),u=n("p",null,"[toc]",-1),m=n("hr",null,null,-1),p={id:"go-mod\u9879\u76EE\u5730\u5740",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#go-mod\u9879\u76EE\u5730\u5740","aria-hidden":"true"},"#",-1),g=e(),b={href:"https://github.com/3293172751/go-mod",target:"_blank",rel:"noopener noreferrer"},h=e("Go-mod\u9879\u76EE\u5730\u5740"),k={href:"https://github.com/3293172751/go-mod",target:"_blank",rel:"noopener noreferrer"},x=e("https://github.com/3293172751/go-mod"),_=d(`<hr><h3 id="\u5305\u7684\u5BFC\u5165\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5305\u7684\u5BFC\u5165\u65B9\u5F0F" aria-hidden="true">#</a> \u5305\u7684\u5BFC\u5165\u65B9\u5F0F</h3><ol><li><p>\u7EDD\u5BF9\u8DEF\u5F84\u5BFC\u5165\uFF08\u5728GOPATH\u76EE\u5F55\u4E2D\u5BFC\u5165\u5305\uFF09</p></li><li><p>\u76F8\u5BF9\u8DEF\u5F84\u5BFC\u5165\uFF08\u4E0D\u5EFA\u8BAE\uFF01\uFF01\uFF01\uFF09</p></li><li><p>\u70B9\u5BFC\u5165</p><ul><li><p>\u76F8\u5F53\u4E8E\u76F4\u63A5\u590D\u5236\u6E90\u6587\u4EF6\u8FC7\u6765\uFF0C\u6B64\u65F6\u4E0D\u9700\u8981\u7528.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Println(&quot;hello word&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>\u522B\u540D\u5BFC\u5165</p></li><li><p>\u4E0B\u5212\u7EBF\u5BFC\u5165</p></li></ol><h3 id="go-mod\u65B9\u5F0F\u7BA1\u7406\u5305" tabindex="-1"><a class="header-anchor" href="#go-mod\u65B9\u5F0F\u7BA1\u7406\u5305" aria-hidden="true">#</a> Go-mod\u65B9\u5F0F\u7BA1\u7406\u5305</h3><h4 id="\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a> \u4F18\u52BF\uFF1A</h4><ul><li><strong>\u4EE3\u7801\u53EF\u4EE5\u653E\u5728\u4EFB\u610F\u4F4D\u7F6E\uFF0C\u4E0D\u7528\u8BBE\u7F6EGOPATH</strong></li><li><strong>\u81EA\u52A8\u4E0B\u8F7D\u4F9D\u8D56\u7BA1\u7406</strong></li><li><strong>\u7248\u672C\u63A7\u5236</strong></li><li><strong>\u4E0D\u5141\u8BB8\u4F7F\u7528\u76F8\u5BF9\u5BFC\u5165</strong></li><li><strong>replace\u673A\u5236\uFF08goproxy\u4EE3\u7406\u673A\u5236\uFF09</strong></li></ul><h3 id="\u9879\u76EE\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u5F00\u59CB" aria-hidden="true">#</a> \u9879\u76EE\u5F00\u59CB~</h3><blockquote><p>\u4E3A\u4E86\u7406\u6E05\u5173\u7CFB\uFF0C\u8FD9\u4E00\u8282\u4ECE\u5934\u5F00\u59CB\u505A</p></blockquote><p><strong>\u76EE\u5F55\u7ED3\u6784</strong></p><p><img src="https://s2.loli.net/2022/05/25/eKIV2UnTLjcWRJC.png" alt="image-20220525220447501"></p><p><strong>\u6211\u4EEC\u7684\u9879\u76EE\u5C31\u53EBgo-mod</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir go-mod
cd go-mod
mkdir hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E3A\u4EE3\u7801\u542F\u7528\u4F9D\u8D56\u9879\u8DDF\u8E2A" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EE3\u7801\u542F\u7528\u4F9D\u8D56\u9879\u8DDF\u8E2A" aria-hidden="true">#</a> \u4E3A\u4EE3\u7801\u542F\u7528\u4F9D\u8D56\u9879\u8DDF\u8E2A</h3><p><strong>\u9700\u8981\u8BBE\u7F6E\u540D\u5B57\uFF0C\u4E00\u822C\u548C\u62A5\u540D\u662F\u4E00\u6837\u7684</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod&gt; go mod init go-mod
go: creating new go.mod: module go-mod
go: to add module requirements and sums:
        go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u67E5\u770B\u6A21\u5757</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module go-mod

go 1.18
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8F91hello.go</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func main() {
	fmt.Println(&quot;hello word&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod\\hello&gt; go run . 
hello word
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u76EE\u5F55\u7ED3\u6784</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>smile<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>\u533A\u5757\u94FE<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>go-mod<span class="token operator">&gt;</span> tree
\u5377 \u7CFB\u7EDF \u7684\u6587\u4EF6\u5939 <span class="token environment constant">PATH</span> \u5217\u8868
\u5377\u5E8F\u5217\u53F7\u4E3A DE95-1D97
C:.
\u251C\u2500hello
\u2514\u2500main

PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>smile<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>\u533A\u5757\u94FE<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>go-mod<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> .<span class="token punctuation">\\</span>main<span class="token punctuation">\\</span>
PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>smile<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>\u533A\u5757\u94FE<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>go-mod<span class="token punctuation">\\</span>main<span class="token operator">&gt;</span> New-Item main.go            

    \u76EE\u5F55: C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>smile<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>\u533A\u5757\u94FE<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>go-mod<span class="token punctuation">\\</span>main

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         <span class="token number">2022</span>/5/25     <span class="token number">21</span>:32              <span class="token number">0</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u521B\u5EFA\u4E00\u4E2A\u5305\u6587\u4EF6\u5939,\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6task.go</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod&gt; mkdir models


    \u76EE\u5F55: C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2022/5/25     22:00                models

PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod&gt; New-Item task.go

    \u76EE\u5F55: C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2022/5/25     22:02              0 task.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4E3B\u51FD\u6570</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
	. &quot;fmt&quot;
	&quot;go-mod/hello&quot;
	&quot;go-mod/models&quot;
)

func main() {
	Println(&quot;main\u4E3B\u51FD\u6570&quot;)
	hello.Hello()
	Println(models.Name)
	//hello.Hello()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod&gt; go run .\\main.go
main\u4E3B\u51FD\u6570
hello word
test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6240\u51FA\u73B0\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6240\u51FA\u73B0\u95EE\u9898" aria-hidden="true">#</a> \u6240\u51FA\u73B0\u95EE\u9898</h3><p>\u6587\u4EF6mod\u5305\u5D4C\u5165\u4F7F\u7528\u7684\u95EE\u9898\uFF0C\u5BFC\u81F4mod\u673A\u5236\u6CA1\u529E\u6CD5\u6B63\u5E38\u5728\u5B50\u76EE\u5F55\u4F7F\u7528~</p><h3 id="github\u5BFC\u5165\u5305" tabindex="-1"><a class="header-anchor" href="#github\u5BFC\u5165\u5305" aria-hidden="true">#</a> github\u5BFC\u5165\u5305</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> models

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;github.com/astaxie/beego&quot;</span>

<span class="token keyword">var</span> Name <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6700\u5148\u5F00\u59CB\u8C03\u7528\u591A\u4E2A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	beego<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u56DE\u5230\u4E3B\u76EE\u5F55</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod&gt;  go get github.com/astaxie/beego
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u4E0B\u8F7D\u4F9D\u8D56\uFF0C\u67E5\u770Bgo-mod</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module go-mod

go 1.18

require (
	github.com/astaxie/beego v1.12.3 // indirect
	github.com/beorn7/perks v1.0.1 // indirect
	github.com/cespare/xxhash/v2 v2.1.1 // indirect
	github.com/golang/protobuf v1.4.2 // indirect
	github.com/hashicorp/golang-lru v0.5.4 // indirect
	github.com/matttproud/golang_protobuf_extensions v1.0.1 // indirect
	github.com/prometheus/client_golang v1.7.0 // indirect
	github.com/prometheus/client_model v0.2.0 // indirect
	github.com/prometheus/common v0.10.0 // indirect
	github.com/prometheus/procfs v0.1.3 // indirect
	github.com/shiena/ansicolor v0.0.0-20151119151921-a422bbe96644 // indirect
	golang.org/x/crypto v0.0.0-20191011191535-87dc89f01550 // indirect
	golang.org/x/net v0.0.0-20190620200207-3b0461eec859 // indirect
	golang.org/x/sys v0.0.0-20200615200032-f1bc736245b1 // indirect
	golang.org/x/text v0.3.0 // indirect
	google.golang.org/protobuf v1.23.0 // indirect
	gopkg.in/yaml.v2 v2.2.8 // indirect
)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8FD8\u6709\u4E00\u4E2Ago sum\u6587\u4EF6</strong></p><h3 id="\u8FDC\u7A0B\u63A8\u9001\u5230github\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u63A8\u9001\u5230github\u4E0A" aria-hidden="true">#</a> \u8FDC\u7A0B\u63A8\u9001\u5230github\u4E0A</h3><ol><li>\u5728github\u4E0A\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EEGo-mod</li><li><code>go mod init github.com/3293172751/go-mod</code></li><li>\u6DFB\u52A0readme.m</li></ol>`,40);function f(q,P){const s=t("ExternalLinkIcon");return l(),o("div",null,[r,u,m,n("h2",p,[v,g,n("em",null,[n("a",b,[h,i(s)])])]),n("p",null,[n("a",k,[x,i(s)])]),_])}const D=a(c,[["render",f],["__file","go_mod.html.vue"]]);export{D as default};
