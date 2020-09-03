---
title: Java NIO 
date: 2020-06-30 21:09:00
categories: 
tags:
---
## SocketChannel 的阻塞模式
```java
// 服务端
public static void main(String[] args) throws Exception {
    // 服务端
    ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();
    // 设置为堵塞模式
    serverSocketChannel.configureBlocking(true);
    // 绑定本地ip端口
    serverSocketChannel.socket().bind(new InetSocketAddress("127.0.0.1", 8080));
    // 堵塞模式下没有连接会一直堵塞在下面这句accept
    SocketChannel socketChannel = serverSocketChannel.accept();
    // 有连接进来了，正常使用方式是创建一个线程 socketChannel 作为参数传入，demo就简单写一下
    socketChannel.write(ByteBuffer.wrap("你好客户端".getBytes()));
    socketChannel.close();
    serverSocketChannel.close();
}



```

```java
// 客户端
public static void main(String[] args) throws Exception {
    // 客户端
    SocketChannel socketChannel = SocketChannel.open();
    // 设置为堵塞模式
    socketChannel.configureBlocking(true);
    // 连接远程ip+端口 因为设置了堵塞模式没连上服务器就会一直堵塞
    socketChannel.connect(new InetSocketAddress("127.0.0.1", 8080));
    ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
    // 接收服务器传来的字节集
    int i = socketChannel.read(byteBuffer);
    byte[] buffByte = new byte[i];
    // 转换ByteBuffer为读模式 也就是游标=0 读写上限limit=内容长度=游标
    byteBuffer.flip();
    byteBuffer.get(buffByte);
    System.out.println(new String(buffByte));
    socketChannel.close();
}
```


## SocketChannel 非阻塞模式 + IO 多路复用
```java
public class NIOEchoServer {
    public static void main(String[] args) throws IOException {
        // 创建一个Selector
        Selector selector = Selector.open();
        // 创建ServerSocketChannel
        ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();
        // 绑定8080端口
        serverSocketChannel.bind(new InetSocketAddress(8002));
        // 设置为非阻塞模式
        serverSocketChannel.configureBlocking(false);
        // 将Channel注册到selector上，并注册Accept事件
        serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);

        System.out.println("server start");
        
        while (true) {
            // 阻塞在select上（第一阶段阻塞）
            selector.select();

            // 如果使用的是select(timeout)或selectNow()需要判断返回值是否大于0

            // 有就绪的Channel
            Set<SelectionKey> selectionKeys = selector.selectedKeys();
            // 遍历selectKeys
            Iterator<SelectionKey> iterator = selectionKeys.iterator();
            while (iterator.hasNext()) {
                SelectionKey selectionKey = iterator.next();
                // 如果是accept事件
                if (selectionKey.isAcceptable()) {
                    // 强制转换为ServerSocketChannel
                    ServerSocketChannel ssc = (ServerSocketChannel) selectionKey.channel();
                    SocketChannel socketChannel = ssc.accept();
                    System.out.println("accept new conn: " + socketChannel.getRemoteAddress());
                    socketChannel.configureBlocking(false);
                    // 将SocketChannel注册到Selector上，并注册读事件
                    socketChannel.register(selector, SelectionKey.OP_READ);
                } else if (selectionKey.isReadable()) {
                    // 如果是读取事件
                    // 强制转换为SocketChannel
                    SocketChannel socketChannel = (SocketChannel) selectionKey.channel();
                    // 创建Buffer用于读取数据
                    ByteBuffer buffer = ByteBuffer.allocate(1024);
                    // 将数据读入到buffer中（第二阶段阻塞）
                    int length = socketChannel.read(buffer);
                    if (length > 0) {
                        buffer.flip();
                        byte[] bytes = new byte[buffer.remaining()];
                        // 将数据读入到byte数组中
                        buffer.get(bytes);

                        // 换行符会跟着消息一起传过来
                        String content = new String(bytes, "UTF-8").replace("\r\n", "");
                        System.out.println("receive msg: " + content);
                    }
                }
                iterator.remove();
            }
        }
    }
}
```