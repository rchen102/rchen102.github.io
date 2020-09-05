---
title: LFU
date: 2020-09-04 14:01:00
categories: 
tags:
---
## LFU

```java
package driver;

import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedList;
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
    private int size;
    private int minFreq;

    private Map<K, Node> cache;
    private Map<Integer, Deque<Node>> counter;

    public LFU(int capacity) {
        this.size = 0;
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
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            node.value = value;
            addFrequency(node);
        } else {
            if (size == capacity) {
                popOld();
            }
            if (size < capacity) {
                Node node = new Node(key, value);
                cache.put(key, node);
                size++;
                addFrequency(node);
            }
        }
    }

    
    /**
     * 弹出当前频率最低且最少访问
     * 无需担心 minFreq，因为弹出，则代表一定有新的加入，minFreq = 1
     */
    private void popOld() {
        if (size <= 0) return;
        Deque<Node> queue = counter.get(minFreq);
        Node toRemove = queue.pollFirst();
        cache.remove(toRemove.key);
        size--;
    }
    
    
    private void addFrequency(Node node) {
        // 1. update node
        int oldFreq = node.count;
        int newFreq = oldFreq + 1;
        node.count = newFreq;
        
        // 2. update counter
        // remove old
        Deque<Node> queue = counter.get(oldFreq);
        if (queue != null) {
            queue.remove(node);
        }
        // add new
        if (counter.containsKey(newFreq)) {
            queue = counter.get(newFreq);
            queue.offerLast(node);
        } else {
            queue = new LinkedList<>();
            queue.offerLast(node);
            counter.put(newFreq, queue);
        }

        // 3. update min frequency，注意这里容易出错
        if (oldFreq == 0) {
            minFreq = 1;
        }
        else {
            if (oldFreq == minFreq && counter.get(oldFreq).isEmpty()) minFreq++;
        }
    }
}
```