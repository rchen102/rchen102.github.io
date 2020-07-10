---
title: Map
date: 2020-07-09 10:23:00
categories: 
tags:
---
## 介绍
<div align=center>

![Map类图](/img/Java/Map.png)

</div>

List 和 Set 属于单值集合，Map 属于二元偶对象集合

常用方法如下：

```java
// since JDK1.2
public interface Map<K,​V> {
    boolean containsKey​(Object key)
    boolean containsValue​(Object value)

    V   remove​(Object key)
    V   put​(K key, V value) // key存在，放回旧的内容，不存在，返回null
    V   get​(Object key)
    default V putIfAbsent​(K key, V value) // 不存在才更新，更新后返回null
    default V getOrDefault​(Object key, V defaultValue)

    Set<K> keySet()
    Collection<V> values()
    Set<Map.Entry<K,​V>> entrySet()
}

// 内部接口
public static interface Map.Entry<K,​V> {
    K  getKey()
    V  getValue()
}
```