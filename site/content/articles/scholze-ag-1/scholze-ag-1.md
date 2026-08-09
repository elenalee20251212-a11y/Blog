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

