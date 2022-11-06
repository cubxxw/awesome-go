import{_ as s,r as l,o as p,c as o,a as t,b as i,w as c,d as n,e}from"./app.ebf2b957.js";const g={},d=n('<h1 id="_1-rabbitmq\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-rabbitmq\u5B89\u88C5" aria-hidden="true">#</a> 1. RabbitMQ\u5B89\u88C5</h1><h3 id="_1-1-1-win\u4E0B\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-1-1-win\u4E0B\u5B89\u88C5" aria-hidden="true">#</a> 1.1.1. win\u4E0B\u5B89\u88C5</h3><h4 id="\u7B2C\u4E00\u6B65-\u4E0B\u8F7D\u5E76\u5B89\u88C5erlang" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B65-\u4E0B\u8F7D\u5E76\u5B89\u88C5erlang" aria-hidden="true">#</a> \u7B2C\u4E00\u6B65\uFF1A\u4E0B\u8F7D\u5E76\u5B89\u88C5erlang</h4><ul><li>\u539F\u56E0\uFF1ARabbitMQ\u670D\u52A1\u7AEF\u4EE3\u7801\u662F\u4F7F\u7528\u5E76\u53D1\u5F0F\u8BED\u8A00Erlang\u7F16\u5199\u7684\uFF0C\u5B89\u88C5Rabbit MQ\u7684\u524D\u63D0\u662F\u5B89\u88C5Erlang\u3002</li><li>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttp://www.erlang.org/downloads</li></ul><p><img src="https://s2.loli.net/2022/04/10/lwFpGNCnh1vma87.png" alt="img"></p><p>\u6839\u636E\u672C\u673A\u4F4D\u6570\u9009\u62E9erlang\u4E0B\u8F7D\u7248\u672C\u3002</p><ul><li>\u4E0B\u8F7D\u5B8C\u662F\u8FD9\u4E48\u4E2A\u4E1C\u897F\uFF1A</li></ul><p><img src="https://s2.loli.net/2022/04/10/Kk4yr1FBM3vPxZQ.png" alt="img"></p><ul><li>\u53CC\u51FB\uFF0C\u70B9next\u5C31\u53EF\u4EE5\u3002</li></ul><p><img src="https://s2.loli.net/2022/04/10/PXUsTuogZwJ5b9c.png" alt="img"></p><ul><li>\u9009\u62E9\u4E00\u4E2A\u81EA\u5DF1\u60F3\u4FDD\u5B58\u7684\u5730\u65B9\uFF0C\u7136\u540Enext\u3001finish\u5C31\u53EF\u4EE5\u3002</li></ul><p><img src="https://s2.loli.net/2022/04/10/OhBKdczXZG9Ros4.png" alt="img"> <img src="https://s2.loli.net/2022/04/10/VnF3D6PoaiM9UlA.png" alt="img"></p><ul><li>\u5B89\u88C5\u5B8C\u4E8B\u513F\u540E\u8981\u8BB0\u5F97\u914D\u7F6E\u4E00\u4E0B\u7CFB\u7EDF\u7684\u73AF\u5883\u53D8\u91CF\u3002 \u6B64\u7535\u8111--&gt;\u9F20\u6807\u53F3\u952E\u201C\u5C5E\u6027\u201D--&gt;\u9AD8\u7EA7\u7CFB\u7EDF\u8BBE\u7F6E--&gt;\u73AF\u5883\u53D8\u91CF--&gt;\u201C\u65B0\u5EFA\u201D\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF</li></ul><p><img src="https://s2.loli.net/2022/04/10/YDeUCVW2xk1uXj9.png" alt="img"></p><p>\u53D8\u91CF\u540D\uFF1AERLANG_HOME</p><p>\u53D8\u91CF\u503C\u5C31\u662F\u521A\u624Derlang\u7684\u5B89\u88C5\u5730\u5740\uFF0C\u70B9\u51FB\u786E\u5B9A\u3002</p><ul><li>\u7136\u540E\u53CC\u51FB\u7CFB\u7EDF\u53D8\u91CFpath</li></ul><p>\u70B9\u51FB\u201C\u65B0\u5EFA\u201D\uFF0C\u5C06%ERLANG_HOME%\\bin\u52A0\u5165\u5230path\u4E2D\u3002</p><ul><li>\u6700\u540Ewindows\u952E+R\u952E\uFF0C\u8F93\u5165cmd\uFF0C\u518D\u8F93\u5165erl\uFF0C\u770B\u5230\u7248\u672C\u53F7\u5C31\u8BF4\u660Eerlang\u5B89\u88C5\u6210\u529F\u4E86\u3002</li></ul><p><img src="https://s2.loli.net/2022/04/10/s7w5xQHT8Xphj6r.png" alt="img"></p><h4 id="\u7B2C\u4E8C\u6B65-\u4E0B\u8F7D\u5E76\u5B89\u88C5rabbitmq" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-\u4E0B\u8F7D\u5E76\u5B89\u88C5rabbitmq" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B65\uFF1A\u4E0B\u8F7D\u5E76\u5B89\u88C5RabbitMQ</h4><ul><li>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttp://www.rabbitmq.com/download.html</li></ul><p><img src="https://www.topgoer.com/static/9.3/20.png" alt="img"></p><ul><li>\u53CC\u51FB\u4E0B\u8F7D\u540E\u7684.exe\u6587\u4EF6\uFF0C\u5B89\u88C5\u8FC7\u7A0B\u4E0Eerlang\u7684\u5B89\u88C5\u8FC7\u7A0B\u76F8\u540C\u3002</li><li>RabbitMQ\u5B89\u88C5\u597D\u540E\u63A5\u4E0B\u6765\u5B89\u88C5RabbitMQ-Plugins\u3002\u6253\u5F00\u547D\u4EE4\u884Ccd\uFF0C\u8F93\u5165RabbitMQ\u7684sbin\u76EE\u5F55\u3002</li></ul><p>\u6211\u7684\u76EE\u5F55\u662F\uFF1AE:\\RabbitMQ\\rabbitmq_server-3.8.1\\sbin</p><p>\u7136\u540E\u5728\u540E\u9762\u8F93\u5165rabbitmq-plugins enable rabbitmq_management\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5</p><p><img src="https://www.topgoer.com/static/9.3/21.png" alt="img"></p><p>\u5982\u679C\u51FA\u73B0\u4E0B\u9762\u7684\u63D0\u793A\u8868\u793A\u8FD0\u884C\u6210\u529F</p><p><img src="https://www.topgoer.com/static/9.3/23.png" alt="img"></p><p>\u8F93\u5165\u547D\u4EE4\uFF1Arabbitmq-server.bat</p><p>\u5982\u679C\u51FA\u73B0\u4E0B\u9762\u7684\u63D0\u793A\u8868\u793A\u542F\u52A8\u6210\u529F</p><p><img src="https://www.topgoer.com/static/9.3/24.png" alt="img"></p>',32),m=e("rabbitmq\u542F\u52A8\u6210\u529F\uFF0C\u6D4F\u89C8\u5668\u4E2D"),h={href:"http://localhost:15672%EF%BC%8C/",target:"_blank",rel:"noopener noreferrer"},b=e("http://localhost:15672\uFF0C"),u=n('<p><img src="https://www.topgoer.com/static/9.3/25.png" alt="img"></p><p>\u8F93\u5165guest,guest\u8FDB\u5165rabbitMQ\u7BA1\u7406\u63A7\u5236\u53F0\uFF1A</p><p><img src="https://www.topgoer.com/static/9.3/26.png" alt="img"></p><p><strong>\u6CE8\u610F</strong></p><p>\u4E0A\u9762\u7684\u5B89\u88C5\u6B65\u9AA4\u5982\u679C\u51FA\u73B0\u4E0B\u9762\u9519\u8BEF</p><ul><li>\u8F93\u5165rabbitmq-plugins enable rabbitmq_management\u547D\u4EE4\u51FA\u73B0</li></ul><p><img src="https://www.topgoer.com/static/9.3/22.png" alt="img"></p><p>\u8FD9\u6837\u7684\u63D0\u793A\u89E3\u51B3\u529E\u6CD5</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A</p><p>\u5C06 <code>C:\\Users\\Administrator\\.erlang.cookie</code></p><p>\u540C\u6B65\u81F3<code>C:\\Windows\\System32\\config\\systemprofile\\.erlang.cookie</code></p><p>\u540C\u65F6\u5220\u9664\uFF1A<code>C:\\Users\\Administrator\\AppData\\Roaming\\RabbitMQ\u76EE\u5F55</code></p><p>\u91CD\u65B0\u8F93\u5165rabbitmq-plugins enable rabbitmq_management\u547D\u4EE4</p><ul><li>\u8FD0\u884C\u547D\u4EE4\uFF1Arabbitmq-server.bat</li></ul><p>\u5982\u679C\u51FA\u73B0\u4E0B\u9762\u7684\u63D0\u793A\uFF1A</p><p><img src="https://www.topgoer.com/static/9.3/27.png" alt="img"></p><p>\u8FD9\u4E2A\u662F\u56E0\u4E3Arabbit\u5DF2\u7ECF\u542F\u52A8\u4E86\uFF0C\u4E0D\u80FD\u518D\u6B21\u542F\u52A8\uFF0C\u901A\u8FC7tasklist\u6307\u4EE4\uFF0C\u53D1\u73B0\u8FDB\u7A0B\u662F\u5B58\u5728\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    tasklist | find /i &quot;erl&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://www.topgoer.com/static/9.3/28.png" alt="img"></p><p>\u5982\u679C\u6709\u7ED3\u679C\uFF0C\u90A3\u4E48\u8BF4\u660E\u5DF2\u7ECF\u542F\u52A8\u4E86\uFF0C\u901A\u8FC7\u4EFB\u52A1\u7BA1\u7406\u5668kill\u6389\u8FDB\u7A0B\u518D\u6B21\u542F\u52A8\u5373\u53EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ctrl+alt+delete`\u8FDB\u5165`\u4EFB\u52A1\u7BA1\u7406\u5668\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://www.topgoer.com/static/9.3/29.png" alt="img"></p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="43.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="45.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>',24),_=e("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),w={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},f=t("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),x=e(")"),v=e("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),k={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},E=e("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function q(R,C){const a=l("ExternalLinkIcon"),r=l("RouterLink");return p(),o("div",null,[d,t("p",null,[m,t("a",h,[b,i(a)])]),u,t("ul",null,[t("li",null,[t("p",null,[i(r,{to:"/Gomd_super/"},{default:c(()=>[_]),_:1})])]),t("li",null,[t("p",null,[t("a",w,[f,i(a)]),x])]),t("li",null,[t("p",null,[v,t("a",k,[E,i(a)])])])])])}const Q=s(g,[["render",q],["__file","44.html.vue"]]);export{Q as default};
