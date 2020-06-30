---
title: 装饰者模式（Decorator）
date: 2020-06-29 17:48:00
categories: 
tags:
---
## 介绍
**要点**  
- 装饰者模式：实现了不破坏原有类的情况下动态扩展一个类的功能
- 装饰者和被装饰对象有相同的超类型
- 可以使用一个或多个装饰者包装一个对象（良好的拓展性）
- 装饰者可以在所委托被装饰者的行为之前或之后，加上自己的行为，以达到特定的目的

---

**设计原则**  
- 多用组合，少用继承
- 开闭原则

虽然遵从了多用组合，少用继承的原则，但是装饰者模式还是使用了继承，这么做的重点在于，装饰者和被装饰者必须具有共同的超类，**利用继承达到“类型匹配”，而不是利用继承获得“行为”**


## 代码模板
装饰者模式既可以使用抽象类实现，也可以通过接口实现

<details>
<summary>点击查看</summary>

```java
// 1. 抽象组件
public abstract class Component {
    public abstract methodA();
    public methodB(); // 无需子类重写的方法
}

// 2. 抽象装饰器
public abstract class Decorator extends Component {
    Component wrappedObj;

    public Decorator(Component obj) {
        this.wrappedObj = obj;
    }

    public methodA() {
        this.wrappedObj.methodA();
    }

    public methodB() {
        this.wrappedObj.methodB();  
    }
}

// 3. 具体组件
public class ConcreteComponent extends Component {
    public methodA() {
        //todo
    }
}

// 4. 具体装饰者
public class ConcreteDecorator extends Decorator {
    public ConcreteDecorator(Component obj) {
        super(obj);
    }

    public methodA() {
        // 增加新功能
        super.methodA();
        // 增加新功能
    }
}

// 先有一个基础类
Component obj = new ConcreteComponent(); 
Component objPlus = new ConcreteDecorator(obj);
Component objPPlus = new ConcreteDecorator(objPlus);
objPPlus.methodA();
```

</details>

**[抽象装饰器作用](https://blog.csdn.net/gaopu12345/article/details/79534846)**：可以避免一些重复代码，如 methodB() 方法，只需要在抽象装饰器中实现一次，而不需要在每个具体装饰器中都重复实现一次

## 实际例子
[Java IO 体系设计采用了装饰器模式](https://time.geekbang.org/column/article/204845)

或参考`Java 学习 - Java 高级 - Java IO` 部分


## 生活例子
**饮料设计**  
- 饮料店中有各式各样的饮料，拥有方法 cost()
- 不同饮料可以加入不同原料，如牛奶，巧克力，调料不同价格不同

```java
abstract class Beverage {
    double cost();
}
```

**初始设计**
- 设计 1：每种饮料创建一个类继承 Beverage，覆写 cost，如 DarkRoastWithMilk
    + 问题：类数量爆炸，需要考虑无穷的组合
- 设计 2：每种调料声明为一个布尔型 field 用于判断是否添加
    + 问题：设计死板，不利于拓展

**使用装饰者模式**
```java
// 抽象组件
abstract class Beverage {
    public abstract double cost();
}

// 抽象装饰者
abstract class CondimentDecorator extends Beverage {
    Beverage beverage;

    public CondimentDecorator(Beverage beverage) {
        this.beverage = beverage;
    }

    public double cost() {
        return this.beverage.cost();
    }
}

// 具体组件
class Espresso extends Beverage {
    public double cost() {
        return 1.99;
    }
}

// 具体装饰者
class Milk extends CondimentDecorator {
    public Milk(Beverage beverage) {
        super(beverage);
    }

    public double cost() {
        return 0.5 + super.cost();
    }
}
```

