import{_ as t,r as s,o as c,c as o,a as e,b as i,w as l,d as n,e as u}from"./app.bf54247d.js";const v={},m=e("h1",{id:"mysql\u4F7F\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql\u4F7F\u7528","aria-hidden":"true"},"#"),n(" Mysql\u4F7F\u7528")],-1),_={class:"table-of-contents"},h=n("1.1.1. mysql\u4F7F\u7528"),b=n("END \u94FE\u63A5"),p=u(`<p>[toc]</p><p>\u65B0\u5EFAtest\u6570\u636E\u5E93\uFF0Cperson\u3001place \u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE TABLE \`person\` (
    \`user_id\` int(11) NOT NULL AUTO_INCREMENT,
    \`username\` varchar(260) DEFAULT NULL,
    \`sex\` varchar(260) DEFAULT NULL,
    \`email\` varchar(260) DEFAULT NULL,
    PRIMARY KEY (\`user_id\`)
  ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE place (
    country varchar(200),
    city varchar(200),
    telcode int
)ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
    mysql&gt; desc person;
    +----------+--------------+------+-----+---------+----------------+
    | Field    | Type         | Null | Key | Default | Extra          |
    +----------+--------------+------+-----+---------+----------------+
    | user_id  | int(11)      | NO   | PRI | NULL    | auto_increment |
    | username | varchar(260) | YES  |     | NULL    |                |
    | sex      | varchar(260) | YES  |     | NULL    |                |
    | email    | varchar(260) | YES  |     | NULL    |                |
    +----------+--------------+------+-----+---------+----------------+
    4 rows in set (0.00 sec)

    mysql&gt; desc place;
    +---------+--------------+------+-----+---------+-------+
    | Field   | Type         | Null | Key | Default | Extra |
    +---------+--------------+------+-----+---------+-------+
    | country | varchar(200) | YES  |     | NULL    |       |
    | city    | varchar(200) | YES  |     | NULL    |       |
    | telcode | int(11)      | YES  |     | NULL    |       |
    +---------+--------------+------+-----+---------+-------+
    3 rows in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-1-mysql\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-1-mysql\u4F7F\u7528" aria-hidden="true">#</a> 1.1.1. mysql\u4F7F\u7528</h3><p>\u4F7F\u7528\u7B2C\u4E09\u65B9\u5F00\u6E90\u7684mysql\u5E93: github.com/go-sql-driver/mysql \uFF08mysql\u9A71\u52A8\uFF09 github.com/jmoiron/sqlx \uFF08\u57FA\u4E8Emysql\u9A71\u52A8\u7684\u5C01\u88C5\uFF09</p><p>\u547D\u4EE4\u884C\u8F93\u5165 \uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    go get github.com/go-sql-driver/mysql 
    go get github.com/jmoiron/sqlx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u94FE\u63A5mysql</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    database, err := sqlx.Open(&quot;mysql&quot;, &quot;root:XXXX@tcp(127.0.0.1:3306)/test&quot;)
    //database, err := sqlx.Open(&quot;\u6570\u636E\u5E93\u7C7B\u578B&quot;, &quot;\u7528\u6237\u540D:\u5BC6\u7801@tcp(\u5730\u5740:\u7AEF\u53E3)/\u6570\u636E\u5E93\u540D&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="19.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="21.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,11),E=n("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),L={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),N=n(")"),x=n("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),g={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},y=n("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function f(T,A){const a=s("router-link"),r=s("RouterLink"),d=s("ExternalLinkIcon");return c(),o("div",null,[m,e("nav",_,[e("ul",null,[e("li",null,[i(a,{to:"#_1-1-1-mysql\u4F7F\u7528"},{default:l(()=>[h]),_:1})]),e("li",null,[i(a,{to:"#end-\u94FE\u63A5"},{default:l(()=>[b]),_:1})])])]),p,e("ul",null,[e("li",null,[e("p",null,[i(r,{to:"/Gomd_super/"},{default:l(()=>[E]),_:1})])]),e("li",null,[e("p",null,[e("a",L,[q,i(d)]),N])]),e("li",null,[e("p",null,[x,e("a",g,[y,i(d)])])])])])}const C=t(v,[["render",f],["__file","20.html.vue"]]);export{C as default};
