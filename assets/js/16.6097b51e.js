(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{224:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"类和对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类和对象"}},[a._v("#")]),a._v(" 类和对象")]),a._v(" "),t("p",[t("strong",[a._v("类")]),a._v(": 对象的模板，描述的是一类对象的行为和状态")]),a._v(" "),t("ul",[t("li",[a._v("属性(Field): 局部变量，成员变量，类变量(即静态变量)")]),a._v(" "),t("li",[a._v("方法(Method): 构造方法，类方法(静态方法)")])]),a._v(" "),t("p",[t("strong",[a._v("对象")]),a._v(": 对象根据类创建，是类的一个实例")]),a._v(" "),t("ul",[t("li",[a._v("声明: 声明一个对象，包括类型和名称")]),a._v(" "),t("li",[a._v("实例化: 使用关键字"),t("code",[a._v("new")]),a._v("来创建一个对象")]),a._v(" "),t("li",[a._v("初始化: 使用"),t("code",[a._v("new")]),a._v("创建对象时，会调用构造方法(constructor)初始化对象")])]),a._v(" "),t("h3",{attrs:{id:"内存分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存分析"}},[a._v("#")]),a._v(" 内存分析")]),a._v(" "),t("ul",[t("li",[a._v("堆内存(Heap): 保存类的实例，由关键字"),t("code",[a._v("new")]),a._v("开辟的内存空间")]),a._v(" "),t("li",[a._v("栈内存(Stack): 保存实例的引用，是实例在堆内存的地址")]),a._v(" "),t("li",[a._v("垃圾(Garbage): 没有任何引用指向的堆内存空间，由JVM通过GC不定期回收")])]),a._v(" "),t("h3",{attrs:{id:"关键字this"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关键字this"}},[a._v("#")]),a._v(" 关键字this")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("this")]),a._v(": 当前对象的引用，可以用于访问当前对象的属性和方法")]),a._v(" "),t("li",[t("code",[a._v("this()")]),a._v(": 调用本类的构造方法，只能放在构造方法首行，且只能调用一次")]),a._v(" "),t("li",[a._v("实例对象调用自身方法时，实例对象自身的引用会被作为隐式参数传入")])]),a._v(" "),t("h2",{attrs:{id:"java封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java封装"}},[a._v("#")]),a._v(" Java封装")]),a._v(" "),t("p",[a._v("封装(Encapsulation)是Java面向对象三大特性之一")]),a._v(" "),t("p",[a._v("主要思想："),t("strong",[a._v("需要隐藏的隐藏，需要暴露的暴露")])]),a._v(" "),t("h3",{attrs:{id:"优点-目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点-目的"}},[a._v("#")]),a._v(" 优点/目的")]),a._v(" "),t("ul",[t("li",[a._v("隐藏信息和实现细节")]),a._v(" "),t("li",[a._v("通过实现好的方法对字段进行访问和修改，避免不合理的访问，提高了安全性")]),a._v(" "),t("li",[a._v("良好的封装可以减少耦合，修改类的内部结构，不影响对外的API")])]),a._v(" "),t("h3",{attrs:{id:"访问修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问修饰符"}},[a._v("#")]),a._v(" 访问修饰符")]),a._v(" "),t("p",[a._v("Java通过访问修饰符(Access modifiers)，控制类、变量、方法的访问，支持4种不同的修饰符")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("default")]),a._v(": 也称package-private，在同一package下可见。可以修饰：类、接口、变量、方法")]),a._v(" "),t("li",[t("strong",[a._v("private")]),a._v(": 仅在同一class内可见。可以修饰：变量、方法")]),a._v(" "),t("li",[t("strong",[a._v("protected")]),a._v(": 仅对同一package的class和所有sub-class可见。可以修饰：变量、方法")]),a._v(" "),t("li",[t("strong",[a._v("public")]),a._v(": 对所有class可见。可以修饰：类、接口、变量、方法")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/Modifier.png",alt:"Modifier"}})]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Student")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setAge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" ageIn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ageIn "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" ageIn "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ageIn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("p",[a._v("[1] "),t("a",{attrs:{href:"https://www.runoob.com/java/java-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java菜鸟教程"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("[2] "),t("a",{attrs:{href:"https://www.cnblogs.com/zhangruifeng/p/9320561.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java的封装"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);