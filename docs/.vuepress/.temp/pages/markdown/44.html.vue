<template><div><h1 id="docker搭建gitlab-服务器" tabindex="-1"><a class="header-anchor" href="#docker搭建gitlab-服务器" aria-hidden="true">#</a> docker搭建Gitlab 服务器</h1>
<p>[toc]</p>
<h2 id="警告" tabindex="-1"><a class="header-anchor" href="#警告" aria-hidden="true">#</a> 警告！</h2>
<div class="custom-container danger"><p class="custom-container-title">⚠️ 警告</p>
<p>个人纯属爱好，搭建个人的gitlab服务器，gitlab很消耗内存</p>
</div>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>我需要在服务器上面部署一个仓库，方便提交，而且供主机和服务器之间的数据传输</p>
<ul>
<li>系统：centos</li>
</ul>
<h2 id="安装镜像" tabindex="-1"><a class="header-anchor" href="#安装镜像" aria-hidden="true">#</a> 安装镜像</h2>
<p>🇫🇮<strong>查找镜像</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 查找Gitlab镜像
docker search gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>🤏拉取Gitlab镜像</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker pull gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>🌠启动docker镜像</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 启动容器</span>
<span class="token function">docker</span> run <span class="token punctuation">\</span>
 <span class="token parameter variable">-itd</span>  <span class="token punctuation">\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9980</span>:80 <span class="token punctuation">\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9922</span>:22 <span class="token punctuation">\</span>
 <span class="token parameter variable">-v</span> D:<span class="token punctuation">\</span>docker<span class="token punctuation">\</span>gitlab<span class="token punctuation">\</span>etc:/etc/gitlab  <span class="token punctuation">\</span>
 <span class="token parameter variable">-v</span> D:<span class="token punctuation">\</span>docker<span class="token punctuation">\</span>gitlab<span class="token punctuation">\</span>log:/var/log/gitlab <span class="token punctuation">\</span>
 <span class="token parameter variable">-v</span> D:<span class="token punctuation">\</span>docker<span class="token punctuation">\</span>gitlab<span class="token punctuation">\</span>opt:/var/opt/gitlab <span class="token punctuation">\</span>
 <span class="token parameter variable">--restart</span> always <span class="token punctuation">\</span>
 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\</span>
 <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\</span>
 gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 启动容器
docker run -itd -p 9980:80 -p 9922:22 -v D:\docker\gitlab\etc:/etc/gitlab -v D:\docker\gitlab\log:/var/log/gitlab -v D:\docker\gitlab\opt:/var/opt/gitlab  --restart always --privileged=true --name gitlab gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>🎈 解释：</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-i</td>
<td>以交互模式运行容器，通常与 -t 同时使用命令解释</td>
</tr>
<tr>
<td>-t</td>
<td>为容器重新分配一个伪输入终端，通常与 -i 同时使用</td>
</tr>
<tr>
<td>-d</td>
<td>后台运行容器，并返回容器 ID</td>
</tr>
<tr>
<td>-p 9980:80</td>
<td>将容器内 80 端口映射至宿主机 9980 端口，这是访问 gitlab 的端口</td>
</tr>
<tr>
<td>-p 9922:22</td>
<td>将容器内 22 端口映射至宿主机 9922 端口，这是访问 ssh 的端口</td>
</tr>
<tr>
<td>-v /home/gitlab/etc:/etc/gitlab</td>
<td>将容器 / etc/gitlab 目录挂载到宿主机 / usr/local/gitlab-test/etc 目录下，若宿主机内此目录不存在将会自动创建，其他两个挂载同这个一样</td>
</tr>
<tr>
<td>--restart always</td>
<td>容器自启动</td>
</tr>
<tr>
<td>--privileged=true</td>
<td>让容器获取宿主机 root 权限</td>
</tr>
<tr>
<td>--name gitlab</td>
<td>设置容器名称为 gitlab</td>
</tr>
<tr>
<td>gitlab/gitlab-ce</td>
<td>镜像的名称，这里也可以写镜像 ID</td>
</tr>
</tbody>
</table>
<p><strong>🤳修改配置</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#进容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab /bin/bash
 
<span class="token comment">#修改gitlab.rb</span>
<span class="token function">vi</span> /etc/gitlab/gitlab.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>❤️ 加入如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#gitlab访问地址，可以写域名。如果端口不写的话默认为80端口</span>
external_url <span class="token string">'http://192.168.124.194'</span>

<span class="token comment">#ssh主机ip</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'gitlab_ssh_host'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'192.168.124.194'</span>

<span class="token comment">#ssh连接端口</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'gitlab_shell_ssh_port'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9922</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🤏让配置生效</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>⚠️ 注意不要重启，<code v-pre>/etc/gitlab/gitlab.rb</code>文件的配置会映射到<code v-pre>gitlab.yml</code>这个文件，由于咱们在<a href="https://so.csdn.net/so/search?q=docker&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">docker<ExternalLinkIcon/></a>中运行，在<code v-pre>gitlab</code>上生成的<code v-pre>http</code>地址应该是http://192.168.124.194:9980,所以，要修改下面文件</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 修改http和ssh配置
vi /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml
 
  gitlab:
    host: 192.168.124.194
    port: 9980 # 这里改为9980
    https: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20220924225234548.png?xxw@nsddd.top" alt="image-20220924225234548"></p>
<p>🤏让配置生效 并且退出容器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gitlab-ctl reconfigure
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器访问" tabindex="-1"><a class="header-anchor" href="#浏览器访问" aria-hidden="true">#</a> 浏览器访问</h2>
<p>路径访问：http://192.168.124.194:9980/</p>
<blockquote>
<p>⚠️ 机器配置要大于<code v-pre>4g</code>，否则很容易启动不了，报<code v-pre>502</code></p>
<ul>
<li>第一次访问，会让修改root密码</li>
<li>修改后以root用户登录即可</li>
</ul>
</blockquote>
<h3 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码" aria-hidden="true">#</a> 修改密码</h3>
<p><strong>进入容器内部：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker exec -it gitlab /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>进入控制台：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gitlab-rails console -e production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查询id为1的用户，id为1的用户是超级管理员：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>user = User.where(id:1).first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20220924230110134.png?xxw@nsddd.top" alt="image-20220924230110134"></p>
<p><strong>修改密码为<code v-pre>1234</code>：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>user.password='1234' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>保存：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>user.save!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>退出：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20220924230332131.png?xxw@nsddd.top" alt="image-20220924230332131"></p>
<h2 id="重置管理员密码" tabindex="-1"><a class="header-anchor" href="#重置管理员密码" aria-hidden="true">#</a> 重置管理员密码</h2>
<p><strong>进入docker gitlab 容器中</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker exec -it gitlab（容器名字） bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>进入gitlab 控制台</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gitlab-rails console -e production   #可能会等好几秒钟 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>搜索用户</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#这里提供两种搜索方式  通过id</span>
user <span class="token operator">=</span> User.where<span class="token punctuation">(</span>id:1<span class="token punctuation">)</span>.first
<span class="token comment">#或者 通过电子邮件搜索  或者用户名</span>
user <span class="token operator">=</span> User.find_by<span class="token punctuation">(</span>email:<span class="token string">'admin@example.com'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smsmimage-20220924231302178.png?xxw@nsddd.top" alt="asdf"></p>
<p><strong>修改密码</strong></p>
<blockquote>
<p>⚠️ 注意：密码不能设置太简单，数据库没办法通过</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#注意这两个选项都得设置,1234为你要设置的密码</span>
user.password <span class="token operator">=</span><span class="token string">'1234'</span>
user.password_confirmation <span class="token operator">=</span><span class="token string">'1234'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>保存退出：wq</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>user.save!
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20220924232113215.png?xxw@nsddd.top" alt="image-20220924232113215"></p>
<p><strong>登陆成功😘😘</strong><img src="http://sm.nsddd.top/smimage-20220924233008364.png?xxw@nsddd.top" alt="image-20220924233008364"></p>
</div></template>


