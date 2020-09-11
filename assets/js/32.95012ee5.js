(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{472:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"回溯算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯算法"}},[t._v("#")]),t._v(" 回溯算法")]),t._v(" "),a("p",[t._v("当问题是要求满足某种性质（约束条件）的所有解或最优解时，往往需要使用回溯法")]),t._v(" "),a("p",[t._v("回溯的本质就是"),a("strong",[t._v("利用 DFS 穷举一棵决策树")]),t._v("，解题时有 3 个要点需要把握：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("记录已经走过的路径")])]),t._v(" "),a("li",[a("p",[t._v("维护选择列表")])]),t._v(" "),a("li",[a("p",[t._v("明确终止条件")])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("backtrack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("choices，curPath，res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" 满足条件 ：\n        res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" choice "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" choices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        curPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("choice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        backtrack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newChoices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        curPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("undoSelect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);