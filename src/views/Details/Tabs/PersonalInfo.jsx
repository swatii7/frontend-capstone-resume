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


const useStyles = makeStyles(() => ({

  dropdownWrapper: {
    "& select": {
      padding: "13px 7px",
      borderColor: "#ced4da",
      background: "#ffffff",
      color: "#919191",
      borderRadius: "4px",
      width:'80.3%',
    }
  },


}));


export default function PersonalInfo() {
  const classes = useStyles();
  const [personalinfo, setPersonalInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    checked: false,
    gender: '',
    marital_status: '',
    address: '',
    country: 'India',
    region: 'Himachal Pradesh',
    pin_code: '',
    description : ''

  })

 
  const genderRadios = [{
    label: 'Male',
    value: 'male'

  },
  {
    label: 'Female',
    value: 'female'
  }]



  const StatusRadios = [{
    label: 'Married',
    value: 'married'
  },
  {
    label: 'Unmarried',
    value: 'unmarried'
  }

  ]

  const inputHandler = (e) => {
    setPersonalInfo({ ...personalinfo, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  }

  const countryChangeHandler = (val) => {
    setPersonalInfo({ ...personalinfo, "country": val })
  }

  return (
    <div>
      <Typography variant="h3" style={{ color: '#9f4545', marginBottom: '40px' }}>
        About Yourself
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }}>
        <Grid item md={6} lg={6}>
          <CustomInput label="First Name" name={'first_name'} type='text' placeholder='Swati' value={personalinfo.first_name} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6}>
          <CustomInput label="Last Name" name={'last_name'} type='text' placeholder='Chaudhary' value={personalinfo.last_name} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <CustomInput label="Email" name={'email'} type='text' placeholder='abc@gmail.com' value={personalinfo.email} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <CustomInput label="Mobile Number" name={'mobile_number'} type='text' placeholder='+91 1230-456-789' value={personalinfo.mobile_number} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <RadioGroups options={genderRadios} selectedValue={personalinfo.gender} name={'gender'} onchange={inputHandler} label="Gender" />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <RadioGroups options={StatusRadios} selectedValue={personalinfo.marital_status} name={'marital_status'} onchange={inputHandler} label="Marital Status" />
        </Grid>
  
      </Grid>

      <Grid container  alignItems="flex-end">

        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>

          <div className={classes.dropdownWrapper} style={{ marginTop: '15px' }}>

            <CountryDropdown
              id="bootstrap-country"
              value={personalinfo.country}
              onChange={countryChangeHandler}
            />
          </div>

        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
        <div className={classes.dropdownWrapper} style={{ marginTop: '15px' }}>
            <RegionDropdown
              country={personalinfo.country}
              value={personalinfo.region}
              onChange={(val) => setPersonalInfo({ ...personalinfo, "region": val })} />
          </div>

        </Grid>
  
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <CustomInput label="Residence Address" name={'address'} type='text' placeholder='Gr Flr New Padmavati Ngr, Film City Road, Goregaon East' value={personalinfo.address} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <CustomInput name={'pin_code'} type='text' placeholder='Pin Code' value={personalinfo.pin_code} onchange={inputHandler}
          
           />
        </Grid>
        <Grid item md={12} lg={12} style={{ marginTop: '15px' }}>
        <CustomInput label="Objective" name={'description'} type='text' placeholder="Motivated, teamwork-oriented, and responsible Data Analyst with significant experience in increasing comprehension of
reports and presentations by the average professional. Highly educated, possessing a Bachelor's, a Master's, and professional
certification in business analytics and statistics. Bilingual in English and Tagalog, with an intermediate understanding of
Spanish." value={personalinfo.description} onchange={inputHandler}
           multiline={true} minRows={4}
           />

        </Grid>
 
      </Grid>

      <Grid container  alignItems="flex-end" style={{alignItems:'end'}}>

      <Grid item md={10} lg={10} style={{ marginTop: '15px' ,  textAlign:"end" }}>
          <TabNavigation  />
        </Grid>
      </Grid>



      {/* <CustomCheckbox checked={personalinfo.checked} onChange= {inputHandler} name= 'checked' id= 'firstCheck' label= 'I understand' /> */}



    </div>
  )
}
