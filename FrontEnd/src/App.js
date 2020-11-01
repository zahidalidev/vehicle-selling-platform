import React, { Component } from "react";

import NavBar from './appBar/NavBar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Login from "./pages/Login/Login";
import Slider from "./slider/Slider";

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* AppBar and Drawer */}
        <div className="container">
          <div className="col-md-12" style={{ marginBottom: 70 }} >
            <NavBar onWindow={window} />
          </div>
        </div>

        {/* Main Slider */}
        {/* <Slider /> */}

        {/* Main Page */}
        {/* <div style={{ marginTop: 80 }} className="col-md-12">
          <Home />
        </div> */}

        {/* Login Page */}

        <div style={{ marginTop: 80 }} className="col-md-12">
          <Login />
        </div>

        {/* Main Footer */}
        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
