---
title: Notes on Atiyah's Commutative Algebra 5
date: 2025-06-06T17:05:54.000Z
tags:
  - 数学
  - 代数
  - 交换代数
articleId: notes-on-atiyah-s-commutative-algebra-5
category: mathematics/algebraic-geometry/atiyah-macdonald
order: 6
---
$\rm{Ex.\ 5.1\ }$ 考虑将 $f$ 分解为 $p:A\to f(A)$ 和 $i:f(A)\hookrightarrow B$ ，由于Going-up所以 $i^*$ 是闭映射（也就是 $f(A)$ 中素理想都是 $\mathfrak{q}'\cap f(A)$ 形式），由于 $p$ 满所以 $p^*$ 是闭映射（对包含 $f^{-1}(\mathfrak{b})$ 的 $\mathfrak{p}$ ，$f(\mathfrak{p})$  是 $f(A)$ 中素理想，从而由于 $f^{-1}(0)\subset \mathfrak{p}$ ，$p^{-1}(f(\mathfrak{p}))=\mathfrak{p}$ ）。

$\rm{Ex.\ 5.3\ }$ $B'$ 在 $f(B)$ 上整，则对 $x\in B'$ ，假设

$$x^n+b_1x^{n-1}+\cdots+b_n=0$$

其中诸 $b_i\in f(B)$ ，则

$$(x\otimes c)^n+(b_1\otimes c)(x\otimes c)^{n-1}+\cdots+(b_n\otimes c^n)(x\otimes c)^0=0$$

也就是 $x\otimes c$ 在 $f(B)\otimes C$ 上整。

$\rm{Ex.\ 5.4\ }$ 考虑 $k[x]$ 的子环 $k[x^2-1]$ ，$\mathfrak{n}=(x-1)$ ，$\mathfrak{m}=\mathfrak{n}\cap k[x^2-1]=(x^2-1)$ ，如果 $1/(x+1)$ 在 $A_{\mathfrak{m}}$ 上整，则存在 $f_1/g_1,\cdots,f_n/g_n\in A_{\mathfrak{m}}$ 使得

$$\frac{1}{(1+x)^n}+\frac{f_1}{g_1}\frac{1}{(1+x)^{n-1}}+\cdots+\frac{f_n}{g_n}=0$$

从而得到

$$1+\frac{f_1}{g_1}(1+x)+\cdots+\frac{f_n}{g_n}(1+x)^n=0$$

由于 $g_i\not\in (x^2-1)$ 所以 $g_i\not\in (x+1)$ 即 $g_i(-1)\not\in 0$ ，从而考虑上式在 $-1$ 处取值即得矛盾。

$\rm{Ex.\ 5.5\ }$ (i) 向

$$x^{-n}+a_{1}x^{-(n-1)}+\cdots+a_n=0$$

上乘以 $x^{n-1}$ 得到

$$x^{-1}=a_1+a_2x+\cdots+a_nx^{n-1}\in A$$

 (ii) 按5.8与5.10，由于 $B$ 中极大理想的收缩皆极大且 $A$ 中极大理想都是 $B$ 中极大理想的收缩，故显然 $A$ 的Jacobson根就是 $B$ Jacobson根的收缩。

另证：对 $B$ 中Jacobson根 $x$ ，$x\in A$ ，对一切 $y\in A$ ， $1-xy$ 在 $B$ 中可逆，从而在 $A$ 中可逆，故 $B$ Jacobson根的收缩包含于 $A$ 的Jacobson根。

$\rm{Ex.\ 5.6\ }$ 假设 $(b_1,\cdots,b_n)\in \prod_{i=1}^{n} B_i$ ，取首一多项式 $f_i\in A[x]$ 使 $f_i(b_i)=0$ ，则 $f_1f_2\cdots f_n$ 给出 $(b_1,\cdots,b_n)$ 满足的首一多项式。

$\rm{Ex.\ 5.7\ }$ 假设 $x^n+a_1x^{n-1}+\cdots+a_n=0$ ，诸 $a_i\in A$ 且 $x\in B$ ，则 $x(x^{n-1}+a_1x^{n-2}+\cdots)\in A$ 意味着 $x$ 或 $x^{n-1}+a_1x^{n-2}+\cdots$ 之一属于 $A$ ，如此归纳下去便知 $x\in A$ 。

$\rm{Ex.\ 5.8\ }$ (ii) 由分裂域相同构造可以找到扩环，使得 $f,g$ 分裂为线性因子，而这些根满足 $fg$ 从而在 $C$ 上整，因而 $f,g$ 的系数都在 $C$ 上整，但 $C$ 在 $B$ 中整闭，从而属于 $C$ 。

$\rm{Ex.\ 5.9\ }$ 假设 $f\in B[x]$ 在 $A[x]$ 上整，从而在 $C[x]$ 上整，也就是满足

$$f^m+g_{m-1}f^{m-1}+\cdots+g_0=0,\quad g_i\in A[x]$$

假设 $f=b_nx^n+b_{n-1}x^{n-1}+\cdots+b_0$ ，考虑最高次项系数知 $b_n$ 在 $A$ （或者 $C$ ）上整从而属于 $C$ ，$f$、$b_n$ 与 $x$ 皆在 $C[x]$ 上整，从而 $f-b_nx^n$ 在 $C[x]$ 上整，由此重复降次知 $f\in C[x]$ 。同样，由于 $x$ 和 $c_i$ 都在 $A[x]$ 上整，从而 $C[x]$ 中任何元素都在 $A[x]$ 上整。

另证：

$$f(f^{m-1}+g_{m-1}f^{m-2}+\cdots)=-g_0\in A[x]$$

按上一题结论有 $f\in C[x]$ 。

