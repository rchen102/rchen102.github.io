---
title: 基本介绍与上手
date: 2020-01-17 15:05:00
categories: 
tags:
---
## 基本概念
JDBC(Java Database Connectivity)，即Java数据库连接，Java语言操作数据库

JDBC提供了一个标准接口(interface)，用于操作所有关系型数据库，各个数据库厂商去实现接口，提供数据库驱动JAR包。可以使用JDBC提供的接口编程，但是真正执行的代码是驱动JAR包中的实现类

## 快速入门
1. 导入驱动JAR包
2. 注册驱动
3. 获取数据库连接对象 `Connection`
4. 定义sql
5. 获取执行sql语句的对象 `Statement`
6. 执行sql，接受返回结果
7. 处理结果
8. 释放资源

```java
public class Demo {
    public static void main(String[] args) {
        // 2. 注册驱动
        Class.forName("com.mysql.jdbc.Driver"); 

        // 3. 获取数据库连接对象
        Connection conn = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/dbtest",
            "root", // user
            "123"   // password
        );

        // 4. 定义sql
        String sql = "UPDATE account SET balance = 500 WHERE id = 1";

        // 5. 获取执行sql语句的对象
        Statement stmt = conn.createStatement();

        // 6. 执行sql，接受返回结果
        int count = stmt.executeUpdate(sql);

        // 7. 处理结果
        System.out.println(count);

        // 8. 释放资源
        stmt.close();
        conn.close();
    }
}
```
