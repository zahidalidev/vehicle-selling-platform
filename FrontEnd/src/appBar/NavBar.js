import React, { useEffect, useState } from 'react';
import _ from "lodash";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List"

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
  const { onWindow } = props;
  const windowWidth = onWindow.innerWidth;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // like componentDidMount() in class
  useEffect(() => {

  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ width: "100%", marginTop: 20 }}>
      <Button className="draweMenu" >Home</Button>
      <Button className="draweMenu" >Home</Button>
      <Button className="draweMenu" >Home</Button>
      <Button className="draweMenu" >Home</Button>
      <Button className="draweMenu" >Home</Button>
    </div>
  );

  const container = onWindow !== undefined ? onWindow.document.body : undefined;
  console.log("c: ", container)
  return (
    <div className="root">
      {/* App Bar to render drawer conditionally */}
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
          {/* <Toolbar>
                <img src={logo} className={classes.logo} />
                </Toolbar> */}
          <div hidden={windowWidth < 767} >
            <List style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 0,
            }}>
              <Typography className="windowMenue" variant="h6" color="inherit">
                Home
              </Typography>
              <Typography className="windowMenue" variant="h6" color="inherit">
                Home
              </Typography>
              <Typography className="windowMenue" variant="h6" color="inherit">
                Home
              </Typography>
              <Typography className="windowMenue" variant="h6" color="inherit">
                Home
              </Typography>
              <Typography className="windowMenue" variant="h6" color="inherit">
                Home
              </Typography>
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