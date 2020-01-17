---
title: 多表查询
date: 2020-01-16 20:11:00
categories: 
tags:
---
## 数据展示
使用`emp`与`dept`两张表

![emp](/img/DB/MySQL10-emp.png)
![dept](/img/DB/MySQL10-dept.png)

`SELECT * FROM emp, dept;`   
得到**笛卡尔积**(多个集合的所有组成结果)，4 * 4 = 16 条数据，因此需要想办法消除无用的数据  

部分结果：  
![res1](/img/DB/MySQL10-res1.png)

## 内连接查询
::: tip 提示
1. 确定从哪些表中查询数据
2. 确定条件是什么
3. 确定查询哪些字段
:::

### 隐式内连接
使用`WHERE`条件消除无用数据

```sql
# 1. 查询所有员工信息和对应部门信息
SELECT * FROM emp, dept WHERE emp.`dept_id` = dept.`id`;

# 2. 查询员工表名称、性别和部门表名称
SELECT
    emp.`name`, emp.`gender`, dept.`name` 
FROM 
    emp, dept 
WHERE 
    emp.`dept_id` = dept.`id`;

# 3. 如果表名比较长可以起个别名
SELECT
    t1.`name`, t1.`gender`, t2.`name` 
FROM 
    emp t1, dept t2 
WHERE 
    t1.`dept_id` = t2.`id`;
```

查询结果1：  
![res2](/img/DB/MySQL10-res2.png)

查询结果2:  
![res3](/img/DB/MySQL10-res3.png)

### 显示内连接
使用`INNER JOIN`和`ON`关键字

```sql
# 基本语法
SELECT 字段列表 FROM 表名1 INNER JOIN 表名2 ON 条件; -- INNER可省略

# 1. 查询所有员工信息和对应部门信息(结果与上面1相同)
SELECT * FROM emp INNER JOIN dept ON emp.`dept_id` = dept.`id`;

```

## 外连接查询
- **左外连接**: 查询的是**左表**所有数据并上右表与左表交集部分
- **右外连接**: 查询的是**右表**所有数据并上右表与左表交集部分

```sql
# 基本语法
SELECT 字段列表 FROM 表名1 LEFT OUTER JOIN 表名2 ON 条件;
SELECT 字段列表 FROM 表名1 RIGHT OUTER JOIN 表名2 ON 条件; -- OUTER可省略

# 1. 查询所有员工信息，如果员工有部门，则查询所有部门名称，没有部门则不显示部门名称
SELECT
    t1.*, t2.`name` 
FROM 
    emp t1
LEFT JOIN 
    dept t2
ON 
    t1.`dept_id` = t2.`id`;
```

查询结果:  
![res4](/img/DB/MySQL10-res4.png)

可以注意到如果员工没有部门信息，依然在结果中出现了 (内连接查询无法做到，因为部门信息为NULL，相等不成立)

## 子查询
查询中嵌套查询，称嵌套的查询为子查询

### 单行单列
子查询结果是单行单列的: 结果可以作为条件，使用运算符去判断`>,<,>=,<=,=`

```sql
# 1. 查询工资最高的员工信息
SELECT * FROM emp WHERE emp.`salary` = (SELECT MAX(salary) FROM emp);

# 2. 查询员工工资小于平均工资
SELECT * FROM emp WHERE emp.`salary` < (SELECT AVG(salary) FROM emp);
```

### 多行单列
子查询结果是多行单列: 结果可以作为条件，使用运算符`IN`去判断

```sql
# 1. 查询财务部和市场部所有员工信息
SELECT * FROM emp WHERE dept_id IN 
(SELECT id FROM dept WHERE NAME = '财务部' OR NAME = '市场部')

```

### 多行多列
子查询结果是多行多列: 结果可以作为一张虚拟表参与查询，不能作为条件
```sql
# 1. 查询员工入职日期是2019-01-01日之后的员工信息和部门信息
SELECT 
    * 
FROM 
    dept t1,
    (SELECT * FROM emp WHERE emp.`join_date` > '2019-01-01') t2,
WHERE
    t1.`id` = t2.`dept_id`;
```

## 多表查询技巧
::: tip 提示
1. 确定可以直接从表中获取的数据，确定表和字段
2. 确定是否需要内连接查询(交集)，确定条件
3. 确定是否需要外连接查询(某张表全部+交集)，确定条件
4. 确定是否包含统计数据，根据结果是几行几列，确定子查询
:::