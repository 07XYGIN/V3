import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({

  plugins: [vue()],
  server: {
    port: 8080,
    host: true, 
    open: false,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://admin.fitness.byesame.com/prod-api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})