import React from "react";
import './App.css';
import CodeBar from "./components/CodeBar/CodeBar";
import { EditorProvider } from "./context/context";

function App() {
  return (
    //всё приложение обернуть в провайдер который мы сделали в context
<EditorProvider>
<CodeBar/>
</EditorProvider>

      

  );
}

export default App;
