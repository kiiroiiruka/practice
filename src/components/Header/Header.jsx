import React from 'react';
import './Header.css'; // CSSを読み込む
const Header = ({ title }) => {
  return (
    <header className="header">
    {/*@3:headerタグもclassNameで指定が必要*/}
      <div className="header-box">
      {/*@3:divタグもclassNameで指定が必要*/}
        <h1>{title}</h1>
        {/*@3:h1だけclassNameで指定が不要(cssファイル内で.header-box内のh1タグに関する設定を空白一マス開けて書いたから)*/}
      </div>
    </header>
  );
};

export default Header;
