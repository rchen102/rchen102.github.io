---
title: 字典树
date: 2020-03-10 10:27:00
categories: 
tags:
---
## 介绍
字典树（Trie）是一种树形数据结构，用于处理字符串匹配，解决字符串快速查找的问题

**核心思想**：利用字符串之间的公共前缀，将重复的前缀合并存储

## 实现 Trie
Trie 是一个多叉树，因此需要存储多个子节点

### 经典方式
通过**数组**来存储，每个字符对应到一个数组下标，每个下标存储相应的子节点（引用）

<details>
<summary>点此展开查看代码</summary>

```java
class TrieNode {
    public char data;
    public TrieNode[] children = new TrieNode[26];
    public boolean isData = false;
    public TrieNode(char data) {
        this.data = data;
    }
}

public class Trie {
    private TrieNode root = new TrieNode('/'); // Root node does not store data

    public void insert(char[] text) {
        TrieNode p = this.root;
        for (char data : text) {
            int idx = data - 'a';
            if (p.children[idx] == null) {
                p.children[idx] = new TrieNode(data);
            }
            p = p.children[idx];
        }
        p.isData = true;
    }

    public boolean find(char[] text) {
        TrieNode p = this.root;
        for (char data : text) {
            int idx = data - 'a';
            if (p.children[idx] == null) {
                return false;
            }
            p = p.children[idx];
        }
        return p.isData;
    }
}
```

</details>

---
**效率分析**：对于频繁的字符串查找，Trie 树非常高效  
- 够建 Trie 树需要扫描所有的字符串（字符串集合），因此时间复杂度为 O(n)，n 为所有字符串长度之和
- 够建成功后，每次查询只需要 O(k)，k 为要查询的字符串长度，与 n 或者字符串集合里元素个数无关

**内存消耗**：Trie 树是一种空间换时间的数据结构，尽管通过存储相同的前缀子串，可以节省存储整个字符串集合的空间内存，但是每个节点都需要存储一个引用（指针）数组，当字符种类繁多，且集合中重复前缀并不多时，将会产生很大的内存浪费

### 优化方法
- 牺牲部分查询效率，将每个节点中的数组换成其他数据结构：跳表、散列表、红黑树等
- 缩点优化（压缩节点）：对于只有一个子节点的节点，且此节点不是一个串的结束节点，可以将此节点与子节点压缩合并

## 对比散列表、红黑树
Trie 树适用的要求：  
- 字符串集合的字符集不能太大 => 浪费存储空间，即使优化，也会降低效率
- 集合中重复的前缀子串比较多 => 否则同样浪费存储空间
- 数据存储不连续 => 缓存不友好 
- 需要自己实现 => 容易出现问题

因此，对于精确匹配查找，工程中更常使用散列表和红黑树（无需自己实现，且效率也不低）。Trie 树更擅长前缀匹配查找
