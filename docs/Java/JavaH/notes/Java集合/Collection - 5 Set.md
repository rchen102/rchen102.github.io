---
title: Set
date: 2020-07-04 10:44:00
categories: 
tags:
---
## 介绍
<div align=center>

![Set](/img/Java/Set.png)

</div>

Set 接口与 List 接口一样，直接继承了 Collection 接口，区别在于，Set **不允许重复**元素且**不保证顺序**

JDK 1.9 前，Set 接口没有对 Collection 接口做任何扩充，即方法完全相同，JDK 1.9 后追加了一些 of() 方法

## 常用子类
- HashSet
    + 基于散列表存储，无序
- TreeSet
    + 实现 NavigableSet 接口，NavigableSet -> SortedSet -> Set
    + 有序存储
- LinkedHashSet
    + 基于 LinkedHashMap 存储

```java
public class HashSet<E>
extends AbstractSet<E>
implements Set<E>, Cloneable, Serializable

public class TreeSet<E>
extends AbstractSet<E>
implements NavigableSet<E>, Cloneable, Serializable

public class LinkedHashSet<E>
extends HashSet<E>
implements Set<E>, Cloneable, Serializable
```
