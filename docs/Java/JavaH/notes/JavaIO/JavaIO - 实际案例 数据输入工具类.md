---
title: 实际案例 数据输入工具类
date: 2020-07-02 11:11:00
categories: 
tags:
---
## 注意事项
1. Scanner 相比 BufferedReader 可以方便的定义分割符，以及进行各种数据类型的判断，但是如果只是以键盘输入数据，BufferedReader 更合适
2. 最常见的开发输入输出搭配：BufferedReader/Scanner 和 PrintStream/PrintWriter

## 样例代码
```java
public class KeyboardInputReader {
    private static final BufferedReader INPUT = 
        new BufferedReader(new InputStreamReader(System.in));

    public String getString(String prompt) {
        System.out.println(prompt);
        String value = null;
        try {
            value = INPUT.readLine();
        } catch (IOException ie) {
            ie.printStackTrace();
        }
        return value;
    }

    public String getStringNotNull(String prompt) {
        String value = null;
        while (true) {
            value = this.getString(prompt);
            if (value != null && !"".equals(value)) {
                break;
            } else {
                System.out.println("Input can not be empty, try again.");
            }
        }
        return value;
    }
}
```