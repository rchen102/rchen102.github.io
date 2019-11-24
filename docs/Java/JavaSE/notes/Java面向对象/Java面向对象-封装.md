---
title: 封装
date: 2019-10-10 11:21:14
categories: 
    - [Java, Java面向对象]
tags:
---
## 类和对象
__类__: 对象的模板，描述的是一类对象的行为和状态
- 属性(Field): 局部变量，成员变量，类变量(即静态变量)
- 方法(Method): 构造方法，类方法(静态方法)

__对象__: 对象根据类创建，是类的一个实例
- 声明: 声明一个对象，包括类型和名称
- 实例化: 使用关键字`new`来创建一个对象
- 初始化: 使用`new`创建对象时，会调用构造方法(constructor)初始化对象

### 内存分析
- 堆内存(Heap): 保存类的实例，由关键字`new`开辟的内存空间
- 栈内存(Stack): 保存实例的引用，是实例在堆内存的地址
- 垃圾(Garbage): 没有任何引用指向的堆内存空间，由JVM通过GC不定期回收

### 关键字this
- `this`: 当前对象的引用，可以用于访问当前对象的属性和方法
- `this()`: 调用本类的构造方法，只能放在构造方法首行，且只能调用一次
- 实例对象调用自身方法时，实例对象自身的引用会被作为隐式参数传入

## 封装
封装(Encapsulation)是Java面向对象三大特性之一

主要思想：__需要隐藏的隐藏，需要暴露的暴露__

### 优点/目的
- 隐藏信息和实现细节
- 通过实现好的方法对字段进行访问和修改，避免不合理的访问，提高了安全性
- 良好的封装可以减少耦合，修改类的内部结构，不影响对外的API

### 访问修饰符
Java通过访问修饰符(Access modifiers)，控制类、变量、方法的访问，支持4种不同的修饰符
- __default__: 也称package-private，在同一package下可见。可以修饰：类、接口、变量、方法
- __private__: 仅在同一class内可见。可以修饰：变量、方法
- __protected__: 仅对同一package的class和所有sub-class可见。可以修饰：变量、方法
- __public__: 对所有class可见。可以修饰：类、接口、变量、方法

::: warning 注意
`default`指的是默认情况下，即不加任何访问修饰符时的访问控制状态

不能直接使用`default`作为访问修饰符，`default`关键词实际上用于接口方法定义
:::

| |  default  | private | protected | public |
| :--: | :--: | :--: | :--: | :--: |
| Same class |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| Same package, subclass |:heavy_check_mark:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| Same package, non-subclass |:heavy_check_mark:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| Different package, subclass |:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| Different package, non-subclass |:x:|:x:|:x:|:heavy_check_mark:|

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


## 参考
[1] [Java菜鸟教程](https://www.runoob.com/java/java-tutorial.html) 

[2] [Java的封装](https://www.cnblogs.com/zhangruifeng/p/9320561.html)



