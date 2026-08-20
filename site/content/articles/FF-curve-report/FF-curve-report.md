---
title: "FF-curve-report"
date: 2026-08-17
articleId: FF-curve-report
category: miscellaneous/inbox/unclassified
---

## Diamonds

设 $A$ 是一个交换环。仿射概形 $\operatorname{Spec}(A)$ 可以用它的“点函子”来理解：它对另一个交换环 $R$ 赋予集合 $\operatorname{Hom}(A,R)$，其中的元素就是 $R$ 上的 $A$-代数结构。当 $A=\mathbb Z$ 或 $A=\mathbb Q$ 时，这个函子并不太有内容：每个交换环都唯一地成为一个 $\mathbb Z$-代数，而至多只有一个 $\mathbb Q$-代数结构。

**启发式观点（Scholze）**：设 $C$ 是一个特征为 $p$ 的代数闭完备赋值域。那么$$\{\text{Untilts of }C\}/\simeq$$是 $\operatorname{Spec}(\mathbb Z)$ 的 $C$-值点集合的一个良好替代物。类似地，$$\{\text{Characteristic zero untilts of }C\}/\simeq$$是 $\operatorname{Spec}(\mathbb Q)$ 的 $C$-值点集合的一个良好替代物。

这个思想的一个优点是，它使我们可以以非平凡的方式理解诸如$$\operatorname{Spec}(\mathbb Z)\times\operatorname{Spec}(\mathbb Z)$$这样的乘积。我们不再取概形范畴中的乘积（那样不会得到有趣的对象），而是应用启发式观点：如果 $C$ 是一个特征为 $p$ 的代数闭完备赋值域，那么我们应当把 $\operatorname{Spec}(\mathbb Z)\times\operatorname{Spec}(\mathbb Z)$ 的“$C$-值点”看成对应于 $C$ 的 untilt 对。

我们将通过这个观点, 来通过点函子定义diamond范畴以及diamond化. Diamond在这里是类似概形的事物.

> 我们这里将处理的基本代数对象是所谓 Tate-Huber 对. Tate-Huber 对形如 $\underline{T}=(T,T^+)$ , 可以理解为带有某些额外性质的交换环 $T$ , perfect / perfectoid 性质就像域的那样, tilting/untilting 的具体技术细节和域的情况也差不多. 具体细节见下文, 这里暂且先黑盒... 

具体来说 ( 更具体的在下文 ), 我们已知tilting给出特征 $0$ perfectoid 到特征 $p$ perfectoid 的等价. 但是具有某种 perfectoid 性质意味着这个对象相当大, 而我们想要一般的tilting的推广, 这就是所谓 diamond 化 $X\mapsto X^{\diamond}$ . 为任何解析 adic 空间 $X$（即由 Tate-Huber 对的 adic 谱 ( $\operatorname{Spa}$ ) 构建的空间）关联一个 diamond $X^\diamond$：$$X^\diamond : \mathrm{Perf} \longrightarrow \mathrm{Sets}, \quad Z \mapsto \{ Z \text{ 在 } X \text{ 之上的 untilt 的等价类} \}$$diamond $X^\diamond$ 应该被视为 $X$ 的广义倾斜。

这里的关系如下图所示. 我们希望对 Tate-Huber 对, 定义一个类似于 $\operatorname{Spec}$ 的函子 $\operatorname{Spd}$ , 它对任何 Tate-Huber 对有定义, 且限制在 perfect /特征 $0$ perfectoid上给出到 diamond 范畴的反变全忠实函子. 更一般的, 我们有将 Tate-Huber 对到解析adic空间的全忠实反变函子 $\operatorname{Spa}$ , 并且下图交换...

```tikz {embedFontCss=true}
\begin{tikzcd}[
    row sep=2cm,
    column sep=3.8cm
]
% 第一行
\{\text{Perfectoid},\, \mathrm{char} = 0\} 
    \arrow[r, "(-)^\flat"]
    \arrow[d, hook]
    \arrow[rd, "\text{fully faithful}"{sloped, pos=0.42}]
    & 
\{\text{Perfectoid},\, \mathrm{char} = p\} 
    \arrow[d, hook, "\mathrm{Spd}"'] 
\\
% 第二行
\{\text{Tate--Huber pair}\} 
    \arrow[r, "\mathrm{Spd}"]
    \arrow[d, hook, "\mathrm{Spa}"']
    & 
\mathrm{Diam} 
\\
% 第三行
\{\text{analytic adic spaces}\} 
    \arrow[ru, "(-)^\diamond"']
    &
\end{tikzcd}
```
下面简单陈述一下diamond的几条重要性质. 对 Tate-Huber 对 $\underline{R}$ , $\underline{R}$ 上的 Tate-Huber 对 $\underline{T}$ 是 Tate-Huber对, 且带有映射 $\underline{R}\to \underline{T}$ ( 它就像 $\underline{R}$-代数一样 ) . $\underline{S}$ 的一个untilt $\underline{T}$ 是 Tate-Huber 对配上同构 $\iota:\underline{T}^{\flat}\to \underline{S}$ .

1. 反变函子$$\mathrm{Spd} : \mathrm{Aff}\text{-}\mathrm{Perf} := \{\text{perfect Tate-Huber pairs}\} \longrightarrow \{\text{diamonds}\}$$全忠实 ( 上面说过这个 )
2. 与 $\mathrm{Spd}(\underline{R})$ 的点函子为：$$\underline{S} \mapsto \{ \underline{S} \text{ 在 } \underline{R} \text{ 之上的 untilt 的等价类} \}$$特别的与 diamond $\mathrm{Spd}(\mathbb{Q}_p) := \mathrm{Spd}(\mathbb{Q}_p, \mathbb{Z}_p)$ 关联的点函子为：$$\underline{S} \mapsto \{ \underline{S} \text{ 的特征 0 untilt 的等价类} \}$$
3. 此外, 给定一个 diamond $X$，对完美 Tate-Huber 对 $\underline{S}$ 的 $\underline{S}$-值点是集合：$$X(\underline{S}) := \mathrm{Hom}_{\mathrm{diamonds}}(\mathrm{Spd}(\underline{S}), X)$$任何 diamond $X$ 均由其限制在 $\mathrm{Aff}\text{-}\mathrm{Perf}$ 的点函子确定：$$X(-) : \mathrm{Aff}\text{-}\mathrm{Perf} \longrightarrow \mathrm{Sets}$$

-----------------

回忆, 设 $F$ 是一个特征为 $p$ 的代数闭完备赋值域, 我们已知有FF曲线 $X^{\mathrm{FF}}=X_{\mathrm{FF}}^F$ 和对应 

**定理 2.3 (Fargues-Fontaine)**：存在一个完备曲线 ( Dedekind 概形 ) $X^{\mathrm{FF}}$，其闭点与 $|Y_F|/\varphi^{\mathbb{Z}}$ 存在自然双射。对于每个闭点 $x\in X^{\mathrm{FF}}$，与之对应的 $F$ 的 untilt 可以辨认为 $X^{\mathrm{FF}}$ 在 $x$ 处的剩余域 $\kappa(x)$。定理中的概形 $X^{\mathrm{FF}}$ 称为 **Fargues-Fontaine 曲线**。

通过Diamond道理, 可以给这个对应以一种更好的解释. 回忆 $A_{\mathrm{inf}}=W(\mathcal{O}_F)$ , 令 $\mathcal{Y}$ 为从 $\mathrm{Spa}(A_{\mathrm{inf}}, A_{\mathrm{inf}})$ 中移除元素 $p, [\pi] \in A_{\mathrm{inf}}$ 的零点集得到的 adic 空间 ( $\pi$ 是任取的 $\mathfrak{m}_F$ 中非零元 ), 某种意义上它对应于环 $A_{\mathrm{inf}}\left[ \frac{1}{p},\frac{1}{[\pi]} \right]$ . 对 $\mathcal{Y}$ 商去Frob得到 $\mathcal{X}^{\mathrm{FF}} := \mathcal{Y}/\varphi^{\mathbb{Z}}$ .

存在环化空间态射 $\mathcal{X}^{\mathrm{FF}} \to X^{\mathrm{FF}}$，在其下 $\mathcal{X}^{\mathrm{FF}}$ 的行为类似于 scheme $X^{\mathrm{FF}}$ 的解析化。特别地，GAGA 定理断言这两个空间具有相同的向量丛和上同调 [27, Th. 8.7.7] [12, Th. 3.5], 比如说它们上面向量丛的分类是相同的...

**定理 4.6**： 存在自然的 diamond 同构：$$\mathcal{Y}^\diamond \cong \mathrm{Spd}(F) \times \mathrm{Spd}(\mathbb{Q}_p), \quad X^{\mathrm{FF}\diamond} \cong \mathrm{Spd}(F)/\varphi^{\mathbb{Z}} \times \mathrm{Spd}(\mathbb{Q}_p)$$

*证明*: 实际上这里第二个同构是第一个商去Frob的结果. 而第一个同构则来自点函子在 $\mathrm{Aff}\text{-}\mathrm{Perf}$ 上取值相同. 具体来说 $\underline{S}$-值各自如下
$$\begin{aligned}
\mathrm{Spd}(F)(\underline{S}) &= \{ f: (F, \mathcal{O}_F) \longrightarrow (S, S^+) \} \\
\mathrm{Spd}(\mathbb{Q}_p)(\underline{S}) &= \{ (\underline{T}, \iota) : \underline{S} \text{ 的 untilt} \} / \sim \\
\mathcal{Y}^\diamond(\underline{S}) &= \{ (\underline{T}, \iota, \theta) : \text{ untilt},\ \theta: A_{\mathrm{inf}} \to T^+ \text{ 延拓至 } A_{\mathrm{inf}}[\tfrac{1}{p}, \tfrac{1}{[\pi]}] \to T \} / \sim
\end{aligned}$$这个自然双射$$\mathcal{Y}^\diamond(S) \;\cong\; \mathrm{Spd}(F)(S) \times \mathrm{Spd}(\mathbb{Q}_p)(S)$$ 具体的构造如下:

**从右到左**: 给定 $\mathrm{Spd}(F)(\underline{S})\times \mathrm{Spd}(\mathbb{Q}_p)(\underline{S})$ 中元素, 可得连续同态： $$A_{\mathrm{inf}} = W(\mathcal{O}_F) \xrightarrow{\ W(f)\ } W(S^+) \xrightarrow{\ W(\iota)\ } W(T^{+\flat}) \xrightarrow{\ \theta_T\ } T^+$$ 该同态自然延拓到 $A_{\mathrm{inf}}\big[\frac{1}{p}, \frac{1}{[\pi]}\big] \to T$，从而确定了 $\mathcal{Y}^\diamond(S)$ 中的一个点。 

**从左到右**： 根据 Witt 向量的泛性质，任何满足条件的同态 $A_{\mathrm{inf}} \to T^+$ 都可以唯一还原出环同态 $f : (F, \mathcal{O}_F) \to (S, S^+)$ . $\square$

> 注: 这里我们有对应$$\operatorname{Hom}_{\text{cont, Ring}}(W(R), B) \;\cong\; \operatorname{Hom}_{\text{Ring}}(R, B^\flat)$$

的点函子则直接按 $\operatorname{Spd}$ 给定的那些性质变成 $A_{\mathrm{inf}}$ 相关的抽象代数道理, 通过 $A_{\mathrm{inf}}$ 作为Witt环的泛性质得到..

某种意义上这说明了, 作为一个几何对象，$\mathcal{Y}^{\diamond}$ (resp. $\mathcal{X}^{FF\diamond}$ ) 在整个空间上对"untilt 等价类的几何族" ( resp. 模 $\varphi^{\mathbb{Z}}$ 的 untilt 等价类) 进行了模空间参数化 ( 如果 $M$ 的点函子分类了某类对象, 也就是 $\operatorname{Hom} (S,M)$ 是 $S$ 上这类对象的族, 那么称 $M$ 是这类对象的模空间... )

--------------

一些具体废话. 为了陈述 diamond 谱的性质, 我们需要先说一下 Tate-Huber 对的概念. 

Tate-Huber 对来自adic space理论, 形如 $\underline{R}=(R,R^+)$ 并且满足一系列性质. 经典的例子包括 $(K,\mathcal{O}_K)$ , $K$ 是完备非阿基米德赋值域. 这里 $R^+$ 应当理解为 $R$ 中的"有界函数"

正如任何环 $A$ 通过取素谱 $\mathrm{Spec}(A)$ 产生一个 scheme，任何 Tate-Huber 对 $\underline{R}$ 都会产生一个 diamond 谱 $\mathrm{Spd}(\underline{R})$。

我们称一个 Tate-Huber 对 $S = (S, S^+)$ 是 **完美的**（perfect），如果 $S$ 是拓扑完备的，并且是一个完美 $\mathbb{F}_p$-代数（即 $S$ 的每个元素都有唯一的 $p$ 次方根）。

去掉特征 $p$ 的假设，一个 Tate-Huber 对 $T = (T, T^+)$ 被称为 **perfectoid** 的，如果 $T$ 是拓扑完备的，且存在一个元素 $\pi \in T^+$ 使得：
1.  $T^+$ 上的拓扑是 $\pi$-adic 拓扑；
2.  $p \in \pi^p T^+$；
3.  给定 $f \in T^+$, 存在 $g \in T^+$ 使得：$$f \equiv g^p \pmod{\pi T^+}$$

特征 $p$ 的 Tate-Huber 对是 perfectoid 的当且仅当它是完美的. 若 $C$（或 $F$）满足 $(\mathrm{Pf}_0)$ ( 或 $(\mathrm{Pf}_p)$ ) ，则 $(C, \mathcal{O}_C)$（或 $(F, \mathcal{O}_F)$）是 perfectoid 的。

某种意义上 perfectoid Tate-Huber 对应当理解为 perfect Tate-Huber 对的untilt. 具体来说, 对perfectoid的 $\underline{T}$ , tilt诱导了范畴等价：$$\{\text{perfectoid Tate-Huber pairs over } \underline{T}\} \overset{\sim}{\longrightarrow} \{\text{perfect Tate-Huber pairs over } \underline{T}^\flat\}$$

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







