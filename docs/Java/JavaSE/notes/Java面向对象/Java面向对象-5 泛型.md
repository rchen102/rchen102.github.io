---
title: 泛型
date: 2019-11-23 14:30:19
categories: 
    - [Java, Java面向对象]
tags:
---
## 泛型
- 泛型是 JDK1.5 之后引入的新特性，主要目的是解决类对象的安全隐患问题，泛型提供了编译时类型安全检测机制
- 泛型**只在编译阶段有效**
- 泛型的本质是参数化类型，类中的属性类型或方法的参数类型可以在类的使用时，动态决定

---

没有泛型前，`Object` 类型可以充当泛型，但是并不意味着 `Object` 是万能的

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

Point p = new Point(10);    // 自动装箱 -> 接着向上转型
int n = (Integer)p.getX();  // 强制向下转型 -> 接着自动拆箱
```

利用 `Object` 类型，此时的设计虽然满足需求，但是存在**安全隐患**

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
- 泛型的本质是参数化类型，但是参数类型只能是**引用数据类型**，不能是**基本类型**
- 使用泛型时，如果没有指定泛型类型，默认使用 `Object` 类型进行处理

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

// 不指定泛型类型，默认使用 Object 类型
Point p = new Point(10);
```

## 泛型通配符
### 问题的出现
```java
/*
 * processPoint 是否可以处理 Point<Integer> 类型？
 * processPoint 如果希望处理更多的类型，如 Point<Double> ?
 */
public void processPoint(Point<Number> p) {
    System.out.println(p.getX());
}

// 错误：Point<java.lang.Integer> cannot be applied to Point<java.lang.Number>
Point<Integer> p = new Point<Integer>(10); 
processPoint(p); 
```

- 虽然 Number 是 Integer 的父类，但是 `Point<Integer>` 不能被看作为 `Point<Number>` 的子类
- 那么是否可以使用方法重载呢，有两个问题
    + 引用类型的个数几乎无穷，如果每一个都需要重载，非常低效
    + `Java` 不支持方案预想的重载，因为 `Point<Integer>` 和 `Point<Double>` 都将被视为 `Point` 类型，不满足重载要求

### 通配符`?`
类型通配可以使用 `?` 代替具体的类型参数

此处 `?` 是类型**实参**，而不是类型形参，即此处的 `?` 和 Number、Integer 一样都是一种实际的类型，可以把 `?` 看成所有类型的父类，是一种真实的类型

```java
public void processPoint(Point<?> p) {
    System.out.println(p.getX());
}
```

::: warning 注意
使用通配符时，意味着对泛型类型是未知的，因此在方法内部也不能随意类型相关的操作（可以执行 Object 相关操作）
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
泛型类，是在实例化类的时候指明泛型的具体类型；泛型方法，是在调用方法的时候指明泛型的具体类型 

- 泛型方法并**不一定**要定义在泛型类或者泛型接口中
- 任意方法都可以为泛型方法，但是需要对泛型标记加以声明

```java
/**
 * 1）public 与 返回值中间<T>非常重要，可以理解为声明此方法为泛型方法。
 * 2）只有声明了<T>的方法才是泛型方法，泛型类中的使用了泛型的成员方法并不是泛型方法。
 * 3）<T>表明该方法将使用泛型类型T，此时才可以在方法中使用泛型类型T。
 * 4）与泛型类的定义一样，此处T可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型。
 */

class GenerateTest<T>{
    /** 
     * 虽然在方法中使用了泛型，但是这并不是一个泛型方法
     * 这只是类中一个普通的成员方法，只不过他的返回值是在声明泛型类已经声明过的泛型
     */
    public void show1(T t){
        System.out.println(t.toString());
    }

    // 在泛型类中声明了一个泛型方法，使用泛型E，这种泛型E可以为任意类型
    // 可以类型与T相同，也可以不同
    // 由于泛型方法在声明的时候会声明泛型<E>，因此即使在泛型类中并未声明泛型，
    // 编译器也能够正确识别泛型方法中识别的泛型
    public <E> void show2(E t){
        System.out.println(t.toString());
    }

    // 在泛型类中声明了一个泛型方法，使用泛型T，
    // 注意这个T是一种全新的类型，可以与泛型类中声明的T不是同一种类型
    public <T> void show3(T t){
        System.out.println(t.toString());
    }
}
```

## 泛型接口
泛型不仅可以用于类，也可以用在接口上

```java
interface IMessage<T> {
    void send(T content);
}
```

子类实现泛型接口通常有两种方法

**1. 子类未传入泛型实参，也使用泛型类型**

```java
/**
 * 未传入泛型实参时，与泛型类的定义相同，在声明类的时候，需将泛型的声明也一起加到类中
 * 即： MessageImpl<T> implements IMessage<T>
 * 如果不声明泛型，如：class MessageImpl implements IMessage<T>，编译器会报错："Unknown class"
 */
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

**2. 子类直接确认泛型实参类型**
```java
/**
 * 在实现类实现泛型接口时，如已确认泛型实参，则所有使用泛型的地方都要替换成传入的实参类型
 */
class MessageImpl implements IMessage<String> {
    public void send(String content) {
        System.out.println(content);
    }
}

IMessage<String> msg = new MessageImpl(); 
```

## 静态方法与泛型
如果希望在类中的静态方法使用泛型，由于静态方法无法访问类上定义的泛型，因此如果静态方法操作的引用数据类型不确定的时候，必须要将泛型定义在方法上

即：如果静态方法要使用泛型的话，**必须将静态方法也定义成泛型方法**

```java
public class StaticMethod {
    public static <T> void test(T arg) {
        
    }
}
```

## 内部类和泛型

- 对于非静态内部类，会自动继承外围类的泛型参数
- 静态内部类不会自动继承外围类泛型参数

[详情参考](https://blog.csdn.net/chenkangqiang/article/details/56668118)

## 参考
[1] [java 泛型详解-绝对是对泛型方法讲解最详细的，没有之一](https://www.cnblogs.com/coprince/p/8603492.html)

[2] [Java菜鸟教程](https://www.runoob.com/java/java-generics.html) 

