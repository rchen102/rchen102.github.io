---
title: 单例模式（Singleton）
date: 2020-06-29 17:48:00
categories: 
tags:
---
## 代码模板
```java
/**
 * 懒汉式
 */
public class Singleton {
    private static volatile Singleton instance = null;

    private Singleton() {
    }

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

/**
 * 饿汉式
 */
public class Singleton {
    private static final Singleton instance = new Singleton();

    private Singleton() {
    }

    public static Singleton getInstance() {
        return instance;
    }
}




```