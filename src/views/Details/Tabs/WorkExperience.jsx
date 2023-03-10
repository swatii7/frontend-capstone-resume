import AddTaskIcon from "@mui/icons-material/AddTask";
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
    props.inputChangeHandler(e);
  };

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
                onClick={props.addAnotherExpHandler}
              >
                Add Another Experience...
              </Button>
            </Grid>
          </Grid>
        )}

        <Grid container alignItems="flex-end" style={{ alignItems: "end" }}>
          <Grid
            item
            md={10}
            lg={10}
            style={{ marginTop: "15px", textAlign: "end" }}
          >
            <TabNavigation tabIndex={2} tabBackIndex={0} />
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

  };
};

export default connect(mapstatetoProps, mapdispatchtoProps)(PersonalInfo);
