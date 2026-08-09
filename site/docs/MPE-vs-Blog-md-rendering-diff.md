# MPE 与博客 Markdown 渲染机制差异报告(实测版)

> **状态说明（2026-08-09）**：本文记录的是修改前的对比结果，不能再作为当前实现说明。当前博客已经加入 MPE 的 footnote、sub、sup、deflist、abbr、mark、数学规则和 Crossnote 0.9.31 wikilink 机制；数学渲染器也已从 MathJax 改为 MPE 默认的 KaTeX 0.16.47。`[[目标|别名]]`、相对路径、根路径、重复 `../`、`#标题`、`^段落标识`、`![[嵌入]]` 和 `[[toc]]` 的解释均已按源码对齐。当前实现以 `docs/DEVELOPMENT.md` 和自动兼容测试为准。下文保留旧结果，用于说明当时发现过哪些差异。

> 本报告基于**双端真实引擎**逐用例渲染对比:
> - **MPE 侧**:crossnote@0.9.31(实际安装于 `C:\Users\fresh\AppData\Local\Temp\mpe-bench\`),通过 `Notebook.init` + `MarkdownEngine.parseMD` 渲染;
> - **博客侧**:VitePress 1.6.4 `createMarkdownRenderer`,使用博客真实的 `content/.vitepress/config.mjs` 中的 markdown 配置;
> - **用例规模**:第一轮 39 例 + 第二轮 31 例 + 补充探针 7 例 + 定向探针若干,全部输出保存于 `C:\Users\fresh\AppData\Local\Temp\mpe-bench\out-*.json`;
> - **机制归因**:MPE 侧对照 crossnote bundle(`out/cjs/index.cjs`),博客侧对照 VitePress dist(`node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js`)。

**重要事实**:字节级对比 **0/70 项完全相同**——因为 MPE 的输出 HTML 首尾各带一个 `\n`(其行变换器把源文件结尾空行折算成输出前缀换行),但不代表语义有差异。语义级完全一致的用例见[第六节](#六一致基线语义级)。

---

## 一、解析选项差异(options)

| 选项 | MPE | 博客 | 实测输出 |
|---|---|---|---|
| `linkify`(裸链自动链接) | **开** | **关**(博客 `markdown.linkify: false`) | 输入 `访问 www.example.com 与 foo@bar.com 与 http://a.b/c`:**MPE** 输出 `<a href="http://www.example.com">www.example.com</a>`(自动补 `http://`)、`<a href="mailto:foo@bar.com">foo@bar.com</a>`、`<a href="http://a.b/c">http://a.b/c</a>`;**博客** 全部字面量。输入 `自动链接测试 https://example.com/path?q=1 结束`:MPE 链接、博客字面量 |
| 尖括号 autolink `<url>` | 开 | 开(autolink 核心规则,**不受** linkify 选项影响) | `尖括号 <https://example.com/a>` 两侧都输出 `<a href="https://example.com/a">`;区别仅在博客额外加 `target="_blank" rel="noreferrer"`(见第五节链接渲染器) |
| 文本中 `"` 引号 | 原样输出 | 转义为 `&quot;` | 输入 `"双引号" '单引号'`:**MPE** `<p>"双引号" '单引号' …</p>`;**博客** `<p>&quot;双引号&quot; '单引号' …</p>` |
| 未知实体 `&unknown;` | `&` 被转义 | 原样保留 | 输入 `&amp; &lt; &nbsp; 与 &unknown;`:**MPE** `<p>&amp; &lt; &nbsp; 与 &amp;unknown;</p>`;**博客** `<p>&amp; &lt; &nbsp; 与 &unknown;</p>` |

**机制**:
- 博客把 text 渲染器替换为自定义转义(`restoreEntities` 内注册):
  `str.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&(?![\w#]+;)/g,"&amp;")`
  即:`<` `>` `"` 恒转义;`&` 仅在**不是** `[\w#]+;` 形态(看起来像实体)时才转义。所以 `"` → `&quot;`,`&unknown;` 因为 `unknown;` 匹配 `[\w#]+;` 而原样保留。
- MPE 用 markdown-it 默认转义(`&<>"` 全转义,`&unknown;` → `&amp;unknown;`),但其最终 HTML 会经过一次 DOM 序列化往返(cheerio),文本节点里的 `&quot;` 在序列化时还原为 `"`(引号在文本节点中无需转义),`&amp;`/`&lt;`/`&gt;`/`&nbsp;` 则原样往返。

---

## 二、行内规则差异(inline rules)

| 语法 | MPE 实测输出 | 博客实测输出 | 机制 |
|---|---|---|---|
| `$a+b$` 行内数学 | `<span class="katex">…HTML+MathML…</span>` | `<mjx-container class="MathJax" jax="SVG">…内联 SVG…</mjx-container>` | **定界符已对齐**(博客的 mpe-math 插件把 mathjax3 的 `math_inline` 规则整体替换为 MPE 同款规则,只认 `$`)。差异只剩数学渲染器本身(KaTeX vs MathJax,见第五节) |
| `\(a+b\)` / `\[ … \]` | **不渲染**,原样文本 | **不渲染**,原样文本 | 两边都只认 `$`,`\(` `\[` 不触发(对齐后的一致行为) |
| `[[文章]]` | `<a href="file:///D:\…\bench-wikilink\文章.md">文章</a>` | 字面量 `[[文章]]` | MPE 注册 wikilink 行内规则(在 autolink **之前**),接受任意文本,支持 `[[目标\|别名]]`(别名实测生效);博客的 `internal_reference` 规则只接受 `/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/` 形态的文章/分类 id,**中文 id 校验不过 → 规则不触发 → 字面量** |
| `[[no-such-id-xyz]]`(ASCII 但未命中) | wikilink(不校验目标存在性) | **直接抛错**:`Internal reference [[no-such-id-xyz]] in /articles/… has no target.`(整页构建失败) | 同上;`[[a\|b\|c]]` 博客取第一段 `a` 为 id,同样抛错 |
| `[[toc]]` | `<a href="file:///D:\…\toc.md">toc</a>`(被当 wikilink) | `<nav class="table-of-contents"><ul>…</ul></nav>`(TOC 占位) | **同一语法,两端语义相反**,见第三节 |
| `#tag` | `<a class="tag" data-tag="tag" href="tag://tag">#tag</a>` | 字面量 `#tag` | MPE 注册 tag 行内规则(autolink 之前;前字符不能是字母/数字/`_` `-` `/` `&` `?` `\`),配 `renderer.rules.tag` 输出上述结构;博客无此规则 |
| `==高亮==` | `<mark>高亮</mark>` | 字面量 | MPE 注册 markdown-it-mark;博客无 |
| `~下标~` | `<sub>下标</sub>` | 字面量 | MPE 注册 markdown-it-sub;博客无 |
| `^上标^` | `<sup>上标</sup>` | 字面量 | MPE 注册 markdown-it-sup;博客无 |
| `:fa-twitter:` | `<i class="fa-brands fa-twitter" aria-hidden="true"></i>` | 字面量 | 共享 emoji 规则,MPE 额外并入 FontAwesome 数据集;`:)` `:smile:` `:100:` 等标准数据集与快捷键两侧**逐字符一致** |
| `++插入++` | 字面量 | 字面量 | 两边都没有 ins 插件(一致) |

---

## 三、块级规则差异(block rules)

| 语法 | MPE 实测输出 | 博客实测输出 | 机制 |
|---|---|---|---|
| `$$x^2$$` 块数学 | `<span class="katex-display">…` | `<mjx-container … display="true">…` | 定界符已对齐(同第二节),仅渲染器不同 |
| `::: note 容器标题` | `<div class="note" 容器标题="true"><p>内容</p></div>` | 字面量三行 | MPE 注册 `colon_fence` 块规则(在 fence **之前**):第一个词→class,其余裸词→布尔属性(所以 `容器标题="true"`);博客的 containerPlugin 只有白名单 `tip/warning/danger/details/code-group/v-pre`,未知名字面量 |
| `!!! note 告示标题` | `<div class="admonition note"><p class="admonition-title">告示标题</p></div>`(仅标题行入容器;未缩进的正文行泄漏到容器外成为普通段落,结尾 `!!!` 也按字面量输出——实测完整输出为 `<div class="admonition note">…</div><p>告示内容<br>\n!!!</p>`) | 字面量 | MPE 注册 admonition 块规则(在 fence **之后**),27 类型,未知→note,配 `admonition_open/title_open/title_close/close` 渲染器;博客无 |
| `[toc]` | 有标题时:占位符被替换成 `<div class="md-toc">` 目录树(`<details open class="md-toc-details"><summary class="md-toc-link-wrapper" data-level="0"><a href="#一级" class="md-toc-link">一级</a>…`);**无标题时:整行消失,不输出任何东西** | 字面量 `[toc]` | MPE 把 `[toc]` 行替换为占位标记,渲染阶段按标题列表生成目录树(链接指向 uslug 标题 id);博客无此语法 |
| `[[toc]]` | 当 wikilink 处理(见第二节) | `<nav class="table-of-contents"><ul><li><a href="#二级标题">二级标题</a></li></ul></nav>` | 博客注册 toc 块规则(在 heading **之前**,pattern `/^\[\[toc\]\]$/i`),默认 level [2,3](源码默认值,实测 h2 被收录) |
| `- [ ] 未完成` / `- [x] 已完成` | `<input type="checkbox" class="task-list-item-checkbox">` / `…checked=""…`(嵌套列表同样生效) | 字面量 `[ ]` / `[x]` | MPE 对任务列表行直出 checkbox HTML;博客无此语法 |
| `<!-- pagebreak -->` | `<div class="pagebreak"> </div>` | 注释原样保留 | MPE 支持 pagebreak 注释;博客无 |
| `<!-- @import "style.css" -->` | 读取文件并内联;**文件缺失时输出错误块** `<pre class="language-text">Error: ENOENT: …</pre>` | 注释原样保留 | MPE 支持 @import 注释;博客无 |
| 脚注 `脚注[^1]` + `[^1]: 脚注内容` | 完整脚注机制:`<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>` + 文末 `<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list">…<a href="#fnref1" class="footnote-backref">↩︎</a>` | **错链**:`<a href="./脚注内容.html">^1</a>` | 博客没有 footnote 插件,markdown-it 自带的引用链接规则把 `[^1]` 当引用、`[^1]: 脚注内容` 的定义标签文本当链接文本,再由博客 linkPlugin 补 `./` 和 `.html` —— **产生指向不存在页面的错误链接,全报告最严重一项** |
| `<div>$$x^2$$</div>`(HTML 块内数学) | `<div>\n<span class="katex-display">…</span>\n</div>`(正常渲染) | `<div>\n$$x^2$$\n</div>`(字面量) | MPE 对 HTML 块输出做数学转换(保护 `code/pre/script/style` 后处理 `$` 定界符);博客无 |

---

## 四、核心规则差异(core rules)

| 语法 | MPE 实测输出 | 博客实测输出 | 机制 |
|---|---|---|---|
| `## 标题 {#custom-id .cls data-x="1"}` | `<h2 id="custom-id" class="cls" data-x="1">标题 </h2>` | 同属性 + `tabindex="-1"` + 锚点链接(见第五节) | **共享语法,标题上两边都生效** |
| `段落文本 {.pclass}`(段落属性) | 字面量 `段落文本 {.pclass}` | `<p class="pclass">段落文本</p>` | 同源语法,作用范围不同:MPE 的 curly-bracket 属性规则只作用于**标题与图片**;博客的 attrs 插件作用于标题/段落/行内块 |
| `*[HTML]: 定义` 缩写 | `<abbr title="超文本标记语言">HTML</abbr> 是缩写` | 字面量 | MPE 注册 markdown-it-abbr;博客无 |
| `Term 1\n: 定义 1` 定义列表 | `<dl><dt>Term 1</dt><dd>定义 1</dd></dl>` | 字面量 | MPE 注册 markdown-it-deflist;博客无 |
| `## `(空标题) | `<h2></h2>`(无 id) | `<h2 id="" tabindex="-1"> <a class="header-anchor" href="#" …>&ZeroWidthSpace;</a></h2>`(空 id + 指向 `#` 的锚点) | 标题规则对空内容的处理不同 |

---

## 五、渲染器规则差异(同一语法,输出结构不同)

| 语法 | MPE 实测输出 | 博客实测输出 | 机制 |
|---|---|---|---|
| 标题 id(含标点标题) | `## 数学!美?与$符号` → `id="数学美与符号"`;`## 近似~与句号。测试` → `id="近似与句号测试"` | 同一输入 → `id="数学-美-与-符号"`、`id="近似-与句号。测试"` | **slug 算法不同**:MPE 用 uslug——删除 ASCII 标点 `` !"#$%&'()*+,./:;<=>?@[\]^`{\|}~ ``、删除 `~` 与 `。`、剥掉强调/代码标记、空白→`-`;**保留 CJK**;博客用 VitePress slugify——`NFKD` → 去组合音标 → 删控制字符 → 把 `` [\s~`!@#$%^&*()\-_+=[\]{}\|\\;:"'“”‘’<>,.?/]+ ``(含空白与 ASCII 标点,但**不含 `。` 等 CJK 标点**)逐个替换为 `-` → 折叠 `-{2,}` → 去首尾 `-` → 首数字加 `_` → 转小写。**同一个标题在两端 id 不同 → 跨端锚点断链** |
| 标题 id(无标点标题) | `## 一级` → `id="一级"`;`### 标题 *斜体* `代码`` → `id="标题-斜体-代码"`;`## 重复` 两次 → `id="重复"`、`id="重复-1"` | **完全相同** | 无上述"删除类"标点时两算法殊途同归;重复标题两侧都是 `-1` 后缀(实测一致) |
| 标题输出结构 | `<h2 id="一级">一级 </h2>` | `<h2 id="一级" tabindex="-1">一级 <a class="header-anchor" href="#一级" aria-label="Permalink to …">&ZeroWidthSpace;</a></h2>` | 博客注册 markdown-it-anchor(permalink 链接 + 零宽空格符号 + tabindex=-1);MPE 只输出 id |
| 代码围栏 | `<pre data-role="codeBlock" data-info="js {1,3}" class="language-javascript js"><code><span class="token console class-name">console</span>…(highlight.js token)</code></pre>` | `<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" v-pre=""><code><span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8">…</span></span></code></pre></div>` | fence 渲染器不同:MPE 的 DA 渲染器输出元数据(`data-info`)交给前端处理,高亮由 highlight.js 生成(`js` 被归一为 `javascript`);博客由 preWrapper + highlightLine + Shiki(双主题,`{1,3}` 行高亮标为 `<span class="line highlighted">`)+ 复制按钮 + 语言标签 |
| 行内数学渲染器 | `<span class="katex">`(HTML + MathML,含 `aria-hidden`) | `<mjx-container class="MathJax" jax="SVG">`(内联 SVG + assistive MathML) | KaTeX vs MathJax 3(博客配置 `math.tex.tags: 'ams'`) |
| 图片 | `<img src="file:///D:\…\img.png" alt="alt 图片" width="300px">`(绝对化;`/abs/img.png` 会变成带反斜杠的怪路径 `file:///C:\Vibe Coding\…\abs\img.png`) | `<img src="./img.png" alt="alt 图片" width="300px" loading="lazy">`(相对路径保留 + 懒加载) | 图片渲染器不同:MPE 面向编辑器本地文件(绝对化为 file:///);博客 imagePlugin 保留路径并加 `loading="lazy"`。`{width=300px}` 属性**两侧都生效** |
| 链接 | `<a href="file:///D:\…\other.md">相对链接</a>`(相对路径被绝对化为 file:///) | `<a href="./other.html">相对链接</a>`(`.md` → `.html` + 补 `./`) | 博客注册 linkPlugin:相对 `.md` 转 `.html`、加 `./` 前缀、外部链接加 `target="_blank" rel="noreferrer"`、`#锚点` 保留;MPE 无此规则 |
| 表格 | `<table><th style="text-align:left/right/center">…` | 完全相同 + `<table tabindex="0">` | 共享 GFM 表格规则与对齐机制,博客额外给表格加 tabindex |
| `> [!NOTE]\n> 提示内容` | `<div class="callout" data-callout="note"><div class="callout-title">Note</div><p>提示内容</p></div>` | `<div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>提示内容</p></div>` | 两侧都是 blockquote 渲染器拦截,但:**类型集 27 vs 7**(MPE 27 类型:note/summary/abstract/tldr/info/todo/hint/tip/important/check/done/success/help/question/faq/attention/caution/warning/fail/failure/missing/danger/error/bug/example/cite/quote;博客 7 类型 TIP/NOTE/INFO/IMPORTANT/WARNING/CAUTION/DANGER)。标题:MPE 按映射表首字母大写(`Note`、`Important`、`TL;DR`),自定义标题原样;博客恒全大写,自定义标题原样。**MPE 的类型在博客静默退化为普通引用** |
| `> [!note]+ 折叠标题\n> 折叠内容`(括号外 `+`/`-`) | `+` → `<details class="callout" data-callout="note" open=""><summary class="callout-title">折叠标题</summary><p>折叠内容</p></details>`(默认展开);`-` → `<details class="callout" data-callout="warning">`(无 `open`,折叠) | 无折叠:`<div class="note custom-block github-alert"><p class="custom-block-title">+ 折叠标题</p>…`(`+` 留在标题文本里) | MPE 的 callout 正则 `/^\[!(\w+)\]([+-])?(?:[ \t]+([^\r\n]+))?(?:\r?\n\|$)/` 支持括号外 `+`/`-` 折叠;博客不支持 |
| `> [!warning+] …`(括号内 `+`) | 字面量 blockquote | 字面量 blockquote | 括号内 `+` 使 `(\w+)` 无法闭合,两侧规则都不匹配(实测一致) |
| `> [!FOO] …`(未知类型) | 字面量 blockquote | 字面量 blockquote | 两侧对未知类型都回退为普通引用(实测一致) |

---

## 六、一致基线(语义级一致)

以下用例两端输出**语义逐字符一致**(仅 MPE 首尾 `\n` 与数学/表格包装器不同):

- 换行 `breaks`(单换行→`<br>`)、行尾两空格硬换行
- `~~删除~~`、`_强调_` / `__更强__` / `___最强___`(含嵌套)
- `++插入++` 字面量(两边都无 ins 插件)、`\*` `\`` `\[` 转义、`价格 \$5 与 \$x$`
- `<hr>` 三种变体(`***` `---` `___`)、嵌套引用(`> 外层\n>> 内层`)、引用内列表
- 原生 HTML 行内(`<b>` `<span style>`)、原生 HTML 块(`<div class="raw">`)、`<video src>` 嵌入
- YAML frontmatter 两侧都剔除、缩进代码块(4 空格)都不渲染成代码块(一致)
- `$x$` 无空格行内数学(除 KaTeX/MathJax 包装)、`\(`/`\[` 数学不触发
- 表格对齐(`style="text-align:left/right/center"`,除博客 tabindex)
- emoji 字符直出、`:)` `:smile:` `:100:` 快捷键(除 `:fa-` 数据集)
- 特殊字符直出:`αβγ 中文 テスト русский ٩(◕‿◕)۶`、`latex \text{hello} 文本`

---

## 七、影响排序与结论

| # | 差异 | 影响 | 证据 |
|---|---|---|---|
| 1 | **脚注错链** | 博客把 `[^1]` 渲染成指向 `./脚注内容.html` 的链接——MPE 里正常的脚注内容发布到博客后变成坏链(引用链接规则 + linkPlugin 双重作用) | 第二节/第三节脚注用例 |
| 2 | **`[[..]]` 语义冲突（已解决）** | 博客现已采用 Crossnote 0.9.31 的 wikilink 解析与路径求解规则；尚不存在的目标也保留为普通链接，不再导致构建失败 | 第二/三节 wikilink、toc 用例；当前实现见 `scripts/internal-references.mjs` |
| 3 | **标题 slug 算法不同** | 含 MPE-删除类标点(`!?$~。`、ASCII 标点)的标题在两端 id 不同 → 用 MPE 生成的锚点链接在博客上断链;无标点标题不受影响 | 第五节标题 id 用例 |
| 4 | **callout 类型集 27 vs 7** | MPE 里 `abstract/tldr/help/faq/…` 等告示在博客静默退化为普通引用;折叠 `+`/`-` 语法博客不支持(变成标题文本) | 第五节 callout 用例 |
| 5 | **静默失效的一批语法** | 任务列表、`[toc]`、缩写、定义列表、`==mark==`、`~sub~`、`^sup^`、`#tag`、`!!!` 告示、通用 `:::` 容器、pagebreak、@import、HTML 块内数学——MPE 正常,博客全部按字面量输出 | 第二/三/四节 |
| 6 | **行为差异(不误渲染)** | linkify 自动链接、引号/未知实体转义、代码高亮(hljs vs Shiki)、数学引擎(KaTeX vs MathJax)、图片路径绝对化与懒加载、外链 `target="_blank"`、表格 tabindex、标题锚点结构、段落 `{attrs}` 作用范围 | 第一/四/五节 |

**总体结论**:核心 markdown 引擎同源(markdown-it 14 系 + GFM 扩展),`$`/`$$` 数学定界符、换行、删除线、强调、表格、emoji、frontmatter 等已对齐;差异全部来自**规则注册集**(MPE 多注册 wikilink/tag/mark/sub/sup/abbr/deflist/footnote/admonition/通用容器/任务列表/TOC 等,博客多注册 attrs/容器白名单/TOC/gitHubAlerts/anchor/linkPlugin/imagePlugin)+ **渲染器实现**(slug 算法、fence、数学引擎、callout 类型集、转义策略)。其中 1–4 项是发布后可见的**错误或语义反转**,第 5 项是**静默退化**,第 6 项属**可接受的实现差异**。

---

## 附录 A:实测用例与输出文件

- 第一轮(39 例):`C:\Users\fresh\AppData\Local\Temp\mpe-bench\bench-mpe.mjs` / `bench-vitepress.mjs` → `out-mpe.json` / `out-vitepress.json`(`compare.mjs` 逐项打印)
- 第二轮(31 例):`bench-mpe2.mjs` / `bench-vitepress2.mjs` → `out-mpe2.json` / `out-vitepress2.json`(`compare2.mjs` 逐项打印)
- 补充探针(7 例):`bench-final.mjs` → `out-final-blog.json` / `out-final-mpe.json`(未知 ASCII id 抛错、`[[a|b|c]]`、TOC 含 h2、外链 target、CJK id 字面量、HTML 属性转义、MPE 脚注)
- 定向探针:`probe-autolink.mjs`(尖括号 vs 裸链)、`probe-quote.mjs`(引号/实体)

用例全集:breaks-换行、inline-math-dollar、display-math-dollars、inline-math-paren、display-math-bracket、math-in-html、emoji、toc-single、toc-double、task-list、task-list-nested、container-colon、admonition-bang、gfm-alert-note、gfm-alert-important、gfm-alert-plus、gfm-alert-plus-after-bracket、gfm-alert-minus-after-bracket、gfm-alert-uppercase-note、gfm-alert-unknown、gfm-alert-unknown-plus、heading-attrs、para-attrs、abbr、deflist、footnote、del-mark-ins-subsup、tag-syntax、wikilink、wiki-piped、table、table-alignment、image-attrs、image-absolute、autolink、autolink-www、linkify、fence-attrs、fence-plain、code-in-list、fence-indent、typographer、pagebreak、import-css、img-embedding、heading-emphasis、heading-dup、heading-cjk-punct、heading-tilde-dot、strikethrough-only、nested-blockquote、blockquote-nested-marker、raw-html、video-embed、html-inline、hardbreak-spaces、yaml-frontmatter、empty-heading、entity、escaped-dollar、math-no-spaces、underscore-em、backslash-escapes、links-relative、latex-in-text、special-chars、markup-ins、emoji-bare、toc-with-headings。

## 附录 B:关键源码位置

- **MPE bundle**:`C:\Users\fresh\AppData\Local\Temp\crossnote-src\package\out\cjs\index.cjs`
  - 基础选项 `oG`、插件注册链 `initMarkdownIt`(footnote/sub/sup/deflist/abbr/mark + 自定义 FM/PM/M2/D2/B2/z2/j2/V2/I2/O2/H2/q2/W2)
  - callout:`O2`(27 类型 Set + 标题映射表 + 折叠 `details` 渲染器)、admonition:`I2`(27 类型数组,含 note/summary)
  - 标题 id:`mr` 类(uslug:删除 `~`、`。`、ASCII 标点,空白→`-`,`-1` 去重)
  - tag 行内规则 `q2`、wikilink 行内规则 `V2`、toc 目录树 `kM`
  - parseMD 全流程(行变换 → markdown-it → cheerio DOM 数学/图片处理 → 序列化)
- **博客(VitePress 1.6.4)**:`D:\Vibe Coding\Blog\Hexo\site\node_modules\vitepress\dist\node\chunk-D3CUZ4fa.js`
  - `restoreEntities`(自定义 text 渲染器 + 转义正则)、`slugify`(`rSpecial` 正则)、`tocPlugin`(块规则,`/^\[\[toc\]\]$/i`)、`linkPlugin`(`{target:"_blank", rel:"noreferrer"}`)、`imagePlugin`(lazy)、`gitHubAlertsPlugin`(7 类型)、createMarkdownRenderer 插件链
- **博客自定义插件**:`content/.vitepress/markdown-mpe-math.mjs`(`$` 定界符对齐)、`content/.vitepress/markdown-internal-references.mjs` + `scripts/internal-references.mjs`(`INTERNAL_REFERENCE_ID_RE = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/`)

*本报告全程只读,未修改任何项目文件。*
