---
title: "FF-curve-report"
date: 2026-08-17
articleId: FF-curve-report
category: miscellaneous/inbox/unclassified
---

## Diamonds

设 $A$ 是一个交换环。仿射概形 $\operatorname{Spec}(A)$ 可以用它的“点函子”来理解：它对另一个交换环 $R$ 赋予集合 $\operatorname{Hom}(A,R)$，其中的元素就是 $R$ 上的 $A$-代数结构。当 $A=\mathbb Z$ 或 $A=\mathbb Q$ 时，这个函子并不太有内容：每个交换环都唯一地成为一个 $\mathbb Z$-代数，而至多只有一个 $\mathbb Q$-代数结构。

**启发式观点（Scholze）**：设 $C$ 是一个特征为 $p$ 的代数闭完备赋值域。那么$$\{\text{Untilts of }C\}/\simeq$$是 $\operatorname{Spec}(\mathbb Z)$ 的 $C$-值点集合的一个良好替代物。类似地，$$\{\text{Characteristic zero untilts of }C\}/\simeq$$是 $\operatorname{Spec}(\mathbb Q)$ 的 $C$-值点集合的一个良好替代物。

这个思想的一个优点是，它使我们可以以非平凡的方式理解诸如$$\operatorname{Spec}(\mathbb Z)\times\operatorname{Spec}(\mathbb Z)$$这样的乘积。我们不再取概形范畴中的乘积（那样不会得到有趣的对象），而是应用启发式观点 9：如果 $C$ 是一个特征为 $p$ 的代数闭完备赋值域，那么我们应当把 $\operatorname{Spec}(\mathbb Z)\times\operatorname{Spec}(\mathbb Z)$ 的“$C$-值点”看成对应于 $C$ 的 untilt 对。这不同于启发式观点 9 对 $\operatorname{Spec}(\mathbb Z)$ 本身的解释：$C$ 只有一个 $\mathbb Z$-代数结构，却有许多不同的 untilt。

为了有效利用这个思想，我们需要回答如下问题：

**问题 10**：设 $C$ 是一个特征为 $p$ 的代数闭完备赋值域。关于 $C$ 的所有 untilt，可以说些什么？如何对它们进行分类？

上面已经观察到，在同构意义下，$C$ 只有一个特征为 $p$ 的 untilt，即域 $C$ 自身。因此，我们将注意力限制在特征为零的 untilt 上。注意，由于 $C$ 是一个特征为 $p$ 的完美域，映射 $x\mapsto x^p$ 诱导出 $C$ 的一个自同构，称为 Frobenius 映射，记为$$\varphi_C:C\longrightarrow C.$$如果 $(K,\iota)$ 是 $C$ 的任意一个 untilt，那么可以构造 untilt 族$$\{(K,\varphi_C^n\circ\iota)\}_{n\in\mathbb Z}.$$当 $K$ 的特征为零时，这些 untilt 两两不同构，但仍应在某种意义下视为“相同”。因此，问题 10 可以改写为：

**问题 11**：设 $C$ 是一个特征为 $p$ 的代数闭完备赋值域。关于商集$$\frac{\{\text{Isomorphism classes of characteristic zero untilts of }C\}}{\varphi_C^{\mathbb Z}}$$可以说些什么？

我们已知有FF曲线 $X=X_{\mathrm{FF}}^F$ 和对应 

**定理 (Fargues-Fontaine)**：设 $C$ 是一个特征为 $p$ 的代数闭完备赋值域。存在一个 Dedekind 概形 $X$，并且存在一个双射
```tikz {embedFontCss=true}
\begin{tikzcd}[row sep=large]
\{\text{Closed points }x\in X\}
  \arrow[d, "\sim"']\\
\{\text{Isomorphism classes of characteristic zero untilts of }C\}/\varphi_C^{\mathbb Z}
\end{tikzcd}
```
对于每个闭点 $x\in X$，与之对应的 $C$ 的 untilt 可以辨认为 $X$ 在 $x$ 处的剩余域 $\kappa(x)$。定理 12 中的概形 $X$ 称为 **Fargues-Fontaine 曲线**。

接下来我们希望提过上述启发式观点, 定义类似于概形的 diamond 谱. 为了陈述 diamond 谱的性质, 我们需要先说一下 Tate-Huber 对的概念. 

Tate-Huber 对来自adic space理论, 形如 $\underline{R}=(R,R^+)$ . 经典的例子包括 $(K,\mathcal{O}_K)$ , $K$ 是完备非阿基米德赋值域. 正如任何环 $A$ 通过取素谱 $\mathrm{Spec}(A)$ 产生一个 scheme，任何 Tate-Huber 对 $\underline{R}$ 都会产生一个 diamond 谱 $\mathrm{Spd}(\underline{R})$。

我们称一个 Tate-Huber 对 $S = (S, S^+)$ 是 **完美的**（perfect），如果 $S$ 是拓扑完备的，并且是一个完美 $\mathbb{F}_p$-代数（即 $S$ 的每个元素都有唯一的 $p$ 次方根）。

去掉特征 $p$ 的假设，一个 Tate-Huber 对 $T = (T, T^+)$ 被称为 **perfectoid** 的，如果 $T$ 是拓扑完备的，且存在一个元素 $\pi \in T^+$ 使得：
1.  $T^+$ 上的拓扑是 $\pi$-adic 拓扑；
2.  $p \in \pi^p T^+$；
3.  给定 $f \in T^+$, 存在 $g \in T^+$ 使得：$$f \equiv g^p \pmod{\pi T^+}$$

特征 $p$ 的 Tate-Huber 对是 perfectoid 的当且仅当它是完美的. 若 $C$（或 $F$）满足 $(\mathrm{Pf}_0)$ ( 或 $(\mathrm{Pf}_p)$ ) ，则 $(C, \mathcal{O}_C)$（或 $(F, \mathcal{O}_F)$）是 perfectoid 的。

并且tilt诱导了范畴等价：$$\{\text{perfectoid Tate-Huber pairs over } \underline{T}\} \overset{\sim}{\longrightarrow} \{\text{perfect Tate-Huber pairs over } \underline{T}^\flat\}$$

回到 diamond 谱 $\operatorname{Spd}$ , 它将会满足如下一系列性质: 
1. 反变函子是全忠实的 ( 不过对一般情况, 反变函子 $\underline{R} \mapsto \mathrm{Spd}(\underline{R})$ 会丢失信息 ) ：$$\mathrm{Spd} : \mathrm{Aff}\text{-}\mathrm{Perf} := \{\text{perfect Tate-Huber pairs}\} \longrightarrow \{\text{diamonds}\}$$

2. 给定一个 diamond $X$，对完美 Tate-Huber 对 $\underline{S}$ 的 $\underline{S}$-值点是集合：$$X(\underline{S}) := \mathrm{Hom}_{\mathrm{diamonds}}(\mathrm{Spd}(\underline{S}), X)$$任何 diamond $X$ 均由其关联的点函子确定：$$X(-) : \mathrm{Aff}\text{-}\mathrm{Perf} \longrightarrow \mathrm{Sets}$$

3. 与 $\mathrm{Spd}(\underline{R})$ 的点函子为：$$\underline{S} \mapsto \{ \underline{S} \text{ 在 } \underline{R} \text{ 之上的 untilt 的等价类} \}$$特别的与 diamond $\mathrm{Spd}(\mathbb{Q}_p) := \mathrm{Spd}(\mathbb{Q}_p, \mathbb{Z}_p)$ 关联的点函子为：$$\underline{S} \mapsto \{ \underline{S} \text{ 的特征 0 untilt 的等价类} \}$$此外, 结合上述性质可知, 对任何 perfectoid Tate-Huber 对 $T$，存在自然的 diamond 同构：$$\mathrm{Spd}(\underline{T}) = \mathrm{Spd}(\underline{T}^\flat)$$

4. diamond 范畴具有乘积，例如 $\mathrm{Spd}(\mathbb{Q}_p) \times \mathrm{Spd}(\mathbb{Q}_p)$，它的 $\underline{S}$-点是 $\underline{S}$ 的 untilt 对（等价类对）

5. 任何 $\mathbb{Q}_p$ 上的代数簇 $X$ 都会产生一个 diamond $X^\diamond$ ( $X$ 是由各种 $\mathbb{Q}_p$-代数的谱粘合，可以通过 $p$-进完备化从中构建 Tate-Huber 对，然后粘合相关的 diamond 谱... ). 映射 $X \mapsto X^\diamond$ 应当被视为倾斜的推广（ 倾斜本身仅适用于很大的 perfectoid 对象）, 并且上述 diamond 化函子：
$$\{\text{proper smooth varieties over } \mathbb{Q}_p\}\longrightarrow \{\text{diamonds over } \mathrm{Spd}(\mathbb{Q}_p\}, \quad X \mapsto X^\diamond$$全忠实.

Diamond如此构造: 对每个 Huber 对 $\underline{R} = (R, R^+)$，关联其 **adic spectrum** $\mathrm{Spa}(\underline{R})$, 它是 $\operatorname{Spec} (R)$ 的细化. 正如代数簇和 scheme 是通过将环的谱粘合在一起构建的一样，adic 空间是通过粘合 Huber 对的 adic 谱构建的, 一个 **perfectoid 空间** 是通过粘合 perfectoid Tate-Huber 对的 adic 谱构建的 adic 空间. 

可以证明，倾斜过程 $T \mapsto T^\flat$ 与粘合是相容的；因此，可以对任何 perfectoid 空间 $Z$ 关联其倾斜 $Z^\flat$，这是一个特征 $p$ 的 perfectoid 空间（即通过粘合完美 Tate-Huber 对的 adic 谱构建的 adic 空间）。

**定义 4.4**： 设 $\mathrm{Perf}$ 表示特征为 $p$ 且配备了 pro-étale 拓扑的 perfectoid 空间的site。一个 **diamond** $X$ 是 $\mathrm{Perf}$ 上的集合层，其形式为：$$X = Z/R$$其中 $Z, R \in \mathrm{Perf}$ 且 $R \hookrightarrow Z \times Z$ 是一个等价关系，使得两个投影态射 $R \to Z$ 是 pro-étale 的。（这里我们将 $Z$ 与 $\mathrm{Perf}$ 上的层 $\mathrm{Hom}_{\mathrm{Perf}}(-, Z)$ 等同，对 $R$ 亦然）。

*简而言之，diamond $X$ 是关于site $\mathrm{Perf}$ 的代数空间。非正式地， $X$ 是通过沿 pro-étale 重叠粘合特征 $p$ 的 perfectoid 空间而获得的。*

**命题 4.5**： 设 $\underline{R}$ 为 Tate-Huber 对。则：$$\mathrm{Spd}(\underline{R}) : \mathrm{Perf} \longrightarrow \mathrm{Sets}, \quad Z \mapsto \{ Z \text{ 在 } \mathrm{Spa}(\underline{R}) \text{ 之上的 untilt 的等价类} \}$$是定义 4.4 意义下的一个 diamond。

更一般地，命题 4.5 为任何解析 adic 空间 $X$（即由 Tate-Huber 对构建的空间）关联一个 diamond $X^\diamond$：$$X^\diamond : \mathrm{Perf} \longrightarrow \mathrm{Sets}, \quad Z \mapsto \{ Z \text{ 在 } X \text{ 之上的 untilt 的等价类} \}$$diamond $X^\diamond$ 应该被视为 $X$ 的广义倾斜。

现在我们使用diamond道理处理FF curve: 令 $\mathcal{Y}$ 为从 $\mathrm{Spa}(A_{\mathrm{inf}}, A_{\mathrm{inf}})$ 中移除元素 $p, [\pi] \in A_{\mathrm{inf}}$ 的零点集得到的 adic 空间, 并且商去Frob得到 $\mathcal{X}^{\mathrm{FF}} := \mathcal{Y}/\varphi^{\mathbb{Z}}$ .

存在环化空间态射 $\mathcal{X}^{\mathrm{FF}} \to X^{\mathrm{FF}}$，在其下 $\mathcal{X}^{\mathrm{FF}}$ 的行为类似于 scheme $X^{\mathrm{FF}}$ 的解析化。特别地，GAGA 定理断言这两个空间具有相同的向量丛和上同调 [27, Th. 8.7.7] [12, Th. 3.5]。

通过观察点函子可以得到: 

**定理 4.6**： 存在自然的 diamond 同构：$$\mathcal{Y}^\diamond \cong \mathrm{Spd}(F) \times \mathrm{Spd}(\mathbb{Q}_p), \quad X^{\mathrm{FF}\diamond} \cong \mathrm{Spd}(F)/\varphi^{\mathbb{Z}} \times \mathrm{Spd}(\mathbb{Q}_p)$$

实际上这里第二个同构是第一个商去Frob的结果. 而第一个同构的点函子则直接按 $\operatorname{Spd}$ 给定的那些变成 $A_{\mathrm{inf}}$ 相关的抽象代数道理..