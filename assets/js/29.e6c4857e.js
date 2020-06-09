(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{415:function(t,v,_){"use strict";_.r(v);var r=_(25),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),_("p",[t._v("定义主串 A 长度为 n，目标子串 B 长度为 m")]),t._v(" "),_("p",[t._v("字符串匹配算法同样使用于矩阵匹配，将矩阵按某种规律转换为一个单行字符串即可")]),t._v(" "),_("p",[t._v("字符串匹配算法分为单模式串匹配和多模式串匹配，即与单一字符串做匹配或是与一个字符串集合做匹配，以下 4 种均为单模式串匹配算法")]),t._v(" "),_("h2",{attrs:{id:"bf-算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bf-算法"}},[t._v("#")]),t._v(" BF 算法")]),t._v(" "),_("p",[_("strong",[t._v("主要思想")]),t._v("：Brute Force 即暴力匹配算法，在主串中，依次检查起始位置 [0...n-m] 长度为 m 的 n-m+1 个子串")]),t._v(" "),_("p",[_("strong",[t._v("效率分析")]),t._v("：最坏时间复杂度为 O(n*m)，但是日常开发较为常用")]),t._v(" "),_("ul",[_("li",[t._v("实际开发中，字符串长度都不会太长，且每次匹配子串时，遇到不匹配的字符就停止了，无需每次都比较 m 个字符，因此平均情况下，算法执行效率会高很多")]),t._v(" "),_("li",[t._v("KISS（Keep it Simple and Stupid）设计原则，实现简单，不容易出错")])]),t._v(" "),_("h2",{attrs:{id:"rk-算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rk-算法"}},[t._v("#")]),t._v(" RK 算法")]),t._v(" "),_("p",[_("strong",[t._v("主要思想")]),t._v("：Rabin-Karp 算法，本质是对 BF 算法的改进，对 n-m+1 个子串进行哈希，之后与目标子串哈希值进行比较")]),t._v(" "),_("p",[t._v("哈希算法只加速了子串间比较的效率，但是计算哈希值时，仍需遍历 m 个字符，因此算法总体效率并未提高，因此需要设计一种高效的哈希算法")]),t._v(" "),_("p",[_("strong",[t._v("哈希算法")]),t._v("：如果只包含 a-z 26 个小写字母，则将字符串视为一个 26 进制数字，哈希值即为对应的 10 进制数值，这样做的好处在于相邻子串的哈希值间存在关系")]),t._v(" "),_("p",[t._v("同时为了加快哈希值的计算，对 26^(m-1) 这部分可以通过查表来获取值，事先计算好 26^0, 26^1, ..., 26^(m-1) 的值，存储在一个长度为 m 的数组中")]),t._v(" "),_("p",[_("strong",[t._v("效率分析")]),t._v("：n-m+1 个子串哈希值的计算只需要扫描一遍主串，同时可以在计算过程中与目标子串进行比较，因此复杂度为 O(n)")]),t._v(" "),_("p",[t._v("这种哈希算法可以保证没有哈希冲突的存在，但是当子串长度过长时，哈希值可能过大超过整数表示范围。因此可以重新设计哈希算法，容忍哈希冲突存在，但是哈希值保持在一定范围。这种情况下，如果哈希值相等，不能直接判断目标存在，还需要进一步比较子串是否确实匹配目标，此时极端情况下复杂度退化为 O(n*m)")]),t._v(" "),_("h2",{attrs:{id:"bm-算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bm-算法"}},[t._v("#")]),t._v(" BM 算法")]),t._v(" "),_("p",[_("strong",[t._v("主要思想")]),t._v("：Boyer-Moore 算法，对于 BF 和 RK 算法来说，每次查找如果匹配失败，则将子串向后"),_("strong",[t._v("滑动一位")]),t._v("，重新开始匹配，而 BM 算法的核心思想在于匹配失败时，借助某种规律，将子串向后"),_("strong",[t._v("多滑动几位")]),t._v("，跳过一些绝对不可能匹配的情况，以此提高效率")]),t._v(" "),_("p",[_("strong",[t._v("主要规律")]),t._v("：")]),t._v(" "),_("ul",[_("li",[t._v("坏字符规则")]),t._v(" "),_("li",[t._v("好后缀规则")])]),t._v(" "),_("p",[t._v("//TODO")]),t._v(" "),_("h2",{attrs:{id:"kmp-算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kmp-算法"}},[t._v("#")]),t._v(" KMP 算法")])])}),[],!1,null,null,null);v.default=a.exports}}]);