---
title: Java笔记1
date: 2019-09-06 10:54:14
categories: Java
tags:
---
## Java基础

### 基本概念
JRE(Java Runtime Environment): Java运行环境，与开发无关，包含JVM和Java类库
JDK(Java Development Kit): Java开发工具，包含另一个JRE，提供更多工具如编译器Javac

### Java的特性
- 面向对象：封装，继承，多态
- 书写一次到处运行(Write Once, Run Anywhere)
- 垃圾收集(Garbage Collection）

### Java的工作方式
源代码(.java) -> Javac编译(.class) -> JVM将字节码转换为机器码并运行

Java的编译不同于C,C++，由编译器Javac编译源码生成的.class文件中实际上是字节码(bytecode)，而非可以直接运行的机器码，JVM通过类加载器(Class-Loader)加载字节码，解释或者执行。
Java通过字节码和JVM实现了跨平台的特性。

> 编译型：源代码直接编译生成可执行的机器码；运行速度快，跨平台性差
> 解释型：由解释器对源代码进行逐行翻译运行；运行速度慢，跨平台性好