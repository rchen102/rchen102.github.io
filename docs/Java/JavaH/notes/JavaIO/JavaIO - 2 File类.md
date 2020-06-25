---
title: File 类
date: 2020-06-24 20:42:00
categories: 
tags:
---
## 构造器
```java
public File(String pathname) // 设置要操作文件的完整路径
public File(File parent, String child) // 设置要操作文件的父目录与子文件路径
public static final String separator  // 适用于任何操作系统，windows：\\ unix：//

// 只是标记一个文件目录，文件就算不存在，只要不对其进行具体操作，如读取内容，就不会出错
public static void main(String[] args) {
    File file = new File("d:" + File.separator + "demo.txt"); 

    System.out.println(file);
}
```

## 文件操作
```java
public boolean createNewFile() throws IOException // 创建一个新的文件
public boolean delete() // 删除文件
public boolean exists() // 判断文件是否存在
public boolean renameTo​(File dest)  // 文件更名

// 文件存在则删除，不存在则创建
public static void main(String[] args) {
    File file = new File("d:\\demo.txt"); 
    if (file.exists()) {
        file.delete();
    } else {
        file.createNewFile();
    }
    File oldfile = new File("d:\\demo.txt"); 
    File newfile = new File("d:\\hello.txt"); 
    oldfile.renameTo​(newfile);
}
```

## 目录操作
```java
//必须在父目录存在情况下，才可以对子目录进行操作
public boolean mkdir()      // 只创建单级目录
public boolean mkdirs()     // 创建多级目录（多个子目录可以同时创建）
public String getParent()   // 获取父目录的信息
public File getParentFile() // 获取父目录的File实例


public static void main(String[] args) {
    File file = new File("d:\\crz\\my\\demo.txt"); 
    if (!file.getParentFile().exists()) {
        // 父路径不存在
        file.getParentFile().mkdirs(); // 创建父路径
    }
}

// 当前程序如果在多线程下执行，每次都需要判断路径是否存在会消耗大量时间
// 改进 -> 静态代码块

private static File file = new File("d:\\crz\\my\\demo.txt"); 

static {
    if (!file.getParentFile().exists()) {
        // 父路径不存在
        file.getParentFile().mkdirs(); // 创建父路径
    }
}

public static void main(String[] args) {
    //TODO
}
```

## 获取文件信息
```java
public boolean canExecute()  // 是否能执行
public boolean canRead()     // 是否能读
public boolean canWrite()     // 是否能读

public File getAbsoluteFile()   // 获取文件的绝对路径File实例
public String getName()       // 获取文件或路径的名称（非完整路径名称）

public boolean isDirectory()   // 当前路径是否为目录
public boolean isFile()   // 当前路径是否为文件

public long lastModified()  // 获取最后一次的修改日期，毫秒数
public long length()  // 获取文件长度，单位是Byte
```

## 获取文件目录信息
```java
// 获取当前路径下，所有的子路径的信息，如文件，目录（名字中不包含父目录）
public String[] list()
// 获取当前路径下，所有的子路径的File实例，可通过实例获取了完整路径名称      
public File[] listFiles()   
```