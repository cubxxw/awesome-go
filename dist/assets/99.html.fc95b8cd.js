import{_ as s,r as l,o as r,c as o,a as e,b as t,w as a,d as u,e as n}from"./app.74bed754.js";const c={},v=u(`<h1 id="\u6D4B\u8BD5\u6280\u5DE7-\u7F51\u7EDC\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u6280\u5DE7-\u7F51\u7EDC\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5\u6280\u5DE7\uFF1A\u7F51\u7EDC\u6D4B\u8BD5</h1><h2 id="_1-tcp-http" tabindex="-1"><a class="header-anchor" href="#_1-tcp-http" aria-hidden="true">#</a> 1. TCP/HTTP</h2><p>\u5047\u8BBE\u9700\u8981\u6D4B\u8BD5\u67D0\u4E2A API \u63A5\u53E3\u7684 handler \u80FD\u591F\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u4F8B\u5982 helloHandler</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func helloHandler(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte(&quot;hello world&quot;))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u771F\u5B9E\u7684\u7F51\u7EDC\u8FDE\u63A5\u8FDB\u884C\u6D4B\u8BD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// test code
import (
    &quot;io/ioutil&quot;
    &quot;net&quot;
    &quot;net/http&quot;
    &quot;testing&quot;
)

func handleError(t *testing.T, err error) {
    t.Helper()
    if err != nil {
        t.Fatal(&quot;failed&quot;, err)
    }
}

func TestConn(t *testing.T) {
    ln, err := net.Listen(&quot;tcp&quot;, &quot;127.0.0.1:0&quot;)
    handleError(t, err)
    defer ln.Close()

    http.HandleFunc(&quot;/hello&quot;, helloHandler)
    go http.Serve(ln, nil)

    resp, err := http.Get(&quot;http://&quot; + ln.Addr().String() + &quot;/hello&quot;)
    handleError(t, err)

    defer resp.Body.Close()
    body, err := ioutil.ReadAll(resp.Body)
    handleError(t, err)

    if string(body) != &quot;hello world&quot; {
        t.Fatal(&quot;expected hello world, but got&quot;, string(body))
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>net.Listen(&quot;tcp&quot;, &quot;127.0.0.1:0&quot;)</code>\uFF1A\u76D1\u542C\u4E00\u4E2A\u672A\u88AB\u5360\u7528\u7684\u7AEF\u53E3\uFF0C\u5E76\u8FD4\u56DE Listener\u3002</li><li>\u8C03\u7528 <code>http.Serve(ln, nil)</code> \u542F\u52A8 http \u670D\u52A1\u3002</li><li>\u4F7F\u7528 <code>http.Get</code> \u53D1\u8D77\u4E00\u4E2A Get \u8BF7\u6C42\uFF0C\u68C0\u67E5\u8FD4\u56DE\u503C\u662F\u5426\u6B63\u786E\u3002</li><li>\u5C3D\u91CF\u4E0D\u5BF9 <code>http</code> \u548C <code>net</code> \u5E93\u4F7F\u7528 mock\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8986\u76D6\u8F83\u4E3A\u771F\u5B9E\u7684\u573A\u666F\u3002</li></ul><h2 id="_2-httptest" tabindex="-1"><a class="header-anchor" href="#_2-httptest" aria-hidden="true">#</a> 2. httptest</h2><p>\u9488\u5BF9 http \u5F00\u53D1\u7684\u573A\u666F\uFF0C\u4F7F\u7528\u6807\u51C6\u5E93 <code>net/http/httptest</code> \u8FDB\u884C\u6D4B\u8BD5\u66F4\u4E3A\u9AD8\u6548\u3002</p><p>\u4E0A\u8FF0\u7684\u6D4B\u8BD5\u7528\u4F8B\u6539\u5199\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// test code
import (
    &quot;io/ioutil&quot;
    &quot;net/http&quot;
    &quot;net/http/httptest&quot;
    &quot;testing&quot;
)

func TestConn(t *testing.T) {
    req := httptest.NewRequest(&quot;GET&quot;, &quot;http://example.com/foo&quot;, nil)
    w := httptest.NewRecorder()
    helloHandler(w, req)
    bytes, _ := ioutil.ReadAll(w.Result().Body)

    if string(bytes) != &quot;hello world&quot; {
        t.Fatal(&quot;expected hello world, but got&quot;, string(bytes))
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 httptest \u6A21\u62DF\u8BF7\u6C42\u5BF9\u8C61(req)\u548C\u54CD\u5E94\u5BF9\u8C61(w)\uFF0C\u8FBE\u5230\u4E86\u76F8\u540C\u7684\u76EE\u7684\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="98.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="100.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,14),h=n("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),m={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),p=n(")"),q=n("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),_={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},f=n("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function g(x,w){const d=l("RouterLink"),i=l("ExternalLinkIcon");return r(),o("div",null,[v,e("ul",null,[e("li",null,[e("p",null,[t(d,{to:"/Gomd_super/"},{default:a(()=>[h]),_:1})])]),e("li",null,[e("p",null,[e("a",m,[b,t(i)]),p])]),e("li",null,[e("p",null,[q,e("a",_,[f,t(i)])])])])])}const y=s(c,[["render",g],["__file","99.html.vue"]]);export{y as default};
