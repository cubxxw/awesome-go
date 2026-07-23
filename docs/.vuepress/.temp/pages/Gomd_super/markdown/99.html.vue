<template><div><h1 id="测试技巧-网络测试" tabindex="-1"><a class="header-anchor" href="#测试技巧-网络测试" aria-hidden="true">#</a> 测试技巧：网络测试</h1>
<h2 id="_1-tcp-http" tabindex="-1"><a class="header-anchor" href="#_1-tcp-http" aria-hidden="true">#</a> 1. TCP/HTTP</h2>
<p>假设需要测试某个 API 接口的 handler 能够正常工作，例如 helloHandler</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func helloHandler(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("hello world"))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那我们可以创建真实的网络连接进行测试：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// test code
import (
    "io/ioutil"
    "net"
    "net/http"
    "testing"
)

func handleError(t *testing.T, err error) {
    t.Helper()
    if err != nil {
        t.Fatal("failed", err)
    }
}

func TestConn(t *testing.T) {
    ln, err := net.Listen("tcp", "127.0.0.1:0")
    handleError(t, err)
    defer ln.Close()

    http.HandleFunc("/hello", helloHandler)
    go http.Serve(ln, nil)

    resp, err := http.Get("http://" + ln.Addr().String() + "/hello")
    handleError(t, err)

    defer resp.Body.Close()
    body, err := ioutil.ReadAll(resp.Body)
    handleError(t, err)

    if string(body) != "hello world" {
        t.Fatal("expected hello world, but got", string(body))
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>net.Listen(&quot;tcp&quot;, &quot;127.0.0.1:0&quot;)</code>：监听一个未被占用的端口，并返回 Listener。</li>
<li>调用 <code v-pre>http.Serve(ln, nil)</code> 启动 http 服务。</li>
<li>使用 <code v-pre>http.Get</code> 发起一个 Get 请求，检查返回值是否正确。</li>
<li>尽量不对 <code v-pre>http</code> 和 <code v-pre>net</code> 库使用 mock，这样可以覆盖较为真实的场景。</li>
</ul>
<h2 id="_2-httptest" tabindex="-1"><a class="header-anchor" href="#_2-httptest" aria-hidden="true">#</a> 2. httptest</h2>
<p>针对 http 开发的场景，使用标准库 <code v-pre>net/http/httptest</code> 进行测试更为高效。</p>
<p>上述的测试用例改写如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// test code
import (
    "io/ioutil"
    "net/http"
    "net/http/httptest"
    "testing"
)

func TestConn(t *testing.T) {
    req := httptest.NewRequest("GET", "http://example.com/foo", nil)
    w := httptest.NewRecorder()
    helloHandler(w, req)
    bytes, _ := ioutil.ReadAll(w.Result().Body)

    if string(bytes) != "hello world" {
        t.Fatal("expected hello world, but got", string(bytes))
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 httptest 模拟请求对象(req)和响应对象(w)，达到了相同的目的。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '98.md' style='float:left'>⬆️上一节🔗</a><a href = '100.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


