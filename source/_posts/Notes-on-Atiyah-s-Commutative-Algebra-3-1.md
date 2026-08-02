---
title: Notes on Atiyah's Commutative Algebra 6
date: 2025-02-19 21:49:23
tags: [数学, 代数, 交换代数]
---
$\rm{Ex.\ 6.1\ }$ (i)：若 $u$ 非单射，则 $\operatorname{Ker} (u)\subset \operatorname{Ker} (u^2)\subset \cdots$ 是无穷严格升链，矛盾。 (ii)：$u$ 若非满射，则 $\operatorname{Im} (u)$ 真包含于 $M$ ，而由 $u$ 单性 $\operatorname{Im} (u^2)$ 真包含于 $\operatorname{Im} (u)$ ，以此类推得到无穷包含降链，矛盾。

$\rm{Ex.\ 6.2\ }$ 改成有限生成对升链条件相关证明并无影响。

$\rm{Ex.\ 6.3\ }$ 考虑 $M\to M/N_1\times M/N_2$ ，诱导出 $M/(N_1\cap N_2)$ 到 $M/N_1\times M/N_2$ 的嵌入，而诺特模的直和诺特。

$\rm{Ex.\ 6.4\ }$ 注意到作为 $A/\mathfrak{a}$ 模，取 $M$ 的生成元组，则 $A/\mathrm{Ann}(x_i)\cong Ax_i$ 是诺特模的子模从而诺特，而 $\mathfrak{a}=\cap \mathrm{Ann}(x_i)$ ，由上一题结论知 $A/\mathfrak{a}$ 诺特。

对Artin环情形此结论不成立，本章开头例子里(3)中Artin非诺特环就是反例。显然 $\mathrm{Ann}(G)=(0)$ ，而 $\mathbb{Z}/(0)$ 非Artin。

$\rm{Ex.\ 6.5\ }$ $X$ 子空间诺特无非relative topology的定义，而拟紧则是考虑包含升链即可。

$\rm{Ex.\ 6.7\ }$ 不可被表为不可约闭集有限并的 $X$ 闭子集组成的集合有极小元，但它要么自己就是不可约闭集，要么可被表示为两个真子闭集的并。

$\rm{Ex.\ 6.8\ }$ $V(\mathfrak{a})$ 的降链条件由 $\sqrt{\mathfrak{a}}$ 的升链条件给出。反过来 $\operatorname{Spec} (A)$ 诺特并不意味着 $A$ 诺特，譬如说 $k[x_1,x_2,\cdots]/(x_1^2,x_2^2,\cdots)$ ，它的素谱是单点。

$\rm{Ex.\ 6.9\ }$ 全体极小素理想组成集合 $X$ 拟紧，而极小素理想间互不包含，则极小素理想多于一个时对应的基本开集 $U_\mathfrak{p}$ 并覆盖 $X$ ，可以取出有限覆盖意味着极小素理想有限。