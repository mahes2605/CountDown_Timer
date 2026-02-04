import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CountDown_Timer/', // 👈 MUST start and end with /
})
