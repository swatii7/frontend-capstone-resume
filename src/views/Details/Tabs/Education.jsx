import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import CustomInput from "../../../components/CustomInput/CustomInput";
import { connect} from "react-redux";
import TabNavigation from "../../../components/TabNavigation";
import * as storeActions from "../../../store/action-creator";


const Education= (props) =>{
  //   const classes = useStyles();

  const [education, setEducation] = useState({});

  const inputHandler = (e) => {
    setEducation({
      ...education,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

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
            type="date"
            placeholder=""
            value={props.start_year}
            onchange={props.inputChangeHandler}
          />
        </Grid>
        <Grid item md={6} lg={6} style={{ marginTop: "15px" }}>
          <CustomInput
            label="End Year"
            name={"end_year"}
            type="date"
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
          <TabNavigation tabIndex={3} tabBackIndex={1} />
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
  }
}
}

export default  connect(mapstatetoProps, mapdispatchtoProps)(Education)
