import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8EvqPqTEV5posRWpdN49E1mCiGj_JdoE",
  authDomain: "my-shop-17599.firebaseapp.com",
  projectId: "my-shop-17599",
  storageBucket: "my-shop-17599.appspot.com",
  messagingSenderId: "1061270995033",
  appId: "1:1061270995033:web:c1515465f90e40d17a3148"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
