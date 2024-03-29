import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomInput from "../../../components/CustomInput/CustomInput";
import * as storeActions from "../../../store/action-creator";
import { useNavigate } from "react-router-dom";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(159, 69, 69)"),
  backgroundColor: "rgb(159, 69, 69)",
  "&:hover": {
    backgroundColor: "rgb(159, 69, 69)",
  },
}));


//used for give some custom styles

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

  root: {
    "@media(max-width: 600px)": {
      "& .sectionHeading": {
        fontSize: "2rem !important",
        textAlign: "center",
      },

      "& .MuiGrid-root.MuiGrid-container": {
        justifyContent: "center",
      },
    },
  },
}));

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const KeySkill = (props) => {
  const [keySkill, setKeySkill] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [q, setq] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (!props.chipData) return;
    if (props.chipData.length < 3) {
      setq(true);
    } else {
      setq(false);
    }
  }, [props.chipData]);



  const SkillHandlerTab = () => {
    if (keySkill === "") {
      enqueueSnackbar("Enter atleast 3 valid key Skills",{variant:'error'});
    } else {
      props.addSkillHandler(keySkill);
      setKeySkill("");
    }
  };

  return (
    <div className={classes.root}>
      <Typography
        className="sectionHeading"
        variant="h3"
        style={{ color: "#9f4545", marginBottom: "40px" }}
      >
        Key Skill
      </Typography>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
          boxShadow: "none",
        }}
        component="ul"
      >
        {props.chipData.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip
                label={data.label}
                onDelete={() => props.handleSkillDelete(data)}
              />
            </ListItem>
          );
        })}
      </Paper>

      <Grid container rowSpacing={1} columnSpacing={{ lg: 3, md: 3 }}>
        <Grid item xs={12} md={12} lg={12} style={{ marginTop: "55px" }}>
          <CustomInput
            label="Add Skill"
            name={"skill"}
            type="text"
            placeholder="Add your atleast 3 valid skills e.g (html, css, react, angular)"
            value={keySkill}
            onchange={(e) => setKeySkill(e.target.value)}
          />
        </Grid>
        <Grid item md={12} lg={12} style={{ marginTop: "25px" }}>
          <Button
            variant="outlined"
            style={{ color: "#9f4545", borderColor: "#9f4545" }}
            onClick={
              SkillHandlerTab
            }
          >
            Add More Skills...
          </Button>
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end" style={{ alignItems: "end" }}>
        <Grid
          item
          md={10}
          lg={10}
          style={{ marginTop: "15px", textAlign: "end" }}
        >
          <Stack
            spacing={2}
            direction="row"
            style={{ justifyContent: "end", marginTop: "43px" }}
          >
            {props.disableBack ? null : (
              <Button
                variant="text"
                onClick={() => {
                  props.tabChangeHandler(2);
                }}
                style={{ color: "rgb(159, 69, 69)" }}
              >
                Back
              </Button>
            )}

            <ColorButton
              type={"submit"}
              variant="contained"
              disabled={q}
              onClick={() => navigate("/preview")}
            >
              Preview
            </ColorButton>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

const mapstatetoProps = (state) => {
  console.log(state);

  return {
    chipData: state.chipData,
  };
};

const mapdispatchtoProps = (dispatch) => {
  return {
    addSkillHandler: (e) => {
      dispatch(storeActions.addSkillHandler(e));
    },
    handleSkillDelete: (data) => {
      dispatch(storeActions.handleSkillDelete(data));
    },
    tabChangeHandler: (value) => {
      dispatch(storeActions.tabBackIndex(value));
    },
  };
};

export default connect(mapstatetoProps, mapdispatchtoProps)(KeySkill);
