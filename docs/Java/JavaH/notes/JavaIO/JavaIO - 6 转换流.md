---
title: 转换流
date: 2020-06-29 10:03:00
categories: 
tags:
---
## 基本介绍
### 1. OutputStreamWriter
```java
// 定义 since JDK1.1
public class OutputStreamWriter
extends Writer

// 基本操作
public OutputStreamWriter​(OutputStream out)

// 基本操作
public void write​(int c) throws IOException // 用 int 代表 char
public void write​(char[] cbuf, int off, int len) throws IOException
public void write​(String str, int off, int len) throws IOException

```

### 2. InputStreamReader
```java
/// 定义 since JDK1.1
public class InputStreamReader
extends Reader

// 构造方法
public InputStreamReader​(InputStream in)

// 基本操作
public int read() throws IOException // 读入一个字符
public int read​(char[] cbuf, int offset, int length) throws IOException

```

<details>
<summary>代码样例</summary>

```java
public static void main(String[] args) {
    // 1. 定义路径
    File file = new File("d:" + File.separator + "demo.txt"); 
    if (!file.getParentFile().exists()) {
        file.getParentFile().mkdirs(); //创建父路径
    }
    // 2. 选择子类实现抽象类 
    OutputStream output = new FileOutputStream​(file);  // 字节流
    Writer out = new OutputStreamWriter(output);       // 字符流
    // 3. 数据的输出，此时可以直接输出字符
    out.write("hello"); // output.write("hello".getBytes());
    // 4. 关闭流
    out.close();
}
```

</details>

## 说明
转换流一般在系统类库的操作中比较常见，通常不会直接使用，除非有特定需要

以文件操作为例，一般无需像代码样例中，先创建字节流，再套上转换流，而是直接使用提供的工具类：FileWriter，FileReader。如果查看源码可以知道，工具类实际所做的正是代码样例的过程，即创建 FileOutputStream​ 实例化 OutputStream，再使用 OutputStreamWriter 将 OutputStream 转换为 Writer