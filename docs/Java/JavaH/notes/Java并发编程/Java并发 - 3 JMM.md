---
title: 基础理论 - JMM
date: 2020-07-25 16:30:00
categories: 
tags:
---
## JMM 基本概念
Java 内存模型（JMM）主要就是围绕解决可见性、原子性、有序性问题建立的

解决可见性和有序性问题，最简单的方法就是**禁用缓存**和**编译器优化**，但是这将极大影响程序的性能

JMM 总的来说是一种复杂的规范，从不同视角有不同的定义：

1. **语言视角**：定义了 Java 自己的内存模型，屏蔽掉各种硬件和操作系统的内存访问差异，保证 Java 程序在各个平台下都能达到一致的内存访问效果（不同于 C，直接使用底层硬件的内存模型）
2. **开发视角**：规范了 JVM 如何提供一些方法，由开发者自主按需禁用缓存和编译优化，以及解决原子性问题，这些方法包括一些关键字：final、volatile、synchronized，以及 happen - before 规则

::: tip JMM 和 JVM 内存模型
两者都是一种规范，属于不同层次的划分：  
- JMM 描述多线程运行时的内存间交互，为了程序可以正确并发执行
- JVM 内存模型描述 JVM 的内存如何划分，为了便于理解和管理 Java 程序内存
:::


## JMM 具体内容
<div align=center>

<img src="/img/Java/JMM.png" style="zoom:70%">

</div>

JMM 规定所有的共享变量都存储在**主内存**（Main Memory），此处主内存可以类比硬件的主内存，但是实际上仅仅是 JVM 内存的一部分

每个线程拥有自己的**工作内存**（Working Memory），工作内存中保存了被该线程使用到的变量的主内存副本拷贝，工作内存也属于抽象概念，涵盖了缓存，寄存器等

线程对变量的所有操作（读取、赋值等）都必须在工作内存中进行，不能直接读写主内存中的变量，不同的线程之间也无法直接访问对方工作内存中的变量

### 内存间交互
<div align=center>

<img src="/img/Java/JMMAtom.png" style="zoom:80%">

</div>

关于主内存与工作内存交互，JMM 定义了 8 种基本操作，虚拟机实现时必须保证每种操作都是**原子的**，即不可再分的（对于 double/long 变量，load/sotre，read/write 操作在某些平台上允许有例外）：

| 操作 |  作用  | 
| :--: | :--: | 
| lock（锁定）| 将主内存变量加锁，标识为线程独占状态 |
| unlock（解锁） | 将主内存变量解锁，解锁后可被其他线程锁定 |
| read（读取） | 从主内存读取变量的值，传输到工作内存中，准备 load |
| load（载入） | 将变量的值写入工作内存 |
| use（使用） | 从工作内存读取数据来进行计算 |
| assign（赋值） | 将运算后的值重写存储到工作内存中 |
| store（存储） | 从工作内存读取变量的值，传输到主内存，准备 write |
| write（写入） | 将变量的值写入主内存 |

## Happen - before 规则
Happend - before 规则是 Java 1.5 版本对 volatile 语义的增强，进一步解决可见性和有序性问题

Happen - before 真正表达的是，描述 2 个操作之间的**内存可见性**：如果操作 A happen - before 操作 B，那么 A 的结果对 B 可见

Happen - before 规则约束了编译器优化，编译器优化需要遵守 Happend - before 规则：

1. **程序顺序性规则**，一个线程内，按照代码顺序，书写在前面的操作 happens-before 书写在后面的操作

2. **volatile 变量规则**，对一个 volatile 变量的写操作 happens-before 后续对这个变量的读操作

3. **传递规则**，如果操作 A happens-before 操作 B，而操作 B 又 happens-before 操作 C，则可以得出操作 A happens-before 操作 C

4. **锁定规则**，一个 unLock 操作 happens-before 后面对同一个锁的 lock 操作，解锁的时候，JVM需要强制刷新缓存，使得当前线程所修改的内存对其他线程可见

5. **线程 start() 规则**，A 线程启动子线程 B，则在 B 能看到 A 在调用 B.start() 之前的所有操作，且 B.start() happens-before 线程 B 中的任意操作

6. **线程 join() 规则**，A 线程调用 B.join()，B 线程结束后，A 线程能看到 B 线程所有操作

7. **线程 interrupt() 规则**，对线程 interrupt() 方法的调用 happens-before 被中断线程的代码检测到中断事件的发生

8. **对象终结规则**，一个对象的初始化完成 happens-before 它的 finalize() 方法的开始

---
参考：

[1] [陈彩华 51CTO技术栈 | Java内存模型原理，你真的理解吗？](https://mp.weixin.qq.com/s/SvxHhkGu84rFXaWbeiAXQg  )

[2] [算法网 | JVM（十一）Java 内存模型](http://ddrv.cn/a/35646)

[3] [极客时间 | Java 并发编程实战](https://time.geekbang.org/column/article/84017)