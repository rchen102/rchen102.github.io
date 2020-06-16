---
title: 链表
date: 2020-06-16 08:13:00
categories: 
tags:
---
## 反转链表
```java
public ListNode reverseList(ListNode head) {
    ListNode dummy = new ListNode(-1);
    ListNode prev = dummy;
    while (head != null) {
        ListNode next = head.next;
        head.next = prev.next;
        prev.next = head;
        head = next;
    }
    return dummy.next;
}
```

## 插入结点
```java
// T: O(n) S: O(1)
public ListNode insertNode(ListNode head, ListNode node) {
    // node.next = null;  // clean tail
    ListNode dummy = new ListNode(-1);
    dummy.next = head;
    ListNode prev = dummy;
    while (prev.next != null && prev.next.val < node.val) {
        prev = prev.next;
    }
    node.next = prev.next;
    prev.next = node;
    return dummy.next;
}
```

## 快慢指针
```java
// 快慢指针寻环 T: O(n) S: O(1)
// 每一步快指针比慢指针多走1步，O(n)时间后，比慢指针正好多走n步，即一圈
public boolean hasCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}

// Follow up
public ListNode detectCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    boolean hasCycle = false;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return null;
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }        
    return slow;
}

// 寻找中点
// 偶数：返回中间的第二个元素
public ListNode middleNode(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

```