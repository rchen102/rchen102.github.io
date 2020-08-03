---
title: Java 编程 - 实现多线程
date: 2020-07-15 16:09:00
categories: 
tags:
---
**创建多线程主要有 3 个方法**
- 继承 Thread 类
- 实现 Runnable 接口
- 实现 Callable 接口

## Thread
Thread 是系统定义的一个线程处理类，任何子类只需要继承此类就可以获得线程处理的能力

Thread 继承了 Runnable 接口，子类继承 Thread 时，需要覆写 run() 方法，该方法将作为一个线程的「主方法」存在

<details>
<summary>代码样例</summary>

```java
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(i);
        }
    }
}

class Test {
    public static void main(String[] args) {
        MyThread threadA = new MyThread();
        threadA.start();    // 继承自Thread的start()方法
    }
}
```

</details>


## Runnable
Runnable 接口里同样存在 run() 方法，作为线程的主方法存在，但是缺少用于启动线程的 start() 方法

需要通过 `public Thread(Runnable target)` 间接启动线程

这种实现避免了继承所带来的单继承限制，同时 JDK1.8 之后，Runnable 成为了一个函数式接口，可以使用 Lambda 表达式简化代码

<details>
<summary>代码样例</summary>

```java
@FunctionalInterface
public interface Runnable {
    public void run();
}

class MyThread implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(i);
        }
    }
}

class Test {
    public static void main(String[] args) {
        MyThread threadA = new MyThread();
        new Thread(threadA).start();
        // Or using Lambda
        new Thread(() -> {
            for (int i = 0; i < 50; i++) {
                System.out.println(i);
            }
        }).start();
    }
}
```

</details>


## Callable
当前还存在一个问题，即 run() 方法没有返回值，从 JDK 1.5 开始提供的 Callable 接口可以解决

需要 FutureTask 和 Thread 协助启动线程并最终获得返回值，相关类关系如图

![Callable相关类关系](/img/Java/Callable.png)

<details>
<summary>代码样例</summary>

```java
@FunctionalInterface
public interface Callable<V> {
    public V call() throws Exception;
}

class MyThread implements Callable<String> {
   
    @Override
    public String call() throws Exception {
        for (int i = 0; i < 50; i++) {
            System.out.println(i);
        }
        return "Done";
    }
}

class Test {
    public static void main(String[] args) throws Exception {
        Callable<String> callA = new MyThread("a");
        FutureTask<String> futureA = new FutureTask<>(callA);
        new Thread(futureA).start();
        System.out.println("Results= " + futureA.get());
    }
}
```

</details>


## run() 和 start() 方法
- `run()`：如果直接执行，则只是作为一个普通方法运行，无法创建新的线程
- `start()`：创建新的线程，并将线程置于就绪态，等到获取 CPU 时间片，就开始执行 run() 方法

start() 方法里调用了 start0() 方法，该方法没有方法体，但是使用了 native 的关键字修饰，表示此操作将交由底层实现（JVM 实现，JVM 负责匹配不同 OS 的底层函数）

<details>
<summary>点击查看 start()</summary>

```java{3,7}
public synchronized void start() {
   if (threadStatus != 0)
       throw new IllegalThreadStateException();
   group.add(this);
   boolean started = false;
   try {
       start0();
       started = true;
   } finally {
       try {
           if (!started) {
               group.threadStartFailed(this);
           }
       } catch (Throwable ignore) {
           /* do nothing. If start0 threw a Throwable then
             it will be passed up the call stack */
       }
   }
}

private native void start0();
```

</details>
