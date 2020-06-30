---
title: Java IO 中的装饰者模式
date: 2020-06-29 20:38:00
categories: 
tags:
---
## 装饰者模式
Java IO 体系设计中采用了设计模式中的装饰者模式，具有良好的拓展性

对应的设计（只以字节流为例，字符流类似）  
- 抽象组件类：InputStream
- 抽象装饰器：FilterInputStream
- 具体组件（节点流）：FileInputStream，ByteArrayInputStream，PipedInputStream
- 具体装饰器（处理流）：BufferedInputStream，DataInputStream，PrintStream

**为什么需要 FilterInputStream**：大部分函数如 read() 在 InputStream 中已经实现，如果没有 FilterInputStream，那么在每一个具体装饰器的实现中，都需要重新实现一遍这些方法（简单包裹 InputStream 对象进行函数调用），而增加这么一个抽象装饰器后，只需要在 FilterInputStream 中重新实现一次即可，**避免了大量重复代码**


## 基本介绍
```java
// 定义 since JDK 1.0
public class FilterInputStream
extends InputStream

public class BufferedInputStream
extends FilterInputStream
```
