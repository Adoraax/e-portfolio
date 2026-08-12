import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://adoraax.github.io/e-portfolio/, so assets need that prefix.
export default defineConfig({
  plugins: [react()],
  base: '/e-portfolio/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
