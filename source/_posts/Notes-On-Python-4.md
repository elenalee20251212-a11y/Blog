---
title: 关于Numpy
date: 2025-01-04 15:18:48
tags: [编程, Python]
---

NumPy 最重要的一个特点是其 N 维数组对象 ndarray，它描述了一组相同类型（type）的“项”。可以使用N个整数对项进行索引。ndarray中所有元素都具有相同的类型。

``numpy.array(object, dtype=None, *, copy=True, order='K', subok=False, ndmin=0, like=None)``返回一个被创建的ndarray。object可以是列表、元组、嵌套列表等。‘K’指不变顺序（保持F & C顺序，如没有选择最接近的，如list为C顺序），而A指不变顺序但默认C顺序，以行为主和以列为主（Fortran顺序）分别是C和F。

numpy中有许多数据类型，可以用一个字母简写
| Symbol | Type                        |
|--------|-----------------------------|
| i      | integer                     |
| b      | boolean                     |
| u      | unsigned integer            |
| f      | float                       |
| c      | complex float               |
| m      | timedelta                   |
| M      | datetime                    |
| O      | object                      |
| S      | string                      |
| U      | unicode string              |
| V      | fixed chunk of memory for other type (void) |
既可以有``dtype='f'``的简写，也可以写``dtype=int``这样的写法。

``.tolist()``返回ndarray转换得到的list。

``numpy.zeros(shape, dtype=float, order='C', *, like=None)``返回shape形状的全0数组，shape是单个int或者int的元组（例如``(2,3)``对应二行三列数组）。类似地函数还有``numpy.ones``，返回全1数组。

``numpy.full(shape, fill_value, dtype=None, order='C', *, device=None, like=None)``返回全fill_value的shape形状数组。

``numpy.eye(N, M=None, k=0, dtype=<class 'float'>, order='C', *, device=None, like=None)[source]``返回二维数组，只有第k对角线1其余全为0（k为0默认主对角线）。只给N不给M时返回N×N数组。例如
```python
>>> np.eye(2, 3, dtype=int)
array([[1, 0, 0],
       [0, 1, 0]])
```
``numpy.identity(n, dtype=None, *, like=None)``返回n阶单位阵。

``random.random(size=None)``返回半开区间 $[0.0,1.0)$ 内的随机浮点数，不填size只返回一个数，否则返回size大小的矩阵。

``numpy.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None, axis=0, *, device=None)``返回num个[start, stop]上均匀分布的数组成的数组（且以这两个数为起始结尾的）。可以选择性地排除区间的右端点。类似地``numpy.logspace(start, stop, num=50, endpoint=True, base=10.0, dtype=None, axis=0)``返回对数坐标下 $[10^{\rm start}, 10^{\rm stop}]$ 均匀分布的数组成的数组。

``numpy.arange([start, ]stop, [step, ]dtype=None, *, device=None, like=None)``返回区间[start, stop)中按step步长均匀分布的数。``arange(stop)``被解释为在[0, stop)上，step则默认为1。

ndarray.ndim是ndarray的维数。ndarray.shape是一个描述了ndarray形状的元组。ndarrary.size是ndarray的大小，ndarray.dtype则是数据类型。