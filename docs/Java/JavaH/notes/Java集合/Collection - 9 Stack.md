---
title: Stack
date: 2020-07-14 15:25:00
categories: 
tags:
---
```java
// since JDK 1.0
public class Stack<E> extends Vector<E> {
    boolean empty()
    E   peek()
    E   pop()
    E   push​(E item)
    int search​(Object o)
}
```
---
**Stack 已经不被官方推荐使用**  
- Stack 继承 Vector，Vector 属于早期的集合产物，效率较低，现在已经不再推荐使用
- Stack 和 Vector 的关系设计的非常糟糕，不应是继承关系，而应该是组合关系
- Vector 属于动态数组，有能力在数组的任何位置添加/删除元素，Stack 继承了 Vector 因此也有这样的能力
- Stack 的 Iterator 甚至是按照数组的方式来遍历 Stack

::: tip 面向接口编程
- 对比 Stack 设计，Queue 接口的设计更加合理
- 无论 Queue 接口如何实现，对外暴露的方法始终不变
    + `Queue<Integer> q1 = new LinkedList<>()`;
    + `Queue<Integer> q2 = new ArrayQueue<>()`;
:::

---
**官方推荐实现**  
- 使用 Deque 双端队列接口 `Deque<Integer> srack = new ArrayDeque<>()`
- 仍然不完美：Deque 是双端队列接口，可以在两端同时插入删除，仍然不符合 Stack 严格定义


