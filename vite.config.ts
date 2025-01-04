import { defineConfig } from 'vite';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths'; // Optional for TypeScript projects

export default defineConfig({
  plugins: [tsconfigPaths()], // Add this if using vite-tsconfig-paths
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      
    },
  },
});
