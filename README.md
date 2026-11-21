# jjkun.top

JJkun 的个人主页，用 [Astro](https://astro.build) 构建，部署在 GitHub Pages。

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
| 项目卡片 | `src/data/projects.ts`（加一条就多一张卡片） |
| 技能 | `src/data/skills.ts` |
| 颜色、字体 | `src/layouts/Base.astro` 里的 `:root` 变量 |

缩略图放在 `public/images/`。像素图在 `image` 里加上 `pixel: true`，放大时就不会变模糊。

## 部署

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布。

第一次部署需要先配置：

1. 在 GitHub 上新建仓库 `JJkun28.github.io`，把代码推上去。
2. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。
3. 同一页的 Custom domain 填 `jjkun.top`（`public/CNAME` 里也已经写好）。
4. Cloudflare DNS（都设为 **仅 DNS / 灰云**）：
   - `A  @  185.199.108.153`
   - `A  @  185.199.109.153`
   - `A  @  185.199.110.153`
   - `A  @  185.199.111.153`
   - `CNAME  www  JJkun28.github.io`
5. DNS 生效、证书签发后，在 Pages 设置里勾选 **Enforce HTTPS**。
