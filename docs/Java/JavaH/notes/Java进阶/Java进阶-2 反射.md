---
title: 反射
date: 2020-09-24 00:02:00
categories: 
tags:
---
## 简单介绍（待完善）
反射机制：使得程序在运行中可以动态的获取任意类和对象的信息，并且调用对象的方法，访问对象的字段

```java
public class Robot {
    private String myName = "X";

    public Robot() {
    }

    public Robot(String name) {
        myName = name;
    }
    
    public int doSum(int a, int b) {
        return a+b;
    }

    private void sayHelloTo(String name) {
        System.out.println(myName + ": Hello, " + name);
    }
}
```

## Class 类
```java
// 获取类对象的 2 种方法
Class<?> clazz = new Robot().getClass();
Class<?> clazz2 = Class.forName("driver.reflect.Robot");

// 创建实例，只能调用无参构造
// 因此，类必须具有无参构造方法
Robot r1 = (Robot) clazz.newInstance();

// 如果希望使用参数，则需要通过 Constructor.newInstance(Object[])
Constructor defualt = clazz.getConstructor(String.class);
r1 = (Robot) defualt.newInstance("R");
```

## Method 类
```java
// 1. 获取方法列表 
// 该类声明的方法 包括 private，不包括继承的
Method[]  declaredMethods = clazz.getDeclaredMethods();

// 该类的 public 方法，包括继承的
Method[] methods = clazz.getMethods();

// 2. Method 相关属性
sayHelloTo.getName();               // 方法的名称 sayHelloTo
sayHelloTo.getDeclaringClass();     // 方法所在的类对象 Class<?>
sayHelloTo.getParameterTypes();     // 方法的参数列表  Class<?>[]
sayHelloTo.getReturnType();         // 方法的返回值类型  Class<?>

/**
 * 3. 获取指定方法，参数为方法类型
 * 特别注意 基本类型不是 Integer.class，而是 int.class
 */
Method sayHelloTo = clazz.getDeclaredMethod("sayHelloTo", String.class);
Method doSum = clazz.getDeclaredMethod("doSum", int.class, int.class);

/**
 * 4. 执行方法
 * 如果是 private 方法，需要设置执行权限
 */
sayHelloTo.setAccessible(true);
sayHelloTo.invoke(r1, "rchen");
System.out.println(doSum.invoke(r1, 1, 2));;

```

## Field
```java
// 1. 获取 字段列表，与 Method 差不多
Field[] declaredFields = clazz.getDeclaredFields();
Field[] fields = clazz.getFields();

// 2. 获取Field 相关属性
Field myName = clazz.getDeclaredField("myName");
myName.getName();             // 属性的名称 myName
myName.getDeclaringClass();   // 属性所在的类对象 Class<?> 
myName.getType();             // 属性的类型 Class<?>

/**
 * 3. 访问或者设置属性的值
 * 如果是 private 方法，需要设置执行权限
 */
myName.setAccessible(true);
String name = (String) myName.get(r1);   // 返回类型是 Object 需要做转换
myName.set(r1, "R");
```