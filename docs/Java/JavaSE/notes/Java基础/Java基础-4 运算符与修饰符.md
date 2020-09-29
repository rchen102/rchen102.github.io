---
title: 运算符与修饰符
date: 2019-09-14 17:37:10
categories: 
    - [Java, Java基础]
tags:
---
## 运算符
与其他编程语言类似，Java支持基本的运算符
- 算术运算符(Arithmetic Operator) `+,-,*,/,%`
- 自加自减运算符(Increment/Decrement Operator) `++a,--a`，前缀自增/自减，先进行自增/自减运算，再进行表达式运算，后缀相反
- 关系运算符(Relational Operator) `==,!=,>,<,>=,<=`
- 逻辑运算符(Logical Operator) `&,&&,|,||,!`，具有短路特性
- 位运算符(Bitwise Operator) `&,|,^,~,<<,>>,>>>`
- 赋值运算符(Assignment Operator) `=,+=,-=,etc`
- 条件/三目运算符(Ternary Operator) `?:`

Java运算符优先级：__单目乘除位关系，逻辑三目后赋值__

## 非访问修饰符
除了访问修饰符外，Java也提供了一些非访问修饰符(Non-access modifiers)，实现其他的功能

### static
- 静态成员变量/静态方法
JVM加载类时，为被static修饰的成员变量或方法仅创建一份拷贝，所有该类的实例共享该拷贝  
因此也称类变量或类方法。局部变量不能被static修饰，静态方法不能访问类的非静态变量

- 静态代码块
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

### final
- 修饰类：类不可以被继承
- 修饰方法：方法可以被继承，但是不可以被重写 override
- 修饰变量：变量的值不可用被改变

**使用 final 修饰类或者方法**，明确告知别人，这些行为是不许修改的：  
- java.lang 下的很多核心包，都被修饰为 final，可以有效避免 API 使用者更改基础功能，在一定程度上，是保证平台的安全的必要手段

**使用 final 修饰变量**：  
- 可以避免意外赋值导致的编程错误
- 起到了不可变的效果，可以用于保护只读数据，尤其是在并发编程中，因为明确地不能再赋值 final 变量，有利于减少额外的同步开销

```java
/**
 * 1 修饰类变量，即 static final：必须显示指定初始值，常用于创建类常量
 * 2 修饰非 static 字段：在构造完成前初始化即可，即在构造方法中或代码块中初始化
 * 3 修饰局部变量，声明时，可以不用初始化，但是只能赋值一次，赋值后不能更改
 */
class Math {
    public static final pi = 3.14;
    public final g;

    public Math() {
        g = 9.8;
    }
}
```

## 参考
[1] [Java菜鸟教程](https://www.runoob.com/java/java-operators.html)