---
title: 基本语句
date: 2020-06-17 16:15:00
categories: 
tags:
---
## foreach
JDK 1.5 推出的新特性，也即增强 for 循环

底层原理：底层实现是使用了 `Iterator<T>` 迭代器，自定义类如果想要使用 foreach 进行输出，则需要实现 `Iterable<T>` 接口，[例子](https://blog.csdn.net/china_demon/article/details/53861813)


## switch
基本语法如下

```java
switch (expression){
    case value :
       //语句
       break; //可选
    case value :
       //语句
       break; //可选
    //你可以有任意数量的case语句
    default : //可选
       //语句
}
```

::: tip 注意
- expression 可以是 byte, short, int, char，从 JDK7 开始支持 String 类型了
- case 语句中如果不添加 break，则后续所有 case 语句（包括 default）无需匹配，可以直接执行（直到出现 break）
- default 分支在没有任何 case 匹配时执行，不需要 break 语句
:::

