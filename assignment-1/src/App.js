import React, { useState } from "react";

import "./App.css";

function App() {
  function upperCase() {
    console.log("Button was clicked");
    setText(text.toUpperCase());
  }
  function handleOnChange(e) {
    console.log("hi");
    setText(e.target.value);
  }
  const [text, setText] = useState("Enter text here");
  return (
    <div className="uppercase">
      <div className="container">
        <textarea className="input" onChange={handleOnChange}></textarea>
      </div>
      <div className="button">
        <button onClick={upperCase} className="btn">
          convert to uppercase
        </button>
      </div>
      <p>{text}</p>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
