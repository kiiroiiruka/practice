//@3:vite.config.js内を下記のようなコードになるように変更を加えjsconfig.jsonファイル内を
//特定のコードを書いた状態で追加すればパス示す際に@でsrcフォルダ内からスタートできるようになる。
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
