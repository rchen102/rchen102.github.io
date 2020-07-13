---
title: 常见集合使用案例
date: 2020-07-09 09:14:00
categories: 
tags:
---
//TODO
default void sort​(Comparator<? super E> c) 操作
comparable 和 Comparator 针对 TreeSet 以及其他需要排序的东西 -》 弄清楚如何对自定义类排序
Collections的使用

## Map 和 Set 迭代
```java
//方法一：通过 Map.keySet 遍历 key 和 value，多了个 getValue 的过程
for (String key : hashMap.keySet()) {
    System.out.println("Key: " + key + " Value: " + hashMap.get(key));
}

//方法二：通过 Map.values() 遍历所有的 value，但不能遍历 key
for (String v : hashMap.values()) {
    System.out.println("The value is " + v);
}

//方法三：通过 Map.entrySet 使用 iterator 遍历 key 和 value，而 iterator 又是要取出 entrySet的，相当于又多了一步。但其最大的特点是适用于一边遍历一边删除的场景。不需要用一个 set 先保存下来再删除了。
Iterator iterator = hashMap.entrySet().iterator();
while (iterator.hasNext()) {
    Map.Entry<String, String> entry = (Map.Entry<String, String>) iterator.next();
    System.out.println("Key: " + entry.getKey() + " Value: " + entry.getValue());
    // 遍历完成后马上进行删除
    iterator.remove();
}
// 方法四：通过 entrySet 进行遍历，直接遍历出key和value。对于 size 比较大的情况下，又需要全部遍历的时候，效率是最高的。
for (Map.Entry<String, String> entry : entries) {
    System.out.println("testHashMap: key = " + entry.getKey() + ";value = " + entry.getValue());
}
```

## LinkedHashMap 实现 LRU
```java
public class LRU<K, V> extends LinkedHashMap<K, V> {
    private int cacheSize;

    public LRU(int cacheSize, float loadFactor) {
        super(cacheSize, loadFactor, true);
        this.cacheSize = cacheSize;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry eldest) {
        return super.size() > cacheSize;
    }
}

public class Driver {
    public static void main(String[] args) {
        LRU<String, Integer> cache = new LRU<String, Integer>(3, 0.75f);
        cache.put("a",1);
        cache.put("b",2);
        cache.put("c",3);
        cache.put("d",4);
        cache.put("b",5);
        cache.get("c");
        // {d=4, b=5, c=3}
        System.out.println(cache);
    }
}
```





