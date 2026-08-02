---
title: Notes on MIT18.785 4
date: 2026-04-09 23:57:03
tags:
---
$\mathrm{Prob.}\ 0.$ (a) 比如说在 $\mathbb{Q}$ 上, 对正数 $x$ 令 $d(x,0)=x$ , $d(-x,0)=2x$ 即可.

(b) 令 $i$ 为嵌入 $K\to L$ , 对任何 $K$ 中柯西列 $(a_n)$ , 对任何 $L$ 中 $0$ 的开邻域 $U$ , 下标充分大的 $a_n-a_m$ 落入 $i^{-1}(U)$ 从而落入 $U$ , 因此 $(a_n)$ 在 $L$ 中也是柯西列, 从而收敛, 由此给出 $\widehat{K}\to L$ 同态, 并且如果这是拓扑域的同态那么要求它连续, 从而唯一. 

这里拓扑嵌入是指 $K$ 同胚于其在 $L$ 中的image. 因此由于 $K$ 有绝对值从而每个点有可数邻域基, 如果 $x$ 属于 $K$ 在 $L$ 中的闭包, 那么 $x$ 任意邻域都包含 $K$ 中元素, 考虑一系列 $x$ 的邻域 $x+U_n$ , 其中 $i^{-1}(U_n)$ 组成 $K$ 中 $0$ 邻域基 (且按包含关系递减), 再取 $x_n\in x+U_n$ 则 $x_n$ 为柯西列且收敛于 $x$ , 从而 $\widehat{K}=L$ . 反过来 $\widehat{K}$ 中 $K$ 稠密.

(c) $$\frac{1}{4} = \frac{1}{1+3} = 1 - 3 + 3^2 - 3^3 + 3^4 - 3^5 + \dots=\cdots 02021$$类似的$$-\frac{5}{6}=\frac{1}{3}\cdot\frac{2+3}{1-3}=3^{-1}\cdot (\cdots 222+\cdots 110)=\cdots1110.2$$当然这两个用长除法也能计算. 比如说对 $\frac{1}{4}$ , $4=11_3$ , 为用 $11_3$ 的倍数得到 $1$ , 首先凑个位数 $a_0=1$ , 然后十位需要变成 $0$ , 因此还需 $a_1=2$ , 因为进位可知 $a_2=0$ , 并且给千位进位了一个 $1$ , 所以重新回到了 $a_1$ 的情况...

而对 $-\frac{5}{6}$ , 考虑给 $-5$ 加上 $3$ 充分大的幂次, 得到 $-5=\dots 22211$ , 从而同样的算法 (乘以 $2$ 消去...) 依次可知 $a_0=2$ , $a_1=0$ , $a_2=1$ ......然后再考虑 $\frac{1}{3}$ 即可.

考虑Hensel引理, 迭代为 $x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}=\frac{1}{2}(x_n+\frac{7}{x_n})$ , $x_0=1$ ,  那么迭代两次得到 $x_2=\frac{23}{8}$ , 前四位小数是精确的, 因此 $\sqrt{7}=\cdots 0111$ .

$\mathrm{Prob.}\ 1.$ (a) 只需证明 $\zeta_{n}$ 的极小多项式是分圆多项式 $\Phi_n(x)$ , 从而 $L$ 的 $\mathbb{Q}$-自同构与 $\zeta_{n}\mapsto \zeta_{n}^i$ 一一对应. 事实上由分圆多项式的性质容易知道这个多项式不可约, 此外对不整除 $n$ 的素数 $p$ 和 $\zeta_{n}$ 的极小多项式 $f$ , 我们要证明如果 $\zeta$ 是 $f(x)$ 的根则 $\zeta^{p}$ 也是. 实际考虑分解有 $x^n-1=f(x)h(x)$ , 由Gauss引理 $f,h$ 是整系数多项式, 如果 $\zeta^p$ 是 $h(x)$ 的根则 $\zeta$ 是 $h(x^p)$ 的根, 从而 $h(x^p)=f(x)g(x)$ , $h(x^p),f(x)$ 有公因子, 这意味着在 $\mathbb{F}_p$ 中, $h(x)^p=f(x)g(x)$ , 因此 $\mathbb{F}_p[x]$ 中 $f(x),h(x)$ 有公因子, 与 $x^n-1=f(x)h(x)$ 在 $\mathbb{F}_p$ 中无重根矛盾.

(b) 题中告诉我们 $p$ 非分歧. 令 $K=\mathbb{Q}(\zeta_n)$ , 假设 $\mathfrak{q}|(p)$ , 按定义对应的Frobenius元素 $\sigma_{p}$ 满足 $\sigma_{p}(\alpha)\equiv \alpha^{p}\pmod{p}$ 对任意 $\alpha\in \mathcal{O}_K$ 成立. 而 $[p]$ 对应的 $\mathbb{Q}$-自同构 $\tau$ 满足 $\tau(\zeta_n)=\zeta_n^p$ , 从而商去 $\mathfrak{q}$ 后它和 $\sigma_{p}$ 相同, 从而它就是 $\sigma_{p}$ .

(c) $\mathbb{Q}(\zeta_p)$ 的二次子域对应 $(\mathbb{Z}/p\mathbb{Z})^{\times }$ 中的 $\frac{p-1}{2}$ 阶子群, 而 $\frac{p-1}{2}$ 阶子群是唯一的. 只需说明 $\mathbb{Q}(\sqrt{p^*})$ 是 $\mathbb{Q}(\zeta_p)$ 的子域, 这个是经典Gauss和技巧. 具体来说, 考虑 $g = \sum_{a=1}^{p-1} \left(\frac{a}{p}\right) \zeta_p^a$ , 从而$$g^2 = \left(\frac{-1}{p}\right) p = (-1)^{(p-1)/2} p = p^*$$

(d) 由Prop.7.22, $\mathbb{Q}(\sqrt{p^*})/\mathbb{Q}$ 关于 $(q)$ 的Artin符号是 $\mathbb{Q}(\zeta_p)/\mathbb{Q}$ 关于 $(q)$ 的Artin符号在 $\mathbb{Q}(\sqrt{p^*})$ 上的限制. 如果 $q$ 是奇素数, 那么$$\sigma_{q}(g)=\sum_{a=1}^{p-1} \left(\frac{a}{p}\right) \zeta_p^{aq}=\left( \frac{q}{p} \right) g$$同时 $\left( \frac{\mathbb{Q}(\sqrt{p^*})/\mathbb{Q}}{(q)} \right) =\left(\frac{D}{q}  \right)$ 其中 $D$ 为 $\mathbb{Q}(\sqrt{p^*})/\mathbb{Q}$ 的判别式, 从而事实上 $D=p^*$ ( $p^*$ 总是模 $4$ 余 $1$ ). 因此有 $\left( \frac{q}{p} \right) =\left( \frac{p^*}{q} \right)$ .

如果 $q=2$ , 考虑 $\mathbb{Q}(\zeta_8)/\mathbb{Q}$ , $\sigma_p$ 把 $\zeta_8$ 打到 $\zeta_8^p$ , 而 $\sqrt{2} = \zeta_8 + \zeta_8^{-1}$ , 从而 $\sigma_p(\sqrt{2}) = \zeta_8^p + \zeta_8^{-p}$ . 由于 $\zeta_8^4 = -1$, 分类讨论 $p$ 模 $8$ 同余 $\pm 1$ 或 $\pm 3$ 可知分别有 (这个二次元的artin符号) $\left(\frac{2}{p}\right)=(-1)^{(p^2-1)/8}$ .

$\mathrm{Prob.}\ 2.$ (a) 令$$x_j = \frac{x^j}{1 + x^j}$$则当 $j \to \infty$ 时，$|x^j|_1 \to \infty$ , 因此 $x_j\to 1$, 且若 $i>1$ , 当 $j \to \infty$ 时，$|x^j|_i \to 0$ , 从而 $x_j\to 0$ .

(b) 一个基础的引理是: 

> Lemma. 对两个绝对值 $|\ |_1, |\ |_2$ , 则两者等价当且仅当 $|x|_1 < 1 \iff |x|_2 < 1$

> 证明: 这个引理来自于如下观察. 对加法赋值 $v_1, v_2: K^\times \to \mathbb{R}$ , 如果两者定义了相同的赋值环, 也就是 $v_1(x) \geqslant 0 \iff v_2(x) \geqslant 0$ , 那么两者等价. 考虑 $x^{-1}$ , 这也等价于 $v_1(x) < 0 \iff v_2(x) < 0$ . 因为绝对值非平凡, 找一个 $v_1(y)>0, v_2(y)>0$ 的 $y$ , 对任意 $v_1(x)>0$ 和任何有理数 $\frac{p}{q}$ , 注意到 $\frac{v_1(x)}{v_1(y)}>\frac{p}{q}$ 当且仅当$$v_1(x^qy^{-p})=qv_1(x)-pv_1(y)>0$$从而等价于 $\frac{v_2(x)}{v_2(y)}>\frac{p}{q}$ . 因此可知 $v_1=cv_2$ . 

> 现在对这两个乘法绝对值, 有$$|x|_1^m < |y|_1^n \iff \left| \frac{x^m}{y^n} \right|_1 < 1\iff |x|_2^m < |y|_2^n$$取对数$$\frac{\ln|x|_1}{\ln|y|_1} > \frac{n}{m}\iff\frac{\ln|x|_2}{\ln|y|_2} > \frac{n}{m}$$因此得到 $|x|_1 = |x|_2^c$ . $\square$ 

现在, 对两个绝对值的情形, 由于互不等价, 存在 $y$ 满足 $|y|_1 < 1$ 但 $|y|_2 \geqslant 1$ , 和 $z$ 满足 $|z|_1 \geqslant 1$ 但 $|z|_2 < 1$ , 那么 $x=\frac{z}{y}$ 就是满足 $|x|_1 > 1$ 但 $|x|_2 < 1$ 的 $x$ . 

对一般情况, 考虑归纳. 假设对前 $n$ 个绝对值找到了对应的 $y$ , 满足 $|y|_1>1$ 且其它的 $|y|_j<1$ . 再找到 $z$ , 使得 $|z|_1>1$ 且 $|z|_{n+1}<1$ . 如果 $|y|_{n+1}\leqslant 1$ , 取 $x=y^mz$ , $m$ 充分大即可 ; 如果 $|y|_{n+1}>1$ , 那么那么取充分大的 $m$ ,  $x=\frac{y^mz}{1+y^m}$ 是满足要求的元素.

(c) 对任意 $i$ , 由 $W_n$ 存在序列 $(b_j)$ , 使得在 $|\ |_i$ 下 $b_j\to 1$ , 其它绝对值下 $b_j\to 0$ . 对每个 $i$ , 取其对应序列中下标充分大的某个 $y_i=b_{n_i}$ , 那么 $x=\sum a_iy_i$ 就是满足需求的元素.

(d) $|x|<1$ 当且仅当在对应拓扑下, $x^j\to 0$ . 因此如果拓扑相同, 由前述引理, 对应绝对值等价.

$\mathrm{Prob.}\ 4.$ (a) $x^2+1=0$ 模 $p$ 无根, 因此由Hensel引理在 $\mathbb{Q}_p$ 中无根. 此时 $(p)$ 是 $\mathbb{Q}(i)$ 中素理想. $p|a+bi$ 当且仅当 $p|a$ 且 $p|b$ , 因此 $\mathbb{Q}(i)$ 中定义的范数事实上相当于对 $\max(v_p(a),v_p(b))$ , 从而 $\mathbb{Q}(i)$ 中柯西列等价于实部和虚部分别是 $\mathbb{Q}$ 中柯西列, 从而 $\mathbb{Q}(i)_{\mathfrak{p}} \cong \mathbb{Q}_p(i)$ . 完备离散赋值域的有限扩张上绝对值等价意义上是唯一的, 但这两个绝对值规范化的话并一样.

(b) 考虑如下定理

> Thm. 如果 $p\ne 2$ , 那么$$\mathbb{Q}_p^\times \cong \mathbb{Z}\oplus \mathbb{Z}/(p-1)\mathbb{Z}\oplus \mathbb{Z}_p$$此时$$\mathbb{Q}_p^\times / (\mathbb{Q}_p^\times)^2 \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$$而$$\mathbb{Q}_2^\times \cong \mathbb{Z}\oplus  \mathbb{Z}/2\mathbb{Z}\oplus \mathbb{Z}_2$$且 $\mathbb{Q}_2^\times /(\mathbb{Q}_2^\times )^2\cong (\mathbb{Z}/2\mathbb{Z})^3$.

只需要考虑 $\mathbb{Z}_p^\times $ 的结构. $\mathbb{Z}_p^\times =\varprojlim (\mathbb{Z}/p^n\mathbb{Z})^\times$ . 

若 $p\ne 2$ , $(\mathbb{Z}/p^n\mathbb{Z})^\times$ 自然的满射到 $(\mathbb{Z}/p\mathbb{Z})^\times$ , 那么 $(\mathbb{Z}/p\mathbb{Z})^\times$ 的生成元提升到 $(\mathbb{Z}/p^n\mathbb{Z})^\times$ 的 $p-1$ 阶元 ( $x^{p^{n-1}}$ 仍然是相同元素的提升...). 从而正合列$$0\to 1+p\mathbb{Z}/p^n\mathbb{Z}\to (\mathbb{Z}/p^n\mathbb{Z})^\times\to (\mathbb{Z}/p\mathbb{Z})^\times\to 0$$两端群阶互素从而分裂.

与此同时, 对 $x=1+kp^j$ , 有$$x^p=1+kp^{j+1}+\cdots+k^pp^{jp}$$如果 $p>2$ , $jp\geqslant j+2$ , 那么 $x^p\equiv 1+kp^{j+1}\pmod{p^{j+2}}$ . 由此可知 $\mathbb{Z}/p^n\mathbb{Z}$ 中 $1+p$ 为 $p^{n-1}$ 阶. 因此 $(1+p\mathbb{Z}/p^n\mathbb{Z})^\times $ 是 $1+p$ 生成的 $p^{n-1}$ 阶循环群. 因此有$$(\mathbb{Z}/p^n\mathbb{Z})^\times\cong (\mathbb{Z}/p^{n-1}\mathbb{Z})\times (\mathbb{Z}/(p-1)\mathbb{Z})$$而 $p=2$ 时 $(\mathbb{Z}/2\mathbb{Z})^\times$ 退化为平凡群. 同时对 $x=1+kp^j$ , 需要 $j\geqslant 2$ 才有 $jp\geqslant j+2$ . 此时若 $n>2$ 我们只有 $1+p^2\mathbb{Z}/p^n\mathbb{Z}\cong \mathbb{Z}/p^{n-2}\mathbb{Z}$ , 而在模 $p^2=4$意义下 (因为此时模 $4$ 剩下的 $\pm 1$ 真的是子群, 从而分裂...) $$(\mathbb{Z}/2^n\mathbb{Z})^\times=1+2\mathbb{Z}/2^n\mathbb{Z}=\{ \pm 1 \}\times (1+4\mathbb{Z}/2^n\mathbb{Z})$$因此$$(\mathbb{Z}/p^n\mathbb{Z})^\times=\begin{cases} (\mathbb{Z}/p^{n-1}\mathbb{Z})\times (\mathbb{Z}/(p-1)\mathbb{Z}) & p\ne 2 \\ \mathbb{Z}/2\mathbb{Z} & p^n=2^2\\(\mathbb{Z}/2\mathbb{Z})\times (\mathbb{Z}/2^{n-2}\mathbb{Z})&p=2,n>2 \end{cases}$$
因此得到 $\mathbb{Q}_p^\times $ 的对应结构.
$\square$

现在按定理 $\mathbb{Q}_p^\times /(\mathbb{Q}_p^\times )^2\cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ , 一组代表元是 $\{ 1,p,u,up \}$ , 其中 $u$ 是任何一个可逆的二次非剩余, 因此不同的二次扩域有三个. 考虑 $\sqrt{p},\sqrt{up}$ 的极小多项式 $f$ 是Eisenstein多项式, 由Serre local fields prop.1.17 , $\mathbb{Z}_p$ 在扩域中的整闭包是 $\mathbb{Z}_p[\sqrt{p}]$ 或 $\mathbb{Z}_p[\sqrt{up}]$ 且完全分歧. 而 $u$ 的情况则由prop.15.非分歧.

(c) 类似的有 $7$ 种二次扩张. 

考虑Eisenstein多项式道理知偶数开根的扩张都分歧. 事实上也可以如此考虑: 假设 $v$ 是对应二次域的赋值, 那么 $e=v(2)$ 且假设扩张是 $\mathbb{Q}_2(\sqrt{2u})$ , $u$ 是unit也就是赋值 $0$ , 那么 $v(\sqrt{2u})=\frac{1}{2}(v(2)+v(u))=\frac{e}{2}$ , 从而 $e=2$ ...

现在考虑 $K = \mathbb{Q}_2(\sqrt{d})$ , 其中 $d$ 是奇数. 如果这个扩张非分歧, 那么 $e=1$ , 这相当于说域扩张下的离散赋值保持不变, 因此$$v(1-d)=\begin{cases} 1, & d \equiv 3 \pmod 4 \\ 2, & d \equiv 1 \pmod 4 \end{cases}$$同时 $1-d=(1+\sqrt{d})(1-\sqrt{d})$ , 考虑赋值知这里面一个赋值 $1$ 一个 $0$ , 假设 $v(1+\sqrt{d})=1$ , 那么 $\frac{1+\sqrt{d}}{2}$ 赋值非负, 从而在 $\mathbb{Z}_2$ 上整. 同时它的极小多项式是$$x^2 - x + \frac{1-d}{4} = 0$$因此这个扩张非分歧必须 $d\equiv 1\pmod{4}$ . 如果 $d \equiv 1 \pmod 8$ , 那么多项式在 $\mathbb{F}_2$ 中成为 $x^2+x$ , 由Hensel引理它在 $\mathbb{Q}_2$ 中有根; 如果 $d \equiv 5 \pmod 8$ , 在剩余域中它是 $x^2+x+1$ 不可约, 从而在 $\mathbb{Q}_2$ 上也不可约, 因此剩余域必须是二次扩张, 从而此时 $e=1$. 综上, 只有 $d \equiv 5 \pmod 8$ 时非分歧. 而 $\mathbb{Q}_2^\times /(\mathbb{Q}_2^\times )^2$ 一组代表元为 $\{ \pm 1, \pm 2, \pm 5, \pm 10 \}$ , 只有 $5$ 对应的一种情况满足条件.