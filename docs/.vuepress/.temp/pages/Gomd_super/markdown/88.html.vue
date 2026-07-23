<template><div><h1 id="_1-go-admin" tabindex="-1"><a class="header-anchor" href="#_1-go-admin" aria-hidden="true">#</a> 1. go-admin</h1>
<h3 id="_1-1-1-前言" tabindex="-1"><a class="header-anchor" href="#_1-1-1-前言" aria-hidden="true">#</a> 1.1.1. 前言</h3>
<p>GoAdmin 可以帮助你的golang应用快速实现数据可视化，搭建一个数据管理平台。</p>
<p>demo: <a href="https://demo.go-admin.cn/" target="_blank" rel="noopener noreferrer">https://demo.go-admin.cn<ExternalLinkIcon/></a> 账号：admin 密码：admin</p>
<p>代码地址： https://github.com/GoAdminGroup/go-admin</p>
<p><img src="https://s2.loli.net/2022/04/11/K25yfpIhVOvT4gz.png" alt="image-20220411191109666"></p>
<h3 id="_1-1-2-特征" tabindex="-1"><a class="header-anchor" href="#_1-1-2-特征" aria-hidden="true">#</a> 1.1.2. 特征</h3>
<ul>
<li>🚀 <strong>高生产效率</strong>: 10分钟内做一个好看的管理后台</li>
<li>🎨 <strong>主题</strong>: 默认为adminlte，更多好看的主题正在制作中，欢迎给我们留言</li>
<li>🔢 <strong>插件化</strong>: 提供插件使用，真正实现一个插件解决不了问题，那就两个</li>
<li>✅ <strong>认证</strong>: 开箱即用的rbac认证系统</li>
<li>⚙️ <strong>框架支持</strong>: 支持大部分框架接入，让你更容易去上手和扩展</li>
</ul>
<h3 id="_1-1-3-使用" tabindex="-1"><a class="header-anchor" href="#_1-1-3-使用" aria-hidden="true">#</a> 1.1.3. 使用</h3>
<p>通过以下三步运行：</p>
<h4 id="第一步-导入-sql" tabindex="-1"><a class="header-anchor" href="#第一步-导入-sql" aria-hidden="true">#</a> 第一步：导入 sql</h4>
<p><a href="https://raw.githubusercontent.com/GoAdminGroup/go-admin/master/data/admin.sql" target="_blank" rel="noopener noreferrer">mysql<ExternalLinkIcon/></a> <a href="https://raw.githubusercontent.com/GoAdminGroup/go-admin/master/data/admin.pgsql" target="_blank" rel="noopener noreferrer">postgresql<ExternalLinkIcon/></a> <a href="https://raw.githubusercontent.com/GoAdminGroup/go-admin/master/data/admin.db" target="_blank" rel="noopener noreferrer">sqlite<ExternalLinkIcon/></a></p>
<h4 id="第二步-创建-main-go" tabindex="-1"><a class="header-anchor" href="#第二步-创建-main-go" aria-hidden="true">#</a> 第二步：创建 main.go</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"github.com/gin-gonic/gin"</span>
    <span class="token boolean">_</span> <span class="token string">"github.com/GoAdminGroup/go-admin/adapter/gin"</span>
    <span class="token boolean">_</span> <span class="token string">"github.com/GoAdminGroup/go-admin/modules/db/drivers/mysql"</span>
    <span class="token string">"github.com/GoAdminGroup/go-admin/engine"</span>
    <span class="token string">"github.com/GoAdminGroup/go-admin/plugins/admin"</span>
    <span class="token string">"github.com/GoAdminGroup/themes/adminlte"</span>
    <span class="token string">"github.com/GoAdminGroup/go-admin/modules/config"</span>
    <span class="token string">"github.com/GoAdminGroup/go-admin/template"</span>
        <span class="token string">"github.com/GoAdminGroup/go-admin/template/chartjs"</span>
        <span class="token string">"github.com/GoAdminGroup/go-admin/template/types"</span>
    <span class="token string">"github.com/GoAdminGroup/go-admin/examples/datamodel"</span>
    <span class="token string">"github.com/GoAdminGroup/go-admin/modules/language"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    eng <span class="token operator">:=</span> engine<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// global config</span>
    cfg <span class="token operator">:=</span> config<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
        Databases<span class="token punctuation">:</span> config<span class="token punctuation">.</span>DatabaseList<span class="token punctuation">{</span>
            <span class="token string">"default"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            Host<span class="token punctuation">:</span>         <span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
            Port<span class="token punctuation">:</span>         <span class="token string">"3306"</span><span class="token punctuation">,</span>
            User<span class="token punctuation">:</span>         <span class="token string">"root"</span><span class="token punctuation">,</span>
            Pwd<span class="token punctuation">:</span>          <span class="token string">"root"</span><span class="token punctuation">,</span>
            Name<span class="token punctuation">:</span>         <span class="token string">"godmin"</span><span class="token punctuation">,</span>
            MaxIdleCon<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            MaxOpenCon<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
            Driver<span class="token punctuation">:</span>       <span class="token string">"mysql"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        UrlPrefix<span class="token punctuation">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span>
        <span class="token comment">// STORE 必须设置且保证有写权限，否则增加不了新的管理员用户</span>
        Store<span class="token punctuation">:</span> config<span class="token punctuation">.</span>Store<span class="token punctuation">{</span>
            Path<span class="token punctuation">:</span>   <span class="token string">"./uploads"</span><span class="token punctuation">,</span>
            Prefix<span class="token punctuation">:</span> <span class="token string">"uploads"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        Language<span class="token punctuation">:</span> language<span class="token punctuation">.</span>CN<span class="token punctuation">,</span> 
        <span class="token comment">// 开发模式</span>
                Debug<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token comment">// 日志文件位置，需为绝对路径</span>
                InfoLogPath<span class="token punctuation">:</span> <span class="token string">"/var/logs/info.log"</span><span class="token punctuation">,</span>
                AccessLogPath<span class="token punctuation">:</span> <span class="token string">"/var/logs/access.log"</span><span class="token punctuation">,</span>
                ErrorLogPath<span class="token punctuation">:</span> <span class="token string">"/var/logs/error.log"</span><span class="token punctuation">,</span>
                ColorScheme<span class="token punctuation">:</span> adminlte<span class="token punctuation">.</span>ColorschemeSkinBlack<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

        <span class="token comment">// Generators： 详见 https://github.com/GoAdminGroup/go-admin/blob/master/examples/datamodel/tables.go</span>
    adminPlugin <span class="token operator">:=</span> admin<span class="token punctuation">.</span><span class="token function">NewAdmin</span><span class="token punctuation">(</span>datamodel<span class="token punctuation">.</span>Generators<span class="token punctuation">)</span>

    <span class="token comment">// 增加 chartjs 组件</span>
    template<span class="token punctuation">.</span><span class="token function">AddComp</span><span class="token punctuation">(</span>chartjs<span class="token punctuation">.</span><span class="token function">NewChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 增加 generator, 第一个参数是对应的访问路由前缀</span>
    <span class="token comment">// 例子:</span>
    <span class="token comment">//</span>
    <span class="token comment">// "user" => http://localhost:9033/admin/info/user</span>
    <span class="token comment">//</span>
    <span class="token comment">// adminPlugin.AddGenerator("user", datamodel.GetUserTable)</span>

    <span class="token comment">// 自定义首页</span>

            r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/admin"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                engine<span class="token punctuation">.</span><span class="token function">Content</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>types<span class="token punctuation">.</span>Panel<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> datamodel<span class="token punctuation">.</span><span class="token function">GetContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token boolean">_</span> <span class="token operator">=</span> eng<span class="token punctuation">.</span><span class="token function">AddConfig</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AddPlugins</span><span class="token punctuation">(</span>adminPlugin<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>

    <span class="token boolean">_</span> <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">":9033"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他框架的例子: https://github.com/GoAdminGroup/go-admin/tree/master/examples</p>
<h4 id="第三步-运行" tabindex="-1"><a class="header-anchor" href="#第三步-运行" aria-hidden="true">#</a> 第三步：运行</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问：http://localhost:9033/admin</p>
<p>更多细节详见 <a href="http://www.go-admin.cn/docs/#/README" target="_blank" rel="noopener noreferrer">文档说明<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/GoAdminGroup/example" target="_blank" rel="noopener noreferrer">这里一个超级简单上手的例子<ExternalLinkIcon/></a></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '87.md' style='float:left'>⬆️上一节🔗</a><a href = '89.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/Gomd_super/">Ⓜ️回到首页🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


