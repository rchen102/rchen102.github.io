---
title: test_new_post
date: 2019-08-30 21:40:04
categories: 其他
tags:
	- 结构
---

## 1_HTML基础

### 1 HTML概述
- **定义**：html全称为HyperText Markup Language，译为<font color=#0000ff>**超文本标记语言**</font>，非编程语言，是一种描述性的标记语言。
	- 超文本：音频，视频，图片称为超文本。
	- 标记 ：<英文单词或者字母>称为标记，一个HTML页面都是由各种标记组成。
- **作用**：HTML是负责描述文档**语义**的语言。
- **注意**：HTML语言不是一个编程语言(有编译过程)，而是一个**标记语言**(<font color=#0000ff>**没有编译过程**</font>)，HTML页面直接由浏览器解析执行。

### 2 HTML结构
- **声明部分**：
	- 文档声明头，DocType Declaration，简称DTD。告诉浏览器使用哪个版本的HTML规范来渲染文档。DOCTYPE不存在或形式不正确会导致HTML文档以混杂模式呈现。
	- 为什么H5不需要DTD：HTML5不基于SGML（Standard Generalized Markup Language 标准通用标记语言），因此不需要对DTD（DTD 文档类型定义）进行引用，但是需要DOCTYPE来规范浏览器行为。
- **head部分**：将页面的一些额外信息告诉服务器。不会显示在页面上。
头标签都放在<head></head>头部分之间。包括：`<title>`、`<base>`、`<meta>`、`<link>`
	- `<title>`：指定整个网页的标题，在浏览器最上方显示。
	- `<base>`：为页面上的所有链接规标题栏显示的内容定默认地址或默认目标。
	- `<meta>`：提供有关页面的基本信息
	- `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
	- `<link>`：定义文档与外部资源的关系。
- **body部分**：我们所写的代码必须放在此标签內。
	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
	</body>
	</html>
	```
