(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{383:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[s._v("ArrayList：基于"),a("strong",[s._v("数组")]),s._v("，查询快，增删慢，线程不安全")]),s._v(" "),a("li",[s._v("LinkedList：基于"),a("strong",[s._v("双向链表")]),s._v("，查询慢，增删快，线程不安全")]),s._v(" "),a("li",[s._v("Vector：基于"),a("strong",[s._v("数组")]),s._v("，线程安全，但是效率低下")])]),s._v(" "),a("h2",{attrs:{id:"arraylist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraylist"}},[s._v("#")]),s._v(" ArrayList")]),s._v(" "),a("ol",[a("li",[s._v("基于数组实现，当数组容量不足时，扩容为原来的 "),a("code",[s._v("1.5")]),s._v(" 倍，无缩容操作")]),s._v(" "),a("li",[s._v("创建时可以指定容量，如未指定，则默认大小为 "),a("code",[s._v("10")])]),s._v(" "),a("li",[s._v("支持随机访问，通过索引访问元素，时间复杂度 "),a("code",[s._v("O(1)")])]),s._v(" "),a("li",[s._v("添加元素到尾部或删除尾部元素较快，平均复杂度 "),a("code",[s._v("O(1)")])]),s._v(" "),a("li",[s._v("添加元素到中间或删除中间元素较慢，需要搬移元素，平均复杂度 "),a("code",[s._v("O(n)")])]),s._v(" "),a("li",[s._v("求并集："),a("code",[s._v("addAll()")]),s._v("；求交集："),a("code",[s._v("retainAll()")]),s._v("；求差集："),a("code",[s._v("removeAll()")])]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("transient")]),s._v(" 修饰内部数组，但实现了 "),a("code",[s._v("readObject")]),s._v(" 和 "),a("code",[s._v("writeObject")]),s._v("，避免浪费空间")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认初始容量 10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),s._v("​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" initialCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),s._v("​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 都是浅拷贝")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"vector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vector"}},[s._v("#")]),s._v(" Vector")]),s._v(" "),a("ol",[a("li",[s._v("JDK 1.0 推出的早期集合类，线程安全，所有方法都以 synchronized 修饰")]),s._v(" "),a("li",[s._v("JDK 1.2 集合框架推出后，令 Vector 实现了 List 接口，保证向后兼容")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),s._v("​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" initialCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),s._v("​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" initialCapacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" capacityIncrement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),s._v("​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"linkedlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist"}},[s._v("#")]),s._v(" LinkedList")]),s._v(" "),a("ol",[a("li",[s._v("基于双向链表实现，存在一个静态内部类 Node 和两个 first，last 指针便于操作")]),s._v(" "),a("li",[s._v("LinkedList 也实现了 Deque 接口，即双端队列，可以当作队列，栈使用")]),s._v(" "),a("li",[s._v("不支持随机访问，平均复杂度 "),a("code",[s._v("O(n)")]),s._v("（实际上双向链表优化 "),a("code",[s._v("node(index)")]),s._v(" 至 "),a("code",[s._v("O(n/2)")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("node(index)")]),s._v(" 获得下标对应结点，索引小于 "),a("code",[s._v("size/2")]),s._v("，从前向后遍历，否则，从后向前遍历")]),s._v(" "),a("li",[s._v("首尾添加，删除元素比较高效，时间复杂度 "),a("code",[s._v("O(1)")])]),s._v(" "),a("li",[s._v("中间添加，删除元素比较低效，时间复杂度 "),a("code",[s._v("O(n/2)")])])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),s._v("​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("hr"),s._v(" "),a("p",[a("strong",[s._v("参考链接")])]),s._v(" "),a("p",[s._v("[1] "),a("a",{attrs:{href:"https://www.cnblogs.com/tong-yuan/p/10638855.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("彤哥读源码 | ArrayList"),a("OutboundLink")],1),a("br"),s._v("\n[2] "),a("a",{attrs:{href:"https://www.cnblogs.com/tong-yuan/p/LinkedList.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("彤哥读源码 | LinkedList"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);