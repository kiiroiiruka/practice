import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header.jsx';
import Footer from '@/components/Footer/Footer';
import ItemList from '@/components/ItemList/ItemList';
import styles from './Level6.module.css';

const Level6 = () => {
  const navigate = useNavigate();

  //@6:引数としてFlatListコンポーネントに送るリストを作成している
  const myList1 = ['あ', 'い'];
  const myList2 = ['１個', '２個', '３個'];
  const myList3 = ['ま', 'み', 'む', 'め'];
  const myList4 = ['A', 'B', 'C'];

  return (
    <div className={styles.wrapper}>
      <Header title="レベル6" />

      {/* ▼ ページ遷移ボタン ▼ */}
      <div className={styles.listRow}>
        <button className={styles.button} onClick={() => navigate('/level5')}>
          レベル5へ
        </button>
        <button className={styles.button} onClick={() => navigate('/level7')}>
          レベル7へ
        </button>
      </div>

      {/*@6:下記の部分ではcomponentsフォルダ内に設置したFlatList
      コンポーネントを活用して情報を縦に列挙して表示している*/}
      {/* ▼ リスト表示部分 ▼ */}
      <div className={styles.listRow}>
        <ItemList items={myList1} />
        <ItemList items={myList2} />
      </div>

      <div className={styles.listRow}>
        <ItemList items={myList3} />
        <ItemList items={myList4} />
      </div>

      <Footer title="レベル6" />
    </div>
  );
};

export default Level6;
