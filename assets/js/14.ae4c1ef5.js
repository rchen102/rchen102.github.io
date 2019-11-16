(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{220:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[a("code",[s._v("Object")]),s._v("类型可以保存所有的引用数据类型，在JDK1.5之后，"),a("code",[s._v("Object")]),s._v("类型也可以「保存」基本数据类型，依据的就是包装类")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[a("strong",[s._v("基本数据类型")]),s._v("与"),a("strong",[s._v("引用数据类型")]),s._v("差别")]),s._v(" "),a("ul",[a("li",[s._v("基本数据类型使用值传递")]),s._v(" "),a("li",[s._v("引用数据类型使用地址传递「引用传递」(本质实际上还是值传递，只不过传递的值是地址)")])])]),s._v(" "),a("p",[s._v("包装类的出现，实际上就是为了实现基本数据类型与"),a("code",[s._v("Object")]),s._v("类之间的接收问题，统一操作")]),s._v(" "),a("h2",{attrs:{id:"java内置包装类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java内置包装类"}},[s._v("#")]),s._v(" Java内置包装类")]),s._v(" "),a("p",[s._v("对应于8种基本数据类型，Java内置了8个包装类，可以分成两类(与包装类的继承结构有关)")]),s._v(" "),a("ul",[a("li",[s._v("对象型包装类: "),a("code",[s._v("Character")]),s._v(", "),a("code",[s._v("Boolean")])]),s._v(" "),a("li",[s._v("数值型包装类: "),a("code",[s._v("Byte")]),s._v(", "),a("code",[s._v("Short")]),s._v(", "),a("code",[s._v("Integer")]),s._v(", "),a("code",[s._v("Long")]),s._v(", "),a("code",[s._v("Float")]),s._v(", "),a("code",[s._v("Double")])])]),s._v(" "),a("h3",{attrs:{id:"包装类的继承结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包装类的继承结构"}},[s._v("#")]),s._v(" 包装类的继承结构")]),s._v(" "),a("p",[a("strong",[s._v("对象型")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Object -> Boolean")])]),s._v(" "),a("li",[a("code",[s._v("Object -> Character")])])]),s._v(" "),a("p",[a("strong",[s._v("数值型")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Object -> Number(abstract) -> Byte")])]),s._v(" "),a("li",[a("code",[s._v("Object -> Number(abstract) -> Short")])]),s._v(" "),a("li",[a("code",[s._v("Object -> Number(abstract) -> Integer")])]),s._v(" "),a("li",[a("code",[s._v("Object -> Number(abstract) -> Long")])]),s._v(" "),a("li",[a("code",[s._v("Object -> Number(abstract) -> Float")])]),s._v(" "),a("li",[a("code",[s._v("Object -> Number(abstract) -> Double")])])]),s._v(" "),a("p",[s._v("所有数值型包装类都属于"),a("code",[s._v("Number")]),s._v("子类，"),a("code",[s._v("Number")]),s._v("是一个抽象类，其内部提供了以下方法")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("byteValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 拆箱功能，从包装类中获取byte数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shortValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("intValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("longValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("floatValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("doubleValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"自动装箱与拆箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动装箱与拆箱"}},[s._v("#")]),s._v(" 自动装箱与拆箱")]),s._v(" "),a("p",[s._v("包装类与基本数据类型的之间进行的类型转换，称为装箱与拆箱")]),s._v(" "),a("ul",[a("li",[s._v("装箱: 基本数据类型 -> 包装类，一般通过构造方法完成")]),s._v(" "),a("li",[s._v("拆箱: 包装类 -> 基本数据类型(将包装类中的内容取出)，一般通过"),a("code",[s._v("xyzValue()")])])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构造方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// @Deprecated(since="9") JDK1.9后弃用')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 手动的装箱拆箱")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("intValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("Integer(int)")]),s._v("构造方法弃用的原因是，在JDK1.5之后，Java为包装类提供了自动装箱与拆箱处理")]),s._v(" "),a("p",[s._v("利用自动装箱与拆箱机制，避免了复杂的方法调用，同时包装类也可以直接进行计算")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动装箱")]),s._v("\nobj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 包装类可以直接进行计算(自动拆箱装箱)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动拆箱")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"integer包装类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integer包装类"}},[s._v("#")]),s._v(" Integer包装类")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("使用"),a("strong",[s._v("Integer")]),s._v("包装类的时候需要注意，如果直接赋值的数据范围在"),a("code",[s._v("[-128,127]")]),s._v("，Java不会创建新的"),a("strong",[s._v("Integer")]),s._v("对象")]),s._v(" "),a("p",[s._v("原因在于JDK1.7之后，Java给"),a("strong",[s._v("Integer")]),s._v("类设置了"),a("code",[s._v("[-128,127]")]),s._v("的静态缓存")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向Integer直接赋值时，实际调用了valueOf()")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("     \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IntegerCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关键")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IntegerCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"double-float包装类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#double-float包装类"}},[s._v("#")]),s._v(" Double/Float包装类")]),s._v(" "),a("p",[a("code",[s._v("Double")]),s._v("与"),a("code",[s._v("Float")]),s._v("包装类没有类似"),a("code",[s._v("Integer")]),s._v("的缓存机制")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("使用包装类直接赋值的自动装箱操作时，也需要考虑数值对应的数据类型")]),s._v(" "),a("p",[s._v("如果要使用"),a("strong",[s._v("Float")]),s._v("直接赋值的自动装箱，需要先将数据转化为"),a("strong",[s._v("float")]),s._v("型")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Float")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Floar")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Correct")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"包装类与object类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包装类与object类"}},[s._v("#")]),s._v(" 包装类与Object类")]),s._v(" "),a("p",[a("code",[s._v("Object")]),s._v("类真正可以实现接收"),a("strong",[s._v("全部")]),s._v("数据类型的参数统一功能")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动装箱Double，Double向上转型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Object向下转型，Double自动拆箱")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);