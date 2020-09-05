---
title: LRU
date: 2020-09-04 14:01:00
categories: 
tags:
---
## 自己实现
```java
public class LRU<K,V> {
    class Node {
        K key;
        V value;

        Node next = null;
        Node prev = null;

        public Node() {
        }

        public Node(K key, V value) {
            this.key = key;
            this.value = value;
            this.next = next;
            this.prev = prev;
        }
    }

    private HashMap<K, Node> cache;
    private int capacity;
    private int size;
    private Node head;
    private Node tail;

    public LRU(int capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.cache = new HashMap<>();
        this.head = new Node();
        this.tail = new Node();
        head.next = tail;
        tail.prev = head;
    }

    public V get(K key) {
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            unlink(node);
            insertHead(node);
            return node.value;
        }
        return null;
    }

    public void set(K key, V value) {
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            unlink(node);
            insertHead(node);
            node.value = value;
        }
        else {
            // 注意 大于 0，防止 capacity 为 0
            if (size > 0 && size >= capacity) {
                Node leave = popTail();
                cache.remove(leave.key);
            }
            if (size < capacity) {
                Node node = new Node(key, value);
                insertHead(node);
                cache.put(key, node);
            }
        }
    }

    private void unlink(Node node) {
        Node left = node.prev;
        Node right = node.next;
        left.next = right;
        right.prev = left;
        // clean
        node.prev = null;
        node.next = null;
        size--;
    }

    private void insertHead(Node node) {
        Node after = head.next;
        after.prev = node;
        node.next = after;
        // insert head
        head.next = node;
        node.prev = head;
        size++;
    }

    private Node popTail() {
        Node toRemove = tail.prev;
        unlink(toRemove);
        return toRemove;
    }
}
```

## LinkedHashMap 实现
```java
public class LRU<K, V> extends LinkedHashMap<K, V> {
    private int cacheSize;

    public LRU(int cacheSize, float loadFactor) {
        // true 将模式设置为（按访问顺序访问）（默认是按插入顺序）
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