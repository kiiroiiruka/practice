// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css' // @1:index.cssファイルを呼び出してここで全ページに反映されるレイアウトの効果をある程度整えておくのが基本らしい
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
