import React from 'react';
import styles from './ItemList.module.css'; // CSSモジュールをインポート
//@6:このコンポーネントを呼び出すことで一覧として表示させている。

// フラットリストコンポーネント
const ItemList = ({ items }) => {
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

export default ItemList;
