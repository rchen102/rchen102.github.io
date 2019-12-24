---
title: 泛型
date: 2019-11-23 14:30:19
categories: 
    - [Java, Java面向对象]
tags:
---
## 泛型
- 泛型是`JDK1.5`之后引入的新特性，主要目的是解决类对象的安全隐患问题，泛型提供了编译时类型安全检测机制
- 泛型的本质是参数化类型，类中的属性类型或方法的参数类型可以在类的使用时，动态决定

## 泛型问题的引出
Java里，最方便的参数的统一是使用`Object`类型，但是并不意味着`Object`是万能的
```java
class Point {
    Object x;
    public Point(Object x) {
        this.x = x;
    }
    public Object getX() {
        return this.x;
    }
}

Point p = new Point(10);    // 自动装箱 -> 向上转型
int n = (Integer)p.getX();  // 强制向下转型 -> 自动拆箱
```

利用`Object`类型，此时的设计虽然满足需求，但是存在**安全隐患**
```java
/*
 * 此时代码在使用上存在错误
 * 但在编译时不存在语法错误
 * 实际运行中则会出现错误'ClassCastException'
 */
Point p = new Point(2.4);
int n = (Integer)p.getX(); 
```

## 泛型类
- 类型参数只能代表引用数据类型，不能是基本类型
- 使用泛型时，如果没有指定泛型类型，默认使用`Object`类型进行处理

```java
class Point<T> {
    T x;
    public Point(T x) {
        this.x = x;
    }
    public T getX() {
        return this.x;
    }
}

Point<Integer> p = new Point<Integer>(10);  
int n = p.getX();
```

## 泛型通配符
### 问题的出现
```java
public void processPoint(Point<Integer> p) {
    System.out.println(p.getX());
}

/*
 * 此时代码可以正常执行
 * 但是，若`processPoint`希望处理任意泛型类型？
 */
Point<Integer> p = new Point<Integer>(10); 
Point<Double> p2 = new Point<Double>(2.5); 
processPoint(p);     // 正常执行
processPoint(p2);    // 错误，类型不符
```

此时可以想到的一个解决方案是方法重载，但是有两个问题
- 引用类型的个数几乎无穷，如果每一个都需要重载，非常低效
- `Java`不支持方案预想的重载，因为`Point<Integer>`和`Point<Double>`都将被视为`Point`类型，不满足重载要求

### 通配符`?`
类型通配可以使用`?`代替具体的类型参数

```java
public void processPoint(Point<?> p) {
    System.out.println(p.getX());
}
```

::: warning 注意
使用通配符时，意味着对泛型类型是未知的，因此在方法内部也不能随意类型相关的操作
```java
public void processPoint(Point<?> p) {
    // error: incompatible types: CAP#1 cannot be converted to int
    int n = p.getX(); 
    p.x = 5;           
}
```
:::

### 通配符的应用
- 设置泛型的下限: `<? super 'class'>`
    + `<? super String>`: 表示可以设置的泛型类只能是`String`以及其父类
    + 不能用于泛型类定义
- 设置泛型的上限: `<? extends 'class'>`
    + `<? extends Number>`: 表示可以设置的泛型类型只能是`Number`以及其子类
    + 可以用于泛型类定义

## 泛型方法
- 泛型方法并**不一定**要定义在泛型类或者泛型接口中
- 任意方法都可以为泛型方法，但是需要对泛型标记加以声明

```java
class Point {
    public static <T> void print(T num) {
        System.out.println(num);
    }
}

Point.print(10);   // 参数类型由实际传入的参数决定
Point.print(2.5);
```

## 泛型接口
泛型不仅可以用于类，也可以用在接口上

```java
interface IMessage<T> {
    void send(T content);
}
```

子类实现泛型接口通常有两种方法

**1. 子类中也指定泛型类型**
```java
class MessageImpl<T> implements IMessage<T> {
    public void send(T content) {
        System.out.println(content);
    }
}
IMessage<T> msg = new MessageImpl<T>();
/*
 * JDK1.8引入了自动推导泛型的概念
 * 如果前面已经定义泛型类型，后面不需要重复定义
 */
IMessage<T> msg = new MessageImpl<>(); 
```

**2. 子类不再设置泛型类型，直接指派类型**
```java
class MessageImpl implements IMessage<String> {
    public void send(String content) {
        System.out.println(content);
    }
}
IMessage<String> msg = new MessageImpl(); 
```

## 参考
[1] [Java菜鸟教程](https://www.runoob.com/java/java-generics.html) 

[2] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)

