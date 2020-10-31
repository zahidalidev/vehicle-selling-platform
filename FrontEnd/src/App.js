import React, { Component } from "react";

import NavBar from './appBar/NavBar';
import Home from './pages/Home';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-md-12">
            <NavBar onWindow={window} />
          </div>
        </div>
        <div className="col-md-12 slider">

        </div>
        <div className="container">
          <div style={{ marginTop: 100 }} className="col-md-12">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
