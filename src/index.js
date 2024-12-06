import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import { Image } from './task1/image';
// import Function from './task3/dummy';
// import Main from './task5/fakestori';
import ColorSchemesExample from './task4/portfolio';
import reportWebVitals from './reportWebVitals';
// import Main from './task5/fakestori';
// import Counter from './task2/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Image/> */}
    {/* {<Function/>} */}
    {/* {<Main/>} */}
    {<ColorSchemesExample/>}
    
    {/* <Counter/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
