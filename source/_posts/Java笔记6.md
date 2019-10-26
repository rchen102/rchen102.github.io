---
title: Java笔记6-面向对象3
date: 2019-10-14 22:14:51
categories: Java
tags:
---
## Java面向对象3
__目录__
Java多态
Java接口
Java抽象类

__参考__
[1] [Java菜鸟教程](https://www.runoob.com/java/java-tutorial.html) 

### Java多态
- 多态(Polymorphism)是Java面向对象的三大特性最后一个
- 同一个行为具有多个不同表现形式或形态的能力
- 同一个接口，使用不同的实例而执行不同操作

__1. 多态的优点/目的__
- 消除类型之间的耦合关系
- 可替换性
- 可扩充性
- 接口性
- 灵活性

__2. 多态的实现方式__
- 方法重载与重写
- 对象的向上转型、向下转型
    + 接口
    + 抽象类(抽象方法)

__3. 注意__
- 使用向下转型时，需要进行强制类型转换  
  因此需要预防`ClassCastException`，使用`instanceof`
```java
class Person {
    //
}

class Student extends Person {
    //
}

Person stu = new Student();
System.out.println(stu instanceof Person);   // false
System.out.println(stu instanceof Student);  // true

Person per = null;
Student stu = null;
System.out.println(per instanceof Person);   // false
System.out.println(stu instanceof Student);  // false
```