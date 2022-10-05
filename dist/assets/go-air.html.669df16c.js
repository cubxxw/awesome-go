import{_ as r,r as l,o as t,c as d,a,b as i,e as n,d as e}from"./app.005d7ba9.js";const o={},c=n(`<h1 id="go-air\u5B9E\u73B0\u70ED\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#go-air\u5B9E\u73B0\u70ED\u52A0\u8F7D" aria-hidden="true">#</a> go-air\u5B9E\u73B0\u70ED\u52A0\u8F7D</h1><p>[toc]</p><h2 id="go-air" tabindex="-1"><a class="header-anchor" href="#go-air" aria-hidden="true">#</a> go air</h2><p>\u2601\uFE0F \u70ED\u91CD\u8F7D Go \u5E94\u7528\u7684\u5DE5\u5177</p><h2 id="\u7279\u8272" tabindex="-1"><a class="header-anchor" href="#\u7279\u8272" aria-hidden="true">#</a> \u7279\u8272</h2><ul><li>\u5F69\u8272\u7684\u65E5\u5FD7\u8F93\u51FA</li><li>\u81EA\u5B9A\u4E49\u6784\u5EFA\u6216\u5FC5\u8981\u7684\u547D\u4EE4</li><li>\u652F\u6301\u5916\u90E8\u5B50\u76EE\u5F55</li><li>\u5728 Air \u542F\u52A8\u4E4B\u540E\uFF0C\u5141\u8BB8\u76D1\u542C\u65B0\u521B\u5EFA\u7684\u8DEF\u5F84</li><li>\u66F4\u68D2\u7684\u6784\u5EFA\u8FC7\u7A0B</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><blockquote><p>go-air\u652F\u6301\u51E0\u79CD\u5B89\u88C5\u65B9\u5F0F</p></blockquote><h3 id="\u63A8\u8350\u4F7F\u7528-install-sh" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u4F7F\u7528-install-sh" aria-hidden="true">#</a> \u63A8\u8350\u4F7F\u7528 install.sh</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># binary \u6587\u4EF6\u4F1A\u662F\u5728 $(go env GOPATH)/bin/air
curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# \u6216\u8005\u628A\u5B83\u5B89\u88C5\u5728 ./bin/ \u8DEF\u5F84\u4E0B
curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s

air -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=e("P.S. \u975E\u5E38\u611F\u8C22 mattn \u7684 "),u={href:"https://github.com/cosmtrek/air/pull/1",target:"_blank",rel:"noopener noreferrer"},v=e("PR"),m=e("\uFF0C\u4F7F\u5F97 Air \u652F\u6301 Windows \u5E73\u53F0\u3002"),b=n(`<h3 id="\u4F7F\u7528-go-install" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-go-install" aria-hidden="true">#</a> \u4F7F\u7528 go install</h3><blockquote><p>\u5982\u679C\u56E0\u4E3A\u7F51\u7EDC\u95EE\u9898\u6CA1\u529E\u6CD5\u4E0B\u8F7D\uFF0C\u8BF7\u770B\u4E0B\u9762\u7684\u914D\u7F6E\u955C\u50CF\u6E90\u7684\u65B9\u6CD5</p></blockquote><p>\u4F7F\u7528 Go \u7684\u7248\u672C\u4E3A 1.16 \u6216\u66F4\u9AD8:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go install github.com/cosmtrek/air@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://github.com/cosmtrek/air/raw/master/docs/air.png" alt="air"></p><h3 id="\u914D\u7F6E\u955C\u50CF\u6E90" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u955C\u50CF\u6E90" aria-hidden="true">#</a> \u914D\u7F6E\u955C\u50CF\u6E90</h3><blockquote><p>\u63D0\u9192 \u26A0\uFE0F</p><ul><li>\u5B98\u65B9\u63D0\u4F9B\u7684\u5168\u7403\u6E90\u901F\u5EA6\u4E5F\u5F88\u5FEB</li><li>windown\u4E5F\u53EF\u4EE5\u4F7F\u7528Linux\u547D\u4EE4\u5B89\u88C5 \u2014 \u5C31\u662F<code>sh</code>\uFF0C\u5177\u4F53\u770B\u6211\u7684Linux\u5B66\u4E60</li></ul></blockquote><p><strong>\u5728 Linux \u6216 macOS \u4E0A\u9762\uFF0C\u9700\u8981\u8FD0\u884C\u4E0B\u9762\u547D\u4EE4</strong>\uFF08\u6216\u8005\uFF0C\u53EF\u4EE5\u628A\u4EE5\u4E0B\u547D\u4EE4\u5199\u5230 <code>.bashrc</code> \u6216 <code>.bash_profile</code> \u6587\u4EF6\u4E2D\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u7528 Go Modules \u529F\u80FD</span>
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on

<span class="token comment"># \u914D\u7F6E GOPROXY \u73AF\u5883\u53D8\u91CF\uFF0C\u4EE5\u4E0B\u4E09\u9009\u4E00</span>

<span class="token comment"># 1. \u4E03\u725B CDN</span>
go <span class="token function">env</span> <span class="token parameter variable">-w</span>  <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct

<span class="token comment"># 2. \u963F\u91CC\u4E91</span>
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://mirrors.aliyun.com/goproxy/,direct

<span class="token comment"># 3. \u5B98\u65B9</span>
go <span class="token function">env</span> <span class="token parameter variable">-w</span>  <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6700\u597D\u786E\u8BA4\u4EE5\u4E0B</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go <span class="token function">env</span> <span class="token operator">|</span> <span class="token function">grep</span> GOPROXY
<span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span><span class="token string">&quot;https://goproxy.cn&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5728 Windows \u4E0A\uFF0C\u9700\u8981\u8FD0\u884C\u4E0B\u9762\u547D\u4EE4\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u7528 Go Modules \u529F\u80FD</span>
<span class="token variable">$env</span>:GO111MODULE<span class="token operator">=</span><span class="token string">&quot;on&quot;</span>

<span class="token comment"># \u914D\u7F6E GOPROXY \u73AF\u5883\u53D8\u91CF\uFF0C\u4EE5\u4E0B\u4E09\u9009\u4E00</span>

<span class="token comment"># 1. \u4E03\u725B CDN</span>
<span class="token variable">$env</span>:GOPROXY<span class="token operator">=</span><span class="token string">&quot;https://goproxy.cn,direct&quot;</span>

<span class="token comment"># 2. \u963F\u91CC\u4E91</span>
<span class="token variable">$env</span>:GOPROXY<span class="token operator">=</span><span class="token string">&quot;https://mirrors.aliyun.com/goproxy/,direct&quot;</span>

<span class="token comment"># 3. \u5B98\u65B9</span>
<span class="token variable">$env</span>:GOPROXY<span class="token operator">=</span><span class="token string">&quot;https://goproxy.io,direct&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5\u4E00\u4E0B</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/cosmtrek/air@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u672C\u5730\u5982\u679C\u6709\u6A21\u5757\u7F13\u5B58\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u6E05\u7A7A <code>go clean --modcache</code> \u3002</p><p>\u26A1 <code>go install</code>\u4E00\u822C\u5B89\u88C5\u5230\u73AF\u5883\u53D8\u91CF\u7684<code>bin</code>\u76EE\u5F55\u4E0B\u9762\uFF0C\u53EF\u4EE5\u7528\u4E0B\u9762\u547D\u4EE4\u67E5\u770BGo\u8BED\u8A00\u73AF\u5883\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="http://sm.nsddd.top/smimage-20221004184910837.png?xxw@nsddd.top" alt="image-20221004184910837"></p><h3 id="\u4F7F\u7528docker" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528docker" aria-hidden="true">#</a> \u4F7F\u7528Docker</h3>`,18),h=e("\u8BF7\u62C9\u53D6\u8FD9\u4E2A Docker \u955C\u50CF "),g={href:"https://hub.docker.com/r/cosmtrek/air",target:"_blank",rel:"noopener noreferrer"},k=e("cosmtrek/air"),x=e("."),_=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-w</span> <span class="token string">&quot;&lt;PROJECT&gt;&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token string">&quot;air_wd=&lt;PROJECT&gt;&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>:<span class="token operator">&lt;</span>PROJECT<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>PORT<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>APP SERVER PORT<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
    cosmtrek/air
    <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>CONF<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5982\uFF0C\u6211\u7684\u9879\u76EE\u4E4B\u4E00\u662F\u5728 Docker \u4E0A\u8FD0\u884C\u7684\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-w</span> <span class="token string">&quot;/go/src/github.com/cosmtrek/hub&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>:/go/src/github.com/cosmtrek/hub <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">9090</span>:9090 <span class="token punctuation">\\</span>
    cosmtrek/air
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Windows\u4E0A\u9762\u6BCF\u6B21\u90FD\u9700\u8981\u542F\u52A8docker\uFF0C\u6240\u4EE5\u6211\u4E0D\u60F3\u9009\u62E9\u8FD9\u4E2A</p></blockquote><h2 id="\u2728-beta-\u7248\u672C\u7684\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u2728-beta-\u7248\u672C\u7684\u7279\u6027" aria-hidden="true">#</a> \u2728 beta \u7248\u672C\u7684\u7279\u6027</h2><p>\u652F\u6301\u4F7F\u7528\u53C2\u6570\u6765\u914D\u7F6E air \u5B57\u6BB5:</p><p>\u5982\u679C\u4F60\u53EA\u662F\u60F3\u914D\u7F6E\u6784\u5EFA\u547D\u4EE4\u548C\u8FD0\u884C\u547D\u4EE4\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u800C\u65E0\u9700\u914D\u7F6E\u6587\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>air --build.cmd &quot;go build -o bin/api cmd/run.go&quot; --build.bin &quot;./bin/api&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u4EE5\u5217\u8868\u5F62\u5F0F\u8F93\u5165\u7684\u53C2\u6570\uFF0C\u4F7F\u7528\u9017\u53F7\u6765\u5206\u9694\u9879\u76EE:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>air --build.cmd &quot;go build -o bin/api cmd/run.go&quot; --build.bin &quot;./bin/api&quot; --build.exclude_dir &quot;templates,build&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><p>\u60A8\u53EF\u4EE5\u6DFB\u52A0 <code>alias air=&#39;~/.air&#39;</code> \u5230\u60A8\u7684 <code>.bashrc</code> \u6216 <code>.zshrc</code> \u540E\u7F00\u7684\u6587\u4EF6.</p><p>\u9996\u5148\uFF0C\u8FDB\u5165\u4F60\u7684\u9879\u76EE\u6587\u4EF6\u5939</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /path/to/your_project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u662F\u6267\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4F18\u5148\u5728\u5F53\u524D\u8DEF\u5F84\u67E5\u627E \`.air.toml\` \u540E\u7F00\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684
air -c .air.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u53EF\u4EE5\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u521D\u59CB\u5316\uFF0C\u628A\u9ED8\u8BA4\u914D\u7F6E\u6DFB\u52A0\u5230\u5F53\u524D\u8DEF\u5F84\u4E0B\u7684<code>.air.toml</code> \u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>air init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E4B\u540E\uFF0C\u4F60\u53EA\u9700\u6267\u884C <code>air</code> \u547D\u4EE4\uFF0C\u65E0\u9700\u6DFB\u52A0\u989D\u5916\u7684\u53D8\u91CF\uFF0C\u5B83\u5C31\u80FD\u4F7F\u7528 <code>.air.toml</code> \u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>air
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),f=e("\u5982\u6B32\u4FEE\u6539\u914D\u7F6E\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003 "),O={href:"https://github.com/cosmtrek/air/blob/master/air_example.toml",target:"_blank",rel:"noopener noreferrer"},q=e("air_example.toml"),P=e(" \u6587\u4EF6\u3002"),G=n(`<h3 id="\u8FD0\u884C\u65F6\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u65F6\u53C2\u6570" aria-hidden="true">#</a> \u8FD0\u884C\u65F6\u53C2\u6570</h3><p>\u60A8\u53EF\u4EE5\u901A\u8FC7\u628A\u53D8\u91CF\u6DFB\u52A0\u5728 air \u547D\u4EE4\u4E4B\u540E\u6765\u4F20\u9012\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4F1A\u6267\u884C ./tmp/main bench
air bench

# \u4F1A\u6267\u884C ./tmp/main server --port 8080
air server --port 8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can separate the arguments passed for the air command and the built binary with <code>--</code> argument.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4F1A\u8FD0\u884C ./tmp/main -h
air -- -h

# \u4F1A\u4F7F\u7528\u4E2A\u6027\u5316\u914D\u7F6E\u6765\u8FD0\u884C air\uFF0C\u7136\u540E\u628A -h \u540E\u7684\u53D8\u91CF\u548C\u503C\u6DFB\u52A0\u5230\u8FD0\u884C\u7684\u53C2\u6570\u4E2D
air -c .air.toml -- -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker-compose</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services:
  my-project-with-air:
    image: cosmtrek/air
    # working_dir value has to be the same of mapped volume
    working_dir: /project-package
    ports:
      - &lt;any&gt;:&lt;any&gt;
    environment:
      - ENV_A=\${ENV_A}
      - ENV_B=\${ENV_B}
      - ENV_C=\${ENV_C}
    volumes:
      - ./project-relative-path/:/project-package/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5" aria-hidden="true">#</a> \u8C03\u8BD5</h3><p>\u8FD0\u884C <code>air -d</code> \u547D\u4EE4\u80FD\u6253\u5370\u6240\u6709\u65E5\u5FD7\u3002</p><h2 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h2><h3 id="\u9047\u5230-command-not-found-air-\u6216-no-such-file-or-directory-\u8BE5\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230-command-not-found-air-\u6216-no-such-file-or-directory-\u8BE5\u600E\u4E48\u529E" aria-hidden="true">#</a> \u9047\u5230 &quot;command not found: air&quot; \u6216 &quot;No such file or directory&quot; \u8BE5\u600E\u4E48\u529E\uFF1F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export GOPATH=$HOME/xxxxx
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
export PATH=$PATH:$(go env GOPATH)/bin &lt;---- \u8BF7\u786E\u8BA4\u8FD9\u884C\u5728\u60A8\u7684\u914D\u7F6E\u4FE1\u606F\u4E2D\uFF01\uFF01\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><p>\u8BF7\u6CE8\u610F\uFF1A\u8FD9\u9700\u8981 Go 1.16+ \uFF0C\u56E0\u4E3A\u6211\u4F7F\u7528 <code>go mod</code> \u6765\u7BA1\u7406\u4F9D\u8D56\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 1. \u9996\u5148\u590D\u523B\uFF08fork\uFF09\u8FD9\u4E2A\u9879\u76EE

# 2. \u5176\u6B21\u514B\u9686\uFF08clone\uFF09\u5B83
mkdir -p $GOPATH/src/github.com/cosmtrek
cd $GOPATH/src/github.com/cosmtrek
git clone git@github.com:&lt;YOUR USERNAME&gt;/air.git

# 3. \u518D\u6B21\u5B89\u88C5\u4F9D\u8D56
cd air
make ci

# 4. \u8FD9\u6837\u5C31\u53EF\u4EE5\u5FEB\u4E50\u5730\u63A2\u7D22\u548C\u73A9\u800D\u5566\uFF01
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u987A\u4FBF\u8BF4\u4E00\u53E5: \u6B22\u8FCE PR~</p><h3 id="\u53D1\u5E03\u65B0\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u65B0\u7248\u672C" aria-hidden="true">#</a> \u53D1\u5E03\u65B0\u7248\u672C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 1. checkout \u5230 master \u5206\u652F
git checkout master

# 2. \u6DFB\u52A0\u9700\u8981\u53D1\u5E03\u7684\u7248\u672C\u53F7
git tag v1.xx.x

# 3. \u63A8\u9001\u5230\u8FDC\u7A0B
git push origin v1.xx.x

ci \u4F1A\u52A0\u5DE5\u548C\u5904\u7406\uFF0C\u7136\u540E\u4F1A\u53D1\u5E03\u65B0\u7248\u672C\u3002\u7B49\u5F85\u5927\u7EA6\u4E94\u5206\u949F\uFF0C\u4F60\u5C31\u80FD\u83B7\u53D6\u5230\u65B0\u7248\u672C\u4E86\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function w(R,$){const s=l("ExternalLinkIcon");return t(),d("div",null,[c,a("p",null,[p,a("a",u,[v,i(s)]),m]),b,a("p",null,[h,a("a",g,[k,i(s)]),x]),_,a("p",null,[f,a("a",O,[q,i(s)]),P]),G])}const E=r(o,[["render",w],["__file","go-air.html.vue"]]);export{E as default};
