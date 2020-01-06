---
title: 枚举类
date: 2019-12-23 13:30:00
categories: 
    - [Java, Java基础]
tags:
---
## 介绍
`JDK1.5`之后新增`enum`关键字，用于定义枚举类型

```java
enum Color {
    RED, BLUE;  // 通常使用大写定义枚举量
}
```

## Enum类
使用`enum`关键字创建的枚举类型，在编译时会由编译器自动生成一个类，该类继承`java.lang.Enum`抽象类

```java
/*
 * 由编译器生成的Color枚举类
 * 部分代码
 */
final class Color extends Enum {
    // 私有构造方法，用于创建枚举类型和序号
    private Color(String s, int i) {
        super(s, i);
    }

    public static final Color RED;
    public static final Color BLUE;
}

```

## 常见方法
```java
Color color = Color.RED;

color.name();                   // <String> 返回枚举量的名称
color.ordinal();                // <int> 返回枚举量的序数
color.compareTo(Color.BLUE);    // <int> 实际上比较的是ordinal大小

Color.valueOf("RED");           // <Color> 根据名称获取枚举变量
Color.values();                 // <Color[]> 返回可枚举值的数组
```

## 进阶使用
由于枚举类型本质上是继承了`Enum`的一个类，因此可以当作常规类进行拓展
- 添加属性和方法
- 方法覆写
- 实现接口

```java
enum Color {
    RED("红"), 
    BLUE("蓝");

    // 其他结构必须放在枚举量声明之后
    private String desc;           // 增加一个描述

    private Color (String desc) {  // 添加构造方法，私有构造
        this.desc = desc;
    }
    public String getDesc() {      // 添加方法
        return desc;
    }
    @Override
    public String toString() {     // 方法覆写
        return desc;
    }
}
```

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)

[2] [深入理解Java枚举类型(enum)](https://www.cnblogs.com/alter888/p/9163612.html)