---
title: 数据类型与变量类型
date: 2019-09-06 19:09:08
categories: 
    - [Java, Java基础]
tags:
---
## 数据类型
Java中的数据类型主要分为两类
- 基本数据类型(Primitive Type)
- 引用数据类型(Reference Type)

### 基本数据类型
- 8 种基本类型，值传递，存储在 `Stack` 中
- 数值类型**不存在无符号**，取值范围固定，不依赖硬件环境或操作系统
- 类变量无需初始化具有默认值，局部变量必须初始化（数组例外，数组分配空间后，以默认值初始化）

| 类型 |  空间大小/bit  | 范围 | 默认值 | 
| :--: | :--: | :--: | :--: |
| byte | 8 | [-128，127] | 0 |
| short | 16 | [-2^15 + 1，2^15 - 1] | 0 |
| int | 32 | [-2147483648，2147483647] | 0 |
| long | 64 |  | 0L |
| float | 32 |  | 0.0f |
| double | 64 |  | 0.0d |
| boolean | 1 | true/false | false |
| char | 16 |  | /u0000 |

#### 数值型
- 整数常量的默认类型是`int`
- 小数常量的默认类型是`double`
- 对`byte`变量直接赋值时，如果在范围内会自动进行`int->byte`转换
- `byte`可以方便的用于数据传输以及编码转换

:::tip 类型转换
- 向上转换: 表达式中，如果进行运算的两个数据类型不同，自动向上转换，不会出现数值转化错误  
  `char->short->int->long->float->double`  
  `signed->unsigned`  
- 向下转换: 需要使用强制类型转换
:::
```java
int num1 = 1;
int num2 = 1;
long sum1 = num1 + num2; // Automatically cast to more general type
int sum2 = (int)sum1;    // Explicit type cast

int x = 2147483647;    // Max of int
long n = x + 1;        // n = -2147483648
long n = x + 1L;       // n = 2147483648
long n = (long)x + 1;  // n = 2147483648
```

#### 字符型
- 使用单引号`'ch'`，区别于字符串使用双引号`"str"`
- Java使用`UNICODE`编码，可以认为包含了`ASCII`编码('A': 65, 'a': 97, '0': 48)

::: tip ASCLL与UNICODE编码
__ASCII__: 每个字符占用 1 字节（byte），可以表示 256 个字符，分为标准码（0-127），键盘上可以找到和拓展码（128-255），键盘上找不到，可以表示英文字符和一些符号

__UNICODE__： 每个字符占用 2 byte，可以表示世界所有语言文字
:::

#### 布尔型
- 只有`true`和`false`两个值(如果赋值`null`会报错)
- 不同于`C`，`Java`不支持数值型作为布尔型
```java
int flag = 1;
if (flag) {
    // Error
}
```

### 引用数据类型
- Java 引用类型指向一个对象，指向对象的变量是引用变量，默认值为 `null`
- Java 创建对象实例时，将地址赋给引用变量，存储于 `Stack`，实例存储于 `Heap`
- 对象、数组都是引用数据类型，__引用传递__

引用类型的大小取决于地址空间，一个 32 位的地址，引用类型需要 4 byte 存储，如果是 64 位，则是 8 byte

::: warning 注意
特殊数据类型: `null`  
`null`用来标识一个空的对象，因此不能将`null`赋给基本型的变量  
`null`可以转换为任何引用类型  
:::

## 变量类型
### 局部变量
- 局部变量在其作用域中被执行时创建，存储于`Stack`，在执行完毕后销毁
- 访问修饰符不能修饰局部变量
- 局部变量没有默认值，在被声明后必须经过初始化才能使用

### 实例变量
- 实例变量声明在类中，方法、构造方法和语句块外
- 实例变量跟随对象创建而创建，销毁而销毁
- 实例变量可以被访问修饰符修饰，且具有默认值

### 类变量
- 类变量即静态变量，由`static`修饰，声明于方法之外
- 同一个类的所有实例对象共享类变量的一份拷贝
- 静态变量通常与`final`配合用于声明常量，名称一般使用大写字母
- 类变量具有默认值，与实例变量相似

## 参考
[1] [Java菜鸟教程](https://www.runoob.com/java/java-basic-datatypes.html)

[2] [JAVA 8大数据类型](https://blog.csdn.net/qq_28328381/article/details/81163856)

[3] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)