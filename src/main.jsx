import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Level1 from './pages/level1/Level1.jsx'
import Level2 from './pages/level2/Level2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
