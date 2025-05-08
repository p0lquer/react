import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import "npm:react-router-dom";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), react()],
  
})
