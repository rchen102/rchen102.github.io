(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{228:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("为了更好地组织类，Java 提供了包机制，用于区别类名的命名空间")]),s._v(" "),t("h3",{attrs:{id:"目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[s._v("#")]),s._v(" 目的")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("管理组织项目")]),s._v(": 将功能相似或相关的类或接口组织在同一个包中，方便类的查找和使用")]),s._v(" "),t("li",[t("strong",[s._v("防止命名冲突")]),s._v(": 解决多人协作开发时，命名冲突的问题。包创建了新的命名空间(namespace)，不同包中可以存在重名的类")]),s._v(" "),t("li",[t("strong",[s._v("访问控制")]),s._v(": 包同时也提供了访问权限控制")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("一个包相当于对应一个文件夹，包也采用了树形目录的存储方式")])]),s._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("h3",{attrs:{id:"定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),t("ul",[t("li",[s._v("包的声明应该在源文件的第一行")]),s._v(" "),t("li",[s._v("通常使用小写字母进行包的定义")]),s._v(" "),t("li",[s._v("使用"),t("code",[s._v(".")]),s._v("表示子目录")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("pkg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SomeClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[s._v("#")]),s._v(" 导入")]),s._v(" "),t("ul",[t("li",[s._v("为了使用某个包中的成员，我们需要借助"),t("code",[s._v("import")]),s._v("关键字进行包中类的导入")]),s._v(" "),t("li",[s._v("如果在同一个包(同一个目录)下，则无需导入，可以直接使用")]),s._v(" "),t("li",[t("code",[s._v("import")]),s._v("声明必须在包声明之后，类声明之前")]),s._v(" "),t("li",[s._v("可以使用通配符"),t("code",[s._v("*")]),s._v("，导入包中全部的类")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("ul",[t("li",[s._v("使用通配符"),t("code",[s._v("*")]),s._v("进行导入，实际上不存在性能上的问题。只是自动导入所需要的类，不需要的不导入")]),s._v(" "),t("li",[s._v("如果需要同时使用不同包中相同类名的类时，应加上包名加以区分")])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" pkg5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("pkg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SomeClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("pkg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SomeClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AnotherClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        pkg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SomeClass")]),s._v(" sc1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" pkg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SomeClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        pkg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SomeClass")]),s._v(" sc2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" pkg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pkg4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SomeClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("可以使用"),t("code",[s._v("javac -d . *.java")]),s._v("来编译并为"),t("code",[s._v(".class")]),s._v("文件自动生成目录")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-d")]),s._v(": 表示根据"),t("code",[s._v("package")]),s._v("定义生成目录")]),s._v(" "),t("li",[t("code",[s._v(".")]),s._v(": 表示目录的生成位置，"),t("code",[s._v(".")]),s._v("表示当前所在目录")])])]),s._v(" "),t("h3",{attrs:{id:"静态导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态导入"}},[s._v("#")]),s._v(" 静态导入")]),s._v(" "),t("p",[s._v("如果一个类中的方法全是静态方法，则通常使用方式如下:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./util/MyMath/Function.java")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" util"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyMath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" n2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./driver/Test.java")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" driver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" util"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyMath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("以上使用方式是"),t("code",[s._v("JDK1.5")]),s._v("之前采用的，现在也可以使用，"),t("code",[s._v("JDK1.5")]),s._v("之后引入了静态导入的特性")]),s._v(" "),t("p",[t("strong",[s._v("静态导入")])]),s._v(" "),t("ul",[t("li",[s._v("要求类中的方法都是静态方法")]),s._v(" "),t("li",[s._v("调用类中静态方法时，可以省略类名称")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./driver/Test.java")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" driver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" util"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyMath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 静态导入")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用时无需类名称")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"jar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jar"}},[s._v("#")]),s._v(" jar")]),s._v(" "),t("p",[s._v("通常一个项目开发完成后，存在大量的"),t("code",[s._v(".class")]),s._v("文件，不便于直接交与用户使用")]),s._v(" "),t("ul",[t("li",[s._v("容易损伤硬盘")]),s._v(" "),t("li",[s._v("数据传输慢")]),s._v(" "),t("li",[s._v("维护困难")])]),s._v(" "),t("p",[t("code",[s._v("JAR")]),s._v("文件(Java Archive)相当于一种压缩文件格式，可将多个文件合成一个文件，是一种与平台无关的文件格式")]),s._v(" "),t("p",[t("code",[s._v("JAR")]),s._v("文件与"),t("code",[s._v("zip")]),s._v("文件的区别在于JAR文件中默认包含了一个名为"),t("code",[s._v("MANIFEST.MF")]),s._v("的清单文件，在生成JAR文件时由系统自动创建，该文件可以用于指定主类")]),s._v(" "),t("h3",{attrs:{id:"作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),t("ul",[t("li",[s._v("压缩文件大小，加快传输速度(无需为每一个文件建立一个"),t("code",[s._v("HTTP")]),s._v("连接)")]),s._v(" "),t("li",[s._v("用于打包发布和使用类库")]),s._v(" "),t("li",[s._v("创建可执行"),t("code",[s._v("JAR")])])]),s._v(" "),t("h3",{attrs:{id:"使用-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("ul",[t("li",[s._v("作为类库使用时，需要进行"),t("code",[s._v("CLASSPATH")]),s._v("的配置\n"),t("ul",[t("li",[s._v("自动根据"),t("code",[s._v("CLASSPATH")]),s._v("进行路径中的"),t("code",[s._v("*.class")]),s._v("文件加载")]),s._v(" "),t("li",[t("code",[s._v(".jar")]),s._v("文件等同于一个目录")]),s._v(" "),t("li",[t("code",[s._v("SET CLASSPATH=.;E:\\xxx\\xxx.jar")])])])]),s._v(" "),t("li",[s._v("作为可执行"),t("code",[s._v("JAR")]),s._v("包使用时，需要指定主类")])]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[s._v("[1] "),t("a",{attrs:{href:"https://www.runoob.com/java/java-package.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java菜鸟教程"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("[2] "),t("a",{attrs:{href:"https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf",target:"_blank",rel:"noopener noreferrer"}},[s._v("阿里云大学 | 李兴华 - Java语言基础"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);