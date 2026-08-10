---
title: "morrow-FF-curve-3"
date: 2026-08-10
articleId: morrow-FF-curve-3
category: miscellaneous/inbox/unclassified
---

### **3. 向量丛 (VECTOR BUNDLES)**

本节主要介绍 Fargues–Fontaine 曲线上的向量丛与 $p$-进 Galois 表示以及 $p$-进 Hodge 理论中出现的各类线性代数范畴之间的联系。

#### **3.1. Harder–Narasimhan 理论**

* **经典曲线上的 slope 理论**：
  设 $X$ 是一个黎曼曲面或代数闭域上的光滑射影曲线。对于 $X$ 上的任意向量丛 $E$，我们可以关联两个基本不变量：
  * **秩 (Rank)**：$\text{rk } E \in \mathbb{N}$
  * **度 (Degree)**：$\text{deg } E \in \mathbb{Z}$，定义为其行列式线丛的度。若将线丛 $L$ 对应于 Weil 除子 $\sum_{x \in X} n_x [x]$，则 $\text{deg } L := \sum_{x \in X} n_x$。
  
  由此定义 $E$ 的第三个不变量，即 **斜率 (slope)**：
  $$
  \mu(E) := \frac{\text{deg } E}{\text{rk } E} \in \mathbb{Q}
  $$
  若对于 $E$ 的每一个子丛 $E' \subseteq E$（此处指局部直和项），均满足 $\mu(E') \le \mu(E)$，则称 $E$ 是**半稳定的 (semi-stable)**。

**Theorem 3.1 (Harder–Narasimhan [25])**：Let $E$ be a vector bundle on $X$. Then $E$ possesses a unique filtration by sub-bundles
  $$
  0 = E_0 \subset E_1 \subset \cdots \subset E_m = E
  $$
  with the following two properties：
  * the quotient bundle $E_i/E_{i-1}$ is semi-stable for each $i = 1, \dots, m$, and
  * $\mu(E_1/E_0) > \cdots > \mu(E_m/E_{m-1})$.

**Harder-Narasimhan 理论的公理化推广**：
  设 $\mathcal{E}$ 为一个范畴，每个对象 $E \in \mathcal{E}$ 在同构意义下有两个关联的不变量 $\text{rk } E \in \mathbb{N}$ 和 $\text{deg } E \in \mathbb{Z}$，并定义斜率为 $\mu(E) := \text{deg } E / \text{rk } E$。为使该理论有效，需满足以下假设：
  * **(HN1)**：$\mathcal{E}$ 是一个确切范畴（exact category）。
  * **(HN2)**：秩函数 $\text{rk}$ 在满足特定假设下通过一个阿贝尔范畴进行分解。
  
  在这些假设下，$\mathcal{E}$ 中的任何对象都拥有唯一的 Harder–Narasimhan 过滤。

**3.1.1. 曲线上的向量丛**：若 $X$ 是光滑射影曲线，则向量丛范畴 $\text{Vect}(X)$ 在通常的秩与度定义下满足上述公理，从而恢复经典的 Harder–Narasimhan 理论。

**3.1.2. $\mathbb{P}^1_{\mathbb{C}}$ 上的向量丛**：设 $E$ 是 $\mathbb{P}^1_{\mathbb{C}}$ 上的向量丛。
* $E$ 在复平面 $\mathbb{C}$ 上的截面构成一个有限自由的 $\mathbb{C}[z]$-模 $M$。
* $E$ 在无穷远点 $\infty \in \mathbb{P}^1_{\mathbb{C}}$ 处的完备截面芽构成一个有限自由的 $\mathbb{C}[[z_{\infty}]]$-模 $M_{\infty}$（其中 $z_{\infty} = 1/z$）。
* $M_\infty$ 可视作有限维 $\mathbb{C}((z_{\infty}))$-向量空间 $M \otimes_{\mathbb{C}[z]} \mathbb{C}((z_{\infty}))$ 中的一个 $\mathbb{C}[[z_{\infty}]]$-格（lattice）。
  
由此建立如下范畴等价：
```tikz {embedFontCss=true}
\begin{tikzcd}
\text{Vect}(\mathbb{P}^1_{\mathbb{C}}) \arrow[r, "\sim"] & \text{Pairs}(M, M_{\infty})
\end{tikzcd}
```
其中 $\text{Pairs}(M, M_{\infty})$ 指满足 $M$ 为有限自由 $\mathbb{C}[z]$-模且 $M_{\infty}$ 是 $M \otimes_{\mathbb{C}[z]} \mathbb{C}((z_{\infty}))$ 中的 $\mathbb{C}[[z_{\infty}]]$-格的二元组。
  
在此等价下，向量丛的秩为 $\text{rk}_{\mathbb{C}[z]} M = \text{rk}_{\mathbb{C}[[z_{\infty}]]} M_{\infty}$，而其度则通过比较 $M$ 和 $M_{\infty}$ 的基底来确定。

* **3.1.3. $(B, \nu_\infty)$-对：代数 $\mathbb{P}^1$ 上的向量丛**：
  设 $(B, \nu)$ 为完备代数 $\mathbb{P}^1$。
  * **定义**：一个 $(B, \nu)$-对（或称 $(B, \nu)$ 上的向量丛）是指一个二元组 $(M, M_{\infty})$，其中 $M$ 是有限自由 $B$-模，$M_{\infty}$ 是有限维 $K_\nu$-向量空间 $M \otimes_B K_\nu$ 中的 $\mathcal{O}_\nu$-格。此处 $K_\nu$ 为 $K = \text{Frac}(B)$ 关于离散估值 $\nu$ 的完备化，$\mathcal{O}_\nu$ 为其整数环。
  * **性质**：其秩定义为 $M$ 的秩，其度通过比较 $M$ 和 $M_{\infty}$ 的基底定义。该范畴满足 Harder–Narasimhan 公理化框架。
  * **在 Fargues-Fontaine 曲线上的应用**：
    对于 Fargues-Fontaine 曲线的代数 $\mathbb{P}^1$，即 $(B_e, \nu_{dR})$，对应的二元组称为 $(B_e, \nu_{dR})$-对（即 Berger 引入的 B-对）。一个 $(B_e, \nu_{dR})$-对为 $(M, M_{dR})$，其中 $M$ 是有限自由 $B_e$-模，而 $M_{dR}$ 是 $M \otimes_{B_e} B_{dR}$ 内的 $B^+_{dR}$-格。

---

### **3.2. Fargues-Fontaine 曲线上的向量丛分类 (第1150-16至1150-17页)**

* **Proposition 3.2 ([16, §8.2.1.1])**：The category of $(B_e, \nu_{dR})$-pairs identifies with the category $\text{Vect}(X^{FF})$ of actual vector bundles on the Fargues–Fontaine curve.

* **3.1.4. 过滤向量空间 (Filtered vector spaces)**：
  给定域扩张 $L/F$，设 $\text{VectFil}_{L/F}$ 是一对 $(V, \text{Fil}^\bullet V_L)$ 组成的范畴，其中 $V$ 是有限维 $F$-向量空间，$\text{Fil}^\bullet$ 是 $V_L := V \otimes_F L$ 上的分离且穷竭的过滤。其秩与度定义为：
  $$
  \begin{aligned}
  \text{rk}(V, \text{Fil}^{\bullet} V_L) &:= \dim_F V \\
  \text{deg}(V, \text{Fil}^{\bullet} V_L) &:= \sum_{i \in \mathbb{Z}} i \dim_L(\text{gr}^i V_L)
  \end{aligned}
  $$
  该范畴满足 Harder–Narasimhan 公理化框架。

* **3.1.5. 晶体 (Isocrystals)**：
  设 $k$ 是特征为 $p$ 的完美域，$K_0 := \text{Frac}(W(k))$（其中 $W(k)$ 为 $k$ 的 $p$-典型 Witt 向量环）。Frobenius 自同构 $\sigma: k \to k, x \mapsto x^p$ 诱导了 $K_0$ 的自同构 $\sigma$。
  * **定义**：一个在 $k$ 上的晶体（isocrystal）是一个二元组 $(D, \varphi_D)$，其中 $D$ 是有限维 $K_0$-向量空间，$\varphi_D : D \to D$ 是一个 $\sigma$-半线性自同构（即满足 $\varphi_D(ad) = \sigma(a)\varphi_D(d)$）。
  * **秩与度**：
    $$
    \begin{aligned}
    \text{rk}(D, \varphi_D) &:= \dim_{K_0} D \\
    \text{deg}(D, \varphi_D) &:= -\text{deg}^{+} \det(D, \varphi_D)
    \end{aligned}
    $$
    其中对于秩为 1 的晶体 $(L, \varphi_L)$，取其基底 $e \in L$ 使得 $\varphi_L(e) = ae$ ($a \in K_0$)，则定义 $\text{deg}^+(L, \varphi_L) := \nu_p(a)$。
  * **例子 (晶体 $D_\lambda$)**：
    给定有理数 $\lambda = d/h$（其中 $d, h \in \mathbb{Z}, h > 0, (d,h)=1$），可以定义晶体 $(D_\lambda, \varphi_\lambda)$：设 $D_\lambda = K_0^h$，其基底为 $e_1, \dots, e_h$，自同构定义为：
    $$
    \varphi_{\lambda}(e_i) = \begin{cases} e_{i+1} & i = 1, \dots, h-1 \\ p^{-d} e_1 & i = h \end{cases}
    $$
    该晶体的秩为 $h$，度为 $d$，斜率为 $\lambda$。

* **Lemma 3.3**：Let $(D, \varphi_D) \in \varphi\text{-Mod}_{\mathbb{Q}_p}$ be an isocrystal over $\mathbb{F}_p$. Then
  $$
  ((B_{\text{crys}} \otimes_{\mathbb{Q}_p} D)^{\varphi=1}, B^{+}_{dR} \otimes_{\mathbb{Q}_p} D)
  $$
  is a $(B_e, \nu_{dR})$-pair, with rank and degree (as in §3.1.3) given by the rank and degree of the isocrystal $(D, \varphi_D)$ (as in §3.1.5).

* **向量丛分类定理**：
  通过 Lemma 3.3，每个晶体 $(D, \varphi_D)$ 函子性地对应一个 $X^{FF}$ 上的向量丛，记作 $\mathcal{E}(D, \varphi_D)$。特别地，对于晶体 $(D_\lambda, \varphi_\lambda)$，其对应的向量丛记作 $\mathcal{O}_{X^{FF}}(\lambda) := \mathcal{E}(D_\lambda, \varphi_\lambda)$，它的秩为 $h$，度为 $d$，斜率为 $\lambda$。

* **Theorem 3.4 (Fargues–Fontaine [16, Thm. 8.2.10])**：Let $E$ be a vector bundle on $X^{FF}$. Then there exists a unique sequence of rational numbers $\lambda_1 \ge \cdots \ge \lambda_m$ such that
  $$
  E \cong \bigoplus_{i=1}^m \mathcal{O}_{X^{FF}}(\lambda_i)
  $$

**Corollary 3.5**：
* (1) The functor $\mathcal{E}(-) : \varphi\text{-Mod}_{\mathbb{Q}_p} \to \text{Vect}(X^{FF})$ is essentially surjective.
* (2) Let $E$ be a vector bundle on $X$ and let $\lambda \in \mathbb{Q}$. Then $E$ is semi-stable of slope $\lambda$ if and only if it is isomorphic to $\mathcal{O}_{X^{FF}}(\lambda)^m$ for some $m \ge 1$.
* (3) The category of semi-stable, slope-zero vector bundles on $X^{FF}$ is equivalent to the category of finite dimensional $\mathbb{Q}_p$-vector spaces, via：
```tikz {embedFontCss=true}
\begin{tikzcd}
\text{Vect}^{\text{ss}, 0}(X^{FF}) \arrow[r, shift left, "E \mapsto H^0(X^{FF}\text{, } E)"] & \text{Vect}_{\mathbb{Q}_p} \arrow[l, shift left, "V \mapsto V \otimes_{\mathbb{Q}_p} \mathcal{O}_{X^{FF}}"]
\end{tikzcd}
```

**Remark 3.6**：
  利用 Theorem 3.4 可以证明 Fargues–Fontaine 曲线是几何单连通的。即 $X^{FF}$ 的任何有限平展覆盖均形如 $X^{FF} \otimes_{\mathbb{Q}_p} E$（其中 $E/\mathbb{Q}_p$ 是有限扩张）。因此其平展基本群为：
  $$
  \pi_1^{\text{ét}}(X^{FF}) = \text{Gal}(\bar{\mathbb{Q}}_p/\mathbb{Q}_p)
  $$

---

### **3.3. 在 p-进 Galois 表示中的应用 (第1150-18页)**

这一节展示了上述向量丛分类定理在 $p$-进 Galois 表示理论中的核心应用。

* **基本框架**：
  设 $K$ 为 $\mathbb{Q}_p$ 的扩张，$G_K = \text{Gal}(\bar{K}/K)$ 为其绝对 Galois 群。
  设 $K_0 = \text{Frac}(W(k)) \subseteq K$ 是 $K$ 的最大无分歧子扩张，其中 $k$ 为 $K$ 的剩余域。
  设 $\text{Rep}(G_K)$ 是 $G_K$ 在有限维 $\mathbb{Q}_p$-向量空间上的连续表示范畴。

* **Fontaine 的 $B$-容许表示形式**：
  设 $B$ 是一个（通常很大的）$\mathbb{Q}_p$-代数，带有 $G_K$-作用，且不变量子代数 $F = B^{G_K}$ 是一个域。
  对于任一 $p$-进 Galois 表示 $V \in \text{Rep}(G_K)$，定义 $F$-向量空间：
  $$
  D_B(V) := (B \otimes_{\mathbb{Q}_p} V)^{G_K}
  $$
  其中 $G_K$ 对偶地作用在张量积上。
  若满足：
  $$
  \dim_F D_B(V) = \dim_{\mathbb{Q}_p} V
  $$
  则称表示 $V$ 是 **$B$-容许的 (B-admissible)**。记所有 $B$-容许表示构成的子范畴为 $\text{Rep}_B(G_K)$。

**函子的性质与结构继承**：在 $B$ 满足 $G_K$-正则的公理化假设下，Fontaine 证明了下述函子是忠实的、确切的并且与张量积兼容：
```tikz {embedFontCss=true}
\begin{tikzcd}[column sep=6em]
\text{Rep}_B(G_K) \arrow[r, "D_B"] & \text{Vect}_F
\end{tikzcd}
```
如果代数 $B$ 额外带有某种与 $G_K$-作用兼容的结构（如分次、过滤、自同构等），则向量空间 $D_B(V)$ 也会形式化地继承这些结构。
例如，若 $\varphi$ 是 $B$ 的一个 $\mathbb{Q}_p$-和 $G_K$-线性的自同构，则 $\varphi \otimes 1$ 在 $D_B(V)$ 上定义了一个自同构，使得 $D_B$ 成为带有附加结构的函子：
```tikz {embedFontCss=true}
\begin{tikzcd}[column sep=6em]
\text{Rep}_B(G_K) \arrow[r, "D_B"] & \text{Vect}_F^{\text{str}}
\end{tikzcd}
```
该函子有望是完全忠实的。通过识别此函子的像，我们可以得到 $B$-容许 $p$-进 Galois 表示范畴的纯线性代数描述（这是 $p$-进 Hodge 理论的主要目标）。

* **Example 3.7**：
  * (1) 一个 $p$-进 Galois 表示 $V$ 被称为 **de Rham 表示**，如果它是 $B_{dR}$-容许的。由于 $B_{dR}$ 是一个完备离散估值域，它通过其估值获得一个天然的过滤。

以下为您整理的PDF中1150-18至1150-21页（共4页）的详细内容概述。本文档不遗漏任何定义、定理、引理、例子、公式以及关键的推导和证明步骤。

---

### **3.3. 在 $p$-进 Galois 表示中的应用 (续及完结)**

#### **背景与形式化描述**
设 $K$ 为 $\mathbb{Q}_p$ 的扩张，$G_K = \text{Gal}(\bar{K}/K)$ 为其绝对 Galois 群。
设 $K_0 = \text{Frac}(W(k)) \subseteq K$ 是 $K$ 的最大无分歧子扩张，其中 $k$ 为 $K$ 的剩余域（读者可设 $K = K_0 = \mathbb{Q}_p$）。
用 $\text{Rep}(G_K)$ 表示 $G_K$ 在有限维 $\mathbb{Q}_p$-向量空间上的连续表示范畴。

Fontaine 引入了周期环形式化方法：设 $B$ 是一个带有 $G_K$-作用的 $\mathbb{Q}_p$-代数，设其固定元子代数 $F = B^{G_K}$ 是一个域。
对于任意表示 $V \in \text{Rep}(G_K)$，定义 $F$-向量空间：
$$
D_B(V) := (B \otimes_{\mathbb{Q}_p} V)^{G_K}
$$
其中 $G_K$ 对角式作用在 $B \otimes_{\mathbb{Q}_p} V$ 上。
若满足：
$$
\dim_F D_B(V) = \dim_{\mathbb{Q}_p} V
$$
则称表示 $V$ 是 **$B$-容许的 (B-admissible)**。记所有 $B$-容许表示构成的子范畴为 $\text{Rep}_B(G_K)$。

在 $B$ 满足 $G_K$-正则的假设下，Fontaine 证明了以下函子是忠实的（且是确切的、与张量积兼容的）：
$$
D_B : \text{Rep}_B(G_K) \longrightarrow \{\text{有限维 } F\text{-向量空间}\}
$$
若 $B$ 带有与 $G_K$-作用兼容的附加结构（如分次、过滤、内同态等），则 $D_B(V)$ 形式化地继承这些结构。例如若 $\varphi$ 是 $B$ 的 $\mathbb{Q}_p$-且 $G_K$-线性的内同态，则 $\varphi \otimes 1$ 定义了 $B \otimes_{\mathbb{Q}_p} V$ 及 $D_B(V)$ 上的内同态。此时 $D_B$ 升级为：
$$
D_B : \text{Rep}_B(G_K) \longrightarrow \{\text{带附加结构的有限维 } F\text{-向量空间}\}
$$
这提供了将 $p$-进 Galois 表示转化为纯线性代数对象的途径。

* **Example 3.7**：
    * (1) 一个 $p$-进 Galois 表示 $V$ 被称为 **de Rham 表示**，若它是 $B_{dR}$-容许的。由于 $B_{dR}$ 是完备离散估值域，它带有由估值定义的天然过滤：
      $$
      \text{Fil}^k B_{dR} := \{b \in B_{dR} : \nu_{dR}(b) \ge k\}
      $$
      因为 $B_{dR}^{G_K} = K$，Fontaine 的形式化方法提供了一个忠实函子：
      $$
      D_{dR} : \text{Rep}_{dR}(G_K) \longrightarrow \{\text{有限维过滤 } K\text{-向量空间}\}, \quad V \mapsto (B_{dR} \otimes_{\mathbb{Q}_p} V)^{G_K}
      $$
    * (2) 一个 $p$-进 Galois 表示 $V$ 被称为 **晶体表示 (crystalline)**，若它是 $B_{crys}$-容许的。由于 $B_{crys}$ 配备了 Frobenius 内同态 $\varphi$ 且满足 $B_{crys}^{G_K} = K_0$，Fontaine 的形式化方法产生了一个忠实函子：
      $$
      D_{crys} : \text{Rep}_{crys}(G_K) \longrightarrow \varphi\text{-Mod}_{K_0}, \quad V \mapsto (B_{crys} \otimes_{\mathbb{Q}_p} V)^{G_K}
      $$
      在几何上，de Rham 表示（或晶体表示）对应光滑 $p$-进簇（或好归纳簇）的平展上同调。

#### **过滤晶体范畴**
上述单方面的嵌入（仅带过滤或仅带 Frobenius）并非满忠实的，也未完全确定其像。Fontaine 通过同时考虑过滤和 Frobenius 结构克服了这一困难。

* **定义 (过滤晶体范畴 $\varphi\text{-ModFil}_{K/K_0}$)**：
  该范畴的对象为三元组 $(D, \varphi_D, \text{Fil}^\bullet D_K)$，其中：
  * $D$ 是有限维 $K_0$-向量空间。
  * $\varphi_D : D \to D$ 是一个 $\sigma$-线性同构（即 $(D, \varphi_D) \in \varphi\text{-Mod}_{K_0}$）。
  * $\text{Fil}^\bullet$ 是 $D_K := D \otimes_{K_0} K$ 上的分离且穷竭的过滤（即 $(D, \text{Fil}^\bullet D_K) \in \text{VectFil}_{K/K_0}$）。
  
  该范畴的秩和度定义为两部分不变量之和：
  $$
  \begin{aligned}
  \text{rk}(D, \varphi_D, \text{Fil}^\bullet D_K) &:= \dim_{K_0} D \\
  \text{deg}(D, \varphi_D, \text{Fil}^\bullet D_K) &:= \text{deg}(D, \varphi_D) + \text{deg}(D, \text{Fil}^\bullet D_K)
  \end{aligned}
  $$
  基于此定义的 Harder–Narasimhan 理论编码了 Frobenius 结构与过滤结构之间的相互作用。

* **升级的晶体表示函子**：
  若 $V$ 是晶体表示，则 $V$ 也是 de Rham 的，且满足 $D_{dR}(V) = D_{crys}(V) \otimes_{K_0} K$。结合 Example 3.7 的两部分，可将 $D_{crys}$ 升级为：
  $$
  D_{crys} : \text{Rep}_{crys}(G_K) \longrightarrow \varphi\text{-ModFil}_{K/K_0}
  $$
  为证明该函子是满忠实的，可以写出显式的左逆函子：
  $$
  \begin{aligned}
  V_{crys} &: \varphi\text{-ModFil}_{K/K_0} \longrightarrow \text{Rep}_{crys}(G_K) \\
  (D, \varphi_D, \text{Fil}^\bullet D_K) &\mapsto \{v \in B_{crys} \otimes_{K_0} D : \varphi(v) = v \text{ 且 } v \in \text{Fil}^0(B_{dR} \otimes_K D_K)\}
  \end{aligned}
  $$

---

### **Fontaine 猜想（弱容许即容许）**

Fontaine 猜想：一个过滤晶体处于 $D_{crys}$ 的本质像中，当且仅当它是**弱容许的 (weakly admissible)**。
在上述基于 $\varphi\text{-ModFil}_{K/K_0}$ 的 Harder–Narasimhan 理论中，**弱容许**重合于：它是**半稳定的且斜率 (slope) 为零**。

由此，该猜想的解决建立了如下范畴等价：
```tikz {embedFontCss=true}
\begin{tikzcd}[column sep=6em]
D_{\text{crys}} : \text{Rep}_{\text{crys}}(G_K) \arrow[r, "\sim"] & \varphi\text{-ModFil}_{K/K_0}^{\text{w.a.}}
\end{tikzcd}
```
其中 $\text{w.a.}$ 表示弱容许过滤晶体的满子范畴。该定理最早由 Colmez–Fontaine 于 2000 年证明，Berger 于 2008 年给出了另一个证明。借助于 Fargues–Fontaine 曲线上的向量丛分类定理（Theorem 3.4），可以给出该猜想的一个极简几何证明：

* **Theorem 3.8 (Colmez–Fontaine)**：Fontaine’s above conjecture is true.

* **Proof**：
  在 §3.2 中，对任一晶体 $(D, \varphi_D) \in \varphi\text{-Mod}_{\mathbb{Q}_p}$ 分配了 $X^{FF}$ 上的一个向量丛 $\mathcal{E}(D, \varphi_D)$。更一般地，给定过滤晶体 $D = (D, \varphi_D, \text{Fil}^\bullet D_K) \in \varphi\text{-ModFil}_{K/K_0}$，可以验证：
  $$
  ((B_{\text{crys}} \otimes_{K_0} D)^{\varphi=1}, \text{Fil}^0(B_{dR} \otimes_K D_K))
  $$
  是一个 $(B_e, \nu_{dR})$-对。因此，它在 $X^{FF}$ 上定义了一个向量丛 $E := \mathcal{E}(D, \varphi_D, \text{Fil}^\bullet D_K)$，且 $E$ 与 $D$ 拥有相同的秩和度。
  
  现假设 $D$ 是弱容许的（即在 $\varphi\text{-ModFil}_{K/K_0}$ 中是半稳定且斜率为零的）。由定义和曲线上的 Čech 上同调计算可得：
  $$
  H^0(X^{FF}, E) = (B_{\text{crys}} \otimes_{K_0} D)^{\varphi=1} \cap \text{Fil}^0(B_{dR} \otimes_K D_K) = V_{\text{crys}}(D)
  $$
  因为 $D$ 半稳定且斜率为零，对应的向量丛 $E$ 亦是半稳定且斜率为零的（此结论可通过文献验证）。
  由关于斜率为 0 向量丛的 Corollary 3.5 可知，$E$ 是常向量丛，即满足：
  $$
  H^0(X^{FF}, E) \otimes_{\mathbb{Q}_p} \mathcal{O}_{X^{FF}} \xrightarrow{\sim} E
  $$
  由此可得维数相等：
  $$
  \dim_{\mathbb{Q}_p} V_{\text{crys}}(D) = \dim_{K_0} D
  $$
  该维数相等性强制要求 $D$ 与 $D_{crys}(V_{crys}(D))$ 一致，从而完成了证明。

* **Remark 3.9**：更一般地，上述论证描述了半稳定 $p$-进 Galois 表示（带有单群算子 $N$ 的弱容许过滤晶体）的对应范畴。这同样由 Fontaine 猜想并由 Colmez–Fontaine 首次证明。
