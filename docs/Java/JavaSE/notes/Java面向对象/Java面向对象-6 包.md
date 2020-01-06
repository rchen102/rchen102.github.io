---
title: 包
date: 2019-11-25 14:22:51
categories: 
    - [Java, Java面向对象]
tags:
---
## 介绍
为了更好地组织类，Java 提供了包机制，用于区别类名的命名空间

### 目的
- **管理组织项目**: 将功能相似或相关的类或接口组织在同一个包中，方便类的查找和使用
- **防止命名冲突**: 解决多人协作开发时，命名冲突的问题。包创建了新的命名空间(namespace)，不同包中可以存在重名的类
- **访问控制**: 包同时也提供了访问权限控制

::: tip 提示
一个包相当于对应一个文件夹，包也采用了树形目录的存储方式
:::

## 使用
### 定义
- 包的声明应该在源文件的第一行
- 通常使用小写字母进行包的定义
- 使用`.`表示子目录

```java{1}
package pkg1.pkg2.pkg3;

public class SomeClass {
}
```

### 导入
- 为了使用某个包中的成员，我们需要借助`import`关键字进行包中类的导入
- 如果在同一个包(同一个目录)下，则无需导入，可以直接使用
- `import`声明必须在包声明之后，类声明之前
- 可以使用通配符`*`，导入包中全部的类

::: warning 注意
- 使用通配符`*`进行导入，实际上不存在性能上的问题。只是自动导入所需要的类，不需要的不导入
- 如果需要同时使用不同包中相同类名的类时，应加上包名加以区分
:::

```java
package pkg5;

import pkg1.pkg2.pkg3.SomeClass;
import pkg1.pkg2.pkg4.SomeClass;

public class AnotherClass {
    public static void main(String[] args) {
        pkg1.pkg2.pkg3.SomeClass sc1 = new pkg1.pkg2.pkg3.SomeClass();
        pkg1.pkg2.pkg4.SomeClass sc2 = new pkg1.pkg2.pkg4.SomeClass();
    }
}
```

::: tip 提示
可以使用`javac -d . *.java`来编译并为`.class`文件自动生成目录
- `-d`: 表示根据`package`定义生成目录
- `.`: 表示目录的生成位置，`.`表示当前所在目录
:::

### 静态导入
如果一个类中的方法全是静态方法，则通常使用方式如下:
```java{1,10}
// ./util/MyMath/Function.java
package util.MyMath;

public class Function {
    public static int add(int n1, int n2) {
        return n1 + n2;
    }
}

// ./driver/Test.java
package driver;
import util.MyMath.Function;

public class Test {
    public static void main(String[] args) {
        int sum = Function.add(1,2);
    }
}
```

以上使用方式是`JDK1.5`之前采用的，现在也可以使用，`JDK1.5`之后引入了静态导入的特性

**静态导入**
- 要求类中的方法都是静态方法
- 调用类中静态方法时，可以省略类名称

```java
// ./driver/Test.java
package driver;
import static util.MyMath.Function.*;  // 静态导入

public class Test {
    public static void main(String[] args) {
        int sum = add(1,2);            // 调用时无需类名称
    }
}

```
## jar
通常一个项目开发完成后，存在大量的`.class`文件，不便于直接交与用户使用  
- 容易损伤硬盘
- 数据传输慢
- 维护困难

`JAR`文件(Java Archive)相当于一种压缩文件格式，可将多个文件合成一个文件，是一种与平台无关的文件格式

`JAR`文件与`zip`文件的区别在于JAR文件中默认包含了一个名为`MANIFEST.MF`的清单文件，在生成JAR文件时由系统自动创建，该文件可以用于指定主类

### 作用
- 压缩文件大小，加快传输速度(无需为每一个文件建立一个`HTTP`连接)
- 用于打包发布和使用类库
- 创建可执行`JAR`

### 使用
- 作为类库使用时，需要进行`CLASSPATH`的配置
    + 自动根据`CLASSPATH`进行路径中的`*.class`文件加载
    + `.jar`文件等同于一个目录
    + `SET CLASSPATH=.;E:\xxx\xxx.jar`
- 作为可执行`JAR`包使用时，需要指定主类

## 参考
[1] [Java菜鸟教程](https://www.runoob.com/java/java-package.html) 

[2] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)

