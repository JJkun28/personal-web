# jjkun.top

JJkun 的个人主页，用 [Astro](https://astro.build) 构建，部署在 Cloudflare Workers。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

## 改内容

| 想改什么 | 改哪个文件 |
|---|---|
| 名字、一句话介绍、邮箱 | `src/data/site.ts` |
| 项目（首页拼图 + 详情页） | `src/data/projects.ts`（加一条就多一块拼图和一个详情页） |
| 技能 | `src/data/skills.ts` |
| 颜色、字体 | `src/layouts/Base.astro` 里的 `:root` 变量 |
| 右侧插画 | `src/layouts/Page.astro`（图片在 `public/images/shanghai-newyork-*.webp`） |

图片放在 `public/images/`。像素图在 `cover` 里加上 `pixel: true`，放大时就不会变模糊。

## 部署

网站跑在 Cloudflare Workers 上（Worker 名为 `personal-web`），已经和 GitHub 仓库 `JJkun28/personal-web` 关联。

- 推送到 `main` 分支后，Cloudflare 会自动执行 `npm run build`，然后运行 `npx wrangler deploy` 发布。
- `jjkun.top` 和 `www.jjkun.top` 都绑定在这个 Worker 上，www 会跳转到主域名，http 会跳转到 https。
- 构建和部署记录在 Cloudflare 后台：Workers 和 Pages → personal-web → 部署。
