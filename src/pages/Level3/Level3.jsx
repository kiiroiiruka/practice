import React from 'react';
import Header from '@/components/Header/Header.jsx'; //@3: ここでcomponentsフォルダ内に作成したHeaderコンポーネントを呼び出す。※@でsrc直下のパスからスタートしている
import style from './Level3.module.css';
import { useNavigate } from 'react-router-dom';

const Level3 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/level4");
  };

  return (
    <div>
      {/*@3: 下記のHeaderのタグで、components内に作成したHeaderコンポーネントを
      呼び出して活用している。ちなみにこの際レベル3という文字列を引数として送っている
      ためHeaderの部分には「レベル3」という文字列が表示される*/}
      <Header title="レベル3" />
      
      {/*@3: 下記のdivタグはlevel3Containerクラスを使用して、スタイルが適用されたボタンを中央に配置する*/}
      <div className={style.level3Container}>
        <button onClick={handleClick}>レベル4へ</button>
      </div>
    </div>
  );
};

export default Level3;
