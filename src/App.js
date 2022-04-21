import React from "react";
import './App.css';
import CodeBar from "./components/CodeBar/CodeBar";
import { EditorProvider } from "./context/context";
import styles from "./App.module.css";

function App() {
  return (
    //всё приложение обернуть в провайдер который мы сделали в context
<EditorProvider>
<CodeBar/>

<div className={styles.main}></div>

</EditorProvider>

      

  );
}

export default App;
