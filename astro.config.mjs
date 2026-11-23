import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jjkun.top',
  // 把 CSS 直接写进 HTML，这样双击 dist/index.html 本地打开时样式也能生效
  // format: 'file' 让详情页生成为 projects/xxx.html，相对路径在本地和线上都能用
  build: { inlineStylesheets: 'always', format: 'file' },
});
