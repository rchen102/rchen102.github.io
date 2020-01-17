---
title: MySQL数据库
date: 2020-01-09 18:42:14
categories: 
tags:
---
## 服务启动
- 通过服务窗口 `services.msc` 
- 以管理员模式运行 `net stop/start mysql`

## 登录/退出
- `mysql -uroot -proot`  明文显示用户名和密码
- `mysql -uroot -p` 隐藏密码显示 
- `mysql -hip -uroot -proot` 远程连接登录
- `exit`或`quit` 退出

## 目录结构
- MySQL安装目录: 配置文件`my.ini`
- MySQL数据目录: 
    + 数据库: 文件夹
    + 表: 文件
    + 数据: `.frm`

## 数据库的备份与还原
```sql
# 1. 备份
mysqldump -u用户名 -p密码 数据库名称 > 保存的路径

# 2. 还原
-- 创建准备用于存储还原数据的数据库
-- 使用(use)该数据库
-- 还原 source
source 文件路径
```