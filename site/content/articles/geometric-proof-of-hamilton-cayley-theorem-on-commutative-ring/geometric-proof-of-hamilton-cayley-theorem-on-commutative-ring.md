---
title: Geometric Proof of Hamilton-Cayley Theorem on Commutative Ring
date: 2025-12-17T00:13:44.000Z
tags: null
articleId: geometric-proof-of-hamilton-cayley-theorem-on-commutative-ring
category: mathematics/algebraic-geometry/algebraic-geometry-topics
order: 1
---

> 源于观测某个具体代数曲线时的突发奇想

这个证明改编自一个经典的HC定理证法, 即代数闭域上任何矩阵 $\Phi$ 都可上三角化, 也等于存在子空间滤链 $0=V_0\subset \cdots\subset V_n=V$ , $V_i$ 皆为 $\Phi$-不变子空间, 而每个 $V_{i+1}/V_i\cong k$ 上 $\Phi$ 都是常数 $\lambda_i$ , 对应特征值 $\lambda_i$, 从而 $(\lambda_iI-\Phi)V_{i+1}\subset V_i$ , 因此特征多项式代入 $\Phi$ 为 $0$.

> (Hamilton-Cayley) 假设 $A$ 是交换环, $M$ 是有限生成 $A$-模, $\phi:M\to M$ 是线性变换, 将其视作一个 $n\times n$ 矩阵 $\Phi$ (不唯一), 则存在一个 $A$ 的扩环 $A'$ , 其上 $\Phi$ 相似于上三角矩阵, 从而特征多项式 $\det(\lambda I-\Phi)$ 是 $\phi$ 的化零多项式

令 $R=\mathbb{Z}[x_{11}, x_{12},\cdots,x_{nn}]$ , 令 $B=(x_{ij})$ , $R$ 是整环, 可以嵌入某个域, 所以取 $S=\mathbb{Q}({x}_{ij})$ 上 $B$ 特征多项式的分裂域, 则在 $S$ 上 $B$ 相似于上三角矩阵. 而 $\mathbb{Z}[{x}_{ij}]$ 是平坦 $\mathbb{Z}$-模, $\mathbb{Q}({x}_{ij})$ 是 $\mathbb{Z}[{x}_{ij}]$ 局部化从而是平坦 $\mathbb{Z}[{x}_{ij}]$-模, 而 $S$ 是 $\mathbb{Q}({x}_{ij})$ 有限扩域所以是平坦 $\mathbb{Q}({x}_{ij})$-模, 由平坦模的传递性, $S$ 是平坦 $R$-模.

假设 $M=\left<a_1,\cdots, a_n \right>$ , 取 $\phi$ 的矩阵 $\Phi=({a}_{ij})$ , 下面证明在 $A$ 的某个扩环上, $\Phi$ 可上三角化: 由于只考虑矩阵, 不妨设 $M$ 是秩为 $n$ 的自由模. 考虑把 ${x}_{ij}$ 打到 ${a}_{ij}$ 的 $R\to A$ 同态, 使得 $A$ 成为 $R$-代数. 现在假设 $M$ 有一组基 $e_1,\cdots, e_n$ , 取 $\phi$ 的矩阵 $\Phi$ , 则 $\Phi$ 是 $\phi\otimes 1$ 在基 $e_i\otimes 1$ 下的矩阵. 现证明在 $M'=M\otimes_R S=(A\otimes_R S)^n$ 中, 作为 $A'=A\otimes_R S$-模同态,  $\Phi$ 可以上三角化: 

在 $A'$ 中, ${a}_{ij}\otimes 1=1\otimes {x}_{ij}$ , 故 

$$\Phi (e_i\otimes 1)=\sum ({a}_{ij}\otimes 1)(e_j\otimes 1)=\sum (1\otimes {x}_{ij})(e_j\otimes 1)$$

假设在 $S^n$ 中, $B$ 在基 $v_1,\cdots,v_n$ 下是上三角矩阵, 如果 $v_i=\sum {c}_{ij}e_j$ (这里 $e_j$ 是 $S^n$ 标准基) , 则照搬来的 $u_i=\sum (1\otimes {c}_{ij})(e_j\otimes 1)$ 也是 $M'$ 一组基. 设 $Bv_i=\sum {b}_{ij}v_j$ , 则

$$\Phi u_i=\sum (1\otimes {b}_{ij})u_j$$

由此 $\Phi$ 相似于上三角化矩阵 $B'=(1\otimes {b}_{ij})$. 

上三角化意味着有子模链 $0\subset M_1\subset \cdots\subset  M_n=M'$ , $M_{i+1}/M_i$ 都是循环模, 从而 $\lambda_{i+1}I-B'$ 零化 $M_{i+1}/M_i$ , 即把 $M_{i+1}$ 打到 $M_i$ , 因此 $B'$ 作为 $A'$-模线性变换的特征多项式 (也是 $\Phi$ 的特征多项式) 零化 $B'$ , 从而零化 $\Phi$. 而 $A$ 可以嵌入 $A'$ , $A$-模 $M$ 上线性变换 $\phi$ 的特征多项式, 在 $A'$ 中零化 $\Phi$ , 所以这个特征多项式在 $A$ 中也零化 $\Phi$ , 从而零化算子 $\phi$ 本身. $\square$

事实上从上面过程里, 我们也可以直接从这个模的滤链来定义特征多项式. 而且这个过程应该可以推广到任意scheme和vector bundle上, 即对scheme $X$ 和 $X$ 上rk $n$ 的vector bundle $\mathcal{E}$, 构造scheme $Y$ 以及 $\pi:Y\to X$ , 然后建立一个滤链

$$0=\mathcal{E}_0\subset \cdots\subset \mathcal{E}_n=\pi^*\mathcal{E}$$

使得每层 $\mathcal{E}_{i+1}/\mathcal{E}_i$ 都是line bundle...有空再更.

附一个具体例子: 考虑 $y^2-x^3$ 的坐标环 $A=\mathbb{C}[x,y]/(y^2-x^3)$ , 以及其极大理想 $A$-模 $\mathfrak{m}=(x,y)$ . 参数化来讲 $x=t^2, y=t^3$ , $A=\mathbb{C}[t^2,t^3]$ . 令 $\phi$ 为乘以 $t=y/x$ 的线性映射, 在生成元 $(x,y)$ 下它的矩阵是 $\Phi=\begin{pmatrix} 0&x\\1&0 \end{pmatrix}$ , 对应的扩环是 $A[v_2,\lambda]/(v_2x-\lambda, v_2\lambda-1)=A[\lambda,\lambda^{-1}]/(\lambda^2-x)=\mathbb{C}[t,t^{-1}]$ , 相当于把 $y^2-x^3$ 的尖点去掉然后拉平为去掉原点的直线. 此时考虑自由模 $F=\mathbb{C}[t,t^{-1}]^2$ , 取出的特征向量是 $v=(1\quad t^{-1})^{\mathsf{T}}$ , $F/\left<v \right> =\left<\bar{e_2} \right>$ , 而 $\Phi \bar{e_2}\equiv (0\ -t)^{\mathsf{T}}=-t \bar{e_2}$ , 于是在 $(v,e_2)$ 下的矩阵为 $\begin{pmatrix} t&t^2\\0&-t\end{pmatrix}$ .

> (Nakayama) 设 $M$ 是有限生成 $A$-模，$\mathfrak{q}$ 是 $A$ 的包含于 $A$ Jacobson根 $\mathfrak{r}$ 中的理想. 如果 $\mathfrak{q}M = M$，则 $M = 0$ .

**证明：** 事实上，如果 $M \neq 0$，由于有限生成 $M$ 有极大真子模 (因为生成元有限, 某个 $M$ 真子模的链不会包含所有生成元, 则它的并也不包含所有生成元, 从而zorn) , 也就是它有一个商模是单模, 因此同构于 $A/\mathfrak{m}$，其中 $\mathfrak{m}$ 是 $A$ 的一个极大理想. 而 $\mathfrak{q} \subset \mathfrak{m}$, 若 $\mathfrak{q}M = M$ , 则 $\mathfrak{m}M = M$ , 与 $\mathfrak{m}M \neq M$ 矛盾. $\square$

模的直观可以如此理解: $A$ 为 $\operatorname{Spec} A$ 上的函数环, $M$ 视 $\operatorname{Spec} A$ 上向量丛中向量场的集合, $M/\mathfrak{m} M=M\otimes A/\mathfrak{m}$ 视作 在闭点 $\mathfrak{m}$ 处的纤维 (这个点上粘的向量空间). 

对一个坐标环 $A$ , $M/\mathfrak{m} M$ 相当于 $M$ 基变换至 $A/\mathfrak{m}$ , 而 $A/\mathfrak{m}$ 通过在 $\mathfrak{m}$ 处的取值自然同构于 $k$, 于是纤维 $M/\mathfrak{m}M$ 中就可以通过这一取值同态将 $M$ 中元素里数乘 $A$ 中元素的部分都转换成取值, 也就是比如说 $v=fw$ , $v,w\in M, f\in A$ , 则在商环中 $\bar{v}=f(\mathfrak{m})\bar{w}$ .  假若 $M$ 有限生成, $M=\left<e_1,\cdots,e_n \right>$, 那么 $M$ 中元素 $v$ 具有 $v=\sum f_ie_i$ 形式, $f_i\in A$ . 从而在 $M/mM$ 中, $v=\sum f_i(m)e_i$ . 

特别的考虑一个具体的例子. 对坐标环 $A=k[x_1,\cdots,x_n]$ , $M$ 取坐标环上一点的极大理想, 不妨设这是原点, $M=(x_1,\cdots,x_n)$ . 对极大理想 $\mathfrak{m}$ , 假设 $\mathfrak{m}$ 对应的点是 $(p_1,\cdots,p_n)$ , 那么在 $M/\mathfrak{m}M$ 中, $p_jx_i=x_ix_j=p_ix_j$ . 如果 $\mathfrak{m}$ 非原点, 则至少一个 $p_i$ 非零, 此时 $\dim_k M/\mathfrak{m}M=1$ . 如果 $\mathfrak{m}$ 是原点, 则 $M/\mathfrak{m}M=\mathfrak{m}/\mathfrak{m}^2$ , 是原点的全部线性形式.

而对某个代数集 $A=k[x_1,\cdots,x_n]/\mathfrak{a}$ , $M$ 仍取原点, $\mathfrak{m}$ 为这个代数集上的极大理想, 记 $\mathbb{A}^n$ 中原点的理想是 $M_0$ , 则 $M=M_0/\mathfrak{a}$ , 且 $M/\mathfrak{m}M=M_0/(\mathfrak{a}, \mathfrak{m}M_0)$ . 假设 $\mathfrak{m}$ 对应的点是 $(p_1,\cdots,p_n)$ . 若 $\mathfrak{m}$ 非原点, 假设 $p_1\ne 0$ , 则对 $f\in \mathfrak{a}$ 在 $M/\mathfrak{m}M$ 中有

$$p_1f=\sum f_i(\mathfrak{m})(p_1x_i)=\left(  \sum f_i(\mathfrak{m})p_i \right)x_1$$

考虑在 $\mathfrak{m}$ 的取值知 $\sum f_i(\mathfrak{m})p_i=f(\mathfrak{m})=0$ , 从而 $\mathfrak{a}$ 在 $M/\mathfrak{m}M$ 中变成 $0$ , 仍为一维. 若 $\mathfrak{m}$ 是原点, 则得到余切空间 $\mathfrak{m}/\mathfrak{m}^2=\mathfrak{m}_0/(\mathfrak{a},\mathfrak{m}_0^2)$ , 相当于把 $\mathfrak{m}_0/\mathfrak{m}_0^2$ 里面, $\mathfrak{a}$ 在 $\mathfrak{m}_0$ 处泰勒展开里的一次项 (对应的线性函数) 消去了.

比如说函数环 $A=k[x,y]/(xy)$ , $M=(x,y)$ . 在极大理想 $\mathfrak{m}$ 处的纤维就是 $M/\mathfrak{m}M$ , 在 $0$ 处的纤维是 $M/(x,y)M=(x,y)/(x,y)^2$ , 某个 $M$ 中多项式的image就是它的第一次项; 在 $(a,b)$ (不妨设在x轴上, 即 $b=0$ ) 的纤维是 $M/(x-a,y)M=(x)/(x^2-ax)$ (这里记 $M$ 的生成元为 $e_1=x, e_2=y$ , 这个做商相对于基变换到 $A/(x-a,y)$ 上, 本来是 $xe_2=ye_1=0$ , 附加 $x=a,y=0$ , 于是 $ae_2=0e_1=0$ , 生成元仅剩 $e_1$ ...) , 那么代入一个多项式, 比如说 $x^2+2x$ 就得到 $(a+2)x$ , 也就是它在该点的取值/ $x$ 在该点的取值乘以 $x$. 

回到那个证明, 在这种视角下, 这个证明相当于说 $M$ 中的向量场为 $0$ 当且仅当它在任何闭点处的纤维里都是 $0$ , 从而如果 $M$ 非 $0$ 则具有至少一个纤维不是 $0$ , 从而此时 $\mathfrak{q}M\ne M$ .

关于一个Nakayama引理的应用: 

> 对不可约多项式 $F\in k[X,Y]$ , 曲线 $F=0$ 上点 $P$ 是simple point (重数为1) 当且仅当 $\mathcal{O}_p$ 是DVR

经过适当仿射变换, 不妨设 $P=(0,0)$ . 按定义, $P$ 是simple point相当于 $F=ax+by+(\deg \geqslant 2)$ , $a,b$ 不全是 $0$ . 不妨设 $b\ne 0$ , 即 $x=0$ 不是切线, 那么对 $\mathcal{O}_P$ 极大理想 (小写字母 $x,y$ 表示 $X,Y$ 在 $\mathcal{O}_P$ 中的image) $\mathfrak{m}=(x,y)=(X,Y)/F$ , $\mathfrak{m}/(x)=(Y)/(by+(\deg \geqslant 2))$ , 后者商去的是 $F(0,Y)$ , 则因为 $b$ 非零, $\mathcal{O}_P$ 是局部环, 所以 $b+y(\cdots)$ 可逆, 而 $by+(\deg \geqslant 2)=y(b+y(\cdots))=0$ , 因此 $y=0$ .

证明 $\mathfrak{m}/(x)$ 这一步实际上是Nakayama定理细节的展开, 就是想证明 $\mathfrak{m}=(x)$ , 那么只需观察额外商掉了 $x$ 之后它变成什么, 或者几何地讲, 本来 $\mathcal{O}_P$ 是 $P$ 点处关于 $x,y$ "无穷小"函数的局部函数环, 想证明它是dvr就要说明实际上这里并没有 "$y$ 方向" 的无穷小. 而 $F(0,Y)$ 中含有 $y$ , 从而商去 $x$ 后 $\bar{y}=0 \pmod {\mathfrak{m}^2}$, 从而 $\mathfrak{m}=(x,y)=(x)+\mathfrak{m}^2$ , 商去 $(x)$ 知 $\mathfrak{m}/(x)=\mathfrak{m}(\mathfrak{m}/(x)$ , 而 $\mathfrak{m}$ 在Jacobson根中, 应用Nakayama引理即知 $\mathfrak{m}/(x)=0$ .

> 考虑代数闭域 $k$ 以及 $M=k^n$, 线性变换 $\phi:M\to M$ , 把 $M$ 带有 $\phi$ 视作 $k[t]$-模 $M_{\phi}$ , 则

$$\operatorname{Supp}(M_{\phi})=\{ (t-\lambda):\lambda \text{ 是特征值} \}$$

由PID上有限生成模的结构定理, $M_{\phi}\cong \bigoplus k[t]/(f_i(t))$ , 其中 $f_1|\cdots|f_r$ , $f_r$ 是 $\phi$ 的极小多项式 $m_\phi$. 首先极小多项式零化 $M_{\phi}$ , 但在 $(0)$ 处的局部化可逆, 故 $(0)\not\in \operatorname{Supp}(M_{\phi})$ . 对非零理想 $(t-\lambda)$ , $M_{\phi}$ 的局部化为零, 当且仅当 $m_\phi\not\in (t-\lambda)$ , 即 $\lambda$ 不是 $\phi$ 的特征值.
