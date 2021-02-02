import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./Navbar";
// import About from "./About";
// import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          もっと React を学びたいなら
        </a>
      </header>
      <Router>
        <div>
          <Navbar />
          <hr />
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/Home" />
          {/* <Route path="/About" component={About} /> */}
          <Route path="/About" />
        </div>
      </Router>
    </div>
  );
}

export default App;
