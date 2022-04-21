import React, { useState } from "react";
import { BsCameraVideoFill, BsCameraVideoOff } from "react-icons/bs";
import styles from "./Header.module.css";

function Header() {
  const [camera, setCamera] = useState(false);
  return (
    <header className={styles.header}>
      <button onClick={() => setCamera(!camera)} className={styles.button}>
        {camera ? (
          <BsCameraVideoFill fill="#fff" size={23} />
        ) : (
          <BsCameraVideoOff fill="#fff" size={23} />
        )}
      </button>
    </header>
  );
}

export default Header;
