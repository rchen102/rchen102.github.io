---
title: 异常处理
date: 2019-12-25 16:15:00
categories: 
tags:
---
## 异常处理
程序运行过程中可能出现异常，异常将导致程序提前中断

为了保证程序在出现异常时，仍然可以正常执行，需要设置异常处理

## try-catch-finally
- `catch`: 可以存在多个，按顺序匹配，如匹配成功则进行异常处理，如失败，匹配下一个
- `finally`: 执行完毕后，若之前的`catch`匹配失败，则使用JVM默认异常处理

```java
public static void main(String[] args) {
    try {
        int res = 2/0; 
        System.out.println(res);      // 出现异常的代码之后的代码将不会执行
    } catch(ArithmeticException ae) {
        ae.printStackTrace();         // 获取详细的异常信息
        System.exit(0);
    } finally {
        /* 
         * 无论是否出现异常，一定会执行的代码块
         * 常用于资源回收，中断数据库连接，文件关闭等操作
         */
        System.out.println("Here");
    }
    /*
     * 若catch匹配成功，从此后的语句不会执行
     * 因为exit将终止程序
     * 但是finally仍然会执行
     */
    System.out.println("There");
}
```

:::tip 异常继承
`Object -> Throwable -> Exception -> RuntimeException -> IndexOutOfBoundsException`  
`Object -> Throwable -> Error`
:::

- `Exception`: 程序运行过程中出现，可以进行异常处理
- `Error`: 程序还未执行时出现，无法进行处理

可以通过捕获`Exception`捕获所有的异常，但是通常还是捕获特点异常进行不同处理

## throws关键字
- 可以通过`throws`关键字向方法调用者说明该方法可能抛出的异常
- 调用使用了`throws`的方法时，需要对声明的异常进行捕获和处理
- 如果不打算在本层进行异常处理，则调用者也可以使用`throws`将异常继续交由上层
- 主方法也可使用`throws`，则代表该异常将交给JVM进行处理

```java
class Test {
    public static int divide(int x, int y) throws Exception {
        return x/y;
    }

    /*
     * 1 使用try-catch进行捕获
     */
    public static void main(String[] args) {
        try {
            Test.divide(10, 2);
        } catch(Exception e) {
            // Do something
        }
    }

    /*
     * 2 或者继续交给上层调用者进行处理
     */
    public static void main(String[] args) throws Exception {
        Test.divide(10, 2);
    }
}
```

## throw关键字
异常可以由系统自动实例化对象随后抛出，也可以通过`throw`手工进行异常类的实例化对象抛出

```java
class Test {
    /*
     * 如果不打算使用throws向上抛出由调用者进行异常处理
     * 则需要在方法内使用try-catch进行捕获处理
     */
    public static int divide(int x, int y) throws Exception {
        if (y == 0) {
            throw new Exception("y cannot be zero");
        }
        return x/y;
    }
}
```

## RuntimeException
异常实际上分为强制处理异常和非强制处理异常，对于非强制处理异常，如`RuntimeException`，尽管使用了`throws`进行说明，但是可以由用户选择性的进行处理

在不处理的时候如果产生异常，则会交由JVM自行进行处理(打印异常，终止程序)

常见的**RuntimeException**:  
`NullPointerException`, `ClassCastException`, `IndexOutOfBoundsException`

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)

