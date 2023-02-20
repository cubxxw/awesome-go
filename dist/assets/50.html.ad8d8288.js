import{_ as s,r as t,o as r,c as l,a as e,b as i,w as c,d as u,e as a}from"./app.64dac66d.js";const o={},h=u(`<h1 id="elasticsearch-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#elasticsearch-\u4ECB\u7ECD" aria-hidden="true">#</a> ElasticSearch \u4ECB\u7ECD</h1><h3 id="_1-1-1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u4ECB\u7ECD" aria-hidden="true">#</a> 1.1.1. \u4ECB\u7ECD</h3><p>Elasticearch\uFF08ES\uFF09\u662F\u4E00\u4E2A\u57FA\u4E8E Lucene \u6784\u5EFA\u7684\u5F00\u6E90\u3001\u5206\u5E03\u5F0F\u3001RESTful \u63A5\u53E3\u7684\u5168\u6587\u641C\u7D22\u5F15\u64CE\u3002Elasticsearch \u8FD8\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u6587\u6863\u6570\u636E\u5E93\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u5B57\u6BB5\u5747\u53EF\u88AB\u7D22\u5F15\uFF0C\u800C\u4E14\u6BCF\u4E2A\u5B57\u6BB5\u7684\u6570\u636E\u5747\u53EF\u88AB\u641C\u7D22\uFF0CES \u80FD\u591F\u6A2A\u5411\u6269\u5C55\u81F3\u6570\u4EE5\u767E\u8BA1\u7684\u670D\u52A1\u5668\u5B58\u50A8\u4EE5\u53CA\u5904\u7406 PB \u7EA7\u7684\u6570\u636E\u3002\u53EF\u4EE5\u5728\u6781\u77ED\u7684\u65F6\u95F4\u5185\u5B58\u50A8\u3001\u641C\u7D22\u548C\u5206\u6790\u5927\u91CF\u7684\u6570\u636E\u3002\u901A\u5E38\u4F5C\u4E3A\u5177\u6709\u590D\u6742\u641C\u7D22\u573A\u666F\u60C5\u51B5\u4E0B\u7684\u6838\u5FC3\u53D1\u52A8\u673A\u3002</p><h3 id="_1-1-2-elasticsearch-\u80FD\u505A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-1-2-elasticsearch-\u80FD\u505A\u4EC0\u4E48" aria-hidden="true">#</a> 1.1.2. Elasticsearch \u80FD\u505A\u4EC0\u4E48</h3><ul><li>\u5F53\u4F60\u7ECF\u8425\u4E00\u5BB6\u7F51\u4E0A\u5546\u5E97\uFF0C\u4F60\u53EF\u4EE5\u8BA9\u4F60\u7684\u5BA2\u6237\u641C\u7D22\u4F60\u5356\u7684\u5546\u54C1\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ElasticSearch \u6765\u5B58\u50A8\u4F60\u7684\u6574\u4E2A\u4EA7\u54C1\u76EE\u5F55\u548C\u5E93\u5B58\u4FE1\u606F\uFF0C\u4E3A\u5BA2\u6237\u63D0\u4F9B\u7CBE\u51C6\u641C\u7D22\uFF0C\u53EF\u4EE5\u4E3A\u5BA2\u6237\u63A8\u8350\u76F8\u5173\u5546\u54C1\u3002</li><li>\u5F53\u4F60\u60F3\u6536\u96C6\u65E5\u5FD7\u6216\u8005\u4EA4\u6613\u6570\u636E\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5206\u6790\u548C\u6316\u6398\u8FD9\u4E9B\u6570\u636E\uFF0C\u5BFB\u627E\u8D8B\u52BF\uFF0C\u8FDB\u884C\u7EDF\u8BA1\uFF0C\u603B\u7ED3\uFF0C\u6216\u53D1\u73B0\u5F02\u5E38\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 Logstash \u6216\u8005\u5176\u4ED6\u5DE5\u5177\u6765\u8FDB\u884C\u6536\u96C6\u6570\u636E\uFF0C\u5F53\u8FD9\u5F15\u8D77\u6570\u636E\u5B58\u50A8\u5230 ElasticsSearch \u4E2D\u3002\u4F60\u53EF\u4EE5\u641C\u7D22\u548C\u6C47\u603B\u8FD9\u4E9B\u6570\u636E\uFF0C\u627E\u5230\u4EFB\u4F55\u4F60\u611F\u5174\u8DA3\u7684\u4FE1\u606F\u3002</li><li>\u5BF9\u4E8E\u7A0B\u5E8F\u5458\u6765\u8BF4\uFF0C\u6BD4\u8F83\u6709\u540D\u7684\u6848\u4F8B\u662F GitHub\uFF0CGitHub \u7684\u641C\u7D22\u662F\u57FA\u4E8E ElasticSearch \u6784\u5EFA\u7684\uFF0C\u5728 github.com<code>/search</code>\u9875\u9762\uFF0C\u4F60\u53EF\u4EE5\u641C\u7D22\u9879\u76EE\u3001\u7528\u6237\u3001issue\u3001pull request\uFF0C\u8FD8\u6709\u4EE3\u7801\u3002\u5171\u6709<code>40~50</code>\u4E2A\u7D22\u5F15\u5E93\uFF0C\u5206\u522B\u7528\u4E8E\u7D22\u5F15\u7F51\u7AD9\u9700\u8981\u8DDF\u8E2A\u7684\u5404\u79CD\u6570\u636E\u3002\u867D\u7136\u53EA\u7D22\u5F15\u9879\u76EE\u7684\u4E3B\u5206\u652F\uFF08master\uFF09\uFF0C\u4F46\u8FD9\u4E2A\u6570\u636E\u91CF\u4F9D\u7136\u5DE8\u5927\uFF0C\u5305\u62EC 20 \u4EBF\u4E2A\u7D22\u5F15\u6587\u6863\uFF0C30TB \u7684\u7D22\u5F15\u6587\u4EF6\u3002</li></ul><h3 id="_1-1-3-elasticsearch-\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-1-3-elasticsearch-\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> 1.1.3. Elasticsearch \u57FA\u672C\u6982\u5FF5</h3><h4 id="near-realtime-nrt-\u51E0\u4E4E\u5B9E\u65F6" tabindex="-1"><a class="header-anchor" href="#near-realtime-nrt-\u51E0\u4E4E\u5B9E\u65F6" aria-hidden="true">#</a> Near Realtime(NRT) \u51E0\u4E4E\u5B9E\u65F6</h4><p>Elasticsearch \u662F\u4E00\u4E2A\u51E0\u4E4E\u5B9E\u65F6\u7684\u641C\u7D22\u5E73\u53F0\u3002\u610F\u601D\u662F\uFF0C\u4ECE\u7D22\u5F15\u4E00\u4E2A\u6587\u6863\u5230\u8FD9\u4E2A\u6587\u6863\u53EF\u88AB\u641C\u7D22\u53EA\u9700\u8981\u4E00\u70B9\u70B9\u7684\u5EF6\u8FDF\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u4E00\u822C\u4E3A\u6BEB\u79D2\u7EA7\u3002</p><h4 id="cluster-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#cluster-\u96C6\u7FA4" aria-hidden="true">#</a> Cluster \u96C6\u7FA4</h4><p>\u7FA4\u96C6\u662F\u4E00\u4E2A\u6216\u591A\u4E2A\u8282\u70B9\uFF08\u670D\u52A1\u5668\uFF09\u7684\u96C6\u5408\uFF0C \u8FD9\u4E9B\u8282\u70B9\u5171\u540C\u4FDD\u5B58\u6574\u4E2A\u6570\u636E\uFF0C\u5E76\u5728\u6240\u6709\u8282\u70B9\u4E0A\u63D0\u4F9B\u8054\u5408\u7D22\u5F15\u548C\u641C\u7D22\u529F\u80FD\u3002\u4E00\u4E2A\u96C6\u7FA4\u7531\u4E00\u4E2A\u552F\u4E00\u96C6\u7FA4 ID \u786E\u5B9A\uFF0C\u5E76\u6307\u5B9A\u4E00\u4E2A\u96C6\u7FA4\u540D\uFF08\u9ED8\u8BA4\u4E3A \u201Celasticsearch\u201D\uFF09\u3002\u8BE5\u96C6\u7FA4\u540D\u975E\u5E38\u91CD\u8981\uFF0C\u56E0\u4E3A\u8282\u70B9\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u96C6\u7FA4\u540D\u52A0\u5165\u7FA4\u96C6\uFF0C\u4E00\u4E2A\u8282\u70B9\u53EA\u80FD\u662F\u7FA4\u96C6\u7684\u4E00\u90E8\u5206\u3002</p><p>\u786E\u4FDD\u5728\u4E0D\u540C\u7684\u73AF\u5883\u4E2D\u4E0D\u8981\u4F7F\u7528\u76F8\u540C\u7684\u7FA4\u96C6\u540D\u79F0\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5BFC\u81F4\u8FDE\u63A5\u9519\u8BEF\u7684\u7FA4\u96C6\u8282\u70B9\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 logging-dev\u3001logging-stage\u3001logging-prod \u5206\u522B\u4E3A\u5F00\u53D1\u3001\u9636\u6BB5\u4EA7\u54C1\u3001\u751F\u4EA7\u96C6\u7FA4\u505A\u8BB0\u5F55\u3002</p><h4 id="node-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#node-\u8282\u70B9" aria-hidden="true">#</a> Node \u8282\u70B9</h4><p>\u8282\u70B9\u662F\u5355\u4E2A\u670D\u52A1\u5668\u5B9E\u4F8B\uFF0C\u5B83\u662F\u7FA4\u96C6\u7684\u4E00\u90E8\u5206\uFF0C\u53EF\u4EE5\u5B58\u50A8\u6570\u636E\uFF0C\u5E76\u53C2\u4E0E\u7FA4\u96C6\u7684\u7D22\u5F15\u548C\u641C\u7D22\u529F\u80FD\u3002\u5C31\u50CF\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u8282\u70B9\u7684\u540D\u79F0\u9ED8\u8BA4\u4E3A\u4E00\u4E2A\u968F\u673A\u7684\u901A\u7528\u552F\u4E00\u6807\u8BC6\u7B26\uFF08UUID\uFF09\uFF0C\u786E\u5B9A\u5728\u542F\u52A8\u65F6\u5206\u914D\u7ED9\u8BE5\u8282\u70B9\u3002\u5982\u679C\u4E0D\u5E0C\u671B\u9ED8\u8BA4\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4EFB\u4F55\u8282\u70B9\u540D\u3002\u8FD9\u4E2A\u540D\u5B57\u5BF9\u7BA1\u7406\u5F88\u91CD\u8981\uFF0C\u76EE\u7684\u662F\u8981\u786E\u5B9A\u4F60\u7684\u7F51\u7EDC\u670D\u52A1\u5668\u5BF9\u5E94\u4E8E\u4F60\u7684 ElasticSearch \u7FA4\u96C6\u8282\u70B9\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7FA4\u96C6\u540D\u914D\u7F6E\u8282\u70B9\u4EE5\u8FDE\u63A5\u7279\u5B9A\u7684\u7FA4\u96C6\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u4E2A\u8282\u70B9\u8BBE\u7F6E\u52A0\u5165\u540D\u4E3A \u201CelasticSearch\u201D \u7684\u96C6\u7FA4\u3002\u8FD9\u610F\u5473\u7740\u5982\u679C\u4F60\u542F\u52A8\u591A\u4E2A\u8282\u70B9\u5728\u7F51\u7EDC\u4E0A\uFF0C\u5047\u8BBE\u4ED6\u4EEC\u80FD\u53D1\u73B0\u5F7C\u6B64\u90FD\u4F1A\u81EA\u52A8\u5F62\u6210\u548C\u52A0\u5165\u4E00\u4E2A\u540D\u4E3A \u201Celasticsearch\u201D \u7684\u96C6\u7FA4\u3002</p><p>\u5728\u5355\u4E2A\u7FA4\u96C6\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u62E5\u6709\u5C3D\u53EF\u80FD\u591A\u7684\u8282\u70B9\u3002\u6B64\u5916\uFF0C\u5982\u679C \u201Celasticsearch\u201D \u5728\u540C\u4E00\u4E2A\u7F51\u7EDC\u4E2D\uFF0C\u6CA1\u6709\u5176\u4ED6\u8282\u70B9\u6B63\u5728\u8FD0\u884C\uFF0C\u4ECE\u5355\u4E2A\u8282\u70B9\u7684\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5F62\u6210\u4E00\u4E2A\u65B0\u7684\u5355\u8282\u70B9\u540D\u4E3A\u201Delasticsearch\u201D\u7684\u96C6\u7FA4\u3002</p><h4 id="index-\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#index-\u7D22\u5F15" aria-hidden="true">#</a> Index \u7D22\u5F15</h4><p>\u7D22\u5F15\u662F\u5177\u6709\u76F8\u4F3C\u7279\u6027\u7684\u6587\u6863\u96C6\u5408\u3002\u4F8B\u5982\uFF0C\u53EF\u4EE5\u4E3A\u5BA2\u6237\u6570\u636E\u63D0\u4F9B\u7D22\u5F15\uFF0C\u4E3A\u4EA7\u54C1\u76EE\u5F55\u5EFA\u7ACB\u53E6\u4E00\u4E2A\u7D22\u5F15\uFF0C\u4EE5\u53CA\u4E3A\u8BA2\u5355\u6570\u636E\u5EFA\u7ACB\u53E6\u4E00\u4E2A\u7D22\u5F15\u3002\u7D22\u5F15\u7531\u540D\u79F0\uFF08\u5FC5\u987B\u5168\u90E8\u4E3A\u5C0F\u5199\uFF09\u6807\u8BC6\uFF0C\u8BE5\u540D\u79F0\u7528\u4E8E\u5728\u5BF9\u5176\u4E2D\u7684\u6587\u6863\u6267\u884C\u7D22\u5F15\u3001\u641C\u7D22\u3001\u66F4\u65B0\u548C\u5220\u9664\u64CD\u4F5C\u65F6\u5F15\u7528\u7D22\u5F15\u3002\u5728\u5355\u4E2A\u7FA4\u96C6\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5B9A\u4E49\u5C3D\u53EF\u80FD\u591A\u7684\u7D22\u5F15\u3002</p><h4 id="type-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#type-\u7C7B\u578B" aria-hidden="true">#</a> Type \u7C7B\u578B</h4><p>\u5728\u7D22\u5F15\u4E2D\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6216\u591A\u4E2A\u7C7B\u578B\u3002\u7C7B\u578B\u662F\u7D22\u5F15\u7684\u903B\u8F91\u7C7B\u522B / \u5206\u533A\uFF0C\u5176\u8BED\u4E49\u5B8C\u5168\u53D6\u51B3\u4E8E\u4F60\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u7C7B\u578B\u5B9A\u4E49\u4E3A\u5177\u6709\u516C\u5171\u5B57\u6BB5\u96C6\u7684\u6587\u6863\u3002\u4F8B\u5982\uFF0C\u5047\u8BBE\u4F60\u8FD0\u884C\u4E00\u4E2A\u535A\u5BA2\u5E73\u53F0\uFF0C\u5E76\u5C06\u6240\u6709\u6570\u636E\u5B58\u50A8\u5728\u4E00\u4E2A\u7D22\u5F15\u4E2D\u3002\u5728\u8FD9\u4E2A\u7D22\u5F15\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u4E3A\u7528\u6237\u6570\u636E\u5B9A\u4E49\u4E00\u79CD\u7C7B\u578B\uFF0C\u4E3A\u535A\u5BA2\u6570\u636E\u5B9A\u4E49\u53E6\u4E00\u79CD\u7C7B\u578B\uFF0C\u4EE5\u53CA\u4E3A\u6CE8\u91CA\u6570\u636E\u5B9A\u4E49\u53E6\u4E00\u7C7B\u578B\u3002</p><h4 id="document-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#document-\u6587\u6863" aria-hidden="true">#</a> Document \u6587\u6863</h4><p>\u6587\u6863\u662F\u53EF\u4EE5\u88AB\u7D22\u5F15\u7684\u4FE1\u606F\u7684\u57FA\u672C\u5355\u4F4D\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u4E3A\u5355\u4E2A\u5BA2\u6237\u63D0\u4F9B\u4E00\u4E2A\u6587\u6863\uFF0C\u5355\u4E2A\u4EA7\u54C1\u63D0\u4F9B\u53E6\u4E00\u4E2A\u6587\u6863\uFF0C\u4EE5\u53CA\u5355\u4E2A\u8BA2\u5355\u63D0\u4F9B\u53E6\u4E00\u4E2A\u6587\u6863\u3002\u672C\u6587\u4EF6\u7684\u8868\u793A\u5F62\u5F0F\u4E3A JSON\uFF08JavaScript Object Notation\uFF09\u683C\u5F0F\uFF0C\u8FD9\u662F\u4E00\u79CD\u975E\u5E38\u666E\u904D\u7684\u4E92\u8054\u7F51\u6570\u636E\u4EA4\u6362\u683C\u5F0F\u3002</p><p>\u5728\u7D22\u5F15 / \u7C7B\u578B\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5B58\u50A8\u5C3D\u53EF\u80FD\u591A\u7684\u6587\u6863\u3002\u8BF7\u6CE8\u610F\uFF0C\u5C3D\u7BA1\u6587\u6863\u7269\u7406\u9A7B\u7559\u5728\u7D22\u5F15\u4E2D\uFF0C\u6587\u6863\u5B9E\u9645\u4E0A\u5FC5\u987B\u7D22\u5F15\u6216\u5206\u914D\u5230\u7D22\u5F15\u4E2D\u7684\u7C7B\u578B\u3002</p><h4 id="shards-replicas-\u5206\u7247\u4E0E\u526F\u672C" tabindex="-1"><a class="header-anchor" href="#shards-replicas-\u5206\u7247\u4E0E\u526F\u672C" aria-hidden="true">#</a> Shards &amp; Replicas \u5206\u7247\u4E0E\u526F\u672C</h4><p>\u7D22\u5F15\u53EF\u4EE5\u5B58\u50A8\u5927\u91CF\u7684\u6570\u636E\uFF0C\u8FD9\u4E9B\u6570\u636E\u53EF\u80FD\u8D85\u8FC7\u5355\u4E2A\u8282\u70B9\u7684\u786C\u4EF6\u9650\u5236\u3002\u4F8B\u5982\uFF0C\u5341\u4EBF\u4E2A\u6587\u4EF6\u5360\u7528\u78C1\u76D8\u7A7A\u95F4 1TB \u7684\u5355\u6307\u6807\u53EF\u80FD\u4E0D\u9002\u5408\u5BF9\u5355\u4E2A\u8282\u70B9\u7684\u78C1\u76D8\u6216\u53EF\u80FD\u592A\u6162\u670D\u52A1\u4EC5\u4ECE\u5355\u4E2A\u8282\u70B9\u7684\u641C\u7D22\u8BF7\u6C42\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0CElasticsearch \u63D0\u4F9B\u7EC6\u5206\u4F60\u7684\u6307\u6807\u5206\u6210\u591A\u4E2A\u5757\u79F0\u4E3A\u5206\u7247\u7684\u80FD\u529B\u3002\u5F53\u4F60\u521B\u5EFA\u4E00\u4E2A\u7D22\u5F15\uFF0C\u4F60\u53EF\u4EE5\u7B80\u5355\u5730\u5B9A\u4E49\u4F60\u60F3\u8981\u7684\u5206\u7247\u6570\u91CF\u3002\u6BCF\u4E2A\u5206\u7247\u672C\u8EAB\u662F\u4E00\u4E2A\u5168\u529F\u80FD\u7684\u3001\u72EC\u7ACB\u7684 \u201C\u6307\u6570\u201D\uFF0C\u53EF\u4EE5\u6258\u7BA1\u5728\u96C6\u7FA4\u4E2D\u7684\u4EFB\u4F55\u8282\u70B9\u3002</p><p><strong>Shards \u5206\u7247\u7684\u91CD\u8981\u6027\u4E3B\u8981\u4F53\u73B0\u5728\u4EE5\u4E0B\u4E24\u4E2A\u7279\u5F81</strong>\uFF1A</p><p>\\1. \u526F\u672C\u4E3A\u5206\u7247\u6216\u8282\u70B9\u5931\u8D25\u63D0\u4F9B\u4E86\u9AD8\u53EF\u7528\u6027\u3002\u4E3A\u6B64\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E00\u4E2A\u526F\u672C\u7684\u5206\u7247\u4E0D\u4F1A\u5206\u914D\u5728\u540C\u4E00\u4E2A\u8282\u70B9\u4F5C\u4E3A\u539F\u59CB\u7684\u6216\u4E3B\u5206\u7247\uFF0C\u526F\u672C\u662F\u4ECE\u4E3B\u5206\u7247\u90A3\u91CC\u590D\u5236\u8FC7\u6765\u7684\u3002</p><p>\\2. \u526F\u672C\u5141\u8BB8\u7528\u6237\u6269\u5C55\u4F60\u7684\u641C\u7D22\u91CF\u6216\u541E\u5410\u91CF\uFF0C\u56E0\u4E3A\u641C\u7D22\u53EF\u4EE5\u5728\u6240\u6709\u526F\u672C\u4E0A\u5E76\u884C\u6267\u884C\u3002</p><h4 id="es-\u57FA\u672C\u6982\u5FF5\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#es-\u57FA\u672C\u6982\u5FF5\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6BD4\u8F83" aria-hidden="true">#</a> ES \u57FA\u672C\u6982\u5FF5\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6BD4\u8F83</h4><table><thead><tr><th>ES \u6982\u5FF5</th><th>\u5173\u7CFB\u578B\u6570\u636E\u5E93</th></tr></thead><tbody><tr><td>Index\uFF08\u7D22\u5F15\uFF09\u652F\u6301\u5168\u6587\u68C0\u7D22</td><td>Database\uFF08\u6570\u636E\u5E93\uFF09</td></tr><tr><td>Type\uFF08\u7C7B\u578B\uFF09</td><td>Table\uFF08\u8868\uFF09</td></tr><tr><td>Document\uFF08\u6587\u6863\uFF09\uFF0C\u4E0D\u540C\u6587\u6863\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u5B57\u6BB5\u96C6\u5408</td><td>Row\uFF08\u6570\u636E\u884C\uFF09</td></tr><tr><td>Field\uFF08\u5B57\u6BB5\uFF09</td><td>Column\uFF08\u6570\u636E\u5217\uFF09</td></tr><tr><td>Mapping\uFF08\u6620\u5C04\uFF09</td><td>Schema\uFF08\u6A21\u5F0F\uFF09</td></tr></tbody></table><h3 id="_1-1-4-es-api" tabindex="-1"><a class="header-anchor" href="#_1-1-4-es-api" aria-hidden="true">#</a> 1.1.4. ES API</h3><p>\u4EE5\u4E0B\u793A\u4F8B\u4F7F\u7528 curl \u6F14\u793A\u3002</p><h4 id="\u67E5\u770B\u5065\u5EB7\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5065\u5EB7\u72B6\u6001" aria-hidden="true">#</a> \u67E5\u770B\u5065\u5EB7\u72B6\u6001</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -X GET 127.0.0.1:9200/_cat/health?v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>epoch      timestamp cluster       status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent
    1564726309 06:11:49  elasticsearch yellow          1         1      3   3    0    0        1             0                  -                 75.0%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u8BE2\u5F53\u524D-es-\u96C6\u7FA4\u4E2D\u6240\u6709\u7684-indices" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5F53\u524D-es-\u96C6\u7FA4\u4E2D\u6240\u6709\u7684-indices" aria-hidden="true">#</a> \u67E5\u8BE2\u5F53\u524D es \u96C6\u7FA4\u4E2D\u6240\u6709\u7684 indices</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -X GET 127.0.0.1:9200/_cat/indices?v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>health status index                uuid                   pri rep docs.count docs.deleted store.size pri.store.size
    green  open   .kibana_task_manager LUo-IxjDQdWeAbR-SYuYvQ   1   0          2            0     45.5kb         45.5kb
    green  open   .kibana_1            PLvyZV1bRDWex05xkOrNNg   1   0          4            1     23.9kb         23.9kb
    yellow open   user                 o42mIpDeSgSWZ6eARWUfKw   1   1          0            0       283b           283b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521B\u5EFA\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a> \u521B\u5EFA\u7D22\u5F15</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -X PUT 127.0.0.1:9200/www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{&quot;acknowledged&quot;:true,&quot;shards_acknowledged&quot;:true,&quot;index&quot;:&quot;www&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u5220\u9664\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u7D22\u5F15" aria-hidden="true">#</a> \u5220\u9664\u7D22\u5F15</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -X DELETE 127.0.0.1:9200/www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{&quot;acknowledged&quot;:true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u63D2\u5165\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u8BB0\u5F55" aria-hidden="true">#</a> \u63D2\u5165\u8BB0\u5F55</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -H &quot;ContentType:application/json&quot; -X POST 127.0.0.1:9200/user/person -d &#39;
    {
        &quot;name&quot;: &quot;LMH&quot;,
        &quot;age&quot;: 18,
        &quot;married&quot;: true
    }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;_index&quot;: &quot;user&quot;,
    &quot;_type&quot;: &quot;person&quot;,
    &quot;_id&quot;: &quot;MLcwUWwBvEa8j5UrLZj4&quot;,
    &quot;_version&quot;: 1,
    &quot;result&quot;: &quot;created&quot;,
    &quot;_shards&quot;: {
        &quot;total&quot;: 2,
        &quot;successful&quot;: 1,
        &quot;failed&quot;: 0
    },
    &quot;_seq_no&quot;: 3,
    &quot;_primary_term&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 PUT \u65B9\u6CD5\uFF0C\u4F46\u662F\u9700\u8981\u4F20\u5165 id</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -H &quot;ContentType:application/json&quot; -X PUT 127.0.0.1:9200/user/person/4 -d &#39;
    {
        &quot;name&quot;: &quot;LMH&quot;,
        &quot;age&quot;: 18,
        &quot;married&quot;: false
    }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u68C0\u7D22" tabindex="-1"><a class="header-anchor" href="#\u68C0\u7D22" aria-hidden="true">#</a> \u68C0\u7D22</h4><p>Elasticsearch \u7684\u68C0\u7D22\u8BED\u6CD5\u6BD4\u8F83\u7279\u522B\uFF0C\u4F7F\u7528 GET \u65B9\u6CD5\u643A\u5E26 JSON \u683C\u5F0F\u7684\u67E5\u8BE2\u6761\u4EF6\u3002</p><p><strong>\u5168\u68C0\u7D22</strong>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -X GET 127.0.0.1:9200/user/person/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6309\u6761\u4EF6\u68C0\u7D22</strong>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -H &quot;ContentType:application/json&quot; -X PUT 127.0.0.1:9200/user/person/4 -d &#39;
    {
        &quot;query&quot;:{
            &quot;match&quot;: {&quot;name&quot;: &quot;LMH&quot;}
        }    
    }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ElasticSearch \u9ED8\u8BA4\u4E00\u6B21\u6700\u591A\u8FD4\u56DE 10 \u6761\u7ED3\u679C\uFF0C\u53EF\u4EE5\u50CF\u4E0B\u9762\u7684\u793A\u4F8B\u901A\u8FC7 size \u5B57\u6BB5\u6765\u8BBE\u7F6E\u8FD4\u56DE\u7ED3\u679C\u7684\u6570\u76EE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -H &quot;ContentType:application/json&quot; -X PUT 127.0.0.1:9200/user/person/4 -d &#39;
    {
        &quot;query&quot;:{
            &quot;match&quot;: {&quot;name&quot;: &quot;LMH&quot;},
            &quot;size&quot;: 2
        }    
    }&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="49.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="51.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,64),v=a("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),p={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=a(")"),x=a("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),g={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},q=a("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function _(f,E){const d=t("RouterLink"),n=t("ExternalLinkIcon");return r(),l("div",null,[h,e("ul",null,[e("li",null,[e("p",null,[i(d,{to:"/Gomd_super/"},{default:c(()=>[v]),_:1})])]),e("li",null,[e("p",null,[e("a",p,[m,i(n)]),b])]),e("li",null,[e("p",null,[x,e("a",g,[q,i(n)])])])])])}const k=s(o,[["render",_],["__file","50.html.vue"]]);export{k as default};
