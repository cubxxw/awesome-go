import{_ as s,r as l,o,c as a,a as e,b as i,w as r,d as c,e as t}from"./app.7dcc2da0.js";const u={},v=c(`<h1 id="_1-view\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#_1-view\u7F16\u5199" aria-hidden="true">#</a> 1. View\u7F16\u5199</h1><p>\u5728\u524D\u9762\u7F16\u5199 Controller \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5728 Get \u91CC\u9762\u5199\u8FC7\u8FD9\u6837\u7684\u8BED\u53E5 <code>this.TplName = &quot;index.tpl&quot;</code>\uFF0C\u8BBE\u7F6E\u663E\u793A\u7684\u6A21\u677F\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u652F\u6301 <code>tpl</code> \u548C <code>html</code> \u7684\u540E\u7F00\u540D\uFF0C\u5982\u679C\u60F3\u8BBE\u7F6E\u5176\u4ED6\u540E\u7F00\u4F60\u53EF\u4EE5\u8C03\u7528 <code>beego.AddTemplateExt</code> \u63A5\u53E3\u8BBE\u7F6E\uFF0C\u90A3\u4E48\u6A21\u677F\u5982\u4F55\u6765\u663E\u793A\u76F8\u5E94\u7684\u6570\u636E\u5462\uFF1Fbeego \u91C7\u7528\u4E86 Go \u8BED\u8A00\u9ED8\u8BA4\u7684\u6A21\u677F\u5F15\u64CE\uFF0C\u6240\u4EE5\u548C Go \u7684\u6A21\u677F\u8BED\u6CD5\u4E00\u6837\uFF0CGo \u6A21\u677F\u7684\u8BE6\u7EC6\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003\u300AGo Web \u7F16\u7A0B\u300B\u6A21\u677F\u4F7F\u7528\u6307\u5357</p><p>\u6211\u4EEC\u770B\u770B\u5FEB\u901F\u5165\u95E8\u91CC\u9762\u7684\u4EE3\u7801\uFF08\u53BB\u6389\u4E86 css \u6837\u5F0F\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;

&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Beego&lt;/title&gt;
        &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;header class=&quot;hero-unit&quot; style=&quot;background-color:#A9F16C&quot;&gt;
            &lt;div class=&quot;container&quot;&gt;
                &lt;div class=&quot;row&quot;&gt;
                    &lt;div class=&quot;hero-text&quot;&gt;
                        &lt;h1&gt;Welcome to Beego!&lt;/h1&gt;
                        &lt;p class=&quot;description&quot;&gt;
                            Beego is a simple &amp; powerful Go web framework which is inspired by tornado and sinatra.
                            &lt;br /&gt;
                            Official website: &lt;a href=&quot;http://{{.Website}}&quot;&gt;{{.Website}}&lt;/a&gt;
                            &lt;br /&gt;
                            Contact me: {{.Email}}
                        &lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/header&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5728 Controller \u91CC\u9762\u628A\u6570\u636E\u8D4B\u503C\u7ED9\u4E86 data\uFF08map \u7C7B\u578B\uFF09\uFF0C\u7136\u540E\u6211\u4EEC\u5728\u6A21\u677F\u4E2D\u5C31\u76F4\u63A5\u901A\u8FC7 key \u8BBF\u95EE <code>.Website</code> \u548C <code>.Email</code> \u3002\u8FD9\u6837\u5C31\u505A\u5230\u4E86\u6570\u636E\u7684\u8F93\u51FA\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u8BB2\u89E3\u5982\u4F55\u8BA9\u9759\u6001\u6587\u4EF6\u8F93\u51FA\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="69.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="71.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,7),m=t("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),h={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),g=t(")"),p=t("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),_={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},f=t("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function q(x,k){const d=l("RouterLink"),n=l("ExternalLinkIcon");return o(),a("div",null,[v,e("ul",null,[e("li",null,[e("p",null,[i(d,{to:"/Gomd_super/"},{default:r(()=>[m]),_:1})])]),e("li",null,[e("p",null,[e("a",h,[b,i(n)]),g])]),e("li",null,[e("p",null,[p,e("a",_,[f,i(n)])])])])])}const E=s(u,[["render",q],["__file","70.html.vue"]]);export{E as default};
