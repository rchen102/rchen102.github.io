---
title: 多线程编程2
date: 2020-01-06 16:26:00
categories: 
tags:
---
## 线程的运行状态
线程的运行状态与进程类似，也分为创建，就绪，阻塞和执行

- 创建: 开发者定义好了相关的线程类对象，每一个`Thread`类的实例都表示一个线程对象
- 就绪: 线程的启动依赖`start()`方法，但调用该方法时，线程并非立即执行
- 执行: 当CPU调度某线程对象后，该线程对象开始执行`run()`或`call()`方法
- 阻塞: 线程不具备运行条件，正在等待某个事件的出现或完成才会重新进入就绪态
- 终止: 线程的执行体执行完毕或者线程被强制结束

![线程的运行状态](/img/Java/MultiThreadState.png)

## 线程的命名和取得
创建线程时，如果没有为线程设置名称，则会自动根据线程的创建顺序，生成一个名称`Thread-0, Thread-1, Thread-2, ...`

```java
public Thread​(Runnable target, String name);    // 接收Runnable及线程名称
public final void setName​(String name);         // 设置，修改名字（不推荐随意修改名称）
public final String getName();                  // 获取线程名称

public static Thread currentThread();           // 获取当前正在执行的线程对象
```

主方法的执行在Java程序里都是以主线程(`main`)的形式运行的

实际上，当用户使用Java命令执行解释一个类时，会自动启动一个`JVM`的进程，在该进程执行的时候，会默认启动一个主线程，而后由主线程创建若干子线程，所有线程并行执行

```java
public static void main(String[] args) {
    System.out.println(Thread.currentThread().getName()); 
    /* Output:
     * main
     */
}
```

## 线程休眠
通常线程启动后，会「持续」的运行(不代表不间断，需要考虑CPU调度)，直到其运行完毕为止，也可以通过`sleep()`方法令其休眠一段时间

```java
public static void sleep​(long millis) throws InterruptedException;
public static void sleep​(long millis, int nanos) throws InterruptedException;
```

## 线程中断
注意到`sleep()`方法可能会抛出`InterruptedException`，即表示中断异常

`Thread`类中提供有以下中断处理操作方法，线程一旦被中断，一定会引发线程中断异常

```java
public void interrupt();            // 中断该线程
public boolean isInterrupted();     // 测试该线程是否被中断
```



