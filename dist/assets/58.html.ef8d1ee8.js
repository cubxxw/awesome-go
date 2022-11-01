import{_ as i,r as e,o,c,a as n,b as a,w as l,d as u,e as s}from"./app.f18da10e.js";const r={},d=u(`<h1 id="_1-io\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-io\u64CD\u4F5C" aria-hidden="true">#</a> 1. IO\u64CD\u4F5C</h1><h3 id="_1-1-1-\u8F93\u5165\u8F93\u51FA\u7684\u5E95\u5C42\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u8F93\u5165\u8F93\u51FA\u7684\u5E95\u5C42\u539F\u7406" aria-hidden="true">#</a> 1.1.1. \u8F93\u5165\u8F93\u51FA\u7684\u5E95\u5C42\u539F\u7406</h3><ul><li>\u7EC8\u7AEF\u5176\u5B9E\u662F\u4E00\u4E2A\u6587\u4EF6\uFF0C\u76F8\u5173\u5B9E\u4F8B\u5982\u4E0B\uFF1A <ul><li><code>os.Stdin</code>\uFF1A\u6807\u51C6\u8F93\u5165\u7684\u6587\u4EF6\u5B9E\u4F8B\uFF0C\u7C7B\u578B\u4E3A<code>*File</code></li><li><code>os.Stdout</code>\uFF1A\u6807\u51C6\u8F93\u51FA\u7684\u6587\u4EF6\u5B9E\u4F8B\uFF0C\u7C7B\u578B\u4E3A<code>*File</code></li><li><code>os.Stderr</code>\uFF1A\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u7684\u6587\u4EF6\u5B9E\u4F8B\uFF0C\u7C7B\u578B\u4E3A<code>*File</code></li></ul></li></ul><p>\u4EE5\u6587\u4EF6\u7684\u65B9\u5F0F\u64CD\u4F5C\u7EC8\u7AEF:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;os&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> buf <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
    os<span class="token punctuation">.</span>Stdin<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    os<span class="token punctuation">.</span>Stdin<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-\u6587\u4EF6\u64CD\u4F5C\u76F8\u5173api" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u6587\u4EF6\u64CD\u4F5C\u76F8\u5173api" aria-hidden="true">#</a> 1.1.2. \u6587\u4EF6\u64CD\u4F5C\u76F8\u5173API</h3><ul><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func Create(name string) (file *File, err Error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6839\u636E\u63D0\u4F9B\u7684\u6587\u4EF6\u540D\u521B\u5EFA\u65B0\u7684\u6587\u4EF6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6587\u4EF6\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u6743\u9650\u662F0666</li></ul></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func NewFile(fd uintptr, name string) *File
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6839\u636E\u6587\u4EF6\u63CF\u8FF0\u7B26\u521B\u5EFA\u76F8\u5E94\u7684\u6587\u4EF6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6587\u4EF6\u5BF9\u8C61</li></ul></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func Open(name string) (file *File, err Error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u53EA\u8BFB\u65B9\u5F0F\u6253\u5F00\u4E00\u4E2A\u540D\u79F0\u4E3Aname\u7684\u6587\u4EF6</li></ul></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func OpenFile(name string, flag int, perm uint32) (file *File, err Error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6253\u5F00\u540D\u79F0\u4E3Aname\u7684\u6587\u4EF6\uFF0Cflag\u662F\u6253\u5F00\u7684\u65B9\u5F0F\uFF0C\u53EA\u8BFB\u3001\u8BFB\u5199\u7B49\uFF0Cperm\u662F\u6743\u9650</li></ul></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (file *File) Write(b []byte) (n int, err Error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5199\u5165byte\u7C7B\u578B\u7684\u4FE1\u606F\u5230\u6587\u4EF6</li></ul></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (file *File) WriteAt(b []byte, off int64) (n int, err Error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5728\u6307\u5B9A\u4F4D\u7F6E\u5F00\u59CB\u5199\u5165byte\u7C7B\u578B\u7684\u4FE1\u606F</li></ul></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (file *File) WriteString(s string) (ret int, err Error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5199\u5165string\u4FE1\u606F\u5230\u6587\u4EF6</li></ul></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (file *File) Read(b []byte) (n int, err Error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8BFB\u53D6\u6570\u636E\u5230b\u4E2D</li></ul></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (file *File) ReadAt(b []byte, off int64) (n int, err Error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4ECEoff\u5F00\u59CB\u8BFB\u53D6\u6570\u636E\u5230b\u4E2D</li></ul></li><li><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func Remove(name string) Error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5220\u9664\u6587\u4EF6\u540D\u4E3Aname\u7684\u6587\u4EF6</li></ul></li></ul><h3 id="_1-1-3-\u6253\u5F00\u548C\u5173\u95ED\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u6253\u5F00\u548C\u5173\u95ED\u6587\u4EF6" aria-hidden="true">#</a> 1.1.3. \u6253\u5F00\u548C\u5173\u95ED\u6587\u4EF6</h3><p><code>os.Open()</code>\u51FD\u6570\u80FD\u591F\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\uFF0C\u8FD4\u56DE\u4E00\u4E2A<code>*File</code>\u548C\u4E00\u4E2A<code>err</code>\u3002\u5BF9\u5F97\u5230\u7684\u6587\u4EF6\u5B9E\u4F8B\u8C03\u7528close()\u65B9\u6CD5\u80FD\u591F\u5173\u95ED\u6587\u4EF6\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53EA\u8BFB\u65B9\u5F0F\u6253\u5F00\u5F53\u524D\u76EE\u5F55\u4E0B\u7684main.go\u6587\u4EF6</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./main.go&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;open file failed!, err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5173\u95ED\u6587\u4EF6</span>
    file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-\u5199\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-1-4-\u5199\u6587\u4EF6" aria-hidden="true">#</a> 1.1.4. \u5199\u6587\u4EF6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u65B0\u5EFA\u6587\u4EF6</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">&quot;./xxx.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        file<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;ab\\n&quot;</span><span class="token punctuation">)</span>
        file<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;cd\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-5-\u8BFB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-1-5-\u8BFB\u6587\u4EF6" aria-hidden="true">#</a> 1.1.5. \u8BFB\u6587\u4EF6</h3><p>\u6587\u4EF6\u8BFB\u53D6\u53EF\u4EE5\u7528file.Read()\u548Cfile.ReadAt()\uFF0C\u8BFB\u5230\u6587\u4EF6\u672B\u5C3E\u4F1A\u8FD4\u56DEio.EOF\u7684\u9519\u8BEF</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6253\u5F00\u6587\u4EF6</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./xxx.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;open file err :&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5B9A\u4E49\u63A5\u6536\u6587\u4EF6\u8BFB\u53D6\u7684\u5B57\u8282\u6570\u7EC4</span>
    <span class="token keyword">var</span> buf <span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
    <span class="token keyword">var</span> content <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> file<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            <span class="token comment">// \u8BFB\u53D6\u7ED3\u675F</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;read file err &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        content <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-6-\u62F7\u8D1D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-1-6-\u62F7\u8D1D\u6587\u4EF6" aria-hidden="true">#</a> 1.1.6. \u62F7\u8D1D\u6587\u4EF6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6253\u5F00\u6E90\u6587\u4EF6</span>
    srcFile<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./xxx.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u521B\u5EFA\u65B0\u6587\u4EF6</span>
    dstFile<span class="token punctuation">,</span> err2 <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">&quot;./abc2.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err2<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7F13\u51B2\u8BFB\u53D6</span>
    buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4ECE\u6E90\u6587\u4EF6\u8BFB\u6570\u636E</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> srcFile<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BFB\u53D6\u5B8C\u6BD5&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//\u5199\u51FA\u53BB</span>
        dstFile<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    srcFile<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    dstFile<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-7-bufio" tabindex="-1"><a class="header-anchor" href="#_1-1-7-bufio" aria-hidden="true">#</a> 1.1.7. bufio</h3><ul><li>bufio\u5305\u5B9E\u73B0\u4E86\u5E26\u7F13\u51B2\u533A\u7684\u8BFB\u5199\uFF0C\u662F\u5BF9\u6587\u4EF6\u8BFB\u5199\u7684\u5C01\u88C5</li><li>bufio\u7F13\u51B2\u5199\u6570\u636E</li></ul><table><thead><tr><th>\u6A21\u5F0F</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>os.O_WRONLY</td><td>\u53EA\u5199</td></tr><tr><td>os.O_CREATE</td><td>\u521B\u5EFA\u6587\u4EF6</td></tr><tr><td>os.O_RDONLY</td><td>\u53EA\u8BFB</td></tr><tr><td>os.O_RDWR</td><td>\u8BFB\u5199</td></tr><tr><td>os.O_TRUNC</td><td>\u6E05\u7A7A</td></tr><tr><td>os.O_APPEND</td><td>\u8FFD\u52A0</td></tr></tbody></table><ul><li>bufio\u8BFB\u6570\u636E</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;bufio&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">wr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53C2\u65702\uFF1A\u6253\u5F00\u6A21\u5F0F\uFF0C\u6240\u6709\u6A21\u5F0Fd\u90FD\u5728\u4E0A\u9762</span>
    <span class="token comment">// \u53C2\u65703\u662F\u6743\u9650\u63A7\u5236</span>
    <span class="token comment">// w\u5199 r\u8BFB x\u6267\u884C   w  2   r  4   x  1</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;./xxx.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_CREATE<span class="token operator">|</span>os<span class="token punctuation">.</span>O_WRONLY<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u83B7\u53D6writer\u5BF9\u8C61</span>
    writer <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        writer<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">&quot;hello\\n&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5237\u65B0\u7F13\u51B2\u533A\uFF0C\u5F3A\u5236\u5199\u51FA</span>
    writer<span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">re</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;./xxx.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        line<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">re</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-8-ioutil\u5DE5\u5177\u5305" tabindex="-1"><a class="header-anchor" href="#_1-1-8-ioutil\u5DE5\u5177\u5305" aria-hidden="true">#</a> 1.1.8. ioutil\u5DE5\u5177\u5305</h3><ul><li>\u5DE5\u5177\u5305\u5199\u6587\u4EF6</li><li>\u5DE5\u5177\u5305\u8BFB\u53D6\u6587\u4EF6</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;io/ioutil&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">wr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">WriteFile</span><span class="token punctuation">(</span><span class="token string">&quot;./yyy.txt&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;www.5lmh.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">re</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   content<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadFile</span><span class="token punctuation">(</span><span class="token string">&quot;./yyy.txt&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">re</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-9-\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_1-1-9-\u4F8B\u5B50" aria-hidden="true">#</a> 1.1.9. \u4F8B\u5B50</h3><h4 id="\u5B9E\u73B0\u4E00\u4E2Acat\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2Acat\u547D\u4EE4" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2Acat\u547D\u4EE4</h4><p>\u4F7F\u7528\u6587\u4EF6\u64CD\u4F5C\u76F8\u5173\u77E5\u8BC6\uFF0C\u6A21\u62DF\u5B9E\u73B0linux\u5E73\u53F0cat\u547D\u4EE4\u7684\u529F\u80FD\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;bufio&quot;</span>
    <span class="token string">&quot;flag&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// cat\u547D\u4EE4\u5B9E\u73B0</span>
<span class="token keyword">func</span> <span class="token function">cat</span><span class="token punctuation">(</span>r <span class="token operator">*</span>bufio<span class="token punctuation">.</span>Reader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        buf<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">ReadBytes</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u6CE8\u610F\u662F\u5B57\u7B26</span>
        <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u89E3\u6790\u547D\u4EE4\u884C\u53C2\u6570</span>
    <span class="token keyword">if</span> flag<span class="token punctuation">.</span><span class="token function">NArg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u6CA1\u6709\u53C2\u6570\u9ED8\u8BA4\u4ECE\u6807\u51C6\u8F93\u5165\u8BFB\u53D6\u5185\u5BB9</span>
        <span class="token function">cat</span><span class="token punctuation">(</span>bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4F9D\u6B21\u8BFB\u53D6\u6BCF\u4E2A\u6307\u5B9A\u6587\u4EF6\u7684\u5185\u5BB9\u5E76\u6253\u5370\u5230\u7EC8\u7AEF</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> flag<span class="token punctuation">.</span><span class="token function">NArg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>flag<span class="token punctuation">.</span><span class="token function">Arg</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">,</span> <span class="token string">&quot;reading from %s failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> flag<span class="token punctuation">.</span><span class="token function">Arg</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token function">cat</span><span class="token punctuation">(</span>bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="57.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="59.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,31),k=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),v={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=s(")"),f=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),g={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},h=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function y(w,x){const p=e("RouterLink"),t=e("ExternalLinkIcon");return o(),c("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:l(()=>[k]),_:1})])]),n("li",null,[n("p",null,[n("a",v,[m,a(t)]),b])]),n("li",null,[n("p",null,[f,n("a",g,[h,a(t)])])])])])}const _=i(r,[["render",y],["__file","58.html.vue"]]);export{_ as default};
