import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': "/src",
      '@assets': "/src/assets",
      '@sections': "/src/sections",
      '@layout': "/src/layout",
      '@data': "/src/data.jsx",
      '@images': "/src/assets/images",
      '@svg': "/src/assets/svg", 
      '@hooks' : "/src/hooks"
    },
  },
})
