(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{221:function(a,t,s){"use strict";s.r(t);var _=s(0),e=Object(_.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"链表的特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链表的特性"}},[a._v("#")]),a._v(" 链表的特性")]),a._v(" "),s("h3",{attrs:{id:"_1-不支持随机访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-不支持随机访问"}},[a._v("#")]),a._v(" 1. 不支持随机访问")]),a._v(" "),s("ul",[s("li",[a._v("不同与数组，不需要连续的内存空间")]),a._v(" "),s("li",[a._v("通过指针将离散的内存「连接」起来")]),a._v(" "),s("li",[a._v("因此，低效的查找访问： "),s("code",[a._v("O(n)")])])]),a._v(" "),s("h3",{attrs:{id:"_2-高效的插入和删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-高效的插入和删除"}},[a._v("#")]),a._v(" 2. 高效的插入和删除")]),a._v(" "),s("ul",[s("li",[a._v("不考虑查找时间，仅考虑插入和删除的操作时间： "),s("code",[a._v("O(1)")])])]),a._v(" "),s("h2",{attrs:{id:"常见的链表结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的链表结构"}},[a._v("#")]),a._v(" 常见的链表结构")]),a._v(" "),s("h3",{attrs:{id:"单链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单链表"}},[a._v("#")]),a._v(" 单链表")]),a._v(" "),s("ul",[s("li",[a._v("每个结点通过后继指针 "),s("code",[a._v("next")]),a._v(" 指向下一个结点")]),a._v(" "),s("li",[a._v("尾结点指向空地址 "),s("code",[a._v("null")])])]),a._v(" "),s("h3",{attrs:{id:"循环链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#循环链表"}},[a._v("#")]),a._v(" 循环链表")]),a._v(" "),s("ul",[s("li",[a._v("相比单链表，尾结点指向头节点，尾首相连")]),a._v(" "),s("li",[a._v("适合具有环型结构的数据")])]),a._v(" "),s("h3",{attrs:{id:"双向链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双向链表"}},[a._v("#")]),a._v(" 双向链表")]),a._v(" "),s("ul",[s("li",[a._v("相比单链表，每个结点同时拥有后继指针 "),s("code",[a._v("next")]),a._v(" 和前驱指针 "),s("code",[a._v("prev")])]),a._v(" "),s("li",[a._v("删除指定结点或在指定结点前插入新结点时，相比单链表更有优势\n单链表需要 "),s("code",[a._v("O(n)")]),a._v(" 遍历找到前驱结点，再进行删除操作，而双向链表只需要 "),s("code",[a._v("O(1)")]),a._v(" 时间")]),a._v(" "),s("li",[a._v("缺点是会占用更多的内存空间")])]),a._v(" "),s("h2",{attrs:{id:"数组与链表比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组与链表比较"}},[a._v("#")]),a._v(" 数组与链表比较")]),a._v(" "),s("ul",[s("li",[a._v("数组优于随机访问；链表优于插入删除")]),a._v(" "),s("li",[a._v("数组使用连续的内存空间，可以利用 CPU 缓存机制预读数组中的数据，缺点是系统可能没有足够的连续空间；链表并不使用连续内存，因此无法借助 CPU 缓存预读")]),a._v(" "),s("li",[a._v("数组的大小固定，扩容需要拷贝；链表无大小限制，天然支持动态扩容")]),a._v(" "),s("li",[a._v("链表需要额外的内存，频繁的插入删除，会导致频繁的内存申请释放，容易造成内存碎片和频繁的 GC")])]),a._v(" "),s("h2",{attrs:{id:"链表的技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链表的技巧"}},[a._v("#")]),a._v(" 链表的技巧")]),a._v(" "),s("h3",{attrs:{id:"_1-哑结点（dummy-node）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-哑结点（dummy-node）"}},[a._v("#")]),a._v(" 1. 哑结点（dummy node）")]),a._v(" "),s("p",[a._v("对链表进行操作时，特别是循环型操作，首结点常常会需要特殊的操作逻辑，可以借助哑结点简化代码")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ListNode")]),a._v(" dummy "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ListNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ndummy"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("next "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"_2-注意边界条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-注意边界条件"}},[a._v("#")]),a._v(" 2. 注意边界条件")]),a._v(" "),s("ul",[s("li",[a._v("如果链表为空？")]),a._v(" "),s("li",[a._v("如果链表只包含 1 个或 2 个结点（根据具体问题）？")]),a._v(" "),s("li",[a._v("代码逻辑对于头尾结点是否适用？")])])])}),[],!1,null,null,null);t.default=e.exports}}]);