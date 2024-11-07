import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'app/views/*.html',
          dest: 'app/views/'
        }
      ]
    })
  ]
});
