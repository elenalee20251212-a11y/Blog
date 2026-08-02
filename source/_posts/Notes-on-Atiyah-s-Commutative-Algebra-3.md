---
title: Notes on Atiyah's Commutative Algebra 3
date: 2024-12-27 11:24:05
tags: [代数, 交换代数]
tikzjax: true
---
$\mathrm{Prop.\ 3.11.}$ *(v) 局部化和取radical交换*

一方面显然 $S^{-1}r(\mathfrak{a})\subset r(S^{-1}\mathfrak{a})$ 。反过来，如果对 $a/s\in S^{-1}A$ ，$(x/s)^n\in r(S^{-1}\mathfrak{a})$ ，即 $x^n/s^n=a/s_1$ 对某个 $a\in \mathfrak{a}$ ，即 $s_2(s_1x^n-as^n)=0$ ，则可知 $s_2^ns_1^nx^n\in \mathfrak{a}$ ，于是 $x/s=s_2s_1x/ss_1s_2\in S^{-1}r(\mathfrak{a})$ 。$\square$

$\mathrm{Ex.\ 3.1.}$ 设 $u_i$ 为 $M$ 的生成元，取 $s_i$ 杀掉 $u_i$ ，诸 $s_i$ 乘积杀掉 $M$ 。

$\mathrm{Ex.\ 3.2.}$ 只需验证对 $y=x/(1+x')\in S^{-1}\mathfrak{a}$ ，任意 $1-y(a/s)$ 可逆，按理想吸收律只需验证 $1-y=(1+(x'-x))/(1+x')$ 总可逆，然而分子分母都是 $S$ 中元素，因而可逆。

已知 $\mathfrak{a}M=M$ ，需要证存在 $x\equiv 1\pmod {\mathfrak{a}}$ 使 $xM=0$ ，由 $\mathrm{Ex.\ 3.1}$ 相当于要证 $S^{-1}M=0$ 其中 $S=1+\mathfrak{a}$ ，而 $\mathfrak{a}M=M$ 意味着 $(S^{-1}\mathfrak{a})(S^{-1}M)=S^{-1}M$ ，又 $S^{-1}\mathfrak{a}$ 包含于 $S^{-1}A$ 的Jacobson根，所以 $S^{-1}M=0$ 。

$\mathrm{Ex.\ 3.3.}$ 考虑如下图表，实箭头都是局部化的自然映射，由于 $A\to (ST)^{-1}A$ 将 $S$ 打到可逆元，所以依局部化泛性质存在唯一 $S^{-1}A\to (ST)^{-1}A$ 使图表交换，类似地，$S^{-1}A\to (ST)^{-1}A$ 分解出 $\psi:U^{-1}(S^{-1}A)\to (ST)^{-1}A$ ，$A\to S^{-1}A\to U^{-1}(S^{-1}A)$ 分解出 $\phi:(ST)^{-1}A\to U^{-1}(S^{-1}A)$ 。显然这两个映射互逆，从而为同构。
```tikz
\usepackage{tikz-cd}
\begin{document}
\Large\begin{tikzcd}
	A \arrow[r, ""']  \arrow[d, ""']  & S^{-1}A  \arrow[d, ""'] \arrow[ld, dashed] \\
	(ST)^{-1}A \arrow[r, dashed, shift left=0.5ex] & U^{-1}(S^{-1}A)\arrow[l, dashed, shift left=0.5ex]
\end{tikzcd}
\end{document}
```

$\mathrm{Ex.\ 3.4.}$ 首先验证 $T^{-1}B$ 是 $S^{-1}A$-模，事实上 $(a/s)(b/t)=f(a)b/f(s)t$ 自然给出了数乘。现在考虑 $b/s\mapsto b/f(s)$ ，如果 $b_1/s_1=b_2/s_2$ ，考虑 $A$ 在 $B$ 上数乘定义即 $f(s)(f(s_1)b_1-f(s_2)b_2)=0$ ，于是即知良定义，线性和单满性立即可知。

$\mathrm{Ex.\ 3.5.}$ $x^n=0$ 可知 $(x/1)^n=0$ ，于是在 $A_{\mathfrak{p}}$ 中，$x/1=0$ ，即 $x$ 被某个 $A-\mathfrak{p}$ 中元素杀掉，但取 $\mathfrak{m}$ 为包含 $\operatorname{Ann}(x)$ 的极大理想，$x$ 需要被 $A-\mathfrak{m}$ 中元素杀掉，矛盾。

整环的情形则有反例。考虑 $A=\mathbb{Q}^2$ （环直积），则素理想是 $\mathbb{Q}\times 0$ 和 $0\times \mathbb{Q}$ ，然而关于任一的局部环都同构于 $\mathbb{Q}$ （比如说关于 $\mathfrak{p}=\mathbb{Q}\times 0$ ，$A_{\mathfrak{p}}$ 中被杀掉的元素只有 $\mathbb{Q}\times 0$ ，也就是自然同态 $A\to A_{\mathfrak{p}}$ 的 $\operatorname{Ker} $ ，因而 $A_{\mathfrak{p}}\cong \mathbb{Q}$ 是整环。

$\mathrm{Ex.\ 3.6.}$ 依Zorn引理存在极大的乘性子集 $S$ 。如果能证明 $A-S$ 是理想（从而是素理想），则自动是极小的素理想（每个素理想都包含极小的素理想，$\mathrm{Ex}.\ 1.8$ ）。事实上极大的条件相当于任意 $x\in A-S$ 都被某个 $s\in S$ 杀掉，从而立即可知 $A-S$ 是理想。

$\mathrm{Ex.\ 3.7.}$ (i)：如果 $\mathfrak{p}$ 是素理想，则 $S=A-\mathfrak{p}$ 依定义满足 $x,y\in S\Leftrightarrow xy\in S$ ，因此任意多素理想补集的交依然具有saturated性质。反过来，对 $x\not\in S$ ，考虑上一题中的 $0\in S$ 可以改成不交而不影响证明，于是知包含 $S$ 而不包含 $0$ 和某个 $x\not\in S$ 的全体极大乘性子集之交是 $S$ ，而这些极大乘性子集的补集都是素理想，从而得以将 $A-S$ 表为素理想的并。

(ii)：考虑到某个saturated乘性子集包含 $S$ ，当且仅当它是某些与 $S$ 不交的素理想之并的补集。对 $S=1+\mathfrak{a}$ ，考虑到 $\mathfrak{p}$ 与 $1+\mathfrak{a}$ 不交当且仅当 $\mathfrak{p}+\mathfrak{a}\ne(1)$ ，于是立即知 $\bar{S}=A\backslash\bigcup _{\mathfrak{m}\supset \mathfrak{a}}\mathfrak{m}$ ，也就是一切包含 $\mathfrak{a}$ 极大理想之并的补集。 

$\mathrm{Ex.\ 3.8.}$ (i)$\iff$(ii)：$\phi$ 是同构，把 $t/1$ 打到unit，因而 $t/1$ 是unit。反过来，如果 $t/1$ 总是unit，那么 $\phi$ 如果把 $a/s$ 打到 $0$ ，则 $a$ 被某个 $t$ 零化，从而 $a/s=0$ ，因此 $\phi$ 单；由于 $t^{-1}\in S^{-1}A$ ，所以 $\phi$ 满。
(ii)$\implies$(iii)：$(t/1)(a/s)=1/1$ 当且仅当 $s'(at-s)=0$ ，即 $t(as')=ss'\in S$ ，反过来如果 $xt-s=0$ ，则考虑 $1\in S$ 即可
(iii)$\implies$(iv)：定义
(iv)$\implies$(v)：显然。
(v)$\implies$(ii)：$t/1$ 在 $S^{-1}A$ 中不被包含于任何素理想，从而是可逆元。

$\mathrm{Ex.\ 3.9.}$ 如果 $x,y\in S_0$ ，那么 $(xy)a=0$ 则 $ya=0$ ，进而 $a=0$ ，故 $xy\in S_0$ ，从而 $S_0$ multiplicative，而saturated显然。要证极小素理想都是零因子，只需证极大乘性子集都包含 $S_0$ ，再应用 $\mathrm{Ex.\ 3.6}$  ，事实上乘性子集添进来 $S_0$ 不会致使它中出现 $0$ 。
(i)：显然。(ii)：$A$ 是 $S_0^{-1}A$ 的子环，因而 $A$ 中零因子在 $S_0^{-1}A$ 中仍是零因子，而非零因子则就是 $S_0$ 中元素，从而可逆。(iii)：关于全部可逆元局部化得到它自己。$\square$

$\mathrm{Ex.\ 3.16.}$ (i)$\implies$(ii)：$\text{Prop.}\ 3.16$
(ii)$\implies$(iii)：假设 $\mathfrak{m}=\mathfrak{q}^c$ ，$\mathfrak{q}\in \operatorname{Spec} (B)$ ，故 $\mathfrak{m}=\mathfrak{q}^{cec}=\mathfrak{m}^{ec}$ ，但 $(1)^c=(1)$ 
(iii)$\implies$(iv)：$M_B=M\otimes _AB$ ，由于 $B$ 平坦保持嵌入，所以只需要对 $x\ne 0$ ，证明 $Ax\otimes _AB\ne 0$ 即可，而 $Ax\cong A/\mathfrak{a}$ ，$\mathfrak{a}=\mathrm{Ann}(x)$ ，从而 $Ax\otimes _AB\cong B/\mathfrak{a}B$ ，假设 $\mathfrak{a}$ 包含于极大理想 $\mathfrak{m}$ ，则 $\mathfrak{a}B\subset m^e\ne(1)$ ，于是 $B/\mathfrak{a}B\ne 0$ 。

$\mathrm{Ex.\ 3.20.}$ (i) 显然。 (ii) 考虑到 $\mathfrak{a}\subset \mathfrak{a}^{ec}$ 所以 $\operatorname{Ker} f^*=0$ （或者说 $B$ 中素理想皆满足 $\mathfrak{q}^{ce}=\mathfrak{q}$ 从而 $f^*$ 有左逆是单射）。
反过来，如果 $f^*$ 但不能推出 $B$ 中的素理想皆为 $A$ 中素理想的扩张，比如说考虑 $A[x]/(x^2)$ ，其中素理想皆形如 $\mathfrak{p}+(\bar x)$ ，这里 $\mathfrak{p}$ 是 $A$ 中素理想，然而 $A$ 中真理想的扩张都不会包含 $\bar x$ 。

$\mathrm{Ex.\ 3.21.}$ (i) $\phi^*$ 是单射且连续，反过来由于 $S^{-1}A$ 素理想和 $A$ 中与 $S$ 不交之素理想的一一对应关系保序所以显然这是同胚。$A_f$ 是指 $A$ 关于 $f$ 生成的乘性子集局部化，那么和 $1,f,f^2,\cdots$ 不交的素理想就是不包含 $f$ 的素理想。 
(ii) 考虑到局部化使下图交换
```tikz
\usepackage{tikz-cd}
\begin{document}
\Large\begin{tikzcd}
		A \arrow[r, "f"] \ar[d, "\alpha"'] & B \arrow[d, "\beta"] \\
		S^{-1}A \arrow[r, "S^{-1}f"'] & S^{-1}B 
	\end{tikzcd}
\end{document}
``` 
而 $\operatorname{Spec} (S^{-1}A)$ 到 $\operatorname{Spec} (A)$ 和 $\operatorname{Spec} (S^{-1}B)$ 到 $B$ 的嵌入就是由沿 $\alpha$ 和 $\beta$ 的原像给出，那么立即可得 $(S^{-1}f)^*$ 为 $f^*$ 于 $\operatorname{Spec} (S^{-1}B)$ 上的限制。而一方面来说，$f^*(\mathfrak{q})\in S^{-1}X$ 也就是 $f^{-1}(\mathfrak{q})\cap S=\varnothing $ 意味着 $\mathfrak{q}\cap f(S)=\varnothing $ ，于是 $S^{-1}Y\supset f^{*-1}(S^{-1}X)$ ；反过来如果 $\mathfrak{q}\cap f(S)=\varnothing $ ，那么 $f^*(\mathfrak{q})\cap S=\varnothing $ 。
(iii) 考虑相同的交换图即可。
(iv) 

$\mathrm{Ex.\ 3.22.}$ 考虑到 $x$ 属于 $\mathfrak{p}$ 一切开邻域之交等价于 $\mathfrak{p}\in V(x)$ ，即 $x\subset \mathfrak{p}$ ，而 $A_{\mathfrak{p}}$ 中素理想和 $A$ 中包含于 $\mathfrak{p}$ 的素理想一一对应。