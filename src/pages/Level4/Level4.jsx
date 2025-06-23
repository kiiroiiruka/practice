import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router 使用時
import Header from '@/components/Header/Header.jsx';
import './Level4.css'; // CSSファイルを別で定義

const Level4 = () => {
  const navigate = useNavigate();
  const items = ['あ', 'い', 'う'];//@4:一覧で何かを表示させる際は、リストやオブジェクト型(pythonでいう辞書型)なのでまとめることが多いい

  return (
    <div className="level4-wrapper">
      <Header title="レベル4" />
      {/*@4:下記のbuttonタグのonClick={() => {navigate('/level3')}}のように
      関数宣言なしでも()=>{処理}でページ遷移処理などを実行できる*/}
      <button className="top-left-button" onClick={() => {navigate('/level3')}}>
        レベル3へ
      </button>

      {/*@4:下記のbuttonタグのonClick={() => {navigate('/level5')}}のように
      関数宣言なしでも()=>{処理}でページ遷移処理などを実行できる*/}
      <button className="bottom-left-button" onClick={() => {navigate('/level5')}}>
        レベル5へ
      </button>

      <div className="center-content">
        {/*@4:縦並び(場合によっては横並びも)をさせる際は「.map」を活用すればいいと考えておけばOK*/}
        {items.map((item, index) => (
          <div key={index} className="item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Level4;
