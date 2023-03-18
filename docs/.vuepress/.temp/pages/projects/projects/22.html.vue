<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第22节-orm-curd-神器-gorm-包介绍及实战" tabindex="-1"><a class="header-anchor" href="#第22节-orm-curd-神器-gorm-包介绍及实战" aria-hidden="true">#</a> 第22节 ORM：CURD 神器 GORM 包介绍及实战</h1>
<br>
<div><a href = '21.md' style='float:left'>⬆️上一节🔗  </a><a href = '23.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#开始">开始</router-link></li><li><router-link to="#gorm-基础知识">GORM 基础知识</router-link></li><li><router-link to="#学习-gorm">学习 GORM</router-link></li><li><router-link to="#gorm-常用操作讲解">GORM 常用操作讲解</router-link><ul><li><router-link to="#模型定义">模型定义</router-link></li><li><router-link to="#连接数据库">连接数据库</router-link></li><li><router-link to="#创建记录">创建记录</router-link></li><li><router-link to="#删除记录">删除记录</router-link></li><li><router-link to="#更新数据">更新数据</router-link></li><li><router-link to="#查询数据">查询数据</router-link></li><li><router-link to="#高级查询">高级查询</router-link></li></ul></li><li><router-link to="#原生-sql">原生 SQL</router-link></li><li><router-link to="#gorm-钩子">GORM 钩子</router-link></li><li><router-link to="#iam-apiserver-中的-curd-操作实战">iam-apiserver 中的 CURD 操作实战</router-link></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2>
<p>我们在Go语言开发的过程中，用的最多的可能就是和数据库打交道；</p>
<p>每种语言都有优秀的 ORM 可供选择，在 Go 中也不例外，比如<code v-pre>gorm</code>、<code v-pre>xorm</code>、<code v-pre>gorose</code>等。目前，GitHub 上 star 数最多的是 GORM，它也是当前 Go 项目中使用最多的 ORM。</p>
<p>其中 IAM 项目也用到了 GORM。</p>
<h2 id="gorm-基础知识" tabindex="-1"><a class="header-anchor" href="#gorm-基础知识" aria-hidden="true">#</a> GORM 基础知识</h2>
<p>GORM 是 Go 语言的 ORM 包，功能强大，调用方便。像腾讯、华为、阿里这样的大厂，都在使用 GORM 来构建企业级的应用。GORM 有很多特性，开发中常用的核心特性如下：</p>
<ul>
<li>功能全。使用 ORM 操作数据库的接口，GORM 都有，可以满足我们开发中对数据库调用的各类需求。</li>
<li>支持钩子（Hook) 方法。这些钩子方法可以应用在 Create、Save、Update、Delete、Find 方法中。</li>
<li>开发者友好，调用方便。</li>
<li>支持 Auto Migration ( 自动迁移）。</li>
<li>支持关联查询。</li>
<li>支持多种关系数据库，例如 MySQL、Postgres、SQLite、SQLServer 等。</li>
</ul>
<p>GORM 有两个版本，V1和V2。遵循用新不用旧的原则，IAM 项目使用了最新的 V2 版本。</p>
<h2 id="学习-gorm" tabindex="-1"><a class="header-anchor" href="#学习-gorm" aria-hidden="true">#</a> 学习 GORM</h2>
<p>接下来，我们先快速看一个使用 GORM 的示例，通过该示例来学习 GORM。示例代码存放在<a href="marmotedu/gopractise-demo/gorm/main.go">marmotedu/gopractise-demo/gorm/main.go</a>文件中。因为代码比较长，你可以使用以下命令克隆到本地查看：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$GOPATH</span>/src/github.com/marmotedu
$ <span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/github.com/marmotedu
$ <span class="token function">git</span> clone https://github.com/marmotedu/gopractise-demo
$ <span class="token builtin class-name">cd</span> gopractise-demo/gorm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们有一个 MySQL 数据库，连接地址和端口为 <code v-pre>127.0.0.1:3306</code> ，用户名为 <code v-pre>iam</code> ，密码为 <code v-pre>iam1234</code> 。创建完 <code v-pre>main.go</code> 文件后，执行以下命令来运行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ go run main.go <span class="token parameter variable">-H</span> <span class="token number">127.0</span>.0.1:3306 <span class="token parameter variable">-u</span> iam <span class="token parameter variable">-p</span> iam1234 <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span>
<span class="token number">2020</span>/10/17 <span class="token number">15</span>:15:50 totalcount: <span class="token number">1</span>
<span class="token number">2020</span>/10/17 <span class="token number">15</span>:15:50   code: D42, price: <span class="token number">100</span>
<span class="token number">2020</span>/10/17 <span class="token number">15</span>:15:51 totalcount: <span class="token number">1</span>
<span class="token number">2020</span>/10/17 <span class="token number">15</span>:15:51   code: D42, price: <span class="token number">200</span>
<span class="token number">2020</span>/10/17 <span class="token number">15</span>:15:51 totalcount: <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在企业级 Go 项目开发中，使用 GORM 库主要用来完成以下数据库操作：</p>
<ul>
<li>连接和关闭数据库。连接数据库时，可能需要设置一些参数，比如最大连接数、最大空闲连接数、最大连接时长等。</li>
<li>插入表记录。可以插入一条记录，也可以批量插入记录。</li>
<li>更新表记录。可以更新某一个字段，也可以更新多个字段。</li>
<li>查看表记录。可以查看某一条记录，也可以查看符合条件的记录列表。</li>
<li>删除表记录。可以删除某一个记录，也可以批量删除。删除还支持永久删除和软删除。</li>
<li>在一些小型项目中，还会用到 GORM 的表结构自动迁移功能。</li>
</ul>
<p><strong>GORM 功能强大，上面的示例代码展示的是比较通用的一种操作方式。</strong></p>
<p>上述代码中，首先定义了一个 GORM 模型（Models），Models 是标准的 Go struct，用来代表数据库中的一个表结构。我们可以给 Models 添加 TableName 方法，来告诉 GORM 该 Models 映射到数据库中的哪张表。Models 定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Product <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    gorm<span class="token punctuation">.</span>Model
    Code  <span class="token builtin">string</span> <span class="token string">`gorm:"column:code"`</span>
    Price <span class="token builtin">uint</span>   <span class="token string">`gorm:"column:price"`</span>
<span class="token punctuation">}</span>

<span class="token comment">// TableName maps to mysql table name.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Product<span class="token punctuation">)</span> <span class="token function">TableName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"product"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有指定表名，则 GORM 使用结构体名的蛇形复数作为表名。例如：结构体名为 DockerInstance ，则表名为 <code v-pre>docker_instances</code> 。</p>
<p>在之后的代码中，使用 Pflag 来解析命令行的参数，通过命令行参数指定数据库的地址、用户名、密码和数据库名。之后，使用这些参数生成建立 MySQL 连接需要的配置文件，并调用 gorm.Open 建立数据库连接：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    host     <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"host"</span><span class="token punctuation">,</span> <span class="token string">"H"</span><span class="token punctuation">,</span> <span class="token string">"127.0.0.1:3306"</span><span class="token punctuation">,</span> <span class="token string">"MySQL service host address"</span><span class="token punctuation">)</span>
    username <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"u"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"Username for access to mysql service"</span><span class="token punctuation">)</span>
    password <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">"p"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"Password for access to mysql, should be used pair with password"</span><span class="token punctuation">)</span>
    database <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"database"</span><span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token string">"Database name to use"</span><span class="token punctuation">)</span>
    help     <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">BoolP</span><span class="token punctuation">(</span><span class="token string">"help"</span><span class="token punctuation">,</span> <span class="token string">"h"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"Print this help message"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Parse command line flags</span>
    pflag<span class="token punctuation">.</span>CommandLine<span class="token punctuation">.</span>SortFlags <span class="token operator">=</span> <span class="token boolean">false</span>
    pflag<span class="token punctuation">.</span>Usage <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pflag<span class="token punctuation">.</span><span class="token function">PrintDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    pflag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token operator">*</span>help <span class="token punctuation">{</span>
        pflag<span class="token punctuation">.</span><span class="token function">Usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    dsn <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">`%s:%s@tcp(%s)/%s?charset=utf8&amp;parseTime=%t&amp;loc=%s`</span><span class="token punctuation">,</span>
        <span class="token operator">*</span>username<span class="token punctuation">,</span>
        <span class="token operator">*</span>password<span class="token punctuation">,</span>
        <span class="token operator">*</span>host<span class="token punctuation">,</span>
        <span class="token operator">*</span>database<span class="token punctuation">,</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string">"Local"</span><span class="token punctuation">)</span>
    db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"failed to connect database"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建完数据库连接之后，会返回数据库实例 db ，之后就可以调用 db 实例中的方法，完成数据库的 CURD 操作。具体操作如下，一共可以分为六个操作：</p>
<p><strong>第一个操作，自动迁移表结构。</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 1. Auto migration for given models</span>
db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我不建议你在正式的代码中自动迁移表结构</strong>。因为变更现网数据库是一个高危操作，现网数据库字段的添加、类型变更等，都需要经过严格的评估才能实施。这里将变更隐藏在代码中，在组件发布时很难被研发人员感知到，如果组件启动，就可能会自动修改现网表结构，也可能会因此引起重大的现网事故。</p>
<p>GORM 的 AutoMigrate 方法，只对新增的字段或索引进行变更，理论上是没有风险的。在实际的 Go 项目开发中，也有很多人使用 AutoMigrate 方法自动同步表结构。但我更倾向于规范化、可感知的操作方式，所以我在实际开发中，都是手动变更表结构的。当然，具体使用哪种方法，你可以根据需要自行选择。</p>
<p><strong>第二个操作，插入表记录。</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 2. Insert the value into database</span>
<span class="token keyword">if</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Product<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token string">"D42"</span><span class="token punctuation">,</span> Price<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"Create error: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">PrintProducts</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 db.Create 方法创建了一条记录。插入记录后，通过调用 PrintProducts 方法打印当前表中的所有数据记录，来测试是否成功插入。</p>
<p><strong>第三个操作，获取符合条件的记录。</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 3. Find first record that match given conditions</span>
product <span class="token operator">:=</span> <span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"code= ?"</span><span class="token punctuation">,</span> <span class="token string">"D42"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>product<span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"Get product error: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>First 方法只会返回符合条件的记录列表中的第一条，你可以使用 First 方法来获取某个资源的详细信息。</p>
<p><strong>第四个操作，更新表记录。</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 4. Update value in database, if the value doesn't have primary key, will insert it</span>
product<span class="token punctuation">.</span>Price <span class="token operator">=</span> <span class="token number">200</span>
<span class="token keyword">if</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"Update product error: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">PrintProducts</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 Save 方法，可以把 product 变量中所有跟数据库不一致的字段更新到数据库中。具体操作是：先获取某个资源的详细信息，再通过 product.Price = 200 这类赋值语句，对其中的一些字段重新赋值。最后，调用 Save 方法更新这些字段。你可以将这些操作看作一种更新数据库的更新模式。</p>
<p><strong>第五个操作，删除表记录。</strong></p>
<ul>
<li>软删除</li>
<li>硬删除</li>
</ul>
<p>通过 Delete 方法删除表记录，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 5. Delete value match given conditions</span>
<span class="token keyword">if</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"code = ?"</span><span class="token punctuation">,</span> <span class="token string">"D42"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"Delete product error: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">PrintProducts</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要注意，因为 Product 中有 gorm.DeletedAt 字段，所以，上述删除操作不会真正把记录从数据库表中删除掉，而是通过设置数据库 product 表 deletedAt 字段为当前时间的方法来删除。</p>
<p><strong>第六个操作，获取表记录列表。</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>products <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Product<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> count <span class="token builtin">int64</span>
d <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"code like ?"</span><span class="token punctuation">,</span> <span class="token string">"%D%"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Offset</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Order</span><span class="token punctuation">(</span><span class="token string">"id desc"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>products<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Offset</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">)</span>
<span class="token keyword">if</span> d<span class="token punctuation">.</span>Error <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"List products error: %v"</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>Error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 PrintProducts 函数中，会打印当前的所有记录，你可以根据输出，判断数据库操作是否成功。</p>
<h2 id="gorm-常用操作讲解" tabindex="-1"><a class="header-anchor" href="#gorm-常用操作讲解" aria-hidden="true">#</a> GORM 常用操作讲解</h2>
<p>看完上面的示例，我想你已经初步掌握了 GORM 的使用方法。接下来，我再来给你详细介绍下 GORM 所支持的数据库操作。</p>
<h3 id="模型定义" tabindex="-1"><a class="header-anchor" href="#模型定义" aria-hidden="true">#</a> 模型定义</h3>
<p>GORM 使用模型（Models）来映射一个数据库表。默认情况下，使用 ID 作为主键，使用结构体名的 <code v-pre>snake_cases</code> 作为表名，使用字段名的 <code v-pre>snake_case</code> 作为列名，并使用 CreatedAt、UpdatedAt、DeletedAt 字段追踪创建、更新和删除时间。</p>
<p>使用 GORM 的默认规则，可以减少代码量，但我更喜欢的方式是直接指明字段名和表名。例如，有以下模型：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  AnimalID <span class="token builtin">int64</span>        <span class="token comment">// 列名 `animal_id`</span>
  Birthday time<span class="token punctuation">.</span>Time    <span class="token comment">// 列名 `birthday`</span>
  Age      <span class="token builtin">int64</span>        <span class="token comment">// 列名 `age`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述模型对应的表名为 animals ，列名分别为 animal_id 、 birthday 和 age 。我们可以通过以下方式来重命名表名和列名，并将 AnimalID 设置为表的主键：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    AnimalID <span class="token builtin">int64</span>     <span class="token string">`gorm:"column:animalID;primarykey"`</span> <span class="token comment">// 将列名设为 `animalID`</span>
    Birthday time<span class="token punctuation">.</span>Time <span class="token string">`gorm:"column:birthday"`</span>            <span class="token comment">// 将列名设为 `birthday`</span>
    Age      <span class="token builtin">int64</span>     <span class="token string">`gorm:"column:age"`</span>                 <span class="token comment">// 将列名设为 `age`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Animal<span class="token punctuation">)</span> <span class="token function">TableName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"animal"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，通过 primaryKey 标签指定主键，使用 column 标签指定列名，通过给 Models 添加 TableName 方法指定表名。</p>
<p><strong>数据库表通常会包含 4 个字段。</strong></p>
<ul>
<li><code v-pre>ID</code>：自增字段，也作为主键。</li>
<li><code v-pre>CreatedAt</code>：记录创建时间。</li>
<li><code v-pre>UpdatedAt</code>：记录更新时间。</li>
<li><code v-pre>DeletedAt</code>：记录删除时间（软删除时有用）。</li>
</ul>
<p>GORM 也预定义了包含这 4 个字段的 Models，在我们定义自己的 Models 时，可以直接内嵌到结构体内，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    gorm<span class="token punctuation">.</span>Model
    AnimalID <span class="token builtin">int64</span>     <span class="token string">`gorm:"column:animalID"`</span> <span class="token comment">// 将列名设为 `animalID`</span>
    Birthday time<span class="token punctuation">.</span>Time <span class="token string">`gorm:"column:birthday"`</span> <span class="token comment">// 将列名设为 `birthday`</span>
    Age      <span class="token builtin">int64</span>     <span class="token string">`gorm:"column:age"`</span>      <span class="token comment">// 将列名设为 `age`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Models 中的字段能支持很多 GORM 标签，但如果我们不使用 GORM 自动创建表和迁移表结构的功能，很多标签我们实际上是用不到的。<strong>在开发中，用得最多的是 <code v-pre>column</code> 标签。</strong></p>
<h3 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h3>
<p>在进行数据库的 CURD 操作之前，我们首先需要连接数据库。你可以通过以下代码连接 MySQL 数据库：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"gorm.io/driver/mysql"</span>
  <span class="token string">"gorm.io/gorm"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 参考 https://github.com/go-sql-driver/mysql#dsn-data-source-name 获取详情</span>
  dsn <span class="token operator">:=</span> <span class="token string">"user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&amp;parseTime=True&amp;loc=Local"</span>
  db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要 GORM 正确地处理 <code v-pre>time.Time</code> 类型，在连接数据库时需要带上 parseTime 参数。如果要支持完整的 UTF-8 编码，可将<code v-pre>charset=utf8</code>更改为<code v-pre>charset=utf8mb4</code>。</p>
<p>GORM 支持连接池，底层是用 <code v-pre>database/sql</code> 包来维护连接池的，连接池设置如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>sqlDB<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">DB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxIdleConns</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>              <span class="token comment">// 设置MySQL的最大空闲连接数（推荐100）</span>
sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxOpenConns</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>             <span class="token comment">// 设置MySQL的最大连接数（推荐100）</span>
sqlDB<span class="token punctuation">.</span><span class="token function">SetConnMaxLifetime</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Hour<span class="token punctuation">)</span>    <span class="token comment">// 设置MySQL的空闲连接最大存活时间（推荐10s）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这些设置，也可以应用在大型后端项目中。</p>
<h3 id="创建记录" tabindex="-1"><a class="header-anchor" href="#创建记录" aria-hidden="true">#</a> 创建记录</h3>
<p>我们可以通过 db.Create 方法来创建一条记录：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  gorm<span class="token punctuation">.</span>Model
  Name         <span class="token builtin">string</span>
  Age          <span class="token builtin">uint8</span>
  Birthday     <span class="token operator">*</span>time<span class="token punctuation">.</span>Time
<span class="token punctuation">}</span>
user <span class="token operator">:=</span> User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"Jinzhu"</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> Birthday<span class="token punctuation">:</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
result <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span> <span class="token comment">// 通过数据的指针来创建</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>db.Create 函数会返回如下 3 个值</strong>：</p>
<ul>
<li><code v-pre>user.ID</code>：返回插入数据的主键，这个是直接赋值给 user 变量。</li>
<li><code v-pre>result.Error</code>：返回 error。</li>
<li><code v-pre>result.RowsAffected</code>：返回插入记录的条数。</li>
</ul>
<p><strong>当需要插入的数据量比较大时，可以批量插入，以提高插入性能：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>User<span class="token punctuation">{</span><span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"jinzhu1"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"jinzhu2"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"jinzhu3"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
DB<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> user <span class="token operator">:=</span> <span class="token keyword">range</span> users <span class="token punctuation">{</span>
  user<span class="token punctuation">.</span>ID <span class="token comment">// 1,2,3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除记录" tabindex="-1"><a class="header-anchor" href="#删除记录" aria-hidden="true">#</a> 删除记录</h3>
<p>我们可以通过 Delete 方法删除记录：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// DELETE from users where id = 10 AND name = "jinzhu";</span>
db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"jinzhu"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
<span class="token comment">// DELETE from users where id = 10 AND name = "jinzhu";</span>
db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"jinzhu"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GORM 也支持根据主键进行删除，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// DELETE FROM users WHERE id = 10;</span>
db<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，我更喜欢使用 db.Where 的方式进行删除，这种方式有两个优点。</p>
<ul>
<li>第一个优点是删除方式更通用。使用 db.Where 不仅可以根据主键删除，还能够随意组合条件进行删除。</li>
<li>第二个优点是删除方式更显式，这意味着更易读。如果使用<code v-pre>db.Delete(&amp;User{}, 10)</code>，你还需要确认 User 的主键，如果记错了主键，还可能会引入 Bug。</li>
</ul>
<p><strong>此外，GORM 也支持批量删除：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name in (?)"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">"jinzhu"</span><span class="token punctuation">,</span> <span class="token string">"colin"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>GORM 支持两种删除方法：软删除和永久删除。下面我来分别介绍下。</strong></p>
<h4 id="软删除" tabindex="-1"><a class="header-anchor" href="#软删除" aria-hidden="true">#</a> 软删除</h4>
<p>软删除是指执行 Delete 时，记录不会被从数据库中真正删除。GORM 会将 DeletedAt 设置为当前时间，并且不能通过正常的方式查询到该记录。如果模型包含了一个 gorm.DeletedAt 字段，GORM 在执行删除操作时，会软删除该记录。</p>
<p>下面的删除方法就是一个软删除：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// UPDATE users SET deleted_at="2013-10-29 10:23" WHERE age = 20;</span>
db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"age = ?"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// SELECT * FROM users WHERE age = 20 AND deleted_at IS NULL;</span>
db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"age = 20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，GORM 并没有真正把记录从数据库删除掉，而是只更新了 <code v-pre>deleted_at</code> 字段。在查询时，GORM 查询条件中新增了<code v-pre>AND deleted_at IS NULL</code>条件，所以这些被设置过 <code v-pre>deleted_at</code> 字段的记录不会被查询到。对于一些比较重要的数据，我们可以通过软删除的方式删除记录，软删除可以使这些重要的数据后期能够被恢复，并且便于以后的排障。</p>
<p>我们可以通过下面的方式查找被软删除的记录：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// SELECT * FROM users WHERE age = 20;</span>
db<span class="token punctuation">.</span><span class="token function">Unscoped</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"age = 20"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="永久删除" tabindex="-1"><a class="header-anchor" href="#永久删除" aria-hidden="true">#</a> 永久删除</h4>
<p>如果想永久删除一条记录，可以使用 Unscoped：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// DELETE FROM orders WHERE id=10;</span>
db<span class="token punctuation">.</span><span class="token function">Unscoped</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>order<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h3>
<p>GORM 中，最常用的更新方法如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>

user<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"jinzhu 2"</span>
user<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">100</span>
<span class="token comment">// UPDATE users SET name='jinzhu 2', age=100, birthday='2016-01-01', updated_at = '2013-11-17 21:34:10' WHERE id=111;</span>
db<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述方法会保留所有字段，所以执行 Save 时，需要先执行 First，获取某个记录的所有列的值，然后再对需要更新的字段设置值。</p>
<p><strong>还可以指定更新单个列：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// UPDATE users SET age=200, updated_at='2013-11-17 21:34:10' WHERE name='colin';</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"colin"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>也可以指定更新多个列：</strong></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// UPDATE users SET name='hello', age=18, updated_at = '2013-11-17 21:34:10' WHERE name = 'colin';</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"colin"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Updates</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span> Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> Active<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️这里要注意，这个方法只会更新非零值的字段。</p>
</blockquote>
<h3 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h3>
<p>GORM 支持不同的查询方法，下面我来讲解三种在开发中经常用到的查询方式，分别是检索单个记录、查询所有符合条件的记录和智能选择字段。</p>
<h4 id="检索单个记录" tabindex="-1"><a class="header-anchor" href="#检索单个记录" aria-hidden="true">#</a> 检索单个记录</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 获取第一条记录（主键升序）</span>
<span class="token comment">// SELECT * FROM users ORDER BY id LIMIT 1;</span>
db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>

<span class="token comment">// 获取最后一条记录（主键降序）</span>
<span class="token comment">// SELECT * FROM users ORDER BY id DESC LIMIT 1;</span>
db<span class="token punctuation">.</span><span class="token function">Last</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
result <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
result<span class="token punctuation">.</span>RowsAffected		 	<span class="token comment">// 返回找到的记录数</span>
result<span class="token punctuation">.</span>Error        		<span class="token comment">// returns error</span>

<span class="token comment">// 检查 ErrRecordNotFound 错误</span>
errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>Error<span class="token punctuation">,</span> gorm<span class="token punctuation">.</span>ErrRecordNotFound<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 model 类型没有定义主键，则按第一个字段排序。</p>
<h4 id="查询所有符合条件的记录" tabindex="-1"><a class="header-anchor" href="#查询所有符合条件的记录" aria-hidden="true">#</a> 查询所有符合条件的记录</h4>
<p>💡简单的一个案例如</p>
<blockquote>
<p><code v-pre>&lt;&gt;</code> 不等于</p>
</blockquote>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>users <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>User<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// SELECT * FROM users WHERE name &lt;> 'jinzhu';</span>
db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name &lt;> ?"</span><span class="token punctuation">,</span> <span class="token string">"jinzhu"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="智能选择字段" tabindex="-1"><a class="header-anchor" href="#智能选择字段" aria-hidden="true">#</a> 智能选择字段</h4>
<p>你可以通过 Select 方法，选择特定的字段。我们可以定义一个较小的结构体来接受选定的字段：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> APIUser <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  ID   <span class="token builtin">uint</span>
  Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// SELECT `id`, `name` FROM `users` LIMIT 10;</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>APIUser<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>除了上面讲的三种常用的基本查询方法，GORM 还支持高级查询，下面我来介绍下。</p>
</blockquote>
<h3 id="高级查询" tabindex="-1"><a class="header-anchor" href="#高级查询" aria-hidden="true">#</a> 高级查询</h3>
<p>GORM 支持很多高级查询功能，这里我主要介绍 4 种。</p>
<h4 id="指定检索记录时的排序方式" tabindex="-1"><a class="header-anchor" href="#指定检索记录时的排序方式" aria-hidden="true">#</a> 指定检索记录时的排序方式</h4>
<p>💡简单的一个案例如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// SELECT * FROM users ORDER BY age desc, name;</span>
db<span class="token punctuation">.</span><span class="token function">Order</span><span class="token punctuation">(</span><span class="token string">"age desc, name"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>
<span class="token comment">// SELECT * FROM users ORDER BY age desc, name;</span>
db<span class="token punctuation">.</span><span class="token function">Order</span><span class="token punctuation">(</span><span class="token string">"age desc, name"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="limit-offset" tabindex="-1"><a class="header-anchor" href="#limit-offset" aria-hidden="true">#</a> Limit &amp; Offset</h4>
<p>Offset 指定从第几条记录开始查询，Limit 指定返回的最大记录数。Offset 和 Limit 值为 -1 时，消除 Offset 和 Limit 条件。另外，Limit 和 Offset 位置不同，效果也不同。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// SELECT * FROM users OFFSET 5 LIMIT 10;</span>
db<span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Offset</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> Distinct</h4>
<p>Distinct 可以从数据库记录中选择不同的值。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Distinct</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Order</span><span class="token punctuation">(</span><span class="token string">"name, age desc"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>results<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> Count</h4>
<p>Count 可以获取匹配的条数。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> count <span class="token builtin">int64</span>
<span class="token comment">// SELECT count(1) FROM users WHERE name = 'jinzhu'; (count)</span>
db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"jinzhu"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GORM 还支持很多高级查询功能，比如内联条件、Not 条件、Or 条件、Group &amp; Having、Joins、Group、FirstOrInit、FirstOrCreate、迭代、FindInBatches 等。因为 IAM 项目中没有用到这些高级特性，我在这里就不展开介绍了。你如果感兴趣，可以看下<a href="https://gorm.io/zh_CN/docs/index.html" target="_blank" rel="noopener noreferrer">GORM 的官方文档<ExternalLinkIcon/></a>。</p>
<h2 id="原生-sql" tabindex="-1"><a class="header-anchor" href="#原生-sql" aria-hidden="true">#</a> 原生 SQL</h2>
<p>GORM 支持原生查询 SQL 和执行 SQL。原生查询 SQL 用法如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Result <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  ID   <span class="token builtin">int</span>
  Name <span class="token builtin">string</span>
  Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> result Result
db<span class="token punctuation">.</span><span class="token function">Raw</span><span class="token punctuation">(</span><span class="token string">"SELECT id, name, age FROM users WHERE name = ?"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原生执行 SQL 用法如下；</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">"DROP TABLE users"</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token string">"UPDATE orders SET shipped_at=? WHERE id IN ?"</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int64</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gorm-钩子" tabindex="-1"><a class="header-anchor" href="#gorm-钩子" aria-hidden="true">#</a> GORM 钩子</h2>
<p>GORM 支持钩子功能，例如下面这个在插入记录前执行的钩子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">BeforeCreate</span><span class="token punctuation">(</span>tx <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  u<span class="token punctuation">.</span>UUID <span class="token operator">=</span> uuid<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> u<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">"admin"</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"invalid name"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>GORM 支持的钩子见下表：</strong></p>
<p><img src="http://sm.nsddd.top/sm202303021249399.png" alt="image-20230302124946236"></p>
<h2 id="iam-apiserver-中的-curd-操作实战" tabindex="-1"><a class="header-anchor" href="#iam-apiserver-中的-curd-操作实战" aria-hidden="true">#</a> iam-apiserver 中的 CURD 操作实战</h2>
<p>接下来，我来介绍下 iam-apiserver 是如何使用 GORM，对数据进行 CURD 操作的。</p>
<p>首先，我们需要配置连接 MySQL 的各类参数。iam-apiserver 通过<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/pkg/options/mysql_options.go#L29" target="_blank" rel="noopener noreferrer">NewMySQLOptions<ExternalLinkIcon/></a>函数创建了一个带有默认值的<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/pkg/options/mysql_options.go#L17" target="_blank" rel="noopener noreferrer">MySQLOptions<ExternalLinkIcon/></a>类型的变量，将该变量传给<a href="https://github.com/marmotedu/iam/blob/v1.0.4/pkg/app/app.go#L157" target="_blank" rel="noopener noreferrer">NewApp<ExternalLinkIcon/></a>函数。在 App 框架中，最终会调用 MySQLOptions 提供的 AddFlags 方法，将 MySQLOptions 提供的命令行参数添加到 Cobra 命令行中。</p>
<p>接着，在<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/server.go#L81" target="_blank" rel="noopener noreferrer">PrepareRun<ExternalLinkIcon/></a>函数中，调用<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/store/mysql/mysql.go#L55" target="_blank" rel="noopener noreferrer">GetMySQLFactoryOr<ExternalLinkIcon/></a>函数，初始化并获取仓库层的实例<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/store/mysql/mysql.go#L50" target="_blank" rel="noopener noreferrer">mysqlFactory<ExternalLinkIcon/></a>。实现了仓库层 <a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/store/store.go#L12" target="_blank" rel="noopener noreferrer">store.Factory<ExternalLinkIcon/></a>接口：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Factory <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Users</span><span class="token punctuation">(</span><span class="token punctuation">)</span> UserStore
    <span class="token function">Secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> SecretStore
    <span class="token function">Policies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> PolicyStore
    <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GetMySQLFactoryOr 函数采用单例模式，确保 iam-apiserver 进程中只有一个仓库层的实例，这样可以减少内存开支和系统的性能开销。</p>
<p>GetMySQLFactoryOr 函数中，使用<a href="https://github.com/marmotedu/iam/blob/v1.0.4/pkg/db/mysql.go#L30" target="_blank" rel="noopener noreferrer">github.com/marmotedu/iam/pkg/db<ExternalLinkIcon/></a>包提供的 New 函数，创建了 MySQL 实例。New 函数代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span>opts <span class="token operator">*</span>Options<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    dsn <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">`%s:%s@tcp(%s)/%s?charset=utf8&amp;parseTime=%t&amp;loc=%s`</span><span class="token punctuation">,</span>    
        opts<span class="token punctuation">.</span>Username<span class="token punctuation">,</span>                                                                 
        opts<span class="token punctuation">.</span>Password<span class="token punctuation">,</span>                                 
        opts<span class="token punctuation">.</span>Host<span class="token punctuation">,</span>                   
        opts<span class="token punctuation">.</span>Database<span class="token punctuation">,</span>    
        <span class="token boolean">true</span><span class="token punctuation">,</span>                               
        <span class="token string">"Local"</span><span class="token punctuation">)</span>    
                                                  
    db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>    
        Logger<span class="token punctuation">:</span> logger<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>LogLevel<span class="token punctuation">)</span><span class="token punctuation">,</span>                                                                             
    <span class="token punctuation">}</span><span class="token punctuation">)</span>    
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>                                   
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err         
    <span class="token punctuation">}</span>    
    
    sqlDB<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">DB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                              
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>                                                                
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err                              
    <span class="token punctuation">}</span>                                                                  
                                                             
    <span class="token comment">// SetMaxOpenConns sets the maximum number of open connections to the database.</span>
    sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxOpenConns</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>MaxOpenConnections<span class="token punctuation">)</span>

    <span class="token comment">// SetConnMaxLifetime sets the maximum amount of time a connection may be reused.</span>
    sqlDB<span class="token punctuation">.</span><span class="token function">SetConnMaxLifetime</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>MaxConnectionLifeTime<span class="token punctuation">)</span>

    <span class="token comment">// SetMaxIdleConns sets the maximum number of connections in the idle connection pool.</span>
    sqlDB<span class="token punctuation">.</span><span class="token function">SetMaxIdleConns</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>MaxIdleConnections<span class="token punctuation">)</span>

    <span class="token keyword">return</span> db<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，我们先创建了一个 <code v-pre>*gorm.DB</code> 类型的实例，并对该实例进行了如下设置：</p>
<ul>
<li>通过 SetMaxOpenConns 方法，设置了 MySQL 的最大连接数（推荐 100）。</li>
<li>通过 SetConnMaxLifetime 方法，设置了 MySQL 的空闲连接最大存活时间（推荐 10s）。</li>
<li>通过 SetMaxIdleConns 方法，设置了 MySQL 的最大空闲连接数（推荐 100）。</li>
</ul>
<p>GetMySQLFactoryOr 函数最后创建了 datastore 类型的变量 mysqlFactory，该变量是仓库层的变量。mysqlFactory 变量中，又包含了 <code v-pre>*gorm.DB</code> 类型的字段 db 。</p>
<p>最终，我们通过仓库层的变量 mysqlFactory，调用其 db 字段提供的方法来完成数据库的 CURD 操作。例如，创建密钥、更新密钥、删除密钥、获取密钥详情、查询密钥列表，具体代码如下（代码位于<a href="https://github.com/marmotedu/iam/blob/v1.0.4/internal/apiserver/store/mysql/secret.go" target="_blank" rel="noopener noreferrer">secret.go<ExternalLinkIcon/></a>文件中）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token comment">// Create creates a new secret.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>secrets<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> secret <span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>CreateOptions<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>secret<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
<span class="token punctuation">}</span>

<span class="token comment">// Update updates an secret information by the secret identifier.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>secrets<span class="token punctuation">)</span> <span class="token function">Update</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> secret <span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>UpdateOptions<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span>secret<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
<span class="token punctuation">}</span>

<span class="token comment">// Delete deletes the secret by the secret identifier.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>secrets<span class="token punctuation">)</span> <span class="token function">Delete</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> username<span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>DeleteOptions<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> opts<span class="token punctuation">.</span>Unscoped <span class="token punctuation">{</span>
    s<span class="token punctuation">.</span>db <span class="token operator">=</span> s<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">Unscoped</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  err <span class="token operator">:=</span> s<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"username = ? and name = ?"</span><span class="token punctuation">,</span> username<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> gorm<span class="token punctuation">.</span>ErrRecordNotFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// Get return an secret by the secret identifier.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>secrets<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> username<span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>GetOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  secret <span class="token operator">:=</span> <span class="token operator">&amp;</span>v1<span class="token punctuation">.</span>Secret<span class="token punctuation">{</span><span class="token punctuation">}</span>
  err <span class="token operator">:=</span> s<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"username = ? and name= ?"</span><span class="token punctuation">,</span> username<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>secret<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> gorm<span class="token punctuation">.</span>ErrRecordNotFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrSecretNotFound<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> errors<span class="token punctuation">.</span><span class="token function">WithCode</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span>ErrDatabase<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> secret<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// List return all secrets.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>secrets<span class="token punctuation">)</span> <span class="token function">List</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> username <span class="token builtin">string</span><span class="token punctuation">,</span> opts metav1<span class="token punctuation">.</span>ListOptions<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>v1<span class="token punctuation">.</span>SecretList<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ret <span class="token operator">:=</span> <span class="token operator">&amp;</span>v1<span class="token punctuation">.</span>SecretList<span class="token punctuation">{</span><span class="token punctuation">}</span>
  ol <span class="token operator">:=</span> gormutil<span class="token punctuation">.</span><span class="token function">Unpointer</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>Offset<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>Limit<span class="token punctuation">)</span>

  <span class="token keyword">if</span> username <span class="token operator">!=</span> <span class="token string">""</span> <span class="token punctuation">{</span>
    s<span class="token punctuation">.</span>db <span class="token operator">=</span> s<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"username = ?"</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  selector<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> fields<span class="token punctuation">.</span><span class="token function">ParseSelector</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>FieldSelector<span class="token punctuation">)</span>
  name<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> selector<span class="token punctuation">.</span><span class="token function">RequiresExactMatch</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span>

  d <span class="token operator">:=</span> s<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">" name like ?"</span><span class="token punctuation">,</span> <span class="token string">"%"</span><span class="token operator">+</span>name<span class="token operator">+</span><span class="token string">"%"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Offset</span><span class="token punctuation">(</span>ol<span class="token punctuation">.</span>Offset<span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Limit</span><span class="token punctuation">(</span>ol<span class="token punctuation">.</span>Limit<span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Order</span><span class="token punctuation">(</span><span class="token string">"id desc"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ret<span class="token punctuation">.</span>Items<span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Offset</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Limit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">Count</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ret<span class="token punctuation">.</span>TotalCount<span class="token punctuation">)</span>

  <span class="token keyword">return</span> ret<span class="token punctuation">,</span> d<span class="token punctuation">.</span>Error
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中， s.db 就是 <code v-pre>*gorm.DB</code> 类型的字段。</p>
<p>上面的代码段执行了以下操作：</p>
<ul>
<li>
<p>通过 s.db.Save 来更新数据库表的各字段；</p>
</li>
<li>
<p>通过 s.db.Unscoped 来永久性从表中删除一行记录。对于支持软删除的资源，我们还可以通过 opts.Unscoped 选项来控制是否永久删除记录。 true 永久删除， false 软删除，默认软删除。</p>
</li>
<li>
<p>通过 errors.Is(err, gorm.ErrRecordNotFound) 来判断 GORM 返回的错误是否是没有找到记录的错误类型。</p>
</li>
<li>
<p>通过下面两行代码，来获取查询条件 name 的值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>selector, _ := fields.ParseSelector(opts.FieldSelector)    
name, _ := selector.RequiresExactMatch("name")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>我们的整个调用链是：控制层 -&gt; 业务层 -&gt; 仓库层。这里你可能要问：我们是如何调用到仓库层的实例 mysqlFactory的呢？</p>
<p>这是因为我们的控制层实例包含了业务层的实例。在创建控制层实例时，我们传入了业务层的实例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> UserController <span class="token keyword">struct</span> <span class="token punctuation">{</span>                                        
    srv srvv1<span class="token punctuation">.</span>Service                                                      
<span class="token punctuation">}</span>                                                                          
                                                                                            
<span class="token comment">// NewUserController creates a user handler.          </span>
<span class="token keyword">func</span> <span class="token function">NewUserController</span><span class="token punctuation">(</span>store store<span class="token punctuation">.</span>Factory<span class="token punctuation">)</span> <span class="token operator">*</span>UserController <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>UserController<span class="token punctuation">{</span>                                     
        srv<span class="token punctuation">:</span> srvv1<span class="token punctuation">.</span><span class="token function">NewService</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">,</span>                                             
    <span class="token punctuation">}</span>                                                      
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>业务层的实例包含了仓库层的实例。在创建业务层实例时，传入了仓库层的实例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> service <span class="token keyword">struct</span> <span class="token punctuation">{</span>                                                      
    store store<span class="token punctuation">.</span>Factory                                                                     
<span class="token punctuation">}</span>                                                     
                                                             
<span class="token comment">// NewService returns Service interface.                        </span>
<span class="token keyword">func</span> <span class="token function">NewService</span><span class="token punctuation">(</span>store store<span class="token punctuation">.</span>Factory<span class="token punctuation">)</span> Service <span class="token punctuation">{</span>                                    
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>service<span class="token punctuation">{</span>                                       
        store<span class="token punctuation">:</span> store<span class="token punctuation">,</span>                                             
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种包含关系，我们在控制层可以调用业务层的实例，在业务层又可以调用仓库层的实例。这样，我们最终通过仓库层实例的 db 字段（<code v-pre>*gorm.DB</code> 类型）完成数据库的 CURD 操作。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在 Go 项目中，我们需要使用 ORM 来进行数据库的 CURD 操作。在 Go 生态中，当前最受欢迎的 ORM 是 GORM，IAM 项目也使用了 GORM。GORM 有很多功能，常用的功能有模型定义、连接数据库、创建记录、删除记录、更新记录和查询数据。这些常用功能的常见使用方式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">"fmt"</span>
  <span class="token string">"log"</span>

  <span class="token string">"github.com/spf13/pflag"</span>
  <span class="token string">"gorm.io/driver/mysql"</span>
  <span class="token string">"gorm.io/gorm"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Product <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  gorm<span class="token punctuation">.</span>Model
  Code  <span class="token builtin">string</span> <span class="token string">`gorm:"column:code"`</span>
  Price <span class="token builtin">uint</span>   <span class="token string">`gorm:"column:price"`</span>
<span class="token punctuation">}</span>

<span class="token comment">// TableName maps to mysql table name.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Product<span class="token punctuation">)</span> <span class="token function">TableName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"product"</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
  host     <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"host"</span><span class="token punctuation">,</span> <span class="token string">"H"</span><span class="token punctuation">,</span> <span class="token string">"127.0.0.1:3306"</span><span class="token punctuation">,</span> <span class="token string">"MySQL service host address"</span><span class="token punctuation">)</span>
  username <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"u"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"Username for access to mysql service"</span><span class="token punctuation">)</span>
  password <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">"p"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"Password for access to mysql, should be used pair with password"</span><span class="token punctuation">)</span>
  database <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">StringP</span><span class="token punctuation">(</span><span class="token string">"database"</span><span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">,</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token string">"Database name to use"</span><span class="token punctuation">)</span>
  help     <span class="token operator">=</span> pflag<span class="token punctuation">.</span><span class="token function">BoolP</span><span class="token punctuation">(</span><span class="token string">"help"</span><span class="token punctuation">,</span> <span class="token string">"h"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">"Print this help message"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Parse command line flags</span>
  pflag<span class="token punctuation">.</span>CommandLine<span class="token punctuation">.</span>SortFlags <span class="token operator">=</span> <span class="token boolean">false</span>
  pflag<span class="token punctuation">.</span>Usage <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pflag<span class="token punctuation">.</span><span class="token function">PrintDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  pflag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token operator">*</span>help <span class="token punctuation">{</span>
    pflag<span class="token punctuation">.</span><span class="token function">Usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  dsn <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">`%s:%s@tcp(%s)/%s?charset=utf8&amp;parseTime=%t&amp;loc=%s`</span><span class="token punctuation">,</span>
    <span class="token operator">*</span>username<span class="token punctuation">,</span>
    <span class="token operator">*</span>password<span class="token punctuation">,</span>
    <span class="token operator">*</span>host<span class="token punctuation">,</span>
    <span class="token operator">*</span>database<span class="token punctuation">,</span>
    <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">"Local"</span><span class="token punctuation">)</span>
  db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"failed to connect database"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 1. Auto migration for given models</span>
  db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 2. Insert the value into database</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Product<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token string">"D42"</span><span class="token punctuation">,</span> Price<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"Create error: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">PrintProducts</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span>

  <span class="token comment">// 3. Find first record that match given conditions</span>
  product <span class="token operator">:=</span> <span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"code= ?"</span><span class="token punctuation">,</span> <span class="token string">"D42"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>product<span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"Get product error: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 4. Update value in database, if the value doesn't have primary key, will insert it</span>
  product<span class="token punctuation">.</span>Price <span class="token operator">=</span> <span class="token number">200</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"Update product error: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">PrintProducts</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span>

  <span class="token comment">// 5. Delete value match given conditions</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"code = ?"</span><span class="token punctuation">,</span> <span class="token string">"D42"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Product<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"Delete product error: %v"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">PrintProducts</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// List products</span>
<span class="token keyword">func</span> <span class="token function">PrintProducts</span><span class="token punctuation">(</span>db <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  products <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Product<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> count <span class="token builtin">int64</span>
  d <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"code like ?"</span><span class="token punctuation">,</span> <span class="token string">"%D%"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Offset</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Order</span><span class="token punctuation">(</span><span class="token string">"id desc"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>products<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Offset</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>count<span class="token punctuation">)</span>
  <span class="token keyword">if</span> d<span class="token punctuation">.</span>Error <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">"List products error: %v"</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>Error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"totalcount: %d"</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> product <span class="token operator">:=</span> <span class="token keyword">range</span> products <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"\tcode: %s, price: %d\n"</span><span class="token punctuation">,</span> product<span class="token punctuation">.</span>Code<span class="token punctuation">,</span> product<span class="token punctuation">.</span>Price<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，GORM 还支持原生查询 SQL 和原生执行 SQL，可以满足更加复杂的 SQL 场景。</p>
<p>GORM 中，还有一个非常有用的功能是支持 Hooks。Hooks 可以在执行某个 CURD 操作前被调用。在 Hook 中，可以添加一些非常有用的功能，例如生成唯一 ID。目前，GORM 支持 BeforeXXX 、 AfterXXX 和 AfterFind Hook，其中 XXX 可以是 Save、Create、Delete、Update。</p>
<p>最后，我还介绍了 IAM 项目的 GORM 实战，具体使用方式跟总结中的示例代码大体保持一致，你可以返回文稿查看。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '21.md' style='float:left'>⬆️上一节🔗  </a><a href = '23.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/projects/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


