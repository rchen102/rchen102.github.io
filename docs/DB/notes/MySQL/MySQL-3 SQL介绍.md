---
title: SQL介绍
date: 2020-01-09 18:51:14
categories: 
tags:
---
## 什么是SQL
SQL(Structured Query Language)结构化查询语言

定义了操作所有关系型数据库的规则，但是每一种数据库操作存在不一样的地方，称为「方言」

## SQL通用语法
- SQL语句可以单行或多行书写，以分号结尾
- 可以使用空格和TAB来增强语句可读性
- 不区分大小写，但是关键字推荐使用大写
- 注释
```sql
SHOW DATABASES; -- 记得加空格，单行注释
SHOW DATABASES; # 单行注释
SHOW DATABASES; #可以不加空格，单行注释
SHOW DATABASES; /* 多行注释 */
```

## SQL语句分类
#### 1. 数据定义语言(DDL, Data Difinition Language)
+ 用来定义数据库对象：数据库、表、列表等
+ 关键字: `CREATE, DROP, ALTER`

#### 2. 数据操作语言(DML, Data Manipulation Language)
+ 用来对数据库中表的数据进行增删改
+ 关键字: `INSERT, DELETE, UPDATE`

#### 3. 数据查询语言(DQL, Data Query Language)
+ 用来查询数据库中表的记录
+ 关键字: `SELECT, WHERE`

#### 4. 数据控制语言(DCL, Data Control Language)
+ 用来定义数据库的访问权限，安全级别，创建用户
+ 关键字: `GRANT, REVOKE`
