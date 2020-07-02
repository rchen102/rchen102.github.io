---
title: System 对 IO 的支持
date: 2020-06-29 21:06:00
categories: 
tags:
---
## 介绍
java.lang.System 中提供了 3 个与 IO 相关的系统常量：  
- 错误输出（显示器，颜色不同）：public static final PrintStream err
- 标准输出（显示器）：public static final PrintStream out
- 标准输入（键盘）：public static final InputStream in

## 代码样例
**Scanner**  
- 默认使用空格作为分割符（配合 next() 依次读取字符），如需要改变，使用 useDelimiter() 方法

```java
// 参考链接 https://blog.csdn.net/CYQqi/article/details/79733031
// 1. 读入一个数
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt(); // 或者 nextFloat()
    sc.close();
    System.out.println(num);
}

// 2. 读入指定长度的数组，先输入一个长度，再输入对应数量数据
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int[] data = new int[n];
    for (int i = 0; i < n; i++) {
        data[i] = sc.nextInt();
    }
    sc.close();
    System.out.println(Arrays.toString(data));
}

// 3. 读入一行字符串
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String line = sc.nextLine();
    sc.close();
    System.out.println(line);
}
```

