# 方法

额

## 不知道是啥

### 立即执行函数

```js
(function() {
  console.log('Right now')
}())
```



### 闭包

```js
function A() {
  const a = 'A'
  return function() {
    console.log(a)
  }
}
A()()
let O = A()
O()
```





### `String` 映射为方法，不使用 `map` 映射集。

使用 `eval`

```js
eval(`console.log('here eval')`) // >>'here eval'
```

映射方法

```js
function A() {
  console.log('A!')
}
eval(`A()`) // >>'A!'
```

返回 `eval`

```js
function Ae() {
  'use strict'
  return eval(`console.log('Ae!')`)
}
Ae() // >>'Ae!'
```

使用 `new Function()`

```js
function Ac() {
 'use strict'
 const A = new Function(`console.log('Ac!')`)
 return A()
}
Ac() // >> 'Ac!'
```

