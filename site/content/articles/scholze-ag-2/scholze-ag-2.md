---
title: "scholze-ag-2"
date: 2026-08-03
articleId: scholze-ag-2
category: miscellaneous/inbox/unclassified
---


# 13 有限性条件与维度 (Finiteness Conditions and Dimension)

**定义 13.1**：
设 $X$ 是一个方案，$\mathcal{M}$ 是一个拟凝聚层，若 $\mathcal{M}$ 由其全局截面生成，则称它是全局生成的（globally generated）。也就是说，若存在一组全局截面 $s_i \in \mathcal{M}(X)$（其中 $i \in I$ 是某个下标集），使得映射：
$$
\bigoplus_{i \in I} \mathcal{O}_X \longrightarrow \mathcal{M}
$$
（它发送 $e_i \mapsto s_i$）是一个满射。

**定义 13.2**：
对于 $\mathbb{P}^n_R$ 上的任意拟凝聚层 $\mathcal{M}$，我们定义 $\mathcal{M}(m) := \mathcal{M} \otimes_{\mathcal{O}_{\mathbb{P}^n_R}} \mathcal{O}(m)$（对任意 $m \in \mathbb{Z}$）。

**定义 13.3**：
一个方案 $X$ 被称为诺特的（noetherian），如果它有一个有限仿射开覆盖 $U_i = \operatorname{Spec} A_i$，其中每个 $A_i$ 都是诺特环。
需要注意，该覆盖必须是**有限的**。

**命题 13.4**：
以下关于方案 $X$ 的条件是等价的：
1. $X$ 是一个诺特方案。
2. $X$ 是拟紧的，且对于所有的仿射开子集 $U = \operatorname{Spec} A \subseteq X$，环 $A$ 是诺特环。
*   **证明**：
    $2 \implies 1$ 显然。现假定 $X$ 是诺特的，那么 $X$ 具有一个由拟紧开集组成的有限覆盖，所以 $X$ 本身是拟紧的。让我们将这一有限仿射开覆盖写成 $X = \bigcup_i U_i$（其中 $U_i = \operatorname{Spec} A_i$ 且 $A_i$ 诺特）。我们要证明，任意候选的仿射开集 $U = \operatorname{Spec} A \subseteq X$ 是诺特的。由于它本身是仿射方案，因而它是拟紧的，因此有：
    $$
    U \cap U_i = \bigcup_{j \in J_i} D_{U_i}(f_{ij}), \quad f_{ij} \in A_i
    $$
    因为 $D_{U_i}(f_{ij}) = \operatorname{Spec} A_i[f_{ij}^{-1}]$ 且我们已知 $A_i$ 是诺特环，而任何局部化也是诺特的。因此 $U$ 可以被一些诺特的仿射开集覆盖，由于其拟紧性，只需要有限个这样的开集即可。所以 $U = \operatorname{Spec} A$ 是一个诺特方案。因此我们可以假定 $X = U = \operatorname{Spec} A$。利用类似的论证，我们可以假定 $U_i = D(f_i)$（对某个 $f_i \in A$）。我们需要证明，如果 $A$ 是一个环，且其覆盖 $X = \operatorname{Spec} A = \bigcup_i D(f_i)$ 满足每一个 $A[f_i^{-1}]$ 均为诺特环，则 $A$ 也是诺特环。设 $I \subseteq A$ 是 $A$ 中的一个理想，则 $I = \widetilde{I} \subseteq \mathcal{O}_X = \widetilde{A}$ 是 $\operatorname{Spec} A$ 上的拟凝聚层。并且 $I$ 是有限型的，因为每一个 $I(D(f_i)) = I[f_i^{-1}]$ 都是有限生成的 $A[f_i^{-1}]$-模。命题 12.20 此时说明 $I$ 也是有限生成的。从而 $A$ 是诺特环。证毕。 $\square$

**定义 13.5**：
设 $T$ 是一个拓扑空间，则当且仅当 $T$ 中每一个递减的闭子集序列最终都稳定时，称 $T$ 是诺特的。

**备注 13.6**：
若 $T$ 是诺特空间，则 $T$ 是拟紧的。
（证明：若存在开覆盖 $T = \bigcup_i U_i$ 没有有限子覆盖，则我们可以挑选出一个点序列 $(x_j)_j \in T$，满足对于所有的 $j$，有 $x_j \notin \bigcup_{j' < j} U_{j'}$，但是 $x_j \in U_j$。在这种情况下我们令 $Zj = T - \bigcup_{j' < j} U_{j'}$，那么就会得到一个严格单调递减的闭子集链：$T \supsetneq Z_0 \supsetneq Z_1 \supsetneq \cdots$。由于 $T$ 是诺特的，该链必然稳定，这意味着开覆盖只能由有限个元素索引。）

**备注 13.7**：
若 $T$ 是诺特空间，则它的任何开子集 $U \subseteq T$ 也是诺特空间。
如果我们有 $U$ 中套叠的闭子集链 $Zi$，我们只需要考虑 $Z'_i = Z_i \cup (T - U)$，该序列在 $T$ 中是闭的且是一系列套叠的子集。特别是， $T$ 的任何开子集也都是拟紧的。
实际上，诺特空间 $X$ 的任何子空间 $A$ 都是诺特的，因为其内部闭子集 $Z_i \subseteq A$ 对应于 $X$ 内部的闭子集 $\overline{Z_i} \subseteq X$，根据假设，其在 $X$ 中必然稳定。

**备注 13.8**：
若 $T$ 是诺特空间，这也说明了 $T$ 是拟分离的。给定两个拟紧开子集 $U_1, U_2 \subseteq T$，它们的交集 $U_1 \cap U_2$ 在 $T$ 中是开集，因而也是拟紧的。特别是，任何诺特空间 $T$ 既是拟紧的，也是拟分离的。

**命题 13.9**：
设 $X$ 是一个诺特方案，则它的拓扑空间 $|X|$ 是诺特空间。
*   **证明**：
    设 $X = \bigcup_i U_i$ 是一个由诺特仿射开集 $U_i = \operatorname{Spec} A_i$ 组成的有限覆盖。设：
    $$
    |X| \supseteq Z_0 \supseteq Z_1 \supseteq \cdots
    $$
    是一串递减的闭子集链。因为覆盖是有限的，只需对所有的 $i$ 验证：
    $$
    U_i \supseteq U_i \cap Z_0 \supseteq U_i \cap Z_1 \supseteq \cdots
    $$
    由此，我们不妨假设 $X = \operatorname{Spec} A$，其中 $A$ 是一个诺特环。此时我们有 $Z_i = V(I_i)$，其中 $I_i \subseteq A$ 是一些根理想（radical ideals），这给出了一个理想链：
    $$
    I_0 \subseteq I_1 \subseteq I_2 \subseteq \cdots
    $$
    由于 $A$ 是诺特环，必然存在一个 $N$ 使得对所有 $i > N$ 都有 $I_i = I_{i+1}$。证毕。 $\square$
    （注：这一命题的逆命题是错误的。即使给定一个方案 $X$ 的拓扑空间 $|X|$ 是诺特空间， $X$ 本身也不见得是诺特方案。上述证明中的问题出在：在方案中我们只考虑了根理想。）

**例子 13.10**：
设 $R$ 为离散估值环（DVR），其分式域为 $K$。设 $\overline{K}$ 为 $K$ 的代数闭包（例如 $\overline{K} = k((t))(\sqrt[n]{t}, n > 1)$）。设 $\overline{R}$ 为 $R$ 在 $\overline{K}$ 中的整闭包（对我们来说就是 $\overline{R} = k[[t]][\sqrt[n]{t}, n > 1] = \bigcup_{n \ge 1} k[[t]][\sqrt[n]{t}] = k[[\sqrt[n]{t}]]$）。那么 $\overline{R}$ 不是诺特环（例如，因为理想链 $(t) \subsetneq (\sqrt{t}) \subsetneq (\sqrt[4]{t}) \subsetneq \cdots$ 严格递增不终止），但 $\operatorname{Spec} \overline{R}$ 是一个诺特空间。在我们的例子中，这是因为 $\operatorname{Spec} \overline{R} = \lim_n \operatorname{Spec} k[[\sqrt[n]{t}]]$，而每个 $k[[\sqrt[n]{t}]]_{\mathfrak{p}}$ 是一个 DVR，因此它仅由两个点组成。其所有的过渡态射也都是同胚，因此 $\operatorname{Spec} \overline{R}$ 的拓扑结构恰为两点空间 $\ast \to \ast$。

**定义 13.11**：
设 $X$ 是一个诺特方案，一个相干 $\mathcal{O}_X$-模 $\mathcal{A}$ 是一个有限型的拟凝聚 $\mathcal{O}_X$-模。
（注：我们只有在 $X$ 是诺特方案时，才会采用这种定义的相干 $\mathcal{O}_X$-模。）

**定理 13.12**：
设 $X$ 是一个方案。则拟凝聚层范畴是阿贝尔范畴，且到 $\mathcal{O}_X$-模层的遗忘函子是精确的（exact）。
*   **证明**：
    参见练习卷 8 的第 3 题。 $\square$

**定义 13.13**：
方案之间的态射 $f : Y \to X$ 被称为有限型的（of finite type），如果 $f$ 是拟紧的，且存在 $Y$ 的一个仿射开覆盖 $\operatorname{Spec} B_i$，使得在每个 $\operatorname{Spec} B_i$ 上 $f$ 的限制均可通过某个 $\operatorname{Spec} A_i \subseteq X$ 分解，且通过相应的环映射， $B_i$ 是有限生成 $A_i$-代数。

**命题 13.14**：
如果 $f : Y = \operatorname{Spec} B \to X = \operatorname{Spec} A$ 是有限型态射，则 $B$ 是有限生成 $A$-代数。
*   **证明**：
    局部化 $A \to A[f^{-1}]$ 是有限生成的，所以我们实际上只需证明：如果 $Y = \bigcup_i D(g_i)$ 是 $B$ 的有限仿射开覆盖（其中 $g_i \in B$），使得对每个 $i$，$B[g_i^{-1}]$ 是有限生成 $A$-代数，则 $B$ 是有限生成 $A$-代数。固定一组有限的代数生成元：
    $$
    \frac{b_{ij}}{g_i^{n_{ij}}} \in B[g_i^{-1}]
    $$
    我们想证明集合 $\{g_i, b_{ij}\}$ 生成了作为 $A$-代数的 $B$。设 $A[G_i, B_{ij}] \to B$ 为发送 $G_i \to g_i$ 且 $B_{ij} \to b_{ij}$ 的映射。根据假设，对所有的 $i$，局部的映射 $A[G_i, B_{ij}][G_i^{-1}] \to B[G_i^{-1}] = B[g_i^{-1}]$ 是满射。只需说明对于所有的 $x \in \operatorname{Spec} A[G_i, B_{ij}]$，其在局部化上都是满射：
    $$
    A[G_i, B_{ij}]_{\mathfrak{p}_x} \longrightarrow B_{\mathfrak{p}_x}
    $$
    若 $x \in \bigcup_i D(G_i)$，那么根据上述假设，这一结论是显然的。若 $x \notin \bigcup_i D(G_i)$，由于 $\operatorname{Spec} B = \bigcup D(g_i)$，此时必然有 $B_{\mathfrak{p}_x} = 0$，所以满射性自然成立。证毕。 $\square$

**命题 13.15**：
如果 $f : Y \to X$ 是有限型态射，且 $X$ 是诺特的，那么 $Y$ 也是诺特的。
*   **证明**：
    已知 $X$ 是拟紧的，且 $f$ 是有限型态射意味着 $f$ 是拟紧的，所以 $Y$ 是拟紧的。给定任何映射到 $U = \operatorname{Spec} A \subseteq X$ 的仿射开集 $V = \operatorname{Spec} B \subseteq Y$，由条件可知 $B$ 是有限生成 $A$-代数。因为 $A$ 是诺特环，根据希尔伯特基底定理， $B$ 也是诺特环。证毕。 $\square$

**备注 13.16**：
若 $k$ 是代数闭域，那么代数几何中 $k$ 上“簇”（varieties）的经典概念本质上等同于 $\operatorname{Spec} k$ 上的有限型方案。

**定义 13.17**：
设 $T$ 是一个局部谱空间（locally spectral space），则 $T$ 的（Krull）维度（dimension）定义为 $T$ 中所有点特化链长度的最大上确界减去一，即：
$$
\operatorname{dim} T = \sup_{n} \{x_0 \succ x_1 \succ x_2 \succ \cdots \succ x_n \mid x_i \in T, x_i \neq x_j, \forall i \neq j\}
$$
（注：我们用 $x \succ y$ 来表示 $x$ 特化为 $y$，这意味着对于包含 $y$ 的所有开集 $U$，都有 $x \in U$。我们也说 $y$ 推广了 $x$，写为 $y \prec x$。对于豪斯多夫空间，这一维度定义得到的都是零维。）

**定义 13.18**：
若 $X$ 是一个方案，则 $\operatorname{dim} X = \operatorname{dim} |X|$。

**例子 13.19**：
设 $k$ 是一个代数闭域，且设 $X = \mathbb{A}^1_k$。泛点（generic point）可特化为所有的闭点。这产生了一个长度为 1 的特化链，这意味着 $\operatorname{dim} X = 1$。

**例子 13.20**：
若 $k$ 仍是代数闭域，且 $X = \mathbb{A}^2_k$，此时 $X$ 的点是一些闭点、不可约曲线以及泛点。由此，我们得到了一个长度为 2 的特化链，这意味着至少有 $\operatorname{dim} X \ge 2$（其实际维度恰好为 2）。

**引理 13.21**：
若 $X = \bigcup_i U_i$ 是方案 $X$ 的一个开覆盖，则 $\operatorname{dim} X = \sup_i \operatorname{dim} U_i$。
*   **证明**：
    根据特化的定义，如果在 $X$ 中有一条特化链，这整条链必须完全落在某个固定的 $U_i$ 内部。证毕。 $\square$