<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第32节-软件部署实战-上-部署方案及负载均衡、高可用组件介绍" tabindex="-1"><a class="header-anchor" href="#第32节-软件部署实战-上-部署方案及负载均衡、高可用组件介绍" aria-hidden="true">#</a> 第32节 软件部署实战（上）：部署方案及负载均衡、高可用组件介绍</h1>
<br>
<div><a href = '31.md' style='float:left'>⬆️上一节🔗  </a><a href = '33.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#部署方案">部署方案</router-link></li><li><router-link to="#nginx安装和配置">Nginx安装和配置</router-link><ul><li><router-link to="#nginx功能简介">Nginx功能简介</router-link></li><li><router-link to="#nginx安装步骤">Nginx安装步骤</router-link></li></ul></li><li><router-link to="#keepalived安装和配置">Keepalived安装和配置</router-link><ul><li><router-link to="#keepalived安装步骤">Keepalived安装步骤</router-link></li><li><router-link to="#keepalived配置文件解析">Keepalived配置文件解析</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#课后练习">课后练习</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>接下来，我们就进入到这门课的最后一个模块，服务部署部分的学习。在这一模块中，我会带着你一步一步地部署一个生产级可用的IAM应用。</p>
<p>在 <a href="https://time.geekbang.org/column/article/378082" target="_blank" rel="noopener noreferrer">03讲<ExternalLinkIcon/></a> 中，我们快速在单机上部署了IAM系统，但这样的系统缺少高可用、弹性扩容等能力，是很脆弱的，遇到流量波峰、发布变更很容易出问题。在系统真正上线前，我们需要重新调整部署架构，来保证我们的系统具有负载均衡、高可用、弹性伸缩等核心运维能力。</p>
<p>考虑到你手中的系统资源有限，这一模块会尽量简单地展示如何部署一个相对高可用的IAM系统。按照我讲的部署方法，基本上可以上线一个中小型的系统。</p>
<p>在这一模块中，我会介绍两种部署方式。</p>
<ul>
<li>第一种是传统的部署方式，基于物理机/虚拟机来部署，容灾、弹性伸缩能力要部署人员自己实现。</li>
<li>第二种是容器化部署方式，基于Docker、Kubernetes来部署，容灾、弹性伸缩等能力，可以借助Kubernetes自带的能力来实现。</li>
</ul>
<p>接下来的三讲，我们先来看下传统的部署方式，也就是如何基于虚拟机来部署IAM应用。今天我主要讲跟IAM部署相关的两个组件，<code v-pre>Nginx + Keepalived</code>的相关功能。</p>
<h2 id="部署方案" tabindex="-1"><a class="header-anchor" href="#部署方案" aria-hidden="true">#</a> 部署方案</h2>
<p>先来整体看下我们的部署方案。</p>
<p>这里，我采用<code v-pre>Nginx + Keepalived</code>来部署一个高可用的架构，同时将组件都部署在内网，来保证服务的安全和性能。</p>
<p>部署需要两台物理机/虚拟机，组件之间通过内网访问。所需的服务器如下表所示：</p>
<p><img src="https://sm.nsddd.top/sm202303052246418.jpeg" alt="图片"></p>
<p>两台服务器均为腾讯云CVM，VIP（Virtual IP，虚拟IP）为<code v-pre>10.0.4.99</code>。部署架构如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202303052246559.jpeg" alt="图片"></p>
<p>这里我来具体介绍下图中的部署架构。部署采用的这两台CVM服务器，一主一备，它们共享同一个VIP。同一时刻，VIP只在一台主设备上生效，当主服务器出现故障时，备用服务器会自动接管VIP，继续提供服务。</p>
<p>主服务器上部署了<code v-pre>iam-apiserver</code>、<code v-pre>iam-authz-server</code>、<code v-pre>iam-pump</code>和数据库<code v-pre>mongodb</code>、<code v-pre>redis</code>、<code v-pre>mysql</code>。备服务器部署了<code v-pre>iam-apiserver</code>、<code v-pre>iam-authz-server</code>和<code v-pre>iam-pump</code>。备服务器中的组件通过内网<code v-pre>10.0.4.20</code>访问主服务器中的数据库组件。</p>
<p>主备服务器同时安装了Keepalived和Nginx，通过Nginx的反向代理功能和负载均衡功能，实现后端服务<code v-pre>iam-apiserver</code>和<code v-pre>iam-authz-server</code>的高可用，通过Keepalived实现Nginx的高可用。</p>
<p>我们通过给虚拟IP绑定腾讯云弹性公网IP，从而使客户端可以通过外网IP访问内网的Nginx服务器（<code v-pre>443</code>端口），如果想通过域名访问内网，还可以申请域名指向该弹性公网IP。</p>
<p>通过以上部署方案，我们可以实现一个具有较高可用性的IAM系统，它主要具备下面这几个能力。</p>
<ul>
<li>高性能：可以通过Nginx的负载均衡功能，水平扩容IAM服务，从而实现高性能。</li>
<li>具备容灾能力：通过Nginx实现IAM服务的高可用，通过Keepalived实现Nginx的高可用，从而实现核心组件的高可用。</li>
<li>具备水平扩容能力：通过Nginx的负载均衡功能，实现IAM服务的水平扩容。</li>
<li>高安全性：将所有组件部署在内网，客户端只能通过<code v-pre>VIP:443</code>端口访问Nginx服务，并且通过开启TLS认证和JWT认证，保障服务有一个比较高的安全性。因为是腾讯云CVM，所以也可以借助腾讯云的能力再次提高服务器的安全性，比如安全组、DDoS防护、主机安全防护、云监控、云防火墙等。</li>
</ul>
<p>这里说明下，为了简化IAM应用的安装配置过程，方便你上手实操，有些能力，例如数据库高可用、进程监控和告警、自动伸缩等能力的构建方式，这里没有涉及到。这些能力的构建方式，你可以在日后的工作中慢慢学习和掌握。</p>
<p>接下来，我们看下这个部署方案中用到的两个核心组件，Nginx和Keepalived。我会介绍下它们的安装和配置方法，为你下一讲的学习做准备。</p>
<h2 id="nginx安装和配置" tabindex="-1"><a class="header-anchor" href="#nginx安装和配置" aria-hidden="true">#</a> Nginx安装和配置</h2>
<h3 id="nginx功能简介" tabindex="-1"><a class="header-anchor" href="#nginx功能简介" aria-hidden="true">#</a> Nginx功能简介</h3>
<p>这里先简单介绍下Nginx。Nginx是一个轻量级、高性能、开源的HTTP服务器和反向代理服务器。IAM系统使用了Nginx反向代理和负载均衡的功能，下面我就来分别介绍下。</p>
<p>为什么需要反向代理呢？在实际的生产环境中，服务部署的网络（内网）跟外部网络（外网）通常是不通的，这就需要一台既能够访问内网又能够访问外网的服务器来做中转，这种服务器就是反向代理服务器。Nginx作为反向代理服务器，简单的配置如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>server <span class="token punctuation">{</span>
    listen      <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  iam<span class="token punctuation">.</span>marmotedu<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
    client_max_body_size 1024M<span class="token punctuation">;</span>

    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_set_header Host $http_host<span class="token punctuation">;</span>
        proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Host $http_host<span class="token punctuation">;</span>
        proxy_set_header X<span class="token operator">-</span>Real<span class="token operator">-</span>IP $remote_addr<span class="token punctuation">;</span>
        proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
        proxy_pass  http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8080</span><span class="token operator">/</span><span class="token punctuation">;</span>
        client_max_body_size 100m<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx的反向代理功能，能够根据不同的配置规则转发到不同的后端服务器上。假如我们在IP为<code v-pre>x.x.x.x</code>的服务器上，用上面说的Nginx配置启动Nginx，当我们访问<code v-pre>http://x.x.x.x:80/</code>时，会将请求转发到<code v-pre>http://127.0.0.1:8080/</code>。<code v-pre>listen 80</code>指定了Nginx服务器的监听端口，<code v-pre>proxy_pass http://127.0.0.1:8080/</code>则指定了转发路径。</p>
<p>Nginx另一个常用的功能是七层负载均衡。所谓的负载均衡，就是指当Nginx收到一个HTTP请求后，会根据负载策略将请求转发到不同的后端服务器上。比如iam-apiserver部署在两台服务器A和B上，当请求到达Nginx后，Nginx会根据A和B服务器上的负载情况，将请求转发到负载较小的那台服务器上。</p>
<p>这里要求iam-apiserver是无状态的服务。Nginx有多种负载均衡策略，可以满足不同场景下的负载均衡需求。</p>
<h3 id="nginx安装步骤" tabindex="-1"><a class="header-anchor" href="#nginx安装步骤" aria-hidden="true">#</a> <strong>Nginx安装步骤</strong></h3>
<p>接下来，我就来介绍下如何安装和配置Nginx。</p>
<p>我们分别在<code v-pre>10.0.4.20</code>和<code v-pre>10.0.4.21</code>服务器上执行如下步骤，安装Nginx。</p>
<p>在CentOS 8.x系统上，我们可以使用yum命令来安装，具体安装过程可以分为下面4个步骤。</p>
<p>第一步，安装Nginx：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，确认Nginx安装成功：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ nginx <span class="token parameter variable">-vnginx</span> version: nginx/1.14.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第三步，启动Nginx，并设置开机启动：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl start nginx$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Nginx默认监听<code v-pre>80</code>端口，启动Nginx前要确保<code v-pre>80</code>端口没有被占用。当然，你也可以通过修改Nginx配置文件<code v-pre>/etc/nginx/nginx.conf</code>修改Nginx监听端口。</p>
<p>第四步，查看Nginx启动状态：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ systemctl status nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出中有<code v-pre>active (running)</code>字符串，说明成功启动。如果Nginx启动失败，你可以查看<code v-pre>/var/log/nginx/error.log</code>日志文件，定位错误原因。</p>
<h2 id="keepalived安装和配置" tabindex="-1"><a class="header-anchor" href="#keepalived安装和配置" aria-hidden="true">#</a> Keepalived安装和配置</h2>
<p>Nginx自带负载均衡功能，并且当Nginx后端某个服务器故障后，Nginx会自动剔除该服务器，将请求转发到可用的服务器，通过这种方式实现后端API服务的高可用。但是 Nginx是单点的，如果Nginx挂了，后端的所有服务器就都不能访问，所以在实际生产环境中，也需要对Nginx做高可用。</p>
<p><strong>业界最普遍采用的方法是通过<code v-pre>Keepalived</code>对前端Nginx实现高可用。<code v-pre>Keepalived + Nginx</code>的高可用方案具有服务功能强大、维护简单等特点。</strong></p>
<p>接下来，我们来看下如何安装和配置Keepalived。</p>
<h3 id="keepalived安装步骤" tabindex="-1"><a class="header-anchor" href="#keepalived安装步骤" aria-hidden="true">#</a> Keepalived安装步骤</h3>
<p>我们分别在<code v-pre>10.0.4.20</code>和<code v-pre>10.0.4.21</code>服务器上执行下面5个步骤，安装Keepalived。</p>
<p>第一步，下载Keepalived的最新版本（这门课安装了当前的最新版本 <code v-pre>2.1.5</code>）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">wget</span> https://www.keepalived.org/software/keepalived-2.1.5.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，安装Keepalived：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> openssl-devel <span class="token comment"># keepalived依赖OpenSSL，先安装依赖</span>
$ <span class="token function">tar</span> <span class="token parameter variable">-xvzf</span> keepalived-2.1.5.tar.gz
$ <span class="token builtin class-name">cd</span> keepalived-2.1.5
$ ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/keepalived
$ <span class="token function">make</span>
$ <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，配置Keepalived：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">mkdir</span> /etc/keepalived <span class="token comment"># 安装后，默认没有创建/etc/keepalived目录</span>
$ <span class="token function">sudo</span> <span class="token function">cp</span> /usr/local/keepalived/etc/keepalived/keepalived.conf  /etc/keepalived/keepalived.conf
$ <span class="token function">sudo</span> <span class="token function">cp</span> /usr/local/keepalived/etc/sysconfig/keepalived /etc/sysconfig/keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Keepalived的systemd uint配置，默认使用了<code v-pre>/usr/local/keepalived/etc/sysconfig/keepalived</code>作为其<code v-pre>EnvironmentFile</code>，我们还需要把它修改为<code v-pre>/etc/sysconfig/keepalived</code>文件。编辑<code v-pre>/lib/systemd/system/keepalived.service</code>文件，设置<code v-pre>EnvironmentFile</code>，值如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">EnvironmentFile</span><span class="token operator">=</span>-/etc/sysconfig/keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第四步，启动Keepalived，并设置开机启动：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl start keepalived$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里要注意，Keepalived启动时不会校验配置文件是否正确，所以我们要小心修改配置，防止出现意想不到的问题。</p>
<p>第五步，查看Keepalived的启动状态：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ systemctl status keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出中有<code v-pre>active (running)</code>字符串，说明成功启动。Keepalived的日志保存在<code v-pre>/var/log/messages</code>中，你有需要的话可以查看。</p>
<h3 id="keepalived配置文件解析" tabindex="-1"><a class="header-anchor" href="#keepalived配置文件解析" aria-hidden="true">#</a> Keepalived配置文件解析</h3>
<p>Keepalived的默认配置文件为<code v-pre>/etc/keepalived/keepalived.conf</code>，下面是一个Keepalived配置：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token comment"># 全局定义，定义全局的配置选项</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里解析下配置文件，大致分为下面4个部分。</p>
<ul>
<li>global_defs：全局定义，定义全局的配置选项。</li>
<li>vrrp_script checkhaproxy：检测脚本配置。</li>
<li>vrrp_instance VI_1：VRRP实例配置。</li>
<li>virtual_server：LVS配置。如果没有配置LVS+Keepalived，就不用设置这个选项。这门课中，我们使用Nginx代替LVS，所以无需配置<code v-pre>virtual_server</code>（配置示例中不再展示）。</li>
</ul>
<p>只有在网络故障或者自身出问题时，Keepalived才会进行VIP切换。但实际生产环境中，我们往往使用Keepalived来监控其他进程，当业务进程出故障时切换VIP，从而保障业务进程的高可用。</p>
<p>为了让Keepalived感知到Nginx的运行状况，我们需要指定<code v-pre>vrrp_script</code>脚本，<code v-pre>vrrp_script</code>脚本可以根据退出码，判断Nginx进程是否正常，<code v-pre>0</code>正常，非<code v-pre>0</code>不正常。当不正常时，Keepalived会进行VIP切换。为了实现业务进程的监控，我们需要设置<code v-pre>vrrp_script</code>和<code v-pre>track_script</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vrrp_script checkhaproxy
<span class="token punctuation">{</span>
    script <span class="token string">"/etc/keepalived/check_nginx.sh"</span>
    interval <span class="token number">3</span>
    weight <span class="token parameter variable">-20</span>
<span class="token punctuation">}</span>

vrrp_instance <span class="token builtin class-name">test</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    track_script
    <span class="token punctuation">{</span>
        checkhaproxy
    <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我介绍下上面配置中的一些配置项。</p>
<ul>
<li>script：指定脚本路径。</li>
<li>interval：表示Keepalived执行脚本的时间间隔（秒）。</li>
<li>weight：检测权重，可以改变<code v-pre>priority</code>的值。例如，<code v-pre>-20</code>表示检测失败时，优先级<code v-pre>-20</code>，成功时不变。<code v-pre>20</code>表示检测成功时，优先级<code v-pre>+20</code>，失败时不变。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>今天我主要讲了跟IAM部署相关的两个组件，Nginx + Keepalived的相关功能。</p>
<p>我们可以基于物理机/虚拟机来部署IAM应用，在部署IAM应用时，需要确保整个应用具备高可用和弹性扩缩容能力。你可以通过Nginx的反向代理功能和负载均衡功能实现后端服务iam-apiserver和iam-authz-server的高可用，通过Keepalived实现Nginx的高可用，通过Nginx + Keepalived组合，来实现IAM应用的高可用和弹性伸缩能力。</p>
<h2 id="课后练习" tabindex="-1"><a class="header-anchor" href="#课后练习" aria-hidden="true">#</a> 课后练习</h2>
<ol>
<li>Keepalived的主备服务器要接在同一个交换机上。思考下，如果交换机故障，如何实现整个系统的高可用？</li>
<li>iam-pump是有状态的服务，思考下，如何实现iam-pump的高可用？</li>
</ol>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '31.md' style='float:left'>⬆️上一节🔗  </a><a href = '33.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


