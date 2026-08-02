---
title: Notes on Etingof's Representation Theory
date: 2026-04-23T21:35:08.000Z
tags: null
articleId: notes-on-etingof-s-representation-theory
category: mathematics/algebra/etingof-representation-theory
order: 1
---
$\mathrm{Prop.\ 3.14.}$ 对 $A$ 的半单表示, $V=\bigoplus n_iV_i$ , $V$ 的任何子表示都具有形式 $W=\bigoplus r_iV_i$ , 并且在此意义下, $W\to V$ 嵌入对应的 $r_iV_i\to n_i V_i$ 可以看作一个 $r_i\times n_i$ 矩阵对应的线性映射

首先考虑如下事实: 如果 $V$ 不可约, 那么 $nV\to mV$ 按分量考虑都是数乘, 也就是 $V\to mV$ 由 $v\mapsto (q_1v,\cdots,q_mv)$ 给出, 从而 $nV\to mV$ 相当于某个 $n\times m$ 矩阵.

事实上取 $W$ 的不可约子表示 (对维数归纳, 或者对 $\sum n_i$ 归纳并且考虑对某个 $V_i$ 投影的 $\ker$ 即可..) $P$ , 则 $P\hookrightarrow V$ factors through $n_iV_i$ , 其中 $P\to n_iV_i$ 每个分量都是数乘, 把 $v$ 打到 $(q_1v,\cdots,q_nv)$ . 如上讨论, $P$ 的image是 $n_i V_i$ 的直和项, 从而 $W$ 是 $P$ 和 $W$ 到这个image的投影的kernel的直和...

$\mathrm{Prob.}\ 3.3.3.$ (a) 考虑到 $V=\bigoplus 1_i V$ , 题中欲证结论皆显然. (b) 假设有不可约表示 $M_d(k)v$ , 则 $M_d(k)v = \sum M_d(k)E_{ii} v$ , 因此存在某个 $i$ , $M_d(k)v=M_d(k)E_{ii}v$ . 而 $M_d(k)E_{ii}v=\left<{E}_{1i}v,\cdots,{E}_{di}v \right>$ . 同时由于 $k^d$ 是不可约表示, $M_d(k)$ 在 $k^d$ 中非零向量上作用传递, 所以由于 $M_d(k)E_{ii} v$ 非零, $E_{ji}$ 的非零线性组合作用于 $v$ 也非零, 因此诸 ${E}_{ji}v$ 线性无关且 $M_d(k)E_{ii}v\cong k^d$ .

更一般的, 对任何有限维表示 $V$ 和 (作为线性空间而非子表示的) 分解 $V=\bigoplus E_{ii}V$ . 而矩阵 ${E}_{ji}$ 把 $e_i$ 打到 $e_j$ , 因此在诸 $E_{ll}$ 中, 唯一右乘 $E_{ji}$ 等于 $E_{ji}$ 的是 $E_{ii}$ , 唯一左乘 $E_{ji}$ 等于 $E_{ji}$ 的是 $E_{jj}$ , 因此 ${E}_{ji}$ 在 $V$ 上的作用是把 $e_iV$ 同构的打到 $e_jV$ , 其它的 $e_lV$ 打到 $0$ . 具体来说就是 ${E}_{jj}{E}_{ji}E_{ii}={E}_{ji}$ . 因此取 $E_{11}V$ 的一组基 $v_1,\cdots,v_r$ , 则 $V=\bigoplus_i M_d(k)E_{11} v_i$ , 将 $V$ 分解为不可约表示的直和.

(c) b中已经证明诸 $V_i=k^{d_i}$ 给出 $A$ 全部的不可约表示, 因此任何 $A$ 的有限维表示都是若干 $V_i$ 的直和.

$\mathrm{Thm.\ 3.7.1.}$ 一个证明如下: 假设 $V_i, W_j$ 是两个合成列, 考虑由 $V_i \cap W_j$ 形成的矩阵. 对其中任何相邻的小方格

$$\begin{matrix} V_{i+1} \cap W_j & \!\!\!\!\!\!\text{---}\!\!\!\!\!\! & V_{i+1} \cap W_{j+1} \\ \vert & & \vert \\ V_i \cap W_j & \!\!\!\!\!\!\text{---}\!\!\!\!\!\! & V_i \cap W_{j+1} \end{matrix}$$

方格中每列上下两个之商都是 $V_{i+1}/V_i$ 的子模, 左右两个都是 $W_{j+1}/W_j$ 的子模. 由于 $V_{i+1}/V_i$ 是单模, 该垂直商必定是 $V_{i+1}/V_i$ 或者 $0$ ; 水平商也同理 , 必定是 $W_{j+1}/W_j$ 或者 $0$ . 简单分类讨论可知只有以下几种情况: 要么四个商都是 $0$ , 要么左=右且下=上, 要么两边同时左/下商是 $0$，右/上的商分别是 $V_{i+1}/V_i$ 和 $W_{j+1}/W_j$ . 因此挨个改变小方格可知两个合成列的因子在置换意义下相同.

具体来说这个置换如下: 由于 $W_j$ 从 $0$ 变到全空间, 固定行 $i$ 扫描过去, 必然存在唯一的一个位置使得垂直商从 $0$ 跳跃到 $V_{i+1}/V_i$ . 在这个跳跃发生的特定 $(i,j)$ 处有 $V_{i+1}/V_i\cong W_{j+1}\cong W_j$ .

$\mathrm{Prob.}\ 3.8.3.$ 只有 (i) 用到了代数闭, 所以只需证明这个. 存在某个 $n$ , 使得 $\operatorname{Im} (\theta^n)=\operatorname{Im} (\theta^{n+1})=\cdots$ , 此时有 $W=\operatorname{Im} (\theta^{n})\oplus \operatorname{Ker} (\theta^n)$ . 如果 $\theta:W\to W$ 非同构, 那么就必须有 $\operatorname{Im} (\theta^n)=0$ , 即 $\theta^n=0$ .

$\mathrm{Prob.}\ 3.8.4.$ (i) 假设 $v_1,\cdots,v_n$ 是 $V$ 的一组 $K$-基, 那么 $v_i\otimes 1$ 是 $V\otimes _K L$ 的一组 $L$-基, 类似的如果 $w_1,\cdots,w_m$ 是 $W$ 一组基, 那么 $w_j\otimes 1$ 是 $W\otimes _KL$ 一组基, 且因为同构 $m=n$ . 因此 $V\otimes _K L\to W\otimes _K L$  的一个 $A\otimes _KL$-同构作为 $L$-线性映射由一个 $n\times n$ 矩阵 $({a}_{ij})$ 构成, 矩阵系数在 $L$ 中. 因此如果 $V\otimes _KL\cong W\otimes _KL$ , 令 $B=K[a_{11},\cdots,{a}_{nn}, \det({a}_{ij})^{-1}]$ , 则有 $A\otimes _KB$-模的同构 $V\otimes_KB\cong W\otimes _K B$ . 对 $B$ 使用诺特正规化得到 $B$ 是某个多项式环 $K[t_1,\cdots,t_r]$ 的整扩张, 从而由Going-Up $B$ 中有对应 $(t_1,\cdots,t_r)$ 的极大理想 $\mathfrak{m}$ , $L'=B/\mathfrak{m}$ 从而成为 $K$ 的有限扩张, 而 $V\otimes _K L'\cong W\otimes _K L'$ .

因此可以假设 $L$ 是 $K$ 的有限扩张. 此时作为 $K$-模 $L=K^d$ , 从而作为 $A$-模也就是 $A\otimes _K K$-模, $V\otimes _KL\cong V^d$ (作为 $k$ 模有这个直和分解, 同时分解出来的都是 $A$-模...) , 类似的有 $A$-模同构 $W\otimes _KL\cong W^d$ , 从而由Krull-Schmidt定理 $V\cong W$ .

(ii) 同样的理由, 不妨设 $L\cong K^n$ , 那么 $V^n$ 是 $W^n$ 的直和项. 考虑把 $W$ 分解为indecomposable子模的直和, 由Krull-Schmidt定理 $V$ 是 $W$ 的直和项.

$\mathrm{Prob.}\ 3.8.5.$ (i) 假设对 $f,g\in A$ , 存在 $x\in [0,1)$ , $f(x),g(x)$ 均非零, 那么取 $x$ 某个小开邻域, 取只在 $[0,1)$ 中这个小邻域上非零的函数 $h$ , 并且定义 $h'$ 为在小邻域外为 $0$ , 邻域内为 $hf/g$ 的连续函数, 那么 $fh=gh'$ 非零. 因此如果 $A=A_1\oplus A_2$ , 令 $D(A_i)=\{ x\in [0,1):\exists f\in A_i, f(x)\ne 0 \}$ , 那么 $[0,1)$ 为 $D(A_1),D(A_2)$ 的无交并, 然而这不可能 (代数一点的说, 不可分解为直和等价于没有幂等元...). 类似的 $M$ 也indecomposable.

(ii) $M$ 中元素在 $(0,1)$ 和 $(1,2)$ 上反号, 所以必有零点, 因此不可能由一个元素生成, 从而不同构于 $A$ . 关于 $M\oplus M$ , 考虑两个 $M$ 中没有公共零点的函数 $u,v$ , 那么

$$\begin{pmatrix} u(x) & -v(x) \\ v(x) & u(x) \end{pmatrix}$$

定义了一个 $M\oplus M\to A\oplus A$ 的 $A$-线性映射, 并且因为 $u^2+v^2$ 处处非零, 这个矩阵可逆并且易知逆矩阵对应的映射限制在 $A\oplus A$ 上是到 $M\oplus M$ 的.

实际上可以这么理解这个证明: 满足 $f(1) = f(0)$ 的函数相当于圆环上的连续函数, 圆柱面这个向量丛中的连续截面, 而 $f(1)=-f(0)$ 相当于莫比乌斯带中的连续截面, 这也是 $A$ 和 $M$ 的几何意义. 而对于直和, $A\oplus A$ 相当于圆环上每个点处的纤维是 $\mathbb{R}^2$ (想象一个甜甜圈) 时的连续截面模, 类似的 $M\oplus M$ 相当于两个坐标轴分别反转再粘合, 事实上这就是旋转180°, 每个点的纤维也都是 $\mathbb{R}^2$ 的连续截面模. 

考虑 $M \oplus M$ 中的一对函数 $\boldsymbol{m}(x) = \begin{pmatrix} m_1(x) \\ m_2(x) \end{pmatrix}$ , 边界条件是 $\boldsymbol{m}(0)=-\boldsymbol{m}(1)$ , 而 $A\oplus A$ 中的边界条件则是 $\boldsymbol{m}(0)=\boldsymbol{m}(1)$ , 因此想要同构相当于要找一条可逆矩阵 $\mathrm{GL}_2(\mathbb{R})$ 中的连续路径, 从 $I$ 到 $-I$ , 而上文就给出了一个例子 (类似的例子还有逐渐旋转到180°..).

$\mathrm{Prob.}\ 3.9.1.$ 
