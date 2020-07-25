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

## 字符串常量池
字符串常量池是由 JVM 通过 C，C++ 编写的 StringTable 来实现的

StringTable 本质就是一个哈希表，StringTable 自身存储在本地内存（native memory）中，value 存储的是**字符串对象的引用**（非字符串对象本身）

[通过实验](https://zhuanlan.zhihu.com/p/110307661)，JDK1.6 前，字符串对象本身存储在永久代中，JDK1.7 及以后，转移存储在 JVM 堆中

<div align=center>

<img src="/img/Java/StringTable.png" style="zoom:80%">

</div>

---
```java
class Demo {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "He" + "llo";
        String s3 = "He" + new String("llo");
        String s4 = new String("Hello");
        String s5 = s4.intern();
        String s6 = "He";
        String s7 = "llo";
        String s8 = s6 + s7;

        /*
        s1 == s2  // 编译器优化存在
        s1 != s3  // 拼接创建了新的字符串对象
        s1 != s4
        s1 == s5  // Hello已经在池中直接返回池中存储的引用
        s1 != s8  // 编译器不会优化，拼接创建了新的字符串
        */
    }
}
```

**字面量创建字符串**
- Hello 作为字面量，开始存储在 .class 文件常量池中
- 当 Demo 类加载时，会在 Heap 中创建一个 Hello 对象，同时在 StringTable 中存放一个它的引用
- 主线程运行，Stack 中创建 str 变量，JVM 去字符串池中寻找 equals("Hello") 的字符串是否存在
- 发现存在，则从字符串池中获取 Hello 的引用，并赋值给 str
- 如果发现不存在，则在 Heap 中新建 Hello 对象，将引用驻留（intern）在字符串池中，并赋值给 str

**使用 new 关键字创建字符串**  
- 前面类加载的过程都是类似的，只是在运行时，无论字符串池中是否有值相等的对象，都会在 Heap 中开辟一块内存，创建新对象

**字符串拼接**  
- String 类重载了 `+`，`+=`，可以用于字符串拼接
- `String s = "a" + "bc";`，字面量字符串拼接，编译器会直接优化 
- `Stirng s = s1 + s2;`，其底层实现是 `new StringBuilder().append(s1).append(s2).toString()`

**手动入池**  
- `String s1 = new String("Hello"); String s2 = s1.intern()` 可以将字符串手动入池
- 如果字符串池中本身存在 equals(s1) 的字符串，则返回池中的字符串对象引用
- 如果字符串池中不存在，考虑不同版本的情况
    + JDK1.6 以前：由于字符串池引用的字符串对象本身存在永久代，因此会在永久代创建 equals(s1) 的字符串，池中存放其引用，并将引用返回
    + JDK1.7 后：此时字符串池引用的字符串对象本身存储在 Heap，不再 Heap 中重复创建 equals(s1) 的字符串对象，而是将 s1 的引用直接存放进池中，并返回该引用

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