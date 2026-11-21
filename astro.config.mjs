import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jjkun.top',
  // 把 CSS 直接写进 HTML，这样双击 dist/index.html 本地打开时样式也能生效
  build: { inlineStylesheets: 'always' },
});
