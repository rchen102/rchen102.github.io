1. 为什么重写 equals 后，要重写 hashcode 方法

Object 中原生的 equals 和 hashCode：  
- equals：单纯比较两个对象地址
- hashCode：根据内存地址换算出来的一个值

重写 equals 是为了实现自定义的内容比较，一般不涉及 hash 类型集合时不用重写 hashcode 方法

但是一旦涉及有关 hash 的集合，不重写 hashCode 就会违反源码中的一些规定：
- equals() 相等 -> hashCode() 一定相等
- hashCode() 相等 -> equals() 不一定相等，哈希碰撞存在

HashMap 为例：插入元素时，先根据 hashCode，寻找插入位置，如果位置已经被使用，接着利用 equals 判断是否相等
