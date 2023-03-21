import AddTaskIcon from "@mui/icons-material/AddTask";
import { useEffect } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { connect } from "react-redux";
import {
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";
import CustomInput from "../../../components/CustomInput/CustomInput";
import RadioGroups from "../../../components/RadioGroups/RadioGroups";
import TabNavigation from "../../../components/TabNavigation";
import * as storeActions from "../../../store/action-creator";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {  useSnackbar } from 'notistack';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(159, 69, 69)"),
  backgroundColor: "rgb(159, 69, 69)",
  "&:hover": {
    backgroundColor: "rgb(159, 69, 69)",
  },
}));


const useStyles = makeStyles(() => ({
  dropdownWrapper: {
    "& select": {
      padding: "13px 7px",
      borderColor: "#ced4da",
      background: "#ffffff",
      color: "#919191",
      borderRadius: "4px",
      width: "80.3%",
    },
  },
}));

const PersonalInfo = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  //

  /*use radio button */
  const expRadios = [
    {
      label: "Fresher",
      value: "f",
    },
    {
      label: "Experienced",
      value: "e",
    },
  ];


  const radioChangeHandler = (e) => {
    if(e.target.value === 'f'){
      props.tabChangeHandler(2) 
    }
    props.inputChangeHandler(e);
  };

  const experienceAddHandler= ()=> {
    const getcurrentposition  = props.user_experience.length; //0
if(getcurrentposition !== -1){
if(props.user_experience[getcurrentposition-1].job_title === ''){
  enqueueSnackbar('All Fields are required')
}
else if(props.user_experience[getcurrentposition-1].org_name === ''){
  enqueueSnackbar('All Fields are required')
}
else if(props.user_experience[getcurrentposition-1].start_year === ''){
  enqueueSnackbar('All Fields are required')
}
else if(props.user_experience[getcurrentposition-1].end_year === ''){
  enqueueSnackbar('All Fields are required')
}
else {
  props.addAnotherExpHandler(getcurrentposition)
}
  }
}

  const tabHandler= ()=>{
    if(props.user_experience.length === 0
   ){
      enqueueSnackbar('All Fields are required')
    }
    else if(props.user_experience[0].job_title === ''||
     props.user_experience[0].org_name=== '' ||
      props.user_experience[0].start_year === '' || 
      props.user_experience[0].end_year === ''){
      enqueueSnackbar('All Fields are required')
    }
     else{
      props.tabChangeHandler (2)
     }
   
  }

  

  return (
    <div>
      <Typography
        variant="h3"
        style={{ color: "#9f4545", marginBottom: "40px" }}
      >
        Work Experience
      </Typography>
      
      <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }}>
        <Grid item md={6} lg={6} style={{ marginTop: "15px" }}>
          <RadioGroups
            options={expRadios}
            selectedValue={props.exp}
            name={"exp"}
            onchange={radioChangeHandler}
            label="Are u experienced or fresher"
          />
        </Grid>

 
        {props.exp === "e" && (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ lg: 3, md: 3 }}
            style={{ alignItems: "center" }}
          >


          {/* used map for add another work experience  */}
            {props.user_experience.map((exp, i) => (
              <>
                <Grid key={i} item md={6} lg={6} style={{ marginTop: "25px" }}>
                  <CustomInput
                    label="Job Title"
                    name={"job_title"}
                    type="text"
                    placeholder="Designation"
                    value={exp.job_title}
                    onchange={(e) => props.workChangeHandler(e, i)}
                  />
                </Grid>
                <Grid item md={6} lg={6} style={{ marginTop: "25px" }}>
                  <CustomInput
                    label="Organization Name"
                    name={"org_name"}
                    type="text"
                    placeholder="Organization"
                    value={exp.org_name}
                    onchange={(e) => props.workChangeHandler(e, i)}
                  />
                </Grid>
                <Grid item md={6} lg={6} style={{ marginTop: "25px" }}>
                  <CustomInput
                    label="Start Year"
                    name={"start_year"}
                    type="date"
                    placeholder="Year"
                    value={exp.start_year}
                    onchange={(e) => props.workChangeHandler(e, i)}
                  />
                </Grid>
                <Grid item md={6} lg={6} style={{ marginTop: "25px" }}>
                  <CustomInput
                    label="End Year"
                    name={"end_year"}
                    type="date"
                    placeholder="Year"
                    value={exp.end_year}
                    onchange={(e) => props.workChangeHandler(e, i)}
                  />
                </Grid>
                {/* use map for keypoints */}

                {exp.key_points.map((points, keyPointIndex) => (
                  <>
                    <Grid item md={9} lg={9} style={{ marginTop: "25px" }}>
                      <div dangerouslySetInnerHTML={{ __html: points }}></div>
                    </Grid>
                    <Grid item md={2} lg={2} style={{ marginTop: "25px" }}>
                      <RemoveCircleOutlineIcon
                        onClick={(e) =>
                          props.removeKeyHandler(i, keyPointIndex)
                        }
                      />
                    </Grid>
                  </>
                ))}

                <Grid item md={9} lg={9} style={{ marginTop: "25px" }}>
                  <EditorProvider>
                    <Editor
                      name="key_note"
                      value={exp.key_note}
                      onChange={(e) => props.workChangeHandler(e, i)}
                    >
                      <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                      </Toolbar>
                    </Editor>
                  </EditorProvider>
                </Grid>

                <Grid item md={2} lg={2} style={{ marginTop: "25px" }}>
                  <IconButton
                    onClick={(e) => props.addKeyHandler(i)}
                    aria-label="delete"
                  >
                    <AddTaskIcon style={{ fill: "#9f4545" }} />
                  </IconButton>
                </Grid>
              </>
            ))}
            <Grid item md={12} lg={12} style={{ marginTop: "25px" }}>
              <Button
                variant="outlined"
                style={{ color: "#9f4545", borderColor: "#9f4545" }}
                onClick={experienceAddHandler}
              >
                Add Work Experience...
              </Button>
            </Grid>
          </Grid>
        )}

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
          onClick={()=>props.tabChangeHandler (0)}
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
    </div>
  );
};

const mapstatetoProps = (state) => {
  return {

    exp: state.exp,
    user_experience: state.user_experience,
  };
};

const mapdispatchtoProps = (dispatch) => {
  return {
    workChangeHandler: (e, i) => {
      dispatch(storeActions.workExpChangeHandler(e, i));
    },
    inputChangeHandler: (event) => {
      dispatch(storeActions.inputChangeHandler(event));
    },

    addKeyHandler: (index) => {
      dispatch(storeActions.addKeyHandler(index));
    },

    addAnotherExpHandler: (value) => {
      dispatch(storeActions.addAnotherExpHandler(value));
    },

    removeKeyHandler: (i, keyPointIndex) => {
      dispatch(storeActions.removeKeyHandler(i, keyPointIndex));
    },
    tabChangeHandler: (value) => {
      dispatch(storeActions.tabChangeHandler(value));
    },

  };
};

export default connect(mapstatetoProps, mapdispatchtoProps)(PersonalInfo);
