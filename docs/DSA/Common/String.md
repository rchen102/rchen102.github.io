---
title: 字符串
date: 2020-07-14 08:24:00
categories: 
tags:
---
## 判断回文字符串 - Palindrome
```java
// T: O(n) S: O(1)
public static boolean isPalindrome(String s, int lo, int hi) {
    if (s == null || lo > hi) return false;
    while (lo < hi) {
        if (s.charAt(lo) != s.charAt(hi)) return false;
        lo++;
        hi--;
    }
    return true;
}
```

## 判断变位词 - Anagram
```java 
// 静态判断
// T: O(n) S: O(k)
public static boolean isAnagram(String s, String t) {
    if (s == null || t == null || s.length() != t.length()) return false;
    int[] map = new int[256]; // new int[26]
    for (int i = 0; i < s.length(); i++) {
        map[s.charAt(i)]++;
        map[t.charAt(i)]--;
    }
    for (int count : map) {
        if (count != 0) return false;
    }
    return true;
}

// 动态判断，适合 sliding window
// 每次动态变化，判断需要的时间复杂度 O(26)
public static boolean isAnagram(String s) {
    int[] code = new int[26];
    for (char ch : s.toCharArray()) {
        code[ch - 'a'] += 1;
    }
    while(dynamic change) {
        char add = getNew();      // 加入新字符
        code[add - 'a'] -= 1;

        char leave = getLeave();  // 移除字符
        code[leave - 'a'] += 1;

        if (isAllZero(code)) return true;
    }
    return false;
}
```

## 判断一个字符串是否包含另一个字符串（Anagram 属于该分类下的特例）
```java
// 动态判断，适合 sliding window
// O(1)
public static boolean doesInclude(String s) {
    Map<Character, Integer> need = new HashMap<>();
    Map<Character, Integer> window = new HashMap<>();
    for (char ch : s.toCharArray()) {
        need.put(ch, need.getOrDefault(ch, 0) + 1);
    }
    int valid = 0; // 当前已经 OK 的字母种类（注意不是字母数量）
    while (dynamic change) {
        char add = getNew();
        if (need.containsKey(add)) {
            window.put(add, window.getOrDefault(add, 0) + 1);
            if ((int) window.get(add) == (int) need.get(add)) valid++;
        }

        char leave = getLeave();
        if (need.containsKey(leave)) {
            if ((int) window.get(leave) == (int) need.get(leave)) valid--;
            window.put(leave, window.get(leave) - 1);
        }

        if (valid == need.size()) return true;
    }
    return false;
}
```

## 字符串常用相关操作
**判断类**

```java
static boolean  isDigit​(char ch)     // 是否是数字
static boolean  isLetter​(char ch)    // 是否是字母
static boolean  isLetterOrDigit​(char ch)

static boolean  isLowerCase​(char ch)   
static boolean  isUpperCase​(char ch)
static char toLowerCase​(char ch)
static char toUpperCase​(char ch)
```

---
**转换类**

```java
/**** String char ****/
String str = String.valueOf(char ch);
String str = String.valueOf(char[] ch);

char ch = str.charAt(int idx);
char[] ch = str.toCharArray();

/**** String int ****/
String str = String.valueOf(int n); // best, n + ""，产生垃圾
int n = Integer.parseInt(str);

/**** char int ****/
int code = 97; char ch = (char) code; // 向下转换，需要强制转换类型
char ch = 'a'; int code = ch;  // 类型默认转换，获取ASCII码
```