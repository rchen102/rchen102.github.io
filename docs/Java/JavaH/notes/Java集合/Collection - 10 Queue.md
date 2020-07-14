---
title: Queue
date: 2020-07-14 15:54:00
categories: 
tags:
---
**Queue 类继承结构图**  

<div align=center>

![Queue类图](/img/Java/Queue.png)

</div>

---
Queue 扩充 Collection 新方法

```java
// 扩充方法，如果失败，会返回特殊值
boolean offer​(E e)  // 插入 tail，返回 false 如果失败
E   poll()          // 弹出 head，null 如果队列为空
E   peek()          // 返回 head，null 如果队列为空

// 一样效果的方法，只是失败会 throw exception
boolean add​(E e)    // 对应 offer
E   remove()        // 对应 poll   
E   element()       // 对应 peek
```

---
Deque 扩充 Queue 新方法

```java
// 针对 head 队首
boolean offerFirst​(E e)   // addFirst(e)
E   pollFirst()           // removeFirst()
E   peekFirst()           // getFirst()

// 针对 tail 队尾
boolean offerLast​(E e)    // addLast(e)
E   pollLast()            // removeLast()
E   peekLast()            // getLast()

// 作为 Stack
void    push​(E e)         // addFirst(e)
E   pop()                 // removeFirst()
E   peek()                // getFirst()
```

---
BlockingQueue

|  |  Throws exception  | Special value | Blocks |  Times out |
| :--: | :--: | :--: | :--: | :--: |
| Insert | add(e) |  offer(e) |    put(e) |  offer(e, time, unit) | 
| Remove |  remove()   |  poll()  | take() |  poll(time, unit)| 
| Examine | element() |   peek() |  not applicable  | not applicable| 

---
BlockingDeque

|  |  Throws exception  | Special value | Blocks |  Times out |
| :--: | :--: | :--: | :--: | :--: |
| Insert |  addFirst(e)|  offerFirst(e) |   putFirst(e) | offerFirst(e, time, unit)| 
| Remove |  removeFirst()  |  pollFirst()|  takeFirst()|  pollFirst(time, unit)| 
| Examine | getFirst() |  peekFirst() |  not applicable |  not applicable| 


|  |  Throws exception  | Special value | Blocks |  Times out |
| :--: | :--: | :--: | :--: | :--: |
| Insert |  addLast(e)|  offerLast(e) |   putLast(e) | offerLast(e, time, unit)| 
| Remove |  removeLast()  |  pollLast()|  takeLast()|  pollLast(time, unit)| 
| Examine | getLast() |  peekLast() |  not applicable |  not applicable| 