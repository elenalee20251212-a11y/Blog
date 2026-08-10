---
title: "morrow-FF-curve-1"
date: 2026-08-10
articleId: morrow-FF-curve
category: miscellaneous/inbox/unclassified
---

这份报告简述了 Matthew Morrow 的 BOURBAKI 报告《THE FARGUES–FONTAINE CURVE AND DIAMONDS》前 6 页的内容。报告主要介绍了 Fargues–Fontaine 曲线的基础、其在 $p$ 进 Hodge 理论中的作用，以及它与 Scholze 的完美样空间（perfectoid spaces）和钻石（diamonds）理论的联系。

---


### 1. 引言 (INTRODUCTION)

本节概述了 Fargues–Fontaine 曲线的核心动机、定理结论以及它在 $p$ 进几何和钻石理论中的地位。

#### 1.0.1 文献背景 (The literature)
*   **基础文献**：Fargues 与 Fontaine 的专著 [16]。
*   **导引文献**：Colmez 的序言 [7]、Fargues 的 ICM 报告 [15]、Fargues-Fontaine 的 Durham 综述 [17]。
*   **钻石理论基础**：Scholze 的 Berkeley 课程讲义 [32]、技术基础 [31] 以及 ICM 报告 [29]。

#### 1.0.2 什么是 Fargues-Fontaine 曲线？
文章首先引入了数论中经典的类比：**整数环 $\mathbb{Z}$** 与 **复系数多项式环 $\mathbb{C}[z]$**。

**相似性**：两者都是主理想整环（PID），甚至是欧几里得整环。
*   $\mathbb{C}[z]$ 的欧几里得函数为多项式次数 $\deg$。
*   $\mathbb{Z}$ 的欧几里得函数为绝对值 $|\cdot|$。

**几何解释**：
*   $\mathbb{C}[z]$ 可视为黎曼球面 $\mathbb{P}^1_{\mathbb{C}}$ 上除 $\infty$ 之外无极点的正则函数。多项式次数即为该函数在 $\infty$ 处的极点阶数。
*   在算术几何中，$\mathbb{Z}$ 被视作素数集合上的函数，而实数域（或绝对值 $|\cdot|$）提供了一个“无穷远点”。然而，$\mathbb{Z}$ 的无穷远点不是代数对象，因此紧化集合 $\{\text{primes}\} \cup \{|\cdot|\}$ 无法构成一个代数几何对象。

**Fargues-Fontaine 的推广**：如果固定一个素数 $p$，并将 $\mathbb{Z}$ 上的算术几何限制在 $\mathbb{Z}_p$ 或 $\mathbb{Q}_p$ 上，这种类比可以变得更彻底。
*   $\mathbb{Z}$ 或 $\mathbb{C}[z]$ 被一个源自 $p$ 进 Hodge 理论的 $\mathbb{Q}_p$-代数 $B_e$ 代替（$B_e$ 是一个几乎欧几里得整环，其欧几里得结构源自一个无穷远点）。
*   与 $\mathbb{Z}$ 不同，在 $p$ 进情况下存在一条**真正的代数几何曲线 $X^{\text{FF}}_F$**。其在除去无穷远点后的正则函数环恰为 $B_e$。它的几何与同调性质与 $\mathbb{P}^1_{\mathbb{C}}$ 非常相似，编码了 $\mathbb{Q}_p$ 算术几何的重要信息。

#### 1.0.3 概要 (Overview)
通过 Scholze 的“倾斜与去倾斜（tilting-untilting）”对应，可以把特征 0 的 $\mathbb{Q}_p$ 几何与特征 $p$ 的 $\mathbb{F}_p$ 几何联系起来。设 $C_p$ 为 $\mathbb{Q}_p$ 代数闭包的 $p$ 进完备化（即 $p$ 进复数域），其倾斜（tilt） $F = C_p^\flat$ 是一个特征 $p$ 域。
*   **关键问题**：给定特征 $p$ 的域 $F = C_p^\flat$，是否存在除了 $C_p$ 以外的其他特征 0 域 $C \supseteq \mathbb{Q}_p$，使得 $C^\flat \cong F$？

**去倾斜空间**：令 $|Y_F|$ 表示去倾斜（untilts）对 $(C, \iota)$ 的等价类集合，其中 $C$ 是 $\mathbb{Q}_p$ 的合适扩展，$\iota: F \xrightarrow{\sim} C^\flat$ 是给定的同构。若引入 Frobenius 自同构 $\varphi: F \xrightarrow{\sim} F, x \mapsto x^p$，可得到一个更粗糙的等价关系：去倾斜关于 Frobenius 作用的等价类集合 $|Y_F|/\varphi^{\mathbb{Z}}$。

**定理 1.1**（Fargues–Fontaine）：
$$
集合\ |Y_F|/\varphi^{\mathbb{Z}}\ 是一个完备曲线\ X^{\text{FF}}_F\ 的底层点集。
$$

**无穷远点与周期环的粘合**：
*   域 $C_p$ 本身是 $F$ 的一个去倾斜，对应曲线上的一个特选点 $\infty \in X^{\text{FF}}_F$。
*   在 $X^{\text{FF}}_F$ 上除去 $\infty$ 之外的正则函数环，恰好等于 Fontaine 晶体周期环的 Frobenius 固定子环：$$B_e := B_{\text{crys}}^{\varphi=1}$$
*   在 $\infty$ 处的亚纯函数完备芽，恰好等于 Fontaine 的 de Rham 周期环 $B_{\text{dR}}$。
*   $p$ 进 Hodge 理论的基本短正合序列：$$0 \longrightarrow \mathbb{Q}_p \longrightarrow B_e \longrightarrow B_{\text{dR}}/B_{\text{dR}}^+ \longrightarrow 0$$这可以翻译为关于曲线 $X^{\text{FF}}_F$ 的一个简单的同调消去陈述。这与黎曼球面 $\mathbb{P}^1_{\mathbb{C}}$ 将 $\mathbb{C}[z]$ 与 $\mathbb{C}((1/z))$ 粘合在一起的方式极其相似。此外，在 $X^{\text{FF}}_F$ 上任何亚纯函数的零点与极点阶数之和为 $0$，这也体现了曲线的“完备性”。

**向量丛与 Grothendieck 定理的类比**：
*   在 $\mathbb{P}^1_{\mathbb{C}}$ 上，Grothendieck 定理指出每个向量丛均可分解为 $\bigoplus_{i=1}^m \mathcal{O}_{\mathbb{P}^1_{\mathbb{C}}}(\lambda_i)$，其中 $\lambda_i \in \mathbb{Z}$。
*   在 $X^{\text{FF}}_F$ 上，情况更复杂，存在不可分解的“有理扭曲” $\mathcal{O}_{X^{\text{FF}}_F}(\lambda)$，其中 $\lambda \in \mathbb{Q}$（仅在 $\lambda \in \mathbb{Z}$ 时它是线丛；通常其秩为 $\lambda$ 的分母）。

**定理 1.2**（Fargues–Fontaine）：设 $E$ 是 $X^{\text{FF}}_F$ 上的一个向量丛。则存在唯一的有理数序列 $\lambda_1 \ge \dots \ge \lambda_m$ 使得$E$ 同构于 $\bigoplus_{i=1}^m \mathcal{O}_{X^{\text{FF}}_F}(\lambda_i)$。


**定理 1.2 的应用**：该定理为 Fontaine 于 1988 年提出的“弱容许蕴含容许（weakly admissible implies admissible）”猜想提供了一个简短的几何证明（该猜想于 2000 年由 Colmez-Fontaine 首次解决）。其核心思想是将 $p$ 进 Hodge 理论中的线性代数对象（带过滤、带 Frobenius 的模）构造成 $X^{\text{FF}}_F$ 上的向量丛，并利用 Harder-Narasimhan 理论进行分析。

**钻石（Diamonds）的引入**：在钻石理论中，特征 $p$ 域 $F$ 的去倾斜对应于从 $\mathbb{Q}_p$ 到 $F$ 的“态射”（尽管在代数上不存在不同特征域之间的同构）。选择 $F$ 的两个去倾斜对应于一个从 $\mathbb{Q}_p \otimes \mathbb{Q}_p$ 到 $F$ 的态射（这里的 $\otimes$ 代表钻石的绝对张量积，其性质类似于算术几何中预测的 $\mathbb{Z} \otimes_{\mathbb{F}_1} \mathbb{Z}$，这在 $p$ 进几何中具有极其重要的应用）。

**定理 1.3**（Scholze）：
$$
与\ Fargues\text{--}Fontaine\ 曲线\ X^{\text{FF}}_F\ 关联的\ diamond\ 自然同构于以下乘积：
$$
$$
\operatorname{Spd}(F)/\varphi^{\mathbb{Z}} \times \operatorname{Spd}(\mathbb{Q}_p)
$$

*   **曲线的显式构造思路**：
    *   Fontaine 的无穷小周期环 $A_{\inf,F} := W(\mathcal{O}_F)$（即 $F$ 整数环的 Witt 向量环）可自然地视为 $|Y_F|$ 上的函数环。
    *   在 $|Y_F|$ 上引入拓扑结构，并将 $A_{\inf,F}$ 替换为更大的连续函数环 $B_F$。映射 $y \mapsto \{f \in B_F : f(y) = 0\}$ 将 $|Y_F|$ 标识为 $B_F$ 的闭极大理想。每一个极大的理想都是主理想，由一个 1 阶原始元（primitive element of degree one）生成，表明 $|Y_F|$ 在某种意义上是 1 维的。
    *   通过 Frobenius 作用 $\varphi$，可以构造 Weierstrass 乘积。对于每个点 $y \in |Y_F|$，可以构造一个函数 $t_y \in B_F$，满足 $\varphi(t_y) = p t_y$，它在 $\varphi^{\mathbb{Z}}(y)$ 处有单零点。
    *   若有其他函数 $g \in B_F$ 满足 $\varphi(g) = p g$，则商 $g/t_y$ 给出了 $|Y_F|/\varphi^{\mathbb{Z}}$ 上的亚纯函数。

**定理 1.4**（Fargues–Fontaine）：
$$
\begin{aligned}
&\text{(1) 分次环 } \bigoplus_{k \ge 0} B_F^{\varphi=p^k} \text{ 是分次析因的（graded factorial），且其不可约元的次数为 1。} \\
&\text{(2) 模式 } \operatorname{Proj}\left(\bigoplus_{k \ge 0} B_F^{\varphi=p^k}\right) \text{ 的闭点与集合 } |Y_F|/\varphi^{\mathbb{Z}} \text{ 自然地对应。}
\end{aligned}
$$

**定义 1.5**：
$$
Fargues\text{--}Fontaine\ 曲线定义为：
$$
$$
X^{\text{FF}}_F := \operatorname{Proj}\left( \bigoplus_{k \ge 0} B_F^{\varphi = p^k} \right)
$$
