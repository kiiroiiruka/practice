import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header.jsx';
import Footer from '@/components/Footer/Footer';
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
    <div className="level5-wrapper">
      <Header title="レベル5" />

      <button className="level5-top-left-button" onClick={() => navigate('/level4')}>
        レベル4へ
      </button>

      <button className="level5-bottom-right-button" onClick={() => navigate('/level6')}>
        レベル6へ
      </button>

      {/*@5:下記のように.mapを2重に重ねる*/}
      <div className="level5-center-content">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="level5-row">
            {row.map((char, charIndex) => (
              <span key={charIndex} className="level5-cell">{char}</span>
            ))}
          </div>
        ))}
      </div>
      {/*@5:下記のFooterコンポーネントは絶対座標の為、もっと上の
      行に設置しても同じように動作はするが、基本的に下記のような位置
      (下の行)に設置することが一般的*/}
      <Footer title="レベル5" />
    </div>
  );
};

export default Level5;
