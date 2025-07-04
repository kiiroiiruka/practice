// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Level1 from './pages/Level1/Level1'
import Level2 from './pages/Level2/Level2'
import Level3 from './pages/Level3/Level3'
import Level4 from './pages/Level4/Level4'
import Level5 from './pages/Level5/Level5'
import Level6 from './pages/Level6/Level6'
import Level7 from './pages/Level7/Level7'
import Level8 from './pages/Level8/Level8'
import Level9 from './pages/Level9/Level9'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level4" element={<Level4 />} />
        <Route path="/level5" element={<Level5 />} />
        <Route path="/level6" element={<Level6 />} />
        <Route path="/level7" element={<Level7 />} />
        <Route path="/level8" element={<Level8 />} />
        <Route path="/level9" element={<Level9 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
