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
- 左边界或者说第一个满足条件的元素，返回 lo 
- 右边界或者说最后一个满足条件的元素，返回 hi

```java
// 左边界
public static int binarySearch(int[] nums, int target) {
    int lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (nums[mid] == target) hi = mid - 1;
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
        if (nums[mid] == target) lo = mid + 1;
        else if (nums[mid] > target) hi = mid - 1;
        else if (nums[mid] < target) lo = mid + 1;
    }
    return hi;
}
```

## 二分查找抽象
二分查找并不是只能用于搜索有序数组，当**搜索空间有序**的时候，就可以通过二分搜索「剪枝」，大幅提升效率

本质：将二分查找的判断条件进行抽象

```java
public static int binarySearch(int[] nums) {
    int lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        checkCondition(nums[mid]);
        if (正好) return mid;
        else if (需要向左搜索) hi = mid - 1;
        else if (需要向右搜索) lo = mid + 1;
    }
    return lo;
}

// 寻找最小的满足条件
public static int binarySearch(int[] nums) {
    int lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        checkCondition(nums[mid]);
        if (满足条件) {
            // 等效于 nums[mid] >= target
            hi = mid - 1;
        }
        else if (还不足) {
            // 等效于 nums[mid] < target
            lo = mid + 1;
        }
    }
    return lo;
}
```



