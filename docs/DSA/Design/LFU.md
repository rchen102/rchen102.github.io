---
title: LFU
date: 2020-09-04 14:01:00
categories: 
tags:
---
## LFU

```java
package driver;

import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;

/**
 * @Author : crz
 */
public class LFU<K,V> {

    class Node {
        K key;
        V value;
        int count;

        public Node(K key, V value) {
            this.key = key;
            this.value = value;
            this.count = 0;
        }
    }

    private int capacity;
    private int minFreq;

    private Map<K, Node> cache;
    private Map<Integer, LinkedHashSet<K>> counter;

    public LFU(int capacity) {
        this.minFreq = 0;
        this.capacity = capacity;
        cache = new HashMap<>();
        counter = new HashMap<>();
    }

    public V get(K key) {
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            addFrequency(node);
            return node.value;
        }
        return null;
    }

    public void put(K key, V value) {
        if (capacity == 0) return;
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            node.value = value;
            addFrequency(node);
        } else {
            if (cache.size() == capacity) {
                popOld();
            }
            // insert new data to lru
            Node node = new Node(key, value);
            cache.put(key, node);
            addFrequency(node);
        }
    }


    /**
     * 弹出当前频率最低且最少访问
     * 无需更新 minFreq，新插入元素，minFreq 会被重置为 1
     */
    private void popOld() {
        LinkedHashSet<K> set = counter.get(minFreq);
        // 获取
        K toLeave = set.iterator().next();
        set.remove(toLeave);
        cache.remove(toLeave);
    }


    private void addFrequency(Node node) {
        int oldFreq = node.count;
        int newFreq = oldFreq + 1;
        node.count = newFreq;

        // if insert new node
        if (oldFreq == 0) {
            LinkedHashSet<K> set = counter.get(1);
            if (set == null) {
                set = new LinkedHashSet<>();
                counter.put(1, set);
            }
            set.add(node.key);
            minFreq = 1;
            return;
        }

        // if update old node
        LinkedHashSet<K> newSet = counter.get(newFreq);
        if (newSet == null) {
            newSet = new LinkedHashSet<>();
            counter.put(newFreq, newSet);
        }
        newSet.add(node.key);

        LinkedHashSet<K> oldSet = counter.get(oldFreq);
        oldSet.remove(node.key);
        if (oldFreq == minFreq && oldSet.size() == 0) minFreq++;
    }
}
```