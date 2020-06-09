---
title: 数组
date: 2020-06-09 08:13:00
categories: 
tags:
---
## 数组反转
```java
private void reverse(int[] nums, int left, int right) {
    while (left < right) {
        swap(nums, left, right);
        left++;
        right--;
    }
}

private void swap(int[] nums, int idx1, int idx2) {
    int tmp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = tmp;
}
```
