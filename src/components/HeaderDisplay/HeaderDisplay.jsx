"use client"

import { useState } from "react"
import styles from "./HeaderDisplay.module.css"
/*@7:表示領域を確保して表示するHeaderコンポーネント*/
const HeaderDisplay = ({
  children, // 引数で表示内容を受け取る
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${styles.headerWrapper} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          {/* childrenをそのまま表示 */}
          <div className={styles.content}>{children}</div>
        </div>

        {/* トグルボタン */}
        <button className={styles.toggleButton} onClick={() => setIsOpen((prev) => !prev)} aria-label="トグルヘッダー">
          {isOpen ? "閉じる▲" : "開く▼"}
        </button>
      </div>
    </div>
  )
}

export default HeaderDisplay
