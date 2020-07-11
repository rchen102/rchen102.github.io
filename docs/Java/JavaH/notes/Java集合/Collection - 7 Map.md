---
title: Map
date: 2020-07-09 10:23:00
categories: 
tags:
---
**Map 类继承结构图**
<div align=center>

![Map类图](/img/Java/Map3.png)

</div>

---
Map 接口常用方法

```java
// since JDK1.2
public interface Map<K,​V> {
    boolean containsKey​(Object key)
    boolean containsValue​(Object value) // 相比查找 key，查找 value 通常是 O(n)

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

