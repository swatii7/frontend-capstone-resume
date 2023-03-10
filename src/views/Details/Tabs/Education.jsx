import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import CustomCheckbox from '../../../components/CustomCheckbox/CustomCheckbox';
import CustomInput from '../../../components/CustomInput/CustomInput'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RadioGroups from '../../../components/RadioGroups/RadioGroups';
import { textAlign } from '@mui/system';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TabNavigation from '../../../components/TabNavigation';


// const useStyles = makeStyles(() => ({

//   dropdownWrapper: {
//     "& select": {
//       padding: "13px 7px",
//       borderColor: "#ced4da",
//       background: "#ffffff",
//       color: "#919191",
//       borderRadius: "4px",
//       width:'80.3%',
//     }
//   },


// }));


export default function Education() {
//   const classes = useStyles();

  const [education, setEducation] = useState({
    
  })



  const inputHandler = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  }

  return (
    <div>
      <Typography variant="h3" style={{ color: '#9f4545', marginBottom: '40px' }}>
       Education
      </Typography>
     
      <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }}>
      <Grid item md={6} lg={6}>
          <CustomInput label="Higherst Qualification" name={'qualification'} type='text' placeholder='Graduation' value={education.qualification} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6}>
        <CustomInput label="University Name" name={'university_name'} type='text' placeholder='Howard University' value={education.university_name} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
        <CustomInput label="Degree" name={'degree'} type='text' placeholder='BCA' value={education.degree} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
        <CustomInput label="Marks (in %)" name={'marks'} type="number" min="10" max="100" placeholder='80%' value={education.marks} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
        <CustomInput label="Start Year" name={'start_year'} type='date' placeholder='' value={education.start_year} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
        <CustomInput label="End Year" name={'end_year'} type='date' placeholder='' value={education.end_year} onchange={inputHandler} />
        </Grid>
      </Grid>

      <Grid container  alignItems="flex-end" style={{alignItems:'end'}}>

<Grid item md={10} lg={10} style={{ marginTop: '15px' ,  textAlign:"end" }}>
    <TabNavigation tabIndex= {3} tabBackIndex= {1} />
  </Grid>
</Grid>

    </div>
  )
}
