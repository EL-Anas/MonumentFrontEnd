import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Monumentinfo from './components/MonumentDetail/Monumentinfo';
import Imageslider from './components/MonumentDetail/Imageslider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Evaluer from './components/Feedback/Evaluer';
import ListEval from './components/Feedback/listEval';

ReactDOM.render(
  <>
    <App/>
    </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

