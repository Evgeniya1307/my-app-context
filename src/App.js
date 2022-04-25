import React from "react";
import CodeBar from "./components/CodeBar/CodeBar";
import { EditorProvider } from "./context/context";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    //всё приложение обернуть в провайдер который мы сделали в context
    <EditorProvider>
      <CodeBar />
      <div className={styles.main}>
        <Header />
        <Preview />
      </div>
    </EditorProvider>
  );
}

export default App;
