---
title: Notes on Weibel's Homological Algebra
date: 2026-06-30T19:35:24.000Z
tags: null
articleId: notes-on-weibel-s-homological-algebra
category: mathematics/algebra/weibel-homological-algebra
order: 1
---
关于simplicial homology: 边缘算子可以这么考虑. 对单纯形 $\sigma=[v_0,\cdots,v_k]$ , 我们希望有一个到 $C_{k-1}$ 的边缘算子, 它有边界的几何意义, 所以应当是 $\sigma_i=[v_0, \dots, \hat{v}_i, \dots, v_k]$ 的线性组合. 假设 $d\sigma=\sum a_i \sigma_i$ , 考虑 $k$ 维空间中交换相邻两列 $i,i+1$ 的线性算子 $T$, 它交换 $\sigma_i, \sigma_{i+1}$ 并且对其余的 $j$ ,  $T\sigma_j=-\sigma_j$ , 而左边 $T\sigma=-\sigma$ , 对比系数可知 $a_i=-a_{i+1}$ , 从而一种合理的定义方式就是取 $a_i=(-1)^i$ .

比如说对 $[v_0,v_1]$ , 代入得到 $v_1-v_0$ ; 对 $[v_0,v_1,v_2]$ , 它代入计算就得到

$$[v_1,v_2] - [v_0,v_2] + [v_0,v_1]$$

和定向的直观很符合..

一般的 $H_k$ 的维数如直观一样, 衡量 $k$ 维"洞"的数量. 特别的, 一般 $H_0$ 的维数是连通分支的块数, 此时 $Z_0$ 是全体函数, 而 $B_0$ 则是 $v_i-v_j$ 这样的边界; 而对比如说空心 $n$ 维单纯形 ( 比如说 $n+1$ 维单纯形的边界, 如空心四面体, 此时 $n$ 维单纯形是三角形... ),  $H_n=Z_n$ , 则 $Z_n$ 由 $\sum (-1)^i\sigma_i$ 生成, 事实上假设 $\sum a_i\sigma_i$ 属于它, 取 $d$ 后, 每个 $n-1$ 维单纯形 $\tau_{ij}$ ( 假设删去 $i,j$ 得到) 恰好是两个 $n$ 维单纯形 $\sigma_i,\sigma_j$ 的面 (删去两个点的不同顺序) , 两者的对 ${\tau}_{ij}$ 系数的贡献需要满足 $(-1)^ja_i=(-1)^ia_j$ ...

Ex.1.2.5. 关键是有界: 假设 $x\in \mathrm{Tot}(C)_n$ , $dx=0$ , 把 $x$ 展开成对角线 $p+q=n$ 上的分量有限和：$x = \sum x_{p,q}$ , 如果每行都正合, 考虑最高一行, 可知这个分量是某个 $d^h u$ , 从而下一行在 $d^h$ 下的image和 $-d^vd^hu=d^hd^vu$ 相同...

Ex.1.2.6. (i) 第二象限上, 考虑 $y=x$ 和 $y=x+1$ 上都是 $R$ (仅限第二象限) , 其它是 $0$ 的双复形. 对直和, 考虑 $y=x$ 上一个元素 $(1,0,\cdots)$ , 如果正合 $y=x+1$ 到它需要是满射, 然而递推可以得到对应元素在 $y=x+1$ 上形如 $(1,-1,1,-1,\cdots)$ , 不在直和中. (ii) 考虑第二象限上, $n=0$ 和 $n=-1$ 处是 $R$ , 其它为 $0$ 的双复形, 对直积情况考虑 $n=0$ 上的 $(1,-1,1,-1,\cdots)$ , 它被打到 $0$ 而非边缘, 从而此时Tot不正合. (iii) 把这个构造扩展到任何全平面即可, 此时直积直和情况的两个反例都分别适用.

Ex.1.3.1. 正合当且仅当 $H_n$ 都是 $0$ , 然后考虑那个长正合列即可.

Ex.1.3.2. 事实上只需要中间是复形就能推上下都是复形. 反过来上下是复形时还得额外要求中间是复形, 如题目中所述.

Prop. 1.3.4. 考虑右侧方块时, 将

$$\begin{CD}
0 @>>> A @>>> B @>>> C @>>> 0 \\
@.    @VVV   @VVV   @VVV   @.   \\
0 @>>> A' @>>> B' @>>> C' @>>> 0
\end{CD}$$

中的 $B$ 展开为复形, 具体来说考虑

$$\begin{CD}
B_n @>d>> B_{n-1} \\
@VVV          @VVV \\
B_n' @>>d'> B_{n-1}'
\end{CD}$$

即可.  

Ex. 1.3.5. 考虑两个短正合列

$$0 \longrightarrow \ker(f) \longrightarrow A \xrightarrow{\ p\ } \text{im}(f) \longrightarrow 0\\0 \longrightarrow \text{im}(f) \xrightarrow{\ i\ } B \longrightarrow \text{coker}(f) \longrightarrow 0$$

拆出来, 对应的长正合列可以看出 $\bar{p}: H_n(C) \xrightarrow{\sim} H_n(\text{im}(f))$ 是同构. 类似的 $\bar{i}$ 也是同构, 从而其复合, 也就是 $f$ 诱导出的 $H_n$ 同态也是同构. 反过来如果 $f$ 是quasi-iso, 那么存在反例: 考虑

$$C: \dots \longrightarrow 0 \longrightarrow \mathbb{Z} \xrightarrow{\ \text{id}\ } \mathbb{Z} \longrightarrow 0 \longrightarrow \dots$$

和

$$D: \dots \longrightarrow \mathbb{Z} \xrightarrow{\ \text{id}\ } \mathbb{Z} \longrightarrow 0 \longrightarrow 0 \longrightarrow \dots$$

和自然的map...
