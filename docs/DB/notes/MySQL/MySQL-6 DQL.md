---
title: DQL语句-查询表中记录
date: 2020-01-12 16:00:14
categories: 
tags:
---
## 语法
```sql
SELECT
    字段列表
FROM
    表名列表
WHERE
    条件列表
GROUP BY
    分组字段
HAVING
    分组之后的条件
ORDER BY
    排序
LIMIT
    分页限定;
```

## 基础查询
1. 查询多个字段
2. 去除重复结果集
3. 计算列
4. 起别名

```sql
/* 以student表为例
 * 字段: id, name, age, sex, address, math, english
 */

# 1. 查询多个字段
SELECT name,age FROM student; -- 查询姓名和年龄

# 2. 去除重复结果集
SELECT DISTINCT address FROM student;
SELECT DISTINCT name, address FROM student; -- 两条结果name和adress值完全一样才算重复

# 3. 计算列
SELECT 
    name, 
    math, 
    english, 
    math + IFNULL(english, 0) -- 有NULL参与计算，运算结果都为NULL
FROM student;

# 4. 起别名 使用AS或者使用空格代替AS
SELECT 
    name, 
    math, 
    english, 
    math + IFNULL(english, 0) AS 总分 
FROM student;
```

## 条件查询
1. `WHERE`语句后跟条件
2. 运算符
    + `>, <, >=, <=, =, <>`
    + `BETWEEN...AND`
    + `IN (集合)`
    + `LIKE`
    + `IS NULL`
3. 逻辑运算符
    + `AND`或`&&`
    + `OR`或`||`
    + `NOT`或`!`

AND 和 OR 同时存在时，AND 执行的优先级会更高，即 SQL 会优先处理 AND 操作符，再处理 OR

同样可以通过 `()` 明确指定优先级

```sql
# 1. 运算符使用
SELECT * FROM student WHERE age > 20;    -- 大于20
SELECT * FROM student WHERE age = 20;    -- 等于20
SELECT * FROM student WHERE age != 20;   -- 不等于20
SELECT * FROM student WHERE age <> 20;   -- 不等于20

# 2. 逻辑运算符使用
SELECT * FROM student WHERE age >= 20 && age <= 30;
SELECT * FROM student WHERE age >= 20 AND age <= 30;  -- 更推荐
SELECT * FROM student WHERE age BETWEEN 20 AND 30;    -- 包含20和30

SELECT * FROM student WHERE age = 20 OR age = 19;
SELECT * FROM student WHERE age IN (20,19);

# 3. 查询NULL，NULL值不能使用运算符判断
SELECT * FROM student WHERE english IS NULL;
SELECT * FROM student WHERE english IS NOT NULL;
```

## 模糊查询
模糊查询使用关键字`LIKE`

::: tip 占位符
- `_` 只代表一个字符
- `%` 零个或多个任意字符
:::

```sql
SELECT * FROM student WHERE name LIKE '马%';   -- 查询姓为马的学生
SELECT * FROM student WHERE name LIKE '%马%';  -- 查询姓名包含马的学生
```

## 排序查询
```sql
# 语法
ORDER BY 排序字段1 排序方式1, 排序字段2 排序方式2, ...;

# 1. 升序ASC，降序DESC
SELECT * FROM student ORDER BY math;    -- 默认升序
SELECT * FROM student ORDER BY math DESC;

# 2. 多个排序条件，当第一排序条件值相等时，才使用第二排序条件
SELECT * FROM student ORDER BY math ASC, english ASC;
```

## 聚合函数
将一列数据作为一个整体，进行**纵向**计算

:::warning 注意
聚合函数的计算会**排除NULL**值，解决
- 选择不包含不包含NULL的列进行计算
- `IFNULL()`函数
:::

```sql
# 1. 计算个数，一般选择非空的列（主键）
SELECT COUNT(name) FROM student;
SELECT COUNT(IFNULL(english, 0)) FROM student;

# 2. 计算最大值/最小值
SELECT MAX(math) FROM student;
SELECT MIN(math) FROM student;

# 3. 计算和
SELECT SUM(math) FROM student;

# 4. 计算平均数
SELECT AVG(math) FROM student;
```

## 分组查询
分组既然是以组为单位，因此查询的字段只有两类：分组字段和聚合函数

```sql
# 语法
GROUP BY 分组字段;

# 1. 基本分组用法
SELECT sex, AVG(math) FROM student GROUP BY sex; -- 以性别为组，查看数学平均分
SELECT sex, AVG(math), COUNT(id) FROM student GROUP BY sex; -- 同时统计各组人数

# 2. 与WHERE配合使用
SELECT sex, AVG(math) FROM student WHERE math > 70 GROUP BY sex; -- 大于70分才参与分组

# 3. 分组之后的条件 HAVING
-- 只有分组后，人数大于2的组才出现
SELECT sex, AVG(math), COUNT(id) FROM student GROUP BY sex HAVING COUNT(id) > 2;
```
::: tip WHERE和HAVING区别
- `WHERE`是在分组之前进行限定，如果不满足条件，则不参与分组；`HAVING`是在分组之后进行限定，如果不满足条件，则不会出现在查询结果中
- `WHERE`后不可使用聚合函数，`HAVING`可以进行聚合函数的判断
:::

## 分页查询
`LIMIT`是一个MySQL「方言」

第一个参数表示从该参数的下一条数据开始，第二个参数表示每次返回的数据条数

```sql
# 语法
LIMIT 开始的索引,每页查询的条数;

# 每页显示3条记录
SELECT * FROM student LIMIT 0,3;    -- 第1页，返回 1，2，3
SELECT * FROM student LIMIT 3,3;    -- 第2页，返回 4，5，6
```

## CASE
```sql
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END AS 'Review'
FROM movies;

```