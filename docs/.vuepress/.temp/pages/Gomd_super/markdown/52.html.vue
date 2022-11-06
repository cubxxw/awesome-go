<template><div><h1 id="_1-kibana安装" tabindex="-1"><a class="header-anchor" href="#_1-kibana安装" aria-hidden="true">#</a> 1. Kibana安装</h1>
<h3 id="_1-1-1-kibana介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-1-kibana介绍" aria-hidden="true">#</a> 1.1.1. Kibana介绍</h3>
<p>官网链接：https://www.elastic.co/cn/products/kibana</p>
<p>Kibana是一个开源的分析和可视化平台，设计用于和Elasticsearch一起工作。</p>
<p>你可以使用Kibana来搜索、查看、并和存储在Elasticsearch索引中的数据进行交互。</p>
<p>你可以轻松地执行高级数据分析，并且以各种图标、表格和地图的形式可视化数据。</p>
<p>Kibana使得理解大量数据变得很容易。它简单的、基于浏览器的界面使你能够快速创建和共享动态仪表板，实时显示Elasticsearch查询的变化。</p>
<h3 id="_1-1-2-下载" tabindex="-1"><a class="header-anchor" href="#_1-1-2-下载" aria-hidden="true">#</a> 1.1.2. 下载</h3>
<p>官方下载链接：https://www.elastic.co/cn/downloads/kibana</p>
<p>请根据需求下载对应的版本。</p>
<p>注意 :</p>
<p>Kibana与Elasticsearch的版本要相互对应，否则可能不兼容！！！</p>
<p>例如：Elasticsearch是7.2.1的版本，那么你的Kibana也要下载7.2.1的版本。</p>
<p><img src="https://www.topgoer.com/static/10.2/1.png" alt="Kibana"></p>
<h3 id="_1-1-3-安装" tabindex="-1"><a class="header-anchor" href="#_1-1-3-安装" aria-hidden="true">#</a> 1.1.3. 安装</h3>
<p>将上一步下载得到的文件解压。</p>
<p><img src="https://www.topgoer.com/static/10.2/2.png" alt="Kibana"></p>
<p>修改config目录下的配置文件kibana.yml（如你是本机没有发生改变可以省略这一步）</p>
<p>将配置文件中 elasticsearch.hosts设置为你elasticseatch的地址，例如：</p>
<p><img src="https://www.topgoer.com/static/10.2/3.png" alt="Kibana"></p>
<p>（找不到直接Ctrl+F搜索‘url’）</p>
<p>然后翻到最后修改一下语言，配置成简体中文。</p>
<p><img src="https://www.topgoer.com/static/10.2/4.png" alt="Kibana"></p>
<h3 id="_1-1-4-启动" tabindex="-1"><a class="header-anchor" href="#_1-1-4-启动" aria-hidden="true">#</a> 1.1.4. 启动</h3>
<p>执行bin\kibana.bat启动</p>
<p>启动过程比较慢，请耐心等待出现类似下图界面，就表示启动成功。</p>
<p><img src="https://www.topgoer.com/static/10.2/5.png" alt="Kibana"></p>
<p>使用浏览器访问本机的5601端口即可看到类似下面的界面：</p>
<p><img src="https://www.topgoer.com/static/10.2/6.png" alt="Kibana"></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '51.md' style='float:left'>⬆️上一节🔗</a><a href = '53.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


