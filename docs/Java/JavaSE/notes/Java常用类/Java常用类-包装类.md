---
title: 包装类
date: 2019-11-15 11:12:14
categories: 
    - [Java, Java基础]
tags:
---
## 介绍
`Object`类型可以保存所有的引用数据类型，在`JDK1.5`之后，`Object`类型也可以「保存」基本数据类型，依据的就是包装类

::: tip 基本数据类型与引用数据类型差别
- 基本数据类型使用值传递
- 引用数据类型使用地址传递「引用传递」(本质实际上还是值传递，只不过传递的值是地址)
:::

包装类的出现，实际上就是为了实现基本数据类型与`Object`类之间的接收问题，统一操作

## Java内置包装类
对应于8种基本数据类型，Java内置了8个包装类，可以分成两类(与包装类的继承结构有关)
- 对象型包装类: `Character`, `Boolean`
- 数值型包装类: `Byte`, `Short`, `Integer`, `Long`, `Float`, `Double`

### 包装类的继承结构
**对象型**
- `Object -> Boolean`
- `Object -> Character`

**数值型**
- `Object -> Number(abstract) -> Byte`  
- `Object -> Number(abstract) -> Short`
- `Object -> Number(abstract) -> Integer`
- `Object -> Number(abstract) -> Long`
- `Object -> Number(abstract) -> Float`
- `Object -> Number(abstract) -> Double`

所有数值型包装类都属于`Number`子类，`Number`是一个抽象类，其内部提供了以下方法

```java{1}
public byte byteValue();             // 拆箱功能，从包装类中获取byte数据
public short shortValue();
public abstract int intValue();
public abstract long longValue();
public abstract float floatValue();
public abstract double doubleValue();
```

## 自动装箱与拆箱

包装类与基本数据类型的之间进行的类型转换，称为装箱与拆箱

- 装箱: 基本数据类型 -> 包装类，一般通过构造方法完成（Integer 等不一样）
- 拆箱: 包装类 -> 基本数据类型(将包装类中的内容取出)，一般通过`xyzValue()`

利用自动装箱与拆箱机制，避免了复杂的方法调用，同时包装类也可以直接进行计算
```java
Integer obj = 10; // 自动装箱
obj++;            // 包装类可以直接进行计算(自动拆箱装箱)
int num = obj;    // 自动拆箱
```

两个派别   
- Integer 派别：Integer、Short、Byte、Character、Long 这几个类的 valueOf 方法的实现是类似的，缓存
- Double 派别：Double、Float 的 valueOf 方法的实现是类似的，使用构造方法，每次都返回不同的对象

[参考链接](https://www.cnblogs.com/wang-yaz/p/8516151.html)

```java
// 自动装箱
Integer n = 10;  // 实际上调用 Integer n = Integer.valueOf(10)

// 自动拆箱
int num = n;     // 实际上调用 int num = n.intValue()

/** @Deprecated(since="9") JDK1.9后弃用
 * 弃用的原因是，在JDK1.5之后，Java为包装类提供了自动装箱与拆箱处理
 * 也就是使用 Integer.valueOf()
 */
public Integer(int value); 
```

### Integer包装类
:::warning 注意
使用`Integer`包装类的时候需要注意，如果直接赋值的数据范围在`[-128,127]`，Java不会创建新的`Integer`对象

原因在于JDK1.7之后，Java给`Integer`类设置了`[-128,127]`的静态缓存
:::

```java{2,5}
Integer obj = 10;   
Integer obj = Integer.valueOf(10);          // 向Integer直接赋值时，实际调用了valueOf()

public static Integer valueOf(int i) {     
    if(i >= -128 && i <= IntegerCache.high) // 关键
        return IntegerCache.cache[i + 128];
    else
        return new Integer(i);
}
```

### Double/Float包装类
`Double`与`Float`包装类没有类似`Integer`的缓存机制

:::warning 注意
使用包装类直接赋值的自动装箱操作时，也需要考虑数值对应的数据类型

如果要使用`Float`直接赋值的自动装箱，需要先将数据转化为`float`型
:::

```java{2}
Float obj = 1.2;   // Error, since default type is double 
Floar obj = 1.2F;  // Correct
```

### 包装类与Object类
包装类使得`Object`类真正可以实现接收**全部**数据类型的参数统一功能
```java
Object obj = 1.5;           // 自动装箱Double，Double向上转型
double num = (Double)obj;   // Object向下转型，Double自动拆箱
```

## 数据转换
包装类提供了一项非常重要的功能，即将**字符串类型**数据转为**基本数据类型**

转换过程中，如果字符串中的内容格式有错误，或者包含了非数字内容(针对数值型)，会产生`NumberFormatException`

```java{1,8,13}
// Integer
public static int parseInt(String s); 
String str1 = "2.5";
String str2 = "20";
int num1 = Integer.parseInt(str1);    // NumberFormatException
int num2 = Integer.parseInt(str2);    // num2 = 20

// Double
public static double parseDouble(String s);
String str = 100;
double num = Double.parseDouble(str); // num = 100.00

// Boolean
public static boolean parseBoolean(String s);
String str1 = "true";
String str2 = "xyz";
boolean flag1 = Boolean.parseBoolean(str1); // true
boolean flag2 = Boolean.parseBoolean(str2); // false, for wrong format, return false
```

::: warning 注意
`Character`包装类不存在类似`parseChar()`，因为`String`类中含有`charAt()`方法
:::

::: tip 基本数据类型->字符串
- 任何基本数据类型都可以通过`+`与`""`连接转为字符串(产生垃圾低效)
- 使用`String`提供的`valueOf()`类方法，接收任意类型(包括`char[]`)
:::

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)