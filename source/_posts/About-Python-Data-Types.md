---
title: 关于Python数据结构与一些内置函数
date: 2024-10-14 17:29:34
tags: [编程, Python]
---

# 中英对照
statement 语句
expression 表达式
operands 操作数（如6*7中的6）
declare 声明
assignment 赋值
Compound assignment operators 复合赋值运算符（如+=）
identifier 标识符（变量名，必须从字母或_开始，不能从数字开始，只能有字母数字下划线）
immutable 不可变的
calling function 调用函数
asterisk 星号

# 数据类型
`type()`可判断数据类型。

## float
`round()`四舍五入取整，`math.ceil()`/`math.floor()`上/下取整（需`import math`）

## string
字符串不可修改。
用`'`、`"`、`'''`、`"""`之一括起来。
用`+`可连接两个string，用`*(数字)`可重复(数字)次。
用`in`或`not in`可判断字符串是不是另一个字符串的子串。
字符串可按ASCII码下字典序比较。
`len()`可以给出字符串长度。
从后往前遍历字符串可以用负数下标（如`s[-1]`是最后一个元素）。`string_x [start: stop: step]`可以给出子串，具体来说是start,start+step,...，step取负数可以反向字符串（如`s[::-1]`为翻转字符串），此时start大于等于stop才能取出子串。
`string.lower()`/`string.upper()`可以进行大写→小写/反之的操作。
`string.replace(oldvalue, newvalue, count)`返回把count个oldvalue替换为newvalue的string，默认全替换。
`string.count(value, start, end)`统计[start,end)中子串value的出现次数。
`string.find(value, start, end)`返回[start,end)中子串value第一次出现的位置，如无则返回-1。
`string.split(separator, maxsplit)`返回把string中按子串separator切分最多maxsplit次成的list。separator默认空格，maxsplit默认-1即全部切分。
`string.startswith(value, start, end)`/`string.endswith(value, start, end)`返回bool值，判断string是否以子串value起始/结尾。start/end默认是全序列。
`string.strip(characters)/.lstrip(characters)/.rstrip(characters)`返回string去除了起始和结尾/起始/结尾连续的字符characters的串，如果characters是字符串，那就去除全部起始结尾连续字符属于set(characters)中的串。characters默认为空格。 
`string.join(sequence)`为将字符串的序列sequence中字符串连接起来，每两个相邻字符串中间插上一个string。
``string.format(s1,s2,...)``可用于格式化字符串，具体来说string中的`{n}`会被替换为sn，如果每一个括号都不填数那么默认从0开始依次增加（要么都填要么都不填）。
字符串有许多前缀。
| 前缀 | 功能 | 示例 | 说明 |
|---|---|---|---|
| `r` |  原始字符串字面量，阻止字符串中字符被解释为转义字符。 | `r'C:\Program Files\Python'`便会使得字符串原样成为`C:\Program Files\Python`|
| `b` | 字节字符串字面量，表示字符串以字节序列的形式存储。 | `b'hello'` |  主要用于处理二进制数据，例如文件I/O。 |
| `f` | f-字符串 (Formatted String Literals)，允许在字符串中嵌入表达式。 | `f'{name} is {age} years old'` |  使用花括号`{}`将表达式嵌入到字符串中，并进行格式化。 |

## list
list的`+`，`*`的用法与string相同，但list可以修改。
`del a[i]`可用来删去list中index为i的项，类似的也可以删去片段。
`sum(list), max(list), min(list)` 返回list的求和、最大值、最小值
`list.append(elmnt)`将elmnt加入到list结尾
`list.extend(seq)`将列表seq放在list结尾
`list.insert(pos, elmnt)`在pos位插入elmnt（原list[pos]向后移动）
`list.pop(pos)`删去list[pos]并将其返回。默认pos=-1，即删结尾元素。
`list.remove(elmnt)`将elmnt在list中第一次出现的位置删去，不返回值。
`list.count(value)`
`list.index(elmnt)`返回elmnt在list中第一次出现的位置
`list.sort(reverse=True|False, key=myFunc)`默认reverse=False，key为自定义的比较函数（默认<） 
`list.reverse()`翻转list

## Tuple
tuple有序且不可变，有通常的指标、切片、+*操作。
`elmnt in/not in tuple`是bool值，表达elmnt在/不在tuple中。
`len(),sum(),min(),max(),sorted(),count(),index()`对于tuple均照常（sorted返回list）。
Tuple可以一次将多个分量以坐标形式（如`pos = (x, y, z)`）packing起来，也可以按分量分别赋值给以逗号分隔开的多个变量（如`x, y, z = pos`）。
`zip()`可将多个list/tuple/string等打包成按分量的tuple并返回一个tuple的迭代器，用如`list()`可将之list化，合并按最短的那个为准（如list(zip([1, 2], [1, 2, 3]))是[(1, 1), (2, 2)]）

## Set
Set无序而且不包含重复元素，可以包含unchangeable objects（如number，string，tuple），但不能包含changeable objects（如list，dictionary）。
用大括号如正常数学中那样可以创建一个集合。
Set中有照常的`in`、`not in`、`len()`、`sorted()`（sorted返回list）。
`set1 & set2`或`set1.intersection(set2)`是交集运算（均为返回交集但不修改原集合），同理`|`和`.union()`并，`-`和`.difference()`差，`^`和`.symmetric_difference()`是对称差。
`set.add(elmnt)`添加elmnt。
`set.remove(item)`删去item，如果不存在会报错。
`set.discard(value)`删去value，如果不存在不会报错。
`set(list/string)`可以将list/string转换为set
`x.issubset(y)/.issuperset(y)`判断x是否是y的子集/父集

## Dictionary

Dictionary是无序的查找表，由(key,value)对组成，key只能是不可变对象，一key不可重复，value可以重复。
Dictionary可以通过如`{ key1 : value1, key2 : value2, key3 : value3 }`的大括号创建，也可通过如`dict(a = 'a', b = 'b', t = 't')`的用法创建，也可通过如`dict([('one', 1), ('two', 2), ('three', 3)]) `的方式创建（里面dict()内小中括号并无区别，list和tuple都一样）。
`dictionary_name[key] = value`可以在dict中加入或更新key的value。
`del dict[key]`可以remove掉key，没有时会报错。
`in`和`not in`可以key判断在或不在字典中。
`dict.keys()/.values()/.items()`返回dict的key/value/(key, value)的tuple组成的list。
`dict.get(keyname, value)`返回keyname对应的值，如不存在返回value。value默认为`None`。
`dict.update(iterable)`用可迭代的iterable来更新dict，可迭代的如某个dictionary或者(key,value)的list等等。
`dict.pop(key)/.popitem(key)`romove掉key并返回其value/（可以看作**随机**remove）remove掉并返回最后一个key-value对，没有时会报错。

# 内置函数

`print`

以特定格式输出可以考虑modulo operator %，format()和f-strings。

`sorted`

`sorted(iterable, cmp=None, key=None, reverse=False)`对任何可迭代对象iterable排序并返回排序后的可迭代对象。例如`sorted(list, reverse=True/False)`返回list排序后的序列，默认从小到大排序（默认reverse=False），事实上迭代器都可以（如

`reversed`

和sorted同理。

`map`

`map(function, iterable, ...)`对参数序列iterable中每一个元素调用function。

`eval()`

`eval(expression[, globals[, locals]])`用于执行一个字符串表达式expression。

`next()`

`next(iterable[, default])`返回迭代器的下一个项目。default可选，用于设置在没有下一个元素时返回该默认值，如果不设置，又没有下一个元素则会触发 StopIteration 异常。