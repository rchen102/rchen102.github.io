---
title: 字节流
date: 2020-06-25 20:42:00
categories: 
tags:
---
## OutputStream
```java
// 定义 since JDK1.0
public abstract class OutputStream
extends Object
implements Closeable, Flushable

// 基本操作
// 输出一个 byte 字节，用int代表byte
public abstract void write​(int b) throws IOException
// 输出全部字节数组的数据
public void write​(byte[] b) throws IOException
// 输出部分字节数组数据，从off开始，到off + len
public void write​(byte[] b, int off, int len) throws IOException
```

<details>
<summary>Closeable 和 Flushable</summary>

```java
/**
 * 实现了AutoCloseable接口的类的对象，可以由带资源的try语句实现资源自动释放
 * JDK 1.7 开始，Closeable扩展了AutoCloseable
 * 因此所有实现 Closeable 的接口也都可以使用try语句
 * Closeable JDK1.5
 */
public interface Closeable extends AutoCloseable {
    public void close() throws IOException;
}

/** 手动刷新缓冲区
 * 字节流没有缓冲区，是直接输出的，而字符流是输出到缓冲区的 
 * 字符流只有在调用close()方法关闭缓冲区时，信息才输出
 * 如果想要字符流在未关闭时输出信息，则需要手动调用flush()方法
 * Flushable JDK1.5
 */
public interface Flushable {
    public void flush() throws IOException; 
}
```
</details>

**操作流的基本流程（以文件为例）**    
- 通过 File 类设定要操作的文件路径
- 通过字节流或者字符流的子类为父类（抽象类）进行对象实例化处理
- 进行读/写的流操作
- IO 流操作属于宝贵资源，需要及时关闭

**代码样例**

<details>
<summary>点击查看</summary>

```java
// 实现类
public FileOutputStream​(File file) throws FileNotFoundException
public FileOutputStream​(File file, boolean append) throws FileNotFoundException

public static void main(String[] args) {
    // 1. 定义路径
    File file = new File("d:" + File.separator + "demo.txt"); 
    if (!file.getParentFile().exists()) {
        file.getParentFile().mkdirs(); //创建父路径
    }
    // 2. 选择子类实现抽象类 
    OutputStream fos = new FileOutputStream​(file);
    // 3. 实现数据的输出，数据的输出需要将内容变为字节数组
    fos.write("hello".getBytes());
    // 4. 关闭流
    fos.close();
}
```

</details>


## InputStream
```java
// 定义 since JDK1.0
public abstract class InputStream
extends Object
implements Closeable

// 基本操作
// 读取单个字节数据
public abstract int read() throws IOException
// 将内容读取到字节数组之中，返回读取数据个数，-1表示没有数据
public int read​(byte[] b) throws IOException
// 读取部分内容到字节数组，返回读取数据个数
public int read​(byte[] b, int off,int len) throws IOException
/** JDK1.9新方法，返回全部的字节数据
 * 可能出现 OutOfMemoryError（读入的数据太大，超过内存限制，最好不要使用）
 */
public byte[] readAllBytes() throws IOException
```

**代码样例**

<details>
<summary>点击查看</summary>

```java
// 实现类
public FileInputStream​(File file) throws FileNotFoundException

public static void main(String[] args) {
    // 1. 定义路径
    File file = new File("d:" + File.separator + "demo.txt"); 
    if (file.exists()) {
        // 2. 选择子类实现抽象类 
        InputStream fis = new FileInputStream​(file);
        byte[] data = new byte[1024]; // 开辟一个字节数组进行数据读取
        // 3. 实现数据的输入，将数据读入字节数组
        int len = fis.read(data); // 数组可能未装满，需要部分转换为字符串
        System.out.println(new String(data, 0, len));  
        // 4. 关闭流
        fis.close();
    }
}

```

</details>