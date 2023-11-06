# 基础

在`App.js`中写入：

```jsx
import './base.css'

let type = 0 //0,1,2

function getTypeTemplate() {
  if(type === 0) {
    return <span>0type</span>
  }else if(type === 1) {
    return <span>1type</span>
  }else {
    return <span>2type</span>
  }
}

//App -> index.js -> public/index.html(root)
function App() {
  let ok = 'okokok'
  let list = [
    {
      id: 1,
      name: 'ilee'
    },
    {
      id: 2,
      name: 'op'
    },
    {
      id: 3,
      name: 'ct'
    }
  ]
  let flag = true
  function getName() {
    return 'Ilee'
  }
  const handleClick = (name, e) => {
    console.log('button click', name, e)
  }
  return (
    <div className="App">
      HI
      {/* 常量 */}
      {100}
      {'yibai'}
      {/* 变量 */}
      {ok}
      {/* 函数 */}
      { getName() }
      {/* 方法 */}
      { new Date().getDate()}
      {/* 对象 */}
      <div style={{
        color: 'red'
      }}>
        RED
      </div>
      <div style={{
        backgroundColor: 'gray'
      }}>
        <ul>
          {list.map( item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
      <div>
        {flag && <span>Hi,Im HERE--</span>}
        {flag ? <span>Ilee</span> : <span>need loggin</span>}
      </div>
      <div>
        {getTypeTemplate()}
      </div>
      <div>
        <button onClick={(e) => handleClick(ok, e)}>ClickLog</button> 
      </div>
    </div>
  );
}

export default App;
```

