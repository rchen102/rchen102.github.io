---
title: DDL语句-操作数据库、表
date: 2020-01-09 19:26:14
categories: 
tags:
---
## 操作数据库
主要可以分为五类操作
- C(create): 创建
- R(retrieve): 查询
- U(update): 修改
- D(delete): 删除
- 使用数据库

### 1. 创建数据库
```sql
# 1. 直接创建，如果已经存在，则报错
CREATE DATABASE 数据库名称;

# 2. 判断是否存在，若不存在则创建数据库
CREATE DATABASE IF NOT EXISTS 数据库名称;

# 3. 创建数据库，指定字符集
CREATE DATABASE 数据库名称 CHARACTER SET 字符集名称;

# 4. 综合
CREATE DATABASE IF NOT EXISTS myDB CHARACTER SET GBK;
```

### 2. 查询数据库
```sql
# 1. 查询所有数据库的名称
SHOW DATABASES;

# 2. 查询某个数据库的字符集(实际作用：查询某个数据库的创建语句)
SHOW CREATE DATABASE 数据库名称;
```

### 3. 修改数据库
```sql
# 1. 修改数据库的字符集
ALTER DATABASE 数据库名称 CHARACTER SET 字符集名称;
```

### 4. 删除数据库
```sql
# 1. 删除数据库，若不存在则报错
DROP DATABASE 数据库名称;

# 2. 判断是否存在，若存在则删除数据库
DROP DATABASE IF EXISTS 数据库名称;
```

### 5. 使用数据库
```sql
# 1. 查询当前正在使用的数据库名称
SELECT DATABASE();

# 2. 使用数据库
USE 数据库名称;
```

## 操作表
操作数据表与数据库一样也分为CRUD操作

### 1. 创建表
```sql
# 1. 创建表，注意最后一列没有逗号
CREATE TABLE 表名(
    列名1 数据类型1,
    列名2 数据类型2,
    ...
    列名n 数据类型n 
);

# 2. 复制原有表创建新表
CREATE TABLE 表名 LIKE 被复制的表名;
```

::: tip 常见数据类型
- 整数类型: `int`
- 小数类型: `float/double`
    + `double(5,2)`: 表示小数一共最多5位，保留2位小数
- 时间类型: 
    + `date`: 只包含年月日 `yyyy-MM-dd` 
    + `datetime`: 包含年月日时分秒 `yyyy-MM-dd HH:mm:ss`
    + `timestamp`: 时间戳类型，与`datetime`区别在于，如果不主动赋值或赋值为null，将默认使用当前系统时间自动赋值
- 字符串类型: `varchar`
    + `name varchar(20)`: 表示名字最多20个字符
:::

### 2. 查询表
```sql
# 1. 查询某个数据库中所有的表名称
SHOW TABLES;

# 2. 查询表结构
DESC 表名;
```

### 3. 修改表
```sql
# 1. 修改表名
ALTER TABLE 表名 RENAME TO 新的表名;

# 2. 修改表的字符集
SHOW CREATE TABLE 表名;
ALTER TABLE 表名 CHARACTER SET 字符集;

# 3. 添加一列
ALTER TABLE 表名 ADD 列名 数据类型;

# 4. 修改列名称、类型
ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;
ALTER TABLE 表名 MODIFY 列名 新数据类型;

# 5. 删除列
ALTER TABLE 表名 DROP 列名;
```


### 4. 删除表
```sql
# 1. 删除表，不存在报错
DROP TABLE 表名;
# 2. 判断是否存在，若存在则删除表
DROP TABLE IF EXISTS 表名;
```
