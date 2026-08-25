import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Japan-OS/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Japan OS — Demina Glorinta 2026',
        short_name: 'Japan OS',
        description: 'Japan Travel Companion — Demina Glorinta 2026',
        theme_color: '#d32f2f',
        background_color: '#ffffff',
        display: 'standalone',

        icons: [
          {
            src: '/Japan-OS/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/Japan-OS/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        cleanupOutdatedCaches: true,

        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'
        ],

        navigateFallback: 'index.html'
      }
    })
  ]
})