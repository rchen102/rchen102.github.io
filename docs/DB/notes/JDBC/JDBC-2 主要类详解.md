---
title: 主要类详解
date: 2020-01-17 15:37:00
categories: 
tags:
---
## 各个对象
- DriverManager: 驱动管理对象
- Connection: 数据库连接对象
- Statement: 执行sql的对象
- ResultSet: 结果集对象
- PreparedStatement: 执行sql的对象

## DriverManager
### 注册驱动
告诉程序应该使用哪一个数据库驱动JAR包，MySQL5以后的驱动JAR包可以省略注册驱动的步骤

```java
//使用DriverManager注册驱动
static void registerDriver​(Driver driver);

/** 
 * 实际使用
 * Class.forName加载类进入内存，会执行静态代码块
 */
Class.forName("com.mysql.jdbc.Driver");

// 来自com.mysql.jdbc.Driver源码
static {
    try {
        DriverManager.registerDriver(new Driver());
    } catch (SQLException var1) {
        throw new RuntimeException("Can't register driver!");
    }
}
```

### 获取数据库连接对象
```java
/**
 * url: 指定连接的路径，语法: `jdbc:mysql://ip地址:端口号/数据库名称` 
 * 如果是连接本机mysql服务器，并且mysql默认端口是3306，则可简写`jdbc:mysql:///数据库名称` 
 */
static Connection getConnection​(String url, String user, String password);   

// 使用案例
Connection conn = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/dbtest",
    "root", // user
    "123"   // password
);
```

## Connection
### 获取执行sql的对象
```java
Statement createStatement();
PreparedStatement prepareStatement​(String sql);
```

### 管理事务
```java
/** 
 * 开启事务
 * 设置自动提交，可用于开启事务
 * 传入参数false，即关闭自动提交 -> 手动提交 -> 开启事务
 */
void setAutoCommit​(boolean autoCommit);  

// 提交事务
void commit();

// 回滚事务
void rollback();
```

## Statement
### 执行静态sql语句
```java
// 可以执行任何sql语句，可能有多个返回结果(需要调用其他方法获取结果)，一般不使用
boolean execute​(String sql);  


/** 
 * 执行DML(增删改)语句，DDL语句
 * 返回值是影响的行数，可以用于判断执行是否成功(> 0)
 */
int  executeUpdate​(String sql);

// 执行DQL(查询)语句
ResultSet executeQuery​(String sql);
```

## ResultSet
### 封装查询结果
注意: ResultSet也是资源，使用完毕后也需要被释放

```java
/** 
 * 游标向下移动一行，游标起始指向第0行(即行标栏)
 * 如果游标指向为有效行，返回true，否则返回false
 */
boolean next();

/** 
 * 获取当前游标指向行的数据，XXX即数据类型
 * 参数：
 *  1第一种情况 int: 代表列的编号，编号从1开始
 *  2第一种情况 String: 代表列名称，如getInt("balance")
 */
getXXX(参数);

int getInt​(int columnIndex);  // 如获取int型数据
```

## PreparedStatement
### 执行预编译sql语句
```java
// 静态sql，存在注入风险
"SELECT * FROM user WHERE username = 'ssjsj' AND password = 'a' OR 'a' = 'a'"

// 预编译sql，参数使用`?`作为占位符，防止sql注入
"SELECT * FROM user WHERE username = ? AND password = ?"

/** 
 * 给?赋值，XXX即数据类型
 * 参数1: ?的位置编号，从1开始
 * 参数2: ?的值
 */
setXXX(参数1，参数2);

// 使用样例
PreparedStatement pstmt = prepareStatement​(String sql);
pstmt.setString(1, "username");
pstmt.setString(2, "password");
ResultSet rs = pstmt.executeQuery​();  // 无需传入sql语句
```



