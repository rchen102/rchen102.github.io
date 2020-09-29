---
title: 排序 - O(nlogn) 算法
date: 2020-02-14 16:49:00
categories: 
tags:
---
## 归并排序
- 分治思想，将数组从中间分为前后两部分，对这两部分分别排序，再将排好序的两部分合并到一起
```text
merge_sort(A, n):
    merge_sort_h(A, 0, n)

merge_sort_h(A, p, r):
    if p >= r then return
    q = (p+r)/2
    merge_sort_h(A,p,q)
    merge_sort_h(A,q+1,r)
    merge(A,p,q,q+1,r)
```

> 分治是一种解决问题的处理思想，递归是一种编程技巧

**稳定性**：稳定，归并排序的稳定性取决于合并函数 `merge()`，对于值相同的元素，可以通过优先选择来自「前一部分」的元素放入合并后的数组来保持前后顺序不变

**内存消耗**：`O(n)` ，由于合并函数需要开辟额外的内存空间，每次开辟空间最大不会超过 `O(n)` ，属于非原地排序算法

**执行效率**：可以通过递归式来分析归并排序的时间复杂度，可知其复杂度与原始数组是否有序无关，无论是最好、最差还是平均复杂度都是 `O(nlogn)`

```text
T(n) = O(1), if n = 1
T(n) = 2T(n/2) + n, if n > 1

递归求解
T(n) = 2(2T(n/4) + n/2) + n = 4T(n/4) + 2n
     ...
     = nT(1) + nlogn
     = nlogn + n
```

```java
public static void mergeSort(int[] arr) {
    int n = arr.length;
    mergeSortHelper(arr, 0, n - 1);
}

private static void mergeSortHelper(int[] arr, int lo, int hi) {
    if (lo >= hi) return;
    int mid = lo + (hi - lo)/2;
    mergeSortHelper(arr, lo, mid);
    mergeSortHelper(arr, mid + 1, hi);
    merge(arr, lo, hi);
}

// merge arr[lo,mid] arr[mid+1,hi] to arr[lo,hi]
private static void merge(int[] arr, int lo, int hi) {
    int mid = lo + (hi-lo)/2;
    int[] tmp = new int[hi-lo+1];
    int i = lo, j = mid + 1, k = 0;
    while (i <= mid && j <= hi) {
        if (arr[i] <= arr[j]) tmp[k++] = arr[i++];
        else tmp[k++] = arr[j++];
    }
    while (i <= mid) tmp[k++] = arr[i++];
    while (j <= hi) tmp[k++] = arr[j++];
    k = 0;
    while(k < hi - lo + 1) {
        arr[lo+k] = tmp[k];
        k++;
    }
}
```

## 快速排序
- 同样也是运用分治思想，选择任意元素作为主元（pivot），分解原数组为三部分，使得主元左边元素全部小于主元，主元右边元素全部大于主元，接着递归对左右部分进行排序即可

```text
qsort(A,n):
    qsort_h(A, 0, n)

qsort_h(A, p, r):
    if p >= r then return
    q = partition(A, p, r)  // 获取主元，即分区点
    qsort_h(A, p, q-1)
    qsort_h(A, q+1, r)
```


- `partition()` ，快速排序的核心函数，其主要思想是，选择最后一个元素作为主元，将数组 `[p..r]` 分为已处理区间 `[p..i-1]` 和未处理区间 `[i..r]` , 每次从未处理区间选出一个元素，如果元素小于 pivot ，则通过交换，将其加入已处理区间的尾部（本质是双指针的一种应用）
- 归并排序是**自下而上**完成排序，而快速排序是**自上而下**完成排序

**稳定性**：不稳定，这是由于分区函数涉及交换，可能会改变元素的前后顺序

**内存消耗**：`O(1)` ，分区函数通过交换，避免了使用额外的空间（不考虑函数递归栈），考虑递归栈则：平均递归深度为 `O(logn)`，每次都是最差划分，则递归深度 `O(n)`

**执行效率**：（1）最优：如果每次分区函数能恰好将数组分成**均匀**的两部分，则时间复杂度递推式与归并排序相同，时间复杂度为 `O(nlogn)` （2）最差：极端情况下，如数组本身完全有序，每次选择最后一个元素为 pivot ，则需要 n 次分区操作，才能完成排序，这种情况下时间复杂度退化为 `O(n^2)`

::: tip 快速排序的优化
快排在最差情况下时间复杂度为 `O(n^2)` ，主要原因是分区点选择不合理，如何实现理想的分区函数，即被分区点分开的两个分区中，元素数量几乎相等，是优化的关键

1. **三数取中法**：从区间的首、尾、中间，分别取出一个数，对比大小，取三个数的中间值作为分区点

2. **随机法**：每次从区间中随机选择一个元素作为分区点。尽管随机不能保证每次分区点都是最理想的，但是也不会出现每次分区点都选择很差的情况，因此平均来看效果较好，不太可能出现时间复杂度退化为 `O(nlogn)`
:::

```java
public static void qSort(int[] arr) {
    int n = arr.length;
    qSortHelper(arr, 0, n-1);
}

private static void qSortHelper(int[] arr, int lo, int hi) {
    if (lo >= hi) return;
    int pivot = partition(arr, lo, hi);
    qSortHelper(arr, lo, pivot-1);
    qSortHelper(arr, pivot+1, hi);
}

private static int partition(int[] arr, int lo, int hi) {
    int i = lo;
    for (int j = lo; j < hi; j++) {
        if (arr[j] < arr[hi]) {
            swap(arr, i, j)
            i++;
        }
    }
    swap(arr, i, hi);
    return i;
}
```