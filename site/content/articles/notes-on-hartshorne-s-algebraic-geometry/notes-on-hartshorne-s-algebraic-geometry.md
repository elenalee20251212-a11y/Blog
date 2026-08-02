---
title: Notes on Hartshorne‘s Algebraic Geometry
date: 2025-07-09T00:14:02.000Z
tags:
  - 数学
  - 代数
  - 代数几何
articleId: notes-on-hartshorne-s-algebraic-geometry
category: mathematics/algebraic-geometry/hartshorne-algebraic-geometry
order: 2
---
> Chapter 2.1

**一般范畴上的层**：对预层 $\mathcal{F}$ 和开集 $U$ 的一组开覆盖 $U=\bigcup _{i\in I}U_i$ ，考虑图表

$$\mathcal{F}(U) \longrightarrow \prod_{i \in I} \mathcal{F}(U_i) \mathrel{\substack{\displaystyle\longrightarrow \\[-0.6ex] \displaystyle\longrightarrow}}\! \prod_{(i_0, i_1) \in I \times I} \mathcal{F}(U_{i_0} \cap U_{i_1})$$

左边的映射是 $s \mapsto \prod _{i \in I} s|_{U_ i}$ ，右边两个映射分别是 $s_i$ 作为 $i_{0}$ 和 $i_1$ 往 $U_{i_0}\cap U_{i_1}$ 上限制。如果这个图表对**任意** $U$ 和 $U$ 的开覆盖，左边映射都是右边的equalizer（或者说是右边双箭头的limit），则 $\mathcal{F}$ 是一个sheaf。具体的比如说对 $\mathsf{Set}$ ，$f$ 和 $g$ 的equalizer无非 $\{ x\in X:f(x)=g(x) \}$ ，所以 $\mathcal{F}(U)$ 上截面相当于一组相容的 $\mathcal{F}(U_i)$ 上截面，即得常见的sheaf定义。

**关于层化sheafication**：一个非层的预层例子是常值预层 $\mathcal{F}(U)=A$ ，考虑在两个连通分支 $U,V$ 上各取不同的 $x,y\in A$ ，则无法找到一个 $a\in A$ 同时限制在 $U,V$ 上是 $x,y$ ，是也就是同时等于 $x,y$ 。它的层化 $\mathcal{F}^+$ 则是连通分支那么多个份 $A$ 的乘积（考虑stalk皆为 $A$ ，section的定义相当于要求是 $U\to \bigsqcup _{p\in U} \mathcal{F}_p$ 的局部常值映射，所以在连通分支上有唯一取值）。

**关于direct image sheaf与inverse image sheaf**：关于 $f^+\mathcal{G}:U\mapsto \varinjlim_{V\supset f(U)}\mathcal{G}(V)$ 不是sheaf的例子，考虑取 $Y$ 为单点空间而 $X$ 不连通（$f:X\to Y$），$\mathcal{G}$ 相当于 $\mathcal{G}(Y)=A$ ，则我们得到了 $X$ 上常值预层 $\mathcal{F}(U)=A$ ，它不是层。

$\mathrm{Ex.\ 1.13.}$ 回忆 $\mathcal{F}^+$ 的section被定义为 $U\to \bigsqcup _{p\in U} \mathcal{F}_p$ 满足 $s(p)\in \mathcal{F}_p$ 且对任意 $p$ 存在 $p$ 的邻域 $V$ 上 $s$ 是某个 $t\in F(V)$ 的函数芽，即 $s(q)=t_q$ 。而平展空间被定义为使得 $\bar{s}:p\mapsto s_p$ 都连续的最强拓扑。考虑到 $\bar{s}$ 皆为单射，且如果 $s$ 和 $t$ 在某点 $p$ 处的函数芽相同，按定义它们在 $p$ 的某个邻域上相同（从而有交意味着在某个开集上相同），所以一组拓扑基正是 $\bar{s}(V)=\{ s_p:p\in V \}$ ，这里 $V\subset  U$ 是任意开集。假设 $f:U\to \bigsqcup _{p\in U}\mathcal{F}_p$ 是一个连续截面，如果 $V'=f^{-1}(\bar{s}(V))$ 非空，相当于在 $V'$ 上 $f(p)=s_p$ 恒成立，于是知U到平展空间的continuous section与 $\mathcal{F}^+$ 的section是一个东西。

注：从平展空间定义层的话，比如说 $\mathsf{Set}$ 上的sheaf，则需要一个拓扑空间 $E$ 和底空间 $X$ ，以及一个**局部同胚** $p:E\to X$ ，也就是对任意 $f\in E$ ，存在 $f$ 的邻域 $V$ ，$p:V\to p(V)=U$ 是同胚（在由 $p$ 得到的层 $\mathcal{F}$ 中，$x\mapsto p^{-1}(x)$ 就是 $s\mapsto s_x$ ），而 $\mathcal{F}(U)$ 被定义为 $U\to E$ 的continuous section全体。而局部同胚意味着对continuous section $s,t$ ，如果 $s(x)=t(x)$ 那么 $s,t$ 在 $x$ 某个更小的邻域上重合。

而对比如取值 $\mathsf{Ab}$ 的sheaf，则还要求 $\mathcal{F}_x=p^{-1}(x)$ 都有abel群结构，且 $E$ 上群运算（加法/取逆）连续。要求 $E$ 上群运算连续相当于要求stalk的运算保持代表元或者 $\mathcal{F}(U)$ 是一个abel群。现在说明一些关于等价的证明细节：群运算连续意味着 $\mathcal{F}(U)$ 关于群运算封闭，从而 $\mathcal{F}(U)$ 是Abel群；反过来若 $\mathcal{F}(U)$ 总是abel群，现证明群运算连续：对加法 $+:E\times _X E\to E$ ，取一个点 $(a,b)$ ，$(a,b)\in \mathcal{F}_z$，设 $s=a+b\in \mathcal{F}_z$ ，要证明 $+$ 在 $(a,b)$ 处连续，则只需证明 $s$ 任意邻域的原像是 $(a,b)$ 的邻域。而 $s$ 的任意邻域都包含某个 $s(U)=\{ S_x:x\in U \}$ ，$S$ 是 $s$ 的某个代表元,所以只需证明 $s(U)$ 的原像都是 $(a,b)$ 的邻域。类似取 $a,b$ 的代表元 $A,B$ ，对足够小的 $U$ ，$\mathcal{F}(U)$ 中有 $S=A+B$ ，从而 $a(U)\times _U b(U)$ 在 $+$ 作用下包含于 $s(U)$ ，由此知加法连续。取逆的证明并无区别，不再赘述。

$\mathrm{Ex.\ 1.18.}$ 设 $f:X\to Y$ 是连续映射，$\mathcal{F},\mathcal{G}$ 分别是 $X,Y$ 上的层，记 $f^+\mathcal{G}$ 为 $U\mapsto \varinjlim_{V\supset f(U)}\mathcal{G}(V)$ ，至于$f^+\mathcal{G}$ 关于 $U\subset U'$ 的限制映射考虑到定义 $f^+\mathcal{G}(U')$ 的偏序集是定义 $f^+\mathcal{G}(U)$ 的偏序集之子集，从而由colimit的universal property自然给出。类似地 $f^+$ 在 $\mathsf{PSh}(X)$ 中不同预层间的态射也由于colimit的构造，且关于 $\mathcal{G}$ 具有函子性。

只需证明 $f^+$ 是 $f_*$ 的左伴随，有自然同构

$$\mathsf{PSh}(X)(f^+\mathcal{G},\mathcal{F})\cong \mathsf{PSh}(Y)(\mathcal{G},f_*\mathcal{F})$$

证明此事由层化的universal property自然得到 $f^{-1}$ 是 $f_*$ 左伴随。先定义自然的映射 $i_\mathcal {G} : \mathcal{G} \to f_* f^+ \mathcal{G}$ 和 $c_\mathcal {F} : f^+ f_* \mathcal{F} \to \mathcal{F}$ 。事实上

$$f_*f^+\mathcal{G}(V)=f^+\mathcal{G}(f^{-1}(V))=\varinjlim_{V'\supset f(f^{-1}(V))}\mathcal{G}(V')$$

对应包含 $f(f^{-1}(V))$ 的偏序集中正包含 $V$ ，所以colimit自带了 $i_{\mathcal{G}}$ ；对 $f^+ f_* \mathcal{F}$ 则是

$$f^+f_*\mathcal{F}(U)=\varinjlim_{V\supset f(U)}\mathcal{F}(f^{-1}(V))$$

但对每个 $f(U)\subset V$ 都有 $U\subset f^{-1}(V)$ ，所以每个 $\mathcal{F}(f^{-1}(V))$ 到 $\mathcal{F}(U)$ 的限制给出了 $c_{\mathcal{F}}$ 。

现在给定态射 $\psi:f^+\mathcal{G}\to \mathcal{F}$ ，用 $f_*$ 作用之后再用 $i_{\mathcal{G}}$ 拉回得到 $f_*\psi i_{\mathcal{G}}:\mathcal{G}\to f_*\mathcal{F}$ ；类似地，给定 $\varphi:\mathcal{G}\to f_*\mathcal{F}$ ，用 $f^+$ 作用后再以 $c_{\mathcal{F}}$ 推出得到 $c_{\mathcal{F}}f^+\varphi:f^+\mathcal{G}\to \mathcal{F}$ 。验证它们是互逆的自然变换则大功告成：$f^+\mathcal{G}(U)$ 由包含 $f(U)$ 的 $\mathcal{G}(V)$ 构成， $f^+\mathcal{G}(U)\to \mathcal{F}(U)$ 就是这些 $\mathcal{G}(V)$ 到 $\mathcal{F}(U)$ 的一族相容同态，以 $f_*$ 作用后只考虑诸 $f^{-1}(V)$ ，而由于 $V$ 包含 $f(f^{-1}(V))$ 故colimit的cone构造中自带了 $\mathcal{G}(V)\to f_*f^+\mathcal{G}(V)$ ，复合起来正是 $\mathcal{G}(V)\to \mathcal{F}(f^{-1}(V))$ ；反过来 $\varphi$ 就是 $\mathcal{G}(V)\to \mathcal{F}(f^{-1}(V))$ ，每个满足 $f(U)\subset V$ 的 $\mathcal{F}(f^{-1}(V))$ 都有向 $\mathcal{F}(U)$ 的限制，于是用 $f^+$ 作用后以 $c_{\mathcal{F}}$ 推出相当于给定 $U$ ，所有 $f(U)\subset V$ 的 $V$ 对应的 $\mathcal{G}(V)\to \mathcal{F}(f^{-1}(V))\to \mathcal{F}(U)$ 给出的 $f^+\mathcal{G}(U)\to \mathcal{F}(U)$ 。

简而言之，两者作用分别是对 $f^+\mathcal{G}(U)\to \mathcal{F}(U)$ 取出所有colimit构造中带有的 $\mathcal{G}(V)\to \mathcal{F}(f^{-1}(V))$ ，以及对 $\mathcal{G}(V)\to f_*\mathcal{F}(V)$ 关于合适的 $V$ 对 $\mathcal{G}(V)\to \mathcal{F}(f^{-1}(V))\to \mathcal{F}(U)$ 取colimit，只需注意到对 $f(U)\subset V$ ，$\mathcal{G}(V)\to \mathcal{F}(U)$ 和 $\mathcal{G}(V)\to \mathcal{F}(f^{-1}(V))$ 只差一个限制，则立即可知两者互逆。

$\mathrm{Ex.\ 1.22.}$ 对开集 $U\subset X$ , 记 $U_{ij}=U_i\cap U_j\cap U$ , 将 $\mathcal{F}(U)$ 中元素定义为满足以下条件的一族 $f_i$ ：$f_i\in \mathcal{F}_i(U_i\cap U)$ ，且（考虑到层在开子集上的限制无需层化显然直接是层）则对任意 $i,j$ 都有 $\varphi_{ij}(U_{ij})(f_i|_{U_{ij}})=f_j|_{U_{ij}}$ . $\mathcal{F}(U)$ 到 $\mathcal{F}(V)$ 的限制将每个 $f_i$ 限制为 $f_i|_{U_i\cap V}$ , 由于 $\varphi_{ij}$ 是层的态射, 所以上面的限制良定义, 且使 $\mathcal{F}$ 成为预层. 

现在验证 $\mathcal{F}$ 是层：取 $U$ 的开覆盖 $V_j\cap U$ ，如果 $s,t\in\mathcal{F}(U)$ 在一切 $V_j\cap U$ 上限制相同，也就是每个 $U_i\cap U$ 分量 $s_i, t_i$ 在 $V_j\cap U\cap U_i$ 上相同, 由于 $\mathcal{F}_i$ 是层所以 $s_i=t_i$, 从而 $s=t$ , 粘合性质的证明也类似. 还需要构造同构 $\psi_i:\mathcal{F}|_{U_i} \stackrel{\sim}\to \mathcal{F}_i$ , 但考虑到对 $V\subset U_i$ ,  $\mathcal{F}|_{U_i}(V)=\mathcal{F}(V)$ 中section由它在 $V\cap U_i$ 上分量确定（ $U_j\cap V$ 分量由 $f_j=\phi_{ij}(V)(f_i|_{U_j\cap  V})$ 给出）, 从而得到了 $\psi_i:\mathcal{F}|_{U_i}\cong \mathcal{F}_i$. $\psi_j=\varphi_{ij}\circ \psi_i$ 也立即可得。

