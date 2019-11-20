---
title: 字符串
date: 2019-11-20 15:50:14
categories: 
    - [Java, Java基础]
tags:
---
## String类

### 实例化
字符串的实例化有两种方法，分别是:

- __直接赋值__: `String str = "Hello";`  
  字符串自动进入池  
  字符串常量属于String类的匿名对象，直接赋值是将匿名对象的引用赋给变量

- __构造方法__: `String str = new String("Hello");`  
  字符串不会自动入池，可以使用`intern()`手动入池  
  开辟两块堆内存空间，产生垃圾空间(`"Hello"`开辟一次成为垃圾，`new`开辟一次)

```java
String str = "Hello"; 
String str = new String("Hello");
String str = new String("Hello").intern(); 
```

### 字符串对象池
- 本质是一个`HashTable`，池中存储的是字符串对象的引用
- 创建字符串常量时，如果对象池中该字符串已经存在，将直接引用对象池中的字符串对象
- 避免内存空间频繁的开辟和释放影响系统性能

```java
String str1 = "Hello";  // "Hello"入池
String str2 = "Hello";  // 直接获得已存在的"Hello"的引用(地址相同)
String str3 = new String("Hello"); // 到目前为止，开辟了2块空间
str1 == str2; // True
str1 == str3; // False
```

### 不可变性
- String为不可变对象，即一旦对象被创建初始化后，内部的状态数据就会保持不变
- 对字符串的修改，实际上只是内存地址引用的修改(返回新创建的字符串的引用)

```java
String str = "Hello ";  // "Hello "开辟一次空间
str += "World"; // “World"开辟一次空间，"Hello World"开辟一次空间
str += "!";  // "!"开辟一次空间，"Hello World!"开辟一次空间
// 总共开辟了5次空间，产生很多垃圾
```

## StirngBuilder和StringBuffer

// to do

## String类API
### 类型转换
```java{1,8}
/**** char ****/
String str = String.valueOf(char ch);
String str = String.valueOf(char[] ch);

char ch = str.charAt(int idx);
char[] ch = str.toCharArray();

/**** int ****/
String str = String.valueOf(int num); // best
String str = "" + num; 

int num = Integer.parseInt(str);
```

### 常用操作
```java{3,7,21,27}
str.length();                     // length of string

/******** Truncate ********/
str.substring(i, j)               // return [i ..  j-1]   
str.substring(k)                  // return [k…end-1]

/******** Transform ********/
str.toUpperCase()                 // change to upper case
str.toLowerCase()                 // change to lower case

str.replaceAll(str1, str2)        // replace str1 with str2 (str1 can be regex)
str.replaceFirst(str1, str2)      // only replace first shows up
str.replace(oldCh, newCh)         // replace for character

str.trim()                        // remove leading and trailing space
str.split(regex)                  // return String[]
str.split(regex, int limit)       // limit: the result threshold
                                  // escape character 转义字符 
                                  // "." -> "\\." "|" -> "\\|"

/******** Compare ********/
str.equals(str)                   // check for content equal, do not use ==
str.equalsIgnoreCase(str)
str.compareTo(str2)               // 0: euqal; >0: str > str2; <0: str < str2
str.compareToIgnoreCase(str2)

/******** Search ********/
str.indexOf(str)                  // return idx where str first show up, else -1   
str.contains(str)                 // return indexOf(str) >= 0
str.startsWith(str)               // check whether the str starts with str
str.endsWith(str)                 // check whether the str ends with str
```

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)

[2] [Java中容易混淆的概念: Java8中的常量池、字符串池、包装类对象池](https://blog.csdn.net/Xu_JL1997/article/details/89150026)

[3] [聊一聊Java字符串的不可变性](https://www.cnblogs.com/one12138/p/11379840.html)