import { useNavigate } from 'react-router-dom'
import './Level1.css' // CSSをインポート

const Level1 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/level2')
  }

  return (
    <div className="level1-container">
      <button onClick={handleClick}>レベル2へ</button>
    </div>
  )
}

export default Level1
