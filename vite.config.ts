import path from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const plugins = [vue()]
  if (!process.env.VITEST) {
    plugins.push(Sitemap())
  }

  return {
    plugins,

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    test: {
      environment: 'jsdom',
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
      setupFiles: ['./src/tests/setup-file'],
    },
  }
})
