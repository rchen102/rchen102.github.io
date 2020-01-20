---
title: String
date: 2019-11-20 15:50:14
categories: 
tags:
---
## 不可变性
- String为不可变对象，即一旦对象被创建初始化后，内部的状态数据就会保持不变
- 对字符串的修改，实际上只是内存地址引用的修改(返回新创建的字符串的引用)

```java
String str = "Hello ";  // "Hello "开辟一次空间
str += "World"; // “World"开辟一次空间，"Hello World"开辟一次空间
str += "!";  // "!"开辟一次空间，"Hello World!"开辟一次空间
// 总共开辟了5次空间，产生很多垃圾
```

## 字符串池
[理解Java字符串常量池与intern()方法](https://www.cnblogs.com/justcooooode/p/7603381.html)

## 方法API
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
[1] [Java中容易混淆的概念: Java8中的常量池、字符串池、包装类对象池](https://blog.csdn.net/Xu_JL1997/article/details/89150026)

[2] [聊一聊Java字符串的不可变性](https://www.cnblogs.com/one12138/p/11379840.html)