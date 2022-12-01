import{_ as o,r as l,o as d,c as r,a as e,b as i,w as a,d as u,e as n}from"./app.7c9b91df.js";const c={},v=u(`<h1 id="model\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#model\u903B\u8F91" aria-hidden="true">#</a> Model\u903B\u8F91</h1><h1 id="model-\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#model-\u5206\u6790" aria-hidden="true">#</a> model \u5206\u6790</h1><p>\u6211\u4EEC\u77E5\u9053 Web \u5E94\u7528\u4E2D\u6211\u4EEC\u7528\u7684\u6700\u591A\u7684\u5C31\u662F\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u800C model \u5C42\u4E00\u822C\u7528\u6765\u505A\u8FD9\u4E9B\u64CD\u4F5C\uFF0C\u6211\u4EEC\u7684 <code>bee new</code> \u4F8B\u5B50\u4E0D\u5B58\u5728 Model \u7684\u6F14\u793A\uFF0C\u4F46\u662F <code>bee api</code> \u5E94\u7528\u4E2D\u5B58\u5728 model \u7684\u5E94\u7528\u3002\u8BF4\u7684\u7B80\u5355\u4E00\u70B9\uFF0C\u5982\u679C\u60A8\u7684\u5E94\u7528\u8DB3\u591F\u7B80\u5355\uFF0C\u90A3\u4E48 Controller \u53EF\u4EE5\u5904\u7406\u4E00\u5207\u7684\u903B\u8F91\uFF0C\u5982\u679C\u60A8\u7684\u903B\u8F91\u91CC\u9762\u5B58\u5728\u7740\u53EF\u4EE5\u590D\u7528\u7684\u4E1C\u897F\uFF0C\u90A3\u4E48\u5C31\u62BD\u53D6\u51FA\u6765\u53D8\u6210\u4E00\u4E2A\u6A21\u5757\u3002\u56E0\u6B64 Model \u5C31\u662F\u9010\u6B65\u62BD\u8C61\u7684\u8FC7\u7A0B\uFF0C\u4E00\u822C\u6211\u4EEC\u4F1A\u5728 Model \u91CC\u9762\u5904\u7406\u4E00\u4E9B\u6570\u636E\u8BFB\u53D6\uFF0C\u5982\u4E0B\u662F\u4E00\u4E2A\u65E5\u5FD7\u5206\u6790\u5E94\u7528\u4E2D\u7684\u4EE3\u7801\u7247\u6BB5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package models

import (
    &quot;loggo/utils&quot;
    &quot;path/filepath&quot;
    &quot;strconv&quot;
    &quot;strings&quot;
)

var (
    NotPV []string = []string{&quot;css&quot;, &quot;js&quot;, &quot;class&quot;, &quot;gif&quot;, &quot;jpg&quot;, &quot;jpeg&quot;, &quot;png&quot;, &quot;bmp&quot;, &quot;ico&quot;, &quot;rss&quot;, &quot;xml&quot;, &quot;swf&quot;}
)

const big = 0xFFFFFF

func LogPV(urls string) bool {
    ext := filepath.Ext(urls)
    if ext == &quot;&quot; {
        return true
    }
    for _, v := range NotPV {
        if v == strings.ToLower(ext) {
            return false
        }
    }
    return true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u5982\u679C\u60A8\u7684\u5E94\u7528\u8DB3\u591F\u7B80\u5355\uFF0C\u90A3\u4E48\u5C31\u4E0D\u9700\u8981 Model \u4E86\uFF1B\u5982\u679C\u4F60\u7684\u6A21\u5757\u5F00\u59CB\u591A\u4E86\uFF0C\u9700\u8981\u590D\u7528\uFF0C\u9700\u8981\u903B\u8F91\u5206\u79BB\u4E86\uFF0C\u90A3\u4E48 Model \u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u5206\u6790\u5982\u4F55\u7F16\u5199 View \u5C42\u7684\u4E1C\u897F\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="68.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="70.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,7),m=n("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),b={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},h=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),_=n(")"),p=n("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),q={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},f=n("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function g(x,k){const s=l("RouterLink"),t=l("ExternalLinkIcon");return d(),r("div",null,[v,e("ul",null,[e("li",null,[e("p",null,[i(s,{to:"/Gomd_super/"},{default:a(()=>[m]),_:1})])]),e("li",null,[e("p",null,[e("a",b,[h,i(t)]),_])]),e("li",null,[e("p",null,[p,e("a",q,[f,i(t)])])])])])}const C=o(c,[["render",g],["__file","69.html.vue"]]);export{C as default};
