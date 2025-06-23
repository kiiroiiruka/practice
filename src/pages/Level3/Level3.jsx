import React from 'react';
import Header from '@/components/Header/Header.jsx';
import './Level3.css';// CSSファイルをインポート（すでにインポートされている場合は不要）
import { useNavigate } from 'react-router-dom'
const Level3 = () => {
  const navigate =useNavigate()
  const handleClick = () => {
      navigate("level4")
  };

  return (
    <div>
      {/*@3:ここでcomponents内に作成したHeaderコンポーネントを呼び出す*/}
      <Header title="レベル3" />
      <div className="level3-container">
        <button onClick={handleClick}>
          レベル4へ
        </button>
      </div>
    </div>
  );
};

export default Level3;
