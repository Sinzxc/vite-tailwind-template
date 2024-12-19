import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
      copyDtsFiles: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UIKit',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react-router-dom'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    }
  }
})
