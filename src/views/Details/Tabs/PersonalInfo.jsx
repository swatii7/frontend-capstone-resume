import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { connect } from "react-redux";
import CustomInput from '../../../components/CustomInput/CustomInput';
import RadioGroups from '../../../components/RadioGroups/RadioGroups';
import TabNavigation from '../../../components/TabNavigation';
import * as storeActions from "../../../store/action-creator";



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


const PersonalInfo = (props) => {
  const classes = useStyles();


 
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
    // setPersonalInfo({ ...personalinfo, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
    props.inputChangeHandler(e)


  }

  const countryChangeHandler = (val) => {
    props.countryChangeHandler(val)
  }


  const regionChangeHandler = (val) => {
    props.regionChangeHandler(val)
  }
  


  return (
    <div>
      <Typography variant="h3" style={{ color: '#9f4545', marginBottom: '40px' }}>
        About Yourself
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }}>
        <Grid item md={6} lg={6}>
          <CustomInput label="First Name" name={'first_name'} type='text' placeholder='Swati' value={props.first_name} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6}>
          <CustomInput label="Last Name" name={'last_name'} type='text' placeholder='Chaudhary' value={props.last_name} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <CustomInput label="Email" name={'email'} type='text' placeholder='abc@gmail.com' value={props.email} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <CustomInput label="Mobile Number" name={'mobile_number'} type='text' placeholder='+91 1230-456-789' value={props.mobile_number} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <RadioGroups options={genderRadios} selectedValue={props.gender} name={'gender'} onchange={inputHandler} label="Gender" />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <RadioGroups options={StatusRadios} selectedValue={props.marital_status} name={'marital_status'} onchange={inputHandler} label="Marital Status" />
        </Grid>
  
      </Grid>

      <Grid container  alignItems="flex-end">

        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>

          <div className={classes.dropdownWrapper} style={{ marginTop: '15px' }}>

            <CountryDropdown
              id="bootstrap-country"
              value={props.country}
              onChange={countryChangeHandler}
            />
          </div>

        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
        <div className={classes.dropdownWrapper} style={{ marginTop: '15px' }}>
            <RegionDropdown
              country={props.country}
              value={props.region}
              onChange={regionChangeHandler} />
          </div>

        </Grid>
  
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <CustomInput label="Residence Address" name={'address'} type='text' placeholder='Gr Flr New Padmavati Ngr, Film City Road, Goregaon East' value={props.address} onchange={inputHandler} />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: '15px' }}>
          <CustomInput name={'pin_code'} type='text' placeholder='Pin Code' value={props.pin_code} onchange={inputHandler}
          
           />
        </Grid>
        <Grid item md={12} lg={12} style={{ marginTop: '15px' }}>
        <CustomInput label="Objective" name={'description'} type='text' placeholder="Motivated, teamwork-oriented, and responsible Data Analyst with significant experience in increasing comprehension of
reports and presentations by the average professional. Highly educated, possessing a Bachelor's, a Master's, and professional
certification in business analytics and statistics. Bilingual in English and Tagalog, with an intermediate understanding of
Spanish." value={props.description} onchange={inputHandler}
           multiline={true} minRows={4}
           />

        </Grid>
 
      </Grid>

      <Grid container  alignItems="flex-end" style={{alignItems:'end'}}>

      <Grid item md={10} lg={10} style={{ marginTop: '15px' ,  textAlign:"end" }}>
          <TabNavigation disableBack tabIndex= {1} />
        </Grid>
      </Grid>



      {/* <CustomCheckbox checked={personalinfo.checked} onChange= {inputHandler} name= 'checked' id= 'firstCheck' label= 'I understand' /> */}



    </div>
  )
}

const mapstatetoProps= (state)=> {
  return {
    first_name: state.first_name,
    last_name: state.last_name,
    email: state.email,
    mobile_number: state.mobile_number,
    checked: state.checked,
    gender: state.gender,
    marital_status: state.marital_status,
    address: state.address,
    country: state.country,
    region: state.region,
    pin_code: state.pin_code,
    description : state.description
  }
  
}

const mapdispatchtoProps= (dispatch)=> {
return {
  inputChangeHandler: (event)=> {
    dispatch(storeActions.inputChangeHandler(event))
  }, 

  regionChangeHandler:(val)=> {
    dispatch(storeActions.regionChangeHandler(val))
  },

  countryChangeHandler:(val)=> {
    dispatch(storeActions.countryChangeHandler(val))
  }

}
}

export default  connect(mapstatetoProps, mapdispatchtoProps)(PersonalInfo)
