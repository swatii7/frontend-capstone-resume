import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSnackbar } from "notistack";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import TemplateFour from "../../components/Templates/TemplateFour.jsx";
import TemplateOne from "../../components/Templates/TemplateOne.jsx";
import TemplateThree from "../../components/Templates/TemplateThree.jsx";
import TemplateTwo from "../../components/Templates/TemplateTwo.jsx";
import * as storeActions from "../../store/action-creator/index.js";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Modal from '@mui/material/Modal';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(159, 69, 69)"),
  backgroundColor: "rgb(159, 69, 69)",
  "&:hover": {
    backgroundColor: "rgb(159, 69, 69)",
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  textAlign: 'center',
  p: 4,
};

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
    "@media(max-width: 600px)": {
      "& .sectionHeading": {
        fontSize: "2rem !important",
        textAlign: "center",
      },

      "& .MuiGrid-root.MuiGrid-container": {
        justifyContent: "center",
      },
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
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  // to make function to show preview of selected template
  const selectedTemplate = (selectedValue) => {
    switch (selectedValue) {
      case 0:
        return (
          <div
            ref={printableAreaRef}
            id="temOne"
            style={{ padding: "25px 15px" }}
          >
            <TemplateOne />
          </div>
        );

      case 1:
        return (
          <div
            ref={printableAreaRef}
            id="temTwo"
            style={{ padding: "25px 15px" }}
          >
            <TemplateTwo />
          </div>
        );

      case 2:
        return (
          <div
            ref={printableAreaRef}
            id="temThree"
            style={{ padding: "25px 15px" }}
          >
            <TemplateThree />
          </div>
        );

      case 3:
        return (
          <div
            ref={printableAreaRef}
            id="temFour"
            style={{ padding: "15px 5px" }}
          >
            <TemplateFour />
          </div>
        );
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
  };

  //jsPDF Generator function
  const jspdfGenerator = () => {
    //here condition is impose user must enter file name
    if (fileName === "") {
      enqueueSnackbar("Enter valid file name");
      return;
    }

    const divToPrint = FinalResume(props.activeSlide);

    const input = document.getElementById(divToPrint);

    html2canvas(input).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 400;
      var pageHeight = 490.6;
      var imgWidth = 375;
      var pageHeight = 450.6;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: [320, 350.6],
      });
      var position = 0;
      doc.addImage(imgData, "PNG", 1, 1, imgWidth - 1, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 2, position, imgWidth - 1, imgHeight - 20);
        heightLeft -= pageHeight;
      }
      doc.save(fileName.replace(" ") + ".pdf");
    });
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Typography
        className="sectionHeading"
        variant="h3"
        style={{ color: "#9f4545", marginBottom: "80px" }}
      >
        Resume Preview
      </Typography>

      <Grid container className={classes.root}>
        <Grid item xs={12} md={8} lg={8}>
          <div className="left-section" style={{ marginLeft: "50px" }}>
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
                placeholder="Enter file name"
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CheckCircleOutlineIcon fontSize="large" style={{color: 'rgb(159, 69, 69)'}} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your Resume has been Successfully Saved
          </Typography>
        </Box>
      </Modal>
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
    tabChangeHandler: (value) => {
      dispatch(storeActions.tabBackIndex(value));
    },
  };
};

export default connect(mapstatetoProps, mapdispatchtoProps)(Preview);
