---
title: Echo 模型
date: 2020-07-02 10:38:00
categories: 
tags:
---
## 介绍
传统 Echo 模型：    
1. Java 客户端：键盘输入 -> 发送数据 -> Java 服务端
2. Java 服务端：接收数据 -> 处理数据 -> 发送数据 -> Java 客户端
3. Java 客户端：接收数据

<div align=center>

![字符流](/img/Java/Echo.png)

</div>

## 样例代码
### EchoServer
```java
public class EchoServer {
    public static void main(String[] args) throws Exception{
        try (ServerSocket server = new ServerSocket(9090)) {
            Socket client = server.accept();
            System.out.println("Connection established successfully!");

            PrintStream output = new PrintStream(client.getOutputStream());
            Scanner scanner = new Scanner(client.getInputStream());
            scanner.useDelimiter("\n");
            while (true) {
                if (scanner.hasNext()) {
                    // 注意不能漏掉 trim，否则匹配可能失败
                    String value = scanner.next().trim();
                    if ("bye".equalsIgnoreCase(value)) {
                        // 结束交互
                        output.println("[Echo] See you!");
                        break;
                    } else {
                        output.println("[Echo] " + value);
                    }
                }
            }
            client.close();
        }
    }
}
```

### EchoClient
```java
public class EchoClient {
    static KeyboardInputReader keyboard = new KeyboardInputReader();

    public static void main(String[] args) throws Exception {
        try (Socket socket = new Socket(InetAddress.getLocalHost(), 9090)) {
            PrintStream output = new PrintStream(socket.getOutputStream());
            Scanner scanner = new Scanner(socket.getInputStream());
            scanner.useDelimiter("\n");
            while (true) {
                String value = 
                    keyboard.getStringNotNull("Please input data to be sent: ");
                output.println(value);
                if (scanner.hasNext()) {
                    System.err.println(scanner.next().trim());
                }
                if ("bye".equalsIgnoreCase(value)) {
                    break;
                }
            }
        }
    }
}
```
