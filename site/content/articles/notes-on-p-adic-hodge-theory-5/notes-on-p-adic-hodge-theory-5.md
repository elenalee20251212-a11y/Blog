---
title: Notes on p-adic Hodge Theory 5
date: 2026-07-17T19:13:27.000Z
tags: null
articleId: notes-on-p-adic-hodge-theory-5
category: mathematics/number-theory/p-adic-hodge-theory
order: 5
---

# 5 环 $R$ 及其结构

## 5.1 环 $R$ 及其基本性质

### 5.1.1 $R$-构造
设 $A$ 是特征为 $p$ 的交换环，绝对 Frobenius 映射定义为环自同态：

$$ \varphi : A \to A, \quad a \mapsto a^p $$

若 $\varphi$ 是同构（相应地，单同构），则称 $A$ 是**完美环**（相应地，**reduced**）。

**定义 5.1** 设 $A$ 是特征为 $p$ 的交换环，定义其逆极限：

$$R(A) := \varprojlim_{n \in \mathbb{N}} A_n \quad (5.1)$$

其中对任意 $n \in \mathbb{N}$， $A_n = A$，过渡映射为 $\varphi$。此时， $R(A)$ 中的元素 $x$ 可写为满足 $x_n \in A$ 且 $x_{n+1}^p = x_n$ 的序列 $x = (x_n)_{n \in \mathbb{N}}$。

**命题 5.2** 环 $R(A)$ 是特征为 $p$ 的完美环。

**证明：**
1. 由于过渡映射 $\varphi$ 是环同态，其逆极限 $R(A)$ 必为特征为 $p$ 的环。
2. 对于任意 $x = (x_n)_{n \in \mathbb{N}} \in R(A)$，设 $y = (x_{n+1})_{n \in \mathbb{N}}$，易知 $y \in R(A)$ 且 $x = y^p$，故 Frobenius 映射是满射。
3. 若 $x^p = 0$，则对任意 $n \ge 0$ 有 $x_{n+1}^p = x_n = 0$，故 $x = 0$。因此 $R(A)$ 是完美环。

对于任意 $n \in \mathbb{N}$，定义投影映射：

$$ \theta_n : R(A) \longrightarrow A, \quad (x_n)_{n \in \mathbb{N}} \longmapsto x_n \quad (5.2) $$

其具有以下性质：
1. 若 $A$ 是完美的，则每个 $\theta_n$ 都是同构；若 $A$ 是reduced的，则 $\theta_0$（从而所有 $\theta_n$）是单射，其像为：

$$ \theta_0(R(A)) = \bigcap_{n \ge 0} \varphi^n(A) \quad (5.3) $$

2. 若 $A$ 是拓扑环，则 $R(A)$ 装备有逆极限拓扑（即令所有 $\theta_n$ 连续的最弱拓扑）。特别地，可以用离散拓扑装备 $A$ 进而研究 $R(A)$ 上的诱导拓扑。

现在设环 $A$ 关于 $p$ 进拓扑（$p$-adic topology）是分离且完备的，即规范映射 $A \to \varprojlim_{n \in \mathbb{N}} A/p^n A$ 是同构。考虑环 $R(A/pA)$。

**命题 5.3** 存在环 $R(A/pA)$ 与以下集合之间的双射：

$$ R(A) := \varprojlim_{x \mapsto x^p} A = \left\{ (x^{(n)})_{n \in \mathbb{N}} \;\middle|\; x^{(n)} \in A, \, (x^{(n+1)})^p = x^{(n)} \right\} \quad (5.4) $$

> 这里其实只是在1.2中已经见过的Teichmuller lifting, 之所以是双射是因为这个定义就要求是 $p^n$ 次根的提升的 $p^n$ 次幂取极限...

**证明：**
1. 取 $x = (x_n)_{n \in \mathbb{N}} \in R(A/pA)$，其中 $x_n \in A/pA$ 且 $x_{n+1}^p = x_n$。对任意 $n$，任选 $x_n$ 在 $A$ 中的提升 $\widehat{x}_n \in A$，则有 $\widehat{x}_{n+1}^p \equiv \widehat{x}_n \pmod{pA}$。
2. 注意到对于 $m \ge 1$，若 $\alpha \equiv \beta \pmod{p^m A}$，则：

$$ \alpha^p \equiv \beta^p \pmod{p^{m+1} A} $$

递推可得，对于任意 $n, m \in \mathbb{N}$，有：

$$ \widehat{x}_{n+m+1}^{p^{m+1}} \equiv \widehat{x}_{n+m}^{p^m} \pmod{p^{m+1} A} $$

因此对于每一个 $n$，极限 $x^{(n)} = \lim_{m \to +\infty} \widehat{x}_{n+m}^{p^m}$ 在 $A$ 中存在，且此极限与提升的选择无关。
6. 由极限形式可知 $x^{(n)}$ 是 $x_n$ 在 $A$ 中的一个提升，满足 $(x^{(n+1)})^p = x^{(n)}$。此时 $x \mapsto (x^{(n)})_{n \in \mathbb{N}}$ 定义了一个映射 $R(A/pA) \to R(A)$。
7. 另一方面，模 $p$ 归约映射自然诱导了相反方向的映射 $R(A) \to R(A/pA)$，即 $(x^{(n)})_{n \in \mathbb{N}} \mapsto (x^{(n)} \bmod pA)_{n \in \mathbb{N}}$。易验证这两个映射互为逆映射。
$\square$

在上述双射下，若 $A$ 是分离且完备的 $p$ 进环，可将 $R(A)$ 与 $R(A/pA)$ 等同。任意元素 $x \in R(A)$ 均可以写为两种形式：

$$ x = (x_n)_{n \in \mathbb{N}} = (x^{(n)})_{n \in \mathbb{N}}, \quad x_n \in A/pA, \, x^{(n)} \in A \quad (5.5) $$

若 $x = (x^{(n)}), y = (y^{(n)}) \in R(A)$，则其环运算定义为：
乘法：

$$ (xy)^{(n)} = \left( x^{(n)} y^{(n)} \right) \quad (5.6) $$

加法：

$$ (x + y)^{(n)} = \lim_{m \to +\infty} \left( x^{(n+m)} + y^{(n+m)} \right)^{p^m} \quad (5.7) $$

### 5.1.2 环 $R$ 的基本性质
在实际应用中，最重要的情况是 $A = \mathcal{O}_{\widehat{L}}$，其中 $L$ 是包含 $K_0$的 $\overline{K}$ 的子域，$\widehat{L}$ 为其关于 $p$ 进赋值的完备化。通过恒等式 $\mathcal{O}_L/p\mathcal{O}_L = \mathcal{O}_{\widehat{L}}/p\mathcal{O}_{\widehat{L}}$，有：

$$R(\mathcal{O}_{\widehat{L}}) = R(\mathcal{O}_L/p\mathcal{O}_L) = \left\{ x = (x^{(n)})_{n \in \mathbb{N}} \;\middle|\; x^{(n)} \in \mathcal{O}_{\widehat{L}}, \, (x^{(n+1)})^p = x^{(n)} \right\}$$

> 注: 这里 $K_0=\operatorname{Frac}W(k)$ , $C = \widehat{K^s}=\mathbb{C}_{p}$ , 见ch4...

**定义 5.4** 定义环 $R := R(\mathcal{O}_{C}) = R(\mathcal{O}_{\overline{K}}/p\mathcal{O}_{\overline{K}})$。

**定理 5.5** 环 $R$ 是特征为 $p$ 的完备且完美的赋值环，其赋值 $v = v_R$ 定义为：

$$v_R(x) = v(x) := v(x^{(0)})$$

其中 $v = v_p$ 是 $C$ 上规范化满足 $v(p)=1$ 的赋值。其剩余域为 $\bar{k}$，分式域 $\mathrm{Fr}\,R = R(C)$ 是特征为 $p$ 的完备非阿基米德完美域。此外， $R$ 装备有天然且连续的 $G_{K_0}$ 作用，定义为：

$$g(x) := (g x^{(n)})_n$$

**证明：**
1. 由于映射 $R \to \mathcal{O}_{C}, \, x \mapsto x^{(0)}$ 是满射，故赋值的值群为 $v(R) = \mathbb{Q}_{\ge 0} \cup \{+\infty\}$。
2. 显然有 $v(x) = +\infty \iff x^{(0)} = 0 \iff x = 0$。
3. 乘法性质 $v(xy) = v(x) + v(y)$ 显然。
4. 验证三角不等式 $v(x+y) \ge \min\{v(x), v(y)\}$：设 $x, y \ne 0$，则 $x^{(0)}, y^{(0)} \ne 0$。因为 $v(x)=v(x^{(0)})=p^n v(x^{(n)})$，必存在 $n$ 使得 $v(x^{(n)})<1$ 且 $v(y^{(n)})<1$。根据定义，有 $(x+y)^{(n)} \equiv x^{(n)} + y^{(n)} \pmod p$，因此：

$$\begin{aligned} v\left( (x + y)^{(n)} \right) &\ge \min\left\{ v(x^{(n)}), v(y^{(n)}), 1 \right\} \\ &\ge \min\left\{ v(x^{(n)}), v(y^{(n)}) \right\} \end{aligned}$$

两边同乘 $p^n$，即得 $v(x+y) \ge \min\{v(x), v(y)\}$。
5. 由于：

$$\left\{ x \in R \;\middle|\; v(x) \ge p^n \right\} = \mathrm{Ker}\left( \theta_n : R \to \mathcal{O}_{C}/p\mathcal{O}_{C} \right)$$

这说明由赋值定义的拓扑恰好是逆极限拓扑，因此 $R$ 是完备的。
6. 分式域的形式为：

$$\mathrm{Fr}\,R = R(C) = \left\{ x = (x^{(n)})_{n \in \mathbb{N}} \;\middle|\; x^{(n)} \in C, \, (x^{(n+1)})^p = x^{(n)} \right\}$$

赋值通过相同的公式 $v(x) = v(x^{(0)})$ 延拓到 $\mathrm{Fr}\,R$。它的整数环为：

$$ R = \left\{ x \in \mathrm{Fr}\,R \;\middle|\; v(x) \ge 0 \right\} $$

其最大理想为：

$$ \mathfrak{m}_R = \left\{ x \in \mathrm{Fr}\,R \;\middle|\; v(x) > 0 \right\} $$

7. 对于剩余域 $R/\mathfrak{m}_R$，容易验证映射 $R \xrightarrow{\theta_0} \mathcal{O}_{\overline{K}}/p\mathcal{O}_{\overline{K}} \longrightarrow \bar{k}$ 是满射且其核为 $\mathfrak{m}_R$，故其剩余域为 $\bar{k}$。
$\square$

因为 $\bar{k}$ 是完美的且 $R$ 是完备的，所以存在唯一的乘性同态截面 $s : \bar{k} \to R$ .

**命题 5.6** 截面 $s$ 由下式给出：

$$a \in \bar{k} \longmapsto \left( \left[ a^{p^{-n}} \right] \right)_{n \in \mathbb{N}}$$

其中 $[a^{p^{-n}}] = (a^{p^{-n}}, 0, 0, \cdots) \in \mathcal{O}_{\widehat{K_0^{ur}}}$ 是 $a^{p^{-n}}$ 的 Teichmüller 代表元。

**证明**：令 $\tilde{a} = ([a^{p^{-n}}])_{n \in \mathbb{N}}$ , $\widetilde{a}$ 在模 $p$ 下正是 $a$ , 因此为验证命题, 只需说明 $s$ 良定义, 从而显然为环同态. 具体来说, 易证 $([a^{p^{-(n+1)}}])^p = [a^{p^{-n}}]$ ，故 $\widetilde{a}$ 是 $R$ 中元素。证毕。$\square$ 

**命题 5.7** $\mathrm{Fr}\,R$ 是代数闭域。

**证明**：由于 $\mathrm{Fr}\,R$ 是完美的，只需证明它是可分闭的。设 $P(X) = X^d + a_{d-1}X^{d-1} + \dots + a_0 \in R[X]$ 是首一可分多项式，需证明其在 $R$ 中有根。
1. 根据可分性，存在 $U_0, V_0 \in \mathrm{Fr}\,R[X]$ 使得 $U_0 P + V_0 P' = 1$。
2. 选取 $\pi \in R$ 使得 $v(\pi) = 1$（例如取 $\pi = (p^{(n)})_{n \in \mathbb{N}}$ 满足 $p^{(0)} = p$），则存在 $m \ge 0$ 使得：

$$U = \pi^m U_0 \in R[X], \quad V = \pi^m V_0 \in R[X]$$

满足 $UP + VP' = \pi^m$。
3. 接下来通过牛顿迭代构造出一个根: 假设存在 $x_{n_0}$ 满足 $v(P(x_{n_0}))\geqslant n_0$ , 那么归纳定义 $x_{n+1}=x_n-\frac{P(x_n)}{P'(x_n)}$ . 泰勒展开得到

$$P(x_n+y) = P(x_n) + yP'(x_n) + y^2(\cdots)$$

并且易知 $\cdots$ 的赋值非负. 如果 $v(P(x_n))\geqslant n$ , 那么在 $v(P(x_n)/P'(x_n))>\frac{n}{2}$ 时就有 $v(x_{n+1})\geqslant n+1$ .
4. 现在还需证明 $v(P(x_n)/P'(x_n))>\frac{n}{2}$ 和合适的 $n_0$ 的存在性. 具体来说, 如果 $v(P(x_n))\geqslant n>m$ , 则 $v(U(x_n)P(x_n))>m$ , 由于 $UP + VP' = \pi^m$ 有 $v(V(x_n)P'(x_n))=m$ , 从而 $v(P'(x_n))\leqslant m$ , 从而

$$v(P(x_n)/P'(x_n))\geqslant n-m>\frac{n}{2}$$

对一切 $n>2m$ 成立. 为证明可以取 $n_0\geqslant 2m+1$ , 则考虑以下断言: 
5. **断言：** 对任意 $n \in \mathbb{N}$，存在 $x \in R$ 使得 $v(P(x)) \ge p^n$。
* *证明：* 考虑映射 $\theta_n : R \to \mathcal{O}_{\overline{K}}/p$。设 $Q(X) = X^d + \dots + \alpha_1 X + \alpha_0 \in \mathcal{O}_{\overline{K}}[X]$，其中 $\alpha_i$ 为 $\theta_n(a_i)$ 的提升。由于 $\overline{K}$ 是代数闭域，设 $u \in \mathcal{O}_{\overline{K}}$ 为 $Q(X)$ 的根，$\bar{u}$ 为其在 $\mathcal{O}_{\overline{K}}/p\mathcal{O}_{\overline{K}}$ 中的像。则任何满足 $\theta_n(x) = \bar{u}$ 的元素 $x \in R$ 都满足 $\theta_n(P(x)) = 0$，即 $v(P(x)) \ge p^n$。$\square$

### 5.1.3 $\mathrm{Fr}\,R^{\times}$ 及其子群
回顾乘法群 $C^{\times}$ 具有以下子群：
1. $U_{C} = \mathcal{O}_{C}^{\times} = \mathcal{O}_{C} - \mathfrak{m}_{C} = \{ x \in C \mid v(x)=0 \}$ 为 $\mathcal{O}_{C}$ 的单位群。
2. $U_{C}^+ = 1 + \mathfrak{m}_{C} = \{ x \in C \mid v(x-1) > 0 \} \subseteq U_{C}$。
3. $U_{C}^1 = 1 + p\mathcal{O}_{C} = \{ x \in C \mid v(x-1) \ge 1 \} \subseteq U_{C}^+$。

它们满足以下性质：
*   (a) 如下序列正合：
    

$$ \begin{CD} 0 @>>> U_{C} @>>> C^{\times} @>{v}>> \mathbb{Q} @>>> 0 \end{CD} $$

*   (b) 正合列

$$\begin{CD} 1 @>>> U_{C}^+ @>>> U_{C} @>>> \bar{k}^{\times} @>>> 1 \end{CD}$$

与 Teichmüller 映射 $\bar{k}^{\times} \to U_{C}$ 诱导了同构 $U_{C} = \bar{k}^{\times} \times U_{C}^+$。
*   (c) 对任意 $a \in U_{C}^+$，存在 $n \in \mathbb{N}$ 使得 $a^{p^n} \in U_{C}^1$。
*   (d) $U_{C}^1$ 在 $p$ 进拓扑下是分离且完备的。

类似地，我们定义 $\mathrm{Fr}\,R^{\times}$ 的相应子群：
*   (i) $U_R = R^{\times} = R - \mathfrak{m}_R = \{ x \in R \mid v(x)=0 \}$ 为 $R$ 的单位群。
*   (ii) $U_R^+ = 1 + \mathfrak{m}_R = \{ x \in R \mid v(x-1) > 0 \} \subseteq U_R$。
*   (iii) $U_R^1 := \{ x \in R \mid v(x-1) \ge 1 \} \subseteq U_R^+$。

**命题 5.8** 映射：

$$\mathrm{Hom}\left( \mathbb{Z}[1/p], C^{\times} \right) \longrightarrow \mathrm{Fr}\,R^{\times}, \quad f \longmapsto \left( f(p^{-n}) \right)_{n \in \mathbb{N}}$$

是 $\mathbb{Z}[G_{K_0}]$-模的正则同构。通过该同构视同这两个群，有：
*   (1) $U_R = \mathrm{Hom}\left( \mathbb{Z}[1/p], \mathcal{O}_{C}^{\times} \right) = \bar{k}^{\times} \times U_R^+$。
*   (2) 下式是一个同构（其中 $U_R^1$ 是无挠 $\mathbb{Z}_p$-模）：

$$U_R^1 \xrightarrow{\sim} \varprojlim_{n \in \mathbb{N}} U_R^1/(U_R^1)^{p^n}$$

且 $U_R^+ = \mathrm{Hom}\left( \mathbb{Z}[1/p], U_{C}^+ \right) = \mathbb{Q}_p \otimes_{\mathbb{Z}_p} U_R^1$。

**证明：**

1. 若 $f : \mathbb{Z}[1/p] \to C^{\times}$ 是同态，令 $x^{(n)} = f(p^{-n})$，则有 $(x^{(n+1)})^p = x^{(n)}$。故 $x = (x^{(n)})_{n \in \mathbb{N}} \in (\mathrm{Fr}\,R)^{\times}$。反之，若 $x \in (\mathrm{Fr}\,R)^{\times}$，令 $f(p^{-n}) = x^{(n)}$ 可定义一个同态 $f : \mathbb{Z}[1/p] \to C^{\times}$。此对应显然与 $G_{K_0}$ 的作用相容。
2. 对于 $x \in R$，有 $x \in U_R \iff x^{(0)} \in U_{C}$。因此我们得到：

$$\begin{aligned} U_R &= \mathrm{Hom}\left( \mathbb{Z}[1/p], \mathcal{O}_{C}^{\times} \right) \\ &= \mathrm{Hom}\left( \mathbb{Z}[1/p], \bar{k}^{\times} \times U_{C}^+ \right) \\ &= \mathrm{Hom}\left( \mathbb{Z}[1/p], \bar{k}^{\times} \right) \times \mathrm{Hom}\left( \mathbb{Z}[1/p], U_{C}^+ \right) \end{aligned}$$

由于在完美域 $\bar{k}$ 中每个元素都有唯一的 $p$ 次方根，故有 $\mathrm{Hom}(\mathbb{Z}[1/p], \bar{k}^{\times}) = \bar{k}^{\times}$。
3. 类似地，有 $U_R^+ = \{ x \in R \mid x^{(n)} \in U_{C}^+ \} = \mathrm{Hom}(\mathbb{Z}[1/p], U_{C}^+)$，从而得到因子分解 $U_R = \bar{k}^{\times} \times U_R^+$。
4. 因为 $(U_R^1)^{p^n} = \{ x \in U_R^1 \mid v(x-1) \ge p^n \}$，所以映射 $U_R^1 \to \varprojlim_{n \in \mathbb{N}} U_R^1 / (U_R^1)^{p^n}$ 是拓扑群的同构 。对于 $x \in U_R^+$，有 $v(x-1) > 0$，所以当 $n$ 足够大时 $v(x^{p^n}-1) = p^n v(x-1) \ge 1$，即 $x^{p^n} \in U_R^1$。反之， $U_R^1$ 中的元素在 $U_R^+$ 中有唯一的 $p^n$ 次方根。故有同构：

$$\begin{aligned} \mathbb{Q}_p \otimes_{\mathbb{Z}_p} U_R^1 &\longrightarrow U_R^+ \\ p^{-n} \otimes u &\longmapsto u^{p^{-n}} \end{aligned}$$

$\square$

> 注: 回忆 $R$ 元素具有的序列形式, 取 $p$ 次幂相当于右移一位, 而 $U_R^1=1+pR$ , 从而 $x\in U_R^1$ 等价于 $x^{(0)}=1$ . 从而 $(U_R^1)^{p^n}$ 就是前 $n$ 位为 $1$ 的子群, $U_R^1 / (U_R^1)^{p^n}$ 相当于截取前 $n$ 位. 在上面 $U_R^1$ 自然成为一个 $\mathbb{Z}_p$-模, 具体来说是这样, 因为 $p^n$ 次幂是右移, 在截断前 $n$ 位意义上取 $p^n$ 次幂会得到 $1$ , 所以取 $\mathbb{Z}_p$ 中元素次幂是很明确的...

## 5.2 Galois群在 $R$ 上的作用

设 $W = W(k)$， $K_0 = \operatorname{Frac}W$，则群 $G_{K_0} = \mathrm{Gal}(\overline{K}/K_0)$ 在 $R$ 和 $\mathrm{Fr}\,R$ 上连续作用：

$$g(x^{(n)})_{n \in \mathbb{N}} = \left( g x^{(n)} \right)_{n \in \mathbb{N}}$$

### 5.2.1 $G_{K_0}$ 的闭子群的不变元素

**命题 5.9** 设 $L$ 是 $\overline{K}$ 中包含 $K_0$ 的扩张，且 $H = \mathrm{Gal}(\overline{K}/L)$。则有：

$$ R^H = R\left(\mathcal{O}_L/p\mathcal{O}_L\right), \quad (\mathrm{Fr}\,R)^H = \mathrm{Frac}\left( R\left(\mathcal{O}_L/p\mathcal{O}_L\right) \right) $$

且 $R^H$ 的剩余域为 $k_L = \bar{k}^H$，即 $L$ 的剩余域。

**证明**：设 $x \in R^H$（或 $\mathrm{Fr}\,R^H$）。将其写为 $x = (x^{(n)})_{n \in \mathbb{N}}$，其中 $x^{(n)} \in \mathcal{O}_{C}$（或 $C$）。对于 $h \in H$，有 $h(x) = (h(x^{(n)}))_{n \in \mathbb{N}}$。因此：

$$x \in R^H \text{ (或 } \mathrm{Fr}\, R^H \text{)} \iff \forall n \in \mathbb{N}, \, x^{(n)} \in \left(\mathcal{O}_{C}\right)^H \text{ (或 } C^H \text{)}$$

由以下已知事实 ( 4.9 ) 可得第一部分结论：

$$\begin{aligned}C^H &= \widehat{L}\\\left(\mathcal{O}_{C}\right)^H &= \mathcal{O}_{C^H} = \mathcal{O}_{\widehat{L}} = \varprojlim_{n} \mathcal{O}_L/p^n\mathcal{O}_L\end{aligned}$$

映射 $\bar{k} \to R \to \bar{k}$ 诱导了映射 $k_L \to R^H \to k_L$，其复合映射为恒等映射，由此可知 $R^H$ 的剩余域是 $k_L$。$\square$

**命题 5.10** 若 $v(L^{\times})$ 是离散的，则：

$$R\left(\mathcal{O}_L/p\mathcal{O}_L\right) = R^H = k_L$$

当 $L$ 为 $K_0$ 的有限扩张时，其赋值确实是离散的。

**证明**：根据命题 5.9 的证明，可知 $k_L \subset R^H = R(\mathcal{O}_L/p\mathcal{O}_L)$。只需证明：若 $x = (x^{(n)})_{n \in \mathbb{N}} \in R^H$ 满足 $v(x) > 0$，则 $x = 0$。我们有 $v(x^{(n)}) = p^{-n} v(x^{(0)})$。然而 $v(\widehat{L}^{\times}) = v(L^{\times})$ 是离散的，故必定有 $v(x) = v(x^{(0)}) = +\infty$，这说明 $x = 0$。$\square$

---

### 5.2.2 $R(\mathcal{O}_{K_0^{\mathrm{cyc}}}/p\mathcal{O}_{K_0^{\mathrm{cyc}}})$，$\varepsilon$ 与 $\pi$

在 $R$ 中，我们指定两个特殊元素 $\varepsilon$ 和 $\pi$：
*   (i) $\varepsilon = (1, \varepsilon^{(1)}, \dots)$ 满足 $\varepsilon^{(0)} = 1$ 且 $\varepsilon^{(1)} \ne 1$；
*   (ii) $\pi = \varepsilon - 1$。

由此， $\varepsilon^{(n)}$ 是 $\overline{K}$ 中的本原 $p^n$ 次单位根，并满足相容性条件 $(\varepsilon^{(n+1)})^p = \varepsilon^{(n)}$ , 从而

$$ L^{\mathrm{cyc}} = \bigcup_{n \in \mathbb{N}} L\left(\varepsilon^{(n)}\right) $$

**引理 5.11**： 元素 $\varepsilon = (\varepsilon^{(n)})_{n \in \mathbb{N}}$ 和 $\pi$ 是 $R(\mathcal{O}_{K_0^{\mathrm{cyc}}}/p\mathcal{O}_{K_0^{\mathrm{cyc}}})$ 中的元素，满足 $v(\pi) = \frac{p}{p-1} > 1$ 且 $\varepsilon \in U_R^1$。此外，对于任意 $g \in G_{K_0}$，有：

$$ g(\varepsilon) = \varepsilon^{\chi(g)}, \quad g(\pi) = (1+\pi)^{\chi(g)} - 1 \quad (5.9) $$

从而作为 $G_{K_0}$-模，有 $\varepsilon^{\mathbb{Z}_p} \cong \mathbb{Z}_p(1)$。

**证明**：注意到 $\pi^{(0)} = \lim_{m \to +\infty} (\varepsilon^{(m)} - 1)^{p^m}$。由于 $\varepsilon^{(0)} - 1 = 0$，且对任意 $m \ge 1$ 有 $v(\varepsilon^{(m)} - 1) = \frac{1}{(p-1)p^{m-1}}$ 
> 注:  回忆

$$1-X^{p^{n}}=\prod _{i=0}^{p^n-1}(1-\zeta_{p^n}^jX)$$

考虑到得到 $p=\prod (1-\zeta^i)$ , 诸 $1-\zeta^i$ 相伴所以赋值相同, 因此 $v(1-\varepsilon^{(1)})=\frac{1}{p-1}$ . 而

$$(1-\zeta_{p^m})(1+\zeta_{p^m}+\cdots+\zeta_{p^m}^{p^{m-1}-1})=1-\varepsilon^{(1)}$$

左边相当于代入 $n=m-1, X=\zeta_{p^m}$ , 得到 $\prod _{i=0}^{p^{m-1}-1}(1-\zeta_{p^m}\zeta_{p^{n-1}}^j)$ . 诸 $1-\zeta_{p^m}\zeta_{p^{m-1}}^j$ 皆相伴, 从而 $v(1-\varepsilon^{(m)})=\frac{1}{p^{m-1}}v(1-\varepsilon^{(1)})=\frac{1}{(p-1)p^{m-1}}$ . 

回忆 $\frac{X^p-1}{X-1}$ 代入 $X=1$ 得到 $p=\prod (1-\zeta^i)$ , 诸 $1-\zeta^i$ 相伴所以赋值相同, 因此 $v(1-\varepsilon^{(1)})=\frac{1}{p-1}$ . 而对 $\frac{X^{p^{n-1}}-1}{X-1}=\prod (X-\zeta_{p^{n-1}}^j)$ 代入 $\zeta_{p^n}$ 

因此有：

$$ v(\pi) = v\left(\pi^{(0)}\right) = \frac{p}{p-1} > 1 $$

这说明 $\varepsilon = (\varepsilon^{(n)})_{n \in \mathbb{N}}$ 是 $R(\mathcal{O}_{K_0^{\mathrm{cyc}}}/p\mathcal{O}_{K_0^{\mathrm{cyc}}})$ 中的单位，且属于 $U_R^1$。$\square$

令 $H = H_{K_0} = \mathrm{Gal}(\overline{K}/K_0^{\mathrm{cyc}})$。根据命题 5.9， $R^H = R(\mathcal{O}_{K_0^{\mathrm{cyc}}}/p\mathcal{O}_{K_0^{\mathrm{cyc}}})$ 的剩余域为 $k$。
因为 $\pi \in R^H$ 且 $v(\pi) = v_p(\pi^{(0)}) = \frac{p}{p-1} > 1$，且剩余域 $k \subset R^H$，以及 $R^H$ 是完备的，我们有：

$$ k[[\pi]] \subset R^H \quad \text{和} \quad k((\pi)) \subset (\mathrm{Fr}\,R)^H $$

若 $x = (x^{(n)})_{n \in \mathbb{N}} \in R^H$ 且 $x = y^p$，则 $y = (x^{(n+1)})_{n \in \mathbb{N}} \in R^H$。因为 $R^H$ 和 $(\mathrm{Fr}\,R)^H$ 都是完美且完备的，从而有：

$$ k[[\pi]]^{\mathrm{rad}} \subset R^H, \quad k((\pi))^{\mathrm{rad}} \subset (\mathrm{Fr}\,R)^H $$

**定理 5.12**： 对于 $H = H_{K_0} = \mathrm{Gal}(\overline{K}/K_0^{\mathrm{cyc}})$，有：

$$ k[[\pi]]^{\mathrm{rad}} = R^H, \quad \widehat{k((\pi))^{\mathrm{rad}}} = (\mathrm{Fr}\,R)^H $$

此外，对于任意 $m \in \mathbb{N}$，投影映射 $\theta_m : R \to \mathcal{O}_{\overline{K}}/p\mathcal{O}_{\overline{K}}, \, \theta_m((xn)_{n\in\mathbb{N}}) = x_m$ 的像为：

$$ \theta_m\left(R^H\right) = \mathcal{O}_{K_0^{\mathrm{cyc}}}/p\mathcal{O}_{K_0^{\mathrm{cyc}}} $$

*   **证明**：
    令 $E_0 = k((\pi))$， $F = E_0^{\mathrm{rad}}$， $L = K_0^{\mathrm{cyc}} = \bigcup_{n \ge 1} K_0(\varepsilon^{(n)})$。
    只需证明 $\mathcal{O}_F$ 在 $R^H$ 中稠密。因为 $R^H$ 是 $\mathcal{O}_L/p\mathcal{O}_L$ 的逆极限，该命题等价于证明：对于所有 $m \in \mathbb{N}$，有：
    

$$ \theta_m(\mathcal{O}_F) = \mathcal{O}_L/p\mathcal{O}_L $$

    这就需要证明 $\mathcal{O}_L/p\mathcal{O}_L \subset \theta_m(\mathcal{O}_F)$ 恒成立。
    设 $\varpi_n = \varepsilon^{(n)} - 1$，则：
    

$$ \mathcal{O}_{K_0}\left[\varepsilon^{(n)}\right] = W[\varpi_n], \quad \mathcal{O}_L = \bigcup_{n=0}^{\infty} W[\varpi_n] $$

    记 $\pi = (\pi_n)_{n \in \mathbb{N}}$。则 $\pi_n = \varepsilon_n - 1$ 是 $\varpi_n$ 在 $\mathcal{O}_L/p\mathcal{O}_L$ 中的像。因此 $\mathcal{O}_L/p\mathcal{O}_L$ 是一个作为 $k$-代数由 $\pi_n$ 生成的 $k$-代数。
    由于 $k \subset \mathcal{O}_{E_0}$，我们只需证明，对于所有的 $m, n \in \mathbb{N}$，有：
    

$$ \pi_n \in \theta_m(\mathcal{O}_F) = \theta_m\left(k[[\pi]]^{\mathrm{rad}}\right) $$

    对于任意 $s \in \mathbb{Z}$， $\pi^{p^{-s}} \in k[[\pi]]^{\mathrm{rad}}$，且有：
    

$$
    \begin{aligned}
    \pi^{p^{-s}} &= \varepsilon^{p^{-s}} - 1
    \\
    &= \left(\varepsilon^{(n+s)}\right)_{n \in \mathbb{N}} - 1
    \\
    &= \left(\varepsilon_{n+s} - 1\right)_{n \in \mathbb{N}}
    \end{aligned}
    $$

    其中若 $n < 0$ 则 $\varepsilon^{(n)} = 1$。当 $n+s \ge 0$ 时， $\varepsilon_{n+s} - 1 = \pi_{n+s}$。令 $s = n-m$，我们得到：
    

$$ \pi_n = \theta_m\left(\pi^{p^{m-n}}\right) \in \theta_m\left(k[[\pi]]^{\mathrm{rad}}\right) $$

    证毕。

---

### 5.2.3 基本定理（第122-124页）

**定理 5.13**： 设 $E_0^s$ 是 $E_0 = k((\pi))$ 在 $\mathrm{Fr}\,R$ 中的可分闭包，则 $E_0^s$ 在 $\mathrm{Fr}\,R$ 中稠密，且在 $G_{K_0}$ 的作用下保持稳定。此外，对于任意 $g \in \mathrm{Gal}(\overline{K}/K_0^{\mathrm{cyc}})$，有：

$$ g|_{E_0^s} \in \mathrm{Gal}\left(E_0^s/E_0\right) $$

并且映射 $\mathrm{Gal}(\overline{K}/K_0^{\mathrm{cyc}}) \to \mathrm{Gal}(E_0^s/E_0), \, g \mapsto g|_{E_0^s}$ 是群同构。

*   **证明**：
    1.  **稠密性证明**：
        由于 $E_0^s$ 是可分闭的，其完备化 $\widehat{E_0^s}$ 是代数闭的。设 $\overline{E}_0$ 为 $E_0$ 在 $\mathrm{Fr}\,R$ 中的代数闭包。只需证 $\overline{E}_0$ 在 $\mathrm{Fr}\,R$ 中稠密，即 $\mathcal{O}_{\overline{E}_0}$ 在 $R$ 中稠密。
        由于 $R$ 是 $\mathcal{O}_{\overline{K}}/p\mathcal{O}_{\overline{K}}$ 的逆极限，这等价于证明对于所有的 $m \in \mathbb{N}$，有 $\theta_m(\mathcal{O}_{\overline{E}_0}) = \mathcal{O}_{\overline{K}}/p\mathcal{O}_{\overline{K}}$。由于 $\overline{E}_0$ 代数闭，只需证明：
        

$$ \theta_0\left(\mathcal{O}_{\overline{E}_0}\right) = \mathcal{O}_{\overline{K}}/p\mathcal{O}_{\overline{K}} $$

        因为 $\mathcal{O}_{\overline{K}} = \varinjlim \mathcal{O}_L$（对所有有限 Galois 扩张 $L/K_0$ 取极限），我们只需对任何有限 Galois 扩张 $L/K_0$ 验证：
        

$$ \mathcal{O}_L/p\mathcal{O}_L \subset \theta_0\left(\mathcal{O}_{\overline{E}_0}\right) \quad (5.10) $$

        
        令 $K_{0,n} = K_0(\varepsilon^{(n)})$ 且 $L_n = K_{0,n} L$。则 $L_n/K_{0,n}$ 是 Galois 扩张，其 Galois 群为 $J_n = \mathrm{Gal}(L_n/K_{0,n})$。对于足够大的 $n$，有 $J_n = J_{n+1} = \dots =: J$。
        由于 $\bar{k} \subset \mathcal{O}_{\overline{E}_0}$，通过将 $K_0$ 替换为有限无歧路扩张，可以假设 $L_n/K_{0,n}$ 对任意 $n$ 都是完全歧路的。
        设 $\nu_n$ 为 $\mathcal{O}_{L_n}$ 的最大理想的生成元，则由于完全歧路性质，有 $\mathcal{O}_{L_n} = \mathcal{O}_{K_{0,n}}[\nu_n]$。
        由于 $\theta_0(\mathcal{O}_{\overline{E}_0}) \supset \mathcal{O}_{K_{0,n}}/p\mathcal{O}_{K_{0,n}}$，为了证明公式 (5.10)，只需证明存在 $n$ 使得 $\bar{\nu}_n \in \theta_0(\mathcal{O}_{\overline{E}_0})$（其中 $\bar{\nu}_n$ 是 $\nu_n$ 在 $\mathcal{O}_{L_n}/p\mathcal{O}_{L_n}$ 中的像）。
        
        设 $P_n(X) \in K_{0,n}[X]$ 是 $\nu_n$ 的极小多项式（Eisenstein 多项式）。当 $n$ 足够大时， $P_n$ 的次数为 $d = |J|$。写为 $P_n(X) = \prod_{g \in J} (X - g(\nu_n))$。我们引用以下引理：

    **引理 5.14**： 对于任意 $g \in J$ 且 $g \ne 1$，当 $n \to +\infty$ 时，有 $v(g(\nu_n) - \nu_n) \to 0$。

    2.  **公式 (5.10) 的推导**：
        选择足够大的 $n$ 使得对于所有 $g \ne 1$ 都有 $v(g(\nu_n) - \nu_n) < 1/d$。
        设 $\overline{P}_n(X) \in \mathcal{O}_{K_{0,n}}[X]/p\mathcal{O}_{K_{0,n}}[X]$ 是多项式 $P_n(X) \pmod p$。
        我们选择 $Q(X) \in \mathcal{O}_{\overline{E}_0}[X]$ 为首一的 $d$ 次多项式，它是 $\overline{P}_n(X)$ 的一个提升。设 $x$ 是 $Q(X)$ 的一个根，记 $\beta = \theta_0(x)$。
        设 $b \in \mathcal{O}_{\overline{K}}$ 是 $\beta$ 的一个提升，则存在 $g_0 \in J$ 使得对所有的 $g \in J$ 都有 $v(b - g_0\nu_n) \ge v(b - g\nu_n)$。
        注意到：
        

$$ P_n(b) = \prod_{g \in J} (b - g\nu_n) \quad \text{且} \quad v(P_n(b)) \ge 1 $$

        我们得到：
        

$$ v\left(g_0^{-1} b - \nu_n\right) = v\left(b - g_0\nu_n\right) \ge \frac{1}{d} > v\left(\nu_n - g(\nu_n)\right), \quad \forall g \in J \setminus \{1\} $$

        根据 Krasner 引理，有 $\nu_n \in K_{0,n}(g_0^{-1}b)$。从而 $\bar{\nu}_n \in \theta_0(\mathcal{O}_{\overline{E}_0})$。这便证明了公式 (5.10)。

    3.  **同构性质的证明**：
        对于任意 $a \in E_0^s$，设其在 $E_0[X]$ 上的极小可分多项式为 $P(X) = \sum_{i=0}^d \lambda_i X^i$ 满足 $P(a) = 0$。由于：
        

$$ g(\pi) = (1+\pi)^{\chi(g)} - 1 $$

        可知 $g(E_0) = E_0$，故 $g(a)$ 也是可分多项式 $g(P)$ 的根，从而 $g(a) \in E_0^s$。这就给出了群同态：
        

$$ \mathrm{Gal}\left(\overline{K}/K_0^{\mathrm{cyc}}\right) \longrightarrow \mathrm{Gal}\left(E_0^s/E_0\right) $$

        *   **单射性**： 若 $g$ 属于该同态的核，则 $g$ 在 $E_0^s$ 上恒等。由于 $E_0^s$ 在 $\mathrm{Fr}\,R$ 中稠密且 $g$ 作用连续， $g$ 作用在 $\mathrm{Fr}\,R$ 上也恒等。因为 $\theta_0 : \mathrm{Fr}\,R \to C$ 是满射，这意味着 $g$ 在 $C$ 上也恒等，故 $g = 1$。
        *   **满射性**： 将 $H = \mathrm{Gal}(\overline{K}/K_0^{\mathrm{cyc}})$ 视为 $\mathrm{Gal}(E_0^s/E_0)$ 的闭子群。若不是满射，则存在 proper 可分扩张：
            

$$ E_0 \subsetneq F = \left(E_0^s\right)^H \subset (\mathrm{Fr}\,R)^H = \widehat{E_0^{\mathrm{rad}}} $$

            这与以下引理矛盾。

**引理 5.15**： 设 $E$ 是特征为 $p > 0$ 的完备域。在 $\widehat{E^{\mathrm{rad}}}$ 中不存在 $E$ 的非平凡可分扩张。

*   **证明**：
    若不然，设 $E'/E$ 是包含于 $\widehat{E^{\mathrm{rad}}}$ 中的非平凡有限可分扩张。存在 $d = [E':E] > 1$ 个不同的 $E$-嵌入 $\sigma_1, \dots, \sigma_d : E' \to E^s$。
    我们可以通过定义 $\sigma_i(a) = \sigma_i(a^{p^n})^{p^{-n}}$ 将每个 $\sigma_i$ 自然地连续延拓到 $E'^{\mathrm{rad}}$，进而延拓到 $\widehat{E'^{\mathrm{rad}}} = \widehat{E^{\mathrm{rad}}}$。
    然而，由于 $\sigma_i$ 在 $E^{\mathrm{rad}}$ 上是恒等映射，其在完备化 $\widehat{E^{\mathrm{rad}}}$ 上也必定是恒等映射。这与存在多个不同的嵌入相矛盾。

---

### 5.2.4 $E$ 系列中的域（第124-125页）

设定 $E_0 := k((\pi))$，且 $E_0^s$ 为其在 $\mathrm{Fr}\,R$ 中的可分闭包。

**定义 5.16** 设定以下记号：

$$ E^+ := \mathcal{O}_{E^s} \subset E = \mathrm{Frac}\left(E^+\right) := E_0^s \quad (5.11) $$

$$ \widetilde{E}^+ := R \subset \widetilde{E} := \mathrm{Fr}\,R \quad (5.12) $$

若 $L$ 是 $\overline{K}$ 中 $K_0$ 的有限扩张，设定：

$$ E_L^+ := \left(E^+\right)^{H_L}, \quad E_L := E^{H_L} \quad (5.13) $$

$$ \widetilde{E}_L^+ := \left(\widetilde{E}^+\right)^{H_L}, \quad \widetilde{E}_L := \widetilde{E}^{H_L} \quad (5.14) $$

*   **注记 5.17：** 上标 $+$ 表示整数环， $\sim$ 表示完备化。

**命题 5.18** 对于 $K_0$ 的有限扩张 $L$，令 $n(L)$ 为引理 4.11 所给出的常数， $k_L^c$ 为 $L^{\mathrm{cyc}}$ 的剩余域。则有：

$$ E_L^+ = \left\{ (x_n) \in R \;\middle|\; x_n \in \mathcal{O}_{L\left(\varepsilon^{(n)}\right)}/p, \, x_{n+1}^p = x_n \text{ 对所有 } n \ge n(L) \right\} \quad (5.15) $$

$$ \widetilde{E}_L^+ = R\left(\mathcal{O}_{L^{\mathrm{cyc}}}/p\mathcal{O}_{L^{\mathrm{cyc}}}\right) = \left\{ (x_n) \;\middle|\; x_n \in \mathcal{O}_{L^{\mathrm{cyc}}}/p, \, x_{n+1}^p = x_n \right\} \quad (5.16) $$

且：

$$ E_L = E_L^+\left[\frac{1}{\pi_L}\right] = k_L^c((\pi_L)), \quad \widetilde{E}_L = \widetilde{E}_L^+\left[\frac{1}{\pi_L}\right] = \widehat{k_L^c((\pi_L))^{\mathrm{rad}}} \quad (5.17) $$

其中 $\pi_L$ 是 $E_L$ 的任意素元（uniformizer）。

*   **证明关键步骤：**
    根据命题 5.9，直接得到公式 (5.16)：
    

$$ \widetilde{E}_L^+ = R\left(\mathcal{O}_{L^{\mathrm{cyc}}}/p\right) $$

    根据定理 5.13，有 $\widetilde{E}_L = \widehat{E_L^{\mathrm{rad}}}$。因此 $E_L$ 的剩余域也是 $k_L^c$，且有 $E_L = k_L^c((\pi_L))$ 与 $\widetilde{E}_L = \widehat{k_L^c((\pi_L))^{\mathrm{rad}}}$。
    $E_L$ 是 $\widetilde{E}_L$ 的子域，并满足 $E_L^{H_{K_0}/H_L} = E_0$。
    若 $L = W(k_L^c)[1/p]$，则 $n(L)=0$，有 $E_L^+ = k_L^c[[\pi]]$ 且 $E_L = k_L^c((\pi))$。
    在一般情况下，令 $L_0 = W(k_L^c)[1/p]$。则 $E_L = E_{L_0}(\pi_L)$。对于 $n \ge n(L)$，有 $\mathrm{Gal}(L(\varepsilon^{(n)})/L_0(\varepsilon^{(n)})) = \dots = H_{L_0}/H_L := J$。令：
    

$$ X = \left\{ (x_n) \in R \;\middle|\; x_n \in \mathcal{O}_{L\left(\varepsilon^{(n)}\right)}/p, \, x_{n+1}^p = x_n \text{ 对所有 } n \ge n(L) \right\} $$

    则 $X^J = k_L^c[[\pi]] = E_{L_0}^+$，且 $(\mathrm{Frac}\, X)^J = E_{L_0}$。若 $\pi_L \in X$，则有 $\mathrm{Frac}\, X = X[1/\pi_L]$。其 $J$-不变子域为 $E_{L_0}$，故 $\mathrm{Frac}\,X = E_L$ 且 $X = E_L^+$。问题简化为证明 $E_L$ 在 $X$ 中存在一个素元 $\pi_L$：
    对于 $n \ge n(L)$，设 $L(\varepsilon^{(n)}) = L_0(\varepsilon^{(n)})[\nu_n]$。我们相容地选择 $\nu_n$ 使得：
    

$$ N_{L\left(\varepsilon^{(n+1)}\right)/L\left(\varepsilon^{(n)}\right)}(\nu_{n+1}) = \nu_n $$

    由此可验证 $x = (x_n)_{n \in \mathbb{N}} \in X$（其中 $x_n = \bar{\nu}_n$）即为 $E_L$ 的一个素元。

因为 $\Gamma_{K_0} = G_{K_0}/H_{K_0}$ 作用在 $E_0$ 上， $G_{K_0}$ 作用在 $E$ 上，从而 $\Gamma_L$ 作用在 $E_L$ 上。设定：

$$ \mathbf{E}_L = E^{H_L} = E_L^{\Delta_L} \quad (5.18) $$

则 $\mathbf{E}_L/E_L$ 是 Galois 扩张，其 Galois 群为 $\mathrm{Gal}(\mathbf{E}_L/E_L) = \Delta_L$。记 $\mathbf{E}_0 := E_{K_0}$。

**引理 5.19** 
1.  若 $p \ne 2$，设定：
    

$$ \pi_0 := \sum_{a \in \mathbb{F}_p} \varepsilon^{[a]} \quad (5.19) $$

    其中 $[a] \in \mathbb{Z}_p$ 是 $a$ 的 Teichmüller 代表元。则有：
    *   (i) $\pi_0 \in \mathbf{E}_0$ 且 $\pi_0 = \pi^{p-1}\lambda$，其中 $\lambda \equiv 1 \pmod{\pi}$；
    *   (ii) $\mathbf{E}_0 = k((\pi_0))$。
2.  若 $p = 2$，设定 $\pi_0 := \pi + \pi^{-1}$，则 $\mathbf{E}_0 = k((\pi_0))$。
