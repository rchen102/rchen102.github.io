---
title: Set - 实现
date: 2020-07-04 11:04:00
categories: 
tags:
---
## HashSet
1. 基于 HashMap 实现  

2. 构造方法  
- 无参构造：和 HashMap 一样，初始大小也是 16，最大装载因子 0.75
- 有参构造：指定初始大小和最大装载因子

3. 重复元素的判断需要两个操作支持
- 对象编码比较：public int hashCode()
- 对象内容比较：public boolean equals(Object obj)

## TreeSet
1. 基于 TreeMap 实现  

2. 构造方法  
- 无参构造：创建空的 Set，根据自然顺序（natural ordering）排序，元素需要实现 Comparable 接口
- 有参构造：指定一个比较器 Comparator<? super E> comparator

3. 比较  
- 如果使用 TreeSet 存储实现了 Comparable 的自定义类，那么重写 compareTo 方法时，需要比较所有属性；如果只比较部分，那么如果有两个对象，部分属性相同，可能也会被认定重复

<details>
<summary>点击查看代码样例</summary>

```java
class Person implements Comparable<Person> {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(Person person) {
        return this.age - person.age;
    }
}

public class Driver {
    public static void main(String[] args) throws IOException {
        TreeSet<Person> set = new TreeSet<>();
        set.add(new Person("a",10));
        set.add(new Person("b",10));
        System.out.println(set);
    }
}

// Output:
[Person{name='a', age=10}]  // b 会被判定为重复
```

</details>


