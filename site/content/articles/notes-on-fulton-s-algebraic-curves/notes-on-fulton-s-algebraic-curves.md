---
title: Notes On Fulton's Algebraic Curves
date: 2024-10-14T17:30:33.000Z
tags:
  - 数学
  - 代数
  - 代数几何
  - 读书笔记
articleId: notes-on-fulton-s-algebraic-curves
category: mathematics/algebraic-geometry/fulton-algebraic-curves
order: 1
---

> 包括但不限于关于Fulton的Algebraic Curves中卡过我的/感觉有意思的/可能需要经常查看的/无端决定写在这里的东西。

## 1.1

$\bf{\rm 1.4.}$  *$F(a_1,...,a_{n})\equiv 0$ 意味着 $F=0$*

考虑固定前 $n-1$ 个变元，则 $F(a_1,...,a_{n-1},x)\equiv 0$ ，故 $F(a_1,...,a_{n-1},x)=0$ ，因而将 $F$ 按 $X_n$ 分次 $F=\sum F_iX_n^i$ 可知 $F_i$ 均等于 $0$ ，归纳可证 $F=0$ 。$\square$

$\bf{\rm 1.7.}$ (1) 考虑

$$\begin{aligned}G(X_1,...,X_n)&=F(X_1+a_1,...,X_n+a_n)\\&=\sum\lambda_{(i)}X_1^{i_1}\cdots X_n^{i_n}\end{aligned}$$

则考虑 $G(X_1-a_1,...,X_n-a_n)$ 得到

$$F=\sum\lambda_{(i)}(X_1-a_1)^{i_1}\ldots(X_n-a_n)^{i_n},\quad\lambda_{(i)}\in k$$

(2) 由(1)立即可知 $F(a_1,...,a_n)=0$ 时有

$$F=\sum_{i=1}^n (X_i-a_i)G_i$$

## 1.2

$\bf{\rm 1.13.}$ *若干非代数集*
1. $\{(x,y)\in\mathbb{A}^2(\mathbb{R})\mid y=\sin(x)\}$ 
2. $\{(z,w)\in\mathbb{A}^2(\mathbb{C})\mid|z|^2+|w|^2=1\},\mathrm{where~}|x+iy|^2=x^2+y^2\mathrm{~for~}x,y\in\mathbb{R}$
3. $\{(\cos(t),\sin(t),t)\in\mathbb{A}^3(\mathbb{R})\mid t\in\mathbb{R}\}$

对于1，假设存在多项式 $f(x,y)$ 在该集合在为 $0$ ，则固定 $y$ ，多项式 $f(x,a)$ 有无穷多个根因而为 $0$ 。2和3同理可搞。事实上这题是1.12结论的直接应用。

## 1.3

*$I(V(S))\ne S$ , $V(I(X))\ne X$ 而 $I(V(I(X)))=I(X)$ , $V(I(V(S)))=V(S)$*

注意到

$$\begin{aligned}I(V(S))\supset S&\implies V(I(V(S)))\subset V(S)\\V(I(X))\supset X&\implies V(I(V(S)))\subset V(S)\end{aligned}$$

反过来把 $S$ 代换为 $I(X)$ ，$X$ 代换为 $V(S)$ 即可得到反向的包含。 $\square$

事实上此中有一些神奇的对应。不难证明

$$S\subset I(X) \iff X\subset V(S)$$

从而有

$$\begin{aligned}V(I(X))&=\bigcap_{V(S)\supset X} V(S)\\I(V(S))&=\bigcap_{I(X)\supset S}I(X)\end{aligned}$$

由此也可立即得证上面结论。

$\bf{\rm 1.16.}$ 代数集 $V=W$ 当且仅当 $I(V)=I(W)$

设 $V=V(S_1),\ W=V(S_2)$ ，假若 $I(V)=I(W)$ ，则

$$V=V(I(V(S_1)))=V(I(V(S_2)))=W$$

 $\square$

事实上我们也有

$$V\subsetneq W\iff I(V)\supsetneq I(W)$$

注意到我们考虑这种代数集和其理想之间的对应时完全没有用到多项式本身的性质。事实上 $V-I$ 的对应也完全可以应用在一般的映射

## 1.4

$\bf{\rm 1.22.}$ *对 $\pi:R\to R/I$ ，其给出 $R/I$ 理想/根理想/素理想/主理想和 $R$ 中包含 I的理想/根理想/素理想/主理想的一一对应*

对 $R/I$ 中理想 $J'$ ，$J=\pi^{-1}(J')$ 是 $R$ 中包含 $I$ 理想，$J'=\pi(J)$ ，乘法吸收律自然成立。余下同理。$\square$

## 1.5

$\bf{\rm 1.25.}$ 
1. *$I(V(Y-X^2))=(Y-X^2)$ ，故 $V(Y-X^2)\subset \mathbb A^2(\mathbb C)$ 不可约*  
2. 

$$V(Y^4-X^2,Y^4-X^2Y^2+XY^2-X^3)=V(Y)\cup V(1-Y)\cup V(1+Y)\cup V(X+Y^2)$$

$f(X,Y)$ 对 $Y-X^2$ 取模得到 $f(X,X^2)$ ，从而不被 $Y-X^2$ 整除者只与其有有限多交点（ $f(X,X^2)$ 的零点）。

$\bf{\rm 1.26.}$ *$F=Y^2+X^2(X-1)^2\in\mathbb R[X,Y]$ 不可约而 $V(F)$ 可约*

注意到 $V(F)=V(Y^2+X^2)\cup V(Y^2+(X-1)^2)$ $\square$

## 1.6

## 1.7
Hilbert弱零点定理可以被等价地叙述为如下定理的逆命题：若对 $\mathbb C$ 多元多项式 $f_1,\cdots,f_n$ ，存在环量组合

$$g_1f_1+\cdots+g_nf_n=1$$

则诸 $f_i$ 不能有公共零点。即若诸 $f_i$ 无公共零点，则存在上述环量组合。

零点定理则可以被重述为如果 $f_i$ 的零点都是 $h$ 的零点，则存在 $r$ 和 $g_i$ 使得

$$h^r=g_1f_1+\cdots+g_nf_n$$

或者两个复多项式具有同样的复根, 当且仅当它们具有同样的不可约因子。

$\bf{\rm 1.32.}$ $\mathbb R[X,Y]$ 中 $I=I(V(X^2+Y^2+1))=(1)$ ，此时 $I$ 为根理想，给出（弱）零点定理和推论1的反例；$\bf{\rm 1.26}$ 给出 $I$ 素理想而 $V(I)$ 可约的例子，$\mathbb R[X]$ 中高次不可约多项式给出不对应单点的极大理想，给出推论2和推论3的反例；而对推论4，$k[X_1,\ldots,X_n]/I$ 有限维则

$$|V(I)|\leqslant \dim_k(k[X_1,\ldots,X_n]/I)$$

的论证不依赖代数闭的性质，而反过来 $I=(X^2+1)$ 在 $\mathbb R[X,Y]$ 中即给出逆命题不成立的反例。

$\bf{\rm 1.33.}$ a. 注意到

$$\begin{aligned}V(X^2+Y^2-1, X^2-Z^2-1)&=V(Y^2+Z^2, X^2+Y^2-1)\\&=V(Y-iZ,X^2+Y^2-1)\cup V(Y+iZ,X^2+Y^2-1)\end{aligned}$$

如果能证明 $(Y-iZ,X^2+Y^2-1)$ 是根理想，那么便立即有

$$\mathbb C[X,Y,Z]/(Y-iZ,X^2+Y^2-1)\cong \mathbb C[X,Y]/(X^2+Y^2-1)$$

则由1.6节推论1，由 $V(X^2+Y^2-1)$ 在 $\mathbb C[X,Y]$ 中不可约性可知其为整环。而事实上 $\mathbb C[X,Y]/(X^2+Y^2-1)$ 中不存在幂零元，从而 $(0)$ 为 $\mathbb C[X,Y,Z]/(Y-iZ,X^2+Y^2-1)$ 中根理想，进而依对应定理可知 $(Y-iZ,X^2+Y^2-1)$ 是根理想。
b. $I(V)=(X-Y^2, X-Y^3)$ ，而

$$\mathbb C[X,Y,Z]/(X-Y^2, X-Y^3)\cong \mathbb C[X]$$

是整环。

## 2.2

$\bf{\rm 2.7.}$ $\varphi^{-1}(X)=V(\tilde\varphi(I(X)))$ 故 $X$ 为代数集。如果 $X$ 可以被表为两个非空真子代数集的并 $X_1\cup X_2$ ，则 $\varphi^{-1}(X)=\varphi^{-1}(X_1)\cup \varphi^{-1}(X_2)$ 亦然。

$\bf{\rm 2.8.}$ b. 上一题的直接推论。
