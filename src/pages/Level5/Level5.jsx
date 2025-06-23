import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header.jsx';
import './Level5.css'; // CSSファイルを使い回す or Level4.cssに変更してもOK

const Level5 = () => {
  const navigate = useNavigate();

  // 2次元配列で行ごとに表示する文字を定義
  const rows = [
    ['あ', 'え'],
    ['い', 'お'],
    ['う', 'か'],
  ];

  return (
    <div className="level4-wrapper">
      <Header title="レベル5" />

      <button className="top-left-button" onClick={() => navigate('/level4')}>
        レベル4へ
      </button>

      <button className="bottom-right-button" onClick={() => navigate('/level6')}>
        レベル6へ
      </button>

      {/*@5:.mapを2重に重ねる*/}
      <div className="center-content">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((char, charIndex) => (
              <span key={charIndex} className="cell">{char}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Level5;
