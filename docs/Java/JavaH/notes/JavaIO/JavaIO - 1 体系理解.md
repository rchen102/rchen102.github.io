---
title: Java IO 体系的理解思路
date: 2020-02-12 15:07:00
categories: 
tags:
---
## 理解思路
**1. IO 流**  
Java IO 体系是为了处理 IO 相关操作，提供程序与外部设备的交互方式，主要使用场景是**网络**和**磁盘**。计算机与外界设备进行数据交换是通过数据线中的比特流（bit）来完成的，这也是称为 IO 流的原因

核心组成：一个类（File），一个接口（Serializable），四个抽象类（InputStream，OutputStream，Reader，Writer）

**2. 字节流**  
字节（Byte）是比比特更有意义的单位，**字节流是最最基本的流**，提供了两个顶层抽象类，用于表示所有的输入和输出： InputStream，OutputStream

当需要针对具体系统进行操作时，比如文件系统，就需要具体的对文件系统操作的 **IO 实现类**，这就是 FileInputStream，FileOutputStream （这里展现了 Java IO 设计的**开闭原则**，按照面向对象的思想来理解，未来可能还需要字节流来操作别的设备，那么可以继续拓展出类似 RobotInputStream）

**3. 字符流**  
此外，在进行文件处理时，文件分为**二进制文件**和**文本文件**，字节流可以用来处理二进制文件（图片，MP3，视频，PDF），文本文件就需要字符流来处理，Java 采用 Unicode 编码，每个字符占用 2 个 Byte

两个顶层字符流抽象类：Reader 和 Writer


**4. 转换流**  
为了方便字节流与字符流的转换处理，提供有两个类（非抽象类）  
- InputStreamReader：字节流 -> 字符流，继承 Reader 
- OutputStreamWriter：字符流 -> 字节流，继承 Writer

<details>
<summary>点击查看图片</summary>

<div align=center>

![字符流](/img/Java/Input-Output-Stream.png)

</div>

</details>

**5. 处理流**  
我们将 InputStream/OutputStream 的具体实现子类称为**节点流**（直接与数据源相连，读入或读出），在节点流的基础上，套接在节点流上的就是**处理流**，主要用于增加新的功能，如

- **缓冲流**：原始的字节流使用起来并不高效，每个字节的读写操作都会调用底层系统 API，而带缓冲区的流对象，可以一次读写一个缓冲区，提高效率，这就是 BufferedInputStream，BufferedOutputStream

- **基本类型数据流**：字节流只能操作字节，对于多个字节的基本类型数据操作起来不方便，因此可以对其功能进行增强，支持按照基本数据类型（int、boolean、long）来读取数据，这就是 DataInputStream，DataOutputStream

<details>
<summary>Buffer 和 Cache</summary>

- Cahce：弥补高速设备和低速设备的鸿沟，引入的中间层
    + CPU 和 Memory 之间存在多级 Cache
- Buffer：进行流量整形，把突发的大量小规模 IO，整理成平稳的小数量大规模 IO，减少响应次数
    + 可以与特定的存储设备相连，如磁盘

</details>


**6. 可以直接使用的工具类**  
对于文件系统的 IO 操作可以说是最常见的操作了，因此 JDK 提供了 FileReader 和 FileWriter 这两个流对象，可以直接将文件转换成字符流，省去了创建字节流，再套上转换流的过程，它们的顶层抽象类 Reader 和 Writer 代表了人类可读可写的字符流，同理也有更高效的，带缓冲区的 BufferedReader 和 BufferedWriter

<div align=center>

<img src="/img/Java/JavaIO.png" style="zoom:80%">

</div>



## 参考  
[1] [知乎](https://www.zhihu.com/question/67535292/answer/1248887503)
