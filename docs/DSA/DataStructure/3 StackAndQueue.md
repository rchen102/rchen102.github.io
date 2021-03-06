---
title: 栈和队列
date: 2019-09-06 10:54:14
categories: 
tags:
---
## 介绍
栈和队列都属于操作受限的线性表，仅支持有限的操作。特定的数据结构主要是对特定使用场景的抽象，所以从功能上讲，数组和链表可以替代栈和队列（本质上栈和队列都有数组或链表的实现方式），但是相比之下，数组和链表暴露了更多的操作接口，操作更灵活的同时，也更容易出错

## 栈的介绍
**特点**：先进后出（First in, last out）

**两个基本操作**：通过均摊时间分析，操作复杂度都为 `O(1)`
- 入栈（push）
- 出栈（pop）

> 入栈时，如果栈已满，将进行栈的扩容和数据的复制，因此最坏复杂度是 `O(n)`，但是通过均摊时间分析，可知平均复杂度还是`O(1)`

**栈的实现**
- 顺序栈（数组实现）：支持动态扩容的顺序栈: 与数组动态扩容类似
- 链式栈（链表实现）：天然支持动态扩容，但是需要消耗额外的内存空间储存 `next` 指针

**常见应用**
- 函数调用，栈帧
- 表达式求值（使用两个栈，分别存储运算数和运算符）
- 括号匹配
- 浏览器前进后退（使用两个栈）

## 队列介绍
**特点**：先进先出（First in, first out）

**两个基本操作**：通过均摊时间分析，操作复杂度都为 `O(1)`
- 入队（enqueue）
- 出队（dequeue）

**队列的实现**：栈只需要一个栈顶指针，而队列需要两个，分别指向队首（head）和队尾（tail）
- 顺序队列（数组实现）：在不断的入队出队操作中，头尾指针都将持续向后移动
    + 解决方案1: 数据搬迁，在进行入队操作时，如果没有空闲空间，则触发数据搬迁
    + 解决方案2: 循环队列，避免了数据搬迁，更加高效，关键是要区分队空和队满的条件
- 链式队列（链表实现）：无限制的队列，但是同样需要额外的内存空间

**常见应用**
- CPU 调度
- 线程池处理请求

**队列变种**
- 阻塞队列
    + 队列为空时，出队操作会被阻塞，直到队列中有了数据再返回数据
    + 队列已满时，入队操作会被阻塞，直到队列中有了空闲位置再插入数据
- 并发队列：线程安全的队列


