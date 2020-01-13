---
title: 约束
date: 2020-01-12 21:16:14
categories: 
tags:
---
## 约束的基本概念
对表中的数据进行限定，保证数据的正确性、有效性和完整性

分类
- 主键约束: primary key
- 非空约束: not null
- 唯一约束: unique 
- 外键约束: foreign key

## 主键约束
主键就是表中记录的唯一标识，一张表只能有一个字段为主键，非空且唯一

```sql
# 1. 创建表时添加主键
CREATE TABLE stu(
    id INT PRIMARY KEY,
    name VARCHAR(20)
);

# 2. 删除主键
-- 无效 ALTER TABLE stu MODIFY id INT;
ALTER TABLE stu DROP PRIMARY KEY;

# 3. 创建表后添加主键
ALTER TABLE stu MODIFY id INT PRIMARY KEY;
```

### 自动增长
如果某一列是数值类型的，使用`AUTO_INCREMENT`可以实现值的自动增长，通常配合主键使用

```sql
# 1. 创建表时添加主键和自动增长
CREATE TABLE stu(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20)
);

INSERT INTO stu VALUES(NULL, 'Max');

# 2. 删除自动增长
ALTER TABLE stu MODIFY id INT;  -- 不会删掉主键，但会删掉自动增长

# 3. 添加自动增长
ALTER TABLE stu MODIFY id INT AUTO_INCREMENT;
```

## 非空约束
限制某列数据不能为空

```sql
# 1. 创建表时添加非空约束
CREATE TABLE stu(
    id INT,
    name VARCHAR(20) NOT NULL
);

# 2. 删除非空约束
ALTER TABLE stu MODIFY name VARCHAR(20);

# 3. 创建表后添加非空约束
ALTER TABLE stu MODIFY name VARCHAR(20) NOT NULL;
```

## 唯一约束
限制某列数据值不能重复

::: warning 注意
MySQL中，唯一约束限定的列可以有多个`NULL`
:::

```sql
# 1. 创建表时添加唯一约束
CREATE TABLE stu(
    id INT,
    phone_number VARCHAR(20) UNIQUE
);

# 2. 删除唯一约束
-- 无效 ALTER TABLE stu MODIFY phone_number VARCHAR(20);  
ALTER TABLE stu DROP INDEX phone_number;

# 3. 创建表后添加唯一约束
ALTER TABLE stu MODIFY phone_number VARCHAR(20) UNIQUE;
```

## 外键约束
外表记录不能添加主键中不存在的值(可以为NULL)，主表也不能删除主键中外表记录仍然使用的值

让表与表之间产生关系，从而保证数据的正确性

```sql
# 语法
CREATE TABLE 表名(
    ...,
    外键列
    CONSTRAINT 外键名称 FOREIGN KEY (外键列名称) REFERENCES 主表名称(主表列名称)
);

# 1. 创建表时添加外键
CREATE TABLE department(    
    id INT PRIMARY KEY AUTO_INCREMENT,   -- 主表主键
    dep_name VARCHAR(20),
    dep_location VARCHAR(20),
);

CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(20),
    age INT,
    dep_id INT,   -- 外键对应主表的主键
    CONSTRAINT emp_dept_fk FOREIGN KEY (dep_id) REFERENCES department(id)
);

# 2. 删除外键
ALTER TABLE employee DROP FOREIGN KEY emp_dept_fk;

# 3. 添加外键
ALTER TABLE employee ADD CONSTRAINT emp_dept_fk 
    FOREIGN KEY (dep_id) REFERENCES department(id);
```

### 级联操作
- 级联更新： 主表对主键进行修改，通过级联更新自动更新外表  
- 级联删除： 主表删除某些主键值，通过级联删除删除外表中包含相应值的**整条记录**

```sql
# 1. 设置级联更新
ALTER TABLE employee ADD CONSTRAINT emp_dept_fk 
    FOREIGN KEY (dep_id) REFERENCES department(id) ON UPDATE CASCADE;

# 2. 设置级联删除
ALTER TABLE employee ADD CONSTRAINT emp_dept_fk 
    FOREIGN KEY (dep_id) REFERENCES department(id) ON DELETE CASCADE;
```