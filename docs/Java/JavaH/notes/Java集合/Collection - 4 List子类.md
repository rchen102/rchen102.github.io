---
title: --- 实现子类
date: 2020-07-02 17:00:00
categories: 
tags:
---
- ArrayList：基于**数组**，查询快，增删慢，线程不安全
- LinkedList：基于**双向链表**，查询慢，增删快，线程不安全
- Vector：基于**数组**，线程安全，但是效率低下

## ArrayList
1. 基于数组实现，当数组容量不足时，扩容为原来的 `1.5` 倍（创建新数组，复制），无缩容操作
2. 创建时可以指定容量，如未指定，则默认大小为 `10`
3. 支持随机访问，通过索引访问元素，时间复杂度 `O(1)`
4. 添加元素到尾部或删除尾部元素较快，平均复杂度 `O(1)`
5. 添加元素到中间或删除中间元素较慢，需要搬移元素，平均复杂度 `O(n)`
6. 求并集：`addAll()`；求交集：`retainAll()`；求差集：`removeAll()`
7. 使用 `transient` 修饰内部数组，但实现了 `readObject` 和 `writeObject`，避免浪费空间

```java
ArrayList() // 默认初始容量 10
ArrayList​(int initialCapacity) 
ArrayList​(Collection<? extends E> c)  // 都是浅拷贝
```

## Vector
1. JDK 1.0 推出的早期集合类，线程安全，所有方法都以 synchronized 修饰
2. JDK 1.2 集合框架推出后，令 Vector 实现了 List 接口，保证向后兼容
3. 扩容方式：  
(1) 取决于 capacityIncrement，代表了每次扩容增加的个数，如果不指定，该值默认为 0，扩容 2 倍  
(2) oldCapacity + ((capacityIncrement > 0) ? capacityIncrement : oldCapacity);

```java
public class Vector<E>
extends AbstractList<E>
implements List<E>, RandomAccess, Cloneable, Serializable

Vector()    // 默认初始大小 10
Vector​(int initialCapacity)    
Vector​(int initialCapacity, int capacityIncrement) 
Vector​(Collection<? extends E> c)
```


## LinkedList
1. 基于双向链表实现，存在一个静态内部类 Node 和两个 first，last 指针便于操作
2. LinkedList 也实现了 Deque 接口，即双端队列，可以当作队列，栈使用  
(1) LinkedList 相当于以链表方式，实现了 List 和 Deque 结构，功能上等于 ArrayList + ArrayDeque

3. 不支持随机访问，平均复杂度 `O(n)`（实际上双向链表优化 `node(index)` 至 `O(n/2)`）
4. `node(index)` 获得下标对应结点，索引小于 `size/2`，从前向后遍历，否则，从后向前遍历
5. 首尾添加，删除元素比较高效，时间复杂度 `O(1)`
6. 中间添加，删除元素比较低效，时间复杂度 `O(n/2)`

```java
public class LinkedList<E>
extends AbstractSequentialList<E>
implements List<E>, Deque<E>, Cloneable, Serializable

LinkedList()    
LinkedList​(Collection<? extends E> c)
```

---
**参考链接**

[1] [彤哥读源码 | ArrayList](https://www.cnblogs.com/tong-yuan/p/10638855.html)  
[2] [彤哥读源码 | LinkedList](https://www.cnblogs.com/tong-yuan/p/LinkedList.html)




