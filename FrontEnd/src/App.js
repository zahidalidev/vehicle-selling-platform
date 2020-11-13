import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom"

import NavBar from './appBar/NavBar';
import Slider from "./slider/Slider";
import Home from './pages/Home';
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import AdDetails from "./pages/AdDetails/AdDetails";
import CreateAd from "./pages/CreateAd/CreateAd";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import UserProfile from "./pages/UserProfile/UserProfile";
import Admin from "./pages/Admin/Admin";


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
        <Route path="/" exact render={(props) => <Slider {...props} />} />

        <div style={{ marginTop: 80 }} className="col-md-12">
          {/* Main Page */}
          <Route path="/" exact render={(props) => <Home {...props} />} />

          {/* Login Page */}
          <Route path="/login" exact render={(props) => <Login {...props} />} />

          {/* Register Page */}
          <Route path="/register" exact render={(props) => <Register {...props} />} />

          {/* Ad Details Page */}
          <Route path="/addetails/:vehicleId" exact render={(props) => <AdDetails {...props} />} />

          {/* Create Ad Page */}
          <Route path="/createad" exact render={(props) => <CreateAd {...props} />} />

          {/* Search Page */}
          <Route path="/search" exact render={(props) => <Search {...props} />} />

          {/* Search Result Page */}
          <Route path="/searchresult" exact render={(props) => <SearchResult {...props} />} />
        </div>

        {/* User Profile Page */}
        <Route path="/userprofile" exact render={(props) => <UserProfile {...props} />} />

        {/* Admin Page */}
        <Route path="/admin" exact render={(props) => <Admin {...props} />} />

        <Redirect to="/" />

        {/* Main Footer */}
        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
