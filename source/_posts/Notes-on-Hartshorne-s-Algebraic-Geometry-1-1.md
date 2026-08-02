---
title: Notes on Hartshorne's Algebraic Geometry 1-1
date: 2025-12-06 23:38:45
tags: [数学, 代数, 代数几何]
---
$\mathrm{Ex.\ 1.1.}$ (a) $k[x,y]/(x-y^2)\cong k[x]$ , 从而 $(x-y^2)$ 是素理想从而radical, $I(Y)=(x-y^2)$ . (b) $k[x,y]/(xy-1)\cong k[x,x^{-1}]$ . (c) 考虑对一个仿射变换(线性变换+平移) $A$ , $A$ 作用于代数集 $V(f)$ 得到 $V(f\circ A^{-1})$ 仍然是多项式, 且对应多项式环 $k[x,y,\cdots]=k[A^{-1}x,A^{-1}y,\cdots]$ ($A^{-1}g$ 指 $A^{-1}$ 自然地作用于变元, 将变元变为原来变元的线性组合), 故可逆仿射变换在同构意义上不改变坐标环. 而对二次曲线 $ax^2+bxy+cy^2+dx+ey+f$ , 如果二次式部分是完全平方式, 则仿射变换 $x'=\sqrt{a}x\pm \sqrt{b}y$ , $y'=dx+ey+f$ 下(因为不可约所以是可逆仿射变换, 否则可以变形为 $x'$ 的二次多项式, 因为 $k$ 代数闭所以可约)会具有 $y-x^2$ 标准型; 同时如果二次式部分不是完全平方式, 先变成 $x^2+y^2+cx+dy+f$ 形式, 再仿射变换则可变成 $x^2+y^2-1$ 标准型, 考虑 $u=x+iy, v=x-iy$ 则可变为 $uv-1$ 形式.

$\mathrm{Ex.\ 1.2.}$ $Y=V(y-x^2, z-x^3)$ , 由 $k[x,y,z]/(y-x^2, z-x^3)\cong k[x]$ 知 $(y-x^2, z-x^3)$ 是素理想(从而radical), 从而 $Y$ 是 $\dim 1$ 不可约代数集且 $I(Y)=(y-x^2, z-x^3)$ .

$\mathrm{Ex.\ 1.3.}$ $V(xz-x)=V(x)\cup V(z-1)$, 而 $V(x^2-yz)\cap V(x)=V(yz)\cap V(x)=V(x,y)\cup V(x,z)$ , 且 $V(x^2-yz)\cap V(z-1)=V(z-1,x^2-y)$ . 于是 $V(x^2-yz, xz-x)=V(x,y)\cup V(x,z)\cup V(z-1,x^2-y)$ (考虑这三个代数集对应的坐标环易知其不可约). 

$\mathrm{Ex.\ 1.4.}$ 考虑 $\mathbb{A}^2$ 中对角线 $V(x_1-x_2)$ , 因为 $\mathbb{A}$ 非Hausdorff所以对角线在乘积拓扑下不闭 (如果对角线闭则对 $a\ne b$ , 存在包含 $(a,b)$ 的开集 $O_1\times O_2$ 与对角线不交, 也就是 $O_1\cap O_2=\varnothing$ , 即证Hausdorff).

$\mathrm{Ex.\ 1.6.}$ 不可约空间中任意两个开集都有交. $Y$ 不可约等于 $Y$ 中任意开集在 $Y$ 中闭包是 $Y$ , 等于在 $X$ 中闭包是 $\overline{Y}$ , 即为 $\overline{Y}$ 不可约. 

$\mathrm{Ex.\ 1.8.}$ 因为空集没有不可约分支, 只需讨论 $Y\cap H\ne \varnothing $ 的情况. 假设 $Y=V(\mathfrak{p})$ , $H=V(f)$ , 则 $Y\cap H$ 对应 $(\mathfrak{p}, f)$ , 它的不可约分支对应包含 $\mathfrak{p}$ 和 $f$ 的极小素理想, 也对应 $k[x_1,\cdots,x_n]/\mathfrak{p}$ 中包含 $f$ 的极小素理想. 由于 $Y\cap H$ 非空且 $H\not\subset Y$ , 所以 $f$ 在 $A(Y)$ 中非零非可逆元, 而 $A(Y)$ 是整环故由1.11A,  $A(Y)$ 中包含 $f$ 的极小素理想具有高度 $1$ , 由  1.8A(b) 即 $Y\cap H$ 的不可约分支具有维数 $r-1$ .

$\mathrm{Ex.\ 1.9.}$ $V(\mathfrak{a})$ 的不可约分支 (因为不可约集闭包也不可约所以不可约分支是闭集) 对应包含 $\mathfrak{a}$ 的极小素理想, $V(\mathfrak{a})$ 的不可约闭子集对应包含 $\mathfrak{a}$ 的素理想. 假设 $\mathfrak{a}=(a_1,\cdots,a_r)$ , 取包含 $\mathfrak{a}$ 的极小素理想 $\mathfrak{p}$ , 对 $r$ 归纳证明 $\mathrm{ht}(\mathfrak{p})\leqslant r$ , 从而由1.8A(b) $\dim V(\mathfrak{p})\geqslant n-r$ : 由归纳假设, 在商环 $k[x_1,\cdots,x_n]/(a_r)$ 中, 包含 $(a_1,\cdots,a_{r-1})$ 的极小素理想高度至多为 $r-1$, 且由1.11A, 包含 $a_r$ 的极小素理想高度至多为 $1$ , 从而包含 $\mathfrak{a}$ 的极小素理想长度至多为 $r$.

$\mathrm{Ex.\ 1.10.}$ (a) 只需证明任何 $Y$ 中的不可约闭集严格升链可以提升到 $X$ 中的不可约闭集严格升链. 事实上对 $Y$ 中的如此升链 $Y_0\subset Y_1\subset \cdots \subset Y_n$ , $\overline{Y_i}$ 都是 $X$ 中的不可约闭集 (Ex.1.6) , 且因为 $Y_i$ 是 $Y$ 中闭集所以 $Y_i=\overline{Y_i}\cap  Y$ , 故 $\overline{Y_i}\ne\overline{Y_{i+1}}$ , 所以 $\overline{Y_0}\subset \overline{Y_1}\subset \cdots \subset \overline{Y_n}$ 是 $X$ 中不可约闭集的严格升链. 

(b) 由(a)只需证明 $\dim X\leqslant \sup \dim U_i$ . 考虑 $X$ 中不可约闭集的严格升链 $Y_0\subset Y_1\subset \cdots \subset Y_n$ 和开集 $U$, 如果 $Y_i\cap U$ 非空, 因为它是 $Y_i$ 中非空开集所以 $\overline{Y_i\cap U}=Y_i$ , 从而由 $Y_i\ne Y_{i+1}$ 得到 $Y_i\cap U\ne Y_{i+1}\cap U$ ; 此外, 因为 $U$ 开, $Y_i\cap U$ 中开集也是 $Y_i$ 中开集, 在 $Y_i$ 中稠密从而在 $Y_i\cap U$ 中稠密, 所以 $Y_i\cap U$ 不可约, 且是 $U$ 中闭集. 因此对 $Y_0 \cap U_i$ 非空的 $U_i$ (这样的 $U_i$ 一定存在),  $(Y_j\cap U_i)$ 是 $U_i$ 中不可约闭集升链.

(c) 考虑 $X={a,b}$ , 唯一非平凡开集 $U={a}$. 事实上这个例子对应DVR的Spec, $A$ 是DVR时 $\operatorname{Spec} A=\{ (0), \mathfrak{m} \}$, 唯一的非平凡开集是 $\{ (0) \}$ .

(d) 考虑在 $\mathbb{N}$ 上定义拓扑, 其中非空真子闭集具有 $\mathbb{N}_{\leqslant n}$ 形式, 则容易验证这定义了一个诺特拓扑空间 (闭集降链稳定) , 且其中任何闭集都不可约, 从而有无限长不可约闭集严格升链于是无穷维.

$\mathrm{Ex.\ 1.11.}$ 考虑到 $t=\frac{y}{x}=\frac{z}{y}$ 和 $x=t^3$ , 按是否有某个分量为 $0$ 分类讨论, 则 $I(Y)=(y^2-xz, z^2-x^2y, yz-x^3)$ , 具体来说如果这三个式子同时成立, 则如果 $x,y,z$ 有一者为 $0$ 则全为 $0$ , 如果全不为 $0$ , 令 $t=\frac{y}{x}=\frac{z}{y}$ 则后两个式子相当于 $x^2=tz=t^3x$ ...... (PS 这三个元素都不能去掉, 去掉第3/1/2个生成元会导致多出来x/y/z轴)

显然 $A(Y)\cong \mathbb{C}[t^3,t^4,t^5]$ 的分式域在 $\mathbb{C}$ 上具有 $\mathrm{tr.deg}=1$ , 从而 $\dim Y=1$ 即 $\mathrm{ht}(I(Y))=2$ . 下证 $I(Y)$ 非二元生成: 注意到 $I(Y)\subset (x,y,z)^2$ , 且 $y^2-xz, z^2-x^2y, yz-x^3\in I(Y)$ , 三者 $k$-线性无关, 从而 $I(Y)/(x,y,z)^3$ 作为 $k$-线性空间 $\dim=3$ , 从而 $I(Y)$ 作为理想生成元至少三个.

$\mathrm{Ex.\ 1.12.}$ 考虑 $f=y^2+x^2(x-1)^2$ , $f=(y+ix(x-1))(y-ix(x-1))$ 故在 $\mathbb{R}$ 上不可约, 而 $V(f)=\{ (0,0), (0,1) \}$ 可约.