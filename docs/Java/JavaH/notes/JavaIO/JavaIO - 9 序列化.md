---
title: 序列化
date: 2020-06-30 10:07:00
categories: 
tags:
---
## 序列化与反序列化
- 序列化（Serialization）：将内存里的对象转化为便于存储或传输的形式（比如，二进制数据流）
- 反序列化（Deserialization）：序列化的逆向操作

Java 原生序列化：只有实现了 java.io.Serializable 接口的类，才可以序列化

**序列化版本号**（serialVersionUID）
- 进行反序列化时，JVM 会把传来的字节流中的 serialVersionUID 与本地实体类中的 serialVersionUID 进行比较，如果相同则认为是一致的，便可以进行反序列化，否则就会报序列化版本不一致的异常
- 如果不显式指定 serialVersionUID，系统会在编译生成 class 文件时，自动生成一个 serialVersionUID，这种情况下，只有同一次编译生成的 class 才会拥有相同的 serialVersionUID

<details>
<summary>点击查看 Serializable 接口</summary>

```java
// since JDK 1.1 
// 没有方法，只是一个标记接口
public interface Serializable

private static final long serialVersionUID = -5809782578272943999L;
```

</details>

## 序列流
java.io 提供了两个序列流，ObjectOutputStream 和 ObjectInputStream，这两个本质上也属于处理流，但是继承结构与其他处理流不同

### 1. ObjectOutputStream
```java
// 定义 since JDK 1.1
public class ObjectOutputStream
extends OutputStream
implements ObjectOutput, ObjectStreamConstants

public ObjectOutputStream​(OutputStream out) throws IOException

// 序列化方法
public final void writeObject​(Object obj) throws IOException
```

### 2. ObjectInputStream
```java
// 定义 since JDK 1.1
public class ObjectInputStream
extends InputStream
implements ObjectInput, ObjectStreamConstants

public ObjectInputStream​(InputStream in) throws IOException

// 反序列化方法
public final Object readObject() throws IOException, ClassNotFoundException
```

## 样例代码
**关键字 transient**  
- 序列化时，默认所有属性都会被序列化
- 如果希望某个属性，如密码，不被序列化，可以使用 transient 关键字

```java
class Student implements Serializable {
    String name;
    transient int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
}

public static void serialize() throws IOException {
    Student student = new Student("rchen102", 22);
    ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(file));
    oos.writeObject(student);
    oos.close();
}

public static void deserialize() throws IOException, ClassNotFoundException {
    ObjectInputStream ois = new ObjectInputStream(new FileInputStream(file));
    Student student = (Student) ois.readObject();
    System.out.println(student);
}

```