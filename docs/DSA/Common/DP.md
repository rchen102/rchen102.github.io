---
title: 动态规划
date: 2020-09-11 08:13:00
categories: 
tags:
---
## DP Table 的遍历
```java
/**
 * 斜着遍历数组
 * 本质：把 i 当作 x，j 当作 y
 * 则 y = x + b 函数
 */
for (int b = 0; b < n; b++) {
    for (int i = 0; i < n; i++) {
        if (i + b >= n) break;
        j = i + b;
    }
}
```
