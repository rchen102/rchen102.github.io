---
title: 内存流
date: 2020-06-29 13:41:00
categories: 
tags:
---
## 介绍
文件操作流是以文件为终端进行输入输出操作，内存流即以内存为终端进行操作。虽然也称为流对象，但是数据不出内存，所以 close() 方法可有可无

java.io 中对于内存操作流提供有两类支持  
- 字节内存流：ByteArrayOutputStream，ByteArrayInputStream
- 字符内存流：CharArrayWriter, CharArrayReader

内存流主要作用在于提供了字节/字符数组与流的转换，类似一个包装（Wrapper）类，让一些只能处理流的组件可以使用

例如有些方法只接收 InputStream/OutputStream 而不关心流的实现是 ByteArrayInputStream 还是 FileInputStream

## 字节内存流
### 1. ByteArrayOutputStream  
```java
// 定义 since JDK1.0
public class ByteArrayOutputStream
extends OutputStream

// 构造方法 
// 在内存中创建一个字节数组缓冲区，所有发送到输出流的数据保存在该字节数组缓冲区中
public ByteArrayOutputStream() // buffer 默认大小 32 bytes，会自动扩容
public ByteArrayOutputStream​(int size)

// 基本方法
public void write​(int b)
public void write​(byte[] b, int off, int len)
public void writeBytes​(byte[] b)
public void writeTo​(OutputStream out) throws IOException

public byte[] toByteArray() // buffer content -> byte[]
public String toString()    // buffer content -> String
```

### 2. ByteArrayInputStream 
```java
// 定义 since JDK1.0
public class ByteArrayInputStream
extends InputStream

// 构造方法
public ByteArrayInputStream​(byte[] buf)
public ByteArrayInputStream​(byte[] buf, int offset, int length)

// 基本方法
public int read()
public int read​(byte[] b, int off, int len)
```

**代码样例**

<details>
<summary>点击查看</summary>

```java
// 字符串大小写转换
public static void main(String[] args) {
    InputStream input = new ByteArrayInputStream​("hello".getBytes());
    OutputStream output = new ByteArrayOutputStream();
    int data = 0;
    while ((data = input.read()) != -1) {
        output.write​(Character.toUpperCase(data));
    }
    System.out.println(output.toString());
}

// JDK1.9 byte[] readAllBytes() 的实现
public static byte[] readAllBytes() {
    InputStream input = new FileInputStream(new File("d:\\hello.txt"));
    ByteArrayOutputStream output = new ByteArrayOutputStream();
    byte[] data = new byte[1024];
    int len = 0;
    while ((len = input.read(data)) != -1) {
        output.write​(data, 0, len);
    }
    return output.toByteArray();
}
```

</details>

## 字符内存流
```java
// 定义 since JDK1.1
public class CharArrayWriter
extends Writer

public class CharArrayReader
extends Reader
```