import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages often serves the site from a sub-path; make asset URLs relative.
  // This keeps `npm run build` deployable without knowing the repo name ahead of time.
  base: './',
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  server: {
    port: 3001,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  }, 
  test: {
    environment: 'happy-dom',
    globals: true
  }
});
