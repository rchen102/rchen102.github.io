---
title: JVM 内存结构
date: 2020-07-24 16:19:00
categories: 
tags:
---
## 介绍
首先需要注意，「内存结构」和「内存模型（JMM）」是两个不同的概念

JVM 规范将内存结构分成了许多区域，需要注意，这些都是虚拟存在的，便于管理和理解 Java 程序内存

JVM 本身就是一个虚拟的机器，本质就是运行在系统上的一个 JVM 进程，在运行 Java 程序的时候，会将这些区域尽可能分配在硬件的寄存器或缓存上，以达到更高的速度

<div align=center>

![JVM内存映射](/img/Java/JVM内存映射.jpg)

</div>

## 内存结构详解

JVM 执行程序的过程：Java 源码会被编译为字节码文件，然后由 JVM 中的类加载器加载，加载完毕后，交由 JVM 执行引擎执行

整个执行期间，JVM 会用一段空间来管理需要用到的数据和相关信息，这个空间被称为运行时数据区，也即 JVM 内存，本地接口则提供了 Java 与 OS 本地代码互相调用的功能

<div align=center>

<img src="/img/Java/JVM内存结构1.jpg" style="zoom:40%">

</div>

- JVM 内存结构总共分为五个区：程序计数器、虚拟机栈、本地方法栈、堆、方法区
- 其中**黄色**标记区域为线程**私有**，**绿色**区域为线程**共享**
- 不同区域占据大小不同，一般堆最大，程序计数器最小

---
### 程序计数器
PC 每个线程私有，用于记录线程下一条准备执行的字节码位置，保证线程切换恢复后能够继续正确执行

PC 中的值是字节码指令所在的内存地址，即 returnAddress 类型的数据，当线程执行 native 方法时，PC 中的值为 undefined

PC 是 JVM 规范中唯一没有 OutOfMemoryError 的区域

<div align=center>

<img src="/img/Java/PC.png" style="zoom:65%">

</div>

---
### 虚拟机栈
每个线程私有，生命周期与线程相同，每个方法执行时，会在 JVM 栈中创建一个栈帧，用于存储局部变量表，操作数栈，动态连接，方法返回地址

线程请求的栈深度大于 JVM 所允许的深度，将抛出 StackOverflowError，JVM 栈动态扩展时无法申请到足够的内存时会抛出 OutOfMemoryError

<div align=center>

<img src="/img/Java/JVMStack.png" style="zoom:65%">

</div>

- 局部变量表：存放方法参数和局部变量，包括基本数据类型，对象的引用（4 Byte）
- 操作数栈：可以理解为 JVM 栈中的一个用于计算的临时数据存储区，从局部变量表中复制常量或变量写入到操作数栈，再随着计算的进行将栈中元素出栈到局部变量表
- 动态链接：每个栈帧中包含一个在常量池中对当前方法的引用， 目的是支持方法调用过程的动态连接
- 方法返回地址：无论方法是否正常完成，都需要返回到方法被调用的位置，程序才能继续进行

---
### 本地方法栈
JVM 栈为 JVM 执行 Java 方法（也就是字节码）服务，而本地方法栈则为 JVM 使用到的 Native 方法服务，也会抛出 StackOverflowError 和 OutOfMemoryError

HotSpot 直接选择把本地方法栈和 JVM 栈合并实现


---
### 堆
Java 堆被所有线程共享，在 JVM 启动时创建，主要用来存储对象实例本身和数组

堆是 JVM 管理的内存中最大的一块，也是 GC 发生的主要区域，因此也被称为 GC 堆

<div align=center>

<img src="/img/Java/Heap.png" style="zoom:65%">

</div>

- Java 堆的 GC 采用分代收集算法
- 主要分为新生代和老年代，新生代还可以细分为：Eden 空间，S0 空间，S1 空间
- Java 堆可以处于物理空间不连续，只要逻辑上连续即可，因此空间不足时，可以扩展
- 当堆中没有内存完成分配，堆本身也无法扩展时，会抛出 OutOfMemoryError

---
### 方法区
根据 JVM 规范，方法区被所有线程共享，主要存储的就是类的模板（堆存储类的实例）：已被 JVM 加载的类字节码、类的元数据、static-final 常量、static 变量、即时编译（JIT）后的代码等数据

JVM 规范中，方法区在 JVM 启动时创建，虽然方法区是堆的逻辑组成部分，但是别名是 non-heap，因此不要求在方法区实现 GC

JVM 规范只规定了有方法区这个概念和其作用，并没有规定如何去实现它，不同 JVM 有不同的实现方式

**不同版本 HotSpot JVM 方法区**：  
- JDK 1.7 前：采用永久代实现，把 GC 分代收集扩展至了方法区，运行时常量池（包含字符串常量池）也属于方法区
- JDK 1.7 及以后：字符串常量池，从永久代移动到 Java 堆内存， Class 实例（含静态变量）也已经移动到堆内存，符号引用转移到了 native heap 中
- JDK 1.8 及以后：替代永久代，新增元空间，使用本地（native）内存，不再受限于 JVM 本身分配的内存，减少了 OutOfMemoryError 出现的可能


<div align=center>

![JVM内存映射](/img/Java/MethodArea.png)

</div>


---
参考：

[1] [Java内存区域（运行时数据区域）和内存模型（JMM）](https://www.cnblogs.com/czwbig/p/11127124.html)

[2] [程序新视界 | JVM之内存结构详解](https://www.choupangxia.com/2019/10/18/jvm%E4%B9%8B%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84%E8%AF%A6%E8%A7%A3/)

[3] [程序新视界 | Java8 JVM内存结构变了，永久代到元空间](https://www.cnblogs.com/secbro/p/11718987.html)

[4] [JVM——内存模型（三）：堆与方法区](https://blog.csdn.net/Searchin_R/article/details/84972579)