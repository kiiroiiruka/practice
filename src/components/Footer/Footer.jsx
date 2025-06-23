import React from 'react';
import './Footer.css'; // CSS を読み込む

const Footer = ({ title }) => {
  return (
    <footer className="footer">
      {/* @Footer: className でスタイルクラス指定 */}
      <div className="footer-box">
        {/* @Footer: 内部ボックスに囲ってタイトル表示 */}
        <h1>{title}</h1>
      </div>
    </footer>
  );
};

export default Footer;
