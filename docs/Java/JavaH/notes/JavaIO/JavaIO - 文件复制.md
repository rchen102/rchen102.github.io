---
title: 实际案例 文件复制
date: 2020-06-29 10:38:00
categories: 
tags:
---
## 注意事项
1. 拷贝文件既可能是文本文件又可能是二进制文件，为了通用性，使用**字节流**
2. 拷贝文件可能极大，不能一次读取，因此采用边读边写
3. 目标文件可能不存在，需要进行异常处理
3. 拷贝后的文件目录可能不存在，需要创建目录

## 样例代码
```java
class CopyUtil {
    private File srcFile;
    private File destFile;

    public CopyUtil(String[] args) {
        if (args.length != 2) {
            throw new IllegalArgumentException("Need 2 arguments!");
        }
        this.srcFile = new File(args[0]);
        this.destFile = new File(args[1]);
    }

    /**
     * 实现拷贝操作的过程
     * @return 本次拷贝所用时间
     * @throws FileNotFoundException 源文件不存在
     */
    public long copy() throws IOException {
        long start = System.currentTimeMillis();
        if (!this.srcFile.exists()) {
            throw new FileNotFoundException("Source file not exist!");
        }
        if (!this.destFile.getParentFile().exists()) {
            this.destFile.getParentFile().mkdirs();
        }
        InputStream input = null;
        OutputStream output = null;
        try {
            input = new FileInputStream(this.srcFile);
            output = new FileOutputStream(this.destFile);
            byte[] data = new byte[1024];
            int len = 0;  // 读取的字节个数
            while ((len = input.read(data)) != -1) {
                output.write(data, 0, len);
            }
        } catch (IOException e) {
            e.printStackTrace();
            throw e;
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (output != null) {
                try {
                    output.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        long end = System.currentTimeMillis();
        return end - start;
    }
}

public class Driver {
    public static void main(String[] args) {
        CopyUtil cu = new CopyUtil(args);
        try {
            System.out.println(cu.copy());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
```

JDK1.9 优化：使用 transferTo 新方法，系统自主选择合适大小的 buffer 进行分段拷贝
```java
try {
    input = new FileInputStream(this.srcFile);
    output = new FileOutputStream(this.destFile);
    input.transferTo(output);
}
```