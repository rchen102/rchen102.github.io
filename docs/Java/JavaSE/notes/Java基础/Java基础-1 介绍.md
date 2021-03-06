---
title: 介绍
date: 2019-09-06 10:54:14
categories: 
    - [Java, Java基础]
tags:
---
## Java特性
1. 面向对象: 封装，继承，多态
2. 可移植性: JVM -> 书写一次到处运行（Write Once, Run Anywhere） 
3. 垃圾回收（Garbage Collection）: 自动实现垃圾的释放，以及内存空间的回收
4. 引用传递: 避免了指针操作，使用了更为简单的引用传递就行处理
5. 多线程编程支持
6. 适合分布式计算: 本质是为网络开发而准备的

## Java运行
    源代码(.java) -> Javac 编译(.class) -> JVM 解释或编译执行字节码

**跨平台的特性**：通过字节码和 JVM 实现，Java 的编译不同于`C`,`C++`，由编译器`Javac`编译源码生成的`.class`文件中实际上是字节码(`bytecode`)，而非可以直接运行的机器码，JVM 通过类加载器(`Class-Loader`)加载字节码，解释或者编译执行

[**即时编译**](https://blog.csdn.net/qq_36042506/article/details/82976586)（Just In Time）：早期 Java 还算是解释型语言，但是在拥有 JIT 的 JVM 环境下，Java 已经不再严格是解释型了。JVM 会将执行频率高的方法或语句块通过 JIT 编译成本地机器码，提高代码执行效率

::: tip 提示
编译型：源代码直接编译生成可执行的机器码；运行速度快，跨平台性差  
解释型：由解释器对源代码进行逐行翻译运行；运行速度慢，跨平台性好

静态类型：编译时变量的数据类型即确定，多数要求在使用变量前必须声明数据类型(Java,C,C++)  
动态类型：运行时确定数据类型的语言，变量使用之前不需要类型声明(Python, JS, Ruby)

强类型: 一旦变量的类型被确定，就不能转化的语言(Java, Python)  
弱类型: 偏向于容忍隐式类型转换(C, C++, JS)
:::

<div align=center>

![不同类型语言](/img/Java/language.jpg)

</div>

## Java规范
1. 一个源文件（`.java`）只能有一个 public 类，且类名与源文件名保持一致
2. 一个源文件（`.java`）可以有多个非 public 类（实际上就是`default`权限，只允许同一个包下的类访问），编译时会每个类会生成自己的`.class`文件
3. 主方法：程序的入口 `public static void main(String[] args)`
4. 三种注释方法

```java
// 单行注释

/* 
 多行注释
 (不常用)
*/

/**
 * 文档注释
 */
```

## Java基本概念
1. JRE（Java Runtime Environment）：Java 运行环境，与开发无关，包含 JVM 和 Java 类库  
2. JDK（Java Development Kit）：Java 开发工具，包含另一个 JRE，提供更多工具如编译器 Javac  
3. JVM（Java Virtual Machine）： Java 虚拟机，是程序与操作系统之间的过渡，针对虚拟机开发，无需关注操作系统细节  

## Java开发方向
1. Java 标准开发（SE）：JDK 提供的就是单机程序开发支持
2. Java 企业级开发（EE）：构建分布式的企业系统平台
3. Java 嵌入式开发（ME）：微型 Java 程序开发，在移动设备上植入 JVM，后被 Android 替代


## 其他
1. `CLASSPATH`：JVM 执行时所需要的环境属性，用于定义类的加载路径
2. `PATH`：操作系统定义的环境属性，用于指定所有可执行程序的目录

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)