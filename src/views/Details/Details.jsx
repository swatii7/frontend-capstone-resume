import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles'
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonalInfo from './Tabs/PersonalInfo';
import WorkExperiance from "./Tabs/WorkExperience";
import Education from './Tabs/Education';
import KeySkill from './Tabs/KeySkill';
import { connect } from "react-redux";




const useStyles = makeStyles(()=>({

tabsBtnWrapper:{
  "& .Mui-selected": { color: "#9f4545 !important" }
},

}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs= (props)=> {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
    
    <Grid container
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224}}
    >
     <Grid item xs={12} md={4} lg={3}>
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={props.activeTab}
        //onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'}}
        className={classes.tabsBtnWrapper}
      >
        <Tab label="Personal Info" {...a11yProps(0)} />
        <Tab label="Work Experience" {...a11yProps(1)} />
        <Tab label="Education " {...a11yProps(2)} />
        <Tab label="Key Skills" {...a11yProps(3)} />
        
      </Tabs>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
      <TabPanel value={props.activeTab} index={0}>
       <PersonalInfo />
      </TabPanel>
      <TabPanel value={props.activeTab} index={1}>
    <WorkExperiance />
      </TabPanel>
      <TabPanel value={props.activeTab} index={2}>
       <Education />
      </TabPanel>
      <TabPanel value={props.activeTab} index={3}>
        <KeySkill />
      </TabPanel>
      </Grid>
     
    </Grid>
  );
}

const mapstatetoProps= (state) =>{
  return {
    activeTab: state.activeTab
  }

}



export default connect(mapstatetoProps, null)(VerticalTabs);



