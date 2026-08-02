---
title: About C-R Equations
date: 2024-07-06T20:23:01.000Z
tags:
  - 数学
  - 分析
  - 复分析
articleId: about-c-r-equations
category: mathematics/analysis-topology/complex-analysis
order: 2
---
## 关于局部线性

我们熟知有柯西-黎曼方程

$$\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}\quad \mathrm {and}\quad \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}$$

从从形式上看，对 $f(x+y{\rm i})=u+v{\rm i}$ 在作为 $\mathbb R^2\to \mathbb R^2$ 可微时有

$$\Delta f(x+y{\rm i})=(p+q{\rm i})(\Delta x+{\rm i}\Delta y)+\varepsilon\rho$$

其中 $\rho=\sqrt{\Delta x^2+\Delta y^2}$ ， $\rho\to 0$ 时 $\varepsilon\to 0$ ，则将 $(p+q{\rm i})(\Delta x+{\rm i}\Delta y)$ 展开 

$$\begin{align}\Delta u&=p\Delta x-q\Delta y+\varepsilon\rho\\\Delta v&=q\Delta x+p\Delta  y+\varepsilon\rho\end{align}$$

 分别给出 $u,v$ 的全微分，从而便有C-R方程。换种写法便是

$$\lim_{\varepsilon\downarrow0}\frac{f(z)-f(z_0)}{z-z_0}$$

的存在性意味着

$$\begin{aligned}\lim_{\varepsilon\downarrow0}\frac{[f(z_0+\varepsilon)-f(z_0)]}{\varepsilon}=\lim_{\varepsilon\downarrow0}\frac{[f(z_0+i\varepsilon)-f(z_0)]}{i\varepsilon}\end{aligned}$$

更进一步的， $f$ 作为 $\mathbb R^2\to \mathbb R^2$ 映射的Jacobian矩阵为 $\begin{pmatrix}u_x&v_x\\ u_y &v_y\end{pmatrix}$ 。另一方面，$f$ 作为 $\mathbb{C\to C}$ 意义下的局部线性是指 $\Delta f=(c+\varepsilon)\Delta z$，其中 $c=f'(z_0)$ ，$\Delta z\to0$ 时 $\varepsilon\to0$ ，感性理解为 ${\rm d}f=c{\rm d}z$ ，其几何意义即旋转与伸缩，从而复数乘法的作用与复平面上的一些实线性变换有对应

$$r(\cos \theta+{\rm i}\sin \theta)\leftrightarrow r\begin{pmatrix}\cos\theta &-\sin\theta\\ \sin\theta &\cos\theta\end{pmatrix}$$

也就是复数的矩阵表示

$$\begin{pmatrix}a&-b\\b &a\end{pmatrix}:a,b\in\mathbb R$$

带入Jacobian矩阵立即可得C-R方程。

事实上因为 ${\rm d}x$ 与 ${\rm id}y$ 均受同一 $c$ 作用，自然就有 $v_x+{\rm i}v_y={\rm i}(u_x+{\rm i}u_y)$ ，而就一种更直观的几何视角而言，考虑下图 ![](CR%20Equation%201.svg)绿、紫、红、蓝部分分别为 $c{\rm d}x$ 在 $u$ 方向的投影（投影或者说在分量上的贡献） $\frac{\partial u}{\partial x}$、 $c{\rm d}y$ 在 $v$ 方向的投影 $\frac{\partial v}{\partial y}$、 $c{\rm d}x$ 在 $v$ 方向的投影 $\frac{\partial v}{\partial x}$、 $c{\rm d}y$ 在 $u$ 方向的投影 $\frac{\partial u}{\partial y}$ ，则C-R方程无非三角函数的诱导公式（注意实际上这些微分都是线性泛函！）。

## Wirtinger导数

定义Wirtinger导数

$$\begin{aligned}&\frac{\partial}{\partial z}=\frac{1}{2}\left(\frac{\partial}{\partial x}+\frac{1}{i}\frac{\partial}{\partial y}\right)=\frac{1}{2}\left(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\right)\\&\frac{\partial}{\partial\bar{z}}=\frac{1}{2}\left(\frac{\partial}{\partial x}-\frac{1}{i}\frac{\partial}{\partial y}\right)=\frac{1}{2}\left(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\right)\end{aligned}$$

事实上 $\frac{\partial}{\partial x}.\ \frac{\partial}{\partial y}$ 的线性组合 $\frac{\partial}{\partial z},\ \frac{\partial}{\partial\bar{z}}$ 满足

$$\begin{aligned}&\frac{\partial}{\partial z}z=1&\frac{\partial}{\partial z}\bar z=0\\&\frac{\partial}{\partial\bar{z}}z=0&\frac{\partial}{\partial\bar{z}}\bar z=1\end{aligned}$$

的唯一解便是上述定义。
这里 $\frac{\partial}{\partial x},\ \frac{\partial}{\partial y}$ 是 $dx,\ dy$ 的对偶基 ， $\frac{\partial}{\partial z},\ \frac{\partial}{\partial\bar{z}}$ 是 $dz,\ d\bar z$ 的对偶基。

此时C-R方程可以被简单地表示为

$$\frac{\partial w}{\partial\bar{z}}=0$$

而同时

$$\frac{\partial w}{\partial z}=w'$$

为了解释考虑一个有启发性的例子。

设 $z=x+iy$ ，多项式 $f(x,y)$ 总可以表为 $z$ 与 $\bar z$ 的多项式

$$f(x,y)=\sum a_{mn}z^m{\bar z}^n$$

因为 $\frac{\partial}{\partial z}, \frac{\partial}{\partial\bar{z}}$ 满足Leibniz律，所以 $\frac{\partial f}{\partial\bar{z}}=\sum a_{nm}z^m n{\bar z}^{n-1}$ 则 $\frac{\partial f}{\partial\bar{z}}=0$ 意味着 $a_{mn}n=0$ ，即 $n>0$ 时 $a_{mn}=0$ ，$f(x,y)$ 是 $z$ 的多项式，感性一点讲就是依赖于 $z$ 而不依赖于 $\bar z$ 。这种事实也可以推广到无穷收敛幂级数的类似情形。

## 共形映射

## Reference

Ahlfors - Complex Analysis

Borcherds的[网课](https://www.bilibili.com/video/BV15F41137Nn)第五节
