---
title: TCP 编程
date: 2020-06-30 21:09:00
categories: 
tags:
---
## 介绍
针对 TCP 协议，java.net 主要提供了两个类：ServerSocket 和 Socket

这两个类继承了 Closeable 接口，也属于系统资源，使用后需要关闭

```java
// 定义 since JDK1.0
public class Socket
extends Object
implements Closeable

public class ServerSocket
extends Object
implements Closeable
```

### ServerSocket
负责**服务器端**，可以监听指定的端口（port）

- 利用 ServerSocket 实例的 accept() 方法，可以创建任意数量的 Socket，每个 Socket 代表 1 个客户端

```java
// 构造方法
public ServerSocket​(int port) throws IOException

// 主要方法
Socket accept() // 进入 block 状态，等待客户端连接
```

### Socket
代表**客户端**，负责客户端的通信，可以与指定地址的服务器建立连接

- 服务器端获取的 Socket 的输出流，就是客户端的输入流
- 服务器端获取的 Socket 的输入流，就是客户端的输出流

```java
// 构造方法
public Socket​(String host, int port) throws UnknownHostException, IOException
public Socket​(InetAddress address, int port) throws IOException

// 主要方法
InetAddress getInetAddress()  // 返回与当前 Socket 连接对象的 IP
int getPort()                 // 返回与当前 Socket 连接对象绑定的端口

InetAddress getLocalAddress() // 返回当前 Socket 的 IP（本地 IP）
int getLocalPort()            // 返回当前 Socket 绑定的端口

InputStream getInputStream()   // 获取当前 Socket 的输入流
OutputStream getOutputStream() // 获取当前 Socket 的输出流
```

## 样例代码
### 服务器端
```java
public static void main(String[] args) throws IOException {
    try (ServerSocket server = new ServerSocket(9090)) {
        Socket client = null;
        while (true) {
            client = server.accept();
            // 获取客户端的输出流
            PrintStream out = new PrintStream(client.getOutputStream());
            out.println("hi!");
            out.close();
            // 记得关闭客户端
            client.close();
        }
    }
}
```

### 客户端
```java
public static void main(String[] args) throws Exception {
    try (Socket client = new Socket(InetAddress.getLocalHost(), 9090)) {
        // 获取服务器端的输出
        Scanner sc = new Scanner(client.getInputStream());
        sc.useDelimiter("\n");
        while (sc.hasNext()) {
            System.out.println(sc.next());
        }
    }
}
```
