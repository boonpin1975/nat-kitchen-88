import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['www.natkitchen.shop', 'natkitchen.shop']
  },
  preview: {
    host: true,
    allowedHosts: ['www.natkitchen.shop', 'natkitchen.shop']
  }
});
