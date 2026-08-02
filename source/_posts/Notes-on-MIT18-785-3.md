---
title: Notes on MIT18.785 3
date: 2026-04-09 23:56:18
tags:
---
> Problem Set 3

关于inertia group和Corollary 7.14:

已知 $I_{\mathfrak{q}}(L/E)=I_{\mathfrak{q}}(L/K)\cap \operatorname{Gal} (L/E)$ . 令 $F=L^{I_{\mathfrak{q}}(L/K)}$ , 那么对 $F\subset E$ , $\operatorname{Gal} (L/E)$ 是 $\operatorname{Gal} (L/F)=I_{\mathfrak{q}}(L/K)$ 的子群, 从而 $I_{\mathfrak{q}}(L/E)=\operatorname{Gal} (L/E)$ . 特别的, $I_{\mathfrak{q}}(L/F)=\operatorname{Gal} (L/F)=I_{\mathfrak{q}}(L/K)$ . 

而 $|D_{\mathfrak{q}}(L/K)|=e_{\mathfrak{q}/\mathfrak{p}}f_{\mathfrak{q}/\mathfrak{p}}$ 且 $|I_{\mathfrak{q}}(L/K)|=e_{\mathfrak{q}/\mathfrak{p}}$ , 上文的式子就相当于 $e_{\mathfrak{q}/\mathfrak{q}_F}=[L:F]=e_{\mathfrak{q}/\mathfrak{p}}$ , 所以由于分歧指数的乘法公式 (5.30) $e_{\mathfrak{q}/\mathfrak{p}}=e_{\mathfrak{q}/\mathfrak{q}_F}e_{\mathfrak{q}_F/\mathfrak{p}}$ , $e_{\mathfrak{q}_F/\mathfrak{p}}=1$ . 某种意义上可以说 $F$ 是 $L/K$ 中最大的完全不分歧的子扩张.

现在由于 $\operatorname{Gal} (L/EF)=\operatorname{Gal} (L/E)\cap \operatorname{Gal} (L/F)$ 和上文的公式, $I_{\mathfrak{q}}(L/EF)=I_{\mathfrak{q}}(L/E)$ , 因此  $e_{\mathfrak{q}_E/\mathfrak{p}}=1$ 即 $e_{\mathfrak{q}/\mathfrak{q}_E}=e_{\mathfrak{q}/\mathfrak{p}}$ 当且仅当 $EF=F$ , 即 $E\subset F$ .

类似的由于有相同的性质 $D_{\mathfrak{q}}(L/E)=D_{\mathfrak{q}}(L/K)\cap \operatorname{Gal} (L/E)$ , 将上文中的 $I_{\mathfrak{q}}$ 都替换为 $D_{\mathfrak{q}}$ , $e$ 都替换为 $ef$ , 则可以证明 $e_{\mathfrak{q}_E/\mathfrak{p}}=f_{\mathfrak{q}_E/\mathfrak{p}}=1$ 当且仅当 $E\subset L^{D_{\mathfrak{q}}}$ . $\square$ 

$\rm{Problem\ 0. }$ (a) Dedekind-Kummer定理.

(b) 

(c) 假设 $\mathfrak{p}$ 惯性, 即 $\mathfrak{q}=\mathfrak{p}B$ 是素理想, 则 $\mathfrak{q}$ 非分歧从而 $\operatorname{Gal} (L/K)=D_{\mathfrak{q}}(L/K)\cong \operatorname{Gal} ((B/\mathfrak{p}B )/(A/\mathfrak{p}))$ . 而 $L,K$ 都是 $\mathbb{Q}$ 的有限扩张, 从而 $A/\mathfrak{p}, B/\mathfrak{p}B$ 都是 $\mathbb{Z}/p\mathbb{Z}$ 的有限扩张, 因此都是有限域, 从而 $\operatorname{Gal} (L/K)$ 是循环群. 

(d) $L/K$ 的正规闭包是 $E=\sigma_1(L)\cdots\sigma_n(L)$ , $\sigma_i$ 取遍 $\operatorname{Hom} _K(L,\bar{K})$ , 这里 $n=[L:K]$ . 对 $\mathcal{O}_K$ 中的素理想 $\mathfrak{p}$ , 如果 $\mathfrak{p}$ 在 $E$ 中完全分裂则显然在 $L$ 中也完全分裂. 反过来, 假设 $\mathfrak{p}$ 在 $L$ 中完全分裂, 并且 $E$ 中素理想 $\mathfrak{q}|\mathfrak{p}$ , 那么由于完全分裂, $e_{\mathfrak{q}_L/\mathfrak{p}}=f_{\mathfrak{q}_L/\mathfrak{p}}=1$ , 从而 $e_{\mathfrak{q}/\mathfrak{q}_L}=e_{\mathfrak{q}/\mathfrak{p}}$ 且 $f_{\mathfrak{q}/\mathfrak{q}_L}=f_{\mathfrak{q}/\mathfrak{p}}$ , 从而两者的乘积相等, 也就是 $|D_{\mathfrak{q}}(E/L)|=|D_{\mathfrak{q}}(E/K)|$ , 因此$$D_{\mathfrak{q}}(E/K)=D_{\mathfrak{q}}(E/L)\subset \operatorname{Gal} (E/L)$$类似的由于 $\mathfrak{p}$ 在任何 $\sigma_i(L)$ 中完全分裂, 所以 $D_{\mathfrak{q}}(E/K)$ 包含于任何 $\operatorname{Gal} (E/\sigma_i(L))$ . $D_{\mathfrak{q}}(E/K)$ 中元素固定一切 $\sigma_i(L)$ , 从而 $D_{\mathfrak{q}}(E/K)=\{ 1 \}$ , 因此 $\mathfrak{p}$ 完全分裂.

$\rm{Problem\ 1. }$ (a) 令 $\beta=\sqrt[3]{5}$ , 则 $\beta^3=5$ . 设 $\alpha=a+b\beta+c\beta^2\in \mathcal{O}_K$ , 则计算共轭求和可得 $\mathrm{T}(\alpha)=3a$ , $\mathrm{T}(\alpha^2)=3a^2+30bc$ , $\mathrm{T}(\alpha^3)=3(a^3+5 b^3+25c^3+30abc)$ , 同时计算 $\alpha$ 的矩阵可知 $\mathrm{N}(\alpha)=a^3+5b^3+25c^3-15abc$ . 

现在考虑 $p$-adic 赋值. 对任意 $p\ne 3$ , $\mathrm{T}(\alpha)\in\mathbb{Z}$ 知 $v_p(a)\geqslant 0$ , 从而考虑 $\mathrm{T}(\alpha^2)$ 知 $v_p(10bc)=v_p(10)+v_p(b)+v_p(c)\geqslant 0$ , 因此如果对某个 $p\ne 3$ , $v_p(b)<0$ 或 $v_p(c)< 0$ , 不妨设是 $c$ , 则 $\mathrm{N}(\alpha)$ 中 $v_p(25c^3)<0$ 小于其它一切一切项的 $v_p$ , 矛盾. 

如果 $p=3$ , 则 $v_3(a)\geqslant -1$ , 且如果 $v_3(a)=-1$ , 考虑 $\mathrm{T}(\alpha^2)$ 知 $v_3(b)=v_3(c)=-1$ , 假设 $a,b,c$ 的分子 (分母是 $3$ ) 分别是 $x,y,z$ , 则  $\mathrm{T}(\alpha^2)\in\mathbb{Z}$ 要求 $x^2+10yz\equiv 0\pmod{3}$ 从而 $yz\equiv -1\pmod{3}$ , 考虑 $\mathrm{N}(\alpha)$ , 把分母的 $27$ 提出来, 则有 $x^3+5y^3+25z^3-15xyz\equiv 0 \pmod{27}$ , 从而 $(x,y,z)$ 模 $3$ 时只能是 $(1,-1,1)$ 或 $(-1,1,-1)$ . 设 $x,y,z$ 分别是 $3r+c_x,3s+c_y,3t+c_z$ , 其中 $c_x,c_y,c_z\in \{ \pm 1 \}$ . 则 $r,s,t$ 一次项互相抵消得到$$c_x + 5c_y + 25c_z - 15c_xc_yc_z \equiv 0\pmod{27}$$然而这个方程变量都取 $\pm 1$ 时无解, 矛盾.

(b)  $\beta=\sqrt[3]{5}$ . $p=2,3,5,7,11,13$ 时的分解分别为 $(2,\beta+1)(2,\beta^2+\beta+1)$ , $(3,\beta+1)^3$ , $(5,\beta)^3$ , $(7)$ , $(11,\beta-3)(11 , \beta^2+3\beta+9)$ , $(13, \beta-7)(13 , \beta-8)(13 , \beta-11)$ .

(c) $\sum e_{\mathfrak{q}}f_{\mathfrak{q}}=3$ . 在b中唯一未出现的情形是 $e_{\mathfrak{q}}=2$ . 事实上这种情况对应 $\mathbb{F}_p$ 中分解 $x^3-5=(x-\lambda)(x-\mu)^2$  , 而此时 $x^3-5=(x-\lambda)(x^2+\lambda x+\lambda^2)$ , 因此 $\lambda^2=\mu^2$ , 然而又有 $\lambda^3=\mu^3$ , 所以 $\lambda=\mu$ . 因此 $e_{\mathfrak{q}}=2$ 的情形不会出现.

(d) $\mathbb{Q}(\sqrt[3]{10})$ ...

$\rm{Problem\ 2. }$ (a) 只需证明 $\zeta_{\ell}$ 的极小多项式是 $x^{\ell-1}+\cdots+x+1$ 从而 $L$ 的 $\mathbb{Q}$-自同构与 $\zeta_{\ell}\mapsto \zeta_{\ell}^i$ 一一对应. 事实上由分圆多项式的性质容易知道这个多项式不可约, 具体来说对不同于 $\ell$ 的素数 $p$ 和 $\zeta_{\ell}$ 的极小多项式 $f$ , 我们要证明如果 $\zeta$ 是 $f(x)$ 的根则 $\zeta^{p}$ 也是. 实际考虑分解有 $x^\ell-1=f(x)h(x)$ , 由Gauss引理 $f,h$ 是整系数多项式, 如果 $\zeta^p$ 是 $h(x)$ 的根则 $\zeta$ 是 $h(x^p)$ 的根, 从而 $h(x^p)=f(x)g(x)$ , $h(x^p),f(x)$ 有公因子, 这意味着在 $\mathbb{F}_p$ 中, $h(x)^p=f(x)g(x)$ , 因此 $\mathbb{F}_p[x]$ 中 $f(x),h(x)$ 有公因子, 与 $x^\ell-1=f(x)h(x)$ 在 $\mathbb{F}_p$ 中无重根矛盾.

(b) $\Phi_{\ell}(1)=\ell$ , 其中分圆多项式 $\Phi(x)=\prod_{i=1}^{\ell-1} (x-\zeta_{\ell}^i)$ . 由于$$(1-x^i)(1+x^{i}+(x^i)^2+\cdots+(x^i)^j)=1-x^{ij}$$所以理想 $(1-\zeta_{\ell})=(1-\zeta_{\ell}^i)$ , 因此 $\ell \mathcal{O}_L=(1-\zeta_{\ell})^{\ell-1}$ .

(c) 令 $\pi=1-\zeta_{\ell}$ , 则 $\mathbb{Z}[\zeta_{\ell}]=\mathbb{Z}[\pi]$ , 因此 $\alpha\in \mathbb{Z}[\zeta_{\ell}]$ 可以写成 $\pi$ 的多项式 $\alpha=a_0+\cdots+a_n\pi^{n}$ . 因此 $\alpha\in \mathcal{O}_L$ 等价于 $\frac{a_0}{\pi}\in \mathcal{O}_L$ , 这要求 $\mathrm{N}(\frac{a_0}{\pi})=\frac{a_0^{\ell-1}}{\ell}\in \mathbb{Z}$ , 这等价于 $\ell|a_0$ , 而 $\ell=\prod _{i=1}^{\ell-1}(1-\zeta_{\ell}^i)$ , 因此 $\frac{a_0}{\pi}\in \mathbb{Z}[\zeta_{\ell}]$ , 从而 $\frac{\alpha}{\pi}\in \mathbb{Z}[\zeta_{\ell}]$ .

(d) 记 $\zeta=\zeta_{\ell}$ , 则 $\zeta,\cdots,\zeta^{\ell-1}$ 是 $K/\mathbb{Q}$ 的一组基. 取$$x = a_1\zeta + a_2\zeta^2 + \dots + a_{\ell-1}\zeta^{\ell-1} \quad (a_i \in \mathbb{Q})$$由于 $\mathrm{T}(\zeta^{i})=\mathrm{T}(\zeta)=\sum_{j=1}^{\ell-1}\zeta^j=-1$  , 因此 $\mathrm{T}(x)=-\sum a_i$ . 同时 $\mathrm{T}(1)=\ell-1$ , 因此 $\mathrm{T}(\zeta^{-j}x)=\ell a_j+\mathrm{T}(x)$ . 如果 $x\in \mathcal{O}_L$ , 则 $\mathrm{T}(x), \mathrm{T}(\zeta^{-j}x)\in \mathbb{Z}$ , 则 $\ell a_j \in \mathbb{Z}$ , 从而 $\ell \mathcal{O}_L\subset  \mathbb{Z}[\zeta]$ .

由于诸 $\zeta^i$ 在 $\operatorname{Gal} (L/\mathbb{Q})$ 下共轭, c问的结论中把 $\zeta$ 换成任何 $\zeta^i$ 都成立. 现在对某个 $x\in \mathcal{O}_L$ , 有 $\ell x\in \mathbb{Z}[\zeta]$ , 且由于 $(1-\zeta)|\ell$ 有 $\frac{\ell x}{1-\zeta}\in \mathcal{O}_L$ , 从而由c问 $\frac{\ell x}{1-\zeta}\in \mathbb{Z}[\zeta]$ , 类似的再对 $\frac{\ell x}{1-\zeta}$ 除以其它 $1-\zeta^i$ ( 事实上这里 $1-\zeta^i$ 生成的理想相同, 所以其实是除以 $\ell-1$ 次 $1-\zeta$ 并且乘以某个 $\mathbb{Z}[\zeta]$ 中可逆元 ) 仍然属于 $\mathbb{Z}[\zeta]$ , 因此最终 $x\in \mathbb{Z}[\zeta]$ . 

(e) $e_pf_pg_p=\ell-1$ . 如果 $p=\ell$ , b问已经证明 $\ell \mathcal{O}_L=(1-\zeta)^{\ell-1}$ . 如果 $p\ne \ell$ , 按Dedekind-Kummer定理这相当于考虑 $\mathbb{F}_p$ 中 $\Phi_{\ell}$ 的分解. 由于 $x^\ell-1$ 无重根, 所以 $p$ 非分歧, $e_p=1$. 假设 $\zeta$ 是 $\mathbb{F}_p$ 闭包中 $\ell$ 次的本原单位根, 则 $\mathbb{F}_p[\zeta]$ 是 $\mathbb{F}_p$ 的有限扩张, 同构于 $\mathbb{F}_{p^m}$ , 且 $p^m$ 中存在本原 $\ell$ 次单位根当且仅当 $\ell| p^m-1$ 即 $p^m\equiv 1\pmod{\ell}$ , 因此 $f_p$ 是 $p$ 在 $\mathbb{F}_\ell$ 中的阶, 从而 $g_p=\frac{\ell-1}{f_p}$ .

$\rm{Problem\ 3. }$ (a) 假设 $K$ monogenic. 完全分裂相当于 $\alpha$ 的极小多项式在 $\mathbb{F}_2$ 中分裂为不同一次多项式的乘积 (一次是因为 $f_{\mathfrak{q}}=1$ ) , 然而 $\mathbb{F}_2$ 中只有两个元素, 而 $\alpha$ 的极小多项式是 $n>2$ 次. 因此此时 $2\mathcal{O}_K$ 不可能完全分裂.

(b) 考虑包含 $K_1,K_2$ 的有限Galois扩张 $L/\mathbb{Q}$ , $2$ 在 $K_1$ 中完全分裂相当于对任意 $\mathfrak{p}|2$ , $e_{\mathfrak{p}}f_{\mathfrak{p}}=1$ , 也就是对某个 (任意) $\mathcal{O}_{L}$ 中理想 $\mathfrak{q}|\mathfrak{p}$ ,  $D_{\mathfrak{q}}(L/\mathbb{Q})=D_{\mathfrak{q}}(L/K_1)$ , 类似的 $D_{\mathfrak{q}}(L/\mathbb{Q})=D_{\mathfrak{q}}(L/K_2)$ . 而已知 $D_{\mathfrak{q}}(L/E)=D_{\mathfrak{q}}(L/\mathbb{Q})\cap  \operatorname{Gal} (L/E)$ 且 $\operatorname{Gal} (L/EF)=\operatorname{Gal} (L/E)\cap \operatorname{Gal} (L/F)$ , 因此代入这道题中的元素得到$$D_{\mathfrak{q}}(L/K_1K_2)=D_{\mathfrak{q}}(L/K_1)\cap D_{\mathfrak{q}}(L/K_2)=D_{\mathfrak{q}}(L/\mathbb{Q})$$

(c) $p\equiv 1$ 时 $\mathbb{Q}(\sqrt{p})$ 的整数环是 $\mathbb{Z}[\frac{1+\sqrt{p}}{2}]$ , 极小多项式 $x^2-x+\frac{1-p}{4}=0$ 在 $\mathbb{F}_2$ 中为 $x(x-1)=0$ , 因此 $2$ 完全分裂. $p\equiv -1$ 把 $p$ 换成 $-p$ 并没有区别. 四次的例子考虑 $\mathbb{Q}(\sqrt{-7}, \sqrt{17})$ . 对一般情形, $8k+1$ 型的素数无穷, 所以立即可知这样的non-monogenic field无穷.

(d) 由于 $\alpha\in \mathcal{O}_K\backslash\mathbb{Z}$ , 将 $\alpha=x+y\sqrt[3]{ab^2}+z\sqrt[3]{a^2b}$ 中整数部分 $x$ 去掉得到 $\beta=\alpha-x$ , 则 $\mathbb{Z}[\alpha]=\mathbb{Z}[\beta]$ . 令 $\omega_1=\sqrt[3]{ab^2}, \omega_2=\sqrt[3]{a^2b}$ , 设 $\beta=x\omega_1+y\omega_2$ , 则 $[\mathcal{O}_K:\mathbb{Z}[\alpha]]=[\mathcal{O}_K/\mathbb{Z}:\mathbb{Z}[\beta]/\mathbb{Z}]$ , 而 $\mathbb{Z}[\beta]/\mathbb{Z}=\bar{\beta}\mathbb{Z}+\bar{\beta}^2\mathbb{Z}$ , 其中 $\bar{\beta}^2=ay^2\overline{\omega_1}+bx^2\overline{\omega_2}$ , 因此这个指数就等于 $\det \begin{pmatrix} x&ay^2\\ y&bx^2\end{pmatrix}=bx^3-ay^3$ , 即得题中所求形式.

为了让 $K$ non-monogenic, 只需 $bx^3-ay^3=1$ 无整数解. 事实上考虑 $\operatorname{mod} 9$ , $x^3,y^3\equiv \pm 1$ , 显然存在选取 $a, b$ 余数的选取 (譬如说 $2,5$ ) 可以使得这个方程无解. 因此有无穷多组 $a,b$ 满足条件.

$\rm{Problem\ 5. }$ (a) 假设 $x=\alpha+\beta\zeta_3\in B$ , 其中 $\alpha,\beta\in K$ , 则 $\mathrm{T}_{L/K}(x)=2\alpha-\beta\in A$ . 同时 $\bar{\zeta_3}\in B$ , 因此 $\mathrm{T}_{L/K}(x \bar{\zeta_3})=2\beta-\alpha\in A$ , 因此 $3\alpha, 3\beta\in A$ . 令 $\gamma=3\alpha$ 且 $\rho=2\alpha-\beta$ , 则 $\alpha=\frac{\gamma}{3}$ 且 $\beta=\frac{2}{3}\gamma-\rho$ . 因此$$\mathrm{N}_{L/K}(\alpha)=\alpha^2-\alpha\beta+\beta^2=\frac{\gamma^2}{3}-\gamma\rho+\rho^2\in A$$由于 $\gamma,\rho\in A$ , 这要求 $\frac{\gamma^2}{3}\in A$ . 假设 $\gamma=a+b\sqrt{-6}$ , 其中 $a,b\in \mathbb{Z}$ , 则 $\frac{\gamma^2}{3}=(\frac{a^2}{3}-6b^2)+2ab\sqrt{-6}\in A$ , 因此 $\frac{a^2}{3}\in \mathbb{Z}$ , 也就是 $3|a$ , 因此可以设 $\alpha=r+b\frac{\sqrt{-6}}{3}$ . 代回原式得$$x=\alpha+\beta\zeta_3= r+b\frac{\sqrt{-6}}{3}  (1+2\zeta_3)+(2r-\rho)\zeta_3$$而 $1+2\zeta_3=\sqrt{-3}$ , 因此 $x=r-b\sqrt{2}+(2r-\rho)\zeta_3$ . 因此 $B$ 是 $\{ 1,\sqrt{2},\zeta_3 \}$ 张成的 $A$-模.

(b) 假设$$\begin{pmatrix} 1 \\ \zeta_3 \end{pmatrix} = M \begin{pmatrix} \beta_1 \\ \beta_2 \end{pmatrix}$$则$$\begin{pmatrix} 1 & 1 \\ \zeta_3 & \sigma(\zeta_3) \end{pmatrix} = M \begin{pmatrix} \beta_1 & \sigma(\beta_1) \\ \beta_2 & \sigma(\beta_2) \end{pmatrix}$$其中 $\sigma\in \operatorname{Gal} (L/K)$ , 取 $\det$ 再取平方得到 $-3=\det(M)^2\cdot \Delta$ , $\Delta$ 是判别式属于 $A$ , 而 $\mathrm{N}(x+y\sqrt{-6})=x^2-6y^2$ , $A$ 中没有范数为 $3$ 的元素, 因此 $-3$ 是 $A$ 中不可约元, $\det(M)$ 只能是可逆元, 从而 $M$ 可逆, 因此 $1,\zeta_3$ 是 $B$ 的一组 $A$-模基底.

(c) 假设 $\sqrt{2}=\alpha+\beta\zeta_3$ , 其中 $\alpha,\beta\in A$ . 假设 $\alpha=a_1+a_2\sqrt{-6}$ 且 $\beta=b_1+b_2\sqrt{-6}$ , 诸 $a_i,b_i$ 是整数, 则 $a_1-\frac{1}{2}b_1=0$ , $a_2-\frac{1}{2}b_2=0$ , $b_1=0$ , $-\frac{3}{2}b_2=1$ , 与 $b_2\in \mathbb{Z}$ 矛盾. 因此 $1,\zeta_3$ 不是 $B$ 作为 $A$-模的基, 由于b问, $B$ 不是自由 $A$-模 (如果 $B$ 是, 那么作为自由 $A$-模的秩必须等于作为 $L$ 的 $K$-基的秩, 从而是 $2$ ...) . 因此 $A$ 不是PID (否则 $B$ 是自由模) , 从而 $\mathrm{cl}(A)$ 非平凡.

(d) $I_2=(\sqrt{-3},\sqrt{2})$ , 并且 $I_1+I_2$ 中包含 $1$ , 因此由a问 $I_1+I_2=B$ . 现证 $I_1\cap I_2=0$ : 假设 $\alpha\zeta_3=\beta \sqrt{-3}+\gamma\sqrt{2}$ , 假设 $\alpha=a_1+a_2\sqrt{-6}$ , 代入可知左边 $\sqrt{-6}$ 的系数是 $-\frac{a_2}{2}$ , 而右边没有 $\sqrt{-6}$ 项, 从而 $a_2=0$ , 进而 $\alpha$ 变成整数, 从而如果 $\alpha$ 非零, $\alpha$ 是一个 (二分之一的) 整数和一个 $\sqrt{-3}$ 项的和, 然而等式右边没有整数项, 从而 $\alpha=0$ .

$\rm{Problem\ 6. }$ (a) $M$ 有限生成且任何生成元的零化子非零, 因此因为ddk条件 $I=\operatorname{Ann} (M)$ 非零. 假设 $I = \mathfrak{p}_1^{e_1} \mathfrak{p}_2^{e_2} \cdots \mathfrak{p}_k^{e_k}$ , 则 $A/I \cong \prod A/\mathfrak{p}_i^{e_i}$ , 因此取各自环 $A/\mathfrak{p}_i^{e_i}$ 中的 $1$ , 对应 $A/I$ 中幂等元 $e_i$ , 则 $\sum e_i=1$ 且 $e_ie_j=0$ , 从而给出 $M$ 的直和分解 $M=\bigoplus  e_iM$ . 每个 $e_iM$ 都可以视作 $A/\mathfrak{p}_i^{e_i}$ 上的有限生成模. 而 $A/\mathfrak{p}_i^{e_i}$ 中, $A\backslash \mathfrak{p}_i$ 中元素皆可逆 ( $(x)+\mathfrak{p}_i=(1)$ 则 $(x)+\mathfrak{p}_i^{e_i}=(1)$ ) , 从而 $e_iM$ 自然成为 $A_{\mathfrak{p}_i}$-模, 由PID上有限生成模结构定理, 它同构于 $A/{\mathfrak{a}}_{i_1}\times \cdots\times A/{\mathfrak{a}}_{i_k}$ , 因此这些 $e_iM$ 的直和就具有 $\bigoplus A/I_i$ 的形式.

(b) 分式理想可逆. 也就是对分式理想 $I$ 和生成元 $x_1,\cdots,x_n$ , 存在 $y_1,\cdots,y_n$ , $x_iy_i\in A$ 且 $\sum x_iy_i=1$ . 为证明 $I$ 是proj模, 只需证明 $I$ 是自由模 $A^n$ 的直和项, 自然的投影 $A^n\to I$ 分裂. 事实上可以定义 $I\to A^n$ 为 $a\to (y_1a,\cdots,y_na)$ , 后者在投影下的像是 $(\sum x_iy_i)a=a$ .

(c) 考虑 $M\otimes _A K$ . 首先证明 $M$ 同构于 $A$ 的分式理想当且仅当 (作为 $K$-代数) $M\otimes _AK\cong K$ , 实际上假设此时有非零生成元组 $M=(v_1,\cdots,v_n)$ , 那么由于无挠,  $m\mapsto m\otimes 1$ 给出嵌入 $M\to M\otimes _AK$ ( 将 $-\otimes _AK$ 视作关于 $A\backslash\{ 0 \}$ 局部化...) , 所以 $M$ 在这个嵌入下自然成为 $K$ 的有限生成 $A$-模, 也就是分式理想. 更一般的, $M\otimes _AK\cong K^n$ 时, $M$ 在第一个 $K$ 分量中的image是一个分式理想 $I$, 从而有 $M\to I$ 满射, 而 $I$ 是proj模, 从而 $I$ 是 $M$ 的直和项, 因此对 $n$ 归纳可知 $M$ 同构于有限个分式理想的直和.

(d) 考虑 $M\to M\otimes _AK$ 的image, 如上面论证, 它是有限多个分式理想的直和. 而分式理想是proj模, proj模的直和是proj模 (由于proj模相当于要求 $M\to N$ 满射则 $\operatorname{Hom} (P,M)\to \operatorname{Hom} (P,N)$ 满射, 而 $\operatorname{Hom} (P,-)\oplus \operatorname{Hom} (Q,-)=\operatorname{Hom} (P\oplus Q,-)$ ... ) , 从而 $M$ 的image是proj模, 从而是 $M$ 的直和项, $M$ 是它和 $\operatorname{Ker} (M\to M\otimes _AK)$ 的直和, 后者是 $M$ 中全体torsion elements组成的模. 现在结合a问和c问立即可得结论.

(e) 在c问中已经证明.

(f) 由于 $M$ 有限生成, 所以 $N$ 也有限生成, 所以 $N\in \mathcal{I}_A$ . 此外还要证明不依赖同构的选取: 不同的 $M\otimes _AK\to K^n$ 同构相差 $K^n$ 的自同构, 而这个 $K^n$ 自同构对应可逆 $n\times n$ 矩阵, 因此两个同构定义的 $n\times n$ 行列式生成的理想相差这个可逆矩阵的 $\det$ 倍, 从而在 $\mathrm{cl}(A)$ 中的理想类不依赖同构的选取. 

(g) $I_1\oplus \cdots \oplus  I_n$ 对应的 $n\times n$ 矩阵中, 第 $i$ 行元素属于 $I_i$ , 因此行列式属于 $I_1\cdots I_n$ , 同时 $I_1\cdots I_n$ 的生成元都可以由某个对角阵给出, 因此这个Steinitz class就是 $I_1\cdots I_n$ 位于的理想类.

(h) 不难得到only if. 反过来如果 $m=n$ 且 $I_1\cdots I_n=J_1\cdots J_n$ . 应用以下引理可以立即得到欲证结论:

> 对分式理想 $I,J$ , $I\oplus J\cong IJ\oplus A$ .

首先对分式理想 $I,J$ , 如果 $I+J=A$ , 那么 $I\cap J=IJ$ , 此时正合列$$0\to I\cap J\to I\oplus J\to I+J\to 0$$变为$$0\to IJ\to I\oplus J\to A\to 0$$且正合列分裂, 从而 $I\oplus J\cong IJ\oplus A$ . 

现在对一般情形, 取 $c$ 使得 $cJ\subset A$ , 再取 $x$ 满足对任意 $cJ$ 或 $I$ 的素因子 $\mathfrak{p}_i$ , $v_{\mathfrak{p}_i}(x)=-v_{\mathfrak{p}_i}(I)$ , 那么立即有 $xI+cJ=A$ , 从而 $I\oplus J\cong xI\oplus cJ\cong A\oplus  IJ$ . 

(i) 首先考虑$$(I_1 \oplus I_2) \oplus (I_3 \oplus I_4) \dots \cong (A \oplus I_1I_2) \oplus (A \oplus I_3I_4) \dots$$令 $M=\bigoplus I_i$ 且 $F=\bigoplus  A$ , 则$$M=F\oplus (I_1I_2\oplus \cdots)=F\oplus F\oplus(I_1I_2\oplus \cdots)=M\oplus F$$同时由于 $I\oplus I^{-1}\cong A\oplus  A$ , 令 $N=\bigoplus I_i^{-1}$ , 则 $M\oplus N\cong F$ . 因此$$M \oplus F \cong M \oplus (N \oplus M) \oplus (N \oplus M)  \dots\cong F\oplus F\oplus \cdots\cong F$$因此 $M\cong F$ , 即 $\bigoplus I_i\cong \bigoplus  A$ .