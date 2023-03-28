import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useSnackbar } from 'notistack';
import React, { useState } from "react";
import { connect } from "react-redux";
import CustomInput from "../../../components/CustomInput/CustomInput";
import * as storeActions from "../../../store/action-creator";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(159, 69, 69)"),
  backgroundColor: "rgb(159, 69, 69)",
  "&:hover": {
    backgroundColor: "rgb(159, 69, 69)",
  },
}));

//

const Education= (props) =>{
  //   const classes = useStyles();

  const [education, setEducation] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const inputHandler = (e) => {
    setEducation({
      ...education,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const tabHandler= ()=>{
    if(props.qualification === '' ||
    props.university_name === '' ||
    props.degree === '' ||
    props.marks === '' ||
    props.start_year === '' ||
    props.end_year === ''
    ){
      enqueueSnackbar('All Fields are required')
    }
    else{
      props.tabChangeHandler(3) 
    }
   
  }

  return (
    <div>
      <Typography
        variant="h3"
        style={{ color: "#9f4545", marginBottom: "40px" }}
      >
        Education
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }}>
        <Grid item md={6} lg={6}>
          <CustomInput
            label="Higherst Qualification"
            name={"qualification"}
            type="text"
            placeholder="Graduation"
            value={props.qualification}
            onchange={props.inputChangeHandler}
          />
        </Grid>
        <Grid item md={6} lg={6}>
          <CustomInput
            label="University Name"
            name={"university_name"}
            type="text"
            placeholder="Howard University"
            value={props.university_name}
            onchange={props.inputChangeHandler}
          />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: "15px" }}>
          <CustomInput
            label="Degree"
            name={"degree"}
            type="text"
            placeholder="BCA"
            value={props.degree}
            onchange={props.inputChangeHandler}
          />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: "15px" }}>
          <CustomInput
            label="Marks (in %)"
            name={"marks"}
            type="number"
            min="10"
            max="100"
            placeholder="80%"
            value={props.marks}
            onchange={props.inputChangeHandler}
          />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: "15px" }}>
          <CustomInput
            label="Start Year"
            name={"start_year"}
            type="number"
            placeholder=""
            value={props.start_year}
            onchange={props.inputChangeHandler}
          />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: "15px" }}>
          <CustomInput
            label="End Year"
            name={"end_year"}
            type="number"
            placeholder=""
            value={props.end_year}
            onchange={props.inputChangeHandler}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="flex-end" style={{ alignItems: "end" }}>
        <Grid
          item
          md={10}
          lg={10}
          style={{ marginTop: "15px", textAlign: "end" }}
        >
           <Grid container  alignItems="flex-end" style={{alignItems:'end'}}>

<Grid item md={10} lg={10} style={{ marginTop: '15px' ,  textAlign:"end" }}>
    <Stack
spacing={2}
direction="row"
style={{ justifyContent: "end", marginTop: "43px" }}
>

{props.disableBack ? null : (
        <Button
          variant="text"
          onClick={()=>props.tabChangeHandler(1) }
          style={{ color: "rgb(159, 69, 69)" }}
        >
          Back
        </Button>
      )}
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
        </Grid>
      </Grid>
    </div>
  );
}

const mapstatetoProps=(state)=>{
return{
  qualification: state.qualification,
  university_name: state.university_name,
  degree: state.degree,
  marks: state.marks,
  start_year: state.start_year,
  end_year: state.end_year,
}
};

const mapdispatchtoProps = (dispatch) =>{
return{
  inputChangeHandler: (event) =>{
    dispatch(storeActions.inputChangeHandler(event))
  },
  tabChangeHandler: (value) => {
    dispatch(storeActions.tabBackIndex(value));
  }
}
}

export default  connect(mapstatetoProps, mapdispatchtoProps)(Education)
