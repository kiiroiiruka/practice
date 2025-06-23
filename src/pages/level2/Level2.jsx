import { useNavigate } from 'react-router-dom'
import './Level2.css'

const Level2 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/level3')
  }

  return (
    <div className="level2-container">
      <button onClick={handleClick}>レベル3へ</button>
      <button onClick={handleClick}>レベル3へ</button>
    </div>
  )
}

export default Level2
