---
title: List 接口
date: 2020-07-02 16:17:00
categories: 
tags:
---
## 介绍
<div align=center>

![List](/img/Java/List.png)

</div>

```java
// since JDK 1.2
public interface List<E>
extends Collection<E>
```

List 接口对 Collection 接口，进行了扩充，有如下的新方法
```java
void add​(int index, E element)
E get​(int index)
int indexOf​(Object o)
E set​(int index, E element)
```

## ArrayList
```java
// since JDK1.2
public class ArrayList<E>
extends AbstractList<E>
implements List<E>, RandomAccess, Cloneable, Serializable

public abstract class AbstractList<E>
extends AbstractCollection<E>
implements List<E>

public abstract class AbstractCollection<E>
extends Object
implements Collection<E>
```

ArrayList 继承了 AbstractList，而两者都实现了 List 接口，目的在于对结构的继承关系做出明确的标记

由于子类的实例化对象都可以向上转型为父接口，因此主要关注 ArrayList 的构造方法和底层实现细节

```java
// 构造方法
ArrayList()
ArrayList​(int initialCapacity)
ArrayList​(Collection<? extends E> c)
```

## LinkedList
```java
// since JDK1.2
public class LinkedList<E>
extends AbstractSequentialList<E>
implements List<E>, Deque<E>, Cloneable, Serializable
```

LinkedList 除了实现了 List 接口，也实现了 Deque 接口，即双端队列

## Vector
```java
public class Vector<E>
extends AbstractList<E>
implements List<E>, RandomAccess, Cloneable, Serializable
```

Vector 是最早提供的集合处理类（JDK 1.0），后来 JDK 1.2 则出现了更规范化的集合框架，因此令 Vector 实现了 List 接口，保留的原因：向后兼容

Vector 也是基于数组实现，与 ArrayList 的区别在于，Vector 是线程安全的（方法都使用了 Synchronized 修饰）