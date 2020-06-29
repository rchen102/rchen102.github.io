---
title: 异常处理
date: 2019-12-25 16:15:00
categories: 
tags:
---
## try-catch-finally
程序运行过程中可能出现异常，异常将导致程序提前中断，为了保证程序在出现异常时，仍然可以正常执行，需要设置异常处理

- `try`: 放置可能出现异常的代码
- `catch`: 从上到下依次匹配 catch 块，一旦发现匹配 catch 块，忽略后续其他 catch 
    + 因此范围小的异常应该放在范围大的后面（否则编译报错）
- `finally`: 最后执行且**总是执行**，常用于资源回收，中断数据库连接，文件关闭等操作。
    + 若出现异常，且之前的`catch`匹配失败，则 finally 执行完毕后，使用 JVM 默认异常处理（抛出异常）

<details>
<summary>代码样例</summary>

```java
try {
} catch (Exception e) {
} catch (IOException e) {
}
// 会报错，因为 IOException 继承 Exception，IOException永远不会被匹配

try {
    int res = 5 / 0;
} finally {
    System.out.println("finally");
}
/* Output
finally
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at driver.Driver.main(Driver.java:7) */
```

</details>


**执行顺序**  
1. try 语句中出现异常的代码之后的代码不会执行
2. finally 中的代码总会被执行，除非之前的代码中出现了 `System.exit(0)`
3. try 中含有 return：先执行 return 前的代码，暂时保存 return 信息，再执行 finally，最后返回结果
4. catch 中含有 return：先执行 return 前的代码，暂时保存 return 信息，再执行 finally，最后返回结果
5. finally 中含有 return：try 中的 return 会失效

<details>
<summary>代码样例1</summary>

```java
try {
    int res = 2/0; 
    System.out.println("try");      
} catch(ArithmeticException ae) {
    System.out.println("catch");
} finally {
    System.out.println("finally");
}
System.out.println("There");
```
```text
catch
finally
There
```

</details>

<details>
<summary>代码样例2</summary>

```java
try {
    int res = 2/0; 
    System.out.println("try");      
} catch(ArithmeticException ae) {
    System.out.println("catch");
    System.exit(0);
} finally {
    System.out.println("finally"); // 不会执行
}
System.out.println("There");
```
```text
catch
```

</details>

<details>
<summary>代码样例3</summary>

```java
// try中带有return时，会先执行return前的代码，然后暂时保存需要return的信息
// 再执行finally中的代码，最后再通过return返回之前保存的信息
public static void main(String[] args) {
    System.out.println("return: i=" + test());
}

public static int test() {
    int i = 0;
    try {
        System.out.println("try: i=" + i);
        return i;
    } catch(ArithmeticException ae) {
        System.out.println("catch");
    } finally {
        i++;
        System.out.println("finally: i=" + i);
    }
    i++;
    System.out.println("There: i=" + i);
    return i;
}
```
```text
try: i=0
finally: i=1
return: i=0
```

</details>

<details>
<summary>代码样例4</summary>

```java
public static int test() {
    int i = 0;
    try {
        System.out.println("try: i=" + i);
        int res = 5/0;
    } catch(ArithmeticException ae) {
        System.out.println("catch: i=" + i);
        return i;
    } finally {
        i++;
        System.out.println("finally: i=" + i);
    }
    i++;
    System.out.println("There: i=" + i);
    return i;
}
```
```text
try: i=0
catch: i=0
finally: i=1
return: i=0
```

</details>

<details>
<summary>代码样例5</summary>

```java
public static int test() {
    int i = 0;
    try {
        System.out.println("try: i=" + i);
        return i;
    } catch(ArithmeticException ae) {
        i++;
        System.out.println("catch: i=" + i);
        return i;
    } finally {
        i++;
        System.out.println("finally: i=" + i);
        return i;
    }
}
```
```text
// try 失效
try: i=0
finally: i=1
return: i=1
```

```java
public static int test() {
    int i = 0;
    try {
        System.out.println("try: i=" + i);
        int res = 5/0;
        return i;
    } catch(ArithmeticException ae) {
        i++;
        System.out.println("catch: i=" + i);
        return i;
    } finally {
        i++;
        System.out.println("finally: i=" + i);
        return i;
    }
}
```
```text
// catch 失效
try: i=0
catch: i=1
finally: i=2
return: i=2
```

</details>


## 异常继承
`Object <- Throwable <- Exception <- RuntimeException <- IndexOutOfBoundsException`  

`Object <- Throwable <- Error`


- `Exception`: 程序运行过程中出现，可以进行异常处理
- `Error`: 程序还未执行时出现，无法进行处理

可以通过捕获`Exception`捕获所有的异常，但是通常还是捕获特点异常进行不同处理


## throws和throw关键字
**1. throws**  
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

**2. throw**  
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

::: tip RuntimeException
异常实际上分为强制处理异常和非强制处理异常，对于非强制处理异常，如`RuntimeException`，尽管使用了`throws`进行说明，但是可以由用户选择性的进行处理

在不处理的时候如果产生异常，则会交由JVM自行进行处理(打印异常，终止程序)

常见的**RuntimeException**:  
`NullPointerException`, `ClassCastException`, `IndexOutOfBoundsException`
:::

## 自定义异常
Java内置了许多异常类型，但是在具体项目中仍然可能不足以满足需求，这时可以自定义异常

两种自定义异常的选择
- 继承`Exception`: 强制性处理异常
- 继承`RuntimeException`: 选择性异常处理

```java
class MyException extends RuntimeException {
    public MyException(String msg) {
        super(msg);
    }
}

class Test {
    public void foo(int n) throws MyException{
        if (n > 0) throw new MyException("Positive");
    }
}
```

## 断言
使用关键字`assert`，对指定内容进行判断，默认情况下，Java并不开启断言，需要使用参数`-ea`开启

当断言开启时，如果判断结果为false，则会抛出`AssertionError`

```java
class Test {
    public static void main(String[] args) {
        int num = 10;
        assert num == 30 : "False! num is not 30";  // Error Message
        System.out.println(num);
    }
}

java -ea Test
```

## 参考
[1] [阿里云大学 | 李兴华 - Java语言基础](https://edu.aliyun.com/roadmap/java?spm=5176.13345299.1392477.3.63ddf153q7QkVf)

