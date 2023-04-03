import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageOne from "../../assets/TemplateImg/template1.png";
import ImageTwo from "../../assets/TemplateImg/template2.png";
import ImageThree from "../../assets/TemplateImg/template3.png";
import ImageFour from "../../assets/TemplateImg/template4.png";
import * as storeActions from "../../store/action-creator/index.js";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(159, 69, 69)"),
  backgroundColor: "rgb(159, 69, 69)",
  "&:hover": {
    backgroundColor: "rgb(159, 69, 69)",
  },
}));

const styles = makeStyles(() => ({
  root: {
    "& .container": {
      position: "relative",
      display: "inline-block",
      width: "200px",
      height: "200px",
      backgroundColor: "lightblue",
      textAlign: "center",
      lineHeight: "200px",
      fontSize: "24px",
      color: "white",
      cursor: "pointer",
    },
    "& .overlay": {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "none",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .button": {
      backgroundColor: "#9f4545",
      color: "White",
      padding: "12px 24px",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
      borderRadius: "4px",
      transition: "all 0.3s ease-in-out",
    },
    "& .button:hover": { backgroundColor: "black", color: "white" },
    "& .container:hover .overlay": { display: "flex" },
  },
}));

const Home = (props) => {
  const navigate = useNavigate();

  const templatePreview = [
    {
      preview: ImageOne,
      index: 0,
    },

    {
      preview: ImageTwo,
      index: 1,
    },

    {
      preview: ImageThree,
      index: 2,
    },

    {
      preview: ImageFour,
      index: 3,
    },
  ];

  const classes = styles();
  return (
    <div>
      <div className="main-content" style={{ color: "#000" }}>
        <h2>Templates</h2>
        <p style={{}}>Select a template to get started</p>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {templatePreview.map((item, index) => (
              <Grid
                item
                lg={3}
                md={3}
                style={{

                  width: "400px",
    height: "600px",
    border: "20px solid rgb(255, 255, 255)",
    textAlign: "center",
    lineHeight: "240px",
    boxSizing: "border-box",
    background: "#fff",
    backgroundImage: `url(${item.preview})`,
    backgroundSize: "contain",
    backgroundPosition: "top",
    overflow: "hidden",
    backgroundRepeat: "no-repeat"

                }}
                className="container"
                key={index}
              >
                <div style={{ width: "200px", height: "auto" }}></div>

                <div
                  className="overlay"
                  style={{
                    display: props.activeSlide === index && "flex",
                  }}
                >
                  <button
                    className="button"
                    onClick={() => props.selectedTemHandler(index)}
                  >
                    Use Template
                  </button>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Grid container alignItems="flex-end" style={{ alignItems: "end" }}>
        <Grid
          item
          md={11}
          lg={11}
          style={{ marginTop: "15px", textAlign: "end" }}
        >
          <Stack
            spacing={2}
            direction="row"
            style={{ justifyContent: "end", marginTop: "43px" }}
          >
            <ColorButton
              type={"submit"}
              variant="contained"
              onClick={() => navigate("/details")}
            >
              Proceed to Fill Details{" "}
              <ArrowForwardIcon style={{ paddingLeft: "5px" }} />
            </ColorButton>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

const mapstatetoProps = (state) => {
  return {
    activeSlide: state.activeSlide,
  };
};

const mapdispatchtoProps = (dispatch) => {
  return {
    selectedTemHandler: (index) => {
      dispatch(storeActions.selectedTemHandler(index));
    },
  };
};

export default connect(mapstatetoProps, mapdispatchtoProps)(Home);
