import{_ as p,r as e,o as i,c,a as n,b as a,w as u,d as l,e as s}from"./app.ebf2b957.js";const r={},d=l(`<h1 id="_1-\u9AD8\u6548\u8BFB\u53D6\u914D\u7F6E\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_1-\u9AD8\u6548\u8BFB\u53D6\u914D\u7F6E\u4FE1\u606F" aria-hidden="true">#</a> 1. \u9AD8\u6548\u8BFB\u53D6\u914D\u7F6E\u4FE1\u606F</h1><h3 id="_1-1-1-\u5F00\u59CB\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u5F00\u59CB\u4F7F\u7528" aria-hidden="true">#</a> 1.1.1. \u5F00\u59CB\u4F7F\u7528</h3><p>\u6211\u4EEC\u5C06\u901A\u8FC7\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u4E86\u89E3\u5982\u4F55\u4F7F\u7528\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u4EFB\u610F\u76EE\u5F55\u521B\u5EFA\u4E24\u4E2A\u6587\u4EF6\uFF08my.ini \u548C main.go\uFF09\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9 /tmp/ini \u76EE\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    $ mkdir -p /tmp/ini
    $ cd /tmp/ini
    $ touch my.ini main.go
    $ tree .
    .
    \u251C\u2500\u2500 main.go
    \u2514\u2500\u2500 my.ini

    0 directories, 2 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u7F16\u8F91 my.ini \u6587\u4EF6\u5E76\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF08<em>\u90E8\u5206\u5185\u5BB9\u6765\u81EA Grafana</em>\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    # possible values : production, development
    app_mode = development

    [paths]
    # Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)
    data = /home/git/grafana

    [server]
    # Protocol (http or https)
    protocol = http

    # The http port  to use
    http_port = 9999

    # Redirect to correct domain if host header does not match domain
    # Prevents DNS rebinding attacks
    enforce_domain = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F88\u597D\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u7F16\u5199 main.go \u6587\u4EF6\u6765\u64CD\u4F5C\u521A\u624D\u521B\u5EFA\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>

    <span class="token string">&quot;gopkg.in/ini.v1&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cfg<span class="token punctuation">,</span> err <span class="token operator">:=</span> ini<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">&quot;my.ini&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Fail to read file: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5178\u578B\u8BFB\u53D6\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u5206\u533A\u53EF\u4EE5\u4F7F\u7528\u7A7A\u5B57\u7B26\u4E32\u8868\u793A</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;App Mode:&quot;</span><span class="token punctuation">,</span> cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">&quot;app_mode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Data Path:&quot;</span><span class="token punctuation">,</span> cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">&quot;paths&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u505A\u4E00\u4E9B\u5019\u9009\u503C\u9650\u5236\u7684\u64CD\u4F5C</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Server Protocol:&quot;</span><span class="token punctuation">,</span>
        cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">&quot;server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">&quot;protocol&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">In</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5982\u679C\u8BFB\u53D6\u7684\u503C\u4E0D\u5728\u5019\u9009\u5217\u8868\u5185\uFF0C\u5219\u4F1A\u56DE\u9000\u4F7F\u7528\u63D0\u4F9B\u7684\u9ED8\u8BA4\u503C</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Email Protocol:&quot;</span><span class="token punctuation">,</span>
        cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">&quot;server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">&quot;protocol&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">In</span><span class="token punctuation">(</span><span class="token string">&quot;smtp&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;imap&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;smtp&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// \u8BD5\u4E00\u8BD5\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Port Number: (%[1]T) %[1]d\\n&quot;</span><span class="token punctuation">,</span> cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">&quot;server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">&quot;http_port&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MustInt</span><span class="token punctuation">(</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enforce Domain: (%[1]T) %[1]v\\n&quot;</span><span class="token punctuation">,</span> cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">&quot;server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">&quot;enforce_domain&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MustBool</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5DEE\u4E0D\u591A\u4E86\uFF0C\u4FEE\u6539\u67D0\u4E2A\u503C\u7136\u540E\u8FDB\u884C\u4FDD\u5B58</span>
    cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">&quot;app_mode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetValue</span><span class="token punctuation">(</span><span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span>
    cfg<span class="token punctuation">.</span><span class="token function">SaveTo</span><span class="token punctuation">(</span><span class="token string">&quot;my.ini.local&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7A0B\u5E8F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u4E0B\u4EE5\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    $ go run main.go
    App Mode: development
    Data Path: /home/git/grafana
    Server Protocol: http
    Email Protocol: smtp
    Port Number: (int) 9999
    Enforce Domain: (bool) true

    $ cat my.ini.local
    # possible values : production, development
    app_mode = production

    [paths]
    # Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)
    data = /home/git/grafana
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> 1.1.2. \u9AD8\u7EA7\u7528\u6CD5</h3>`,12),k=s("\u6211\u5199\u4E86\u4E00\u4E2Ademo\u5982\u679C\u9700\u8981\u53EF\u4EE5\u4E0B\u8F7D "),v={href:"https://github.com/lu569368/configini",target:"_blank",rel:"noopener noreferrer"},m=s("\u9AD8\u7EA7\u7528\u6CD5"),b=s("\u8FD9\u4E2A\u53EA\u662F\u8FD9\u4E2A\u5305\u529F\u80FD\u7684\u5F88\u5C0F\u4E00\u90E8\u5206\uFF01\u5982\u679C\u60F3\u83B7\u53D6\u66F4\u591A\u7684\u529F\u80FD\u53EF\u4EE5\u67E5\u770B"),f={href:"https://ini.unknwon.io/docs",target:"_blank",rel:"noopener noreferrer"},g=s("\u5B98\u7F51\u6587\u6863"),h=n("h2",{id:"end-\u94FE\u63A5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#end-\u94FE\u63A5","aria-hidden":"true"},"#"),s(" END \u94FE\u63A5")],-1),_=n("ul",null,[n("li",null,[n("div",null,[n("a",{href:"75.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}"),n("a",{href:"77.md",style:{float:"right"}},"\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")])])],-1),q=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),x={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),P=s(")"),S=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),E={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},w=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function C(N,D){const t=e("ExternalLinkIcon"),o=e("RouterLink");return i(),c("div",null,[d,n("p",null,[k,n("a",v,[m,a(t)])]),n("p",null,[b,n("a",f,[g,a(t)])]),h,_,n("ul",null,[n("li",null,[n("p",null,[a(o,{to:"/Gomd_super/"},{default:u(()=>[q]),_:1})])]),n("li",null,[n("p",null,[n("a",x,[y,a(t)]),P])]),n("li",null,[n("p",null,[S,n("a",E,[w,a(t)])])])])])}const A=p(r,[["render",C],["__file","76.html.vue"]]);export{A as default};
