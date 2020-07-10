---
title: 基本语句
date: 2020-06-17 16:15:00
categories: 
tags:
---
## foreach
JDK 1.5 推出的新特性，也即增强 for 循环

底层原理：底层实现是使用了 `Iterator<T>` 迭代器，因此要注意：  
- 迭代器适合于链表结构，普通 for 循环适合数组结构
- 自定义类如果想要使用 foreach 进行输出，则需要实现 `Iterable<T>` 接口，[例子](https://blog.csdn.net/china_demon/article/details/53861813)

<details>
<summary>点击查看 自定义链表类实现 foreach</summary>

```java
package driver;

import java.util.Iterator;

/**
 * @author crz
 */
public class LinkedList<T> implements Iterable<T> {
    private class Node {
        private T data;
        private Node next;

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
        }
        last = newNode;
    }

    @Override
    public Iterator<T> iterator() {
        cursor = root;
        return new LinkedListIterator();
    }

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
    }
}
```

</details>

## switch
基本语法如下

```java
switch (expression){
    case value :
       //语句
       break; //可选
    case value :
       //语句
       break; //可选
    //你可以有任意数量的case语句
    default : //可选
       //语句
}
```

::: tip 注意
- expression 可以是 byte, short, int, char，从 JDK7 开始支持 String 类型了
- case 语句中如果不添加 break，则后续所有 case 语句（包括 default）无需匹配，可以直接执行（直到出现 break）
- default 分支在没有任何 case 匹配时执行，不需要 break 语句
:::

