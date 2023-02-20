import{_ as a,r as c,o as i,c as r,a as e,b as t,w as l,e as o,d as _}from"./app.64dac66d.js";const h={},u=e("h1",{id:"socket\u7F16\u7A0B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#socket\u7F16\u7A0B","aria-hidden":"true"},"#"),o(" socket\u7F16\u7A0B")],-1),k={class:"table-of-contents"},p=o("socket\u56FE\u89E3"),f=o("END \u94FE\u63A5"),m=e("p",null,"[toc]",-1),S={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"Socket \u4ECB\u7ECD",-1),P=e("p",null,[e("code",null,"Socket"),o("\u662FBSD UNIX\u7684\u8FDB\u7A0B\u901A\u4FE1\u673A\u5236\uFF0C\u901A\u5E38\u4E5F\u79F0\u4F5C\u201D\u5957\u63A5\u5B57\u201D\uFF0C\u7528\u4E8E\u63CF\u8FF0IP\u5730\u5740\u548C\u7AEF\u53E3\uFF0C\u662F\u4E00\u4E2A\u901A\u4FE1\u94FE\u7684\u53E5\u67C4\u3002"),e("code",null,"Socket"),o("\u53EF\u4EE5\u7406\u89E3\u4E3A"),e("code",null,"TCP/IP"),o("\u7F51\u7EDC\u7684"),e("code",null,"API"),o("\uFF0C\u5B83\u5B9A\u4E49\u4E86\u8BB8\u591A\u51FD\u6570\u6216\u4F8B\u7A0B\uFF0C\u7A0B\u5E8F\u5458\u53EF\u4EE5\u7528\u5B83\u4EEC\u6765\u5F00\u53D1"),e("code",null,"TCP/IP"),o("\u7F51\u7EDC\u4E0A\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u7535\u8111\u4E0A\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u901A\u5E38\u901A\u8FC7\u201D\u5957\u63A5\u5B57\u201D\u5411\u7F51\u7EDC\u53D1\u51FA\u8BF7\u6C42\u6216\u8005\u5E94\u7B54\u7F51\u7EDC\u8BF7\u6C42\u3002")],-1),b={href:"https://github.com/3293172751/cs-awesome-Block_Chain/blob/master/web/README.md",target:"_blank",rel:"noopener noreferrer"},E=o("\u5957\u63A5\u5B57\u7F16\u7A0B\u8BE6\u7EC6\u8BB2\u89E3\u7BC7"),x=_('<h2 id="socket\u56FE\u89E3" tabindex="-1"><a class="header-anchor" href="#socket\u56FE\u89E3" aria-hidden="true">#</a> socket\u56FE\u89E3</h2><p>Socket\u662F\u5E94\u7528\u5C42\u4E0ETCP/IP\u534F\u8BAE\u65CF\u901A\u4FE1\u7684\u4E2D\u95F4\u8F6F\u4EF6\u62BD\u8C61\u5C42\u3002\u5728\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\uFF0CSocket\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u95E8\u9762\u6A21\u5F0F\uFF0C\u5B83\u628A\u590D\u6742\u7684TCP/IP\u534F\u8BAE\u65CF\u9690\u85CF\u5728Socket\u540E\u9762\uFF0C\u5BF9\u7528\u6237\u6765\u8BF4\u53EA\u9700\u8981\u8C03\u7528Socket\u89C4\u5B9A\u7684\u76F8\u5173\u51FD\u6570\uFF0C\u8BA9Socket\u53BB\u7EC4\u7EC7\u7B26\u5408\u6307\u5B9A\u7684\u534F\u8BAE\u6570\u636E\u7136\u540E\u8FDB\u884C\u901A\u4FE1\u3002</p><p><img src="http://sm.nsddd.top/smbjaST7yZI5RuNCV.png?xxw@nsddd.top" alt="socket\u56FE\u89E3"></p><ul><li><code>Socket</code>\u53C8\u79F0\u201C\u5957\u63A5\u5B57\u201D\uFF0C\u5E94\u7528\u7A0B\u5E8F\u901A\u5E38\u901A\u8FC7\u201C\u5957\u63A5\u5B57\u201D\u5411\u7F51\u7EDC\u53D1\u51FA\u8BF7\u6C42\u6216\u8005\u5E94\u7B54\u7F51\u7EDC\u8BF7\u6C42</li><li>\u5E38\u7528\u7684Socket\u7C7B\u578B\u6709\u4E24\u79CD\uFF1A\u6D41\u5F0F<code>Socket</code>\u548C\u6570\u636E\u62A5\u5F0F<code>Socket</code>\uFF0C\u6D41\u5F0F\u662F\u4E00\u79CD\u9762\u5411\u8FDE\u63A5\u7684Socket\uFF0C\u9488\u5BF9\u4E8E\u9762\u5411\u8FDE\u63A5\u7684TCP\u670D\u52A1\u5E94\u7528\uFF0C\u6570\u636E\u62A5\u5F0F<code>Socket</code>\u662F\u4E00\u79CD\u65E0\u8FDE\u63A5\u7684<code>Socket</code>\uFF0C\u9488\u5BF9\u4E8E\u65E0\u8FDE\u63A5\u7684UDP\u670D\u52A1\u5E94\u7528</li><li><code>TCP</code>\uFF1A\u6BD4\u8F83\u9760\u8C31\uFF0C\u9762\u5411\u8FDE\u63A5\uFF0C\u6BD4\u8F83\u6162</li><li><code>UDP</code>\uFF1A\u4E0D\u662F\u592A\u9760\u8C31\uFF0C\u6BD4\u8F83\u5FEB</li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1ATCP\u5C31\u50CF\u8D27\u5230\u4ED8\u6B3E\u7684\u5FEB\u9012\uFF0C\u9001\u5230\u5BB6\u8FD8\u5FC5\u987B\u89C1\u5230\u4F60\u4EBA\u624D\u7B97\u4E00\u6574\u5957\u6D41\u7A0B\u3002UDP\u5C31\u50CF\u67D0\u5FEB\u9012\u5FEB\u9012\u67DC\u4E00\u6254\u5C31\u8D70\u7BA1\u4F60\u6536\u5230\u6536\u4E0D\u5230\uFF0C\u4E00\u822C\u76F4\u64AD\u7528UDP\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="1.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="3.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>',7),g=o("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),I={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},D=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),T=o(")"),v=o("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),N={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},w=o("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function A(B,U){const s=c("router-link"),n=c("ExternalLinkIcon"),d=c("RouterLink");return i(),r("div",null,[u,e("nav",k,[e("ul",null,[e("li",null,[t(s,{to:"#socket\u56FE\u89E3"},{default:l(()=>[p]),_:1})]),e("li",null,[t(s,{to:"#end-\u94FE\u63A5"},{default:l(()=>[f]),_:1})])])]),m,e("div",S,[C,P,e("ul",null,[e("li",null,[e("strong",null,[e("a",b,[E,t(n)])])])])]),x,e("ul",null,[e("li",null,[e("p",null,[t(d,{to:"/Gomd_super/"},{default:l(()=>[g]),_:1})])]),e("li",null,[e("p",null,[e("a",I,[D,t(n)]),T])]),e("li",null,[e("p",null,[v,e("a",N,[w,t(n)])])])])])}const y=a(h,[["render",A],["__file","2.html.vue"]]);export{y as default};
