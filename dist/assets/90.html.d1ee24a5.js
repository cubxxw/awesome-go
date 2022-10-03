import{_ as o,r as t,o as c,c as l,a as n,b as a,w as u,e as i,d as s}from"./app.814033e1.js";const r={},d=i(`<h1 id="\u603B\u7ED3go\u5BF9\u6587\u4EF6\u7684\u8BFB\u53D6\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3go\u5BF9\u6587\u4EF6\u7684\u8BFB\u53D6\u65B9\u5F0F" aria-hidden="true">#</a> \u603B\u7ED3Go\u5BF9\u6587\u4EF6\u7684\u8BFB\u53D6\u65B9\u5F0F</h1><p>[toc]</p><p>Go \u4E2D\u5BF9\u6587\u4EF6\u5185\u5BB9\u8BFB\u5199\u7684\u65B9\u6CD5\uFF0C\u975E\u5E38\u5730\u591A\uFF0C\u5176\u4E2D\u5927\u591A\u6570\u662F\u57FA\u4E8E syscall \u6216\u8005 os \u5E93\u7684\u9AD8\u7EA7\u5C01\u88C5\uFF0C\u4E0D\u540C\u7684\u5E93\uFF0C\u9002\u7528\u7684\u573A\u666F\u53C8\u4E0D\u592A\u4E00\u6837\uFF0C\u4E3A\u514D\u65B0\u624B\u5728\u8FD9\u5757\u4E0A\u88C1\u8DDF\u5934\uFF0C\u6211\u82B1\u4E86\u70B9\u65F6\u95F4\u628A\u8FD9\u4E9B\u5185\u5BB9\u68B3\u7406\u4E86\u4E0B\u3002</p><p><img src="https://s2.loli.net/2022/04/11/AVKmntlkwi1GBMy.png" alt="http://image.iswbm.com/20211228231043.png"></p><h2 id="_1-\u6574\u4E2A\u6587\u4EF6\u8BFB\u53D6\u5165\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#_1-\u6574\u4E2A\u6587\u4EF6\u8BFB\u53D6\u5165\u5185\u5B58" aria-hidden="true">#</a> 1. \u6574\u4E2A\u6587\u4EF6\u8BFB\u53D6\u5165\u5185\u5B58</h2><p>\u76F4\u63A5\u5C06\u6570\u636E\u76F4\u63A5\u8BFB\u53D6\u5165\u5185\u5B58\uFF0C\u662F\u6548\u7387\u6700\u9AD8\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u4F46\u6B64\u79CD\u65B9\u5F0F\uFF0C\u4EC5\u9002\u7528\u4E8E\u5C0F\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u5927\u6587\u4EF6\uFF0C\u5219\u4E0D\u9002\u5408\uFF0C\u56E0\u4E3A\u6BD4\u8F83\u6D6A\u8D39\u5185\u5B58\u3002</p><h3 id="_1-1-\u76F4\u63A5\u6307\u5B9A\u6587\u4EF6\u540D\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#_1-1-\u76F4\u63A5\u6307\u5B9A\u6587\u4EF6\u540D\u8BFB\u53D6" aria-hidden="true">#</a> 1.1 \u76F4\u63A5\u6307\u5B9A\u6587\u4EF6\u540D\u8BFB\u53D6</h3><p>\u6709\u4E24\u79CD\u65B9\u6CD5</p><p><strong>\u7B2C\u4E00\u79CD\uFF1A\u4F7F\u7528 os.ReadFile</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;fmt&quot;
    &quot;os&quot;
)

func main() {
    content, err := os.ReadFile(&quot;a.txt&quot;)
    if err != nil {
        panic(err)
    }
    fmt.Println(string(content))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7B2C\u4E8C\u79CD\uFF1A\u4F7F\u7528 ioutil.ReadFile</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;io/ioutil&quot;
    &quot;fmt&quot;
)

func main() {
    content, err := ioutil.ReadFile(&quot;a.txt&quot;)
    if err != nil {
        panic(err)
    }
    fmt.Println(string(content))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u5728 Go 1.16 \u5F00\u59CB\uFF0Cioutil.ReadFile \u5C31\u7B49\u4EF7\u4E8E os.ReadFile\uFF0C\u4E8C\u8005\u662F\u5B8C\u5168\u4E00\u81F4\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// ReadFile reads the file named by filename and returns the contents.
// A successful call returns err == nil, not err == EOF. Because ReadFile
// reads the whole file, it does not treat an EOF from Read as an error
// to be reported.
//
// As of Go 1.16, this function simply calls os.ReadFile.
func ReadFile(filename string) ([]byte, error) {
    return os.ReadFile(filename)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u5148\u521B\u5EFA\u53E5\u67C4\u518D\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5148\u521B\u5EFA\u53E5\u67C4\u518D\u8BFB\u53D6" aria-hidden="true">#</a> 1.2 \u5148\u521B\u5EFA\u53E5\u67C4\u518D\u8BFB\u53D6</h3><p>\u5982\u679C\u4EC5\u662F\u8BFB\u53D6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u9AD8\u7EA7\u51FD\u6570 os.Open</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
<span class="token string">&quot;os&quot;</span>
<span class="token string">&quot;io/ioutil&quot;</span>
<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    content<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u6240\u4EE5\u8BF4\u5B83\u662F\u9AD8\u7EA7\u51FD\u6570\uFF0C\u662F\u56E0\u4E3A\u5B83\u662F\u53EA\u8BFB\u6A21\u5F0F\u7684 os.OpenFile</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Open opens the named file for reading. If successful, methods on
// the returned file can be used for reading; the associated file
// descriptor has mode O_RDONLY.
// If there is an error, it will be of type *PathError.
func Open(name string) (*File, error) {
    return OpenFile(name, O_RDONLY, 0)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u6B64\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 os.OpenFile\uFF0C\u53EA\u662F\u8981\u591A\u52A0\u4E24\u4E2A\u53C2\u6570</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io/ioutil&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">OpenFile</span><span class="token punctuation">(</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>O_RDONLY<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    content<span class="token punctuation">,</span> err <span class="token operator">:=</span> ioutil<span class="token punctuation">.</span><span class="token function">ReadAll</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u6BCF\u6B21\u53EA\u8BFB\u53D6\u4E00\u884C" tabindex="-1"><a class="header-anchor" href="#_2-\u6BCF\u6B21\u53EA\u8BFB\u53D6\u4E00\u884C" aria-hidden="true">#</a> 2. \u6BCF\u6B21\u53EA\u8BFB\u53D6\u4E00\u884C</h2><p>\u4E00\u6B21\u6027\u8BFB\u53D6\u6240\u6709\u7684\u6570\u636E\uFF0C\u592A\u8017\u8D39\u5185\u5B58\uFF0C\u56E0\u6B64\u53EF\u4EE5\u6307\u5B9A\u6BCF\u6B21\u53EA\u8BFB\u53D6\u4E00\u884C\u6570\u636E\u3002\u65B9\u6CD5\u6709\u4E09\u79CD\uFF1A</p>`,23),k=n("li",null,"bufio.ReadLine()",-1),v=s("bufio.ReadBytes(\u2018"),m={href:"https://golang.iswbm.com/c05/c05_04.html#id5",target:"_blank",rel:"noopener noreferrer"},b=s(":raw-latex:"),f=n("code",null,"\\n",-1),g=s("\u2019)"),h=s("bufio.ReadString(\u2018"),y={href:"https://golang.iswbm.com/c05/c05_04.html#id7",target:"_blank",rel:"noopener noreferrer"},_=s(":raw-latex:"),w=n("code",null,"\\n",-1),q=s("\u2019)"),x=i(`<p>\u5728 bufio \u7684\u6E90\u7801\u6CE8\u91CA\u4E2D\uFF0C\u66FE\u8BF4\u9053 bufio.ReadLine() \u662F\u4F4E\u7EA7\u5E93\uFF0C\u4E0D\u592A\u9002\u5408\u666E\u901A\u7528\u6237\u4F7F\u7528\uFF0C\u66F4\u63A8\u8350\u7528\u6237\u4F7F\u7528 bufio.ReadBytes \u548C bufio.ReadString \u53BB\u8BFB\u53D6\u5355\u884C\u6570\u636E\u3002</p><p>\u56E0\u6B64\uFF0C\u8FD9\u91CC\u4E0D\u518D\u4ECB\u7ECD bufio.ReadLine()</p><h3 id="_2-1-\u4F7F\u7528-bufio-readbytes" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4F7F\u7528-bufio-readbytes" aria-hidden="true">#</a> 2.1 \u4F7F\u7528 bufio.ReadBytes</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;bufio&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;os&quot;</span>
    <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u53E5\u67C4</span>
    fi<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;christmas_apple.py&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u521B\u5EFA Reader</span>
    r <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>fi<span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        lineBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">ReadBytes</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>
        line <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">TrimSpace</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>lineBytes<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u4F7F\u7528-bufio-readstring" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4F7F\u7528-bufio-readstring" aria-hidden="true">#</a> 2.2 \u4F7F\u7528 bufio.ReadString</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;bufio&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;os&quot;</span>
    <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u53E5\u67C4</span>
    fi<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u521B\u5EFA Reader</span>
    r <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>fi<span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        line<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>
        line <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">TrimSpace</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> err <span class="token operator">==</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6BCF\u6B21\u53EA\u8BFB\u53D6\u56FA\u5B9A\u5B57\u8282\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u6BCF\u6B21\u53EA\u8BFB\u53D6\u56FA\u5B9A\u5B57\u8282\u6570" aria-hidden="true">#</a> 3. \u6BCF\u6B21\u53EA\u8BFB\u53D6\u56FA\u5B9A\u5B57\u8282\u6570</h2><p>\u6BCF\u6B21\u4EC5\u8BFB\u53D6\u4E00\u884C\u6570\u636E\uFF0C\u53EF\u4EE5\u89E3\u51B3\u5185\u5B58\u5360\u7528\u8FC7\u5927\u7684\u95EE\u9898\uFF0C\u4F46\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u6587\u4EF6\u90FD\u6709\u6362\u884C\u7B26 <code>\\n</code>\u3002</p><p>\u56E0\u6B64\u5BF9\u4E8E\u4E00\u4E9B\u4E0D\u6362\u884C\u7684\u5927\u6587\u4EF6\u6765\u8BF4\uFF0C\u8FD8\u5F97\u518D\u60F3\u60F3\u5176\u4ED6\u529E\u6CD5\u3002</p><h3 id="_3-1-\u4F7F\u7528-os-\u5E93" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4F7F\u7528-os-\u5E93" aria-hidden="true">#</a> 3.1 \u4F7F\u7528 os \u5E93</h3><p>\u901A\u7528\u7684\u505A\u6CD5\u662F\uFF1A</p><ul><li>\u5148\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u53E5\u67C4\uFF0C\u53EF\u4EE5\u4F7F\u7528 os.Open \u6216\u8005 os.OpenFile</li><li>\u7136\u540E bufio.NewReader \u521B\u5EFA\u4E00\u4E2A Reader</li><li>\u7136\u540E\u5728 for \u5FAA\u73AF\u91CC\u8C03\u7528 Reader \u7684 Read \u51FD\u6570\uFF0C\u6BCF\u6B21\u4EC5\u8BFB\u53D6\u56FA\u5B9A\u5B57\u8282\u6570\u91CF\u7684\u6570\u636E\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;bufio&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u53E5\u67C4</span>
    fi<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;a.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u521B\u5EFA Reader</span>
    r <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>fi<span class="token punctuation">)</span>

    <span class="token comment">// \u6BCF\u6B21\u8BFB\u53D6 1024 \u4E2A\u5B57\u8282</span>
    buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
            <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u4F7F\u7528-syscall-\u5E93" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4F7F\u7528-syscall-\u5E93" aria-hidden="true">#</a> 3.2 \u4F7F\u7528 syscall \u5E93</h3><p>os \u5E93\u672C\u8D28\u4E0A\u4E5F\u662F\u8C03\u7528 syscall \u5E93\uFF0C\u4F46\u7531\u4E8E syscall \u8FC7\u4E8E\u5E95\u5C42\uFF0C\u5982\u975E\u7279\u6B8A\u9700\u8981\uFF0C\u4E00\u822C\u4E0D\u4F1A\u4F7F\u7528 syscall</p><p>\u672C\u7BC7\u4E3A\u4E86\u5185\u5BB9\u7684\u5B8C\u6574\u5EA6\uFF0C\u8FD9\u91CC\u4E5F\u4F7F\u7528 syscall \u6765\u4E3E\u4E2A\u4F8B\u5B50\u3002</p><p>\u672C\u4F8B\u4E2D\uFF0C\u4F1A\u6BCF\u6B21\u8BFB\u53D6 100 \u5B57\u8282\u7684\u6570\u636E\uFF0C\u5E76\u53D1\u9001\u5230\u901A\u9053\u4E2D\uFF0C\u7531\u53E6\u5916\u4E00\u4E2A\u534F\u7A0B\u8FDB\u884C\u8BFB\u53D6\u5E76\u6253\u5370\u51FA\u6765\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
    <span class="token string">&quot;syscall&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fd<span class="token punctuation">,</span> err <span class="token operator">:=</span> syscall<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;christmas_apple.py&quot;</span><span class="token punctuation">,</span> syscall<span class="token punctuation">.</span>O_RDONLY<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Failed on open: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> syscall<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span>

    <span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    dataChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
            n<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> syscall<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
            <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            dataChan <span class="token operator">&lt;-</span> data
        <span class="token punctuation">}</span>
        <span class="token function">close</span><span class="token punctuation">(</span>dataChan<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            <span class="token keyword">select</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> data<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>dataChan<span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
                    <span class="token keyword">return</span>
                <span class="token punctuation">}</span>

                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="89.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="91.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,20),R=s("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),O={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),E=s(")"),C=s("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),N={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},B=s("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function L(A,P){const e=t("ExternalLinkIcon"),p=t("RouterLink");return c(),l("div",null,[d,n("ol",null,[k,n("li",null,[v,n("a",m,[b,f,a(e)]),g]),n("li",null,[h,n("a",y,[_,w,a(e)]),q])]),x,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/Gomd_super/"},{default:u(()=>[R]),_:1})])]),n("li",null,[n("p",null,[n("a",O,[F,a(e)]),E])]),n("li",null,[n("p",null,[C,n("a",N,[B,a(e)])])])])])}const S=o(r,[["render",L],["__file","90.html.vue"]]);export{S as default};
