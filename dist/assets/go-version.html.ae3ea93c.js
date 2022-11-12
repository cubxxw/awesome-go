import{_ as t}from"./image-20221003182659317.c6bd8372.js";import{_ as i,r as l,o as p,c as r,a as n,b as e,e as s,d as o}from"./app.14086d60.js";const c={},d=n("h1",{id:"go-mod\u5305",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#go-mod\u5305","aria-hidden":"true"},"#"),s(" Go mod\u5305")],-1),u=n("p",null,"[toc]",-1),m=n("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u4ECB\u7ECD")],-1),v=s("[x] "),g={href:"https://github.com/3293172751/go-mod/",target:"_blank",rel:"noopener noreferrer"},k=s("\u9879\u76EE\u5730\u5740\u4ED3\u5E93"),b=o("<li><p><strong>\u5305\uFF08package\uFF09\uFF1A\u662F\u591A\u4E2AGo\u6E90\u7801\u7684\u96C6\u5408</strong></p></li><li><p>package\u4E0D\u5C40\u9650\u4E8E\u4E00\u4E2A\u6587\u4EF6\uFF0C<strong>\u53EF\u4EE5\u7531\u591A\u4E2A\u6587\u4EF6\u7EC4\u6210\u3002</strong></p></li><li><p>**\u4E0D\u8981\u6C42package\u7684\u540D\u79F0\u548C\u6240\u5728\u76EE\u5F55\u540D\u76F8\u540C\uFF0C**\u4F46\u662F\u4F60\u6700\u597D\u4FDD\u6301\u76F8\u540C\uFF0C\u5426\u5219\u5BB9\u6613\u5F15\u8D77\u6B67\u4E49\uFF08\u89C4\u8303\u6027\uFF09\u3002</p></li><li><p>\u6BCF\u4E2A\u5B50\u76EE\u5F55\u4E2D<strong>\u53EA\u80FD\u5B58\u5728\u4E00\u4E2Apackage</strong>\uFF0C\u5426\u5219\u7F16\u8BD1\u65F6\u4F1A\u62A5\u9519\u3002</p></li><li><p>package\u662F\u4EE5<strong>\u7EDD\u5BF9\u8DEF\u5F84GOPATH\u6765\u5BFB\u5740</strong>\uFF0C\u4E0D\u8981\u7528\u76F8\u5BF9\u8DEF\u5F84\u6765import\u3002</p></li>",5),h=n("h2",{id:"go-mod-init",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#go-mod-init","aria-hidden":"true"},"#"),s(" Go mod init")],-1),x=n("blockquote",null,[n("p",null,"Go mod init\u662F\u4E00\u4E2A\u5305\u7BA1\u7406\u5DE5\u5177")],-1),_=n("p",null,[n("strong",null,"\u5B50\u76EE\u5F55\u65E0\u9700init,\u4EC5\u9700\u8981\u5728==\u6839\u76EE\u5F55\u4E0B\u751F\u6210go.mod==")],-1),f=n("h2",{id:"go-module",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#go-module","aria-hidden":"true"},"#"),s(" Go module")],-1),y=n("p",null,[n("strong",null,"\u963F\u91CC\u4E91\u4EE3\u7406go module\u670D\u52A1\u5668\u955C\u50CF")],-1),w={href:"http://mirrors.aliyun.com/goproxy/",target:"_blank",rel:"noopener noreferrer"},q=s("\u5730\u5740"),P=o(`<h2 id="\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362" aria-hidden="true">#</a> \u5207\u6362</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$env:GOPROXY = &quot;https://mirrors.aliyun.com/goproxy/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u81EA\u5DF1\u65B0\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5DF1\u65B0\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE" aria-hidden="true">#</a> \u81EA\u5DF1\u65B0\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE</h2><h3 id="\u5305\u7684\u5BFC\u5165\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5305\u7684\u5BFC\u5165\u65B9\u5F0F" aria-hidden="true">#</a> \u5305\u7684\u5BFC\u5165\u65B9\u5F0F</h3><ol><li><p>\u7EDD\u5BF9\u8DEF\u5F84\u5BFC\u5165\uFF08\u5728GOPATH\u76EE\u5F55\u4E2D\u5BFC\u5165\u5305\uFF09</p></li><li><p>\u76F8\u5BF9\u8DEF\u5F84\u5BFC\u5165\uFF08\u4E0D\u5EFA\u8BAE\uFF01\uFF01\uFF01\uFF09</p></li><li><p>\u70B9\u5BFC\u5165</p><ul><li><p>\u76F8\u5F53\u4E8E\u76F4\u63A5\u590D\u5236\u6E90\u6587\u4EF6\u8FC7\u6765\uFF0C\u6B64\u65F6\u4E0D\u9700\u8981\u7528.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Println(&quot;hello word&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>\u522B\u540D\u5BFC\u5165</p></li><li><p>\u4E0B\u5212\u7EBF\u5BFC\u5165</p></li></ol><h3 id="go-mod\u65B9\u5F0F\u7BA1\u7406\u5305" tabindex="-1"><a class="header-anchor" href="#go-mod\u65B9\u5F0F\u7BA1\u7406\u5305" aria-hidden="true">#</a> Go-mod\u65B9\u5F0F\u7BA1\u7406\u5305</h3><h4 id="\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a> \u4F18\u52BF\uFF1A</h4><ul><li><strong>\u4EE3\u7801\u53EF\u4EE5\u653E\u5728\u4EFB\u610F\u4F4D\u7F6E\uFF0C\u4E0D\u7528\u8BBE\u7F6EGOPATH</strong></li><li><strong>\u81EA\u52A8\u4E0B\u8F7D\u4F9D\u8D56\u7BA1\u7406</strong></li><li><strong>\u7248\u672C\u63A7\u5236</strong></li><li><strong>\u4E0D\u5141\u8BB8\u4F7F\u7528\u76F8\u5BF9\u5BFC\u5165</strong></li><li><strong>replace\u673A\u5236\uFF08goproxy\u4EE3\u7406\u673A\u5236\uFF09</strong></li></ul><h3 id="\u9879\u76EE\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u5F00\u59CB" aria-hidden="true">#</a> \u9879\u76EE\u5F00\u59CB~</h3><blockquote><p>\u4E3A\u4E86\u7406\u6E05\u5173\u7CFB\uFF0C\u8FD9\u4E00\u8282\u4ECE\u5934\u5F00\u59CB\u505A</p></blockquote><p><strong>\u76EE\u5F55\u7ED3\u6784</strong></p><img src="`+t+`" alt="image-20221003182659317" style="zoom:47%;"><p><strong>\u6211\u4EEC\u7684\u9879\u76EE\u5C31\u53EBgo-mod</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir go-mod
cd go-mod
mkdir hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E3A\u4EE3\u7801\u542F\u7528\u4F9D\u8D56\u9879\u8DDF\u8E2A" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EE3\u7801\u542F\u7528\u4F9D\u8D56\u9879\u8DDF\u8E2A" aria-hidden="true">#</a> \u4E3A\u4EE3\u7801\u542F\u7528\u4F9D\u8D56\u9879\u8DDF\u8E2A</h3><p><strong>\u9700\u8981\u8BBE\u7F6E\u540D\u5B57\uFF0C\u4E00\u822C\u548C\u62A5\u540D\u662F\u4E00\u6837\u7684</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod&gt; go mod init go-mod
go: creating new go.mod: module go-mod
go: to add module requirements and sums:
        go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u67E5\u770B\u6A21\u5757</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module go-mod

go 1.18
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8F91hello.go</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello word&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>PS C<span class="token punctuation">:</span>\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\<span class="token keyword">go</span><span class="token operator">-</span>mod\\hello<span class="token operator">&gt;</span> <span class="token keyword">go</span> run <span class="token punctuation">.</span> 
hello word
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u76EE\u5F55\u7ED3\u6784</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>PS C<span class="token punctuation">:</span>\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\<span class="token keyword">go</span><span class="token operator">-</span>mod<span class="token operator">&gt;</span> tree
\u5377 \u7CFB\u7EDF \u7684\u6587\u4EF6\u5939 PATH \u5217\u8868
\u5377\u5E8F\u5217\u53F7\u4E3A DE95<span class="token operator">-</span>1D97
C<span class="token punctuation">:</span><span class="token punctuation">.</span>
\u251C\u2500hello
\u2514\u2500main

PS C<span class="token punctuation">:</span>\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\<span class="token keyword">go</span><span class="token operator">-</span>mod<span class="token operator">&gt;</span> cd <span class="token punctuation">.</span>\\main\\
PS C<span class="token punctuation">:</span>\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\<span class="token keyword">go</span><span class="token operator">-</span>mod\\main<span class="token operator">&gt;</span> New<span class="token operator">-</span>Item main<span class="token punctuation">.</span><span class="token keyword">go</span>            

    \u76EE\u5F55<span class="token punctuation">:</span> C<span class="token punctuation">:</span>\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\<span class="token keyword">go</span><span class="token operator">-</span>mod\\main

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a<span class="token operator">--</span><span class="token operator">--</span>         <span class="token number">2022</span><span class="token operator">/</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">25</span>     <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">32</span>              <span class="token number">0</span> main<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u521B\u5EFA\u4E00\u4E2A\u5305\u6587\u4EF6\u5939,\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6task.go</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>PS C<span class="token punctuation">:</span>\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\<span class="token keyword">go</span><span class="token operator">-</span>mod<span class="token operator">&gt;</span> mkdir models


    \u76EE\u5F55<span class="token punctuation">:</span> C<span class="token punctuation">:</span>\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\<span class="token keyword">go</span><span class="token operator">-</span>mod


Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
d<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token number">2022</span><span class="token operator">/</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">25</span>     <span class="token number">22</span><span class="token punctuation">:</span><span class="token number">00</span>                models

PS C<span class="token punctuation">:</span>\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\<span class="token keyword">go</span><span class="token operator">-</span>mod<span class="token operator">&gt;</span> New<span class="token operator">-</span>Item task<span class="token punctuation">.</span><span class="token keyword">go</span>

    \u76EE\u5F55<span class="token punctuation">:</span> C<span class="token punctuation">:</span>\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\<span class="token keyword">go</span><span class="token operator">-</span>mod

Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
<span class="token operator">-</span>a<span class="token operator">--</span><span class="token operator">--</span>         <span class="token number">2022</span><span class="token operator">/</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">25</span>     <span class="token number">22</span><span class="token punctuation">:</span><span class="token number">02</span>              <span class="token number">0</span> task<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4E3B\u51FD\u6570</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token punctuation">.</span> <span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;go-mod/hello&quot;</span>
	<span class="token string">&quot;go-mod/models&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main\u4E3B\u51FD\u6570&quot;</span><span class="token punctuation">)</span>
	hello<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Println</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
	<span class="token comment">//hello.Hello()</span>
<span class="token punctuation">}</span><span class="token keyword">go</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\smile\\Desktop\\\u533A\u5757\u94FE\\code\\go-mod&gt; go run .\\main.go
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8FD8\u6709\u4E00\u4E2Ago sum\u6587\u4EF6</strong></p><h3 id="\u8FDC\u7A0B\u63A8\u9001\u5230github\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u63A8\u9001\u5230github\u4E0A" aria-hidden="true">#</a> \u8FDC\u7A0B\u63A8\u9001\u5230github\u4E0A</h3><ol><li>\u5728github\u4E0A\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EEGo-mod</li><li><code>go mod init github.com/3293172751/go-mod</code></li><li>\u6DFB\u52A0<code>readme.m</code></li></ol>`,42);function C(D,U){const a=l("ExternalLinkIcon");return p(),r("div",null,[d,u,m,n("ul",null,[n("li",null,[n("p",null,[v,n("a",g,[k,e(a)])])]),b]),h,x,_,f,y,n("ul",null,[n("li",null,[n("a",w,[q,e(a)])])]),P])}const S=i(c,[["render",C],["__file","go-version.html.vue"]]);export{S as default};
