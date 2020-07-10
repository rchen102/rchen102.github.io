---
title: 集合操作
date: 2020-07-09 09:14:00
categories: 
tags:
---
//TODO
Map 迭代操作
efault void sort​(Comparator<? super E> c) 操作
comparable 和 Comparator


## Iterator
java.util.Iterator 是 Java 集合中定义的标准输出接口，有如下核心方法

```java
// since 1.2
public Interface Iterator<E> {
    default void forEachRemaining​(Consumer<? super E> action)   
    boolean hasNext()   
    E next()  
    default void remove()  // 删除上一个next()返回的元素
}
```

<details>
<summary>代码样例</summary>

```java
public static void main(String[] args) throws IOException {
    List<Integer> list = new ArrayList<>(Arrays.asList(1,2,3));
    Iterator<Integer> iterator = list.iterator();
    // 循环遍历
    while (iterator.hasNext()) {
        System.out.println(iterator.next());
    } 

    // 最正确的删除方法
    // 使用 for 循环，索引位置会改变，导致出错
    // 使用增强 for 循环，会出现并发修改错误
    iterator = list.iterator(); // 重新获取一个迭代器
    while (iterator.hasNext()) {
        if (iterator.next() == 2) {
            iterator.remove();
        }
    }
}

```

</details>

**Iterator 迭代和 for 循环迭代比较**：  
- 对于数组类型结构，for 循环更合适，可以直接通过索引获取相关元素
- 对于链表类型，Iterator 更合适，效率更高，无需每次从链表头部开始查找
- Iterato 还可以用于正确删除元素

## ListIterator
java.util.ListIterator 相比 Iterator，可以进行双向迭代，有以下主要方法

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