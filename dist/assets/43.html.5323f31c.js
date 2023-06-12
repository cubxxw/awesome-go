import{_ as o,r,o as d,c as n,a as e,b as a,w as c,d as h,e as i}from"./app.798d5e9d.js";const s={},u=h('<h3 id="_1-1-1-mq-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-1-1-mq-\u7B80\u4ECB" aria-hidden="true">#</a> 1.1.1. MQ \u7B80\u4ECB</h3><h4 id="\u7B80\u5355\u91CA\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u91CA\u4E49" aria-hidden="true">#</a> \u7B80\u5355\u91CA\u4E49</h4><p>\u6D88\u606F\u603B\u7EBF (Message Queue)\uFF0C\u662F\u4E00\u79CD\u8DE8\u8FDB\u7A0B\u3001\u5F02\u6B65\u7684\u901A\u4FE1\u673A\u5236\uFF0C\u7528\u4E8E\u4E0A\u4E0B\u6E38\u4F20\u9012\u6D88\u606F\u3002\u7531\u6D88\u606F\u7CFB\u7EDF\u6765\u786E\u4FDD\u6D88\u606F\u7684\u53EF\u9760\u4F20\u9012\u3002</p><h4 id="\u80CC\u666F\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F\u63CF\u8FF0" aria-hidden="true">#</a> \u80CC\u666F\u63CF\u8FF0</h4><p>\u5F53\u524D\u5E02\u9762\u4E0A mq \u7684\u4EA7\u54C1\u5F88\u591A\uFF0C\u6BD4\u5982 RabbitMQ\u3001Kafka\u3001ActiveMQ\u3001ZeroMQ \u548C\u963F\u91CC\u5DF4\u5DF4\u6350\u732E\u7ED9 Apache \u7684 RocketMQ\u3002\u751A\u81F3\u8FDE redis \u8FD9\u79CD NoSQL \u90FD\u652F\u6301 MQ \u7684\u529F\u80FD\u3002</p><h4 id="\u9002\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u573A\u666F" aria-hidden="true">#</a> \u9002\u7528\u573A\u666F</h4><ul><li>\u4E0A\u4E0B\u6E38\u903B\u8F91\u89E3\u8026 &amp;&amp; \u7269\u7406\u89E3\u8026</li><li>\u4FDD\u8BC1\u6570\u636E\u6700\u7EC8\u4E00\u81F4\u6027</li><li>\u5E7F\u64AD</li><li>\u9519\u5CF0\u6D41\u63A7\u7B49\u7B49</li></ul><h3 id="_1-1-2-rabbitmq-\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-1-2-rabbitmq-\u7684\u7279\u70B9" aria-hidden="true">#</a> 1.1.2. RabbitMQ \u7684\u7279\u70B9</h3><p>RabbitMQ \u662F\u7531 Erlang \u8BED\u8A00\u5F00\u53D1\u7684 AMQP \u7684\u5F00\u6E90\u5B9E\u73B0\u3002</p><p>AMQP\uFF1AAdvanced Message Queue\uFF0C\u9AD8\u7EA7\u6D88\u606F\u961F\u5217\u534F\u8BAE\u3002\u5B83\u662F\u5E94\u7528\u5C42\u534F\u8BAE\u7684\u4E00\u4E2A\u5F00\u653E\u6807\u51C6\uFF0C\u4E3A\u9762\u5411\u6D88\u606F\u7684\u4E2D\u95F4\u4EF6\u8BBE\u8BA1\uFF0C\u57FA\u4E8E\u6B64\u534F\u8BAE\u7684\u5BA2\u6237\u7AEF\u4E0E\u6D88\u606F\u4E2D\u95F4\u4EF6\u53EF\u4F20\u9012\u6D88\u606F\uFF0C\u5E76\u4E0D\u53D7\u4EA7\u54C1\u3001\u5F00\u53D1\u8BED\u8A00\u706F\u6761\u4EF6\u7684\u9650\u5236\u3002</p><ul><li><code>\u53EF\u9760\u6027(Reliablity)\uFF1A</code>\u4F7F\u7528\u4E86\u4E00\u4E9B\u673A\u5236\u6765\u4FDD\u8BC1\u53EF\u9760\u6027\uFF0C\u6BD4\u5982\u6301\u4E45\u5316\u3001\u4F20\u8F93\u786E\u8BA4\u3001\u53D1\u5E03\u786E\u8BA4\u3002</li><li><code>\u7075\u6D3B\u7684\u8DEF\u7531(Flexible Routing)\uFF1A</code>\u5728\u6D88\u606F\u8FDB\u5165\u961F\u5217\u4E4B\u524D\uFF0C\u901A\u8FC7 Exchange \u6765\u8DEF\u7531\u6D88\u606F\u3002\u5BF9\u4E8E\u5178\u578B\u7684\u8DEF\u7531\u529F\u80FD\uFF0CRabbit \u5DF2\u7ECF\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5185\u7F6E\u7684 Exchange \u6765\u5B9E\u73B0\u3002\u9488\u5BF9\u66F4\u590D\u6742\u7684\u8DEF\u7531\u529F\u80FD\uFF0C\u53EF\u4EE5\u5C06\u591A\u4E2A Exchange \u7ED1\u5B9A\u5728\u4E00\u8D77\uFF0C\u4E5F\u901A\u8FC7\u63D2\u4EF6\u673A\u5236\u5B9E\u73B0\u81EA\u5DF1\u7684 Exchange\u3002</li><li><code>\u6D88\u606F\u96C6\u7FA4(Clustering)\uFF1A</code>\u591A\u4E2A RabbitMQ \u670D\u52A1\u5668\u53EF\u4EE5\u7EC4\u6210\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u5F62\u6210\u4E00\u4E2A\u903B\u8F91 Broker\u3002</li><li><code>\u9AD8\u53EF\u7528(Highly Avaliable Queues)</code>\uFF1A\u961F\u5217\u53EF\u4EE5\u5728\u96C6\u7FA4\u4E2D\u7684\u673A\u5668\u4E0A\u8FDB\u884C\u955C\u50CF\uFF0C\u4F7F\u5F97\u5728\u90E8\u5206\u8282\u70B9\u51FA\u95EE\u9898\u7684\u60C5\u51B5\u4E0B\u961F\u5217\u4ECD\u7136\u53EF\u7528\u3002</li><li><code>\u591A\u79CD\u534F\u8BAE(Multi-protocol)\uFF1A</code>\u652F\u6301\u591A\u79CD\u6D88\u606F\u961F\u5217\u534F\u8BAE\uFF0C\u5982 STOMP\u3001MQTT \u7B49\u3002</li><li><code>\u591A\u79CD\u8BED\u8A00\u5BA2\u6237\u7AEF(Many Clients)\uFF1A</code>\u51E0\u4E4E\u652F\u6301\u6240\u6709\u5E38\u7528\u8BED\u8A00\uFF0C\u6BD4\u5982 Java\u3001.NET\u3001Ruby \u7B49\u3002</li><li><code>\u7BA1\u7406\u754C\u9762(Management UI)</code>\uFF1A\u63D0\u4F9B\u4E86\u6613\u7528\u7684\u7528\u6237\u754C\u9762\uFF0C\u4F7F\u5F97\u7528\u6237\u53EF\u4EE5\u76D1\u63A7\u548C\u7BA1\u7406\u6D88\u606F Broker \u7684\u8BB8\u591A\u65B9\u9762\u3002</li><li><code>\u8DDF\u8E2A\u673A\u5236(Tracing)</code>\uFF1A\u5982\u679C\u6D88\u606F\u5F02\u5E38\uFF0CRabbitMQ \u63D0\u4F9B\u4E86\u6D88\u606F\u7684\u8DDF\u8E2A\u673A\u5236\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u627E\u51FA\u53D1\u751F\u4E86\u4EC0\u4E48\u3002</li><li><code>\u63D2\u4EF6\u673A\u5236(Plugin System)</code>\uFF1A\u63D0\u4F9B\u4E86\u8BB8\u591A\u63D2\u4EF6\uFF0C\u6765\u4ECE\u591A\u65B9\u9762\u8FDB\u884C\u6269\u5C55\uFF0C\u4E5F\u53EF\u4EE5\u7F16\u8F91\u81EA\u5DF1\u7684\u63D2\u4EF6\u3002</li></ul><h3 id="_1-1-3-rabbitmq-\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-3-rabbitmq-\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> 1.1.3. rabbitmq \u7B80\u5355\u4F7F\u7528</h3><p><img src="https://s2.loli.net/2022/04/10/qgzApQZuo5aEhCS.png" alt="img"></p><p>\u6240\u6709 MQ \u4EA7\u54C1\u4ECE\u6A21\u578B\u62BD\u8C61\u6765\u8BF4\uFF0C\u90FD\u662F\u4E00\u6837\u7684\u8FC7\u7A0B\uFF1A</p><ul><li>\u6D88\u8D39\u8005 (consumer) \u8BA2\u9605\u67D0\u4E2A\u961F\u5217\u3002</li><li>\u751F\u4EA7\u8005 (product) \u521B\u5EFA\u6D88\u606F\uFF0C\u7136\u540E\u53D1\u5E03\u5230\u961F\u5217\u4E2D(queue)\uFF0C\u6700\u7EC8\u5C06\u6D88\u606F\u53D1\u9001\u5230\u76D1\u542C\u7684\u6D88\u8D39\u8005\u3002</li></ul><p>\u8FD9\u53EA\u662F\u6700\u7B80\u5355\u62BD\u8C61\u7684\u63CF\u8FF0\uFF0C\u5177\u4F53\u5230 RabbitMQ \u5219\u7531\u66F4\u8BE6\u7EC6\u7684\u6982\u5FF5\u9700\u8981\u89E3\u91CA\u3002</p><p><img src="https://s2.loli.net/2022/04/10/PW9gdYco8qifC7S.png" alt="img"></p><ul><li><code>Broker\uFF1A</code>\u6807\u8BC6\u6D88\u606F\u961F\u5217\u670D\u52A1\u5668\u5B9E\u4F53.</li><li><code>Virtual Host\uFF1A</code>\u865A\u62DF\u4E3B\u673A\u3002\u6807\u8BC6\u4E00\u6279\u4EA4\u6362\u673A\u3001\u6D88\u606F\u961F\u5217\u548C\u76F8\u5173\u5BF9\u8C61\u3002\u865A\u62DF\u4E3B\u673A\u662F\u5171\u4EAB\u76F8\u540C\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u52A0\u5BC6\u73AF\u5883\u7684\u72EC\u7ACB\u670D\u52A1\u5668\u57DF\u3002\u6BCF\u4E2A vhost \u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A mini \u7248\u7684 RabbitMQ \u670D\u52A1\u5668\uFF0C\u62E5\u6709\u81EA\u5DF1\u7684\u961F\u5217\u3001\u4EA4\u6362\u5668\u3001\u7ED1\u5B9A\u548C\u6743\u9650\u673A\u5236\u3002vhost \u662F AMQP \u6982\u5FF5\u7684\u57FA\u7840\uFF0C\u5FC5\u987B\u5728\u94FE\u63A5\u65F6\u6307\u5B9A\uFF0CRabbitMQ \u9ED8\u8BA4\u7684 vhost \u662F /\u3002</li><li><code>Exchange\uFF1A</code>\u4EA4\u6362\u5668\uFF0C\u7528\u6765\u63A5\u6536\u751F\u4EA7\u8005\u53D1\u9001\u7684\u6D88\u606F\u5E76\u5C06\u8FD9\u4E9B\u6D88\u606F\u8DEF\u7531\u7ED9\u670D\u52A1\u5668\u4E2D\u7684\u961F\u5217\u3002</li><li><code>Queue\uFF1A</code>\u6D88\u606F\u961F\u5217\uFF0C\u7528\u6765\u4FDD\u5B58\u6D88\u606F\u76F4\u5230\u53D1\u9001\u7ED9\u6D88\u8D39\u8005\u3002\u5B83\u662F\u6D88\u606F\u7684\u5BB9\u5668\uFF0C\u4E5F\u662F\u6D88\u606F\u7684\u7EC8\u70B9\u3002\u4E00\u4E2A\u6D88\u606F\u53EF\u6295\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u961F\u5217\u3002\u6D88\u606F\u4E00\u76F4\u5728\u961F\u5217\u91CC\u9762\uFF0C\u7B49\u5F85\u6D88\u8D39\u8005\u8FDE\u63A5\u5230\u8FD9\u4E2A\u961F\u5217\u5C06\u5176\u53D6\u8D70\u3002</li><li><code>Banding\uFF1A</code>\u7ED1\u5B9A\uFF0C\u7528\u4E8E\u6D88\u606F\u961F\u5217\u548C\u4EA4\u6362\u673A\u4E4B\u95F4\u7684\u5173\u8054\u3002\u4E00\u4E2A\u7ED1\u5B9A\u5C31\u662F\u57FA\u4E8E\u8DEF\u7531\u952E\u5C06\u4EA4\u6362\u673A\u548C\u6D88\u606F\u961F\u5217\u8FDE\u63A5\u8D77\u6765\u7684\u8DEF\u7531\u89C4\u5219\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5C06\u4EA4\u6362\u5668\u7406\u89E3\u6210\u4E00\u4E2A\u7531\u7ED1\u5B9A\u6784\u6210\u7684\u8DEF\u7531\u8868\u3002</li><li><code>Channel\uFF1A</code>\u4FE1\u9053\uFF0C\u591A\u8DEF\u590D\u7528\u8FDE\u63A5\u4E2D\u7684\u4E00\u6761\u72EC\u7ACB\u7684\u53CC\u5411\u6570\u636E\u6D41\u901A\u9053\u3002\u65B0\u5230\u662F\u5EFA\u7ACB\u5728\u771F\u5B9E\u7684 TCP \u8FDE\u63A5\u5185\u5730\u865A\u62DF\u94FE\u63A5\uFF0CAMQP \u547D\u4EE4\u90FD\u662F\u901A\u8FC7\u65B0\u5230\u53D1\u51FA\u53BB\u7684\uFF0C\u4E0D\u7BA1\u662F\u53D1\u5E03\u6D88\u606F\u3001\u8BA2\u9605\u961F\u5217\u8FD8\u662F\u63A5\u6536\u6D88\u606F\uFF0C\u8FD9\u4E9B\u52A8\u4F5C\u90FD\u662F\u901A\u8FC7\u4FE1\u9053\u5B8C\u6210\u3002\u56E0\u4E3A\u5BF9\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u6765\u8BF4\uFF0C\u5EFA\u7ACB\u548C\u9500\u6BC1 TCP \u90FD\u662F\u975E\u5E38\u6602\u8D35\u7684\u5F00\u9500\uFF0C\u6240\u4EE5\u5F15\u5165\u4E86\u4FE1\u9053\u7684\u6982\u5FF5\uFF0C\u4EE5\u590D\u7528\u4E00\u6761 TCP \u8FDE\u63A5\u3002</li><li><code>Connection\uFF1A</code>\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u6BD4\u5982\u4E00\u4E2A TCP \u8FDE\u63A5\u3002</li><li><code>Publisher\uFF1A</code>\u6D88\u606F\u7684\u751F\u4EA7\u8005\uFF0C\u4E5F\u662F\u4E00\u4E2A\u5411\u4EA4\u6362\u5668\u53D1\u5E03\u6D88\u606F\u7684\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F\u3002</li><li><code>Consumer\uFF1A</code>\u6D88\u606F\u7684\u6D88\u8D39\u8005\uFF0C\u8868\u793A\u4E00\u4E2A\u4ECE\u4E00\u4E2A\u6D88\u606F\u961F\u5217\u4E2D\u53D6\u5F97\u6D88\u606F\u7684\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F\u3002</li><li><code>Message\uFF1A</code>\u6D88\u606F\uFF0C\u6D88\u606F\u662F\u4E0D\u5177\u540D\u7684\uFF0C\u5B83\u662F\u7531\u6D88\u606F\u5934\u548C\u6D88\u606F\u4F53\u7EC4\u6210\u3002\u6D88\u606F\u4F53\u662F\u4E0D\u900F\u660E\u7684\uFF0C\u800C\u6D88\u606F\u5934\u5219\u662F\u7531\u4E00\u7CFB\u5217\u7684\u53EF\u9009\u5C5E\u6027\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u5305\u62EC routing-key(\u8DEF\u7531\u952E)\u3001priority(\u4F18\u5148\u7EA7)\u3001delivery-mode(\u6D88\u606F\u53EF\u80FD\u9700\u8981\u6301\u4E45\u6027\u5B58\u50A8 [\u6D88\u606F\u7684\u8DEF\u7531\u6A21\u5F0F]) \u7B49\u3002</li></ul><h3 id="_1-1-4-rabbitmq-\u7684\u516D\u79CD\u5DE5\u4F5C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-1-4-rabbitmq-\u7684\u516D\u79CD\u5DE5\u4F5C\u6A21\u5F0F" aria-hidden="true">#</a> 1.1.4. RabbitMQ \u7684\u516D\u79CD\u5DE5\u4F5C\u6A21\u5F0F</h3><h4 id="simple-\u7B80\u5355\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#simple-\u7B80\u5355\u6A21\u5F0F" aria-hidden="true">#</a> simple \u7B80\u5355\u6A21\u5F0F</h4><p><img src="https://s2.loli.net/2022/04/10/qgzApQZuo5aEhCS.png" alt="img"></p><ul><li>\u6D88\u606F\u4EA7\u751F\u7740 \xA7 \u5C06\u6D88\u606F\u653E\u5165\u961F\u5217</li><li>\u6D88\u606F\u7684\u6D88\u8D39\u8005 (consumer) \u76D1\u542C(while) \u6D88\u606F\u961F\u5217, \u5982\u679C\u961F\u5217\u4E2D\u6709\u6D88\u606F, \u5C31\u6D88\u8D39\u6389, \u6D88\u606F\u88AB\u62FF\u8D70\u540E, \u81EA\u52A8\u4ECE\u961F\u5217\u4E2D\u5220\u9664(\u9690\u60A3 \u6D88\u606F\u53EF\u80FD\u6CA1\u6709\u88AB\u6D88\u8D39\u8005\u6B63\u786E\u5904\u7406, \u5DF2\u7ECF\u4ECE\u961F\u5217\u4E2D\u6D88\u5931\u4E86, \u9020\u6210\u6D88\u606F\u7684\u4E22\u5931) \u5E94\u7528\u573A\u666F: \u804A\u5929(\u4E2D\u95F4\u6709\u4E00\u4E2A\u8FC7\u5EA6\u7684\u670D\u52A1\u5668; p \u7AEF, c \u7AEF)</li></ul><h4 id="work-\u5DE5\u4F5C\u6A21\u5F0F-\u8D44\u6E90\u7684\u7ADE\u4E89" tabindex="-1"><a class="header-anchor" href="#work-\u5DE5\u4F5C\u6A21\u5F0F-\u8D44\u6E90\u7684\u7ADE\u4E89" aria-hidden="true">#</a> work \u5DE5\u4F5C\u6A21\u5F0F (\u8D44\u6E90\u7684\u7ADE\u4E89)</h4><p><img src="https://s2.loli.net/2022/04/10/eu38KQJ24bWnGsI.jpg" alt="img"></p><ul><li>\u6D88\u606F\u4EA7\u751F\u8005\u5C06\u6D88\u606F\u653E\u5165\u961F\u5217\u6D88\u8D39\u8005\u53EF\u4EE5\u6709\u591A\u4E2A, \u6D88\u8D39\u8005 1, \u6D88\u8D39\u8005 2, \u540C\u65F6\u76D1\u542C\u540C\u4E00\u4E2A\u961F\u5217, \u6D88\u606F\u88AB\u6D88\u8D39? C1 C2 \u5171\u540C\u4E89\u62A2\u5F53\u524D\u7684\u6D88\u606F\u961F\u5217\u5185\u5BB9, \u8C01\u5148\u62FF\u5230\u8C01\u8D1F\u8D23\u6D88\u8D39\u6D88\u606F (\u9690\u60A3, \u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B, \u9ED8\u8BA4\u4F1A\u4EA7\u751F\u67D0\u4E00\u4E2A\u6D88\u606F\u88AB\u591A\u4E2A\u6D88\u8D39\u8005\u5171\u540C\u4F7F\u7528, \u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u5F00\u5173 (syncronize, \u4E0E\u540C\u6B65\u9501\u7684\u6027\u80FD\u4E0D\u4E00\u6837) \u4FDD\u8BC1\u4E00\u6761\u6D88\u606F\u53EA\u80FD\u88AB\u4E00\u4E2A\u6D88\u8D39\u8005\u4F7F\u7528)</li><li>\u5E94\u7528\u573A\u666F: \u7EA2\u5305; \u5927\u9879\u76EE\u4E2D\u7684\u8D44\u6E90\u8C03\u5EA6 (\u4EFB\u52A1\u5206\u914D\u7CFB\u7EDF\u4E0D\u9700\u77E5\u9053\u54EA\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\u7CFB\u7EDF\u5728\u7A7A\u95F2, \u76F4\u63A5\u5C06\u4EFB\u52A1\u6254\u5230\u6D88\u606F\u961F\u5217\u4E2D, \u7A7A\u95F2\u7684\u7CFB\u7EDF\u81EA\u52A8\u4E89\u62A2)</li></ul><h4 id="publish-subscribe-\u53D1\u5E03\u8BA2\u9605-\u5171\u4EAB\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#publish-subscribe-\u53D1\u5E03\u8BA2\u9605-\u5171\u4EAB\u8D44\u6E90" aria-hidden="true">#</a> publish/subscribe \u53D1\u5E03\u8BA2\u9605 (\u5171\u4EAB\u8D44\u6E90)</h4><p><img src="https://s2.loli.net/2022/04/10/pByLhoERkiSM78l.jpg" alt="img"></p><ul><li>X \u4EE3\u8868\u4EA4\u6362\u673A rabbitMQ \u5185\u90E8\u7EC4\u4EF6, erlang \u6D88\u606F\u4EA7\u751F\u8005\u662F\u4EE3\u7801\u5B8C\u6210, \u4EE3\u7801\u7684\u6267\u884C\u6548\u7387\u4E0D\u9AD8, \u6D88\u606F\u4EA7\u751F\u8005\u5C06\u6D88\u606F\u653E\u5165\u4EA4\u6362\u673A, \u4EA4\u6362\u673A\u53D1\u5E03\u8BA2\u9605\u628A\u6D88\u606F\u53D1\u9001\u5230\u6240\u6709\u6D88\u606F\u961F\u5217\u4E2D, \u5BF9\u5E94\u6D88\u606F\u961F\u5217\u7684\u6D88\u8D39\u8005\u62FF\u5230\u6D88\u606F\u8FDB\u884C\u6D88\u8D39</li><li>\u76F8\u5173\u573A\u666F: \u90AE\u4EF6\u7FA4\u53D1, \u7FA4\u804A\u5929, \u5E7F\u64AD (\u5E7F\u544A)</li></ul><h4 id="routing-\u8DEF\u7531\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#routing-\u8DEF\u7531\u6A21\u5F0F" aria-hidden="true">#</a> routing \u8DEF\u7531\u6A21\u5F0F</h4><p><img src="https://www.topgoer.com/static/9.3/4.png" alt="img"></p><ul><li>\u6D88\u606F\u751F\u4EA7\u8005\u5C06\u6D88\u606F\u53D1\u9001\u7ED9\u4EA4\u6362\u673A\u6309\u7167\u8DEF\u7531\u5224\u65AD, \u8DEF\u7531\u662F\u5B57\u7B26\u4E32 (info) \u5F53\u524D\u4EA7\u751F\u7684\u6D88\u606F\u643A\u5E26\u8DEF\u7531\u5B57\u7B26 (\u5BF9\u8C61\u7684\u65B9\u6CD5), \u4EA4\u6362\u673A\u6839\u636E\u8DEF\u7531\u7684 key, \u53EA\u80FD\u5339\u914D\u4E0A\u8DEF\u7531 key \u5BF9\u5E94\u7684\u6D88\u606F\u961F\u5217, \u5BF9\u5E94\u7684\u6D88\u8D39\u8005\u624D\u80FD\u6D88\u8D39\u6D88\u606F;</li><li>\u6839\u636E\u4E1A\u52A1\u529F\u80FD\u5B9A\u4E49\u8DEF\u7531\u5B57\u7B26\u4E32</li><li>\u4ECE\u7CFB\u7EDF\u7684\u4EE3\u7801\u903B\u8F91\u4E2D\u83B7\u53D6\u5BF9\u5E94\u7684\u529F\u80FD\u5B57\u7B26\u4E32, \u5C06\u6D88\u606F\u4EFB\u52A1\u6254\u5230\u5BF9\u5E94\u7684\u961F\u5217\u4E2D\u4E1A\u52A1\u573A\u666F: error \u901A\u77E5; EXCEPTION; \u9519\u8BEF\u901A\u77E5\u7684\u529F\u80FD; \u4F20\u7EDF\u610F\u4E49\u7684\u9519\u8BEF\u901A\u77E5; \u5BA2\u6237\u901A\u77E5; \u5229\u7528 key \u8DEF\u7531, \u53EF\u4EE5\u5C06\u7A0B\u5E8F\u4E2D\u7684\u9519\u8BEF\u5C01\u88C5\u6210\u6D88\u606F\u4F20\u5165\u5230\u6D88\u606F\u961F\u5217\u4E2D, \u5F00\u53D1\u8005\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6D88\u8D39\u8005, \u5B9E\u65F6\u63A5\u6536\u9519\u8BEF;</li></ul><h4 id="topic-\u4E3B\u9898\u6A21\u5F0F-\u8DEF\u7531\u6A21\u5F0F\u7684\u4E00\u79CD" tabindex="-1"><a class="header-anchor" href="#topic-\u4E3B\u9898\u6A21\u5F0F-\u8DEF\u7531\u6A21\u5F0F\u7684\u4E00\u79CD" aria-hidden="true">#</a> topic \u4E3B\u9898\u6A21\u5F0F (\u8DEF\u7531\u6A21\u5F0F\u7684\u4E00\u79CD)</h4><p><img src="https://s2.loli.net/2022/04/10/qHPNTDr6FUklQhi.jpg" alt="img"></p><ul><li>\u661F\u53F7\u4E95\u53F7\u4EE3\u8868\u901A\u914D\u7B26</li><li>\u661F\u53F7\u4EE3\u8868\u591A\u4E2A\u5355\u8BCD, \u4E95\u53F7\u4EE3\u8868\u4E00\u4E2A\u5355\u8BCD</li><li>\u8DEF\u7531\u529F\u80FD\u6DFB\u52A0\u6A21\u7CCA\u5339\u914D</li><li>\u6D88\u606F\u4EA7\u751F\u8005\u4EA7\u751F\u6D88\u606F, \u628A\u6D88\u606F\u4EA4\u7ED9\u4EA4\u6362\u673A</li><li>\u4EA4\u6362\u673A\u6839\u636E key \u7684\u89C4\u5219\u6A21\u7CCA\u5339\u914D\u5230\u5BF9\u5E94\u7684\u961F\u5217, \u7531\u961F\u5217\u7684\u76D1\u542C\u6D88\u8D39\u8005\u63A5\u6536\u6D88\u606F\u6D88\u8D39</li></ul><h4 id="rpc-\u5148\u4E0D\u505A\u89E3\u91CA\u540E\u7EED\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#rpc-\u5148\u4E0D\u505A\u89E3\u91CA\u540E\u7EED\u8865\u5145" aria-hidden="true">#</a> RPC (\u5148\u4E0D\u505A\u89E3\u91CA\u540E\u7EED\u8865\u5145)</h4><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="42.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="44.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>',37),p=i("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),b={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),m=i(")"),_=i("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),f={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},Q=i("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function M(x,k){const t=r("RouterLink"),l=r("ExternalLinkIcon");return d(),n("div",null,[u,e("ul",null,[e("li",null,[e("p",null,[a(t,{to:"/Gomd_super/"},{default:c(()=>[p]),_:1})])]),e("li",null,[e("p",null,[e("a",b,[g,a(l)]),m])]),e("li",null,[e("p",null,[_,e("a",f,[Q,a(l)])])])])])}const E=o(s,[["render",M],["__file","43.html.vue"]]);export{E as default};
