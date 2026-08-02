---
title: Notes-on-p-adic-Hodge-Theory-3
articleId: notes-on-p-adic-hodge-theory-3
category: mathematics/number-theory/p-adic-hodge-theory
order: 3
---

title: Notes on p-adic Hodge Theory 3
date: 2026-07-17 19:13:17
tags:

## 3.3 特征 $p > 0$ 域的 $p$ 进 Galois 表示 (p-adic Galois representations of fields of characteristic $p > 0$)

**基本设定**：令 $E$ 为特征为 $p > 0$ 的域, $E^s$ 为其一个固定的可分闭包, 且 $G = \text{Gal}(E^s/E)$. 我们用 $\mathbf{Rep}_{\mathbb{Q}_p}(G)$（相应地, $\mathbf{Rep}_{\mathbb{Z}_p}(G)$）来表示 $G$ 的 $p$ 进表示（相应地, $\mathbb{Z}_p$-表示）所构成的范畴. 

### 3.3.1 Étale $\varphi$-modules over $\mathcal{E}$ ($\mathcal{E}$ 上的 Étale $\varphi$-模)

> 回忆: 域 $E$ 的Cohen环是 $E$ 是同构意义下唯一的, 绝对非分歧 (完备DVR条件下, 这相当于uniformizer为 $p$ ) 的剩余域为 $E$ 的, 特征 $0$ 完备DVR

**$\mathcal{O}_{\mathcal{E}}$ 和 $\mathcal{E}$ 的构造**：从 §1.2.4 中, 我们令 $\mathcal{O}_{\mathcal{E}}$ 表示 $E$ 的 Cohen 环 $\mathcal{C}(E)$, 且令 $\mathcal{E}$ 表示 $\mathcal{O}_{\mathcal{E}}$ 的分式域. 则：

$$\mathcal{O}_{\mathcal{E}} = \varprojlim_{n \in \mathbb{N}} \mathcal{O}_{\mathcal{E}}/p^n \mathcal{O}_{\mathcal{E}}$$

且满足：

$$\mathcal{O}_{\mathcal{E}}/p \mathcal{O}_{\mathcal{E}} = E, \quad \mathcal{E} = \mathcal{O}_{\mathcal{E}}\left[\frac{1}{p}\right]$$

域 $\mathcal{E}$ 的特征为 $0$, 具有一个完备离散估值, 其剩余域为 $E$, 且极大理想由 $p$ 生成. 

**唯一性**：若 $\mathcal{E}'$ 是另一个具有相同性质的域, 则一个唯一的连续局部同态 $\iota: \mathcal{E} \to \mathcal{E}'$（它在剩余域 $E$ 上为恒等映射）, 并且 $\iota$ 是一个同构. 

若 $E$ 是完美域（perfect）, 则 $\iota$ 是唯一的, 且 $\mathcal{O}_{\mathcal{E}}$ 能够与 $E$ 上的 Witt 向量环 $W(E)$ 等同. 在一般情形下, $\mathcal{O}_{\mathcal{E}}$ 可以等同于 $W(E)$ 的一个子环. 

**Frobenius 映射**：我们总能为 $\mathcal{E}$ 提供一个 Frobenius 映射 $\varphi$, 它是一个连续自同态, 将 $\mathcal{O}_{\mathcal{E}}$ 映射到其自身, 并且在剩余域 $E$ 上诱导绝对 Frobenius 映射 $x \mapsto x^p$ ( 存在性由lifting property保证 ) . 当 $E$ 完美时, $\varphi$ 是唯一的. 在下文中, 我们固定一组 $\mathcal{E}$ 和 $\varphi$ 的选择. 

**Definition 3.25**：(i) $\mathcal{O}_{\mathcal{E}}$ 上的一个 **$\varphi$-模** 是指一个配备了半线性映射 $\varphi: M \to M$ 的 $\mathcal{O}_{\mathcal{E}}$-模 $M$. 也就是说, 对所有的 $x, y \in M, \lambda \in \mathcal{O}_{\mathcal{E}}$：

$$\begin{aligned}\varphi(x+y) &= \varphi(x) + \varphi(y)\\\varphi(\lambda x) &= \varphi(\lambda) \varphi(x)\end{aligned}$$

(ii) $\mathcal{E}$ 上的一个 **$\varphi$-模** 是指一个配备了半线性映射 $\varphi: D \to D$ 的 $\mathcal{E}$-向量空间 $D$. 

*   **Remark 3.26**：
    killed by $p$ 的 $\mathcal{O}_{\mathcal{E}}$ 上的 $\varphi$-模恰好是 $E$ 上的 $\varphi$-模. 

**模结构 $M_\varphi$**：令：

$$M_\varphi = \mathcal{O}_{\mathcal{E}} \otimes_{\varphi, \mathcal{O}_{\mathcal{E}}} M$$

对任意的 $\lambda, \mu \in \mathcal{O}_{\mathcal{E}}, m \in M$, 其上的模结构由下式给出：

$$\lambda \otimes \mu m = \lambda \varphi(\mu) \otimes m, \quad \lambda(\mu \otimes m) = \lambda \mu \otimes m \quad (3.24)$$

在 $\varphi$-模的情形中, 给定一个半线性映射 $\varphi: M \to M$ 等价于给定一个 $\mathcal{O}_{\mathcal{E}}$-线性映射 $\Phi: M_\varphi \to M$ , 将 $\lambda\otimes x\mapsto \lambda\varphi(x)$ . 

同样地, 若我们设 $D_\varphi = \mathcal{E} \otimes_{\varphi, \mathcal{E}} D$, 则一个半线性映射 $\varphi: D \to D$ 也等价于一个 $\mathcal{E}$-线性映射 $\Phi: D_\varphi \to D$. 

**Definition 3.27**：
1. $\mathcal{O}_{\mathcal{E}}$ 上的一个 $\varphi$-模 $M$ 被称为 **étale** 的, 如果 $M$ 是有限型的 $\mathcal{O}_{\mathcal{E}}$-模, 且 $\Phi: M_\varphi \to M$ 是一个同构. 
2. $\mathcal{E}$ 上的一个 $\varphi$-模 $D$ 被称为 **étale** 的, 如果 $\dim_{\mathcal{E}} D < \infty$ 并且存在一个在 $\varphi$ 作用下稳定的 $\mathcal{O}_{\mathcal{E}}$-格（$\mathcal{O}_{\mathcal{E}}$-lattice） $M \subset D$, 使得 $M$ 成为 $\mathcal{O}_{\mathcal{E}}$ 上的一个 étale $\varphi$-模

**Remark 3.28**：若 $D$ 是 $\mathcal{E}$ 上的 étale $\varphi$-模, 且 $M$ 是其关联的 étale 格. 若 $\{e_1, \dots, e_d\}$ 是 $M$ 在 $\mathcal{O}_{\mathcal{E}}$ 上的基, 则它也是 $D$ 在 $\mathcal{E}$ 上的基, 且满足：

$$\varphi(e_j) = \sum_{i=1}^d a_{ij} e_i, \quad (a_{ij}) \in \text{GL}_d(\mathcal{O}_{\mathcal{E}})$$

> 注: 注意 $\mathcal{O}_{\mathcal{E}}$ 上 $\mathcal{E}$ 上之所以 $\mathcal{E}$ 上étale $\varphi$-模未必自由, 而 $\mathcal{E}$ 上étale $\varphi$-模对应的 $\mathcal{O}_{\mathcal{E}}$-格一定是自由的. 之所以采取了这种迂回定义, 是因为如果使用直接的étale $\varphi$-模定义, 我们想要的范畴等价

$$\mathbf{V}:  \mathcal{M}_\varphi^{\text{ét}}(\mathcal{E})\to \mathbf{Rep}_{\mathbb{Q}_p}(G)$$

的左边会变得过大.

> 注: 本节的目的是建立以下两个范畴等价：

$$\begin{aligned}\mathbf{D}: \mathbf{Rep}_{\mathbb{Q}_p}(G) &\to \mathcal{M}_\varphi^{\text{ét}}(\mathcal{E})\\\mathbf{M}: \mathbf{Rep}_{\mathbb{Z}_p}(G) &\to \mathcal{M}_\varphi^{\text{ét}}(\mathcal{O}_{\mathcal{E}})\end{aligned}$$

大致的路线图如下: 我们将先定义 $\mathbf{M}$ 和其拟逆 $\mathbf{T}$ . 具体来说, 考虑在 $\mathcal{E}$ 的极大非分歧扩张 $\mathcal{E}^{\mathrm{ur}}$ 和它的完备化 $\widehat{\mathcal{E}^{\text{ur}}}$ , 它们有延拓了 $\mathcal{E}$ 的离散赋值, 且剩余域的Frob / $G$ 的作用可以被提升到这两个域上. 定义:
> 1. 对 $\mathbb{Z}_p$-表示 $T$：

$$\mathbf{M}(T) = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} T)^G$$

> 2. 对于 étale $\varphi$-模 $M$：

$$\mathbf{T}(M) = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M)^{\varphi=1}$$

> 这里 $\mathbf{M}$ 的 $\varphi$ 作用, 和 $\mathbf{T}$ 的 $G$ 作用都平凡作用于张量积左边. 可以证明 $\mathbf{M}$ 和 $\mathbf{T}$ 确实是对应范畴间的函子. 

> 而我们将证明

$$(\widehat{\mathcal{E}^{\text{ur}}})^G = \mathcal{E}, \quad (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}})^G = \mathcal{O}_{\mathcal{E}}$$

和

$$(\widehat{\mathcal{E}^{\text{ur}}})^{\varphi=1} = \mathbb{Q}_p, \quad (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}})^{\varphi=1} = \mathbb{Z}_p$$

以及两个自然映射

$$\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} \mathbf{M}(T) \to \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} T$$

和

$$\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} \mathbf{T}(M) \to \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M$$

是同构, 分别取 $\varphi$ 不变量和 $G$ 不变量, 从而建立我们想要的第一个范畴等价, 而第二个范畴等价则是立即的推论.

下面是两个étale $\varphi$-模的基本事实: 

**Proposition 3.29**：若 $M$ 是有限型的 $\mathcal{O}_{\mathcal{E}}$-模且配备了 $\varphi$ 的作用, 则 $M$ 是 étale 的当且仅当 $M/pM$ 作为 $E$-模是 étale 的. 

**证明**：由Nakayama $M_{\varphi}/pM_{\varphi}\to M/pM$ 满可推出 $\Phi:M_{\varphi}\to M$ 满. 由PID上有限生成模的结构定理

$$M\cong \mathcal{O}_{\mathcal{E}}^r\oplus \bigoplus_{i=1}^s \mathcal{O}_{\mathcal{E}}/p^{n_i}\mathcal{O}_{\mathcal{E}}$$

这里因为 $\mathcal{O}_{\mathcal{E}}\otimes _{\mathcal{O}_{\varphi,\mathcal{E}}}\mathcal{O}_{\mathcal{E}}/p^i\mathcal{O}_{\mathcal{E}}$ 中元素 $x\otimes y=x\varphi(y)\otimes 1$ , 作为 $\mathcal{O}_{\mathcal{E}}$-模 $M_{\varphi}$ 与 $M$ 同构. 从而 $M_{\varphi}\to M$ 可以视作 $M$ 自同态, 而诺特模自同态满射即同构. $\square$

**Proposition 3.30**：étale $\varphi$-模范畴 $\mathcal{M}_\varphi^{\text{ét}}(\mathcal{O}_{\mathcal{E}})$（相应地,  $\mathcal{M}_\varphi^{\text{ét}}(\mathcal{E})$）是一个阿贝尔范畴. 

**证明**: 证明和命题3.19基本无异. 考虑与3.19中相同的交换图

$$\begin{CD}
0 @>>> M'_{\varphi} @>>> (M_1)_{\varphi} @>>> (M_2)_{\varphi} @>>> (M'')_{\varphi} @>>> 0 \\
@. @VV{\Phi'}V @VV{\Phi_1}V @VV{\Phi_2}V @VV{\Phi''}V @. \\
0 @>>> M' @>>> M_1 @>>> M_2 @>>> M'' @>>> 0
\end{CD}$$

已知中间两列是同构, 直接使用5引理 ( 给图表左右两端各自补上一列 $0$ ... ) 可以证明 $\Phi',\Phi''$ 是同构 ( 3.19证明中其实不必卡维数, 可以直接5引理, 他搞错了似乎... ). $\square$

> 注: 书中利用3.29的hint没什么道理, 模 $p$ 并不保持 $\ker$ .

**目标**：我们将建立以下两个范畴等价：

$$\begin{aligned}\mathbf{D}: \mathbf{Rep}_{\mathbb{Q}_p}(G) &\to \mathcal{M}_\varphi^{\text{ét}}(\mathcal{E})\\\mathbf{M}: \mathbf{Rep}_{\mathbb{Z}_p}(G) &\to \mathcal{M}_\varphi^{\text{ét}}(\mathcal{O}_{\mathcal{E}})\end{aligned}$$

### 3.3.2 域 $\mathcal{E}^{\text{ur}}$ (The field $\mathcal{E}^{\text{ur}}$)

**定义**：令 $\mathcal{F}$ 为 $\mathcal{E}$ 的有限扩张, $\mathcal{O}_{\mathcal{F}}$ 为 $\mathcal{F}$ 的整数环. 我们称 $\mathcal{F}/\mathcal{E}$ 是**非分歧的**（unramified）, 如果：
1. $p$ 是 $\mathcal{O}_\mathcal{F}$ 的极大理想的一个生成元；
2. $F = \mathcal{O}_\mathcal{F} / p$ 是 $E$ 的一个可分扩张. 

对于任意的特征 $p$ 域同态 $f: E \to F$, 由定理 1.51 可知, 存在一个局部同态 $\mathcal{C}(E) \to \mathcal{C}(F)$在剩余域上诱导 $f$. 如果是包含映射 $E \hookrightarrow F$ , 我们可以借诱导的局部同态 $\mathcal{C}(E) \to \mathcal{C}(F)$ 将 $\mathcal{C}(E)$ 视为 $\mathcal{C}(F)$ 的子环. 

> 注: 这是单射是因为环同态保持 $p$ , 加上在剩余域上是同态就有单射...

对有限可分扩张 $F$ , 记 $\mathcal{F}=\mathcal{E}_F=\operatorname{Frac}\mathcal{C}(F)$ . 若 $F$ 与 $F'$ 为 $E$ 的两个有限可分扩张, 则态射 $f: F \to F'$ 满足 $f|_E = \text{id}_E$ 可以被唯一提升至满足 $f|_{\mathcal{E}} = \text{id}_{\mathcal{E}}$ 的 $f: \mathcal{F} \to \mathcal{F}'$ . 此时, 存在唯一的 $E$ 的非分歧扩张 $\mathcal{F} = \text{Frac }\mathcal{C}(F)$, 其剩余域为 $F$. 

> 注: 这里因为非分歧. 回忆我们可以取 $F/E$ 的一个可分生成元 $\bar{\alpha}$ , 那么提升到 $\mathcal{O}_\mathcal{F}$ 中唯一的根 $\alpha$ 就有 $\mathcal{O}_\mathcal{F}=\mathcal{O}_\mathcal{E}[\alpha]$ . 类似的 $\bar{\alpha}$ 在 $\mathcal{O}_{\mathcal{F}'}$ 中也有唯一的提升 $\alpha'$ , 并且必须把 $\alpha$ 打到 $\alpha'$ . 实际上相同的论证可以说明, 相同剩余域映射的两个提升, 若在 $\mathcal{E}$ 上限制相同则两者相同...

此外, 存在唯一的自同态 $\varphi': \mathcal{F} \to \mathcal{F}$ 使得 $\varphi'(\mathcal{C}(F)) \subset \mathcal{C}(F)$ 且限制在 $\mathcal{E}$ 上满足 $\varphi'|_{\mathcal{E}} = \varphi$, 并在剩余域 $F$ 上诱导绝对 Frobenius $\lambda\mapsto \lambda^p$ . 我们记 $\mathcal{F} = \mathcal{E}_F$, 且仍把 $\varphi'$ 记作 $\varphi$. 

该映射 $f$ 与 $\varphi$ 交换 ( 两种顺序复合在剩余域上相同, 然后继续唯一提升... ) . 若 $F/E$ 是Galois的, 则 $\mathcal{E}_F/\mathcal{E}$ 也是Galois的, 且有Galois群的等同 ( 因为 $e=1$ )：

$$\text{Gal}(\mathcal{E}_F / \mathcal{E}) = \text{Gal}(F/E)$$

且 $\text{Gal}(F/E)$ 的作用与 $\varphi$ 交换. 

**$\mathcal{E}^{\text{ur}}$ 域的极限构造**：令 $E^s$ 为 $E$ 的一个可分闭包, 则

$$E^s = \bigcup_{F \in S} F$$

其中 $S$ 表示 $E^s/E$ 有限子扩张的集合. 对于 $F, F' \in S$ 且 $F \subset F'$ ( 兼容 $\mathcal{E}$ 嵌入时有唯一的 $\mathcal{F}\to \mathcal{F}'$ ...), 有 $\mathcal{E}_F \subset \mathcal{E}_{F'}$. 我们定义：

$$\mathcal{E}^{\text{ur}} := \varinjlim_{F \in S} \mathcal{E}_F \quad (3.25)$$

$\mathcal{E}^{\text{ur}}/\mathcal{E}$ 为 Galois 扩张, 且其Galois群 $\text{Gal}(\mathcal{E}^{\text{ur}}/\mathcal{E}) = G$ ( 两端同时取 $\varprojlim$ ... ).  此时 $\mathcal{E}^{\text{ur}}$ 的剩余域是 $E^s$ ( 因为取剩余域就是模 $p$ ...) .

令 $\widehat{\mathcal{E}^{\text{ur}}}$ 表示 $\mathcal{E}^{\text{ur}}$ 的 $p$ 进完备化, 且令 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}$ 表示其整数环. $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}$ 为局部环, 其剩余域为 $E^s$, 并且：

$$\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} = \varprojlim_{n} \mathcal{O}_{\mathcal{E}^{\text{ur}}} / p^n \mathcal{O}_{\mathcal{E}^{\text{ur}}} \quad (3.26)$$

$\mathcal{E}^{\text{ur}}$ 上的自同态 $\varphi$（满足 $\varphi(\mathcal{O}_{\mathcal{E}^{\text{ur}}}) \subset \mathcal{O}_{\mathcal{E}^{\text{ur}}}$）通过连续性 (实际上任何环同态都保持 $p$ , 从而在 $p$-adic拓扑下连续 ) 可以延拓为 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}$ 和 $\widehat{\mathcal{E}^{\text{ur}}}$ 上的自同态. 

同理, $G$ 在 $\mathcal{E}^{\text{ur}}$ 和 $\mathcal{O}_{\mathcal{E}^{\text{ur}}}$ 上的作用也连续延拓至 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}$ 和 $\widehat{\mathcal{E}^{\text{ur}}}$ 上, 且其与 $\varphi$ 的作用交换. 

> 注: 之所以不直接定义 $\widehat{\mathcal{E}^{\text{ur}}}$ 为 $\operatorname{Frac}\mathcal{C}(E^s)$ , 是因为 $E^s/E$ 无限扩张缺少唯一提升性质吗, 也难以定义 $G$ 作用...

**Proposition 3.31**：
1. $(\widehat{\mathcal{E}^{\text{ur}}})^G = \mathcal{E}$, $(\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}})^G = \mathcal{O}_{\mathcal{E}}$；
2. $(\widehat{\mathcal{E}^{\text{ur}}})^{\varphi=1} = \mathbb{Q}_p$, $(\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}})^{\varphi=1} = \mathbb{Z}_p$. 

**证明**：(1) 的结论由构造或后文中的 Ax-Sen-Tate 引理直接得出. 考虑上文的这个路径可以这样: 就是考虑对任何一个 $G$-不变元 $x\in \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}$, 在剩余域 $E^s=\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}/p\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}$ 中它也是 $G$-不变的, 从而属于 $E$. 因此可以写成 $x-z_0=px_1$ , 其中 $z_0\in \mathcal{O}_{\mathcal{E}}$ 是 $x$ 在剩余域中image的提升, 进而可以得到一系列

$$x=z_0+z_1p+z_2p^2+\cdots$$

右边收敛于 $\mathcal{O}_\mathcal{E}$ 中元素. 而 $\widehat{\mathcal{E}^{\text{ur}}}$ 中元素只是整数环中元素除以 $p^i$ ...

对于 (2), 我们可以将上述所有环均视作 $W(E^s)$ 的子环. 具体来说, $\mathcal{O}_{\mathcal{F}}$ 作为Cohen环是 $W(F)\subset W(E^s)$ 的子环, 并且这些嵌入兼容 $W(E)\hookrightarrow W(E^s)$ , 从而取 $\varinjlim$ 得到 $\mathcal{O}_{\mathcal{E}^{\text {ur}}}\hookrightarrow W(E^s)$ , 按连续性延拓得到 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \hookrightarrow W(E^s)$ .

这个包含映射与 $G$ 和 $\varphi$ 相容 ( 回忆比如说任何剩余域同态提升都和 $\varphi$ 交换..) , 且有 $W(E^s)^{\varphi=1} = \mathbb{Z}_p$ ( 因为是分分量取 $x\mapsto x^p$ , 而 $x^p=x$ 意味着 $x\in \mathbb{F}_p$ ) , 结论 (2) 显然成立. $\square$

### 3.3.3 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}$-表示与 $\mathbb{Z}_p$-表示

> 注: 本章的表示都默认对应的模有限生成.

**Proposition 3.32**：对任意 $G$ 的 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}$-表示 $X$, 其自然映射：

$$\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} X^G \to X$$

是同构. 

**证明**：
**(1) 假设存在 $n \geq 1$ 使得 $X$ 被 $p^n$ 杀灭**：对此我们基于 $n$ 施加数学归纳法：

当 $n=1$ 时, $X$ 是一个 $E^s$-表示. 由 Proposition 3.8 (Hilbert 90) 可知其为平凡表示 ( 也就是 $X
\cong (E^s)^d$ ) , 此时 $X^G=E^d$ , 而对应张量积成为 $E^s\otimes _E X^G$ , 结论成立.

假设结论对 $n-1$ 均成立. 对于 $n \geq 2$, 设 $X'$ 为 $X$ 上关于 $p$ 乘法映射的核, 且 $X'' = X / X'$. 我们有如下短正合序列：

$$0 \to X' \to X \to X'' \to 0$$

其中 $X'$ 被 $p$ 杀灭（因而它是 $E^s$-表示且为平凡表示, 即 $X' \cong (E^s)^d$）, 而 $X''$ 被 $p^{n-1}$ 杀灭. 取 $G$-不变量的长正合序列：

$$0 \to X'^G \to X^G \to X''^G \to H^1_{\text{cont}}(G, X')$$

因为 $X'$ 是平凡的 $E^s$-表示：

$$H^1_{\text{cont}}(G, X') = H^1(G, X') \cong \big(H^1(G, E^s)\big)^d = 0$$

因此可得到以下正合交换图：

$$
\begin{array}{ccccccccc}
0 & \longrightarrow & \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} X'^G & \longrightarrow & \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} X^G & \longrightarrow & \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} X''^G & \longrightarrow & 0 \\
& & \downarrow & & \downarrow & & \downarrow & & \\
0 & \longrightarrow & X' & \longrightarrow & X & \longrightarrow & X'' & \longrightarrow & 0
\end{array}
$$

由归纳假设可知, 左侧与右侧的竖直映射均是同构, 根据五引理, 中间的映射也必定是一个同构. $\square$

**(2) 一般情形**：因为 $X = \varprojlim_{n \in \mathbb{N}} X / p^n X$, 所以通过对上述结果取逆极限, 可直接推广到一般情形. 

> 可以取极限是因为, 完备环上有限生成模完备, 而在 $p$-adic拓扑下这是 $M=\varprojlim M/p^nM$ , 现在对 (1) 中自然同构取极限...

> 注: 上文中实际上证明了 $H^1(G,X)=0$ : 在 (1) 中已经证明 $H^1(G,X)=0$ , 并且由于取逆极限时候过渡映射 $X/p^nX\to X/p^{n-1}X$ 都是满射, 因此上同调和极限交换.

**函子 $\mathbf{M}$ 和 $\mathbf{T}$ 的构造**：若 $T$ 为 $G$ 的一个 $\mathbb{Z}_p$-表示, 则 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} T$ 是 $\mathcal{O}_{\mathcal{E}}$ 上的一个 $\varphi$-模, 其上的 $\varphi$ 作用与 $G$ 作用由下式定义：

$$\varphi(\lambda \otimes t) = \varphi(\lambda) \otimes t, \quad g(\lambda \otimes t) = g(\lambda) \otimes g(t)$$

对任意 $g \in G, \lambda \in \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}, t \in T$. 令：

$$\mathbf{M}(T) = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} T)^G \quad (3.27)$$

类似的, 令 $M$ 是 $\mathcal{O}_{\mathcal{E}}$ 上的 étale $\varphi$-模. 让 $\varphi$ 与 $G$ 作用在 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M$ 上：

$$g(\lambda \otimes x) = g(\lambda) \otimes x, \quad \varphi(\lambda \otimes x) = \varphi(\lambda) \otimes \varphi(x)$$

对于 $g \in G, \lambda \in \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}, x \in M$. 令：

$$\mathbf{T}(M) = \{y \in \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M \mid \varphi(y) = y\} = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M)^{\varphi = 1} \quad (3.29)$$

现在 $\mathbf{T}(M)$ 是 $\mathbb{Z}_p$-表示. 下面证明 $\mathbf{M}(T)$ 是 $\mathcal{O}_{\mathcal{E}}$ 上的 étale $\varphi$-模: 

. 这表明 $\mathbf{M}(T)$ 是有限型的 $\mathcal{O}_{\mathcal{E}}$-模, 且更进一步的, 它是 étale 的: 

> 根据 Proposition 3.32 , 自然映射：

$$\alpha_T: \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} \mathbf{M}(T) \to \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} T \quad (3.28)$$

是一个同构.

> $\mathbf{M}(T)$ 的有限生成性: 这里是所谓的faithfully flat道理, $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}}$ 是 $\mathcal{O}_{\mathcal{E}}$ 上无挠模从而平坦, 而非分歧意味着它faithfully flat, 参见 [sp](https://stacks.math.columbia.edu/tag/00HR). 而有限生成性在faithfully flat扩张下可下降, 参见[sp](https://stacks.math.columbia.edu/tag/03C4).

> 注: 当然也可以使用完备性对有限生成做一个初等证明. 具体来说, 模 $p$ 下 $\alpha_T$ 变为线性空间同构

$$E^s \otimes_{E} (\mathbf{M}(T)/p\mathbf{M}(T)) \to E^s \otimes_{\mathbb{F}_p} (T/pT)$$

右边是有限维线性空间, 使得 $\mathbf{M}(T)/p\mathbf{M}(T)$ 也必须有限生成. 假设 $e_i$ 是一组有限生成元的提升, $N$ 是由 $e_i$ 生成的 $\mathcal{O}_{\mathcal{E}}$-模, 则任一 $x \in \mathbf{M}(T)$ 均可写为：

$$x = x_0 + p x_1 + p^2 x_2 + \dots\quad, \quad x_i\in N$$

由于完备性 $\mathbf{M}(T) = N$ .

> $M$ 是 étale $\varphi$-模: 有正合列 $0 \to pT \to T \to T/pT \to 0$ , 使用 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p}-$ 作用得到另一个正合列, 它诱导上同调长正合列

$$0 \to X'^G \to X^G \to X''^G \to H^1_{\text{cont}}(G, X')$$

利用3.32中已证明的 $H^1(G, \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} T) = 0$ , 我们可以直接得到：

$$\mathbf{M}(T)/p\mathbf{M}(T) \cong \mathbf{M}(T/pT)$$

因此 $\mathbf{M}(T)$ 的 étale 性等价于 $\mathbf{M}(T/pT)$ 作为 $E$ 上的 $\varphi$-模是 étale 的, 而后者的 étale 性已经在 Proposition 3.20 中被证明. 

**Proposition 3.33**：对于任意在 $\mathcal{O}_{\mathcal{E}}$ 上的 étale $\varphi$-模 $M$, 其自然映射：

$$\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} \mathbf{T}(M) \to \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M$$

是一个同构. 

**证明**：**(1) 假设 $M$ 被 $p^n$ 杀灭**（对 $n \geq 1$ 施加归纳法）：当 $n=1$ 时：结论退化为 $E$ 上的 étale $\varphi$-模的结果, 在3.23中已经证明. 

当 $n \geq 2$ 时：考虑正合列 $0 \to M' \to M \to M'' \to 0$（其中 $M'$ 是 $M$ 中乘 $p$ 映射的核）. 我们有正合列

$$0 \to \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M' \to \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M \to \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M'' \to 0$$

记 $X' = \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M'$, $X = \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M$, $X'' = \mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M''$. 根据定义：

$$X'^{\varphi=1} = \mathbf{T}(M'), \quad X^{\varphi=1} = \mathbf{T}(M), \quad X''^{\varphi=1} = \mathbf{T}(M'')$$

若证明了序列 $0 \to X'^{\varphi=1} \to X^{\varphi=1} \to X''^{\varphi=1} \to 0$ 是正合的, 我们便能通过归纳法完成证明 ( 类似3.32...) .

对

$$\begin{CD} 0 @>>> X' @>>> X @>>> X'' @>>> 0 \\ @. @V{\varphi - 1}VV @V{\varphi - 1}VV @V{\varphi - 1}VV @. \\ 0 @>>> X' @>>> X @>>> X'' @>>> 0 \end{CD}$$

应用snake lemma得到的连接同态, 得到如下的长正合列：

$$0 \longrightarrow X'^{\varphi=1} \longrightarrow X^{\varphi=1} \longrightarrow X''^{\varphi=1} \xrightarrow{\quad\delta\quad} X' / (\varphi - 1)X'$$

其中对于 $x \in X$, 其在 $X''^{\varphi=1}$ 中的映像为 $y$, 则边界映射 $\delta(y)$ 定义为 $(\varphi-1)(x)$ 在 $X'/(\varphi-1)X'$ 中的类. 

为此, 我们只需验证 $X'/(\varphi-1)X' = 0$：由于 $M'$ 被 $p$ 杀灭, 故作为带有 Frobenius 作用的 $E^s$-向量空间, 有 $X' = E^s \otimes_E M'$由3.23, 作为 $\varphi$-模它同构于 $E^s\otimes _{\mathbb{F}_p} X'^{\varphi=1}\cong (E^s)^d$ . 从而有：

$$X'/(\varphi-1)X' \cong \big( E^s / (\varphi-1)E^s \big)^d$$

只需证明一维的情况, 即 $E^s/(\varphi-1)E^s=0$ : 根据 Artin-Schreier 理论, 对任意的 $b \in E^s$, 总存在 $a \in E^s$ 使得 $a^p - a = b$ , 因此 $\varphi-1$ 是满射,  $E^s / (\varphi-1)E^s = 0$ . 因此 $X'/(\varphi-1)X' = 0$ .

**(2) 一般情形**：通过对上述有限层结果取逆极限即可. $\square$

**Theorem 3.34**：加性函子：

$$\mathbf{M}: \mathbf{Rep}_{\mathbb{Z}_p}(G) \to \mathcal{M}_\varphi^{\text{ét}}(\mathcal{O}_{\mathcal{E}}), \quad T \mapsto \mathbf{M}(T)$$

是范畴等价, 且：

$$\mathbf{T}: \mathcal{M}_\varphi^{\text{ét}}(\mathcal{O}_{\mathcal{E}}) \to \mathbf{Rep}_{\mathbb{Z}_p}(G), \quad M \mapsto \mathbf{T}(M)$$

是 $\mathbf{M}$ 的一个拟逆函子. 

**证明**：我们将 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} \mathbf{M}(T)$ 与 $\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} T$ 通过同构关系 (3.28) 进行等同. 计算得：

$$\mathbf{T}(\mathbf{M}(T)) = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} \mathbf{M}(T))^{\varphi=1} = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} T)^{\varphi=1} = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}})^{\varphi=1} \otimes_{\mathbb{Z}_p} T = \mathbb{Z}_p \otimes_{\mathbb{Z}_p} T = T$$

以及：

$$\mathbf{M}(\mathbf{T}(M)) = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} \mathbf{T}(M))^G \cong (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M)^G = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}})^G \otimes_{\mathcal{O}_{\mathcal{E}}} M = \mathcal{O}_{\mathcal{E}} \otimes_{\mathcal{O}_{\mathcal{E}}} M = M$$

定理证明完毕. $\square$

### 3.3.4 $p$ 进表示 ($p$-adic representations)

**构造**：若 $V$ 是 $G$ 的一个 $p$ 进表示, $D$ 是 $\mathcal{E}$ 上的 étale $\varphi$-模, 定义：

$$\begin{aligned}\mathbf{D}(V) &= (\widehat{\mathcal{E}^{\text{ur}}} \otimes_{\mathbb{Q}_p} V)^G\\\mathbf{V}(D) &= (\widehat{\mathcal{E}^{\text{ur}}} \otimes_{\mathcal{E}} D)^{\varphi=1}\end{aligned}$$

**Theorem 3.35**：
1. 对任意 $G$ 的 $p$ 进表示 $V$, $\mathbf{D}(V)$ 是 $\mathcal{E}$ 上的一个 étale $\varphi$-模, 且自然映射：

$$\widehat{\mathcal{E}^{\text{ur}}} \otimes_{\mathcal{E}} \mathbf{D}(V) \to \widehat{\mathcal{E}^{\text{ur}}} \otimes_{\mathbb{Q}_p} V$$

是同构. 
2. 对任意 $\mathcal{E}$ 上的 étale $\varphi$-模 $D$, $\mathbf{V}(D)$ 是 $G$ 的一个 $p$ 进表示, 且自然映射：

$$\widehat{\mathcal{E}^{\text{ur}}} \otimes_{\mathbb{Q}_p} \mathbf{V}(D) \to \widehat{\mathcal{E}^{\text{ur}}} \otimes_{\mathcal{E}} D$$

是同构. 
3. 函子：

$$\mathbf{D}: \mathbf{Rep}_{\mathbb{Q}_p}(G) \to \mathcal{M}_\varphi^{\text{ét}}(\mathcal{E})$$

是范畴等价, 且 $\mathbf{V}: \mathcal{M}_\varphi^{\text{ét}}(\mathcal{E}) \to \mathbf{Rep}_{\mathbb{Q}_p}(G)$ 是其拟逆. 

**证明**：该结论可由 §3.3.3 的结论结合以下两个引论直接推出：
1. 对于任意的 $p$ 进表示 $V$, 总存在一个 $G$-稳定的 $\mathbb{Z}_p$-格 $T \subset V$, 使得 $V = \mathbb{Q}_p \otimes_{\mathbb{Z}_p} T$. 因而：

$$\begin{aligned}\widehat{\mathcal{E}^{\text{ur}}} \otimes_{\mathbb{Q}_p} V &= (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathbb{Z}_p} T)\left[\frac{1}{p}\right]\\\mathbf{D}(V) &= \mathbf{M}(T)\left[\frac{1}{p}\right] = \mathcal{E} \otimes_{\mathcal{O}_{\mathcal{E}}} \mathbf{M}(T)\end{aligned}$$

> 注: 这一部分是引理2.7. 

> **引理 2.7 (格的 $G$-稳定性)**：对于 $G$ 的任意 $\ell$-进表示 $V$, 存在一个 $V$ 的格 $T$, 它在 $G$-作用下是稳定的（从而构成 $G$ 的一个自由 $\mathbb{Z}_\ell$-表示）. 特别地, 存在 $V$ 的一组基, 使得表示 $\rho : G \to \text{Aut}_{\mathbb{Q}_\ell}(V) \cong \text{GL}_d(\mathbb{Q}_\ell)$ 通过 $\text{GL}_d(\mathbb{Z}_\ell)$ 进行分解：

$$\begin{array}{ccc} G & \xrightarrow{\quad\rho\quad} & \text{GL}_d(\mathbb{Q}_\ell) \\ \searrow & & \nearrow \\ & \text{GL}_d(\mathbb{Z}_\ell) & \end{array}$$

> **证明**：设 $V$ 是一个 $\ell$-进表示. 令 $T_0$ 为 $V$ 的一个格, 则对于任意 $g \in G$,  $g(T_0) = \{g(v) \mid v \in T_0\}$ 也是一个格. 此外, 稳定子 $H = \{g \in G \mid g(T_0) = T_0\}$ 是 $G$ 的开子群 ( 实际上 $H$ 是 $\mathrm{GL}_n(\mathbb{Z}_p)$ 在 $G$ 中的原像, 而 $\mathrm{GL}_n(\mathbb{Z}_p)\subset \mathrm{GL}_n(\mathbb{Q}_p)$ 是开集... ), 因此商集 $G/H$ 是有限的. 求和：

$$T = \sum_{g \in G} g(T_0) = \sum_{g \in G/H} g(T_0)$$

是一个有限和, $T$ ( 作为PID上有限生成模, 无挠从而自由, 因为 $V$ 是线性空间... ) 依然是 $V$ 的一个格, 并且在 $G$-作用下是稳定的, 从而构成 $G$ 的 $\mathbb{Z}_\ell$-表示. 若 $\{e_1, \dots, e_d\}$ 是 $T$ 在 $\mathbb{Z}_\ell$ 上的基, 由于它也构成 $V$ 在 $\mathbb{Q}_\ell$ 上的基, 因此结论成立. 

2. 对于 $\mathcal{E}$ 上的任何 étale $\varphi$-模 $D$, 也总存在一个 $\varphi$ 稳定的 $\mathcal{O}_{\mathcal{E}}$-格 $M \subset D$, 使得 $M$ 为 $\mathcal{O}_{\mathcal{E}}$ 上的 étale $\varphi$-模, 且 $D = \mathcal{E} \otimes_{\mathcal{O}_{\mathcal{E}}} M$.  ( 这似乎是 $D$ 上etale定义? def3.27) 因而：

$$\begin{aligned}\widehat{\mathcal{E}^{\text{ur}}} \otimes_{\mathcal{E}} D &= (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M)\left[\frac{1}{p}\right]\\\mathbf{V}(D) &= \mathbf{T}(M)\left[\frac{1}{p}\right] = \mathbb{Q}_p \otimes_{\mathbb{Z}_p} \mathbf{T}(M)\end{aligned}$$

 $\square$

**Remark 3.36** (Tannakian 结构和张量函子性)：范畴 $\mathcal{M}_\varphi^{\text{ét}}(\mathcal{E})$ 具有自然的 Tannakian 结构. 若 $D_1, D_2 \in \mathcal{M}_\varphi^{\text{ét}}(\mathcal{E})$, 则其张量积 $D_1 \otimes D_2$ 规定为 $D_1 \otimes_{\mathcal{E}} D_2$, 且其上的伴随作用为 $\varphi(x_1 \otimes x_2) = \varphi(x_1) \otimes \varphi(x_2)$. 此时, $\mathbf{D}$ 为张量函子, 即存在以下自然同构：

$$\begin{aligned}\mathbf{D}(V_1) \otimes \mathbf{D}(V_2) &\to \mathbf{D}(V_1 \otimes V_2)\\\mathbf{D}(V^*) &\to \mathbf{D}(V)^*\end{aligned}$$

类似地, 范畴 $\mathcal{M}_\varphi^{\text{ét}}(\mathcal{O}_{\mathcal{E}})$ 上也可以定义张量积、两类对偶（一类用于自由 $\mathcal{O}_{\mathcal{E}}$-模, 另一类用于 $p$-torsion 模）以及相容的自然同构. 

### 3.3.5 范畴等价的具体形式表现 (Down to earth meaning of the equivalence of categories)

**矩阵化表示与等价关系的建立**：设 $d \geq 1$, 且 $A \in \text{GL}_d(\mathcal{O}_{\mathcal{E}})$. 我们令 $M_A = \mathcal{O}_{\mathcal{E}}^d$ 为一个 $\mathcal{O}_{\mathcal{E}}$-模, 其标准基为 $\{e_1, \dots, e_d\}$. $A$ 可以定义一个其上的半线性作用：

$$\varphi(e_j) = \sum_{i=1}^d a_{ij} e_i$$

此时 $M_A$ 成为 $\mathcal{O}_{\mathcal{E}}$ 上的一个 étale $\varphi$-模, 且其相应的 $T_A = \mathbf{T}(M_A)$ 构成了 $G$ 的一个 $\mathbb{Z}_p$-表示. 

> 注: 回忆

$$\mathbf{T}(M) = (\mathcal{O}_{\widehat{\mathcal{E}^{\text{ur}}}} \otimes_{\mathcal{O}_{\mathcal{E}}} M)^{\varphi = 1}$$

进一步, 由定义可以给出 $G$ 的一个 $p$ 进表示：

$$V_A = \mathbb{Q}_p \otimes_{\mathbb{Z}_p} T_A = \mathbf{V}(D_A)$$

这里 $D_A = \mathcal{E}^d$ 为其关联的 $\mathcal{E}$-向量空间且配备相同的 $\varphi$. 

> 注: $\mathbb{Q}_p$ 被 $\varphi$ 固定. 回忆

$$\mathbf{D}(V) = \mathbf{M}(T)\left[\frac{1}{p}\right] = \mathcal{E} \otimes_{\mathcal{O}_{\mathcal{E}}} \mathbf{M}(T)$$

之前的范畴等价建立了同构意义下,  $d$ 维的 $p$ 进 Galois 表示 $V$ 与 $\mathcal{E}$ 上的 $d$ 维 etale $\varphi$-模 $\mathbf{D}(V)$ 的一一对应.

反之, 对于 $G$ 的任意一个 $d$ 维 $p$ 进表示 $V$, 我们总能找到一个矩阵 $A \in \text{GL}_d(\mathcal{O}_{\mathcal{E}})$ 使得：

$$V \cong V_A$$

给定 $A, B \in \text{GL}_d(\mathcal{O}_{\mathcal{E}})$：
*   $T_A \cong T_B \iff \exists P \in \text{GL}_d(\mathcal{O}_{\mathcal{E}}), \text{ 使得 } B = P^{-1} A \varphi(P)$. 
*   $V_A \cong V_B \iff \exists P \in \text{GL}_d(\mathcal{E}), \text{ 使得 } B = P^{-1} A \varphi(P)$. 

因此, 若我们在 $\text{GL}_d(\mathcal{E})$ 上定义一个等价关系：

$$A \sim B \iff \exists P \in \text{GL}_d(\mathcal{E}), \text{ 使得 } B = P^{-1} A \varphi(P)$$

我们可以得到此等价类集合与 $G$ 的所有 $d$ 维 $p$ 进表示的同构类集合之间的一个双射. 

**Remark 3.37**：若 $A \in \text{GL}_d(\mathcal{O}_{\mathcal{E}})$ 且 $P \in \text{GL}_d(\mathcal{O}_{\mathcal{E}})$, 则可保证 $P^{-1} A \varphi(P) \in \text{GL}_d(\mathcal{O}_{\mathcal{E}})$. 然而, 若 $P \in \text{GL}_d(\mathcal{E})$, 则矩阵 $P^{-1} A \varphi(P)$ 却不一定包含在 $\text{GL}_d(\mathcal{O}_{\mathcal{E}})$ 内. 
