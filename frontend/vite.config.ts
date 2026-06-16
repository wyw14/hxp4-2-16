import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 42030,
    proxy: {
      '/api': {
        target: 'http://localhost:42031',
        changeOrigin: true,
      },
    },
  },
});
