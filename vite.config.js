import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://serranegramc.com.br',
      dynamicRoutes: [
        '/sobre',
        '/servicos',
        '/dados',
        '/time',
        '/contato'
      ]
    })
  ],
  server: {
    open: true,
    host: "0.0.0.0",
    port: 3000,
  },
})
