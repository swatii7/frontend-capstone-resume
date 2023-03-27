import React, { useState , useRef} from "react";
import { connect } from "react-redux";
import * as storeActions from "../../store/action-creator/index.js";
import Carousel from "react-simply-carousel";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TemplateOne from "../../components/Templates/TemplateOne.jsx";
import TemplateTwo from "../../components/Templates/TemplateTwo.jsx";
import TemplateThree from "../../components/Templates/TemplateThree.jsx";
import TemplateFour from "../../components/Templates/TemplateFour.jsx";
import jsPDF from "jspdf";
import { styled } from "@mui/material/styles";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import html2canvas from "html2canvas";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
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

const Preview = (props) => {
  const classes = styles();
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const printableAreaRef = useRef(null);

  // to make function to show preview of selected template
  const selectedTemplate = (selectedValue) => {
    switch (selectedValue) {
      case 0:
        return <div ref={printableAreaRef} id="temOne" style={{padding:'25px 15px'}}><TemplateOne /></div>;

      case 1:
        return <div ref={printableAreaRef} id="temTwo" style={{padding:'25px 15px'}}><TemplateTwo /></div>;

      case 2:
        return <div ref={printableAreaRef} id="temThree" style={{padding:'25px 15px'}}><TemplateThree /></div>;

      case 3:
        return <div ref={printableAreaRef} id="temFour" style={{padding:'15px 5px'}}><TemplateFour /></div>;
    }
  };

  const FinalResume = (selectedId) => {
    switch (selectedId) {
      case 0:
        return "temOne";

      case 1:
        return "temTwo";

      case 2:
        return "temThree";

      case 3:
        return "temFour";
    }
  }

  //jsPDF Generator function
  const jspdfGenerator = () => {
    fileName;
    // var doc = new jsPDF('p','mm', 'a4');
    // doc
    //   .html(document.querySelector(FinalResume(props.activeSlide)))
      
    //   .then(() => {
    //     doc.save(fileName.replace(" ", "_") + ".pdf");
    //   });
    


        const divToPrint = FinalResume(props.activeSlide);

        const input = document.getElementById(divToPrint);




        // html2canvas(printableAreaRef.current).then(canvas => {
        //   const imgData = canvas.toDataURL('image/jpeg');
        //   const pdf = new jsPDF({
        //     orientation: 'p',
        //     unit: 'mm',
        //         format: [330.2, 382.6],
        //   });
        //   const imgProps = pdf.getImageProperties (imgData);
        //   const pdfWidth = pdf.internal.pageSize.getWidth();
        //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        //   pdf.addImage(imgData, 'jpeg', 0, 0, pdfWidth, pdfHeight);
        //   // pdf.save('template.pdf');
        //   window.open(pdf.output('bloburl'), '_blank');
        // });


    // html2canvas(input)
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'JPEG', 0, 0);
    //     // pdf.output('dataurlnewwindow');
    //     pdf.save(fileName.replace(" ", "_") + ".pdf");
    //   })
    // ;




        html2canvas(input)
            .then((canvas) => {
                var imgData = canvas.toDataURL('image/png');
                var imgWidth = 335;
                var pageHeight = 482.6;
                /// 1-> 375
                var imgWidth = 375;
                var pageHeight = 450.6;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                var doc = new jsPDF({
                    // unit: 'in', format: [10, 10], orientation: 'p'
                    orientation: 'p',
                    unit: 'mm',
                    format: [330.2, 450.6],
                 
                      
                  
                });
             var   margins={
                  top: 50,
                }
                var position = 0;
                doc.addImage(imgData, 'PNG', 1, 1, imgWidth - 2, imgHeight,);
                heightLeft -= pageHeight;
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', 2, position, imgWidth - 2, imgHeight-20,);
                    heightLeft -= pageHeight;
                }
                // doc.save('qrCode.pdf');
                window.open(doc.output('bloburl'), '_blank');
       
            });

  };

  return (
    <>
      <Typography
        variant="h3"
        style={{ color: "#9f4545", marginBottom: "80px" }}
      >
        Resume Preview
      </Typography>

      <Grid container className={classes.root}>
        <Grid item md={8} lg={8}>
          <div className="left-section" style={{marginLeft: '50px'}}>
            {selectedTemplate(props.activeSlide)}
          </div>
        </Grid>
        <Grid item md={4} lg={4}>
          <Grid container style={{ marginTop: "100px" }}>
            <Grid item lg={6} md={6}>
              <CustomInput
                label="Create File Name"
                name={fileName}
                type="text"
                placeholder="Swati Chaudhary"
                value={fileName}
                onchange={(e) => {
                  setFileName(e.target.value);
                }}
              />
            </Grid>
            <Grid item lg={6} md={6}>
              <div style={{ justifyContent: "flexStart", marginTop: "32px" }}>
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
                  onClick={() => jspdfGenerator()}
                >
                  Save
                </ColorButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapstatetoProps = (state) => {
  // console.log(state.activeSlide)
  return {
    activeSlide: state.activeSlide,
  };
};

const mapdispatchtoProps = (dispatch) => {
  return {
    selectedTemHandler: (index) => {
      dispatch(storeActions.selectedTemHandler(index));
    },
    tabChangeHandler: (value) => {
      dispatch(storeActions.tabBackIndex(value));
    },
  }
};

export default connect(mapstatetoProps, mapdispatchtoProps)(Preview);
