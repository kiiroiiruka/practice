import { useNavigate } from 'react-router-dom'
import './Level2.css'

const Level2 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/level3')  // ← level3 に遷移
  }

  return (
    <div className="level2-container">
      {/*@2:上記のdivタグはimportしているCSSファイル内のlevel2-containerクラス
      のレイアウトがdivで囲っている範囲内全てに反映されるようにしている。ちなみにその際、
      level2-container内には横並びにするコードが書かれているためこの画面ではボタンが横並びで表示される*/}
      <button onClick={handleClick}>レベル3へ</button>
      <button onClick={handleClick}>レベル3へ</button>
    </div>
  )
}

export default Level2
