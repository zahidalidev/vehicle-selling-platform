import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import _ from "lodash"
import jwtDecode from "jwt-decode";

import NavBar from './components/appBar/NavBar';
import Slider from "./components/slider/Slider";
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
import { getAllAds } from "./http/api";


class App extends Component {
  state = {
    currentUser: {},
    ads1: [],
    ads2: []
  }

  handleLogin = (history = 'App') => {
    //setting current user that is currentlu logged in
    const token = localStorage.getItem('token');
    if (token) {
      const currentUser = jwtDecode(token);

      if (_.isEmpty(this.state.currentUser)) this.setState({ currentUser })
      if (history != 'App') {
        history.push('/home')
        window.location.reload();
      }
    }
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ currentUser: {} })
    window.location.reload();
  }

  getAds = async () => {
    try {
      const { data: ads1 } = await getAllAds()

      const ads2 = ads1.splice(0, ads1.length / 2)
      this.setState({ ads1, ads2 })
    } catch (error) {
      toast.error('Ads getting Error')
      console.log(error)
    }
  }

  componentDidMount = async () => {
    this.handleLogin()
    await this.getAds()
  }


  render() {
    const { currentUser, ads1, ads2 } = this.state;
    return (
      <div className="App">

        {/* toast notification properties */}
        <ToastContainer autoClose={5000} position={toast.POSITION.TOP_RIGHT} />

        {/* AppBar and Drawer */}
        <div className="container">
          <div className="col-md-12" style={{ marginBottom: 70 }} >
            <NavBar onWindow={window} onHandleLogout={this.handleLogout} />
          </div>
        </div>

        {/* Main Slider */}
        <Route path="/home" exact render={(props) => <Slider {...props} />} />
        {/* <Route path="/" exact render={(props) => <Slider {...props} />} /> */}

        <div style={{ marginTop: 80 }} className="col-md-12">
          {/* Login Page */}
          <Route path="/login" exact render={(props) => <Login {...props} onHandleLogin={this.handleLogin} />} />

          {/* Register Page */}
          <Route path="/register" exact render={(props) => <Register {...props} />} />

          {/* Main Page */}
          <Route path="/home" exact render={(props) => <Home {...props} onAds1={ads1} onAds2={ads2} />} />

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

        <Redirect to="/home" />

        {/* Main Footer */}
        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
