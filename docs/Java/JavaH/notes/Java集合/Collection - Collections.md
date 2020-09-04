---
title: Collections
date: 2020-07-14 15:25:00
categories: 
tags:
---
## 介绍
Collection 接口的意义是为各种具体的单值集合提供最大化的统一操作方式

Collections 是一个工具类，包含有各种有关集合操作的**静态**多态方法

## 常见 API
```java
// 1. 排序
sort​(List<T> list)
sort​(List<T> list, Comparator<? super T> c)

// 2. 反转顺序
reverse​(List<?> list)

// 3. 打乱顺序
shuffle​(List<?> list)

// 4. 将集合中所有元素替换为 obj
fill​(List<? super T> list, T obj)

// 5. 会按顺序覆盖 dest 中的索引位置（不管原先位置上有没有元素）
copy​(List<? super T> dest, List<? extends T> src)

// 6. 最大/最小
max​(Collection<? extends T> coll, Comparator<? super T> comp)
```