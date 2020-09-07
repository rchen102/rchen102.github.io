---
title: List
date: 2020-07-02 16:17:00
categories: 
tags:
---
**List 类继承结构图**  

<div align=center>

![List](/img/Java/List.png)

</div>

---
List 扩充 Collection 新方法

```java
void add​(int index, E element)
boolean addAll​(int index, Collection<? extends E> c)

E set​(int index, E element)
E get​(int index)
E remove​(int index) // 注意，对于 List<Integer>，int 类型代表下标，Integer 类型才代表元素
boolean remove​(Object o) // 对比继承 Collection，根据 equals 删除元素（支持 null）

int indexOf​(Object o)       // 获取第一次出现的下标，-1 不存在
int lastIndexOf​(Object o)   // 获取最后一次出现的下标，-1 不存在

void sort​(Comparator<? super E> c) // 排序
List<E> subList​(int fromIndex, int toIndex) // [from, to)

ListIterator<E> listIterator()  // 双向迭代器

static <E> List<E>  of​(E... elements) // JDK1.9 后追加的新方法
```



