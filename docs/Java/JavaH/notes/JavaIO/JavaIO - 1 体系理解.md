---
title: Java IO 体系的理解思路
date: 2020-02-12 15:07:00
categories: 
tags:
---
## 理解思路
Java IO 体系是为了处理 IO 相关操作，提供程序与外部设备的交互方式，主要使用场景是**网络**和**磁盘**

**核心组成**：一个类（File），一个接口（Serializable），四个抽象类（InputStream，OutputStream，Reader，Writer）

**输入输出的本质是字节流（Byte）**，因此提供了两个顶层抽象类，用于表示所有的输入和输出： InputStream，OutputStream

当需要针对具体系统进行操作时，比如文件系统，就需要具体的对文件系统操作的 **IO 实现类**，这就是 FileInputStream，FileOutputStream （这里展现了 Java IO 设计的**开闭原则**，按照面向对象的思想来理解，未来可能还需要字节流来操作别的设备，那么可以继续拓展出类似 RobotInputStream）

在使用字节流进行输入输出操作时，会发现**原始的字节流对象**用起来**并不高效**，每个字节的读写操作都会调用底层系统 API，因此产生了**带缓冲区的流对象**，可以一次读写一个缓冲区，大大提高效率，这就是 BufferedInputStream，BufferedOutputStream

此外，在进行文件处理时，文件分为**二进制文件**和**文本文件**，字节流可以用来处理二进制文件（图片，MP3，视频，PDF），文本文件就需要字符流来处理，因此就有了字符流和字节流的**转换流**：InputStreamReader，OutputStreamWriter

对于文件系统的 IO 操作可以说是最常见的操作了，因此 JDK 提供了 FileReader 和 FileWriter 这两个流对象，可以直接将文件转换成字符读取、写入流，省去了创建字节流，再套上转换流的过程，它们的顶层抽象类 Reader 和 Writer 代表了人类可读可写的字符流，同理也有更高效的，带缓冲区的 BufferedReader 和 BufferedWriter

## 参考  
[1] [知乎](https://www.zhihu.com/question/67535292/answer/1248887503)
