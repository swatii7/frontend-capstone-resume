
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import * as React from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "../assets/logo/logo.png";
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { NavLink } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from '@mui/material/useMediaQuery';


import MenuIcon from '@mui/icons-material/Menu';

const styles = makeStyles(()=> ({
  navLinkWrap: {
    "& a.active": { color: "#9f4545 !important" } 
  }
}))


const navItems = [  {
    path: "/",

    name:'Resume Templates'
  },
  {
    path: "/Details",

    name:'My Resumes',
  },
  // {
  //   path: "/Preview",

  //   name:'Preview',
  // },
  {
    path: "/About",

    name:'About',}
  ];


  
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer,  (prop) => prop !== 'open' )(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
export default function DrawerAppBar(props) {

  const { window } = props;
  const classes = styles();

  const mobileOpen = useMediaQuery("(max-width:600px)")

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  return (
    <>
     
      <AppBar component="nav">
        <Toolbar >
        
        <div style={{width: "105px"}}>
    <img src= {logo} 
    style= {{width: "100%"}} />
    </div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block', md: 'flex' } }}
          >
            
          </Typography>
          <Box className= {classes.navLinkWrap} sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } }}>

          {!mobileOpen?  navItems.map((item,index) => (
                <Button key={index} >
                <NavLink to={item.path}  className={(navData) => (navData.isActive ? 'active' : 'link')} style={{textTransform: "capitalize", letterSpacing: "0.1rem", fontSize: "16px", color:'#393E46' }}>
                {item.name}
              </NavLink>
                </Button>
            )) : null}

           {mobileOpen ?  <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>: null}
           
          <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
       //s variant="persistent"
        anchor="left"
        open={open}
        onClose={()=>handleDrawerClose()}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
      
      {navItems.map((item,index) => (
                <Button key={index} >
                <NavLink to={item.path}  className={(navData) => (navData.isActive ? 'active' : 'link')} style={{   textTransform: "capitalize", letterSpacing: "0.1rem", fontSize: "16px", color:'#393E46' }}>
                {item.name}
              </NavLink>
                </Button>
            ))}
       
      </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
     
 
    </>
  );
}