---
title: 基础理论 - 三大特性
date: 2020-08-02 17:53:00
categories: 
tags:
---
## 硬件的效率问题
尽管硬件不断发展，但是核心问题一直存在：**CPU、内存、I/O 设备，三者速度有数量级的差距**，为了平衡三者的速度差异，主要有以下几点措施：

1. CPU 与内存之间增加了**高速缓存**，均衡 CPU 与内存差异
2. 操作系统提出了**进程、线程**，用于分时复用 CPU，均衡 CPU 与 I/O 设备差异
3. 编译器**优化指令执行顺序**，充分利用缓存（CPU 寄存器，CPU 高速缓存）

这些措施虽然平衡了三者速度的差异，但也带来了问题

### 缓存导致的可见性问题
多线程环境下，一个线程修改了共享变量的值，其他线程能够立即看到，称为**可见性**（Visibility）

- **单核场景下**：所有线程在一个 CPU 上执行，所有线程都操作同一个 CPU 缓存，因此不存在可见性问题
- **多核环境下**：每个 CPU 内核拥有自己的缓存，当多个线程在不同 CPU 上运行且涉及同一共享变量时，A 线程对 CPU-1 缓存的操作，对 CPU-2 上运行的 B 线程就不具备可见性了，也称为**缓存一致性问题**

因此，需要各个处理器访问缓存时都遵循一些协议，在读写时要根据协议进行操作，来维护缓存的一致性，比如 MESI 协议

<div align=center>

<img src="/img/Java/JMMCPU.png" style="zoom:70%">

</div>


### 线程切换导致的原子性问题
一个或多个操作在 CPU 执行过程中不被中断的特性称为**原子性**（Atomicity）

早期 OS 基于进程调度 CPU，现代 OS 通常基于更轻量级的线程来调度

对于高级语言来说，一条指令往往需要**多条 CPU 指令**来执行，例如 counter += 1 需要 3 条指令来完成：

1. 将变量 counter 从内存加载到 CPU 寄存器
2. 在寄存器中执行 +1 操作
3. 将寄存器结果写回内存中（或写入 CPU 缓存中）

CPU 在进行任务调度时，不同任务的切换可能发生在任何一条 CPU 指令之后，因此当两个线程同时执行 counter += 1 时，可能出现下列情景：

1. counter 初始化为 0
2. A 线程在执行完指令 1 和 2 后，线程切换为 B 线程执行
3. B 执行完指令 1，2，3 后，更新 counter 为 1，线程切换为 A 执行
4. A 执行指令 3，更新 counter 为 1

这种错误出现的原因，就在于 CPU 能保证的原子操作是 **CPU 指令级别的**，而不是高级语言级别


### 指令重排序导致的有序性问题
程序按照代码的先后顺序执行，称为**有序性**（Ordering）

为了充分利用 CPU 内部运算单元高速缓存，编译器和处理器常常会对指令进行**重排序**：

1. 编译器优化的重排序：编译器在不改变单线程程序语义的前提下，可以重新安排语句的执行顺序
2. 指令级并行的重排序：现代 CPU 采用指令级并行技术，如果不存在数据依赖，可以多条指令重叠执行
3. 内存系统的重排序：由于 CPU 使用缓存和读/写缓冲区，使得 load/store 操作看上去可能是在乱序执行

Java 中重排序，主要分为两类，分别对应编译时和运行时，即**编译期重排序**和**运行期重排序**，重排序满足以下两个条件：

1. 遵守 as - if - serial 语义，即单线程环境下，重排序后的运行结果与顺序执行是相同的
2. 不对存在数据依赖关系的指令进行重排序

<div align=center>

<img src="/img/Java/Reorder.png" style="zoom:100%">

</div>

- **单核环境下**：重排序是提高 CPU 运算速度的一种优化，保证结果与顺序执行相同（as - if - serial）
- **多核环境下**：如果一个线程的计算任务依赖另一个线程计算任务的中间结果，则代码的顺序性无法保证执行的顺序性，最终的结果也会不同于逻辑结果


<details>
<summary>案例 1：编译器级别 - 无依赖关系指令</summary>

```java
/**
 * 两个线程，一个执行 writer，一个执行 reader
 * 正常情况：A 执行完成后，才会执行 D
 * 重排序后：A 和 B 无依赖关系，因此 B 可能先于 A 执行，导致 D 也先于 A 执行
 */
public class ReorderDemo {
    int counter = 0;
    boolean flag = false;

    public void writer() {
        counter = 1;  // 1
        flag = true;  // 2
    }

    public void reader() {
        if (flag) {   // 3
            System.out.println(counter);  //4
        }
    }
}
```

</details>

<details>
<summary>案例 2：指令级别 - 双重检查创建单例对象</summary>

```java
/**
 * 双重 null 检查创建单例对象
 * new 操作需要 3 个指令完成：
 *  1. 分配一块内存 M
 *  2. 在内存 M 上初始化 Singleton 对象
 *  3. 将 M 的地址赋值给 instance 变量
 *
 * 正常情况：
 *  1. 线程 A，线程 B 同时调用 getInstance()
 *  2. 同时发现 instance == null，竞争对 Singleton.class 加锁
 *  3，JVM 保证只有一个线程成功获得锁，假设 A 成功
 *  4. A new 一个 Singleton 实例，释放锁
 *  5. B 获得锁，且发现 instance != null，不会重复创建实例
 *
 * 重排序后：指令按照 1，3，2 执行
 *  1. 线程 A 获得锁，执行 new 语句，当执行完指令 3 时发生线程切换
 *  2. 线程 B 调用 getInstance()，执行第一个判断 instance == null
 *     发现 instance ！= null，直接返回 instance
 *  3. 此时 instance 是还未初始化的，一旦访问其成员变量，会触发空指针异常
 *
 * 注：
 *  正常情况下，如果当 A 执行完指令 2 后发生线程切换
 *  虽然不会出现空指针异常，但是实际上会创建两个 Singleton 实例
 *  属于线程切换带来的原子性问题
 */
public class Singleton {
    static Singleton instance;
    static Singleton getInstance(){
        if (instance == null) {
            synchronized(Singleton.class) {
                if (instance == null)
                    instance = new Singleton();
            }
        }
        return instance;
    }
}
```

</details>

---
参考：

[1] [极客时间 | Java 并发编程实战](https://time.geekbang.org/column/article/83682)