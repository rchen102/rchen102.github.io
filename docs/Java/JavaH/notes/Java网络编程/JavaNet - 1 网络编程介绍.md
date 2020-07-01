---
title: Java 网络编程介绍
date: 2020-06-30 21:00:00
categories: 
tags:
---
## Java 网络编程
Java 原生 JDK 主要支持两个协议：TCP 和 UDP

网络程序开发的模式：  
- C/S（Client/Service）：需要开发两套程序，客户端程序和服务端程序
    + 使用的是私有协议，安全性更高
- B/S（Browse/Service）：只开发服务端程序，客户端使用浏览器访问
    + 主要使用的是公共协议（HTTP），安全性不如 C/S 模式
