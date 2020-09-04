---
title: --- 实现子类
date: 2020-07-09 10:23:00
categories: 
tags:
---
- HashMap：基于**数组**，**单链表**，**红黑树**，无序，线程不安全
- Hashtable：基于**数组**，**单链表**，无序，线程安全
- LinkedHashMap：基于 **HashMap**，**双向链表**，按插入顺序或访问顺序，线程不安全
- TreeMap：基于**红黑树**，按照 key 从小到大排序，线程不安全
- ConcurrentHashMap


<details>
<summary>定义</summary>

```java
// since JDK 1.2
public class HashMap<K,​V>
extends AbstractMap<K,​V>
implements Map<K,​V>, Cloneable, Serializable

// since JDK 1.0
public class Hashtable<K,​V>
extends Dictionary<K,​V>
implements Map<K,​V>, Cloneable, Serializable

// since JDK 1.4
public class LinkedHashMap<K,​V>
extends HashMap<K,​V>
implements Map<K,​V>
```

</details>

## HashMap
1. 基于数组，单链表，红黑树实现，数组的一个位置称为桶  
(1) 基本结点 Node<K,V> 实现了 Map.Entry<K,V> 接口  
(2) 结点存储了 hash，key，value，next

2. 默认初始容量 `16`，装载因子 `0.75`，容量总是保持 `2^n`（方便按位与操作取模）  
(1) 如传入容量参数 k，默认向上拓展至 k 最近的 `2^n` 作为容量  
(2) 懒加载：HashMap 被首次使用时，才进行初始化开辟空间

3. key 比较：先通过 hashCode() 找到对应的桶，如相同再比较 equals()  
(1) 因此自定义类要注意同时重写两个方法  
(2) key 和 value 都可以为 `null`

4. 查找，修改等操作的平均时间复杂度为 `O(1)`  
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

8. 反树化操作 untreeify()：发生在删除 remove() 和扩容 resize() 中  
(1) 当 resize() 拆分红黑树时，拆分后，若发现单个桶中元素数量 `<= 6`，进行反树化  
(2) 当 remove() 是从红黑树中删除结点时，如果发现根或左右结点其一为空，说明结点过少 `<= 2`，转为链表

```java
HashMap()   // 默认初始容量 16，装载因子 0.75
HashMap​(int initialCapacity)   
HashMap​(int initialCapacity, float loadFactor) 
HashMap​(Map<? extends K,​? extends V> m)
```

## Hashtable
Hashtable 是 JDK 1.0 时期的产物，对比 HashMap

1. 继承结构不同，Hashtable 继承 Dictionary，HashMap 继承 AbstractMap
2. Hashtable 不支持 `null` 作为 key 和 value
3. Hashtable 默认大小是 `11`，扩大逻辑是 `*2+1`，对于给定大小不会做扩展
4. Hashtable 索引计算采用除法取余数，更低效
5. Hashtable 使用链表法作为哈希冲突的解决，没有红黑树优化
6. Hashtable 是线程安全的

```java
Hashtable()  // 11, 0.75
Hashtable​(int initialCapacity) 
Hashtable​(int initialCapacity, float loadFactor)   
Hashtable​(Map<? extends K,​? extends V> t)
```

## LinkedHashMap
1. 继承自 HashMap，基于 HashMap 和 双向链表实现  
(1) 基本结点 Entry<K,V> 继承了 HashMap.Node<K,V>，扩展了新字段 before，after  
(2) 这也是 LinkedHashMap 设计巧妙的地方，没有额外创建新结点构建链表  
(3) 无论结点对象在 HashMap 内部是处于链表还是红黑树结构，都不影响双向链表的结构

2. 默认支持按元素插入顺序访问，也能以设置为按访问顺序访问（accessOrder 设为 true）  
(1) 新插入的元素或最近被访问的元素，都将插入双向链表末尾

3. 查找，修改等操作的平均时间复杂度为 `O(1)`  
(1) 因为还需要维护双向链表，因此效率比 HashMap 要低

4. 设计巧妙，很多方法都是在 HashMap 中留的钩子（Hook），实现这些 Hook 就可以实现对应功能了  
(1) afterNodeInsertion：put 结尾处触发，用于移除最老的元素（如果需要）  
(2) afterNodeAccess：元素被访问时调用，用于移动元素至双向链表末尾（如果需要）  
(3) afterNodeRemoval：remove 调用时触发，从双向链表中删除对应结点  
(4) newNode：插入新元素时触发，用于创建结点，创建 Entry<K,V> 替换原先的 Node<K,V>

5. 默认不会插入元素时，不会移除旧元素，如果有需要，重写方法 boolean removeEldestEntry()
(1) afterNodeInsertion 中会根据该方法判断，是否需要移除旧元素，默认返回 false
(2) 可以利用继承 LinkedHashMap，重写该方法实现 LRU

```java
LinkedHashMap() // 16, 0.75
LinkedHashMap​(int initialCapacity) 
LinkedHashMap​(int initialCapacity, float loadFactor)   
LinkedHashMap​(int initialCapacity, float loadFactor, boolean accessOrder) 
LinkedHashMap​(Map<? extends K,​? extends V> m)
```


## TreeMap
1. 实现接口比较特殊 NavigableMap -> SortedMap -> Map，拓展了许多 Map 没有的方法

2. 底层结构只基于一颗红黑树，按 key 从小到大进行排序  
(1) 一种方式是 key 实现 `Comparable<T>` 接口  
(2) 另一种方式是，通过构造方法传入比较器 `Comparator<? super K>`  
(3) key 不能为 `null`

3. 查找，修改等操作平均复杂度都为 `O(logn)`，因为只用到了红黑树

4. TreeMap 内部遍历的实现没有采用递归，实现比较有意思  
(1) `for (Entry<K, V> e = getFirstEntry(); e != null; e = successor(e))`


```java
TreeMap()   
TreeMap​(Comparator<? super K> comparator)  
TreeMap​(Map<? extends K,​? extends V> m)   
TreeMap​(SortedMap<K,​? extends V> m)
```

---
**参考链接**

[1] [彤哥读源码 | HashMap](https://www.cnblogs.com/tong-yuan/p/10638912.html)  
[2] [彤哥读源码 | LinkedHashMap](https://www.cnblogs.com/tong-yuan/p/10639263.html)  
[3] [彤哥读源码 | TreeMap](https://www.cnblogs.com/tong-yuan/p/10651637.html)