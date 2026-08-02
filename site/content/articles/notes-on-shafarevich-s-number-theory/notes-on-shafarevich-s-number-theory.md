---
title: Notes on Neukirch's Algebraic Number Theory 1
date: 2025-03-18T14:38:42.000Z
tags:
  - 代数
  - 数论
  - 代数数论
articleId: notes-on-shafarevich-s-number-theory
category: mathematics/number-theory/neukirch-number-theory
order: 1
---
$\mathrm{Ex.\ 2.1.}$ 令 $\alpha=\frac{3+2\sqrt6}{1-\sqrt6}=\frac{9+\sqrt6}5$ ，由 $\alpha^2-\frac{18}5\alpha+3=0$ 知其不为代数整数（否则比如说乘某个 $\mathbb{Q}[x]$ 中元素整除 $\mathbb{Z}[x]$ 中首一多项式，那把分母最小公倍数乘起来，则在 $\mathbb{Z}[x]$ 中整除等式右边不整除左边，矛盾）。$\square$

$\mathrm{Ex.\ 2.2.}$ 令 $k=\operatorname{Frac}(A)$ ，由于 $k[t]$ 在 $k(t)$ 中整闭（因为是UFD），故只需证 $A[t]$ 在 $k[t]$ 中整闭。假设 $f\in k[t]$ 满足关系

$$f^n+a_{n-1}f^{n-1}+\cdots+a_0=0,\quad a_0,\cdots,a_{n-1}\in A[t]$$

则考虑 $f$ 最高次项系数 $f_n$ ，它满足某个 $A$ 系数多项式从而属于 $A$ 。现在对 $n$ 归纳证 $f\in A[t]$ ，事实上考虑 $f-f_nt^n$ 降次即可。$\square$

$\mathrm{Ex.\ 2.3.}$ 考虑 $\alpha=x/y$ ，满足关系 $\alpha^3-x=0$ 。$\square$
