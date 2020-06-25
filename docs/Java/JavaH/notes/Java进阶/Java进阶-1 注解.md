---
title: 注解
date: 2020-01-21 10:49:00
categories: 
tags:
---
## 历史背景
程序往往需要与服务器进行交互，因此需要与服务器相关的信息内容打交道

如果程序中包含大量与服务器相关的信息内容(如服务器地址)，那么当服务器相关的配置发生变化时(如服务器地址改变)，程序使用者就需要进行大量的程序修改

**第一阶段**  
将代码与配置信息混合编写，所有内容都写在程序中，设置专门的**公共信息类**

---

**第二阶段**  
使用配置文件，配置文件与代码相分离，文件中保存所有的配置信息项，需要一个**配置读取类**
- 问题1: 每一个项目的配置文件不同，导致配置文件种类繁多
- 问题2: 项目中频繁使用配置文件，使得配置文件过多，维护困难

---

**第三阶段**  
使用注解，保留配置文件的部分功能，将一些与**程序环境**有关的内容写回到程序之中

此时的代码便于开发也便于维护，随着技术发展，注解功能也更加强大

实际上将配置分为了
- 程序配置 -> 使用注解
- 公共环境配置 -> 配置文件

## 基本原理
注解（Annotation）又称标注，是 JDK1.5 引入的一种注释机制

主要用来做**标注**使用，可以在**类，字段变量，方法，接口**等位置进行**标记**，后续就可以利用 Java 的**反射**机制，在运行时动态获取到注解的标注信息，从而实现诸如：**代码生成，数据校验，资源整合**等操作

## 自定义注解
以实现注解 `@Length` 为例
```java
@Length(min = 11, max = 11, errorMessage = "电话长度必须为11位")
private String mobile;
```

**1. 定义注解**
```java
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface Length {
    int min(); 
    int max();
    String errorMessage();
}
```

- 定义注解，使用关键字 `@interface`，实际上自动继承了 `java.lang.annotation.Annotation` 接口，由编译程序自动完成其他细节
- 每一个方法实际声明了一个配置参数。方法的名称就是参数的名称，返回值类型就是参数的类型（支持：基本类型，String，Class，enum）
- 元注解：负责注解其他注解

::: tip 元注解
**@Target**：用于描述注解的使用范围
- `ElementType.FIELD`：可用于注解类的变量
- `ElementType.METHOD`：可用于注解类的方法
- `ElementType.TYPE`：可用于注解类，接口，或 enum 类型

---

**@Retention**：用于定义注解的生命周期，生命周期从长到短：RUNTIME > CLASS > SOURCE
- `RetentionPolicy.RUNTIME`：注解一直保留到运行时，可以利用反射动态获取注解信息
- `RetentionPolicy.CLASS`：注解被编译器编译进 .class 文件，但运行时忽略，可用于在编译时进行预处理操作，如生成一些辅助代码
- `RetentionPolicy.SOURCE`：仅在源文件中有效，可用于进行一些检查操作，如 @Override 和 @SuppressWarnings
:::

**2. 获取注解并验证**
```java
public static String validate(Object object) throws IllegalAccessException {
    // 获取对象的全部字段
    Field[] fields = object.getClass().getDeclaredFields();

    // 遍历每个字段，检查哪个字段上标注了注解
    for (Field field : fields) {
        if (field.isAnnotationPresent(Length.class)) {
            Length length = field.getAnnotation(Length.class);
            field.setAccessible(true); // 使得在反射时能访问私有变量
            int value = ((String)field.get(object)).length();
            if (value < length.min() || value > length.max()) {
                return length.errorMessage();
            }
        }
    }
    return null;
}

```


## 内置注解
**@Override**：准确覆写  
- 避免错误的覆写定义 (如`toString`错写成`tostring`，这种错误不会报错，但并非正确覆写)
- 注释功能，提示用户哪些方法是覆写方法

---

**@Deprecated**：过期警告  
- 编译时给出警告信息，不影响编译和执行

---

**@SuppressWarnings**：警告压制  
- 对于已知的风险和警告，压制警告提示

## 参考
[1] [CodeSheep | 听说你只会用注解，不会自己写注解？](https://www.bilibili.com/read/cv4802402)

[2] [菜鸟教程 | Java注解（Annotation）](https://www.runoob.com/w3cnote/java-annotation.html)
