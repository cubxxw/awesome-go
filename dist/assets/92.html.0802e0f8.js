import{_ as a,r as t,o as l,c,a as e,b as o,w as s,e as p,d as i}from"./app.2cadb53f.js";const g={},r=p(`<h1 id="go-\u547D\u4EE4\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#go-\u547D\u4EE4\u6307\u5357" aria-hidden="true">#</a> Go \u547D\u4EE4\u6307\u5357</h1><p>[toc]</p><h2 id="_1-\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> 1. \u57FA\u672C\u547D\u4EE4</h2><p>\u67E5\u770B\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go version
go version go1.14 darwin/amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u73AF\u5883\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/11/Q75MpaCmVcs4Fq2.png" alt="\u4EC5\u622A\u53D6\u90E8\u5206\u5185\u5BB9"></p><p>\u4EC5\u622A\u53D6\u90E8\u5206\u5185\u5BB9</p><p>\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ go env -w GOPATH=/usr/loca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u6267\u884C-go-\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-\u6267\u884C-go-\u7A0B\u5E8F" aria-hidden="true">#</a> 2. \u6267\u884C Go \u7A0B\u5E8F</h2><p>\u5F53\u524D\u70ED\u95E8\u7684\u7F16\u7A0B\u8BED\u8A00 Python \uFF0C\u53EF\u4EE5\u4E0D\u7528\u7F16\u8BD1\u6210 \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C\u3002</p><p>\u4F46 Go \u8BED\u8A00\u7A0B\u5E8F\u7684\u6267\u884C\uFF0C\u5FC5\u987B\u5F97\u5148\u7F16\u8BD1\u518D\u6267\u884C\u3002\u901A\u5E38\u6765\u8BF4\u6709\u5982\u4E0B\u4E24\u79CD\u65B9\u6CD5</p><ol><li><p>\u5148\u4F7F\u7528 go build \u7F16\u8BD1\u6210\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u518D\u6267\u884C\u8FD9\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6</p></li><li><p>\u4F7F\u7528 go run \u201C\u76F4\u63A5\u201D\u8FD0\u884C\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u8FD8\u662F\u4F1A\u53BB\u7F16\u8BD1\uFF0C\u4F46\u662F\u4E0D\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u751F\u6210\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u800C\u662F\u7F16\u8BD1\u6210\u4E34\u65F6\u6587\u4EF6\u540E\u76F4\u63A5\u8FD0\u884C\u3002</p></li></ol><h2 id="_3-\u7F16\u8BD1\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u7F16\u8BD1\u6587\u4EF6" aria-hidden="true">#</a> 3. \u7F16\u8BD1\u6587\u4EF6</h2><p>\u5C06 <code>.go</code> \u6587\u4EF6\u7F16\u8BD1\u6210\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>go build</code></p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF0Chelloworld \u6587\u4EF6\u5939\u4E0B\uFF0C\u5305\u542B\u4E24\u4E2A <code>.go</code> \u6587\u4EF6\uFF0C\u5B83\u4EEC\u90FD\u5F52\u5C5E\u4E8E\u540C\u4E00\u4E2A\u5305\u3002</p><p>\u5F53\u4F7F\u7528 <code>go build</code> \u53EF\u6307\u5B9A\u5305\u91CC\u6240\u6709\u7684\u6587\u4EF6\uFF0C\u5C31\u4F60\u4E0B\u9762\u8FD9\u6837\uFF0C\u9ED8\u8BA4\u4F1A\u4EE5\u7B2C\u4E00\u4E2A\u6587\u4EF6\uFF08main.go\uFF09\u540D\u751F\u6210\u53EF\u6267\u884C\u6587\u4EF6\uFF08main\uFF09\u3002</p><p><img src="https://s2.loli.net/2022/04/11/9oNaETdOxfZJWHl.png" alt="http://image.iswbm.com/image-20200312201759541.png"></p><p>\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4E0D\u6307\u5B9A\uFF0C\u6B64\u65F6\u751F\u6210\u7684\u53EF\u6267\u884C\u6587\u4EF6\u662F\u4EE5 \u6587\u4EF6\u5939\u540D\u547D\u540D</p><p><img src="https://s2.loli.net/2022/04/11/fqOo4CvUHtgY3Dd.png" alt="http://image.iswbm.com/image-20200312202032363.png"></p><p>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u624B\u52A8\u6307\u5B9A\u8FD9\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\u540D</p><p><img src="https://s2.loli.net/2022/04/11/AjbUTZBsMHqVOzJ.png" alt="http://image.iswbm.com/image-20200312202520902.png"></p><p>\u4EE5\u4E0A\u662F\u7F16\u8BD1\u5355\u4E2A\u6587\u4EF6\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u7F16\u8BD1\u591A\u4E2A\u6587\u4EF6</p><h2 id="_4-\u6E05\u9664\u7F16\u8BD1\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u6E05\u9664\u7F16\u8BD1\u6587\u4EF6" aria-hidden="true">#</a> 4. \u6E05\u9664\u7F16\u8BD1\u6587\u4EF6</h2><p>\u4F7F\u7528 go install \u6216 go install \u6709\u53EF\u80FD\u4F1A\u751F\u6210\u5F88\u591A\u7684\u6587\u4EF6\uFF0C\u5982\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u5F52\u6863\u6587\u4EF6\u7B49\uFF0C\u5B83\u4EEC\u7684\u540E\u7F00\u540D\u975E\u5E38\u591A\uFF0C\u6709 <code>.exe</code>\uFF0C <code>.a</code>\uFF0C <code>.test</code>\uFF0C<code>.o</code>\uFF0C<code>.so</code>\uFF0C<code>.5</code> \uFF0C<code>.6</code>\uFF0C<code>.8</code>\uFF0C\u5982\u679C\u8981\u624B\u52A8\u4E00\u4E2A\u4E00\u4E2A\u53BB\u6E05\u7406\u4ED6\u4EEC\uFF0C\u53EF\u4EE5\u8BF4\u662F\u76F8\u5F53\u9EBB\u70E6\u7684\uFF0C\u8FD9\u91CC\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 <code>go clean</code> \u4E00\u952E\u6E05\u7406\u3002</p><p><img src="https://s2.loli.net/2022/04/11/J4fLr68FeHacoku.png" alt="http://image.iswbm.com/image-20200313224148510.png"></p><p>\u5B9E\u9645\u5F00\u53D1\u4E2D<code>go clean</code>\u547D\u4EE4\u4F7F\u7528\u7684\u53EF\u80FD\u4E0D\u662F\u5F88\u591A\uFF0C\u4E00\u822C\u90FD\u662F\u5229\u7528<code>go clean</code>\u547D\u4EE4\u6E05\u9664\u7F16\u8BD1\u6587\u4EF6\uFF0C\u7136\u540E\u518D\u5C06\u6E90\u7801\u9012\u4EA4\u5230 github \u4E0A\uFF0C\u65B9\u4FBF\u5BF9\u4E8E\u6E90\u7801\u7684\u7BA1\u7406\u3002</p><p>go clean \u6709\u4E0D\u5C11\u7684\u53C2\u6570\uFF1A</p><ul><li><code>-i</code>\uFF1A\u6E05\u9664\u5173\u8054\u7684\u5B89\u88C5\u7684\u5305\u548C\u53EF\u8FD0\u884C\u6587\u4EF6\uFF0C\u4E5F\u5C31\u662F\u901A\u8FC7<code>go install</code>\u5B89\u88C5\u7684\u6587\u4EF6\uFF1B</li><li><code>-n</code>\uFF1A \u628A\u9700\u8981\u6267\u884C\u7684\u6E05\u9664\u547D\u4EE4\u6253\u5370\u51FA\u6765\uFF0C\u4F46\u662F\u4E0D\u6267\u884C\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u77E5\u9053\u5E95\u5C42\u662F\u5982\u4F55\u8FD0\u884C\u7684\uFF1B</li><li><code>-r</code>\uFF1A \u5FAA\u73AF\u7684\u6E05\u9664\u5728 import \u4E2D\u5F15\u5165\u7684\u5305\uFF1B</li><li><code>-x</code>\uFF1A \u6253\u5370\u51FA\u6765\u6267\u884C\u7684\u8BE6\u7EC6\u547D\u4EE4\uFF0C\u5176\u5B9E\u5C31\u662F -n \u6253\u5370\u7684\u6267\u884C\u7248\u672C\uFF1B</li><li><code>-cache</code>\uFF1A \u5220\u9664\u6240\u6709<code>go build</code>\u547D\u4EE4\u7684\u7F13\u5B58</li><li><code>-testcache</code>\uFF1A \u5220\u9664\u5F53\u524D\u5305\u6240\u6709\u7684\u6D4B\u8BD5\u7ED3\u679C</li></ul><h2 id="_4-\u4E0B\u8F7D\u4EE3\u7801\u5305" tabindex="-1"><a class="header-anchor" href="#_4-\u4E0B\u8F7D\u4EE3\u7801\u5305" aria-hidden="true">#</a> 4. \u4E0B\u8F7D\u4EE3\u7801\u5305</h2><p>\u5728 Golang \u4E2D\uFF0C\u9664\u4E86\u53EF\u4EE5\u4ECE\u5B98\u65B9\u7F51\u7AD9\uFF08golang.org\uFF09\u4E0B\u8F7D\u5305\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4ECE\u4E00\u4E9B\u4EE3\u7801\u4ED3\u5E93\u4E2D\u4E0B\u8F7D\uFF0C\u8BF8\u5982 github.com\uFF0Cbitbucket.org \u8FD9\u6837\u7684\u4EE3\u7801\u6258\u7BA1\u7F51\u7AD9\u3002</p><p><code>go get</code> \u8FD9\u6761\u547D\u4EE4\uFF0C\u4F60\u4EE5\u540E\u4F1A\u6700\u7ECF\u5E38\u7528\u5230\uFF0C\u5B83\u53EF\u4EE5\u501F\u52A9\u4EE3\u7801\u7BA1\u7406\u5DE5\u5177\u901A\u8FC7\u8FDC\u7A0B\u62C9\u53D6\u6216\u66F4\u65B0\u4EE3\u7801\u5305\u53CA\u5176\u4F9D\u8D56\u5305\uFF0C\u5E76\u81EA\u52A8\u5B8C\u6210\u7F16\u8BD1\u548C\u5B89\u88C5\u3002\u6574\u4E2A\u8FC7\u7A0B\u5C31\u50CF\u5B89\u88C5\u4E00\u4E2A App \u4E00\u6837\u7B80\u5355\u3002</p><p>\u8FD9\u4E2A\u547D\u4EE4\u53EF\u4EE5\u52A8\u6001\u83B7\u53D6\u8FDC\u7A0B\u4EE3\u7801\u5305\uFF0C\u76EE\u524D\u652F\u6301\u7684\u6709 BitBucket\u3001GitHub\u3001Google Code \u548C Launchpad\u3002\u5728\u4F7F\u7528 go get \u547D\u4EE4\u524D\uFF0C\u9700\u8981\u5B89\u88C5\u4E0E\u8FDC\u7A0B\u5305\u5339\u914D\u7684\u4EE3\u7801\u7BA1\u7406\u5DE5\u5177\uFF0C\u5982 Git\u3001SVN\u7B49\u3002</p><p><code>go get</code> \u4F1A\u6839\u636E\u57DF\u540D\u7684\u4E0D\u540C\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u5DE5\u5177\u53BB\u62C9\u53D6\u4EE3\u7801\u5305\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u56FE</p><p><img src="https://s2.loli.net/2022/04/11/vq5dHtzcpanlX7N.png" alt="image-20200312203244402"></p><p>image-20200312203244402</p><p>\u4E0B\u8F7D\u548C\u5B89\u88C5\uFF0C\u539F\u672C\u662F\u4E24\u4E2A\u52A8\u4F5C\uFF0C\u4F46\u4F7F\u7528 <code>go get</code> \u540E\uFF0C\u5B83\u9ED8\u8BA4\u4F1A\u5C06\u4E0B\u8F7D\uFF08\u6E90\u7801\u5305\uFF09\u548C\u5B89\u88C5\uFF08go install\uFF09\u5408\u5E76\u8D77\u6765\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u6307\u5B9A\u5C06\u62C6\u6563\u5B83\u4EEC\u3002</p><p>\u5728\u7EC8\u7AEF\u6267\u884C <code>go help get</code>\uFF0C\u4F1A\u5F39\u51FA <code>go get</code> \u7684\u5E2E\u52A9\u6587\u6863\uFF0C\u6211\u8FD9\u91CC\u6C49\u5316\u603B\u7ED3\u4E00\u4E0B\uFF0C\u6765\u5E2E\u52A9\u5927\u5BB6\u5B66\u4E60\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go get [-d] [-f] [-t] [-u] [-v] [-fix] [-insecure] [build flags] [packages]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4E2D\u51E0\u4E2A\u53C2\u6570\u8BE6\u89E3\u5982\u4E0B</p><ul><li><p><code>-u</code>\uFF1A</p><p>\u7528\u4E8E\u4E0B\u8F7D\u6307\u5B9A\u7684\u8DEF\u5F84\u5305\u53CA\u5176\u4F9D\u8D56\u5305\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u4F1A\u4E0B\u8F7D\u672C\u5730\u5DF2\u7ECF\u5B58\u5728\u7684\uFF0C\u53EA\u4F1A\u4E0B\u8F7D\u672C\u5730\u4E0D\u5B58\u5728\u7684\u4EE3\u7801\u5305\u3002\u5C31\u662F\u53E3\u4E2D\u5E38\u8BF4\u7684\u66F4\u65B0\u5305 \u6BD4\u5982\uFF1Ago get -u github.com/jinzhu/gorm\u3002\u4F1A\u628A\u6700\u65B0\u7684 gorm \u5305\u4E0B\u8F7D\u5230\u4F60\u672C\u5730</p></li><li><p><code>-d</code>\uFF1A</p><p>\u8BA9\u547D\u4EE4\u7A0B\u5E8F\u53EA\u6267\u884C\u4E0B\u8F7D\u52A8\u4F5C\uFF0C\u800C\u4E0D\u6267\u884C\u5B89\u88C5\u52A8\u4F5C\u3002</p></li><li><p><code>-t</code></p><p>\u8BA9\u547D\u4EE4\u7A0B\u5E8F\u540C\u65F6\u4E0B\u8F7D\u5E76\u5B89\u88C5\u6307\u5B9A\u7684\u4EE3\u7801\u5305\u4E2D\u7684\u6D4B\u8BD5\u6E90\u7801\u6587\u4EF6\u4E2D\u4F9D\u8D56\u7684\u4EE3\u7801\u5305</p></li><li><p><code>-fix</code></p><p>\u547D\u4EE4\u7A0B\u5E8F\u5728\u4E0B\u8F7D\u4EE3\u7801\u5305\u540E\u5148\u6267\u884C\u4FEE\u6B63\u52A8\u4F5C\uFF0C\u800C\u540E\u518D\u8FDB\u884C\u7F16\u8BD1\u548C\u5B89\u88C5\u3002\u6BD4\u5982\uFF0C\u6211\u7684\u4EE3\u7801\u662F\u75281.7 \u5F00\u53D1\u7684\uFF0C\u73B0\u5728go \u7248\u672C\u5DF2\u7ECF\u662F1.13 \u4E86\uFF0C\u6709\u4E9B\u5305\u5DF2\u7ECF\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u90A3\u4E48\u6211\u4EEC\u5728\u4F7F\u7528go get\u547D\u4EE4\u7684\u65F6\u5019\u53EF\u4EE5\u52A0\u5165-fix\u6807\u8BB0\u3002\u8FD9\u4E2A\u6807\u8BB0\u7684\u4F5C\u7528\u662F\u5728\u68C0\u51FA\u4EE3\u7801\u5305\u4E4B\u540E\uFF0C\u5148\u5BF9\u8BE5\u4EE3\u7801\u5305\u4E2D\u4E0D\u7B26\u5408Go\u8BED\u8A001.7\u7248\u672C\u7684\u8BED\u8A00\u89C4\u8303\u7684\u8BED\u6CD5\u8FDB\u884C\u4FEE\u6B63\uFF0C\u7136\u540E\u518D\u4E0B\u8F7D\u5B83\u7684\u4F9D\u8D56\u5305\uFF0C\u6700\u540E\u518D\u5BF9\u5B83\u4EEC\u8FDB\u884C\u7F16\u8BD1\u548C\u5B89\u88C5\u3002</p></li><li><p><code>-v</code></p><p>\u6253\u5370\u51FA\u90A3\u4E9B\u4E0B\u8F7D\u7684\u4EE3\u7801\u5305\u7684\u540D\u5B57</p></li><li><p><code>-f</code></p><p>\u4EC5\u5728\u4F7F\u7528-u\u6807\u8BB0\u65F6\u624D\u6709\u6548\u3002\u8BE5\u6807\u8BB0\u4F1A\u8BA9\u547D\u4EE4\u7A0B\u5E8F\u5FFD\u7565\u6389\u5BF9\u5DF2\u4E0B\u8F7D\u4EE3\u7801\u5305\u7684\u5BFC\u5165\u8DEF\u5F84\u7684\u68C0\u67E5\u3002\u5982\u679C\u4E0B\u8F7D\u5E76\u5B89\u88C5\u7684\u4EE3\u7801\u5305\u6240\u5C5E\u7684\u9879\u76EE\u662F\u4F60\u4ECE\u522B\u4EBA\u90A3\u91CCFork\u8FC7\u6765\u7684\uFF0C\u90A3\u4E48\u8FD9\u6837\u505A\u5C31\u5C24\u4E3A\u91CD\u8981\u4E86</p></li><li><p><code>-x</code></p><p>\u6253\u5370\u51FA\u6574\u4E2A\u8FC7\u7A0B\u4F7F\u7528\u4E86\u54EA\u4E9B\u547D\u4EE4</p></li><li><p><code>-insecure</code> \u5141\u8BB8\u547D\u4EE4\u7A0B\u5E8F\u4F7F\u7528\u975E\u5B89\u5168\u7684scheme\uFF08\u5982HTTP\uFF09\u53BB\u4E0B\u8F7D\u6307\u5B9A\u7684\u4EE3\u7801\u5305\u3002\u5982\u679C\u4F60\u7528\u7684\u4EE3\u7801\u4ED3\u5E93\uFF08\u5982\u516C\u53F8\u5185\u90E8\u7684Gitlab\uFF09\u6CA1\u6709HTTPS\u652F\u6301\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u6B64\u6807\u8BB0\u3002\u8BF7\u5728\u786E\u5B9A\u5B89\u5168\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u5B83\u3002\uFF08\u8BB0\u5F97 \u4F7F\u7528\u5DE5\u5177 git \u65F6\uFF0C\u6709\u4E2A\u7248\u672C\u5C31\u662F http \u5347\u7EA7\u4E3A\u4E86https\uFF09</p></li></ul><p>\u53C2\u6570\u6709\u70B9\u591A\uFF0C\u54B1\u4E00\u4E2A\u4E00\u4E2A\u6765\u3002</p><p>\u6307\u5B9A <code>-d</code>\uFF0C\u53EA\u4E0B\u8F7D\u6E90\u7801\u5305\u800C\u4E0D\u8FDB\u884C\u5B89\u88C5</p><p><img src="https://s2.loli.net/2022/04/11/posJi2hOxaCGlbK.png" alt="http://image.iswbm.com/image-20200312204335687.png"></p><p>\u7531\u4E8E\u6B64\u65F6\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E0B\u8F7D\u4E86 logging \u5305\uFF0C\u5F53\u4F60\u518D\u6B21\u6267\u884C go get \u65F6\uFF0C\u5E76\u4E0D\u4F1A\u91CD\u590D\u4E0B\u8F7D\uFF0C\u53EA\u6709\u5F53\u4F60\u6307\u5B9A <code>-u</code> \u65F6\uFF0C\u4E0D\u7BA1\u4F60\u9700\u4E0D\u9700\u8981\u66F4\u65B0\uFF0C\u90FD\u4F1A\u89E6\u53D1\u91CD\u65B0\u4E0B\u8F7D\u5F3A\u5236\u66F4\u65B0\u3002</p><p><img src="https://s2.loli.net/2022/04/11/wj2vqo7XkBc8snD.png" alt="http://image.iswbm.com/image-20200312204746007.png"></p><p>\u5982\u679C\u4F60\u60F3\u770B\uFF0C\u4E0B\u8F7D\u8FD9\u4E2A\u8FC7\u7A0B\u7528\u5230\u4E86\u54EA\u51E0\u4E2A\u547D\u4EE4\uFF0C\u53EF\u4EE5\u6307\u5B9A <code>-x</code> \u53C2\u6570</p><p><img src="https://s2.loli.net/2022/04/11/TkpuOKfDxzj7Bha.png" alt="http://image.iswbm.com/image-20200312205001161.png"></p><p>\u6700\u540E\uFF0C\u4F60\u53EF\u80FD\u60F3\u8BF4\uFF0C\u4E3A\u4EC0\u4E48 golang \u91CC\u7684\u5305\u542B\u8FD9\u4E48\u957F\uFF0C\u597D\u96BE\u8BB0\u5440\uFF0C\u5176\u5B9E\u8FD9\u4E2A\u8DEF\u5F84\u662F\u6709\u8BB2\u7A76\u7684</p><p><img src="https://s2.loli.net/2022/04/11/vZCF5lno7hU8KHM.png" alt="http://image.iswbm.com/image-20200312210557326.png"></p><p>\u8FD9\u6837\u4E0D\u540C\u7684\u4EBA\u5F00\u53D1\u7684\u5305\u5373\u4F7F\u4F7F\u7528\u540C\u4E00\u4E2A\u540D\uFF0C\u4E5F\u4E0D\u4F1A\u51B2\u7A81\u4E86\u3002</p><p>\u4E0B\u8F7D\u7684\u5305\uFF0C\u53EF\u80FD\u6709\u4E0D\u540C\u7684\u7248\u672C\uFF0C\u5982\u4F55\u6307\u5B9A\u7248\u672C\u4E0B\u8F7D\u5462\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u62C9\u53D6\u6700\u65B0
go get github.com/foo

# \u6700\u65B0\u7684\u6B21\u8981\u7248\u672C\u6216\u8005\u4FEE\u8BA2\u7248\u672C(x.y.z, z\u662F\u4FEE\u8BA2\u7248\u672C\u53F7\uFF0C y\u662F\u6B21\u8981\u7248\u672C\u53F7)
go get -u github.com/foo

# \u5347\u7EA7\u5230\u6700\u65B0\u7684\u4FEE\u8BA2\u7248\u672C
go get -u=patch github.com/foo

# \u6307\u5B9A\u7248\u672C\uFF0C\u82E5\u5B58\u5728tag\uFF0C\u5219\u4EE3\u884C\u4F7F\u7528
go get github.com/foo@v1.2.3

# \u6307\u5B9A\u5206\u652F
go get github.com/foo@master

# \u6307\u5B9Agit\u63D0\u4EA4\u7684hash\u503C
go get github.com/foo@e3702bed2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u5B89\u88C5\u4EE3\u7801\u5305" tabindex="-1"><a class="header-anchor" href="#_6-\u5B89\u88C5\u4EE3\u7801\u5305" aria-hidden="true">#</a> 6. \u5B89\u88C5\u4EE3\u7801\u5305</h2><p><code>go install</code> \u8FD9\u4E2A\u547D\u4EE4\uFF0C\u5982\u679C\u4F60\u5B89\u88C5\u7684\u662F\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\uFF08\u5305\u540D\u662F main\uFF09\uFF0C\u5B83\u4F1A\u751F\u6210\u53EF\u6267\u884C\u6587\u4EF6\u5230 bin \u76EE\u5F55\u4E0B\u3002\u8FD9\u70B9\u548C <code>go build</code> \u5F88\u76F8\u4F3C\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C<code>go build</code> \u7F16\u8BD1\u751F\u6210\u7684\u53EF\u6267\u884C\u6587\u4EF6\u653E\u5728\u5F53\u524D\u76EE\u5F55\uFF0C\u800C <code>go install</code> \u4F1A\u5C06\u53EF\u6267\u884C\u6587\u4EF6\u7EDF\u4E00\u653E\u81F3 <code>$GOPATH/bin</code> \u76EE\u5F55\u4E0B\u3002</p><p><img src="https://s2.loli.net/2022/04/11/JiPjYyK97QGM2U6.png" alt="http://image.iswbm.com/image-20200312221011685.png"></p><p>\u5982\u679C\u4F60\u5B89\u88C5\u7684\u662F\u4E00\u4E2A\u5E93\uFF0C\u5B83\u4F1A\u5C06\u8FD9\u4E2A\u5E93\u5B89\u88C5\u5230 pkg \u76EE\u5F55\u4E0B\uFF0C\u751F\u6210 <code>.a</code> \u4E3A\u540E\u7F00\u7684\u6587\u4EF6\u3002</p><p><img src="https://s2.loli.net/2022/04/11/mUeNsdGf4u6KDqX.png" alt="http://image.iswbm.com/image-20200312221141028.png"></p><h2 id="_7-\u683C\u5F0F\u5316-go-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-\u683C\u5F0F\u5316-go-\u6587\u4EF6" aria-hidden="true">#</a> 7. \u683C\u5F0F\u5316 go \u6587\u4EF6</h2><p>Go\u8BED\u8A00\u7684\u5F00\u53D1\u56E2\u961F\u5236\u5B9A\u4E86\u7EDF\u4E00\u7684\u5B98\u65B9\u4EE3\u7801\u98CE\u683C\uFF0C\u5E76\u4E14\u63A8\u51FA\u4E86 gofmt \u5DE5\u5177\uFF08gofmt \u6216 go fmt\uFF09\u6765\u5E2E\u52A9\u5F00\u53D1\u8005\u683C\u5F0F\u5316\u4ED6\u4EEC\u7684\u4EE3\u7801\u5230\u7EDF\u4E00\u7684\u98CE\u683C\u3002</p><p>gofmt \u662F\u4E00\u4E2A cli \u7A0B\u5E8F\uFF0C\u4F1A\u4F18\u5148\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\uFF0C\u5982\u679C\u4F20\u5165\u4E86\u6587\u4EF6\u8DEF\u5F84\u7684\u8BDD\uFF0C\u4F1A\u683C\u5F0F\u5316\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u5982\u679C\u4F20\u5165\u4E00\u4E2A\u76EE\u5F55\uFF0C\u4F1A\u683C\u5F0F\u5316\u76EE\u5F55\u4E2D\u6240\u6709 .go \u6587\u4EF6\uFF0C\u5982\u679C\u4E0D\u4F20\u53C2\u6570\uFF0C\u4F1A\u683C\u5F0F\u5316\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709 .go \u6587\u4EF6\u3002</p><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="91.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="93.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,65),h=i("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),m={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},u=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),b=i(")"),v=i("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),_={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},f=i("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function x(k,w){const n=t("RouterLink"),d=t("ExternalLinkIcon");return l(),c("div",null,[r,e("ul",null,[e("li",null,[e("p",null,[o(n,{to:"/Gomd_super/"},{default:s(()=>[h]),_:1})])]),e("li",null,[e("p",null,[e("a",m,[u,o(d)]),b])]),e("li",null,[e("p",null,[v,e("a",_,[f,o(d)])])])])])}const C=a(g,[["render",x],["__file","92.html.vue"]]);export{C as default};
