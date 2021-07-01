import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import jrouter from "./router/router"
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const jrouter = (
        <BrowserRouter>
            <div>
                <ul>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                    <Link to={"/portfolio"}>Portfolio</Link>
                </ul>

                <Route exact path={"/"} component={App}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/contact"} component={Contact}/>
                <Route path={"/portfolio"} component={Portfolio}/>

            </div>
        </BrowserRouter>
)



ReactDOM.render(jrouter, document.getElementById('root'));

reportWebVitals();
