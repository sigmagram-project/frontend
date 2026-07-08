import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Infra-only -- NOT a task placeholder.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  server: {
    port: 5173,
  },
});
