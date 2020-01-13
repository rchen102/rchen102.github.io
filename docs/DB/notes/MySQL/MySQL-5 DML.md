---
title: DML语句-增删改表中数据
date: 2020-01-12 15:31:14
categories: 
tags:
---
## 添加数据
```sql
# 1. 基本添加语句
INSERT INTO 表名(列名1,...,列名n) VALUES(值1,...,值n);

# 2. 如果表名后不指定列名，默认给所有列添加
#    即必须明确按顺序给出每一列值，若值不确定或缺省，使用NULL
INSERT INTO 表名 VALUES(值1,...,值n);

# Example
INSERT INTO stu(name, age, birth) VALUES('Max', 18, '1997-08-30');
```

::: tip 提示
- 列名和值需要保证一一对应
- 除了数字类型，其他类型给定值的时候需要使用引号
:::

## 删除数据
```sql
# 1. 基本删除语句
DELETE FROM 表名 [WHERE 条件];

# 2. 删除所有数据
DELETE FROM 表名;     -- 危险操作，不推荐，逐条删除太低效
TRUNCATE TABLE 表名;  -- 推荐使用，删除表，再创建一个一模一样的空表

# Example
DELETE FROM stu WHERE age = 18;
```

## 修改数据
```sql
# 1. 基本修改语句
UPDATE 表名 SET 列名1 = 值1, 列名2 = 值2,... [WHERE 条件];

# 2. 如果不加条件，则会将表中所有数据修改
UPDATE 表名 SET 列名1 = 值1, 列名2 = 值2,...; -- 危险操作

# Example
UPDATE stu SET age = 118 WHERE name = 'Max';
```
