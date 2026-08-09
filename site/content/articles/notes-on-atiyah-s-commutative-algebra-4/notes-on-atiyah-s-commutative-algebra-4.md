---
title: Notes on Atiyah's Commutative Algebra 4
date: 2025-06-06T17:05:15.000Z
tags:
  - 数学
  - 代数
  - 交换代数
articleId: notes-on-atiyah-s-commutative-algebra-4
category: mathematics/algebraic-geometry/atiyah-macdonald
order: 5
---
$\rm{Ex.\ 4.1\ }$ 考虑准素分解 $\mathfrak{a}=\bigcap _{i=1}^{n}\mathfrak{q}_i$ ，$\operatorname{Spec} (A/\mathfrak{a})$ 即 $V(\mathfrak{a})$ ，而 $\mathrm{Ex.1.20}$ 中已经证明 $\operatorname{Spec} $ 的不可约分支就是极小素理想对应的 $V(\mathfrak{p})$ （其实无非Zariski拓扑定义），欲证之结论无非 $\operatorname{Prop.} 4.6$ 的重述。

$\rm{Ex.\ 4.2\ }$ $\mathfrak{a}=r(\mathfrak{a})$ 则 $\mathfrak{a}=\bigcap_{\mathfrak{p}\supset \mathfrak{a}} \mathfrak{p}$ 。

$\rm{Ex.\ 4.5\ }$ 考虑到 $$
\mathfrak{p}_1\mathfrak{p}_2=(x^2,xy,xz,yz)\\\mathfrak{p}_1\cap \mathfrak{m}^2=(x^2,y^2,xy,yz,xz)\\\mathfrak{p}_2\cap \mathfrak{m}^2=(x^2,z^2,xy,yz,xz)\\\mathfrak{p}_1\cap \mathfrak{p}_2=(x,yz)$$而$$\mathfrak{p}_1\cap (\mathfrak{p}_2\cap \mathfrak{m}^2)=(x^2,xy,xz,yz)=\mathfrak{a}$$即知这是一个reduced的极小准素分解，$\mathfrak{p}_1$ 与 $\mathfrak{p}_2$ isolated而 $\mathfrak{m}$ embedded。

$\rm{Ex.\ 4.6\ }$ 用Urysohn很容易证明如果 $\mathfrak{p}$ 是 $C(X)$ 中的素理想，则 $\mathfrak{p}$ 有唯一公共零点（也就是包含于唯一的极大理想 $\mathfrak{m}_x$ ，极大理想皆形如 $\mathfrak{m}_x$ （或者是公共零点存在）由compact保证，而 $\mathfrak{m}_x$ 与 $\mathfrak{m}_y$ 两两不同（也就是公共零点唯一）由Urysohn保证），从而任何 $C(X)$ 中准素理想有唯一公共零点。现在由于 $X$ 无穷，如果 $0$ 有准素分解，也就是可以写作有限多准素理想的交，$0=\bigcap_{i=1}^n \mathfrak{q}_i$，那么取一个不是任何 $\mathfrak{q}_i$ 公共零点的 $x$ ，每个 $\mathfrak{q}_i$ 中取 $f_i(x)\ne 0$ ，那么 $\prod f_i\in \bigcap \mathfrak{q}_i$ ，然而 $\prod f_i\ne 0$ 矛盾。

$\rm{Ex.\ 4.7\ }$ (i) 显然。
(ii) $A[x]/\mathfrak{p}[x]\cong A/\mathfrak{p}$ 是整环。 
(iii) 在 $A[x]/\mathfrak{q}[x]$ 中 $\bar f\bar g=0$ ，则如果 $\bar g$ 非零，按 $\mathrm{Ex.}1.2$ 第三问知存在 $\bar a$ 使得 $\bar a \bar f=0$ ，$a\not\in \mathfrak{q}$ ，于是按 $\mathfrak{q}$ 准素性 $f$ 的每个分量 $f_i$ 都有一个幂次属于 $\mathfrak{q}$ （也就是 $f_i\in \mathfrak{p}$ ），再由同一道题第二问知 $\bar f_i$ 接幂零推出 $\bar f$ 幂零，即得证 $\mathfrak{q}[x]$ 准素性。
(iv) 由 $\mathrm{Ex.}1.2$ 第二问，考虑 $A[x]/\mathfrak{q}[x]$ 知 $r(\mathfrak{q}_i[x])=\mathfrak{p}_i[x]$ 。
(v) 假设素理想 $\mathfrak{a}[x]\subset \mathfrak{q}\subset \mathfrak{p}[x]$ ，则 $\mathfrak{a}\subset \mathfrak{q}^c\subset \mathfrak{p}$ ，然而 $\mathfrak{p}$ 是 $\mathfrak{a}$ 的极小素理想，从而 $\mathfrak{q}^c=\mathfrak{p}$ ，但 $\mathfrak{p}^e=\mathfrak{p}[x]$ 。

$\rm{Ex.\ 4.8\ }$ $\mathfrak{p}_i$ 显然是素理想。假设 $fg\in \mathfrak{p}_i^k$ ，如果 $f,g$ 皆非零则必须都属于 $k[x_1,\cdots,x_i]$ （否则取 $f,g$ 中不只含 $x_1,\cdots,x_i$ 的项中字典序最大的两个乘积），从而由于 $fg\in \mathfrak{p}_i^k$ ，如果 $f,g$ 都不属于 $\mathfrak{p}_i^k$ ，也就是次数最小项次数小于 $k$ ，那么 $f,g$ 都必须常数项为零，也就是属于 $\mathfrak{p}_i$ ，因此 $\mathfrak{p}_i^k$ 准素。

$\rm{Ex.\ 4.9\ }$ 如果 $x$ 是零因子则显然 $x\in \cup D(A)$ ，反过来，假设对某个 $\mathfrak{p}\in D(A)$ 有 $x\in \mathfrak{p}$ ，在 $A/(0:a)$ 中考虑则只需证明极小素理想元素皆零因子，从而存在某个 $s\not\in (0:a)$ ，$as\ne 0$ 零化 $x$ 。如果 $\mathfrak{p}$ 是极小素理想，则 $\mathfrak{p}$ 在 $A_{\mathfrak{p}}$ 中的扩张正是 $r(0)$ （因为是唯一素理想），其中元素皆在 $A_{\mathfrak{p}}$ 中幂零，也就是对 $x\in \mathfrak{p}$ ，存在存在 $s\in A- \mathfrak{p}$ 使 $sx^n=0$ ，取极小的 $n$ 则 $x$ 被 $sx^{n-1}\ne 0$ 零化，从而是零因子。
在 $S^{-1}A$ 中，考虑到 $(0:x/s)=(0:x/1)=S^{-1}(0:x)$ 即可。
假若 $0$ 有准素分解，取 $\mathfrak{p}\in D(A)$ ，$\mathfrak{p}$ 是包含某个 $(0:a)$ 的极小素理想，$(0)=\bigcap_{i=1}^n \mathfrak{q}_i $ ，则 $r(0:a)=\bigcap_{i=1}^n r(\mathfrak{q}_i:a)=\bigcap _{a\not\in \mathfrak{p}_j} \mathfrak{q}_j\subset \mathfrak{p}$ ，于是由 $1.11$ 知 $(0:a)\subset \mathfrak{p}_j\subset \mathfrak{p}$ ，由极小性 $\mathfrak{p}=\mathfrak{p}_j$ 。

$\rm{Ex.\ 4.10\ }$ (i) $S_{\mathfrak{p}}(0)$ 中元素被 $A-\mathfrak{p}$ 中元素零化，按素理想定义一定属于 $\mathfrak{p}$ 。
(ii) $\impliedby$: 如果 $\mathfrak{p}$ 是极小素理想，则 $\mathfrak{p}$ 在 $A_{\mathfrak{p}}$ 中的扩张正是 $r(0)$ （因为是唯一素理想），其中元素皆在 $A_{\mathfrak{p}}$ 中幂零，也就是对 $x\in \mathfrak{p}$ ，存在存在 $s\in A- \mathfrak{p}$ 使 $sx^n=0$ ，由是 $x^n\in S_{\mathfrak{p}}(0)$ 。$\implies$: 如果 $r(S_{\mathfrak{p}}(0))=\mathfrak{p}$ ，则任意 $\mathfrak{p}$ 中元素在 $A_{\mathfrak{p}}$ 中的像幂零，于是知 $A_{\mathfrak{p}}$ 中 $\mathfrak{p}$ 是nilradical从而是唯一素理想，因此 $\mathfrak{p}$ 为 $A$ 的极小素理想。
(iii) $x\in S_{\mathfrak{p}}(0)$ 意味着 $x$ 被某个 $A-\mathfrak{p}\subset A-\mathfrak{p}'$ 中元素零化，从而 $x\in S_{\mathfrak{p}'}(0)$ 。
(iv) 如果 $x\ne 0$ ，考虑包含 $(0:x)$ 的极小素理想 $\mathfrak{p}$ ，$A-\mathfrak{p}$ 中元素均不零化 $x$ ，从而 $x\not\in S_{\mathfrak{p}}(0)$ 。

$\rm{Ex.\ 4.12\ }$ 