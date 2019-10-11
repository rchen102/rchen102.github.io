---
title: Java笔记3
date: 2019-09-14 17:37:10
categories: Java
tags:
---
## Java语法
__目录__
Java运算符
Java访问修饰符
Java非访问修饰符

__参考__
[1] [Java菜鸟教程](https://www.runoob.com/java/java-tutorial.html)

### Java运算符
与其他编程语言类似，Java支持基本的运算符
- 算术运算符(Arithmetic Operator) `+,-,*,/,%`
- 自加自减运算符(Increment/Decrement Operator) `++a,a--`，前缀自增/自减，先进行自增/自减运算，再进行表达式运算，后缀相反
- 关系运算符(Relational Operator) `==,!=,>,<,>=,<=`
- 逻辑运算符(Logical Operator) `&&,||,!`，具有短路特性
- 位运算符(Bitwise Operator) `&,|,^,~,<<,>>,>>>`
- 赋值运算符(Assignment Operator) `=,+=,-=,etc`
- 条件/三目运算符(Ternary Operator) `?:`

Java运算符优先级：__单目乘除位关系，逻辑三目后赋值__

### 访问修饰符
Java通过访问修饰符(Access modifiers)，控制类、变量、方法的访问，支持4种不同的修饰符
- __default__: 也称package-private，在同一package下可见。可以修饰：类、接口、变量、方法
- __private__: 仅在同一class内可见。可以修饰：变量、方法
- __protected__: 仅对同一package的class和所有sub-class可见。可以修饰：变量、方法
- __public__: 对所有class可见。可以修饰：类、接口、变量、方法

<!-- more -->

![Modifier](Java笔记3/Modifier.png)

### 非访问修饰符
除了访问修饰符外，Java也提供了一些非访问修饰符(Non-access modifiers)，实现其他的功能

__1. static__
- 修饰变量、方法
JVM加载类时，为被static修饰的变量或方法仅创建一份拷贝，所有该类的实例共享该拷贝
因此也称类变量或类方法。局部变量不能被static修饰，静态方法不能访问类的非静态变量

- 修饰代码块
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

__2. final__
- 修饰变量
final修饰的变量必须显示指定初始值，且赋值后不能被更改，常与static使用创建类常量
```java
class Math {
    public static final pi = 3.14;
}

```
- 修饰方法
父类中final修饰的方法可以被子类继承，但是不能被重写(override)
使用final的主要目的就是防止方法的内容被修改

- 修饰类
final修饰的类不能被继承

