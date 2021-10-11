import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    dts({
      beforeWriteFile: (fp) => {
        return { filePath: fp.replace('src/', '') };
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'refracted',
      fileName: (format) => `refracted.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'framer-motion', '@heroicons/react', 'formik'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
      },
    },
  },
});
