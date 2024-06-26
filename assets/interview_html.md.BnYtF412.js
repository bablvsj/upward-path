import{_ as a,c as e,o as t,a4 as l}from"./chunks/framework.BkDMlYxv.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/html.md","filePath":"interview/html.md","lastUpdated":1719396101000}'),i={name:"interview/html.md"},o=l('<h2 id="_1-从浏览器地址栏输入-url-到请求返回发生了什么" tabindex="-1">1. 从浏览器地址栏输入 url 到请求返回发生了什么 <a class="header-anchor" href="#_1-从浏览器地址栏输入-url-到请求返回发生了什么" aria-label="Permalink to &quot;1. 从浏览器地址栏输入 url 到请求返回发生了什么&quot;">​</a></h2><p>参考：<a href="https://github.com/ljianshu/Blog/issues/24" target="_blank" rel="noreferrer">从URL输入到页面展现到底发生什么</a></p><p>URL 主要由 协议、主机、端口、路径、查询参数、锚点6部分组成</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https:// www.baidu.com / 8088 / 20220202 &amp;username=lvxiaobu #start</span></span>\n<span class="line"><span> 协议         主机        端口     路径       查询参数          锚点</span></span></code></pre></div><h3 id="_1-1-输入网址并解析" tabindex="-1">1.1 输入网址并解析 <a class="header-anchor" href="#_1-1-输入网址并解析" aria-label="Permalink to &quot;1.1  输入网址并解析&quot;">​</a></h3><h4 id="浏览器缓存策略" tabindex="-1">浏览器缓存策略 <a class="header-anchor" href="#浏览器缓存策略" aria-label="Permalink to &quot;浏览器缓存策略&quot;">​</a></h4><ul><li>浏览器发送请求前，先看 expires / cache-control 判断是否命中（包括是否过期）强制缓存策略，如果命中，直接从缓存中获取资源（不会发送请求）。若没有命中，进入下一步。</li><li>没有命中强制缓存规则，浏览器会携带标识 （<code>If-Modified-Since</code>和<code>If-None-Match</code> ）发送请求。判断是否命中协商缓存，如果命中，直接从缓存获取资源。如果没有命中，则进入下一步。</li><li>如果两步都没有命中，则直接从服务端获取资源。</li></ul><p><strong>强制缓存</strong>： 强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程。强缓存又分为两种<code>Expires</code>和<code>Cache-Control</code></p><p><strong>协商缓存</strong>： 协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。</p><h4 id="浏览器如何通过域名去查询-url-对应的-ip-呢" tabindex="-1">浏览器如何通过域名去查询 URL 对应的 IP 呢 <a class="header-anchor" href="#浏览器如何通过域名去查询-url-对应的-ip-呢" aria-label="Permalink to &quot;浏览器如何通过域名去查询 URL 对应的 IP 呢&quot;">​</a></h4><ul><li>浏览器缓存：浏览器会按照一定的频率缓存 DNS 记录。</li><li>操作系统缓存：如果浏览器缓存中找不到需要的 DNS 记录，那就去操作系统中找。</li><li>路由缓存：路由器也有 DNS 缓存。</li><li>ISP 的 DNS 服务器：ISP 是互联网服务提供商(Internet Service Provider)的简称，ISP 有专门的 DNS 服务器应对 DNS 查询请求。</li><li>根服务器：ISP 的 DNS 服务器还找不到的话，它就会向根服务器发出请求，进行递归查询（DNS 服务器先问根域名服务器.com 域名服务器的 IP 地址，然后再问.baidu 域名服务器，依次类推）</li></ul><h3 id="_1-2-tcp-ip连接-三次握手" tabindex="-1">1.2 TCP/IP连接：三次握手 <a class="header-anchor" href="#_1-2-tcp-ip连接-三次握手" aria-label="Permalink to &quot;1.2 TCP/IP连接：三次握手&quot;">​</a></h3><p>TCP(Transmission Control Protocol)传输控制协议。 TCP/IP协议将应用层、表示层、会话层合并为应用层，物理层和数据链路层合并为网络接口层。</p><pre><code>TCP/IP协议不仅仅指的是TCP和IP两个协议，⽽是指的⼀个由FTP,SMTP,TCP,UDP,IP,ARP等等协议构成的协议集合。\n</code></pre><h4 id="三次握手" tabindex="-1">三次握手 <a class="header-anchor" href="#三次握手" aria-label="Permalink to &quot;三次握手&quot;">​</a></h4><p>客户端和服务端在进行http请求和返回的工程中，需要创建一个 <code>TCP connection</code> ( 由客户端发起 )。http 不存在连接这个概念，它只有请求和响应。请求和响应都是数据包，它们之间的传输通道就是 TCP connection。</p><p>位码即 TCP标志位 ，有6种标示：</p><ul><li>SYN(synchronous建立联机)</li><li>ACK(acknowledgement 确认)</li><li>PSH(push传送)</li><li>FIN(finish结束)</li><li>RST(reset重置)</li><li>URG(urgent紧急)</li></ul><p><strong>第一次握手</strong>： 主机A发送位码为 <code>SYN=1</code>、随机产生 <code>Seq=X </code>的数据包到服务器，主机B由<code>SYN=1</code>知道，A要求建立联机；（第一次握手由浏览器发起，告诉服务器我要发送请求了）</p><p><strong>第二次握手</strong>：主机B收到请求后要求确认联机信息，向A发送<code>SYN=1、ACK=X+1、随机产生 Seq=Y </code>的包；(第二次握手由服务器发起，告诉浏览器我准备接收，你快发送吧)</p><p><strong>第三次握手</strong>：主机A收到后检查 <code>ACK</code>是否正确，即第一次发送的 <code>Seq+1</code>，以及位码<code>SYN</code>是否为1，若正确，主机A会再发送 <code>ACK=Y+1 ,Seq=Z</code>，主机B收到后确认 <code>ACK</code>值是否为 Seq +1 ，正确则连接建立成功。</p><pre><code>第一次握手可以确认客服端的`发送能力`,第二次握手，服务端`SYN=1,Seq=Y`就确认了`发送能力`,`ACK=X+1`就确认了`接收能力`,所以第三次握手才可以确认客户端的`接收能力`。不然容易出现丢包的现象。\n</code></pre><h4 id="什么是半连接队列" tabindex="-1">什么是半连接队列？ <a class="header-anchor" href="#什么是半连接队列" aria-label="Permalink to &quot;什么是半连接队列？&quot;">​</a></h4><p>服务器第一次收到客户端的 SYN 之后，就会处于 SYN_RCVD 状态，此时双方还没有完全建立其连接，服务器会把此种状态下请求连接放在一个队列里，我们把这种队列称之为<code>半连接队列</code>。</p><p>当然还有一个全连接队列，就是已经完成三次握手，建立起连接的就会放在<code>全连接队列</code>中。如果队列满了就有可能会出现丢包现象。</p><p>这里在补充一点关于SYN-ACK 重传次数的问题： 服务器发送完SYN-ACK包，如果未收到客户确认包，服务器进行首次重传，等待一段时间仍未收到客户确认包，进行第二次重传。如果重传次数超过系统规定的最大重传次数，系统将该连接信息从半连接队列中删除。</p><pre><code>注意，每次重传等待的时间不一定相同，一般会是指数增长，例如间隔时间为 1s，2s，4s，8s…\n</code></pre><h3 id="_1-3-发送http请求" tabindex="-1">1.3 发送HTTP请求 <a class="header-anchor" href="#_1-3-发送http请求" aria-label="Permalink to &quot;1.3 发送HTTP请求&quot;">​</a></h3><p><strong>TCP 三次握手结束后，开始发送 HTTP 请求报文</strong>。<br> 请求报文由请求行（request line）、请求头（header）、请求体三个部分组成。</p><h4 id="请求行" tabindex="-1">请求行 <a class="header-anchor" href="#请求行" aria-label="Permalink to &quot;请求行&quot;">​</a></h4><p>包含请求方法、URL、协议版本</p><ul><li>请求方法包含 8 种：GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS、TRACE。</li><li>URL 即请求地址，由 &lt;协议&gt;：//&lt;主机&gt;：&lt;端口&gt;/&lt;路径&gt;?&lt;参数&gt; 组成</li><li>协议版本即 http 版本号</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>POST  /chapter17/user.html  HTTP/1.1</span></span></code></pre></div><p>以上代码中“POST”代表请求方法，“/chapter17/user.html”表示 URL，“HTTP/1.1”代表协议和协议的版本。</p><h4 id="请求头" tabindex="-1">请求头 <a class="header-anchor" href="#请求头" aria-label="Permalink to &quot;请求头&quot;">​</a></h4><p>包含请求的附加信息，由关键字/值对组成，每行一对，关键字和值用英文冒号“:”分隔。</p><p>请求头部通知服务器有关于客户端请求的信息。它包含许多有关的客户端环境和请求正文的有用信息。其中比如： <strong>Host，表示主机名，虚拟主机； Connection,HTTP/1.1 增加的， 使用 keepalive，即持久连接，一个连接可以发多个请求； User-Agent，请求发出者，兼容性以及定制化需求。</strong></p><h4 id="请求体" tabindex="-1">请求体 <a class="header-anchor" href="#请求体" aria-label="Permalink to &quot;请求体&quot;">​</a></h4><p>可以承载多个请求参数的数据，包含回车符、换行符和请求数据，并不是所有请求都具有请求数据。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>name=tom&amp;password=1234&amp;realName=tomson</span></span></code></pre></div><p>上面代码，承载着 name、password、realName 三个请求参数。</p><h3 id="_1-4-服务器处理请求并返回http报文" tabindex="-1">1.4 服务器处理请求并返回HTTP报文 <a class="header-anchor" href="#_1-4-服务器处理请求并返回http报文" aria-label="Permalink to &quot;1.4 服务器处理请求并返回HTTP报文&quot;">​</a></h3><h4 id="http-响应报文" tabindex="-1">http 响应报文 <a class="header-anchor" href="#http-响应报文" aria-label="Permalink to &quot;http 响应报文&quot;">​</a></h4><p>响应报文由响应行（request line）、响应头部（header）、响应主体三个部分组成。</p><p>(1) 响应行包含：协议版本，状态码，状态码描述</p><p>状态码规则如下：<br> 1xx：指示信息--表示请求已接收，继续处理。<br> 2xx：成功--表示请求已被成功接收、理解、接受。<br> 3xx：重定向--要完成请求必须进行更进一步的操作。<br> 4xx：客户端错误--请求有语法错误或请求无法实现。<br> 5xx：服务器端错误--服务器未能实现合法的请求。</p><p>(2) 响应头部包含响应报文的附加信息，由 名/值 对组成</p><p>(3) 响应主体包含回车符、换行符和响应返回数据，并不是所有响应报文都有响应数据</p><h3 id="_1-5-浏览器解析渲染页面" tabindex="-1">1.5 浏览器解析渲染页面 <a class="header-anchor" href="#_1-5-浏览器解析渲染页面" aria-label="Permalink to &quot;1.5 浏览器解析渲染页面&quot;">​</a></h3><h4 id="根据html解析-dom-树" tabindex="-1">根据HTML解析 DOM 树 <a class="header-anchor" href="#根据html解析-dom-树" aria-label="Permalink to &quot;根据HTML解析 DOM 树&quot;">​</a></h4><ul><li>根据HTML的内容，将标签按照结构解析成为DOM树，DOM树解析的过程是一个深度优先遍历。即先构建当前节点的所有子节点，再构建下一个兄弟节点。</li><li>在读取HTML文档构建DOM树的过程中，若遇到script标签，则DOM树的构建会暂停，直到脚本执行完毕。</li></ul><h4 id="根据css解析-css规则树" tabindex="-1">根据CSS解析 CSS规则树 <a class="header-anchor" href="#根据css解析-css规则树" aria-label="Permalink to &quot;根据CSS解析 CSS规则树&quot;">​</a></h4><ul><li>解析 CSS 规则树时 js 执行将暂停，直至 CSS 规则树就绪。</li><li>浏览器在 CSS 规则树生成之前不会进行渲染。</li></ul><h4 id="结合dom树和css规则树-生成渲染树" tabindex="-1">结合DOM树和CSS规则树，生成渲染树 <a class="header-anchor" href="#结合dom树和css规则树-生成渲染树" aria-label="Permalink to &quot;结合DOM树和CSS规则树，生成渲染树&quot;">​</a></h4><ul><li>DOM 树和 CSS 规则树全部准备好了以后，浏览器才会开始构建渲染树。</li><li>精简 CSS 并可以加快 CSS 规则树的构建，从而加快页面相应速度。</li></ul><h4 id="根据渲染树计算每一个节点的信息-布局" tabindex="-1">根据渲染树计算每一个节点的信息(布局) <a class="header-anchor" href="#根据渲染树计算每一个节点的信息-布局" aria-label="Permalink to &quot;根据渲染树计算每一个节点的信息(布局)&quot;">​</a></h4><ul><li>布局：通过渲染树中渲染对象的信息，计算出每一个渲染对象的位置和尺寸</li><li>回流：在布局完成后，发现了某个部分发生了变化影响了布局，那就需要倒回去重新渲染。</li></ul><h4 id="根据计算好的信息绘制页面" tabindex="-1">根据计算好的信息绘制页面 <a class="header-anchor" href="#根据计算好的信息绘制页面" aria-label="Permalink to &quot;根据计算好的信息绘制页面&quot;">​</a></h4><ul><li>绘制阶段，系统会遍历呈现树，并调用呈现器的“paint”方法，将呈现器的内容显示在屏幕上。</li><li>重绘：某个元素的背景颜色，文字颜色等，不影响元素周围或内部布局的属性，将只会引起浏览器的重绘。</li><li>回流：某个元素的尺寸发生了变化，则需重新计算渲染树，重新渲染。</li></ul><h3 id="_1-6-断开连接-四次挥手" tabindex="-1">1.6 断开连接：四次挥手 <a class="header-anchor" href="#_1-6-断开连接-四次挥手" aria-label="Permalink to &quot;1.6 断开连接：四次挥手&quot;">​</a></h3><ul><li><p><strong>发起方向被动方发送报文，Fin=1、Ack=Z、Seq=X，表示已经没有数据传输了。并进入 FIN_WAIT_1 状态</strong>。(第一次挥手：由浏览器发起的，发送给服务器，我请求报文发送完了，你准备关闭吧)</p></li><li><p><strong>被动方发送报文，Ack=X+1、Seq=Z，表示同意关闭请求。此时主机发起方进入 FIN_WAIT_2 状态</strong>。(第二次挥手：由服务器发起的，告诉浏览器，我请求报文接受完了，我准备关闭了，你也准备吧)</p></li><li><p><strong>被动方向发起方发送报文段，Fin=1、Ack=X、Seq=Y，请求关闭连接。并进入 LAST_ACK 状态</strong>。(第三次挥手：由服务器发起，告诉浏览器，我响应报文发送完了，你准备关闭吧)</p></li><li><p><strong>发起方向被动方发送报文段，Ack、Seq。然后进入等待 TIME_WAIT 状态。被动方收到发起方的报文段以后关闭连接。发起方等待一定时间未收到回复，则正常关闭</strong>。(第四次挥手：由浏览器发起，告诉服务器，我响应报文接受完了，我准备关闭了，你也准备吧)</p></li></ul><h2 id="nan-网络协议分层" tabindex="-1">NAN. 网络协议分层 <a class="header-anchor" href="#nan-网络协议分层" aria-label="Permalink to &quot;NAN. 网络协议分层&quot;">​</a></h2><p>第七层 应用层 各种应用程序协议：HTTP、FTP、SMTP、POP3</p><p>第六层 表示层 信息的语法意义以及它们的关联，如加密解密、转换翻译、压缩解压缩</p><p>第五层 会话层 不同的机器上用户之间建立管理会话</p><p>第四层 传输层 接收上一层的数据，在必要时进行分割，并将这些数据交给网络层， 且保证这些数据段有效到达对端</p><p>第三层 网络层 控制子网的运行，如逻辑运行、分组传输、路由选择</p><p>第二层 数据链路层 物理寻址，同时将原始比特流转变为逻辑传输路线</p><p>第一层 物理层 机械、电子、定时接口通信信道上的原始比特流传输</p>',69),r=[o];function s(n,h,p,c,d,u){return t(),e("div",null,r)}const b=a(i,[["render",s]]);export{S as __pageData,b as default};
