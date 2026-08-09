---
title: Notes on Etingof's Representation Theory 3
date: 2026-05-14T13:27:59.000Z
tags: null
articleId: notes-on-etingof-s-representation-theory-3
category: mathematics/algebra/etingof-representation-theory
order: 3
---
$\mathrm{Prob.}\ 5.1.2.$  将 $V$ 视作 $\mathbb{R}[G]$-模, 将 $i$ 在 $V$ 上的线性变换记作 $J$ , 那么对复化 $V_{\mathbb{C}} = V \otimes_{\mathbb{R}} \mathbb{C}$ , $J\otimes 1$ 是 $\mathbb{C}$-线性变换. 同时由于 $J^2=-1$ , $V_{\mathbb{C}}$ 分解为 $J\otimes 1$ 特征值 $\pm i$ 分别对应的子空间 $W^+, W^-$ 的直和, 具体来说 $v \otimes 1 - J(v) \otimes i$ 和 $v\otimes 1+J(v)\otimes i$ 分别是其特征值为 $i,-i$ 的向量, $v$ 打到这两者分别给出 $W^+\cong V$ 和 $W^-\cong \overline{V}$ 同构. 而共轭表示 $\overline{V}$ 与 $V^*$ 的同构 ( 4.6节 ). 而$$\dim_{\mathbb{R}} (\text{End}_{\mathbb{R}[G]} V) = \dim_{\mathbb{C}} (\text{End}_{\mathbb{C}[G]} V_{\mathbb{C}})$$且$$\text{End}_{\mathbb{C}[G]} V_{\mathbb{C}}=\text{Hom}_G(V \oplus V^*, V \oplus V^*)$$因此若 $V^*$ 与 $V$ 不同构, 则 $\dim_{\mathbb{R}} (\text{End}_{\mathbb{R}[G]} V)=2$ , 而复数数乘都在 $\text{End}_{\mathbb{R}[G]} V$ 中, 它包含 $\mathbb{C}$ 从而就是 $\mathbb{C}$ . 

对另外两种情形都有 $\dim_{\mathbb{R}} (\text{End}_{\mathbb{R}[G]} V)=4$ . 此时存在一个非退化的 $G$-不变双线性形式 $B$ , 由于非退化所以存在唯一的 $j$ , 使得 $B(v,w)=(v,jw)$ , $(,)$ 是 $V$ 带有的非退化Hermite型. 由于 $(v,(jiw))=iB(v,w)=(v,-ijw)$ , 所以 $ji=-ij$ . 此外, $(v,jgw)=(v,gjw)$ , 因此对任意 $g\in G$ 都有 $gj=jg$ , 且 $j^2$ 与 $i$ 交换为复线性, 从而由Schur引理 $j^2=λ\cdot \mathrm{id}$ . 而 $(v,j^2w)=B(v,jw)=\varepsilon B(jw,v)=\varepsilon |\lambda|^2(v,w)$ . 通过给 $B$ 乘以适当常数, 使得real type时 $j^2=1$ 且quaternionic type时 $j^2=-1$ . 现在 $\text{End}_{\mathbb{R}[G]} V$ 是由 $1,J,j$ 生成的四维 $\mathbb{R}$-代数, 满足 $J^2=-1$ , $jJ=-Jj$ 且 $j^2=\varepsilon$ . 在 $\varepsilon=1$ 时, 注意到它由$$ J \mapsto \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \quad j \mapsto \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} $$同构于 $M_2(\mathbb{R})$ . 在 $\varepsilon=-1$ 时, 它自然的同构于四元数 $\mathbb{H}$ .