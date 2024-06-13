import{_ as t,c as h,o as l,a4 as a,j as s,a as i}from"./chunks/framework.SWC5TOcr.js";const C=JSON.parse('{"title":"说说你对正则表达式的理解？应用场景？","description":"","frontmatter":{},"headers":[],"relativePath":"8-JavaScript/regexp.md","filePath":"8-JavaScript/regexp.md","lastUpdated":1718284054000}'),n={name:"8-JavaScript/regexp.md"},k=a("",13),p=s("table",{tabindex:"0"},[s("thead",null,[s("tr",null,[s("th",null,"规则"),s("th",null,"描述")])]),s("tbody",null,[s("tr",null,[s("td",null,"\\"),s("td",null,"转义")]),s("tr",null,[s("td",null,"^"),s("td",null,"匹配输入的开始")]),s("tr",null,[s("td",null,"$"),s("td",null,"匹配输入的结束")]),s("tr",null,[s("td",null,"*"),s("td",null,"匹配前一个表达式 0 次或多次")]),s("tr",null,[s("td",null,"+"),s("td",null,[i("匹配前面一个表达式 1 次或者多次。等价于 "),s("code",null,"{1,}")])]),s("tr",null,[s("td",null,"?"),s("td",null,[i("匹配前面一个表达式 0 次或者 1 次。等价于"),s("code",null,"{0,1}")])]),s("tr",null,[s("td",null,"."),s("td",null,"默认匹配除换行符之外的任何单个字符")]),s("tr",null,[s("td",null,"x(?=y)"),s("td",null,"匹配'x'仅仅当'x'后面跟着'y'。这种叫做先行断言")]),s("tr",null,[s("td",null,"(?<=y)x"),s("td",null,"匹配'x'仅当'x'前面是'y'.这种叫做后行断言")]),s("tr",null,[s("td",null,"x(?!y)"),s("td",null,"仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找")]),s("tr",null,[s("td",null,[i("(?<!"),s("em",null,"y"),i(")"),s("em",null,"x")]),s("td",null,"仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找")]),s("tr",null,[s("td",null,"x|y"),s("td",null,"匹配‘x’或者‘y’")]),s("tr",null,[s("td",{n:""}),s("td",null,"n 是一个正整数，匹配了前面一个字符刚好出现了 n 次")]),s("tr",null,[s("td",{"n,":""}),s("td",null,"n是一个正整数，匹配前一个字符至少出现了n次")]),s("tr",null,[s("td",{"n,m":""}),s("td",null,"n 和 m 都是整数。匹配前面的字符至少n次，最多m次")]),s("tr",null,[s("td",null,"[xyz]"),s("td",null,"一个字符集合。匹配方括号中的任意字符")]),s("tr",null,[s("td",null,"[^xyz]"),s("td",null,"匹配任何没有包含在方括号中的字符")]),s("tr",null,[s("td",null,"\\b"),s("td",null,"匹配一个词的边界，例如在字母和空格之间")]),s("tr",null,[s("td",null,"\\B"),s("td",null,"匹配一个非单词边界")]),s("tr",null,[s("td",null,"\\d"),s("td",null,"匹配一个数字")]),s("tr",null,[s("td",null,"\\D"),s("td",null,"匹配一个非数字字符")]),s("tr",null,[s("td",null,"\\f"),s("td",null,"匹配一个换页符")]),s("tr",null,[s("td",null,"\\n"),s("td",null,"匹配一个换行符")]),s("tr",null,[s("td",null,"\\r"),s("td",null,"匹配一个回车符")]),s("tr",null,[s("td",null,"\\s"),s("td",null,"匹配一个空白字符，包括空格、制表符、换页符和换行符")]),s("tr",null,[s("td",null,"\\S"),s("td",null,"匹配一个非空白字符")]),s("tr",null,[s("td",null,"\\w"),s("td",null,"匹配一个单字字符（字母、数字或者下划线）")]),s("tr",null,[s("td",null,"\\W"),s("td",null,"匹配一个非单字字符")])])],-1),e=a("",68),d=[k,p,e];function r(E,g,F,y,o,c){return l(),h("div",null,d)}const B=t(n,[["render",r]]);export{C as __pageData,B as default};
