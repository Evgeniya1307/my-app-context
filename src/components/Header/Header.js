import React, { useState } from "react";
import Webcam from "react-webcam";
import { BsCameraVideoFill, BsCameraVideoOff } from "react-icons/bs";
import Draggable from "react-draggable";
import styles from "./Header.module.css";

const Header = () => {
  const [camera, setCamera] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <button onClick={() => setCamera(!camera)} className={styles.button}>
          {camera ? (
            <BsCameraVideoFill fill="#fff" size={23} />
          ) : (
            <BsCameraVideoOff fill="#fff" size={23} />
          )}
        </button>
      </header>
      {camera ? (
        <Draggable>
          <Webcam
            className={styles.camera}
            audio={false}
            width={300}
            height={300}
            videoConstraints={{
              width: 300,
              height: 300,
              facingMode: "user",
            }}
          />
        </Draggable>
      ) : null}
    </>
  );
};

export default Header;