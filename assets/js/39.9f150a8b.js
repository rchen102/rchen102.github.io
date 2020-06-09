(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{405:function(n,t,v){"use strict";v.r(t);var _=v(25),s=Object(_.a)({},(function(){var n=this,t=n.$createElement,v=n._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[v("h2",{attrs:{id:"介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[n._v("#")]),n._v(" 介绍")]),n._v(" "),v("p",[n._v("对于有序数组，通过二分查找可以进行快速搜索，但是对于有序链表，因为不能随机访问，二分查找就不适用了。为了支持类似「二分」的搜索算法，需要对链表的结构稍加改造，即"),v("strong",[n._v("跳表")]),n._v("（Skip List）")]),n._v(" "),v("h2",{attrs:{id:"主要思想"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主要思想"}},[n._v("#")]),n._v(" 主要思想")]),n._v(" "),v("p",[n._v("核心思想就是对链表建立索引，比如每两个结点，抽取一个结点，作为上一层索引，并通过一个 down 指针与下层连接，抽取的结点相连即构成索引（索引层）")]),n._v(" "),v("p",[n._v("此时查找链表，可以先在索引层遍历，当遍历发现下一个结点大于目前结点时，就进入下一层继续搜索")]),n._v(" "),v("p",[n._v("进一步提高搜索速度，可以递归的建立索引的索引，最终形成的数据结构即跳表")]),n._v(" "),v("h2",{attrs:{id:"高效的动态数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高效的动态数据结构"}},[n._v("#")]),n._v(" 高效的动态数据结构")]),n._v(" "),v("p",[v("strong",[n._v("时间复杂度")])]),n._v(" "),v("ul",[v("li",[n._v("查找：O(logn)")]),n._v(" "),v("li",[n._v("动态插入、删除：O(logn)（暂不具体分析）")])]),n._v(" "),v("p",[n._v("对于 n 个结点的链表，第一级索引大约有 n/2 个结点，第二级有 n/4，第三级有 n/8，以此类推，即第 k 级索引包含结点数为 n/(2^k)")]),n._v(" "),v("p",[n._v("如果设置最高级索引数为 2，则可推出索引一共有 h = logn - 1 层（n/(2^h) = 2），加上原始链表一层总共有 logn 层。如果每一层需要遍历 m 个结点，则总的时间复杂度为 O(mlogn)")]),n._v(" "),v("p",[n._v("给定任意 k 层索引，搜索发现目标值在 X 与 Y 结点间，则进入第 k - 1 层继续搜索，此时可知，在 k -1 层， X < Target < Y，而 X 与 Y 间只包含 3 个结点，所以最多需要 3 次搜索；以此类推，可知 m = 3，即搜索的时间复杂度为 O(logn)")]),n._v(" "),v("p",[v("strong",[n._v("空间复杂度")])]),n._v(" "),v("ul",[v("li",[n._v("需要额外的 O(n) 空间存储索引结点")])]),n._v(" "),v("p",[n._v("相比纯粹的链表，跳表需要额外的内存空间，属于典型的空间换时间")]),n._v(" "),v("p",[n._v("对于 n 个结点链表，通过以上分析可知，第一级有 n/2 个，第二级 n/4，依次类推，则索引结点总的空间复杂度为 n/2 + n/4 + ... + 2 = n - 2，即空间复杂度为 O(n)")]),n._v(" "),v("p",[n._v("降低复杂度方法：间隔更大建立结点，如每 3 个结点建立一个索引，此时空间复杂度为 O(n/2)")])])}),[],!1,null,null,null);t.default=s.exports}}]);