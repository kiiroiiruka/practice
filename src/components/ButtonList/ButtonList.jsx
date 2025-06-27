import React from 'react';
import CustomButton from '@/components/CustomButton/CustomButton'; // 先程作成したカスタムボタンコンポーネント
import styles from './ButtonList.module.css';  // スタイルシートを追加

const ButtonList = ({ buttons }) => {
  return (
    <div className={styles.buttonList}>
      {buttons.map((button, index) => (
        <div key={index} className={styles.buttonItem}>
          <CustomButton onClick={button.onClick} variant="brownOutline">
            {button.label}
          </CustomButton>
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
