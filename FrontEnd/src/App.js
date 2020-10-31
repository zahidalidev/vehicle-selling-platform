import React, { Component } from "react";

import NavBar from './appBar/NavBar';
import Home from './pages/Home';
import Slider from "./slider/Slider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-md-12" style={{ marginBottom: 80 }} >
            <NavBar onWindow={window} />
          </div>
        </div>

        <Slider />

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
