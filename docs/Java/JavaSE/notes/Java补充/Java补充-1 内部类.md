---
title: 内部类
date: 2019-12-23 14:48:00
categories: 
tags:
---
面向对象的基础（接口，抽象类，普通类）都是允许嵌套使用的，所以有了内部类的概念  
内部类是一种类定义的嵌套结构，可以实现任意结构的嵌套组成

## 成员内部类
可以类比成员变量（非静态变量），成员内部类是外部类的一个实例，与外部类的的成员变量是一样的，每个实例化出来的对象，它的成员变量赋值都是独立的不会相互影响

因此，成员内部类中，不允许出现 static 修饰的字段或者方法，否则容易造成混乱

- 内部类与外部类 **private** 属性可以互相访问
- 从安全性上讲，如果不希望内部类被其他类访问，可以使用 **private** 封装内部类
- 内部类的创建依赖外部类的实例对象，在没有外部类实例之前是无法创建内部类
    - `外部类.内部类 ref = new 外部类().new 内部类()`

```java{6,12,16}
class Out {
    private String info = "Hello";
    class In {
        private String name = "World";
        public void print() {
            System.out.println(info);   // 访问外部类的私有属性
        }
    }
    public void foo() {
        In in = new In();
        in.print();
        System.out.println(in.name);    // 访问内部类的私有属性
    }
}

Out.In in = new Out().new In();         // 如果内部类使用了private，则无法如此使用
```

 
## 静态内部类
可以类比外部类的静态变量，静态内部类的创建**不需要依赖外部类的实例**，可以直接创建：`外部类.内部类 ref = new 外部类.内部类()`

因此静态内部类只能访问外部类的 static 字段和方法，但是静态内部类可以存在自己的成员变量和方法（非 static 字段和方法）

```java
class Out {
    private static final String info = "Hello";
    static class In {
        public void print() {
            System.out.println(info);
        }
    }
}

Out.In in = new Out.In();
```

:::tip 提示
`static`更常用于修饰内部接口，将内部接口=>「外部」接口；更便于将接口进行归类管理
:::


```java
interface MessageI {
    public void send(String msg);
    static interface ConnectI {
        public boolean build();
    }
}

class MyConnect implements MessageI.ConnectI {
    public boolean build() {
        return true;
    }
}
```

## 内部接口
除了在类上可以实现内部嵌套的结构，接口也可以

- 内部接口不强制实现，如果需要实现则通过内部类实现
- 接口内部也可以嵌套普通类或者抽象类

```java
interface MessageI {
    public void send(String msg);
    interface ConnectI {
        public boolean build();
    }
}

class MyMessage implements MessageI {
    public void send(String msg) {
        System.out.println(msg);
    }
    class MyConnect implements ConnectI {
        public boolean build() {
            return true;
        }
    }
}

```

## 方法中定义内部类
理论上内部类可以定义于任何位置，包括了代码块和方法中

方法中定义的内部类可以直接访问方法参数

```java
class MyMessage {
    public void send(String msg) { // final String msg
        class Connect {
            public void connect() {
                System.out.println(msg);
            }
        }
        Connect con = new Connect();
        con.connect();
    }
}
```

JDK1.8 之前，需要在参数前追加 `final` 修饰符才可直接访问，修改目的是为 lambda 表达式提供便利

## 匿名内部类(重点)
- 针对继承这一概念形成的一种简化定义
- 如果子类只在某个地方使用一次，则没有必要单独创建一个文件
- 仅避免了`*.java`文件出现，仍然会产生`*.class`文件

```java
interface MessageI {
    public void send(String msg);
}

public static void main(String[] args) {
    MessageI msg = new MessageI() {
        public void send(String msg) {
            System.out.println(msg);
        }
    }
    msg.send("Hello");
}
```

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)