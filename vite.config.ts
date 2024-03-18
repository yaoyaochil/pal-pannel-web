import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8800',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/socket': {
                target: 'ws://localhost:8800/socket',
                changeOrigin: true,
                ws: true,
                rewrite: (path) => path.replace(/^\/socket/, '')
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        }
    }
})

