(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{395:function(a,s,t){"use strict";t.r(s);var n=t(25),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[a._v("#")]),a._v(" 运算符")]),a._v(" "),t("p",[a._v("与其他编程语言类似，Java支持基本的运算符")]),a._v(" "),t("ul",[t("li",[a._v("算术运算符(Arithmetic Operator) "),t("code",[a._v("+,-,*,/,%")])]),a._v(" "),t("li",[a._v("自加自减运算符(Increment/Decrement Operator) "),t("code",[a._v("++a,--a")]),a._v("，前缀自增/自减，先进行自增/自减运算，再进行表达式运算，后缀相反")]),a._v(" "),t("li",[a._v("关系运算符(Relational Operator) "),t("code",[a._v("==,!=,>,<,>=,<=")])]),a._v(" "),t("li",[a._v("逻辑运算符(Logical Operator) "),t("code",[a._v("&,&&,|,||,!")]),a._v("，具有短路特性")]),a._v(" "),t("li",[a._v("位运算符(Bitwise Operator) "),t("code",[a._v("&,|,^,~,<<,>>,>>>")])]),a._v(" "),t("li",[a._v("赋值运算符(Assignment Operator) "),t("code",[a._v("=,+=,-=,etc")])]),a._v(" "),t("li",[a._v("条件/三目运算符(Ternary Operator) "),t("code",[a._v("?:")])])]),a._v(" "),t("p",[a._v("Java运算符优先级："),t("strong",[a._v("单目乘除位关系，逻辑三目后赋值")])]),a._v(" "),t("h2",{attrs:{id:"非访问修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非访问修饰符"}},[a._v("#")]),a._v(" 非访问修饰符")]),a._v(" "),t("p",[a._v("除了访问修饰符外，Java也提供了一些非访问修饰符(Non-access modifiers)，实现其他的功能")]),a._v(" "),t("h3",{attrs:{id:"static"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[a._v("#")]),a._v(" static")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("静态成员变量/静态方法\nJVM加载类时，为被static修饰的成员变量或方法仅创建一份拷贝，所有该类的实例共享该拷贝"),t("br"),a._v("\n因此也称类变量或类方法。局部变量不能被static修饰，静态方法不能访问类的非静态变量")])]),a._v(" "),t("li",[t("p",[a._v("静态代码块\n当JVM第一次加载类时，被static修饰的代码块会得到运行，因此常用static块完成类的静态初始化"),t("br"),a._v("\n静态代码块中不能访问非静态变量")])])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Student")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" school"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("school "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"BU"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h3",{attrs:{id:"final"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#final"}},[a._v("#")]),a._v(" final")]),a._v(" "),t("ul",[t("li",[a._v("修饰类：类不可以被继承")]),a._v(" "),t("li",[a._v("修饰方法：方法可以被继承，但是不可以被重写 override")]),a._v(" "),t("li",[a._v("修饰变量：变量的值不可用被改变")])]),a._v(" "),t("p",[t("strong",[a._v("使用 final 修饰类或者方法")]),a._v("，明确告知别人，这些行为是不许修改的：")]),a._v(" "),t("ul",[t("li",[a._v("java.lang 下的很多核心包，都被修饰为 final，可以有效避免 API 使用者更改基础功能，在一定程度上，是保证平台的安全的必要手段")])]),a._v(" "),t("p",[t("strong",[a._v("使用 final 修饰变量")]),a._v("：")]),a._v(" "),t("ul",[t("li",[a._v("可以避免意外赋值导致的编程错误")]),a._v(" "),t("li",[a._v("起到了不可变的效果，可以用于保护只读数据，尤其是在并发编程中，因为明确地不能再赋值 final 变量，有利于减少额外的同步开销")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 1 修饰类变量，即 static final：必须显示指定初始值，常用于创建类常量\n * 2 修饰非 static 字段：在构造完成前初始化即可，即在构造方法中或代码块中初始化\n * 3 修饰局部变量，声明时，可以不用初始化，但是只能赋值一次，赋值后不能更改\n */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" pi "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.14")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        g "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9.8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("p",[a._v("[1] "),t("a",{attrs:{href:"https://www.runoob.com/java/java-operators.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java菜鸟教程"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);