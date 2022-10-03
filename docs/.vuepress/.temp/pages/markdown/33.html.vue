<template><div><h1 id="host是什么" tabindex="-1"><a class="header-anchor" href="#host是什么" aria-hidden="true">#</a> host是什么</h1>
<nav class="table-of-contents"><ul><li><router-link to="#问题">问题：</router-link></li><li><router-link to="#原因">原因：</router-link></li><li><router-link to="#解决">解决:</router-link></li><li><router-link to="#正确">正确</router-link></li></ul></nav>
<p>[toc]</p>
<p><strong>直接使用宿主机的 IP 地址与外界进行通信，不再需要额外进行NAT 转换。</strong></p>
<p><strong>容器将不会获得一个独立的Network Namespace， 而是和宿主机共用一个Network Namespace。容器将不会虚拟出自己的网卡而是使用宿主机的IP和端口。</strong></p>
<p><img src="@source/markdown/images/cYQOLURN4Zagk7P.jpg" alt="graphic"></p>
<p><strong>代码</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d -p 8083:8080 --network host --name tomcat83 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">警告</p>
<p><strong>警告：不太推荐使用，<code v-pre>-p参数不起任何作用，因为是和主机公用一个端口</code></strong></p>
<p><img src="@source/markdown/images/dBjgcHPhobA6XSC.png" alt="image-20220514221324259"></p>
</div>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题：</h2>
<p>docke启动时总是遇见标题中的警告</p>
<h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因：</h2>
<p><strong>docker启动时指定--network=host或-net=host，如果还指定了-p映射端口，那这个时候就会有此警告，</strong></p>
<p><strong>并且通过-p设置的参数将不会起到任何作用，端口号会以主机端口号为主，重复时则递增。</strong></p>
<h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决:</h2>
<p>解决的办法就是使用docker的其他网络模式，例如<code v-pre>--network=bridge</code>，这样就可以解决问题，或者直接无视。。。。O(∩_∩)O哈哈~</p>
<h2 id="正确" tabindex="-1"><a class="header-anchor" href="#正确" aria-hidden="true">#</a> 正确</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker run -d --network host --name tomcat83 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>无之前的配对显示了，看容器实例内部</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:/home/smile# docker inspect tomcat83 | tail -n 20
            "Networks": {
                "host": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "c68651290784a6ed6e11337383cdc7d808ed42393675ade0b5c94fa368c2c556",
                    "EndpointID": "a228da421b411e51ada0066671c175938494c46a3915a67c5c3d24f05e73cf47",
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>没有设置-p的端口映射了，如何访问启动的tomcat83？？</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> "Gateway": "",
 "IPAddress": "",
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://宿主机IP:8080/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在CentOS里面用默认的火狐浏览器访问容器内的tomcat83看到访问成功，因为此时容器的IP借用主机的，</p>
<p>所以容器共享宿主机网络IP，这样的好处是外部主机与容器可以直接通信。</p>
<p><img src="https://s2.loli.net/2022/05/14/z6RsQTM2k3AGBc1.png" alt="image-20220514222936473"></p>
</div></template>


