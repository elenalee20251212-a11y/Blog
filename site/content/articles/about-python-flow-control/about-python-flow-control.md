---
title: 关于Python流程控制、错误处理与文件操作
date: 2024-11-11T16:33:58.000Z
tags:
  - 编程
  - Python
articleId: about-python-flow-control
category: programming/languages/python
order: 3
---

# 流程控制

## For

for循环形如
```python
for VAR in ITERABLE:
    BLOCK
```
如若ITERABLE中元素为tuple，也可以有如
```python
for VAR1,VAR2 in ITERABLE:
    BLOCK
```
``enumerate(ITERABLE)``将一个可遍历的数据对象组合为一个索引序列（类型为enumerate），其元素为形如``(index, item)``的tuple。
``range(start, stop[, step])``生成可迭代的序列（类型为range），start默认为0，step默认为1。
Python有List comprehension(列表推导式)，形如```[expression for item in iterable if condition == True]```其中if条件默认为全部True。此外可以有```[expression1 if condition1 else expression2 for item in iterable]```的写法。
``break``可以结束最近的一个for或者while循环。
``continue``则是直接进入下一轮循环。
``pass``为空操作。

# 错误处理

``raise [exceptionName [(reason)]]``会抛出异常，名称为exceptionName而描述为reason，形如``exceptionName: reason``。`raise`会抓取最近的报错信息（如在上一层try中被抛出的，try中异常被处理结束之后便不会再抛出），如果没有默认RuntimeError。
`try`和`except`可以不让程序报错的情况下尝试执行一段代码并就相关异常抛出进行处理，具体来说形如
```python
try:
    # ...some error prone code... 
    code block 1 
except: 
    # ...do something with the error... 
    code block 2 
except Exception_Name_1: 
    # ...do something with the error... 
    code block 3
else: 
    # ...to do when there is no error...
    code block 4
finally: 
    #...some clean up code...
    code block 5 
```
如果出现异常（exception），那么将进入``except:``处理，默认任何异常都会进入except，而``except Exception_Name_1``只处理错误名称为Exception_Name_1的情形。``finally:``无论如何都会被执行。

## 文件操作

## 基本I/O

电脑向python程序输入数据可以通过电脑键盘（keyboard）和输入文件（input data file）来输入，输出数据可以通过the monitor screen和输出文件来输出。

``variable_name = input([prompt])``prompt用于提示用户，从屏幕上输入的内容总是str类型。

``print(..., end = str)``可以使print输出...后再输出str，默认str为换行。

文件可以被大体分为binary files (二进制文件)和text files （文本文件），文本文件存储的是ASCII码。二进制文件一般包含headers以标识其文件内容，如果header无效则supporting programs可能不会打开这个二进制文件或者报告其损坏。二进制文件相对来说读取和存储速度更快，更少限制性而且更具安全性，但更容易损坏。

基于unix的操作系统中文件路径分隔符（delimiters）用`/`，对大小写敏感。而Windows则是`\`，对大小写不敏感。带有`.`或`..`的文件路径为相对路径，如`..\langur.txt`定位当前目录的父目录中名为`langur.txt`的文件，而`..\langur.txt`则定位当前目录，`..\..\langur.txt`定位父目录的父目录。

## OS模块

Python中os模块处理与操作系统的接口，需要`import os`。
`os.getcwd()`将返回当前工作目录的路径string。
`os. listdir(dir)`返回一个list，其中元素是dir中每个文件名称的string。dir默认是当前工作目录（string类型）。
`os.remove(file)`删除名为file的文件（file为string类型）。
`os.rename(source, destination)`将source重命名为destination。
`os.mkdir(path)`创建一个新目录path。
`os.path.join(path, *paths)`把一串路径串联成一个大路径。
` os.path.exists(path)`、` os.path.isfile(path)`和` os.path.isdir(path)`返回bool值判断是否存在如path所述的路径、目录和文件。
`os.path.getmtime(path)`返回path最新一次被修改的时间。
`os.path.split(path)`返回一对string，`(head, tail)`，其中tail为字符串直至最末分隔符的后缀，其余在该分隔符前部分为head。

## 读入/写入文件

`open ( file, mode, .. )`会返回一个文件句柄，file为文件目录，可以绝对可以相对，mode是字符串以描述这个文件会如何被处理，具体来说的mode如下：

| 模式 | 描述 |
|------|------|
| `r`  | 以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。 |
| `w`  | 	打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| `a`  | 	打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。 |
| `r+` | 打开一个文件用于读写。文件指针将会放在文件的开头。文件不存在时会报I/O错误。 |
| `a+` | 	打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。 |
| `w+` | 打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| `rb` | 以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。一般用于非文本文件如图片等。 |
| `wb` | 以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。 |

`.read(n)`将从文件中读入n个字节的内容，默认全部读入（不推荐）。`.readline(n)`将从文件读取整行包括换行符`\n`，如果指定了一个非负数的参数，则返回指定大小的字节数，包括`\n`字符。如果已经到文件末尾（碰到结束符EOF）则会返回空字符串。`.readlines()`返回一个list，每个元素都是文件中的一行。如果碰到EOF则会返回空字符串。`for i in f`，其中f为读入文件句柄，可以按行迭代文件内容。

读入的结尾需要关闭文件，即`.close()`。

with statement可以自动关闭文件，它形如：
```python
with open(file, mode) as file_handler:
 Statement_1
 Statement_2
```

``with open(file, mode, encoding='')``将确定读入时选择的编码。如``encoding='ascii'``、``encoding='utf-8'``分别对应ascii码和utf-8编码的情况。python3默认为utf-8。

`file.write(byte)`可以向file_handle对于文件中写入string。write不会自动补上换行符。与read时类似的也有`file_handle.writelines(list)`。（同样不会默认加`\n`）

## 常见文本文件格式

.txt / .tsv文件用Tab制表符`\t`分隔，CSV（Comma Separated Values）文件用`,`分隔。

` import csv` 可以调用CSV模块。
`csv.reader(file, delimiter='')`返回一个reader object，可以按行迭代csvfile文件中读取内容（每行都返回为string），csvfile可以是文件或文件对象，也可以是类似文件的对象（如StringIO对象）。delimiter为分隔符，默认为逗号，也可以改为如'\t'等。类似地，``csv.writer``返回将数据写入 CSV 文件的写入器对象

在csv文件中写入内容可以考虑
```python
csvwriter = csv.writer(csvfile, delimiter='')
csvwriter.writerow(row)
csvwriter.writerows(rows)
```
delimiter默认为逗号。row是一个列表，rows则是每行对应列表之列表。writerows会自动换行。

``csv.DictReader(f, fieldnames=None, restkey=None, restval=None, dialect='excel', *args, **kwds)``会返回一个类似reader的reader object，但将每行中的信息映射到一个字典，该字典的keys由可选的fieldnames参数给出。fieldnames参数是一个序列。如果省略字段名，则文件f第一行中的值将用作字段名，并将从结果中省略。如果提供了字段名，将使用它们，并且第一行将包含在结果中。无论字段名是如何确定的，字典都会保留它们的原始顺序。例如``csv.DictReader(f, fieldnames=['a', 'b', 'c'])``则对应的keys是a, b, c，而默认则是csv文件第一行对应内容。

如果一行的字段多于字段名，则将剩余的数据放入列表中，并使用由restkey指定的字段名（默认为None）存储。如果非空白行的字段少于字段名，则用restval的值（默认为None）填充缺失的值。

类似地还有``csv.DictWriter(f, fieldnames, restval='', extrasaction='raise', dialect='excel', *args, **kwds)``。它将创建一个对象，其操作方式与常规写入器类似，但将字典映射到输出行。fieldnames参数是一个键序列，用于标识传递给writerow方法的字典中的values写入文件f的顺序。它的用法例如
```python
import csv

with open('names.csv', 'w', newline='') as csvfile:
    fieldnames = ['first_name', 'last_name']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    writer.writerow({'first_name': 'Baked', 'last_name': 'Beans'})
    writer.writerow({'first_name': 'Lovely', 'last_name': 'Spam'})
    writer.writerow({'first_name': 'Wonderful', 'last_name': 'Spam'})
```

## Pickle模块

在程序生命周期中创建的所有变量都临时存储在内存中，并在程序终止时消失。而pickle模块是Python专用的持久化模块，也就是让数据持久化保存。 “Pickling” 是将 Python 对象层次结构转换为字节流的过程，而 “unpickling” 是逆操作。

`pickle.dump(pythonObject, pickleDestination, pickle_protocol=None, *, fix_imports=True)`将python对象pythonObject转换成写入pickleDestination的字节流。类似地可以用`pickle.load(f)`。用pickle.dump和pickle.load读写文件时要用`wb`和`rb`模式。

`pickle.dumps(pythonObject)`返回pythonObject转换而来的二进制串。`pickle.loads(bytes_object)`有类似功用。

`Booleans, Integers, Floats, Strings, Tuples, Lists, Sets, Dictionaries`均能被pickle。
