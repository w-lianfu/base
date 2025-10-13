import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  server: { port: 5500 },
  html: { template: './public/index.html' },
  resolve: {
    alias: {
      '@': './src',
      '@src': './src',
      '@tauri': './src-tauri',
      '@base': './src/base',
      '@comp': './src/component',
      '@con': './src/container',
      '@core': './src/core',
      '@db': './src/db',
      '@lib': './src/lib',
      '@page': './src/page',
      '@scss': './src/scss',
      '@service': './src/service',
      '@static': './src/static',
      '@image': './src/static/image',
      '@icon': './src/static/icon',
      '@store': './src/store',
      '@styled': './src/styled',
      '@theme': './src/theme',
      '@tool': './src/tool',
      '@ui': './src/ui',
    },
  },
});
