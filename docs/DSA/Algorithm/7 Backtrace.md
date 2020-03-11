---
title: 回溯算法
date: 2020-03-11 09:09:00
categories: 
tags:
---
## 算法步骤
**核心思想**：回溯算法的本质就是枚举，对所有可能的解进行枚举

**基本步骤**：
```text
Pick a starting point.
while(Problem is not solved)
    For each path from the starting point.
        check if selected path is safe, if yes select it
        and make recursive call to rest of the problem
        before which undo the current move.
    End For
If none of the move works out, return false, NO SOLUTON.
```

::: tip
**剪枝操作**是提高回溯搜索的一种常用技巧

如果当前选择路径已经不满足限制条件，则停止进一步向下搜索，开始回溯
:::

## 典型问题
回溯算法通常可以用来解决两类问题:  
- 求解给定限制条件下，所有可能的解（枚举所有解）：如求解全排列
- 求解给定限制条件下，满足期望的所有可能的解中最优解（枚举后，选择最优的那个）

1. 0-1 背包求解：不同种类的 0-1 背包问题通常可以通过贪心算法或者动态规划求解，但是也可以通过回溯法，通过遍历所有可能的选择来求解
2. 正则表达式匹配