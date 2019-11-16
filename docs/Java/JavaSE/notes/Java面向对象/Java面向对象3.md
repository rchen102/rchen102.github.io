---
title: 多态
date: 2019-10-14 22:14:51
categories: 
    - [Java, Java面向对象]
tags:
---
## Java多态
多态(Polymorphism)是Java面向对象的三大特性最后一个

同一个行为具有多个不同表现形式或形态的能力

同一个接口，使用不同的实例而执行不同操作

## 优点/目的
- 消除类型之间的耦合关系
- 可替换性
- 可扩充性
- 接口性
- 灵活性

## 多态的实现方式
- 方法: 重载，重写
- 对象: 向上转型，向下转型
    + 接口
    + 抽象类(抽象方法)

## 向下转型
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

## 参考
[1] [Java菜鸟教程](https://www.runoob.com/java/java-tutorial.html) 