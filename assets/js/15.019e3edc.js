(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{222:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),a("p",[s._v("Java中的数据类型主要分为两类")]),s._v(" "),a("ul",[a("li",[s._v("基本数据类型(Primitive Type)")]),s._v(" "),a("li",[s._v("引用数据类型(Reference Type)")])]),s._v(" "),a("h3",{attrs:{id:"基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[s._v("#")]),s._v(" 基本数据类型")]),s._v(" "),a("ul",[a("li",[s._v("Java的基本数据类型共有8种，"),a("strong",[s._v("值传递")])]),s._v(" "),a("li",[s._v("Java中的数值类型"),a("strong",[s._v("不存在无符号")]),s._v("，取值范围固定，不依赖硬件环境或操作系统")]),s._v(" "),a("li",[s._v("Java的基本类型存储在"),a("code",[s._v("Stack")]),s._v("中，存取速度快")])]),s._v(" "),a("p",[s._v("主要分为3类，数值型，布尔型，字符型:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("byte")]),s._v(": 8位，默认值"),a("code",[s._v("0")]),s._v(",范围(-128, 127)")]),s._v(" "),a("li",[a("code",[s._v("short")]),s._v(": 16位，默认值"),a("code",[s._v("0")])]),s._v(" "),a("li",[a("code",[s._v("int")]),s._v(": 32位，默认值"),a("code",[s._v("0")]),s._v(",范围(-2147483648, 2147483647)")]),s._v(" "),a("li",[a("code",[s._v("long")]),s._v(": 64位，默认值"),a("code",[s._v("0L")])]),s._v(" "),a("li",[a("code",[s._v("float")]),s._v(": 32位，单精度，默认值"),a("code",[s._v("0.0f")])]),s._v(" "),a("li",[a("code",[s._v("double")]),s._v(": 64位，双精度，默认值"),a("code",[s._v("0.0d")])]),s._v(" "),a("li",[a("code",[s._v("boolean")]),s._v(": 1位，布尔型，默认值"),a("code",[s._v("false")])]),s._v(" "),a("li",[a("code",[s._v("char")]),s._v(": 16位，Unicode字符，默认值"),a("code",[s._v("/u0000")])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("默认值只在类结构中有效，方法中的局部变量必须初始化后才可以使用")])]),s._v(" "),a("h4",{attrs:{id:"数值型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值型"}},[s._v("#")]),s._v(" 数值型")]),s._v(" "),a("ul",[a("li",[s._v("整数常量的默认类型是"),a("code",[s._v("int")])]),s._v(" "),a("li",[s._v("小数常量的默认类型是"),a("code",[s._v("double")])]),s._v(" "),a("li",[s._v("对"),a("code",[s._v("byte")]),s._v("变量直接赋值时，如果在范围内会自动进行"),a("code",[s._v("int->byte")]),s._v("转换")]),s._v(" "),a("li",[a("code",[s._v("byte")]),s._v("可以方便的用于数据传输以及编码转换")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("类型转换")]),s._v(" "),a("ul",[a("li",[s._v("向上转换: 表达式中自动向上转换，不会出现数值转化错误"),a("br"),s._v(" "),a("code",[s._v("char->short->int->long->float->double")]),a("br"),s._v(" "),a("code",[s._v("signed->unsigned")])]),s._v(" "),a("li",[s._v("向下转换: 需要使用强制类型转换")])])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" sum1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Automatically cast to more general type")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("sum1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Explicit type cast")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"字符型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符型"}},[s._v("#")]),s._v(" 字符型")]),s._v(" "),a("ul",[a("li",[s._v("使用单引号"),a("code",[s._v("'ch'")]),s._v("，区别于字符串使用双引号"),a("code",[s._v('"str"')])]),s._v(" "),a("li",[s._v("Java使用"),a("code",[s._v("UNICODE")]),s._v("编码，可以认为包含了"),a("code",[s._v("ASCII")]),s._v("编码('A': 65, 'a': 97, '0': 48)")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("ASCLL与UNICODE编码")]),s._v(" "),a("p",[a("strong",[s._v("ASCII")]),s._v(": 每个字符占用1字节(byte)，可以表示256个字符，分为标准ASCII码(0-127)和拓展ASCII码(128-255)，可以表示英文字符和一些符号\n"),a("strong",[s._v("UNICODE")]),s._v("： 每个字符占用2字节，可以表示世界所有语言文字")])]),s._v(" "),a("h4",{attrs:{id:"布尔型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布尔型"}},[s._v("#")]),s._v(" 布尔型")]),s._v(" "),a("ul",[a("li",[s._v("只有"),a("code",[s._v("true")]),s._v("和"),a("code",[s._v("false")]),s._v("两个值(如果赋值"),a("code",[s._v("null")]),s._v("会报错)")]),s._v(" "),a("li",[s._v("不同于"),a("code",[s._v("C")]),s._v("，"),a("code",[s._v("Java")]),s._v("不支持数值型作为布尔型")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"引用数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型"}},[s._v("#")]),s._v(" 引用数据类型")]),s._v(" "),a("ul",[a("li",[s._v("Java引用类型指向一个对象，指向对象的变量是引用变量，默认值为"),a("code",[s._v("null")])]),s._v(" "),a("li",[s._v("Java创建对象实例时，将地址赋给引用变量，存储于"),a("code",[s._v("Stack")]),s._v("，实例存储于"),a("code",[s._v("Heap")])]),s._v(" "),a("li",[s._v("对象、数组都是引用数据类型，"),a("strong",[s._v("引用传递")])])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("特殊数据类型: "),a("code",[s._v("null")]),a("br"),s._v(" "),a("code",[s._v("null")]),s._v("用来标识一个空的对象，因此不能将"),a("code",[s._v("null")]),s._v("赋给基本型的变量"),a("br"),s._v(" "),a("code",[s._v("null")]),s._v("可以转换为任何引用类型")])]),s._v(" "),a("h2",{attrs:{id:"变量类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量类型"}},[s._v("#")]),s._v(" 变量类型")]),s._v(" "),a("h3",{attrs:{id:"局部变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部变量"}},[s._v("#")]),s._v(" 局部变量")]),s._v(" "),a("ul",[a("li",[s._v("局部变量在其作用域中被执行时创建，存储于"),a("code",[s._v("Stack")]),s._v("，在执行完毕后销毁")]),s._v(" "),a("li",[s._v("访问修饰符不能修饰局部变量")]),s._v(" "),a("li",[s._v("局部变量没有默认值，在被声明后必须经过初始化才能使用")])]),s._v(" "),a("h3",{attrs:{id:"实例变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例变量"}},[s._v("#")]),s._v(" 实例变量")]),s._v(" "),a("ul",[a("li",[s._v("实例变量声明在类中，方法、构造方法和语句块外")]),s._v(" "),a("li",[s._v("实例变量跟随对象创建而创建，销毁而销毁")]),s._v(" "),a("li",[s._v("实例变量可以被访问修饰符修饰，且具有默认值")])]),s._v(" "),a("h3",{attrs:{id:"类变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类变量"}},[s._v("#")]),s._v(" 类变量")]),s._v(" "),a("ul",[a("li",[s._v("类变量即静态变量，由"),a("code",[s._v("static")]),s._v("修饰，声明于方法之外")]),s._v(" "),a("li",[s._v("同一个类的所有实例对象共享类变量的一份拷贝")]),s._v(" "),a("li",[s._v("静态变量通常与"),a("code",[s._v("final")]),s._v("配合用于声明常量，名称一般使用大写字母")]),s._v(" "),a("li",[s._v("类变量具有默认值，与实例变量相似")])]),s._v(" "),a("h2",{attrs:{id:"代码块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块"}},[s._v("#")]),s._v(" 代码块")]),s._v(" "),a("p",[s._v("代码块(code block): 通常指由"),a("code",[s._v("{}")]),s._v("所包围的一块代码")]),s._v(" "),a("h3",{attrs:{id:"普通代码块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通代码块"}},[s._v("#")]),s._v(" 普通代码块")]),s._v(" "),a("ul",[a("li",[s._v("可以用于对复杂或较长的方法进行切割分块，防止变量名冲突(不常用)")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"构造代码块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造代码块"}},[s._v("#")]),s._v(" 构造代码块")]),s._v(" "),a("ul",[a("li",[s._v("Instance Initialization Block")]),s._v(" "),a("li",[s._v("通常放置于构造器代码前，在实例创建时执行，且在构造器之前执行")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IIB Block1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IIB Block2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Constructor Called"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Output")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\nIIB "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Block1")]),s._v("\nIIB "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Block2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Constructor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Called")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"静态代码块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态代码块"}},[s._v("#")]),s._v(" 静态代码块")]),s._v(" "),a("ul",[a("li",[s._v("Static Block")]),s._v(" "),a("li",[s._v("由"),a("code",[s._v("static")]),s._v("修饰的代码块，通常用于静态初始化")]),s._v(" "),a("li",[s._v("只在该类第1次被实例化或第1次访问该类的静态成员时执行1次，先于构造块")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Static Block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IIB Block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Constructor Called"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"同步代码块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步代码块"}},[s._v("#")]),s._v(" 同步代码块")]),s._v(" "),a("ul",[a("li",[s._v("to do")])]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("[1] "),a("a",{attrs:{href:"https://www.runoob.com/java/java-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java菜鸟教程"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("[2] "),a("a",{attrs:{href:"https://blog.csdn.net/qq_28328381/article/details/81163856",target:"_blank",rel:"noopener noreferrer"}},[s._v("JAVA 8大数据类型"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("[3] "),a("a",{attrs:{href:"https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云大学 | 李兴华 - Java语言基础"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);