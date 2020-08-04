---
title: 原理详解 - volatile
date: 2020-08-04 01:18:00
categories: 
tags:
---
## 关键字 volatile
Java 语言中，volatile 关键字具备 2 种语义，可见性和有序性

**1. 可见性**

CPU 缓存会造成可见性问题，而 volatile 在 C 语言中，最原始的意义就是**禁用 CPU 缓存**

JMM 规定，volatile 变量每次修改都必须立刻回写主存，每次使用都需要从主存中刷新最新的值，由此可以保证 volatile 变量的可见性

<details>
<summary>案例 1：使用 volatile 保证可见性</summary>

```java
/**
 * 如果不使用volatile修饰 flag，程序永远不会打印 end
 */
public class VolatileTest {
    public static volatile boolean flag = false;

    public static void main(String[] args) throws Exception {
        new Thread(() -> {
            System.out.println("waiting....");
            while (!flag) {
            }
            System.out.println("end");
        }).start();

        Thread.sleep(2000);

        new Thread(() -> {
            flag = true;
            System.out.println("flag changed");
        }).start();
    }
}


```

</details>

**2. 有序性**






### 2. volatile 有序性
volatile 有序性就是通过禁止指令重排序实现的，主要表现为以下 2 条规则：

1. 程序执行到 volatile 变量的读操作或者写操作时，其前面的操作全部已经进行，结果对后续操作可见；其后面的操作肯定还没有进行
2. 

---
**可见性的实现原理**：当线程对 volatile 变量进行**写操作**时，**添加 Lock 前缀指令**

Lock 前缀指令属于汇编指令，Lock 指令会使紧跟在其后面的指令变为**原子操作**，保证 CPU 在指令执行完毕且将变量写回主内存前，能够独占使用相关共享内存

指令执行完回写主内存后，通过缓存一致性协议（如 MESI），每个 CPU 通过嗅探在总线上传播的数据来检查自己缓存的变量是否过期

---
**受限的原子性**：volatile 修饰的变量，只能保证写操作和回写主内存的操作是原子性的

类似 counter = 10，这种为写操作；而 counter += 1 或者 counter++ 并不是单纯的写操作

根据 JMM 定义的内存交互操作，counter++ 实际上需要 use，assign 来完成，在 use 这一步，变量被压入操作栈进行计算，计算完成后再重新 assign 回工作内存，volatile 只能保证 assign 和之后的写回主内存是原子性的

<details>
<summary>volatile 的错误案例</summary>

```java
/**
 * 尽管使用了 volatile 修饰变量，但是结果并不一定正确
 * 原因在于：
 *  1. 由于使用 volatile 修饰，线程 A 更新了 counter 后，对线程 B 可见
 *  2. 线程 B 更新了工作内存中的值，但是可能此时 old value 已经被压入操作栈进行计算
 *  3. 计算完成，old value + 1 从栈中弹出，写入工作内存，同时回写主内存，造成值丢失
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

</details>