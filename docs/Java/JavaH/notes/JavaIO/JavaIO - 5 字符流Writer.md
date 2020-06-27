---
title: 字符流 - Writer
date: 2020-06-26 09:12:00
categories: 
tags:
---
## 基本介绍
::: tip 字符流 vs 字节流
- 字节流没有缓冲区，是直接输出的
- 字符流是输出到缓冲区，只有调用close()方法关闭缓冲区时，信息才输出
    - 如果想要字符流在未关闭时输出信息，则需要手动调用flush()方法
:::

**1. 定义**
```java
// JDK 1.1
public abstract class Writer
extends Object
implements Appendable, Closeable, Flushable
```

<details>
<summary>Appendable</summary>

```java
// JDK 1.5
public interface Appendable {
    Appendable append​(char c) throws IOException;
    Appendable append​(CharSequence csq) throws IOException;
    Appendable append​(CharSequence csq, int start, int end) throws IOException;
}

```

</details>

**2. 操作方法**  
```java
public void write​(char[] cbuf) throws IOException  // 输出全部字符数组
public abstract void write​(char[] cbuf, int off, int len) throws IOException //部分
public void write​(String str) throws IOException // 输出字符串（重要）
// 输出单个字符，可以使用append
```

## 子类
### FileWriter
继承关系：FileWriter -> OutputStreamWriter -> Writer

```java
// 构造方法
public FileWriter​(File file) throws IOException
public FileWriter​(File file, boolean append) throws IOException
```

## 样例
```java
public static void main(String[] args) {
    // 1. 定义路径
    File file = new File("d:" + File.separator + "demo.txt"); 
    if (!file.getParentFile().exists()) {
        file.getParentFile().mkdirs(); //创建父路径
    }
    // 2. 选择子类实现抽象类 
    Writer out = new FileWriter​(file);
    // 3. 数据输出
    out.write("hello");
    out.append​("hhh");  // 追加
    // 4. 关闭流
    out.close();
}
```