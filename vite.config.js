//@3:vite.config.js内に変更を加えjsconfig.jsonファイルを追加すれば@でsrcフォルダのパスまで自動で指定できる。
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ← ここが "src" であること！
    },
  },
});
