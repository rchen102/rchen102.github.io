1. 为什么重写 equals 后，要重写 hashcode 方法

Object 中原生的 equals 和 hashCode：  
- equals：单纯比较两个对象地址
- hashCode：根据内存地址换算出来的一个值

重写 equals 是为了实现自定义的内容比较，一般不涉及 hash 类型集合时不用重写 hashcode 方法

但是一旦涉及有关 hash 的集合，不重写 hashCode 就会违反源码中的一些规定：
- equals() 相等 -> hashCode() 一定相等
- hashCode() 相等 -> equals() 不一定相等，哈希碰撞存在

HashMap 为例：插入元素时，先根据 hashCode，寻找插入位置，如果位置已经被使用，接着利用 equals 判断是否相等

2.
关于集合的
1.1Hashmap是不是有序的？   不是继续
1.2有没有有顺序的Map？     TreeMap  LinkedHashMap
1.3它们是怎么来保证顺序的？   一般都要说到其源码，要不说不清为么有序
1.4答两个有序或以上的 继续  你觉得它们有序的区别，那个比较好，在什么场景用哪个好？
1.4答一个也可以问上面的场景  继续
1.5你觉得有没有更好或者更高效的实现方式？有
1.6 答有  这个时候说起来可能就要跑到底层数据结构上去了
数据结构继续衍生 到 算法等等。。。
就这一个遇到大佬问你，能把很多人连到怀疑人生

2.关于hash的
1.1  hashmap基本的节点结构？  Node  键值对
1.2  键是什么样的，我用字符串a那键就是a嘛？   不是会进行hash
1.3  如何hash的  这样hash有什么好处？   源码hashmap的hash算法
1.4  Hash在java中主要作用是什么？
1.5  Hashcode  equal相关   需要同时重写？原因？
1.6  equal引出的对象地址、string带有字符串缓冲区、字符串常量池
等等。。。

3.关于线程安全问题、到concurrent包等