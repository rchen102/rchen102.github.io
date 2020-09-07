(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{402:function(s,a,t){"use strict";t.r(a);var n=t(25),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[s._v("ArrayList：基于"),t("strong",[s._v("数组")]),s._v("，查询快，增删慢，线程不安全")]),s._v(" "),t("li",[s._v("LinkedList：基于"),t("strong",[s._v("双向链表")]),s._v("，查询慢，增删快，线程不安全")]),s._v(" "),t("li",[s._v("Vector：基于"),t("strong",[s._v("数组")]),s._v("，线程安全，但是效率低下")])]),s._v(" "),t("h2",{attrs:{id:"arraylist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist"}},[s._v("#")]),s._v(" ArrayList")]),s._v(" "),t("ol",[t("li",[s._v("基于数组实现，当数组容量不足时，扩容为原来的 "),t("code",[s._v("1.5")]),s._v(" 倍（创建新数组，复制），无缩容操作")]),s._v(" "),t("li",[s._v("创建时可以指定容量，如未指定，则默认大小为 "),t("code",[s._v("10")])]),s._v(" "),t("li",[s._v("支持随机访问，通过索引访问元素，时间复杂度 "),t("code",[s._v("O(1)")])]),s._v(" "),t("li",[s._v("添加元素到尾部或删除尾部元素较快，平均复杂度 "),t("code",[s._v("O(1)")])]),s._v(" "),t("li",[s._v("添加元素到中间或删除中间元素较慢，需要搬移元素，平均复杂度 "),t("code",[s._v("O(n)")])]),s._v(" "),t("li",[s._v("求并集："),t("code",[s._v("addAll()")]),s._v("；求交集："),t("code",[s._v("retainAll()")]),s._v("；求差集："),t("code",[s._v("removeAll()")])]),s._v(" "),t("li",[s._v("使用 "),t("code",[s._v("transient")]),s._v(" 修饰内部数组，但实现了 "),t("code",[s._v("readObject")]),s._v(" 和 "),t("code",[s._v("writeObject")]),s._v("，避免浪费空间")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认初始容量 10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),s._v("​"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" initialCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),s._v("​"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 都是浅拷贝")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"vector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vector"}},[s._v("#")]),s._v(" Vector")]),s._v(" "),t("ol",[t("li",[s._v("JDK 1.0 推出的早期集合类，线程安全，所有方法都以 synchronized 修饰")]),s._v(" "),t("li",[s._v("JDK 1.2 集合框架推出后，令 Vector 实现了 List 接口，保证向后兼容")]),s._v(" "),t("li",[s._v("扩容方式："),t("br"),s._v("\n(1) 取决于 capacityIncrement，代表了每次扩容增加的个数，如果不指定，该值默认为 0，扩容 2 倍"),t("br"),s._v("\n(2) oldCapacity + ((capacityIncrement > 0) ? capacityIncrement : oldCapacity);")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RandomAccess")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cloneable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Serializable")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认初始大小 10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),s._v("​"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" initialCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),s._v("​"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" initialCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" capacityIncrement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vector")]),s._v("​"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"linkedlist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist"}},[s._v("#")]),s._v(" LinkedList")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("基于双向链表实现，存在一个静态内部类 Node 和两个 first，last 指针便于操作")])]),s._v(" "),t("li",[t("p",[s._v("LinkedList 也实现了 Deque 接口，即双端队列，可以当作队列，栈使用"),t("br"),s._v("\n(1) LinkedList 相当于以链表方式，实现了 List 和 Deque 结构，功能上等于 ArrayList + ArrayDeque")])]),s._v(" "),t("li",[t("p",[s._v("不支持随机访问，平均复杂度 "),t("code",[s._v("O(n)")]),s._v("（实际上双向链表优化 "),t("code",[s._v("node(index)")]),s._v(" 至 "),t("code",[s._v("O(n/2)")]),s._v("）")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("node(index)")]),s._v(" 获得下标对应结点，索引小于 "),t("code",[s._v("size/2")]),s._v("，从前向后遍历，否则，从后向前遍历")])]),s._v(" "),t("li",[t("p",[s._v("首尾添加，删除元素比较高效，时间复杂度 "),t("code",[s._v("O(1)")])])]),s._v(" "),t("li",[t("p",[s._v("中间添加，删除元素比较低效，时间复杂度 "),t("code",[s._v("O(n/2)")])])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractSequentialList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Deque")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cloneable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Serializable")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),s._v("​"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("hr"),s._v(" "),t("p",[t("strong",[s._v("参考链接")])]),s._v(" "),t("p",[s._v("[1] "),t("a",{attrs:{href:"https://www.cnblogs.com/tong-yuan/p/10638855.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("彤哥读源码 | ArrayList"),t("OutboundLink")],1),t("br"),s._v("\n[2] "),t("a",{attrs:{href:"https://www.cnblogs.com/tong-yuan/p/LinkedList.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("彤哥读源码 | LinkedList"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);