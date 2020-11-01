import React, { Component } from "react";

import NavBar from './appBar/NavBar';
import Slider from "./slider/Slider";
import Home from './pages/Home';
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import AdDetails from "./pages/AdDetails/AdDetails";

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
        {/* <div style={{ marginTop: 80 }} className="col-md-12">
          <Login />
        </div> */}

        {/* Register Page */}
        {/* <div style={{ marginTop: 80 }} className="col-md-12">
          <Register />
        </div> */}

        {/* Ad Details Page */}
        <div style={{ marginTop: 80 }} className="col-md-12">
          <AdDetails />
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
