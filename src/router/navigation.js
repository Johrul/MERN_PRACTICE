import {BrowserRouter, Link, Route} from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import React from "react";

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
export default jrouter