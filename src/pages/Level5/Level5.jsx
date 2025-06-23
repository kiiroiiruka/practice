import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header.jsx';
import Footer from '@/components/Footer/Footer';//@5:Headerの時と同様にFooterコンポーネントというものも作成する。
import styles from './Level5.module.css'; // CSSモジュールを使用

const Level5 = () => {
  const navigate = useNavigate();

  // 2次元配列で行ごとに表示する文字を定義
  const rows = [
    ['あ', 'え'],
    ['い', 'お'],
    ['う', 'か'],
  ];

  return (
    <div className={styles.wrapper}>
      <Header title="レベル5" />

      <button className={styles.topLeftButton} onClick={() => navigate('/level4')}>
        レベル4へ
      </button>

      <button className={styles.bottomRightButton} onClick={() => navigate('/level6')}>
        レベル6へ
      </button>

      {/*@5:下記のように.mapを2重に重ねる*/}
      <div className={styles.centerContent}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((char, charIndex) => (
              <span key={charIndex} className={styles.cell}>{char}</span>
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
