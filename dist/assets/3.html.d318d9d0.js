import{_ as s,r,o as a,c as d,a as o,b as t,w as i,e,d as h}from"./app.64dac66d.js";const _={},c={href:"https://github.com/3293172751",target:"_blank",rel:"noopener noreferrer"},u=e("author"),p=o("h1",{id:"\u7B2C3\u8282-\u5E76\u53D1\u4E0E\u5E76\u884C",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u7B2C3\u8282-\u5E76\u53D1\u4E0E\u5E76\u884C","aria-hidden":"true"},"#"),e(" \u7B2C3\u8282 \u5E76\u53D1\u4E0E\u5E76\u884C")],-1),g=e("\u56DE\u5230\u76EE\u5F55"),m=e("\u4E0A\u4E00\u8282"),f=e("\u2764\uFE0F\u{1F495}\u{1F495}Go\u8BED\u8A00\u9AD8\u7EA7\u7BC7\u7AE0,\u5728\u6B64\u4E4B\u524D\u5EFA\u8BAE\u60A8\u5148\u4E86\u89E3\u57FA\u7840\u548C\u8FDB\u9636\u7BC7\u3002Myblog:"),b={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},k=e("http://nsddd.top"),x={id:"go\u8BED\u8A00\u57FA\u7840\u7BC7",tabindex:"-1"},C=o("a",{class:"header-anchor",href:"#go\u8BED\u8A00\u57FA\u7840\u7BC7","aria-hidden":"true"},"#",-1),B=e(),v={href:"https://github.com/3293172751/Block_Chain/blob/master/TOC.md",target:"_blank",rel:"noopener noreferrer"},E=e("Go\u8BED\u8A00\u57FA\u7840\u7BC7"),w={id:"go\u8BED\u8A00100\u7BC7\u8FDB\u9636",tabindex:"-1"},G=o("a",{class:"header-anchor",href:"#go\u8BED\u8A00100\u7BC7\u8FDB\u9636","aria-hidden":"true"},"#",-1),N=e(),L={href:"https://github.com/3293172751/Block_Chain/blob/master/Gomd_super/README.md",target:"_blank",rel:"noopener noreferrer"},V=e("Go\u8BED\u8A00100\u7BC7\u8FDB\u9636"),I=o("hr",null,null,-1),O=o("p",null,"[TOC]",-1),R={href:"https://github.com/3293172751/Block_Chain/blob/master/markdown/%E5%B9%B6%E5%8F%91.md",target:"_blank",rel:"noopener noreferrer"},T=e("\u5E76\u53D1\u4ECB\u7ECD"),y=h('<h3 id="\u5E76\u53D1\u548C\u5E76\u884C\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5E76\u53D1\u548C\u5E76\u884C\u5173\u7CFB" aria-hidden="true">#</a> \u5E76\u53D1\u548C\u5E76\u884C\u5173\u7CFB</h3><p><strong>1. \u591A\u7EBF\u7A0B\u7A0B\u5E8F\u5728\u5355\u6838\u4E0A\u8FD0\u884C\uFF0C\u5C31\u662F\u5E76\u53D1</strong></p><ul><li>\u4ECE\u5FAE\u89C2\u4E0A\u770B\uFF0C\u4E00\u4E2A\u65F6\u95F4\u6BB5\u53EA\u6709\u4E00\u4E2A\u7A0B\u5E8F\u5728\u6267\u884C</li></ul><p><strong>2. \u591A\u7EBF\u7A0B\u7A0B\u5E8F\u5728\u591A\u6838\u4E0A\u8FD0\u884C\uFF0C\u5C31\u662F\u5E76\u884C</strong></p><ul><li>Go\u8BED\u8A00\u652F\u6301\u5E76\u884C\uFF0C\u56E0\u4E3A\u5E76\u884C\u7684\u901F\u5EA6\u66F4\u5FEB\uFF0C\u5728\u591A\u4E2ACPU\u4E0A\u540C\u65F6\u8FDB\u884C</li></ul><p><img src="http://sm.nsddd.top/smimage-20220707145115419.png" alt="image-20220707145115419"></p><p><strong>\u5728\u6211\u4EEC\u7684\u65E5\u5FD7\u76D1\u63A7\u7CFB\u7EDF\u4E2D\uFF0C\u5BF9\u4E8Elog_process\u662F\u53EF\u4EE5\u628A\u6BCF\u4E00\u4E2A\u6A21\u5757\u90FD\u72EC\u7ACB\u51FA\u6765\u7684</strong></p><ul><li>\u5B9E\u65F6\u8BFB\u53D6</li><li>\u89E3\u6790</li><li>\u5199\u5165</li></ul><p><strong>\u6211\u4EEC\u7684goroutine\u662F\u5E76\u53D1\u7684\u6267\u884C\u5462\uFF0C\u8FD8\u662F\u5E76\u884C\u7684\u6267\u884C\u5462~</strong></p><p>goroutinue\uFF0C\u672C\u8D28\u4E0A\u5C31\u662F\u534F\u7A0B\u3002\u4F46\u4E5F\u5B58\u5728\u4E24\u70B9\u4E0D\u540C\uFF1A</p><ul><li><p>goroutine\u53EF\u4EE5\u5B9E\u73B0\u5E76\u884C\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u591A\u4E2A\u534F\u7A0B\u53EF\u4EE5\u5728\u591A\u4E2A\u5904\u7406\u5668\u4E0A\u8DD1\u3002\u800C\u534F\u7A0B\u540C\u4E00\u65F6\u523B\u53EA\u80FD\u5728\u4E00\u4E2A\u5904\u7406\u5668\u4E0A\u8DD1\uFF08\u628A\u5BBF\u4E3B\u8BED\u8A00\u60F3\u8C61\u6210\u5355\u7EBF\u7A0B\u5C31\u597D\u4E86\uFF09\u3002</p></li><li><p>goroutine\u4E4B\u95F4\u901A\u4FE1\u662F\u901A\u8FC7channel\uFF0C\u800C\u534F\u7A0B\u901A\u4FE1\u65F6\u901A\u8FC7yield\u548Cresume()\u64CD\u4F5C\u3002</p></li></ul><p><strong>\u6BCF\u4E2A\u8FDB\u7A0B\u4E2D\u7684\u5185\u5B58\uFF1A</strong></p><ol><li>\u5730\u5740\u7A7A\u95F4</li><li>\u5168\u5C40\u53D8\u91CF</li><li>\u6253\u5F00\u6587\u4EF6</li><li>\u5B50\u8FDB\u7A0B</li><li>\u5373\u5C06\u53D1\u751F\u7684\u5B9A\u65F6\u5668</li><li>\u4FE1\u53F7\u4E0E\u4FE1\u53F7\u5904\u7406\u7A0B\u5E8F</li><li>\u8D26\u6237\u4FE1\u606F</li></ol><p><strong>\u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u7684\u5185\u5BB9\uFF1A</strong></p><ol><li>\u7A0B\u5E8F\u8BA1\u6570\u5668\uFF08\u8BB0\u5F55\u8981\u6267\u884C\u7684\u54EA\u6761\u6307\u4EE4\uFF09</li><li>\u5BC4\u5B58\u5668 \uFF08\u4FDD\u5B58\u7EBF\u7A0B\u5F53\u524D\u7684\u5DE5\u4F5C\u53D8\u91CF\uFF09</li><li>\u5806\u6808\uFF08\u552F\u4E00\u5806\u6808\uFF0C\u6765\u8BB0\u5F55\u6267\u884C\u5386\u53F2\uFF09</li><li>\u72B6\u6001</li></ol><p><strong>\u7531\u4E8E\u7EBF\u7A0B\u5177\u6709\u8FDB\u7A0B\u7684\u67D0\u4E9B\u6027\u8D28\uFF0C\u6240\u4EE5\u6709\u65F6\u88AB\u79F0\u4E3A\u8F7B\u91CF\u7EA7\u7EBF\u7A0B\uFF0C\u591A\u7EBF\u7A0B</strong></p><h5 id="\u7EBF\u7A0B\u4E0E\u8FDB\u7A0B\u7684\u533A\u522B\u53EF\u4EE5\u5F52\u7EB3\u4E3A\u4EE5\u4E0B4\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u4E0E\u8FDB\u7A0B\u7684\u533A\u522B\u53EF\u4EE5\u5F52\u7EB3\u4E3A\u4EE5\u4E0B4\u70B9" aria-hidden="true">#</a> \u7EBF\u7A0B\u4E0E\u8FDB\u7A0B\u7684\u533A\u522B\u53EF\u4EE5\u5F52\u7EB3\u4E3A\u4EE5\u4E0B4\u70B9\uFF1A</h5><ol><li><p>\u5730\u5740\u7A7A\u95F4\u548C\u5176\u5B83\u8D44\u6E90\uFF08\u5982\u6253\u5F00\u6587\u4EF6\uFF09\uFF1A\u8FDB\u7A0B\u95F4\u76F8\u4E92\u72EC\u7ACB\uFF0C\u540C\u4E00\u8FDB\u7A0B\u7684\u5404\u7EBF\u7A0B\u95F4\u5171\u4EAB\u3002\u67D0\u8FDB\u7A0B\u5185\u7684\u7EBF\u7A0B\u5728\u5176\u5B83\u8FDB\u7A0B\u4E0D\u53EF\u89C1\u3002</p></li><li><p>\u901A\u4FE1\uFF1A\u8FDB\u7A0B\u95F4\u901A\u4FE1IPC\uFF0C\u7EBF\u7A0B\u95F4\u53EF\u4EE5\u76F4\u63A5\u8BFB\u5199\u8FDB\u7A0B\u6570\u636E\u6BB5\uFF08\u5982\u5168\u5C40\u53D8\u91CF\uFF09\u6765\u8FDB\u884C\u901A\u4FE1\u2014\u2014\u9700\u8981\u8FDB\u7A0B\u540C\u6B65\u548C\u4E92\u65A5\u624B\u6BB5\u7684\u8F85\u52A9\uFF0C\u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002</p></li><li><p>\u8C03\u5EA6\u548C\u5207\u6362\uFF1A\u7EBF\u7A0B\u4E0A\u4E0B\u6587\u5207\u6362\u6BD4\u8FDB\u7A0B\u4E0A\u4E0B\u6587\u5207\u6362\u8981\u5FEB\u5F97\u591A\u3002</p></li><li><p>\u5728\u591A\u7EBF\u7A0BOS\u4E2D\uFF0C\u8FDB\u7A0B\u4E0D\u662F\u4E00\u4E2A\u53EF\u6267\u884C\u7684\u5B9E\u4F53\u3002</p></li></ol><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2>',19),D=e("\u56DE\u5230\u76EE\u5F55"),M=e("\u4E0A\u4E00\u8282"),P=e("\u4E0B\u4E00\u8282"),S=o("hr",null,null,-1),q={href:"https://github.com/3293172751/Block_Chain/blob/master/Git/git-contributor.md",target:"_blank",rel:"noopener noreferrer"},A=e("\u53C2\u4E0E\u8D21\u732E\u2764\uFE0F\u{1F495}\u{1F495}");function F(U,j){const l=r("ExternalLinkIcon"),n=r("RouterLink");return a(),d("div",null,[o("ul",null,[o("li",null,[o("a",c,[u,t(l)])])]),p,o("ul",null,[o("li",null,[t(n,{to:"/go-advancend/"},{default:i(()=>[g]),_:1})]),o("li",null,[t(n,{to:"/go-advancend/markdown/2.html"},{default:i(()=>[m]),_:1})])]),o("blockquote",null,[o("p",null,[f,o("a",b,[k,t(l)])]),o("h3",x,[C,B,o("strong",null,[o("a",v,[E,t(l)])])]),o("h3",w,[G,N,o("strong",null,[o("a",L,[V,t(l)])])])]),I,O,o("ul",null,[o("li",null,[o("a",R,[T,t(l)])])]),y,o("ul",null,[o("li",null,[t(n,{to:"/go-advancend/"},{default:i(()=>[D]),_:1})]),o("li",null,[t(n,{to:"/go-advancend/markdown/2.html"},{default:i(()=>[M]),_:1})]),o("li",null,[t(n,{to:"/go-advancend/markdown/4.html"},{default:i(()=>[P]),_:1})])]),S,o("ul",null,[o("li",null,[o("a",q,[A,t(l)])])])])}const H=s(_,[["render",F],["__file","3.html.vue"]]);export{H as default};
