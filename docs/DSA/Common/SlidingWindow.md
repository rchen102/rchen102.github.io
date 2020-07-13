---
title: 滑动窗口
date: 2020-07-12 11:52:00
categories: 
tags:
---
## 滑动窗口
窗口大小可变
- 求最小的窗口：一般在 update res1 处更新结果，如 p76，p209
- 求最大的窗口：一般在 update res2 处更新结果，如 p3

```java
// 经典滑动窗口
public void SlidingWindow(String str) {
    // 一些辅助性和结果相关变量
    // sliding window
    int left = 0, right = 0;     // [left, right)，半闭半开
    boolean isNeedShink = false;
    while (right < str.length()) {
        char ch = str.charAt(right);  // 新元素
        right++;    // 窗口增大，把新元素包含进来
        // update related vars

        while (isNeedShrink) {
            // update res1
            char leave = str.charAt(left);    // 即将被移除的元素
            left++;
            // update related vars
        }
        // update res2
    }
}

// 固定长度滑动窗口
public void SlidingWindow(String str) {
    // 一些辅助性和结果相关变量
    int windowLen;
    for (int i = 0; i < str.length(); i++) {
        char ch = str.charAt(i);
        // update related
        if (i >= windowLen) {
            char leave = s.charAt(i - windowLen);
            // update related
        }
        // update result
    }
}
```

