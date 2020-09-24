---
title: 循环队列
date: 2020-09-23 01:47:00
categories: 
tags:
---
## 循环队列

```java
public class CircularQueue {
    int[] data;

    // 真实能够存储的元素数量为 cap-1，留出一位判断空还是满
    int cap;
    int size;

    // head 指向当前第一个元素
    int head = 0;
    // tail 指向下一个可以插入的空位置
    int tail = 0;

    private boolean isFull() {
        return (tail + 1) % cap == head;
    }

    private boolean isEmpty() {
        return head == tail;
    }

    public int size() {
        return size;
    }

    public CircularQueue(int cap) {
        this.cap = cap + 1;
        data = new int[this.cap];
    }

    public void offer(int val) {
        if (isFull()) return;
        size++;
        data[tail] = val;
        tail = (tail + 1) % cap;
    }

    public int poll() {
        if (isEmpty()) return -1;
        size--;
        int toPop = data[head];
        head = (head + 1) % cap;
        return toPop;
    }
}

```