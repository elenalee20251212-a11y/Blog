---
title: Notes on Hartshorne's Algebraic Geometry 2-2
date: 2025-09-27 00:33:41
tags: [数学, 代数, 代数几何]
---
> Chapter 2.2

ringed space非locally ringed的例子：取非局部环 $A$ ，定义预层 $\mathcal{O}(U)\equiv A$ ，则其层化 $\mathcal{O}^+(U)$ 是赋 $A$ 离散拓扑后全部 $U\to A$ 连续映射，它在任意点处的stalk都是 $A$ .

考虑affine scheme时一个重点是忽略 $D(f)$ 以外形式的开集，绝大多数时间这些开集实际上不大重要，而且 $D(f)$ 形式的主开集作为一组基实际上决定了 $\operatorname{Spec} (A)$ . 

关于Prop 2.2, 可以反过来将 $\mathcal{O}(D(f))=A[f^{-1}]$ 作为 $\operatorname{Spec} A$ 定义:

> $\mathrm{Prop.\ }$ 全体主开集 $D(f)$ 组成 $\operatorname{Spec} A$ 拓扑基, 令 $\mathcal{O}(D(f))=A[f^{-1}]$ , 则这定义了 $\operatorname{Spec} A$ 上的一个层

只需验证这个定义满足sheaf property. 取 $D(f)$ 和它的 (有限) 开覆盖 $D(f)=\bigcup D(f_i)$ , 由于 $\operatorname{Spec} A_f=D(f)$ , 不妨将 $A$ 替换为 $A_f$ , 则在 $A$ 中有 $a_1f_1+\cdots+a_nf_n=1$ . 

假设 $r\in \mathcal{O}(D(f))$ 在每个 $D(f_i)$ 上都是 $0$ , 也就是 $f_i^{n_i}r=0$ , 由于 $D(f_i)=D(f_i^{n_i})$ 不妨将 $f_i$ 替换为 $f_i^{n_i}$ , 则 $r=a_1f_1r+\cdots+a_nf_nr=0$ . 因此这是一个separated sheaf.

现在验证sheaf condition (与2.2b中满射证明无异) : 如果存在一族 $r_i/f_i^{n_i}\in \mathcal{O}(D(f_i))$ , 在 $D(f_i)\cap D(f_j)=D(f_if_j)$ 上, 也就是在 $A[f_i^{-1},f_j^{-1}]$ 中 $r_i/f_i^{n_i}=r_j/f_j^{n_j}$ , 下证存在 $r\in A$ , 在每个 $A[f_i^{-1}]$ 中 $r=r_i/f_i^{n_i}$ . 上面的相容性条件相当于 $(f_if_j)^{n_{ij}}(f_j^{n_j}r_i-f_i^{n_i}r_j)=0$ , 而 $r$ 的条件相当于 $f_i^{m_i}(f_i^{n_i}r-r_i)=0$ . 取充分大的 $N$ 并以 $f^N$ 替换 $f$ , 则相容性条件简化为 $(f_if_j)(f_jr_i-f_ir_j)=0$ , 令 $s_i=f_ir_i$ , 则 $s_if_j^2-s_jf_i^2=0$ , 再以 $f_i^2$ 替换 $f_i$ 得到 $s_if_j=s_jf_i$. $r$ 的条件 (将 $r_i/f_i$ 替换为 $r_if_i/f_i^{2}$ 之类的操作) 简化为 $f_ir=f_ir_i=s_i$ . 

取 $\sum a_if_i=1$ , 现在相容性条件为 $s_if_j=s_jf_i$ , 而 $r$ 的条件为 $f_ir=s_i$ . 如果 $r$ 存在则 $r=\sum a_if_ir=\sum a_is_i$ . 令 $r=\sum a_is_i$ , 则 $f_jr=\sum a_is_if_j=s_j\sum a_if_i=s_j$ , 由此满足上述条件的 $r$ 存在性得证. $\square$

$\mathrm{Ex.\ 2.1.}$ 对 $g/f^n\in A_f$ ， $\operatorname{Spec} A_f$ 中开集 $D(g/f^n)$ 就相当于 $D(f)\cap D(g)=D(fg)$ ，而 $\mathcal{O}(D(fg))=A_{fg}=(A_f)_g$ 。

$\mathrm{Ex.\ 2.2.}$ 按定义存在 $X$ 的开覆盖 $X=\bigcup U_i$ ，其中 $(U_i,\mathcal{O}_X|_{U_i})\cong \operatorname{Spec}  A_i$ ，而 $U\cap U_i$ 是 $U_i$ 中开集，所以是若干 $D(f_{ij})$ 的并，而 $(D(f_{ij}),\mathcal{O}_X|_{D(f_{ij})})\cong \operatorname{Spec} (A_i)_{f_{ij}}$ 且 $U=\bigcup _{ij} D(f_{ij})$ ，从而 $(U,\mathcal{O}_X|_U)$ 是scheme。

$\mathrm{Ex.\ 2.3.}$ ``(a)`` 如果 $(X,\mathcal{O}_X)$ reduced，取某个非零函数芽 $f\in \mathcal{O}_{X,p}$ ，它任何代表元 $(U, f \in \mathcal{O}(U))$ 都非幂零，所以 $f$ 非幂零；反过来如果 $\mathcal{O}_{X,p}$ 都reduced，那么对 $f\in \mathcal{O}(U)$ ， $f$ 幂零则 $f$ 在 $\mathcal{O}_{X,p}$ 中的像幂零，从而等于 $0$ ，按函数芽定义 $f$ 在 $p$ 的某个开邻域上限制为零，由于 $p$ 任意所以 $f=0$ 。

注：对scheme $X$ ，$U\mapsto \mathcal{O}_X(U)_{\mathrm{red}}$ 未必是层，比如说考虑 $X=\bigsqcup \operatorname{Spec} (A_i)$ ，其中 $A_i=k[t]/(t^n)$ ，那么 $\mathcal{O}_X(X)=\prod A_i$ ，考虑 $(t,t,\cdots)\in \mathcal{O}_X(X)$ ，它在一切 $\mathcal{O}_X(A_i)_{\mathrm{red}}$ 中是 $0$ ，然而在 $\mathcal{O}_X(X)$ 中不幂零。


``(b)`` 首先考虑affine scheme的情况，此时 $X=\operatorname{Spec} (A)$ ，因为 $\mathcal{O}_X(D(f))_{\mathrm{red}}=(A_f)_{\mathrm{red}}=(A_{\mathrm{red}})_{\bar{f}}$ ， $U\mapsto \mathcal{O}_X(U)_{\mathrm{red}}$ 在一组基 $\{ D(f) \}$ 上与层 $\operatorname{Spec} (A_{\mathrm{red}})$ 相同，而 $\operatorname{Spec} (A_{\mathrm{red}})$ 与 $\operatorname{Spec} (A)$ 有自然的同胚，所以它的层化就是 $\operatorname{Spec} (A_{\mathrm{red}})$ （考虑层化就是局部截面的 $U\to \bigsqcup \mathcal{O}_{X,p}$ 映射，满足层公理则局部截面粘成整体的截面……）。现在对一般的scheme $X$ ，存在开覆盖 $X=\bigcup U_i$, $(U_i,\mathcal{O}_X|_{U_i})\cong \operatorname{Spec} (A_i)$ ，在 $U_i$ 上对 $U→\mathcal{O}_X(U)_{\mathrm{red}}$ 层化的结果是 $\operatorname{Spec} ((A_i)_{\mathrm{red}})$ ，从而 $X_{\mathrm{red}}$ 是Scheme。

现在构造 $X_{\mathrm{red}}\to X$ ：令 $\mathcal{F}$ 为预层 $U\mapsto \mathcal{O}_X(U)_{\mathrm{red}}$ ，则有自然的预层态射 $\mathcal{F}\to \mathcal{O}_{X_{\mathrm{red}}}$ ，与 $\mathcal{O}_X(U)\mapsto \mathcal{O}_X(U)_{\mathrm{red}}$ 给出的 $\mathcal{O}_X\to \mathcal{F}$ 复合就给出一个ringed space的态射 $X_{\mathrm{red}}\to X$ （底空间的映射是 $\mathrm{id}$ 态射）。接下来证明它是scheme的态射：考虑它在仿射开集上的限制，如前所述，对某个仿射开集 $U_i\cong \operatorname{Spec} A_i$ ，在它的主开集 $D(f_i)$ 上 $\mathcal{F}$ 已经构成了一个层，所以 $\mathcal{O}_{X_{\mathrm{red}}}(D(f_i))=\mathcal{F}(D(f_i))=\mathcal{O}_X(D(f_i))_{\mathrm{red}}$ ，从而这个 $X_{\mathrm{red}}\to X$ 态射在 $U_i$ 上的限制是 $A_i\to (A_i)_{\mathrm{red}}$ 对应的 $\operatorname{Spec} ((A_i)_{\mathrm{red}})\to \operatorname{Spec} (A_i)$ ，$X_{\mathrm{red}}\to X$ 是这些scheme态射的粘合，从而是scheme的态射。

``(c)`` 由于 $X$ reduced, 每个 $\mathcal{O}_Y(V)\to \mathcal{O}_X(f^{-1}(V))$ 都可以分解为 $\mathcal{O}_Y(V)\to \mathcal{O}_Y(V)_{\mathrm{red}}\to \mathcal{O}_X(f^{-1}(V))$ , 按取red的预层定义 $\mathcal{O}_Y(U)_{\mathrm{red}}\mapsto f_*\mathcal{O}_X(V)$ 给出预层态射, 从而按层化泛性质提升到一个层态射 $\mathcal{O}_{Y_{\mathrm{red}}}\to f_*\mathcal{O}_X$ . 现在证明这是一个locally ringed space的态射, 也就是在stalk上的映射把极大理想拉回到极大理想, 从而得到了一个 $X\to Y_{\mathrm{red}}$ 映射 (底空间的映射还是 $f$): 

考虑取red和归纳极限交换, 而任何极大理想都包含 $\mathrm{rad}(0)$ , 从而 $f$ 是scheme态射意味着上述 $\mathcal{O}_{Y_{\mathrm{red}}}\to f_*\mathcal{O}_X$ 也是scheme态射. 而取red和归纳极限交换是因为某个 $\varinjlim A_\alpha$ 中元素是幂零元当且仅当存在幂零代表元 (否则任意幂次任何代表元非零, 意味着它任意幂次不等于零), 严格来说就是归纳系中 $(A_\alpha)\mapsto (A_\alpha)_{\mathrm{red}}$ 诱导的 $\varinjlim A_\alpha \to \varinjlim (A_\alpha)_{\mathrm{red}}$ 的ker正是 $\varinjlim A_\alpha$ 的幂零元.

还需说明 $X\to Y_{\mathrm{red}}\to Y$ 复合为 $f:X\to Y$ . 事实上考虑层间的态射 $\mathcal{O}_Y\to \mathcal{O}_{Y_{\mathrm{red}}}\to f_*\mathcal{O}_X$ , 因为主开集 $D(f)$ 上 $\mathcal{O}_{Y_{\mathrm{red}}}(D(f))=\mathcal{O}_Y(D(f))_{\mathrm{red}}$, 它在主开集上与 $f$ 相同, 从而这个它与 $f:\mathcal{O}_Y\to f_*\mathcal{O}_X$ 相同. 同时, $Y_{\mathrm{red}}\to Y$ 在底空间的映射是 $\operatorname{id}_Y$ , 所以复合映射与 $f$ 在底空间的映射也相同, 因此它就是 $f$.

$\mathrm{Ex.\ 2.4.}$ 事实上此题结论都任意locally ringed space都对, 也就是对locally ringed space $X$ 和仿射概形 $Y=\operatorname{Spec} A$ , 存在自然的双射$$\operatorname{Hom} (X,Y)\to  \operatorname{Hom} (A,\Gamma (X,\mathcal{O}_X))$$这个映射就是取global section对应的环同态. 首先证明单性: 考虑 $f,g:X\to Y$ , 如果它们诱导的 $\varphi:A\to \Gamma(X,\mathcal{O}_X)$ 相同, 取 $x\in X$ , 设 $f(x)=\mathfrak{q}\in \operatorname{Spec}  A$ , stalk间的映射满足交换图$$\begin{CD}
A=\mathcal{O}_Y(Y) @>>> \mathcal{O}_X(X) \\
@VVV @VVV  \\
\mathcal{O}_{Y,f(x)} @>>> \mathcal{O}_{X,x} 
\end{CD}$$其中 $\mathcal{O}_{X,x}$ 的极大理想 $\mathfrak{m}_x$ 被拉回到 $\mathfrak{q}$ , 也就是说 $\mathfrak{q}=f(x)$ 可以被 $\mathfrak{m}_x$ 沿 $\mathcal{O}_X(X)\to \mathcal{O}_{X,x}$ 和 $\varphi$ 拉回唯一确定, 于是 $f,g$ 在底空间的映射相同. 而考虑对应的层间映射 $\mathcal{O}_Y\to f_*\mathcal{O}_X$ , 在主开集 $D(f)$ 上 $\mathcal{O}_Y(D(f))=A_f$ 且有交换图$$\begin{CD}
A=\mathcal{O}_Y(Y) @>>> \mathcal{O}_X(X) \\
@VVV @VVV  \\
A_f=\mathcal{O}_{Y}(D(f)) @>>> \mathcal{O}_{X}(f^{-1}(D(f)) 
\end{CD}$$唯一确定了 $\mathcal{O}_Y(D(f))\to f_*\mathcal{O}_X(D(f))$ , 从而 $f=g$ .

再证明满性: 给定一个环同态 $\varphi:A\to \Gamma(X,\mathcal{O}_X)$ , 我们据此定义一个态射 $f:X\to Y$ . stalk $\mathcal{O}_{X,x}$ 的极大理想 $\mathfrak{m}_x$ , 沿着 $A\to \mathcal{O}_X(X)\to \mathcal{O}_{X,x}$ 被拉回为 $A$ 中素理想 $\mathfrak{q}$  (也就是 $\{ a\in A: \varphi(a)_x=0 \}$ ), 我们定义 $f(x)=\mathfrak{q}$ . 为证明 $f$ 连续, 只需注意到 $\mathfrak{q}\in D(h)$ 即 $\varphi(h)_x$ 在 $\mathcal{O}_{X,x}$ 中可逆, 也就是 $\varphi(h)$ 在 $x$ 某个开邻域上可逆, 所以如果 $x\in f^{-1}(D(h))=X_h$ , $x$ 某个开邻域也包含其中, 所以 $X_h$ 是开集.

关于环层之间的映射, 如前所述 $X_h$ 中每个点 $x$ , 都存在一个开邻域上 $\varphi(h)$ 可逆, 从而 $\varphi(h)|_{X_h}$ 可逆, 因此可以定义唯一使图表交换的映射$$\begin{CD}
\mathcal{O}_Y(Y)=A @>>> \mathcal{O}_X(X) \\
@VVV @VVV  \\
\mathcal{O}_{Y}(D(h))=A_h @>>> \mathcal{O}_{X}(X_h) 
\end{CD}$$具体来说这个映射是 $s/h\mapsto  (\varphi(s)|_{X_h})/(\varphi(h)|_{X_h})$ (因此stalk间映射为 $s_y/h_y\mapsto \varphi(s)_x/\varphi(h)_x$ ) 令 $y=f(x)=\mathfrak{q}$ , 按 $f$ 定义 $\mathfrak{q}$ 被打到 $\mathfrak{m}_x$ 中, 从而 $f$ 是stalk间的局部映射.

$\mathrm{Ex.\ 2.5.}$ 2.4的简单推论.

$\mathrm{Ex.\ 2.6.}$ 零环的Spec的空集, global section是零环本身. 而任何它到locally ringed space的态射 $f:\operatorname{Spec} 0\to Y$ 对应一个环层的态射 $f^{-1}\mathcal{O}_Y\to \mathcal{O}_0$ , 相当于(空集上的section)环同态 $\varinjlim_{U\subset  Y} \mathcal{O}_Y(U)\to 0$ , 因此 $\operatorname{Spec} 0$ 自然是locally ringed space范畴中的initial object.

$\mathrm{Ex.\ 2.7.}$ $Y=\operatorname{Spec} K=\{ * \}$ 是单点, $f:Y\to X$ 相当于(假设 $*$ 被打到 $x$)环同态 $\mathcal{O}_{X,x}=f^{-1}\mathcal{O}_{X}(Y)\to \mathcal{O}_{Y}(Y)=k$ , 它是局部同态所以相当于某个非零的 $k(x)\to K$ 嵌入.

$\mathrm{Ex.\ 2.8.}$  $\operatorname{Spec} k[\varepsilon]/(\varepsilon^2)$ 是单点 $\{ (\varepsilon) \}$ . 作为 $k$ 概形的 $\operatorname{Spec} k[\varepsilon]/(\varepsilon^2)\to \operatorname{Spec} k$ 由自然嵌入 $k\to k[\varepsilon]/(\varepsilon^2)$ 给出.  $X\to \operatorname{Spec} k$ 相当于对任意非空 $U\subset X$ 都有 $k\to \mathcal{O}_X(U)$ , 也就是 $\mathcal{O}_X(U)$ 都是 $k$-代数且限制映射为 $k$-代数同态. 

设 $f:\operatorname{Spec} k[\varepsilon]/(\varepsilon^2)\to X$ 把单点打到 $x\in X$ ,  $f^{-1}\mathcal{O}_X\to \operatorname{Spec}  k[\varepsilon]/(\varepsilon^2)$ 是 $k$-代数局部同态 $\varphi:\mathcal{O}_{X,x}\to k[\varepsilon]/(\varepsilon^2)$ , 局部性即 $\varphi^{-1}((\varepsilon))=\mathfrak{m}_x$, 由此 诱导出嵌入 $k(x)=\mathcal{O}_{X,x}/\mathfrak{m}_x\subset k$ , 但这是 $k$-代数所以 $\mathcal{O}_{X,x}/\mathfrak{m}_x=k$. 

而 $\varphi^{-1}((\varepsilon))=\mathfrak{m}_x$ 等价于 $\mathfrak{m}_x^2\subset \ker \varphi$ ( $\mathfrak{m}_x^2$ 被打到 $0$ 则它的像中元素在平方都是 $0$ , 在 $k[\varepsilon]/(\varepsilon^2)$ 中这种元素属于 $(\varepsilon)$ ). 如果有这样的 $\varphi$ 则 $\varphi|_{\mathfrak{m}_x}$ 诱导 $k$-模同态 $\mathfrak{m}_x/\mathfrak{m}_x^2\to (\varepsilon)\cong k$ ; 反过来因为是 $k$-代数且 $k(x)=k$, $\mathcal{O}_{X,x}$ 中元素可以唯一写成 $c+a$ 形式, $c\in k, a\in \mathfrak{m}_x$ , 故 $\mathfrak{m}_x/\mathfrak{m}_x^2\to k$ 线性映射, 也就是 $\mathfrak{m}_x/\mathfrak{m}_x^2$ 对偶空间中元素, 都可以延拓至 $\mathcal{O}_{X,x}\to k[\varepsilon]/(\varepsilon^2)$ 的 $k$-代数局部同态.

$\mathrm{Ex.\ 2.9.}$ 考虑affine covering $X=\bigcup U_i$ , 非空的 $Z\cap U_i$ 在 $U_i$ 中闭且不可约 (否则 $Z$ 是 $U_i$ 中两个真闭子集和 $U_i^c$ 的并...), 从而形如 $V(\mathfrak{p}_i)$ . 而 $Z\cap U_i\subset \overline{\{ \mathfrak{p}_i \}}$ , $Z\cap U_i$ 是 $Z$ 中开集从而稠密, 意味着 $Z=\overline{\{ \mathfrak{p}_i \}}$ . 同时由于Spec是 $\mathbb{T}_0$ 空间, $X$ 也是 $\mathbb{T}_0$ 空间, 即任何两点中两点之一的某个邻域不包含另一个点, $X$ 中不同元素的闭包不同, 所以generic point唯一.

$\mathrm{Ex.\ 2.11.}$ 对非零的 $x$ , 对应一个素理想 $\mathfrak{p}_x=(f(x))$ , 其residue field就是 $\mathbb{F}_p[x]/(f(x))=\mathbb{F}_{p^{\deg f}}$ . 而具有给定剩余域 $\mathbb{F}_{p^n}$ 点的数量, 就是 $\mathbb{F}_p$ 上 $n$ 次不可约首一多项式的数量. $\mathbb{F}_{p^n}$ 中元素都是可分多项式 $x^{p^n}-x$ 的根, 且对任何 $\mathbb{F}_{p^n}$ 里的元素 $\alpha$ , $\mathbb{F}_p[\alpha]=\mathbb{F}_{p^m}$ , 同时 $\mathbb{F}_{p^m}\subset \mathbb{F}_{p^n}$ 当且仅当 $m|n$ , 所以 $x^{p^n}-x$ 恰好是所有 $\mathbb{F}_p$ 上次数整除 $n$ 的首一不可约多项式乘积. 假设 $f(n)$ 表示 $\mathbb{F}_p$ 上 $n$ 次不可约多项式数量, 则 $\sum_{d|n}f(d)d=p^n$ , Mobius反演得到$$f(n)=\frac{1}{n}\sum_{d|n}\mu(d)p^{n/d}$$

$\mathrm{Ex.\ 2.12.}$ 

$\mathrm{Ex.\ 2.14.}$ (a) 定义. (b) $U=\bigcup_{a\in S_+} D_+(\varphi(a))$ 从而是开集. 令 $f(\mathfrak{p})=\varphi^{-1}(\mathfrak{p})$ , 则 $f^{-1}(D_+(g))=D_+(\varphi(g))\cap U=D_+(\varphi(g))$ , 从而 $f$ 是连续映射. 取 $\operatorname{Proj}S$ 中一组开集基 $\{ D_+(h_i) \}$ , 则 $\varphi$ 诱导出 $S_{h_i}^0=\mathcal{O}(D_+(h_i)))\to \mathcal{O}(D_+(\varphi(h_i)))=T_{\varphi(h_i)}^0$ 同态 $s/h_i^{n_i}\mapsto \varphi(s)/\varphi(h_i)^{n_i}$ (由于 $\varphi$ 保持分次所以它良定义) . 由于 $f$ 限制在仿射开集 $D_+(\varphi(g))\to D_+(g)$ 上是 $\varphi: S_{g}^0\to T_{\varphi(g)}^0$ 诱导出的仿射概形morphism, 由此粘合为scheme morphism $\varphi^{\sharp}:U\to \operatorname{Proj}S$ .

(c) 考虑到 $x^{d_{0}}\in T_{d_0\cdot \deg  x}$ , 于是 $\mathfrak{p}$ 等于 $\mathfrak{p}$ 中 $\deg \geqslant d_0$ 部分的radical. $\mathfrak{p}$ 被高次部分所唯一确定, 从而 $f$ 是单射, 且如果 $\varphi(S_+)\subset \mathfrak{p}$ , 则 $\mathfrak{p}=T_+$ , 所以 $U=\operatorname{Proj} T$ . 为证明 $f$ 是同构, 只需证明 $f$ 是仿射开集上同构粘合起来. 虽然 $\varphi$ 不是同构, 但是 $\varphi$ 诱导的 $S_{g}^0\to T_{\varphi(g)}^0$ 是同构 (显然这是满射, 至于单射考虑若 $\varphi (s)/\varphi(g)^k=0$ , 则 $\varphi(g^{d_0+l}s)=0$ , 从而 $g^{d_0+l}s=0$ , $s/g^k=0$ ) , 从而诱导仿射概形 $D_+(\varphi(h_i))\to D_+(h_i)$ 的同构. $f$ 在每一个 $D_+(\varphi(h_i))$ 上是同构, 从而 $f$ 是同构.

(d) 对 $V$ 中开集 $U$ , $\mathcal{O}_V(U)$ 中截面的定义为局部为 $S$ 中相同次数的齐次元素之商, 在 $t(V)$ 与 $\operatorname{Proj}S$ 自然的底空间同胚下与 $\operatorname{Proj} S$ 上环层的定义完全相同, 从而有自然的同构 $t(V)\cong \operatorname{Proj}S$ .

$\mathrm{Ex.\ 2.15.}$ (a) 回忆对仿射簇 $X$ , $t(X)$ 自然同构于 $\operatorname{Spec} A(X)$ . 一个点 $x\in t(V)$ 是闭点, 当且仅当对任意仿射开集 $x\in X\subset t(V)$ , $x$ 都是 $X$ 中闭点 ( 此时 $\{ x \}=X\cap \overline{\{ x \}}$ ). 因此不妨设 $V$ 是仿射簇, $t(V)$ 中的闭点相当于 $V$ 中的点, $A(V)$ 中的极大理想. $t(V)$ 中的点 $x$ 相当于 $A(V)$ 中的素理想 $\mathfrak{p}$ , 剩余域是 $k$-代数 $\operatorname{Frac}(A(V)/\mathfrak{p})$ , 它作为 $k$-代数同构于 $k$ 当且仅当 $\mathfrak{p}$ 是极大理想.

(b) 这个morphism诱导 $k$-代数同态 $\kappa(f(P))\hookrightarrow  k$ , 意味着 $\kappa(f(P))=k$ .

(c) 首先假设 $W$ 是仿射簇, 那么 $t(W)=\operatorname{Spec} A(W)$ , $\operatorname{Hom} _{\mathfrak{Var}}(V,W)$ 中同态相当于 $A(W)$ 到 $A(V)$ 的 $k$-代数同态, 从而相当于 $t(V)$ 到 $t(W)$ 的 $\mathfrak{Sch}/k$-morphism. 至于一般variety的情形, 取 $W$ 的仿射开覆盖再粘合即可. 具体来说, 假设 $W$ 有仿射开覆盖 $W=\bigcup U_i$ , 则 $t(U_i)$ 给出 $t(W)$ 的仿射开覆盖. 对morphism $\psi:V\to W$,  取 $\psi^{-1}(U_i)$ 的仿射开覆盖 $\bigcup _j V_{ij}$ , 那么 $\psi$ 相当于一族相容的 $\psi_{ij}:{V}_{ij}\to U_j$ , 如前所述 (来自于相同的坐标环同态诱导) 相当于 $\varphi_{ij}:t(V_{ij})\to t(U_j)$ , 从而 $\varphi_{ij}$ 也自然相容, 可以粘合成 $\varphi:t(V)\to t(W)$. 这种构造显然是双射.

$\mathrm{Ex.\ 2.16.}$ (a) 对 $x\in \operatorname{Spec} B$ , $\mathcal{O}_{X,x}$ 就是局部化 $B_x$ , $f_x\not\in \mathfrak{m}_x$ 即 $f\not\in x$ 或者说 $x\in D(\bar{f})$. $X_f$ 在每个仿射开集上开, 所以是 $X$ 中开集.

(b) $X$ 拟紧从而存在有限仿射覆盖 $\bigcup U_i$, 在每个仿射开集上 $a$ 在 $D(\bar{f})$ 上为 $0$ , 也就是存在 $n_i$ , $\bar{f}^{n_i}a|_{U_i}=0$ . 取 $n=\max n_i$ , 则 $f^na$ 在每个 $U_i$ 上为零从而等于零.

(c) $b$ 在 $U_i\cap X_f$ 上具有 $b_i/\bar{f}^{n_i}$ 形式, 其中 $b_i\in \Gamma(U_i,\mathcal{O}_{U_i})$ , 因为 $U_i$ 有限, 存在 $N$ , $f^Nb$ 在 $U_i\cap X_f$ 上是某个 $b_i\in \Gamma(U_i,\mathcal{O}_{U_i})$ 的限制. 令 $a=b_i|_{U_i\cap U_j}-b_j|_{U_i\cap U_j}$ , 则 $a$ 在 $X_f\cap U_i\cap U_j$ 上为零, 由b问存在 $n_{ij}$ , $f^{n_{ij}}a=0$ . 由此, 取充分大的 $n$, $f^nb$ 在 $U_i\cap X_f$ 上是某个 $b_i\in \Gamma(U_i,\mathcal{O}_{U_i})$ 的限制, 且 $U_i\cap U_j$ 上 $b_i=b_j$ , 将诸 $b_i$ 粘合为 $a$ , 则 $f^nb$ 是 $a$ 在 $X_f$ 上的限制.

(d) 考虑限制映射 $A\to \Gamma(X_f, \mathcal{O}_{X_f})$ , $f$ 在每个 $U_i\cap X_f$ 上可逆从而在 $X_f$ 上可逆, 因此诱导出映射 $A_f\to \Gamma(X_f,\mathcal{O}_{X_f})$ . 由c问这是满射, 由b问 (注意到b只用到了存在有限仿射开覆盖, 无需拟紧) $A\to \Gamma(X_f, \mathcal{O}_{X_f})$ 的ker等于 $A\to A_f$ 的ker, 因此这是单射.

$\mathrm{Ex.\ 2.17.}$ (a) 考虑 $f^{-1}$ 做为 $U_i\to f^{-1}(U_i)$ 和 $U_j\to f^{-1}(U_j)$ 的morphism, 在 $U_i\cap U_j$ 上限制相同, 事实上对 $f^{-1}(U_i\cap U_j)$ 中开集 $V$ , 限制得到的两个 $\mathcal{O}_X(V)\to \mathcal{O}_Y(f(V))$ 都是 $\mathcal{O}_Y(f(V))\to \mathcal{O}_X(V)$ 的逆, 从而相同. 因此可以粘合得到一个全局的 $f^{-1}:Y\to X$ . $f\circ f^{-1}$ 是 $Y\to Y$ morphism, 并且在每个 $U_i$ 上是 $\mathrm{id}$ , 从而 $f\circ f^{-1}=\mathrm{id}_Y$ , 同理 $f^{-1}\circ f=\mathrm{id}_X$ .

(b) 同时由Ex.2.4, $\Gamma(X,\mathcal{O}_X)=A$ 给出 $X\to \operatorname{Spec} A$ 的morphism $\varphi$, 它将 $\mathfrak{m}_x$ 打到 $\mathfrak{m}_x$ 在 $A\to A_x$ 下的原像, 由此 $X_f=\varphi^{-1}(D(f))$ , 而 $\mathcal{O}(D(f))\to \mathcal{O}_X(X_f)$ 的section间的环同态就是Ex.2.16d中定义的 $A_{f_i}\cong\Gamma(X_{f_i},\mathcal{O}_{X_{f_i}})$ , 从而 $\varphi$ 在 $X_{f_i}$ 上限制是 $X_{f_i}\cong \operatorname{Spec} A_{f_i}$ 同构, 而诸 $f_i$ 生成单位理想相当于说 $X=\bigcup X_f$ , 由a问 $\varphi$ 是同构, $X$ 是仿射概形.

$\mathrm{Ex.\ 2.18.}$ (a) 全体素理想的交是nilradical. (b) 回忆 $f(x)=\varphi^{-1}(x)$ , $f^{-1}(D(h))=D(\varphi(h))$ , 且对应的 $A_{h}=\mathcal{O}_{\operatorname{Spec} A}(D(h))\to \mathcal{O}_{\operatorname{Spec} B}(D(\varphi(h)))=B_{\varphi(h)}$ 由 $\varphi$ 诱导. $f^{\sharp}:\mathcal{O}_{X}\to f_*\mathcal{O}_Y$ 是单射当且仅当任何 $\mathcal{O}_X(U)\to \mathcal{O}_Y(f^{-1}(U))$ 是单射, 当且仅当全部主开集上的环同态 $A_h\to B_{\varphi(h)}$ 是单射, 这当且仅当 $\varphi:A\to B$ 是单射. 事实上取 $h=1$ 即可推出 $\varphi$ 是单射, 反过来如果 $\varphi$ 是单射, 则 $\varphi_h(a/h^n)=0$ 等价于 $\varphi_h(a)=0$ 等价于 $\varphi(a)$ 被某个 $\varphi(h)^m$ 零化等价于 $ah^m=0$ 等价于 $A_h$ 中 $a=0$ , 因此任意 $A_h\to B_{\varphi(h)}$ 是单射.

还需证明 $X$ 中任何开集都与 $f(Y)$ 有交, 也就是任何非空的 $D(h)\subset X$ 与 $f(Y)$ 有交. 由于 $\varphi$ 单射, 非幂零的 $h$ 的image $\varphi(h)$ 也非幂零, 从而 $f^{-1}(D(h))=D(\varphi(h))$ 非空. 因此 $f(Y)$ 稠密.

(c) 由于 $\varphi$ 是满射, $B\cong A/\ker (\varphi)$ , $f$ 给出 $\operatorname{Spec} B$ 与 $V(\ker (\varphi))$ 自然的同胚. 由于 $\varphi$ 满射, 任何stalk间映射 $A_{\mathfrak{p}}\to B_{\varphi(\mathfrak{p})}$ 都是满射 (满射相当于 $\varphi$ 是投影 $A\twoheadrightarrow B\cong A/\mathfrak{a}$ , 从而局部化 $A_{\mathfrak{p}}\to A_{\mathfrak{p}}/\mathfrak{a}A_{\mathfrak{p}}$ 自然也是满射), 从而 $f^{\sharp}:\mathcal{O}_X\to f_*\mathcal{O}_Y$ 作为环层同态是满射 ( 事实上由于 $A_h\to B_{\varphi(h)}$ 满, 截面的环同态都是满射 ). 

(d) $\varphi$ 给出 $A/ \!\ker (\varphi)\to B$ 的单射, 由b问它诱导的 $f':Y\to X'=\operatorname{Spec} (A/\!\ker (\varphi))$ 满足 $f'(Y)$ 在 $X'=V(\ker(\varphi))$ 中稠密, 因此由题设 $f(Y)=V(\ker(\varphi))$ . 

下文中将 $A$ 替换为 $A/\ker(\varphi)$ , 此时 $f(Y)=X$.  $f^{\sharp}:\mathcal{O}_X\to f_*\mathcal{O}_Y$ 是满射意味着它在stalk处皆为满射, 也就是 $\varphi:A\to B$ 自然诱导的 $\varphi:A_{f(\mathfrak{p})}\to B_{\mathfrak{p}}$ 都是满射, 由于 $f(\mathfrak{p})$ 取遍 $X$ , 由atiyah prop3.9, $\varphi$ 是满射. $\square$

一些Remark: 对概形 $X,Y$ 和 $f: X\to Y$ , 对截面 $s$, 记 $s(y)$ 为 $s$ 在 $\mathcal{O}_{Y,y}/\mathfrak{m}_{y}$ 中的image. 如果 $s\in \Gamma(Y)$ ,  定义 $V(s)=\{ y\in Y: s_y\in m_y \}$ , 则 $V(s)$ 是 $Y$ 中闭集 (在每个仿射开集中闭),  $Y$ 仿射时这和常见定义一致. 

local条件要求对任意 $Y$ 的截面 $s$ , 如果 $s(f(x))=0$ , 那么 $(f^{\sharp}s )(x)=0$ , 其中 $f^{\sharp}$ 是对应的 $\mathcal{O}_Y(V)\to \mathcal{O}_X(U)$ 映射 (应当视作某种拉回). 并且事实上这两者互相等价 (由于 $(f^\sharp_x)^{-1}(\mathfrak{m}_x) = \mathfrak{m}_{f(x)}$ ).  

现在 $f(x)\in V(s)$ 即 $s(f(x))=0$ , 从而 $(f^{\sharp}s)(x)=0$ . 记 $\varphi:\Gamma(Y)\to \Gamma(X)$ , 那这相当于 $\varphi(s)(x)=0$ . 因此 $f^{-1}(V(s))=V(\varphi(s))$ .