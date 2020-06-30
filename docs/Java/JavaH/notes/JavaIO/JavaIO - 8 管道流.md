---
title: 管道流
date: 2020-06-29 15:18:00
categories: 
tags:
---
## 介绍
Java 管道流提供了**线程与线程**间的通信，需要完毕需要关闭 close() 释放资源

这个设计存在一定问题：通常，进程与进程之间资源不共享，因此管道（pipe）是一种进程与进程间通信方式（IPC），同一进程的不同线程可以共享资源，本来无需管道通信

java.io 中对于管道流提供有两类支持：
- 字节管道流：PipedOutputStream，PipedInputStream
- 字符管道流：PipedWriter, PipedReader

## 字节管道流
### 1. PipedOutputStream 
```java
// 定义 since JDK1.0
public class PipedOutputStream
extends OutputStream

// 构造方法 
public PipedOutputStream() // not yet connected to a piped input stream
public PipedOutputStream​(PipedInputStream snk) throws IOException

// 基本方法
public void connect​(PipedInputStream snk) throws IOException
public void write​(int b) throws IOException
public void write​(byte[] b, int off, int len) throws IOException
public void flush() throws IOException
```

### 2. PipedInputStream
```java
// 定义 since JDK1.0
public class PipedInputStream
extends InputStream

// 构造方法
public PipedInputStream() //  not yet connected
public PipedInputStream​(int pipeSize)
public PipedInputStream​(PipedOutputStream src) throws IOException

// 基本方法
public void connect​(PipedOutputStream src) throws IOException
public int read() throws IOException
public int read​(byte[] b, int off, int len) throws IOException
```

**代码样例**

<details>
<summary>点击查看</summary>

```java
class SendThread implements Runnable {
    private PipedOutputStream output = new PipedOutputStream();

    @Override
    public void run() {
        try {
            this.output.write("hello".getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public PipedOutputStream getOutput() {
        return output;
    }
}

class ReceiveThread implements Runnable {
    private PipedInputStream input = new PipedInputStream();

    @Override
    public void run() {
        byte[] data = new byte[1024];
        try {
            int len = this.input.read(data);
            System.out.println("[Receive] " + new String(data, 0, len));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public PipedInputStream getInput() {
        return input;
    }
}

public class Driver {
    public static void main(String[] args) {
        SendThread sender = new SendThread();
        ReceiveThread receiver = new ReceiveThread();
        try {
            sender.getOutput().connect(receiver.getInput());
            new Thread(sender).start();
            new Thread(receiver).start();
        } catch (IOException e) {
            e.printStackTrace();
        } 
    }
}
```

</details>

## 字符管道流
```java
// 定义 since JDK1.1
public class PipedWriter
extends Writer

public class PipedReader
extends Reader
```