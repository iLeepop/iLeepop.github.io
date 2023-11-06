# 开始

使用`cli`简单搭建`react`项目：

```bash
npx create-react-app react-basic
```

`react-basic`是项目名称

```
react-basic
├─package-lock.json
├─package.json
├─README.md
├─src
|  ├─App.js
|  ├─base.css
|  └index.js
├─public
|   ├─favicon.ico
|   ├─index.html //这里面有个id为root的节点
|   ├─logo192.png
|   ├─logo512.png
|   ├─manifest.json
|   └robots.txt
```

目录文件大概长这样，我删除了一些东西。

`index.js`是入口文件，`App.js`是根组件：

```js
//React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

//导入项目根组件
import App from './App';

//将App根组件渲染到指定id为root的dom节点
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

```js
import './base.css'

//App -> index.js -> public/index.html(root)
function App() {
  return (
    <div className="App">
      HI REACT
    </div>
  );
}

export default App;
```

在`package.json`里面有四个脚本：

```json
  "scripts": {
    "start": "react-scripts start", //开发模式用
    "build": "react-scripts build", //打包生产模式用的
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

在控制台输入：

```bash
npm start
```

浏览器打开`localhost:3000`查看是否正常显示**React**图标

没有正常显示或者控制台报错，自行查看原因。