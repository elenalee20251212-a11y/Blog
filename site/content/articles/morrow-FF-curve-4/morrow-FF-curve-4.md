---
title: "morrow-FF-curve-4"
date: 2026-08-10
articleId: morrow-FF-curve-4
category: miscellaneous/inbox/unclassified
---

### **4. DIAMONDS, D’APRÈS SCHOLZE（根据 Scholze 的 Diamond 理论）**

我们现在略微改变方向，介绍 Scholze 的 diamond（钻石）理论以及它与 Fargues-Fontaine 曲线的关系。这需要概述 adic 空间和 perfectoid 空间的一些方面。

---

#### **4.1. Huber pairs（Huber 对）**

由 Huber [26] 发展的 adic 空间理论是刚性解析几何（rigid analytic geometry）的一种方法，即一种考虑了诸如 $p$-进拓扑等拓扑结构的代数几何理论。

##### **Huber 环的定义**
一个拓扑环 $R$ 被称为 **Huber 环**，如果存在一个开子环 $R_0 \subseteq R$ 和一个 $R_0$ 的有限生成理想 $I$，使得 $R_0$ 上的子空间拓扑是 $I$-adic 拓扑。
允许 $R_0 = R$ 或 $I = 0$ 的可能性。需要强调的是，$R_0$ 和 $I$ 不是该数据的一部分：一般而言有很多种选择。

##### **Tate 环的定义**
构造 Huber 环最简单的方法是：从一个环 $R_0$ 和一个非零因子 $\pi \in R_0$ 开始，并令：

$$
R := R_0\left[\frac{1}{\pi}\right]
$$

拓扑基由如下形式的集合给定：

$$
f + \pi^m R_0 \quad (\text{其中 } f \in R, m \ge 0)
$$

这样的 Huber 环 $R$ 被称为 **Tate 环**。

##### **Tate 环的例子**
*   **例子 1**：给定一个由非阿基米德绝对值 $|\cdot| : K \to \mathbb{R}_{\ge 0}$ 赋予拓扑的域 $K$，则 $K$ 是 Tate 环。
*   **例子 2**：以下环也是 Tate 环：

$$
K\langle T \rangle := \left\{ \sum_{n \ge 0} a_n T^n : a_n \in K, a_n \to 0 \text{ 当 } n \to \infty \right\}
$$

##### **Huber 对与 Tate-Huber 对的定义**
Huber 通过指定 $R$ 中的哪些元素应当对应于有界函数来丰富该拓扑。这种丰富形式化为选择一个子环 $R^+ \subseteq R$，它在 $R$ 中是开的、整闭的，并且其中的每个元素 $f \in R^+$ 都是“幂有界”的（即当 $n \to \infty$ 时，序列 $f^n$ 不趋于无穷）。
数对 $(R, R^+)$ 被称为 **Huber 对**。如果 $R$ 是 Tate 环，则称为 **Tate-Huber 对**。

##### **关于 $R^+$ 的选择**
有时 $R^+ = R_0$，但其他时候这甚至是不允许的（因为 $R_0$ 可能不是整闭的）。另一方面，对于 $R^+$ 总有一个最大的可能选择，即 $R$ 中所有幂有界元素组成的子环。
在前述域 $K$ 的情况下，几乎总是取 $K^+ = \mathcal{O}_K$，因此简写 $K$ 代表 Tate-Huber 对 $(K, \mathcal{O}_K)$。
*(注 13：对于专家：我们忽略了该对可能不是 sheafy 的事实。)*

我们主要对 Tate-Huber 对感兴趣；简而言之，这些是构成我们几何对象底层的“环”（正如普通环构成 scheme 的底层一样）。

##### **同态的定义**
Tate-Huber 对之间的同态是一个连续映射，且其限制在 $+$ 子环上。

---

#### **4.2. Perfectoid pairs（Perfectoid 对）**

##### **完美的 Tate-Huber 对**
我们称一个 Tate-Huber 对 $S = (S, S^+)$ 是 **完美的**（perfect），如果 $S$ 是拓扑完备的，并且是一个完美 $\mathbb{F}_p$-代数（即 $S$ 的每个元素都有唯一的 $p$ 次方根）。

##### **Perfectoid Tate-Huber 对**
去掉特征 $p$ 的假设，一个 Tate-Huber 对 $T = (T, T^+)$ 被称为 **perfectoid** 的，如果 $T$ 是拓扑完备的，且存在一个元素 $\pi \in T^+$ 使得：
1.  $T^+$ 上的拓扑是 $\pi$-adic 拓扑；
2.  $p \in \pi^p T^+$；
3.  给定 $f \in T^+$, 存在 $g \in T^+$ 使得：

$$
f \equiv g^p \pmod{\pi T^+}
$$

这一假设意味着 $T^+$（从而 $T$）有许多 $p$ 次幂根。特征 $p$ 的 Tate-Huber 对是 perfectoid 的当且仅当它是完美的 [31, Prop. 3.5]。

##### **例子与倾斜形式化**
若 $C$（或 $F$）是完备非阿基米德域，则 $(C, \mathcal{O}_C)$（或 $(F, \mathcal{O}_F)$）是 perfectoid 的。
此外，以前为域解释的倾斜形式化可以推广到 perfectoid 对：给定一个 perfectoid Tate-Huber 对 $T = (T, T^+)$，其倾斜 $T^\flat = (T^\flat, T^{+\flat})$ 是一个完美的 Tate-Huber 对。这里的环 $T^\flat$ 和 $T^{+\flat}$ 分别定义为 $T$ 和 $T^+$ 中的相容 $p$ 幂序列集合，并赋予逐项乘法和逐项加法。

---

#### **4.3. Properties and examples of diamonds（Diamond 的性质与例子）**

正如任何环 $A$ 通过取素理想谱 $\mathrm{Spec}(A)$ 产生一个 scheme，任何 Tate-Huber 对 $R$ 都会产生一个 diamond 谱 $\mathrm{Spd}(R)$。虽然我们在 4.4 节之前不会定义 diamond 范畴，但我们仍可以陈述该过程的一些性质。

首先，除非我们施加适当的光滑或 perfectoid 假设，否则反变函子 $R \mapsto \mathrm{Spd}(R)$ 会丢失信息。特别是，以下反变函子是全忠实的：

$$
\mathrm{Spd} : \mathrm{Aff}\text{-}\mathrm{Perf} := \{\text{perfect Tate-Huber pairs}\} \longrightarrow \{\text{diamonds}\}
$$

##### **S-点与保守性**
给定一个 diamond $X$，其在完美 Tate-Huber 对 $S$ 上的点是集合：

$$
X(S) := \mathrm{Hom}_{\mathrm{diamonds}}(\mathrm{Spd}(S), X)
$$

这些点提供了一个保守的测试对象族：diamond 的态射 $f: X \to Y$ 是同构，当且仅当对所有完美 Tate-Huber 对 $S$，$X(S) \to Y(S)$ 都是双射。特别是，任何 diamond $X$ 均由其关联的点函子确定：

$$
X(-) : \mathrm{Aff}\text{-}\mathrm{Perf} \longrightarrow \mathrm{Sets}
$$

##### **例子：$\mathrm{Spd}(\mathbb{Q}_p)$ 的点函子**
与 diamond $\mathrm{Spd}(\mathbb{Q}_p) := \mathrm{Spd}(\mathbb{Q}_p, \mathbb{Z}_p)$ 关联的点函子为：

$$
S \mapsto \{ S \text{ 的 untilt 的等价类} \}
$$

这里 $S$ 的 **untilt** 是一个对 $(T, \iota)$，包含一个特征零的 perfectoid Tate-Huber 对 $T$（即 $T \supseteq \mathbb{Q}_p$）以及一个同构 $\iota : S \overset{\sim}{\to} T^\flat$。
*(注 14：我们滥用符号将“特征零的 untilt”简称为“untilt”。)*

因为 diamond 范畴具有乘积，我们可以形成新的 diamond $\mathrm{Spd}(\mathbb{Q}_p) \times \mathrm{Spd}(\mathbb{Q}_p)$，它的 $S$-点是 $S$ 的 untilt 对（等价类对）。

##### **更一般的点函子形式**
更一般地，给定任何 Tate-Huber 对 $R = (R, R^+)$，我们可以考虑 $S$ 在 $R$ 之上的 untilt：由定义，这样的 untilt 是一个三元组 $(T, \iota, f)$，包含一个 perfectoid Tate-Huber 对 $T$，一个同构 $\iota : S \overset{\sim}{\to} T^\flat$，以及一个同态 $f : R \to T$。与 $\mathrm{Spd}(R)$ 关联的点函子精确为：

$$
S \mapsto \{ S \text{ 在 } R \text{ 之上的 untilt 的等价类} \}
$$

利用这一点，我们可以验证：给定任何 perfectoid Tate-Huber 对 $T$，存在自然的 diamond 同等：

$$
\mathrm{Spd}(T) = \mathrm{Spd}(T^\flat)
$$

实际上，这可以由以下倾斜等价性推出：

**命题 4.1**： 设 $T$ 为 perfectoid Tate-Huber 对。则倾斜（tilting）诱导了范畴等价：

$$
\{\text{perfectoid Tate-Huber pairs over } T\} \overset{\sim}{\longrightarrow} \{\text{perfect Tate-Huber pairs over } T^\flat\}
$$

*   **证明**：这是理论中较容易的倾斜等价之一。实质上是通过在将 $W(\mathcal{O}_{C^\flat})$ 替换为 $W(T^+)$ 后，重复命题 5.1 的论证来证明的。

##### **代数簇的 Diamond 化**
任何 $\mathbb{Q}_p$ 上的代数簇 $X$ 都会产生一个 diamond $X^\diamond$。事实上，$X$ 是由各种 $\mathbb{Q}_p$-代数的谱构建的，我们可以通过 $p$-进完备化过程从中构建 Tate-Huber 对，然后粘合相关的 diamond 谱。映射 $X \mapsto X^\diamond$ 应当被视为倾斜的推广（适用于有限型对象，而倾斜本身仅适用于大型 perfectoid 对象）。且该过程在适当假设下不丢失信息：
*(注 15：将 $\mathbb{Q}_p$ 替换为任何完备扩域 $K$，任何 $K$ 上的刚性解析簇 $X$ 都允许一个 diamond 化 $X^\diamond \in \mathrm{Diam}$，且以下函子是全忠实的：)*

$$
\{\text{seminormal rigid analytic varieties over } K\} \longrightarrow \{\text{diamonds over } \mathrm{Spd}(K)\}, \quad X \mapsto X^\diamond
$$

*(半正规性假设是必要的，因为所有的 perfectoid 环都是半正规的，无法检测环与其半正规化之间的区别。为了获得以下命题，我们限制在光滑投影情形并应用 GAGA。)*

**命题 4.2**： 上述 diamond 化函子：

$$
\{\text{proper smooth varieties over } \mathbb{Q}_p\} \longrightarrow \{\text{diamonds over } \mathrm{Spd}(\mathbb{Q}_p)\}, \quad X \mapsto X^\diamond
$$

是全忠实的。

##### **备注 4.3（$B_{\mathrm{dR}}^+$-affine Grassmannian 仿射格拉斯曼流形）**
Diamond 理论还包含不源自代数簇的几何对象。其中最重要的是 $B_{\mathrm{dR}}^+$-affine Grassmannian。我们限制在 $\mathrm{GL}_n$ 的情况（同样适用于其他代数群）。
经典上已知商空间：

$$
\mathrm{GL}_n(\mathbb{C}((t))) / \mathrm{GL}_n(\mathbb{C}[[t]])
$$

它分类了 $\mathbb{C}((t))^n$ 内部的 $\mathbb{C}[[t]]$-格（lattices），具有 ind 复解析空间的结构；或者从代数观点看，以下函子由一个 ind 射影 scheme 表示（这在几何 Langlands 计划与几何 Satake 对应中是基础的）：

$$
\mathbb{C}\text{-}\mathrm{Algs} \ni A \mapsto \mathrm{GL}_n(A((t))) / \mathrm{GL}_n(A[[t]]) = \{ A[[t]]\text{-lattices inside } A((t))^n \}
$$

在 $p$-进算术几何中，$\mathbb{C}((t))$ 和 $\mathbb{C}[[t]]$ 的对应物是 $B_{\mathrm{dR}}$ 和 $B_{\mathrm{dR}}^+$。因此转而考虑商空间：

$$
\mathrm{GL}_n(B_{\mathrm{dR}}) / \mathrm{GL}_n(B_{\mathrm{dR}}^+)
$$

它分类了 $B_{\mathrm{dR}}^n$ 内的 $B_{\mathrm{dR}}^+$-格。$B_{\mathrm{dR}}$ 和 $B_{\mathrm{dR}}^+$ 隐式地依赖于 $F$ 和选定的 untilt $(C, \iota)$。
更一般地，给定任何完美 Tate-Huber 对 $S$ 和选定的 $C$ 之上的 untilt（即态射 $\mathrm{Spd}(S) \to \mathrm{Spd}(C)$），可以定义这些 de Rham 周期环的对应物，从而在 $\mathrm{Spd}(C)$ 上的完美 Tate-Huber 对范畴上定义经典的仿射格拉斯曼流形对应物。这个所谓的 **$B_{\mathrm{dR}}^+$-affine Grassmannian** 是一个 ind-diamond [32, §19]，有望出现在算术 Satake 对应中。

---

#### **4.4. Definition of diamonds via adic spaces（通过 adic 空间定义 diamond）**

##### **Adic 谱 $\mathrm{Spa}(R)$**
对每个 Huber 对 $R = (R, R^+)$，关联其 **adic 谱** $\mathrm{Spa}(R)$，它是 $R$ 上满足对所有 $f \in R^+$ 都有 $|f| \le 1$ 的连续绝对值 $|\cdot|$ 组成的拓扑空间。这些估值来自选择一个素理想 $\mathfrak{p} \subseteq R$ 并写下其商域 $R/\mathfrak{p}$ 上的绝对值。$\mathrm{Spa}(R)$ 通过考虑 $R$ 上的拓扑和 $R^+$ 的有界性，对素谱 $\mathrm{Spec}(R)$ 进行了细化。

正如代数簇和 scheme 是通过将环的谱粘合在一起构建的一样，adic 空间是通过粘合 Huber 对的 adic 谱构建的。对于 adic 空间，在适当的有限性假设下（Huber [26]）以及在更广泛的意义下（Scholze [31]），存在一套鲁棒的 étale 上同调理论。

##### **Perfectoid 空间**
一个 **perfectoid 空间** 是通过粘合 perfectoid Tate-Huber 对的 adic 谱构建的 adic 空间。可以证明，倾斜过程 $T \mapsto T^\flat$ 与粘合是相容的；因此，可以对任何 perfectoid 空间 $Z$ 关联其倾斜 $Z^\flat$，这是一个特征 $p$ 的 perfectoid 空间（即通过粘合完美 Tate-Huber 对的 adic 谱构建的 adic 空间）。

由于 perfectoid 空间相当大，最好用 **pro-étale 拓扑**（其中允许 étale 覆盖的无限极限）替代 étale 拓扑。Scholze 使用 perfectoid 空间上的这种 pro-étale 拓扑来定义 diamond：

**定义 4.4**： 设 $\mathrm{Perf}$ 表示特征为 $p$ 且配备了 pro-étale 拓扑的 perfectoid 空间的位（site）。一个 **diamond** $X$ 是 $\mathrm{Perf}$ 上的集合层，其形式为：

$$
X = Z/R
$$

其中 $Z, R \in \mathrm{Perf}$ 且 $R \hookrightarrow Z \times Z$ 是一个等价关系，使得两个投影态射 $R \to Z$ 是 pro-étale 的。（这里我们将 $Z$ 与 $\mathrm{Perf}$ 上的层 $\mathrm{Hom}_{\mathrm{Perf}}(-, Z)$ 等同，对 $R$ 亦然）。

*简而言之，diamond $X$ 是关于位 $\mathrm{Perf}$ 的代数空间。非正式地， $X$ 是通过沿 pro-étale 重叠粘合特征 $p$ 的 perfectoid 空间而获得的。*

**命题 4.5**： 设 $R$ 为 Tate-Huber 对。则：

$$
\mathrm{Spd}(R) : \mathrm{Perf} \longrightarrow \mathrm{Sets}, \quad Z \mapsto \{ Z \text{ 在 } \mathrm{Spa}(R) \text{ 之上的 untilt 的等价类} \}
$$

是定义 4.4 意义下的一个 diamond。

*   **证明**：通过向 $R$ 添加许多元素的 $p$ 次幂根，可以构造 $R$ 的 perfectoid 化 $R_\infty$，使得相应的 adic 谱映射 $\mathrm{Spa}(R_\infty) \to \mathrm{Spa}(R)$ 是一个 pro-étale 覆盖。
    命题 4.1 接着表明，当前命题中定义的 $\mathrm{Spd}(R)$ 是可表示层 $\mathrm{Hom}_{\mathrm{Perf}}(-, \mathrm{Spa}(R_\infty^\flat))$ 的商。剩下的只需验证我们是对一个 pro-étale 等价关系进行商运算，Scholze 通过建立关于 pro-étale 扭子的各种一般性结果完成了这一验证。

更一般地，命题 4.5 为任何解析 adic 空间 $X$（即由 Tate-Huber 对构建的空间）关联一个 diamond $X^\diamond$：

$$
X^\diamond : \mathrm{Perf} \longrightarrow \mathrm{Sets}, \quad Z \mapsto \{ Z \text{ 在 } X \text{ 之上的 untilt 的等价类} \}
$$

diamond $X^\diamond$ 应该被视为 $X$ 的广义倾斜。

---

#### **4.5. The Fargues–Fontaine curve as a diamond（作为 diamond 的 Fargues-Fontaine 曲线）**

我们现在回到与 $(\mathrm{Pf}_p)$ 中域 $F$ 关联的 Fargues-Fontaine 曲线 $X^{\mathrm{FF}} = X^{\mathrm{FF}}_F$。第 5 节中 $X^{\mathrm{FF}}$ 构造中出现的拓扑、收敛级数等，反映了存在一个密切相关的 adic 空间 $X^{\mathrm{FF}}$，称为 **adic Fargues-Fontaine 曲线**。

##### **Adic 曲线的构造**
为了构造它，令 $\mathcal{Y}$ 为从 $\mathrm{Spa}(A_{\mathrm{inf}}, A_{\mathrm{inf}})$ 中移除元素 $p, [\pi] \in A_{\mathrm{inf}}$ 的零点集得到的 adic 空间。这里 $A_{\mathrm{inf}}$ 在 §5.1 中定义，$\pi$ 是 $\mathfrak{m}_F$ 的任意非零元素，且 $A_{\mathrm{inf}}$ 上的拓扑为 $(p, [\pi])$-adic 拓扑。
正如我们将在 §5.2 中看到的拓扑空间 $|\mathcal{Y}|$，$\Delta_{\mathrm{inf}}$ 上的 Frobenius 诱导了 $\mathcal{Y}$ 上完全不连续的 Frobenius 作用，因此：

$$
X^{\mathrm{FF}} := \mathcal{Y}/\varphi^{\mathbb{Z}}
$$

是一个良定义的 adic 空间。

存在环ed空间态射 $X^{\mathrm{FF}} \to X^{\mathrm{FF}}$，在其下 $X^{\mathrm{FF}}$ 的行为类似于 scheme $X^{\mathrm{FF}}$ 的解析化。特别地，GAGA 定理断言这两个空间具有相同的向量丛和上同调 [27, Th. 8.7.7] [12, Th. 3.5]。
如 4.4 所述，存在一个与 adic Fargues-Fontaine 曲线相关的 diamond $X^{\mathrm{FF}\diamond}$。

**定理 4.6**： 存在自然的 diamond 同构：

$$
\mathcal{Y}^\diamond \cong \mathrm{Spd}(F) \times \mathrm{Spd}(\mathbb{Q}_p), \quad X^{\mathrm{FF}\diamond} \cong \mathrm{Spd}(F)/\varphi^{\mathbb{Z}} \times \mathrm{Spd}(\mathbb{Q}_p)
$$

*   **证明**：我们将简述第一个同构，第二个同构通过对 $F$ 上的 Frobenius 作用取商获得。
    根据 §4.3 中解释的点函子视角，我们展示对所有完美 Tate-Huber 对 $S$，$\mathcal{Y}^\diamond$ 和 $\mathrm{Spd}(F) \times \mathrm{Spd}(\mathbb{Q}_p)$ 自然具有相同的 $S$-点：
    *   根据 (7) 的全忠实性，$\mathrm{Spd}(F)$ 的 $S$-点就是 Tate-Huber 对的态射：

$$
f: (F, \mathcal{O}_F) \to (S, S^+)
$$

    *   根据 (8)，$\mathrm{Spd}(\mathbb{Q}_p)$ 的 $S$-点是 $S$ 的一个 untilt $(T, \iota)$。
    *   利用 $\mathcal{Y}_F$ 的定义和 diamond 化过程，可以证明 $\mathcal{Y}^\diamond$ 的 $S$-点是 $S$ 的一个 untilt $(T, \iota)$，以及一个连续同态 $A_{\mathrm{inf}} \to T^+$，且该同态可延拓为：

$$
A_{\mathrm{inf}}\left[\frac{1}{p}, \frac{1}{[\pi]}\right] \to T
$$

    因此，为了产生 diamond 映射 $\mathrm{Spd}(F) \times \mathrm{Spd}(\mathbb{Q}_p) \to \mathcal{Y}^\diamond$，我们应该说明，给定任何态射 $f: (F, \mathcal{O}_F) \to (S, S^+)$ 和 $S$ 的 untilt $(T, \iota)$，如何产生一个自然的连续同态 $A_{\mathrm{inf}} \to T^+$，其可延拓为 $A_{\mathrm{inf}}[\frac{1}{p}, \frac{1}{[\pi]}] \to T$。为此同态我们取：

```tikz {embedFontCss=true}
\begin{tikzcd}
A_{\mathrm{inf}} = W(\mathcal{O}_F) \arrow[r, "W(f)"] & W(S^+) \arrow[r, "\cong"] & W(T^{+\flat}) \arrow[r, "\theta_T"] & T^+
\end{tikzcd}
```

    其中第一支箭头由 $f$ 诱导，同构由 $\iota$ 诱导，而 $\theta_T$ 映射是命题 5.1 中 Fontaine 映射的推广。（实际上，这整个构造与命题 5.1 的论证基本相同，只是现在用 diamond 语言表述）。
    反之，每一个这样的同态 $A_{\mathrm{inf}} \to T^+$ 都可以通过这种方式构造（由 Witt 向量的普遍性质），这意味着 diamond 的映射是一个同构。

##### **相对 Fargues-Fontaine 曲线**
Fargues 和 Fontaine 的工作更一般地适用于条件“$F$ 是完美的”而非“$F$ 是代数闭的”。利用 perfectoid 空间和 diamond，对于特征 $p$ 的任何 perfectoid 空间 $Z$，存在关联的 Fargues-Fontaine “关于 $\mathbb{Z}$ 的相对曲线”：

$$
X^{\mathrm{FF}}_Z = \mathcal{Y}_Z/\varphi^{\mathbb{Z}}
$$

对象 $\mathcal{Y}_Z$ 和 $X^{\mathrm{FF}}_Z$ 依然是 adic 空间，其关联的 diamond 满足前述命题的类似公式。
