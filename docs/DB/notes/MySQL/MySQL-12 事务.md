---
title: 事务
date: 2020-01-17 00:02:00
categories: 
tags:
---
## 基本介绍
一个包含**多个步骤**的业务操作，如果被**事务**管理，那么这些操作要么**全部**成功，要么**全部**失败

**基本操作**
1. 开启事务: start transaction
2. 回滚: rollback
3. 提交事务: commit

::: tip 提示
MySQL数据库中事务默认自动提交，一条DML(增删改)语句会自动提交一次事务(Oracle默认手动)

手动开启事务后，如果语句执行完毕后没有提交，则程序终止时会自动回滚

```sql
# 可以修改事务的默认提交方式
SELECT @@autocommit; -- 1: 自动提交 0: 手动提交
SET @@autocommit = 0;
```
:::

```sql
-- 开启事务
START TRANSACTION;

# A 向 B 转账50
UPDATE account SET balance = balance - 50 WHERE name = 'A';
UPDATE account SET balance = balance + 50 WHERE name = 'B';

-- 如果以上两条语句执行完毕后发现出现错误，则回滚
ROLLBACK;

-- 如果没有问题。正确执行，则提交事务
COMMIT;
```

## 事务的四大特征
1. 原子性: 是不可分割的最小操作单位，要么同时成功，要么同时失败
2. 持久性: 当事务提交或者回滚后，数据库会持久化的更新保存数据
3. 隔离性: 多个事务之间，相关独立
4. 一致性: 事务执行后,数据库状态与其他业务规则保持一致

## 事务的隔离级别
多个事务之间是隔离的，相互独立的。如果多个事务并发操作同一数据，则会引发问题，需要通过设置隔离级别解决

### 问题
- 脏读: 一个事务读取到另一个事务中没有提交的数据
- 虚读(不可重复读): 同一个事务中，两次读取到的数据不一样
- 幻读: 一个事务操作(DML)数据表中所有记录，另一个事务添加了一条数据，则第一个事务查询不到自己的修改

---------

### 隔离级别
1. `read uncommitted` 可能出现: 脏读，虚读，幻读
2. `read committed` 可能出现: 虚读，幻读
3. `repeatable read` 可能出现: 幻读
4. `serializable` 可以解决所有问题

::: warning 注意
隔离级别从小到大，安全性越来越高，但是效率越来越差
:::

---------

### 数据库设置隔离级别
```sql
# 查询隔离级别
SELECT @@tx_isolation; -- 默认 REPEATABLE READ

# 设置隔离级别
SET GLOBAL TRANSACTION ISOLATION LEVEL 级别字符串; -- 重新连接数据后生效
```
