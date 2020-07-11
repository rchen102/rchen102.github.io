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
Map<K,V> 接口常用方法

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

---
SortedMap<K,V> 拓展 Map 的方法

```java
K   firstKey()  // 返回 first (lowest) key 
K   lastKey()   // 返回 last (highest) key
SortedMap<K,​V> headMap​(K toKey)    // 返回 [...,tokey) 部分，<
SortedMap<K,​V> tailMap​(K fromKey)  // 返回 [fromKey, ..] 部分，>=
SortedMap<K,​V> subMap​(K fromKey, K toKey)  // 返回 [fromKey, toKey)部分
```

---
NavigableMap<K,​V> 拓展 SortedMap 的方法

```java
// key 相关，且方法中的 xxxKey 可以换成 xxxEntry，返回值变为 Map.Entry<K,V>
K   lowerKey​(K key)   // 小于给定key的最大key
K   floorKey​(K key)   // 小于等于给定key的最大key

K   higherKey​(K key)  // 大于给定key的最小key
K   ceilingKey​(K key) // 大于等于给定key的最小key

// Entry 相关
Map.Entry<K,​V> firstEntry()  // 最小的节点，或 null 代表空
Map.Entry<K,​V> lastEntry()

Map.Entry<K,​V> pollFirstEntry()  // 弹出最小的节点
Map.Entry<K,​V> pollLastEntry()   

// 整体相关
NavigableMap<K,​V>  descendingMap()  // 返回 reverse 排序规则后的Map，允许修改或插入

NavigableSet<K> navigableKeySet()   // 返回key的Set，不允许add操作，允许remove操作
NavigableSet<K> descendingKeySet()  // 返回 reverse 排序规则后key的Set
```

