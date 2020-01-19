---
title: 数据库连接池
date: 2020-01-18 18:35:00
categories: 
tags:
---
## 介绍
数据库连接池: 一个容器(集合)，存放数据库连接的容器

当系统初始化好后，容器被创建，容器中会申请一些连接对象，当用户需要访问数据时，从容器中获取连接对象，用户完成访问操作后，将连接对象归还给容器

优点:
- 节约资源
- 用户访问高效

## 实现
官方提供了一个标准接口: `java.sql.DataSource`

```java
// 1. 获得连接
Connection getConnection();

// 2. 归还连接
// 如果Connection对象是从连接池中获得，则调用close可以归还连接(而不是关闭连接)
conn.close();
```

一般不需要用户去实现，由数据库厂商来实现
- C3P0: 数据库连接池技术
- Druid: 数据库连接池实现技术，由阿里提供

## C3P0
### 使用步骤
1. 导入JAR包和其依赖的JAR包
2. 定义配置文件
    + 名称: `c3p0.properties` or `c3p0-config.xml`
    + 路径: 直接将配置文件放在`src/`目录下
3. 创建核心对象，即数据库连接池对象 `ComboPooledDataSource`
4. 获取连接 `getConnection()`

## Druid
### 使用步骤
1. 导入JAR包
2. 定义配置文件
    + `.properties`形式的
    + 可以以任意名称放置在任意目录下
3. 加载配置文件 
4. 获取数据库连接池对象，通过工厂类`DruidDataSourceFactory`来获得
5. 获取连接 `getConnection()`