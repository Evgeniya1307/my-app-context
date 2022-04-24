import React from "react";
import CodeBar from "./components/CodeBar/CodeBar";
import { EditorProvider } from "./context/context";
import styles from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    //всё приложение обернуть в провайдер который мы сделали в context
    <EditorProvider>
      <CodeBar />

      <div className={styles.main}>
        <Header />
      </div>
    </EditorProvider>
  );
}

export default App;
