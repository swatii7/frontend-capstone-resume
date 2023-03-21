import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../assets/logo/logo.png"

import { NavLink } from "react-router-dom";

import { Route } from "react-router";
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@mui/styles'

const styles = makeStyles(()=> ({
  navLinkWrap: {
    "& a.active": { color: "#9f4545 !important" } 
  }
}))

const drawerWidth = 240;
const navItems = [  {
    path: "/",

    name:'Resume Templates'
  },
  {
    path: "/Details",

    name:'My Resumes',
  },
  {
    path: "/Preview",

    name:'Preview',
  },
  {
    path: "/About",

    name:'About',}
  ];

export default function DrawerAppBar(props) {
  const { window } = props;
  const classes = styles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
           
            <p>{item.name}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
     
      <AppBar component="nav">
        <Toolbar>
        <div style={{width: "105px"}}>
    <img src= {logo} 
    style= {{width: "100%"}} />
    </div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
          </Typography>
          <Box className= {classes.navLinkWrap} sx={{ display: { xs: 'none', sm: 'block' } }}>

            {navItems.map((item,index) => (
                <Button key={index} >
                <NavLink to={item.path}  className={(navData) => (navData.isActive ? 'active' : 'link')} style={{   textTransform: "capitalize", letterSpacing: "0.1rem", fontSize: "16px", color:'#393E46' }}>
                {item.name}
              </NavLink>
                </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
     
 
    </>
  );
}