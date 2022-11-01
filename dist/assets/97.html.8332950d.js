import{_ as d,r as t,o as a,c as r,a as e,b as n,w as v,d as u,e as i}from"./app.f18da10e.js";const c={},o=u(`<h1 id="\u6D4B\u8BD5\u6280\u5DE7-\u5355\u5143\u6D4B\u8BD5-unit-test" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u6280\u5DE7-\u5355\u5143\u6D4B\u8BD5-unit-test" aria-hidden="true">#</a> \u6D4B\u8BD5\u6280\u5DE7\uFF1A\u5355\u5143\u6D4B\u8BD5\uFF08Unit Test\uFF09</h1><p>\u5355\u5143\u6D4B\u8BD5(Unit Tests, UT) \u662F\u4E00\u4E2A\u4F18\u79C0\u9879\u76EE\u4E0D\u53EF\u6216\u7F3A\u7684\u4E00\u90E8\u5206\uFF0C\u7279\u522B\u662F\u5728\u4E00\u4E9B\u9891\u7E41\u53D8\u52A8\u548C\u591A\u4EBA\u5408\u4F5C\u5F00\u53D1\u7684\u9879\u76EE\u4E2D\u5C24\u4E3A\u91CD\u8981\u3002</p><p>\u5199\u5355\u5143\u6D4B\u8BD5\u4EE3\u7801\u662F\u4E00\u4EF6\u77ED\u671F\u6CA1\u4EC0\u4E48\u7528\uFF0C\u4F46\u5374\u80FD\u957F\u671F\u6536\u76CA\u7684\u4E8B\u60C5\uFF0C\u7279\u522B\u662F\u5728\u4EBA\u6BD4\u8F83\u591A\u7684\u5927\u56E2\u961F\u91CC\u3002</p><p>\u5F88\u591A\u521D\u7EA7\u5F00\u53D1\u8005\u4E0D\u613F\u610F\u82B1\u65F6\u95F4\u5199\u6D4B\u8BD5\u4EE3\u7801\uFF0C\u56E0\u4E3A\u5199\u6D4B\u8BD5\u4EE3\u7801\u6BD4\u529F\u80FD\u4EE3\u7801\u5C11\u4E86\u4E00\u4E9B\u521B\u9020\u6027\uFF0C\u6CA1\u6709\u4E2A\u4EBA\u6210\u5C31\u611F\uFF0C\u51B5\u4E14\u8FED\u4EE3\u5FEB\u3001\u6392\u671F\u7D27\u5BFC\u81F4\u6CA1\u6709\u65F6\u95F4\u53BB\u5B89\u6392\u5199\u5355\u5143\u6D4B\u8BD5\u3002</p><p>\u5728\u4EE5\u4E0B\u8FD9\u4E9B\u573A\u666F\u4E2D\uFF0C\u6CA1\u6709\u517B\u6210\u5199\u5355\u5143\u6D4B\u8BD5\u4E60\u60EF\u7684\u8BDD\uFF0C\u5C31\u662F\u4E00\u4E2A\u707E\u96BE</p><ul><li>\u540C\u4E8B\u4FEE\u6539\u4E86\u67D0\u4E2A\u4E4B\u524D\u7531\u4F60\u7F16\u5199\u7684\u51FD\u6570\uFF0C\u4F46\u7531\u4E8E\u540C\u4E8B\u5BF9\u8FD9\u5757\u51FD\u6570\u7406\u89E3\u4E0A\u7684\u4E0D\u8DB3\uFF0C\u5F71\u54CD\u4E86\u67D0\u4E2A\u5F02\u5E38\u573A\u666F\u7684\u5904\u7406\uFF0C\u4F60\u7684\u540C\u4E8B\u6CA1\u6709\u6D4B\u8BD5\u5230\uFF0C\u628A bug \u6D41\u5230\u7EBF\u4E0A\u53BB</li><li>\u67D0\u4E2A\u51FD\u6570\u7684\u903B\u8F91\u6BD4\u8F83\u590D\u6742\uFF0C\u8BE5\u51FD\u6570\u7684\u6539\u52A8\u4E5F\u5F88\u9891\u7E41\uFF0C\u6BCF\u4E00\u6B21\u7684\u6539\u8FC7\u90FD\u8981\u6D4B\u8BD5\u975E\u5E38\u591A\u7684\u573A\u666F\uFF0C\u8D39\u65F6\u8D39\u529B</li></ul><h2 id="_1-\u5982\u4F55\u5199\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u5199\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> 1. \u5982\u4F55\u5199\u5355\u5143\u6D4B\u8BD5</h2><p>\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u5148\u521D\u59CB\u5316\u9879\u76EE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go mod init github.com/iswbm/fuzz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u5728\u8BE5\u9879\u76EE\u4E2D\u6DFB\u52A0 main.go\uFF0C\u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import &quot;fmt&quot;

func Reverse(s string) string {
    b := [] byte(s)
    for i, j := 0, len(b)-1; i &lt; len(b)/2; i, j = i+1, j-1 {
        b[i], b[j] = b[j], b[i]
    }
    return string(b)
}

func main() {
    input := &quot;The quick brown fox jumped over the lazy dog&quot;
    rev := Reverse(input)
    doubleRev := Reverse(rev)
    fmt.Printf(&quot;original: %q\\n&quot;, input)
    fmt.Printf(&quot;reversed: %q\\n&quot;, rev)
    fmt.Printf(&quot;reversed again: %q\\n&quot;, doubleRev)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u6211\u4EEC\u8981\u4E3A Reverse \u51FD\u6570\u7F16\u5199\u5355\u5143\u6D4B\u8BD5\u4EE3\u7801\uFF0C\u653E\u5728 reverse_test.go\uFF0CTest \u51FD\u6570\u5982\u4E0B</p><ul><li>\u7ED9\u5B9A\u4E86\u4E09\u7EC4\u6570\u636E</li><li>\u904D\u5386\u8FD9\u51E0\u7EC4\u6570\u636E\uFF0C\u5C06 tc.in \u505A\u4E3A Reverses \u51FD\u6570\u7684\u5165\u53C2\u6267\u884C\u51FD\u6570\uFF0C\u5176\u8FD4\u56DE\u503C\u8DDF\u9884\u671F\u7684 tc.want \u505A\u5BF9\u6BD4</li><li>\u82E5\u4E0D\u76F8\u7B49\uFF0C\u5219\u6D4B\u8BD5\u4E0D\u901A\u8FC7\uFF5E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;testing&quot;
)

func TestReverse(t *testing.T) {
    testcases := []struct {
        in, want string
    }{
        {&quot;Hello, world&quot;, &quot;dlrow ,olleH&quot;},
        {&quot; &quot;, &quot; &quot;},
        {&quot;!12345&quot;, &quot;54321!&quot;},
    }
    for _, tc := range testcases {
        rev := Reverse(tc.in)
        if rev != tc.want {
                t.Errorf(&quot;Reverse: %q, want %q&quot;, rev, tc.want)
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u5355\u5143\u6D4B\u8BD5\u51FD\u6570\u6765\u8BF4\uFF0C\u5B83\u7684\u7F16\u5199\u6709\u4E00\u4E9B\u683C\u5F0F\uFF0C\u9700\u8981\u63D0\u4E00\u4E0B\uFF0C\u4E0D\u7136\u4E0A\u9762\u7684\u51FD\u6570\uFF0C\u4F60\u53EF\u80FD\u4F1A\u6709\u7591\u95EE\uFF1A</p><ul><li>\u5355\u5143\u6D4B\u8BD5\uFF0C\u8981\u5BFC\u5165 testing \u5305</li><li>\u627F\u8F7D\u6D4B\u8BD5\u7528\u4F8B\u7684\u6D4B\u8BD5\u6587\u4EF6\uFF0C\u56FA\u5B9A\u4EE5 xxx_test.go\uFF08xxx \u662F\u539F\u6587\u4EF6\u540D\uFF09</li><li>\u6D4B\u8BD5\u7528\u4F8B\u51FD\u6570\u540D\u79F0\u4E00\u822C\u547D\u540D\u4E3A <code>Test</code> \u52A0\u4E0A\u5F85\u6D4B\u8BD5\u7684\u65B9\u6CD5\u540D\u3002</li><li>\u6D4B\u8BD5\u7528\u4F8B\u51FD\u6570\u7684\u53C2\u6570\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\uFF0C\u5728\u8FD9\u91CC\u662F <code>t *testing.T</code></li></ul><h2 id="_2-\u6267\u884C\u6D4B\u8BD5\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u6267\u884C\u6D4B\u8BD5\u7528\u4F8B" aria-hidden="true">#</a> 2. \u6267\u884C\u6D4B\u8BD5\u7528\u4F8B</h2><p>\u73B0\u5728\u6211\u4EEC\u6267\u884C go test \u5373\u662F\u666E\u901A\u7684\u5355\u5143\u6D4B\u8BD5\uFF0C\u5373\u6267\u884C\u8BE5 package \u4E0B\u7684\u6240\u6709\u51FD\u6570\u7684\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u8F93\u51FA PASS \u8BF4\u660E\u5355\u5143\u6D4B\u8BD5\u901A\u8FC7</p><p><img src="https://image.iswbm.com/image-20220326130634024.png" alt="https://image.iswbm.com/image-20220326130634024.png"></p><p>\u8981\u662F\u52A0\u4E00\u4E2A <code>-v</code> \u5C31\u53EF\u4EE5\u67E5\u770B\u663E\u793A\u6BCF\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u7684\u6D4B\u8BD5\u7ED3\u679C</p><p><img src="https://image.iswbm.com/image-20220326130601941.png" alt="https://image.iswbm.com/image-20220326130601941.png"></p><h2 id="_3-\u5B50\u6D4B\u8BD5\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u5B50\u6D4B\u8BD5\u7528\u4F8B" aria-hidden="true">#</a> 3. \u5B50\u6D4B\u8BD5\u7528\u4F8B</h2><p>\u5982\u679C\u6709\u5F88\u591A\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u53EF\u4EE5\u7528 -run \u6307\u5B9A\u67D0\u4E2A\u67D0\u4E2A\u6D4B\u8BD5\u7528\u4F8B</p><p><img src="https://image.iswbm.com/image-20220326131019313.png" alt="https://image.iswbm.com/image-20220326131019313.png"></p><p>\u82E5\u4E00\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u8FD8\u53EF\u4EE5\u5206\u4E3A\u591A\u4E2A\u5B50\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u6BD4\u5982\u4E0B\u8FB9\u7684\u6D4B\u8BD5\u7528\u4F8B\u5206\u4E3A foo \u548C bar \u4E24\u4E2A\u5B50\u6D4B\u8BD5\u7528\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
    &quot;testing&quot;
)

func TestReverse(t *testing.T) {
    t.Run(&quot;foo&quot;, func(t *testing.T) {
        testcases := []struct {
            in, want string
        }{
            {&quot;Hello, foo&quot;, &quot;oof ,olleH&quot;},
        }
        for _, tc := range testcases {
            rev := Reverse(tc.in)
            if rev != tc.want {
                    t.Errorf(&quot;[foo test]Reverse: %q, want %q&quot;, rev, tc.want)
            }
        }
    })

    t.Run(&quot;bar&quot;, func(t *testing.T) {
        testcases := []struct {
            in, want string
        }{
            {&quot;Hello, bar&quot;, &quot;rab ,olleH&quot;},
        }
        for _, tc := range testcases {
            rev := Reverse(tc.in)
            if rev != tc.want {
                    t.Errorf(&quot;[bar test] Reverse: %q, want %q&quot;, rev, tc.want)
            }
        }
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>-run \u4E3B\u7528\u4F8B/\u5B50\u7528\u4F8B</code> \u5C31\u53EF\u4EE5\u6267\u884C\u5BF9\u5E94\u7684\u5B50\u7528\u4F8B</p><p><img src="https://image.iswbm.com/image-20220326133200586.png" alt="https://image.iswbm.com/image-20220326133200586.png"></p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="96.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="98.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,30),m=i("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),b={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},p=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),g=i(")"),h=i("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),q={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},f=i("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function _(x,w){const l=t("RouterLink"),s=t("ExternalLinkIcon");return a(),r("div",null,[o,e("ul",null,[e("li",null,[e("p",null,[n(l,{to:"/Gomd_super/"},{default:v(()=>[m]),_:1})])]),e("li",null,[e("p",null,[e("a",b,[p,n(s)]),g])]),e("li",null,[e("p",null,[h,e("a",q,[f,n(s)])])])])])}const k=d(c,[["render",_],["__file","97.html.vue"]]);export{k as default};
