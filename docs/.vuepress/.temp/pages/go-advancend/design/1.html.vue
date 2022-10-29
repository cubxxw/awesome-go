<template><div><h1 id="第1节-设计模式概述" tabindex="-1"><a class="header-anchor" href="#第1节-设计模式概述" aria-hidden="true">#</a> 第1节 设计模式概述</h1>
<div><a href = '../README.md' style='float:left'>⬆️上一节🔗</a><a href = '2.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕Java和Golang的设计模式，设计模式介绍、创建者模式、结构型模式、行为型模式。Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="设计模式定义" tabindex="-1"><a class="header-anchor" href="#设计模式定义" aria-hidden="true">#</a> 设计模式定义</h2>
<div class="custom-container tip"><p class="custom-container-title">设计模式：在一定环境下，用固定套路解决问题</p>
<p>GoF给软件设计模式提供了定义，如下：</p>
<p>“软件设计模式(Design Pattern)是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结，使用设计模式是为了可重用代码、让代码更容易被他人理解并且保证代码可靠性。”</p>
<p>一句大白话可以总结：“在一定环境下，用固定套路解决问题。”</p>
</div>
<h2 id="设计模式的分类" tabindex="-1"><a class="header-anchor" href="#设计模式的分类" aria-hidden="true">#</a> 设计模式的分类</h2>
<div class="custom-container danger"><p class="custom-container-title">GoF提出的设计模式有23个，包括：</p>
<p>（1）创建型(Creational)模式：如何创建对象；</p>
<p>（2）结构型(Structural )模式：如何实现类或对象的组合；</p>
<p>（3）行为型(Behavioral)模式：类或对象怎样交互以及怎样分配职责。</p>
<p>有一个“简单工厂模式”不属于GoF 23种设计模式，但大部分的设计模式书籍都会对它进行专门的介绍。</p>
<p>设计模式目前种类： <code v-pre>GoF的23种   + “简单工厂模式” = 24种</code>。</p>
</div>
<h2 id="如何学习设计模式" tabindex="-1"><a class="header-anchor" href="#如何学习设计模式" aria-hidden="true">#</a> 如何学习设计模式</h2>
<div class="custom-container tip"><p class="custom-container-title">设计模式的基础是：多态。</p>
<p>初学者：积累案例，不要盲目的背类图。</p>
<p>初级开发人员：多思考，多梳理，归纳总结，尊重事物的认知规律，注意临界点的突破，不要浮躁。</p>
<p>中级开发人员：合适的开发环境，寻找合适的设计模式来解决问题。</p>
<p>多应用，对经典则组合设计模式的大量，自由的运用。要不断的追求。</p>
</div>
<h2 id="设计模式的类型" tabindex="-1"><a class="header-anchor" href="#设计模式的类型" aria-hidden="true">#</a> 设计模式的类型</h2>
<details class="custom-container details"><summary>设计模式包含如下几类：</summary>
<p>。。。</p>
</details>
<table>
<thead>
<tr>
<th><strong>模式名称</strong></th>
<th><strong>模式名称</strong></th>
<th><strong>作用</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>创建型模式</strong>  <strong>Creational Pattern（6）</strong></td>
<td>单例模式★★★★☆</td>
<td>是保证一个类仅有一个实例，并提供一个访问它的全局访问点。</td>
</tr>
<tr>
<td>简单工厂模式★★★☆☆</td>
<td>通过专门定义一个类来负责创建其他类的实例，被创建的实例通常都具有共同的父类。</td>
<td></td>
</tr>
<tr>
<td>工厂方法模式★★★★★</td>
<td>定义一个创建产品对象的工厂接口，将实际创建工作推迟到子类中。</td>
<td></td>
</tr>
<tr>
<td>抽象工厂模式★★★★★</td>
<td>提供一个创建一系列相关或者相互依赖的接口，而无需指定它们具体的类。</td>
<td></td>
</tr>
<tr>
<td>原型模式★★★☆☆</td>
<td>用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。</td>
<td></td>
</tr>
<tr>
<td>建造者模式★★☆☆☆</td>
<td>将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。</td>
<td></td>
</tr>
<tr>
<td><strong>结构型模式Structural Pattern（7）</strong></td>
<td>适配器模式★★★★☆</td>
<td>将一个类的接口转换成客户希望的另外一个接口。使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</td>
</tr>
<tr>
<td>桥接模式★★★☆☆</td>
<td>将抽象部分与实际部分分离，使它们都可以独立的变化。</td>
<td></td>
</tr>
<tr>
<td>组合模式★★☆☆☆</td>
<td>将对象组合成树形结构以表示“部分--整体”的层次结构。使得用户对单个对象和组合对象的使用具有一致性。</td>
<td></td>
</tr>
<tr>
<td>装饰模式★★★☆☆</td>
<td>动态的给一个对象添加一些额外的职责。就增加功能来说，此模式比生成子类更为灵活。</td>
<td></td>
</tr>
<tr>
<td>外观模式★★★★★</td>
<td>为子系统中的一组接口提供一个一致的界面，此模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。</td>
<td></td>
</tr>
<tr>
<td>享元模式★☆☆☆☆</td>
<td>以共享的方式高效的支持大量的细粒度的对象。</td>
<td></td>
</tr>
<tr>
<td>代理模式★★★★☆</td>
<td>为其他对象提供一种代理以控制对这个对象的访问。</td>
<td></td>
</tr>
<tr>
<td><strong>行为型模式Behavioral Pattern（11）</strong></td>
<td>职责链模式★★☆☆☆</td>
<td>在该模式里，很多对象由每一个对象对其下家的引用而连接起来形成一条链。请求在这个链上传递，直到链上的某一个对象决定处理此请求，这使得系统可以在不影响客户端的情况下动态地重新组织链和分配责任。</td>
</tr>
<tr>
<td>命令模式★★★★☆</td>
<td>将一个请求封装为一个对象，从而使你可用不同的请求对客户端进行参数化；对请求排队或记录请求日志，以及支持可撤销的操作。</td>
<td></td>
</tr>
<tr>
<td>解释器模式★☆☆☆☆</td>
<td>如何为简单的语言定义一个语法，如何在该语言中表示一个句子，以及如何解释这些句子。</td>
<td></td>
</tr>
<tr>
<td>迭代器模式★☆☆☆☆</td>
<td>提供了一种方法顺序来访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。</td>
<td></td>
</tr>
<tr>
<td>中介者模式★★☆☆☆</td>
<td>定义一个中介对象来封装系列对象之间的交互。终结者使各个对象不需要显示的相互调用 ，从而使其耦合性松散，而且可以独立的改变他们之间的交互。</td>
<td></td>
</tr>
<tr>
<td>备忘录模式★★☆☆☆</td>
<td>是在不破坏封装的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。</td>
<td></td>
</tr>
<tr>
<td>观察者模式★★★★★</td>
<td>定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。</td>
<td></td>
</tr>
<tr>
<td>状态模式★★☆☆☆</td>
<td>对象的行为，依赖于它所处的状态。</td>
<td></td>
</tr>
<tr>
<td>策略模式★★★★☆</td>
<td>准备一组算法，并将每一个算法封装起来，使得它们可以互换。</td>
<td></td>
</tr>
<tr>
<td>模板方法模式★★★☆☆</td>
<td>得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。</td>
<td></td>
</tr>
<tr>
<td>访问者模式★☆☆☆☆</td>
<td>表示一个作用于某对象结构中的各元素的操作，它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作。</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="创建型模式" tabindex="-1"><a class="header-anchor" href="#创建型模式" aria-hidden="true">#</a> 创建型模式</h3>
<p>用于描述&quot;怎么样创建对象&quot;，它的主要特点就是&quot;将对象的创建和使用分离&quot;</p>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '../README.md' style='float:left'>⬆️上一节🔗</a><a href = '2.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/go-advancend/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


