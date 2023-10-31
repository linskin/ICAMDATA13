import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// vite.config.js


export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: ['src/components/icons/zanzhushang.png']
    }
  }
})

// 端口设置
// module.exports = {
//   // lintOnSave:false,
//   devServer:{
//     // host:"localhost",
//     // port: 5173
//   }
// }.
