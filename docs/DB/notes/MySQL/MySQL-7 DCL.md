---
title: DCL语句-管理用户和授权
date: 2020-01-17 01:06:00
categories: 
tags:
---
## 管理用户
```sql
# 1. 查询用户
USE mysql;              -- 切换到mysql数据库
SELECT * FROM user;     -- 查询user表

# 2. 创建用户
CREATE USER '用户名' @ '主机名' IDENTIFIED BY '密码';
CREATE USER 'rchen102' @ 'localhost' IDENTIFIED BY '123';
CREATE USER 'rchen102' @ '%' IDENTIFIED BY '123'; -- %表示可以在任意主机上登录

# 3. 删除用户
DROP USER '用户名' @ '主机名';

# 4. 修改用户密码
SET PASSWORD FOR '用户名' @ '主机名' = PASSWORD('新密码');
```

## 权限管理
```sql
# 1. 查询权限
SHOW GRANTS FOR '用户名' @ '主机名';

# 2. 授予权限
GRANT 权限列表 ON 数据库.表名 TO '用户名' @ '主机名';
GRANT SELECT,DELETE ON db1.emp TO 'rchen102' @ 'localhost';
GRANT ALL ON *.* TO 'rchen102' @ 'localhost'; -- 授予所有数据库所有表的所有权限

# 3. 撤销权限
REVOKE 权限列表 ON 数据库.表名 FROM '用户名' @ '主机名';
```
