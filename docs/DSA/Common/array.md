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

## 二分查找
```java
public static int binarySearch(int[] arr, int target) {
    int lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (arr[mid] > target) hi = mid - 1;
        else if (arr[mid] < target) lo = mid + 1;
        else return mid;
    }
    return lo;
}
```