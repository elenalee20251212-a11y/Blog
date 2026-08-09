# 博客使用说明

博客项目位于 `D:\Vibe Coding\Blog\Hexo\site`。本说明中的“命令行窗口”包括 PowerShell、Windows 命令提示符、Git Bash 和 VS Code 的集成终端。

除安装项目所需程序使用 `npm ci` 外，所有博客操作都以 `node blog.mjs` 开头。`node blog.mjs help` 会列出全部操作；`node blog.mjs help <操作名称>` 会说明其中一项操作。命令中的 `<文章文件名>` 等文字表示需要替换的内容，尖括号本身不输入。

## 打开项目并启动本地网站

下列三行分别适用于 PowerShell、Windows 命令提示符和 Git Bash；其中任意一行都会把命令行窗口的当前位置切换到博客项目：

```text
PowerShell：Set-Location -LiteralPath 'D:\Vibe Coding\Blog\Hexo\site'
命令提示符：cd /d "D:\Vibe Coding\Blog\Hexo\site"
Git Bash：cd '/d/Vibe Coding/Blog/Hexo/site'
```

项目刚被下载或复制到这台电脑时，项目中通常没有 `node_modules` 文件夹。此时执行以下命令，会按照 `package-lock.json` 中记录的版本重新建立该文件夹，并把本地预览和网站生成使用的程序安装到其中：

```text
npm ci
```

以后取得的项目更新如果包含 `package-lock.json` 的变化，同一命令会重新安装与新版本记录一致的程序。该命令不生成网站，也不创建、移动或修改文章。

以下命令会先采用每篇文章当前填写的分类，再启动本地网站：

```text
node blog.mjs server
```

通常使用的地址是 <http://127.0.0.1:5173/>。命令会在窗口中显示本次实际地址：如果这个博客已经在 5173 至 5193 的某个端口运行，命令会直接显示已有地址；如果 5173 被其他程序占用，命令会使用该范围内下一个空闲端口。浏览器打开实际地址后会显示与 GitHub Pages 使用相同内容和配置的博客。

文章、同目录图片、分类介绍或网站设置保存后，已打开的页面会自动更新。运行网站的命令行窗口会持续显示处理结果；在该窗口中按 `Ctrl+C` 会停止本地网站。

另一个命令行窗口中的以下命令也会停止这个项目正在运行的本地网站或静态网站预览；没有网站运行时，该命令只报告当前状态，不会停止其他程序：

```text
node blog.mjs close
```

## 新建和编辑文章

以下命令会建立一篇待分类的占位文章：

```text
node blog.mjs new <文章文件名>
```

文章文件名不含 `.md`，可以由英文字母、数字和短横线组成；短横线只能分隔两段文字，不能位于开头或结尾，也不能连续出现。例如，文件名 `galois-theory` 会建立：

```text
content/articles/galois-theory/
└─ galois-theory.md
```

新文件以文件名作为临时标题，标签为空，并归入“杂项 → 待整理 → 待分类”。这条命令只建立文件夹和 Markdown 文件；以后加入的图片、PDF 和其他附件也放在同一个文件夹中。修改文章分类只改变网页中的归属，不移动这个文件夹，因此正文与附件不需要随分类一起移动。

Markdown 文件开头的下列设置属于博客系统：

```yaml
---
title: <文章标题>
date: <年-月-日>
tags: [<标签一>, <标签二>]
articleId: <文章文件名>
category: <一级分类文件名>/<二级分类文件名>/<三级分类文件名>
order: <正整数>
categoryNote: <分类页中显示的简短说明>
---
```

| 设置 | 作用 |
|---|---|
| `title` | 网页显示的文章标题 |
| `date` | 网页显示的文章日期 |
| `tags` | 标签页用于汇总相关文章的关键词；可以为空 |
| `articleId` | 必须与文章文件夹和 Markdown 文件同名，并构成文章网址的末尾部分 |
| `category` | 文章所属的第三级分类；三个文件名共同构成没有歧义的完整分类路径 |
| `order` | 文章在同一第三级分类中的顺序；数值越小越靠前，可以省略 |
| `categoryNote` | 分类页中文章标题旁的简短说明，可以省略 |

修改 `category` 并保存后，正在运行的本地网站会自动采用新归属。若该路径尚不存在，系统会补建三级分类和相应的分类介绍文件。未启动本地网站时，`node blog.mjs sync` 会完成同一更新。

删除 `content/articles/<文章文件名>` 文件夹就表示删除这篇文章；Markdown、图片和附件会随文件夹一起消失。正在运行的本地网站会自动移除文章页面、分类成员和搜索记录；网站没有运行时，下一次执行 `node blog.mjs sync`、`node blog.mjs server` 或 `node blog.mjs generate` 会得到相同结果。其他文章中原有的引用会继续保留并指向已不存在的网页；点击后由 GitHub Pages 显示 404 页面，不会阻止同步或生成网站。直接删除不能由博客命令恢复；需要项目回收区时，可以改用 `node blog.mjs remove <文章文件名>`。

## 图片和附件

图片、PDF 和其他附件与文章 Markdown 文件放在同一个文章文件夹中。Markdown 使用相对于该文件的地址，例如：

```markdown
![图片说明](image-1.png)
[附件](notes.pdf)
```

这份写法可同时被 Markdown Preview Enhanced、本地网站和 GitHub Pages 读取。文章整体改名、移入项目回收区或恢复时，正文和同目录资源会一同处理。

## 引用博客中的其他文件

站内引用沿用 Markdown Preview Enhanced 的 `[[...]]` 写法。引用中的文件地址从当前 Markdown 文件所在的文件夹开始计算；`..` 表示上一级文件夹，可以连续使用多次。以下引用位于任意文章文件夹中，目标是另一个文章文件夹中的 Markdown 文件：

```markdown
[[../<目标文章文件名>/<目标文章文件名>.md|<网页显示的文字>]]
```

竖线左边是目标文件地址，右边是页面中显示的文字。省略竖线和右边文字时，Markdown Preview Enhanced 与网站都会根据目标、标题或段落生成显示文字。

目标文件中的标题和段落可以继续写在文件地址后面：

```markdown
[[../<目标文章文件名>/<目标文章文件名>.md#<标题>|<网页显示的文字>]]
[[../<目标文章文件名>/<目标文章文件名>.md^<段落标识>|<网页显示的文字>]]
```

“段落标识”是写在目标段落末尾的 `^名称`；名称可以由英文字母、数字、短横线和下划线组成。`![[...]]` 会把目标图片、文本文件、整篇 Markdown 或指定的标题、段落嵌入当前位置。

以 `/` 开头的地址从 VS Code 当前打开的文件夹开始计算。只有在 VS Code 中打开 `D:\Vibe Coding\Blog\Hexo\site` 文件夹时，`/content/...` 才会同时指向博客项目中的同一文件；普通文章引用使用上面的相对地址，不依赖打开哪个文件夹。

网站生成器使用 Crossnote 0.9.31 的同一套拆分、补全扩展名、相对地址、标题和段落定位规则，再把目标 Markdown 文件换成对应的网页地址。目标文件、标题或段落尚不存在时，引用仍会生成普通链接，不会阻止 `sync`、`server`、`generate` 或 `deploy`；目标网页不存在时，点击后由 GitHub Pages 显示 404 页面。`node blog.mjs rename <原文章文件名> <新文章文件名>` 会按解析后的实际目标更新站内引用，而不是按显示文字猜测目标。

## 维护三级分类

网站固定使用“一级分类 → 二级分类 → 三级分类 → 文章”。一级分类表示大方向，二级分类表示主题，三级分类表示一个文章系列；每一级都有自己的分类页面，文章只归入第三级分类。

项目根目录的 `category-tree.yml` 保存完整分类结构和同级显示顺序。例如：

```yaml
changes: []
tree:
  - id: mathematics
    title: 数学
    children:
      - id: algebra
        title: 代数
        children:
          - id: galois-theory
            title: Galois 理论
```

`id` 是分类文件名和网址使用的名称；命名规则与文章文件名相同。`title` 是网页显示的名称。`children` 中包含下一级分类，列表的先后次序就是网页中的同级次序。

每个分类还对应一篇可编辑的介绍文件。上例中第三级分类的介绍文件是：

```text
content/categories/mathematics/algebra/galois-theory/galois-theory.md
```

其他层级也采用“分类文件夹内保存同名 Markdown 文件”的结构。系统更新分类结构时会更新这些文件的标题、路径和顺序，同时保留已经写入的介绍正文和同目录资源。

文章和分类共同使用以下两个命令：

| 命令 | 结果 |
|---|---|
| `node blog.mjs sync` | 同步分类树、文章文件夹的新增或删除，以及文章中的 `category` 变化 |
| `node blog.mjs undo` | 撤销最近一次成功同步造成的分类结构或文章归属修改；不恢复手工删除的文章文件夹 |

`sync` 先判断 `category-tree.yml` 是否被修改。分类树有变化时，它先应用结构变化并更新受影响文章的 `category`；随后重新扫描全部文章文件夹，采用文章的新增、删除和归属变化，并补建文章引用但分类树中尚不存在的分类。两类修改无法得到唯一结果时，同步会说明冲突并停止，不会猜测采用哪一边。没有变化时不写文件，也不替换可撤销记录。

同步成功后，命令会列出本次实际发生的变化，包括新增或删除的文章及其分类、文章归属变化、分类结构操作、新增或移除的分类路径、名称和顺序变化、默认分类变化，以及被自动改写的文章或分类介绍。最后一行给出完整内容检查结果。没有变化时只显示“没有发现文章或分类变化”。

`node blog.mjs server` 和 `node blog.mjs generate` 都包含同一次同步，因此本地预览、正式生成和单独执行 `sync` 使用完全相同的内容状态。

### 通过分类树修改结构

新增分类、修改显示名称或调整同级顺序，只需要把 `tree` 写成修改完成后的结构。

改动分类文件名、移动、合并或删除分类时，`changes` 说明原分类如何变成最终结构，`tree` 仍写成全部操作完成后的结构：

```yaml
changes:
  - rename:
      from: mathematics/algebra/old-name
      to: mathematics/algebra/new-name
  - move:
      category: mathematics/algebra/new-name
      under: mathematics/number-theory
  - merge:
      from: mathematics/number-theory/old-series
      into: mathematics/number-theory/kept-series
  - remove:
      category: miscellaneous/archive/empty-series
```

`rename` 表示分类文件名改变；`move` 表示分类连同下级内容移到新的上级；`merge` 表示来源系列中的文章归入保留的系列；`remove` 表示删除空分类或空分支。每个位置都使用从一级到目标分类的完整路径，多个变化按照书写顺序处理。

`node blog.mjs sync` 会先检查全部变化，再同时更新分类页面、相关文章中的 `category`、分类站内链接和默认分类。文章文件夹、正文、附件、标签和网址不变。检查或写入失败时，文件会恢复到操作前状态，并保留 `changes` 供修正后重试；成功时，`changes` 会恢复为 `[]`。

### 通过文章修改归属

文章中的 `category` 可以直接改为任意有效的三级路径。`node blog.mjs sync` 会采用所有文章当前填写的归属；新路径缺少的分类会被建立，已有分类不会被改名、移动、重排或自动删除。新建分类暂时用其 `id` 作为网页名称，名称随后可以在 `category-tree.yml` 中修改。

## 公式和交换图

行内公式、独立公式和 AMS 数学环境沿用 Markdown Preview Enhanced 的写法。超出正文宽度的独立公式只在公式区域内横向滚动；交换图保持比例，并在需要时缩小到正文宽度。

TikZ 和 TikZ-CD 使用以下代码块：

````markdown
```tikz {embedFontCss=true}
\begin{tikzcd}
A \arrow[r] & B
\end{tikzcd}
```
````

本地网站只重新编译新增或发生变化的交换图，其余交换图使用已有结果。

## 网站名称、头像和字号

项目根目录的 `site.yml` 保存下列全站设置：

```yaml
title: <网站名称>
description: <首页说明>
brand:
  image: /brand/<头像文件名>
  imageAlt: <头像的文字说明>
  imageFit: contain
typography:
  contentSize:
    mobile: 15
    desktop: 18
  homeSize:
    mobile: 16
    desktop: 18
```

头像文件保存在 `content/public/brand`。`imageFit: contain` 会显示完整图像；`imageFit: cover` 会填满头像区域并裁切边缘。`contentSize` 设置文章正文，文章标题、章节标题、公式和阅读宽度会随之协调调整；左右目录和顶部导航保持界面字号，以免挤占正文空间。`homeSize` 设置主页分类与最近更新区域。每组的 `mobile` 和 `desktop` 分别是手机与电脑字号，可用范围都是 13 至 22；中间宽度的屏幕会在两者之间平滑调整。保存 `site.yml` 后，正在运行的本地网站会采用新设置。

## 其他内容操作

| 命令 | 结果 |
|---|---|
| `node blog.mjs new draft <草稿文件名>` | 在 `content/drafts` 建立不会进入网站的草稿文件夹和同名 Markdown 文件 |
| `node blog.mjs drafts` | 列出全部草稿 |
| `node blog.mjs publish <草稿文件名>` | 选择一个第三级分类，把完整草稿文件夹发布为正式文章 |
| `node blog.mjs rename <原文章文件名> <新文章文件名>` | 同步修改文章文件夹、Markdown 文件、`articleId`、网址和站内文章链接 |
| `node blog.mjs remove <文章文件名>` | 确认后把完整文章文件夹移入项目回收区；若仍有站内引用，命令会列出这些引用，但不会阻止移除 |
| `node blog.mjs discard <草稿文件名>` | 确认后，把完整草稿文件夹移入项目回收区 |
| `node blog.mjs restore article` | 列出已移除的文章，并恢复选中的完整文件夹 |
| `node blog.mjs restore draft` | 列出已移除的草稿，并恢复选中的完整文件夹 |
| `node blog.mjs trash` | 列出项目回收区中的文章和草稿 |

项目回收区是项目根目录的 `.trash` 文件夹；它只供上述移除和恢复操作使用，不会进入 Git 仓库或网站。

## 检查、生成和发布

| 命令 | 结果 |
|---|---|
| `node blog.mjs check` | 只检查维护程序、文章设置、分类和本地资源，不修改项目文件 |
| `node blog.mjs generate` | 采用当前文章分类，并在 `content/.vitepress/dist` 生成可部署的静态网站 |
| `node blog.mjs deploy` | 自动同步文章与分类并生成网站；成功后记录全部项目文件变化并上传到 `site.yml` 指定的 GitHub 仓库 |
| `node blog.mjs deploy -m <本次上传的说明>` | 执行相同上传流程，并使用填写的文字说明这次 Git 记录 |
| `node blog.mjs deploy --dry-run` | 按正式网站路径完成生成并报告上传目标，但不暂存、提交或上传文件 |
| `node blog.mjs preview` | 显示最近一次 `generate` 已经生成的静态网站；优先使用 <http://127.0.0.1:4173/>，端口被占用时会显示随后选用的空闲端口；该命令本身不重新生成 |
| `node blog.mjs clean` | 删除可重新生成的网站输出和临时缓存，保留文章、图片、附件、分类介绍和 TikZ 缓存 |

第一次发布前，在 GitHub 仓库的 `Settings → Pages` 页面中，把 `Source` 设为 `GitHub Actions`。这里的 GitHub Actions 是 GitHub 在收到源码后自动执行的项目发布程序。当前部署设置位于 `site.yml`：源码上传到 `https://github.com/elenalee20251212-a11y/Blog.git` 的 `main` 分支，网页发布到 <https://elenalee20251212-a11y.github.io/Blog/>。第一次上传时，Git for Windows 可能打开浏览器要求登录 GitHub；登录结果由 Git 自己保存，博客项目不保存密码或访问令牌。

日常发布只需在 `site` 文件夹中执行 `node blog.mjs deploy`。命令先以 `/Blog/` 为网站路径完成整站生成；任何分类、文章、公式、TikZ 或构建错误都会在上传前停止。生成成功后，命令建立或核对名为 `origin` 的远程仓库地址，记录当前项目的新增、修改和删除，推送到 `main`，并报告文件变化数量、提交编号、发布进度地址和网页地址。GitHub 收到源码后会再次使用同一套生成配置构建网页，因此本地验证与 GitHub Pages 的内容和路径一致。
