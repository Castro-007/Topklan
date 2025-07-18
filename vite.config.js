import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHost:['topklan.onrender.com'],
  },
  assetsInclude: ['**/*.PNG'],
})
