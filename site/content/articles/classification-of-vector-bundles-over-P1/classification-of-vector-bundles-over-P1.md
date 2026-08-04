---
title: "classification-of-vector-bundles-over-P1"
date: 2026-08-04
articleId: classification-of-vector-bundles-over-P1
category: miscellaneous/inbox/unclassified
---

### 1. 绪论与 $\mathbb{P}^1_k$ 的构造

本文的目标是在代数几何的方案（scheme）框架下，证明任意域 $k$ 上的射影直线 $\mathbb{P}^1_k$ 上的向量丛分类定理（即格罗滕迪克分类定理）。

#### $\mathbb{P}^1_k$ 的粘合构造
令 $k$ 为任意域。定义：
$$
U_1 = \text{Spec}(k[s]), \quad U_2 = \text{Spec}(k[t])
$$
$$
U_{12} = \text{Spec}(k[s, s^{-1}]) = U_1 \setminus \{0\}, \quad U_{21} = \text{Spec}(k[t, t^{-1}]) = U_2 \setminus \{0\}
$$
通过如下代数同构粘合 $U_1$ 和 $U_2$：
$$
k[s, s^{-1}] \xrightarrow{\sim} k[t, t^{-1}], \quad s \mapsto t^{-1}
$$
由此构造的 $\mathbb{P}^1_k$ 具有以下性质：它是 $k$ 上一个化简的（reduced）、分离的（separated）、有限型的（finite type）方案，并且是光滑的、射影的且几何整的（geometrically integral）。由于 $k$ 是域，$\mathbb{P}^1_k$ 也是诺特方案（Noetherian scheme）。

由于 $k[t]$、$k[s]$、$k[t, t^{-1}]$ 和 $k[s, s^{-1}]$ 均为主理想整环（PID），其所有素理想皆为极大理想，因此方案 $\mathbb{P}^1_k$ 在集合层面上与经典的代数簇 $\mathbb{P}^1_k$ 是相同的。

---

### 2. 向量丛与皮卡群的定义

为了后续的证明，文档引入了两种等价的向量丛定义：

**定义 0.1 (Vector Bundle)**：$\mathbb{P}^1_k$ 上的秩为 $r$ 的向量丛 $V$ 是一个凝聚（coherent）、局部自由的 $\mathcal{O}_{\mathbb{P}^1_k}$-模，满足在 $V$ 为自由模的每个开集 $U$ 上，均有如下同构：
$$
V \cong \mathcal{O}_{\mathbb{P}^1_k}^{\oplus r}
$$
若 $r = 1$，则称 $V$ 为线丛（line bundle）。

**定义 0.2 (Vector Bundle)**：设 $X$ 为方案。$X$ 上的秩为 $r$ 的向量丛 $V$ 包含：一个方案 $V$、一个仿射态射 $f: V \to X$、一个 $X$ 的开覆盖 $\{U_i\}$，以及一系列同构：
$$
\psi_i : f^{-1}(U_i) \to \mathbb{A}^n \times U_i
$$
满足对于任意的 $i, j$ 及任意仿射开子集 $V' = \text{Spec}(A) \subseteq U_i \cap U_j$，自同构 $\psi = \psi_j \circ \psi_i^{-1}$（作用在 $\mathbb{A}^n \times V' \cong \text{Spec}(A[x_1, \dots, x_r])$ 上）是由 $A[x_1, \dots, x_n]$ 的线性自同构给出的。等价地，$\psi$ 由 $\text{GL}(n, A)$ 中的矩阵给出。

秩为 $n$ 的两个向量丛 $(V, f, \{U_i\}, \{\psi_i\})$ 与 $(V', f', \{U'_i\}, \{\psi'_i\})$ 之间的同构，是一个方案同构 $g: V \xrightarrow{\sim} V'$，满足 $f = f' \circ g$，并且使得 $(V, f, \{U_i\} \cup \{U'_i\}, \{\psi_i\} \cup \{\psi'_i \circ g\})$ 仍构成 $X$ 上的向量丛。
其对应的交换图如下：
```tikz {embedFontCss=true}
\begin{tikzcd}
V \arrow[rr, "g", "\sim"'] \arrow[dr, "f"'] & & V' \arrow[dl, "f'"] \\
& X &
\end{tikzcd}
```

#### 皮卡群 (Picard Group)
$\mathbb{P}^1_k$ 上的皮卡群记为 $\text{Pic}(\mathbb{P}^1_k)$，它是 $\mathbb{P}^1_k$ 线上线丛的同构类在张量积运算下构成的群。该群由重言线丛（tautological line bundle）$\mathcal{O}(1)$ 及其对偶线丛 $\mathcal{O}(-1)$ 生成：
$$
\mathcal{O}(-1) := \mathcal{H}om(\mathcal{O}(1), \mathcal{O}_{\mathbb{P}^1_k}) = \mathcal{O}(1)^*
$$
通常记 $\mathcal{O}(1)^{\otimes n}$ 为 $\mathcal{O}(n)$，且满足：
$$
\mathcal{O}(-n) = \mathcal{O}(-1)^{\otimes n} = (\mathcal{O}(1)^*)^{\otimes n} = \mathcal{O}(n)^*
$$
由于 $\text{Pic}(\mathbb{P}^1_k)$ 由 $\mathcal{O}(1)$ 自由生成，故 $\text{Pic}(\mathbb{P}^1_k) \cong \mathbb{Z}$。线丛 $\mathcal{L}$ 的次数（degree）定义为满足 $\mathcal{L} \cong \mathcal{O}(n)$ 的唯一整数 $n \in \mathbb{Z}$。
对于任意向量丛 $V$，将其以 $\mathcal{O}(n)$ 进行扭转（twist）定义为：
$$
V(n) := V \otimes \mathcal{O}(n)
$$

**定理 0.1 (Serre's Vanishing Theorem)**：对于诺特环上的妥当方案（proper scheme） $X$ 上的任意丰沛（ample）线丛 $L$，以及 $X$ 上的任意凝聚层 $F$，存在一个整数 $m_0$，使得对于所有 $m \geq m_0$，层 $F \otimes L^{\otimes m}$ 由其全局截面所生成，且在正次数上没有上同调。

*注：由于 $\mathcal{O}(1)$ 是丰沛的，上述定理对 $\mathcal{O}(1)$ 适用。*

#### 符号与微分层说明
*   在 $\mathbb{P}^1_k$ 上，微分层（sheaf of differentials） $\omega_{\mathbb{P}^1_k}$（或简记为 $\omega_X$）同构于 $\mathcal{O}(-2)$。
*   由于全局截面函子 $\Gamma$ 是左正合的，且 $H^i$ 是其第 $i$ 个右导出函子，故有 $H^0 \cong \Gamma$。

---

### 3. 核心定理的引入

**定理 1.1 (Grothendieck's Classification of Vector Bundles Over $\mathbb{P}^1$)**：设 $V$ 是 $\mathbb{P}^1_k$ 上的一个向量丛，则存在整数 $n_1, \dots, n_q$ 和 $r_1, \dots, r_q$，使得：
$$
V = \mathcal{O}(n_1)^{r_1} \oplus \dots \oplus \mathcal{O}(n_q)^{r_q}
$$
若要求 $n_1 > n_2 > \dots > n_q$，则该分解是唯一的。

**定理 1.2 (Serre Duality)**：设 $V$ 为 $X$ 上的向量丛，则存在有限维 $k$-向量空间的同构：
$$
H^i(X, V) \xrightarrow{\sim} H^{1-i}(X, V^* \otimes \omega_X)
$$
其中 $V^*$ 是 $V$ 的对偶丛，由 $V^*(U) = \text{Hom}(V(U), \mathcal{O}_X(U))$ 给出，$\omega_X$ 是 $X$ 上的微分层。

**定理 1.3 (Dedekind and Weber)**：设 $k$ 为域， $x$ 为变量，考虑 Laurent 多项式环 $k[x, x^{-1}]$。设 $A \in \text{GL}(n, k[x, x^{-1}])$，则存在矩阵 $B \in \text{GL}(n, k[x])$ 和 $C \in \text{GL}(n, k[x^{-1}])$ 使得：
$$
BAC = \begin{pmatrix} x^{d_1} & & 0 \\ & \ddots & \\ 0 & & x^{d_n} \end{pmatrix}
$$
其中 $d_1 \geq d_2 \geq \dots \geq d_n$，且序列 $\{d_i\}$ 是唯一的。

---

### 4. 定理 1.1 与 定理 1.3 的等价性

**命题 2.1**：定理 1.1 与 定理 1.3 是等价的。

**证明步骤**：
1. 考虑 $\mathbb{P}^1_k$ 及其标准覆盖 $U_0$ 与 $U_1$（即前文的 $U_1$ 与 $U_2$）。根据定义 0.2，秩为 $n$ 的向量丛 $V$ 由其过渡函数（粘合映射） $\psi_0 \circ \psi_1^{-1}$ 决定。这对应于一个线性自同构 $\text{Spec}(k[x, x^{-1}])^n \xrightarrow{\sim} \text{Spec}(k[x, x^{-1}])^n$，因此 $V$ 由一个矩阵 $A \in \text{GL}(n, k[x, x^{-1}])$ 唯一确定。
2. 考虑在开集上的基底变换（坐标变换）：
   * 在 $U_0$ 上进行基底变换（由矩阵 $B \in \text{GL}(n, k[x])$ 给出）对应于左乘：$BA$。
   * 在 $U_1$ 上进行基底变换（由矩阵 $C \in \text{GL}(n, k[x^{-1}])$ 给出）对应于右乘：$AC$。
   因此，$\mathbb{P}^1_k$ 上向量丛的任何同构都可以表示为形如 $BAC$ 的矩阵基底变换。若两个矩阵 $A \cong A'$ 给出同构的向量丛，则必有 $A' = BAC$。
3. 此外，线丛 $\mathcal{O}(n)$ 对应于过渡同构 $a \mapsto a^n$，即 $1 \times 1$ 阶可逆矩阵 $(x^n) \in \text{GL}(1, k[x, x^{-1}])$。
4. **两定理的等价性推导**：
   * **定理 1.1 $\implies$ 定理 1.3**：若定理 1.1 成立，则向量丛 $V$ 同构于 $\bigoplus_{i=1}^n \mathcal{O}(d_i)$（其中 $d_1 \geq \dots \geq d_n$）。根据上述对应关系，这意味着存在矩阵 $B \in \text{GL}(n, k[x])$ 和 $C \in \text{GL}(n, k[x^{-1}])$ 使得 $BAC$ 可以化为对角线上为 $x^{d_1}, \dots, x^{d_n}$ 的对角矩阵。定理 1.1 分解的唯一性直接保证了序列 $\{d_i\}$ 的唯一性。
   * **定理 1.3 $\implies$ 定理 1.1**：若定理 1.3 成立，则任意由矩阵 $A$ 决定的向量丛 $V$ 均同构于由对角矩阵形式所代表的向量丛，即 $V \cong \mathcal{O}(d_1) \oplus \dots \oplus \mathcal{O}(d_n)$。通过合并相同次数的项，该分解可重写为：
     $$
     \mathcal{O}(n_1)^{r_1} \oplus \dots \oplus \mathcal{O}(n_q)^{r_q}
     $$
     其中 $d_1 = \dots = d_{r_1} = n_1$ 且 $d_{r_1+1} = \dots = d_{r_2} = n_2$ 等。由序列 $\{d_i\}$ 的唯一性可知，该线丛分解亦是唯一的。
   
   证明完毕。 $\square$

---

### 5. 证明格罗滕迪克定理的辅助引理与大纲

为了使用上同调方法直接证明定理 1.1，引入以下引理：

**引理 3.1**：设 $\varphi: W \to V$ 是 $X = \mathbb{P}^1_k$ 上向量丛之间的单射。商凝聚层 $V/W$ 本身不一定是向量丛。然而，存在 $W$ 在 $V$ 中的一个扩张 $W'$ 使得 $V/W'$ 是一个向量丛。其中 $W'$ 的秩（以及 $V/W'$ 的秩）分别等于 $W$ 的秩（以及 $V/W$ 在一般点（generic point）处的秩）。*（此处一般点处的秩指该层在 $X$ 的通用点处的茎的秩）*。

**引理 3.2**：设 $V$ 为 $X$ 上的向量丛。对于所有 $i \geq 0$，存在如下函子同构：
$$
\text{Ext}^i(V, -) \cong H^i(V^* \otimes -) : \text{Coh}\mathcal{O}_X \to \text{Vec}_k
$$

### 1. 定理 1.1（格罗滕迪克定理）的构造证明

在对任意非平凡向量丛 $V$ 证明分解定理时，可分为以下 6 个关键步骤逐步展开：

#### 证明的 6 个步骤大纲
*   **步骤 1**：寻找一个极大的整数 $n \in \mathbb{Z}$，使得通过 $\mathcal{O}(-n)$ 扭转之后，仍能保证存在非平凡的全局截面，然后进行扭转。
*   **步骤 2**：展示存在 $H^0(V(-n)) \cong k^r$（其中 $r \ge 1$ ），并构造一个单同态将 $\mathcal{O}^r$ 嵌入 $V(-n)$，使得商层 $V(-n)/\mathcal{O}^r$ 仍是一个向量丛。
*   **步骤 3**：证明由此产生的短正合序列
    $$
    0 \to \mathcal{O}^r \to V(-n) \to W(-n) \to 0
    $$
    分裂（splits），从而得到 $V(-n) \cong \mathcal{O}^r \oplus W(-n)$。
*   **步骤 4**：对上述同构两侧同时扭转 $\mathcal{O}(n)$，得到：
    $$
    V \cong \mathcal{O}(n)^{\oplus r} \oplus W \quad\quad(3)
    $$
*   **步骤 5**：将 $V' = W$ 作为新的研究对象，并对其重复步骤 1 至 4，得到 $V' \cong \mathcal{O}(n_2)^{\oplus r_2} \oplus W'$。由于向量丛的秩在每次迭代中严格递减，此过程必在有限步内终止。通过令 $n_1 = n$，$r_1 = r$，对于某个整数 $q$，我们最终得到所需的分解：
    $$
    V = \mathcal{O}(n_1)^{\oplus r_1} \oplus \dots \oplus \mathcal{O}(n_q)^{\oplus r_q}
    $$
*   **步骤 6**：证明公式 (3) 中得到的分解形式在不计直和项顺序的意义下是唯一的。

---

#### 步骤 1：极大值 $n$ 的存在性证明
设 $V$ 是 $\mathbb{P}^1_k$ 上的非平凡向量丛。我们希望找到一个极大整数 $n \in \mathbb{Z}$，满足 $V(-n)$ 拥有非平凡的全局截面（即 $H^0(V(-n)) \ne 0$），但 $V(-(n+1))$ 没有（即 $H^0(V(-(n+1))) = 0$）。
*   **若 $V$ 没有全局截面**：
    由于 $V$ 是凝聚且局部自由的，且 $\mathcal{O}(1)$ 是丰沛的，通过对其扭转 $\mathcal{O}(1)$ 足够多次，可使其成为全局生成的（globally generated）。由于扭转在局部上由于张量积满足：
    $$
    V(U) \otimes_{\mathcal{O}} \mathcal{O}(U) \cong V(U)
    $$
    因而在局部上没有改变。因此，对于足够大的 $m$，扭转后的 $V(m) = V \otimes \mathcal{O}(m)$ 必是非平凡且全局生成的，从而拥有非平凡的全局截面。若设 $m'$ 是使 $V(m')$ 产生非平凡全局截面的最小整数，则令 $n = -m'$ 即为所求。
*   **若 $V$ 已经拥有全局截面**：
    利用 Serre 对偶性可得：
    $$
    H^0(\mathbb{P}^1, V(-n)) \cong H^1(\mathbb{P}^1, V^*(n) \otimes \omega) \cong H^1(\mathbb{P}^1, V^*(n-2)) \quad\quad(4)
    $$
    由 Serre 消失定理，必然存在某个 $m \in \mathbb{N}$ 且 $m \ne 0$，使得：
    $$
    H^1(\mathbb{P}^1, V^*(m-2)) \ne 0
    $$
    但对于所有的 $\ell > 0$，均有：
    $$
    H^1(\mathbb{P}^1, V^*((m+\ell)-2)) \cong 0
    $$
    因此，令 $n = m$ 即为满足上述极大性要求的最大整数。

---

#### 步骤 2：构造向 $V(-n)$ 嵌入 $\mathcal{O}$ 的映射
由于 $V(-n)$ 是凝聚模，其全局截面 $H^0(\mathbb{P}^1, V(-n))$ 在域 $k$ 上是一个有限维向量空间（因为 $\mathbb{P}^1$ 上的常数函数全局截面 $H^0(\mathbb{P}^1, \mathcal{O}_{\mathbb{P}^1}) \cong k$ 且 $V(-n)$ 是凝聚的）。
*   设 $H^0(\mathbb{P}^1, V(-n)) \cong k^r$（其中 $r \in \mathbb{N}$），其标准基为 $e_1, \dots, e_r$。
*   选择其中一个全局截面 $e_{\ell} \in k^r$，并定义模映射 $\mathcal{O} \to V(-n)$，其作用为 $1 \mapsto e_{\ell}$。该映射在全局截面层面上是单射，因此在层（sheaf）层面上也必为单射。
*   由于 $\mathcal{O}$ 不一定是 $V(-n)$ 的子向量丛，如果它不是，则可以根据 **引理 3.1** 将其扩充为 $V(-n)$ 中的子向量丛 $\mathcal{O}'$。因为 $\mathcal{O}'$ 与 $\mathcal{O}$ 具有相同的秩，所以 $\mathcal{O}'$ 也是一个线丛。

为了进一步分析，需引入以下命题：

**命题 3.1**：负次数的对偶可逆层（invertible sheaf of negative degree）没有非零截面。次数为 0 的可逆层除了平凡层以外，均没有非零截面；若为平凡层，则其拥有一个一维的截面族。

*   根据上述命题，由于扩展出的子丛 $\mathcal{O}'$ 是正规扩充且有非平凡全局截面，它不能同构于任何 $\mathcal{O}(-n)$（其中 $n \in \mathbb{N}$），故 $\mathcal{O}'$ 必须具有形式 $\mathcal{O}(d)$（其中 $d \ge 0$）。
*   如果 $d > 0$，那么经过一次负 Serre 扭转（即张量积 $\mathcal{O}(-1)$）后，$\mathcal{O}'(-1)$ 仍将会有非平凡全局截面。然而，由于 $\mathcal{O}'$ 是 $V(-n)$ 的子丛，而由 $n$ 的极大性已知 $V(-n-1)$ 没有全局截面，这会导致矛盾。
*   因此，其次数必须为 0，即 $\mathcal{O}$ 本身已经是 $V(-n)$ 的子向量丛。从而商层 $V'(-n) := V(-n)/\mathcal{O}$ 也是 $\mathbb{P}^1$ 上的向量丛。我们得到了如下向量丛的短正合序列：
    $$
    0 \to \mathcal{O} \to V(-n) \to V'(-n) \to 0 \quad\quad(5)
    $$
    其在範疇中的图表关系为：
```tikz {embedFontCss=true}
\begin{tikzcd}
0 \arrow[r] & \mathcal{O} \arrow[r] & V(-n) \arrow[r] & V'(-n) \arrow[r] & 0
\end{tikzcd}
```

---

#### 步骤 3 & 4：利用上同调进行归纳与分裂
对于上述短正合序列 (5)，我们写出其伴随的长正合序列：
$$
0 \to H^0(\mathbb{P}^1, \mathcal{O}) \to H^0(\mathbb{P}^1, V(-n)) \to H^0(\mathbb{P}^1, V'(-n)) \to H^1(\mathbb{P}^1, \mathcal{O}) \to \dots
$$
已知 $H^1(\mathbb{P}^1, \mathcal{O}) = 0$，故有以下正合序列：
$$
0 \to H^0(\mathbb{P}^1, \mathcal{O}) \to H^0(\mathbb{P}^1, V(-n)) \to H^0(\mathbb{P}^1, V'(-n)) \to 0
$$
由于 $H^0(\mathbb{P}^1, \mathcal{O}) \cong k$ 且 $H^0(\mathbb{P}^1, V(-n)) \cong k^r$，因此：
$$
H^0(\mathbb{P}^1, V'(-n)) \cong k^r / k \cong k^{r-1}
$$
若将序列 (5) 扭转 $\mathcal{O}(-1)$，可得对于所有 $\ell > 0$，斜变项 $V'(-n-\ell)$ 均没有非平凡全局截面。因此，$n$ 同样也是使 $V'(-n)$ 拥有全局截面的极大整数。

接下来对 $r$ 展开归纳法：
*   **基础情况 ($r = 1$)**：
    我们需要确定 $V(-n)$ 在 $\text{Ext}^1(V'(-n), \mathcal{O})$ 中对应的扩张类。
    利用 **引理 3.2**，该扩张类对应于 $H^1(\mathbb{P}^1, V^*(n))$（其中 $V^*(n)$ 为 $V'(-n)$ 的对偶）。结合 Serre 对偶性（其中 $\omega \cong \mathcal{O}(-2)$）：
    $$
    H^1(\mathbb{P}^1, V^*(n)) \cong H^0(\mathbb{P}^1, V'(-n) \otimes \omega) \cong H^0(\mathbb{P}^1, V'(-n-2)) \cong 0
    $$
    由于 $H^1(\mathbb{P}^1, V^*(n)) \cong 0$，该扩张必定是平凡扩张，即短正合序列分裂：
    $$
    V(-n) \cong \mathcal{O} \oplus V'(-n)
    $$
    两端同时扭转 $\mathcal{O}(n)$，即得 $V \cong \mathcal{O}(n) \oplus V'$。

*   **归纳步骤 ($r > 1$)**：
    假设陈述对于 $r - 1$ 成立。由于 $V'$ 的秩为 $r-1$，由归纳假设可得：
    $$
    V'(-n) \cong \mathcal{O}^{\oplus r-1} \oplus W(-n)
    $$
    （其中 $W(-n)$ 没有全局截面）。
    再次考察 $V(-n)$ 在 $\text{Ext}^1(V'(-n), \mathcal{O})$ 中对应的扩张类。由于 $\text{Ext}$ 对直和具有线性性质：
    $$
    \text{Ext}^1(V'(-n), \mathcal{O}) \cong \text{Ext}^1(\mathcal{O}^{\oplus r-1} \oplus W(-n), \mathcal{O}) \cong \text{Ext}^1(\mathcal{O}, \mathcal{O})^{\oplus r-1} \oplus \text{Ext}^1(W(-n), \mathcal{O})
    $$
    再次由 **引理 3.2** 和 Serre 对偶性分析各项：
    $$
    \text{Ext}^1(W(-n), \mathcal{O}) \cong H^1(\mathbb{P}^1, W^*(-n) \otimes \mathcal{O}) \cong H^1(\mathbb{P}^1, W^*(n)) \cong H^0(\mathbb{P}^1, W(-n-2)) \cong 0
    $$
    $$
    \text{Ext}^1(\mathcal{O}, \mathcal{O}) \cong H^1(\mathbb{P}^1, \mathcal{O}) \cong H^0(\mathbb{P}^1, \mathcal{O}(-2)) \cong 0
    $$
    因此，$\text{Ext}^1(V'(-n), \mathcal{O}) \cong 0$。这表明短正合序列
    $$
    0 \to \mathcal{O} \to V(-n) \to V'(-n) \to 0
    $$
    必然分裂。我们得到：
    $$
    V(-n) \cong \mathcal{O} \oplus \left(\mathcal{O}^{\oplus r-1} \oplus W(-n)\right) \cong \mathcal{O}^{\oplus r} \oplus W(-n)
    $$
    两边同时右扭转 $\mathcal{O}(n)$ 即得：
    $$
    V \cong \mathcal{O}(n)^{\oplus r} \oplus W
    $$

---

#### 步骤 5：递推链的有限终止性
由于 $W$ 的秩严格小于 $V$ 的秩，我们可以继续将 $W$ 分解为 $W \cong \mathcal{O}(n')^{\oplus r'} \oplus W'$。这给出了如下递推分解序列：
$$
V^{(i)} \cong \mathcal{O}(n_i)^{\oplus r_i} \oplus W^{(i)} \quad\quad(6)
$$
（其中 $W^{(i)} = V^{(i+1)}$，且初始项 $V^{(0)} = V$）。由于每次迭代中 $W^{(i)}$ 的秩严格减少，该递推链必在有限步内终止，最终产出如下分解：
$$
V = \mathcal{O}(n_1)^{\oplus r_1} \oplus \dots \oplus \mathcal{O}(n_q)^{\oplus r_q} \quad\quad(7)
$$
由于我们在每一步中都将 $n_i$ 选为使 $V^{(i)}(-n_i)$ 拥有非零截面的极大整数，而商部分 $W^{(i)}$ 扭转 $\mathcal{O}(-n_i)$ 后无全局截面，因此后续提取的极值必满足 $n_1 > n_2 > \dots > n_q$。

---

#### 步骤 6：唯一性的归纳证明
通过对直和项的个数进行归纳，来证明公式 (7) 的分解在不计顺序时是唯一的。
假设 $V$ 存在另一个分解：
$$
V \cong \mathcal{O}(a_1)^{\oplus s_1} \oplus \dots \oplus \mathcal{O}(a_q)^{\oplus s_q}
$$
满足 $a_1 > a_2 > \dots > a_q$。我们将该分解写为：
$$
V \cong \mathcal{O}(a_1)^{\oplus s_1} \oplus W
$$
（其中 $W \cong \mathcal{O}(a_2)^{\oplus s_2} \oplus \dots \oplus \mathcal{O}(a_q)^{\oplus s_q}$）。扭转 $\mathcal{O}(-a_1)$ 得到：
$$
V(-a_1) \cong \mathcal{O}^{\oplus s_1} \oplus W(-a_1)
$$
显然 $\mathcal{O}$ 拥有全局截面 $k$，故 $V(-a_1)$ 也有非平凡全局截面。然而如果再扭转一次 $\mathcal{O}(-1)$，由于对所有 $j > 1$ 均有 $a_1 > a_j$，商层 $W(-a_1-1)$ 没有任何非零截面，且 $\mathcal{O}(-1)^{\oplus s_1}$ 也没有。因此，$a_1$ 是满足该性质的极大整数，由极大性定义必有 $a_1 = n_1$。

再考虑全局截面空间：
$$
\mathcal{O}^{\oplus s_1} \oplus W(-a_1) \cong V(-n_1) \cong \mathcal{O}^{\oplus r_1} \oplus W'(-n_1) \quad\quad(8)
$$
（其中 $W' \cong \mathcal{O}(n_2)^{\oplus r_2} \oplus \dots \oplus \mathcal{O}(n_q)^{\oplus r_q}$）。
由于 $W(-a_1)$ 和 $W'(-n_1)$ 均无全局截面，对其取全局截面 $H^0$ 可得：
$$
k^{s_1} \cong H^0(\mathcal{O}^{\oplus s_1}) \cong H^0(V(-n_1)) \cong H^0(\mathcal{O}^{\oplus r_1}) \cong k^{r_1}
$$
作为有限维 $k$-向量空间，这直接给出 $s_1 = r_1$。对剩余的部分 $V^{(2)}$ 重复上述步骤，即可完成唯一性的归纳证明。 $\square$

*注：上述唯一性也附带证明了 $\text{Pic}(\mathbb{P}^1_k)$ 是由 $\mathcal{O}(1)$ 自由生成的，因此 $\text{Pic}(\mathbb{P}^1_k) \cong \mathbb{Z}$。*

---

### 2. 关键辅助引理的证明

本节补全了前文中使用的几个核心引理的证明。

**引理 3.3**：设 $F$ 是 $\mathbb{P}^1_k$ 上的相干模。则 $F$ 要么有挠（has torsion），要么是 $\mathbb{P}^1_k$ 上的局部自由层。任何凝聚层 $F$ 均可嵌入如下短正合序列：
$$
0 \to F_t \to F \to F' \to 0 \quad\quad(9)
$$
其中 $F_t$ 是挠子模（torsion submodule），且 $F'$ 是局部自由的。

**证明**：
1. 假设 $F$ 是无挠的。我们来证明它是局部自由的。由于 $\mathbb{P}^1_k$ 是正则的一维方案，其在任何点 $x \in X$ 处的茎（stalk） $\mathcal{O}_{\mathbb{P}^1_k, x}$ 都是离散估值环（DVR）。
2. 根据 PID 上有限生成模的分类定理（DVR 也是 PID），无挠模 $F_x$ 必然是自由的（设秩为 $r$）。
3. 从而，在 $x$ 的某个仿射开邻域 $U$ 上，存在一个满同态 $\varphi : \mathcal{O}(U)^{\oplus r} \to F(U)$。
4. 我们可以将 $U$ 限制到更小的开集 $U'$ 以避开 $\varphi$ 的核（kernel）与余核（cokernel）的支撑集（supports），从而在 $U'$ 上获得层同构 $\varphi' : \mathcal{O}(U')^{\oplus r} \xrightarrow{\sim} F(U')$。
5. 由于 $x \in \mathbb{P}^1_k$ 的选择是任意的，由此得到的开覆盖证明了 $F$ 是局部自由的。
6. 对于一般的凝聚层 $F$，只需令 $F_t$ 为其挠子模，$F_t \to F$ 为包含映射，则商层 $F' := F/F_t$ 是无挠的，从而由上述证明可知 $F'$ 是局部自由的（即向量丛）。 $\square$

---

**引理 3.1**：设 $\varphi : W \to V$ 是 $X = \mathbb{P}^1_k$ 上向量丛之间的单射。商凝聚层 $V/W$ 本身可能不是向量丛，但存在 $W$ 在 $V$ 中的扩张 $W'$ 使得 $V/W'$ 是向量丛，且 $W'$ 的秩与 $W$ 相同。

**证明**：
1. 若 $V/W$ 不是向量丛，因凝聚层的商仍是凝聚的，这说明 $V/W$ 不是局部自由的。由 **引理 3.3** 可知，$V/W$ 必然有非零的挠子模 $T$。
2. 我们通过将 $W$ 沿 $V/W$ 的挠子模 $T$ 进行拉回（pullback），在 $V$ 中将其扩充为 $W'$。这给出了如下短正合序列：
    $$
    0 \to W \to W' \to T \to 0
    $$
3. 由于挠模 $T$ 在通用点（generic point）处的 stalk 秩为 0，因此 $W$ 与扩张后的 $W'$ 具有相同的一般秩（generic rank）。
4. 此时商层满足 $V/W' \cong (V/W)/T$，它是无挠的。再次利用 **引理 3.3** 可知，$V/W'$ 必然是局部自由的，因此 $V/W'$ 是 $X$ 上的向量丛。 $\square$

---

**引理 3.2**：设 $V$ 是 $X$ 上的向量丛。对于所有 $i \ge 0$，存在如下函子同构：
$$
\text{Ext}^i(V, -) \cong H^i(V^* \otimes -) : \text{Coh}\mathcal{O}_X \to \text{Vec}_k
$$

**证明**：
1. $\text{Ext}^i(V, -)$ 是 $\text{Hom}(V, -)$ 的第 $i$ 个右导出函子，可写作 $\Gamma(\mathcal{H}om(V, -))$（其中 $\mathcal{H}om$ 是层值 Hom 函子）。
2. 由于 $V$ 是向量丛（局部自由），层值 $\mathcal{H}om(V, -)$ 本身是正合的。
3. 为了应用格罗滕迪克谱序列（Grothendieck's composition of functors spectral sequence），我们需要验证 $\mathcal{H}om(V, -)$ 将内射凝聚层映射为内射凝聚层。
4. 设 $I$ 是内射凝聚层（从而 $\text{Hom}(-, I)$ 正合），由于在层层面上有常规性质 $\mathcal{H}om(V, I) \cong V^* \otimes I$，故：
    $$
    \text{Hom}(-, \mathcal{H}om(V, I)) \cong \text{Hom}(-, V^* \otimes I) \cong \text{Hom}(- \otimes V, I)
    $$
    该复合函子是正合的。
5. 此时应用格罗滕迪克复合函子谱序列，对于任意凝聚层 $F$，可得：
    $$
    H^p(\mathcal{E}xt^q(V, F)) \Rightarrow \text{Ext}^{p+q}(V, F) \quad\quad(10)
    $$
6. 由于 $V$ 是局部自由的，$\mathcal{H}om(V, -)$ 是正合的，因而当 $q > 0$ 时，其高阶导出层 $\mathcal{E}xt^q(V, F) = 0$。
7. 因此，谱序列在 $q=0$ 处退化，由公式 (10) 立即导出如下同构：
    $$
    H^p(V^* \otimes F) \cong H^p(\mathcal{H}om(V, F)) \cong H^p(\mathcal{E}xt^0(V, F)) \cong \text{Ext}^p(V, F)
    $$
    对于任意凝聚层 $F$ 均成立。 $\square$