<template><div><h1 id="_1-高效读取配置信息" tabindex="-1"><a class="header-anchor" href="#_1-高效读取配置信息" aria-hidden="true">#</a> 1. 高效读取配置信息</h1>
<h3 id="_1-1-1-开始使用" tabindex="-1"><a class="header-anchor" href="#_1-1-1-开始使用" aria-hidden="true">#</a> 1.1.1. 开始使用</h3>
<p>我们将通过一个非常简单的例子来了解如何使用。</p>
<p>首先，我们需要在任意目录创建两个文件（my.ini 和 main.go），在这里我们选择 /tmp/ini 目录。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ mkdir -p /tmp/ini
    $ cd /tmp/ini
    $ touch my.ini main.go
    $ tree .
    .
    ├── main.go
    └── my.ini

    0 directories, 2 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们编辑 my.ini 文件并输入以下内容（<em>部分内容来自 Grafana</em>）。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    # possible values : production, development
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很好，接下来我们需要编写 main.go 文件来操作刚才创建的配置文件。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"os"</span>

    <span class="token string">"gopkg.in/ini.v1"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cfg<span class="token punctuation">,</span> err <span class="token operator">:=</span> ini<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"my.ini"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Fail to read file: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 典型读取操作，默认分区可以使用空字符串表示</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"App Mode:"</span><span class="token punctuation">,</span> cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">"app_mode"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Data Path:"</span><span class="token punctuation">,</span> cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">"paths"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">"data"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 我们可以做一些候选值限制的操作</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Server Protocol:"</span><span class="token punctuation">,</span>
        cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">"server"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">"protocol"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">In</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"http"</span><span class="token punctuation">,</span> <span class="token string">"https"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 如果读取的值不在候选列表内，则会回退使用提供的默认值</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Email Protocol:"</span><span class="token punctuation">,</span>
        cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">"server"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">"protocol"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">In</span><span class="token punctuation">(</span><span class="token string">"smtp"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"imap"</span><span class="token punctuation">,</span> <span class="token string">"smtp"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 试一试自动类型转换</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Port Number: (%[1]T) %[1]d\n"</span><span class="token punctuation">,</span> cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">"server"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">"http_port"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MustInt</span><span class="token punctuation">(</span><span class="token number">9999</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Enforce Domain: (%[1]T) %[1]v\n"</span><span class="token punctuation">,</span> cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">"server"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">"enforce_domain"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MustBool</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 差不多了，修改某个值然后进行保存</span>
    cfg<span class="token punctuation">.</span><span class="token function">Section</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token string">"app_mode"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetValue</span><span class="token punctuation">(</span><span class="token string">"production"</span><span class="token punctuation">)</span>
    cfg<span class="token punctuation">.</span><span class="token function">SaveTo</span><span class="token punctuation">(</span><span class="token string">"my.ini.local"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行程序，我们可以看下以下输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    $ go run main.go
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-高级用法" tabindex="-1"><a class="header-anchor" href="#_1-1-2-高级用法" aria-hidden="true">#</a> 1.1.2. 高级用法</h3>
<p>我写了一个demo如果需要可以下载 <a href="https://github.com/lu569368/configini" target="_blank" rel="noopener noreferrer">高级用法<ExternalLinkIcon/></a></p>
<p>这个只是这个包功能的很小一部分！如果想获取更多的功能可以查看<a href="https://ini.unknwon.io/docs" target="_blank" rel="noopener noreferrer">官网文档<ExternalLinkIcon/></a></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '75.md' style='float:left'>⬆️上一节🔗</a><a href = '77.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


