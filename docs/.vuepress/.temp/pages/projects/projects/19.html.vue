<template><div><ul>
<li><a href="https://github.com/cubxxw/iam" target="_blank" rel="noopener noreferrer">🔥 开源地址<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第19节-权限模型-5大权限模型是如何进行资源授权的" tabindex="-1"><a class="header-anchor" href="#第19节-权限模型-5大权限模型是如何进行资源授权的" aria-hidden="true">#</a> 第19节 权限模型：5大权限模型是如何进行资源授权的？</h1>
<br>
<div><a href = '18.md' style='float:left'>⬆️上一节🔗  </a><a href = '20.md' style='float: right'>  ⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕During the winter vacation, I followed up and learned two projects: tiktok project and IAM project, and summarized and practiced the CloudNative project and Go language. I learned a lot in the process.Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<nav class="table-of-contents"><ul><li><router-link to="#预告">预告</router-link></li><li><router-link to="#权限相关术语介绍">权限相关术语介绍</router-link></li><li><router-link to="#权限模型介绍">权限模型介绍</router-link><ul><li><router-link to="#简单的权限模型-权限控制列表-acl">简单的权限模型：权限控制列表（ACL）</router-link></li><li><router-link to="#基于-acl-下放权限的权限模型-自主访问控制-dac">基于 ACL 下放权限的权限模型：自主访问控制（DAC）</router-link></li><li><router-link to="#基于-acl-且安全性更高的权限模型-强制访问控制-mac">基于 ACL 且安全性更高的权限模型：强制访问控制（MAC）</router-link></li><li><router-link to="#最普及的权限模型-基于角色的访问控制-rbac">最普及的权限模型：基于角色的访问控制（RBAC）</router-link></li><li><router-link to="#最强大的权限模型-基于属性的权限验证-abac">最强大的权限模型：基于属性的权限验证（ABAC）</router-link></li></ul></li><li><router-link to="#相关开源项目">相关开源项目</router-link><ul><li><router-link to="#casbin">Casbin</router-link></li><li><router-link to="#keto">keto</router-link></li><li><router-link to="#go-admin">go-admin</router-link></li><li><router-link to="#lyrictian-gin-admin">LyricTian/gin-admin</router-link></li><li><router-link to="#gin-vue-admin">gin-vue-admin</router-link></li><li><router-link to="#选择建议">选择建议</router-link></li></ul></li><li><router-link to="#总结">总结</router-link></li><li><router-link to="#end-链接">END 链接</router-link></li></ul></nav>
<p>[TOC]</p>
<h2 id="预告" tabindex="-1"><a class="header-anchor" href="#预告" aria-hidden="true">#</a> 预告</h2>
<p>在你的研发生涯中，应该会遇到这样一种恐怖的操作：张三因为误操作删除了李四的资源。你在刷新闻时，也可能会刷到这么一个爆款新闻：某某程序员删库跑路。操作之所以恐怖，新闻之所以爆款，是因为这些行为往往会带来很大的损失。</p>
<p>那么如何避免这些风险呢？答案就是对资源做好权限管控，这也是项目开发中绕不开的话题。腾讯云会强制要求所有的云产品都对接 <a href="https://cloud.tencent.com/document/product/598/10583" target="_blank" rel="noopener noreferrer">访问管理（CAM）<ExternalLinkIcon/></a> 服务（阿里云也有这种要求），之所以这么做，是因为保证资源的安全是一件非常非常重要的事情。</p>
<p>可以说，保证应用的资源安全，已经成为一个应用的必备能力。作为开发人员，你也一定要知道如何保障应用的资源安全。那么如何才能保障资源的安全呢？我认为你至少需要掌握下面这两点：</p>
<ul>
<li>**权限模型：**你需要了解业界成熟的权限模型，以及这些模型的适用场景。只有具备足够宽广的知识面和视野，我们才能避免闭门造车，设计出优秀的资源授权方案。</li>
<li>**编码实现：**选择或设计出了优秀的资源授权方案后，你就要编写代码实现该方案。这门课的 IAM 应用，就是一个资源授权方案的落地项目。你可以通过对 IAM 应用的学习，来掌握如何实现一个资源授权系统。</li>
</ul>
<p>无论是第一点还是第二点，都需要你掌握基本的权限模型知识。那么这一讲，我就来介绍下业界优秀的权限模型，以及这些模型的适用场景，以使你今后设计出更好的资源授权系统。</p>
<h2 id="权限相关术语介绍" tabindex="-1"><a class="header-anchor" href="#权限相关术语介绍" aria-hidden="true">#</a> 权限相关术语介绍</h2>
<p>在介绍业界常见的权限模型前，我们先来看下在权限模型中出现的术语。我把常见的术语总结在了下面的表格里：</p>
<p><img src="http://sm.nsddd.top/sm202302271710095.png" alt="image-20230227170939630"></p>
<p>为了方便你理解，这一讲我分别用<strong>用户</strong>、<strong>操作</strong>和<strong>资源</strong>来替代 Subject、Action 和 Object。</p>
<h2 id="权限模型介绍" tabindex="-1"><a class="header-anchor" href="#权限模型介绍" aria-hidden="true">#</a> 权限模型介绍</h2>
<p>接下来，我就详细介绍下一些常见的权限模型，让你今后在设计权限系统时，能够根据需求选择合适的权限模型。</p>
<p>不同的权限模型具有不同的特点，可以满足不同的需求。常见的权限模型有下面这 5 种：</p>
<ul>
<li>权限控制列表（ACL，Access Control List）。</li>
<li>自主访问控制（DAC，Discretionary Access Control）。</li>
<li>强制访问控制（MAC，Mandatory Access Control）。</li>
<li>基于角色的访问控制（RBAC，Role-Based Access Control）。</li>
<li>基于属性的权限验证（ABAC，Attribute-Based Access Control）。</li>
</ul>
<p>这里先简单介绍下这 5 种权限模型。<strong>ACL</strong> 是一种简单的权限模型；<strong>DAC</strong> 基于 ACL，将权限下放给具有此权限的主题；但 DAC 因为权限下放，导致它对权限的控制过于分散，为了弥补 DAC 的这个缺陷，诞生了 <strong>MAC</strong> 权限模型。</p>
<p>DAC 和 MAC 都是基于 ACL 的权限模型。ACL 及其衍生的权限模型可以算是旧时代的权限模型，灵活性和功能性都满足不了现代应用的权限需求，所以诞生了 **RBAC。**RBAC 也是迄今为止最为普及的权限模型。</p>
<p>但是，随着组织和应用规模的增长，所需的角色数量越来越多，变得难以管理，进而导致角色爆炸和职责分离（SoD）失败。最后，引入了一种新的、更动态的访问控制形式，称为基于属性的访问控制，也就是 ABAC。ABAC 被一些人看作是权限系统设计的未来。腾讯云的 CAM、AWS 的 IAM、阿里云的 RAM 都是 ABAC 类型的权限访问服务。</p>
<p>接下来，我会详细介绍这些权限模型的基本概念。</p>
<h3 id="简单的权限模型-权限控制列表-acl" tabindex="-1"><a class="header-anchor" href="#简单的权限模型-权限控制列表-acl" aria-hidden="true">#</a> 简单的权限模型：权限控制列表（ACL）</h3>
<p>ACL（Access Control List，权限控制列表），用来判断用户是否可以对资源做特定的操作。例如，允许 Colin 创建文章的 ACL 策略为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Subject: Colin
Action: Create
Object: Article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ACL 权限模型下，权限管理是围绕资源 Object 来设定的，ACL 权限模型也是比较简单的一种模型。</p>
<h3 id="基于-acl-下放权限的权限模型-自主访问控制-dac" tabindex="-1"><a class="header-anchor" href="#基于-acl-下放权限的权限模型-自主访问控制-dac" aria-hidden="true">#</a> 基于 ACL 下放权限的权限模型：自主访问控制（DAC）</h3>
<p>DAC (Discretionary Access Control，自主访问控制)，是 ACL 的扩展模型，灵活性更强。使用这种模型，不仅可以判断 Subject 是否可以对 Object 做 Action 操作，同时也能让 Subject 将 Object、Action 的相同权限授权给其他的 Subject。例如，Colin 可以创建文章：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Subject: Colin
Action: Create
Object: Article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 Colin 具有创建文章的权限，所以 Colin 也可以授予 James 创建文章的权限：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Subject: James
Action: Create
Object: Article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经典的 ACL 模型权限集中在同一个 Subject 上，缺乏灵活性，为了加强灵活性，在 ACL 的基础上，DAC 模型将权限下放，允许拥有权限的 Subject 自主地将权限授予其他 Subject。</p>
<h3 id="基于-acl-且安全性更高的权限模型-强制访问控制-mac" tabindex="-1"><a class="header-anchor" href="#基于-acl-且安全性更高的权限模型-强制访问控制-mac" aria-hidden="true">#</a> 基于 ACL 且安全性更高的权限模型：强制访问控制（MAC）</h3>
<p>MAC (Mandatory Access Control，强制访问控制)，是 ACL 的扩展模型，安全性更高。MAC 权限模型下，Subject 和 Object 同时具有安全属性。在做授权时，需要同时满足两点才能授权通过：</p>
<ul>
<li>Subject 可以对 Object 做 Action 操作。</li>
<li>Object 可以被 Subject 做 Action 操作。</li>
</ul>
<p>例如，我们设定了“Colin 和 James 可以创建文章”这个 MAC 策略：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Subject: Colin
Action: Create
Object: Article

Subject: James
Action: Create
Object: Article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还有另外一个 MAC 策略“文章可以被 Colin 创建”：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Subject: Article
Action: Create
Object: Colin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述策略中，Colin 可以创建文章，但是 James 不能创建文章，因为第二条要求没有满足。</p>
<p>这里你需要注意，在 ACL 及其扩展模型中，Subject 可以是用户，也可以是组或群组。</p>
<p>ACL、DAC 和 MAC 是旧时代的权限控制模型，无法满足现代应用对权限控制的需求，于是诞生了新时代的权限模型：RBAC 和 ABAC。</p>
<h3 id="最普及的权限模型-基于角色的访问控制-rbac" tabindex="-1"><a class="header-anchor" href="#最普及的权限模型-基于角色的访问控制-rbac" aria-hidden="true">#</a> 最普及的权限模型：基于角色的访问控制（RBAC）</h3>
<p>RBAC (Role-Based Access Control，基于角色的访问控制)，引入了 Role（角色）的概念，并且将权限与角色进行关联。用户通过扮演某种角色，具有该角色的所有权限。具体如下图所示：</p>
<p><a href="https://static001.geekbang.org/resource/image/c5/cf/c5ab6b1a77069caac2c5de709dff32cf.jpg?wh=2248x902" target="_blank" rel="noopener noreferrer"><img src="https://static001.geekbang.org/resource/image/c5/cf/c5ab6b1a77069caac2c5de709dff32cf.jpg?wh=2248x902" alt="img"><ExternalLinkIcon/></a></p>
<p>如图所示，每个用户关联一个或多个角色，每个角色关联一个或多个权限，每个权限又包含了一个或者多个操作，操作包含了对资源的操作集合。通过用户和权限解耦，可以实现非常灵活的权限管理。例如，可以满足以下两个权限场景：</p>
<p>第一，可以通过角色批量给一个用户授权。例如，公司新来了一位同事，需要授权虚拟机的生产、销毁、重启和登录权限。这时候，我们可以将这些权限抽象成一个运维角色。如果再有新同事来，就可以通过授权运维角色，直接批量授权这些权限，不用一个个地给用户授权这些权限。</p>
<p>第二，可以批量修改用户的权限。例如，我们有很多用户，同属于运维角色，这时候对运维角色的任何权限变更，就相当于对运维角色关联的所有用户的权限变更，不用一个个去修改这些用户的权限。</p>
<p>RBAC 又分为 RBAC0、RBAC1、RBAC2、RBAC3。RBAC0 是 RBAC 的核心思想，RBAC1 是基于 RBAC 的角色分层模型，RBAC2 增加了 RBAC 的约束模型。而 RBAC3，其实相当于 RBAC1 + RBAC2。</p>
<p>下面我来详细介绍下这四种 RBAC。</p>
<p>RBAC0：基础模型，只包含核心的四要素，也就是用户（User）、角色（Role）、权限（Permission：Objects-Operations）、会话（Session）。用户和角色可以是多对多的关系，权限和角色也是多对多的关系。</p>
<p>RBAC1：包括了 RBAC0，并且添加了角色继承。角色继承，即角色可以继承自其他角色，在拥有其他角色权限的同时，还可以关联额外的权限。</p>
<p>RBAC2：包括 RBAC0，并且添加了约束。具有以下核心特性：</p>
<ul>
<li>**互斥约束：**包括互斥用户、互斥角色、互斥权限。同一个用户不能拥有相互排斥的角色，两个互斥角色不能分配一样的权限集，互斥的权限不能分配给同一个角色，在 Session 中，同一个角色不能拥有互斥权限。</li>
<li>**基数约束：**一个角色被分配的用户数量受限，它指的是有多少用户能拥有这个角色。例如，一个角色是专门为公司 CEO 创建的，那这个角色的数量就是有限的。</li>
<li>**先决条件角色：**指要想获得较高的权限，要首先拥有低一级的权限。例如，先有副总经理权限，才能有总经理权限。</li>
<li><strong>静态职责分离</strong>(Static Separation of Duty)：用户无法同时被赋予有冲突的角色。</li>
<li><strong>动态职责分离</strong>(Dynamic Separation of Duty)：用户会话中，无法同时激活有冲突的角色。</li>
</ul>
<p>RBAC3：全功能的 RBAC，合并了 RBAC0、RBAC1、RBAC2。</p>
<p>此外，RBAC 也可以很方便地模拟出 DAC 和 MAC 的效果。</p>
<p>这里举个例子，来协助你理解 RBAC。例如，我们有 write article 和 manage article 的权限：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">Permission</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">Name</span><span class="token punctuation">:</span> write_article
        <span class="token punctuation">-</span> <span class="token key atrule">Effect</span><span class="token punctuation">:</span> <span class="token string">"allow"</span>
        <span class="token punctuation">-</span> <span class="token key atrule">Action</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Create"</span><span class="token punctuation">,</span> <span class="token string">"Update"</span><span class="token punctuation">,</span> <span class="token string">"Read"</span><span class="token punctuation">]</span>
        <span class="token punctuation">-</span> <span class="token key atrule">Object</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Article"</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span> <span class="token key atrule">Name</span><span class="token punctuation">:</span> manage_article
        <span class="token punctuation">-</span> <span class="token key atrule">Effect</span><span class="token punctuation">:</span> <span class="token string">"allow"</span>
        <span class="token punctuation">-</span> <span class="token key atrule">Action</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Delete"</span><span class="token punctuation">,</span> <span class="token string">"Read"</span><span class="token punctuation">]</span>
        <span class="token punctuation">-</span> <span class="token key atrule">Object</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"Article"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，我们也有 Writer、Manager和 CEO 3个角色，Writer 具有 write_article 权限，Manager 具有 manage_article 权限，CEO 具有所有权限：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">Role</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">Name</span><span class="token punctuation">:</span> Writer
      <span class="token key atrule">Permissions</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> write_article
    <span class="token punctuation">-</span> <span class="token key atrule">Name</span><span class="token punctuation">:</span> Manager
      <span class="token key atrule">Permissions</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> manage_article
    <span class="token punctuation">-</span> <span class="token key atrule">Name</span><span class="token punctuation">:</span> CEO
      <span class="token key atrule">Permissions</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> write_article
        <span class="token punctuation">-</span> manage_article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们对 Colin 用户授予 Writer 角色：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">Subject</span><span class="token punctuation">:</span> Colin
<span class="token key atrule">Roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> Writer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么现在 Colin 就具有 Writer 角色的所有权限 write_article，write_article 权限可以创建文章。</p>
<p>接下来，再对 James 用户授予 Writer 和 Manager 角色：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">Subject</span><span class="token punctuation">:</span> James
<span class="token key atrule">Roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> Writer
    <span class="token punctuation">-</span> Manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么现在 James 就具有 Writer 角色和 Manager 角色的所有权限：write_article、manage_article，这些权限允许 James 创建和删除文章。</p>
<h3 id="最强大的权限模型-基于属性的权限验证-abac" tabindex="-1"><a class="header-anchor" href="#最强大的权限模型-基于属性的权限验证-abac" aria-hidden="true">#</a> 最强大的权限模型：基于属性的权限验证（ABAC）</h3>
<p>ABAC (Attribute-Based Access Control，基于属性的权限验证），规定了哪些属性的用户可以对哪些属性的资源在哪些限制条件下进行哪些操作。跟 RBAC 相比，ABAC 对权限的控制粒度更细，主要规定了下面这四类属性：</p>
<ul>
<li>用户属性，例如性别、年龄、工作等。</li>
<li>资源属性，例如创建时间、所属位置等。</li>
<li>操作属性，例如创建、修改等。</li>
<li>环境属性，例如来源 IP、当前时间等。</li>
</ul>
<p>下面是一个 ABAC 策略：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token key atrule">Subject</span><span class="token punctuation">:</span>
    <span class="token key atrule">Name</span><span class="token punctuation">:</span> Colin
    <span class="token key atrule">Department</span><span class="token punctuation">:</span> Product
    <span class="token key atrule">Role</span><span class="token punctuation">:</span> Writer
<span class="token key atrule">Action</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> create
    <span class="token punctuation">-</span> update
<span class="token key atrule">Resource</span><span class="token punctuation">:</span>
    <span class="token key atrule">Type</span><span class="token punctuation">:</span> Article
    <span class="token key atrule">Tag</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> technology
        <span class="token punctuation">-</span> software
    <span class="token key atrule">Mode</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> draft
<span class="token key atrule">Contextual</span><span class="token punctuation">:</span>
    <span class="token key atrule">IP</span><span class="token punctuation">:</span> 10.0.0.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面权限策略描述的意思是，产品部门的 Colin 作为一个 Writer 角色，可以通过来源 IP 是 10.0.0.10 的客户端，创建和更新带有 technology 和 software 标签的草稿文章。</p>
<p>这里提示一点：ABAC 有时也被称为 PBAC（Policy-Based Access Control）或 CBAC（Claims-Based Access Control）。</p>
<p>这里，我通过现实中的 ABAC 授权策略，帮你理解 ABAC 权限模型。下面是一个腾讯云的 CAM 策略，也是一种 ABAC 授权模式：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>
<span class="token punctuation">{</span>
  <span class="token key atrule">"version"</span><span class="token punctuation">:</span> <span class="token string">"2.0"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"statement"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">"effect"</span><span class="token punctuation">:</span> <span class="token string">"allow"</span><span class="token punctuation">,</span>
      <span class="token key atrule">"action"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">"cos:List*"</span><span class="token punctuation">,</span>
        <span class="token string">"cos:Get*"</span><span class="token punctuation">,</span>
        <span class="token string">"cos:Head*"</span><span class="token punctuation">,</span>
        <span class="token string">"cos:OptionsObject"</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token key atrule">"resource"</span><span class="token punctuation">:</span> <span class="token string">"qcs::cos:ap-shanghai:uid/1250000000:Bucket1-1250000000/dir1/*"</span><span class="token punctuation">,</span>
      <span class="token key atrule">"condition"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">"ip_equal"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">"qcs:ip"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token string">"10.217.182.3/24"</span><span class="token punctuation">,</span>
            <span class="token string">"111.21.33.72/24"</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>上面的授权策略表示：用户必须在 10.217.182.3/24 或者 111.21.33.72/24 网段才能调用云 API（cos:List</em>、cos:Get*、cos:Head*、cos:OptionsObject），对 1250000000 用户下的 dir1 目录下的文件进行读取操作。</p>
<p>这里，ABAC 规定的四类属性分别是：</p>
<ul>
<li>用户属性：用户为 1250000000。</li>
<li>资源属性：dir1 目录下的文件。</li>
<li>操作属性：读取（cos:List*、cos:Get*、cos:Head*、cos:OptionsObject 都是读取 API）。</li>
<li>环境属性：10.217.182.3/24 或者 111.21.33.72/24 网段。</li>
</ul>
<h2 id="相关开源项目" tabindex="-1"><a class="header-anchor" href="#相关开源项目" aria-hidden="true">#</a> 相关开源项目</h2>
<p>上面我介绍了权限模型的相关知识，但是现在如果让你真正去实现一个权限系统，你可能还是不知从何入手。</p>
<p>在这里，我列出了一些 GitHub 上比较优秀的开源项目，你可以学习这些项目是如何落地一个权限模型的，也可以基于这些项目进行二次开发，开发一个满足业务需求的权限系统。</p>
<h3 id="casbin" tabindex="-1"><a class="header-anchor" href="#casbin" aria-hidden="true">#</a> Casbin</h3>
<p><a href="https://github.com/casbin/casbin" target="_blank" rel="noopener noreferrer">Casbin<ExternalLinkIcon/></a> 是一个用 Go 语言编写的访问控制框架，功能强大，支持 ACL、RBAC、ABAC 等访问模型，很多优秀的权限管理系统都是基于 Casbin 来构建的。Casbin 的核心功能都是围绕着访问控制来构建的，不负责身份认证。如果以后老板让你实现一个权限管理系统，Casbin 是一定要好好研究的开源项目。</p>
<h3 id="keto" tabindex="-1"><a class="header-anchor" href="#keto" aria-hidden="true">#</a> keto</h3>
<p><a href="https://github.com/ory/keto" target="_blank" rel="noopener noreferrer">keto<ExternalLinkIcon/></a> 是一个云原生权限控制服务，通过提供 REST API 进行授权，支持 RBAC、ABAC、ACL、AWS IAM 策略、Kubernetes Roles 等权限模型，可以解决下面这些问题：</p>
<ul>
<li>是否允许某些用户修改此博客文章？</li>
<li>是否允许某个服务打印该文档？</li>
<li>是否允许 ACME 组织的成员修改其租户中的数据？</li>
<li>是否允许在星期一的下午 4 点到下午 5 点，从 IP 10.0.0.2 发出的请求执行某个 Job？</li>
</ul>
<h3 id="go-admin" tabindex="-1"><a class="header-anchor" href="#go-admin" aria-hidden="true">#</a> go-admin</h3>
<p><a href="https://github.com/go-admin-team/go-admin" target="_blank" rel="noopener noreferrer">go-admin<ExternalLinkIcon/></a> 是一个基于 Gin + Vue + Element UI 的前后端分离权限管理系统脚手架，它的访问控制模型采用了 Casbin 的 RBAC 访问控制模型，功能强大，包含了如下功能：</p>
<ul>
<li>基础用户管理功能；</li>
<li>JWT 鉴权；</li>
<li>代码生成器；</li>
<li>RBAC 权限控制；</li>
<li>表单构建；</li>
<li>……</li>
</ul>
<p>该项目还支持 RESTful API 设计规范、Swagger 文档、GORM 库等。go-admin 不仅是一个优秀的权限管理系统，也是一个优秀的、功能齐全的 Go 开源项目。你在做项目开发时，也可以参考该项目的构建思路。go-admin 管理系统自带前端，如下图所示。</p>
<p><img src="http://sm.nsddd.top/sm202302271730526.png" alt="img"></p>
<h3 id="lyrictian-gin-admin" tabindex="-1"><a class="header-anchor" href="#lyrictian-gin-admin" aria-hidden="true">#</a> LyricTian/gin-admin</h3>
<p><a href="https://github.com/LyricTian/gin-admin" target="_blank" rel="noopener noreferrer">gin-admin<ExternalLinkIcon/></a> 类似于 go-admin，是一个基于 Gin+Gorm+Casbin+Wire 实现的权限管理脚手架，并自带前端，在做权限管理系统调研时，也非常值得参考。</p>
<p>gin-admin 大量采用了 Go 后端开发常用的技术，比如 Gin、GORM、JWT 认证、RESTful API、Logrus 日志包、Swagger 文档等。因此，你在做 Go 后端服务开发时，也可以学习该项目的构建方法。</p>
<h3 id="gin-vue-admin" tabindex="-1"><a class="header-anchor" href="#gin-vue-admin" aria-hidden="true">#</a> gin-vue-admin</h3>
<p><a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank" rel="noopener noreferrer">gin-vue-admin<ExternalLinkIcon/></a> 是一个基于 Gin 和 Vue 开发的全栈前后端分离的后台管理系统，集成了 JWT 鉴权、动态路由、动态菜单、Casbin 鉴权、表单生成器、代码生成器等功能。gin-vue-admin 集成了 RBAC 权限管理模型，界面如下图所示：</p>
<p><img src="http://sm.nsddd.top/sm202302271730779.png" alt="img"></p>
<h3 id="选择建议" tabindex="-1"><a class="header-anchor" href="#选择建议" aria-hidden="true">#</a> 选择建议</h3>
<p>介绍了那么多优秀的开源项目，最后我想给你一些选择建议。如果你想研究 ACL、RBAC、ABAC 等权限模型如何落地，我强烈建议你学习 <a href="https://github.com/casbin/casbin" target="_blank" rel="noopener noreferrer">Casbin<ExternalLinkIcon/></a> 项目，Casbin 目前有近万的 GitHub star 数，处于活跃的开发状态。有很多项目在使用 Casbin，例如 <a href="https://github.com/go-admin-team/go-admin" target="_blank" rel="noopener noreferrer">go-admin<ExternalLinkIcon/></a>、 <a href="https://github.com/LyricTian/gin-admin" target="_blank" rel="noopener noreferrer">gin-admin<ExternalLinkIcon/></a> 、 <a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank" rel="noopener noreferrer">gin-vue-admin<ExternalLinkIcon/></a> 等。</p>
<p><a href="https://github.com/ory/keto" target="_blank" rel="noopener noreferrer">keto<ExternalLinkIcon/></a> 类似于 Casbin，主要通过 Go 包的方式，对外提供授权能力。keto 也是一个非常优秀的权限类项目，当你研究完 Casbin 后，如果还想再研究下其他授权类项目，建议你读下 keto 的源码。</p>
<p>go-admin、gin-vue-admin、gin-admin 这 3 个都是基于 Casbin 的 Go 项目。其中，gin-vue-admin 是后台管理系统框架，里面包含了 RBAC 权限管理模块；go-admin 和 gin-admin 都是 RBAC 权限管理脚手架。所以，如果你想找一个比较完整的 RBAC 授权系统（自带前后端），建议你优先研究下 go-admin，如果还有精力，可以再研究下 gin-admin、gin-vue-admin。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一讲，我介绍了 5 种常见的权限模型。其中，ACL 最简单，ABAC 最复杂，但是功能最强大，也最灵活。RBAC 则介于二者之间。对于一些云计算厂商来说，因为它们面临的授权场景复杂多样，需要一个非常强大的授权模型，所以腾讯云、阿里云和 AWS 等云厂商普遍采用了 ABAC 模型。</p>
<p>如果你的资源授权需求不复杂，可以考虑 RBAC；如果你需要一个能满足复杂场景的资源授权系统，建议选择 ABAC，ABAC 的设计思路可以参考下腾讯云的 CAM、阿里云的 RAM 和 AWS 的 IAM。</p>
<p>另外，如果你想深入了解权限模型如何具体落地，建议你阅读 <a href="https://github.com/casbin/casbin" target="_blank" rel="noopener noreferrer">Casbin<ExternalLinkIcon/></a> 源码。</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '18.md' style='float:left'>⬆️上一节🔗  </a><a href = '20.md' style='float: right'>  ️下一节🔗</a></div></li></ul>
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


