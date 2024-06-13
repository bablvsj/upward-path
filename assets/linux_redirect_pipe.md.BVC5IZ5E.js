import{_ as i,c as s,o as a,a4 as t}from"./chunks/framework.SWC5TOcr.js";const u=JSON.parse('{"title":"说说你对输入输出重定向和管道的理解？应用场景？","description":"","frontmatter":{},"headers":[],"relativePath":"linux/redirect_pipe.md","filePath":"linux/redirect_pipe.md","lastUpdated":1718284054000}'),e={name:"linux/redirect_pipe.md"},l=t(`<h1 id="说说你对输入输出重定向和管道的理解-应用场景" tabindex="-1">说说你对输入输出重定向和管道的理解？应用场景？ <a class="header-anchor" href="#说说你对输入输出重定向和管道的理解-应用场景" aria-label="Permalink to &quot;说说你对输入输出重定向和管道的理解？应用场景？&quot;">​</a></h1><p><img src="https://static.vue-js.com/1036dde0-0634-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p><code>linux</code>中有三种标准输入输出，分别是<code>STDIN</code>，<code>STDOUT</code>，<code>STDERR</code>，对应的数字是0、1、2：</p><ul><li>STDIN 是标准输入，默认从键盘读取信息</li><li>STDOUT 是标准输出，默认将输出结果输出至终端</li><li>STDERR 是标准错误，默认将输出结果输出至终端</li></ul><p>对于任何<code>linux</code>命令的执行会有下面的过程：</p><p><img src="https://static.vue-js.com/1a57caf0-0634-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>一条命令的执行需要键盘等的标准输入，命令的执行和正确或错误，其中的每一个双向箭头就是一个通道，所以数据流可以流入到文件端（<strong>重定向或管道</strong>）</p><p>简单来讲，重定向就是把本来要显示在终端的命令结果，输送到别的地方，分成：</p><ul><li>输入重定向：流出到屏幕如果命令所需的输入不是来自键盘，而是来自指定的文件</li><li>输出重定向：命令的输出可以不显示在屏幕，而是写在指定的文件中</li></ul><p>管道就是把两个命令连接起来使用，一个命令的输出作为另一个命令的输入</p><p>两者的区别在于：</p><ul><li>管道触发两个子进程，执行 | 两边的程序；而重定向是在一个进程内执行。</li><li>管道两边都是shell命令</li><li>重定向符号的右边只能是Linux文件</li><li>重定向符号的优先级大于管道</li></ul><h2 id="二、命令" tabindex="-1">二、命令 <a class="header-anchor" href="#二、命令" aria-label="Permalink to &quot;二、命令&quot;">​</a></h2><p>重定向常见的命令符号有：</p><ul><li>&gt; ： 输出重定向到一个文件或设备 覆盖原来的文件</li></ul><blockquote><p>如果该文件不存在，则新建一个文件</p><p>如果该文件已经存在，会把文件内容覆盖</p><p>这些操纵不会征用用户的确认</p></blockquote><ul><li>&gt;&gt; ：输出重定向到一个文件或设备，但是是 追加原来的文件的末尾</li><li>&lt; ：用于制定命令的输入</li><li>&lt;&lt; ：从键盘的输入重定向为某个命令的输入</li></ul><blockquote><p>以逐行输入的模式（回车键进行换行）</p><p>所有输入的行都将在输入结束字符串之后发送给命令</p></blockquote><ul><li>2&gt; 将一个标准错误输出重定向到一个文件或设备，会覆盖原来的文件</li><li>2&gt;&gt; 将一个标准错误输出重定向到一个文件或设备，是追加到原来的文件</li><li>2&gt;&amp;1：组合符号，将标准错误输出重定向到标准输出相同的地方</li></ul><blockquote><p>1就是代表标准输出</p></blockquote><ul><li>&gt;&amp; 将一个标准错误输出重定向到一个文件或设备覆盖原来的文件</li><li>|&amp; 将一个标准错误管道输出到另一个命令作为输入</li></ul><h2 id="三、应用场景" tabindex="-1">三、应用场景 <a class="header-anchor" href="#三、应用场景" aria-label="Permalink to &quot;三、应用场景&quot;">​</a></h2><p>将当前目录的文件输出重定向到<code>1.txt</code>文件中，并且会清空原有的<code>1.txt</code>的内容</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">txt</span></span></code></pre></div><p>或者以追加的形式，重定向输入到<code>1.txt</code>中</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">txt</span></span></code></pre></div><p>将标准错误输出到某个文件，可以如下：</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> touch </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">txt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cat </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">txt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">touch: 缺少了文件操作数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请尝试执行 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;touch --help&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 来获取更多信息。</span></span></code></pre></div><p>通过组合符号将两者结合一起，无论进程输出的信息是正确还是错误的信息，都会重定向到指定的文件里</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@linguanghui home]# abc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file.txt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@linguanghui home]# cat file.txt </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bash: abc: command </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> found</span></span></code></pre></div><p>再者通过管道查询文件内容是否包含想要的信息：</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat test.txt | grep </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&#39;xxx&#39;</span></span></code></pre></div><p>上述<code>cat test.txt</code>会将<code>test.txt</code>的内容作为标准输出，然后利用管道，将其作为<code>grep -n &#39;xxx&#39;</code>命令的标准输入。</p><h3 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h3><ul><li><a href="https://segmentfault.com/a/1190000020519335" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000020519335</a></li><li><a href="https://murphypei.github.io/blog/2018/04/linux-redirect-pipe" target="_blank" rel="noreferrer">https://murphypei.github.io/blog/2018/04/linux-redirect-pipe</a></li><li><a href="https://www.huaweicloud.com/articles/0fb70e8c724ae79f4fc8d676cd6160d3.html" target="_blank" rel="noreferrer">https://www.huaweicloud.com/articles/0fb70e8c724ae79f4fc8d676cd6160d3.html</a></li></ul>`,36),p=[l];function h(n,d,c,o,k,r){return a(),s("div",null,p)}const E=i(e,[["render",h]]);export{u as __pageData,E as default};
