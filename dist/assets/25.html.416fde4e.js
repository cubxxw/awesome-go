import{_ as u,r as s,o as a,c as v,a as n,b as i,w as d,d as e,e as c}from"./app.2cadb53f.js";const o={},m=n("h1",{id:"mysql\u4E8B\u52A1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mysql\u4E8B\u52A1","aria-hidden":"true"},"#"),e(" MySQL\u4E8B\u52A1")],-1),b={class:"table-of-contents"},q=e("END \u94FE\u63A5"),_=c(`<p>[toc]</p><p>mysql\u4E8B\u52A1\u7279\u6027\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1) \u539F\u5B50\u6027
    2) \u4E00\u81F4\u6027
    3) \u9694\u79BB\u6027
    4) \u6301\u4E45\u6027
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>golang MySQL\u4E8B\u52A1\u5E94\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1\uFF09 import (\u201Cgithub.com/jmoiron/sqlx&quot;)
    2)  Db.Begin()        \u5F00\u59CB\u4E8B\u52A1
    3)  Db.Commit()        \u63D0\u4EA4\u4E8B\u52A1
    4)  Db.Rollback()     \u56DE\u6EDA\u4E8B\u52A1
package main

    import (
        &quot;fmt&quot;

        _ &quot;github.com/go-sql-driver/mysql&quot;
        &quot;github.com/jmoiron/sqlx&quot;
    )

    type Person struct {
        UserId   int    \`db:&quot;user_id&quot;\`
        Username string \`db:&quot;username&quot;\`
        Sex      string \`db:&quot;sex&quot;\`
        Email    string \`db:&quot;email&quot;\`
    }

    type Place struct {
        Country string \`db:&quot;country&quot;\`
        City    string \`db:&quot;city&quot;\`
        TelCode int    \`db:&quot;telcode&quot;\`
    }

    var Db *sqlx.DB

    func init() {
        database, err := sqlx.Open(&quot;mysql&quot;, &quot;root:root@tcp(127.0.0.1:3306)/test&quot;)
        if err != nil {
            fmt.Println(&quot;open mysql failed,&quot;, err)
            return
        }
        Db = database
    }

    func main() {
        conn, err := Db.Begin()
        if err != nil {
            fmt.Println(&quot;begin failed :&quot;, err)
            return
        }

        r, err := conn.Exec(&quot;insert into person(username, sex, email)values(?, ?, ?)&quot;, &quot;stu001&quot;, &quot;man&quot;, &quot;stu01@qq.com&quot;)
        if err != nil {
            fmt.Println(&quot;exec failed, &quot;, err)
            conn.Rollback()
            return
        }
        id, err := r.LastInsertId()
        if err != nil {
            fmt.Println(&quot;exec failed, &quot;, err)
            conn.Rollback()
            return
        }
        fmt.Println(&quot;insert succ:&quot;, id)

        r, err = conn.Exec(&quot;insert into person(username, sex, email)values(?, ?, ?)&quot;, &quot;stu001&quot;, &quot;man&quot;, &quot;stu01@qq.com&quot;)
        if err != nil {
            fmt.Println(&quot;exec failed, &quot;, err)
            conn.Rollback()
            return
        }
        id, err = r.LastInsertId()
        if err != nil {
            fmt.Println(&quot;exec failed, &quot;, err)
            conn.Rollback()
            return
        }
        fmt.Println(&quot;insert succ:&quot;, id)

        conn.Commit()
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    insert succ: 2
    insert succ: 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770BMySQL\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    mysql&gt; select * from person;
    +---------+----------+------+--------------+
    | user_id | username | sex  | email        |
    +---------+----------+------+--------------+
    |       2 | stu001   | man  | stu01@qq.com |
    |       3 | stu001   | man  | stu01@qq.com |
    +---------+----------+------+--------------+
    2 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end-\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#end-\u94FE\u63A5" aria-hidden="true">#</a> END \u94FE\u63A5</h2><ul><li><div><a href="24.md" style="float:left;">\u2B06\uFE0F\u4E0A\u4E00\u8282\u{1F517}</a><a href="26.md" style="float:right;">\u2B07\uFE0F\u4E0B\u4E00\u8282\u{1F517}</a></div></li></ul>`,11),p=e("\u24C2\uFE0F\u56DE\u5230\u9996\u9875\u{1F3E0}"),f={href:"https://nsddd.top/archives/contributors",target:"_blank",rel:"noopener noreferrer"},h=n("strong",null,"\u{1FAF5}\u53C2\u4E0E\u8D21\u732E\u{1F49E}\u2764\uFE0F\u200D\u{1F525}\u{1F496}",-1),x=e(")"),g=e("\u2734\uFE0F\u7248\u6743\u58F0\u660E \xA9 :\u672C\u4E66\u6240\u6709\u5185\u5BB9\u9075\u5FAA"),k={href:"http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},y=e("CC-BY-SA 3.0\u534F\u8BAE\uFF08\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB\uFF09\xA9");function E(C,D){const r=s("router-link"),t=s("RouterLink"),l=s("ExternalLinkIcon");return a(),v("div",null,[m,n("nav",b,[n("ul",null,[n("li",null,[i(r,{to:"#end-\u94FE\u63A5"},{default:d(()=>[q]),_:1})])])]),_,n("ul",null,[n("li",null,[n("p",null,[i(t,{to:"/Gomd_super/"},{default:d(()=>[p]),_:1})])]),n("li",null,[n("p",null,[n("a",f,[h,i(l)]),x])]),n("li",null,[n("p",null,[g,n("a",k,[y,i(l)])])])])])}const L=u(o,[["render",E],["__file","25.html.vue"]]);export{L as default};
