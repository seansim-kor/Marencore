
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          // Fix: Property 'cwd' does not exist on type 'Process'. 
          // Using path.resolve('.') instead of process.cwd() to resolve the TypeScript error in the build environment.
          '@': path.resolve('.'),
        }
      }
    };
});
