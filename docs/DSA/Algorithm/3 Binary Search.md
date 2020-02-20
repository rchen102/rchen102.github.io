---
title: 二分查找
date: 2020-02-19 16:26:00
categories: 
tags:
---
## 使用条件
- 顺序表结构：简单理解即数组，因为二分查找需要依靠下标随机访问元素
- 有序数据：数据必须有序，如果无序需要先排序
- 数据量不能太大：二分查找依赖数组，而数组实现需要连续的内存空间，找到较大的连续空间比较困难

通常能够使用二分查找解决的问题，使用散列表和二分查找树也同样可以解决。但是散列表和二叉树都需要额外的内存空间，而二分查找主要依赖数组，即除了数据本身无需其他额外空间，因此在**限定内存**时，可以优先使用二分查找

## 正确写出二分查找的关键
**1. while 循环的退出条件**
- lo <= hi：较为常用
- lo < hi：相比上面一种，此时当 lo == hi 时，循环即退出

**2. 如何更新 lo 和 hi**
- 本质上即通过 lo, hi, mid 处元素值，确定下次搜索的分区边界
- 可以优化 mid = lo + ((hi - lo) >> 1)，即避免了溢出，运算也更高效
- 避免更新 lo = mid，因为只有两个元素时，会造成死循环

**3. 查找结束后如何解读结果**
- 当 while 循环退出时 lo 和 hi 分别指向的元素具有什么意义，如何得到需要的结果
- 在不同条件，如存在重复元素或搜索目标不存在时，lo 和 hi 又有什么意义

---
可以借助一些关键的 corner case 把握以上关键，因为搜索到了最后都不可避免会出现以下两种情况
- 只有一个元素时，意味着 hi == lo == mid
- 只有两个元素时，意味着 hi = lo + 1 -> mid = lo

## 经典二分查找和变种
### 1. 经典二分查找
经典二分查找，无重复元素，只需要根据 arr[mid] 大小与 target 关系即可判断

- target 在区间范围内
    + target 存在：返回 target 的 idx
    + target 不存在：返回 target 应该插入的位置，返回时 [lo] 大于目标，[hi] 小于目标
- target 不在区间范围内
    + 小于区间范围：返回 0
    + 大于区间范围：返回 length

```java
public static int binarySearch(int[] arr, int target) {
    int lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (arr[mid] == target) return mid;
        else if (arr[mid] > target) hi = mid - 1;
        else lo = mid + 1;
    }
    return lo;
}
```

### 2. 查找「第一个」目标元素
存在重复元素，因此经典二分查找不能保证总是返回第一个目标元素，因此需要稍作改变

- 当 arr[mid] 大于或小于目标时，依然可以按常规方式更新区间
- 当 arr[mid] 等于目标时，此时需要判断 arr[mid] 是否是第一个目标元素，如果不是更新区间继续搜索

```java{6,7}
public static int binarySearch(int[] arr, int target) {
    int lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (arr[mid] == target) {
            if (mid == 0 || arr[mid-1] != target) return mid;
            else hi = mid - 1;
        }
        else if (arr[mid] > target) hi = mid - 1;
        else lo = mid + 1;
    }
    return lo;
}
```

### 3. 查找「最后一个」目标元素
主要思想与查找第一个目标元素基本相同，都是在 arr[mid] 等于目标值时多做一次判断

```java{6,7}
public static int binarySearch(int[] arr, int target) {
    int lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (arr[mid] == target) {
            if (mid == arr.length-1 || arr[mid+1] != target) return mid;
            else lo = mid + 1;
        }
        else if (arr[mid] > target) hi = mid - 1;
        else lo = mid + 1;
    }
    return lo;
}
```

### 4. 查找「第一个大于等于」目标元素
基本思想与前面两个相同，此时可以合并处理 arr[mid] > target 和 arr[mid] == target 的情况

```java{6,7}
public static int binarySearch(int[] arr, int target) {
    int lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (arr[mid] >= target) {
            if (mid == 0 || arr[mid-1] < target) return mid;
            else hi = mid - 1;
        }
        else lo = mid + 1;
    }
    return lo;
}
```

### 5. 查找「最后一个小于等于」目标元素
```java{6,7}
public static int binarySearch(int[] arr, int target) {
    int lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        int mid = lo + ((hi - lo) >> 1);
        if (arr[mid] <= target) {
            if (mid == arr.length-1 || arr[mid+1] > target) return mid;
            else lo = mid + 1;
        }
        else hi = mid - 1;
    }
    return lo;
}
```