import React from 'react';
import styles from './CustomButton.module.css';
//@8:おしゃれなボタンコンポーネントを作成、引数に応じてボタンの色のデザインを変えられるようになっている。
const CustomButton = ({ children, onClick, type = 'button', variant = 'outline' }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick} type={type}>
      {/*@8:`${styles.button} ${styles[variant]}`の値によってボタンのデザインが変わる*/}
      {children}
    </button>
  );
};

export default CustomButton;
