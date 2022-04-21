import React, { createContext, useState } from "react";

const EditorContext = createContext();
// делаю провайдер
const EditorProvider = ({ children }) => {
  //делаю состояния для html, css  и js
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  //для передачи value
  const value={
      html, css, js, setHtml, setCss, setJs
  }
  
  // возвращаю разметку
  return <EditorContext.Provider value={value}>
  {children}
  </EditorContext.Provider>;
};

export {EditorProvider, EditorContext}