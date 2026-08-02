# Elena Blog

可部署到 GitHub Pages 的 VitePress 博客。文章以独立文件夹保存 Markdown、图片和附件；网站提供三级分类、标签、全文搜索、电脑端双目录、手机端收起目录、MathJax 与 TikZ-CD。

## 本地网站

在项目文件夹中，`npm ci` 会按照 `package-lock.json` 安装项目使用的程序；项目刚被下载、复制，或者该文件发生变化后需要执行一次。随后使用：

```text
node blog.mjs server
```

本地网站通常位于 <http://127.0.0.1:5173/>；如果该端口已被其他程序占用，命令会显示实际使用的地址。保存内容后，网页会自动更新。

`node blog.mjs close` 会从另一个命令行窗口停止本项目启动的本地网站或静态网站预览，并且不会结束占用相同端口范围的其他程序。

## 常用操作

```text
node blog.mjs new <文章文件名>
node blog.mjs sync
node blog.mjs undo
node blog.mjs check
node blog.mjs generate
node blog.mjs deploy
```

`sync` 同时读取分类树、文章文件夹和文章中的分类信息。直接增加或删除文章文件夹、修改文章分类，或者修改分类树后，都使用这一条命令；`server` 和 `generate` 也会先执行同一同步过程。

`node blog.mjs help` 会列出全部博客操作。所有公开的博客命令均进入 `node blog.mjs` 命名空间；`npm` 只用于安装项目所需程序。

## 文档

- [博客使用说明](docs/USER-GUIDE.md)
- [项目开发文档](docs/DEVELOPMENT.md)

`node blog.mjs deploy` 会先生成适用于仓库子路径的完整网站；生成成功后，它把项目变化提交并上传到 `elenalee20251212-a11y/Blog` 的 `main` 分支。GitHub 随后运行项目自带的发布程序，将 `content/.vitepress/dist` 部署到 <https://elenalee20251212-a11y.github.io/Blog/>。
