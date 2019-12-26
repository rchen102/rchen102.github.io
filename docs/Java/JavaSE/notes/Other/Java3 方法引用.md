---
title: 方法引用
date: 2019-12-25 15:07:00
categories: 
tags:
---
## 静态方法引用
格式: `类名称 :: 方法名`

```java
interface FunctionI<R, P> {
    public R convert(P param);
}

public static void main(String[] args) {
    FunctionI<String, Integer> func = String :: valueOf；
    String str = func.convert(100);
}
```

## 普通方法引用
格式: `实例化对象 :: 方法名`  
或: `类名称 :: 方法名`

```java
/* 1 通常实例化对象
 * public String toUpperCase()
 */
interface FunctionI<R> {
    public R upper();
}

public static void main(String[] args) {
    FunctionI<String> func = "string" :: toUpperCase；
    String str = func.upper(); // Output: STRING
}

/* 2 通常类名称
 * public int compareTo(String anotherString)
 */
interface FunctionI {
    public int compare(String str1, String str2);
}

public static void main(String[] args) {
    FunctionI func = String :: compareTo;
    func.compare("A","a");  // Output: -32
}
```

## 构造引用
格式: `类名称 :: new`

```java
class Test {
    private String str;
    Test(String str) {
        this.str = str;
    }
}

interface FunctionI<R> {
    public R create(String str);
}

public static void main(String[] args) {
    FunctionI<Test> func = Test :: new;
    func.create("Hello"); // return Test referrence
}
```

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)