---
title: 详解 - final 和 volatile
date: 2020-08-04 01:18:00
categories: 
tags:
---
## final 可见性
被 final 修饰的字段在声明时或者构造器中，一旦初始化完成（且无 this 引用逃逸），final 变量的值立刻回写到主内存，其他线程无须同步就能正确看见 final 字段的值

> this 引用逃逸：指对象还没有构造完成，它的 this 引用就被发布出去了，其他线程有可能通过这个逸出的引用访问到“初始化了一半”的对象

## volatile 两种语义
Java 语言中，volatile 关键字主要具备 2 种语义，可见性和有序性

1. **语义一：可见性**

    CPU 缓存会造成可见性问题，而 volatile 在 C 语言中，最原始的意义就是**禁用 CPU 缓存**

    JMM 规定，volatile 变量每次修改都必须立刻回写主存，每次使用都需要从主存中刷新最新的值：

    - 每次对变量的修改，都会引起 CPU 缓存（工作内存）写回到主存
    -  一个工作内存回写到主存会导致其他线程的 CPU 缓存（工作内存）无效

2. **语义二：有序性**  
    Java 中，如果两个语句之间没有依赖关系，就可能被重排序优化，具体表现为：如果在本线程中观察，所有的操作都是有序的；如果在另一个线程中观察，所有的操作都是无序的

    volatile 关键字主要是通过**禁止重排序**来解决多线程程序的有序性问题，具体表现为：当程序执行到 volatile 变量的读或写时，在其前面的操作肯定全部已经执行完毕，且结果已经对后面的操作可见；在其后面的操作肯定还没有执行

## volatile 实现原理
### 内存屏障

内存屏障是插入两个 CPU 指令之间的一种**指令**，用来禁止 CPU 发生重排序保证**有序性**；且为了达到屏障效果，部分内存屏障会使得 CPU 写入/读取值之前，将缓冲区/缓存的数据刷新写回主内存，因此附带保证了**可见性**，因此可以总结，内存屏障有 2 个作用 ：

1. 阻止屏障两边的指令重排序
2. 强制把写缓冲区/高速缓存中的脏数据等写回主内存，让其他 CPU 缓存中相应的数据失效

---
**基本内存屏障**：

主要有以下 4 类，LoadLoad、LoadStore、StoreStore 和 StoreLoad，这类屏障可统一用 XY 屏障来表示，即禁止屏障左侧的任何 X 操作与屏障右侧的任何 Y 操作之间重排序

| 屏障类型 |  说明  | 
| :--: | :--: | 
| Load1; LoadLoad; Load2 | 确保 Load1 数据加载，先于 Load2 及后续 Load 指令 |
| Store1; StoreStore; Store2 | 确保 Store1 已经刷新到内存，先于 Store2 及后续 Store 指令 |
| Load1; LoadStore; Store2 | 确保 Load1 数据加载，先于 Store2 及后续 Store 指令  | 
| Store1; StoreLoad; Load2 | 确保 Store1 已经刷新到内存, 先于 Load2 及后续 Load 指令 |

其中 StoreLoad 是万能屏障，兼具其他 3 个屏障的功能，会在写操作完之后，将写缓冲器中的条目冲刷入主内存；在读操作之前，清空无效化队列，从主内存或其他处理器的高速缓存中读取最新值到自己的内存

---
**内存屏障分类**：
- 按照可见性保障来分：加载屏障（LoadBarrier）和存储屏障（StoreBarrier）
    + 加载屏障：StoreLoad 可以作为加载屏障，使得 CPU 在读共享变量前，先从主内存更新自己的缓存
    + 存储屏障：StoreLoad 也可作为存储屏障，使得 CPU 在写共享变量后，将更新写回主内存

- 按照有序性保障来分：获取屏障（AcquireBarrier）和释放屏障（ReleaseBarrier）
    + 获取屏障：LoadLoad 和 LoadStore 组合，在读操作后插入，禁止读操作与后续读写操作重排序
    + 释放屏障：LoadStore 和 StoreStore 组合，在写操作前插入，禁止写操作与前面读写操作重排序

### 内存屏障实现 volatile
**1. volatile 变量写**

<div align=center>

<img src="/img/Java/volatileW.png" style="zoom:70%">

</div>

**2. volatile 变量读**

<div align=center>

<img src="/img/Java/volatileR.png" style="zoom:70%">

</div>

**3. 内存屏障实现：Lock 前缀指令**

- 非 volatile 变量

    <div align=center>

    <img src="/img/Java/NonMemBarrier.jpg" style="zoom:100%">

    </div>

- volatile 变量

    <div align=center>

    <img src="/img/Java/MemBarrier.jpg" style="zoom:100%">

    </div>

## volatile 缺陷
volatile 关键字只保证可见性和有序性，**不能保证原子性**

对于读/写本身，Store 和 Load 指令是原子性的，但是对于复合操作如 i++，是由多个 CPU 指令完成的：

1. 从主内存读取 i 到工作内存（load）
2. 将 i 的值由工作内存压入操作栈进行计算（use）
3. 计算完成，将结果由操作栈写回工作内存（assign）
4. 将 i 的值写回主内存（store）

```java
/**
 * 尽管使用了 volatile 修饰变量，但是结果并不一定正确
 * 假设线程 A，B 都进行了一次 counter++ 操作：
 *  1. 线程 A,B 同时从主内存中读取值 0 写入工作内存开始计算
 *  2. 线程 A 首先完成计算，将 counter 更新为 1，并对线程 B 可见
 *  3. 线程 B 所在 CPU 嗅探到新值，将工作内存中值更新为 1，但此时 0 已经被压入操作栈
 *  4. 线程 B 完成计算，值 1 从栈中弹出，写入工作内存，同时回写主内存
 *  5. 最终两次 counter++ 操作结束后，counter 值为 1
 */
public class VolatileTest {
    public static volatile int counter = 0;

    public static void main(String[] args) throws Exception {
        Thread pth1 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) {
                counter++;
            }
        });

        Thread pth2 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) {
                counter++;
            }
        });
        pth1.start();
        pth2.start();
        pth1.join();
        pth2.join();

        System.out.println(counter);
    }
}
```


---
参考:

[1] [volatile 如何保证可见性与有序性](https://since1986.github.io/5ab80f4c.html)

[2] [精确解释 java 的 volatile 之可见性、原子性、有序性（通过汇编语言）](https://my.oschina.net/tantexian/blog/808032)

[3] [【Java 并发学习三】 内存屏障与 synchronized、volatile 的原理](https://www.jianshu.com/p/43af2cc32f90)