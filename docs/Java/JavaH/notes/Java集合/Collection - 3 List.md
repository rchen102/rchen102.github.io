---
title: List
date: 2020-07-02 16:17:00
categories: 
tags:
---
**List 接口继承了 Collection 接口，具有如下特性**    
- 按照插入顺序排序
- 元素可以重复，且可以存储多个 **null** 元素
- 可以根据索引获取元素，即随机访问

<details>
<summary>List 扩充新方法</summary>

```java
void add​(int index, E element)
boolean addAll​(int index, Collection<? extends E> c)

E set​(int index, E element)
E get​(int index)
E remove​(int index) // 注意List<Integer>，int类型代表下标，Integer类型代表元素

int indexOf​(Object o)       // 获取第一次出现的下标，-1 不存在
int lastIndexOf​(Object o)   // 获取最后一次出现的下标，-1 不存在

void sort​(Comparator<? super E> c) // 排序
List<E> subList​(int fromIndex, int toIndex) // [from, to)

ListIterator<E> listIterator()  // 双向迭代器
```

</details>


---
**List 有以下常用实现子类**  
- ArrayList：基于**数组**实现，查询快，增删慢，线程不安全
- LinkedList：基于**链表**实现，查询慢，增删快，线程不安全
- Vector：基于**数组**实现，线程安全，但是效率低下

---
**List 类继承结构图**  

<div align=center>

![List](/img/Java/List.png)

</div>

- ArrayList 继承 AbstractList，且都实现了 List 接口，目的是对结构的继承关系做出明确标记
- LinkedList 除了实现了 List 接口，也实现了 Deque 接口，即双端队列
- Vector 是最早提供的集合处理类（JDK 1.0），后来 JDK 1.2 则出现了更规范化的集合框架，因此令 Vector 实现了 List 接口，目的是保持向后兼容

---
