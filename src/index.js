import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter, Link, Route} from "react-router-dom";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
import jrouter from "./router/navigation";
// import jrouter from "./router/router"
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );





ReactDOM.render(jrouter, document.getElementById('root'));

reportWebVitals();
