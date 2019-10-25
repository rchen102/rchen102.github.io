---
title: Java笔记5-面向对象2
date: 2019-10-14 20:03:19
categories: Java
tags:
---
## Java面向对象2
__目录__
Java继承

__参考__
[1] [Java菜鸟教程](https://www.runoob.com/java/java-tutorial.html) 
[2] [java提高篇(二)——理解java的三大特性之继承](https://www.cnblogs.com/chenssy/p/3354884.html)
[4] [Java的private成员变量的继承问题](https://www.cnblogs.com/yulianggo/p/10417229.html)

### Java继承
- 继承(Inheritance)是面向对象的重要基础，也是Java三大特性之一
- 继承允许子类继承父类的属性和方法，提高了代码的复用性(reuse)
- 继承具有向上转型的特点，子类与父类具有`is-a`关系，`Person p = new Student()`

__1. 继承的特性__
- 子类继承父类全部内容，但是部分属于显式继承，部分隐式继承
  -> 「继承」父类非`private`的属性、方法
- 子类可以对父类进行拓展，增加新的属性方法，或方法重写，属性覆盖
- Java不支持多继承(子类同时继承多个父类)，但支持多层继承

<!-- more -->

__2. 子类的构造__
- 默认先调用父类的__无参__构造进行初始化(默认首行添加`super()`)，再向子类层级完成构造
- 若父类没有无参构造方法，应在__第一行__使用`super(args)`来显式指定调用父类的构造器

__3. 关键字private和protected__
- 子类继承父类非`private`的属性和方法，但是父类的`private`属性和方法实际上仍然存在
- 子类可以通过`super.`显式访问父类非`private`属性或调用非`private`方法
- 子类可以拥有父类同名的`private`方法，但是此时不属于`Override`
- 可以使用`protected`让字段或变量对类和子类可见，对类的用户而言相当于`private`

__4. 重写与重载__
- `Override`重写，子类对父类允许访问方法的重新实现
    + 形参列表: 必须不变
    + 返回类型: 可以不同，但是必须是父类返回值的派生类(Java7及更高版本)
    + 访问权限: 可以改变，但是不能比父类权限更低
    + 异常: 可以抛出任何非强制异常，但不能抛出新的或更广的强制异常
    + 声明为`final`的方法不能被重写
    + 声明为`static`的方法不能被重写，但是能够再次声明
    + 可以使用`super.method()`调用父类被重写的方法
- `Overload`重载，属于类的多态性的一个体现
    + 形参列表: 必须改变(类型，个数)
    + 返回类型: 可以不同
    + 访问权限: 可以改变
    + 异常: 可以声明新的或更广的检查异常

```java
class Person{
    private String name;

    public Person(String nameIn) {
        this.name = nameIn;
    }

    public String getName() {
        return this.name;
    }

    private void setName(String name) {
        this.name = name;
    }

    public void printInfo() {
        System.out.println("Name: " + this.name);
    }

    public Person getOne() {
        return new Person("rchen102");
    }
}

class Student extends Person {
    private String school;

    public Student(String nameIn, String schoolIn) {
        super(nameIn);
        this.school = schoolIn;
    }

    @Override
    public void printInfo() {
        super.printInfo(); // Call the overridden method of father
        System.out.println("School: " + this.school);
    }

    @Override // Though return type is different, still work
    public Student getOne() {
        return new Student("rchen102", "BU");
    }
}
```