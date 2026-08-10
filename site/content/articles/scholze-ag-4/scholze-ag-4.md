---
title: "scholze-ag-4"
date: 2026-08-07
articleId: scholze-ag-4
category: miscellaneous/inbox/unclassified
---

### 10 射影空间 (2016年11月22日)

本节介绍了一个概形 $\mathbb{P}^n$，它在很大程度上推广了拓扑学中的实射影空间 $\mathbb{RP}^n$ 和复射影空间 $\mathbb{CP}^n$。

**例子 10.1**：定义 $n$ 维复射影空间 $\mathbb{CP}^n$：$$\mathbb{CP}^n = \left(\mathbb{C}^{n+1} - \{0\}\right) / \sim$$其中等价关系为对所有的 $\lambda \in \mathbb{C}^\times$，有：$$(x_0, \dots, x_n) \sim \lambda(x_0, \dots, x_n)$$我们用齐次坐标 $(x_0 : \dots : x_n)$ 来表示 $\mathbb{CP}^n$ 中的点，其中 $x_i \in \mathbb{C}$ 且不全为零。由于上述非零复数的等价关系，每个单独的 $x_i$ 的值不是唯一步确定的，但在 $x_j \neq 0$ 时，比例 $\frac{x_i}{x_j}$ 是唯一步确定的。

$\mathbb{CP}^n$ 的标准覆盖由 $n+1$ 个 $\mathbb{C}^n$ 的副本组成（因此 $\mathbb{CP}^n$ 是一个 $n$ 维复流形），具体定义为：$$\begin{aligned}U_i &= \{ (x_0 : \dots : x_n) \in \mathbb{CP}^n \mid x_i \neq 0 \} \longrightarrow \mathbb{C}^n \\(x_0 : \dots : x_n) &\longmapsto \left( \frac{x_0}{x_i}, \dots, \widehat{\frac{x_i}{x_i}}, \dots, \frac{x_n}{x_i} \right)\end{aligned}$$对于所有 $i \neq j$，其交集 $U_i \cap U_j \cong \mathbb{C}^{n-1} \times \mathbb{C}^\times$，定义为：$$\{ (X_{i, k})_{k=0,\dots,n, k \neq i} \mid X_{i, j} \neq 0 \}$$另一种构造 $\mathbb{CP}^n$ 的方法是沿着交集 $U_i \cap U_j = U_{i,j}$ 将所有这些 $U_i$ 粘贴在一起。

**例子 10.2**：更一般地，对于任意域 $k$，我们可以定义：$$\mathbb{P}^n(k) = \left( k^{n+1} - \{0\} \right) / k^\times$$

我们的目标是构造一个概形 $\mathbb{P}^n$，使其 $k$ 值点组成的集合恰好是 $\mathbb{P}^n(k)$。对此，主要有以下三种方法：
1. **显式构造**：这也是本讲座中采用的极其显式的方法。
2. **Proj 构造**：将 $\text{Spec}$ 函子推广为 $\text{Proj}$ 函子（将分次环映射为概形），然后定义 $\mathbb{P}^n = \text{Proj}(\mathbb{Z}[x_0, \dots, x_n])$。
3. **点的函子（Functor of points）方法**：为所有环写下 $R \to \mathbb{P}^n(R)$ 的映射，并证明它处于完全忠实函子 $\text{Sch} \to \text{Fun}(\text{Ring}, \text{Set})$ 的essential image中。

*注意（Caution）*：对于一般的环 $R$，通常不满足 $\mathbb{P}^n(R) = (R^{n+1} - \{0\}) / R^\times$。

**例子 10.3**：关于概形 $\mathbb{P}^n$ 的具体构造：
对于任意 $i = 0, \dots, n$，令：$$U_i = \text{Spec}\,\mathbb{Z}[(X_{i,j})_{j=0,\dots,n, i \neq j}] \cong \mathbb{A}^n_\mathbb{Z}$$可以将 $X_{i,j}$ 启发式地理解为分数“$\frac{X_j}{X_i}$”。对于每个 $i \neq j$，我们有开子概形：$$U_{i,j} = D(X_{i,j}) \subseteq U_i$$因此：$$U_{i,j} \cong \text{Spec}\,\mathbb{Z}[(X_{i,k})_{k \neq i, j}, (X_{i,j})^{\pm 1}]$$我们有 $U_{i,j}$ 和 $U_{j,i}$ 之间的同构关系 $\alpha_{i,j} : U_{i,j} \to U_{j,i}$，在环层面上由以下映射定义：$$\alpha_{i,j} : X_{i,k} \quad (k \neq i) \longmapsto X_{j,k} \cdot X_{j,i}^{-1}$$该映射的逆映射为：$$X_{j,k} \quad (k \neq j) \longmapsto X_{i,k} \cdot X_{i,j}^{-1}$$启发式上，这满足如下算式（脚注18）：$$X_{k,i} \text{ “=” } \frac{x_i}{x_k} = \frac{x_j}{x_k} \frac{x_i}{x_j} = \frac{x_j}{x_k} \left( \frac{x_j}{x_i} \right)^{-1} \text{ “=” } X_{k,j} X_{i,j}^{-1}$$通过一个允许我们粘合概形的引理，只要这些碎片可以相干地契合（slot together coherently），我们就能把它们粘合为一个整体。

**引理 10.4**：设 $I$ 为一个集合，对于所有 $i \in I$，$U_i$ 均为概形。对于 $i, j$，已知开子概形 $U_{i,j} \subseteq U_i = U_{i,i}$，以及满足cocycle condition的同构 $\alpha_{i,j} : U_{i,j} \to U_{j,i}$，即对所有的 $i, j, k \in I$，在 $U_{i,j,k} := U_{i,j} \cap U_{j,k}$ 上有：$$\alpha_{i,k} = \alpha_{j,k} \circ \alpha_{i,j}$$则我们有一个概形：$$X = \bigcup_{i \in I} U_i$$即 $X$ 允许一个开覆盖 $X = \cup V_i$，且存在同构 $\beta_i : V_i \cong U_i$，使得 $\beta_i : V_i \cap V_j \cong U_{i,j}$、$\beta_j : V_i \cap V_j \cong U_{j,i}$，并满足 $\alpha_{i,j} = \beta_j \circ \beta_i^{-1}$。

利用此引理并注意到在本例中确实满足 $\alpha_{i,k} = \alpha_{j,k} \circ \alpha_{i,j}$，我们便可获得概形：$$\mathbb{P}^n = \bigcup_{i_0}^n U_i = \bigcup_{i=0}^n \text{Spec}\,\mathbb{Z}[(X_{i,j})_{j=0,\dots,n, i \neq j}] = \bigcup_{i=0}^n \mathbb{A}^n_\mathbb{Z}$$特别地，对于所有的域 $k$，我们有：$$\mathbb{P}^n(k) = \bigcup_{i_0}^n U_i(k) = \bigcup_{i=0}^n k^n = \mathbb{P}^n(k)$$尽管上面的一行看起来是重言式，但第一个 $\mathbb{P}^n(k)$ 代表概形的 $k$ 值点，而后者代表我们在域上关于射影空间的旧定义。

**备注 10.5**：存在一个 20 世纪 50 年代的 Chow 定理（Chow's Theorem），该定理指出：如果一个复流形 $X$ 允许一个闭嵌入 $X \hookrightarrow \mathbb{CP}^n$，那么存在有限个齐次多项式 $F_1, \dots, F_m \in \mathbb{C}[X_0, \dots, X_n]$，使得 $X \cong V(F_1, \dots, F_m) \subseteq \mathbb{CP}^n$，其中：$$V(F_1, \dots, F_m) := \{ (x_0 : \dots : x_n) \in \mathbb{CP}^n \mid F_i(x_0, \dots, x_n) = 0, \quad 0 \le i \le n \}$$此处的条件是有意义的，因为 $F_i$ 是齐次的。这暗示存在一个闭子概形 $X^{\text{alg}} \subseteq \mathbb{P}^n_\mathbb{C} := \mathbb{P}^n \times_{\text{Spec}\,\mathbb{Z}} \text{Spec}\,\mathbb{C}$ 使得其复点集 $X^{\text{alg}}(\mathbb{C}) = X$。所有紧黎曼面都允许嵌入到 $\mathbb{CP}^3$ 中，因此它们全都是代数的。

**定义 10.6**：一个 $R$-模 $M$ 是**可逆的**（invertible），如果自函子 $L \otimes_R -$ 在 $R$-模范畴上是一个范畴等价。

这等价于存在一个 $R$-模 $L'$ 满足 $L \otimes_R L' \cong R$。这也等价于（第六次作业, 4.(iii) , 可逆当且仅当局部是秩 1 的自由模 ）：存在 $\text{Spec}\,R$ 的一个覆盖 $D(f_j)$ 使得 $L[f_j^{-1}] \cong R[f_j^{-1}]$ 。

**定理 10.7**：对于所有的环 $R$，存在一个从 $\mathbb{P}^n(R)$ 到所有满射 $R^{n+1} \xrightarrow{p} L$ 集合的自然（对 $R$ 有函子性）双射, 其中 $L$ 是某个可逆 $R$-模. 此处需模去等价关系：满射 $p : R^{n+1} \to L$ 与 $p' : R^{n+1} \to L'$ 等价，当且仅当存在一个同构 $\alpha : L \to L'$ 使得 $p' = \alpha \circ p$。

**例子 10.8**：若 $R = k$ 为一个域，则任何可逆 $R$-模 $L$ 都同构于 $k$。满射 $\alpha : k^{n+1} \twoheadrightarrow k$ 与 $k^{n+1} - \{0\}$ 中的元素 $(x_0, \dots, x_n)$ 存在一一对应关系，只需将 $\alpha$ 映射到 $(\alpha(e_0) : \dots : \alpha(e_n))$ 即可。注意到, 定理 10.7 中的满射满足 $p(x_0, \dots, x_n) \sim p'(x'_0, \dots, x'_n)$ 当且仅当存在同构 $\lambda : k \to k$（即乘以某个 $\lambda \in k^\times$），满足对所有 $i = 0, \dots, n$ 有 $x'_i = \lambda x_i$。换言之，该定理符合我们对域上射影空间的预期。

*定理 10.7 的证明*：

为证明存在此双射，我们将在两个方向上给出构造映射。

**方向一：从概形映射 $\phi : \text{Spec}\,R \to \mathbb{P}^n$ 构造满射 $p : R^{n+1} \to L$**
设 $\phi : \text{Spec}\,R \to \mathbb{P}^n$ 为概形映射。设标准开集 $U_i$ 的原像 $\phi^{-1}(U_i)$ 被 $D(f_{i,k})$（对于某些 $f_{i,k} \in R$）覆盖。
因此我们得到了映射 $\phi_{i,k} : \text{Spec}\,R[f_{i,k}^{-1}] \to U_i$，它们由以下环映射给出：
$$
\mathbb{Z}[(X_{i,j})_{i \neq j}] \longrightarrow R[f_{i,k}^{-1}]
$$
在其中设 $x_{i,j,k} = \phi_{i,k}(X_{i,j}) \in R[f_{i,k}^{-1}]$。
考虑满射：
$$
p_{i,k} : R[f_{i,k}^{-1}]^{n+1} \longrightarrow R[f_{i,k}^{-1}]
$$
它在基底上将 $e_j \mapsto x_{i,j,k}$（对于 $i \neq j$）以及 $e_i \mapsto 1$。
我们希望将这些局部满射 $p_{i,k}$ 粘合在一起，以获得整体满射 $p : R^{n+1} \twoheadrightarrow L$。

为了简化符号，我们假设 $\phi^{-1}(U_i) = D(f_i)$（对某些 $f_i \in R$）。更一般情况的证明相同，只是符号更繁琐。我们现在有了满射：
$$
p_i : R[f_i^{-1}]^{n+1} \longrightarrow R[f_i^{-1}]
$$
对于 $i \neq i'$，我们有：
$$
\phi^{-1}(U_i \cap U_{i'}) = D(f_i f_{i'}) = \text{Spec}\,R[(f_i f_{i'})^{-1}] \subseteq \text{Spec}\,R
$$
我们有以下交换图表，其中垂直映射是乘以 $x_{i, i'}^{-1}$，另外两个映射是 $p_i$ 和 $p_{i'}$ 在该局部的表现：

```tikz {embedFontCss=true}
\begin{tikzcd}
& R[(f_i f_{i'})^{-1}] \arrow[dd, "\cdot x_{i,i'}^{-1}"] \\
R[(f_i f_{i'})^{-1}]^{n+1} \arrow[ur, "p_i"] \arrow[dr, "p_{i'}"'] & \\
& R[(f_i f_{i'})^{-1}]
\end{tikzcd}
```

坐标变换关系 $X_{i', j} = X_{i, j} \cdot X_{i', i}$ 确保了上述图表 (10.9) 是交换的。随后我们需要以下引理：

**引理 10.10**：
函子 $M \mapsto M_i = M[f_i^{-1}]$，从 $A$-模范畴到由 $A[f_i^{-1}]$-模 $M_i$ 集合及满足上圈条件的同构 $\alpha_{ij} : M_i[f_j^{-1}] \to M_j[f_i^{-1}]$ 组成的范畴，是一个范畴等价。
*证明*：此引理将作为后文的推论 11.10 进行证明。

将此引理应用于 $L_i = R[f_i^{-1}]$，伴随通过乘上 $X_{i,i'}^{-1}$ 得到的同构 $\alpha_{i,i'} : L_i[(f_i f_{i'})^{-1}] \cong L_{i'}[(f_i f_{i'})^{-1}]$（见图表 10.9），我们便可将它们粘合为一个整体 $R$-模 $L$。由于其局部化同构于 $R$ 的局部化，因此 $L$ 是一个可逆 $R$-模。此外，满射 $p_i$ 也顺应地粘合为一个整体满射 $p : R^{n+1} \to L$。定理 10.7 中所述的等价关系直接来自图表 10.9 的相干性。

#### 方向二：从满射 $p : R^{n+1} \twoheadrightarrow L$ 构造概形映射 $\phi : \text{Spec}\,R \to \mathbb{P}^n$
反之，假设存在一个满射 $p : R^{n+1} \twoheadrightarrow L$ 到可逆 $R$-模 $L$。我们期望构造一个概形映射 $\phi : \text{Spec}\,R \to \mathbb{P}^n$。
由于这是一种性质（property）而非数据（datum），我们只需要局部地、且相干地构造 $\phi$ 即可。

因此，我们可以假设在局部上 $L \cong R$，从而满射变为 $p : R^{n+1} \to R$，其由基底映射 $e_i \mapsto x_i$ 给出。
根据 $p$ 的满射性，这组 $x_i$ 生成了整个环 $R$ 作为理想，所以有：
$$
\text{Spec}\,R = \bigcup_{i=0}^n D(x_i)
$$
在局部区域 $D(x_i)$ 上，元素 $x_i$ 是可逆的。在该等价关系下，将 $e_j \mapsto x_j$ 的满射 $p : R^{n+1} \to R$ 等价于将 $e_j \mapsto x_j / x_i$ 的满射 $p' : R^{n+1} \to R$。
因此，我们局部地定义 $\phi : \text{Spec}\,R \to \mathbb{P}^n$ 为 $\phi : \text{Spec}\,R \to U_i \subseteq \mathbb{P}^n$，它由下述环映射决定：
$$
\begin{aligned}
\mathbb{Z}[(X_{i,j})_{i \neq j}] &\longrightarrow R \\
X_{i,j} &\longmapsto x_j / x_i
\end{aligned}
$$
最后，我们需要验证上述这两个方向的构造互为逆映射（具体细节留给读者作为练习）。