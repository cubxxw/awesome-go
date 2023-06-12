import{_ as s,r as a,o as d,c as h,a as e,b as l,w as o,e as t,d as u}from"./app.798d5e9d.js";const c={},_={href:"https://github.com/cubxxw/MIT6.824-DistributedSystem",target:"_blank",rel:"noopener noreferrer"},p=t("\u{1F525} \u5F00\u6E90\u5730\u5740"),f=e("h1",{id:"lecture-1-introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lecture-1-introduction","aria-hidden":"true"},"#"),t(" Lecture 1 introduction")],-1),b=e("br",null,null,-1),m=e("div",null,[e("a",{href:"0.md",style:{float:"left"}},"\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517} "),e("a",{href:"2.md",style:{float:"right"}}," \u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}")],-1),g=e("br",null,null,-1),x=t("\u2764\uFE0F\u{1F495}\u{1F495}\u26A0\uFE0F According to the MIT 6.824 Collaboration policy, which prevents students from obtaining Solutions through GitHub, the source repository is for personal use only, and the documentation uses an open source protocol for learning. Myblog:"),k={href:"http://nsddd.top/",target:"_blank",rel:"noopener noreferrer"},C=t("http://nsddd.top"),E=e("hr",null,null,-1),y={class:"table-of-contents"},v=t("\u5206\u5E03\u5F0F\u95EE\u9898"),R=t("\u4F7F\u7528\u7684\u6280\u672F"),M=t("\u8BFE\u7A0B"),V=t("\u6211\u4EEC\u9700\u8981\u8BA8\u8BBA"),w=t("\u6211\u4EEC\u9700\u8981\u89E3\u51B3"),A=t("\u8BFE\u7A0B\u7ED3\u6784"),N=t("END \u94FE\u63A5"),z=u('<p>[TOC]</p><h2 id="\u5206\u5E03\u5F0F\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u95EE\u9898" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u95EE\u9898</h2><ul><li>\u4FE1\u4EFB\u95EE\u9898</li><li>\u4EA4\u4E92\u95EE\u9898</li><li>\u5B89\u5168\u95EE\u9898</li></ul><h3 id="\u4F7F\u7528\u7684\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7684\u6280\u672F" aria-hidden="true">#</a> \u4F7F\u7528\u7684\u6280\u672F</h3><ul><li>RPC</li><li>threads</li><li>Mutual exclusion lock</li></ul><h2 id="\u8BFE\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8BFE\u7A0B" aria-hidden="true">#</a> \u8BFE\u7A0B</h2><p>\u5927\u5BB6\u90FD\u77E5\u9053\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u6838\u5FC3\u662F\u901A\u8FC7\u7F51\u7EDC\u6765\u534F\u8C03\uFF0C\u5171\u540C\u5B8C\u6210\u4E00\u81F4\u4EFB\u52A1\u7684\u4E00\u4E9B\u8BA1\u7B97\u673A\u3002\u6211\u4EEC\u5728\u672C\u8BFE\u7A0B\u4E2D\u5C06\u4F1A\u91CD\u70B9\u4ECB\u7ECD\u4E00\u4E9B\u6848\u4F8B\uFF0C\u5305\u62EC\uFF1A\u5927\u578B\u7F51\u7AD9\u7684\u50A8\u5B58\u7CFB\u7EDF\u3001\u5927\u6570\u636E\u8FD0\u7B97\uFF0C\u5982 MapReduce\u3001\u4EE5\u53CA\u4E00\u4E9B\u66F4\u4E3A\u5947\u5999\u7684\u6280\u672F\uFF0C\u6BD4\u5982\u70B9\u5BF9\u70B9\u7684\u6587\u4EF6\u5171\u4EAB\u3002\u8FD9\u662F\u6211\u4EEC\u5B66\u4E60\u8FC7\u7A0B\u4E2D\u7684\u4E00\u4E9B\u4F8B\u5B50\u3002\u5206\u5E03\u5F0F\u8BA1\u7B97\u4E4B\u6240\u4EE5\u5982\u6B64\u91CD\u8981\u7684\u539F\u56E0\u662F\uFF0C\u8BB8\u591A\u91CD\u8981\u7684\u57FA\u7840\u8BBE\u65BD\u90FD\u662F\u5728\u5B83\u4E4B\u4E0A\u5EFA\u7ACB\u7684\uFF0C\u5B83\u4EEC\u9700\u8981\u591A\u53F0\u8BA1\u7B97\u673A\u6216\u8005\u8BF4\u672C\u8D28\u4E0A\u9700\u8981\u591A\u53F0\u7269\u7406\u9694\u79BB\u7684\u8BA1\u7B97\u673A\u3002</p><p>\u5728\u6211\u5148\u4ECB\u7ECD\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E4B\u524D\uFF0C\u4E5F\u662F\u63D0\u9192\u5927\u5BB6\uFF0C\u5728\u4F60\u8BBE\u8BA1\u4E00\u4E2A\u7CFB\u7EDF\u65F6\u6216\u8005\u9762\u5BF9\u4E00\u4E2A\u4F60\u9700\u8981\u89E3\u51B3\u7684\u95EE\u9898\u65F6\uFF0C\u5982\u679C\u4F60\u53EF\u4EE5\u5728\u4E00\u53F0\u8BA1\u7B97\u673A\u4E0A\u89E3\u51B3\uFF0C\u800C\u4E0D\u9700\u8981\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u90A3\u4F60\u5C31\u5E94\u8BE5\u7528\u4E00\u53F0\u8BA1\u7B97\u673A\u89E3\u51B3\u95EE\u9898\u3002\u6709\u5F88\u591A\u7684\u5DE5\u4F5C\u90FD\u53EF\u4EE5\u5728\u4E00\u53F0\u8BA1\u7B97\u673A\u4E0A\u5B8C\u6210\uFF0C\u5E76\u4E14\u901A\u5E38\u6BD4\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7B80\u5355\u5F88\u591A\u3002\u6240\u4EE5\uFF0C\u5728\u9009\u62E9\u4F7F\u7528\u5206\u5E03\u5F0F\u7CFB\u7EDF\u89E3\u51B3\u95EE\u9898\u524D\uFF0C\u4F60\u5E94\u8BE5\u8981\u5145\u5206\u5C1D\u8BD5\u522B\u7684\u601D\u8DEF\uFF0C\u56E0\u4E3A\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4F1A\u8BA9\u95EE\u9898\u89E3\u51B3\u53D8\u5F97\u590D\u6742\u3002</p><p>\u4EBA\u4EEC\u4F7F\u7528\u5927\u91CF\u7684\u76F8\u4E92\u534F\u4F5C\u7684\u8BA1\u7B97\u673A\u9A71\u52A8\u529B\u662F\uFF1A</p><ul><li>\u4EBA\u4EEC\u9700\u8981\u83B7\u5F97\u66F4\u9AD8\u7684\u8BA1\u7B97\u6027\u80FD\u3002\u53EF\u4EE5\u8FD9\u4E48\u7406\u89E3\u8FD9\u4E00\u70B9\uFF0C\uFF08\u5927\u91CF\u7684\u8BA1\u7B97\u673A\u610F\u5473\u7740\uFF09\u5927\u91CF\u7684\u5E76\u884C\u8FD0\u7B97\uFF0C\u5927\u91CFCPU\u3001\u5927\u91CF\u5185\u5B58\u3001\u4EE5\u53CA\u5927\u91CF\u78C1\u76D8\u5728\u5E76\u884C\u7684\u8FD0\u884C\u3002</li><li>\u53E6\u4E00\u4E2A\u4EBA\u4EEC\u6784\u5EFA\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u539F\u56E0\u662F\uFF0C\u5B83\u53EF\u4EE5\u63D0\u4F9B\u5BB9\u9519\uFF08tolerate faults\uFF09\u3002\u6BD4\u5982\u4E24\u53F0\u8BA1\u7B97\u673A\u8FD0\u884C\u5B8C\u5168\u76F8\u540C\u7684\u4EFB\u52A1\uFF0C\u5176\u4E2D\u4E00\u53F0\u53D1\u751F\u6545\u969C\uFF0C\u53EF\u4EE5\u5207\u6362\u5230\u53E6\u4E00\u53F0\u3002</li><li>\u7B2C\u4E09\u4E2A\u539F\u56E0\u662F\uFF0C\u4E00\u4E9B\u95EE\u9898\u5929\u7136\u5728\u7A7A\u95F4\u4E0A\u662F\u5206\u5E03\u7684\u3002\u4F8B\u5982\u94F6\u884C\u8F6C\u8D26\uFF0C\u6211\u4EEC\u5047\u8BBE\u94F6\u884CA\u5728\u7EBD\u7EA6\u6709\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u94F6\u884CB\u5728\u4F26\u6566\u6709\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u8FD9\u5C31\u9700\u8981\u4E00\u79CD\u4E24\u8005\u4E4B\u95F4\u534F\u8C03\u7684\u65B9\u6CD5\u3002\u6240\u4EE5\uFF0C\u6709\u4E00\u4E9B\u5929\u7136\u7684\u539F\u56E0\u5BFC\u81F4\u7CFB\u7EDF\u662F\u7269\u7406\u5206\u5E03\u7684\u3002</li><li>\u6700\u540E\u4E00\u4E2A\u539F\u56E0\u662F\uFF0C\u4EBA\u4EEC\u6784\u5EFA\u5206\u5E03\u5F0F\u7CFB\u7EDF\u6765\u8FBE\u6210\u4E00\u4E9B\u5B89\u5168\u7684\u76EE\u6807\u3002\u6BD4\u5982\u6709\u4E00\u4E9B\u4EE3\u7801\u5E76\u4E0D\u88AB\u4FE1\u4EFB\uFF0C\u4F46\u662F\u4F60\u53C8\u9700\u8981\u548C\u5B83\u8FDB\u884C\u4EA4\u4E92\uFF0C\u8FD9\u4E9B\u4EE3\u7801\u4E0D\u4F1A\u7ACB\u5373\u8868\u73B0\u7684\u6076\u610F\u6216\u8005\u51FA\u73B0bug\u3002\u4F60\u4E0D\u4F1A\u60F3\u8981\u4FE1\u4EFB\u8FD9\u4E9B\u4EE3\u7801\uFF0C\u6240\u4EE5\u4F60\u6216\u8BB8\u60F3\u8981\u5C06\u4EE3\u7801\u5206\u6563\u5728\u591A\u5904\u8FD0\u884C\uFF0C\u8FD9\u6837\u4F60\u7684\u4EE3\u7801\u5728\u53E6\u4E00\u53F0\u8BA1\u7B97\u673A\u8FD0\u884C\uFF0C\u6211\u7684\u4EE3\u7801\u5728\u6211\u7684\u8BA1\u7B97\u673A\u4E0A\u8FD0\u884C\uFF0C\u6211\u4EEC\u901A\u8FC7\u4E00\u4E9B\u7279\u5B9A\u7684\u7F51\u7EDC\u534F\u8BAE\u901A\u4FE1\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u62C5\u5FC3\u5B89\u5168\u95EE\u9898\uFF0C\u6211\u4EEC\u628A\u7CFB\u7EDF\u5206\u6210\u591A\u4E2A\u7684\u8BA1\u7B97\u673A\uFF0C\u8FD9\u6837\u53EF\u4EE5\u9650\u5236\u51FA\u9519\u57DF\u3002</li></ul><h2 id="\u6211\u4EEC\u9700\u8981\u8BA8\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u6211\u4EEC\u9700\u8981\u8BA8\u8BBA" aria-hidden="true">#</a> \u6211\u4EEC\u9700\u8981\u8BA8\u8BBA</h2><p>\u8FD9\u95E8\u8BFE\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u4E3B\u8981\u4F1A\u8BA8\u8BBA\u524D\u4E24\u70B9\uFF1A\u6027\u80FD\u548C\u5BB9\u9519\u3002\u5269\u4E0B\u4E24\u70B9\u6211\u4EEC\u4F1A\u901A\u8FC7\u5BF9\u67D0\u4E9B\u6848\u4F8B\u7684\u7814\u7A76\u6765\u5B66\u4E60\u3002</p><p>\u6240\u6709\u7684\u8FD9\u4E9B\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u95EE\u9898\uFF08\u6311\u6218\uFF09\u5728\u4E8E\uFF1A</p><ul><li>\u56E0\u4E3A\u7CFB\u7EDF\u4E2D\u5B58\u5728\u5F88\u591A\u90E8\u5206\uFF0C\u8FD9\u4E9B\u90E8\u5206\u53C8\u5728\u5E76\u53D1\u6267\u884C\uFF0C\u4F60\u4F1A\u9047\u5230\u5E76\u53D1\u7F16\u7A0B\u548C\u5404\u79CD\u590D\u6742\u4EA4\u4E92\u6240\u5E26\u6765\u7684\u95EE\u9898\uFF0C\u4EE5\u53CA\u65F6\u95F4\u4F9D\u8D56\u7684\u95EE\u9898\uFF08\u6BD4\u5982\u540C\u6B65\uFF0C\u5F02\u6B65\uFF09\u3002\u8FD9\u8BA9\u5206\u5E03\u5F0F\u7CFB\u7EDF\u53D8\u5F97\u5F88\u96BE\u3002</li><li>\u53E6\u4E00\u4E2A\u5BFC\u81F4\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5F88\u96BE\u7684\u539F\u56E0\u662F\uFF0C\u5206\u5E03\u5F0F\u7CFB\u7EDF\u6709\u591A\u4E2A\u7EC4\u6210\u90E8\u5206\uFF0C\u518D\u52A0\u4E0A\u8BA1\u7B97\u673A\u7F51\u7EDC\uFF0C\u4F60\u4F1A\u4F1A\u9047\u5230\u4E00\u4E9B\u610F\u60F3\u4E0D\u5230\u7684\u6545\u969C\u3002\u5982\u679C\u4F60\u53EA\u6709\u4E00\u53F0\u8BA1\u7B97\u673A\uFF0C\u90A3\u4E48\u5B83\u901A\u5E38\u8981\u4E48\u662F\u5DE5\u4F5C\uFF0C\u8981\u4E48\u662F\u6545\u969C\u6216\u8005\u6CA1\u7535\uFF0C\u603B\u7684\u6765\u8BF4\uFF0C\u8981\u4E48\u662F\u5728\u5DE5\u4F5C\uFF0C\u8981\u4E48\u662F\u6CA1\u6709\u5DE5\u4F5C\u3002\u800C\u7531\u591A\u53F0\u8BA1\u7B97\u673A\u7EC4\u6210\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u53EF\u80FD\u4F1A\u6709\u4E00\u90E8\u5206\u7EC4\u4EF6\u5728\u5DE5\u4F5C\uFF0C\u800C\u53E6\u4E00\u90E8\u5206\u7EC4\u4EF6\u505C\u6B62\u8FD0\u884C\uFF0C\u6216\u8005\u8FD9\u4E9B\u8BA1\u7B97\u673A\u90FD\u5728\u6B63\u5E38\u8FD0\u884C\uFF0C\u4F46\u662F\u7F51\u7EDC\u4E2D\u65AD\u4E86\u6216\u8005\u4E0D\u7A33\u5B9A\u3002\u6240\u4EE5\uFF0C\u5C40\u90E8\u9519\u8BEF\u4E5F\u662F\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5F88\u96BE\u7684\u539F\u56E0\u3002</li><li>\u6700\u540E\u4E00\u4E2A\u5BFC\u81F4\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5F88\u96BE\u7684\u539F\u56E0\u662F\uFF0C\u4EBA\u4EEC\u8BBE\u8BA1\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u6839\u672C\u539F\u56E0\u901A\u5E38\u662F\u4E3A\u4E86\u83B7\u5F97\u66F4\u9AD8\u7684\u6027\u80FD\uFF0C\u6BD4\u5982\u8BF4\u4E00\u5343\u53F0\u8BA1\u7B97\u673A\u6216\u8005\u4E00\u5343\u4E2A\u78C1\u76D8\u81C2\u8FBE\u5230\u7684\u6027\u80FD\u3002\u4F46\u662F\u5B9E\u9645\u4E0A\u4E00\u5343\u53F0\u673A\u5668\u5230\u5E95\u6709\u591A\u5C11\u6027\u80FD\u662F\u4E00\u4E2A\u68D8\u624B\u7684\u95EE\u9898\uFF0C\u8FD9\u91CC\u6709\u5F88\u591A\u96BE\u70B9\u3002\u6240\u4EE5\u901A\u5E38\u9700\u8981\u500D\u52A0\u5C0F\u5FC3\u5730\u8BBE\u8BA1\u624D\u80FD\u8BA9\u7CFB\u7EDF\u5B9E\u9645\u8FBE\u5230\u4F60\u671F\u671B\u7684\u6027\u80FD\u3002</li></ul><h2 id="\u6211\u4EEC\u9700\u8981\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u6211\u4EEC\u9700\u8981\u89E3\u51B3" aria-hidden="true">#</a> \u6211\u4EEC\u9700\u8981\u89E3\u51B3</h2><p>\u672C\u95E8\u8BFE\u7A0B\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\u3002\u901A\u5E38\u6765\u8BF4\uFF0C\u95EE\u9898\u548C\u89E3\u51B3\u65B9\u6848\u5728\u6280\u672F\u4E0A\u90FD\u5F88\u6709\u8DA3\u3002\u5BF9\u4E8E\u8FD9\u4E9B\u95EE\u9898\uFF0C\u6709\u4E9B\u6709\u5F88\u597D\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6709\u4E9B\u5C31\u6CA1\u6709\u90A3\u4E48\u597D\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5E94\u7528\u5728\u5F88\u591A\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7CFB\u7EDF\uFF0C\u4F8B\u5982\u5927\u578B\u7F51\u7AD9\u901A\u5E38\u662F\u7531\u5927\u91CF\u7684\u8BA1\u7B97\u673A\u6784\u6210\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u6765\u8FD0\u884C\u3002\u5F53\u6211\u521A\u5F00\u59CB\u6559\u8FD9\u95E8\u8BFE\u7684\u65F6\u5019\uFF0C\u5206\u5E03\u5F0F\u7CFB\u7EDF\u8FD8\u662F\u4E00\u79CD\u5B66\u672F\u4E0A\u7684\u597D\u5947\u5C1D\u8BD5\u3002\u4EBA\u4EEC\u53EA\u662F\u53D1\u73B0\u6709\u65F6\u9700\u8981\u4E00\u4E9B\u5C0F\u89C4\u6A21\u7684\u7CFB\u7EDF\uFF0C\u5E76\u4E14\u9884\u611F\u5728\u672A\u6765\u8FD9\uFF08\u5927\u89C4\u6A21\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF09\u53EF\u80FD\u5F88\u91CD\u8981\u3002\u4F46\u662F\u73B0\u5728\uFF0C\u968F\u7740\u5927\u578B\u7F51\u7AD9\u7684\u5174\u8D77\u548C\u63A8\u52A8\uFF0C\u51FA\u73B0\u4E86\u5927\u91CF\u7684\u6570\u636E\u548C\u5927\u578B\u6570\u636E\u4E2D\u5FC3\u3002\u5728\u8FC7\u53BB\u7684\u4E8C\u5341\u5E74\u4E2D\uFF0C\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5DF2\u7ECF\u662F\u8BA1\u7B97\u67B6\u6784\u4E2D\u5F88\u91CD\u8981\u7684\u4E00\u90E8\u5206\u3002\u8FD9\u610F\u5473\u7740\u5927\u91CF\u7684\u7CBE\u529B\u6295\u5165\u5230\u89E3\u51B3\u76F8\u5173\u95EE\u9898\u7684\u5DE5\u4F5C\u4E2D\uFF0C\u4F46\u662F\u540C\u6837\u6709\u5C11\u6570\u95EE\u9898\u8FD8\u6CA1\u6709\u88AB\u89E3\u51B3\u3002\u5982\u679C\u4F60\u662F\u4E2A\u7814\u7A76\u751F\uFF0C\u5E76\u4E14\u5BF9\u8FD9\u65B9\u9762\u7814\u7A76\u611F\u5174\u8DA3\uFF0C\u8FD8\u6709\u5F88\u591A\u5173\u4E8E\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u95EE\u9898\u7B49\u7740\u4F60\u53BB\u89E3\u51B3\uFF0C\u53BB\u8FDB\u884C\u76F8\u5173\u7814\u7A76\u3002\u6700\u540E \u5982\u679C\u4F60\u662F\u4E00\u4F4D\u70ED\u8877\u52A8\u624B\u7684\u540C\u5B66\uFF0C\u8FD9\u4F1A\u662F\u4E00\u95E8\u4E0D\u9519\u7684\u8BFE\u7A0B\uFF0C\u56E0\u4E3A\u5B83\u6709\u4E00\u7CFB\u5217\u5B9E\u9A8C\uFF0C\u4F60\u4F1A\u7F16\u5199\u51FA\u8D34\u8FD1\u73B0\u5B9E\uFF0C\u5E76\u4E14\u5173\u6CE8\u6027\u80FD\u548C\u5BB9\u9519\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u3002\u6240\u4EE5\u4F60\u4F1A\u6709\u5F88\u591A\u673A\u4F1A\u53BB\u6784\u5EFA\u4E00\u4E2A\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5E76\u4E14\u8BA9\u4ED6\u4EEC\u6B63\u5E38\u5DE5\u4F5C\u3002</p><h2 id="\u8BFE\u7A0B\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u8BFE\u7A0B\u7ED3\u6784" aria-hidden="true">#</a> \u8BFE\u7A0B\u7ED3\u6784</h2><p>\u6388\u8BFE\u5185\u5BB9\u4F1A\u56F4\u7ED5\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u4E24\u4E2A\u65B9\u9762\uFF08\u6027\u80FD\u548C\u5BB9\u9519\uFF09\u3002\u6709\u51E0\u8282\u8BFE\u4F1A\u4ECB\u7ECD\u4E00\u4E9B\u5173\u4E8E\u7F16\u7A0B\u5B9E\u9A8C\u7684\u5185\u5BB9\u3002\u8BB8\u591A\u8BFE\u7A0B\u6211\u4EEC\u5C06\u4F1A\u4EE5\u6848\u4F8B\u5206\u6790\u4E3A\u4E3B\u8981\u5F62\u5F0F\u3002\u6211\u4F1A\u5728\u8BFE\u524D\u63D0\u4F9B\u4E00\u4E9B\u5173\u4E8E\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u8BBA\u6587\uFF0C\u8FD9\u4E9B\u8BBA\u6587\u6709\u4E9B\u662F\u5B66\u672F\u7814\u7A76\uFF0C\u4E5F\u6709\u4E00\u4E9B\u662F\u5DE5\u4E1A\u754C\u5173\u4E8E\u73B0\u5B9E\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848\u3002\u6388\u8BFE\u5185\u5BB9\u4F1A\u88AB\u5F55\u50CF\u5E76\u88AB\u4E0A\u4F20\u5230\u7F51\u7EDC\uFF0C\u8FD9\u6837\u4E0D\u5728\u8BFE\u5802\u7684\u4EBA\u4E5F\u53EF\u4EE5\u5728\u522B\u7684\u5730\u65B9\u89C2\u770B\u89C6\u9891\uFF0C\u540C\u65F6\u4F60\u4EEC\u4E5F\u53EF\u4EE5\u56DE\u987E\u8BFE\u7A0B\u89C6\u9891\u3002</p><p>\u8FD9\u91CC\u7684\u8BBA\u6587\u6BCF\u5468\u9700\u8981\u8BFB\u4E00\u7BC7\uFF0C\u8BBA\u6587\u4E3B\u8981\u662F\u7814\u7A76\u8BBA\u6587\uFF0C\u4E5F\u6709\u4E00\u4E9B\u7ECF\u5178\u8BBA\u6587\uFF0C\u6BD4\u5982\u4ECA\u5929\u6211\u5E0C\u671B\u4F60\u4EEC\u9605\u8BFB\u7684\u8BBA\u6587\u662FMapReduce\u7684\u8BBA\u6587\u3002\u8FD9\u7BC7\u8BBA\u6587\u5F88\u8001\uFF0C\u4F46\u662F\u8FD9\u7BC7\u8BBA\u6587\u4E0D\u8BBA\u5728\u5B66\u672F\u754C\u8FD8\u662F\u5DE5\u4E1A\u754C\u90FD\u6FC0\u53D1\u4E86\u5DE8\u5927\u7684\u5173\u4E8E\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u5174\u8DA3\u3002\u6240\u4EE5\uFF0C\u8BBA\u6587\u6709\u4E00\u4E9B\u662F\u7ECF\u5178\u8BBA\u6587\uFF0C\u4E5F\u6709\u4E00\u4E9B\u6700\u8FD1\u53D1\u5E03\u7684\u8BBA\u6587\uFF0C\u7528\u6765\u8BA8\u8BBA\u6700\u8FD1\u4EBA\u4EEC\u5173\u5FC3\u7684\u6700\u65B0\u7814\u7A76\u6210\u679C\u3002\u6211\u5E0C\u671B\u901A\u8FC7\u8FD9\u4E9B\u8BBA\u6587\u53EF\u4EE5\u8BA9\u4F60\u4EEC\u5F04\u6E05\u695A\uFF0C\u4EC0\u4E48\u662F\u57FA\u672C\u7684\u95EE\u9898\uFF0C\u7814\u7A76\u8005\u4EEC\u6709\u54EA\u4E9B\u60F3\u6CD5\uFF0C\u8FD9\u4E9B\u60F3\u6CD5\u53EF\u80FD\u4F1A\uFF0C\u4E5F\u53EF\u80FD\u4E0D\u4F1A\u5BF9\u89E3\u51B3\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u95EE\u9898\u6709\u7528\u3002\u6211\u4EEC\u6709\u65F6\u4F1A\u8BA8\u8BBA\u8FD9\u4E9B\u8BBA\u6587\u4E2D\u7684\u4E00\u4E9B\u5B9E\u65BD\u7EC6\u8282\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u7EC6\u8282\u4E0E\u5B9E\u9645\u6784\u5EFA\u8F6F\u4EF6\u7CFB\u7EDF\u6709\u5F88\u591A\u5173\u8054\u3002\u6211\u4EEC\u540C\u6837\u4F1A\u82B1\u4E00\u4E9B\u65F6\u95F4\u53BB\u770B\u5BF9\u4EBA\u4EEC\u5BF9\u7CFB\u7EDF\u7684\u8BC4\u4F30\u3002\u4EBA\u4EEC\u662F\u5982\u4F55\u901A\u8FC7\u7CFB\u7EDF\u5BB9\u9519\u6027\u548C\u6027\u80FD\u6765\u8BC4\u4F30\u4E00\u4E2A\u5206\u5E03\u5F0F\u7CFB\u7EDF\u3002\u6211\u5E0C\u671B\u4F60\u4EEC\u5728\u6BCF\u6B21\u8BB2\u8BFE\u524D\uFF0C\u90FD\u53EF\u4EE5\u5B8C\u6210\u76F8\u5173\u8BBA\u6587\u7684\u9605\u8BFB\u3002\u5982\u679C\u6CA1\u6709\u63D0\u524D\u9605\u8BFB\uFF0C\u5149\u662F\u8BFE\u7A0B\u672C\u8EAB\u7684\u5185\u5BB9\u6216\u8BB8\u6CA1\u6709\u90A3\u4E48\u6709\u610F\u4E49\uFF0C\u56E0\u4E3A\u6211\u4EEC\u6CA1\u6709\u8DB3\u591F\u7684\u65F6\u95F4\u6765\u89E3\u91CA\u8BBA\u6587\u4E2D\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u540C\u65F6\u6765\u53CD\u601D\u8BBA\u6587\u4E2D\u4E00\u4E9B\u6709\u610F\u601D\u7684\u5730\u65B9\u3002\u6240\u4EE5\uFF0C\u6211\u771F\u7684\u5E0C\u671B\u5927\u5BB6\u6765\u8BFE\u5802\u524D\u5148\u9605\u8BFB\u8BBA\u6587\u3002\u6211\u4E5F\u5E0C\u671B\u5FEB\u901F\u9AD8\u6548\u7684\u8BFB\u8BBA\u6587\u4F1A\u662F\u8FD9\u5802\u8BFE\u7684\u4E00\u4E2A\u6536\u83B7\uFF0C\u6BD4\u5982\u8DF3\u8FC7\u4E00\u4E9B\u5E76\u4E0D\u592A\u91CD\u8981\u7684\u90E8\u5206\uFF0C\u800C\u5173\u6CE8\u4F5C\u8005\u91CD\u8981\u7684\u60F3\u6CD5\u3002\u6211\u4EEC\u8BFE\u7A0B\u7F51\u7AD9\u4E0A\u6BCF\u4E00\u4E2A\u65E5\u7A0B\u7684\u94FE\u63A5\u90FD\u6709\u4E00\u4E9B\u601D\u8003\u95EE\u9898\uFF0C\u4F60\u5E94\u8BE5\u5728\u8BFB\u5B8C\u6BCF\u7BC7\u8BBA\u6587\u540E\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\u3002\u6211\u4EEC\u4E5F\u9700\u8981\u4F60\u5728\u7F51\u7AD9\u4E0A\u63D0\u51FA\u5173\u4E8E\u8BBA\u6587\u7684\u4E00\u4E9B\u95EE\u9898\uFF0C\u53EF\u4EE5\u8BA9\u6211\u601D\u8003\u4E00\u4E0B\u6211\u5BF9\u8BFE\u7A0B\u7684\u51C6\u5907\u3002\u5982\u679C\u6211\u6709\u65F6\u95F4\u6211\u4F1A\u81F3\u5C11\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u56DE\u7B54\u4E00\u90E8\u5206\u95EE\u9898\u3002\u8FD9\u4E9B\u95EE\u9898\u548C\u56DE\u7B54\u90FD\u9700\u8981\u8BFE\u7A0B\u524D\u4E00\u5929\u7684\u96F6\u70B9\u524D\u63D0\u4EA4\u3002</p><p>\u6709\u4E24\u6B21\u8003\u8BD5\uFF0C\u4E00\u6B21\u662F\u968F\u5802\u671F\u4E2D\uFF0C\u5927\u6982\u5728\u6625\u5047\u524D\u6700\u540E\u4E00\u8282\u8BFE\uFF1B\u5E76\u4E14\u4F1A\u5728\u5B66\u671F\u671F\u672B\u5468\u8FCE\u6765\u671F\u672B\u8003\u8BD5\u3002\u8003\u8BD5\u5185\u5BB9\u4E3B\u8981\u4E3A\u8BBA\u6587\u548C\u5B9E\u9A8C\u4E2D\u7684\u5185\u5BB9\u3002\u6211\u5EFA\u8BAE\u6700\u597D\u7684\u51C6\u5907\u65B9\u5F0F\u5F53\u7136\u53C2\u52A0\u8BFE\u5802\u6388\u8BFE\uFF0C\u5E76\u4E14\u9605\u8BFB\u8BBA\u6587\u3002\u53E6\u4E00\u4E2A\u597D\u7684\u51C6\u5907\u8003\u8BD5\u7684\u65B9\u5F0F\u5C31\u662F\u67E5\u770B\u6211\u4EEC\u8FC7\u53BB20\u5E74\u6240\u6709\u7684\u8003\u8BD5\uFF0C\u8FD9\u5728\u7F51\u7AD9\u4E0A\u90FD\u6709\u94FE\u63A5\u3002\u8FD9\u6837\u4F60\u5C31\u77E5\u9053\uFF0C\u6211\u4F1A\u5728\u8003\u8BD5\u4E2D\u95EE\u54EA\u4E9B\u95EE\u9898\uFF1F\u56E0\u4E3A\u6211\u4EEC\uFF08\u76F8\u6BD4\u5F80\u5E74\uFF09\u4F1A\u6D89\u53CA\u5230\u4E00\u4E9B\u91CD\u590D\u7684\u8BBA\u6587\uFF0C\u6240\u4EE5\u4E0D\u53EF\u907F\u514D\u7684\uFF0C\u6211\u4F1A\u95EE\u4E00\u4E9B\u4E0E\u5386\u5E74\u9898\u76EE\u7C7B\u4F3C\u7684\u95EE\u9898\u3002</p><p>\u6709\u56DB\u6B21\u7F16\u7A0B\u5B9E\u9A8C\u3002\u7B2C\u4E00\u6B21\u5B9E\u9A8C\u9700\u8981\u5728\u4E0B\u5468\u4E94\u524D\u5B8C\u6210\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684MapReduce\u5B9E\u9A8C\u3002\u4F60\u4EEC\u8981\u6839\u636E\u4F60\u4EEC\u5728\u8BBA\u6587\u4E2D\u8BFB\u5230\u7684\u6765\u5B9E\u73B0\u4F60\u4EEC\u7248\u672C\u7684MapReduce\u3002\u6211\u4EEC\u8FC7\u4E00\u4F1A\u5C31\u4F1A\u8BA8\u8BBA\u8FD9\u4E2A\u8BBA\u6587\u3002\u7B2C\u4E8C\u4E2A\u5B9E\u9A8C\u5B9E\u73B0Raft\u7B97\u6CD5\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7406\u8BBA\u4E0A\u901A\u8FC7\u590D\u5236\u6765\u8BA9\u7CFB\u7EDF\u5BB9\u9519\u7684\u7B97\u6CD5\uFF0C\u5177\u4F53\u662F\u901A\u8FC7\u590D\u5236\u548C\u51FA\u73B0\u6545\u969C\u65F6\u81EA\u52A8\u5207\u6362\u6765\u5B9E\u73B0\u3002\u7B2C\u4E09\u4E2A\u5B9E\u9A8C\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u4F60\u7684Raft\u7B97\u6CD5\u5B9E\u73B0\u6765\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u4EE5\u5BB9\u9519\u7684KV\u670D\u52A1\u3002\u7B2C\u56DB\u4E2A\u5B9E\u9A8C\uFF0C\u4F60\u9700\u8981\u628A\u4F60\u5199\u7684KV\u670D\u52A1\u5668\u5206\u53D1\u5230\u4E00\u7CFB\u5217\u7684\u72EC\u7ACB\u96C6\u7FA4\u4E2D\uFF0C\u8FD9\u6837\u4F60\u4F1A\u5207\u5206\u4F60\u7684KV\u670D\u52A1\uFF0C\u5E76\u901A\u8FC7\u8FD0\u884C\u8FD9\u4E9B\u72EC\u7ACB\u7684\u526F\u672C\u96C6\u7FA4\u8FDB\u884C\u52A0\u901F\u3002\u540C\u65F6\uFF0C\u4F60\u4E5F\u8981\u8D1F\u8D23\u5C06\u4E0D\u540C\u7684\u6570\u636E\u5757\u5728\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E4B\u95F4\u642C\u8FC1\uFF0C\u5E76\u786E\u4FDD\u6570\u636E\u5B8C\u6574\u3002\u8FD9\u91CC\u6211\u4EEC\u901A\u5E38\u79F0\u4E4B\u4E3A\u5206\u7247\u5F0FKV\u670D\u52A1\u3002\u5206\u7247\u662F\u6307\u6211\u4EEC\u5C06\u6570\u636E\u5728\u591A\u4E2A\u670D\u52A1\u5668\u4E0A\u505A\u4E86\u5206\u533A\uFF0C\u6765\u5B9E\u73B0\u5E76\u884C\u7684\u52A0\u901F\u3002</p><p><img src="http://sm.nsddd.top/smasedfsdf.png" alt="img"></p><p>\u5982\u679C\u4F60\u4E0D\u60F3\u505A\u5B9E\u9A8C\u56DB\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u4F60\u81EA\u5DF1\u7684\u9879\u76EE\u3002\u5982\u679C\u4F60\u5BF9\u5206\u5E03\u5F0F\u7CFB\u7EDF\u6709\u4E00\u4E9B\u81EA\u5DF1\u7684\u60F3\u6CD5\uFF0C\u6BD4\u5982\u6211\u4EEC\u8BFE\u5802\u4E0A\u8BA8\u8BBA\u5230\u7684\u67D0\u4E2A\u7C7B\u578B\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u6216\u8005\u8BF4\u4F60\u6709\u4E00\u4E9B\u81EA\u5DF1\u7684\u8FFD\u6C42\u5E76\u4E14\u60F3\u5BF9\u8FD9\u4E2A\u60F3\u6CD5\u8FDB\u884C\u8BC4\u4F30\uFF0C\u770B\u4ED6\u4EEC\u80FD\u4E0D\u80FD\u6B63\u786E\u8FD0\u884C\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u505A\u8FD9\u4E2A\u9879\u76EE\u3002\u8FD9\u4E2A\u9879\u76EE\u4E2D\u4F60\u9700\u8981\u8054\u7CFB\u4E00\u4E9B\u4F60\u7684\u540C\u5B66\uFF0C\u56E0\u4E3A\u6211\u4EEC\u9700\u8981\u4EE52-3\u4EBA\u7684\u5C0F\u7EC4\u5F62\u5F0F\u5B8C\u6210\u3002\u4F60\u9700\u8981\u628A\u60F3\u6CD5\u53D1\u7ED9\u6211\uFF0C\u6211\u6765\u786E\u5B9A\u4E0B\u662F\u5426\u5408\u9002\u6216\u8005\u662F\u7ED9\u4F60\u4E00\u4E9B\u5EFA\u8BAE\u3002\u5982\u679C\u6211\u89C9\u5F97\u5408\u9002\uFF0C\u4F60\u4E5F\u60F3\u505A\u8FD9\u4E2A\u9879\u76EE\uFF0C\u4F60\u5C31\u53EF\u4EE5\u7528\u5B83\u5728\u672C\u5B66\u671F\u672B\u4EE3\u66FF\u5B9E\u9A8C\u56DB\u3002\u4F60\u9700\u8981\u505A\u4E00\u4E9B\u7CFB\u7EDF\u8BBE\u8BA1\uFF0C\u5E76\u6784\u5EFA\u4E00\u4E2A\u771F\u5B9E\u7684\u7CFB\u7EDF\u5E76\u5728\u6700\u540E\u4E00\u8282\u8BFE\u524D\u6F14\u793A\u3002\u540C\u65F6\u9700\u8981\u4EA4\u4E00\u4E2A\u7B80\u77ED\u7684\u5173\u4E8E\u5982\u4F55\u6784\u5EFA\u5B83\u7684\u4E66\u9762\u62A5\u544A\u3002\u6211\u5728\u7F51\u7AD9\u4E0A\u4E5F\u63D0\u51FA\u4E00\u4E9B\u6216\u8BB8\u5BF9\u4F60\u4EEC\u6784\u5EFA\u8FD9\u4E2A\u9879\u76EE\u6709\u5E2E\u52A9\u7684\u5927\u80C6\u7684\u60F3\u6CD5\u3002\u5F53\u7136\u6700\u597D\u7684\u9879\u76EE\u5E94\u8BE5\u662F\uFF0C\u4F60\u81EA\u5DF1\u6709\u4E00\u4E2A\u5F88\u597D\u7684\u60F3\u6CD5\u3002\u4F60\u9700\u8981\u9009\u62E9\u4E00\u4E2A\u548C\u8BFE\u7A0B\u8BA8\u8BBA\u5185\u5BB9\u76F8\u5173\u7684\u7CFB\u7EDF\u4F5C\u4E3A\u4F60\u7684\u9879\u76EE\u3002</p><p>\u56DE\u5230\u5B9E\u9A8C\u90E8\u5206\uFF0C\u5B9E\u9A8C\u6210\u7EE9\u4F1A\u7531\u4E00\u7CFB\u5217\u9488\u5BF9\u4F60\u4EE3\u7801\u7684\u6D4B\u8BD5\u6784\u6210\uFF0C\u6240\u4EE5\u4F60\u7684\u6210\u7EE9\u5C31\u662F\u6211\u4EEC\u6240\u6709\u6D4B\u8BD5\u7684\u7ED3\u679C\u3002\u6211\u4EEC\u4F1A\u516C\u5F00\u5168\u90E8\u7684\u6D4B\u8BD5\u6570\u636E\uFF0C\u5E76\u6CA1\u6709\u9690\u85CF\u7684\u6D4B\u8BD5\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u5B8C\u6210\u4E86\u5B9E\u9A8C\u5E76\u4E14\u53EF\u9760\u7684\u901A\u8FC7\u4E86\u5168\u90E8\u6D4B\u8BD5\uFF0C\u9664\u975E\u51FA\u73B0\u4E00\u4E9B\u611A\u8822\u7684\u95EE\u9898\uFF0C\u4E00\u822C\u6765\u8BF4\u5C31\u4F1A\u5F97\u5230\u6EE1\u5206\u3002\u5E0C\u671B\u4F60\u4EEC\u4E0D\u4F1A\u6709\u4EFB\u4F55\u5173\u4E8E\u5B9E\u9A8C\u8BC4\u5206\u7684\u95EE\u9898\u3002\u6211\u9700\u8981\u63D0\u9192\u4F60\u7684\u662F\uFF0Cdebug\u8FD9\u4E9B\u4EE3\u7801\u53EF\u80FD\u5F88\u8017\u65F6\u95F4\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u5B83\u4EEC\u6709\u5F88\u591A\u5E76\u53D1\u548C\u901A\u4FE1\uFF0C\u53EF\u80FD\u53D1\u751F\u4E00\u4E9B\u5947\u602A\u4E14\u56F0\u96BE\u7684\u9519\u8BEF\u3002\u6240\u4EE5\uFF0C\u4F60\u4EEC\u5E94\u8BE5\u5C3D\u65E9\u5F00\u59CB\u5B9E\u9A8C \uFF0C\u4E0D\u8981\u5728\u63D0\u4EA4\u5B9E\u9A8C\u7684\u6700\u540E\u65F6\u523B\u8FD8\u8981\u5904\u7406\u5F88\u591A\u9EBB\u70E6\u3002\u5982\u679C\u6709\u5BF9\u5B9E\u9A8C\u6709\u95EE\u9898\uFF0C\u53EF\u4EE5\u5728\u5DE5\u4F5C\u65F6\u95F4\u6765\u5230\u52A9\u6559\u529E\u516C\u5BA4\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728Piazza\u4E0A\u81EA\u7531\u63D0\u95EE\u3002\u5F53\u7136\u6211\u4E5F\u5E0C\u671B\uFF0C\u5982\u679C\u4F60\u77E5\u9053\u4E00\u4E2A\u95EE\u9898\u7684\u7B54\u6848\uFF0C\u4F60\u53EF\u4EE5\u5728Piazza\u56DE\u7B54\u522B\u4EBA\u7684\u63D0\u95EE\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="0.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517} </a><a href="2.md" style="float:right;"> \uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>',27),B=t("\u24C2\uFE0F\u56DE\u5230\u76EE\u5F55\u{1F3E0}"),L={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},D=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),I=t(")"),K=t("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 \uFF1A\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),P={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},S=t("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function T(q,F){const i=a("ExternalLinkIcon"),n=a("router-link"),r=a("RouterLink");return d(),h("div",null,[e("ul",null,[e("li",null,[e("a",_,[p,l(i)])])]),f,b,m,g,e("blockquote",null,[e("p",null,[x,e("a",k,[C,l(i)])])]),E,e("nav",y,[e("ul",null,[e("li",null,[l(n,{to:"#\u5206\u5E03\u5F0F\u95EE\u9898"},{default:o(()=>[v]),_:1}),e("ul",null,[e("li",null,[l(n,{to:"#\u4F7F\u7528\u7684\u6280\u672F"},{default:o(()=>[R]),_:1})])])]),e("li",null,[l(n,{to:"#\u8BFE\u7A0B"},{default:o(()=>[M]),_:1})]),e("li",null,[l(n,{to:"#\u6211\u4EEC\u9700\u8981\u8BA8\u8BBA"},{default:o(()=>[V]),_:1})]),e("li",null,[l(n,{to:"#\u6211\u4EEC\u9700\u8981\u89E3\u51B3"},{default:o(()=>[w]),_:1})]),e("li",null,[l(n,{to:"#\u8BFE\u7A0B\u7ED3\u6784"},{default:o(()=>[A]),_:1})]),e("li",null,[l(n,{to:"#end-\u94FE\u63A5"},{default:o(()=>[N]),_:1})])])]),z,e("ul",null,[e("li",null,[e("p",null,[l(r,{to:"/mit-6-824/"},{default:o(()=>[B]),_:1})])]),e("li",null,[e("p",null,[e("a",L,[D,l(i)]),I])]),e("li",null,[e("p",null,[K,e("a",P,[S,l(i)])])])])])}const H=s(c,[["render",T],["__file","1.html.vue"]]);export{H as default};
