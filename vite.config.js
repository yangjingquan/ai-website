import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://wbapi.nexbyte.top',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    proxy: {
      '/api': {
        target: 'http://wbapi.nexbyte.top',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
