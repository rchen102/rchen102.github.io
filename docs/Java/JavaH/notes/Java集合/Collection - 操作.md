---
title: 集合操作
date: 2020-07-09 09:14:00
categories: 
tags:
---
//TODO
Map 迭代操作，遍历操作
efault void sort​(Comparator<? super E> c) 操作
comparable 和 Comparator 针对 TreeSet 以及其他需要排序的东西 -》 弄清楚如何对自定义类排序



## Iterator
java.util.Iterator 是 Java 集合中定义的标准输出接口

**Iterator 迭代和 for 循环迭代比较**：  
- 对于数组类型结构，for 循环更合适，可以直接通过索引获取相关元素
- 对于链表类型，Iterator 更合适，效率更高，无需每次从链表头部开始查找
- Iterato 还可以用于正确删除元素

<details>
<summary>核心方法</summary>

```java
// since 1.2
public Interface Iterator<E> {
    default void forEachRemaining​(Consumer<? super E> action)   
    boolean hasNext()   
    E next()  
    default void remove()  // 删除上一个next()返回的元素
}
```

</details>

<details>
<summary>删除元素</summary>

```java
public static void main(String[] args) throws IOException {
    List<Integer> list = new ArrayList<>(Arrays.asList(1,2,3));
    Iterator<Integer> iterator = list.iterator();
    // 最正确的删除方法
    // 普通 for 循环：删除导致索引动态变化，最终漏掉元素
    // 增强 for 循环：（底层也是迭代器）：不能使用原生 list.remove() 方法，fail - fast
    while (iterator.hasNext()) {
        if (iterator.next() == 2) {
            iterator.remove();
        }
    }

    iterator = list.iterator(); // 重置迭代器
    while (iterator.hasNext()) {
        System.out.println(iterator.next());
    } 
}
```

</details>

::: tip 快速失败计制 fast - fail
- 当使用 Iterator 迭代时，如使用集合原生方法对集合进行修改，则快速失败做出响应，抛出 ConcurrentModificationException 异常
- 实现方式：modCount 用于记录集合操作过程中作的修改次数（不一定等于 size），每次创建 Iterator，迭代器会存储集合当前的 modCount，每次 next() 调用时，都会检查 modCount 是否发生了改变 =》 使用 Iterator 的 remove 操作来删除元素
- 快速失败机制只尽力抛出异常，不提供保证，因此不能依赖该异常编写程序，该机制仅用于检测程序错误
- 并非所有集合都具有该机制，具有最终一致性的 ConcurrentHashMap、CopyOnWriterArrayList 等都是没有 fast-fail

[参考 1](https://blog.csdn.net/zymx14/article/details/78394464)  
[参考 2](https://www.cnblogs.com/tong-yuan/p/HashSet.html)
:::

## ListIterator
java.util.ListIterator 相比 Iterator，可以进行双向迭代，有以下主要方法

<details>
<summary>核心方法</summary>

```java
public interface ListIterator<E> extends Iterator<E> {
    boolean hasNext()
    E next()
    int nextIndex()

    boolean hasPrevious()
    E previous()
    int previousIndex()

    void remove()
    void add​(E e)
    void set​(E e)  // 替换上一次next或者previous返回的元素
}
```

</details>

## Map 和 Set 遍历操作

<details>
<summary>Map 遍历</summary>

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

</details>

