---
title: 二叉树
date: 2020-09-08 16:47:00
categories: 
tags:
---
## 二叉树的前中后序遍历
常规的 dfs 递归解法比较简单，这里只整理不使用递归的写法

pre-order，直接利用 Stack 的先进后出，可以轻松模拟递归访问的过程，最简单

- pre-order：最简单，root 只需要访问一次，直接利用 Stack 的先进后出就可以模拟递归
- in-order 和 post-order：更复杂，原因在于利用 Stack 模拟过程中，节点会 push 和 pop 不止一次，如何判断是否是第一次是关键（因此可以使用 HashMap 帮助）

```java
/**
 * pre-order
 * 简单利用 Stack
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        if (root == null) return res;
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode cur = stack.pop();
            res.add(cur.val);
            if (cur.right != null) stack.push(cur.right);
            if (cur.left != null) stack.push(cur.left);
        }
        return res;
    }
}


/**
 * in-order
 * 利用 while 循环，将最左全部压栈，这样只需要入栈一次
 */
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> res = new ArrayList<>();
    Stack<TreeNode> stack = new Stack<>();
    TreeNode cur = root;
    while (cur != null || !stack.isEmpty()) {
        while (cur != null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.add(cur.val);
        cur = cur.right;
    }
    return res;
}

/**
 * post-order
 * 两种方案：
 *  1. 通过将左右孩子标记为 null 来区分是否第一次访问
 *  2. 利用 HashMap
 */
public List<Integer> postorderTraversal(TreeNode root) {
    List<Integer> res = new LinkedList<>();
    Stack<TreeNode> stack = new Stack<>();
    Map<TreeNode, Integer> map = new HashMap<>();

    if(root == null) return res;
    stack.push(root);
    map.put(root, 0);
    while(!stack.isEmpty()) {
        TreeNode cur = stack.pop();
        if(map.get(cur) == 1) {
            res.add(cur.val);
            map.remove(cur);
        }
        else {
            stack.push(cur);
            map.put(cur, 1);
            if(cur.right != null) {
                stack.push(cur.right);
                map.put(cur.right, 0);
            }
            if(cur.left != null) {
                stack.push(cur.left);
                map.put(cur.left, 0);
            }
        }
    }
    return res;
}
```

## 树的高度
```java
public static int getDepth(TreeNode cur) {
    if(cur == null) return 0;
    return Math.max(getDepth(cur.left), getDepth(cur.right)) + 1;
}


```



