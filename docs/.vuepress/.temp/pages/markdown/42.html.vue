<template><div><h1 id="docker-—-nginx篇" tabindex="-1"><a class="header-anchor" href="#docker-—-nginx篇" aria-hidden="true">#</a> docker — Nginx篇</h1>
<nav class="table-of-contents"><ul><li><router-link to="#安装nginx">安装nginx</router-link><ul><li><router-link to="#搜索nginx镜像">搜索nginx镜像</router-link></li><li><router-link to="#拉取nginx镜像">拉取nginx镜像</router-link></li></ul></li><li><router-link to="#docker启动nginx">docker启动nginx</router-link><ul><li><router-link to="#方法一">方法一</router-link></li></ul></li><li><router-link to="#测试nginx是否启动成功">测试nginx是否启动成功</router-link></li><li><router-link to="#请求代理">请求代理</router-link></li><li><router-link to="#ssl证书配置">ssl证书配置</router-link></li><li><router-link to="#http强转https">http强转https</router-link></li><li><router-link to="#查看当前nginx的状态">查看当前nginx的状态</router-link></li><li><router-link to="#代理静态文件-如图片">代理静态文件（如图片）</router-link></li><li><router-link to="#静态页面代理">静态页面代理</router-link></li><li><router-link to="#配置跨域">配置跨域</router-link></li><li><router-link to="#设置最大body的大小">设置最大body的大小</router-link></li><li><router-link to="#设置请求头的大小">设置请求头的大小</router-link></li><li><router-link to="#客户端保持连接的时间">客户端保持连接的时间</router-link></li></ul></nav>
<p>[toc]</p>
<h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a> 安装nginx</h2>
<h3 id="搜索nginx镜像" tabindex="-1"><a class="header-anchor" href="#搜索nginx镜像" aria-hidden="true">#</a> 搜索nginx镜像</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker search --limit 3  nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://sm.nsddd.top//typora/image-20220916222258225.png?mail:3293172751@qq.com" alt="image-20220916222258225"></p>
<h3 id="拉取nginx镜像" tabindex="-1"><a class="header-anchor" href="#拉取nginx镜像" aria-hidden="true">#</a> 拉取nginx镜像</h3>
<blockquote>
<p>也可以不用拉取，运行时docker发现本地没有镜像会自动在远程仓库拉取</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull nginx 
<span class="token comment">#默认拉取最新版本的nginx，也可以手动指定nginx版本，如：docker pull nginx:1.20.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker启动nginx" tabindex="-1"><a class="header-anchor" href="#docker启动nginx" aria-hidden="true">#</a> docker启动nginx</h2>
<h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3>
<blockquote>
<p><strong>‼️❗这里有一点很重要，所以要先说：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> nginx01 <span class="token parameter variable">-p</span> <span class="token number">3344</span>:80 nginx
<span class="token comment"># 命令详解：</span>
<span class="token comment"># docker run 启动一个镜像</span>
<span class="token comment"># -d 表示后台允许</span>
<span class="token comment"># --name nginx01  表示为当前容器起一个别名</span>
<span class="token comment"># -p 3344:80 表示将本机的3344端口映射到nginx镜像的80端口</span>
<span class="token comment">#  nginx 镜像 REPOSITORY标识；或者可以使用IMAGE ID，通过命令docker images 先查看出要启动的镜像的唯一标识，使用docker images命令，查询到镜像信息，然后找到镜像的REPOSITORY标识或IMAGE ID标识即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过下面命令可以正常启动一个nginx容器没有问题，但是当我们需要修改nginx的配置文件时就会很麻烦了，需要进入到容器内部，修改配置，退出容器，然后再进行容器重启，过程较为繁琐。为了解决此问题，我们可以在容器启动的过程中添加一条命令，<strong>实现nginx 的配置文件和本地主机指定的配置文件形成关联映射</strong>，那么以后只要我们改动本地的配置文件后就会自动映射到nginx容器中，这样极大的简化了修改容器配置文件的流程。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/nginx/conf.d 
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/nginx/html
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/nginx/logs
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在本地主机创建一个映射目录 -p表示递归创建</p>
<p>然后启动容器，本次启动为了进入容器去复制nginx的配置文件，并不是为了真正的“启动”</p>
<p>进入nginx容器后，使用<code v-pre>whereis nginx命令</code>查看相关的配置文件位置，找到nginx配置路径，记住路径，然后执行<code v-pre>exit</code> 退出容器，使用</p>
<p><img src="https://sm.nsddd.top//typora/image-20220916223802934.png?mail:3293172751@qq.com" alt="image-20220916223802934"></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#docker cp 容器id:本地存放配置文件的绝对路径 容器中配置文件存放的路径</span>
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/etc/nginx/nginx.conf /docker/nginx/conf/nginx.conf
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/etc/nginx/conf.d /docker/nginx/conf.d
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/usr/share/nginx/html /docker/nginx
<span class="token function">docker</span> stop nginx  <span class="token comment"># 关闭容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 9e58af85cac4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将其中的<code v-pre>default.conf</code>文件拷贝出到本地存放，此时可以准备重启进行一起启动，并执行配置文件映射命令了。<code v-pre>docker ps -a</code>查询全部的容器，可以将不用的删除，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker rm 容器id(删除命令)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后使用:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-p</span> <span class="token number">3344</span>:80 <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /docker/nginx/conf.d:/etc/nginx/conf.d <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /docker/nginx/html:/usr/share/nginx/html <span class="token punctuation">\</span>
<span class="token parameter variable">-v</span> /docker/nginx/logs:/var/log/nginx <span class="token punctuation">\</span>
<span class="token parameter variable">-d</span>  nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新创建一个容器并运行即可。</p>
<p><img src="https://sm.nsddd.top//typora/image-20220916233240835.png?mail:3293172751@qq.com" alt="image-20220916233240835"></p>
<p>踩坑记录：-v属性需要在-d之前，具体咋回事说不太清楚，反正-v放到最后是有问题的，无法映射上的。</p>
<p><strong><code v-pre>--restart=always</code>:设置容器自启动，我们有两种方式设置自启动：</strong></p>
<ul>
<li>
<p>创建容器时候设置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run --restart=always 容器id或者容器name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>已经存在的容器依旧也是可设置自启动❗</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker update --restart=always 容器id或者容器name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>取消自启动</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker update --restart=no 容器id或者容器name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>批量取消容器自启动</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker update --restart=no $(docker ps -aq)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
<h2 id="测试nginx是否启动成功" tabindex="-1"><a class="header-anchor" href="#测试nginx是否启动成功" aria-hidden="true">#</a> 测试nginx是否启动成功</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>curl localhost:3344  #linux命令，用于访问置顶url看是否可以读取到页面信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="请求代理" tabindex="-1"><a class="header-anchor" href="#请求代理" aria-hidden="true">#</a> 请求代理</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>location /test/ {  
    proxy_pass http://127.0.0.1:8888/;   
    proxy_read_timeout 90;   
    proxy_http_version 1.1;   
    proxy_set_header Upgrade $http_upgrade;   
    proxy_set_header Connection $http_connection;  
    proxy_set_header Host $host;  
    proxy_set_header X-Real-IP $remote_addr;  
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;  
    proxy_cache_bypass $http_upgrade; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>请求 <a href="https://link.zhihu.com/?target=http%3A//127.0.0.1/test/index.html" target="_blank" rel="noopener noreferrer">http://127.0.0.1/test/index.html<ExternalLinkIcon/></a> 会代理到 <a href="https://link.zhihu.com/?target=http%3A//127.0.0.1%3A8888/index.html" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8888/index.html<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="ssl证书配置" tabindex="-1"><a class="header-anchor" href="#ssl证书配置" aria-hidden="true">#</a> ssl证书配置</h2>
<ul>
<li>检查ssl是否安装</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/usr/local/nginx/sbin/nginx -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>配置nginx.conf</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
    # 服务器端口使用443，开启ssl, 这里ssl就是上面安装的ssl模块
    listen       443 ssl;
    # 填写绑定证书的域名 ，多个以空格分开
    server_name  &lt;a href="https://www.aliyun.com/minisite/goods?userCode=veyumm2k" target="_blank">hack520.com&lt;/a> &lt;a href="https://www.aliyun.com/minisite/goods?userCode=veyumm2k" target="_blank">www.hack520.com&lt;/a>;

    # ssl证书地址
    ssl_certificate     /usr/local/nginx/cert/ssl.pem;  # pem文件的路径
    ssl_certificate_key  /usr/local/nginx/cert/ssl.key; # key文件的路径

    # ssl验证相关配置
    ssl_session_timeout  5m;    #缓存有效期
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;    #加密算法
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;    #安全链接可选的加密协议
    ssl_prefer_server_ciphers on;   #使用服务器端的首选算法

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http强转https" tabindex="-1"><a class="header-anchor" href="#http强转https" aria-hidden="true">#</a> http强转https</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {   
    listen 80;  
    server_name www.test.com;  
    default_type 'text/html';   
    charset utf-8;   
    rewrite ^/(.*) https://$server_name/$1 permanent; #跳转到Https 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看当前nginx的状态" tabindex="-1"><a class="header-anchor" href="#查看当前nginx的状态" aria-hidden="true">#</a> 查看当前nginx的状态</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>location /status {
    stub_status on;
    access_log /var/log/nginx/status.log; #日志
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>配置好并重启 可以通过 <a href="https://link.zhihu.com/?target=http%3A//127.0.0.1/status" target="_blank" rel="noopener noreferrer">http://127.0.0.1/status<ExternalLinkIcon/></a> 来查看当前nginx的状态</p>
</blockquote>
<h2 id="代理静态文件-如图片" tabindex="-1"><a class="header-anchor" href="#代理静态文件-如图片" aria-hidden="true">#</a> 代理静态文件（如图片）</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>location /a/b/ {   
    root /opt/docker/nginx/; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如访问 <a href="https://link.zhihu.com/?target=http%3A//127.0.0.1/a/b/test.png" target="_blank" rel="noopener noreferrer">http://127.0.0.1/a/b/test.png<ExternalLinkIcon/></a> 实际是会代理到 <strong>/opt/docker/nginx/a/b</strong>目录下的<strong>test.png</strong></p>
</blockquote>
<h2 id="静态页面代理" tabindex="-1"><a class="header-anchor" href="#静态页面代理" aria-hidden="true">#</a> 静态页面代理</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>location /hello/ {   
    index index.html;   
    root /opt/docker/nginx/html/; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>访问 <a href="https://link.zhihu.com/?target=http%3A//127.0.0.1/hello/" target="_blank" rel="noopener noreferrer">http://127.0.0.1/hello/<ExternalLinkIcon/></a> 会代理到**/opt/docker/nginx/html/<strong>路径下的</strong>index.html**页面</p>
</blockquote>
<h2 id="配置跨域" tabindex="-1"><a class="header-anchor" href="#配置跨域" aria-hidden="true">#</a> 配置跨域</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Real-Port $remote_port;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置最大body的大小" tabindex="-1"><a class="header-anchor" href="#设置最大body的大小" aria-hidden="true">#</a> 设置最大body的大小</h2>
<blockquote>
<p>如上传文件，指定最大的文件大小</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>client_max_body_size 50m;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置请求头的大小" tabindex="-1"><a class="header-anchor" href="#设置请求头的大小" aria-hidden="true">#</a> 设置请求头的大小</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server_names_hash_bucket_size 256;
client_header_buffer_size 256k;
large_client_header_buffers 4 256k;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端保持连接的时间" tabindex="-1"><a class="header-anchor" href="#客户端保持连接的时间" aria-hidden="true">#</a> 客户端保持连接的时间</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>keepalive_timeout 60s;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


