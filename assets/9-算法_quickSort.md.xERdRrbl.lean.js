import{_ as a,c as n,o as h,a4 as i,j as s}from"./chunks/framework.SWC5TOcr.js";const u=JSON.parse('{"title":"说说你对快速排序的理解？如何实现？应用场景？","description":"","frontmatter":{},"headers":[],"relativePath":"9-算法/quickSort.md","filePath":"9-算法/quickSort.md","lastUpdated":1718284054000}'),l={name:"9-算法/quickSort.md"},t=i("",7),p=s("ul",null,[s("li",null,[s("p",null,"首先从表中选取一个记录的关键字作为分割点（称为“枢轴”或者支点，一般选择第一个关键字），例如选取 49")]),s("li",{"27，38，13，49，65，97，76，49":""},[s("p",null,"将表格中大于 49 个放置于 49 的右侧，小于 49 的放置于 49 的左侧，假设完成后的无序表为：")]),s("li",null,[s("p",null,"以 49 为支点，将整个无序表分割成了两个部分，分别为{27，38，13}和{65，97，76，49}，继续采用此种方法分别对两个子表进行排序")]),s("li",{"49，65，97，76":""},[s("p",null,"前部分子表以 27 为支点，排序后的子表为{13，27，38}，此部分已经有序；后部分子表以 65 为支点，排序后的子表为")]),s("li",{"76，":"",97:""},[s("p",null,"此时前半部分子表中的数据已完成排序；后部分子表继续以 65 为支点，将其分割为{49}和{97，76}，前者不需排序，后者排序后的结果为")]),s("li",{"13，27，38，49，49，65，76，97":""},[s("p",null,"通过以上几步的排序，最后由子表{13，27，38}、{49}、{49}、{65}、{76，97}构成有序表：")])],-1),k=i("",15),e=[t,p,k];function r(E,d,g,c,o,y){return h(),n("div",null,e)}const _=a(l,[["render",r]]);export{u as __pageData,_ as default};
