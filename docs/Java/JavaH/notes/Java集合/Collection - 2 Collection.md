---
title: Collection
date: 2020-07-02 15:48:00
categories: 
tags:
---
<details>
<summary>定义</summary>



</details>

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
boolean remove​(Object o)    // 删除1个数据，需要equals()方法支持，可以删除null
boolean contains​(Object o)  // 需要equals()方法支持

boolean addAll​(Collection<? extends E> c)
boolean containsAll​(Collection<?> c)

boolean removeAll​(Collection<?> c)   // 删除 c 中出现过的元素
boolean retainAll​(Collection<?> c)   // 取交集，注意返回值是 boolean

void clear()  // 清空集合

int size()
boolean isEmpty()
Iterator<E> iterator()    // 获取迭代器
Object[] toArray()        // 转换为对象数组
```
