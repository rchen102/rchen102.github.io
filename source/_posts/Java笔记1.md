---
title: Java笔记1
date: 2019-09-06 10:54:14
categories: Java
tags:
---
## Java基础
__目录__
Java特性
Java运行
Java基本概念
Java开发方向
其他

__参考__
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)

### Java特性
1. 面向对象: 封装，继承，多态
2. 可移植性: JVM -> 书写一次到处运行(Write Once, Run Anywhere) 
3. 垃圾回收(Garbage Collection): 自动实现垃圾的释放，以及内存空间的回收
4. 引用传递: 避免了指针操作，使用了更为简单的引用传递就行处理
5. 多线程编程支持
6. 适合分布式计算: 本质是为网络开发而准备的

### Java运行
    源代码(.java) -> Javac编译(.class) -> JVM将字节码转换为机器码并运行

1. Java的编译不同于`C`,`C++`，由编译器`Javac`编译源码生成的`.class`文件中实际上是字节码(bytecode)，而非可以直接运行的机器码，JVM通过类加载器(Class-Loader)加载字节码，解释或者执行

2. Java通过字节码和JVM实现了跨平台的特性。

> 编译型：源代码直接编译生成可执行的机器码；运行速度快，跨平台性差
> 解释型：由解释器对源代码进行逐行翻译运行；运行速度慢，跨平台性好
> 
> 静态类型：编译时变量的数据类型即确定，多数要求在使用变量前必须声明数据类型(Java,C,C++)
> 动态类型：运行时确定数据类型的语言，变量使用之前不需要类型声明(Python, JS, Ruby)
> 
> 强类型: 一旦变量的类型被确定，就不能转化的语言(Java, Python)
> 弱类型: 偏向于容忍隐式类型转换(C, C++, JS)

<!-- more -->

![不同类型语言](Java笔记1/language.jpg)

### Java基本概念
1. JRE(Java Runtime Environment): Java运行环境，与开发无关，包含JVM和Java类库  
2. JDK(Java Development Kit): Java开发工具，包含另一个JRE，提供更多工具如编译器Javac  
3. JVM(Java Virtual Machine): Java虚拟机，是程序与操作系统之间的过渡，针对虚拟机开发，无需关注操作系统细节  

### Jvaa开发方向
1. Java标准开发(SE): JDK提供的就是单机程序开发支持
2. Java嵌入式开发(ME): 微型Java程序开发，在移动设备上植入JVM，后被Android替代
3. Java企业级开发(EE): 构建分布式的企业系统平台

### 其他
1. CLASSPATH: JVM执行时所需要的环境属性，用于定义类的加载路径
2. PATH: 操作系统定义的环境属性，用于指定所有可执行程序的目录
