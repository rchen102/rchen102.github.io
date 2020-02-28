(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{250:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"抽象类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类"}},[t._v("#")]),t._v(" 抽象类")]),t._v(" "),a("ul",[a("li",[t._v("面向对象概念中，对象都是通过类来描述，但并不是所有类都是用来描绘对象的")]),t._v(" "),a("li",[t._v("除了不能实例化对象外，抽象类与普通类并没有区别")]),t._v(" "),a("li",[t._v("抽象类对子类有所要求: 可以强制子类对某些方法进行实现(覆写)")])]),t._v(" "),a("h3",{attrs:{id:"抽象类特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类特性"}},[t._v("#")]),t._v(" 抽象类特性")]),t._v(" "),a("ul",[a("li",[t._v("抽象类不能被实例化对象，必须被继承才能使用")]),t._v(" "),a("li",[t._v("抽象类的子类需要实现所有的抽象方法，否则也是抽象类")]),t._v(" "),a("li",[a("strong",[t._v("构造方法")]),t._v("，"),a("strong",[t._v("类方法")]),t._v("(静态方法)不能声明为抽象方法")]),t._v(" "),a("li",[t._v("一个类只能继承一个抽象类")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("抽象类允许"),a("strong",[t._v("不包含抽象方法")]),t._v("，但依然不能被实例化")]),t._v(" "),a("li",[t._v("子类对抽象方法的实现属于"),a("strong",[t._v("重写")]),t._v(" ("),a("code",[t._v("@Override")]),t._v(")")]),t._v(" "),a("li",[t._v("日常开发通常不会继承普通类，只继承抽象类")])])]),t._v(" "),a("h2",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),a("ul",[a("li",[t._v("接口并不是类，类描述对象属性和方法，接口则是类要实现的抽象方法的集合")]),t._v(" "),a("li",[t._v("抽象类虽然可以要求子类实现某些抽象方法，但是一个子类只能继承"),a("strong",[t._v("一个")]),t._v("抽象类，却可以实现"),a("strong",[t._v("多个")]),t._v("接口")]),t._v(" "),a("li",[t._v("通常接口只包含"),a("strong",[t._v("全局常量")]),t._v("和"),a("strong",[t._v("抽象方法")]),t._v("，但是从"),a("code",[t._v("JDK1.8")]),t._v("开始，接口可以定义更多的内容")])]),t._v(" "),a("h3",{attrs:{id:"接口特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口特性"}},[t._v("#")]),t._v(" 接口特性")]),t._v(" "),a("ul",[a("li",[t._v("接口不能实例化，需要由其他类实现接口")]),t._v(" "),a("li",[t._v("接口的实现类(如果不是抽象类)，必须实现接口中"),a("strong",[t._v("所有")]),t._v("的「抽象」方法")]),t._v(" "),a("li",[t._v("接口中每一个方法会被隐式指定为"),a("code",[t._v("public abstract")]),t._v("(只能是，其他修饰符会报错)")]),t._v(" "),a("li",[t._v("接口中每一个变量会被隐式指定为"),a("code",[t._v("public static final")]),t._v("(接口中只有"),a("code",[t._v("public")]),t._v("一种权限)")]),t._v(" "),a("li",[t._v("接口允许多继承，一个接口可以继承多个父接口")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("接口可以用于标记(tag): 可以声明一个接口，无任何抽象方法，仅仅起到标记作用")])]),t._v(" "),a("h3",{attrs:{id:"接口定义的加强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口定义的加强"}},[t._v("#")]),t._v(" 接口定义的加强")]),t._v(" "),a("p",[a("code",[t._v("JDK1.8")]),t._v("后，增加"),a("code",[t._v("default")]),t._v("方法和"),a("code",[t._v("static")]),t._v("方法定义(接口可以拥有方法体了)")]),t._v(" "),a("p",[a("strong",[t._v("接口问题分析")]),t._v(": 如果一个接口已经被多个类实现，但是又需要对接口进行修改，如扩充一个新方法，且所有子类对扩充方法的实现相同，此时就需要对大量子类进行修改")]),t._v(" "),a("p",[a("strong",[t._v("传统解决方案")]),t._v(": 子类实现接口，同时在接口与子类间，增加一个中间"),a("strong",[t._v("抽象类")]),t._v("，由抽象类「继承」接口")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentAdaptor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中间类，负责一些同一的修改，实现")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentAdaptor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("code",[t._v("JDK1.8")]),t._v("之后考虑到了接口的修改扩充问题，为了简化抽象类的过渡造成的结构影响(结构混乱)，所以引入了普通方法的定义")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" sayHi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("但是因此也引出了新的问题，如果一个类实现了多个接口，而多个接口含有名称相同的"),a("code",[t._v("default")]),t._v("方法？相当于出现了「多继承」的问题，此时如果子类没有显示重写此方法，则编译器会报错")])]),t._v(" "),a("h2",{attrs:{id:"抽象类与接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类与接口"}},[t._v("#")]),t._v(" 抽象类与接口")]),t._v(" "),a("h3",{attrs:{id:"向上转型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向上转型"}},[t._v("#")]),t._v(" 向上转型")]),t._v(" "),a("p",[t._v("一个类可以继承一个抽象类的同时，实现多个接口，且因为抽象类和接口都支持"),a("strong",[t._v("向上转型")]),t._v("，因此子类的父类对象可以相互间进行强制类型转换")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BUStudent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BUStudent")]),t._v(" astu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" astu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Forced cast")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Object类")]),t._v(" "),a("p",[t._v("由此可知，不仅所有引用数据类型(基本数据类型通过自动装箱也可以)可以由"),a("code",[t._v("Object")]),t._v("类接收，任何接口类型同样可以")])]),t._v(" "),a("h3",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("比较点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("抽象类")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("接口")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("定义")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("abstract class")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("interface")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("组成")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("属性，全局常量，构造/抽象/普通/静态方法")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("全局常量，抽象/普通/静态方法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("关系")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可以实现多个接口")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不能继承任何类，可以继承多个父接口")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("子类")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用"),a("code",[t._v("extends")]),t._v("继承"),a("strong",[t._v("一个")]),t._v("抽象类")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用"),a("code",[t._v("implements")]),t._v("实现"),a("strong",[t._v("多个")]),t._v("接口")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("限制")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("单继承限制")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无类似限制")])])])]),t._v(" "),a("p",[t._v("可以发现，抽象类与接口的最大区别在于单继承限制上，两者皆可使用的情况下，优先使用接口")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("[1] "),a("a",{attrs:{href:"https://www.runoob.com/java/java-abstraction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java菜鸟教程"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("[2] "),a("a",{attrs:{href:"https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云大学 | 李兴华 - Java语言基础"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);