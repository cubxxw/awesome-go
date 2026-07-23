<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第33节-软件部署实战-中-iam-系统生产环境部署实战" tabindex="-1"><a class="header-anchor" href="#第33节-软件部署实战-中-iam-系统生产环境部署实战" aria-hidden="true">#</a> 第33节 软件部署实战（中）：IAM 系统生产环境部署实战</h1>
<br>
<div><a href = '32.md' style='float:left'>⬆️上一节🔗  </a><a href = '34.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://cubxxw.com/" target="_blank" rel="noopener noreferrer">http://cubxxw.com<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#部署iam应用">部署IAM应用</router-link><ul><li><router-link to="#在10-0-4-20服务器上部署iam应用">在10.0.4.20服务器上部署IAM应用</router-link></li><li><router-link to="#在10-0-4-21服务器上部署iam应用">在10.0.4.21服务器上部署IAM应用</router-link></li></ul></li><li><router-link to="#配置nginx作为反向代理">配置Nginx作为反向代理</router-link></li><li><router-link to="#配置nginx作为负载均衡">配置Nginx作为负载均衡</router-link><ul><li><router-link to="#_10-0-4-20服务器配置">10.0.4.20服务器配置</router-link></li><li><router-link to="#_10-0-4-21服务器配置">10.0.4.21服务器配置</router-link></li><li><router-link to="#测试负载均衡">测试负载均衡</router-link></li></ul></li><li><router-link to="#配置keepalived">配置Keepalived</router-link><ul><li><router-link to="#第一步-创建腾讯云havip">第一步：创建腾讯云HAVIP</router-link></li><li><router-link to="#第二步-主服务器配置">第二步：主服务器配置</router-link></li><li><router-link to="#第三步-备服务器配置">第三步：备服务器配置</router-link></li><li><router-link to="#第四步-测试keepalived">第四步：测试Keepalived</router-link></li><li><router-link to="#第五步-vip绑定公网ip">第五步：VIP绑定公网IP</router-link></li><li><router-link to="#第六步-测试公网访问">第六步：测试公网访问</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<p>上一讲，我介绍了IAM部署用到的两个核心组件，Nginx和Keepalived。那么这一讲，我们就来看下，如何使用Nginx和Keepalived来部署一个高可用的IAM应用。下一讲，我再介绍下IAM应用安全和弹性伸缩能力的构建方式。</p>
<p>这一讲，我们会通过下面四个步骤来部署IAM应用：</p>
<ol>
<li>在服务器上部署IAM应用中的服务。</li>
<li>配置Nginx，实现反向代理功能。通过反向代理，我们可以通过Nginx来访问部署在内网的IAM服务。</li>
<li>配置Nginx，实现负载均衡功能。通过负载均衡，我们可以实现服务的水平扩缩容，使IAM应用具备高可用能力。</li>
<li>配置Keepalived，实现Nginx的高可用。通过Nginx + Keepalived的组合，可以实现整个应用架构的高可用。</li>
</ol>
<h2 id="部署iam应用" tabindex="-1"><a class="header-anchor" href="#部署iam应用" aria-hidden="true">#</a> 部署IAM应用</h2>
<p>部署一个高可用的IAM应用，需要至少两个节点。所以，我们按照先后顺序，分别在<code v-pre>10.0.4.20</code>和<code v-pre>10.0.4.21</code>服务器上部署IAM应用。</p>
<h3 id="在10-0-4-20服务器上部署iam应用" tabindex="-1"><a class="header-anchor" href="#在10-0-4-20服务器上部署iam应用" aria-hidden="true">#</a> 在<code v-pre>10.0.4.20</code>服务器上部署IAM应用</h3>
<p>首先，我来介绍下如何在<code v-pre>10.0.4.20</code>服务器上部署IAM应用。</p>
<p>我们要在这个服务器上部署如下组件：</p>
<ul>
<li>iam-apiserver</li>
<li>iam-authz-server</li>
<li>iam-pump</li>
<li>MariaDB</li>
<li>Redis</li>
<li>MongoDB</li>
</ul>
<p>这些组件的部署方式，<a href="https://time.geekbang.org/column/article/378082" target="_blank" rel="noopener noreferrer">03讲<ExternalLinkIcon/></a> 有介绍，这里就不再说明。</p>
<p>此外，我们还需要设置MariaDB，给来自于<code v-pre>10.0.4.21</code>服务器的数据库连接授权，授权命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ mysql <span class="token parameter variable">-hlocalhost</span> <span class="token parameter variable">-P3306</span> <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span> <span class="token comment"># 先以root用户登陆数据库</span>
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">></span> grant all on iam.* TO iam@10.0.4.21 identified by <span class="token string">'iam1234'</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.000</span> sec<span class="token punctuation">)</span>

MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">></span> flush privileges<span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.000</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在10-0-4-21服务器上部署iam应用" tabindex="-1"><a class="header-anchor" href="#在10-0-4-21服务器上部署iam应用" aria-hidden="true">#</a> 在<code v-pre>10.0.4.21</code>服务器上部署IAM应用</h3>
<p>然后，在<code v-pre>10.0.4.21</code>服务器上安装好iam-apiserver、iam-authz-server 和 iam-pump。这些组件通过<code v-pre>10.0.4.20</code> IP地址，连接<code v-pre>10.0.4.20</code>服务器上的MariaDB、Redis和MongoDB。</p>
<h2 id="配置nginx作为反向代理" tabindex="-1"><a class="header-anchor" href="#配置nginx作为反向代理" aria-hidden="true">#</a> 配置Nginx作为反向代理</h2>
<p>假定要访问的API Server和IAM Authorization Server的域名分别为<code v-pre>iam.api.marmotedu.com</code>和<code v-pre>iam.authz.marmotedu.com</code>，我们需要分别为iam-apiserver和iam-authz-server配置Nginx反向代理。整个配置过程可以分为5步（在<code v-pre>10.0.4.20</code>服务器上操作）。</p>
<p><strong>第一步，配置iam-apiserver。</strong></p>
<p>新建Nginx配置文件<code v-pre>/etc/nginx/conf.d/iam-apiserver.conf</code>，内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  iam.api.marmotedu.com<span class="token punctuation">;</span>
    root         /usr/share/nginx/html<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
      proxy_set_header X-Forwarded-Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
      proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
      proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
      proxy_pass  http://127.0.0.1:8080/<span class="token punctuation">;</span>
      client_max_body_size 5m<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /40x.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有几点你在配置时需要注意，这里说明下。</p>
<ul>
<li><code v-pre>server_name</code>需要为<code v-pre>iam.api.marmotedu.com</code>，我们通过<code v-pre>iam.api.marmotedu.com</code>访问iam-apiserver。</li>
<li>iam-apiserver默认启动的端口为<code v-pre>8080</code>。</li>
<li>由于Nginx默认允许客户端请求的最大单文件字节数为<code v-pre>1MB</code>，实际生产环境中可能太小，所以这里将此限制改为5MB（<code v-pre>client_max_body_size 5m</code>）。如果需要上传图片之类的，可能需要设置成更大的值，比如<code v-pre>50m</code>。</li>
<li>server_name用来说明访问Nginx服务器的域名，例如<code v-pre>curl -H 'Host: iam.api.marmotedu.com' http://x.x.x.x:80/healthz</code>，<code v-pre>x.x.x.x</code>为Nginx服务器的IP地址。</li>
<li>proxy_pass表示反向代理的路径。因为这里是本机的iam-apiserver服务，所以IP为<code v-pre>127.0.0.1</code>。端口要和API服务端口一致，为<code v-pre>8080</code>。</li>
</ul>
<p>最后还要提醒下，因为 Nginx 配置选项比较多，跟实际需求和环境有关，所以这里的配置是基础的、未经优化的配置，在实际生产环境中需要你再做调节。</p>
<p><strong>第二步，配置iam-authz-server。</strong></p>
<p>新建Nginx配置文件<code v-pre>/etc/nginx/conf.d/iam-authz-server.conf</code>，内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  iam.authz.marmotedu.com<span class="token punctuation">;</span>
    root         /usr/share/nginx/html<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
      proxy_set_header X-Forwarded-Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
      proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
      proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
      proxy_pass  http://127.0.0.1:9090/<span class="token punctuation">;</span>
      client_max_body_size 5m<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /40x.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一些配置说明。</p>
<ul>
<li>server_name需要为<code v-pre>iam.authz.marmotedu.com</code>，我们通过<code v-pre>iam.authz.marmotedu.com</code>访问iam-authz-server。</li>
<li>iam-authz-server默认启动的端口为<code v-pre>9090</code>。</li>
<li>其他配置跟<code v-pre>/etc/nginx/conf.d/iam-apiserver.conf</code>一致。</li>
</ul>
<p><strong>第三步，配置完Nginx后，重启Nginx：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第四步，在/etc/hosts中追加下面两行：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1 iam.api.marmotedu.com
<span class="token number">127.0</span>.0.1 iam.authz.marmotedu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第五步，发送HTTP请求：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> http://iam.api.marmotedu.com/healthz
<span class="token punctuation">{</span><span class="token string">"status"</span><span class="token builtin class-name">:</span><span class="token string">"ok"</span><span class="token punctuation">}</span>
$ <span class="token function">curl</span> http://iam.authz.marmotedu.com/healthz
<span class="token punctuation">{</span><span class="token string">"status"</span><span class="token builtin class-name">:</span><span class="token string">"ok"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们分别请求iam-apiserver和iam-authz-server的健康检查接口，输出了<code v-pre>{&quot;status&quot;:&quot;ok&quot;}</code>，说明我们可以成功通过代理访问后端的API服务。</p>
<p>在用curl请求<code v-pre>http://iam.api.marmotedu.com/healthz</code>后，后端的请求流程实际上是这样的：</p>
<ol>
<li>因为在<code v-pre>/etc/hosts</code>中配置了<code v-pre>127.0.0.1 iam.api.marmotedu.com</code>，所以请求<code v-pre>http://iam.api.marmotedu.com/healthz</code>实际上是请求本机的Nginx端口（<code v-pre>127.0.0.1:80</code>）。</li>
<li>Nginx在收到请求后，会解析请求，得到请求域名为<code v-pre>iam.api.marmotedu.com</code>。根据请求域名去匹配 Nginx的server配置，匹配到<code v-pre>server_name iam.api.marmotedu.com;</code>配置。</li>
<li>匹配到server后，把请求转发到该server的<code v-pre>proxy_pass</code>路径。</li>
<li>等待API服务器返回结果，并返回客户端。</li>
</ol>
<h2 id="配置nginx作为负载均衡" tabindex="-1"><a class="header-anchor" href="#配置nginx作为负载均衡" aria-hidden="true">#</a> 配置Nginx作为负载均衡</h2>
<p>这门课采用Nginx轮询的负载均衡策略转发请求。负载均衡需要至少两台服务器，所以会分别在<code v-pre>10.0.4.20</code>和<code v-pre>10.0.4.21</code>服务器上执行相同的操作。下面我分别来介绍下如何配置这两台服务器，并验证配置是否成功。</p>
<h3 id="_10-0-4-20服务器配置" tabindex="-1"><a class="header-anchor" href="#_10-0-4-20服务器配置" aria-hidden="true">#</a> <code v-pre>10.0.4.20</code>服务器配置</h3>
<p>登陆<code v-pre>10.0.4.20</code>服务器，在<code v-pre>/etc/nginx/nginx.conf</code>中添加upstream配置，配置过程可以分为3步。</p>
<p><strong>第一步，在</strong><code v-pre>/etc/nginx/nginx.conf</code><strong>中添加upstream：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>http <span class="token punctuation">{</span>
    log_format  main  <span class="token string">'$remote_addr - $remote_user [$time_local] "$request" '</span>
                      <span class="token string">'$status $body_bytes_sent "$http_referer" '</span>
                      <span class="token string">'"$http_user_agent" "$http_x_forwarded_for"'</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

    sendfile            on<span class="token punctuation">;</span>
    tcp_nopush          on<span class="token punctuation">;</span>
    tcp_nodelay         on<span class="token punctuation">;</span>
    keepalive_timeout   <span class="token number">65</span><span class="token punctuation">;</span>
    types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>

    include             /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type        application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment"># Load modular configuration files from the /etc/nginx/conf.d directory.</span>
    <span class="token comment"># See http://nginx.org/en/docs/ngx_core_module.html#include</span>
    <span class="token comment"># for more information.</span>
    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
    upstream iam.api.marmotedu.com <span class="token punctuation">{</span>
        server <span class="token number">127.0</span>.0.1:8080
        server <span class="token number">10.0</span>.4.21:8080
    <span class="token punctuation">}</span>
    upstream iam.authz.marmotedu.com <span class="token punctuation">{</span>
        server <span class="token number">127.0</span>.0.1:9090
        server <span class="token number">10.0</span>.4.21:9090
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>配置说明：</em></p>
<ul>
<li>upstream是配置在<code v-pre>/etc/nginx/nginx.conf</code>文件中的<code v-pre>http{ … }</code>部分的。</li>
<li>因为我们要分别为iam-apiserver和iam-authz-server配置负载均衡，所以我们创建了两个upstream，分别是<code v-pre>iam.api.marmotedu.com</code>和<code v-pre>iam.authz.marmotedu.com</code>。为了便于识别，upstream名称和域名最好保持一致。</li>
<li>在upstream中，我们需要分别添加所有的iam-apiserver和iam-authz-server的后端（<code v-pre>ip:port</code>），本机的后端为了访问更快，可以使用<code v-pre>127.0.0.1:&lt;port&gt;</code>，其他机器的后端，需要使用<code v-pre>&lt;内网&gt;:port</code>，例如<code v-pre>10.0.4.21:8080</code>、<code v-pre>10.0.4.21:9090</code>。</li>
</ul>
<p><strong>第二步，修改proxy_pass。</strong></p>
<p>修改<code v-pre>/etc/nginx/conf.d/iam-apiserver.conf</code>文件，将<code v-pre>proxy_pass</code>修改为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>proxy_pass http://iam.api.marmotedu.com/;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改<code v-pre>/etc/nginx/conf.d/iam-authz-server.conf</code>文件，将<code v-pre>proxy_pass</code>修改为：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>proxy_pass http://iam.authz.marmotedu.com/;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当Nginx转发到<code v-pre>http://iam.api.marmotedu.com/</code>域名时，会从<code v-pre>iam.api.marmotedu.com</code> upstream配置的后端列表中，根据负载均衡策略选取一个后端，并将请求转发过去。转发<code v-pre>http://iam.authz.marmotedu.com/</code>域名的逻辑也一样。</p>
<p><strong>第三步，配置完Nginx后，重启Nginx：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ sudo systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最终配置好的配置文件，你可以参考下面这些（保存在<a href="https://github.com/marmotedu/iam/tree/v1.0.8/configs/ha/10.0.4.20" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.20<ExternalLinkIcon/></a>目录下）：</p>
<ul>
<li>nginx.conf：<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/ha/10.0.4.20/nginx.conf" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.20/nginx.conf<ExternalLinkIcon/></a>。</li>
<li>iam-apiserver.conf：<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/ha/10.0.4.20/iam-apiserver.conf" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.20/iam-apiserver.conf<ExternalLinkIcon/></a>。</li>
<li>iam-authz-server.conf：<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/ha/10.0.4.20/iam-authz-server.conf" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.20/iam-authz-server.conf<ExternalLinkIcon/></a>。</li>
</ul>
<h3 id="_10-0-4-21服务器配置" tabindex="-1"><a class="header-anchor" href="#_10-0-4-21服务器配置" aria-hidden="true">#</a> <code v-pre>10.0.4.21</code>服务器配置</h3>
<p>登陆<code v-pre>10.0.4.21</code>服务器，在<code v-pre>/etc/nginx/nginx.conf</code>中添加upstream配置。配置过程可以分为下面4步。</p>
<p><strong>第一步，在</strong><code v-pre>/etc/nginx/nginx.conf</code><strong>中添加upstream：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
http <span class="token punctuation">{</span>
    log_format  main  <span class="token string">'$remote_addr - $remote_user [$time_local] "$request" '</span>
                      <span class="token string">'$status $body_bytes_sent "$http_referer" '</span>
                      <span class="token string">'"$http_user_agent" "$http_x_forwarded_for"'</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

    sendfile            on<span class="token punctuation">;</span>
    tcp_nopush          on<span class="token punctuation">;</span>
    tcp_nodelay         on<span class="token punctuation">;</span>
    keepalive_timeout   <span class="token number">65</span><span class="token punctuation">;</span>
    types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>

    include             /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type        application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment"># Load modular configuration files from the /etc/nginx/conf.d directory.</span>
    <span class="token comment"># See http://nginx.org/en/docs/ngx_core_module.html#include</span>
    <span class="token comment"># for more information.</span>
    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
    upstream iam.api.marmotedu.com <span class="token punctuation">{</span>
        server <span class="token number">127.0</span>.0.1:8080
        server <span class="token number">10.0</span>.4.20:8080
    <span class="token punctuation">}</span>
    upstream iam.authz.marmotedu.com <span class="token punctuation">{</span>
        server <span class="token number">127.0</span>.0.1:9090
        server <span class="token number">10.0</span>.4.20:9090
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>upstream中，需要配置<code v-pre>10.0.4.20</code>服务器上的iam-apiserver和iam-authz-server的后端，例如<code v-pre>10.0.4.20:8080</code>、<code v-pre>10.0.4.20:9090</code>。</p>
<p><strong>第二步，创建</strong><code v-pre>/etc/nginx/conf.d/iam-apiserver.conf</code><strong>文件</strong>（iam-apiserver的反向代理+负载均衡配置），内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  iam.api.marmotedu.com<span class="token punctuation">;</span>
    root         /usr/share/nginx/html<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
      proxy_set_header X-Forwarded-Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
      proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
      proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
      proxy_pass  http://iam.api.marmotedu.com/<span class="token punctuation">;</span>
      client_max_body_size 5m<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /40x.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三步，创建</strong><code v-pre>/etc/nginx/conf.d/iam-authz-server</code><strong>文件</strong>（iam-authz-server的反向代理+负载均衡配置），内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  iam.authz.marmotedu.com<span class="token punctuation">;</span>
    root         /usr/share/nginx/html<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
      proxy_set_header X-Forwarded-Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
      proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
      proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
      proxy_pass  http://iam.authz.marmotedu.com/<span class="token punctuation">;</span>
      client_max_body_size 5m<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /40x.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第四步，配置完Nginx后，重启Nginx：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最终配置好的配置文件，你可以参考下面这些（保存在<a href="https://github.com/marmotedu/iam/tree/v1.0.8/configs/ha/10.0.4.21" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.21<ExternalLinkIcon/></a>目录下）：</p>
<ul>
<li>nginx.conf：<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/ha/10.0.4.21/nginx.conf" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.21/nginx.conf<ExternalLinkIcon/></a>。</li>
<li>iam-apiserver.conf：<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/ha/10.0.4.21/iam-apiserver.conf" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.21/iam-apiserver.conf<ExternalLinkIcon/></a>。</li>
<li>iam-authz-server.conf：<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/ha/10.0.4.21/iam-authz-server.conf" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.21/iam-authz-server.conf<ExternalLinkIcon/></a>。</li>
</ul>
<h3 id="测试负载均衡" tabindex="-1"><a class="header-anchor" href="#测试负载均衡" aria-hidden="true">#</a> 测试负载均衡</h3>
<p>上面，我们配置了Nginx负载均衡器，这里我们还需要测试下是否配置成功。</p>
<p><strong>第一步，执行测试脚本（</strong><a href="https://github.com/marmotedu/iam/blob/v1.0.8/test/nginx/loadbalance.sh" target="_blank" rel="noopener noreferrer">test/nginx/loadbalance.sh<ExternalLinkIcon/></a><strong>）：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">domain</span> <span class="token keyword">in</span> iam.api.marmotedu.com iam.authz.marmotedu.com
<span class="token keyword">do</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">1</span> <span class="token number">10</span><span class="token variable">)</span></span>
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$domain</span>
    <span class="token function">nohup</span> <span class="token function">curl</span> http://<span class="token variable">${domain}</span>/healthz <span class="token operator">&amp;></span>/dev/null <span class="token operator">&amp;</span>
  <span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二步，分别查看iam-apiserver和iam-authz-server的日志。</strong></p>
<p>这里我展示下iam-apiserver的日志（iam-authz-server的日志你可自行查看）。</p>
<p><code v-pre>10.0.4.20</code>服务器的iam-apiserver日志如下图所示：</p>
<p><img src="https://static001.geekbang.org/resource/image/58/26/58d072c92552fa3068e3ef3acd0ed726.png?wh=1920x498" alt="图片"></p>
<p><code v-pre>10.0.4.21</code>服务器的iam-apiserver日志如下图所示：</p>
<p><img src="https://static001.geekbang.org/resource/image/19/85/199066c65ff60007f80f3c2dyy11c785.png?wh=1920x482" alt="图片"></p>
<p>通过上面两张图，你可以看到<code v-pre>10.0.4.20</code>和<code v-pre>10.0.4.21</code>各收到<code v-pre>5</code>个<code v-pre>/healthz</code>请求，说明负载均衡配置成功。</p>
<h2 id="配置keepalived" tabindex="-1"><a class="header-anchor" href="#配置keepalived" aria-hidden="true">#</a> 配置Keepalived</h2>
<p>在 <a href="https://time.geekbang.org/column/article/411663" target="_blank" rel="noopener noreferrer">40讲<ExternalLinkIcon/></a>，我们分别在<code v-pre>10.0.4.20</code>和<code v-pre>10.0.4.21</code>服务器上安装了Keepalived。这里，我来介绍下如何配置Keepalived，实现Nginx的高可用。为了避免故障恢复时，VIP切换造成的服务延时，这一讲采用Keepalived的非抢占模式。</p>
<p>配置Keepalived的流程比较复杂，分为创建腾讯云HAVIP、主服务器配置、备服务器配置、测试Keepalived、VIP绑定公网IP和测试公网访问六大步，每一步中都有很多小步骤，下面我们来一步步地看下。</p>
<h3 id="第一步-创建腾讯云havip" tabindex="-1"><a class="header-anchor" href="#第一步-创建腾讯云havip" aria-hidden="true">#</a> <strong>第一步：创建腾讯云HAVIP</strong></h3>
<p>公有云厂商的普通内网IP，出于安全考虑（如避免ARP欺骗等），不支持主机通过ARP宣告IP 。如果用户直接在<code v-pre>keepalived.conf</code>文件中指定一个普通内网IP为virtual IP，当Keepalived将virtual IP从MASTER机器切换到BACKUP机器时，将无法更新IP和MAC地址的映射，而需要调API来进行IP切换。所以，这里的VIP需要申请腾讯云的HAVIP。</p>
<p>申请的流程可以分为下面4步：</p>
<ol>
<li>登录私有网络控制台**。**</li>
<li>在左侧导航栏中，选择【IP与网卡】&gt;【高可用虚拟IP】。</li>
<li>在HAVIP管理页面，选择所在地域，单击【申请】。</li>
<li>在弹出的【申请高可用虚拟IP】对话框中输入名称，选择HAVIP所在的私有网络和子网等信息，单击【确定】即可。</li>
</ol>
<p>这里选择的私有网络和子网，需要和<code v-pre>10.0.4.20</code>、<code v-pre>10.0.4.21</code>相同。HAVIP 的 IP 地址可以自动分配，也可以手动填写，这里我们手动填写为10.0.4.99。申请页面如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/a4/11/a49d6e7e080d658392dbb144a1560811.png?wh=827x1016" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/a4/11/a49d6e7e080d658392dbb144a1560811.png?wh=827x1016" alt="图片"><ExternalLinkIcon/></a></p>
<h3 id="第二步-主服务器配置" tabindex="-1"><a class="header-anchor" href="#第二步-主服务器配置" aria-hidden="true">#</a> 第二步：主服务器配置</h3>
<p>进行主服务器配置，可以分为两步。</p>
<p><strong>首先，修改Keepalived配置文件。</strong></p>
<p>登陆服务器<code v-pre>10.0.4.20</code>，编辑<code v-pre>/etc/keepalived/keepalived.conf</code>，修改配置，修改后配置内容如下（参考：<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/ha/10.0.4.20/keepalived.conf" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.20/keepalived.conf<ExternalLinkIcon/></a>）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 全局定义，定义全局的配置选项</span>
global_defs <span class="token punctuation">{</span>
<span class="token comment"># 指定keepalived在发生切换操作时发送email，发送给哪些email</span>
<span class="token comment"># 建议在keepalived_notify.sh中发送邮件</span>
  notification_email <span class="token punctuation">{</span>
    acassen@firewall.loc
  <span class="token punctuation">}</span>
  notification_email_from Alexandre.Cassen@firewall.loc <span class="token comment"># 发送email时邮件源地址</span>
    smtp_server <span class="token number">192.168</span>.200.1 <span class="token comment"># 发送email时smtp服务器地址</span>
    smtp_connect_timeout <span class="token number">30</span> <span class="token comment"># 连接smtp的超时时间</span>
    router_id VM-4-20-centos <span class="token comment"># 机器标识，通常可以设置为hostname</span>
    vrrp_skip_check_adv_addr <span class="token comment"># 如果接收到的报文和上一个报文来自同一个路由器，则不执行检查。默认是跳过检查</span>
    vrrp_garp_interval <span class="token number">0</span> <span class="token comment"># 单位秒，在一个网卡上每组gratuitous arp消息之间的延迟时间，默认为0</span>
    vrrp_gna_interval <span class="token number">0</span> <span class="token comment"># 单位秒，在一个网卡上每组na消息之间的延迟时间，默认为0</span>
<span class="token punctuation">}</span>
<span class="token comment"># 检测脚本配置</span>
vrrp_script checkhaproxy
<span class="token punctuation">{</span>
  script <span class="token string">"/etc/keepalived/check_nginx.sh"</span> <span class="token comment"># 检测脚本路径</span>
    interval <span class="token number">5</span> <span class="token comment"># 检测时间间隔（秒）</span>
    weight <span class="token number">0</span> <span class="token comment"># 根据该权重改变priority，当值为0时，不改变实例的优先级</span>
<span class="token punctuation">}</span>
<span class="token comment"># VRRP实例配置</span>
vrrp_instance VI_1 <span class="token punctuation">{</span>
  state BACKUP  <span class="token comment"># 设置初始状态为'备份'</span>
    interface eth0 <span class="token comment"># 设置绑定VIP的网卡，例如eth0</span>
    virtual_router_id <span class="token number">51</span>  <span class="token comment"># 配置集群VRID，互为主备的VRID需要是相同的值</span>
    nopreempt               <span class="token comment"># 设置非抢占模式，只能设置在state为backup的节点上</span>
    priority <span class="token number">100</span> <span class="token comment"># 设置优先级，值范围0～254，值越大优先级越高，最高的为master</span>
    advert_int <span class="token number">1</span> <span class="token comment"># 组播信息发送时间间隔，两个节点必须设置一样，默认为1秒</span>
<span class="token comment"># 验证信息，两个节点必须一致</span>
    authentication <span class="token punctuation">{</span>
      auth_type PASS <span class="token comment"># 认证方式，可以是PASS或AH两种认证方式</span>
        auth_pass <span class="token number">1111</span> <span class="token comment"># 认证密码</span>
    <span class="token punctuation">}</span>
  unicast_src_ip <span class="token number">10.0</span>.4.20  <span class="token comment"># 设置本机内网IP地址</span>
    unicast_peer <span class="token punctuation">{</span>
      <span class="token number">10.0</span>.4.21             <span class="token comment"># 对端设备的IP地址</span>
    <span class="token punctuation">}</span>
<span class="token comment"># VIP，当state为master时添加，当state为backup时删除</span>
  virtual_ipaddress <span class="token punctuation">{</span>
    <span class="token number">10.0</span>.4.99 <span class="token comment"># 设置高可用虚拟VIP，如果是腾讯云的CVM，需要填写控制台申请到的HAVIP地址。</span>
  <span class="token punctuation">}</span>
  notify_master <span class="token string">"/etc/keepalived/keepalived_notify.sh MASTER"</span> <span class="token comment"># 当切换到master状态时执行脚本</span>
    notify_backup <span class="token string">"/etc/keepalived/keepalived_notify.sh BACKUP"</span> <span class="token comment"># 当切换到backup状态时执行脚本</span>
    notify_fault <span class="token string">"/etc/keepalived/keepalived_notify.sh FAULT"</span> <span class="token comment"># 当切换到fault状态时执行脚本</span>
    notify_stop <span class="token string">"/etc/keepalived/keepalived_notify.sh STOP"</span> <span class="token comment"># 当切换到stop状态时执行脚本</span>
    garp_master_delay <span class="token number">1</span>    <span class="token comment"># 设置当切为主状态后多久更新ARP缓存</span>
    garp_master_refresh <span class="token number">5</span>   <span class="token comment"># 设置主节点发送ARP报文的时间间隔</span>
    <span class="token comment"># 跟踪接口，里面任意一块网卡出现问题，都会进入故障(FAULT)状态</span>
    track_interface <span class="token punctuation">{</span>
      eth0
    <span class="token punctuation">}</span>
  <span class="token comment"># 要执行的检查脚本</span>
  track_script <span class="token punctuation">{</span>
    checkhaproxy
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有几个注意事项：</p>
<ul>
<li>确保已经配置了garp相关参数。因为Keepalived依赖ARP报文更新IP信息，如果缺少这些参数，会导致某些场景下主设备不发送ARP，进而导致通信异常。garp相关参数配置如下：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>garp_master_delay <span class="token number">1</span>
garp_master_refresh <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>确定没有采用 strict 模式，即需要删除vrrp_strict配置。</li>
<li>配置中的<code v-pre>/etc/keepalived/check_nginx.sh</code>和<code v-pre>/etc/keepalived/keepalived_notify.sh</code>脚本文件，可分别拷贝自<a href="https://github.com/marmotedu/iam/blob/v1.0.8/scripts/check_nginx.sh" target="_blank" rel="noopener noreferrer">scripts/check_nginx.sh<ExternalLinkIcon/></a>和<a href="https://github.com/marmotedu/iam/blob/v1.0.8/scripts/keepalived_notify.sh" target="_blank" rel="noopener noreferrer">scripts/keepalived_notify.sh<ExternalLinkIcon/></a>。</li>
</ul>
<p><strong>然后，重启Keepalived：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl restart keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第三步-备服务器配置" tabindex="-1"><a class="header-anchor" href="#第三步-备服务器配置" aria-hidden="true">#</a> 第三步：备服务器配置</h3>
<p>进行备服务器配置也分为两步。</p>
<p><strong>首先，修改Keepalived配置文件。</strong></p>
<p>登陆服务器<code v-pre>10.0.4.21</code>，编辑<code v-pre>/etc/keepalived/keepalived.conf</code>，修改配置，修改后配置内容如下（参考：<a href="https://github.com/marmotedu/iam/blob/v1.0.8/configs/ha/10.0.4.21/keepalived.conf" target="_blank" rel="noopener noreferrer">configs/ha/10.0.4.21/keepalived.conf<ExternalLinkIcon/></a>）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 全局定义，定义全局的配置选项</span>
global_defs <span class="token punctuation">{</span>
<span class="token comment"># 指定keepalived在发生切换操作时发送email，发送给哪些email</span>
<span class="token comment"># 建议在keepalived_notify.sh中发送邮件</span>
  notification_email <span class="token punctuation">{</span>
    acassen@firewall.loc
  <span class="token punctuation">}</span>
  notification_email_from Alexandre.Cassen@firewall.loc <span class="token comment"># 发送email时邮件源地址</span>
    smtp_server <span class="token number">192.168</span>.200.1 <span class="token comment"># 发送email时smtp服务器地址</span>
    smtp_connect_timeout <span class="token number">30</span> <span class="token comment"># 连接smtp的超时时间</span>
    router_id VM-4-21-centos <span class="token comment"># 机器标识，通常可以设置为hostname</span>
    vrrp_skip_check_adv_addr <span class="token comment"># 如果接收到的报文和上一个报文来自同一个路由器，则不执行检查。默认是跳过检查</span>
    vrrp_garp_interval <span class="token number">0</span> <span class="token comment"># 单位秒，在一个网卡上每组gratuitous arp消息之间的延迟时间，默认为0</span>
    vrrp_gna_interval <span class="token number">0</span> <span class="token comment"># 单位秒，在一个网卡上每组na消息之间的延迟时间，默认为0</span>
<span class="token punctuation">}</span>
<span class="token comment"># 检测脚本配置</span>
vrrp_script checkhaproxy
<span class="token punctuation">{</span>
  script <span class="token string">"/etc/keepalived/check_nginx.sh"</span> <span class="token comment"># 检测脚本路径</span>
    interval <span class="token number">5</span> <span class="token comment"># 检测时间间隔（秒）</span>
    weight <span class="token number">0</span> <span class="token comment"># 根据该权重改变priority，当值为0时，不改变实例的优先级</span>
<span class="token punctuation">}</span>
<span class="token comment"># VRRP实例配置</span>
vrrp_instance VI_1 <span class="token punctuation">{</span>
  state BACKUP  <span class="token comment"># 设置初始状态为'备份'</span>
    interface eth0 <span class="token comment"># 设置绑定VIP的网卡，例如eth0</span>
    virtual_router_id <span class="token number">51</span>  <span class="token comment"># 配置集群VRID，互为主备的VRID需要是相同的值</span>
    nopreempt               <span class="token comment"># 设置非抢占模式，只能设置在state为backup的节点上</span>
    priority <span class="token number">50</span> <span class="token comment"># 设置优先级，值范围0～254，值越大优先级越高，最高的为master</span>
    advert_int <span class="token number">1</span> <span class="token comment"># 组播信息发送时间间隔，两个节点必须设置一样，默认为1秒</span>
<span class="token comment"># 验证信息，两个节点必须一致</span>
    authentication <span class="token punctuation">{</span>
      auth_type PASS <span class="token comment"># 认证方式，可以是PASS或AH两种认证方式</span>
        auth_pass <span class="token number">1111</span> <span class="token comment"># 认证密码</span>
    <span class="token punctuation">}</span>
  unicast_src_ip <span class="token number">10.0</span>.4.21  <span class="token comment"># 设置本机内网IP地址</span>
    unicast_peer <span class="token punctuation">{</span>
      <span class="token number">10.0</span>.4.20             <span class="token comment"># 对端设备的IP地址</span>
    <span class="token punctuation">}</span>
<span class="token comment"># VIP，当state为master时添加，当state为backup时删除</span>
  virtual_ipaddress <span class="token punctuation">{</span>
    <span class="token number">10.0</span>.4.99 <span class="token comment"># 设置高可用虚拟VIP，如果是腾讯云的CVM，需要填写控制台申请到的HAVIP地址。</span>
  <span class="token punctuation">}</span>
  notify_master <span class="token string">"/etc/keepalived/keepalived_notify.sh MASTER"</span> <span class="token comment"># 当切换到master状态时执行脚本</span>
    notify_backup <span class="token string">"/etc/keepalived/keepalived_notify.sh BACKUP"</span> <span class="token comment"># 当切换到backup状态时执行脚本</span>
    notify_fault <span class="token string">"/etc/keepalived/keepalived_notify.sh FAULT"</span> <span class="token comment"># 当切换到fault状态时执行脚本</span>
    notify_stop <span class="token string">"/etc/keepalived/keepalived_notify.sh STOP"</span> <span class="token comment"># 当切换到stop状态时执行脚本</span>
    garp_master_delay <span class="token number">1</span>    <span class="token comment"># 设置当切为主状态后多久更新ARP缓存</span>
    garp_master_refresh <span class="token number">5</span>   <span class="token comment"># 设置主节点发送ARP报文的时间间隔</span>
    <span class="token comment"># 跟踪接口，里面任意一块网卡出现问题，都会进入故障(FAULT)状态</span>
    track_interface <span class="token punctuation">{</span>
      eth0
    <span class="token punctuation">}</span>
  <span class="token comment"># 要执行的检查脚本</span>
  track_script <span class="token punctuation">{</span>
    checkhaproxy
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>然后，重启Keepalived：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl restart keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第四步-测试keepalived" tabindex="-1"><a class="header-anchor" href="#第四步-测试keepalived" aria-hidden="true">#</a> 第四步：测试Keepalived</h3>
<p>上面的配置中，<code v-pre>10.0.4.20</code>的优先级更高，所以正常情况下<code v-pre>10.0.4.20</code>将被选择为主节点，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/54/79/54968f40707b779e2ab70d3ab5a53479.png?wh=1920x500" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/54/79/54968f40707b779e2ab70d3ab5a53479.png?wh=1920x500" alt="图片"><ExternalLinkIcon/></a></p>
<p>接下来，我们分别模拟一些故障场景，来看下配置是否生效。</p>
<p><strong>场景1：Keepalived故障</strong></p>
<p>在<code v-pre>10.0.4.20</code>服务器上执行<code v-pre>sudo systemctl stop keepalived</code>模拟Keepalived故障，查看VIP，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/2a/ee/2a57e958bd9fce3b9c842c1cf09c48ee.png?wh=1920x544" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/2a/ee/2a57e958bd9fce3b9c842c1cf09c48ee.png?wh=1920x544" alt="图片"><ExternalLinkIcon/></a></p>
<p>可以看到，VIP从<code v-pre>10.0.4.20</code>服务器上，漂移到了<code v-pre>10.0.4.21</code>服务器上。查看<code v-pre>/var/log/keepalived.log</code>，可以看到<code v-pre>10.0.4.20</code>服务器新增如下一行日志：</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code>[2020-10-14 14:01:51] notify_stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>10.0.4.21</code>服务器新增如下日志：</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code>[2020-10-14 14:01:52] notify_master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>场景2：Nginx故障</strong></p>
<p>在<code v-pre>10.0.4.20</code>和<code v-pre>10.0.4.21</code>服务器上分别执行<code v-pre>sudo systemctl restart keepalived</code>，让VIP漂移到<code v-pre>10.0.4.20</code>服务器上。</p>
<p>在<code v-pre>10.0.4.20</code>服务器上，执行 <code v-pre>sudo systemctl stop nginx</code> 模拟Nginx故障，查看VIP，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/2a/ee/2a57e958bd9fce3b9c842c1cf09c48ee.png?wh=1920x544" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/2a/ee/2a57e958bd9fce3b9c842c1cf09c48ee.png?wh=1920x544" alt="图片"><ExternalLinkIcon/></a></p>
<p>可以看到，VIP从<code v-pre>10.0.4.20</code>服务器上，漂移到了<code v-pre>10.0.4.21</code>服务器上。查看<code v-pre>/var/log/keepalived.log</code>，可以看到<code v-pre>10.0.4.20</code>服务器新增如下一行日志：</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code>[2020-10-14 14:02:34] notify_fault
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>10.0.4.21</code> 服务器新增如下日志：</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code>[2020-10-14 14:02:35] notify_master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>场景3：Nginx恢复</strong></p>
<p>基于<strong>场景2</strong>，在<code v-pre>10.0.4.20</code>服务器上执行<code v-pre>sudo systemctl start nginx</code>恢复Nginx，查看VIP，如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/2a/ee/2a57e958bd9fce3b9c842c1cf09c48ee.png?wh=1920x544" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/2a/ee/2a57e958bd9fce3b9c842c1cf09c48ee.png?wh=1920x544" alt="图片"><ExternalLinkIcon/></a></p>
<p>可以看到，VIP仍然在<code v-pre>10.0.4.21</code>服务器上，没有被<code v-pre>10.0.4.20</code>抢占。查看<code v-pre>/var/log/keepalived.log</code>，可以看到<code v-pre>10.0.4.20</code>服务器新增如下一行日志：</p>
<div class="language-plain ext-plain line-numbers-mode"><pre v-pre class="language-plain"><code>[2020-10-14 14:03:44] notify_backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>10.0.4.21</code>服务器没有新增日志。</p>
<h3 id="第五步-vip绑定公网ip" tabindex="-1"><a class="header-anchor" href="#第五步-vip绑定公网ip" aria-hidden="true">#</a> 第五步：VIP绑定公网IP</h3>
<p>到这里，我们已经成功配置了Keepalived + Nginx的高可用方案。但是，我们的VIP是内网，还不能通过外网访问。这时候，我们需要将VIP绑定一个外网IP，供外网访问。在腾讯云上，可通过绑定弹性公网IP来实现外网访问，需要先申请公网IP，然后将VIP绑定弹性公网IP。下面我来讲讲具体步骤。</p>
<p>申请公网IP：</p>
<ol>
<li>登录<strong>私有网络控制台。</strong></li>
<li>在左侧导航栏中，选择【IP与网卡】&gt;【弹性公网IP】。</li>
<li>在弹性公网IP管理页面，选择所在地域，单击【申请】。</li>
</ol>
<p>将VIP绑定弹性公网IP：</p>
<ol>
<li>登录<strong>私有网络控制台</strong>。</li>
<li>在左侧导航栏中，选择【IP与网卡】&gt;【高可用虚拟】。</li>
<li>单击需要绑定的HAVIP所在行的【绑定】。</li>
<li>在弹出界面中，选择需要绑定的公网IP即可，如下图所示：</li>
</ol>
<p><a href="https://static001.geekbang.org/resource/image/83/62/83bc9f4595325e9d339e7c3269aa3462.png?wh=1388x666" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/83/62/83bc9f4595325e9d339e7c3269aa3462.png?wh=1388x666" alt="图片"><ExternalLinkIcon/></a></p>
<p>绑定的弹性公网IP是<code v-pre>106.52.252.139</code>。</p>
<p>这里提示下，腾讯云平台中，如果HAVIP没有绑定实例，绑定HAVIP的EIP会处于闲置状态，按<code v-pre>¥0.2/小时</code> 收取闲置费用。所以，你需要正确配置高可用应用，确保绑定成功。</p>
<h3 id="第六步-测试公网访问" tabindex="-1"><a class="header-anchor" href="#第六步-测试公网访问" aria-hidden="true">#</a> 第六步：测试公网访问</h3>
<p>最后，你可以通过执行如下命令来测试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> -H<span class="token string">"Host: iam.api.marmotedu.com"</span> http://106.52.252.139/healthz -H<span class="token string">"iam.api.marmotedu.com"</span>
<span class="token punctuation">{</span><span class="token string">"status"</span><span class="token builtin class-name">:</span><span class="token string">"ok"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们可以成功通过公网访问后端的高可用服务。到这里，我们成功部署了一个可用性很高的IAM应用。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天，我主要讲了如何使用Nginx和Keepalived，来部署一个高可用的IAM应用。</p>
<p>为了部署一个高可用的IAM应用，我们至少需要两台服务器，并且部署相同的服务iam-apiserver、iam-authz-server、iam-pump。而且，选择其中一台服务器部署数据库服务：MariaDB、Redis、MongoDB。</p>
<p>为了安全和性能，iam-apiserver、iam-authz-server、iam-pump服务都是通过内网来访问数据库服务的。这一讲，我还介绍了如何配置Nginx来实现负载均衡，如何配置Keepalived来实现Nginx的高可用。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>思考下，当前部署架构下如果iam-apiserver需要扩容，可以怎么扩容？</li>
<li>思考下，当VIP切换时，如何实现告警功能，给系统运维人员告警？</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '32.md' style='float:left'>⬆️上一节🔗  </a><a href = '34.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/projects/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://cubxxw.com/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © ：本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


