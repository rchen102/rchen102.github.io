---
title: --- 实现子类
date: 2020-07-04 11:04:00
categories: 
tags:
---
- HashSet：基于**哈希表**，元素无序唯一，线程不安全
- LinkedHashSet：基于**链表和哈希表**，保留元素的插入顺序，线程不安全
- TreeSet：基于**红黑树**，对元素按照指定顺序排序，线程不安全

## HashSet
**1. 基于 HashMap 实现**  
- 创建一个虚拟对象 Object PRESENT = new Object() 作为 value 

**2. 构造方法**  
- 基本调用 HashMap 的构造方法
- 含有一个特殊的 private 构造方法，创建一个 LinkedHashMap，主要给 LinkedHashSet 使用

**3. 保证没有重复元素，且允许 null 元素存在**  
- 利用 HashMap 的 key 存储元素，保证元素不重复，且 HashMap 允许使用 null 作为 key
- 因此元素同样需要两个方法支持 int hashCode() 和 boolean equals(Object obj)

**4. 序列化**  
- HashMap 是 transient 的，内部实现了 writeObject 和 readObject，避免空间浪费（至少 25% 是空的）

## LinkedHashSet
**1. 基于 LinkedHashMap 实现**  
- 继承 HashSet，结构简单，源码只包含 4 个构造方法和一个迭代器方法

**2. 构造方法**  
- 基本调用父类 HashSet 的 private 构造方法 super(initialCapacity, loadFactor, true);

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


