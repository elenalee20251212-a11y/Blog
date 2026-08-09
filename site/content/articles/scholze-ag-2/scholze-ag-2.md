---
title: "scholze-ag-2"
date: 2026-08-03
articleId: scholze-ag-2
category: miscellaneous/inbox/unclassified
---

# 12 向量丛与Picard群 (Vector Bundles and the Picard Group)

**注 12.1**：设 $X$ 是一个环化空间。类似于 $\mathcal{O}_X$-模，我们可以定义 $\mathcal{O}_X$-代数。即：作为交换环层 $\mathcal{A}$ 且其带有 $\mathcal{O}_X$-模结构；或者等价地，其带有环层态射 $\mathcal{O}_X \to \mathcal{A}$ 的结构。

**定义 12.2**：设 $\mathcal{M}$ 和 $\mathcal{N}$ 是 $\mathcal{O}_X$-模，我们将它们的张量积 $\mathcal{M} \otimes_{\mathcal{O}_X} \mathcal{N}$ 定义为$$U \longmapsto \mathcal{M}(U) \otimes_{\mathcal{O}_X(U)} \mathcal{N}(U)$$的层化. 
 
若 $\mathcal{M} = \mathcal{A}$ 是 $\mathcal{O}_X$-代数，则张量积 $\mathcal{A} \otimes_{\mathcal{O}_X} \mathcal{N}$ 是 $\mathcal{A}$-模；若 $\mathcal{N}$ 也是 $\mathcal{O}_X$-代数，则该张量积也是一个 $\mathcal{O}_X$-代数。
特别地，若 $X = \operatorname{Spec} A$，且 $\mathcal{M} = \widetilde{M}$，$\mathcal{N} = \widetilde{N}$ 是拟凝聚 $\mathcal{O}_X$-模，那么 $\mathcal{M} \otimes_{\mathcal{O}_X} \mathcal{N} = \widetilde{M \otimes_A N}$。实际上，对于 $V = D(f) \subseteq X$（其中 $f \in A$），有：
$$
\mathcal{M}(D(f)) \otimes_{\mathcal{O}_X(D(f))} \mathcal{N}(D(f)) = M[f^{-1}] \otimes_{A[f^{-1}]} N[f^{-1}] = (M \otimes_A N)[f^{-1}] = \widetilde{M \otimes_A N}(D(f))
$$
在这种情况中，此预层本身就是层，因而不需要层化。

**推论 12.3**：
若 $X$ 是一个方案，$\mathcal{M}$ 和 $\mathcal{N}$ 是拟凝聚层，则 $\mathcal{M} \otimes_{\mathcal{O}_X} \mathcal{N}$ 也是拟凝聚层。

**证明**：我们可以在局部仿射开集上进行验证，由上述讨论即得。 $\square$

**定义 12.4**：设 $(f, f^\sharp) : (Y, \mathcal{O}_Y) \to (X, \mathcal{O}_X)$ 是环化空间之间的映射。
1. 若 $\mathcal{N}$ 是 $\mathcal{O}_Y$-模，则前推层 $f_*\mathcal{N}$ 带有如下结构态射，使其成为 $\mathcal{O}_X$-模：
```tikz {embedFontCss=true}
\begin{tikzcd}
\mathcal{O}_X \times f_*\mathcal{N} \arrow[r, "f^\sharp \times \operatorname{id}_{f_*\mathcal{N}}"] & f_*\mathcal{O}_Y \times f_*\mathcal{N} \arrow[r, equal] & f_*(\mathcal{O}_Y \times \mathcal{N}) \arrow[r, "f_*(-)"] & f_*\mathcal{N}
\end{tikzcd}
```
2. 若 $\mathcal{M}$ 是 $\mathcal{O}_X$-模，则 $f^{-1}\mathcal{M}$ 是一个通过如下映射定义的 $f^{-1}\mathcal{O}_X$-模层：
   $$
   f^{-1}\mathcal{O}_X \times f^{-1}\mathcal{M} = f^{-1}(\mathcal{O}_X \times \mathcal{M}) \longrightarrow f^{-1}(\mathcal{M})
   $$
   现将拉回层（pullback） $f^*\mathcal{M}$ 定义为如下 $\mathcal{O}_Y$-模：
   $$
   f^*\mathcal{M} = f^{-1}\mathcal{M} \otimes_{f^{-1}\mathcal{O}_X} \mathcal{O}_Y
   $$

**命题 12.5**：
存在一对伴随，其中左伴随为 $f^*$，右伴随为 $f_*$。即对每一个 $\mathcal{O}_X$-模 $\mathcal{M}$ 和每一个 $\mathcal{O}_Y$-模 $\mathcal{N}$，存在如下自然等同：
$$
\operatorname{Hom}_{\mathcal{O}_Y}(f^*\mathcal{M}, \mathcal{N}) \cong \operatorname{Hom}_{\mathcal{O}_X}(\mathcal{M}, f_*\mathcal{N})
$$
**证明简述**：
    我们已具备如下伴随：
    $$
    \operatorname{Hom}(f^{-1}\mathcal{M}, \mathcal{N}) \cong \operatorname{Hom}(\mathcal{M}, f_*\mathcal{N}) \supseteq \operatorname{Hom}_{\mathcal{O}_X}(\mathcal{M}, f_*\mathcal{N})
    $$
    右侧子集对应于 $\mathcal{O}_X$-线性映射 $\mathcal{M} \to f_*\mathcal{N}$。在左侧对应的子集为 $f^{-1}\mathcal{O}_X$-线性映射 $f^{-1}\mathcal{M} \to \mathcal{N}$，即 $\operatorname{Hom}_{f^{-1}\mathcal{O}_X}(f^{-1}\mathcal{M}, \mathcal{N})$。因此我们有伴随：
    $$
    \operatorname{Hom}_{f^{-1}\mathcal{O}_X}(f^{-1}\mathcal{M}, \mathcal{N}) \cong \operatorname{Hom}_{\mathcal{O}_X}(\mathcal{M}, f_*\mathcal{N})
    $$
    接着，利用换环同构（change of rings isomorphism）转换左侧：
    $$
    \operatorname{Hom}_{f^{-1}\mathcal{O}_X}(f^{-1}\mathcal{M}, \mathcal{N}) \cong \operatorname{Hom}_{\mathcal{O}_Y}(f^{-1}\mathcal{M} \otimes_{f^{-1}\mathcal{O}_X} \mathcal{O}_Y, \mathcal{N}) \cong \operatorname{Hom}_{\mathcal{O}_Y}(f^*\mathcal{M}, \mathcal{N})
    $$
    证毕。 $\square$

**命题 12.6**：
1. 设 $f : Y \to X$ 是方案之间的任意映射，且 $\mathcal{M}$ 是拟凝聚 $\mathcal{O}_X$-模，则 $f^*\mathcal{M}$ 是拟凝聚 $\mathcal{O}_Y$-模。
2. 若 $Y = \operatorname{Spec} B$ 且 $X = \operatorname{Spec} A$，则 $\mathcal{M} \cong \widetilde{M}$（对某个 $A$-模 $M$），且 $f^*\mathcal{M} \cong \widetilde{M \otimes_A B}$。
**证明**：
    对于第 1 部分，可以用仿射开集 $V = \operatorname{Spec} B \subseteq Y$ 覆盖 $Y$，使其映射到仿射开集 $U = \operatorname{Spec} A \subseteq X$ 内。令 $g : V \to U$ 为 $f$ 在 $V$ 上的限制，那么有 $(f^*\mathcal{M})|_V = g^*(\mathcal{M}|_V)$。要验证 $f^*\mathcal{M}$ 的拟凝聚性，只需验证 $g^*(\mathcal{M}|_V)$ 的拟凝聚性即可。这说明我们可以将 $Y$ 用 $\operatorname{Spec} B$ 代替，且将 $X$ 用 $\operatorname{Spec} A$ 代替。因此只需证明第 2 部分。在此情况下 $\mathcal{M} = \widetilde{M}$，并且对所有 $\mathcal{O}_Y$-模 $\mathcal{N}$，我们有如下一连串同构：
    $$
    \begin{aligned}
    \operatorname{Hom}_{\mathcal{O}_Y}(f^*\mathcal{M}, \mathcal{N}) &\cong \operatorname{Hom}_{\mathcal{O}_X}(\mathcal{M}, f_*\mathcal{N}) \\
    &\cong \operatorname{Hom}_A(M, f_*\mathcal{N}(X)) \\
    &= \operatorname{Hom}_A(M, \mathcal{N}(Y)) \\
    &\cong \operatorname{Hom}_B(M \otimes_A B, \mathcal{N}(Y)) \\
    &\cong \operatorname{Hom}_{\mathcal{O}_Y}(\widetilde{M \otimes_A B}, \mathcal{N})
    \end{aligned}
    $$
    由 Yoneda 引理可得 $f^*\mathcal{M} \cong \widetilde{M \otimes_A B}$。证毕。 $\square$

**例子 12.7**：
定理 10.7 中对于所有环 $R$ 的 $\mathbb{P}^n_{\mathbb{Z}}(R)$ 刻画可推广到任意方案上。

**定义 12.8**：
若 $X$ 是一个方案，则一个可逆 $\mathcal{O}_X$-模 $\mathcal{L}$ 是一个拟凝聚 $\mathcal{O}_X$-模，满足存在一个拟凝聚 $\mathcal{O}_X$-模 $\mathcal{N}$ 使得 $\mathcal{L} \otimes_{\mathcal{O}_X} \mathcal{N} \cong \mathcal{O}_X$。

**注 12.9**：
1. 若 $X = \operatorname{Spec} A$，则 $\mathcal{L} \cong \widetilde{L}$ 对某个 $A$-模 $L$ 成立，且 $\mathcal{L}$ 是可逆的当且仅当 $L$ 是可逆的。
2. 我们完全可以不使用上述定义中的“拟凝聚”一词进行定义，此情况下 $\mathcal{L}$ 依然是一个拟凝聚层。对此事实的证明简述为：证明任何这样的可逆 $\mathcal{O}_X$-模在 $X$ 上局部上均为 $\mathcal{O}_X^n$（对某个 $n$）的直接加项，这与 $A$-模的情况完全类似。

**推论 12.10**：
对于任何方案 $X$，有：
$$
\mathbb{P}^n_{\mathbb{Z}}(X) \cong \{\mathcal{O}_X^{n+1} \twoheadrightarrow \mathcal{L} \mid \text{满射，其中 } \mathcal{L} \text{ 为可逆 } \mathcal{O}_X\text{-模}\} /\sim
$$
**证明**：
    给定开子集 $U \subseteq X$，我们定义两个预层：$U \mapsto \mathbb{P}^n(U)$ 以及 $U \mapsto \{\mathcal{O}_U^{n+1} \to \mathcal{L}\}/\sim$。这两个层在一个仿射开覆盖上相一致，因而它们必然相等。实际上，它们之间存在一个天然的态射，当其在仿射开集上评估时是一个同构。证毕。 $\square$
    特别是，若 $X = \mathbb{P}^n_{\mathbb{Z}}$，我们有 $\operatorname{id} \in \mathbb{P}^n_{\mathbb{Z}}(\mathbb{P}^n_{\mathbb{Z}})$，并且获得了一个自然的（“重言”）满射 $\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}^{n+1} \twoheadrightarrow \mathcal{L}$，其中 $\mathcal{L}$ 是一个可逆的 $\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}$-模。

**定义 12.11**：
我们定义 $\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}(1) := \mathcal{L}$。对于 $m \ge 1$，有 $\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}(m) := \mathcal{L}^{\otimes m}$；对于 $m < 0$，有：
$$
\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}(m) := \mathcal{H}om_{\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}}(\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}(-m), \mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}})
$$

**定义 12.12**：
对于任何方案 $X$，定义 $X$ 的 Picard 群为：
$$
\operatorname{Pic}(X) = \{\text{可逆 } \mathcal{O}_X\text{-模}\} /\cong
$$
这是一个阿贝尔群，因为如果 $\mathcal{L}$ 和 $\mathcal{L}'$ 是可逆 $\mathcal{O}_X$-模，则 $\mathcal{L} \otimes_{\mathcal{O}_X} \mathcal{L}'$ 也是可逆的，且由于 $\mathcal{L}$ 是可逆的，每一个 $\mathcal{L}$ 都有一个逆。由于张量积在同构意义下满足交换律，该群是阿贝尔群。

**定理 12.13**：
对于任意域 $k$，我们可以通过发送 $m \mapsto \mathcal{O}_{\mathbb{P}^n_k}(m)$ 来计算：$\mathbb{Z} \cong \operatorname{Pic}(\mathbb{P}^n_k)$。

**定义 12.14**：
给定一个环 $R$，我们定义 $\mathbb{P}^n_R$ 如下：
$$
\mathbb{P}^n_R = \mathbb{P}^n_{\mathbb{Z}} \times_{\operatorname{Spec} \mathbb{Z}} \operatorname{Spec} R
$$
通常可逆 $\mathcal{O}_X$-模常被直接称为线丛（Geradenbündel）。

**定理 12.15**：
设 $X$ 是一个方案，$\mathcal{L}$ 是可逆 $\mathcal{O}_X$-模，则 $\mathcal{L}$ 在所有 $X$ 之上的方案 $f : Y \to X$ 上定义了一个函子 $\mathbb{V}(\mathcal{L})$：
$$
\mathbb{V}(\mathcal{L})(Y) := (f^*\mathcal{L})(Y) = \Gamma(Y, f^*\mathcal{L})
$$
此函子可由一个在 $X$ 之上同样记作 $\mathbb{V}(\mathcal{L})$ 的方案表示，使得存在 $X$ 的一个覆盖 $X = \bigcup_i U_i$，满足：
$$
\mathbb{V}(\mathcal{L}) \times_X U_i = \mathbb{V}(\mathcal{L})|_{U_i} \cong U_i \times \mathbb{A}^1
$$
方案 $\mathbb{V}(\mathcal{L})$ 可以看作一个线丛。

**证明**：
    利用一般的粘合引理，只需在 $X$ 局部上证明该结果即可。假设 $X = \operatorname{Spec} A$，使得 $\mathcal{L} = \widetilde{L}$，那么 $L$ 在 $\operatorname{Spec} A$ 上局部自由且秩为 1。在此情况下，我们假定 $L = A$，从而有：
    $$
    \mathbb{V}(\mathcal{L})(Y) = f^*\mathcal{L}(Y) = f^*(\mathcal{O}_X)(Y) \cong \mathcal{O}_Y(Y) \cong \operatorname{Hom}_{\text{Ring}}(\mathbb{Z}[T], \mathcal{O}_Y(Y))
    $$
    我们随后利用纤维积的普遍性质得到：
    $$
    \mathbb{V}(\mathcal{L})(Y) = \operatorname{Hom}_{\text{Ring}}(\mathbb{Z}[T], \mathcal{O}_Y(Y)) \cong \operatorname{Hom}_{\text{Sch}}(Y, \mathbb{A}^1) \cong \operatorname{Hom}_{\text{Sch}/X}(Y, \mathbb{A}^1 \times X)
    $$
    以此，我们能看到 $\mathbb{V}(\mathcal{L})$ 局部上由 $X \times \mathbb{A}^1$ 表示。证毕。 $\square$

**定义 12.16**：
给定一个方案 $X$，则一个向量丛（vector bundle） $\xi$ 是一个局部自由且秩有限的 $\mathcal{O}_X$-模层，即存在一个覆盖 $X = \bigcup_i U_i$，在每个 $U_i$ 上有：
$$
\xi|_{U_i} \cong \mathcal{O}_{U_i}^{n_i}
$$
其中 $n_i \ge 0$。需要注意，$n_i$ 并不需要对所有 $i$ 都恒定。如果对所有 $i$ 都有 $n_i = n$，则称 $\xi$ 为秩为 $n$ 的向量丛。

**注 12.17**：
如果 $\xi$ 是一个向量丛，那么它实际上是一个拟凝聚层。如果一个向量丛的秩为 1，那么它就是一个线丛，且恰好是一个可逆 $\mathcal{O}_X$-模。

**命题 12.18**：
设 $\xi$ 是 $X$ 上的一个向量丛，则 $\mathbb{V}(\xi)(Y) = (f^*\xi)(Y)$ 可以由一个在 $X$ 之上的方案 $\mathbb{V}(\xi)$ 表示。且存在覆盖 $X = \bigcup_i U_i$，使得有 $\mathbb{V}(\xi)|_{U_i} \cong U_i \times \mathbb{A}^{n_i}$。

**证明**：
    此证明与定理 12.15 相同，需要用到：
    $$
    \mathcal{O}_Y(Y)^{n_i} \cong \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}[T_1, \dots, T_{n_i}], \mathcal{O}_Y(Y))
    $$
    证毕。 $\square$

**定义 12.19**：
一个拟凝聚 $\mathcal{O}_X$-模层 $\mathcal{M}$ 被称为有限型的（of finite type），如果存在一个开覆盖 $X = \bigcup_i U_i$，其中 $U_i = \operatorname{Spec} A_i$，使得 $\mathcal{M}(U_i)$ 是一个有限生成 $A_i$-模。
显然，任何向量丛都是有限型的。

**命题 12.20**：
若 $X = \operatorname{Spec} A$ 且 $\mathcal{M} = \widetilde{M}$，则 $\mathcal{M}$ 是有限型的当且仅当 $M$ 是有限生成的。

**证明**：
    若 $M$ 有限生成，则 $\mathcal{M}$ 显然是有限型的。反过来，设 $X = \bigcup_i D(f_i)$ 为某个由有限个 $f_i \in A$ 组成的主开集覆盖。作为 $A[f_i^{-1}]$-模，其截面 $\mathcal{M}(D(f_i)) = M[f_i^{-1}]$ 是有限生成的。对每个 $i$，我们选择一组有限的生成元 $m_{ij}/f_i^{n_j}$（其中 $m_{ij} \in M$ 且 $n_j \ge 0$），由于 $i$ 只有有限个，这一套所有的 $m_{ij}$ 的集合必然是有限的。我们声称，这些 $m_{ij}$ 生成了 $M$。因为由这些 $m_{ij}$ 导出的映射 $A^N \to M$（其中 $N$ 是所有 $i$ 和 $j$ 的总和）在局部化每个 $f_i$ 之后是满射，进而 $A^N \to M$ 本身是满射。因此 $M$ 是有限生成的。证毕。 $\square$

