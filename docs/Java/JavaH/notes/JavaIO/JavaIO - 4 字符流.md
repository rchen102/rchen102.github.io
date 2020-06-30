---
title: 字符流
date: 2020-06-26 09:12:00
categories: 
tags:
---
## Writer
```java
// 定义 since JDK 1.1
public abstract class Writer
extends Object
implements Appendable, Closeable, Flushable

// 基本操作
public void write​(char[] cbuf) throws IOException  // 输出全部字符数组
public abstract void write​(char[] cbuf, int off, int len) throws IOException //部分
public void write​(String str) throws IOException // 输出字符串（重要）
// 输出单个字符，可以使用append
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

**代码样例**

<details>
<summary>点击查看</summary>

```java
// 实现类 继承关系：FileWriter -> OutputStreamWriter -> Writer
public FileWriter​(File file) throws IOException
public FileWriter​(File file, boolean append) throws IOException

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

</details>

## Reader
```java
// 定义 since JDK1.1
public abstract class Reader
extends Object
implements Readable, Closeable

// 基本操作
public int read() throws IOException // 读取一个字符
public int read​(char[] cbuf) throws IOException // 读取内容到字符数组
public abstract int read​(char[] cbuf, int off, int len) throws IOException
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

**代码样例**

<details>
<summary>点击查看</summary>

```java
// 实现类 继承关系：FileReader -> InputStreamReader -> Reader
public FileReader​(File file) throws FileNotFoundException

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

</details>