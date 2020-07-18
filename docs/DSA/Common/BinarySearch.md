---
title: 二分查找
date: 2020-07-14 11:12:00
categories: 
tags:
---
## 经典二分查找
返回的 lo 即为 target 应该出现的位置  
- 如果 target 存在，则返回 target 的位置
- 如果 target 不存在，则返回 target 应该插入的位置

```java
public static int binarySearch(int[] nums, int target) {
    int lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) hi = mid - 1;
        else if (nums[mid] < target) lo = mid + 1;
    }
    return lo;
}
```

## 重复元素 + 查找左右边界
```java
// 左边界
public static int binarySearch(int[] nums, int target) {
    int lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (nums[mid] == target) {
            if (mid == 0 || nums[mid-1] != target) return mid;
            hi = mid - 1; 
        }
        else if (nums[mid] > target) hi = mid - 1;
        else if (nums[mid] < target) lo = mid + 1;
    }
    return lo;
}

// 右边界
public static int binarySearch(int[] nums, int target) {
    int lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (nums[mid] == target) {
            if (mid == nums.length - 1 || nums[mid+1] != target) return mid;
            lo = mid + 1; 
        }
        else if (nums[mid] > target) hi = mid - 1;
        else if (nums[mid] < target) lo = mid + 1;
    }
    return lo;
}
```


