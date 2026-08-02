---
title: Notes on p-adic Hodge Theory 6
date: 2026-07-27 10:45:05
tags:
---

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

# 6.2 $B_{\mathrm{dR}}$ 域与 de Rham 表示

在本节中，将定义环 $B_{\mathrm{dR}}^+$ 及其分式域（即 $p$-进周期域）$B_{\mathrm{dR}}$，使得它们满足以下包含关系：$$W(R) \subset W(R)\left[\frac{1}{p}\right] \subset B_{\mathrm{dR}}^+ \subset B_{\mathrm{dR}}$$

## 6.2.1 环同态 $\theta$

设 $a = (a_0, a_1, \dots, a_m, \dots) \in W(R)$，其中 $a_m \in R$。回忆 $a_m$ 有两种等价的写表方式：
1. 写为 $a_m = (a_m^{(r)})_{r \in \mathbb{N}}$，其中 $a_m^{(r)} \in \mathcal{O}_C$，满足 $(a_m^{(r+1)})^p = a_m^{(r)}$；
2. 写为 $a_m = (a_{m,r})$，其中 $a_{m,r} \in \mathcal{O}_{\overline{K}}/p$，满足 $a_{m,r+1}^p = a_{m,r}$。

映射 $a \mapsto (a_{0,n}, a_{1,n}, \dots, a_{n-1,n})$ 给出了一个自然映射 $W(R) \to W_n(\mathcal{O}_{\overline{K}}/p)$。对于每个 $n \in \mathbb{N}$，以下图表是交换的：
```tikz {embedFontCss=true}
\begin{tikzcd}
& W_{n+1}(\mathcal{O}_{\overline{K}}/p) \arrow[d, "f_n"] \\
W(R) \arrow[ur] \arrow[r] & W_n(\mathcal{O}_{\overline{K}}/p)
\end{tikzcd}
```
其中 $f_n((x_0, x_1, \dots, x_n)) = (x_0^p, \dots, x_{n-1}^p)$。容易验证，其自然映射给出了如下同构：$$W(R) \simeq \varprojlim_{f_n} W_n(\mathcal{O}_{\overline{K}}/p) \quad (6.1)$$若将右端赋予离散拓扑的逆极限拓扑，则该同构也是一个同胚。

> 注: 这个逆极限中元素具有$$\begin{aligned}x^{(1)} &= (\underline{x^{(1)}_0}) \\x^{(2)} &= (x^{(2)}_0, \quad \underline{x^{(2)}_1}) \\x^{(3)} &= (x^{(3)}_0, \quad x^{(3)}_1, \quad \underline{x^{(3)}_2}) \\x^{(4)} &= (x^{(4)}_0, \quad x^{(4)}_1, \quad x^{(4)}_2, \quad \underline{x^{(4)}_3}) \\&\vdots\end{aligned}$$三角形形式, 因为 $\mathcal{O}_C$ 对开 $p$ 次根封闭, 所以它可以补回正方形...

注意到 $\mathcal{O}_{\overline{K}}/p = \mathcal{O}_C/p$。我们有一个满同态：$$W_{n+1}(\mathcal{O}_C) \to W_n(\mathcal{O}_{\overline{K}}/p), \quad (a_0, \dots, a_n) \mapsto (\bar{a}_0, \dots, \bar{a}_{n-1})$$设其核为 $I$，则有：$$I = \{(pb_0, pb_1, \dots, pb_{n-1}, a_n) \mid b_i, a_n \in \mathcal{O}_C\}$$回忆 $w_{n+1}: W_{n+1}(\mathcal{O}_C) \to \mathcal{O}_C$ 是将 $(a_0, a_1, \dots, a_n)$ 映射为 $a_0^{p^n} + pa_1^{p^{n-1}} + \dots + p^n a_n$ 的映射。将 $w_{n+1}$ 与商映射 $\mathcal{O}_C \to \mathcal{O}_C/p^n$ 复合，得到自然映射 $W_{n+1}(\mathcal{O}_C) \to \mathcal{O}_C/p^n$。因为：$$w_{n+1}(pb_0, \dots, pb_{n-1}, a_n) = (pb_0)^{p^n} + \dots + p^{n-1}(pb_{n-1})^p + p^n a_n \in p^n \mathcal{O}_C$$所以存在唯一的同态：$$\theta_n : W_n(\mathcal{O}_{\overline{K}}/p) \to \mathcal{O}_C/p^n, \quad (\bar{a}_0, \bar{a}_1, \dots, \bar{a}_{n-1}) \mapsto \sum_{i=0}^{n-1} p^i a_i^{p^{n-i}} \pmod{p^n} \quad (6.2)$$使得以下两个图表均交换：

```tikz {embedFontCss=true}
\begin{tikzcd}
W_{n+1}(\mathcal{O}_C) \arrow[r, "w_{n+1}"] \arrow[d] & \mathcal{O}_C \arrow[d] \\
W_n(\mathcal{O}_{\overline{K}}/p) \arrow[r, "\theta_n"] & \mathcal{O}_C/p^n = \mathcal{O}_{\overline{K}}/p^n
\end{tikzcd}
```

以及 ( 回忆 $W_n(\underline{X}) \equiv W_{n-1}(\underline{X}^p) \pmod{p^n}$ ...)

```tikz {embedFontCss=true}
\begin{tikzcd}
W_{n+1}(\mathcal{O}_{\overline{K}}/p) \arrow[r, "\theta_{n+1}"] \arrow[d, "f_n"'] & \mathcal{O}_C/p^{n+1} \arrow[d] \\
W_n(\mathcal{O}_{\overline{K}}/p) \arrow[r, "\theta_n"] & \mathcal{O}_C/p^n
\end{tikzcd}
```

通过对 $n$ 取极限，它诱导了环同态：$$\theta : W(R) \longrightarrow \mathcal{O}_C \quad (6.3)$$

> 注: 回忆 $\tau$ 记Teichumuller提升, 则$$a = \sum_{i=0}^\infty \left[x_i^{p^{-i}}\right] p^i \quad (x_i \in \kappa)$$令 $y_i = \left[x_i^{p^{-n}}\right] \in A$ , 从而$$\left[x_i^{p^{-i}}\right] = \left[\left(x_i^{p^{-n}}\right)^{p^{n-i}}\right] = \left[x_i^{p^{-n}}\right]^{p^{n-i}} = y_i^{p^{n-i}}$$因此$$a \equiv \sum_{i=0}^n y_i^{p^{n-i}} p^i = y_0^{p^n} + p y_1^{p^{n-1}} + \dots + p^n y_n \pmod{p^{n+1}A}$$这是witt多项式以及相关运算的直观含义...

**引理 6.9**：设 $x = (x_0, x_1, \dots, x_n, \dots) \in W(R)$（其中 $x_n \in R$，且 $x_n = (x_n^{(m)})_{m \in \mathbb{N}}, x_n^{(m)} \in \mathcal{O}_C$），则有：$$\theta(x) = \sum_{n=0}^{+\infty} p^n x_n^{(n)} \quad (6.4)$$因此，$\theta$ 是一个与 $G_{K_0}$ 作用相容的 $W$-代数同态。

> 注: 此处 $W=W(k)$ , $k$ 是 $K$ 剩余域, $R$ 的剩余域是 $\bar{k}$ 因此 $W(R)$ 成为 $W(k)$-代数; 并且有自然的嵌入 ( 以 $p$ 为uniformizer, 固定剩余域 $k$ 生成的那个DVR... ) $W(k)\hookrightarrow \mathcal{O}_K$ , 因此 $\mathcal{O}_C$ 成为 $W(k)$-代数...

*证明*：对于 $x = (x_0, x_1, \dots)$，其在 $W_n(\mathcal{O}_{\overline{K}}/p)$ 中的像是 $(x_{0,n}, x_{1,n}, \dots, x_{n-1,n})$。我们可以选取 $x_i^{(n)} \in \mathcal{O}_C$ 作为 $x_{i,n}$ 的提升，从而：$$\theta_n(x_{0,n}, \dots, x_{n-1,n}) = \sum_{i=0}^{n-1} p^i (x_i^{(n)})^{p^{n-i}} = \sum_{i=0}^{n-1} p^i x_i^{(i)}$$这是由于 $(x_i^{(n)})^{p^r} = x_i^{(n-r)}$。对此式取极限即得引理结论。 $\square$

**注 6.10**：若将 $x \in W(R)$ 写为 $x = \sum_n p^n [x_n]$，其中 $x_n \in R$，而 $[x_n]$ 是其 Teichmüller 代表元，则：$$\theta(x) = \sum_{n=0}^{+\infty} p^n x_n^{(0)} \quad (6.5)$$

> 注: 这里 $\theta$ 的意义就是, 给定 $z\in W(R)$ , 在之前的对应里, $W(R)$ 中元素可以写成幂级数$$(z_n)_{n \ge 0} = \sum_{n=0}^\infty \left[z_n^{p^{-n}}\right] p^n$$则 $\theta$ 将 $z_n$ 换成 $z_n^{(0)}$ . 而 $\theta_n$ 就是截取前 $n$ 项的映射. 而因为 $w_n([x])=x^{p^n}$ ,  $w_n(z)$ 则把有限和 $\sum p^i[z_i^{p^{-i}}]$ 打到 $\sum p^iz_i^{p^{n-i}}$ , 给每个出现的 $z_i$ 取了 $p^n$ 次幂相当于...

**命题 6.11**：同态 $\theta$ 是满射。

*证明*：对于任意 $a \in \mathcal{O}_C$，存在 $x \in R$ 使得 $x^{(0)} = a$。设 $[x] = (x, 0, 0, \dots) \in W(R)$，则 $\theta([x]) = x^{(0)} = a$。 $\square$

选取 $\varpi \in R$ 满足 $\varpi^{(0)} = -p$。定义：$$\xi := [\varpi] + p = (\varpi, 1, 0, \dots) \in W(R) \quad (6.6)$$根据引理 6.9，有 $\theta(\xi) = \varpi^{(0)} + p = 0$。

**命题 6.12**：$\theta$ 的核 $\ker \theta$ 是由 $\xi$ 生成的主理想。此外，$\bigcap_{n} (\ker \theta)^n = 0$。

*证明*：
1. **如果 $\ker \theta \subset (\xi, p)$ , 则 $\ker \theta=(\zeta)$**
   因为 $\mathcal{O}_C$ 没有 $p$-扭元，且 $W(R)$ 是 $p$-进分离且完备的。若 $x \in \ker \theta$ 且可写为 $x = \xi y_0 + p x_1$，则取 $\theta$ 得到 $p\theta(x_1)=0$ , 从而得知 $x_1 \in \ker \theta$。我们可以通过递推关系 $x_{n-1} = \xi y_{n-1} + p x_n$ 归纳构造出 $\ker \theta$ 中的序列 $(x_n)$，从而得到 $x = \xi \sum p^n y_n$ 是 $\xi$ 的倍数。
2. **证明 $\ker \theta \subset (\xi, p)$**
   现在假设 $x = (x_0, x_1, \dots, x_n, \dots) \in \ker \theta$，则：$$0 = \theta(x) = x_0^{(0)} + p\sum_{n=1}^\infty p^{n-1} x_n^{(n)}$$因此其赋值满足 $v(x_0^{(0)}) \ge 1 = v_p(p)$，即 $v(x_0) \ge 1 = v(\varpi)$。故存在 $b_0 \in R$ 使得 $x_0 = b_0 \varpi$。令 $b = [b_0]$，则：$$\begin{aligned}x - b\xi &= (x_0, x_1, \dots) - (b, 0, \dots)(\varpi, 1, 0, \dots) \\&= (x_0 - b_0 \varpi, \dots) = (0, y_1, y_2, \dots) \\&= p(y_1', y_2', \dots) \in pW(R)\end{aligned}$$其中 $(y_i')^p = y_i$。因此 $\ker \theta \subset (\xi, p)$。

2. **证明 $\bigcap_{n} (\ker \theta)^n = 0$**
   若对于所有 $n \in \mathbb{N}$ 均有 $x = (x_0, \dots) \in (\ker \theta)^n$，则有 $v_R(x_0) \ge v_R(\varpi^n) = n$。从而 $x_0 = 0$，且 $x = py \in pW(R)$。由此可得 $p\theta(y) = \theta(x) = 0$，因而 $y \in \ker \theta$。用 $x/\xi^n$ 代替 $x$，可知对于所有 $n$ 均有 $y/\xi^n \in \ker \theta$，即 $y \in \bigcap (\ker \theta)^n$。重复此过程，可得 $x = py = p(pz) = \dots = 0$。 $\square$

---

## 6.2.2 $B_{\mathrm{dR}}^+$ 与 $B_{\mathrm{dR}}$

记 $K_0 = \mathrm{Frac} \, W = W[1/p]$，则有：$$W(R)\left[\frac{1}{p}\right] = K_0 \otimes_W W(R)$$我们通过单射 $x \mapsto 1 \otimes x$ 将 $W(R)$ 视作 $W(R)[1/p]$ 的子环，有：$$W(R)\left[\frac{1}{p}\right] = \bigcup_{n=0}^\infty W(R) p^{-n} = \varinjlim_{n \in \mathbb{N}} W(R) p^{-n}$$其配备了自然的inductive拓扑。

$G_{K_0}$-同态 $\theta: W(R) \to \mathcal{O}_C$ 可以延拓为 $K_0$-代数的 $G_{K_0}$-等变同态：$$\theta : W(R)\left[\frac{1}{p}\right] \to C, \quad \sum_{n \ge n_0 \in \mathbb{Z}} p^n [x_n] \mapsto \sum_{n \ge n_0 \in \mathbb{Z}} p^n x_n^{(0)} \quad (6.7)$$该同态同样是满的且连续的，其核是由 $\xi$ 生成的主理想。因而 $\ker \theta$ 是 $W(R)[1/p]$ 的极大理想，其对应的商域为 $C$。我们仍有 $\bigcap_{n} (\ker \theta)^n = 0$。

**定义 6.13**：
1. 环 $B_{\mathrm{dR}}^+$ 是 $W(R)[1/p]$ 关于 $(\ker \theta)$-进拓扑的完备化：$$B_{\mathrm{dR}}^+ := \varprojlim_{n \in \mathbb{N}} W(R)\left[\frac{1}{p}\right] / (\ker \theta)^n = \varprojlim_{n \in \mathbb{N}} W(R)\left[\frac{1}{p}\right] / (\xi)^n \quad (6.8)$$
2. $p$-进周期域 $B_{\mathrm{dR}}$ 是 $B_{\mathrm{dR}}^+$ 的分式域，即：$$B_{\mathrm{dR}} := \mathrm{Frac} \, B_{\mathrm{dR}}^+ = B_{\mathrm{dR}}^+\left[\frac{1}{\xi}\right] \quad (6.9)$$

**引理 6.14**：$B_{\mathrm{dR}}^+$ 是一个完备DVR，其剩余域为 $C$，配备了连续的 $G_{K_0}$-作用，而 $B_{\mathrm{dR}}$ 是其赋值域。

**证明**：$\operatorname{Frac} R$ 完美, 所以 $W(R)$ 是局部整环. $B_{\mathrm{dR}}^+$ 有一个 $\xi$ 生成的极大理想, 并且 $\cap (\xi)^n=0$ , 因此是DVR...$\square$

**定义 6.15**：对于 $i \in \mathbb{Z}$，设 $\mathrm{Fil}^i B_{\mathrm{dR}}$ 是由 $\xi^i$ 生成的自由 $B_{\mathrm{dR}}^+$-模。$B_{\mathrm{dR}}$ 上的过滤是递降、完备且分离的过滤：$$\dots \supset \mathrm{Fil}^i B_{\mathrm{dR}} = B_{\mathrm{dR}}^+ \xi^i \supset \mathrm{Fil}^{i+1} B_{\mathrm{dR}} \supset \dots \quad (6.10)$$注意到 $\mathrm{Fil}^0 B_{\mathrm{dR}} = B_{\mathrm{dR}}^+$。当 $i \ge 0$ 时，$\mathrm{Fil}^i B_{\mathrm{dR}} = \mathfrak{m}_{B_{\mathrm{dR}}^+}^i$ 是 $B_{\mathrm{dR}}^+$ 最大理想的 $i$ 次幂。
$B_{\mathrm{dR}}$ 上的相应赋值 $v_{\mathrm{dR}}$ 也由该过滤给出：$v_{\mathrm{dR}}(0) = +\infty$ ；对于 $0 \neq x \in B_{\mathrm{dR}}$，$$v_{\mathrm{dR}}(x) = i, \quad \text{若 } x \in \mathrm{Fil}^i B_{\mathrm{dR}} \text{ 且 } x \notin \mathrm{Fil}^{i+1} B_{\mathrm{dR}} \quad (6.11)$$

**注 6.16**：在 $B_{\mathrm{dR}}^+$ 上需要小心区分至少两种不同的拓扑：
1. 离散赋值环拓扑；
2. 逆极限诱导的拓扑（称为**规范拓扑**或**自然拓扑**），其中每个分量 $W(R)[1/p]/(\ker \theta)^n$ 装备了由 $W(R)[1/p]$ 商拓扑诱导的拓扑。
拓扑 (a) 比 (b) 更强。对于 (a)，剩余域 $C$ 被赋予离散拓扑；对于 (b)，$C$ 上诱导的拓扑是 $p$-进赋值下的自然拓扑。

> 注: $W_n(R)$ 带有乘积拓扑, 从而 $W(R)=\varprojlim W_n(R)$ 也有相应的拓扑...

由于 $\bigcap_{n=1}^\infty \xi^n W(R)[1/p] = 0$，我们有单射 $W(R)[1/p] \to B_{\mathrm{dR}}^+$。通过该单射，我们可以将 $W(R)$ 与 $W(R)[1/p]$ 视为 $B_{\mathrm{dR}}^+$ 的子环。特别地，$K_0 = W[1/p]$ 是 $B_{\mathrm{dR}}^+$ 的子域。

对于任何首一不可约多项式 $P(X) \in K_0[X]$，在映射 $K_0 \to B_{\mathrm{dR}}^+ \xrightarrow{\theta} C$ 下，$P(X) \in C[X]$ 在 $C$ 中具有单根，从而由 Hensel 引理可知 $P(X) \in B_{\mathrm{dR}}^+[X]$ 在 $B_{\mathrm{dR}}^+$ 中也有单根。基于此，可以得到：

**引理 6.17**：$\overline{K}$ 自然地是 $B_{\mathrm{dR}}^+$ 的保持 Galois 作用的子域，且 $\overline{K} \cap \mathrm{Fil}^1 B_{\mathrm{dR}} = 0$。

**注 6.18**：我们也可以通过以下方式引入包含关系 $\overline{K} \subset B_{\mathrm{dR}}^+$。设 $L$ 为 $K_0$ 在 $\overline{K}$ 内部的任意全分歧有限扩张，$\pi_L$ 为 $L$ 的一致化元。令 $W_L(R) = L \otimes_W W(R)$（因而 $W_{K_0}(R) = W(R)[1/p]$）。则 $W_L(R)$ 中的任意元素 $x$ 可以唯一写为 $\sum_{n \ge n_0} \pi_L^n [x_n]$，其中 $x_n \in R$。满同态 $\theta: W_{K_0}(R) \to C$ 可以自然延拓为：$$\theta : W_L(R) \to C, \quad \sum_{n \ge n_0} \pi_L^n [x_n] \mapsto \sum_{n \ge n_0} \pi_L^n x_n^{(0)} \quad (6.12)$$其核同样是一个主理想（但不由 $\xi$ 生成, 其实就是把 $p$ 换成 $\pi_L$ 去定义... ）。我们有如下交换图表：

```tikz {embedFontCss=true}
\begin{tikzcd}
W_{K_0}(R) \arrow[r, "\theta"] \arrow[d, "incl"'] & C \arrow[d, "Id"] \\
W_L(R) \arrow[r, "\theta"] & C
\end{tikzcd}
```

定义：$$B_{\mathrm{dR},L}^+ = \varprojlim_{n \in \mathbb{N}} W_L(R) / (\ker \theta)^n \quad (6.13)$$则包含关系 $W_{K_0}(R) \to W_L(R)$ 诱导了包含关系 $B_{\mathrm{dR}}^+ \to B_{\mathrm{dR},L}^+$。由于两者都是具有相同剩余域 $C$ 的完备 DVR，该包含实际上是一个与 $G_{K_0}$-作用兼容的同构 ( 因为 $x^d-p$ 在剩余域 $C$ 中有单根所以没有分歧问题...) 。通过这种方式，我们能将 $B_{\mathrm{dR}}^+$ 与 $B_{\mathrm{dR},L}^+$ 等同，从而有 $K \subset B_{\mathrm{dR}}^+$。进一步地，若 $K$ 与 $L$ 是两个 $p$-进局部域，对于任意连续同态 $h: \overline{K} \to \overline{L}$，存在唯一的规范同态 $B_{\mathrm{dR}}(h): B_{\mathrm{dR}}^+(K) \to B_{\mathrm{dR}}^+(L)$，它是同构当且仅当 $h$ 诱导了完备化域之间的同构。这表明 $B_{\mathrm{dR}}$ 仅依赖于 $C$ 而不依赖于 $K$。

根据定理 1.23，有以下重要结论：

**命题 6.19**：存在一个环同态截面 $s: C \to B_{\mathrm{dR}}^+$，满足对于所有 $c \in C$ 均有 $\theta(s(c)) = c$。该截面不唯一。

**练习 6.20**：
1. 不存在在自然拓扑下连续的截面 $s: C \to B_{\mathrm{dR}}^+$。
2. 不存在与 $G_K$-作用相容的截面 $s: C \to B_{\mathrm{dR}}^+$。

> 截面不唯一是因为等特征且特征 $0$ 情况 $\mathcal{O}_K=k[[\pi_K]]$ 的证明 (1.23) 使用了Zorn. 练习第一个是因为, 如果存在则 $\xi^nB_{\mathrm{dR}}^+$ 的原像是开理想, 然而 $C$ 是域且 $\cap \xi^nB_{\mathrm{dR}}^+=0$ ; 第二个则是...

**注 6.21**：
- (a) 记 $\bar{k}$ 为 $\overline{K}$ 及 $R$ 的剩余域，且 $\bar{k} \subset R$。因此有 $W(\bar{k}) \subset W(R)$。令 $P_0 = W(\bar{k})[1/p] = K_0^{\mathrm{ur}} \subset W(R)[1/p]$，则 $\theta$ 是 $P_0$-代数同态。若设 $\overline{P} = P_0 \overline{K}$ 为 $P_0$ 的代数闭包，则 $\overline{P} \subset B_{\mathrm{dR}}^+$ 且 $\theta$ 也是 $\overline{P}$-代数的同态。
- (b) Colmez 定理指出，$\overline{K}$ 在 $B_{\mathrm{dR}}^+$ 中关于由 $B_{\mathrm{dR}}^+$ 自然拓扑诱导的某种复杂拓扑是稠密的，但在 $B_{\mathrm{dR}}$ 中不稠密。
- (c) Frobenius 映射 $\varphi: W(R)[1/p] \to W(R)[1/p]$ 无法延拓为 $B_{\mathrm{dR}}^+$ 上的连续映射。事实上，$\theta([\varpi^{1/p}]+p) \neq 0$，从而 $[\varpi^{1/p}]+p$ 在 $B_{\mathrm{dR}}^+$ 中可逆。但如果 $\varphi$ 能自然延拓，一方面 $\varphi(1/([\varpi^{1/p}]+p))$ 在 $B_{\mathrm{dR}}^+$ 中必须仍可逆，而另一方面应有 $\varphi(1/([\varpi^{1/p}]+p)) = 1/\xi \notin B_{\mathrm{dR}}^+$，由此产生矛盾。

> 注: 这里 $(\varpi^{\frac{1}{p}})^{(0)}=\varpi^{(1)}$ ...

## 6.2.3 元素 $t$

回忆 $\varepsilon \in R$ 是满足 $\varepsilon^{(0)} = 1$ 且 $\varepsilon^{(1)} \neq 1$ 的元素，则 $\pi = [\varepsilon] - 1 \in W(R)$ 且满足：$$\theta([\varepsilon] - 1) = \varepsilon^{(0)} - 1 = 0$$因此 $[\varepsilon] - 1 \in \ker \theta = \mathrm{Fil}^1 B_{\mathrm{dR}}$。从而有 $(-1)^{n+1}\frac{([\varepsilon]-1)^n}{n} \in W(R)[1/p] \xi^n$，并且定义：$$t = \log[\varepsilon] := \sum_{n=1}^\infty (-1)^{n+1}\frac{([\varepsilon]-1)^n}{n} \in B_{\mathrm{dR}}^+ \quad (6.14)$$

**命题 6.22**：元素 $t \in \mathrm{Fil}^1 B_{\mathrm{dR}}$ 且 $t \notin \mathrm{Fil}^2 B_{\mathrm{dR}}$。换言之，$t$ 生成了 $B_{\mathrm{dR}}^+$ 的极大理想。

*证明*：因为对于所有的 $n \ge 1$，有：$$\frac{([\varepsilon]-1)^n}{n} \in \mathrm{Fil}^1 B_{\mathrm{dR}}$$且当 $n \ge 2$ 时，有：$$\frac{([\varepsilon]-1)^n}{n} \in \mathrm{Fil}^2 B_{\mathrm{dR}}$$为证明 $t \notin \mathrm{Fil}^2 B_{\mathrm{dR}}$，只需证 $[\varepsilon] - 1 \notin \mathrm{Fil}^2 B_{\mathrm{dR}}$。

因为 $[\varepsilon] - 1 \in \ker \theta$，可以将其写为 $[\varepsilon] - 1 = \lambda \xi$，其中 $\lambda \in W(R)$ ( 这里用的是 $W(R)$ 上的 $\theta$ ) 。由此可知：$$[\varepsilon] - 1 \notin \mathrm{Fil}^2 B_{\mathrm{dR}} \iff \theta(\lambda) \neq 0 \iff \lambda \notin W(R)\xi$$即只需证 $[\varepsilon] - 1 \notin W(R)\xi^2$。

反设其不成立，即设 $[\varepsilon] - 1 = \lambda \xi^2$，其中 $\lambda = (\lambda_0, \lambda_1, \dots) \in W(R)$。由于 $\xi = (\varpi, 1, 0, \dots)$，可算得 $\xi^2 = (\varpi^2, \dots)$，从而有 $\lambda \xi^2 = (\lambda_0 \varpi^2, \dots)$。然而：$$[\varepsilon] - 1 = (\varepsilon, 0, 0, \dots) - (1, 0, 0, \dots) = (\varepsilon - 1, \dots)$$对比第0个分量，有 $\varepsilon - 1 = \lambda_0 \varpi^2$，由此得到其在 $R$ 中的赋值满足：$$v(\varepsilon - 1) \ge 2$$然而由引理 5.11 计算已知：$$v(\varepsilon - 1) = \frac{p}{p-1}$$当 $p \neq 2$ 时，此值小于 2，得出矛盾。当 $p = 2$ 时，通过计算更高阶项也可类似得到矛盾。$\square$

**注 6.23**：元素 $t$ 是 $2\pi i \in \mathbb{C}$ 的 $p$-进模拟。尽管在 $B_{\mathrm{dR}}^+$ 中有 $\exp(t) = [\varepsilon] \neq 1$，但在 $C = \mathbb{C}_p$ 中有 $\theta([\varepsilon]) = 1$。

乘法模 $\varepsilon^{\mathbb{Z}_p}$ 同构于作为 $G_{K_0}$-模的 Tate 模 $T_p(\mathbb{G}_m) = \mathbb{Z}_p(1)$。由关系式：$$\log([\varepsilon^\lambda]) = \log([\varepsilon]^\lambda) = \lambda \log([\varepsilon]) = \lambda t$$Tate 模 $\mathbb{Z}_p(1)$ 可以在 $B_{\mathrm{dR}}^+$ 中实现为 $\mathbb{Z}_p t \subset B_{\mathrm{dR}}^+$：对于任意 $g \in G_{K_0}$，有 $g(t) = \chi(g)t$，其中 $\chi$ 为分圆特征标。

此外，我们有：$$\begin{aligned}\mathrm{Fil}^i B_{\mathrm{dR}} &= B_{\mathrm{dR}}^+ t^i = B_{\mathrm{dR}}^+(i) \\B_{\mathrm{dR}} &= B_{\mathrm{dR}}^+\left[\frac{1}{t}\right] = B_{\mathrm{dR}}^+\left[\frac{1}{\xi}\right]\end{aligned}$$由此可得其分次环：$$\begin{aligned}\mathrm{gr} \, B_{\mathrm{dR}} &= \bigoplus_{i \in \mathbb{Z}} \mathrm{gr}^i B_{\mathrm{dR}} = \bigoplus_{i \in \mathbb{Z}} \mathrm{Fil}^i B_{\mathrm{dR}} / \mathrm{Fil}^{i+1} B_{\mathrm{dR}} \\&= \bigoplus_{i \in \mathbb{Z}} B_{\mathrm{dR}}^+(i) / t B_{\mathrm{dR}}^+(i) = \bigoplus_{i \in \mathbb{Z}} C(i)\end{aligned}$$

**命题 6.24**：$\mathrm{gr} \, B_{\mathrm{dR}} = B_{\mathrm{HT}} = C[t, 1/t] \subset \widehat{B}_{\mathrm{HT}} = C((t))$。

**注 6.25**：若我们选择一个环同态截面 $s: C \to B_{\mathrm{dR}}^+$ 并用它将 $C$ 视作 $B_{\mathrm{dR}}^+$ 的子域，则有 $B_{\mathrm{dR}} \simeq C((t))$。但这并不是最合适的方法，因为 $s$ 不连续，且不存在任何与 $G_K$ 作用兼容的此类同构。

---

## 6.2.4 de Rham 表示与带过滤的 $K$-向量空间

**命题 6.26**：$B_{\mathrm{dR}}^{G_K} = K$。

*证明*：因为 $K \subset \overline{K} \subset B_{\mathrm{dR}}^+ \subset B_{\mathrm{dR}}$，我们有：$$K \subset \overline{K}^{G_K} \subset \dots \subset B_{\mathrm{dR}}^{G_K}$$设 $0 \neq b \in B_{\mathrm{dR}}^{G_K}$，我们要证明 $b \in K$。

存在唯一的 $i \in \mathbb{Z}$ 满足 $b \in \mathrm{Fil}^i B_{\mathrm{dR}}$ 且 $b \notin \mathrm{Fil}^{i+1} B_{\mathrm{dR}}$。记 $\bar{b}$ 为 $b$ 在 $\mathrm{gr}^i B_{\mathrm{dR}} = C(i)$ 中的像，则有 $\bar{b} \neq 0$ 且 $\bar{b} \in C(i)^{G_K}$。回忆 ( 根据4.45 )：$$C(i)^{G_K} = \begin{cases} 0, & i \neq 0 \\ K, & i = 0 \end{cases}$$因此必有 $i = 0$ 且 $\bar{b} \in K \subset B_{\mathrm{dR}}^+$。

现在由于 $b - \bar{b} \in B_{\mathrm{dR}}^{G_K}$ 且 $b - \bar{b} \in (\mathrm{Fil}^i B_{\mathrm{dR}})^{G_K}$ , 这里可以选取 $i \ge 1$ ( 此时 $b \in \mathrm{Fil}^0B_{\mathrm{dR}}$ )，可知必有 $b - \bar{b} = 0$，即 $b = \bar{b} \in K$。 $\square$

由于 $B_{\mathrm{dR}}$ 是一个包含 $K$（从而包含 $\mathbb{Q}_p$）的域，其上装备了 $G_K$ 的作用。因为 $B_{\mathrm{dR}}$ 是一个域，所以它是 $(\mathbb{Q}_p, G_K)$-正则的。对于一个 $G_K$ 的 $p$-进表示 $V$，我们定义：$$\mathbf{D}_{\mathrm{dR}}(V) := (B_{\mathrm{dR}} \otimes_{\mathbb{Q}_p} V)^{G_K} \quad (6.15)$$此时，自然映射$$\alpha_{\mathrm{dR}}(V): B_{\mathrm{dR}} \otimes_K \mathbf{D}_{\mathrm{dR}}(V) \longrightarrow B_{\mathrm{dR}} \otimes_{\mathbb{Q}_p} V$$是单射。

**定义 6.27**：一个 $G_K$ 的 $p$-进表示 $V$ 被称为 **de Rham 表示**，如果它是 $B_{\mathrm{dR}}$-admissible的，即映射 $\alpha_{\mathrm{dR}}(V)$ 是一个同构。由 $K$ 的 de Rham 表示组成的 $p$-进 Galois 表示范畴记作 $\mathbf{Rep}_{\mathbb{Q}_p}^{\mathrm{dR}}(G_K)$。

**引理 6.28**：$V$ 是 de Rham 表示当且仅当 $\dim_K \mathbf{D}_{\mathrm{dR}}(V) = \dim_{\mathbb{Q}_p}(V)$。

**定义 6.29**：**带过滤的 $K$-向量空间范畴**（记作 $\mathbf{Fil}_K$）满足以下条件：
1. $\mathbf{Fil}_K$ 中的一个对象是一个有限维 $K$-向量空间 $D$，其上配备了一个以 $\mathbb{Z}$ 为指标、递降、完备且分离的过滤：
   - $\mathrm{Fil}^i D$ 是 $D$ 的子 $K$-向量空间；
   - $\mathrm{Fil}^{i+1} D \subset \mathrm{Fil}^i D$；
   - 当 $i \gg 0$ 时 $\mathrm{Fil}^i D = 0$，且当 $i \ll 0$ 时 $\mathrm{Fil}^i D = D$。
2. 两个对象 $D_1$ 与 $D_2$ 之间的态射$$\eta : D_1 \longrightarrow D_2$$是一个 $K$-线性映射，满足对所有 $i \in \mathbb{Z}$ 都有：$$\eta(\mathrm{Fil}^i D_1) \subset \mathrm{Fil}^i D_2$$

对于 $\mathbf{Fil}_K$ 中的一个对象 $D$，我们定义其分次分量为：$$\mathrm{gr}^i D := \mathrm{Fil}^i D / \mathrm{Fil}^{i+1} D, \quad \mathrm{gr} \, D := \bigoplus_{i \in \mathbb{Z}} \mathrm{gr}^i D \quad (6.16)$$范畴 $\mathbf{Fil}_K$ 是一个具有核（kernel）与余核（cokernel）的加性范畴。事实上，若 $\eta : D_1 \to D_2$ 是 $\mathbf{Fil}_K$ 中的一个态射，则：
- (a) $\mathrm{Ker} \, \eta$ 是作为 $K$-线性映射的核，其过滤为：$$\mathrm{Fil}^i(\mathrm{Ker} \, \eta) = \mathrm{Ker} \, \eta \cap \mathrm{Fil}^i D_1$$
- (b) $\mathrm{Coker} \, \eta$ 是作为 $K$-线性映射的余核，其过滤为：$$\mathrm{Fil}^i(\mathrm{Coker} \, \eta) = \mathrm{Im}(\mathrm{Fil}^i D_2) \subset \mathrm{Coker} \, \eta$$

虽然由 $\eta$ 诱导的映射 $\mathrm{coIm}(\eta) \to \mathrm{Im}(\eta)$ 是 $K$-向量空间的同构，但它并不总是保持过滤的，因而通常不是带过滤 $K$-向量空间范畴中的同构。(从而不是abel范畴)

**定义 6.30**：一个态射 $\eta : D_1 \to D_2$ 被称为 **严格的**（strict）或与过滤严格相容的，如果对所有 $i \in \mathbb{Z}$ 都有：$$\eta(\mathrm{Fil}^i D_1) = \mathrm{Fil}^i D_2 \cap \mathrm{Im} \, \eta$$

**命题 6.31**：$\mathbf{Fil}_K$ 中的态射 $\eta$ 是严格的，当且仅当由其coimage到image的诱导映射是一个同构。

*证明*：留作练习。 $\square$

通过抽象废话，$\mathbf{Fil}_K$ 成为一个确切范畴（exact category），其短正合序列定义如下：

**定义 6.32**：$\mathbf{Fil}_K$ 中的一个 **短正合序列** 是形如$$0 \longrightarrow D' \xrightarrow{\alpha} D \xrightarrow{\beta} D'' \longrightarrow 0$$的序列，满足：
- (i) $\alpha$ 与 $\beta$ 是严格态射；
- (ii) $\alpha$ 是单射，$\beta$ 是满射，且有：$$\alpha(D') = \{x \in D \mid \beta(x) = 0\}$$

> 要求 $\alpha,\beta$ 严格是为了让Fil意义上, $D',D''$ 相当于上面定义的 $\ker , \operatorname{coker}$ .

范畴 $\mathbf{Fil}_K$ 装备了张量积、单位元和对偶结构：
- (a) 若 $D_1$ 与 $D_2$ 是 $\mathbf{Fil}_K$ 中的两个对象，则其张量积 $D_1 \otimes D_2$ 定义为：
  - 作为 $K$-向量空间，有 $D_1 \otimes D_2 = D_1 \otimes_K D_2$；
  - 过滤为：$$\mathrm{Fil}^i(D_1 \otimes D_2) = \sum_{i_1 + i_2 = i} \mathrm{Fil}^{i_1} D_1 \otimes_K \mathrm{Fil}^{i_2} D_2$$
- (b) 单位元对象是 $D = K$，其过滤为：$$\mathrm{Fil}^i K = \begin{cases} K, & i \le 0 \\ 0, & i > 0 \end{cases}$$
- (c) 若 $D$ 是 $\mathbf{Fil}_K$ 中的一个对象，其对偶 $D^*$ 定义为：
  - 作为 $K$-向量空间，有 $D^* = \mathcal{L}_K(D, K)$；
  - 过滤为：$$\mathrm{Fil}^i D^* = (\mathrm{Fil}^{-i+1} D)^\perp = \{f : D \to K \mid f(x) = 0, \forall x \in \mathrm{Fil}^{-i+1} D\}$$

若 $V$ 是 $G_K$ 的任意 $p$-进表示，则 $\mathbf{D}_{\mathrm{dR}}(V)$ 是一个带过滤的 $K$-向量空间，其过滤定义为：
$$
\mathrm{Fil}^i \mathbf{D}_{\mathrm{dR}}(V) := (\mathrm{Fil}^i B_{\mathrm{dR}} \otimes_{\mathbb{Q}_p} V)^{G_K} \quad (6.17)
$$

---

### 过滤与 Hodge-Tate 结构的推导

由于有短正合列：$$0 \longrightarrow \mathrm{Fil}^{i+1} B_{\mathrm{dR}} \longrightarrow \mathrm{Fil}^i B_{\mathrm{dR}} \longrightarrow C(i) \longrightarrow 0$$与 $V$ 做张量积（在 $\mathbb{Q}_p$ 上），得到：$$0 \longrightarrow \mathrm{Fil}^{i+1} B_{\mathrm{dR}} \otimes_{\mathbb{Q}_p} V \longrightarrow \mathrm{Fil}^i B_{\mathrm{dR}} \otimes_{\mathbb{Q}_p} V \longrightarrow C(i) \otimes_{\mathbb{Q}_p} V \longrightarrow 0$$取其 $G_K$-不变部分，由于取不变部分是左正合演算，我们得到：$$0 \longrightarrow \mathrm{Fil}^{i+1} \mathbf{D}_{\mathrm{dR}}(V) \longrightarrow \mathrm{Fil}^i \mathbf{D}_{\mathrm{dR}}(V) \longrightarrow (C(i) \otimes_{\mathbb{Q}_p} V)^{G_K}$$因此，有单射：$$\mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V) = \mathrm{Fil}^i \mathbf{D}_{\mathrm{dR}}(V) / \mathrm{Fil}^{i+1} \mathbf{D}_{\mathrm{dR}}(V) \hookrightarrow (C(i) \otimes_{\mathbb{Q}_p} V)^{G_K}$$对所有 $i \in \mathbb{Z}$ 求直和，可得：$$\mathrm{gr} \, \mathbf{D}_{\mathrm{dR}}(V) = \bigoplus_{i \in \mathbb{Z}} \mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V) \hookrightarrow \bigoplus_{i \in \mathbb{Z}} (C(i) \otimes_{\mathbb{Q}_p} V)^{G_K} = \mathbf{D}_{\mathrm{HT}}(V)$$由此我们有以下命题：

**命题 6.33**：若 $p$-进表示 $V$ 是 de Rham 表示，则 $V$ 是 Hodge-Tate 表示，并且有：$$\mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V) = (C(i) \otimes_{\mathbb{Q}_p} V)^{G_K}, \quad \mathrm{gr} \, \mathbf{D}_{\mathrm{dR}}(V) = \mathbf{D}_{\mathrm{HT}}(V) \quad (6.18)$$

*证明*: 考虑$$ \dim_K \mathbf{D}_{\mathrm{dR}}(V) = \dim_K \operatorname{gr} \mathbf{D}_{\mathrm{dR}}(V) \;\le\; \dim_K \mathbf{D}_{\mathrm{HT}}(V) \;\le\; \dim_{\mathbb{Q}_p} V $$
$\square$

**定理 6.34**：函子 $\mathbf{D}_{\mathrm{dR}} : \mathbf{Rep}_{\mathbb{Q}_p}^{\mathrm{dR}}(G_K) \longrightarrow \mathbf{Fil}_K$ 是一个正合、忠实且保持张量积的函子。

*证明*：我们需要证明以下三点：
- (i) 对于 de Rham 表示的短正合序列 $0 \to V' \to V \to V'' \to 0$，序列$$0 \longrightarrow \mathbf{D}_{\mathrm{dR}}(V') \longrightarrow \mathbf{D}_{\mathrm{dR}}(V) \longrightarrow \mathbf{D}_{\mathrm{dR}}(V'') \longrightarrow 0$$是带过滤 $K$-向量空间的短正合序列。
- (ii) 若 $V_1, V_2$ 是 de Rham 表示，则自然映射$$\mathbf{D}_{\mathrm{dR}}(V_1) \otimes \mathbf{D}_{\mathrm{dR}}(V_2) \xrightarrow{\sim} \mathbf{D}_{\mathrm{dR}}(V_1 \otimes V_2)$$是带过滤 $K$-向量空间的同构。
- (iii) 若 $V$ 是 de Rham 表示，则 $V^* = \mathcal{L}_{\mathbb{Q}_p}(V, \mathbb{Q}_p)$ 也是 de Rham 的，且有：$$\mathbf{D}_{\mathrm{dR}}(V^*) \cong (\mathbf{D}_{\mathrm{dR}}(V))^*$$

根据定理 3.14，(i)-(iii) 作为普通的 $K$-向量空间均成立。我们只需验证过滤。在命题 6.33 中，我们已经将 $\mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V)$ 与 $(C(i) \otimes_{\mathbb{Q}_p} V)^{G_K}$ 进行了等同。

**对于 (i) 的证明**：将 $C(i)$ 与正合序列 $0 \to V' \to V \to V'' \to 0$ 做张量积，并取其 $G_K$-不变部分。因为 $C(i)$ 相当于在 $\mathbb{C}_p$ 上扭转，我们得到如下 $K$-向量空间的正合序列：$$0 \longrightarrow \mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V') \longrightarrow \mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V) \longrightarrow \mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V'')$$特别地，对于所有的 $i \in \mathbb{Z}$，有：$$\dim \mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V) \leqslant  \dim \mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V') + \dim \mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V'')$$由于 $V$ 是 de Rham 表示，其维数关系满足  $\dim_K \mathbf{D}_{\mathrm{dR}}(V) = \dim_{\mathbb{Q}_p}(V)$ ( 引理 6.28 ) , 从而：$$\dim \mathbf{D}_{\mathrm{dR}}(V) = \dim \mathbf{D}_{\mathrm{dR}}(V') + \dim \mathbf{D}_{\mathrm{dR}}(V'')$$由于总维数等于各分次分量维数之和，上述不等式必须在每个 $i \in \mathbb{Z}$ 处都取等号。因此，对于每个 $i \in \mathbb{Z}$，$$0 \longrightarrow \mathrm{Fil}^i \mathbf{D}_{\mathrm{dR}}(V') \longrightarrow \mathrm{Fil}^i \mathbf{D}_{\mathrm{dR}}(V) \longrightarrow \mathrm{Fil}^i \mathbf{D}_{\mathrm{dR}}(V'') \longrightarrow 0$$均是 $K$-向量空间的正合序列。这直接保证了态射的严格性并完成了 (i) 的证明。

**对于 (ii) 的证明**：我们有自然线性映射：$$\begin{aligned}\mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V_1) \otimes_K \mathrm{gr}^j \mathbf{D}_{\mathrm{dR}}(V_2) &\longrightarrow \mathrm{gr}^{i+j} \mathbf{D}_{\mathrm{dR}}(V_1 \otimes V_2) \\c_1 v_1 t^i \otimes c_2 v_2 t^j &\longmapsto c_1 c_2(v_1 \otimes v_2) t^{i+j}\end{aligned}$$此映射是一个单射
> 注: 已知对de Rham表示 $V$ , $$\mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V)=\operatorname{gr}^i \mathbf{D}_{\text{HT}}(V) = (C(i) \otimes_{\mathbb{Q}_p} V)^{G_K}$$并且因为它是Hodge-Tate表示$$\alpha_{\text{HT}}(V) : B_{\text{HT}} \otimes_K \mathbf{D}_{\text{HT}}(V) \longrightarrow B_{\text{HT}} \otimes_{\mathbb{Q}_p}V$$是同构. 如果是张量积上 $B_{\text{HT}}$ 的分次项 $C$ 则限制这个同构得到嵌入$$C\otimes _K\operatorname{gr}^i \mathbf{D}_{\text{HT}}(V)\hookrightarrow  C(i)\otimes _{\mathbb{Q}_p}V$$将 $V_1,V_2$ 各自对应的两个上述嵌入在 $C$ 上张量积, 就得到单射$$C \otimes_K \left( \text{gr}^i \mathbf{D}_{\text{HT}}(V_1) \otimes_K \text{gr}^j \mathbf{D}_{\text{HT}}(V_2) \right) \hookrightarrow C(i+j) \otimes_{\mathbb{Q}_p} (V_1 \otimes_{\mathbb{Q}_p} V_2)$$由于 $C^{G_K}=K$ , 两侧同取 $G_K$-不变量就得到单射$$\mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V_1) \otimes_K \mathrm{gr}^j \mathbf{D}_{\mathrm{dR}}(V_2) \to  \mathrm{gr}^{i+j} \mathbf{D}_{\mathrm{dR}}(V_1 \otimes V_2)$$

它给出了对所有 $i \in \mathbb{Z}$ 的单射：$$\mathrm{gr}^i (\mathbf{D}_{\mathrm{dR}}(V_1) \otimes \mathbf{D}_{\mathrm{dR}}(V_2)) \hookrightarrow \mathrm{gr}^i \mathbf{D}_{\mathrm{dR}}(V_1 \otimes V_2)$$考虑到维数等式 $\dim_K \mathbf{D}_{\mathrm{dR}}(V_1) \otimes \mathbf{D}_{\mathrm{dR}}(V_2) = \dim_K \mathbf{D}_{\mathrm{dR}}(V_1 \otimes V_2)$，这个单射在每一个分量上都必然是 $K$-向量空间的同构。这便完成了对 (ii) 的证明。

**对于 (iii) 的证明**：结论由以下同构链直接得出：$$\begin{aligned}\mathbf{D}_{\mathrm{dR}}(V^*) &= (B_{\mathrm{dR}} \otimes_{\mathbb{Q}_p} \mathrm{Hom}_{\mathbb{Q}_p}(V, \mathbb{Q}_p))^{G_K} \\&\cong \mathrm{Hom}_{B_{\mathrm{dR}}}(B_{\mathrm{dR}} \otimes_{\mathbb{Q}_p} V, B_{\mathrm{dR}})^{G_K} \\&\cong \mathrm{Hom}_K((B_{\mathrm{dR}} \otimes_{\mathbb{Q}_p} V)^{G_K}, K) \\&= \mathbf{D}_{\mathrm{dR}}(V)^*\end{aligned}$$$\square$

### 上同调与延伸命题

**命题 6.35**：设 $i < j \in \mathbb{Z} \cup \{\pm\infty\}$。
- 如果 $i \ge 1$ 或 $j \le 0$，则：
  $$
  H^1(G_K, t^i B_{\mathrm{dR}}^+ / t^j B_{\mathrm{dR}}^+) = 0
  $$
- 如果 $i \le 0$ 且 $j > 0$，则映射 $x \mapsto x \cup \log \chi$ 给出了一个同构：
  $$
  H^0(G_K, t^i B_{\mathrm{dR}}^+ / t^j B_{\mathrm{dR}}^+)(\cong K) \xrightarrow{\sim} H^1(G_K, t^i B_{\mathrm{dR}}^+ / t^j B_{\mathrm{dR}}^+)
  $$

*证明*：
对于 $i, j$ 有限的情形，令 $n = j - i$，对 $n$ 进行归纳证明。
- 当 $n = 1$ 时，有 $t^i B_{\mathrm{dR}}^+ / t^{i+1} B_{\mathrm{dR}}^+ \simeq C(i)$。结论直接由命题 4.46 得出。
- 对于一般的 $n$，我们只需对短正合序列
  $$
  0 \longrightarrow C(i+n) \longrightarrow t^i B_{\mathrm{dR}}^+ / t^{n+i+1} B_{\mathrm{dR}}^+ \longrightarrow t^i B_{\mathrm{dR}}^+ / t^{i+n} B_{\mathrm{dR}}^+ \longrightarrow 0
  $$应用连续上同调的长正合序列，通过归纳递推即可完成证明。
通过对极限取极限，我们可以将其推广至无限的一般情况。 $\square$

**命题 6.36**：
1. 存在一个 $G_K$ 的 $p$-进表示 $V$，它是 $\mathbb{Q}_p(1)$ 被 $\mathbb{Q}_p$ 的非平凡扩张，即存在一个非分裂的 $p$-进表示短正合序列：
   $$
   0 \longrightarrow \mathbb{Q}_p \longrightarrow V \longrightarrow \mathbb{Q}_p(1) \longrightarrow 0
   $$
2. 该表示 $V$ 是一个 Hodge-Tate 表示。
3. 该表示 $V$ 不是一个 de Rham 表示。

*证明*：
1. **第一部分**：只需证明 $K = \mathbb{Q}_p$ 的情形（一般情形可通过基域扩张 $\mathbb{Q}_p \to K$ 得到）。在此情况下，
   $$
   \mathrm{Ext}^1(\mathbb{Q}_p(1), \mathbb{Q}_p) = H_{\mathrm{cont}}^1(G_{\mathbb{Q}_p}, \mathbb{Q}_p(-1)) \neq 0
   $$根据 Tate 局部对偶性，该群同构于 $H_{\mathrm{cont}}^0(G_{\mathbb{Q}_p}, \mathbb{Q}_p) = \mathbb{Q}_p$，因而它是非平凡的。故必然存在一个 $\mathbb{Q}_p(1)$ 被 $\mathbb{Q}_p$ 的非分裂扩张。
2. **第二部分**：与 $C(i)$（对于 $i \in \mathbb{Z}$）做张量积，我们得到正合序列：
   $$
   0 \longrightarrow C(i) \longrightarrow C(i) \otimes_{\mathbb{Q}_p} V \longrightarrow C(i+1) \longrightarrow 0
   $$取 $G_K$-不变部分，诱导了以下长正合序列：
   $$
   0 \longrightarrow C(i)^{G_K} \longrightarrow (C(i) \otimes_{\mathbb{Q}_p} V)^{G_K} \longrightarrow C(i+1)^{G_K} \longrightarrow H^1(G_K, C(i))
   $$根据命题 4.46：
   - (i) 若 $i \neq 0, -1$，由于 $C(i)^{G_K} = C(i+1)^{G_K} = 0$，有 $(V \otimes_{\mathbb{Q}_p} C(i))^{G_K} = 0$；
   - (ii) 若 $i = 0$，由于 $C^{G_K} = K$ 且 $C(1)^{G_K} = 0$，有 $(V \otimes_{\mathbb{Q}_p} C)^{G_K} = K$；
   - (iii) 若 $i = -1$，由于 $C(-1)^{G_K} = 0$，$C^{G_K} = K$ 且 $H^1(G_K, C(-1)) = 0$，我们有 $(C(-1) \otimes_{\mathbb{Q}_p} V)^{G_K} = K$。
   综上所述，$\dim_K \mathbf{D}_{\mathrm{HT}}(V) = 2 = \dim_{\mathbb{Q}_p} V$，因此 $V$ 是 Hodge-Tate 表示。
3. **第三部分**：该部分的证明相对复杂，具体推导将推迟到后文的推论 9.30 中完成。 $\square$

**注 6.37**：
任何 $\mathbb{Q}_p$ 被 $\mathbb{Q}_p(1)$ 的扩张均是 de Rham 表示。
事实上，从正合序列 $0 \to \mathbb{Q}_p(1) \to V \to \mathbb{Q}_p \to 0$ 出发，函子 $(B_{\mathrm{dR}}^+ \otimes_{\mathbb{Q}_p} -)^{G_K}$ 诱导了如下长正合序列：
$$
0 \longrightarrow (t B_{\mathrm{dR}}^+)^{G_K} = 0 \longrightarrow (B_{\mathrm{dR}}^+ \otimes_{\mathbb{Q}_p} V)^{G_K} \longrightarrow K \longrightarrow H^1(G_K, t B_{\mathrm{dR}}^+)
$$根据命题 6.35，有 $H^1(G_K, t B_{\mathrm{dR}}^+) = 0$。因此，自然映射
$$
\mathbf{D}_{\mathrm{dR}}(V) \longrightarrow (B_{\mathrm{dR}}^+ \otimes V)^{G_K} \longrightarrow K = \mathbf{D}_{\mathrm{dR}}(\mathbb{Q}_p)
$$是满射。由此可知 $\dim_K \mathbf{D}_{\mathrm{dR}}(V) = 2$，从而 $V$ 是 de Rham 表示。

---

## 6.2.5 补充说明（A digression）

设 $E$ 是任意特征为 0 的域，$X$ 是 $E$ 上的光滑投影（或甚至紧合）代数簇。我们有 de Rham 复形：
$$
\Omega_{X/E}^\bullet : \mathcal{O}_{X/E} \longrightarrow \Omega_{X/E}^1 \longrightarrow \Omega_{X/E}^2 \longrightarrow \dots
$$
对于 $m \in \mathbb{N}$，de Rham 上同调群 $H_{\mathrm{dR}}^m(X/E)$ 被定义为 $\Omega_{X/E}^\bullet$ 的第 $m$ 个超上同调（hyper cohomology）：
$$
H_{\mathrm{dR}}^m(X/E) := \mathbb{H}^m(\Omega_{X/E}^\bullet)
$$
这是一个配备了 Hodge 过滤的有限维 $E$-向量空间。

给定嵌入 $\sigma : E \to \mathbb{C}$，则 $X(\mathbb{C})$ 是一个解析流形。奇异上同调（singular cohomology）$H^m(X(\mathbb{C}), \mathbb{Q})$ 被定义为 $H_m(X(\mathbb{C}), \mathbb{Q})$ 的对偶，它是一个有限维 $\mathbb{Q}$-向量空间。Hodge 理论的比较定理断言存在如下规范同构（即经典 Hodge 结构）：
$$
\mathbb{C} \otimes_{\mathbb{Q}} H^m(X(\mathbb{C}), \mathbb{Q}) \simeq \mathbb{C} \otimes_E H_{\mathrm{dR}}^m(X/E)
$$

现在我们考虑其 $p$-进模拟。假设 $E = K$ 是一个 $p$-进域，且 $\ell$ 是一个素数。对于每个 $m \in \mathbb{N}$，平展上同调群 $H_{\text{ét}}^m(X_{\overline{K}}, \mathbb{Q}_\ell)$ 是一个 $G_K$ 的 $\ell$-进表示。当 $\ell \neq p$ 时，该表示是潜在半稳定的。当 $\ell = p$ 时，我们有：

**定理 6.38**（Tsuji [Tsu99], Faltings [Fal89]）：
$p$-进表示 $H_{\text{ét}}^m(X_{\overline{K}}, \mathbb{Q}_p)$ 是一个 de Rham 表示，并且存在一个带过滤 $K$-向量空间的规范同构：
$$
\mathbf{D}_{\mathrm{dR}}(H_{\text{ét}}^m(X_{\overline{K}}, \mathbb{Q}_p)) \simeq H_{\mathrm{dR}}^m(X/K)
$$
此外，通过如下识别：
$$
B_{\mathrm{dR}} \otimes_{\mathbb{Q}_p} H_{\text{ét}}^m(X_{\overline{K}}, \mathbb{Q}_p) = B_{\mathrm{dR}} \otimes_K H_{\mathrm{dR}}^m(X/K)
$$
引入了 **$p$-进 Hodge 结构** 的概念。

设 $\ell$ 是一个素数。令 $G_{\mathbb{Q}} = \mathrm{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})$。对于素数 $p$，设 $G_p = \mathrm{Gal}(\overline{\mathbb{Q}}_p/\mathbb{Q}_p)$，并设 $I_p$ 为其惯性群。选择一个嵌入 $\overline{\mathbb{Q}} \to \overline{\mathbb{Q}}_p$，则有包含关系 $I_p \subset G_p \to G_{\mathbb{Q}}$。

**定义 6.39**：一个 $G_{\mathbb{Q}}$ 的 $\ell$-进表示 $V$ 被称为 **几何表示**（geometric），如果满足：
- (i) $V$ 在有限个 $p$ 之外是未分歧的。即，设表示为 $\rho : G_{\mathbb{Q}} \to \mathrm{Aut}_{\mathbb{Q}_\ell}(V)$，则除有限个 $p$ 外，均有 $\rho(I_p) = 1$。
- (ii) 该表示在 $p = \ell$ 处是 de Rham 表示。

**猜想 6.40**（Fontaine-Mazur [FM95]）：几何表示恰好是来自于代数几何的表示。