# 使用

## 第一种

在你的 `web` 页面中使用 `JS` 脚本：

```html
<html>
    <head>
        ...
    </head>
    <body>
        <h1>
            Hello! JavaScript!
        </h1>
        <script>
        	let js = 'shit'
            if (js === 'shit') alert('Jshit!')
            90 - 90 + 90 - 90
            console.log(90 - 90 + 90 - 90)
        </script>
    </body>
</html>
```

简单的创建一个页面，可以看到在 `body` 标签里面使用了 `script` 标签，试着打开此页面。

## 第二种

**推荐，啊不，你以后大概都这么用。**

使用 `script` 标签里面的 `src` 属性来指定需要使用的 `js` 文件：

```html
<html>
    <head>
        ...
    </head>
    <body>
        <h1>
            Hello! JavaScript!
        </h1>
        <script src="./index.js" />
    </body>
</html>
```

在同级目录下创建 `index.js` 文件：

```js
let js = 'shit'
if (js === 'shit') alert('Jshit!')
90 - 90 + 90 - 90
console.log(90 - 90 + 90 - 90)
```

试着打开此页面。