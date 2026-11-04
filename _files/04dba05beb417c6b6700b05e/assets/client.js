const base = document.querySelector('meta[name="blog-base"]')?.content ?? "/";
const url = (path) => base.slice(0, -1) + path;
// Both sticky bars share their measured layout heights with every offset.
const header = document.querySelector(".site-header");
const localNavigation = document.querySelector(".local-nav");
function measureNavigation(entries = []) {
  for (const [element, property] of [
    [header, "--header-height"],
    [localNavigation, "--local-nav-height"],
  ]) {
    const entry = entries.find((item) => item.target === element);
    const height =
      entry?.borderBoxSize?.[0]?.blockSize ?? element?.offsetHeight ?? 0;
    document.documentElement.style.setProperty(property, height + "px");
  }
}
measureNavigation();
if (typeof ResizeObserver !== "undefined") {
  const navigationObserver = new ResizeObserver(measureNavigation);
  for (const element of [header, localNavigation])
    if (element) navigationObserver.observe(element);
} else {
  window.addEventListener("resize", () => measureNavigation(), {
    passive: true,
  });
}
const menu = document.getElementById("menu"),
  outlineMenu = document.getElementById("outline-menu");
const toggle = (kind, button, force) => {
  const opened = force ?? !document.body.classList.contains(kind + "-open");
  document.body.classList.toggle(kind + "-open", opened);
  button?.setAttribute("aria-expanded", String(opened));
};
menu?.addEventListener("click", () => {
  toggle("outline", outlineMenu, false);
  toggle("menu", menu);
});
outlineMenu?.addEventListener("click", () => {
  toggle("menu", menu, false);
  toggle("outline", outlineMenu);
});
document
  .querySelector(".sidebar-backdrop")
  ?.addEventListener("click", () => toggle("menu", menu, false));
document
  .querySelectorAll("#toc a")
  .forEach((a) =>
    a.addEventListener("click", () => toggle("outline", outlineMenu, false)),
  );
const dialog = document.getElementById("search-dialog"),
  search = document.getElementById("search"),
  results = document.getElementById("search-results"),
  status = document.getElementById("search-status");
let index = null,
  searchSequence = 0;
let searchLibrary = null;
function loadSearch() {
  return (searchLibrary ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url("/assets/minisearch.js");
    script.onload = () => resolve(window.MiniSearch);
    script.onerror = () => {
      script.remove();
      searchLibrary = null;
      reject(Error("搜索程序读取失败，请重试"));
    };
    document.head.append(script);
  }));
}
document.querySelector(".search-trigger")?.addEventListener("click", () => {
  dialog.showModal();
  search.focus();
});
document
  .getElementById("search-close")
  ?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      dialog.close();
  }
});
const tokens = (text) => {
  const lower = text.toLowerCase();
  return [
    ...(lower.match(/[a-z0-9]+/g) ?? []),
    ...(lower.match(/[\u3400-\u9fff]+/g) ?? []).flatMap((s) =>
      s.length === 1
        ? [s]
        : Array.from({ length: s.length - 1 }, (_, i) => s.slice(i, i + 2)),
    ),
  ];
};
search?.addEventListener("input", async () => {
  const sequence = ++searchSequence,
    query = search.value.trim().toLowerCase();
  results.replaceChildren();
  if (!query) {
    status.textContent = "输入关键词开始搜索";
    return;
  }
  status.textContent = "搜索中…";
  try {
    index ??= Promise.all([
      loadSearch(),
      fetch(url("/assets/search.json")).then((r) => {
        if (!r.ok) throw Error("索引读取失败");
        return r.json();
      }),
    ])
      .then(([MiniSearch, entries]) => {
        const engine = new MiniSearch({
          fields: ["title", "body", "tags"],
          storeFields: ["title", "url", "kind"],
          tokenize: tokens,
        });
        engine.addAll(
          entries.map((entry) => ({
            ...entry,
            id: entry.key,
            tags: entry.tags.join(" "),
          })),
        );
        return engine;
      })
      .catch((error) => {
        index = null;
        throw error;
      });
    const engine = await index;
    if (sequence !== searchSequence) return;
    const ranked = engine.search(query, {
      boost: { title: 5, tags: 2 },
      prefix: true,
      fuzzy: 0.2,
      combineWith: "AND",
    });
    for (const entry of ranked.slice(0, 40)) {
      const a = document.createElement("a");
      a.href = url(entry.url);
      a.textContent = entry.title;
      const small = document.createElement("small");
      small.textContent = entry.kind ?? "文章";
      a.append(small);
      results.append(a);
    }
    status.textContent = ranked.length
      ? ranked.length + " 个结果" + (ranked.length > 40 ? "，显示前 40 个" : "")
      : "没有找到结果";
  } catch (error) {
    status.textContent = error.message;
  }
});
search?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    results.querySelector("a")?.focus();
  }
  if (event.key === "Enter") results.querySelector("a")?.click();
});
results?.addEventListener("keydown", (event) => {
  if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
  event.preventDefault();
  const links = [...results.querySelectorAll("a")],
    position = links.indexOf(document.activeElement),
    next = position + (event.key === "ArrowDown" ? 1 : -1);
  if (next < 0) search.focus();
  else links[Math.min(next, links.length - 1)]?.focus();
});
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    dialog.showModal();
    search.focus();
  }
  if (event.key === "Escape") {
    toggle("menu", menu, false);
    toggle("outline", outlineMenu, false);
  }
});
const tagButtons = [...document.querySelectorAll("[data-tag]")],
  tagArticles = [...document.querySelectorAll("[data-article-tags]")];
function selectTag(tag) {
  let count = 0;
  for (const item of tagArticles) {
    const shown = !tag || JSON.parse(item.dataset.articleTags).includes(tag);
    item.hidden = !shown;
    if (shown) count++;
  }
  for (const button of tagButtons) {
    const selected = button.dataset.tag === tag;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
  const summary = document.getElementById("tag-summary");
  if (summary)
    summary.textContent =
      (tag ? "#" + tag : "全部文章") + " · " + count + " 篇";
}
tagButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const target = new URL(location.href),
      tag = button.dataset.tag;
    if (tag) target.searchParams.set("tag", tag);
    else target.searchParams.delete("tag");
    history.replaceState(null, "", target);
    selectTag(tag);
  }),
);
if (tagButtons.length)
  selectTag(new URL(location.href).searchParams.get("tag") ?? "");
const outlineLinks = [...document.querySelectorAll("[data-outline-link]")];
if (outlineLinks.length) {
  const links = new Map(
    outlineLinks.map((a) => [decodeURIComponent(a.hash.slice(1)), a]),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) {
          outlineLinks.forEach((a) => a.classList.remove("active"));
          links.get(entry.target.id)?.classList.add("active");
        }
    },
    { rootMargin: "-10% 0px -65% 0px", threshold: 0 },
  );
  for (const id of links.keys()) {
    const heading = document.getElementById(id);
    if (heading) observer.observe(heading);
  }
}
if (document.querySelector('meta[name="blog-live-reload"]')) {
  const events = new EventSource(url("/__events"));
  events.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "ready" && data.changed) location.reload();
    if (data.type === "error") {
      const error = document.getElementById("update-error");
      error.textContent = "这次保存尚未应用：" + data.message;
      error.hidden = false;
    }
  };
}
