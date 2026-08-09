---
title: Notes on Hartshorne's Algebraic Geometry 1-2
date: 2025-12-06T23:38:49.000Z
tags:
  - 数学
  - 代数
  - 代数几何
articleId: notes-on-hartshorne-s-algebraic-geometry-1-2
category: mathematics/algebraic-geometry/hartshorne-algebraic-geometry
order: 4
---
$\mathrm{Ex.\ 2.1.}$ 通过 $\mathbb{P}^n$ 中点与 $\mathbb{A}^{n+1}$ 中过原点直线的对应, $V(\mathfrak{a})$ 可以理解为 $\mathbb{A}^{n+1}$ 中 $\mathfrak{a}$ 的代数集, 从而命题只是Hilbert零点定理的立即推论.

$\mathrm{Ex.\ 2.2.}$ (ii)$\implies$(i): 定义. (i)$\implies$(ii): 上一题的立即推论. (iii)$\iff$(ii): 若 $S_d\subset \mathfrak{a}$ , 则 $S_1=(x_1,\cdots,x_n)\subset \sqrt \mathfrak{a}$ , 即 $S_+\subset \sqrt{\mathfrak{a}}$ , 而 $S_+$ 为极大理想, 所以 $\sqrt{\mathfrak{a}}$ 是 $S_+$ 或 $S$ . 

$\mathrm{Ex.\ 2.4.}$ 对闭集 $Y$,$Y_1$,$Y_2$, $Y\subset Y_1\cup Y_2$ 等价于 $I(Y)\supset I(Y_1)\cap I(Y_2)$ , $Y$ 不可约等于 $Y$ 此时包含于 $Y_1,Y_2$ 之一, 等于 $I(Y_1)$, $I(Y_2)$ 之一包含于 $I(Y)$ . 又从定义自然有 $V(\mathfrak{ab})=V(\mathfrak{a}\cap \mathfrak{b})$ , 所以 $I(Y)\supset I(Y_1)\cap I(Y_2)$ 等价于 $I(Y)\supset I(Y_1)I(Y_2)$ .由此即知 $Y$ 不可约等价于 $I(Y)$ 是素理想.

$\mathrm{Ex.\ 2.5.}$ (a) $\mathbb{P}^n$ 中闭集严格降链对应于 $S$ 中齐次根理想严格升链, 后者是诺特环. (b) 取 $\mathbb{P}^n$ 中极小的不可被写成不可约闭集有限并的闭集 $Y$ , 则 $Y$ 本身可约, 从而可约表示为 $Y$ 真闭子集的有限并, 按假设后者都是不可约闭集的有限并, 从而矛盾.

$\mathrm{Ex.\ 2.6.}$ 设 $\mathbb{P}^n$ 的affine covering是 $\bigcup U_i$ , $U_i$ 到 $\mathbb{A}^n$ 的同胚 $\varphi_i$ 把 $(x_0:\cdots:x_n)$ 打到 $\left( \frac{x_0}{x_i}, \cdots, \frac{x_n}{x_i} \right)$ , 其中不出现 $x_i/x_i$ . 假设 $Y$ 是射影簇, $Y_i=Y\cap U_i$ 是 $Y$ 中开集, 其中开集是 $Y$ 中开集, 于是由于 $Y$ 不可约任何两个 $Y_i$ 中开集有交即 $Y_i$ 不可约, 所以 $Y_i$ 是affine variety.  $S(Y)$ 是齐次理想 $I(Y)$ 的商环从而是分次环.

在此同胚下, 一个 $Y_i$ 上的多项式函数 $f(y_1,\cdots,y_n)$ 可以被视作 $\varphi_i^*f=f\left( \frac{x_0}{x_i}, \cdots, \frac{x_n}{x_i} \right)$ , 由于 $Y$ 不可约, $Y_i$ 在 $Y$ 中稠密, 所以 $f$ 在 $Y_i$ 上为 $0$ 当且仅当它的齐次化 $x_i^{\deg f}f\left( \frac{x_0}{x_i}, \cdots, \frac{x_n}{x_i} \right)$ 在 $Y$ 上为 $0$ . 因此, $f\mapsto \varphi_i^*f$ 是 $A(Y_i)\to S(Y)_{x_i}$ 单射, 它的image为 $S(Y)_{x_i}$ 中全部 $\deg 0$ 元素. 现证明 $A(Y_i)[u,u^{-1}]\to S(Y)_{x_i}$ : , $x_i$ 在 $S(Y)_{x_i}$ 中 $\deg 1$ , 而 $A(Y_i)$ 已经等同于 $S(Y)_{x_i}$ 中零次元素, 所以 $S(Y)_{x_i}\cong A(Y_i)[x_i,x_i^{-1}]$ .

考虑维数, 由 $\mathrm{Ex}.1.10$ 和1.7, $\dim Y=\sup \dim Y_i$ 且 $\dim Y_i=\dim A(Y_i)$ , 而由于1.8A和 $S(Y)$ 是整环, $\dim S(Y)=\dim S(Y)_{x_i}=\dim A(Y_i) +1$ .

$\mathrm{Ex.\ 2.7.}$ (a) 由上一题结论, $\dim \mathbb{P}^n=\dim S -1=n$ . (b) 考虑affine covering $U_i$, $\bar{Y}\cap U_i$ 是 $U_i$ 中的不可约仿射簇, 且如果 $\bar{Y}\cap U_i\ne \varnothing$ , 由于它是 $Y\cap U_i$ 在 $U_i$ 中闭包, 有 $Y\cap U_i\ne \varnothing$ . 此时由1.10, $\dim Y\cap U_i=\dim \bar{Y}\cap U_i$ . 由Ex.1.10b, 对上式取上确界得到 $\dim Y=\dim \bar{Y}$ .

$\mathrm{Ex.\ 2.8.}$ 由Ex.2.6, $\dim Y=n-1$ 则 $\dim S(Y)=n=\dim S-1$, 从而 $\mathrm{ht}(I(Y))=1$ , 由1.12A, $I(Y)=(f)$, 其中 $f$ 不可约 (且因为 $I(Y)$ 是齐次理想, $f$ 齐次). 反过来, 如果 $Y=V(f)$ , 则同样由2.6, $\dim Y=n-1$ .

$\mathrm{Ex.\ 2.9.}$  (a) 直接来自于齐次理想 $I(Y)$ 的定义. (b) $I(Y)=(y-x^2,z-x^3)$ . $\bar{Y}=\{ (s^3:s^2t:st^2:t^3) \}$ , 假设齐次坐标是 $w,x,y,z$ , 则 $I(\bar{Y})=(wy-x^2,y^2-zx,wz-xy)$ (关于 $y-x^2, y^2-zx, z-xy$ 局部化), 事实上在理想中这三个约束下 $w,z$ 不全为 $0$ , 分类讨论: $w,z$ 之一为 $0$ 时 $x,y=0$, 分别对应点 $(1:0:0:0)$ 和 $(0:0:0:1)$; $w,z$ 都不为零时, 前两个约束相当于 $\alpha=\frac{t}{s}=\frac{x}{w}=\frac{y}{x}=\frac{z}{y}$, 事实上确定了这个点 $(1:\alpha:\alpha^2:\alpha^3)$ . 如果仅对 $I(Y)$ 中生成元齐次化, 则会得到 $(wy-x^2,w^2z-x^3)$ , 对应在 $w=1$ 时为 $\mathbb{A}^3$ 中twisted cubic; 在 $x=1$ 时为 $wy=1,w^2z=1$, $w,y,z$ 均非零所以也是正常twisted cubic (此时是去掉了零点的twisted cubic); 而在 $y=1$ 时, 约束为 $w=x^2, w^2z=x^3$ , 从而 $x^4z=x^3$ 即 $x^3(zx-1)=0$ (此时约束相当于 $w=x^2$ 且 $x^3(zx-1)=0$ ), 比起twisted cubic ( $zx-1$ 部分) 多出来了无穷远处的三重直线 $x=w=0$ . 因此对 $I(Y)$ 的生成元直接齐次化未必是 $I(\bar{Y})$ . 

$\mathrm{Ex.\ 2.10.}$  (a) 设 $f=f_0+f_1+\cdots\in I(C(Y))$, 则对任意 $x\in C(Y)\backslash \{ 0 \}$ , $$f(\lambda x)=f_0(x)+\lambda f_1(x)+\lambda^2 f_2(x)+\cdots=0\quad\forall \lambda\in k$$恒成立, 而代数闭域是无限域, 所以 $f_i(x)=0$ , 从而 $f_i\in I(C(Y))$ . 因此 $I(C(Y))$ 是齐次理想, 而对一个齐次多项式, 它属于 $I(C(Y))$ 就等价于它属于 $I(Y)$ , 由此 $I(C(Y))=I(Y)$ 而 $C(Y)$ 是仿射代数集. (b) Ex.2.4b (c) 设 $Y$ 是proj variety, 则 $\dim C(Y)=\dim S(Y)=\dim Y+1$ . 对一般情况, 由于irr集和素理想的对偶, $Y$ 的irr component $Y_i$ 对应的 $C(Y_i)$ 正是 $C(Y)$ 的irr component, 取上确界即知 $\dim C(Y)=\dim Y+1$ .

$\mathrm{Ex.\ 2.11.}$ (a) $V(f_1,\cdots,f_r)=\bigcap V(f_i)$ (b) 考虑 $S=k[x_0,x_1,\cdots,x_n]$ 商去 $r$ 条线性约束, 将线性多项式中诸 $x_i$ 对应系数看作 $k^{n+1}$ 中元素 $\alpha_0,\cdots,\alpha_{r-1}$ , 不妨设 $\alpha_i$ 线性无关, 扩充为 $k^{n+1}$ 一组基 $\alpha_0,\cdots,\alpha_n$, 则 $S=k[\alpha_0,\cdots,\alpha_n]$, 因此 $A(Y)=k[\alpha_r,\cdots,\alpha_n]$ 的维数大于等于 $n-r+1$ , 由Ex.2.6, $\dim Y\geqslant n-r$. (c) $C(Y),C(Z)$ 是 $\mathbb{A}^{n+1}$ 的 $r+1,s+1$ 维线性子空间, 而 $r+1+s+1>n+1$ , 从而 $C(Y\cap Z)$ 是维数大于等于 $1$ 的线性子空间, 因此 $Y\cap Z$ 非空且是linear variety.

(c) 另证: 由于这是linear variety, 和上一问一样的技术可约说明 $I(Y)+I(Z)$ 是素理想, 从而 $I(Y\cap Z)=I(Y)+ I(Z)$ 且 $\mathrm{ht} (I(Y\cap Z))\leqslant \mathrm{ht}(I(Y))+\mathrm{ht}(I(Z))=2n-r-s\leqslant n$ , 从而 $\dim Y\cap Z\geqslant 0$ , 即 $Y\cap Z$ 非空 (Hartshorne要求不可约集非空, 所以空集维数无定义...). 前已证明此时 $I(Y\cap Z)$ 也由线性多项式生成, 且是素理想, 因此 $Y\cap Z$ 非空时它是linear variety.