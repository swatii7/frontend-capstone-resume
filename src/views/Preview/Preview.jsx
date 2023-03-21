import React, { useState } from 'react'
import { connect } from "react-redux";
import * as storeActions from "../../store/action-creator/index.js"
import Carousel from "react-simply-carousel";
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import TemplateOne from '../../components/Templates/TemplateOne.jsx';
import TemplateTwo from '../../components/Templates/TemplateTwo.jsx';
import TemplateThree from '../../components/Templates/TemplateThree.jsx';
import TemplateFour from '../../components/Templates/TemplateFour.jsx';
import jsPDF from 'jspdf';
import { styled } from "@mui/material/styles";
import CustomInput from '../../components/CustomInput/CustomInput.jsx';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
      cursor: "pointer"
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
      alignItems: "center"
    },
    "& .button": {
      backgroundColor: "#9f4545",
      color: "White",
      padding: "12px 24px",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
      borderRadius: "4px",
      transition: "all 0.3s ease-in-out"
    },
    "& .button:hover": { backgroundColor: "black", color: "white" },
    "& .container:hover .overlay": { display: "flex" }
  }

}))


const Preview = (props) => {
  const classes = styles();
  const navigate = useNavigate();

  // to make function to show preview of selected template
  const selectedTemplate = (selectedValue) => {
    switch (selectedValue) {
      case 0:
        return <TemplateOne />

      case 1:
        return <TemplateTwo />

      case 2:
        return <TemplateThree />

      case 3:
        return <TemplateFour />
    }

  }

  //jsPDF Generator function
  const jspdfGenerator =() =>{
    // new document in jsPDF
    var doc = new jsPDF ('p', 'pt', 'a4');
doc.html(document.querySelector('#temTwo')).then(()=>{
  doc.save('generated.pdf')
})
   
  }

  return (
    <>

      <Typography
        variant="h3"
        style={{ color: "#9f4545", marginBottom: "40px" }}
      >
        Resume Preview
      </Typography>

      <Grid container className={classes.root}>


        <Grid item md={8} lg={8}>

          <div className='left-section' style={{width: '100%'}}>
            {selectedTemplate(props.activeSlide)}
          </div>
        </Grid>
        <Grid item md={4} lg={4}>

          <Grid container style= {{marginTop: '100px'}}>
            <Grid item lg={6} md={6}>
              <CustomInput
                label="Create File Name"
                // name={text}
                type="text"
                placeholder="Swati Chaudhary"
              // value={file_name}
              />
            </Grid>
            <Grid item lg={6} md={6}>
                  <div
                    style={{ justifyContent: "flexStart", marginTop: "32px" }}
                  >
                <Button
                  variant="text"
                  onClick={() => navigate("/Details")}
                  style={{ color: "rgb(159, 69, 69)" }}
                >
                  Back
                </Button>

                <ColorButton
                  type={"submit"}
                  variant="contained"
                onClick={()=>jspdfGenerator()}
                >
                  Save
                </ColorButton>

              </div>
            </Grid>
          </Grid>
          </Grid>

        </Grid>
      </>
      )
}

const mapstatetoProps=(state)=>{
    // console.log(state.activeSlide)
    return{
        activeSlide: state.activeSlide
    }
    };
    
    const mapdispatchtoProps = (dispatch) =>{
    return{
        selectedTemHandler: (index) =>{
        dispatch(storeActions.selectedTemHandler(index))
      },
    tabChangeHandler: (value) => {
        dispatch(storeActions.tabBackIndex(value));
    }
  
    }
}

      export default connect(mapstatetoProps, mapdispatchtoProps)(Preview)

