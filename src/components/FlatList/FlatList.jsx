import React from 'react';
import styles from './FlatList.module.css'; // CSSモジュールをインポート

// フラットリストコンポーネント
const FlatList = ({ items }) => {
  return (
    <div className={styles.listContainer}> {/* コンテナにスタイルを適用 */}
      {items.map((item, index) => (
        <div key={index} className={styles.listItem}> {/* アイテムにスタイルを適用 */}
          {item}
        </div>
      ))}
    </div>
  );
};

export default FlatList;
