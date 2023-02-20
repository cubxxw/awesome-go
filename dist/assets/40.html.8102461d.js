import{_ as n,r as t,o as l,c as d,a as e,b as i,w as s,d as c,e as a}from"./app.64dac66d.js";const p={},h=c(`<h1 id="_1-kafka\u6DF1\u5C42\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-kafka\u6DF1\u5C42\u4ECB\u7ECD" aria-hidden="true">#</a> 1. Kafka\u6DF1\u5C42\u4ECB\u7ECD</h1><h3 id="_1-1-1-\u67B6\u6784\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u67B6\u6784\u4ECB\u7ECD" aria-hidden="true">#</a> 1.1.1. \u67B6\u6784\u4ECB\u7ECD</h3><p><img src="https://www.topgoer.com/static/9.2/1.jpg" alt="\u67B6\u6784\u4ECB\u7ECD"></p><ul><li>Producer\uFF1AProducer\u5373\u751F\u4EA7\u8005\uFF0C\u6D88\u606F\u7684\u4EA7\u751F\u8005\uFF0C\u662F\u6D88\u606F\u7684\u2F0A\u53E3\u3002</li><li>kafka cluster\uFF1Akafka\u96C6\u7FA4\uFF0C\u4E00\u53F0\u6216\u591A\u53F0\u670D\u52A1\uFA38\u7EC4\u6210 <ul><li>Broker\uFF1ABroker\u662F\u6307\u90E8\u7F72\uF9BAKafka\u5B9E\uF9B5\u7684\u670D\u52A1\uFA38\u8282\u70B9\u3002\u6BCF\u4E2A\u670D\u52A1\uFA38\u4E0A\u6709\u4E00\u4E2A\u6216\u591A\u4E2Akafka\u7684\u5B9E \uF9B5\uFF0C\u6211\u4EEC\u59D1\u4E14\u8BA4\u4E3A\u6BCF\u4E2Abroker\u5BF9\u5E94\u4E00\u53F0\u670D\u52A1\uFA38\u3002\u6BCF\u4E2Akafka\u96C6\u7FA4\u5185\u7684broker\u90FD\u6709\u4E00\u4E2A\uF967\u91CD\u590D\u7684 \u7F16\u53F7\uFF0C\u5982\u56FE\u4E2D\u7684broker-0\u3001broker-1\u7B49\u2026\u2026</li><li>Topic\uFF1A\u6D88\u606F\u7684\u4E3B\u9898\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u6D88\u606F\u7684\u5206\u7C7B\uFF0Ckafka\u7684\u6570\u636E\u5C31\u4FDD\u5B58\u5728topic\u3002\u5728\u6BCF\u4E2Abroker\u4E0A \u90FD\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2Atopic\u3002\u5B9E\u9645\u5E94\u7528\u4E2D\u901A\u5E38\u662F\u4E00\u4E2A\u4E1A\u52A1\u7EBF\u5EFA\u4E00\u4E2Atopic\u3002</li><li>Partition\uFF1ATopic\u7684\u5206\u533A\uFF0C\u6BCF\u4E2Atopic\u53EF\u4EE5\u6709\u591A\u4E2A\u5206\u533A\uFF0C\u5206\u533A\u7684\u4F5C\u7528\u662F\u505A\u8D1F\u8F7D\uFF0C\u63D0\u9AD8kafka\u7684\u541E \u5410\uF97E\u3002\u540C\u4E00\u4E2Atopic\u5728\uF967\u540C\u7684\u5206\u533A\u7684\u6570\u636E\u662F\uF967\u91CD\u590D\u7684\uFF0Cpartition\u7684\u8868\u73B0\u5F62\u5F0F\u5C31\u662F\u4E00\u4E2A\u4E00\u4E2A\u7684\u2F42\u4EF6\u5939\uFF01</li><li>Replication:\u6BCF\u4E00\u4E2A\u5206\u533A\u90FD\u6709\u591A\u4E2A\u526F\u672C\uFF0C\u526F\u672C\u7684\u4F5C\u7528\u662F\u505A\u5907\u80CE\u3002\u5F53\u4E3B\u5206\u533A\uFF08Leader\uFF09\u6545\u969C\u7684 \u65F6\u5019\u4F1A\u9009\u62E9\u4E00\u4E2A\u5907\u80CE\uFF08Follower\uFF09\u4E0A\u4F4D\uFF0C\u6210\u4E3ALeader\u3002\u5728kafka\u4E2D\u9ED8\u8BA4\u526F\u672C\u7684\u6700\u5927\u6570\uF97E\u662F10 \u4E2A\uFF0C\u4E14\u526F\u672C\u7684\u6570\uF97E\uF967\u80FD\u5927\u4E8EBroker\u7684\u6570\uF97E\uFF0Cfollower\u548Cleader\u7EDD\u5BF9\u662F\u5728\uF967\u540C\u7684\u673A\u5668\uFF0C\u540C\u4E00\u673A \uFA38\u5BF9\u540C\u4E00\u4E2A\u5206\u533A\u4E5F\u53EA\u53EF\u80FD\u5B58\u653E\u4E00\u4E2A\u526F\u672C\uFF08\u5305\u62EC\u81EA\u5DF1\uFF09\u3002</li></ul></li><li>Consumer\uFF1A\u6D88\u8D39\u8005\uFF0C\u5373\u6D88\u606F\u7684\u6D88\u8D39\u65B9\uFF0C\u662F\u6D88\u606F\u7684\u51FA\u53E3\u3002 <ul><li>Consumer Group\uFF1A\u6211\u4EEC\u53EF\u4EE5\u5C06\u591A\u4E2A\u6D88\u8D39\u7EC4\u7EC4\u6210\u4E00\u4E2A\u6D88\u8D39\u8005\u7EC4\uFF0C\u5728kafka\u7684\u8BBE\u8BA1\u4E2D\u540C\u4E00\u4E2A\u5206 \u533A\u7684\u6570\u636E\u53EA\u80FD\u88AB\u6D88\u8D39\u8005\u7EC4\u4E2D\u7684\u67D0\u4E00\u4E2A\u6D88\u8D39\u8005\u6D88\u8D39\u3002\u540C\u4E00\u4E2A\u6D88\u8D39\u8005\u7EC4\u7684\u6D88\u8D39\u8005\u53EF\u4EE5\u6D88\u8D39\u540C\u4E00\u4E2A topic\u7684\u4E0D\u540C\u5206\u533A\u7684\u6570\u636E\uFF0C\u8FD9\u4E5F\u662F\u4E3A\uF9BA\u63D0\u9AD8kafka\u7684\u541E\u5410\uF97E\uFF01</li></ul></li></ul><h3 id="_1-1-2-\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> 1.1.2. \u2F2F\u4F5C\u6D41\u7A0B</h3><p>\u6211\u4EEC\u770B\u4E0A\u2FAF\u7684\u67B6\u6784\u56FE\u4E2D\uFF0Cproducer\u5C31\u662F\u751F\u4EA7\u8005\uFF0C\u662F\u6570\u636E\u7684\u5165\u53E3\u3002Producer\u5728\u5199\u5165\u6570\u636E\u7684\u65F6\u5019\u4F1A\u628A\u6570\u636E \u5199\u5165\u5230leader\u4E2D\uFF0C\uF967\u4F1A\u76F4\u63A5\u5C06\u6570\u636E\u5199\u5165follower\uFF01\u90A3leader\u600E\u4E48\u627E\u5462\uFF1F\u5199\u5165\u7684\u6D41\u7A0B\u53C8\u662F\uF9FD\u4E48\u6837\u7684\u5462\uFF1F\u6211 \u4EEC\u770B\u4E0B\u56FE\uFF1A</p><p><img src="https://www.topgoer.com/static/9.2/2.jpg" alt="\u2F2F\u4F5C\u6D41\u7A0B"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1.\u2F63\u4EA7\u8005\u4ECEKafka\u96C6\u7FA4\u83B7\u53D6\u5206\u533Aleader\u4FE1\u606F
    2.\u2F63\u4EA7\u8005\u5C06\u6D88\u606F\u53D1\u9001\u7ED9leader
    3.leader\u5C06\u6D88\u606F\u5199\u5165\u672C\u5730\u78C1\u76D8
    4.follower\u4ECEleader\u62C9\u53D6\u6D88\u606F\u6570\u636E
    5.follower\u5C06\u6D88\u606F\u5199\u5165\u672C\u5730\u78C1\u76D8\u540E\u5411leader\u53D1\u9001ACK
    6.leader\u6536\u5230\u6240\u6709\u7684follower\u7684ACK\u4E4B\u540E\u5411\u751F\u4EA7\u8005\u53D1\u9001ACK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-3-\u9009\u62E9partition\u7684\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u9009\u62E9partition\u7684\u539F\u5219" aria-hidden="true">#</a> 1.1.3. \u9009\u62E9partition\u7684\u539F\u5219</h3><p>\u90A3\u5728kafka\u4E2D\uFF0C\u5982\u679C\u67D0\u4E2Atopic\u6709\u591A\u4E2Apartition\uFF0Cproducer\u2F1C\u600E\u4E48\u77E5\u9053\u8BE5\u5C06\u6570\u636E\u53D1\u5F80\u54EA\u4E2Apartition\u5462\uFF1F kafka\u4E2D\u6709\u51E0\u4E2A\u539F\u5219\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1.partition\u5728\u5199\u5165\u7684\u65F6\u5019\u53EF\u4EE5\u6307\u5B9A\u9700\u8981\u5199\u5165\u7684partition\uFF0C\u5982\u679C\u6709\u6307\u5B9A\uFF0C\u5219\u5199\u5165\u5BF9\u5E94\u7684partition\u3002
    2.\u5982\u679C\u6CA1\u6709\u6307\u5B9Apartition\uFF0C\u4F46\u662F\u8BBE\u7F6E\uF9BA\u6570\u636E\u7684key\uFF0C\u5219\u4F1A\u6839\u636Ekey\u7684\u503Chash\u51FA\u4E00\u4E2Apartition\u3002
    3.\u5982\u679C\u65E2\u6CA1\u6307\u5B9Apartition\uFF0C\u53C8\u6CA1\u6709\u8BBE\u7F6Ekey\uFF0C\u5219\u4F1A\u91C7\u7528\u8F6E\u8BE2\u2F45\u5F0F\uFF0C\u5373\u6BCF\u6B21\u53D6\u4E00\u5C0F\u6BB5\u65F6\u95F4\u7684\u6570\u636E\u5199\u5165\u67D0
    \u4E2Apartition\uFF0C\u4E0B\u4E00\u5C0F\u6BB5\u7684\u65F6\u95F4\u5199\u5165\u4E0B\u4E00\u4E2Apartition
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-ack\u5E94\u7B54\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_1-1-4-ack\u5E94\u7B54\u673A\u5236" aria-hidden="true">#</a> 1.1.4. ACK\u5E94\u7B54\u673A\u5236</h3><p>producer\u5728\u5411kafka\u5199\u5165\u6D88\u606F\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u53C2\u6570\u6765\u786E\u5B9A\u662F\u5426\u786E\u8BA4kafka\u63A5\u6536\u5230\u6570\u636E\uFF0C\u8FD9\u4E2A\u53C2\u6570\u53EF\u8BBE\u7F6E \u7684\u503C\u4E3A 0,1,all</p><ul><li>0\u4EE3\u8868producer\u5F80\u96C6\u7FA4\u53D1\u9001\u6570\u636E\uF967\u9700\u8981\u7B49\u5230\u96C6\u7FA4\u7684\u8FD4\u56DE\uFF0C\uF967\u786E\u4FDD\u6D88\u606F\u53D1\u9001\u6210\u529F\u3002\u5B89\u5168\u6027\u6700\u4F4E\u4F46\u662F\u6548 \u7387\u6700\u9AD8\u3002</li><li>1\u4EE3\u8868producer\u5F80\u96C6\u7FA4\u53D1\u9001\u6570\u636E\u53EA\u8981leader\u5E94\u7B54\u5C31\u53EF\u4EE5\u53D1\u9001\u4E0B\u4E00\u6761\uFF0C\u53EA\u786E\u4FDDleader\u53D1\u9001\u6210\u529F\u3002</li><li>all\u4EE3\u8868producer\u5F80\u96C6\u7FA4\u53D1\u9001\u6570\u636E\u9700\u8981\u6240\u6709\u7684follower\u90FD\u5B8C\u6210\u4ECEleader\u7684\u540C\u6B65\u624D\u4F1A\u53D1\u9001\u4E0B\u4E00\u6761\uFF0C\u786E\u4FDD leader\u53D1\u9001\u6210\u529F\u548C\u6240\u6709\u7684\u526F\u672C\u90FD\u5B8C\u6210\u5907\u4EFD\u3002\u5B89\u5168\u6027\u6700\u2FBC\u9AD8\uFF0C\u4F46\u662F\u6548\u7387\u6700\u4F4E\u3002</li></ul><p>\u6700\u540E\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u5F80\u4E0D\u5B58\u5728\u7684topic\u5199\u6570\u636E\uFF0Ckafka\u4F1A\u2F83\u52A8\u521B\u5EFAtopic\uFF0Cpartition\u548Creplication\u7684\u6570\u91CF \u9ED8\u8BA4\u914D\u7F6E\u90FD\u662F1\u3002</p><h3 id="_1-1-5-topic\u548C\u6570\u636E\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_1-1-5-topic\u548C\u6570\u636E\u65E5\u5FD7" aria-hidden="true">#</a> 1.1.5. Topic\u548C\u6570\u636E\u2F47\u5FD7</h3><p>topic \u662F\u540C\u2F00\u7C7B\u522B\u7684\u6D88\u606F\u8BB0\u5F55\uFF08record\uFF09\u7684\u96C6\u5408\u3002\u5728Kafka\u4E2D\uFF0C\u2F00\u4E2A\u4E3B\u9898\u901A\u5E38\u6709\u591A\u4E2A\u8BA2\u9605\u8005\u3002\u5BF9\u4E8E\u6BCF\u4E2A \u4E3B\u9898\uFF0CKafka\u96C6\u7FA4\u7EF4\u62A4\u4E86\u2F00\u4E2A\u5206\u533A\u6570\u636E\u2F47\u5FD7\u2F42\u4EF6\u7ED3\u6784\u5982\u4E0B\uFF1A</p><p><img src="https://www.topgoer.com/static/9.2/3.jpg" alt="Topic\u548C\u6570\u636E\u2F47\u5FD7"></p><p>\u6BCF\u4E2Apartition\u90FD\u662F\u2F00\u4E2A\u6709\u5E8F\u5E76\u4E14\u4E0D\u53EF\u53D8\u7684\u6D88\u606F\u8BB0\u5F55\u96C6\u5408\u3002\u5F53\u65B0\u7684\u6570\u636E\u5199\u2F0A\u65F6\uFF0C\u5C31\u88AB\u8FFD\u52A0\u5230partition\u7684\u672B \u5C3E\u3002\u5728\u6BCF\u4E2Apartition\u4E2D\uFF0C\u6BCF\u6761\u6D88\u606F\u90FD\u4F1A\u88AB\u5206\u914D\u2F00\u4E2A\u987A\u5E8F\u7684\u552F\u2F00\u6807\u8BC6\uFF0C\u8FD9\u4E2A\u6807\u8BC6\u88AB\u79F0\u4E3Aoffset\uFF0C\u5373\u504F\u79FB \u91CF\u3002\u6CE8\u610F\uFF0CKafka\u53EA\u4FDD\u8BC1\u5728\u540C\u2F00\u4E2Apartition\u5185\u90E8\u6D88\u606F\u662F\u6709\u5E8F\u7684\uFF0C\u5728\u4E0D\u540Cpartition\u4E4B\u95F4\uFF0C\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u6D88\u606F \u6709\u5E8F\u3002</p><p>Kafka\u53EF\u4EE5\u914D\u7F6E\u2F00\u4E2A\u4FDD\u7559\u671F\u9650\uFF0C\u2F64\u6765\u6807\u8BC6\u2F47\u5FD7\u4F1A\u5728Kafka\u96C6\u7FA4\u5185\u4FDD\u7559\u591A\u2ED3\u65F6\u95F4\u3002Kafka\u96C6\u7FA4\u4F1A\u4FDD\u7559\u5728\u4FDD\u7559 \u671F\u9650\u5185\u6240\u6709\u88AB\u53D1\u5E03\u7684\u6D88\u606F\uFF0C\u4E0D\u7BA1\u8FD9\u4E9B\u6D88\u606F\u662F\u5426\u88AB\u6D88\u8D39\u8FC7\u3002\u2F50\u5982\u4FDD\u7559\u671F\u9650\u8BBE\u7F6E\u4E3A\u4E24\u5929\uFF0C\u90A3\u4E48\u6570\u636E\u88AB\u53D1\u5E03\u5230 Kafka\u96C6\u7FA4\u7684\u4E24\u5929\u4EE5\u5185\uFF0C\u6240\u6709\u7684\u8FD9\u4E9B\u6570\u636E\u90FD\u53EF\u4EE5\u88AB\u6D88\u8D39\u3002\u5F53\u8D85\u8FC7\u4E24\u5929\uFF0C\u8FD9\u4E9B\u6570\u636E\u5C06\u4F1A\u88AB\u6E05\u7A7A\uFF0C\u4EE5\u4FBF\u4E3A\u540E \u7EED\u7684\u6570\u636E\u817E\u51FA\u7A7A\u95F4\u3002\u7531\u4E8EKafka\u4F1A\u5C06\u6570\u636E\u8FDB\u2F8F\u6301\u4E45\u5316\u5B58\u50A8\uFF08\u5373\u5199\u2F0A\u5230\u786C\u76D8\u4E0A\uFF09\uFF0C\u6240\u4EE5\u4FDD\u7559\u7684\u6570\u636E\u2F24\u2F29\u53EF \u4EE5\u8BBE\u7F6E\u4E3A\u2F00\u4E2A\u2F50\u8F83\u2F24\u7684\u503C\u3002</p><h3 id="_1-1-6-partition\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-1-6-partition\u7ED3\u6784" aria-hidden="true">#</a> 1.1.6. Partition\u7ED3\u6784</h3><p>Partition\u5728\u670D\u52A1\u5668\u4E0A\u7684\u8868\u73B0\u5F62\u5F0F\u5C31\u662F\u2F00\u4E2A\u2F00\u4E2A\u7684\u2F42\u4EF6\u5939\uFF0C\u6BCF\u4E2Apartition\u7684\u2F42\u4EF6\u5939\u4E0B\u2FAF\u4F1A\u6709\u591A\u7EC4segment \u2F42\u4EF6\uFF0C\u6BCF\u7EC4segment\u2F42\u4EF6\u2F1C\u5305\u542B .index \u2F42\u4EF6\u3001 .log \u2F42\u4EF6\u3001 .timeindex \u2F42\u4EF6\u4E09\u4E2A\u2F42\u4EF6\uFF0C\u5176\u4E2D .log \u2F42 \u4EF6\u5C31\u662F\u5B9E\u9645\u5B58\u50A8message\u7684\u5730\u2F45\uFF0C\u2F7D .index \u548C .timeindex \u2F42\u4EF6\u4E3A\u7D22\u5F15\u2F42\u4EF6\uFF0C\u2F64\u4E8E\u68C0\u7D22\u6D88\u606F\u3002</p><h3 id="_1-1-7-\u6D88\u8D39\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_1-1-7-\u6D88\u8D39\u6570\u636E" aria-hidden="true">#</a> 1.1.7. \u6D88\u8D39\u6570\u636E</h3><p>\u591A\u4E2A\u6D88\u8D39\u8005\u5B9E\u4F8B\u53EF\u4EE5\u7EC4\u6210\u2F00\u4E2A\u6D88\u8D39\u8005\u7EC4\uFF0C\u5E76\u2F64\u2F00\u4E2A\u6807\u7B7E\u6765\u6807\u8BC6\u8FD9\u4E2A\u6D88\u8D39\u8005\u7EC4\u3002\u2F00\u4E2A\u6D88\u8D39\u8005\u7EC4\u4E2D\u7684\u4E0D\u540C\u6D88 \u8D39\u8005\u5B9E\u4F8B\u53EF\u4EE5\u8FD0\u2F8F\u5728\u4E0D\u540C\u7684\u8FDB\u7A0B\u751A\u2F84\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E0A\u3002</p><p>\u5982\u679C\u6240\u6709\u7684\u6D88\u8D39\u8005\u5B9E\u4F8B\u90FD\u5728\u540C\u2F00\u4E2A\u6D88\u8D39\u8005\u7EC4\u4E2D\uFF0C\u90A3\u4E48\u6D88\u606F\u8BB0\u5F55\u4F1A\u88AB\u5F88\u597D\u7684\u5747\u8861\u7684\u53D1\u9001\u5230\u6BCF\u4E2A\u6D88\u8D39\u8005\u5B9E \u4F8B\u3002</p><p>\u5982\u679C\u6240\u6709\u7684\u6D88\u8D39\u8005\u5B9E\u4F8B\u90FD\u5728\u4E0D\u540C\u7684\u6D88\u8D39\u8005\u7EC4\uFF0C\u90A3\u4E48\u6BCF\u2F00\u6761\u6D88\u606F\u8BB0\u5F55\u4F1A\u88AB\u2F34\u64AD\u5230\u6BCF\u2F00\u4E2A\u6D88\u8D39\u8005\u5B9E\u4F8B\u3002</p><p><img src="https://www.topgoer.com/static/9.2/4.png" alt="\u6D88\u8D39\u6570\u636E"></p><p>\u4E3E\u4E2A\u4F8B\u2F26\uFF0C\u5982\u4E0A\u56FE\u6240\u793A\u2F00\u4E2A\u4E24\u4E2A\u8282\u70B9\u7684Kafka\u96C6\u7FA4\u4E0A\u62E5\u6709\u2F00\u4E2A\u56DB\u4E2Apartition\uFF08P0-P3\uFF09\u7684topic\u3002\u6709\u4E24\u4E2A \u6D88\u8D39\u8005\u7EC4\u90FD\u5728\u6D88\u8D39\u8FD9\u4E2Atopic\u4E2D\u7684\u6570\u636E\uFF0C\u6D88\u8D39\u8005\u7EC4A\u6709\u4E24\u4E2A\u6D88\u8D39\u8005\u5B9E\u4F8B\uFF0C\u6D88\u8D39\u8005\u7EC4B\u6709\u56DB\u4E2A\u6D88\u8D39\u8005\u5B9E\u4F8B\u3002 \u4ECE\u56FE\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u540C\u2F00\u4E2A\u6D88\u8D39\u8005\u7EC4\u4E2D\uFF0C\u6BCF\u4E2A\u6D88\u8D39\u8005\u5B9E\u4F8B\u53EF\u4EE5\u6D88\u8D39\u591A\u4E2A\u5206\u533A\uFF0C\u4F46\u662F\u6BCF\u4E2A\u5206\u533A\u6700\u591A\u53EA \u80FD\u88AB\u6D88\u8D39\u8005\u7EC4\u4E2D\u7684\u2F00\u4E2A\u5B9E\u4F8B\u6D88\u8D39\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u6709\u2F00\u4E2A4\u4E2A\u5206\u533A\u7684\u4E3B\u9898\uFF0C\u90A3\u4E48\u6D88\u8D39\u8005\u7EC4\u4E2D\u6700\u591A\u53EA\u80FD\u67094 \u4E2A\u6D88\u8D39\u8005\u5B9E\u4F8B\u53BB\u6D88\u8D39\uFF0C\u591A\u51FA\u6765\u7684\u90FD\u4E0D\u4F1A\u88AB\u5206\u914D\u5230\u5206\u533A\u3002\u5176\u5B9E\u8FD9\u4E5F\u5F88\u597D\u7406\u89E3\uFF0C\u5982\u679C\u5141\u8BB8\u4E24\u4E2A\u6D88\u8D39\u8005\u5B9E\u4F8B\u540C \u65F6\u6D88\u8D39\u540C\u2F00\u4E2A\u5206\u533A\uFF0C\u90A3\u4E48\u5C31\u2F46\u6CD5\u8BB0\u5F55\u8FD9\u4E2A\u5206\u533A\u88AB\u8FD9\u4E2A\u6D88\u8D39\u8005\u7EC4\u6D88\u8D39\u7684offset\u4E86\u3002\u5982\u679C\u5728\u6D88\u8D39\u8005\u7EC4\u4E2D\u52A8\u6001 \u7684\u4E0A\u7EBF\u6216\u4E0B\u7EBF\u6D88\u8D39\u8005\uFF0C\u90A3\u4E48Kafka\u96C6\u7FA4\u4F1A\u2F83\u52A8\u8C03\u6574\u5206\u533A\u4E0E\u6D88\u8D39\u8005\u5B9E\u4F8B\u95F4\u7684\u5BF9\u5E94\u5173\u7CFB\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="39.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="41.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,30),u=a("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),k={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},f=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),_=a(")"),m=a("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),v={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},b=a("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function g(x,w){const o=t("RouterLink"),r=t("ExternalLinkIcon");return l(),d("div",null,[h,e("ul",null,[e("li",null,[e("p",null,[i(o,{to:"/Gomd_super/"},{default:s(()=>[u]),_:1})])]),e("li",null,[e("p",null,[e("a",k,[f,i(r)]),_])]),e("li",null,[e("p",null,[m,e("a",v,[b,i(r)])])])])])}const C=n(p,[["render",g],["__file","40.html.vue"]]);export{C as default};
