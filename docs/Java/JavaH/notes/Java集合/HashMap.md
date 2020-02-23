---
title: HashMap
date: 2020-02-23 13:30:00
categories: 
tags:
---
1. 初始大小
默认初始大小 16，如果事先知道数据量有多大，可以提前设置，减少动态扩容次数，提高性能

2. 装载因子和动态扩容
最大装载因子 0.75，达到阈值就会启动扩容，每次扩容为原来的两倍

3. 散列冲突的解决
底层采用链表法来解决冲突，在 JDK1.8 中，作了进一步优化，当链表长度太长（默认超过 8）时，链表就会转换为红黑树，可以l利用红黑树快速增删改查的特点提高 HashMap 的性能，当红黑树j结点数少于 8 时，又会转化为链表（数据量较小时，红黑树要维持平衡，比起链表，性能优势并不明显）

4. 散列函数
散列函数并不复杂，追求简单高效、分布均匀
```java
int hash(Object key) {
    int h = key.hashCode()；
    return (h ^ (h >>> 16)) & (capicity -1); //capicity表示散列表的大小
}


public int hashCode() {
  int var1 = this.hash;
  if(var1 == 0 && this.value.length > 0) {
    char[] var2 = this.value;
    for(int var3 = 0; var3 < this.value.length; ++var3) {
      var1 = 31 * var1 + var2[var3];
    }
    this.hash = var1;
  }
  return var1;
}
```