---
title: Notes on Atiyah's Commutative Algebra 7
date: 2025-03-31T19:15:24.000Z
tags:
  - 代数
  - 交换代数
articleId: notes-on-atiyah-s-commutative-algebra-7
category: mathematics/algebraic-geometry/atiyah-macdonald
order: 9
---
$\mathrm{7.5.\ Theorem.\ }$ *(Remark) 诺特环 $A$ 的形式幂级数环是诺特环*

对 $A[[x]]$ 中理想 $I$ ，考虑理想 $I_k$ 定义为一切 $\omega\geqslant k$ 的幂级数第 $k$ 次项系数（$\omega$ 为最小系数非零次项次数），则 $I_n$ 构成 $A$ 中理想升链从而稳定为 $I_n$。因而对某个形式幂级数 $a_0+a_1x+\cdots$ ，（$<n$ 部分和基定理证明完全无异），取 $s_1,\cdots,s_k$ 使得它们第n次项系数生成 $I_n$，则会得到一系列（$a_{n+1}$ 在 $a_n$ 被消去后变成 $a_{n+1}'$）

$$\begin{aligned}a_n&=r_{n1} x^{i_1} s_1+\cdots +r_{nk} x^{i_k} s_k\\a_{n+1}'&=r_{(n+1)1}x^{i_1+1} s_1+\cdots +r_{(n+1)k}x^{i_k+1} s_k\\&\quad\vdots\end{aligned}$$

这涉及到无穷多次求和的操作，但注意到其中 $s_i$ 系数（对次数大于等于 $n$ 时）形如

$$r_ns_i+r_{n+1}xs_i+r_{n+2}x^2s_i+\cdots$$

可和，从而也是形式幂级数。$\square$

$\mathrm{Ex.\ 7.1}$ 显然 $\Sigma$ 可以Zorn取极大元 $\mathfrak{a}$。假设 $x,y\not\in \mathfrak{a}$ ，而 $xy\in \mathfrak{a}$ ，那么 $\mathfrak{a}+(x)$ 有限生成，也就是被 $a_1+c_1x,\cdots,a_n+c_nx$ 生成，这里 $a_i\in \mathfrak{a},c_i\in A$ ，特别地，每个 $a\in \mathfrak{a}$ 都可以被写成 $a=a_1r_1+\cdots+a_nr_n+cx$ 形式，从而设 $\mathfrak{a}_0=(a_1,\cdots,a_n)$ ，则 $\mathfrak{a}=\mathfrak{a}_0+x(\mathfrak{a}: x)$ 。而 $y\in (\mathfrak{a}: x)$ ，从而 $(\mathfrak{a}: x)$ 严格包含 $\mathfrak{a}$ ，因而有限生成，而 $\mathfrak{a}=\mathfrak{a}_0+x(\mathfrak{a}: x)$ 有限生成，矛盾。$\square$

$\mathrm{Ex.\ 7.2}$ 显然如果 $f=\sum_{i=0}^\infty a_ix^i$ 幂零则 $a_i$ 皆幂零。反过来，如果诸 $a_i$ 幂零，考虑理想 $\mathfrak{a}=(a_0,a_1,\cdots)$ ，假设 $\mathfrak{a}$ 被 $a_0,a_1,\cdots,a_n$ 生成，取 $a_i^{n_i}=0$ ，$0\leqslant i\leqslant n$ 和 $m=1+\sum (n_i-1)$ ，则 $f^m$ 中每项皆为 $\mathfrak{a}^m$ 中元素，而 $\mathfrak{a}^m$ 由 $\prod_{n=0}^{n} a_i^{k_i}$ 生成，其中 $\sum k_i=m$ ，因而 $\mathfrak{a}^m=0$ ，于是 $f^m=0$。$\square$

$\mathrm{Ex.\ 7.8}$ 如果 $A[x]$ 诺特，对 $A$ 中理想 $\mathfrak{a}$ ，考虑它在 $A[x]$ 中生成的理想，再取生成元组常数项系数即可证明有限生成。（或者考虑 $A$ 作为 $A[x]$ 的商环诺特）$\square$

$\mathrm{Ex.\ 7.10}$ 和基定理证明毫无区别。

$\mathrm{Ex.\ 7.14}$ 考虑 $k[t_1,\cdots,t_{n+1}]$ 中的理想 $I=(g_1,\cdots,g_m)+(1-ft_{n+1})$ ，其中 $g_1,\cdots,g_m$ 是 $\mathfrak{a}$ 的生成元，则如果它有公共零点 $x$，那么首先诸 $g_i$ 在 $x$ 处为 $0$ ，从而 $x\in V(\mathfrak{a})$ ， $f$ 在 $x$ 处为零，但这意味着 $1-t_{n+1}f$ 在 $x$ 处的取值是 $1$ ，矛盾。于是 $I$ 没有公共零点，由弱零点定理它是 $(1)$ 。特别地

$$g_1h_1+\cdots+g_mh_m+(1-ft_{n+1})h_{m+1}=1\quad h_i\in k[t_1,\cdots,t_{n+1}]$$

带入 $t_{n+1}=1/f$ ，把分母乘过去即知

$$f^n=\sum h_i(t_1,\cdots,t_n)g_i(t_1,\cdots,t_n)$$

即 $f\in \mathrm{rad}(\mathfrak{a})$ 。$\square$
