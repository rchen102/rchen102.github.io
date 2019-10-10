---
title: Java笔记4
date: 2019-10-10 11:21:14
categories:
tags:
---
## Java面向对象
__目录__
Java封装
Java继承
Java多态
Java接口

__参考__
[1] [Java菜鸟教程](https://www.runoob.com/java/java-tutorial.html) 
[2] [Java的封装](https://www.cnblogs.com/zhangruifeng/p/9320561.html)
[3] [java提高篇(二)——理解java的三大特性之继承](https://www.cnblogs.com/chenssy/p/3354884.html)
[4] [Java的private成员变量的继承问题](https://www.cnblogs.com/yulianggo/p/10417229.html)

### Java封装
封装(Encapsulation)是Java的三大特性之一，其主要思想即：__需要隐藏的隐藏，需要暴露的暴露__

封装的优点/目的：
1. 隐藏信息和实现细节
2. 通过实现好的方法对字段进行访问和修改，避免不合理的访问，提高了安全性
3. 良好的封装可以减少耦合，修改类的内部结构，不影响对外的API

如何实现封装：通过访问控制符，隐藏字段(属性)和实现细节，提供对外的公共方法
```java
public class Student {
    private int age;

    public int getAge() {
        return this.age;
    }

    public boolean setAge(int ageIn) {
        if (ageIn < 6 || ageIn > 100) return false;
        this.age = ageIn;
        return true;
    }
}

```

<!-- more -->

### Java继承
1. 继承(Inheritance)是面向对象的重要基础，也是Java三大特性之一
2. 继承允许子类继承父类的字段和方法，提高了代码的复用性(reuse)
3. Java使用关键字`extend`来实现继承
4. 继承具有向上转型的特点，子类与父类具有`is-a`关系，`Person p = new Student()`

__继承的特性__
- 子类继承父类非private的属性、方法
- 子类可以对父类进行拓展，增加新的字段方法，或对继承的方法进行重写override
- Java不支持多继承(子类同时继承多个父类)，但支持多重继承

__子类的构造__
- 在一个子类被实例化时，会默认调用父类的构造方法进行初始化，之后再向子类层级完成构造
- 当父类具有默认构造器时，子类无需显式调用，否则应在__第一行__使用`super()`来显式指定父类构造器


```java
class Person{
    private String name;

    public Person(String nameIn) {
        this.name = nameIn;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String nameIn) {
        this.name = nameIn;
    }

    public void printInfo() {
        System.out.println("My name is " + this.name);
    }
}

class Student extends Person {
    private String school;

    public Student(String nameIn, String schoolIn) {
        super(nameIn);
        this.school = schoolIn;
    }

    @override
    public void printInfo() {
        super.printInfo();
        System.out.println("My school is " + this.school);
    }
}
```

__关键字private和protected__
- 子类继承父类非private的字段和方法，但是父类的private字段和方法实际上仍然存在
- 子类可以通过`super.method()`调用父类的非private方法
- 子类可以拥有父类同名的private方法，但是并不属于override
- 可以使用protected让字段或变量对类和子类可见，对类的用户而言相当于private

```java
class Father {
    public void pubPrint() {
        System.out.println("Public method in Father");
    }
    private void priPrint() {
        System.out.println("Private method in Father");
    }
}

class Child extends Father {
    public void print() {
        super.pubPrint();
    }
}

Output:
Public method in Father
Private method in Father
```