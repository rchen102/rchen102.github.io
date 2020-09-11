---
title: 回溯算法
date: 2020-09-10 08:13:00
categories: 
tags:
---
## 回溯算法
当问题是要求满足某种性质（约束条件）的所有解或最优解时，往往需要使用回溯法

回溯的本质就是**利用 DFS 穷举一棵决策树**，解题时有 3 个要点需要把握：

1. 记录已经走过的路径

2. 维护选择列表

3. 明确终止条件

```python
backtrack(choices，curPath，res):
    if 满足条件 ：
        res.add(curPath);
        return;
    for choice in choices:
        curPath.select(choice)
        backtrack(newChoices, curPath, res)
        curPath.undoSelect()
```