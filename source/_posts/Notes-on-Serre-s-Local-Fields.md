 
title: Notes on Serre's Local Fields
date: 2026-02-17 18:53:10
tags:
 
> Serre Local Fields chapter 1

### §1. 离散赋值环的定义

**定义**：一个环 $A$ 被称为**离散赋值环 (Discrete Valuation Ring, DVR)**，如果它是一个主理想整环 (PID)，并且它存在唯一一个非零素理想 $\mathfrak{m}(A)$ 。域 $A/\mathfrak{m}(A)$ 称为环 $A$ 的**剩余域 (residue field)** 。

 $A$ 是 PID，所以理想 $m(A)$ 是主理想，可由某不可约元素 $\pi$ 生成，即 $m(A) = \pi A$。元素 $\pi$ 被称为 $A$ 的**一致化元 (uniformizing element/uniformizer)** 。$A$ 的所有非零理想均具有 $\pi^n A$ ($n \ge 0$) 的形式 。

**赋值函数 $v$**：任意非零元 $x \in A$ 都可以唯一地写为 $x = \pi^n u$ 的形式，其中 $n \in \mathbb{N}$，且 $u \notin m(A)$ 即可逆元。此整数 $n$ 称为 $x$ 的**赋值 (valuation)**，记为 $v(x)$ 。
设 $K$ 为 $A$ 的分式域。任一元素 $x = a/b \in K^*$ 可以写作 $\pi^n u$ ($n \in \mathbb{Z}$)，令 $v(x) = n$，赋值具备以下性质 ：

(1) $v: K^* \to \mathbb{Z}$ 是满同态 。

(2) $v(x+y) \ge \inf(v(x), v(y))$ （约定 $v(0) = +\infty$） 。

**命题1**：反之，若给定域 $K$ 和满足上述两个性质的同态 $v: K^* \to \mathbb{Z}$，则集合 $A = \{x \in K \mid v(x) \ge 0\}$ 是一个 DVR，且 $v$ 即为其相关赋值 。

**证明**：取 $\pi$ 使得 $v(\pi)=1$，那么对任意 $x \in A$，均有 $x = \pi^{v(x)} u$，且 $v(u) = 0$ 意味着 $v(u^{-1})=0$ , 因此 $u$ 在 $A$ 中可逆。这使得 $A$ 的所有理想都是 $\pi^n A$ 形式，故为 DVR 。

**例子**：
1. 局部化 $\mathbb{Z}_{(p)} = \{r/s \in \mathbb{Q} \mid s \text{ 不被 } p \text{ 整除}\}$，其剩余域为 $\mathbb{F}_p$ 。


2. 域 $k$ 上的形式幂级数域 $k((T))$ 及其赋值环 $k[[T]]$ (非负次幂级数)，剩余域为 $k$ 。


 

### §2. 离散赋值环的特征性质

本节给出了识别 DVR 的若干重要等价条件。

**命题2**：交换环 $A$ 是 DVR $\iff$ $A$ 是一个 Noetherian（诺特）局部环，且其唯一极大理想由一个非幂零元生成 。

**证明**：$\Rightarrow$ 显然。对于 $\Leftarrow$ 方向，设极大理想 $m(A)$ 由 $\pi$ 生成 。先证明对任何一个 $x$ ,  $x$ 的 $\pi^n$ 因子的幂次有限, 也就是 $\bigcap m(A)^n = 0$ , 从而 $A$ 中任何元素都可以写成 $x=\pi^n u$ , $u\not\in \mathfrak{m}(A)$ , 因此 $A$ 是整环且这种表示唯一, $A$ 是DVR.


构造零化子理想 $\mathfrak{u} = \{x \in A \mid \exists m, x\pi^m=0\}$ 。由 Noetherian 环性质知 $\mathfrak{u}$ 有限生成，存在 $N$ 使得 $\pi^N$ 零化 $\mathfrak{u}$ . 设 $y \in \bigcap m(A)^n$，可写 $y = \pi^n x_n$ . 在 $A/\mathfrak{u}$ 中 $\pi$ 非零因子, 而 $\pi^n(x_n-\pi x_{n+1})=0$ , 从而 $x_n=\pi x_{n+1}$ . 商环中 $(x_n)$ 递增从而稳定, 假设 $(x_n)=(x_{n+1})$ , 则 $(1-\pi t)x_{n+1}=0$ 即 $x_{n+1}=0$ . $\square$ 

注: 这里 $\bigcap \mathfrak{m}(A)^n$ 是 $A \to \hat{A}$ 的核, $\hat{A}$ 是 $A$ 关于 $\mathfrak{m}$ 的完备化, 具体来说是 $A/\mathfrak{m}\leftarrow A/\mathfrak{m}^2\leftarrow \cdots$ 的inverse limit. 直观上来讲 $A/\mathfrak{m}^k$ 可以理解为 $A$ 中函数的 $k$ 阶泰勒展开,  $\bigcap \mathfrak{m}(A)^n=0$ 也就是说 $A$ 中函数可以被它在 $\mathfrak{m}$ 点处的泰勒展开决定. 比如说 $A=k[x]_{(x)}$ , $\mathfrak{m}=(x)$ , $A/\mathfrak{m}^k$ 就是全体 $\deg < k$ 的多项式. 

而诺特可以理解为闭子概形降链中止, $\mathfrak{m}(A)=(\pi)$ 意味着 $\pi$ 整除 $A$ 中任何元素, 几何上讲也就是 $\pi$ 在 $\mathfrak{m}(A)$ 处有一阶零点, 任何在 $\mathfrak{m}(A)$ 为 $0$ 的 $A$ 中函数 $x$ 都可以通过 $x=\pi \cdot x_1$ 来切分出一份 $\pi$ 的一阶零点, 由诺特条件这个切分过程会中止, 从而到某一步变成 $x_{n+1}=\pi t x_{n+1}$ , 而 $1-\pi t$ 在 $\mathfrak{m}(A)$ 处不为 $0$ 从而是可逆元...


**命题3**：Noetherian 整环 $A$ 是 DVR $\iff$ (i) $A$ 是整闭的 (integrally closed)；且 (ii) $\dim A=1$ , 即 $A$ 有唯一非零素理想 .

**证明**：
$\Rightarrow$ 对于整闭性：假设 $x \notin A$，其赋值 $v(x) = -m < 0$ 。若 $x$ 满足整方程 $x^n + a_1 x^{n-1} + \dots + a_n = 0$ ($a_i \in A$)，则首项 $x^n$ 具有唯一的最小极小估值 $-nm$，由引理（DVR中若干元素之和若有一项赋值严格最小则和必不为0）得出矛盾 。


$\Leftarrow$ 首先假设 $A$ 是诺特局部环. 构造分式理想 $\mathfrak{m}' = \{x \in K \mid x \mathfrak{m} \subset A\}$ , 则 $\mathfrak{m} \mathfrak{m}'$ 是理想, 且 $\mathfrak{m}\subset \mathfrak{m} \mathfrak{m}'$ , 从而 $\mathfrak{m} \mathfrak{m}'=\mathfrak{m}$ 或 $\mathfrak{m} \mathfrak{m}'=A$. 分三步证明: 
(1) 如果 $\mathfrak{m} \mathfrak{m}'=A$ , 则 $\mathfrak{m}$ 是主理想. 
(2) 如果 $A$ 整闭且 $\mathfrak{m} \mathfrak{m}'=\mathfrak{m}$ , 则 $\mathfrak{m}'=A$ . 
(3) 如果 $A$ 有唯一素理想, 则 $\mathfrak{m}'\ne A$ .

对 (1) , 由Nakayama引理, $\mathfrak{m}\ne \mathfrak{m}^2$ , 所以可以取非零的 $x\in \mathfrak{m}\backslash \mathfrak{m}^2$ . 下证 $\mathfrak{m}=(x)$ : 按定义 $x\mathfrak{m}'$ 是 $A$ 中理想, 要么 $x \mathfrak{m}'=A$ 要么 $x\mathfrak{m}'\subset \mathfrak{m}$ , 将 $x$ 作用于 $\mathfrak{m} \mathfrak{m}'=A$ 得到 $(x\mathfrak{m}')\mathfrak{m} =(x)$ , 由于 $x\not\in \mathfrak{m}^2$ 所以 $x \mathfrak{m}'=A$ , 即 $x^{-1}\in \mathfrak{m}'$ 从而 $x^{-1} \mathfrak{m}=A$ , 即 $\mathfrak{m}=(x)$ .

对 (2) , 由于 $\mathfrak{m} \mathfrak{m}'=\mathfrak{m}$ , 对任意 $x\in \mathfrak{m}'$ , $x \mathfrak{m}\subset  \mathfrak{m}$ , 从而 $\mathfrak{a}_n=\left<1,x,\cdots,x^n \right>\subset \mathfrak{m}'$ .  取 $y\in \mathfrak{m}$ , 则 $\mathfrak{m}'\subset  y^{-1}A$ 从而诺特, 因此 $\mathfrak{a}_n$ 升链中止, 存在 $\mathfrak{a}_n=\mathfrak{a}_{n-1}$ , 因此 $x^n\in \mathfrak{a}_n$ , $x^n=b_0+b_1x+\cdots+b_{n-1}x^{n-1}$ , 因而 $x\in A$ , 因而 $\mathfrak{m}'=A$ .

对 (3) , 

构造分式理想 $\mathfrak{m}' = \{x \in K \mid x \mathfrak{m} \subset A\}$，并探讨乘积理想 $m \cdot m'$ 。由于 $m \subset m \cdot m' \subset A$，故乘积等于 $m$ 或 $A$ 。若等于 $m$，结合 $A$ 的整闭性及 Noether 性质，可证 $m'=A$ 。再利用条件 (ii) 的局部化性质 $A_x = K$ 反证得出 $m' \neq A$，故必有 $m \cdot m' = A$ 。这说明 $m$ 是可逆理想，在局部环中即可推出它是主生成理想，进而结合命题2得证 。

注: 模的直观可以如此理解: 对一个坐标环 $A$ , $M/\mathfrak{m} M$ 相当于 $M$ 基变换至 $A/\mathfrak{m}$ , 而 $A/\mathfrak{m}$ 通过在 $\mathfrak{m}$ 处的取值自然同构于 $k$, 于是纤维 $M/\mathfrak{m}M$ 中就可以通过这一取值同态将 $M$ 中元素里数乘 $A$ 中元素的部分都转换成取值, 也就是比如说 $v=fw$ , $v,w\in M, f\in A$ , 则在商环中 $\bar{v}=f(\mathfrak{m})\bar{w}$ . 

比如说函数环 $A=k[x,y]/(xy)$ , $M=(x,y)$ . 在极大理想 $\mathfrak{m}$ 处的纤维就是 $M/\mathfrak{m}M$ , 在 $0$ 处的纤维是 $M/(x,y)M=(x,y)/(x,y)^2$ , 某个 $M$ 中多项式的image就是它的第一次项; 在 $(a,b)$ (不妨设在x轴上, 即 $b=0$ ) 的纤维是 $M/(x-a,y)M=(x)/(x^2-ax)$ (这里记 $M$ 的生成元为 $e_1=x, e_2=y$ , 这个做商相对于基变换到 $A/(x-a,y)$ 上, 本来是 $xe_2=ye_1=0$ , 附加 $x=a,y=0$ , 于是 $ae_2=0e_1=0$ , 生成元仅剩 $e_1$ ...) , 那么代入一个多项式, 比如说 $x^2+2x$ 就得到 $(a+2)x$ , 也就是它在该点的取值/ $x$ 在该点的取值乘以 $x$. 









 

### §3. Dedekind Domains

**命题4**：对 Noetherian 整环 $A$，以下条件等价（满足者被称为 **戴德金整环** ）：
(i) 环 $A$ 在任意非零素理想 $\mathfrak{p}$ 处的局部化 $A_\mathfrak{p}$ 均为 DVR 。
(ii) 环 $A$ 整闭，且维数 $\le 1$ (即非零素理想均为极大理想) 。


**证明**：(i)$\implies$(ii) 中, 因 $A_\mathfrak{p}$ 是 DVR 只有唯一非零素理想，故 $\mathfrak{p} \subset \mathfrak{p}'$ 只能推出 $\mathfrak{p}=\mathfrak{p}'$，从而维数 $\le 1$ 。整闭性则由于 $A=\bigcap_{\mathfrak{p}} A_{\mathfrak{p}}$ . 事实上 $x\in A_{\mathfrak{p}}$ 相当于存在 $s\in A\backslash \mathfrak{p}$ 使得 $sx\in A$ , 令 $\mathfrak{b}=\{ s\in A:sx\in A \}$ , 则 $\mathfrak{b}$ 不包含于任何素理想从而为 $A$ , 因此 $x\in A$.

(ii)$\implies$(i) 局部化保持整闭和维数不增，直接应用命题3即可. $\square$

> 注: (i)$\implies$(ii) 中事实上证明了 $\mathfrak{a}=\bigcap _{\mathfrak{p}}\mathfrak{a}_{\mathfrak{p}}$ , 对任意分式理想 $\mathfrak{a}$ 成立.

**命题5**：戴德金环中所有的非零分式理想在乘法下构成一个群, 具体来说 $\mathfrak{a}$ 的逆是 $(A:\mathfrak{a})$ . 

**证明**：在DVR中分式理想具有 $(\pi^n)$ 形式自然可逆. 而 $(\mathfrak{a}\mathfrak{b})_{\mathfrak{p}}=\mathfrak{a}_{\mathfrak{p}} \mathfrak{b}_{\mathfrak{p}}$ , $(\mathfrak{a}:\mathfrak{b})_{\mathfrak{p}}=(\mathfrak{a}_{\mathfrak{p}}:\mathfrak{b}_{\mathfrak{p}})$ . 而如上注释所述, $\mathfrak{a}(A:\mathfrak{a})$ 在任何素理想 $\mathfrak{p}$ 处的局部化是 $A_{\mathfrak{p}}$ , 因此 $\mathfrak{a}(A:\mathfrak{a})=A$ . $\square$ 


**命题6**：戴德金环中任何一个非零元素 $x$ 只属于有限个素理想, 因此几乎所有的 $v_{\mathfrak{p}}(x)$ 等于零. 

**证明**：由于分式理想逆使包含关系反序, 而 $x^{-1}A$ 诺特, 所以包含 $x$ 的分式理想满足降链条件. 考虑降链$$\mathfrak{p}_1\supset \mathfrak{p}_1\cap \mathfrak{p}_2\supset \cdots \supset\mathfrak{p}_1\cap \cdots\cap  \mathfrak{p}_k\supset \cdots$$稳定, 则任意 $\mathfrak{p}_i$ 包含在 $\mathfrak{p}_1\cap \cdots\cap  \mathfrak{p}_k$ , 从而等于某个 $\mathfrak{p}_i$ . $\square$

可以对任何理想 $\mathfrak{a}$ 定义 $v_{\mathfrak{p}}(\mathfrak{a})$ , 它具有如下性质$$\begin{aligned}
v_{\mathfrak{p}}(\mathfrak{a}\mathfrak{b}) &= v_{\mathfrak{p}}(\mathfrak{a}) + v_{\mathfrak{p}}(\mathfrak{b})\\
v_{\mathfrak{p}}((\mathfrak{b}:\mathfrak{a})) &= v_{\mathfrak{p}}(\mathfrak{b}\mathfrak{a}^{-1}) = v_{\mathfrak{p}}(\mathfrak{b}) - v_{\mathfrak{p}}(\mathfrak{a})\\
v_{\mathfrak{p}}(\mathfrak{a} + \mathfrak{b}) &= \text{Inf}(v_{\mathfrak{p}}(\mathfrak{a}), v_{\mathfrak{p}}(\mathfrak{b})) \\
v_{\mathfrak{p}}(xA) &= v_{\mathfrak{p}}(x)
\end{aligned}$$

**命题7 (唯一分解)**：每个分式理想 $\mathfrak{a}$ 都可唯一分解为 $\mathfrak{a} = \prod \mathfrak{p}^{v_\mathfrak{p}(\mathfrak{a})}$，只有有限个素理想的指数非零.

**证明**：如命题4后注释所述, $\mathfrak{a}$ 被全体 $v_{\mathfrak{p}}(\mathfrak{a})$ 唯一确定, 则由上述性质立即得证. $\square$

**逼近引理 (Approximation Lemma)**：给定 $k$ 个不同的素理想 $\mathfrak{p}_i$、元素 $x_i \in K$ 及整数 $n_i$。存在 $x \in K$ 使得对所有 $i$ 都有 $v_{\mathfrak{p}_i}(x - x_i) \ge n_i$，并且对其余未指定的素理想 $\mathfrak{q}$ 有 $v_\mathfrak{q}(x) \ge 0$ .


**证明**：对 $x_i \in A$ 情形, 由于 $\mathfrak{p}_i^{n_i}$ 与 $\mathfrak{p}_j^{n_j}$ 互素, 所以CRT (满射部分) 保证了解的存在性. 一般分式情形假设 $x_i=a_i/s$ 且 $x=a/s$ , 则要求 $v_{\mathfrak{p}_i}(a - a_i) \ge n_i+v_{\mathfrak{p}_i}(s)$ 和 $v_{\mathfrak{q}}(a)\geqslant v_{\mathfrak{q}}(s)$ 即可. $\square$ 




 

### §4. Extensions

假设 $K$ 是戴德金环 $A$ 的分式域. $L/K$ 是次数为 $n$ 有限扩张,  $B$ 是 $A$ 在 $L$ 中的整闭包. 

条件 **(F)**：$B$ 构成一个有限生成 $A$-模.

**命题8**：若 $L/K$ 可分, 则条件(F)成立.

如果条件(F)满足, 则 $B$ 是诺特整闭整环.

**证明**：可分则双线性型 $\operatorname{Tr}(xy)$ 非退化. 取 $B$ 中 $L/K$ 的一组基 $\{ e_i \}$ , 令 $V$ 是它们生成的自由 $A$-模. 对 $L$ 的 $A$-子模 $M$, 定义对偶 $M^* = \{x \in L : \operatorname{Tr}(xy) \in A,\ \forall y\in M\}$ . 

由于 $B$ 在 $A$ 上整且 $A$ 整闭, $\operatorname{Tr}$ 通过限制给出 $B\to A$ 映射, 所以 $V\subset B\subset B^*\subset V^*$ . 而考虑对偶基知 $V^*$ 是 $e_i^*$ 张成的自由模, 因此诺特, 从而 $B$ 是有限生成 $A$-模. $\square$

此后都假设 $B$ 满足条件 (F).

**命题9**：若 $A$ 是戴德金环，则 $B$ 也是戴德金环.

**证明**：只需证明 $\dim B\leqslant 1$ , 这只需如下引理

**引理2** 若 $B$ 中两素理想 $\mathfrak{P}, \mathfrak{Q}$ 满足 $\mathfrak{P} \subset \mathfrak{Q}$ 且 $\mathfrak{P} \cap A = \mathfrak{Q} \cap A$，那么 $\mathfrak{P} = \mathfrak{Q}$

商去 $\mathfrak{P}$ 从而可以假设 $\mathfrak{P}=0$ . 如果 $\mathfrak{P}\ne \mathfrak{Q}$ , 取非零的 $x\in \mathfrak{Q}$ , $x$ 有极小多项式$$x^n+a_{n-1}x^{n-1}+\cdots+a_0=0$$极小所以 $a_0\ne 0$ , 而 $a_0\in xB$ 从而 $a_0\in \mathfrak{Q}\cap A$ , 与 $\mathfrak{Q}\cap A=\mathfrak{P}\cap A=0$ 矛盾. $\square$ 




**分歧指数与剩余次数**： $\mathfrak{p}B\subset \mathfrak{P}$ 记为 $\mathfrak{P} \mid \mathfrak{p}$ (或称为 $\mathfrak{P}$ 在 $\mathfrak{p}$ 之上) . 分解得到 $\mathfrak{p}B = \prod \mathfrak{P}^{e_\mathfrak{P}}$ , $e_\mathfrak{P}$ 称为 $\mathfrak{P}$ 的**分歧指数** . 扩张次数 $f_\mathfrak{P} = [B/\mathfrak{P} : A/\mathfrak{p}]$ 称为 $\mathfrak{P}$ 的**剩余次数** . 如果只有唯一的素理想 $\mathfrak{P}$ 整除 $\mathfrak{p}$ 且 $f_{\mathfrak{P}}=1$ 时, 称 $L/K$ 在 $\mathfrak{p}$ 处**完全分歧**. 如果 $e_{\mathfrak{P}}=1$ 且 $B/\mathfrak{P}$ 在 $A/\mathfrak{p}$ 上可分, 则称 $L/K$ 在 $\mathfrak{p}$ 上 ($\mathfrak{p}$ 处) **非分歧**.


**命题10**：令 $n = [L:K]$ , 则 $B/\mathfrak{p}B$ 是 $n$ 次的 $A/\mathfrak{p}$-代数,  $n = \sum_{\mathfrak{P} \mid \mathfrak{p}} e_\mathfrak{P} f_\mathfrak{P}$ .


**证明**：关于 $S=A\backslash \mathfrak{p}$ 进行局部化, $B'=S^{-1}B$ 为 $A_{\mathfrak{p}}$ 在 $L$ 中的整闭包. 而 $A_{\mathfrak{p}}$ 为DVR, 由于(F)和PID上有限生成模的结构定理, $B'$ 是秩为 $n$ 自由 $A_{\mathfrak{p}}$-模, 从而 $B'/\mathfrak{p}B'$ 是秩为 $n$ 的自由 $A_{\mathfrak{p}}/\mathfrak{p}A_{\mathfrak{p}}$-模, 后者等于 $A/\mathfrak{p}$ , 且 $B'/\mathfrak{p}B'=S^{-1}(B/\mathfrak{p}B)=B/\mathfrak{p}B$ . 因此 $B/\mathfrak{p}B$ 是 $A/\mathfrak{p}$ 上 $n$ 维线性空间.

由CRT $B/\mathfrak{p}B \cong \prod B/\mathfrak{P}^{e_\mathfrak{P}}$ . 而$$[B/\mathfrak{P}^{e_{\mathfrak{P}}}:A/\mathfrak{p}]=\sum_{i=0}^{e_{\mathfrak{P}-1}}[\mathfrak{P}^{i}/\mathfrak{P}^{i+1}:A/\mathfrak{p}]=e_{\mathfrak{P}}[B/\mathfrak{P}:A/\mathfrak{p}]=e_{\mathfrak{P}}f_{\mathfrak{P}}$$
$\square$ 

**推论**：如果 $A$ 只有有限多素理想, 则 $B$ 也只有有限多素理想 (从而是PID)

设 $\mathfrak{P}$ 是 $B$ 的非零素理想, $\mathfrak{p} = A \cap \mathfrak{P}$ . 如果 $x \in K$ , 则 $v_{\mathfrak{P}}(x) = e_{\mathfrak{P}}v_{\mathfrak{p}}(x)$ . 赋值 $v_{\mathfrak{P}}$ prolongs $v_{\mathfrak{p}}$ with index $e_{\mathfrak{P}}$. 反过来: 

**命题11**：令 $w$ 是 $L$ 的离散赋值, 以 $e$ 的index延拓了 $v_{\mathfrak{p}}$ , 则存在 $\mathfrak{p}$ 的因子 $\mathfrak{P}$ , $w=v_{\mathfrak{P}}$ 且 $e=e_{\mathfrak{P}}$

**证明**：令 $W$ 为 $w(x)\geqslant 0$ 定义的环, $\mathfrak{Q}$ 为其极大理想, 也就是全体 $w(x)\geqslant 1$ 的元素集合. 由于 $W$ 整闭且包含 $A$, 所以包含 $B$. 令 $\mathfrak{P}=B\cap \mathfrak{Q}$ , 则 $\mathfrak{P}\cap A=\mathfrak{p}$ , 因此 $\mathfrak{B}|\mathfrak{p}$ , 从而 $B_{\mathfrak{P}}\subset W$. 而离散赋值环是其分式域中的极大真子环, 从而 $W=B_{\mathfrak{P}}$ , 因而 $w=v_{\mathfrak{P}}$ , $e=e_{\mathfrak{P}}$. $\square$

 

### §5. The Norm and Inclusion Homomorphisms

$I_A, I_B$ 分别代表 $A$ 与 $B$ 的非零分式理想群. 下面在素理想上定义两个群同态.

**包含同态** $i: I_A \to I_B$：$i(\mathfrak{p}) = \mathfrak{p}B = \prod \mathfrak{P}^{e_\mathfrak{P}}$ . 

**范数同态** $\mathrm{N}: I_B \to I_A$：$\mathrm{N}(\mathfrak{P}) = \mathfrak{p}^{f_\mathfrak{P}}$ . 二者复合得到 $\mathrm{N}(i(\mathfrak{a})) = \mathfrak{a}^n$ . 

通过Grothendieck群可以给一个更好的解释. 令 $\mathscr{C}_A$ 为 $A$ 上有限长度模的范畴, $M\in \mathscr{C}_A$ , 取 $M$ 的合成列$$0=M_0\subset M_1\subset \cdots\subset M_m=M$$其中 $M_i/M_{i-1}\cong A/\mathfrak{p}_i$ , 令 $\chi_A(M)=\prod \mathfrak{p}_i$ , Jordan-Holder定理保证了它良定义. 对分式理想 $\mathfrak{a}\subset \mathfrak{b}$,  $\chi_A(\mathfrak{b}/\mathfrak{a})=\mathfrak{a}\mathfrak{b}^{-1}$ , 特别的 $\chi_A(A/\mathfrak{a})=\mathfrak{a}$ .

$\chi_A:\mathscr{C}_A\to I_A$ 是**乘性**的, 也就是对正合列$$0\to M'\to M\to M''\to 0$$有 $\chi_A(M)=\chi_A(M')\chi_A(M'')$ . $\chi_A$ 在乘性的 $\mathscr{C}_A\to I_A$ 函子中universal, 具体来说任意乘性的函子 $f:\mathscr{C}_A\to G$ 可以被唯一分解为 $f=g\circ \chi_A$ , 其中 $g:I_A\to G$ 为 $g(\mathfrak{p})=f(A/\mathfrak{p})$ .

由 $\chi_A$ 的泛性质, 遗忘函子 $\mathscr{C}_B\to \mathscr{C}_A$ 诱导出同态 $I_B\to I_A$ , 这正是norm.

**命题12**：$\chi_A(M) = N(\chi_B(M))$ 

**证明**：考虑 $M=B/\mathfrak{P}$ 即可. 按定义 $B/\mathfrak{P}$ 是 $A/\mathfrak{p}$ 上的 $f_{\mathfrak{P}}$-维线性空间. $\square$ 

反过来基变换 $M\mapsto M_B$ 作为 $\mathscr{C}_A\to \mathscr{C}_B$ 的函子诱导出同态 $I_A\to I_B$ .

**命题13**：$\chi_B(M_B) = i(\chi_A(M))$ 

**证明**：只需考虑 $M=A/\mathfrak{p}$ , 此时 $M_B=B/\mathfrak{p}B$. $\square$

**命题14**：对任意元素 $x \in L$ , $N(xB) = N_{L/K}(x)A$ 。

**证明**：理想的norm保持 $\mathfrak{p}$ 处局部化, 因此因为可以局部化, 不妨设 $A$ 为PID, $B$ 成为自由 $A$-模. 令 $u_x$ 表乘 $x$ 的线性映射, 则 $N_{L/K}(x) = \det(u_x)$ . 而乘以可逆矩阵不改变行列式, 同时在同构意义上不改变 $\operatorname{Coker}$ (这个同构就是左乘的可逆矩阵), 所以考虑smith标准型, 不妨设 $u_x$ 对角. 因此只需验证一维情形时等式成立, 这直接来自于 $\chi_A(A/\mathfrak{a})=\mathfrak{a}$ . $\square$ 

 


### §6. 例子：单扩域 (Simple Extensions)

假定 $A$ 为局部环，$\mathfrak{m}$ 为其极大理想，$k=A/\mathfrak{m}$ . 考虑*首一*多项式 $f \in A[X]$ 的商环 $B_f = A[X]/(f)$ . 设 $\bar{f}$ 在 $k[X]$ 中有因式分解 $\prod {\bar{g_i}}^{e_i}$ , $g_i\in A[X]$ , $\bar{g_i}$ 皆不可约. 则有

**引理4**：$B_f$ 中全部极大理想由 $\mathfrak{m}_i=(\mathfrak{m},g_i)$ 给出, $A[X]/\mathfrak{m}_i\cong k[X]/(\bar{g_i})$

**证明**：易见 $\mathfrak{m}_i$ 皆极大. 假设 $\mathfrak{n}$ 是 $B_f$ 的极大理想, 下证 $\mathfrak{n}$ 包含 $\mathfrak{m}$ , 从而 $\mathfrak{n}$ 对应于 $k[X]/(\bar{f})$ 中的极大理想, 于是等于 $\mathfrak{m}_i$ 之一.

假设 $\mathfrak{m}\not\subset \mathfrak{n}$ , 则 $\mathfrak{n}+\mathfrak{m} B_f=B_f$ , 而 $B_f$ 是有限生成 $A$-模, 从而由Nakayama引理 (对 $B_f/\mathfrak{n}$ 应用) $\mathfrak{n}=B_f$ , 矛盾. $\square$ 

注: 类似的还有

> (Dedekind-Kummer) 假设 $K$ 是戴德金环 $A$ 的分式域. $L/K$ 是次数为 $n$ 有限扩张, $B$ 是 $A$ 在 $L$ 中的整闭包. 假设 $L=K(\alpha)$ ,  $\alpha\in B$ 且 $B=A[\alpha]$ . 令 $f$ 为 $\alpha$ 的极小多项式, $\mathfrak{p}$ 为 $A$ 中素理想, $k=A/\mathfrak{p}$, 假设 $k[X]$ 中$$\bar{f} = \bar{g}_1^{e_1} \cdots \bar{g}_r^{e_r}$$令 $\mathfrak{q}_i=(\mathfrak{p},g_i(\alpha))$ , 则 $\mathfrak{p}B$ 在 $B$ 中的素理想分解为$$\mathfrak{p}B = \mathfrak{q}_1^{e_1} \cdots \mathfrak{q}_r^{e_r}$$

显然 $\mathfrak{q}_i$ 皆素理想 (或者直接局部化引理4...). $B\cong A[X]/(f)$ , 从而在 $B/\mathfrak{p}B$ 中, $\mathfrak{q}_1^{e_1} \cdots \mathfrak{q}_r^{e_r}=(f(\alpha))=0$ . 因此 $\mathfrak{p}B\mid \mathfrak{q}_1^{e_1} \cdots \mathfrak{q}_r^{e_r}$ . 同时$$n=\deg f=\sum (\deg  g_i)\cdot e_i=\sum f_{\mathfrak{q}_i}e_{\mathfrak{q}_i}$$因此 $\mathfrak{q}_i$ 即为全部 $\mathfrak{p}$ 上的素理想, 上述乘积等于 $\mathfrak{p}B$ . $\square$

当 $A$ 为 DVR 时, 分类讨论两种特殊情形 ：

(i) 非分歧的情形: 

**命题15**：如果 $\overline{f}$ 是不可约多项式, 则 $B_f$ 是 DVR , 极大理想为 $\mathfrak{m}B_f$ 且剩余域 $k[X]/(\bar{f})$ . 

**证明**：由引理4, $B_f$ 是局部环且极大理想为 $\mathfrak{m}B_f$ . 假设 $\mathfrak{m}$ 的生成元是 $\pi$, 则 $\pi$ 在 $B_f$ 中生成 $\mathfrak{m}B_f$ , 且 $\pi$ 非幂零, 所以由命题2, $B_f$ 是DVR. $\square$

**推论**：此时 $f$ 不可约且 $B_f$ 是 $A$ 在 $L=K[X]/(f)$ 中的整闭包. 如果此时 $\bar{f}$ 可分, 则 $L/K$ 是 $K$ 的非分歧扩张.

**证明**：$K[X]/(f)=B_f\otimes _AK$ , 是 $B_f$ 的局部化从而也是整环, 从而是域. 因此 $f$ 不可约. 由于 $B_f$ 整闭且 $L$ 是 $B_f$ 分式域, $B_f$ 是 $A$ 在 $L$ 的整闭包. 非分歧则直接来自于定义, $B_f/\mathfrak{m}B_f$ 是 $k$ 的可分扩张且 $e_{\mathfrak{m}B_f}=1$ . $\square$

命题15有如下的逆: 

**命题16**: 假设 $K$ 是DVR $A$ 的分式域. $L/K$ 是次数为 $n$ 有限扩张, $B$ 是 $A$ 在 $L$ 中的整闭包. 如果 $B$ 是DVR且剩余域 $\bar{L}$ 是 $k=\bar{K}$ 的单扩张, 且正好也是 $n$ 次, 令 $x\in B$ 且 $\bar{L}=k(\bar{x})$ , $f$ 为 $x$ 在 $L/K$ 中的特征多项式, 则 $B\cong B_f$, 同构由 $A[X]\to B$ , $X\mapsto x$ 诱导

$x\in B$ 在 $A$ 上整, 所以 $x$ 的共轭在 $A$ 上整, 所以 $f$ 的系数都在 $A$ 上整, 因为整闭所以 $f\in A[X]$ . 此外  $\bar{f}$ 是 $\bar{x}$ 的化零多项式, 而恰好 $[\bar{L}:\bar{K}]=n$ , 所以 $\bar{f}$ 是极小多项式从而不可约, 因此由命题15推论1, $f$ 不可约从而 $B\cong A[X]/(f)$ . $\square$

(ii) 完全分歧的情形: 

**命题17**：若 $f$ 具备 $X^n + a_1 X^{n-1} + \dots + a_n$ 的形式, 其中 $a_i \in \mathfrak{m}, a_n \notin \mathfrak{m}^2$ ( Eisenstein多项式 ) , 则 $B_f$ 是 DVR , 极大理想由 $X$ 的像 $x$ 生成, 剩余域 $k$. 

$\bar{f}=X^n$ , 从而由引理4, $B_f$ 是局部环. 令 $\pi=a_n$ 生成 $A$ 中极大理想, 但$$-\pi=x^n+\cdots+a_{n-1}x\in (x)$$从而 $(x)=(\mathfrak{m},x)$ 是极大理想. 由命题2, $B_f$ 是DVR. $\square$ 

**推论**：此时 $f$ 不可约. 令 $L=K[X]/(f)$ , 则 $B_f$ 是 $A$ 在 $L$ 中的整闭包. 且为 $L/K$ 完全分歧.

类似的反之有: 

**命题18**：假设 $K$ 是DVR $A$ 的分式域. $L/K$ 是次数为 $n$ 有限扩张, $B$ 是 $A$ 在 $L$ 中的整闭包. 如果 $B$ 是DVR且对应分歧次数为 $n$ . 令 $x$ 为 $B$ 极大理想的生成元, 则其特征多项式 $f$ 为一个Eisenstein多项式, 且如命题16有 $B\cong B_f$

如命题16, $f\in A[X]$ . 设 $w$ 是 $B$ 的离散赋值, 则 $w(x)=1$ 且 $w(a)\equiv 0\pmod n$ 对任意 $a\in A$ . 设$$f(x)=a_0x^n+\cdots+a_n=0,\quad a_0=1,\ a_i\in A$$由于 $f$ 中各个单项式求和为 $0$, 由引理1, 至少有两个 $i,j$ , 使得 $w(a_ix ^{n-i})=w(a_jx^{n-j})$ 同时取到诸 $w(a_ix^{n-i})$ 中最小值 $r$. 

这相当于 $j-i=w(a_j/a_i)\equiv 0\pmod{n}$ , 从而只可能 $i,j$ 一个为 $0$ 一个为 $n$ . 也因此 $r=n$ , 所以 $w(a_n)=n$ , $w(a_i)\geqslant n-i$ , 因此 $f$ 是Eisenstein多项式, 由命题17的推论立即得到预证结论. $\square$



### §7. Galois Extensions
设 $L/K$ 是带有Galois群 $G(L/K)$ 的Galois扩域 。


**命题19**：群 $G(L/K)$ 在位于同一素理想 $\mathfrak{p}$ 之上的所有素理想 $\mathfrak{P}$ 的集合上的作用传递. 因此 $\mathfrak{p}$ 上方的素理想的 $e_{\mathfrak{P}}, g_{\mathfrak{P}}$ 与 $\mathfrak{P}$ 无关, 记作 $e_{\mathfrak{p}}, f_{\mathfrak{p}}$ , 则有$$n=e_{\mathfrak{p}}f_{\mathfrak{p}}g_{\mathfrak{p}}$$

**证明**：反证. 若某素理想 $\mathfrak{P}'$ 与所有的 $s(\mathfrak{P})$ ($s \in G$) 都不等, 逼近引理给出 $a \in \mathfrak{P}'$ 且 $a \notin s(\mathfrak{P})$ , 令 $x = \prod_{s \in G} s(a)$ 则 $x \in \mathfrak{P}' \cap A = \mathfrak{p} \subset \mathfrak{P}$ . 因 $\mathfrak{P}$ 是素理想，必然存在某个 $s(a) \in \mathfrak{P}$，即 $a \in s^{-1}(\mathfrak{P})$，矛盾. $\square$




**分解群 (Decomposition Group)**：定义 $D_{\mathfrak{P}}(L/K) = \{s \in G \mid s(\mathfrak{P}) = \mathfrak{P}\}$ . 它对应的中间域为 $K_D$ , 此扩展满足 $[K_D:K]=g_{\mathfrak{p}}$ 且 $D$ 阶数为 $e_{\mathfrak{p}}f_{\mathfrak{p}}$ .

对中间域 $E$ , 令 $B_E=E\cap B$ 为 $A$ 在 $E$ 中整闭包, $\mathfrak{P}_E=\mathfrak{P}\cap B_E$ , 剩余域 (因为可分所以ddk..) $\bar{E}=B_E/\mathfrak{P}_E$ .

**惯性群 (Inertia Group)**：每一个 $D$ 中的元素给出 $\overline{L}$ 的自同构, 于是有映射 $\varepsilon: D \to G(\overline{L}/\overline{K})$ . 该同态的 $\operatorname{Ker}$ 定义为惯性群 $T_{\mathfrak{P}}(L/K)$ , 对应中间域 $K_T$ . $K_T/K_D$ 是Galois扩张.


**命题20**：$\overline{L}/\overline{K}$ 为正规扩张, $\varepsilon$ 是满射, 故商群 $D/T \cong G(\overline{L}/\overline{K})$ 


**证明**：首先证明 $\bar{L}/\bar{K}$ 正规. 对 $a\in \bar{L}$ , $P(X)=\prod (X-s(a))\in A[X]$ 完全分裂且以 $a$ 为根, 则在 $\bar{K}[X]$ 中 $\bar{a}$ 的极小多项式也完全分裂. 

下证满性. 令 $\bar{L}_s$ 为 $\bar{L}$ 中 $\bar{K}$ 的可分闭包 ( $\bar{L}/\bar{K}$ 自同构相当于 $\bar{L}_s/\bar{K}$ 自同构), 则可以取primitive element $\bar{a}$ . 利用逼近引理可以找到 $\bar{a}$ 的代表元 $a$ , 对任意 $s\not\in D$, $a\in s(\mathfrak{P})$ . 考虑 $P(X)=\prod (X-s(a))$ , 由于对任意 $s\not\in D$ , $\overline{s(a)}=0$ , 所以 $\bar{P}(X)$ 任何非零根都具有 $\overline{s(a)}$ 形式, 其中 $s\in D$ , 因此 $\varepsilon$ 是满射. $\square$

令 $f_0=[\bar{L}:\bar{K}]_s$ , 而 $p^s=[\bar{L}:\bar{L}_s]$ , 则 $f=f_0p^s$ .

**命题21** 及其推论进一步确立：当剩余域可分时，$|T| = e$, $|D| = ef$，从 $K$ 到 $K_D$ 分解($g$)，到 $K_T$ 非分歧扩展($f$)，到 $L$ 完全分歧扩展($e$) 。





 

### §8. 弗罗贝尼乌斯代换 (Frobenius Substitution)
在 $L/K$ 非分歧且剩余域是包含 $q$ 个元素的有限域 $\mathbb{F}_q$ 这种最经典的局部情形下，惯性群 $T = \{1\}$，分解群等价于 $D \simeq G(\overline{L}/\overline{K})$ 。

由于有限域扩展的伽罗瓦群由映射 $x \mapsto x^q$ 单一生成，分解群 $D$ 内必然存在唯一对应的元素 $s_\mathfrak{P}$，使得对任意 $b \in B$ 均有：


$s_\mathfrak{P}(b) \equiv b^q \pmod{\mathfrak{P}}$ 。

该元素 $s_\mathfrak{P}$ 就是所谓的 **弗罗贝尼乌斯代换 (Frobenius Substitution)**，常记号为 $(\mathfrak{P}, L/K)$ 。其阶数为 $f_\mathfrak{P}$ 。


**运算法则与阿廷符号**：它在子域的限制呈现幂次兼容（命题23），在共轭作用下有 $(t(\mathfrak{P}), L/K) = t (\mathfrak{P}, L/K) t^{-1}$ 。如果伽罗瓦群 $G$ 是阿贝尔群，该代换实际上不依赖上层 $\mathfrak{P}$，只依赖于底层的 $\mathfrak{p} = \mathfrak{P} \cap A$，这被称为 **阿廷符号 (Artin Symbol)**，记为 $(\mathfrak{p}, L/K)$ 甚至 $(\frac{L/K}{\mathfrak{p}})$ 。