// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugin: [react()],
  build: {
    ssr: false,
    sourcemap: true,
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
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        compact: true,
        // Provide global variables to use in the UMD build
        // for externalized deps
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