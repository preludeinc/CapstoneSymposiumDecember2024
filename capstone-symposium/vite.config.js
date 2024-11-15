import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    base: '/cosc/archived-capstone/December2024/',
    outDir: './December2024',
  }
})