---
title: MySQL数据库软件配置
date: 2020-01-09 18:42:14
categories: 
tags:
---
## 基本命令
### 1. MySQL服务启动
- 通过服务窗口 `services.msc` 
- 以管理员模式运行 `net stop/start mysql`

### 2. MySQL登录
- `mysql -uroot -proot`  明文显示用户名和密码
- `mysql -uroot -p` 隐藏密码显示 
- `mysql -hip -uroot -proot` 远程连接登录

### 3. MySQL退出
- `exit`
- `quit`

### 4. MySQL目录结构
- MySQL安装目录: 配置文件`my.ini`
- MySQL数据目录: 
    + 数据库: 文件夹
    + 表: 文件
    + 数据: `.frm`