(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{375:function(v,_,e){"use strict";e.r(_);var t=e(25),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("ul",[e("li",[v._v("ArrayList：基于"),e("strong",[v._v("数组")]),v._v("，查询快，增删慢，线程不安全")]),v._v(" "),e("li",[v._v("LinkedList：基于"),e("strong",[v._v("双向链表")]),v._v("，查询慢，增删快，线程不安全")]),v._v(" "),e("li",[v._v("Vector：基于"),e("strong",[v._v("数组")]),v._v("，线程安全，但是效率低下")])]),v._v(" "),e("h2",{attrs:{id:"arraylist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arraylist"}},[v._v("#")]),v._v(" ArrayList")]),v._v(" "),e("ol",[e("li",[v._v("基于数组实现，当数组容量不足时，扩容为原来的 "),e("code",[v._v("1.5")]),v._v(" 倍，无缩容操作")]),v._v(" "),e("li",[v._v("创建时可以指定容量，如未指定，则默认大小为 "),e("code",[v._v("10")])]),v._v(" "),e("li",[v._v("支持随机访问，通过索引访问元素，时间复杂度 "),e("code",[v._v("O(1)")])]),v._v(" "),e("li",[v._v("添加元素到尾部或删除尾部元素较快，平均复杂度 "),e("code",[v._v("O(1)")])]),v._v(" "),e("li",[v._v("添加元素到中间或删除中间元素较慢，需要搬移元素，平均复杂度 "),e("code",[v._v("O(n)")])]),v._v(" "),e("li",[v._v("求并集："),e("code",[v._v("addAll()")]),v._v("；求交集："),e("code",[v._v("retainAll()")]),v._v("；求差集："),e("code",[v._v("removeAll()")])]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("transient")]),v._v(" 修饰内部数组，但实现了 "),e("code",[v._v("readObject")]),v._v(" 和 "),e("code",[v._v("writeObject")]),v._v("，避免浪费空间")])]),v._v(" "),e("h2",{attrs:{id:"vector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vector"}},[v._v("#")]),v._v(" Vector")]),v._v(" "),e("ol",[e("li",[v._v("JDK 1.0 推出的早期集合类，线程安全，所有方法都以 synchronized 修饰")]),v._v(" "),e("li",[v._v("JDK 1.2 集合框架推出后，令 Vector 实现了 List 接口，保证向后兼容")])]),v._v(" "),e("h2",{attrs:{id:"linkedlist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist"}},[v._v("#")]),v._v(" LinkedList")]),v._v(" "),e("ol",[e("li",[v._v("基于双向链表实现，存在一个静态内部类 Node 和两个 first，last 指针便于操作")]),v._v(" "),e("li",[v._v("LinkedList 也实现了 Deque 接口，即双端队列，可以当作队列，栈使用")]),v._v(" "),e("li",[v._v("不支持随机访问，平均复杂度 "),e("code",[v._v("O(n)")]),v._v("（实际上双向链表优化 "),e("code",[v._v("node(index)")]),v._v(" 至 "),e("code",[v._v("O(n/2)")]),v._v("）")]),v._v(" "),e("li",[e("code",[v._v("node(index)")]),v._v(" 获得下标对应结点，索引小于 "),e("code",[v._v("size/2")]),v._v("，从前向后遍历，否则，从后向前遍历")]),v._v(" "),e("li",[v._v("首尾添加，删除元素比较高效，时间复杂度 "),e("code",[v._v("O(1)")])]),v._v(" "),e("li",[v._v("中间添加，删除元素比较低效，时间复杂度 "),e("code",[v._v("O(n/2)")])])]),v._v(" "),e("hr"),v._v(" "),e("p",[e("strong",[v._v("参考链接")])]),v._v(" "),e("p",[v._v("[1] "),e("a",{attrs:{href:"https://www.cnblogs.com/tong-yuan/p/10638855.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("彤哥读源码 | ArrayList"),e("OutboundLink")],1),e("br"),v._v("\n[2] "),e("a",{attrs:{href:"https://www.cnblogs.com/tong-yuan/p/LinkedList.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("彤哥读源码 | LinkedList"),e("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);