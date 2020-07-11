---
title: Map - 实现
date: 2020-07-09 10:23:00
categories: 
tags:
---
- HashMap：基于**数组**，**单链表**，**红黑树**，无序，线程不安全
- LinkedHashMap：基于
- TreeMap
- ConcurrentHashMap
- Hashtable：基于数组，链表实现，无序，线程安全

AbstractMap AbstractList 有什么用？

## HashMap
1. 基于数组，链表，红黑树实现，数组的元素称为桶

2. 默认初始容量 `16`，装载因子 `0.75`，容量总是保持 `2^n`（方便按位与操作取模）  
(1) 如传入容量参数 k，默认向上拓展至 k 最近的 `2^n` 作为容量  
(2) 懒加载：HashMap 被首次使用时，才进行初始化开辟空间

3. key 比较：先通过 hashCode() 找到对应的桶，如相同再比较 equals()  
(1) 因此自定义类要注意同时重写两个方法  
(2) `null` 可以作为 key 和 value 使用

4. 查找，修改的平均时间复杂度为 `O(1)`  
(1) 数组查询效率 `O(1)`，链表查询效率 `O(k)`，红黑树查询效率 `O(logk)`，k 为桶中元素个数

5. 插入操作 put()：通过 hash(key) 方法得到 hash 值，再由 hash 值计算索引  
(1) 哈希值：由 key 的 hashCode 计算，高 16 位不变，低 16 位与高 16 位做一次异或运算，这样通过按位与取模时，高 16 位也能参与散列  
(2) 索引：采用高效的按位与操作，index = (n - 1) & hash()，n 是容量

6. 扩容操作 resize()：每次扩容为原来 `2 倍`  
(1) 由取模算法可知，扩容后元素的桶位置只有两种可能：原位置 or 原位置 + oldCap  
(2) 此时会对桶中的链表或红黑树进行拆分，分成以上两类

7. 树化操作 treeifyBin()：发生在插入新元素时，当单个桶中元素数量 `>= 8` 时发生  
(1) 若此时，桶的数量 `< 64` ，扩容代替树化操作  
(2) 若此时，桶的数量 `>= 64`，树化操作进行  
(3) 链表过长时，查找效率低下，可以利用红黑树快速增删改查的特点提高性能  
(4) 但是当红黑树中结点太少时，红黑树要维持平衡，比起链表，性能优势并不明显  
(5) 因此当桶数量 `< 64`，即容量较小时，哈希碰撞的几率会比较大，此时应优先扩容

8. 反树化操作 untreeify()：当 resize() 拆分红黑树时，拆分后，若发现单个桶中元素数量 `<= 6`，进行反树化  

<details>
<summary>定义</summary>

```java
// since JDK 1.2
public class HashMap<K,​V>
extends AbstractMap<K,​V>
implements Map<K,​V>, Cloneable, Serializable
```

</details>

## Hashtable
Hashtable 是 JDK 1.0 时期的产物，对比 HashMap

1. 继承结构不同，Hashtable 继承 Dictionary，HashMap 继承 AbstractMap
2. Hashtable 不支持 `null` 作为 key 和 value
3. Hashtable 默认大小是 `11`，扩大逻辑是 `*2+1`，对于给定大小不会做扩展
4. Hashtable 索引计算采用除法取余数，更低效
5. Hashtable 使用链表法作为哈希冲突的解决，没有红黑树优化
6. Hashtable 是线程安全的


<details>
<summary>定义</summary>

```java
// since JDK 1.0
public class Hashtable<K,​V>
extends Dictionary<K,​V>
implements Map<K,​V>, Cloneable, Serializable
```

</details>

## LinkedHashMap
有序 -> 按照插入顺序

## TreeMap
排序 -> 按照 key 排序

1. key 要实现 Comparable 接口

key 不能为 null 

---
**参考链接**

[1] [彤哥读源码 | HashMap](https://www.cnblogs.com/tong-yuan/p/10638912.html)  