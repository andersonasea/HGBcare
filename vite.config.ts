import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Charge le .env depuis src/ (votre fichier .env dans src/ sera utilisé)
  envDir: 'src',
})
