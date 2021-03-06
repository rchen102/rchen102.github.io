---
title: 递归
date: 2020-02-06 09:31:00
categories: 
tags:
---
## 介绍
递归本质上是将问题分解为两部分，一部分属于「递」，一部分属于「归」

- 「递」的过程是将问题分解为「子问题」求解的过程
- 「归」则指「子问题」求解完成返回

## 递归的两大要素
- 一个问题可以分解为若干子问题求解，且子问题除了数据规模不同，解法完全相同
- 存在递归终止条件，即递归的「出口」

## 递归的问题
1. **堆栈溢出**：当递归求解的问题数据规模太大，函数调用层次很深，可能会有堆栈溢出的风险  

> 解决方法：  
> 在代码中限制递归调用的深度，超过一定深度，则终止计算

2. **重复计算**：同一个子问题可能会被计算多次，浪费时间和空间  
   解决：使用带「备忘录」的递归求解，即记录子问题的结果，一旦出现相同子问题，直接查找返回结果

