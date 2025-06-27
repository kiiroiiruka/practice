import React from 'react';
import styles from './CustomButton.module.css';

const CustomButton = ({ children, onClick, type = 'button', variant = 'outline' }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default CustomButton;
