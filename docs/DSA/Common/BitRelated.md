---
title: 位运算
date: 2020-09-12 16:19:00
categories: 
tags:
---
## 位掩码（Bitmask）
Bitmask 是指利用一串二进制数字，通过与目标数字的按位操作，达到屏蔽指定位的目的

每个 bit 都可以用 0 或者 1 表示一种状态，对于一个 32 位的 int 类型，可以同时记录 32 种状态

如果将不同位的状态作为一个整体，则可表达高达 2^32 种状态

```java{1,8,15,22}
1. 设置状态，其他位不管，将某一位设为 1
    xxxx xxxx
OR  0000 0100

mask = (1 << 2)
status |= mask

2. 查询状态，查询某一位
    xxxx xxxx
AND 0000 0100

mask = (1 << 2)
(status &= mask) > 1

3. 清除状态，其他位不管，将某一位设为 0
    xxxx xxxx
AND 1111 1011

mask = (1 << 2)
status &= ~mask 

4. 反转某一位状态，0 变 1，1 变 0
    xxxx xxxx
XOR 0000 0100

mask = (1 << 2)
status ^= mask
```