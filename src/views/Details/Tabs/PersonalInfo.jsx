import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { connect } from "react-redux";
import CustomInput from '../../../components/CustomInput/CustomInput';
import RadioGroups from '../../../components/RadioGroups/RadioGroups';
import * as storeActions from "../../../store/action-creator";
import { styled } from "@mui/material/styles";
import {  useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(159, 69, 69)"),
  backgroundColor: "rgb(159, 69, 69)",
  "&:hover": {
    backgroundColor: "rgb(159, 69, 69)",
  },
}));
//

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


  root:{

    '@media(max-width: 600px)' : {
      "& .sectionHeading": {
        fontSize: '2rem !important',
        textAlign: 'center',
      },

      "& .MuiGrid-root.MuiGrid-container":{
          justifyContent:'center'
      }
    }
  }


}));


const PersonalInfo = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();


 
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
    props.inputChangeHandler(e)


  }

  const countryChangeHandler = (val) => {
    props.countryChangeHandler(val)
  }


  const regionChangeHandler = (val) => {
    props.regionChangeHandler(val)
  }

  /* make function with condition to show alert message */
  const tabHandler= ()=>{
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    let phoneno = /^\d{10}$/;
    if(props.first_name ==='' || 
    props.last_name === '' ||
    props.email=== '' || 
    props.mobile_number === '' ||
    props.gender === '' ||
    props.marital_status === '' ||
     props.country === '' ||
      props.region === '' ||
      props.address === ''||
      props.description === ''
    ){
      enqueueSnackbar('All Fields are required')
    }
    else if(props.email !== '' && !emailRegex.test(props.email)){
      enqueueSnackbar('Enter Valid Email')
    } 
    else if( props.mobile_number !== '' && !phoneno.test(props.mobile_number)){
      enqueueSnackbar('Enter valid Mobile Number')
    }
    else{
      props.tabChangeHandler(1) 
    }
   
  }
  


  return (
    <div className={classes.root}>
      <Typography className="sectionHeading" variant="h3" style={{ color: '#9f4545', marginBottom: '40px' }}>
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
          <CustomInput label="Mobile Number" name={'mobile_number'} type='number' placeholder='+91 1230-456-789' value={props.mobile_number} onchange={inputHandler} />
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
          <CustomInput name={'pin_code'} type='number' placeholder='Pin Code' value={props.pin_code} onchange={inputHandler}
          
           />
        </Grid>
        <Grid item xs= {12} md={12} lg={12} style={{ marginTop: '15px' }}>
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
          <Stack
      spacing={2}
      direction="row"
      style={{ justifyContent: "end", marginTop: "43px" }}
    >
     <Button
          variant="outlined"
          onClick={() => navigate("/")}
          style={{ color: "rgb(159, 69, 69)", border: '1px solid rgb(159, 69, 69)' }}
        >
          Back to Template
        </Button>

      {props.showPreview ? (
        <ColorButton
          type={"submit"}
          variant="contained"
          onClick={() => {
            props.tabChangeHandler(props.tabIndex);
          }}
        >
          Preview
        </ColorButton>
      ) : (
        <ColorButton
          type={"submit"}
          variant="contained"
          onClick={()=>tabHandler()}
        >
          Next
        </ColorButton>
      )}
    </Stack>
          
        </Grid>
      </Grid>

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
  },
   tabChangeHandler: (value) => {
    dispatch(storeActions.tabChangeHandler(value));
  },
  tabBackHandler: (value) => {

    dispatch(storeActions.tabBackIndex(value));
  },
};

}


export default  connect(mapstatetoProps, mapdispatchtoProps)(PersonalInfo)
