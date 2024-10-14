import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../public'),  // CodeIgniter의 public 폴더로 출력
    rollupOptions: {
      input: path.resolve(__dirname, './index.html'),  // 프로젝트의 index.html 설정
      output: {
        entryFileNames: 'assets/js/[name].js',
        assetFileNames: 'assets/[ext]/[name][extname]',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  base: '/',
})
