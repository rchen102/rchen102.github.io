---
title: Java笔记2
date: 2019-09-06 19:09:08
categories: Java
tags:
---
## Java语法

### 数据类型
#### 基本数据类型
- byte: 8位，有符号，默认值`0`
- short: 16位，有符号，默认值`0`
- int: 32位，有符号，默认值`0`
- long: 64位，有符号，默认值`0L`
- float: 32位，单精度，默认值`0.0f`
- double: 64位，双精度，默认值`0.0d`
- boolean: 布尔型，默认值`false`
- char: 16位，Unicode字符，默认值`/u0000`

```java
public class Test {
    static boolean bool;
    static byte by;
    static char ch;
    static double d;
    static float f;
    static int i;
    static long l;
    static short sh;
    static String str;
 
    public static void main(String[] args) {
        System.out.println("Bool :" + bool);
        System.out.println("Byte :" + by);
        System.out.println("Character:" + ch);
        System.out.println("Double :" + d);
        System.out.println("Float :" + f);
        System.out.println("Integer :" + i);
        System.out.println("Long :" + l);
        System.out.println("Short :" + sh);
        System.out.println("String :" + str);
    }
}
Bool     :false
Byte     :0
Character:
Double   :0.0
Float    :0.0
Integer  :0
Long     :0
Short    :0
String   :null
```

#### 引用数据类型
引用类型指向一个对象，指向对象的变量是引用变量
数组

### 访问修饰符(Access modifiers)
- __default__: 也称package-private，在同一package下可见。可以修饰：类、接口、变量、方法
- __private__: 仅在同一class内可见。可以修饰：变量、方法
- __protected__: 仅对同一package的class和所有sub-class可见。可以修饰：变量、方法
- __public__: 对所有class可见。可以修饰：类、接口、变量、方法

![Modifier](Java笔记2/Modifier.png)


### 非访问修饰符(Non-access modifiers)
#### static
- __变量或方法__
JVM加载类时，为被static修饰的变量或方法仅创建一份拷贝，所有该类的实例共享该拷贝
因此也称类变量或类方法。局部变量不能被static修饰，静态方法不能访问类的非静态变量
- __代码块__
当JVM第一次加载类时，被static修饰的代码块会得到运行，因此常用static块完成类的静态初始化
静态代码块中不能访问非静态变量
```java
class Student {
    private static school;
    static {
        this.school = "BU";
    }
}
```

#### final
- __变量__
final修饰的变量必须显示指定初始值，且赋值后不能被更改，常与static使用创建类常量
```java
class Math {
    public static final pi = 3.14;
}

```
- __方法__
父类中final修饰的方法可以被子类继承，但是不能被重写(override)
使用final的主要目的就是防止方法的内容被修改
- __类__
final修饰的类不能被继承



