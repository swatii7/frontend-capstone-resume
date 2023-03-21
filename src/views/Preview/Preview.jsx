import React, {useState} from 'react'
import { connect } from "react-redux";
import * as storeActions from "../../store/action-creator/index.js"
import Carousel from "react-simply-carousel";
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';
import TemplateOne from '../../components/Templates/TemplateOne.jsx';
import TemplateTwo from '../../components/Templates/TemplateTwo.jsx';
import TemplateThree from '../../components/Templates/TemplateThree.jsx';
import TemplateFour from '../../components/Templates/TemplateFour.jsx';


const styles = makeStyles(()=> ({
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


const Preview=(props)=> {
        const classes = styles();

        const selectedTemplate = (selectedValue) =>{
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
   
  return (
    <div className={classes.root}>
        {/* <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "center",
            userSelect: "none"
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={props.activeSlide}
        activeSlideProps={{
          style: {
            background: "blue"
          }
        }}
        onRequestChange={props.setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          className: "btn btn-backward",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        dotsNav={{
          show: false,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={4}
        speed={400}
      > */}

      
     
      <Grid container spacing={2}>
        <Grid item lg={12} md={12}>
       { selectedTemplate(props.activeSlide)}
        </Grid>
      
      </Grid>
      </div>
  )
}

const mapstatetoProps=(state)=>{
    // console.log(state.activeSlide)
    return{
        activeSlide: state.activeSlide
    }
    };
    
    const mapdispatchtoProps = (dispatch) =>{
        console.log('clicked')
    return{
        selectedTemHandler: (index) =>{
            dispatch(storeActions.selectedTemHandler(index))
    }
    }
}

export default connect(mapstatetoProps, mapdispatchtoProps)(Preview)

