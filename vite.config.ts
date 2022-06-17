import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      input: ['index.html', 'src/main.ts', 'src/third-party-libs/pixi-js/pixi.min.mjs'],
    }
  },
})
