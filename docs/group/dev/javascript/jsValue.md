# 值与变量

什么是值：

```js
'ilee'
79
//以上两个都是值
//打印一下
console.log('ilee')
console.log(79)
```

什么是变量：

```js
var a = 1
let b = 'ilee'
const city = 'beijing'
//以上就是变量
//打印一下

console.log(a)
console.log(b)
console.log(c)
```

变量会被创建在你的内存中，并且将值存储在这个变量中。

可以将变量看成一个盒子，而值就是盒子里面的东西，想要使用这个值，只需要使用这个盒子就行了。

## var、let、const区别

**区别1：**`var`存在**变量提升**，而`let`和`const`不存在**变量提升。**

```javascript
console.log(str)
var str = 'hello'
等同于
var str
console.log(str)
str = 'hello'
//输出undefined

console.log(str1)
let str1 = 'hello'
console.log(str2)
const str2 = 'hello'
//报错 Cannot access 'str' before initialization
```

不难看出，`str`是在`log`后定义的，但`var`存在**变量提升**，所以打印`str`时，**会去找有没有`str`的定义**，若有，则将**定义提前**，但**赋值的顺序**仍在`log`后，故`log`打印的结果是`undefined`。

**区别2：**`var`定义的变量可以**声明多次**，而`let`，`const`定义的变量只能**声明一次**。

```javascript
var a = 1
var a = 'hello'
console.log(a)
//输出hello

let b = 1
let b =	'hello'
console.log(b)
//报错 Identifier 'b' has already been declared
const c = 1
const c = 'hello'
console.log(c)
//报错 Identifier 'c' has already been declared
```

`var`定义的变量二次声明后，后者定义的内容会**覆盖前面**的，但不会报错，而`let`，`const`则不行。

**区别3：**`var`、`let`声明的变量**可以再次赋值**，而`const`声明的变量**不能再次赋值**。

```javascript
var a = 1
a = 2
console.log(a)
//输出2

let b = 1
b = 2
console.log(b)
//输出2

const c = 1
c = 2
console.log(c)
//报错 Assignment to constant variable
```

报错内容是对常数变量(常量)进行赋值，说明`const`定义的是常量，常量是不能修改的。但是**注意**，只是`const`声明的变量，**但常量里面包含的内容还是可以改的**。

```javascript
const obj = {
	c: 4
}
obj.c = 1234
console.log(obj)
obj = 1234
console.log(obj)
//第一次输出{c: 1234}
//第二次报错 Assignment to constant variable

const arr = [1, 2, 3]
arr[0] = 'hello'
console.log(arr)
//输出 ['hello', 2, 3]
```

**区别4：**`var`声明的变量**没有自身的作用域**，而`let`、`const`声明的变量**有自身的作用域**。

在`JS`中是没有块级作用域的，例如在**函数内`var`声明的变量，在函数外也可以调用**，但`let`、`const`声明的变量有自身的作用域，在**函数内定义的变量只能在函数内使用**。

```javascript
if(true) {
	var num1 = 1
}
console.log(num1)

if(true) {
	let num2 = 2
}
console.log(num2)
//报错 ReferenceError: num2 is not defined
if(true) {
	const num3 = 3
}
console.log(num3)
//报错 ReferenceError: num3 is not defined
```

## 命名

一般变量的命名都遵循小驼峰命名法。

例如：

```js
var firstName = 1
let secondName = 2
let thirdPersonName = 3
```

也有其它的命名方法：

```js
var fisrt_name = 1
let second_name = 2
let third_person_name = 3
```

当然，想怎么取名是你的自由，但是在整体上一定要符合一定的风格，不能让其它人阅读的时候产生误会。

不过，有关于命名。`JavaScript`还是做出了一部分限制，比如一部分特殊的字符就不能用作变量名：

```js
let three& = 3 //error
//不能以数字开头
let 3three = 3 //error
```

实际上。`JavaScript`的变量名，只能包含：**数字，字母，下划线，以及$符合**。

AND，`JavaScript`所保留的关键字也是不能作为变量名使用的，那些关键字在这里就不一一赘述了。

## 数据类型

一共有几种数据类型：

1. Number：基本数字类型，浮点，整数都可以
2. String：一串字符
3. Boolean：逻辑类型，就只有两个值`true`和`false`
4. Undefined：还没有被赋值的变量
5. Null：空值
6. Symbol(ES2015)：独特且不能被修改的值
7. BigInt(ES2020)：特别大的数字

事实上，`JavaScript`在定义变量时，并不需要指明变量的类型（虽然方便，但其实有一定缺陷）。

因为变量并没有类型，是被存储在其中的值有类型，这也是为什么`js`中，我们可以将不同类型的值赋值给同一个变量，称之为动态变量。

可以使用`typeof`去查看一个值的类型：

```js
let ok = true
console.log(ok) // 输出 true
console.log(typeof ok) //输出 boolean

let yetok
console.log(typeof yetok) //输出 undefined

yetok = false
console.log(typeof yetok) //输出 boolean
```

