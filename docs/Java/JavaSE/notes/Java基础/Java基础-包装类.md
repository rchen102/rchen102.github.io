---
title: 包装类
date: 2019-11-15 11:12:14
categories: 
    - [Java, Java基础]
tags:
---
## 介绍
`Object`类型可以保存所有的引用数据类型，在JDK1.5之后，`Object`类型也可以「保存」基本数据类型，依据的就是包装类

::: tip 提示
**基本数据类型**与**引用数据类型**差别
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

- 装箱: 基本数据类型 -> 包装类，一般通过构造方法完成
- 拆箱: 包装类 -> 基本数据类型(将包装类中的内容取出)，一般通过`xyzValue()`

```java{1,3}
// 构造方法
public Integer(int value); // @Deprecated(since="9") JDK1.9后弃用
// 手动的装箱拆箱
Integer obj = Integer(10);
int num = obj.intValue();
```

`Integer(int)`构造方法弃用的原因是，在JDK1.5之后，Java为包装类提供了自动装箱与拆箱处理

利用自动装箱与拆箱机制，避免了复杂的方法调用，同时包装类也可以直接进行计算
```java
Integer obj = 10; // 自动装箱
obj++;            // 包装类可以直接进行计算(自动拆箱装箱)
int num = obj;    // 自动拆箱
```

### Integer包装类
:::warning 注意
使用**Integer**包装类的时候需要注意，如果直接赋值的数据范围在`[-128,127]`，Java不会创建新的**Integer**对象

原因在于JDK1.7之后，Java给**Integer**类设置了`[-128,127]`的静态缓存
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

如果要使用**Float**直接赋值的自动装箱，需要先将数据转化为**float**型
:::

```java{2}
Float obj = 1.2;   // Error 
Floar obj = 1.2F;  // Correct
```

### 包装类与Object类
`Object`类真正可以实现接收**全部**数据类型的参数统一功能
```java
Object obj = 1.5;           // 自动装箱Double，Double向上转型
double num = (Double)obj;   // Object向下转型，Double自动拆箱
```