---
title: 多线程编程3
date: 2020-01-08 21:55:00
categories: 
tags:
---
## 线程同步问题
多个线程的并发执行，可能会导致线程不同步问题的出现

解决该问题的关键是保证同一时间只能有一个线程对共享资源进行操作(进入critical section)

```java
class TicketThread implements Runnable {
    private int tickets = 5;   // Total numbers
    @Override
    public void run() {
        for (int x = 0; x < 100; x++) {
            if (this.tickets > 0) {
                try {
                    sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println(Thread.currentThread().getName()
                        + " sold 1, left: " + --this.tickets);
            }
        }
    }
}

public class Demo {
    public static void main(String[] args) {
        TicketThread body = new TicketThread();
        new Thread(body, "SellerA").start();
        new Thread(body, "SellerB").start();
    }
}

/* Output
 * SellerA sold 1, left: 3
 * SellerB sold 1, left: 4
 * SellerA sold 1, left: 2
 * SellerB sold 1, left: 1
 * SellerA sold 1, left: 0
 * SellerB sold 1, left: -1
 */
```

## 线程的同步处理
通过关键字`synchronized`关键字实现线程的同步处理

:::warning 注意
不正当的同步处理可能导致死锁，即线程间可能彼此**互相等待**
:::

### 同步代码块
使用`synchronized`关键字定义的代码块，使用时需要设置一个同步的对象

```java
synchronized (object that need synchronization) {
    //TODO
}

public void run() {
    for (int x = 0; x < 100; x++) {
        synchronized (this) {
            if (this.tickets > 0) {
                this.tickets--;
            }
        }
    }
}
```

### 同步方法
使用`synchronized`关键字定义的方法

```java
public void run() {
    for (int x = 0; x < 100; x++) {
        this.sell();
    }
}

public synchronized void sell() {
    if (this.tickets > 0) {
        this.tickets--;
    }
}
```

## Object类中的相关方法

```java
// 阻塞当前线程，直到被唤醒(being notified or interrupted)
public final void wait() throws InterruptedException; 
// 设置等待时间
public final void wait​(long timeoutMillis) throws InterruptedException;
public final void wait​(long timeoutMillis, int nanos) throws InterruptedException;

public final void notify();     // 唤醒一个等待线程
public final void notifyAll();  // 唤醒所有等待线程
```

## 线程停止
`Thread`中有部分方法已经不再使用

- 线程停止: `public final void stop();`
- 线程挂起: `public final void suspend();`
- 线程恢复: `public final void resume();`

之所以在`JDK1.2`之后这些方法不再使用，是因为这些方法有可能会引起死锁，所以现在如果想要实现线程的停止操作，只能通过一些逻辑的程序结构来完成

```java
class Test implements Runnable {
    private boolean stopFlag = false;
    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            if (this.stopFlag) break;
            System.out.println("i = " + i);
        }
    }

    public stopThread() {
        this.stopFlag = true;
    }
}

class Demo {
    public static void main(String[] args) {
        Test thread = new Test();
        new Thread(thread).start();
        Thread.sleep(2000);   // main thread sleep 2s -> let test thread run 2s
        thread.stopThread();  // stop the thread 
    }
}
```

## 守护线程
守护线程(Daemon)指的是一种后台运行的线程，该线程会随着主线程的运行而保持执行，但是一旦主线程停止，所有对应的守护线程也将停止

守护线程的创建并不复杂，只需要通过`Thread`类中的方法，为其设置一个状态

```java
public final void setDaemon​(boolean on);
```

## volatile关键字
`volatile`关键字主要用于多线程的访问处理上，但是并不是描述数据同步的概念，使用`volatile`关键字可以采用更快的模式来进行线程的数据处理

本身不具备同步功能，描述的是一种变量内存的快速访问和修改机制

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)