import React, { useState } from "react";
import styles from "./CodeBar.module.css";

const CodeBar = () => {
  // определяюсь какой tab показывать html css js делаю это при момощи состояния
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className={styles.codebar}>
      <nav className={styles.tab}>
        <button
          onClick={() => setActiveTab("html")}
          className={`${styles.item} ${activeTab === "html" ? styles.activeTab : ""}`}// делаю проверку если активный таб ===строке html ? тогда клас у нас будет styles.activeTab а в противном случае : ""
        >
          HTML
        </button>
        <button onClick={() => setActiveTab("css")} className={styles.item}>
          CSS
        </button>
        <button onClick={() => setActiveTab("js")} className={styles.item}>
          JS
        </button>
      </nav>
    </div>
  );
};

export default CodeBar;
