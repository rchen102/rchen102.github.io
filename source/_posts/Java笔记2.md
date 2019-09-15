---
title: Java笔记2
date: 2019-09-06 19:09:08
categories: Java
tags:
---
## Java语法
目录
- Java数据类型
- Java变量类型
- Java运算符
- 访问修饰符
- 非访问修饰符

### Java数据类型
#### 基本数据类型
Java的基本数据类型共有8种，可以分为字符型、布尔型和数值型
Java中的数值类型不存在无符号，取值范围固定，不依赖硬件环境或操作系统
Java的基本类型存储在stack中，存取速度快
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

#### 引用数据类型
Java引用类型指向一个对象，指向对象的变量是引用变量，默认值为`null`
对象、数组都是引用数据类型
Java创建对象实例时，将地址赋给引用变量，存储于stack，实例存储于heap

### Java变量类型
#### 局部变量
局部变量在其作用域中被执行时创建，存储于stack，在执行完毕后销毁
访问修饰符不能修饰局部变量
局部变量没有默认值，在被声明后必须经过初始化才能使用

#### 实例变量
实例变量声明在类中，方法、构造方法和语句块外
实例变量跟随对象创建而创建，销毁而销毁
实例变量可以被访问修饰符修饰，且具有默认值

#### 类变量
类变量即静态变量，由static修饰，声明于方法之外
同一个类的所有实例对象共享类变量的一份拷贝
静态变量通常与final配合用于声明常量，名称一般使用大写字母
类变量具有默认值，与实例变量相似

### Java运算符
与其他编程语言类似，Java支持基本的运算符
- 算术运算符`+,-,*,/,%`
- 自加自减运算符`++a,a--`，前缀自增/自减，先进行自增/自减运算，再进行表达式运算，后缀相反
- 关系运算符`==,!=,>,<,>=,<=`
- 逻辑运算符`&&,||,!`，具有短路特性
- 位运算符`&,|,^,~,<<,>>,>>>`
- 赋值运算符`=,+=,-=,etc`
- 条件运算符(三目运算符)`?:`

Java运算符优先级：__单目乘除位关系，逻辑三目后赋值__

### 访问修饰符
Java通过访问修饰符(Access modifiers)，控制类、变量、方法的访问，支持4种不同的修饰符
- __default__: 也称package-private，在同一package下可见。可以修饰：类、接口、变量、方法
- __private__: 仅在同一class内可见。可以修饰：变量、方法
- __protected__: 仅对同一package的class和所有sub-class可见。可以修饰：变量、方法
- __public__: 对所有class可见。可以修饰：类、接口、变量、方法

![Modifier](Java笔记2/Modifier.png)

### 非访问修饰符
除了访问修饰符外，Java也提供了一些非访问修饰符(Non-access modifiers)，实现其他的功能
#### static
- __变量或方法__
JVM加载类时，为被static修饰的变量或方法仅创建一份拷贝，所有该类的实例共享该拷贝
因此也称类变量或类方法。局部变量不能被static修饰，静态方法不能访问类的非静态变量
- __代码块__
当JVM第一次加载类时，被static修饰的代码块会得到运行，因此常用static块完成类的静态初始化
静态代码块中不能访问非静态变量
```java
class Student {
    private static school;
    static {
        this.school = "BU";
    }
}
```

#### final
- __变量__
final修饰的变量必须显示指定初始值，且赋值后不能被更改，常与static使用创建类常量
```java
class Math {
    public static final pi = 3.14;
}

```
- __方法__
父类中final修饰的方法可以被子类继承，但是不能被重写(override)
使用final的主要目的就是防止方法的内容被修改
- __类__
final修饰的类不能被继承


__参考资料__
[1] [Java菜鸟教程](https://www.runoob.com/java/java-tutorial.html) 
[2] https://blog.csdn.net/qq_28328381/article/details/81163856