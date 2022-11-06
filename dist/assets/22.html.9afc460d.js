import{_ as d,r as o,o as r,c,a as e,b as s,w as l,e as n,d as a}from"./app.ebf2b957.js";const u="/assets/oefCXypTigtH2QK.beb3d90a.png",h="/assets/sdBHkeAEPRIy7Z5.4692f117.png",p={},_=e("h1",{id:"redis\u8FDB\u9636",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis\u8FDB\u9636","aria-hidden":"true"},"#"),n(" Redis\u8FDB\u9636")],-1),v={class:"table-of-contents"},m=n("Redis \u54C8\u5E0C(Hash)"),g=n("\u5B9E\u4F8B"),b=n("Redis hash \u547D\u4EE4"),k=n("hash\u4F7F\u7528"),f=n("\u5217\u8868"),x=n("set\uFF08\u96C6\u5408\uFF09"),y=e("p",null,"[toc]",-1),w=n("\u{1F636}\u200D\u{1F32B}\uFE0Fgo\u8BED\u8A00\u5B98\u65B9\u7F16\u7A0B\u6307\u5357\uFF1A"),q={href:"https://golang.org/#",target:"_blank",rel:"noopener noreferrer"},H=n("https://golang.org/#"),E=e("blockquote",null,[e("p",null,"go\u8BED\u8A00\u7684\u5B98\u65B9\u6587\u6863\u5B66\u4E60\u7B14\u8BB0\u5F88\u5168\uFF0C\u63A8\u8350\u53BB\u5B98\u7F51\u5B66\u4E60")],-1),S=n("\u{1F636}\u200D\u{1F32B}\uFE0F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\uFF1Agithub: "),T={href:"https://github.com/3293172751/golang-rearn",target:"_blank",rel:"noopener noreferrer"},N=n("https://github.com/3293172751/golang-rearn"),L=e("hr",null,null,-1),R=e("p",null,[e("strong",null,"\u533A\u5757\u94FE\u6280\u672F\uFF08\u4E5F\u79F0\u4E4B\u4E3A\u5206\u5E03\u5F0F\u8D26\u672C\u6280\u672F\uFF09"),n("\uFF0C\u662F\u4E00\u79CD\u4E92\u8054\u7F51\u6570\u636E\u5E93\u6280\u672F\uFF0C\u5176\u7279\u70B9\u662F\u53BB\u4E2D\u5FC3\u5316\uFF0C\u516C\u5F00\u900F\u660E\uFF0C\u8BA9\u6BCF\u4E00\u4E2A\u4EBA\u5747\u53EF\u53C2\u4E0E\u7684\u6570\u636E\u5E93\u8BB0\u5F55")],-1),A=n("\u2764\uFE0F\u{1F495}\u{1F495}\u5173\u4E8E\u533A\u5757\u94FE\u6280\u672F\uFF0C\u53EF\u4EE5\u5173\u6CE8\u6211\uFF0C\u5171\u540C\u5B66\u4E60\u66F4\u591A\u7684\u533A\u5757\u94FE\u6280\u672F\u3002\u535A\u5BA2"),C={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},K=n("http://nsddd.top"),O=e("hr",null,null,-1),V=e("h1",{id:"redis\u8FDB\u9636-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis\u8FDB\u9636-1","aria-hidden":"true"},"#"),n(" Redis\u8FDB\u9636")],-1),B={class:"custom-container tip"},I=e("p",{class:"custom-container-title"},"\u5B98\u65B9\u5730\u5740",-1),M={href:"http://redisdoc.com",target:"_blank",rel:"noopener noreferrer"},j=n("\u6307\u4EE4\uFF1Ahttps://redisdoc.com"),Y={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},X=n("\u5B98\u7F51\uFF1Ahttps://redis.io"),G=n("\u548Chttp://redis.cn"),P=a(`<h2 id="redis-\u54C8\u5E0C-hash" tabindex="-1"><a class="header-anchor" href="#redis-\u54C8\u5E0C-hash" aria-hidden="true">#</a> Redis \u54C8\u5E0C(Hash)</h2><p><strong>Redis hash \u662F\u4E00\u4E2A string \u7C7B\u578B\u7684 field\uFF08\u5B57\u6BB5\uFF09 \u548C value\uFF08\u503C\uFF09 \u7684\u6620\u5C04\u8868\uFF0Chash \u7279\u522B\u9002\u5408\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u3002</strong></p><p>Redis \u4E2D\u6BCF\u4E2A hash \u53EF\u4EE5\u5B58\u50A8 232 - 1 \u952E\u503C\u5BF9\uFF0840\u591A\u4EBF\uFF09\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt;  HMSET key_one name &quot;redis tutorial&quot; description &quot;redis basic commands for caching&quot; likes 20 visitors 23000
OK
127.0.0.1:6379&gt;  HGETALL key_one
1) &quot;name&quot;
2) &quot;redis tutorial&quot;
3) &quot;description&quot;
4) &quot;redis basic commands for caching&quot;
5) &quot;likes&quot;
6) &quot;20&quot;
7) &quot;visitors&quot;
8) &quot;23000&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4EE5\u4E0A\u5B9E\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u8BBE\u7F6E\u4E86 redis \u7684\u4E00\u4E9B\u63CF\u8FF0\u4FE1\u606F(name, description, likes, visitors) \u5230\u54C8\u5E0C\u8868\u7684 <strong>key_one</strong> \u4E2D\u3002</p><hr><h2 id="redis-hash-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#redis-hash-\u547D\u4EE4" aria-hidden="true">#</a> Redis hash \u547D\u4EE4</h2><p>\u4E0B\u8868\u5217\u51FA\u4E86 redis hash \u57FA\u672C\u7684\u76F8\u5173\u547D\u4EE4\uFF1A</p>`,9),F=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"\u5E8F\u53F7"),e("th",{style:{"text-align":"left"}},"\u547D\u4EE4\u53CA\u63CF\u8FF0")])],-1),Q=e("td",{style:{"text-align":"left"}},"1",-1),Z={style:{"text-align":"left"}},D=n("[HDEL key field1 "),U={href:"https://www.runoob.com/redis/hashes-hdel.html",target:"_blank",rel:"noopener noreferrer"},W=n("field2]"),z=n(" \u5220\u9664\u4E00\u4E2A\u6216\u591A\u4E2A\u54C8\u5E0C\u8868\u5B57\u6BB5"),J=e("td",{style:{"text-align":"left"}},"2",-1),$={style:{"text-align":"left"}},ee={href:"https://www.runoob.com/redis/hashes-hexists.html",target:"_blank",rel:"noopener noreferrer"},ne=n("HEXISTS key field"),se=n(" \u67E5\u770B\u54C8\u5E0C\u8868 key \u4E2D\uFF0C\u6307\u5B9A\u7684\u5B57\u6BB5\u662F\u5426\u5B58\u5728\u3002"),te=e("td",{style:{"text-align":"left"}},"3",-1),ie={style:{"text-align":"left"}},le={href:"https://www.runoob.com/redis/hashes-hget.html",target:"_blank",rel:"noopener noreferrer"},oe=n("HGET key field"),ae=n(" \u83B7\u53D6\u5B58\u50A8\u5728\u54C8\u5E0C\u8868\u4E2D\u6307\u5B9A\u5B57\u6BB5\u7684\u503C\u3002"),de=e("td",{style:{"text-align":"left"}},"4",-1),re={style:{"text-align":"left"}},ce={href:"https://www.runoob.com/redis/hashes-hgetall.html",target:"_blank",rel:"noopener noreferrer"},ue=n("HGETALL key"),he=n(" \u83B7\u53D6\u5728\u54C8\u5E0C\u8868\u4E2D\u6307\u5B9A key \u7684\u6240\u6709\u5B57\u6BB5\u548C\u503C"),pe=e("td",{style:{"text-align":"left"}},"5",-1),_e={style:{"text-align":"left"}},ve={href:"https://www.runoob.com/redis/hashes-hincrby.html",target:"_blank",rel:"noopener noreferrer"},me=n("HINCRBY key field increment"),ge=n(" \u4E3A\u54C8\u5E0C\u8868 key \u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\u7684\u6574\u6570\u503C\u52A0\u4E0A\u589E\u91CF increment \u3002"),be=e("td",{style:{"text-align":"left"}},"6",-1),ke={style:{"text-align":"left"}},fe={href:"https://www.runoob.com/redis/hashes-hincrbyfloat.html",target:"_blank",rel:"noopener noreferrer"},xe=n("HINCRBYFLOAT key field increment"),ye=n(" \u4E3A\u54C8\u5E0C\u8868 key \u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\u7684\u6D6E\u70B9\u6570\u503C\u52A0\u4E0A\u589E\u91CF increment \u3002"),we=e("td",{style:{"text-align":"left"}},"7",-1),qe={style:{"text-align":"left"}},He={href:"https://www.runoob.com/redis/hashes-hkeys.html",target:"_blank",rel:"noopener noreferrer"},Ee=n("HKEYS key"),Se=n(" \u83B7\u53D6\u6240\u6709\u54C8\u5E0C\u8868\u4E2D\u7684\u5B57\u6BB5"),Te=e("td",{style:{"text-align":"left"}},"8",-1),Ne={style:{"text-align":"left"}},Le={href:"https://www.runoob.com/redis/hashes-hlen.html",target:"_blank",rel:"noopener noreferrer"},Re=n("HLEN key"),Ae=n(" \u83B7\u53D6\u54C8\u5E0C\u8868\u4E2D\u5B57\u6BB5\u7684\u6570\u91CF"),Ce=e("td",{style:{"text-align":"left"}},"9",-1),Ke={style:{"text-align":"left"}},Oe=n("[HMGET key field1 "),Ve={href:"https://www.runoob.com/redis/hashes-hmget.html",target:"_blank",rel:"noopener noreferrer"},Be=n("field2]"),Ie=n(" \u83B7\u53D6\u6240\u6709\u7ED9\u5B9A\u5B57\u6BB5\u7684\u503C"),Me=e("td",{style:{"text-align":"left"}},"10",-1),je={style:{"text-align":"left"}},Ye=n("[HMSET key field1 value1 "),Xe={href:"https://www.runoob.com/redis/hashes-hmset.html",target:"_blank",rel:"noopener noreferrer"},Ge=n("field2 value2 ]"),Pe=n(" \u540C\u65F6\u5C06\u591A\u4E2A field-value (\u57DF-\u503C)\u5BF9\u8BBE\u7F6E\u5230\u54C8\u5E0C\u8868 key \u4E2D\u3002"),Fe=e("td",{style:{"text-align":"left"}},"11",-1),Qe={style:{"text-align":"left"}},Ze={href:"https://www.runoob.com/redis/hashes-hset.html",target:"_blank",rel:"noopener noreferrer"},De=n("HSET key field value"),Ue=n(" \u5C06\u54C8\u5E0C\u8868 key \u4E2D\u7684\u5B57\u6BB5 field \u7684\u503C\u8BBE\u4E3A value \u3002"),We=e("td",{style:{"text-align":"left"}},"12",-1),ze={style:{"text-align":"left"}},Je={href:"https://www.runoob.com/redis/hashes-hsetnx.html",target:"_blank",rel:"noopener noreferrer"},$e=n("HSETNX key field value"),en=n(" \u53EA\u6709\u5728\u5B57\u6BB5 field \u4E0D\u5B58\u5728\u65F6\uFF0C\u8BBE\u7F6E\u54C8\u5E0C\u8868\u5B57\u6BB5\u7684\u503C\u3002"),nn=e("td",{style:{"text-align":"left"}},"13",-1),sn={style:{"text-align":"left"}},tn={href:"https://www.runoob.com/redis/hashes-hvals.html",target:"_blank",rel:"noopener noreferrer"},ln=n("HVALS key"),on=n(" \u83B7\u53D6\u54C8\u5E0C\u8868\u4E2D\u6240\u6709\u503C\u3002"),an=e("td",{style:{"text-align":"left"}},"14",-1),dn={style:{"text-align":"left"}},rn=n("[HSCAN key cursor "),cn={href:"https://www.runoob.com/redis/hashes-hscan.html",target:"_blank",rel:"noopener noreferrer"},un=n("MATCH pattern] [COUNT count]"),hn=n(" \u8FED\u4EE3\u54C8\u5E0C\u8868\u4E2D\u7684\u952E\u503C\u5BF9\u3002"),pn={href:"https://redis.io/commands",target:"_blank",rel:"noopener noreferrer"},_n=n("\u66F4\u591A\u547D\u4EE4\u8BF7\u53C2\u8003\uFF1Ahttps://redis.io/commands"),vn=a('<hr><h2 id="hash\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#hash\u4F7F\u7528" aria-hidden="true">#</a> hash\u4F7F\u7528</h2><p><img src="'+u+`" alt="image-20220402113234522"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u57FA\u672C\u64CD\u4F5C\uFF1A
hset/hget/hgetall/hdel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="hgetall\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#hgetall\u7684\u4F7F\u7528" aria-hidden="true">#</a> hgetall\u7684\u4F7F\u7528</h5><p><img src="`+h+`" alt="image-20220402113425749"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528hmset\u548Chmget\u4E00\u6B21\u6027\u83B7\u53D6\u591A\u4E2A
hmset lisa age name add phon 
hmget lisa age name 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="hlen" tabindex="-1"><a class="header-anchor" href="#hlen" aria-hidden="true">#</a> HLEN</h5><p><strong>HLEN key</strong></p><p>\u8FD4\u56DE\u54C8\u5E0C\u8868 <code>key</code> \u4E2D\u57DF\u7684\u6570\u91CF\u3002</p><ul><li><p><strong>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A</strong></p><p>O(1)</p></li><li><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u54C8\u5E0C\u8868\u4E2D\u57DF\u7684\u6570\u91CF\u3002\u5F53 <code>key</code> \u4E0D\u5B58\u5728\u65F6\uFF0C\u8FD4\u56DE <code>0</code> \u3002</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis&gt; HSET db redis redis.com
(integer) 1

redis&gt; HSET db mysql mysql.com
(integer) 1

redis&gt; HLEN db
(integer) 2

redis&gt; HSET db mongodb mongodb.org
(integer) 1

redis&gt; HLEN db
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>HKEYS key</strong></p><p>\u8FD4\u56DE\u54C8\u5E0C\u8868 <code>key</code> \u4E2D\u7684\u6240\u6709\u57DF\u3002</p><ul><li><p><strong>\u53EF\u7528\u7248\u672C\uFF1A</strong></p><blockquote><p>= 2.0.0</p></blockquote></li><li><p><strong>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A</strong></p><p>O(N)\uFF0C <code>N</code> \u4E3A\u54C8\u5E0C\u8868\u7684\u5927\u5C0F\u3002</p></li><li><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u4E00\u4E2A\u5305\u542B\u54C8\u5E0C\u8868\u4E2D\u6240\u6709\u57DF\u7684\u8868\u3002\u5F53 <code>key</code> \u4E0D\u5B58\u5728\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u8868\u3002</p></li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code># \u54C8\u5E0C\u8868\u975E\u7A7A

redis<span class="token operator">&gt;</span> HMSET website google www<span class="token punctuation">.</span>google<span class="token punctuation">.</span>com yahoo www<span class="token punctuation">.</span>yahoo<span class="token punctuation">.</span>com
OK

redis<span class="token operator">&gt;</span> HKEYS website
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;google&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;yahoo&quot;</span>


# \u7A7A\u54C8\u5E0C\u8868<span class="token operator">/</span>key\u4E0D\u5B58\u5728

redis<span class="token operator">&gt;</span> EXISTS fake_key
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

redis<span class="token operator">&gt;</span> HKEYS fake_key
<span class="token punctuation">(</span>empty list or set<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>HVALS key</strong></p><p>\u8FD4\u56DE\u54C8\u5E0C\u8868 <code>key</code> \u4E2D\u6240\u6709\u57DF\u7684\u503C\u3002</p><ul><li><p><strong>\u53EF\u7528\u7248\u672C\uFF1A</strong></p><blockquote><p>= 2.0.0</p></blockquote></li><li><p><strong>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A</strong></p><p>O(N)\uFF0C <code>N</code> \u4E3A\u54C8\u5E0C\u8868\u7684\u5927\u5C0F\u3002</p></li><li><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u4E00\u4E2A\u5305\u542B\u54C8\u5E0C\u8868\u4E2D\u6240\u6709\u503C\u7684\u8868\u3002\u5F53 <code>key</code> \u4E0D\u5B58\u5728\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u8868\u3002</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u975E\u7A7A\u54C8\u5E0C\u8868

redis&gt; HMSET website google www.google.com yahoo www.yahoo.com
OK

redis&gt; HVALS website
1) &quot;www.google.com&quot;
2) &quot;www.yahoo.com&quot;


# \u7A7A\u54C8\u5E0C\u8868/\u4E0D\u5B58\u5728\u7684key

redis&gt; EXISTS not_exists
(integer) 0

redis&gt; HVALS not_exists
(empty list or set)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868" aria-hidden="true">#</a> \u5217\u8868</h3><p><strong>Redis\u5217\u8868\u662F\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u5217\u8868\uFF0C\u6309\u7167\u63D2\u5165\u987A\u5E8F\u6392\u5E8F\u3002\u4F60\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\u5230\u5217\u8868\u7684\u5934\u90E8\uFF08\u5DE6\u8FB9\uFF09\u6216\u8005\u5C3E\u90E8\uFF08\u53F3\u8FB9\uFF09</strong></p><p>\u4E00\u4E2A\u5217\u8868\u6700\u591A\u53EF\u4EE5\u5305\u542B 232 - 1 \u4E2A\u5143\u7D20 (4294967295, \u6BCF\u4E2A\u5217\u8868\u8D85\u8FC740\u4EBF\u4E2A\u5143\u7D20)\u3002</p><blockquote><p>lish \u5217\u8868\u662F\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u5217\u8868\uFF0C\u6309\u7167\u63D2\u5165\u987A\u5E8F\u6392\u5E8F\uFF0C\u4F60\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\u5230\u5217\u8868\u7684\u5934\u90E8\u6216\u8005\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u91CD\u590D\uFF0C\u662F\u6709\u5E8F\u7684</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; lpush city beijin shanghai tianjing wuhan
(integer) 4
127.0.0.1:6379&gt; lrange city 0 -1
1) &quot;wuhan&quot;
2) &quot;tianjing&quot;
3) &quot;shanghai&quot;
4) &quot;beijin&quot;
127.0.0.1:6379&gt; lrange city 0 0
1) &quot;wuhan&quot;
127.0.0.1:6379&gt; lrange city 0 5
1) &quot;wuhan&quot;
2) &quot;tianjing&quot;
3) &quot;shanghai&quot;
4) &quot;beijin&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/02/fB9YvjhP8QSVuZR.png" alt="image-20220402124146272"></p><p><strong>\u4ECE\u5DE6\u8FB9\u5F00\u59CB\u53D6\u51FA\uFF0C\u548C\u987A\u5E8F\u76F8\u53CD\uFF0C\u76F8\u5F53\u4E8E\u94FE\u8868</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lpush/rpush/lrange/lpop/rpop/del
lpush:\u53F3\u8FB9\u63D2\u5165
rpush:\u5DE6\u8FB9\u63D2\u5165
lrange:\u622A\u53D6\u8303\u56F4\uFF08\u4F7F\u7528\u6B63\u6570\u6216\u8005\u662F\u8D1F\u6570\u4E0B\u6807\uFF0C-1\u8868\u793A\u5012\u6570\u7B2C\u4E00\u4E2A\uFF09
lpop\uFF1A\u4ECE\u94FE\u8868\u5DE6\u8FB9\u5F39\u51FA\u6570\u636E\uFF0C\u8E22\u6389
rpop\uFF1A\u4ECE\u94FE\u8868\u53F3\u8FB9\u5F39\u51FA\u6570\u636E\uFF0C\u8E22\u6389
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/04/02/rPpANRyFCkKOg4W.png" alt="image-20220402125803165"></p><p><strong>lish\u957F\u5EA6</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; llen city
(integer) 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219key\u88AB\u89E3\u91CA\u4E3A\u4E00\u4E2A\u7A7A\u5217\u8868\uFF0C\u8FD4\u56DE0</p></blockquote><h3 id="set-\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#set-\u96C6\u5408" aria-hidden="true">#</a> set\uFF08\u96C6\u5408\uFF09</h3><p><strong>set\u662Fstring\u7C7B\u578B\u7684==\u65E0\u5E8F\u96C6\u5408==\u3002\u5E95\u5C42\u662Fhash table\u6570\u636E\u7ED3\u6784\uFF0Cset\u4E5F\u662F\u5B58\u653E\u5F88\u591A\u5B57\u7B26\u4E32\u5143\u7D20\uFF0C\u5B57\u7B26\u4E32\u5143\u7D20\u662F\u65E0\u5E8F\u7684\uFF0C\u800C\u4E14==\u5143\u7D20\u7684\u503C\u4E0D\u80FD\u91CD\u590D==\u3002</strong></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> llen city
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> sadd emile xiongxinwei<span class="token variable">@nsddd.top</span> <span class="token number">3293172751</span>nss<span class="token variable">@gmail.com</span> xiongxinwei<span class="token variable">@mail.com</span>
<span class="token punctuation">(</span><span class="token keyword">integer</span><span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>:<span class="token number">6379</span><span class="token operator">&gt;</span> SMEMBERS emile
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;3293172751nss@gmail.com&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;xiongxinwei@nsddd.top&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;xiongxinwei@mail.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sisemmber :\u5224\u65AD\u503C\u662F\u5426\u662F\u6210\u5458
srem :\u5220\u9664\u6307\u5B9A\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function mn(gn,bn){const i=o("router-link"),t=o("ExternalLinkIcon");return r(),c("div",null,[_,e("nav",v,[e("ul",null,[e("li",null,[s(i,{to:"#redis-\u54C8\u5E0C-hash"},{default:l(()=>[m]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#\u5B9E\u4F8B"},{default:l(()=>[g]),_:1})])])]),e("li",null,[s(i,{to:"#redis-hash-\u547D\u4EE4"},{default:l(()=>[b]),_:1})]),e("li",null,[s(i,{to:"#hash\u4F7F\u7528"},{default:l(()=>[k]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#\u5217\u8868"},{default:l(()=>[f]),_:1})]),e("li",null,[s(i,{to:"#set-\u96C6\u5408"},{default:l(()=>[x]),_:1})])])])])]),y,e("p",null,[w,e("a",q,[H,s(t)])]),E,e("p",null,[S,e("a",T,[N,s(t)])]),L,R,e("blockquote",null,[e("p",null,[A,e("a",C,[K,s(t)])])]),O,V,e("div",B,[I,e("p",null,[e("a",M,[j,s(t)])]),e("p",null,[e("a",Y,[X,s(t)]),G])]),P,e("table",null,[F,e("tbody",null,[e("tr",null,[Q,e("td",Z,[D,e("a",U,[W,s(t)]),z])]),e("tr",null,[J,e("td",$,[e("a",ee,[ne,s(t)]),se])]),e("tr",null,[te,e("td",ie,[e("a",le,[oe,s(t)]),ae])]),e("tr",null,[de,e("td",re,[e("a",ce,[ue,s(t)]),he])]),e("tr",null,[pe,e("td",_e,[e("a",ve,[me,s(t)]),ge])]),e("tr",null,[be,e("td",ke,[e("a",fe,[xe,s(t)]),ye])]),e("tr",null,[we,e("td",qe,[e("a",He,[Ee,s(t)]),Se])]),e("tr",null,[Te,e("td",Ne,[e("a",Le,[Re,s(t)]),Ae])]),e("tr",null,[Ce,e("td",Ke,[Oe,e("a",Ve,[Be,s(t)]),Ie])]),e("tr",null,[Me,e("td",je,[Ye,e("a",Xe,[Ge,s(t)]),Pe])]),e("tr",null,[Fe,e("td",Qe,[e("a",Ze,[De,s(t)]),Ue])]),e("tr",null,[We,e("td",ze,[e("a",Je,[$e,s(t)]),en])]),e("tr",null,[nn,e("td",sn,[e("a",tn,[ln,s(t)]),on])]),e("tr",null,[an,e("td",dn,[rn,e("a",cn,[un,s(t)]),hn])])])]),e("p",null,[e("a",pn,[_n,s(t)])]),vn])}const fn=d(p,[["render",mn],["__file","22.html.vue"]]);export{fn as default};
