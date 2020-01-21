---
title: StringBuffer和StringBuilder
date: 2020-01-19 18:47:14
categories: 
tags:
---
## 介绍
由于String类的**不可变性**，拼接裁剪字符串的操作都会产生新的String对象，导致**内存空间的浪费**和操作**效率的降低**，为了解决这个问题，可以使用StringBuffer或StringBuilder类

### 特点
StringBuffer最大的特点即**可变字符序列**

其本质上是维护了一个字节数组(`byte[]`,从JDK1.9开始，1.9以前使用字符数组char[])，默认容量大小为16字节(1byte=8bit)，容量满时，创建新数组，复制旧数组内容，因此如果知道字符串大小，尽量提前指定，避免降低效率

StringBuilder是JDK1.5之后新增的，能力上与StringBuffer并无区别，但是去掉了线程安全的部分，有效减小了开销，效率更高，是拼接字符串的首选

```java
System.out.println(System.getProperty("file.encoding"));  // 系统默认编码方式：UTF-8
String str1 = "你好";     // 字节长度为：6，字符长度为：2
String str2 = "Hello";   // 字节长度为：5，字符长度为：5

public static void printLen(String str) {
    int byte_len = str.getBytes().length;
    int len = str.length();
    System.out.println("字节长度为：" + byte_len);
    System.out.println("字符长度为：" + len);
} 
```

## 比较
- String: 不可变字符序列
- StringBuffer: 可变字符序列，线程安全
- StringBuilder: 可变字符序列，线程不安全，效率更高

运行速度: StringBuilder > StringBuffer > String

![类关系](/img/Java/JavaH/StringBufferAndStringBuilder.png)

## 操作API
```java
sb.append(str);              // str -> sb
sb.toString();               // sb -> str

sb.length();
sb.capacity();
sb.setLength(newLength);

/**** import operation ****/
sb.append(data);             // overloaded to main types(int, double, char, char[])
sb.insert(idx, data);        // data will be inserted at idx, not idx + 1
sb.delete(start, end);       // delete [start..end-1]
sb.reverse();

/*** other ***/
sb.setCharAt​(idx, char ch);
sb.deleteCharAt(idx);

sb.substring(start);         // return String[start..end-1]
sb.substring(start,end);     // return String[start..end-1]
sb.indexOf(str);
```

## 参考
[1] [极客时间 | Java核心技术面试精讲](https://time.geekbang.org/column/article/7349)