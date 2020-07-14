(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{405:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("Queue 类继承结构图")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("p",[a("img",{attrs:{src:"/img/Java/Queue.png",alt:"Queue类图"}})])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Queue 扩充 Collection 新方法")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扩充方法，如果失败，会返回特殊值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" offer​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入 tail，返回 false 如果失败")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 弹出 head，null 如果队列为空")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 head，null 如果队列为空")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一样效果的方法，只是失败会 throw exception")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" add​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 offer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 poll   ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应 peek")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("hr"),t._v(" "),a("p",[t._v("Deque 扩充 Queue 新方法")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 针对 head 队首")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" offerFirst​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// addFirst(e)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pollFirst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// removeFirst()")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peekFirst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getFirst()")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 针对 tail 队尾")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" offerLast​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// addLast(e)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pollLast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// removeLast()")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peekLast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getLast()")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作为 Stack")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("    push​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// addFirst(e)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// removeFirst()")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("peek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getFirst()")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("hr"),t._v(" "),a("p",[t._v("BlockingQueue")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Throws exception")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Special value")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Blocks")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Times out")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Insert")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("add(e)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("offer(e)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("put(e)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("offer(e, time, unit)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Remove")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("remove()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("poll()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("take()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("poll(time, unit)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Examine")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("element()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("peek()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not applicable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not applicable")])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("BlockingDeque")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Throws exception")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Special value")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Blocks")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Times out")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Insert")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("addFirst(e)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("offerFirst(e)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("putFirst(e)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("offerFirst(e, time, unit)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Remove")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("removeFirst()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pollFirst()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("takeFirst()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pollFirst(time, unit)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Examine")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("getFirst()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("peekFirst()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not applicable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not applicable")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Throws exception")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Special value")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Blocks")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Times out")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Insert")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("addLast(e)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("offerLast(e)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("putLast(e)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("offerLast(e, time, unit)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Remove")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("removeLast()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pollLast()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("takeLast()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pollLast(time, unit)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Examine")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("getLast()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("peekLast()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not applicable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not applicable")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);