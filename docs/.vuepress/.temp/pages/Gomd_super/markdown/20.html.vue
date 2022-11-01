<template><div><h1 id="mysql使用" tabindex="-1"><a class="header-anchor" href="#mysql使用" aria-hidden="true">#</a> Mysql使用</h1>
<nav class="table-of-contents"><ul><li><router-link to="#新建test数据库-person、place-表">新建test数据库，person、place 表</router-link></li><li><router-link to="#mysql使用-1">mysql使用</router-link></li><li><router-link to="#或许你可以选择mysql库">或许你可以选择mysql库</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="新建test数据库-person、place-表" tabindex="-1"><a class="header-anchor" href="#新建test数据库-person、place-表" aria-hidden="true">#</a> 新建test数据库，person、place 表</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE TABLE `person` (
    `user_id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(260) DEFAULT NULL,
    `sex` varchar(260) DEFAULT NULL,
    `email` varchar(260) DEFAULT NULL,
    PRIMARY KEY (`user_id`)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql使用-1" tabindex="-1"><a class="header-anchor" href="#mysql使用-1" aria-hidden="true">#</a> mysql使用</h2>
<div class="custom-container warning"><p class="custom-container-title">经常使用的库：</p>
<ol>
<li>
<p><code v-pre>Gorm</code>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>user <span class="token operator">:=</span> User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"jonson"</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> Birthday<span class="token punctuation">:</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
db<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>Xorm</code>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>user <span class="token operator">:=</span> User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"jonson"</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> Birthday<span class="token punctuation">:</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div>
<h2 id="或许你可以选择mysql库" tabindex="-1"><a class="header-anchor" href="#或许你可以选择mysql库" aria-hidden="true">#</a> 或许你可以选择mysql库</h2>
<p>使用第三方开源的mysql库: <code v-pre>github.com/go-sql-driver/mysql</code> （mysql驱动） <code v-pre>github.com/jmoiron/sqlx</code> （基于mysql驱动的封装）</p>
<p>命令行输入：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token keyword">go</span><span class="token operator">-</span>sql<span class="token operator">-</span>driver<span class="token operator">/</span>mysql 
<span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span>jmoiron<span class="token operator">/</span>sqlx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>链接<code v-pre>mysql</code>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>database<span class="token punctuation">,</span> err <span class="token operator">:=</span> sqlx<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"mysql"</span><span class="token punctuation">,</span> <span class="token string">"root:XXXX@tcp(127.0.0.1:3306)/test"</span><span class="token punctuation">)</span>
<span class="token comment">//database, err := sqlx.Open("数据库类型", "用户名:密码@tcp(地址:端口)/数据库名")</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '19.md' style='float:left'>⬆️上一节🔗</a><a href = '21.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


