import React, { useState } from "react";
import styles from "./CodeBar.module.css";
import HtmlEditor from "./Editor/HtmlEditor";

const CodeBar = () => {
  // определяюсь какой tab показывать html css js делаю это при момощи состояния
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className={styles.codebar}>
      <nav className={styles.tab}>
        <button
          onClick={() => setActiveTab("html")}
          className={`${styles.item} 
          ${activeTab === "html" ? styles.activeTab : "" }`} // делаю проверку если активный таб ===строке html ? тогда клас у нас будет styles.activeTab а в противном случае : ""
        >
          HTML
        </button>
        <button 
        onClick={() => setActiveTab("css")} 
        className={`${styles.item}
        ${activeTab === "css" ? styles.activeTab : ""}`}
        >
          CSS
        </button>
        <button 
        onClick={() => setActiveTab("js")} 
        className={`${styles.item}
        ${activeTab === "js" ? styles.activeTab : ""}`}
        >
          JS 
        </button>
      </nav>

<div className={styles.editor}>
    {activeTab==="html" ? <HtmlEditor/> : null }
    {activeTab==="css" ? <div>СSS</div> : null }
    {activeTab==="js" ? <div>JS</div> : null }

</div>

    </div>
  );
};

export default CodeBar;
