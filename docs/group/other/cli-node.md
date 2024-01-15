# CLI Node

使用 Node 搭建 CLI 工具。

首先，需要安装 Node.js， Node.js 是一个基于 JavaScript 的 JavaScript 运行环境，它允许我们使用 JavaScript 编写服务器端代码。 

## 安装 Node.js

额，我应该写了点什么，但是，在这里我不会写。

## 初始化项目

```bash
mkdir mycli
cd mycli
npm init
```

## 创建入口文件
```bash
mkdir bin
cd bin
touch index.js
```

## 安装 CLI 工具
```bash
npm i yargs inquirer
```

## 编写代码

```javascript
#!/usr/bin/env node
import yargs from "yargs"
import { hideBin } from "yargs/helpers"

const argv = yargs(hideBin(process.argv))

// 预先定义方法
const serve = (port) => {
  console.log(port)
}

argv.command('serve [port]', 'start the server', (yargs) => {
  return yargs.positional('port', {
    describe: 'port to bind on', // 描述 会出现在 使用了 --help 之后 
    default: 5000 // 默认值
  })
}, (argv) => { // 此处会执行设定的方法 argv 中携带了参数
  if (argv.verbose) console.info(`start server on : ${argv.port}`) // 判断是否有参数选项
  serve(argv.port) // 调用先前定义的方法
})
  .option('verbose', { // 名字 --verbose
    alias: 'v', // 别名 -v
    type: 'boolean', // 值类型
    description: 'Run with verbose logging', // 描述
    default: true, // 是否默认携带
  }) // 需要符合链式编程 才能达到效果
  .command('open [url]', 'open the browser', (yargs) => {
    return yargs.positional('url', {
      describe: 'the web url',
      default: 'https://xxxxxx.com'
    })
  }, (argv) => {
    func1(argv.url)
  })
  .command('whoami', 'set usr name', (yargs) => {
    return
  }, () => {
    func2()
  })
  .parse()
```

### 测试一下

```bash
./index.js serve 9000
// 预期输出
// start server on : 9000
// 9000
```

###  在 package.json 中配置

```json
...
"bin": {
  "mycli": "./bin/index.js"
}
...
```

### 再来！

```bash
npm i -g .
// 安装到全局
mycli --help
```

OK，应该没什么问题了，按照自己的想法扩展吧。



## 后话

可以使用 chalk 和 ora 来装饰你的 cli，具体用法自行搜索。

。。。

哈哈哈

chalk:

```javascript
chalk.greenBright('Hee Haa')
```

它的返回值是 String， 可以写入你的 cli 的实现方法中。

ora:

```javascript
let spinner = ora('Spinner is running')
// init 对象
spinner.start()
// 启动！
spinner.stop()
// euh?
```





### 方法示例

```javascript
import inquirer from 'inquirer' // 控制终端输入的
import chalk from 'chalk' // 颜色 字体 包括类似于 css 的样式
import ora from 'ora' // 一些加载样式

export const sayname = async () => {
  const usr = await inquirer.prompt([
    { name: 'name', message: 'Enter your name: ', type: 'input' }, // 提示输入 name
  ])
  usr.name = usr.name.trim()
  let spinner = ora('Spinner is running') // 没有用 需要 .start()
  // 通常是需要 await 的情况下使用
  console.log(chalk.greenBright(`Hi, ${usr.name}`));
}
```

