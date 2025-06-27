import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Level1 from './pages/Level1/Level1'
import Level2 from './pages/Level2/Level2'
import Level3 from './pages/Level3/Level3'
import Level4 from './pages/Level4/Level4'
import Level5 from './pages/Level5/Level5'
import Level6 from './pages/Level6/Level6'
import Level7 from './pages/Level7/Level7'
/*@1:遷移先ページが増えるごとにこの中にあるページも増え続ける*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/*@1:下記の<Routes>内に以下のようなコードを書くことでconst navigate = useNavigate()を活用した際
      pathで指定した名前を活用してelementで指定したページに遷移することが出来るようになる*/}
      <Routes>
        {/*@1:下記のようにpathを"/"にセットすると、最初にアプリが起動した際に開かれる画面として
        セットされる。他のページからそのページに移動したい場合はnavigate("/")という処理を実行*/}
        <Route path="/" element={<Level1 />} />
        {/*@1:下記のようにpathを"/level2"にセットすると、他のページからそのページに
        navigate("/level2")という処理を実行することで移動できるようになる*/}
        <Route path="/level2" element={<Level2 />} />
        {/*@2:下記のようにpathを"/level3"にセットすると、他のページからそのページに
        navigate("/level3")という処理を実行することで移動できるようになる*/}
        <Route path="/level3" element={<Level3 />} />
        {/*@3:下記のようにpathを"/level4"にセットすると、他のページからそのページに
        navigate("/level4")という処理を実行することで移動できるようになる*/}
        <Route path="/level4" element={<Level4 />} />
        <Route path="/level5" element={<Level5 />} />
        <Route path="/level6" element={<Level6 />} />
        <Route path="/level7" element={<Level7 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
