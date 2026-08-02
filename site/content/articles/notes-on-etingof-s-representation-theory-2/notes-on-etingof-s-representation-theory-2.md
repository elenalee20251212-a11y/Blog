---
title: Notes on Etingof's Representation Theory 2
date: 2026-05-07T01:00:34.000Z
tags: null
articleId: notes-on-etingof-s-representation-theory-2
category: mathematics/algebra/etingof-representation-theory
order: 2
---
$\mathrm{Prob.}\ 4.5.2.$  (i) 因为 $\chi_{V_i}$ 都是类函数, 所以

$$\psi_i=\frac{\dim V}{|G|}\sum_{g\in G}\chi_{V_i}(g)\cdot g^{-1}$$

被共轭保持, 从而它在每个 $V_j$ 上的限制是数乘. 取Trace得到 $\chi_{V_j}(\psi_i)={\dim V}\cdot(\chi_{V_i},\chi_{V_j})$ , 因此 $\psi_i$ 在 $V_i$ 上的限制是 $1$ , 在其它 $V_j$ 上的限制是 $0$ . (ii) 由 (i) 立即可得.

$\mathrm{Remark.\ 4.5.3.}$ 中的式子可以如此考虑. 将 $\chi_{V_i}$ 记为 $\chi_i$ , 首先

$$(f*f)(h)=\sum_{g\in G}f(g)f(g^{-1}h)$$

由上题中的式子, 对 $\psi_i h$ 取 $\chi_i$ 得到 $\frac{\dim V_i}{|G|}(\chi_i*\chi_i)(h)$ , 而同时 $\psi_ih=h|_{V_i}$ , 因此

$$\frac{\dim V_i}{|G|}(\chi_i*\chi_i)(h)=\chi_i(h)$$

令 $\widetilde{\chi}_i=\frac{\dim V_i}{|G|}\chi_i$ , 则 $\widetilde{\chi}_i*\widetilde{\chi}_i=\widetilde{\chi}_i$ . 同时 $\widetilde{\chi}_i(1)=\frac{(\dim V)^2}{|G|}$ , 从而 $\chi_i=\sqrt{\frac{|G|}{\widetilde{\chi}_i(1)}} \cdot \widetilde{\chi}_i$ .
