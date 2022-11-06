<template><div><h1 id="none是什么" tabindex="-1"><a class="header-anchor" href="#none是什么" aria-hidden="true">#</a> none是什么</h1>
<h2 id="none" tabindex="-1"><a class="header-anchor" href="#none" aria-hidden="true">#</a> none</h2>
<p><strong>在none模式下，并不为Docker容器进行任何网络配置。</strong></p>
<p><strong>也就是说，这个Docker容器没有网卡、IP、路由等信息，只有一个lo</strong></p>
<p><strong>需要我们自己为Docker容器添加网卡、配置IP等。</strong></p>
<p><strong>禁用网络功能，只有lo标识(就是127.0.0.1表示本地回环)</strong></p>
<blockquote>
<p>平时很少用，了解一下就行了</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 8084:8080 --network none --name tomcat84 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>进入容器内部查看</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:/home/smile# docker ps |grep tomcat
ca21eb3e0651   billygoo/tomcat8-jdk8   "catalina.sh run"        55 seconds ago   Up 52 seconds                                                               tomcat84
7618e4f905d2   billygoo/tomcat8-jdk8   "catalina.sh run"        14 hours ago     Up 14 hours                                                                 tomcat83
518bce78283a   billygoo/tomcat8-jdk8   "catalina.sh run"        15 hours ago     Up 15 hours                     0.0.0.0:8082->8080/tcp, :::8082->8080/tcp   tomcat82
98ec1a7378a7   billygoo/tomcat8-jdk8   "catalina.sh run"        15 hours ago     Up 15 hours                     0.0.0.0:8081->8080/tcp, :::8081->8080/tcp   tomcat81
root@ubuntu:/home/smile# docker exec -it ca21eb3e0651 bash
root@ca21eb3e0651:/usr/local/tomcat# ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在容器外部查看</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:/home/smile# docker inspect tomcat84|tail -n 20
            "Networks": {
                "none": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "5e7ee4274242392a7fe5a258697861d7e94a0e73288378c5a2d5409ce8031910",
                    "EndpointID": "4b6bf530b14eef04a873b47f688a6d1bf5d0fa9d17ad8dd7dd39d3573ce276da",
                    "Gateway": "",
                    "IPAddress": "",
                    "IPPrefixLen": 0,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "",
                    "DriverOpts": null
                }
            }
        }
    }
]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由此可见，网卡和IP都没有</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  "Gateway": "",
  "IPAddress": "",
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 8084:8080 --network none --name tomcat84 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


