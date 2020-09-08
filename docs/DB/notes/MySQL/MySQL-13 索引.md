---
title: 索引
date: 2020-09-08 00:02:00
categories: 
tags:
---
## 索引的使用

//TODO：原理介绍，有空再更

```sql
CREATE INDEX index_name ON table_name (column_name);
CREATE UNIQUE INDEX index_name ON table_name (column_name);
CREATE INDEX name_nationkey ON customer(name,nationkey);

-- 不能用CREATE INDEX语句创建PRIMARY KEY索引
CREATE TABLE MyCustomer ( 
    customer_id INT(100, 1) PRIMARY KEY, 
    company_name varchar(50) 
);

ALTER TABLE table_name ADD INDEX index_name (column_list);
ALTER TABLE table_name ADD UNIQUE (column_list);
ALTER TABLE table_name ADD PRIMARY KEY (column_list);
```