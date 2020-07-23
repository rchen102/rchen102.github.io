---
title: 线程控制 - Thread API 的使用
date: 2020-07-15 18:00:00
categories: 
tags:
---
## Thread API 总结
```java
public class Thread extends Object implements Runnable {
    static final int MIN_PRIORITY;   // 1
    static final int MAX_PRIORITY;   // 10
    static final int NORM_PRIORITY;  // 5 default priority

    static Thread currentThread();
    static boolean interrupted()；  // clear after return
    static void sleep​(long millis) throws InterruptedException; // ms
    static void yield()     // 告诉 scheduler 当前线程愿意让出 CPU 时间片

    void setDaemon​(boolean on) // Marks this thread as daemon thread or not

    String getName();                  
    void setName​(String name); 

    void setPriority​(int newPriority);    // 设置优先级
    int getPriority();                    // 获取优先级

    void interrupt();            // 向该线程发出中断信号
    boolean isInterrupted();     // 测试该线程是否被中断

    void join() throws InterruptedException  // 等待该线程执行完毕，强制线程执行完毕
    void join​(long millis) throws InterruptedException // 最多等待 xxx 毫秒
}
```

## 线程生命周期
- 创建：开发者定义好了相关的线程类对象，每一个 `Thread` 类的实例都表示一个线程对象
- 就绪：线程的启动依赖 `start()` 方法，但调用该方法时，线程并非立即执行
- 执行：当 CPU 调度某线程对象后，该线程对象开始执行 `run()` 或 `call()` 方法
- 阻塞：线程不具备运行条件，正在等待某个事件的出现或完成才会重新进入就绪态
- 终止：线程的执行体执行完毕或者线程被强制结束

![线程的运行状态](/img/Java/MultiThreadState.png)

## 线程命名
创建线程时，如果没有为线程设置名称，则会根据线程的创建顺序，自动生成名称 Thread-0, Thread-1...

```java
public Thread​(Runnable target, String name);    // 创建线程时设置线程名字

class MyThread implements Runnable {
    @Override
    public void run() {
        Thread.currentThread().setName("newName");
        System.out.println(Thread.currentThread().getName());
    }
}

public class Driver {
    public static void main(String[] args) {
        new Thread(new MyThread()).start();
    }
}
```

## 线程礼让
**线程优先级**：Thread 类中定义线程优先级常量，从低到高是 [1,10]，线程在创建时具有默认优先级 5

正在执行的线程，调用 yield()，表示让出这个机会，给与它优先级相同或者更高的线程  
- yield() 是 static native 方法
- 调用 yield() 的线程从运行态转为**就绪态**，而非阻塞态
- yield() 不能保证使得当前正在运行的线程迅速转换到就绪态

## 线程合并
join() 方法可以把指定的线程加入到当前线程，可以将两个交替执行的线程合并为顺序执行的线程

例如，如果在线程 B 的执行过程中，调用了 A.join()，B 进入**阻塞态**，直到线程 A 执行完成后，才会继续执行线程 B

join 实现机制：  
- join 的底层还是调用了 Object 提供的 native 方法 wait
- 唤醒：线程执行完毕了 exit 过程会有一个 notifyAll() 的操作

## 线程休眠
线程运行过程中，可以通过 `sleep()` 方法令其休眠，等时间到了，进⼊**就绪态**（不是直接进入运⾏态）

线程在休眠（即阻塞）的过程中，如果收到 interrupt 信号，会迅速抛出 InterruptedException 异常，可以通过捕获该异常，来停止一个休眠线程

## 线程中断
::: danger 注意
为什么 Thread 中的 stop() 方法被废弃  
- stop() 方法会导致代码逻辑不完整，一旦执行，立刻停止线程，而不管线程逻辑是否完整
- stop() 会引发 ThreadDeath 异常在堆栈中传播，线程释放全部持有的锁，有线程不安全隐患
- 更安全的停止线程的做法，是使用 interrupt()
:::

`interrupt()`：在 A 线程中，调用 B 线程的 interrupt() 方法，会向 B 发出一个中断信号，将中断状态设置为 true，但是**不会真正停止**⼀个线程，只是发送一个中断信号，需要被通知线程，自己决定如何处理

1. 若 B 线程处于阻塞态（Object.wait，Thread.join，Thread.sleep），阻塞函数调用后，会不断地轮询检测中断状态标志是否为 true，如果为 true，则停止阻塞并抛出 InterruptedException 异常，同时重置（reset）中断状态位为 `false`
2. 若 B 线程处于 IO 阻塞态，则中断标记位设为 `true`，同时抛出 ClosedByInterruptException 异常
3. 若 B 线程阻塞在 Selector 选择器中，则中断标记设为 `true`，并且立即从选择操作中返回
4. 其他情况，中断标记位都会被设为 `true`

---
`interrupted()` 和 `isInterrupted()`：都是用来检测线程中断状态的方法，返回 true/false  
- interrupted：静态方法，返回后重置中断状态，内部调用 `currentThread().isInterrupted(true)`
- isInterrupted：检测线程是否被中断，不会重置中断状态

---
```java
// 利用中断，停止非阻塞线程
class MyThread implements Runnable {
    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) {
            System.out.println("do job");
        }
        System.out.println("job done");
    }
}

// 利用中断，停止阻塞线程
class MyThread implements Runnable {
    @Override
    public void run() {
        while (!Thread.currentThread().isInterrupted()) {
            System.out.println("do job");
            try {
                Thread.sleep(20000);
            } catch (InterruptedException e) {
                // 抛出异常后，中断标志位已经被重新设为 false
                // 中断自己，将中断标志位重新设为 true
                Thread.currentThread().interrupt();
            }
        }
        System.out.println("job done");
    }
}

public class Driver {
    public static void main(String[] args) throws Exception {
        Thread thread = new Thread(new MyThread());
        thread.start();
        Thread.sleep(2000);
        thread.interrupt();
    }
}
```

---
参考：

[1] [Java线程中断的理解和正确使用](https://blog.csdn.net/guanfengliang1988/article/details/79238743)

[2] [java多线程 interrupt(), interrupted(), isInterrupted()方法区别](https://www.cnblogs.com/huangyichun/p/7126851.html)

[3] [java中join用法](https://www.cnblogs.com/woniu4/p/8506083.html)

[4] [Java线程中yield与join方法的区别](https://www.cnblogs.com/LittleSpring/p/9676514.html)