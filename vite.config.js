import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 50,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 50,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 50,
      },
    })
  ],
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
