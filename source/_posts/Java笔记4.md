---
title: Java笔记4-面向对象1
date: 2019-10-10 11:21:14
categories: Java
tags:
---
## Java面向对象1
__目录__
类和对象
Java封装

__参考__
[1] [Java菜鸟教程](https://www.runoob.com/java/java-tutorial.html) 
[2] [Java的封装](https://www.cnblogs.com/zhangruifeng/p/9320561.html)


### 类和对象
__类__
1. 对象的模板，描述的是一类对象的行为和状态
2. 类主要由变量和方法构成
    + 变量: 局部变量，成员变量，类变量(即静态变量)
    + 方法: 构造方法，类方法(静态方法)

__对象__
1. 对象根据类创建，是类的一个实例
2. 创建对象
    + 声明: 声明一个对象，包括类型和名称
    + 实例化: 使用关键字`new`来创建一个对象
    + 初始化: 使用`new`创建对象时，会调用构造方法初始化对象

### Java封装
封装(Encapsulation)是Java的三大特性之一，其主要思想即：__需要隐藏的隐藏，需要暴露的暴露__

封装的优点/目的：
1. 隐藏信息和实现细节
2. 通过实现好的方法对字段进行访问和修改，避免不合理的访问，提高了安全性
3. 良好的封装可以减少耦合，修改类的内部结构，不影响对外的API

如何实现封装：通过访问控制符，隐藏字段(属性)和实现细节，提供对外的公共方法
```java
public class Student {
    private int age;

    public int getAge() {
        return this.age;
    }

    public boolean setAge(int ageIn) {
        if (ageIn < 6 || ageIn > 100) return false;
        this.age = ageIn;
        return true;
    }
}

```






