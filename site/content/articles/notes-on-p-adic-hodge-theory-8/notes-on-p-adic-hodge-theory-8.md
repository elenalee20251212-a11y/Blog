---
title: Notes on p-adic Hodge Theory 8
date: 2026-07-27T10:45:16.000Z
tags: null
articleId: notes-on-p-adic-hodge-theory-8
category: mathematics/number-theory/p-adic-hodge-theory
order: 8
---


这篇PDF主要讨论了晶体周期环 $B_{\text{cris}}$ 的定义及其基本性质（第153页至第162页），详细内容及相关的公式、引理、命题和证明步骤整理如下。

---

### 7.1 晶体周期环 $B_{\text{cris}}$ (The ring of crystalline periods $B_{\text{cris}}$)

#### 7.1.1 $B_{\text{cris}}$ 的定义 (Definition of $B_{\text{cris}}$)

首先回忆 $\theta$ 映射 ( $\theta(x) = \sum_{n=0}^{\infty} p^n x_n^{(n)}$ ) 对应的交换图表：

```tikz {embedFontCss=true}
\begin{tikzcd}
W(R) \arrow[r, "\theta"] \arrow[d, hook] & \mathcal{O}_C \arrow[d, hook] \\
W(R)[\frac{1}{p}] \arrow[r, "\theta"] & C
\end{tikzcd}
```
已知 $\text{Ker } \theta = (\xi)$，其中 $\xi = [\varpi] + p = (\varpi, 1, 0, \dots)$，且 $\varpi \in R$ 满足 $\varpi^{(0)} = -p$。

**定义 7.1**：模 $A_{\text{cris}}^0$ 定义为 $W(R)$ 关于 $\text{Ker } \theta$ 的**divided power envelope**，即通过对所有的 $a \in \text{Ker } \theta$ 和 $n \in \mathbb{N}$ , 添加元素 $\gamma_n(a) := \frac{a^n}{n!}$ 所得到的结构。

根据定义，$A_{\text{cris}}^0$ 是 $W(R)[\frac{1}{p}]$ 中由 $\gamma_n(\xi) = \frac{\xi^n}{n!}$ ($n \in \mathbb{N}$) 生成的子 $W(R)$-模，即：$$A_{\text{cris}}^0 = \left\{ \sum_{n=0}^N a_n\gamma_n(\xi),\ N < +\infty,\ a_n \in W(R) \right\} \subset W(R)\left[\frac{1}{p}\right]. \quad (7.1)$$此外，它具有环结构，因为：$$\gamma_m(\xi) \cdot \gamma_n(\xi) = \binom{m+n}{n} \frac{\xi^{m+n}}{(m+n)!} = \binom{m+n}{n} \gamma_{m+n}(\xi). \quad (7.2)$$注意到 $\gamma_n(\xi) \in W(R)[\xi/p]$，因而 $A_{\text{cris}}^0$ 是 $W(R)[\xi/p]$ 的子环。$W(R)[\xi/p]$ 关于 $\text{Ker } \theta$ 的完备化为 $W(R)[[\xi/p]]$（即 $\xi/p$ 在 $W(R)$ 上的幂级数环），它是 $B_{\text{dR}}^+$ 的子环。

> 这里是完备化的一般性质. 对交换环 $A$ 和 $A$ 上元素 $x$ , $A[x]$ ( 不是多项式环 ) 的 $(x)$-adic完备化是 $A[[x]]$ ( 不是形式幂级数环 ) . 实际上 $(x)$-adic拓扑下 $A[x]$ 任何柯西列的差分是可求和的...这里代入 $A=W(R)[\xi/p]$ , 而此时 $\ker \theta=(\frac{\xi}{p})$ ...

> 注: 在上面的这种记号下,  $B_{\text{dR}}^+=W(R)[\frac{1}{p}][[\xi]]$ ; 当然作为和剩余域等特征的完备DVR, 有非典范的同构 $B_{\text{dR}}^+\cong C[[T]]$ , 右边是形式幂级数环, 这个同构来自于非典范的选取一个截面 $s:C\to B_{\text{dR}}^+$ , 并且将 $\xi\mapsto T$ . 这个同构下 $W(R)[1/p]\hookrightarrow C[[T]]$ 的嵌入依赖通过 $s$ 把 $s:C\to B_{\text{dR}}^+$ 写成幂级数的方法, 但是常数项上这个嵌入永远是 $\theta$ .

**引理 7.2**：环 $W(R)[[\xi/p]]$ 在 $p$-进拓扑下是分离且完备的，即自然映射$$W(R)[[\xi/p]] \longrightarrow \varprojlim_n W(R)[[\xi/p]] / p^n W(R)[[\xi/p]]$$是同构。

> 回忆 $R$ 是特征 $p$ 的完美环, 从而 $W(R)$ 关于 $p$-进拓扑分离且完备 (prop. 1.36.)

**证明**：记 $S = W(R)[[\xi/p]]$。我们首先证明 $S$ 是分离的，即 $\bigcap_n p^n S = 0$。我们将使用命题 6.12 ( $\bigcap _n (\ker \theta)^n=0$ ) 得到它. 

假设对于所有的 $n \in \mathbb{N}$ 均有 $x \in p^n S$。对每个 $n$，可以写出：$$x = p^n \sum_i a_{i,n}\left(\frac{\xi}{p}\right)^i,\ a_{i,n} \in W(R).$$两边取 $\theta$ 作用，得到 $\theta(x) = p^n \theta(a_{0,n})$，这蕴含 $\theta(x)=0$，进而说明 $\theta(a_{0,n}) = 0$。因此 $a_{0,n} = \xi b_{0,n}$，其中 $b_{0,n} \in W(R)$。由此可得 $x = \xi x_1$，其中：$$x_1= p^{n-1} \left(p b_{0,n} + a_{1,n}+ \sum_{i \ge 2} a_{i,n}\left(\frac{\xi}{p}\right)^{i-1}\right) \in p^{n-1} S.$$现在可以对 $x_1$ 重新使用上面的论证...因此对于所有的 $n \in \mathbb{N}$ 均有 $x \in \xi^n S$ , 从而 $x=0$ .
    
为证明完备性，假设 $y = (y_n)_{n\in\mathbb{N}} \in \varprojlim_n S/p^n S$，并假设 $x_n$ 是 $y_n$ 在 $S$ 中的提升。我们可以写出：$$x_{n+1} - x_n = \sum_{i \ge 0} p^n a_{i,n} \left(\frac{\xi}{p}\right)^i,\ a_{i,n} \in W(R).$$因为 $\sum_n p^n a_{i,n}$ 在 $p$-进拓扑下收敛于某个 $a_i \in W(R)$，所以 $x = \sum_i a_i (\xi/p)^i + x_0$ 映射到 $y$。这就完成了引理的证明。$\square$ 

**定义 7.3**：环 $A_{\text{cris}}$ 定义为 $\varprojlim_{n\in\mathbb{N}} A_{\text{cris}}^0/p^n A_{\text{cris}}^0$。环 $B_{\text{cris}}^+$ 定义为 $A_{\text{cris}}[\frac{1}{p}]$。

由引理 7.2 可知，$A_{\text{cris}}^0$ 是 $p$-进分离的，且 $A_{\text{cris}}^0 \to A_{\text{cris}}$ 是单射。此外，包含关系 $A_{\text{cris}}^0 \subset W(R)[[\xi/p]]$ 诱导了如下单射：$$A_{\text{cris}} \subset W(R)[[\xi/p]] \subset B_{\text{dR}}^+ \quad \text{且} \quad B_{\text{cris}}^+ \subset B_{\text{dR}}^+.$$我们有如下交换图表：
```tikz {embedFontCss=true}
\begin{tikzcd}
A_{\text{cris}}^0 \arrow[r] \arrow[d] & A_{\text{cris}} \arrow[r] \arrow[dr] & B_{\text{cris}}^+ \arrow[d] \\
W(R)[\frac{1}{p}] \arrow[rr, hook] & & B_{\text{dR}}^+
\end{tikzcd}
```
并且可以表示为：$$\begin{aligned}A_{\text{cris}} &= \left\{ \sum_{n=0}^{\infty} a_n\gamma_n(\xi),\ a_n \to 0\ p\text{-adically in } W(R) \right\} \subset B_{\text{dR}}^+, \quad (7.3) \\B_{\text{cris}}^+ &= \left\{ \sum_{n=0}^{\infty} a_n\gamma_n(\xi),\ a_n \to 0\ p\text{-adically in } W(R)\left[\frac{1}{p}\right] \right\} \subset B_{\text{dR}}^+. \quad (7.4)\end{aligned}$$然而，必须注意，一个元素 $\alpha \in A_{\text{cris}}$（或 $B_{\text{cris}}^+$）写成上述形式的表示并不是唯一的。
环同构 $\theta : W(R) \to \mathcal{O}_C$ 可以自然地延拓到 $A_{\text{cris}}^0$ 和 $A_{\text{cris}}$，这亦是 $\theta$ 在 $B_{\text{dR}}^+$ 上的限制。

**命题 7.4**：核空间$$\text{Ker} \left(\theta : A_{\text{cris}} \to \mathcal{O}_C\right)$$是一个divided power ideal，即如果 $a \in A_{\text{cris}}$ 满足 $\theta(a)=0$，则对于所有 $m \in \mathbb{N}, m \ge 1$，元素 $\frac{a^m}{m!}$（属于 $B_{\text{cris}}^+$）仍然在 $A_{\text{cris}}$ 中，且 ( 从而 ) 满足 $\theta(\frac{a^m}{m!}) = 0$。

**证明**：若 $a = \sum a_n \gamma_n(\xi) \in A_{\text{cris}}^0$，则 ( 按多项式定理展开... ) ：$$\frac{a^m}{m!} = \sum_{\text{sum of } i_n=m} \prod_n a_n^{i_n} \frac{\xi^{ni_n}}{(n!)^{i_n} (i_n)!}.$$我们断言，对于 $n \ge 1$ 且 $i \in \mathbb{N}$，有 $\frac{(ni)!}{(n!)^i i!} \in \mathbb{N}$。当 $i=0$ 时此结论显然成立。若 $ni > 0$，$\frac{(ni)!}{(n!)^i i!}$ 在组合学上可以解释为将 $ni$ 个有区别的小球放入 $i$ 个无区别且容量为 $n$ 的盒子中的方法数（即集合划分数）。因此：$$\frac{a^m}{m!} = \sum_{\text{sum of } i_n=m} \prod_n a_n^{i_n} \cdot \frac{(n i_n)!}{(n!)^{i_n} (i_n)!} \cdot \gamma_{n i_n}(\xi) \in A_{\text{cris}}^0,$$且显然有 $\theta(\frac{a^m}{m!}) = 0$。由连续性，该结论也适用于 $a \in A_{\text{cris}}$ . $\square$

**命题 7.5**：对于映射：$$\bar{\theta} : A_{\text{cris}} \xrightarrow{\theta} \mathcal{O}_C \to \mathcal{O}_C/p = \mathcal{O}_{\bar{K}}/p,$$其核 $\text{Ker}(\bar{\theta}) = (\text{Ker }\theta, p)$ 也是一个divided power ideal，即如果 $a \in \text{Ker}(\bar{\theta})$，那么对于所有 $m \in \mathbb{N}, m \ge 1$，有 $\frac{a^m}{m!} \in A_{\text{cris}}$ 且 $\bar{\theta}(\frac{a^m}{m!}) = 0$。

**证明**：假设 $a=b+px$ , $b\in \operatorname{Ker} (\theta)$ , 则$$\frac{(b + px)^m}{m!} = \frac{1}{m!} \sum_{j=0}^m \binom{m}{j} b^{m-j} (px)^j=\sum \frac{b^{m-j}}{(m-j)!}\frac{(px)^j}{j!}$$而 $p$ 在 $\mathbb{Z}_p$ 中整除 $\frac{p^m}{m!}$ . 实际上 $v_p(n!)=\sum_{i=1}^\infty[ n/p^i ]<n$ .  $\square$

回忆以下定义：$$t = \sum_{n=1}^{+\infty} (-1)^{n+1} \frac{([\varepsilon] - 1)^n}{n} \in B_{\text{dR}}^+.$$

**命题 7.6**：$t \in A_{\text{cris}}$ 且 $t^{p-1} \in p A_{\text{cris}}$。

**证明**：因为 $[\varepsilon]-1 = b\xi$，其中 $b \in W(R)$，所以有 $\frac{([\varepsilon]-1)^n}{n} = (n-1)!b^n \gamma_n(\xi)$。由于 $(n-1)! \to 0$ 在 $p$-进拓扑下收敛，我们得到 $t \in A_{\text{cris}}$。
    
为了证明 $t^{p-1} \in p A_{\text{cris}}$，只需证明 $([\varepsilon]-1)^{p-1} \in p A_{\text{cris}}$。注意到 $[\varepsilon]-1 = (\varepsilon-1, *, \dots)$，且有：$$(\varepsilon - 1)^{(n)} = \lim_{m\to+\infty} (\zeta_{p^{n+m}} - 1)^{p^m}$$其中 $\zeta_{p^n} = \varepsilon^{(n)}$ 是一个 $p^n$ 次本原单位根。于是有 $v((\varepsilon-1)^{(n)}) = \frac{1}{p^{n-1}(p-1)}$，

> 考虑分圆多项式$$\Phi_{p^n}(x) = \frac{x^{p^n} - 1}{x^{p^{n-1}} - 1}= x^{(p-1)p^{n-1}}  + \dots + x^{p^{n-1}} + 1 $$它是 $p^{n-1}(p-1)$ 次不可约多项式. 代入 $x = 1$ ，就有$$p = \Phi_{p^n}(1) = \prod_{\substack{1 \le a < p^n \\ (a, p) = 1}} (1 - \zeta_{p^n}^a)$$而 $1-\zeta_{p^n}^a$ 皆相伴 ( 因为诸 $\zeta_{p^n}^a$ 互为幂次 ) 所以赋值相同...

进而 ( 回忆 $\varpi\in R$ 且 $\varpi^{(0)}=-p$ ...) ：$$(\varepsilon - 1)^{p-1} = (p^p, p, \dots) \times \text{unit} = \varpi^p \cdot \text{unit}.$$由此可得 ( $\xi=[\varpi]+p$ ) ：$$([\varepsilon] - 1)^{p-1} \equiv [\varpi^p] \cdot (*) = (\xi - p)^p \cdot (*) \equiv \xi^p \cdot (*) \pmod{p A_{\text{cris}}}.$$因为 $\xi^p = p(p-1)!\gamma_p(\xi) \in p A_{\text{cris}}$，所以得证。$\square$

**定义 7.7**：晶体周期环 $B_{\text{cris}}$ 定义为如下环结构：$$B_{\text{cris}} = B_{\text{cris}}^+\left[\frac{1}{t}\right] = A_{\text{cris}}\left[\frac{1}{t}\right] = A_{\text{cris}}\left[\frac{1}{p}, \frac{1}{t}\right].$$易知 $B_{\text{cris}} \subset B_{\text{dR}}$。

---

#### 7.1.2 Galois 作用于 $B_{\text{cris}}$ (Galois action on $B_{\text{cris}}$)

环 $A_{\text{cris}}$、$B_{\text{cris}}^+$ 以及 $B_{\text{cris}}$ 在 $G_K$ 的作用下都是稳定的 ( 这是因为 $\theta$ 与 $G_K$ 作用交换, 从而 $\operatorname{Ker} \theta$ 稳定, 从而 $\gamma_n(a)$ 生成的 $A_{\text{cris}}^0$ ... ) 。此外，我们有：

**命题 7.8**：
1. 映射$$\iota : K \otimes_{K_0} B_{\text{cris}} \to B_{\text{dR}},\ \lambda \otimes x \mapsto \lambda x$$是单射。
2. $B_{\text{cris}}^{G_K} = K_0$

**证明**：(2) 可以很容易地从 (1) 推导出来。事实上，由于 $B_{\text{cris}} \supset W(R)[\frac{1}{p}]$，有：$$B_{\text{cris}}^{G_K} = L \supset \left(W(R)\left[\frac{1}{p}\right]\right)^{G_K} = K_0,$$其中 $L$ 是一个 $K_0$-代数。若 (1) 成立，则有：$$K = B_{\text{dR}}^{G_K} \supset (K \otimes_{K_0} B_{\text{cris}})^{G_K} = K \otimes_{K_0} L$$由此可得 $L = K_0$。
    
记 $A_{\text{cris},\mathcal{O}_K}^0 = \mathcal{O}_K \otimes_W A_{\text{cris}}^0 \subset W_{\mathcal{O}_K}(R)[\xi/p]$。采用引理 7.2 同样的方法证明 $\bigcap \pi_K^nA_{\text{cris},\mathcal{O}_K}^0=0$ ，
> 具体来说, 把 $p$ 换成 $\pi_K$ . 这里 $A_{\text{cris},\mathcal{O}_K}^0$ 中元素是有限和 $\sum a_i\gamma_n(\xi)$ 形式, 如果某个 $x\in \bigcap \pi_K^nA_{\text{cris},\mathcal{O}_K}^0$ , 那么 $x$ 可以写成任意 $n$ 的 $\pi_K^n \sum_i c_{i,n}\gamma_i(\xi)$ 形式, 并且应用基变换来的 $\theta$ , 分离出 $x=\xi x_1$ , 然后考虑 $\xi$-进拓扑的分离性....这里 $\pi_K$-进拓扑 ( $p$-进拓扑 ) 的分离性是因为 $\mathcal{O}_K$ 是有限生成的自由 $W$-模, 从而 $\bigcap p^nA_{\text{cris},\mathcal{O}_K}^0 =\bigcap p^n(A_{\text{cris}}^0 )^d=0$

若设 $\pi_K$ 是 $K$ 的一致化元，则有：$$A_{\text{cris},\mathcal{O}_K} = \varprojlim_n A_{\text{cris},\mathcal{O}_K}^0 / \pi_K^n = \varprojlim_n A_{\text{cris},\mathcal{O}_K}^0 / p^n \subset B_{\text{dR},K}^+ = B_{\text{dR}}^+,$$

从而我们得到了包含映射 $\iota$ . $\square$

---

#### 7.1.3 Frobenius 作用 $\varphi$ 于 $B_{\text{cris}}$ (Frobenius action $\varphi$ on $B_{\text{cris}}$)

回忆在 $W(R)$ 上有 Frobenius 映射：$$\varphi((a_0, a_1, \dots, a_n, \dots)) = (a_0^p, a_1^p, \dots, a_n^p, \dots).$$对于所有 $b \in W(R)$，有 $\varphi(b) \equiv b^p \pmod p$，因此：$$
\varphi(\xi) = \xi^p + p\eta = p(\eta + (p-1)!\gamma_p(\xi)), \quad \eta \in W(R),$$且 $\varphi(\xi^m) = p^m(\eta + (p-1)!\gamma_p(\xi))^m$。由此，我们可以定义 ( $B_{\text{dR}}$ 上没有Frob... ) ：$$\varphi(\gamma_m(\xi)) := \frac{p^m}{m!} (\eta + (p-1)!\gamma_p(\xi))^m \in W(R)[\gamma_p(\xi)] \subset A_{\text{cris}}^0.$$由此可知：$$\varphi(A_{\text{cris}}^0) \subset A_{\text{cris}}^0$$通过连续性，我们将 $\varphi$ 延拓到 $A_{\text{cris}}$ 和 $B_{\text{cris}}^+$。由于：
$$\varphi(t) = \log([\varepsilon^p]) = \log([\varepsilon]^p) = p \log([\varepsilon]) = pt,$$所以 $\varphi(t) = pt$。因此，通过令 $\varphi(\frac{1}{t}) = \frac{1}{pt}$，$\varphi$ 延拓到了 $B_{\text{cris}}$ 上。$\varphi$ 的作用与 $G_K$ 的作用是可交换的：对任何 $g \in G_K$ 和 $b \in B_{\text{cris}}$，均有 $\varphi(gb) = g(\varphi b)$。

---

#### 7.1.4 对数映射 (The logarithm map)

为了定义在 $C^\times$ 和 $(\text{Fr } R)^\times$ 上的对数映射，需要如下基本事实：

**引理 7.9**：对任意正整数 $N$，设 $c_N$ 是 $1$ 到 $N$ 所有整数的最小公倍数，即 $c_N = \prod_{\ell \le N} \ell^{[\log_\ell N]}$ ( 这里 $\ell$ 是质数 ) . 则有：$$\sum_{n=1}^N (-1)^{n-1} \frac{X^n}{n} + \sum_{n=1}^N (-1)^{n-1} \frac{Y^n}{n} = \sum_{n=1}^N (-1)^{n-1} \frac{(XY+X+Y)^n}{n} + \frac{1}{c_N} P_N(X,Y), \quad (7.5)$$其中 $P_N(X,Y) \in \mathbb{Z}[X,Y]$ 是次数 $\ge N+1$ 的单项式之和。

**证明**：这是$$\log(1+X)+\log(1+Y)=\log(1+X+Y+XY)$$泰勒展开的截断...$\square$

经典的满足对数基本性质 $\log(xy) = \log x + \log y$ 的 $p$-进对数映射$$\log : C^\times \to C$$的构造分为以下四个步骤：

**(a)** 对于 $x \in U_C^1$（即满足 $v(x-1) \ge 1$ 的元素），定义：$$\log x := \sum_{n=1}^\infty (-1)^{n-1} \frac{(x-1)^n}{n}. \quad (7.6)$$引理 7.9 保证了 $\log(xy) = \log(x) + \log(y)$。该函数实际上是 $U_C^1$ 到 $p\mathcal{O}_C$ 的双射，其逆映射为指数函数：$$\exp : p\mathcal{O}_C \to U_C^1,\ \exp(x) := \sum_{n=0}^\infty \frac{x^n}{n!}. \quad (7.7)$$

**(b)** 对于 $x \in U_C^+ = 1 + \mathfrak{m}_C = \{ x \in C \mid v(x-1) > 0 \}$，我们同样通过式 (7.6) 来定义 $\log$。此时存在 $m \in \mathbb{N}$ 使得 $v(x^{p^m}-1) \ge 1$，于是有：$$\log x = \frac{1}{p^m} \log(x^{p^m}). \quad (7.8)$$也可以通过此等式来直接定义 $\log x$。

**(c)** 对于 $a \in U_C = \mathcal{O}_C^\times$，利用典范分解：$$a = [\bar{a}]x,$$其中 $\bar{a} \in \bar{k}^\times$，$[\bar{a}] \in W(\bar{k})$ 且 $x \in U_C^+$，定义：$$\log a := \log x. \quad (7.9)$$实际上这里 $\bar{a}$ 是单位根, 所以 $\log [\bar{a}]$ 理应当是 $0$ ...

**(d)** 最后，对于 $x \in C^\times$，设其赋值为 $v(x) = \frac{r}{s}$（其中 $r,s \in \mathbb{Z}$ 且 $s \ge 1$），则 $v(x^s) = r = v(p^r)$，从而有 $\frac{x^s}{p^r} = y \in \mathcal{O}_C^\times$。根据关系：$$\log\left(\frac{x^s}{p^r}\right) = \log y = s \log x - r \log p,$$定义 $\log x$ 只需要给定 $\log p$。特别地，若规定 $\log p := 0$，相应的对数通常称为 **岩泽对数**（Iwasawa logarithm），记作 $\log_p$，这意味着：$$\log_p x := \frac{1}{s}\log_p y = \frac{1}{s}\log y. \quad (7.10)$$在下文中，若无特别说明，在 $C^\times$ 上所使用的对数均指岩泽对数。

**练习 7.10**：若 $x \in U_C^+$，则 $\log x = 0$ 当且仅当 $x \in \boldsymbol{\mu}_{p^\infty}(C) = \boldsymbol{\mu}_{p^\infty}(\bar{K})$。

**证明**：对 $x\in U_C^+$ , 存在充分大的 $p^m$ , $y=x^{p^m}\in U_C^1$ . 若 $\log x=0$ , 已知 $\log$ 是 $U_C^1$ 到 $p\mathcal{O}_C$ 的双射, 那么 $\log y=0$ 意味着 $y=1$ . $\square$

类似地，我们通过以下步骤定义如下对数映射：$$\log : (\text{Fr } R)^\times \to B_{\text{dR}},\ x \mapsto \log[x],$$并强制其满足基本对数法则：$$\log[xy] = \log[x] + \log[y]. \quad (7.11)$$回忆：$$U_R^+ = 1 + \mathfrak{m}_R = \{ x \in R \mid v(x-1) > 0 \} \supset U_R^1 = \{ x \in R \mid v(x-1) \ge 1 \}.$$对于任意 $x \in U_R^+$，存在 $m \in \mathbb{N}, m \ge 1$ 使得 $x^{p^m} \in U_R^1$。设 $x \in U_R^1$，则 $x$ 的 Teichmüller 代表元为 $[x] = (x, 0, \dots) \in W(R)$。

**(1)** 对于 $x \in U_R^1$，定义：$$\log[x] := \sum_{n=1}^\infty (-1)^{n-1} \frac{([x] - 1)^n}{n} = ([x] - 1) \sum_{n=0}^\infty (-1)^n \frac{([x] - 1)^n}{n+1}. \quad (7.12)$$该级数在 $A_{\text{cris}}$ 中收敛，因为：$$\theta([x]-1) = x^{(0)} - 1 \implies \bar{\theta}([x]-1) = 0,$$从而 $\gamma_n([x]-1) = \frac{([x]-1)^n}{n!} \in A_{\text{cris}}$ 且级数式：$$\log[x] = \sum_{n=1}^\infty (-1)^{n-1} (n-1)! \gamma_n([x] - 1)$$收敛（因为 $(n-1)! \to 0$ 当 $n \to \infty$ 时）。因此，我们得到了映射：$$\log : U_R^1 \longrightarrow A_{\text{cris}},\ x \longmapsto \log[x].$$根据引理 7.9，式 (7.11) 成立。我们也很容易看出 $\log[x]=0$ 当且仅当 $x=1$，因此该对数映射是单射。

**(2)** 对于 $x \in U_R^+$，假设 $m \gg 0$ 使得 $x^{p^m} \in U_R^1$，则 $U_R^1$ 上的对数映射可以唯一延拓到 $B_{\text{cris}}^+$ 上，定义为：$$\log : U_R^+ \to B_{\text{cris}}^+,\ \log[x] := \frac{1}{p^m} \log[x^{p^m}]. \quad (7.13)$$由式 (7.11) 保证该定义与 $m$ 的选择无关。

**(3)** 对于 $a \in R^\times$，利用分解 $R^\times = \bar{k}^\times \times U_R^+$（即 $a = a_0 x$，其中 $a_0 \in \bar{k}^\times, x \in U_R^+$），定义：$$\log[a] := \log[x]. \quad (7.14)$$

**(4)** 最后，对于任意 $x \in (\text{Fr } R)^\times$，假设赋值 $v(x) = \frac{r}{s}$，其中 $r,s \in \mathbb{Z}$ 且 $s \ge 1$。回忆 $\varpi \in R$ 由 $\varpi^{(0)} = -p, v(\varpi) = 1$ 给出。那么有 $\frac{x^s}{\varpi^r} = y \in R^\times$。根据以下关系式：$$\log \left[ \frac{x^s}{\varpi^r} \right] = \log[y] = s \log[x] - r \log[\varpi],$$有：$$\log[x] = \frac{1}{s}(r \log[\varpi] + \log[y]).$$因此为了定义 $\log[x]$，只需要定义 $\log[\varpi]$。由于 $\theta \left( \frac{[\varpi]}{-p} - 1 \right) = \frac{-p}{-p} - 1 = 0$，对数式：$$\log \left( \frac{[\varpi]}{-p} \right) = \sum_{n=1}^\infty (-1)^{n-1} \frac{\left( \frac{[\varpi]}{-p} - 1 \right)^n}{n} = -\sum_{n=1}^\infty \frac{\xi^n}{n p^n}$$是 $B_{\text{dR}}^+$ 中的良定义元素。我们定义：$$u = \log[\varpi] := \log \left( \frac{[\varpi]}{-p} \right) = -\sum_{n=1}^\infty \frac{\xi^n}{n p^n} \in B_{\text{dR}}^+. \quad (7.15)$$由此我们得到了所期望的对数映射：$$\log : (\text{Fr } R)^\times \longrightarrow B_{\text{dR}}^+,\ x \longmapsto \log[x].$$易知该对数映射与 $G_K$ 作用可交换。此外，对 $x \in (\text{Fr } R)^\times$，若定义 $\varphi(\log[x]) = \log[\varphi(x)]$，则有 $\varphi(\log[x]) = p \log[x]$。通过这种方式，$\varphi$ 延拓到了 $\text{Im}(\log : (\text{Fr } R)^\times \to B_{\text{dR}}^+)$ 上。

**定义 7.11**：设 $U := \text{Im}(\log : U_R^+ \to B_{\text{cris}}^+) \subset (B_{\text{cris}}^+)^{\varphi = p}$。显见有 $t = \log[\varepsilon] \in U$。

**引理 7.12**：映射 $\log : R^\times \to U \to B_{\text{cris}}^+$ 的核为 $\bar{k}^\times$，并且同构 $\log : U_R^+ \cong U$ 诱导了如下带有正合行的交换图表：
```tikz {embedFontCss=true}
\begin{tikzcd}
0 \arrow[r] & \varepsilon^{\mathbb{Q}_p} \arrow[r] \arrow[d, "\cong"] & U_R^+ \arrow[r, "\log^{(0)}"] \arrow[d, "\cong"] & C \arrow[r] \arrow[d, equal] & 0 \\
0 \arrow[r] & \mathbb{Q}_p t \arrow[r] \arrow[d, hook] & U \arrow[r, "\theta"] \arrow[d, hook] & C \arrow[r] \arrow[d, equal] & 0 \\
0 \arrow[r] & \text{Fil}^1 B_{\text{dR}} \arrow[r] & B_{\text{dR}}^+ \arrow[r, "\theta"] & C \arrow[r] & 0
\end{tikzcd}
```

其中 $\log^{(0)} : U_R^+ \to C$ 由 $x \mapsto \log x^{(0)}$ 给出。作为结论，有：$$U \cap \text{Fil}^1 B_{\text{dR}} = \mathbb{Q}_p t = \mathbb{Q}_p(1), \quad U + \text{Fil}^1 B_{\text{dR}} = B_{\text{dR}}^+. \quad (7.16)$$

**证明**：回忆比如说 $\theta([x])=x^{(0)}$ 所以右上方块交换... $\square$

**注记 7.13**：在后续的定理 7.28 中，我们将会看到 $U = \{ u \in B_{\text{cris}}^+ \mid \varphi u = pu \}$。

令 $u=\log[\varpi]$ . 对于任意 $g \in G_{K_0}$，有 $g\varpi = \varpi \varepsilon^{\eta(g)}$，其中 $\eta : G_{K_0} \to \mathbb{Z}_p^\times$ 是 $G_{K_0}$ 的一个特征，因此：$$g(u) = \log([g\varpi]) = u + \eta(g)t. \quad (7.17)$$

**命题 7.14**：元素 $u$ 在 $B_{\text{cris}}$ 的分式域 $C_{\text{cris}}$ 上是超越的。

为此我们需要一个引理：

**引理 7.15**：$u$ 不包含在 $C_{\text{cris}}$ 中。

**证明**：令 $\beta = \xi/p$，则 $\xi$ 和 $\beta$ 都在 $\text{Fil}^1 B_{\text{dR}}$ 内，但不在 $\text{Fil}^2 B_{\text{dR}}$ 内。令 $S = W(R)[[\beta]] \subset B_{\text{dR}}^+$ 是由系数 $a_n \in W(R)$ 的幂级数 $\sum a_n \beta^n$ 构成的子环 ( 就是引理7.2的 $S$ ) 。对于每个 $i \in \mathbb{N}$，令 $\text{Fil}^i S = S \cap \text{Fil}^i B_{\text{dR}}$，则 $\text{Fil}^i S$ 是 $S$ 的由 $\beta^i$ 生成的主理想。我们用$$\theta^i : \text{Fil}^i B_{\text{dR}} \longrightarrow \mathcal{O}_C$$表示映射 $\beta^i \alpha \to \theta(\alpha)$。那么 $\theta^i(\text{Fil}^i S) = \mathcal{O}_C$。

由构造可知，$A_{\text{cris}} \subset S$，因而 $C_{\text{cris}} = \text{Frac } A_{\text{cris}} \subset \text{Frac}(S)$。我们只需证明对于所有 $0 \ne \alpha \in S$，有 $\alpha u \notin S$，$u$ 不能写成 $S$ 中元素的商, 这便足以证明本引理。由引理 7.2 可知，$S$ 在 $p$-进拓扑下是分离的，因此只需证明若 $r \in \mathbb{N}$ 且 $\alpha \in S - pS$，则有 $p^r \alpha u \notin S$。
    
写出 $\alpha = \sum_n c_n \beta^n$，其中 $c_n \in W(R)$。如果对于所有 $n$ 均有 $\theta(c_n) \in p\mathcal{O}_C$，则 $c_n \in (p, \xi) W(R) \subseteq p S$ ( 这里 $\xi=p\beta$ ) ，这意味着 $\alpha \in pS$，产生了矛盾。因此，必定存在 $i < +\infty$ 使得 $\theta(c_i) \notin p\mathcal{O}_C$ 且对任意 $n < i$ 均有 $\theta(c_n) \in p\mathcal{O}_C$。换句话说，我们可以将 $\alpha$ 写成：$$\alpha = p \sum_{n<i} b_n \beta^n + b_i \beta^i + \sum_{n>i} b_n\beta^n := A_1 + A_2 + A_3,$$其中 $b_n \in W(R)$ 且 $\theta(b_i) \notin p\mathcal{O}_C$。
    
假设 $j \in \mathbb{N}$ 满足 $j > r$ 且 $p^j > i$。我们将 $-p^{j-1}u$ 展开写为：$$-p^{j-1}u = \sum_{n\ge 1} \frac{p^{j-1}\beta^n}{n} = \sum_{n < p^j} \frac{p^{j-1}\beta^n}{n} + \frac{\beta^{p^j}}{p} + \sum_{n > p^j} \frac{p^{j-1}\beta^n}{n} := B_1 + B_2 + B_3.$$现在只需证明 $-p^{j-1}\alpha u \notin S$。注意到：
1. $B_1 \in S$，所以 $\alpha B_1 \in S$。同时显然有 $A_1 B_2 \in S$。
2. $A_3 B_3, A_3 B_2$ 以及 $A_2 B_3$ 都在 $\text{Fil}^{i+p^j+1} B_{\text{dR}}$ 中。
3. 对于满足 $p^j < n \le p^j + i < 2p^j$ 的所有 $n$，有 $\frac{p^{j-1}\beta^n}{n} \cdot A_1 \in S$，因此 $A_1 B_3 \in S + \text{Fil}^{i+p^j+1} B_{\text{dR}}$。
4. $A_2 B_2 = b_i \beta^{i+p^j}/p \in \text{Fil}^{i+p^j} B_{\text{dR}}$。
    
因此，如果 $-p^{j-1}\alpha u \in S$，那么：$$b_i \beta^{i+p^j}/p \in \text{Fil}^{i+p^j} B_{\text{dR}} \cap (S + \text{Fil}^{i+p^j+1} B_{\text{dR}}) = \text{Fil}^{i+p^j} S + \text{Fil}^{i+p^j+1} B_{\text{dR}}.$$然而，一方面有：$$\theta^{i+p^j}(b_i \beta^{i+p^j}/p) = \theta(b_i)/p \notin \mathcal{O}_C;$$而另一方面有：$$\theta^{i+p^j}(\text{Fil}^{i+p^j} S + \text{Fil}^{i+p^j+1} B_{\text{dR}}) = \mathcal{O}_C,$$这导致了矛盾，引理得证。

**命题 7.14 的证明**：如果 $u$ 不是超越元，假设其在 $C_{\text{cris}}$ 上的极小多项式为 $c_0 + c_1 X + \dots + c_{d-1}X^{d-1} + X^d$。根据式 (7.17)，对于 $g \in G_{K_0}$，有 $g u = u + \eta(g)t$。由于 $C_{\text{cris}}$ 在 $G_{K_0}$ 作用下稳定，因此：$$g(c_0) + \dots + g(c_{d-1})(u + \eta(g)t)^{d-1} + (u + \eta(g)t)^d = 0.$$根据极小多项式的唯一性，对任意 $g \in G_{K_0}$，都有：$$g(c_{d-1}) + d \cdot \eta(g)t = c_{d-1}.$$令 $c = c_{d-1} + du$，则有 $g(c) = c$。因此 $c \in (B_{\text{dR}})^{G_{K_0}} = K_0 \subset B_{\text{cris}}$，从而：$$u = d^{-1}(c - c_{d-1}) \in C_{\text{cris}},$$这与引理 7.15 矛盾。因此 $u$ 在 $C_{\text{cris}}$ 上是超越元。$\square$

**推论 7.16**：对于映射 $\log : (\text{Fr } R)^\times \to B_{\text{dR}}^+$，其核为 $\bar{k}^\times$，其像为 $U \oplus \mathbb{Q}_p u$。

**证明**：留作练习。

---

### 7.3.1 $B_e$ 环 (The ring $B_e$)

**定义 7.27**：对于 $h, d \in \mathbb{Z}$ 且 $h \ge 1$，设：$$P_{h,d} = \{x \in B_{\mathrm{cris}} \mid \varphi^h x = p^d x\}, \quad P_{h,d}^+ = P_{h,d} \cap B_{\mathrm{cris}}^+$$特别地，设 $B_e := P_{1,0} = B_{\mathrm{cris}}^{\varphi = 1}$，并且 ${}^h B_e := P_{h,0} = B_{\mathrm{cris}}^{\varphi^h = 1}$。

首先考虑 $h = 1$ 的情况。注意 $B_e \supseteq \mathbb{Q}_p$ 是一个环，且每一个 $P_{1,d} = B_e t^d$ 都是一个秩为1的自由 $B_e$-模。回忆 $U$ 是 $U_R^+$ 在对数映射下于 $B_{\mathrm{cris}}^+$ 中的像, 总有 $\varphi(u)=\varphi(\log[x])=pu$ ，因此 $U \subset P_{1,1}^+$。我们有以下定理：

**定理 7.28**：
1. $\mathrm{Fil}^0 B_e = \mathbb{Q}_p$，且对于任意 $d < 0$，有 $P_{1,d}^+ = 0$。
2. $U = P_{1,1}^+$，因此以下序列是准确的：$$0 \to \mathbb{Q}_p t \to P_{1,1}^+ \xrightarrow{\theta} \mathbb{C} \to 0$$
3. 此外，任取 $u \in U - \mathbb{Q}_p t$，则对于 $d > 0$，有：$$P_{1,d}^+ = \{x = x_0 t^{d-1} + x_1 u t^{d-2} + \dots + x_{d-1} u^{d-1} \mid x_0, \dots, x_{d-1} \in U\}$$因此 $P_{1,d}^+$ 由 $U$ 生成。
4. 以下序列是正合的：$$0 \to \mathbb{Q}_p \to B_e \oplus B_{\mathrm{dR}}^+ \to B_{\mathrm{dR}} \to 0$$

**定理 7.28 的证明**：
**(1) 的证明**：$\mathrm{Fil}^0 B_e = \mathbb{Q}_p$ 是定理 7.26 (3) 的特例, 也就是正合列$$0 \longrightarrow \mathbb{Q}_p(r) \longrightarrow \mathrm{Fil}^r B_{\mathrm{cris}} \xrightarrow{p^{-r}\varphi - 1} B_{\mathrm{cris}} \longrightarrow 0$$取 $r=0$ 。若 $x \in P_{1,d}^+$，则有 $xt^{-d} \in B_e \cap \mathrm{Fil}^{-d} B_{\mathrm{dR}}$，当 $d < 0$ 时该交集为 0。

**(2) 的证明**：假设 $x \in P_{1,1}^+$，且假设 $u \in U$ 使得 $\theta(x) = \theta(u)$ ( 因为 $U_C^+\to C$ 是满射... )，则 $x - u = tx_0$，其中 $x_0 \in B_e \cap B_{\mathrm{dR}}^+ \subset \mathrm{Fil}^0 B_e = \mathbb{Q}_p$。因此 $x \in U$，第 (2) 条得证。

**(3) 的证明**：一般地，对于 $x \in P_{1,d}^+$，设 $\theta(x) = c$ 且 $\theta(u) = c_0$。我们可以找到 $x_{d-1} \in U$ 使得 $\theta(x_{d-1}) = c / c_0^{d-1}$，则 $\theta(x - x_{d-1} u^{d-1}) = 0$，因此我们可以写成 $x - x_{d-1} u^{d-1} = ty$，其中 $y \in B_{\mathrm{dR}}^+ \cap P_{1,d-1}$。此外，容易验证对任意 $n \in \mathbb{N}$ 均有 $\varphi^n(y) \in B_{\mathrm{dR}}^+$。根据定理 7.26(1)，$y \in B_{\mathrm{cris}}^+$，因此 $y \in P_{1, d-1}^+$。接下来通过对 $d$ 进行归纳即可完成证明。

**(4) 的证明**：只需证明 $B_e + B_{\mathrm{dR}}^+ = B_{\mathrm{dR}}$。我们对 $d > 0$ 进行归纳，证明 $\mathrm{Fil}^{-d} B_{\mathrm{dR}} \subset B_e + B_{\mathrm{dR}}^+$。假设对于 $-d+1$ 结论已成立。设 $x = t^{-d} \lambda \in \mathrm{Fil}^{-d} B_{\mathrm{dR}}$ 且 $\theta(\lambda) = c \neq 0$。根据第 (3) 条的证明过程 ( $x_{d-1}u^{d-1}$ ) ，我们可以找到 $y \in P_{1,d}^+$ 满足 $\theta(y) = c$。那么 $t^{-d} y \in B_e$，并且有：$$x - t^{-d} y = t^{-d}(\lambda - y) \in \mathrm{Fil}^{-d+1} B_{\mathrm{dR}}$$归纳假设说明该式属于 $B_e + B_{\mathrm{dR}}^+$，因此断言得证。$\square$

**备注 7.29**：(4) 中正合列是 $p$-进 Hodge 理论中所谓的**基本正合**，其亦可写为：$$0 \to \mathbb{Q}_p \to B_e \to B_{\mathrm{dR}}/B_{\mathrm{dR}}^+ \to 0$$此外，对于 $x \in B_e$，我们定义其degree：$$\mathrm{deg}_{\infty}(x) := \min \{ d \in \mathbb{Z} \mid t^d x \in P_{1,d}^+ \}$$定理的证明表明，$\mathrm{deg}_{\infty}(x) = d$ 当且仅当 $x \in \mathrm{Fil}^{-d} B_{\mathrm{dR}} \setminus \mathrm{Fil}^{-d+1} B_{\mathrm{dR}}$。在此意义上，$\mathrm{deg}_{\infty}(x) = -v_{\mathrm{dR}}(x)$，且 $B_{\mathrm{dR}}$ 是 $\mathrm{Frac}\, B_e$ 在赋值 $v_{\mathrm{dR}}$ 下的完备化。

---

### 7.4.1 命题陈述 (The statement)

回忆：$$U = \{ u \in B_{\mathrm{cris}} \mid \varphi(u) = pu \} \cap B_{\mathrm{dR}} ^+ = P_{1,1}^+$$设 $B_2 = B_{\mathrm{dR}}^+ / \mathrm{Fil}^2 B_{\mathrm{dR}}$。我们有以下交换图表：
```tikz {embedFontCss=true}
\begin{tikzcd}
0 \arrow[r] & \mathbb{Q}_p(1) \arrow[r] \arrow[d, "\mathrm{incl}"] & U \arrow[r, "\theta"] \arrow[d] & C \arrow[r] \arrow[d, "\mathrm{Id}"] & 0 \\
0 \arrow[r] & C(1) \arrow[r] & B_2 \arrow[r, "\theta"] & C \arrow[r] & 0
\end{tikzcd}
```
其中所有行均正合，且所有垂直箭头均单射。

假设 $h \ge 2$ 是一个整数。假设 $\lambda_1, \lambda_2, \dots, \lambda_h \in C$ 不全为零。设：$$Y := \{ (u_1, u_2, \dots, u_h) \in U^h \mid \exists c \in C \text{ 使得对于所有 } i，\theta(u_i) = c \lambda_i \}$$假设 $b_1, b_2, \dots, b_h \in B_2$ 不全为零，满足 $\sum_{i=1}^h \lambda_i \theta(b_i) = 0$。那么映射：$$\rho : Y \to B_2, \quad (u_1, \dots, u_h) \mapsto \sum_{i=1}^h b_i u_i$$其像包含在 $C(1)$ 中，因为通过对 $\sum_{i=1}^h b_i u_i$ 作用 $\theta$ 可知：$$\theta\left(\sum_{i=1}^h b_i u_i\right) = \sum \theta(b_i) \theta(u_i) = c \sum \theta(b_i) \lambda_i = 0$$

**定理 7.41 (基本引理 / Fundamental Lemma)**：
假设上述假设成立。那么 $\mathrm{Im}\,\rho \subset C(1)$ 且：
(1) 要么 $\mathrm{Im}\,\rho = \rho(\mathbb{Q}_p(1)^h)$，从而有 $\dim_{\mathbb{Q}_p} \mathrm{Im}\,\rho \le h$；
(2) 要么 $\mathrm{Im}\,\rho = C(1)$，且 $\dim_{\mathbb{Q}_p} \mathrm{Ker}\,\rho = h$。

注：该证明是 Plût 博士论文 [Plû09] 中证明的改进，由欧阳毅、张神星和杨金榜写就。特别地，后续 Proposition 7.42 等的证明中包含了大量来自 [Plû09] 的想法。

---

### 7.4.4 应用：$B_e$ 是一个几乎欧几里得整环 (Application: $B_e$ is an almost Euclidean domain)

回忆**欧几里得整环**（Euclidean domain）是一个整环 $B$，使得存在一个映射 $\deg : B \to \mathbb{N} \cup \{-\infty\}$（称为欧几里得测度 / Euclidean stathme），满足：
(i) $\deg(ab) \ge \deg(a) + \deg(b)$，且 $\deg(a) = -\infty$ 当且仅当 $a = 0$；
(ii) 若 $a, b \in B$ 且 $a \neq 0$，则存在唯一的 $q, r \in B$ 使得 $b = qa + r$ 且 $\deg(r) < \deg(a)$。
众所周知，欧几里得整环自动是PID（PID）。

**定义 7.50**：一个**几乎欧几里得整环**（almost Euclidean domain）是一个整环 $B$，其上存在一个映射 $\deg : B \to \mathbb{N} \cup \{-\infty\}$ 满足以下三个条件：
(i) $\deg(ab) \ge \deg(a) + \deg(b)$，且 $\deg(a) = -\infty$ 当且仅当 $a = 0$；
(ii) 若 $a, b \in B$ 且 $a \neq 0$，则存在 $q, r \in B$ 使得 $b = qa + r$ 且 $\deg(r) \le \deg(a)$；
(iii) 若 $a, b \in B$ 且 $\deg(a) = \deg(b) \neq -\infty$，则要么存在 $x \in B$ 使得 $b = ax$，要么存在 $x, y \in B$ 使得 $-\infty < \deg(ax+by) < \deg(a)$。
上述映射 $\deg$ 称为almost Euclidean stathme。

由定义显然可知，欧几里得整环一定是几乎欧几里得整环。

**命题 7.51**：几乎欧几里得整环是PID（PID）。

**证明**：假设 $I$ 是几乎欧几里得整环 $B$ 的非零理想，我们需要证明 $I$ 是主理想。设 $d = d(I) = \min \{ \deg(b) \mid b \in I, b \neq 0 \}$。根据条件 (ii)，$I$ 由满足 $\deg(b) = d$ 的元素 $b \in I$ 生成。

令 $a \in I$ 且 $\deg(a) = d$。对于任何满足 $\deg(b) = d$ 的元素 $b \in I$，根据条件 (iii)，如果 $b \neq ax$，则存在 $x, y \in B$ 使得 $\deg(ax+by) < \deg(a) = d$ 且 $ax+by \neq 0$，这与 $d$ 的最小性相矛盾，因此必须有 $b = ax$。由此可知，$I = (a)$ 为主理想。

**定义 7.52**：假设 $B$ 是一个整环，且 $B_{\eta}$ 是其分式域。$B$ 上的almost Euclidean degree是一个满足以下条件的almost Euclidean stathme：
(o) 在 $B_{\eta}$ 上存在一个赋值 $v$，使得对所有 $b \in B$，有 $\deg(b) = -v(b)$；
(iv) 在上述定义 7.50 的条件 (iii) 中，可以选择满足 degree $\le 1$ 的 $x, y$。

我们利用基本引理（Fundamental Lemma）证明以下重要结果：

**定理 7.53**：在式 (7.29) 中给出的映射 $\deg = \deg_{\infty}$ 是环 $B_e$ 上的一个几乎欧几里得度量，因此 $B_e$ 是几乎欧几里得的且为PID。

**证明**：我们只需检查条件 (ii) 和 (iv)。

**对于条件 (ii)**：假设 $a, b \in B_e$ 且 $\deg(a) = r \neq -\infty$，$\deg(b) = s$。我们可以假设 $r < s$（否则，只需取 $q = 0$ 且 $r = a$ 即可）。此时只需寻找 $q \in B_e$ 使得 $\deg(b - qa) < s$。写出 $a = t^{-r} a_0$ 且 $b = t^{-s} b_0$，则 $\theta(a_0)$ 和 $\theta(b_0)$ 均不为零。假设 $q_0 \in P_{1, s-r}^+$ 满足 $\theta(q_0) = \theta(b_0) / \theta(a_0)$，并设 $q = t^{r-s} q_0$，则 $q \in B_e$ 且满足 $\deg(b - qa) < s$。故条件 (ii) 得证。

**对于条件 (iv)**：令 $\deg x = \deg y = d > -\infty$，设 $x_0 = x t^d, y_0 = y t^d \in B_{\mathrm{cris}}^+$。根据基本引理（定理 7.41），令 $B_2$ 中的 $b_1 = \overline{x_0}$ 且 $b_2 = \overline{y_0}$，则存在 $u_1, u_2 \in U$ 使得 $b_1 u_1 + b_2 u_2 = 0$ 且 $x_0 u_1 + y_0 u_2 \in \mathrm{Fil}^2 B_{\mathrm{dR}}$，即：$$x_0 \frac{u_1}{t} + y_0 \frac{u_2}{t} \in \mathrm{Fil}^1 B_{\mathrm{dR}}$$因此，有 $\deg(x u_1 / t + y u_2 / t) < d$，其中 $u_1 / t, u_2 / t \in B_e$ 且其度数 $\le 1$。故条件 (iv) 得证。

**备注 7.54**：
通过推广基本引理，可以证明 $B_{e,h}$ 和 ${}^h B_e$ 也是几乎欧几里得的，因此也是PID。
