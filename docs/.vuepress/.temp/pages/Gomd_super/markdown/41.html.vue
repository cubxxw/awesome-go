<template><div><h1 id="_1-kafka的安装" tabindex="-1"><a class="header-anchor" href="#_1-kafka的安装" aria-hidden="true">#</a> 1. Kafka的安装</h1>
<h3 id="_1-1-1-kafka搭建" tabindex="-1"><a class="header-anchor" href="#_1-1-1-kafka搭建" aria-hidden="true">#</a> 1.1.1. kafka搭建</h3>
<p>注意:我的电脑是win10的以下都是基于win10的安装</p>
<p>kafka环境基于zookeeper,zookeeper环境基于JAVA-JDK。</p>
<h3 id="_1-1-2-安装java-jdk" tabindex="-1"><a class="header-anchor" href="#_1-1-2-安装java-jdk" aria-hidden="true">#</a> 1.1.2. 安装JAVA-JDK</h3>
<p>下载地址：https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html</p>
<h4 id="安装jdk" tabindex="-1"><a class="header-anchor" href="#安装jdk" aria-hidden="true">#</a> 安装JDK</h4>
<p><img src="https://www.topgoer.com/static/9.1/1.jpg" alt="安装JDK"> <img src="https://www.topgoer.com/static/9.1/2.jpg" alt="安装JDK"> <img src="https://www.topgoer.com/static/9.1/3.jpg" alt="安装JDK"></p>
<h4 id="添加环境变量" tabindex="-1"><a class="header-anchor" href="#添加环境变量" aria-hidden="true">#</a> 添加环境变量</h4>
<p><img src="https://www.topgoer.com/static/9.1/4.jpg" alt="安装JDK"> <img src="https://www.topgoer.com/static/9.1/5.jpg" alt="安装JDK"></p>
<p>注意 : 第二部本来需要安装zookeeper的但是现在kafka上面自带这个了！可以安装可以不安装！我不找刺激就不安装了！</p>
<h3 id="_1-1-3-安装kafka" tabindex="-1"><a class="header-anchor" href="#_1-1-3-安装kafka" aria-hidden="true">#</a> 1.1.3. 安装kafka</h3>
<h4 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h4>
<p>下载地址：http://kafka.apache.org/downloads 下载kafka_2.12-2.3.0.tgz。</p>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<p>将下载好的压缩包解压到本地即可。</p>
<p><img src="https://www.topgoer.com/static/9.1/6.jpg" alt="安装kafka"></p>
<h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.打开config目录下的server.properties文件
    2.修改log.dirs=E:\\kafkalogs
    3.打开config目录下的zookeeper.properties文件
    4.修改dataDir=E:\\kafka\\zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h4>
<p>注意 : 记得啊执行cmd记得以管理员的身份启动不然启动不了！两次都需要管理员身份（另外记得走到kafka你解压的目录执行下面的命令啊</p>
<p><img src="https://www.topgoer.com/static/9.1/7.jpg" alt="安装kafka"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    先执行：bin\windows\zookeeper-server-start.bat config\zookeeper.properties

    再执行：bin\windows\kafka-server-start.bat config\server.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-4-进行单机实例测试简单使用" tabindex="-1"><a class="header-anchor" href="#_1-1-4-进行单机实例测试简单使用" aria-hidden="true">#</a> 1.1.4. 进行单机实例测试简单使用</h3>
<p>windows使用的是路径E:\Kafka\kafka_2.12-2.0.0\bin\windows下批处理命令，如有问题，参见</p>
<h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤：</h4>
<h4 id="_1-启动kafka内置的zookeeper" tabindex="-1"><a class="header-anchor" href="#_1-启动kafka内置的zookeeper" aria-hidden="true">#</a> 1）启动kafka内置的zookeeper</h4>
<p>.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties</p>
<p><img src="https://www.topgoer.com/static/9.1/8.jpg" alt="安装kafka"> <img src="https://www.topgoer.com/static/9.1/9.jpg" alt="安装kafka"></p>
<p>出现binding to port ...表示zookeeper启动成功，不关闭页面</p>
<h4 id="_2-kafka服务启动-成功不关闭页面" tabindex="-1"><a class="header-anchor" href="#_2-kafka服务启动-成功不关闭页面" aria-hidden="true">#</a> 2）kafka服务启动 ，成功不关闭页面</h4>
<p>.\bin\windows\kafka-server-start.bat .\config\server.properties</p>
<p><img src="https://s2.loli.net/2022/04/10/KXJ7bQUiufdMLq4.jpg" alt="安装kafka"></p>
<h4 id="_3-创建topic测试主题kafka-成功不关闭页面" tabindex="-1"><a class="header-anchor" href="#_3-创建topic测试主题kafka-成功不关闭页面" aria-hidden="true">#</a> 3）创建topic测试主题kafka，成功不关闭页面</h4>
<p>.\bin\windows\kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test</p>
<p><img src="https://s2.loli.net/2022/04/10/urCnmqkD9SMs716.jpg" alt="安装kafka"></p>
<h4 id="_4-创建生产者产生消息-不关闭页面" tabindex="-1"><a class="header-anchor" href="#_4-创建生产者产生消息-不关闭页面" aria-hidden="true">#</a> 4）创建生产者产生消息，不关闭页面</h4>
<p>.\bin\windows\kafka-console-producer.bat --broker-list localhost:9092 --topic test</p>
<p><img src="https://s2.loli.net/2022/04/10/ytkBZDVXfgWsiFj.jpg" alt="安装kafka"></p>
<h4 id="_5-创建消费者接收消息-不关闭页面" tabindex="-1"><a class="header-anchor" href="#_5-创建消费者接收消息-不关闭页面" aria-hidden="true">#</a> 5）创建消费者接收消息，不关闭页面</h4>
<p>.\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic test --from-beginning</p>
<p><img src="https://www.topgoer.com/static/9.1/13.jpg" alt="安装kafka"> <img src="https://www.topgoer.com/static/9.1/14.jpg" alt="安装kafka"></p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '40.md' style='float:left'>⬆️上一节🔗</a><a href = '42.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


