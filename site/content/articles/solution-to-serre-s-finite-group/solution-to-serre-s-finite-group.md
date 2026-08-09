---
title: Solution to Serre's Finite Group
date: 2024-11-20T09:22:41.000Z
tags:
  - 数学
  - 代数
  - 群
articleId: solution-to-serre-s-finite-group
category: mathematics/algebra/serre-finite-groups
order: 1
---

> 如题

$\rm{1.5.1\ }$ b.考虑 $(1,x)$ 共轭作用于 $(a,a)$ ；d.考虑到 $g^xz$ 和 $g^yz'$ 交换，$z, z'\in Z(G)$ 。

$\rm{1.5.2\ }$ 若 ${\rm Aut}(G)=1$ 则首先 ${\rm Inn}(G)$ 平凡，$G$ 为交换群。进而 $\langle g\rangle$ 的自同构可以诱导出 $G$ 的自同构，从而 $G$ 中只能有不超过二阶元。由此 $G$ 成为一个 $\mathbb F_2$-线性空间，从而 ${\rm Aut}(G)$ 即 ${\rm GL}_{\mathbb F_2}(G)$ 平凡当且仅当 $|G|\leqslant 2$ 。

$\rm{1.5.3\ }$ 注意到 $Z(G)H$ 是 $G$ 包含 $H$ 的子群，从而指数是 $n$ 的因子，而 $Z(G)/(Z(G)\cap H)\cong Z(G)H/H$ ，于是可知 ${\bar g}^n=\bar 1$ 也就是 $g^n\in H$ 。

另证：令 $C=\langle g\rangle$ ，则考虑 $C/C\cap H$ 对 $G/H$ 的作用 $g(C\cap H)\cdot xH=gxH$ ，通过 $g\in Z(G)$ 易证其良定义，并且若$gxH=xH$ 则 $xgH=xH$ 进而 $g\in C\cap H$ ，所以 $C/C\cap H$ 在 $G/H$ 上作用自由，从而 $C/C\cap H$ 在 $G/H$ 上作用的每个轨道都有 $|C/C\cap H|$ 个元素，因而 $(C:C\cap H)\mid n$。

$\rm{1.5.4\ }$ a. 考虑 $gx=x$ 则 $g^{-1}x=x$ ，从而若存在 $gx\ne x$ 和 $hy\ne y$ ，那么 $ghx=gx\ne x$ 且 $h^{-1}g^{-1}y=h^{-1} y\ne y$ ，矛盾。 b. 考虑 $G$ 以左平移作用于 $\{H,H'\}$ 则 $H=H\cup H'$ 可知 $H=gH\cup gH'$ ，但 $gH$ 和 $gH'$ 均不含 $1$。$K_4$ 可以写为三个二阶群的并。

$\rm{1.5.5\ }$ 考虑 $G/H'$ 在 $G/H$ 上的作用$$gH'\cdot xH=gxH$$注意到$$gxH=g'xH\iff x^{-1}(g')^{-1}gx\in H\iff (g')^{-1}g\in xHx^{-1}$$故这个作用良定义且给出单同态 $G/H'\to {\frak S}_n$ 。$n=2$ 时 $H$ 是正规子群。
$n=3$ 时，若 $H$ 并非正规子群， $H$ 有两个左陪集 $H_1,H_2$ ，因为 $H$ 非正规所以 $hgH$ 不能总等于 $gH$ ，进而 $H$ 在 $\{H_1,H_2\}$ 上的左乘作用传递，而 $H_1$ 和 $H_2$ 的稳定子必相同，从而包含于一切 $gHg^{-1}$ 。 $|{\rm Stab}_{H}(H_1)||\{ H_1, H_2\}|=|H|$ 意味着这个稳定子指数2，即得命题证明。

$\rm{1.5.6\ }$ a. $G\backslash G_2$ 中 $g$ 与 $g^{-1}$ 可配对。此外注意到若 $|G_2|\ne 1$ ，假设其非零，那么 $G_2\cup \{1\}$ 给出一个维数大于1的 $\mathbb F_2$-线性空间。另一方面考虑 $<g>$ 作用于 $G_2$ ，一切轨道形如 $\{x,gx\}$ ，于是 $G_2$ 中元素乘积等于 $g^{(|G_2|+1)/2}=g^{2^k}=1$ 。b. 显然。 c. 注意到$$(p-1)!=\left(\prod_{j=1}^m j\right)\cdot \left(\prod_{j=1}^m-j\right)\pmod p$$于是即得 $t^2\equiv (-1)^{m+1}$ 。$m$ 为奇数意味着 $t^2=1$ 。

$\rm{1.5.7\ }$ a. 最大的 $1/n_i$ 不能小于 $x/h$ ，也就是最小的 $n_i$ 不超过 $h/x$ ，从而只有有限多种选择，于是对 $h$ 归纳，考虑 $1/n_1+\cdots+1/n_{h-1}=x-1/n_h$ 对应的方程立即可知此时方程也有有限多组解。

$\rm{1.5.8\ }$ $xy=yx$ 意味着 $x$ 属于 $G$ 共轭作用下 $y$ 的稳定子，而稳定子大小乘轨道长度等于 $|G|$ 。

$\rm{1.5.9\ }$ 考虑对 $f=f_1\times f_2$ 的像 $H$ 应用Goursat引理，则对 $N_1=G_1\cap H$ 和 $N_2=G_2\cap H$ ，有同构 $\varphi:G_1/N_1\cong G_2/N_2$ 由 $\varphi(\bar g_1)=\bar g_2$ 给出，从而可取 $A=G_1/N_1$ 和 $p_1=\pi_1$ 和 $p_2=\varphi^{-1}\circ \pi_2$ ，其中 $\pi_i:G_i\to G_i/N_i$ 为自然投影。

$\rm{1.5.10\ }$ a. 对应定理的简单推论。b. 假若不然，$G$ 中有非平凡元 $g$ ，则 $<G>\cong\mathbb Z$ 时取 $<g>/<g^2>$ ，否则 $g$ 有限阶时取 $<g^{|g|/p}>/1$ 即得单群。 c. 令 $H_1={\rm pr}_1(H)$ ，$H_2={\rm pr}_2(H)$ , 则 $H$ 为 $H_1\times H_2$ 子群且可以应用Goursat引理，也就是对 $N_1=H_1\cap H$ 和 $N_2=H_2\cap H$ ，有 $H_1/N_1\to H_2/N_2$ 同构与之对应，但 ${\bf Occ}(H_1)\cap {\bf Occ}(H_2)=\varnothing$ 于是 $N_1=H_1$ 且 $N_2=H_2$ ，由此即得 $H=H_1\times H_2$。

$\rm{1.5.11\ }$ (i)和(iii)显然等价，有限情形(iv),(v)和(iii)等价性无非式(1.3)。(ii)推(iii)显然，而反过来假若 $H$ 在 $X-\{x\}$ 上作用不传递，则存在 $(x,y),(x,y')$ 落在不同轨道里。

$\rm{1.5.12\ }$ 若 $R_x=R_y$ ，则可取使 $f(x_i)=y_i$ 的 $f\in{\frak S}_X$ ；若 $x,y$ 落在同一轨道，即存在双射 $f$ 使 $f(x_i)=y_i$ ，则自然 $R_x=R_y$ 。Bell数的递推公式写成$$B(n+1)=\sum_{k=0}^n\binom{n}{n-k}B(k)$$则无非是在分类讨论 $n+1$ 所在等价类的元素个数。

$\rm{1.5.14\ }$ 考虑到轨道长度有限，从而稳定子指数皆有限，而稳定子的上升包含意味着指数的下降链，从而存在极大的稳定子 $H=G_x$ 。由于 $H$ 极大，所以 $X^H$ 中元素 $x$ 稳定子包含 $H$ 意味着 $G_x=H$ ，从而每个 $x$ 所在轨道都同构于 $G/H$ 。考虑到 $y=gx$ 则 $G_y=g G_xg^{-1}$ ，可知 $X^H$ 中和 $x$ 同轨道元素的数量为 $[N_G(H):H]$ ，因此 $X^H$ 中在同一轨道的元素数量只依赖 $G/H$ 的性质而与 $X$ 本身无关， $X^H$ 与 $Y^H$ 同构，则剔除上面涉及到的诸轨道后， $X\backslash GX^H$ 与 $Y\backslash GY^H$ 依然满足题设，从而归纳可证。

$\rm{1.5.15\ }$ a. 取 $G$ 中非单位元，则存在其幂次为素数阶，而自同构保持阶不变，因而由 ${\rm Aut}$ 在 $G\backslash\{1\}$ 上作用传递性可知 $G\backslash\{1\}$ 中元素阶均为 $p$ 。b. 此时 $G$ 中一切元素满足 $g^2=1$ ，从而 $ghg^{-1}h^{-1}=(gh)^2=1$ ，因此 $G$ 为交换群，于是成为 $\mathbb F_2$-线性空间。 c.

$\rm{1.5.16\ }$ $gf(x)=f(gx)$ 意味着 $G_x\leqslant G_{f(x)}\leqslant G$ ，$G_x= G_{f(x)}$ 和 $ G_{f(x)}=G$ 必居其一，分别对应单射和平凡情形。若 $G$ 在 $X$ 上作用双传递，则取 $x\in X$ ，则11题(ii)告诉我们 $G_x$ 在 $X\backslash \{x\}$ 上作用传递，从而对严格包含 $G_x$ 的子群 $H$ ，取 $g\in H\backslash G_x$ ，则 $gx\in X\backslash \{x\}$ 给出 $H$ 在 $X$ 上作用传递，而 $G$ 的每个 $gH$ 陪集恰对应某个 $y\in X$ ，于是可知 $H=G$ 。由此知 $G_x$ 极大，即 $G$ 在 $X$ 上作用本原。

$\rm{1.5.23\ }$ a. $G$ 长度有限，于是自然想到考虑 $G$ Jordan-Holder滤链末端的单群，它是极小的正规子群。对两个不同极小正规子群 $N$ 和 $H$ ，因为 $N\cap H$ 正规故 $N\cap H=1$ ，那么 $NH$ 中元素被唯一表为 $nh$ 乘积，对 $n\in N, h\in H$ ，$hn\in Hn=nH$ 给出 $hn$ 在 $N$ 上投影 $n$ ，类似地可知 $hn$ 在 $H$ 上投影 $h$ ，由此即得 $hn=nh$ ，从而 $NH$ 是直积。现在考虑对上述单群 $N$ ， $N$ 被 $\rm Aut$ 作用的轨道中各子群乘积给出特征子群 $H$ ，从而 $H=G$ 。又 $G$ 长度有限意味着轨道长度有限，否则无穷乘积长度并非有限（或者按serre提示言，按 $N$ 轨道中有限多子群乘积子群也都长度不大于 $G$ 长度，所以可以取包含意义下极大的乘积，那么因极大性 $N$ 轨道中一切子群都应被包含）。从而立即可知 $G=N\times \cdots\times N$ 。现在因为 $G$ 为 $N$ 乘积，所以 $N$ 的正规子群就是 $G$ 的正规子群，于是 $N$ 为单群。  b. 如果 $H$ 不是特征子群则