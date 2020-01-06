---
title: Lambda表达式
date: 2019-12-25 14:29:00
categories: 
tags:
---
## 介绍
Lambda表达式的出现解决了内部类代码过于冗余的问题，并且为了Lambda表达式的使用方便，从`JDK1.8`开始，支持方法内内部类可以直接访问方法参数

Lambda是一种函数式编程

### 问题
没有Lambda表达式前的匿名内部类，匿名类的核心语句只有一行，但是不得不编写其他冗余的代码
```java{8}
interface MessageI {
    public void send(String msg);
}

public static void main(String[] args) {
    MessageI myMsg = new MessageI() {
        public void send(String msg) {
            System.out.println(msg);
        }
    }
    myMsg.send("Hello");
}
```

### 使用Lambda表达式
```java
public static void main(String[] args) {
    MessageI myMsg = (msg) -> {
        System.out.println(msg);
    };
    myMsg.send("Hello");
}
```

## Lambda表达式使用
**1. 编写多行语句**
```java
(n1, n2) -> {
    int n3 = n1 + n2;
    n3 = n3 + 1;
    return n3;
};
```

**2. 编写单行返回语句**
```java
(n1, n2) -> n1 + n2;
```

:::warning 注意
使用函数式编程的前提，一个接口只允许有一个抽象方法  
如果出现其他方法，只能是`default`或者`static`方法
:::

可以使用注解`@FunctionalInterface`防止定义多个抽象方法
```java
@FunctionalInterface
interface MessageI {
    public void send(String msg);
}
```

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)