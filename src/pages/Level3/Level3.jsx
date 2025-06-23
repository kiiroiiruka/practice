import { useNavigate } from 'react-router-dom'
import './Level3.css'

const Level3 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className="level3-container">
      <button onClick={handleClick}>レベル3へ</button>
      <button onClick={handleClick}>レベル3へ</button>
    </div>
  )
}

export default Level3
