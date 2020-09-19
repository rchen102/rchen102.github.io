---
title: --- 实现子类
date: 2020-07-04 11:04:00
categories: 
tags:
---
- HashSet：基于 **HashMap**，元素无序唯一，线程不安全
- LinkedHashSet：基于 **LinkedHashMap**，按元素插入顺序，线程不安全
- TreeSet：基于 **TreeMap**，元素按照指定顺序排序，线程不安全

<details>
<summary>定义</summary>

```java
// since JDK 1.2
public class HashSet<E>
extends AbstractSet<E>
implements Set<E>, Cloneable, Serializable

// since JDK 1.4
public class LinkedHashSet<E>
extends HashSet<E>
implements Set<E>, Cloneable, Serializable

// since JDK 1.2
public class TreeSet<E>
extends AbstractSet<E>
implements NavigableSet<E>, Cloneable, Serializable
```

</details>


## HashSet
1. 基于 HashMap 实现  
(1) 创建一个虚拟对象 Object PRESENT = new Object() 作为 value  
(2) 构造方法基本都是调用 HashMap 的构造方法  
(3) 含有一个特殊的 private 构造方法，创建一个 LinkedHashMap，主要给 LinkedHashSet 使用

2. 允许 `null` 元素存在，因为作为 key 存储，也需要实现 hashCode() 和 equals() 方法

3. 初始容量同 HashMap，也可提前设置容量，容量计算方法： (n/0.75f) + 1

4. HashMap 是 transient 的，自己实现了 writeObject 和 readObject，避免空间浪费（25% 是空的）

```java
HashSet()   // 初始容量 16，装载因子 0.75
HashSet​(int initialCapacity)   
HashSet​(int initialCapacity, float loadFactor) 
HashSet​(Collection<? extends E> c)
```

## LinkedHashSet
1. 继承自 HashSet，基于 LinkedHashMap 实现  
(1) 结构简单源码只包含 4 个构造方法和一个迭代器方法
(2) 基本调用父类 HashSet 的 private 构造方法 super(initialCapacity, loadFactor, true);

2. 不同于 LinkedHashMap，不支持按照访问顺序排序，只能按照插入顺序排序

3. 添加，删除等方法都是使用 HashSet的，唯一不同将内部 map 使用 LinkedHashSet 实现

```java
LinkedHashSet() // 初始容量 16，装载因子 0.75
LinkedHashSet​(int initialCapacity) 
LinkedHashSet​(int initialCapacity, float loadFactor)   
LinkedHashSet​(Collection<? extends E> c)
```

## TreeSet
1. 底层存储类型为 NavigableMap  
(1) 通常我们使用的 public 构造方法都是基于 TreeMap 实现，但是不代表只能 TreeMap 实现    
(2) 存在一个 default TreeSet(NavigableMap<E,Object> m)，用于同 package 使用

2. 元素排序规则有两种方法指定  
(1) 元素自身实现了 Comparable 接口，重写 int compareTo() 方法  
(2) 创建时，指定一个比较器 Comparator

```java
TreeSet()  
TreeSet​(Collection<? extends E> c) // 按照 natural ordering
TreeSet​(Comparator<? super E> comparator)  
TreeSet​(SortedSet<E> s)
```

---
**参考链接**

[1] [彤哥读源码 | HashSet](https://www.cnblogs.com/tong-yuan/p/HashSet.html)  
[2] [彤哥读源码 | LinkedHashSet](https://www.cnblogs.com/tong-yuan/p/LinkedHashSet.html)  
[3] [彤哥读源码 | TreeSet](https://www.cnblogs.com/tong-yuan/p/TreeSet.html)


