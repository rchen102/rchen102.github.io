---
title: Overview
date: 2020-08-19 16:25:00
categories: 
tags:
---

1. 同步/异步 阻塞/非阻塞

阻塞/非阻塞：进程的一种状态，进程由运行态转为就绪态，等待某个事件完成，对于 I/O 来说，主要指的是 I/O 的第一个阶段，等待数据阶段是否需要完全阻塞

同步/非同步：同步即发起某个调用后，进程阻塞，直到调用完成，非同步，即发起某个调用后，进程不阻塞


    [1] https://www.imooc.com/read/82/article/2162

    [2] https://www.zhihu.com/question/382972191/answer/1113293711?utm_source=wechat_session&utm_medium=social&utm_oi=616675994170560512&utm_content=sec

    [3] https://coding.imooc.com/lesson/303.html#mid=22147

2. Java NIO 底层原理
    
    [1] https://www.cnblogs.com/crazymakercircle/p/10225159.html

3. NIO 为什么感觉并没有比 BIO 高效？

    - NIO 本质也是同步阻塞的，最大特点是在于 IO 多路复用
    - TCP 是长连接，在需要维护多个长连接时，BIO 必须要同样数量的线程来与每个长连接交互，但是 NIO 可以在维护多个长连接是，只使用 1 个线程（慕课专栏 04 讲，问答部分）

4. IO 模型中的 NIO 是指 Non-Blocking IO，它确实是同步非阻塞 IO，Java 中的 NIO 指的是 New IO，对应于 IO 模型中的多路复用 IO，它是同步 IO，且两个阶段都是阻塞的


5. Reactor 模式

    [1] https://www.cnblogs.com/crazymakercircle/p/9833847.html
