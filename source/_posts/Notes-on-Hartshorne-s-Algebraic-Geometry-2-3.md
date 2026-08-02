---
title: Notes on Hartshorne's Algebraic Geometry 2-3
date: 2025-11-24 23:47:01
tags:
---
$\rm{Ex.\ 3.1.\ }$ If是trivial的. 下证 only if, 也就是如果 $f:X\to Y$ locally of finite type, 则对任意 $Y$ 的仿射开集 $V=\operatorname{Spec} B$ , $f^{-1}(V)$ 存在仿射开覆盖 $U_j=\operatorname{Spec} (A_j)$ , 其中 $A_j$ 皆为有限生成 $B$-代数. 首先证明一个引理

> 假设 $U,V$ 是scheme $X$ 中的两个仿射开集, 则 $U\cap V$ 存在公共主开集

由于 $U$ 中包含于 $U\cap V$ 的主开集也仿射, 不妨设 $U\subset V$ . 由于 $D(f)$ 可以被内蕴的定义为 $\{ x:f_x\not\in \mathfrak{m}_x \}$ , 所以取 $V$ 中包含于 $U$ 的 $D(f)$ , 则 $f$ 在 $\Gamma(U,\mathcal{O}_U)$ 中的像 $\bar{f}$ 必然定义了相同的主开集, 也就是 $D_V(f)=D_U(\bar{f})$ . 

由引理的证明, 可以用 $V_i, V$ 公共主开集覆盖 $V_i\cap V$ . 取这样的一个公共主开集 $D(h)$ , $h\in B_i$ , 限制 $f$ 得到 $f:\operatorname{Spec} {A}_{ij}\to \operatorname{Spec} B_i$ , 对应环同态 $\varphi:B_i\to {A}_{ij}$ , 则 $f^{-1}(D(h))=D(\varphi(h))$ . 而 ${A}_{ij}$ 是有限生成 $B_i$-代数, 从而 $({A}_{ij})_{\varphi(h)}$ 是有限生成 $(B_i)_h$-代数, $(B_i)_h$ 又是有限生成 $B$-代数. 因此诸 $f^{-1}(D(h))$ 给出了所求的仿射开覆盖. $\square$

$\rm{Ex.\ 3.2.\ }$ 考虑用 $V$ 与 $V_i$ 的公共主开集覆盖 $V$ , 由于仿射开集 $V$ 本身quasi-compact, 所以可以取出有限多个公共主开集 $W_j$ 覆盖 $V$ . 下证 $f^{-1}(W_j)$ 皆拟紧, 从而 $W_j$ 给出所需的开覆盖: 

对任意 $V_i$ 和 $V$ 的公共主开集 $D(h)$ , $h\in \mathcal{O}(V_i)$ , 由于 $f^{-1}(V_i)$ 拟紧, 所以可以取 $X$ 中有限个仿射开集 ${U}_{ij}$ 覆盖 $f^{-1}(V_i)$ . 而对每个仿射开集 ${U}_{ij}$, $f$ 限制在 ${U}_{ij}$ 上对应反向的截面环同态 $\varphi:\mathcal{O}(V_i)\to \mathcal{O}({U}_{ij})$ , 从而这个开集上 $D(h)$ 的原像是 $D(\varphi(h))$ , 是仿射开集从而拟紧, 因此 $f^{-1}(D(h))$ 作为有限多个紧开集的并也是紧的. $\square$

$\rm{Ex.\ 3.3.\ }$ (a) finite type相当于要求locally of finite type并且每个 $f^{-1}(V_i)$ 都quasi-compact, 因此等价性直接来自于定义. (b) 前两题的推论. (c) 此问只需要locally of finite type. 取 $f^{-1}(V)$ 的仿射开覆盖 $U_j=\operatorname{Spec} A_j$ , 对 $\operatorname{Spec} A$ 与 $\operatorname{Spec} A_j$ 的公共主开集 $D(f)$ , 则 $A_g=(A_i)_f$ 是有限生成 $B$-代数. 由于 $\operatorname{Spec} A$ 拟紧, 所以存在有限多这样的公共主开集覆盖 $\operatorname{Spec} A$ . $A$ 的有限生成性由以下引理保证

> 设 $A$ 是 $B$-代数, $f_1,\cdots,f_n\in A$ 且 $\sum r_if_i=1$ , 每个 $A_{f_i}$ 都是有限生成 $B$-代数, 则 $A$ 是有限生成 $B$-代数

对任意 $a\in A$ , 存在 $n_i$ , $f_i^{n_i}a$ 属于 $A_{f_i}$ 的生成元的分子生成的 $B$-代数 , 然而诸 $f_i^{n_i}$ 生成单位理想, 所以全体 $A_{f_i}$ 的生成元的分子与诸 $r_i,f_i$ 生成的 $B$-代数是 $A$. $\square$

$\rm{Ex.\ 3.4.\ }$ 只需证明only if. 取 $V_i$ 和 $V$ 的公共主开集覆盖 $V$ . 对某个公共主开集 $D(g)$ , 由于 $f^{-1}(V_i)=\operatorname{Spec} A_i$ , 所以 $f:f^{-1}(V_i)\to V_i$ 诱导出环同态 $\varphi:B_i\to A_i$ , 从而 $f^{-1}(D(g))=D(\varphi(g))$ 仿射. 由于 $V$ 拟紧从而被有限多个公共主开集覆盖, 存在有限多个 $\varphi(h_1),\cdots,\varphi(h_r)\in \mathcal{O}(f^{-1}(V))$ , 其中 $h_i\in B$ , $X_{\varphi(h_i)}$ 仿射, 且诸 $h_i$ 在 $B$ 中生成单位理想, 所以 $\varphi(h_i)$ 在 $\mathcal{O}(f^{-1}(V))$ 中生成单位理想, 由Ex2.17b, $f^{-1}(V)$ 仿射.

设 $f^{-1}(V)=\operatorname{Spec} (A)$ , $A_i$ 是有限 $B_i$ 模, 局部化得到 $A_{\varphi(h_i)}$ 是有限生成 $B_{h_i}$-模, 则对任意 $a\in A$ , $h_i^{n_i}\cdot a$ 属于 $A_{\varphi(h_i)}$ 生成元分子生成的 $B$-模, 而诸 $h_i^{n_i}$ 生成单位理想, 从而诸 $A_{\varphi(h_i)}$ 生成元的分子的并生成的 $B$-模就是 $A$ . $\square$

$\rm{Ex.\ 3.5.\ }$ (a) 设 $f:f^{-1}(V_i)\to V_i$ 对应的环同态是 $\varphi:B_i\to A_i$, 则 $f^{-1}(y)=\{ x:\varphi^{-1}(x)=y \}$ . 以下交换代数引理保证了 $f^{-1}(y)$ 有限:

> 设 $B$ 是 $A$-代数, $B$ 是有限 $A$-模, 对任意 $A$ 的素理想 $\mathfrak{p}$ , 原像为 $\mathfrak{p}$ 的 $B$ 中素理想有限

考虑 $\mathfrak{p}$ 的剩余域 $k=A_{\mathfrak{p}}/\mathfrak{p}A_{\mathfrak{p}}$ , 基变换至 $\bar{B}=B\otimes _A k$ 得到一个有限维 $k$-线性空间, 从而 $\bar{B}$ 是Artin环, 故 $\bar{B}$ 中素理想有限. 而 $B$ 中原像为 $\mathfrak{p}$ 的素理想一一对应于 $\bar{B}$ 中的素理想. 

(b) 下面证明对任意仿射开集 $V$ , $f:f^{-1}(V)\to V$ 是闭映射, 从而 $f$ 是闭映射. 事实上

> 如果 $B$ 是 $A$-代数, $B$ 在 $A$ 上整, $\varphi:A\to B$ 给出的 $f:\operatorname{Spec} B\to \operatorname{Spec} A$ 是闭映射, 具体来说 $f(V(\mathfrak{b}))=V(\varphi^{-1}(\mathfrak{b}))$

如果 $\varphi$ 是单射, going-up theorem (Atiyah 5.10) 表示 $f$ 是满射. 对一般情况, 考虑 $\varphi$ 诱导出的 $A/\varphi^{-1}(\mathfrak{b})\to B/\mathfrak{b}$ 即可证明  $f(V(\mathfrak{b}))=V(\varphi^{-1}(\mathfrak{b}))$.

(c) 令 $Y=\mathbb{C}[x,y]/(y^2-x^3-x^2)$ , 其中非零素理想相当于 $y^2=x^3+x^2$ 上的点, 则自然有参数化 $\operatorname{Spec} \mathbb{C}[t]\to Y$ , 对应环同态 $x\mapsto t^2-1, y\mapsto t(t^2-1)$ . 现在考虑将 $\operatorname{Spec} \mathbb{C}[t]$ 挖去 $t=1$ , 也就是 $X=\operatorname{Spec} \mathbb{C}[t,\frac{1}{t-1}]$ , 则 $f:X\to Y$ 仍然是满射 (因为 $t=-1$ 时 $(x,y)$ 仍然是 $(0,0)$ ) , 所以 $f$ 满射, finite type, quasi-finite, 然而因为 $\mathbb{C}[t,\frac{1}{t-1}]$ 不在 $\mathbb{C}[x,y]/(y^2-x^3-x^2)$ 上整, 具体来说 $z=1/(t-1)$ 满足 $xz^2-2z-1=0$ 非首一, 所以 $f$ 不finite. $\square$

$\rm{Ex.\ 3.6.\ }$ 回顾Ex.2.9, 任何scheme的任何不可约闭集有唯一generic point, 具体来说考虑任何不可约闭集 $Z$ 和仿射开集 $U$ , 如果 $Z\cap U$ 非空则稠密, 因此 $Z\cap U=V(\mathfrak{p})$  就给出了唯一的generic point $\mathfrak{p}$ . 因此 $X$ 有generic point $\xi$ , 因为integral这里 $\xi$ 来自于某个仿射开集 $U=\operatorname{Spec} A$ 中坐标环的零理想, 并且 $\mathcal{O}_\xi=\operatorname{Frac}(A)$ 是域. generic point的闭包是全空间, 所以与任何开集有交, 所以任何仿射开子集坐标环的分式域都是 $\mathcal{O}_\xi$. $\square$

$\rm{Ex.\ 3.7.\ }$ $f:X\to Y$ 给出同态 $K(Y)\to K(X)$ . 首先证明 $K(X)/K(Y)$ 是有限扩张. 取 $Y$ 中仿射开集 $V=\operatorname{Spec} B$ , 和 $f^{-1}(V)$ 的仿射开覆盖 $U_i=\operatorname{Spec} A_i$ , $A_i$ 为有限生成 $B$-代数, 则 $K(Y)=\operatorname{Frac}(B)$ 且 $K(Y)=\operatorname{Frac}(A_i)$ . 

$\operatorname{Spec} A_i$ 在 $X$ 中稠密, 所以 $f:\operatorname{Spec} A_i\to \operatorname{Spec} B$ dominant, 假设这对应环同态 $\varphi:B\to A_i$ , 由于 $\operatorname{Im} f$ 包含于 $V(\operatorname{Ker} \varphi)$ 和 $B$ 是整环, $\varphi$ 是单射. 从而考虑关于 $S=B\backslash\{ 0 \}$ 的局部化, $S^{-1}A$ 是有限生成 $K(Y)$-代数. 同时 $S^{-1}A_i$ 中任何素理想对应于 $f^{-1}(\eta)$ 中元素, 因此 $S^{-1}A_i$ 是只有有限多个素理想整环, 且是有限生成 $K(Y)$-代数, 因此由以下引理 $S^{-1}A_i$ 是域从而等于 $K(X)$, 并且是 $K(Y)$ 的有限扩张
> 假设 $A$ 是有限生成的 $k$-代数, 如果 $A$ 是整环且 $A$ 只有有限多个素理想, 则 $A$ 域并且是 $k$ 的有限扩张

如果 $A$ 中元素都在 $k$ 上代数, 则因为有限生成, $A$ 是 $k$ 的有限扩张从而是域. 如果 $A$ 中有超越元 $x$ , 则由诺特正规化 $A$ 有某个多项式环作为子环 $k[x_1,\cdots,x_r]$ , 且 $A$ 在其上整. 然而 $k[x_1,\cdots,x_r]$ 中有无限多个素理想, 且因为整所以 $\operatorname{Spec} A\to \operatorname{Spec} k[x_1,\cdots,x_r]$ 是满射, 因此 $\operatorname{Spec} A$ 是无限集, 矛盾.

由于 $K(X)/K(Y)$ 代数, 所以每个 $A_i$ 的 $B$-代数生成元都在 $K(Y)$ 上代数. 因为 $f$ finite type所以 $A_i$ 和每组生成元都有限, 所以总共只有有限多个生成元 $x_1,\cdots,x_n$ . 将每个 $x_i$ 在 $K(Y)$ 上方程的首项分子和其它项分母乘起来得到 $h$ , 则 $x_i$ 在 $B_h$ 上整, 因此此时 $(A_i)_h$ 都是有限 $B_h$-模. 

假设 $U_i=\operatorname{Spec} A_i$ 互不相同. 现在令 $\mathfrak{a}$ 为 $U_i$ 中闭集 $U_i\backslash U_j$ 对应的理想, 由于不可约 $U_i\cap U_j$ 非空, 从而 $\mathfrak{a}\ne 0$ . 取非零元 $x\in \mathfrak{a}$ , 假设 $x$ 极小多项式是 $b_0+b_1x+\cdots+x^n=0$ , 则 $b_0\ne 0$ 且 $b_0\in (x)\subset \mathfrak{a}$ , 因此将一切 $i,j$ 对应的 $b_0$ 乘进 $h$ , 局部化时对应的 $\mathfrak{a}$ 都会变成unit ideal, 从而诸 $U_i$ 相等. 此时 $U_i$ 相同 $A_i=\mathcal{O}(U_i)$ 也相同, 而 $A=(A_i)_h$ 是有限 $B_h$-模, $D(h)$ 即为题中所求开集. $\square$

而对 $S=B\backslash\{ 0 \}$ , 已知 $S^{-1}(A_i)=K(X)$ , 因此对任意 $A_j$ , 其生成元都可以写成 $A_i$ 中元素除以 $B$ 中某个元素, 通过乘以这些 $B$ 中元素, 可以得到 $h\in B\backslash\{ 0 \}$ 使得诸 $(A_i)_h$ 相同且都是有限 $B_h$-模. $\square$

$\rm{Ex.\ 3.8.\ }$ 局部化保持整闭包. 设 $U_i=\operatorname{Spec} A$ , $U_j=\operatorname{Spec} B$ 是 $X$ 的两个仿射开子集, 用两者的公共主开集 $D_{U_i}(f)=D_{U_j}(g)$ 覆盖 $U_i\cap U_j$ . 由于 $X$ 有generic point, 任何截面都有到 $K(X)$ 的相容嵌入, 所以 $D_{U_i}(f)=D_{U_j}(g)$ 对应的环同构是 $A_f=B_g$ (嵌入 $K(X)$ 意义下) , 因此整闭包也相等 ${\widetilde{A}}_f= \widetilde{B}_g$ , 给出同构 $D_{\widetilde{U}_i}(f)\cong D_{\widetilde{U}_j}(g)$ . 由于公共主开集对交封闭, 也就是 $D(f_1)\cap D(f_2)=D(f_1f_2)$ , 因为 $\operatorname{id}$ 诱导出的 $\operatorname{Spec}$ 同构在任何截面上都是 $\operatorname{id}$ , 对两个不同的公共主开集, $\widetilde{A}_{f_1}=\widetilde{B}_{g_1}$ 和 $\widetilde{A}_{f_2}=\widetilde{B}_{g_2}$ 诱导的同构限制在两个公共主开集交集上就是 $\widetilde{A}_{f_1f_2}=\widetilde{B}_{g_1 g_2}$ 诱导出的同构. 因此令 $\pi_{U_i}:\operatorname{Spec} \widetilde{A}\to \operatorname{Spec} A$ , 则我们成功定义了同构 $\pi_{U_i}^{-1}(U_i\cap U_j)\cong \pi_{U_j}^{-1}(U_i\cap U_j)$ . 因为这些环同态天然满足cocycle condition, 我们可以粘合得到一个scheme $\widetilde{X}$. 显然诸 $\operatorname{Spec} \widetilde{A}$ normal, 从而 $\widetilde{X}$ normal. 

类似的道理, 由于公共主开集对交封闭, 而 $\operatorname{Spec} \widetilde{A}\to \operatorname{Spec} A$ 在主开集 $\pi^{-1}(D(f))$ 上的限制和 $\operatorname{Spec} \widetilde{A}_{f}\to \operatorname{Spec} A_f$ 一致 (环同态与 $\operatorname{Spec}$ 范畴等价里global section的同态在 $D(f)$ 上限制...) , 因此它们粘合得到一个映射 $\widetilde{X}\to X$ . 

关于它的泛性质, 仿射情形下 $X=\operatorname{Spec} A$ 而 $Z=\operatorname{Spec} B$ , 这里 $B$ 是整闭整环, dominant的 $Z\to X$ 相当于单射 $A\to B$ , 从而自然factor through $A\to \widetilde{A}$ . 对一般情形, 因为 $\widetilde{X}$ reduced且irr从而integral, 对 $X$ 的仿射开集 $U$ 和 $Z$ 的仿射开集 $V$ , $V\to U$ 给出 $V\to \widetilde{U}$ , 它对应于 $K(\widetilde{X})=K(X)\hookrightarrow K(Z)$ 在 $\mathcal{O}(\widetilde{U})$ 上的 (作为集合间映射的) 限制.  设 $U=\operatorname{Spec} A$ 和两个仿射开集 $V_1,V_2\subset f^{-1}(U)$ , 考虑 $V_1,V_2$ 的公共主开集 $V=D_{V_1}(g)=D_{V_2}(h)$ , $V_i=\operatorname{Spec} B_i$ , 则有 $(B_1)_g= (B_2)_h$ , 对应的环同态 $A\to (B_1)_g$ 和 $A\to (B_2)_h$ 是相同映射, 所以取 $A$ 的整闭包得到的两个同态也和同构 $\operatorname{id}:(B_1)_g= (B_2)_h$ 交换, 从而在 $V_1\cap V_2$ 上两个morphism相同. 因此可以粘合得到一个 $Z\to \widetilde{X}$ .  显然如上所述这个morphism唯一.

$X$ finite type over $k$ 相当于 $X$ 存在一个仿射开覆盖 $U_i=\operatorname{Spec} A_i$ , $A_i$ 都是有限生成 $k$-代数. 为证明 $\widetilde{X}\to X$ finite, 只需证明 $\widetilde{A}_i$ 是有限生成 $A$-模, 这是Eisenbud的Commutative Algebra with a View Toward Algebraic Geometry中Corollary 13.13中 $L=K$ 情形. $\square$

关于fibered product, 首先有一个基本的引理.

> 假设 $f : X \to S$ 和 $g : Y \to S$ , $U$ 是 $S$ 中开集, $V,W$ 分别是 $X,Y$ 中分别包含于 $U$ 原像的开集, 则自然的映射 $V\times_U U\to X\times _SY$ 是开浸入, 对应开子集 $p^{-1}(V)\cap q^{-1}(W)$

如Thm3.3中step4,  $p^{-1}(V)$ 关于张量积自带投影的限制满足 $V\times _UY=V\times _SY$ 的泛性质. $q^{-1}(U)$ 类似. $\square$

$\rm{Ex.\ 3.9.\ }$ (a) $k[x]\otimes _k k[y]\cong k[x,y]$ . 因此两个投影 $p_1,p_2$ 分别为 $k[x]\to k[x,y]$ 和 $k[y]\to k[x,y]$ 给出的 $\mathbb{A}_k^2\to \mathbb{A}_k^1 $ , 而对任何不可约且不属于 $k[x],k[y]$ 的 $f\in k[x,y]$ 都有 $p_1((f))=p_2((f))=(0)$ , 因此带有product的投影的 $\mathbb{A}_k^2$ 不是集合的product.

(b) 考虑到 $k[s]\to k[s]\otimes _k k[t]=k[s,t]$ 的环同态是自然的嵌入, 所以$$k(s)\otimes _kk(t)=k(s)\otimes _{k[s]}(k[s]\otimes _kk[t])\otimes _{k[t]}k(t)=S^{-1}k[s,t]$$其中 $S=(k[s]\backslash\{ 0 \})(k[t]\backslash\{ 0 \})=\{ fg:f\in k[s], g\in k[t] , f,g\ne 0\}$ . 因此 $\operatorname{Spec} k(s)\times  _{\operatorname{Spec} k}\operatorname{Spec} k(t)$ 是 $\mathbb{A}_k^2$ 中全体不包含任何 $k[s],k[t]$ 中非零元的素理想, 也就是 $p_1^{-1}(0)\cap p_2^{-1}(0)$ 对应子概形. 事实上这相当于连续取两次纤维, 上面的张量积相当于先取纤维 $\mathbb{A}^2\times _{\mathbb{A}_s^1} \operatorname{Spec} \kappa(s)$ , 再取纤维 $(\mathbb{A}^2)_s\times _{\mathbb{A}_t^1}\operatorname{Spec} \kappa(t)$ . $\square$

$\rm{Ex.\ 3.10.\ }$ (a) $X_y=X\times_Y\operatorname{Spec} \kappa(y)$ . 首先考虑仿射情形, 设 $X=\operatorname{Spec} A$ , $Y=\operatorname{Spec} B$ , 假设 $y$ 对应的素理想是 $\mathfrak{p}$, 则 $X_y=\operatorname{Spec} (A\otimes_B B_{\mathfrak{p}}/\mathfrak{p}_{\mathfrak{p}})=\operatorname{Spec} (A/\mathfrak{p}A\otimes_B B_{\mathfrak{p}})$ , 这是 $A/\mathfrak{p}A$ 关于 $B\backslash \mathfrak{p}$ 的局部化, 因此恰好对应原像包含 $\mathfrak{p}$ 且与 $B\backslash \mathfrak{p}$ 不交的 $\operatorname{Spec} A$ 子集, 这恰好 (拓扑上) 就是 $f^{-1}(y)$ . 

对一般情形, 首先 $Y$ 仿射的情况下, $\pi:X_y\to X$ , 设 $X_i$ 是 $X$ 的仿射开覆盖, 则如Thm3.3中step4,  $\pi^{-1}(X_i)$ 是 $(X_i)_y=f^{-1}(y)\cap X_i$ , 从而 $X_y$ 就是 $f^{-1}(y)$ . 对一般的 $Y$, 令 $Y_i$ 是 $Y$ 的仿射开覆盖, 因为fibered product的构造在底概形上是局部的, 具体来说如Thm3.3 step7中处理, 对 $y\in Y_i$ , 由于图表交换的约束 $X_y$ 满足 $X\times _{Y_i} \operatorname{Spec} \kappa(y)$ 的泛性质, 因此自然同构于后者,  而后者就是 $f^{-1}(y)$. $\square$

(b) 对 $a\in k$ , $\kappa(a)=k[s]/(s-a)\cong k$ . 而 $(X)_a=\operatorname{Spec} (k[s,t]/(s-t^2)\otimes _{k[s]} k[s]/(s-a))=\operatorname{Spec} (k[t]/(a-t^2))$ , 在 $a\ne 0$ 时 $(X)_a$ 有两个点, 而 $a=0$ 时 $(X)_a\cong \operatorname{Spec} k[t]/(t^2)$ . $Y$ 的generic point $\eta=(0)$ , 因此 $\kappa(\eta)=k(s)$ , 从而 $(X)_{\eta}=\operatorname{Spec} (k(s)[t]/(s-t^2))=\operatorname{Spec} k(s,\bar{t})$ , 而 $k(s,\bar{t})/k(s)$ 是二次扩域. $\square$

$\rm{Ex.\ 3.11.\ }$ (b) 取 $Y$ 的仿射开覆盖 $V_i$ , 取 $X$ 中主开集对应的 $D(f_i)\cap Y\subset V_i$ , 则 $D_X(f_i)\cap Y=D_{V_i}(\bar{f_i})$ , 因此 $D(f_i)\cap Y$ 是 $Y$ 的仿射开集. 由于 $Y$ 拓扑上等于 $V(\mathfrak{a})$ 因此拟紧, 所以可以取出有限多这样的 $f_i$ . 在 $X\backslash Y$ 中再扩充有限个主开集, 使得 $D(f_i)$ 覆盖 $X$. 这些 $f_i$ 在 $A$ 中生成单位理想, 从而它们的像在 $\Gamma(Y)$ 中生成单位理想, 而 $D(f_i)\cap Y$ 就是 $Y_{\bar{f_i}}$ , 由Ex.2.17b, $Y$ 仿射. 由Ex.2.18d, $\Gamma(X,\mathcal{O}_X)\to \Gamma(Y,\mathcal{O}_Y)$ 是满射, 从而 $Y\cong \operatorname{Spec} A/\mathfrak{a}$.

(a) $f$ 是闭浸入即 $f$ 在底空间上是 $X$ 到 $Y$ 中某个闭子集的同胚, 且 $f^\sharp:\mathcal{O}_X\to f_*\mathcal{O}_Y$ 是满的态射. 首先, 对仿射情形, Ex.2.18cd保证了闭浸入对应满同态 $A\to A/\mathfrak{a}$ , 基变换得到 $B\to (A/\mathfrak{a})\otimes _AB=B/\mathfrak{a}B$ 是满射, 对应闭浸入, 因此此时基变换保持闭浸入.

由于满等价于在每个stalk间都是满射, 所以闭浸入是一个局部的性质. 对 $X$ 的仿射开集 $U=\operatorname{Spec} A$ , $Y\cap U\to U$ 也是闭浸入, 从而 $Y\cap U$ 具有 $\operatorname{Spec} (A/\mathfrak{a})$ 形式. 再取 $X'$ 中image包含于 $U$ 的仿射开集 $V=\operatorname{Spec} B$ , 则$$(Y\cap U)\times _{X}V=(Y\cap U)\times _{U}V=\operatorname{Spec}  (B/\mathfrak{a}B)$$这里 $(Y\cap U)\times _XV\to V$ 对应的环同态是 $B\to B/\mathfrak{a}B$ , 因此 $Y\times _X X'\to X'$ 是闭浸入.

(c) $Y\to X$ 分解为闭浸入的复合 $Y\to Y'\to X$ 来自于仿射的局部情形, 具体来说由 $A\to A/\mathfrak{a}\to A/\mathrm{rad}(\mathfrak{a})$ 给出, 显然 $A/\mathfrak{a}\to A/\mathrm{rad}(\mathfrak{a})$ 是唯一使得复合为 $A\to A/\mathrm{rad}(\mathfrak{a})$ 的映射, 因此唯一. 

(d) 以下是诺特情况的证明: 

对仿射情形, 假设 $X=\operatorname{Spec} A$ 且 $Z=\operatorname{Spec} B$ , $f:Z\to X$ 对应 $\varphi:A\to B$, 则 $f$ factor through $Y=\operatorname{Spec} A/\mathfrak{a}$ 当且仅当 $\mathfrak{a} \subset \ker \varphi$ . 对任意 $f$ factor through的 $Y'$ , $Y\to X$ factor through  $Y'$ 即有 $A\to A/\mathfrak{a}'\to A/\mathfrak{a}$ , 因此这个要求相当于 $\mathfrak{a}=\ker\varphi$ . 因此这里集合上 $Y=\overline{f(Z)}$ 并且同构于 $\operatorname{Spec} A/\ker\varphi$ .

对一般情况, 由于局部化正合所以保持 $\ker$ 和商, $(A/\ker \varphi)_h=A_h/\ker \varphi_h$ , 因此这些 $\operatorname{Spec} A/\ker\varphi$ 以及对应的闭浸入可以粘合成一个闭子概形 $Y$ . 类似的再考虑 $Z$ 中包含于 $X$ 中某个仿射开集原像的仿射开集, 因为还是这些 $\varphi$ 诱导出的环同态对应morphism的粘合, 所以自然可以粘成一个morphism, 从而 $f$ factor through $Y\to X$. 同样的理由, 考虑仿射开集知道 $Y\to X$ factor through任何 $Y'$ . 

假若 $Z$ reduced, 则上文中任何 $\ker \varphi$ 都radical, 因此 $Y$ reduced并且是其上的reduced induced structure. $\square$

> 注: $Y$ 是 $Z\to X$ 的scheme-theoretic image等价于 $\mathcal{O}_Z \to f_* \mathcal{O}_Y$ 是单射

$\rm{Ex.\ 3.12.\ }$ (a) $\varphi(S_+)=T_+$ , Ex.2.14中的 $U=\{ \mathfrak{p}\in \operatorname{Proj}T: \mathfrak{p}\not\supset \varphi(S_+) \}$ 就是 $\operatorname{Proj}T$ . 接下来的逻辑和Ex.2.18c没什么区别. 由于 $\varphi$ 满, 所以 $f:\operatorname{Proj}T\to \operatorname{Proj}S$ 单, 且是到闭集 $V(\varphi^{-1}(0))$ 的同胚. 此外, 由于 $\varphi$ 满射, 任何stalk间映射 $S_{\mathfrak{p}}^0\to T_{\varphi(\mathfrak{p})}^0$ 都是满射, 从而 $f^{\sharp}:\mathcal{O}_X\to f_*\mathcal{O}_Y$ 作为环层同态是满射 ( 事实上由于 $S_h^0\to T_{\varphi(h)}^0$ 满, 截面的环同态都是满射 ) . 因此 $f$ 是闭浸入.

(b) 由Ex.2.14c, 对 $I'=\bigoplus _{d\geqslant d_0}I_d$ , 自然的投影 $S/I'\to S/I$ 在 $d\geqslant d_0$ 次项上都是id, 从而是 $\operatorname{Proj}(S/I)\to \operatorname{Proj}(S/I')$ 是同构, 并且这个同构和 $S\to S/I$ 投影相容, 从而 $I$ 和 $I'$ 定义了相同的闭子概形.

$\rm{Ex.\ 3.13.\ }$ (abc) a: 事实上闭浸入finite, 显然 $\operatorname{Spec} (A/\mathfrak{a})\to \operatorname{Spec} (A)$ finite. b: open immersion $X\to Y$ 是 $X$ 到 $Y$ 的open subscheme $U$ 的同构, 因此对任意 $Y$ 中仿射开集, 它在 $U$ 上的限制拟紧从而被有限个主开集覆盖, 而 $A\to A_f$ 是finite type的环同态. c: trivial.

(d) 首先仿射情形下, 如果 $B$ 是有限生成 $A$-代数, $C$ 是 $A$-代数, 则 $B\otimes _AC$ 是有限生成 $C$-代数. 事实上用 $-\otimes _AC$ 作用于正合列 $I\to A[x_1,x_2,\cdots,x_n]\to B\to 0$ 即可. 

假设 $f:X\to Y$ finite type, 由于locally of finite type是局部的性质, 因此 $f$ 基变换后的 $X\times _YY'\to Y'$ 也locally of finite type (取 $Y$ 中仿射覆盖 $V_i$ , $X$ 和 $Y'$ 各自每个开集包含于某个 $V_i$ 原像的仿射开覆盖, 然后把它们粘起来...). 

接下来证明 $X\times _YY'\to Y'$ quasi-compact, 从而由Ex.3.3a finite type. 事实上还是取 $Y$ 中仿射覆盖 $V_i$ , $X$ 和 $Y'$ 各自每个开集包含于某个 $V_i$ 原像的仿射开覆盖, 对于这样一个 $Y'$ 中仿射开集 $V$, 它包含于 $Y$ 中开集 $U$ 的原像, 则 $f^{-1}(U)$ quasi-compact且 $V$ 在 $X\times _YY'$ 中的原像是 $f^{-1}(U)\times _U V$ 从而被有限个仿射开集覆盖, 因此quasi-compact. 

(e) 基变换后的 $X\times _SY\to Y$ finite type, 复合 $Y\to S$ 仍然finite type.

(f) 只需证明 $f$ locally of finite type. 事实上如果 $B$ 是 $A$-代数, $C$ 是 $B$-代数, 如果 $C$ 是有限生成 $A$-代数则 $C$ 是有限生成 $B$-代数.

(g) Hilbert基定理.

$\rm{Ex.\ 3.14.\ }$ 事实上此题只需要locally of finite type. 需要任何开集 $U$ 都包含闭点. 考虑 $U$ 的一个仿射开集 $V=\operatorname{Spec} A$ , $A$ 是有限生成 $k$-代数, 有极大理想从而存在 $V$ 中闭点 $x$ , 现在证明它是全局闭点. 由Hilbert's Nullstellensatz (atiyah corollary 5.24), 它的剩余域 $\kappa(x)=A/\mathfrak{m}$ 是有限生成 $k$-代数从而是 $k$ 的有限扩张. 假设它包含于另一个仿射开集 $\operatorname{Spec} B$ , 对应的素理想是 $\mathfrak{p}$ , 由于 $\kappa(x)$ 在 $k$ 上整, $B/\mathfrak{p}\subset \kappa(x)$  在 $k$ 上整, 由atiyah prop 5.7, $B/\mathfrak{p}$ 是域从而 $\mathfrak{p}$ 极大. 因此 $x$ 在任何仿射开集中都是闭点, 所以 $\{ x \}$ 是 $X$ 中闭集. 

关于一般情形的反例, 考虑任一DVR即可. $\square$

$\rm{Ex.\ 3.15.\ }$ 按定义 $X$ 有仿射开覆盖 $U_i=\operatorname{Spec} A_i$ , $A_i$ 都是有限生成 $k$-代数.

(a) (i)$\iff$(ii): 只需证明仿射情形下 $k_s\to \bar{k}$ 诱导出的自然映射 $X\times _k \bar{k}\to X\times _k k_s$ 是底空间的同胚, 从而一般情况下因为仿射开集 $U_i\times _k k_s$ 的原像是 $U_i\times _k \bar{k}$ , 而它在每个仿射开集上限制的 $U_i\times _k \bar{k}\to U_i\times _k k_s$ 映射是同胚, 所以它是同胚.

$k$-代数都是 $k$ 线性空间, 从而平坦. 令 $R = A \otimes_k k_s$ , $S = A \otimes_k \bar{k}$ , 则 $R\subset S$ 且 $S$ 在 $R$ 上整, 因此由Going-Up Theorem,  $\operatorname{Spec} S\to \operatorname{Spec} R$ 是满射并且是闭映射. 同时, 假设 $S$ 中素理想 $\mathfrak{P}_1$ 和 $\mathfrak{P}_2$ 满足 $\mathfrak{P}_1\cap R=\mathfrak{P}_2\cap R$ , 由于对任何 $\mathfrak{P}_i$ 中元素 $x$ , 因为 $\bar{k}/k_s$ 纯不可分, 所以存在 $n$ 使得 $x^n\in \mathfrak{P}_i\cap R$ , 因此 $\mathfrak{P}_1=\mathfrak{P}_2$ , 因此 $\operatorname{Spec} S\to \operatorname{Spec} R$ 是单射. 综上 $\operatorname{Spec} S\to \operatorname{Spec} R$ 是连续双射且是闭映射, 因此是同胚.

(i)$\iff$(iii): (iii)推(i)显然. 反过来, 假设 $X\times _k \bar{k}$ 不可约, 构造一个包含 $K$ 和 $\bar{k}$ 的代数闭域 $\Omega$ , 下证 $X\times _k\Omega$ 不可约, 从而由于 $X\times _k\Omega\to X\times _k K$ 是满射, $X\times _k K$ 作为不可约空间的连续像不可约.



$\rm{Ex.\ 3.17.\ }$ (a) 显然. (b) 只需证明非单点非空不可约闭子集非极小. 对这样一个不可约闭集 $C$ , $C$ 具有唯一的generic point $x$ . 由于这个generic point唯一, 所以对另外一个点 $y\in C$, 存在 $C$ 中非空开集不包含 $y$ , 因此它的补集是 $C$ 的真闭子集, 故 $C$ 非极小.

(c) $\overline{\{ x \}}$ 不可约, 因此如果 $\overline{\{ x \}}=\overline{\{ y \}}$ 由generic point的唯一性, $x=y$ . 因此存在开集只包含 $x,y$ 之一, 故 $X$ 满足 $\mathbb{T}_0$ 公理.

(d) 定义. (e) 如b中讨论. (f) 显然 $t(X)$ 中任何不可约闭集 $t(Y)$ 都有generic point $Y$ . 如果 $X$ 是Zariski空间, 那么显然 $\alpha:x\mapsto \overline{\{ x \}}$ 是连续双射且是闭映射, 因此是同胚. 反过来 $\alpha$ 是同胚则显然 $X$ 是Zariski空间. $\square$

$\rm{Ex.\ 3.18.\ }$ (a) 令 $\mathfrak{G}$ 为全体局部闭集有限并. 首先 $\mathfrak{G}$ 对有限交封闭, 事实上局部闭集 $U\cap C$ 的交仍然局部闭, 因此$$\left( \bigsqcup_{i=1}^n L_i \right) \cap \left( \bigsqcup_{j=1}^m M_j \right) = \bigsqcup_{i=1}^n \bigsqcup_{j=1}^m (L_i \cap M_j)$$仍然属于 $\mathfrak{G}$ . 其次 $\mathfrak{G}$ 对补集封闭. 对闭集交开集, $(U \cap C)^c = U^c \cup C^c=U^c\sqcup (C^c\cap U)$ 是局部闭集的并, 从而对 $\bigsqcup_{i=1}^n L_i\in  \mathfrak{G}$  , 取补集得到 $\bigcap L_i^c$  , $L_i^c$ 是 $\mathfrak{G}$ 中元素有限交从而属于 $\mathfrak{G}$ . 进而由于 $X\cup Y=X\sqcup (X^c\cap Y)$ , $\mathfrak{G}$ 对有限并封闭. 

或者另一个方法 (好像没什么意义..): 对局部闭集的有限并 $(O_1 \cap C_1)\cup \cdots \cup (O_n\cap C_n)$ , 它的补集具有 $(O_1\cup C_1)\cap \cdots\cap (O_n\cup C_n)$ 形式, 由交对并的分配律和开闭集对有限交的封闭性, 它具有开集与闭集的交的有限并形式, 因此仍然是局部闭集的有限并. 因此constructible sets都是局部闭集的有限并. 此外, 局部闭集的有限并对差集封闭, 具体来说 $(O_1\cap C_1)\backslash(O_2\cap C_2)=(O_1\cap C_1)\cap (O_2^c\cup C_2^c)$  具有两个局部闭集的并形式, 因此局部闭集的有限并都等于局部闭集的有限无交并.

(b) 假设 $(O_1 \cap C_1)\cup \cdots \cup (O_n\cap C_n)$ 是 $X$ 中的稠密可构造集, 由于 $X$ 稠密, 由于闭包和有限交并交换, 某个 $\overline{O_i\cap C_i}=X$ , 从而 $C_i=\overline{C_i}=X$ , 因此generic point属于 $O_i=O_i\cap C_i$ .

(c) 假设某个可构造集 $Z$ 满足对任何 $x\in Z$ , $\overline{\{ x \}}\subset Z$ . 考虑 $\bar{Z}$ 的不可约分支 (由于诺特存在不可约分支..) $Z_i$ , $Z_i$ 是不可约闭集, 而 $Z\cap Z_i$ 是 $Z_i$ 中的稠密可构造集, 因此由b问 $Z$ 包含 $Z_i$ 的generic point从而包含 $Z_i$ . 因此 $Z=\bar{Z}$ 是闭集. 而可构造集对补集封闭, 对generization封闭意味着它的补集对specialization封闭, 因此可构造的对generization封闭的集合是开集.

(d) 原像对交集, 并集, 开闭集封闭. $\square$
