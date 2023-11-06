# ababa

粗糙看看：

```ts
//pt1-类型Type

//---------原始类型---------
let numA: Number = 1 
let nickname: String = 'ilee'
let nicknameMix: (Number | String) = 'cray' //联合类型

//---------数组类型---------
let arr: Number[] = [1, 2, 3]
let arrcomp: Array<Number> = [1, 2, 3] //不推荐
let arrStr: String[] = ['a', 'b', 'c']
let arrMix: (Number | String)[] = [1, 'a', 2, 'b']

//---------类型别名---------
type DynamicNS = Number | String //创建别名
let dy1: DynamicNS = 'ilee'
let dy2: DynamicNS = 2325
type DynamicNSArr = (Number | String)[] //创建别名
type DynamicNSArrOthr = Number | String[]
let dya1: DynamicNSArr = [1, 345, 'b']
let dyao1: DynamicNSArrOthr = ['a', 'b']
let dyao2: DynamicNSArrOthr = 1


//---------函数类型---------
//无返回值
function SayHi(val1: String, val2: Number): void {
    console.log(val1, val2);
    
}
//有返回值
const SayBye = (val1: String, val2: Number): Number => {
    return val2 //Number type
    
}
//第二种方式
const SayJo: (val1: String, val2: Number) => void = (val1, val2) => {
    console.log(val1, val2);
    
}
//函数可选值
//参数后加? 可设置可选值
const Jump: (start: number, step?: number) => Number = (start, step) => {
    if(!step) return start
    let temp: Number
    temp = start + step
    return start
}

Jump(1) //无可选值
Jump(1,2)

//---------对象类型---------
let p: {name: String; age: number; SayYe(val: String): void} = {
    name: 'ilee',
    age: 22,
    SayYe(name) {
        console.log('Yeeeeeee' + name);
        
    }
}
//对象类型可选值
function myAxios(config: {url: string; method?: string}) {
    console.log(config);
    
}

//---------接口---------interface
interface IP {
    name: string
    age: number
    SayName(val?: string): void
}

type IPt = {
    name: string
    age: number
    SayTu(): void
}

let p1: IP = {
    name: 'ilee',
    age: 22,
    SayName() {
        console.log('ilee');
        
    },
}

//接口继承
interface p2d {x: number; y: number}
//extends 前者继承后者的所有属性
interface p3d extends p2d {z: number} //简洁
//等同于
interface p3dcp {x: number; y: number; z: number}

let pd: p2d = {
    x: 1,
    y : 2
}

let pd2: p3d = {
    x: 1,
    y: 2,
    z: 3
}

//---------元组---------Tuple
//数组特例 确切知道包含多少元素
let position: [number, number] = [1, 2]//不能多于两个元素
let positionS: [number, string] = [1, 'a']

//---------类型推论---------
//TS中 没有指明类型的地方 TS的类型推论机制会帮助提供类型
//常发生在 1、声明变量并初始化时 2、决定函数返回值时
let a = 1
function ty() {
    // return 1
    // return 'a'
}

//---------类型断言---------
const alink = document.getElementById('link') as HTMLAnchorElement
//另一种写法
const alink1 = <HTMLAnchorElement>document.getElementById('link')
alink.href
alink1.href

//---------字面量类型---------
let str1 = 'Hello TS'
const str2 = 'Hello TS'
//光标拖至两个变量上 可以发现str1的类型为string 而str2的类型为 "Hello TS"
//原因 因为str1是一个变量(let) 它的值可以是任意字符串 所以类型为string
//str2是一个常量(const) 它的值不能变化 只能是 "Hello TS" 所以它的类型为 "Hello TS"
//这里的 "Hello TS" 就是字面量类型
//某个特定的字符串也可以作为TS中的类型
const str22: 'ilee' = 'ilee' //改了后面的值会报错 类型和值必须一样
let num1: 18 = 18
//字面量类型配合 联合类型一起使用
//用来表示一组明确的可选值列表
//相比于string类型 使用字面量更精确严谨

//---------枚举---------
//类似于字面量加联合类型组合的功能
//可以表示一组明确的可选值
//定义一组命名常量
//数字枚举有默认增长值
enum Direction {Up, Down, Left=20, Right}

function changeDirection(direction: Direction) {
    console.log(direction)
}
changeDirection(Direction.Up)//类似访问对象类型的值

//字符串枚举 必须赋予初始值
enum Ds {A= 'a', B= 'b', C= 'c'}

//枚举不仅用作类型 还能够提供值
//枚举类型会被编译为js代码
//推荐使用字面量类型加联合类型组合的方式 相比于枚举更直观简洁高效

//---------any类型---------
let obja: any = {x: 0}
obja.add = 10
obja()
let n: number = obja
//使用any类型 便失去typescript所有的类型保护优势 不推荐使用
//可以临时使用any 来书写很长很复杂的类型
let o
function testf(val1, val2) {}
//当声明变量时不提供类型也不提供默认值 函数参数不加类型 都隐式具有any类型

//---------typeof---------
//可以在类型上下文中引用变量或属性的类型
let pa = {x: 1, y: 2}
function typeFormat(point: {x: number; y: number}) {}
typeFormat(pa)
function typeFormat2(point: typeof pa) {}
let pa1 = {x: 2, y: 100}
typeFormat2(pa)
typeFormat(pa1)
//typeof获取变量的类型
//只能用来查询变量或属性的类型

//---------高级类型---------
//class类
class Person {
    age: number
    gender: string

    constructor(age: number, gender: string) {
        this.age = age
        this.gender = gender
    }
    //不能存在多个构造函数 不要为构造函数指定返回值
}

const _p = new Person(21, 'ilee')
_p.age
_p.gender
//class 不仅提供class的语法功能 也作为一种类型存在

class Point {
    x= 1
    y= 2
    scale(n: number) {
        this.x *= n
        this.y *= n
    }
}

const _po = new Point()
_po.scale(10)

//class 的继承
//第一种方式 继承父类
class PointKid extends Point {
    k= 9
    coculate() {
        this.x += this.k
    }
}
const _pok = new PointKid()
_pok.scale(9)
_pok.coculate()

//第二种方式 实现接口
// interface IP {
//     name: string
//     age: number
//     SayName(val?: string): void
// }该块代码已经在上面得到实现
class IPK implements IP {
    name: string;
    age: number;
    SayName(val?: string | undefined): void {
        console.log('sslee');
    }
}//必须实现接口的所有方法和属性

//类成员可见性
//public protected private
//多态 继承 封装 面向对象三大特性
class A {
    public aa() { //public 默认可见性
        console.log('aa')
    }
    protected aaa() { //受保护的 仅对所在类和子类(非实例对象 例如new A())
        console.log('aaa') //仅对实例对象不可见
    }
    private a() { //私有的 只在当前类中可见 实例对象及子类都不可见
        console.log('a')
    }
}
class AK extends A {
    show() {
        this.aaa//protected 子类可以访问
        // this.a 不可访问
    }
}

const _a = new A()
_a.aa
// _a.a
// _a.aaa

//只读属性
//用来防止在构造函数之外对属性进行赋值
class AKK {
    readonly ag: number = 22
    readonly name = 13 //变成字面量类型了
    constructor(age: number) {
        this.ag = age
    }
    setAge() {
        // this.ag = 21 //因为有readonly修饰符 所以变成只读属性了
    }
}

//---------类型兼容性---------
let _arr = ['a', 'b', 'c']
_arr.forEach(x => {})
//TS是结构化类型系统
//类型检查关注的是值所具有的形状
//TS认为两个类型具有相同的值 便属于同一个类型
class Pt1 {x: number; y: number}
class Pt2 {x: number; y: number}

let pt: Pt1 = new Pt2()
class Pt3 {x: number; y: number; z: number}
//Pt3 的成员至少与Pt1相同 所以Pt1兼容Pt3 成员多的Pt3可以赋值给成员少的Pt1
let _pt: Pt1 = new Pt3()
// let _pt3: Pt3 = new Pt1() 成员少的不能赋值给成员多的

//接口兼容性
interface PI1 {x: number; y: number}
interface PI2 {x: number; y: number}
interface PI3 {x: number; y: number; z: number}
// let _pi1: PI1
// let _pi2: PI2 = _pi1 //报错 变量_pi1在使用前已经被分配
// let _pi3: PI3
// _pi2 = _pi3 //报错 变量_pi3在使用前已经被分配

//
let _pt3: PI2 = new Pt3

//函数兼容性
//需要考虑 1、参数个数 2、参数类型 3、返回值类型
//参数少的可以赋值给参数多的
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void
// let f1: F1
// let f2: F2 = f1 //报错 变量f1在使用前已经被分配

//参数类型
type F3 = (a: Pt1) => void
type F4 = (a: Pt3) => void //Pt3的成员多于Pt1 所以Pt1作为参数可以赋值给参数多的Pt3
// let f3: F3
// let f4: F4
// f4 = f3 //报错 变量f3在使用前已经被分配

//返回值类型

//---------交叉类型---------&
//类似于接口继承 用于组合多个类型为一个类型
type PIx = PI1 & PI3
//同时具备这两个接口的所有属性类型
//相当于
type PIxb = {x: number; y: number; z: number}
let _obj: PIx = {
    x: 1,
    y: 3,
    z: 3
}

//交叉类型和接口继承的对比
{//包裹一下 没其他意思QAQ
    interface A {
        fn: (val: number) => string
    }
    interface B extends A {
        // fn: (val: string) => string //报错 同名属性之间 处理类型冲突的方式不同
    }

    interface Bb {
        fn: (val: string) => string
    }

    type C = A & Bb
    //交叉类型不会报错
    //相当于 (简单理解)
    // fn: (val: string | number) => string
}

//---------泛型---------
//保证类型安全的前提下 让函数与多种类型一起工作 从而实现复用 常用于函数 接口 class中
function id(val: number): number {
    return val
}
//改造让该函数接受任意类型 但是失去了TS的类型保护
function idb(val: any): any {
    return val
}
//改造为泛型函数
function idm<Type>(val: Type): Type {
    return val
}

const idmnr = idm<number>(10)
const idmsr = idm<string>('ilee')
//可以省略<Type>
//可以根据用户传入的参数来自动判断Type的类型
//类型参数推断机制
let idmsrb = idm(10) //Type变成字面量类型了

//泛型约束
//有些类型不具有特定属性 会导致代码异常 所以需要添加约束来收缩了类型
//例如val.length属性 不一定每种类型都有 例如number就没有
interface Ilength { length: number }
function idys<Type extends Ilength>(val: Type): Type {
    console.log(val.length);
    return val
}

// idys(1) //报错 number没有length属性
idys('123')

//keyof
//接收一个对象类型 生成其键的名称(可能是字符串或数字)的联合类型
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
let _ps = { name: 'jack', age: 18}
getProp(_ps, 'name')
getProp(_ps, 'age')
//在此示例中 keyof Type获取的是_ps对象的所有键的联合类型 'name | age'

//泛型接口
interface Ifx<Type> {
    id: (val: Type) => Type
    ids: () => Type[]
}

//Js数组在Ts中就是一个泛型接口
arrStr.forEach(x => {}) //string数组
arr.forEach(x => {}) //number数组

//泛型类
class fxC<Type> {
    val: Type
    add: (val: Type) => Type
}

//---------索引签名类型---------
interface AnyObject {
    [key: string]: number
}

let _aobj: AnyObject = {
    a: 1,
    b: 2
}

interface MyArray<T> {
    [i: number]: T
}

let myarr: MyArray<string | number> = [1, '2']

//---------映射类型---------
//基于旧类型创建新类型(对象类型)
type PropKeys = 'X' | 'Y' | 'Z'
type Type1 = {x: number; y: number; z: number}
//映射类型简写
type Type2 = {[Key in PropKeys]: number}
//映射类型只能在类型别名中使用 不能在接口中使用

type Props = {a: number; b: string; c: boolean}
type Type3 = {[key in keyof Props]: number} //keyof Props 得到的是 'a' | 'b' | 'c'

type Type4<T> = {
    [P in keyof T]? : T[P]
}

type Tp4 = Type4<Props>
let _tp4: Tp4 = {
    a: 1,
    b: 'a'
}

type TypeA = Props['a']
type TypeB = Props['b']
type TypeBC = Props['b' | 'c']
type TypeABC = Props[keyof Props]

//typescript 类型声明文件
/*
.ts文件：
    既包含类型信息又包含可执行代码
    可以被编译为.js文件 执行代码
    用于编写程序代码的地方
.d.ts文件：
    只包含类型信息的类型声明文件
    不会生成.js文件 仅用于提供类型信息
    为Js提供类型信息
*/

//一般包都含有*.d.ts文件 提供类型声明
//若没有 则需要去typescript官方网站查看有没有提供类型声明文件
//有的话 则执行npm/yarn命令下载类型声明文件 npm i -D @type/*

//创建自己的类型声明文件 1、项目内共享类型 2、为已有JS文件提供类型声明
//如果多个.ts文件中都用到同一个类型 此时可以创建.d.ts文件提供该类型 实现类型共享
//步骤 创建index.d.ts 类型声明文件
//使用export导出
//在需要使用共享类型的.ts文件中 通过import导入即可


//在导入.js文件 TS自动加载与.js同名的.d.ts文件 以提供类型声明
//declare关键字 为其它地方(比如.js文件)已存在的变量声明类型 而不是创建一个新的变量
```

很久之前学的，平时也不用，记不住了就看看...

:clown_face: