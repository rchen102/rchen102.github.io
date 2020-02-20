(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{239:function(t,a,s){"use strict";s.r(a);var v=s(0),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("p",[t._v("Java中的数据类型主要分为两类")]),t._v(" "),s("ul",[s("li",[t._v("基本数据类型(Primitive Type)")]),t._v(" "),s("li",[t._v("引用数据类型(Reference Type)")])]),t._v(" "),s("h3",{attrs:{id:"基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[t._v("#")]),t._v(" 基本数据类型")]),t._v(" "),s("ul",[s("li",[t._v("Java的基本数据类型共有8种，"),s("strong",[t._v("值传递")])]),t._v(" "),s("li",[t._v("Java中的数值类型"),s("strong",[t._v("不存在无符号")]),t._v("，取值范围固定，不依赖硬件环境或操作系统")]),t._v(" "),s("li",[t._v("Java的基本类型存储在"),s("code",[t._v("Stack")]),t._v("中，存取速度快")])]),t._v(" "),s("p",[t._v("主要分为3类，数值型，布尔型，字符型:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("byte")]),t._v(": 8位，默认值"),s("code",[t._v("0")]),t._v(",范围(-128, 127)")]),t._v(" "),s("li",[s("code",[t._v("short")]),t._v(": 16位，默认值"),s("code",[t._v("0")])]),t._v(" "),s("li",[s("code",[t._v("int")]),t._v(": 32位，默认值"),s("code",[t._v("0")]),t._v(",范围(-2147483648, 2147483647)")]),t._v(" "),s("li",[s("code",[t._v("long")]),t._v(": 64位，默认值"),s("code",[t._v("0L")])]),t._v(" "),s("li",[s("code",[t._v("float")]),t._v(": 32位，单精度，默认值"),s("code",[t._v("0.0f")])]),t._v(" "),s("li",[s("code",[t._v("double")]),t._v(": 64位，双精度，默认值"),s("code",[t._v("0.0d")])]),t._v(" "),s("li",[s("code",[t._v("boolean")]),t._v(": 1位，布尔型，默认值"),s("code",[t._v("false")])]),t._v(" "),s("li",[s("code",[t._v("char")]),t._v(": 16位，Unicode字符，默认值"),s("code",[t._v("/u0000")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("只有全局变量具有默认值，方法中的局部变量必须显式初始化后才可以使用")]),t._v(" "),s("li",[t._v("对于数组，无论是全局还是局部，一旦分配内存空间，会自动以类型对应的默认值进行初始化，"),s("a",{attrs:{href:"https://stackoverflow.com/questions/3426843/what-is-the-default-initialization-of-an-array-in-java/3426854",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),s("OutboundLink")],1)])])]),t._v(" "),s("h4",{attrs:{id:"数值型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数值型"}},[t._v("#")]),t._v(" 数值型")]),t._v(" "),s("ul",[s("li",[t._v("整数常量的默认类型是"),s("code",[t._v("int")])]),t._v(" "),s("li",[t._v("小数常量的默认类型是"),s("code",[t._v("double")])]),t._v(" "),s("li",[t._v("对"),s("code",[t._v("byte")]),t._v("变量直接赋值时，如果在范围内会自动进行"),s("code",[t._v("int->byte")]),t._v("转换")]),t._v(" "),s("li",[s("code",[t._v("byte")]),t._v("可以方便的用于数据传输以及编码转换")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("类型转换")]),t._v(" "),s("ul",[s("li",[t._v("向上转换: 表达式中自动向上转换，不会出现数值转化错误"),s("br"),t._v(" "),s("code",[t._v("char->short->int->long->float->double")]),s("br"),t._v(" "),s("code",[t._v("signed->unsigned")])]),t._v(" "),s("li",[t._v("向下转换: 需要使用强制类型转换")])])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" sum1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Automatically cast to more general type")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("sum1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Explicit type cast")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h4",{attrs:{id:"字符型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符型"}},[t._v("#")]),t._v(" 字符型")]),t._v(" "),s("ul",[s("li",[t._v("使用单引号"),s("code",[t._v("'ch'")]),t._v("，区别于字符串使用双引号"),s("code",[t._v('"str"')])]),t._v(" "),s("li",[t._v("Java使用"),s("code",[t._v("UNICODE")]),t._v("编码，可以认为包含了"),s("code",[t._v("ASCII")]),t._v("编码('A': 65, 'a': 97, '0': 48)")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("ASCLL与UNICODE编码")]),t._v(" "),s("p",[s("strong",[t._v("ASCII")]),t._v(": 每个字符占用1字节(byte)，可以表示256个字符，分为标准ASCII码(0-127)和拓展ASCII码(128-255)，可以表示英文字符和一些符号"),s("br"),t._v(" "),s("strong",[t._v("UNICODE")]),t._v("： 每个字符占用2字节，可以表示世界所有语言文字")])]),t._v(" "),s("h4",{attrs:{id:"布尔型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布尔型"}},[t._v("#")]),t._v(" 布尔型")]),t._v(" "),s("ul",[s("li",[t._v("只有"),s("code",[t._v("true")]),t._v("和"),s("code",[t._v("false")]),t._v("两个值(如果赋值"),s("code",[t._v("null")]),t._v("会报错)")]),t._v(" "),s("li",[t._v("不同于"),s("code",[t._v("C")]),t._v("，"),s("code",[t._v("Java")]),t._v("不支持数值型作为布尔型")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"引用数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用数据类型"}},[t._v("#")]),t._v(" 引用数据类型")]),t._v(" "),s("ul",[s("li",[t._v("Java 引用类型指向一个对象，指向对象的变量是引用变量，默认值为 "),s("code",[t._v("null")])]),t._v(" "),s("li",[t._v("Java 创建对象实例时，将地址赋给引用变量，存储于 "),s("code",[t._v("Stack")]),t._v("，实例存储于 "),s("code",[t._v("Heap")])]),t._v(" "),s("li",[t._v("对象、数组都是引用数据类型，"),s("strong",[t._v("引用传递")])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("特殊数据类型: "),s("code",[t._v("null")]),s("br"),t._v(" "),s("code",[t._v("null")]),t._v("用来标识一个空的对象，因此不能将"),s("code",[t._v("null")]),t._v("赋给基本型的变量"),s("br"),t._v(" "),s("code",[t._v("null")]),t._v("可以转换为任何引用类型")])]),t._v(" "),s("h2",{attrs:{id:"变量类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量类型"}},[t._v("#")]),t._v(" 变量类型")]),t._v(" "),s("h3",{attrs:{id:"局部变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部变量"}},[t._v("#")]),t._v(" 局部变量")]),t._v(" "),s("ul",[s("li",[t._v("局部变量在其作用域中被执行时创建，存储于"),s("code",[t._v("Stack")]),t._v("，在执行完毕后销毁")]),t._v(" "),s("li",[t._v("访问修饰符不能修饰局部变量")]),t._v(" "),s("li",[t._v("局部变量没有默认值，在被声明后必须经过初始化才能使用")])]),t._v(" "),s("h3",{attrs:{id:"实例变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例变量"}},[t._v("#")]),t._v(" 实例变量")]),t._v(" "),s("ul",[s("li",[t._v("实例变量声明在类中，方法、构造方法和语句块外")]),t._v(" "),s("li",[t._v("实例变量跟随对象创建而创建，销毁而销毁")]),t._v(" "),s("li",[t._v("实例变量可以被访问修饰符修饰，且具有默认值")])]),t._v(" "),s("h3",{attrs:{id:"类变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类变量"}},[t._v("#")]),t._v(" 类变量")]),t._v(" "),s("ul",[s("li",[t._v("类变量即静态变量，由"),s("code",[t._v("static")]),t._v("修饰，声明于方法之外")]),t._v(" "),s("li",[t._v("同一个类的所有实例对象共享类变量的一份拷贝")]),t._v(" "),s("li",[t._v("静态变量通常与"),s("code",[t._v("final")]),t._v("配合用于声明常量，名称一般使用大写字母")]),t._v(" "),s("li",[t._v("类变量具有默认值，与实例变量相似")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[t._v("[1] "),s("a",{attrs:{href:"https://www.runoob.com/java/java-basic-datatypes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java菜鸟教程"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("[2] "),s("a",{attrs:{href:"https://blog.csdn.net/qq_28328381/article/details/81163856",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAVA 8大数据类型"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("[3] "),s("a",{attrs:{href:"https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云大学 | 李兴华 - Java语言基础"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);