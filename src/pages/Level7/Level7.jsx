import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderDisplay from '@/components/HeaderDisplay/HeaderDisplay';
import Footer from '@/components/Footer/Footer';
import FlatList from '@/components/ItemList/ItemList';
import styles from './Level7.module.css';

// 画像のインポート
//@7:ここで画像を呼び出している、ちなみに画像は内にimagesフォルダを作成して
//その中にセットすることが一般的でここではその画像ファイルをimportしている
import sampleImage from '@/assets/images/スクリーンショット 2025-06-27 091608.png';


const Level7 = () => {
  const navigate = useNavigate();

  // リストデータ
  const myList1 = ['あ', 'い'];
  const myList2 = ['１個', '２個', '３個'];

  return (
    <div className={styles.wrapper}>
      {/* ▼ HeaderDisplay に FlatList を渡す ▼ */}

      {/*@7:下記はHeaderDisplayコンポーネントを活用しているが
        その際下記の
        
        <div className={styles.listRow}>
          <FlatList items={myList1} />
          <FlatList items={myList2} />
        </div>

        の内容を引数としてHeaderDisplayコンポーネント内に送っている。
      */}
      <HeaderDisplay title="レベル7のヘッダー">
        <div className={styles.listRow}>
          {/*@7:ここではレベル6で活用したコンポーネントを活用している。*/}
          <FlatList items={myList1} />
          <FlatList items={myList2} />
        </div>
      </HeaderDisplay>

      {/* レベル8へボタンと画像を一緒に表示 */}
      <div className={styles.bottomContent}>
        <button className={styles.bottomButton} onClick={() => navigate('/level8')}>
          レベル8へ
        </button>

        {/*@7:imgタグで画像を表示*/}
        <img 
          src={sampleImage}
          alt="丸枠の画像"
          className={styles.roundedImage}
        />
      </div>


      <Footer title="レベル7" />
    </div>
  );
};

export default Level7;
