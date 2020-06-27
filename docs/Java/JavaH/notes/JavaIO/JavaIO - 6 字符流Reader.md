---
title: 字符流 - Reader
date: 2020-06-26 09:12:00
categories: 
tags:
---
## 基本介绍
**1. 定义**
```java
// JDK1.1
public abstract class Reader
extends Object
implements Readable, Closeable
```

<details>
<summary>Readable</summary>

```java
// JDK1.5
// CharBuffer 属于 java.nio 包下，JDK1.4后提出
public interface Readable {
    int read​(CharBuffer cb) throws IOException;
}

```

</details>

**2. 操作方法**  
```java
public int read() throws IOException // 读取一个字符
public int read​(char[] cbuf) throws IOException // 读取内容到字符数组
public abstract int read​(char[] cbuf, int off, int len) throws IOException
```

## 子类
### FileReader
继承关系：FileReader -> InputStreamReader -> Reader

```java
// 构造方法
public FileReader​(File file) throws FileNotFoundException
```

## 样例
```java
public static void main(String[] args) {
    // 1. 定义路径
    File file = new File("d:" + File.separator + "demo.txt"); 
    if (file.exists()) {
        // 2. 选择子类实现抽象类 
        Reader in = new FileReader​(file);
        char[] data = new char[1024];
         // 3. 实现数据的输入，将数据读入字符数组
        int len = in.read(data); // 数组可能未装满，需要部分转换为字符串
        System.out.println(new String(data, 0, len));  
        // 4. 关闭流
        in.close();

        // try-with-resource
        try (Reader in = new FileReader​(file)) {
            char[] data = new char[1024];
            int len = in.read(data);
            System.out.println(new String(data, 0, len));  
        } catch (Exception e) {
        }
    }
}
```