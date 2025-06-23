import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Level1 from './pages/Level1/Level1.jsx'
import Level2 from './pages/Level2/Level2.jsx'
import Level3 from './pages/Level3/Level3.jsx'

/*@常に重要:遷移先ページが増えるごとにこの中にあるページも増え続ける*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level4" element={<Level4 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
