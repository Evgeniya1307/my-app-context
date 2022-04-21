import React from "react";
import './App.css';
import { EditorProvider } from "./context/context";

function App() {
  return (
    //всё приложение обернуть в провайдер который мы сделали в context
<EditorProvider>

</EditorProvider>

      

  );
}

export default App;
