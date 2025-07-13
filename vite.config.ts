import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    host: true,
    allowedHosts: [
      "9e537b70-c9c1-4dae-ac21-4b090f4e26ef-00-35s0rz8kzdrww.janeway.replit.dev"
    ],
  },
}); 