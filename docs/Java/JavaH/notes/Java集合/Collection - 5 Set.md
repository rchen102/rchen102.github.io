---
title: Set
date: 2020-07-04 10:44:00
categories: 
tags:
---
**Set 类继承结构图**

<div align=center>

![Set](/img/Java/Set.png)

</div>

---
Set 接口对 Collection 基本没有扩充，在 JDK 1.9 后追加了一些 `of()` 方法够建静态 Set

```java
public static void main(String[] args) throws IOException {
    Set<Integer> set = Set.of(1,2,3);
    /**
     * of 创建的集合不可修改，修改会报错
     * java.lang.UnsupportedOperationException
     */
    // set.add(4); 
    Set<Integer> set2 = new HashSet<>(set);
    set2.add(4);
    System.out.println(set2);
}
```

--- 
SortedSet 拓展 Set 方法

```java
E   first()  // 返回 first (lowest) 元素
E   last()   // 返回 last (highest) 元素
SortedSet<E>    headSet​(E toElement)   // 返回 [...,to) 部分，<
SortedSet<E>    tailSet​(E fromElement) // 返回 [from, ..] 部分，>=
SortedSet<E>    subSet​(E fromElement, E toElement) // [from, to)
```

---
NavigableSet 拓展 SortedSet 的方法

```java
E   lower​(E e)   // 小于给定elemernt的最大elemernt
E   floor​(E e)   // 小于等于给定elemernt的最大elemernt

E   higher​(E e)  // 大于给定elemernt的最小elemernt
E   ceiling​(E e) // 大于等于给定elemernt的最小elemernt

E   pollFirst()  // 弹出最小的element，O(logn)
E   pollLast()   // 弹出最大的element，O(logn)

Iterator<E> iterator()
Iterator<E> descendingIterator()
NavigableSet<E> descendingSet()
```



