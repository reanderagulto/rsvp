import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: true,
                removeViewBox: true, // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: true,
                remove: false,
              },
              convertPathData: true,
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
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
      '@components': "/src/components",
      '@data': "/src/data.jsx",
      '@images': "/src/assets/images",
      '@svg': "/src/assets/svg", 
      '@hooks' : "/src/hooks"
    },
  },
})
