---
title: Notes on p-adic Hodge Theory 6
date: 2026-07-27T10:45:05.000Z
tags: null
articleId: notes-on-p-adic-hodge-theory-6
category: mathematics/number-theory/p-adic-hodge-theory
order: 6
---


> 本章中 $K$ 为 $p$-adic域 ( def.1.16. ) , 即特征 $0$ 且剩余域为特征 $p$ 完美域的完备离散赋值域

# 6.1 环 $B_{\text{HT}}$ 与 Hodge-Tate 表示 (The ring $B_{\text{HT}}$ and Hodge-Tate representations)

## 1. Tate 模与 Tate 扭 (Tate module and Tate twist)
回忆乘法群的 Tate 模：$$\begin{aligned}\mathbb{Z}_p(1) = T_p(\mathbb{G}_m) \cong \mathbb{Z}_p \cdot t\end{aligned}$$它是秩为 1 的自由 $\mathbb{Z}_p$ 模，其上的 $G_K$-作用通过分圆特征标 (cyclotomic character) $\chi$ 给出：$$\begin{aligned}g(t) = \chi(g)t, \quad \chi : G_K \to \mathbb{Z}_p^*\end{aligned}$$对于 $i \in \mathbb{Z}$，Tate 扭 $\mathbb{Z}_p(i) = \mathbb{Z}_p t^i$ 是自由 $\mathbb{Z}_p$ 模，其 $G_K$-作用通过 $\chi^i$ 进行。

> 这里 $\mathbb{G}_m$ 是 $\overline{K}$ 乘法群..

此外，对于一个 $\mathbb{Z}_p$ 模 $M$ 和 $i \in \mathbb{Z}$，$M$ 的第 $i$ 次 Tate 扭定义为：$$\begin{aligned}M(i) = M \otimes_{\mathbb{Z}_p} \mathbb{Z}_p(i)\end{aligned}$$由此定义的映射：$$\begin{aligned}M \to M(i), \quad x \mapsto x \otimes t^i\end{aligned}$$是 $\mathbb{Z}_p$ 模同构。

若 $G_K$ 作用在 $M$ 上，则它通过以下方式作用于 $M(i)$：$$\begin{aligned}g(x \otimes u) = gx \otimes gu = \chi^i(g)gx \otimes u\end{aligned}$$注意，上述同构在一般情况下与 $G_K$ 的作用是不交换的。

记 $C = \widehat{\overline{K}}$。

**Definition 6.1 (Hodge-Tate 周期环 $B_{\text{HT}}$)**：Hodge-Tate 周期环（也称为 Hodge-Tate 环） $B_{\text{HT}}$ 定义为：$$\begin{aligned}B_{\text{HT}} = \bigoplus_{i \in \mathbb{Z}} C(i) = C\left[t, \frac{1}{t}\right]\end{aligned}$$其中元素 $c \otimes t^i \in C(i) = C \otimes_{\mathbb{Z}_p} \mathbb{Z}_p(i)$ 记作 $ct^i$，并配有如下乘法结构：$$\begin{aligned}ct^i \cdot c' t^j = cc' t^{i+j}\end{aligned}$$我们有：$$\begin{aligned}B_{\text{HT}} \subset \widehat{B_{\text{HT}}}= C((t)) = \left\{ \sum_{i=-\infty}^{+\infty} c_i t^i, \ c_i \in C, \text{ 且当 } i \ll 0 \text{ 时 } c_i = 0 \right\}\end{aligned}$$

**Proposition 6.2 ($B_{\text{HT}}$ 的 $(\mathbb{Q}_p, G_K)$-正则性)**：环 $B_{\text{HT}}$ 是 $(\mathbb{Q}_p, G_K)$-正则的，即：
1. $B_{\text{HT}}$ 是整环；
2. $(\operatorname{Frac} B_{\text{HT}})^{G_K} = B_{\text{HT}}^{G_K} = K$；
3. 对于每个 $b \in B_{\text{HT}}, b \neq 0$，若对所有 $g \in G_K$ 均有 $g(b) \in \mathbb{Q}_p b$，则 $b$ 是可逆的。

**证明**：
* **(1)** 显然成立（由于 $C\left[t, t^{-1}\right]$ 在域 $C$ 上是整环）。
* **(2)** 注意到 $B_{\text{HT}} \subset \operatorname{Frac} B_{\text{HT}} \subset \widehat{B_{\text{HT}}}$，因此只需证明 $(\widehat{B_{\text{HT}}})^{G_K} = K$。设 $b = \sum_{i \in \mathbb{Z}} c_i t^i$ 且 $c_i \in C$，则对于 $g \in G_K$，有：$$\begin{aligned}g(b) = \sum_{i \in \mathbb{Z}} g(c_i)\chi^i(g)t^i\end{aligned}$$要使对所有的 $g \in G_K$ 均有 $g(b) = b$，必要且充分的条件是每个分量 $c_i t^i$ 都被 $G_K$ 固定，即 $c_i t^i \in C(i)^{G_K}$。根据 Tate 定理（推论 4.45），有 $C^{G_K} = K$，且当 $i \neq 0$ 时 $C(i)^{G_K} = 0$。由此完成了 (2) 的证明。
* **(3)** 假设 $0 \neq b = \sum c_i t^i \in B_{\text{HT}}$ 满足：$$\begin{aligned}g(b) = \eta(g)b, \quad \eta(g) \in \mathbb{Q}_p, \quad \text{对所有 } g \in G_K\end{aligned}$$则对于所有的 $i \in \mathbb{Z}$ 及 $g \in G_K$，有 $g(c_i)\chi^i(g) = \eta(g)c_i$。因此：$$\begin{aligned}g(c_i) = (\eta\chi^{-i})(g)c_i\end{aligned}$$对于所有使得 $c_i \neq 0$ 的 $i$，$\mathbb{Q}_p c_i$ 是 $C$ 中在 $G_K$ 作用下稳定的 1 维子 $\mathbb{Q}_p$-向量空间。因此，与特征标 $\eta\chi^{-i}$ 关联的 1 维表示是 $C$-可容的 (C-admissible)。
  根据 Tate 定理（推论 4.45），对于所有使得 $c_i \neq 0$ 的 $i$，$I_K$ 通过 $\eta\chi^{-i}$ 的作用是有限的。由于分圆特征标是无限的，该条件对至多一个 $i$ 成立。
  因此，存在唯一的 $i_0 \in \mathbb{Z}$ 使得 $b = c_{i_0} t^{i_0}$ 且 $c_{i_0} \neq 0$，从而 $b$ 在 $B_{\text{HT}}$ 中可逆。

**Definition 6.3**：一个 $G_K$ 的 $p$-adic 表示 $V$ 如果是 $B_{\text{HT}}$-admissible的，则被称为 **Hodge-Tate 表示**。对于任意 $p$-adic 表示 $V$，定义：$$\begin{aligned}\mathbf{D}_{\text{HT}}(V) := (B_{\text{HT}} \otimes_{\mathbb{Q}_p} V)^{G_K}\end{aligned}$$

由定理 3.14 与命题 6.2: 

**Proposition 6.4**：对于任意 $p$-adic 表示 $V$，自然映射：$$\begin{aligned}\alpha_{\text{HT}}(V) : B_{\text{HT}} \otimes_K \mathbf{D}_{\text{HT}}(V) \longrightarrow B_{\text{HT}} \otimes_{\mathbb{Q}_p}V\end{aligned}$$是单射，且有 $\dim_K \mathbf{D}_{\text{HT}}(V) \le \dim_{\mathbb{Q}_p} V$。$V$ 是 Hodge-Tate 表示当且仅当满足维度相等：$$\begin{aligned}\dim_K \mathbf{D}_{\text{HT}}(V) = \dim_{\mathbb{Q}_p} V\end{aligned}$$

**Proposition 6.5**：一个 $p$-adic 表示 $V$ 是 Hodge-Tate 的必要且充分条件是：$C$-表示 $W = C \otimes_{\mathbb{Q}_p} V$ 的 Sen 算子 $\Theta$ 是半单的，且其特征值均属于整环 $\mathbb{Z}$。

**证明步骤 (Proof of Proposition 6.5)：**
* **必要性**：若 $V$ 是 Hodge-Tate 的，则：$$\begin{aligned}W_i = (C(i) \otimes_{\mathbb{Q}_p} V)^{G_K}(-i) \otimes_K C\end{aligned}$$是 $W$ 的子空间，且有 $W = \bigoplus W_i$。容易看出，算子 $\Theta|_{W_i}$ 恰好是“乘以 $i$”的映射（参见例 4.37）。因此该条件是必要的。
* **充分性**：为了证明充分性，由于 $\Theta$ 是半单的，我们可以将 $W$ 分解为 $\Theta$ 的特征子空间 $W_i$，其中 $\Theta$ 在 $W_i$ 上是“乘以 $i$”的映射。此时，$\Theta = 0$ 作用在 $W_i(-i)$ 上，由定理 4.40 有：$$\begin{aligned}W_i(-i) = C \otimes_K (W_i(-i))^{G_K}\end{aligned}$$因此：$$\begin{aligned}\dim_K \mathbf{D}_{\text{HT}}(V) \ge \sum_i \dim_K (W_i(-i))^{G_K} = \sum_i \dim_C W_i = \dim_{\mathbb{Q}_p} V\end{aligned}$$从而 $V$ 是 Hodge-Tate 的。

对于一个 $p$-adic 表示 $V$，$\mathbf{D}_{\text{HT}}(V)$ 实际上是一个分次 $K$-向量空间：$$\begin{aligned}\mathbf{D}_{\text{HT}}(V) = \bigoplus_{i \in \mathbb{Z}} \operatorname{gr}^i \mathbf{D}_{\text{HT}}(V)\end{aligned}$$其中：$$\begin{aligned}\operatorname{gr}^i \mathbf{D}_{\text{HT}}(V) = (C(i) \otimes_{\mathbb{Q}_p} V)^{G_K}\end{aligned}$$

**Definition 6.6**：一个 $G_K$ 的 $p$-adic 表示 $V$ 的 **Hodge-Tate 数** 定义为使以下项非零的那些 $h_i$：$$\begin{aligned}h_i := \dim_K(C(-i) \otimes V)^{G_K} \neq 0\end{aligned}$$对 $i \in \mathbb{Z}$（此处张量积为 $\otimes_{\mathbb{Q}_p}$）。

**Example 6.7**：设 $E$ 是 $K$ 上的椭圆曲线，其 $p$-adic Tate 模为 $V_p(E) = \mathbb{Q}_p \otimes_{\mathbb{Z}_p} T_p(E)$，这是一个 2 维 Hodge-Tate 表示，且：$$\begin{aligned}\dim (C \otimes_{\mathbb{Q}_p} V_p(E))^{G_K} = \dim(C(-1) \otimes_{\mathbb{Q}_p} V_p(E))^{G_K} = 1\end{aligned}$$因此，其 Hodge-Tate 数为：$$\begin{aligned}h_0 = 1 \quad \text{与} \quad h_1 = 1\end{aligned}$$

对 $G_K$ 的 $p$-adic 表示 $V$，定义：$$\begin{aligned}\operatorname{gr}^i \mathbf{D}^*_{\text{HT}}(V) = (\mathcal{L}_{\mathbb{Q}_p}(V, C(i)))^{G_K}\end{aligned}$$则作为 $K$-向量空间，有如下同构：$$\begin{aligned}\operatorname{gr}^i \mathbf{D}^*_{\text{HT}}(V) \cong \operatorname{gr}^{-i} \mathbf{D}_{\text{HT}}(V^*)\end{aligned}$$

**Exercise 6.8**：一个 $G_K$ 的 $p$-adic 表示 $V$ 是 $\widehat{B_{\text{HT}}}$-可容的，当且仅当它是 $B_{\text{HT}}$-可容的。

