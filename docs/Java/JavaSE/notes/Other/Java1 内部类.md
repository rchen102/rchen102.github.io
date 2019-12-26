---
title: 内部类
date: 2019-12-23 14:48:00
categories: 
tags:
---
## 介绍
面向对象的基础(接口，抽象类，普通类)都是允许嵌套使用的，所以有了内部类的概念  
内部类是一种类定义的嵌套结构，可以实现任意结构的嵌套组成

- 内部类与外部类私有属性可以互相访问(避免了引用传递处理)
- 可以用于创建专属类，内部类专属于外部类，只为外部类服务
- 内部类也可以在外部类以外的地方实例化对象`外部类.内部类 ref = new 外部类().new 内部类()`
- 从安全性上讲，如果不希望内部类被其他类访问，可以使用`private`封装内部类

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

Out.In in = new Out().new In();
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

## static内部类
- 使用`static`修饰的内部类只能访问外部类中`static`属性
- 在其他类中使用时，此时内部类相当于一个「外部类」，`外部类.内部类 ref = new 外部类.内部类()`

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

`JDK1.8`之前，需要在参数前追加`final`修饰符才可直接访问，修改目的是为lambda表达式提供便利

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