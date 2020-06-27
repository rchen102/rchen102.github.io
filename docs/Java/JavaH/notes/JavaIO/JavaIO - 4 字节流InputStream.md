---
title: 字节流 - InputStream
date: 2020-06-25 20:42:00
categories: 
tags:
---
## 基本介绍
**1. 定义**
```java
// JDK1.0
public abstract class InputStream
extends Object
implements Closeable
```

**2. 操作方法**
```java
// 读取单个字节数据
public abstract int read() throws IOException

/** 将内容读取到字节数组之中，返回读取数据个数
 * 如果没有数据，返回 -1
 */ 
public int read​(byte[] b) throws IOException

// 读取部分内容到字节数组，返回读取数据个数
public int read​(byte[] b, int off,int len) throws IOException

/** JDK1.9新方法，返回全部的字节数据
 * 可能出现 OutOfMemoryError（读入的数据太大，超过内存限制，最好不要使用）
 */
public byte[] readAllBytes() throws IOException
```

## 子类
### FileInputStream
```java
// 构造方法
public FileInputStream​(File file) throws FileNotFoundException
```

## 样例
```java
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