---
title: 代码块
date: 2019-09-06 19:09:08
categories: 
tags:
---
## 普通代码块
代码块(code block): 通常指由`{}`所包围的一块代码

普通代码块可以用于对复杂或较长的方法进行切割分块，防止变量名冲突(不常用)

```java
public void test() {
    {
        int num = 1;
    }
    {
        int num = 10;
    }
}
```

## 构造代码块
构造代码块(Instance Initialization Block)通常放置于构造器代码前，在实例创建时执行，且在构造器之前执行

```java
class Test {
    {
        System.out.println("IIB Block1");
    }
    {
        System.out.println("IIB Block2");
    }
    Test() {
        System.out.println("Constructor Called");
    }
}

/* Output
 * IIB Block1
 * IIB Block2
 * Constructor Called
 */
```

## 静态代码块
静态代码块(Static Block)是由`static`修饰的代码块，通常用于静态初始化  
只在该类第1次被实例化或第1次访问该类的静态成员时执行1次(**即加载进内存时**)，先于构造块

```java
class Test {
    static {
        System.out.println("Static Block");
    }
    {
        System.out.println("IIB Block");
    }
    Test() {
        System.out.println("Constructor Called");
    }
}

/* Output
 * Static Block
 * IIB Block
 * Constructor Called
 */
```

## 同步代码块
见[Java多线程编程](../Java高级/Java高级-多线程编程3)

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)