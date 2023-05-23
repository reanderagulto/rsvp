import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': "/src",
      '@assets': "/src/assets",
      '@components': "/src/components",
      '@layout': "/src/layout",
      '@data': "/src/data.jsx",
      '@images': "/src/assets/images",
      '@svg': "/src/assets/svg"
    },
  },
})
