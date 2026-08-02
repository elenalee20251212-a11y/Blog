---
title: Notes on Hartshorne's Algebraic Geometry 2-4
date: 2025-11-24T23:49:00.000Z
tags: null
articleId: notes-on-hartshorne-s-algebraic-geometry-2-4
category: mathematics/algebraic-geometry/hartshorne-algebraic-geometry
order: 10
---

> 假设 $X$ 是拓扑空间, 那么 $X$ Hausdorff等价于 $\mathsf{Top}(-,X)$ 把image稠密的连续映射打到单射

$\implies$: 假设Hausdorff, 这等价于 $X\times X$ 中对角线闭. 那么假设 $f:Y\to Z$ 稠密, $g,h:Z\to X$ 且 $g,h$ 沿 $f$ 的拉回相同, 即 $gf=hf$ . 那么 $Y$ 在 $X\times X$ 中的image落在对角线中, 而它在 $Z$ 在 $X\times X$ 中的image ( 也就是 $(g, h)(Z)$ ) 里稠密, 从而也包含在对角线中.

$\impliedby$: $\Delta(X)\to \overline{\Delta(X)}$ 稠密, 因此 $X\times X$ 的两个投影在 $\overline{\Delta(X)}$ 上的限制相同, 即 $\overline{\Delta(X)}=\Delta(X)$ . $\square$

> 假设 $X$ scheme over $S$ , 那么 $X$ seperated over $S$ 等价于 $(\mathsf{Sch}/S)(-,X)$ 把满足 $Y\to Z$ 的scheme-theoretic image 为 $Z$ (下面简称为稠密) 的 $S$-morphism打到单射

$\implies$: 已知 $\Delta:X\to X\times _SX$ 是闭浸入. 假设 $f:Y\to Z$ 稠密, $g,h:Z\to X$ 且 $gf=hf$ . 

> Lemma. 每个 $\alpha:Y\to X$ 通过 $(\alpha,\alpha)$ 诱导出的 $i:Y\to X\times _SX$ 都factor through $\Delta$ , 具体来说 $i=\Delta\alpha$ 

$\alpha:Y\to X$ 复合 $\Delta:X\to X\times _SX $ 得到另一个 $Y\to X\times _SX$ 映射, 如图所示

$$\begin{CD}
Y @>{\alpha}>> X @. \\
@V{\alpha}VV @VV{\Delta}V @. \\
X @>{\Delta}>> X \times_S X @>{p_1}>> X \\
@. @VV{p_2}V @. \\
@. X @.
\end{CD}$$

令 $p_1,p_2$ 为 $X\times _SX\to X$ 的两个投影, 由于 $p_1\Delta=p_2\Delta=\mathrm{id}_X$ , 这个 $Y\to X\times _SX$ 在两个 $X$ 上的投影都是 $\alpha$ , 由 $X\times _SX$ 泛性质这就是 $i$ , 因此有 $i=\Delta \alpha$ . $\square$

记 $\alpha=gf=hf$ 为 $Y\to X$ 映射, 它诱导出 $i:Y\to X\times _SX$ , 并且 $i=\Delta\alpha$ . 同时 $g,h:Z\to X$ 给出 $\beta:Z\to X\times _SX$ , 并且有 $\beta f=i=\Delta\alpha$ , 如图所示

$$\begin{CD}
Y @>f>> Z \\
@V{\alpha}VV @VV{\beta}V \\
X @>\Delta>> X \times_S X
\end{CD}$$

因此直接给出映射 $h:Y\to X\times _{X\times _SX}Z=E$ (后者应视为 $Z\to X\times _SX$ 的等化子 ) . 

$$
\begin{CD}
E @>p>> Z \\
@V{v}VV @VV{\beta}V \\
X @>>{\Delta}> X \times_S X
\end{CD}
$$

同时 $X\to X\times _SX$ 是闭浸入, 基变换保持闭浸入, 因此投影 $p:E\to Z$  是闭浸入, 而 $f$ factor through $p$ 且稠密, 因此 $E=Z$ . 因此 $\beta$ factor through $\Delta$ ( 具体来说 $\beta=\Delta v p^{-1}$ ) , 从而 ( 以 $p_1,p_2$ 左乘 ) 立即有 $g=h$ . 

$\impliedby$: 考虑 $\Delta:X\to X\times _SX$ 的scheme-theoretic image $Z$ , $\Delta$ 分解为 $X\to Z\to X\times _SX$ , 其中 $i:Z\to X\times _SX$ 是闭浸入. 下证 $\widetilde{\Delta}:X\to Z$ 是同构 , 从而 $\Delta=i\widetilde{\Delta}$ 是闭浸入: 因为 $p_1\Delta=p_2\Delta=\mathrm{id}_X$ , 而 $\widetilde{\Delta}:X\to Z$ 稠密 , 有 $p_1i=p_2i$ . 由引理, 令 $\alpha=p_1i$ , 则 $i=\Delta\alpha$ , 也就是 $i\widetilde{\Delta}\alpha=i$ , 而 $i$ 是闭浸入有左消去律, 从而 $\widetilde{\Delta}\alpha=\mathrm{id}_Z$ , 反过来已知 $p_1\Delta=p_1i\widetilde{\Delta}=\mathrm{id}_X$ , 因此 $\widetilde{\Delta}$ 双侧可逆从而是同构.

我想让我的Claude code有一套类似日志的系统, 从而具有事实上记忆/学习的能力 具体来说, 这个记录完全通过纯文本记录实现 (类似操作手册, 有的在最开始和system prompt一起加载, 有的需要时候会被指引去读对应文档) , 然后从而做到如下效果: 

1 碰到的任何工程问题, 在解决之后都能记住是怎么解决的, 核心问题是什么, 并且下次遇到类似情况时候直接能通过这些回忆起来 (去阅读对应内容) 

2 遇到某个工程问题, 能分析深层次原因, 是因为没见过的知识问题, 还是事实上文档中已经有了但是却没有想到, 从而可以反思文档哪里有问题 (比如说其实不够清晰易懂一目了然, 或者比如说文档结构导致ai容易幻觉或者记忆力发挥不好), 并且进行相关的修正 (特别的, 这里绝对不能直接修改! 比如说以提意见的方式等等) 

3 整套系统易于维护, 简单易懂且规范, 比如说ai可以比较容易在无上下文情况下, 我很模糊的问她这些 (比如说问你的操作手册/工程人格之类的是怎么设计的) , 她就能直接反应过来我在问什么, 并且快速的理解全部的, 设计目标, 设计理念, 具体实现以及可以轻易找到每一个相应文档之类的, 然后如果想对某个方面/某个方向的风格等等想修改, 也能很轻松的维护 (模块化? 但我完全不懂工程) 

4 尽可能绝对的安全, 绝对不要出事故, 就算出事故也要做到没有损失

5 更一般的, 是否有可能把它放在一个更广泛的框架下, 类似于人格的框架, 包括cc本身的工程风格偏好, 具体审查自己, 怎么更有效的头脑封闭, 工程应该遵循什么样的标准和品味, 并且如何检验, 以及比如说subagent等等如何使用之类的, 类似于人格的东西, 如果设计的好甚至可能比如说, 可以记住我prompt的风格, 从而对我的言外之意有更好的理解

? 以及比如说像是能准确识别哪些是重要的问题, 然后真正的把注意力集中在上面 (比如说甚至开一个subagent重点思考之类的? 这个真有效果吗我不清楚, 这些具体机制我都不了解)

