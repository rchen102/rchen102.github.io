---
title: 多线程编程1
date: 2020-01-02 16:17:00
categories: 
tags:
---
## 多线程编程
多线程编程属于，**并发编程**，其主要目的是尽可能的发挥硬件的最大性能

并发与并行: 多个CPU的多进程执行属于并行，单CPU的多线程执行属于并发

**三种实现方式**
- 继承`Thread`类
- 实现`Runnable`接口
- 实现`Callable`接口

## Thread类
`java.lang.Thread`是系统定义的一个线程处理类，任何子类只需要继承此类就可以获得线程处理的能力

在继承时，一定要覆写`Thread`类中的`run()`方法，该方法将作为一个线程启动的「主方法」存在

```java
class MyThread extends Thread {
    private String name;
    public MyThread(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(this.name + ": i=" + i);
        }
    }
}

class Test {
    public static void main(String[] args) {
        MyThread threadA = new MyThread("a");
        threadA.start();    // 继承自Thread的start()方法
    }
}
```

### start()方法
多线程执行需要底层操作系统提供支持，因此不能通过实例化对象直接调用`run()`方法，需要依赖`start()`方法获得硬件支持来启动线程

`start()`方法可能抛出`IllegalThreadStateException`异常，该异常继承`RuntimeException`，属于非强制性处理异常，由用户选择性处理，此异常在线程被重复启动时抛出

`start()`方法里调用了`start0()`方法，该方法没有方法体，但是使用了`native`的关键字来定义，表示此操作将交由底层实现(JVM实现，JVM负责匹配不同OS的底层函数)

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

## Runnable接口
除了通过继承`Thread`实现多线程，也可以通过实现`java.lang.Runnable`接口

`Runnable`接口里同样存在`run()`方法，作为线程的主方法存在，但是不同于继承`Thread`类，此时缺少用于启动线程的`start()`方法,

可以通过`Thread`构造方法: `public Thread(Runnable target)`间接启动线程

这种实现避免了继承所带来的单继承限制，同时`JDK1.8`之后，`Runnable`成为了一个函数式接口，因此可以使用Lambda表达式简化代码

```java
@FunctionalInterface
public interface Runnable {
    public void run();
}

class MyThread implements Runnable {
    private String name;
    public MyThread(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(this.name + ": i=" + i);
        }
    }
}

class Test {
    public static void main(String[] args) {
        MyThread threadA = new MyThread("a");
        new Thread(threadA).start();
        // Or using Lambda
        new Thread(() -> {
            for (int i = 0; i < 50; i++) {
                System.out.println("Hi");
            }
        }).start();
    }
}
```

### Thread类与Runnable接口关系 （后续需要加深理解）
- `Thread`类也实现了`Runnable`接口
- `Runnable`接口更方便描述资源共享的概念

多线程的实现主要依靠`Runnable`来定义核心的业务逻辑，所有关于线程的描述都通过`Thread`类定义

## Callable接口
`Runnable`接口存在一个问题，即`run()`方法没有返回值，因此从`JDK1.5`开始提供了`Callable`接口(`java.util.concurrent`包)

`Callable`的启动一样需要`Thread`类，为什么的原因在于以下类关系

![Callable相关类关系](/img/Java/Callable.png)

```java
@FunctionalInterface
public interface Callable<V> {
    public V call() throws Exception;
}

class MyThread implements Callable<String> {
    private String name;
    public MyThread(String name) {
        this.name = name;
    }

    @Override
    public String call() throws Exception {
        for (int i = 0; i < 50; i++) {
            System.out.println(this.name + ": i=" + i);
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

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)