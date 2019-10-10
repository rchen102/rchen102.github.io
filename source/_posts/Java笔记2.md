---
title: Java笔记2
date: 2019-09-06 19:09:08
categories: Java
tags:
---
## Java语法
__目录__
Java规范
Java数据类型
Java变量类型

__参考__
[1] [Java菜鸟教程](https://www.runoob.com/java/java-tutorial.html) 
[2] [JAVA 8大数据类型](https://blog.csdn.net/qq_28328381/article/details/81163856)
[3] [阿里云大学 | Java学习路线 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)


### Java规范



### Java数据类型
__1. 基本数据类型__
1. Java的基本数据类型共有8种，可以分为字符型、布尔型和数值型
2. Java中的数值类型不存在无符号，取值范围固定，不依赖硬件环境或操作系统
3. Java的基本类型存储在stack中，存取速度快
- byte: 8位，默认值`0`
- short: 16位，默认值`0`
- int: 32位，默认值`0`
- long: 64位，默认值`0L`
- float: 32位，单精度，默认值`0.0f`
- double: 64位，双精度，默认值`0.0d`
- boolean: 1位，布尔型，默认值`false`
- char: 16位，Unicode字符，默认值`/u0000`

<!-- more -->

```java
public class Test {
    static boolean bool;
    static byte by;
    static char ch;
    static double d;
    static float f;
    static int i;
    static long l;
    static short sh;
    static String str;
 
    public static void main(String[] args) {
        System.out.println("Bool :" + bool);
        System.out.println("Byte :" + by);
        System.out.println("Character:" + ch);
        System.out.println("Double :" + d);
        System.out.println("Float :" + f);
        System.out.println("Integer :" + i);
        System.out.println("Long :" + l);
        System.out.println("Short :" + sh);
        System.out.println("String :" + str);
    }
}
Bool     :false
Byte     :0
Character:
Double   :0.0
Float    :0.0
Integer  :0
Long     :0
Short    :0
String   :null
```

__引用数据类型__
1. Java引用类型指向一个对象，指向对象的变量是引用变量，默认值为`null`
2. Java创建对象实例时，将地址赋给引用变量，存储于stack，实例存储于heap
3. 对象、数组都是引用数据类型

### Java变量类型
__1. 局部变量__
- 局部变量在其作用域中被执行时创建，存储于stack，在执行完毕后销毁
- 访问修饰符不能修饰局部变量
- 局部变量没有默认值，在被声明后必须经过初始化才能使用

__2. 实例变量__
- 实例变量声明在类中，方法、构造方法和语句块外
- 实例变量跟随对象创建而创建，销毁而销毁
- 实例变量可以被访问修饰符修饰，且具有默认值

__3. 类变量__
- 类变量即静态变量，由static修饰，声明于方法之外
- 同一个类的所有实例对象共享类变量的一份拷贝
- 静态变量通常与final配合用于声明常量，名称一般使用大写字母
- 类变量具有默认值，与实例变量相似




