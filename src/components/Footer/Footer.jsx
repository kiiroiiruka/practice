import React from 'react';
import styles from './Footer.module.css'; // CSSモジュールを使用

const Footer = ({ title }) => {
  return (
    <footer className={styles.footer}>
      {/* @Footer: className でスタイルクラス指定 */}
      <div className={styles.footerBox}>
        {/* @Footer: 内部ボックスに囲ってタイトル表示 */}
        <h1>{title}</h1>
      </div>
    </footer>
  );
};

export default Footer;
