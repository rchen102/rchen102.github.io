(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{380:function(t,a,e){"use strict";e.r(a);var s=e(25),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"类和对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类和对象"}},[t._v("#")]),t._v(" 类和对象")]),t._v(" "),e("p",[e("strong",[t._v("类")]),t._v(": 对象的模板，描述的是一类对象的行为和状态")]),t._v(" "),e("ul",[e("li",[t._v("属性(Field): 局部变量，成员变量，类变量(即静态变量)")]),t._v(" "),e("li",[t._v("方法(Method): 构造方法，类方法(静态方法)")])]),t._v(" "),e("p",[e("strong",[t._v("对象")]),t._v(": 对象根据类创建，是类的一个实例")]),t._v(" "),e("ul",[e("li",[t._v("声明: 声明一个对象，包括类型和名称")]),t._v(" "),e("li",[t._v("实例化: 使用关键字"),e("code",[t._v("new")]),t._v("来创建一个对象")]),t._v(" "),e("li",[t._v("初始化: 使用"),e("code",[t._v("new")]),t._v("创建对象时，会调用构造方法(constructor)初始化对象")])]),t._v(" "),e("h3",{attrs:{id:"内存分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存分析"}},[t._v("#")]),t._v(" 内存分析")]),t._v(" "),e("ul",[e("li",[t._v("堆内存(Heap): 保存类的实例，由关键字"),e("code",[t._v("new")]),t._v("开辟的内存空间")]),t._v(" "),e("li",[t._v("栈内存(Stack): 保存实例的引用，是实例在堆内存的地址")]),t._v(" "),e("li",[t._v("垃圾(Garbage): 没有任何引用指向的堆内存空间，由JVM通过GC不定期回收")])]),t._v(" "),e("h3",{attrs:{id:"关键字this"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关键字this"}},[t._v("#")]),t._v(" 关键字this")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("this")]),t._v(": 当前对象的引用，可以用于访问当前对象的属性和方法")]),t._v(" "),e("li",[e("code",[t._v("this()")]),t._v(": 调用本类的构造方法，只能放在构造方法首行，且只能调用一次")]),t._v(" "),e("li",[t._v("实例对象调用自身方法时，实例对象自身的引用会被作为隐式参数传入")])]),t._v(" "),e("h2",{attrs:{id:"封装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),e("p",[t._v("封装(Encapsulation)是Java面向对象三大特性之一")]),t._v(" "),e("p",[t._v("主要思想："),e("strong",[t._v("需要隐藏的隐藏，需要暴露的暴露")])]),t._v(" "),e("h3",{attrs:{id:"优点-目的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点-目的"}},[t._v("#")]),t._v(" 优点/目的")]),t._v(" "),e("ul",[e("li",[t._v("隐藏信息和实现细节")]),t._v(" "),e("li",[t._v("通过实现好的方法对字段进行访问和修改，避免不合理的访问，提高了安全性")]),t._v(" "),e("li",[t._v("良好的封装可以减少耦合，修改类的内部结构，不影响对外的 API")])]),t._v(" "),e("h3",{attrs:{id:"访问修饰符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问修饰符"}},[t._v("#")]),t._v(" 访问修饰符")]),t._v(" "),e("p",[t._v("Java通过访问修饰符(Access modifiers)，控制类、变量、方法的访问，支持 4 种不同的修饰符")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("default")]),t._v(": 也称 package-private，在同一 package 下可见。可以修饰：类、接口、变量、方法")]),t._v(" "),e("li",[e("strong",[t._v("private")]),t._v(": 仅在同一 class 内可见。可以修饰：变量、方法")]),t._v(" "),e("li",[e("strong",[t._v("protected")]),t._v(": 仅对同一 package 的 class 和所有 sub-class 可见。可以修饰：变量、方法")]),t._v(" "),e("li",[e("strong",[t._v("public")]),t._v(": 对所有 class 可见。可以修饰：类、接口、变量、方法")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[e("code",[t._v("default")]),t._v("指的是默认情况下，即不加任何访问修饰符时的访问控制状态")]),t._v(" "),e("p",[t._v("不能直接使用"),e("code",[t._v("default")]),t._v("作为访问修饰符，"),e("code",[t._v("default")]),t._v("关键词实际上用于接口方法定义")]),t._v(" "),e("p",[t._v("同一个类的实例，在内部可以互相访问对方的 "),e("code",[t._v("private")]),t._v(" 属性：访问修饰符在类级别而不是在对象级别上工作")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}}),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("default")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("private")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("protected")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("public")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Same class")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Same package, subclass")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Same package, non-subclass")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Different package, subclass")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Different package, non-subclass")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])])])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAge")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAge")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ageIn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ageIn "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" ageIn "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ageIn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("p",[t._v("[1] "),e("a",{attrs:{href:"https://www.runoob.com/java/java-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java菜鸟教程"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("[2] "),e("a",{attrs:{href:"https://www.cnblogs.com/zhangruifeng/p/9320561.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java的封装"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);