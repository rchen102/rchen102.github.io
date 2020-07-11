---
title: Set
date: 2020-07-04 10:44:00
categories: 
tags:
---
**Set 类继承结构图**

<div align=center>

![Set](/img/Java/Set.png)

</div>

---
Set 接口对 Collection 基本没有扩充，在 JDK 1.9 后追加了一些 `of()` 方法够建静态 Set

```java
public static void main(String[] args) throws IOException {
    Set<Integer> set = Set.of(1,2,3);
    /**
     * of 创建的集合不可修改，修改会报错
     * java.lang.UnsupportedOperationException
     */
    // set.add(4); 
    Set<Integer> set2 = new HashSet<>(set);
    set2.add(4);
    System.out.println(set2);
}
```




