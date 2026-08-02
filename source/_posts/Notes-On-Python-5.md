---
title: 关于Matplotlib
date: 2025-01-04 15:18:56
tags: [编程, Python]
---
Matplotlib大量使用numpy，所以两者经常被一同import
```python
import numpy as np
import matplotlib.pyplot as plt
```
Pyplot 是 Matplotlib 的子库，提供了和 MATLAB 类似的绘图 API，能很方便让用户绘制 2D 图表。

IPython（从而Juypter Notebook）有一组预先定义好的所谓的魔法函数（Magic Functions），你可以通过命令行的语法形式来访问它们，例如``%matplotlib inline``可以省略掉``matplotlib.pyplot.show()``。

Matplotlib同时支持命令式编程（作用于最近的图表或轴）和面向对象编程，推荐使用后者。

Matplotlib中定义了Figure容器
```python
class matplotlib.figure.Figure(figsize=None, dpi=None, *, facecolor=None, edgecolor=None, linewidth=0.0, frameon=None, subplotpars=None, tight_layout=None, constrained_layout=None, layout=None, **kwargs)
```

``matplotlib.pyplot.figure(num=None, figsize=None, dpi=None, *, facecolor=None, edgecolor=None, frameon=True, FigureClass=<class 'matplotlib.figure.Figure'>, clear=False, **kwargs)``返回一个Figure对象。

num为int或str，为图形的唯一标识符。figsize是(float, float)形式的tuple，表示宽度和长度，单位英寸，默认``[6.4, 4.8]``。

Axes是一个矩形区域，这个矩形是基于figure坐标系统定义的。Axes也是matplotlib框架中一个重要的类对象，但首先要把它理解为figure中的一个子矩形区域。

``Figure.add_axes(rect, projection=None, polar=False, **kwargs)``返回向Figure中添加新的轴的Axes对象。rect为(left, bottom, width, height)形式元组，(left, bottom)表示添加的子区域左下角坐标，width和height为子区域宽度长度，它们都以在Figure宽度和高度中的占比表示。

``Figure.subplots(nrows=1, ncols=1, *, sharex=False, sharey=False, squeeze=True, width_ratios=None, height_ratios=None, subplot_kw=None, gridspec_kw=None)``向Figure添加一组子图，形如nrows×cols的矩形排布，返回一个figure和Axes。

Axes中有许多绘图的函数：

``plot([x], y, [fmt], *, data=None, **kwargs)``或``plot([x], y, [fmt], [x2], y2, [fmt2], ..., **kwargs)`` 用于用于绘制线图和散点图。向 plot 提供单个列表或数组，matplotlib 会假设它是一系列 y 值，并自动生成 x 值。接受两个数组时则会将前者作为x后者作为y绘图。fmt为string类型可选项，可以有color, marker, linestyle, linewidth, markersize。具体的功用如下：
Color为颜色
| Character | Color    |
|-----------|----------|
| 'b'       | Blue     |
| 'g'       | Green    |
| 'r'       | Red      |
| 'c'       | Cyan     |
| 'm'       | Magenta  |
| 'y'       | Yellow   |
| 'k'       | Black    |
| 'w'       | White    |

marker为图中点的标记
| Character | Description     |
|-----------|-----------------|
| '.'       | Point marker    |
| 'O'       | Circle marker   |
| 'x'       | X marker        |
| 'D'       | Diamond marker  |
| 'H'       | Hexagon marker  |
| 's'       | Square marker   |
| '+'       | Plus marker     |

linestyle为直线形式
| Character | Description      |
|-----------|------------------|
| '-'       | Solid line       |
| '--'      | Dashed line      |
| '.'       | Dash-dot line    |
| ':'       | Dotted line      |

在函数调用里写``ax.plot(drug_conc, response, color='r', marker='o', linestyle='-.')``和写``ax.plot(drug_conc, response, 'ro-.')``有相同效果。

类似地还有：

``scatter()``：用于绘制散点图
``bar()``/``Barh()``：用于绘制垂直/水平条形图和水平条形图
``hist()``：用于绘制直方图
``pie()``：用于绘制饼图
``imshow()``：用于绘制图像
例如
```python
names = ['group_a', 'group_b', 'group_c']
values = [1, 10, 100]
plt.figure(figsize=(9, 3))
plt.subplot(131)
plt.bar(names, values)
plt.subplot(132)
plt.scatter(names, values)
plt.subplot(133)
plt.plot(names, values)
plt.suptitle('Categorical Plotting')
plt.show()
```
会产生![](image.png)

``ax.set_title (label, fontdict=None, loc=None, pad=None, y=None)``可以给Axes对象设置标题。``label``是string，用于作为标题的文本。``fontdict``是一个dict，包括'fontsize’ 'fontweight’, 'color’等控制标题性质的关键字。``loc``可以是{'center', 'left', 'right’}中一个。y和pad都是为浮点数。``y``表示标题的垂直轴位置（1.0为顶部）。如果None（默认值），则自动确定y以避免轴上的装饰符。``pad``是标题与坐标轴顶部的偏移量，以点为单位。

``ax.set_xlabel(xlabel, fontdict=None, labelpad=None, loc=None)``和``ax.set_ylabel(ylabel, fontdict=None, labelpad=None, loc=None)``分别用于设置x轴和y轴的标签。loc在 {'bottom', 'center', 'top’}/{'center', 'left', 'right’}中。

``ax.set_xticks(ticks)``或``ax.set_yticks(ticks)``可以设置x/y轴的刻度位置。ticks为float的list，包括诸刻度的位置。

``ax.set_xticklabels(labels, fontdict=None)``或``ax.set_yticklabels(labels, fontdict=None)``可以设置x/y轴的刻度标签，labels为string的list。

``ax.set_xlim( left=None, right=None)``或``ax.set_ylim( left=None, right=None)``可以设置x/y轴的视图限制。

``ax.set_facecolor(color)``设置图表空白的颜色。

``ax.set_frame_on(b)``按布尔值b确定是否设置图表矩形边框。

``ax.grid(b=None, axis='both’)``设置网格线，axis可以为{'both', 'x', 'y'}中一个，表示某轴是否设置网格线。

Spiness是Axes的四个边框线，可以用``ax.spines['right']``、``ax.spines['left']``、``ax.spines['top']``、``ax.spines['bottom']``访问。

``spine.set_color()``可以设置颜色（None则不显示）。``spine.set_linewidth()``设置宽度。

``ax.legend(labels, loc, fontsize, title,
frameon…)``在Axes对象中放图例。labels是str的list，是每条线的命名。而loc则是![alt text](image-1.png)

``ax.twinx()``或``ax.twiny()``可以创建一个新的Axes，其中有一个不可见的x / y轴和一个独立的y / x轴，位于与原始轴相对的位置。

