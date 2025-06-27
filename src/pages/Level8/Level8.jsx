import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/CustomButton/CustomButton';
import CustomButtonList from '@/components/CustomButtonList/CustomButtonList';
import styles from './Level8.module.css';

const Level8 = () => {
  const navigate = useNavigate();

  const buttonData1 = [
    { label: 'レベル1へ移動', onClick: () => navigate('/') },
    { label: 'レベル2へ移動', onClick: () => navigate('/level2') },
    { label: 'レベル3へ移動', onClick: () => navigate('/level3') },
  ];

  const buttonData2 = [
    { label: 'レベル4へ移動', onClick: () => navigate('/level4') },
    { label: 'レベル5へ移動', onClick: () => navigate('/level5') },
    { label: 'レベル6へ移動', onClick: () => navigate('/level6') },
    { label: 'レベル7へ移動', onClick: () => navigate('/level7') },
  ];

  return (
    <div className={styles.wrapper}>
      {/* レベル9へ進むボタン */}
      <div className={styles.topButton}>
        <CustomButton onClick={() => navigate('/level9')}>レベル9へ移動</CustomButton>
      </div>

      {/* 各ボタンリスト */}
      <CustomButtonList buttons={buttonData1} />
      <CustomButtonList buttons={buttonData2} />
    </div>
  );
};

export default Level8;
