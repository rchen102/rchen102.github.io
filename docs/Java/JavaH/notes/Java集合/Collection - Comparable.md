---
title: Comparable 和 Comparator
date: 2020-07-14 15:25:00
categories: 
tags:
---
## 介绍
对于数字和字符，比较容易比较大小或者字典序，但是对于对象，就没有那么直观的比较方式

因此，JDK 提供了两个接口 Comparable 和 Comparator 来解决比较两个对象大小的问题

```java
// since JDK 1.2
public interface Comparable<T> {
    int compareTo​(T o);
}

/**
 * 因为当前接口只有一个抽象方法，可以定义为函数式接口（该接口会检查是否只有 1 个抽象方法）
 * 可以利用 lambda 表达式实现匿名内部类
 */
@FunctionalInterface
public interface Comparator<T> {
    int compare​(T o1, T o2);
}
```

## 自然排序
自然排序（natural ordering），要求当前对象实现 Comparable 接口

如果返回值为正数，则代表当前对象比 obj 对象大，反之则小，零表示相等

```java
class TestNode implements Comparable<TestNode> {
    int value;
    Node next;

    @Override
    public int compareTo(TestNode obj) {
        return this.value - obj.value;
    }
}
```

## 比较器排序
之所以提供比较器排序接口，是因为有时需要对同一对象进行**多种不同方式的排序**，这点自然排序 Comparable 不能实现，将比较排序算法和具体的实体类解耦

Comparator 可以不单独创建一个文件，而在具体需要的时候，创建一个匿名内部类即可

同时，还可以利用 lambda 表达式进行简写

```java
TestNode[] arr = new TestNode[1];
Arrays.sort(arr, new Comparator<TestNode>() {
    @Override
    public int compare(TestNode node1, TestNode node2) {
        return node1.value - node2.value;
    }
});

// 简写
Arrays.sort(arr, (node1, node2) -> node1.value - node2.value);
```

