---
title: Iterable
date: 2020-07-02 15:48:00
categories: 
tags:
---
Iterable 是 JDK 1.5 之后提供的一个可迭代的标记接口,实现了该接口的类可以利用增强 for 循环（forEach）遍历，同时也可以对外提供一个获得迭代器 Iterator 的方法
  
实现了 Iterable 的类可以在实现多个 Iterator 内部类，可以返回不同的迭代器，拥有不同的迭代方法，更加灵活

## 正确的删除操作
对于集合来说，以下两种删除方法都不正确

<details>
<summary>错误案例1</summary>

```java
public static void remove(List<Integer> list, int target) {
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i) == target) {
            // 或者 list.remove(new Integer(target))
            list.remove(i);
        }
    }
}

public static void main(String[] args) {
    List<Integer> list = new ArrayList<>(Arrays.asList(1,2,2,3));
    remove(list,2); 
    // 输出：[1,2,3]
    // 删除导致索引动态变化，最终漏掉元素
    System.out.println(list); 
}
```

</details>

<details>
<summary>错误案例2</summary>

```java
public static void remove(List<Integer> list, int target) {
    for (int n : list) {
        if (n == target) {
            list.remove(new Integer(n));
        }
    }
}

public static void main(String[] args) {
    List<Integer> list = new ArrayList<>(Arrays.asList(1,2,2,3));
    // 程序出错
    // java.util.ConcurrentModificationException
    remove(list,2); 
    System.out.println(list); 
}
```

</details>

正确的删除操作，需要使用 Iterator 去完成

```java
public static void remove(List<Integer> list, int target) {
    Iterator<Integer> iterator = list.iterator();
    while (iterator.hasNext()) {
        int n = iterator.next();
        if (n == target) iterator.remove();
    }
}
```


::: tip 快速失败 fast - fail
- 当使用 Iterator 迭代时，如果本线程（迭代过程中）或者其他线程，对同一个集合执行了 add，remove，clear 等涉及修改元素个数的操作时，会抛出 ConcurrentModificationException
- 实现方式：
    + 存在 modCount，当执行涉及修改集合元素个数的操作时，modCount++（因此不一定等于 size）
    + 每次创建 Iterator 时，迭代器会存储集合当前的 modCount
    + 每次 next() 调用前，都会检查 modCount 是否发生了改变，如改变则抛出异常 
- 快速失败机制只尽力抛出异常，不提供保证，因此不能依赖该异常编写程序
- 并非所有集合都具有该机制，具有最终一致性的 ConcurrentHashMap 等都是没有 fast-fail

[参考 1](https://blog.csdn.net/zymx14/article/details/78394464)  
[参考 2](https://www.cnblogs.com/tong-yuan/p/HashSet.html)
:::

## 代码样例
```java
// 自定义链表类实现 Iterable
package driver;

import java.util.Iterator;

/**
 * @author crz
 */
public class LinkedList<T> implements Iterable<T> {
    private class Node {
        private T data;
        private Node next;
        private Node before;

        public Node(T data) {
            this.data = data;
        }
    }

    private Node root;
    private Node last;
    private Node cursor;

    public void add(T data) {
        Node newNode = new Node(data);
        if (root == null) {
            root = newNode;
        } else {
            last.next = newNode;
            newNode.before = last;
        }
        last = newNode;
    }

    private void unlink(Node node) {
        Node prev = node.before;
        Node after = node.next;
        if (prev != null) {
            prev.next = after;
        }
        if (after != null) {
            after.before = prev;
        }
    }

    @Override
    public Iterator<T> iterator() {
        cursor = root;
        return new LinkedListIterator();
    }

    // 内部类，自动继承了泛型，因此这里无需声明泛型<T>
    private class LinkedListIterator implements Iterator<T> {
        @Override
        public boolean hasNext() {
            return cursor != null;
        }

        @Override
        public T next() {
            T data = cursor.data;
            cursor = cursor.next;
            return data;
        }

        @Override
        public void remove() {
            unlink(cursor.before);
        }
    }
}

public class Driver {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        for (int n : list) {
            System.out.println(n); // 1，2，3
        }

        Iterator<Integer> iterator = list.iterator();
        while (iterator.hasNext()) {
            int n = iterator.next();
            if (n == 2) {
                iterator.remove(); 
            }
        }

        iterator = list.iterator();
        while (iterator.hasNext()) {
            int n = iterator.next();
            System.out.println(n);   // 1，3
        }
    }
}
```