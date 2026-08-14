---
title: "morrow-FF-curve-5"
date: 2026-08-10
articleId: morrow-FF-curve-5
category: miscellaneous/inbox/unclassified
---

### 第 5 节：曲线的构造（Construction of the Curve）

Fargues 和 Fontaine 采取的观点是：曲线应当是 **untilt 空间** 的一种enrichment。因此，他们引入并研究了 untilt 空间 $|Y|$ 和 $|Y|/\varphi^\mathbb{Z}$ 上以 $p$ 为变量的各类“全纯函数环”。

固定具有性质 $(\mathrm{Pf}_p)$ 的域 $F$（完美非阿基米德特征 $p$ 域），在不引起混淆时省略下标 $F$ ( 后续的环 $A_{\mathrm{inf}}$ , $B^{b+}$ , $B^b$ , $B^+$ 等都依赖 $F$ ) 。

---

### 5.1 无穷小周期环 $A_{\mathrm{inf}}$（The infinitesimal period ring $A_{\mathrm{inf}}$）

#### 1. Witt 向量基础
设 $W(F)$ 为完美特征 $p$ 域 $F$ 的 $p$-典型 Witt 向量环。每个元素可唯一写为序列 $(\alpha_0, \alpha_1, \dots)$（其中 $\alpha_i \in F$）。加法与乘法由通用多项式给出：$$\begin{aligned}(\alpha_0, \alpha_1, \alpha_2, \dots) + (\beta_0, \beta_1, \beta_2, \dots) &= \left(\alpha_0 + \beta_0, \alpha_1 + \beta_1 - \sum_{i=1}^{p-1}\frac{1}{p}\binom{p}{i}\alpha_0^i\beta_0^{p-i}, \dots\right) \\(\alpha_0, \alpha_1, \alpha_2, \dots) \cdot (\beta_0, \beta_1, \beta_2, \dots) &= (\alpha_0\beta_0, \alpha_0^p\beta_1 + \beta_0^p\alpha_1 + p\alpha_1\beta_1, \dots)
\end{aligned}$$

* $W(F)$ 是完备离散赋值环（DVR），且 $W(F)/pW(F) = F$。
* 任意元素可唯一展开为 $p$-进收敛级数：$$\sum_{n \ge 0} [\alpha_n] p^n = (\alpha_0, \alpha_1^p, \alpha_2^{p^2}, \dots) \quad (\alpha_n \in F)$$其中 $[\alpha] := (\alpha, 0, 0, \dots)$ 为 $\alpha \in F$ 的 Teichmüller 提升。

#### 2. 环 $A_{\mathrm{inf}}$ 的定义与性质
定义整数环 $\mathcal{O}_F$ 的 Witt 向量环为：$$A_{\mathrm{inf}} := W(\mathcal{O}_F) \subseteq W(F)$$即由满足所有系数 $\alpha_n \in \mathcal{O}_F$ 的级数 $\sum_{n \ge 0} [\alpha_n] p^n$ 构成的子环。
* **刻画：** $A_{\mathrm{inf}}$ 是唯一的 $p$-完备、无 $p$-扭且满足 $A_{\mathrm{inf}}/pA_{\mathrm{inf}} = \mathcal{O}_F$ 的环。
* $A_{\mathrm{inf}}$ 是非诺特（non-Noetherian）的大环，但具有明确的结构。

> $A_{\mathrm{inf}}$ 就是Fontaine的 $W(R)$ , 这里 $\mathcal{O}_F=C^{\flat}$ 对应 $R$ 

#### 3. 本原元（Primitive Elements）
设 $\xi = \sum_{n \ge 0} [\alpha_n] p^n \in A_{\mathrm{inf}}$。
* 若 $\alpha_0 \neq 0$ 且存在 $k \ge 0$ 使得 $\alpha_k \in \mathcal{O}_F^\times$，则称 $\xi$ 为**本原元（primitive element）**。
* 满足此条件的最小的 $k$ 称为 $\xi$ 的**次数（degree）**。
* 记 $\mathrm{Prim}_k \subseteq A_{\mathrm{inf}}$ 为所有 $k$ 次本原元的集合。
* **基本性质：** $\mathrm{Prim}_0 = A_{\mathrm{inf}}^\times$，且 $\mathrm{Prim}_k \cdot \mathrm{Prim}_l \subseteq \mathrm{Prim}_{k+l}$。因此，若主理想 $I \subseteq A_{\mathrm{inf}}$ 可由一个 $k$ 次本原元生成，则 $I$ 的任何生成元都必然是 $k$ 次本原元。

**命题 5.1**：在集合 $|Y|$（即 $F$ 的 untilt 的等价类）与 $A_{\mathrm{inf}}$ 中由一次本原元生成的主理想集合之间，存在自然的双射对应：

$$
|Y| \longleftrightarrow \{ A_{\mathrm{inf}} \text{ 中由一次本原元生成的主理想} \}
$$

**证明与构造细节：**
1. 给定满足 $(\mathrm{Pf}_0)$ 的域 $C$，Fontaine 构造了满同态：$$\theta_C : W(\mathcal{O}_{C^\flat}) \longrightarrow \mathcal{O}_C, \quad \sum_{n \ge 0}[\alpha_n]p^n \longmapsto \sum_{n \ge 0} \alpha_n^\sharp p^n$$其中 $\sharp$ 是 untilt 映射。$\ker \theta_C$ 是由 $p - [p^\flat]$ 生成的主理想（其中 $p^\flat \in C^\flat$），该生成元显然是 $W(\mathcal{O}_{C^\flat})$ 中的一次本原元。
2. 设 $y = (C_y, \iota_y) \in |Y|$ 是 $F$ 的一个 untilt，则诱导满同态：$$\theta_y : A_{\mathrm{inf}} = W(\mathcal{O}_F) \xrightarrow[\sim]{\iota_y} W(\mathcal{O}_{C_y^\flat}) \xrightarrow{\quad \theta_{C_y} \quad} \mathcal{O}_{C_y}$$其核 $\mathfrak{p}_y := \ker \theta_y$ 由一次本原元 $\xi_y := p - [\iota_y^{-1}(p^\flat)]$ 生成。由此定义了映射：$$y \longmapsto \mathfrak{p}_y = \ker \theta_y$$

3. 反之，若 $\mathfrak{p} \subseteq A_{\mathrm{inf}}$ 是由一次本原元生成的理想，则可直接验证 $(A_{\mathrm{inf}}/\mathfrak{p})[\frac{1}{p}]$ 确实是一个满足 $(\mathrm{Pf}_0)$ 且 untilt 为 $F$ 的域，从而构成双射。 $\square$

#### 4. 命题 5.1 的推论与 $|Y|$ 上的几何结构
1. **函数观点：** $A_{\mathrm{inf}}$ 的元素可视为 $|Y|$ 上的函数。对 $f \in A_{\mathrm{inf}}$ 及 $y \in |Y|$，定义 $f(y) := \theta_y(f) \in \mathcal{O}_{C_y}$。在此观点下，$p$ 扮演了“自变量”的角色。
2. **拓扑与超度量结构：** 对理想 $I, J \subseteq A_{\mathrm{inf}}$，定义距离：

$$
d(I, J) := \inf \{ \rho \in [0, 1] : I + \mathfrak{a}_\rho = J + \mathfrak{a}_\rho \}
$$

其中 $\mathfrak{a}_\rho := \{f \in A_{\mathrm{inf}} : |f \bmod p|_F \le \rho\}$。
* 限制在一次本原元生成的理想上，$d(-, -)$ 构成超度量（ultrametric）。
* 点 $y$ 到原点的距离定义为 $r(y) := d(\mathfrak{p}_y, 0) \in (0, 1)$。
* 对任意 $\rho > 0$，闭子集 $|Y_\rho| := \{ y \in |Y| : r(y) \ge \rho \}$ 在度量 $d$ 下是**完备的**。空间 $|Y|$ 类似于一个去心开圆盘。

**定理 5.2**：
设 $f \in A_{\mathrm{inf}}$ 是 $k$ 次本原元（$k \ge 1$），则存在 $k$ 个一次本原元 $\xi_1, \dots, \xi_k \in A_{\mathrm{inf}}$ 使得：

$$
f = \xi_1 \cdots \xi_k
$$

**推论 5.3**：（$A_{\mathrm{inf}}$ 的魏尔斯特拉斯因式分解）
设 $f \in A_{\mathrm{inf}}$ 是 $k$ 次本原元（$k \ge 1$），则存在非零元 $x_1, \dots, x_k \in \mathfrak{m}_F$ 以及单位 $u \in A_{\mathrm{inf}}^\times$，使得：

$$
f = u(p - [x_1]) \cdots (p - [x_k])
$$

**证明与牛顿多边形方法：**
* 任何一次本原元模去单位均可写为 $p - [x]$（$x \in \mathfrak{m}_F \setminus \{0\}$），故定理 5.2 蕴含推论 5.3。
* 为证定理 5.2，只需证明 $f$ 作为 $|Y|$ 上的函数必有零点：
  设 $f = \sum_{n \ge 0} [\alpha_n] p^n$，由点集 $(n, -\log_p |\alpha_n|_F)_{n \ge 0}$ 绘制平面 $\mathbb{R}^2$ 中的递减牛顿多边形 $\mathrm{Newt}(f)$。$\mathrm{Newt}(f)$ 的斜率对应于零点 $x_i$ 的赋值。利用斜率构造近似零点，并在完备空间 $|Y_\rho|$ 中取极限得到精确零点 $y \in |Y|$（即 $f(y) = 0$）。
  从而 $f$ 可被 $\xi_y$ 整除：$f = g \xi_y$，其中 $g \in A_{\mathrm{inf}}$ 必然是 $k-1$ 次本原元。通过对次数 $k$ 进行归纳即完成证明。 $\square$

---

### 5.2 变量 $p$ 的全纯函数环（Holomorphic functions on $|Y|$ in the variable $p$）

#### 1. 周期环间的包含关系图表

```tikz {embedFontCss=true}
\begin{tikzcd}[row sep=large, column sep=1.2em]
A_{\mathrm{inf}} \ar[r, phantom, "\subseteq"] \ar[d, phantom, "\subseteq" rotate=-90] & B^{b+} \ar[r, phantom, "\subseteq"] \ar[d, phantom, "\subseteq" rotate=-90] & B^+ \text{ (bounded functions on } |Y|\text{)} \ar[r, phantom, "\subseteq"] \ar[d, phantom, "\subseteq" rotate=-90] & B_{\mathrm{crys}}^+ \ar[r, phantom, "\subseteq"] \ar[d, phantom, "\subseteq" rotate=-90] & B_{\mathrm{dR}}^+ \ar[d, phantom, "\subseteq" rotate=-90] \\
W(F)\left[\frac{1}{p}\right] & B^b \ar[l, phantom, "\supseteq"] \ar[r, phantom, "\subseteq"] & B \text{ (functions on } |Y|\text{)} & B_{\mathrm{crys}} \ar[r, phantom, "\subseteq"] & B_{\mathrm{dR}} \\
& & & B_e \ar[u, phantom, "\subseteq" rotate=-90] &
\end{tikzcd}
```

#### 2. 不完备函数环 $B^{b+}$ 与 $B^b$
取定非零元 $\pi \in \mathfrak{m}_F$：

$$
\begin{aligned}
B^{b+} &:= A_{\mathrm{inf}}\left[\frac{1}{p}\right] = \left\{ \sum_{n \gg -\infty} [\alpha_n] p^n : \alpha_n \in \mathcal{O}_F \right\} \\
B^b &:= A_{\mathrm{inf}}\left[\frac{1}{p}, \frac{1}{[\pi]}\right] = \left\{ \sum_{n \gg -\infty} [\alpha_n] p^n : \alpha_n \in F, \, |\alpha_n|_F \text{ 当 } n \to \infty \text{ 时有界} \right\}
\end{aligned}
$$

对任意 $y \in |Y|$，同态 $\theta_y$ 可延拓为 $\theta_y : B^b \to C_y$，故 $B^{b+}, B^b$ 中的元素可视为 $|Y|$ 上的函数：$f(y) := \theta_y(f)$。

#### 3. Gauss 范数与完备化环 $B^+, B$
对 $\rho \in (0, 1)$，在 $B^b$ 上定义 Gauss 范数：

$$
\|\cdot\|_\rho : B^b \longrightarrow \mathbb{R}_{\ge 0}, \quad \left\| \sum_{n \gg -\infty} [\alpha_n] p^n \right\|_\rho := \sup_n |\alpha_n|_F \rho^n
$$

* **性质：** Gauss 范数是乘性的（$\|fg\|_\rho = \|f\|_\rho \|g\|_\rho$），且满足**最大模原理**：当 $0 < \rho_1 \le \rho \le \rho_2 < 1$ 时，

$$
\|f\|_\rho \le \max\{ \|f\|_{\rho_1}, \|f\|_{\rho_2} \}
$$

* **完备化：** 分别将 $B^{b+}$ 和 $B^b$ 关于范数族 $(\|\cdot\|_\rho)_{\rho \in (0, 1)}$ 完备化，得到 Fréchet $\mathbb{Q}_p$-代数 $B^+$ 与 $B$。
* 同态 $\theta_y : B^b \to C_y$ 关于 $\|\cdot\|_{r(y)}$ 连续，延拓为连续同态 $\theta_y : B \to C_y$。
* 主理想 $\mathfrak{p}_y B = \{f \in B : f(y) = 0\}$ 是 $B$ 的闭极大理想。

**命题 5.4**：
映射 $y \mapsto \mathfrak{p}_y B$ 给出了集合 $|Y|$ 与 $B$ 的闭极大理想集合之间的双射。

**证明要点：**
1. 对紧区间 $I = [\rho_1, \rho_2] \subseteq (0, 1)$，定义 $B^b$ 关于范数 $\max\{\|\cdot\|_{\rho_1}, \|\cdot\|_{\rho_2}\}$ 的完备化为 $B_I$（$\mathbb{Q}_p$-Banach 代数），则 $B = \varprojlim_I B_I$。
2. 闭环带 $|Y_I| := \{ y \in |Y| : r(y) \in I \}$ 自然等同于 $B_I$ 的极大理想谱 $\mathrm{MaxSpec}(B_I)$。
3. $B_I$ 是**主理想整环（PID）**：由于 $I$ 是紧区间，任意 $f \in B_I$ 在 $I$ 上的牛顿多边形仅有有限个斜率，从而 $f$ 可以分解为有限个一次本原元的乘积。
4. 取所有紧区间 $I \subseteq (0, 1)$ 的极限，即可得到关于 $B$ 的闭极大理想谱的双射结论。 $\square$

**推论 5.5**：
$\mathrm{Div}^+(Y)$ 与 $B$ 的非零闭理想在乘法下构成的幺半群同构。

**构造与除子理论：**
* 空间 $|Y| = \bigcup_I |Y_I|$ 可视为一条曲线。定义有效除子幺半群：

$$
\mathrm{Div}^+(Y) := \varprojlim_I \mathrm{Div}^+(Y_I) = \left\{ \sum_{y \in |Y|} n_y [y] : n_y \in \mathbb{N}, \, \forall \text{ 紧区间 } I \subseteq (0, 1), \, \mathrm{supp}(D) \cap |Y_I| \text{ 有限} \right\}
$$

* 对应的同构由下式给出：

$$
\mathrm{Div}^+(Y) \xrightarrow{\quad \sim \quad} \{ B \text{ 的非零闭理想} \}, \quad \sum_{y \in |Y|} n_y [y] \longmapsto \{ f \in B : \mathrm{ord}_y(f) \ge n_y, \, \forall y \in |Y| \}
$$

其中 $\mathrm{ord}_y : B \to \mathbb{N} \cup \{\infty\}$ 是由离散赋值环 $B_{\mathfrak{p}_y B}$ 决定的离散赋值。
* 非零元 $f \in B$ 定义除子 $\mathrm{div}(f) := \sum_{y \in |Y|} \mathrm{ord}_y(f)[y] \in \mathrm{Div}^+(Y)$，上述对应亦可写为 $D \mapsto \{ f \in B : \mathrm{div}(f) \ge D \}$。

#### 4. Frobenius 作用与商空间
1. **作用定义：**
   * 在 untilt 空间上：$\varphi(C, \iota) = (C, \iota \circ \varphi_F)$；
   * 在代数环上：$\varphi(\sum [\alpha_n]p^n) := \sum [\alpha_n^p]p^n$。此自构延拓至 $B^{b+}, B^b, B^+, B$，并诱导同构 $\varphi : B_{[\rho_1, \rho_2]} \xrightarrow{\sim} B_{[\rho_1^p, \rho_2^p]}$。
2. **拓扑性质：**
   * $\xi \in \mathrm{Prim}_1 \iff \varphi^{-1}(\xi) \in \mathrm{Prim}_1$；
   * 度量关系：$d(\varphi(y_1), \varphi(y_2)) = d(y_1, y_2)^{1/p}$，且 $r(\varphi(y)) = r(y)^{1/p}$；
   * 群 $\varphi^\mathbb{Z}$ 在拓扑空间 $|Y|$ 上的作用是**真正不连续的（properly discontinuous）**，商空间 $|Y|/\varphi^\mathbb{Z}$ 是 Hausdorff 空间，且商映射 $\pi : |Y| \to |Y|/\varphi^\mathbb{Z}$ 是局部同胚。
3. **商除子群：**
   有限除子幺半群 $\mathrm{Div}^+(Y/\varphi^\mathbb{Z})$ 通过拉回嵌入识别为不变除子：

$$
\mathrm{Div}^+(Y/\varphi^\mathbb{Z}) \lhook\joinrel\longrightarrow \mathrm{Div}^+(Y), \quad \sum_{y \in |Y|/\varphi^\mathbb{Z}} n_y [y] \longmapsto \sum_{y \in |Y|} n_{\pi(y)} [y]
$$

对任意非零 $f \in B^{\varphi=p^k}$，其除子满足 $\mathrm{div}(f) \in \mathrm{Div}^+(Y/\varphi^\mathbb{Z})$，从而诱导幺半群态射：

$$
\mathrm{div} : \bigsqcup_{k \ge 0} (B \setminus \{0\})^{\varphi=p^k} \longrightarrow \mathrm{Div}^+(Y/\varphi^\mathbb{Z})
$$

---

**定理 5.6**：
幺半群态射

$$
\mathrm{div} : \left( \bigsqcup_{k \ge 0} (B \setminus \{0\})^{\varphi=p^k} \right) \Big/ \mathbb{Q}_p^\times \xrightarrow{\quad \sim \quad} \mathrm{Div}^+(Y/\varphi^\mathbb{Z})
$$

是一个同构。

**证明细节：**
* **单射性：**
  若非零元 $f, g \in B$ 满足 $\mathrm{div}(f) = \mathrm{div}(g)$，则在每个主理想整环 $B_I$ 中，$f$ 与 $g$ 均相差一个唯一的单位。在极限下存在 $u \in B^\times$ 使得 $f = gu$。
  若进一步 $f \in B^{\varphi=p^k}$ 且 $g \in B^{\varphi=p^{k'}}$，则 $u \in B^{\varphi=p^{k-k'}}$。根据牛顿多边形分析：

$$
B^{\varphi=p^{k-k'}} = \begin{cases} \mathbb{Q}_p & k' = k \\ 0 & k' > k \end{cases}
$$

  因此 $k = k'$ 且 $u \in \mathbb{Q}_p^\times$，单射性得证。
* **满射性：**
  $\mathrm{Div}^+(Y/\varphi^\mathbb{Z})$ 由形如 $\sum_{n \in \mathbb{Z}} [\varphi^n(y)]$（$y \in |Y|$）的轨道元素生成。只需对给定的 $y \in |Y|$，找到元素 $t_y \in B^{\varphi=p}$，使得 $\mathrm{div}(t_y) = \sum_{n \in \mathbb{Z}} [\varphi^n(y)]$（即在 $y$ 的所有 $\varphi^\mathbb{Z}$-轨道点处有一阶零点，其余位置无零点与极点）。
  设 $\xi_y = p - [x] \in A_{\mathrm{inf}}$（$x \in \mathfrak{m}_F$）为对应于 $y$ 的一次本原元。
  1. 构造正向无穷乘积：

$$
\Pi^+(\xi_y) := \prod_{n \ge 0} \varphi^n\left(\frac{\xi_y}{p}\right) = \prod_{n \ge 0} \left(1 - \frac{[x^{p^n}]}{p}\right)
$$

     该乘积在 $B^+$ 中收敛，满足 $\xi_y \varphi(\Pi^+(\xi_y)) = p \Pi^+(\xi_y)$，且 $\mathrm{div}(\Pi^+(\xi_y)) = \sum_{n \ge 0} [\varphi^n(y)]$。
  2. 构造负向修正项：由于 $F$ 中存在 Artin–Schreier 根与 $p-1$ 次根，方程 $\varphi(T) = gT$ 对任意 $g \in B^b$ 在 $B^b$ 中均有非零解。特别地，存在非零元 $\Pi^-(\xi_y) \in B^b$ 满足 $\varphi(\Pi^-(\xi_y)) = \xi_y \Pi^-(\xi_y)$，其自动满足 $\mathrm{div}(\Pi^-(\xi_y)) = \sum_{n < 0} [\varphi^n(y)]$。
  3. 令 $t_y := \Pi^-(\xi_y) \Pi^+(\xi_y) \in B^{\varphi=p}$，即满足 $\mathrm{div}(t_y) = \sum_{n \in \mathbb{Z}} [\varphi^n(y)]$，满射性得证。 $\square$

---

### 5.3 曲线的第二种定义（Second definition of the curve）

借助上述全纯函数环及其 Frobenius 特征子空间的除子同构理论，给出 Fargues–Fontaine 曲线的形式化方案定义：

**定义 5.7**：
**Fargues–Fontaine 曲线**（The Fargues–Fontaine curve）是如下定义的方案：

$$
X^{\mathrm{FF}} := \mathrm{Proj}\left( \bigoplus_{k \ge 0} B^{\varphi=p^k} \right)
$$
