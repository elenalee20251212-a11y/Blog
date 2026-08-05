---
title: "scholze-ag-1"
date: 2026-08-03
articleId: scholze-ag-1
category: miscellaneous/inbox/unclassified
---

# 11 拟凝聚层与闭浸入 (Quasi-Coherent Sheaves and Closed Immersion)

概形是环的几何化，而拟凝聚层则是模的几何化.

**定义 11.1**：设 $A$ 是一个环，$M$ 是一个 $A$-模。在 $X = \operatorname{Spec} A$ 的主开集基底上定义一个预层 $\widetilde{M}$，满足：$$\widetilde{M}(D(f)) = M[f^{-1}], \quad f \in A$$该主开集基底上的预层能唯一延拓为 $X$ 上的一个层 $\widetilde{M}$。其在茎（stalks）上的表现也符合预期:

**命题 11.2**：设 $x \in X = \operatorname{Spec} A$，且 $\mathfrak{p} \subseteq A$ 是 $A$ 中对应于 $x$ 的素理想，则：$$\widetilde{M}_x = M_{\mathfrak{p}}$$

**证明**：$$\widetilde{M}_x = \varinjlim_{D(f) \ni x} M[f^{-1}] = \varinjlim_{f \notin \mathfrak{p}} M[f^{-1}] = M_{\mathfrak{p}}$$证毕。 $\square$

**定义 11.3**：设 $(X, \mathcal{O}_X)$ 是一个环化空间，则一个 $\mathcal{O}_X$-模层是一个阿贝尔群层 $\mathcal{M}$ 加上层态射 $\mathcal{O}_X \times \mathcal{M} \to \mathcal{M}$，使得对于所有开子集 $U \subseteq X$，$\mathcal{M}(U)$ 都是 $\mathcal{O}_X(U)$-模。要求作用映射 $\mathcal{O}_X \times \mathcal{M} \to \mathcal{M}$ 是层态射，保证了限制映射与模结构相契合。

**命题 11.4**：给定 $A$-模 $M$ 和 $X = \operatorname{Spec} A$，则 $\widetilde{M}$ 是一个 $\mathcal{O}_X$-模层。

**证明**：取 $U = D(f) \subseteq X$（其中 $f \in A$）。作用映射 $\mathcal{O}_X(U) \times \widetilde{M}(U) \to \widetilde{M}(U)$ 就是 $A[f^{-1}]$-模结构$$A[f^{-1}] \times M[f^{-1}] \longrightarrow M[f^{-1}]$$且与限制等相互交换。 $\square$

**定理 11.5**：$X=\operatorname{Spec} A$ , 则
1. 由 $M \mapsto \widetilde{M}$ 定义的从 $A$-模范畴到 $\mathcal{O}_X$-模层范畴的函子是全忠实的。
2. 设 $\mathcal{M}$ 是一个 $\mathcal{O}_X$-模层，假设存在 $X$ 的开覆盖 $\{D(f_i)\}$（其中 $f_i \in A$），使得对于某些 $A[f_i^{-1}]$-模 $M_i$，有限制层 $\mathcal{M}|_{D(f_i)} \cong \widetilde{M_i}$。那么存在一个 $A$-模 $M$，使得 $\widetilde{M} \cong \mathcal{M}$。
（注：必然有 $M = \mathcal{M}(X)$，但上述定理在先不假定 $M$ 存在的情况下，保证了其存在性。）

**定义 11.6**：设 $X$ 是一个概形，则 $X$ 上的拟凝聚层（quasi-coherent sheaf）是一个 $\mathcal{O}_X$-模层 $\mathcal{M}$，满足存在 $X$ 的一个仿射开覆盖 $\{U_i = \operatorname{Spec} A_i\}$ 及 $A_i$-模 $M_i$，使得 $\mathcal{M}|_{U_i} \cong \widetilde{M_i}$。拟凝聚层之间的态射就是 $\mathcal{O}_X$-模层之间的态射。

**推论 11.7**：给定仿射概形 $X = \operatorname{Spec} A$，则在 $A$-模范畴与 $X$ 上的拟凝聚层范畴之间存在范畴等价，其由 $M \mapsto \widetilde{M}$ 给出，其逆映射为 $\mathcal{M} \mapsto \mathcal{M}(X)$。特别是，这意味着给定概形 $X$ 及仿射开子集 $\operatorname{Spec} A = U \subseteq X$，任何 $X$ 上的拟凝聚层 $\mathcal{M}$ 限制到 $U$ 上都具有 $\widetilde{M}$ 的形式，其中 $M$ 是一个 $A$-模。

**证明**：由上述定义可得到如下交换图：
```tikz {embedFontCss=true}
\begin{tikzcd}
\{ A\text{-modules} \} \arrow[r, "F_1"] \arrow[dr, "F_2"'] & \{ \text{Quasi-coherent sheaves on } X \} \arrow[d, "\text{full inc.}"] \\
& \{ \text{Sheaves of } \mathcal{O}_X\text{-modules} \}
\end{tikzcd}
```
定理 11.5 的第 1 部分说明 $F_2$ 是全忠实的，从而由于上述右侧的包含是一个全子范畴的嵌入，可以推出 $F_1$ 也是全忠实的。定理 11.5 的第 2 部分说明 $F_1$ 是本质满的（essentially surjective），因此我们得到了范畴等价。证毕。 $\square$

**定理 11.5 的证明**：首先处理第 1 部分。设 $M$ 是 $A$-模，$\mathcal{N}$ 是 $\mathcal{O}_X$-模层，将证明以下映射是自然的双射：$$\operatorname{Hom}_{\mathcal{O}_X}(\widetilde{M}, \mathcal{N}) \longrightarrow \operatorname{Hom}_A(M, \mathcal{N}(X)) \tag{11.8}$$代入 $\mathcal{N} = \widetilde{N}$ 即可得到定理第 1 部分的结论（利用 $\widetilde{N}(X) = N$）。从范畴论的角度，这蕴含了 $A$-模范畴与 $\mathcal{O}_X$-模层范畴之间的伴随关系，其左伴随为 $M \mapsto \widetilde{M}$，右伴随为 $\mathcal{M} \mapsto \mathcal{M}(X)$。

这个双射是局部化性质的立即推论, 因为所有主开集上模层同态都是 $M\to \mathcal{N}(X)$ global section映射的局部化 ( 因此单射 ), 反过来任何 $M\to \mathcal{N}(X)$ 模同态局部化就给出了模层同态 ( 因此满射 ) , 因此证明了第一部分. 具体来说如下所述: 

**单射性**：设 $\phi, \phi': \widetilde{M} \to \mathcal{N}$ 是两个 $\mathcal{O}_X$-模层映射，且满足global section的映射相同 $\psi = \phi(X) = \phi'(X) : M \to \mathcal{N}(X)$ . 对开子集 $U = D(f) \subseteq X$（其中 $f \in A$）有交换图：
```tikz {embedFontCss=true}
\begin{tikzcd}
M \arrow[r, "\text{res}^X_U"] \arrow[d, "\psi"'] & M[f^{-1}] \arrow[d, shift left=1.5ex, "\phi(U)"] \arrow[d, shift right=1.5ex, "\phi'(U)"'] \\
\mathcal{N}(X) \arrow[r, "\text{res}^X_U"'] & \mathcal{N}(U)
    \end{tikzcd}
```
一般地，若 $M$ 是 $A$-模，$\mathcal{N}(U)$ 是 $A[f^{-1}]$-模，则映射 $M \to \mathcal{N}(U)$ 只能以唯一的一条路径通过 $M[f^{-1}] = M \otimes_A A[f^{-1}]$ 分解。因此对所有开子集 $U \subseteq X$ 有 $\phi(U) = \phi'(U)$，从而 $\phi = \phi'$。因此，映射 (11.8) 是单射。

上述的分解是如下更一般的同构的特例: 

**命题 11.9**：给定环同态 $g : A \to B$，一个 $A$-模 $M$ 和一个 $B$-模 $N$，有如下伴随同构：$$\operatorname{Hom}_A(M, N) \cong \operatorname{Hom}_B(M \otimes_A B, N)$$其中左侧的 $N$ 通过 $g$ 赋予了 $A$-模结构。

现在继续证明**满射性**: 

任取一个 $A$-模态射 $\psi : M \to \mathcal{N}(X)$。对每个 $U = D(f)$（其中 $f \in A$），有以下交换图：
```tikz {embedFontCss=true}
\begin{tikzcd}
M \arrow[r, "\text{res}^X_U"] \arrow[d, "\psi"'] & M[f^{-1}] \arrow[d, dashed, "\psi_U"] \\
\mathcal{N}(X) \arrow[r, "\text{res}^X_U"'] & \mathcal{N}(U)
\end{tikzcd}
```
注意到 $\mathcal{N}(U)$ 是 $A[f^{-1}]$-模，利用上述换环伴随性质，我们能得到唯一的 $A[f^{-1}]$-模虚线态射 $\psi_U : M[f^{-1}] \to \mathcal{N}(U)$，使得上述图表交换。这些映射 $\psi_U$ 在 $X$ 的主开集基底上唯一地组装成一个 $\mathcal{O}_X$-模层映射 $\widetilde{M} \to \mathcal{N}$。这可以唯一地延拓到整个 $X$。

**第 2 部分的证明**：设 $M = \mathcal{M}(X)$。根据第 1 部分的证明，已知有伴随映射 $\phi : \widetilde{M} \to \mathcal{M}$。为了证明它是一个同构，只需证对所有 $g \in A$，映射 $\phi(D(g)): M[g^{-1}] \to \mathcal{M}(D(g))$ 是同构。

取 $X$ 的由仿射开集 $U_i = D(f_i)$ 组成的覆盖，它给出了 $D(g)$ 的一个覆盖 $D(f_i) \cap D(g) = D(f_i g)$。因为 $X$ 是拟紧的，我们只需要有限个这样的开集 ( 从而直积等于直和 )。

我们可以将 $M$ 表示为等化子（equalizer）：$$\begin{aligned}M &= \operatorname{eq}\left( \bigoplus_i \mathcal{M}(D(f_i)) \rightrightarrows \bigoplus_{i,j} \mathcal{M}(D(f_i f_j)) \right) \\&= \operatorname{eq}\left( \bigoplus_i M_i \rightrightarrows \bigoplus_{i,j} M_{i,j} \right)\end{aligned}$$由于局部化保持正合, 利用性质 $\mathcal{M}(D(f_i g)) = M_i[g^{-1}]$（源于 $\mathcal{M}|_{D(f_i)} = \widetilde{M_i}$），我们有：$$\begin{aligned}M[g^{-1}] &= \operatorname{eq}\left( \bigoplus_i \mathcal{M}(D(f_i g)) \rightrightarrows \bigoplus_{i,j} \mathcal{M}(D(f_i f_j g)) \right) \\&= \operatorname{eq}\left( \bigoplus_i M_i[g^{-1}] \rightrightarrows \bigoplus_{i,j} M_{i,j}[g^{-1}] \right) \\&= \mathcal{M}(D(g))\end{aligned}$$最后一个等号利用了 $\mathcal{M}$ 是一个层的性质。证毕。 $\square$

**推论 11.10** [粘合模 (Gluing Modules)] ： 由 $M \mapsto M_i = M[f_i^{-1}]$ 定义的, 从$A$-模范畴到下述范畴的函子是范畴等价：由 $A[f_i^{-1}]$-模 $M_i$ 带有满足cocycle condition的同构 $\alpha_{ij} : M_i[f_j^{-1}] \to M_j[f_i^{-1}]$ 为对象组成的范畴。

**证明**：我们有如下范畴等价链：$$\begin{aligned}\{A\text{-modules}\} &\cong \{\text{quasi-coherent sheafs on } \operatorname{Spec} A\} \\&\cong \{\text{quasi-coherent sheaves on } D(f_i) + \text{gluing data}\} \\&\cong \{\text{collections } (M_i, \alpha_{i,j}) \text{ as above}\}\end{aligned}$$证毕。 $\square$

**定义 11.11**：概形态射 $f : Z \to X$ 称为闭浸入（closed immersion），如果它在拓扑空间上诱导的映射是一个闭浸入（即到闭子空间的同胚），且层映射 $f^\sharp : \mathcal{O}_X \to f_* \mathcal{O}_Z$ 是满射。

**命题 11.12**：设 $f : Z \to X$ 是概形之间的态射，则以下条件等价：
1. $f$ 是闭浸入。
2. 对所有仿射开子集 $U \subseteq X$（满足 $U = \operatorname{Spec} A$），其逆像 $f^{-1}(U) = \operatorname{Spec} B \subseteq Z$ 是仿射开集，且环同态 $A \to B$ 是满射。
3. 存在 $X$ 的一个由仿射概形组成的开覆盖，满足第 2 条的性质。

**备注 11.13**：特别地，若 $X = \operatorname{Spec} A$ 为仿射概形，则闭浸入与满同态 $A \to B$ 一一对应。

对于一般的概形态射 $f : X \to Y$，前推层 $f_* \mathcal{O}_X$ 不总是拟凝聚层，但在接下来的命题所描述的情况下它是拟凝聚的。

**定义 11.14**：空间 $X$ 被称为拟紧的，如果它是紧的；被称为拟分离（quasi-separated）的，如果给定两个拟紧开子集 $U$ 和 $V$，其交集 $U \cap V$ 也是拟紧开子集。概形态射被称作拟紧（或拟分离）的，如果拟紧（或拟分离）开子集的逆像也是拟紧（或拟分离）的。
（注：仿射概形是拟分离的，因为主开集的基底是拟紧的，且它们的交集也是拟紧的。一般而言，绝大多数概形和态射都是拟紧且拟分离的。）

**命题 11.15**：设 $f : Y \to X$ 是一个拟紧且拟分离的概形态射，且 $\mathcal{M}$ 是 $Y$ 上的一个拟凝聚层，那么以其天然的 $\mathcal{O}_X$-结构，前推层 $f_* \mathcal{M}$ 是 $X$ 上的一个拟凝聚层。

**证明**：我们可以假定 $X$ 是仿射的，即 $X = \operatorname{Spec} A$ 是拟紧且拟分离的。由假设 $Y$ 也是拟紧且拟分离的，因此 $Y = \bigcup_i \operatorname{Spec} B_i$ 是有限个环 $B_i$ 谱的有限并。对所有的 $i$ 和 $j$，$\operatorname{Spec} B_i \cap \operatorname{Spec} B_j \subseteq Y$ 可以写为有限并：$$\bigcup_{k \in J_{ij}} \operatorname{Spec} B_{i,j,k}$$令 $M = (f_* \mathcal{M})(X) = \mathcal{M}(Y)$，我们要证明映射 $\phi : \widetilde{M} \to f_* \mathcal{M}$ 是一个同构。对所有 $g \in A$，我们要证明：$$\phi(D(g)) : M[g^{-1}] \longrightarrow (f_* \mathcal{M})(D(g))$$是同构。与定理 11.5 第 2 部分的证明类似，我们有：$$M = \mathcal{M}(Y) = \operatorname{eq}\left( \prod_i \mathcal{M}(\operatorname{Spec} B_i) \rightrightarrows \prod_{i,j, k \in J_{ij}} \mathcal{M}(\operatorname{Spec} B_{i,j,k}) \right)$$由于 $J_{ij}$ 是有限集，这些直积等同于直和。因为局部化是正合的，我们得到：$$M[g^{-1}] = \operatorname{eq}\left( \prod_i \mathcal{M}(\operatorname{Spec} B_i)[g^{-1}] \rightrightarrows \prod_{i,j, k \in J_{ij}} \mathcal{M}(\operatorname{Spec} B_{i,j,k})[g^{-1}] \right)$$由于 $\mathcal{M}$ 是拟凝聚层以及它满足层的性质，可得：$$\begin{aligned}M[g^{-1}] &= \operatorname{eq}\left( \prod_i \mathcal{M}(\operatorname{Spec} B_i[g^{-1}]) \rightrightarrows \prod_{i,j, k \in J_{ij}} \mathcal{M}(\operatorname{Spec} B_{i,j,k}[g^{-1}]) \right) \\&= \mathcal{M}(f^{-1}(D(g))) \\&= (f_* \mathcal{M})(D(g))\end{aligned}$$因此 $\widetilde{M} \to f_* \mathcal{M}$ 是一个同构。证毕。 $\square$

**命题 11.12 的证明**：
**第 3 部分蕴含第 1 部分**：我们可以在局部进行验证。层的满射可在茎上验证，而空间的闭映射也可以在覆盖上验证。

假设 $X = \operatorname{Spec} A$ 且 $Z = \operatorname{Spec} B$，令 $p : A \twoheadrightarrow B$ 为满同态。设 $I \subseteq A$ 是该满射 $p$ 的核，则有 $|\operatorname{Spec} B| = V(I) \subseteq |\operatorname{Spec} A|$，而 $V(I)$ 在 $\operatorname{Spec} A$ 中是闭集。此外，对于所有的 $g \in A$，我们有：$$A[g^{-1}] = \mathcal{O}_X(D(g)) \longrightarrow (f_* \mathcal{O}_Z)(D(g)) = \mathcal{O}_{\operatorname{Spec} B}(D(p(g))) = B[p(g)]^{-1}$$由于局部化是正合的，上述映射 $A[g^{-1}] \to B[p(g)]^{-1}$ 是满射。

**第 1 部分蕴含第 2 部分**：同样在局部进行验证。设 $X = \operatorname{Spec} A$，因为 $|Z| \subseteq |X|$ 是闭的，这说明 $Z$ 也是拟紧且拟分离的（因为 $X$ 是仿射的，因而是拟分离的）。因此命题 11.15 保证了 $f_* \mathcal{O}_Z$ 是拟凝聚层，所以有：$$f_* \mathcal{O}_Z \cong \widetilde{B}$$其中 $B = (f_* \mathcal{O}_Z)(X) = \mathcal{O}_Z(Z)$ 是一个 $A$-代数。已知我们有一个满射 $\mathcal{O}_X \to f_* \mathcal{O}_Z$。根据第六次作业的第 3 题，若 $X = \operatorname{Spec} A$，则 $\mathcal{O}_X$-模序列是正合的，当且仅当其全局截面序列作为 $A$-模是正合的。这说明我们有满射 $A \to B$ ( 从而 $\operatorname{Spec} B$ 可以看作 $\operatorname{Spec} A$ 的子集 ) 。

我们想证明 $Z = \operatorname{Spec} B$。 $A$-代数映射 $B \to \mathcal{O}_Z(Z)$ 诱导了一个在 $\operatorname{Spec} A$ 上的概形态射 $\phi : Z \to \operatorname{Spec} B$ , 接下来只需证明 $\phi$ 是一个同构。

若存在某个 $x \in \operatorname{Spec} B \setminus Z$，那么恒有 $0 = (f_* \mathcal{O}_Z)_x = \widetilde{B}_x \neq 0$（因为 $x \in \operatorname{Spec} B$ , 这里 $x$ 看作 $\operatorname{Spec} A$ 中元素），矛盾。因此拓扑空间上 $|Z| = |\operatorname{Spec} B|$ . 而对于层则有：$$\mathcal{O}_Z(D(g) \cap Z) = (f_* \mathcal{O}_Z)(D(g)) = \widetilde{B}(D(g)) = B[g^{-1}] = \mathcal{O}_{\operatorname{Spec} B}(D(g) \cap Z)$$由此得到 $\mathcal{O}_Z = \mathcal{O}_{\operatorname{Spec} B}$。证毕。 $\square$

---

# 12 向量丛与Picard群 (Vector Bundles and the Picard Group)

**备注 12.1**：
设 $X$ 是一个环设空间。类似于 $\mathcal{O}_X$-模，我们可以定义 $\mathcal{O}_X$-代数。即：作为交换环层 $\mathcal{A}$ 且其带有 $\mathcal{O}_X$-模结构；或者等价地，其带有环层态射 $\mathcal{O}_X \to \mathcal{A}$ 的结构。

**定义 12.2**：
设 $\mathcal{M}$ 和 $\mathcal{N}$ 是 $\mathcal{O}_X$-模，我们将它们的张量积 $\mathcal{M} \otimes_{\mathcal{O}_X} \mathcal{N}$ 定义为如下指派的层化（sheafification）：
$$
U \longmapsto \mathcal{M}(U) \otimes_{\mathcal{O}_X(U)} \mathcal{N}(U)
$$
若 $\mathcal{M} = \mathcal{A}$ 是 $\mathcal{O}_X$-代数，则张量积 $\mathcal{A} \otimes_{\mathcal{O}_X} \mathcal{N}$ 是 $\mathcal{A}$-模；若 $\mathcal{N}$ 也是 $\mathcal{O}_X$-代数，则该张量积也是一个 $\mathcal{O}_X$-代数。
特别地，若 $X = \operatorname{Spec} A$，且 $\mathcal{M} = \widetilde{M}$，$\mathcal{N} = \widetilde{N}$ 是拟凝聚 $\mathcal{O}_X$-模，那么 $\mathcal{M} \otimes_{\mathcal{O}_X} \mathcal{N} = \widetilde{M \otimes_A N}$。实际上，对于 $V = D(f) \subseteq X$（其中 $f \in A$），有：
$$
\mathcal{M}(D(f)) \otimes_{\mathcal{O}_X(D(f))} \mathcal{N}(D(f)) = M[f^{-1}] \otimes_{A[f^{-1}]} N[f^{-1}] = (M \otimes_A N)[f^{-1}] = \widetilde{M \otimes_A N}(D(f))
$$
在这种情况中，此预层本身就是层，因而不需要层化。

**推论 12.3**：
若 $X$ 是一个方案，$\mathcal{M}$ 和 $\mathcal{N}$ 是拟凝聚层，则 $\mathcal{M} \otimes_{\mathcal{O}_X} \mathcal{N}$ 也是拟凝聚层。

**证明**：我们可以在局部仿射开集上进行验证，由上述讨论即得。 $\square$

**定义 12.4**：设 $(f, f^\sharp) : (Y, \mathcal{O}_Y) \to (X, \mathcal{O}_X)$ 是环设空间之间的映射。
1. 若 $\mathcal{N}$ 是 $\mathcal{O}_Y$-模，则前推层 $f_*\mathcal{N}$ 带有如下结构态射，使其成为 $\mathcal{O}_X$-模：
```tikz {embedFontCss=true}
\begin{tikzcd}
\mathcal{O}_X \times f_*\mathcal{N} \arrow[r, "f^\sharp \times \operatorname{id}_{f_*\mathcal{N}}"] & f_*\mathcal{O}_Y \times f_*\mathcal{N} \arrow[r, equal] & f_*(\mathcal{O}_Y \times \mathcal{N}) \arrow[r, "f_*(-)"] & f_*\mathcal{N}
\end{tikzcd}
```
2. 若 $\mathcal{M}$ 是 $\mathcal{O}_X$-模，则 $f^{-1}\mathcal{M}$ 是一个通过如下映射定义的 $f^{-1}\mathcal{O}_X$-模层：
   $$
   f^{-1}\mathcal{O}_X \times f^{-1}\mathcal{M} = f^{-1}(\mathcal{O}_X \times \mathcal{M}) \longrightarrow f^{-1}(\mathcal{M})
   $$
   现将拉回层（pullback） $f^*\mathcal{M}$ 定义为如下 $\mathcal{O}_Y$-模：
   $$
   f^*\mathcal{M} = f^{-1}\mathcal{M} \otimes_{f^{-1}\mathcal{O}_X} \mathcal{O}_Y
   $$

**命题 12.5**：
存在一对伴随，其中左伴随为 $f^*$，右伴随为 $f_*$。即对每一个 $\mathcal{O}_X$-模 $\mathcal{M}$ 和每一个 $\mathcal{O}_Y$-模 $\mathcal{N}$，存在如下自然等同：
$$
\operatorname{Hom}_{\mathcal{O}_Y}(f^*\mathcal{M}, \mathcal{N}) \cong \operatorname{Hom}_{\mathcal{O}_X}(\mathcal{M}, f_*\mathcal{N})
$$
**证明简述**：
    我们已具备如下伴随：
    $$
    \operatorname{Hom}(f^{-1}\mathcal{M}, \mathcal{N}) \cong \operatorname{Hom}(\mathcal{M}, f_*\mathcal{N}) \supseteq \operatorname{Hom}_{\mathcal{O}_X}(\mathcal{M}, f_*\mathcal{N})
    $$
    右侧子集对应于 $\mathcal{O}_X$-线性映射 $\mathcal{M} \to f_*\mathcal{N}$。在左侧对应的子集为 $f^{-1}\mathcal{O}_X$-线性映射 $f^{-1}\mathcal{M} \to \mathcal{N}$，即 $\operatorname{Hom}_{f^{-1}\mathcal{O}_X}(f^{-1}\mathcal{M}, \mathcal{N})$。因此我们有伴随：
    $$
    \operatorname{Hom}_{f^{-1}\mathcal{O}_X}(f^{-1}\mathcal{M}, \mathcal{N}) \cong \operatorname{Hom}_{\mathcal{O}_X}(\mathcal{M}, f_*\mathcal{N})
    $$
    接着，利用换环同构（change of rings isomorphism）转换左侧：
    $$
    \operatorname{Hom}_{f^{-1}\mathcal{O}_X}(f^{-1}\mathcal{M}, \mathcal{N}) \cong \operatorname{Hom}_{\mathcal{O}_Y}(f^{-1}\mathcal{M} \otimes_{f^{-1}\mathcal{O}_X} \mathcal{O}_Y, \mathcal{N}) \cong \operatorname{Hom}_{\mathcal{O}_Y}(f^*\mathcal{M}, \mathcal{N})
    $$
    证毕。 $\square$

**命题 12.6**：
1. 设 $f : Y \to X$ 是方案之间的任意映射，且 $\mathcal{M}$ 是拟凝聚 $\mathcal{O}_X$-模，则 $f^*\mathcal{M}$ 是拟凝聚 $\mathcal{O}_Y$-模。
2. 若 $Y = \operatorname{Spec} B$ 且 $X = \operatorname{Spec} A$，则 $\mathcal{M} \cong \widetilde{M}$（对某个 $A$-模 $M$），且 $f^*\mathcal{M} \cong \widetilde{M \otimes_A B}$。
**证明**：
    对于第 1 部分，可以用仿射开集 $V = \operatorname{Spec} B \subseteq Y$ 覆盖 $Y$，使其映射到仿射开集 $U = \operatorname{Spec} A \subseteq X$ 内。令 $g : V \to U$ 为 $f$ 在 $V$ 上的限制，那么有 $(f^*\mathcal{M})|_V = g^*(\mathcal{M}|_V)$。要验证 $f^*\mathcal{M}$ 的拟凝聚性，只需验证 $g^*(\mathcal{M}|_V)$ 的拟凝聚性即可。这说明我们可以将 $Y$ 用 $\operatorname{Spec} B$ 代替，且将 $X$ 用 $\operatorname{Spec} A$ 代替。因此只需证明第 2 部分。在此情况下 $\mathcal{M} = \widetilde{M}$，并且对所有 $\mathcal{O}_Y$-模 $\mathcal{N}$，我们有如下一连串同构：
    $$
    \begin{aligned}
    \operatorname{Hom}_{\mathcal{O}_Y}(f^*\mathcal{M}, \mathcal{N}) &\cong \operatorname{Hom}_{\mathcal{O}_X}(\mathcal{M}, f_*\mathcal{N}) \\
    &\cong \operatorname{Hom}_A(M, f_*\mathcal{N}(X)) \\
    &= \operatorname{Hom}_A(M, \mathcal{N}(Y)) \\
    &\cong \operatorname{Hom}_B(M \otimes_A B, \mathcal{N}(Y)) \\
    &\cong \operatorname{Hom}_{\mathcal{O}_Y}(\widetilde{M \otimes_A B}, \mathcal{N})
    \end{aligned}
    $$
    由 Yoneda 引理可得 $f^*\mathcal{M} \cong \widetilde{M \otimes_A B}$。证毕。 $\square$

**例子 12.7**：
定理 10.7 中对于所有环 $R$ 的 $\mathbb{P}^n_{\mathbb{Z}}(R)$ 刻画可推广到任意方案上。

**定义 12.8**：
若 $X$ 是一个方案，则一个可逆 $\mathcal{O}_X$-模 $\mathcal{L}$ 是一个拟凝聚 $\mathcal{O}_X$-模，满足存在一个拟凝聚 $\mathcal{O}_X$-模 $\mathcal{N}$ 使得 $\mathcal{L} \otimes_{\mathcal{O}_X} \mathcal{N} \cong \mathcal{O}_X$。

**备注 12.9**：
1. 若 $X = \operatorname{Spec} A$，则 $\mathcal{L} \cong \widetilde{L}$ 对某个 $A$-模 $L$ 成立，且 $\mathcal{L}$ 是可逆的当且仅当 $L$ 是可逆的。
2. 我们完全可以不使用上述定义中的“拟凝聚”一词进行定义，此情况下 $\mathcal{L}$ 依然是一个拟凝聚层。对此事实的证明简述为：证明任何这样的可逆 $\mathcal{O}_X$-模在 $X$ 上局部上均为 $\mathcal{O}_X^n$（对某个 $n$）的直接加项，这与 $A$-模的情况完全类似。

**推论 12.10**：
对于任何方案 $X$，有：
$$
\mathbb{P}^n_{\mathbb{Z}}(X) \cong \{\mathcal{O}_X^{n+1} \twoheadrightarrow \mathcal{L} \mid \text{满射，其中 } \mathcal{L} \text{ 为可逆 } \mathcal{O}_X\text{-模}\} /\sim
$$
**证明**：
    给定开子集 $U \subseteq X$，我们定义两个预层：$U \mapsto \mathbb{P}^n(U)$ 以及 $U \mapsto \{\mathcal{O}_U^{n+1} \to \mathcal{L}\}/\sim$。这两个层在一个仿射开覆盖上相一致，因而它们必然相等。实际上，它们之间存在一个天然的态射，当其在仿射开集上评估时是一个同构。证毕。 $\square$
    特别是，若 $X = \mathbb{P}^n_{\mathbb{Z}}$，我们有 $\operatorname{id} \in \mathbb{P}^n_{\mathbb{Z}}(\mathbb{P}^n_{\mathbb{Z}})$，并且获得了一个自然的（“重言”）满射 $\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}^{n+1} \twoheadrightarrow \mathcal{L}$，其中 $\mathcal{L}$ 是一个可逆的 $\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}$-模。

**定义 12.11**：
我们定义 $\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}(1) := \mathcal{L}$。对于 $m \ge 1$，有 $\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}(m) := \mathcal{L}^{\otimes m}$；对于 $m < 0$，有：
$$
\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}(m) := \mathcal{H}om_{\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}}(\mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}}(-m), \mathcal{O}_{\mathbb{P}^n_{\mathbb{Z}}})
$$

**定义 12.12**：
对于任何方案 $X$，定义 $X$ 的 Picard 群为：
$$
\operatorname{Pic}(X) = \{\text{可逆 } \mathcal{O}_X\text{-模}\} /\cong
$$
这是一个阿贝尔群，因为如果 $\mathcal{L}$ 和 $\mathcal{L}'$ 是可逆 $\mathcal{O}_X$-模，则 $\mathcal{L} \otimes_{\mathcal{O}_X} \mathcal{L}'$ 也是可逆的，且由于 $\mathcal{L}$ 是可逆的，每一个 $\mathcal{L}$ 都有一个逆。由于张量积在同构意义下满足交换律，该群是阿贝尔群。

**定理 12.13**：
对于任意域 $k$，我们可以通过发送 $m \mapsto \mathcal{O}_{\mathbb{P}^n_k}(m)$ 来计算：$\mathbb{Z} \cong \operatorname{Pic}(\mathbb{P}^n_k)$。

**定义 12.14**：
给定一个环 $R$，我们定义 $\mathbb{P}^n_R$ 如下：
$$
\mathbb{P}^n_R = \mathbb{P}^n_{\mathbb{Z}} \times_{\operatorname{Spec} \mathbb{Z}} \operatorname{Spec} R
$$
通常可逆 $\mathcal{O}_X$-模常被直接称为线丛（Geradenbündel）。

**定理 12.15**：
设 $X$ 是一个方案，$\mathcal{L}$ 是可逆 $\mathcal{O}_X$-模，则 $\mathcal{L}$ 在所有 $X$ 之上的方案 $f : Y \to X$ 上定义了一个函子 $\mathbb{V}(\mathcal{L})$：
$$
\mathbb{V}(\mathcal{L})(Y) := (f^*\mathcal{L})(Y) = \Gamma(Y, f^*\mathcal{L})
$$
此函子可由一个在 $X$ 之上同样记作 $\mathbb{V}(\mathcal{L})$ 的方案表示，使得存在 $X$ 的一个覆盖 $X = \bigcup_i U_i$，满足：
$$
\mathbb{V}(\mathcal{L}) \times_X U_i = \mathbb{V}(\mathcal{L})|_{U_i} \cong U_i \times \mathbb{A}^1
$$
方案 $\mathbb{V}(\mathcal{L})$ 可以看作一个线丛。

**证明**：
    利用一般的粘合引理，只需在 $X$ 局部上证明该结果即可。假设 $X = \operatorname{Spec} A$，使得 $\mathcal{L} = \widetilde{L}$，那么 $L$ 在 $\operatorname{Spec} A$ 上局部自由且秩为 1。在此情况下，我们假定 $L = A$，从而有：
    $$
    \mathbb{V}(\mathcal{L})(Y) = f^*\mathcal{L}(Y) = f^*(\mathcal{O}_X)(Y) \cong \mathcal{O}_Y(Y) \cong \operatorname{Hom}_{\text{Ring}}(\mathbb{Z}[T], \mathcal{O}_Y(Y))
    $$
    我们随后利用纤维积的普遍性质得到：
    $$
    \mathbb{V}(\mathcal{L})(Y) = \operatorname{Hom}_{\text{Ring}}(\mathbb{Z}[T], \mathcal{O}_Y(Y)) \cong \operatorname{Hom}_{\text{Sch}}(Y, \mathbb{A}^1) \cong \operatorname{Hom}_{\text{Sch}/X}(Y, \mathbb{A}^1 \times X)
    $$
    以此，我们能看到 $\mathbb{V}(\mathcal{L})$ 局部上由 $X \times \mathbb{A}^1$ 表示。证毕。 $\square$

**定义 12.16**：
给定一个方案 $X$，则一个向量丛（vector bundle） $\xi$ 是一个局部自由且秩有限的 $\mathcal{O}_X$-模层，即存在一个覆盖 $X = \bigcup_i U_i$，在每个 $U_i$ 上有：
$$
\xi|_{U_i} \cong \mathcal{O}_{U_i}^{n_i}
$$
其中 $n_i \ge 0$。需要注意，$n_i$ 并不需要对所有 $i$ 都恒定。如果对所有 $i$ 都有 $n_i = n$，则称 $\xi$ 为秩为 $n$ 的向量丛。

**备注 12.17**：
如果 $\xi$ 是一个向量丛，那么它实际上是一个拟凝聚层。如果一个向量丛的秩为 1，那么它就是一个线丛，且恰好是一个可逆 $\mathcal{O}_X$-模。

**命题 12.18**：
设 $\xi$ 是 $X$ 上的一个向量丛，则 $\mathbb{V}(\xi)(Y) = (f^*\xi)(Y)$ 可以由一个在 $X$ 之上的方案 $\mathbb{V}(\xi)$ 表示。且存在覆盖 $X = \bigcup_i U_i$，使得有 $\mathbb{V}(\xi)|_{U_i} \cong U_i \times \mathbb{A}^{n_i}$。

**证明**：
    此证明与定理 12.15 相同，需要用到：
    $$
    \mathcal{O}_Y(Y)^{n_i} \cong \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}[T_1, \dots, T_{n_i}], \mathcal{O}_Y(Y))
    $$
    证毕。 $\square$

**定义 12.19**：
一个拟凝聚 $\mathcal{O}_X$-模层 $\mathcal{M}$ 被称为有限型的（of finite type），如果存在一个开覆盖 $X = \bigcup_i U_i$，其中 $U_i = \operatorname{Spec} A_i$，使得 $\mathcal{M}(U_i)$ 是一个有限生成 $A_i$-模。
显然，任何向量丛都是有限型的。

**命题 12.20**：
若 $X = \operatorname{Spec} A$ 且 $\mathcal{M} = \widetilde{M}$，则 $\mathcal{M}$ 是有限型的当且仅当 $M$ 是有限生成的。

**证明**：
    若 $M$ 有限生成，则 $\mathcal{M}$ 显然是有限型的。反过来，设 $X = \bigcup_i D(f_i)$ 为某个由有限个 $f_i \in A$ 组成的主开集覆盖。作为 $A[f_i^{-1}]$-模，其截面 $\mathcal{M}(D(f_i)) = M[f_i^{-1}]$ 是有限生成的。对每个 $i$，我们选择一组有限的生成元 $m_{ij}/f_i^{n_j}$（其中 $m_{ij} \in M$ 且 $n_j \ge 0$），由于 $i$ 只有有限个，这一套所有的 $m_{ij}$ 的集合必然是有限的。我们声称，这些 $m_{ij}$ 生成了 $M$。因为由这些 $m_{ij}$ 导出的映射 $A^N \to M$（其中 $N$ 是所有 $i$ 和 $j$ 的总和）在局部化每个 $f_i$ 之后是满射，进而 $A^N \to M$ 本身是满射。因此 $M$ 是有限生成的。证毕。 $\square$
