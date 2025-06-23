import React from 'react';
import styles from './Header.module.css'; // CSSモジュールを使用

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      {/* @3:上記のheaderタグでheaderのスタイル反映させる際もclassNameで指定が必要 */}
      <div className={styles.headerBox}>
        {/* @3:上記のdivタグでheader-boxのスタイル反映させる際もclassNameで指定が必要 */}
        <h1>{title}</h1>
        {/* @3:上記のh1だけclassNameで指定が不要
        (cssファイル内で.header-box内のh1タグに関する設定を空白一マス開けて書いたから) */}
      </div>
    </header>
  );
};

export default Header;
