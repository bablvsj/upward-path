import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.DialySl-.js";const u=JSON.parse('{"title":"常见面试智力题总结","description":"","frontmatter":{},"headers":[],"relativePath":"offer/算法/智力题.md","filePath":"offer/算法/智力题.md","lastUpdated":1718618687000}'),e={name:"offer/算法/智力题.md"},l=p(`<h1 id="常见面试智力题总结" tabindex="-1">常见面试智力题总结 <a class="header-anchor" href="#常见面试智力题总结" aria-label="Permalink to &quot;常见面试智力题总结&quot;">​</a></h1><p>本部分主要是笔者在练习常见面试智力题所做的笔记，如果出现错误，希望大家指出！</p><h2 id="常见智力题" tabindex="-1">常见智力题 <a class="header-anchor" href="#常见智力题" aria-label="Permalink to &quot;常见智力题&quot;">​</a></h2><ol><li><p>时针与分针夹角度数问题？</p><p>分析：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>当时间为 m 点 n 分时，其时针与分针夹角的度数为多少？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我们可以这样考虑，分针每走一格为 6 度，分针每走一格对应的时针会走 0.5 度。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>时针每走一格为 30 度。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此，时针走过的度数为 m * 30 + n * 0.5，分针走过的度数为 n * 6。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此时针与分针的夹角度数为 |m * 30 + n * 0.5 - n * 6|;</span></span></code></pre></div><p>答案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>因此时针与分针的夹角度数为 |m * 30 + n * 0.5 - n * 6|;</span></span></code></pre></div><p>详细资料参考： <a href="https://blog.csdn.net/prstaxy/article/details/22210829" target="_blank" rel="noreferrer">《面试智力题 — 时针与分针夹角度数问题》</a></p></li><li><p>用3升，5升杯子怎么量出4升水？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>（1）将 5 升杯子装满水，然后倒入 3 升杯子中，之后 5 升杯子还剩 2 升水。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）将 3 升杯子的水倒出，然后将 5 升杯子中的 2 升水倒入 3 升杯子中。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3）将 5 升杯子装满水，然后向 3 升杯子中倒水，直到 3 升杯子装满为止，此时 5 升杯子中就还剩 4 升水。</span></span></code></pre></div></li><li><p>四个药罐中有一个浑浊的药罐，浑浊的每片药片都比其他三个干净的药罐多一克，如何只用一次天平找出浑浊的药罐？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>由于浑浊的每片药片比正常药片都多出了一克，因此我认为可以通过控制药片的数量来实现判断。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）首先将每个药罐进行编号，分别标记为 1、2、3、4 号药罐。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）然后从 1 号药罐中取出 1 片药片，从 2 号药罐中取出 2 片药片，从 3 号药罐中取出 3 片药片，从 4 号药罐中取出 4</span></span>
<span class="line"><span>    片药片。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3）将 10 片药片使用天平称重，药片的重量比正常重量多出几克，就是哪一号药罐的问题。</span></span></code></pre></div></li><li><p>四张卡片，卡片正面是数字，反面是字母。现在桌上四张卡片，状态为 a 1 b 2 现在我想要证明 a 的反面必然是 1 我只能翻两张牌，我翻哪两张？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我认为证明 a 的反面一定是 1 的充要条件为 a 的反面为 1，并且 2 的反面不能为 a，因此应该翻 a 和 2 两张牌。</span></span></code></pre></div></li><li><p>赛马问题，25 匹马，5 个赛道，最少几次能选出最快的三匹马？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我认为一共至少需要 7 次才能选出最快的三匹马。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）首先，我们将 25 匹马分为 5 组，每组进行比赛，选出每组最快的三匹马，其余的马由于已经不可能成为前三了，因此可以直</span></span>
<span class="line"><span>    接淘汰掉，那么我们现在还剩下了 15 匹马。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）然后我们将 5 组中的第一名来进行一轮比赛，最终的结果能够确定最快的马一定是第一名，四五名的马以及它们对应组的其余</span></span>
<span class="line"><span>    马就可以淘汰掉了，因为它们已经没有进入前三的机会了。并且第二名那一组的第三名和第三组的第二第三名都可以淘汰掉了，</span></span>
<span class="line"><span>    它们也没有进入前三的机会了。因此我们最终剩下了第一名那一组的二三名和第二名那一组的一二名，以及第三名一共 5 匹马，</span></span>
<span class="line"><span>    它们都有竞争最快第二第三的机会。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3）最后一次对最后的 5 匹马进行比赛，选择最快的一二名作为最终结果的二三名，因此就能够通过 7 次比较，选择出最快的马。</span></span></code></pre></div></li><li><p>五队夫妇参加聚会，每个人不能和自己的配偶握手，只能最多和他人握手一次。A问了其他人，发现每个人的握手次数都 不同，那么A的配偶握手了几次？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>（1）由于每个人不能和自己的配偶握手，并且最多只能和他人握手一次，因此一个人最多能握 8 次手。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）因为 A 问了除自己配偶的其他人，每个人的握手次数都不同。因此一共有九种握手的情况，由于一个人最多只能握 8 次手，因</span></span>
<span class="line"><span>    此握手的情况分别为 0、1、2、3、4、5、6、7、8 这九种情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3）我们首先分析握了 8 次手的人，由于他和除了自己配偶的每一个人都握了一次手，因此其他人的握手次数都不为 0，因此只有</span></span>
<span class="line"><span>    他的配偶握手次数为0，由此我们可以知道握手次数为 8 的人和握手次数为 0 的人是配偶。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（4）我们再来分析握了 7 次手的人，他和除了握了 0 次手以外的人都握了一次手，由于握了 8 次手的人和其余人也都握了一次手</span></span>
<span class="line"><span>    ，因此其他人的握手次数至少为 2 ，因此只有他的配偶的握手次数才能为 1。由此我们可以知道握手次数为 7 的人和握手次数</span></span>
<span class="line"><span>    为 1 的人是配偶。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（5）依次可以类推，握手次数为 6 的人和握手次数为 2 的人为配偶，握手次数为 5 的人和握手次数为 3 的人为配偶。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（6）最终剩下了握手次数为 4 的人，按照规律我们可以得知他的配偶的握手次数也为4。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（7）由于 A 和其他人的握手次数都不同，因此我们可以得知握手次数为 4 的人就是 A。因此他的配偶的握手次数为 4 。</span></span></code></pre></div></li><li><p>你只能带行走 60 公里的油，只能在起始点加油，如何穿过 80 公里的沙漠？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>（1）先走到离起点 20 公里的地方，然后放下 20 公里的油在这，然后返回起点加油。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）当第二次到达这时，车还剩 40 公里的油，加上上一次放在这的 20 公里的油，一共就有 60 公里的油，能够走完剩下的路</span></span>
<span class="line"><span>    程。</span></span></code></pre></div></li><li><p>烧一根不均匀的绳要用一个小时，如何用它来判断一个小时十五分钟？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>一共需要三根绳子，假设分别为 1、2、3 号绳子，每个绳子一共有 A、B 两端。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）首先点燃 1 号绳子的 A、B 两端，然后点燃 2 号绳子的 A 端。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）当 1 号绳子燃尽时，此时过去了半小时，然后同时点燃 2 号绳子的 B 端。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3）当 2 号绳子燃尽时，此时又过去了 15 分钟，然后同时点燃 3 号绳子的 A、B 两端。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（4）当 3 号绳子燃尽时，又过去了半小时，以此一共加起来过去了一个小时十五分钟。</span></span></code></pre></div></li><li><p>有7克、2克砝码各一个，天平一只，如何只用这些物品三次将140克的盐分成50、90克各一份？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>（1） 第一次用 7 克砝码和 2 克砝码称取 9 克盐。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2） 第二次再用第一次称取的盐和砝码称取 16 克盐。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3） 第三次再用前两次称取的盐和砝码称取 25 克盐，这样就总共称取了 50 克盐，剩下的就是 90 克。</span></span></code></pre></div></li><li><p>有一辆火车以每小时15公里的速度离开洛杉矶直奔纽约，另一辆火车以第 小时20公里的速度从纽约开往洛杉矶。如果 有一只鸟，以外30公里每小时的速度和 两辆火车现时启动，从洛杉矶出发，碰到另辆车后返回，依次在两辆火车来回 的飞行，直道两面辆火车相遇，请问，这只小鸟飞行了多长距离？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>由于小鸟一直都在飞，直到两车相遇时才停下来。因此小鸟飞行的时间为两车相遇的时间，由于两车是相向而行，因此</span></span>
<span class="line"><span>两车相遇的时间为总路程除以两车的速度之和，然后再用飞行的时间去乘以小鸟的速度，就能够得出小鸟飞行的距离。</span></span></code></pre></div></li><li><p>你有两个罐子，50个红色弹球，50个蓝色弹球，随机选出一个罐子，随机选取出一个弹球放入罐子，怎么给红色弹球最 大的选中机会？在你的计划中，得到红球的准确几率是多少？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>第一个罐子里放一个红球，第二个罐子里放剩余的球，这样概率接近75%，这是概率最大的方法</span></span></code></pre></div></li><li><p>假设你有8个球，其中一个略微重一些，但是找出这个球的惟一方法是将两个球放在天平上对比。最少要称多少次才能找 出这个较重的球？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>最少两次可以称出。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>首先将 8 个球分为 3 组，其中两组为 3 个球，一组为 2 个球。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第一次将两组三个的球进行比较，如果两边相等，则说明重的球在最后一组里。第二次将最后一组的球进行比较即可。如</span></span>
<span class="line"><span>果两边不等，则说明重的球在较重的一边，第二次只需从这一组中随机取两球出来比较即可判断。</span></span></code></pre></div></li><li><p>在房里有三盏灯，房外有三个开关，在房外看不见房内的情况，你只能进门一次，你用什么方法来区分那个开关控制那一 盏灯？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>（1）首先打开一盏灯 10 分钟，然后打开第二盏。</span></span>
<span class="line"><span>（2）进入房间，看看那盏灯亮，摸摸那盏灯热，热的是第一个开关打开的，亮的是第二个开关打开的，而剩下的就是第三个开关打开</span></span>
<span class="line"><span>    的。</span></span></code></pre></div></li><li><p>他们都各自买了两对黑袜和两对白袜，八对袜子的布质、大小完全相同，而每对袜子都有一张商标纸连着。两位盲人不小心 将八对袜子混在一起。他们每人怎样才能取回黑袜和白袜各两对呢？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>将每一对袜子分开，一人拿一只袜子，因为袜子不分左右脚的，因此最后每个人都能取回白袜和黑袜两对。</span></span></code></pre></div></li><li><p>有三筐水果，一筐装的全是苹果，第二筐装的全是橘子，第三筐是橘子与苹果混在一起。筐上的标签都是骗人的，（就是说 筐上的标签都是错的）你的任务是拿出其中一筐，从里面只拿一只水果，然后正确写出三筐水果的标签。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>从混合标签里取出一个水果，取出的是什么水果，就写上相应的标签。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对应水果标签的筐的标签改为另一种水果。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>另一种水果标签的框改为混合。</span></span></code></pre></div></li><li><p>一个班级60%喜欢足球，70%喜欢篮球，80%喜欢排球，问即三种球都喜欢占比有多少？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>（1）首先确定最多的一种情况，就是 60% 喜欢足球的人同时也喜欢篮球和排球，此时为三种球都喜欢的人的最大比例。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）然后确定最小的一种情况，根据题目可以知道有 40%的人不喜欢足球，30%的人不喜欢篮球，20%的人不喜欢排球，因此有最多</span></span>
<span class="line"><span>    90% 的人三种球中有一种球不喜欢，因此三种球都喜欢的人的最小比例为 10%。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此三种球都喜欢的人占比为 10%-60%</span></span></code></pre></div></li><li><p>五只鸡五天能下五个蛋，一百天下一百个蛋需要多少只鸡？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>五只鸡五天能下五个蛋，平均下来五只鸡每天能下一个蛋，因此五只鸡一百天就能够下一百个蛋。</span></span></code></pre></div><p>更多的智力题可以参考： <a href="https://blog.csdn.net/hilyoo/article/details/4445858" target="_blank" rel="noreferrer">《经典面试智力题200+题和解答》</a></p></li></ol>`,4),i=[l];function t(c,d,o,h,g,r){return n(),a("div",null,i)}const v=s(e,[["render",t]]);export{u as __pageData,v as default};
