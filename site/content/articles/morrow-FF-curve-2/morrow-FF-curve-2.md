---
title: "morrow-FF-curve-2"
date: 2026-08-10
articleId: morrow-FF-curve-2
category: miscellaneous/inbox/unclassified
---

### 2. 曲线的存在性 (EXISTENCE OF THE CURVE)

本节从两个角度来阐述 Fargues–Fontaine 曲线：
1. **§2.1 视角一**：将其视为完美域（perfectoid field）的 untilts 等价类的分类空间。
2. **§2.2 视角二**：通过其函数（由 $p$-进 Hodge 理论的周期环给出）以及一个无穷远点（对应另一个周期环）对其进行刻画。
3. **§2.3** 使用第二种方法推导并给出该曲线精确的图示（scheme-theoretic）定义。

#### 2.1 作为完美域 untilts 的空间

设 $C$ 是满足以下性质的域：
* **$(\mathrm{Pf}_0)$**：$C$ 是代数封闭的，包含 $\mathbb{Q}_p$，并且对于延伸了 $\mathbb{Q}_p$ 上通常 $p$-进绝对值的非阿基米德绝对值 $|\cdot|_C: C \to \mathbb{R}_{\ge 0}$ 是完备的。

例如，标准的物理选择是取 $C = \mathbb{C}_p$（即 $\mathbb{Q}_p$ 代数闭包的完备化）。

$C$ 的倾斜（tilt）$F = C^\flat$ 是一个具有类似性质但特征为 $p$ 的域：
* **$(\mathrm{Pf}_p)$**：$F$ 是代数封闭的，包含 $\mathbb{F}_p$，且对于非平凡的非阿基米德绝对值 $|\cdot|_F: F \to \mathbb{R}_{\ge 0}$ 是完备的。

域 $C$ 与其倾斜 $C^\flat$ 具有相同的剩余域，并存在一个乘性映射 $\#: C^\flat \to C$（称为 untilting map）。

倾斜 $C^\flat$ 作为集合的定义为：
$$
C^\flat := \{(a_0, a_1, \dots) : a_i \in C, a_i^p = a_{i-1}\}
$$
在 $C^\flat$ 中，乘法是逐项进行的，加法则定义为：
$$
\begin{aligned}
(a_0, a_1, \dots) + (b_0, b_1, \dots) &:= (c_0, c_1, \dots) \\
\text{其中 } c_i &:= \lim_{i\le n \to \infty} (a_n + b_n)^{p^{n-i}}
\end{aligned}
$$
其中极限在完备域 $C$ 中是收敛的。这些运算赋予了 $C^\flat$ 特征为 $p$ 的完美域结构。

untilting 映射 $\#: C^\flat \to C$ 是投影映射：
$$
\alpha = (a_0, a_1, \dots) \mapsto \alpha^\# := a_0
$$
由 $|\alpha|_{C^\flat} := |\alpha^\#|_C$ 诱导的绝对值使 $C^\flat$ 在其下完备，并通过 Hensel 引理可证其亦为代数封闭的。

**例子 2.1**：
1. 固定一个 $p$ 的兼容 $p$-次幂根序列（以及单位根序列），可以得到 $C^\flat$ 中的重要元素：
$$
\begin{aligned}
p^\flat &:= (p, p^{1/p}, p^{1/p^2}, \dots) \\
\varepsilon &:= (1, \zeta_p, \zeta_{p^2}, \dots)
\end{aligned}
$$
2. 若 $C = \mathbb{C}_p$，则 $C^\flat$ 同构于洛朗级数域 $\mathbb{F}_p((t))$ 的代数闭包的完备化，该同构满足 $t \mapsto p^\flat$。

反向的过程称为 untilting：给定满足 $(\mathrm{Pf}_p)$ 的域 $F$，寻找满足 $(\mathrm{Pf}_0)$ 且满足 $C^\flat \cong F$ 的域 $C$。
$F$ 的一个 **untilt** 定义为数对 $(C, \iota)$，其中 $C$ 满足 $(\mathrm{Pf}_0)$，且 $\iota: F \xrightarrow{\sim} C^\flat$ 是赋值域的同构。如果存在赋值域同构 $C \cong C'$ 使得其诱导的倾斜同构与 $\iota$ 和 $\iota'$ 兼容，则称两个 untilt 是等价的。

**定义 2.2**：记 $|Y_F|$ 为 $F$ 的 untilts 的等价类集合。

给定 $F$ 的一个 untilt $(C, \iota)$，可以通过绝对 Frobenius 自同构 $\varphi: F \xrightarrow{\sim} F$（$x \mapsto x^p$）构造新的 untilt $(C, \iota \circ \varphi^m)$ ($m \in \mathbb{Z}$)。
若存在 $m \in \mathbb{Z}$ 使得 $(C, \iota)$ 与 $(C', \iota' \circ \varphi^m)$ 等价，则称这两个 untilt 是 **Frobenius 等价** 的。其等价类的商空间为：
$$
|Y_F|/\varphi^{\mathbb{Z}}
$$
其中无限循环群 $\varphi^\mathbb{Z}$ 作用于 $|Y_F|$ 的方式为 $\varphi^m(C, \iota) := (C, \iota \circ \varphi^m)$。

**定理 2.3 (Fargues-Fontaine)**：存在一个完备曲线 $X_{\mathrm{FF}}^F$，其闭点与 $|Y_F|/\varphi^{\mathbb{Z}}$ 存在自然双射。此外，对应于给定 untilt $(C, \iota)$ 的点，其剩余域为 $C$。

简写：$|Y| = |Y_F|$，$X^{\mathrm{FF}} = X_{\mathrm{FF}}^F$。

#### 2.2 作为带无穷远点的周期环

Fargues–Fontaine 曲线可以通过将 $p$-进 Hodge 理论中的周期环谱进行紧化（添加一个无穷远点）来得到，类似于从复平面得到黎曼球面 $\mathbb{P}^1_{\mathbb{C}}$。

对于黎曼曲面 $X$（或光滑射影曲线），设 $\mathbb{C}(X)$ 为其亚纯函数域。对于 $f \in \mathbb{C}(X)$，其在 $x \in X$ 处的零点阶数 $\mathrm{ord}_x(f)$ 满足：
$$
\mathrm{ord}_x(f) := \min\{n : a_n \neq 0\} \in \mathbb{Z} \cup \{\infty\}
$$
其中 $f = \sum_{n \ge -\infty} a_n z_x^n$（$z_x$ 为 $x$ 处的局部坐标）。$\mathrm{ord}_x: \mathbb{C}(X) \to \mathbb{Z} \cup \{\infty\}$ 是一个估值（满足非阿基米德三角不等式 $\mathrm{ord}_x(f+g) \ge \min\{\mathrm{ord}_x(f), \mathrm{ord}_x(g)\}$ ），并满足经典的度数公式：
$$
\sum_{x \in X} \mathrm{ord}_x(f) = 0 \quad (\forall f \in \mathbb{C}(X))
$$

对于黎曼球面 $\mathbb{P}^1_\mathbb{C}$，除去无穷远点 $\infty$ 后可等同于复平面。其在无穷远点之外正则的比亚纯函数构成多项式代数 $\mathbb{C}[z]$。
该代数数据对为：代数 $\mathbb{C}[z]$ 及其分式域上的估值 $\mathrm{ord}_\infty: \mathbb{C}(z) \to \mathbb{Z} \cup \{\infty\}$。
此时度数公式写为：
$$
\mathrm{ord}_\infty(f) + \sum_{\mathfrak{p} \subseteq \mathbb{C}[z]} \mathrm{ord}_\mathfrak{p}(f) = 0 \quad (\forall f \in \mathbb{C}[z])
$$
其中 $\mathfrak{p}$ 跑遍 $\mathbb{C}[z]$ 的非零素理想（由 $z-x$ 生成，$\mathrm{ord}_x$ 即为关联的 $\mathfrak{p}$-进估值 $\mathrm{ord}_\mathfrak{p}$）。

由于 $-\mathrm{ord}_\infty = \mathrm{deg}: \mathbb{C}[z] \to \mathbb{N} \cup \{-\infty\}$ 是 $\mathbb{C}[z]$ 上的欧几里得函数，因而 $\mathbb{C}[z]$ 是主理想整环。
欧几里得函数 $\mathrm{deg}: B \to \mathbb{N} \cup \{-\infty\}$ 需满足：
* (E1) 对于 $f \in B$，$\mathrm{deg}(f) = -\infty \iff f = 0$；
* (E2) 对于非零 $f, g \in B$，$\mathrm{deg}(f) \le \mathrm{deg}(fg)$；
* (E3) 对于所有 $f, g \in B$ 且 $g \neq 0$，存在 $q, r \in B$ 满足 $f = gq + r$ 且 $\mathrm{deg}(r) < \mathrm{deg}(g)$。

由于 Fargues–Fontaine 曲线中度数的对应物无法满足欧几里得性质，因而引入了**几乎欧几里得函数**（almost Euclidean function），即用以下两个较弱的公理代替 (E3)：
* (E3') 对于 $f \in B$，若 $\mathrm{deg}(f) = 0$，则 $f \in B^\times$；
* (E3'') 对于 $f, g \in B$ 且 $\mathrm{deg}(g) \ge 1$，存在 $q, r \in B$ 满足 $f = gq + r$ 且 $\mathrm{deg}(r) \le \mathrm{deg}(g)$。

**定义 2.4**：一个**代数 $\mathbb{P}^1$** 是指数对 $(B, \nu)$，包含一个主理想整环 $B$ 和一个估值 $\nu: \mathrm{Frac}(B) \to \mathbb{Z} \cup \{\infty\}$，使得 $-\nu$ 是 $B$ 上的一个几乎欧几里得函数。若度数公式对所有 $f \in B$ 满足：
$$
\nu(f) + \sum_{\mathfrak{p} \subseteq B} \mathrm{ord}_\mathfrak{p}(f) = 0
$$
（其中 $\mathfrak{p}$ 跑遍 $B$ 的非零素理想，$\mathrm{ord}_\mathfrak{p}$ 表示关联的 $p$-进估值），则称该对是**完备的**（complete）。

典型例子即为 $(\mathbb{C}[z], \mathrm{ord}_\infty)$。

现在用 $p$-进 Hodge 理论中的晶体和 de Rham 周期环 $B_{\mathrm{crys}}$ 和 $B_{\mathrm{dR}}$（均为大型 $\mathbb{Q}_p$-代数）来近似刻画 Fargues-Fontaine 曲线。它们满足：
1. $B_{\mathrm{dR}}$ 是一个剩余特征为 0 的完备离散估值域（估值记为 $\nu_{\mathrm{dR}}$）；
2. $B_{\mathrm{crys}}$ 是 $B_{\mathrm{dR}}$ 的子环；
3. $B_{\mathrm{crys}}$ 装备了被称为 Frobenius 的内同态 $\varphi$。

设 $B_e := B_{\mathrm{crys}}^{\varphi=1}$ 为 $B_{\mathrm{crys}}$ 的 Frobenius 固定点环，并记 $\nu_{\mathrm{dR}}$ 为 $\nu_{\mathrm{dR}}$ 在 $\mathrm{Frac}(B_e) \subseteq B_{\mathrm{dR}}$ 上的限制。

**定理 2.5 (Fargues-Fontaine)**：数对 $(B_e, \nu_{\mathrm{dR}})$ 是一个完备的代数 $\mathbb{P}^1$。

这表明 $B_e$ 是主理想整环（更早由 Berger 证明其为 Bézout 环）。此外，$-\nu_{\mathrm{dR}}$ 在 $B_e$ 上是一个几乎欧几里得函数，这在代数上是周期环的基本确切序列的推论：
```tikz {embedFontCss=true}
\begin{tikzcd}
0 \arrow[r] & \mathbb{Q}_p \arrow[r] & B_e \arrow[r] & B_{\mathrm{dR}}/B_{\mathrm{dR}}^+ \arrow[r] & 0
\end{tikzcd}
```
其中 $B_{\mathrm{dR}}^+ := \{f \in B_{\mathrm{dR}} : \nu_{\mathrm{dR}}(f) \ge 0\}$。

**定义 2.6**：一个**曲线**（curve）是指一个正则、Noether、分离、连通、一维的图示（scheme）$X$；如果对 $X$ 函数域中的所有 $f$，度数公式 $\sum_{x\in X}\mathrm{ord}_x(f) = 0$ 成立，则称其为**完备的**。

对于一个完备曲线 $X$ 及其上的一个点 $\infty \in X$，使得 $X \setminus \{\infty\} = \mathrm{Spec}(B)$ 是仿射的：
* 完备性诱导了度数映射 $\mathrm{deg}: \mathrm{Pic}(X) \to \mathbb{Z}$。$B$ 是主理想整环当且仅当 $\mathrm{deg}: \mathrm{Pic}(X) \xrightarrow{\sim} \mathbb{Z}$ 是同构。
* 设 $\mathcal{O}_X(1) := \mathcal{O}_X(\infty)$ 且 $\mathcal{O}_X(k) := \mathcal{O}_X(1)^{\otimes k}$。
* $-\mathrm{ord}_\infty$ 在 $B$ 上定义一个欧几里得函数 $\iff$ 对所有 $k \ge -1$ 有 $H^1(X, \mathcal{O}_X(k)) = 0$（例如 $X = \mathbb{P}^1_{\mathbb{C}}$）。
* $-\mathrm{ord}_\infty$ 在 $B$ 上定义一个几乎欧几里得函数 $\iff$ 对所有 $k \ge 0$ 有 $H^1(X, \mathcal{O}_X(k)) = 0$（例如 $X = X^{\mathrm{FF}}$）。

综上，几何与上同调假设：
$$
\mathrm{deg}: \mathrm{Pic}(X) \xrightarrow{\sim} \mathbb{Z} \quad \text{且} \quad H^1(X, \mathcal{O}_X(k)) = 0 \quad (\forall k \ge 0)
$$
暗示了数对 $(B = H^0(X \setminus \{\infty\}, \mathcal{O}_X), \mathrm{ord}_\infty)$ 是一个完备的代数 $\mathbb{P}^1$。

通过 untilt 的选择对应一个优选点 $\infty \in X^{\mathrm{FF}}$。

**定理 2.7 (Fargues-Fontaine)**：$X^{\mathrm{FF}}$ 是一个完备曲线，它与点 $\infty$ 一起满足性质 (6)；且其关联的代数 $\mathbb{P}^1$ 为 $(B_e, \nu_{\mathrm{dR}})$。

需要注意的是，虽然全球正则函数环为 $H^0(X^{\mathrm{FF}}, \mathcal{O}_{X^{\mathrm{FF}}}) = \mathbb{Q}_p$，但该曲线不是 $\mathbb{Q}_p$ 上的有限类型（因为其余域均为代数封闭域，非 $\mathbb{Q}_p$ 的有限扩张）。

#### 2.3 曲线的第一种定义

在黎曼球面情况下，可以通过分次环同构从 $( \mathbb{C}[z], \mathrm{ord}_\infty = -\mathrm{deg} )$ 重构 $\mathbb{P}^1_{\mathbb{C}}$：
$$
\mathbb{C}[z_0, z_1] \xrightarrow{\sim} \bigoplus_{k \ge 0} \mathrm{Fil}_k \mathbb{C}[z] \quad (z_0, z_1 \mapsto z, 1 \in \mathrm{Fil}_1 \mathbb{C}[z])
$$
其中 $\mathrm{Fil}_k \mathbb{C}[z] := \{f \in \mathbb{C}[z] : \mathrm{deg}(f) \le k\}$。因而 $\mathbb{P}^1_{\mathbb{C}} \cong \mathrm{Proj}\left(\bigoplus_{k\ge 0} \mathrm{Fil}_k \mathbb{C}[z]\right)$。

在 Fargues-Fontaine 曲线中，定义 $\mathrm{Fil}_k B_e := \{b \in B_e : \nu_{\mathrm{dR}}(b) \ge -k\}$。
利用晶体周期环的经典性质：存在 $\mathbb{Q}_p$-子代数 $B_{\mathrm{crys}}^+ \subseteq B_{\mathrm{crys}}$ 和元素 $t \in B_{\mathrm{crys}}^+$ 满足：
* $B_{\mathrm{crys}} = B_{\mathrm{crys}}^+[1/t]$；
* $\varphi(t) = pt$ 且 $\nu_{\mathrm{dR}}(t) = 1$；
* 若 $b \in B_{\mathrm{crys}} \cap B_{\mathrm{dR}}^+$ 满足 $\varphi(b) = p^k b$ ($k \ge 0$)，则 $b \in B_{\mathrm{crys}}^+$（即 $B_{\mathrm{crys}}^{\varphi=p^k} \cap B_{\mathrm{dR}}^+ = B_{\mathrm{crys}}^{+\, \varphi=p^k}$）。

由此可建立双射 $\mathrm{Fil}_k B_e \xrightarrow{\sim} P^{\mathrm{FF}}_k := B_{\mathrm{crys}}^{+\, \varphi=p^k}$ （$b \mapsto bt^k$），并组合为分次环同构：
$$
\bigoplus_{k \ge 0} \mathrm{Fil}_k B_e \xrightarrow{\sim} P^{\mathrm{FF}} = \bigoplus_{k \ge 0} B^{+\, \varphi=p^k}_{\mathrm{crys}}
$$

**定义 2.8**：Fargues-Fontaine 曲线是指图示（scheme）$X^{\mathrm{FF}} := \mathrm{Proj}(P^{\mathrm{FF}})$。

**定理 2.9 (Fargues-Fontaine)**：分次环 $P^{\mathrm{FF}}$ 是分次唯一分解整环（graded factorial），其不可约元素次数为 1。即任意非零元素 $f \in P^{\mathrm{FF}}_k$ 均可唯一地（在不计顺序和差一个 $\mathbb{Q}_p^\times$ 倍数下）写成如下乘积：
$$
f = t_1 \cdots t_k \quad (\text{其中 } t_i \in P^{\mathrm{FF}}_1)
$$

这类似于 $\mathbb{P}^1_{\mathbb{C}}$ 的点对应于二维向量空间 $\mathrm{Fil}_1 \mathbb{C}[z] = \mathbb{C} + \mathbb{C}z$ 中的 $\mathbb{C}$-线：
$$
\mathbb{P}^1_{\mathbb{C}} \xrightarrow{\sim} (\mathrm{Fil}_1 \mathbb{C}[z])/\mathbb{C}^\times, \quad x \mapsto \begin{cases} z-x & x \in \mathbb{C} \\ 1 & x = \infty \end{cases}
$$
同理，$\mathrm{Proj}(P^{\mathrm{FF}})$ 的点也对应于无限维 $\mathbb{Q}_p$-向量空间 $P^{\mathrm{FF}}_1$ 中的 $\mathbb{Q}_p$-线。