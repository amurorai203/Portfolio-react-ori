import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://amurorai203.github.io/Portfolio-react/",
  plugins: [react()],
})
