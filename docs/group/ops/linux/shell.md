# Shell
## 基本用法
创建 `.sh` 文件时，别忘了在第一行加上 `#!/bin/bash`，保存后别忘了 `chmod +x` 或者 `chmod 777`
### 创建常量\变量
#### 创建全局常量
```bash
# 使用 readonly 创建全局常量，设置只读属性，不可覆写
readonly AUTHOR="ilee"
```
#### 创建全局变量
```bash
time=2024
style="dark"
```
#### 引用变量和常量
```bash
# 使用 $ 或者 ${} 引用变量和常量
echo "Author: $Author"
echo "Time: $time"
echo "Style: ${style}"
# 一般 ${} 引用都是因为要和其它命令或者字符串使用
# 例如
echo "Author: ${AUTHOR}is a good man"
```
#### 创建函数内变量
```bash
# 使用 local 创建函数内变量，函数外无法使用
say_bye() {
    local name="funl"
    echo "Goodbye, $name!"
}
```
#### 通过特殊语句赋值
```bash
for file in `ls /home/pi`
for file in $(ls /home/pi)
```
#### 弃用变量
```bash
# 弃用变量
unset time
echo $time # 输出空
# 不可弃用常量
unset AUTHOR # 会报错
```
#### 赋值字符串
```bash
# 字符串赋值使用 "" 或 '' 都可以
fname="funl"
echo $fname
lname='ilee'
echo $lname

# 创建有回车的字符串或者其它转义字符
long_str="\
one \n\
two \n\
three \n\
... \n\
"
echo -e $long_str # -e 开启转义 带换行的字符串

spec_str="hi \"$name\", \n" 
echo $spec_str # 带引号的字符串 hi "funl",

# 单双引号拼接值
name="funl"
echo "hi "$name"" # hi funl
echo "hi ${name}" # hi funl
echo 'hi '$name'' # hi funl
echo 'hi '${name}'' # hi ${name}
# 尽可能使用双引号
```
#### 字符串方法
```bash
name="funl"
# 获取字符串长度
echo ${#name}
# or 
echo ${#name[0]}

# 根据索引获取字符串子集
echo ${name:0:3} # 从0开始，取3个字符，即 fun
# 索引无需多言，从 0 开始的...异世界！

# 获取特定字符的索引
echo `expr index "$name" fn` # 1
# 这里的索引是从 1 开始的
```
***某些 shell 还可以定义整数变量，这里不做过多展开***
#### 创建数组
```bash
# 使用空格分割
my_num_array=(1 2 3 4 5)
my_str_array=("funl" "ilee" "funl_ilee")
# 根据下标赋值
my_num_array[0]=1
my_str_array[0]="funl"
#根据下标取值
one=${my_num_array[0]}
name=${my_str_array[0]}
# 创建关联数组，在我看来就是 map 或者对象
declare -A mmma
mmma=(["name"]="funl" ["time"]=2024)
mmma["name"]="ilee"
mmma["time"]=2024

# 数组长度
echo ${#my_num_array[@]}
# or
echo ${#my_str_array[*]}
```
#### 特殊的环境变量
```bash
echo $PATH
echo $HOME
```

### 传递参数
有一个实例 .sh 文件如下：
```bash
#!/bin/bash
echo "args lens: $#"
echo "all args: $*"
echo "all args: "$@""
echo "fst arg: $1"
echo "sec arg: $2"
echo "now Process ID: $$"
```
运行：
```bash
./test.sh 1 2
```
**@ 和 * 的区别**
- *： 输出所有参数，以空格分隔，相当于一个整体
- @： 输出所有参数，以空格分隔，每个都是单独的参数

### 算术表达式
```bash
a=1
b=2
# 求和：
echo $(($a + $b))
# or
echo `expr $a + $b`

# 减法：
echo $(($a - $b))
# or
echo `expr $a - $b`

# 乘法：
echo $(($a * $b))
# or
echo `expr $a \* $b`

# 除法：
echo $(($a / $b))
# or
echo `expr $a / $b`

# 模运算 求余：
echo $(($a % $b))
# or
echo `expr $a % $b`

# 赋值：
a=$b && echo $a
```
上面运用到了 `echo` 的一个特性，使用 `echo` 可以打印出另一个命令的执行结果
```bash
echo `[command]` # 使用反引号!
```
#### 运算符
```bash
# 逻辑运算符：
echo $(($a == $b))
echo $(($a != $b))
echo $(($a > $b))
echo $(($a < $b))

# 关系运算符：
# 等于
if [ $a -eq $b] # equal
fi
# 不等于
if [ $a -ne $b] # not equal
fi
# 大于
if [ $a -gt $b] # greater than
fi
# 小于
if [ $a -lt $b] # less than
fi
# 大于等于
if [ $a -ge $b] # greater than or equal
fi
# 小于等于
if [ $a -le $b] # less than or equal
fi

# 布尔运算符：
# 非
if [ !true ] # not equal 返回 false
fi
# 与
if [ true -a false ] # and 返回 false
fi
# 或
if [ true -o false ] # or 返回 true
fi

# 逻辑与：
if [ true && false ] # and 返回 false
fi
# 逻辑或：
if [ true || false ] # or  返回 true
fi

# 字符串运算符
name1="funl"
name2="ilee"
# 相等
if [ $name1 = $name2 ] # 返回 false
fi
# 不等
if [ $name1 != $name2 ] # 返回 true
fi
# 字符串长度是否为0
if [ -z $name1 ] # 返回 false
fi
# 字符串长度是否不为0
if [ -n $name1 ] # 返回 true
fi
# 字符串是否为空 不为空返回 true
if [$name1] # 返回 true
fi
```

#### 文件运算符
**相当重要**
```bash
# 路径
file="./file"
# 文件是否是 块设备文件 是返回 true
if [ -b $file ]
fi

# 文件是否是 字符设备文件 是返回 true
if [ -c $file ]
fi

# 文件是否是 目录 是返回 true
if [ -d $file ]
fi

# 文件是否是 普通文件 是返回 true
if [ -f $file ]
fi

# 文件是否设置了 SGID 位 是返回 true
if [ -g $file ]
fi

# 文件是否设置了 Sticky Bit 是返回 true
if [ -k $file ]
fi

# 文件是否是 有名管道 是返回 true
if [ -p $file ]
fi

# 文件是否设置了 SUID 位 是返回 true
if [ -u $file ]
fi

# 文件是否可读 是返回 true
if [ -r $file ]
fi

# 文件是否可写 是返回 true
if [ -w $file ]
fi

# 文件是否可执行 是返回 true
if [ -x $file ]
fi

# 文件是否为空（文件大小为 0） 是返回 true
if [ -s $file ]
fi

# 检测文件是否存在 是返回 true
if [ -e $file ]
fi

# 判断某个文件是否是 socket
if [ -S $file ]
fi

# 判断某个文件是否存在并且是符号链接
if [ -L $file ]
fi
```

### 流程控制
`sh` 不可以有空的流程分支
#### IF 判断
```bash
a=10
b=20

# 单分支 if fi
if [$a -gt $b]
then
    echo "a 大于 b"
fi

# 双分支 if else fi
if [$a -lt $b]
then
    echo "a 小于 b"
else
    echo "a 大于等于 b"
fi

# 多分支 if elif else fi
if [$a -eq $b]
then
    echo "a 等于 b"
elif [ $a -gt $b ]
then
    echo "a 大于 b"
else
    echo "a 小于 b"
fi

# 单行表示
if [$a -eq $b]; then
    echo "a 等于 b"
fi

# 判断语句格式
if [$a -eq $b]; then
    echo "a 等于 b"
fi
# 可以直接使用 > < == !=
if (( $a > $b )); then
    echo "a 大于 b"
fi
```

#### FOR 循环
```bash
# 标准写法
for i in 1 2 3 4 5
do
    echo $i
    [command...]
done
# 等效写法
for i in {1..5}
do
    echo $i
    [command...]
done

# 单行表示
for i in 1 2 3 4 5; do echo $i; [command...] done

# 无线循环
for (( ; ; ))
```

#### WHILE 循环
```bash
# 标准写法
while [condition] # condition 可以是变量、表达式、命令
do
    [command...]
done

# 无线循环
while :
do
    [command...]
done

while true
do
    [command...]
done
```

#### UNTIL 循环
`until` 在 `condition` 为 `true` 时退出循环
```bash
# 标准写法
until [condition] # condition 可以是变量、表达式、命令
do
    [command...]
done
```

#### case-esac 多分支语句
每个分支以 `xxx)`开始，以 `;;` 结束
```bash
case var in
    pattern1)
        [command...]
        ;;
    pattern2)
        [command...]
        ;;
esac
```

#### BREAK 和 CONTINUE
- `BREAK` 退出所有循环
- `CONTINUE` 退出当前循环，并进入下一次循环
```bash
while :
do 
    echo -n "type num:"
    read $var
    case var in
        1|2|3)
            echo "the num is $var"
            ;;
        *)
            echo "the num is not 1,2,3"
            break
            ;;
    esac
done
```

```bash
while :
do 
    echo -n "type num:"
    read $var
    case var in
        1|2|3)
            echo "the num is $var"
            ;;
        *)
            echo "the num is not 1,2,3"
            continue
            ;;
    esac
done
```
上述代码中使用了 `read`，它是一个命令，用于从标准输入（键盘）读取一个字符串。

### 函数
`sh` 函数在调用前一定要先声明函数，然后再调用，没有声明提升
#### 函数创建
```bash
# () 中间无需参数
function func1() {}
func1() {} # 也可以
```
#### 函数调用
```bash
func1() {
    echo "nothing"
}

# 直接使用函数名即可
func1

# 传参
func1 "hello" "world"

func1() {
    # 在函数内部，使用之前提过的 $ 符号来获取参数，大于 10 个参数时，${n} 取参
    echo $1 # hello
    echo $2 # world
    echo $* # hello world
    echo $@ # hello world
    echo $# # 2
    [command...]
}
```
#### 函数返回值
```bash
# 
func1() {
    echo "hello"
    return 0
}

func2() {
    echo "world"
    echo 2024
}

func1
echo $? # 使用 $? 获取上一个函数的返回值
func2
echo $?
```
**return 的限制， return 只能返回 0-255 之间的整型数字**

### 输入输出重定向

#### 普通
```bash
# 输出重定向 类似于
echo 123 > /dev/null
# 没有输出到终端 而是输出到一个空设备上了

# command > file
echo 123 > 123.txt
cat 123.txt # 输出 123
echo 123456 > 123.txt
cat 123.txt # 输出 123456 注意覆盖了之前的内容

# command < file
cat < 123.txt # 输出 123456
# 等同于
cat 123.txt # 就是将 123.txt 作为参数给 cat 命令了 (但其实并不是)

# command >> file
echo 123 >> 123.txt
cat 123.txt # 输出 123456123 注意看是追加了内容123 而不是覆盖

# command < file > file
touch 321.txt
cat 123.txt # 输出 123456123
echo < 123.txt > 321.txt # 将 123.txt 的内容写入到 321.txt 中
cat 321.txt # 输出 123456123
```

#### 深入
std 代表标准 `standard`
`Unix/Linux` 命令运行时都会打开三个文件
- `stdin`: 文件描述符 0， `Unix` 程序默认从 `stdin` 读取
- `stdout`: 文件描述符 1， `Unix` 程序默认向 `stdout` 输出
- `stderr`: 文件描述符 2， `Unix` 程序默认向 `stderr` 输出错误信息
```bash
# command 文件描述符>file
# command 2>file
cat 3211.txt 2>error.txt # 将 cat 3211.txt 中发生的错误信息输出到 error.txt
cat error.txt # cat: 3211.txt: No such file or directory

# command 2>>file
cat 3212.txt 2>>error.txt # 将 cat 3211.txt 中发生的错误信息追加到 error.txt
cat error.txt # cat: 3211.txt: No such file or directory cat: 3212.txt: No such file or directory

# command > file 文件描述符>&文件描述符
# command > file 2>&1 将标准输出和标准错误输出都重定向到文件
cat 3211.txt > error.txt 2>&1 # 将 cat 3211.txt 中发生的错误信息和标准输出合并一起覆盖到 error.txt

# command >> file 2>&1
cat 3211.txt >> error.txt 2>&1 # 将 cat 3211.txt 中发生的错误信息和标准输出合并一起追加到 error.txt

# 文件描述符<file
exec 3< 123.txt # 将文件描述符 3 绑定到 123.txt 文件
cat <&3 # 输出 123345123
exec 3<&- # 关闭文件描述符 谨慎使用 谨慎使用 电脑可能会卡掉

# command << tag
# 是 Here Document 的一种语法
# 这个玩意很迷
cat << tag > 123.txt # 将 tag 之前的内容写入到 123.txt 文件中
909
tag
# tag 用什么都可以 一般都用 EOF
```

### 引入其它 .sh 文件
```bash
# 当前在 1.sh 中
source 123.sh
# or
. 123.sh

echo "here is 1.sh"
```
```bash
# 当前在 123.sh 中
echo "here is 123.sh"
```
当某个文件被引入后，它是否可执行就不重要了，只要引入它的文件为可执行就行了
```bash
./1.sh # 输出：here is 123.sh here is 1.sh
```

### 获取其它命令的返回值
这些其实都可以上网去查的，这里就不多说了

## 小技巧
- 当脚本执行代码过多时，使用函数将关联的代码封装起来，方便管理
- 为了更灵活的使用，可以针对不同参数执行不同的代码，例如当前环境没有相应的依赖时，执行相应的安装代码，有则不进行安装
- 脚本执行过程中，可以实时输出标准输出以及错误信息输出至日志，方便调试
- 跟编程一样，脚本是为了更好的利用系统环境，减少重复的工作，提高效率，减少出错率
