import{_ as r,r as i,o as c,c as p,a as n,b as e,w as t,e as s,d as l}from"./app.798d5e9d.js";const d={},u={href:"https://github.com/3293172751",target:"_blank",rel:"noopener noreferrer"},v=s("author"),m=n("h1",{id:"\u7B2C27\u8282-go-tool",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C27\u8282-go-tool","aria-hidden":"true"},"#"),s(" \u7B2C27\u8282 go tool")],-1),k=s("\u56DE\u5230\u76EE\u5F55"),b=s("\u4E0A\u4E00\u8282"),h=s("\u2764\uFE0F\u{1F495}\u{1F495}Go\u8BED\u8A00\u9AD8\u7EA7\u7BC7\u7AE0,\u5728\u6B64\u4E4B\u524D\u5EFA\u8BAE\u60A8\u5148\u4E86\u89E3\u57FA\u7840\u548C\u8FDB\u9636\u7BC7\u3002Myblog:"),g={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},_=s("http://nsddd.top"),f={id:"go\u8BED\u8A00\u57FA\u7840\u7BC7",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00\u57FA\u7840\u7BC7","aria-hidden":"true"},"#",-1),y=s(),x={href:"https://github.com/cubxxw/awesome-cs-cloudnative-blockchain/blob/master/TOC.md",target:"_blank",rel:"noopener noreferrer"},G=s("Go\u8BED\u8A00\u57FA\u7840\u7BC7"),q={id:"go\u8BED\u8A00100\u7BC7\u8FDB\u9636",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#go\u8BED\u8A00100\u7BC7\u8FDB\u9636","aria-hidden":"true"},"#",-1),C=s(),$={href:"https://github.com/cubxxw/awesome-cs-cloudnative-blockchain/blob/master/Gomd_super/README.md",target:"_blank",rel:"noopener noreferrer"},E=s("Go\u8BED\u8A00100\u7BC7\u8FDB\u9636"),N=l(`<hr><p>[TOC]</p><h2 id="go-tool" tabindex="-1"><a class="header-anchor" href="#go-tool" aria-hidden="true">#</a> Go Tool</h2><p><strong>\u8C03\u51FACLI\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@cubmaster01:/workspces/tiktok<span class="token comment"># go tool </span>
addr2line
asm
buildid
cgo
compile
cover
dist
doc
fix
<span class="token function">link</span>
nm
objdump
pack
pprof
test2json
trace
vet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u662F Go \u8BED\u8A00\u7684\u547D\u4EE4\u884C\u5DE5\u5177\u3002\u5B83\u4EEC\u7528\u4E8E\u7F16\u8BD1\u3001\u6D4B\u8BD5\u548C\u8C03\u8BD5 Go \u7A0B\u5E8F\u3002</p>`,6),L=l("<li><code>addr2line</code> \u53EF\u4EE5\u5C06\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u7684\u5730\u5740\u8F6C\u6362\u4E3A\u6E90\u4EE3\u7801\u4E2D\u7684\u884C\u53F7\u548C\u51FD\u6570\u540D\u3002</li><li><code>asm</code> \u53EF\u4EE5\u5C06 Go \u6E90\u4EE3\u7801\u7F16\u8BD1\u4E3A\u6C47\u7F16\u8BED\u8A00\u3002</li><li><code>buildid</code> \u7528\u4E8E\u5728\u7F16\u8BD1\u540E\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u6DFB\u52A0\u6216\u68C0\u7D22 build ID\u3002</li><li><code>cgo</code> \u7528\u4E8E\u5728 Go \u4EE3\u7801\u4E2D\u4F7F\u7528 C \u4EE3\u7801\u3002</li><li><code>compile</code> \u7528\u4E8E\u7F16\u8BD1 Go \u6E90\u4EE3\u7801\u3002</li><li><code>cover</code> \u7528\u4E8E\u6536\u96C6\u548C\u5206\u6790 Go \u4EE3\u7801\u8986\u76D6\u7387\u6570\u636E\u3002</li><li><code>dist</code> \u7528\u4E8E\u6784\u5EFA\u548C\u53D1\u5E03 Go \u5305\u3002</li><li><code>doc</code> \u7528\u4E8E\u67E5\u770B Go \u5305\u6216\u7A0B\u5E8F\u7684\u6587\u6863\u3002</li><li><code>fix</code> \u7528\u4E8E\u81EA\u52A8\u4FEE\u590D Go \u4EE3\u7801\u4E2D\u7684\u8BED\u6CD5\u9519\u8BEF\u3002</li><li><code>link</code> \u7528\u4E8E\u94FE\u63A5 Go \u4EE3\u7801\u3002</li><li><code>nm</code> \u7528\u4E8E\u663E\u793A\u7B26\u53F7\u8868\u3002</li><li><code>objdump</code> \u7528\u4E8E\u663E\u793A\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u7684\u4F4E\u7EA7\u4FE1\u606F\u3002</li><li><code>pack</code> \u7528\u4E8E\u6253\u5305 Go \u6E90\u4EE3\u7801\u3002</li>",13),V=n("code",null,"pprof",-1),I=s(),T={href:"https://github.com/eddycjy/blog/blob/master/content/posts/go/tools/2018-09-15-go-tool-pprof.md",target:"_blank",rel:"noopener noreferrer"},B=s("\u7528\u4E8E\u6536\u96C6\u548C\u5206\u6790\u6027\u80FD\u6570\u636E\u3002"),D=n("li",null,[n("code",null,"test2json"),s(" \u7528\u4E8E\u5C06\u6D4B\u8BD5\u8F93\u51FA\u8F6C\u6362\u4E3A JSON \u683C\u5F0F\u3002")],-1),O=n("li",null,[n("code",null,"trace"),s(" \u7528\u4E8E\u6536\u96C6\u548C\u5206\u6790 Go \u4EE3\u7801\u7684\u8FD0\u884C\u65F6\u8DDF\u8E2A\u4FE1\u606F\u3002")],-1),R=n("li",null,[n("code",null,"vet"),s(" \u7528\u4E8E\u68C0\u67E5 Go \u4EE3\u7801\u4E2D\u7684\u53EF\u80FD\u9519\u8BEF\u3002")],-1),M=l(`<h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h2><h3 id="go-tool-compile" tabindex="-1"><a class="header-anchor" href="#go-tool-compile" aria-hidden="true">#</a> <code>go tool compile</code></h3><p><code>go tool compile</code> \u7528\u4E8E\u7F16\u8BD1 Go \u6E90\u4EE3\u7801\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5B83\u7F16\u8BD1\u4E86\u4E00\u4E2A\u540D\u4E3A &quot;hello.go&quot; \u7684\u6587\u4EF6\uFF0C\u5E76\u751F\u6210\u4E86\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6 &quot;hello&quot;\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go tool compile <span class="token parameter variable">-o</span> hello hello.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>go tool compile</code> \u548C <code>go build</code> \u90FD\u7528\u4E8E\u7F16\u8BD1 Go \u6E90\u4EE3\u7801\uFF0C\u4F46\u5B83\u4EEC\u6709\u4E00\u4E9B\u91CD\u8981\u7684\u533A\u522B\u3002</p><p><code>go build</code> \u662F Go \u8BED\u8A00\u7684\u6807\u51C6\u547D\u4EE4\uFF0C\u5B83\u7528\u4E8E\u7F16\u8BD1 Go \u6E90\u4EE3\u7801\u5E76\u751F\u6210\u53EF\u6267\u884C\u6587\u4EF6\u6216\u5E93\u3002\u5B83\u7684\u4F7F\u7528\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u6307\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A Go \u6E90\u6587\u4EF6\u5373\u53EF\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token keyword">go</span> build main<span class="token punctuation">.</span><span class="token keyword">go</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>go tool compile</code> \u662F Go \u8BED\u8A00\u7684\u4F4E\u7EA7\u547D\u4EE4\uFF0C\u5B83\u7528\u4E8E\u7F16\u8BD1 Go \u6E90\u4EE3\u7801\u5E76\u751F\u6210\u673A\u5668\u7801\u3002\u5B83\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u7F16\u8BD1\u9009\u9879\u548C\u66F4\u7EC6\u7C92\u5EA6\u7684\u63A7\u5236\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>$ <span class="token keyword">go</span> tool compile <span class="token operator">-</span>o main main<span class="token punctuation">.</span><span class="token keyword">go</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 <code>go build</code>\uFF0C\u56E0\u4E3A\u5B83\u66F4\u7B80\u5355\u3001\u66F4\u6613\u7528\u3002\u5982\u679C\u9700\u8981\u66F4\u7EC6\u7C92\u5EA6\u7684\u63A7\u5236\u6216\u66F4\u591A\u7684\u7F16\u8BD1\u9009\u9879\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>go tool compile</code>\u3002</p></blockquote><h3 id="go-tool-cover" tabindex="-1"><a class="header-anchor" href="#go-tool-cover" aria-hidden="true">#</a> <code>go tool cover</code></h3><p><code>go tool cover</code> \u7528\u4E8E\u6536\u96C6\u548C\u5206\u6790 Go \u4EE3\u7801\u8986\u76D6\u7387\u6570\u636E\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5B83\u8FD0\u884C\u4E86 &quot;hello_test.go&quot; \u4E2D\u7684\u6D4B\u8BD5\uFF0C\u5E76\u751F\u6210\u4E86\u4E00\u4E2A\u8986\u76D6\u7387\u62A5\u544A &quot;coverage.out&quot;\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go <span class="token builtin class-name">test</span> <span class="token parameter variable">-coverprofile</span><span class="token operator">=</span>coverage.out
$ go tool cover <span class="token parameter variable">-func</span><span class="token operator">=</span>coverage.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go-tool-pprof" tabindex="-1"><a class="header-anchor" href="#go-tool-pprof" aria-hidden="true">#</a> <code>go tool pprof</code></h3><p><code>go tool pprof</code> \u7528\u4E8E\u6536\u96C6\u548C\u5206\u6790\u6027\u80FD\u6570\u636E\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5B83\u8FD0\u884C\u4E86\u7A0B\u5E8F &quot;hello&quot;\uFF0C\u5E76\u751F\u6210\u4E86\u4E00\u4E2A\u6027\u80FD\u5206\u6790\u6587\u4EF6 &quot;cpu.pprof&quot;\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go tool pprof <span class="token parameter variable">-http</span><span class="token operator">=</span>:8080 <span class="token parameter variable">-seconds</span><span class="token operator">=</span><span class="token number">60</span> <span class="token parameter variable">-sample_index</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-sample_interval</span><span class="token operator">=</span>1s <span class="token parameter variable">-sample_value</span><span class="token operator">=</span>1s <span class="token parameter variable">-file</span><span class="token operator">=</span>cpu.pprof  hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u5DE5\u5177\u63D0\u4F9B\u4E86\u5F88\u591A\u529F\u80FD\uFF0C\u5728\u4F7F\u7528\u65F6\uFF0C\u53EF\u4EE5\u67E5\u770B\u5B8C\u6574\u7684\u5E2E\u52A9\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go tool <span class="token operator">&lt;</span>toolname<span class="token operator">&gt;</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>cgo\u{1F50D}</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>root@cubmaster01<span class="token punctuation">:</span><span class="token operator">/</span>workspces<span class="token operator">/</span>tiktok# <span class="token keyword">go</span> tool cgo <span class="token operator">-</span>h
usage<span class="token punctuation">:</span> cgo <span class="token operator">--</span> <span class="token punctuation">[</span>compiler options<span class="token punctuation">]</span> file<span class="token punctuation">.</span><span class="token keyword">go</span> <span class="token operator">...</span>
  <span class="token operator">-</span>V    <span class="token builtin">print</span> version and exit
  <span class="token operator">-</span>debug<span class="token operator">-</span>define
        <span class="token builtin">print</span> relevant #defines
  <span class="token operator">-</span>debug<span class="token operator">-</span>gcc
        <span class="token builtin">print</span> gcc invocations
  <span class="token operator">-</span>dynimport <span class="token builtin">string</span>
        <span class="token keyword">if</span> non<span class="token operator">-</span>empty<span class="token punctuation">,</span> <span class="token builtin">print</span> dynamic <span class="token keyword">import</span> data <span class="token keyword">for</span> that file
  <span class="token operator">-</span>dynlinker
        record dynamic linker information in <span class="token operator">-</span>dynimport mode
  <span class="token operator">-</span>dynout <span class="token builtin">string</span>
        write <span class="token operator">-</span>dynimport output to this file
  <span class="token operator">-</span>dynpackage <span class="token builtin">string</span>
        set Go <span class="token keyword">package</span> <span class="token keyword">for</span> <span class="token operator">-</span>dynimport output <span class="token punctuation">(</span><span class="token keyword">default</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span>
  <span class="token operator">-</span>exportheader <span class="token builtin">string</span>
        where to write export header <span class="token keyword">if</span> any exported functions
  <span class="token operator">-</span>gccgo
        generate files <span class="token keyword">for</span> use with gccgo
  <span class="token operator">-</span>gccgopkgpath <span class="token builtin">string</span>
        <span class="token operator">-</span>fgo<span class="token operator">-</span>pkgpath option used with gccgo
  <span class="token operator">-</span>gccgoprefix <span class="token builtin">string</span>
        <span class="token operator">-</span>fgo<span class="token operator">-</span>prefix option used with gccgo
  <span class="token operator">-</span>godefs
        <span class="token keyword">for</span> bootstrap<span class="token punctuation">:</span> write Go definitions <span class="token keyword">for</span> C file to standard output
  <span class="token operator">-</span>import_runtime_cgo
        <span class="token keyword">import</span> runtime<span class="token operator">/</span>cgo in generated code <span class="token punctuation">(</span><span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token operator">-</span>import_syscall
        <span class="token keyword">import</span> syscall in generated code <span class="token punctuation">(</span><span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token operator">-</span>importpath <span class="token builtin">string</span>
        <span class="token keyword">import</span> path of <span class="token keyword">package</span> being built <span class="token punctuation">(</span><span class="token keyword">for</span> comments in generated files<span class="token punctuation">)</span>
  <span class="token operator">-</span>objdir <span class="token builtin">string</span>
        object directory
  <span class="token operator">-</span>srcdir <span class="token builtin">string</span>
        source directory
  <span class="token operator">-</span>trimpath <span class="token builtin">string</span>
        applies supplied rewrites or trims prefixes to recorded source file paths
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2>`,15),S=s("\u56DE\u5230\u76EE\u5F55"),A=s("\u4E0A\u4E00\u8282"),J=s("\u4E0B\u4E00\u8282"),z=n("hr",null,null,-1),F={href:"https://github.com/cubxxw/awesome-cs-cloudnative-blockchain/blob/master/Git/git-contributor.md",target:"_blank",rel:"noopener noreferrer"},H=s("\u53C2\u4E0E\u8D21\u732E\u2764\uFE0F\u{1F495}\u{1F495}");function K(P,Q){const a=i("ExternalLinkIcon"),o=i("RouterLink");return c(),p("div",null,[n("ul",null,[n("li",null,[n("a",u,[v,e(a)])])]),m,n("ul",null,[n("li",null,[e(o,{to:"/go-advancend/"},{default:t(()=>[k]),_:1})]),n("li",null,[e(o,{to:"/go-advancend/markdown/26.html"},{default:t(()=>[b]),_:1})])]),n("blockquote",null,[n("p",null,[h,n("a",g,[_,e(a)])])]),n("h3",f,[w,y,n("strong",null,[n("a",x,[G,e(a)])])]),n("h3",q,[j,C,n("strong",null,[n("a",$,[E,e(a)])])]),N,n("ul",null,[L,n("li",null,[V,I,n("a",T,[B,e(a)])]),D,O,R]),M,n("ul",null,[n("li",null,[e(o,{to:"/go-advancend/"},{default:t(()=>[S]),_:1})]),n("li",null,[e(o,{to:"/go-advancend/markdown/26.html"},{default:t(()=>[A]),_:1})]),n("li",null,[e(o,{to:"/go-advancend/markdown/28.html"},{default:t(()=>[J]),_:1})])]),z,n("ul",null,[n("li",null,[n("a",F,[H,e(a)])])])])}const W=r(d,[["render",K],["__file","27.html.vue"]]);export{W as default};
