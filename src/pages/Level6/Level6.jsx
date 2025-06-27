import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header.jsx';
import Footer from '@/components/Footer/Footer';
import FlatList from '@/components/FlatList/FlatList';
import styles from './Level6.module.css';

const Level6 = () => {
  const navigate = useNavigate();

  // リストデータ
  const myList1 = ['あ', 'い'];
  const myList2 = ['１個', '２個', '３個'];
  const myList3 = ['ま', 'み', 'む', 'め'];
  const myList4 = ['A', 'B', 'C'];

  return (
    <div className={styles.wrapper}>
      <Header title="レベル6" />

      <h2>フラットリスト表示</h2>

      {/* ▼ ページ遷移ボタン ▼ */}
      <div className={styles.listRow}>
        <button className={styles.button} onClick={() => navigate('/level5')}>
          レベル5へ
        </button>
        <button className={styles.button} onClick={() => navigate('/level7')}>
          レベル7へ
        </button>
      </div>

      {/* ▼ リスト表示部分 ▼ */}
      <div className={styles.listRow}>
        <FlatList items={myList1} />
        <FlatList items={myList2} />
      </div>

      <div className={styles.listRow}>
        <FlatList items={myList3} />
        <FlatList items={myList4} />
      </div>

      <Footer title="レベル6" />
    </div>
  );
};

export default Level6;
