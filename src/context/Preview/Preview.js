import React, {useContext}from 'react';
import styles from "./Preview.module.css";
import { EditorContext } from '../../../context/context';

const Preview = ()=>{
    //достаю html css js
    const {html, css, js} = useContext(EditorContext)
   //создаю функцию которая всё выводит
   const document = useMemo(() => {
    if (!html && !css && !js) return;
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>${css}</style>
</head>
<body>
${html} 
<script>
${js}
</script>
</body>
</html>
`;
}, [html, css, js])
//   iframe - выводит результат нашего кода который мы будем писать слева
//   srcDoc -будет выводить <!DOCTYPE html>
return (
<div className={styles.content}>
{document ? (
  <iframe title="preview" className={styles.preview} srcDoc={document} />
) : (
  <div className={styles.loading}>Your code will be displayed here</div>
)}
</div>
);
};

export default Preview;