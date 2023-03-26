import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/bootstrap-theme.min.css'
import './bootstrap/css/fontAwesome.css'
import './bootstrap/css/light-box.css'
// import './bootstrap/css/owl-carousel.css'
import './bootstrap/css/templatemo-style.css'
// import './bootstrap/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
