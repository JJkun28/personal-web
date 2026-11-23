// 站内资源都用相对路径（本地双击 dist 里的 html 也能打开）。
// 子页面（如 projects/xxx.html）要先退回到根目录：rootOf 返回需要的 '../' 前缀。
export const rootOf = (url: URL) =>
  '../'.repeat(Math.max(0, url.pathname.split('/').filter(Boolean).length - 1));
