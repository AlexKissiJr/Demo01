// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugin: [
    react()
  ],
  build: {
    ssr: false,
    sourcemap: true,
    declaration: true,
    declarationDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'CodebabyReact',
      // the proper extensions will be added
      fileName: (format) => {
        if (format === 'es') {
          return 'codebaby-react.esm.js';
        }
        if (format === 'umd') {
          return 'codebaby-react.umd.js';
        }
        if (format === 'cjs') {
          return 'codebaby-react.js';
        }
      },
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        compact: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['react', 'react-dom']
  }
})