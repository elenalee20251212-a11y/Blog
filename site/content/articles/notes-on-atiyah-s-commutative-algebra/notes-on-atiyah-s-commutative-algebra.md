---
title: Notes on Atiyah's Commutative Algebra
date: 2024-12-01T20:43:36.000Z
tags:
  - 代数
  - 交换代数
articleId: notes-on-atiyah-s-commutative-algebra
category: mathematics/algebraic-geometry/atiyah-macdonald
order: 2
---
$\mathrm{Example.\ }$ semi local的例子有局部环的乘积和 $\mathbb{C}[x]/(x-1)(x-2)$

$\mathrm{Prop.\ 1.11}$ 如果放弃命题中 $n$ 的有限性条件，则 (1) 有反例 $A=\mathbb{C}[x_1,x_2,\cdots]$ ，$\mathfrak{p}_n=(x_1,\cdots,x_n)$ 而 $\alpha=(x_1,x_2,\cdots)$ ；(2) 有反例 $A=\mathbb{Z}$ ，$\mathfrak{a}_n=(p_n)$ ，$\alpha=0=\cap \mathfrak{a}_i$ ，这里 $p_n$ 是第n个素数。

$\rm{Ex.\ 1.1\ }$ 设 $x^n=1$ ，注意到 $(u-x)(u^n+u^{n-1}x+...+x^n)=u^{n+1}-x^{n+1}=u^{n+1}$ 可逆 ，从而 $u-x$ 有逆元 $u^{-(n+1)}(u^n+u^{n-1}x+...+x^n)$ 。

$\rm{Ex.\ 1.2\ }$ (i)：$\Leftarrow$ 只需注意到 $a_1x+...+a_nx^n$ 幂零，从而 $f$ 被分解为可逆+幂零。现考虑 $\Rightarrow$ ：假设 $f$ 的逆为 $b_0+\cdots+b_mx^m$ ，则有 $a_nb_m=0$ ， $a_nb_{m-1}+b_ma_{n-1}=0$ 等等，在第二个式子两侧同乘 $b_m$ 得 $b_m^2a_{n-1}=0$ ，同乘 $a_n$ 得 $a_n^2b_{m-1}=0$ ，如此递归下去直至 $a_n^{m+1}b_0=b_m^{n+1}a_0=0$ ，而 $a_0,b_0$ 可逆故 $a_n$ 幂零。 $a_0+\cdots+a_{n-1}x^{n-1}=f-a_nx^n$ 为可逆元加幂零元，从而也是可逆元，因此递归可知 $a_1,\cdots,a_n$ 皆幂零。
$\implies$ 的另证：对 $A$ 中素理想 $\mathfrak{p}$ ， $A[x]$ 中可逆元投影在 $(A/\mathfrak{p})[x]$ 中仍为可逆元，而 $A/\mathfrak{p}$ 是整环，其中 $fg=1$ 意味着 $f$ 是可逆的常数，于是知 $a_1,\cdots,a_n\in \mathfrak{p}$ ，此事对一切 $\mathfrak{p}$ 成立，从而 $a_1,\cdots,a_n\in \mathrm{rad}(0)$ 幂零。
(ii)：类似的手段，证明 $a_n$ 幂零于是 $f-a_nx^n$ 幂零。
(iii)：取 $\deg$ 最小的使 $fg=0$ 的 $g$，考虑到如果 $g=b_0+\cdots+b_mx^m$ 使 $fg=0$ ，则 $a_nb_m=0$ ，从而 $a_ng=0$ （否则 $\deg a_ng<\deg g$ ， $g$ 次数下降），于是 $a_nb_{m-1}=0$ ，结合 $a_nb_{m-1}+b_ma_{n-1}=0$ 知 $b_ma_{n-1}=0$ 。
(iv): $\Rightarrow$ ：若 $fg$ 本原，只需考虑其系数环量组合为 $1$ 的式子中分别关于 $a_i$ 和 $b_i$ 主元整理即可知 $f,g$ 本原。$\Leftarrow$ ：模仿Gauss引理证明即可。若 $f,g$ 分别本原，也就是 $(a_1,\cdots,a_n)=(1)$ 且 $(b_1,\cdots,b_m)=(1)$ ，假若 $fg$ 并非本原，即其系数生成理想是真理想，则存在某个极大理想 $\frak m$ 包含它，从而对 $k=A/\frak m$ ，在 $k[x]$ 中 $f,g\ne 0$ 但 $fg=0$ ，矛盾。

$\rm{Ex.\ 1.3\ }$ 没区别。

$\rm{Ex.\ 1.4\ }$ 只需证如果 $1-fg$ 可逆对任意 $g\in A[x]$ 成立，则 $f$ 幂零。设 $f=a_0+a_1x+...+a_nx^n$ ，则 $1+xf$ 可逆，从而由 $\rm{Ex.\ 1.2.i\ }$ 知 $a_0,\cdots,a_n$ 均幂零。

$\rm{Ex.\ 1.5\ }$ (i)：显然。(ii)：$f$ 幂零则 $a_0$ 幂零，从而 $f-a_0$ 幂零，如此递归即可证明 $a_n$ 皆幂零。(iii)：(i)的立即推论。(iv)：由(iii)，$x\in {\rm rad}_{A[[x]]}(0)$ ，从而 $x\in \frak m$ ，于是 ${\frak m}={\frak m}^c+(x)$ ，从而 $A/{\frak m}^c\cong A[[x]]/\frak m$ 是域，即知 $\frak m^c$ 极大。(v)：考虑理想 ${\frak p}A[[x]]+(x)$ 。

$\rm{Ex.\ 1.6\ }$ 只需证Jacobson根都幂零即可。设 $1-xy$ 可逆对任意 $y\in A$ 成立，如果 $x$ 非幂零，则 $(x)$ 中包含幂等元 $e=ax\ne 0$ ，而 $1-e$ 可逆意味着存在 $u$ 使得 $(1-e)u=1$ ，从而同乘 $1+e$ 得 $1=(1-e)u=1+e$ ，则 $e=0$ ，矛盾。

$\rm{Ex.\ 1.7\ }$ 对素理想 $\frak p$ ，商环 $A/\frak p$ 是整环，而任何元素 $x$ 的投影 $\bar x$ 为 $x^n-x$ 的根，如果 $\bar x$ 非零则 $\bar x^n-1=0$ 从而可逆。因此 $A/\frak p$ 为域。

$\rm{Ex.\ 1.8\ }$ 对一族下降素理想 ${\frak p}_0\supset {\frak p}_1\supset\cdots$ ，考虑 ${\frak p}=\bigcap_n {\frak p}_n$ 。对 $xy\in {\frak p}$ ，每个 ${\frak p}_n$ 都至少包含 $x,y$ 一者，从而至少有一个，假设是 $x$ 被包含于无穷多 ${\frak p}_n$ 中，因而 $x\in {\frak p}$ 。现在对全部素理想关于被包含关系应用Zorn引理即可。

$\rm{Ex.\ 1.9\ }$ $\Leftarrow$ ：显然。$\Rightarrow$ ：考虑到包含 ${\frak a}$ 素理想和 $A/{\frak a}$ 的素理想一一对应，而 $A/{\frak a}$ 中 ${\rm rad}(0)$ 是其一切素理想的交。

$\rm{Ex.\ 1.10\ }$ (i)$\implies$(ii)：依题意 ${\rm rad}(0)$ 为素理想。对 $u\not\in {\rm rad}(0)$ ，若 $u$ 不可逆则存在极大理想包含 $u$ ，和素理想唯一性矛盾。(ii)$\implies$(iii)：显然。(iii)$\implies$(i)：显然。

$\rm{Ex.\ 1.11\ }$ (i)：考虑 $(1+x)^2$ 。(ii)：商环是整环， $\bar x^2-\bar x$ 意味着 $\bar x=\bar 0$ 或 $\bar x=\bar 1$ 。(iii)：将布尔环类比为 $\mathbb F_2^n$ ，从而加法成为按位异或而乘法为与，容易注意到 $(x,y)$ 应是 $(x或y)$ 生成的理想。现在回到题目便是验证 $(x,y)=(x+y+xy)$ ，而事实上 $ax+by=(ax+by)(x+y+xy)\in(x+y+xy)$ ，于是即得证结论。

$\rm{Ex.\ 1.12\ }$ 和1.6没区别，考虑如果有非 $0,1$ 的幂等元 $e$ ，那么有极大理想 $\frak m$ 包含 $e$ ，从而 $e$ 是Jacobson，进而 $1-e$ 可逆，矛盾。

$\rm{Ex.\ 1.13\ }$ 只需证对有限情形，$(f_1(x_1),\cdots,f_n(x_n))$ 是 $k[x_1,\cdots,x_n]$ 中真理想。事实上归纳然后商掉 $x_n$ 即可。 

$\rm{Ex.\ 1.14\ }$  $\Sigma$ 中极大元素的商环必是整环。

$\rm{Ex.\ 1.17\ }$ (iv)：依 $\rm{Ex.\ 1.9\ }$ 中论述 ${\rm rad}(\frak a)$ 为包含 $\frak a$ 的一切素理想之交。
(v)、(vi)：对理想 $\frak {a,b}$ ，已知 $X_{\frak a}\cup X_{\frak b}=X_{\frak {a+b}}$ 且 $X_{\frak a}\cap X_{\frak b}=X_{\frak {ab}}$ 。此外

$$X_{\frak a}\subset X_{\frak b}\iff V({\frak a})\supset V({\frak b})\iff {\rm rad}({\frak a})\subset {\rm rad}(\frak b)$$

则 $X_f$ 有开覆盖即

$$X_f\subset X_{\sum {\frak a}_i}\iff {\rm rad}(f)\subset {\rm rad}\left(\sum_{i\in I}{\frak a}_i\right)$$

因此存在 $n$ 和 $I$ 的有限子集 $J$ 使 $f^n=\sum_{j\in J}g_jf_j$ ，其中 $g_j\in A$ 而 $f_j\in {\frak a}_j$ 。从而

$$(f)\subset {\rm rad}\left(\sum_{j\in J}{\frak a}_j\right)\implies X_f\subset \bigcup_{j\in J}X_{{\frak a}_j}$$

(vii)：显然有限多 $X_f$ 的并拟紧。反过来 $Y$ 为若干 $X_f$ 之并，从而取出有限覆盖即可。

$\rm{Ex.\ 1.18\ }$ (i)、(ii)、(iii)：

$$\overline {\{x\}}=\bigcap _{\mathfrak p_x\in V(\mathfrak a)}V(\mathfrak a)=\bigcap_{\mathfrak a\subset \mathfrak p_x}V(\mathfrak a)=V(\mathfrak p_x)$$

(iv)：等于说 $x\not\in \overline {\{y\}}$ 或 $y\not\in\overline {\{x\}}$ 。

$\rm{Ex.\ 1.19\ }$ ${\rm Spec}(A)$ 不可约等于说 $V(\mathfrak{a})\ne X$ 且 $V(\mathfrak{b})\ne X$ ，则 $V({\frak a\frak b})=V({\frak a})\cup V({\frak b})\ne X$ ，即 $\mathfrak{a}\not\subset \mathrm{rad}(0)$ 且 $\mathfrak{b}\not\subset \mathrm{rad}(0)$ ，则 $\mathfrak{ab}\not\subset \mathrm{rad}(0)$ ，而这就是素性的定义。

$\rm{Ex.\ 1.20\ }$ (i)：稠密开集依然稠密。(ii)：不可约空间的包含升链之并不可约，因此可以应用Zorn引理。(iii)：如果不闭那么取闭包会更大。$\{x\}$ 不可约意味着存在包含它的极大不可约子空间，故不可约子空间的并为 $X$ 。Hausdorff空间中不可约集合无非单点。(iv)：先证明 $V(\frak p)$ 不可约当且仅当 $\frak p$ 素。事实上 $V({\frak p})=V({\frak a})\cup V({\frak b})$ 即 ${\frak a}{\frak b}\subset {\frak p}$ ， $V(\frak p)$ 不可约即意味着 ${\frak a},{\frak b}$ 之一包含于 $\frak p$ ， $V({\frak a}),V({\frak b})$ 至少有一个等于 $V(\frak p)$ 。于是至此 $V(\frak p)$ 为极大不可约元即意味着 $\frak p$ 为极小素理想。

$\rm{Ex.\ 1.21\ }$ (i)：$y\in Y_{\phi(f)}$ 即 $\phi(f)\not\in {\frak p}_y$ 当且仅当 $f\not\in \phi^{-1}({\frak p}_y)$ 即 $\phi^*(y)\in X_f$ 。(ii)：$y\in V({\frak a}^e)$ 即 $\phi({\frak a})\subset {\frak p}_y$ 当且仅当 ${\frak a}\subset \phi^{-1}({\frak p}_y)$ 即 $\phi^*(y)\in V({\frak a})$ 。(iii)：考虑到

$$\overline{\phi^*(V({\frak b}))}=V\left(\bigcap_{{\frak b}\subset {\frak p}_y}\phi^{-1}({\frak p_y})\right)=V\left(\phi^{-1}\left(\bigcap_{{\frak b}\subset {\frak p}_y}{\frak p}_y\right)\right)$$

而

$${\rm rad}(\phi^{-1}({\frak b}))=\phi^{-1}({\rm rad} ({\frak b}))=\phi^{-1}\left(\bigcap_{{\frak b}\subset {\frak p}_y}{\frak p}_y\right)$$

于是 $\overline{\phi^*(V({\frak b}))}=V({\frak b}^c)$ 。(iv)：$\phi^*$ 为连续双射直接源于对应定理。现在考虑到 $(\phi^*)(Y_{\phi(f)})=X_f$ ，因此 $(\phi^*)^{-1}$ 连续，故 $\phi^*$ 是同胚。(v)：(iii)。(iv)：显然。(vii)：

$\rm{Ex.\ 1.22\ }$ 令 $e_i$ 为只有第 $i$ 个分量为 $1$ 其余为 $0$ 的元，对素理想 ${\frak p}$ ， $e_ie_j=0\in {\frak p}$ 故 $e_i,e_j$ 之一在 ${\frak p}$ 中。因此 $A=\prod_{i=1}^{n}A_{i}$ 中的素理想 $\frak p$ 具有

$$A_1\times \cdots\times A_{i-1}\times {\frak p_i}\times A_{i+1}\times\cdots\times A_n$$

形式，于是 ${\rm Spec}(A)=\bigsqcup X_{e_i}$ ，典范同构是显然的。现证明三个条件等的价性：
(i)$\implies$(iii)：假设 ${\rm Spec}(A)=V({\frak a})\sqcup V({\frak b})$ ，则 ${\frak a}\cap {\frak b}\subset {\rm rad}(0)$ 且 ${\frak a}+{\frak b}=(1)$ 。现在存在 $f\in{\frak a}$ 和 $g\in {\frak b}$ 使 $f+g=1$ 且 $fg$ 幂零。考虑环直积的结构，我们希望构造某个 $e_1+e_2=1$ 且 $e_1e_2=0$ ，如果存在这样的元素那么 $e_1+e_2=1$ 两侧同乘 $e_1$ 知 $e_1^2=e_1$ ，类似地 $e_2^2=e_2$  ，于是 $A\cong (e_1)\times (e_2)$ 。现在回到 $e_1,e_2$ 的构造，令 $(fg)^n=0$ ，则 $1=(f+g)^n$ ， $f^n+g^n=1-fg(\cdots)$ 是可逆元，因此 $(f^n)+(g^n)=(1)$ 而 $(f^n)(g^n)=(0)$ ，现在选取 $e_1\in (f^n)$ 和 $(e_2)\in (g^n)$ 使 $e_1+e_2=1$ 即可。
(iii)$\implies$(ii)：注意到在 $A_1\times A_2$ 中，$1=(1,1)$ ，而对幂等元 $e=(1,0)$ ，$1-e$ 可以得到另一个环的单位元。回到问题，就是注意到对幂等元 $e^2=e$ ，$1-e$ 容易验证同样是幂等元，$(e)+(1-e)=(1)$ 且 $e(1-e)=0$ ，从而 $A\cong (e)\times (1-e)$ 。
(ii)$\implies$(i)：上面证过了。

注：此题中(i)推(iii)也可以通过如下引理得到

> *$A/{\frak R}$ 中的幂等元可以被提升为 $A$ 中幂等元，这里 ${\frak R}={\rm rad}(0)$*

假设存在 $\bar x^2=\bar x$ ，也就是 $x^n(x-1)^n=(x^2-x)^n=0$ ，那么由中国剩余定理

$$A\cong A/(x^n)\times A/(x-1)^n$$

从而直接得到一个幂等元。$\square$

$\rm{Ex.\ 1.23\ }$ (i)：${\rm Spec}(A)=V(f)\sqcup V(1-f)$。(ii)：$\rm{Ex.\ 1.11\ }$。
(iii)：假设 $Y\subset X$ 既开又闭。则 $Y=Y\sqcup Y^c$ ，考虑在上一题(i)推(iii)过程中选出的 $e_1,e_2$ ，实际上过程给出了 $e_1=f^nu,e_2=g^nu$ 其中 $u=(1-xy(\cdots))^{-1}$ 为可逆元，从而一切包含 $e_1$ 的素理想包含 $f^n$ 从而包含 $f$，包含 $e_2$ 的素理想包含 $g$ ，由于Boole环中 ${\frak R}=(0)$ ，故 $V({\frak a})=V((e_1)+{\frak R})=V(e_1)$ ，同理 $V({\frak b})=V(e_2)$ 。
另证：依 $\rm{Ex.\ 1.17\ }$ ，$X$ 拟紧，于是 $Y$ 闭集从而拟紧，又因为 $Y$ 是开集，所以它是有限多 $X_f$ 的并，于是只需考虑(ii)。
(iv)：只需证Hausdorff，而这是因为Boole环中素理想皆极大（$\rm{Ex.\ 1.7\ }$）。

$\rm{Ex.\ 1.24\ }$ 除加法结合律外皆显然，而事实上利用分配律易证$(a\wedge b)'=a'\vee b'$ ，从而

$$\begin{aligned}(a+b)+c=&((a\wedge b^{\prime})\vee(a^{\prime}\wedge b))+c\\=&[((a\wedge b^{\prime})\vee(a^{\prime}\wedge b))\wedge c']\vee [((a\wedge b^{\prime})\vee(a^{\prime}\wedge b))'\wedge c]\\=&(a\wedge b^{\prime}\wedge c')\vee(a^{\prime}\wedge b\wedge c')\vee[((a\wedge b)\vee (a'\wedge b'))\wedge c]\\=&(a'\wedge ((b\wedge c')\vee (c'\wedge b)))\vee [a\wedge ((b\wedge c)\vee(b'\wedge c')]\\=&a+(b+c)\end{aligned}$$

反过来的验证和说明这两个对应关系互逆的证明同样循规蹈矩。

$\rm{Ex.\ 1.25\ }$ 对Boole格 $L$ ，取其对应Boole环 $R$ ，则 ${\rm Spec}(R)$ 为紧Hausdorff空间，且 $a\leqslant b$ 即 $a=ab$ 意味着 $X_a\subset X_b$ 。又因为 $R$ 中理想皆radical，故 $a\mapsto X_a$ 单，且 $\rm{Ex.\ 1.23\ }$ 中已经证明了它满。

$\rm{Ex.\ 1.27\ }$  $I(V(I))={\rm rad}(I)$ 形式的零点定理等价于所谓弱零点定理，也就是 $k[x_1,\cdots,x_n]$ 中极大理想 $\frak m$ 皆有 ${\frak m}_p=(x_1-a_1,\cdots,x_n-a_n)$ 形式，事实上考虑 $I(V({\frak m}))=\frak m$ 有 $V({\frak m})\ne 0$ ，取 $p\in V({\frak m})$ 有 ${\frak m}\subset {\frak m}_p$ 从而 ${\frak m}={\frak m}_p$ 。

反过来如果弱零点定理成立，那么对真理想 $I=(f_1,\cdots,f_n)$ 和 $f\in I(V(I))$ ，考虑 $k[x_1,\cdots,x_n,t]$ 中多项式 $f_1,\cdots,f_n,tf-1$ ，则这些多项式无公共零点，从而存在 $p_1,\cdots,p_n,q\in k[x_1,\cdots,x_n,t]$ 使得

$$p_1f_1+\cdots+p_nf_n+q(tf-1)=1$$

代入 $t=1/f$ 便知 $f^n\in I$ 。

$\rm{Ex.\ 1.28\ }$ 假若存在坐标环间的 $k$-代数同态 $\varphi:P(Y)\to P(X)$ ，取 $f_i\in \varphi(y_i)$ ，现在只需证明对应的多项式映射 $\phi$ 是 $X$ 到 $Y$ 的映射，从而自然诱导出的 $\tilde \phi$ 就是 $\varphi$ 。事实上 $\phi$ 把 $I(Y)$ 拉回到 $I(X)$ ，也就是对任意 $f\in I(Y)$ 都有 $f\in I(f(X))$ ，$I(Y)\subset I(f(X))$ 于是 $f(X)\subset Y$ 。  

我们也可以这么考虑：任何 $p\in X$ 一一对应于 $k[x_1,\cdots,x_n]$ 中包含 $I(X)$ 的极大理想，也就是 $P(X)$ 中极大理想 ${\frak m}_p$ 。$k$-代数同态 $P(Y)\to P(X)\to P(X)/{\frak m}_p=k$ 诱导出 $P(Y)\to k$ 满同态（ $P(Y)$ 中就有一份 $k$ ，从而自然是满射），于是对应某个极大理想 ${\frak m}_q$ ，其中 $q\in Y$ 。也就是说 $\varphi$ 把在 $p$ 点处的取值拉回到在 $q$ 点处取值，从而 $\phi$ 把 $p$ 打到 $q$ 。
