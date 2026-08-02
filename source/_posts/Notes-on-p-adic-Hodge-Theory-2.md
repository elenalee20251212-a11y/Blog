---
title: Notes on p-adic Hodge Theory 2
date: 2026-07-17 19:13:13
tags:
---


# 第2章 局部域的 $\ell$-进表示：概述 ( $\ell$-adic representations of local fields: an overview)

设 $G = \text{Gal}(L/K)$ 为 Galois 扩张 $L/K$ 的 Galois 群，配备自然的profinite拓扑。

## 2.1 $\ell$-进 Galois 表示 ($\ell$-adic Galois representations)

### 2.1.1 定义与基本性质

**定义 2.1 (拓扑域上的表示)**：
  设 $E$ 为拓扑域。一个系数在 $E$ 中的 $G$ 的**连续线性表示**（或称**连续 $E$-表示**）是指一个配备了诱导拓扑的有限维 $E$-向量空间 $V$，其上带有 $G$ 的连续线性作用。等价地，它是一个连续群同态：
  $$\rho : G \longrightarrow \text{Aut}_E(V)$$
  表示的维度即为其作为 $E$-向量空间的维度。
  如果 $G = G_K$ 是域 $K$ 的绝对 Galois 群，则这样的表示称为 $K$ 的 **Galois 表示**。

**备注 2.2**：
  1. 若 $\dim V = d$，在给定的 $V$ 的 $E$-基下，有同构 $\text{Aut}_E(V) \cong \text{GL}_d(E)$。因此 $\rho$ 可延伸为同态 $G \to \text{GL}_d(E)$，但该延伸依赖于基的选择。
  2. 若 $E$ 赋予离散拓扑，则连续性条件意味着 $\rho$ 通过包含在 $L$ 内的某个适当的有限 Galois 扩张 $F/K$ 进行分解：
     $$\begin{array}{ccc} G & \xrightarrow{\quad\rho\quad} & \text{Aut}_E(V) \\ \searrow & & \nearrow \vartheta \\ & \text{Gal}(F/K) & \end{array}$$
  3. 假设 $E$ 是数域的完备化。则 $E$ 为 $\mathbb{R}$、$\mathbb{C}$ 或某个素数 $\ell$ 对应的 $\mathbb{Q}_\ell$ 的有限扩张。
  4. 续 Remark 2.2：
     * (i) 若 $E = \mathbb{R}$ 或 $\mathbb{C}$，则 $\rho$ 是连续的充要条件为 $\text{Ker}(\rho)$ 是 $G$ 的开正规子群。
     * (ii) 若 $E$ 是 $\mathbb{Q}_\ell$ 的 $d$ 次有限扩张，且 $V$ 是 $G$ 的维度为 $h$ 的 $E$-线性表示。由于包含关系 $\text{Aut}_E(V) \subset \text{Aut}_{\mathbb{Q}_\ell}(V)$， $V$ 可自然地视为维度为 $hd$ 的 $\mathbb{Q}_\ell$-表示，且有 $E \to \text{Aut}_{\mathbb{Q}_\ell[G]}(V)$。反之，若 $V$ 是 $G$ 的 $\mathbb{Q}_\ell$-线性表示，且配备嵌入 $E \to \text{Aut}_{\mathbb{Q}_\ell[G]}(V)$，则 $V$ 可视为 $G$ 的 $E$-表示。

* **定义 2.3 ($\ell$-adic 表示)**：
  $G$ 的 **$\ell$-进表示（$\ell$-adic representation）** 是一个配备了 $G$ 的连续且线性作用的有限维 $\mathbb{Q}_\ell$-向量空间。特别地，$G_K$ 的表示称为 $K$ 的 $\ell$-进 Galois 表示。

* **定义 2.4 ($\mathbb{Z}_\ell$-表示)**：
  $G$ 的 **$\mathbb{Z}_\ell$-表示** 是一个有限生成的 $\mathbb{Z}_\ell$-模，其上配备了 $G$ 的线性且连续的作用。

* **例子 2.5**：
  1. 平常（trivial）的 $\ell$-进表示是带有平凡 $G$ 作用的 $\mathbb{Q}_\ell$。平凡的 $\mathbb{Z}_\ell$-表示是 $\mathbb{Z}_\ell$。
  2. 被 $\ell$ 消灭的 $\mathbb{Z}_\ell$-表示等同于 $\mathbb{F}_\ell$-表示。

* **例子 2.6 (1 维表示)**：
  若 $V$ 是 $G$ 的 1 维连续 $\ell$-进表示，写成 $V = \mathbb{Q}_\ell e$，则 $g(e) = \eta(g)e$。映射 $g \mapsto \eta(g)$ 是一个连续同态 $\eta : G \to \mathbb{Q}_\ell^\times$。反之，给定连续同态 $\eta : G \to \mathbb{Q}_\ell^\times$，通过作用 $g(e) = \eta(g)e$ 定义的 $\mathbb{Q}_\ell \cdot e$ 构成一个 1 维 $\ell$-进表示。若 $G = G_K$，则将其记为 $\mathbb{Q}_\ell(\eta)$。
  同理，秩为 1 的自由 $\mathbb{Z}_\ell$-表示由连续同态 $\eta : G \to \mathbb{Z}_\ell^\times$ 唯一确定，记为 $\mathbb{Z}_\ell(\eta)$。

**格（Lattice）的定义**：
  $\mathbb{Q}_\ell$-向量空间 $W$ 中的（全）格是指一个自由 $\mathbb{Z}_\ell$-子模，其生成元构成 $W$ 的一组基。

**引理 2.7 (格的 $G$-稳定性)**：
  对于 $G$ 的任意 $\ell$-进表示 $V$，存在一个 $V$ 的格 $T$，它在 $G$-作用下是稳定的（从而构成 $G$ 的一个自由 $\mathbb{Z}_\ell$-表示）。特别地，存在 $V$ 的一组基，使得表示 $\rho : G \to \text{Aut}_{\mathbb{Q}_\ell}(V) \cong \text{GL}_d(\mathbb{Q}_\ell)$ 通过 $\text{GL}_d(\mathbb{Z}_\ell)$ 进行分解：
  $$\begin{array}{ccc} G & \xrightarrow{\quad\rho\quad} & \text{GL}_d(\mathbb{Q}_\ell) \\ \searrow & & \nearrow \\ & \text{GL}_d(\mathbb{Z}_\ell) & \end{array}$$

**证明步骤**：
    设 $V$ 是一个 $\ell$-进表示。令 $T_0$ 为 $V$ 的一个格，则对于任意 $g \in G$， $g(T_0) = \{g(v) \mid v \in T_0\}$ 也是一个格。
    此外，稳定子 $H = \{g \in G \mid g(T_0) = T_0\}$ 是 $G$ 的开子群，因此商集 $G/H$ 是有限的。求和：
    $$T = \sum_{g \in G} g(T_0) = \sum_{g \in G/H} g(T_0)$$
    是一个有限和。因此 $T$ ( 作为PID上有限生成模) 依然是 $V$ 的一个格，并且在 $G$-作用下是稳定的，从而构成 $G$ 的 $\mathbb{Z}_\ell$-表示。若 $\{e_1, \dots, e_d\}$ 是 $T$ 在 $\mathbb{Z}_\ell$ 上的基，由于它也构成 $V$ 在 $\mathbb{Q}_\ell$ 上的基，因此结论成立。

**备注 2.8 (反向构造与极限)**：
  反之，给定一个 $G$ 的秩为 $d$ 的自由 $\mathbb{Z}_\ell$-表示 $T$，可以通过下式得到一个 $d$ 维 $\ell$-进表示 $V$：
  $$V = \mathbb{Q}_\ell \otimes_{\mathbb{Z}_\ell} T, \quad g(\lambda \otimes t) = \lambda \otimes g(t), \quad \lambda \in \mathbb{Q}_\ell, t \in T$$
  对于所有 $n \in \mathbb{N}$， $G$ 连续作用于配备了离散拓扑的 $T/\ell^n T$ 上。因此我们有：
  $$\begin{array}{ccc} \rho : & G & \longrightarrow \text{Aut}_{\mathbb{Z}_\ell}(T) \quad (\cong \text{GL}_d(\mathbb{Z}_\ell)) \\ & \searrow \rho_n & \downarrow \\ & & \text{Aut}(T/\ell^n T) \quad (\cong \text{GL}_d(\mathbb{Z}/\ell^n\mathbb{Z})) \end{array}$$
  因为 $T/\ell^n T \cong (\mathbb{Z}/\ell^n\mathbb{Z})^d$ 且 $T = \varprojlim_{n\in\mathbb{N}} T/\ell^n T$。
  群 $H_n = \text{Ker}(\rho_n)$ 是 $G$ 的开正规子群，且 $\text{Ker}(\rho) = \bigcap_{n\in\mathbb{N}} H_n$ 是一个闭子群。

* **定义 2.9 (新表示的构造)**：
  设 $V_1, V_2$ 和 $V$ 是 $G$ 的 $\ell$-进表示：
  1. **直和** $V_1 \oplus V_2$，其 $G$-作用为：
     $$g(v_1, v_2) = (gv_1, gv_2) \tag{2.1}$$
  2. **张量积** $V_1 \otimes_{\mathbb{Q}_\ell} V_2$，其 $G$-作用为：
     $$g(v_1 \otimes v_2) = gv_1 \otimes gv_2 \tag{2.2}$$
  3. **对偶表示** $V^*$ 是对偶空间 $\mathcal{L}_{\mathbb{Q}_\ell}(V, \mathbb{Q}_\ell)$，其 $G$-作用为：
     $$g \cdot \phi = (v \mapsto \phi(g^{-1} \cdot v)) \tag{2.3}$$
  4. **$r$-次对称幂** $\text{Sym}^r_{\mathbb{Q}_\ell} V$ 为对应的对称幂向量空间，其上配备从张量积继承而来的 $G$-作用。
  5. **$r$-次外幂** $\bigwedge^r_{\mathbb{Q}_\ell} V$ 为对应的外幂向量空间，其上配备从张量积继承而来的 $G$-作用。

* **备注 2.10**：
  对于有限自由 $\mathbb{Z}_\ell$-模 $T, T_1$ 和 $T_2$，可以类似地定义直和 $T_1 \oplus T_2$、张量积 $T_1 \otimes_{\mathbb{Z}_\ell} T_2$ 和对偶 $T^* = \mathcal{L}_{\mathbb{Z}_\ell}(T, \mathbb{Z}_\ell)$。在自然 $G$-作用下，它们构成自由 $\mathbb{Z}_\ell$-表示。

---

### 2.1.2 $\ell$-进 Galois 表示的例子

设 $K$ 是一个域，$K^s$ 是 $K$ 的可分闭包，$G_K = \text{Gal}(K^s/K)$。

#### (1) 乘法群 $\mathbb{G}_m$ 的 Tate 模

考虑如下精确序列：
$$1 \longrightarrow \mu_{\ell^n}(K^s) \longrightarrow (K^s)^\times \xrightarrow{a \mapsto a^{\ell^n}} (K^s)^\times \longrightarrow 1$$
其中对于任意域 $F$，有：
$$\mu_{\ell^n}(F) = \{a \in F \mid a^{\ell^n} = 1\} \tag{2.4}$$
其具有以下性质：
* 若 $\text{char } K \neq \ell$，则 $\mu_{\ell^n}(K^s) \cong \mathbb{Z}/\ell^n\mathbb{Z}$。
* 若 $\text{char } K = \ell$，则 $\mu_{\ell^n}(K^s) \cong \{1\}$。

当 $\text{char } K \neq \ell$ 时，同态 $\mu_{\ell^{n+1}}(K^s) \to \mu_{\ell^n}(K^s)$ ($a \mapsto a^\ell$) 构成一个逆向系统，从而定义了乘法群 $\mathbb{G}_m$ 的 **Tate 模**：
$$T_\ell(\mathbb{G}_m) = \varprojlim_{n\in\mathbb{N}} \mu_{\ell^n}(K^s) \tag{2.5}$$
$T_\ell(\mathbb{G}_m)$ 是一个秩为 1 的自由 $\mathbb{Z}_\ell$-模。固定一个元素 $t = (\varepsilon_n)_{n\in\mathbb{N}} \in T_\ell(\mathbb{G}_m)$ 使得：
$$\varepsilon_0 = 1, \quad \varepsilon_1 \neq 1, \quad \varepsilon_{n+1}^\ell = \varepsilon_n$$
则 $T_\ell(\mathbb{G}_m) = \mathbb{Z}_\ell t$，其中对 $\lambda \in \mathbb{Z}_\ell$ （$\lambda_n \in \mathbb{Z}$ 且满足 $\lambda \equiv \lambda_n \pmod{\ell^n\mathbb{Z}_\ell}$）：
$$\lambda \cdot t = (\varepsilon_n^{\lambda_n})_{n\in\mathbb{N}}$$
对于任意 $g \in G_K$，有 $g(t) = \chi(g)t$，其中：
$$\chi : G_K \longrightarrow \mathbb{Z}_\ell^\times \tag{2.6}$$
是**分圆特征标（cyclotomic character）**。
因此，$T_\ell(\mathbb{G}_m) = \mathbb{Z}_\ell(\chi)$ 是 $G_K$ 的秩为 1 的自由 $\mathbb{Z}_\ell$-表示。

**记号与 Tate 扭转（Tate twists）**：
在习惯上，写作：
$$T_\ell(\mathbb{G}_m) = \mathbb{Z}_\ell(1), \quad V_\ell(\mathbb{G}_m) = \mathbb{Q}_\ell(1) = \mathbb{Q}_\ell \otimes_{\mathbb{Z}_\ell} \mathbb{Z}_\ell(1) \tag{2.7}$$
设 $\mathbb{Z}_\ell(-1) := \mathbb{Z}_\ell(1)^*$。对于任意 $r \in \mathbb{Z}$，定义：
$$\mathbb{Z}_\ell(r) = \mathbb{Z}_\ell t^r = \begin{cases} \mathbb{Z}_\ell(1)^{\otimes r}, & \text{若 } r > 0; \\ \mathbb{Z}_\ell, & \text{若 } r = 0; \\ \mathbb{Z}_\ell(-1)^{\otimes -r}, & \text{若 } r < 0. \end{cases} \tag{2.8}$$
$$\mathbb{Q}_\ell(r) = \mathbb{Q}_\ell \cdot t^r = \mathbb{Q}_\ell \otimes_{\mathbb{Z}_\ell} \mathbb{Z}_\ell(r) \tag{2.9}$$
那么对所有 $g \in G_K$，有 $g(t^r) = \chi^r(g) \cdot t^r$，且：
$$\mathbb{Z}_\ell(r) = \mathbb{Z}_\ell(\chi^r), \quad \mathbb{Q}_\ell(r) = \mathbb{Q}_\ell(\chi^r)$$
这些表示称为 $\mathbb{Z}_\ell$ 的 **Tate 扭转**。更一般地，对于任意 $\ell$-进表示 $V$，其 Tate 扭转定义为 $V(r) = V \otimes_{\mathbb{Q}_\ell} \mathbb{Q}_\ell(r)$。

---

#### (2) 椭圆曲线的 Tate 模

假设 $\text{char } K \neq 2, 3$。令 $f(X) \in K[X]$ 为 3 次可分多项式：
$$f(x) = \lambda(X - \alpha_1)(X - \alpha_2)(X - \alpha_3)$$
其中 $\alpha_1, \alpha_2, \alpha_3 \in K^s$ 为互不相同的根。令 $E$ 是对应的椭圆曲线 $Y^2 = f(X)$。其在 $K^s$ 上的点集为：
$$E(K^s) = \{(x, y) \in (K^s)^2 \mid y^2 = f(x)\} \cup \{\infty\}$$
其中 $O = \{\infty\}$ 为无穷远点（原点）。
集合 $E(K^s)$ 是一个 Abelian 群，其上有 $G$ 的作用。存在如下精确序列：
$$0 \longrightarrow E[\ell^n] \longrightarrow E(K^s) \xrightarrow{\quad\times\ell^n\quad} E(K^s) \longrightarrow 0$$
其中 $\ell^n$-分点群定义为 $E[\ell^n] = \{P \in E(K^s) \mid \ell^n P = O\}$：
* 若 $\ell \neq \text{char } K$，则 $E[\ell^n] \cong (\mathbb{Z}/\ell^n\mathbb{Z})^2$。
* 若 $\ell = \text{char } K$，则在普通（ordinary）情况下 $E[\ell^n] \cong \mathbb{Z}/\ell^n\mathbb{Z}$，在超奇异（supersingular）情况下 $E[\ell^n] = O$。

结合过渡映射 $E[\ell^{n+1}] \to E[\ell^n]$ ($P \mapsto \ell P$)， $E$ 的 **Tate 模**定义为：
$$T_\ell(E) = \varprojlim_n E[\ell^n] \tag{2.10}$$
$T_\ell(E)$ 是一个自由 $\mathbb{Z}_\ell$-模，其性质如下：
* 若 $\text{char } K \neq \ell$，其秩为 2；
* 若 $\text{char } K = \ell$，其秩为 1 或 0。

令 $V_\ell(E) = \mathbb{Q}_\ell \otimes_{\mathbb{Z}_\ell} T_\ell(E)$，则 $V_\ell(E)$ 是 $G_K$ 的一个维度相应为 2、1 或 0 的 $\ell$-进表示。

---

#### (3) 阿贝尔簇的 Tate 模

阿贝尔簇（Abelian variety）是一个配备了群律的射影光滑簇 $A \times A \to A$。设 $\dim A = g$。
* (i) $A(K^s)$ 是一个 Abelian 群。
* (ii) $\ell^n$-分点群满足：
  * 若 $\text{char } K \neq \ell$，则 $A[\ell^n] \cong (\mathbb{Z}/\ell^n\mathbb{Z})^{2g}$；
  * 若 $\text{char } K = \ell$，则 $A[\ell^n] \cong (\mathbb{Z}/\ell^n\mathbb{Z})^r$，其中 $0 \leq r \leq g$。

由此可以得到 $A$ 的 $\mathbb{Z}_\ell$-表示与 $\ell$-进 Galois 表示：
$$T_\ell(A) = \varprojlim_n A[\ell^n] \cong \begin{cases} \mathbb{Z}_\ell^{2g}, & \text{若 } \text{char } K \neq \ell; \\ \mathbb{Z}_\ell^r, & \text{若 } \text{char } K = \ell. \end{cases} \tag{2.11}$$
$$V_\ell(A) = \mathbb{Q}_\ell \otimes_{\mathbb{Z}_\ell} T_\ell(A) \tag{2.12}$$

---

#### (4) $\ell$-进平展上同调 ($\ell$-adic étale cohomology)

设 $Y$ 是 $K^s$ 上的固有（proper）且光滑的簇（这里 $K^s$ 也可替换为任何代数闭域）。对于 $m \in \mathbb{N}$，上同调群 $H^m(Y_{\text{et}}, \mathbb{Z}/\ell^n\mathbb{Z})$ 是一个被 $\ell^n$ 消灭的有限 Abelian 群。由自然过渡映射：
$$H^m(Y_{\text{et}}, \mathbb{Z}/\ell^{n+1}\mathbb{Z}) \longrightarrow H^m(Y_{\text{et}}, \mathbb{Z}/\ell^n\mathbb{Z})$$
定义的逆向极限 $\varprojlim_n H^m(Y_{\text{et}}, \mathbb{Z}/\ell^n\mathbb{Z})$ 是一个有限生成的 $\mathbb{Z}_\ell$-模。定义：
$$H^m_{\text{et}}(Y, \mathbb{Q}_\ell) = \mathbb{Q}_\ell \otimes_{\mathbb{Z}_\ell} \varprojlim_n H^m(Y_{\text{et}}, \mathbb{Z}/\ell^n\mathbb{Z})$$
则 $H^m_{\text{et}}(Y, \mathbb{Q}_\ell)$ 是一个有限维 $\mathbb{Q}_\ell$-向量空间。
设 $X$ 是 $K$ 上的固有光滑簇，且：
$$Y = X_{K^s} = X \otimes K^s = X \times_{\text{Spec } K} \text{Spec}(K^s)$$
则 $H^m_{\text{et}}(X_{K^s}, \mathbb{Q}_\ell)$ 构成了 $G_K$ 的一个 $\ell$-进表示。

* **例子 2.11**：
  1. 若 $X$ 是一个 $g$ 维阿贝尔簇，则：
     $$H^m_{\text{et}}(X_{K^s}, \mathbb{Q}_\ell) = \bigwedge^m_{\mathbb{Q}_\ell} (V_\ell(X))^*$$
  2. 若 $X = \mathbb{P}^d_K$（射影空间），则：
     $$H^m(\mathbb{P}^d_{K^s}, \mathbb{Q}_\ell) = \begin{cases} 0, & \text{若 } m \text{ 为奇数或 } m > 2d; \\ \mathbb{Q}_\ell\left(-\frac{m}{2}\right), & \text{若 } m \text{ 为偶数，且 } 0 \leq m \leq 2d. \end{cases}$$

* **备注 2.12**：
  该构造可推广到更一般的情况，并可预期推广到动机（motives）。对于 $K$ 上的任何动机 $M$，期望能与其关联一个 $\ell$-进实现化（$\ell$-adic realization）。

---

## 2.2 有限域的 $\ell$-进表示 ($\ell$-adic representations of finite fields)

设 $p$ 为素数，$K = \mathbb{F}_q$ 是大小为 $q = p^f$ 的有限域， $K^s$ 是 $K$ 的一个固定的代数闭包。
* 令 $\varphi_K = (x \mapsto x^q)$ 为 **Frobenius 自同构**。
* 令 $\tau_K = \varphi_K^{-1}$ 为 $K$ 的**几何 Frobenius（geometric Frobenius）**。

这两者都是绝对 Galois 群 $G_K \cong \hat{\mathbb{Z}}$ 的拓扑生成元。
令 $K_n$ 为 $K^s$ 中唯一的 $n$ 次 $K$-扩张。