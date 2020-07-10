---
title: Collection 接口
date: 2020-07-02 15:48:00
categories: 
tags:
---
## 介绍
<div align=center>

![List](/img/Java/Collection.png)

</div>


java.util.Collection 接口是单值集合操作的最大父接口（每次只对单个对象进行操作）

Collection 属于 Iterable 接口的子接口，Iterable 是 JDK 1.5 之后提供的一个可迭代的标记接口

```java
/** 定义 since JDK1.2
 * 实际上，JDK1.5 之前，泛型都是采用 Object 代替
 */
public interface Collection<E>
extends Iterable<E>

// 定义 since JDK1.5
// java.lang.Iterable
public interface Iterable<T> {
    default void forEach​(Consumer<? super T> action) // 和函数式编程有关
    Iterator<T> iterator();  // 核心方法，获取迭代器 
}
```

## 常见方法
```java
boolean add​(E e) 
boolean addAll​(Collection<? extends E> c)
void clear()  // 清空集合
boolean contains​(Object o) // 需要equals()方法支持
boolean remove​(Object o)   // 删除数据，需要equals()方法支持

int size()
Iterator<E> iterator()    // 获取迭代器
Object[] toArray()        // 转换为对象数组
```
