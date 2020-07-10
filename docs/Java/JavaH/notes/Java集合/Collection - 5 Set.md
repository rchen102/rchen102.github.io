---
title: Set
date: 2020-07-04 10:44:00
categories: 
tags:
---
**Set 接口继承了 Collection 接口，具有如下特性**  
- 无序存储，即存储和取出顺序不保证相同
- 元素唯一性，可以存储 **null** 元素

Set 接口对 Collection 基本没有扩充，在 JDK 1.9 后追加了一些 `of()` 方法够建静态 Set

---
**Set 有以下常用实现子类**   
- HashSet：基于**哈希表**实现，元素无序唯一，线程不安全
- LinkedHashSet：基于**链表和哈希表**共同实现，保留元素的插入顺序，线程不安全
- TreeSet：基于**红黑树**实现，对元素按照指定顺序排序，线程不安全

---
**Set 类继承结构图**

<div align=center>

![Set](/img/Java/Set.png)

</div>

