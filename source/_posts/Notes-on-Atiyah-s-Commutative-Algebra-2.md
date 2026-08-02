---
title: Notes on Atiyah's Commutative Algebra 2
date: 2024-12-27 11:16:44
tags: [数学, 代数, 交换代数]
tikzjax: true
---
$\rm{Prop.\ 2.9\ }$ *$$M^{\prime}\overset{u}{\to}M\overset{v}{\to}M^{\prime\prime}\to0$$正合当且仅当$$0\to\mathrm{Hom}(M^{\prime\prime},N)\overset{\bar{v}}\to\mathrm{Hom}(M,N)\overset{\bar{u}}\to\mathrm{Hom}(M^{\prime},N)$$正合对任意 $N$ 成立，其中 $\bar u,\bar v$ 是 $u,v$ 的拉回；类似地对推出也有相同的结论*

假设$$0\to\mathrm{Hom}(M^{\prime\prime},N)\overset{\bar{v}}\to\mathrm{Hom}(M,N)\overset{\bar{u}}\to\mathrm{Hom}(M^{\prime},N)$$正合恒成立。

{% raw %}现证 $M\overset{v}{\to}M^{\prime\prime}\to 0$ 正合，假若不然，则投影 $\pi:M''\to M''/u(M)$ 非平凡，但取 $N=M''/u(M)$ ， $\bar u(\pi)=\bar u(0)=0$ ，与 $0\to\mathrm{Hom}(M^{\prime\prime},N)\overset{\bar{v}}\to\mathrm{Hom}(M,N)$ 正合矛盾。{% endraw %}

{% raw %}再证 $M^{\prime}\overset{u}{{{\to}}}M\overset{v}{{{\to}}}M^{\prime\prime}$ 正合。 $\bar u\circ\bar v=0$ 意味着 $f\circ v\circ u=0$ 对任意 $f\in \mathrm{Hom}(M'',N)$ 成立，取 $f={\rm id}_{M''}$ 则 $v\circ u=0$ 。类似地 ${\rm Im}(\bar v)={\rm Ker} (\bar u)$ 意味着对任意 $f\in \operatorname{Hom} (M,N)$ ， $f\circ u=0$ 当且仅当 $f=f''\circ v$ ，则取 $N$ 为 $M/\operatorname{Im} (u)$ ，$f:M\to N$ 为投影，则 $\operatorname{Ker} (v)\subset \operatorname{Ker} (f)=\operatorname{Im} (u)$ 。{% endraw %}

反过来假设$$M^{\prime}\overset{u}{\to}M\overset{v}{\to}M^{\prime\prime}\to0$$正合，则首先显然$$0\to\mathrm{Hom}(M^{\prime\prime},N)\overset{\bar{v}}\to\mathrm{Hom}(M,N)$$正合。如果 $f\in \operatorname{Ker} (\bar{u})$ ，也就是 $f\circ u=0$ ，即 $\operatorname{Ker} (v)=\operatorname{Im} (u)\subset \operatorname{Ker} (f)$ ，那么由于 $v$ 满，依商 $\operatorname{Ker} (v)$ 泛性质可以唯一分解出 $f''\circ v$ 。$\square$

$\rm{Prop.\ 2.10\ }$ 下面证明用的符号依照Lang书上，$f$ 看作 $M'\oplus N'\to M\oplus N$ 的映射，因此上下水平箭头都是 $f$ 。
```tikz
\usepackage{tikz-cd}
\begin{document}
\Large\begin{tikzcd}
	& \ker d' \arrow[r, "\bar f"] \arrow[d] & \ker d \arrow[r, "\bar g"] \arrow[d] & \ker d'' \arrow[d] & \\
	& M' \arrow[d] \arrow[r, "f"]  & M \arrow[d] \arrow[r, "g"]  & M'' \arrow[r] \arrow[d, ""{coordinate, name=Z}] & 0  \\
	0 \arrow[r] & N' \arrow[r, "f"] \arrow[d] & N \arrow[r, "g"] \arrow[d] & N'' \arrow[d] & \\
	& {\rm coker\ }d' \arrow[uuurr, "\delta" description, crossing over, dashed, leftarrow, rounded corners, to path= {-- ([xshift=-2ex]\tikztostart.west) |- (Z) [near end]\tikztonodes -| ([xshift=2ex]\tikztotarget.east) -- (\tikztotarget) } ] \arrow[r, "\bar f"] & {\rm coker\ }d \arrow[r, "\bar g"] & {\rm coker\ }d'' &
\end{tikzcd}
\end{document}
``` 
$\delta$ 的定义首先直观上是，对 $z''\in \operatorname{Ker} (d'')$ ，由 $g$ 满射性存在 $z$ 使 $z''=gz$ ，再将 $z$ 沿 $d$ 竖直下移得到 $dz$ ，因为 $gdz=d''gz=0$ ，从而 $dz\in \operatorname{Ker} (g)=\operatorname{Im} (f)$ ，从而可以取 $fz'=dz$ ，于是直观上 $z'=f^{-1}\circ d\circ g^{-1}z''$ 。现证 $\delta$ 良定义：如果 $z''$ 对应了两个 $z,y$ ， $gz=gy=z''$ 考虑到 $\operatorname{Im} (f)=\operatorname{Ker} (g)$ ，则 $y=z+f(x')$ ，而 $d(z+f(x'))=dz+fd'x'$ ， $d'x'\in \operatorname{Im} (d')$ ，由 $0\to N'\to N$ 正合性 $z$ 和 $y$ 对应 $z'$ 和 $z'+d'x'$，在 $\operatorname{Coker} d'$ 有相同image。

一般地来讲，形如
```tikz
\usepackage{tikz-cd}
\begin{document}
\Large\begin{tikzcd}
		M' \arrow[r, "f"] \ar[d, "d'"'] & M \arrow[d, "d"] \\
		N' \arrow[r, "h"'] & N 
	\end{tikzcd}
\end{document}
``` 
的交换图中，$f$ 诱导出 $\operatorname{Ker} (d')\to \operatorname{Ker} (d)$ 的态射，具体来说 $d'x'=0$ 意味着 $dfx'=hd'x'=0$ 。类似地，$h$ 诱导出 $\operatorname{Coker} (d')\to \operatorname{Coker} (d)$ 的态射，具体来说 $h(y'+d'x')=hy'+dfx'$ ，而 $dfx'\in \operatorname{Im} (d)$ 。

关于 $\operatorname{Ker} d''$ 处正合性：回忆 $\delta$ 定义时的记号，先证 $\operatorname{Ker} (\delta)\subset \operatorname{Im} (\bar{g})$ ， $z''\in \operatorname{Ker} (\delta)$ 也就是对应 $z'$ 落在 $\operatorname{Im} (d)$ 中，$z'=d'u'$ ，从而 $dz=fz'=fd'u'=dfu'$ ，故 $d(z-fu')=0$ ，而 $g(z-fu')=gz=z''$ ，于是 $z''\in g(\operatorname{Ker} (d''))$ 。
反过来证 $\operatorname{Im} (\bar{g})\subset \operatorname{Ker} (\delta)$ ，假设 $z''=gz$ ，$dz=0$ ，那么立即可知 $fz'=dz=0$ 从而 $z'=0$ ，即 $z''\in \operatorname{Ker} (\delta)$ 。

关于 $\operatorname{Coker} d'$ 处正合性：先证 $\operatorname{Im} (\delta)\subset \operatorname{Ker} (\bar{f})$ ，由 $fz'=dz\in \operatorname{Im} (d)$ 即得。反过来，考虑 $\operatorname{Ker} \bar{f}$ 中的 $z'$ ， $fz'=dz$ ，由正合性 $\operatorname{Im} (f)=\operatorname{Ker} (g)$， $d''gz=gdz=0$ ，于是 $gz\in \operatorname{Ker} (d'')$ ，按定义 $z'=\delta gz$，得到反向的包含。

关于 $\operatorname{Ker} d$ 处正合性：由 $0\to N'\to N$ 正合性和图表交换性，$\operatorname{Ker} \bar g=f(M')\cap \operatorname{Ker}  (d)=f(\operatorname{Ker}  (df))=f(\operatorname{Ker} (fd'))=f(\operatorname{Ker} d')$ 。

关于 $\operatorname{Coker} d$ 处正合性：$y\in \operatorname{Ker} (\bar{g})$ 当且仅当 $gy=d''z''\in \operatorname{Im} (d'')$ ，由 $M\to M''\to 0$ 正合性知 $gy=d''gz=gdz$ ，也即 $y-dz\in \operatorname{Ker} (g)=\operatorname{Im} (f)$ ，$\bar{y}\in \operatorname{Im} (\bar{f})$ 。

$\square$

$\mathrm{Prop.\ 2.14}$ (iii)：只需验证 $(M\otimes P)\oplus(N\otimes P)$ 满足 $(M\oplus N)\otimes P$ 的泛性质，而每个 $(M\oplus N)\times P$ 出发的双线性映射都唯一分解为 $M\times P$ 和 $N\times P$ 出发双线性映射之和。

另证：考虑函子 $\tau:X\mapsto X\otimes P$ ，和 $M=\bigoplus M_i$ 上的诸投影 $\pi_{i}$ ，有关系 $\pi_i^2=\pi_i$ ，$\pi_i\pi_j=0$ 和 $\sum \pi_i=\mathrm{id}$ ，而 $\tau(\pi_i)$ 也满足这些关系，于是给出 $\tau(M)$ 的直和分解。

或者另证：考虑自然的双线性映射 $(M\oplus N)\times P\to(M\otimes P)\oplus(N\otimes P)$ ，$((m,n),p)\mapsto (m\otimes p,n\otimes p)$，诱导出 $\varphi:(M\oplus N)\otimes P\to(M\otimes P)\oplus(N\otimes P )$ 。反过来 $M\times P$ 嵌入 $(M\oplus N)\times P$ 给出 $M\otimes P\to (M\oplus N)\otimes P$ 态射 $\psi_M$，从而 $\psi_M$ 与 $\psi_N$ 直和 $\psi$ 是 $(M\otimes P)\oplus(N\otimes P)\to (M\oplus N)\otimes P$ 态射，把 $(m\otimes p,n\otimes p)$ 打到 $(m,n)\otimes p$ ，于是易知 $\varphi$ 与 $\psi$ 互逆。 $\square$

$\mathrm{Ex.\ 2.15}$ $M\otimes _{A}N$ 的 $B$-模结构直观上应该由 $b(m\otimes _{A}n)=m\otimes _{A}(bn)$ 给出，而事实上考虑双线性映射 $(m,n)\mapsto m\otimes _{A}(bn)$ ，唯一分解出 $A$-线性映射 $f_b:M\otimes _{A}N\to M\otimes _{A}N$ ，显然 $f_{b}\circ f_{b'}=f_{bb'}$ 且 $f_{b+b'}=f_{b}+f_{b'}$ ，于是 $M\otimes _{A}N$ 的确是 $B$-模，类似地道理知 $(M\otimes _{A}N)\otimes _{B} P$ 是 $A$-模。 

取某个 $z\in P$ ，则 $(x,y)\mapsto x\otimes _{A}(y\otimes _{B}z)$ 诱导出 $A$-线性映射 $\phi_z:M\otimes_{A}N\to M\otimes _{A}(N\otimes _{B} P)$ ，而 $\phi_z$ 关于 $z$ 和 $M\otimes_{A}N$ 皆 $B$-线性（后者只需考虑到 $\phi_z\circ f_b$ 与 $M\otimes _{A}(N\otimes _{B} P)$ 的数乘 $b$ 在泛性质图表里复合后一致即可），从而给出映射 $(M\otimes_{A}N)\otimes P\to M\otimes _{A}(N\otimes _{B} P)$ ，这便是我们所求的同构。

或者可以这么考虑：重线性映射 $B\times M\times N\to M\otimes _{A}N$ ，$(b,m,n)\mapsto (bm)\otimes _{A}n$ 诱导出 $B\otimes _{A}(M\otimes _{A}N)\to M\otimes _{A}N$ ，从而得到双线性映射 $B\times (M\otimes _{A}N)\to M\otimes _{A}N$ ，使 $M\otimes _{A} N$ 具有 $B$-模结构。
$\square$

$\mathrm{Prop.\ 2.18}$ 依 $2.9$ ，$E$ 正合意味着 $\operatorname{Hom} (E,\operatorname{Hom} (N,P))$ 正合，记 $Q=\operatorname{Hom} (N,P)$，$f,g$ 的拉回为 $\bar{f},\bar{g}$，则其中 $\operatorname{Hom} (E,\operatorname{Hom} (N,P))$ 是$$0\to\mathrm{Hom}(M^{\prime\prime},Q)\overset{\bar{g}}\to\mathrm{Hom}(M,Q)\overset{\bar{f}}\to\mathrm{Hom}(M^{\prime},Q)$$典范同构$$\operatorname{Hom} (M\otimes N,P)\cong \operatorname{Hom} (M,\operatorname{Hom} (N,P))$$中，$\phi(m\otimes n)=p$ 对应于 $\phi(m)(n)=p$ ，于是 $\bar{g},\bar{f}$ 自然被对应至 $\overline{g\otimes1},\overline{f\otimes 1}$ 。$\square$

注：这一命题也可以有直接的证法：假设有正合列$$M^{\prime}\overset{u}{\to}M\overset{v}{\to}M^{\prime\prime}\to0$$令 $\bar{u}=u\otimes 1$ 而 $\bar{v}=v\otimes 1$ ，希望证明$$M^{\prime}\otimes N\overset{u\otimes 1}{\longrightarrow}M\otimes N\overset{v\otimes 1}{\longrightarrow}M^{\prime\prime}\otimes N\to0$$首先 $\bar{v}\circ \bar{u}=(u\circ v)\otimes (1\circ 1)=0$ ，于是 $\operatorname{Im} (\bar{u})\subset \operatorname{Ker} (\bar{v})$ 。也因此，$\bar{v}$ 可以诱导出余核 $P=(M\otimes N)/\operatorname{Im} (\bar{u})\to M''\otimes N$ 的映射 $f$ ，具体来说 $f(\overline{x\otimes y})=v(x)\otimes y$，现证明 $f$ 是双射，也就是我们希望能定义 $f$ 的逆 $v(x)\otimes y\mapsto \overline{x\otimes y}$。由于 $v$ 满，对任意 $x''\in M''$ ，存在 $v(x)=x''$ 。假若 $v(x)=0$ ，则 $x\in \operatorname{Im} (u)$ ，从而 $x\otimes y\in \operatorname{Im} (\bar{u})$ ，由此可以定义 $M''\times N\to P$ 的双线性映射（由于 $v(\lambda x)=\lambda x''$） $(x'',y)\mapsto \overline{x\otimes y}$ ，其中 $v(x)=x''$ ，进而给出映射 $g:M''\otimes N\to P$ ，$g(v(x)\otimes y)=\overline{x\otimes y}$。易见 $f\circ g=1_{M''\otimes N}$ 和 $g\circ f=1_{P}$ ，由此知 $f$ 是双射，即得欲证正合列正合性。$\square$

$\mathrm{Prop.\ 2.19}$ (i)$\iff$(ii)：正合列$$\cdots\longrightarrow M_{i-1}\xrightarrow{f_i}M_i\xrightarrow{f_{i+1}}M_{i+1}\xrightarrow{}\cdots$$可以被分裂为$$0\to \operatorname{Im}  (f_i)\to M_i\to \operatorname{Im}   (f_{i+1})\to 0$$要求 $N$ 平坦则是要求$$\cdots\longrightarrow M_{i-1}\otimes N\xrightarrow{f_i\otimes 1}M_i\otimes N\xrightarrow{f_{i+1}\otimes 1}M_{i+1}\otimes N\xrightarrow{}\cdots$$总正合，从而(i)和(ii)等价性只需注意到 $\operatorname{Im}  (f_i\otimes 1)=\operatorname{Im} (f_i)\otimes N$

$\mathrm{Ex.\ 2.1}$ 显然。$\square$

$\mathrm{Ex.\ 2.2}$ 直观上讲 $(A/\mathfrak{a})\otimes _{A}M$ 中为零的部分是 $(A/\mathfrak{a})\otimes _{A}\mathfrak{a}M$ ，实际考虑$$\mathfrak{a}\to A\to A/\mathfrak{a}\to 0$$张量积上 $M$ ，而 $\mathfrak{a}\otimes M$ 自然同构于 $\mathfrak{a}M$ （只需验证 $\mathfrak{a}M$ 满足 $\mathfrak{a}\otimes M$ 泛性质即可）。

事实上我们还可以有更一般的命题：

> $\mathrm{Proposition.\ }$ *给定正合列$$\mathrm {E}^{\prime}\overset{u}{\to}\mathrm {E}\overset{v}{\to}\mathrm {E}^{\prime\prime}\to0$$以及$$\mathrm{N}^{\prime}\overset{s}{\to}\mathrm{N}\overset{t}{\to}\mathrm{N}^{\prime\prime}\to0$$则 $v\otimes t:\mathrm {E}\otimes \mathrm{N}\to \mathrm {E}''\otimes \mathrm{N}''$ 是满射且Kernel为 $\operatorname{Im} (u\otimes 1_\mathrm{N})+\operatorname{Im} (1_\mathrm {E}\otimes  s)$，特别地，对 $\mathrm {E}'$ 是 $\mathrm {E}$ 子模，$\mathrm{N}'$ 是 $\mathrm{N}$ 子模，在自然的映射 $\mathrm {E}'\otimes \mathrm{N}\to \mathrm {E}\otimes \mathrm{N}$ 和 $\mathrm {E}\otimes \mathrm{N}'\to \mathrm {E}\otimes \mathrm{N}$ 下$$(\mathrm {E}/\mathrm {E}')\otimes (\mathrm{N}/\mathrm{N}')\cong (\mathrm {E}\otimes \mathrm{N})/(\operatorname{Im} (\mathrm {E}'\otimes \mathrm{N})+\operatorname{Im} (\mathrm {E}\otimes \mathrm{N}'))$$此外，如果 $\mathrm{E},\mathrm{F}$ 是 $A$-代数，那么上述同构也是代数同构*

首先注意到 $v\otimes t=(v\otimes 1_{N''})\circ (1_{M}\otimes  t)$ 作为满射（因为张量积右正合）的复合是满射。假设 $z\in \operatorname{Ker} (v\otimes t)$ ，则 $(1_{M}\otimes  t)(z)\in \operatorname{Ker} (v\otimes 1_{N''})=\operatorname{Im} (u\otimes 1_{N''})$ ，而 $u\otimes 1_{N''}:M'\otimes  N''\to M\otimes N''$ ，又由于 $t$ 满射有满射 $1_{M'}\otimes t: M'\otimes N\to M'\otimes N''$ ，从而 $z$ 的条件相当于 $(1_{M}\otimes  t)(z)=(u\otimes t)(a)$ 也即 $(1_{M}\otimes  t)(z-(u\otimes 1_N)(a)=0$ ，又 $\operatorname{Ker} (1_M\otimes t)=\operatorname{Im} (1_M\otimes s)$ ，从而即得欲证结论。在 $A$-代数的情况，只需额外验证它保持代数乘法 $(x\otimes y)(x'\otimes y')=(xx')\otimes (yy')$ ，而此事是这一同构由 $v\otimes t$ 诱导出的立即推论。$\square$

$\mathrm{Ex.\ 2.3}$ 取 $\mathfrak{m}$ 为 $A$ 的极大理想，$k=A/\mathfrak{m}$ ，$M_k=(M\otimes _A (A/\mathfrak{m}))$ ，$N_k$ 同理，则 $M\otimes _{A}N=0$ 意味着 $M_k\otimes _{A}N_k=0$ ，而 $M_k\times N_k$ 向 $M_k\otimes _{k}N_k$ 的投影也为 $A$-双线性，从而诱导 $M_k\otimes _{A}N_k\to M_k\otimes _{k}N_k$ 的满射，意味着 $M_k=0$ 或 $N_k=0$ 。

或者考虑结合约束，有$$M\otimes _{A}k\otimes  _{A} N\cong M\otimes _{A}(k\otimes _{k}k)\otimes  _{A} N\cong M_k\otimes _{k}N_k$$于是$$0=(M\otimes _A N)\otimes _A k=M_k\otimes _{k}N_k$$

$\mathrm{Ex.\ 2.4}$ 张量积的分配律。

$\mathrm{Ex.\ 2.5}$ $A[x]=\bigoplus_{n=0}^\infty A$ ，然后应用 $2.4$ 。

$\mathrm{Ex.\ 2.6}$ 考虑到 $A[x]=\bigoplus_{n=0}^\infty A$ ，于是 $A[x]\otimes _A M\cong \bigoplus_{n=0}^\infty M\cong M[x]$ （注意到 $\mathrm{Prop}.\ 2.14$ 的证明适用于任意多直和的情况）。

$\mathrm{Ex.\ 2.7}$ 考虑自然的映射 $A[x]\to (A/\mathfrak{p})[x]$ ，它的 $\operatorname{Ker}$ 是 $\mathfrak{p}[x]$ ，而 $(A/\mathfrak{p})[x]$ 是整环。极大理想情形结论一般不成立，考虑到 $A[x]/\mathfrak{m}[x]\cong (A/\mathfrak{m})[x]$ 。

$\mathrm{Ex.\ 2.8}$ (i)：先乘 $M$ 再乘 $N$ 便是。(ii)：$M\otimes_A N=(M\otimes _A B)\otimes_B N$ 。

$\mathrm{Ex.\ 2.9}$ 取 $M$ 中元素 $a_1,\cdots,a_n$ ，使其像生成 $M''$ ，再取 $M'$ 生成元 $b_1,\cdots,b_m$ ，则这些元素生成 $M$ 。

$\mathrm{Ex.\ 2.10}$ $\operatorname{Im}(u)+\mathfrak{a}N=N$ ，则由 $\mathrm{Cor}.\ 2.7$ 知 $\operatorname{Im} (u)=N$ 。

$\mathrm{Ex.\ 2.11}$ 令 $k=A/\mathfrak{m}$ ，$(A/\mathfrak{m})\otimes A^n\cong k^n$ ，$k^n\cong_A k^m$ 作为 $A$-模的同构自然诱导作为 $k$-模的同构。如果 $f:A^n\to A^m$ 满射，那么由于张量积右正合，$f\otimes 1:k^n\to k^m$ 是满射，从而由 $A$-模的满射得到 $A/\mathfrak{m}$-模的满射。

至于 $f$ 是单射的情形，则结论自然等于说 $A^n$ 中任何 $n+1$ 个不同元素都线性相关，也就是方程$$\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1(n+1)}x_{n+1}=0 \\
a_{21}x_1+a_{22}x_2+\cdots+a_{2(n+1)}x_{n+1}=0 \\
\cdots \\
a_{n1}x_1+a_{n2}x_2+\cdots+a_{n(n+1)}x_{n+1}=0 & 
\end{cases}$$总有非零解。首先考虑一些简单情形，则 $ax+by=0$ 有非零解 $x=b,y=-a$ 。对$$\begin{cases} a_{11}x_1+a_{12}x_2+a_{13}x_3=0  \\ a_{21}x_1+a_{22}x_2+a_{23}x_3=0  \end{cases}$$如果子式 $\begin{vmatrix} a_{11} & a_{13} \\ a_{21} & a_{23} \\\end{vmatrix},\begin{vmatrix} a_{12} & a_{13} \\ a_{22} & a_{23} \\\end{vmatrix},\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\\end{vmatrix}$ 不全为令，则$$x_1=\begin{vmatrix} a_{11} & a_{13} \\ a_{21} & a_{23} \\\end{vmatrix},x_2=-\begin{vmatrix} a_{12} & a_{13} \\ a_{22} & a_{23} \\\end{vmatrix},x_3=\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\\end{vmatrix}$$便是一组解（行列式按行列展开和重线性等只是整系数多项式道理，所以交换环上依然成立），否则则三个子式均为 $0$ ，而比如说 $\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\\end{vmatrix}=0$ 会导致$$\begin{cases} a_{11}x_1+a_{12}x_2=0  \\ a_{21}x_1+a_{22}x_2=0  \end{cases}$$有一组解 $x_1=a_{22},x_2=-a_{21}$ （或 $(a_{12}, -a_{11})$），而这六个系数总有非零的（否则任取一组解），那考虑对应子式（不妨设是 $x_1,x_2$ 对应方程系数不全是 $0$ ），得到一组解，再置 $x_3=0$ 即可。

现在考虑一般的 $n$ 的情况。如果$$\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1(n+1)}x_{n+1}=0 \\
a_{21}x_1+a_{22}x_2+\cdots+a_{2(n+1)}x_{n+1}=0 \\
\cdots \\
a_{n1}x_1+a_{n2}x_2+\cdots+a_{n(n+1)}x_{n+1}=0 & 
\end{cases}$$的 $n-1$ 阶子式不全为 $0$ ，则自然存在一组非零解，具体来说 $x_i$ 为系数矩阵消去第 $i$ 列的行列式。如果 $n-1$ 阶子式全为 $0$ ，则可以考虑置比如说 $x_{n+1}$ 全为 $0$ ，$x_i$ 取为消去第 $i$ 和 $n+1$ 列以及某行的 $n-2$ 阶子式。如果 $n-2$ 阶子式也全为 $0$ ，则继续递归下去，如果 $a_i$ 不全为 $0$ 则至少 $1$ 阶子式不全为 $0$ ，于是以上方程组总能得到非零解。$\square$

单射情形的另证：假设存在单射 $A^m\to A^n$ ，$m>n$，复合嵌入 $A^n\to A^m$ 得到单射 $\phi:A^m\to A^m$ ，取其极小多项式，作用于 $e_n$ 考虑第 $n$ 个分量知常数项为 $0$ ，然而这意味着 $\operatorname{Ker} \phi$ 非零，矛盾。$\square$

$\mathrm{Ex.\ 2.12}$ 取 $u_1,\cdots,u_n\in M$ 使 $\phi(u_i)=e_i$ ，假设诸 $e_i$ 生成子模 $N$ ，则 $M=N\oplus \operatorname{Ker} (\phi)$ 。取 $M$ 的生成元在 $\operatorname{Ker} (\phi)$ 上的投影，则它们生成 $\operatorname{Ker} (\phi)$ 。$\square$

$\mathrm{Ex.\ 2.13}$ 考虑到 $N\otimes _A B$ 比起 $N\otimes _B B=N$ ，前者被商掉的关系严格包含于后者，而 $x\mapsto x\otimes 1$ 是 $N\to N\otimes _BB$ 的单射，从而自然是 $N\to N_B$ 的单射。

另证：注意到 $N\otimes _BB\cong N$ 的同构由数乘给出，于是考虑由数乘诱导出的线性映射 $p:N_B\to N$ ，则 $pg=1$ ， $g$ 有左逆是单射。同时知 $\operatorname{Ker} (p)\cap g(N)=0$ ，而 $p(N_B)=p(g(N))$ ，故 $N_B=\operatorname{Ker} (p)\oplus g(N)$ 。$\square$

$\mathrm{Ex.\ 2.14}$ 在 $M$ 中 $\overline{x_{i}}=\overline{\mu_{ij}(x_i)}$ 。$\square$

$\mathrm{Ex.\ 2.15}$ $M$ 中元素可以被表为 $\overline{x_i}$ 的有限和，因为directed set的性质存在 $k$ 大于等于诸 $i$ ，然后换 $\overline{x_i}$ 为 $\overline{\mu_{ij}(x_i)}$ 即可。如果 $\mu_i(x_i)=0$ ，那么 $x_i$ 可以被表为有限和 $\sum c_j(x_j-\mu_{jk}(x_j))$ ，把 $c_j$ 乘进去就是 $\sum (x_j-\mu_{jk}(x_j))$ 。考虑投影 $\pi_j:C\to M_j$ ，取 $a$ 大于等于诸 $k$ ，则 $\mu_{ia}(x_i)=\sum \mu_{ja}(\pi_j(x_i))=\sum(\mu_{ja}(x_j)-\mu_{ka}(\mu_{jk}(x_j)))=\sum 0=0$ 。

$\mathrm{Ex.\ 2.16}$ 考虑诸 $\alpha_i:M_i\to N$ 给出 $\bar{\alpha}:\bigoplus M_i\to N$ ，而 $\bar{\alpha}(x_i-\mu_{ij}(x_i))=\alpha_i(x_i)-\alpha_j(\mu_{ij}(x_i))=0$ ，故 $(\bigoplus M_i )/D$ 泛性质给出唯一的 $\alpha$ 。就一般定义而言，一个 $A$-模的direct system是某个direct set $I$（任何两元素集有上界的偏序集）到 $A$-$\mathsf{Mod}$ 的函子（也就是这个偏序集形状的交换图），它上的一个锥是模 $N$ 配备一系列映射 $\alpha_i:M_i\to N$，且使如下图表交换（这里 $M_i\to M_j$ 是 $\mu_{ij}$ ， $M_i\to N$ 是 $\alpha_i$）
```tikz
\usepackage{tikz-cd}
\usepackage{amsmath}
\begin{document}
\Large\begin{tikzcd}[column sep=1.2em, row sep=1.5em]
& N&\\
& &\\
&M_j  \arrow[rd] \arrow[uu]&\\
M_i \arrow[ruuu,bend left = 10] \arrow[ru] \arrow[rr] & &M_k \arrow[luuu, crossing over, bend right = 10] 
\end{tikzcd}
\end{document}
```
两个锥 $N,N'$ 间的同态是使两个锥的图表带上这个映射之后的大图表交换的线性映射，容易验证这样我们定义了一个范畴。它的direct limit $\varprojlim M_i$ 就是其上锥的始对象，具体泛性质如以下交换图
```tikz
\usepackage{tikz-cd}
\usepackage{amsmath}
\begin{document}
\Large\begin{tikzcd}[column sep=1.2em, row sep=1.5em]
& \varinjlim M_i\arrow[rr, "\exists !", bend left = 10]&&N\\
& & &\\
& & &\\
&M_j  \arrow[rd] \arrow[uuu] \arrow[rruuu, bend left = 5]& &\\
M_i \arrow[ruuuu,bend left = 10] \arrow[ru] \arrow[rr] \arrow[rrruuuu, bend left = 12, crossing over]& &M_k \arrow[luuuu, crossing over, bend right = 10] \arrow[ruuuu, bend right = 5]&
\end{tikzcd}
\end{document}
```

$\mathrm{Ex.\ 2.17}$ 显然 $\bigcup M_i$ 满足余极限泛性质。

$\mathrm{Ex.\ 2.18}$ 取16题中 $\alpha_i$ 为 $\nu_i\circ \phi_i$ 即可。就一般的余极限定义来讲，direct system是函子 $\alpha:I\to \mathcal{C}$ ，那么 $\mathbf{\Phi}$ 就是 $\alpha_M\to \alpha_N$ 自然变换。而余极限本身，比如说 $N$ ，则是universal的自然变换 $α_N\to \Delta(N)$ ，那么自然变换的合成给出了 $\alpha_M\to \Delta(N)$ 的自然变换，于是题中所求态射立即由 $\alpha_M\to \Delta(M)$ 的泛性质给出。

$\mathrm{Ex.\ 2.19}$ 假设 $M,N,P$ 附带的态射是 $\mu_i:M_i\to M,\nu_i:N_i\to N,\lambda_i:P_i\to P$ ，$\mathbf{M} \xrightarrow{\phi}\mathbf{N} \xrightarrow{\psi}\mathbf{P}$，自然变换的相容性条件要求 $\phi_j\circ\mu_{ij}=\nu_{ij}\circ\phi_i$ 和 $\psi_j\circ\nu_{ij}=\lambda_{ij}\circ\psi_i$ ，极限态射要求 $\phi\circ \mu_i=\nu_i\circ \phi_i$ 和 $\psi\circ  \nu_i=\lambda_i\circ \psi_i$ （实际一堆条件一图了然）。

现证 $\operatorname{Im} (\phi)=\operatorname{Ker} (\psi)$ 。$\operatorname{Im} (\phi)\subset \operatorname{Ker} (\psi)$ ：考虑 $\psi(\phi(\mu_i(x_i))=\lambda_i(\psi_i(\phi_i(x_i))$ ，由 $\psi_i\circ \phi_i=0$ 知 $\psi(\phi(\mu_i(x_i))=0$ 。$\operatorname{Im} (\phi)\supset \operatorname{Ker} (\psi)$ ：假若 $\psi(\nu_i(y_i))=0$ ，由于 $\psi(\nu_i(y_i))=\lambda_i(\psi_i(y_i))$ ，故相当于存在 $\lambda_{ij}(\psi_i(y_i))=0$ ，从而 $\psi_j(\nu_{ij}(y_i))=0$ ，依定义 $\nu_{ij}(y_i)=\phi_j(x_j)$ ，从而 $\nu_i(y_i)=\nu_j(\phi_j(x_j))=\phi(\mu_j(x_j))$ 。$\square$

$\mathrm{Ex.\ 2.20}$ 我们已经知道，和direct system相容的一族线性映射 $M_i\to X$ 和某个 $(\varinjlim M_i)\to X$ 是相同的（泛性质），我们现在希望能证明 $M_i\times N$ 出发的满足某些相容性条件的双线性映射族，和 $(\varinjlim M_i )\times N$ 出发的双线性映射相同，从而可以把这种等同性推到张量积上。

考虑和这个direct system相容的一组双线性映射 $M_i\times N\to X$ ，这里具体来说，考虑 $M_i\otimes N$ 出发的线性映射相当于 $M_i\times N$ 出发的双线性映射，然后 $M_i\otimes N$ 关于 $\mu_{ij}\otimes 1$ 组成direct system的相容性约束就相当于，固定任意 $v\in N$ ，则 $f_i(\cdot,v):M_i\to X$ 给出一族和direct system相容的线性映射，而这族线性映射关于 $v$ 又线性。

现在我们说明通过泛性质分解出的一族映射 $\alpha_v:(\varinjlim M_i)\to X$ 关于 $v$ 线性，从而是双线性映射。考虑 $f_i(\cdot,v)$ 分解为 $\alpha_{v}\circ \mu_i$ ， $f_i(x,v)+f_i(x,w)=f(x,v+w)$ ，于是 $\alpha_v(\mu_i(x))+\alpha_w(\mu_i(x))=\alpha_{v+w}(\mu_i(x))$ ，类似地可以验证保持数乘。从而就证明了 $\alpha_v$ 关于 $v$ 线性。

又因为对每个 $(\varinjlim M_i)\times N$ 出发双线性映射，它复合上 $\mu_i\times 1$ 都给出一族符合约束的双线性映射族，所以我们给出的双线性映射族到 $(\varinjlim M_i)\times N$ 出发双线性映射的对应关系也是满的，因此现在就有了我们想要的，$M_i\times N$ 出发双线性映射族，和 $(\varinjlim M_i)\times N$ 出发双线性映射的自然的一一对应关系。换言之，我们验证了 $\varinjlim(M_i\otimes N)$ 满足 $(\varinjlim M_i)\otimes N$ 的泛性质。$\square$

另证：$\mathrm{Ex.\ 2.18}$ 中已经说明同一个direct set的两个direct system之间的自然变换一一对应于它们direct limit间的线性映射。现在对典范双线性映射 $g_i:M_i\times N\to M_i\otimes N$ ，固定某个 $v\in N$ ，则得到一个自然变换，从而 $M\to P$ 的线性映射，显然它关于 $v$ 也线性，于是 得到一个双线性映射 $M\times N\to P$ ，从而有一个线性映射 $\phi:M\otimes N\to P$ ，而我们从线性映射族 $\mu_i\otimes 1:M_i\otimes N\to  M\otimes N$ 分解出唯一的线性映射 $\psi:P\to M\otimes N$ ，容易验证这两者互逆，从而是同构。$\square$

