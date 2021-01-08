import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List"
import { useHistory } from "react-router"
import _ from "lodash"

import "./NavBar.css"
import colors from '../config/colors';

const drawerWidth = 130;
const appBarHeight = 70;


const useStyles = makeStyles((theme) => ({
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    marginTop: appBarHeight,
    width: drawerWidth,
    backgroundColor: colors.white,
    color: colors.white,
    alignItems: "center",
  },

  logo: {
    marginTop: window.innerWidth < 768 ? -90 : 5,
    marginLeft: 20,
    width: window.innerWidth < 768 ? 200 : 370,
    height: window.innerWidth < 768 ? appBarHeight - 30 : appBarHeight - 10,
  },

}));


function NavBar(props) {
  const { onWindow, onCurrentUser } = props;
  const windowWidth = onWindow.innerWidth;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const history = useHistory()
  const [menues, setMenues] = useState([])


  // like componentDidMount() in class
  useEffect(() => {
    if (!_.isEmpty(onCurrentUser.isAdmin)) {
      setMenues([
        { title: "Home", path: "/home" },
        { title: "Post Ad", path: "/createad" },
        { title: "Profile", path: "/userprofile" },
        { title: "Search", path: "/search" },
        { title: "Admin", path: "/admin" },
        { title: "Log out", path: "/home" },
      ])
    } else if (!onCurrentUser.isAdmin) {
      setMenues([
        { title: "Home", path: "/home" },
        { title: "Post Ad", path: "/createad" },
        { title: "Profile", path: "/userprofile" },
        { title: "Search", path: "/search" },
        { title: "Log out", path: "/home" },
      ])
    } else {
      setMenues([
        { title: "Home", path: "/home" },
        { title: "Post Ad", path: "/createad" },
        { title: "Profile", path: "/userprofile" },
        { title: "Search", path: "/search" },
        { title: "Login", path: "/login" },
        { title: "Register", path: "/register" }
      ])
    }
  }, [])

  const handleNavigation = (path) => {
    history.push(path)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ width: "100%", marginTop: 20 }}>
      {menues.map((men, i) => (
        <Button onClick={() => handleNavigation(men.path)} key={i} className="draweMenu" >{men.title}</Button>
      ))}
    </div>
  );

  const container = onWindow !== undefined ? onWindow.document.body : undefined;

  return (
    <div className="root">
      {/* App Bar to render drawer conditionally */}
      {/* <hr style={{ height: "1px", backgroundColor: "red" }} /> */}

      <AppBar position="fixed" className="appBar" elevation={0}>

        <Toolbar className="toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Toolbar>
            {/* <img src={logo} className={classes.logo} /> */}
          </Toolbar>

          <div hidden={windowWidth < 767} >
            <List style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 0,
            }}>
              {menues.map((men, i) => (
                <Typography onClick={() => handleNavigation(men.path)} key={i} className="windowMenue" variant="h6" color="inherit">
                  {men.title}
                </Typography>
              ))}
            </List>
          </div>
        </Toolbar>
      </AppBar>

      {/* for mobile */}
      <nav className={classes.drawer} >
        <Drawer
          container={container}
          variant="temporary"
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}

export default NavBar;