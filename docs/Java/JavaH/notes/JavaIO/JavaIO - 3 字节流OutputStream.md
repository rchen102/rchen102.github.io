---
title: 字节流 - OutputStream
date: 2020-06-25 20:42:00
categories: 
tags:
---
## 基本介绍
**1. 定义**  
```java
// JDK1.0
public abstract class OutputStream
extends Object
implements Closeable, Flushable
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


**2. 操作方法**  
```java
// 1. 输出单个字节数据，使用int代表一个byte
public abstract void write​(int b) throws IOException

// 2. 输出全部字节数组的数据
public void write​(byte[] b) throws IOException

// 3. 输出部分字节数组数据，从off开始，到off + len
public void write​(byte[] b, int off, int len) throws IOException
```

## 子类
### FileOutputStream
```java
// 构造方法
/**
 * append设置为true，则是对原文件进行追加
 */
public FileOutputStream​(File file) throws FileNotFoundException
public FileOutputStream​(File file, boolean append) throws FileNotFoundException
```

## 样例
**操作流的基本流程（以文件为例）**    
- 通过 File 类设定要操作的文件路径
- 通过字节流或者字符流的子类为父类（抽象类）进行对象实例化处理
- 进行读/写的流操作
- IO 流操作属于宝贵资源，需要及时关闭

```java
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