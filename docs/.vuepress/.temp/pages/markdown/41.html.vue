<template><div><h2 id="浅谈-linux-中的根文件系统-rootfs-的原理和介绍" tabindex="-1"><a class="header-anchor" href="#浅谈-linux-中的根文件系统-rootfs-的原理和介绍" aria-hidden="true">#</a> 浅谈 linux 中的根文件系统（rootfs 的原理和介绍）</h2>
<nav class="table-of-contents"><ul><li><router-link to="#浅谈-linux-中的根文件系统-rootfs-的原理和介绍">浅谈 linux 中的根文件系统（rootfs 的原理和介绍）</router-link></li><li><router-link to="#一、先交代一下文件系统">一、先交代一下文件系统</router-link></li><li><router-link to="#二、什么是根文件系统">二、什么是根文件系统</router-link></li><li><router-link to="#三、根文件系统为什么这么重要">三、根文件系统为什么这么重要</router-link></li><li><router-link to="#四、如何在内核中挂载根文件系统">四、如何在内核中挂载根文件系统</router-link></li><li><router-link to="#五、根文件系统各个常用目录简介">五、根文件系统各个常用目录简介</router-link></li><li><router-link to="#六、顺便说下-linux-文件系统的常用目录">六、顺便说下 linux 文件系统的常用目录</router-link></li></ul></nav>
<p>[toc]</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>linux 中有一个让很多初学者都不是特别清楚的概念，叫做 “根文件系统”。我接触 linux 前前后后也好几年了，但是对这个问题，至今也不是特别的清楚，至少没法给出一个很全面很到位的解释。于是，今天我们就来理一理这个话题。</p>
</div>
<h2 id="一、先交代一下文件系统" tabindex="-1"><a class="header-anchor" href="#一、先交代一下文件系统" aria-hidden="true">#</a> 一、先交代一下文件系统</h2>
<p>在开始讨论根文件系统这个话题之前，我们必首先交代一下文件系统这个概念。毕竟，根文件系统只是文件系统中的一种比较特殊的形式而已。根据伟大的百度百科：</p>
<p>文件系统是操作系统用于明确存储设备（常见的是磁盘，也有基于 NAND Flash 的固态硬盘）或分区上的文件的方法和数据结构；即在存储设备上组织文件的方法。操作系统中负责管理和存储文件信息的软件机构称为文件管理系统，简称文件系统。文件系统由三部分组成：文件系统的接口，对对象操作和管理的软件集合，对象及属性。从系统角度来看，文件系统是对文件存储设备的空间进行组织和分配，负责文件存储并对存入的文件进行保护和检索的系统。具体地说，它负责为用户建立文件，存入、读出、修改、转储文件，控制文件的存取，当用户不再使用时撤销文件等。</p>
<p>文件系统的重要性，我想大家都很清楚，不用多说了。这里有一句话，我觉得非常精辟而且到位的点出了文件系统在 linux 中的重要性：</p>
<p>尽管内核是 linux 的核心，但<strong>文件却是用户与操作系统交互所采用的主要工具</strong>。这对 linux 来说尤其如此，这是因为在 UNIX 传统中，它使用文件 I/O 机制管理硬件设备和数据文件。</p>
<h2 id="二、什么是根文件系统" tabindex="-1"><a class="header-anchor" href="#二、什么是根文件系统" aria-hidden="true">#</a> 二、什么是根文件系统</h2>
<p>然后来解释一下 “根文件系统” 这个名词的基本概念。同样引自百度百科的解释：</p>
<p>根文件系统首先是内核启动时所 mount 的第一个文件系统，内核代码映像文件保存在根文件系统中，而系统引导启动程序会在根文件系统挂载之后从中把一些基本的初始化脚本和服务等加载到<a href="https://so.csdn.net/so/search?q=%E5%86%85%E5%AD%98&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">内存<ExternalLinkIcon/></a>中去运行。</p>
<p>展开来细说就是，根文件系统首先是一种文件系统，该文件系统不仅具有普通文件系统的存储数据文件的功能，但是相对于普通的文件系统，它的特殊之处在于，它是内核启动时所挂载（mount）的第一个文件系统，内核代码的映像文件保存在根文件系统中，系统引导启动程序会在根文件系统挂载之后从中把一些初始化脚本（如 rcS,inittab）和服务加载到内存中去运行。我们要明白文件系统和内核是完全独立的两个部分。在嵌入式中移植的内核下载到开发板上，是没有办法真正的启动 Linux 操作系统的，会出现无法加载文件系统的错误。</p>
<h2 id="三、根文件系统为什么这么重要" tabindex="-1"><a class="header-anchor" href="#三、根文件系统为什么这么重要" aria-hidden="true">#</a> 三、根文件系统为什么这么重要</h2>
<p>根文件系统之所以在前面加一个”根 “，说明它是加载其它文件系统的” 根“，那么如果没有这个根，其它的文件系统也就没有办法进行加载的。</p>
<p>根文件系统包含系统启动时所必须的目录和关键性的文件，以及使其他文件系统得以挂载（mount）所必要的文件。例如：</p>
<ol>
<li>init 进程的应用程序必须运行在根文件系统上；</li>
<li>根文件系统提供了根目录 “/”；</li>
<li>linux 挂载分区时所依赖的信息存放于根文件系统 / etc/fstab 这个文件中；</li>
<li>shell 命令程序必须运行在根文件系统上，譬如 ls、cd 等命令；</li>
</ol>
<p>总之：一套 linux 体系，只有内核本身是不能工作的，必须要 rootfs（上的 etc 目录下的配置文件、/bin /sbin 等目录下的 shell 命令，还有 / lib 目录下的库文件等 ···）相配合才能工作。</p>
<p>Linux 启动时，第一个必须挂载的是根文件系统；若系统不能从指定设备上挂载根文件系统，则系统会出错而退出启动。成功之后可以自动或手动挂载其他的文件系统。因此，一个系统中可以同时存在不同的文件系统。在 Linux 中将一个文件系统与一个存储设备关联起来的过程称为挂载（mount）。使用 mount 命令将一个文件系统附着到当前文件系统层次结构中（根）。在执行挂装时，要提供文件系统类型、文件系统和一个挂装点。根文件系统被挂载到根目录下 “/” 上后，在根目录下就有根文件系统的各个目录，文件：/bin /sbin /mnt 等，再将其他分区挂接到 / mnt 目录上，/mnt 目录下就有这个分区的各个目录和文件。</p>
<h2 id="四、如何在内核中挂载根文件系统" tabindex="-1"><a class="header-anchor" href="#四、如何在内核中挂载根文件系统" aria-hidden="true">#</a> 四、如何在内核中挂载根文件系统</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>init/main.c->

start_kernel()->vfs_caches_init(totalram_pages)–>

mnt_init()–>

/* sysfs 用来记录和展示 linux 驱动模型，sysfs 先于 rootfs 挂载是为全面展示 linux 驱动模型做好准备 */
　　　　　/* mnt_init() 调用 sysfs_init() 注册并挂载 sysfs 文件系统，然后调用 kobject_create_and_add() 创建 fs 目录 */
　　　　　sysfs_init();

/* init_rootfs() 注册 rootfs，然后调用 init_mount_tree() 挂载 rootfs */
　　　　　init_rootfs();

init_mount_tree();


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、sysfs 文件系统目前还没有挂载到 rootfs 的某个挂载点上，后续 init 程序会把 sysfs 挂载到 rootfs 的 sys 挂载点上；</p>
<p>2、rootfs 是基于内存的文件系统，所有操作都在内存中完成；也没有实际的存储设备，所以不需要设备驱动程序的参与。基于以上原因，linux 在启动阶段使用 rootfs 文件系统，当磁盘驱动程序和磁盘文件系统成功加载后，linux 系统会将系统根目录从 rootfs 切换到磁盘文件系统。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>start_kernel
　　vfs_caches_init
　　　　mnt_init
　　　　　　init_rootfs 注册 rootfs 文件系统
　　　　　　init_mount_tree 挂载 rootfs 文件系统
　　　　　　　　vfs_kern_mount
　　　　　　　　　　mount_fs
　　　　　　　　　　　　type->mount 其实是 rootfs_mount
　　　　　　　　　　　　　　mount_nodev
　　　　　　　　　　　　　　　　fill_super 其实是 ramfs_fill_super
　　　　　　　　　　　　　　　　　　inode = ramfs_get_inode(sb, NULL, S_IFDIR | fsi->mount_opts.mode, 0);
　　　　　　　　　　　　　　　　　　sb->s_root = d_make_root(inode);
　　　　　　　　　　　　　　　　　　　　static const struct qstr name = QSTR_INIT("/", 1);[1*]
　　　　　　　　　　　　　　　　　　　　__d_alloc(root_inode->i_sb, &amp;name);
　　　　　　　　　　…
　　　　　　　　　　mnt->mnt.mnt_root = root;[2*]
　　　　　　　　　　mnt->mnt.mnt_sb = root->d_sb;[3*]
　　　　　　　　　　mnt->mnt_mountpoint = mnt->mnt.mnt_root;[4*]
　　　　　　　　　　mnt->mnt_parent = mnt;[5*]
root.mnt = mnt;
　　　　　　　　root.dentry = mnt->mnt_root;
　　　　　　　　mnt->mnt_flags |= MNT_LOCKED;
　　　　　　　　set_fs_pwd(current->fs, &amp;root);
　　　　　　　　set_fs_root(current->fs, &amp;root);
　　…
　　rest_init
　　kernel_thread(kernel_init, NULL, CLONE_FS);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行 kernel_init 之前，会建立 roofs 文件系统。</p>
<p>[1] 处设置了根目录的名字为 “/”；
[2] 处设置了 vfsmount 中的 root 目录；
[3] 处设置了 vfsmount 中的超级块；
[4] 处设置了 vfsmount 中的文件挂载点，指向了自己；
[5] 处设置了 vfsmount 中的父文件系统的 vfsmount 为自己；</p>
<h2 id="五、根文件系统各个常用目录简介" tabindex="-1"><a class="header-anchor" href="#五、根文件系统各个常用目录简介" aria-hidden="true">#</a> 五、根文件系统各个常用目录简介</h2>
<p>正常来说，根文件系统至少包括以下目录：</p>
<ol>
<li>/etc/：存储重要的配置文件。</li>
<li>/bin/：存储常用且开机时必须用到的执行文件。</li>
<li>/sbin/：存储着开机过程中所需的系统执行文件。</li>
<li>/lib/：存储 / bin / 及 / sbin / 的执行文件所需的链接库，以及 Linux 的内核模块。</li>
<li>/dev/：存储设备文件。</li>
</ol>
<p>注：五大目录必须存储在根文件系统上，缺一不可。</p>
<h2 id="六、顺便说下-linux-文件系统的常用目录" tabindex="-1"><a class="header-anchor" href="#六、顺便说下-linux-文件系统的常用目录" aria-hidden="true">#</a> 六、顺便说下 linux 文件系统的常用目录</h2>
<ol>
<li><strong>/bin 目录</strong>
该目录下存放所有用户都可以使用的、基本的命令，这些命令在挂接其它文件系统之前就可以使用，所以 / bin 目录必须和根文件系统在同一个分区中。
/bin 目录下常用的命令有：cat，chgrp，chmod，cp，ls，sh，kill，mount，umount，mkdir，mknod，test 等，我们在利用 Busybox 制作根文件系统时，在生成的 bin 目录下，可以看到一些可执行的文件，也就是可用的一些命令。</li>
<li><strong>/sbin 目录</strong>
该目录下存放系统命令，即只有管理员能够使用的命令，系统命令还可以存放在 / usr/sbin,/usr/local/sbin 目录下，/sbin 目录中存放的是基本的系统命令，它们用于启动系统，修复系统等，与 / bin 目录相似，在挂接其他文件系统之前就可以使用 / sbin，所以 / sbin 目录必须和根文件系统在同一个分区中。
/sbin 目录下常用的命令有：shutdown，reboot，fdisk，fsck 等，本地用户自己安装的系统命令放在 / usr/local/sbin 目录下。</li>
<li><strong>/dev 目录</strong>
该目录下存放的是设备文件，设备文件是 Linux 中特有的文件类型，在 Linux 系统下，以文件的方式访问各种设备，即通过读写某个设备文件操作某个具体硬件。比如通过 &quot;dev/ttySAC0&quot; 文件可以操作串口 0，通过 &quot;/dev/mtdblock1&quot; 可以访问 MTD 设备的第 2 个分区。</li>
<li><strong>/etc 目录</strong>
该目录下存放着各种配置文件，对于 PC 上的 Linux 系统，/etc 目录下的文件和目录非常多，这些目录文件是可选的，它们依赖于系统中所拥有的应用程序，依赖于这些程序是否需要配置文件。在嵌入式系统中，这些内容可以大为精减。</li>
<li><strong>/lib 目录</strong>
该目录下存放共享库和可加载 (驱动程序)，共享库用于启动系统。运行根文件系统中的可执行程序，比如：/bin /sbin 目录下的程序。</li>
<li><strong>/home 目录</strong>
用户目录，它是可选的，对于每个普通用户，在 / home 目录下都有一个以用户名命名的子目录，里面存放用户相关的配置文件。</li>
<li><strong>/root 目录</strong>
根用户的目录，与此对应，普通用户的目录是 / home 下的某个子目录。</li>
<li><strong>/usr 目录</strong>
/usr 目录的内容可以存在另一个分区中，在系统启动后再挂接到根文件系统中的 / usr 目录下。里面存放的是共享、只读的程序和数据，这表明 / usr 目录下的内容可以在多个主机间共享，这些主要也符合 FHS 标准的。/usr 中的文件应该是只读的，其他主机相关的，可变的文件应该保存在其他目录下，比如 / var。/usr 目录在嵌入式中可以精减。</li>
<li><strong>/var 目录</strong>
与 / usr 目录相反，/var 目录中存放可变的数据，比如 spool 目录 (mail,news)，log 文件，临时文件。</li>
<li><strong>/proc 目录</strong>
这是一个空目录，常作为 proc 文件系统的挂接点，proc 文件系统是个虚拟的文件系统，它没有实际的存储设备，里面的目录，文件都是由内核临时生成的，用来表示系统的运行状态，也可以操作其中的文件控制系统。</li>
<li><strong>/mnt 目录</strong>
用于临时挂载某个文件系统的挂接点，通常是空目录，也可以在里面创建一引起空的子目录，比如 / mnt/cdram /mnt/hda1 。用来临时挂载光盘、硬盘。</li>
<li><strong>/tmp 目录</strong>
用于存放临时文件，通常是空目录，一些需要生成临时文件的程序用到的 / tmp 目录下，所以 / tmp 目录必须存在并可以访问。</li>
</ol>
</div></template>


