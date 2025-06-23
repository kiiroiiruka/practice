import { useNavigate } from 'react-router-dom'

function Level1() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/level2')  // プログラム的に遷移
  }

  return (
    <div>
      <h1>Level1</h1>
      <button onClick={handleClick}>Go to Level2</button>
    </div>
  )
}

export default Level1
