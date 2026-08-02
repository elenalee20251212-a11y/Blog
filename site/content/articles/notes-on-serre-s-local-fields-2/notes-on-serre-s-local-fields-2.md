---
title: Notes-on-Serre-s-Local-Fields-2
articleId: notes-on-serre-s-local-fields-2
category: mathematics/number-theory/serre-local-fields
order: 2
---

title: Notes on Serre's Local Fields 2
date: 2026-06-22 19:24:21
tags:

以下为您重新梳理并详细总结的PDF完整内容。本回答严格包含所有定义、定理、命题、例子、公式以及关键的推导与证明步骤，且不含任何特殊标记：

## §1. 绝对值与由离散赋值定义的拓扑 (Absolute Values and the Topology Defined by a Discrete Valuation)

### 1. 离散赋值导出的绝对值定义与性质

设 $K$ 是一个定义了离散赋值 $v$ 的域，$A$ 为其赋值环。
取定一个实数 $a \in (0, 1)$，对于任意 $x \in K$，定义其绝对值如下：
当 $x \neq 0$ 时，

$$\Vert x\Vert  = a^{v(x)}$$

当 $x = 0$ 时，

$$\Vert 0\Vert  = 0$$

该绝对值满足以下基本公式：
* $\Vert x \cdot y\Vert  = \Vert x\Vert  \cdot \Vert y\Vert $
* $\Vert x + y\Vert  \le \sup(\Vert x\Vert , \Vert y\Vert )$ （超度量三角不等式）
* $\Vert x\Vert  = 0 \iff x = 0$

由此可知，$\Vert x\Vert $ 是 $K$ 上的一个超度量绝对值。

### 2. 奥斯特洛夫斯基定理 (Ostrowski's Theorem)

**超度量情形**：域 $K$ 上的每个超度量绝对值都具有 $a^{v(x)}$ 的形式，其中 $v$ 是 $K$ 的实赋值（即其值群是 $\mathbb{R}$ 的加法子群）。

**非超度量情形**：每个非超度量绝对值都具有如下形式：

$$\Vert x\Vert  = |f(x)|^c \quad (0 < c \le 1)$$

其中 $f: K \rightarrow \mathbb{C}$ 是将 $K$ 同构映射到复数域 $\mathbb{C}$ 的一个子域的映射。

### 3. 完备化 $\hat{K}$ 及其拓扑

设 $\hat{K}$ 是 $K$ 关于其绝对值拓扑的完备化，该拓扑不依赖于实数 $a$ 的选择。$\hat{K}$ 是一个赋值域，其绝对值延拓了 $K$ 的绝对值，可写为 $\Vert x\Vert  = a^{\hat{v}(x)}$（$x \in \hat{K}$）。

函数 $\hat{v}(x)$ 是整数值的，且是 $\hat{K}$ 上的离散赋值，其对应的赋值环是 $A$ 在 $\hat{K}$ 中的闭包 $\hat{A}$。

若 $\pi$ 是 $A$ 的uniformizer，则理想 $\pi^n A$ 构成 $K$（以及 $A$）中 0 邻域的基，表明 $A$ 上的拓扑与其作为局部环的自然拓扑一致。因此，$\hat{A}$ 可以表示为商环的投射极限：

$$\hat{A} = \varprojlim A / \pi^n A$$

元素 $\pi$ 同样是 $\hat{A}$ 的uniformizer，且有 $\hat{A} / \pi^n \hat{A} = A / \pi^n A$，因此 $A$ 和 $\hat{A}$ 的剩余域相同。

### 4. 局部紧性的特征

**命题 1**：$K$ 是局部紧的，当且仅当其剩余域 $\overline{K} = A / \pi A$ 是有限域，且 $K$ 是完备的。

**命题 1 的证明关键步骤**：
* *必要性*：若 $K$ 局部紧，则其必然完备。由于 $\pi^n A$ 构成 0 的闭邻域系统，其中至少有一个是紧的，通过乘以 $\pi^{-n}$ 可知 $A$ 是紧的。商域 $\overline{K} = A / \pi A$ 既紧又离散，故必须是有限域。
* *充分性*：若 $\overline{K}$ 有限，则所有 $A / \pi^n A$ 均为有限环；因此 $\hat{A}$ 作为有限环的射影极限是紧的。若再加上 $K$ 是完备的，则有 $A = \hat{A}$，因此 $K$ 确实是局部紧的。

**例子**：
1. **$p$ 进数域 $\mathbb{Q}_p$**：$\mathbb{Q}$ 在 $p$ 进赋值拓扑下的完备化，是一个局部紧域，其余域为 $\mathbb{F}_p$。
2. **形式幂级数域 $\mathbb{F}((T))$**（其中 $\mathbb{F}$ 是有限域）：是局部紧域。

### 5. 绝对值的规范化与测度关系

当 $K$ 满足命题 1 的条件时，规范选择实数 $a$ 的方式为：令 $a = q^{-1}$，其中 $q$ 是剩余域 $\overline{K}$ 的元素个数。此时对应的绝对值称为规范绝对值。
**命题 2**：设 $K$ 是满足命题 1 条件的域，$\mu$ 是其加法局部紧群上的哈尔测度。则对于 $K$ 的任意可测子集 $E$ 和任意 $x \in K$，有：

$$\mu(xE) = \Vert x\Vert  \mu(E)$$

（其中 $\Vert x\Vert $ 表示规范绝对值）。

**命题 2 的证明关键步骤**：
可设 $x \neq 0$，此时同质变换 $y \mapsto xy$ 是加法群的自同构，它将哈尔测度 $\mu$ 变为其倍数 $\chi(x) \cdot \mu$，需证乘子 $\chi(x) = \Vert x\Vert $。
由于 $\chi(x)$ 和 $\Vert x\Vert $ 是乘性的，可设 $x \in A$。取 $E = A$，则 $E$ 是 $(A : xA)$ 个 $\bmod\ xE$ 陪集的并，因此 $\mu(E) = (A : xA) \mu(xE)$，即 $\chi(x) = 1 / (A : xA)$。因为指数 $(A : xA) = q^{v(x)}$，所以 $\chi(x) = q^{-v(x)} = \Vert x\Vert $。
> **备用说明（数域的乘积公式）**：
对于非超度量的局部紧赋值域，由奥斯特洛夫斯基定理可知 $K=\mathbb{R}$ 或 $K=\mathbb{C}$。规范化后，在 $\mathbb{R}$ 上得到通常绝对值，在 $\mathbb{C}$ 上得到其平方。
这些规范化对于数域 $K$ 的**乘积公式**（Product Formula）是必需的：设 $P$ 为 $K$ 的所有规范绝对值的集合，则有：

$$\prod_{\mathfrak{p} \in P} \Vert x\Vert _{\mathfrak{p}} = 1 \quad (\forall x \in K^*)$$

证明时先对 $\mathbb{Q}$ 进行直接计算验证，再利用公式 $\Vert N_{K/\mathbb{Q}}(x)\Vert _p = \prod_{\mathfrak{p}|p} \Vert x\Vert _{\mathfrak{p}}$ 将其推广到一般代数数域即可。
> 实际上这里 $(x)=\prod \mathfrak{p}^{v_{\mathfrak{p}}(x)}$ , 那么 $v_p(N_{K/\mathbb{Q}}(x))=\sum_{\mathfrak{p}|p} v_{\mathfrak{p}}(x)f_{\mathfrak{p}}$ . 而 $\left\Vert x \right\Vert_{\mathfrak{p}}=p^{-f_{\mathfrak{p}}v_{\mathfrak{p}}(x)}$ , 从而就有 $\Vert N_{K/\mathbb{Q}}(x)\Vert _p = \prod_{\mathfrak{p}|p} \Vert x\Vert _{\mathfrak{p}}$ ......代数函数域上也有类似的公式.

## §2. 完备域的扩张 (Extensions of a Complete Field)

### 1. 有限扩张的整闭包与完备性

**命题 3**：设 $K$ 是完备离散赋值域, 离散赋值 $v$，$A$ 为其赋值环. 设 $L/K$ 有限，且 $B$ 是 $A$ 在 $L$ 中的整闭包. 则 $B$ 是DVR，且是自由 $A$-模，其秩为 $n = [L:K]$ . 同时 $L$ 也是完备的.

**命题 3 的证明关键步骤**：
1. **可分扩张情形**：条件 (F) 自动满足, 此时 $B$ 是有限生成 $A$-模从而是ddk环. 由于 $A$ 是PID，故 $B$ 是秩为 $n$ 的自由 $A$-模. $B$ 每个素理想 $\mathfrak{P}_i$ 都定义了一个离散赋值 $w_i$ , $L$ 是 $K$ 上的有限维赋范线性空间, 因此 $L$ 完备且所有范数互相等价, 定义的拓扑都是 $L=K^n$ 的乘积拓扑. 而某个赋值的赋值环为对应拓扑下, $x^{-n}$ 不收敛于 $0$ 的元素集合, 而拓扑唯一, 所以只存在唯一的赋值 $w_i$，故 $B$ 是DVR, 且 $L$ 完备.
2. **纯不可分扩张情形**： $K$ 域特征的某个幂 $q$ 使得对所有 $x \in L$ 均有 $x^q \in K$。令 $v'(x) = v(x^q)$，该映射 $v': L^* \rightarrow \mathbb{Z}$ 是群同态. 设 $m$ 是 $v'(L^*)$ 中最小正整数，则 $w = (1/m)v'$ 是 $L$ 的离散赋值，其赋值环即为 $B$ ( 因为是 $B$ 中元素等价于满足 $x^q\in A$ , 这是因为 $A$ 在 $K$ 中整闭...) ；同样的论证表明其拓扑与 $K^n$ 一致，使 $L$ 成为完备域.
3. **证明 $B$ 是有限生成 $A$-模**：设 $\pi$ 为 $A$ 的uniformizer，$\overline{B} = B / \pi B$。在 $\overline{B}$ 中在 $\overline{K} = A / \pi A$ 上的线性无关元  $\overline{b}_i$ 可以被提升到 $A$ 上线性无关元, 事实上若存在关系 $\sum a_i b_i = 0$，除去 $\pi^n$ 可设至少有一个 $a_i$ 不能被 $\pi$ 整除, 从而给出 $\overline{b}_i$ 的非平凡线性相关关系. 因此在 $\bar{B}$ 中线性无关 $b_i$ 的数量 $\leqslant n$. 现在取 $e_i$ 构成 $\overline{B}$ 一组基, 设 $E$ 是由 $e_i$ 生成的 $A$-模。任一 $b \in B$ 均可写为 $b = b_0 + \pi b_1$（其中 $b_0 \in E, b_1 \in B$）；通过不断迭代可得：

$$b = b_0 + \pi b_1 + \pi^2 b_2 + \dots$$

由于 $A$ 完备，该级数收敛且 $b \in E$ ( 将 $b_j$ 写作 $e_i$ 的线性组合, 求和之后每个 $e_i$ 的系数都属于 $A$ ) ，故 $B = E$ .

> 注: 第三步可以这么考虑: 已知 $B=E+\pi B$ , $E$ 有限生成所以 $\pi$-adic拓扑下完备, 对 $L$ 的子模, 将 $M\mapsto \varprojlim M/\pi^iM$ 视作在 $L$ 中取完备化, 则 $E=\varprojlim E/\pi^i E$ 且 $B=\varprojlim B/\pi^iB$ . 而现在 $E/\pi^iE=B/\pi^iB$ , 因此取proj lim立即得到 $E=\varprojlim B$ .

### 2. 重要推论

**推论 1**：若 $e$（分歧指数）和 $f$（剩余域扩张次数）是 $L$ 在 $K$ 上的相关参数，则因为条件 (F) 满足：

$$ef = n$$

**推论 2**：在 $L$ 上存在唯一的赋值 $w$ 延拓了 $v$。

**推论 3**：$L$ 中在 $K$ 上互为共轭的两个元素具有相同的赋值。
> *证明步骤*：可设 $L/K$ 为正规扩张。对任意 $s \in G(L/K)$，复合映射 $w \circ s$ 同样延拓了 $v$，根据推论 2 它必与 $w$ 重合，因此共轭元 $s(x)$ 与 $x$ 赋值相同。

**推论 4**：对于每个 $x \in L$，有公式：

$$w(x) = \frac{1}{f} v(N_{L/K}(x))$$

> *注*：这意味着 $L$ 的拓扑可以用如下范数定义

$$\Vert x\Vert _L = \Vert N_{L/K}(x)\Vert _K$$

若 $K$ 局部紧且 $\Vert  \cdot \Vert _K$ 已规范化，则 $\Vert  \cdot \Vert _L$ 同样是规范化的。

### 3. §2 练习内容

$\mathrm{Ex.}\ 1.$ **Krasner 引理（Krasner's Lemma）**：设 $E/K$ 是完备域 $K$ 的有限伽罗瓦扩张，将赋值延拓至 $E$。设 $x \in E$，且 $\{x_1, \dots, x_n\}$ 是 $x$ 在 $K$ 上的共轭元集合（$x = x_1$）。若 $y \in E$ 满足对于所有 $i \ge 2$ 都有 $\Vert y - x\Vert  < \Vert y - x_i\Vert $，证明 $x \in K(y)$。

> 事实上对 $x$ 在 $k(y)$ 上的共轭 $x_i$ , $\left\Vert y-x \right\Vert=\left\Vert y-x_i \right\Vert$ , 因此 $x$ 在 $k(y)$ 上的共轭唯一, 从而属于 $k(y)$ .

$\mathrm{Ex.}\ 2.$ 设 $K$ 是完备域，$f(X) \in K[X]$ 是次数为 $n$ 的可分不可约多项式。令 $L/K$ 是由 $f$ 定义的 $n$ 次扩张。证明对于任何在系数上足够接近 $f$ 的 $n$ 次多项式 $h(X)$，$h(X)$ 也是不可约的，且由其定义的扩张 $L_h/K$ 与 $L$ 同构。

> 假设 $y$ 是 $h(X)$ 的一个根, $x_i$ 是 $f(X)$ 的根. 假设 $f$ 和 $h$ 的每个系数都满足 $\left\Vert f_i-h_i \right\Vert<\varepsilon$ , 那么

$$\left\Vert f(y) \right\Vert\leqslant \left\Vert h(y) \right\Vert+\left\Vert (f-h)(y) \right\Vert\leqslant C\varepsilon$$

而 $f(y)=\prod (y-x_i)$ , 因此至少有一个 $\left\Vert y-x_i \right\Vert\leqslant C'\varepsilon^{\frac{1}{n}}$ , 对充分小的 $\varepsilon$ , 因为 $f$ 可分, 它小于其它一切 $\left\Vert y-x_j \right\Vert$ , 从而由第一题 $x_i\in K(y)$ , 而 $h,f$ 同次数, 因此 $h$ 不可约且 $K(x_i)=K(y)$ . 

$\mathrm{Ex.}\ 3.$ 利用exer. 8 of Bourbaki, A/g., Chap. VII, §3直接证明 $B$ 是有限型 $A$-模。

> Bourbaki那道题道题的结论是说 $A^{\mathbb{N}}$ 不是自由 $A$-模...

$\mathrm{Ex.}\ 3.$ 设 $K$ 在离散赋值 $v$ 下完备，$\Omega$ 为其代数闭包。

(a) 设 $S$ 是 $\Omega$ 的满足“对其所有有限子扩张 $E'$ 均有 $e(E'/K)=1$”的子扩张 $E$ 的集合，证明 $S$ 存在极大元 $K_0$。若 $K_0$ 是极大元，证明赋值延拓到 $K_0$ 后仍是离散赋值，且其剩余域是 $K$ 的剩余域的代数闭包。

> 假设 $L/K$ 有限, $K$ 的离散赋值是 $v$ , $L$ 唯一延拓了 $v$ 的离散赋值是 $w$ , 则 $w(x)=e(L/K)v(x)$ , 因此在满足 $S$ 的条件时, 对任何 $S$ 中域都可以定义离散赋值. 而对 $S$ 显然可以应用Zorn引理, 故极大元 $K_0$ 存在. 现在证明 $K_0$ 剩余域 $k_0$ 是 $K$ 剩余域的代数闭包: 由Ch1.prop15, 对 $k_0$ 上的不可以多项式 $\bar{f}$ , $f$ 在 $K_0$ 上不可约且 $L=K_0[X]/(f)$ 是离散赋值域, 极大理想由 $K_0$ 的uniformizer (也就是 $K$ 的) 生成, 然而这意味着 $e(L/K_0)=1$ , 从而 $e(L/K)=1$ , 因此 $L=K_0$ 且 $f$ 是一次多项式.

> 注: 一般来讲, $\Omega$ 的赋值群是 $\mathbb{Q}$ . 事实上考虑 $X^m-\pi$ 的根即可...

(b) 设 $L/K$ 是 $\Omega$ 中的完全分歧扩张，且 $K_0/K$ 如 (a) 中所述，证明 $L$ 与 $K_0$ 在 $K$ 上线性不交。若 $L/K$ 是伽罗瓦扩张（群为 $G$），推导得出 $L_0/K_0$（其中 $L_0 = K_0 L$）也是伽罗瓦扩张，其群为 $G$。

## §3. 扩张与完备化 (Extension and Completion)

### 1. 完备化的代数张量积表示

**定理 1**：设 $L/K$ 是 $n$ 次有限扩张，$v$ 是 $K$ 的离散赋值（其环为 $A$），$B$ 是 $A$ 在 $L$ 中的整闭包。假设 $B$ 是有限生成 $A$-模。令 $w_i$ 为 $v$ 在 $L$ 上的不同延拓，且 $e_i, f_i$ 为相应的参数。设 $\hat{K}$ 和 $\hat{L}_i$ 分别为 $K$ 和 $L$ 关于 $v$ 和 $w_i$ 的完备化。则：
1. 域 $\hat{L}_i$ 是 $\hat{K}$ 的扩张，其次数为 $n_i = e_i f_i$。
2. 赋值 $\hat{w}_i$ 是 $\hat{L}_i$ 上延拓 $\hat{v}$ 的唯一赋值，且满足 $e_i = e(\hat{L}_i/\hat{K})$ 且 $f_i = f(\hat{L}_i/\hat{K})$。
3. 规范同态

$$\varphi: L \otimes_K \hat{K} \rightarrow \prod_i \hat{L}_i$$

是一个同构。

**证明**：
断言 (ii) 在上一节基础上是显然的, 并蕴含断言 (i). 对于 (iii)，积拓扑使 $\prod \hat{L}_i$ 成为 $\hat{K}$ 上一个 $n$ 维的豪斯多夫拓扑向量空间。根据Approximation Lemma , $\varphi(L)$ 在 $\prod \hat{L}_i$ 中稠密，因此其张量积像 $\varphi(L \otimes_K \hat{K})$ 也是稠密的. 作为 $\hat{K}$-线性空间, 因为完备域上有限维线性空间完备, 所以有限维线性空间都必须是闭子集, 从而稠密的子空间就是全空间. 这个映射是满射，从而是双射. 

**推论 1**：域 $\hat{L}_i$ 是扩张域 $\hat{K}$ 和 $L$ 在 $K$ 上的复合域

业已证明张量积环同构于上述乘积, 商去极大理想就得到 $\hat{L}_i$ . 同时每取定一组到合适的大域中的嵌入 ( 比如说取定 $\hat{K}$ 的代数闭包和 $L$ 到其中的嵌入...) , 自然的 $L\otimes _K \hat{K}\to L \hat{K}$ 都给出复合域与张量积商极大理想的同构...

**推论 2**：若 $x \in L$，则 $x$ 在 $L/K$ 中的特征多项式 $F$ 等于其在各个 $\hat{L}_i/\hat{K}$ 中的特征多项式 $F_i$ 的乘积。特别地，其迹（Trace）与范数（Norm）满足：

$$Tr(x) = \sum Tr_i(x)\\N(x) = \prod N_i(x)$$

实际上 $F$ 也是 $x$ 在 $L\otimes _K\hat{K}$ 中的特征多项式...

**推论 3**：若 $L/K$ 是可分的，则各个完备化扩张 $\hat{L}_i/\hat{K}$ 也是可分的。

复合域...

**推论 4**：若 $L/K$ 是伽罗瓦扩张（群为 $G$），且 $D_i$ 是 $w_i$ 在 $G$ 中的分解群，则扩张 $\hat{L}_i/\hat{K}$ 也是伽罗瓦扩张，其伽罗瓦群同构于 $D_i$。每一 $D_i$ 中的元素可通过连续性延拓为 $\hat{L}_i$ 的 $\hat{K}$-自同构

$D_i$ 中元素都能延拓为 $\hat{L}_i$ 的 $\hat{K}$-自同构, 而 $D_i$ 阶数正是 $[\hat{L}_i:\hat{K}]$ .

### 3. 赋值环的张量积同构

**命题 4**：在定理 1 的假设与符号下，若设 $B_i$ 为赋值 $w_i$ 的环，则规范同态：

$$\varphi: B \otimes_A \hat{A} \rightarrow \prod_i \hat{B}_i$$

是同构。

**证明**：
两边都是秩为 $n$ 的自由 $\hat{A}$-模。要证明其为双射，只需将其模去 $\hat{A}$ 的极大理想 $\hat{\mathfrak{m}}$ 进行化简. 左侧化简为 $B/\mathfrak{m}B$，右侧化简为 $\prod B/\mathfrak{m}_i^{e_i}B$，由半局部环的性质，该映射明显是双射。

### 4. §3 练习内容

1. 设 $K$ 上定义了离散赋值且环为 $A$。若每个有限纯不可分扩张 $L/K$ 均满足条件 (F)，证明 $\hat{K}$ 是 $K$ 的可分扩张。
2. 如果在定理 1 中去掉“$B$ 是有限型 $A$-模”的假设，证明结论 (i) 和 (ii) 依然成立，$\varphi$ 仍是满射，但其核（Kernel）变成一个非零的幂零理想。

## §4. 完备离散赋值环的结构 I：等特征情况 (Structure of Complete Discrete Valuation Rings I: Equal Characteristic Case)

**基本设置**：设 $A$ 是一个完备的离散估值环，其分式域为 $K$，剩余域为 $\overline{K}$。设 $S$ 是 $\overline{K}$ 在 $A$ 中的一个代表元系统，$\pi$ 是 $A$ 的一个uniformizer。

**命题 5**：每一个元素 $a \in A$ 都可以唯一地写成一个收敛级数的形式：

$$(*) \quad a = \sum_{n=0}^{\infty} s_n \pi^n, \quad \text{其中 } s_n \in S$$

类似地，每个元素 $x \in K$ 都可以写成：

$$x = \sum_{n \gg -\infty}^{\infty} s_n \pi^n, \quad \text{其中 } s_n \in S$$

#### 例子
若 $A = \mathbb{Z}_p$，可以取 $S$ 为 $\{0, 1, \dots, p-1\}$；也可以取 $S$ 由 $0$ 和所有的 $(p-1)$ 次单位根组成（后者更为优越，参见命题 8）。

命题 5 表明 $A$ 中的加法和乘法由 $s+s'$ 和 $ss'$ 展开为 $(*)$ 的形式唯一确定。特别地，如果 $S$ 是 $A$ 的一个子域（必然同构于剩余域 $\overline{K}$），则 $A$ 可以与以 $\overline{K}$ 为系数的正式幂级数环 $\overline{K}[[T]]$ 等同。显然，这只有在 $K$ 和 $\overline{K}$ 具有相同特征时才可能。

**定理 2**：设 $A$ 为完备DVR，剩余域为 $\overline{K}$。假设 $A$ 和 $\overline{K}$ 具有相同的特征，且 $\overline{K}$ 是完美域。则 $A$ 同构于 $\overline{K}[[T]]$。
*   *注*：即当 $\overline{K}$ 不完美时，该结果也依然成立。
*   *证明思路*：归结为证明 $A$ 包含一个作为域的代表元系统。

#### 情况 (i)：$\overline{K}$ 特征 $0$
**命题 6**：设 $A$ 为局部环，在一组递降理想序列 $\mathfrak{a}_1 \supset \mathfrak{a}_2 \supset \cdots$ 定义的拓扑下Hausdorff且完备，满足 $\mathfrak{a}_n \mathfrak{a}_m \subset \mathfrak{a}_{n+m}$。假设 $\overline{K} = A/\mathfrak{a}_1$ 是一个特征为 0 的域。则 $A$ 包含一个作为域的 $\overline{K}$ 的代表元系统。
*   *注*：若 $A$ 是一个诺特局部环，并在其作为局部环的自然拓扑下完备，则关于拓扑的第一个假设自动满足。

 **命题 6 的证明步骤**：
1. 下面要反复用到的一个事实是, 在 $\overline{K}$ 中非零, 则在 $A$ 中可逆.
2. 因为特征 $0$ 所以 $A$ 包含 $\mathbb{Q}$。根据佐恩引理（Zorn's lemma），在 $A$ 中存在一个极大子域 $S$。设其在 $\overline{K}$ 中的像为 $\overline{S}$。下证 $\overline{S}=\overline{K}$ ：
3. 首先证明 $\overline{K}$ 在 $\overline{S}$ 上是代数的：若不然，存在 $\overline{a}$ 在 $\overline{S}$ 上超越, 从而 $a$ 在 $S$ 上超越, 且 $S[a] \cap \mathfrak{a}_1 = 0$。由此推出 $A$ 包含有理函数域 $S(a)$，与 $S$ 的极大性矛盾。
4. 从而，任何 $\lambda \in \overline{K}$ 在 $\overline{S}$ 上都有极小多项式 $\overline{f}(X)$。因为特征为 0，$\lambda$ 是 $\overline{f}$ 的单根。
5. 设 $f$ 是同构 $S \rightarrow \overline{S}$ 下对应于 $\overline{f}$ 的多项式。根据命题 7 (Hensel引理) ，存在 $x \in A$ 使得 $\overline{x} = \lambda$ 且 $f(x) = 0$。
6. 从而将 $\overline{S}[\lambda]$ 提升到 $A$ 中。由 $S$ 的极大性，必须有 $\lambda \in \overline{S}$，从而证明了 $\overline{K} = \overline{S}$。

**命题 7 (Hensel引理的特例)** 设 $A$ 是局部环，且在一组递降理想序列 $\mathfrak{a}_1 \supset \mathfrak{a}_2 \supset \cdots$（满足 $\mathfrak{a}_n \mathfrak{a}_m \subset \mathfrak{a}_{n+m}$）定义的拓扑下是豪斯多夫且完备的 ( 也就是 $A\cong \varprojlim A/\mathfrak{a}_i$ ) 。假设 $\mathfrak{a}_1$ 是 $A$ 的极大理想，记 $\overline{K} = A/\mathfrak{a}_1$。设 $f(X)$ 为 $A$ 系数的多项式，其在 $\overline{K}[X]$ 中的简化多项式 $\overline{f}$ 在 $\overline{K}$ 中有一个单根 $\lambda$。则 $f$ 在 $A$ 中有唯一的根 $x$ 使得 $\overline{x} = \lambda$。

*   **唯一性证明**：
    1. 若 $x$ 是这样一个根，则有 $f(X) = (X-x)g(X)$，其中 $\bar{g}(\lambda) \neq 0$。
    2. 若 $x'$ 也是这样一个根，代入 $x'$ 得到 $0 = (x'-x)g(x')$。
    3. 由于 $g(x')$ 模 $\mathfrak{a}_1$ 的简化为 $g(\lambda) \neq 0$，所以 $g(x')$ 在 $A$ 中可逆，故 $x = x'$。
*   **存在性证明**：牛顿迭代...

#### 情况 (ii)：域 $K$ 和 $\overline{K}$ 的特征为 $p \neq 0$。

*   **定义**：若特征为 $p$ 的环 $A$ 的自同态 $x \mapsto x^p$ 是一个自同构（即满射），则称 $A$ 是**完美的**。此时每个元素 $x \in A$ 都有唯一的 $p$ 次方根，记为 $x^{p^{-1}}$。

**命题 8**：设 $A$ 为一个在理想序列 $\mathfrak{a}_1 \supset \mathfrak{a}_2 \supset \cdots$（满足 $\mathfrak{a}_n \mathfrak{a}_m \subset \mathfrak{a}_{n+m}$）定义的拓扑下豪斯多夫且完备的环。假设剩余环 $\overline{K} = A/\mathfrak{a}_1$ 是特征 $p$ 的完美环。则：
1. 存在唯一的一个代表元系统 $f: \overline{K} \rightarrow A$ 满足与 $p$ 次幂运算交换：$f(\lambda^p) = f(\lambda)^p$。
2. 元素 $a \in A$ 属于 $S = f(\overline{K})$ 的充要条件是：对于所有的 $n \geq 0$，$a$ 都是一个 $p^n$ 次幂。
3. 该代表元系统是乘性的，即对所有 $\lambda, \mu \in \overline{K}$，有 $f(\lambda \mu) = f(\lambda) f(\mu)$。
4. 如果 $A$ 的特征为 $p$，则该代表元系统也是加性的，即 $f(\lambda + \mu) = f(\lambda) + f(\mu)$。

**证明**：

> **引理 1**：若 $a \equiv b \pmod{\mathfrak{a}_n}$，则 $a^p \equiv b^p \pmod{\mathfrak{a}_{n+1}}$。

> *证明*：二项式定理，并结合 $p \in \mathfrak{a}_1$ 以及 $p \mathfrak{a}_n\subset \mathfrak{a}_{n+1}$ ...

现在考虑 $\lambda^{p^{-n}}$ 在 $A$ 中的原像 $x_n$ , 引理保证了 $x_n^{p^n}$ 是柯西列, 从而收敛于 $f(\lambda)$ . $f$ 乘性是显然的。若特征 $p$，利用等式 $(x+y)^{p^n} = x^{p^n} + y^{p^n}$ 得到 (iv) 加性。$\square$

**术语**：命题 8 中的代表元系统被称为**乘性代表元系统**（multiplicative system of representatives）。

若 $\overline{K}$ 是完美域且 $A$ 的特征为 $p$，性质 (iii) 和 (iv) 表明 $S = f(\overline{K})$ 是一个域，且该域唯一。

*注*：当 $\overline{K}$ 不完美时，依然存在域代表元系统 $S$，但一般不再唯一。

**练习**：设 $k$ 是特征为 $p$ 的完美域。证明：$k((T))$ 的每个有限纯不可分扩张都同构于一个形如 $k((T^{q^{-1}}))$ 的扩张，其中 $q$ 是 $p$ 的某个幂次。

## §5. 完备离散估值环的结构 II：不等特征情况 (Unequal Characteristic Case)

**基本设置**：设 $A$ 为完备DVR，特征为 0，而剩余域 $k = \overline{K}$ 的特征为 $p \neq 0$。

**定义**：整数 $e = v(p)$ 称为 $A$ 的**绝对分歧指数**（absolute ramification index）。

单射 $\mathbb{Z} \rightarrow A$ 可以延拓为 $p$-进整数环 $\mathbb{Z}_p$ 到 $A$ 的单射。当剩余域 $k$ 是 $q = p^f$ 个元素的有限域时，由命题 5, $A$ 是一个秩为 $n = ef$ 的自由 $\mathbb{Z}_p$-模，且 $K$ 是 $\mathbb{Q}_p$ 的 $n$ 次扩张, 从而 $e$ 成为 $K/\mathbb{Q}_p$ 的分歧指数。

**定义**：若 $e = 1$（即 $p$ 是 $A$ 的一个局部一致化元），则称 $A$ 是**绝对无分歧的**（absolutely unramified）。

**定理 3**：
对于每一个特征 $p$ 的完美域 $k$，存在唯一的（在唯一同构意义下）完备DVR，它是绝对无分歧的且以 $k$ 为其剩余域。
*   *记号*：此环记为 $W(k)$（即威特向量环）。
*   *唯一性图表*：若 $A_1$ 和 $A_2$ 满足定理条件，则存在唯一的同构 $g: A_1 \rightarrow A_2$ 使得如下三角形图表可交换：

$$\begin{array}{ccc} A_1 & \xrightarrow{g} & A_2 \\ \searrow & & \swarrow \\ & k & \end{array}$$

**定理 4 (分歧情况)**：
设 $A$ 是一个完备DVR，其特征与其剩余域 $k$ 的特征不相等。设 $e$ 为其绝对分歧指数。则存在唯一的同态 $W(k) \rightarrow A$ 使得如下三角形图表可交换：

$$\begin{array}{ccc} W(k) & \rightarrow & A \\ \searrow & & \swarrow \\ & k & \end{array}$$

该同态是单射，且 $A$ 是一个秩等于 $e$ 的自由 $W(k)$-模。
*   *注*：$A$ 可以通过在 $W(k)$ 上添加一个满足如下“艾森斯坦方程”（Eisenstein equation）的元素 $\pi$ 获得：
    

$$\pi^e + a_1 \pi^{e-1} + \cdots + a_e = 0, \quad \text{其中 } a_i \in W(k)$$

    这里 $a_i$ 均可被 $p$ 整除，且 $a_e$ 不能被 $p^2$ 整除。

**定义 (p-ring与strict p-ring)**：满足命题 8 关于拓扑理想序列假设的环称为 **$p$-环**（$p$-ring）。如果一个 $p$-环 $A$ 满足其自带的拓扑理想序列为 $p$-进理想序列 $\mathfrak{a}_n = p^n A$，且 $p$ 在 $A$ 中不是零因子，则称该 $p$-环为**严格的**（strict p-ring）。

**级数公式**：严格 $p$-环 $A$ 总有一个 $f:A/\mathfrak{a}_1\to A$ 给出一组乘性代表元，对于剩余环 $A/\mathfrak{a}_1$ 中元素的任意序列 $\alpha_0, \alpha_1, \dots$，级数

$$(**) \quad \sum_{i=0}^{\infty} f(\alpha_i) p^i$$

收敛于 $A$ 中的一个元素 $a$。每个元素 $a \in A$ 都可以唯一地写成这种级数形式。序列中的 $\alpha_i$ 称为 $a$ 的**坐标**（coordinates）。

**严格 $p$-环的例子**
令 $X_\alpha$ 为一族不定元。设 $S$ 是具有整数系数的 $p^{-\infty}$-多项式环，即所有 $\mathbb{Z}[X_\alpha^{p^{-n}}]$ 环的并集。赋予其 $p$-进拓扑并完备化，得到一个严格 $p$-环，记为 $\hat{S} = \hat{\mathbb{Z}}[X_\alpha^{p^{-\infty}}]$。其剩余环为 $\mathbb{F}_p [X_\alpha^{p^{-\infty}}]$，这是特征为 $p$ 的完美环。诸 $X_{\alpha}$ 因为有任意 $p^n$ 次根, 所以是乘性代表元.

在完备化环 $\hat{\mathbb{Z}}[X_i^{p^{-\infty}}, Y_i^{p^{-\infty}}]$ 中，考虑两个元素：

$$x = \sum_{i=0}^{\infty} X_i p^i \quad \text{和} \quad y = \sum_{i=0}^{\infty} Y_i p^i$$

设 $*$ 代表 $+$, $\times$, 或 $-$ 运算之一。组合元素 $x * y$ 可以唯一写成如下形式：

$$x * y = \sum_{i=0}^{\infty} f(Q_i^*) p^i, \quad \text{其中 } Q_i^* \in \mathbb{F}_p[X_j^{p^{-\infty}}, Y_j^{p^{-\infty}}]$$

这些 $Q_i^*$ 是在素域 $\mathbb{F}_p$ 上具有多项式形式的 $p^{-\infty}$-多项式。

**命题 9**：
设 $A$ 是一个剩余环为 $k$ 的 $p$-环，并设 $f: k \rightarrow A$ 是 $A$ 中的乘性代表元系统。设 $\{\alpha_i\}$ 和 $\{\beta_i\}$ 是 $k$ 中的两个元素序列。则：

$$\sum_{i=0}^{\infty} f(\alpha_i) p^i * \sum_{i=0}^{\infty} f(\beta_i) p^i = \sum_{i=0}^{\infty} f(\gamma_i) p^i$$

其中 $\gamma_i = Q_i^*(\alpha_0, \alpha_1, \dots; \beta_0, \beta_1, \dots)$。

*   **证明步骤**：
    1. 显然存在一个同态 $\theta: \mathbb{Z}[X_i^{p^{-\infty}}, Y_i^{p^{-\infty}}] \rightarrow A$，其将 $X_i$ 映射到 $f(\alpha_i)$，将 $Y_i$ 映射到 $f(\beta_i)$。该同态通过连续性可以延拓到完备化环 $\hat{S}$。
    2. 模去理想后，在剩余环上定义了同态 $\overline{\theta}: \mathbb{F}_p [X_i^{p^{-\infty}}, Y_i^{p^{-\infty}}] \rightarrow k$，其将 $X_i$ 映射到 $\alpha_i$，将 $Y_i$ 映射到 $\beta_i$。
    3. 由于乘性代表元可以刻画为所有 $n$ 的 $p^n$ 次方根，同态 $\theta$ 与乘性代表元系统交换。
    4. 因此：
       

$$\sum f(\alpha_i) p^i * \sum f(\beta_i) p^i = \theta(x) * \theta(y) = \theta(x * y) = \sum \theta(f(Q_i^*)) p^i = \sum f(\overline{\theta}(Q_i^*)) p^i$$

    5. 因为 $\overline{\theta}(Q_i^*) = \gamma_i$，命题得证。

**命题 10**：
设 $A$ 和 $A'$ 是两个剩余环分别为 $k$ 和 $k'$ 的 $p$-环，并假设 $A$ 是严格的。对于任意同态 $\phi: k \rightarrow k'$，存在唯一的同态 $g: A \rightarrow A'$ 使得如下方块图表可交换：

$$\begin{array}{ccc} A & \xrightarrow{g} & A' \\ \downarrow & & \downarrow \\ k & \xrightarrow{\phi} & k' \end{array}$$

*   **命题 10 的证明步骤**：
    *   *唯一性*：如果 $a \in A$ 具有坐标 $\{\alpha_i\}$，由于同态必须与乘性代表元交换，故：
        

$$g(a) = \sum_{i=0}^{\infty} g(f_A(\alpha_i)) p^i = \sum_{i=0}^{\infty} f_{A'}(\phi(\alpha_i)) p^i$$

        这直接证明了 $g$ 的唯一性。
    *   *存在性*：将上述公式作为 $g$ 的定义，命题 9 证明了它确实是一个环同态。

**推论 (Corollary)**
具有相同剩余环的两个严格 $p$-环是正则同构的。

**引理 2 (Lemma 2)**
设 $\varphi: k \rightarrow k'$ 是一个满同态，其中 $k$ 和 $k'$ 是特征为 $p$ 的完美环。如果存在一个以 $k$ 为剩余环的严格 $p$-环 $A$，则也存在一个以 $k'$ 为剩余环的严格 $p$-环 $A'$。
*   *证明思路*：将 $A'$ 定义为 $A$ 的一个商环。若 $a$ 和 $b$ 具有坐标 $\alpha_i, \beta_i \in k$，若对所有 $i$ 均有 $\varphi(\alpha_i) = \varphi(\beta_i)$，则定义 $a \equiv b$。利用命题 9 说明这定义了一个商环 $A'$，进而证明其是一个严格 $p$-环。

**定理 5**：
对于每一个特征为 $p$ 的完美环 $k$，存在唯一的严格 $p$-环 $W(k)$ 满足其剩余环为 $k$.
*   *证明步骤*：
    1. 唯一性由上述推论保证。
    2. 存在性：若 $k$ 具有多项式环 $\mathbb{F}_p[X_\alpha^{p^{-\infty}}]$ 的形式，则取 $W(k) = \hat{\mathbb{Z}}[X_\alpha^{p^{-\infty}}]$。
    3. 一般情况可以通过应用引理 2 得出，因为任何完美环都可以表示为形如 $\mathbb{F}_p[X_\alpha^{p^{-\infty}}]$ 的环的商。

*   **性质**：命题 10 说明 $W(k)$ 是关于 $k$ 的一个函子。更精确地，有如下同构：
    

$$\text{Hom}(k, k') = \text{Hom}(W(k), W(k'))$$

*   **定理 3 和定理 4 的证明**：定理 3 是定理 5 的一个特例，因为一个绝对无分歧且剩余域 $k$ 完美的完备离散估值环，恰好是一个以 $k$ 为剩余环的严格 $p$-环。

*   **定理 4 的证明（续）**：
    1. 同态 $g: W(k) \rightarrow A$ 的存在性和唯一性由命题 10 得到。
    2. $g$ 是单射，因为 $A$ 的特征为 0。
    3. 如果 $\pi$ 是 $A$ 的一个一致化元，通过类似于命题 5 的证明可以推导得出，每个元素 $a \in A$ 都可以唯一地写成：
       

$$a = \sum_{i=0}^{\infty} \sum_{j=0}^{e-1} f(\alpha_{ij}) \pi^j p^i, \quad \text{其中 } \alpha_{ij} \in k$$

    4. 由此得出 $\{1, \pi, \dots, \pi^{e-1}\}$ 构成 $A$ 作为 $W(k)$-模的基。

**评注 (Remark)**
定义 $W(k)$ 运算的函数 $Q_i^*$ 涉及到了 $X_n$ 和 $Y_n$ 的 $p^n$ 次方根。为了在通常意义下使用多项式，可以通过以下公式重新定义 $a$ 的坐标 $\alpha_i$：

$$a = \sum_{i=0}^{\infty} f(\alpha_i^{p^{-i}}) p^i$$

这引入了下一节研究的“威特向量”（Witt vectors）。
