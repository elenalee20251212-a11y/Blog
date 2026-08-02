---
title: Notes On MIT18.785 2
date: 2025-06-23 17:22:16
tags: [数学, 代数, 数论, 代数数论, 读书笔记]
categories: 
        - 数学
        - 读书笔记
---

> Problem Set 2

关于Theorem 4.40, By base-changing to the separable closure of $K$ in $L$ 那句的意思是, $L$ 是平展 $K$-代数等于说 $L/K$ 可分, 令 $S$ 为 $K$ 在 $L$ 中可分闭包, 则相当于要证明 $S=L$ 也就是 $L/S$ 可分. 假设 $E$ 是 $S$ 的扩域, 则 $L\otimes _S E$ 是 $L\otimes _K E$ 的商环, 半单环商环仍然半单 (因为理想只能是乘积...), 所以 $L\otimes _S E$ 半单对任意 $E/S$ 都成立, 于是符合 (d) 的条件...

$\rm{Problem\ 0. }$ 

(a) 相当于说 $x(J+K)\subset I$ 当且仅当 $xJ\subset I$ 且 $xK\subset I$ 。

(b) (浸梨花和psei的做法)记 $\alpha$ 为 $t^{p^2}+xt^p+y$ 的一个根。显然 $t^p+xt+y$ 可分从而 $K(\alpha^p)/K$  可分，而 $K(\alpha)/K(\alpha^p)$ 纯不可分。反过来假若 $L/K$ 可以写成 $K$ 纯不可分扩张 $F$ 的可分扩张，则 $L=F(\alpha)$ ，且 $[L:F]=p$ ，考虑到 $f(t)=t^{p^2}+xt^p+y$ 在代数闭包中分裂为 $\prod (t-a_i)^p $ 形式，其中 $a_i$ 互不相同，则 $\alpha$ 在 $F$ 上的极小多项式（因为可分，$p$ 次）形如 $m(t)=\prod (t-a_i) $ ，从而 $f=m^p$ 即 $m=t^p+x^{\frac{1}{p}}t+y^{\frac{1}{p}}\in F[x]$ ，意味着 $x^{\frac{1}{p}},y^{\frac{1}{p}}\in F$ ，因而 $[F:K]=p^2>p=[F:K]$ ，矛盾。$\square$
事实上更具体的， $L/K$ 中 $K$ 的可分闭包 $L^{\rm sep}$ 形如 $K(\beta)$ ，其中 $\beta^p+x\beta+y=0$ （$K(\beta)\subset L^{\rm sep}$ 且扩张次数相同），$t^p+xt+y$ 的根形如 $t+c(-x)^{\frac{1}{p-1}}$ ，$c\in \mathbb{F}_p$ 。

(c) 将 $L$ 写作 $\mathbb{Q}(\alpha)$ ，设 $m$ 是 $\alpha$ 极小多项式，则作为 $K$-代数 $L\otimes _{\mathbb{Q}}K\cong K[x]/(m(x))$ ，它完全取决于 $m(x)$ 在 $K[x]$ 中的的因式分解。如果 $K\cap L=\mathbb{Q}$ ，

(d) 考虑到 $\zeta_5$ 的极小多项式 $f=x^4+x^3+x^2+x+1$ ，从而 $\mathbb{R}[x]/(f)$ 是 $\mathbb{R}$ 两个二次扩张的乘积。

(e) 如果 $1$ 在加法群中的阶是 $p^2$ ，则必然是 $\mathbb{Z}/p^2 \mathbb{Z}$ ；否则 $p\cdot 1=0$ ，取这个环中不是 $0,1,\cdots,p-1$ 的 $x$，则 $x$ 在加法群中的阶也是 $p$ ，从而 $1,x$ 给出加群的一组生成元，因此可以把这个环写成 $\mathbb{F}_p[x]/I$  ，考虑下CRT即知有 $\mathbb{F}_{p^2}$ 、 $\mathbb{F}_p^2$ 和 $\mathbb{F}_p[x]/(x^2)$ 三种可能，前两种是平展 $\mathbb{F}_p$ 代数。

$\rm{Problem\ 1. }$ 

(a) （应该是笔误，把fractional打成prime）假设并非域的整环 $A$ 中非零分式理想皆可逆，只需证 $A$ 诺特且关于素理想的局部化皆DVR。首先 $A$ 诺特：对理想 $\mathfrak{a}\subset A$ ，$\mathfrak{a}\mathfrak{a}^{-1}=A$ ，从而存在 $\sum x_iy_i=1$ ，其中 $x_i\in \mathfrak{a}$ ，$y_i\in \mathfrak{a}^{-1}$ ，从而对任意 $x\in \mathfrak{a}$ ，$x=\sum (xy_i)x_i$ ，而按Lemma 2.20有 $xy_i\in A$ ，从而 $x\in (x_1,\cdots,x_n)$ ，于是 $\mathfrak{a}$ 有限生成。考虑 $\mathfrak{aa}^{-1}=A$ 在 $\mathfrak{p}$ 处局部化知 $A_{\mathfrak{p}}$ 中理想皆可逆。现在开始假设 $A$ 是局部环，极大理想为 $\mathfrak{m}$，为证明DVR先证明 $A$ 中理想皆为 $\mathfrak{m}$ 的幂次：假若不然，由诺特性，存在极大的不能表为 $\mathfrak{m}$ 的幂次的理想 $\mathfrak{a}$ ，$\mathfrak{a}\ne \mathfrak{m}$ ，从而 $\mathfrak{m}^{-1}\mathfrak{a}\subsetneq \mathfrak{m}^{-1}\mathfrak{m}=A$ 是真理想，如果 $\mathfrak{a}=\mathfrak{m}^{-1}\mathfrak{a}$ 即 $\mathfrak{a}=\mathfrak{m}\mathfrak{a}$ ，由Nayakama引理 $\mathfrak{a}=0$ ，从而 $a\subsetneq \mathfrak{m}^{-1}\mathfrak{a}$ ，与 $\mathfrak{a}$ 极大性矛盾。现在由于 $A$ 是整环，$\mathfrak{m}\ne 0$ 非幂零，如果 $\mathfrak{m}^n=\mathfrak{m}^{n+1}$ 那么同样由Nayakama引理 $\mathfrak{m}=0$ ，故 $\mathfrak{m}$ 的任意幂次互不相同，特别地存在 $x\in \mathfrak{m}-\mathfrak{m}^2$ ，而 $(x)=\mathfrak{m}^r$ 也是 $\mathfrak{m}$ 的幂次，从而 $r=1$ 而 $\mathfrak{m}=(x)$ ，即得证 $A$ 是DVR。$\square$

(b) 只需证明一切非零素理想皆可逆，从而一切理想皆可逆。现在依次证明三个结论 (1) 任意环中理想的乘积 $\mathfrak{a}=\mathfrak{a}_1\cdots \mathfrak{a}_n$ 可逆当且仅当诸 $\mathfrak{a}_i$ 皆可逆：如果 $\mathfrak{a}$ 可逆， $\mathfrak{a}_i$ 的逆是 $\mathfrak{a}^{-1}\mathfrak{a}_1\cdots \hat{\mathfrak{a}_i}\cdots\mathfrak{a}_n$ ，反过来如果 $\mathfrak{a}_i$ 皆可逆则显然 $\mathfrak{a}$ 可逆。(2) 任意环中可逆理想如果可以被写成素理想的乘积，则这种分解在置换意义上唯一：假设 $\mathfrak{p}_1\cdots \mathfrak{p}_n=\mathfrak{q}_1\cdots \mathfrak{q}_m$ 可逆，如果 $n=1$ ，那么首先至少一个 $\mathfrak{q}_i\subset \mathfrak{p}_i$ ，如果这是真包含则 $\mathfrak{p}_1=\mathfrak{q}_1\cdots \mathfrak{q}_m\subset \mathfrak{q}_i\subsetneq \mathfrak{p}_1$ ，矛盾，所以 $\mathfrak{q}_i=\mathfrak{p}_1$ ，也同理由可逆知剩下的 $\mathfrak{q}_j$ 都是 $(1)$ ，也就是 $m=1$ ；现在取一个包含意义上极小的 $\mathfrak{p}_i$ ，则有某个 $\mathfrak{q}_j\subset \mathfrak{p}_i$ ，而且存在某个 $\mathfrak{p}_k\subset \mathfrak{q}_j$ ，由极小性知 $\mathfrak{p}_k=\mathfrak{p}_i$ ，于是 $\mathfrak{p}_i=\mathfrak{q}_j$ ，按可逆消去两者归纳便知分解的唯一性。 (3) 如果 $A$ 中理想都可以写成有限素理想的乘积，则 $A$ 中非零素理想均可逆：对非零素理想 $\mathfrak{p}$ ，取非零元 $x\in \mathfrak{p}$ ，写成素理想的乘积 $(x)=\mathfrak{p}_1\cdots \mathfrak{p}_n$ ，则由于 $(x)$ 可逆 $\mathfrak{p}_i$ 均可逆，至少一个可逆的 $\mathfrak{p}_i$ 包含于 $\mathfrak{p}$ ，现在只需证明可逆的素理想极大则可说明 $\mathfrak{p}$ 可逆。假设 $\mathfrak{p}$ 是可逆素理想，取 $a\not\in \mathfrak{p}$ ，$\mathfrak{p}+(a)$ 如果是真理想，则可写成素理想的有限乘积 $\mathfrak{p}_1\cdots \mathfrak{p}_n$ ，这些素理想都包含 $\mathfrak{p}+(a)$ （包含它们的乘积），从而对应到 $\mathfrak{p}+(a)$ 投影在整环 $R/\mathfrak{p}$ 中主理想 $(\bar{a})$ 分解为 $R/\mathfrak{p}$ 中素理想有限乘积 $\pi(\mathfrak{p}_1)\cdots \pi(\mathfrak{p}_n)$ ，而由于 $R/\mathfrak{p}$ 是整环且 $a\not\in \mathfrak{p}$，$(\bar{a})$ 可逆， $\pi(\mathfrak{p}_i)$ 皆可逆，而 $(\bar{a})^2$ 唯一分解为 $\pi(\mathfrak{p}_1)^2\cdots \pi(\mathfrak{p}_n)^2$ ，也就是 $\mathfrak{p}+(a)^2=(\mathfrak{p}+(a))^2\subset \mathfrak{p}^2+(a)$ ，因此在 $R/\mathfrak{p}$ 中，$(\bar{a}^2)=(\bar{a})$ ，即 $(\bar{a})=A/\mathfrak{p}$ 可逆，$\mathfrak{p}+(a)=(1)$ 。$\square$

(c) 如果某个理想 $\mathfrak{a}$ 不能写成极大理想的乘积，那么取极大理想 $\mathfrak{m}_0\supset \mathfrak{a}$ ，则有分解 $\mathfrak{a}=\mathfrak{m}_0\mathfrak{a}_1$ ，而后再取 $\mathfrak{a}_1\subset \mathfrak{m}_1$ ，则有分解 $\mathfrak{a}_1=\mathfrak{m}_1\mathfrak{a}_2$ ……其中每个 $\mathfrak{a}_i$ 皆非极大，且 $\mathfrak{a}\subset \mathfrak{a}_1\subset \mathfrak{a}_2\subset \cdots$ ，由诺特性其中某一步开始，$\mathfrak{a}_i=\mathfrak{a}_{i+1}=\cdots$ ，$\mathfrak{a}_i=\mathfrak{m}_i \mathfrak{a}_i$ ，由Nayakama引理存在 $x\in \mathfrak{m}_i$ ，$(1-x)\mathfrak{a}_i=0$ ，但这是整环所以 $\mathfrak{a}_i=0$ ，从而 $\mathfrak{a}=0$ 。 由此证明了任何理想都能写成素理想的乘积，从而由 (b) 知dedekind。

(d) 等于说理想可逆。

(e) 与 (f) 等价。

(f) 诺特性已有，只需证明关于素理想的局部环皆DVR。事实上，取素理想 $\mathfrak{p}$ 并在局部化环中考虑，令 $\mathfrak{m}=\mathfrak{p}A_{\mathfrak{p}}$ ，$k=A_{\mathfrak{p}}/\mathfrak{m}$ ，则由Nayakama引理 $\mathfrak{m}\ne \mathfrak{m}^2$ ，取 $a\in \mathfrak{m}^2$ 而 $b\in \mathfrak{m}-\mathfrak{m}^2$ ，使得 $\mathfrak{m}=(a,b)$ ，则 $\dim_k \mathfrak{m}/\mathfrak{m}^2=1$ ，也就是说 $(b)+\mathfrak{m}^2=\mathfrak{m}$ ，那么商去 $(b)$ 得到 $\mathfrak{m}(\mathfrak{m}/(b))=\mathfrak{m}/(b)$ ，由Nayakama引理知 $\mathfrak{m}=(b)$ 。现在由于对 $\mathfrak{c}=\bigcap_{i=1}^\infty \mathfrak{m}^i$ ，$(b)\mathfrak{c}=\mathfrak{c}$ ，所以由Nayakama $\mathfrak{c}=0$ ，因此对理想 $\mathfrak{a}=(x_1,\cdots,x_n)$ ，可以把 $x_i$ 中 $b$ 因子都提出来（分解为 $b^r x_i'$ ，$x_i'\not\in \mathfrak{m}$） ，于是得到 $\mathfrak{a}=(b^r)(x_1',\cdots,x_n')$ ，诸 $x_i'$ 不全属于 $\mathfrak{m}$ ，也就是存在可逆元，由此知 $\mathfrak{a}=(b^r)$ 。

(f) $\frac{1+\sqrt{-3}}{2}$ 的极小多项式是 $x^2-x+1$ 但不属于 $\mathbb{Z}[\sqrt{-3}]$ 。

$\rm{Problem\ 3. }$ (a) $\mathcal{O}_K/q \mathcal{O}_K=\prod \mathcal{O}_K/\mathfrak{q}_i^{e_i}$ 而$$[\mathcal{O}_K:\mathfrak{q}_i^{e_i}]=[\mathcal{O}_K:\mathfrak{q}_i]\cdot [\mathfrak{q}_i:\mathfrak{q}_i^{2}]\cdots[\mathfrak{q}_i^{e_i-1}:\mathfrak{q}_i^{e_i}]=[\mathcal{O}_K:\mathfrak{q}_i]^{e_i}$$而 $\mathcal{O}_K$ 是无挠 $\mathbb{Z}$-模, 由PID上有限生成模的结构定理它是有限生成的自由 $\mathbb{Z}$-模. 由于 $K$ 中任何元素都能写成 $\mathcal{O}_K$ 中元素除以 $\mathbb{Z}$ 中元素, 因此 $\mathcal{O}_K$ 作为 $\mathbb{Z}$-模的基也是 $K$ 作为 $\mathbb{Q}$-模的基, 因此 $[\mathcal{O}_K:q \mathcal{O}_K]=q^2$ . 因此要么 $n=1$ , $e_1=1$ 或 $e_1=2$ , 要么 $n=2$ 且 $e_1=e_2=1$ . 

(b) 在 $p\equiv 1\pmod 4$ 时, $\mathcal{O}_K=\mathbb{Z}[\frac{1+\sqrt  p}{2}]$ , 在 $p\equiv 2,3\pmod 4$ 时, $\mathcal{O}_K=\mathbb{Z}[\sqrt p]$ . $\mathcal{O}_K$ 的这两个生成元的极小多项式分别是 $x^2-x+\frac{1-p}{4}$ 和 $x^2-p$ , 如果 $q\ne 2$ , 这两个多项式在 $\mathbb{Z}/q \mathbb{Z}$ 中不可约都当且仅当 $p$ 是 $q$ 的二次非剩余. 

分三类情况讨论 (应用dedekind-kummer定理):

$p\equiv 3\pmod{4}$ : 如果 $q\ne 2,q\ne p$ , 此时若 $(\frac{p}{q})=1$ , 则 $q \mathcal{O}_K=(q,\sqrt{p}+a)(q,\sqrt{p}-a)$ , 其中 $a^2\equiv p\pmod{q}$ ; 若 $(\frac{p}{q})=-1$ , 则 $q \mathcal{O}_K$ 是素理想 ( $\mathcal{O}_K/q \mathcal{O}_K=\mathbb{F}_q[x]/(x^2-p)$ ...). 若 $q=p$ , 则 $q \mathcal{O}_K=(p,\sqrt{p})^2$ . 若 $q=2$ , 则 $q \mathcal{O}_K=(2,\sqrt{p}+1)^2$ .  

$p=2$ : 如果 $q=2$ , 那么 $q \mathcal{O}_K=(2,\sqrt{2})^2$ . 其余情况和 $p\equiv 3$ 时无差别.

$p\equiv 1\pmod{4}$ : 如果 $q\ne 2,q\ne p$ , 此时若 $(\frac{p}{q})=1$ , 则 $q \mathcal{O}_K=(q,\frac{1+\sqrt{p}}{2}-c_1)(q,\frac{1+\sqrt{p}}{2}-c_2)$ , 这里 $c_1,c_2$ 分别为模 $q$ 意义下 $x^2-x+\frac{1-p}{4}$ 的两根; 若 $(\frac{p}{q})=-1$ , 则 $q \mathcal{O}_K$ 是素理想. 若 $p=q$ , 由于 $\frac{p+1}{2}\equiv \frac{1}{2}\pmod{p}$ , 有 $q \mathcal{O}_K=(p, \frac{\sqrt{p}-p}{2})^2$ . 若 $q=2$ , 若 $p \equiv 1 \pmod 8$ , $\frac{1-p}{4}$ 是偶数 , 则 $q \mathcal{O}_K = (2, \frac{1+\sqrt{p}}{2})(2, \frac{1+\sqrt{p}}{2} - 1)$ ; 若 $p \equiv 5 \pmod 8$ , $\frac{1-p}{4}$ 是奇数, $f(x) \equiv x^2 - x + 1 \pmod 2$ 不可约, 因此 $q \mathcal{O}_K$ 为素理想.

(c) 分三类情况讨论:

$p\equiv 1\pmod{4}$ : 此时 $\mathcal{O}_K=\mathbb{Z}[\sqrt{-p}]$ , 对应极小多项式为 $x^2+p$ . 若 $q\ne 2$ 且 $q\ne p$ , 如果 $(\frac{p}{q})=1$ , 设 $a^2\equiv -p\pmod{q}$ , 则 $q \mathcal{O}_K=(q,\sqrt{-p}+a)(q,\sqrt{-p}-a)$ ; 如果 $(\frac{p}{q})=-1$ , 则 $q \mathcal{O}_K$ 是素理想. 如果 $q=p$ , 则 $q \mathcal{O}_K=(p,\sqrt{-p})^2$ . 如果 $q=2$ , 则 $q \mathcal{O}_K=(2,\sqrt{-p}+1)^2$ .

$p\equiv 3\pmod{4}$ : 此时 $\mathcal{O}_K=\mathbb{Z}[\frac{1+\sqrt{-p}}{2}]$ , 对应极小多项式为 $x^2-x+\frac{1+p}{4}$ . 若 $q\ne 2$ 且 $q\ne p$ , 如果 $(\frac{p}{q})=1$ , 则 $q \mathcal{O}_K=(q,\frac{1+\sqrt{-p}}{2}-c_1)(q,\frac{1+\sqrt{-p}}{2}-c_2)$ , 这里 $c_1,c_2$ 分别为模 $q$ 意义下 $x^2-x+\frac{1+p}{4}$ 的两根; 若 $(\frac{p}{q})=-1$ , 则 $q \mathcal{O}_K$ 是素理想. 若 $p=q$ , 由于 $\frac{p+1}{2}\equiv \frac{1}{2}\pmod{p}$ , 有 $q \mathcal{O}_K=(p, \frac{\sqrt{-p}-p}{2})^2$ . 若 $q=2$ , 若 $p \equiv 7 \pmod 8$ , $\frac{1+p}{4}$ 是偶数 , 则 $q \mathcal{O}_K = (2, \frac{1+\sqrt{-p}}{2})(2, \frac{1+\sqrt{-p}}{2} - 1)$ ; 若 $p \equiv 3 \pmod 8$ , $\frac{1+p}{4}$ 是奇数, $f(x) \equiv x^2 - x + 1 \pmod 2$ 不可约, 因此 $q \mathcal{O}_K$ 为素理想.

$p=2$ 时和 $p\equiv 1$ 时没什么区别, 区别是 $p=q$ 时 $q \mathcal{O}_K=(2,\sqrt{-2})^2$ .

(d) 这是Dedekind-Kummer定理 (Thm 6.14) .

$\rm{Problem\ 4. }$ (a) 回忆 $\alpha$ 的极小多项式形如 $f(x^{p^n})$ 形式, 其中 $\alpha^{p^n}$ 落入 $K$ 在 $L$ 中的可分闭包中, $f$ 是 $K[x]$ 中可分多项式. 而 $\alpha$ 的特征多项式又是极小多项式的幂次, 因此 $N_{L/K}(\alpha)$ 是 $\alpha$ 全体共轭乘积的 $[L:K]_i$ 次方, $T_{L/K}(\alpha)$ 是 $\alpha$ 全体共轭求和的 $[L:K]_i$ 倍.

(b) 特征多项式是极小多项式的 $e$ 次幂.

(c) 如果 $L/K$ 不可分, 则 $[L:K]_i$ 是域特征的 $n$ 次幂, 因此 $T_{L/K}=0$ . 如果 $L/K$ 可分, 可设 $L=K(\alpha)$ , 令 $p(x)$ 为 $\alpha$ 的极小多项式, $\alpha_1,\cdots,\alpha_n$ 是 $\alpha$ 的共轭 ( $p(x)$ 的根 ) , 则由于在 $n$ 个不同点 $\alpha_i$ 处取值相同下式成立$$\sum_i \frac{p(x)}{x-\alpha_i}\cdot \frac{\alpha_i^j}{p'(\alpha_i)}=x^j$$假设 $\frac{p(x)}{x-\alpha}$ 的 $i$ 次项系数是 $a_i$ , 则上式 $x^i$ 项系数等于$$\mathrm{Tr}\left( \frac{a_i}{p'(\alpha)}\cdot \alpha^j \right)=\begin{cases} 1&i=j  \\ 0 & i\ne j \end{cases}$$因此 $T_{L/K}$ 非退化. $\square$

注: $L/K$ 可分时 $T_{L/K}$ 的非退化性也可以如此证明: 令 $\sigma_1,\cdots,\sigma_n$ 为 $\operatorname{Hom} _K(L,\bar{K})$ 中元素, $\beta_1,\cdots,\beta_n$ 是 $L/K$ 的一组基, 则$$\begin{aligned}
\det(\text{Tr}(\beta_i \beta_j)) & = \det\left(\textstyle\sum_k \sigma_k(\beta_i \beta_j)\right) \\
& = \det\left(\textstyle\sum_k \sigma_k(\beta_i) \cdot \sigma_k(\beta_j)\right) \\
& = \det(\sigma_k(\beta_i)) \cdot \det(\sigma_k(\beta_j)) \\
& = \det(\sigma_k(\beta_i))^2
\end{aligned}$$而由于 $\sigma_i$ 作为群特征的线性无关性, $\det(\sigma_k(\beta_i))\ne 0$ , 因此 $T_{L/K}$ 的行列式非零从而非退化.