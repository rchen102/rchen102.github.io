---
title: List - 实现子类
date: 2020-07-02 17:00:00
categories: 
tags:
---
- ArrayList：基于**数组**，查询快，增删慢，线程不安全
- LinkedList：基于**双向链表**，查询慢，增删快，线程不安全
- Vector：基于**数组**，线程安全，但是效率低下

## ArrayList
1. 基于数组实现，当数组容量不足时，扩容为原来的 `1.5` 倍，无缩容操作
2. 创建时可以指定容量，如未指定，则默认大小为 `10`
3. 支持随机访问，通过索引访问元素，时间复杂度 `O(1)`
4. 添加元素到尾部或删除尾部元素较快，平均复杂度 `O(1)`
5. 添加元素到中间或删除中间元素较慢，需要搬移元素，平均复杂度 `O(n)`
6. 求并集：`addAll()`；求交集：`retainAll()`；求差集：`removeAll()`
7. 使用 `transient` 修饰内部数组，但实现了 `readObject` 和 `writeObject`，避免浪费空间

<details>
<summary>定义</summary>

```java
// since JDK 1.2
public class ArrayList<E>
extends AbstractList<E>
implements List<E>, RandomAccess, Cloneable, Serializable
```

</details>

## Vector
1. JDK 1.0 推出的早期集合类，线程安全，所有方法都以 synchronized 修饰
2. JDK 1.2 集合框架推出后，令 Vector 实现了 List 接口，保证向后兼容

<details>
<summary>定义</summary>

```java
// since JDK 1.0
public class Vector<E>
extends AbstractList<E>
implements List<E>, RandomAccess, Cloneable, Serializable
```

</details>

## LinkedList
1. 基于双向链表实现，存在一个静态内部类 Node 和 first，last 指针便于操作
2. LinkedList 也实现了 Deque 接口，即双端队列，可以当作队列，栈使用
3. 不支持随机访问，平均复杂度 `O(n)`（实际上双向链表优化 `node(index)` 至 `O(n/2)`）
4. `node(index)` 获得下标对应结点，索引小于 `size/2`，从前向后遍历，否则，从后向前遍历
5. 首尾添加，删除元素比较高效，时间复杂度 `O(1)`
6. 中间添加，删除元素比较低效，时间复杂度 `O(n/2)`

<details>
<summary>定义</summary>

```java
// since JDK 1.2
public class LinkedList<E>
extends AbstractSequentialList<E>
implements List<E>, Deque<E>, Cloneable, Serializable
```

</details>

---
**参考链接**

[1] [彤哥读源码 | ArrayList](https://www.cnblogs.com/tong-yuan/p/10638855.html)  
[2] [彤哥读源码 | LinkedList](https://www.cnblogs.com/tong-yuan/p/LinkedList.html)




