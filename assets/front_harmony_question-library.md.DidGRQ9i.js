import{_ as a,c as e,o as r,a5 as t}from"./chunks/framework.LSAl2vV1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front/harmony/question-library.md","filePath":"front/harmony/question-library.md","lastUpdated":1722938083000}'),i={name:"front/harmony/question-library.md"},l=t('<h3 id="hap-hsp-har" tabindex="-1">HAP / HSP / HAR <a class="header-anchor" href="#hap-hsp-har" aria-label="Permalink to &quot;HAP / HSP / HAR&quot;">​</a></h3><p><a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/hap-package-V5" target="_blank" rel="noreferrer"> HAP/ HSP / HAR 官方文档</a></p><h4 id="hap" tabindex="-1">HAP <a class="header-anchor" href="#hap" aria-label="Permalink to &quot;HAP&quot;">​</a></h4><p>HAP（Harmony Ability Package）是应用安装和运行的基本单元。HAP包是由代码、资源、第三方库、配置文件等打包生成的模块包，其主要分为两种类型：entry和feature。</p><ul><li>entry：应用的主模块，作为应用的入口，提供了应用的基础功能。</li><li>feature：应用的动态特性模块，作为应用能力的扩展，可以根据用户的需求和设备类型进行选择性安装。</li></ul><p>应用程序包可以只包含一个基础的entry包，也可以包含一个基础的entry包和多个功能性的feature包。</p><h5 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h5><ul><li><p>单HAP场景：如果只包含UIAbility组件，无需使用ExtensionAbility组件，优先采用单HAP（即一个entry包）来实现应用开发。虽然一个HAP中可以包含一个或多个UIAbility组件，为了避免不必要的资源加载，推荐采用“一个UIAbility+多个页面”的方式。</p></li><li><p>多HAP场景：如果应用的功能比较复杂，需要使用ExtensionAbility组件，可以采用多HAP（即一个entry包+多个feature包）来实现应用开发，每个HAP中包含一个UIAbility组件或者一个ExtensionAbility组件。在这种场景下，可能会存在多个HAP引用相同的库文件，导致重复打包的问题。</p></li></ul><h4 id="hsp" tabindex="-1">HSP <a class="header-anchor" href="#hsp" aria-label="Permalink to &quot;HSP&quot;">​</a></h4><p>HSP（Harmony Shared Package）是动态共享包，可以包含代码、C++库、资源和配置文件，通过HSP可以实现代码和资源的共享。HSP不支持独立发布，而是跟随其宿主应用的APP包一起发布，与宿主应用同进程，具有相同的包名和生命周期。</p><h5 id="使用场景-1" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景-1" aria-label="Permalink to &quot;使用场景&quot;">​</a></h5><ul><li>多个HAP/HSP共用的代码和资源放在同一个HSP中，可以提高代码、资源的可重用性和可维护性，同时编译打包时也只保留一份HSP代码和资源，能够有效控制应用包大小。</li><li>HSP在运行时按需加载，有助于提升应用性能。</li><li>同一个组织内部的多个应用之间，可以使用集成态HSP实现代码和资源的共享。</li></ul><h4 id="har" tabindex="-1">HAR <a class="header-anchor" href="#har" aria-label="Permalink to &quot;HAR&quot;">​</a></h4><p>HAR（Harmony Archive）是静态共享包，可以包含代码、C++库、资源和配置文件。通过HAR可以实现多个模块或多个工程共享ArkUI组件、资源等相关代码。</p><h5 id="使用场景-2" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景-2" aria-label="Permalink to &quot;使用场景&quot;">​</a></h5><ul><li>作为二方库，发布到<a href="https://ohpm.openharmony.cn/" target="_blank" rel="noreferrer">OHPM</a>私仓，供公司内部其他应用使用。</li><li>作为三方库，发布到<a href="https://ohpm.openharmony.cn/" target="_blank" rel="noreferrer">OHPM</a>中心仓，供其他应用使用。</li></ul>',16),o=[l];function n(h,s,P,p,c,d){return r(),e("div",null,o)}const A=a(i,[["render",n]]);export{u as __pageData,A as default};
