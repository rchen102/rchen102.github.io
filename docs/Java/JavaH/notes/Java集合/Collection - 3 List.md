---
title: List
date: 2020-07-02 16:17:00
categories: 
tags:
---
## 介绍
<div align=center>

![List](/img/Java/List.png)

</div>

List 接口继承了 Collection 接口，并进行了扩充，有如下的新方法

```java
void add​(int index, E element)
E get​(int index)
int indexOf​(Object o)
E set​(int index, E element)

ListIterator<E> listIterator()  // Collection 中只能获取 iterator
```

## 常用子类
- ArrayList
    + ArrayList 继承了 AbstractList，两者都实现了 List 接口，目的是对结构的继承关系做出明确标记
- LinkedList
    + LinkedList 除了实现了 List 接口，也实现了 Deque 接口，即双端队列
- Vector
    + Vector 是最早提供的集合处理类（JDK 1.0），后来 JDK 1.2 则出现了更规范化的集合框架，因此令 Vector 实现了 List 接口，保留的原因：向后兼容
    + Vector 也是基于数组实现，与 ArrayList 的区别在于，Vector 是线程安全的（所有操作方法都使用了 **Synchronized** 修饰）

```java
// since JDK 1.2
public class ArrayList<E>
extends AbstractList<E>
implements List<E>, RandomAccess, Cloneable, Serializable

// since JDK 1.2
public class LinkedList<E>
extends AbstractSequentialList<E>
implements List<E>, Deque<E>, Cloneable, Serializable

// since JDK 1.0
public class Vector<E>
extends AbstractList<E>
implements List<E>, RandomAccess, Cloneable, Serializable
```

