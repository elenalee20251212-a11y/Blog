---
title: Notes on Serre's Local Fields 3
date: 2026-06-22T19:29:29.000Z
tags: null
articleId: notes-on-serre-s-local-fields-3
category: mathematics/number-theory/serre-local-fields
order: 3
---

# 第三章 判别式与共轭差积 (Different) 

本章中始终记 $A$ 为 Dedekind 环，$K$ 为其分式域。

## §1. 格

令 $V$ 为 $K$ 上的有限维向量空间。$V$ 的一个**格**（相对于 $A$）是 $V$ 的一个子-$A$-模 $X$，它是有限生成的，并且张成 $V$。如果 $A$ 是PID，这等价于说 $X$ 是秩为 $[V:K]$ 的自由 $A$-模；通过局部化，即将 $A$ 换成 $A_{\mathfrak p}$ 并将 $X$ 换成 $A_{\mathfrak p}X=X_{\mathfrak p}$，通常可以归约到这种情形。

令 $X_1,X_2$ 为 $V$ 的两个格；如果 $X_2\subset X_1$，则 $X_1/X_2$ 是有限长度的模，其不变量 $\chi(X_1/X_2)$ 是 $A$ 的非零理想，这个不变量在第一章 §5 中已经定义。我们希望将这个定义推广，从而为任意一对格定义不变量。

> 注: $\chi$ 定义为, 对有限长度的模 $M$ , 取 $M$ 的合成列$$0=M_0\subset M_1\subset \cdots\subset M_m=M$$其中 $M_i/M_{i-1}\cong A/\mathfrak{p}_i$ , 定义 $\chi_A(M)=\prod \mathfrak{p}_i$ . 对正合列$$0\to M'\to M\to M''\to 0$$有 $\chi_A(M)=\chi_A(M')\chi_A(M'')$ ..

**引理 1**：若 $X_1$、$X_2$ 是 $V$ 的格，则对于任意满足 $X_3\subset X_1\cap X_2$ 的格 $X_3$，分式理想 $\chi(X_1/X_3)\chi(X_2/X_3)^{-1}$ 只依赖于 $X_1$ 与 $X_2$。

**证明**：事实上，令 $X_4=X_1\cap X_2$。$\chi$ 的乘性给出$$\chi(X_1/X_3)=\chi(X_1/X_4)\chi(X_4/X_3)$$同理$$\chi(X_2/X_3)=\chi(X_2/X_4)\chi(X_4/X_3)$$因此$$\chi(X_1/X_3)\chi(X_2/X_3)^{-1}=\chi(X_1/X_4)\chi(X_2/X_4)^{-1}$$

$\square$

于是，可以对 $X_1$、$X_2$ 定义非零分式理想$$\chi(X_1,X_2)=\chi(X_1/X_3)\chi(X_2/X_3)^{-1},\quad X_3\subset X_1\cap X_2$$根据引理，这一定义与 $X_3$ 的选择无关。

> 注: 这样的 $X_3$ 总存在, 实际上考虑 $X_1$ 的生成元组到 $X_2$ 的生成元组 ( $A$  不一定是PID, 未必是 $A$-基.. ) 的转移矩阵, 存在 $a\in A$ , $aX_1\subset X_2$ ...

**命题 1**：下列公式成立：
1. $\chi(X_1,X_2)\chi(X_2,X_3)\chi(X_3,X_1)=1$
2. $\chi(X_1,X_2)\chi(X_2,X_1)=1$
3. $\chi(X_1,X_2)=\chi(X_1/X_2)$ 若 $X_1\supset X_2$ .

这里的 $1$ 表示 $A$ 的非零分式理想群的单位元，即理想 $A$ .

**证明**：公式 (a) 的证明是：取一个包含在 $X_1\cap X_2\cap X_3$ 中的格 $X$，并将 $\chi(X_i,X_j)$ 写成 $\chi(X_i/X)\chi(X_j/X)^{-1}$ 的形式。公式 (b) , (c) 是平凡的。$\square$

**命题 2**：若 $u$ 是 $V$ 的一个 $K$-自同态，且 $X$ 是 $V$ 的一个格，则
 $\chi(X,uX)=(\det u)$ . 右侧表示由 $\det u$ 生成的主理想。这里 $uX$ 表示 $X$ 在 $u$ 下的像。

**证明**：通过局部化并将 $u$ 乘以一个常数，可以归约到 $X=A^n$ 且 $uX\subset X$ 的情形；在这种情形，命题由第一章 §5 的引理 3 得出。$\square$

> **引理3**：设 $A$ 是PID, $u:A^n\to A^n$ 是线性映射且 $\det(u)\ne 0$ , 则 $\det(u)A=\chi_A(\operatorname{Coker} u)$

> 给 $u$ 乘以可逆矩阵不改变 $\det(u)A$, 同时在同构意义上不改变 $\operatorname{Coker}$ , 所以考虑smith标准型, 不妨设 $u_x$ 对角. 因此只需验证一维情形时等式成立, 这直接来自于 $\chi_A(A/\mathfrak{a})=\mathfrak{a}$ . $\square$ 

这个结果提示了理想 $\chi(X,X')$ 的如下直接定义。令 $n=[V:K]$，并令
 $W=\bigwedge\nolimits^nV$ , 这是一个一维的 $K$-向量空间。对 $V$ 的每个格 $X$，令 $X_W=\bigwedge\nolimits^nX$ , 并将其视为 $W$ 中的一个格。由于 $[W:K]=1$，若 $D,D'$ 是 $W$ 中的两个格，则存在唯一的非零分式理想 $\mathfrak a$ ( 此时 $D,D'$ 是分式理想, $\mathfrak{a}=D'D^{-1}$ ... ) ，使得 $D'=\mathfrak aD$ ( 这个理想称作 $\chi(D,D')$ ) . 对 $D=X_W$、$D'=X'_W$ 应用这一点，所得到的理想正是 $\chi(X,X')$ , 这可以通过局部化并应用命题 2 看出。

## §2. 相对于双线性形式的格判别式

现在假设向量空间 $V$ 配备了一个非退化双线性形式 $T(x,y)$。

令 $n=[V:K]$。已知 $T$ 延拓为外代数 $\bigwedge V$ 上的非退化双线性形式（仍记为 $T$），特别地，它在 $W=\bigwedge\nolimits^nV$ 上给出同样的形式。

> 具体来说$$T(v_1\wedge \cdots\wedge v_r,w_1\wedge \cdots\wedge w_r)=\det(T(v_i,w_j))$$一个动机或许可以在这么考虑: $T$ 非退化相当于给出 $V\to V^*$ 的同构 $v\mapsto T(v,\cdot)$ , 取 $\bigwedge ^r$ 得到 $\bigwedge ^rV\to \bigwedge ^rV^*$ , 为使它定义一个双线性形式, 还需要给出自然的同构 $\bigwedge^r V^*\cong \left( \bigwedge ^r V\right) ^*$. 而我们本来已经有自然的非退化配对映射$$\begin{aligned}
(V^*)^{\otimes r}\times  V^{\otimes r}&\to K\\
(\alpha_1\otimes \cdots\otimes \alpha_r,x_1\otimes \cdots \otimes x_r)&\mapsto \prod \alpha_i(x_i)
\end{aligned}$$想变成关于外积的配对 $\bigwedge ^rV^*\times  \bigwedge ^rV\to K$ , 则额外要求使用 $\sigma$ 作用于 $\wedge \alpha_i$ 或 $\wedge x_j$ 时获得一个 $\mathrm{sgn}(\sigma)$ , 因此关于全部置换作用再求和, 也就是 $\sum_\sigma \operatorname{sgn}(\sigma)\sigma$ 作用, 就得到了行列式...

> 注: 在 $r$ 维的内积空间中, $\det(v_i\cdot w_j)=\det(v_i)\cdot \det(w_j)$ , 对一般情况, $\det(v_i\cdot w_j)$ 也相当于 $w_1\wedge \cdots\wedge w_r$ 向 $v_i$ 所在的 $r$ 维子空间正交投影以后, 有向体积按前式的乘积...

这个形式诱导出同构$$T:W\otimes_KW\longrightarrow K$$令 $X$ 为 $V$ 的一个格，并令 $X_W$ 为它的 $n$ 次外幂，将其视为 $W$ 中的一个格。$X_W\otimes_A X_W$ 在 $T$ 下的像是 $K$ 的一个非零分式理想，称为 $X$ 关于 $T$ 的**判别式**，记为 $\mathfrak d_{X,T}$；在不会引起混淆时简记为 $\mathfrak d_X$。

注：上述定义表明，$\mathfrak d_X$ 作为 $A$-模同构于 $X_W\otimes_A X_W$；因此它的理想类（模去主理想）是一个平方。

**命题 3**：若 $X$ 是以基 $S=\{e_1,\ldots,e_n\}$ 为基的自由 $A$-模，则 $\mathfrak d_{X,T}$ 是由判别式 $D_T(S)$ 生成的主理想（这里的判别式取 Bourbaki《代数》IX 章 §2 中的定义）, 这里 $D_T(S)=\det\left(T(e_i,e_j)\right)$ .

**证明**：事实上，在这种情况下，已知 $X_W$ 是以 $e=e_1\wedge\cdots\wedge e_n$ 为基的自由 $A$-模，并且 $T(e,e)=D_T(S)$ . 因此 $X_W\otimes_A X_W$ 在 $K$ 中的像由 $D_T(S)$ 生成。$\square$

注：至少在局部情形下，也可以把公式 $\mathfrak d_{X,T}=\left(\det(T(e_i,e_j))\right)$ 作为 $\mathfrak d_{X,T}$ 的定义。

**命题 4**：令 $X$ 为 $V$ 的一个格，令 $X_T^*$ 为 $T(x,y)\in A$ 对任意 $x\in X$ 的 $y$ 组成的集合, 则 $X_T^*$ 是 $V$ 的一个格，并且$$\mathfrak d_{X,T}=\chi(X_T^*,X)$$

**证明**：局部化使我们可以归约到 $X$ 以 $\{e_i\}$ 为基的自由情形；此时 $X_T^*$ 以由关系$$T(e_i,e_j^*)=\delta_{ij}$$定义的 $\{e_i^*\}$ 为基。若写成 $e_i=\sum_jx_{ij}e_j^*$ , 则命题 2 表明 $\chi(X_T^*,X)=(\det(x_{ij}))$ ; 另一方面，$T(e_i,e_j)=x_{ji}$，于是得到所需公式。$\square$

下一个命题说明 $\mathfrak d_{X,T}$ 如何随 $X$ 变化。

**命题 5**：若 $X$、$X'$ 是 $V$ 的两个格，则$$\mathfrak d_{X',T}=\mathfrak d_{X,T}\chi(X,X')^2$$

**证明**：令 $\mathfrak a=\chi(X,X')$。我们在 §1 中已经看到，在 $W$ 中有 $X'_W=\mathfrak aX_W$ . 因此，$X'_W\otimes X'_W$ 在同构 $T:W\otimes W\longrightarrow K$ 下的像，等于 $\mathfrak a^2$ 与 $X_W\otimes X_W$ 的像之积。$\square$

**推论**：若 $X'\subset X$，则 $\mathfrak d_{X',T}=\mathfrak d_{X,T}\mathfrak a^2$ , 其中 $\mathfrak a$ 是 $A$ 的一个理想；并且 $\mathfrak a=1$ 当且仅当 $X'=X$。

**证明**：取 $\mathfrak a=\chi(X/X')$ ，显然 $\mathfrak a=1$ 当且仅当 $X'=X$。$\square$

## §3. 可分扩张的判别式与共轭差积 

令 $L$ 为域 $K$ 的有限可分扩张。已知迹同态$$\operatorname{Tr}:L\longrightarrow K$$是满射，从而双线性形式 $\operatorname{Tr}(xy)$ 在 $L$ 上非退化。因此，上一节关于双线性形式的定义与结果都适用于这个形式。特别地，格 $L$ （相对于 $A$）的判别式是有定义的；如果这个格是以 $\{e_i\}$ 为基的自由 $A$-模，那么其判别式是 $\det\left(\operatorname{Tr}(e_ie_j)\right)$ 生成的理想。已知（参见 Bourbaki《代数》V 章 §10 命题 12）$$\det\left(\operatorname{Tr}(e_ie_j)\right)=\left(\det(\sigma(e_i))\right)^2$$其中 $\sigma$ 遍历 $\operatorname{Hom}_K(L,\overline{K})$ .

特别地，这适用于 $A$ 在 $L$ 中的整闭包 $B$，因为第一章命题 8 表明此时 $B$ 是 $L$ 的一个格。相应的判别式记为 $\mathfrak d_{B/A}$ . 在 $A$ 没有可能的歧义时也记为 $\mathfrak d_{L/K}$ .

令 $B^*$ 为所有满足 $\operatorname{Tr}(xy)\in A$ 对所有 $x\in B$ 的 $y\in L$ 所成的集合；$B^*$ 正是上一节中记作 $B_T^*$ 的格。它称为 $B$ 关于 $A$ 的**余差积**（或“逆差积”）。它是 $L$ 的一个子 $B$-模，并且显然是满足 $\operatorname{Tr}(E)\subset A$ 的 $L$ 的最大子 $B$-模 $E$。特别地，由于 $\operatorname{Tr}(B)\subset A$，有 $B\subset B^*$ .

因此，余差积是关于 $B$ 的 $L$ 的一个分式理想；它的逆称为 $B$ 关于 $A$（或扩张 $L/K$）的**差积**，记为 $\mathfrak D_{B/A}$ 或 $\mathfrak D_{L/K}$ . 它是 $B$ 的一个非零理想。下一个命题给出差积与判别式之间的关系。

**命题 6**：$$\mathfrak d_{B/A}=\chi_A(B^*/B)=N_{L/K}(\mathfrak D_{B/A})$$

**证明**：等式 $\mathfrak d_{B/A}=\chi_A(B^*/B)$ 由命题 4 得出。另一方面 $\chi_B(B^*/B)=\mathfrak D_{B/A}$ , 而根据第一章 §5 命题 12， $\chi_A=N_{L/K}\circ\chi_B$ , 这就完成了证明。$\square$

**推论**：判别式 $\mathfrak d_{B/A}$ 包含于 $A$ 中。

注：上一个命题表明差积决定判别式；反过来一般不成立。不过，当 $B$ 的每个素理想上方只有 $A$ 的每个素理想中的一个时，反之也成立；完备化时正是这种情形。

**命题 7**：令 $\mathfrak a$（分别为 $\mathfrak b$）为关于 $A$（分别为 $B$）的 $K$（分别为 $L$）的一个分式理想。以下两个性质等价：
1. $\operatorname{Tr}(\mathfrak b)\subset\mathfrak a$ ;
2. $\mathfrak b\subset\mathfrak a\mathfrak D_{B/A}^{-1}$ . 

**证明**：当 $\mathfrak a=0$ 时，命题是平凡的。当 $\mathfrak a\ne0$ 时，命题由以下等价关系得到：
$$
\begin{aligned}
\operatorname{Tr}(\mathfrak b)\subset\mathfrak a&\Longleftrightarrow\mathfrak a^{-1}\operatorname{Tr}(\mathfrak b)\subset A\Longleftrightarrow
\operatorname{Tr}(\mathfrak a^{-1}\mathfrak b)\subset A \\
&\Longleftrightarrow\mathfrak a^{-1}\mathfrak b\subset B^*=\mathfrak D_{B/A}^{-1}\Longleftrightarrow\mathfrak b\subset\mathfrak a\mathfrak D_{B/A}^{-1}\end{aligned}$$

$\square$

显然，命题 7 中的性质刻画了差积。

## §4. 差积与判别式的初等性质

沿用上一节的记号：$L$ 是 $K$ 的有限可分扩张，$B$ 是 $A$ 在 $L$ 中的整闭包。

### (i) 传递性

**命题 8**：令 $M/L$ 为次数为 $n$ 的有限可分扩张，令 $C$ 为 $A$ 在 $M$ 中的整闭包，则$$\mathfrak D_{C/A}=\mathfrak D_{C/B}\mathfrak D_{B/A}$$且$$\mathfrak d_{C/A}=\mathfrak d_{B/A}^{\,n}\,N_{L/K}(\mathfrak d_{C/B})$$

**证明**：令 $\theta=\operatorname{Tr}_{M/K},\theta'=\operatorname{Tr}_{L/K},\theta''=\operatorname{Tr}_{M/L}$ , 于是
 $\theta=\theta'\circ\theta''$ . 令 $\mathfrak c$ 为关于 $C$ 的 $M$ 的一个分式理想。根据命题 7，有
$$
\begin{aligned}
\mathfrak c\subset\mathfrak D_{C/B}^{-1}
&\Longleftrightarrow \theta''(\mathfrak c)\subset B
\Longleftrightarrow \mathfrak D_{B/A}^{-1}\theta''(\mathfrak c)\subset\mathfrak D_{B/A}^{-1} \Longleftrightarrow
\theta'\left(\mathfrak D_{B/A}^{-1}\theta''(\mathfrak c)\right)\subset A\\
&\Longleftrightarrow
\theta(\mathfrak D_{B/A}^{-1}\mathfrak c)\subset A\Longleftrightarrow
\mathfrak D_{B/A}^{-1}\mathfrak c\subset\mathfrak D_{C/A}^{-1}
\Longleftrightarrow
\mathfrak c\subset\mathfrak D_{B/A}\mathfrak D_{C/A}^{-1}
\end{aligned}
$$

比较这串等价关系的第一项和最后一项，得到 $\mathfrak D_{C/B}^{-1}=\mathfrak D_{B/A}\mathfrak D_{C/B}^{-1}$ , 这就是差积的传递公式。对等式两边取 $M/K$ 的范数，便得到判别式的公式。$\square$

> 这段证明应如此理解: 考虑到 $\mathfrak{D}_{C/A}^{-1}$ 是 image 包含于 $A$ 的最大 $C$-子模, 由于 $\operatorname{Tr}_{M/K}=\operatorname{Tr}_{L/K}\circ \operatorname{Tr}_{M/L}$ , 它是在 $\operatorname{Tr}_{M/L}$ 下 image ( 这个 image 是 $B$-模 ) 包含于 $B$-模 $\mathfrak{D}_{B/A}^{-1}$ 的最大 $C$-子模, 由命题 7 得到结论...

### (ii) 局部化

**命题 9**：若 $S$ 是 $A$ 的一个乘性子集，则$$S^{-1}\mathfrak D_{B/A}=\mathfrak D_{S^{-1}B/S^{-1}A},\qquad S^{-1}\mathfrak d_{B/A}=\mathfrak d_{S^{-1}B/S^{-1}A}$$

**证明**：考虑公式 $(S^{-1}\mathfrak b)^{-1}=S^{-1}\mathfrak b^{-1}$ ，只需证明 $S^{-1}B^*=(S^{-1}B)^*$ , 从而第一个式子得证, 取范数得到第二个式子 ( 局部化保持分式理想乘积, 从而对 $\mathfrak{p}$ 的分解.. ). 若 $x=s^{-1}y$，其中 $s\in S$、$y\in B^*$，则$$\operatorname{Tr}(x)=s^{-1}\operatorname{Tr}(y)\in S^{-1}A$$由于 $S^{-1}B^*$ 包含 $S^{-1}B$ 且是一个分式理想，这说明 $S^{-1}B^*\subset(S^{-1}B)^*$ .

反过来，令 $b_i$ 为 $B$ 作为 $A$-模的一组生成元，并令 $x\in(S^{-1}B)^*$ . 于是 $\operatorname{Tr}(xb_i)\in S^{-1}A$ , 所以存在 $s$ ,  $\operatorname{Tr}(xb_i)=s^{-1}a_i$ 对全体 $a_i\in A$ ( 因为只有有限多个 $b_i$ ) 。于是 $sx\in B^*$，这证明了反向包含。$\square$

### (iii) 完备化

**命题 10**：令 $\mathfrak P$ 为 $B$ 的一个素理想，令 $\mathfrak p=\mathfrak P\cap A$ , 令 $\widehat{\mathfrak D}_{\mathfrak P}$ 为 $\mathfrak D_{B/A}$ 在完备环 $\widehat B_{\mathfrak P}$ 中生成的理想，则 $\widehat{\mathfrak D}_{\mathfrak P}$ 是环 $\widehat B_{\mathfrak P}$ 关于环 $\widehat A_{\mathfrak p}$ 的差积。

( 换言之，$\mathfrak D_{B/A}$ 中 $\mathfrak P$ 的指数，等于 $\widehat B_{\mathfrak P}$ 关于 $\widehat A_{\mathfrak p}$ 的差积中 $\mathfrak P\widehat B_{\mathfrak P}$ 的指数；即“差积在完备化下保持不变” )

**证明**：应用命题 9，取 $S=A\backslash\mathfrak p$，可以归约到 $A$ 是离散赋值环的情形。记 $\widehat A$（resp. $\widehat K$）为 $A$（resp. $K$）的完备化。类似地，若 $(\mathfrak P_i)_{i\in I}$ 是 $B$ 中位于 $\mathfrak p$ 上方的素理想族，则记 $\widehat B_i$（resp. $\widehat L_i$）为 $B$（resp. $L$）关于由 $\mathfrak P_i$ 定义的赋值的完备化。

首先在 $\widehat K$-代数 $L\otimes_K\widehat K=\widehat L$ 中工作，令 $\widehat B=B\otimes_A\widehat A$ , 它是 $\widehat L$ 的一个 $\widehat A$-格。在 $\widehat L$ 上有由标量扩张从 $L$ 上相应形式得到的非退化双线性形式 $\operatorname{Tr}(xy)$ . 容易证明（例如取一组基），$\widehat B$ 的对偶格 $(\widehat B)^*$ 是由 $B^*=\mathfrak D_{B/A}^{-1}$ 通过标量扩张得到的格。换言之$$(\widehat B)^*=(B^*)^{\wedge}=B^*\otimes_A\widehat A$$

> 注: 可以考虑如此证明: 取 $B$ 的一组 $A$-基 $e_i$ , 那么这组基下 $B=A^n$ 且 $\widehat{B}=\widehat{A}^n$ . $x\in (\widehat B)^*$ 等价于 $\operatorname{Tr}(xe_j)\in \widehat{A}$ 对任意 $e_j$ , 假设 $x=\sum x_ie_i$ , $x_i\in \widehat{K}$ , 那么这相当于 $\sum_i x_i \operatorname{Tr}(e_ie_j)\in \widehat{A}$ . 令 $T=(\operatorname{Tr}(e_ie_j))\in \mathrm{GL}_n(A)$ , 这相当于 $Tx\in \widehat{A}^n$ 即 $x\in T^{-1}(\widehat{A}^n)$ . 因此$$(\widehat{B})^*=T^{-1}(\widehat{A}^n)=\widehat{A}\otimes_A T^{-1}(A^n)=\widehat{A}\otimes_A B^*$$

另一方面，根据第二章 §2，知道 $L\otimes_K\widehat K=\prod_{i\in I}\widehat L_i，$ 且 $B\otimes_A\widehat A=\prod_{i\in I}\widehat B_i$ , 如果 $\operatorname{Tr}_i$ 表示扩张 $\widehat L_i/\widehat K$ 中的迹，那么 $\widehat L$ 上的双线性形式 $\operatorname{Tr}(xy)$ 是各个 $\widehat L_i$ 上的形式 $\operatorname{Tr}_i(xy)$ 的直和。显然有公式 ( 乘积的 $\operatorname{Tr}$ 为直和, 见 Ch2. §3 推论2 ) $$\left(\prod_{i\in I}X_i\right)^*=\prod_{i\in I}(X_i)^*$$将其应用于 $X_i=\widehat B_i$，得到 $(\widehat B)^*=\prod_{i\in I}(\widehat B_i)^*$ . 换言之，$B$ 关于 $A$ 的余差积在每个 $\widehat L_i$ 中生成 $\widehat B_i$ 关于 $\widehat A$ 的余差积；取逆后，对差积得到同样的结论。$\square$

**推论**：令 $\widehat{\mathfrak d}$ 为 $\widehat A_{\mathfrak p}$ 中由判别式 $\mathfrak d_{B/A}$ 生成的理想，令 $\mathfrak d_{\mathfrak P}$ 为 $\widehat B_{\mathfrak P}$ 关于 $\widehat A_{\mathfrak p}$ 的判别式，则$$\widehat{\mathfrak d}=\prod_{\mathfrak P\mid\mathfrak p}\mathfrak d_{\mathfrak P}$$

这是对命题 10 取范数得到的。

#### 习题

令 $C$ 为 $B$ 的一个子环，包含 $A$，并且与 $B$ 具有相同的分式域。

1. 证明，在 $B$ 的所有包含于 $C$ 中的理想中存在最大的一个，并且它是 $C$-模 $B/C$ 的湮灭子；将其记为 $\mathfrak f_{C/B}$（称为 $B$ 在 $C$ 中的**导子**）。
2. 证明 $\mathfrak f_{C/B}=(B^*:C^*)$ , 即 $\mathfrak f_{C/B}$ 是所有满足 $xC^*\subset B^*$ 的 $x\in L$ 所成的集合。
3. 假设 $C^*$ 作为分式 $C$-理想是可逆的；令 $\mathfrak c$ 为其逆（于是 $\mathfrak cC^*=C$）。由第 2 问推出公式$$\mathfrak f_{C/B}=\mathfrak c\mathfrak D_{B/A}^{-1}$$

> 证明: 第一问只需要 $B/C$ 是一般的交换环扩张. 此时 $\mathfrak{f}_{C/B}=\{ x\in B:x B\subset C \}$ . 关于第二问, 首先 $C$ 是 $L$ 的格: $C\subset B$ 有限生成; 已知 $KB=L$ , 取 $B$ 的 $A$-生成元组 $b_1,\cdots,b_n$ , 由于 $b_i\in \operatorname{Fr}B=\operatorname{Fr}C$ , 取 $b_i$ 分母乘积 $y\in C$ 有 $yB\subset C$ , 因此 $KC=L$ , $C$ 是格 ( 从而 $C^*$ 有定义 ). 现在 $C^{* *}=C$ , 而按定义 $xC^*\subset B^*$ 相当于 $\operatorname{Tr}(xC^*B)\subset A$ , 等价于 $xB\subset C$ . 由第二问, $\mathfrak{f}_{C/B}$ 是 $\operatorname{Tr}(EC^*B)\subset A$ 的极大子 $B$-模 $E$, 从而立即有 $\mathfrak f_{C/B}=\mathfrak c\mathfrak D_{B/A}^{-1}$ .

> 注: 有些文献中是反过来的, 称为 $C$ 在 $B$ 中的导子..

## §5. 非分歧扩张

沿用 §§3、4 的记号与假设。

**定理 1**：令 $\mathfrak P$ 为 $B$ 的一个素理想，令 $\mathfrak p=\mathfrak P\cap A$ , 则扩张 $L/K$ 在 $\mathfrak P$ 处非分歧（参见第一章 §4）的充要条件是：$\mathfrak P$ 不整除差积 $\mathfrak D_{B/A}$ .

**证明**：由命题 9、10，可以归约到 $A$ 是剩余域为 $k$ 的完备DVR的情形；此时 $B$ 也是DVR。令 $\{x_i\}$ 为 $B$ 在 $A$ 上的一组基，并令 $d=\det\left(\operatorname{Tr}(x_ix_j)\right)$ . 由命题 3，$\mathfrak d_{B/A}$ 是由 $d$ 生成的主理想。因此，$\mathfrak P$ 整除 $\mathfrak D_{B/A}$ 的充要条件是 $\mathfrak p$ 不整除 $d$，也就是说 $d$ 在 $k$ 中的像 $\overline d$ 非零。

说 $\mathfrak P$ 非分歧，等价于说 $B/\mathfrak pB$ 是一个域（即 $e_{\mathfrak P}=1$），并且这个域是 $k$ 的可分扩张。现在令 $\overline B=B/\mathfrak pB$ , $x_i$ 在 $\overline B$ 中的像构成 $\overline B$ 作为 $k$-向量空间的一组基 ( $B\cong A^n$ , 张量积上 $A/\mathfrak{p}$ ... )，而这组基的判别式为 $\overline d$。根据一个已知结果（Bourbaki《代数》IX 章 §2 命题 5），条件 $\overline d\ne0$ 等价于说 $\overline B$ 是平展的 $k$-代数；又因为它是局部环，这又等价于说它是一个域，并且是 $k$ 的可分扩张。$\square$

上面引用的已知结果为: 

> 引理: 令 $A$ 是域 $k$ 上的有限维交换 $k$-代数, 有 $k$-基 $r_1,\cdots,r_n$ , $A$ 既约当且仅当 $\operatorname{Tr}_{A/k}(xy)$ 非退化, 即 $\operatorname{disc}(r_1,\cdots,r_n)\ne 0$

**推论 1**：令 $\mathfrak p$ 为 $A$ 的一个素理想。则 $L/K$ 在 $\mathfrak p$ 处非分歧的充要条件是：$\mathfrak p$ 不整除判别式 $\mathfrak d_{B/A}$ .

**证明**：这是因为 $\mathfrak d_{B/A}=N_{L/K}(\mathfrak D_{B/A})$ . $\square$

**推论 2**：$B$ 的（或 $A$ 的）几乎所有素理想在扩张 $L/K$ 中都是非分歧的。

下面更仔细地考察非分歧扩张的结构，并限于 $A$ 是完备DVR的情形；记其剩余域为 $k$ . 

**定理 2**：令 $k'/k$ 为有限可分扩张。则存在一个同构意义下唯一的有限非分歧扩张 $K'/K$，其相应的剩余域扩张同构于 $k'/k$ 。并且它是 Galois 扩张，当且仅当 $k'/k$ 是 Galois 扩张。

**证明**：由于 $k'/k$ 有限可分，它由一个本原元 $\xi$ 生成；令 $\varphi$ 为它在 $k$ 上的最小多项式，其次数为 $n=[k':k]$ , 取一个 $\varphi$ 的首一提升 $f\in A[X]$ , 根据第一章命题 15，环 $A'=A[X]/(f)$ 是一个关于 $A$ 非分歧的DVR，并且其剩余域扩张为 $k'/k$。它的分式域 $K'$ 就解决了存在性问题。唯一性断言（其中完备性起着本质作用）由下面更精确的定理得到。

**定理 3**：令 $K'/K$ 为有限非分歧扩张，剩余域扩张为 $k'/k$；令 $K''/K$ 为任意有限扩张，剩余域扩张为 $k''/k$。则从 $K'$ 到 $K''$ 的 $K$-同构的集合，通过约化，与从 $k'$ 到 $k''$ 的 $k$-同构的集合一一对应。

对任意环 $A$，记 $\operatorname{Hom}^{\mathrm{alg}}_A(B,C)$ 为从 $B$ 到 $C$ 的 $A$-代数同态集合。若 $A'$、$A''$ 分别是 $A$ 在 $K'$、$K''$ 中的整闭包，则$$\operatorname{Hom}^{\mathrm{alg}}_K(K',K'')=\operatorname{Hom}^{\mathrm{alg}}_A(A',A'')$$所以只需证明典范同态$$\theta:\operatorname{Hom}^{\mathrm{alg}}_A(A',A'')\longrightarrow\operatorname{Hom}^{\mathrm{alg}}_k(k',k'')$$是双射.

令 $n=[K':K]$。根据第一章命题 16，存在 $x\in A'$，使得 $\{1,x,\ldots,x^{n-1}\}$ 是 $A'$ 作为 $A$-模的一组基；此外，若 $f$ 表示 $x$ 的特征多项式 ( 同时是极小多项式 ) ，则 $f$ 的约化 $\overline f$ 是 $x$ 在 $k'$ 中的像 $\overline x$ 的特征多项式。于是，$\operatorname{Hom}^{\mathrm{alg}}_A(A',A'')$ 中的元素（resp. $\operatorname{Hom}^{\mathrm{alg}}_k(k',k'')$ 中的元素）分别与满足 $f(a'')=0$, $a''\in A''$（resp. 满足 $\overline f(\xi'')=0$, $\xi''\in k''$ ）的元素一一对应；而映射 $\theta$ 正对应于约化 $a''\longmapsto\xi''=\overline{a''}$ . 因此，问题归结为证明：$\overline f$ 在 $k''$ 中的一个根可以唯一提升为 $A''$ 中 $f$ 的一个根。这正是第二章命题 7 的结论（注意，$\overline f$ 的所有根都是单根，因为它在 $k$ 上既不可约又可分）。$\square$

> 简而言之, 可分扩张 $k'/k$ 的本原元 $\bar{\alpha}$ 作为其 $k$ 上极小多项式的单根, 在保持 $K$ 的情况下 ( 由Hensel引理 ) 唯一提升为 $\alpha$ , 使得 $\mathcal{O}_{K'}=\mathcal{O}_K[\alpha]$ , 而 $K''$ 同样可以Hensel...

**推论 1**：令 $k^s$ 为 $k$ 的可分闭包（即在给定的 $k$ 的代数闭包中包含 $k$ 的最大可分扩张），令 $K_{\mathrm{nr}}$ 为与 $k^s$ 的有限子扩张相对应的 $K$ 的非分歧扩张的归纳正向极限。则 $K_{\mathrm{nr}}$ 是 $K$ 上的 Galois 扩张，剩余域为 $k^s$，并且 $\operatorname{Gal}(K_{\mathrm{nr}}/K)=\operatorname{Gal}(k^s/k)$ .

> 注: 有限Galois扩张的自同构也能唯一提升, 从而有限Galois情形下 $\operatorname{Gal} (k'/k)=\operatorname{Gal} (K'/K)$ , 再取 $\varprojlim$ ...

扩张 $K_{\mathrm{nr}}$ 称为 $K$ 的**最大非分歧扩张**。它在同构意义下唯一。例如，如果 $k$ 是有限域，则 $\operatorname{Gal}(k^s/k)$ 同构于 $\mathbb Z$ 关于有限指数子群拓扑的完备化 $\widehat{\mathbb Z}$，而 $\operatorname{Gal}(K_{\mathrm{nr}}/K)$ 也有同样的结论。

**推论 2**：令 $K''/K$ 为有限扩张，剩余域扩张为 $k''/k$。则 $K''/K$ 的在 $K$ 上非分歧的子扩张 $K'/K$，与 $k''/k$ 的可分子扩张 $k'/k$ 一一对应。

**推论 3**：在推论 2 的假设下，存在 $K''/K$ 的一个最大的非分歧子扩张 $K'/K$。它的剩余域扩张 $k'/k$ 是 $k''/k$ 的最大可分子扩张. 并且 $e(K''/K)=e(K''/K')$ , $f(K''/K')=[k'':k']_{\mathrm i}$ , 且 $f(K'/K)=[k':k]_{\mathrm s}$ .

当 $k''/k$ 是可分扩张时，这个推论最常用；此时得到一个中间域 $K'$，使得 $K''/K'$ 是完全分歧的（$f=1$），而 $K'/K$ 是非分歧的。

注：
1. 当 $K$ 与 $k$ 具有相同特征时，$K$ 同构于 $k((T))$（参见第二章 §4）。如果 $k'/k$ 是有限可分扩张，则相应的非分歧扩张为 $K'=k'((T))=k'\otimes_kK$ . 当 $k$ 是特征 $p>0$ 的完美域时，类似地有 $K'=W(k')\otimes_{W(k)}K$ , 其中 $W(k)$ 表示系数在 $k$ 中的 Witt 向量环。
2. 本节的结果可以推广到任意完备局部诺特环；参见 Grothendieck 的研讨班 [29] §1。


