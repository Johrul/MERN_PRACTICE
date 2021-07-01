import logo from './logo.svg';
import './App.css';
import React from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import JUi from "./components/JUi";
import BootS from "./components/BootS";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React with Johrul*/}
      {/*  </a>*/}
      {/*  <h1></h1>*/}
      {/*  <input type="text"/>*/}
      {/*  <button type="reset">Press to RESET</button>*/}
      {/*</header>*/}

      <Hello name={"Earul"}/>
        <Welcome name="Johrul Babu How are You?"/>
        <JUi/>

        <BootS />
    </div>
  );
}

export default App;
