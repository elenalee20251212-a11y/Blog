---
title: Notes on p-adic Hodge Theory 1
date: 2026-07-17T19:12:56.000Z
tags: null
articleId: notes-on-p-adic-hodge-theory-1
category: mathematics/number-theory/p-adic-hodge-theory
order: 1
---

## 1.2 Witt 向量与完备离散赋值环

### 1.2.1 非阿基米德域与局部域

**定义 1.9（赋值/Valuation）**：
设 $A$ 是一个带单位元的交换环。若函数 $v: A \rightarrow \mathbb{R} \cup\{+\infty\}$ 满足：
1.  $v(a) = +\infty$ 当且仅当 $a = 0$；
2.  $v(ab) = v(a) + v(b)$；
3.  $v(a + b) \ge \min\{v(a), v(b)\}$；

且存在 $0 \neq a \in A$ 使得 $v(a) \neq 0$，则称 $v$ 为 $A$ 上的一个（非平凡）**赋值**。若 $v(A \setminus \{0\})$ 是 $\mathbb{R}$ 的离散子集，则称 $v$ 为**离散赋值**。

**注记 1.10**：上述赋值通常被称为**高度为 1 的赋值**。

**等价赋值**：
    若存在 $r > 0$ 使得对任意 $a \in A$ 均有 $v_2(a) = r v_1(a)$，则称赋值 $v_1$ 与 $v_2$ **等价**（等价当且仅当它们诱导相同的拓扑）。

**整环与分式域上的延拓**：
    有赋值的环 $A$ 必为整环。若 $ab = 0$ 且 $b \neq 0$，则 $v(b) < +\infty$ 且 $v(a) = v(ab) - v(b) = +\infty$，故 $a = 0$。

**赋值环与局部环结构**：
    定义 $K$ 的**赋值环**（或整数环）为：
    

$$\mathcal{O}_K = \{a \in K \mid v(a) \ge 0\} \quad (1.5)$$

    这是一个局部环，其极大理想为：
    

$$\mathfrak{m}_K = \{a \in K \mid v(a) > 0\} \quad (1.6)$$

    其剩余域为 $k_K = \mathcal{O}_K / \mathfrak{m}_K$。

**定义 1.11（赋值域）**：
    配备了赋值 $v$ 的域 $K$ 称为赋值域。它是非阿基米德的（绝对值满足超度量不等式 $|a + b| \le \max(|a|, |b|)$）。
    设 $\widehat{K}$ 是 $K$ 的完备化，则 $\widehat{K}$ 也是赋值域。任取 $0 \neq u \in \mathfrak{m}_K$，则 $\widehat{K}$ 的整数环可表示为：
    

$$\mathcal{O}_{\widehat{K}} = \varprojlim \mathcal{O}_K / (u^m)$$

    且有 $\widehat{K} = \mathcal{O}_{\widehat{K}}[1/u]$。
**注记 1.12**：$\mathcal{O}_{\widehat{K}}$ 的定义不依赖于 $u$ 的选择。

**推导**：若 $v(u) = r > 0, v(u') = s > 0$，对任意 $n \in \mathbb{N}$，存在 $m_n \in \mathbb{N}$ 使得 $u^{m_n} \in u'^n \mathcal{O}_K$，由此可得逆极限的同构：
        

$$\varprojlim \mathcal{O}_K / (u^m) \stackrel{\sim}{\longrightarrow} \varprojlim \mathcal{O}_K / (u'^n)$$

**定义 1.13（完备非阿基米德域）**：
    关于赋值 $v$ 完备的域称为完备非阿基米德域。

**命题 1.14**：设 $F$ 是关于赋值 $v$ 的完备非阿基米德域，$F'$ 是 $F$ 的代数扩张，则 $F'$ 上存在唯一的赋值 $v'$ 限制在 $F$ 上为 $v$。且满足：
1.  $F'$ 是完备的当且仅当扩张 $[F' : F]$ 是有限的。
2.  若 $\alpha, \alpha' \in F'$ 在 $F$ 上共轭，则 $v'(\alpha) = v'(\alpha')$。 

**证明**：只证明2. 可设 $L/K$ 为正规扩张。对任意 $s \in G(L/K)$，复合映射 $w \circ s$ 同样延拓了 $v$，根据推论 2 它必与 $w$ 重合，因此共轭元 $s(x)$ 与 $x$ 赋值相同。

**注记 1.15（正规赋值与一致化参数）**：
若 $F$ 是关于离散赋值 $v$ 的完备域，则 $v(F^\times) = r \mathbb{Z}$（常数 $r > 0$）。定义**正规赋值**为 $v_F = \frac{1}{r} v$，其满足 $v_F(F^\times) = \mathbb{Z}$。满足 $v_F(\pi) = 1$ 的元素 $\pi \in F$ 称为 $\mathfrak{m}_F$ 的生成元、**一致化参数**（uniformizing parameter）或**统一化元**（uniformizer）。

若 $0 \neq a \in \mathfrak{m}_F$，用 $v_a$ 表示等价于给定赋值且满足 $v_a(a) = 1$ 的唯一赋值。

**定义 1.16（局部域与 $p$-adic 域）**：**局部域**是指一个完备的离散赋值域，其剩余域是特征 $p > 0$ 的完美域。 **$p$-adic 域**是指特征为 0 的局部域。

**例子 1.17**：
    $\mathbb{Q}_p$ 的有限扩张是 $p$-adic 域。事实上，它们是仅有的剩余域为有限域的 $p$-adic 域。

### 1.2.1.2 拓扑同构与泰希米勒代表元

设 $K$ 为局部域，其正规赋值为 $v_K$，完美剩余域为 $k$ 且 $\text{char } k = p > 0$（即 $p \in \mathfrak{m}_K$）。设 $\pi_K$ 为 $K$ 的一致化参数，则 $v_K(\pi_K) = 1$ 且 $\mathfrak{m}_K = (\pi_K)$。我们有拓扑同构

$$\mathcal{O}_K \cong \varprojlim_n \mathcal{O}_K / \mathfrak{m}_K^n \cong \varprojlim_n \mathcal{O}_K / \pi_K^n \mathcal{O}_K \cong \varprojlim_n \mathcal{O}_K / p^n \mathcal{O}_K \quad (1.7)$$

    （其中当 $\text{char } K = p$ 时，$\mathcal{O}_K / p^n \mathcal{O}_K = \mathcal{O}_K$）。

**命题 1.18**：局部域 $K$ 是局部紧的（等价于 $\mathcal{O}_K$ 是紧的）当且仅当其剩余域 $k$ 是有限域。

**命题 1.19**：设 $S$ 是 $k$ 在 $\mathcal{O}_K$ 中的一组代表元集。则每个 $x \in \mathcal{O}_K$ 可以唯一地写为：
    

$$x = \sum_{i \ge 0} s_i \pi_K^i \quad (1.8)$$

    每个 $x \in K$ 可以唯一地写为：
    

$$x = \sum_{i \ge -n} s_i \pi_K^i \quad (1.9)$$

**引理 1.20**：设 $a, b \in \mathcal{O}_K$，则对于 $n \ge 0$ 有：
    

$$a \equiv b \pmod{\mathfrak{m}_K} \Longrightarrow a^{p^n} \equiv b^{p^n} \pmod{\mathfrak{m}_K^{n+1}} \quad (1.10)$$

> *证明*：二项式定理，并结合 $p \in \mathfrak{a}_1$ 以及 $p \mathfrak{a}_n\subset \mathfrak{a}_{n+1}$ ...

**命题 1.21**：投影 $\mathcal{O}_K \rightarrow k$存在唯一的乘性截面 $s: k \rightarrow \mathcal{O}_K$ 

实际上我们有: 

> **命题 1.42**：设 $A$ 为一个在理想序列 $\mathfrak{a}_1 \supset \mathfrak{a}_2 \supset \cdots$（满足 $\mathfrak{a}_n \mathfrak{a}_m \subset \mathfrak{a}_{n+m}$）定义的拓扑下豪斯多夫且完备的环。假设剩余环 $\overline{K} = A/\mathfrak{a}_1$ 是特征 $p$ 的完美环。则：
> 1. 存在唯一的一个代表元系统 $f: \overline{K} \rightarrow A$ 满足与 $p$ 次幂运算交换：$f(\lambda^p) = f(\lambda)^p$。
> 2. 元素 $a \in A$ 属于 $S = f(\overline{K})$ 的充要条件是：对于所有的 $n \geq 0$，$a$ 都是一个 $p^n$ 次幂。
> 3. 该代表元系统是乘性的，即对所有 $\lambda, \mu \in \overline{K}$，有 $f(\lambda \mu) = f(\lambda) f(\mu)$。
> 4. 如果 $A$ 的特征为 $p$，则该代表元系统也是加性的，即 $f(\lambda + \mu) = f(\lambda) + f(\mu)$。

> **证明**：考虑 $\lambda^{p^{-n}}$ 在 $A$ 中的原像 $x_n$ , 引理保证了 $x_n^{p^n}$ 是柯西列, 从而收敛于 $f(\lambda)$ . $f$ 乘性是显然的。若特征 $p$，利用等式 $(x+y)^{p^n} = x^{p^n} + y^{p^n}$ 得到 (iv) 加性。$\square$

> 注: 一个元素如果能开任意 $p^n$ 次方根, 那么它是乘性代表元...

**注记 1.22**：
    元素 $s(a)$ 称为 $a$ 的**泰希米勒（Teichmüller）代表元**，常记为 $[a]$。
    若 $\text{char}(K) = p$，由于 $(\widehat{a}_n + \widehat{b}_n)^{p^n} = \widehat{a}_n^{p^n} + \widehat{b}_n^{p^n}$，故 $s(a+b) = s(a) + s(b)$。此时 $s: k \rightarrow \mathcal{O}_K$ 是环同构，可以将 $k$ 视为 $\mathcal{O}_K$ 的子域。

**定理 1.23**：设 $\mathcal{O}_K$ 是完备离散赋值环，$k$ 为剩余域，$K$ 为分式域，$\pi_K$ 为一致化参数。若 $\mathcal{O}_K$ 与 $k$ 具有相同的特征，则：

$$\mathcal{O}_K = k[[\pi_K]], \quad K = k((\pi_K))$$

> **引理**：设 $A$ 为局部环，在一组递降理想序列 $\mathfrak{a}_1 \supset \mathfrak{a}_2 \supset \cdots$ 定义的拓扑下Hausdorff且完备，满足 $\mathfrak{a}_n \mathfrak{a}_m \subset \mathfrak{a}_{n+m}$。假设 $\overline{K} = A/\mathfrak{a}_1$ 是一个特征为 0 的域。则 $A$ 包含一个作为域的 $\overline{K}$ 的代表元系统。

> **证明**：
> 1. 下面要反复用到的一个事实是, 在 $\overline{K}$ 中非零, 则在 $A$ 中可逆.
> 2. 因为特征 $0$ 所以 $A$ 包含 $\mathbb{Q}$。根据佐恩引理（Zorn's lemma），在 $A$ 中存在一个极大子域 $S$。设其在 $\overline{K}$ 中的像为 $\overline{S}$。下证 $\overline{S}=\overline{K}$ ：
> 3. 首先证明 $\overline{K}$ 在 $\overline{S}$ 上是代数的：若不然，存在 $\overline{a}$ 在 $\overline{S}$ 上超越, 从而 $a$ 在 $S$ 上超越, 且 $S[a] \cap \mathfrak{a}_1 = 0$。由此推出 $A$ 包含有理函数域 $S(a)$，与 $S$ 的极大性矛盾。
> 4. 从而，任何 $\lambda \in \overline{K}$ 在 $\overline{S}$ 上都有极小多项式 $\overline{f}(X)$。因为特征为 0，$\lambda$ 是 $\overline{f}$ 的单根。
> 5. 设 $f$ 是同构 $S \rightarrow \overline{S}$ 下对应于 $\overline{f}$ 的多项式。根据命题 7 (Hensel引理) ，存在 $x \in A$ 使得 $\overline{x} = \lambda$ 且 $f(x) = 0$。
> 6. 将 $\overline{S}[\lambda]$ 提升到 $A$ 中。由 $S$ 的极大性，必须有 $\lambda \in \overline{S}$，从而证明了 $\overline{K} = \overline{S}$。

**引入 Witt 向量的动机**：
    若 $K$ 是 $p$-adic 域且 $\text{char}(K) = 0$，通常情况下 $s(a+b) \neq s(a) + s(b)$。此时 Witt 向量能够提供非常有用的工具。

> 注: Witt多项式的动机可以如此考虑: 

> 满足命题 1.42 关于拓扑理想序列假设的环称为 **$p$-环**（$p$-ring）。如果一个 $p$-环 $A$ 满足其自带的拓扑理想序列为 $p$-进理想序列 $\mathfrak{a}_n = p^n A$，且 $p$ 在 $A$ 中不是零因子，则称该 $p$-环为**严格的**（strict p-ring）。

> 对两个 $p$ 进展开式的加法

$$\sum \tau(c_n)p^n = \sum \tau(a_n)p^n + \sum \tau(b_n)p^n$$

比较次数，上面的 $p$ 进展开式给出一系列同余式:

$$ \tau(c_0) \equiv \tau(a_0) + \tau(b_0) \pmod p\\\tau(c_0) + \tau(c_1)p \equiv \tau(a_0) + \tau(a_1)p + \tau(b_0) + \tau(b_1)p \pmod{p^2} \\\vdots$$

在 $n=0$ 时容易得到 $c_0 = a_0 + b_0$ . $n=1$ 时则有

$$\tau(c_1) \equiv \frac{\tau(a_0) + \tau(b_0) - \tau(c_0)}{p} + \tau(a_1) + \tau(b_1) \pmod p$$

而我们有

$$\tau(c_0)^p \equiv (\tau(a_0) + \tau(b_0))^p \pmod{p^2}$$

将 $a_0,b_0,c_0$ 换为各自的 $\frac{1}{p}$ 次幂仍然有上式 (模 $p$ 时仍成立) , 从而

$$
\begin{aligned}
c_1 &= a_1 + b_1 + \frac{1}{p}\left( a_0 + b_0 - (a_0^{\frac{1}{p}}+b_0^{\frac{1}{p}})^p \right) \bmod p \\
&= a_1 + b_1 - \sum_{0 < k < p} \frac{1}{p} \binom{p}{k} a_0^{\frac{k}{p}} b_0^{\frac{p-k}{p}} \bmod p
\end{aligned}$$

同时取 $p$ 次幂可以规避掉分式幂. 一般的, 令 $\kappa=A/pA$ , 则可以得到典范的双射

$$\begin{aligned}
 \prod_{n \ge 0} \kappa &\xrightarrow{1:1} A\\(x_n)_{n \ge 0} &\longmapsto \sum_{n=0}^\infty \tau\left(x_n^{p^{-n}}\right) p^n
\end{aligned}$$

现在考虑 $A$ 的环结构如何拉回到 $\prod_{n \ge 0} \kappa$ 上, 相应的环将另外记为 $W(\kappa)$, 以区别于直积. 

> 当然上面求和的推导考虑展开Teichmüller嵌入也行: 令

$$\sum_{n \ge 0} \tau\left(S_n^{p^{-n}}\right) p^n = \sum_{n \ge 0} \tau\left(x_n^{p^{-n}}\right) p^n + \sum_{n \ge 0} \tau\left(y_n^{p^{-n}}\right) p^n$$

模 $pA$ 可知 $S_0 = x_0 + y_0 \in \kappa$. 再考虑 $\pmod{p^2 A}$ 下

$$\tau(x_0 + y_0) + \tau\left(S_1^{p^{-1}}\right) p \equiv \tau(x_0) + \tau(y_0) + \left(\tau\left(x_1^{p^{-1}}\right) + \tau\left(y_1^{p^{-1}}\right)\right) p$$

我们需要确定 $\tau(x_0) + \tau(y_0) - \tau(x_0 + y_0) \bmod p^2 A$ .  

> 回忆

$$\tau(z) \equiv \left[ z^{p^{-n}} \right]^{p^n} \pmod{p^{n+1} A}, \quad z \in \kappa$$

其中 $[\cdots]$ 是任意原像. 从而有

$$\left[x^{1/p} + y^{1/p}\right]^p \equiv \left([x^{1/p}] + [y^{1/p}]\right)^p \pmod{p^2 A}$$

因为 $p \in A$ 非零因子, 从模 $p^2 A$ 的同余式得出

$$
\begin{aligned}
S_1^{p^{-1}} &= x_1^{1/p} + y_1^{1/p} + \frac{1}{p}\left( \left[x_0^{1/p}\right]^p + \left[y_0^{1/p}\right]^p - \left[x_0^{1/p} + y_0^{1/p}\right]^p \right) \bmod pA \\
&= x_1^{1/p} + y_1^{1/p} - \sum_{0 < k < p} \frac{1}{p} \binom{p}{k} \left[x_0^{1/p}\right]^k \left[y_0^{1/p}\right]^{p-k} \bmod pA
\end{aligned}$$

对两边应用 $z \mapsto z^p$ 和 $\left[z^{1/p}\right]^p \equiv z \pmod{pA}$ 可得

$$S_1 = x_1 + y_1 - \sum_{0 < k < p} \frac{1}{p} \binom{p}{k} x_0^k y_0^{p-k}$$

这里环 $A$ 的加法和乘法反映在 $W(\kappa)$ 上, 由一族多项式 $S_n, P_n$ 按分量给出; 此外这族多项式的形式和 $A$ 或 $\kappa$ 无关, 并且可以按递归方式写作整系数多项式. 为了构造 $S_n, P_n$, 我们势必要考虑分量 $x_i$ 取值在一般交换环 $R$ 中的情形...

### 1.2.3 Witt 向量理论

设 $p$ 为素数。令 $X, Y, X_i, Y_i \,(i \in \mathbb{N})$ 为不定元。记 $\underline{X} := (X_0, X_1, \dots)$ 且 $\underline{Y} := (Y_0, Y_1, \dots)$。

**定义 1.24（第 $n$ 个 Witt 多项式）**：

$$W_n(\underline{X}) = W_n(X_0, \dots, X_n) := \sum_{i=0}^n p^i X_i^{p^{n-i}}$$

前几项是

$$W_0=X_0\\W_1=X_0^p+pX_1\\W_n=X_0^{p^n}+pX_1^{p^{n-1}}+\cdots+p^nX_n$$

**注记 1.25**：可以验证对每个 $n$，有 $X_n \in \mathbb{Z}[p^{-1}][W_0, \dots, W_n]$。

> 注: $W_n$ 满足递推关系

$$W_n(X_0, \dots, X_n) = W_{n-1}(X_0^p, \dots, X_{n-1}^p) + p^n X_n$$

给出

$$W_n(\underline{X}) \equiv W_{n-1}(\underline{X}^p) \pmod{p^n}$$

> 注: 这里Witt多项式 $W_n$ 应理解为此前剩余域系数 (提升回特征 $0$ 情况) 幂级数里面前 $n$ 次项. 在上面的例子里

$$a = \sum_{i=0}^\infty \tau\left(x_i^{p^{-i}}\right) p^i \quad (x_i \in \kappa)$$

令 $y_i = \tau\left(x_i^{p^{-n}}\right) \in A$ , 从而

$$\tau\left(x_i^{p^{-i}}\right) = \tau\left(\left(x_i^{p^{-n}}\right)^{p^{n-i}}\right) = \tau\left(x_i^{p^{-n}}\right)^{p^{n-i}} = y_i^{p^{n-i}}$$

因此

$$a \equiv \sum_{i=0}^n y_i^{p^{n-i}} p^i = y_0^{p^n} + p y_1^{p^{n-1}} + \dots + p^n y_n \pmod{p^{n+1}A}$$

**引理 1.26**：
    对于任意多项式 $\Phi(X, Y) \in \mathbb{Z}[X, Y]$，存在唯一的由多项式组成的序列 $\{\Phi_n\}_{n \in \mathbb{N}}$，其中：
    

$$\Phi_n \in \mathbb{Z}[X_0, \dots, X_n; Y_0, \dots, Y_n]$$

    使得对每个 $n \in \mathbb{N}$ 均满足：
    

$$\Phi(W_n(\underline{X}), W_n(\underline{Y})) = W_n(\Phi_0, \dots, \Phi_n) \quad (1.11)$$

    （若将系数环 $\mathbb{Z}$ 替换为 $\mathbb{Z}_p$，该结论依然成立）。

**证明**： 如果题中多项式序列存在, 那么 (把递推关系展开写) 一定是 $\Phi_0(\underline{X}, \underline{Y}) = \Phi(X_0, Y_0)$，并归纳地：

$$\Phi_n(\underline{X}, \underline{Y}) = \frac{1}{p^n} \left[ \Phi\left( \sum_{i=0}^n p^i X_i^{p^{n-i}}, \sum_{i=0}^n p^i Y_i^{p^{n-i}} \right) - \sum_{i=0}^{n-1} p^i \Phi_i(\underline{X}, \underline{Y})^{p^{n-i}} \right]$$

并且这些多项式一定满足上述关系. 所以只需证明这些多项式是整系数. 也就是在模 $p^n$ 意义下

$$\Phi(X_0^{p^n} + \dots + p^n X_n; Y_0^{p^n} + \dots + p^n Y_n)$$

与

$$\Phi_0(\underline{X}, \underline{Y})^{p^n} + p\Phi_1(\underline{X}, \underline{Y})^{p^{n-1}} + \dots + p^{n-1}\Phi_{n-1}(\underline{X}, \underline{Y})^p$$

相同. 

使用归纳法证明之: 假设 $\Phi_1,\cdots,\Phi_n$ 都是整系数. 现在 $\Phi_n$ 是整系数意味着

$$\Phi(X_0^{p^n} + \dots + p^{n-1}X_{n-1}^p; Y_0^{p^n} + \dots + p^{n-1}Y_{n-1}^p)$$

在 $\pmod{p^n}$ 意义下等于

$$\Phi_0(\underline{X}^p, \underline{Y}^p)^{p^{n-1}} + p\Phi_1(\underline{X}^p, \underline{Y}^p)^{p^{n-2}} + \dots + p^{n-1}\Phi_{n-1}(\underline{X}^p, \underline{Y}^p)$$

利用归纳假设 $\Phi_i(\underline{X}, \underline{Y}) \in \mathbb{Z}[\underline{X}, \underline{Y}]$，有 $\Phi_i(\underline{X}^p, \underline{Y}^p) \equiv (\Phi_i(\underline{X}, \underline{Y}))^p \pmod{p}$，因此：

$$p^i \Phi_i(\underline{X}^p, \underline{Y}^p)^{p^{n-1-i}} \equiv p^i \Phi_i(\underline{X}, \underline{Y})^{p^{n-i}} \pmod{p^n}$$

综合以上同余式即可完成引理证明。$\square$ 

**定义 1.27（和、积、标量乘法多项式）**：
定义 $S_n, P_n \in \mathbb{Z}[X_0, \dots, X_n; Y_0, \dots, Y_n]$ 为分别关联于 $\Phi(X, Y) = X + Y$ 和 $XY$ 的多项式，它们归纳地由下式给出：

$$W_n(\underline{X}) + W_n(\underline{Y}) = W_n(S_0, S_1, \dots, S_n) \quad (1.12)$$

$$W_n(\underline{X}) \cdot W_n(\underline{Y}) = W_n(P_0, P_1, \dots, P_n) \quad (1.13)$$

对于 $\lambda \in \mathbb{Z}_p$，定义关联于 $\Phi(X) = \lambda X$ 的多项式 $M(\lambda)_n(X_0, \dots, X_n) \in \mathbb{Z}_p[X_0, \dots, X_n]$，由下式给出：

$$\lambda W_n(\underline{X}) = W_n(M(\lambda)_0, \dots, M(\lambda)_n) \quad (1.14)$$

**显式公式 ($n=0, 1$)**：
**$n=0$ 形式**：

$$S_0 = X_0 + Y_0, \quad P_0 = X_0 Y_0, \quad M(\lambda)_0 = \lambda X_0 \quad (1.15)$$

对 $n=1$ 情况, 这是 $\Phi(W_1(\underline{X}), W_1(\underline{Y}))=W_1(\Phi_0,\Phi_1)$ . 代入下面具体的情况: 

**$S_1$ 的推导**：由 $(X_0 + Y_0)^p + p S_1 = X_0^p + p X_1 + Y_0^p + p Y_1$ 得到：

$$S_1 = X_1 + Y_1 - \sum_{i=1}^{p-1} \frac{1}{p} \binom{p}{i} X_0^i Y_0^{p-i} \quad (1.16)$$

**$P_1$ 的推导**：由 $(X_0^p + p X_1)(Y_0^p + p Y_1) = X_0^p Y_0^p + p P_1$ 得到：
        

$$P_1 = X_1 Y_0^p + X_0^p Y_1 + p X_1 Y_1 \quad (1.17)$$

**$M(\lambda)_1$ 的推导**：由 $\lambda (X_0^p + p X_1) = M(\lambda)_0^p + p M(\lambda)_1$ 得到：
        

$$M(\lambda)_1 = \lambda X_1 + \frac{\lambda^p - \lambda}{p} X_0^p \quad (1.18)$$

**引理 1.28**：赋予 $X_n$ 和 $Y_n$ 权重 $p^n$。则：
1.  $S_n = X_n + Y_n + (\deg  \ge 2 , \text{ 每项权重 } p^n )$。
2.  $P_n = p^n X_n Y_n + (\deg  \ge 3 , \text{每项 } X \text{和 } Y \text{-权重 } p^n )$，且满足 $P_n(X_0, 0, \dots, 0; Y_0, \dots, Y_n) = X_0^{p^n} Y_n$。
3.  $M(\lambda)_n = \lambda X_n + (\deg  \ge 2 , \text{ 每项权重 } p^n)$。
4.  对于 $n \ge 1$，有 $M(p)_n \equiv X_{n-1}^p \pmod{p}$。

**证明**：归纳. 第四步需要 $a\equiv b\pmod{p}$ , 则 $a^{p^m}\equiv b^{p^m}\pmod{p^{m+1}}$ .

**注记 1.29（减法多项式）**：
    设 $S_n^-$ 为关联于 $\Phi(X, Y) = X - Y$ 的整数多项式：
    

$$W_n(\underline{X}) - W_n(\underline{Y}) = W_n(S_0^-, S_1^-, \dots, S_n^-) \quad (1.19)$$

    则 $S_n^- = X_n - Y_n + (\text{次数} \ge 2 \text{ 且具有相同权重 } p^n \text{ 的项})$。此外当 $p > 2$ 时，由 $-W_n(Y) = W_n(-Y)$ 得到：
    

$$S_n^-(\underline{X}, \underline{Y}) = S_n(\underline{X}, -\underline{Y}) \quad (1.20)$$

### 1.2.3.1 Witt 向量环及其代数结构

设 $A$ 是交换环。对 $n \ge 1$，将集合 $W_n(A) = A^n$ 赋予如下定义的运算：
对于 $a = (a_0, \dots, a_{n-1}), b = (b_0, \dots, b_{n-1}) \in W_n(A)$：

$$a+b := (s_0, s_1, \dots, s_{n-1}), \quad a \cdot b := (p_0, p_1, \dots, p_{n-1}) \quad (1.21)$$

其中 $s_i = S_i(a_0, \dots, a_i; b_0, \dots, b_i)$ 且 $p_i = P_i(a_0, \dots, a_i; b_0, \dots, b_i)$。

**幻影分量（Ghost components）**：对于 $a \in W_n(A)$，定义其幻影分量 $w_i = W_i(a)$ 为：

$$w_i = W_i(a) = a_0^{p^i} + p a_1^{p^{i-1}} + \dots + p^i a_i \quad (1.22)$$

其满足：

$$w_i(a+b) = w_i(a) + w_i(b) \quad \text{且} \quad w_i(ab) = w_i(a)w_i(b)$$

**减法与负元**：令 $s_i^- = S_i^-(a_0, \dots, a_i; b_0, \dots, b_i)$ 且 $a-b = (s_0^-, \dots, s_{n-1}^-)$ ，负元为 $-a = 0-a \in W_n(A)$。幽灵分量满足：

$$w_i(a-b) = w_i(a) - w_i(b) \quad \text{且} \quad w_i(-a) = -w_i(a)$$

**定义 1.30（幽灵映射/Ghost map）**：

$$\rho : W_n(A) \longrightarrow A^n, \quad (a_0, \dots, a_{n-1}) \mapsto (w_0, \dots, w_{n-1})$$

    幽灵映射满足 $\rho(a+b) = \rho(a) + \rho(b)$ 且 $\rho(a \cdot b) = \rho(a) \cdot \rho(b)$。

**命题 1.31**：$(W_n(A); +, \cdot)$ 是一个以 $0 = (0, \dots, 0)$ 为加法单位元、 $1 = (1, 0, \dots, 0)$ 为乘法单位元的交换环，且 $\rho$ 是交换环同态。若 $\lambda \in \mathbb{Z}$（或当 $A$ 为 $\mathbb{Z}_p$-模时 $\lambda \in \mathbb{Z}_p$），定义标量乘法为：

$$\lambda \cdot a := (M_i(\lambda)(a_0, \dots, a_i))_{0 \le i < n}$$

则 $\rho$ 保持 $\mathbb{Z}$-模（或 $\mathbb{Z}_p$-模）结构。

**证明**：
显然 $\rho$ 保持 $W_n(A)$ 的运算.

1.  由于 $X_n \in \mathbb{Z}[p^{-1}][W_0, \dots, W_n]$, 若 $p$ 在 $A$ 中可逆，则 $\rho$ 是双射，从而 $W_n(A) \cong A^n$ 。
2.  若 $A$ 无 $p$-扭元，利用单射 $A \hookrightarrow A[\frac{1}{p}]$，可将 $W_n(A)$ 嵌入 $W_n(A[\frac{1}{p}])$ 。由于 $W_n(A)$ 对减法封闭，得知 $W_n(A)$ 是 $W_n(A[\frac{1}{p}])$ 的子环。
3.  一般情况下，将 $A$ 写为 $R/I$ 的形式，其中 $R$ 无 $p$-torsion。此时 $W_n(R)$ 是环，而 $W_n(I) = \{(a_0, \dots, a_{n-1}) \mid a_i \in I\}$ 是 $W_n(R)$ 的理想。 $W_n(A)$ 是商环 $W_n(R) / W_n(I)$，所以也是一个环。

**无限长度的 Witt 向量环**：考虑限制映射 $\text{res}: W_{n+1}(A) \longrightarrow W_n(A), \ (a_0, \dots, a_n) \mapsto (a_0, \dots, a_{n-1})$，这是满环同构。定义无限长度的 Witt 向量环为：
    

$$W(A) = \varprojlim_n W_n(A) \quad (1.24)$$

**定义 1.32（Witt 向量环）**：$W_n(A)$ 称为 $A$ 的**长度为 $n$ 的 Witt 向量环**。$W(A)$ 称为 $A$ 的**（无限长度的）Witt 向量环**。其作为集合同构于 $A^{\mathbb{N}}$。加法和乘法定义为：

$$a+b := (s_0, s_1, \dots, s_n, \dots), \quad a \cdot b := (p_0, p_1, \dots, p_n, \dots) \quad (1.25)$$

定义幽灵映射：

$$\rho: W(A) \longrightarrow A^{\mathbb{N}}, \quad (a_0, a_1, \dots) \mapsto (w_0, w_1, \dots) \quad (1.26)$$

**$W_n$ 和 $W$ 的函子性**：若 $h : A \rightarrow B$ 为环同态，则诱导环同态 $W_n(h): W_n(A) \rightarrow W_n(B)$ 及 $W(h): W(A) \rightarrow W(B)$ , 把 $(a_i)$ 打到 $(h(a_i))$ . 此外, 它们与幽灵映射 $\rho$ 交换。

**注记 1.33**：$W_n$ 可由 $\mathbb{Z}$ 上的仿射群概形 $\mathbf{W}_n = \text{Spec}(B)$ 表示，其中 $B = \mathbb{Z}[X_0, \dots, X_{n-1}]$，其comultiplication $m^*: B \rightarrow B \otimes_{\mathbb{Z}} B$ 由下式给出：

$$X_i \mapsto X_i \otimes 1, \quad Y_i \mapsto 1 \otimes X_i, \quad m^* X_i = S_i(X_0, \dots, X_i; Y_0, \dots, Y_i)$$

**注记 1.34**：若 $A$ 的特征为 $p$（被 $p$ 消灭），则：
    

$$w_i: W_n(A) \rightarrow A, \quad (a_0, \dots, a_{n-1}) \mapsto a_0^{p^i}$$

    此时 $\rho$ 给出为：
    

$$\rho: W_n(A) \rightarrow A^n, \quad (a_0, \dots, a_{n-1}) \mapsto (a_0, a_0^p, \dots, a_0^{p^{n-1}})$$

    在这种情况下，$\rho$ 以及 $W(A)\to A^{\mathbb{N}}$ 均不是同构。

### 1.2.3.2 移位、泰希米勒与 Frobenius 映射

**Definition 1.35**：设 $A$ 为交换环, 定义**移位映射（Verschiebung）** $V$：

$$V: W(A) \longrightarrow W(A), \quad (a_0, \dots, a_n, \dots) \mapsto (0, a_0, \dots, a_n, \dots) \quad (1.27)\\V: W_n(A) \longrightarrow W_{n+1}(A), \quad (a_0, \dots, a_{n-1}) \mapsto (0, a_0, \dots, a_{n-1}) \quad (1.28)$$

**Teichmüller映射** $s$：

$$s: A \longrightarrow W(A), \quad x \mapsto [x] = (x, 0, 0, \dots)$$

若 $\text{char } A = p$，**Frobenius 映射** $\varphi$ 是环同态：

$$\varphi: W(A) \longrightarrow W(A), \quad (a_0, a_1, \dots) \mapsto (a_0^p, a_1^p, \dots)$$

（在 $A = k$ 为完美域时，该映射常记为 $\sigma$）。

**命题 1.36**：映射 $V$ 和 $s$ 与环同态交换。此外满足：
1.  移位映射 $V$ 是加法映射，且如下序列是正合的：

$$0 \longrightarrow W_k(A) \stackrel{ V^r}{\longrightarrow} W_{k+r}(A) \longrightarrow W_r(A) \longrightarrow 0 \quad (1.29)$$

2.  Teichmüller映射 $s$ 是 $W(A) \rightarrow A$ 的乘性截面，且有：

$$(a_0, a_1, \dots) = \sum_{n=0}^\infty  V^n([a_n]) \quad (1.30)\\ [x] \cdot (a_0, a_1, \dots) = (x a_0, x^p a_1, \dots, x^{p^n} a_n, \dots) \quad (1.31)$$

**证明**：显然它们和环同态交换. 因此我们可以像前面一样把情况reduce到 $p$ 在 $A$ 中可逆的情形证明 ( $R/I$ 去掉 $p$-torsion, 并且考虑 $A[\frac{1}{p}]$ , 因为群同态和 $V$ 交换所以...), 此时因为比如说 $V$ 在同构 $W(A)\to A^{\mathbb{N}}$ 下, 在右边也是移位作用, 那么显然就是加法同态了.  类似的, 乘法这个 $[x]$ 在 $A^{\mathbb{N}}$ 中成为 $(x,x^p,x^{p^2},\cdots)$ , 然后逐分量相乘, 然后再展开幻影分量的具体式子

$$\sum p^{i}z_i^{n-i}=x^{p^n}\sum p^{i}a_i^{n-i}=\sum p^i(x^{p^i}a_i)^{n-i}$$

解出... $\square$

> 注: 这里Teichmüller映射应当理解为之前的Teichmüller提升

> 另一种证明是: 比如说以 $V$ 为例子: 我们直接把首项为 $0$ 的向量代入加法多项式中：

$$\mathbf{V}(X) + \mathbf{V}(Y) = \big(S_0(0; 0), S_1(0, X_0; 0, Y_0), \dots, S_n(0, X_0, \dots; 0, Y_0, \dots), \dots\big)$$

我们要看多项式 $S_n(0, X_0, \dots, X_{n-1}; 0, Y_0, \dots, Y_{n-1})$ 在首位填入 $0$ 后会发生什么。根据定义加法多项式的递推关系：

$$S_0^{p^n} + p S_1^{p^{n-1}} + \dots + p^n S_n = w_n(0, X_0, \dots) + w_n(0, Y_0, \dots)$$

由于第一项输入为 $0$，右侧的幻影分量计算式会发生整体右移：

$$w_n(0, X_0, \dots, X_{n-1}) = 0 + p X_0^{p^{n-1}} + \dots + p^n X_{n-1} = p w_{n-1}(X_0, \dots, X_{n-1})$$

同理，左边因为 $S_0 = 0$，也同样整体右移缩减了一位。等式两边同时消去一个 $p$（在通用多项式环中，消去非零因子 $p$ 是合法且唯一的）：

$$w_{n-1}(S_1, \dots, S_n) = w_{n-1}(X_0, \dots, X_{n-1}) + w_{n-1}(Y_0, \dots, Y_{n-1})$$

**引理 1.37**：若 $A$ 的特征为 $p$，则在 Witt 环 $W(A)$ 上有 $V \varphi = \varphi  V = p$。

**证明**：根据引理 1.28(4)，$p(a_0, a_1, \dots) = (0, a_0^p, a_1^p, \dots)$，由此可得 $V\varphi = \varphi V = p$。

**完美环**：若交换特征 $p$ 环 $A$ 的自同态 $x \mapsto x^p$ 是自同构，则称 $A$ 为完美环。

**命题 1.38**：若 $A$ 是完美环，则 $W(A)$ 中的每个元素可以用如下两种形式写出：

$$(a_0, a_1, \dots) = \sum_{n=0}^{+\infty} p^n [a_n^{p^{-n}}] \quad (1.32)$$

因此有：
1.  投影 $W(A) \rightarrow W_n(A)$ 诱导了同构 $W(A) / p^n W(A) \cong W_n(A)$。特别地，$W(A)/pW(A) \cong A$。
2.  $W(A)$ 关于 $p$-adic 拓扑是完备且分离的，即：

$$W(A) = \varprojlim_n W(A) / p^n W(A)$$

**例子 1.39**：通过将 $x \in \mathbb{F}_p$ 的泰希米勒代表元 $[x]$ 进行识别，有 $W(\mathbb{F}_p) = \mathbb{Z}_p$。

### 1.2.3 混合特征完备离散赋值环的结构

**定义 1.40（$p$-环与严格 $p$-环）**：拓扑环 $A$ 被称为一个 **$p$-环（$p$-ring）**，若存在一个递减的理想过滤 $\mathfrak{a}_1 \supset \mathfrak{a}_2 \supset \dots$ 满足 $\mathfrak{a}_m \cdot \mathfrak{a}_n \subset \mathfrak{a}_{m+n}$，且：
1.  $A/\mathfrak{a}_1$ 是特征为 $p$ 的完美环；
2.  $A \cong \varprojlim_n A/\mathfrak{a}_n$。
    
若进一步满足 $p$ 在 $A$ 中不是零因子，且过滤理想满足 $\mathfrak{a}_n = p^n A$，则称 $A$ 是一个**严格 $p$-环（strict $p$-ring）**。

**例子 1.41**：设 $k$ 是特征为 $p$ 的完美环。
1.  若 $k$ 是局部域 $K$ 的剩余域，则其整数环 $\mathcal{O}_K$ 伴随过滤 $\{\mathfrak{m}_K^n\}$ 是一个 $p$-环。
2.  一般地，Witt 环 $W(k)$ 是以 $k$ 为剩余环的严格 $p$-环。

**$p$-环元素的级数表示**：利用命题 1.42 (Teichmüller提升) ，设 $A$ 是一个 $p$-环，其乘性代表元系统为 $f : k = A/\mathfrak{a}_1 \to A$。对于 $A/\mathfrak{a}_1$ 中的任意序列 $(\alpha_i)$，级数：

$$\sum_{i=0}^\infty f(\alpha_i) p^i \quad (1.33)$$

在 $A$ 中收敛。
    
若 $A$ 是一个**严格 $p$-环**，则 $A$ 中的任意元素 $a$ 均可唯一地表示为 (1.33) 形式的级数。此时若设 $\beta_i = \alpha_i^{p^i}$，则 $a$ 可以表示为：

$$a = \sum_{i=0}^\infty f(\beta_i^{p^{-i}}) p^i$$

称 $\{\beta_i\}$ 为 $a$ 的**坐标（coordinates）**。

**例子 1.44**：设 $\{X_\varpi\}$ 是一族不定元，令 $S = \bigcup_{n \ge 0} \mathbb{Z}[X_\varpi^{p^{-n}}]$。设 $\widehat{S} = \widehat{\mathbb{Z}[X_\varpi^{p^{-\infty}}]}$ 为 $S$ 关于 $p$-进过滤 $\{p^n S\}_{n \ge 0}$ 的完备化。则 $\widehat{S}$ 是一个严格 $p$-环，其剩余环 $\widehat{S} / p\widehat{S} = \mathbb{F}_p[X_\varpi^{p^{-\infty}}]$ 是特征为 $p$ 的完美环。因为 $X_\varpi$ 在 $\widehat{S}$ 中可以任意开 $p^n$ 次方，所以是乘性代表元.

**坐标的代数运算**：假设 $X_0, \dots, X_n, \dots$ 和 $Y_0, \dots, Y_n, \dots$ 是环 $\mathbb{Z}[X_i^{p^{-\infty}}, Y_i^{p^{-\infty}}]$ 中的不定元。考虑以下两个元素：
    

$$x = \sum_{i=0}^\infty X_i p^i, \quad y = \sum_{i=0}^\infty Y_i p^i$$

    若 $*$ 代表 $+$, $\times$, 或 $-$ 运算，则 $x * y$ 同样是该环中的元素，且可以唯一写成如下形式：
    

$$x * y = \sum_{i=0}^\infty f(Q_i^*) p^i \quad \text{其中 } Q_i^* \in \mathbb{F}_p[X_i^{p^{-\infty}}, Y_i^{p^{-\infty}}]$$

**命题 1.45**：设 $A$ 是剩余环为 $k$ 的 $p$-环，其乘性代表元系统为 $f : k \to A$。假设 $\{\alpha_i\}$ 和 $\{\beta_i\}$ 是 $k$ 中的两个序列，则：

$$\left( \sum_{i=0}^\infty f(\alpha_i) p^i \right) * \left( \sum_{i=0}^\infty f(\beta_i) p^i \right) = \sum_{i=0}^\infty f(\gamma_i) p^i$$

其中 $\gamma_i = Q_i^*(\alpha_0, \alpha_1, \dots; \beta_0, \beta_1, \dots)$。

**证明**：
1.  存在一个显易的环同态 $h: \mathbb{Z}[X_i^{p^{-\infty}}, Y_i^{p^{-\infty}}] \to A$，其将 $X_i$ 映射为 $f(\alpha_i)$，将 $Y_i$ 映射为 $f(\beta_i)$。
2.  利用连续性，该同态可以延拓到其完备环上：
    

$$h: \widehat{\mathbb{Z}[X_i^{p^{-\infty}}, Y_i^{p^{-\infty}}]} \to A$$

    它将 $x = \sum X_i p^i$ 映射为 $\alpha = \sum f(\alpha_i) p^i$，将 $y = \sum Y_i p^i$ 映射为 $\beta = \sum f(\beta_i) p^i$。
3.  同态 $h$ 在对应的剩余环上诱导了同态 $\bar{h} : \mathbb{F}_p[X_i^{p^{-\infty}}, Y_i^{p^{-\infty}}] \to k$，其将 $X_i$ 送至 $\alpha_i$，将 $Y_i$ 送至 $\beta_i$。
4.  因为 $h$ 与乘性代表元交换 ( $hf=f\overline{h}$ , 因为连续性所以和Teichmüller提升的极限定义交换 ) ，可得

$$\begin{aligned}
 &\sum f(\alpha_i) p^i * \sum f(\beta_i) p^i = h(x) * h(y)\\&= h(x * y) = \sum h(f(Q_i^*)) p^i = \sum f(\bar{h}(Q_i^*)) p^i
\end{aligned}$$

由于 $\bar{h}(Q_i^*)$ 正好等于 $\gamma_i$，这就完成了命题的证明。

**定理 1.46**：设 $A$ 和 $A'$ 是两个分别以 $k$ 和 $k'$ 为剩余环的 $p$-环，并且假设 $A$ 是严格的。对于剩余环间的任意同态 $\bar{g} : k \to k'$，存在唯一的同态 $g: A \to A'$ 使得以下图表交换：

$$\begin{array}{ccc} A & \xrightarrow{g} & A' \\ \downarrow & & \downarrow \\ k & \xrightarrow{\bar{g}} & k' \end{array}$$

**推论**：
1.  两个具有相同剩余环的严格 $p$-环是典范同构（canonically isomorphic）的。
2.  对于任意特征为 $p$ 的完美环 $k$，$W(k)$ 是以 $k$ 为剩余环的唯一严格 $p$-环（在唯一典范同构的意义下）。

**证明**：
1.  对于 $a = \sum_{i=0}^\infty f_A(\alpha_i) p^i \in A$，若 $g$ 存在，由于 $g$ 保持 $p$ 且与代表元交换，必须有：

$$g(a) = \sum_{i=0}^\infty g(f_A(\alpha_i)) \cdot p^i = \sum_{i=0}^\infty f_{A'}(\bar{g}(\alpha_i)) \cdot p^i$$

这证明了 $g$ 的唯一性。
2.  另一方面，由命题 1.45，如此定义的映射 $g$ 的确是一个环同态，由此存在性也得证。

**推论 1.47**：若 $k$ 和 $k'$ 是特征为 $p$ 的两个完美环，则：

$$\text{Hom}(k, k') = \text{Hom}(W(k), W(k'))$$

**定义 1.48（绝对分歧指数）**：设 $A$ 是一个完备DVR，剩余域为 $k$。假设 $A$ 的特征为 0，而 $k$ 的特征为 $p > 0$。整数 $e = e_A := v(p)$ 称为 $A$ 的**绝对分歧指数（absolute ramification index）**。若 $e = 1$（即 $p$ 是 $A$ 的一个局部一致化参数），则称 $A$ 是**绝对非分歧的（absolutely unramified）**。

> 注: 单射 $\mathbb{Z} \rightarrow A$ 可以延拓为 $p$-进整数环 $\mathbb{Z}_p$ 到 $A$ 的单射。当剩余域 $k$ 是 $q = p^f$ 个元素的有限域时，由于可以写成幂级数形式 ( 线性空间同构 ), $A$ 是一个秩为 $n = ef$ 的自由 $\mathbb{Z}_p$-模，且 $K$ 是 $\mathbb{Q}_p$ 的 $n$ 次扩张, 从而 $e$ 成为 $K/\mathbb{Q}_p$ 的分歧指数。

**定理 1.49**：
1.  对于任意特征为 $p$ 的完美域 $k$，$W(k)$ 是唯一的、绝对非分歧的、且剩余域为 $k$ 的特征 0 完备DVR（在唯一同构意义下）。
2.  设 $A$ 是特征 0 的完备DVR，其剩余域 $k$ 为特征 $p > 0$ 的完美域，设 $e$ 是其绝对分歧指数。则存在唯一的同态 $\iota : W(k) \to A$ 使得以下图表交换：

$$\begin{array}{ccc} W(k) & \xrightarrow{\iota} & A \\ & \searrow & \downarrow \\ & & k \end{array}$$

此外，$\iota$ 是单射，且 $A$ 是一个秩为 $e$ 的自由 $W(k)$-模。

**证明**：
1.  结论(1)是定理 1.46 的特例。
2.  对于结论(2)，因为 $A$ 伴随其过滤是一个 $p$-环，$\iota$ 的存在性与唯一性由定理 1.46 直接给出。由于 $A$ 的特征为 0，$\iota$ 必定是单射。
3.  若 $\pi_A$ 是 $A$ 的一致化参数，则 $A$ 中的每个元素 $a$ 可以唯一地表示为 $a = \sum_{i=0}^\infty f(\alpha_i) \pi_A^i \ (\alpha_i \in k)$。
4.  利用关系式 $\pi_A^e = p \times (\text{单位})$ 代替，可以将 $a$ 唯一地写为：

$$a = \sum_{j=0}^{e-1} \left( \sum_{i=0}^\infty f(\alpha_{ij}) p^i \right) \pi_A^j, \quad \alpha_{ij} \in k$$

因此，$\{1, \pi_A, \dots, \pi_A^{e-1}\}$ 构成了 $A$ 作为 $W(k)$-模的一组基。

### 1.2.4 Cohen 环

若剩余域 $k$ 不是完美的，情况会更加复杂，此时需要借助 Cohen 环。

**定理 1.50**：设 $(A, \varpi A, k = A/\varpi A)$ 是一个DVR，$K$ 是 $k$ 的域扩张，则存在包含 $A$ 的DVR $(B, \varpi B, K)$ ( 注意极大理想仍由 $\varpi$ 生成) 。

**定理 1.51**：设 $(A, \mathfrak{m}_A, k_A)$ 是完备局部环，且 $(R, \mathfrak{m}_R, k_R)$ 是特征 0 的绝对非分歧DVR（即 $\mathfrak{m}_R = p R$）。则对于任何域同态 $h : k_R \to k_A$，都存在一个局部同态 $g: R \to A$ 使得其在剩余域上诱导的映射为 $h$。

**注记 1.52**：定理 1.51 是命题 1.46 的推广，但在非完美域情况下诱导 $h$ 的 $g$ 可能不唯一。例如 $k = \mathbb{F}_p(x)$，$A = \mathbb{Z}_p(x)$ ( $\mathbb{Z}_p[x]$ 关于素理想 $p\mathbb{Z}p[x]$ 的局部环) ，则对任意 $\alpha \in p\mathbb{Z}_p$，映射 $x \mapsto x+\alpha$ 都在剩余域上诱导恒等映射。

将定理 1.50 应用于 $A = \mathbb{Z}_p$，对于任意给定的特征 $p$ 的域 $K$，都存在一个特征 0 的绝对非分歧完备DVR $R$，其剩余域为 $K$。由定理 1.51，该环 $R$ 在同构意义下是唯一的 ( 那个局部同态此时必然是同构, 不过不典范 ) 。

> 注: 如果 $A$ 非完美环, 则 $W(A)$ 未必是DVR. 实际上如果是DVR, 应该如命题1.38一样有 $W(A)/p^nW(A)≅W_n​(A)$ , 但是 $p^nW(A)/p^{n+1}W(A)$ 中元素实际上相当于 $k^{p^n}$ ( 乘 $p^n$ 将 $z_0$ 打到第 $n$ 个位置的 $z_0^{p^n}$ ) , 因此非DVR. 对域的情形, 将 $W(A)$ 变小一些可以使得它重新成为DVR. Cohen环构造的直观是我们限制第 $j$ 个分量只在 $k^{p^j}$ 中取值, 从而有 $\mathcal{C}_{n+1}(k)/p^r\mathcal{C}_{n+1}(k)\cong \mathcal{C}_r(k)$  .

**定义 1.53（Cohen 环）**：
    设 $k$ 是特征为 $p > 0$ 的域。**Cohen 环 $\mathcal{C}(k)$** 是指特征为 0 且以 $k$ 为剩余域的唯一（在同构意义下）绝对非分歧完备DVR。

**Cohen 环 $\mathcal{C}(k)$ 的显式构造**：

1. 我们希望研究 $S=\{ (z_0,\cdots,z_n):z_r\in {k^{p^r}} \}$ . 

2.  **$p$-基（$p$-basis）的定义**：域 $k$ 的一个子集 $B$ 被称为 $k$ 的一个 $p$-基，若：
(i) 对于 $B$ 中的任意 $r$ 个不同元素 $b_1, \dots, b_r$，有 $[k^p(b_1, \dots, b_r) : k^p] = p^r$；
(ii) $k = k^p(B)$。
（若 $k$ 是完美的，则其 $p$-基为空集；若非完美，则可利用佐恩引理找到极大满条件(i)的集合，它一定满足(ii)，因此是 $p$-基。）
3.  固定 $k$ 的一个 $p$-基 $B$。对任意 $n > 0$，有 $k = k^{p^n}(B)$，且 $B^{p^{-n}} = \{b^{p^{-n}} \mid b \in B\}$ 是 $k^{p^{-n}}$ 的 $p$-基。 ( 取定代数闭包, 或者典范的取 $k\to k\to \cdots$ , 每个都是 $p$ 次方映射的direct lim可以得到 $k^{p^{-\infty}}$ )
4.  令 $I_n = \bigoplus_B \{0, \dots, p^n - 1\}$，并定义集合：

$$T_n = \left\{ b^\alpha = \prod_{b\in B} b^{\alpha_b} \ \middle|\ \alpha = (\alpha_b)_{b\in B} \in I_n \right\}$$

有 $T_n$ 生成 $k$（作为 $k^{p^n}$-向量空间）。一般地，$T_n^{p^m}$ 是 $k^{p^m}$ 在 $k^{p^{n+m}}$ 上的基。
5.  定义子环：

$$\mathcal{C}_{n+1}(k) := W_{n+1}(k^{p^n}) \text{ 和 } [b] \ (b \in B) \text{ 所生成的 } W_{n+1}(k) \text{ 的子环}$$

6.  每一个元素 $x \in W_{n+1}(k)$ 都可以写成泰希米勒代表元与移位映射的形式：

$$x = [x_0] + \mathbf{V}([x_1]) + \dots + \mathbf{V}^n([x_n])$$

并且满足公式：$[y]\mathbf{V}^r(x) = \mathbf{V}^r([y^{p^r}]x)$。
7.  $\mathcal{C}_{n+1}(k)$ 实际上是由 $\{ \mathbf{V}^r([(b^\alpha)^{p^r} x]) \mid b^\alpha \in T_{n-r}, x \in k^{p^n}, r=0, \dots, n \}$ 生成的加法群 (并且这就是 $S$ )。这里 $\mathbf{V}^r([(b^\alpha)^{p^r} x])$ 就是一个第 $r$ 位的, 分量取值 $k^{p^r}$ 中的元素. 
8.  利用 $\mathbf{V}\varphi = p$，有 $V^r(\varphi^r([x])) \equiv p^r [x] \pmod{\mathbf{V}^{r+1}}$。此时 $\mathbf{V}^r([(b^\alpha)^{p^r} x])=p^r[(b^\alpha)x^{p^{-r}}]$ .
9.  令 $\mathcal{U}_r$ 为 $\mathcal{C}_{n+1}(k)$ 中的理想：

$$\mathcal{U}_r = \mathcal{C}_{n+1}(k) \cap \mathbf{V}^r(W_{n+1}(k))$$

其作为加法群由 $\{ \mathbf{V}^m([(b^\alpha)^{p^m} x]) \mid b^\alpha \in T_{n-m}, x \in k^{p^n}, m \ge r \}$ 生成。由此可知 $\mathcal{C}_{n+1}(k)/\mathcal{U}_1 \simeq k$，且乘法映射：

$$p^r : \mathcal{C}_{n+1}(k)/\mathcal{U}_1 \longrightarrow \mathcal{U}_r/\mathcal{U}_{r+1}$$

在 $r \le n$ 时是同构。递减归纳可得 $\mathcal{U}_r = p^r \mathcal{C}_{n+1}(k)$。并且当 $x \notin \mathcal{U}_1$ 时，可以用几何级数形式验证其可逆。

**命题 1.54**：环 $\mathcal{C}_{n+1}(k)$ 是一个局部环，其极大理想由 $p$ 生成，剩余域同构于 $k$。对任意 $r \le n$，乘以 $p^r$ 诱导了 $\mathcal{C}_{n+1}(k)/p\mathcal{C}_{n+1}(k)$ 与 $p^r \mathcal{C}_{n+1}(k)/p^{r+1}\mathcal{C}_{n+1}(k)$ 的同构，且有 $p^{n+1}\mathcal{C}_{n+1}(k) = 0$。

**引理 1.55**：规范投影 $\text{pr} : W_{n+1}(k) \to W_n(k)$ 限制在子环上，诱导了满同态 $\vartheta : \mathcal{C}_{n+1}(k) \to \mathcal{C}_n(k)$。

**证明**：
1.  根据定义，$\text{pr}$ 映射下 $\mathcal{C}_{n+1}(k)$ 的像是由 $W_n(k^{p^n})$ 和 $\{[b] \mid b \in B\}$ 生成的子环。由于此环包含在由 $W_n(k^{p^{n-1}})$ 和 $\{[b] \mid b \in B\}$ 生成的 $\mathcal{C}_n(k)$ 中，映射 $\vartheta$ 是良定义的。
2.  要证其为满同态，只需证明其伴随的分次映射（associated graded map）是满的。
3.  对于 $r < n$，有如下交换图表：

$$\begin{array}{ccc} p^r \mathcal{C}_{n+1}(k) / p^{r+1} \mathcal{C}_{n+1}(k) & \xrightarrow{\text{gr } \vartheta} & p^r \mathcal{C}_n(k) / p^{r+1} \mathcal{C}_n(k) \\ j \downarrow & & \downarrow j' \\ \mathbf{V}^r W_{n+1}(k) / \mathbf{V}^{r+1} W_{n+1}(k) \simeq k & \xrightarrow{\text{gr pr} = \text{Id}} & \mathbf{V}^r W_n(k) / \mathbf{V}^{r+1} W_n(k) \simeq k \end{array}$$

其中包含映射 $j$ 和 $j'$ 分别将分次项等同于 $k^{p^r}$。因此对于 $r < n$，$\text{gr } \vartheta$ 是满的。
4.  对于 $r = n$，由于 $p^n \mathcal{C}_n(k) = 0$，分次映射也是满的。因而 $\vartheta$ 是满同态。

**定理 1.56**：环 $\varprojlim_n \mathcal{C}_n(k)$ 即为 $k$ 的 Cohen 环 $\mathcal{C}(k)$。

**注记 1.57**：
    1.  在构造上，$\mathcal{C}(k)$ 可视为 $W(k)$ 的子环；此外 $\mathcal{C}(k)$ 包含 $W(k_0)$，其中 $k_0 = \bigcap_{n \in \mathbb{N}} k^{p^n}$ 是 $k$ 的最大完美子域。
    2.  因为 $\mathcal{C}(k)$ 包含代表元 $[b] \ (b \in B)$，它也包含所有的 $[b^\alpha]$ 和 $[b^{-\alpha}]$ （对 $n \in \mathbb{N}, \alpha \in I_n$）。
